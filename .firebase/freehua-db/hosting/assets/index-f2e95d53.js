(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Kn(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const he=Object.freeze({}),Ki=Object.freeze([]),rt=()=>{},Ep=()=>!1,kv=/^on[^a-z]/,Er=t=>kv.test(t),Eo=t=>t.startsWith("onUpdate:"),ve=Object.assign,Bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pv=Object.prototype.hasOwnProperty,X=(t,e)=>Pv.call(t,e),B=Array.isArray,qi=t=>oa(t)==="[object Map]",Ov=t=>oa(t)==="[object Set]",W=t=>typeof t=="function",Se=t=>typeof t=="string",Hc=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",Vc=t=>fe(t)&&W(t.then)&&W(t.catch),Nv=Object.prototype.toString,oa=t=>Nv.call(t),Wc=t=>oa(t).slice(8,-1),xv=t=>oa(t)==="[object Object]",Kc=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,uo=Kn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dv=Kn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mv=/-(\w)/g,Jt=aa(t=>t.replace(Mv,(e,n)=>n?n.toUpperCase():"")),Lv=/\B([A-Z])/g,$n=aa(t=>t.replace(Lv,"-$1").toLowerCase()),wi=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ni=aa(t=>t?`on${wi(t)}`:""),Ys=(t,e)=>!Object.is(t,e),vs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Io=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fv=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nh;const To=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qc(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Se(i)?Bv(i):qc(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Se(t))return t;if(fe(t))return t}}const $v=/;(?![^(]*\))/g,Uv=/:([^]+)/,jv=/\/\*[^]*?\*\//g;function Bv(t){const e={};return t.replace(jv,"").split($v).forEach(n=>{if(n){const i=n.split(Uv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zc(t){let e="";if(Se(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const i=zc(t[n]);i&&(e+=i+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Hv="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Vv="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Wv=Kn(Hv),Kv=Kn(Vv),qv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zv=Kn(qv);function Ip(t){return!!t||t===""}function Pl(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Ct;class Tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}else Pl("cannot run an inactive effect scope.")}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gv(t){return new Tp(t)}function Yv(t,e=Ct){e&&e.active&&e.effects.push(t)}function Xv(){return Ct}const Gc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},bp=t=>(t.w&Un)>0,Cp=t=>(t.n&Un)>0,Jv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Un},Qv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];bp(s)&&!Cp(s)?s.delete(t):e[n++]=s,s.w&=~Un,s.n&=~Un}e.length=n}},Ol=new WeakMap;let Ps=0,Un=1;const Nl=30;let Ze;const hi=Symbol("iterate"),xl=Symbol("Map key iterate");class Yc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yv(this,i)}run(){if(!this.active)return this.fn();let e=Ze,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,xn=!0,Un=1<<++Ps,Ps<=Nl?Jv(this):xh(this),this.fn()}finally{Ps<=Nl&&Qv(this),Un=1<<--Ps,Ze=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(xh(this),this.onStop&&this.onStop(),this.active=!1)}}function xh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const Sp=[];function Pi(){Sp.push(xn),xn=!1}function Oi(){const t=Sp.pop();xn=t===void 0?!0:t}function Ye(t,e,n){if(xn&&Ze){let i=Ol.get(t);i||Ol.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Gc()),Rp(s,{effect:Ze,target:t,type:e,key:n})}}function Rp(t,e){let n=!1;Ps<=Nl?Cp(t)||(t.n|=Un,n=!bp(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t),Ze.onTrack&&Ze.onTrack(ve({effect:Ze},e)))}function Qt(t,e,n,i,s,r){const o=Ol.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(i);o.forEach((u,h)=>{(h==="length"||h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Kc(n)&&a.push(o.get("length")):(a.push(o.get(hi)),qi(t)&&a.push(o.get(xl)));break;case"delete":B(t)||(a.push(o.get(hi)),qi(t)&&a.push(o.get(xl)));break;case"set":qi(t)&&a.push(o.get(hi));break}const l={target:t,type:e,key:n,newValue:i,oldValue:s,oldTarget:r};if(a.length===1)a[0]&&Dl(a[0],l);else{const c=[];for(const u of a)u&&c.push(...u);Dl(Gc(c),l)}}function Dl(t,e){const n=B(t)?t:[...t];for(const i of n)i.computed&&Dh(i,e);for(const i of n)i.computed||Dh(i,e)}function Dh(t,e){(t!==Ze||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(ve({effect:t},e)),t.scheduler?t.scheduler():t.run())}const Zv=Kn("__proto__,__v_isRef,__isVue"),Ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hc)),ew=la(),tw=la(!1,!0),nw=la(!0),iw=la(!0,!0),Mh=sw();function sw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=z(this);for(let r=0,o=this.length;r<o;r++)Ye(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pi();const i=z(this)[e].apply(this,n);return Oi(),i}}),t}function rw(t){const e=z(this);return Ye(e,"has",t),e.hasOwnProperty(t)}function la(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?Lp:Mp:e?Dp:xp).get(i))return i;const o=B(i);if(!t){if(o&&X(Mh,s))return Reflect.get(Mh,s,r);if(s==="hasOwnProperty")return rw}const a=Reflect.get(i,s,r);return(Hc(s)?Ap.has(s):Zv(s))||(t||Ye(i,"get",s),e)?a:ke(a)?o&&Kc(s)?a:a.value:fe(a)?t?$p(a):ha(a):a}}const ow=kp(),aw=kp(!0);function kp(t=!1){return function(n,i,s,r){let o=n[i];if(jn(o)&&ke(o)&&!ke(s))return!1;if(!t&&(!bo(s)&&!jn(s)&&(o=z(o),s=z(s)),!B(n)&&ke(o)&&!ke(s)))return o.value=s,!0;const a=B(n)&&Kc(i)?Number(i)<n.length:X(n,i),l=Reflect.set(n,i,s,r);return n===z(r)&&(a?Ys(s,o)&&Qt(n,"set",i,s,o):Qt(n,"add",i,s)),l}}function lw(t,e){const n=X(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&Qt(t,"delete",e,void 0,i),s}function cw(t,e){const n=Reflect.has(t,e);return(!Hc(e)||!Ap.has(e))&&Ye(t,"has",e),n}function uw(t){return Ye(t,"iterate",B(t)?"length":hi),Reflect.ownKeys(t)}const Pp={get:ew,set:ow,deleteProperty:lw,has:cw,ownKeys:uw},Op={get:nw,set(t,e){return Pl(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Pl(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},hw=ve({},Pp,{get:tw,set:aw}),fw=ve({},Op,{get:iw}),Xc=t=>t,ca=t=>Reflect.getPrototypeOf(t);function qr(t,e,n=!1,i=!1){t=t.__v_raw;const s=z(t),r=z(e);n||(e!==r&&Ye(s,"get",e),Ye(s,"get",r));const{has:o}=ca(s),a=i?Xc:n?Jc:Xs;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function zr(t,e=!1){const n=this.__v_raw,i=z(n),s=z(t);return e||(t!==s&&Ye(i,"has",t),Ye(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gr(t,e=!1){return t=t.__v_raw,!e&&Ye(z(t),"iterate",hi),Reflect.get(t,"size",t)}function Lh(t){t=z(t);const e=z(this);return ca(e).has.call(e,t)||(e.add(t),Qt(e,"add",t,t)),this}function Fh(t,e){e=z(e);const n=z(this),{has:i,get:s}=ca(n);let r=i.call(n,t);r?Np(n,i,t):(t=z(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Ys(e,o)&&Qt(n,"set",t,e,o):Qt(n,"add",t,e),this}function $h(t){const e=z(this),{has:n,get:i}=ca(e);let s=n.call(e,t);s?Np(e,n,t):(t=z(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&Qt(e,"delete",t,void 0,r),o}function Uh(){const t=z(this),e=t.size!==0,n=qi(t)?new Map(t):new Set(t),i=t.clear();return e&&Qt(t,"clear",void 0,void 0,n),i}function Yr(t,e){return function(i,s){const r=this,o=r.__v_raw,a=z(o),l=e?Xc:t?Jc:Xs;return!t&&Ye(a,"iterate",hi),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Xr(t,e,n){return function(...i){const s=this.__v_raw,r=z(s),o=qi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Xc:e?Jc:Xs;return!e&&Ye(r,"iterate",l?xl:hi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${wi(t)} operation ${n}failed: target is readonly.`,z(this))}return t==="delete"?!1:this}}function dw(){const t={get(r){return qr(this,r)},get size(){return Gr(this)},has:zr,add:Lh,set:Fh,delete:$h,clear:Uh,forEach:Yr(!1,!1)},e={get(r){return qr(this,r,!1,!0)},get size(){return Gr(this)},has:zr,add:Lh,set:Fh,delete:$h,clear:Uh,forEach:Yr(!1,!0)},n={get(r){return qr(this,r,!0)},get size(){return Gr(this,!0)},has(r){return zr.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Yr(!0,!1)},i={get(r){return qr(this,r,!0,!0)},get size(){return Gr(this,!0)},has(r){return zr.call(this,r,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Xr(r,!1,!1),n[r]=Xr(r,!0,!1),e[r]=Xr(r,!1,!0),i[r]=Xr(r,!0,!0)}),[t,n,e,i]}const[pw,gw,mw,_w]=dw();function ua(t,e){const n=e?t?_w:mw:t?gw:pw;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(X(n,s)&&s in i?n:i,s,r)}const yw={get:ua(!1,!1)},vw={get:ua(!1,!0)},ww={get:ua(!0,!1)},Ew={get:ua(!0,!0)};function Np(t,e,n){const i=z(n);if(i!==n&&e.call(t,i)){const s=Wc(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const xp=new WeakMap,Dp=new WeakMap,Mp=new WeakMap,Lp=new WeakMap;function Iw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tw(t){return t.__v_skip||!Object.isExtensible(t)?0:Iw(Wc(t))}function ha(t){return jn(t)?t:fa(t,!1,Pp,yw,xp)}function Fp(t){return fa(t,!1,hw,vw,Dp)}function $p(t){return fa(t,!0,Op,ww,Mp)}function Os(t){return fa(t,!0,fw,Ew,Lp)}function fa(t,e,n,i,s){if(!fe(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Tw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function fi(t){return jn(t)?fi(t.__v_raw):!!(t&&t.__v_isReactive)}function jn(t){return!!(t&&t.__v_isReadonly)}function bo(t){return!!(t&&t.__v_isShallow)}function Ml(t){return fi(t)||jn(t)}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Up(t){return Io(t,"__v_skip",!0),t}const Xs=t=>fe(t)?ha(t):t,Jc=t=>fe(t)?$p(t):t;function jp(t){xn&&Ze&&(t=z(t),Rp(t.dep||(t.dep=Gc()),{target:t,type:"get",key:"value"}))}function Bp(t,e){t=z(t);const n=t.dep;n&&Dl(n,{target:t,type:"set",key:"value",newValue:e})}function ke(t){return!!(t&&t.__v_isRef===!0)}function Hp(t){return Vp(t,!1)}function bw(t){return Vp(t,!0)}function Vp(t,e){return ke(t)?t:new Cw(t,e)}class Cw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z(e),this._value=n?e:Xs(e)}get value(){return jp(this),this._value}set value(e){const n=this.__v_isShallow||bo(e)||jn(e);e=n?e:z(e),Ys(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xs(e),Bp(this,e))}}function zi(t){return ke(t)?t.value:t}const Sw={get:(t,e,n)=>zi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Wp(t){return fi(t)?t:new Proxy(t,Sw)}class Rw{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Yc(e,()=>{this._dirty||(this._dirty=!0,Bp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=z(this);return jp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Aw(t,e,n=!1){let i,s;const r=W(t);r?(i=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=t.get,s=t.set);const o=new Rw(i,s,r||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const di=[];function ho(t){di.push(t)}function fo(){di.pop()}function b(t,...e){Pi();const n=di.length?di[di.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=kw();if(i)hn(i,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${va(n,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${t}`,...e];s.length&&r.push(`
`,...Pw(s)),console.warn(...r)}Oi()}function kw(){let t=di[di.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function Pw(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...Ow(n))}),e}function Ow({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,s=` at <${va(t.component,t.type,i)}`,r=">"+n;return t.props?[s,...Nw(t.props),r]:[s+r]}function Nw(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...Kp(i,t[i]))}),n.length>3&&e.push(" ..."),e}function Kp(t,e,n){return Se(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:ke(e)?(e=Kp(t,z(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):W(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=z(e),n?e:[`${t}=`,e])}const Qc={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function hn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){da(r,e,n)}return s}function xt(t,e,n,i){if(W(t)){const r=hn(t,e,n,i);return r&&Vc(r)&&r.catch(o=>{da(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(xt(t[r],e,n,i));return s}function da(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=Qc[n];for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){hn(l,null,10,[t,o,a]);return}}xw(t,n,s,i)}function xw(t,e,n,i=!0){{const s=Qc[e];if(n&&ho(n),b(`Unhandled error${s?` during execution of ${s}`:""}`),n&&fo(),i)throw t;console.error(t)}}let Js=!1,Ll=!1;const Ke=[];let Ht=0;const Gi=[];let Bt=null,Cn=0;const qp=Promise.resolve();let Zc=null;const Dw=100;function zp(t){const e=Zc||qp;return t?e.then(this?t.bind(this):t):e}function Mw(t){let e=Ht+1,n=Ke.length;for(;e<n;){const i=e+n>>>1;Qs(Ke[i])<t?e=i+1:n=i}return e}function pa(t){(!Ke.length||!Ke.includes(t,Js&&t.allowRecurse?Ht+1:Ht))&&(t.id==null?Ke.push(t):Ke.splice(Mw(t.id),0,t),Gp())}function Gp(){!Js&&!Ll&&(Ll=!0,Zc=qp.then(Jp))}function Lw(t){const e=Ke.indexOf(t);e>Ht&&Ke.splice(e,1)}function Yp(t){B(t)?Gi.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?Cn+1:Cn))&&Gi.push(t),Gp()}function jh(t,e=Js?Ht+1:0){for(t=t||new Map;e<Ke.length;e++){const n=Ke[e];if(n&&n.pre){if(eu(t,n))continue;Ke.splice(e,1),e--,n()}}}function Xp(t){if(Gi.length){const e=[...new Set(Gi)];if(Gi.length=0,Bt){Bt.push(...e);return}for(Bt=e,t=t||new Map,Bt.sort((n,i)=>Qs(n)-Qs(i)),Cn=0;Cn<Bt.length;Cn++)eu(t,Bt[Cn])||Bt[Cn]();Bt=null,Cn=0}}const Qs=t=>t.id==null?1/0:t.id,Fw=(t,e)=>{const n=Qs(t)-Qs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Jp(t){Ll=!1,Js=!0,t=t||new Map,Ke.sort(Fw);const e=n=>eu(t,n);try{for(Ht=0;Ht<Ke.length;Ht++){const n=Ke[Ht];if(n&&n.active!==!1){if(e(n))continue;hn(n,null,14)}}}finally{Ht=0,Ke.length=0,Xp(t),Js=!1,Zc=null,(Ke.length||Gi.length)&&Jp(t)}}function eu(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Dw){const i=e.ownerInstance,s=i&&hu(i.type);return b(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let pi=!1;const Ui=new Set;To().__VUE_HMR_RUNTIME__={createRecord:Ga(Qp),rerender:Ga(jw),reload:Ga(Bw)};const Ei=new Map;function $w(t){const e=t.type.__hmrId;let n=Ei.get(e);n||(Qp(e,t.type),n=Ei.get(e)),n.instances.add(t)}function Uw(t){Ei.get(t.type.__hmrId).instances.delete(t)}function Qp(t,e){return Ei.has(t)?!1:(Ei.set(t,{initialDef:Fs(e),instances:new Set}),!0)}function Fs(t){return bg(t)?t.__vccOpts:t}function jw(t,e){const n=Ei.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(i=>{e&&(i.render=e,Fs(i.type).render=e),i.renderCache=[],pi=!0,i.update(),pi=!1}))}function Bw(t,e){const n=Ei.get(t);if(!n)return;e=Fs(e),Bh(n.initialDef,e);const i=[...n.instances];for(const s of i){const r=Fs(s.type);Ui.has(r)||(r!==n.initialDef&&Bh(r,e),Ui.add(r)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Ui.add(r),s.ceReload(e.styles),Ui.delete(r)):s.parent?pa(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Yp(()=>{for(const s of i)Ui.delete(Fs(s.type))})}function Bh(t,e){ve(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Ga(t){return(e,n)=>{try{return t(e,n)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Vt,Ns=[],Fl=!1;function Ir(t,...e){Vt?Vt.emit(t,...e):Fl||Ns.push({event:t,args:e})}function Zp(t,e){var n,i;Vt=t,Vt?(Vt.enabled=!0,Ns.forEach(({event:s,args:r})=>Vt.emit(s,...r)),Ns=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Zp(r,e)}),setTimeout(()=>{Vt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Fl=!0,Ns=[])},3e3)):(Fl=!0,Ns=[])}function Hw(t,e){Ir("app:init",t,e,{Fragment:St,Text:br,Comment:Dt,Static:Us})}function Vw(t){Ir("app:unmount",t)}const Ww=tu("component:added"),eg=tu("component:updated"),Kw=tu("component:removed"),qw=t=>{Vt&&typeof Vt.cleanupBuffer=="function"&&!Vt.cleanupBuffer(t)&&Kw(t)};function tu(t){return e=>{Ir(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const zw=tg("perf:start"),Gw=tg("perf:end");function tg(t){return(e,n,i)=>{Ir(t,e.appContext.app,e.uid,e,n,i)}}function Yw(t,e,n){Ir("component:emit",t.appContext.app,t,e,n)}function Xw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||he;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(ni(e)in h))&&b(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${ni(e)}" prop.`);else{const f=u[e];W(f)&&(f(...n)||b(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||he;f&&(s=n.map(g=>Se(g)?g.trim():g)),h&&(s=n.map(Fv))}Yw(t,e,s);{const u=e.toLowerCase();u!==e&&i[ni(u)]&&b(`Event "${u}" is emitted in component ${va(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${$n(e)}" instead of "${e}".`)}let a,l=i[a=ni(e)]||i[a=ni(Jt(e))];!l&&r&&(l=i[a=ni($n(e))]),l&&xt(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(c,t,6,s)}}function ng(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!W(t)){const l=c=>{const u=ng(c,e,!0);u&&(a=!0,ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(fe(t)&&i.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):ve(o,r),fe(t)&&i.set(t,o),o)}function ga(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,$n(e))||X(t,e))}let ot=null,ig=null;function Co(t){const e=ot;return ot=t,ig=t&&t.type.__scopeId||null,e}function Bn(t,e=ot,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ef(-1);const r=Co(e);let o;try{o=t(...s)}finally{Co(r),i._d&&ef(1)}return eg(e),o};return i._n=!0,i._c=!0,i._d=!0,i}let $l=!1;function So(){$l=!0}function Ya(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:_,inheritAttrs:C}=t;let R,x;const U=Co(t);$l=!1;try{if(n.shapeFlag&4){const F=s||i;R=Rt(u.call(F,F,h,r,g,f,_)),x=l}else{const F=e;l===r&&So(),R=Rt(F.length>1?F(r,{get attrs(){return So(),l},slots:a,emit:c}):F(r,null)),x=e.props?l:Qw(l)}}catch(F){js.length=0,da(F,t,1),R=Ee(Dt)}let D=R,q;if(R.patchFlag>0&&R.patchFlag&2048&&([D,q]=Jw(R)),x&&C!==!1){const F=Object.keys(x),{shapeFlag:de}=D;if(F.length){if(de&7)o&&F.some(Eo)&&(x=Zw(x,o)),D=Hn(D,x);else if(!$l&&D.type!==Dt){const Re=Object.keys(l),Be=[],Pe=[];for(let nt=0,Tt=Re.length;nt<Tt;nt++){const it=Re[nt];Er(it)?Eo(it)||Be.push(it[2].toLowerCase()+it.slice(3)):Pe.push(it)}Pe.length&&b(`Extraneous non-props attributes (${Pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),Be.length&&b(`Extraneous non-emits event listeners (${Be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Hh(D)||b("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Hn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(Hh(D)||b("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=n.transition),q?q(D):R=D,Co(U),R}const Jw=t=>{const e=t.children,n=t.dynamicChildren,i=sg(e);if(!i)return[t,void 0];const s=e.indexOf(i),r=n?n.indexOf(i):-1,o=a=>{e[s]=a,n&&(r>-1?n[r]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Rt(i),o]};function sg(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(er(i)){if(i.type!==Dt||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Qw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},Zw=(t,e)=>{const n={};for(const i in t)(!Eo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n},Hh=t=>t.shapeFlag&7||t.type===Dt;function eE(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if((s||a)&&pi||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ga(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vh(i,o,c):!0:!!o;return!1}function Vh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!ga(n,r))return!0}return!1}function tE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nE=t=>t.__isSuspense;function iE(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Yp(t)}function sE(t,e){return nu(t,null,e)}const Jr={};function $s(t,e,n){return W(e)||b("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),nu(t,e,n)}function nu(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=he){var a;e||(n!==void 0&&b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=F=>{b("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Xv()===((a=Ae)==null?void 0:a.scope)?Ae:null;let u,h=!1,f=!1;if(ke(t)?(u=()=>t.value,h=bo(t)):fi(t)?(u=()=>t,i=!0):B(t)?(f=!0,h=t.some(F=>fi(F)||bo(F)),u=()=>t.map(F=>{if(ke(F))return F.value;if(fi(F))return ji(F);if(W(F))return hn(F,c,2);l(F)})):W(t)?e?u=()=>hn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return g&&g(),xt(t,c,3,[_])}:(u=rt,l(t)),e&&i){const F=u;u=()=>ji(F())}let g,_=F=>{g=D.onStop=()=>{hn(F,c,4)}},C;if(tr)if(_=rt,e?n&&xt(e,c,3,[u(),f?[]:void 0,_]):u(),s==="sync"){const F=fI();C=F.__watcherHandles||(F.__watcherHandles=[])}else return rt;let R=f?new Array(t.length).fill(Jr):Jr;const x=()=>{if(D.active)if(e){const F=D.run();(i||h||(f?F.some((de,Re)=>Ys(de,R[Re])):Ys(F,R)))&&(g&&g(),xt(e,c,3,[F,R===Jr?void 0:f&&R[0]===Jr?[]:R,_]),R=F)}else D.run()};x.allowRecurse=!!e;let U;s==="sync"?U=x:s==="post"?U=()=>st(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),U=()=>pa(x));const D=new Yc(u,U);D.onTrack=r,D.onTrigger=o,e?n?x():R=D.run():s==="post"?st(D.run.bind(D),c&&c.suspense):D.run();const q=()=>{D.stop(),c&&c.scope&&Bc(c.scope.effects,D)};return C&&C.push(q),q}function rE(t,e,n){const i=this.proxy,s=Se(t)?t.includes(".")?rg(i,t):()=>i[t]:t.bind(i,i);let r;W(e)?r=e:(r=e.handler,n=e);const o=Ae;ns(this);const a=nu(s,r.bind(i),n);return o?ns(o):mi(),a}function rg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ji(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))ji(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)ji(t[n],e);else if(Ov(t)||qi(t))t.forEach(n=>{ji(n,e)});else if(xv(t))for(const n in t)ji(t[n],e);return t}function og(t){Dv(t)&&b("Do not use built-in directive ids as custom directive id: "+t)}function ei(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Pi(),xt(l,n,8,[t.el,a,t,e]),Oi())}}function ag(t,e){return W(t)?(()=>ve({name:t.name},e,{setup:t}))():t}const po=t=>!!t.type.__asyncLoader,iu=t=>t.type.__isKeepAlive;function oE(t,e){lg(t,"a",e)}function aE(t,e){lg(t,"da",e)}function lg(t,e,n=Ae){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ma(e,i,n),n){let s=n.parent;for(;s&&s.parent;)iu(s.parent.vnode)&&lE(i,e,n,s),s=s.parent}}function lE(t,e,n,i){const s=ma(e,t,i,!0);cg(()=>{Bc(i[e],s)},n)}function ma(t,e,n=Ae,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pi(),ns(n);const a=xt(e,n,t,o);return mi(),Oi(),a});return i?s.unshift(r):s.push(r),r}else{const s=ni(Qc[t].replace(/ hook$/,""));b(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const mn=t=>(e,n=Ae)=>(!tr||t==="sp")&&ma(t,(...i)=>e(...i),n),cE=mn("bm"),uE=mn("m"),hE=mn("bu"),fE=mn("u"),dE=mn("bum"),cg=mn("um"),pE=mn("sp"),gE=mn("rtg"),mE=mn("rtc");function _E(t,e=Ae){ma("ec",t,e)}const Ul="components";function Tr(t,e){return vE(Ul,t,!0,e)||t}const yE=Symbol.for("v-ndc");function vE(t,e,n=!0,i=!1){const s=ot||Ae;if(s){const r=s.type;if(t===Ul){const a=hu(r,!1);if(a&&(a===e||a===Jt(e)||a===wi(Jt(e))))return r}const o=Wh(s[t]||r[t],e)||Wh(s.appContext[t],e);if(!o&&i)return r;if(n&&!o){const a=t===Ul?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";b(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else b(`resolve${wi(t.slice(0,-1))} can only be used in render() or setup().`)}function Wh(t,e){return t&&(t[e]||t[Jt(e)]||t[wi(Jt(e))])}const jl=t=>t?Eg(t)?uu(t)||t.proxy:jl(t.parent):null,gi=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Os(t.props),$attrs:t=>Os(t.attrs),$slots:t=>Os(t.slots),$refs:t=>Os(t.refs),$parent:t=>jl(t.parent),$root:t=>jl(t.root),$emit:t=>t.emit,$options:t=>ru(t),$forceUpdate:t=>t.f||(t.f=()=>pa(t.update)),$nextTick:t=>t.n||(t.n=zp.bind(t.proxy)),$watch:t=>rE.bind(t)}),su=t=>t==="_"||t==="$",Xa=(t,e)=>t!==he&&!t.__isScriptSetup&&X(t,e),ug={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Xa(i,e))return o[e]=1,i[e];if(s!==he&&X(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==he&&X(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const u=gi[e];let h,f;if(u)return e==="$attrs"?(Ye(t,"get",e),So()):e==="$slots"&&Ye(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==he&&X(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,X(f,e))return f[e];ot&&(!Se(e)||e.indexOf("__v")!==0)&&(s!==he&&su(e[0])&&X(s,e)?b(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===ot&&b(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Xa(s,e)?(s[e]=n,!0):s.__isScriptSetup&&X(s,e)?(b(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):i!==he&&X(i,e)?(i[e]=n,!0):X(t.props,e)?(b(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(b(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(r,e,{enumerable:!0,configurable:!0,value:n}):r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==he&&X(t,o)||Xa(e,o)||(a=r[0])&&X(a,o)||X(i,o)||X(gi,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};ug.ownKeys=t=>(b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function wE(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(gi).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>gi[n](t),set:rt})}),e}function EE(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(i=>{Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>t.props[i],set:rt})})}function IE(t){const{ctx:e,setupState:n}=t;Object.keys(z(n)).forEach(i=>{if(!n.__isScriptSetup){if(su(i[0])){b(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>n[i],set:rt})}})}function Kh(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function TE(){const t=Object.create(null);return(e,n)=>{t[n]?b(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Bl=!0;function bE(t){const e=ru(t),n=t.proxy,i=t.ctx;Bl=!1,e.beforeCreate&&qh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:_,activated:C,deactivated:R,beforeDestroy:x,beforeUnmount:U,destroyed:D,unmounted:q,render:F,renderTracked:de,renderTriggered:Re,errorCaptured:Be,serverPrefetch:Pe,expose:nt,inheritAttrs:Tt,components:it,directives:Ft,filters:Wr}=e,dt=TE();{const[G]=t.propsOptions;if(G)for(const Y in G)dt("Props",Y)}if(c&&CE(c,i,dt),o)for(const G in o){const Y=o[G];W(Y)?(Object.defineProperty(i,G,{value:Y.bind(n),configurable:!0,enumerable:!0,writable:!0}),dt("Methods",G)):b(`Method "${G}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`)}if(s){W(s)||b("The data option must be a function. Plain object usage is no longer supported.");const G=s.call(n,n);if(Vc(G)&&b("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!fe(G))b("data() should return an object.");else{t.data=ha(G);for(const Y in G)dt("Data",Y),su(Y[0])||Object.defineProperty(i,Y,{configurable:!0,enumerable:!0,get:()=>G[Y],set:rt})}}if(Bl=!0,r)for(const G in r){const Y=r[G],pt=W(Y)?Y.bind(n,n):W(Y.get)?Y.get.bind(n,n):rt;pt===rt&&b(`Computed property "${G}" has no getter.`);const Zn=!W(Y)&&W(Y.set)?Y.set.bind(n):()=>{b(`Write operation failed: computed property "${G}" is readonly.`)},vn=At({get:pt,set:Zn});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>vn.value,set:$t=>vn.value=$t}),dt("Computed",G)}if(a)for(const G in a)hg(a[G],i,n,G);if(l){const G=W(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{go(Y,G[Y])})}u&&qh(u,t,"c");function Le(G,Y){B(Y)?Y.forEach(pt=>G(pt.bind(n))):Y&&G(Y.bind(n))}if(Le(cE,h),Le(uE,f),Le(hE,g),Le(fE,_),Le(oE,C),Le(aE,R),Le(_E,Be),Le(mE,de),Le(gE,Re),Le(dE,U),Le(cg,q),Le(pE,Pe),B(nt))if(nt.length){const G=t.exposed||(t.exposed={});nt.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:pt=>n[Y]=pt})})}else t.exposed||(t.exposed={});F&&t.render===rt&&(t.render=F),Tt!=null&&(t.inheritAttrs=Tt),it&&(t.components=it),Ft&&(t.directives=Ft)}function CE(t,e,n=rt){B(t)&&(t=Hl(t));for(const i in t){const s=t[i];let r;fe(s)?"default"in s?r=Gt(s.from||i,s.default,!0):r=Gt(s.from||i):r=Gt(s),ke(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r,n("Inject",i)}}function qh(t,e,n){xt(B(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function hg(t,e,n,i){const s=i.includes(".")?rg(n,i):()=>n[i];if(Se(t)){const r=e[t];W(r)?$s(s,r):b(`Invalid watch handler specified by key "${t}"`,r)}else if(W(t))$s(s,t.bind(n));else if(fe(t))if(B(t))t.forEach(r=>hg(r,e,n,i));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)?$s(s,r,t):b(`Invalid watch handler specified by key "${t.handler}"`,r)}else b(`Invalid watch option: "${i}"`,t)}function ru(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ro(l,c,o,!0)),Ro(l,e,o)),fe(e)&&r.set(e,l),l}function Ro(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ro(t,r,n,!0),s&&s.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(i&&o==="expose")b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=SE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const SE={data:zh,props:Gh,emits:Gh,methods:xs,computed:xs,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:xs,directives:xs,watch:AE,provide:zh,inject:RE};function zh(t,e){return e?t?function(){return ve(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function RE(t,e){return xs(Hl(t),Hl(e))}function Hl(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?ve(Object.create(null),t,e):e}function Gh(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ve(Object.create(null),Kh(t),Kh(e??{})):e}function AE(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const i in e)n[i]=Qe(t[i],e[i]);return n}function fg(){return{app:null,config:{isNativeTag:Ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kE=0;function PE(t,e){return function(i,s=null){W(i)||(i=ve({},i)),s!=null&&!fe(s)&&(b("root props passed to app.mount() must be an object."),s=null);const r=fg();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){b("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const l=r.app={_uid:kE++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:sf,get config(){return r.config},set config(c){b("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return o.has(c)?b("Plugin has already been applied to target app."):c&&W(c.install)?(o.add(c),c.install(l,...u)):W(c)?(o.add(c),c(l,...u)):b('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return r.mixins.includes(c)?b("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):r.mixins.push(c),l},component(c,u){return zl(c,r.config),u?(r.components[c]&&b(`Component "${c}" has already been registered in target app.`),r.components[c]=u,l):r.components[c]},directive(c,u){return og(c),u?(r.directives[c]&&b(`Directive "${c}" has already been registered in target app.`),r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(a)b("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&b("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=Ee(i,s);return f.appContext=r,r.reload=()=>{t(Hn(f),c,h)},u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,l._instance=f.component,Hw(l,sf),uu(f.component)||f.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,Vw(l),delete l._container.__vue_app__):b("Cannot unmount an app that is not mounted.")},provide(c,u){return c in r.provides&&b(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),r.provides[c]=u,l},runWithContext(c){Ao=l;try{return c()}finally{Ao=null}}};return l}}let Ao=null;function go(t,e){if(!Ae)b("provide() can only be used inside setup().");else{let n=Ae.provides;const i=Ae.parent&&Ae.parent.provides;i===n&&(n=Ae.provides=Object.create(i)),n[t]=e}}function Gt(t,e,n=!1){const i=Ae||ot;if(i||Ao){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ao._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(i&&i.proxy):e;b(`injection "${String(t)}" not found.`)}else b("inject() can only be used inside setup() or functional components.")}function OE(t,e,n,i=!1){const s={},r={};Io(r,_a,1),t.propsDefaults=Object.create(null),dg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);gg(e||{},s,t),n?t.props=i?s:Fp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function NE(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function xE(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=z(s),[l]=t.propsOptions;let c=!1;if(!NE(t)&&(i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ga(t.emitsOptions,f))continue;const g=e[f];if(l)if(X(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const _=Jt(f);s[_]=Vl(l,a,_,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{dg(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=$n(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Vl(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&Qt(t,"set","$attrs"),gg(e||{},s,t)}function dg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(uo(l))continue;const c=e[l];let u;s&&X(s,u=Jt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:ga(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=z(n),c=a||he;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Vl(s,l,h,c[h],t,!X(c,h))}}return o}function Vl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&W(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(ns(s),i=c[n]=l.call(null,e),mi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===$n(n))&&(i=!0))}return i}function pg(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!W(t)){const u=h=>{l=!0;const[f,g]=pg(h,e,!0);ve(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return fe(t)&&i.set(t,Ki),Ki;if(B(r))for(let u=0;u<r.length;u++){Se(r[u])||b("props must be strings when using array syntax.",r[u]);const h=Jt(r[u]);Yh(h)&&(o[h]=he)}else if(r){fe(r)||b("invalid props options",r);for(const u in r){const h=Jt(u);if(Yh(h)){const f=r[u],g=o[h]=B(f)||W(f)?{type:f}:ve({},f);if(g){const _=Jh(Boolean,g.type),C=Jh(String,g.type);g[0]=_>-1,g[1]=C<0||_<C,(_>-1||X(g,"default"))&&a.push(h)}}}}const c=[o,a];return fe(t)&&i.set(t,c),c}function Yh(t){return t[0]!=="$"?!0:(b(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Wl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xh(t,e){return Wl(t)===Wl(e)}function Jh(t,e){return B(e)?e.findIndex(n=>Xh(n,t)):W(e)&&Xh(e,t)?0:-1}function gg(t,e,n){const i=z(e),s=n.propsOptions[0];for(const r in s){let o=s[r];o!=null&&DE(r,i[r],o,!X(t,r)&&!X(t,$n(r)))}}function DE(t,e,n,i){const{type:s,required:r,validator:o,skipCheck:a}=n;if(r&&i){b('Missing required prop: "'+t+'"');return}if(!(e==null&&!r)){if(s!=null&&s!==!0&&!a){let l=!1;const c=B(s)?s:[s],u=[];for(let h=0;h<c.length&&!l;h++){const{valid:f,expectedType:g}=LE(e,c[h]);u.push(g||""),l=f}if(!l){b(FE(t,e,u));return}}o&&!o(e)&&b('Invalid prop: custom validator check failed for prop "'+t+'".')}}const ME=Kn("String,Number,Boolean,Function,Symbol,BigInt");function LE(t,e){let n;const i=Wl(e);if(ME(i)){const s=typeof t;n=s===i.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else i==="Object"?n=fe(t):i==="Array"?n=B(t):i==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:i}}function FE(t,e,n){let i=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(wi).join(" | ")}`;const s=n[0],r=Wc(e),o=Qh(e,s),a=Qh(e,r);return n.length===1&&Zh(s)&&!$E(s,r)&&(i+=` with value ${o}`),i+=`, got ${r} `,Zh(r)&&(i+=`with value ${a}.`),i}function Qh(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Zh(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function $E(...t){return t.some(e=>e.toLowerCase()==="boolean")}const mg=t=>t[0]==="_"||t==="$stable",ou=t=>B(t)?t.map(Rt):[Rt(t)],UE=(t,e,n)=>{if(e._n)return e;const i=Bn((...s)=>(Ae&&b(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),ou(e(...s))),n);return i._c=!1,i},_g=(t,e,n)=>{const i=t._ctx;for(const s in t){if(mg(s))continue;const r=t[s];if(W(r))e[s]=UE(s,r,i);else if(r!=null){b(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=ou(r);e[s]=()=>o}}},yg=(t,e)=>{iu(t.vnode)||b("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=ou(e);t.slots.default=()=>n},jE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z(e),Io(e,"_",n)):_g(e,t.slots={})}else t.slots={},e&&yg(t,e);Io(t.slots,_a,1)},BE=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=he;if(i.shapeFlag&32){const a=e._;a?pi?(ve(s,e),Qt(t,"set","$slots")):n&&a===1?r=!1:(ve(s,e),!n&&a===1&&delete s._):(r=!e.$stable,_g(e,s)),o=e}else e&&(yg(t,e),o={default:1});if(r)for(const a in s)!mg(a)&&!(a in o)&&delete s[a]};function Kl(t,e,n,i,s=!1){if(B(t)){t.forEach((f,g)=>Kl(f,e&&(B(e)?e[g]:e),n,i,s));return}if(po(i)&&!s)return;const r=i.shapeFlag&4?uu(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t;if(!a){b("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,u=a.refs===he?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,X(h,c)&&(h[c]=null)):ke(c)&&(c.value=null)),W(l))hn(l,a,12,[o,u]);else{const f=Se(l),g=ke(l);if(f||g){const _=()=>{if(t.f){const C=f?X(h,l)?h[l]:u[l]:l.value;s?B(C)&&Bc(C,r):B(C)?C.includes(r)||C.push(r):f?(u[l]=[r],X(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,X(h,l)&&(h[l]=o)):g?(l.value=o,t.k&&(u[t.k]=o)):b("Invalid template ref type:",l,`(${typeof l})`)};o?(_.id=-1,st(_,n)):_()}else b("Invalid template ref type:",l,`(${typeof l})`)}}let ws,An;function sn(t,e){t.appContext.config.performance&&ko()&&An.mark(`vue-${e}-${t.uid}`),zw(t,e,ko()?An.now():Date.now())}function rn(t,e){if(t.appContext.config.performance&&ko()){const n=`vue-${e}-${t.uid}`,i=n+":end";An.mark(i),An.measure(`<${va(t,t.type)}> ${e}`,n,i),An.clearMarks(n),An.clearMarks(i)}Gw(t,e,ko()?An.now():Date.now())}function ko(){return ws!==void 0||(typeof window<"u"&&window.performance?(ws=!0,An=window.performance):ws=!1),ws}function HE(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const st=iE;function VE(t){return WE(t)}function WE(t,e){HE();const n=To();n.__VUE__=!0,Zp(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=rt,insertStaticContent:_}=t,C=(d,p,m,w=null,v=null,T=null,A=!1,I=null,S=pi?!1:!!p.dynamicChildren)=>{if(d===p)return;d&&!Es(d,p)&&(w=O(d),gt(d,v,T,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:$,shapeFlag:L}=p;switch(E){case br:R(d,p,m,w);break;case Dt:x(d,p,m,w);break;case Us:d==null?U(p,m,w,A):D(d,p,m,A);break;case St:Ft(d,p,m,w,v,T,A,I,S);break;default:L&1?de(d,p,m,w,v,T,A,I,S):L&6?Wr(d,p,m,w,v,T,A,I,S):L&64||L&128?E.process(d,p,m,w,v,T,A,I,S,M):b("Invalid VNode type:",E,`(${typeof E})`)}$!=null&&v&&Kl($,d&&d.ref,T,p||d,!p)},R=(d,p,m,w)=>{if(d==null)i(p.el=a(p.children),m,w);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},x=(d,p,m,w)=>{d==null?i(p.el=l(p.children||""),m,w):p.el=d.el},U=(d,p,m,w)=>{[d.el,d.anchor]=_(d.children,p,m,w,d.el,d.anchor)},D=(d,p,m,w)=>{if(p.children!==d.children){const v=f(d.anchor);F(d),[p.el,p.anchor]=_(p.children,m,v,w)}else p.el=d.el,p.anchor=d.anchor},q=({el:d,anchor:p},m,w)=>{let v;for(;d&&d!==p;)v=f(d),i(d,m,w),d=v;i(p,m,w)},F=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},de=(d,p,m,w,v,T,A,I,S)=>{A=A||p.type==="svg",d==null?Re(p,m,w,v,T,A,I,S):nt(d,p,v,T,A,I,S)},Re=(d,p,m,w,v,T,A,I)=>{let S,E;const{type:$,props:L,shapeFlag:j,transition:V,dirs:J}=d;if(S=d.el=o(d.type,T,L&&L.is,L),j&8?u(S,d.children):j&16&&Pe(d.children,S,null,w,v,T&&$!=="foreignObject",A,I),J&&ei(d,null,w,"created"),Be(S,d,d.scopeId,A,w),L){for(const le in L)le!=="value"&&!uo(le)&&r(S,le,null,L[le],T,d.children,w,v,y);"value"in L&&r(S,"value",null,L.value),(E=L.onVnodeBeforeMount)&&jt(E,w,d)}Object.defineProperty(S,"__vnode",{value:d,enumerable:!1}),Object.defineProperty(S,"__vueParentComponent",{value:w,enumerable:!1}),J&&ei(d,null,w,"beforeMount");const ue=(!v||v&&!v.pendingBranch)&&V&&!V.persisted;ue&&V.beforeEnter(S),i(S,p,m),((E=L&&L.onVnodeMounted)||ue||J)&&st(()=>{E&&jt(E,w,d),ue&&V.enter(S),J&&ei(d,null,w,"mounted")},v)},Be=(d,p,m,w,v)=>{if(m&&g(d,m),w)for(let T=0;T<w.length;T++)g(d,w[T]);if(v){let T=v.subTree;if(T.patchFlag>0&&T.patchFlag&2048&&(T=sg(T.children)||T),p===T){const A=v.vnode;Be(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},Pe=(d,p,m,w,v,T,A,I,S=0)=>{for(let E=S;E<d.length;E++){const $=d[E]=I?Sn(d[E]):Rt(d[E]);C(null,$,p,m,w,v,T,A,I)}},nt=(d,p,m,w,v,T,A)=>{const I=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:$}=p;S|=d.patchFlag&16;const L=d.props||he,j=p.props||he;let V;m&&ti(m,!1),(V=j.onVnodeBeforeUpdate)&&jt(V,m,p,d),$&&ei(p,d,m,"beforeUpdate"),m&&ti(m,!0),pi&&(S=0,A=!1,E=null);const J=v&&p.type!=="foreignObject";if(E?(Tt(d.dynamicChildren,E,I,m,w,J,T),ql(d,p)):A||pt(d,p,I,null,m,w,J,T,!1),S>0){if(S&16)it(I,p,L,j,m,w,v);else if(S&2&&L.class!==j.class&&r(I,"class",null,j.class,v),S&4&&r(I,"style",L.style,j.style,v),S&8){const ue=p.dynamicProps;for(let le=0;le<ue.length;le++){const Te=ue[le],bt=L[Te],Di=j[Te];(Di!==bt||Te==="value")&&r(I,Te,bt,Di,v,d.children,m,w,y)}}S&1&&d.children!==p.children&&u(I,p.children)}else!A&&E==null&&it(I,p,L,j,m,w,v);((V=j.onVnodeUpdated)||$)&&st(()=>{V&&jt(V,m,p,d),$&&ei(p,d,m,"updated")},w)},Tt=(d,p,m,w,v,T,A)=>{for(let I=0;I<p.length;I++){const S=d[I],E=p[I],$=S.el&&(S.type===St||!Es(S,E)||S.shapeFlag&70)?h(S.el):m;C(S,E,$,null,w,v,T,A,!0)}},it=(d,p,m,w,v,T,A)=>{if(m!==w){if(m!==he)for(const I in m)!uo(I)&&!(I in w)&&r(d,I,m[I],null,A,p.children,v,T,y);for(const I in w){if(uo(I))continue;const S=w[I],E=m[I];S!==E&&I!=="value"&&r(d,I,E,S,A,p.children,v,T,y)}"value"in w&&r(d,"value",m.value,w.value)}},Ft=(d,p,m,w,v,T,A,I,S)=>{const E=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:V}=p;(pi||L&2048)&&(L=0,S=!1,j=null),V&&(I=I?I.concat(V):V),d==null?(i(E,m,w),i($,m,w),Pe(p.children,m,$,v,T,A,I,S)):L>0&&L&64&&j&&d.dynamicChildren?(Tt(d.dynamicChildren,j,m,v,T,A,I),ql(d,p)):pt(d,p,m,$,v,T,A,I,S)},Wr=(d,p,m,w,v,T,A,I,S)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?v.ctx.activate(p,m,w,A,S):dt(p,m,w,v,T,A,S):Le(d,p,S)},dt=(d,p,m,w,v,T,A)=>{const I=d.component=nI(d,w,v);if(I.type.__hmrId&&$w(I),ho(d),sn(I,"mount"),iu(d)&&(I.ctx.renderer=M),sn(I,"init"),sI(I),rn(I,"init"),I.asyncDep){if(v&&v.registerDep(I,G),!d.el){const S=I.subTree=Ee(Dt);x(null,S,p,m)}return}G(I,d,p,m,v,T,A),fo(),rn(I,"mount")},Le=(d,p,m)=>{const w=p.component=d.component;if(eE(d,p,m))if(w.asyncDep&&!w.asyncResolved){ho(p),Y(w,p,m),fo();return}else w.next=p,Lw(w.update),w.update();else p.el=d.el,w.vnode=p},G=(d,p,m,w,v,T,A)=>{const I=()=>{if(d.isMounted){let{next:$,bu:L,u:j,parent:V,vnode:J}=d,ue=$,le;ho($||d.vnode),ti(d,!1),$?($.el=J.el,Y(d,$,A)):$=J,L&&vs(L),(le=$.props&&$.props.onVnodeBeforeUpdate)&&jt(le,V,$,J),ti(d,!0),sn(d,"render");const Te=Ya(d);rn(d,"render");const bt=d.subTree;d.subTree=Te,sn(d,"patch"),C(bt,Te,h(bt.el),O(bt),d,v,T),rn(d,"patch"),$.el=Te.el,ue===null&&tE(d,Te.el),j&&st(j,v),(le=$.props&&$.props.onVnodeUpdated)&&st(()=>jt(le,V,$,J),v),eg(d),fo()}else{let $;const{el:L,props:j}=p,{bm:V,m:J,parent:ue}=d,le=po(p);if(ti(d,!1),V&&vs(V),!le&&($=j&&j.onVnodeBeforeMount)&&jt($,ue,p),ti(d,!0),L&&ye){const Te=()=>{sn(d,"render"),d.subTree=Ya(d),rn(d,"render"),sn(d,"hydrate"),ye(L,d.subTree,d,v,null),rn(d,"hydrate")};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Te()):Te()}else{sn(d,"render");const Te=d.subTree=Ya(d);rn(d,"render"),sn(d,"patch"),C(null,Te,m,w,d,v,T),rn(d,"patch"),p.el=Te.el}if(J&&st(J,v),!le&&($=j&&j.onVnodeMounted)){const Te=p;st(()=>jt($,ue,Te),v)}(p.shapeFlag&256||ue&&po(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&st(d.a,v),d.isMounted=!0,Ww(d),p=m=w=null}},S=d.effect=new Yc(I,()=>pa(E),d.scope),E=d.update=()=>S.run();E.id=d.uid,ti(d,!0),S.onTrack=d.rtc?$=>vs(d.rtc,$):void 0,S.onTrigger=d.rtg?$=>vs(d.rtg,$):void 0,E.ownerInstance=d,E()},Y=(d,p,m)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,xE(d,p.props,w,m),BE(d,p.children,m),Pi(),jh(),Oi()},pt=(d,p,m,w,v,T,A,I,S=!1)=>{const E=d&&d.children,$=d?d.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:V}=p;if(j>0){if(j&128){vn(E,L,m,w,v,T,A,I,S);return}else if(j&256){Zn(E,L,m,w,v,T,A,I,S);return}}V&8?($&16&&y(E,v,T),L!==E&&u(m,L)):$&16?V&16?vn(E,L,m,w,v,T,A,I,S):y(E,v,T,!0):($&8&&u(m,""),V&16&&Pe(L,m,w,v,T,A,I,S))},Zn=(d,p,m,w,v,T,A,I,S)=>{d=d||Ki,p=p||Ki;const E=d.length,$=p.length,L=Math.min(E,$);let j;for(j=0;j<L;j++){const V=p[j]=S?Sn(p[j]):Rt(p[j]);C(d[j],V,m,null,v,T,A,I,S)}E>$?y(d,v,T,!0,!1,L):Pe(p,m,w,v,T,A,I,S,L)},vn=(d,p,m,w,v,T,A,I,S)=>{let E=0;const $=p.length;let L=d.length-1,j=$-1;for(;E<=L&&E<=j;){const V=d[E],J=p[E]=S?Sn(p[E]):Rt(p[E]);if(Es(V,J))C(V,J,m,null,v,T,A,I,S);else break;E++}for(;E<=L&&E<=j;){const V=d[L],J=p[j]=S?Sn(p[j]):Rt(p[j]);if(Es(V,J))C(V,J,m,null,v,T,A,I,S);else break;L--,j--}if(E>L){if(E<=j){const V=j+1,J=V<$?p[V].el:w;for(;E<=j;)C(null,p[E]=S?Sn(p[E]):Rt(p[E]),m,J,v,T,A,I,S),E++}}else if(E>j)for(;E<=L;)gt(d[E],v,T,!0),E++;else{const V=E,J=E,ue=new Map;for(E=J;E<=j;E++){const Je=p[E]=S?Sn(p[E]):Rt(p[E]);Je.key!=null&&(ue.has(Je.key)&&b("Duplicate keys found during update:",JSON.stringify(Je.key),"Make sure keys are unique."),ue.set(Je.key,E))}let le,Te=0;const bt=j-J+1;let Di=!1,kh=0;const ys=new Array(bt);for(E=0;E<bt;E++)ys[E]=0;for(E=V;E<=L;E++){const Je=d[E];if(Te>=bt){gt(Je,v,T,!0);continue}let Ut;if(Je.key!=null)Ut=ue.get(Je.key);else for(le=J;le<=j;le++)if(ys[le-J]===0&&Es(Je,p[le])){Ut=le;break}Ut===void 0?gt(Je,v,T,!0):(ys[Ut-J]=E+1,Ut>=kh?kh=Ut:Di=!0,C(Je,p[Ut],m,null,v,T,A,I,S),Te++)}const Ph=Di?KE(ys):Ki;for(le=Ph.length-1,E=bt-1;E>=0;E--){const Je=J+E,Ut=p[Je],Oh=Je+1<$?p[Je+1].el:w;ys[E]===0?C(null,Ut,m,Oh,v,T,A,I,S):Di&&(le<0||E!==Ph[le]?$t(Ut,m,Oh,2):le--)}}},$t=(d,p,m,w,v=null)=>{const{el:T,type:A,transition:I,children:S,shapeFlag:E}=d;if(E&6){$t(d.component.subTree,p,m,w);return}if(E&128){d.suspense.move(p,m,w);return}if(E&64){A.move(d,p,m,M);return}if(A===St){i(T,p,m);for(let L=0;L<S.length;L++)$t(S[L],p,m,w);i(d.anchor,p,m);return}if(A===Us){q(d,p,m);return}if(w!==2&&E&1&&I)if(w===0)I.beforeEnter(T),i(T,p,m),st(()=>I.enter(T),v);else{const{leave:L,delayLeave:j,afterLeave:V}=I,J=()=>i(T,p,m),ue=()=>{L(T,()=>{J(),V&&V()})};j?j(T,J,ue):ue()}else i(T,p,m)},gt=(d,p,m,w=!1,v=!1)=>{const{type:T,props:A,ref:I,children:S,dynamicChildren:E,shapeFlag:$,patchFlag:L,dirs:j}=d;if(I!=null&&Kl(I,null,m,d,!0),$&256){p.ctx.deactivate(d);return}const V=$&1&&j,J=!po(d);let ue;if(J&&(ue=A&&A.onVnodeBeforeUnmount)&&jt(ue,p,d),$&6)En(d.component,m,w);else{if($&128){d.suspense.unmount(m,w);return}V&&ei(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,m,v,M,w):E&&(T!==St||L>0&&L&64)?y(E,p,m,!1,!0):(T===St&&L&384||!v&&$&16)&&y(S,p,m),w&&wn(d)}(J&&(ue=A&&A.onVnodeUnmounted)||V)&&st(()=>{ue&&jt(ue,p,d),V&&ei(d,null,p,"unmounted")},m)},wn=d=>{const{type:p,el:m,anchor:w,transition:v}=d;if(p===St){d.patchFlag>0&&d.patchFlag&2048&&v&&!v.persisted?d.children.forEach(A=>{A.type===Dt?s(A.el):wn(A)}):Kr(m,w);return}if(p===Us){F(d);return}const T=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:I}=v,S=()=>A(m,T);I?I(d.el,T,S):S()}else T()},Kr=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},En=(d,p,m)=>{d.type.__hmrId&&Uw(d);const{bum:w,scope:v,update:T,subTree:A,um:I}=d;w&&vs(w),v.stop(),T&&(T.active=!1,gt(A,d,p,m)),I&&st(I,p),st(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve()),qw(d)},y=(d,p,m,w=!1,v=!1,T=0)=>{for(let A=T;A<d.length;A++)gt(d[A],p,m,w,v)},O=d=>d.shapeFlag&6?O(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),N=(d,p,m)=>{d==null?p._vnode&&gt(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,m),jh(),Xp(),p._vnode=d},M={p:C,um:gt,m:$t,r:wn,mt:dt,mc:Pe,pc:pt,pbc:Tt,n:O,o:t};let Q,ye;return e&&([Q,ye]=e(M)),{render:N,hydrate:Q,createApp:PE(N,Q)}}function ti({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ql(t,e,n=!1){const i=t.children,s=e.children;if(B(i)&&B(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Sn(s[r]),a.el=o.el),n||ql(o,a)),a.type===br&&(a.el=o.el),a.type===Dt&&!a.el&&(a.el=o.el)}}function KE(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const qE=t=>t.__isTeleport,St=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),Dt=Symbol.for("v-cmt"),Us=Symbol.for("v-stc"),js=[];let Pt=null;function qn(t=!1){js.push(Pt=t?null:[])}function zE(){js.pop(),Pt=js[js.length-1]||null}let Zs=1;function ef(t){Zs+=t}function GE(t){return t.dynamicChildren=Zs>0?Pt||Ki:null,zE(),Zs>0&&Pt&&Pt.push(t),t}function zn(t,e,n,i,s,r){return GE(we(t,e,n,i,s,r,!0))}function er(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return e.shapeFlag&6&&Ui.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const YE=(...t)=>XE(...t),_a="__vInternal",vg=({key:t})=>t??null,mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||ke(t)||W(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function we(t,e=null,n=null,i=0,s=null,r=t===St?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vg(e),ref:e&&mo(e),scopeId:ig,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ot};return a?(au(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),l.key!==l.key&&b("VNode created with invalid key (NaN). VNode type:",l.type),Zs>0&&!o&&Pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pt.push(l),l}const Ee=YE;function XE(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===yE)&&(t||b(`Invalid vnode type when creating vnode: ${t}.`),t=Dt),er(t)){const a=Hn(t,e,!0);return n&&au(a,n),Zs>0&&!r&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(bg(t)&&(t=t.__vccOpts),e){e=JE(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=zc(a)),fe(l)&&(Ml(l)&&!B(l)&&(l=ve({},l)),e.style=qc(l))}const o=Se(t)?1:nE(t)?128:qE(t)?64:fe(t)?4:W(t)?2:0;return o&4&&Ml(t)&&(t=z(t),b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),we(t,e,n,i,s,o,r,!0)}function JE(t){return t?Ml(t)||_a in t?ve({},t):t:null}function Hn(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?ZE(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vg(a),ref:e&&e.ref?n&&s?B(s)?s.concat(mo(e)):[s,mo(e)]:mo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&B(o)?o.map(wg):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wg(t){const e=Hn(t);return B(t.children)&&(e.children=t.children.map(wg)),e}function QE(t=" ",e=0){return Ee(br,null,t,e)}function ya(t,e){const n=Ee(Us,null,t);return n.staticCount=e,n}function Rt(t){return t==null||typeof t=="boolean"?Ee(Dt):B(t)?Ee(St,null,t.slice()):typeof t=="object"?Sn(t):Ee(br,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function au(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(_a in e)?e._ctx=ot:s===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),i&64?(n=16,e=[QE(e)]):n=8);t.children=e,t.shapeFlag|=n}function ZE(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=zc([e.class,i.class]));else if(s==="style")e.style=qc([e.style,i.style]);else if(Er(s)){const r=e[s],o=i[s];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function jt(t,e,n,i=null){xt(t,e,7,[n,i])}const eI=fg();let tI=0;function nI(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||eI,r={uid:tI++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pg(i,s),emitsOptions:ng(i,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:i.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=wE(r),r.root=e?e.root:r,r.emit=Xw.bind(null,r),t.ce&&t.ce(r),r}let Ae=null;const lu=()=>Ae||ot;let cu,Mi,tf="__VUE_INSTANCE_SETTERS__";(Mi=To()[tf])||(Mi=To()[tf]=[]),Mi.push(t=>Ae=t),cu=t=>{Mi.length>1?Mi.forEach(e=>e(t)):Mi[0](t)};const ns=t=>{cu(t),t.scope.on()},mi=()=>{Ae&&Ae.scope.off(),cu(null)},iI=Kn("slot,component");function zl(t,e){const n=e.isNativeTag||Ep;(iI(t)||n(t))&&b("Do not use built-in or reserved HTML elements as component id: "+t)}function Eg(t){return t.vnode.shapeFlag&4}let tr=!1;function sI(t,e=!1){tr=e;const{props:n,children:i}=t.vnode,s=Eg(t);OE(t,n,s,e),jE(t,i);const r=s?rI(t,e):void 0;return tr=!1,r}function rI(t,e){var n;const i=t.type;{if(i.name&&zl(i.name,t.appContext.config),i.components){const r=Object.keys(i.components);for(let o=0;o<r.length;o++)zl(r[o],t.appContext.config)}if(i.directives){const r=Object.keys(i.directives);for(let o=0;o<r.length;o++)og(r[o])}i.compilerOptions&&Ig()&&b('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Up(new Proxy(t.ctx,ug)),EE(t);const{setup:s}=i;if(s){const r=t.setupContext=s.length>1?lI(t):null;ns(t),Pi();const o=hn(s,t,0,[Os(t.props),r]);if(Oi(),mi(),Vc(o)){if(o.then(mi,mi),e)return o.then(a=>{nf(t,a,e)}).catch(a=>{da(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=i.name)!=null?n:"Anonymous";b(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else nf(t,o,e)}else Tg(t,e)}function nf(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)?(er(e)&&b("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=Wp(e),IE(t)):e!==void 0&&b(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Tg(t,n)}let Gl;const Ig=()=>!Gl;function Tg(t,e,n){const i=t.type;if(!t.render){if(!e&&Gl&&!i.render){const s=i.template||ru(t).template;if(s){sn(t,"compile");const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=ve(ve({isCustomElement:r,delimiters:a},o),l);i.render=Gl(s,c),rn(t,"compile")}}t.render=i.render||rt}ns(t),Pi(),bE(t),Oi(),mi(),!i.render&&t.render===rt&&!e&&(i.template?b('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):b("Component is missing template or render function."))}function oI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return So(),Ye(t,"get","$attrs"),e[n]},set(){return b("setupContext.attrs is readonly."),!1},deleteProperty(){return b("setupContext.attrs is readonly."),!1}}))}function aI(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return Ye(t,"get","$slots"),e[n]}}))}function lI(t){return Object.freeze({get attrs(){return oI(t)},get slots(){return aI(t)},get emit(){return(n,...i)=>t.emit(n,...i)},expose:n=>{if(t.exposed&&b("expose() should be called only once per setup()."),n!=null){let i=typeof n;i==="object"&&(B(n)?i="array":ke(n)&&(i="ref")),i!=="object"&&b(`expose() should be passed a plain object, received ${i}.`)}t.exposed=n||{}}})}function uu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wp(Up(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gi)return gi[n](t)},has(e,n){return n in e||n in gi}}))}const cI=/(?:^|[-_])(\w)/g,uI=t=>t.replace(cI,e=>e.toUpperCase()).replace(/[-_]/g,"");function hu(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function va(t,e,n=!1){let i=hu(e);if(!i&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&t&&t.parent){const s=r=>{for(const o in r)if(r[o]===e)return o};i=s(t.components||t.parent.type.components)||s(t.appContext.components)}return i?uI(i):n?"App":"Anonymous"}function bg(t){return W(t)&&"__vccOpts"in t}const At=(t,e)=>Aw(t,e,tr);function Cg(t,e,n){const i=arguments.length;return i===2?fe(e)&&!B(e)?er(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&er(n)&&(n=[n]),Ee(t,e,n))}const hI=Symbol.for("v-scx"),fI=()=>{{const t=Gt(hI);return t||b("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Ja(t){return!!(t&&t.__v_isShallow)}function dI(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},i={style:"color:#9d288c"},s={header(h){return fe(h)?h.__isVue?["div",t,"VueInstance"]:ke(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:fi(h)?["div",{},["span",t,Ja(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${jn(h)?" (readonly)":""}`]:jn(h)?["div",{},["span",t,Ja(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...r(h.$)]}};function r(h){const f=[];h.type.props&&h.props&&f.push(o("props",z(h.props))),h.setupState!==he&&f.push(o("setup",h.setupState)),h.data!==he&&f.push(o("data",z(h.data)));const g=l(h,"computed");g&&f.push(o("computed",g));const _=l(h,"inject");return _&&f.push(o("injected",_)),f.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),f}function o(h,f){return f=ve({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(g=>["div",{},["span",i,g+": "],a(f[g],!1)])]]:["span",{}]}function a(h,f=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",i,h]:fe(h)?["object",{object:f?z(h):h}]:["span",n,String(h)]}function l(h,f){const g=h.type;if(W(g))return;const _={};for(const C in h.ctx)c(g,C,f)&&(_[C]=h.ctx[C]);return _}function c(h,f,g){const _=h[g];if(B(_)&&_.includes(f)||fe(_)&&f in _||h.extends&&c(h.extends,f,g)||h.mixins&&h.mixins.some(C=>c(C,f,g)))return!0}function u(h){return Ja(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const sf="3.3.4",pI="http://www.w3.org/2000/svg",ri=typeof document<"u"?document:null,rf=ri&&ri.createElement("template"),gI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?ri.createElementNS(pI,t):ri.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ri.createTextNode(t),createComment:t=>ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{rf.innerHTML=i?`<svg>${t}</svg>`:t;const a=rf.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function mI(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _I(t,e,n){const i=t.style,s=Se(n);if(n&&!s){if(e&&!Se(e))for(const r in e)n[r]==null&&Yl(i,r,"");for(const r in n)Yl(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const yI=/[^\\];\s*$/,of=/\s*!important$/;function Yl(t,e,n){if(B(n))n.forEach(i=>Yl(t,e,i));else if(n==null&&(n=""),yI.test(n)&&b(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const i=vI(t,e);of.test(n)?t.setProperty($n(i),n.replace(of,""),"important"):t[i]=n}}const af=["Webkit","Moz","ms"],Qa={};function vI(t,e){const n=Qa[e];if(n)return n;let i=Jt(e);if(i!=="filter"&&i in t)return Qa[e]=i;i=wi(i);for(let s=0;s<af.length;s++){const r=af[s]+i;if(r in t)return Qa[e]=r}return e}const lf="http://www.w3.org/1999/xlink";function wI(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lf,e.slice(6,e.length)):t.setAttributeNS(lf,e,n);else{const r=zv(e);n==null||r&&!Ip(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function EI(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ip(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||b(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function II(t,e,n,i){t.addEventListener(e,n,i)}function TI(t,e,n,i){t.removeEventListener(e,n,i)}function bI(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=CI(e);if(i){const c=r[e]=AI(i,s);II(t,a,c,l)}else o&&(TI(t,a,o,l),r[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function CI(t){let e;if(cf.test(t)){e={};let i;for(;i=t.match(cf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$n(t.slice(2)),e]}let Za=0;const SI=Promise.resolve(),RI=()=>Za||(SI.then(()=>Za=0),Za=Date.now());function AI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;xt(kI(i,n.value),e,5,[i])};return n.value=t,n.attached=RI(),n}function kI(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const uf=/^on[a-z]/,PI=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?mI(t,i,s):e==="style"?_I(t,n,i):Er(e)?Eo(e)||bI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):OI(t,e,i,s))?EI(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),wI(t,e,i,s))};function OI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&uf.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||uf.test(e)&&Se(n)?!1:e in t}const NI=ve({patchProp:PI},gI);let hf;function xI(){return hf||(hf=VE(NI))}const DI=(...t)=>{const e=xI().createApp(...t);MI(e),LI(e);const{mount:n}=e;return e.mount=i=>{const s=FI(i);if(!s)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function MI(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Wv(e)||Kv(e),writable:!1})}function LI(t){if(Ig()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){b("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return b(i),n},set(){b(i)}})}}function FI(t){if(Se(t)){const e=document.querySelector(t);return e||b(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&b('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function $I(){dI()}$I();function UI(){return Sg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Sg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const jI=typeof Proxy=="function",BI="devtools-plugin:setup",HI="plugin:settings:set";let Li,Xl;function VI(){var t;return Li!==void 0||(typeof window<"u"&&window.performance?(Li=!0,Xl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Li=!0,Xl=global.perf_hooks.performance):Li=!1),Li}function WI(){return VI()?Xl.now():Date.now()}class KI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return WI()}},n&&n.on(HI,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function qI(t,e){const n=t,i=Sg(),s=UI(),r=jI&&n.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(BI,t,e);else{const o=r?new KI(n,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const on=typeof window<"u";function zI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const re=Object.assign;function el(t,e){const n={};for(const i in e){const s=e[i];n[i]=ft(s)?s.map(t):t(s)}return n}const Bs=()=>{},ft=Array.isArray;function te(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const GI=/\/$/,YI=t=>t.replace(GI,"");function tl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=QI(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function XI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ff(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function df(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Vn(e.matched[i],n.matched[s])&&Rg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!JI(t[n],e[n]))return!1;return!0}function JI(t,e){return ft(t)?pf(t,e):ft(e)?pf(e,t):t===e}function pf(t,e){return ft(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function QI(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return te(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var nr;(function(t){t.pop="pop",t.push="push"})(nr||(nr={}));var Hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hs||(Hs={}));function ZI(t){if(!t)if(on){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),YI(t)}const eT=/^[^#]+#/;function tT(t,e){return t.replace(eT,"#")+e}function nT(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const wa=()=>({left:window.pageXOffset,top:window.pageYOffset});function iT(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!i||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(i&&r){te(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{te(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){te(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=nT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gf(t,e){return(history.state?history.state.position-e:-1)+t}const Jl=new Map;function sT(t,e){Jl.set(t,e)}function rT(t){const e=Jl.get(t);return Jl.delete(t),e}let oT=()=>location.protocol+"//"+location.host;function Ag(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ff(l,"")}return ff(n,t)+i+s}function aT(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const g=Ag(t,location),_=n.value,C=e.value;let R=0;if(f){if(n.value=g,e.value=f,o&&o===_){o=null;return}R=C?f.position-C.position:0}else i(g);s.forEach(x=>{x(n.value,_,{delta:R,type:nr.pop,direction:R?R>0?Hs.forward:Hs.back:Hs.unknown})})};function l(){o=n.value}function c(f){s.push(f);const g=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(re({},f.state,{scroll:wa()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function mf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?wa():null}}function lT(t){const{history:e,location:n}=window,i={value:Ag(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:oT()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(g){te("Error with push/replace State",g),n[u?"replace":"assign"](f)}}function o(l,c){const u=re({},e.state,mf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=re({},s.value,e.state,{forward:l,scroll:wa()});e.state||te(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const h=re({},mf(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function cT(t){t=ZI(t);const e=lT(t),n=aT(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=re({location:"",base:t,go:i,createHref:tT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function uT(t){return typeof t=="string"||t&&typeof t=="object"}function kg(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pg=Symbol("navigation failure");var _f;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_f||(_f={}));const hT={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${dT(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function is(t,e){return re(new Error(hT[t](e)),{type:t,[Pg]:!0},e)}function nn(t,e){return t instanceof Error&&Pg in t&&(e==null||!!(t.type&e))}const fT=["params","query","hash"];function dT(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of fT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const yf="[^/]+?",pT={sensitive:!1,strict:!1,start:!0,end:!0},gT=/[.+*?^${}()[\]/\\]/g;function mT(t,e){const n=re({},pT,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(gT,"\\$&"),g+=40;else if(f.type===1){const{value:_,repeatable:C,optional:R,regexp:x}=f;r.push({name:_,repeatable:C,optional:R});const U=x||yf;if(U!==yf){g+=10;try{new RegExp(`(${U})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${_}" (${U}): `+q.message)}}let D=C?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(D=R&&c.length<2?`(?:/${D})`:"/"+D),R&&(D+="?"),s+=D,g+=20,R&&(g+=-8),C&&(g+=-20),U===".*"&&(g+=-50)}u.push(g)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",_=r[f-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:C,optional:R}=g,x=_ in c?c[_]:"";if(ft(x)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const U=ft(x)?x.join("/"):x;if(!U)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=U}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function _T(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yT(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=_T(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(vf(i))return 1;if(vf(s))return-1}return s.length-i.length}function vf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vT={type:0,value:""},wT=/[a-zA-Z0-9_]/;function ET(t){if(!t)return[[]];if(t==="/")return[[vT]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:wT.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function IT(t,e,n){const i=mT(ET(t.path),n);{const r=new Set;for(const o of i.keys)r.has(o.name)&&te(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(o.name)}const s=re(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function TT(t,e){const n=[],i=new Map;e=If({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const g=!f,_=bT(u);AT(_,h),_.aliasOf=f&&f.record;const C=If(e,u),R=[_];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of D)R.push(re({},_,{components:f?f.record.components:_.components,path:q,aliasOf:f?f.record:_}))}let x,U;for(const D of R){const{path:q}=D;if(h&&q[0]!=="/"){const F=h.record.path,de=F[F.length-1]==="/"?"":"/";D.path=h.record.path+(q&&de+q)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=IT(D,h,C),h&&q[0]==="/"&&kT(x,h),f?(f.alias.push(x),RT(f,x)):(U=U||x,U!==x&&U.alias.push(x),g&&u.name&&!Ef(x)&&o(u.name)),_.children){const F=_.children;for(let de=0;de<F.length;de++)r(F[de],x,f&&f.children[de])}f=f||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return U?()=>{o(U)}:Bs}function o(u){if(kg(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&yT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Og(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ef(u)&&i.set(u.record.name,u)}function c(u,h){let f,g={},_,C;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw is(1,{location:u});{const U=Object.keys(u.params||{}).filter(D=>!f.keys.find(q=>q.name===D));U.length&&te(`Discarded invalid param(s) "${U.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}C=f.record.name,g=re(wf(h.params,f.keys.filter(U=>!U.optional).map(U=>U.name)),u.params&&wf(u.params,f.keys.map(U=>U.name))),_=f.stringify(g)}else if("path"in u)_=u.path,_.startsWith("/")||te(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),f=n.find(U=>U.re.test(_)),f&&(g=f.parse(_),C=f.record.name);else{if(f=h.name?i.get(h.name):n.find(U=>U.re.test(h.path)),!f)throw is(1,{location:u,currentLocation:h});C=f.record.name,g=re({},h.params,u.params),_=f.stringify(g)}const R=[];let x=f;for(;x;)R.unshift(x.record),x=x.parent;return{name:C,path:_,params:g,matched:R,meta:ST(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function bT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function CT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ST(t){return t.reduce((e,n)=>re(e,n.meta),{})}function If(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Ql(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function RT(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(Ql.bind(null,n)))return te(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(Ql.bind(null,n)))return te(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function AT(t,e){e&&e.record.name&&!t.name&&!t.path&&te(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function kT(t,e){for(const n of e.keys)if(!t.keys.find(Ql.bind(null,n)))return te(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Og(t,e){return e.children.some(n=>n===t||Og(t,n))}const Ng=/#/g,PT=/&/g,OT=/\//g,NT=/=/g,xT=/\?/g,xg=/\+/g,DT=/%5B/g,MT=/%5D/g,Dg=/%5E/g,LT=/%60/g,Mg=/%7B/g,FT=/%7C/g,Lg=/%7D/g,$T=/%20/g;function fu(t){return encodeURI(""+t).replace(FT,"|").replace(DT,"[").replace(MT,"]")}function UT(t){return fu(t).replace(Mg,"{").replace(Lg,"}").replace(Dg,"^")}function Zl(t){return fu(t).replace(xg,"%2B").replace($T,"+").replace(Ng,"%23").replace(PT,"%26").replace(LT,"`").replace(Mg,"{").replace(Lg,"}").replace(Dg,"^")}function jT(t){return Zl(t).replace(NT,"%3D")}function BT(t){return fu(t).replace(Ng,"%23").replace(xT,"%3F")}function HT(t){return t==null?"":BT(t).replace(OT,"%2F")}function ir(t){try{return decodeURIComponent(""+t)}catch{te(`Error decoding "${t}". Using original value`)}return""+t}function VT(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(xg," "),o=r.indexOf("="),a=ir(o<0?r:r.slice(0,o)),l=o<0?null:ir(r.slice(o+1));if(a in e){let c=e[a];ft(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tf(t){let e="";for(let n in t){const i=t[n];if(n=jT(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ft(i)?i.map(r=>r&&Zl(r)):[i&&Zl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function WT(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ft(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const KT=Symbol("router view location matched"),bf=Symbol("router view depth"),du=Symbol("router"),Fg=Symbol("route location"),ec=Symbol("router view location");function Is(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rn(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(is(4,{from:n,to:e})):h instanceof Error?a(h):uT(h)?a(is(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,qT(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(f=>l._called?f:(te(h),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){te(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function qT(t,e,n){let i=0;return function(){i++===1&&te(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,i===1&&t.apply(null,arguments)}}function nl(t,e,n,i){const s=[];for(const r of t){!r.components&&!r.children.length&&te(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const o in r.components){let a=r.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw te(`Component "${o}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){te(`Component "${o}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,te(`Component "${o}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(zT(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Rn(c,n,i,r,o))}else{let l=a();"catch"in l||(te(`Component "${o}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=zI(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Rn(f,n,i,r,o)()}))}}}return s}function zT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Cf(t){const e=Gt(du),n=Gt(Fg),i=At(()=>e.resolve(zi(t.to))),s=At(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Vn.bind(null,u));if(f>-1)return f;const g=Sf(l[c-2]);return c>1&&Sf(u)===g&&h[h.length-1].path!==g?h.findIndex(Vn.bind(null,l[c-2])):f}),r=At(()=>s.value>-1&&JT(n.params,i.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&Rg(n.params,i.value.params));function a(l={}){return XT(l)?e[zi(t.replace)?"replace":"push"](zi(t.to)).catch(Bs):Promise.resolve()}if(on){const l=lu();if(l){const c={route:i.value,isActive:r.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),sE(()=>{c.route=i.value,c.isActive=r.value,c.isExactActive=o.value},{flush:"post"})}}return{route:i,href:At(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const GT=ag({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cf,setup(t,{slots:e}){const n=ha(Cf(t)),{options:i}=Gt(du),s=At(()=>({[Rf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Rf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Cg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),YT=GT;function XT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function JT(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ft(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rf=(t,e,n)=>t??e??n,QT=ag({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){eb();const i=Gt(ec),s=At(()=>t.route||i.value),r=Gt(bf,0),o=At(()=>{let c=zi(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=At(()=>s.value.matched[o.value]);go(bf,At(()=>o.value+1)),go(KT,a),go(ec,s);const l=Hp();return $s(()=>[l.value,a.value,t.name],([c,u,h],[f,g,_])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Vn(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Af(n.default,{Component:f,route:c});const g=h.props[u],_=g?g===!0?c.params:typeof g=="function"?g(c):g:null,R=Cg(f,re({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:l}));if(on&&R.ref){const x={depth:o.value,name:h.name,path:h.path,meta:h.meta};(ft(R.ref)?R.ref.map(D=>D.i):[R.ref.i]).forEach(D=>{D.__vrv_devtools=x})}return Af(n.default,{Component:R,route:c})||R}}});function Af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ZT=QT;function eb(){const t=lu(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const i=e==="KeepAlive"?"keep-alive":"transition";te(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${i}>
    <component :is="Component" />
  </${i}>
</router-view>`)}}function Ts(t,e){const n=re({},t,{matched:t.matched.map(i=>cb(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Qr(t){return{_custom:{display:t}}}let tb=0;function nb(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=tb++;qI({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ts(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const f=h.__vrv_devtools;u.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:$g})}ft(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(f=>{let g=Bg,_="";f.isExactActive?(g=jg,_="This is exactly active"):f.isActive&&(g=Ug,_="This link is active"),u.tags.push({label:f.route.path,textColor:0,tooltip:_,backgroundColor:g})}))}),$s(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const r="router:navigations:"+i;s.addTimelineLayer({id:r,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const f={guard:Qr("beforeEach"),from:Ts(h,"Current Location during this navigation"),to:Ts(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:r,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:f,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,f)=>{const g={guard:Qr("afterEach")};f?(g.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},g.status=Qr("❌")):g.status=Qr("✅"),g.from=Ts(h,"Current Location during this navigation"),g.to=Ts(u,"Target location"),s.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:g,logType:f?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+i;s.addInspector({id:a,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let h=n.getRoutes().filter(f=>!f.parent||!f.parent.record.components);h.forEach(Wg),u.filter&&(h=h.filter(f=>tc(f,u.filter.toLowerCase()))),h.forEach(f=>Vg(f,e.currentRoute.value)),u.rootNodes=h.map(Hg)}let c;s.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const f=n.getRoutes().find(g=>g.record.__vd_id===u.nodeId);f&&(u.state={options:sb(f)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function ib(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function sb(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(i=>`${i.name}${ib(i)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(i=>i.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const $g=15485081,Ug=2450411,jg=8702998,rb=2282478,Bg=16486972,ob=6710886;function Hg(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:rb}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Bg}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:$g}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:jg}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Ug}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:ob});let i=n.__vd_id;return i==null&&(i=String(ab++),n.__vd_id=i),{id:i,label:n.path,tags:e,children:t.children.map(Hg)}}let ab=0;const lb=/^\/(.*)\/([a-z]*)$/;function Vg(t,e){const n=e.matched.length&&Vn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(i=>Vn(i,t.record))),t.children.forEach(i=>Vg(i,e))}function Wg(t){t.__vd_match=!1,t.children.forEach(Wg)}function tc(t,e){const n=String(t.re).match(lb);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>tc(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),r=ir(s);return!e.startsWith("/")&&(r.includes(e)||s.includes(e))||r.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>tc(o,e))}function cb(t,e){const n={};for(const i in t)e.includes(i)||(n[i]=t[i]);return n}function ub(t){const e=TT(t.routes,t),n=t.parseQuery||VT,i=t.stringifyQuery||Tf,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Is(),o=Is(),a=Is(),l=bw(Tn);let c=Tn;on&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=el.bind(null,y=>""+y),h=el.bind(null,HT),f=el.bind(null,ir);function g(y,O){let N,M;return kg(y)?(N=e.getRecordMatcher(y),M=O):M=y,e.addRoute(M,N)}function _(y){const O=e.getRecordMatcher(y);O?e.removeRoute(O):te(`Cannot remove non-existent route "${String(y)}"`)}function C(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function x(y,O){if(O=re({},O||l.value),typeof y=="string"){const p=tl(n,y,O.path),m=e.resolve({path:p.path},O),w=s.createHref(p.fullPath);return w.startsWith("//")?te(`Location "${y}" resolved to "${w}". A resolved location cannot start with multiple slashes.`):m.matched.length||te(`No match found for location with path "${y}"`),re(p,m,{params:f(m.params),hash:ir(p.hash),redirectedFrom:void 0,href:w})}let N;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&te(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),N=re({},y,{path:tl(n,y.path,O.path).path});else{const p=re({},y.params);for(const m in p)p[m]==null&&delete p[m];N=re({},y,{params:h(p)}),O.params=h(O.params)}const M=e.resolve(N,O),Q=y.hash||"";Q&&!Q.startsWith("#")&&te(`A \`hash\` should always start with the character "#". Replace "${Q}" with "#${Q}".`),M.params=u(f(M.params));const ye=XI(i,re({},y,{hash:UT(Q),path:M.path})),d=s.createHref(ye);return d.startsWith("//")?te(`Location "${y}" resolved to "${d}". A resolved location cannot start with multiple slashes.`):M.matched.length||te(`No match found for location with path "${"path"in y?y.path:y}"`),re({fullPath:ye,hash:Q,query:i===Tf?WT(y.query):y.query||{}},M,{redirectedFrom:void 0,href:d})}function U(y){return typeof y=="string"?tl(n,y,l.value.path):re({},y)}function D(y,O){if(c!==y)return is(8,{from:O,to:y})}function q(y){return Re(y)}function F(y){return q(re(U(y),{replace:!0}))}function de(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:N}=O;let M=typeof N=="function"?N(y):N;if(typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=U(M):{path:M},M.params={}),!("path"in M)&&!("name"in M))throw te(`Invalid redirect found:
${JSON.stringify(M,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return re({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function Re(y,O){const N=c=x(y),M=l.value,Q=y.state,ye=y.force,d=y.replace===!0,p=de(N);if(p)return Re(re(U(p),{state:typeof p=="object"?re({},Q,p.state):Q,force:ye,replace:d}),O||N);const m=N;m.redirectedFrom=O;let w;return!ye&&df(i,M,N)&&(w=is(16,{to:m,from:M}),vn(M,M,!0,!1)),(w?Promise.resolve(w):nt(m,M)).catch(v=>nn(v)?nn(v,2)?v:Zn(v):Y(v,m,M)).then(v=>{if(v){if(nn(v,2))return df(i,x(v.to),m)&&O&&(O._count=O._count?O._count+1:1)>30?(te(`Detected a possibly infinite redirection in a navigation guard when going from "${M.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Re(re({replace:d},U(v.to),{state:typeof v.to=="object"?re({},Q,v.to.state):Q,force:ye}),O||m)}else v=it(m,M,!0,d,Q);return Tt(m,M,v),v})}function Be(y,O){const N=D(y,O);return N?Promise.reject(N):Promise.resolve()}function Pe(y){const O=wn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function nt(y,O){let N;const[M,Q,ye]=hb(y,O);N=nl(M.reverse(),"beforeRouteLeave",y,O);for(const p of M)p.leaveGuards.forEach(m=>{N.push(Rn(m,y,O))});const d=Be.bind(null,y,O);return N.push(d),En(N).then(()=>{N=[];for(const p of r.list())N.push(Rn(p,y,O));return N.push(d),En(N)}).then(()=>{N=nl(Q,"beforeRouteUpdate",y,O);for(const p of Q)p.updateGuards.forEach(m=>{N.push(Rn(m,y,O))});return N.push(d),En(N)}).then(()=>{N=[];for(const p of ye)if(p.beforeEnter)if(ft(p.beforeEnter))for(const m of p.beforeEnter)N.push(Rn(m,y,O));else N.push(Rn(p.beforeEnter,y,O));return N.push(d),En(N)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),N=nl(ye,"beforeRouteEnter",y,O),N.push(d),En(N))).then(()=>{N=[];for(const p of o.list())N.push(Rn(p,y,O));return N.push(d),En(N)}).catch(p=>nn(p,8)?p:Promise.reject(p))}function Tt(y,O,N){a.list().forEach(M=>Pe(()=>M(y,O,N)))}function it(y,O,N,M,Q){const ye=D(y,O);if(ye)return ye;const d=O===Tn,p=on?history.state:{};N&&(M||d?s.replace(y.fullPath,re({scroll:d&&p&&p.scroll},Q)):s.push(y.fullPath,Q)),l.value=y,vn(y,O,N,d),Zn()}let Ft;function Wr(){Ft||(Ft=s.listen((y,O,N)=>{if(!Kr.listening)return;const M=x(y),Q=de(M);if(Q){Re(re(Q,{replace:!0}),M).catch(Bs);return}c=M;const ye=l.value;on&&sT(gf(ye.fullPath,N.delta),wa()),nt(M,ye).catch(d=>nn(d,12)?d:nn(d,2)?(Re(d.to,M).then(p=>{nn(p,20)&&!N.delta&&N.type===nr.pop&&s.go(-1,!1)}).catch(Bs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),Y(d,M,ye))).then(d=>{d=d||it(M,ye,!1),d&&(N.delta&&!nn(d,8)?s.go(-N.delta,!1):N.type===nr.pop&&nn(d,20)&&s.go(-1,!1)),Tt(M,ye,d)}).catch(Bs)}))}let dt=Is(),Le=Is(),G;function Y(y,O,N){Zn(y);const M=Le.list();return M.length?M.forEach(Q=>Q(y,O,N)):(te("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function pt(){return G&&l.value!==Tn?Promise.resolve():new Promise((y,O)=>{dt.add([y,O])})}function Zn(y){return G||(G=!y,Wr(),dt.list().forEach(([O,N])=>y?N(y):O()),dt.reset()),y}function vn(y,O,N,M){const{scrollBehavior:Q}=t;if(!on||!Q)return Promise.resolve();const ye=!N&&rT(gf(y.fullPath,0))||(M||!N)&&history.state&&history.state.scroll||null;return zp().then(()=>Q(y,O,ye)).then(d=>d&&iT(d)).catch(d=>Y(d,y,O))}const $t=y=>s.go(y);let gt;const wn=new Set,Kr={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:R,getRoutes:C,resolve:x,options:t,push:q,replace:F,go:$t,back:()=>$t(-1),forward:()=>$t(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:pt,install(y){const O=this;y.component("RouterLink",YT),y.component("RouterView",ZT),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>zi(l)}),on&&!gt&&l.value===Tn&&(gt=!0,q(s.location).catch(Q=>{te("Unexpected error when starting the router:",Q)}));const N={};for(const Q in Tn)Object.defineProperty(N,Q,{get:()=>l.value[Q],enumerable:!0});y.provide(du,O),y.provide(Fg,Fp(N)),y.provide(ec,l);const M=y.unmount;wn.add(y),y.unmount=function(){wn.delete(y),wn.size<1&&(c=Tn,Ft&&Ft(),Ft=null,l.value=Tn,gt=!1,G=!1),M()},on&&nb(y,O,e)}};function En(y){return y.reduce((O,N)=>O.then(()=>Pe(N)),Promise.resolve())}return Kr}function hb(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vn(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vn(c,l))||s.push(l))}return[n,i,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw cs(e)},cs=function(t){return new Error("Firebase Database ("+Kg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fb=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),i.push(n[u],n[h],n[f],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new db;const f=r<<2|a>>4;if(i.push(f),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zg=function(t){const e=qg(t);return Ea.encodeByteArray(e,!0)},Po=function(t){return zg(t).replace(/\./g,"")},Oo=function(t){try{return Ea.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){return Gg(void 0,t)}function Gg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gb(n)||(t[n]=Gg(t[n],e[n]));return t}function gb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=()=>mb().__FIREBASE_DEFAULTS__,yb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oo(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return _b()||yb()||vb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yg=t=>{var e,n;return(n=(e=pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wb=t=>{const e=Yg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Xg=()=>{var t;return(t=pu())===null||t===void 0?void 0:t.config},Jg=t=>{var e;return(e=pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Po(JSON.stringify(n)),Po(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Qg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ib(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function em(){return Kg.NODE_ADMIN===!0}function mu(){try{return typeof indexedDB=="object"}catch{return!1}}function tm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Tb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="FirebaseError";class It extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=bb,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Cb(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new It(s,a,i)}}function Cb(t,e){return t.replace(Sb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Sb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return JSON.parse(t)}function $e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=rr(Oo(r[0])||""),n=rr(Oo(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Rb=function(t){const e=nm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ab=function(t){const e=nm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(kf(r)&&kf(o)){if(!xo(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function kf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Pb(t,e){const n=new Ob(t,e);return n.subscribe.bind(n)}class Ob{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Nb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function il(){}function xb(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,k(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ia=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=1e3,Lb=2,Fb=4*60*60*1e3,$b=.5;function Pf(t,e=Mb,n=Lb){const i=e*Math.pow(n,t),s=Math.round($b*i*(Math.random()-.5)*2);return Math.min(Fb,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new sr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bb(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jb(t){return t===ii?void 0:t}function Bb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ub(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Vb={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Wb=se.INFO,Kb={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},qb=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Kb[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=Wb,this._logHandler=qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const zb=(t,e)=>e.some(n=>t instanceof n);let Of,Nf;function Gb(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yb(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const im=new WeakMap,ic=new WeakMap,sm=new WeakMap,sl=new WeakMap,_u=new WeakMap;function Xb(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Dn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&im.set(n,t)}).catch(()=>{}),_u.set(e,t),e}function Jb(t){if(ic.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ic.set(t,e)}let sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qb(t){sc=t(sc)}function Zb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(rl(this),e,...n);return sm.set(i,e.sort?e.sort():[e]),Dn(i)}:Yb().includes(t)?function(...e){return t.apply(rl(this),e),Dn(im.get(this))}:function(...e){return Dn(t.apply(rl(this),e))}}function e0(t){return typeof t=="function"?Zb(t):(t instanceof IDBTransaction&&Jb(t),zb(t,Gb())?new Proxy(t,sc):t)}function Dn(t){if(t instanceof IDBRequest)return Xb(t);if(sl.has(t))return sl.get(t);const e=e0(t);return e!==t&&(sl.set(t,e),_u.set(e,t)),e}const rl=t=>_u.get(t);function t0(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Dn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Dn(o.result),l.oldVersion,l.newVersion,Dn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const n0=["get","getKey","getAll","getAllKeys","count"],i0=["put","add","delete","clear"],ol=new Map;function xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=i0.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||n0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ol.set(e,r),r}Qb(t=>({...t,get:(e,n,i)=>xf(e,n)||t.get(e,n,i),has:(e,n)=>!!xf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(r0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function r0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rc="@firebase/app",Df="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new hs("@firebase/app"),o0="@firebase/app-compat",a0="@firebase/analytics-compat",l0="@firebase/analytics",c0="@firebase/app-check-compat",u0="@firebase/app-check",h0="@firebase/auth",f0="@firebase/auth-compat",d0="@firebase/database",p0="@firebase/database-compat",g0="@firebase/functions",m0="@firebase/functions-compat",_0="@firebase/installations",y0="@firebase/installations-compat",v0="@firebase/messaging",w0="@firebase/messaging-compat",E0="@firebase/performance",I0="@firebase/performance-compat",T0="@firebase/remote-config",b0="@firebase/remote-config-compat",C0="@firebase/storage",S0="@firebase/storage-compat",R0="@firebase/firestore",A0="@firebase/firestore-compat",k0="firebase",P0="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="[DEFAULT]",O0={[rc]:"fire-core",[o0]:"fire-core-compat",[l0]:"fire-analytics",[a0]:"fire-analytics-compat",[u0]:"fire-app-check",[c0]:"fire-app-check-compat",[h0]:"fire-auth",[f0]:"fire-auth-compat",[d0]:"fire-rtdb",[p0]:"fire-rtdb-compat",[g0]:"fire-fn",[m0]:"fire-fn-compat",[_0]:"fire-iid",[y0]:"fire-iid-compat",[v0]:"fire-fcm",[w0]:"fire-fcm-compat",[E0]:"fire-perf",[I0]:"fire-perf-compat",[T0]:"fire-rc",[b0]:"fire-rc-compat",[C0]:"fire-gcs",[S0]:"fire-gcs-compat",[R0]:"fire-fst",[A0]:"fire-fst-compat","fire-js":"fire-js",[k0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,ac=new Map;function N0(t,e){try{t.container.addComponent(e)}catch(n){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ct(t){const e=t.name;if(ac.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of Do.values())N0(n,t);return!0}function Cr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mn=new Gn("app","Firebase",x0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=P0;function rm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:oc,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=Xg()),!n)throw Mn.create("no-options");const r=Do.get(s);if(r){if(xo(n,r.options)&&xo(i,r.config))return r;throw Mn.create("duplicate-app",{appName:s})}const o=new Hb(s);for(const l of ac.values())o.addComponent(l);const a=new D0(n,i,o);return Do.set(s,a),a}function yu(t=oc){const e=Do.get(t);if(!e&&t===oc&&Xg())return rm();if(!e)throw Mn.create("no-app",{appName:t});return e}function Ue(t,e,n){var i;let s=(i=O0[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(a.join(" "));return}ct(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firebase-heartbeat-database",L0=1,or="firebase-heartbeat-store";let al=null;function om(){return al||(al=t0(M0,L0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(or)}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),al}async function F0(t){try{return await(await om()).transaction(or).objectStore(or).get(am(t))}catch(e){if(e instanceof It)Ii.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ii.warn(n.message)}}}async function Mf(t,e){try{const i=(await om()).transaction(or,"readwrite");await i.objectStore(or).put(e,am(t)),await i.done}catch(n){if(n instanceof It)Ii.warn(n.message);else{const i=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ii.warn(i.message)}}}function am(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=1024,U0=30*24*60*60*1e3;class j0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H0(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=U0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lf(),{heartbeatsToSend:n,unsentEntries:i}=B0(this._heartbeatsCache.heartbeats),s=Po(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lf(){return new Date().toISOString().substring(0,10)}function B0(t,e=$0){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ff(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ff(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class H0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mu()?tm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await F0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ff(t){return Po(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){ct(new tt("platform-logger",e=>new s0(e),"PRIVATE")),ct(new tt("heartbeat",e=>new j0(e),"PRIVATE")),Ue(rc,Df,t),Ue(rc,Df,"esm2017"),Ue("fire-js","")}V0("");function vu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function lm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W0=lm,cm=new Gn("auth","Firebase",lm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new hs("@firebase/auth");function K0(t,...e){Mo.logLevel<=se.WARN&&Mo.warn(`Auth (${Yn}): ${t}`,...e)}function _o(t,...e){Mo.logLevel<=se.ERROR&&Mo.error(`Auth (${Yn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw wu(t,...e)}function Yt(t,...e){return wu(t,...e)}function q0(t,e,n){const i=Object.assign(Object.assign({},W0()),{[e]:n});return new Gn("auth","Firebase",i).create(e,{appName:t.name})}function wu(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return cm.create(t,...e)}function K(t,e,...n){if(!t)throw wu(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function pn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function z0(){return $f()==="http:"||$f()==="https:"}function $f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(z0()||Qg()||"connection"in navigator)?navigator.onLine:!0}function Y0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=gu()||Zg()}get(){return G0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=new Sr(3e4,6e4);function hm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rr(t,e,n,i,s={}){return fm(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=us(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),um.fetch()(dm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function fm(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},X0),e);try{const s=new Z0(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Zr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zr(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw q0(t,u,c);dn(t,u)}}catch(s){if(s instanceof It)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function Q0(t,e,n,i,s={}){const r=await Rr(t,e,n,i,s);return"mfaPendingCredential"in r&&dn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function dm(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Eu(t.config,s):`${t.config.apiScheme}://${s}`}class Z0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Yt(this.auth,"network-request-failed")),J0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Yt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function tC(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nC(t,e=!1){const n=yn(t),i=await n.getIdToken(e),s=Iu(i);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Vs(ll(s.auth_time)),issuedAtTime:Vs(ll(s.iat)),expirationTime:Vs(ll(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ll(t){return Number(t)*1e3}function Iu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Oo(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iC(t){const e=Iu(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof It&&sC(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function sC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ar(t,tC(n,{idToken:i}));K(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?lC(r.providerUserInfo):[],a=aC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new pm(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function oC(t){const e=yn(t);await Lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aC(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function lC(t){return t.map(e=>{var{providerId:n}=e,i=vu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){const n=await fm(t,{},async()=>{const i=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=dm(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",um.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await cC(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new lr;return i&&(K(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _i{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new pm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ar(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nC(this,e)}reload(){return oC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _i(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Lo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ar(this,eC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,U=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:q,isAnonymous:F,providerData:de,stsTokenManager:Re}=n;K(D&&Re,e,"internal-error");const Be=lr.fromJSON(this.name,Re);K(typeof D=="string",e,"internal-error"),bn(h,e.name),bn(f,e.name),K(typeof q=="boolean",e,"internal-error"),K(typeof F=="boolean",e,"internal-error"),bn(g,e.name),bn(_,e.name),bn(C,e.name),bn(R,e.name),bn(x,e.name),bn(U,e.name);const Pe=new _i({uid:D,auth:e,email:f,emailVerified:q,displayName:h,isAnonymous:F,photoURL:_,phoneNumber:g,tenantId:C,stsTokenManager:Be,createdAt:x,lastLoginAt:U});return de&&Array.isArray(de)&&(Pe.providerData=de.map(nt=>Object.assign({},nt))),R&&(Pe._redirectEventId=R),Pe}static async _fromIdTokenResponse(e,n,i=!1){const s=new lr;s.updateFromServerResponse(n);const r=new _i({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Lo(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new Map;function ln(t){pn(t instanceof Function,"Expected a class definition");let e=Uf.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gm.type="NONE";const jf=gm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,r),this.fullPersistenceKey=yo("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_i._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Yi(ln(jf),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ln(jf);const o=yo(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=_i._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Yi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Yi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ym(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wm(e))return"Blackberry";if(Em(e))return"Webos";if(Tu(e))return"Safari";if((e.includes("chrome/")||_m(e))&&!e.includes("edge/"))return"Chrome";if(vm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function mm(t=Xe()){return/firefox\//i.test(t)}function Tu(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _m(t=Xe()){return/crios\//i.test(t)}function ym(t=Xe()){return/iemobile/i.test(t)}function vm(t=Xe()){return/android/i.test(t)}function wm(t=Xe()){return/blackberry/i.test(t)}function Em(t=Xe()){return/webos/i.test(t)}function Ta(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uC(t=Xe()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hC(){return Ib()&&document.documentMode===10}function Im(t=Xe()){return Ta(t)||vm(t)||Em(t)||wm(t)||/windows phone/i.test(t)||ym(t)}function fC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e=[]){let n;switch(t){case"Browser":n=Bf(Xe());break;case"Worker":n=`${Bf(Xe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",hm(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=6;class mC{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new dC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Yi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?yn(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pC(this),n=new mC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Yi.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&K0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bu(t){return yn(t)}class Hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pb(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vC(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Yt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",yC().appendChild(i)})}function wC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t,e){const n=Cr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(xo(r,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function IC(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function TC(t,e,n){const i=bu(t);K(i._canInitEmulator,i,"emulator-config-failed"),K(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=bm(e),{host:o,port:a}=bC(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||CC()}function bm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bC(t){const e=bm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Vf(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Vf(o)}}}function Vf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e){return Q0(t,"POST","/v1/accounts:signInWithIdp",hm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="http://localhost";class Ti extends Cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=vu(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ti(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Xi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:SC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=us(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Sm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ar{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ti._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Pn.credential(n,i)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ar{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ar{constructor(){super("twitter.com")}static credential(e,n){return Ti._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Nn.credential(n,i)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await _i._fromIdTokenResponse(e,i,s),o=Wf(i);return new rs({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Wf(i);return new rs({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Wf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends It{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Fo(e,n,i,s)}}function Rm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,r,e,i):r})}async function RC(t,e,n=!1){const i=await ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await ar(t,Rm(i,s,e,t),n);K(r.idToken,i,"internal-error");const o=Iu(r.idToken);K(o,i,"internal-error");const{sub:a}=o;return K(t.uid===a,i,"user-mismatch"),rs._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&dn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e,n=!1){const i="signIn",s=await Rm(t,i,e),r=await rs._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Am(t,e,n,i){return yn(t).onIdTokenChanged(e,n,i)}function PC(t,e,n){return yn(t).beforeAuthStateChanged(e,n)}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(){const t=Xe();return Tu(t)||Ta(t)}const NC=1e3,xC=10;class Pm extends km{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=OC()&&fC(),this.fallbackToPolling=Im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);hC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xC):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},NC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pm.type="LOCAL";const DC=Pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends km{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Om.type="SESSION";const Nm=Om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new ba(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await MC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Cu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function FC(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function $C(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jC(){return xm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="firebaseLocalStorageDb",BC=1,Uo="firebaseLocalStorage",Mm="fbase_key";class kr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function HC(){const t=indexedDB.deleteDatabase(Dm);return new kr(t).toPromise()}function cc(){const t=indexedDB.open(Dm,BC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Uo,{keyPath:Mm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Uo)?e(i):(i.close(),await HC(),e(await cc()))})})}async function Kf(t,e,n){const i=Ca(t,!0).put({[Mm]:e,value:n});return new kr(i).toPromise()}async function VC(t,e){const n=Ca(t,!1).get(e),i=await new kr(n).toPromise();return i===void 0?null:i.value}function qf(t,e){const n=Ca(t,!0).delete(e);return new kr(n).toPromise()}const WC=800,KC=3;class Lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>KC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ba._getInstance(jC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $C(),!this.activeServiceWorker)return;this.sender=new LC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cc();return await Kf(e,$o,"1"),await qf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Kf(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>VC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ca(s,!1).getAll();return new kr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lm.type="LOCAL";const qC=Lm;new Sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e){return e?ln(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Cm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GC(t){return kC(t.auth,new Su(t),t.bypassAuthState)}function YC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),AC(n,new Su(t),t.bypassAuthState)}async function XC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),RC(n,new Su(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GC;case"linkViaPopup":case"linkViaRedirect":return XC;case"reauthViaPopup":case"reauthViaRedirect":return YC;default:dn(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new Sr(2e3,1e4);class Bi extends Fm{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JC.get())};e()}}Bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="pendingRedirect",vo=new Map;class ZC extends Fm{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const i=await eS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eS(t,e){const n=iS(e),i=nS(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function tS(t,e){vo.set(t._key(),e)}function nS(t){return ln(t._redirectPersistence)}function iS(t){return yo(QC,t.config.apiKey,t.name)}async function sS(t,e,n=!1){const i=bu(t),s=zC(i,e),o=await new ZC(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=10*60*1e3;class oS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!$m(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rS&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $m({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $m(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uS=/^https?/;async function hS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lS(t);for(const n of e)try{if(fS(n))return}catch{}dn(t,"unauthorized-domain")}function fS(t){const e=lc(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!uS.test(n))return!1;if(cS.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new Sr(3e4,6e4);function Gf(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pS(t){return new Promise((e,n)=>{var i,s,r;function o(){Gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gf(),n(Yt(t,"network-request-failed"))},timeout:dS.get()})}if(!((s=(i=Xt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Xt().gapi)===null||r===void 0)&&r.load)o();else{const a=wC("iframefcb");return Xt()[a]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},vC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wo=null,e})}let wo=null;function gS(t){return wo=wo||pS(t),wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new Sr(5e3,15e3),_S="__/auth/iframe",yS="emulator/auth/iframe",vS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ES(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eu(e,yS):`https://${t.config.authDomain}/${_S}`,i={apiKey:e.apiKey,appName:t.name,v:Yn},s=wS.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${us(i).slice(1)}`}async function IS(t){const e=await gS(t),n=Xt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:ES(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),a=Xt().setTimeout(()=>{r(o)},mS.get());function l(){Xt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bS=500,CS=600,SS="_blank",RS="http://localhost";class Yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AS(t,e,n,i=bS,s=CS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TS),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Xe().toLowerCase();n&&(a=_m(c)?SS:n),mm(c)&&(e=e||RS,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,_])=>`${f}${g}=${_},`,"");if(uC(c)&&a!=="_self")return kS(e||"",a),new Yf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Yf(h)}function kS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="__/auth/handler",OS="emulator/auth/handler",NS=encodeURIComponent("fac");async function Xf(t,e,n,i,s,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Yn,eventId:s};if(e instanceof Sm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ar){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${NS}=${encodeURIComponent(l)}`:"";return`${xS(t)}?${us(a).slice(1)}${c}`}function xS({config:t}){return t.emulator?Eu(t,OS):`https://${t.authDomain}/${PS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="webStorageSupport";class DS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nm,this._completeRedirectFn=sS,this._overrideRedirectResult=tS}async _openPopup(e,n,i,s){var r;pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Xf(e,n,i,lc(),s);return AS(e,o,Cu())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Xf(e,n,i,lc(),s);return FC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(pn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await IS(e),i=new oS(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cl,{type:cl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[cl];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Im()||Tu()||Ta()}}const MS=DS;var Jf="@firebase/auth",Qf="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $S(t){ct(new tt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tm(t)},c=new _C(i,s,r,l);return IC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ct(new tt("auth-internal",e=>{const n=bu(e.getProvider("auth").getImmediate());return(i=>new LS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Jf,Qf,FS(t)),Ue(Jf,Qf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=5*60,jS=Jg("authIdTokenMaxAge")||US;let Zf=null;const BS=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>jS)return;const s=n==null?void 0:n.token;Zf!==s&&(Zf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HS(t=yu()){const e=Cr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EC(t,{popupRedirectResolver:MS,persistence:[qC,DC,Nm]}),i=Jg("authTokenSyncURL");if(i){const r=BS(i);PC(n,r,()=>r(n.currentUser)),Am(n,o=>r(o))}const s=Yg("auth");return s&&TC(n,`http://${s}`),n}$S("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=new Map,WS={activated:!1,tokenObservers:[]};function Lt(t){return VS.get(t)||Object.assign({},WS)}const ed={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new sr,await qS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new sr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function qS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},jo=new Gn("appCheck","AppCheck",zS);function Um(t){if(!Lt(t).activated)throw jo.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebase-app-check-database",YS=1,uc="firebase-app-check-store";let eo=null;function XS(){return eo||(eo=new Promise((t,e)=>{try{const n=indexedDB.open(GS,YS);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(jo.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(uc,{keyPath:"compositeKey"})}}}catch(n){e(jo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),eo)}function JS(t,e){return QS(ZS(t),e)}async function QS(t,e){const i=(await XS()).transaction(uc,"readwrite"),r=i.objectStore(uc).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(jo.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function ZS(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new hs("@firebase/app-check");function td(t,e){return mu()?JS(t,e).catch(n=>{hc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={error:"UNKNOWN_ERROR"};function tR(t){return Ea.encodeString(JSON.stringify(t),!1)}async function fc(t,e=!1){const n=t.app;Um(n);const i=Lt(n);let s=i.token,r;if(s&&!Ds(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Ds(l)?s=l:await td(n,void 0))}if(!e&&s&&Ds(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Lt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?hc.warn(l.message):hc.error(l),r=l}let a;return s?r?Ds(s)?a={token:s.token,internalError:r}:a=id(r):(a={token:s.token},i.token=s,await td(n,s)):a=id(r),o&&rR(n,a),a}async function nR(t){const e=t.app;Um(e);const{provider:n}=Lt(e);{const{token:i}=await n.getToken();return{token:i}}}function iR(t,e,n,i){const{app:s}=t,r=Lt(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Ds(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),nd(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>nd(t))}function jm(t,e){const n=Lt(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function nd(t){const{app:e}=t,n=Lt(e);let i=n.tokenRefresher;i||(i=sR(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function sR(t){const{app:e}=t;return new KS(async()=>{const n=Lt(e);let i;if(n.token?i=await fc(t,!0):i=await fc(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Lt(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},ed.RETRIAL_MIN_WAIT,ed.RETRIAL_MAX_WAIT)}function rR(t,e){const n=Lt(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Ds(t){return t.expireTimeMillis-Date.now()>0}function id(t){return{token:tR(eR),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Lt(this.app);for(const n of e)jm(this.app,n.next);return Promise.resolve()}}function aR(t,e){return new oR(t,e)}function lR(t){return{getToken:e=>fc(t,e),getLimitedUseToken:()=>nR(t),addTokenListener:e=>iR(t,"INTERNAL",e),removeTokenListener:e=>jm(t.app,e)}}const cR="@firebase/app-check",uR="0.8.0",hR="app-check",sd="app-check-internal";function fR(){ct(new tt(hR,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return aR(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(sd).initialize()})),ct(new tt(sd,t=>{const e=t.getProvider("app-check").getImmediate();return lR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ue(cR,uR)}fR();var dR="firebase",pR="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(dR,pR,"app");const Bm=Symbol("firebaseApp");function gR(t){return lu()&&Gt(Bm,null)||yu(t)}const to=new WeakMap;function mR(t,e){if(!to.has(t)){const n=Gv(!0);to.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),to.delete(t)}}return to.get(t)}const _R=new WeakMap,no=new WeakMap;function yR(t){const e=gR(t);if(!no.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{no.set(e,r),n(r.value)}];no.set(e,s)}return no.get(e)}function vR(t,e){const n=HS(e);Am(n,i=>{const s=yR();t.value=i,Array.isArray(s)&&s[1](t)})}const rd="@firebase/database",od="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hm="";function wR(t){Hm=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ER(e)}}catch{}return new IR},oi=Vm("localStorage"),dc=Vm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new hs("@firebase/database"),TR=function(){let t=1;return function(){return t++}}(),Wm=function(t){const e=Db(t),n=new kb;n.update(e);const i=n.digest();return Ea.encodeByteArray(i)},Pr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Pr.apply(null,i):typeof i=="object"?e+=$e(i):e+=i,e+=" "}return e};let yi=null,ad=!0;const bR=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ji.logLevel=se.VERBOSE,yi=Ji.log.bind(Ji),e&&dc.set("logging_enabled",!0)):typeof t=="function"?yi=t:(yi=null,dc.remove("logging_enabled"))},Ve=function(...t){if(ad===!0&&(ad=!1,yi===null&&dc.get("logging_enabled")===!0&&bR(!0)),yi){const e=Pr.apply(null,t);yi(e)}},Or=function(t){return function(...e){Ve(t,...e)}},pc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pr(...t);Ji.error(e)},bi=function(...t){const e=`FIREBASE FATAL ERROR: ${Pr(...t)}`;throw Ji.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+Pr(...t);Ji.warn(e)},CR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Km=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},SR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},os="[MIN_NAME]",Ci="[MAX_NAME]",fs=function(t,e){if(t===e)return 0;if(t===os||e===Ci)return-1;if(e===os||t===Ci)return 1;{const n=ld(t),i=ld(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},RR=function(t,e){return t===e?0:t<e?-1:1},bs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$e(e))},Ru=function(t){if(typeof t!="object"||t===null)return $e(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=$e(e[i]),n+=":",n+=Ru(t[e[i]]);return n+="}",n},qm=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function wt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zm=function(t){k(!Km(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},AR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},kR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},PR=new RegExp("^-?(0*)\\d{1,10}$"),OR=-2147483648,NR=2147483647,ld=function(t){if(PR.test(t)){const e=Number(t);if(e>=OR&&e<=NR)return e}return null},Nr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},xR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class gc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="5",Gm="v",Ym="s",Xm="r",Jm="f",Qm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zm="ls",e_="p",mc="ac",t_="websocket",n_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function FR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function i_(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let i;if(e===t_)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===n_)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);FR(t)&&(n.ns=t.namespace);const s=[];return wt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul={},hl={};function ku(t){const e=t.toString();return ul[e]||(ul[e]=new $R),ul[e]}function UR(t,e){const n=t.toString();return hl[n]||(hl[n]=e()),hl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Nr(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="start",BR="close",HR="pLPCommand",VR="pRTLPCB",s_="id",r_="pw",o_="ser",WR="cb",KR="seg",qR="ts",zR="d",GR="dframe",a_=1870,l_=30,YR=a_-l_,XR=25e3,JR=3e4;class Hi{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Or(e),this.stats_=ku(n),this.urlFn=l=>(this.appCheckToken&&(l[mc]=this.appCheckToken),i_(n,n_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JR)),SR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cd)this.id=a,this.password=l;else if(o===BR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[cd]="t",i[o_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[WR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Gm]=Au,this.transportSessionId&&(i[Ym]=this.transportSessionId),this.lastSessionId&&(i[Zm]=this.lastSessionId),this.applicationId&&(i[e_]=this.applicationId),this.appCheckToken&&(i[mc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qm.test(location.hostname)&&(i[Xm]=Jm);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hi.forceAllow_=!0}static forceDisallow(){Hi.forceDisallow_=!0}static isAvailable(){return Hi.forceAllow_?!0:!Hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AR()&&!kR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zg(n),s=qm(i,YR);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[GR]="t",i[s_]=e,i[r_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pu{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TR(),window[HR+this.uniqueCallbackIdentifier]=e,window[VR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ve("frame writing exception"),a.stack&&Ve(a.stack),Ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[s_]=this.myID,e[r_]=this.myPW,e[o_]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+l_+i.length<=a_;){const o=this.pendingSegs.shift();i=i+"&"+KR+s+"="+o.seg+"&"+qR+s+"="+o.ts+"&"+zR+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(XR)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=16384,ZR=45e3;let Bo=null;typeof MozWebSocket<"u"?Bo=MozWebSocket:typeof WebSocket<"u"&&(Bo=WebSocket);class kt{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Or(this.connId),this.stats_=ku(n),this.connURL=kt.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Gm]=Au,typeof location<"u"&&location.hostname&&Qm.test(location.hostname)&&(o[Xm]=Jm),n&&(o[Ym]=n),i&&(o[Zm]=i),s&&(o[mc]=s),r&&(o[e_]=r),i_(e,t_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oi.set("previous_websocket_failure",!0);try{let i;em(),this.mySock=new Bo(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Bo!==null&&!kt.forceDisallow_}static previouslyFailed(){return oi.isInMemoryStorage||oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=rr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=$e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=qm(n,QR);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hi,kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=kt&&kt.isAvailable();let i=n&&!kt.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[kt];else{const s=this.transports_=[];for(const r of cr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);cr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=6e4,tA=5e3,nA=10*1024,iA=100*1024,fl="t",ud="d",sA="s",hd="r",rA="e",fd="o",dd="a",pd="n",gd="p",oA="h";class aA{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Or("c:"+this.id+":"),this.transportManager_=new cr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fl in e){const n=e[fl];n===dd?this.upgradeIfSecondaryHealthy_():n===hd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=bs("t",e),i=bs("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=bs("t",e),i=bs("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=bs(fl,e);if(ud in e){const i=e[ud];if(n===oA){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===pd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sA?this.onConnectionShutdown_(i):n===hd?this.onReset_(i):n===rA?pc("Server Error: "+i):n===fd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Au!==i&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(eA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends u_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ho}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=32,_d=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new _e("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function h_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function f_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function d_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function xe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof _e)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new _e(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function yt(t,e){const n=ne(t),i=ne(e);if(n===null)return e;if(n===i)return yt(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function p_(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class cA{constructor(e,n){this.errorPrefix_=n,this.parts_=f_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ia(this.parts_[i]);g_(this)}}function uA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ia(e),g_(t)}function hA(t){const e=t.parts_.pop();t.byteLength_-=Ia(e),t.parts_.length>0&&(t.byteLength_-=1)}function g_(t){if(t.byteLength_>_d)throw new Error(t.errorPrefix_+"has a key path longer than "+_d+" bytes ("+t.byteLength_+").");if(t.parts_.length>md)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+md+") or object contains a cycle "+si(t))}function si(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends u_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ou}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,fA=60*5*1e3,yd=30*1e3,dA=1.3,pA=3e4,gA="server_kill",vd=3;class fn extends c_{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=fn.nextPersistentConnectionId_++,this.log_=Or("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=fA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!em())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ou.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ho.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_($e(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new sr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;fn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const i=ss(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ab(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Rb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$e(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pc("Unrecognized action received from server: "+$e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pA&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+fn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new aA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{ht(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(gA)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ht(h),l())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nc(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Ru(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new _e(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vd&&(this.reconnectDelay_=yd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hm.replace(/\./g,"-")]=1,gu()?e["framework.cordova"]=1:Zg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ho.getInstance().currentlyOnline();return nc(this.interruptReasons_)&&e}}fn.nextPersistentConnectionId_=0;fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ie(os,e),s=new ie(os,n);return this.compare(i,s)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class m_ extends Sa{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(e){io=e}compare(e,n){return fs(e.name,n.name)}isDefinedOn(e){throw cs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Ci,io)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,io)}toString(){return".key"}}const Qi=new m_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ne{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ne.RED,this.left=s??at.EMPTY_NODE,this.right=r??at.EMPTY_NODE}copy(e,n,i,s,r){return new Ne(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return at.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ne.RED=!0;Ne.BLACK=!1;class mA{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ne(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class at{constructor(e,n=at.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new at(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ne.BLACK,null,null))}remove(e){return new at(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ne.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}at.EMPTY_NODE=new mA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){return fs(t.name,e.name)}function Nu(t,e){return fs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c;function yA(t){_c=t}const __=function(t){return typeof t=="number"?"number:"+zm(t):"string:"+t},y_=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else k(t===_c||t.isEmpty(),"priority of unexpected type.");k(t===_c||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;class Oe{constructor(e,n=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),y_(this.priorityNode_)}static set __childrenNodeConstructor(e){wd=e}static get __childrenNodeConstructor(){return wd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:ne(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ne(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(k(i!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+__(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zm(this.value_):e+=this.value_,this.lazyHash_=Wm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Oe.VALUE_TYPE_ORDER.indexOf(n),r=Oe.VALUE_TYPE_ORDER.indexOf(i);return k(s>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v_,w_;function vA(t){v_=t}function wA(t){w_=t}class EA extends Sa{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?fs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Ci,new Oe("[PRIORITY-POST]",w_))}makePost(e,n){const i=v_(e);return new ie(n,new Oe("[PRIORITY-POST]",i))}toString(){return".priority"}}const qe=new EA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=Math.log(2);class TA{constructor(e){const n=r=>parseInt(Math.log(r)/IA,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vo=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ne(f,h.node,Ne.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=s(l,g),C=s(g+1,c);return h=t[g],f=n?n(h):h,new Ne(f,h.node,Ne.BLACK,_,C)}},r=function(l){let c=null,u=null,h=t.length;const f=function(_,C){const R=h-_,x=h;h-=_;const U=s(R+1,x),D=t[R],q=n?n(D):D;g(new Ne(q,D.node,C,null,U))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),R=Math.pow(2,l.count-(_+1));C?f(R,Ne.BLACK):(f(R,Ne.BLACK),f(R,Ne.RED))}return u},o=new TA(t.length),a=r(o);return new at(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;const Fi={};class cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Fi&&qe,"ChildrenNode.ts has not been loaded"),dl=dl||new cn({".priority":Fi},{".priority":qe}),dl}get(e){const n=ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof at?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ie.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Vo(i,e.getCompare()):a=Fi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new cn(u,c)}addToIndexes(e,n){const i=No(this.indexes_,(s,r)=>{const o=ss(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),s===Fi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ie.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vo(a,o.getCompare())}else return Fi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ie(e.name,a))),l.insert(e,e.node)}});return new cn(i,this.indexSet_)}removeFromIndexes(e,n){const i=No(this.indexes_,s=>{if(s===Fi)return s;{const r=n.get(e.name);return r?s.remove(new ie(e.name,r)):s}});return new cn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class oe{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&y_(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ss||(Ss=new oe(new at(Nu),null,cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ss:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ie(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ss:this.priorityNode_;return new oe(s,o,r)}}updateChild(e,n){const i=ne(e);if(i===null)return n;{k(ne(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ge(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(qe,(o,a)=>{n[o]=a.val(e),i++,r&&oe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+__(this.getPriority().val())+":"),this.forEachChild(qe,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Wm(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ie(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ie.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xr?-1:0}withIndex(e){if(e===Qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(qe),s=n.getIterator(qe);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qi?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bA extends oe{constructor(){super(new at(Nu),oe.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const xr=new bA;Object.defineProperties(ie,{MIN:{value:new ie(os,oe.EMPTY_NODE)},MAX:{value:new ie(Ci,xr)}});m_.__EMPTY_NODE=oe.EMPTY_NODE;Oe.__childrenNodeConstructor=oe;yA(xr);wA(xr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=!0;function We(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Oe(n,We(e))}if(!(t instanceof Array)&&CA){const n=[];let i=!1;if(wt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ie(o,l)))}}),n.length===0)return oe.EMPTY_NODE;const r=Vo(n,_A,o=>o.name,Nu);if(i){const o=Vo(n,qe.getCompare());return new oe(r,We(e),new cn({".priority":o},{".priority":qe}))}else return new oe(r,We(e),cn.Default)}else{let n=oe.EMPTY_NODE;return wt(t,(i,s)=>{if(_n(t,i)&&i.substring(0,1)!=="."){const r=We(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(We(e))}}vA(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA extends Sa{constructor(e){super(),this.indexPath_=e,k(!Z(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?fs(e.name,n.name):r}makePost(e,n){const i=We(e),s=oe.EMPTY_NODE.updateChild(this.indexPath_,i);return new ie(n,s)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,xr);return new ie(Ci,e)}toString(){return f_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA extends Sa{compare(e,n){const i=e.node.compareTo(n.node);return i===0?fs(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const i=We(e);return new ie(n,i)}toString(){return".value"}}const AA=new RA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){return{type:"value",snapshotNode:t}}function PA(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function OA(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ed(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function NA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:os}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qe}copy(){const e=new xu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Id(t){const e={};if(t.isDefault())return e;let n;if(t.index_===qe?n="$priority":t.index_===AA?n="$value":t.index_===Qi?n="$key":(k(t.index_ instanceof SA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$e(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=$e(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+$e(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=$e(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+$e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Td(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==qe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends c_{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Or("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wo.getListenId_(e,i),a={};this.listens_[o]=a;const l=Id(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),ss(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=Wo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Id(e._queryParams),i=e._path.toString(),s=new sr;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+us(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rr(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(){return{value:null,children:new Map}}function E_(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ne(e);t.children.has(i)||t.children.set(i,Ko());const s=t.children.get(i);e=ge(e),E_(s,e,n)}}function yc(t,e,n){t.value!==null?n(e,t.value):DA(t,(i,s)=>{const r=new _e(e.toString()+"/"+i);yc(s,r,n)})}function DA(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=10*1e3,LA=30*1e3,FA=5*60*1e3;class $A{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new MA(e);const i=bd+(LA-bd)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;wt(e,(s,r)=>{r>0&&_n(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*FA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function I_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function T_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function b_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Kt.ACK_USER_WRITE,this.source=I_()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new qo(ce(),n,this.revert)}}else return k(ne(this.path)===e,"operationForChild called for unrelated child."),new qo(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Kt.OVERWRITE}operationForChild(e){return Z(this.path)?new Si(this.source,ce(),this.snap.getImmediateChild(e)):new Si(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Kt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Si(this.source,ce(),n.value):new ur(this.source,ce(),n)}else return k(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ur(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function UA(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(NA(o.childName,o.snapshotNode))}),Rs(t,s,"child_removed",e,i,n),Rs(t,s,"child_added",e,i,n),Rs(t,s,"child_moved",r,i,n),Rs(t,s,"child_changed",e,i,n),Rs(t,s,"value",e,i,n),s}function Rs(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>BA(t,a,l)),o.forEach(a=>{const l=jA(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function jA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function BA(t,e,n){if(e.childName==null||n.childName==null)throw cs("Should only compare child_ events.");const i=new ie(e.childName,e.snapshotNode),s=new ie(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t,e){return{eventCache:t,serverCache:e}}function Ks(t,e,n,i){return C_(new Du(e,n,i),t.serverCache)}function S_(t,e,n,i){return C_(t.eventCache,new Du(e,n,i))}function vc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;const HA=()=>(pl||(pl=new at(RR)),pl);class pe{constructor(e,n=HA()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return wt(e,(i,s)=>{n=n.set(new _e(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(Z(e))return null;{const i=ne(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ge(e),n);return r!=null?{path:xe(new _e(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=ne(e),i=this.children.get(n);return i!==null?i.subtree(ge(e)):new pe(null)}}set(e,n){if(Z(e))return new pe(n,this.children);{const i=ne(e),r=(this.children.get(i)||new pe(null)).set(ge(e),n),o=this.children.insert(i,r);return new pe(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=ne(e),i=this.children.get(n);if(i){const s=i.remove(ge(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=ne(e),i=this.children.get(n);return i?i.get(ge(e)):null}}setTree(e,n){if(Z(e))return n;{const i=ne(e),r=(this.children.get(i)||new pe(null)).setTree(ge(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new pe(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(xe(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Z(e))return null;{const r=ne(e),o=this.children.get(r);return o?o.findOnPath_(ge(e),xe(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,i){if(Z(e))return this;{this.value&&i(n,this.value);const s=ne(e),r=this.children.get(s);return r?r.foreachOnPath_(ge(e),xe(n,s),i):new pe(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(xe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.writeTree_=e}static empty(){return new Mt(new pe(null))}}function qs(t,e,n){if(Z(e))return new Mt(new pe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=yt(s,e);return r=r.updateChild(o,n),new Mt(t.writeTree_.set(s,r))}else{const s=new pe(n),r=t.writeTree_.setTree(e,s);return new Mt(r)}}}function Cd(t,e,n){let i=t;return wt(n,(s,r)=>{i=qs(i,xe(e,s),r)}),i}function Sd(t,e){if(Z(e))return Mt.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new Mt(n)}}function wc(t,e){return Ni(t,e)!=null}function Ni(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(yt(n.path,e)):null}function Rd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(qe,(i,s)=>{e.push(new ie(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ie(i,s.value))}),e}function Ln(t,e){if(Z(e))return t;{const n=Ni(t,e);return n!=null?new Mt(new pe(n)):new Mt(t.writeTree_.subtree(e))}}function Ec(t){return t.writeTree_.isEmpty()}function as(t,e){return R_(ce(),t.writeTree_,e)}function R_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=R_(xe(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(xe(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e){return x_(e,t)}function VA(t,e,n,i,s){k(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=qs(t.visibleWrites,e,n)),t.lastWriteId=i}function WA(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function KA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qA(a,i.path)?s=!1:Ot(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return zA(t),!0;if(i.snap)t.visibleWrites=Sd(t.visibleWrites,i.path);else{const a=i.children;wt(a,l=>{t.visibleWrites=Sd(t.visibleWrites,xe(i.path,l))})}return!0}else return!1}function qA(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot(xe(t.path,n),e))return!0;return!1}function zA(t){t.visibleWrites=k_(t.allWrites,GA,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function GA(t){return t.visible}function k_(t,e,n){let i=Mt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Ot(n,o)?(a=yt(n,o),i=qs(i,a,r.snap)):Ot(o,n)&&(a=yt(o,n),i=qs(i,ce(),r.snap.getChild(a)));else if(r.children){if(Ot(n,o))a=yt(n,o),i=Cd(i,a,r.children);else if(Ot(o,n))if(a=yt(o,n),Z(a))i=Cd(i,ce(),r.children);else{const l=ss(r.children,ne(a));if(l){const c=l.getChild(ge(a));i=qs(i,ce(),c)}}}else throw cs("WriteRecord should have .snap or .children")}}return i}function P_(t,e,n,i,s){if(!i&&!s){const r=Ni(t.visibleWrites,e);if(r!=null)return r;{const o=Ln(t.visibleWrites,e);if(Ec(o))return n;if(n==null&&!wc(o,ce()))return null;{const a=n||oe.EMPTY_NODE;return as(o,a)}}}else{const r=Ln(t.visibleWrites,e);if(!s&&Ec(r))return n;if(!s&&n==null&&!wc(r,ce()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Ot(c.path,e)||Ot(e,c.path))},a=k_(t.allWrites,o,e),l=n||oe.EMPTY_NODE;return as(a,l)}}}function YA(t,e,n){let i=oe.EMPTY_NODE;const s=Ni(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(qe,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ln(t.visibleWrites,e);return n.forEachChild(qe,(o,a)=>{const l=as(Ln(r,new _e(o)),a);i=i.updateImmediateChild(o,l)}),Rd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ln(t.visibleWrites,e);return Rd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function XA(t,e,n,i,s){k(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=xe(e,n);if(wc(t.visibleWrites,r))return null;{const o=Ln(t.visibleWrites,r);return Ec(o)?s.getChild(n):as(o,s.getChild(n))}}function JA(t,e,n,i){const s=xe(e,n),r=Ni(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ln(t.visibleWrites,s);return as(o,i.getNode().getImmediateChild(n))}else return null}function QA(t,e){return Ni(t.visibleWrites,e)}function ZA(t,e,n,i,s,r,o){let a;const l=Ln(t.visibleWrites,e),c=Ni(l,ce());if(c!=null)a=c;else if(n!=null)a=as(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=f.getNext();for(;g&&u.length<s;)h(g,i)!==0&&u.push(g),g=f.getNext();return u}else return[]}function ek(){return{visibleWrites:Mt.empty(),allWrites:[],lastWriteId:-1}}function Ic(t,e,n,i){return P_(t.writeTree,t.treePath,e,n,i)}function O_(t,e){return YA(t.writeTree,t.treePath,e)}function Ad(t,e,n,i){return XA(t.writeTree,t.treePath,e,n,i)}function zo(t,e){return QA(t.writeTree,xe(t.treePath,e))}function tk(t,e,n,i,s,r){return ZA(t.writeTree,t.treePath,e,n,i,s,r)}function Mu(t,e,n){return JA(t.writeTree,t.treePath,e,n)}function N_(t,e){return x_(xe(t.treePath,e),t.writeTree)}function x_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Ed(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,OA(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,PA(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ed(i,e.snapshotNode,s.oldSnap));else throw cs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const D_=new ik;class Lu{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Du(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mu(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),r=tk(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function sk(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rk(t,e,n,i,s){const r=new nk;let o,a;if(n.type===Kt.OVERWRITE){const c=n;c.source.fromUser?o=Tc(t,e,c.path,c.snap,i,s,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=Go(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Kt.MERGE){const c=n;c.source.fromUser?o=ak(t,e,c.path,c.children,i,s,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=bc(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Kt.ACK_USER_WRITE){const c=n;c.revert?o=uk(t,e,c.path,i,s,r):o=lk(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Kt.LISTEN_COMPLETE)o=ck(t,e,n.path,i,r);else throw cs("Unknown operation type: "+n.type);const l=r.getChanges();return ok(e,o,l),{viewCache:o,changes:l}}function ok(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=vc(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(kA(vc(e)))}}function M_(t,e,n,i,s,r){const o=e.eventCache;if(zo(i,n)!=null)return e;{let a,l;if(Z(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ri(e),u=c instanceof oe?c:oe.EMPTY_NODE,h=O_(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ic(i,Ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ne(n);if(c===".priority"){k(Wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ad(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ge(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Ad(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Mu(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Ks(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function Go(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),g,null)}else{const g=ne(n);if(!l.isCompleteForPath(n)&&Wn(n)>1)return e;const _=ge(n),R=l.getNode().getImmediateChild(g).updateChild(_,i);g===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),g,R,_,D_,null)}const h=S_(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),f=new Lu(s,h,r);return M_(t,h,n,s,f,a)}function Tc(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Lu(s,e,r);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ks(e,c,!0,t.filter.filtersNodes());else{const h=ne(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Ks(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ge(n),g=a.getNode().getImmediateChild(h);let _;if(Z(f))_=i;else{const C=u.getCompleteChild(h);C!=null?h_(f)===".priority"&&C.getChild(d_(f)).isEmpty()?_=C:_=C.updateChild(f,i):_=oe.EMPTY_NODE}if(g.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),h,_,f,u,o);l=Ks(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function kd(t,e){return t.eventCache.isCompleteForChild(e)}function ak(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=xe(n,l);kd(e,ne(u))&&(a=Tc(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=xe(n,l);kd(e,ne(u))||(a=Tc(t,a,u,c,s,r,o))}),a}function Pd(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function bc(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=i:c=new pe(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=Pd(t,g,f);l=Go(t,l,new _e(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),C=Pd(t,_,f);l=Go(t,l,new _e(h),C,s,r,o,a)}}),l}function lk(t,e,n,i,s,r,o){if(zo(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Go(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Z(n)){let c=new pe(null);return l.getNode().forEachChild(Qi,(u,h)=>{c=c.set(new _e(u),h)}),bc(t,e,n,c,s,r,a,o)}else return e}else{let c=new pe(null);return i.foreach((u,h)=>{const f=xe(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),bc(t,e,n,c,s,r,a,o)}}function ck(t,e,n,i,s){const r=e.serverCache,o=S_(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return M_(t,o,n,i,D_,s)}function uk(t,e,n,i,s,r){let o;if(zo(i,n)!=null)return e;{const a=new Lu(i,e,s),l=e.eventCache.getNode();let c;if(Z(n)||ne(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ic(i,Ri(e));else{const h=e.serverCache.getNode();k(h instanceof oe,"serverChildren would be complete if leaf node"),u=O_(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ne(n);let h=Mu(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ge(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,oe.EMPTY_NODE,ge(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ic(i,Ri(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||zo(i,ce())!=null,Ks(e,c,o,t.filter.filtersNodes())}}function hk(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function Od(t,e,n,i){e.type===Kt.MERGE&&e.source.queryId!==null&&(k(Ri(t.viewCache_),"We should always have a full cache before handling merges"),k(vc(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=rk(t.processor_,s,e,n,i);return sk(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,fk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function fk(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return UA(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd;function dk(t){k(!Nd,"__referenceConstructor has already been defined"),Nd=t}function Fu(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return k(r!=null,"SyncTree gave us an op for an invalid query."),Od(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Od(o,e,n,i));return r}}function $u(t,e){let n=null;for(const i of t.views.values())n=n||hk(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd;function pk(t){k(!xd,"__referenceConstructor has already been defined"),xd=t}class Dd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=ek(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gk(t,e,n,i,s){return VA(t.pendingWriteTree_,e,n,i,s),s?Aa(t,new Si(I_(),e,n)):[]}function Vi(t,e,n=!1){const i=WA(t.pendingWriteTree_,e);if(KA(t.pendingWriteTree_,e)){let r=new pe(null);return i.snap!=null?r=r.set(ce(),!0):wt(i.children,o=>{r=r.set(new _e(o),!0)}),Aa(t,new qo(i.path,r,n))}else return[]}function Ra(t,e,n){return Aa(t,new Si(T_(),e,n))}function mk(t,e,n){const i=pe.fromObject(n);return Aa(t,new ur(T_(),e,i))}function _k(t,e,n,i){const s=U_(t,i);if(s!=null){const r=j_(s),o=r.path,a=r.queryId,l=yt(o,e),c=new Si(b_(a),l,n);return B_(t,o,c)}else return[]}function yk(t,e,n,i){const s=U_(t,i);if(s){const r=j_(s),o=r.path,a=r.queryId,l=yt(o,e),c=pe.fromObject(n),u=new ur(b_(a),l,c);return B_(t,o,u)}else return[]}function L_(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=yt(o,e),c=$u(a,l);if(c)return c});return P_(s,e,r,n,!0)}function Aa(t,e){return F_(e,t.syncPointTree_,null,A_(t.pendingWriteTree_,ce()))}function F_(t,e,n,i){if(Z(t.path))return $_(t,e,n,i);{const s=e.get(ce());n==null&&s!=null&&(n=$u(s,ce()));let r=[];const o=ne(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=N_(i,o);r=r.concat(F_(a,l,c,u))}return s&&(r=r.concat(Fu(s,t,i,n))),r}}function $_(t,e,n,i){const s=e.get(ce());n==null&&s!=null&&(n=$u(s,ce()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=N_(i,o),u=t.operationForChild(o);u&&(r=r.concat($_(u,a,l,c)))}),s&&(r=r.concat(Fu(s,t,i,n))),r}function U_(t,e){return t.tagToQueryMap.get(e)}function j_(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function B_(t,e,n){const i=t.syncPointTree_.get(e);k(i,"Missing sync point for query tag that we're tracking");const s=A_(t.pendingWriteTree_,e);return Fu(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Uu(n)}node(){return this.node_}}class ju{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new ju(this.syncTree_,n)}node(){return L_(this.syncTree_,this.path_)}}const vk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Md=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ek(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},Ek=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&k(!1,"Unexpected increment value: "+i);const s=e.node();if(k(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Ik=function(t,e,n,i){return Bu(e,new ju(n,t),i)},Tk=function(t,e,n){return Bu(t,new Uu(e),n)};function Bu(t,e,n){const i=t.getPriority().val(),s=Md(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Md(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Oe(a,We(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Oe(s))),o.forEachChild(qe,(a,l)=>{const c=Bu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Vu(t,e){let n=e instanceof _e?e:new _e(e),i=t,s=ne(n);for(;s!==null;){const r=ss(i.node.children,s)||{children:{},childCount:0};i=new Hu(s,i,r),n=ge(n),s=ne(n)}return i}function ds(t){return t.node.value}function H_(t,e){t.node.value=e,Cc(t)}function V_(t){return t.node.childCount>0}function bk(t){return ds(t)===void 0&&!V_(t)}function ka(t,e){wt(t.node.children,(n,i)=>{e(new Hu(n,t,i))})}function W_(t,e,n,i){n&&!i&&e(t),ka(t,s=>{W_(s,e,!0,i)}),n&&i&&e(t)}function Ck(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Dr(t){return new _e(t.parent===null?t.name:Dr(t.parent)+"/"+t.name)}function Cc(t){t.parent!==null&&Sk(t.parent,t.name,t)}function Sk(t,e,n){const i=bk(n),s=_n(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Cc(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Cc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ak=/[\[\].#$\u0000-\u001F\u007F]/,gl=10*1024*1024,K_=function(t){return typeof t=="string"&&t.length!==0&&!Rk.test(t)},kk=function(t){return typeof t=="string"&&t.length!==0&&!Ak.test(t)},Pk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kk(t)},q_=function(t,e,n){const i=n instanceof _e?new cA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+si(i));if(typeof e=="function")throw new Error(t+"contains a function "+si(i)+" with contents = "+e.toString());if(Km(e))throw new Error(t+"contains "+e.toString()+" "+si(i));if(typeof e=="string"&&e.length>gl/3&&Ia(e)>gl)throw new Error(t+"contains a string greater than "+gl+" utf8 bytes "+si(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(wt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!K_(o)))throw new Error(t+" contains an invalid key ("+o+") "+si(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uA(i,o),q_(t,a,i),hA(i)}),s&&r)throw new Error(t+' contains ".value" child '+si(i)+" in addition to actual children.")}},Ok=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!K_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Pk(n))throw new Error(xb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xk(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!p_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function xi(t,e,n){xk(t,n),Dk(t,i=>Ot(i,e)||Ot(e,i))}function Dk(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Mk(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Mk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();yi&&Ve("event: "+n.toString()),Nr(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="repo_interrupt",Fk=25;class $k{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Nk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ko(),this.transactionQueueTree_=new Hu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Uk(t,e,n){if(t.stats_=ku(t.repoInfo_),t.forceRestClient_||xR())t.server_=new Wo(t.repoInfo_,(i,s,r,o)=>{Ld(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$e(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new fn(t.repoInfo_,e,(i,s,r,o)=>{Ld(t,i,s,r,o)},i=>{Fd(t,i)},i=>{Bk(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=UR(t.repoInfo_,()=>new $A(t.stats_,t.server_)),t.infoData_=new xA,t.infoSyncTree_=new Dd({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ra(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wu(t,"connected",!1),t.serverSyncTree_=new Dd({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);xi(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function jk(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function z_(t){return vk({timestamp:jk(t)})}function Ld(t,e,n,i,s){t.dataUpdateCount++;const r=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=No(n,c=>We(c));o=yk(t.serverSyncTree_,r,l,s)}else{const l=We(n);o=_k(t.serverSyncTree_,r,l,s)}else if(i){const l=No(n,c=>We(c));o=mk(t.serverSyncTree_,r,l)}else{const l=We(n);o=Ra(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=qu(t,r)),xi(t.eventQueue_,a,o)}function Fd(t,e){Wu(t,"connected",e),e===!1&&Vk(t)}function Bk(t,e){wt(e,(n,i)=>{Wu(t,n,i)})}function Wu(t,e,n){const i=new _e("/.info/"+e),s=We(n);t.infoData_.updateSnapshot(i,s);const r=Ra(t.infoSyncTree_,i,s);xi(t.eventQueue_,i,r)}function Hk(t){return t.nextWriteId_++}function Vk(t){G_(t,"onDisconnectEvents");const e=z_(t),n=Ko();yc(t.onDisconnect_,ce(),(s,r)=>{const o=Ik(s,r,t.serverSyncTree_,e);E_(n,s,o)});let i=[];yc(n,ce(),(s,r)=>{i=i.concat(Ra(t.serverSyncTree_,s,r));const o=zk(t,s);qu(t,o)}),t.onDisconnect_=Ko(),xi(t.eventQueue_,ce(),i)}function Wk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Lk)}function G_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function Y_(t,e,n){return L_(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function Ku(t,e=t.transactionQueueTree_){if(e||Pa(t,e),ds(e)){const n=J_(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Kk(t,Dr(e),n)}else V_(e)&&ka(e,n=>{Ku(t,n)})}function Kk(t,e,n){const i=n.map(c=>c.currentWriteId),s=Y_(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=yt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{G_(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Vi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Pa(t,Vu(t.transactionQueueTree_,e)),Ku(t,t.transactionQueueTree_),xi(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Nr(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ht("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}qu(t,e)}},o)}function qu(t,e){const n=X_(t,e),i=Dr(n),s=J_(t,n);return qk(t,s,i),i}function qk(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=yt(n,l.path);let u=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Fk)u=!0,h="maxretry",s=s.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Y_(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){q_("transaction failed: Data returned ",g,l.path);let _=We(g);typeof g=="object"&&g!=null&&_n(g,".priority")||(_=_.updatePriority(f.getPriority()));const R=l.currentWriteId,x=z_(t),U=Tk(_,f,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=U,l.currentWriteId=Hk(t),o.splice(o.indexOf(R),1),s=s.concat(gk(t.serverSyncTree_,l.path,U,l.currentWriteId,l.applyLocally)),s=s.concat(Vi(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",s=s.concat(Vi(t.serverSyncTree_,l.currentWriteId,!0))}xi(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Pa(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Nr(i[a]);Ku(t,t.transactionQueueTree_)}function X_(t,e){let n,i=t.transactionQueueTree_;for(n=ne(e);n!==null&&ds(i)===void 0;)i=Vu(i,n),e=ge(e),n=ne(e);return i}function J_(t,e){const n=[];return Q_(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Q_(t,e,n){const i=ds(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ka(e,s=>{Q_(t,s,n)})}function Pa(t,e){const n=ds(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,H_(e,n.length>0?n:void 0)}ka(e,i=>{Pa(t,i)})}function zk(t,e){const n=Dr(X_(t,e)),i=Vu(t.transactionQueueTree_,e);return Ck(i,s=>{ml(t,s)}),ml(t,i),W_(i,s=>{ml(t,s)}),n}function ml(t,e){const n=ds(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Vi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?H_(e,void 0):n.length=r+1,xi(t.eventQueue_,Dr(e),s);for(let o=0;o<i.length;o++)Nr(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Yk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const $d=function(t,e){const n=Xk(t),i=n.namespace;n.domain==="firebase.com"&&bi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CR();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new LR(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new _e(n.pathString)}},Xk=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=Gk(t.substring(u,h)));const f=Yk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Z(this._path)?null:h_(this._path)}get ref(){return new ps(this._repo,this._path)}get _queryIdentifier(){const e=Td(this._queryParams),n=Ru(e);return n==="{}"?"default":n}get _queryObject(){return Td(this._queryParams)}isEqual(e){if(e=yn(e),!(e instanceof zu))return!1;const n=this._repo===e._repo,i=p_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+lA(this._path)}}class ps extends zu{constructor(e,n){super(e,n,new xu,!1)}get parent(){const e=d_(this._path);return e===null?null:new ps(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}dk(ps);pk(ps);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk="FIREBASE_DATABASE_EMULATOR_HOST",Sc={};let Qk=!1;function Zk(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$d(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Jk]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=$d(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new gc(gc.OWNER):new MR(t.name,t.options,e);Ok("Invalid Firebase Database URL",o),Z(o.path)||bi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tP(a,t,u,new DR(t.name,n));return new nP(h,t)}function eP(t,e){const n=Sc[e];(!n||n[t.key]!==t)&&bi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Wk(t),delete n[t.key]}function tP(t,e,n,i){let s=Sc[e.name];s||(s={},Sc[e.name]=s);let r=s[t.toURLString()];return r&&bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new $k(t,Qk,n,i),s[t.toURLString()]=r,r}class nP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Uk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ps(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){wR(Yn),ct(new tt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Zk(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ue(rd,od,t),Ue(rd,od,"esm2017")}fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iP();var sP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Gu=Gu||{},H=sP||self;function Oa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rP(t){return Object.prototype.hasOwnProperty.call(t,_l)&&t[_l]||(t[_l]=++oP)}var _l="closure_uid_"+(1e9*Math.random()>>>0),oP=0;function aP(t,e,n){return t.call.apply(t.bind,arguments)}function lP(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=aP:ze=lP,ze.apply(null,arguments)}function ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Xn(){this.s=this.s,this.o=this.o}var cP=0;Xn.prototype.s=!1;Xn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),cP!=0)&&rP(this)};Xn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Z_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yu(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ud(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Oa(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var uP=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",()=>{},e),H.removeEventListener("test",()=>{},e)}catch{}return t}();function hr(t){return/^[\s\xa0]*$/.test(t)}function Na(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Na().indexOf(t)!=-1}function Xu(t){return Xu[" "](t),t}Xu[" "]=function(){};function hP(t,e){var n=sO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var fP=Wt("Opera"),fr=Wt("Trident")||Wt("MSIE"),ey=Wt("Edge"),Rc=ey||fr,ty=Wt("Gecko")&&!(Na().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),dP=Na().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function ny(){var t=H.document;return t?t.documentMode:void 0}e:{var jd="",yl=function(){var t=Na();if(ty)return/rv:([^\);]+)(\)|;)/.exec(t);if(ey)return/Edge\/([\d\.]+)/.exec(t);if(fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dP)return/WebKit\/(\S+)/.exec(t);if(fP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yl&&(jd=yl?yl[1]:""),fr){var Bd=ny();if(Bd!=null&&Bd>parseFloat(jd))break e}}H.document&&fr&&ny();function dr(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ty){e:{try{Xu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&dr.$.h.call(this)}}Me(dr,Ge);var pP={2:"touch",3:"pen",4:"mouse"};dr.prototype.h=function(){dr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lr="closure_listenable_"+(1e6*Math.random()|0),gP=0;function mP(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++gP,this.fa=this.ia=!1}function xa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ju(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function _P(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function iy(t){const e={};for(const n in t)e[n]=t[n];return e}const Hd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sy(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Hd.length;r++)n=Hd[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Da(t){this.src=t,this.g={},this.h=0}Da.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=kc(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new mP(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Ac(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Z_(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function kc(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Qu="closure_lm_"+(1e6*Math.random()|0),vl={};function ry(t,e,n,i,s){if(i&&i.once)return ay(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ry(t,e[r],n,i,s);return null}return n=th(n),t&&t[Lr]?t.O(e,n,Mr(i)?!!i.capture:!!i,s):oy(t,e,n,!1,i,s)}function oy(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Mr(s)?!!s.capture:!!s,a=eh(t);if(a||(t[Qu]=a=new Da(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=yP(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)uP||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(cy(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yP(){function t(n){return e.call(t.src,t.listener,n)}const e=vP;return t}function ay(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ay(t,e[r],n,i,s);return null}return n=th(n),t&&t[Lr]?t.P(e,n,Mr(i)?!!i.capture:!!i,s):oy(t,e,n,!0,i,s)}function ly(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)ly(t,e[r],n,i,s);else i=Mr(i)?!!i.capture:!!i,n=th(n),t&&t[Lr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=kc(r,n,i,s),-1<n&&(xa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=eh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=kc(e,n,i,s)),(n=-1<t?e[t]:null)&&Zu(n))}function Zu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Lr])Ac(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(cy(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=eh(e))?(Ac(n,t),n.h==0&&(n.src=null,e[Qu]=null)):xa(t)}}}function cy(t){return t in vl?vl[t]:vl[t]="on"+t}function vP(t,e){if(t.fa)t=!0;else{e=new dr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Zu(t),t=n.call(i,e)}return t}function eh(t){return t=t[Qu],t instanceof Da?t:null}var wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function th(t){return typeof t=="function"?t:(t[wl]||(t[wl]=function(e){return t.handleEvent(e)}),t[wl])}function De(){Xn.call(this),this.i=new Da(this),this.S=this,this.J=null}Me(De,Xn);De.prototype[Lr]=!0;De.prototype.removeEventListener=function(t,e,n,i){ly(this,t,e,n,i)};function je(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var s=e;e=new Ge(i,t),sy(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=oo(o,i,!0,e)&&s}if(o=e.g=t,s=oo(o,i,!0,e)&&s,s=oo(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=oo(o,i,!1,e)&&s}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)xa(n[i]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};De.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function oo(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ac(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var nh=H.JSON.stringify;class wP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function EP(){var t=ih;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class IP{constructor(){this.h=this.g=null}add(e,n){const i=uy.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var uy=new wP(()=>new TP,t=>t.reset());class TP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function CP(t){H.setTimeout(()=>{throw t},0)}let pr,gr=!1,ih=new IP,hy=()=>{const t=H.Promise.resolve(void 0);pr=()=>{t.then(SP)}};var SP=()=>{for(var t;t=EP();){try{t.h.call(t.g)}catch(n){CP(n)}var e=uy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gr=!1};function Ma(t,e){De.call(this),this.h=t||1,this.g=e||H,this.j=ze(this.qb,this),this.l=Date.now()}Me(Ma,De);P=Ma.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),je(this,"tick"),this.ga&&(sh(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Ma.$.N.call(this),sh(this),delete this.g};function rh(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function fy(t){t.g=rh(()=>{t.g=null,t.i&&(t.i=!1,fy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class RP extends Xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fy(this)}N(){super.N(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(t){Xn.call(this),this.h=t,this.g={}}Me(mr,Xn);var Vd=[];function dy(t,e,n,i){Array.isArray(n)||(n&&(Vd[0]=n.toString()),n=Vd);for(var s=0;s<n.length;s++){var r=ry(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function py(t){Ju(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zu(e)},t),t.g={}}mr.prototype.N=function(){mr.$.N.call(this),py(this)};mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function La(){this.g=!0}La.prototype.Ea=function(){this.g=!1};function AP(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function kP(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Wi(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OP(t,n)+(i?" "+i:"")})}function PP(t,e){t.info(function(){return"TIMEOUT: "+e})}La.prototype.info=function(){};function OP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return nh(n)}catch{return e}}var gs={},Wd=null;function oh(){return Wd=Wd||new De}gs.Ta="serverreachability";function gy(t){Ge.call(this,gs.Ta,t)}Me(gy,Ge);function _r(t){const e=oh();je(e,new gy(e))}gs.STAT_EVENT="statevent";function my(t,e){Ge.call(this,gs.STAT_EVENT,t),this.stat=e}Me(my,Ge);function et(t){const e=oh();je(e,new my(e,t))}gs.Ua="timingevent";function _y(t,e){Ge.call(this,gs.Ua,t),this.size=e}Me(_y,Ge);function Fr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var ah={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},NP={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lh(){}lh.prototype.h=null;function Kd(t){return t.h||(t.h=t.i())}function xP(){}var $r={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ch(){Ge.call(this,"d")}Me(ch,Ge);function uh(){Ge.call(this,"c")}Me(uh,Ge);var Pc;function Fa(){}Me(Fa,lh);Fa.prototype.g=function(){return new XMLHttpRequest};Fa.prototype.i=function(){return{}};Pc=new Fa;function Ur(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new mr(this),this.P=DP,t=Rc?125:void 0,this.V=new Ma(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yy}function yy(){this.i=null,this.g="",this.h=!1}var DP=45e3,Oc={},Yo={};P=Ur.prototype;P.setTimeout=function(t){this.P=t};function Nc(t,e,n){t.L=1,t.v=Ua(gn(e)),t.s=n,t.S=!0,vy(t,null)}function vy(t,e){t.G=Date.now(),jr(t),t.A=gn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Ry(n.i,"t",i),t.C=0,n=t.l.J,t.h=new yy,t.g=Gy(t.l,n?e:null,!t.s),0<t.O&&(t.M=new RP(ze(t.Pa,t,t.g),t.O)),dy(t.U,t.g,"readystatechange",t.nb),e=t.I?iy(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),_r(),AP(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&qt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Rc||this.g&&(this.h.h||this.g.ja()||Yd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?_r(3):_r(2)),$a(this);var n=this.g.da();this.ca=n;t:if(wy(this)){var i=Yd(this.g);t="";var s=i.length,r=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ai(this),zs(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,kP(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hr(a)){var c=a;break t}}c=null}if(n=c)Wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xc(this,n);else{this.i=!1,this.o=3,et(12),ai(this),zs(this);break e}}this.S?(Ey(this,u,o),Rc&&this.i&&u==3&&(dy(this.U,this.V,"tick",this.mb),this.V.start())):(Wi(this.j,this.m,o,null),xc(this,o)),u==4&&ai(this),this.i&&!this.J&&(u==4?Wy(this.l,this):(this.i=!1,jr(this)))}else tO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),ai(this),zs(this)}}}catch{}finally{}};function wy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Ey(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=MP(t,n),s==Yo){e==4&&(t.o=4,et(14),i=!1),Wi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Oc){t.o=4,et(15),Wi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Wi(t.j,t.m,s,null),xc(t,s);wy(t)&&s!=Yo&&s!=Oc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),mh(e),e.M=!0,et(11))):(Wi(t.j,t.m,n,"[Invalid Chunked Response]"),ai(t),zs(t))}P.mb=function(){if(this.g){var t=qt(this.g),e=this.g.ja();this.C<e.length&&($a(this),Ey(this,t,e),this.i&&t!=4&&jr(this))}};function MP(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Yo:(n=Number(e.substring(n,i)),isNaN(n)?Oc:(i+=1,i+n>e.length?Yo:(e=e.slice(i,i+n),t.C=i+n,e)))}P.cancel=function(){this.J=!0,ai(this)};function jr(t){t.Y=Date.now()+t.P,Iy(t,t.P)}function Iy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fr(ze(t.lb,t),e)}function $a(t){t.B&&(H.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(PP(this.j,this.A),this.L!=2&&(_r(),et(17)),ai(this),this.o=2,zs(this)):Iy(this,this.Y-t)};function zs(t){t.l.H==0||t.J||Wy(t.l,t)}function ai(t){$a(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,sh(t.V),py(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function xc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dc(n.i,t))){if(!t.K&&Dc(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Qo(n),Va(n);else break e;gh(n),et(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Fr(ze(n.ib,n),6e3));if(1>=Py(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else li(n,11)}else if((t.K||n.g==t)&&Qo(n),!hr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(hh(r,r.h),r.h=null))}if(i.F){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.Da=C,me(i.I,i.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=zy(i,i.J?i.pa:null,i.Y),o.K){Oy(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&($a(a),jr(a)),i.g=o}else Hy(i);0<n.j.length&&Wa(n)}else c[0]!="stop"&&c[0]!="close"||li(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?li(n,7):ph(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}_r(4)}catch{}}function LP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oa(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function FP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ty(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=FP(t),i=LP(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var by=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $P(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function vi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vi){this.h=t.h,Xo(this,t.j),this.s=t.s,this.g=t.g,Jo(this,t.m),this.l=t.l;var e=t.i,n=new yr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qd(this,n),this.o=t.o}else t&&(e=String(t).match(by))?(this.h=!1,Xo(this,e[1]||"",!0),this.s=Ms(e[2]||""),this.g=Ms(e[3]||"",!0),Jo(this,e[4]),this.l=Ms(e[5]||"",!0),qd(this,e[6]||"",!0),this.o=Ms(e[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}vi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,zd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,zd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?BP:jP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,VP)),t.join("")};function gn(t){return new vi(t)}function Xo(t,e,n){t.j=n?Ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qd(t,e,n){e instanceof yr?(t.i=e,WP(t.i,t.h)):(n||(e=Ls(e,HP)),t.i=new yr(e,t.h))}function me(t,e,n){t.i.set(e,n)}function Ua(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,UP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function UP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zd=/[#\/\?@]/g,jP=/[#\?:]/g,BP=/[#\?]/g,HP=/[#\?@]/g,VP=/#/g;function yr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jn(t){t.g||(t.g=new Map,t.h=0,t.i&&$P(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=yr.prototype;P.add=function(t,e){Jn(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cy(t,e){Jn(t),e=ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sy(t,e){return Jn(t),e=ms(t,e),t.g.has(e)}P.forEach=function(t,e){Jn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};P.ta=function(){Jn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};P.Z=function(t){Jn(this);let e=[];if(typeof t=="string")Sy(this,t)&&(e=e.concat(this.g.get(ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Jn(this),this.i=null,t=ms(this,t),Sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ry(t,e,n){Cy(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),Yu(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function WP(t,e){e&&!t.j&&(Jn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Cy(this,i),Ry(this,s,n))},t)),t.j=e}var KP=class{constructor(t,e){this.g=t,this.map=e}};function Ay(t){this.l=t||qP,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ka&&H.g.Ka()&&H.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qP=10;function ky(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Py(t){return t.h?1:t.g?t.g.size:0}function Dc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hh(t,e){t.g?t.g.add(e):t.h=e}function Oy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ay.prototype.cancel=function(){if(this.i=Ny(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ny(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yu(t.i)}var zP=class{stringify(t){return H.JSON.stringify(t,void 0)}parse(t){return H.JSON.parse(t,void 0)}};function GP(){this.g=new zP}function YP(t,e,n){const i=n||"";try{Ty(t,function(s,r){let o=s;Mr(s)&&(o=nh(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function XP(t,e){const n=new La;if(H.Image){const i=new Image;i.onload=ro(ao,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ro(ao,n,i,"TestLoadImage: error",!1,e),i.onabort=ro(ao,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ro(ao,n,i,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ao(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ja(t){this.l=t.ec||null,this.j=t.ob||!1}Me(ja,lh);ja.prototype.g=function(){return new Ba(this.l,this.j)};ja.prototype.i=function(t){return function(){return t}}({});function Ba(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=fh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Ba,De);var fh=0;P=Ba.prototype;P.open=function(t,e){if(this.readyState!=fh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||H).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=fh};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function xy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Br(this):vr(this),this.readyState==3&&xy(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Br(this))};P.Ya=function(t){this.g&&(this.response=t,Br(this))};P.ka=function(){this.g&&Br(this)};function Br(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JP=H.JSON.parse;function Ie(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dy,this.L=this.M=!1}Me(Ie,De);var Dy="",QP=/^https?$/i,ZP=["POST","PUT"];P=Ie.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pc.g(),this.C=this.u?Kd(this.u):Kd(Pc),this.g.onreadystatechange=ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Gd(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=H.FormData&&t instanceof H.FormData,!(0<=Z_(ZP,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fy(this),0<this.B&&((this.L=eO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.ua,this)):this.A=rh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Gd(this,r)}};function eO(t){return fr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Gu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function Gd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,My(t),Ha(t)}function My(t){t.F||(t.F=!0,je(t,"complete"),je(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Ha(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ha(this,!0)),Ie.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Ly(this):this.kb())};P.kb=function(){Ly(this)};function Ly(t){if(t.h&&typeof Gu<"u"&&(!t.C[1]||qt(t)!=4||t.da()!=2)){if(t.v&&qt(t)==4)rh(t.La,0,t);else if(je(t,"readystatechange"),qt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(by)[1]||null;!s&&H.self&&H.self.location&&(s=H.self.location.protocol.slice(0,-1)),i=!QP.test(s?s.toLowerCase():"")}n=i}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var r=2<qt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",My(t)}}finally{Ha(t)}}}}function Ha(t,e){if(t.g){Fy(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=i}catch{}}}function Fy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function qt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JP(e)}};function Yd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function tO(t){const e={};t=(t.g&&2<=qt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(hr(t[i]))continue;var n=bP(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}_P(e,function(i){return i.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $y(t){let e="";return Ju(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function dh(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=$y(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function As(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Uy(t){this.Ga=0,this.j=[],this.l=new La,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=As("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=As("baseRetryDelayMs",5e3,t),this.hb=As("retryDelaySeedMs",1e4,t),this.eb=As("forwardChannelMaxRetries",2,t),this.xa=As("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ay(t&&t.concurrentRequestLimit),this.Ja=new GP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Uy.prototype;P.ra=8;P.H=1;function ph(t){if(jy(t),t.H==3){var e=t.W++,n=gn(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),Hr(t,n),e=new Ur(t,t.l,e),e.L=2,e.v=Ua(gn(n)),n=!1,H.navigator&&H.navigator.sendBeacon)try{n=H.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gy(e.l,null),e.g.ha(e.v)),e.G=Date.now(),jr(e)}qy(t)}function Va(t){t.g&&(mh(t),t.g.cancel(),t.g=null)}function jy(t){Va(t),t.u&&(H.clearTimeout(t.u),t.u=null),Qo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function Wa(t){if(!ky(t.i)&&!t.m){t.m=!0;var e=t.Na;pr||hy(),gr||(pr(),gr=!0),ih.add(e,t),t.C=0}}function nO(t,e){return Py(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Fr(ze(t.Na,t,e),Ky(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ur(this,this.l,t);let r=this.s;if(this.U&&(r?(r=iy(r),sy(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=By(this,s,e),n=gn(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),Hr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String($y(r)))+"&"+e:this.o&&dh(n,this.o,r)),hh(this.i,s),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),s.aa=!0,Nc(s,n,null)):Nc(s,n,e),this.H=2}}else this.H==3&&(t?Xd(this,t):this.j.length==0||ky(this.i)||Xd(this))};function Xd(t,e){var n;e?n=e.m:n=t.W++;const i=gn(t.I);me(i,"SID",t.K),me(i,"RID",n),me(i,"AID",t.V),Hr(t,i),t.o&&t.s&&dh(i,t.o,t.s),n=new Ur(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=By(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),hh(t.i,n),Nc(n,i,e)}function Hr(t,e){t.na&&Ju(t.na,function(n,i){me(e,i,n)}),t.h&&Ty({},function(n,i){me(e,i,n)})}function By(t,e,n){n=Math.min(t.j.length,n);var i=t.h?ze(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{YP(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Hy(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pr||hy(),gr||(pr(),gr=!0),ih.add(e,t),t.A=0}}function gh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Fr(ze(t.Ma,t),Ky(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Vy(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Fr(ze(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),Va(this),Vy(this))};function mh(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Vy(t){t.g=new Ur(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),Hr(t,e),t.o&&t.s&&dh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ua(gn(e)),n.s=null,n.S=!0,vy(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Va(this),gh(this),et(19))};function Qo(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function Wy(t,e){var n=null;if(t.g==e){Qo(t),mh(t),t.g=null;var i=2}else if(Dc(t.i,e))n=e.F,Oy(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=oh(),je(i,new _y(i,n)),Wa(t)}else Hy(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&nO(t,e)||i==2&&gh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:li(t,5);break;case 4:li(t,10);break;case 3:li(t,6);break;default:li(t,2)}}}function Ky(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function li(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=ze(t.pb,t);n||(n=new vi("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Xo(n,"https"),Ua(n)),XP(n.toString(),i)}else et(2);t.H=0,t.h&&t.h.za(e),qy(t),jy(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function qy(t){if(t.H=0,t.ma=[],t.h){const e=Ny(t.i);(e.length!=0||t.j.length!=0)&&(Ud(t.ma,e),Ud(t.ma,t.j),t.i.i.length=0,Yu(t.j),t.j.length=0),t.h.ya()}}function zy(t,e,n){var i=n instanceof vi?gn(n):new vi(n);if(i.g!="")e&&(i.g=e+"."+i.g),Jo(i,i.m);else{var s=H.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new vi(null);i&&Xo(r,i),e&&(r.g=e),s&&Jo(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&me(i,n,e),me(i,"VER",t.ra),Hr(t,i),i}function Gy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ie(new ja({ob:!0})):new Ie(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function Yy(){}P=Yy.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Et(t,e){De.call(this),this.g=new Uy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!hr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _s(this)}Me(Et,De);Et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;et(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zy(t,null,t.Y),Wa(t)};Et.prototype.close=function(){ph(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=nh(t),t=n);e.j.push(new KP(e.fb++,t)),e.H==3&&Wa(e)};Et.prototype.N=function(){this.g.h=null,delete this.j,ph(this.g),delete this.g,Et.$.N.call(this)};function Xy(t){ch.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Xy,ch);function Jy(){uh.call(this),this.status=1}Me(Jy,uh);function _s(t){this.g=t}Me(_s,Yy);_s.prototype.Ba=function(){je(this.g,"a")};_s.prototype.Aa=function(t){je(this.g,new Xy(t))};_s.prototype.za=function(t){je(this.g,new Jy)};_s.prototype.ya=function(){je(this.g,"b")};function iO(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Me(Zt,iO);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function El(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)El(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){El(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){El(this,i),s=0;break}}this.h=s,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function ae(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var sO={};function _h(t){return-128<=t&&128>t?hP(t,function(e){return new ae([e|0],0>e?-1:0)}):new ae([t|0],0>t?-1:0)}function zt(t){if(isNaN(t)||!isFinite(t))return Zi;if(0>t)return Fe(zt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Mc;return new ae(e,0)}function Qy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(Qy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zt(Math.pow(e,8)),i=Zi,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=zt(Math.pow(e,r)),i=i.R(r).add(zt(o))):(i=i.R(n),i=i.add(zt(o)))}return i}var Mc=4294967296,Zi=_h(0),Lc=_h(1),Jd=_h(16777216);P=ae.prototype;P.ea=function(){if(_t(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Mc+i)*e,e*=Mc}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(un(this))return"0";if(_t(this))return"-"+Fe(this).toString(t);for(var e=zt(Math.pow(t,6)),n=this,i="";;){var s=ea(n,e).g;n=Zo(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,un(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function _t(t){return t.h==-1}P.X=function(t){return t=Zo(this,t),_t(t)?-1:un(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new ae(n,~t.h).add(Lc)}P.abs=function(){return _t(this)?Fe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new ae(n,n[n.length-1]&-2147483648?-1:0)};function Zo(t,e){return t.add(Fe(e))}P.R=function(t){if(un(this)||un(t))return Zi;if(_t(this))return _t(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(_t(t))return Fe(this.R(Fe(t)));if(0>this.X(Jd)&&0>t.X(Jd))return zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,lo(n,2*i+2*s),n[2*i+2*s+1]+=r*l,lo(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,lo(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,lo(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new ae(n,0)};function lo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ks(t,e){this.g=t,this.h=e}function ea(t,e){if(un(e))throw Error("division by zero");if(un(t))return new ks(Zi,Zi);if(_t(t))return e=ea(Fe(t),e),new ks(Fe(e.g),Fe(e.h));if(_t(e))return e=ea(t,Fe(e)),new ks(Fe(e.g),e.h);if(30<t.g.length){if(_t(t)||_t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lc,i=e;0>=i.X(t);)n=Qd(n),i=Qd(i);var s=$i(n,1),r=$i(i,1);for(i=$i(i,2),n=$i(n,2);!un(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=$i(i,1),n=$i(n,1)}return e=Zo(t,s.R(e)),new ks(s,e)}for(s=Zi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=zt(n),o=r.R(e);_t(o)||0<o.X(t);)n-=i,r=zt(n),o=r.R(e);un(r)&&(r=Lc),s=s.add(r),t=Zo(t,o)}return new ks(s,t)}P.gb=function(t){return ea(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new ae(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new ae(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new ae(n,this.h^t.h)};function Qd(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new ae(n,t.h)}function $i(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new ae(s,t.h)}Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;ah.NO_ERROR=0;ah.TIMEOUT=8;ah.HTTP_ERROR=6;NP.COMPLETE="complete";xP.EventType=$r;$r.OPEN="a";$r.CLOSE="b";$r.ERROR="c";$r.MESSAGE="d";De.prototype.listen=De.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;ae.prototype.add=ae.prototype.add;ae.prototype.multiply=ae.prototype.R;ae.prototype.modulo=ae.prototype.gb;ae.prototype.compare=ae.prototype.X;ae.prototype.toNumber=ae.prototype.ea;ae.prototype.toString=ae.prototype.toString;ae.prototype.getBits=ae.prototype.D;ae.fromNumber=zt;ae.fromString=Qy;var rO=ae;const Zd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new hs("@firebase/firestore");function ut(t,...e){if(ls.logLevel<=se.DEBUG){const n=e.map(vh);ls.debug(`Firestore (${Vr}): ${t}`,...n)}}function yh(t,...e){if(ls.logLevel<=se.ERROR){const n=e.map(vh);ls.error(`Firestore (${Vr}): ${t}`,...n)}}function oO(t,...e){if(ls.logLevel<=se.WARN){const n=e.map(vh);ls.warn(`Firestore (${Vr}): ${t}`,...n)}}function vh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t="Unexpected state"){const e=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+t;throw yh(e),new Error(e)}function Fc(t,e){t||wr()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ce extends It{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class lO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cO{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new es;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new es,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new es)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fc(typeof i.accessToken=="string"),new Zy(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fc(e===null||typeof e=="string"),new He(e)}}class uO{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hO{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new uO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,ut("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fc(typeof n.token=="string"),this.R=n.token,new fO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=pO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,i){n===void 0?n=0:n>e.length&&wr(),i===void 0?i=e.length-n:i>e.length-n&&wr(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class mt extends ta{construct(e,n,i){return new mt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new Ce(be.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.path=e}static fromPath(e){return new ci(mt.fromString(e))}static fromName(e){return new ci(mt.fromString(e).popFirst(5))}static empty(){return new ci(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ci(new mt(e.slice()))}}function ev(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function yO(t){return new _O(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ep,ee;(ee=ep||(ep={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new rO([4294967295,4294967295],0);function Il(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n,i=1e3,s=1.5,r=6e4){this._i=e,this.timerId=n,this.xo=i,this.Oo=s,this.No=r,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),i=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-i);s>0&&ut("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new wh(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ce(be.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wO(t,e){if(yh("AsyncQueue",`${e}: ${t}`),ev(t))return new Ce(be.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=gO.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{ut("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(ut("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ce(be.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=wO(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t,e,n){if(!n)throw new Ce(be.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TO(t,e,n,i){if(e===!0&&i===!0)throw new Ce(be.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function np(t){if(ci.isDocumentKey(t))throw new Ce(be.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bO(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":wr()}function CO(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ce(be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bO(t);throw new Ce(be.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ce(be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ce(be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tv((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Ce(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Ce(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Ce(be.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Eh{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ip({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ce(be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ce(be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ip(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new aO;switch(i.type){case"firstParty":return new hO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ce(be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=tp.get(n);i&&(ut("ComponentProvider","Removing Datastore"),tp.delete(n),i.terminate())}(this),Promise.resolve()}}function SO(t,e,n,i={}){var s;const r=(t=CO(t,Eh))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&oO("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=He.MOCK_USER;else{a=Eb(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Ce(be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new He(c)}t._authCredentials=new lO(new Zy(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ih(this.firestore,e,this._query)}}class Ka{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ka(this.firestore,e,this._key)}}class ts extends Ih{constructor(e,n,i){super(e,n,yO(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ka(this.firestore,null,new ci(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function RO(t,e,...n){if(t=yn(t),IO("collection","path",e),t instanceof Eh){const i=mt.fromString(e,...n);return np(i),new ts(t,null,i)}{if(!(t instanceof Ka||t instanceof ts))throw new Ce(be.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(mt.fromString(e,...n));return np(i),new ts(t.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new vO(this,"async_queue_retry"),this.ou=()=>{const n=Il();n&&ut("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Il();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Il();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new es;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ev(e))throw e;ut("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(i=>{this.nu=i,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw yh("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.ru=!1,i))));return this.Za=n,n}enqueueAfterDelay(e,n,i){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=wh.createAndSchedule(this,e,n,i,r=>this.cu(r));return this.tu.push(s),s}_u(){this.nu&&wr()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class kO extends Eh{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new AO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OO(this),this._firestoreClient.terminate()}}function PO(t,e){const n=typeof t=="object"?t:yu(),i=typeof t=="string"?t:e||"(default)",s=Cr(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=wb("firestore");r&&SO(s,...r)}return s}function OO(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new mO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,tv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new EO(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){Vr=s})(Yn),ct(new tt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new kO(new cO(i.getProvider("auth-internal")),new dO(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Ce(be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Ue(Zd,"4.2.0",e),Ue(Zd,"4.2.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="firebasestorage.googleapis.com",NO="storageBucket",xO=2*60*1e3,DO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends It{constructor(e,n,i=0){super(Tl(e),`Firebase Storage: ${n} (${Tl(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var en;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(en||(en={}));function Tl(t){return"storage/"+t}function MO(){const t="An unknown error occurred, please check the error payload for server response.";return new tn(en.UNKNOWN,t)}function LO(){return new tn(en.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FO(){return new tn(en.CANCELED,"User canceled the upload/download.")}function $O(t){return new tn(en.INVALID_URL,"Invalid URL '"+t+"'.")}function UO(t){return new tn(en.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function sp(t){return new tn(en.INVALID_ARGUMENT,t)}function iv(){return new tn(en.APP_DELETED,"The Firebase app was deleted.")}function jO(t){return new tn(en.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Nt.makeFromUrl(e,n)}catch{return new Nt(e,"")}if(i.path==="")return i;throw UO(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(q){q.path_=decodeURIComponent(q.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),_={bucket:1,path:3},C=n===nv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",x=new RegExp(`^https?://${C}/${s}/${R}`,"i"),D=[{regex:a,indices:l,postModify:r},{regex:g,indices:_,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let q=0;q<D.length;q++){const F=D[q],de=F.regex.exec(e);if(de){const Re=de[F.indices.bucket];let Be=de[F.indices.path];Be||(Be=""),i=new Nt(Re,Be),F.postModify(i);break}}if(i==null)throw $O(e);return i}}class BO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...R){c||(c=!0,e.apply(null,R))}function h(R){s=setTimeout(()=>{s=null,t(g,l())},R)}function f(){r&&clearTimeout(r)}function g(R,...x){if(c){f();return}if(R){f(),u.call(null,R,...x);return}if(l()||o){f(),u.call(null,R,...x);return}i<64&&(i*=2);let D;a===1?(a=2,D=0):D=(i+Math.random())*1e3,h(D)}let _=!1;function C(R){_||(_=!0,f(),!c&&(s!==null?(R||(a=2),clearTimeout(s),h(0)):R||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function VO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){return t!==void 0}function rp(t,e,n,i){if(i<e)throw sp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw sp(`Invalid value for '${t}'. Expected ${n} or less.`)}function KO(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ia;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ia||(ia={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new co(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ia.NO_ERROR,l=r.getStatus();if(!a||qO(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ia.ABORT;i(!1,new co(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new co(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WO(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=MO();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?iv():FO();o(l)}else{const l=LO();o(l)}};this.canceled_?n(!1,new co(!1,null,!0)):this.backoffId_=HO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class co{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function GO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QO(t,e,n,i,s,r,o=!0){const a=KO(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return XO(c,e),GO(c,n),YO(c,r),JO(c,i),new zO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this._service=e,n instanceof Nt?this._location=n:this._location=Nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sa(e,n)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return eN(this._location.path)}get storage(){return this._service}get parent(){const e=ZO(this._location.path);if(e===null)return null;const n=new Nt(this._location.bucket,e);return new sa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jO(e)}}function op(t,e){const n=e==null?void 0:e[NO];return n==null?null:Nt.makeFromBucketSpec(n,t)}class tN{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=nv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xO,this._maxUploadRetryTime=DO,this._requests=new Set,s!=null?this._bucket=Nt.makeFromBucketSpec(s,this._host):this._bucket=op(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=op(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sa(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new BO(iv());{const o=QO(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const ap="@firebase/storage",lp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="storage";function iN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new tN(n,i,s,e,Yn)}function sN(){ct(new tt(nN,iN,"PUBLIC").setMultipleInstances(!0)),Ue(ap,lp,""),Ue(ap,lp,"esm2017")}sN();function rN(t){return(e,n)=>{const i=mR(e,n).run(()=>Hp(t));_R.set(e,i),vR(i,e)}}function oN(t,{firebaseApp:e,modules:n=[]}){t.provide(Bm,e);for(const i of n)i(e,t)}const Qn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},aN={},lN={class:"navbar navbar-expand-sm bg-body-tertiary fixed-top"},cN={class:"container-fluid"},uN=we("a",{class:"navbar-brand",href:"#"},"Freehua",-1),hN=we("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[we("span",{class:"navbar-toggler-icon"})],-1),fN={class:"collapse navbar-collapse",id:"navbarNav"},dN=ya('<ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Início</a></li><li class="nav-item"><a class="nav-link" href="#">Aplicativo</a></li><li class="nav-item"><a class="nav-link" href="#">Sobre</a></li></ul>',1),pN={class:"container d-flex justify-content-end"},gN=we("button",{type:"button",class:"btn btn-primary ms-auto"},"Entrar",-1);function mN(t,e){const n=Tr("router-link");return qn(),zn("nav",lN,[we("div",cN,[Ee(n,{to:"/"},{default:Bn(()=>[uN]),_:1}),hN,we("div",fN,[dN,we("div",pN,[Ee(n,{to:"/login"},{default:Bn(()=>[gN]),_:1})])])])])}const _N=Qn(aN,[["render",mN],["__file","/home/gabriel/freehua-web/src/components/Navbar.vue"]]),yN={__name:"App",setup(t){return(e,n)=>{const i=Tr("router-view");return qn(),zn(St,null,[Ee(_N),Ee(i)],64)}}},vN=Qn(yN,[["__file","/home/gabriel/freehua-web/src/App.vue"]]),wN=(t,e)=>e.some(n=>t instanceof n);let cp,up;function EN(){return cp||(cp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IN(){return up||(up=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sv=new WeakMap,$c=new WeakMap,rv=new WeakMap,bl=new WeakMap,Th=new WeakMap;function TN(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Fn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sv.set(n,t)}).catch(()=>{}),Th.set(e,t),e}function bN(t){if($c.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$c.set(t,e)}let Uc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CN(t){Uc=t(Uc)}function SN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Cl(this),e,...n);return rv.set(i,e.sort?e.sort():[e]),Fn(i)}:IN().includes(t)?function(...e){return t.apply(Cl(this),e),Fn(sv.get(this))}:function(...e){return Fn(t.apply(Cl(this),e))}}function RN(t){return typeof t=="function"?SN(t):(t instanceof IDBTransaction&&bN(t),wN(t,EN())?new Proxy(t,Uc):t)}function Fn(t){if(t instanceof IDBRequest)return TN(t);if(bl.has(t))return bl.get(t);const e=RN(t);return e!==t&&(bl.set(t,e),Th.set(e,t)),e}const Cl=t=>Th.get(t);function AN(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Fn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Fn(o.result),l.oldVersion,l.newVersion,Fn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const kN=["get","getKey","getAll","getAllKeys","count"],PN=["put","add","delete","clear"],Sl=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sl.get(e))return Sl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=PN.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||kN.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Sl.set(e,r),r}CN(t=>({...t,get:(e,n,i)=>hp(e,n)||t.get(e,n,i),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));const ov="@firebase/installations",bh="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=1e4,lv=`w:${bh}`,cv="FIS_v2",ON="https://firebaseinstallations.googleapis.com/v1",NN=60*60*1e3,xN="installations",DN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ai=new Gn(xN,DN,MN);function uv(t){return t instanceof It&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv({projectId:t}){return`${ON}/projects/${t}/installations`}function fv(t){return{token:t.token,requestStatus:2,expiresIn:FN(t.expiresIn),creationTime:Date.now()}}async function dv(t,e){const i=(await e.json()).error;return Ai.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function pv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function LN(t,{refreshToken:e}){const n=pv(t);return n.append("Authorization",$N(e)),n}async function gv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function FN(t){return Number(t.replace("s","000"))}function $N(t){return`${cv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=hv(t),s=pv(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:cv,appId:t.appId,sdkVersion:lv},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await gv(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:fv(c.authToken)}}else throw await dv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=/^[cdef][\w-]{21}$/,jc="";function HN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=VN(t);return BN.test(n)?n:jc}catch{return jc}}function VN(t){return jN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Map;function yv(t,e){const n=qa(t);vv(n,e),WN(n,e)}function vv(t,e){const n=_v.get(t);if(n)for(const i of n)i(e)}function WN(t,e){const n=KN();n&&n.postMessage({key:t,fid:e}),qN()}let ui=null;function KN(){return!ui&&"BroadcastChannel"in self&&(ui=new BroadcastChannel("[Firebase] FID Change"),ui.onmessage=t=>{vv(t.data.key,t.data.fid)}),ui}function qN(){_v.size===0&&ui&&(ui.close(),ui=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="firebase-installations-database",GN=1,ki="firebase-installations-store";let Rl=null;function Ch(){return Rl||(Rl=AN(zN,GN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}})),Rl}async function ra(t,e){const n=qa(t),s=(await Ch()).transaction(ki,"readwrite"),r=s.objectStore(ki),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&yv(t,e.fid),e}async function wv(t){const e=qa(t),i=(await Ch()).transaction(ki,"readwrite");await i.objectStore(ki).delete(e),await i.done}async function za(t,e){const n=qa(t),s=(await Ch()).transaction(ki,"readwrite"),r=s.objectStore(ki),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&yv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(t){let e;const n=await za(t.appConfig,i=>{const s=YN(i),r=XN(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===jc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function YN(t){const e=t||{fid:HN(),registrationStatus:0};return Ev(e)}function XN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ai.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=JN(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QN(t)}:{installationEntry:e}}async function JN(t,e){try{const n=await UN(t,e);return ra(t.appConfig,n)}catch(n){throw uv(n)&&n.customData.serverCode===409?await wv(t.appConfig):await ra(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QN(t){let e=await fp(t.appConfig);for(;e.registrationStatus===1;)await mv(100),e=await fp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Sh(t);return i||n}return e}function fp(t){return za(t,e=>{if(!e)throw Ai.create("installation-not-found");return Ev(e)})}function Ev(t){return ZN(t)?{fid:t.fid,registrationStatus:0}:t}function ZN(t){return t.registrationStatus===1&&t.registrationTime+av<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1({appConfig:t,heartbeatServiceProvider:e},n){const i=t1(t,n),s=LN(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:lv,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await gv(()=>fetch(i,a));if(l.ok){const c=await l.json();return fv(c)}else throw await dv("Generate Auth Token",l)}function t1(t,{fid:e}){return`${hv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t,e=!1){let n;const i=await za(t.appConfig,r=>{if(!Iv(r))throw Ai.create("not-registered");const o=r.authToken;if(!e&&s1(o))return r;if(o.requestStatus===1)return n=n1(t,e),r;{if(!navigator.onLine)throw Ai.create("app-offline");const a=o1(r);return n=i1(t,a),a}});return n?await n:i.authToken}async function n1(t,e){let n=await dp(t.appConfig);for(;n.authToken.requestStatus===1;)await mv(100),n=await dp(t.appConfig);const i=n.authToken;return i.requestStatus===0?Rh(t,e):i}function dp(t){return za(t,e=>{if(!Iv(e))throw Ai.create("not-registered");const n=e.authToken;return a1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function i1(t,e){try{const n=await e1(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ra(t.appConfig,i),n}catch(n){if(uv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wv(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ra(t.appConfig,i)}throw n}}function Iv(t){return t!==void 0&&t.registrationStatus===2}function s1(t){return t.requestStatus===2&&!r1(t)}function r1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+NN}function o1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function a1(t){return t.requestStatus===1&&t.requestTime+av<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t){const e=t,{installationEntry:n,registrationPromise:i}=await Sh(e);return i?i.catch(console.error):Rh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e=!1){const n=t;return await u1(n),(await Rh(n,e)).token}async function u1(t){const{registrationPromise:e}=await Sh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){if(!t||!t.options)throw Al("App Configuration");if(!t.name)throw Al("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Al(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Al(t){return Ai.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="installations",f1="installations-internal",d1=t=>{const e=t.getProvider("app").getImmediate(),n=h1(e),i=Cr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},p1=t=>{const e=t.getProvider("app").getImmediate(),n=Cr(e,Tv).getImmediate();return{getId:()=>l1(n),getToken:s=>c1(n,s)}};function g1(){ct(new tt(Tv,d1,"PUBLIC")),ct(new tt(f1,p1,"PRIVATE"))}g1();Ue(ov,bh);Ue(ov,bh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="analytics",m1="firebase_id",_1="origin",y1=60*1e3,v1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ah="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new hs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Gn("analytics","Analytics",w1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){if(!t.startsWith(Ah)){const e=vt.create("invalid-gtag-resource",{gtagURL:t});return lt.warn(e.message),""}return t}function bv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function I1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function T1(t,e){const n=I1("firebase-js-sdk-policy",{createScriptURL:E1}),i=document.createElement("script"),s=`${Ah}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function b1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function C1(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await bv(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){lt.error(a)}t("config",s,r)}async function S1(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await bv(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){lt.error(r)}}function R1(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await S1(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await C1(t,e,n,i,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){lt.error(a)}}return s}function A1(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=R1(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function k1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ah)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=30,O1=1e3;class N1{constructor(e={},n=O1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Cv=new N1;function x1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function D1(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:x1(i)},r=v1.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function M1(t,e=Cv,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw vt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw vt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $1;return setTimeout(async()=>{a.abort()},n!==void 0?n:y1),Sv({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Sv(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Cv){var r;const{appId:o,measurementId:a}=t;try{await L1(i,e)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await D1(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!F1(c)){if(s.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Pf(n,s.intervalMillis,P1):Pf(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),lt.debug(`Calling attemptFetch again in ${u} millis`),Sv(t,h,i,s)}}function L1(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function F1(t){if(!(t instanceof It)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class $1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function U1(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(){if(mu())try{await tm()}catch(t){return lt.warn(vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function B1(t,e,n,i,s,r,o){var a;const l=M1(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>lt.error(g)),e.push(l);const c=j1().then(g=>{if(g)return i.getId()}),[u,h]=await Promise.all([l,c]);k1(r)||T1(r,u.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[_1]="firebase",f.update=!0,h!=null&&(f[m1]=h),s("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.app=e}_delete(){return delete Gs[this.app.options.appId],Promise.resolve()}}let Gs={},gp=[];const mp={};let kl="dataLayer",V1="gtag",_p,Rv,yp=!1;function W1(){const t=[];if(Qg()&&t.push("This is a browser extension environment."),Tb()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=vt.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function K1(t,e,n){W1();const i=t.options.appId;if(!i)throw vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(Gs[i]!=null)throw vt.create("already-exists",{id:i});if(!yp){b1(kl);const{wrappedGtag:r,gtagCore:o}=A1(Gs,gp,mp,kl,V1);Rv=r,_p=o,yp=!0}return Gs[i]=B1(t,gp,mp,e,_p,kl,n),new H1(t)}function q1(t,e,n,i){t=yn(t),U1(Rv,Gs[t.app.options.appId],e,n,i).catch(s=>lt.error(s))}const vp="@firebase/analytics",wp="0.10.0";function z1(){ct(new tt(pp,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return K1(i,s,n)},"PUBLIC")),ct(new tt("analytics-internal",t,"PRIVATE")),Ue(vp,wp),Ue(vp,wp,"esm2017");function t(e){try{const n=e.getProvider(pp).getImmediate();return{logEvent:(i,s,r)=>q1(n,i,s,r)}}catch(n){throw vt.create("interop-component-reg-failed",{reason:n})}}}z1();const G1={apiKey:"AIzaSyDZe5Afwd4IF8O0sjGx8UBlJprasm20-Qk",authDomain:"freehua-db.firebaseapp.com",projectId:"freehua-db",storageBucket:"freehua-db.appspot.com",messagingSenderId:"912869104324",appId:"1:912869104324:web:867e8d751670c004fb0791",measurementId:"G-S0D7E23XXE"},Av=rm(G1),Y1=PO(Av);RO(Y1,"todos");const X1={};function J1(t,e){return qn(),zn("h1",null,"casa")}const Q1=Qn(X1,[["render",J1],["__file","/home/gabriel/freehua-web/src/pages/Home.vue"]]),Z1={},ex={class:"container"},tx=we("div",{class:"form-group my-4"},[we("input",{type:"email",class:"form-control form-control-lg",id:"loginEmail","aria-describedby":"emailHelp",placeholder:"Email"})],-1),nx=we("div",{class:"form-group my-4"},[we("input",{type:"password",class:"form-control form-control-lg",id:"loginPassword",placeholder:"Senha"})],-1),ix={class:"container-fluid"},sx=we("button",{type:"submit",class:"btn btn-primary btn-lg"},"Logar",-1),rx=we("button",{type:"submit",class:"btn btn-primary btn-lg mx-2"},"Registrar",-1);function ox(t,e){const n=Tr("router-link");return qn(),zn("div",ex,[we("form",null,[tx,nx,we("div",ix,[Ee(n,{to:"/dashboard"},{default:Bn(()=>[sx]),_:1}),Ee(n,{to:"/register"},{default:Bn(()=>[rx]),_:1})])])])}const ax=Qn(Z1,[["render",ox],["__file","/home/gabriel/freehua-web/src/pages/Login.vue"]]),lx={},cx={class:"container"},ux=ya('<form><div class="form-group my-4"><input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></div><div class="form-group my-4"><input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Senha"></div><div class="form-group my-4"><input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Confirme senha"></div><div class="container-fluid"><button type="submit" class="btn btn-primary btn-lg">Simbora!</button></div></form>',1),hx=[ux];function fx(t,e){return qn(),zn("div",cx,hx)}const dx=Qn(lx,[["render",fx],["__file","/home/gabriel/freehua-web/src/pages/Register.vue"]]),px={class:"list-group"},gx=ya('<a href="#" class="list-group-item list-group-item-action"> Cras justo odio </a><a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a><a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a><a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a><a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>',5),mx=[gx],_x={__name:"List",setup(t){return(e,n)=>(qn(),zn("div",px,mx))}},yx=Qn(_x,[["__file","/home/gabriel/freehua-web/src/components/List.vue"]]),vx={class:"d-flex flex-column"},wx={class:"mt-4"},Ex=we("button",{type:"button",class:"btn btn-primary"},"Novo livro",-1),Ix=we("button",{type:"button",class:"btn btn-primary ms-4"},"Novo capitulo",-1),Tx={__name:"Dashboard",setup(t){return(e,n)=>{const i=Tr("router-link");return qn(),zn("div",vx,[Ee(yx),we("div",wx,[Ee(i,{to:"/upload"},{default:Bn(()=>[Ex]),_:1}),Ee(i,{to:"/update"},{default:Bn(()=>[Ix]),_:1})])])}}},bx=Qn(Tx,[["__file","/home/gabriel/freehua-web/src/pages/Dashboard.vue"]]),Cx={},Sx=ya('<div class="form-group"><label for="bookName" class="mb-1">Nome da obra</label><input type="text" class="form-control" id="bookName" placeholder="Solo Leveling"></div><div class="form-group my-4"><label for="bookType" class="mb-1">Tipo do livro</label><select class="form-control" id="bookType"><option>Manhuá (China)</option><option>Manhwa (Coréia)</option></select></div><div class="form-group my-4"><label for="formFile" class="form-label">Capítulo inicial <span class="text-secondary">(em pdf)</span></label><input class="form-control" type="file" id="formFile"></div><div class="form-group my-4"><label for="bookName" class="mb-1">Título do capítulo inicial da obra</label><input type="text" class="form-control" id="bookName" placeholder="A Invasão de Carlindo"></div>',4),Rx=we("button",{type:"submit",class:"btn btn-primary btn-lg"},"Criar",-1),Ax=we("button",{class:"btn btn-secondary ms-4"},"Voltar",-1);function kx(t,e){const n=Tr("router-link");return qn(),zn("form",null,[Sx,we("div",null,[Rx,Ee(n,{to:"/dashboard"},{default:Bn(()=>[Ax]),_:1})])])}const Px=Qn(Cx,[["render",kx],["__file","/home/gabriel/freehua-web/src/pages/Upload.vue"]]),Ox=ub({history:cT(),routes:[{path:"/login",name:"Login",component:ax},{path:"/",name:"Home",component:Q1},{path:"/register",name:"Register",component:dx},{path:"/dashboard",name:"Dashboard",component:bx},{path:"/upload",name:"Upload",component:Px}]});DI(vN).use(Ox).use(oN,{firebaseApp:Av,modules:[rN()]}).mount("#app");
