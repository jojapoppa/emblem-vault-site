_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"2sqc":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n("q1tI"),o=n.n(r),a=n("wx14"),c=n("o0o1"),i=n.n(c),u=n("HaE+"),l=n("Weur"),s=n("BMxC"),f=n("sK1y"),d=n("Yn+B"),p=n("bQFp"),b=n("pboS"),h=n("Y1ui"),v=n.n(h),O=n("Ute3"),y=n("nOHt"),m=n("Z6YE"),j=n("iBPG"),g=n("N39q"),w=o.a.createElement;function E(){var t=Object(y.useRouter)().query,e=Object(m.b)(),n=e.account,o=e.chainId,c=Object(r.useState)([]),h=c[0],E=c[1],S=Object(r.useState)({loaded:!1}),_=S[0],x=S[1],k=Object(r.useState)(!1),I=k[0],R=k[1],q=Object(r.useState)(t.address),C=q[0],N=(q[1],function(){var t=Object(u.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(137!=o&&80001!=o){t.next=2;break}return t.abrupt("return");case 2:return P(),t.prev=3,t.next=6,fetch(g.h+"/opensea/assets",{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata",chainId:o.toString()}});case 6:return e=t.sent,t.next=9,e.json();case 9:n=t.sent,x({loaded:!0}),E(n),W(n),R(!1),t.next=18;break;case 16:t.prev=16,t.t0=t.catch(3);case 18:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(){return t.apply(this,arguments)}}()),P=function(){var t=JSON.parse(localStorage.getItem((C||n)+"_"+o+"_allvaults"));t&&(x({loaded:!0}),E(t),R(!0))},W=function(t){localStorage.setItem((C||n)+"_"+o+"_allvaults",JSON.stringify(t))},D=Object(r.useState)(""),L=D[0],T=D[1];Object(r.useEffect)((function(){n&&L!=n&&(T(n),x({loaded:!1}),N())}),[n,L]);var U=Object(r.useState)(o),J=U[0],B=U[1];return Object(r.useEffect)((function(){o&&J!=o&&(B(o),x({loaded:!1}),N())}),[o,J]),Object(r.useEffect)((function(){n&&o?N():x({loaded:!0})}),[]),w(v.a,{loaded:_.loaded},I?w(O.a,null):"",w(l.a,{w:"100%",justify:"center",flexWrap:"wrap",mt:10},h.length?h.map((function(t,e){var n=location.pathname.split("/");n.pop();var r=location.origin+n.join("/")+"/nft?id="+t.token_id,o={flex:"1",minW:"300px",maxW:"300px",borderWidth:"1px",color:"white",mx:"6",mb:"6",rounded:"lg",overflow:"hidden",borderColor:"claimed"==t.status?"green !important":"",cursor:"pointer"};return w(s.a,Object(a.a)({key:e},o,{onClick:function(){location.href=r}}),w(f.a,{fontWeight:"semibold",textAlign:"center",mt:2},t.name),w(d.a,{align:"center"},w(p.a,{src:Object(j.k)(t.image_url)?t.image_url:"https://circuitsofvalue.com/public/coval-logo.png",p:2,width:"250px"})),w(s.a,{d:"flex",alignItems:"baseline"},w(s.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"sm",ml:"2"})),w(d.a,{align:"center",mt:3},"claimed"==t.status?w(f.a,{color:"green.500"},"CLAIMED"):null))})):w(f.a,null,"YOU DON'T SEEM TO HAVE ANY VAULTS."," ",w(b.a,{color:"#638cd8",href:"../create"},"CREATE ONE HERE!"))))}var S=n("4WaP"),_=o.a.createElement;function x(){return _(r.Suspense,{fallback:_("h1",null,"Loading vaults...")},_(S.a,{fallback:_("h2",null,"Oops! Something went wrong.")},_(E,null)))}},"4WaP":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("1OyB"),o=n("vuIU"),a=n("JX7q"),c=n("Ji7U"),i=n("md7G"),u=n("foSv"),l=n("rePB"),s=n("q1tI");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(u.a)(t);if(e){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var d=function(t){Object(c.a)(n,t);var e=f(n);function n(){var t;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return t=e.call.apply(e,[this].concat(c)),Object(l.a)(Object(a.a)(t),"state",{hasError:!1,error:null}),t}return Object(o.a)(n,[{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0,error:t}}}]),n}(s.Component)},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},"U28/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vaults",function(){return n("2sqc")}])},Ute3:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Weur"),c=n("sK1y"),i=n("yI6m"),u=o.a.createElement;e.a=function(){return u(a.a,{pb:2,justify:"center"},u(c.a,{pr:2},"Refreshing "),u(i.a,null))}},bQFp:function(t,e,n){"use strict";var r=n("pVnL"),o=n.n(r),a=n("8OQS"),c=n.n(a),i=n("qKvR"),u=n("q1tI"),l=n("BMxC");var s=Object(u.forwardRef)((function(t,e){var n=t.htmlWidth,r=t.htmlHeight,a=t.alt,u=c()(t,["htmlWidth","htmlHeight","alt"]);return Object(i.d)("img",o()({width:n,height:r,ref:e,alt:a},u))})),f=Object(u.forwardRef)((function(t,e){var n=t.src,r=t.fallbackSrc,a=t.onError,f=t.onLoad,d=t.ignoreFallback,p=c()(t,["src","fallbackSrc","onError","onLoad","ignoreFallback"]),b=function(t){var e=t.src,n=t.onLoad,r=t.onError,o=t.enabled,a=void 0===o||o,c=Object(u.useRef)(!0),i=Object(u.useState)(!1),l=i[0],s=i[1];return Object(u.useEffect)((function(){if(e&&a){var t=new window.Image;t.src=e,t.onload=function(t){c.current&&(s(!0),n&&n(t))},t.onerror=function(t){c.current&&(s(!1),r&&r(t))}}}),[e,n,r,a]),Object(u.useEffect)((function(){return function(){c.current=!1}}),[]),l}({src:n,onLoad:f,onError:a,enabled:!Boolean(d)}),h=d?{src:n,onLoad:f,onError:a}:{src:b?n:r};return Object(i.d)(l.a,o()({as:s,ref:e},h,p))}));f.displayName="Image",e.a=f},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return a}));var o=n("JX7q");function a(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},pboS:function(t,e,n){"use strict";var r=n("pVnL"),o=n.n(r),a=n("8OQS"),c=n.n(a),i=n("qKvR"),u=n("+Cyc"),l=n("q1tI"),s={transition:"all 0.15s ease-out",cursor:"pointer",textDecoration:"none",outline:"none",_focus:{boxShadow:"outline"},_disabled:{opacity:"0.4",cursor:"not-allowed",textDecoration:"none"}},f=Object(l.forwardRef)((function(t,e){var n=t.isDisabled,r=t.isExternal,a=t.onClick,l=c()(t,["isDisabled","isExternal","onClick"]),f=r?{target:"_blank",rel:"noopener noreferrer"}:null;return Object(i.d)(u.a,o()({as:"a",ref:e,tabIndex:n?-1:void 0,"aria-disabled":n,onClick:n?function(t){return t.preventDefault()}:a,_hover:{textDecoration:"underline"}},f,s,l))}));f.displayName="Link",e.a=f},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))}},[["U28/",2,1,0,3,4,8]]]);