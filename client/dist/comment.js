const h=t=>`${t.replace(/\/?$/,"/")}api/`,i=(t,e="")=>{if(typeof t=="object"&&t.errno)throw new TypeError(`${e} failed with ${t.errno}: ${t.errmsg}`);return t},g=({serverURL:t,lang:e,paths:r,signal:o})=>fetch(`${h(t)}comment?type=count&url=${encodeURIComponent(r.join(","))}&lang=${e}`,{signal:o}).then(n=>n.json()).then(n=>i(n,"Get comment count").data),p=t=>{try{t=decodeURI(t)}catch{}return t},m=(t="")=>t.replace(/\/$/u,""),u=t=>/^(https?:)?\/\//.test(t),d=t=>{const e=m(t);return u(e)?e:`https://${e}`},$=t=>{t.name!=="AbortError"&&console.error(t.message)},f=t=>{const{path:e}=t.dataset;return e!=null&&e.length?e:null},v=({serverURL:t,path:e=window.location.pathname,selector:r=".waline-comment-count",lang:o=navigator.language})=>{const n=new AbortController,a=document.querySelectorAll(r);return a.length&&g({serverURL:d(t),paths:Array.from(a).map(c=>p(f(c)??e)),lang:o,signal:n.signal}).then(c=>{a.forEach((s,l)=>{s.innerText=c[l].toString()})}).catch($),n.abort.bind(n)},w="1.0.4";export{v as commentCount,w as version};
//# sourceMappingURL=comment.js.map
