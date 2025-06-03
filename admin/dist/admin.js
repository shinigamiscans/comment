(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";@import"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";.cropt-container .cr-image{z-index:-1;position:absolute;top:0;left:0;transform-origin:0 0;max-height:none;max-width:none;pointer-events:none}.cropt-container .cr-image,.cropt-container .cr-overlay{-webkit-user-select:none;user-select:none}.cropt-container .cr-boundary{position:relative;overflow:hidden;margin:0 auto;z-index:1;height:320px}.cropt-container .cr-boundary,.cropt-container .cr-slider-wrap{width:320px}.cropt-container .cr-viewport{position:absolute;box-sizing:border-box;border:2px solid #fff;margin:auto;top:0;bottom:0;right:0;left:0;box-shadow:0 0 2000px 2000px #00000080;z-index:0}.cropt-container .cr-vp-circle{border-radius:50%}.cropt-container .cr-overlay{z-index:1;position:absolute;cursor:move;touch-action:none}.cropt-container .cr-slider-wrap{margin:15px auto}.cropt-container .cr-slider{width:100%}/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Poppins,Helvetica Neue,Helvetica,Arial,sans-serif;background:#09090b;color:#bbb;font-size:87.5%;line-height:1.5}a{color:#4f46e5;text-decoration:none}a:hover{color:#4f46e5;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#27272a;color:#d4d4d8;border:1px solid #27272a;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:1px solid #4f46e5;background-color:#4f46e5;cursor:pointer;border-radius:8px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#6366f1}.primary:active,.primary.active{background-color:#4f46e5}.primary:disabled{background-color:#6366f1;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#18181b;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;border-radius:8px;width:150px}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#18181b;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-banned,a.operate-banned,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#18181b}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td,.typecho-list-table tbody tr.checked td{background-color:#09090b}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#4f46e5;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#4f46e5!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#4f46e5}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#4f46e5;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media (min-width: 768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media (min-width: 992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media (min-width: 1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media (max-width: 767px){.kit-hidden-mb{display:none}}@media (max-width: 991px){.kit-hidden-tb{display:none}}@media (max-width: 1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github a path,.account-item.twitter circle,.account-item.facebook a path,.account-item.weibo circle,.account-item.qq a path{fill:gray}.social-accounts a #google,.account-item.google:hover a #google,.account-item.google.bind a #google{--color-1: #4285F4;--color-2: #4285F4;--color-3: #FBBC05;--color-4: #EB4335}.account-item.shinigami:hover a #shinigami,.account-item.shinigami.bind a #shinigami{--color-shinigami-1: #000;--color-shinigami-2: #fff}.account-item.github:hover a path,.account-item.github.bind a path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover a path,.account-item.facebook.bind a path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover a path,.account-item.qq.bind a path{fill:#259be0}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}.cropt-container .cr-boundary{width:300px;height:300px;margin:0}.cropt-container .cr-slider-wrap{width:300px;margin:15px 0}.login-tab-container{min-width:300px}.login-tabs{display:flex;gap:10px;padding:20px 0;border-bottom:1px solid #222}.login-tab{flex:1;text-align:center;padding:10px 0;cursor:pointer;font-weight:700;transition:.3s}.login-tab.active{background:#4f46e5;border-radius:8px;color:#fff}.login-tab-content{display:none;padding:10px 0}.login-tab-content.active{display:block}.login-tab-title{text-align:center;margin:20px 0 10px;font-size:1.2em;font-weight:700}.login-social-content{display:flex;flex-direction:column;gap:10px}.btn-social{color:#000;padding:0 12px;height:40px;font-size:1.14286em;display:flex;align-items:center;justify-content:center;gap:8px;border-radius:8px;background-color:#fff;text-transform:capitalize}.btn-social:hover{color:#000}.change-password-wrapper{display:flex;flex-direction:column}.change-password-wrapper .change-password-label{display:flex;justify-content:space-between;align-items:center}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var _f = Object.defineProperty;
var Ca = (e) => {
  throw TypeError(e);
};
var $f = (e, t, n) => t in e ? _f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var nt = (e, t, n) => $f(e, typeof t != "symbol" ? t + "" : t, n), zo = (e, t, n) => t.has(e) || Ca("Cannot " + n);
var ne = (e, t, n) => (zo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), cn = (e, t, n) => t.has(e) ? Ca("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), qr = (e, t, n, r) => (zo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), z = (e, t, n) => (zo(e, t, "access private method"), n);
function If(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yc = { exports: {} }, go = {}, wc = { exports: {} }, b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr = Symbol.for("react.element"), Mf = Symbol.for("react.portal"), bf = Symbol.for("react.fragment"), Ff = Symbol.for("react.strict_mode"), Af = Symbol.for("react.profiler"), zf = Symbol.for("react.provider"), Df = Symbol.for("react.context"), Uf = Symbol.for("react.forward_ref"), Bf = Symbol.for("react.suspense"), Vf = Symbol.for("react.memo"), Hf = Symbol.for("react.lazy"), ka = Symbol.iterator;
function Kf(e) {
  return e === null || typeof e != "object" ? null : (e = ka && e[ka] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Sc = Object.assign, Ec = {};
function Vn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ec, this.updater = n || xc;
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cc() {
}
Cc.prototype = Vn.prototype;
function Cl(e, t, n) {
  this.props = e, this.context = t, this.refs = Ec, this.updater = n || xc;
}
var kl = Cl.prototype = new Cc();
kl.constructor = Cl;
Sc(kl, Vn.prototype);
kl.isPureReactComponent = !0;
var Na = Array.isArray, kc = Object.prototype.hasOwnProperty, Nl = { current: null }, Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) kc.call(t, r) && !Nc.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var a = Array(u), l = 0; l < u; l++) a[l] = arguments[l + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: Vr, type: e, key: o, ref: s, props: i, _owner: Nl.current };
}
function Wf(e, t) {
  return { $$typeof: Vr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function jl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function Qf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ja = /\/+/g;
function Do(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Qf("" + e.key) : t.toString(36);
}
function Ei(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Vr:
        case Mf:
          s = !0;
      }
  }
  if (s) return s = e, i = i(s), e = r === "" ? "." + Do(s, 0) : r, Na(i) ? (n = "", e != null && (n = e.replace(ja, "$&/") + "/"), Ei(i, t, n, "", function(l) {
    return l;
  })) : i != null && (jl(i) && (i = Wf(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ja, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Na(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var a = r + Do(o, u);
    s += Ei(o, t, n, a, i);
  }
  else if (a = Kf(e), typeof a == "function") for (e = a.call(e), u = 0; !(o = e.next()).done; ) o = o.value, a = r + Do(o, u++), s += Ei(o, t, n, a, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ei(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ei(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Yf(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null }, Ci = { transition: null }, Xf = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: Ci, ReactCurrentOwner: Nl };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
b.Children = { map: ei, forEach: function(e, t, n) {
  ei(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ei(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ei(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!jl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
b.Component = Vn;
b.Fragment = bf;
b.Profiler = Af;
b.PureComponent = Cl;
b.StrictMode = Ff;
b.Suspense = Bf;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
b.act = Pc;
b.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sc({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Nl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) kc.call(t, a) && !Nc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var l = 0; l < a; l++) u[l] = arguments[l + 2];
    r.children = u;
  }
  return { $$typeof: Vr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
b.createContext = function(e) {
  return e = { $$typeof: Df, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: zf, _context: e }, e.Consumer = e;
};
b.createElement = jc;
b.createFactory = function(e) {
  var t = jc.bind(null, e);
  return t.type = e, t;
};
b.createRef = function() {
  return { current: null };
};
b.forwardRef = function(e) {
  return { $$typeof: Uf, render: e };
};
b.isValidElement = jl;
b.lazy = function(e) {
  return { $$typeof: Hf, _payload: { _status: -1, _result: e }, _init: Yf };
};
b.memo = function(e, t) {
  return { $$typeof: Vf, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function(e) {
  var t = Ci.transition;
  Ci.transition = {};
  try {
    e();
  } finally {
    Ci.transition = t;
  }
};
b.unstable_act = Pc;
b.useCallback = function(e, t) {
  return xe.current.useCallback(e, t);
};
b.useContext = function(e) {
  return xe.current.useContext(e);
};
b.useDebugValue = function() {
};
b.useDeferredValue = function(e) {
  return xe.current.useDeferredValue(e);
};
b.useEffect = function(e, t) {
  return xe.current.useEffect(e, t);
};
b.useId = function() {
  return xe.current.useId();
};
b.useImperativeHandle = function(e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function(e, t) {
  return xe.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function(e, t) {
  return xe.current.useLayoutEffect(e, t);
};
b.useMemo = function(e, t) {
  return xe.current.useMemo(e, t);
};
b.useReducer = function(e, t, n) {
  return xe.current.useReducer(e, t, n);
};
b.useRef = function(e) {
  return xe.current.useRef(e);
};
b.useState = function(e) {
  return xe.current.useState(e);
};
b.useSyncExternalStore = function(e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function() {
  return xe.current.useTransition();
};
b.version = "18.3.1";
wc.exports = b;
var E = wc.exports;
const vo = /* @__PURE__ */ Lo(E), gs = /* @__PURE__ */ If({
  __proto__: null,
  default: vo
}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gf = E, Jf = Symbol.for("react.element"), Zf = Symbol.for("react.fragment"), qf = Object.prototype.hasOwnProperty, e0 = Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, t0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rc(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) qf.call(t, r) && !t0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Jf, type: e, key: o, ref: s, props: i, _owner: e0.current };
}
go.Fragment = Zf;
go.jsx = Rc;
go.jsxs = Rc;
yc.exports = go;
var p = yc.exports, Oc = { exports: {} }, $e = {}, Tc = { exports: {} }, _c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(R, $) {
    var _ = R.length;
    R.push($);
    e: for (; 0 < _; ) {
      var D = _ - 1 >>> 1, J = R[D];
      if (0 < i(J, $)) R[D] = $, R[_] = J, _ = D;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var $ = R[0], _ = R.pop();
    if (_ !== $) {
      R[0] = _;
      e: for (var D = 0, J = R.length, un = J >>> 1; D < un; ) {
        var Ut = 2 * (D + 1) - 1, Ao = R[Ut], Bt = Ut + 1, Zr = R[Bt];
        if (0 > i(Ao, _)) Bt < J && 0 > i(Zr, Ao) ? (R[D] = Zr, R[Bt] = _, D = Bt) : (R[D] = Ao, R[Ut] = _, D = Ut);
        else if (Bt < J && 0 > i(Zr, _)) R[D] = Zr, R[Bt] = _, D = Bt;
        else break e;
      }
    }
    return $;
  }
  function i(R, $) {
    var _ = R.sortIndex - $.sortIndex;
    return _ !== 0 ? _ : R.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, u = s.now();
    e.unstable_now = function() {
      return s.now() - u;
    };
  }
  var a = [], l = [], c = 1, d = null, f = 3, h = !1, v = !1, w = !1, x = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var $ = n(l); $ !== null; ) {
      if ($.callback === null) r(l);
      else if ($.startTime <= R) r(l), $.sortIndex = $.expirationTime, t(a, $);
      else break;
      $ = n(l);
    }
  }
  function g(R) {
    if (w = !1, y(R), !v) if (n(a) !== null) v = !0, Xe(S);
    else {
      var $ = n(l);
      $ !== null && ht(g, $.startTime - R);
    }
  }
  function S(R, $) {
    v = !1, w && (w = !1, L(N), N = -1), h = !0;
    var _ = f;
    try {
      for (y($), d = n(a); d !== null && (!(d.expirationTime > $) || R && !M()); ) {
        var D = d.callback;
        if (typeof D == "function") {
          d.callback = null, f = d.priorityLevel;
          var J = D(d.expirationTime <= $);
          $ = e.unstable_now(), typeof J == "function" ? d.callback = J : d === n(a) && r(a), y($);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var un = !0;
      else {
        var Ut = n(l);
        Ut !== null && ht(g, Ut.startTime - $), un = !1;
      }
      return un;
    } finally {
      d = null, f = _, h = !1;
    }
  }
  var C = !1, k = null, N = -1, O = 5, P = -1;
  function M() {
    return !(e.unstable_now() - P < O);
  }
  function G() {
    if (k !== null) {
      var R = e.unstable_now();
      P = R;
      var $ = !0;
      try {
        $ = k(!0, R);
      } finally {
        $ ? te() : (C = !1, k = null);
      }
    } else C = !1;
  }
  var te;
  if (typeof m == "function") te = function() {
    m(G);
  };
  else if (typeof MessageChannel < "u") {
    var ae = new MessageChannel(), H = ae.port2;
    ae.port1.onmessage = G, te = function() {
      H.postMessage(null);
    };
  } else te = function() {
    x(G, 0);
  };
  function Xe(R) {
    k = R, C || (C = !0, te());
  }
  function ht(R, $) {
    N = x(function() {
      R(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    v || h || (v = !0, Xe(S));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(R) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = f;
    }
    var _ = f;
    f = $;
    try {
      return R();
    } finally {
      f = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, $) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var _ = f;
    f = R;
    try {
      return $();
    } finally {
      f = _;
    }
  }, e.unstable_scheduleCallback = function(R, $, _) {
    var D = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? D + _ : D) : _ = D, R) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = _ + J, R = { id: c++, callback: $, priorityLevel: R, startTime: _, expirationTime: J, sortIndex: -1 }, _ > D ? (R.sortIndex = _, t(l, R), n(a) === null && R === n(l) && (w ? (L(N), N = -1) : w = !0, ht(g, _ - D))) : (R.sortIndex = J, t(a, R), v || h || (v = !0, Xe(S))), R;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(R) {
    var $ = f;
    return function() {
      var _ = f;
      f = $;
      try {
        return R.apply(this, arguments);
      } finally {
        f = _;
      }
    };
  };
})(_c);
Tc.exports = _c;
var n0 = Tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r0 = E, _e = n0;
function j(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var $c = /* @__PURE__ */ new Set(), xr = {};
function rn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (xr[e] = t, e = 0; e < t.length; e++) $c.add(t[e]);
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vs = Object.prototype.hasOwnProperty, i0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pa = {}, Ra = {};
function o0(e) {
  return vs.call(Ra, e) ? !0 : vs.call(Pa, e) ? !1 : i0.test(e) ? Ra[e] = !0 : (Pa[e] = !0, !1);
}
function s0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function l0(e, t, n, r) {
  if (t === null || typeof t > "u" || s0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Se(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new Se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pl = /[\-:]([a-z])/g;
function Rl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pl,
    Rl
  );
  fe[t] = new Se(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pl, Rl);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pl, Rl);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ol(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (l0(t, n, i, r) && (n = null), r || i === null ? o0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pt = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ti = Symbol.for("react.element"), hn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), Tl = Symbol.for("react.strict_mode"), ys = Symbol.for("react.profiler"), Ic = Symbol.for("react.provider"), Mc = Symbol.for("react.context"), _l = Symbol.for("react.forward_ref"), ws = Symbol.for("react.suspense"), xs = Symbol.for("react.suspense_list"), $l = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), bc = Symbol.for("react.offscreen"), Oa = Symbol.iterator;
function Qn(e) {
  return e === null || typeof e != "object" ? null : (e = Oa && e[Oa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Uo;
function lr(e) {
  if (Uo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Uo = t && t[1] || "";
  }
  return `
` + Uo + e;
}
var Bo = !1;
function Vo(e, t) {
  if (!e || Bo) return "";
  Bo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (l) {
        var r = l;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (l) {
        r = l;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l) {
        r = l;
      }
      e();
    }
  } catch (l) {
    if (l && r && typeof l.stack == "string") {
      for (var i = l.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, u = o.length - 1; 1 <= s && 0 <= u && i[s] !== o[u]; ) u--;
      for (; 1 <= s && 0 <= u; s--, u--) if (i[s] !== o[u]) {
        if (s !== 1 || u !== 1)
          do
            if (s--, u--, 0 > u || i[s] !== o[u]) {
              var a = `
` + i[s].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= s && 0 <= u);
        break;
      }
    }
  } finally {
    Bo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function a0(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Vo(e.type, !1), e;
    case 11:
      return e = Vo(e.type.render, !1), e;
    case 1:
      return e = Vo(e.type, !0), e;
    default:
      return "";
  }
}
function Ss(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case hn:
      return "Portal";
    case ys:
      return "Profiler";
    case Tl:
      return "StrictMode";
    case ws:
      return "Suspense";
    case xs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Mc:
      return (e.displayName || "Context") + ".Consumer";
    case Ic:
      return (e._context.displayName || "Context") + ".Provider";
    case _l:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case $l:
      return t = e.displayName || null, t !== null ? t : Ss(e.type) || "Memo";
    case gt:
      t = e._payload, e = e._init;
      try {
        return Ss(e(t));
      } catch {
      }
  }
  return null;
}
function u0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ss(t);
    case 8:
      return t === Tl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function c0(e) {
  var t = Fc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ni(e) {
  e._valueTracker || (e._valueTracker = c0(e));
}
function Ac(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Fc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ai(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Es(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ta(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zc(e, t) {
  t = t.checked, t != null && Ol(e, "checked", t, !1);
}
function Cs(e, t) {
  zc(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ks(e, t.type, n) : t.hasOwnProperty("defaultValue") && ks(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ks(e, t, n) {
  (t !== "number" || Ai(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function Pn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ns(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function $a(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(j(92));
      if (ar(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: $t(n) };
}
function Dc(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ia(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function js(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Uc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ri, Bc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ri = ri || document.createElement("div"), ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ri.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var dr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, d0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function(e) {
  d0.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), dr[t] = dr[e];
  });
});
function Vc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || dr.hasOwnProperty(e) && dr[e] ? ("" + t).trim() : t + "px";
}
function Hc(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Vc(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var f0 = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ps(e, t) {
  if (t) {
    if (f0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Rs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Os = null;
function Il(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ts = null, Rn = null, On = null;
function Ma(e) {
  if (e = Wr(e)) {
    if (typeof Ts != "function") throw Error(j(280));
    var t = e.stateNode;
    t && (t = Eo(t), Ts(e.stateNode, e.type, t));
  }
}
function Kc(e) {
  Rn ? On ? On.push(e) : On = [e] : Rn = e;
}
function Wc() {
  if (Rn) {
    var e = Rn, t = On;
    if (On = Rn = null, Ma(e), t) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Yc() {
}
var Ho = !1;
function Xc(e, t, n) {
  if (Ho) return e(t, n);
  Ho = !0;
  try {
    return Qc(e, t, n);
  } finally {
    Ho = !1, (Rn !== null || On !== null) && (Yc(), Wc());
  }
}
function Er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var _s = !1;
if (ut) try {
  var Yn = {};
  Object.defineProperty(Yn, "passive", { get: function() {
    _s = !0;
  } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
} catch {
  _s = !1;
}
function p0(e, t, n, r, i, o, s, u, a) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, l);
  } catch (c) {
    this.onError(c);
  }
}
var fr = !1, zi = null, Di = !1, $s = null, h0 = { onError: function(e) {
  fr = !0, zi = e;
} };
function m0(e, t, n, r, i, o, s, u, a) {
  fr = !1, zi = null, p0.apply(h0, arguments);
}
function L0(e, t, n, r, i, o, s, u, a) {
  if (m0.apply(this, arguments), fr) {
    if (fr) {
      var l = zi;
      fr = !1, zi = null;
    } else throw Error(j(198));
    Di || (Di = !0, $s = l);
  }
}
function on(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ba(e) {
  if (on(e) !== e) throw Error(j(188));
}
function g0(e) {
  var t = e.alternate;
  if (!t) {
    if (t = on(e), t === null) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ba(i), e;
        if (o === r) return ba(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var s = !1, u = i.child; u; ) {
        if (u === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (u === r) {
          s = !0, r = i, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!s) {
        for (u = o.child; u; ) {
          if (u === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (u === r) {
            s = !0, r = o, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Jc(e) {
  return e = g0(e), e !== null ? Zc(e) : null;
}
function Zc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qc = _e.unstable_scheduleCallback, Fa = _e.unstable_cancelCallback, v0 = _e.unstable_shouldYield, y0 = _e.unstable_requestPaint, Z = _e.unstable_now, w0 = _e.unstable_getCurrentPriorityLevel, Ml = _e.unstable_ImmediatePriority, ed = _e.unstable_UserBlockingPriority, Ui = _e.unstable_NormalPriority, x0 = _e.unstable_LowPriority, td = _e.unstable_IdlePriority, yo = null, et = null;
function S0(e) {
  if (et && typeof et.onCommitFiberRoot == "function") try {
    et.onCommitFiberRoot(yo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var We = Math.clz32 ? Math.clz32 : k0, E0 = Math.log, C0 = Math.LN2;
function k0(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (E0(e) / C0 | 0) | 0;
}
var ii = 64, oi = 4194304;
function ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Bi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var u = s & ~i;
    u !== 0 ? r = ur(u) : (o &= s, o !== 0 && (r = ur(o)));
  } else s = n & ~i, s !== 0 ? r = ur(s) : o !== 0 && (r = ur(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - We(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function N0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function j0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - We(o), u = 1 << s, a = i[s];
    a === -1 ? (!(u & n) || u & r) && (i[s] = N0(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Is(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function nd() {
  var e = ii;
  return ii <<= 1, !(ii & 4194240) && (ii = 64), e;
}
function Ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - We(t), e[t] = n;
}
function P0(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - We(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function bl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var A = 0;
function rd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var id, Fl, od, sd, ld, Ms = !1, si = [], Ct = null, kt = null, Nt = null, Cr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), yt = [], R0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Aa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      Cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      kr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Wr(t), t !== null && Fl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function O0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Ct = Xn(Ct, e, t, n, r, i), !0;
    case "dragenter":
      return kt = Xn(kt, e, t, n, r, i), !0;
    case "mouseover":
      return Nt = Xn(Nt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Cr.set(o, Xn(Cr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, kr.set(o, Xn(kr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function ad(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gc(n), t !== null) {
          e.blockedOn = t, ld(e.priority, function() {
            od(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ki(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Os = r, n.target.dispatchEvent(r), Os = null;
    } else return t = Wr(n), t !== null && Fl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function za(e, t, n) {
  ki(e) && n.delete(t);
}
function T0() {
  Ms = !1, Ct !== null && ki(Ct) && (Ct = null), kt !== null && ki(kt) && (kt = null), Nt !== null && ki(Nt) && (Nt = null), Cr.forEach(za), kr.forEach(za);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ms || (Ms = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, T0)));
}
function Nr(e) {
  function t(i) {
    return Gn(i, e);
  }
  if (0 < si.length) {
    Gn(si[0], e);
    for (var n = 1; n < si.length; n++) {
      var r = si[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && Gn(Ct, e), kt !== null && Gn(kt, e), Nt !== null && Gn(Nt, e), Cr.forEach(t), kr.forEach(t), n = 0; n < yt.length; n++) r = yt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yt.length && (n = yt[0], n.blockedOn === null); ) ad(n), n.blockedOn === null && yt.shift();
}
var Tn = pt.ReactCurrentBatchConfig, Vi = !0;
function _0(e, t, n, r) {
  var i = A, o = Tn.transition;
  Tn.transition = null;
  try {
    A = 1, Al(e, t, n, r);
  } finally {
    A = i, Tn.transition = o;
  }
}
function $0(e, t, n, r) {
  var i = A, o = Tn.transition;
  Tn.transition = null;
  try {
    A = 4, Al(e, t, n, r);
  } finally {
    A = i, Tn.transition = o;
  }
}
function Al(e, t, n, r) {
  if (Vi) {
    var i = bs(e, t, n, r);
    if (i === null) ts(e, t, r, Hi, n), Aa(e, r);
    else if (O0(i, e, t, n, r)) r.stopPropagation();
    else if (Aa(e, r), t & 4 && -1 < R0.indexOf(e)) {
      for (; i !== null; ) {
        var o = Wr(i);
        if (o !== null && id(o), o = bs(e, t, n, r), o === null && ts(e, t, r, Hi, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ts(e, t, r, null, n);
  }
}
var Hi = null;
function bs(e, t, n, r) {
  if (Hi = null, e = Il(r), e = Kt(e), e !== null) if (t = on(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Gc(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Hi = e, null;
}
function ud(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (w0()) {
        case Ml:
          return 1;
        case ed:
          return 4;
        case Ui:
        case x0:
          return 16;
        case td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xt = null, zl = null, Ni = null;
function cd() {
  if (Ni) return Ni;
  var e, t = zl, n = t.length, r, i = "value" in xt ? xt.value : xt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
  return Ni = i.slice(e, 1 < r ? 1 - r : void 0);
}
function ji(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function li() {
  return !0;
}
function Da() {
  return !1;
}
function Ie(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? li : Da, this.isPropagationStopped = Da, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = li);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = li);
  }, persist: function() {
  }, isPersistent: li }), t;
}
var Hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Dl = Ie(Hn), Kr = Y({}, Hn, { view: 0, detail: 0 }), I0 = Ie(Kr), Wo, Qo, Jn, wo = Y({}, Kr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ul, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (Wo = e.screenX - Jn.screenX, Qo = e.screenY - Jn.screenY) : Qo = Wo = 0, Jn = e), Wo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Qo;
} }), Ua = Ie(wo), M0 = Y({}, wo, { dataTransfer: 0 }), b0 = Ie(M0), F0 = Y({}, Kr, { relatedTarget: 0 }), Yo = Ie(F0), A0 = Y({}, Hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), z0 = Ie(A0), D0 = Y({}, Hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), U0 = Ie(D0), B0 = Y({}, Hn, { data: 0 }), Ba = Ie(B0), V0 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, H0 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, K0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function W0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = K0[e]) ? !!t[e] : !1;
}
function Ul() {
  return W0;
}
var Q0 = Y({}, Kr, { key: function(e) {
  if (e.key) {
    var t = V0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ji(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? H0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ul, charCode: function(e) {
  return e.type === "keypress" ? ji(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ji(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Y0 = Ie(Q0), X0 = Y({}, wo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Va = Ie(X0), G0 = Y({}, Kr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ul }), J0 = Ie(G0), Z0 = Y({}, Hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), q0 = Ie(Z0), ep = Y({}, wo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), tp = Ie(ep), np = [9, 13, 27, 32], Bl = ut && "CompositionEvent" in window, pr = null;
ut && "documentMode" in document && (pr = document.documentMode);
var rp = ut && "TextEvent" in window && !pr, dd = ut && (!Bl || pr && 8 < pr && 11 >= pr), Ha = " ", Ka = !1;
function fd(e, t) {
  switch (e) {
    case "keyup":
      return np.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function ip(e, t) {
  switch (e) {
    case "compositionend":
      return pd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ka = !0, Ha);
    case "textInput":
      return e = t.data, e === Ha && Ka ? null : e;
    default:
      return null;
  }
}
function op(e, t) {
  if (Ln) return e === "compositionend" || !Bl && fd(e, t) ? (e = cd(), Ni = zl = xt = null, Ln = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sp[e.type] : t === "textarea";
}
function hd(e, t, n, r) {
  Kc(r), t = Ki(t, "onChange"), 0 < t.length && (n = new Dl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hr = null, jr = null;
function lp(e) {
  kd(e, 0);
}
function xo(e) {
  var t = yn(e);
  if (Ac(t)) return e;
}
function ap(e, t) {
  if (e === "change") return t;
}
var md = !1;
if (ut) {
  var Xo;
  if (ut) {
    var Go = "oninput" in document;
    if (!Go) {
      var Qa = document.createElement("div");
      Qa.setAttribute("oninput", "return;"), Go = typeof Qa.oninput == "function";
    }
    Xo = Go;
  } else Xo = !1;
  md = Xo && (!document.documentMode || 9 < document.documentMode);
}
function Ya() {
  hr && (hr.detachEvent("onpropertychange", Ld), jr = hr = null);
}
function Ld(e) {
  if (e.propertyName === "value" && xo(jr)) {
    var t = [];
    hd(t, jr, e, Il(e)), Xc(lp, t);
  }
}
function up(e, t, n) {
  e === "focusin" ? (Ya(), hr = t, jr = n, hr.attachEvent("onpropertychange", Ld)) : e === "focusout" && Ya();
}
function cp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return xo(jr);
}
function dp(e, t) {
  if (e === "click") return xo(t);
}
function fp(e, t) {
  if (e === "input" || e === "change") return xo(t);
}
function pp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ye = typeof Object.is == "function" ? Object.is : pp;
function Pr(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!vs.call(t, i) || !Ye(e[i], t[i])) return !1;
  }
  return !0;
}
function Xa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ga(e, t) {
  var n = Xa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xa(n);
  }
}
function gd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function vd() {
  for (var e = window, t = Ai(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ai(e.document);
  }
  return t;
}
function Vl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function hp(e) {
  var t = vd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && gd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ga(n, o);
        var s = Ga(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var mp = ut && "documentMode" in document && 11 >= document.documentMode, gn = null, Fs = null, mr = null, As = !1;
function Ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  As || gn == null || gn !== Ai(r) || (r = gn, "selectionStart" in r && Vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && Pr(mr, r) || (mr = r, r = Ki(Fs, "onSelect"), 0 < r.length && (t = new Dl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function ai(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vn = { animationend: ai("Animation", "AnimationEnd"), animationiteration: ai("Animation", "AnimationIteration"), animationstart: ai("Animation", "AnimationStart"), transitionend: ai("Transition", "TransitionEnd") }, Jo = {}, yd = {};
ut && (yd = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
function So(e) {
  if (Jo[e]) return Jo[e];
  if (!vn[e]) return e;
  var t = vn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in yd) return Jo[e] = t[n];
  return e;
}
var wd = So("animationend"), xd = So("animationiteration"), Sd = So("animationstart"), Ed = So("transitionend"), Cd = /* @__PURE__ */ new Map(), Za = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function bt(e, t) {
  Cd.set(e, t), rn(t, [e]);
}
for (var Zo = 0; Zo < Za.length; Zo++) {
  var qo = Za[Zo], Lp = qo.toLowerCase(), gp = qo[0].toUpperCase() + qo.slice(1);
  bt(Lp, "on" + gp);
}
bt(wd, "onAnimationEnd");
bt(xd, "onAnimationIteration");
bt(Sd, "onAnimationStart");
bt("dblclick", "onDoubleClick");
bt("focusin", "onFocus");
bt("focusout", "onBlur");
bt(Ed, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vp = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function qa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, L0(r, t, void 0, e), e.currentTarget = null;
}
function kd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], a = u.instance, l = u.currentTarget;
        if (u = u.listener, a !== o && i.isPropagationStopped()) break e;
        qa(i, u, l), o = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], a = u.instance, l = u.currentTarget, u = u.listener, a !== o && i.isPropagationStopped()) break e;
        qa(i, u, l), o = a;
      }
    }
  }
  if (Di) throw e = $s, Di = !1, $s = null, e;
}
function B(e, t) {
  var n = t[Vs];
  n === void 0 && (n = t[Vs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Nd(t, e, 2, !1), n.add(r));
}
function es(e, t, n) {
  var r = 0;
  t && (r |= 4), Nd(n, e, r, t);
}
var ui = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
  if (!e[ui]) {
    e[ui] = !0, $c.forEach(function(n) {
      n !== "selectionchange" && (vp.has(n) || es(n, !1, e), es(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ui] || (t[ui] = !0, es("selectionchange", !1, t));
  }
}
function Nd(e, t, n, r) {
  switch (ud(t)) {
    case 1:
      var i = _0;
      break;
    case 4:
      i = $0;
      break;
    default:
      i = Al;
  }
  n = i.bind(null, t, n, e), i = void 0, !_s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function ts(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var u = r.stateNode.containerInfo;
      if (u === i || u.nodeType === 8 && u.parentNode === i) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        s = s.return;
      }
      for (; u !== null; ) {
        if (s = Kt(u), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = o = s;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Xc(function() {
    var l = o, c = Il(n), d = [];
    e: {
      var f = Cd.get(e);
      if (f !== void 0) {
        var h = Dl, v = e;
        switch (e) {
          case "keypress":
            if (ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Y0;
            break;
          case "focusin":
            v = "focus", h = Yo;
            break;
          case "focusout":
            v = "blur", h = Yo;
            break;
          case "beforeblur":
          case "afterblur":
            h = Yo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = b0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = J0;
            break;
          case wd:
          case xd:
          case Sd:
            h = z0;
            break;
          case Ed:
            h = q0;
            break;
          case "scroll":
            h = I0;
            break;
          case "wheel":
            h = tp;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = U0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Va;
        }
        var w = (t & 4) !== 0, x = !w && e === "scroll", L = w ? f !== null ? f + "Capture" : null : f;
        w = [];
        for (var m = l, y; m !== null; ) {
          y = m;
          var g = y.stateNode;
          if (y.tag === 5 && g !== null && (y = g, L !== null && (g = Er(m, L), g != null && w.push(Or(m, g, y)))), x) break;
          m = m.return;
        }
        0 < w.length && (f = new h(f, v, null, n, c), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== Os && (v = n.relatedTarget || n.fromElement) && (Kt(v) || v[ct])) break e;
        if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (v = n.relatedTarget || n.toElement, h = l, v = v ? Kt(v) : null, v !== null && (x = on(v), v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null, v = l), h !== v)) {
          if (w = Ua, g = "onMouseLeave", L = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (w = Va, g = "onPointerLeave", L = "onPointerEnter", m = "pointer"), x = h == null ? f : yn(h), y = v == null ? f : yn(v), f = new w(g, m + "leave", h, n, c), f.target = x, f.relatedTarget = y, g = null, Kt(c) === l && (w = new w(L, m + "enter", v, n, c), w.target = y, w.relatedTarget = x, g = w), x = g, h && v) t: {
            for (w = h, L = v, m = 0, y = w; y; y = dn(y)) m++;
            for (y = 0, g = L; g; g = dn(g)) y++;
            for (; 0 < m - y; ) w = dn(w), m--;
            for (; 0 < y - m; ) L = dn(L), y--;
            for (; m--; ) {
              if (w === L || L !== null && w === L.alternate) break t;
              w = dn(w), L = dn(L);
            }
            w = null;
          }
          else w = null;
          h !== null && eu(d, f, h, w, !1), v !== null && x !== null && eu(d, x, v, w, !0);
        }
      }
      e: {
        if (f = l ? yn(l) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var S = ap;
        else if (Wa(f)) if (md) S = fp;
        else {
          S = cp;
          var C = up;
        }
        else (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (S = dp);
        if (S && (S = S(e, l))) {
          hd(d, S, n, c);
          break e;
        }
        C && C(e, f, l), e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && ks(f, "number", f.value);
      }
      switch (C = l ? yn(l) : window, e) {
        case "focusin":
          (Wa(C) || C.contentEditable === "true") && (gn = C, Fs = l, mr = null);
          break;
        case "focusout":
          mr = Fs = gn = null;
          break;
        case "mousedown":
          As = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          As = !1, Ja(d, n, c);
          break;
        case "selectionchange":
          if (mp) break;
        case "keydown":
        case "keyup":
          Ja(d, n, c);
      }
      var k;
      if (Bl) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else Ln ? fd(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (dd && n.locale !== "ko" && (Ln || N !== "onCompositionStart" ? N === "onCompositionEnd" && Ln && (k = cd()) : (xt = c, zl = "value" in xt ? xt.value : xt.textContent, Ln = !0)), C = Ki(l, N), 0 < C.length && (N = new Ba(N, e, null, n, c), d.push({ event: N, listeners: C }), k ? N.data = k : (k = pd(n), k !== null && (N.data = k)))), (k = rp ? ip(e, n) : op(e, n)) && (l = Ki(l, "onBeforeInput"), 0 < l.length && (c = new Ba("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: l }), c.data = k));
    }
    kd(d, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Er(e, n), o != null && r.unshift(Or(e, o, i)), o = Er(e, t), o != null && r.push(Or(e, o, i))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function eu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, l = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && l !== null && (u = l, i ? (a = Er(n, o), a != null && s.unshift(Or(n, a, u))) : i || (a = Er(n, o), a != null && s.push(Or(n, a, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var yp = /\r\n?/g, wp = /\u0000|\uFFFD/g;
function tu(e) {
  return (typeof e == "string" ? e : "" + e).replace(yp, `
`).replace(wp, "");
}
function ci(e, t, n) {
  if (t = tu(t), tu(e) !== t && n) throw Error(j(425));
}
function Wi() {
}
var zs = null, Ds = null;
function Us(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bs = typeof setTimeout == "function" ? setTimeout : void 0, xp = typeof clearTimeout == "function" ? clearTimeout : void 0, nu = typeof Promise == "function" ? Promise : void 0, Sp = typeof queueMicrotask == "function" ? queueMicrotask : typeof nu < "u" ? function(e) {
  return nu.resolve(null).then(e).catch(Ep);
} : Bs;
function Ep(e) {
  setTimeout(function() {
    throw e;
  });
}
function ns(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Nr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kn = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + Kn, Tr = "__reactProps$" + Kn, ct = "__reactContainer$" + Kn, Vs = "__reactEvents$" + Kn, Cp = "__reactListeners$" + Kn, kp = "__reactHandles$" + Kn;
function Kt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ct] || n[Ze]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ru(e); e !== null; ) {
        if (n = e[Ze]) return n;
        e = ru(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Wr(e) {
  return e = e[Ze] || e[ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Eo(e) {
  return e[Tr] || null;
}
var Hs = [], wn = -1;
function Ft(e) {
  return { current: e };
}
function V(e) {
  0 > wn || (e.current = Hs[wn], Hs[wn] = null, wn--);
}
function U(e, t) {
  wn++, Hs[wn] = e.current, e.current = t;
}
var It = {}, ve = Ft(It), ke = Ft(!1), Gt = It;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function Qi() {
  V(ke), V(ve);
}
function iu(e, t, n) {
  if (ve.current !== It) throw Error(j(168));
  U(ve, t), U(ke, n);
}
function jd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, u0(e) || "Unknown", i));
  return Y({}, n, r);
}
function Yi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, Gt = ve.current, U(ve, e), U(ke, ke.current), !0;
}
function ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ? (e = jd(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, V(ke), V(ve), U(ve, e)) : V(ke), U(ke, n);
}
var ot = null, Co = !1, rs = !1;
function Pd(e) {
  ot === null ? ot = [e] : ot.push(e);
}
function Np(e) {
  Co = !0, Pd(e);
}
function At() {
  if (!rs && ot !== null) {
    rs = !0;
    var e = 0, t = A;
    try {
      var n = ot;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ot = null, Co = !1;
    } catch (i) {
      throw ot !== null && (ot = ot.slice(e + 1)), qc(Ml, At), i;
    } finally {
      A = t, rs = !1;
    }
  }
  return null;
}
var xn = [], Sn = 0, Xi = null, Gi = 0, Me = [], be = 0, Jt = null, st = 1, lt = "";
function Vt(e, t) {
  xn[Sn++] = Gi, xn[Sn++] = Xi, Xi = e, Gi = t;
}
function Rd(e, t, n) {
  Me[be++] = st, Me[be++] = lt, Me[be++] = Jt, Jt = e;
  var r = st;
  e = lt;
  var i = 32 - We(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - We(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, st = 1 << 32 - We(t) + i | n << i | r, lt = o + e;
  } else st = 1 << o | n << i | r, lt = e;
}
function Hl(e) {
  e.return !== null && (Vt(e, 1), Rd(e, 1, 0));
}
function Kl(e) {
  for (; e === Xi; ) Xi = xn[--Sn], xn[Sn] = null, Gi = xn[--Sn], xn[Sn] = null;
  for (; e === Jt; ) Jt = Me[--be], Me[be] = null, lt = Me[--be], Me[be] = null, st = Me[--be], Me[be] = null;
}
var Te = null, Re = null, K = !1, He = null;
function Od(e, t) {
  var n = Fe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Te = e, Re = jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Te = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Jt !== null ? { id: st, overflow: lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Fe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Te = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function Ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ws(e) {
  if (K) {
    var t = Re;
    if (t) {
      var n = t;
      if (!su(e, t)) {
        if (Ks(e)) throw Error(j(418));
        t = jt(n.nextSibling);
        var r = Te;
        t && su(e, t) ? Od(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Te = e);
      }
    } else {
      if (Ks(e)) throw Error(j(418));
      e.flags = e.flags & -4097 | 2, K = !1, Te = e;
    }
  }
}
function lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Te = e;
}
function di(e) {
  if (e !== Te) return !1;
  if (!K) return lu(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Us(e.type, e.memoizedProps)), t && (t = Re)) {
    if (Ks(e)) throw Td(), Error(j(418));
    for (; t; ) Od(e, t), t = jt(t.nextSibling);
  }
  if (lu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Te ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Td() {
  for (var e = Re; e; ) e = jt(e.nextSibling);
}
function An() {
  Re = Te = null, K = !1;
}
function Wl(e) {
  He === null ? He = [e] : He.push(e);
}
var jp = pt.ReactCurrentBatchConfig;
function Zn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var u = i.refs;
        s === null ? delete u[o] : u[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function fi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function au(e) {
  var t = e._init;
  return t(e._payload);
}
function _d(e) {
  function t(L, m) {
    if (e) {
      var y = L.deletions;
      y === null ? (L.deletions = [m], L.flags |= 16) : y.push(m);
    }
  }
  function n(L, m) {
    if (!e) return null;
    for (; m !== null; ) t(L, m), m = m.sibling;
    return null;
  }
  function r(L, m) {
    for (L = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? L.set(m.key, m) : L.set(m.index, m), m = m.sibling;
    return L;
  }
  function i(L, m) {
    return L = Tt(L, m), L.index = 0, L.sibling = null, L;
  }
  function o(L, m, y) {
    return L.index = y, e ? (y = L.alternate, y !== null ? (y = y.index, y < m ? (L.flags |= 2, m) : y) : (L.flags |= 2, m)) : (L.flags |= 1048576, m);
  }
  function s(L) {
    return e && L.alternate === null && (L.flags |= 2), L;
  }
  function u(L, m, y, g) {
    return m === null || m.tag !== 6 ? (m = cs(y, L.mode, g), m.return = L, m) : (m = i(m, y), m.return = L, m);
  }
  function a(L, m, y, g) {
    var S = y.type;
    return S === mn ? c(L, m, y.props.children, g, y.key) : m !== null && (m.elementType === S || typeof S == "object" && S !== null && S.$$typeof === gt && au(S) === m.type) ? (g = i(m, y.props), g.ref = Zn(L, m, y), g.return = L, g) : (g = Ii(y.type, y.key, y.props, null, L.mode, g), g.ref = Zn(L, m, y), g.return = L, g);
  }
  function l(L, m, y, g) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = ds(y, L.mode, g), m.return = L, m) : (m = i(m, y.children || []), m.return = L, m);
  }
  function c(L, m, y, g, S) {
    return m === null || m.tag !== 7 ? (m = Xt(y, L.mode, g, S), m.return = L, m) : (m = i(m, y), m.return = L, m);
  }
  function d(L, m, y) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = cs("" + m, L.mode, y), m.return = L, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ti:
          return y = Ii(m.type, m.key, m.props, null, L.mode, y), y.ref = Zn(L, null, m), y.return = L, y;
        case hn:
          return m = ds(m, L.mode, y), m.return = L, m;
        case gt:
          var g = m._init;
          return d(L, g(m._payload), y);
      }
      if (ar(m) || Qn(m)) return m = Xt(m, L.mode, y, null), m.return = L, m;
      fi(L, m);
    }
    return null;
  }
  function f(L, m, y, g) {
    var S = m !== null ? m.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return S !== null ? null : u(L, m, "" + y, g);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ti:
          return y.key === S ? a(L, m, y, g) : null;
        case hn:
          return y.key === S ? l(L, m, y, g) : null;
        case gt:
          return S = y._init, f(
            L,
            m,
            S(y._payload),
            g
          );
      }
      if (ar(y) || Qn(y)) return S !== null ? null : c(L, m, y, g, null);
      fi(L, y);
    }
    return null;
  }
  function h(L, m, y, g, S) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return L = L.get(y) || null, u(m, L, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ti:
          return L = L.get(g.key === null ? y : g.key) || null, a(m, L, g, S);
        case hn:
          return L = L.get(g.key === null ? y : g.key) || null, l(m, L, g, S);
        case gt:
          var C = g._init;
          return h(L, m, y, C(g._payload), S);
      }
      if (ar(g) || Qn(g)) return L = L.get(y) || null, c(m, L, g, S, null);
      fi(m, g);
    }
    return null;
  }
  function v(L, m, y, g) {
    for (var S = null, C = null, k = m, N = m = 0, O = null; k !== null && N < y.length; N++) {
      k.index > N ? (O = k, k = null) : O = k.sibling;
      var P = f(L, k, y[N], g);
      if (P === null) {
        k === null && (k = O);
        break;
      }
      e && k && P.alternate === null && t(L, k), m = o(P, m, N), C === null ? S = P : C.sibling = P, C = P, k = O;
    }
    if (N === y.length) return n(L, k), K && Vt(L, N), S;
    if (k === null) {
      for (; N < y.length; N++) k = d(L, y[N], g), k !== null && (m = o(k, m, N), C === null ? S = k : C.sibling = k, C = k);
      return K && Vt(L, N), S;
    }
    for (k = r(L, k); N < y.length; N++) O = h(k, L, N, y[N], g), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? N : O.key), m = o(O, m, N), C === null ? S = O : C.sibling = O, C = O);
    return e && k.forEach(function(M) {
      return t(L, M);
    }), K && Vt(L, N), S;
  }
  function w(L, m, y, g) {
    var S = Qn(y);
    if (typeof S != "function") throw Error(j(150));
    if (y = S.call(y), y == null) throw Error(j(151));
    for (var C = S = null, k = m, N = m = 0, O = null, P = y.next(); k !== null && !P.done; N++, P = y.next()) {
      k.index > N ? (O = k, k = null) : O = k.sibling;
      var M = f(L, k, P.value, g);
      if (M === null) {
        k === null && (k = O);
        break;
      }
      e && k && M.alternate === null && t(L, k), m = o(M, m, N), C === null ? S = M : C.sibling = M, C = M, k = O;
    }
    if (P.done) return n(
      L,
      k
    ), K && Vt(L, N), S;
    if (k === null) {
      for (; !P.done; N++, P = y.next()) P = d(L, P.value, g), P !== null && (m = o(P, m, N), C === null ? S = P : C.sibling = P, C = P);
      return K && Vt(L, N), S;
    }
    for (k = r(L, k); !P.done; N++, P = y.next()) P = h(k, L, N, P.value, g), P !== null && (e && P.alternate !== null && k.delete(P.key === null ? N : P.key), m = o(P, m, N), C === null ? S = P : C.sibling = P, C = P);
    return e && k.forEach(function(G) {
      return t(L, G);
    }), K && Vt(L, N), S;
  }
  function x(L, m, y, g) {
    if (typeof y == "object" && y !== null && y.type === mn && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ti:
          e: {
            for (var S = y.key, C = m; C !== null; ) {
              if (C.key === S) {
                if (S = y.type, S === mn) {
                  if (C.tag === 7) {
                    n(L, C.sibling), m = i(C, y.props.children), m.return = L, L = m;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === gt && au(S) === C.type) {
                  n(L, C.sibling), m = i(C, y.props), m.ref = Zn(L, C, y), m.return = L, L = m;
                  break e;
                }
                n(L, C);
                break;
              } else t(L, C);
              C = C.sibling;
            }
            y.type === mn ? (m = Xt(y.props.children, L.mode, g, y.key), m.return = L, L = m) : (g = Ii(y.type, y.key, y.props, null, L.mode, g), g.ref = Zn(L, m, y), g.return = L, L = g);
          }
          return s(L);
        case hn:
          e: {
            for (C = y.key; m !== null; ) {
              if (m.key === C) if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                n(L, m.sibling), m = i(m, y.children || []), m.return = L, L = m;
                break e;
              } else {
                n(L, m);
                break;
              }
              else t(L, m);
              m = m.sibling;
            }
            m = ds(y, L.mode, g), m.return = L, L = m;
          }
          return s(L);
        case gt:
          return C = y._init, x(L, m, C(y._payload), g);
      }
      if (ar(y)) return v(L, m, y, g);
      if (Qn(y)) return w(L, m, y, g);
      fi(L, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(L, m.sibling), m = i(m, y), m.return = L, L = m) : (n(L, m), m = cs(y, L.mode, g), m.return = L, L = m), s(L)) : n(L, m);
  }
  return x;
}
var zn = _d(!0), $d = _d(!1), Ji = Ft(null), Zi = null, En = null, Ql = null;
function Yl() {
  Ql = En = Zi = null;
}
function Xl(e) {
  var t = Ji.current;
  V(Ji), e._currentValue = t;
}
function Qs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function _n(e, t) {
  Zi = e, Ql = En = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function ze(e) {
  var t = e._currentValue;
  if (Ql !== e) if (e = { context: e, memoizedValue: t, next: null }, En === null) {
    if (Zi === null) throw Error(j(308));
    En = e, Zi.dependencies = { lanes: 0, firstContext: e };
  } else En = En.next = e;
  return t;
}
var Wt = null;
function Gl(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function Id(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Gl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, dt(e, r);
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var vt = !1;
function Jl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Md(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function at(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, dt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Gl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, dt(e, n);
}
function Pi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bl(e, n);
  }
}
function uu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function qi(e, t, n, r) {
  var i = e.updateQueue;
  vt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var a = u, l = a.next;
    a.next = null, s === null ? o = l : s.next = l, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== s && (u === null ? c.firstBaseUpdate = l : u.next = l, c.lastBaseUpdate = a));
  }
  if (o !== null) {
    var d = i.baseState;
    s = 0, c = l = a = null, u = o;
    do {
      var f = u.lane, h = u.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: h,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, w = u;
          switch (f = t, h = n, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, f = typeof v == "function" ? v.call(h, d, f) : v, f == null) break e;
              d = Y({}, d, f);
              break e;
            case 2:
              vt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [u] : f.push(u));
      } else h = { eventTime: h, lane: f, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, c === null ? (l = c = h, a = d) : c = c.next = h, s |= f;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null) break;
        f = u, u = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = d), i.baseState = a, i.firstBaseUpdate = l, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    qt |= s, e.lanes = s, e.memoizedState = d;
  }
}
function cu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(j(191, i));
      i.call(r);
    }
  }
}
var Qr = {}, tt = Ft(Qr), _r = Ft(Qr), $r = Ft(Qr);
function Qt(e) {
  if (e === Qr) throw Error(j(174));
  return e;
}
function Zl(e, t) {
  switch (U($r, t), U(_r, e), U(tt, Qr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : js(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = js(t, e);
  }
  V(tt), U(tt, t);
}
function Dn() {
  V(tt), V(_r), V($r);
}
function bd(e) {
  Qt($r.current);
  var t = Qt(tt.current), n = js(t, e.type);
  t !== n && (U(_r, e), U(tt, n));
}
function ql(e) {
  _r.current === e && (V(tt), V(_r));
}
var W = Ft(0);
function eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var is = [];
function ea() {
  for (var e = 0; e < is.length; e++) is[e]._workInProgressVersionPrimary = null;
  is.length = 0;
}
var Ri = pt.ReactCurrentDispatcher, os = pt.ReactCurrentBatchConfig, Zt = 0, Q = null, re = null, se = null, to = !1, Lr = !1, Ir = 0, Pp = 0;
function he() {
  throw Error(j(321));
}
function ta(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function na(e, t, n, r, i, o) {
  if (Zt = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ri.current = e === null || e.memoizedState === null ? _p : $p, e = n(r, i), Lr) {
    o = 0;
    do {
      if (Lr = !1, Ir = 0, 25 <= o) throw Error(j(301));
      o += 1, se = re = null, t.updateQueue = null, Ri.current = Ip, e = n(r, i);
    } while (Lr);
  }
  if (Ri.current = no, t = re !== null && re.next !== null, Zt = 0, se = re = Q = null, to = !1, t) throw Error(j(300));
  return e;
}
function ra() {
  var e = Ir !== 0;
  return Ir = 0, e;
}
function Je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? Q.memoizedState = se = e : se = se.next = e, se;
}
function De() {
  if (re === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? Q.memoizedState : se.next;
  if (t !== null) se = t, re = e;
  else {
    if (e === null) throw Error(j(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, se === null ? Q.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function Mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ss(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = re, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var u = s = null, a = null, l = o;
    do {
      var c = l.lane;
      if ((Zt & c) === c) a !== null && (a = a.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), r = l.hasEagerState ? l.eagerState : e(r, l.action);
      else {
        var d = {
          lane: c,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        a === null ? (u = a = d, s = r) : a = a.next = d, Q.lanes |= c, qt |= c;
      }
      l = l.next;
    } while (l !== null && l !== o);
    a === null ? s = r : a.next = u, Ye(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Q.lanes |= o, qt |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ls(e) {
  var t = De(), n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    Ye(o, t.memoizedState) || (Ce = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Fd() {
}
function Ad(e, t) {
  var n = Q, r = De(), i = t(), o = !Ye(r.memoizedState, i);
  if (o && (r.memoizedState = i, Ce = !0), r = r.queue, ia(Ud.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, br(9, Dd.bind(null, n, r, i, t), void 0, null), le === null) throw Error(j(349));
    Zt & 30 || zd(n, t, i);
  }
  return i;
}
function zd(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Dd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Bd(t) && Vd(e);
}
function Ud(e, t, n) {
  return n(function() {
    Bd(t) && Vd(e);
  });
}
function Bd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Vd(e) {
  var t = dt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function du(e) {
  var t = Je();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Tp.bind(null, Q, e), [t.memoizedState, e];
}
function br(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Hd() {
  return De().memoizedState;
}
function Oi(e, t, n, r) {
  var i = Je();
  Q.flags |= e, i.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r);
}
function ko(e, t, n, r) {
  var i = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (o = s.destroy, r !== null && ta(r, s.deps)) {
      i.memoizedState = br(t, n, o, r);
      return;
    }
  }
  Q.flags |= e, i.memoizedState = br(1 | t, n, o, r);
}
function fu(e, t) {
  return Oi(8390656, 8, e, t);
}
function ia(e, t) {
  return ko(2048, 8, e, t);
}
function Kd(e, t) {
  return ko(4, 2, e, t);
}
function Wd(e, t) {
  return ko(4, 4, e, t);
}
function Qd(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Yd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ko(4, 4, Qd.bind(null, t, e), n);
}
function oa() {
}
function Xd(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gd(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ta(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Jd(e, t, n) {
  return Zt & 21 ? (Ye(n, t) || (n = nd(), Q.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function Rp(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = os.transition;
  os.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, os.transition = r;
  }
}
function Zd() {
  return De().memoizedState;
}
function Op(e, t, n) {
  var r = Ot(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qd(e)) e1(t, n);
  else if (n = Id(e, t, n, r), n !== null) {
    var i = we();
    Qe(n, e, r, i), t1(n, t, r);
  }
}
function Tp(e, t, n) {
  var r = Ot(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qd(e)) e1(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (i.hasEagerState = !0, i.eagerState = u, Ye(u, s)) {
        var a = t.interleaved;
        a === null ? (i.next = i, Gl(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = Id(e, t, i, r), n !== null && (i = we(), Qe(n, e, r, i), t1(n, t, r));
  }
}
function qd(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function e1(e, t) {
  Lr = to = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function t1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bl(e, n);
  }
}
var no = { readContext: ze, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, _p = { readContext: ze, useCallback: function(e, t) {
  return Je().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ze, useEffect: fu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Oi(
    4194308,
    4,
    Qd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Oi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Oi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Je();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Je();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Op.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Je();
  return e = { current: e }, t.memoizedState = e;
}, useState: du, useDebugValue: oa, useDeferredValue: function(e) {
  return Je().memoizedState = e;
}, useTransition: function() {
  var e = du(!1), t = e[0];
  return e = Rp.bind(null, e[1]), Je().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, i = Je();
  if (K) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(j(349));
    Zt & 30 || zd(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, fu(Ud.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, br(9, Dd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Je(), t = le.identifierPrefix;
  if (K) {
    var n = lt, r = st;
    n = (r & ~(1 << 32 - We(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Pp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, $p = {
  readContext: ze,
  useCallback: Xd,
  useContext: ze,
  useEffect: ia,
  useImperativeHandle: Yd,
  useInsertionEffect: Kd,
  useLayoutEffect: Wd,
  useMemo: Gd,
  useReducer: ss,
  useRef: Hd,
  useState: function() {
    return ss(Mr);
  },
  useDebugValue: oa,
  useDeferredValue: function(e) {
    var t = De();
    return Jd(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = ss(Mr)[0], t = De().memoizedState;
    return [e, t];
  },
  useMutableSource: Fd,
  useSyncExternalStore: Ad,
  useId: Zd,
  unstable_isNewReconciler: !1
}, Ip = { readContext: ze, useCallback: Xd, useContext: ze, useEffect: ia, useImperativeHandle: Yd, useInsertionEffect: Kd, useLayoutEffect: Wd, useMemo: Gd, useReducer: ls, useRef: Hd, useState: function() {
  return ls(Mr);
}, useDebugValue: oa, useDeferredValue: function(e) {
  var t = De();
  return re === null ? t.memoizedState = e : Jd(t, re.memoizedState, e);
}, useTransition: function() {
  var e = ls(Mr)[0], t = De().memoizedState;
  return [e, t];
}, useMutableSource: Fd, useSyncExternalStore: Ad, useId: Zd, unstable_isNewReconciler: !1 };
function Be(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ys(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = Ot(e), o = at(r, i);
  o.payload = t, n != null && (o.callback = n), t = Pt(e, o, i), t !== null && (Qe(t, e, i, r), Pi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = Ot(e), o = at(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Pt(e, o, i), t !== null && (Qe(t, e, i, r), Pi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = Ot(e), i = at(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Pt(e, i, r), t !== null && (Qe(t, e, r, n), Pi(t, e, r));
} };
function pu(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(i, o) : !0;
}
function n1(e, t, n) {
  var r = !1, i = It, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ze(o) : (i = Ne(t) ? Gt : ve.current, r = t.contextTypes, o = (r = r != null) ? Fn(e, i) : It), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = No, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function hu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function Xs(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Jl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = ze(o) : (o = Ne(t) ? Gt : ve.current, i.context = Fn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ys(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && No.enqueueReplaceState(i, i.state, null), qi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Un(e, t) {
  try {
    var n = "", r = t;
    do
      n += a0(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function as(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Mp = typeof WeakMap == "function" ? WeakMap : Map;
function r1(e, t, n) {
  n = at(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    io || (io = !0, sl = r), Gs(e, t);
  }, n;
}
function i1(e, t, n) {
  n = at(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Gs(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Gs(e, t), typeof r != "function" && (Rt === null ? Rt = /* @__PURE__ */ new Set([this]) : Rt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function mu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mp();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Xp.bind(null, e, t, n), t.then(e, e));
}
function Lu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gu(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1), t.tag = 2, Pt(n, t, 1))), n.lanes |= 1), e);
}
var bp = pt.ReactCurrentOwner, Ce = !1;
function ye(e, t, n, r) {
  t.child = e === null ? $d(t, null, n, r) : zn(t, e.child, n, r);
}
function vu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return _n(t, i), r = na(e, t, n, r, o, i), n = ra(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ft(e, t, i)) : (K && n && Hl(t), t.flags |= 1, ye(e, t, r, i), t.child);
}
function yu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !pa(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, o1(e, t, o, r, i)) : (e = Ii(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pr, n(s, r) && e.ref === t.ref) return ft(e, t, i);
  }
  return t.flags |= 1, e = Tt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function o1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Pr(o, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ce = !0);
    else return t.lanes = e.lanes, ft(e, t, i);
  }
  return Js(e, t, n, r, i);
}
function s1(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(kn, Pe), Pe |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(kn, Pe), Pe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(kn, Pe), Pe |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(kn, Pe), Pe |= r;
  return ye(e, t, i, n), t.child;
}
function l1(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Js(e, t, n, r, i) {
  var o = Ne(n) ? Gt : ve.current;
  return o = Fn(t, o), _n(t, i), n = na(e, t, n, r, o, i), r = ra(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ft(e, t, i)) : (K && r && Hl(t), t.flags |= 1, ye(e, t, n, i), t.child);
}
function wu(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    Yi(t);
  } else o = !1;
  if (_n(t, i), t.stateNode === null) Ti(e, t), n1(t, n, r), Xs(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var a = s.context, l = n.contextType;
    typeof l == "object" && l !== null ? l = ze(l) : (l = Ne(n) ? Gt : ve.current, l = Fn(t, l));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || a !== l) && hu(t, s, r, l), vt = !1;
    var f = t.memoizedState;
    s.state = f, qi(t, r, s, i), a = t.memoizedState, u !== r || f !== a || ke.current || vt ? (typeof c == "function" && (Ys(t, n, c, r), a = t.memoizedState), (u = vt || pu(t, n, u, r, f, a, l)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = l, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Md(e, t), u = t.memoizedProps, l = t.type === t.elementType ? u : Be(t.type, u), s.props = l, d = t.pendingProps, f = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = ze(a) : (a = Ne(n) ? Gt : ve.current, a = Fn(t, a));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== d || f !== a) && hu(t, s, r, a), vt = !1, f = t.memoizedState, s.state = f, qi(t, r, s, i);
    var v = t.memoizedState;
    u !== d || f !== v || ke.current || vt ? (typeof h == "function" && (Ys(t, n, h, r), v = t.memoizedState), (l = vt || pu(t, n, l, r, f, v, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = l) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Zs(e, t, n, r, o, i);
}
function Zs(e, t, n, r, i, o) {
  l1(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ou(t, n, !1), ft(e, t, o);
  r = t.stateNode, bp.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = zn(t, e.child, null, o), t.child = zn(t, null, u, o)) : ye(e, t, u, o), t.memoizedState = r.state, i && ou(t, n, !0), t.child;
}
function a1(e) {
  var t = e.stateNode;
  t.pendingContext ? iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && iu(e, t.context, !1), Zl(e, t.containerInfo);
}
function xu(e, t, n, r, i) {
  return An(), Wl(i), t.flags |= 256, ye(e, t, n, r), t.child;
}
var qs = { dehydrated: null, treeContext: null, retryLane: 0 };
function el(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function u1(e, t, n) {
  var r = t.pendingProps, i = W.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(W, i & 1), e === null)
    return Ws(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Ro(s, r, 0, null), e = Xt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = el(n), t.memoizedState = qs, e) : sa(t, s));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null)) return Fp(e, t, s, r, u, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, u = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Tt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = Tt(u, o) : (o = Xt(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? el(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = qs, r;
  }
  return o = e.child, e = o.sibling, r = Tt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function sa(e, t) {
  return t = Ro({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function pi(e, t, n, r) {
  return r !== null && Wl(r), zn(t, e.child, null, n), e = sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Fp(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = as(Error(j(422))), pi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Ro({ mode: "visible", children: r.children }, i, 0, null), o = Xt(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && zn(t, e.child, null, s), t.child.memoizedState = el(s), t.memoizedState = qs, o);
  if (!(t.mode & 1)) return pi(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(j(419)), r = as(o, r, void 0), pi(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, Ce || u) {
    if (r = le, r !== null) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, dt(e, i), Qe(r, e, i, -1));
    }
    return fa(), r = as(Error(j(421))), pi(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Gp.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Re = jt(i.nextSibling), Te = t, K = !0, He = null, e !== null && (Me[be++] = st, Me[be++] = lt, Me[be++] = Jt, st = e.id, lt = e.overflow, Jt = t), t = sa(t, r.children), t.flags |= 4096, t);
}
function Su(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qs(e.return, t, n);
}
function us(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function c1(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (ye(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
      else if (e.tag === 19) Su(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (U(W, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && eo(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), us(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && eo(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      us(t, !0, n, null, o);
      break;
    case "together":
      us(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ti(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (e = t.child, n = Tt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Tt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ap(e, t, n) {
  switch (t.tag) {
    case 3:
      a1(t), An();
      break;
    case 5:
      bd(t);
      break;
    case 1:
      Ne(t.type) && Yi(t);
      break;
    case 4:
      Zl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(Ji, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? u1(e, t, n) : (U(W, W.current & 1), e = ft(e, t, n), e !== null ? e.sibling : null);
      U(W, W.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return c1(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, s1(e, t, n);
  }
  return ft(e, t, n);
}
var d1, tl, f1, p1;
d1 = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
tl = function() {
};
f1 = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Qt(tt.current);
    var o = null;
    switch (n) {
      case "input":
        i = Es(e, i), r = Es(e, r), o = [];
        break;
      case "select":
        i = Y({}, i, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Ns(e, i), r = Ns(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wi);
    }
    Ps(n, r);
    var s;
    n = null;
    for (l in i) if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null) if (l === "style") {
      var u = i[l];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (xr.hasOwnProperty(l) ? o || (o = []) : (o = o || []).push(l, null));
    for (l in r) {
      var a = r[l];
      if (u = i != null ? i[l] : void 0, r.hasOwnProperty(l) && a !== u && (a != null || u != null)) if (l === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && u[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (o || (o = []), o.push(
        l,
        n
      )), n = a;
      else l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(l, a)) : l === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(l, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (xr.hasOwnProperty(l) ? (a != null && l === "onScroll" && B("scroll", e), o || u === a || (o = [])) : (o = o || []).push(l, a));
    }
    n && (o = o || []).push("style", n);
    var l = o;
    (t.updateQueue = l) && (t.flags |= 4);
  }
};
p1 = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qn(e, t) {
  if (!K) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function zp(e, t, n) {
  var r = t.pendingProps;
  switch (Kl(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Ne(t.type) && Qi(), me(t), null;
    case 3:
      return r = t.stateNode, Dn(), V(ke), V(ve), ea(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (di(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, He !== null && (ul(He), He = null))), tl(e, t), me(t), null;
    case 5:
      ql(t);
      var i = Qt($r.current);
      if (n = t.type, e !== null && t.stateNode != null) f1(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return me(t), null;
        }
        if (e = Qt(tt.current), di(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ze] = t, r[Tr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < cr.length; i++) B(cr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Ta(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              $a(r, o), B("invalid", r);
          }
          Ps(n, o), i = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ci(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ci(
              r.textContent,
              u,
              e
            ), i = ["children", "" + u]) : xr.hasOwnProperty(s) && u != null && s === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              ni(r), _a(r, o, !0);
              break;
            case "textarea":
              ni(r), Ia(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Wi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Uc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ze] = t, e[Tr] = r, d1(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Rs(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < cr.length; i++) B(cr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), i = r;
                break;
              case "details":
                B("toggle", e), i = r;
                break;
              case "input":
                Ta(e, r), i = Es(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Y({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                $a(e, r), i = Ns(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Ps(n, i), u = i;
            for (o in u) if (u.hasOwnProperty(o)) {
              var a = u[o];
              o === "style" ? Hc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Bc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Sr(e, a) : typeof a == "number" && Sr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (xr.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Ol(e, o, a, s));
            }
            switch (n) {
              case "input":
                ni(e), _a(e, r, !1);
                break;
              case "textarea":
                ni(e), Ia(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Pn(e, !!r.multiple, o, !1) : r.defaultValue != null && Pn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Wi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) p1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (n = Qt($r.current), Qt(tt.current), di(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ze] = t, (o = r.nodeValue !== n) && (e = Te, e !== null)) switch (e.tag) {
            case 3:
              ci(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ci(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ze] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (V(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && Re !== null && t.mode & 1 && !(t.flags & 128)) Td(), An(), t.flags |= 98560, o = !1;
        else if (o = di(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(j(317));
            o[Ze] = t;
          } else An(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), o = !1;
        } else He !== null && (ul(He), He = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? ie === 0 && (ie = 3) : fa())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Dn(), tl(e, t), e === null && Rr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Xl(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && Qi(), me(t), null;
    case 19:
      if (V(W), o = t.memoizedState, o === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) qn(o, !1);
      else {
        if (ie !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = eo(e), s !== null) {
            for (t.flags |= 128, qn(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(W, W.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Z() > Bn && (t.flags |= 128, r = !0, qn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = eo(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !K) return me(t), null;
        } else 2 * Z() - o.renderingStartTime > Bn && n !== 1073741824 && (t.flags |= 128, r = !0, qn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Z(), t.sibling = null, n = W.current, U(W, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return da(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Pe & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Dp(e, t) {
  switch (Kl(t), t.tag) {
    case 1:
      return Ne(t.type) && Qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), V(ke), V(ve), ea(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ql(t), null;
    case 13:
      if (V(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(j(340));
        An();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(W), null;
    case 4:
      return Dn(), null;
    case 10:
      return Xl(t.type._context), null;
    case 22:
    case 23:
      return da(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hi = !1, ge = !1, Up = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function Cn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function nl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Eu = !1;
function Bp(e, t) {
  if (zs = Vi, e = vd(), Vl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, u = -1, a = -1, l = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (u = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (a = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (h = d.firstChild) !== null; )
            f = d, d = h;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++l === i && (u = s), f === o && ++c === r && (a = s), (h = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = h;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ds = { focusedElem: e, selectionRange: n }, Vi = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
  else for (; T !== null; ) {
    t = T;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var w = v.memoizedProps, x = v.memoizedState, L = t.stateNode, m = L.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Be(t.type, w), x);
            L.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(j(163));
      }
    } catch (g) {
      X(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, T = e;
      break;
    }
    T = t.return;
  }
  return v = Eu, Eu = !1, v;
}
function gr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && nl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function jo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function h1(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, h1(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ze], delete t[Tr], delete t[Vs], delete t[Cp], delete t[kp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function m1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || m1(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wi));
  else if (r !== 4 && (e = e.child, e !== null)) for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), e = e.sibling;
}
function ol(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (ol(e, t, n), e = e.sibling; e !== null; ) ol(e, t, n), e = e.sibling;
}
var ue = null, Ve = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; ) L1(e, t, n), n = n.sibling;
}
function L1(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function") try {
    et.onCommitFiberUnmount(yo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ge || Cn(n, t);
    case 6:
      var r = ue, i = Ve;
      ue = null, mt(e, t, n), ue = r, Ve = i, ue !== null && (Ve ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Ve ? (e = ue, n = n.stateNode, e.nodeType === 8 ? ns(e.parentNode, n) : e.nodeType === 1 && ns(e, n), Nr(e)) : ns(ue, n.stateNode));
      break;
    case 4:
      r = ue, i = Ve, ue = n.stateNode.containerInfo, Ve = !0, mt(e, t, n), ue = r, Ve = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && nl(n, t, s), i = i.next;
        } while (i !== r);
      }
      mt(e, t, n);
      break;
    case 1:
      if (!ge && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        X(n, t, u);
      }
      mt(e, t, n);
      break;
    case 21:
      mt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, mt(e, t, n), ge = r) : mt(e, t, n);
      break;
    default:
      mt(e, t, n);
  }
}
function ku(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Up()), t.forEach(function(r) {
      var i = Jp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, s = t, u = s;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ue = u.stateNode, Ve = !1;
            break e;
          case 3:
            ue = u.stateNode.containerInfo, Ve = !0;
            break e;
          case 4:
            ue = u.stateNode.containerInfo, Ve = !0;
            break e;
        }
        u = u.return;
      }
      if (ue === null) throw Error(j(160));
      L1(o, s, i), ue = null, Ve = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (l) {
      X(i, t, l);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) g1(t, e), t = t.sibling;
}
function g1(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ue(t, e), Ge(e), r & 4) {
        try {
          gr(3, e, e.return), jo(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          gr(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      Ue(t, e), Ge(e), r & 512 && n !== null && Cn(n, n.return);
      break;
    case 5:
      if (Ue(t, e), Ge(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Sr(i, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && o.type === "radio" && o.name != null && zc(i, o), Rs(u, s);
          var l = Rs(u, o);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], d = a[s + 1];
            c === "style" ? Hc(i, d) : c === "dangerouslySetInnerHTML" ? Bc(i, d) : c === "children" ? Sr(i, d) : Ol(i, c, d, l);
          }
          switch (u) {
            case "input":
              Cs(i, o);
              break;
            case "textarea":
              Dc(i, o);
              break;
            case "select":
              var f = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var h = o.value;
              h != null ? Pn(i, !!o.multiple, h, !1) : f !== !!o.multiple && (o.defaultValue != null ? Pn(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Pn(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Tr] = o;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Ue(t, e), Ge(e), r & 4) {
        if (e.stateNode === null) throw Error(j(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Ue(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Nr(t.containerInfo);
      } catch (w) {
        X(e, e.return, w);
      }
      break;
    case 4:
      Ue(t, e), Ge(e);
      break;
    case 13:
      Ue(t, e), Ge(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ua = Z())), r & 4 && ku(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (l = ge) || c, Ue(t, e), ge = l) : Ue(t, e), Ge(e), r & 8192) {
        if (l = e.memoizedState !== null, (e.stateNode.isHidden = l) && !c && e.mode & 1) for (T = e, c = e.child; c !== null; ) {
          for (d = T = c; T !== null; ) {
            switch (f = T, h = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                gr(4, f, f.return);
                break;
              case 1:
                Cn(f, f.return);
                var v = f.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    X(r, n, w);
                  }
                }
                break;
              case 5:
                Cn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  ju(d);
                  continue;
                }
            }
            h !== null ? (h.return = f, T = h) : ju(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                i = d.stateNode, l ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, a = d.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Vc("display", s));
              } catch (w) {
                X(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = l ? "" : d.memoizedProps;
            } catch (w) {
              X(e, e.return, w);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      Ue(t, e), Ge(e), r & 4 && ku(e);
      break;
    case 21:
      break;
    default:
      Ue(
        t,
        e
      ), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (m1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Sr(i, ""), r.flags &= -33);
          var o = Cu(e);
          ol(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Cu(e);
          il(e, u, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vp(e, t, n) {
  T = e, v1(e);
}
function v1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var i = T, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || hi;
      if (!s) {
        var u = i.alternate, a = u !== null && u.memoizedState !== null || ge;
        u = hi;
        var l = ge;
        if (hi = s, (ge = a) && !l) for (T = i; T !== null; ) s = T, a = s.child, s.tag === 22 && s.memoizedState !== null ? Pu(i) : a !== null ? (a.return = s, T = a) : Pu(i);
        for (; o !== null; ) T = o, v1(o), o = o.sibling;
        T = i, hi = u, ge = l;
      }
      Nu(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, T = o) : Nu(e);
  }
}
function Nu(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ge || jo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ge) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Be(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && cu(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              cu(t, s, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var l = t.alternate;
              if (l !== null) {
                var c = l.memoizedState;
                if (c !== null) {
                  var d = c.dehydrated;
                  d !== null && Nr(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(j(163));
        }
        ge || t.flags & 512 && rl(t);
      } catch (f) {
        X(t, t.return, f);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function ju(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function Pu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jo(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            rl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, T = u;
      break;
    }
    T = t.return;
  }
}
var Hp = Math.ceil, ro = pt.ReactCurrentDispatcher, la = pt.ReactCurrentOwner, Ae = pt.ReactCurrentBatchConfig, F = 0, le = null, q = null, de = 0, Pe = 0, kn = Ft(0), ie = 0, Fr = null, qt = 0, Po = 0, aa = 0, vr = null, Ee = null, ua = 0, Bn = 1 / 0, it = null, io = !1, sl = null, Rt = null, mi = !1, St = null, oo = 0, yr = 0, ll = null, _i = -1, $i = 0;
function we() {
  return F & 6 ? Z() : _i !== -1 ? _i : _i = Z();
}
function Ot(e) {
  return e.mode & 1 ? F & 2 && de !== 0 ? de & -de : jp.transition !== null ? ($i === 0 && ($i = nd()), $i) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ud(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < yr) throw yr = 0, ll = null, Error(j(185));
  Hr(e, n, r), (!(F & 2) || e !== le) && (e === le && (!(F & 2) && (Po |= n), ie === 4 && wt(e, de)), je(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Bn = Z() + 500, Co && At()));
}
function je(e, t) {
  var n = e.callbackNode;
  j0(e, t);
  var r = Bi(e, e === le ? de : 0);
  if (r === 0) n !== null && Fa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Fa(n), t === 1) e.tag === 0 ? Np(Ru.bind(null, e)) : Pd(Ru.bind(null, e)), Sp(function() {
      !(F & 6) && At();
    }), n = null;
    else {
      switch (rd(r)) {
        case 1:
          n = Ml;
          break;
        case 4:
          n = ed;
          break;
        case 16:
          n = Ui;
          break;
        case 536870912:
          n = td;
          break;
        default:
          n = Ui;
      }
      n = N1(n, y1.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function y1(e, t) {
  if (_i = -1, $i = 0, F & 6) throw Error(j(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n) return null;
  var r = Bi(e, e === le ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = so(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = x1();
    (le !== e || de !== t) && (it = null, Bn = Z() + 500, Yt(e, t));
    do
      try {
        Qp();
        break;
      } catch (u) {
        w1(e, u);
      }
    while (!0);
    Yl(), ro.current = o, F = i, q !== null ? t = 0 : (le = null, de = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (i = Is(e), i !== 0 && (r = i, t = al(e, i))), t === 1) throw n = Fr, Yt(e, 0), wt(e, r), je(e, Z()), n;
    if (t === 6) wt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Kp(i) && (t = so(e, r), t === 2 && (o = Is(e), o !== 0 && (r = o, t = al(e, o))), t === 1)) throw n = Fr, Yt(e, 0), wt(e, r), je(e, Z()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Ht(e, Ee, it);
          break;
        case 3:
          if (wt(e, r), (r & 130023424) === r && (t = ua + 500 - Z(), 10 < t)) {
            if (Bi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Bs(Ht.bind(null, e, Ee, it), t);
            break;
          }
          Ht(e, Ee, it);
          break;
        case 4:
          if (wt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - We(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bs(Ht.bind(null, e, Ee, it), r);
            break;
          }
          Ht(e, Ee, it);
          break;
        case 5:
          Ht(e, Ee, it);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return je(e, Z()), e.callbackNode === n ? y1.bind(null, e) : null;
}
function al(e, t) {
  var n = vr;
  return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), e = so(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && ul(t)), e;
}
function ul(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e);
}
function Kp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Ye(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function wt(e, t) {
  for (t &= ~aa, t &= ~Po, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - We(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ru(e) {
  if (F & 6) throw Error(j(327));
  $n();
  var t = Bi(e, 0);
  if (!(t & 1)) return je(e, Z()), null;
  var n = so(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Is(e);
    r !== 0 && (t = r, n = al(e, r));
  }
  if (n === 1) throw n = Fr, Yt(e, 0), wt(e, t), je(e, Z()), n;
  if (n === 6) throw Error(j(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, Ee, it), je(e, Z()), null;
}
function ca(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Bn = Z() + 500, Co && At());
  }
}
function en(e) {
  St !== null && St.tag === 0 && !(F & 6) && $n();
  var t = F;
  F |= 1;
  var n = Ae.transition, r = A;
  try {
    if (Ae.transition = null, A = 1, e) return e();
  } finally {
    A = r, Ae.transition = n, F = t, !(F & 6) && At();
  }
}
function da() {
  Pe = kn.current, V(kn);
}
function Yt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, xp(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (Kl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qi();
        break;
      case 3:
        Dn(), V(ke), V(ve), ea();
        break;
      case 5:
        ql(r);
        break;
      case 4:
        Dn();
        break;
      case 13:
        V(W);
        break;
      case 19:
        V(W);
        break;
      case 10:
        Xl(r.type._context);
        break;
      case 22:
      case 23:
        da();
    }
    n = n.return;
  }
  if (le = e, q = e = Tt(e.current, null), de = Pe = t, ie = 0, Fr = null, aa = Po = qt = 0, Ee = vr = null, Wt !== null) {
    for (t = 0; t < Wt.length; t++) if (n = Wt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = i, r.next = s;
      }
      n.pending = r;
    }
    Wt = null;
  }
  return e;
}
function w1(e, t) {
  do {
    var n = q;
    try {
      if (Yl(), Ri.current = no, to) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        to = !1;
      }
      if (Zt = 0, se = re = Q = null, Lr = !1, Ir = 0, la.current = null, n === null || n.return === null) {
        ie = 1, Fr = t, q = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, a = t;
        if (t = de, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var l = a, c = u, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var h = Lu(s);
          if (h !== null) {
            h.flags &= -257, gu(h, s, u, o, t), h.mode & 1 && mu(o, l, t), t = h, a = l;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              mu(o, l, t), fa();
              break e;
            }
            a = Error(j(426));
          }
        } else if (K && u.mode & 1) {
          var x = Lu(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), gu(x, s, u, o, t), Wl(Un(a, u));
            break e;
          }
        }
        o = a = Un(a, u), ie !== 4 && (ie = 2), vr === null ? vr = [o] : vr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var L = r1(o, a, t);
              uu(o, L);
              break e;
            case 1:
              u = a;
              var m = o.type, y = o.stateNode;
              if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Rt === null || !Rt.has(y)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = i1(o, u, t);
                uu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      E1(n);
    } catch (S) {
      t = S, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function x1() {
  var e = ro.current;
  return ro.current = no, e === null ? no : e;
}
function fa() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), le === null || !(qt & 268435455) && !(Po & 268435455) || wt(le, de);
}
function so(e, t) {
  var n = F;
  F |= 2;
  var r = x1();
  (le !== e || de !== t) && (it = null, Yt(e, t));
  do
    try {
      Wp();
      break;
    } catch (i) {
      w1(e, i);
    }
  while (!0);
  if (Yl(), F = n, ro.current = r, q !== null) throw Error(j(261));
  return le = null, de = 0, ie;
}
function Wp() {
  for (; q !== null; ) S1(q);
}
function Qp() {
  for (; q !== null && !v0(); ) S1(q);
}
function S1(e) {
  var t = k1(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps, t === null ? E1(e) : q = t, la.current = null;
}
function E1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Dp(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, q = null;
        return;
      }
    } else if (n = zp(n, t, Pe), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Ht(e, t, n) {
  var r = A, i = Ae.transition;
  try {
    Ae.transition = null, A = 1, Yp(e, t, n, r);
  } finally {
    Ae.transition = i, A = r;
  }
  return null;
}
function Yp(e, t, n, r) {
  do
    $n();
  while (St !== null);
  if (F & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (P0(e, o), e === le && (q = le = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || mi || (mi = !0, N1(Ui, function() {
    return $n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ae.transition, Ae.transition = null;
    var s = A;
    A = 1;
    var u = F;
    F |= 4, la.current = null, Bp(e, n), g1(n, e), hp(Ds), Vi = !!zs, Ds = zs = null, e.current = n, Vp(n), y0(), F = u, A = s, Ae.transition = o;
  } else e.current = n;
  if (mi && (mi = !1, St = e, oo = i), o = e.pendingLanes, o === 0 && (Rt = null), S0(n.stateNode), je(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (io) throw io = !1, e = sl, sl = null, e;
  return oo & 1 && e.tag !== 0 && $n(), o = e.pendingLanes, o & 1 ? e === ll ? yr++ : (yr = 0, ll = e) : yr = 0, At(), null;
}
function $n() {
  if (St !== null) {
    var e = rd(oo), t = Ae.transition, n = A;
    try {
      if (Ae.transition = null, A = 16 > e ? 16 : e, St === null) var r = !1;
      else {
        if (e = St, St = null, oo = 0, F & 6) throw Error(j(331));
        var i = F;
        for (F |= 4, T = e.current; T !== null; ) {
          var o = T, s = o.child;
          if (T.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var l = u[a];
                for (T = l; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gr(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, T = d;
                  else for (; T !== null; ) {
                    c = T;
                    var f = c.sibling, h = c.return;
                    if (h1(c), c === l) {
                      T = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = h, T = f;
                      break;
                    }
                    T = h;
                  }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var x = w.sibling;
                    w.sibling = null, w = x;
                  } while (w !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, T = s;
          else e: for (; T !== null; ) {
            if (o = T, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                gr(9, o, o.return);
            }
            var L = o.sibling;
            if (L !== null) {
              L.return = o.return, T = L;
              break e;
            }
            T = o.return;
          }
        }
        var m = e.current;
        for (T = m; T !== null; ) {
          s = T;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) y.return = s, T = y;
          else e: for (s = m; T !== null; ) {
            if (u = T, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  jo(9, u);
              }
            } catch (S) {
              X(u, u.return, S);
            }
            if (u === s) {
              T = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, T = g;
              break e;
            }
            T = u.return;
          }
        }
        if (F = i, At(), et && typeof et.onPostCommitFiberRoot == "function") try {
          et.onPostCommitFiberRoot(yo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      A = n, Ae.transition = t;
    }
  }
  return !1;
}
function Ou(e, t, n) {
  t = Un(n, t), t = r1(e, t, 1), e = Pt(e, t, 1), t = we(), e !== null && (Hr(e, 1, t), je(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Ou(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ou(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
        e = Un(n, e), e = i1(t, e, 1), t = Pt(t, e, 1), e = we(), t !== null && (Hr(t, 1, e), je(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Xp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (de & n) === n && (ie === 4 || ie === 3 && (de & 130023424) === de && 500 > Z() - ua ? Yt(e, 0) : aa |= n), je(e, t);
}
function C1(e, t) {
  t === 0 && (e.mode & 1 ? (t = oi, oi <<= 1, !(oi & 130023424) && (oi = 4194304)) : t = 1);
  var n = we();
  e = dt(e, t), e !== null && (Hr(e, t, n), je(e, n));
}
function Gp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), C1(e, n);
}
function Jp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), C1(e, n);
}
var k1;
k1 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Ce = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, Ap(e, t, n);
    Ce = !!(e.flags & 131072);
  }
  else Ce = !1, K && t.flags & 1048576 && Rd(t, Gi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ti(e, t), e = t.pendingProps;
      var i = Fn(t, ve.current);
      _n(t, n), i = na(null, t, r, e, i, n);
      var o = ra();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, Yi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Jl(t), i.updater = No, t.stateNode = i, i._reactInternals = t, Xs(t, r, e, n), t = Zs(null, t, r, !0, o, n)) : (t.tag = 0, K && o && Hl(t), ye(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ti(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = qp(r), e = Be(r, e), i) {
          case 0:
            t = Js(null, t, r, e, n);
            break e;
          case 1:
            t = wu(null, t, r, e, n);
            break e;
          case 11:
            t = vu(null, t, r, e, n);
            break e;
          case 14:
            t = yu(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(j(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Be(r, i), Js(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Be(r, i), wu(e, t, r, i, n);
    case 3:
      e: {
        if (a1(t), e === null) throw Error(j(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Md(e, t), qi(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Un(Error(j(423)), t), t = xu(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Un(Error(j(424)), t), t = xu(e, t, r, n, i);
          break e;
        } else for (Re = jt(t.stateNode.containerInfo.firstChild), Te = t, K = !0, He = null, n = $d(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (An(), r === i) {
            t = ft(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bd(t), e === null && Ws(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Us(r, i) ? s = null : o !== null && Us(r, o) && (t.flags |= 32), l1(e, t), ye(e, t, s, n), t.child;
    case 6:
      return e === null && Ws(t), null;
    case 13:
      return u1(e, t, n);
    case 4:
      return Zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : ye(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Be(r, i), vu(e, t, r, i, n);
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, U(Ji, r._currentValue), r._currentValue = s, o !== null) if (Ye(o.value, s)) {
          if (o.children === i.children && !ke.current) {
            t = ft(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = at(-1, n & -n), a.tag = 2;
                  var l = o.updateQueue;
                  if (l !== null) {
                    l = l.shared;
                    var c = l.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), l.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Qs(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(j(341));
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Qs(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        ye(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, _n(t, n), i = ze(i), r = r(i), t.flags |= 1, ye(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Be(r, t.pendingProps), i = Be(r.type, i), yu(e, t, r, i, n);
    case 15:
      return o1(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Be(r, i), Ti(e, t), t.tag = 1, Ne(r) ? (e = !0, Yi(t)) : e = !1, _n(t, n), n1(t, r, i), Xs(t, r, i, n), Zs(null, t, r, !0, e, n);
    case 19:
      return c1(e, t, n);
    case 22:
      return s1(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function N1(e, t) {
  return qc(e, t);
}
function Zp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Fe(e, t, n, r) {
  return new Zp(e, t, n, r);
}
function pa(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function qp(e) {
  if (typeof e == "function") return pa(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === _l) return 11;
    if (e === $l) return 14;
  }
  return 2;
}
function Tt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Fe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ii(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function") pa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case mn:
      return Xt(n.children, i, o, t);
    case Tl:
      s = 8, i |= 8;
      break;
    case ys:
      return e = Fe(12, n, t, i | 2), e.elementType = ys, e.lanes = o, e;
    case ws:
      return e = Fe(13, n, t, i), e.elementType = ws, e.lanes = o, e;
    case xs:
      return e = Fe(19, n, t, i), e.elementType = xs, e.lanes = o, e;
    case bc:
      return Ro(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ic:
          s = 10;
          break e;
        case Mc:
          s = 9;
          break e;
        case _l:
          s = 11;
          break e;
        case $l:
          s = 14;
          break e;
        case gt:
          s = 16, r = null;
          break e;
      }
      throw Error(j(130, e == null ? e : typeof e, ""));
  }
  return t = Fe(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Xt(e, t, n, r) {
  return e = Fe(7, e, r, t), e.lanes = n, e;
}
function Ro(e, t, n, r) {
  return e = Fe(22, e, r, t), e.elementType = bc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function cs(e, t, n) {
  return e = Fe(6, e, null, t), e.lanes = n, e;
}
function ds(e, t, n) {
  return t = Fe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function eh(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ko(0), this.expirationTimes = Ko(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ko(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ha(e, t, n, r, i, o, s, u, a) {
  return e = new eh(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Fe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Jl(o), e;
}
function th(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function j1(e) {
  if (!e) return It;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return jd(e, n, t);
  }
  return t;
}
function P1(e, t, n, r, i, o, s, u, a) {
  return e = ha(n, r, !0, e, i, o, s, u, a), e.context = j1(null), n = e.current, r = we(), i = Ot(n), o = at(r, i), o.callback = t ?? null, Pt(n, o, i), e.current.lanes = i, Hr(e, i, r), je(e, r), e;
}
function Oo(e, t, n, r) {
  var i = t.current, o = we(), s = Ot(i);
  return n = j1(n), t.context === null ? t.context = n : t.pendingContext = n, t = at(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Pt(i, t, s), e !== null && (Qe(e, i, s, o), Pi(e, i, s)), s;
}
function lo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ma(e, t) {
  Tu(e, t), (e = e.alternate) && Tu(e, t);
}
function nh() {
  return null;
}
var R1 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function La(e) {
  this._internalRoot = e;
}
To.prototype.render = La.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Oo(e, t, null, null);
};
To.prototype.unmount = La.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function() {
      Oo(null, e, null, null);
    }), t[ct] = null;
  }
};
function To(e) {
  this._internalRoot = e;
}
To.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++) ;
    yt.splice(n, 0, e), n === 0 && ad(e);
  }
};
function ga(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function _o(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _u() {
}
function rh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var l = lo(s);
        o.call(l);
      };
    }
    var s = P1(t, r, e, 0, null, !1, !1, "", _u);
    return e._reactRootContainer = s, e[ct] = s.current, Rr(e.nodeType === 8 ? e.parentNode : e), en(), s;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var l = lo(a);
      u.call(l);
    };
  }
  var a = ha(e, 0, !1, null, null, !1, !1, "", _u);
  return e._reactRootContainer = a, e[ct] = a.current, Rr(e.nodeType === 8 ? e.parentNode : e), en(function() {
    Oo(t, a, n, r);
  }), a;
}
function $o(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var a = lo(s);
        u.call(a);
      };
    }
    Oo(t, s, e, i);
  } else s = rh(n, t, e, i, r);
  return lo(s);
}
id = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes);
        n !== 0 && (bl(t, n | 1), je(t, Z()), !(F & 6) && (Bn = Z() + 500, At()));
      }
      break;
    case 13:
      en(function() {
        var r = dt(e, 1);
        if (r !== null) {
          var i = we();
          Qe(r, e, 1, i);
        }
      }), ma(e, 1);
  }
};
Fl = function(e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = we();
      Qe(t, e, 134217728, n);
    }
    ma(e, 134217728);
  }
};
od = function(e) {
  if (e.tag === 13) {
    var t = Ot(e), n = dt(e, t);
    if (n !== null) {
      var r = we();
      Qe(n, e, t, r);
    }
    ma(e, t);
  }
};
sd = function() {
  return A;
};
ld = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
Ts = function(e, t, n) {
  switch (t) {
    case "input":
      if (Cs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Eo(r);
            if (!i) throw Error(j(90));
            Ac(r), Cs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Dc(e, n);
      break;
    case "select":
      t = n.value, t != null && Pn(e, !!n.multiple, t, !1);
  }
};
Qc = ca;
Yc = en;
var ih = { usingClientEntryPoint: !1, Events: [Wr, yn, Eo, Kc, Wc, ca] }, er = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, oh = { bundleType: er.bundleType, version: er.version, rendererPackageName: er.rendererPackageName, rendererConfig: er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Jc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: er.findFiberByHostInstance || nh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Li.isDisabled && Li.supportsFiber) try {
    yo = Li.inject(oh), et = Li;
  } catch {
  }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
$e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ga(t)) throw Error(j(200));
  return th(e, t, null, n);
};
$e.createRoot = function(e, t) {
  if (!ga(e)) throw Error(j(299));
  var n = !1, r = "", i = R1;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ha(e, 1, !1, null, null, n, !1, r, i), e[ct] = t.current, Rr(e.nodeType === 8 ? e.parentNode : e), new La(t);
};
$e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
  return e = Jc(t), e = e === null ? null : e.stateNode, e;
};
$e.flushSync = function(e) {
  return en(e);
};
$e.hydrate = function(e, t, n) {
  if (!_o(t)) throw Error(j(200));
  return $o(null, e, t, !0, n);
};
$e.hydrateRoot = function(e, t, n) {
  if (!ga(e)) throw Error(j(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = R1;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = P1(t, null, e, 1, n ?? null, i, !1, o, s), e[ct] = t.current, Rr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new To(t);
};
$e.render = function(e, t, n) {
  if (!_o(t)) throw Error(j(200));
  return $o(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function(e) {
  if (!_o(e)) throw Error(j(40));
  return e._reactRootContainer ? (en(function() {
    $o(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ct] = null;
    });
  }), !0) : !1;
};
$e.unstable_batchedUpdates = ca;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!_o(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return $o(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function O1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O1);
    } catch (e) {
      console.error(e);
    }
}
O1(), Oc.exports = $e;
var sh = Oc.exports, T1, $u = sh;
T1 = $u.createRoot, $u.hydrateRoot;
var _1 = { exports: {} }, $1 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr = E;
function lh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ah = typeof Object.is == "function" ? Object.is : lh, uh = Yr.useSyncExternalStore, ch = Yr.useRef, dh = Yr.useEffect, fh = Yr.useMemo, ph = Yr.useDebugValue;
$1.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
  var o = ch(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = fh(function() {
    function a(h) {
      if (!l) {
        if (l = !0, c = h, h = r(h), i !== void 0 && s.hasValue) {
          var v = s.value;
          if (i(v, h)) return d = v;
        }
        return d = h;
      }
      if (v = d, ah(c, h)) return v;
      var w = r(h);
      return i !== void 0 && i(v, w) ? v : (c = h, d = w);
    }
    var l = !1, c, d, f = n === void 0 ? null : n;
    return [function() {
      return a(t());
    }, f === null ? void 0 : function() {
      return a(f());
    }];
  }, [t, n, r, i]);
  var u = uh(e, o[0], o[1]);
  return dh(function() {
    s.hasValue = !0, s.value = u;
  }, [u]), ph(u), u;
};
_1.exports = $1;
var hh = _1.exports, Oe = (
  // prettier-ignore
  // @ts-ignore
  "default" in gs ? vo : gs
), Iu = Symbol.for("react-redux-context"), Mu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function mh() {
  if (!Oe.createContext)
    return {};
  const e = Mu[Iu] ?? (Mu[Iu] = /* @__PURE__ */ new Map());
  let t = e.get(Oe.createContext);
  return t || (t = Oe.createContext(
    null
  ), e.set(Oe.createContext, t)), t;
}
var Mt = /* @__PURE__ */ mh(), Lh = () => {
  throw new Error("uSES not initialized!");
};
function va(e = Mt) {
  return function() {
    return Oe.useContext(e);
  };
}
var I1 = /* @__PURE__ */ va(), M1 = Lh, gh = (e) => {
  M1 = e;
}, vh = (e, t) => e === t;
function yh(e = Mt) {
  const t = e === Mt ? I1 : va(e), n = (r, i = {}) => {
    const { equalityFn: o = vh, devModeChecks: s = {} } = typeof i == "function" ? { equalityFn: i } : i, {
      store: u,
      subscription: a,
      getServerState: l,
      stabilityCheck: c,
      identityFunctionCheck: d
    } = t();
    Oe.useRef(!0);
    const f = Oe.useCallback(
      {
        [r.name](v) {
          return r(v);
        }
      }[r.name],
      [r, c, s.stabilityCheck]
    ), h = M1(
      a.addNestedSub,
      u.getState,
      l || u.getState,
      f,
      o
    );
    return Oe.useDebugValue(h), h;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zt = /* @__PURE__ */ yh();
function wh(e) {
  e();
}
function xh() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      wh(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = t = {
        callback: n,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !r || e === null || (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var bu = {
  notify() {
  },
  get: () => []
};
function Sh(e, t) {
  let n, r = bu, i = 0, o = !1;
  function s(w) {
    c();
    const x = r.subscribe(w);
    let L = !1;
    return () => {
      L || (L = !0, x(), d());
    };
  }
  function u() {
    r.notify();
  }
  function a() {
    v.onStateChange && v.onStateChange();
  }
  function l() {
    return o;
  }
  function c() {
    i++, n || (n = e.subscribe(a), r = xh());
  }
  function d() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = bu);
  }
  function f() {
    o || (o = !0, c());
  }
  function h() {
    o && (o = !1, d());
  }
  const v = {
    addNestedSub: s,
    notifyNestedSubs: u,
    handleChangeWrapper: a,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: h,
    getListeners: () => r
  };
  return v;
}
var Eh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ch = typeof navigator < "u" && navigator.product === "ReactNative", kh = Eh || Ch ? Oe.useLayoutEffect : Oe.useEffect;
function Nh({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const s = Oe.useMemo(() => {
    const l = Sh(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), u = Oe.useMemo(() => e.getState(), [e]);
  kh(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), u !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, u]);
  const a = t || Mt;
  return /* @__PURE__ */ Oe.createElement(a.Provider, { value: s }, n);
}
var jh = Nh;
function b1(e = Mt) {
  const t = e === Mt ? I1 : (
    // @ts-ignore
    va(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Ph = /* @__PURE__ */ b1();
function Rh(e = Mt) {
  const t = e === Mt ? Ph : b1(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Xr = /* @__PURE__ */ Rh();
gh(hh.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ar() {
  return Ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ar.apply(this, arguments);
}
var Et;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Et || (Et = {}));
const Fu = "popstate";
function Oh(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: o,
      search: s,
      hash: u
    } = r.location;
    return cl(
      "",
      {
        pathname: o,
        search: s,
        hash: u
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ao(i);
  }
  return _h(t, n, null, e);
}
function ee(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function F1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Th() {
  return Math.random().toString(36).substr(2, 8);
}
function Au(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function cl(e, t, n, r) {
  return n === void 0 && (n = null), Ar({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Wn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Th()
  });
}
function ao(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Wn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function _h(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, s = i.history, u = Et.Pop, a = null, l = c();
  l == null && (l = 0, s.replaceState(Ar({}, s.state, {
    idx: l
  }), ""));
  function c() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function d() {
    u = Et.Pop;
    let x = c(), L = x == null ? null : x - l;
    l = x, a && a({
      action: u,
      location: w.location,
      delta: L
    });
  }
  function f(x, L) {
    u = Et.Push;
    let m = cl(w.location, x, L);
    l = c() + 1;
    let y = Au(m, l), g = w.createHref(m);
    try {
      s.pushState(y, "", g);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError")
        throw S;
      i.location.assign(g);
    }
    o && a && a({
      action: u,
      location: w.location,
      delta: 1
    });
  }
  function h(x, L) {
    u = Et.Replace;
    let m = cl(w.location, x, L);
    l = c();
    let y = Au(m, l), g = w.createHref(m);
    s.replaceState(y, "", g), o && a && a({
      action: u,
      location: w.location,
      delta: 0
    });
  }
  function v(x) {
    let L = i.location.origin !== "null" ? i.location.origin : i.location.href, m = typeof x == "string" ? x : ao(x);
    return m = m.replace(/ $/, "%20"), ee(L, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, L);
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(i, s);
    },
    listen(x) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(Fu, d), a = x, () => {
        i.removeEventListener(Fu, d), a = null;
      };
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: v,
    encodeLocation(x) {
      let L = v(x);
      return {
        pathname: L.pathname,
        search: L.search,
        hash: L.hash
      };
    },
    push: f,
    replace: h,
    go(x) {
      return s.go(x);
    }
  };
  return w;
}
var zu;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(zu || (zu = {}));
function $h(e, t, n) {
  return n === void 0 && (n = "/"), Ih(e, t, n, !1);
}
function Ih(e, t, n, r) {
  let i = typeof t == "string" ? Wn(t) : t, o = ya(i.pathname || "/", n);
  if (o == null)
    return null;
  let s = A1(e);
  Mh(s);
  let u = null;
  for (let a = 0; u == null && a < s.length; ++a) {
    let l = Wh(o);
    u = Hh(s[a], l, r);
  }
  return u;
}
function A1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    a.relativePath.startsWith("/") && (ee(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let l = _t([r, a.relativePath]), c = n.concat(a);
    o.children && o.children.length > 0 && (ee(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + l + '".')
    ), A1(o.children, t, c, l)), !(o.path == null && !o.index) && t.push({
      path: l,
      score: Bh(l, o.index),
      routesMeta: c
    });
  };
  return e.forEach((o, s) => {
    var u;
    if (o.path === "" || !((u = o.path) != null && u.includes("?")))
      i(o, s);
    else
      for (let a of z1(o.path))
        i(o, s, a);
  }), t;
}
function z1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let s = z1(r.join("/")), u = [];
  return u.push(...s.map((a) => a === "" ? o : [o, a].join("/"))), i && u.push(...s), u.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
function Mh(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : Vh(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const bh = /^:[\w-]+$/, Fh = 3, Ah = 2, zh = 1, Dh = 10, Uh = -2, Du = (e) => e === "*";
function Bh(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Du) && (r += Uh), t && (r += Ah), n.filter((i) => !Du(i)).reduce((i, o) => i + (bh.test(o) ? Fh : o === "" ? zh : Dh), r);
}
function Vh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Hh(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, o = "/", s = [];
  for (let u = 0; u < r.length; ++u) {
    let a = r[u], l = u === r.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", d = Uu({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: l
    }, c), f = a.route;
    if (!d && l && n && !r[r.length - 1].route.index && (d = Uu({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: !1
    }, c)), !d)
      return null;
    Object.assign(i, d.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: _t([o, d.pathname]),
      pathnameBase: Gh(_t([o, d.pathnameBase])),
      route: f
    }), d.pathnameBase !== "/" && (o = _t([o, d.pathnameBase]));
  }
  return s;
}
function Uu(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Kh(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let o = i[0], s = o.replace(/(.)\/+$/, "$1"), u = i.slice(1);
  return {
    params: r.reduce((l, c, d) => {
      let {
        paramName: f,
        isOptional: h
      } = c;
      if (f === "*") {
        let w = u[d] || "";
        s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const v = u[d];
      return h && !v ? l[f] = void 0 : l[f] = (v || "").replace(/%2F/g, "/"), l;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function Kh(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), F1(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, u, a) => (r.push({
    paramName: u,
    isOptional: a != null
  }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Wh(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return F1(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ya(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Qh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Wn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Yh(n, t) : t,
    search: Jh(r),
    hash: Zh(i)
  };
}
function Yh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function fs(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Xh(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function D1(e, t) {
  let n = Xh(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function U1(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Wn(e) : (i = Ar({}, e), ee(!i.pathname || !i.pathname.includes("?"), fs("?", "pathname", "search", i)), ee(!i.pathname || !i.pathname.includes("#"), fs("#", "pathname", "hash", i)), ee(!i.search || !i.search.includes("#"), fs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, u;
  if (s == null)
    u = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; )
        f.shift(), d -= 1;
      i.pathname = f.join("/");
    }
    u = d >= 0 ? t[d] : "/";
  }
  let a = Qh(i, u), l = s && s !== "/" && s.endsWith("/"), c = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (l || c) && (a.pathname += "/"), a;
}
const _t = (e) => e.join("/").replace(/\/\/+/g, "/"), Gh = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Jh = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Zh = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function qh(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const B1 = ["post", "put", "patch", "delete"];
new Set(B1);
const e2 = ["get", ...B1];
new Set(e2);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zr.apply(this, arguments);
}
const wa = /* @__PURE__ */ E.createContext(null), t2 = /* @__PURE__ */ E.createContext(null), sn = /* @__PURE__ */ E.createContext(null), Io = /* @__PURE__ */ E.createContext(null), ln = /* @__PURE__ */ E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), V1 = /* @__PURE__ */ E.createContext(null);
function n2(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Gr() || ee(!1);
  let {
    basename: r,
    navigator: i
  } = E.useContext(sn), {
    hash: o,
    pathname: s,
    search: u
  } = K1(e, {
    relative: n
  }), a = s;
  return r !== "/" && (a = s === "/" ? r : _t([r, s])), i.createHref({
    pathname: a,
    search: u,
    hash: o
  });
}
function Gr() {
  return E.useContext(Io) != null;
}
function Mo() {
  return Gr() || ee(!1), E.useContext(Io).location;
}
function H1(e) {
  E.useContext(sn).static || E.useLayoutEffect(e);
}
function Jr() {
  let {
    isDataRoute: e
  } = E.useContext(ln);
  return e ? m2() : r2();
}
function r2() {
  Gr() || ee(!1);
  let e = E.useContext(wa), {
    basename: t,
    future: n,
    navigator: r
  } = E.useContext(sn), {
    matches: i
  } = E.useContext(ln), {
    pathname: o
  } = Mo(), s = JSON.stringify(D1(i, n.v7_relativeSplatPath)), u = E.useRef(!1);
  return H1(() => {
    u.current = !0;
  }), E.useCallback(function(l, c) {
    if (c === void 0 && (c = {}), !u.current) return;
    if (typeof l == "number") {
      r.go(l);
      return;
    }
    let d = U1(l, JSON.parse(s), o, c.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : _t([t, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c);
  }, [t, r, s, o, e]);
}
function K1(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = E.useContext(sn), {
    matches: i
  } = E.useContext(ln), {
    pathname: o
  } = Mo(), s = JSON.stringify(D1(i, r.v7_relativeSplatPath));
  return E.useMemo(() => U1(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function i2(e, t) {
  return o2(e, t);
}
function o2(e, t, n, r) {
  Gr() || ee(!1);
  let {
    navigator: i
  } = E.useContext(sn), {
    matches: o
  } = E.useContext(ln), s = o[o.length - 1], u = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let l = Mo(), c;
  if (t) {
    var d;
    let x = typeof t == "string" ? Wn(t) : t;
    a === "/" || (d = x.pathname) != null && d.startsWith(a) || ee(!1), c = x;
  } else
    c = l;
  let f = c.pathname || "/", h = f;
  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let v = $h(e, {
    pathname: h
  }), w = c2(v && v.map((x) => Object.assign({}, x, {
    params: Object.assign({}, u, x.params),
    pathname: _t([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname
    ]),
    pathnameBase: x.pathnameBase === "/" ? a : _t([
      a,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
    ])
  })), o, n, r);
  return t && w ? /* @__PURE__ */ E.createElement(Io.Provider, {
    value: {
      location: zr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, c),
      navigationType: Et.Pop
    }
  }, w) : w;
}
function s2() {
  let e = h2(), t = qh(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ E.createElement("pre", {
    style: i
  }, n) : null, null);
}
const l2 = /* @__PURE__ */ E.createElement(s2, null);
class a2 extends E.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ E.createElement(ln.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ E.createElement(V1.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function u2(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = E.useContext(wa);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ E.createElement(ln.Provider, {
    value: t
  }, r);
}
function c2(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
      e = n.matches;
    else
      return null;
  }
  let s = e, u = (i = n) == null ? void 0 : i.errors;
  if (u != null) {
    let c = s.findIndex((d) => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0);
    c >= 0 || ee(!1), s = s.slice(0, Math.min(s.length, c + 1));
  }
  let a = !1, l = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = c), d.route.id) {
        let {
          loaderData: f,
          errors: h
        } = n, v = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          a = !0, l >= 0 ? s = s.slice(0, l + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h, v = !1, w = null, x = null;
    n && (h = u && d.route.id ? u[d.route.id] : void 0, w = d.route.errorElement || l2, a && (l < 0 && f === 0 ? (v = !0, x = null) : l === f && (v = !0, x = d.route.hydrateFallbackElement || null)));
    let L = t.concat(s.slice(0, f + 1)), m = () => {
      let y;
      return h ? y = w : v ? y = x : d.route.Component ? y = /* @__PURE__ */ E.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c, /* @__PURE__ */ E.createElement(u2, {
        match: d,
        routeContext: {
          outlet: c,
          matches: L,
          isDataRoute: n != null
        },
        children: y
      });
    };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? /* @__PURE__ */ E.createElement(a2, {
      location: n.location,
      revalidation: n.revalidation,
      component: w,
      error: h,
      children: m(),
      routeContext: {
        outlet: null,
        matches: L,
        isDataRoute: !0
      }
    }) : m();
  }, null);
}
var W1 = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(W1 || {}), uo = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(uo || {});
function d2(e) {
  let t = E.useContext(wa);
  return t || ee(!1), t;
}
function f2(e) {
  let t = E.useContext(t2);
  return t || ee(!1), t;
}
function p2(e) {
  let t = E.useContext(ln);
  return t || ee(!1), t;
}
function Q1(e) {
  let t = p2(), n = t.matches[t.matches.length - 1];
  return n.route.id || ee(!1), n.route.id;
}
function h2() {
  var e;
  let t = E.useContext(V1), n = f2(uo.UseRouteError), r = Q1(uo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function m2() {
  let {
    router: e
  } = d2(W1.UseNavigateStable), t = Q1(uo.UseNavigateStable), n = E.useRef(!1);
  return H1(() => {
    n.current = !0;
  }), E.useCallback(function(i, o) {
    o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, zr({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
function rt(e) {
  ee(!1);
}
function L2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Et.Pop,
    navigator: o,
    static: s = !1,
    future: u
  } = e;
  Gr() && ee(!1);
  let a = t.replace(/^\/*/, "/"), l = E.useMemo(() => ({
    basename: a,
    navigator: o,
    static: s,
    future: zr({
      v7_relativeSplatPath: !1
    }, u)
  }), [a, u, o, s]);
  typeof r == "string" && (r = Wn(r));
  let {
    pathname: c = "/",
    search: d = "",
    hash: f = "",
    state: h = null,
    key: v = "default"
  } = r, w = E.useMemo(() => {
    let x = ya(c, a);
    return x == null ? null : {
      location: {
        pathname: x,
        search: d,
        hash: f,
        state: h,
        key: v
      },
      navigationType: i
    };
  }, [a, c, d, f, h, v, i]);
  return w == null ? null : /* @__PURE__ */ E.createElement(sn.Provider, {
    value: l
  }, /* @__PURE__ */ E.createElement(Io.Provider, {
    children: n,
    value: w
  }));
}
function g2(e) {
  let {
    children: t,
    location: n
  } = e;
  return i2(dl(t), n);
}
new Promise(() => {
});
function dl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return E.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ E.isValidElement(r))
      return;
    let o = [...t, i];
    if (r.type === E.Fragment) {
      n.push.apply(n, dl(r.props.children, o));
      return;
    }
    r.type !== rt && ee(!1), !r.props.index || !r.props.children || ee(!1);
    let s = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (s.children = dl(r.props.children, o)), n.push(s);
  }), n;
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fl.apply(this, arguments);
}
function v2(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function y2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function w2(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !y2(e);
}
const x2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], S2 = "6";
try {
  window.__reactRouterVersion = S2;
} catch {
}
const E2 = "startTransition", Bu = gs[E2];
function C2(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, o = E.useRef();
  o.current == null && (o.current = Oh({
    window: i,
    v5Compat: !0
  }));
  let s = o.current, [u, a] = E.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: l
  } = r || {}, c = E.useCallback((d) => {
    l && Bu ? Bu(() => a(d)) : a(d);
  }, [a, l]);
  return E.useLayoutEffect(() => s.listen(c), [s, c]), /* @__PURE__ */ E.createElement(L2, {
    basename: t,
    children: n,
    location: u.location,
    navigationType: u.action,
    navigator: s,
    future: r
  });
}
const k2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", N2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ke = /* @__PURE__ */ E.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: o,
    replace: s,
    state: u,
    target: a,
    to: l,
    preventScrollReset: c,
    unstable_viewTransition: d
  } = t, f = v2(t, x2), {
    basename: h
  } = E.useContext(sn), v, w = !1;
  if (typeof l == "string" && N2.test(l) && (v = l, k2))
    try {
      let y = new URL(window.location.href), g = l.startsWith("//") ? new URL(y.protocol + l) : new URL(l), S = ya(g.pathname, h);
      g.origin === y.origin && S != null ? l = S + g.search + g.hash : w = !0;
    } catch {
    }
  let x = n2(l, {
    relative: i
  }), L = j2(l, {
    replace: s,
    state: u,
    target: a,
    preventScrollReset: c,
    relative: i,
    unstable_viewTransition: d
  });
  function m(y) {
    r && r(y), y.defaultPrevented || L(y);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ E.createElement("a", fl({}, f, {
      href: v || x,
      onClick: w || o ? r : m,
      ref: n,
      target: a
    }))
  );
});
var Vu;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Vu || (Vu = {}));
var Hu;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Hu || (Hu = {}));
function j2(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: s,
    unstable_viewTransition: u
  } = t === void 0 ? {} : t, a = Jr(), l = Mo(), c = K1(e, {
    relative: s
  });
  return E.useCallback((d) => {
    if (w2(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : ao(l) === ao(c);
      a(e, {
        replace: f,
        state: i,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: u
      });
    }
  }, [l, a, c, r, i, n, e, o, s, u]);
}
var P2 = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const R2 = /* @__PURE__ */ Lo(P2);
var O2 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ku(e) {
  var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (R2[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var r = e.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? e.slice(4, r) : "" };
  }
  for (var i = new RegExp(O2), o = null; (o = i.exec(e)) !== null; ) if (o[0].trim()) if (o[1]) {
    var s = o[1].trim(), u = [s, ""];
    s.indexOf("=") > -1 && (u = s.split("=")), t.attrs[u[0]] = u[1], i.lastIndex--;
  } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
  return t;
}
var T2 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, _2 = /^\s*$/, $2 = /* @__PURE__ */ Object.create(null);
function Y1(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(n) {
        var r = [];
        for (var i in n) r.push(i + '="' + n[i] + '"');
        return r.length ? " " + r.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(Y1, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var I2 = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = $2);
  var n, r = [], i = [], o = -1, s = !1;
  if (e.indexOf("<") !== 0) {
    var u = e.indexOf("<");
    r.push({ type: "text", content: u === -1 ? e : e.substring(0, u) });
  }
  return e.replace(T2, function(a, l) {
    if (s) {
      if (a !== "</" + n.name + ">") return;
      s = !1;
    }
    var c, d = a.charAt(1) !== "/", f = a.startsWith("<!--"), h = l + a.length, v = e.charAt(h);
    if (f) {
      var w = Ku(a);
      return o < 0 ? (r.push(w), r) : ((c = i[o]).children.push(w), r);
    }
    if (d && (o++, (n = Ku(a)).type === "tag" && t.components[n.name] && (n.type = "component", s = !0), n.voidElement || s || !v || v === "<" || n.children.push({ type: "text", content: e.slice(h, e.indexOf("<", h)) }), o === 0 && r.push(n), (c = i[o - 1]) && c.children.push(n), i[o] = n), (!d || n.voidElement) && (o > -1 && (n.voidElement || n.name === a.slice(2, -1)) && (o--, n = o === -1 ? r : i[o]), !s && v !== "<" && v)) {
      c = o === -1 ? r : i[o].children;
      var x = e.indexOf("<", h), L = e.slice(h, x === -1 ? void 0 : x);
      _2.test(L) && (L = " "), (x > -1 && o + c.length >= 0 || L !== " ") && c.push({ type: "text", content: L });
    }
  }), r;
}, stringify: function(e) {
  return e.reduce(function(t, n) {
    return t + Y1("", n);
  }, "");
} };
function Mi() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Wu = {};
function co() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Wu[t[0]] || (typeof t[0] == "string" && (Wu[t[0]] = /* @__PURE__ */ new Date()), Mi(...t));
}
const X1 = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Qu(e, t, n) {
  e.loadNamespaces(t, X1(e, n));
}
function Yu(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, X1(e, r));
}
function M2(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], i = t.options ? t.options.fallbackLng : !1, o = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const s = (u, a) => {
    const l = t.services.backendConnector.state[`${u}|${a}`];
    return l === -1 || l === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!i || s(o, e)));
}
function b2(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (co("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (i, o) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !o(i.isLanguageChangingTo, e)) return !1;
    }
  }) : M2(e, t, n);
}
const F2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, A2 = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, z2 = (e) => A2[e], D2 = (e) => e.replace(F2, z2);
let pl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: D2
};
function U2() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  pl = {
    ...pl,
    ...e
  };
}
function G1() {
  return pl;
}
let J1;
function B2(e) {
  J1 = e;
}
function xa() {
  return J1;
}
function ps(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function hs(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? Nn(t) : t;
}
function V2(e) {
  return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every((t) => E.isValidElement(t));
}
function Nn(e) {
  return Array.isArray(e) ? e : [e];
}
function H2(e, t) {
  const n = {
    ...t
  };
  return n.props = Object.assign(e.props, t.props), n;
}
function Z1(e, t) {
  if (!e) return "";
  let n = "";
  const r = Nn(e), i = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return r.forEach((o, s) => {
    if (typeof o == "string")
      n += `${o}`;
    else if (E.isValidElement(o)) {
      const u = Object.keys(o.props).length, a = i.indexOf(o.type) > -1, l = o.props.children;
      if (!l && a && u === 0)
        n += `<${o.type}/>`;
      else if (!l && (!a || u !== 0))
        n += `<${s}></${s}>`;
      else if (o.props.i18nIsDynamicList)
        n += `<${s}></${s}>`;
      else if (a && u === 1 && typeof l == "string")
        n += `<${o.type}>${l}</${o.type}>`;
      else {
        const c = Z1(l, t);
        n += `<${s}>${c}</${s}>`;
      }
    } else if (o === null)
      Mi("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (typeof o == "object") {
      const {
        format: u,
        ...a
      } = o, l = Object.keys(a);
      if (l.length === 1) {
        const c = u ? `${l[0]}, ${u}` : l[0];
        n += `{{${c}}}`;
      } else
        Mi("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", o);
    } else
      Mi("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", o);
  }), n;
}
function K2(e, t, n, r, i, o) {
  if (t === "") return [];
  const s = r.transKeepBasicHtmlNodesFor || [], u = t && new RegExp(s.map((x) => `<${x}`).join("|")).test(t);
  if (!e && !u && !o) return [t];
  const a = {};
  function l(x) {
    Nn(x).forEach((m) => {
      typeof m != "string" && (ps(m) ? l(hs(m)) : typeof m == "object" && !E.isValidElement(m) && Object.assign(a, m));
    });
  }
  l(e);
  const c = I2.parse(`<0>${t}</0>`), d = {
    ...a,
    ...i
  };
  function f(x, L, m) {
    const y = hs(x), g = v(y, L.children, m);
    return V2(y) && g.length === 0 || x.props && x.props.i18nIsDynamicList ? y : g;
  }
  function h(x, L, m, y, g) {
    x.dummy ? (x.children = L, m.push(E.cloneElement(x, {
      key: y
    }, g ? void 0 : L))) : m.push(...E.Children.map([x], (S) => {
      const C = {
        ...S.props
      };
      return delete C.i18nIsDynamicList, E.createElement(S.type, {
        ...C,
        key: y,
        ref: S.ref
      }, g ? null : L);
    }));
  }
  function v(x, L, m) {
    const y = Nn(x);
    return Nn(L).reduce((S, C, k) => {
      const N = C.children && C.children[0] && C.children[0].content && n.services.interpolator.interpolate(C.children[0].content, d, n.language);
      if (C.type === "tag") {
        let O = y[parseInt(C.name, 10)];
        m.length === 1 && !O && (O = m[0][C.name]), O || (O = {});
        const P = Object.keys(C.attrs).length !== 0 ? H2({
          props: C.attrs
        }, O) : O, M = E.isValidElement(P), G = M && ps(C, !0) && !C.voidElement, te = u && typeof P == "object" && P.dummy && !M, ae = typeof e == "object" && e !== null && Object.hasOwnProperty.call(e, C.name);
        if (typeof P == "string") {
          const H = n.services.interpolator.interpolate(P, d, n.language);
          S.push(H);
        } else if (ps(P) || G) {
          const H = f(P, C, m);
          h(P, H, S, k);
        } else if (te) {
          const H = v(y, C.children, m);
          h(P, H, S, k);
        } else if (Number.isNaN(parseFloat(C.name)))
          if (ae) {
            const H = f(P, C, m);
            h(P, H, S, k, C.voidElement);
          } else if (r.transSupportBasicHtmlNodes && s.indexOf(C.name) > -1)
            if (C.voidElement)
              S.push(E.createElement(C.name, {
                key: `${C.name}-${k}`
              }));
            else {
              const H = v(y, C.children, m);
              S.push(E.createElement(C.name, {
                key: `${C.name}-${k}`
              }, H));
            }
          else if (C.voidElement)
            S.push(`<${C.name} />`);
          else {
            const H = v(y, C.children, m);
            S.push(`<${C.name}>${H}</${C.name}>`);
          }
        else if (typeof P == "object" && !M) {
          const H = C.children[0] ? N : null;
          H && S.push(H);
        } else
          h(P, N, S, k, C.children.length !== 1 || !N);
      } else if (C.type === "text") {
        const O = r.transWrapTextNodes, P = o ? r.unescape(n.services.interpolator.interpolate(C.content, d, n.language)) : n.services.interpolator.interpolate(C.content, d, n.language);
        O ? S.push(E.createElement(O, {
          key: `${C.name}-${k}`
        }, P)) : S.push(P);
      }
      return S;
    }, []);
  }
  const w = v([{
    dummy: !0,
    children: e || []
  }], c, Nn(e || []));
  return hs(w[0]);
}
function W2(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: u,
    defaults: a,
    components: l,
    ns: c,
    i18n: d,
    t: f,
    shouldUnescape: h,
    ...v
  } = e;
  const w = d || xa();
  if (!w)
    return co("You will need to pass in an i18next instance by using i18nextReactModule"), t;
  const x = f || w.t.bind(w) || ((G) => G), L = {
    ...G1(),
    ...w.options && w.options.react
  };
  let m = c || x.ns || w.options && w.options.defaultNS;
  m = typeof m == "string" ? [m] : m || ["translation"];
  const y = Z1(t, L), g = a || y || L.transEmptyNodeValue || i, {
    hashTransKey: S
  } = L, C = i || (S ? S(y || g) : y || g);
  w.options && w.options.interpolation && w.options.interpolation.defaultVariables && (u = u && Object.keys(u).length > 0 ? {
    ...u,
    ...w.options.interpolation.defaultVariables
  } : {
    ...w.options.interpolation.defaultVariables
  });
  const k = u || n !== void 0 || !t ? s.interpolation : {
    interpolation: {
      ...s.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, N = {
    ...s,
    context: o || s.context,
    count: n,
    ...u,
    ...k,
    defaultValue: g,
    ns: m
  }, O = C ? x(C, N) : g;
  l && Object.keys(l).forEach((G) => {
    const te = l[G];
    if (typeof te.type == "function" || !te.props || !te.props.children || O.indexOf(`${G}/>`) < 0 && O.indexOf(`${G} />`) < 0) return;
    function ae() {
      return E.createElement(E.Fragment, null, te);
    }
    l[G] = E.createElement(ae);
  });
  const P = K2(l || t, O, w, L, N, h), M = r !== void 0 ? r : L.defaultTransParent;
  return M ? E.createElement(M, v, P) : P;
}
const Q2 = {
  type: "3rdParty",
  init(e) {
    U2(e.options.react), B2(e);
  }
}, q1 = E.createContext();
class Y2 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function tr(e) {
  let {
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s = {},
    values: u,
    defaults: a,
    components: l,
    ns: c,
    i18n: d,
    t: f,
    shouldUnescape: h,
    ...v
  } = e;
  const {
    i18n: w,
    defaultNS: x
  } = E.useContext(q1) || {}, L = d || w || xa(), m = f || L && L.t.bind(L);
  return W2({
    children: t,
    count: n,
    parent: r,
    i18nKey: i,
    context: o,
    tOptions: s,
    values: u,
    defaults: a,
    components: l,
    ns: c || m && m.ns || x || L && L.options && L.options.defaultNS,
    i18n: L,
    t: f,
    shouldUnescape: h,
    ...v
  });
}
const X2 = (e, t) => {
  const n = E.useRef();
  return E.useEffect(() => {
    n.current = e;
  }, [e, t]), n.current;
};
function ef(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function G2(e, t, n, r) {
  return E.useCallback(ef(e, t, n, r), [e, t, n, r]);
}
function Dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: i
  } = E.useContext(q1) || {}, o = n || r || xa();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Y2()), !o) {
    co("You will need to pass in an i18next instance by using initReactI18next");
    const g = (C, k) => typeof k == "string" ? k : k && typeof k == "object" && typeof k.defaultValue == "string" ? k.defaultValue : Array.isArray(C) ? C[C.length - 1] : C, S = [g, {}, !1];
    return S.t = g, S.i18n = {}, S.ready = !1, S;
  }
  o.options.react && o.options.react.wait !== void 0 && co("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...G1(),
    ...o.options.react,
    ...t
  }, {
    useSuspense: u,
    keyPrefix: a
  } = s;
  let l = i || o.options && o.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(l);
  const c = (o.isInitialized || o.initializedStoreOnce) && l.every((g) => b2(g, o, s)), d = G2(o, t.lng || null, s.nsMode === "fallback" ? l : l[0], a), f = () => d, h = () => ef(o, t.lng || null, s.nsMode === "fallback" ? l : l[0], a), [v, w] = E.useState(f);
  let x = l.join();
  t.lng && (x = `${t.lng}${x}`);
  const L = X2(x), m = E.useRef(!0);
  E.useEffect(() => {
    const {
      bindI18n: g,
      bindI18nStore: S
    } = s;
    m.current = !0, !c && !u && (t.lng ? Yu(o, t.lng, l, () => {
      m.current && w(h);
    }) : Qu(o, l, () => {
      m.current && w(h);
    })), c && L && L !== x && m.current && w(h);
    function C() {
      m.current && w(h);
    }
    return g && o && o.on(g, C), S && o && o.store.on(S, C), () => {
      m.current = !1, g && o && g.split(" ").forEach((k) => o.off(k, C)), S && o && S.split(" ").forEach((k) => o.store.off(k, C));
    };
  }, [o, x]), E.useEffect(() => {
    m.current && c && w(f);
  }, [o, a, c]);
  const y = [v, o, c];
  if (y.t = v, y.i18n = o, y.ready = c, c || !c && !u) return y;
  throw new Promise((g) => {
    t.lng ? Yu(o, t.lng, l, () => g()) : Qu(o, l, () => g());
  });
}
const J2 = "Management", Z2 = "Comment", q2 = "Login", em = "Logout", tm = "Register", nm = "Email", rm = "Password", im = "Nickname", om = "Personal Website", sm = "Setting", lm = "Profile", am = "Homepage", um = "All", cm = "Mine", dm = "Approved", fm = "Waiting", pm = "Spam", hm = "Sticky", mm = "Edit", Lm = "Reply", gm = "Action", vm = "Filter", ym = "Author", wm = "Content", xm = "Username", Sm = "Submit", Em = "Cancel", Cm = "At", km = "Migration", Nm = "Exporting…", jm = "Under verification", Pm = "Administrator", Rm = "Guest", Om = "User", Tm = "Role", gi = {
  management: J2,
  comment: Z2,
  login: q2,
  logout: em,
  register: tm,
  email: nm,
  password: rm,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: im,
  website: om,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: sm,
  profile: lm,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: am,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: um,
  mine: cm,
  approved: dm,
  "approved button": "Approved",
  waiting: fm,
  spam: pm,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: hm,
  edit: mm,
  reply: Lm,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: gm,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: vm,
  author: ym,
  content: wm,
  username: xm,
  submit: Sm,
  cancel: Em,
  at: Cm,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: km,
  exporting: Nm,
  export: "Export",
  import: "Import",
  "import success": "Import Success",
  "import clear data confirm": "Notice! All current data will be overwrited by importing data, do you really want to continue?",
  "importing {{importedLength}}/{{maxLength}}": "Importing {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Comment data index relationship reconstruction",
  "index updating {{importedLength}}/{{maxLength}}": "Index updating {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Please input avatar URL",
  "change avatar": "Change avatar",
  "minimum 6 characters required": "Minimum 6 characters required!",
  "close 2fa confirm": "Two-step verification can greatly improve the security of your account. Are you sure to turn it off?",
  "two factor auth": "Two-step verification",
  "enable 2fa": "Enable Two-step verification",
  "disable 2fa": "Disable Two-step verification",
  "2fa description 1": 'Two-step verification, as can be seen from the name, "two-step" is the focus of 2FA, and 2FA in a broad sense refers to providing a variety of solutions to complete user authorization authentication.',
  "2fa description 2": "After enabling two-step verification, to log in to the background of the system, in addition to the user name and password, additional tokens must be provided, which can greatly improve the security of the system.",
  "next step": "Next Step",
  "download 2fa app": "Download Two-step verification app",
  "open app and scan qrcode": "Open the Two-step verification app and scan the QR code below",
  "input 2fa code": "Input Two-step verification code",
  "2fa code": "Two-step verification code",
  "forgot password": "Forgot Password",
  "get new password": "Get a new password",
  "you will receive an email which contains a link to create new password": "You'll receive an email which contains a link to create new password.",
  "find password success! please go to your mailbox to reset it!": "The reset password email has been sent successfully, please check it in your mailbox!",
  "find password error! try again later": "Failed to send reset password email, please try again later!",
  "set administrator": "Set Admin",
  "set guest": "Set Guest",
  "set label": "Set Label",
  verify: jm,
  administrator: Pm,
  guest: Rm,
  user: Om,
  "manage users": "Manage Users",
  role: Tm,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it."
}, _m = "管理", $m = "评论", Im = "登录", Mm = "登出", bm = "用户注册", Fm = "邮箱", Am = "密码", zm = "昵称", Dm = "个人网站", Um = "个人设置", Bm = "个人资料", Vm = "个人主页地址", Hm = "所有", Km = "我的", Wm = "已通过", Qm = "待审核", Ym = "垃圾", Xm = "置顶评论", Gm = "编辑", Jm = "回复", Zm = "操作", qm = "筛选", eL = "作者", tL = "内容", nL = "用户名", rL = "提交", iL = "取消", oL = "于", sL = "导入导出", lL = "导出中...", aL = "待认证", uL = "管理员", cL = "普通用户", dL = "用户", fL = "角色", Xu = {
  management: _m,
  comment: $m,
  login: Im,
  logout: Mm,
  register: bm,
  email: Fm,
  password: Am,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: zm,
  website: Dm,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: Um,
  profile: Bm,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: Vm,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: Hm,
  mine: Km,
  approved: Wm,
  "approved button": "通过",
  waiting: Qm,
  spam: Ym,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: Xm,
  edit: Gm,
  reply: Jm,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: Zm,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: qm,
  author: eL,
  content: tL,
  username: nL,
  submit: rL,
  cancel: iL,
  at: oL,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: sL,
  exporting: lL,
  export: "导出",
  import: "导入",
  "import success": "导入成功",
  "import clear data confirm": "注意！导入数据会覆盖当前所有数据，请确认是否继续操作？",
  "importing {{importedLength}}/{{maxLength}}": "开始导入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "评论数据索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "请输入 URL",
  "change avatar": "修改头像",
  "minimum 6 characters required": "请输入 6 位验证码",
  "close 2fa confirm": "两步验证可以大大提升账户的安全性，确定关闭吗？",
  "two factor auth": "两步验证",
  "enable 2fa": "开启两步验证",
  "disable 2fa": "关闭两步验证",
  "2fa description 1": "两步验证，对应的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。从名字可以看出， 「两步」是 2FA 的重点，广义的 2FA 是指提供多种方案完成用户权限鉴定。",
  "2fa description 2": "开启两步验证后，登录系统后台，除了要提供用户名和密码外，还要提供额外的 Token，这样可以大大提高系统的安全性。",
  "next step": "下一步",
  "download 2fa app": "下载对应的应用",
  "open app and scan qrcode": "打开两步验证的应用，扫描下面的二维码",
  "input 2fa code": "填写 6 位验证码",
  "2fa code": "两步验证码",
  "forgot password": "忘记密码",
  "get new password": "获取新密码",
  "you will receive an email which contains a link to create new password": "您会收到一封包含创建新密码链接的电子邮件。",
  "find password success! please go to your mailbox to reset it!": "重置密码邮件发送成功，请去邮箱中查收！",
  "find password error! try again later": "重置密码邮件发送失败，请稍后再试！",
  "set administrator": "成为管理员",
  "set guest": "成为普通用户",
  "set label": "设置专属标签",
  verify: aL,
  administrator: uL,
  guest: cL,
  user: dL,
  "manage users": "管理用户",
  role: fL,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。'
}, pL = "管理", hL = "留言", mL = "登入", LL = "登出", gL = "使用者註冊", vL = "信箱", yL = "密碼", wL = "暱稱", xL = "個人網站", SL = "個人設定", EL = "個人資料", CL = "個人首頁網址", kL = "所有", NL = "我的", jL = "已通過", PL = "待審核", RL = "垃圾", OL = "置頂留言", TL = "編輯", _L = "回覆", $L = "動作", IL = "篩選", ML = "作者", bL = "內容", FL = "使用者名稱", AL = "送出", zL = "取消", DL = "於", UL = "匯入匯出", BL = "匯出中...", VL = "待認證", HL = "管理員", KL = "使用者", WL = "使用者", QL = "角色", YL = {
  management: pL,
  comment: hL,
  login: mL,
  logout: LL,
  register: gL,
  email: vL,
  password: yL,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: wL,
  website: xL,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: SL,
  profile: EL,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: CL,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: kL,
  mine: NL,
  approved: jL,
  "approved button": "通過",
  waiting: PL,
  spam: RL,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: OL,
  edit: TL,
  reply: _L,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: $L,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: IL,
  author: ML,
  content: bL,
  username: FL,
  submit: AL,
  cancel: zL,
  at: DL,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: UL,
  exporting: BL,
  export: "匯出",
  import: "匯入",
  "import success": "匯入成功",
  "import clear data confirm": "注意！匯入資料會覆蓋目前所有資料，請確認是否繼續？",
  "importing {{importedLength}}/{{maxLength}}": "開始導入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "留言資料索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "請輸入頭像 URL",
  "change avatar": "修改頭像",
  "minimum 6 characters required": "請輸入 6 位驗證碼",
  "close 2fa confirm": "兩步驟驗證可以大大提升帳戶的安全性，確定關閉嗎？",
  "two factor auth": "兩步驟驗證",
  "enable 2fa": "開啟兩步驟驗證",
  "disable 2fa": "關閉兩步驟驗證",
  "2fa description 1": "兩步驟驗證，對應的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。從名字可以看出， 「兩步驟」是 2FA 的重點，廣義的 2FA 是指提供多種方法完成使用者身分識別。",
  "2fa description 2": "開啟兩步驟驗證後，登入系統後台時，除了要提供使用者名稱和密碼外，還要提供額外的 Token，這樣可以大大提高系統的安全性。",
  "next step": "下一步",
  "download 2fa app": "下載對應的應用",
  "open app and scan qrcode": "打開兩步驟驗證的應用程式，掃描下面的QR Code",
  "input 2fa code": "填寫 6 位驗證碼",
  "2fa code": "兩步驟驗證碼",
  "forgot password": "忘記密碼",
  "get new password": "取得新密碼",
  "you will receive an email which contains a link to create new password": "您會收到一封包含建立新密碼連結的電子郵件。",
  "find password success! please go to your mailbox to reset it!": "重設密碼郵件發送成功，請到信箱中確認！",
  "find password error! try again later": "重設密碼郵件發送失敗，請稍後再試！",
  "set administrator": "成為管理員",
  "set guest": "成為使用者",
  "set label": "設定專屬標籤",
  verify: VL,
  administrator: HL,
  guest: KL,
  user: WL,
  "manage users": "使用者管理",
  role: QL,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。'
}, XL = [
  {
    label: "中文简体",
    value: "zh-CN",
    alias: ["zh-CN", "zh-cn"]
  },
  {
    label: "中文繁體",
    value: "zh-TW",
    alias: ["zh-TW"]
  },
  {
    label: "English",
    value: "en-US",
    alias: ["en", "en-US", "jp", "jp-JP"]
  }
], GL = {
  "zh-cn": { translations: Xu },
  "zh-CN": { translations: Xu },
  en: { translations: gi },
  "en-US": { translations: gi },
  "zh-TW": { translations: YL },
  jp: { translations: gi },
  "jp-JP": { translations: gi }
};
function an() {
  const e = Xr(), t = Jr(), n = zt((a) => a.user), { t: r, i18n: i } = Dt(), [o, s] = E.useState(null);
  E.useMemo(() => {
    const a = XL.find(
      (l) => l.alias.includes(i.language)
    );
    return (a == null ? void 0 : a.value) ?? "";
  }, [i.language]), E.useEffect(() => {
    !(n != null && n.email) || !(n != null && n.__version) || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((a) => a.json()).then((a) => {
      n.__version !== a.version && s(a.version);
    });
  }, [n == null ? void 0 : n.email]);
  const u = function(a) {
    a.preventDefault(), e.user.logout(), t("/ui/login");
  };
  return [
    /* @__PURE__ */ p.jsxs("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      (n == null ? void 0 : n.type) === "administrator" ? /* @__PURE__ */ p.jsx("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ p.jsxs("ul", { className: "root", children: [
        /* @__PURE__ */ p.jsx("li", { className: "parent", children: /* @__PURE__ */ p.jsx(Ke, { to: "/ui", children: r("management") }) }),
        /* @__PURE__ */ p.jsxs("ul", { className: "child", children: [
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(Ke, { to: "/ui", children: r("comment") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(Ke, { to: "/ui/user", children: r("user") }) }),
          /* @__PURE__ */ p.jsx("li", { className: "last", children: /* @__PURE__ */ p.jsx(Ke, { to: "/ui/migration", children: r("migration") }) })
        ] })
      ] }) }) : null,
      /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
        n != null && n.type ? /* @__PURE__ */ p.jsx(Ke, { to: "/ui/profile", className: "author", children: n.display_name }) : null,
        n != null && n.type ? /* @__PURE__ */ p.jsx("a", { className: "exit", href: "#", onClick: u, children: r("logout") }) : null
      ] })
    ] }, "header")
  ];
}
function JL() {
  const { t: e } = Dt(), t = Xr(), n = Jr(), r = zt((l) => l.user), [i, o] = E.useState(!1), [s, u] = E.useState(!1);
  E.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const a = async function(l) {
    l.preventDefault(), o(!1);
    const c = l.target.email.value;
    if (!c)
      return o(e("please input email"));
    try {
      u(!0), await t.user.forgot({
        email: c
      }), alert(e("find password success! please go to your mailbox to reset it!")), n("/ui/login");
    } catch {
      o(e("find password error! try again later"));
    } finally {
      u(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", style: { padding: "0 8px" }, children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: a, children: [
        /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          ),
          /* @__PURE__ */ p.jsx("p", { className: "description", style: { textAlign: "left" }, children: e(
            "you will receive an email which contains a link to create new password"
          ) })
        ] }) }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("get new password")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(Ke, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(Ke, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
const ZL = (e) => /* @__PURE__ */ E.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), qL = (e) => /* @__PURE__ */ E.createElement("svg", { width: 21, height: 20, viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("g", { clipPath: "url(#clip0_13131_3958)" }, /* @__PURE__ */ E.createElement("mask", { id: "mask0_13131_3958", style: {
  maskType: "luminance"
}, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 21, height: 20 }, /* @__PURE__ */ E.createElement("path", { d: "M0.5 0H20.5V20H0.5V0Z", fill: "white" })), /* @__PURE__ */ E.createElement("g", { mask: "url(#mask0_13131_3958)" }, /* @__PURE__ */ E.createElement("path", { d: "M16.25 0.9375H19.3171L12.6171 8.61464L20.5 19.0632H14.3286L9.49143 12.7275L3.96286 19.0632H0.892857L8.05857 10.8489L0.5 0.938929H6.82857L11.1943 6.72893L16.25 0.9375ZM15.1714 17.2232H16.8714L5.9 2.68179H4.07714L15.1714 17.2232Z", fill: "black" }))), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", { id: "clip0_13131_3958" }, /* @__PURE__ */ E.createElement("rect", { width: 20, height: 20, fill: "white", transform: "translate(0.5)" })))), e3 = (e) => /* @__PURE__ */ E.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), t3 = (e) => /* @__PURE__ */ E.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...e }, /* @__PURE__ */ E.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ E.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), n3 = (e) => /* @__PURE__ */ E.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), r3 = (e) => /* @__PURE__ */ E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, preserveAspectRatio: "xMidYMid", viewBox: "0 0 256 262", id: "google", ...e }, /* @__PURE__ */ E.createElement("path", { fill: "#4285F4", d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }), /* @__PURE__ */ E.createElement("path", { fill: "#4285F4", d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }), /* @__PURE__ */ E.createElement("path", { fill: "#FBBC05", d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }), /* @__PURE__ */ E.createElement("path", { fill: "#EB4335", d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" })), i3 = (e) => /* @__PURE__ */ E.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 100, height: 100, viewBox: "0 0 127 115", id: "shinigami", ...e }, /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", { d: "M 74.96,6.01 L 81.77,6.32 L 85.92,6.86 L 87.92,7.31 L 91.89,8.36 L 93.92,9.10 L 98.04,10.73 L 100.27,11.80 L 105.99,14.91 L 109.79,17.27 L 111.31,18.34 L 112.74,19.36 L 113.29,19.80 L 114.27,20.61 L 114.54,20.90 L 114.92,21.40 L 114.85,21.50 L 114.50,21.58 L 114.00,21.43 L 107.94,19.93 L 104.11,19.28 L 102.28,19.13 L 98.70,18.95 L 97.00,19.03 L 93.66,19.32 L 92.07,19.64 L 88.90,20.27 L 94.15,23.27 L 100.07,27.34 L 103.76,30.58 L 105.44,32.41 L 108.67,36.21 L 110.07,38.27 L 112.70,42.49 L 113.76,44.71 L 114.87,47.09 L 115.48,48.50 L 115.74,49.14 L 116.62,51.58 L 116.90,52.78 L 117.37,55.24 L 117.52,56.73 L 117.64,58.28 L 117.70,59.17 L 117.79,61.03 L 117.84,62.10 L 117.83,67.72 L 117.59,71.28 L 117.35,72.97 L 116.79,76.31 L 116.39,77.90 L 115.49,81.02 L 114.91,82.52 L 113.68,85.47 L 112.93,86.88 L 111.34,89.66 L 110.42,91.00 L 108.48,93.64 L 107.37,94.91 L 105.06,97.43 L 103.77,98.65 L 99.03,102.73 L 95.86,105.03 L 94.25,106.00 L 91.00,107.80 L 89.31,108.53 L 85.88,109.88 L 84.07,110.41 L 82.04,110.94 L 80.92,111.15 L 78.61,111.52 L 77.38,111.65 L 72.30,112.01 L 69.69,111.96 L 64.48,111.72 L 62.08,111.38 L 59.72,111.00 L 58.63,110.75 L 56.53,110.22 L 55.61,109.91 L 51.28,108.18 L 48.48,106.83 L 47.14,106.06 L 44.49,104.47 L 43.23,103.58 L 40.75,101.76 L 39.59,100.77 L 37.31,98.75 L 36.25,97.67 L 34.19,95.46 L 33.25,94.30 L 31.44,91.93 L 30.64,90.70 L 29.10,88.19 L 28.44,86.89 L 27.59,85.23 L 27.12,84.34 L 26.92,83.99 L 26.21,82.87 L 25.94,82.65 L 25.43,82.42 L 25.18,82.59 L 24.65,83.09 L 24.30,83.55 L 23.69,84.70 L 23.40,85.64 L 23.31,86.20 L 23.18,87.37 L 23.17,88.04 L 23.20,89.45 L 23.27,90.25 L 23.48,93.60 L 23.49,94.38 L 23.47,94.63 L 23.42,95.00 L 23.37,95.00 L 22.80,94.53 L 22.27,93.79 L 21.94,93.26 L 21.27,92.11 L 20.91,91.44 L 20.17,90.03 L 19.81,89.28 L 18.38,86.22 L 17.86,84.90 L 17.39,83.64 L 17.24,83.13 L 17.01,82.23 L 17.01,81.96 L 17.24,80.70 L 17.60,79.70 L 17.87,79.15 L 19.15,76.91 L 19.96,75.96 L 21.68,73.69 L 22.50,72.29 L 22.73,71.63 L 23.08,70.33 L 23.08,69.71 L 22.94,68.48 L 22.69,67.87 L 22.05,66.65 L 21.54,66.03 L 20.38,64.78 L 19.60,64.13 L 17.91,62.80 L 16.85,62.10 L 14.59,60.65 L 13.25,59.87 L 9.37,57.43 L 8.39,56.74 L 8.05,56.47 L 7.49,55.99 L 7.41,55.86 L 7.32,54.88 L 7.40,53.70 L 7.51,52.92 L 7.75,51.24 L 7.93,50.27 L 8.32,48.26 L 8.56,47.20 L 9.07,44.99 L 9.36,43.79 L 9.49,43.31 L 9.73,42.43 L 9.84,42.11 L 10.04,41.53 L 10.13,41.36 L 10.45,40.92 L 10.60,41.08 L 10.89,41.63 L 11.05,42.21 L 11.61,43.77 L 12.15,45.02 L 12.49,45.72 L 14.01,48.69 L 14.93,50.27 L 16.84,53.43 L 17.81,54.86 L 18.77,56.25 L 19.23,56.86 L 20.13,58.03 L 20.54,58.50 L 21.50,59.57 L 22.00,60.08 L 22.18,60.21 L 22.49,60.40 L 22.57,60.36 L 22.68,60.19 L 22.67,59.96 L 22.58,59.39 L 22.46,58.95 L 22.18,57.95 L 21.96,57.28 L 21.47,55.81 L 21.15,54.88 L 20.45,52.91 L 20.02,51.71 L 18.39,46.36 L 17.93,44.55 L 17.75,43.74 L 17.44,42.20 L 17.36,41.61 L 17.11,39.26 L 17.12,38.22 L 17.24,37.88 L 17.56,37.31 L 17.87,37.12 L 18.60,36.80 L 19.13,36.66 L 21.69,36.21 L 23.67,36.01 L 24.50,36.01 L 26.14,35.85 L 26.97,35.52 L 27.32,35.18 L 27.98,34.39 L 28.32,33.75 L 29.01,32.29 L 29.44,31.25 L 30.66,28.84 L 31.74,27.15 L 32.39,26.28 L 35.27,22.74 L 37.02,21.00 L 40.68,17.60 L 42.64,16.11 L 46.62,13.29 L 48.58,12.26 L 54.79,9.44 L 58.96,8.00 L 61.10,7.49 L 65.45,6.61 L 67.74,6.37 L 72.43,6.01 M 33.94,75.66 L 33.78,75.82 L 33.83,76.85 L 34.39,78.07 L 34.92,78.94 L 36.16,80.85 L 37.03,82.06 L 38.93,84.63 L 40.12,86.15 L 43.03,89.83 L 44.79,92.03 L 45.53,92.93 L 46.90,94.58 L 47.37,95.12 L 47.80,95.62 L 47.95,95.78 L 48.21,96.05 L 48.27,96.09 L 48.78,96.78 L 48.91,97.34 L 48.84,97.59 L 49.02,98.89 L 49.48,100.13 L 49.82,100.75 L 50.59,101.93 L 50.99,102.34 L 51.77,103.00 L 52.04,103.00 L 52.76,102.87 L 52.95,102.58 L 52.88,102.27 L 52.62,101.53 L 52.32,100.92 L 51.58,99.53 L 51.01,98.52 L 49.61,95.81 L 49.28,95.08 L 49.17,94.81 L 49.01,94.34 L 49.01,94.24 L 48.73,93.72 L 48.34,93.50 L 48.08,93.50 L 47.19,93.23 L 46.56,92.84 L 46.33,92.59 L 46.09,92.14 L 46.39,92.19 L 46.75,92.40 L 47.63,92.63 L 48.00,92.44 L 48.00,92.18 L 47.58,91.07 L 46.97,90.38 L 46.59,90.11 L 45.80,89.66 L 45.43,89.58 L 44.73,89.55 L 44.50,89.76 L 44.16,89.87 L 44.27,89.48 L 44.49,89.10 L 44.82,88.23 L 44.60,88.13 L 44.27,88.33 L 43.57,88.29 L 43.32,87.73 L 43.36,87.24 L 43.07,86.09 L 42.54,85.70 L 42.18,85.77 L 41.42,85.65 L 41.36,85.22 L 41.58,84.87 L 41.81,84.20 L 41.57,84.15 L 41.27,84.33 L 40.57,84.29 L 40.32,83.73 L 40.36,83.24 L 40.06,82.06 L 39.46,81.73 L 39.00,81.83 L 38.15,81.86 L 38.02,81.64 L 38.22,81.45 L 38.34,80.93 L 38.24,80.41 L 38.11,80.07 L 37.42,78.59 L 36.85,77.79 L 35.88,76.58 L 35.30,76.01 L 35.04,75.85 L 34.54,75.60 L 34.33,75.59 M 94.28,27.80 L 94.19,28.01 L 94.30,28.28 L 94.64,28.95 L 94.97,29.46 L 95.77,30.61 L 96.35,31.37 L 97.75,33.55 L 98.61,35.24 L 99.00,36.20 L 99.76,38.23 L 100.11,39.37 L 100.77,41.74 L 101.07,43.06 L 101.64,45.79 L 101.89,47.29 L 102.37,50.40 L 102.58,52.10 L 102.98,55.59 L 103.14,57.49 L 103.45,61.39 L 103.58,63.50 L 103.79,68.32 L 103.82,71.06 L 103.76,72.22 L 103.60,74.42 L 103.43,75.35 L 103.04,77.11 L 102.75,77.86 L 102.08,79.27 L 101.64,79.88 L 100.67,81.04 L 100.06,81.56 L 98.75,82.57 L 97.95,83.05 L 96.25,84.01 L 95.25,84.50 L 92.86,85.76 L 91.46,86.60 L 90.89,86.99 L 89.87,87.73 L 89.56,88.03 L 89.06,88.58 L 89.05,88.75 L 88.72,89.63 L 88.27,90.00 L 88.00,90.00 L 87.13,90.35 L 87.02,90.92 L 87.19,91.37 L 87.69,92.40 L 88.17,93.07 L 89.29,94.54 L 90.08,95.43 L 91.47,97.17 L 92.11,98.18 L 92.31,98.63 L 92.60,99.49 L 92.63,99.89 L 92.60,100.67 L 92.48,101.06 L 92.22,101.91 L 92.18,102.17 L 92.16,102.59 L 92.27,102.65 L 92.58,102.67 L 92.88,102.55 L 93.59,102.22 L 94.12,101.94 L 96.06,100.67 L 97.47,99.55 L 98.22,98.88 L 101.28,95.93 L 102.79,94.20 L 105.75,90.62 L 107.01,88.81 L 108.22,87.01 L 108.74,86.14 L 109.71,84.44 L 110.08,83.65 L 112.57,77.19 L 113.73,72.87 L 114.05,70.71 L 114.54,66.40 L 114.54,64.26 L 114.36,60.00 L 114.03,57.91 L 113.20,53.76 L 112.54,51.74 L 111.06,47.73 L 110.08,45.79 L 107.96,41.97 L 106.66,40.15 L 103.91,36.56 L 102.30,34.87 L 99.77,32.29 L 98.28,30.84 L 97.65,30.26 L 96.47,29.19 L 96.00,28.81 L 95.15,28.16 L 94.86,27.99 L 94.37,27.75 M 29.51,77.19 L 29.18,77.46 L 29.09,77.67 L 28.91,78.71 L 29.08,79.48 L 29.58,81.17 L 30.05,82.19 L 31.11,84.34 L 31.82,85.51 L 33.33,87.91 L 34.22,89.15 L 36.07,91.62 L 37.08,92.81 L 39.15,95.16 L 40.22,96.22 L 42.39,98.24 L 43.48,99.07 L 44.83,100.08 L 45.44,100.52 L 46.63,101.32 L 47.13,101.63 L 48.03,102.16 L 48.34,102.30 L 48.85,102.49 L 48.91,102.42 L 48.88,101.75 L 48.51,101.11 L 48.18,100.78 L 47.35,99.56 L 47.00,98.64 L 47.00,98.27 L 46.83,97.72 L 46.55,97.18 L 46.34,96.82 L 45.32,95.21 L 44.60,94.17 L 43.02,91.97 L 42.10,90.75 L 40.19,88.24 L 39.19,86.97 L 37.18,84.45 L 36.22,83.29 L 34.33,81.04 L 33.51,80.12 L 31.97,78.43 L 31.41,77.89 L 30.88,77.41 L 30.69,77.27 L 30.34,77.05 L 30.25,77.04 M 52.21,94.45 L 52.24,95.26 L 52.65,96.07 L 53.00,96.50 L 53.73,97.26 L 54.05,97.45 L 54.65,97.69 L 54.79,97.55 L 54.76,96.74 L 54.35,95.93 L 54.00,95.50 L 52.95,94.55 L 52.35,94.31 M 35.63,56.33 L 35.40,56.85 L 35.31,57.31 L 35.15,58.36 L 35.10,59.09 L 35.02,60.69 L 35.02,61.69 L 34.71,64.84 L 34.50,65.65 L 34.38,65.94 L 34.12,66.42 L 33.98,66.51 L 33.70,66.98 L 33.71,67.45 L 33.80,67.76 L 34.04,68.42 L 34.25,68.80 L 34.72,69.61 L 35.05,70.06 L 36.35,72.39 L 36.59,73.04 L 36.63,73.30 L 36.65,73.75 L 36.58,73.88 L 36.49,74.73 L 36.66,75.16 L 36.83,75.46 L 37.22,76.12 L 37.53,76.57 L 38.21,77.54 L 38.68,78.17 L 39.71,79.53 L 40.37,80.38 L 41.79,82.22 L 42.68,83.34 L 44.56,85.73 L 45.69,87.17 L 46.89,88.67 L 47.43,89.30 L 48.47,90.49 L 48.93,90.97 L 49.83,91.86 L 50.23,92.20 L 51.01,92.80 L 51.37,93.00 L 52.05,93.34 L 52.37,93.41 L 52.99,93.49 L 53.29,93.43 L 54.42,92.98 L 54.98,92.42 L 55.65,90.75 L 55.37,89.39 L 54.89,88.62 L 53.70,87.02 L 52.77,86.15 L 50.71,84.37 L 49.36,83.45 L 44.78,79.67 L 42.43,76.95 L 41.54,75.38 L 40.70,73.76 L 40.34,72.87 L 39.65,71.05 L 39.36,70.04 L 38.81,67.97 L 38.58,66.83 L 38.13,64.46 L 37.94,63.15 L 37.46,60.27 L 37.13,58.72 L 36.96,58.13 L 36.63,57.09 L 36.48,56.76 L 36.17,56.22 L 36.02,56.15 L 35.75,56.14 M 64.09,46.78 L 63.48,47.00 L 62.24,47.54 L 61.61,47.91 L 60.35,48.73 L 59.73,49.24 L 57.26,51.50 L 56.16,52.93 L 54.08,55.95 L 53.30,57.65 L 52.05,60.69 L 51.49,62.45 L 51.34,63.33 L 51.10,65.10 L 51.08,66.10 L 51.10,68.22 L 51.18,69.53 L 51.41,72.14 L 51.63,73.64 L 51.80,74.29 L 52.17,75.54 L 52.44,76.11 L 53.03,77.20 L 53.43,77.71 L 54.32,78.73 L 54.89,79.24 L 56.12,80.27 L 56.90,80.82 L 58.55,81.94 L 59.56,82.56 L 61.70,83.87 L 62.98,84.62 L 65.03,85.79 L 65.99,86.32 L 67.85,87.31 L 68.64,87.71 L 70.13,88.43 L 70.66,88.65 L 71.58,89.00 L 71.76,89.00 L 72.90,88.75 L 73.98,88.36 L 74.65,88.08 L 76.06,87.45 L 76.84,87.07 L 78.44,86.27 L 79.28,85.83 L 82.66,83.96 L 84.18,83.02 L 85.64,82.09 L 86.27,81.66 L 87.45,80.81 L 87.89,80.44 L 90.56,77.72 L 92.05,75.75 L 92.58,74.83 L 93.45,73.08 L 93.56,72.44 L 93.61,71.84 L 93.55,71.64 L 93.34,71.28 L 93.13,71.21 L 92.32,70.16 L 91.98,68.90 L 91.97,68.17 L 91.90,66.69 L 91.75,66.24 L 91.55,66.31 L 91.07,66.64 L 90.64,67.13 L 90.17,67.67 L 89.88,68.02 L 89.25,68.78 L 88.87,69.25 L 87.22,71.08 L 86.24,71.95 L 85.76,72.23 L 84.79,72.71 L 84.27,72.83 L 83.17,73.00 L 82.53,73.00 L 79.86,72.58 L 79.09,72.30 L 78.78,72.13 L 78.23,71.77 L 78.06,71.58 L 77.56,70.61 L 77.37,69.79 L 77.34,69.32 L 77.40,67.30 L 77.66,66.18 L 78.32,63.93 L 78.84,62.89 L 80.00,60.91 L 83.15,57.75 L 79.83,54.29 L 76.97,51.72 L 74.85,50.18 L 73.73,49.52 L 71.46,48.28 L 70.30,47.79 L 68.00,46.92 L 66.88,46.66 L 65.25,46.57 M 90.75,70.49 L 90.70,70.85 L 90.53,71.76 L 90.38,72.50 L 89.38,75.76 L 88.39,77.59 L 87.66,78.41 L 86.04,80.02 L 84.90,80.82 L 83.72,81.64 L 83.03,82.06 L 81.59,82.92 L 80.76,83.38 L 78.67,84.56 L 77.80,85.03 L 76.19,85.89 L 75.52,86.21 L 74.26,86.78 L 73.72,86.95 L 72.70,87.23 L 72.22,87.26 L 71.30,87.25 L 70.83,87.15 L 69.88,86.87 L 69.35,86.62 L 68.25,86.08 L 67.60,85.71 L 66.22,84.91 L 65.39,84.41 L 62.43,82.62 L 60.73,81.54 L 60.00,81.04 L 58.61,80.08 L 58.02,79.63 L 56.92,78.75 L 56.46,78.34 L 54.89,76.73 L 54.41,75.94 L 53.62,74.36 L 53.43,73.50 L 52.78,70.50 L 56.08,74.40 L 57.84,76.21 L 59.33,77.57 L 60.18,78.26 L 63.73,81.04 L 65.37,82.08 L 71.35,85.86 L 75.40,83.79 L 80.44,81.00 L 83.21,79.22 L 84.33,78.34 L 86.39,76.60 L 87.17,75.72 L 88.58,73.97 L 89.07,73.07 L 90.16,71.09 L 90.58,70.40 L 90.66,70.36 M 31.05,68.79 L 30.63,69.01 L 29.72,69.53 L 29.17,69.88 L 28.03,70.65 L 27.41,71.10 L 24.84,73.05 L 23.63,74.09 L 22.46,75.13 L 21.95,75.63 L 20.98,76.61 L 20.62,77.05 L 18.78,79.73 L 18.36,80.57 L 18.23,80.93 L 18.04,81.60 L 18.04,81.83 L 18.11,82.18 L 18.21,82.19 L 18.46,82.12 L 18.64,81.94 L 19.03,81.49 L 19.27,81.13 L 19.76,80.34 L 20.03,79.83 L 21.18,78.13 L 22.22,76.91 L 22.85,76.29 L 25.55,73.84 L 26.98,72.92 L 28.93,71.58 L 30.07,70.73 L 30.53,70.36 L 31.35,69.65 L 31.60,69.38 L 32.00,68.90 L 32.00,68.78 L 31.63,68.61 M 34.63,76.20 L 34.93,76.51 L 35.12,76.73 L 35.96,77.81 L 36.41,78.50 L 37.14,79.68 L 37.34,80.09 L 37.63,80.79 L 37.62,80.92 L 37.49,81.04 L 37.26,80.86 L 36.71,80.31 L 36.28,79.75 L 35.27,78.35 L 34.74,77.50 L 34.56,77.15 L 34.26,76.51 L 34.21,76.31 L 34.20,76.00 L 34.33,76.00 M 59.80,58.38 L 61.07,58.98 L 61.66,59.42 L 62.82,60.39 L 63.34,60.98 L 64.34,62.21 L 64.75,62.89 L 65.52,64.30 L 65.80,65.03 L 66.28,66.50 L 66.40,67.23 L 66.53,68.67 L 66.45,69.35 L 66.18,70.66 L 65.87,71.24 L 65.42,71.89 L 65.11,72.14 L 64.43,72.59 L 64.02,72.74 L 62.23,73.14 L 61.21,73.06 L 59.12,72.70 L 58.12,72.24 L 56.19,71.16 L 55.45,70.35 L 54.11,68.50 L 53.48,67.16 L 53.29,66.48 L 53.00,65.10 L 52.97,64.42 L 52.98,63.07 L 53.11,62.45 L 53.42,61.23 L 53.69,60.69 L 54.29,59.68 L 54.69,59.28 L 55.56,58.56 L 56.08,58.34 L 57.20,58.00 L 57.85,58.00 M 84.91,64.77 L 84.56,64.95 L 82.99,65.90 L 82.16,66.55 L 80.55,67.89 L 79.96,68.53 L 79.43,69.15 L 79.26,69.41 L 79.00,69.91 L 79.00,70.09 L 79.23,70.74 L 79.59,70.88 L 80.46,71.04 L 81.01,70.95 L 82.16,70.66 L 82.72,70.37 L 83.80,69.71 L 84.19,69.25 L 85.64,67.43 L 86.26,66.47 L 86.42,66.10 L 86.61,65.42 L 86.56,65.17 L 86.35,64.72 L 86.10,64.56 L 85.50,64.56 M 57.88,64.57 L 57.16,65.32 L 57.02,65.94 L 57.11,66.30 L 57.40,67.07 L 57.72,67.52 L 58.46,68.46 L 59.00,69.00 L 60.18,70.04 L 60.76,70.36 L 61.89,70.88 L 62.37,70.93 L 63.26,70.90 L 63.55,70.68 L 64.00,70.09 L 64.00,69.57 L 63.79,68.82 L 63.45,68.25 L 63.22,67.95 L 62.09,66.70 L 61.40,66.13 L 59.98,65.09 L 59.35,64.79 L 58.75,64.54 L 58.50,64.50 L 58.03,64.48 M 64.71,19.14 L 64.20,19.18 L 62.33,19.41 L 61.48,19.72 L 59.78,20.49 L 58.73,21.17 L 57.64,21.91 L 57.00,22.36 L 55.66,23.34 L 54.85,23.93 L 49.87,28.08 L 47.06,30.93 L 45.90,32.44 L 43.72,35.50 L 42.85,37.13 L 41.24,40.48 L 40.62,42.28 L 40.05,44.43 L 39.72,46.09 L 39.59,47.01 L 39.15,50.88 L 39.07,52.94 L 39.00,57.08 L 39.11,59.00 L 39.25,60.88 L 39.35,61.75 L 39.59,63.41 L 39.75,64.12 L 39.88,64.67 L 39.95,64.83 L 40.07,65.08 L 40.13,65.09 L 40.24,65.02 L 40.30,64.87 L 40.40,64.48 L 40.45,64.16 L 40.56,63.43 L 40.61,62.93 L 40.70,61.85 L 40.75,61.18 L 40.85,59.74 L 40.90,58.87 L 41.00,57.05 L 41.05,56.00 L 41.40,50.54 L 41.71,47.54 L 41.90,46.31 L 42.31,44.02 L 42.56,43.10 L 43.10,41.40 L 43.42,40.73 L 44.84,38.14 L 45.69,36.90 L 46.00,36.59 L 46.28,36.33 L 46.39,36.29 L 46.57,36.27 L 46.62,36.35 L 46.67,36.59 L 46.64,36.81 L 46.54,37.33 L 46.43,37.70 L 46.32,38.30 L 46.39,38.44 L 46.50,38.39 L 46.76,38.18 L 46.96,37.95 L 47.40,37.40 L 47.69,37.00 L 50.86,33.06 L 53.40,30.26 L 54.72,28.93 L 57.35,26.35 L 58.55,25.30 L 59.71,24.31 L 60.23,23.91 L 61.23,23.17 L 61.65,22.91 L 63.33,22.04 L 64.68,21.47 L 65.41,21.21 L 68.45,20.25 L 69.75,20.03 L 74.50,19.24 L 68.00,19.13 L 65.90,19.12 M 69.98,9.20 L 67.26,9.47 L 66.00,9.68 L 63.56,10.15 L 62.47,10.47 L 57.44,12.21 L 53.88,13.66 L 52.30,14.39 L 50.78,15.11 L 50.13,15.45 L 48.90,16.10 L 48.44,16.38 L 47.62,16.90 L 47.40,17.10 L 47.11,17.44 L 47.20,17.53 L 47.83,17.49 L 48.68,17.28 L 49.27,17.09 L 50.55,16.67 L 51.29,16.39 L 52.85,15.81 L 53.69,15.47 L 60.33,13.30 L 65.07,12.19 L 67.31,11.83 L 69.51,11.52 L 70.53,11.42 L 72.50,11.26 L 73.36,11.25 L 74.98,11.27 L 75.63,11.36 L 76.82,11.57 L 77.21,11.76 L 78.25,12.34 L 78.44,12.60 L 78.24,12.69 L 77.66,12.82 L 77.04,12.86 L 75.56,12.92 L 74.46,12.93 L 67.79,13.55 L 63.27,14.46 L 61.02,15.13 L 56.56,16.61 L 54.41,17.53 L 50.18,19.48 L 48.22,20.59 L 44.39,22.92 L 42.70,24.19 L 39.45,26.78 L 38.11,28.15 L 35.61,30.93 L 34.71,32.35 L 33.86,33.78 L 33.53,34.49 L 32.94,35.92 L 32.75,36.63 L 31.59,41.00 L 26.29,41.00 L 24.27,41.04 L 23.18,41.13 L 22.76,41.23 L 22.00,41.47 L 21.73,41.66 L 21.27,42.11 L 21.15,42.43 L 20.96,43.16 L 20.96,43.65 L 21.03,44.71 L 21.15,45.40 L 21.44,46.87 L 21.66,47.78 L 22.15,49.73 L 22.46,50.90 L 23.12,53.16 L 23.56,54.47 L 23.77,55.01 L 24.18,56.02 L 24.37,56.40 L 24.73,57.07 L 24.88,57.27 L 25.16,57.57 L 25.27,57.57 L 25.45,57.48 L 25.50,57.27 L 25.56,56.74 L 25.53,56.31 L 25.44,55.32 L 25.33,54.64 L 25.34,51.56 L 25.87,49.81 L 26.37,49.14 L 27.51,47.94 L 28.27,47.58 L 29.92,47.05 L 30.90,47.08 L 32.36,47.28 L 32.54,47.40 L 32.52,47.46 L 32.40,47.60 L 32.23,47.67 L 31.08,48.52 L 30.37,49.42 L 30.05,50.01 L 29.45,51.25 L 29.19,51.97 L 28.71,53.45 L 28.53,54.25 L 27.96,57.54 L 27.95,59.14 L 28.00,60.71 L 28.11,61.43 L 28.38,62.82 L 28.61,63.42 L 29.14,64.59 L 29.40,64.79 L 29.65,64.92 L 29.78,64.89 L 30.03,64.75 L 30.16,64.58 L 30.42,64.17 L 30.55,63.86 L 30.81,63.16 L 30.95,62.71 L 31.22,61.73 L 31.37,61.13 L 31.66,59.86 L 31.81,59.12 L 33.40,53.89 L 34.10,52.20 L 34.45,51.46 L 35.17,50.08 L 35.51,49.57 L 37.28,46.63 L 37.69,45.79 L 37.82,45.46 L 38.02,44.87 L 38.02,44.71 L 38.20,43.68 L 38.47,42.78 L 38.67,42.25 L 39.64,39.96 L 40.29,38.66 L 41.68,36.03 L 42.44,34.78 L 43.97,32.38 L 44.69,31.45 L 46.33,29.66 L 47.83,28.21 L 48.72,27.43 L 52.54,24.18 L 54.46,22.78 L 56.76,21.11 L 58.05,20.20 L 58.62,19.83 L 60.74,18.60 L 61.81,18.21 L 62.91,17.87 L 63.52,17.73 L 64.81,17.48 L 65.57,17.37 L 67.18,17.16 L 68.15,17.06 L 70.21,16.86 L 71.46,16.75 L 76.24,16.42 L 79.93,16.25 L 81.86,16.21 L 85.74,16.14 L 87.60,16.14 L 91.22,16.17 L 92.76,16.22 L 97.08,16.32 L 99.54,16.32 L 100.50,16.28 L 102.19,16.20 L 102.67,16.13 L 103.09,16.05 L 103.19,16.01 L 103.32,15.92 L 103.26,15.86 L 102.41,15.35 L 101.37,14.85 L 100.67,14.53 L 99.15,13.88 L 98.28,13.52 L 96.46,12.78 L 95.50,12.42 L 91.75,11.20 L 89.04,10.52 L 87.61,10.24 L 81.73,9.33 L 78.73,9.15 L 72.75,8.99 M 10.88,48.08 L 10.42,48.38 L 10.26,48.83 L 10.01,49.92 L 10.02,50.75 L 10.20,52.99 L 10.59,54.21 L 11.03,54.82 L 12.08,56.09 L 12.97,56.89 L 13.92,57.73 L 14.51,58.22 L 15.75,59.25 L 16.50,59.86 L 17.87,60.96 L 18.51,61.44 L 19.75,62.37 L 20.28,62.74 L 21.26,63.42 L 21.61,63.63 L 22.22,63.96 L 22.33,63.96 L 22.25,63.52 L 21.80,62.82 L 21.41,62.30 L 20.53,61.17 L 19.96,60.48 L 18.74,59.04 L 18.04,58.25 L 14.25,53.53 L 13.30,52.14 L 12.97,51.58 L 12.43,50.56 L 12.35,50.25 L 11.65,48.54 L 11.12,48.03 M 83.48,23.18 L 83.67,23.63 L 84.13,24.16 L 84.51,24.52 L 85.34,25.27 L 85.86,25.70 L 86.98,26.60 L 87.61,27.07 L 90.12,29.16 L 91.60,30.63 L 92.26,31.43 L 93.53,33.08 L 94.08,33.98 L 95.15,35.84 L 95.61,36.87 L 96.50,39.00 L 96.89,40.19 L 97.63,42.64 L 97.95,44.01 L 98.56,46.85 L 98.82,48.42 L 99.33,51.69 L 99.55,53.50 L 100.14,57.57 L 100.34,58.75 L 100.43,59.22 L 100.61,60.07 L 100.68,60.33 L 101.00,61.23 L 101.18,61.47 L 101.54,61.80 L 101.67,61.66 L 101.81,61.24 L 101.85,60.74 L 101.84,60.40 L 101.76,58.77 L 101.63,57.66 L 101.33,55.28 L 101.12,53.91 L 100.66,51.06 L 100.39,49.57 L 99.82,46.55 L 99.52,45.09 L 98.89,42.20 L 98.58,40.90 L 97.96,38.43 L 97.67,37.46 L 97.10,35.70 L 96.85,35.19 L 95.77,33.49 L 94.74,32.18 L 94.12,31.48 L 91.37,28.58 L 89.89,27.26 L 88.42,25.97 L 87.73,25.42 L 86.38,24.38 L 85.80,24.00 L 84.72,23.34 L 84.32,23.20 L 83.63,23.03 Z", fill: "var(--color-shinigami-1, #373c42)" }), /* @__PURE__ */ E.createElement("path", { d: "M 60.00,113.44 L 59.11,113.24 L 56.98,112.64 L 55.89,112.32 L 53.58,111.52 L 52.43,111.11 L 50.20,110.21 L 47.27,108.88 L 46.42,108.45 L 44.57,107.31 L 43.63,106.70 L 41.66,105.28 L 39.68,103.80 L 35.80,100.37 L 34.87,99.50 L 33.14,97.76 L 32.30,96.90 L 30.85,95.23 L 30.17,94.41 L 29.08,92.91 L 27.97,90.93 L 27.69,90.26 L 27.16,89.26 L 26.90,88.82 L 26.42,88.28 L 26.20,88.06 L 25.81,87.92 L 25.64,87.90 L 25.37,88.14 L 25.25,88.30 L 25.13,88.88 L 25.08,89.20 L 25.13,90.07 L 25.18,90.54 L 25.42,91.67 L 26.04,93.61 L 26.25,94.15 L 26.48,95.01 L 26.56,95.42 L 26.55,96.10 L 26.52,96.42 L 26.25,97.01 L 25.55,97.88 L 25.08,98.35 L 24.33,98.77 L 24.14,98.82 L 23.75,98.75 L 23.55,98.68 L 23.11,98.33 L 22.88,98.12 L 22.33,97.46 L 22.05,97.09 L 21.36,96.09 L 21.00,95.54 L 20.13,94.14 L 18.57,91.56 L 17.99,90.61 L 17.06,88.85 L 16.62,88.00 L 15.97,86.43 L 15.67,85.66 L 15.29,84.23 L 15.13,83.52 L 15.03,82.20 L 15.01,81.54 L 15.17,80.28 L 15.29,79.66 L 15.73,78.44 L 15.99,77.83 L 16.70,76.60 L 18.07,74.73 L 18.92,73.70 L 20.15,71.58 L 20.40,71.08 L 20.70,70.22 L 20.82,69.25 L 20.78,69.01 L 20.18,68.23 L 19.81,67.81 L 18.68,66.76 L 18.06,66.22 L 16.55,65.04 L 14.00,63.25 L 12.79,62.46 L 10.83,61.17 L 9.92,60.56 L 8.48,59.57 L 7.82,59.10 L 6.84,58.31 L 6.41,57.92 L 5.81,57.22 L 5.55,56.87 L 5.25,56.15 L 5.13,55.79 L 5.07,54.96 L 5.05,54.52 L 5.14,53.49 L 5.36,51.58 L 5.60,49.55 L 6.34,45.88 L 6.75,44.14 L 7.75,41.25 L 8.01,40.59 L 8.55,39.48 L 8.82,38.95 L 9.39,38.14 L 9.67,37.77 L 10.25,37.29 L 11.09,37.00 L 11.74,37.00 L 12.54,37.55 L 13.05,39.25 L 13.06,39.81 L 13.50,41.59 L 13.76,42.53 L 14.45,44.43 L 14.62,44.88 L 14.96,45.64 L 15.12,45.99 L 15.41,46.49 L 15.54,46.70 L 15.73,46.83 L 15.88,46.50 L 15.88,46.36 L 15.82,45.76 L 15.78,45.41 L 15.65,44.47 L 15.04,41.00 L 14.90,40.28 L 14.73,39.04 L 14.67,38.46 L 14.66,37.47 L 14.67,37.01 L 14.85,36.25 L 14.96,35.90 L 15.34,35.34 L 15.55,35.08 L 16.16,34.69 L 16.49,34.52 L 17.35,34.28 L 17.81,34.18 L 18.93,34.06 L 20.95,34.00 L 22.12,34.00 L 23.70,33.92 L 24.40,33.83 L 25.36,33.35 L 25.81,33.03 L 26.59,31.84 L 26.80,31.49 L 27.25,30.59 L 28.04,28.92 L 28.40,28.14 L 29.43,26.45 L 29.99,25.59 L 31.35,23.81 L 32.77,22.01 L 36.34,18.39 L 38.19,16.62 L 42.21,13.43 L 43.22,12.69 L 45.23,11.36 L 48.17,9.69 L 49.63,8.96 L 52.64,7.68 L 54.17,7.07 L 57.30,6.04 L 60.45,5.07 L 66.93,3.90 L 68.55,3.67 L 71.80,3.41 L 73.42,3.32 L 76.64,3.33 L 78.24,3.37 L 81.39,3.65 L 86.00,4.39 L 87.58,4.72 L 91.04,5.77 L 92.80,6.34 L 96.47,7.79 L 98.32,8.55 L 101.98,10.26 L 103.79,11.15 L 107.23,13.01 L 108.89,13.96 L 111.88,15.85 L 113.30,16.79 L 115.62,18.59 L 116.67,19.46 L 118.10,21.03 L 118.39,21.41 L 118.77,22.09 L 119.00,23.01 L 119.00,23.60 L 118.74,24.35 L 118.55,24.66 L 117.77,24.88 L 117.29,24.92 L 115.79,24.61 L 115.36,24.50 L 114.33,24.19 L 112.50,23.58 L 111.04,23.08 L 107.62,22.27 L 105.89,21.91 L 102.56,21.46 L 101.78,21.37 L 100.37,21.28 L 99.70,21.25 L 98.60,21.28 L 98.10,21.31 L 97.43,21.48 L 97.00,21.88 L 97.00,22.19 L 97.27,22.67 L 97.92,23.00 L 98.14,23.00 L 98.94,23.44 L 99.39,23.73 L 100.57,24.65 L 101.19,25.15 L 102.62,26.43 L 103.36,27.11 L 104.92,28.63 L 106.49,30.18 L 109.51,33.50 L 110.22,34.31 L 111.45,35.83 L 112.90,37.84 L 113.95,39.48 L 115.79,43.12 L 116.66,44.99 L 118.09,48.98 L 118.75,51.00 L 119.73,55.18 L 120.64,61.50 L 120.76,63.04 L 120.77,66.11 L 120.74,67.63 L 120.44,70.66 L 120.25,72.17 L 119.66,75.15 L 119.33,76.62 L 118.46,79.53 L 117.99,80.96 L 116.85,83.77 L 116.25,85.17 L 114.87,87.86 L 114.15,89.20 L 112.53,91.77 L 111.69,93.04 L 109.85,95.46 L 108.90,96.65 L 106.86,98.91 L 105.81,100.01 L 103.58,102.09 L 102.44,103.10 L 100.02,104.97 L 98.80,105.87 L 96.23,107.52 L 94.92,108.32 L 92.20,109.72 L 90.83,110.40 L 87.97,111.55 L 86.53,112.09 L 83.57,112.96 L 79.00,113.94 L 77.98,114.10 L 76.17,114.36 L 75.30,114.49 L 73.72,114.66 L 72.19,114.81 L 69.47,114.84 L 68.11,114.80 L 65.23,114.44 L 64.47,114.32 L 62.80,114.01 L 61.94,113.85 M 84.07,110.41 L 85.88,109.88 L 89.31,108.53 L 91.00,107.80 L 94.25,106.00 L 95.86,105.03 L 99.03,102.73 L 103.77,98.65 L 105.06,97.43 L 107.37,94.91 L 108.48,93.64 L 110.42,91.00 L 111.34,89.66 L 112.93,86.88 L 113.68,85.47 L 114.91,82.52 L 115.49,81.02 L 116.39,77.90 L 116.79,76.31 L 117.35,72.97 L 117.59,71.28 L 117.83,67.72 L 117.84,62.10 L 117.79,61.03 L 117.70,59.17 L 117.64,58.28 L 117.52,56.73 L 117.37,55.24 L 116.90,52.78 L 116.62,51.58 L 115.74,49.14 L 115.48,48.50 L 114.87,47.09 L 113.76,44.71 L 112.70,42.49 L 110.07,38.27 L 108.67,36.21 L 105.44,32.41 L 103.76,30.58 L 100.07,27.34 L 94.15,23.27 L 88.90,20.27 L 92.07,19.64 L 93.66,19.32 L 97.00,19.03 L 98.70,18.95 L 102.28,19.13 L 104.11,19.28 L 107.94,19.93 L 114.00,21.43 L 114.50,21.58 L 114.85,21.50 L 114.92,21.40 L 114.54,20.90 L 114.27,20.61 L 113.29,19.80 L 112.74,19.36 L 111.31,18.34 L 109.79,17.27 L 105.99,14.91 L 100.27,11.80 L 98.04,10.73 L 93.92,9.10 L 91.89,8.36 L 87.92,7.31 L 85.92,6.86 L 81.77,6.32 L 74.96,6.01 L 72.43,6.01 L 67.74,6.37 L 65.45,6.61 L 61.10,7.49 L 58.96,8.00 L 54.79,9.44 L 48.58,12.26 L 46.62,13.29 L 42.64,16.11 L 40.68,17.60 L 37.02,21.00 L 35.27,22.74 L 32.39,26.28 L 31.74,27.15 L 30.66,28.84 L 29.44,31.25 L 29.01,32.29 L 28.32,33.75 L 27.98,34.39 L 27.32,35.18 L 26.97,35.52 L 26.14,35.85 L 24.50,36.01 L 23.67,36.01 L 21.69,36.21 L 19.13,36.66 L 18.60,36.80 L 17.87,37.12 L 17.56,37.31 L 17.24,37.88 L 17.12,38.22 L 17.11,39.26 L 17.36,41.61 L 17.44,42.20 L 17.75,43.74 L 17.93,44.55 L 18.39,46.36 L 20.02,51.71 L 20.45,52.91 L 21.15,54.88 L 21.47,55.81 L 21.96,57.28 L 22.18,57.95 L 22.46,58.95 L 22.58,59.39 L 22.67,59.96 L 22.68,60.19 L 22.57,60.36 L 22.49,60.40 L 22.18,60.21 L 22.00,60.08 L 21.50,59.57 L 20.54,58.50 L 20.13,58.03 L 19.23,56.86 L 18.77,56.25 L 17.81,54.86 L 16.84,53.43 L 14.93,50.27 L 14.01,48.69 L 12.49,45.72 L 12.15,45.02 L 11.61,43.77 L 11.05,42.21 L 10.89,41.63 L 10.60,41.08 L 10.45,40.92 L 10.13,41.36 L 10.04,41.53 L 9.84,42.11 L 9.73,42.43 L 9.49,43.31 L 9.36,43.79 L 9.07,44.99 L 8.56,47.20 L 8.32,48.26 L 7.93,50.27 L 7.75,51.24 L 7.51,52.92 L 7.40,53.70 L 7.32,54.88 L 7.41,55.86 L 7.49,55.99 L 8.05,56.47 L 8.39,56.74 L 9.37,57.43 L 13.25,59.87 L 14.59,60.65 L 16.85,62.10 L 17.91,62.80 L 19.60,64.13 L 20.38,64.78 L 21.54,66.03 L 22.05,66.65 L 22.69,67.87 L 22.94,68.48 L 23.08,69.71 L 23.08,70.33 L 22.73,71.63 L 22.50,72.29 L 21.68,73.69 L 19.96,75.96 L 19.15,76.91 L 17.87,79.15 L 17.60,79.70 L 17.24,80.70 L 17.01,81.96 L 17.01,82.23 L 17.24,83.13 L 17.39,83.64 L 17.86,84.90 L 18.38,86.22 L 19.81,89.28 L 20.17,90.03 L 20.91,91.44 L 21.27,92.11 L 21.94,93.26 L 22.27,93.79 L 22.80,94.53 L 23.37,95.00 L 23.42,95.00 L 23.47,94.63 L 23.49,94.38 L 23.48,93.60 L 23.27,90.25 L 23.20,89.45 L 23.17,88.04 L 23.18,87.37 L 23.31,86.20 L 23.40,85.64 L 23.69,84.70 L 24.30,83.55 L 24.65,83.09 L 25.18,82.59 L 25.43,82.42 L 25.94,82.65 L 26.21,82.87 L 26.92,83.99 L 27.12,84.34 L 27.59,85.23 L 28.44,86.89 L 29.10,88.19 L 30.64,90.70 L 31.44,91.93 L 33.25,94.30 L 34.19,95.46 L 36.25,97.67 L 37.31,98.75 L 39.59,100.77 L 40.75,101.76 L 43.23,103.58 L 44.49,104.47 L 47.14,106.06 L 48.48,106.83 L 51.28,108.18 L 55.61,109.91 L 56.53,110.22 L 58.63,110.75 L 59.72,111.00 L 62.08,111.38 L 64.48,111.72 L 69.69,111.96 L 72.30,112.01 L 77.38,111.65 L 78.61,111.52 L 80.92,111.15 L 82.04,110.94 M 43.48,99.07 L 42.39,98.24 L 40.22,96.22 L 39.15,95.16 L 37.08,92.81 L 36.07,91.62 L 34.22,89.15 L 33.33,87.91 L 31.82,85.51 L 31.11,84.34 L 30.05,82.19 L 29.58,81.17 L 29.08,79.48 L 28.91,78.71 L 29.09,77.67 L 29.18,77.46 L 29.51,77.19 L 30.25,77.04 L 30.34,77.05 L 30.69,77.27 L 30.88,77.41 L 31.41,77.89 L 31.97,78.43 L 33.51,80.12 L 34.33,81.04 L 36.22,83.29 L 37.18,84.45 L 39.19,86.97 L 40.19,88.24 L 42.10,90.75 L 43.02,91.97 L 44.60,94.17 L 45.32,95.21 L 46.34,96.82 L 46.55,97.18 L 46.83,97.72 L 47.00,98.27 L 47.00,98.64 L 47.35,99.56 L 48.18,100.78 L 48.51,101.11 L 48.88,101.75 L 48.91,102.42 L 48.85,102.49 L 48.34,102.30 L 48.03,102.16 L 47.13,101.63 L 46.63,101.32 L 45.44,100.52 L 44.83,100.08 M 49.82,100.75 L 49.48,100.13 L 49.02,98.89 L 48.84,97.59 L 48.91,97.34 L 48.78,96.78 L 48.27,96.09 L 48.21,96.05 L 47.95,95.78 L 47.80,95.62 L 47.37,95.12 L 46.90,94.58 L 45.53,92.93 L 44.79,92.03 L 43.03,89.83 L 40.12,86.15 L 38.93,84.63 L 37.03,82.06 L 36.16,80.85 L 34.92,78.94 L 34.39,78.07 L 33.83,76.85 L 33.78,75.82 L 33.94,75.66 L 34.33,75.59 L 34.54,75.60 L 35.04,75.85 L 35.30,76.01 L 35.88,76.58 L 36.85,77.79 L 37.42,78.59 L 38.11,80.07 L 38.24,80.41 L 38.34,80.93 L 38.22,81.45 L 38.02,81.64 L 38.15,81.86 L 39.00,81.83 L 39.46,81.73 L 40.06,82.06 L 40.36,83.24 L 40.32,83.73 L 40.57,84.29 L 41.27,84.33 L 41.57,84.15 L 41.81,84.20 L 41.58,84.87 L 41.36,85.22 L 41.42,85.65 L 42.18,85.77 L 42.54,85.70 L 43.07,86.09 L 43.36,87.24 L 43.32,87.73 L 43.57,88.29 L 44.27,88.33 L 44.60,88.13 L 44.82,88.23 L 44.49,89.10 L 44.27,89.48 L 44.16,89.87 L 44.50,89.76 L 44.73,89.55 L 45.43,89.58 L 45.80,89.66 L 46.59,90.11 L 46.97,90.38 L 47.58,91.07 L 48.00,92.18 L 48.00,92.44 L 47.63,92.63 L 46.75,92.40 L 46.39,92.19 L 46.09,92.14 L 46.33,92.59 L 46.56,92.84 L 47.19,93.23 L 48.08,93.50 L 48.34,93.50 L 48.73,93.72 L 49.01,94.24 L 49.01,94.34 L 49.17,94.81 L 49.28,95.08 L 49.61,95.81 L 51.01,98.52 L 51.58,99.53 L 52.32,100.92 L 52.62,101.53 L 52.88,102.27 L 52.95,102.58 L 52.76,102.87 L 52.04,103.00 L 51.77,103.00 L 50.99,102.34 L 50.59,101.93 M 36.41,78.50 L 35.96,77.81 L 35.12,76.73 L 34.93,76.51 L 34.63,76.20 L 34.33,76.00 L 34.20,76.00 L 34.21,76.31 L 34.26,76.51 L 34.56,77.15 L 34.74,77.50 L 35.27,78.35 L 36.28,79.75 L 36.71,80.31 L 37.26,80.86 L 37.49,81.04 L 37.62,80.92 L 37.63,80.79 L 37.34,80.09 L 37.14,79.68 M 92.48,101.06 L 92.60,100.67 L 92.63,99.89 L 92.60,99.49 L 92.31,98.63 L 92.11,98.18 L 91.47,97.17 L 90.08,95.43 L 89.29,94.54 L 88.17,93.07 L 87.69,92.40 L 87.19,91.37 L 87.02,90.92 L 87.13,90.35 L 88.00,90.00 L 88.27,90.00 L 88.72,89.63 L 89.05,88.75 L 89.06,88.58 L 89.56,88.03 L 89.87,87.73 L 90.89,86.99 L 91.46,86.60 L 92.86,85.76 L 95.25,84.50 L 96.25,84.01 L 97.95,83.05 L 98.75,82.57 L 100.06,81.56 L 100.67,81.04 L 101.64,79.88 L 102.08,79.27 L 102.75,77.86 L 103.04,77.11 L 103.43,75.35 L 103.60,74.42 L 103.76,72.22 L 103.82,71.06 L 103.79,68.32 L 103.58,63.50 L 103.45,61.39 L 103.14,57.49 L 102.98,55.59 L 102.58,52.10 L 102.37,50.40 L 101.89,47.29 L 101.64,45.79 L 101.07,43.06 L 100.77,41.74 L 100.11,39.37 L 99.76,38.23 L 99.00,36.20 L 98.61,35.24 L 97.75,33.55 L 96.35,31.37 L 95.77,30.61 L 94.97,29.46 L 94.64,28.95 L 94.30,28.28 L 94.19,28.01 L 94.28,27.80 L 94.37,27.75 L 94.86,27.99 L 95.15,28.16 L 96.00,28.81 L 96.47,29.19 L 97.65,30.26 L 98.28,30.84 L 99.77,32.29 L 102.30,34.87 L 103.91,36.56 L 106.66,40.15 L 107.96,41.97 L 110.08,45.79 L 111.06,47.73 L 112.54,51.74 L 113.20,53.76 L 114.03,57.91 L 114.36,60.00 L 114.54,64.26 L 114.54,66.40 L 114.05,70.71 L 113.73,72.87 L 112.57,77.19 L 110.08,83.65 L 109.71,84.44 L 108.74,86.14 L 108.22,87.01 L 107.01,88.81 L 105.75,90.62 L 102.79,94.20 L 101.28,95.93 L 98.22,98.88 L 97.47,99.55 L 96.06,100.67 L 94.12,101.94 L 93.59,102.22 L 92.88,102.55 L 92.58,102.67 L 92.27,102.65 L 92.16,102.59 L 92.18,102.17 L 92.22,101.91 M 53.00,96.50 L 52.65,96.07 L 52.24,95.26 L 52.21,94.45 L 52.35,94.31 L 52.95,94.55 L 54.00,95.50 L 54.35,95.93 L 54.76,96.74 L 54.79,97.55 L 54.65,97.69 L 54.05,97.45 L 53.73,97.26 M 45.69,87.17 L 44.56,85.73 L 42.68,83.34 L 41.79,82.22 L 40.37,80.38 L 39.71,79.53 L 38.68,78.17 L 38.21,77.54 L 37.53,76.57 L 37.22,76.12 L 36.83,75.46 L 36.66,75.16 L 36.49,74.73 L 36.58,73.88 L 36.65,73.75 L 36.63,73.30 L 36.59,73.04 L 36.35,72.39 L 35.05,70.06 L 34.72,69.61 L 34.25,68.80 L 34.04,68.42 L 33.80,67.76 L 33.71,67.45 L 33.70,66.98 L 33.98,66.51 L 34.12,66.42 L 34.38,65.94 L 34.50,65.65 L 34.71,64.84 L 35.02,61.69 L 35.02,60.69 L 35.10,59.09 L 35.15,58.36 L 35.31,57.31 L 35.40,56.85 L 35.63,56.33 L 35.75,56.14 L 36.02,56.15 L 36.17,56.22 L 36.48,56.76 L 36.63,57.09 L 36.96,58.13 L 37.13,58.72 L 37.46,60.27 L 37.94,63.15 L 38.13,64.46 L 38.58,66.83 L 38.81,67.97 L 39.36,70.04 L 39.65,71.05 L 40.34,72.87 L 40.70,73.76 L 41.54,75.38 L 42.43,76.95 L 44.78,79.67 L 49.36,83.45 L 50.71,84.37 L 52.77,86.15 L 53.70,87.02 L 54.89,88.62 L 55.37,89.39 L 55.65,90.75 L 54.98,92.42 L 54.42,92.98 L 53.29,93.43 L 52.99,93.49 L 52.37,93.41 L 52.05,93.34 L 51.37,93.00 L 51.01,92.80 L 50.23,92.20 L 49.83,91.86 L 48.93,90.97 L 48.47,90.49 L 47.43,89.30 L 46.89,88.67 M 62.98,84.62 L 61.70,83.87 L 59.56,82.56 L 58.55,81.94 L 56.90,80.82 L 56.12,80.27 L 54.89,79.24 L 54.32,78.73 L 53.43,77.71 L 53.03,77.20 L 52.44,76.11 L 52.17,75.54 L 51.80,74.29 L 51.63,73.64 L 51.41,72.14 L 51.18,69.53 L 51.10,68.22 L 51.08,66.10 L 51.10,65.10 L 51.34,63.33 L 51.49,62.45 L 52.05,60.69 L 53.30,57.65 L 54.08,55.95 L 56.16,52.93 L 57.26,51.50 L 59.73,49.24 L 60.35,48.73 L 61.61,47.91 L 62.24,47.54 L 63.48,47.00 L 64.09,46.78 L 65.25,46.57 L 66.88,46.66 L 68.00,46.92 L 70.30,47.79 L 71.46,48.28 L 73.73,49.52 L 74.85,50.18 L 76.97,51.72 L 79.83,54.29 L 83.15,57.75 L 80.72,60.18 L 80.00,60.91 L 78.84,62.89 L 78.32,63.93 L 77.66,66.18 L 77.40,67.30 L 77.34,69.32 L 77.37,69.79 L 77.56,70.61 L 78.06,71.58 L 78.23,71.77 L 78.78,72.13 L 79.09,72.30 L 79.86,72.58 L 82.53,73.00 L 83.17,73.00 L 84.27,72.83 L 84.79,72.71 L 85.76,72.23 L 86.24,71.95 L 87.22,71.08 L 88.87,69.25 L 89.25,68.78 L 89.88,68.02 L 90.17,67.67 L 90.64,67.13 L 91.07,66.64 L 91.55,66.31 L 91.75,66.24 L 91.90,66.69 L 91.97,68.17 L 91.98,68.90 L 92.32,70.16 L 93.13,71.21 L 93.34,71.28 L 93.55,71.64 L 93.61,71.84 L 93.56,72.44 L 93.45,73.08 L 92.58,74.83 L 92.05,75.75 L 90.56,77.72 L 87.89,80.44 L 87.45,80.81 L 86.27,81.66 L 85.64,82.09 L 84.18,83.02 L 82.66,83.96 L 79.28,85.83 L 78.44,86.27 L 76.84,87.07 L 76.06,87.45 L 74.65,88.08 L 73.98,88.36 L 72.90,88.75 L 71.76,89.00 L 71.58,89.00 L 70.66,88.65 L 70.13,88.43 L 68.64,87.71 L 67.85,87.31 L 65.99,86.32 L 65.03,85.79 M 80.76,83.38 L 81.59,82.92 L 83.03,82.06 L 83.72,81.64 L 84.90,80.82 L 86.04,80.02 L 87.66,78.41 L 88.39,77.59 L 89.38,75.76 L 90.38,72.50 L 90.53,71.76 L 90.70,70.85 L 90.75,70.49 L 90.66,70.36 L 90.58,70.40 L 90.16,71.09 L 89.07,73.07 L 88.58,73.97 L 87.17,75.72 L 86.39,76.60 L 84.33,78.34 L 83.21,79.22 L 80.44,81.00 L 75.40,83.79 L 71.35,85.86 L 65.37,82.08 L 63.73,81.04 L 60.18,78.26 L 59.33,77.57 L 57.84,76.21 L 56.08,74.40 L 52.78,70.50 L 53.43,73.50 L 53.62,74.36 L 54.41,75.94 L 54.89,76.73 L 56.46,78.34 L 56.92,78.75 L 58.02,79.63 L 58.61,80.08 L 60.00,81.04 L 60.73,81.54 L 62.43,82.62 L 65.39,84.41 L 66.22,84.91 L 67.60,85.71 L 68.25,86.08 L 69.35,86.62 L 69.88,86.87 L 70.83,87.15 L 71.30,87.25 L 72.22,87.26 L 72.70,87.23 L 73.72,86.95 L 74.26,86.78 L 75.52,86.21 L 76.19,85.89 L 77.80,85.03 L 78.67,84.56 M 65.87,71.24 L 66.18,70.66 L 66.45,69.35 L 66.53,68.67 L 66.40,67.23 L 66.28,66.50 L 65.80,65.03 L 65.52,64.30 L 64.75,62.89 L 64.34,62.21 L 63.34,60.98 L 62.82,60.39 L 61.66,59.42 L 61.07,58.98 L 59.80,58.38 L 57.85,58.00 L 57.20,58.00 L 56.08,58.34 L 55.56,58.56 L 54.69,59.28 L 54.29,59.68 L 53.69,60.69 L 53.42,61.23 L 53.11,62.45 L 52.98,63.07 L 52.97,64.42 L 53.00,65.10 L 53.29,66.48 L 53.48,67.16 L 54.11,68.50 L 55.45,70.35 L 56.19,71.16 L 58.12,72.24 L 59.12,72.70 L 61.21,73.06 L 62.23,73.14 L 64.02,72.74 L 64.43,72.59 L 65.11,72.14 L 65.42,71.89 M 18.04,81.83 L 18.04,81.60 L 18.23,80.93 L 18.36,80.57 L 18.78,79.73 L 20.62,77.05 L 20.98,76.61 L 21.95,75.63 L 22.46,75.13 L 23.63,74.09 L 24.84,73.05 L 27.41,71.10 L 28.03,70.65 L 29.17,69.88 L 29.72,69.53 L 30.63,69.01 L 31.05,68.79 L 31.63,68.61 L 32.00,68.78 L 32.00,68.90 L 31.60,69.38 L 31.35,69.65 L 30.53,70.36 L 30.07,70.73 L 28.93,71.58 L 26.98,72.92 L 25.55,73.84 L 22.85,76.29 L 22.22,76.91 L 21.18,78.13 L 20.03,79.83 L 19.76,80.34 L 19.27,81.13 L 19.03,81.49 L 18.64,81.94 L 18.46,82.12 L 18.21,82.19 L 18.11,82.18 M 79.00,70.09 L 79.00,69.91 L 79.26,69.41 L 79.43,69.15 L 79.96,68.53 L 80.55,67.89 L 82.16,66.55 L 82.99,65.90 L 84.56,64.95 L 84.91,64.77 L 85.50,64.56 L 86.10,64.56 L 86.35,64.72 L 86.56,65.17 L 86.61,65.42 L 86.42,66.10 L 86.26,66.47 L 85.64,67.43 L 84.19,69.25 L 83.80,69.71 L 82.72,70.37 L 82.16,70.66 L 81.01,70.95 L 80.46,71.04 L 79.59,70.88 L 79.23,70.74 M 39.75,64.12 L 39.59,63.41 L 39.35,61.75 L 39.25,60.88 L 39.11,59.00 L 39.00,57.08 L 39.07,52.94 L 39.15,50.88 L 39.59,47.01 L 39.72,46.09 L 40.05,44.43 L 40.62,42.28 L 41.24,40.48 L 42.85,37.13 L 43.72,35.50 L 45.90,32.44 L 47.06,30.93 L 49.87,28.08 L 54.85,23.93 L 55.66,23.34 L 57.00,22.36 L 57.64,21.91 L 58.73,21.17 L 59.78,20.49 L 61.48,19.72 L 62.33,19.41 L 64.20,19.18 L 64.71,19.14 L 65.90,19.12 L 68.00,19.13 L 74.50,19.24 L 69.75,20.03 L 68.45,20.25 L 65.41,21.21 L 64.68,21.47 L 63.33,22.04 L 61.65,22.91 L 61.23,23.17 L 60.23,23.91 L 59.71,24.31 L 58.55,25.30 L 57.35,26.35 L 54.72,28.93 L 53.40,30.26 L 50.86,33.06 L 47.69,37.00 L 47.40,37.40 L 46.96,37.95 L 46.76,38.18 L 46.50,38.39 L 46.39,38.44 L 46.32,38.30 L 46.43,37.70 L 46.54,37.33 L 46.64,36.81 L 46.67,36.59 L 46.62,36.35 L 46.57,36.27 L 46.39,36.29 L 46.28,36.33 L 46.00,36.59 L 45.69,36.90 L 44.84,38.14 L 43.42,40.73 L 43.10,41.40 L 42.56,43.10 L 42.31,44.02 L 41.90,46.31 L 41.71,47.54 L 41.40,50.54 L 41.05,56.00 L 41.00,57.05 L 40.90,58.87 L 40.85,59.74 L 40.75,61.18 L 40.70,61.85 L 40.61,62.93 L 40.56,63.43 L 40.45,64.16 L 40.40,64.48 L 40.30,64.87 L 40.24,65.02 L 40.13,65.09 L 40.07,65.08 L 39.95,64.83 L 39.88,64.67 M 28.61,63.42 L 28.38,62.82 L 28.11,61.43 L 28.00,60.71 L 27.95,59.14 L 27.96,57.54 L 28.53,54.25 L 28.71,53.45 L 29.19,51.97 L 29.45,51.25 L 30.05,50.01 L 30.37,49.42 L 31.08,48.52 L 32.23,47.67 L 32.40,47.60 L 32.52,47.46 L 32.54,47.40 L 32.36,47.28 L 30.90,47.08 L 29.92,47.05 L 28.27,47.58 L 27.51,47.94 L 26.37,49.14 L 25.87,49.81 L 25.34,51.56 L 25.33,54.64 L 25.44,55.32 L 25.53,56.31 L 25.56,56.74 L 25.50,57.27 L 25.45,57.48 L 25.27,57.57 L 25.16,57.57 L 24.88,57.27 L 24.73,57.07 L 24.37,56.40 L 24.18,56.02 L 23.77,55.01 L 23.56,54.47 L 23.12,53.16 L 22.46,50.90 L 22.15,49.73 L 21.66,47.78 L 21.44,46.87 L 21.15,45.40 L 21.03,44.71 L 20.96,43.65 L 20.96,43.16 L 21.15,42.43 L 21.27,42.11 L 21.73,41.66 L 22.00,41.47 L 22.76,41.23 L 23.18,41.13 L 24.27,41.04 L 26.29,41.00 L 31.59,41.00 L 32.75,36.63 L 32.94,35.92 L 33.53,34.49 L 33.86,33.78 L 34.71,32.35 L 35.61,30.93 L 38.11,28.15 L 39.45,26.78 L 42.70,24.19 L 44.39,22.92 L 48.22,20.59 L 50.18,19.48 L 54.41,17.53 L 56.56,16.61 L 61.02,15.13 L 63.27,14.46 L 67.79,13.55 L 74.46,12.93 L 75.56,12.92 L 77.04,12.86 L 77.66,12.82 L 78.24,12.69 L 78.44,12.60 L 78.25,12.34 L 77.21,11.76 L 76.82,11.57 L 75.63,11.36 L 74.98,11.27 L 73.36,11.25 L 72.50,11.26 L 70.53,11.42 L 69.51,11.52 L 67.31,11.83 L 65.07,12.19 L 60.33,13.30 L 53.69,15.47 L 52.85,15.81 L 51.29,16.39 L 50.55,16.67 L 49.27,17.09 L 48.68,17.28 L 47.83,17.49 L 47.20,17.53 L 47.11,17.44 L 47.40,17.10 L 47.62,16.90 L 48.44,16.38 L 48.90,16.10 L 50.13,15.45 L 50.78,15.11 L 52.30,14.39 L 53.88,13.66 L 57.44,12.21 L 62.47,10.47 L 63.56,10.15 L 66.00,9.68 L 67.26,9.47 L 69.98,9.20 L 72.75,8.99 L 78.73,9.15 L 81.73,9.33 L 87.61,10.24 L 89.04,10.52 L 91.75,11.20 L 95.50,12.42 L 96.46,12.78 L 98.28,13.52 L 99.15,13.88 L 100.67,14.53 L 101.37,14.85 L 102.41,15.35 L 103.26,15.86 L 103.32,15.92 L 103.19,16.01 L 103.09,16.05 L 102.67,16.13 L 102.19,16.20 L 100.50,16.28 L 99.54,16.32 L 97.08,16.32 L 92.76,16.22 L 91.22,16.17 L 87.60,16.14 L 85.74,16.14 L 81.86,16.21 L 79.93,16.25 L 76.24,16.42 L 71.46,16.75 L 70.21,16.86 L 68.15,17.06 L 67.18,17.16 L 65.57,17.37 L 64.81,17.48 L 63.52,17.73 L 62.91,17.87 L 61.81,18.21 L 60.74,18.60 L 58.62,19.83 L 58.05,20.20 L 56.76,21.11 L 54.46,22.78 L 52.54,24.18 L 48.72,27.43 L 47.83,28.21 L 46.33,29.66 L 44.69,31.45 L 43.97,32.38 L 42.44,34.78 L 41.68,36.03 L 40.29,38.66 L 39.64,39.96 L 38.67,42.25 L 38.47,42.78 L 38.20,43.68 L 38.02,44.71 L 38.02,44.87 L 37.82,45.46 L 37.69,45.79 L 37.28,46.63 L 35.51,49.57 L 35.17,50.08 L 34.45,51.46 L 34.10,52.20 L 33.40,53.89 L 31.81,59.12 L 31.66,59.86 L 31.37,61.13 L 31.22,61.73 L 30.95,62.71 L 30.81,63.16 L 30.55,63.86 L 30.42,64.17 L 30.16,64.58 L 30.03,64.75 L 29.78,64.89 L 29.65,64.92 L 29.40,64.79 L 29.14,64.59 M 16.50,59.86 L 15.75,59.25 L 14.51,58.22 L 13.92,57.73 L 12.97,56.89 L 12.08,56.09 L 11.03,54.82 L 10.59,54.21 L 10.20,52.99 L 10.02,50.75 L 10.01,49.92 L 10.26,48.83 L 10.42,48.38 L 10.88,48.08 L 11.12,48.03 L 11.65,48.54 L 12.35,50.25 L 12.43,50.56 L 12.97,51.58 L 13.30,52.14 L 14.25,53.53 L 18.04,58.25 L 18.74,59.04 L 19.96,60.48 L 20.53,61.17 L 21.41,62.30 L 21.80,62.82 L 22.25,63.52 L 22.33,63.96 L 22.22,63.96 L 21.61,63.63 L 21.26,63.42 L 20.28,62.74 L 19.75,62.37 L 18.51,61.44 L 17.87,60.96 M 100.68,60.33 L 100.61,60.07 L 100.43,59.22 L 100.34,58.75 L 100.14,57.57 L 99.55,53.50 L 99.33,51.69 L 98.82,48.42 L 98.56,46.85 L 97.95,44.01 L 97.63,42.64 L 96.89,40.19 L 96.50,39.00 L 95.61,36.87 L 95.15,35.84 L 94.08,33.98 L 93.53,33.08 L 92.26,31.43 L 91.60,30.63 L 90.12,29.16 L 87.61,27.07 L 86.98,26.60 L 85.86,25.70 L 85.34,25.27 L 84.51,24.52 L 84.13,24.16 L 83.67,23.63 L 83.48,23.18 L 83.63,23.03 L 84.32,23.20 L 84.72,23.34 L 85.80,24.00 L 86.38,24.38 L 87.73,25.42 L 88.42,25.97 L 89.89,27.26 L 91.37,28.58 L 94.12,31.48 L 94.74,32.18 L 95.77,33.49 L 96.85,35.19 L 97.10,35.70 L 97.67,37.46 L 97.96,38.43 L 98.58,40.90 L 98.89,42.20 L 99.52,45.09 L 99.82,46.55 L 100.39,49.57 L 100.66,51.06 L 101.12,53.91 L 101.33,55.28 L 101.63,57.66 L 101.76,58.77 L 101.84,60.40 L 101.85,60.74 L 101.81,61.24 L 101.67,61.66 L 101.54,61.80 L 101.18,61.47 L 101.00,61.23 M 59.00,69.00 L 58.46,68.46 L 57.72,67.52 L 57.40,67.07 L 57.11,66.30 L 57.02,65.94 L 57.16,65.32 L 57.88,64.57 L 58.03,64.48 L 58.50,64.50 L 58.75,64.54 L 59.35,64.79 L 59.98,65.09 L 61.40,66.13 L 62.09,66.70 L 63.22,67.95 L 63.45,68.25 L 63.79,68.82 L 64.00,69.57 L 64.00,70.09 L 63.55,70.68 L 63.26,70.90 L 62.37,70.93 L 61.89,70.88 L 60.76,70.36 L 60.18,70.04 Z", fill: "var(--color-shinigami-2, #808080)" }))), o3 = (e) => /* @__PURE__ */ E.createElement("svg", { width: 25, height: 20, viewBox: "0 0 25 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ E.createElement("g", { clipPath: "url(#clip0_13131_1211)" }, /* @__PURE__ */ E.createElement("path", { d: "M20.8302 2.22784C19.2563 1.49141 17.5912 0.968141 15.8789 0.671875C15.6656 1.05747 15.4165 1.57609 15.2446 1.98869C13.3985 1.71106 11.5693 1.71106 9.75715 1.98869C9.5854 1.57619 9.33059 1.05747 9.11534 0.671875C7.40139 0.96827 5.73486 1.49287 4.16018 2.23169C1.02668 6.96691 0.177212 11.5844 0.6019 16.1365C2.68024 17.6885 4.69437 18.6314 6.67456 19.2483C7.16672 18.5716 7.60175 17.8551 7.97515 17.1063C7.26417 16.8356 6.57877 16.502 5.92709 16.1095C6.09857 15.9824 6.26603 15.8499 6.42921 15.7123C10.3781 17.5593 14.6689 17.5593 18.5708 15.7123C18.7347 15.849 18.9021 15.9814 19.0728 16.1095C18.4201 16.5031 17.7334 16.8373 17.021 17.1082C17.3966 17.8601 17.8308 18.5773 18.3216 19.2502C20.3036 18.6333 22.3196 17.6905 24.398 16.1365C24.8964 10.8595 23.5467 6.28441 20.8302 2.22784ZM8.51318 13.337C7.32771 13.337 6.35553 12.2303 6.35553 10.8827C6.35553 9.535 7.30699 8.42641 8.51318 8.42641C9.71937 8.42641 10.6916 9.53303 10.6708 10.8827C10.6727 12.2303 9.71946 13.337 8.51318 13.337ZM16.4867 13.337C15.3012 13.337 14.3291 12.2303 14.3291 10.8827C14.3291 9.535 15.2805 8.42641 16.4867 8.42641C17.693 8.42641 18.6651 9.53303 18.6444 10.8827C18.6444 12.2303 17.693 13.337 16.4867 13.337Z", fill: "#5865F2" })), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", { id: "clip0_13131_1211" }, /* @__PURE__ */ E.createElement("rect", { width: 24, height: 18.6562, fill: "white", transform: "translate(0.5 0.671875)" })))), s3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  discord: o3,
  facebook: e3,
  github: ZL,
  google: r3,
  qq: n3,
  shinigami: i3,
  twitter: qL,
  weibo: t3
}, Symbol.toStringTag, { value: "Module" })), bi = {}, Gu = (e) => {
  const t = document.querySelector(`script[src="${e}"]`);
  if (t)
    return bi[e] = {
      loading: !1,
      error: null,
      scriptEl: t
    };
};
function tf({
  src: e,
  checkForExisting: t = !1,
  ...n
}) {
  let r = e ? bi[e] : void 0;
  !r && t && e && Ju && (r = Gu(e));
  const [i, o] = E.useState(
    r ? r.loading : !!e
  ), [s, u] = E.useState(r ? r.error : null), [a, l] = E.useState(!1);
  return E.useEffect(() => {
    if (!Ju || !e || a || s) return;
    r = bi[e], !r && t && (r = Gu(e));
    let c;
    r ? c = r.scriptEl : (c = document.createElement("script"), c.src = e, Object.keys(n).forEach((h) => {
      c[h] === void 0 ? c.setAttribute(h, n[h]) : c[h] = n[h];
    }), r = bi[e] = {
      loading: !0,
      error: null,
      scriptEl: c
    });
    const d = () => {
      r && (r.loading = !1), o(!1), l(!0);
    }, f = (h) => {
      r && (r.error = h), u(h);
    };
    return c.addEventListener("load", d), c.addEventListener("error", f), document.body.appendChild(c), () => {
      c.removeEventListener("load", d), c.removeEventListener("error", f);
    };
  }, [e]), [i, s];
}
const Ju = typeof window < "u" && typeof window.document < "u";
function l3({
  sitekey: e,
  hideDefaultBadge: t = !1,
  checkForExisting: n = !0
}) {
  const [r, i] = E.useState();
  return E.useEffect(() => {
    a3 && t && u3(".grecaptcha-badge { visibility: hidden; }");
  }, [t]), tf({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${e}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    }),
    checkForExisting: n
  }), E.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      i(window.grecaptcha);
    });
  }, []), (o) => new Promise((s, u) => {
    r ? s(r.execute(e, { action: o })) : u(new Error("Recaptcha script not available"));
  });
}
const a3 = typeof window < "u" && typeof window.document < "u", u3 = (e) => {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const n = t.sheet;
  n && n.insertRule(e, n.cssRules.length);
};
function c3({ sitekey: e, checkForExisting: t = !0 }) {
  const [n, r] = E.useState();
  return tf({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      r(window.turnstile);
    }),
    async: !1,
    checkForExisting: t
  }), E.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      r(window.turnstile);
    });
  }, []), (i) => new Promise((o, s) => {
    if (!n)
      return s(new Error("Turnstile script not available"));
    n.render(".captcha-container", {
      sitekey: e,
      action: i,
      callback: o
    });
  });
}
function nf(e) {
  const t = l3(e), n = c3(e);
  return window.turnstileKey ? n : window.recaptchaV3Key ? t : () => {
  };
}
const d3 = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class fo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || d3, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new fo(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new fo(this.logger, t);
  }
}
var qe = new fo();
class bo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(n) || 0;
      this.observers[r].set(n, i + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((s) => {
      let [u, a] = s;
      for (let l = 0; l < a; l++)
        u(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [u, a] = s;
      for (let l = 0; l < a; l++)
        u.apply(u, [t, ...r]);
    });
  }
}
function nr() {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}
function Zu(e) {
  return e == null ? "" : "" + e;
}
function f3(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const p3 = /###/g;
function wr(e, t, n) {
  function r(u) {
    return u && u.indexOf("###") > -1 ? u.replace(p3, ".") : u;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const o = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < o.length - 1; ) {
    if (i()) return {};
    const u = r(o[s]);
    !e[u] && n && (e[u] = new n()), Object.prototype.hasOwnProperty.call(e, u) ? e = e[u] : e = {}, ++s;
  }
  return i() ? {} : {
    obj: e,
    k: r(o[s])
  };
}
function qu(e, t, n) {
  const {
    obj: r,
    k: i
  } = wr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1], s = t.slice(0, t.length - 1), u = wr(e, s, Object);
  for (; u.obj === void 0 && s.length; )
    o = `${s[s.length - 1]}.${o}`, s = s.slice(0, s.length - 1), u = wr(e, s, Object), u && u.obj && typeof u.obj[`${u.k}.${o}`] < "u" && (u.obj = void 0);
  u.obj[`${u.k}.${o}`] = n;
}
function h3(e, t, n, r) {
  const {
    obj: i,
    k: o
  } = wr(e, t, Object);
  i[o] = i[o] || [], i[o].push(n);
}
function po(e, t) {
  const {
    obj: n,
    k: r
  } = wr(e, t);
  if (n)
    return n[r];
}
function m3(e, t, n) {
  const r = po(e, n);
  return r !== void 0 ? r : po(t, n);
}
function rf(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : rf(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function fn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var L3 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function g3(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => L3[t]) : e;
}
class v3 {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const y3 = [" ", ",", "?", "!", ";"], w3 = new v3(20);
function x3(e, t, n) {
  t = t || "", n = n || "";
  const r = y3.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = w3.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}
function hl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let s, u = "";
    for (let a = o; a < r.length; ++a)
      if (a !== o && (u += n), u += r[a], s = i[u], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && a < r.length - 1)
          continue;
        o += a - o + 1;
        break;
      }
    i = s;
  }
  return i;
}
function ho(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class ec extends bo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, s = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let u;
    t.indexOf(".") > -1 ? u = t.split(".") : (u = [t, n], r && (Array.isArray(r) ? u.push(...r) : typeof r == "string" && o ? u.push(...r.split(o)) : u.push(r)));
    const a = po(this.data, u);
    return !a && !n && !r && t.indexOf(".") > -1 && (t = u[0], n = u[1], r = u.slice(2).join(".")), a || !s || typeof r != "string" ? a : hl(this.data && this.data[t] && this.data[t][n], r, o);
  }
  addResource(t, n, r, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let u = [t, n];
    r && (u = u.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (u = t.split("."), i = n, n = u[1]), this.addNamespaces(n), qu(this.data, u, i), o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
        silent: !0
      });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, u = [t, n];
    t.indexOf(".") > -1 && (u = t.split("."), i = r, r = n, n = u[1]), this.addNamespaces(n);
    let a = po(this.data, u) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? rf(a, r, o) : a = {
      ...a,
      ...r
    }, qu(this.data, u, a), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var of = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return e.forEach((o) => {
      this.processors[o] && (t = this.processors[o].process(t, n, r, i));
    }), t;
  }
};
const tc = {};
class mo extends bo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), f3(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = qe.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, u = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !x3(t, r, i);
    if (s && !u) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0)
        return {
          key: t,
          namespaces: o
        };
      const l = t.split(r);
      (r !== i || r === i && this.options.ns.indexOf(l[0]) > -1) && (o = l.shift()), t = l.join(i);
    }
    return typeof o == "string" && (o = [o]), {
      key: t,
      namespaces: o
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const i = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: u
    } = this.extractFromKey(t[t.length - 1], n), a = u[u.length - 1], l = n.lng || this.language, c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (c) {
        const g = n.nsSeparator || this.options.nsSeparator;
        return i ? {
          res: `${a}${g}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: l,
          usedNS: a,
          usedParams: this.getUsedParamsDetails(n)
        } : `${a}${g}${s}`;
      }
      return i ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: l,
        usedNS: a,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const h = d && d.usedKey || s, v = d && d.exactUsedKey || s, w = Object.prototype.toString.apply(f), x = ["[object Number]", "[object Function]", "[object RegExp]"], L = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, m = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (m && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && x.indexOf(w) < 0 && !(typeof L == "string" && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const g = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, f, {
          ...n,
          ns: u
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return i ? (d.res = g, d.usedParams = this.getUsedParamsDetails(n), d) : g;
      }
      if (o) {
        const g = Array.isArray(f), S = g ? [] : {}, C = g ? v : h;
        for (const k in f)
          if (Object.prototype.hasOwnProperty.call(f, k)) {
            const N = `${C}${o}${k}`;
            S[k] = this.translate(N, {
              ...n,
              joinArrays: !1,
              ns: u
            }), S[k] === N && (S[k] = f[k]);
          }
        f = S;
      }
    } else if (m && typeof L == "string" && Array.isArray(f))
      f = f.join(L), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let g = !1, S = !1;
      const C = n.count !== void 0 && typeof n.count != "string", k = mo.hasDefaultValue(n), N = C ? this.pluralResolver.getSuffix(l, n.count, n) : "", O = n.ordinal && C ? this.pluralResolver.getSuffix(l, n.count, {
        ordinal: !1
      }) : "", P = C && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), M = P && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${N}`] || n[`defaultValue${O}`] || n.defaultValue;
      !this.isValidLookup(f) && k && (g = !0, f = M), this.isValidLookup(f) || (S = !0, f = s);
      const te = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, ae = k && M !== f && this.options.updateMissing;
      if (S || g || ae) {
        if (this.logger.log(ae ? "updateKey" : "missingKey", l, a, s, ae ? M : f), o) {
          const R = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          R && R.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let H = [];
        const Xe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Xe && Xe[0])
          for (let R = 0; R < Xe.length; R++)
            H.push(Xe[R]);
        else this.options.saveMissingTo === "all" ? H = this.languageUtils.toResolveHierarchy(n.lng || this.language) : H.push(n.lng || this.language);
        const ht = (R, $, _) => {
          const D = k && _ !== f ? _ : te;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(R, a, $, D, ae, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(R, a, $, D, ae, n), this.emit("missingKey", R, a, $, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? H.forEach((R) => {
          const $ = this.pluralResolver.getSuffixes(R, n);
          P && n[`defaultValue${this.options.pluralSeparator}zero`] && $.indexOf(`${this.options.pluralSeparator}zero`) < 0 && $.push(`${this.options.pluralSeparator}zero`), $.forEach((_) => {
            ht([R], s + _, n[`defaultValue${_}`] || M);
          });
        }) : ht(H, s, M));
      }
      f = this.extendTranslation(f, t, n, d, r), S && f === s && this.options.appendNamespaceToMissingKey && (f = `${a}:${s}`), (S || g) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${s}` : s, g ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return i ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const l = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (l) {
        const f = t.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), t = this.interpolator.interpolate(t, d, r.lng || this.language, r), l) {
        const f = t.match(this.interpolator.nestingRegexp), h = f && f.length;
        c < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (r.lng = i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var f = arguments.length, h = new Array(f), v = 0; v < f; v++)
          h[v] = arguments[v];
        return o && o[0] === h[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${n[0]}`), null) : s.translate(...h, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const u = r.postProcess || this.options.postProcess, a = typeof u == "string" ? [u] : u;
    return t != null && a && a.length && r.applyPostProcessor !== !1 && (t = of.handle(a, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, i, o, s, u;
    return typeof t == "string" && (t = [t]), t.forEach((a) => {
      if (this.isValidLookup(r)) return;
      const l = this.extractFromKey(a, n), c = l.key;
      i = c;
      let d = l.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string", h = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), v = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", w = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((x) => {
        this.isValidLookup(r) || (u = x, !tc[`${w[0]}-${x}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(u) && (tc[`${w[0]}-${x}`] = !0, this.logger.warn(`key "${i}" for languages "${w.join(", ")}" won't get resolved as namespace "${u}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), w.forEach((L) => {
          if (this.isValidLookup(r)) return;
          s = L;
          const m = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(m, c, L, x, n);
          else {
            let g;
            f && (g = this.pluralResolver.getSuffix(L, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (m.push(c + g), n.ordinal && g.indexOf(C) === 0 && m.push(c + g.replace(C, this.options.pluralSeparator)), h && m.push(c + S)), v) {
              const k = `${c}${this.options.contextSeparator}${n.context}`;
              m.push(k), f && (m.push(k + g), n.ordinal && g.indexOf(C) === 0 && m.push(k + g.replace(C, this.options.pluralSeparator)), h && m.push(k + S));
            }
          }
          let y;
          for (; y = m.pop(); )
            this.isValidLookup(r) || (o = y, r = this.getResource(L, x, y, n));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: o,
      usedLng: s,
      usedNS: u
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const o of n)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function ms(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class nc {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = qe.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = ho(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = ho(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((i) => i.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ms(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ms(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = ms(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), i = [], o = (s) => {
      s && (this.isSupportedCode(s) ? i.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), r.forEach((s) => {
      i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
    }), i;
  }
}
let S3 = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], E3 = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const C3 = ["v1", "v2", "v3"], k3 = ["v4"], rc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function N3() {
  const e = {};
  return S3.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: E3[t.fc]
      };
    });
  }), e;
}
class j3 {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = qe.create("pluralResolver"), (!this.options.compatibilityJSON || k3.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = N3();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(ho(t === "dev" ? "en" : t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((i, o) => rc[i] - rc[o]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : r.numbers.map((i) => this.getSuffix(t, i, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : this.getSuffixRetroCompatible(i, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
    const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !C3.includes(this.options.compatibilityJSON);
  }
}
function ic(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = m3(e, t, n);
  return !o && i && typeof n == "string" && (o = hl(e, n, r), o === void 0 && (o = hl(t, n, r))), o;
}
class P3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = qe.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: u,
      suffixEscaped: a,
      formatSeparator: l,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: h,
      nestingSuffix: v,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: x,
      maxReplaces: L,
      alwaysFormat: m
    } = t.interpolation;
    this.escape = n !== void 0 ? n : g3, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = o ? fn(o) : s || "{{", this.suffix = u ? fn(u) : a || "}}", this.formatSeparator = l || ",", this.unescapePrefix = c ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? fn(f) : h || fn("$t("), this.nestingSuffix = v ? fn(v) : w || fn(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = m !== void 0 ? m : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, i) {
    let o, s, u;
    const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function l(v) {
      return v.replace(/\$/g, "$$$$");
    }
    const c = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const m = ic(n, a, v, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(m, void 0, r, {
          ...i,
          ...n,
          interpolationkey: v
        }) : m;
      }
      const w = v.split(this.formatSeparator), x = w.shift().trim(), L = w.join(this.formatSeparator).trim();
      return this.format(ic(n, a, x, this.options.keySeparator, this.options.ignoreJSONStructure), L, r, {
        ...i,
        ...n,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const d = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler, f = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (v) => l(v)
    }, {
      regex: this.regexp,
      safeValue: (v) => this.escapeValue ? l(this.escape(v)) : l(v)
    }].forEach((v) => {
      for (u = 0; o = v.regex.exec(t); ) {
        const w = o[1].trim();
        if (s = c(w), s === void 0)
          if (typeof d == "function") {
            const L = d(t, o, i);
            s = typeof L == "string" ? L : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, w))
            s = "";
          else if (f) {
            s = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`), s = "";
        else typeof s != "string" && !this.useRawValueToEscape && (s = Zu(s));
        const x = v.safeValue(s);
        if (t = t.replace(o[0], x), f ? (v.regex.lastIndex += s.length, v.regex.lastIndex -= o[0].length) : v.regex.lastIndex = 0, u++, u >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, s;
    function u(a, l) {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const d = a.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      a = d[0], f = this.interpolate(f, s);
      const h = f.match(/'/g), v = f.match(/"/g);
      (h && h.length % 2 === 0 && !v || v.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), l && (s = {
          ...l,
          ...s
        });
      } catch (w) {
        return this.logger.warn(`failed parsing options string in nesting for key ${a}`, w), `${a}${c}${f}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, a;
    }
    for (; i = this.nestingRegexp.exec(t); ) {
      let a = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let l = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((d) => d.trim());
        i[1] = c.shift(), a = c, l = !0;
      }
      if (o = n(u.call(this, i[1].trim(), s), s), o && i[0] === t && typeof o != "string") return o;
      typeof o != "string" && (o = Zu(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), o = ""), l && (o = a.reduce((c, d) => this.format(c, d, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), o.trim())), t = t.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function R3(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((s) => {
      if (s) {
        const [u, ...a] = s.split(":"), l = a.join(":").trim().replace(/^'+|'+$/g, ""), c = u.trim();
        n[c] || (n[c] = l), l === "false" && (n[c] = !1), l === "true" && (n[c] = !0), isNaN(l) || (n[c] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function pn(e) {
  const t = {};
  return function(r, i, o) {
    const s = i + JSON.stringify(o);
    let u = t[s];
    return u || (u = e(ho(i), o), t[s] = u), u(r);
  };
}
class O3 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = qe.create("formatter"), this.options = t, this.formats = {
      number: pn((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      currency: pn((n, r) => {
        const i = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: pn((n, r) => {
        const i = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      }),
      relativetime: pn((n, r) => {
        const i = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (o) => i.format(o, r.range || "day");
      }),
      list: pn((n, r) => {
        const i = new Intl.ListFormat(n, {
          ...r
        });
        return (o) => i.format(o);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = pn(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((u, a) => {
      const {
        formatName: l,
        formatOptions: c
      } = R3(a);
      if (this.formats[l]) {
        let d = u;
        try {
          const f = i && i.formatParams && i.formatParams[i.interpolationkey] || {}, h = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[l](u, h, {
            ...c,
            ...i,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return u;
    }, t);
  }
}
function T3(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class _3 extends bo {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = qe.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {}, s = {}, u = {}, a = {};
    return t.forEach((l) => {
      let c = !0;
      n.forEach((d) => {
        const f = `${l}|${d}`;
        !r.reload && this.store.hasResourceBundle(l, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, c = !1, s[f] === void 0 && (s[f] = !0), o[f] === void 0 && (o[f] = !0), a[d] === void 0 && (a[d] = !0)));
      }), c || (u[l] = !0);
    }), (Object.keys(o).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(u),
      toLoadNamespaces: Object.keys(a)
    };
  }
  loaded(t, n, r) {
    const i = t.split("|"), o = i[0], s = i[1];
    n && this.emit("failedLoading", o, s, n), r && this.store.addResourceBundle(o, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const u = {};
    this.queue.forEach((a) => {
      h3(a.loaded, [o], s), T3(a, t), n && a.errors.push(n), a.pendingCount === 0 && !a.done && (Object.keys(a.loaded).forEach((l) => {
        u[l] || (u[l] = {});
        const c = a.loaded[l];
        c.length && c.forEach((d) => {
          u[l][d] === void 0 && (u[l][d] = !0);
        });
      }), a.done = !0, a.errors.length ? a.callback(a.errors) : a.callback());
    }), this.emit("loaded", u), this.queue = this.queue.filter((a) => !a.done);
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const u = (l, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (l && c && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, i + 1, o * 2, s);
        }, o);
        return;
      }
      s(l, c);
    }, a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const l = a(t, n);
        l && typeof l.then == "function" ? l.then((c) => u(null, c)).catch(u) : u(null, l);
      } catch (l) {
        u(l);
      }
      return;
    }
    return a(t, n, u);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), i = r[0], o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, u) => {
      s && this.logger.warn(`${n}loading namespace ${o} for language ${i} failed`, s), !s && u && this.logger.log(`${n}loaded namespace ${o} for language ${i}`, u), this.loaded(t, s, u);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, u = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const a = {
          ...s,
          isUpdate: o
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let c;
            l.length === 5 ? c = l(t, n, r, i, a) : c = l(t, n, r, i), c && typeof c.then == "function" ? c.then((d) => u(null, d)).catch(u) : u(null, c);
          } catch (c) {
            u(c);
          }
        else
          l(t, n, r, i, u, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function oc() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(t) {
      let n = {};
      if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function sc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function vi() {
}
function $3(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Dr extends bo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = sc(t), this.services = {}, this.logger = qe, this.modules = {
      external: []
    }, $3(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = oc();
    this.options = {
      ...i,
      ...this.options,
      ...sc(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(c) {
      return c ? typeof c == "function" ? new c() : c : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? qe.init(o(this.modules.logger), this.options) : qe.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = O3);
      const d = new nc(this.options);
      this.store = new ec(this.options.resources, this.options);
      const f = this.services;
      f.logger = qe, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new j3(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (f.formatter = o(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new P3(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new _3(o(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(h) {
        for (var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), x = 1; x < v; x++)
          w[x - 1] = arguments[x];
        t.emit(h, ...w);
      }), this.modules.languageDetector && (f.languageDetector = o(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = o(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new mo(this.services, this.options), this.translator.on("*", function(h) {
        for (var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), x = 1; x < v; x++)
          w[x - 1] = arguments[x];
        t.emit(h, ...w);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = vi), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return t.store[c](...arguments), t;
      };
    });
    const a = nr(), l = () => {
      const c = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), a;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const i = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const o = [], s = (u) => {
        if (!u || u === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(u).forEach((l) => {
          l !== "cimode" && o.indexOf(l) < 0 && o.push(l);
        });
      };
      i ? s(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((a) => s(a)), this.options.preload && this.options.preload.forEach((u) => s(u)), this.services.backendConnector.load(o, this.options.ns, (u) => {
        !u && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(u);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const i = nr();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = vi), this.services.backendConnector.reload(t, n, (o) => {
      i.resolve(), r(o);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && of.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = nr();
    this.emit("languageChanging", t);
    const o = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, s = (a, l) => {
      l ? (o(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
        return r.t(...arguments);
      }), n && n(a, function() {
        return r.t(...arguments);
      });
    }, u = (a) => {
      !t && !a && this.services.languageDetector && (a = []);
      const l = typeof a == "string" ? a : this.services.languageUtils.getBestMatchFromCodes(a);
      l && (this.language || o(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(l)), this.loadResources(l, (c) => {
        s(c, l);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? u(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(u) : this.services.languageDetector.detect(u) : u(t), i;
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function(s, u) {
      let a;
      if (typeof u != "object") {
        for (var l = arguments.length, c = new Array(l > 2 ? l - 2 : 0), d = 2; d < l; d++)
          c[d - 2] = arguments[d];
        a = i.options.overloadTranslationOptionHandler([s, u].concat(c));
      } else
        a = {
          ...u
        };
      a.lng = a.lng || o.lng, a.lngs = a.lngs || o.lngs, a.ns = a.ns || o.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || o.keyPrefix);
      const f = i.options.keySeparator || ".";
      let h;
      return a.keyPrefix && Array.isArray(s) ? h = s.map((v) => `${a.keyPrefix}${f}${v}`) : h = a.keyPrefix ? `${a.keyPrefix}${f}${s}` : s, i.t(h, a);
    };
    return typeof t == "string" ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (u, a) => {
      const l = this.services.backendConnector.state[`${u}|${a}`];
      return l === -1 || l === 2;
    };
    if (n.precheck) {
      const u = n.precheck(this, s);
      if (u !== void 0) return u;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!i || s(o, t)));
  }
  loadNamespaces(t, n) {
    const r = nr();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = nr();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [], o = t.filter((s) => i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new nc(oc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Dr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vi;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new Dr(i);
    return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((u) => {
      o[u] = this[u];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new ec(this.store.data, i), o.services.resourceStore = o.store), o.translator = new mo(o.services, i), o.translator.on("*", function(u) {
      for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
        l[c - 1] = arguments[c];
      o.emit(u, ...l);
    }), o.init(i, n), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const pe = Dr.createInstance();
pe.createInstance = Dr.createInstance;
pe.createInstance;
pe.dir;
pe.init;
pe.loadResources;
pe.reloadResources;
pe.use;
pe.changeLanguage;
pe.getFixedT;
pe.t;
pe.exists;
pe.setDefaultNamespace;
pe.hasLoadedNamespace;
pe.loadNamespaces;
pe.loadLanguages;
async function ce(e, t = {}) {
  typeof e == "object" ? t = e : typeof e == "string" && (t.url = e), t.headers || (t.headers = {}), t.body && !(t.body instanceof FormData) && (t.headers["Content-Type"] = "application/json", t.body = JSON.stringify(t.body));
  let n = window.TOKEN || sessionStorage.getItem("TOKEN");
  n || (n = localStorage.getItem("TOKEN")), n && (t.headers.Authorization = `Bearer ${n}`);
  let r = window.serverURL;
  if (!r) {
    const a = location.pathname.match(/(.*?\/)ui/);
    r = a ? a[1] : "/";
  }
  const i = t.url.includes("?") ? "&" : "?", o = await fetch(
    `${r}${t.url}${i}lang=${pe.language}`,
    t
  );
  if (!o.ok) {
    if (o.status === 401)
      throw new Error(401);
    let a;
    try {
      a = await o.json();
    } catch {
    }
    throw new Error(`${o.status}: ${(a == null ? void 0 : a.errmsg) || o.statusText}`);
  }
  const s = await o.json();
  if (s.errno !== 0)
    throw new Error(s.errmsg);
  return { __version: o.headers.get("x-waline-version"), ...s.data };
}
function I3(e) {
  const t = e ? `?email=${encodeURIComponent(e)}` : "";
  return ce({ url: "token/2fa" + t, method: "GET" });
}
function sf(e) {
  return ce({ url: "user", method: "PUT", body: e });
}
function M3({ page: e, filter: t }) {
  return ce({
    url: `user?page=${e}&keyword=${t.keyword}`,
    method: "GET"
  });
}
function rr({ id: e, ...t }) {
  return ce({ url: `user/${e}`, method: "PUT", body: t });
}
function b3() {
  const { t: e } = Dt(), t = Xr(), n = Jr(), r = zt((g) => g.user), [i, o] = E.useState(!1), [s, u] = E.useState(!1), [a, l] = E.useState(!1), [c, d] = E.useState("social"), f = nf({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), h = location.pathname.match(/(.*?\/)ui/), v = h && h[1] ? h[1] : "/";
  E.useEffect(() => {
    if (!r || !r.email)
      return;
    const g = new URLSearchParams(location.search), S = r.type === "administrator", C = S ? "/ui/profile" : "/ui", k = S && g.get("redirect") ? g.get("redirect") : C;
    console.log(k), n(k.replace(/\/+/g, "/"));
  }, [r]);
  const w = async function(g) {
    g.preventDefault(), u(!1), o(!0);
    const S = g.target.email.value, C = g.target.password.value, k = g.target.code ? g.target.code.value : "", N = g.target.remember.checked;
    if (!S)
      return u(e("please input email"));
    if (!C)
      return u(e("please input password"));
    if (g.target.code && !k)
      return u(e("please input 2fa code"));
    const O = await f("login");
    try {
      await t.user.login({
        email: S,
        password: C,
        code: k,
        remember: N,
        recaptchaV3: window.recaptchaV3Key ? O : void 0,
        turnstile: window.turnstileKey ? O : void 0
      });
    } catch (P) {
      u(P.message || e("email or password error"));
    } finally {
      o(!1);
    }
  }, x = function(g) {
    d(g);
  }, L = async (g) => {
    const S = g.target.value;
    if (!S)
      return;
    const C = await I3(S);
    l(C.enable);
  };
  let m = window.serverURL;
  if (!m) {
    const g = location.pathname.match(/(.*?\/)ui/);
    m = g ? g[1] : "/";
  }
  const y = ["google", "discord", "twitter"];
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: s ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: s ? /* @__PURE__ */ p.jsx("li", { children: s }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "login-tab-container", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "login-tabs", children: [
          /* @__PURE__ */ p.jsx("div", { id: "tab-social", className: `login-tab ${c === "social" ? "active" : ""}`, onClick: () => x("social"), children: "Social" }),
          /* @__PURE__ */ p.jsx("div", { id: "tab-password", className: `login-tab ${c === "password" ? "active" : ""}`, onClick: () => x("password"), children: "Password" })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { id: "social", className: `login-tab-content ${c === "social" ? "active" : ""}`, children: [
          /* @__PURE__ */ p.jsx("div", { className: "login-tab-title", children: "Sign In" }),
          /* @__PURE__ */ p.jsx("div", { className: "login-social-content", children: (window.ALLOW_SOCIALS || y).map((g) => /* @__PURE__ */ p.jsxs(
            "a",
            {
              className: "btn-social",
              href: `${m}oauth${window.ALLOW_SOCIALS ? "/" + g + "?" : `?type=${g}`}&redirect=${v}ui/profile`,
              style: { textDecoration: "none" },
              children: [
                vo.createElement(s3[g], {
                  width: 20
                }),
                g
              ]
            },
            g
          )) })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { id: "password", className: `login-tab-content ${c === "password" ? "active" : ""}`, children: [
          /* @__PURE__ */ p.jsx("div", { className: "login-tab-title", children: "Login with Password" }),
          /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: w, style: { minWidth: "300px" }, children: [
            /* @__PURE__ */ p.jsxs("p", { children: [
              /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "text",
                  id: "email",
                  name: "email",
                  placeholder: e("email"),
                  className: "text-l w-100",
                  onBlur: L
                }
              )
            ] }),
            /* @__PURE__ */ p.jsxs("p", { children: [
              /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "password",
                  id: "password",
                  name: "password",
                  className: "text-l w-100",
                  placeholder: e("password")
                }
              )
            ] }),
            a && /* @__PURE__ */ p.jsxs("p", { children: [
              /* @__PURE__ */ p.jsx("label", { htmlFor: "code", className: "sr-only", children: e("2fa code") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "text",
                  id: "code",
                  name: "code",
                  className: "text-l w-100",
                  placeholder: e("2fa code")
                }
              )
            ] }),
            /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
            /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-l w-100 primary",
                disabled: i,
                children: e("login")
              }
            ) }),
            /* @__PURE__ */ p.jsxs("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
              /* @__PURE__ */ p.jsxs("label", { htmlFor: "remember", children: [
                /* @__PURE__ */ p.jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: "remember",
                    className: "checkbox",
                    id: "remember"
                  }
                ),
                " ",
                e("remember me")
              ] }),
              /* @__PURE__ */ p.jsx("span", { className: "right forgot-password", children: /* @__PURE__ */ p.jsx(Ke, { to: "/ui/forgot", children: e("forgot password") }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("p", { className: "more-link", children: /* @__PURE__ */ p.jsx(Ke, { to: "/ui", children: e("back to home") }) })
    ] }) })
  ] });
}
var lf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var u = arguments[s];
        u && (o = i(o, r(u)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var u in o)
        t.call(o, u) && o[u] && (s = i(s, u));
      return s;
    }
    function i(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(lf);
var F3 = lf.exports;
const ml = /* @__PURE__ */ Lo(F3);
var af = { exports: {} }, uf = { exports: {} };
(function() {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = {
    // Bit-wise rotation left
    rotl: function(n, r) {
      return n << r | n >>> 32 - r;
    },
    // Bit-wise rotation right
    rotr: function(n, r) {
      return n << 32 - r | n >>> r;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      if (n.constructor == Number)
        return t.rotl(n, 8) & 16711935 | t.rotl(n, 24) & 4278255360;
      for (var r = 0; r < n.length; r++)
        n[r] = t.endian(n[r]);
      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var r = []; n > 0; n--)
        r.push(Math.floor(Math.random() * 256));
      return r;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(n) {
      for (var r = [], i = 0, o = 0; i < n.length; i++, o += 8)
        r[o >>> 5] |= n[i] << 24 - o % 32;
      return r;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(n) {
      for (var r = [], i = 0; i < n.length * 32; i += 8)
        r.push(n[i >>> 5] >>> 24 - i % 32 & 255);
      return r;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(n) {
      for (var r = [], i = 0; i < n.length; i++)
        r.push((n[i] >>> 4).toString(16)), r.push((n[i] & 15).toString(16));
      return r.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(n) {
      for (var r = [], i = 0; i < n.length; i += 2)
        r.push(parseInt(n.substr(i, 2), 16));
      return r;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(n) {
      for (var r = [], i = 0; i < n.length; i += 3)
        for (var o = n[i] << 16 | n[i + 1] << 8 | n[i + 2], s = 0; s < 4; s++)
          i * 8 + s * 6 <= n.length * 8 ? r.push(e.charAt(o >>> 6 * (3 - s) & 63)) : r.push("=");
      return r.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(n) {
      n = n.replace(/[^A-Z0-9+\/]/ig, "");
      for (var r = [], i = 0, o = 0; i < n.length; o = ++i % 4)
        o != 0 && r.push((e.indexOf(n.charAt(i - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | e.indexOf(n.charAt(i)) >>> 6 - o * 2);
      return r;
    }
  };
  uf.exports = t;
})();
var A3 = uf.exports, Ll = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return Ll.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(Ll.bin.bytesToString(e)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(e.charCodeAt(n) & 255);
      return t;
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      for (var t = [], n = 0; n < e.length; n++)
        t.push(String.fromCharCode(e[n]));
      return t.join("");
    }
  }
}, lc = Ll;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var z3 = function(e) {
  return e != null && (cf(e) || D3(e) || !!e._isBuffer);
};
function cf(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function D3(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && cf(e.slice(0, 0));
}
(function() {
  var e = A3, t = lc.utf8, n = z3, r = lc.bin, i = function(o, s) {
    o.constructor == String ? s && s.encoding === "binary" ? o = r.stringToBytes(o) : o = t.stringToBytes(o) : n(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
    for (var u = e.bytesToWords(o), a = o.length * 8, l = 1732584193, c = -271733879, d = -1732584194, f = 271733878, h = 0; h < u.length; h++)
      u[h] = (u[h] << 8 | u[h] >>> 24) & 16711935 | (u[h] << 24 | u[h] >>> 8) & 4278255360;
    u[a >>> 5] |= 128 << a % 32, u[(a + 64 >>> 9 << 4) + 14] = a;
    for (var v = i._ff, w = i._gg, x = i._hh, L = i._ii, h = 0; h < u.length; h += 16) {
      var m = l, y = c, g = d, S = f;
      l = v(l, c, d, f, u[h + 0], 7, -680876936), f = v(f, l, c, d, u[h + 1], 12, -389564586), d = v(d, f, l, c, u[h + 2], 17, 606105819), c = v(c, d, f, l, u[h + 3], 22, -1044525330), l = v(l, c, d, f, u[h + 4], 7, -176418897), f = v(f, l, c, d, u[h + 5], 12, 1200080426), d = v(d, f, l, c, u[h + 6], 17, -1473231341), c = v(c, d, f, l, u[h + 7], 22, -45705983), l = v(l, c, d, f, u[h + 8], 7, 1770035416), f = v(f, l, c, d, u[h + 9], 12, -1958414417), d = v(d, f, l, c, u[h + 10], 17, -42063), c = v(c, d, f, l, u[h + 11], 22, -1990404162), l = v(l, c, d, f, u[h + 12], 7, 1804603682), f = v(f, l, c, d, u[h + 13], 12, -40341101), d = v(d, f, l, c, u[h + 14], 17, -1502002290), c = v(c, d, f, l, u[h + 15], 22, 1236535329), l = w(l, c, d, f, u[h + 1], 5, -165796510), f = w(f, l, c, d, u[h + 6], 9, -1069501632), d = w(d, f, l, c, u[h + 11], 14, 643717713), c = w(c, d, f, l, u[h + 0], 20, -373897302), l = w(l, c, d, f, u[h + 5], 5, -701558691), f = w(f, l, c, d, u[h + 10], 9, 38016083), d = w(d, f, l, c, u[h + 15], 14, -660478335), c = w(c, d, f, l, u[h + 4], 20, -405537848), l = w(l, c, d, f, u[h + 9], 5, 568446438), f = w(f, l, c, d, u[h + 14], 9, -1019803690), d = w(d, f, l, c, u[h + 3], 14, -187363961), c = w(c, d, f, l, u[h + 8], 20, 1163531501), l = w(l, c, d, f, u[h + 13], 5, -1444681467), f = w(f, l, c, d, u[h + 2], 9, -51403784), d = w(d, f, l, c, u[h + 7], 14, 1735328473), c = w(c, d, f, l, u[h + 12], 20, -1926607734), l = x(l, c, d, f, u[h + 5], 4, -378558), f = x(f, l, c, d, u[h + 8], 11, -2022574463), d = x(d, f, l, c, u[h + 11], 16, 1839030562), c = x(c, d, f, l, u[h + 14], 23, -35309556), l = x(l, c, d, f, u[h + 1], 4, -1530992060), f = x(f, l, c, d, u[h + 4], 11, 1272893353), d = x(d, f, l, c, u[h + 7], 16, -155497632), c = x(c, d, f, l, u[h + 10], 23, -1094730640), l = x(l, c, d, f, u[h + 13], 4, 681279174), f = x(f, l, c, d, u[h + 0], 11, -358537222), d = x(d, f, l, c, u[h + 3], 16, -722521979), c = x(c, d, f, l, u[h + 6], 23, 76029189), l = x(l, c, d, f, u[h + 9], 4, -640364487), f = x(f, l, c, d, u[h + 12], 11, -421815835), d = x(d, f, l, c, u[h + 15], 16, 530742520), c = x(c, d, f, l, u[h + 2], 23, -995338651), l = L(l, c, d, f, u[h + 0], 6, -198630844), f = L(f, l, c, d, u[h + 7], 10, 1126891415), d = L(d, f, l, c, u[h + 14], 15, -1416354905), c = L(c, d, f, l, u[h + 5], 21, -57434055), l = L(l, c, d, f, u[h + 12], 6, 1700485571), f = L(f, l, c, d, u[h + 3], 10, -1894986606), d = L(d, f, l, c, u[h + 10], 15, -1051523), c = L(c, d, f, l, u[h + 1], 21, -2054922799), l = L(l, c, d, f, u[h + 8], 6, 1873313359), f = L(f, l, c, d, u[h + 15], 10, -30611744), d = L(d, f, l, c, u[h + 6], 15, -1560198380), c = L(c, d, f, l, u[h + 13], 21, 1309151649), l = L(l, c, d, f, u[h + 4], 6, -145523070), f = L(f, l, c, d, u[h + 11], 10, -1120210379), d = L(d, f, l, c, u[h + 2], 15, 718787259), c = L(c, d, f, l, u[h + 9], 21, -343485551), l = l + m >>> 0, c = c + y >>> 0, d = d + g >>> 0, f = f + S >>> 0;
    }
    return e.endian([l, c, d, f]);
  };
  i._ff = function(o, s, u, a, l, c, d) {
    var f = o + (s & u | ~s & a) + (l >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._gg = function(o, s, u, a, l, c, d) {
    var f = o + (s & a | u & ~a) + (l >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._hh = function(o, s, u, a, l, c, d) {
    var f = o + (s ^ u ^ a) + (l >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._ii = function(o, s, u, a, l, c, d) {
    var f = o + (u ^ (s | ~a)) + (l >>> 0) + d;
    return (f << c | f >>> 32 - c) + s;
  }, i._blocksize = 16, i._digestsize = 16, af.exports = function(o, s) {
    if (o == null)
      throw new Error("Illegal argument " + o);
    var u = e.wordsToBytes(i(o, s));
    return s && s.asBytes ? u : s && s.asString ? r.bytesToString(u) : e.bytesToHex(u);
  };
})();
var U3 = af.exports;
const B3 = /* @__PURE__ */ Lo(U3);
function df(e = "", t = "") {
  return t || (typeof e != "string" && (e = ""), `https://sdn.geekzu.org/avatar/${B3(e)}?s=40&r=G&d=`);
}
function V3(e) {
  return window.SITE_URL ? window.SITE_URL + e : e;
}
function H3(e) {
  let t;
  typeof e == "number" ? t = new Date(e) : t = new Date(
    /\d+-\d+-\d+\s\d+:\d+:\d+/.test(e) ? e.replace(/-/g, "/") : e
  );
  const n = (o) => o < 10 ? "0" + o : o, r = [t.getFullYear(), t.getMonth() + 1, t.getDate()].map(n).join("-"), i = [t.getHours(), t.getMinutes(), t.getSeconds()].map(n).join(":");
  return r + " " + i;
}
function ff({ current: e, total: t, onChange: n }) {
  return t < 1 ? null : /* @__PURE__ */ p.jsxs("ul", { className: "typecho-pager", children: [
    e > 1 ? /* @__PURE__ */ p.jsx("li", { className: "prev", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e - 1), children: "«" }) }) : null,
    e > 4 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(1), children: "1" }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) })
    ] }) : null,
    [
      e - 3,
      e - 2,
      e - 1,
      e,
      e + 1,
      e + 2,
      e + 3
    ].filter((r) => r > 0 && r <= t).map((r) => /* @__PURE__ */ p.jsx("li", { className: ml({ current: r === e }), children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(r), children: r }) }, r)),
    e < t - 3 ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("span", { children: "..." }) }),
      /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(t), children: t }) })
    ] }) : null,
    e < t ? /* @__PURE__ */ p.jsx("li", { className: "next", children: /* @__PURE__ */ p.jsx("a", { href: "#", onClick: () => n(e + 1), children: "»" }) }) : null
  ] });
}
async function ir({ page: e = 1, filter: t }) {
  return ce({
    url: `comment?type=list&owner=${t.owner}&status=${t.status}&keyword=${t.keyword}&page=${e}`,
    method: "GET"
  });
}
async function Lt(e, t) {
  return ce({
    url: `comment/${e}`,
    method: "PUT",
    body: t
  });
}
async function K3(e) {
  return ce({
    url: "comment",
    method: "POST",
    body: e
  });
}
async function ac(e) {
  return ce({
    url: `comment/${e}`,
    method: "DELETE"
  });
}
function W3() {
  const { t: e } = Dt(), t = E.useRef(null), n = E.useRef(null), r = E.useRef({}), i = zt((g) => g.user), [o, s] = E.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [u, a] = E.useReducer(
    function(g, S) {
      return { ...g, ...S };
    },
    { owner: "all", status: "approved", keyword: "" }
  ), [l, c] = E.useState({}), [d, f] = E.useState(!1), [h, v] = E.useState([]), w = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "all" }) },
        { type: "mine", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "mine" }) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "approved" }) },
        { type: "waiting", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "waiting" }) },
        { type: "spam", name: /* @__PURE__ */ p.jsx(tr, { i18nKey: "spam" }) }
      ]
    ]
  ];
  E.useEffect(() => {
    ir({ page: o.page, filter: u }).then((g) => {
      s({ ...o, ...g }), v([]);
    });
  }, [u, o.page]);
  const x = (g) => [
    {
      key: "approved",
      name: e("approved button"),
      show: !0,
      disable: g && g.status === "approved",
      async action() {
        if (g) {
          switch (await Lt(g.objectId, { status: "approved" }), o.data = o.data.filter(
            ({ objectId: S }) => S !== g.objectId
          ), g.status) {
            case "waiting":
              o.waitingCount -= 1;
              break;
            case "spam":
              o.spamCount -= 1;
              break;
          }
          s({ ...o });
        } else
          await Promise.all(
            h.map(
              (S) => Lt(S, { status: "approved" })
            )
          ), ir({ page: o.page, filter: u }).then((S) => {
            s({ ...o, ...S }), v([]);
          });
      }
    },
    {
      key: "waiting",
      name: e("waiting"),
      show: !0,
      disable: g && g.status === "waiting",
      async action() {
        g ? (await Lt(g.objectId, { status: "waiting" }), o.data = o.data.filter(
          ({ objectId: S }) => S !== g.objectId
        ), g.status === "spam" && (o.spamCount -= 1), o.waitingCount += 1, s({ ...o })) : (await Promise.all(
          h.map(
            (S) => Lt(S, { status: "waiting" })
          )
        ), ir({ page: o.page, filter: u }).then((S) => {
          s({ ...o, ...S }), v([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: e(g ? "spam" : "mark as spam"),
      disable: g && g.status === "spam",
      async action() {
        g ? (await Lt(g.objectId, { status: "spam" }), o.data = o.data.filter(
          ({ objectId: S }) => S !== g.objectId
        ), o.spamCount += 1, s({ ...o })) : (await Promise.all(
          h.map(
            (S) => Lt(S, { status: "spam" })
          )
        ), ir({ page: o.page, filter: u }).then((S) => {
          s({ ...o, ...S }), v([]);
        }));
      }
    },
    {
      key: "sticky",
      show: g && !g.rid && g.status === "approved",
      name: g && g.sticky ? e("disable sticky") : e("sticky"),
      async action(S) {
        S.preventDefault();
        const C = !g.sticky;
        o.data.forEach((k) => {
          k.objectId === g.objectId && (k.sticky = C);
        }), await Lt(g.objectId, { sticky: C ? 1 : 0 }), s({ ...o });
      }
    },
    {
      key: "edit",
      show: g,
      name: e("edit"),
      action() {
        const S = {};
        l.id !== g.objectId && l.action !== "edit" && (S.id = g.objectId, S.action = "edit"), c(S);
      }
    },
    {
      key: "reply",
      show: g && g.status === "approved",
      name: e("reply"),
      action() {
        const S = {};
        l.id !== g.objectId && l.action !== "reply" && (S.id = g.objectId, S.action = "reply"), c(S);
      }
    },
    {
      key: "delete",
      name: e("delete"),
      show: !0,
      async action() {
        const S = g ? e("delete one confirm", { nick: g.nick }) : e("delete multiple confirm");
        confirm(S) && (g ? (await ac(g.objectId), o.data = o.data.filter(
          ({ objectId: C }) => C !== g.objectId
        ), s({ ...o })) : (await Promise.all(h.map(ac)), ir({ page: o.page, filter: u }).then((C) => {
          s({ ...o, ...C }), v([]);
        })));
      }
    }
  ].filter(({ show: S }) => S), L = async ({ pid: g, rid: S, url: C, at: k }) => {
    const N = n.current.value;
    if (!N)
      return null;
    const { display_name: O, email: P, url: M } = i;
    await K3({
      nick: O,
      mail: P,
      ua: navigator.userAgent,
      link: M,
      url: C,
      comment: N,
      pid: g,
      rid: S || g,
      at: k
    }), location.reload();
  }, m = async (g) => {
    const S = o.data[g];
    await Lt(S.objectId, r.current), o.data[g] = { ...S, ...r.current }, s({ ...o }), c({});
  }, y = o.data.length && o.data.every(({ objectId: g }) => h.includes(g));
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: e("manage comments") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx("div", { className: "clear-fix", children: w.map(([g, S]) => /* @__PURE__ */ p.jsx(
          "ul",
          {
            className: ml("typecho-option-tabs", {
              right: g === "owner"
            }),
            children: S.map(({ type: C, name: k }) => /* @__PURE__ */ p.jsx(
              "li",
              {
                className: ml({ current: C === u[g] }),
                children: /* @__PURE__ */ p.jsxs(
                  "a",
                  {
                    href: "javascript:void(0)",
                    onClick: () => a({ [g]: C }),
                    children: [
                      k,
                      g === "status" && C !== "approved" && o[`${C}Count`] > 0 ? /* @__PURE__ */ p.jsx("span", { className: "balloon", children: o[`${C}Count`] }) : null
                    ]
                  }
                )
              },
              C
            ))
          },
          g
        )) }),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsxs("form", { method: "get", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "operate", children: [
            /* @__PURE__ */ p.jsxs("label", { children: [
              /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("select all") }),
              /* @__PURE__ */ p.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: y,
                  onChange: () => v(
                    y ? [] : o.data.map(({ objectId: g }) => g)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ p.jsxs(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => f(!d),
                  children: [
                    /* @__PURE__ */ p.jsx("i", { className: "sr-only", children: e("action") }),
                    e("selected items"),
                    " ",
                    /* @__PURE__ */ p.jsx("i", { className: "i-caret-down" })
                  ]
                }
              ),
              /* @__PURE__ */ p.jsx(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: d ? "block" : "none" },
                  onClick: () => f(!1),
                  children: x().map(({ key: g, name: S, action: C }) => /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("a", { href: "javascript:void(0)", onClick: C, children: S }) }, g))
                }
              ),
              " "
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                type: "text",
                ref: t,
                className: "text-s",
                placeholder: e("please input keywords")
              }
            ),
            " ",
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (g) => {
                  g.preventDefault(), a({ keyword: t.current.value });
                },
                children: e("filter")
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "3%" }),
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "71%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: e("author") }),
                /* @__PURE__ */ p.jsx("th", { children: e("content") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: o.data.map(
                ({
                  objectId: g,
                  nick: S,
                  mail: C,
                  avatar: k,
                  link: N,
                  comment: O,
                  ip: P,
                  addr: M,
                  url: G,
                  status: te,
                  rid: ae,
                  pid: H,
                  sticky: Xe,
                  time: ht,
                  insertedAt: R
                }, $) => l.id === g && l.action === "edit" ? /* @__PURE__ */ p.jsxs("tr", { className: "comment-edit", children: [
                  /* @__PURE__ */ p.jsx("td", { children: " " }),
                  /* @__PURE__ */ p.jsx("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-info", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "label",
                        {
                          htmlFor: `comment-${g}-author`,
                          children: e("username")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          id: `comment-${g}-author`,
                          name: "author",
                          type: "text",
                          defaultValue: S,
                          onChange: (_) => r.current.nick = _.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${g}-mail`, children: e("email") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "email",
                          name: "mail",
                          id: `comment-${g}-mail`,
                          defaultValue: C,
                          onChange: (_) => r.current.mail = _.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${g}-url`, children: e("homepage") }),
                      /* @__PURE__ */ p.jsx(
                        "input",
                        {
                          className: "text-s w-100",
                          type: "text",
                          name: "url",
                          id: `comment-${g}-author`,
                          defaultValue: N,
                          onChange: (_) => r.current.link = _.target.value
                        }
                      )
                    ] })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsxs("div", { className: "comment-edit-content", children: [
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx("label", { htmlFor: `comment-${g}-text`, children: e("content") }),
                      /* @__PURE__ */ p.jsx(
                        "textarea",
                        {
                          name: "text",
                          id: `comment-${g}-text`,
                          rows: "6",
                          className: "w-90 mono",
                          defaultValue: O,
                          onChange: (_) => r.current.comment = _.target.value
                        }
                      )
                    ] }),
                    /* @__PURE__ */ p.jsxs("p", { children: [
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s primary",
                          onClick: () => m($),
                          children: e("submit")
                        }
                      ),
                      /* @__PURE__ */ p.jsx(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-s cancel",
                          onClick: () => c({}),
                          children: e("cancel")
                        }
                      )
                    ] })
                  ] }) })
                ] }, g) : /* @__PURE__ */ p.jsxs("tr", { id: `comment-${g}`, children: [
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx(
                    "input",
                    {
                      type: "checkbox",
                      value: g,
                      checked: h.includes(g),
                      onChange: () => v(
                        h.includes(g) ? h.filter(
                          (_) => _ !== g
                        ) : [...h, g]
                      )
                    }
                  ) }),
                  /* @__PURE__ */ p.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "comment-avatar", children: /* @__PURE__ */ p.jsx(
                    "img",
                    {
                      className: "avatar",
                      src: df(C, k),
                      alt: S,
                      width: "40",
                      height: "40"
                    }
                  ) }) }),
                  /* @__PURE__ */ p.jsx(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-head",
                      children: /* @__PURE__ */ p.jsxs("div", { className: "comment-meta", children: [
                        /* @__PURE__ */ p.jsx("strong", { className: "comment-author", children: N ? /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: /^https:\/\//.test(N) ? N : "https://" + N,
                            rel: "external nofollow noreferrer",
                            target: "_blank",
                            children: S
                          }
                        ) : S }),
                        /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: /* @__PURE__ */ p.jsx(
                          "a",
                          {
                            href: `mailto:${C}`,
                            target: "_blank",
                            rel: "noreferrer",
                            children: C
                          }
                        ) }),
                        C && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: P }),
                        P && /* @__PURE__ */ p.jsx("br", {}),
                        /* @__PURE__ */ p.jsx("span", { children: M })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ p.jsxs(
                    "td",
                    {
                      style: { verticalalign: "top" },
                      className: "comment-body",
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "comment-date", children: [
                          H3(R || ht),
                          " ",
                          e("at"),
                          " ",
                          /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: V3(G),
                              target: "_blank",
                              rel: "noreferrer",
                              children: G
                            }
                          )
                        ] }),
                        /* @__PURE__ */ p.jsx(
                          "div",
                          {
                            className: "comment-content",
                            dangerouslySetInnerHTML: { __html: O }
                          }
                        ),
                        l.id === g && l.action === "reply" ? /* @__PURE__ */ p.jsxs("form", { className: "comment-reply", children: [
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx("label", { htmlFor: "text", className: "sr-only", children: e("content") }),
                            /* @__PURE__ */ p.jsx(
                              "textarea",
                              {
                                id: "text",
                                name: "text",
                                className: "w-90 mono",
                                rows: "3",
                                ref: n
                              }
                            )
                          ] }),
                          /* @__PURE__ */ p.jsxs("p", { children: [
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s primary",
                                onClick: (_) => {
                                  _.preventDefault(), L({
                                    rid: ae,
                                    pid: g,
                                    url: G,
                                    at: S
                                  });
                                },
                                children: e("reply")
                              }
                            ),
                            " ",
                            " ",
                            /* @__PURE__ */ p.jsx(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-s cancel",
                                onClick: () => c({}),
                                children: e("cancel")
                              }
                            )
                          ] })
                        ] }) : null,
                        /* @__PURE__ */ p.jsx("div", { className: "comment-action hidden-by-mouse", children: x({
                          objectId: g,
                          nick: S,
                          status: te,
                          rid: ae,
                          pid: H,
                          sticky: Xe
                        }).map(
                          ({ key: _, disable: D, name: J, action: un }) => D ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: J }, _) : /* @__PURE__ */ p.jsx(
                            "a",
                            {
                              href: "javascript:void(0)",
                              className: `operate-${_}`,
                              onClick: un,
                              children: J
                            },
                            _
                          )
                        ) })
                      ]
                    }
                  )
                ] }, g)
              ) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          ff,
          {
            current: o.page,
            total: o.totalPages,
            onChange: (g) => s({ ...o, page: g })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function Q3(e, t, n) {
  const r = new Blob([e], { type: n }), i = document.createElement("a"), o = URL.createObjectURL(r);
  i.href = o, i.download = t, document.body.appendChild(i), i.click(), setTimeout(() => {
    document.body.removeChild(i), window.URL.revokeObjectURL(o);
  }, 0);
}
function Y3(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onload = (i) => t(i.target.result), r.onerror = n, r.readAsText(e);
  });
}
function X3() {
  const [e, t] = E.useState(!1), [n, r] = E.useState(!1), { t: i } = Dt(), o = E.useRef(null), s = () => {
    confirm(i("import clear data confirm")) && o.current.click();
  }, u = async (l) => {
    try {
      const c = await Y3(l.target.files[0]), d = JSON.parse(c);
      if (!d || d.type !== "waline")
        return alert("import data format not support!");
      const f = d.tables.reduce(
        (L, m) => {
          var y;
          return L + (((y = d.data[m]) == null ? void 0 : y.length) || 0);
        },
        0
      );
      let h = 0;
      t([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: h, maxLength: f }
      ]);
      const v = {};
      for (const L of d.tables) {
        const m = d.data[L];
        if (L !== "Users" && await ce({
          url: "db?table=" + L,
          method: "DELETE"
        }), v[L] || (v[L] = {}), !!Array.isArray(m))
          for (const y of m) {
            let g = !1;
            if (L === "Users") {
              const O = await ce("user?email=" + y.email);
              O.objectId && (g = O.objectId);
            }
            const C = L == "Users" && g ? "PUT" : "POST", k = L === "Comment" ? Object.assign({}, y, {
              rid: void 0,
              pid: void 0,
              user_id: void 0
            }) : y;
            for (const O in k)
              (k[O] === null || k[O] === void 0) && delete k[O];
            const N = await ce({
              url: `db?table=${L}${C === "PUT" ? `&objectId=${g}` : ""}`,
              method: C,
              body: k
            });
            v[L][y.objectId] = N.objectId, h += 1, t([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: h, maxLength: f }
            ]);
          }
      }
      t(["comment data index relationship reconstruction"]);
      const w = d.data.Comment, x = [];
      for (const L of w) {
        const m = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: y, field: g }) => {
          if (!L[g])
            return;
          const S = L[g], C = v[y][L[g]];
          S && C && S !== C && (m[g] = C);
        }), Object.keys(m).length && x.push([
          m,
          { objectId: v.Comment[L.objectId] }
        ]);
      }
      h = 0;
      for (const [L, m] of x)
        await ce({
          url: `db?table=Comment&objectId=${m.objectId}`,
          method: "PUT",
          body: L
        }), h += 1, t([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: h, maxLength: x.length }
        ]);
      alert(i("import success")), location.reload();
    } catch (c) {
      throw console.log(c), alert(c.message), c;
    } finally {
      t(!1), l.target.value = null;
    }
  }, a = async () => {
    r(!0);
    try {
      const l = await ce("db");
      Q3(
        JSON.stringify(l, null, "	"),
        "waline.json",
        "application/javascript"
      );
    } finally {
      r(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: i("migration") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsx("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ p.jsx(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: a,
            disabled: n,
            children: i(n ? "exporting" : "export")
          }
        ) }),
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ p.jsx(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: s,
              disabled: e,
              children: Array.isArray(e) ? i(...e) : i("import")
            }
          ),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              ref: o,
              onChange: u,
              type: "file",
              style: { display: "none" }
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
class jn {
  constructor(t, n, r) {
    nt(this, "x");
    nt(this, "y");
    nt(this, "scale");
    this.x = t, this.y = n, this.scale = r;
  }
  toString() {
    return "translate(" + this.x + "px, " + this.y + "px) scale(" + this.scale + ")";
  }
  static parse(t) {
    var r = t.style.transform.split(") "), i = r[0].substring(10).split(","), o = r.length > 1 ? r[1].substring(6) : "1", s = i.length > 1 ? i[0] : "0", u = i.length > 1 ? i[1] : "0";
    return new jn(parseFloat(s), parseFloat(u), parseFloat(o));
  }
}
class yi {
  constructor(t) {
    nt(this, "x");
    nt(this, "y");
    if (!t || !t.style.transformOrigin) {
      this.x = 0, this.y = 0;
      return;
    }
    var n = t.style.transformOrigin.split(" ");
    this.x = parseFloat(n[0]), this.y = parseFloat(n[1]);
  }
  toString() {
    return this.x + "px " + this.y + "px";
  }
}
function G3(e, t) {
  let n = 0;
  return (...r) => {
    clearTimeout(n), n = setTimeout(() => e(...r), t);
  };
}
function gl(e, t) {
  return e.toFixed(t);
}
function J3(e, t) {
  const n = parseFloat(t.min), r = parseFloat(t.max);
  t.value = gl(Math.max(n, Math.min(r, e)), 3);
}
function Z3(e) {
  var t = new Image();
  return new Promise(function(n, r) {
    t.onload = () => {
      n(t);
    }, t.onerror = r, t.src = e;
  });
}
function uc() {
  return {
    boundary: document.createElement("div"),
    viewport: document.createElement("div"),
    preview: document.createElement("img"),
    overlay: document.createElement("div"),
    zoomerWrap: document.createElement("div"),
    zoomer: document.createElement("input")
  };
}
function q3(e) {
  return e === "ArrowLeft" ? [2, 0] : e === "ArrowUp" ? [0, 2] : e === "ArrowRight" ? [-2, 0] : [0, -2];
}
function eg() {
  return document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
}
var In, Le, Mn, Br, I, pf, vl, hf, mf, Lf, yl, gf, vf, yf, wf, wl, Fi, xf, xl, Sl, El, Sf, Ef;
class tg {
  constructor(t, n) {
    cn(this, I);
    nt(this, "element");
    nt(this, "elements");
    nt(this, "options", {
      mouseWheelZoom: "on",
      viewport: {
        width: 220,
        height: 220,
        type: "square"
      },
      zoomerInputClass: "cr-slider"
    });
    cn(this, In, null);
    cn(this, Le, 1);
    cn(this, Mn, null);
    cn(this, Br, G3(() => {
      z(this, I, xl).call(this);
    }, 200));
    if (t.classList.contains("cropt-container"))
      throw new Error("Cropt is already initialized on this element");
    n.viewport && (n.viewport = { ...this.options.viewport, ...n.viewport }), this.options = { ...this.options, ...n }, this.element = t, this.element.classList.add("cropt-container"), this.elements = uc(), this.elements.zoomerWrap.classList.add("cr-slider-wrap"), this.elements.boundary.classList.add("cr-boundary"), this.elements.viewport.classList.add("cr-viewport"), this.elements.overlay.classList.add("cr-overlay"), this.elements.viewport.setAttribute("tabindex", "0"), z(this, I, wl).call(this, this.elements.preview), this.elements.boundary.appendChild(this.elements.preview), this.elements.boundary.appendChild(this.elements.viewport), this.elements.boundary.appendChild(this.elements.overlay), this.elements.zoomer.type = "range", this.elements.zoomer.step = "0.001", this.elements.zoomer.value = "1", this.elements.zoomer.setAttribute("aria-label", "zoom"), this.element.appendChild(this.elements.boundary), this.element.appendChild(this.elements.zoomerWrap), this.elements.zoomerWrap.appendChild(this.elements.zoomer), z(this, I, vl).call(this), z(this, I, gf).call(this), z(this, I, vf).call(this);
  }
  /**
   * Bind an image from an src string.
   * Returns a Promise which resolves when the image has been loaded and state is initialized.
   */
  bind(t, n = null) {
    if (!t)
      throw new Error("src cannot be empty");
    return qr(this, In, n), Z3(t).then((r) => {
      z(this, I, wf).call(this, r), z(this, I, Sl).call(this);
    });
  }
  /**
   * Returns a Promise resolving to an HTMLCanvasElement object for the cropped image.
   * If size is specified, the image will be scaled with its longest side set to size.
   */
  toCanvas(t = null) {
    var n = this.elements.viewport.getBoundingClientRect(), r = n.width / n.height, i = z(this, I, pf).call(this), o = i.right - i.left, s = i.bottom - i.top;
    return t !== null && (r > 1 ? (o = t, s = t / r) : (s = t, o = t * r)), Promise.resolve(z(this, I, mf).call(this, i, o, s));
  }
  toBlob(t = null, n = "image/webp", r = 1) {
    return n === "image/webp" && r < 1 && !eg() && (n = "image/jpeg"), new Promise((i, o) => {
      this.toCanvas(t).then((s) => {
        s.toBlob((u) => {
          u === null ? o("Canvas blob is null") : i(u);
        }, n, r);
      });
    });
  }
  refresh() {
    z(this, I, Sl).call(this);
  }
  setOptions(t) {
    const n = this.options.viewport.width, r = this.options.viewport.height;
    t.viewport && (t.viewport = { ...this.options.viewport, ...t.viewport }), this.options = { ...this.options, ...t }, z(this, I, vl).call(this), (this.options.viewport.width !== n || this.options.viewport.height !== r) && this.refresh();
  }
  setZoom(t) {
    J3(t, this.elements.zoomer);
    var n = new Event("input");
    this.elements.zoomer.dispatchEvent(n);
  }
  destroy() {
    ne(this, Mn) && document.removeEventListener("keydown", ne(this, Mn)), this.element.removeChild(this.elements.boundary), this.element.classList.remove("cropt-container"), this.element.removeChild(this.elements.zoomerWrap), this.elements = uc();
  }
}
In = new WeakMap(), Le = new WeakMap(), Mn = new WeakMap(), Br = new WeakMap(), I = new WeakSet(), pf = function() {
  var t = this.elements.preview.getBoundingClientRect(), n = this.elements.viewport.getBoundingClientRect(), r = n.left - t.left, i = n.top - t.top, o = (n.width - this.elements.viewport.offsetWidth) / 2, s = (n.height - this.elements.viewport.offsetHeight) / 2, u = r + this.elements.viewport.offsetWidth + o, a = i + this.elements.viewport.offsetHeight + s;
  return r = Math.max(0, r / ne(this, Le)), i = Math.max(0, i / ne(this, Le)), u = Math.max(0, u / ne(this, Le)), a = Math.max(0, a / ne(this, Le)), {
    left: Math.round(r),
    top: Math.round(i),
    right: Math.round(u),
    bottom: Math.round(a)
  };
}, vl = function() {
  this.elements.zoomer.className = this.options.zoomerInputClass;
  const t = "cr-vp-circle", n = this.elements.viewport;
  this.options.viewport.type === "circle" ? n.classList.add(t) : n.classList.remove(t), n.style.width = this.options.viewport.width + "px", n.style.height = this.options.viewport.height + "px";
}, hf = function(t) {
  var n = t.right - t.left, r = t.bottom - t.top, i = document.createElement("canvas"), o = i.getContext("2d");
  if (o === null)
    throw new Error("Canvas context cannot be null");
  return i.width = n, i.height = r, o.drawImage(this.elements.preview, t.left, t.top, n, r, 0, 0, i.width, i.height), i;
}, mf = function(t, n, r) {
  var i = z(this, I, hf).call(this, t), o = i.getContext("2d"), s = document.createElement("canvas"), u = s.getContext("2d"), a = document.createElement("canvas"), l = a.getContext("2d");
  if (a.width = n, a.height = r, l === null || o === null || u === null)
    throw new Error("Canvas context cannot be null");
  for (var c = {
    width: i.width,
    height: i.height
  }; c.width * 0.5 > a.width; ) {
    let d = c.width, f = c.height;
    c = {
      width: Math.floor(c.width * 0.5),
      height: Math.floor(c.height * 0.5)
    }, s.width = d, s.height = f, u.clearRect(0, 0, s.width, s.height), u.drawImage(i, 0, 0), o.clearRect(0, 0, d, f), o.drawImage(s, 0, 0, d, f, 0, 0, c.width, c.height);
  }
  return l.drawImage(i, 0, 0, c.width, c.height, 0, 0, a.width, a.height), a;
}, Lf = function() {
  var t = ne(this, Le), n = this.elements.viewport.getBoundingClientRect(), r = n.width, i = n.height, o = this.elements.boundary.clientWidth / 2, s = this.elements.boundary.clientHeight / 2, u = this.elements.preview.getBoundingClientRect(), a = u.width, l = u.height, c = r / 2, d = i / 2, f = (c / t - o) * -1, h = f - (a * (1 / t) - r * (1 / t)), v = (d / t - s) * -1, w = v - (l * (1 / t) - i * (1 / t)), x = 1 / t * c, L = a * (1 / t) - x, m = 1 / t * d, y = l * (1 / t) - m;
  return {
    translate: {
      maxX: f,
      minX: h,
      maxY: v,
      minY: w
    },
    origin: {
      maxX: L,
      minX: x,
      maxY: y,
      minY: m
    }
  };
}, yl = function(t, n) {
  const r = this.elements.preview.getBoundingClientRect(), i = this.elements.viewport.getBoundingClientRect(), o = jn.parse(this.elements.preview);
  i.top > r.top + n && i.bottom < r.bottom + n && (o.y = o.y + n), i.left > r.left + t && i.right < r.right + t && (o.x = o.x + t), z(this, I, El).call(this, o), ne(this, Br).call(this);
}, gf = function() {
  let t = 0, n = 0, r = [], i = 0, o = (l) => {
    l.preventDefault();
    const c = r.findIndex((d) => d.pointerId === l.pointerId);
    if (c !== -1) {
      if (r[c] = l, r.length === 2) {
        let d = r[0], f = r[1], h = Math.sqrt((d.pageX - f.pageX) * (d.pageX - f.pageX) + (d.pageY - f.pageY) * (d.pageY - f.pageY));
        i === 0 && (i = h / ne(this, Le)), this.setZoom(h / i);
        return;
      } else if (i !== 0)
        return;
      z(this, I, yl).call(this, l.pageX - t, l.pageY - n), t = l.pageX, n = l.pageY;
    }
  }, s = (l) => {
    const c = r.findIndex((d) => d.pointerId === l.pointerId);
    c !== -1 && r.splice(c, 1), r.length === 0 && (this.elements.overlay.removeEventListener("pointermove", o), this.elements.overlay.removeEventListener("pointerup", s), this.elements.overlay.removeEventListener("pointerout", s), z(this, I, Fi).call(this, !1, this.elements.preview), i = 0);
  }, u = (l) => {
    l.button || (l.preventDefault(), r.push(l), this.elements.overlay.setPointerCapture(l.pointerId), !(r.length > 1) && (t = l.pageX, n = l.pageY, z(this, I, Fi).call(this, !0, this.elements.preview), this.elements.overlay.addEventListener("pointermove", o), this.elements.overlay.addEventListener("pointerup", s), this.elements.overlay.addEventListener("pointerout", s)));
  }, a = (l) => {
    if (document.activeElement === this.elements.viewport) {
      if (l.shiftKey && (l.key === "ArrowUp" || l.key === "ArrowDown")) {
        l.preventDefault();
        let c = parseFloat(this.elements.zoomer.value), d = l.key === "ArrowUp" ? 0.01 : -0.01;
        this.setZoom(c + d);
      } else if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(l.key)) {
        l.preventDefault();
        let [c, d] = q3(l.key);
        z(this, I, yl).call(this, c, d);
      }
    }
  };
  this.elements.overlay.addEventListener("pointerdown", u), document.addEventListener("keydown", a), qr(this, Mn, a);
}, vf = function() {
  let t = () => {
    z(this, I, yf).call(this);
  }, n = (r) => {
    const i = this.options.mouseWheelZoom;
    let o = 0;
    i === "off" || i === "ctrl" && !r.ctrlKey || (r.deltaY && (o = r.deltaY * -1 / 2e3), r.preventDefault(), this.setZoom(ne(this, Le) + o * ne(this, Le)));
  };
  this.elements.zoomer.addEventListener("input", t), this.elements.boundary.addEventListener("wheel", n);
}, yf = function() {
  const t = jn.parse(this.elements.preview), n = new yi(this.elements.preview);
  let r = () => {
    this.elements.preview.style.transform = t.toString(), this.elements.preview.style.transformOrigin = n.toString();
  };
  qr(this, Le, parseFloat(this.elements.zoomer.value)), t.scale = ne(this, Le), r();
  var i = z(this, I, Lf).call(this), o = i.translate, s = i.origin;
  t.x >= o.maxX && (n.x = s.minX, t.x = o.maxX), t.x <= o.minX && (n.x = s.maxX, t.x = o.minX), t.y >= o.maxY && (n.y = s.minY, t.y = o.maxY), t.y <= o.minY && (n.y = s.maxY, t.y = o.minY), r(), ne(this, Br).call(this);
}, wf = function(t) {
  z(this, I, wl).call(this, t), this.elements.preview.parentNode && this.elements.preview.parentNode.replaceChild(t, this.elements.preview), this.elements.preview = t;
}, wl = function(t) {
  t.classList.add("cr-image"), t.setAttribute("alt", "preview"), z(this, I, Fi).call(this, !1, t);
}, Fi = function(t, n) {
  n.setAttribute("aria-grabbed", t.toString()), this.elements.boundary.setAttribute("aria-dropeffect", t ? "move" : "none");
}, xf = function() {
  return this.elements.preview.offsetParent !== null;
}, xl = function() {
  const t = this.elements.boundary.getBoundingClientRect(), n = this.elements.preview.getBoundingClientRect(), r = this.elements.overlay;
  r.style.width = n.width + "px", r.style.height = n.height + "px", r.style.top = n.top - t.top + "px", r.style.left = n.left - t.left + "px";
}, Sl = function() {
  if (!z(this, I, xf).call(this))
    return;
  const t = this.elements.preview, n = new jn(0, 0, 1);
  t.style.transform = n.toString(), t.style.transformOrigin = new yi().toString(), z(this, I, Sf).call(this), n.scale = ne(this, Le), t.style.transform = n.toString(), t.style.transformOrigin = new yi().toString(), z(this, I, Ef).call(this), z(this, I, xl).call(this);
}, El = function(t) {
  var n = ne(this, Le), r = this.elements.preview.getBoundingClientRect(), i = this.elements.viewport.getBoundingClientRect(), o = new yi(this.elements.preview), s = i.top - r.top + i.height / 2, u = i.left - r.left + i.width / 2, a = { x: u / n, y: s / n }, l = {
    x: (a.x - o.x) * (1 - n),
    y: (a.y - o.y) * (1 - n)
  };
  t.x -= l.x, t.y -= l.y, this.elements.preview.style.transform = t.toString(), this.elements.preview.style.transformOrigin = a.x + "px " + a.y + "px";
}, Sf = function() {
  var t = 0.85, n = this.elements.boundary.getBoundingClientRect(), r = this.elements.preview, i = this.elements.viewport.getBoundingClientRect(), o = i.width / r.naturalWidth, s = i.height / r.naturalHeight, u = Math.max(o, s);
  u >= t && (t += u), this.elements.zoomer.min = gl(u, 3), this.elements.zoomer.max = gl(t, 3);
  var a = Math.max(n.width / r.naturalWidth, n.height / r.naturalHeight);
  this.setZoom(ne(this, In) !== null ? ne(this, In) : a);
}, Ef = function() {
  var t = this.elements.preview.getBoundingClientRect(), n = this.elements.viewport.getBoundingClientRect(), r = this.elements.boundary.getBoundingClientRect(), i = n.left - r.left, o = n.top - r.top, s = i - (t.width - n.width) / 2, u = o - (t.height - n.height) / 2, a = new jn(s, u, ne(this, Le));
  z(this, I, El).call(this, a);
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var tn;
((e) => {
  const t = class {
    constructor(a, l, c, d) {
      if (this.version = a, this.errorCorrectionLevel = l, this.modules = [], this.isFunction = [], a < t.MIN_VERSION || a > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (d < -1 || d > 7)
        throw new RangeError("Mask value out of range");
      this.size = a * 4 + 17;
      let f = [];
      for (let v = 0; v < this.size; v++)
        f.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const h = this.addEccAndInterleave(c);
      if (this.drawCodewords(h), d == -1) {
        let v = 1e9;
        for (let w = 0; w < 8; w++) {
          this.applyMask(w), this.drawFormatBits(w);
          const x = this.getPenaltyScore();
          x < v && (d = w, v = x), this.applyMask(w);
        }
      }
      o(0 <= d && d <= 7), this.mask = d, this.applyMask(d), this.drawFormatBits(d), this.isFunction = [];
    }
    static encodeText(a, l) {
      const c = e.QrSegment.makeSegments(a);
      return t.encodeSegments(c, l);
    }
    static encodeBinary(a, l) {
      const c = e.QrSegment.makeBytes(a);
      return t.encodeSegments([c], l);
    }
    static encodeSegments(a, l, c = 1, d = 40, f = -1, h = !0) {
      if (!(t.MIN_VERSION <= c && c <= d && d <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let v, w;
      for (v = c; ; v++) {
        const y = t.getNumDataCodewords(v, l) * 8, g = u.getTotalBits(a, v);
        if (g <= y) {
          w = g;
          break;
        }
        if (v >= d)
          throw new RangeError("Data too long");
      }
      for (const y of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        h && w <= t.getNumDataCodewords(v, y) * 8 && (l = y);
      let x = [];
      for (const y of a) {
        r(y.mode.modeBits, 4, x), r(y.numChars, y.mode.numCharCountBits(v), x);
        for (const g of y.getData())
          x.push(g);
      }
      o(x.length == w);
      const L = t.getNumDataCodewords(v, l) * 8;
      o(x.length <= L), r(0, Math.min(4, L - x.length), x), r(0, (8 - x.length % 8) % 8, x), o(x.length % 8 == 0);
      for (let y = 236; x.length < L; y ^= 253)
        r(y, 8, x);
      let m = [];
      for (; m.length * 8 < x.length; )
        m.push(0);
      return x.forEach((y, g) => m[g >>> 3] |= y << 7 - (g & 7)), new t(v, l, m, f);
    }
    getModule(a, l) {
      return 0 <= a && a < this.size && 0 <= l && l < this.size && this.modules[l][a];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const a = this.getAlignmentPatternPositions(), l = a.length;
      for (let c = 0; c < l; c++)
        for (let d = 0; d < l; d++)
          c == 0 && d == 0 || c == 0 && d == l - 1 || c == l - 1 && d == 0 || this.drawAlignmentPattern(a[c], a[d]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(a) {
      const l = this.errorCorrectionLevel.formatBits << 3 | a;
      let c = l;
      for (let f = 0; f < 10; f++)
        c = c << 1 ^ (c >>> 9) * 1335;
      const d = (l << 10 | c) ^ 21522;
      o(d >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, i(d, f));
      this.setFunctionModule(8, 7, i(d, 6)), this.setFunctionModule(8, 8, i(d, 7)), this.setFunctionModule(7, 8, i(d, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, i(d, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, i(d, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, i(d, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let a = this.version;
      for (let c = 0; c < 12; c++)
        a = a << 1 ^ (a >>> 11) * 7973;
      const l = this.version << 12 | a;
      o(l >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const d = i(l, c), f = this.size - 11 + c % 3, h = Math.floor(c / 3);
        this.setFunctionModule(f, h, d), this.setFunctionModule(h, f, d);
      }
    }
    drawFinderPattern(a, l) {
      for (let c = -4; c <= 4; c++)
        for (let d = -4; d <= 4; d++) {
          const f = Math.max(Math.abs(d), Math.abs(c)), h = a + d, v = l + c;
          0 <= h && h < this.size && 0 <= v && v < this.size && this.setFunctionModule(h, v, f != 2 && f != 4);
        }
    }
    drawAlignmentPattern(a, l) {
      for (let c = -2; c <= 2; c++)
        for (let d = -2; d <= 2; d++)
          this.setFunctionModule(a + d, l + c, Math.max(Math.abs(d), Math.abs(c)) != 1);
    }
    setFunctionModule(a, l, c) {
      this.modules[l][a] = c, this.isFunction[l][a] = !0;
    }
    addEccAndInterleave(a) {
      const l = this.version, c = this.errorCorrectionLevel;
      if (a.length != t.getNumDataCodewords(l, c))
        throw new RangeError("Invalid argument");
      const d = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l], f = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l], h = Math.floor(t.getNumRawDataModules(l) / 8), v = d - h % d, w = Math.floor(h / d);
      let x = [];
      const L = t.reedSolomonComputeDivisor(f);
      for (let y = 0, g = 0; y < d; y++) {
        let S = a.slice(g, g + w - f + (y < v ? 0 : 1));
        g += S.length;
        const C = t.reedSolomonComputeRemainder(S, L);
        y < v && S.push(0), x.push(S.concat(C));
      }
      let m = [];
      for (let y = 0; y < x[0].length; y++)
        x.forEach((g, S) => {
          (y != w - f || S >= v) && m.push(g[y]);
        });
      return o(m.length == h), m;
    }
    drawCodewords(a) {
      if (a.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let d = 0; d < this.size; d++)
          for (let f = 0; f < 2; f++) {
            const h = c - f, w = (c + 1 & 2) == 0 ? this.size - 1 - d : d;
            !this.isFunction[w][h] && l < a.length * 8 && (this.modules[w][h] = i(a[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      o(l == a.length * 8);
    }
    applyMask(a) {
      if (a < 0 || a > 7)
        throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let c = 0; c < this.size; c++) {
          let d;
          switch (a) {
            case 0:
              d = (c + l) % 2 == 0;
              break;
            case 1:
              d = l % 2 == 0;
              break;
            case 2:
              d = c % 3 == 0;
              break;
            case 3:
              d = (c + l) % 3 == 0;
              break;
            case 4:
              d = (Math.floor(c / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              d = c * l % 2 + c * l % 3 == 0;
              break;
            case 6:
              d = (c * l % 2 + c * l % 3) % 2 == 0;
              break;
            case 7:
              d = ((c + l) % 2 + c * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][c] && d && (this.modules[l][c] = !this.modules[l][c]);
        }
    }
    getPenaltyScore() {
      let a = 0;
      for (let f = 0; f < this.size; f++) {
        let h = !1, v = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[f][x] == h ? (v++, v == 5 ? a += t.PENALTY_N1 : v > 5 && a++) : (this.finderPenaltyAddHistory(v, w), h || (a += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), h = this.modules[f][x], v = 1);
        a += this.finderPenaltyTerminateAndCount(h, v, w) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let h = !1, v = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[x][f] == h ? (v++, v == 5 ? a += t.PENALTY_N1 : v > 5 && a++) : (this.finderPenaltyAddHistory(v, w), h || (a += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), h = this.modules[x][f], v = 1);
        a += this.finderPenaltyTerminateAndCount(h, v, w) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let h = 0; h < this.size - 1; h++) {
          const v = this.modules[f][h];
          v == this.modules[f][h + 1] && v == this.modules[f + 1][h] && v == this.modules[f + 1][h + 1] && (a += t.PENALTY_N2);
        }
      let l = 0;
      for (const f of this.modules)
        l = f.reduce((h, v) => h + (v ? 1 : 0), l);
      const c = this.size * this.size, d = Math.ceil(Math.abs(l * 20 - c * 10) / c) - 1;
      return o(0 <= d && d <= 9), a += d * t.PENALTY_N4, o(0 <= a && a <= 2568888), a;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const a = Math.floor(this.version / 7) + 2, l = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (a * 2 - 2)) * 2;
        let c = [6];
        for (let d = this.size - 7; c.length < a; d -= l)
          c.splice(1, 0, d);
        return c;
      }
    }
    static getNumRawDataModules(a) {
      if (a < t.MIN_VERSION || a > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * a + 128) * a + 64;
      if (a >= 2) {
        const c = Math.floor(a / 7) + 2;
        l -= (25 * c - 10) * c - 55, a >= 7 && (l -= 36);
      }
      return o(208 <= l && l <= 29648), l;
    }
    static getNumDataCodewords(a, l) {
      return Math.floor(t.getNumRawDataModules(a) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][a] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][a];
    }
    static reedSolomonComputeDivisor(a) {
      if (a < 1 || a > 255)
        throw new RangeError("Degree out of range");
      let l = [];
      for (let d = 0; d < a - 1; d++)
        l.push(0);
      l.push(1);
      let c = 1;
      for (let d = 0; d < a; d++) {
        for (let f = 0; f < l.length; f++)
          l[f] = t.reedSolomonMultiply(l[f], c), f + 1 < l.length && (l[f] ^= l[f + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return l;
    }
    static reedSolomonComputeRemainder(a, l) {
      let c = l.map((d) => 0);
      for (const d of a) {
        const f = d ^ c.shift();
        c.push(0), l.forEach((h, v) => c[v] ^= t.reedSolomonMultiply(h, f));
      }
      return c;
    }
    static reedSolomonMultiply(a, l) {
      if (a >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let d = 7; d >= 0; d--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (l >>> d & 1) * a;
      return o(c >>> 8 == 0), c;
    }
    finderPenaltyCountPatterns(a) {
      const l = a[1];
      o(l <= this.size * 3);
      const c = l > 0 && a[2] == l && a[3] == l * 3 && a[4] == l && a[5] == l;
      return (c && a[0] >= l * 4 && a[6] >= l ? 1 : 0) + (c && a[6] >= l * 4 && a[0] >= l ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(a, l, c) {
      return a && (this.finderPenaltyAddHistory(l, c), l = 0), l += this.size, this.finderPenaltyAddHistory(l, c), this.finderPenaltyCountPatterns(c);
    }
    finderPenaltyAddHistory(a, l) {
      l[0] == 0 && (a += this.size), l.pop(), l.unshift(a);
    }
  };
  let n = t;
  n.MIN_VERSION = 1, n.MAX_VERSION = 40, n.PENALTY_N1 = 3, n.PENALTY_N2 = 3, n.PENALTY_N3 = 40, n.PENALTY_N4 = 10, n.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], n.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], e.QrCode = n;
  function r(a, l, c) {
    if (l < 0 || l > 31 || a >>> l)
      throw new RangeError("Value out of range");
    for (let d = l - 1; d >= 0; d--)
      c.push(a >>> d & 1);
  }
  function i(a, l) {
    return (a >>> l & 1) != 0;
  }
  function o(a) {
    if (!a)
      throw new Error("Assertion error");
  }
  const s = class {
    constructor(a, l, c) {
      if (this.mode = a, this.numChars = l, this.bitData = c, l < 0)
        throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    static makeBytes(a) {
      let l = [];
      for (const c of a)
        r(c, 8, l);
      return new s(s.Mode.BYTE, a.length, l);
    }
    static makeNumeric(a) {
      if (!s.isNumeric(a))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let c = 0; c < a.length; ) {
        const d = Math.min(a.length - c, 3);
        r(parseInt(a.substr(c, d), 10), d * 3 + 1, l), c += d;
      }
      return new s(s.Mode.NUMERIC, a.length, l);
    }
    static makeAlphanumeric(a) {
      if (!s.isAlphanumeric(a))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let l = [], c;
      for (c = 0; c + 2 <= a.length; c += 2) {
        let d = s.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c)) * 45;
        d += s.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c + 1)), r(d, 11, l);
      }
      return c < a.length && r(s.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c)), 6, l), new s(s.Mode.ALPHANUMERIC, a.length, l);
    }
    static makeSegments(a) {
      return a == "" ? [] : s.isNumeric(a) ? [s.makeNumeric(a)] : s.isAlphanumeric(a) ? [s.makeAlphanumeric(a)] : [s.makeBytes(s.toUtf8ByteArray(a))];
    }
    static makeEci(a) {
      let l = [];
      if (a < 0)
        throw new RangeError("ECI assignment value out of range");
      if (a < 128)
        r(a, 8, l);
      else if (a < 16384)
        r(2, 2, l), r(a, 14, l);
      else if (a < 1e6)
        r(6, 3, l), r(a, 21, l);
      else
        throw new RangeError("ECI assignment value out of range");
      return new s(s.Mode.ECI, 0, l);
    }
    static isNumeric(a) {
      return s.NUMERIC_REGEX.test(a);
    }
    static isAlphanumeric(a) {
      return s.ALPHANUMERIC_REGEX.test(a);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(a, l) {
      let c = 0;
      for (const d of a) {
        const f = d.mode.numCharCountBits(l);
        if (d.numChars >= 1 << f)
          return 1 / 0;
        c += 4 + f + d.bitData.length;
      }
      return c;
    }
    static toUtf8ByteArray(a) {
      a = encodeURI(a);
      let l = [];
      for (let c = 0; c < a.length; c++)
        a.charAt(c) != "%" ? l.push(a.charCodeAt(c)) : (l.push(parseInt(a.substr(c + 1, 2), 16)), c += 2);
      return l;
    }
  };
  let u = s;
  u.NUMERIC_REGEX = /^[0-9]*$/, u.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, u.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", e.QrSegment = u;
})(tn || (tn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.ordinal = i, this.formatBits = o;
      }
    };
    let r = n;
    r.LOW = new n(0, 1), r.MEDIUM = new n(1, 0), r.QUARTILE = new n(2, 3), r.HIGH = new n(3, 2), t.Ecc = r;
  })(e.QrCode || (e.QrCode = {}));
})(tn || (tn = {}));
((e) => {
  ((t) => {
    const n = class {
      constructor(i, o) {
        this.modeBits = i, this.numBitsCharCount = o;
      }
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    };
    let r = n;
    r.NUMERIC = new n(1, [10, 12, 14]), r.ALPHANUMERIC = new n(2, [9, 11, 13]), r.BYTE = new n(4, [8, 16, 16]), r.KANJI = new n(8, [8, 10, 12]), r.ECI = new n(7, [0, 0, 0]), t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(tn || (tn = {}));
var wi = tn;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
wi.QrCode.Ecc.LOW, wi.QrCode.Ecc.MEDIUM, wi.QrCode.Ecc.QUARTILE, wi.QrCode.Ecc.HIGH;
(function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})();
function ng() {
  const [e, t] = E.useState(!1), [n, r] = E.useState(!1), [i, o] = E.useState(!1), [s, u] = E.useState(!1), a = Xr(), l = zt((N) => N.user), { t: c } = Dt();
  let d = null, f = null;
  const h = async function(N) {
    try {
      N.preventDefault(), r(!0);
      const O = N.target.screenName.value;
      let P;
      f ? P = f : P = N.target.avatar.files[0];
      let M = l.avatar;
      P && (M = await L(P)), await a.user.updateProfile({ display_name: O, avatar: M });
    } catch (O) {
      alert(O);
    } finally {
      r(!1), location.reload();
    }
  }, v = (N) => {
    N.preventDefault();
    const O = document.getElementById("image-container"), P = document.getElementById("image-container-wrapper"), M = document.getElementById("image-result");
    if (P.setAttribute("style", "display: none;"), N.target.files.length === 0) {
      document.getElementsByClassName("file")[0].value = "", M.removeAttribute("src"), M.setAttribute("style", "display: none;");
      return;
    }
    const G = N.target.files[0].size;
    if (parseInt(G) > 1 * 1024 * 1024) {
      alert("The image size is too large, please choose another one"), document.getElementsByClassName("file")[0].value = "";
      return;
    }
    P.removeAttribute("style"), d && d.destroy(), d = new tg(O, {
      viewport: {
        width: 219,
        height: 220,
        type: "square"
      },
      mouseWheelZoom: "on"
    });
    const te = new FileReader();
    te.onload = function(ae) {
      d.bind(ae.target.result);
    }, te.readAsDataURL(N.target.files[0]);
  }, w = async (N) => {
    N.preventDefault(), d.toCanvas(300).then(async (P) => {
      const M = document.getElementById("image-result");
      M.removeAttribute("style"), M.src = P.toDataURL("image/jpeg", 1);
    });
    const O = await d.toBlob(300, "image/jpeg");
    f = new File([O], "image.jpeg", { type: O.type });
  }, x = (N) => {
    N.preventDefault(), d.refresh(), document.getElementById("image-result").setAttribute("style", "display: none;");
  }, L = async function(N) {
    try {
      let O = new FormData();
      return O.append("file", N), (await (await fetch("https://profileupload.shngm.id/upload/image", {
        method: "POST",
        body: O
      })).json()).imageUrl;
    } catch (O) {
      throw console.error(O), O;
    }
  }, m = async () => {
    try {
      o(!0);
      const N = await fetch(`https://api.shngm.io/v1/sys/get-user-by-email?email=${l.email}`, {
        headers: {
          Authorization: "Bearer VSa@JSIJHJK%Jaa@PgcJ@C!SKkfd&OCc8"
        }
      });
      if (!N.ok) {
        o(!1);
        const M = await N.json();
        return alert(`Error: ${M.message}`);
      }
      const P = (await N.json()).data.user_id;
      await a.user.updateProfile({ url: `https://go.shng.me/user/${P}` }), o(!1);
    } catch (N) {
      return console.error("error", N), o(!1), alert(`Something went wrong: ${N.message}`);
    }
  }, y = async function(N) {
    N.preventDefault();
    const O = N.target.password.value, P = N.target.confirmPassword.value;
    if (!O || !P)
      return alert(c("please input password"));
    if (O !== P)
      return alert(c("passwords don't match"));
    t(!0), await sf({ password: O }), alert("Password updated successfully"), t(!1), location.reload();
  }, g = () => {
    u((N) => !N);
  };
  let S = window.serverURL;
  if (!S) {
    const N = location.pathname.match(/(.*?\/)ui/);
    S = N ? N[1] : "/";
  }
  const C = new URLSearchParams(location.search);
  let k = window.TOKEN || sessionStorage.getItem("TOKEN") || C.get("token");
  return k || (k = localStorage.getItem("TOKEN")), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: c("setting") }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ p.jsx("p", { children: /* @__PURE__ */ p.jsx(
            "span",
            {
              rel: "noreferrer",
              children: /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "profile-avatar",
                  src: l.avatar || `https://seccdn.libravatar.org/avatar/${l.mailMd5}?s=220&amp;r=X&amp;d=mm`
                }
              )
            }
          ) }),
          /* @__PURE__ */ p.jsx("h2", { children: l.display_name }),
          /* @__PURE__ */ p.jsx("p", { children: l.email })
        ] }),
        /* @__PURE__ */ p.jsxs(
          "div",
          {
            className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel",
            role: "form",
            children: [
              /* @__PURE__ */ p.jsxs("section", { children: [
                /* @__PURE__ */ p.jsx("h3", { children: c("profile") }),
                /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: h, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: c("nickname") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "screenName-0-1",
                        name: "screenName",
                        type: "text",
                        className: "text",
                        defaultValue: l.display_name
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsxs("div", { id: "image-container-wrapper", style: { display: "none" }, children: [
                    /* @__PURE__ */ p.jsx("div", { id: "image-container" }),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        onClick: w,
                        type: "button",
                        className: "btn primary",
                        children: "Crop"
                      }
                    ),
                    /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        onClick: x,
                        type: "button",
                        className: "btn",
                        style: { marginLeft: "10px" },
                        children: "Reset"
                      }
                    )
                  ] }) }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx("img", { id: "image-result", src: "", alt: "", style: { display: "none" } }) }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx("label", { className: "typecho-label", htmlFor: "url-0-3", children: c("change avatar") }),
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "url-0-3",
                        name: "avatar",
                        type: "file",
                        className: "file",
                        onChange: v,
                        accept: "image/*"
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: n,
                      children: c("update my profile")
                    }
                  ) }) })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("section", { children: /* @__PURE__ */ p.jsxs("div", { className: "change-password-wrapper", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "change-password-label", children: [
                  /* @__PURE__ */ p.jsxs("div", { children: [
                    /* @__PURE__ */ p.jsx("h3", { children: c("password") }),
                    /* @__PURE__ */ p.jsx("span", { children: "******" })
                  ] }),
                  /* @__PURE__ */ p.jsx("a", { href: "#", style: { color: "#bbb", fontSize: "1.1em" }, onClick: g, children: c(s ? "cancel" : "edit") })
                ] }),
                s ? /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsxs("form", { method: "post", onSubmit: y, children: [
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "password",
                        name: "password",
                        type: "password",
                        className: "text",
                        placeholder: "New password",
                        disabled: e
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ p.jsxs("li", { children: [
                    /* @__PURE__ */ p.jsx(
                      "input",
                      {
                        id: "confirm-password",
                        name: "confirmPassword",
                        type: "password",
                        className: "text",
                        placeholder: "Confirm new password",
                        disabled: e
                      }
                    ),
                    /* @__PURE__ */ p.jsx("p", { className: "description" })
                  ] }) }),
                  /* @__PURE__ */ p.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ p.jsx("li", { children: /* @__PURE__ */ p.jsx(
                    "button",
                    {
                      type: "submit",
                      className: "btn primary",
                      disabled: e,
                      children: c("submit")
                    }
                  ) }) })
                ] }) }) : null
              ] }) }),
              /* @__PURE__ */ p.jsx("br", {}),
              /* @__PURE__ */ p.jsxs("section", { id: "social-account", children: [
                /* @__PURE__ */ p.jsx("h3", { children: "Connect" }),
                /* @__PURE__ */ p.jsx(
                  "div",
                  {
                    className: "account-item shinigami",
                    children: /* @__PURE__ */ p.jsx(
                      "button",
                      {
                        disabled: i,
                        className: "btn primary",
                        style: { minWidth: "200px", display: "flex", justifyContent: "center", alignItems: "center" },
                        onClick: m,
                        children: i ? /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", width: "24", height: "24", style: { "shape-rendering": "auto", display: "block", background: "transparent" }, "xmlns:xlink": "http://www.w3.org/1999/xlink", children: /* @__PURE__ */ p.jsxs("g", { children: [
                          /* @__PURE__ */ p.jsx("circle", { "stroke-dasharray": "127.23450247038662 44.411500823462205", r: "27", "stroke-width": "8", stroke: "#fff", fill: "none", cy: "50", cx: "50", children: /* @__PURE__ */ p.jsx("animateTransform", { keyTimes: "0;1", values: "0 50 50;360 50 50", dur: "1s", repeatCount: "indefinite", type: "rotate", attributeName: "transform" }) }),
                          /* @__PURE__ */ p.jsx("g", {})
                        ] }) }) : "Connect to Shinigami"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ p.jsx("br", {})
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function rg() {
  const { t: e } = Dt(), t = Xr(), n = Jr(), r = zt((c) => c.user), [i, o] = E.useState(!1), [s, u] = E.useState(!1), a = nf({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  E.useEffect(() => {
    r && r.email && n("/ui", { replace: !0 });
  }, [n]);
  const l = async function(c) {
    c.preventDefault(), o(!1);
    const d = c.target.nick.value;
    if (!d || d.length < 2)
      return o(e("nickname illegal"));
    const f = c.target.email.value;
    if (!f)
      return o(e("please input email"));
    const h = c.target.password.value, v = c.target["password-again"].value;
    if (!h || !v || v !== h)
      return o(e("passwords don't match"));
    try {
      u(!0);
      const w = await a("login"), x = await t.user.register({
        display_name: d,
        email: f,
        // url: link,
        password: h,
        recaptchaV3: window.recaptchaV3Key ? w : void 0,
        turnstile: window.turnstileKey ? w : void 0
      });
      x && x.verify && alert(e("register success! please go to your mailbox to verify it!")), n("/ui/login");
    } catch (w) {
      o(w.message);
    } finally {
      u(!1);
    }
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: i ? "block" : "none"
        },
        children: /* @__PURE__ */ p.jsx("ul", { children: i ? /* @__PURE__ */ p.jsx("li", { children: i }) : null })
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ p.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: l, children: [
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "nick", className: "sr-only", children: e("nickname") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: e("nickname"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "email", className: "sr-only", children: e("email") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: e("email"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password", className: "sr-only", children: e("password") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: e("password")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("p", { children: [
          /* @__PURE__ */ p.jsx("label", { htmlFor: "password-again", className: "sr-only", children: e("password again") }),
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: e("password again")
            }
          )
        ] }),
        /* @__PURE__ */ p.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ p.jsx("p", { className: "submit", children: /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            disabled: s,
            className: "btn btn-l w-100 primary",
            children: e("register")
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ p.jsx(Ke, { to: "/ui", children: e("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ p.jsx(Ke, { to: "/ui/login", children: e("register.login") })
      ] })
    ] }) })
  ] });
}
function ig() {
  const e = E.useRef(null), t = zt((l) => l.user), { t: n } = Dt(), [r, i] = E.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [o, s] = E.useReducer(
    function(l, c) {
      return { ...l, ...c };
    },
    { keyword: "" }
  );
  E.useEffect(() => {
    M3({ page: r.page, filter: o }).then((l) => {
      i({ ...r, ...l });
    });
  }, [o, r.page]);
  const u = (l) => [
    {
      key: "administrator",
      name: n("set administrator"),
      show: l.type === "guest",
      async action(c) {
        c.preventDefault(), await rr({
          id: l.objectId,
          type: "administrator"
        }), l.type = "administrator", i({ ...r });
      }
    },
    {
      key: "guest",
      name: n("set guest"),
      show: l.type === "administrator",
      async action(c) {
        if (c.preventDefault(), l.objectId === t.objectId)
          return alert(n("You can't set yourself to be guest!"));
        await rr({
          id: l.objectId,
          type: "guest"
        }), l.type = "guest", i({ ...r });
      }
    },
    {
      key: "label",
      name: n("set label"),
      show: !0,
      async action(c) {
        c.preventDefault();
        const d = prompt(n("please enter an exclusive label"));
        await rr({
          id: l.objectId,
          label: d
        }), l.label = d, i({ ...r });
      }
    },
    {
      key: "banned",
      name: "Banned User",
      show: !l.is_banned,
      async action(c) {
        c.preventDefault(), await rr({
          id: l.objectId,
          is_banned: 1
        }), l.is_banned = 1, i({ ...r });
      }
    },
    {
      key: "unbanned",
      name: "Unbanned User",
      show: l.is_banned,
      async action(c) {
        c.preventDefault(), await rr({
          id: l.objectId,
          is_banned: 0
        }), l.is_banned = 0, i({ ...r });
      }
    }
    // todo
    // {
    //   key: 'delete',
    //   name: t('delete'),
    //   show: true,
    //   async action() {},
    // },
  ].filter(({ show: c }) => c), a = (l) => /^verify/.test(l) ? n("verify") : n(l);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(an, {}),
    /* @__PURE__ */ p.jsx("div", { className: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ p.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ p.jsx("h2", { children: n("manage users") }) }),
      /* @__PURE__ */ p.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ p.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsxs("div", { className: "search", role: "search", children: [
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "text",
              ref: e,
              className: "text-s",
              placeholder: "Search user..."
            }
          ),
          " ",
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "submit",
              className: "btn btn-s",
              onClick: (l) => {
                l.preventDefault(), s({ keyword: e.current.value });
              },
              children: n("filter")
            }
          )
        ] }) }),
        /* @__PURE__ */ p.jsx(
          "form",
          {
            method: "post",
            name: "manage_comments",
            className: "operate-form",
            children: /* @__PURE__ */ p.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ p.jsxs("table", { className: "typecho-list-table", children: [
              /* @__PURE__ */ p.jsxs("colgroup", { children: [
                /* @__PURE__ */ p.jsx("col", { width: "6%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" }),
                /* @__PURE__ */ p.jsx("col", { width: "15%" }),
                /* @__PURE__ */ p.jsx("col", { width: "20%" })
              ] }),
              /* @__PURE__ */ p.jsx("thead", { children: /* @__PURE__ */ p.jsxs("tr", { children: [
                /* @__PURE__ */ p.jsx("th", { children: " " }),
                /* @__PURE__ */ p.jsx("th", { children: n("nickname") }),
                /* @__PURE__ */ p.jsx("th", { children: n("email") }),
                /* @__PURE__ */ p.jsx("th", { children: n("role") }),
                /* @__PURE__ */ p.jsx("th", { children: n("exclusive label") }),
                /* @__PURE__ */ p.jsx("th", { children: n("action") })
              ] }) }),
              /* @__PURE__ */ p.jsx("tbody", { children: r.data.map((l) => /* @__PURE__ */ p.jsxs("tr", { id: `user-${l.objectId}`, children: [
                /* @__PURE__ */ p.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ p.jsx("div", { className: "user-avatar", children: /* @__PURE__ */ p.jsx(
                  "img",
                  {
                    className: "avatar",
                    src: df(l.email, l.avatar),
                    alt: l.display_name,
                    width: "40",
                    height: "40"
                  }
                ) }) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: /^https:\/\//.test(l.url) ? l.url : "https://" + l.url,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: l.display_name
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: /* @__PURE__ */ p.jsx(
                  "a",
                  {
                    href: `mailto:${l.email}`,
                    target: "_blank",
                    rel: "noreferrer",
                    children: l.email
                  }
                ) }),
                /* @__PURE__ */ p.jsx("td", { children: a(l.type) }),
                /* @__PURE__ */ p.jsx("td", { children: l.label }),
                /* @__PURE__ */ p.jsx("td", { className: "comment-action", children: u(l).map(
                  ({ key: c, disable: d, name: f, action: h }) => d ? /* @__PURE__ */ p.jsx("span", { className: "weak", children: f }, c) : /* @__PURE__ */ p.jsx(
                    "a",
                    {
                      href: "javascript:void(0)",
                      className: `operate-${c}`,
                      onClick: h,
                      children: f
                    },
                    c
                  )
                ) })
              ] }, l.objectId)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ p.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ p.jsx("form", { method: "get", children: /* @__PURE__ */ p.jsx(
          ff,
          {
            current: r.page,
            total: r.totalPages,
            onChange: (l) => i({ ...r, page: l })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function og() {
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ p.jsx("div", { className: "typecho-login", children: /* @__PURE__ */ p.jsx("h2", { children: "Your account has been banned, please contact the admin." }) }) }) });
}
function oe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var sg = typeof Symbol == "function" && Symbol.observable || "@@observable", cc = sg, Ls = () => Math.random().toString(36).substring(7).split("").join("."), lg = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Ls()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Ls()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ls()}`
}, Ur = lg;
function Sa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Fo(e, t, n) {
  if (typeof e != "function")
    throw new Error(oe(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(oe(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(oe(1));
    return n(Fo)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), s = o, u = 0, a = !1;
  function l() {
    s === o && (s = /* @__PURE__ */ new Map(), o.forEach((x, L) => {
      s.set(L, x);
    }));
  }
  function c() {
    if (a)
      throw new Error(oe(3));
    return i;
  }
  function d(x) {
    if (typeof x != "function")
      throw new Error(oe(4));
    if (a)
      throw new Error(oe(5));
    let L = !0;
    l();
    const m = u++;
    return s.set(m, x), function() {
      if (L) {
        if (a)
          throw new Error(oe(6));
        L = !1, l(), s.delete(m), o = null;
      }
    };
  }
  function f(x) {
    if (!Sa(x))
      throw new Error(oe(7));
    if (typeof x.type > "u")
      throw new Error(oe(8));
    if (typeof x.type != "string")
      throw new Error(oe(17));
    if (a)
      throw new Error(oe(9));
    try {
      a = !0, i = r(i, x);
    } finally {
      a = !1;
    }
    return (o = s).forEach((m) => {
      m();
    }), x;
  }
  function h(x) {
    if (typeof x != "function")
      throw new Error(oe(10));
    r = x, f({
      type: Ur.REPLACE
    });
  }
  function v() {
    const x = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(L) {
        if (typeof L != "object" || L === null)
          throw new Error(oe(11));
        function m() {
          const g = L;
          g.next && g.next(c());
        }
        return m(), {
          unsubscribe: x(m)
        };
      },
      [cc]() {
        return this;
      }
    };
  }
  return f({
    type: Ur.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: c,
    replaceReducer: h,
    [cc]: v
  };
}
function ag(e, t, n) {
  return Fo(e, t, n);
}
function ug(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Ur.INIT
    }) > "u")
      throw new Error(oe(12));
    if (typeof n(void 0, {
      type: Ur.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(oe(13));
  });
}
function Cf(e) {
  const t = Object.keys(e), n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    ug(n);
  } catch (o) {
    i = o;
  }
  return function(s = {}, u) {
    if (i)
      throw i;
    let a = !1;
    const l = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c], f = n[d], h = s[d], v = f(h, u);
      if (typeof v > "u")
        throw u && u.type, new Error(oe(14));
      l[d] = v, a = a || v !== h;
    }
    return a = a || r.length !== Object.keys(s).length, a ? l : s;
  };
}
function dc(e, t) {
  return function(...n) {
    return t(e.apply(this, n));
  };
}
function cg(e, t) {
  if (typeof e == "function")
    return dc(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(oe(16));
  const n = {};
  for (const r in e) {
    const i = e[r];
    typeof i == "function" && (n[r] = dc(i, t));
  }
  return n;
}
function Ea(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function kf(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(oe(15));
    };
    const s = {
      getState: i.getState,
      dispatch: (a, ...l) => o(a, ...l)
    }, u = e.map((a) => a(s));
    return o = Ea(...u)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function dg(e) {
  return Sa(e) && "type" in e && typeof e.type == "string";
}
const fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: Ur,
  applyMiddleware: kf,
  bindActionCreators: cg,
  combineReducers: Cf,
  compose: Ea,
  createStore: Fo,
  isAction: dg,
  isPlainObject: Sa,
  legacy_createStore: ag
}, Symbol.toStringTag, { value: "Module" }));
function nn() {
  return nn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nn.apply(this, arguments);
}
function pg(e) {
  var t;
  e.models.forEach(function(a) {
    return Nf(e, a);
  });
  var n = jf(e), r = kf.apply(fg, e.reduxConfig.middlewares), i = e.reduxConfig.devtoolComposer ? (t = e.reduxConfig).devtoolComposer.apply(t, e.reduxConfig.enhancers.concat([r])) : mg(e.reduxConfig.devtoolOptions).apply(void 0, e.reduxConfig.enhancers.concat([r])), o = e.reduxConfig.createStore || Fo, s = e.reduxConfig.initialState, u = s === void 0 ? {} : s;
  return o(n, u, i);
}
function Nf(e, t) {
  var n = {}, r = Object.keys(t.reducers);
  r.forEach(function(u) {
    var a = Lg(u) ? u : t.name + "/" + u;
    n[a] = t.reducers[u];
  });
  var i = function(a, l) {
    return a === void 0 && (a = t.state), l.type in n ? n[l.type](a, l.payload, l.meta) : a;
  }, o = t.baseReducer, s = o ? function(u, a) {
    return u === void 0 && (u = t.state), i(o(u, a), a);
  } : i;
  e.forEachPlugin("onReducer", function(u) {
    s = u(s, t.name, e) || s;
  }), e.reduxConfig.reducers[t.name] = s;
}
function jf(e) {
  var t = e.reduxConfig.rootReducers, n = hg(e.reduxConfig), r = n;
  return t && Object.keys(t).length && (r = function(o, s) {
    var u = t[s.type];
    return n(u ? u(o, s) : o, s);
  }), e.forEachPlugin("onRootReducer", function(i) {
    r = i(r, e) || r;
  }), r;
}
function hg(e) {
  var t = e.combineReducers || Cf;
  return Object.keys(e.reducers).length ? t(e.reducers) : function(n) {
    return n;
  };
}
function mg(e) {
  return e === void 0 && (e = {}), !e.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(e) : Ea;
}
function Lg(e) {
  return e.indexOf("/") > -1;
}
var gg = function(t, n, r) {
}, vg = function(t, n, r) {
}, Pf = function(t, n, r, i) {
  return Object.assign(function(o, s) {
    var u = {
      type: n + "/" + r
    };
    return typeof o < "u" && (u.payload = o), typeof s < "u" && (u.meta = s), t.dispatch(u);
  }, {
    isEffect: i
  });
}, yg = function(t, n) {
  var r = t.dispatch[n.name], i = Object.keys(n.reducers);
  i.forEach(function(o) {
    gg(n.name, n.reducers), r[o] = Pf(t, n.name, o, !1);
  });
}, wg = function(t, n, r) {
  var i = t.dispatch[r.name], o = {};
  r.effects && (o = typeof r.effects == "function" ? r.effects(t.dispatch) : r.effects);
  var s = Object.keys(o);
  s.forEach(function(u) {
    vg(r.name), n.effects[r.name + "/" + u] = o[u].bind(i), i[u] = Pf(t, r.name, u, !0);
  });
};
function xg(e) {
  return {
    models: Sg(e.models),
    reduxConfig: e.redux,
    forEachPlugin: function(n, r) {
      e.plugins.forEach(function(i) {
        i[n] && r(i[n]);
      });
    },
    effects: {}
  };
}
function Sg(e) {
  return Object.keys(e).map(function(t) {
    var n = Eg(t, e[t]);
    return n;
  });
}
function Eg(e, t) {
  return nn({
    name: e,
    reducers: {}
  }, t);
}
function Cg(e) {
  var t = xg(e);
  t.reduxConfig.middlewares.push(kg(t)), t.forEachPlugin("createMiddleware", function(i) {
    t.reduxConfig.middlewares.push(i(t));
  });
  var n = pg(t), r = nn({}, n, {
    name: e.name,
    addModel: function(o) {
      Nf(t, o), fc(r, o), pc(r, t, o), n.replaceReducer(jf(t)), n.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return Ng(r, e.plugins), t.models.forEach(function(i) {
    return fc(r, i);
  }), t.models.forEach(function(i) {
    return pc(r, t, i);
  }), t.forEachPlugin("onStoreCreated", function(i) {
    r = i(r, t) || r;
  }), r;
}
function kg(e) {
  return function(t) {
    return function(n) {
      return function(r) {
        return r.type in e.effects ? (n(r), e.effects[r.type](r.payload, t.getState(), r.meta)) : n(r);
      };
    };
  };
}
function fc(e, t) {
  var n = {};
  e.dispatch["" + t.name] = n, yg(e, t);
}
function pc(e, t, n) {
  wg(e, t, n), t.forEachPlugin("onModel", function(r) {
    r(n, e);
  });
}
function Ng(e, t) {
  t.forEach(function(n) {
    if (n.exposed) {
      var r = Object.keys(n.exposed);
      r.forEach(function(i) {
        if (n.exposed) {
          var o = n.exposed[i], s = typeof o == "function";
          e[i] = s ? function() {
            for (var u = arguments.length, a = new Array(u), l = 0; l < u; l++)
              a[l] = arguments[l];
            return o.apply(void 0, [e].concat(a));
          } : Object.create(n.exposed[i]);
        }
      });
    }
  });
}
var hc = 0;
function jg(e) {
  var t, n, r, i = (t = e.name) != null ? t : "Rematch Store " + hc;
  hc += 1;
  var o = {
    name: i,
    models: e.models || {},
    plugins: e.plugins || [],
    redux: nn({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, e.redux, {
      devtoolOptions: nn({
        name: i
      }, (n = (r = e.redux) == null ? void 0 : r.devtoolOptions) != null ? n : {})
    })
  };
  return o.plugins.forEach(function(s) {
    s.config && (o.models = xi(o.models, s.config.models), s.config.redux && (o.redux.initialState = xi(o.redux.initialState, s.config.redux.initialState), o.redux.reducers = xi(o.redux.reducers, s.config.redux.reducers), o.redux.rootReducers = xi(o.redux.rootReducers, s.config.redux.reducers), o.redux.enhancers = [].concat(o.redux.enhancers, s.config.redux.enhancers || []), o.redux.middlewares = [].concat(o.redux.middlewares, s.config.redux.middlewares || []), o.redux.combineReducers = o.redux.combineReducers || s.config.redux.combineReducers, o.redux.createStore = o.redux.createStore || s.config.redux.createStore));
  }), o;
}
function xi(e, t) {
  return t ? nn({}, t, e) : e;
}
var Pg = function(t) {
  var n = jg(t || {});
  return Cg(n);
};
async function Rg() {
  return ce("token").catch(() => {
    Rf(), Promise.reject(new Error("get userinfo failed"));
  });
}
async function Og({ email: e, password: t, code: n, recaptchaV3: r, turnstile: i }) {
  return ce({
    url: "token",
    method: "POST",
    body: { email: e, password: t, code: n, recaptchaV3: r, turnstile: i }
  });
}
async function Rf() {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}
async function Tg(e) {
  return ce({ url: "user", method: "POST", body: e });
}
async function _g({ email: e }) {
  return ce({
    url: "user/password",
    method: "PUT",
    body: { email: e }
  });
}
const $g = {
  state: null,
  reducers: {
    setUser(e, t) {
      return t;
    },
    updateUser(e, t) {
      return { ...e, ...t };
    }
  },
  effects: (e) => ({
    async loadUserInfo() {
      const t = await Rg();
      if (t != null && t.email) {
        if (window.opener) {
          const n = localStorage.getItem("TOKEN"), r = !!n, i = n || window.TOKEN || sessionStorage.getItem("token");
          window.opener.postMessage(
            { type: "userInfo", data: { token: i, remember: r, ...t } },
            "*"
          );
        }
        return e.user.setUser(t);
      }
    },
    async login({ email: t, password: n, code: r, remember: i, recaptchaV3: o, turnstile: s }) {
      const { token: u, ...a } = await Og({
        email: t,
        password: n,
        code: r,
        recaptchaV3: o,
        turnstile: s
      });
      return u && (window.TOKEN = u, sessionStorage.setItem("TOKEN", u), i && localStorage.setItem("TOKEN", u), window.opener && window.opener.postMessage(
        { type: "userInfo", data: { token: u, remember: i, ...a } },
        "*"
      )), e.user.setUser(a);
    },
    logout() {
      Rf(), e.user.setUser(null);
    },
    register(t) {
      return Tg(t);
    },
    forgot(t) {
      return _g(t);
    },
    async updateProfile(t) {
      return await sf(t), window.opener && window.opener.postMessage({ type: "profile", data: t }, "*"), e.user.updateUser(t);
    }
  })
}, Of = Pg({ models: { user: $g } });
function Si(e) {
  const t = zt((n) => n.user);
  return E.useEffect(() => {
    const n = e.meta || {}, r = e.basename || "";
    if (!(t != null && t.email))
      return location.href = r + "/ui/login?redirect=" + location.pathname.replace(r, "");
    if (n.auth ? e.meta.auth !== t.type : !1)
      return location.href = r + "/ui/profile";
  }, [t, e.meta]), t ? e.children : null;
}
function Ig() {
  const e = location.pathname.match(/(.*?)\/ui/), t = e ? e[1] : "/";
  return /* @__PURE__ */ p.jsx(jh, { store: Of, children: /* @__PURE__ */ p.jsx(C2, { basename: t, children: /* @__PURE__ */ p.jsxs(g2, { children: [
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(W3, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(ig, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { meta: { auth: "administrator" }, basename: t, children: /* @__PURE__ */ p.jsx(X3, {}) })
      }
    ),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ p.jsx(b3, {}) }),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ p.jsx(rg, {}) }),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ p.jsx(JL, {}) }),
    /* @__PURE__ */ p.jsx(rt, { path: "/ui/banned", exact: !0, element: /* @__PURE__ */ p.jsx(og, {}) }),
    /* @__PURE__ */ p.jsx(
      rt,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ p.jsx(Si, { children: /* @__PURE__ */ p.jsx(ng, {}) })
      }
    )
  ] }) }) });
}
const {
  slice: Mg,
  forEach: bg
} = [];
function Fg(e) {
  return bg.call(Mg.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const mc = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Ag = (e, t, n) => {
  const r = n || {};
  r.path = r.path || "/";
  const i = encodeURIComponent(t);
  let o = `${e}=${i}`;
  if (r.maxAge > 0) {
    const s = r.maxAge - 0;
    if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(s)}`;
  }
  if (r.domain) {
    if (!mc.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!mc.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, Lc = {
  create(e, t, n, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (i.expires = /* @__PURE__ */ new Date(), i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)), r && (i.domain = r), document.cookie = Ag(e, encodeURIComponent(t), i);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
      if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
    }
    return null;
  },
  remove(e) {
    this.create(e, "", -1);
  }
};
var zg = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return Lc.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: i,
      cookieOptions: o
    } = t;
    n && typeof document < "u" && Lc.create(n, e, r, i, o);
  }
}, Dg = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    var r;
    let {
      lookupQuerystring: t
    } = e, n;
    if (typeof window < "u") {
      let {
        search: i
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (i = window.location.hash.substring(window.location.hash.indexOf("?")));
      const s = i.substring(1).split("&");
      for (let u = 0; u < s.length; u++) {
        const a = s[u].indexOf("=");
        a > 0 && s[u].substring(0, a) === t && (n = s[u].substring(a + 1));
      }
    }
    return n;
  }
};
let or = null;
const gc = () => {
  if (or !== null) return or;
  try {
    or = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    or = !1;
  }
  return or;
};
var Ug = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && gc())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && gc() && window.localStorage.setItem(n, e);
  }
};
let sr = null;
const vc = () => {
  if (sr !== null) return sr;
  try {
    sr = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    sr = !1;
  }
  return sr;
};
var Bg = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && vc())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && vc() && window.sessionStorage.setItem(n, e);
  }
}, Vg = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: i
      } = navigator;
      if (n)
        for (let o = 0; o < n.length; o++)
          t.push(n[o]);
      r && t.push(r), i && t.push(i);
    }
    return t.length > 0 ? t : void 0;
  }
}, Hg = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, Kg = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    var i;
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window > "u") return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? (i = n[typeof t == "number" ? t : 0]) == null ? void 0 : i.replace("/", "") : void 0;
  }
}, Wg = {
  name: "subdomain",
  lookup(e) {
    var i, o;
    let {
      lookupFromSubdomainIndex: t
    } = e;
    const n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && ((o = (i = window.location) == null ? void 0 : i.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[n];
  }
};
function Qg() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (e) => e
  };
}
class Tf {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = Fg(n, this.options || {}, Qg()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(zg), this.addDetector(Dg), this.addDetector(Ug), this.addDetector(Bg), this.addDetector(Vg), this.addDetector(Hg), this.addDetector(Kg), this.addDetector(Wg);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let i = this.detectors[r].lookup(this.options);
        i && typeof i == "string" && (i = [i]), i && (n = n.concat(i));
      }
    }), n = n.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
Tf.type = "languageDetector";
pe.use(Tf).use(Q2).init({
  // we init with resources
  resources: GL,
  fallbackLng: "zh-CN",
  debug: !0,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: !1,
  // we use content as keys
  interpolation: {
    escapeValue: !1
  }
});
async function Yg() {
  await Promise.race([
    new Promise((n) => setTimeout(n, 50)),
    new Promise((n) => {
      window.addEventListener("message", (r) => {
        r && r.type === "TOKEN" && r.data && n(r);
      });
    }),
    new Promise((n) => {
      const i = new URLSearchParams(location.search).get("token");
      i && n(i);
    })
  ]).then((n) => {
    n && (window.TOKEN = n, sessionStorage.setItem("TOKEN", n));
  }), await Promise.all([Of.dispatch({ type: "user/loadUserInfo" })]).catch(
    (n) => {
      console.error(n);
    }
  );
  const e = document.createElement("div");
  e.style.height = "100%", document.body.appendChild(e), T1(e).render(
    /* @__PURE__ */ p.jsx(vo.StrictMode, { children: /* @__PURE__ */ p.jsx(Ig, {}) })
  );
}
console.log(
  "%c @waline/admin %c v0.25.3 ",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
Yg();
