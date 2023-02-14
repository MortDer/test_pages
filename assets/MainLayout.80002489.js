import{v as kt,c as We,g as Lt,a as xt,u as St,b as Tt,Q as Et,d as _t}from"./QBtn.67d704d1.js";import{c as P,h as I,a as ot,b as Bt,d as Ae,e as zt}from"./render.7e80683e.js";import{c as v,h as k,r as S,i as lt,o as Y,a as N,n as ze,d as j,g as D,l as O,e as M,w as C,f as $e,j as se,H as Fe,k as V,s as Pe,m as $t,p as Pt,P as Vt,q as Ot,t as oe,u as be,v as Ne,x as ye,y as Se,z as ge,A as Dt,B as nt,C as Ht,D as le,E as Mt,F as Qt,G as it,I as re,J as Te,K as z,L as _,M as Rt,N as ue,O as Ee,Q as Wt,R as At,S as Ft,T as Nt,U as It,V as Xt,W as Ut}from"./index.00bafdf7.js";import{u as Ve,a as Oe}from"./use-dark.c159bb54.js";var Yt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:l.value},I(o.default))}}),jt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:l.value,role:"toolbar"},I(o.default))}});function Kt(){const e=S(!lt.value);return e.value===!1&&Y(()=>{e.value=!0}),e}const at=typeof ResizeObserver!="undefined",Ie=at===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var _e=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let l=null,i,t={width:-1,height:-1};function n(d){d===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(l!==null&&(clearTimeout(l),l=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=D();if(at===!0){let d;const c=a=>{i=f.$el.parentNode,i?(d=new ResizeObserver(n),d.observe(i),s()):a!==!0&&j(()=>{c(!0)})};return Y(()=>{c()}),N(()=>{l!==null&&clearTimeout(l),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),ze}else{let a=function(){l!==null&&(clearTimeout(l),l=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",n,O.passive),c=void 0)},w=function(){a(),i&&i.contentDocument&&(c=i.contentDocument.defaultView,c.addEventListener("resize",n,O.passive),s())};const d=Kt();let c;return Y(()=>{j(()=>{i=f.$el,i&&w()})}),N(a),f.trigger=n,()=>{if(d.value===!0)return k("object",{style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:w})}}}}),Gt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=D(),t=$e(se,M);if(t===M)return console.error("QHeader needs to be child of QLayout"),M;const n=S(parseInt(e.heightHint,10)),s=S(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?n.value:0;const u=n.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function T({height:u}){h(n,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),l("focusin",u)}C(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),C(d,u=>{m("offset",u)}),C(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),C(s,u=>{t.animate(),l("reveal",u)}),C(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",d.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=ot(o.default,[]);return e.elevated===!0&&u.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(k(_e,{debounce:0,onResize:T})),k("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),Be=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const l=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>k("div",{style:t.value,class:i.value},I(o.default))}}),Jt=P({name:"QList",props:{...Ve,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const l=D(),i=Oe(e,l.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:t.value},I(o.default))}});function Zt(e,o,l){let i;function t(){i!==void 0&&(Fe.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>l.value===!0,handler:o},Fe.add(i)}}}const eo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},to=["beforeShow","show","beforeHide","hide"];function oo({showing:e,canShow:o,hideOnRouteChange:l,handleShow:i,handleHide:t,processOnMount:n}){const s=D(),{props:f,emit:d,proxy:c}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=u,j(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),i!==void 0?i(u):d("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=u,j(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:T)(a)}C(()=>f.modelValue,L),l!==void 0&&kt(s)===!0&&C(()=>c.$route.fullPath,()=>{l.value===!0&&e.value===!0&&h()}),n===!0&&Y(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(c,g),g}const lo=[null,document,document.body,document.scrollingElement,document.documentElement];function no(e,o){let l=Lt(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return lo.includes(l)?window:l}function rt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ut(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function we(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return l===i&&(i=o.clientWidth),o.remove(),ne=l-i,ne}function io(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,qe,Ce,Z,ke=!1,Xe,Ue,Ye,F=null;function ao(e){ro(e)&&Pe(e)}function ro(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=$t(e),l=e.shiftKey&&!e.deltaX,i=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||i?e.deltaY:e.deltaX;for(let n=0;n<o.length;n++){const s=o[n];if(io(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function je(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){ke!==!0&&(ke=!0,requestAnimationFrame(()=>{ke=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:i}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=l-o,document.scrollingElement.scrollTop=i),i>Z&&(document.scrollingElement.scrollTop-=Math.ceil((i-Z)/8))}))}function Ke(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);qe=ut(window),Ce=rt(window),Xe=o.style.left,Ue=o.style.top,Ye=window.location.href,o.style.left=`-${qe}px`,o.style.top=`-${Ce}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,O.passiveCapture),window.visualViewport.addEventListener("scroll",ie,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",je,O.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",ao,O.notPassive),e==="remove"&&(V.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",ie,O.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,O.passiveCapture)):window.removeEventListener("scroll",je,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Xe,o.style.top=Ue,window.location.href===Ye&&window.scrollTo(qe,Ce),Z=void 0)}function uo(e){let o="add";if(e===!0){if(J++,F!==null){clearTimeout(F),F=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{Ke(o),F=null},100);return}}Ke(o)}function so(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,uo(o))}}}function co(){let e=null;const o=D();function l(){e!==null&&(clearTimeout(e),e=null)}return Pt(l),N(l),{removeTimeout:l,registerTimeout(i,t){l(),xt(o)===!1&&(e=setTimeout(i,t))}}}const De={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},fo=Object.keys(De);De.all=!0;function Ge(e){const o={};for(const l of fo)e[l]===!0&&(o[l]=!0);return Object.keys(o).length===0?De:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function vo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Vt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,o,l){const i=Se(e);let t,n=i.left-o.event.x,s=i.top-o.event.y,f=Math.abs(n),d=Math.abs(s);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=n<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.left===!0&&n<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&n>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=n,f=0,n=0):(i.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:n,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let mo=0;var xe=Bt({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&V.has.touch!==!0)return;function i(n,s){l.mouse===!0&&s===!0?Pe(n):(l.stop===!0&&ye(n),l.prevent===!0&&Ne(n))}const t={uid:"qvtp_"+mo++,handler:o,modifiers:l,direction:Ge(l),noop:ze,mouseStart(n){Je(n,t)&&Ot(n)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Je(n,t)){const s=n.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(V.is.firefox===!0&&be(e,!0),t.lastEvt=n,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Ne(c),n.cancelBubble===!0&&ye(c),Object.assign(c,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:c}}ye(n)}const{left:f,top:d}=Se(n);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(n){if(t.event===void 0)return;const s=Se(n),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=n;const c=t.event.mouse===!0,a=()=>{i(n,c);let m;l.preserveCursor!==!0&&l.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),vo(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(n,t.event.mouse);const{payload:m,synthetic:h}=Le(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(n);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(ge(t,"temp"),V.is.firefox===!0&&be(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=Le(n===void 0?t.lastEvt:n,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const n=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}V.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Ge(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ge(o,"main"),ge(o,"temp"),V.is.firefox===!0&&be(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ae(e,o,l){return l<=o?o:Math.min(l,Math.max(o,e))}const Ze=150;var ho=P({name:"QDrawer",inheritAttrs:!1,props:{...eo,...Ve,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...to,"onLayout","miniState"],setup(e,{slots:o,emit:l,attrs:i}){const t=D(),{proxy:{$q:n}}=t,s=Oe(e,n),{preventBodyScroll:f}=so(),{registerTimeout:d,removeTimeout:c}=co(),a=$e(se,M);if(a===M)return console.error("QDrawer needs to be child of QLayout"),M;let w,q=null,m;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),T=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>T.value===!0?e.miniWidth:e.width),g=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||st.value===!0));function p(r,y){if(W(),r!==!1&&a.animate(),$(0),h.value===!0){const E=a.instances[ee.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),Q(1),a.isContainer.value!==!0&&f(!0)}else Q(0),r!==!1&&me(!1);d(()=>{r!==!1&&me(!0),y!==!0&&l("show",r)},Ze)}function b(r,y){K(),r!==!1&&a.animate(),Q(0),$(X.value*L.value),he(),y!==!0?d(()=>{l("hide",r)},Ze):c()}const{show:x,hide:B}=oo({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:b}),{addToHistory:W,removeFromHistory:K}=Zt(g,B,u),A={belowBreakpoint:h,hide:B},H=v(()=>e.side==="right"),X=v(()=>(n.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),He=S(0),U=S(!1),ce=S(!1),Me=S(L.value*X.value),ee=v(()=>H.value===!0?"left":"right"),de=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(H.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),st=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),ct=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&U.value===!1?" hidden":"")),dt=v(()=>({backgroundColor:`rgba(0,0,0,${He.value*.4})`})),Qe=v(()=>H.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ft=v(()=>H.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),vt=v(()=>{const r={};return a.header.space===!0&&Qe.value===!1&&(fe.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&ft.value===!1&&(fe.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),mt=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${Me.value}px)`};return h.value===!0?r:Object.assign(r,vt.value)}),ht=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),pt=v(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(U.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(fe.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),bt=v(()=>{const r=n.lang.rtl===!0?e.side:ee.value;return[[xe,qt,void 0,{[r]:!0,mouse:!0}]]}),yt=v(()=>{const r=n.lang.rtl===!0?ee.value:e.side;return[[xe,Re,void 0,{[r]:!0,mouse:!0}]]}),gt=v(()=>{const r=n.lang.rtl===!0?ee.value:e.side;return[[xe,Re,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){Ct(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}C(h,r=>{r===!0?(w=g.value,g.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?($(0),Q(0),he()):x(!1))}),C(()=>e.side,(r,y)=>{a.instances[y]===A&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=A,a[r].size=L.value,a[r].space=G.value,a[r].offset=de.value}),C(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),C(()=>e.behavior+e.breakpoint,ve),C(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&ve()}),C(a.scrollbarWidth,()=>{$(g.value===!0?0:void 0)}),C(de,r=>{R("offset",r)}),C(G,r=>{l("onLayout",r),R("space",r)}),C(H,()=>{$()}),C(L,r=>{$(),pe(e.miniToOverlay,r)}),C(()=>e.miniToOverlay,r=>{pe(r,L.value)}),C(()=>n.lang.rtl,()=>{$()}),C(()=>e.mini,()=>{e.modelValue===!0&&(wt(),a.animate())}),C(T,r=>{l("miniState",r)});function $(r){r===void 0?j(()=>{r=g.value===!0?0:L.value,$(X.value*r)}):(a.isContainer.value===!0&&H.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=X.value*a.scrollbarWidth.value),Me.value=r)}function Q(r){He.value=r}function me(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function wt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,q=setTimeout(()=>{q=null,ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function qt(r){if(g.value!==!1)return;const y=L.value,E=ae(r.distance.x,0,y);if(r.isFinal===!0){E>=Math.min(75,y)===!0?x():(a.animate(),Q(0),$(X.value*y)),U.value=!1;return}$((n.lang.rtl===!0?H.value!==!0:H.value)?Math.max(y-E,0):Math.min(0,E-y)),Q(ae(E/y,0,1)),r.isFirst===!0&&(U.value=!0)}function Re(r){if(g.value!==!0)return;const y=L.value,E=r.direction===e.side,te=(n.lang.rtl===!0?E!==!0:E)?ae(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(te)<Math.min(75,y)===!0?(a.animate(),Q(1),$(0)):B(),U.value=!1;return}$(X.value*te),Q(ae(1-te/y,0,1)),r.isFirst===!0&&(U.value=!0)}function he(){f(!1),me(!0)}function R(r,y){a.update(e.side,r,y)}function Ct(r,y){r.value!==y&&(r.value=y)}function pe(r,y){R("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=A,pe(e.miniToOverlay,L.value),R("space",G.value),R("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),Y(()=>{l("onLayout",G.value),l("miniState",T.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?p:b)(!1,!0)};if(a.totalWidth.value!==0){j(r);return}m=C(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?x(!1):r()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&he(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Dt(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),bt.value)),r.push(Ae("div",{ref:"backdrop",class:ct.value,style:dt.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>gt.value)));const y=T.value===!0&&o.mini!==void 0,E=[k("div",{...i,key:""+y,class:[ht.value,i.class]},y===!0?o.mini():I(o.default))];return e.elevated===!0&&g.value===!0&&E.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ae("aside",{ref:"content",class:pt.value,style:mt.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>yt.value)),k("div",{class:"q-drawer-container"},r)}}}),po=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=D(),i=$e(se,M);if(i===M)return console.error("QPageContainer needs to be child of QLayout"),M;nt(Ht,!0);const t=v(()=>{const n={};return i.header.space===!0&&(n.paddingTop=`${i.header.size}px`),i.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(n.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),n});return()=>k("div",{class:"q-page-container",style:t.value},I(o.default))}});const{passive:et}=O,bo=["both","horizontal","vertical"];var yo=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>bo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,n;C(()=>e.scrollTarget,()=>{d(),f()});function s(){i!==null&&i();const w=Math.max(0,rt(t)),q=ut(t),m={top:w-l.position.top,left:q-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:w,left:q},l.directionChanged=l.direction!==h,l.delta=m,l.directionChanged===!0&&(l.direction=h,l.inflectionPoint=l.position),o("scroll",{...l})}function f(){t=no(n,e.scrollTarget),t.addEventListener("scroll",c,et),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,et),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(q),i=null}}}const{proxy:a}=D();return C(()=>a.$q.lang.rtl,s),Y(()=>{n=a.$el.parentNode,f()}),N(()=>{i!==null&&i(),d()}),Object.assign(a,{trigger:c,getPosition:()=>l}),ze}}),go=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=D(),t=S(null),n=S(i.screen.height),s=S(e.container===!0?0:i.screen.width),f=S({position:0,direction:"down",inflectionPoint:0}),d=S(0),c=S(lt.value===!0?0:we()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),q=v(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=x,e.onScroll!==void 0&&l("scroll",x)}}function T(b){const{height:x,width:B}=b;let W=!1;n.value!==x&&(W=!0,n.value=x,e.onScrollHeight!==void 0&&l("scrollHeight",x),g()),s.value!==B&&(W=!0,s.value=B),W===!0&&e.onResize!==void 0&&l("resize",b)}function L({height:b}){d.value!==b&&(d.value=b,g())}function g(){if(e.container===!0){const b=n.value>d.value?we():0;c.value!==b&&(c.value=b)}}let u=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,x,B){p[b][x]=B}};if(nt(se,p),we()>0){let B=function(){b=null,x.classList.remove("hide-scrollbar")},W=function(){if(b===null){if(x.scrollHeight>i.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(B,300)},K=function(A){b!==null&&A==="remove"&&(clearTimeout(b),B()),window[`${A}EventListener`]("resize",W)},b=null;const x=document.body;C(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Mt(()=>{K("remove")})}return()=>{const b=zt(o.default,[k(yo,{onScroll:h}),k(_e,{onResize:T})]),x=k("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(_e,{onResize:L}),k("div",{class:"absolute-full",style:q.value},[k("div",{class:"scroll",style:m.value},[x])])]):x}}}),tt=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const l=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:l.value},I(o.default))}}),wo=P({name:"QItem",props:{...Ve,...St,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=D(),t=Oe(e,i),{hasLink:n,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=Tt(),a=S(null),w=S(null),q=v(()=>e.clickable===!0||n.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(n.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=v(()=>{if(e.insetLevel===void 0)return null;const p=i.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),c(p))}function g(p){if(m.value===!0&&Qt(p,13)===!0){Pe(p),p.qKeyEvent=!0;const b=new MouseEvent("click",p);b.qKeyEvent=!0,a.value.dispatchEvent(b)}l("keyup",p)}function u(){const p=ot(o.default,[]);return m.value===!0&&p.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:a,class:h.value,style:T.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),k(d.value,p,u())}}});const qo=it({__name:"EssentialLink",props:{title:null,caption:{default:""},link:{default:""},icon:{default:""}},setup(e){const o=e,l=Wt();function i(){l.push(o.link)}return(t,n)=>(re(),Te(wo,{clickable:"",onClick:i},{default:z(()=>[e.icon?(re(),Te(tt,{key:0,avatar:""},{default:z(()=>[_(Et,{name:e.icon},null,8,["name"])]),_:1})):Rt("",!0),_(tt,null,{default:z(()=>[_(Be,null,{default:z(()=>[ue(Ee(e.title),1)]),_:1}),_(Be,{caption:""},{default:z(()=>[ue(Ee(e.caption),1)]),_:1})]),_:1})]),_:1}))}}),To=it({__name:"MainLayout",setup(e){const o=[{title:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",caption:"",icon:"fa-solid fa-house",link:"/"},{title:"\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435",icon:"fa-solid fa-screwdriver-wrench",link:"/order"},{title:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",icon:"fa-solid fa-phone",link:"/contacts"}],l=S(!1);function i(){l.value=!l.value}return(t,n)=>{const s=At("router-view");return re(),Te(go,{view:"lHh Lpr lFf"},{default:z(()=>[_(Gt,{elevated:""},{default:z(()=>[_(jt,null,{default:z(()=>[_(_t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:i}),_(Yt,null,{default:z(()=>[ue(" Quasar App ")]),_:1}),Ft("div",null,"Quasar v"+Ee(t.$q.version),1)]),_:1})]),_:1}),_(ho,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=f=>l.value=f),"show-if-above":"",bordered:""},{default:z(()=>[_(Jt,null,{default:z(()=>[_(Be,{header:""},{default:z(()=>[ue(" \u041C\u0435\u043D\u044E ")]),_:1}),(re(),Nt(Xt,null,It(o,f=>_(qo,Ut({key:f.title},f),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),_(po,null,{default:z(()=>[_(s)]),_:1})]),_:1})}}});export{To as default};
