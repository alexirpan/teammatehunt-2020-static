_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[120],{"/swt":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n).a.createElement;t.a=function(e){var t=e.user,a="".concat(void 0===t?"help":t,"@teammatehunt.com");return r("a",{href:"mailto:"+a},a)}},"4xUU":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[team_name]",function(){return a("t1H6")}])},"HaE+":function(e,t,a){"use strict";function n(e,t,a,n,r,o,s){try{var i=e[o](s),c=i.value}catch(u){return void a(u)}i.done?t(c):Promise.resolve(c).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,o){var s=e.apply(t,a);function i(e){n(s,r,o,i,c,"next",e)}function c(e){n(s,r,o,i,c,"throw",e)}i(void 0)}))}}a.d(t,"a",(function(){return r}))},Uqjl:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return l}));var n=a("o0o1"),r=a.n(n),o=a("rePB"),s=a("HaE+");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=function(){var e=Object(s.a)(r.a.mark((function e(t,a){var n,o,s,i,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw n=u.length>2&&void 0!==u[2]?u[2]:{method:"GET"},new Error("called serverFetch from a browser!");case 3:return o=new URL("http://localhost:8000/api"+a),e.next=6,fetch(o.toString(),c({headers:{cookie:t.req.headers.cookie}},n));case 6:return s=e.sent,401==(i=s.status)&&(t.res.writeHead(307,{Location:"/login?next="+encodeURIComponent(t.req.url)}),t.res.end()),200===t.res.statusCode&&200!==i&&(t.res.statusCode=i),e.abrupt("return",s.json().then((function(e){return c({statusCode:i},e)})));case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(r.a.mark((function e(t,a){var n,o,s,i=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:{method:"GET"},e.next=3,fetch("/api"+a,n);case 3:return o=e.sent,401==(s=o.status)&&t.push("/#login?next="+encodeURIComponent(window.location.pathname)),e.abrupt("return",o.json().then((function(e){return c({statusCode:s},e)})));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},XvZu:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("wx14"),r=a("MX0m"),o=a.n(r),s=a("q1tI"),i=a.n(s),c=i.a.createElement,u=function(e){return c(i.a.Fragment,null,c("table",Object(n.a)({},e,{className:"jsx-2758939328 "+(e&&null!=e.className&&e.className||"")})),c(o.a,{id:"2758939328"},["table.jsx-2758939328{min-width:100%;max-width:100%;overflow-x:auto;}"]))};t.b=function(e){return c("div",{className:"jsx-2506950147 wrapper"},c("table",Object(n.a)({},e,{className:"jsx-2506950147 "+(e&&null!=e.className&&e.className||"")})),c(o.a,{id:"2506950147"},[".wrapper.jsx-2506950147{max-width:100%;overflow-x:auto;}"]))}},eG5I:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"f",(function(){return l})),a.d(t,"c",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"a",(function(){return p})),a.d(t,"g",(function(){return f}));var n=a("q1tI"),r=a.n(n),o=r.a.createElement,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.max(e,0).toString().padStart(t,"0")},i=function(e,t){return"".concat(t).concat(1===e?"":"s")},c=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=a.showHours,c=void 0!==n&&n,u=a.showDays,l=void 0!==u&&u,m=a.verbose,d=void 0!==m&&m,p=a.warningAt,f=void 0===p?10:p,v=Math.ceil(e/t),x=Math.floor(v/60/60/24)%365,h=Math.floor(v/60/60)%24;l||(h=24*x+h);var j=Math.floor(v/60)%60;c||(j=60*h+j);var g=v%60,b=d?1:2;return o("span",{className:f>0&&v<=f?"red":""},l&&x>=1&&"".concat(x," ").concat(i(x,"day"),", "),c&&h>=1&&o(r.a.Fragment,null,s(h,b),d?" ".concat(i(h,"hour"),", "):":"),s(j,b),d?" min, ":":",s(g,b),d?" sec":"")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.year,n=void 0===a?"numeric":a,r=t.month,o=void 0===r?"short":r,s=t.day,i=void 0===s?"numeric":s,c=t.weekday,u=void 0===c?"short":c,l=t.hour,m=void 0===l?"numeric":l,d=t.minute,p=void 0===d?"numeric":d,f=t.second,v=void 0===f?void 0:f,x=t.timeZoneName,h=void 0===x?"short":x;if(!e)return"";var j=new Date(e);return j.toLocaleDateString(void 0,{year:null!==n&&void 0!==n?n:void 0,month:null!==o&&void 0!==o?o:void 0,day:null!==i&&void 0!==i?i:void 0,weekday:null!==u&&void 0!==u?u:void 0,hour:null!==m&&void 0!==m?m:void 0,minute:null!==p&&void 0!==p?p:void 0,second:null!==v&&void 0!==v?v:void 0,timeZoneName:null!==h&&void 0!==h?h:void 0})},l=function(e){return e?new Date(e).getTime():Number.MAX_VALUE},m=function(e){return u(e,{hour:null,minute:null,timeZoneName:null})},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.hour,n=void 0===a?"numeric":a,r=t.minute,o=void 0===r?"numeric":r,s=t.second,i=void 0===s?void 0:s,c=t.timeZoneName,u=void 0===c?"short":c,l=new Date(e);return l.toLocaleTimeString(void 0,{hour:null!==n&&void 0!==n?n:void 0,minute:null!==o&&void 0!==o?o:void 0,second:null!==i&&void 0!==i?i:void 0,timeZoneName:null!==u&&void 0!==u?u:void 0})},p={src:"public/tick",sprite:{tick:[0,1e3],tickFast:[2e3,1e3],tickFaster:[3e3,1e3],tickFastest:[4e3,1e3]}},f=function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.warningAt,s=void 0===o?10:o,i=r.tickAt,u=void 0===i?5:i,l=r.tickSfx,m=void 0===l?void 0:l,d=Math.max(0,Math.ceil(e/t)),p=Object(n.useRef)(d);if(a&&d!==p.current&&m){var f=m;d<=u?1===d?f.play("tickFastest"):2===d?f.play("tickFaster"):3===d?f.play("tickFast"):f.play("tick"):d%5===0&&f.play("tick"),p.current=d}return c(e,t,{warningAt:s})}},jWZv:function(e,t){e.exports="/_next/static/assets/assets/public/ae783872e25ccce9ec95ae553b5ab426.png"},o0o1:function(e,t,a){e.exports=a("ls82")},otFC:function(e,t,a){"use strict";var n=a("MX0m"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=a("8Kt/"),c=a.n(i),u=s.a.createElement;t.a=function(e){var t=e.title,a=e.pageTitle,n=e.suppressPageTitle,o=e.removeMargin,i=e.id,l=a||t;return u(s.a.Fragment,null,!n&&u(c.a,null,u("title",{className:"jsx-1930915425"},l)),u("h1",{id:i,className:"jsx-1930915425 "+((o?"nomargin":"")||"")},u("span",{className:"jsx-1930915425"},t)),u(r.a,{id:"1930915425"},["h1.jsx-1930915425{text-align:center;word-wrap:break-word;}",".nomargin.jsx-1930915425{margin:0px;}","span.jsx-1930915425{background-color:rgba(255,255,255,0.5);padding:0 16px;}","@media (max-width:800px){h1.jsx-1930915425{font-size:40px;line-height:40px;}}"]))}},rePB:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},t1H6:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return _}));var n=a("o0o1"),r=a.n(n),o=a("HaE+"),s=a("MX0m"),i=a.n(s),c=a("q1tI"),u=a.n(c),l=a("8Kt/"),m=a.n(l),d=a("nOHt"),p=a("Uqjl"),f=a("eG5I"),v=a("/swt"),x=a("qTru"),h=a("XvZu"),j=a("otFC"),g=u.a.createElement,b=[1,2,3,4,5,6],w=function(e){var t=e.members,a=void 0===t?[]:t,n=e.errors;return g(u.a.Fragment,null,b.map((function(e){var t,r,o,s,i=1===e,c=n["name".concat(e)],u=n["email".concat(e)];return g("div",{key:e,className:"jsx-3879706637 row"},g("div",{className:"jsx-3879706637 col-50 collapse col-left"},g("input",{name:"name".concat(e),type:"text",placeholder:"Teammate ".concat(e).concat(i?"":" (optional)"),required:i,defaultValue:null!==(t=null===(r=a[e-1])||void 0===r?void 0:r.name)&&void 0!==t?t:"",className:"jsx-3879706637"}),c&&g("p",{className:"jsx-3879706637 formerror"},c)),g("div",{className:"jsx-3879706637 col-50 collapse col-right"},g("input",{name:"email".concat(e),type:"email",placeholder:"Team email ".concat(e),required:i,defaultValue:null!==(o=null===(s=a[e-1])||void 0===s?void 0:s.email)&&void 0!==o?o:"",className:"jsx-3879706637"}),u&&g("p",{className:"jsx-3879706637 formerror"},u)))})),g(i.a,{id:"3879706637"},[".col-left.jsx-3879706637{padding-right:1em;}",".col-right.jsx-3879706637{padding-left:1em;}","input.jsx-3879706637{margin-top:1em;font-size:16px;padding:4px 16px;width:100%;}","@media (max-width:550px){.collapse.jsx-3879706637{margin-top:0;padding-right:0;padding-left:0;}input.jsx-3879706637{margin-top:1em;}}"]))},N=u.a.createElement,y=function(e){var t=e.teamName,n=e.profilePic,s=e.setProfilePic,l=e.setProfilePicApproved,m=Object(d.useRouter)(),f=Object(c.useState)({}),x=f[0],h=f[1],j=Object(c.useState)(200),g=j[0],b=j[1],w=Object(c.useState)(!1),y=w[0],O=w[1],k=Object(c.useState)(!1),_=k[0],P=k[1],S=Object(c.useState)(!1),F=(S[0],S[1],Object(c.useRef)(null)),T=function(){var e=Object(o.a)(r.a.mark((function e(a){var n,o,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),O(!0),h({}),o=new FormData(a.target),!(null===(n=F.current)||void 0===n?void 0:n.files)){e.next=13;break}if(i=F.current.files[0],20971520,!(i.size>20971520)){e.next=13;break}return P(!0),b(400),"The uploaded file was too large. The maximum file size is 20 MB.",h({profile_pic:"The uploaded file was too large. The maximum file size is 20 MB."}),e.abrupt("return");case 13:return e.next=15,Object(p.a)(m,"/upload_profile_pic/".concat(encodeURIComponent(t)),{method:"POST",body:o});case 15:null!=(c=e.sent)&&(b(c.statusCode),P(!0)),(null===c||void 0===c?void 0:c.form_errors)&&h(c.form_errors),200===c.statusCode&&c.profile_pic&&(s(c.profile_pic),l(!1)),O(!1);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,Object(p.a)(m,"/delete_profile_pic/".concat(encodeURIComponent(t)),{method:"POST"});case 3:null!=(n=e.sent)&&(b(n.statusCode),200===n.statusCode&&(h({}),s(""),l(!1),O(!1),P(!1)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return N(u.a.Fragment,null,N("p",{className:"jsx-2805392581 small"},"(Optional) Please upload a public team photo (e.g. photo, pictures, or a meme) to our Guest Book."),N("p",{className:"jsx-2805392581 small"},N("strong",{className:"jsx-2805392581"},"Since this photo will be viewable by all guests, it will need to go through a short approval process.")," ","Be patient if it isn\u2019t immediately public."),N("p",{className:"jsx-2805392581 small"},"Photos should be of file type JPEG or PNG, and can be at most 1280 pixels x 720 pixels."),N("form",{encType:"multipart/form-data",method:"post",onSubmit:T,className:"jsx-2805392581"},N("input",{ref:F,name:"profile_pic",type:"file",disabled:y,required:!0,className:"jsx-2805392581"}),N("input",{type:"submit",disabled:y,value:y?"Uploading...":"Upload",className:"jsx-2805392581"})),n&&N(u.a.Fragment,null,"Delete team photo?"," ",N("input",{type:"submit",onClick:E,value:"Delete",className:"jsx-2805392581"})),_&&200!==g&&N(u.a.Fragment,null,N("p",{className:"jsx-2805392581 formerror"},"ERROR: ",x.profile_pic," If you did not expect to see this, please contact us at ",N(v.a,null),"."),415===g&&N("img",{src:a("jWZv"),className:"jsx-2805392581"})),N(i.a,{id:"2805392581"},["input.jsx-2805392581{font-size:16px;padding:4px 8px;}",".small.jsx-2805392581{font-size:14px;}"]))},O=function(e){var t=e.teamInfo,a=Object(d.useRouter)(),n=Object(c.useState)({}),s=n[0],l=n[1],m=Object(c.useState)(!1),f=m[0],v=m[1],x=Object(c.useState)(!1),h=x[0],j=x[1],g=Object(c.useState)(!1),b=g[0],y=g[1],O=function(){var e=Object(o.a)(r.a.mark((function e(n){var o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o=new FormData(n.target),j(!0),y(!1),l({}),v(!1),e.next=8,Object(p.a)(a,"/team_info/".concat(encodeURIComponent(t.name),"/edit"),{method:"POST",body:o});case 8:(null===(s=e.sent)||void 0===s?void 0:s.form_errors)?l(s.form_errors):void 0===s||200!==s.statusCode?v(!0):y(!0),j(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return N(u.a.Fragment,null,N("form",{onSubmit:O,className:"jsx-188114160"},b&&N("p",{className:"jsx-188114160"},"Teammates updated!"),f&&N("p",{className:"jsx-188114160 error"},"Something unexpected happened when updating team members. Please contact us and we will fix it!"),N(w,{members:t.members,errors:s}),N("input",{type:"submit",disabled:h,value:h?"Updating teammates...":"Update teammates",className:"jsx-188114160"})),N(i.a,{id:"188114160"},["input.jsx-188114160{font-size:16px;margin-top:2em;padding:4px 8px;}"]))},k=function(e){var t=e.submissions;return t?0===t.length?N(u.a.Fragment,null):N(u.a.Fragment,null,N(h.a,null,N("thead",{className:"jsx-1908412485"},N("tr",{className:"jsx-1908412485"},N("th",{className:"jsx-1908412485"},"Puzzle"),N("th",{className:"jsx-1908412485"},"Wrong guesses"),N("th",{className:"jsx-1908412485"},"Unlock time"),N("th",{className:"jsx-1908412485"},"Time to solve"),N("th",{className:"jsx-1908412485"},"Solve time"))),N("tbody",{className:"jsx-1908412485"},t.map((function(e,t){var a=N("a",{href:"badge-collection"===e.slug?"/games":e.is_game?"/solutions/".concat(e.slug):"/puzzles/".concat(e.slug),className:"jsx-1908412485"},e.name);return N("tr",{className:"jsx-1908412485"},N("td",{className:"jsx-1908412485"},e.is_meta?N("strong",{className:"jsx-1908412485"},a):a),N("td",{className:"jsx-1908412485"},e.guesses),N("td",{className:"jsx-1908412485"},Object(f.d)(e.unlock_time,{year:null,weekday:null})),N("td",{className:"jsx-1908412485"},Object(f.b)(e.open_duration,1,{showHours:!0,showDays:!1,verbose:!0,warningAt:0})),N("td",{className:"jsx-1908412485"},Object(f.d)(e.solve_time,{year:null,weekday:null})))})))),N(i.a,{id:"1908412485"},["th.jsx-1908412485{font-size:24px;padding-bottom:4px;padding-right:4px;word-wrap:anywhere;}","td.jsx-1908412485{padding-top:4px;padding-bottom:4px;padding-right:4px;word-wrap:anywhere;}","th.jsx-1908412485,tr.jsx-1908412485{border-bottom:1px dashed black;}"])):N(u.a.Fragment,null)},_=!0;t.default=function(e){var t=e.teamInfo,a=e.submissions,n=e.canModify;if(!t)return N(u.a.Fragment,null,N(j.a,{title:"Team not found"}),N(x.a,null,N("p",null,"That team could not be found.")));var r=Object(c.useState)(t.profile_pic||""),o=r[0],s=r[1],l=Object(c.useState)(t.profile_pic_approved),d=l[0],p=l[1];return N(u.a.Fragment,null,o&&d&&N(m.a,null,N("meta",{key:"og-image",property:"og:image",content:"https://2020.teammatehunt.com".concat(o),className:"jsx-1389491598"})),N(j.a,{title:"".concat(t.name)}),N("div",{className:"jsx-1389491598 center"},N(x.a,null,o&&n&&!d&&N("p",{className:"jsx-1389491598"},"Your team photo is under review. If approved, it will look like this."),o&&n&&d&&N("p",{className:"jsx-1389491598"},"Your team photo is approved!"),o&&(n||d)&&N("img",{src:o,className:"jsx-1389491598"}),n&&N(y,{teamName:t.name,profilePic:o,setProfilePic:s,setProfilePicApproved:p})),N(x.a,{heading:"teammates"},n?N(O,{teamInfo:t}):N("ul",{className:"jsx-1389491598"},t.members.map((function(e){return N("li",{key:e.name,className:"jsx-1389491598"},e.name)}))))),a&&N(x.a,null,N(k,{submissions:a})),N(i.a,{id:"1389491598"},["img.jsx-1389491598{max-height:40vh;}","ul.jsx-1389491598{margin:0 auto;max-width:500px;padding:0;}","li.jsx-1389491598{list-style:none;}"]))}}},[["4xUU",1,0,2,3,4]]]);