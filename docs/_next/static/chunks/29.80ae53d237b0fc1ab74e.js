(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"6tc4":function(e,t,n){"use strict";var r=n("lSNA"),a=n.n(r),o=n("5D9J"),i=n("OJSm"),c=n("BMxC"),l=n("QdyT");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(o.a)(c.a)((function(e){var t,n=e.type,r=void 0===n?"checkbox":n,o=e._hover,c=e._invalid,d=e._disabled,s=e._focus,b=e._checked,f=e._child,p=void 0===f?{opacity:0}:f,h=e._checkedAndChild,m=void 0===h?{opacity:1}:h,v=e._checkedAndDisabled,O=e._checkedAndFocus,y=e._checkedAndHover,j="input[type="+r+"]:checked:disabled + &, input[type="+r+"][aria-checked=mixed]:disabled + &",g="input[type="+r+"]:checked:hover:not(:disabled) + &, input[type="+r+"][aria-checked=mixed]:hover:not(:disabled) + &",k="input[type="+r+"]:checked:focus + &, input[type="+r+"][aria-checked=mixed]:focus + &",w="input[type="+r+"]:disabled + &",x="input[type="+r+"]:focus + &",D="input[type="+r+"]:hover:not(:disabled):not(:checked) + &",C="input[type="+r+"]:checked + &, input[type="+r+"][aria-checked=mixed] + &",P="input[type="+r+"][aria-invalid=true] + &";return Object(i.a)(((t={})[x]=Object(l.b)(s),t[D]=Object(l.b)(o),t[w]=Object(l.b)(d),t[P]=Object(l.b)(c),t[j]=Object(l.b)(v),t[k]=Object(l.b)(O),t[g]=Object(l.b)(y),t["& > *"]=Object(l.b)(p),t[C]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(l.b)(b),{"& > *":Object(l.b)(m)}),t))}));d.displayName="ControlBox",d.defaultProps={display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:"0","aria-hidden":"true"},t.a=d},KLAn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return oe}));var r=n("rePB"),a=n("ODXe"),o=n("q1tI"),i=n.n(o),c=n("nOHt"),l=n("Z6YE"),u=n("QmWs"),d=n("mf32"),s=n("IDkF"),b=n("sK1y"),f=n("Yn+B"),p=n("pVnL"),h=n.n(p),m=n("8OQS"),v=n.n(m),O=n("qKvR"),y=n("BMxC"),j=n("6tc4"),g=n("+Z5E"),k={sm:{width:"1.375rem",height:"0.75rem"},md:{width:"1.875rem",height:"1rem"},lg:{width:"2.875rem",height:"1.5rem"}},w=Object(o.forwardRef)((function(e,t){var n=e.id,r=e.name,a=e.value,o=e["aria-label"],i=e["aria-labelledby"],c=e.color,l=e.defaultIsChecked,u=e.isChecked,s=e.size,b=e.isDisabled,f=e.isInvalid,p=e.onChange,m=e.onBlur,w=e.onFocus,x=(e.children,v()(e,["id","name","value","aria-label","aria-labelledby","color","defaultIsChecked","isChecked","size","isDisabled","isInvalid","onChange","onBlur","onFocus","children"])),D=Object(d.c)().colorMode,C=k[s]&&k[s].width,P=k[s]&&k[s].height,S={rounded:"full",justifyContent:"flex-start",width:C,height:P,bg:"dark"===D?"whiteAlpha.400":"gray.300",boxSizing:"content-box",p:"2px",_checked:{bg:c+".500"},_child:{transform:"translateX(0)"},_checkedAndChild:{transform:"translateX(calc("+C+" - "+P+"))"},_focus:{boxShadow:"outline"},_hover:{cursor:"pointer"},_checkedAndHover:{cursor:"pointer"},_disabled:{opacity:.4,cursor:"not-allowed"}};return Object(O.d)(y.a,h()({as:"label",display:"inline-block",verticalAlign:"middle"},x),Object(O.d)(g.a,{as:"input",type:"checkbox","aria-label":o,"aria-labelledby":i,id:n,ref:t,name:r,value:a,"aria-invalid":f,defaultChecked:l,onChange:p,onBlur:m,onFocus:w,checked:u,disabled:b}),Object(O.d)(j.a,S,Object(O.d)(y.a,{bg:"white",transition:"transform 250ms",rounded:"full",size:P})))}));w.displayName="Switch",w.defaultProps={color:"blue",size:"md"};var x=w,D=n("lSNA"),C=n.n(D),P=n("CjxU");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={position:"absolute",top:"50%",transform:"translateY(-50%)"},A=function(e){var t=e.thumbSize,n=e.trackPercent;e.theme;return _({},E,{zIndex:1,size:t,rounded:"full",bg:"#fff",boxShadow:"sm",left:"calc("+n+"% - "+t+" / 2)",border:"1px",borderColor:"transparent",transition:"transform 0.2s",_focus:{boxShadow:"outline"},_disabled:{backgroundColor:"gray.300"},_active:{transform:"translateY(-50%) scale(1.15)"}})},R=function(e){var t=e.trackHeight,n=e.trackPercent,r=e.color,a=e.colorMode;return _({},E,{height:t,bg:"light"===a?r+".500":r+".200",width:n+"%",rounded:"sm"})},T={light:{bg:"gray.200",_disabled:{bg:"gray.300"}},dark:{bg:"whiteAlpha.200",_disabled:{bg:"whiteAlpha.300"}}},z=function(e){var t=e.trackHeight,n=(e.theme,e.colorMode);return _({height:t,borderRadius:"sm",width:"100%"},E,{},T[n])},I={width:"full",display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"}},L={lg:{thumb:"16px",trackHeight:"4px"},md:{thumb:"14px",trackHeight:"4px"},sm:{thumb:"10px",trackHeight:"2px"}},M=function(e){var t=Object(P.b)(),n=Object(d.c)().colorMode,r=e.trackPercent,a=e.size,o=e.color,i=L[a],c={trackHeight:i.trackHeight,thumbSize:i.thumb,theme:t,trackPercent:r,color:o,colorMode:n};return{rootStyle:I,trackStyle:z(c),filledTrackStyle:R(c),thumbStyle:A(c)}},B=n("+Cyc"),H=n("D7Da");function N(e,t){return function(e,t){var n=t.toString().split(".")[1],r=n?n.length:0;return Number(e.toFixed(r))}(Math.round(e/t)*t,t)}function F(e,t,n){return e>n?n:e<t?t:e}var K=Object(o.forwardRef)((function(e,t){var n=J(),r=n.thumbRef,a=n.isDisabled,o=n.onFocus,i=n.onThumbKeyDown,c=n.min,l=n.max,u=n.valueText,d=n.orientation,s=n.trackPercent,b=n.size,f=n.color,p=n.value,m=n.ariaLabelledBy,v=M({trackPercent:s,orientation:d,size:b,color:f}).thumbStyle,y=Object(H.f)(r,t);return Object(O.d)(B.a,h()({"data-slider-thumb":"",d:"flex",alignItems:"center",outline:"none",justifyContent:"center",onFocus:o,ref:y,role:"slider",tabIndex:a?void 0:0,"aria-disabled":a,"aria-valuemin":c,"aria-valuetext":u,"aria-orientation":d,"aria-valuenow":p,"aria-valuemax":l,"aria-labelledby":m,onKeyDown:i},v,e))}));K.displayName="SliderThumb";var U=function(e){var t=J(),n=t.trackRef,r=t.isDisabled,a=v()(t,["trackRef","isDisabled"]),o=M(a).trackStyle;return Object(O.d)(y.a,h()({"data-slider-track":"","aria-disabled":r,ref:n},o,e))},V=function(e){var t=J(),n=t.isDisabled,r=v()(t,["isDisabled"]),a=M(r).filledTrackStyle;return Object(O.d)(B.a,h()({"aria-disabled":n,"data-slider-filled-track":""},a,e))},q=Object(o.createContext)(),J=function(){return Object(o.useContext)(q)},Q=Object(o.forwardRef)((function(e,t){var n=e.value,r=e.defaultValue,a=e.onChange,i=e.onKeyDown,c=e.onFocus,l=e.onBlur,u=e.onMouseDown,d=e.isDisabled,s=e.max,b=void 0===s?100:s,f=e.min,p=void 0===f?0:f,m=e.step,j=void 0===m?1:m,g=e["aria-labelledby"],k=(e["aria-label"],e["aria-valuetext"]),w=e.orientation,x=void 0===w?"horizontal":w,D=e.getAriaValueText,C=e.size,P=void 0===C?"md":C,S=e.color,_=void 0===S?"blue":S,E=e.name,A=e.id,R=e.children,T=v()(e,["value","defaultValue","onChange","onKeyDown","onFocus","onBlur","onMouseDown","isDisabled","max","min","step","aria-labelledby","aria-label","aria-valuetext","orientation","getAriaValueText","size","color","name","id","children"]),z=Object(o.useRef)(null!=n).current,I=Object(o.useState)(r||0),L=I[0],B=I[1],H=F(z?n:L,p,b),K=function(e,t,n){return 100*(e-t)/(n-t)}(H,p,b),U=M({trackPercent:K,orientation:x,size:P,color:_}).rootStyle,V=Object(o.useRef)(),J=Object(o.useRef)(),Q=function(e){if(V.current){var t=V.current.getBoundingClientRect(),n=t.left,r=t.width,a=function(e,t,n){return(n-t)*e+t}(((e.touches?e.touches[0]:e).clientX-n)/r,p,b);return j&&(a=N(a,j)),a=F(a,p,b)}},X=Object(o.useCallback)((function(e){z||B(e),a&&a(e)}),[z,a]),Y=function e(){document.body.removeEventListener("mousemove",Z),document.body.removeEventListener("touchmove",Z),document.body.removeEventListener("mouseup",e),document.body.removeEventListener("touchend",e)},Z=function(e){var t=Q(e);X(t)},G=function(e){if(!d){u&&u(e),e.preventDefault();var t=Q(e);t!==H&&X(t),document.body.addEventListener("mousemove",Z),document.body.addEventListener("touchmove",Z),document.body.addEventListener("mouseup",Y),document.body.addEventListener("touchend",Y),J.current&&J.current.focus()}},W=D?D(H):k,$={trackRef:V,thumbRef:J,onThumbKeyDown:function(e){var t,n=!1,r=(b-p)/10;switch(e.key){case"ArrowLeft":case"ArrowDown":t=H-j,n=!0;break;case"ArrowRight":case"ArrowUp":t=H+j,n=!0;break;case"PageDown":t=H-r,n=!0;break;case"PageUp":t=H+r,n=!0;break;case"Home":t=p,n=!0;break;case"End":t=b,n=!0;break;default:return}n&&(e.preventDefault(),e.stopPropagation()),j&&(t=N(t,j)),t=F(t,p,b),X(t),i&&i(e)},onFocus:c,trackPercent:K,ariaLabelledBy:g,orientation:x,isDisabled:d,size:P,color:_,min:p,max:b,valueText:W,value:H};return Object(O.d)(q.Provider,{value:$},Object(O.d)(y.a,h()({role:"presentation",tabIndex:"-1",onMouseDown:G,onTouchStart:G,onMouseLeave:Y,onTouchEnd:Y,onBlur:function(e){Y(),l&&l(e)},py:3,"aria-disabled":d,ref:t,css:{touchAction:"none"}},U,T),R,Object(O.d)("input",{type:"hidden",value:H,name:E,id:A})))}));Q.displayName="Slider";var X=Q,Y=n("eJLp"),Z=n("pboS"),G=n("+QRC"),W=n.n(G),$=n("N39q"),ee=n("21eR"),te=n("zmG3"),ne=i.a.createElement;function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e){var t=e.isOpen,n=e.onClose,i=Object(l.b)().chainId,p=Object(d.c)(),h=p.colorMode,m=p.toggleColorMode,v=Object(c.useRouter)().pathname;Object(ee.a)("d",m);var O=Object(te.b)(),y=Object(a.a)(O,2),j=y[0],g=y[1],k=Object(te.c)(),w=Object(a.a)(k,2),D=w[0],C=w[1],P=Object(te.h)(),S=Object(a.a)(P,2),_=S[0],E=S[1],A=Object(te.d)(),R=Object(a.a)(A,1)[0],T=Object(te.f)(),z=Object(a.a)(T,1)[0],I=null;if("number"===typeof i&&(R||z)&&("/buy"===v||"/sell"===v)){var L=ae(Object(r.a)({},$.l.CHAIN,i),"/buy"===v?ae(ae({},R?Object(r.a)({},$.l.OUTPUT,R.address):{}),z?Object(r.a)({},$.l.INPUT,z.address):{}):ae(ae({},R?Object(r.a)({},$.l.INPUT,R.address):{}),z?Object(r.a)({},$.l.OUTPUT,z.address):{}));I=Object(u.resolve)("https://emblem.finance","".concat(v,"?").concat(Object.entries(L).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r)})).join("&")))}var M=Object(o.useState)(!1),B=M[0],H=M[1];return Object(o.useEffect)((function(){if(B){var e=setTimeout((function(){H(!1)}),750);return function(){clearTimeout(e)}}}),[B]),ne(s.a,{isOpen:t,onClose:n,isCentered:!0},ne(s.g,null),ne(s.d,{color:$.c[h]},ne(s.f,null,ne(b.a,null,"Settings")),ne(s.c,null),ne(s.b,null,ne(f.a,{direction:"column"},ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Dark Mode"),ne(x,{isChecked:"dark"===h,onChange:m})),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Approve Max"),ne(x,{isChecked:j,onChange:g})),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Deadline"),ne(f.a,{direction:"column",spacing:0,alignItems:"flex-end",w:"50%",flexShrink:0},ne(X,{min:60,max:3600,step:60,value:D,onChange:C},ne(U,null),ne(V,null),ne(K,null)),ne(f.a,{direction:"row",minHeight:"1.5rem"},D!==$.e&&ne(Y.a,{size:"xs",onClick:function(){C($.e)}},"Reset"),ne(b.a,null,D/60," ",60===D?"minute":"minutes")))),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Slippage Tolerance"),ne(f.a,{direction:"column",spacing:0,alignItems:"flex-end",w:"50%",flexShrink:0},ne(X,{min:0,max:400,step:10,value:_,onChange:E},ne(U,null),ne(V,null),ne(K,null)),ne(f.a,{direction:"row",minHeight:"1.5rem"},_!==$.f&&ne(Y.a,{size:"xs",onClick:function(){E($.f)}},"Reset"),ne(b.a,null,(_/100).toFixed(0===_?0:1),"%")))))),ne(s.e,{justifyContent:"space-between"},"string"===typeof I&&ne(Y.a,{variant:"link",isDisabled:B,color:"blue.500",width:"min-content",onClick:function(){try{window.navigator.share({title:"Emblem Vault",url:I}).catch((function(){}))}catch(t){e=I,W()(e),H(!0)}var e}},B?"Copied":"Share Permalink"),ne(Z.a,{href:"https://github.com/NoahZinsmeister/hypertext",target:"_blank",rel:"noopener noreferrer",color:"blue.500"},"Based on Hypertext"),ne(Z.a,{href:"https://github.com/EmblemCompany/emblem-vault-site/tree/".concat("master"),target:"_blank",rel:"noopener noreferrer",color:"blue.500"},null==="master"?void 0:"master".slice(0,7)))))}},pboS:function(e,t,n){"use strict";var r=n("pVnL"),a=n.n(r),o=n("8OQS"),i=n.n(o),c=n("qKvR"),l=n("+Cyc"),u=n("q1tI"),d={transition:"all 0.15s ease-out",cursor:"pointer",textDecoration:"none",outline:"none",_focus:{boxShadow:"outline"},_disabled:{opacity:"0.4",cursor:"not-allowed",textDecoration:"none"}},s=Object(u.forwardRef)((function(e,t){var n=e.isDisabled,r=e.isExternal,o=e.onClick,u=i()(e,["isDisabled","isExternal","onClick"]),s=r?{target:"_blank",rel:"noopener noreferrer"}:null;return Object(c.d)(l.a,a()({as:"a",ref:t,tabIndex:n?-1:void 0,"aria-disabled":n,onClick:n?function(e){return e.preventDefault()}:o,_hover:{textDecoration:"underline"}},s,d,u))}));s.displayName="Link",t.a=s}}]);