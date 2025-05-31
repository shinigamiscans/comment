// src/middleware/rateLimiter.js
const Redis = require('ioredis');
const { RateLimiterRedis } = require('rate-limiter-flexible');

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

const limiter = new RateLimiterRedis({
  storeClient: redis,
  keyPrefix: 'like_or_comment_rl',
  points: 5,         
  duration: 60,      
  blockDuration: 300,
});

module.exports = () => {
  return async (ctx, next) => {
    // only apply to your comment endpoints
    if (
      (ctx.method === 'POST'  && ctx.path === '/api/comment') ||
      (ctx.method === 'PUT'   && /^\/api\/comment\/\w+/.test(ctx.path))
    ) {
      
      const key = ctx.state.userInfo?.objectId
			? `user:${ctx.state.userInfo.objectId}`
			: `ip:${ctx.ip}`;

      try {
        
        await limiter.consume(key, 1);
      } catch (_err) {
        if (ctx.state.userInfo) {
          await ctx.model('Users').where({ id: ctx.state.userInfo.objectId }).update(
            { is_banned: 1 },
          );
          await ctx.model('Comment').where({ user_id: ctx.state.userInfo.objectId }).delete();
        }
        ctx.status = 429;

        return (ctx.body = { success: false, message: 'You are doing that too often; you have been blocked.' });
      }
    }

    await next();
  };
};
