"use client";(()=>{var j_=Object.create;var ap=Object.defineProperty;var K_=Object.getOwnPropertyDescriptor;var Q_=Object.getOwnPropertyNames;var ey=Object.getPrototypeOf,ty=Object.prototype.hasOwnProperty;var wr=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};var ny=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Q_(e))!ty.call(t,r)&&r!==n&&ap(t,r,{get:()=>e[r],enumerable:!(i=K_(e,r))||i.enumerable});return t};var lp=(t,e,n)=>(n=t!=null?j_(ey(t)):{},ny(e||!t||!t.__esModule?ap(n,"default",{value:t,enumerable:!0}):n,t));var xp=wr(Ke=>{"use strict";var fo=Symbol.for("react.element"),iy=Symbol.for("react.portal"),ry=Symbol.for("react.fragment"),sy=Symbol.for("react.strict_mode"),oy=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),ly=Symbol.for("react.context"),cy=Symbol.for("react.forward_ref"),uy=Symbol.for("react.suspense"),hy=Symbol.for("react.memo"),fy=Symbol.for("react.lazy"),cp=Symbol.iterator;function dy(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dp=Object.assign,pp={};function is(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||fp}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mp(){}mp.prototype=is.prototype;function lu(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||fp}var cu=lu.prototype=new mp;cu.constructor=lu;dp(cu,is.prototype);cu.isPureReactComponent=!0;var up=Array.isArray,gp=Object.prototype.hasOwnProperty,uu={current:null},vp={key:!0,ref:!0,__self:!0,__source:!0};function _p(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gp.call(e,i)&&!vp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fo,type:t,key:s,ref:o,props:r,_owner:uu.current}}function py(t,e){return{$$typeof:fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hu(t){return typeof t=="object"&&t!==null&&t.$$typeof===fo}function my(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?my(""+t.key):e.toString(36)}function Pa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fo:case iy:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+au(o,0):i,up(r)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),Pa(r,e,n,"",function(c){return c})):r!=null&&(hu(r)&&(r=py(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",up(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+au(s,a);o+=Pa(s,e,n,l,r)}else if(l=dy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+au(s,a++),o+=Pa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var i=[],r=0;return Pa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},La={transition:null},vy={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:La,ReactCurrentOwner:uu};function yp(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!hu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=is;Ke.Fragment=ry;Ke.Profiler=oy;Ke.PureComponent=lu;Ke.StrictMode=sy;Ke.Suspense=uy;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;Ke.act=yp;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=dp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gp.call(e,l)&&!vp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:fo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:ly,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ay,_context:t},t.Consumer=t};Ke.createElement=_p;Ke.createFactory=function(t){var e=_p.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:cy,render:t}};Ke.isValidElement=hu;Ke.lazy=function(t){return{$$typeof:fy,_payload:{_status:-1,_result:t},_init:gy}};Ke.memo=function(t,e){return{$$typeof:hy,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};Ke.unstable_act=yp;Ke.useCallback=function(t,e){return en.current.useCallback(t,e)};Ke.useContext=function(t){return en.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return en.current.useEffect(t,e)};Ke.useId=function(){return en.current.useId()};Ke.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return en.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Ke.useRef=function(t){return en.current.useRef(t)};Ke.useState=function(t){return en.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return en.current.useTransition()};Ke.version="18.3.1"});var fu=wr((vb,Sp)=>{"use strict";Sp.exports=xp()});var Lg=wr(st=>{"use strict";function Yh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<zl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function Kn(t){return t.length===0?null:t[0]}function Bl(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>zl(a,n))l<r&&0>zl(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>zl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function zl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Mg=performance,st.unstable_now=function(){return Mg.now()}):(Wh=Date,Eg=Wh.now(),st.unstable_now=function(){return Wh.now()-Eg});var Mg,Wh,Eg,ui=[],er=[],Zw=1,Nn=null,Zt=3,Vl=!1,Vr=!1,zo=!1,Ag=typeof setTimeout=="function"?setTimeout:null,bg=typeof clearTimeout=="function"?clearTimeout:null,wg=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Zh(t){for(var e=Kn(er);e!==null;){if(e.callback===null)Bl(er);else if(e.startTime<=t)Bl(er),e.sortIndex=e.expirationTime,Yh(ui,e);else break;e=Kn(er)}}function $h(t){if(zo=!1,Zh(t),!Vr)if(Kn(ui)!==null)Vr=!0,jh(Jh);else{var e=Kn(er);e!==null&&Kh($h,e.startTime-t)}}function Jh(t,e){Vr=!1,zo&&(zo=!1,bg(ko),ko=-1),Vl=!0;var n=Zt;try{for(Zh(e),Nn=Kn(ui);Nn!==null&&(!(Nn.expirationTime>e)||t&&!Pg());){var i=Nn.callback;if(typeof i=="function"){Nn.callback=null,Zt=Nn.priorityLevel;var r=i(Nn.expirationTime<=e);e=st.unstable_now(),typeof r=="function"?Nn.callback=r:Nn===Kn(ui)&&Bl(ui),Zh(e)}else Bl(ui);Nn=Kn(ui)}if(Nn!==null)var s=!0;else{var o=Kn(er);o!==null&&Kh($h,o.startTime-e),s=!1}return s}finally{Nn=null,Zt=n,Vl=!1}}var Hl=!1,kl=null,ko=-1,Rg=5,Cg=-1;function Pg(){return!(st.unstable_now()-Cg<Rg)}function Xh(){if(kl!==null){var t=st.unstable_now();Cg=t;var e=!0;try{e=kl(!0,t)}finally{e?Oo():(Hl=!1,kl=null)}}else Hl=!1}var Oo;typeof wg=="function"?Oo=function(){wg(Xh)}:typeof MessageChannel<"u"?(qh=new MessageChannel,Tg=qh.port2,qh.port1.onmessage=Xh,Oo=function(){Tg.postMessage(null)}):Oo=function(){Ag(Xh,0)};var qh,Tg;function jh(t){kl=t,Hl||(Hl=!0,Oo())}function Kh(t,e){ko=Ag(function(){t(st.unstable_now())},e)}st.unstable_IdlePriority=5;st.unstable_ImmediatePriority=1;st.unstable_LowPriority=4;st.unstable_NormalPriority=3;st.unstable_Profiling=null;st.unstable_UserBlockingPriority=2;st.unstable_cancelCallback=function(t){t.callback=null};st.unstable_continueExecution=function(){Vr||Vl||(Vr=!0,jh(Jh))};st.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rg=0<t?Math.floor(1e3/t):5};st.unstable_getCurrentPriorityLevel=function(){return Zt};st.unstable_getFirstCallbackNode=function(){return Kn(ui)};st.unstable_next=function(t){switch(Zt){case 1:case 2:case 3:var e=3;break;default:e=Zt}var n=Zt;Zt=e;try{return t()}finally{Zt=n}};st.unstable_pauseExecution=function(){};st.unstable_requestPaint=function(){};st.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Zt;Zt=t;try{return e()}finally{Zt=n}};st.unstable_scheduleCallback=function(t,e,n){var i=st.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:Zw++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Yh(er,t),Kn(ui)===null&&t===Kn(er)&&(zo?(bg(ko),ko=-1):zo=!0,Kh($h,n-i))):(t.sortIndex=r,Yh(ui,t),Vr||Vl||(Vr=!0,jh(Jh))),t};st.unstable_shouldYield=Pg;st.unstable_wrapCallback=function(t){var e=Zt;return function(){var n=Zt;Zt=e;try{return t.apply(this,arguments)}finally{Zt=n}}}});var Ng=wr((Lb,Ig)=>{"use strict";Ig.exports=Lg()});var O_=wr(Tn=>{"use strict";var $w=fu(),En=Ng();function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B0=new Set,aa={};function es(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(aa[t]=e,t=0;t<e.length;t++)B0.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,Jw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},Dg={};function jw(t){return Mf.call(Dg,t)?!0:Mf.call(Ug,t)?!1:Jw.test(t)?Dg[t]=!0:(Ug[t]=!0,!1)}function Kw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qw(t,e,n,i){if(e===null||typeof e>"u"||Kw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,md);Gt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,md);Gt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,md);Gt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qw(e,n,r,i)&&(n=null),i||r===null?jw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=$w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),zs=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),wf=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),Fg=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=Fg&&t[Fg]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Qh;function Zo(t){if(Qh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qh=e&&e[1]||""}return`
`+Qh+t}var ef=!1;function tf(t,e){if(!t||ef)return"";ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ef=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function eT(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=tf(t.type,!1),t;case 11:return t=tf(t.type.render,!1),t;case 1:return t=tf(t.type,!0),t;default:return""}}function Af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case zs:return"Portal";case Ef:return"Profiler";case vd:return"StrictMode";case wf:return"Suspense";case Tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case _d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:Af(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Af(t(e))}catch{}}return null}function tT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Af(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nT(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wl(t){t._valueTracker||(t._valueTracker=nT(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=W0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bf(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Og(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q0(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function Rf(t,e){q0(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if($o(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Y0(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Z0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Z0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xl,$0=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function la(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iT=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){iT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function J0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=J0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rT=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(t,e){if(e){if(rT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Df=null,js=null,Ks=null;function Vg(t){if(t=Aa(t)){if(typeof Df!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=qc(e),Df(t.stateNode,t.type,e))}}function K0(t){js?Ks?Ks.push(t):Ks=[t]:js=t}function Q0(){if(js){var t=js,e=Ks;if(Ks=js=null,Vg(t),e)for(t=0;t<e.length;t++)Vg(e[t])}}function ev(t,e){return t(e)}function tv(){}var nf=!1;function nv(t,e,n){if(nf)return t(e,n);nf=!0;try{return ev(t,e,n)}finally{nf=!1,(js!==null||Ks!==null)&&(tv(),Q0())}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var i=qc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Ff=!1;if(Ii)try{Fs={},Object.defineProperty(Fs,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Ff=!1}var Fs;function sT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Qo=!1,yc=null,xc=!1,Of=null,oT={onError:function(t){Qo=!0,yc=t}};function aT(t,e,n,i,r,s,o,a,l){Qo=!1,yc=null,sT.apply(oT,arguments)}function lT(t,e,n,i,r,s,o,a,l){if(aT.apply(this,arguments),Qo){if(Qo){var c=yc;Qo=!1,yc=null}else throw Error(ae(198));xc||(xc=!0,Of=c)}}function ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(t){if(ts(t)!==t)throw Error(ae(188))}function cT(t){var e=t.alternate;if(!e){if(e=ts(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hg(r),t;if(s===i)return Hg(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function rv(t){return t=cT(t),t!==null?sv(t):null}function sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sv(t);if(e!==null)return e;t=t.sibling}return null}var ov=En.unstable_scheduleCallback,Gg=En.unstable_cancelCallback,uT=En.unstable_shouldYield,hT=En.unstable_requestPaint,Et=En.unstable_now,fT=En.unstable_getCurrentPriorityLevel,Sd=En.unstable_ImmediatePriority,av=En.unstable_UserBlockingPriority,Sc=En.unstable_NormalPriority,dT=En.unstable_LowPriority,lv=En.unstable_IdlePriority,Hc=null,pi=null;function pT(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Hc,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:vT,mT=Math.log,gT=Math.LN2;function vT(t){return t>>>=0,t===0?32:31-(mT(t)/gT|0)|0}var ql=64,Yl=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Jo(a):(s&=o,s!==0&&(i=Jo(s)))}else o=n&~r,o!==0?i=Jo(o):s!==0&&(i=Jo(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function _T(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ii(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=_T(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cv(){var t=ql;return ql<<=1,(ql&4194240)===0&&(ql=64),t}function rf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function xT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function uv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var hv,Ed,fv,dv,pv,kf=!1,Zl=[],lr=null,cr=null,ur=null,ua=new Map,ha=new Map,rr=[],ST="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wg(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function MT(t,e,n,i,r){switch(e){case"focusin":return lr=Vo(lr,t,e,n,i,r),!0;case"dragenter":return cr=Vo(cr,t,e,n,i,r),!0;case"mouseover":return ur=Vo(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ua.set(s,Vo(ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,Vo(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function mv(t){var e=Wr(t.target);if(e!==null){var n=ts(e);if(n!==null){if(e=n.tag,e===13){if(e=iv(n),e!==null){t.blockedOn=e,pv(t.priority,function(){fv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uf=i,n.target.dispatchEvent(i),Uf=null}else return e=Aa(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function Xg(t,e,n){lc(t)&&n.delete(e)}function ET(){kf=!1,lr!==null&&lc(lr)&&(lr=null),cr!==null&&lc(cr)&&(cr=null),ur!==null&&lc(ur)&&(ur=null),ua.forEach(Xg),ha.forEach(Xg)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,kf||(kf=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,ET)))}function fa(t){function e(r){return Ho(r,t)}if(0<Zl.length){Ho(Zl[0],t);for(var n=1;n<Zl.length;n++){var i=Zl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&Ho(lr,t),cr!==null&&Ho(cr,t),ur!==null&&Ho(ur,t),ua.forEach(e),ha.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)mv(n),n.blockedOn===null&&rr.shift()}var Qs=Fi.ReactCurrentBatchConfig,Ec=!0;function wT(t,e,n,i){var r=nt,s=Qs.transition;Qs.transition=null;try{nt=1,wd(t,e,n,i)}finally{nt=r,Qs.transition=s}}function TT(t,e,n,i){var r=nt,s=Qs.transition;Qs.transition=null;try{nt=4,wd(t,e,n,i)}finally{nt=r,Qs.transition=s}}function wd(t,e,n,i){if(Ec){var r=Bf(t,e,n,i);if(r===null)hf(t,e,i,wc,n),Wg(t,i);else if(MT(r,t,e,n,i))i.stopPropagation();else if(Wg(t,i),e&4&&-1<ST.indexOf(t)){for(;r!==null;){var s=Aa(r);if(s!==null&&hv(s),s=Bf(t,e,n,i),s===null&&hf(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hf(t,e,i,null,n)}}var wc=null;function Bf(t,e,n,i){if(wc=null,t=xd(i),t=Wr(t),t!==null)if(e=ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fT()){case Sd:return 1;case av:return 4;case Sc:case dT:return 16;case lv:return 536870912;default:return 16}default:return 16}}var or=null,Td=null,cc=null;function vv(){if(cc)return cc;var t,e=Td,n=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return cc=r.slice(t,1<i?1-i:void 0)}function uc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function qg(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:qg,this.isPropagationStopped=qg,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=wn(co),Ta=xt({},co,{view:0,detail:0}),AT=wn(Ta),sf,of,Go,Gc=xt({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(sf=t.screenX-Go.screenX,of=t.screenY-Go.screenY):of=sf=0,Go=t),sf)},movementY:function(t){return"movementY"in t?t.movementY:of}}),Yg=wn(Gc),bT=xt({},Gc,{dataTransfer:0}),RT=wn(bT),CT=xt({},Ta,{relatedTarget:0}),af=wn(CT),PT=xt({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),LT=wn(PT),IT=xt({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NT=wn(IT),UT=xt({},co,{data:0}),Zg=wn(UT),DT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OT[t])?!!e[t]:!1}function bd(){return zT}var kT=xt({},Ta,{key:function(t){if(t.key){var e=DT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?uc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BT=wn(kT),VT=xt({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=wn(VT),HT=xt({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),GT=wn(HT),WT=xt({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),XT=wn(WT),qT=xt({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YT=wn(qT),ZT=[9,13,27,32],Rd=Ii&&"CompositionEvent"in window,ea=null;Ii&&"documentMode"in document&&(ea=document.documentMode);var $T=Ii&&"TextEvent"in window&&!ea,_v=Ii&&(!Rd||ea&&8<ea&&11>=ea),Jg=" ",jg=!1;function yv(t,e){switch(t){case"keyup":return ZT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function JT(t,e){switch(t){case"compositionend":return xv(e);case"keypress":return e.which!==32?null:(jg=!0,Jg);case"textInput":return t=e.data,t===Jg&&jg?null:t;default:return null}}function jT(t,e){if(Bs)return t==="compositionend"||!Rd&&yv(t,e)?(t=vv(),cc=Td=or=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var KT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KT[t.type]:e==="textarea"}function Sv(t,e,n,i){K0(i),e=Tc(e,"onChange"),0<e.length&&(n=new Ad("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ta=null,da=null;function QT(t){Iv(t,0)}function Wc(t){var e=Gs(t);if(X0(e))return t}function eA(t,e){if(t==="change")return e}var Mv=!1;Ii&&(Ii?(jl="oninput"in document,jl||(lf=document.createElement("div"),lf.setAttribute("oninput","return;"),jl=typeof lf.oninput=="function"),Jl=jl):Jl=!1,Mv=Jl&&(!document.documentMode||9<document.documentMode));var Jl,jl,lf;function Qg(){ta&&(ta.detachEvent("onpropertychange",Ev),da=ta=null)}function Ev(t){if(t.propertyName==="value"&&Wc(da)){var e=[];Sv(e,da,t,xd(t)),nv(QT,e)}}function tA(t,e,n){t==="focusin"?(Qg(),ta=e,da=n,ta.attachEvent("onpropertychange",Ev)):t==="focusout"&&Qg()}function nA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(da)}function iA(t,e){if(t==="click")return Wc(e)}function rA(t,e){if(t==="input"||t==="change")return Wc(e)}function sA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:sA;function pa(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mf.call(e,r)||!si(t[r],e[r]))return!1}return!0}function e0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function t0(t,e){var n=e0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=e0(n)}}function wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tv(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oA(t){var e=Tv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wv(n.ownerDocument.documentElement,n)){if(i!==null&&Cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=t0(n,s);var o=t0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aA=Ii&&"documentMode"in document&&11>=document.documentMode,Vs=null,Vf=null,na=null,Hf=!1;function n0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||Vs==null||Vs!==_c(i)||(i=Vs,"selectionStart"in i&&Cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&pa(na,i)||(na=i,i=Tc(Vf,"onSelect"),0<i.length&&(e=new Ad("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vs)))}function Kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hs={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},cf={},Av={};Ii&&(Av=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Xc(t){if(cf[t])return cf[t];if(!Hs[t])return t;var e=Hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Av)return cf[t]=e[n];return t}var bv=Xc("animationend"),Rv=Xc("animationiteration"),Cv=Xc("animationstart"),Pv=Xc("transitionend"),Lv=new Map,i0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Lv.set(t,e),es(e,[t])}for(Ql=0;Ql<i0.length;Ql++)ec=i0[Ql],r0=ec.toLowerCase(),s0=ec[0].toUpperCase()+ec.slice(1),_r(r0,"on"+s0);var ec,r0,s0,Ql;_r(bv,"onAnimationEnd");_r(Rv,"onAnimationIteration");_r(Cv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Pv,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lA=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function o0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lT(i,e,void 0,t),t.currentTarget=null}function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;o0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;o0(r,a,c),s=l}}}if(xc)throw t=Of,xc=!1,Of=null,t}function ct(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var i=t+"__bubble";n.has(i)||(Nv(e,t,2,!1),n.add(i))}function uf(t,e,n){var i=0;e&&(i|=4),Nv(n,t,i,e)}var tc="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[tc]){t[tc]=!0,B0.forEach(function(n){n!=="selectionchange"&&(lA.has(n)||uf(n,!1,t),uf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tc]||(e[tc]=!0,uf("selectionchange",!1,e))}}function Nv(t,e,n,i){switch(gv(e)){case 1:var r=wT;break;case 4:r=TT;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!Ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hf(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}nv(function(){var c=s,u=xd(n),f=[];e:{var d=Lv.get(t);if(d!==void 0){var p=Ad,_=t;switch(t){case"keypress":if(uc(n)===0)break e;case"keydown":case"keyup":p=BT;break;case"focusin":_="focus",p=af;break;case"focusout":_="blur",p=af;break;case"beforeblur":case"afterblur":p=af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=RT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GT;break;case bv:case Rv:case Cv:p=LT;break;case Pv:p=XT;break;case"scroll":p=AT;break;case"wheel":p=YT;break;case"copy":case"cut":case"paste":p=NT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$g}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,m;v!==null;){m=v;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,h!==null&&(S=ca(v,h),S!=null&&y.push(ga(v,S,m)))),g)break;v=v.return}0<y.length&&(d=new p(d,_,null,n,u),f.push({event:d,listeners:y}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Uf&&(_=n.relatedTarget||n.fromElement)&&(Wr(_)||_[Ni]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Wr(_):null,_!==null&&(g=ts(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Yg,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=$g,S="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:Gs(p),m=_==null?d:Gs(_),d=new y(S,v+"leave",p,n,u),d.target=g,d.relatedTarget=m,S=null,Wr(u)===c&&(y=new y(h,v+"enter",_,n,u),y.target=m,y.relatedTarget=g,S=y),g=S,p&&_)t:{for(y=p,h=_,v=0,m=y;m;m=Os(m))v++;for(m=0,S=h;S;S=Os(S))m++;for(;0<v-m;)y=Os(y),v--;for(;0<m-v;)h=Os(h),m--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Os(y),h=Os(h)}y=null}else y=null;p!==null&&a0(f,d,p,y,!1),_!==null&&g!==null&&a0(f,g,_,y,!0)}}e:{if(d=c?Gs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=eA;else if(Kg(d))if(Mv)R=rA;else{R=nA;var A=tA}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=iA);if(R&&(R=R(t,c))){Sv(f,R,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Cf(d,"number",d.value)}switch(A=c?Gs(c):window,t){case"focusin":(Kg(A)||A.contentEditable==="true")&&(Vs=A,Vf=c,na=null);break;case"focusout":na=Vf=Vs=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,n0(f,n,u);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":n0(f,n,u)}var b;if(Rd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Bs?yv(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(_v&&n.locale!=="ko"&&(Bs||U!=="onCompositionStart"?U==="onCompositionEnd"&&Bs&&(b=vv()):(or=u,Td="value"in or?or.value:or.textContent,Bs=!0)),A=Tc(c,U),0<A.length&&(U=new Zg(U,t,null,n,u),f.push({event:U,listeners:A}),b?U.data=b:(b=xv(n),b!==null&&(U.data=b)))),(b=$T?JT(t,n):jT(t,n))&&(c=Tc(c,"onBeforeInput"),0<c.length&&(u=new Zg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=b))}Iv(f,e)})}function ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ca(t,n),s!=null&&i.unshift(ga(t,s,r)),s=ca(t,e),s!=null&&i.push(ga(t,s,r))),t=t.return}return i}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function a0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ca(n,s),l!=null&&o.unshift(ga(n,l,a))):r||(l=ca(n,s),l!=null&&o.push(ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cA=/\r\n?/g,uA=/\u0000|\uFFFD/g;function l0(t){return(typeof t=="string"?t:""+t).replace(cA,`
`).replace(uA,"")}function nc(t,e,n){if(e=l0(e),l0(t)!==e&&n)throw Error(ae(425))}function Ac(){}var Gf=null,Wf=null;function Xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,hA=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,fA=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(dA)}:qf;function dA(t){setTimeout(function(){throw t})}function ff(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function u0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),di="__reactFiber$"+uo,va="__reactProps$"+uo,Ni="__reactContainer$"+uo,Yf="__reactEvents$"+uo,pA="__reactListeners$"+uo,mA="__reactHandles$"+uo;function Wr(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u0(t);t!==null;){if(n=t[di])return n;t=u0(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[di]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function qc(t){return t[va]||null}var Zf=[],Ws=-1;function yr(t){return{current:t}}function ut(t){0>Ws||(t.current=Zf[Ws],Zf[Ws]=null,Ws--)}function ot(t,e){Ws++,Zf[Ws]=t.current,t.current=e}var vr={},Kt=yr(vr),dn=yr(!1),$r=vr;function io(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function bc(){ut(dn),ut(Kt)}function h0(t,e,n){if(Kt.current!==vr)throw Error(ae(168));ot(Kt,e),ot(dn,n)}function Uv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,tT(t)||"Unknown",r));return xt({},n,i)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,$r=Kt.current,ot(Kt,t),ot(dn,dn.current),!0}function f0(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Uv(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,ut(dn),ut(Kt),ot(Kt,t)):ut(dn),ot(dn,n)}var Ri=null,Yc=!1,df=!1;function Dv(t){Ri===null?Ri=[t]:Ri.push(t)}function gA(t){Yc=!0,Dv(t)}function xr(){if(!df&&Ri!==null){df=!0;var t=0,e=nt;try{var n=Ri;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,Yc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),ov(Sd,xr),r}finally{nt=e,df=!1}}return null}var Xs=[],qs=0,Cc=null,Pc=0,Un=[],Dn=0,Jr=null,Ci=1,Pi="";function Hr(t,e){Xs[qs++]=Pc,Xs[qs++]=Cc,Cc=t,Pc=e}function Fv(t,e,n){Un[Dn++]=Ci,Un[Dn++]=Pi,Un[Dn++]=Jr,Jr=t;var i=Ci;t=Pi;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-ii(e)+r|n<<r|i,Pi=s+t}else Ci=1<<s|n<<r|i,Pi=t}function Pd(t){t.return!==null&&(Hr(t,1),Fv(t,1,0))}function Ld(t){for(;t===Cc;)Cc=Xs[--qs],Xs[qs]=null,Pc=Xs[--qs],Xs[qs]=null;for(;t===Jr;)Jr=Un[--Dn],Un[Dn]=null,Pi=Un[--Dn],Un[Dn]=null,Ci=Un[--Dn],Un[Dn]=null}var Mn=null,Sn=null,pt=!1,ni=null;function Ov(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Ci,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jf(t){if(pt){var e=Sn;if(e){var n=e;if(!d0(t,e)){if($f(t))throw Error(ae(418));e=hr(n.nextSibling);var i=Mn;e&&d0(t,e)?Ov(i,n):(t.flags=t.flags&-4097|2,pt=!1,Mn=t)}}else{if($f(t))throw Error(ae(418));t.flags=t.flags&-4097|2,pt=!1,Mn=t}}}function p0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function ic(t){if(t!==Mn)return!1;if(!pt)return p0(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xf(t.type,t.memoizedProps)),e&&(e=Sn)){if($f(t))throw zv(),Error(ae(418));for(;e;)Ov(t,e),e=hr(e.nextSibling)}if(p0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?hr(t.stateNode.nextSibling):null;return!0}function zv(){for(var t=Sn;t;)t=hr(t.nextSibling)}function ro(){Sn=Mn=null,pt=!1}function Id(t){ni===null?ni=[t]:ni.push(t)}var vA=Fi.ReactCurrentBatchConfig;function Wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function rc(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function m0(t){var e=t._init;return e(t._payload)}function kv(t){function e(h,v){if(t){var m=h.deletions;m===null?(h.deletions=[v],h.flags|=16):m.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=mr(h,v),h.index=0,h.sibling=null,h}function s(h,v,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<v?(h.flags|=2,v):m):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,m,S){return v===null||v.tag!==6?(v=xf(m,h.mode,S),v.return=h,v):(v=r(v,m),v.return=h,v)}function l(h,v,m,S){var R=m.type;return R===ks?u(h,v,m.props.children,S,m.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===nr&&m0(R)===v.type)?(S=r(v,m.props),S.ref=Wo(h,v,m),S.return=h,S):(S=vc(m.type,m.key,m.props,null,h.mode,S),S.ref=Wo(h,v,m),S.return=h,S)}function c(h,v,m,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=Sf(m,h.mode,S),v.return=h,v):(v=r(v,m.children||[]),v.return=h,v)}function u(h,v,m,S,R){return v===null||v.tag!==7?(v=Zr(m,h.mode,S,R),v.return=h,v):(v=r(v,m),v.return=h,v)}function f(h,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=xf(""+v,h.mode,m),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gl:return m=vc(v.type,v.key,v.props,null,h.mode,m),m.ref=Wo(h,null,v),m.return=h,m;case zs:return v=Sf(v,h.mode,m),v.return=h,v;case nr:var S=v._init;return f(h,S(v._payload),m)}if($o(v)||Bo(v))return v=Zr(v,h.mode,m,null),v.return=h,v;rc(h,v)}return null}function d(h,v,m,S){var R=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:a(h,v,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gl:return m.key===R?l(h,v,m,S):null;case zs:return m.key===R?c(h,v,m,S):null;case nr:return R=m._init,d(h,v,R(m._payload),S)}if($o(m)||Bo(m))return R!==null?null:u(h,v,m,S,null);rc(h,m)}return null}function p(h,v,m,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(m)||null,a(v,h,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gl:return h=h.get(S.key===null?m:S.key)||null,l(v,h,S,R);case zs:return h=h.get(S.key===null?m:S.key)||null,c(v,h,S,R);case nr:var A=S._init;return p(h,v,m,A(S._payload),R)}if($o(S)||Bo(S))return h=h.get(m)||null,u(v,h,S,R,null);rc(v,S)}return null}function _(h,v,m,S){for(var R=null,A=null,b=v,U=v=0,E=null;b!==null&&U<m.length;U++){b.index>U?(E=b,b=null):E=b.sibling;var T=d(h,b,m[U],S);if(T===null){b===null&&(b=E);break}t&&b&&T.alternate===null&&e(h,b),v=s(T,v,U),A===null?R=T:A.sibling=T,A=T,b=E}if(U===m.length)return n(h,b),pt&&Hr(h,U),R;if(b===null){for(;U<m.length;U++)b=f(h,m[U],S),b!==null&&(v=s(b,v,U),A===null?R=b:A.sibling=b,A=b);return pt&&Hr(h,U),R}for(b=i(h,b);U<m.length;U++)E=p(b,h,U,m[U],S),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?U:E.key),v=s(E,v,U),A===null?R=E:A.sibling=E,A=E);return t&&b.forEach(function(I){return e(h,I)}),pt&&Hr(h,U),R}function y(h,v,m,S){var R=Bo(m);if(typeof R!="function")throw Error(ae(150));if(m=R.call(m),m==null)throw Error(ae(151));for(var A=R=null,b=v,U=v=0,E=null,T=m.next();b!==null&&!T.done;U++,T=m.next()){b.index>U?(E=b,b=null):E=b.sibling;var I=d(h,b,T.value,S);if(I===null){b===null&&(b=E);break}t&&b&&I.alternate===null&&e(h,b),v=s(I,v,U),A===null?R=I:A.sibling=I,A=I,b=E}if(T.done)return n(h,b),pt&&Hr(h,U),R;if(b===null){for(;!T.done;U++,T=m.next())T=f(h,T.value,S),T!==null&&(v=s(T,v,U),A===null?R=T:A.sibling=T,A=T);return pt&&Hr(h,U),R}for(b=i(h,b);!T.done;U++,T=m.next())T=p(b,h,U,T.value,S),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?U:T.key),v=s(T,v,U),A===null?R=T:A.sibling=T,A=T);return t&&b.forEach(function(Z){return e(h,Z)}),pt&&Hr(h,U),R}function g(h,v,m,S){if(typeof m=="object"&&m!==null&&m.type===ks&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Gl:e:{for(var R=m.key,A=v;A!==null;){if(A.key===R){if(R=m.type,R===ks){if(A.tag===7){n(h,A.sibling),v=r(A,m.props.children),v.return=h,h=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===nr&&m0(R)===A.type){n(h,A.sibling),v=r(A,m.props),v.ref=Wo(h,A,m),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}m.type===ks?(v=Zr(m.props.children,h.mode,S,m.key),v.return=h,h=v):(S=vc(m.type,m.key,m.props,null,h.mode,S),S.ref=Wo(h,v,m),S.return=h,h=S)}return o(h);case zs:e:{for(A=m.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(h,v.sibling),v=r(v,m.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Sf(m,h.mode,S),v.return=h,h=v}return o(h);case nr:return A=m._init,g(h,v,A(m._payload),S)}if($o(m))return _(h,v,m,S);if(Bo(m))return y(h,v,m,S);rc(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,m),v.return=h,h=v):(n(h,v),v=xf(m,h.mode,S),v.return=h,h=v),o(h)):n(h,v)}return g}var so=kv(!0),Bv=kv(!1),Lc=yr(null),Ic=null,Ys=null,Nd=null;function Ud(){Nd=Ys=Ic=null}function Dd(t){var e=Lc.current;ut(Lc),t._currentValue=e}function jf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){Ic=t,Nd=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(fn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Ic===null)throw Error(ae(308));Ys=t,Ic.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var Xr=null;function Fd(t){Xr===null?Xr=[t]:Xr.push(t)}function Vv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Fd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(tt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Fd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function hc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}function g0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,i){var r=t.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=xt({},f,d);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=f}}function v0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var ba={},mi=yr(ba),_a=yr(ba),ya=yr(ba);function qr(t){if(t===ba)throw Error(ae(174));return t}function zd(t,e){switch(ot(ya,e),ot(_a,t),ot(mi,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}ut(mi),ot(mi,e)}function oo(){ut(mi),ut(_a),ut(ya)}function Gv(t){qr(ya.current);var e=qr(mi.current),n=Lf(e,t.type);e!==n&&(ot(_a,t),ot(mi,n))}function kd(t){_a.current===t&&(ut(mi),ut(_a))}var _t=yr(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pf=[];function Bd(){for(var t=0;t<pf.length;t++)pf[t]._workInProgressVersionPrimary=null;pf.length=0}var fc=Fi.ReactCurrentDispatcher,mf=Fi.ReactCurrentBatchConfig,jr=0,yt=null,Ct=null,Ut=null,Dc=!1,ia=!1,xa=0,_A=0;function $t(){throw Error(ae(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function Hd(t,e,n,i,r,s){if(jr=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fc.current=t===null||t.memoizedState===null?MA:EA,t=n(i,r),ia){s=0;do{if(ia=!1,xa=0,25<=s)throw Error(ae(301));s+=1,Ut=Ct=null,e.updateQueue=null,fc.current=wA,t=n(i,r)}while(ia)}if(fc.current=Fc,e=Ct!==null&&Ct.next!==null,jr=0,Ut=Ct=yt=null,Dc=!1,e)throw Error(ae(300));return t}function Gd(){var t=xa!==0;return xa=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function kn(){if(Ct===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ut===null?yt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=t;else{if(t===null)throw Error(ae(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Sa(t,e){return typeof e=="function"?e(t):e}function gf(t){var e=kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=u,Kr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,Kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vf(t){var e=kn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Wv(){}function Xv(t,e){var n=yt,i=kn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,Wd(Zv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Ma(9,Yv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ae(349));(jr&30)!==0||qv(n,e,r)}return r}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yv(t,e,n,i){e.value=n,e.getSnapshot=i,$v(e)&&Jv(t)}function Zv(t,e,n){return n(function(){$v(e)&&Jv(t)})}function $v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function Jv(t){var e=Ui(t,1);e!==null&&ri(e,t,1,-1)}function _0(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=SA.bind(null,yt,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jv(){return kn().memoizedState}function dc(t,e,n,i){var r=fi();yt.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function Zc(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Vd(i,o.deps)){r.memoizedState=Ma(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function y0(t,e){return dc(8390656,8,t,e)}function Wd(t,e){return Zc(2048,8,t,e)}function Kv(t,e){return Zc(4,2,t,e)}function Qv(t,e){return Zc(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4,4,e_.bind(null,e,t),n)}function Xd(){}function n_(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function i_(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function r_(t,e,n){return(jr&21)===0?(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n):(si(n,e)||(n=cv(),yt.lanes|=n,Kr|=n,t.baseState=!0),e)}function yA(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=mf.transition;mf.transition={};try{t(!1),e()}finally{nt=n,mf.transition=i}}function s_(){return kn().memoizedState}function xA(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=Vv(t,e,n,i),n!==null){var r=sn();ri(n,t,i,r),l_(n,e,i)}}function SA(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,Fd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}n=Vv(t,e,r,i),n!==null&&(r=sn(),ri(n,t,i,r),l_(n,e,i))}}function o_(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function a_(t,e){ia=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}var Fc={readContext:zn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},MA={readContext:zn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:y0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dc(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dc(4194308,4,t,e)},useInsertionEffect:function(t,e){return dc(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xA.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:_0,useDebugValue:Xd,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=_0(!1),e=t[0];return t=yA.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=fi();if(pt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Dt===null)throw Error(ae(349));(jr&30)!==0||qv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,y0(Zv.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,Yv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=Dt.identifierPrefix;if(pt){var n=Pi,i=Ci;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_A++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EA={readContext:zn,useCallback:n_,useContext:zn,useEffect:Wd,useImperativeHandle:t_,useInsertionEffect:Kv,useLayoutEffect:Qv,useMemo:i_,useReducer:gf,useRef:jv,useState:function(){return gf(Sa)},useDebugValue:Xd,useDeferredValue:function(t){var e=kn();return r_(e,Ct.memoizedState,t)},useTransition:function(){var t=gf(Sa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:Xv,useId:s_,unstable_isNewReconciler:!1},wA={readContext:zn,useCallback:n_,useContext:zn,useEffect:Wd,useImperativeHandle:t_,useInsertionEffect:Kv,useLayoutEffect:Qv,useMemo:i_,useReducer:vf,useRef:jv,useState:function(){return vf(Sa)},useDebugValue:Xd,useDeferredValue:function(t){var e=kn();return Ct===null?e.memoizedState=t:r_(e,Ct.memoizedState,t)},useTransition:function(){var t=vf(Sa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:Xv,useId:s_,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $c={isMounted:function(t){return(t=t._reactInternals)?ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=pr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ri(e,t,r,i),hc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=pr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(ri(e,t,r,i),hc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=pr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(ri(e,t,i,n),hc(e,t,i))}};function x0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!pa(n,i)||!pa(r,s):!0}function c_(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=pn(e)?$r:Kt.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$c,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function S0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$c.enqueueReplaceState(e,e.state,null)}function Qf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Od(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=pn(e)?$r:Kt.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$c.enqueueReplaceState(r,r.state,null),Nc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=eT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TA=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zc||(zc=!0,ud=i),ed(t,e)},n}function h_(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function M0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new TA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kA.bind(null,t,e,n),e.then(t,t))}function E0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function w0(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var AA=Fi.ReactCurrentOwner,fn=!1;function rn(t,e,n,i){e.child=t===null?Bv(e,null,n,i):so(e,t.child,n,i)}function T0(t,e,n,i,r){n=n.render;var s=e.ref;return eo(e,r),i=Hd(t,e,n,i,s,r),n=Gd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(pt&&n&&Pd(e),e.flags|=1,rn(t,e,i,r),e.child)}function A0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,f_(t,e,s,i,r)):(t=vc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function f_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(pa(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(fn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return td(t,e,n,i,r)}function d_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot($s,xn),xn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot($s,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot($s,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot($s,xn),xn|=i;return rn(t,e,r,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,i,r){var s=pn(n)?$r:Kt.current;return s=io(e,s),eo(e,r),n=Hd(t,e,n,i,s,r),i=Gd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(pt&&i&&Pd(e),e.flags|=1,rn(t,e,n,r),e.child)}function b0(t,e,n,i,r){if(pn(n)){var s=!0;Rc(e)}else s=!1;if(eo(e,r),e.stateNode===null)pc(t,e),c_(e,n,i),Qf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=pn(n)?$r:Kt.current,c=io(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&S0(e,o,i,c),ir=!1;var d=e.memoizedState;o.state=d,Nc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||dn.current||ir?(typeof u=="function"&&(Kf(e,n,u,i),l=e.memoizedState),(a=ir||x0(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Hv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=pn(n)?$r:Kt.current,l=io(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&S0(e,o,i,l),ir=!1,d=e.memoizedState,o.state=d,Nc(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||dn.current||ir?(typeof p=="function"&&(Kf(e,n,p,i),_=e.memoizedState),(c=ir||x0(e,n,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return nd(t,e,n,i,s,r)}function nd(t,e,n,i,r,s){p_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&f0(e,n,!1),Di(t,e,s);i=e.stateNode,AA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&f0(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?h0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&h0(t,e.context,!1),zd(t,e.containerInfo)}function R0(t,e,n,i,r){return ro(),Id(r),e.flags|=256,rn(t,e,n,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(_t,r&1),t===null)return Jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kc(o,i,0,null),t=Zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=id,t):qd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bA(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qd(t,e){return e=Kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sc(t,e,n,i){return i!==null&&Id(i),so(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bA(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=_f(Error(ae(422))),sc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kc({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&so(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=id,s);if((e.mode&1)===0)return sc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=_f(s,i,void 0),sc(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ri(i,t,r,-1))}return Kd(),i=_f(Error(ae(421))),sc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=BA.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=hr(r.nextSibling),Mn=e,pt=!0,ni=null,t!==null&&(Un[Dn++]=Ci,Un[Dn++]=Pi,Un[Dn++]=Jr,Ci=t.id,Pi=t.overflow,Jr=e),e=qd(e,i.children),e.flags|=4096,e)}function C0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jf(t.return,e,n)}function yf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function v_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=_t.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C0(t,n,e);else if(t.tag===19)C0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(_t,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RA(t,e,n){switch(e.tag){case 3:m_(e),ro();break;case 5:Gv(e);break;case 1:pn(e.type)&&Rc(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(_t,_t.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?g_(t,e,n):(ot(_t,_t.current&1),t=Di(t,e,n),t!==null?t.sibling:null);ot(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return v_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,d_(t,e,n)}return Di(t,e,n)}var __,sd,y_,x_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};y_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(mi.current);var s=null;switch(n){case"input":r=bf(t,r),i=bf(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Pf(t,r),i=Pf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}If(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};x_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CA(t,e,n){var i=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return pn(e.type)&&bc(),Jt(e),null;case 3:return i=e.stateNode,oo(),ut(dn),ut(Kt),Bd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ic(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ni!==null&&(dd(ni),ni=null))),sd(t,e),Jt(e),null;case 5:kd(e);var r=qr(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Jt(e),null}if(t=qr(mi.current),ic(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[va]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<jo.length;r++)ct(jo[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Og(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":kg(i,s),ct("invalid",i)}If(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nc(i.textContent,a,t),r=["children",""+a]):aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Wl(i),zg(i,s,!0);break;case"textarea":Wl(i),Bg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Z0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[di]=e,t[va]=i,__(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<jo.length;r++)ct(jo[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Og(t,i),r=bf(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":kg(t,i),r=Pf(t,i),ct("invalid",t);break;default:r=i}If(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&la(t,l):typeof l=="number"&&la(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&gd(t,s,l,o))}switch(n){case"input":Wl(t),zg(t,i,!1);break;case"textarea":Wl(t),Bg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Js(t,!!i.multiple,s,!1):i.defaultValue!=null&&Js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)x_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=qr(ya.current),qr(mi.current),ic(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:nc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Jt(e),null;case 13:if(ut(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Sn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)zv(),ro(),e.flags|=98560,s=!1;else if(s=ic(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[di]=e}else ro(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else ni!==null&&(dd(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(_t.current&1)!==0?Pt===0&&(Pt=3):Kd())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return oo(),sd(t,e),t===null&&ma(e.stateNode.containerInfo),Jt(e),null;case 10:return Dd(e.type._context),Jt(e),null;case 17:return pn(e.type)&&bc(),Jt(e),null;case 19:if(ut(_t),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xo(s,!1);else{if(Pt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,Xo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>lo&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Uc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Jt(e),null}else 2*Et()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=_t.current,ot(_t,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return jd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(xn&1073741824)!==0&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function PA(t,e){switch(Ld(e),e.tag){case 1:return pn(e.type)&&bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),ut(dn),ut(Kt),Bd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(ut(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(_t),null;case 4:return oo(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var oc=!1,jt=!1,LA=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function od(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var P0=!1;function IA(t,e){if(Gf=Ec,t=Tv(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wf={focusedElem:t,selectionRange:n},Ec=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ei(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=P0,P0=!1,_}function ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&od(e,n,s)}r=r.next}while(r!==i)}}function Jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;t.tag,t=n,typeof e=="function"?e(t):e.current=t}}function S_(t){var e=t.alternate;e!==null&&(t.alternate=null,S_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[va],delete e[Yf],delete e[pA],delete e[mA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M_(t){return t.tag===5||t.tag===3||t.tag===4}function L0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Vt=null,ti=!1;function tr(t,e,n){for(n=n.child;n!==null;)E_(t,e,n),n=n.sibling}function E_(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Hc,n)}catch{}switch(n.tag){case 5:jt||Zs(n,e);case 6:var i=Vt,r=ti;Vt=null,tr(t,e,n),Vt=i,ti=r,Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(ti?(t=Vt,n=n.stateNode,t.nodeType===8?ff(t.parentNode,n):t.nodeType===1&&ff(t,n),fa(t)):ff(Vt,n.stateNode));break;case 4:i=Vt,r=ti,Vt=n.stateNode.containerInfo,ti=!0,tr(t,e,n),Vt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&od(n,e,o),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!jt&&(Zs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,tr(t,e,n),jt=i):tr(t,e,n);break;default:tr(t,e,n)}}function I0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LA),e.forEach(function(i){var r=VA.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,ti=!1;break e;case 3:Vt=a.stateNode.containerInfo,ti=!0;break e;case 4:Vt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Vt===null)throw Error(ae(160));E_(s,o,r),Vt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w_(e,t),e=e.sibling}function w_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),hi(t),i&4){try{ra(3,t,t.return),Jc(3,t)}catch(y){Mt(t,t.return,y)}try{ra(5,t,t.return)}catch(y){Mt(t,t.return,y)}}break;case 1:Qn(e,t),hi(t),i&512&&n!==null&&Zs(n,n.return);break;case 5:if(Qn(e,t),hi(t),i&512&&n!==null&&Zs(n,n.return),t.flags&32){var r=t.stateNode;try{la(r,"")}catch(y){Mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&q0(r,s),Nf(a,o);var c=Nf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?j0(r,f):u==="dangerouslySetInnerHTML"?$0(r,f):u==="children"?la(r,f):gd(r,u,f,c)}switch(a){case"input":Rf(r,s);break;case"textarea":Y0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Js(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Js(r,!!s.multiple,s.defaultValue,!0):Js(r,!!s.multiple,s.multiple?[]:"",!1))}r[va]=s}catch(y){Mt(t,t.return,y)}}break;case 6:if(Qn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Mt(t,t.return,y)}}break;case 3:if(Qn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(y){Mt(t,t.return,y)}break;case 4:Qn(e,t),hi(t);break;case 13:Qn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($d=Et())),i&4&&I0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||u,Qn(e,t),jt=c):Qn(e,t),hi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(Me=t,u=t.child;u!==null;){for(f=Me=u;Me!==null;){switch(d=Me,p=d.child,d.tag){case 0:case 11:case 14:case 15:ra(4,d,d.return);break;case 1:Zs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Mt(i,n,y)}}break;case 5:Zs(d,d.return);break;case 22:if(d.memoizedState!==null){U0(f);continue}}p!==null?(p.return=d,Me=p):U0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=J0("display",o))}catch(y){Mt(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qn(e,t),hi(t),i&4&&I0(t);break;case 21:break;default:Qn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(M_(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(la(r,""),i.flags&=-33);var s=L0(t);cd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=L0(t);ld(t,a,o);break;default:throw Error(ae(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NA(t,e,n){Me=t,T_(t,e,n)}function T_(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=oc;var c=jt;if(oc=o,(jt=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?D0(r):l!==null?(l.return=o,Me=l):D0(r);for(;s!==null;)Me=s,T_(s,e,n),s=s.sibling;Me=r,oc=a,jt=c}N0(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,Me=s):N0(t,e,n)}}function N0(t){for(;Me!==null;){var e=Me;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:jt||Jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&v0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}v0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}jt||e.flags&512&&ad(e)}catch(d){Mt(e,e.return,d)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function U0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function D0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jc(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{ad(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var UA=Math.ceil,Oc=Fi.ReactCurrentDispatcher,Yd=Fi.ReactCurrentOwner,On=Fi.ReactCurrentBatchConfig,tt=0,Dt=null,At=null,Ht=0,xn=0,$s=yr(0),Pt=0,Ea=null,Kr=0,jc=0,Zd=0,sa=null,hn=null,$d=0,lo=1/0,bi=null,zc=!1,ud=null,dr=null,ac=!1,ar=null,kc=0,oa=0,hd=null,mc=-1,gc=0;function sn(){return(tt&6)!==0?Et():mc!==-1?mc:mc=Et()}function pr(t){return(t.mode&1)===0?1:(tt&2)!==0&&Ht!==0?Ht&-Ht:vA.transition!==null?(gc===0&&(gc=cv()),gc):(t=nt,t!==0||(t=window.event,t=t===void 0?16:gv(t.type)),t)}function ri(t,e,n,i){if(50<oa)throw oa=0,hd=null,Error(ae(185));wa(t,n,i),((tt&2)===0||t!==Dt)&&(t===Dt&&((tt&2)===0&&(jc|=n),Pt===4&&sr(t,Ht)),mn(t,i),n===1&&tt===0&&(e.mode&1)===0&&(lo=Et()+500,Yc&&xr()))}function mn(t,e){var n=t.callbackNode;yT(t,e);var i=Mc(t,t===Dt?Ht:0);if(i===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?gA(F0.bind(null,t)):Dv(F0.bind(null,t)),fA(function(){(tt&6)===0&&xr()}),n=null;else{switch(uv(i)){case 1:n=Sd;break;case 4:n=av;break;case 16:n=Sc;break;case 536870912:n=lv;break;default:n=Sc}n=N_(n,A_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A_(t,e){if(mc=-1,gc=0,(tt&6)!==0)throw Error(ae(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var i=Mc(t,t===Dt?Ht:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Bc(t,i);else{e=i;var r=tt;tt|=2;var s=R_();(Dt!==t||Ht!==e)&&(bi=null,lo=Et()+500,Yr(t,e));do try{OA();break}catch(a){b_(t,a)}while(!0);Ud(),Oc.current=s,tt=r,At!==null?e=0:(Dt=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=zf(t),r!==0&&(i=r,e=fd(t,r))),e===1)throw n=Ea,Yr(t,0),sr(t,i),mn(t,Et()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,(i&30)===0&&!DA(r)&&(e=Bc(t,i),e===2&&(s=zf(t),s!==0&&(i=s,e=fd(t,s))),e===1))throw n=Ea,Yr(t,0),sr(t,i),mn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Gr(t,hn,bi);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=$d+500-Et(),10<e)){if(Mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qf(Gr.bind(null,t,hn,bi),e);break}Gr(t,hn,bi);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*UA(i/1960))-i,10<i){t.timeoutHandle=qf(Gr.bind(null,t,hn,bi),i);break}Gr(t,hn,bi);break;case 5:Gr(t,hn,bi);break;default:throw Error(ae(329))}}}return mn(t,Et()),t.callbackNode===n?A_.bind(null,t):null}function fd(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=hn,hn=n,e!==null&&dd(e)),t}function dd(t){hn===null?hn=t:hn.push.apply(hn,t)}function DA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~Zd,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function F0(t){if((tt&6)!==0)throw Error(ae(327));to();var e=Mc(t,0);if((e&1)===0)return mn(t,Et()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var i=zf(t);i!==0&&(e=i,n=fd(t,i))}if(n===1)throw n=Ea,Yr(t,0),sr(t,e),mn(t,Et()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,hn,bi),mn(t,Et()),null}function Jd(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(lo=Et()+500,Yc&&xr())}}function Qr(t){ar!==null&&ar.tag===0&&(tt&6)===0&&to();var e=tt;tt|=1;var n=On.transition,i=nt;try{if(On.transition=null,nt=1,t)return t()}finally{nt=i,On.transition=n,tt=e,(tt&6)===0&&xr()}}function jd(){xn=$s.current,ut($s)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hA(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Ld(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bc();break;case 3:oo(),ut(dn),ut(Kt),Bd();break;case 5:kd(i);break;case 4:oo();break;case 13:ut(_t);break;case 19:ut(_t);break;case 10:Dd(i.type._context);break;case 22:case 23:jd()}n=n.return}if(Dt=t,At=t=mr(t.current,null),Ht=xn=e,Pt=0,Ea=null,Zd=jc=Kr=0,hn=sa=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Xr=null}return t}function b_(t,e){do{var n=At;try{if(Ud(),fc.current=Fc,Dc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dc=!1}if(jr=0,Ut=Ct=yt=null,ia=!1,xa=0,Yd.current=null,n===null||n.return===null){Pt=1,Ea=e,At=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=E0(o);if(p!==null){p.flags&=-257,w0(p,o,a,s,e),p.mode&1&&M0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if((e&1)===0){M0(s,c,e),Kd();break e}l=Error(ae(426))}}else if(pt&&a.mode&1){var g=E0(o);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),w0(g,o,a,s,e),Id(ao(l,a));break e}}s=l=ao(l,a),Pt!==4&&(Pt=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=u_(s,l,e);g0(s,h);break e;case 1:a=l;var v=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dr===null||!dr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=h_(s,a,e);g0(s,S);break e}}s=s.return}while(s!==null)}P_(n)}catch(R){e=R,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function R_(){var t=Oc.current;return Oc.current=Fc,t===null?Fc:t}function Kd(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Dt===null||(Kr&268435455)===0&&(jc&268435455)===0||sr(Dt,Ht)}function Bc(t,e){var n=tt;tt|=2;var i=R_();(Dt!==t||Ht!==e)&&(bi=null,Yr(t,e));do try{FA();break}catch(r){b_(t,r)}while(!0);if(Ud(),tt=n,Oc.current=i,At!==null)throw Error(ae(261));return Dt=null,Ht=0,Pt}function FA(){for(;At!==null;)C_(At)}function OA(){for(;At!==null&&!uT();)C_(At)}function C_(t){var e=I_(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?P_(t):At=e,Yd.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=CA(n,e,xn),n!==null){At=n;return}}else{if(n=PA(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,At=null;return}}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Pt===0&&(Pt=5)}function Gr(t,e,n){var i=nt,r=On.transition;try{On.transition=null,nt=1,zA(t,e,n,i)}finally{On.transition=r,nt=i}return null}function zA(t,e,n,i){do to();while(ar!==null);if((tt&6)!==0)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xT(t,s),t===Dt&&(At=Dt=null,Ht=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ac||(ac=!0,N_(Sc,function(){return to(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=On.transition,On.transition=null;var o=nt;nt=1;var a=tt;tt|=4,Yd.current=null,IA(t,n),w_(n,t),oA(Wf),Ec=!!Gf,Wf=Gf=null,t.current=n,NA(n,t,r),hT(),tt=a,nt=o,On.transition=s}else t.current=n;if(ac&&(ac=!1,ar=t,kc=r),s=t.pendingLanes,s===0&&(dr=null),pT(n.stateNode,i),mn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zc)throw zc=!1,t=ud,ud=null,t;return(kc&1)!==0&&t.tag!==0&&to(),s=t.pendingLanes,(s&1)!==0?t===hd?oa++:(oa=0,hd=t):oa=0,xr(),null}function to(){if(ar!==null){var t=uv(kc),e=On.transition,n=nt;try{if(On.transition=null,nt=16>t?16:t,ar===null)var i=!1;else{if(t=ar,ar=null,kc=0,(tt&6)!==0)throw Error(ae(331));var r=tt;for(tt|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if((Me.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:ra(8,u,s)}var f=u.child;if(f!==null)f.return=u,Me=f;else for(;Me!==null;){u=Me;var d=u.sibling,p=u.return;if(S_(u),u===c){Me=null;break}if(d!==null){d.return=p,Me=d;break}Me=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Me=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Me=h;break e}Me=s.return}}var v=t.current;for(Me=v;Me!==null;){o=Me;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,Me=m;else e:for(o=v;Me!==null;){if(a=Me,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Jc(9,a)}}catch(R){Mt(a,a.return,R)}if(a===o){Me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Me=S;break e}Me=a.return}}if(tt=r,xr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Hc,t)}catch{}i=!0}return i}finally{nt=n,On.transition=e}}return!1}function O0(t,e,n){e=ao(n,e),e=u_(t,e,1),t=fr(t,e,1),e=sn(),t!==null&&(wa(t,1,e),mn(t,e))}function Mt(t,e,n){if(t.tag===3)O0(t,t,n);else for(;e!==null;){if(e.tag===3){O0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=ao(n,t),t=h_(e,t,1),e=fr(e,t,1),t=sn(),e!==null&&(wa(e,1,t),mn(e,t));break}}e=e.return}}function kA(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>Et()-$d?Yr(t,0):Zd|=n),mn(t,e)}function L_(t,e){e===0&&((t.mode&1)===0?e=1:(e=Yl,Yl<<=1,(Yl&130023424)===0&&(Yl=4194304)));var n=sn();t=Ui(t,e),t!==null&&(wa(t,e,n),mn(t,n))}function BA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L_(t,n)}function VA(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),L_(t,n)}var I_;I_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)fn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return fn=!1,RA(t,e,n);fn=(t.flags&131072)!==0}else fn=!1,pt&&(e.flags&1048576)!==0&&Fv(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pc(t,e),t=e.pendingProps;var r=io(e,Kt.current);eo(e,n),r=Hd(null,e,i,t,r,n);var s=Gd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Od(e),r.updater=$c,e.stateNode=r,r._reactInternals=e,Qf(e,i,t,n),e=nd(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Pd(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=GA(i),t=ei(i,t),r){case 0:e=td(null,e,i,t,n);break e;case 1:e=b0(null,e,i,t,n);break e;case 11:e=T0(null,e,i,t,n);break e;case 14:e=A0(null,e,i,ei(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),b0(t,e,i,r,n);case 3:e:{if(m_(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hv(t,e),Nc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(ae(423)),e),e=R0(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(ae(424)),e),e=R0(t,e,i,n,r);break e}else for(Sn=hr(e.stateNode.containerInfo.firstChild),Mn=e,pt=!0,ni=null,n=Bv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=Di(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return Gv(e),t===null&&Jf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xf(i,r)?o=null:s!==null&&Xf(i,s)&&(e.flags|=32),p_(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&Jf(e),null;case 13:return g_(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),T0(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Lc,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!dn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,eo(e,n),r=zn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),A0(t,e,i,r,n);case 15:return f_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),pc(t,e),e.tag=1,pn(i)?(t=!0,Rc(e)):t=!1,eo(e,n),c_(e,i,r),Qf(e,i,r,n),nd(null,e,i,!0,t,n);case 19:return v_(t,e,n);case 22:return d_(t,e,n)}throw Error(ae(156,e.tag))};function N_(t,e){return ov(t,e)}function HA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new HA(t,e,n,i)}function Qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GA(t){if(typeof t=="function")return Qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_d)return 11;if(t===yd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return Zr(n.children,r,s,e);case vd:o=8,r|=8;break;case Ef:return t=Fn(12,n,e,r|2),t.elementType=Ef,t.lanes=s,t;case wf:return t=Fn(13,n,e,r),t.elementType=wf,t.lanes=s,t;case Tf:return t=Fn(19,n,e,r),t.elementType=Tf,t.lanes=s,t;case G0:return Kc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:o=10;break e;case H0:o=9;break e;case _d:o=11;break e;case yd:o=14;break e;case nr:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Zr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Kc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=G0,t.lanes=n,t.stateNode={isHidden:!1},t}function xf(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Sf(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rf(0),this.expirationTimes=rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ep(t,e,n,i,r,s,o,a,l){return t=new WA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Od(s),t}function XA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function U_(t){if(!t)return vr;t=t._reactInternals;e:{if(ts(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(pn(n))return Uv(t,n,e)}return e}function D_(t,e,n,i,r,s,o,a,l){return t=ep(n,i,!0,t,r,s,o,a,l),t.context=U_(null),n=t.current,i=sn(),r=pr(n),s=Li(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,wa(t,r,i),mn(t,i),t}function Qc(t,e,n,i){var r=e.current,s=sn(),o=pr(r);return n=U_(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,o),t!==null&&(ri(t,r,o,s),hc(t,r,o)),o}function Vc(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function z0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tp(t,e){z0(t,e),(t=t.alternate)&&z0(t,e)}function qA(){return null}var F_=typeof reportError=="function"?reportError:function(t){console.error(t)};function np(t){this._internalRoot=t}eu.prototype.render=np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Qc(t,e,null,null)};eu.prototype.unmount=np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Qc(null,t,null,null)}),e[Ni]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&mv(t)}};function ip(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function k0(){}function YA(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vc(o);s.call(c)}}var o=D_(e,i,t,0,null,!1,!1,"",k0);return t._reactRootContainer=o,t[Ni]=o.current,ma(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Vc(l);a.call(c)}}var l=ep(t,0,!1,null,null,!1,!1,"",k0);return t._reactRootContainer=l,t[Ni]=l.current,ma(t.nodeType===8?t.parentNode:t),Qr(function(){Qc(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vc(o);a.call(l)}}Qc(e,o,t,r)}else o=YA(n,e,t,r,i);return Vc(o)}hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Md(e,n|1),mn(e,Et()),(tt&6)===0&&(lo=Et()+500,xr()))}break;case 13:Qr(function(){var i=Ui(t,1);if(i!==null){var r=sn();ri(i,t,1,r)}}),tp(t,1)}};Ed=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=sn();ri(e,t,134217728,n)}tp(t,134217728)}};fv=function(t){if(t.tag===13){var e=pr(t),n=Ui(t,e);if(n!==null){var i=sn();ri(n,t,e,i)}tp(t,e)}};dv=function(){return nt};pv=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Df=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qc(i);if(!r)throw Error(ae(90));X0(i),Rf(i,r)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};ev=Jd;tv=Qr;var ZA={usingClientEntryPoint:!1,Events:[Aa,Gs,qc,K0,Q0,Jd]},qo={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$A={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rv(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||qA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Yo.isDisabled&&Yo.supportsFiber))try{Hc=Yo.inject($A),pi=Yo}catch{}var Yo;Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZA;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(e))throw Error(ae(200));return XA(t,e,null,n)};Tn.createRoot=function(t,e){if(!ip(t))throw Error(ae(299));var n=!1,i="",r=F_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ep(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ma(t.nodeType===8?t.parentNode:t),new np(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=rv(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Qr(t)};Tn.hydrate=function(t,e,n){if(!tu(e))throw Error(ae(200));return nu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!ip(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=F_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D_(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};Tn.render=function(t,e,n){if(!tu(e))throw Error(ae(200));return nu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!tu(t))throw Error(ae(40));return t._reactRootContainer?(Qr(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Tn.unstable_batchedUpdates=Jd;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return nu(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426"});var B_=wr((Nb,k_)=>{"use strict";function z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z_)}catch(t){console.error(t)}}z_(),k_.exports=O_()});var H_=wr(rp=>{"use strict";var V_=B_();rp.createRoot=V_.createRoot,rp.hydrateRoot=V_.hydrateRoot;var Ub});var Ye=lp(fu());var _y=0,Mp=1,yy=2;var Zm=1,xy=2,Si=3,Ji=0,un=1,Wn=2;var Yi=0,Es=1,Ep=2,wp=3,Tp=4,Sy=5,Pr=100,My=101,Ey=102,Ap=103,bp=104,wy=200,Ty=201,Ay=202,by=203,Yu=204,Zu=205,Ry=206,Cy=207,Py=208,Ly=209,Iy=210,Ny=211,Uy=212,Dy=213,Fy=214,Oy=0,zy=1,ky=2,rl=3,By=4,Vy=5,Hy=6,Gy=7,$m=0,Wy=1,Xy=2,Zi=0,qy=1,Yy=2,Zy=3,$y=4,Jy=5,jy=6;var Jm=300,As=301,bs=302,$u=303,Ju=304,Ll=306,ju=1e3,Xn=1001,Ku=1002,nn=1003,Rp=1004;var du=1005;var Rn=1006,Ky=1007;var wo=1008;var $i=1009,Qy=1010,ex=1011,zh=1012,jm=1013,Wi=1014,Xi=1015,To=1016,Km=1017,Qm=1018,Ir=1020,tx=1021,qn=1023,nx=1024,ix=1025,Nr=1026,Rs=1027,rx=1028,eg=1029,sx=1030,tg=1031,ng=1033,pu=33776,mu=33777,gu=33778,vu=33779,Cp=35840,Pp=35841,Lp=35842,Ip=35843,ig=36196,Np=37492,Up=37496,Dp=37808,Fp=37809,Op=37810,zp=37811,kp=37812,Bp=37813,Vp=37814,Hp=37815,Gp=37816,Wp=37817,Xp=37818,qp=37819,Yp=37820,Zp=37821,_u=36492,$p=36494,Jp=36495,ox=36283,jp=36284,Kp=36285,Qp=36286;var sl=2300,ol=2301,yu=2302,em=2400,tm=2401,nm=2402;var rg=3e3,Ur=3001,ax=3200,lx=3201,cx=0,ux=1,Cn="",Tt="srgb",wi="srgb-linear",kh="display-p3",Il="display-p3-linear",al="linear",lt="srgb",ll="rec709",cl="p3";var rs=7680;var im=519,hx=512,fx=513,dx=514,sg=515,px=516,mx=517,gx=518,vx=519,rm=35044;var sm="300 es",Qu=1035,Ei=2e3,ul=2001,ji=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xu=Math.PI/180,eh=180/Math.PI;function Us(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function _x(t,e){return(t%e+e)%e}function Su(t,e,n){return(1-n)*t+n*e}function om(t){return(t&t-1)===0&&t!==0}function th(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var me=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],g=r[3],h=r[6],v=r[1],m=r[4],S=r[7],R=r[2],A=r[5],b=r[8];return s[0]=o*y+a*v+l*R,s[3]=o*g+a*m+l*A,s[6]=o*h+a*S+l*b,s[1]=c*y+u*v+f*R,s[4]=c*g+u*m+f*A,s[7]=c*h+u*S+f*b,s[2]=d*y+p*v+_*R,s[5]=d*g+p*m+_*A,s[8]=d*h+p*S+_*b,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mu=new Je;function og(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yx(){let t=hl("canvas");return t.style.display="block",t}var am={};function yo(t){t in am||(am[t]=!0,console.warn(t))}var lm=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cm=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[wi]:{transfer:al,primaries:ll,toReference:t=>t,fromReference:t=>t},[Tt]:{transfer:lt,primaries:ll,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Il]:{transfer:al,primaries:cl,toReference:t=>t.applyMatrix3(cm),fromReference:t=>t.applyMatrix3(lm)},[kh]:{transfer:lt,primaries:cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(cm),fromReference:t=>t.applyMatrix3(lm).convertLinearToSRGB()}},xx=new Set([wi,Il]),rt={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!xx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=Ia[e].toReference,r=Ia[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ia[t].primaries},getTransfer:function(t){return t===Cn?al:Ia[t].transfer}};function ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var ss,fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=hl("canvas")),ss.width=e.width,ss.height=e.height;let i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=hl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ws(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ws(n[i]/255)*255):n[i]=ws(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sx=0,dl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Us(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wu(r[o].image)):s.push(wu(r[o]))}else s=wu(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function wu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mx=0,Pn=class t extends ji{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Xn,r=Xn,s=Rn,o=wo,a=qn,l=$i,c=t.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Us(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ur?Tt:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ju:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ju:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Ur:rg}set encoding(e){yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Tt:Cn}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Jm;Pn.DEFAULT_ANISOTROPY=1;var zt=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let m=(c+1)/2,S=(p+1)/2,R=(h+1)/2,A=(u+d)/4,b=(f+y)/4,U=(_+g)/4;return m>S&&m>R?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=A/i,s=b/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nh=class extends ji{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);let r={width:e,height:n,depth:1};i.encoding!==void 0&&(yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Tt:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new dl(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends nh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},pl=class extends Pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ih=class extends Pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==_){let g=1-a,h=l*d+c*p+u*_+f*y,v=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){let R=Math.sqrt(m),A=Math.atan2(R,h*v);g=Math.sin(g*A)/R,a=Math.sin(a*A)/R}let S=a*v;if(l=l*g+d*S,c=c*g+p*S,u=u*g+_*S,f=f*g+y*S,g===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tu=new N,um=new Ki,Dr=class{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Ua.subVectors(this.max,mo),os.subVectors(e.a,mo),as.subVectors(e.b,mo),ls.subVectors(e.c,mo),ki.subVectors(as,os),Bi.subVectors(ls,as),Tr.subVectors(os,ls);let n=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-Tr.z,Tr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,Tr.z,0,-Tr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-Tr.y,Tr.x,0];return!Au(n,os,as,ls,Ua)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,os,as,ls,Ua))?!1:(Da.crossVectors(ki,Bi),n=[Da.x,Da.y,Da.z],Au(n,os,as,ls,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new N,new N,new N,new N,new N,new N,new N,new N],Vn=new N,Na=new Dr,os=new N,as=new N,ls=new N,ki=new N,Bi=new N,Tr=new N,mo=new N,Ua=new N,Da=new N,Ar=new N;function Au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ar.fromArray(t,s);let a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ex=new Dr,go=new N,bu=new N,Ao=class{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Ex.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);let n=go.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(bu)),this.expandByPoint(go.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new N,Ru=new N,Fa=new N,Vi=new N,Cu=new N,Oa=new N,Pu=new N,rh=class{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ru.copy(e).add(n).multiplyScalar(.5),Fa.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(Ru);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Fa),a=Vi.dot(this.direction),l=-Vi.dot(Fa),c=Vi.lengthSq(),u=Math.abs(1-o*o),f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){let y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ru).addScaledVector(Fa,d),p}intersectSphere(e,n){vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){Cu.subVectors(n,e),Oa.subVectors(i,e),Pu.crossVectors(Cu,Oa);let o=this.direction.dot(Pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);let l=a*this.direction.dot(Oa.crossVectors(Vi,Oa));if(l<0)return null;let c=a*this.direction.dot(Cu.cross(Vi));if(c<0||l+c>o)return null;let u=-a*Vi.dot(Pu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class t{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,_,y,g){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,y,g)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,y,g){let h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*f,_=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*f,_=c*u,y=c*f;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*f,_=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*f,_=a*u,y=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-y*f}else if(e.order==="XZY"){let d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Tx)}lookAt(e,n,i){let r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Hi.crossVectors(i,vn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Hi.crossVectors(i,vn)),Hi.normalize(),za.crossVectors(vn,Hi),r[0]=Hi.x,r[4]=za.x,r[8]=vn.x,r[1]=Hi.y,r[5]=za.y,r[9]=vn.y,r[2]=Hi.z,r[6]=za.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],g=i[10],h=i[14],v=i[3],m=i[7],S=i[11],R=i[15],A=r[0],b=r[4],U=r[8],E=r[12],T=r[1],I=r[5],Z=r[9],te=r[13],P=r[2],O=r[6],G=r[10],X=r[14],q=r[3],Y=r[7],j=r[11],re=r[15];return s[0]=o*A+a*T+l*P+c*q,s[4]=o*b+a*I+l*O+c*Y,s[8]=o*U+a*Z+l*G+c*j,s[12]=o*E+a*te+l*X+c*re,s[1]=u*A+f*T+d*P+p*q,s[5]=u*b+f*I+d*O+p*Y,s[9]=u*U+f*Z+d*G+p*j,s[13]=u*E+f*te+d*X+p*re,s[2]=_*A+y*T+g*P+h*q,s[6]=_*b+y*I+g*O+h*Y,s[10]=_*U+y*Z+g*G+h*j,s[14]=_*E+y*te+g*X+h*re,s[3]=v*A+m*T+S*P+R*q,s[7]=v*b+m*I+S*O+R*Y,s[11]=v*U+m*Z+S*G+R*j,s[15]=v*E+m*te+S*X+R*re,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],g=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],g=e[14],h=e[15],v=f*g*c-y*d*c+y*l*p-a*g*p-f*l*h+a*d*h,m=_*d*c-u*g*c-_*l*p+o*g*p+u*l*h-o*d*h,S=u*y*c-_*f*c+_*a*p-o*y*p-u*a*h+o*f*h,R=_*f*l-u*y*l-_*a*d+o*y*d+u*a*g-o*f*g,A=n*v+i*m+r*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return e[0]=v*b,e[1]=(y*d*s-f*g*s-y*r*p+i*g*p+f*r*h-i*d*h)*b,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*h+i*l*h)*b,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*b,e[4]=m*b,e[5]=(u*g*s-_*d*s+_*r*p-n*g*p-u*r*h+n*d*h)*b,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*h-n*l*h)*b,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*b,e[8]=S*b,e[9]=(_*f*s-u*y*s-_*i*p+n*y*p+u*i*h-n*f*h)*b,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*h+n*a*h)*b,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*b,e[12]=R*b,e[13]=(u*y*r-_*f*r+_*i*d-n*y*d-u*i*g+n*f*g)*b,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*b,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*b,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,y=o*u,g=o*f,h=a*f,v=l*c,m=l*u,S=l*f,R=i.x,A=i.y,b=i.z;return r[0]=(1-(y+h))*R,r[1]=(p+S)*R,r[2]=(_-m)*R,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+h))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(_+m)*b,r[9]=(g-v)*b,r[10]=(1-(d+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=cs.set(r[0],r[1],r[2]).length(),o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);let c=1/s,u=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){let l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),p,_;if(a===Ei)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ul)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){let l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u,_,y;if(a===Ei)_=(o+s)*f,y=-2*f;else if(a===ul)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},cs=new N,Hn=new kt,wx=new N(0,0,0),Tx=new N(1,1,1),Hi=new N,za=new N,vn=new N,hm=new kt,fm=new Ki,Cs=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cs.DEFAULT_ORDER="XYZ";var ml=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ax=0,dm=new N,us=new Ki,_i=new kt,ka=new N,vo=new N,bx=new N,Rx=new Ki,pm=new N(1,0,0),mm=new N(0,1,0),gm=new N(0,0,1),Cx={type:"added"},Px={type:"removed"},Zn=class t extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new N,n=new Cs,i=new Ki,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new Je}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,n){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ka.copy(e):ka.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(vo,ka,this.up):_i.lookAt(ka,vo,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),us.setFromRotationMatrix(_i),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Px)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++){let s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Zn.DEFAULT_UP=new N(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new N,yi=new N,Lu=new N,xi=new N,hs=new N,fs=new N,vm=new N,Iu=new N,Nu=new N,Uu=new N,Ba=!1,qi=class t{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),yi.subVectors(i,n),Lu.subVectors(e,n);let o=Gn.dot(Gn),a=Gn.dot(yi),l=Gn.dot(Lu),c=yi.dot(yi),u=yi.dot(Lu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),yi.subVectors(e,n),Gn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Gn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;hs.subVectors(r,i),fs.subVectors(s,i),Iu.subVectors(e,i);let l=hs.dot(Iu),c=fs.dot(Iu);if(l<=0&&c<=0)return n.copy(i);Nu.subVectors(e,r);let u=hs.dot(Nu),f=fs.dot(Nu);if(u>=0&&f<=u)return n.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(hs,o);Uu.subVectors(e,s);let p=hs.dot(Uu),_=fs.dot(Uu);if(_>=0&&p<=_)return n.copy(s);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(fs,a);let g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return vm.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(vm,a);let h=1/(g+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(hs,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Qe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=_x(e,1),n=Ot(n,0,1),i=Ot(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tt){let i=ag[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return rt.fromWorkingColorSpace(qt.copy(this),e),Math.round(Ot(qt.r*255,0,255))*65536+Math.round(Ot(qt.g*255,0,255))*256+Math.round(Ot(qt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(qt.copy(this),n);let i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Tt){rt.fromWorkingColorSpace(qt.copy(this),e);let n=qt.r,i=qt.g,r=qt.b;return e!==Tt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(Va);let i=Su(Gi.h,Va.h,n),r=Su(Gi.s,Va.s,n),s=Su(Gi.l,Va.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Qe;Qe.NAMES=ag;var Lx=0,Ps=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Es,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=Zu,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yu&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ai=class extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new N,Ha=new me,Nt=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ha.fromBufferAttribute(this,n),Ha.applyMatrix3(e),this.setXY(n,Ha.x,Ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rm&&(e.usage=this.usage),e}};var gl=class extends Nt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var vl=class extends Nt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Bt=class extends Nt{constructor(e,n,i){super(new Float32Array(e),n,i)}};var Ix=0,bn=new kt,Fu=new Zn,ds=new N,_n=new Dr,_o=new Dr,It=new N,$n=class t extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?vl:gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(_n.min,_o.min),_n.expandByPoint(It),It.addVectors(_n.max,_o.max),_n.expandByPoint(It)):(_n.expandByPoint(_o.min),_n.expandByPoint(_o.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),It.add(ds)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new N,u[T]=new N;let f=new N,d=new N,p=new N,_=new me,y=new me,g=new me,h=new N,v=new N;function m(T,I,Z){f.fromArray(r,T*3),d.fromArray(r,I*3),p.fromArray(r,Z*3),_.fromArray(o,T*2),y.fromArray(o,I*2),g.fromArray(o,Z*2),d.sub(f),p.sub(f),y.sub(_),g.sub(_);let te=1/(y.x*g.y-g.x*y.y);isFinite(te)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(te),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(te),c[T].add(h),c[I].add(h),c[Z].add(h),u[T].add(v),u[I].add(v),u[Z].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,I=S.length;T<I;++T){let Z=S[T],te=Z.start,P=Z.count;for(let O=te,G=te+P;O<G;O+=3)m(i[O+0],i[O+1],i[O+2])}let R=new N,A=new N,b=new N,U=new N;function E(T){b.fromArray(s,T*3),U.copy(b);let I=c[T];R.copy(I),R.sub(b.multiplyScalar(b.dot(I))).normalize(),A.crossVectors(U,I);let te=A.dot(u[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=te}for(let T=0,I=S.length;T<I;++T){let Z=S[T],te=Z.start,P=Z.count;for(let O=te,G=te+P;O<G;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Nt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_m=new kt,br=new rh,Ga=new Ao,ym=new N,ps=new N,ms=new N,gs=new N,Ou=new N,Wa=new N,Xa=new me,qa=new me,Ya=new me,xm=new N,Sm=new N,Mm=new N,Za=new N,$a=new N,Yt=class extends Zn{constructor(e=new $n,n=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(Ou.fromBufferAttribute(f,e),o?Wa.addScaledVector(Ou,u):Wa.addScaledVector(Ou.sub(n),u))}n.add(Wa)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Ga.containsPoint(br.origin)===!1&&(br.intersectSphere(Ga,ym)===null||br.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(_m.copy(s).invert(),br.copy(e.ray).applyMatrix4(_m),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,R=m;S<R;S+=3){let A=a.getX(S),b=a.getX(S+1),U=a.getX(S+2);r=Ja(this,h,e,i,c,u,f,A,b,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){let v=a.getX(g),m=a.getX(g+1),S=a.getX(g+2);r=Ja(this,o,e,i,c,u,f,v,m,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,R=m;S<R;S+=3){let A=S,b=S+1,U=S+2;r=Ja(this,h,e,i,c,u,f,A,b,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,h=y;g<h;g+=3){let v=g,m=g+1,S=g+2;r=Ja(this,o,e,i,c,u,f,v,m,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function Nx(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo($a);return c<n.near||c>n.far?null:{distance:c,point:$a.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ps),t.getVertexPosition(l,ms),t.getVertexPosition(c,gs);let u=Nx(t,e,n,i,ps,ms,gs,Za);if(u){r&&(Xa.fromBufferAttribute(r,a),qa.fromBufferAttribute(r,l),Ya.fromBufferAttribute(r,c),u.uv=qi.getInterpolation(Za,ps,ms,gs,Xa,qa,Ya,new me)),s&&(Xa.fromBufferAttribute(s,a),qa.fromBufferAttribute(s,l),Ya.fromBufferAttribute(s,c),u.uv1=qi.getInterpolation(Za,ps,ms,gs,Xa,qa,Ya,new me),u.uv2=u.uv1),o&&(xm.fromBufferAttribute(o,a),Sm.fromBufferAttribute(o,l),Mm.fromBufferAttribute(o,c),u.normal=qi.getInterpolation(Za,ps,ms,gs,xm,Sm,Mm,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};qi.getNormal(ps,ms,gs,f.normal),u.face=f}return u}var Fr=class t extends $n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function _(y,g,h,v,m,S,R,A,b,U,E){let T=S/b,I=R/U,Z=S/2,te=R/2,P=A/2,O=b+1,G=U+1,X=0,q=0,Y=new N;for(let j=0;j<G;j++){let re=j*I-te;for(let ge=0;ge<O;ge++){let W=ge*T-Z;Y[y]=W*v,Y[g]=re*m,Y[h]=P,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[g]=0,Y[h]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(ge/b),f.push(1-j/U),X+=1}}for(let j=0;j<U;j++)for(let re=0;re<b;re++){let ge=d+re+O*j,W=d+re+O*(j+1),se=d+(re+1)+O*(j+1),_e=d+(re+1)+O*j;l.push(ge,W,_e),l.push(W,se,_e),q+=6}a.addGroup(p,q,E),p+=q,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){let e={};for(let n=0;n<t.length;n++){let i=Ls(t[n]);for(let r in i)e[r]=i[r]}return e}function Ux(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lg(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}var Dx={clone:Ls,merge:tn},Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},_l=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yn=class extends _l{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(xu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},vs=-90,_s=1,sh=class extends Zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(vs,_s,e,n);r.layers=this.layers,this.add(r);let s=new yn(vs,_s,e,n);s.layers=this.layers,this.add(s);let o=new yn(vs,_s,e,n);o.layers=this.layers,this.add(o);let a=new yn(vs,_s,e,n);a.layers=this.layers,this.add(a);let l=new yn(vs,_s,e,n);l.layers=this.layers,this.add(l);let c=new yn(vs,_s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},yl=class extends Pn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:As,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oh=class extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ur?Tt:Cn),this.texture=new yl(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fr(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Yi});s.uniforms.tEquirect.value=n;let o=new Yt(r,s),a=n.minFilter;return n.minFilter===wo&&(n.minFilter=Rn),new sh(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},zu=new N,zx=new N,kx=new Je,Mi=class{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=zu.subVectors(i,n).cross(zx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||kx.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rr=new Ao,ja=new N,xl=class{constructor(e=new Mi,n=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],g=r[11],h=r[12],v=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,g-p,S-h).normalize(),i[1].setComponents(l+s,d+c,g+p,S+h).normalize(),i[2].setComponents(l+o,d+u,g+_,S+v).normalize(),i[3].setComponents(l-o,d-u,g-_,S-v).normalize(),i[4].setComponents(l-a,d-f,g-y,S-m).normalize(),n===Ei)i[5].setComponents(l+a,d+f,g+y,S+m).normalize();else if(n===ul)i[5].setComponents(a,f,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Bx(t,e){let n=e.isWebGL2,i=new WeakMap;function r(c,u){let f=c.array,d=c.usage,p=f.byteLength,_=t.createBuffer();t.bindBuffer(u,_),t.bufferData(u,f,d),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){let d=u.array,p=u._updateRange,_=u.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&_.length===0&&t.bufferSubData(f,0,d),_.length!==0){for(let y=0,g=_.length;y<g;y++){let h=_[y];n?t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):t.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}var Is=class t extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],y=[],g=[];for(let h=0;h<u;h++){let v=h*d-o;for(let m=0;m<c;m++){let S=m*f-s;_.push(S,-v,0),y.push(0,0,1),g.push(m/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){let m=v+c*h,S=v+c*(h+1),R=v+1+c*(h+1),A=v+1+c*h;p.push(m,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$x=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,US=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$M=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Vx,alphahash_pars_fragment:Hx,alphamap_fragment:Gx,alphamap_pars_fragment:Wx,alphatest_fragment:Xx,alphatest_pars_fragment:qx,aomap_fragment:Yx,aomap_pars_fragment:Zx,batching_pars_vertex:$x,batching_vertex:Jx,begin_vertex:jx,beginnormal_vertex:Kx,bsdfs:Qx,iridescence_fragment:eS,bumpmap_pars_fragment:tS,clipping_planes_fragment:nS,clipping_planes_pars_fragment:iS,clipping_planes_pars_vertex:rS,clipping_planes_vertex:sS,color_fragment:oS,color_pars_fragment:aS,color_pars_vertex:lS,color_vertex:cS,common:uS,cube_uv_reflection_fragment:hS,defaultnormal_vertex:fS,displacementmap_pars_vertex:dS,displacementmap_vertex:pS,emissivemap_fragment:mS,emissivemap_pars_fragment:gS,colorspace_fragment:vS,colorspace_pars_fragment:_S,envmap_fragment:yS,envmap_common_pars_fragment:xS,envmap_pars_fragment:SS,envmap_pars_vertex:MS,envmap_physical_pars_fragment:US,envmap_vertex:ES,fog_vertex:wS,fog_pars_vertex:TS,fog_fragment:AS,fog_pars_fragment:bS,gradientmap_pars_fragment:RS,lightmap_fragment:CS,lightmap_pars_fragment:PS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:IS,lights_pars_begin:NS,lights_toon_fragment:DS,lights_toon_pars_fragment:FS,lights_phong_fragment:OS,lights_phong_pars_fragment:zS,lights_physical_fragment:kS,lights_physical_pars_fragment:BS,lights_fragment_begin:VS,lights_fragment_maps:HS,lights_fragment_end:GS,logdepthbuf_fragment:WS,logdepthbuf_pars_fragment:XS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:YS,map_fragment:ZS,map_pars_fragment:$S,map_particle_fragment:JS,map_particle_pars_fragment:jS,metalnessmap_fragment:KS,metalnessmap_pars_fragment:QS,morphcolor_vertex:eM,morphnormal_vertex:tM,morphtarget_pars_vertex:nM,morphtarget_vertex:iM,normal_fragment_begin:rM,normal_fragment_maps:sM,normal_pars_fragment:oM,normal_pars_vertex:aM,normal_vertex:lM,normalmap_pars_fragment:cM,clearcoat_normal_fragment_begin:uM,clearcoat_normal_fragment_maps:hM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:dM,opaque_fragment:pM,packing:mM,premultiplied_alpha_fragment:gM,project_vertex:vM,dithering_fragment:_M,dithering_pars_fragment:yM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:SM,shadowmap_pars_fragment:MM,shadowmap_pars_vertex:EM,shadowmap_vertex:wM,shadowmask_pars_fragment:TM,skinbase_vertex:AM,skinning_pars_vertex:bM,skinning_vertex:RM,skinnormal_vertex:CM,specularmap_fragment:PM,specularmap_pars_fragment:LM,tonemapping_fragment:IM,tonemapping_pars_fragment:NM,transmission_fragment:UM,transmission_pars_fragment:DM,uv_pars_fragment:FM,uv_pars_vertex:OM,uv_vertex:zM,worldpos_vertex:kM,background_vert:BM,background_frag:VM,backgroundCube_vert:HM,backgroundCube_frag:GM,cube_vert:WM,cube_frag:XM,depth_vert:qM,depth_frag:YM,distanceRGBA_vert:ZM,distanceRGBA_frag:$M,equirect_vert:JM,equirect_frag:jM,linedashed_vert:KM,linedashed_frag:QM,meshbasic_vert:e1,meshbasic_frag:t1,meshlambert_vert:n1,meshlambert_frag:i1,meshmatcap_vert:r1,meshmatcap_frag:s1,meshnormal_vert:o1,meshnormal_frag:a1,meshphong_vert:l1,meshphong_frag:c1,meshphysical_vert:u1,meshphysical_frag:h1,meshtoon_vert:f1,meshtoon_frag:d1,points_vert:p1,points_frag:m1,shadow_vert:g1,shadow_frag:v1,sprite_vert:_1,sprite_frag:y1},de={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ci={basic:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:tn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:tn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:tn([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:tn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:tn([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:tn([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:tn([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:tn([de.lights,de.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ci.physical={uniforms:tn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ka={r:0,b:0,g:0};function x1(t,e,n,i,r,s,o){let a=new Qe(0),l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(g,h){let v=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=(h.backgroundBlurriness>0?n:e).get(m)),m===null?y(a,l):m&&m.isColor&&(y(m,1),v=!0);let S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Ll)?(u===void 0&&(u=new Yt(new Fr(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ls(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=rt.getTransfer(m.colorSpace)!==lt,(f!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Yt(new Is(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ls(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=rt.getTransfer(m.colorSpace)!==lt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,h){g.getRGB(Ka,lg(t)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(g,h=1){a.set(g),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:_}}function S1(t,e,n,i){let r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null),c=l,u=!1;function f(P,O,G,X,q){let Y=!1;if(o){let j=y(X,G,O);c!==j&&(c=j,p(c.object)),Y=h(P,X,G,q),Y&&v(P,X,G,q)}else{let j=O.wireframe===!0;(c.geometry!==X.id||c.program!==G.id||c.wireframe!==j)&&(c.geometry=X.id,c.program=G.id,c.wireframe=j,Y=!0)}q!==null&&n.update(q,t.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,U(P,O,G,X),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function y(P,O,G){let X=G.wireframe===!0,q=a[P.id];q===void 0&&(q={},a[P.id]=q);let Y=q[O.id];Y===void 0&&(Y={},q[O.id]=Y);let j=Y[X];return j===void 0&&(j=g(d()),Y[X]=j),j}function g(P){let O=[],G=[],X=[];for(let q=0;q<r;q++)O[q]=0,G[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:X,object:P,attributes:{},index:null}}function h(P,O,G,X){let q=c.attributes,Y=O.attributes,j=0,re=G.getAttributes();for(let ge in re)if(re[ge].location>=0){let se=q[ge],_e=Y[ge];if(_e===void 0&&(ge==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),ge==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor)),se===void 0||se.attribute!==_e||_e&&se.data!==_e.data)return!0;j++}return c.attributesNum!==j||c.index!==X}function v(P,O,G,X){let q={},Y=O.attributes,j=0,re=G.getAttributes();for(let ge in re)if(re[ge].location>=0){let se=Y[ge];se===void 0&&(ge==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),ge==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));let _e={};_e.attribute=se,se&&se.data&&(_e.data=se.data),q[ge]=_e,j++}c.attributes=q,c.attributesNum=j,c.index=X}function m(){let P=c.newAttributes;for(let O=0,G=P.length;O<G;O++)P[O]=0}function S(P){R(P,0)}function R(P,O){let G=c.newAttributes,X=c.enabledAttributes,q=c.attributeDivisors;G[P]=1,X[P]===0&&(t.enableVertexAttribArray(P),X[P]=1),q[P]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),q[P]=O)}function A(){let P=c.newAttributes,O=c.enabledAttributes;for(let G=0,X=O.length;G<X;G++)O[G]!==P[G]&&(t.disableVertexAttribArray(G),O[G]=0)}function b(P,O,G,X,q,Y,j){j===!0?t.vertexAttribIPointer(P,O,G,q,Y):t.vertexAttribPointer(P,O,G,X,q,Y)}function U(P,O,G,X){if(i.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let q=X.attributes,Y=G.getAttributes(),j=O.defaultAttributeValues;for(let re in Y){let ge=Y[re];if(ge.location>=0){let W=q[re];if(W===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let se=W.normalized,_e=W.itemSize,we=n.get(W);if(we===void 0)continue;let fe=we.buffer,Ie=we.type,Pe=we.bytesPerElement,Ae=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||W.gpuType===jm);if(W.isInterleavedBufferAttribute){let Fe=W.data,C=Fe.stride,ue=W.offset;if(Fe.isInstancedInterleavedBuffer){for(let J=0;J<ge.locationSize;J++)R(ge.location+J,Fe.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let J=0;J<ge.locationSize;J++)S(ge.location+J);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let J=0;J<ge.locationSize;J++)b(ge.location+J,_e/ge.locationSize,Ie,se,C*Pe,(ue+_e/ge.locationSize*J)*Pe,Ae)}else{if(W.isInstancedBufferAttribute){for(let Fe=0;Fe<ge.locationSize;Fe++)R(ge.location+Fe,W.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Fe=0;Fe<ge.locationSize;Fe++)S(ge.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,fe);for(let Fe=0;Fe<ge.locationSize;Fe++)b(ge.location+Fe,_e/ge.locationSize,Ie,se,_e*Pe,_e/ge.locationSize*Fe*Pe,Ae)}}else if(j!==void 0){let se=j[re];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(ge.location,se);break;case 3:t.vertexAttrib3fv(ge.location,se);break;case 4:t.vertexAttrib4fv(ge.location,se);break;default:t.vertexAttrib1fv(ge.location,se)}}}}A()}function E(){Z();for(let P in a){let O=a[P];for(let G in O){let X=O[G];for(let q in X)_(X[q].object),delete X[q];delete O[G]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;let O=a[P.id];for(let G in O){let X=O[G];for(let q in X)_(X[q].object),delete X[q];delete O[G]}delete a[P.id]}function I(P){for(let O in a){let G=a[O];if(G[P.id]===void 0)continue;let X=G[P.id];for(let q in X)_(X[q].object),delete X[q];delete G[P.id]}}function Z(){te(),u=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:m,enableAttribute:S,disableUnusedAttributes:A}}function M1(t,e,n,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,f,d),n.update(f,s,d)}function c(u,f,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function E1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext",a=n.precision!==void 0?n.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,S=o||e.has("OES_texture_float"),R=m&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:A}}function w1(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Mi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){let _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{let v=s?0:i,m=v*4,S=h.clippingState||null;l.value=S,S=u(_,d,m,p);for(let R=0;R!==m;++R)S[R]=n[R];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,_!==!0||g===null){let h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,S=p;m!==y;++m,S+=4)o.copy(f[m]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function T1(t){let e=new WeakMap;function n(o,a){return a===$u?o.mapping=As:a===Ju&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===$u||a===Ju)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new oh(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var bo=class extends _l{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},xs=4,Em=[.125,.215,.35,.446,.526,.582],Lr=20,ku=new bo,wm=new Qe,Bu=null,Vu=0,Hu=0,Cr=(1+Math.sqrt(5))/2,ys=1/Cr,Tm=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Cr,ys),new N(0,Cr,-ys),new N(ys,0,Cr),new N(-ys,0,Cr),new N(Cr,ys,0),new N(-Cr,ys,0)],Sl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Vu,Hu),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:To,format:qn,colorSpace:wi,depthBuffer:!1},r=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(s)),this._blurMaterial=b1(s,e,n)}return r}_compileMaterial(e){let n=new Yt(this._lodPlanes[0],e);this._renderer.compile(n,ku)}_sceneToCubeUV(e,n,i,r){let a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(wm),u.toneMapping=Zi,u.autoClear=!1;let p=new Ai({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new Yt(new Fr,p),y=!1,g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(wm),y=!0);for(let h=0;h<6;h++){let v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let m=this._cubeSize;Qa(r,v*m,h>2?m:0,m,m),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===As||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ku)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tm[(r-1)%Tm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Yt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),y=s/_,g=isFinite(s)?1+Math.floor(u*y):Lr;g>Lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Lr}`);let h=[],v=0;for(let b=0;b<Lr;++b){let U=b/y,E=Math.exp(-U*U/2);h.push(E),b===0?v+=E:b<g&&(v+=2*E)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:m}=this;d.dTheta.value=_,d.mipInt.value=m-i;let S=this._sizeLods[r],R=3*S*(r>m-xs?r-m+xs:0),A=4*(this._cubeSize-S);Qa(n,R,A,3*S,2*S),l.setRenderTarget(n),l.render(f,ku)}};function A1(t){let e=[],n=[],i=[],r=t,s=t-xs+1+Em.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-xs?l=Em[o-t+xs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,y=3,g=2,h=1,v=new Float32Array(y*_*p),m=new Float32Array(g*_*p),S=new Float32Array(h*_*p);for(let A=0;A<p;A++){let b=A%3*2/3-1,U=A>2?0:-1,E=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];v.set(E,y*_*A),m.set(d,g*_*A);let T=[A,A,A,A,A,A];S.set(T,h*_*A)}let R=new $n;R.setAttribute("position",new Nt(v,y)),R.setAttribute("uv",new Nt(m,g)),R.setAttribute("faceIndex",new Nt(S,h)),e.push(R),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Am(t,e,n){let i=new Ti(t,e,n);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function b1(t,e,n){let i=new Float32Array(Lr),r=new N(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function bm(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Rm(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function R1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===$u||l===Ju,u=l===As||l===bs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Sl(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Sl(t));let d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function C1(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P1(t,e,n,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let y=d.morphAttributes[_];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let _ in d)e.update(d[_],t.ARRAY_BUFFER);let p=f.morphAttributes;for(let _ in p){let y=p[_];for(let g=0,h=y.length;g<h;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,_=f.attributes.position,y=0;if(p!==null){let v=p.array;y=p.version;for(let m=0,S=v.length;m<S;m+=3){let R=v[m+0],A=v[m+1],b=v[m+2];d.push(R,A,A,b,b,R)}}else if(_!==void 0){let v=_.array;y=_.version;for(let m=0,S=v.length/3-1;m<S;m+=3){let R=m+0,A=m+1,b=m+2;d.push(R,A,A,b,b,R)}}else return;let g=new(og(d)?vl:gl)(d,1);g.version=y;let h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){let d=s.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function L1(t,e,n,i){let r=i.isWebGL2,s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function u(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function f(p,_,y){if(y===0)return;let g,h;if(r)g=t,h="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](s,_,a,p*l,y),n.update(_,s,y)}function d(p,_,y){if(y===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<y;h++)this.render(p[h]/l,_[h]);else{g.multiDrawElementsWEBGL(s,_,0,a,p,0,y);let h=0;for(let v=0;v<y;v++)h+=_[v];n.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function I1(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function N1(t,e){return t[0]-e[0]}function U1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function D1(t,e,n){let i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0,y=s.get(u);if(y===void 0||y.count!==_){let P=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",P)};y!==void 0&&y.texture.dispose();let v=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],b=u.morphAttributes.color||[],U=0;v===!0&&(U=1),m===!0&&(U=2),S===!0&&(U=3);let E=u.attributes.position.count*U,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let I=new Float32Array(E*T*4*_),Z=new pl(I,E,T,_);Z.type=Xi,Z.needsUpdate=!0;let te=U*4;for(let O=0;O<_;O++){let G=R[O],X=A[O],q=b[O],Y=E*T*4*O;for(let j=0;j<G.count;j++){let re=j*te;v===!0&&(o.fromBufferAttribute(G,j),I[Y+re+0]=o.x,I[Y+re+1]=o.y,I[Y+re+2]=o.z,I[Y+re+3]=0),m===!0&&(o.fromBufferAttribute(X,j),I[Y+re+4]=o.x,I[Y+re+5]=o.y,I[Y+re+6]=o.z,I[Y+re+7]=0),S===!0&&(o.fromBufferAttribute(q,j),I[Y+re+8]=o.x,I[Y+re+9]=o.y,I[Y+re+10]=o.z,I[Y+re+11]=q.itemSize===4?o.w:1)}}y={count:_,texture:Z,size:new me(E,T)},s.set(u,y),u.addEventListener("dispose",P)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];let h=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{let p=d===void 0?0:d.length,_=i[u.id];if(_===void 0||_.length!==p){_=[];for(let m=0;m<p;m++)_[m]=[m,0];i[u.id]=_}for(let m=0;m<p;m++){let S=_[m];S[0]=m,S[1]=d[m]}_.sort(U1);for(let m=0;m<8;m++)m<p&&_[m][1]?(a[m][0]=_[m][0],a[m][1]=_[m][1]):(a[m][0]=Number.MAX_SAFE_INTEGER,a[m][1]=0);a.sort(N1);let y=u.morphAttributes.position,g=u.morphAttributes.normal,h=0;for(let m=0;m<8;m++){let S=a[m],R=S[0],A=S[1];R!==Number.MAX_SAFE_INTEGER&&A?(y&&u.getAttribute("morphTarget"+m)!==y[R]&&u.setAttribute("morphTarget"+m,y[R]),g&&u.getAttribute("morphNormal"+m)!==g[R]&&u.setAttribute("morphNormal"+m,g[R]),r[m]=A,h+=A):(y&&u.hasAttribute("morphTarget"+m)===!0&&u.deleteAttribute("morphTarget"+m),g&&u.hasAttribute("morphNormal"+m)===!0&&u.deleteAttribute("morphNormal"+m),r[m]=0)}let v=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function F1(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var Ml=class extends Pn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Nr,u!==Nr&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nr&&(i=Wi),i===void 0&&u===Rs&&(i=Ir),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ug=new Pn,hg=new Ml(1,1);hg.compareFunction=sg;var fg=new pl,dg=new ih,pg=new yl,Cm=[],Pm=[],Lm=new Float32Array(16),Im=new Float32Array(9),Nm=new Float32Array(4);function Ds(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nl(t,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function O1(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function z1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function k1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function B1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function V1(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(bt(n,i))return;Nm.set(i),t.uniformMatrix2fv(this.addr,!1,Nm),Rt(n,i)}}function H1(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(bt(n,i))return;Im.set(i),t.uniformMatrix3fv(this.addr,!1,Im),Rt(n,i)}}function G1(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(bt(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Rt(n,i)}}function W1(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function X1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function q1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function Y1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function Z1(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function J1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function j1(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function K1(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s=this.type===t.SAMPLER_2D_SHADOW?hg:ug;n.setTexture2D(e||s,r)}function Q1(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dg,r)}function eE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pg,r)}function tE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fg,r)}function nE(t){switch(t){case 5126:return O1;case 35664:return z1;case 35665:return k1;case 35666:return B1;case 35674:return V1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return W1;case 35667:case 35671:return X1;case 35668:case 35672:return q1;case 35669:case 35673:return Y1;case 5125:return Z1;case 36294:return $1;case 36295:return J1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return tE}}function iE(t,e){t.uniform1fv(this.addr,e)}function rE(t,e){let n=Ds(e,this.size,2);t.uniform2fv(this.addr,n)}function sE(t,e){let n=Ds(e,this.size,3);t.uniform3fv(this.addr,n)}function oE(t,e){let n=Ds(e,this.size,4);t.uniform4fv(this.addr,n)}function aE(t,e){let n=Ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lE(t,e){let n=Ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cE(t,e){let n=Ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uE(t,e){t.uniform1iv(this.addr,e)}function hE(t,e){t.uniform2iv(this.addr,e)}function fE(t,e){t.uniform3iv(this.addr,e)}function dE(t,e){t.uniform4iv(this.addr,e)}function pE(t,e){t.uniform1uiv(this.addr,e)}function mE(t,e){t.uniform2uiv(this.addr,e)}function gE(t,e){t.uniform3uiv(this.addr,e)}function vE(t,e){t.uniform4uiv(this.addr,e)}function _E(t,e,n){let i=this.cache,r=e.length,s=Nl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ug,s[o])}function yE(t,e,n){let i=this.cache,r=e.length,s=Nl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dg,s[o])}function xE(t,e,n){let i=this.cache,r=e.length,s=Nl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||pg,s[o])}function SE(t,e,n){let i=this.cache,r=e.length,s=Nl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||fg,s[o])}function ME(t){switch(t){case 5126:return iE;case 35664:return rE;case 35665:return sE;case 35666:return oE;case 35674:return aE;case 35675:return lE;case 35676:return cE;case 5124:case 35670:return uE;case 35667:case 35671:return hE;case 35668:case 35672:return fE;case 35669:case 35673:return dE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return yE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return SE}}var ah=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nE(n.type)}},lh=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ME(n.type)}},ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Gu=/(\w+)(\])?(\[|\.)?/g;function Um(t,e){t.seq.push(e),t.map[e.id]=e}function EE(t,e,n){let i=t.name,r=i.length;for(Gu.lastIndex=0;;){let s=Gu.exec(i),o=Gu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Um(n,c===void 0?new ah(a,t,e):new lh(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ch(a),Um(n,f)),n=f}}}var Ts=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);EE(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function Dm(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var wE=37297,TE=0;function AE(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bE(t){let e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t),i;switch(e===n?i="":e===cl&&n===ll?i="LinearDisplayP3ToLinearSRGB":e===ll&&n===cl&&(i="LinearSRGBToLinearDisplayP3"),t){case wi:case Il:return[i,"LinearTransferOETF"];case Tt:case kh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Fm(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+AE(t.getShaderSource(e),o)}else return r}function RE(t,e){let n=bE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function CE(t,e){let n;switch(e){case qy:n="Linear";break;case Yy:n="Reinhard";break;case Zy:n="OptimizedCineon";break;case $y:n="ACESFilmic";break;case jy:n="AgX";break;case Jy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function PE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function LE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function IE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function NE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ss(t){return t!==""}function Om(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(t){return t.replace(UE,FE)}var DE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function FE(t,e){let n=qe[e];if(n===void 0){let i=DE.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(n)}var OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(t){return t.replace(OE,zE)}function zE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===xy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function BE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case bs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VE(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===bs&&(e="ENVMAP_MODE_REFRACTION"),e}function HE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $m:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case Xy:e="ENVMAP_BLENDING_ADD";break}return e}function GE(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function WE(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=kE(n),c=BE(n),u=VE(n),f=HE(n),d=GE(n),p=n.isWebGL2?"":PE(n),_=LE(n),y=IE(s),g=r.createProgram(),h,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ss).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ss).join(`
`),v.length>0&&(v+=`
`)):(h=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),v=[p,Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?qe.tonemapping_pars_fragment:"",n.toneMapping!==Zi?CE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,RE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`)),o=uh(o),o=Om(o,n),o=zm(o,n),a=uh(a),a=Om(a,n),a=zm(a,n),o=km(o),a=km(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let S=m+h+o,R=m+v+a,A=Dm(r,r.VERTEX_SHADER,S),b=Dm(r,r.FRAGMENT_SHADER,R);r.attachShader(g,A),r.attachShader(g,b),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function U(Z){if(t.debug.checkShaderErrors){let te=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(b).trim(),G=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,b);else{let q=Fm(r,A,"vertex"),Y=Fm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+q+`
`+Y)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(P===""||O==="")&&(X=!1);X&&(Z.diagnostics={runnable:G,programLog:te,vertexShader:{log:P,prefix:h},fragmentShader:{log:O,prefix:v}})}r.deleteShader(A),r.deleteShader(b),E=new Ts(r,g),T=NE(r,g)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,wE)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}var XE=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new fh(e),n.set(e,i)),i}},fh=class{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}};function qE(t,e,n,i,r,s,o){let a=new ml,l=new hh,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,T,I,Z,te){let P=Z.fog,O=te.geometry,G=E.isMeshStandardMaterial?Z.environment:null,X=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),q=X&&X.mapping===Ll?X.image.height:null,Y=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=j!==void 0?j.length:0,ge=0;O.morphAttributes.position!==void 0&&(ge=1),O.morphAttributes.normal!==void 0&&(ge=2),O.morphAttributes.color!==void 0&&(ge=3);let W,se,_e,we;if(Y){let it=ci[Y];W=it.vertexShader,se=it.fragmentShader}else W=E.vertexShader,se=E.fragmentShader,l.update(E),_e=l.getVertexShaderID(E),we=l.getFragmentShaderID(E);let fe=t.getRenderTarget(),Ie=te.isInstancedMesh===!0,Pe=te.isBatchedMesh===!0,Ae=!!E.map,Fe=!!E.matcap,C=!!X,ue=!!E.aoMap,J=!!E.lightMap,le=!!E.bumpMap,$=!!E.normalMap,be=!!E.displacementMap,ve=!!E.emissiveMap,M=!!E.metalnessMap,x=!!E.roughnessMap,F=E.anisotropy>0,ne=E.clearcoat>0,oe=E.iridescence>0,Q=E.sheen>0,Te=E.transmission>0,pe=F&&!!E.anisotropyMap,xe=ne&&!!E.clearcoatMap,Ue=ne&&!!E.clearcoatNormalMap,Be=ne&&!!E.clearcoatRoughnessMap,ie=oe&&!!E.iridescenceMap,Ze=oe&&!!E.iridescenceThicknessMap,We=Q&&!!E.sheenColorMap,Oe=Q&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Se=!!E.specularColorMap,Ve=!!E.specularIntensityMap,je=Te&&!!E.transmissionMap,at=Te&&!!E.thicknessMap,Ge=!!E.gradientMap,he=!!E.alphaMap,L=E.alphaTest>0,k=!!E.alphaHash,z=!!E.extensions,ce=!!O.attributes.uv1,K=!!O.attributes.uv2,ke=!!O.attributes.uv3,ee=Zi;return E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ee=t.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:se,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:we,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Pe,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:wi,map:Ae,matcap:Fe,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:q,aoMap:ue,lightMap:J,bumpMap:le,normalMap:$,displacementMap:d&&be,emissiveMap:ve,normalMapObjectSpace:$&&E.normalMapType===ux,normalMapTangentSpace:$&&E.normalMapType===cx,metalnessMap:M,roughnessMap:x,anisotropy:F,anisotropyMap:pe,clearcoat:ne,clearcoatMap:xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Be,iridescence:oe,iridescenceMap:ie,iridescenceThicknessMap:Ze,sheen:Q,sheenColorMap:We,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:Se,specularIntensityMap:Ve,transmission:Te,transmissionMap:je,thicknessMap:at,gradientMap:Ge,opaque:E.transparent===!1&&E.blending===Es,alphaMap:he,alphaTest:L,alphaHash:k,combine:E.combine,mapUv:Ae&&y(E.map.channel),aoMapUv:ue&&y(E.aoMap.channel),lightMapUv:J&&y(E.lightMap.channel),bumpMapUv:le&&y(E.bumpMap.channel),normalMapUv:$&&y(E.normalMap.channel),displacementMapUv:be&&y(E.displacementMap.channel),emissiveMapUv:ve&&y(E.emissiveMap.channel),metalnessMapUv:M&&y(E.metalnessMap.channel),roughnessMapUv:x&&y(E.roughnessMap.channel),anisotropyMapUv:pe&&y(E.anisotropyMap.channel),clearcoatMapUv:xe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&y(E.sheenRoughnessMap.channel),specularMapUv:Le&&y(E.specularMap.channel),specularColorMapUv:Se&&y(E.specularColorMap.channel),specularIntensityMapUv:Ve&&y(E.specularIntensityMap.channel),transmissionMapUv:je&&y(E.transmissionMap.channel),thicknessMapUv:at&&y(E.thicknessMap.channel),alphaMapUv:he&&y(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($||F),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:K,vertexUv3s:ke,pointsUvs:te.isPoints===!0&&!!O.attributes.uv&&(Ae||he),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wn,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:z&&E.extensions.derivatives===!0,extensionFragDepth:z&&E.extensions.fragDepth===!0,extensionDrawBuffers:z&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:z&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)T.push(I),T.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(T,E),m(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function v(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function m(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){let T=_[E.type],I;if(T){let Z=ci[T];I=Dx.clone(Z.uniforms)}else I=E.uniforms;return I}function R(E,T){let I;for(let Z=0,te=c.length;Z<te;Z++){let P=c[Z];if(P.cacheKey===T){I=P,++I.usedTimes;break}}return I===void 0&&(I=new WE(t,T,E,s),c.push(I)),I}function A(E){if(--E.usedTimes===0){let T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:U}}function YE(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ZE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=g),e++,h}function a(f,d,p,_,y,g){let h=o(f,d,p,_,y,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,y,g){let h=o(f,d,p,_,y,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||ZE),i.length>1&&i.sort(d||Vm),r.length>1&&r.sort(d||Vm)}function u(){for(let f=e,d=t.length;f<d;f++){let p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $E(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new Hm,t.set(i,[o])):r>=s.length?(o=new Hm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function JE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Qe};break;case"SpotLight":n={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function jE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var KE=0;function QE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ew(t,e){let n=new JE,i=jE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new N);let s=new N,o=new kt,a=new kt;function l(u,f){let d=0,p=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,g=0,h=0,v=0,m=0,S=0,R=0,A=0,b=0,U=0,E=0;u.sort(QE);let T=f===!0?Math.PI:1;for(let Z=0,te=u.length;Z<te;Z++){let P=u[Z],O=P.color,G=P.intensity,X=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*G*T,p+=O.g*G*T,_+=O.b*G*T;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(P.sh.coefficients[Y],G);E++}else if(P.isDirectionalLight){let Y=n.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){let j=P.shadow,re=i.get(P);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.directionalShadow[y]=re,r.directionalShadowMap[y]=q,r.directionalShadowMatrix[y]=P.shadow.matrix,S++}r.directional[y]=Y,y++}else if(P.isSpotLight){let Y=n.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(G*T),Y.distance=X,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,r.spot[h]=Y;let j=P.shadow;if(P.map&&(r.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&U++),r.spotLightMatrix[h]=j.matrix,P.castShadow){let re=i.get(P);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,r.spotShadow[h]=re,r.spotShadowMap[h]=q,A++}h++}else if(P.isRectAreaLight){let Y=n.get(P);Y.color.copy(O).multiplyScalar(G),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=Y,v++}else if(P.isPointLight){let Y=n.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*T),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let j=P.shadow,re=i.get(P);re.shadowBias=j.bias,re.shadowNormalBias=j.normalBias,re.shadowRadius=j.radius,re.shadowMapSize=j.mapSize,re.shadowCameraNear=j.camera.near,re.shadowCameraFar=j.camera.far,r.pointShadow[g]=re,r.pointShadowMap[g]=q,r.pointShadowMatrix[g]=P.shadow.matrix,R++}r.point[g]=Y,g++}else if(P.isHemisphereLight){let Y=n.get(P);Y.skyColor.copy(P.color).multiplyScalar(G*T),Y.groundColor.copy(P.groundColor).multiplyScalar(G*T),r.hemi[m]=Y,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;let I=r.hash;(I.directionalLength!==y||I.pointLength!==g||I.spotLength!==h||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==S||I.numPointShadows!==R||I.numSpotShadows!==A||I.numSpotMaps!==b||I.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+b-U,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=E,I.directionalLength=y,I.pointLength=g,I.spotLength=h,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=S,I.numPointShadows=R,I.numSpotShadows=A,I.numSpotMaps=b,I.numLightProbes=E,r.version=KE++)}function c(u,f){let d=0,p=0,_=0,y=0,g=0,h=f.matrixWorldInverse;for(let v=0,m=u.length;v<m;v++){let S=u[v];if(S.isDirectionalLight){let R=r.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),d++}else if(S.isSpotLight){let R=r.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),_++}else if(S.isRectAreaLight){let R=r.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(h),a.identity(),o.copy(S.matrixWorld),o.premultiply(h),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let R=r.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){let R=r.hemi[g];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(h),g++}}}return{setup:l,setupView:c,state:r}}function Gm(t,e){let n=new ew(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tw(t,e){let n=new WeakMap;function i(s,o=0){let a=n.get(s),l;return a===void 0?(l=new Gm(t,e),n.set(s,[l])):o>=a.length?(l=new Gm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}var dh=class extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ph=class extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rw(t,e,n){let i=new xl,r=new me,s=new me,o=new zt,a=new dh({depthPacking:lx}),l=new ph,c={},u=n.maxTextureSize,f={[Ji]:un,[un]:Ji,[Wn]:Wn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new $n;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Yt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zm;let h=this.type;this.render=function(A,b,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let E=t.getRenderTarget(),T=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Yi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let te=h!==Si&&this.type===Si,P=h===Si&&this.type!==Si;for(let O=0,G=A.length;O<G;O++){let X=A[O],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let Y=q.getFrameExtents();if(r.multiply(Y),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||te===!0||P===!0){let re=this.type!==Si?{minFilter:nn,magFilter:nn}:{};q.map!==null&&q.map.dispose(),q.map=new Ti(r.x,r.y,re),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();let j=q.getViewportCount();for(let re=0;re<j;re++){let ge=q.getViewport(re);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),Z.viewport(o),q.updateMatrices(X,re),i=q.getFrustum(),S(b,U,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===Si&&v(q,U),q.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(E,T,I)};function v(A,b){let U=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ti(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,U,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,U,p,y,null)}function m(A,b,U,E){let T=null,I=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)T=I;else if(T=U.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let Z=T.uuid,te=b.uuid,P=c[Z];P===void 0&&(P={},c[Z]=P);let O=P[te];O===void 0&&(O=T.clone(),P[te]=O,b.addEventListener("dispose",R)),T=O}if(T.visible=b.visible,T.wireframe=b.wireframe,E===Si?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:f[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Z=t.properties.get(T);Z.light=U}return T}function S(A,b,U,E,T){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let te=e.update(A),P=A.material;if(Array.isArray(P)){let O=te.groups;for(let G=0,X=O.length;G<X;G++){let q=O[G],Y=P[q.materialIndex];if(Y&&Y.visible){let j=m(A,Y,E,T);A.onBeforeShadow(t,A,b,U,te,j,q),t.renderBufferDirect(U,null,te,j,A,q),A.onAfterShadow(t,A,b,U,te,j,q)}}}else if(P.visible){let O=m(A,P,E,T);A.onBeforeShadow(t,A,b,U,te,O,null),t.renderBufferDirect(U,null,te,O,A,null),A.onAfterShadow(t,A,b,U,te,O,null)}}let Z=A.children;for(let te=0,P=Z.length;te<P;te++)S(Z[te],b,U,E,T)}function R(A){A.target.removeEventListener("dispose",R);for(let U in c){let E=c[U],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function sw(t,e,n){let i=n.isWebGL2;function r(){let L=!1,k=new zt,z=null,ce=new zt(0,0,0,0);return{setMask:function(K){z!==K&&!L&&(t.colorMask(K,K,K,K),z=K)},setLocked:function(K){L=K},setClear:function(K,ke,ee,ze,it){it===!0&&(K*=ze,ke*=ze,ee*=ze),k.set(K,ke,ee,ze),ce.equals(k)===!1&&(t.clearColor(K,ke,ee,ze),ce.copy(k))},reset:function(){L=!1,z=null,ce.set(-1,0,0,0)}}}function s(){let L=!1,k=null,z=null,ce=null;return{setTest:function(K){K?Pe(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(K){k!==K&&!L&&(t.depthMask(K),k=K)},setFunc:function(K){if(z!==K){switch(K){case Oy:t.depthFunc(t.NEVER);break;case zy:t.depthFunc(t.ALWAYS);break;case ky:t.depthFunc(t.LESS);break;case rl:t.depthFunc(t.LEQUAL);break;case By:t.depthFunc(t.EQUAL);break;case Vy:t.depthFunc(t.GEQUAL);break;case Hy:t.depthFunc(t.GREATER);break;case Gy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=K}},setLocked:function(K){L=K},setClear:function(K){ce!==K&&(t.clearDepth(K),ce=K)},reset:function(){L=!1,k=null,z=null,ce=null}}}function o(){let L=!1,k=null,z=null,ce=null,K=null,ke=null,ee=null,ze=null,it=null;return{setTest:function(Xe){L||(Xe?Pe(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(Xe){k!==Xe&&!L&&(t.stencilMask(Xe),k=Xe)},setFunc:function(Xe,ht,Qt){(z!==Xe||ce!==ht||K!==Qt)&&(t.stencilFunc(Xe,ht,Qt),z=Xe,ce=ht,K=Qt)},setOp:function(Xe,ht,Qt){(ke!==Xe||ee!==ht||ze!==Qt)&&(t.stencilOp(Xe,ht,Qt),ke=Xe,ee=ht,ze=Qt)},setLocked:function(Xe){L=Xe},setClear:function(Xe){it!==Xe&&(t.clearStencil(Xe),it=Xe)},reset:function(){L=!1,k=null,z=null,ce=null,K=null,ke=null,ee=null,ze=null,it=null}}}let a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap,d={},p={},_=new WeakMap,y=[],g=null,h=!1,v=null,m=null,S=null,R=null,A=null,b=null,U=null,E=new Qe(0,0,0),T=0,I=!1,Z=null,te=null,P=null,O=null,G=null,X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=Y>=2);let re=null,ge={},W=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),_e=new zt().fromArray(W),we=new zt().fromArray(se);function fe(L,k,z,ce){let K=new Uint8Array(4),ke=t.createTexture();t.bindTexture(L,ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ee=0;ee<z;ee++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(k,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,K):t.texImage2D(k+ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,K);return ke}let Ie={};Ie[t.TEXTURE_2D]=fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(t.DEPTH_TEST),l.setFunc(rl),ve(!1),M(Mp),Pe(t.CULL_FACE),$(Yi);function Pe(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Ae(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Fe(L,k){return p[L]!==k?(t.bindFramebuffer(L,k),p[L]=k,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=k),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=k)),!0):!1}function C(L,k){let z=y,ce=!1;if(L)if(z=_.get(k),z===void 0&&(z=[],_.set(k,z)),L.isWebGLMultipleRenderTargets){let K=L.texture;if(z.length!==K.length||z[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,ee=K.length;ke<ee;ke++)z[ke]=t.COLOR_ATTACHMENT0+ke;z.length=K.length,ce=!0}}else z[0]!==t.COLOR_ATTACHMENT0&&(z[0]=t.COLOR_ATTACHMENT0,ce=!0);else z[0]!==t.BACK&&(z[0]=t.BACK,ce=!0);ce&&(n.isWebGL2?t.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))}function ue(L){return g!==L?(t.useProgram(L),g=L,!0):!1}let J={[Pr]:t.FUNC_ADD,[My]:t.FUNC_SUBTRACT,[Ey]:t.FUNC_REVERSE_SUBTRACT};if(i)J[Ap]=t.MIN,J[bp]=t.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(J[Ap]=L.MIN_EXT,J[bp]=L.MAX_EXT)}let le={[wy]:t.ZERO,[Ty]:t.ONE,[Ay]:t.SRC_COLOR,[Yu]:t.SRC_ALPHA,[Iy]:t.SRC_ALPHA_SATURATE,[Py]:t.DST_COLOR,[Ry]:t.DST_ALPHA,[by]:t.ONE_MINUS_SRC_COLOR,[Zu]:t.ONE_MINUS_SRC_ALPHA,[Ly]:t.ONE_MINUS_DST_COLOR,[Cy]:t.ONE_MINUS_DST_ALPHA,[Ny]:t.CONSTANT_COLOR,[Uy]:t.ONE_MINUS_CONSTANT_COLOR,[Dy]:t.CONSTANT_ALPHA,[Fy]:t.ONE_MINUS_CONSTANT_ALPHA};function $(L,k,z,ce,K,ke,ee,ze,it,Xe){if(L===Yi){h===!0&&(Ae(t.BLEND),h=!1);return}if(h===!1&&(Pe(t.BLEND),h=!0),L!==Sy){if(L!==v||Xe!==I){if((m!==Pr||A!==Pr)&&(t.blendEquation(t.FUNC_ADD),m=Pr,A=Pr),Xe)switch(L){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.ONE,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,b=null,U=null,E.set(0,0,0),T=0,v=L,I=Xe}return}K=K||k,ke=ke||z,ee=ee||ce,(k!==m||K!==A)&&(t.blendEquationSeparate(J[k],J[K]),m=k,A=K),(z!==S||ce!==R||ke!==b||ee!==U)&&(t.blendFuncSeparate(le[z],le[ce],le[ke],le[ee]),S=z,R=ce,b=ke,U=ee),(ze.equals(E)===!1||it!==T)&&(t.blendColor(ze.r,ze.g,ze.b,it),E.copy(ze),T=it),v=L,I=!1}function be(L,k){L.side===Wn?Ae(t.CULL_FACE):Pe(t.CULL_FACE);let z=L.side===un;k&&(z=!z),ve(z),L.blending===Es&&L.transparent===!1?$(Yi):$(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let ce=L.stencilWrite;c.setTest(ce),ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ve(L){Z!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Z=L)}function M(L){L!==_y?(Pe(t.CULL_FACE),L!==te&&(L===Mp?t.cullFace(t.BACK):L===yy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),te=L}function x(L){L!==P&&(q&&t.lineWidth(L),P=L)}function F(L,k,z){L?(Pe(t.POLYGON_OFFSET_FILL),(O!==k||G!==z)&&(t.polygonOffset(k,z),O=k,G=z)):Ae(t.POLYGON_OFFSET_FILL)}function ne(L){L?Pe(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function oe(L){L===void 0&&(L=t.TEXTURE0+X-1),re!==L&&(t.activeTexture(L),re=L)}function Q(L,k,z){z===void 0&&(re===null?z=t.TEXTURE0+X-1:z=re);let ce=ge[z];ce===void 0&&(ce={type:void 0,texture:void 0},ge[z]=ce),(ce.type!==L||ce.texture!==k)&&(re!==z&&(t.activeTexture(z),re=z),t.bindTexture(L,k||Ie[L]),ce.type=L,ce.texture=k)}function Te(){let L=ge[re];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(L){_e.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),_e.copy(L))}function je(L){we.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),we.copy(L))}function at(L,k){let z=f.get(k);z===void 0&&(z=new WeakMap,f.set(k,z));let ce=z.get(L);ce===void 0&&(ce=t.getUniformBlockIndex(k,L.name),z.set(L,ce))}function Ge(L,k){let ce=f.get(k).get(L);u.get(k)!==ce&&(t.uniformBlockBinding(k,ce,L.__bindingPointIndex),u.set(k,ce))}function he(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},re=null,ge={},p={},_=new WeakMap,y=[],g=null,h=!1,v=null,m=null,S=null,R=null,A=null,b=null,U=null,E=new Qe(0,0,0),T=0,I=!1,Z=null,te=null,P=null,O=null,G=null,_e.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Ae,bindFramebuffer:Fe,drawBuffers:C,useProgram:ue,setBlending:$,setMaterial:be,setFlipSided:ve,setCullFace:M,setLineWidth:x,setPolygonOffset:F,setScissorTest:ne,activeTexture:oe,bindTexture:Q,unbindTexture:Te,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:Le,texImage3D:Se,updateUBOMapping:at,uniformBlockBinding:Ge,texStorage2D:We,texStorage3D:Oe,texSubImage2D:Ue,texSubImage3D:Be,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ze,scissor:Ve,viewport:je,reset:he}}function ow(t,e,n,i,r,s,o){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,x){return p?new OffscreenCanvas(M,x):hl("canvas")}function y(M,x,F,ne){let oe=1;if((M.width>ne||M.height>ne)&&(oe=ne/Math.max(M.width,M.height)),oe<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let Q=x?th:Math.floor,Te=Q(oe*M.width),pe=Q(oe*M.height);f===void 0&&(f=_(Te,pe));let xe=F?_(Te,pe):f;return xe.width=Te,xe.height=pe,xe.getContext("2d").drawImage(M,0,0,Te,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Te+"x"+pe+")."),xe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function g(M){return om(M.width)&&om(M.height)}function h(M){return a?!1:M.wrapS!==Xn||M.wrapT!==Xn||M.minFilter!==nn&&M.minFilter!==Rn}function v(M,x){return M.generateMipmaps&&x&&M.minFilter!==nn&&M.minFilter!==Rn}function m(M){t.generateMipmap(M)}function S(M,x,F,ne,oe=!1){if(a===!1)return x;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Q=x;if(x===t.RED&&(F===t.FLOAT&&(Q=t.R32F),F===t.HALF_FLOAT&&(Q=t.R16F),F===t.UNSIGNED_BYTE&&(Q=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.R8UI),F===t.UNSIGNED_SHORT&&(Q=t.R16UI),F===t.UNSIGNED_INT&&(Q=t.R32UI),F===t.BYTE&&(Q=t.R8I),F===t.SHORT&&(Q=t.R16I),F===t.INT&&(Q=t.R32I)),x===t.RG&&(F===t.FLOAT&&(Q=t.RG32F),F===t.HALF_FLOAT&&(Q=t.RG16F),F===t.UNSIGNED_BYTE&&(Q=t.RG8)),x===t.RGBA){let Te=oe?al:rt.getTransfer(ne);F===t.FLOAT&&(Q=t.RGBA32F),F===t.HALF_FLOAT&&(Q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Q=Te===lt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(M,x,F){return v(M,F)===!0||M.isFramebufferTexture&&M.minFilter!==nn&&M.minFilter!==Rn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){return M===nn||M===Rp||M===du?t.NEAREST:t.LINEAR}function b(M){let x=M.target;x.removeEventListener("dispose",b),E(x),x.isVideoTexture&&u.delete(x)}function U(M){let x=M.target;x.removeEventListener("dispose",U),I(x)}function E(M){let x=i.get(M);if(x.__webglInit===void 0)return;let F=M.source,ne=d.get(F);if(ne){let oe=ne[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(M),Object.keys(ne).length===0&&d.delete(F)}i.remove(M)}function T(M){let x=i.get(M);t.deleteTexture(x.__webglTexture);let F=M.source,ne=d.get(F);delete ne[x.__cacheKey],o.memory.textures--}function I(M){let x=M.texture,F=i.get(M),ne=i.get(x);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(F.__webglFramebuffer[oe]))for(let Q=0;Q<F.__webglFramebuffer[oe].length;Q++)t.deleteFramebuffer(F.__webglFramebuffer[oe][Q]);else t.deleteFramebuffer(F.__webglFramebuffer[oe]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[oe])}else{if(Array.isArray(F.__webglFramebuffer))for(let oe=0;oe<F.__webglFramebuffer.length;oe++)t.deleteFramebuffer(F.__webglFramebuffer[oe]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let oe=0;oe<F.__webglColorRenderbuffer.length;oe++)F.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[oe]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let oe=0,Q=x.length;oe<Q;oe++){let Te=i.get(x[oe]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(x[oe])}i.remove(x),i.remove(M)}let Z=0;function te(){Z=0}function P(){let M=Z;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),Z+=1,M}function O(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function G(M,x){let F=i.get(M);if(M.isVideoTexture&&be(M),M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){let ne=M.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(F,M,x);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function X(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){_e(F,M,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function q(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){_e(F,M,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function Y(M,x){let F=i.get(M);if(M.version>0&&F.__version!==M.version){we(F,M,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}let j={[ju]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Ku]:t.MIRRORED_REPEAT},re={[nn]:t.NEAREST,[Rp]:t.NEAREST_MIPMAP_NEAREST,[du]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[Ky]:t.LINEAR_MIPMAP_NEAREST,[wo]:t.LINEAR_MIPMAP_LINEAR},ge={[hx]:t.NEVER,[vx]:t.ALWAYS,[fx]:t.LESS,[sg]:t.LEQUAL,[dx]:t.EQUAL,[gx]:t.GEQUAL,[px]:t.GREATER,[mx]:t.NOTEQUAL};function W(M,x,F){if(F?(t.texParameteri(M,t.TEXTURE_WRAP_S,j[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,j[x.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,j[x.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,re[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,re[x.minFilter])):(t.texParameteri(M,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(M,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==Xn||x.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,t.TEXTURE_MAG_FILTER,A(x.magFilter)),t.texParameteri(M,t.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==nn&&x.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===nn||x.minFilter!==du&&x.minFilter!==wo||x.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===To&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(M,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function se(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",b));let ne=x.source,oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));let Q=O(x);if(Q!==M.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),oe[Q].usedTimes++;let Te=oe[M.__cacheKey];Te!==void 0&&(oe[M.__cacheKey].usedTimes--,Te.usedTimes===0&&T(x)),M.__cacheKey=Q,M.__webglTexture=oe[Q].texture}return F}function _e(M,x,F){let ne=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=t.TEXTURE_3D);let oe=se(M,x),Q=x.source;n.bindTexture(ne,M.__webglTexture,t.TEXTURE0+F);let Te=i.get(Q);if(Q.version!==Te.__version||oe===!0){n.activeTexture(t.TEXTURE0+F);let pe=rt.getPrimaries(rt.workingColorSpace),xe=x.colorSpace===Cn?null:rt.getPrimaries(x.colorSpace),Ue=x.colorSpace===Cn||pe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Be=h(x)&&g(x.image)===!1,ie=y(x.image,Be,!1,r.maxTextureSize);ie=ve(x,ie);let Ze=g(ie)||a,We=s.convert(x.format,x.colorSpace),Oe=s.convert(x.type),Le=S(x.internalFormat,We,Oe,x.colorSpace,x.isVideoTexture);W(ne,x,Ze);let Se,Ve=x.mipmaps,je=a&&x.isVideoTexture!==!0&&Le!==ig,at=Te.__version===void 0||oe===!0,Ge=R(x,ie,Ze);if(x.isDepthTexture)Le=t.DEPTH_COMPONENT,a?x.type===Xi?Le=t.DEPTH_COMPONENT32F:x.type===Wi?Le=t.DEPTH_COMPONENT24:x.type===Ir?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:x.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Nr&&Le===t.DEPTH_COMPONENT&&x.type!==zh&&x.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Wi,Oe=s.convert(x.type)),x.format===Rs&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,x.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ir,Oe=s.convert(x.type))),at&&(je?n.texStorage2D(t.TEXTURE_2D,1,Le,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,We,Oe,null));else if(x.isDataTexture)if(Ve.length>0&&Ze){je&&at&&n.texStorage2D(t.TEXTURE_2D,Ge,Le,Ve[0].width,Ve[0].height);for(let he=0,L=Ve.length;he<L;he++)Se=Ve[he],je?n.texSubImage2D(t.TEXTURE_2D,he,0,0,Se.width,Se.height,We,Oe,Se.data):n.texImage2D(t.TEXTURE_2D,he,Le,Se.width,Se.height,0,We,Oe,Se.data);x.generateMipmaps=!1}else je?(at&&n.texStorage2D(t.TEXTURE_2D,Ge,Le,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,We,Oe,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,We,Oe,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){je&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Le,Ve[0].width,Ve[0].height,ie.depth);for(let he=0,L=Ve.length;he<L;he++)Se=Ve[he],x.format!==qn?We!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,ie.depth,We,Se.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Le,Se.width,Se.height,ie.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,ie.depth,We,Oe,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Le,Se.width,Se.height,ie.depth,0,We,Oe,Se.data)}else{je&&at&&n.texStorage2D(t.TEXTURE_2D,Ge,Le,Ve[0].width,Ve[0].height);for(let he=0,L=Ve.length;he<L;he++)Se=Ve[he],x.format!==qn?We!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Se.width,Se.height,We,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,he,0,0,Se.width,Se.height,We,Oe,Se.data):n.texImage2D(t.TEXTURE_2D,he,Le,Se.width,Se.height,0,We,Oe,Se.data)}else if(x.isDataArrayTexture)je?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Le,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,We,Oe,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,We,Oe,ie.data);else if(x.isData3DTexture)je?(at&&n.texStorage3D(t.TEXTURE_3D,Ge,Le,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,We,Oe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,We,Oe,ie.data);else if(x.isFramebufferTexture){if(at)if(je)n.texStorage2D(t.TEXTURE_2D,Ge,Le,ie.width,ie.height);else{let he=ie.width,L=ie.height;for(let k=0;k<Ge;k++)n.texImage2D(t.TEXTURE_2D,k,Le,he,L,0,We,Oe,null),he>>=1,L>>=1}}else if(Ve.length>0&&Ze){je&&at&&n.texStorage2D(t.TEXTURE_2D,Ge,Le,Ve[0].width,Ve[0].height);for(let he=0,L=Ve.length;he<L;he++)Se=Ve[he],je?n.texSubImage2D(t.TEXTURE_2D,he,0,0,We,Oe,Se):n.texImage2D(t.TEXTURE_2D,he,Le,We,Oe,Se);x.generateMipmaps=!1}else je?(at&&n.texStorage2D(t.TEXTURE_2D,Ge,Le,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Oe,ie)):n.texImage2D(t.TEXTURE_2D,0,Le,We,Oe,ie);v(x,Ze)&&m(ne),Te.__version=Q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function we(M,x,F){if(x.image.length!==6)return;let ne=se(M,x),oe=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+F);let Q=i.get(oe);if(oe.version!==Q.__version||ne===!0){n.activeTexture(t.TEXTURE0+F);let Te=rt.getPrimaries(rt.workingColorSpace),pe=x.colorSpace===Cn?null:rt.getPrimaries(x.colorSpace),xe=x.colorSpace===Cn||Te===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Be=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let he=0;he<6;he++)!Ue&&!Be?ie[he]=y(x.image[he],!1,!0,r.maxCubemapSize):ie[he]=Be?x.image[he].image:x.image[he],ie[he]=ve(x,ie[he]);let Ze=ie[0],We=g(Ze)||a,Oe=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Se=S(x.internalFormat,Oe,Le,x.colorSpace),Ve=a&&x.isVideoTexture!==!0,je=Q.__version===void 0||ne===!0,at=R(x,Ze,We);W(t.TEXTURE_CUBE_MAP,x,We);let Ge;if(Ue){Ve&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Se,Ze.width,Ze.height);for(let he=0;he<6;he++){Ge=ie[he].mipmaps;for(let L=0;L<Ge.length;L++){let k=Ge[L];x.format!==qn?Oe!==null?Ve?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,k.width,k.height,Oe,k.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Se,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,0,0,k.width,k.height,Oe,Le,k.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L,Se,k.width,k.height,0,Oe,Le,k.data)}}}else{Ge=x.mipmaps,Ve&&je&&(Ge.length>0&&at++,n.texStorage2D(t.TEXTURE_CUBE_MAP,at,Se,ie[0].width,ie[0].height));for(let he=0;he<6;he++)if(Be){Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ie[he].width,ie[he].height,Oe,Le,ie[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,ie[he].width,ie[he].height,0,Oe,Le,ie[he].data);for(let L=0;L<Ge.length;L++){let z=Ge[L].image[he].image;Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,z.width,z.height,Oe,Le,z.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Se,z.width,z.height,0,Oe,Le,z.data)}}else{Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe,Le,ie[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,Oe,Le,ie[he]);for(let L=0;L<Ge.length;L++){let k=Ge[L];Ve?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,0,0,Oe,Le,k.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,L+1,Se,Oe,Le,k.image[he])}}}v(x,We)&&m(t.TEXTURE_CUBE_MAP),Q.__version=oe.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function fe(M,x,F,ne,oe,Q){let Te=s.convert(F.format,F.colorSpace),pe=s.convert(F.type),xe=S(F.internalFormat,Te,pe,F.colorSpace);if(!i.get(x).__hasExternalTextures){let Be=Math.max(1,x.width>>Q),ie=Math.max(1,x.height>>Q);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,Q,xe,Be,ie,x.depth,0,Te,pe,null):n.texImage2D(oe,Q,xe,Be,ie,0,Te,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),$(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,oe,i.get(F).__webglTexture,0,le(x)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,oe,i.get(F).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(M,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||$(x)){let oe=x.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Xi?ne=t.DEPTH_COMPONENT32F:oe.type===Wi&&(ne=t.DEPTH_COMPONENT24));let Q=le(x);$(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,ne,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,ne,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let ne=le(x);F&&$(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,x.width,x.height):$(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{let ne=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let oe=0;oe<ne.length;oe++){let Q=ne[oe],Te=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),xe=S(Q.internalFormat,Te,pe,Q.colorSpace),Ue=le(x);F&&$(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,xe,x.width,x.height):$(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,xe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,xe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);let ne=i.get(x.depthTexture).__webglTexture,oe=le(x);if(x.depthTexture.format===Nr)$(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(x.depthTexture.format===Rs)$(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(M){let x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,M)}else if(F){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]=t.createRenderbuffer(),Ie(x.__webglDepthbuffer[ne],M,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),Ie(x.__webglDepthbuffer,M,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(M,x,F){let ne=i.get(M);x!==void 0&&fe(ne.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ae(M)}function C(M){let x=M.texture,F=i.get(M),ne=i.get(x);M.addEventListener("dispose",U),M.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=x.version,o.memory.textures++);let oe=M.isWebGLCubeRenderTarget===!0,Q=M.isWebGLMultipleRenderTargets===!0,Te=g(M)||a;if(oe){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let xe=0;xe<x.mipmaps.length;xe++)F.__webglFramebuffer[pe][xe]=t.createFramebuffer()}else F.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)F.__webglFramebuffer[pe]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Q)if(r.drawBuffers){let pe=M.texture;for(let xe=0,Ue=pe.length;xe<Ue;xe++){let Be=i.get(pe[xe]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&$(M)===!1){let pe=Q?x:[x];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){let Ue=pe[xe];F.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[xe]);let Be=s.convert(Ue.format,Ue.colorSpace),ie=s.convert(Ue.type),Ze=S(Ue.internalFormat,Be,ie,Ue.colorSpace,M.isXRRenderTarget===!0),We=le(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Ze,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,F.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),W(t.TEXTURE_CUBE_MAP,x,Te);for(let pe=0;pe<6;pe++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(F.__webglFramebuffer[pe][xe],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else fe(F.__webglFramebuffer[pe],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(x,Te)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){let pe=M.texture;for(let xe=0,Ue=pe.length;xe<Ue;xe++){let Be=pe[xe],ie=i.get(Be);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),W(t.TEXTURE_2D,Be,Te),fe(F.__webglFramebuffer,M,Be,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),v(Be,Te)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?pe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,ne.__webglTexture),W(pe,x,Te),a&&x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(F.__webglFramebuffer[xe],M,x,t.COLOR_ATTACHMENT0,pe,xe);else fe(F.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,pe,0);v(x,Te)&&m(pe),n.unbindTexture()}M.depthBuffer&&Ae(M)}function ue(M){let x=g(M)||a,F=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0,oe=F.length;ne<oe;ne++){let Q=F[ne];if(v(Q,x)){let Te=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(Q).__webglTexture;n.bindTexture(Te,pe),m(Te),n.unbindTexture()}}}function J(M){if(a&&M.samples>0&&$(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],F=M.width,ne=M.height,oe=t.COLOR_BUFFER_BIT,Q=[],Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(M),xe=M.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ue=0;Ue<x.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){Q.push(t.COLOR_ATTACHMENT0+Ue),M.depthBuffer&&Q.push(Te);let Be=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Be===!1&&(M.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ue]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),xe){let ie=i.get(x[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,F,ne,0,0,F,ne,oe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let Ue=0;Ue<x.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Ue]);let Be=i.get(x[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function le(M){return Math.min(r.maxSamples,M.samples)}function $(M){let x=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function be(M){let x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function ve(M,x){let F=M.colorSpace,ne=M.format,oe=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Qu||F!==wi&&F!==Cn&&(rt.getTransfer(F)===lt?a===!1?e.has("EXT_sRGB")===!0&&ne===qn?(M.format=Qu,M.minFilter=Rn,M.generateMipmaps=!1):x=fl.sRGBToLinear(x):(ne!==qn||oe!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=P,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Fe,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=$}function aw(t,e,n){let i=n.isWebGL2;function r(s,o=Cn){let a,l=rt.getTransfer(o);if(s===$i)return t.UNSIGNED_BYTE;if(s===Km)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Qm)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Qy)return t.BYTE;if(s===ex)return t.SHORT;if(s===zh)return t.UNSIGNED_SHORT;if(s===jm)return t.INT;if(s===Wi)return t.UNSIGNED_INT;if(s===Xi)return t.FLOAT;if(s===To)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===tx)return t.ALPHA;if(s===qn)return t.RGBA;if(s===nx)return t.LUMINANCE;if(s===ix)return t.LUMINANCE_ALPHA;if(s===Nr)return t.DEPTH_COMPONENT;if(s===Rs)return t.DEPTH_STENCIL;if(s===Qu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===rx)return t.RED;if(s===eg)return t.RED_INTEGER;if(s===sx)return t.RG;if(s===tg)return t.RG_INTEGER;if(s===ng)return t.RGBA_INTEGER;if(s===pu||s===mu||s===gu||s===vu)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cp||s===Pp||s===Lp||s===Ip)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Lp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ip)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ig)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Np||s===Up)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Np)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Up)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dp||s===Fp||s===Op||s===zp||s===kp||s===Bp||s===Vp||s===Hp||s===Gp||s===Wp||s===Xp||s===qp||s===Yp||s===Zp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Dp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Op)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_u||s===$p||s===Jp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_u)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$p)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ox||s===jp||s===Kp||s===Qp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_u)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ir?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}var mh=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Yn=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lw={type:"move"},xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},gh=class extends ji{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null,y=n.getContextAttributes(),g=null,h=null,v=[],m=[],S=new me,R=null,A=new yn;A.layers.enable(1),A.viewport=new zt;let b=new yn;b.layers.enable(2),b.viewport=new zt;let U=[A,b],E=new mh;E.layers.enable(1),E.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let se=v[W];return se===void 0&&(se=new xo,v[W]=se),se.getTargetRaySpace()},this.getControllerGrip=function(W){let se=v[W];return se===void 0&&(se=new xo,v[W]=se),se.getGripSpace()},this.getHand=function(W){let se=v[W];return se===void 0&&(se=new xo,v[W]=se),se.getHandSpace()};function Z(W){let se=m.indexOf(W.inputSource);if(se===-1)return;let _e=v[se];_e!==void 0&&(_e.update(W.inputSource,W.frame,c||o),_e.dispatchEvent({type:W.type,data:W.inputSource}))}function te(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",P);for(let W=0;W<v.length;W++){let se=m[W];se!==null&&(m[W]=null,v[W].disconnect(se))}T=null,I=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",te),r.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let se={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Ti(p.framebufferWidth,p.framebufferHeight,{format:qn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let se=null,_e=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=y.stencil?Rs:Nr,_e=y.stencil?Ir:Wi);let fe={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Ti(d.textureWidth,d.textureHeight,{format:qn,type:$i,depthTexture:new Ml(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Ie=e.properties.get(h);Ie.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(W){for(let se=0;se<W.removed.length;se++){let _e=W.removed[se],we=m.indexOf(_e);we>=0&&(m[we]=null,v[we].disconnect(_e))}for(let se=0;se<W.added.length;se++){let _e=W.added[se],we=m.indexOf(_e);if(we===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=m.length){m.push(_e),we=Ie;break}else if(m[Ie]===null){m[Ie]=_e,we=Ie;break}if(we===-1)break}let fe=v[we];fe&&fe.connect(_e)}}let O=new N,G=new N;function X(W,se,_e){O.setFromMatrixPosition(se.matrixWorld),G.setFromMatrixPosition(_e.matrixWorld);let we=O.distanceTo(G),fe=se.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,Pe=fe[14]/(fe[10]-1),Ae=fe[14]/(fe[10]+1),Fe=(fe[9]+1)/fe[5],C=(fe[9]-1)/fe[5],ue=(fe[8]-1)/fe[0],J=(Ie[8]+1)/Ie[0],le=Pe*ue,$=Pe*J,be=we/(-ue+J),ve=be*-ue;se.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ve),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let M=Pe+be,x=Ae+be,F=le-ve,ne=$+(we-ve),oe=Fe*Ae/x*M,Q=C*Ae/x*M;W.projectionMatrix.makePerspective(F,ne,oe,Q,M,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,se){se===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(se.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=b.near=A.near=W.near,E.far=b.far=A.far=W.far,(T!==E.near||I!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,I=E.far);let se=W.parent,_e=E.cameras;q(E,se);for(let we=0;we<_e.length;we++)q(_e[we],se);_e.length===2?X(E,A,b):E.projectionMatrix.copy(A.projectionMatrix),Y(W,E,se)};function Y(W,se,_e){_e===null?W.matrix.copy(se.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(se.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(se.projectionMatrix),W.projectionMatrixInverse.copy(se.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=eh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let j=null;function re(W,se){if(u=se.getViewerPose(c||o),_=se,u!==null){let _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let we=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,we=!0);for(let fe=0;fe<_e.length;fe++){let Ie=_e[fe],Pe=null;if(p!==null)Pe=p.getViewport(Ie);else{let Fe=f.getViewSubImage(d,Ie);Pe=Fe.viewport,fe===0&&(e.setRenderTargetTextures(h,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(h))}let Ae=U[fe];Ae===void 0&&(Ae=new yn,Ae.layers.enable(fe),Ae.viewport=new zt,U[fe]=Ae),Ae.matrix.fromArray(Ie.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ie.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),fe===0&&(E.matrix.copy(Ae.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),we===!0&&E.cameras.push(Ae)}}for(let _e=0;_e<v.length;_e++){let we=m[_e],fe=v[_e];we!==null&&fe!==void 0&&fe.update(we,se,c||o)}j&&j(W,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}let ge=new cg;ge.setAnimationLoop(re),this.setAnimationLoop=function(W){j=W},this.dispose=function(){}}};function cw(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,lg(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,m,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,m):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===un&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===un&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;let m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*m,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=m*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){let v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uw(t,e,n,i){let r={},s={},o=[],a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){let S=m.program;i.uniformBlockBinding(v,S)}function c(v,m){let S=r[v.id];S===void 0&&(_(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",g));let R=m.program;i.updateUBOMapping(v,R);let A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function u(v){let m=f();v.__bindingPointIndex=m;let S=t.createBuffer(),R=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,S),S}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let m=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,b=S.length;A<b;A++){let U=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,T=U.length;E<T;E++){let I=U[E];if(p(I,A,E,R)===!0){let Z=I.__offset,te=Array.isArray(I.value)?I.value:[I.value],P=0;for(let O=0;O<te.length;O++){let G=te[O],X=y(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,Z+P,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,S,R){let A=v.value,b=m+"_"+S;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{let U=R[b];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[b]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function _(v){let m=v.uniforms,S=0,R=16;for(let b=0,U=m.length;b<U;b++){let E=Array.isArray(m[b])?m[b]:[m[b]];for(let T=0,I=E.length;T<I;T++){let Z=E[T],te=Array.isArray(Z.value)?Z.value:[Z.value];for(let P=0,O=te.length;P<O;P++){let G=te[P],X=y(G),q=S%R;q!==0&&R-q<X.boundary&&(S+=R-q),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=X.storage}}}let A=S%R;return A>0&&(S+=R-A),v.__size=S,v.__cache={},this}function y(v){let m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){let m=v.target;m.removeEventListener("dispose",g);let S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function h(){for(let v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}var Ro=class{constructor(e={}){let{canvas:n=yx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),_=new Int32Array(4),y=null,g=null,h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;let m=this,S=!1,R=0,A=0,b=null,U=-1,E=null,T=new zt,I=new zt,Z=null,te=new Qe(0),P=0,O=n.width,G=n.height,X=1,q=null,Y=null,j=new zt(0,0,O,G),re=new zt(0,0,O,G),ge=!1,W=new xl,se=!1,_e=!1,we=null,fe=new kt,Ie=new me,Pe=new N,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return b===null?X:1}let C=i;function ue(w,D){for(let B=0;B<w.length;B++){let H=w[B],V=n.getContext(H,D);if(V!==null)return V}return null}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r160"),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",k,!1),C===null){let D=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&D.shift(),C=ue(D,w),C===null)throw ue(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,le,$,be,ve,M,x,F,ne,oe,Q,Te,pe,xe,Ue,Be,ie,Ze,We,Oe,Le,Se,Ve,je;function at(){J=new C1(C),le=new E1(C,J,e),J.init(le),Se=new aw(C,J,le),$=new sw(C,J,le),be=new I1(C),ve=new YE,M=new ow(C,J,$,ve,le,Se,be),x=new T1(m),F=new R1(m),ne=new Bx(C,le),Ve=new S1(C,J,ne,le),oe=new P1(C,ne,be,Ve),Q=new F1(C,oe,ne,be),We=new D1(C,le,M),Be=new w1(ve),Te=new qE(m,x,F,J,le,Ve,Be),pe=new cw(m,ve),xe=new $E,Ue=new tw(J,le),Ze=new x1(m,x,F,$,Q,d,l),ie=new rw(m,Q,le),je=new uw(C,be,le,$),Oe=new M1(C,J,be,le),Le=new L1(C,J,be,le),be.programs=Te.programs,m.capabilities=le,m.extensions=J,m.properties=ve,m.renderLists=xe,m.shadowMap=ie,m.state=$,m.info=be}at();let Ge=new gh(m,C);this.xr=Ge,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(O,G,!1))},this.getSize=function(w){return w.set(O,G)},this.setSize=function(w,D,B=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,G=D,n.width=Math.floor(w*X),n.height=Math.floor(D*X),B===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(O*X,G*X).floor()},this.setDrawingBufferSize=function(w,D,B){O=w,G=D,X=B,n.width=Math.floor(w*B),n.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,D,B,H){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,D,B,H),$.viewport(T.copy(j).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,D,B,H){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,D,B,H),$.scissor(I.copy(re).multiplyScalar(X).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(w){$.setScissorTest(ge=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,D=!0,B=!0){let H=0;if(w){let V=!1;if(b!==null){let ye=b.texture.format;V=ye===ng||ye===tg||ye===eg}if(V){let ye=b.texture.type,Re=ye===$i||ye===Wi||ye===zh||ye===Ir||ye===Km||ye===Qm,Ne=Ze.getClearColor(),De=Ze.getClearAlpha(),He=Ne.r,Ce=Ne.g,Ee=Ne.b;Re?(p[0]=He,p[1]=Ce,p[2]=Ee,p[3]=De,C.clearBufferuiv(C.COLOR,0,p)):(_[0]=He,_[1]=Ce,_[2]=Ee,_[3]=De,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}D&&(H|=C.DEPTH_BUFFER_BIT),B&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",k,!1),xe.dispose(),Ue.dispose(),ve.dispose(),x.dispose(),F.dispose(),Q.dispose(),Ve.dispose(),je.dispose(),Te.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",it),Ge.removeEventListener("sessionend",Xe),we&&(we.dispose(),we=null),ht.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let w=be.autoReset,D=ie.enabled,B=ie.autoUpdate,H=ie.needsUpdate,V=ie.type;at(),be.autoReset=w,ie.enabled=D,ie.autoUpdate=B,ie.needsUpdate=H,ie.type=V}function k(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function z(w){let D=w.target;D.removeEventListener("dispose",z),ce(D)}function ce(w){K(w),ve.remove(w)}function K(w){let D=ve.get(w).programs;D!==void 0&&(D.forEach(function(B){Te.releaseProgram(B)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,H,V,ye){D===null&&(D=Ae);let Re=V.isMesh&&V.matrixWorld.determinant()<0,Ne=an(w,D,B,H,V);$.setMaterial(H,Re);let De=B.index,He=1;if(H.wireframe===!0){if(De=oe.getWireframeAttribute(B),De===void 0)return;He=2}let Ce=B.drawRange,Ee=B.attributes.position,et=Ce.start*He,Lt=(Ce.start+Ce.count)*He;ye!==null&&(et=Math.max(et,ye.start*He),Lt=Math.min(Lt,(ye.start+ye.count)*He)),De!==null?(et=Math.max(et,0),Lt=Math.min(Lt,De.count)):Ee!=null&&(et=Math.max(et,0),Lt=Math.min(Lt,Ee.count));let ft=Lt-et;if(ft<0||ft===1/0)return;Ve.setup(V,H,Ne,B,De);let ln,mt=Oe;if(De!==null&&(ln=ne.get(De),mt=Le,mt.setIndex(ln)),V.isMesh)H.wireframe===!0?($.setLineWidth(H.wireframeLinewidth*Fe()),mt.setMode(C.LINES)):mt.setMode(C.TRIANGLES);else if(V.isLine){let $e=H.linewidth;$e===void 0&&($e=1),$.setLineWidth($e*Fe()),V.isLineSegments?mt.setMode(C.LINES):V.isLineLoop?mt.setMode(C.LINE_LOOP):mt.setMode(C.LINE_STRIP)}else V.isPoints?mt.setMode(C.POINTS):V.isSprite&&mt.setMode(C.TRIANGLES);if(V.isBatchedMesh)mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)mt.renderInstances(et,ft,V.count);else if(B.isInstancedBufferGeometry){let $e=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,iu=Math.min(B.instanceCount,$e);mt.renderInstances(et,ft,iu)}else mt.render(et,ft)};function ke(w,D,B){w.transparent===!0&&w.side===Wn&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,li(w,D,B),w.side=Ji,w.needsUpdate=!0,li(w,D,B),w.side=Wn):li(w,D,B)}this.compile=function(w,D,B=null){B===null&&(B=w),g=Ue.get(B),g.init(),v.push(g),B.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),w!==B&&w.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights(m._useLegacyLights);let H=new Set;return w.traverse(function(V){let ye=V.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){let Ne=ye[Re];ke(Ne,B,V),H.add(Ne)}else ke(ye,B,V),H.add(ye)}),v.pop(),g=null,H},this.compileAsync=function(w,D,B=null){let H=this.compile(w,D,B);return new Promise(V=>{function ye(){if(H.forEach(function(Re){ve.get(Re).currentProgram.isReady()&&H.delete(Re)}),H.size===0){V(w);return}setTimeout(ye,10)}J.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ee=null;function ze(w){ee&&ee(w)}function it(){ht.stop()}function Xe(){ht.start()}let ht=new cg;ht.setAnimationLoop(ze),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(w){ee=w,Ge.setAnimationLoop(w),w===null?ht.stop():ht.start()},Ge.addEventListener("sessionstart",it),Ge.addEventListener("sessionend",Xe),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(D),D=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,D,b),g=Ue.get(w,v.length),g.init(),v.push(g),fe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(fe),_e=this.localClippingEnabled,se=Be.init(this.clippingPlanes,_e),y=xe.get(w,h.length),y.init(),h.push(y),Qt(w,D,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(q,Y),this.info.render.frame++,se===!0&&Be.beginShadows();let B=g.state.shadowsArray;if(ie.render(B,w,D),se===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(y,w),g.setupLights(m._useLegacyLights),D.isArrayCamera){let H=D.cameras;for(let V=0,ye=H.length;V<ye;V++){let Re=H[V];oi(y,w,Re,Re.viewport)}}else oi(y,w,D);b!==null&&(M.updateMultisampleRenderTarget(b),M.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(m,w,D),Ve.resetDefaultState(),U=-1,E=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Qt(w,D,B,H){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){H&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);let Re=Q.update(w),Ne=w.material;Ne.visible&&y.push(w,Re,Ne,B,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let Re=Q.update(w),Ne=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Pe.copy(Re.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(Ne)){let De=Re.groups;for(let He=0,Ce=De.length;He<Ce;He++){let Ee=De[He],et=Ne[Ee.materialIndex];et&&et.visible&&y.push(w,Re,et,B,Pe.z,Ee)}}else Ne.visible&&y.push(w,Re,Ne,B,Pe.z,null)}}let ye=w.children;for(let Re=0,Ne=ye.length;Re<Ne;Re++)Qt(ye[Re],D,B,H)}function oi(w,D,B,H){let V=w.opaque,ye=w.transmissive,Re=w.transparent;g.setupLightsView(B),se===!0&&Be.setGlobalState(m.clippingPlanes,B),ye.length>0&&ai(V,ye,D,B),H&&$.viewport(T.copy(H)),V.length>0&&gn(V,D,B),ye.length>0&&gn(ye,D,B),Re.length>0&&gn(Re,D,B),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function ai(w,D,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let ye=le.isWebGL2;we===null&&(we=new Ti(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?To:$i,minFilter:wo,samples:ye?4:0})),m.getDrawingBufferSize(Ie),ye?we.setSize(Ie.x,Ie.y):we.setSize(th(Ie.x),th(Ie.y));let Re=m.getRenderTarget();m.setRenderTarget(we),m.getClearColor(te),P=m.getClearAlpha(),P<1&&m.setClearColor(16777215,.5),m.clear();let Ne=m.toneMapping;m.toneMapping=Zi,gn(w,B,H),M.updateMultisampleRenderTarget(we),M.updateRenderTargetMipmap(we);let De=!1;for(let He=0,Ce=D.length;He<Ce;He++){let Ee=D[He],et=Ee.object,Lt=Ee.geometry,ft=Ee.material,ln=Ee.group;if(ft.side===Wn&&et.layers.test(H.layers)){let mt=ft.side;ft.side=un,ft.needsUpdate=!0,Sr(et,B,H,Lt,ft,ln),ft.side=mt,ft.needsUpdate=!0,De=!0}}De===!0&&(M.updateMultisampleRenderTarget(we),M.updateRenderTargetMipmap(we)),m.setRenderTarget(Re),m.setClearColor(te,P),m.toneMapping=Ne}function gn(w,D,B){let H=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ye=w.length;V<ye;V++){let Re=w[V],Ne=Re.object,De=Re.geometry,He=H===null?Re.material:H,Ce=Re.group;Ne.layers.test(B.layers)&&Sr(Ne,D,B,De,He,Ce)}}function Sr(w,D,B,H,V,ye){w.onBeforeRender(m,D,B,H,V,ye),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(m,D,B,H,w,ye),V.transparent===!0&&V.side===Wn&&V.forceSinglePass===!1?(V.side=un,V.needsUpdate=!0,m.renderBufferDirect(B,D,H,V,w,ye),V.side=Ji,V.needsUpdate=!0,m.renderBufferDirect(B,D,H,V,w,ye),V.side=Wn):m.renderBufferDirect(B,D,H,V,w,ye),w.onAfterRender(m,D,B,H,V,ye)}function li(w,D,B){D.isScene!==!0&&(D=Ae);let H=ve.get(w),V=g.state.lights,ye=g.state.shadowsArray,Re=V.state.version,Ne=Te.getParameters(w,V.state,ye,D,B),De=Te.getProgramCacheKey(Ne),He=H.programs;H.environment=w.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(w.isMeshStandardMaterial?F:x).get(w.envMap||H.environment),He===void 0&&(w.addEventListener("dispose",z),He=new Map,H.programs=He);let Ce=He.get(De);if(Ce!==void 0){if(H.currentProgram===Ce&&H.lightsStateVersion===Re)return zi(w,Ne),Ce}else Ne.uniforms=Te.getUniforms(w),w.onBuild(B,Ne,m),w.onBeforeCompile(Ne,m),Ce=Te.acquireProgram(Ne,De),He.set(De,Ce),H.uniforms=Ne.uniforms;let Ee=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=Be.uniform),zi(w,Ne),H.needsLights=Bn(w),H.lightsStateVersion=Re,H.needsLights&&(Ee.ambientLightColor.value=V.state.ambient,Ee.lightProbe.value=V.state.probe,Ee.directionalLights.value=V.state.directional,Ee.directionalLightShadows.value=V.state.directionalShadow,Ee.spotLights.value=V.state.spot,Ee.spotLightShadows.value=V.state.spotShadow,Ee.rectAreaLights.value=V.state.rectArea,Ee.ltc_1.value=V.state.rectAreaLTC1,Ee.ltc_2.value=V.state.rectAreaLTC2,Ee.pointLights.value=V.state.point,Ee.pointLightShadows.value=V.state.pointShadow,Ee.hemisphereLights.value=V.state.hemi,Ee.directionalShadowMap.value=V.state.directionalShadowMap,Ee.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ee.spotShadowMap.value=V.state.spotShadowMap,Ee.spotLightMatrix.value=V.state.spotLightMatrix,Ee.spotLightMap.value=V.state.spotLightMap,Ee.pointShadowMap.value=V.state.pointShadowMap,Ee.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=Ce,H.uniformsList=null,Ce}function Oi(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Ts.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function zi(w,D){let B=ve.get(w);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function an(w,D,B,H,V){D.isScene!==!0&&(D=Ae),M.resetTextureUnits();let ye=D.fog,Re=H.isMeshStandardMaterial?D.environment:null,Ne=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:wi,De=(H.isMeshStandardMaterial?F:x).get(H.envMap||Re),He=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!B.morphAttributes.position,et=!!B.morphAttributes.normal,Lt=!!B.morphAttributes.color,ft=Zi;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ft=m.toneMapping);let ln=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=ln!==void 0?ln.length:0,$e=ve.get(H),iu=g.state.lights;if(se===!0&&(_e===!0||w!==E)){let An=w===E&&H.id===U;Be.setState(H,w,An)}let St=!1;H.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==iu.state.version||$e.outputColorSpace!==Ne||V.isBatchedMesh&&$e.batching===!1||!V.isBatchedMesh&&$e.batching===!0||V.isInstancedMesh&&$e.instancing===!1||!V.isInstancedMesh&&$e.instancing===!0||V.isSkinnedMesh&&$e.skinning===!1||!V.isSkinnedMesh&&$e.skinning===!0||V.isInstancedMesh&&$e.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&$e.instancingColor===!1&&V.instanceColor!==null||$e.envMap!==De||H.fog===!0&&$e.fog!==ye||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Be.numPlanes||$e.numIntersection!==Be.numIntersection)||$e.vertexAlphas!==He||$e.vertexTangents!==Ce||$e.morphTargets!==Ee||$e.morphNormals!==et||$e.morphColors!==Lt||$e.toneMapping!==ft||le.isWebGL2===!0&&$e.morphTargetsCount!==mt)&&(St=!0):(St=!0,$e.__version=H.version);let Mr=$e.currentProgram;St===!0&&(Mr=li(H,D,V));let sp=!1,ho=!1,ru=!1,Wt=Mr.getUniforms(),Er=$e.uniforms;if($.useProgram(Mr.program)&&(sp=!0,ho=!0,ru=!0),H.id!==U&&(U=H.id,ho=!0),sp||E!==w){Wt.setValue(C,"projectionMatrix",w.projectionMatrix),Wt.setValue(C,"viewMatrix",w.matrixWorldInverse);let An=Wt.map.cameraPosition;An!==void 0&&An.setValue(C,Pe.setFromMatrixPosition(w.matrixWorld)),le.logarithmicDepthBuffer&&Wt.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Wt.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,ho=!0,ru=!0)}if(V.isSkinnedMesh){Wt.setOptional(C,V,"bindMatrix"),Wt.setOptional(C,V,"bindMatrixInverse");let An=V.skeleton;An&&(le.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Wt.setValue(C,"boneTexture",An.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Wt.setOptional(C,V,"batchingTexture"),Wt.setValue(C,"batchingTexture",V._matricesTexture,M));let su=B.morphAttributes;if((su.position!==void 0||su.normal!==void 0||su.color!==void 0&&le.isWebGL2===!0)&&We.update(V,B,Mr),(ho||$e.receiveShadow!==V.receiveShadow)&&($e.receiveShadow=V.receiveShadow,Wt.setValue(C,"receiveShadow",V.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Er.envMap.value=De,Er.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ho&&(Wt.setValue(C,"toneMappingExposure",m.toneMappingExposure),$e.needsLights&&Ft(Er,ru),ye&&H.fog===!0&&pe.refreshFogUniforms(Er,ye),pe.refreshMaterialUniforms(Er,H,X,G,we),Ts.upload(C,Oi($e),Er,M)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ts.upload(C,Oi($e),Er,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Wt.setValue(C,"center",V.center),Wt.setValue(C,"modelViewMatrix",V.modelViewMatrix),Wt.setValue(C,"normalMatrix",V.normalMatrix),Wt.setValue(C,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let An=H.uniformsGroups;for(let ou=0,J_=An.length;ou<J_;ou++)if(le.isWebGL2){let op=An[ou];je.update(op,Mr),je.bind(op,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function Ft(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Bn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,D,B){ve.get(w.texture).__webglTexture=D,ve.get(w.depthTexture).__webglTexture=B;let H=ve.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){let B=ve.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){b=w,R=D,A=B;let H=!0,V=null,ye=!1,Re=!1;if(w){let De=ve.get(w);De.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(C.FRAMEBUFFER,null),H=!1):De.__webglFramebuffer===void 0?M.setupRenderTarget(w):De.__hasExternalTextures&&M.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);let He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);let Ce=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?V=Ce[D][B]:V=Ce[D],ye=!0):le.isWebGL2&&w.samples>0&&M.useMultisampledRTT(w)===!1?V=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[B]:V=Ce,T.copy(w.viewport),I.copy(w.scissor),Z=w.scissorTest}else T.copy(j).multiplyScalar(X).floor(),I.copy(re).multiplyScalar(X).floor(),Z=ge;if($.bindFramebuffer(C.FRAMEBUFFER,V)&&le.drawBuffers&&H&&$.drawBuffers(w,V),$.viewport(T),$.scissor(I),$.setScissorTest(Z),ye){let De=ve.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,De.__webglTexture,B)}else if(Re){let De=ve.get(w.texture),He=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,De.__webglTexture,B||0,He)}U=-1},this.readRenderTargetPixels=function(w,D,B,H,V,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){$.bindFramebuffer(C.FRAMEBUFFER,Ne);try{let De=w.texture,He=De.format,Ce=De.type;if(He!==qn&&Se.convert(He)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ee=Ce===To&&(J.has("EXT_color_buffer_half_float")||le.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ce!==$i&&Se.convert(Ce)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ce===Xi&&(le.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-H&&B>=0&&B<=w.height-V&&C.readPixels(D,B,H,V,Se.convert(He),Se.convert(Ce),ye)}finally{let De=b!==null?ve.get(b).__webglFramebuffer:null;$.bindFramebuffer(C.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,D,B=0){let H=Math.pow(2,-B),V=Math.floor(D.image.width*H),ye=Math.floor(D.image.height*H);M.setTexture2D(D,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,w.x,w.y,V,ye),$.unbindTexture()},this.copyTextureToTexture=function(w,D,B,H=0){let V=D.image.width,ye=D.image.height,Re=Se.convert(B.format),Ne=Se.convert(B.type);M.setTexture2D(B,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,H,w.x,w.y,V,ye,Re,Ne,D.image.data):D.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,H,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,Re,D.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,H,w.x,w.y,Re,Ne,D.image),H===0&&B.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B,H,V=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,De=Se.convert(H.format),He=Se.convert(H.type),Ce;if(H.isData3DTexture)M.setTexture3D(H,0),Ce=C.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)M.setTexture2DArray(H,0),Ce=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let Ee=C.getParameter(C.UNPACK_ROW_LENGTH),et=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Lt=C.getParameter(C.UNPACK_SKIP_PIXELS),ft=C.getParameter(C.UNPACK_SKIP_ROWS),ln=C.getParameter(C.UNPACK_SKIP_IMAGES),mt=B.isCompressedTexture?B.mipmaps[V]:B.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,w.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,w.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?C.texSubImage3D(Ce,V,D.x,D.y,D.z,ye,Re,Ne,De,He,mt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Ce,V,D.x,D.y,D.z,ye,Re,Ne,De,mt.data)):C.texSubImage3D(Ce,V,D.x,D.y,D.z,ye,Re,Ne,De,He,mt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ee),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ln),V===0&&H.generateMipmaps&&C.generateMipmap(Ce),$.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?M.setTextureCube(w,0):w.isData3DTexture?M.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?M.setTexture2DArray(w,0):M.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,$.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===kh?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===Il?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Ur:rg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Tt:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},vh=class extends Ro{};vh.prototype.isWebGL1Renderer=!0;var El=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};var Or=class extends Nt{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Co=class extends Pn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){let i=this.getLengths(),r=0,s=i.length,o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new me:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){let i=new N,r=[],s=[],o=[],a=new N,l=new kt;for(let p=0;p<=e;p++){let _=p/e;r[p]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Po=class extends Ln{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){let i=n||new me,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_h=class extends Po{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,r(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var el=new N,Wu=new Vh,Xu=new Vh,qu=new Vh,yh=class extends Ln{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){let i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(el.subVectors(r[0],r[1]).add(r[0]),c=el);let f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(el.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=el),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),Wu.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,y,g),Xu.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,y,g),qu.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,y,g)}else this.curveType==="catmullrom"&&(Wu.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Xu.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),qu.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Wu.calc(l),Xu.calc(l),qu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wm(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function hw(t,e){let n=1-t;return n*n*e}function fw(t,e){return 2*(1-t)*t*e}function dw(t,e){return t*t*e}function So(t,e,n,i){return hw(t,e)+fw(t,n)+dw(t,i)}function pw(t,e){let n=1-t;return n*n*n*e}function mw(t,e){let n=1-t;return 3*n*n*t*e}function gw(t,e){return 3*(1-t)*t*t*e}function vw(t,e){return t*t*t*e}function Mo(t,e,n,i,r){return pw(t,e)+mw(t,n)+gw(t,i)+vw(t,r)}var wl=class extends Ln{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,r.x,s.x,o.x,a.x),Mo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xh=class extends Ln{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,r.x,s.x,o.x,a.x),Mo(e,r.y,s.y,o.y,a.y),Mo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tl=class extends Ln{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sh=class extends Ln{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Al=class extends Ln{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(So(e,r.x,s.x,o.x),So(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mh=class extends Ln{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(So(e,r.x,s.x,o.x),So(e,r.y,s.y,o.y),So(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){let i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Wm(a,l.x,c.x,u.x,f.x),Wm(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new me().fromArray(r))}return this}},Eh=Object.freeze({__proto__:null,ArcCurve:_h,CatmullRomCurve3:yh,CubicBezierCurve:wl,CubicBezierCurve3:xh,EllipseCurve:Po,LineCurve:Tl,LineCurve3:Sh,QuadraticBezierCurve:Al,QuadraticBezierCurve3:Mh,SplineCurve:bl}),wh=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(new Eh[r.type]().fromJSON(r))}return this}},Lo=class extends wh{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new Tl(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){let s=new Al(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){let a=new wl(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new bl(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){let c=new Po(e,n,i,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Th=class t extends $n{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Ot(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/n,f=new N,d=new me,p=new N,_=new N,y=new N,g=0,h=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,h=e[v+1].y-e[v].y,p.x=h*1,p.y=-g,p.z=h*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,h=e[v+1].y-e[v].y,p.x=h*1,p.y=-g,p.z=h*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let v=0;v<=n;v++){let m=i+v*u*r,S=Math.sin(m),R=Math.cos(m);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*S,f.y=e[A].y,f.z=e[A].x*R,o.push(f.x,f.y,f.z),d.x=v/n,d.y=A/(e.length-1),a.push(d.x,d.y);let b=l[3*A+0]*S,U=l[3*A+1],E=l[3*A+0]*R;c.push(b,U,E)}}for(let v=0;v<n;v++)for(let m=0;m<e.length-1;m++){let S=m+v*e.length,R=S,A=S+e.length,b=S+e.length+1,U=S+1;s.push(R,A,U),s.push(b,U,A)}this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},Rl=class t extends Th{constructor(e=1,n=1,i=4,r=8){let s=new Lo;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new t(e.radius,e.length,e.capSegments,e.radialSegments)}};var Qi=class extends Lo{constructor(e){super(e),this.uuid=Us(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(new Lo().fromJSON(r))}return this}},_w={triangulate:function(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=mg(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,d,p;if(i&&(s=Ew(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let _=n;_<r;_+=n)f=t[_],d=t[_+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Io(s,o,n,a,l,p,0),o}};function mg(t,e,n,i,r){let s,o;if(r===Uw(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Xm(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Xm(s,t[s],t[s+1],o);return o&&Ul(o,o.next)&&(Uo(o),o=o.next),o}function zr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ul(n,n.next)||gt(n.prev,n,n.next)===0)){if(Uo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Io(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Rw(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?xw(t,i,r,s):yw(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Uo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Sw(zr(t),e,n),Io(t,e,n,i,r,s,2)):o===2&&Mw(t,e,n,i,r,s):Io(zr(t),e,n,i,r,s,1);break}}}function yw(t){let e=t.prev,n=t,i=t.next;if(gt(e,n,i)>=0)return!1;let r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c,_=i.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=f&&_.y<=p&&Ms(r,a,s,l,o,c,_.x,_.y)&&gt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xw(t,e,n,i){let r=t.prev,s=t,o=t.next;if(gt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,_=u<f?u<d?u:d:f<d?f:d,y=a>l?a>c?a:c:l>c?l:c,g=u>f?u>d?u:d:f>d?f:d,h=Ah(p,_,e,n,i),v=Ah(y,g,e,n,i),m=t.prevZ,S=t.nextZ;for(;m&&m.z>=h&&S&&S.z<=v;){if(m.x>=p&&m.x<=y&&m.y>=_&&m.y<=g&&m!==r&&m!==o&&Ms(a,u,l,f,c,d,m.x,m.y)&&gt(m.prev,m,m.next)>=0||(m=m.prevZ,S.x>=p&&S.x<=y&&S.y>=_&&S.y<=g&&S!==r&&S!==o&&Ms(a,u,l,f,c,d,S.x,S.y)&&gt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;m&&m.z>=h;){if(m.x>=p&&m.x<=y&&m.y>=_&&m.y<=g&&m!==r&&m!==o&&Ms(a,u,l,f,c,d,m.x,m.y)&&gt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=y&&S.y>=_&&S.y<=g&&S!==r&&S!==o&&Ms(a,u,l,f,c,d,S.x,S.y)&&gt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Sw(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!Ul(r,s)&&gg(r,i,i.next,s)&&No(r,s)&&No(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Uo(i),Uo(i.next),i=t=s),i=i.next}while(i!==t);return zr(i)}function Mw(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lw(o,a)){let l=vg(o,a);o=zr(o,o.next),l=zr(l,l.next),Io(o,e,n,i,r,s,0),Io(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Ew(t,e,n,i){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=mg(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Pw(c));for(r.sort(ww),s=0;s<r.length;s++)n=Tw(r[s],n);return n}function ww(t,e){return t.x-e.x}function Tw(t,e){let n=Aw(t,e);if(!n)return e;let i=vg(n,t);return zr(i,i.next),zr(n,n.next)}function Aw(t,e){let n=e,i=-1/0,r,s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ms(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),No(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&bw(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function bw(t,e){return gt(t.prev,t,e.prev)<0&&gt(e.next,t,t.next)<0}function Rw(t,e,n,i){let r=t;do r.z===0&&(r.z=Ah(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Cw(r)}function Cw(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Ah(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Pw(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ms(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Lw(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Iw(t,e)&&(No(t,e)&&No(e,t)&&Nw(t,e)&&(gt(t.prev,t,e.prev)||gt(t,e.prev,e))||Ul(t,e)&&gt(t.prev,t,t.next)>0&&gt(e.prev,e,e.next)>0)}function gt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ul(t,e){return t.x===e.x&&t.y===e.y}function gg(t,e,n,i){let r=nl(gt(t,e,n)),s=nl(gt(t,e,i)),o=nl(gt(n,i,t)),a=nl(gt(n,i,e));return!!(r!==s&&o!==a||r===0&&tl(t,n,e)||s===0&&tl(t,i,e)||o===0&&tl(n,t,i)||a===0&&tl(n,e,i))}function tl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function nl(t){return t>0?1:t<0?-1:0}function Iw(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&gg(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function No(t,e){return gt(t.prev,t,t.next)<0?gt(t,e,t.next)>=0&&gt(t,t.prev,e)>=0:gt(t,e,t.prev)<0||gt(t,t.next,e)<0}function Nw(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function vg(t,e){let n=new bh(t.i,t.x,t.y),i=new bh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Xm(t,e,n,i){let r=new bh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Uo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function bh(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Uw(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var Eo=class t{static area(e){let n=e.length,i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],r=[],s=[];qm(e),Ym(i,e);let o=e.length;n.forEach(qm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Ym(i,n[l]);let a=_w.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function qm(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ym(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Cl=class t extends $n{constructor(e=new Qi([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Bt(r,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,h=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:Dw,m,S=!1,R,A,b,U;h&&(m=h.getSpacedPoints(u),S=!0,d=!1,R=h.computeFrenetFrames(u,!1),A=new N,b=new N,U=new N),d||(g=0,p=0,_=0,y=0);let E=a.extractPoints(c),T=E.shape,I=E.holes;if(!Eo.isClockWise(T)){T=T.reverse();for(let C=0,ue=I.length;C<ue;C++){let J=I[C];Eo.isClockWise(J)&&(I[C]=J.reverse())}}let te=Eo.triangulateShape(T,I),P=T;for(let C=0,ue=I.length;C<ue;C++){let J=I[C];T=T.concat(J)}function O(C,ue,J){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ue,J)}let G=T.length,X=te.length;function q(C,ue,J){let le,$,be,ve=C.x-ue.x,M=C.y-ue.y,x=J.x-C.x,F=J.y-C.y,ne=ve*ve+M*M,oe=ve*F-M*x;if(Math.abs(oe)>Number.EPSILON){let Q=Math.sqrt(ne),Te=Math.sqrt(x*x+F*F),pe=ue.x-M/Q,xe=ue.y+ve/Q,Ue=J.x-F/Te,Be=J.y+x/Te,ie=((Ue-pe)*F-(Be-xe)*x)/(ve*F-M*x);le=pe+ve*ie-C.x,$=xe+M*ie-C.y;let Ze=le*le+$*$;if(Ze<=2)return new me(le,$);be=Math.sqrt(Ze/2)}else{let Q=!1;ve>Number.EPSILON?x>Number.EPSILON&&(Q=!0):ve<-Number.EPSILON?x<-Number.EPSILON&&(Q=!0):Math.sign(M)===Math.sign(F)&&(Q=!0),Q?(le=-M,$=ve,be=Math.sqrt(ne)):(le=ve,$=M,be=Math.sqrt(ne/2))}return new me(le/be,$/be)}let Y=[];for(let C=0,ue=P.length,J=ue-1,le=C+1;C<ue;C++,J++,le++)J===ue&&(J=0),le===ue&&(le=0),Y[C]=q(P[C],P[J],P[le]);let j=[],re,ge=Y.concat();for(let C=0,ue=I.length;C<ue;C++){let J=I[C];re=[];for(let le=0,$=J.length,be=$-1,ve=le+1;le<$;le++,be++,ve++)be===$&&(be=0),ve===$&&(ve=0),re[le]=q(J[le],J[be],J[ve]);j.push(re),ge=ge.concat(re)}for(let C=0;C<g;C++){let ue=C/g,J=p*Math.cos(ue*Math.PI/2),le=_*Math.sin(ue*Math.PI/2)+y;for(let $=0,be=P.length;$<be;$++){let ve=O(P[$],Y[$],le);fe(ve.x,ve.y,-J)}for(let $=0,be=I.length;$<be;$++){let ve=I[$];re=j[$];for(let M=0,x=ve.length;M<x;M++){let F=O(ve[M],re[M],le);fe(F.x,F.y,-J)}}}let W=_+y;for(let C=0;C<G;C++){let ue=d?O(T[C],ge[C],W):T[C];S?(b.copy(R.normals[0]).multiplyScalar(ue.x),A.copy(R.binormals[0]).multiplyScalar(ue.y),U.copy(m[0]).add(b).add(A),fe(U.x,U.y,U.z)):fe(ue.x,ue.y,0)}for(let C=1;C<=u;C++)for(let ue=0;ue<G;ue++){let J=d?O(T[ue],ge[ue],W):T[ue];S?(b.copy(R.normals[C]).multiplyScalar(J.x),A.copy(R.binormals[C]).multiplyScalar(J.y),U.copy(m[C]).add(b).add(A),fe(U.x,U.y,U.z)):fe(J.x,J.y,f/u*C)}for(let C=g-1;C>=0;C--){let ue=C/g,J=p*Math.cos(ue*Math.PI/2),le=_*Math.sin(ue*Math.PI/2)+y;for(let $=0,be=P.length;$<be;$++){let ve=O(P[$],Y[$],le);fe(ve.x,ve.y,f+J)}for(let $=0,be=I.length;$<be;$++){let ve=I[$];re=j[$];for(let M=0,x=ve.length;M<x;M++){let F=O(ve[M],re[M],le);S?fe(F.x,F.y+m[u-1].y,m[u-1].x+J):fe(F.x,F.y,f+J)}}}se(),_e();function se(){let C=r.length/3;if(d){let ue=0,J=G*ue;for(let le=0;le<X;le++){let $=te[le];Ie($[2]+J,$[1]+J,$[0]+J)}ue=u+g*2,J=G*ue;for(let le=0;le<X;le++){let $=te[le];Ie($[0]+J,$[1]+J,$[2]+J)}}else{for(let ue=0;ue<X;ue++){let J=te[ue];Ie(J[2],J[1],J[0])}for(let ue=0;ue<X;ue++){let J=te[ue];Ie(J[0]+G*u,J[1]+G*u,J[2]+G*u)}}i.addGroup(C,r.length/3-C,0)}function _e(){let C=r.length/3,ue=0;we(P,ue),ue+=P.length;for(let J=0,le=I.length;J<le;J++){let $=I[J];we($,ue),ue+=$.length}i.addGroup(C,r.length/3-C,1)}function we(C,ue){let J=C.length;for(;--J>=0;){let le=J,$=J-1;$<0&&($=C.length-1);for(let be=0,ve=u+g*2;be<ve;be++){let M=G*be,x=G*(be+1),F=ue+le+M,ne=ue+$+M,oe=ue+$+x,Q=ue+le+x;Pe(F,ne,oe,Q)}}}function fe(C,ue,J){l.push(C),l.push(ue),l.push(J)}function Ie(C,ue,J){Ae(C),Ae(ue),Ae(J);let le=r.length/3,$=v.generateTopUV(i,r,le-3,le-2,le-1);Fe($[0]),Fe($[1]),Fe($[2])}function Pe(C,ue,J,le){Ae(C),Ae(ue),Ae(le),Ae(ue),Ae(J),Ae(le);let $=r.length/3,be=v.generateSideWallUV(i,r,$-6,$-3,$-2,$-1);Fe(be[0]),Fe(be[1]),Fe(be[3]),Fe(be[1]),Fe(be[2]),Fe(be[3])}function Ae(C){r.push(l[C*3+0]),r.push(l[C*3+1]),r.push(l[C*3+2])}function Fe(C){s.push(C.x),s.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Fw(n,i,e)}static fromJSON(e,n){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=n[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Eh[r.type]().fromJSON(r)),new t(i,e.options)}},Dw={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new me(s,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],_=e[r*3+2],y=e[s*3],g=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-f),new me(d,1-_),new me(y,1-h)]:[new me(a,1-l),new me(u,1-f),new me(p,1-_),new me(g,1-h)]}};function Fw(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}function il(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Ow(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Ns=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rh=class extends Ns{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:em,endingEnd:em}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case tm:s=e,a=2*n-i;break;case nm:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tm:o=e,l=2*i-n;break;case nm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-n)/(r-n),y=_*_,g=y*_,h=-d*g+2*d*y-d*_,v=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*_+1,m=(-1-p)*g+(1.5+p)*y+.5*_,S=p*g-p*y;for(let R=0;R!==a;++R)s[R]=h*o[u+R]+v*o[c+R]+m*o[l+R]+S*o[f+R];return s}},Ch=class extends Ns{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}},Ph=class extends Ns{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=il(n,this.TimeBufferType),this.values=il(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:il(e.times,Array),values:il(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case sl:n=this.InterpolantFactoryMethodDiscrete;break;case ol:n=this.InterpolantFactoryMethodLinear;break;case yu:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sl;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Ow(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===yu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){let y=n[f+_];if(y!==n[d+_]||y!==n[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=ol;var kr=class extends jn{};kr.prototype.ValueTypeName="bool";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=sl;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends jn{};Lh.prototype.ValueTypeName="color";var Ih=class extends jn{};Ih.prototype.ValueTypeName="number";var Nh=class extends Ns{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)Ki.slerpFlat(s,0,o,c-a,o,c,l);return s}},Do=class extends jn{InterpolantFactoryMethodLinear(e){return new Nh(this.times,this.values,this.getValueSize(),e)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.DefaultInterpolation=ol;Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends jn{};Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=sl;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Uh=class extends jn{};Uh.prototype.ValueTypeName="vector";var Dh=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},zw=new Dh,Fh=class{constructor(e){this.manager=e!==void 0?e:zw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pl=class extends $n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Hh="\\[\\]\\.:\\/",kw=new RegExp("["+Hh+"]","g"),Gh="[^"+Hh+"]",Bw="[^"+Hh.replace("\\.","")+"]",Vw=/((?:WC+[\/:])*)/.source.replace("WC",Gh),Hw=/(WCOD+)?/.source.replace("WCOD",Bw),Gw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),Ww=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),Xw=new RegExp("^"+Vw+Hw+Gw+Ww+"$"),qw=["material","materials","bones","map"],Oh=class{constructor(e,n,i){let r=i||dt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},dt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kw,"")}static parseTrackName(e){let n=Xw.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);qw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Oh;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _b=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Fo=new N;function In(t,e,n,i,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Fo.copy(e),Fo[i]=0,Fo.normalize();let c=.5*o/(o+a),u=1-Fo.angleTo(t)/l;return Math.sign(Fo[n])===1?u*c:a/(o+a)+c+c*(1-u)}var Dl=class extends Fr{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new N,l=new N,c=new N(e,n,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new N,y=.5/r;for(let g=0,h=0;g<u.length;g+=3,h+=2)switch(a.fromArray(u,g),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),u[g+0]=c.x*Math.sign(a.x)+l.x*s,u[g+1]=c.y*Math.sign(a.y)+l.y*s,u[g+2]=c.z*Math.sign(a.z)+l.z*s,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[h+0]=In(_,l,"z","y",s,i),d[h+1]=1-In(_,l,"y","z",s,n);break;case 1:_.set(-1,0,0),d[h+0]=1-In(_,l,"z","y",s,i),d[h+1]=1-In(_,l,"y","z",s,n);break;case 2:_.set(0,1,0),d[h+0]=1-In(_,l,"x","z",s,e),d[h+1]=In(_,l,"z","x",s,i);break;case 3:_.set(0,-1,0),d[h+0]=1-In(_,l,"x","z",s,e),d[h+1]=1-In(_,l,"z","x",s,i);break;case 4:_.set(0,0,1),d[h+0]=1-In(_,l,"x","y",s,e),d[h+1]=1-In(_,l,"y","x",s,n);break;case 5:_.set(0,0,-1),d[h+0]=In(_,l,"x","y",s,e),d[h+1]=1-In(_,l,"y","x",s,n);break}}};var vt=new qi,Fl=new N,_g=new me,yg=new me,xg=new me,Ol=class{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){let e=this.indexAttribute,n=this.positionAttribute,i=this.weightAttribute,r=e?e.count/3:n.count/3,s=new Float32Array(r);for(let l=0;l<r;l++){let c=1,u=3*l,f=3*l+1,d=3*l+2;e&&(u=e.getX(u),f=e.getX(f),d=e.getX(d)),i&&(c=i.getX(u)+i.getX(f)+i.getX(d)),vt.a.fromBufferAttribute(n,u),vt.b.fromBufferAttribute(n,f),vt.c.fromBufferAttribute(n,d),c*=vt.getArea(),s[l]=c}let o=new Float32Array(r),a=0;for(let l=0;l<r;l++)a+=s[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,n,i,r){let s=this.sampleFaceIndex();return this.sampleFace(s,e,n,i,r)}sampleFaceIndex(){let e=this.distribution[this.distribution.length-1];return this.binarySearch(this.randomFunction()*e)}binarySearch(e){let n=this.distribution,i=0,r=n.length-1,s=-1;for(;i<=r;){let o=Math.ceil((i+r)/2);if(o===0||n[o-1]<=e&&n[o]>e){s=o;break}else e<n[o]?r=o-1:i=o+1}return s}sampleFace(e,n,i,r,s){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);let l=this.indexAttribute,c=e*3,u=e*3+1,f=e*3+2;return l&&(c=l.getX(c),u=l.getX(u),f=l.getX(f)),vt.a.fromBufferAttribute(this.positionAttribute,c),vt.b.fromBufferAttribute(this.positionAttribute,u),vt.c.fromBufferAttribute(this.positionAttribute,f),n.set(0,0,0).addScaledVector(vt.a,o).addScaledVector(vt.b,a).addScaledVector(vt.c,1-(o+a)),i!==void 0&&(this.normalAttribute!==void 0?(vt.a.fromBufferAttribute(this.normalAttribute,c),vt.b.fromBufferAttribute(this.normalAttribute,u),vt.c.fromBufferAttribute(this.normalAttribute,f),i.set(0,0,0).addScaledVector(vt.a,o).addScaledVector(vt.b,a).addScaledVector(vt.c,1-(o+a)).normalize()):vt.getNormal(i)),r!==void 0&&this.colorAttribute!==void 0&&(vt.a.fromBufferAttribute(this.colorAttribute,c),vt.b.fromBufferAttribute(this.colorAttribute,u),vt.c.fromBufferAttribute(this.colorAttribute,f),Fl.set(0,0,0).addScaledVector(vt.a,o).addScaledVector(vt.b,a).addScaledVector(vt.c,1-(o+a)),r.r=Fl.x,r.g=Fl.y,r.b=Fl.z),s!==void 0&&this.uvAttribute!==void 0&&(_g.fromBufferAttribute(this.uvAttribute,c),yg.fromBufferAttribute(this.uvAttribute,u),xg.fromBufferAttribute(this.uvAttribute,f),s.set(0,0).addScaledVector(_g,o).addScaledVector(yg,a).addScaledVector(xg,1-(o+a))),this}};function Sg(t,e=1e-4){e=Math.max(e,Number.EPSILON);let n={},i=t.getIndex(),r=t.getAttribute("position"),s=i?i.count:r.count,o=0,a=Object.keys(t.attributes),l={},c={},u=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,m=a.length;v<m;v++){let S=a[v],R=t.attributes[S];l[S]=new Nt(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);let A=t.morphAttributes[S];A&&(c[S]=new Nt(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized))}let p=e*.5,_=Math.log10(1/e),y=Math.pow(10,_),g=p*y;for(let v=0;v<s;v++){let m=i?i.getX(v):v,S="";for(let R=0,A=a.length;R<A;R++){let b=a[R],U=t.getAttribute(b),E=U.itemSize;for(let T=0;T<E;T++)S+=`${~~(U[f[T]](m)*y+g)},`}if(S in n)u.push(n[S]);else{for(let R=0,A=a.length;R<A;R++){let b=a[R],U=t.getAttribute(b),E=t.morphAttributes[b],T=U.itemSize,I=l[b],Z=c[b];for(let te=0;te<T;te++){let P=f[te],O=d[te];if(I[O](o,U[P](m)),E)for(let G=0,X=E.length;G<X;G++)Z[G][O](o,E[G][P](m))}}n[S]=o,u.push(o),o++}}let h=t.clone();for(let v in t.attributes){let m=l[v];if(h.setAttribute(v,new Nt(m.array.slice(0,o*m.itemSize),m.itemSize,m.normalized)),v in c)for(let S=0;S<c[v].length;S++){let R=c[v][S];h.morphAttributes[v][S]=new Nt(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return h.setIndex(u),h}var $_=lp(H_()),JA=".fcf-root{position:relative;overflow:hidden;width:100%;box-sizing:border-box;padding:72px clamp(20px,5vw,64px) 0;border-top:1px solid var(--color-border);background:var(--color-background);color:var(--color-foreground);font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased}.fcf-root *,.fcf-root *::before,.fcf-root *::after{box-sizing:border-box}.fcf-top{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,2fr);gap:48px}.fcf-name{margin:0;font-size:22px;line-height:1.2;font-weight:500;letter-spacing:-.02em}.fcf-tag{margin:8px 0 0;max-width:26ch;font-size:15px;line-height:1.5;color:var(--color-muted-foreground)}.fcf-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.fcf-ct{margin:0 0 14px;font-size:13px;line-height:1.2;color:var(--color-muted-foreground)}.fcf-list{margin:0;padding:0;list-style:none}.fcf-list li{margin:0;line-height:1.3}.fcf-list li+li{margin-top:10px}.fcf-link{position:relative;z-index:3;color:var(--color-foreground);text-decoration:none;font-size:15px;transition:color .2s ease}.fcf-link:hover{color:var(--color-muted-foreground)}.fcf-link:focus-visible,.fcf-again:focus-visible{outline:2px solid var(--color-primary);outline-offset:3px;border-radius:2px}.fcf-bottom{position:relative;z-index:3;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:12px 24px;margin-top:64px;padding-top:20px;border-top:1px solid var(--color-border);font-size:13px;line-height:1.3;color:var(--color-muted-foreground)}.fcf-legal{display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:20px}.fcf-legal .fcf-link{font-size:13px;color:var(--color-muted-foreground)}.fcf-legal .fcf-link:hover{color:var(--color-foreground)}.fcf-again{margin:0;padding:0;border:0;background:none;font:inherit;line-height:inherit;color:var(--color-foreground);cursor:pointer;text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--color-border);transition:text-decoration-color .2s ease}.fcf-again:hover{text-decoration-color:currentColor}.fcf-word{position:relative;z-index:1;display:block;left:50%;width:max-content;margin:clamp(48px,7vw,110px) 0 0;padding:0 .065em .05em 0;transform:translateX(-50%);font-size:22vw;font-weight:400;letter-spacing:-.065em;line-height:.82;white-space:nowrap;color:var(--color-foreground);user-select:none;-webkit-user-select:none}.fcf-ch{display:inline-block;transform-origin:50% 0}.fcf-stage{position:absolute;left:0;right:0;top:0;bottom:0;z-index:2;pointer-events:none;opacity:0;transition:opacity .4s ease}.fcf-stage.fcf-ready{opacity:1}.fcf-canvas{position:absolute;inset:0;width:100%;height:100%;max-width:none;display:block}.fcf-haze{position:absolute;left:0;right:0;top:0;height:150px;z-index:2;pointer-events:none}.fcf-haze i{position:absolute;inset:0}.fcf-haze i:nth-child(1){-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);-webkit-mask-image:linear-gradient(#000 0%,#000 55%,transparent 100%);mask-image:linear-gradient(#000 0%,#000 55%,transparent 100%)}.fcf-haze i:nth-child(2){-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);-webkit-mask-image:linear-gradient(#000 0%,#000 30%,transparent 70%);mask-image:linear-gradient(#000 0%,#000 30%,transparent 70%)}.fcf-haze i:nth-child(3){-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);-webkit-mask-image:linear-gradient(#000 0%,transparent 45%);mask-image:linear-gradient(#000 0%,transparent 45%)}.fcf-haze::after{content:'';position:absolute;inset:0;background:linear-gradient(var(--color-background),transparent 38%)}.fcf-sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}@media (hover:hover) and (pointer:fine){.fcf-root.fcf-over{cursor:grab}}.fcf-root.fcf-grab,.fcf-root.fcf-grab *{cursor:grabbing !important;user-select:none;-webkit-user-select:none}@media (max-width:760px){.fcf-top{grid-template-columns:minmax(0,1fr);gap:36px}.fcf-cols{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:32px}}@media (prefers-reduced-motion:reduce){.fcf-stage,.fcf-link,.fcf-again{transition:none}}",jA=[{title:"Product",links:[{label:"Overview",href:"#"},{label:"Pricing",href:"#"},{label:"Changelog",href:"#"},{label:"Roadmap",href:"#"}]},{title:"Company",links:[{label:"About",href:"#"},{label:"Careers",href:"#"},{label:"Press",href:"#"},{label:"Contact",href:"#"}]},{title:"Elsewhere",links:[{label:"Journal",href:"#"},{label:"Newsletter",href:"#"},{label:"Community",href:"#"},{label:"Press kit",href:"#"}]}],KA=[{label:"Privacy",href:"#"},{label:"Terms",href:"#"}],QA=[{shape:"cloud",colors:["#f0bc14","#ffdc64"],eyes:"dashes",size:1.08,label:"Marketing"},{shape:"flower",colors:["#e26a9d","#ffbdd9"],eyes:"short",size:.86,label:"APIs"},{shape:"cube",colors:["#2e7ed6","#b3e0ff"],eyes:"pills",size:1.22,label:"Web Apps"},{shape:"triangle",colors:["#fc3b2f","#ffa89c"],eyes:"short",size:1.05,label:"Websites"},{shape:"bean",colors:["#32b763","#baf3ca"],eyes:"big",size:.96,label:"Dashboards"},{shape:"puff",colors:["#a88cf0","#e6dcff"],eyes:"pills",size:.95,label:"more"}];function eb(t){return Math.max(40,Math.min(150,t<640?t/8.8:t/9.4))}function tb(t){return 10+t*.16}function nb(t,e=t){return{x:0,y:-9999,vx:0,vy:0,a:0,va:0,r:t,wall:e,live:!1,held:!1,onFloor:!1}}function ib(t,e,n,i,r){let s=(e+.5+(r()-.5)*.6)/n;t.live=!0,t.held=!1,t.onFloor=!1,t.x=Math.min(i.w-t.wall,Math.max(t.wall,s*i.w)),t.y=i.h+t.r+40+r()*160,t.vx=(r()-.5)*140,t.vy=-60-r()*120,t.a=(r()-.5)*1.2,t.va=(r()-.5)*3}function G_(t,e){let n=e.w/(t.length+1);t.forEach((i,r)=>{i.live=!0,i.x=n*(r+1),i.y=e.floor+i.r,i.vx=i.vy=i.a=i.va=0,i.onFloor=!0})}function rb(t,e,n,i){let r=[],s=Math.max(0,Math.min(.9,e.bounce));for(let o=0;o<t.length;o++){let a=t[o];if(r[o]=0,!!a.live){if(a.held&&i){let l=Math.min(e.w-a.wall,Math.max(a.wall,i.x)),c=Math.min(e.h-a.r*.6,Math.max(e.floor+a.r,i.y));a.vx=(l-a.x)*18,a.vy=(c-a.y)*18,a.va+=(-a.vx*25e-5-a.va)*4*n}else a.vy-=e.gravity*n;if(a.x+=a.vx*n,a.y+=a.vy*n,a.a+=a.va*n,a.onFloor=!1,a.y-a.r<e.floor&&(a.y=e.floor+a.r,a.vy<-80&&(r[o]=Math.min(1,-a.vy/1400)),a.vy=-a.vy*s,Math.abs(a.vy)<60&&(a.vy=0),a.onFloor=!0,a.vx*=1-3*n,a.va+=(-a.vx/a.r-a.va)*Math.min(1,3*n)),a.x-a.wall<0&&(a.x=a.wall,a.vx=Math.abs(a.vx)*s),a.x+a.wall>e.w&&(a.x=e.w-a.wall,a.vx=-Math.abs(a.vx)*s),a.va*=1-.6*n,a.onFloor){let l=Math.atan2(Math.sin(a.a),Math.cos(a.a));a.va+=-l*38*n,a.va*=1-4*n}}}for(let o=0;o<t.length;o++)for(let a=o+1;a<t.length;a++){let l=t[o],c=t[a];if(!l.live||!c.live)continue;let u=c.x-l.x,f=c.y-l.y,d=Math.hypot(u,f),p=(l.r+c.r)*.92;if(d<=0||d>=p)continue;let _=u/d,y=f/d,g=(p-d)/2;l.x-=_*g,l.y-=y*g,c.x+=_*g,c.y+=y*g;let h=(c.vx-l.vx)*_+(c.vy-l.vy)*y;if(h<0){let v=-(1+s)*h/2;l.vx-=v*_,l.vy-=v*y,c.vx+=v*_,c.vy+=v*y;let m=(c.vx-l.vx)*-y+(c.vy-l.vy)*_;l.va+=m*.002,c.va-=m*.002}}for(let o of t)o.live&&(o.x-o.wall<0&&(o.x=o.wall),o.x+o.wall>e.w&&(o.x=e.w-o.wall),o.y-o.r<e.floor&&(o.y=e.floor+o.r,o.vy<0&&(o.vy=0)),o.held&&i&&o.y>e.h-o.r*.6&&(o.y=e.h-o.r*.6));return r}function W_(t,e,n){for(let i=t.length-1;i>=0;i--){let r=t[i];if(r.live&&Math.hypot(r.x-e,r.y-n)<r.r*.95)return i}return-1}function sb(t,e,n){let i=e>1?t/(e-1)*2-1:0;return{x:n*.14*i,y:n*.2*i*i,deg:n*13*i}}function X_(t,e,n){let i=(n-t)/Math.max(1,e);return 1-Math.min(1,Math.max(0,i))}var ob="attribute vec3 aRoot;attribute vec3 aNrm;attribute vec4 aHair;uniform float uTime,uWind,uJolt,uStroke;uniform vec3 uHand;varying float vS;varying float vTint;varying vec3 vN;void main(){float s=position.y;float s2=s*s;vec3 n=normalize(aNrm);vec3 ref=abs(n.y)<0.9?vec3(0.,1.,0.):vec3(1.,0.,0.);vec3 u=normalize(cross(n,ref));vec3 v=cross(n,u);float cs=cos(aHair.x),sn=sin(aHair.x);vec3 side=u*cs+v*sn;vec3 lean=v*cs-u*sn;float len=aHair.y;vec3 p=aRoot+side*position.x+n*s*len+lean*aHair.z*s2*len;float sway=0.7*sin(uTime*1.1+dot(aRoot,vec3(1.6,1.2,1.4)))+0.3*sin(uTime*1.7+dot(aRoot,vec3(-2.,2.5,.6)));vec3 wd=normalize(vec3(1.,0.,.45));wd-=n*dot(wd,n);p+=wd*(sway*uWind*s2*len*.55);p+=side*(sin(uTime*32.+aHair.w*40.)*uJolt*s2*len*.45);vec3 off=aRoot-uHand;float f=uStroke*smoothstep(.42,0.,length(off));vec3 tang=off-n*dot(off,n);tang=length(tang)>1e-4?normalize(tang):side;p+=tang*(f*s2*len*1.5)-n*(f*s*len*.35);vS=s;vTint=aHair.w;vN=normalize(mat3(modelMatrix)*n);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",ab="uniform vec3 uRoot,uMid,uTip,uSun;varying float vS;varying float vTint;varying vec3 vN;void main(){vec3 c=mix(uRoot,uMid,smoothstep(0.,.45,vS));c=mix(c,uTip,smoothstep(.5,1.,vS));c*=.94+vTint*.12;float lit=max(dot(normalize(vN),normalize(uSun)),0.)*.32+.8;c*=lit*mix(.86,1.,smoothstep(0.,.5,vS));gl_FragColor=vec4(c,1.);}",lb={pills:[.055,.11,0,.13],short:[.04,.06,0,.1],dashes:[.038,.13,1.2,.15],big:[.068,.11,0,.115]},cb={cloud:.05,flower:.05,cube:.05,triangle:-.16,bean:.02,puff:-.03},ns=t=>{let e=Math.sin(t*127.1+311.7)*43758.5453;return e-Math.floor(e)};function ub(t,e){let n={r:0,g:0,b:0};return new Qe(t).getRGB(n,Tt),new Qe().setRGB(n.r*(1-e),n.g*(1-e),n.b*(1-e),Tt)}function Ra(t){let e=new Cl(t,{depth:.3,bevelEnabled:!0,bevelThickness:.14,bevelSize:.1,bevelSegments:6,curveSegments:24});return e.center(),hb(e)}function hb(t){t.deleteAttribute("normal"),t.deleteAttribute("uv");let e=Sg(t,.001);return e.computeVertexNormals(),t.dispose(),e}function q_(t,e=1,n=1,i=180){let r=new Qi;for(let s=0;s<=i;s++){let o=s/i*Math.PI*2,a=t(o),l=Math.cos(o+Math.PI/2)*a*e,c=Math.sin(o+Math.PI/2)*a*n;s?r.lineTo(l,c):r.moveTo(l,c)}return r}function fb(t){if(t==="cube")return new Dl(1,1,1,8,.24);if(t==="cloud")return Ra(q_(r=>.5+.055*Math.cos(5*r+.6)+.03*Math.cos(3*r+1.4)));if(t==="flower")return Ra(q_(r=>.47+.15*Math.cos(5*r)));if(t==="puff"){let r=new Qi;for(let s=0;s<=200;s++){let o=s/200*Math.PI*2,a=Math.min(1,Math.max(0,Math.sin(o)*1.6)),l=.46+.08*Math.cos(6*o+Math.PI)*a,c=Math.cos(o)*l*1.32,u=Math.sin(o)*l*.82;s?r.lineTo(c,u):r.moveTo(c,u)}return Ra(r)}if(t==="bean"){let r=new Qi,s=.64,o=.36;return r.moveTo(-s+o,-o),r.lineTo(s-o,-o*.92),r.absarc(s-o,0,o*.97,-Math.PI/2,Math.PI/2,!1),r.lineTo(-s+o,o),r.absarc(-s+o,0,o,Math.PI/2,Math.PI*3/2,!1),Ra(r)}let e=[[0,.6],[-.66,-.46],[.66,-.46]],n=.16,i=new Qi;return e.forEach((r,s)=>{let o=e[(s+2)%3],a=e[(s+1)%3],l=Math.hypot(o[0]-r[0],o[1]-r[1]),c=Math.hypot(a[0]-r[0],a[1]-r[1]),u=[r[0]+(o[0]-r[0])*n/l,r[1]+(o[1]-r[1])*n/l],f=[r[0]+(a[0]-r[0])*n/c,r[1]+(a[1]-r[1])*n/c];s?i.lineTo(u[0],u[1]):i.moveTo(u[0],u[1]),i.quadraticCurveTo(r[0],r[1],f[0],f[1])}),i.closePath(),Ra(i)}function db(t,e,n){let i=t.getAttribute("position"),r=new N,s=new Cs(e,n,0),o=0;for(let a=0;a<i.count;a++)o=Math.max(o,Math.abs(r.fromBufferAttribute(i,a).applyEuler(s).x));return o}function pb(){let e=[],n=[];for(let i=0;i<=5;i++){let r=i/5,s=.019*Math.pow(1-r,.85)+8e-4;e.push(-s,r,0,s,r,0)}for(let i=0;i<5;i++){let r=i*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}return{pos:e,idx:n}}function Z_({wordmark:t="Tuftworks",name:e="Tuftworks",tagline:n="Soft little things that sit on your desk.",columns:i=jA,legal:r=KA,copyright:s="\xA9 2026 Tuftworks",critters:o=QA,gravity:a=2600,bounce:l=.32,wind:c=1,density:u=1,sound:f=!0,volume:d=.4,curve:p=!0,idleHops:_=!0,dropLabel:y="Drop them again",onDrop:g,onCritterClick:h,className:v}){let m=Ye.useRef(null),S=Ye.useRef(null),R=Ye.useRef(null),A=Ye.useRef(null),b=Ye.useRef(()=>{}),U=Ye.useRef({onDrop:g,onCritterClick:h,sound:f,volume:d});U.current={onDrop:g,onCritterClick:h,sound:f,volume:d};let[E,T]=Ye.useState(!1);return Ye.useEffect(()=>{let I=m.current,Z=R.current;if(!I||!Z)return;let te=window.matchMedia("(prefers-reduced-motion: reduce)").matches,P;try{P=new Ro({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}P.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),P.setClearColor(0,0),P.domElement.className="fcf-canvas",Z.appendChild(P.domElement);let O=new El,G=new bo(0,1,1,0,-2e3,2e3);G.position.z=1e3;let X={w:1,h:1,floor:10,gravity:a,bounce:l},q=100,Y=()=>{let k=I.querySelector(".fcf-bottom"),z=S.current,ce=A.current;if(k){let K=k.offsetTop+k.offsetHeight+6;Z.style.top=K+"px",ce&&(ce.style.top=K+"px",ce.style.height=Math.max(36,(z?z.offsetTop:K+150)-K-4)+"px")}X.w=Math.max(1,Z.clientWidth),X.h=Math.max(1,Z.clientHeight),P.setSize(X.w,X.h,!1),G.right=X.w,G.top=X.h,G.updateProjectionMatrix(),q=eb(X.w),X.floor=tb(q)};Y();let j={value:0},re={value:te?0:c},ge={value:new N(.4,1,.8)},W=(()=>{let k=document.createElement("canvas");k.width=k.height=64;let z=k.getContext("2d");if(z){let ce=z.createRadialGradient(32,32,2,32,32,32);ce.addColorStop(0,"rgba(20,20,30,0.34)"),ce.addColorStop(.5,"rgba(20,20,30,0.14)"),ce.addColorStop(1,"rgba(20,20,30,0)"),z.fillStyle=ce,z.fillRect(0,0,64,64)}return new Co(k)})(),se=pb(),_e=new Ai({color:16777215}),we=Math.round(1e4*Math.max(.2,u)*(X.w<640?.6:1)),fe=[],Ie=o.map((k,z)=>{let ce=Math.max(.5,Math.min(1.8,k.size??1)),K=fb(k.shape);K.computeBoundingBox();let ke=K.boundingBox?K.boundingBox.max.z:.3,ee=-.22+ns(z*3.3)*.3,ze=db(K,.16,ee)+.24,it=new Yt(K,new Ai({color:new Qe(k.colors[0])})),[Xe,ht,Qt,oi]=lb[k.eyes],ai=cb[k.shape],gn=Xe+ht/2+.09,Sr=new Ol(it).build(),li=new Float32Array(we*3),Oi=new Float32Array(we*3),zi=new Float32Array(we*4),an=new N,Ft=new N;for(let Ce=0;Ce<we;Ce++){let Ee=Ce*7.13+z*97;Sr.sample(an,Ft),Ft.normalize();let et=.15*(.86+ns(Ee+3.1)*.28);if(Ft.z>.4&&an.z>ke-.2){let ft=Math.min(Math.hypot(an.x-oi,an.y-ai),Math.hypot(an.x+oi,an.y-ai));ft<gn&&(et*=.08+.92*(ft/gn)**2)}let Lt=Ft.z>.55?(.42+ns(Ee+7.9)*.36)*Math.min(1,et/.12):(ns(Ee+7.9)-.5)*.38;li.set([an.x,an.y,an.z],Ce*3),Oi.set([Ft.x,Ft.y,Ft.z],Ce*3),zi.set([ns(Ee+5.3)*Math.PI*2,et,Lt,ns(Ee+9.2)],Ce*4)}let Bn=new Pl;Bn.setAttribute("position",new Bt(se.pos,3)),Bn.setIndex(se.idx),Bn.setAttribute("aRoot",new Or(li,3)),Bn.setAttribute("aNrm",new Or(Oi,3)),Bn.setAttribute("aHair",new Or(zi,4)),Bn.instanceCount=we;let w={uJolt:{value:0},uStroke:{value:0},uHand:{value:new N(9,9,9)}},D=Ce=>Ce.clone().convertLinearToSRGB(),B=new Yt(Bn,new Jn({vertexShader:ob,fragmentShader:ab,side:Wn,uniforms:{uTime:j,uWind:re,uSun:ge,uRoot:{value:D(ub(k.colors[0],.2))},uMid:{value:D(new Qe(k.colors[0]))},uTip:{value:D(new Qe(k.colors[1]))},...w}}));B.frustumCulled=!1;let H=new Yn;H.position.set(0,ai,ke+.13);let V=new Rl(Xe,ht,6,16),ye=[],Re=[];for(let Ce of[-1,1]){let Ee=new Yn;Ee.position.x=Ce*oi;let et=new Yt(V,_e);et.rotation.z=-Qt,et.scale.z=.45,Ee.add(et),H.add(Ee),ye.push(Ee),Re.push(et)}let Ne=new Yn;if(Ne.add(it,B,H),k.label){let Ce=document.createElement("canvas");Ce.width=470,Ce.height=150;let Ee=Ce.getContext("2d");if(Ee){Ee.clearRect(0,0,470,150),Ee.fillStyle="#ffffff",Ee.textAlign="center",Ee.textBaseline="middle",Ee.shadowColor="rgba(0,0,0,0.35)",Ee.shadowBlur=8,Ee.shadowOffsetY=2;let ft="system-ui, -apple-system, 'Segoe UI', sans-serif",ln=104;for(Ee.font="700 "+ln+"px "+ft;Ee.measureText(k.label).width>446&&ln>24;)ln-=4,Ee.font="700 "+ln+"px "+ft;Ee.fillText(k.label,235,78)}let et=new Co(Ce);et.anisotropy=4;let Lt=new Yt(new Is(1.14,.364),new Ai({map:et,transparent:!0,depthWrite:!1}));Lt.position.set(0,ai-.3,ke+.12),Ne.add(Lt)}Ne.rotation.set(.16,ee,0);let De=new Yn;De.add(Ne),De.scale.setScalar(q*ce),O.add(De);let He=new Yt(new Is(1,1),new Ai({map:W,transparent:!0,depthWrite:!1}));return He.position.z=-900,He.visible=!1,O.add(He),fe.push(nb(q*.68*ce,q*ze*ce)),{shape:k.shape,reach:ze,outer:De,inner:Ne,eyes:ye,pupils:Re,shadow:He,u:w,k:ce,yaw:ee,spin:0,spinV:0,sq:0,sqV:0,jx:0,jy:0,jvx:0,jvy:0,blinkAt:1+ns(z*5.5)*4,blink:-1,lastThud:0}}),Pe=null,Ae=()=>{if(U.current.sound)try{Pe||(Pe=new AudioContext),Pe.state==="suspended"&&Pe.resume()}catch{Pe=null}},Fe=(k,z,ce,K,ke="sine")=>{if(!Pe||Pe.state!=="running"||!U.current.sound)return;let ee=Pe.currentTime,ze=Pe.createOscillator(),it=Pe.createGain(),Xe=Math.max(0,Math.min(1,U.current.volume))*K;ze.type=ke,ze.frequency.setValueAtTime(k,ee),ze.frequency.exponentialRampToValueAtTime(Math.max(30,z),ee+ce),it.gain.setValueAtTime(0,ee),it.gain.linearRampToValueAtTime(Xe,ee+.008),it.gain.exponentialRampToValueAtTime(1e-4,ee+ce),ze.connect(it).connect(Pe.destination),ze.start(ee),ze.stop(ee+ce+.02)},C=[],ue=(k,z)=>{C.push(window.setTimeout(z,k))},J=()=>{if(C.forEach(clearTimeout),C.length=0,te){G_(fe,X),U.current.onDrop?.();return}let k=performance.now();fe.forEach((z,ce)=>{let K=ce*260+Math.random()*120;if(!z.live){z.y=-9999,ue(K,()=>le(ce));return}ue(ce*70,()=>{Q===ce&&Ze(),z.onFloor=!1,z.vy=1.25*Math.sqrt(2*X.gravity*Math.max(0,X.h-z.y+z.r*1.5+60)),z.vx+=(Math.random()-.5)*120,z.va+=(Math.random()-.5)*6,$[ce]=k+520+K})}),U.current.onDrop?.()},le=k=>{$[k]=0,ib(fe[k],k,fe.length,X,Math.random);let z=Ie[k];z.spin=(Math.random()-.5)*2,z.spinV=(Math.random()<.5?-1:1)*(3+Math.random()*4),z.sq=z.sqV=0},$=fe.map(()=>0);b.current=J;let be=!1,ve=()=>{if(be)return;let k=I.getBoundingClientRect();(X_(k.top,k.height,window.innerHeight)<=.015||k.bottom<=window.innerHeight+2)&&(be=!0,ue(p&&!te?260:0,J))};window.addEventListener("scroll",ve,{passive:!0}),window.addEventListener("resize",ve);let M=-1e4,x=-1e4,F=0,ne=0,oe=0,Q=-1,Te={x:0,y:0},pe=!1,xe=k=>{let z=Z.getBoundingClientRect();return{x:k.clientX-z.left,y:z.bottom-k.clientY}},Ue=k=>{let z=xe(k),ce=performance.now(),K=Math.max(8,ce-oe)/1e3;F=(z.x-M)/K,ne=(z.y-x)/K,M=z.x,x=z.y,oe=ce,(Math.abs(F)>4e3||Math.abs(ne)>4e3)&&(F=ne=0),Q<0&&I.classList.toggle("fcf-over",W_(fe,z.x,z.y)>=0)},Be=()=>{M=x=-1e4,I.classList.remove("fcf-over")},ie=k=>{Ue(k),Math.hypot(M-Te.x,x-Te.y)>6&&(pe=!0)},Ze=()=>{window.removeEventListener("pointermove",ie),window.removeEventListener("pointerup",Ze),window.removeEventListener("pointercancel",Ze),I.classList.remove("fcf-grab");let k=Q;if(Q=-1,k<0)return;let z=fe[k];if(z.held=!1,!pe)z.vy=950+Math.random()*250,z.vx+=(Math.random()-.5)*300,z.va+=(Math.random()-.5)*9,z.onFloor=!1,Fe(220,520,.12,.35),ue(90,()=>Fe(520,240,.18,.25)),U.current.onCritterClick?.(Ie[k].shape);else{let ce=Math.hypot(z.vx,z.vy),K=2600;ce>K&&(z.vx*=K/ce,z.vy*=K/ce)}},We=k=>{if(te||k.target.closest("a,button,input"))return;let z=xe(k),ce=W_(fe,z.x,z.y);ce<0||(k.preventDefault(),Ae(),Fe(520,980,.07,.35),Q=ce,fe[ce].held=!0,Te=z,pe=!1,M=z.x,x=z.y,I.classList.add("fcf-grab"),window.addEventListener("pointermove",ie),window.addEventListener("pointerup",Ze),window.addEventListener("pointercancel",Ze))};I.addEventListener("pointermove",Ue),I.addEventListener("pointerleave",Be),I.addEventListener("pointerdown",We);let Oe=new ResizeObserver(()=>{Y(),fe.forEach((k,z)=>{k.r=q*.68*Ie[z].k,k.wall=q*Ie[z].reach*Ie[z].k,k.x=Math.min(X.w-k.wall,Math.max(k.wall,k.x)),k.live&&k.y-k.r<X.floor&&(k.y=X.floor+k.r)}),te&&be&&G_(fe,X)});Oe.observe(Z),Oe.observe(I);let Le=!1,Se=0,Ve=performance.now(),je=0,at=4,Ge=new N,he=k=>{if(Se=0,!Le)return;let z=Math.min(.033,(k-Ve)/1e3);if(Ve=k,je+=z,j.value=je,!te){let K=Q>=0?{x:M,y:x}:null;for(let ke=0;ke<3;ke++)rb(fe,X,z/3,K).forEach((ze,it)=>{if(ze<=0)return;let Xe=Ie[it];Xe.u.uJolt.value=ze,Xe.sqV-=ze*9,Xe.jvy-=ze*2.4;let ht=performance.now();ze>=.12&&ht-Xe.lastThud>140&&(Xe.lastThud=ht,Fe(150-Xe.k*30,60,.16,.5*ze,"triangle"))});$.forEach((ke,ee)=>{let ze=fe[ee];ke<=0||!ze.live||(ze.y-ze.r*1.5>X.h||k>ke+400)&&(ze.live=!1,ze.y=-9999,ze.vx=ze.vy=0,$[ee]=-1,ue(Math.max(0,ke-k),()=>le(ee)))})}let ce=M>-1e3;if(fe.forEach((K,ke)=>{let ee=Ie[ke];if(ee.shadow.visible=K.live,ee.outer.visible=K.live,!K.live)return;if(!te){Q<0&&ce&&Math.hypot(K.x-M,K.y-x)<K.r*1.05&&(K.vx+=F*.06,ne>0&&(K.vy+=ne*.05),K.va-=F*6e-4,ee.inner.worldToLocal(Ge.set(M,x,q*.5)),ee.u.uHand.value.copy(Ge),ee.u.uStroke.value=Math.min(1,ee.u.uStroke.value+.2)),ee.u.uStroke.value*=Math.pow(.05,z),ee.u.uJolt.value*=Math.pow(.03,z),ee.blink<0&&je>ee.blinkAt&&(ee.blink=0);let Qt=1;ee.blink>=0&&(ee.blink+=z/.15,Qt=1-Math.sin(Math.min(1,ee.blink)*Math.PI)*.9,ee.blink>=1&&(ee.blink=-1,ee.blinkAt=je+2+Math.random()*4)),ee.eyes.forEach(w=>w.scale.y=Qt);let oi=ce?M-K.x:0,ai=ce?x-K.y:0,gn=Math.hypot(oi,ai)||1,Sr=ce?Math.min(1,gn/220):0,li=Math.cos(-K.a),Oi=Math.sin(-K.a),zi=(oi/gn*li-ai/gn*Oi)*Sr,an=(oi/gn*Oi+ai/gn*li)*Sr;ee.jvx+=(-ee.jx*140-ee.jvx*7-K.vx*9e-4)*z,ee.jvy+=(-ee.jy*140-ee.jvy*7-K.vy*9e-4)*z,ee.jx+=ee.jvx*z,ee.jy+=ee.jvy*z;let Ft=.035;ee.pupils.forEach(w=>{let D=zi*Ft+ee.jx*Ft*3,B=an*Ft+ee.jy*Ft*3,H=Math.hypot(D,B);H>Ft&&(D*=Ft/H,B*=Ft/H),w.position.x+=(D-w.position.x)*Math.min(1,z*14),w.position.y+=(B-w.position.y)*Math.min(1,z*14)}),ee.inner.rotation.x=.16-an*.12,ee.inner.rotation.y=ee.yaw+ee.spin+zi*.18,K.onFloor||K.y-K.r<X.floor+3?ee.spinV+=(-ee.spin*60-ee.spinV*9)*z:ee.spinV*=1-.3*z,ee.spin+=ee.spinV*z;let Bn=K.onFloor?0:Math.min(.14,Math.abs(K.vy)/6e3);ee.sqV+=((Bn-ee.sq)*220-ee.sqV*11)*z,ee.sq+=ee.sqV*z}let ze=te?1:1+Math.sin(je*2+K.r)*.015,it=ze*(1+ee.sq),Xe=(2-ze)*(1-ee.sq*.55);ee.outer.position.set(K.x,K.y-(1-it)*K.r*.55,0),ee.outer.rotation.z=K.a,ee.outer.scale.set(q*ee.k*Xe,q*ee.k*it,q*ee.k);let ht=Math.max(0,K.y-K.r-X.floor);ee.shadow.position.set(K.x,X.floor-1,-900),ee.shadow.scale.set(K.r*2.1*(1-Math.min(.55,ht/500)),K.r*.42,1),ee.shadow.material.opacity=.9-Math.min(.75,ht/420)}),F*=.6,ne*=.6,_&&!te&&je>at){at=je+3.5+Math.random()*3;let K=fe.filter(ee=>ee.live&&ee.onFloor&&!ee.held),ke=K[Math.floor(Math.random()*K.length)];ke&&(ke.vy=650+Math.random()*300,ke.va+=(Math.random()-.5)*5)}P.render(O,G),Se=requestAnimationFrame(he)},L=new IntersectionObserver(([k])=>{Le=k.isIntersecting,Le&&ve(),Le&&!Se&&(Ve=performance.now(),Se=requestAnimationFrame(he))},{threshold:[0,.2,.4]});return L.observe(I),T(!0),()=>{C.forEach(clearTimeout),cancelAnimationFrame(Se),L.disconnect(),Oe.disconnect(),window.removeEventListener("scroll",ve),window.removeEventListener("resize",ve),I.removeEventListener("pointermove",Ue),I.removeEventListener("pointerleave",Be),I.removeEventListener("pointerdown",We),window.removeEventListener("pointermove",ie),window.removeEventListener("pointerup",Ze),window.removeEventListener("pointercancel",Ze),I.classList.remove("fcf-over","fcf-grab"),O.traverse(k=>{let z=k;z.geometry?.dispose();let ce=z.material;Array.isArray(ce)?ce.forEach(K=>K.dispose()):ce?.dispose()}),W.dispose(),P.dispose(),P.forceContextLoss(),P.domElement.remove(),Pe&&Pe.close(),T(!1)}},[o,a,l,c,u,_,p]),Ye.useEffect(()=>{let I=S.current,Z=m.current;if(!I||!Z)return;let te=()=>{I.style.fontSize="100px";let G=I.scrollWidth;G>0&&(I.style.fontSize=Math.max(40,100*Z.clientWidth*.965/G)+"px")};te();let P=new ResizeObserver(te);P.observe(Z);let O=!0;return document.fonts?.ready.then(()=>{O&&te()}).catch(()=>{}),()=>{O=!1,P.disconnect()}},[t]),Ye.useEffect(()=>{let I=S.current,Z=m.current;if(!I||!Z||!p||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let te=Array.from(I.querySelectorAll(".fcf-ch")),P=1,O=0,G=()=>{let j=Z.getBoundingClientRect();return X_(j.top,j.height,window.innerHeight)},X=j=>{te.forEach((re,ge)=>{let W=sb(ge,te.length,j);re.style.transform=j<.001?"":"translate("+W.x.toFixed(4)+"em,"+W.y.toFixed(4)+"em) rotate("+W.deg.toFixed(2)+"deg)"})},q=()=>{O=0;let j=G();P+=(j-P)*.14,Math.abs(j-P)<.001&&(P=j),X(P),P!==j&&(O=requestAnimationFrame(q))},Y=()=>{O||(O=requestAnimationFrame(q))};return P=G(),X(P),window.addEventListener("scroll",Y,{passive:!0}),window.addEventListener("resize",Y),()=>{cancelAnimationFrame(O),window.removeEventListener("scroll",Y),window.removeEventListener("resize",Y),te.forEach(j=>j.style.transform="")}},[t,p]),Ye.createElement("footer",{ref:m,className:"fcf-root"+(v?" "+v:"")},Ye.createElement("style",null,JA),Ye.createElement("div",{className:"fcf-top"},Ye.createElement("div",null,Ye.createElement("p",{className:"fcf-name"},e),Ye.createElement("p",{className:"fcf-tag"},n)),Ye.createElement("nav",{className:"fcf-cols","aria-label":"Footer"},i.map(I=>Ye.createElement("div",{key:I.title},Ye.createElement("p",{className:"fcf-ct"},I.title),Ye.createElement("ul",{className:"fcf-list"},I.links.map(Z=>Ye.createElement("li",{key:Z.label},Ye.createElement("a",{className:"fcf-link",href:Z.href},Z.label)))))))),Ye.createElement("div",{className:"fcf-bottom"},Ye.createElement("span",null,s),Ye.createElement("span",{className:"fcf-legal"},r.map(I=>Ye.createElement("a",{key:I.label,className:"fcf-link",href:I.href},I.label)),y?Ye.createElement("button",{type:"button",className:"fcf-again",onClick:()=>b.current()},y):null)),Ye.createElement("div",{ref:S,className:"fcf-word","aria-label":t,role:"img"},Array.from(t).map((I,Z)=>Ye.createElement("span",{key:Z,className:"fcf-ch","aria-hidden":"true"},I))),Ye.createElement("div",{ref:R,className:"fcf-stage"+(E?" fcf-ready":""),"aria-hidden":"true"}),Ye.createElement("div",{ref:A,className:"fcf-haze","aria-hidden":"true"},Ye.createElement("i",null),Ye.createElement("i",null),Ye.createElement("i",null)),Ye.createElement("p",{className:"fcf-sr"},"Six fuzzy creatures sit along the bottom of the footer. Drag them around, or click one to make it hop."))}var Y_=document.getElementById("critter-band");Y_&&(0,$_.createRoot)(Y_).render(Ye.createElement(Z_,{wordmark:"Services",name:"",tagline:"",columns:[],legal:[],copyright:"",dropLabel:"",sound:!1}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
