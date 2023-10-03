(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function qn(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ue=Object.freeze({}),Yi=Object.freeze([]),ot=()=>{},Op=()=>!1,Wv=/^on[^a-z]/,Rr=t=>Wv.test(t),Ro=t=>t.startsWith("onUpdate:"),we=Object.assign,Yc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kv=Object.prototype.hasOwnProperty,X=(t,e)=>Kv.call(t,e),B=Array.isArray,Xi=t=>da(t)==="[object Map]",qv=t=>da(t)==="[object Set]",V=t=>typeof t=="function",be=t=>typeof t=="string",Xc=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",Jc=t=>fe(t)&&V(t.then)&&V(t.catch),zv=Object.prototype.toString,da=t=>zv.call(t),Qc=t=>da(t).slice(8,-1),Gv=t=>da(t)==="[object Object]",Zc=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_o=qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yv=qn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xv=/-(\w)/g,Zt=fa(t=>t.replace(Xv,(e,n)=>n?n.toUpperCase():"")),Jv=/\B([A-Z])/g,jn=fa(t=>t.replace(Jv,"-$1").toLowerCase()),vi=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ti=fa(t=>t?`on${vi(t)}`:""),tr=(t,e)=>!Object.is(t,e),Hi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let jh;const ko=()=>jh||(jh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=be(i)?tw(i):eu(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(be(t))return t;if(fe(t))return t}}const Qv=/;(?![^(]*\))/g,Zv=/:([^]+)/,ew=/\/\*[^]*?\*\//g;function tw(t){const e={};return t.replace(ew,"").split(Qv).forEach(n=>{if(n){const i=n.split(Zv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function tu(t){let e="";if(be(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const i=tu(t[n]);i&&(e+=i+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nw="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",iw="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",sw=qn(nw),rw=qn(iw),ow="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aw=qn(ow);function Np(t){return!!t||t===""}function Ul(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let bt;class xp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}else Ul("cannot run an inactive effect scope.")}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lw(t){return new xp(t)}function cw(t,e=bt){e&&e.active&&e.effects.push(t)}function uw(){return bt}const nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Dp=t=>(t.w&Bn)>0,Mp=t=>(t.n&Bn)>0,hw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},dw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Dp(s)&&!Mp(s)?s.delete(t):e[n++]=s,s.w&=~Bn,s.n&=~Bn}e.length=n}},$l=new WeakMap;let Ns=0,Bn=1;const jl=30;let Ze;const ui=Symbol("iterate"),Bl=Symbol("Map key iterate");class iu{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cw(this,i)}run(){if(!this.active)return this.fn();let e=Ze,n=Mn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,Mn=!0,Bn=1<<++Ns,Ns<=jl?hw(this):Bh(this),this.fn()}finally{Ns<=jl&&dw(this),Bn=1<<--Ns,Ze=this.parent,Mn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(Bh(this),this.onStop&&this.onStop(),this.active=!1)}}function Bh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mn=!0;const Lp=[];function Pi(){Lp.push(Mn),Mn=!1}function Oi(){const t=Lp.pop();Mn=t===void 0?!0:t}function Ye(t,e,n){if(Mn&&Ze){let i=$l.get(t);i||$l.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=nu()),Fp(s,{effect:Ze,target:t,type:e,key:n})}}function Fp(t,e){let n=!1;Ns<=jl?Mp(t)||(t.n|=Bn,n=!Dp(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t),Ze.onTrack&&Ze.onTrack(we({effect:Ze},e)))}function en(t,e,n,i,s,r){const o=$l.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(i);o.forEach((u,h)=>{(h==="length"||h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Zc(n)&&a.push(o.get("length")):(a.push(o.get(ui)),Xi(t)&&a.push(o.get(Bl)));break;case"delete":B(t)||(a.push(o.get(ui)),Xi(t)&&a.push(o.get(Bl)));break;case"set":Xi(t)&&a.push(o.get(ui));break}const l={target:t,type:e,key:n,newValue:i,oldValue:s,oldTarget:r};if(a.length===1)a[0]&&Hl(a[0],l);else{const c=[];for(const u of a)u&&c.push(...u);Hl(nu(c),l)}}function Hl(t,e){const n=B(t)?t:[...t];for(const i of n)i.computed&&Hh(i,e);for(const i of n)i.computed||Hh(i,e)}function Hh(t,e){(t!==Ze||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(we({effect:t},e)),t.scheduler?t.scheduler():t.run())}const fw=qn("__proto__,__v_isRef,__isVue"),Up=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xc)),pw=pa(),gw=pa(!1,!0),mw=pa(!0),_w=pa(!0,!0),Vh=yw();function yw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=z(this);for(let r=0,o=this.length;r<o;r++)Ye(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pi();const i=z(this)[e].apply(this,n);return Oi(),i}}),t}function vw(t){const e=z(this);return Ye(e,"has",t),e.hasOwnProperty(t)}function pa(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?qp:Kp:e?Wp:Vp).get(i))return i;const o=B(i);if(!t){if(o&&X(Vh,s))return Reflect.get(Vh,s,r);if(s==="hasOwnProperty")return vw}const a=Reflect.get(i,s,r);return(Xc(s)?Up.has(s):fw(s))||(t||Ye(i,"get",s),e)?a:Re(a)?o&&Zc(s)?a:a.value:fe(a)?t?Gp(a):_a(a):a}}const ww=$p(),Ew=$p(!0);function $p(t=!1){return function(n,i,s,r){let o=n[i];if(Hn(o)&&Re(o)&&!Re(s))return!1;if(!t&&(!Po(s)&&!Hn(s)&&(o=z(o),s=z(s)),!B(n)&&Re(o)&&!Re(s)))return o.value=s,!0;const a=B(n)&&Zc(i)?Number(i)<n.length:X(n,i),l=Reflect.set(n,i,s,r);return n===z(r)&&(a?tr(s,o)&&en(n,"set",i,s,o):en(n,"add",i,s)),l}}function Iw(t,e){const n=X(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&en(t,"delete",e,void 0,i),s}function Tw(t,e){const n=Reflect.has(t,e);return(!Xc(e)||!Up.has(e))&&Ye(t,"has",e),n}function bw(t){return Ye(t,"iterate",B(t)?"length":ui),Reflect.ownKeys(t)}const jp={get:pw,set:ww,deleteProperty:Iw,has:Tw,ownKeys:bw},Bp={get:mw,set(t,e){return Ul(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Ul(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},Cw=we({},jp,{get:gw,set:Ew}),Sw=we({},Bp,{get:_w}),su=t=>t,ga=t=>Reflect.getPrototypeOf(t);function Qr(t,e,n=!1,i=!1){t=t.__v_raw;const s=z(t),r=z(e);n||(e!==r&&Ye(s,"get",e),Ye(s,"get",r));const{has:o}=ga(s),a=i?su:n?ru:nr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Zr(t,e=!1){const n=this.__v_raw,i=z(n),s=z(t);return e||(t!==s&&Ye(i,"has",t),Ye(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function eo(t,e=!1){return t=t.__v_raw,!e&&Ye(z(t),"iterate",ui),Reflect.get(t,"size",t)}function Wh(t){t=z(t);const e=z(this);return ga(e).has.call(e,t)||(e.add(t),en(e,"add",t,t)),this}function Kh(t,e){e=z(e);const n=z(this),{has:i,get:s}=ga(n);let r=i.call(n,t);r?Hp(n,i,t):(t=z(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?tr(e,o)&&en(n,"set",t,e,o):en(n,"add",t,e),this}function qh(t){const e=z(this),{has:n,get:i}=ga(e);let s=n.call(e,t);s?Hp(e,n,t):(t=z(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&en(e,"delete",t,void 0,r),o}function zh(){const t=z(this),e=t.size!==0,n=Xi(t)?new Map(t):new Set(t),i=t.clear();return e&&en(t,"clear",void 0,void 0,n),i}function to(t,e){return function(i,s){const r=this,o=r.__v_raw,a=z(o),l=e?su:t?ru:nr;return!t&&Ye(a,"iterate",ui),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function no(t,e,n){return function(...i){const s=this.__v_raw,r=z(s),o=Xi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?su:e?ru:nr;return!e&&Ye(r,"iterate",l?Bl:ui),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${vi(t)} operation ${n}failed: target is readonly.`,z(this))}return t==="delete"?!1:this}}function Rw(){const t={get(r){return Qr(this,r)},get size(){return eo(this)},has:Zr,add:Wh,set:Kh,delete:qh,clear:zh,forEach:to(!1,!1)},e={get(r){return Qr(this,r,!1,!0)},get size(){return eo(this)},has:Zr,add:Wh,set:Kh,delete:qh,clear:zh,forEach:to(!1,!0)},n={get(r){return Qr(this,r,!0)},get size(){return eo(this,!0)},has(r){return Zr.call(this,r,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:to(!0,!1)},i={get(r){return Qr(this,r,!0,!0)},get size(){return eo(this,!0)},has(r){return Zr.call(this,r,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=no(r,!1,!1),n[r]=no(r,!0,!1),e[r]=no(r,!1,!0),i[r]=no(r,!0,!0)}),[t,n,e,i]}const[Aw,kw,Pw,Ow]=Rw();function ma(t,e){const n=e?t?Ow:Pw:t?kw:Aw;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(X(n,s)&&s in i?n:i,s,r)}const Nw={get:ma(!1,!1)},xw={get:ma(!1,!0)},Dw={get:ma(!0,!1)},Mw={get:ma(!0,!0)};function Hp(t,e,n){const i=z(n);if(i!==n&&e.call(t,i)){const s=Qc(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Vp=new WeakMap,Wp=new WeakMap,Kp=new WeakMap,qp=new WeakMap;function Lw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fw(t){return t.__v_skip||!Object.isExtensible(t)?0:Lw(Qc(t))}function _a(t){return Hn(t)?t:ya(t,!1,jp,Nw,Vp)}function zp(t){return ya(t,!1,Cw,xw,Wp)}function Gp(t){return ya(t,!0,Bp,Dw,Kp)}function xs(t){return ya(t,!0,Sw,Mw,qp)}function ya(t,e,n,i,s){if(!fe(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=Fw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function hi(t){return Hn(t)?hi(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function Po(t){return!!(t&&t.__v_isShallow)}function Vl(t){return hi(t)||Hn(t)}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Yp(t){return Ao(t,"__v_skip",!0),t}const nr=t=>fe(t)?_a(t):t,ru=t=>fe(t)?Gp(t):t;function Xp(t){Mn&&Ze&&(t=z(t),Fp(t.dep||(t.dep=nu()),{target:t,type:"get",key:"value"}))}function Jp(t,e){t=z(t);const n=t.dep;n&&Hl(n,{target:t,type:"set",key:"value",newValue:e})}function Re(t){return!!(t&&t.__v_isRef===!0)}function Qp(t){return Zp(t,!1)}function Uw(t){return Zp(t,!0)}function Zp(t,e){return Re(t)?t:new $w(t,e)}class $w{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z(e),this._value=n?e:nr(e)}get value(){return Xp(this),this._value}set value(e){const n=this.__v_isShallow||Po(e)||Hn(e);e=n?e:z(e),tr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:nr(e),Jp(this,e))}}function Ji(t){return Re(t)?t.value:t}const jw={get:(t,e,n)=>Ji(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Re(s)&&!Re(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function eg(t){return hi(t)?t:new Proxy(t,jw)}class Bw{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new iu(e,()=>{this._dirty||(this._dirty=!0,Jp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=z(this);return Xp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Hw(t,e,n=!1){let i,s;const r=V(t);r?(i=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=t.get,s=t.set);const o=new Bw(i,s,r||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const di=[];function yo(t){di.push(t)}function vo(){di.pop()}function b(t,...e){Pi();const n=di.length?di[di.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=Vw();if(i)fn(i,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${Ca(n,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${t}`,...e];s.length&&r.push(`
`,...Ww(s)),console.warn(...r)}Oi()}function Vw(){let t=di[di.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function Ww(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...Kw(n))}),e}function Kw({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,s=` at <${Ca(t.component,t.type,i)}`,r=">"+n;return t.props?[s,...qw(t.props),r]:[s+r]}function qw(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...tg(i,t[i]))}),n.length>3&&e.push(" ..."),e}function tg(t,e,n){return be(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Re(e)?(e=tg(t,z(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):V(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=z(e),n?e:[`${t}=`,e])}const ou={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function fn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){va(r,e,n)}return s}function Nt(t,e,n,i){if(V(t)){const r=fn(t,e,n,i);return r&&Jc(r)&&r.catch(o=>{va(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Nt(t[r],e,n,i));return s}function va(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=ou[n];for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){fn(l,null,10,[t,o,a]);return}}zw(t,n,s,i)}function zw(t,e,n,i=!0){{const s=ou[e];if(n&&yo(n),b(`Unhandled error${s?` during execution of ${s}`:""}`),n&&vo(),i)throw t;console.error(t)}}let ir=!1,Wl=!1;const Ve=[];let Ht=0;const Qi=[];let Bt=null,Rn=0;const ng=Promise.resolve();let au=null;const Gw=100;function ig(t){const e=au||ng;return t?e.then(this?t.bind(this):t):e}function Yw(t){let e=Ht+1,n=Ve.length;for(;e<n;){const i=e+n>>>1;sr(Ve[i])<t?e=i+1:n=i}return e}function wa(t){(!Ve.length||!Ve.includes(t,ir&&t.allowRecurse?Ht+1:Ht))&&(t.id==null?Ve.push(t):Ve.splice(Yw(t.id),0,t),sg())}function sg(){!ir&&!Wl&&(Wl=!0,au=ng.then(ag))}function Xw(t){const e=Ve.indexOf(t);e>Ht&&Ve.splice(e,1)}function rg(t){B(t)?Qi.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?Rn+1:Rn))&&Qi.push(t),sg()}function Gh(t,e=ir?Ht+1:0){for(t=t||new Map;e<Ve.length;e++){const n=Ve[e];if(n&&n.pre){if(lu(t,n))continue;Ve.splice(e,1),e--,n()}}}function og(t){if(Qi.length){const e=[...new Set(Qi)];if(Qi.length=0,Bt){Bt.push(...e);return}for(Bt=e,t=t||new Map,Bt.sort((n,i)=>sr(n)-sr(i)),Rn=0;Rn<Bt.length;Rn++)lu(t,Bt[Rn])||Bt[Rn]();Bt=null,Rn=0}}const sr=t=>t.id==null?1/0:t.id,Jw=(t,e)=>{const n=sr(t)-sr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ag(t){Wl=!1,ir=!0,t=t||new Map,Ve.sort(Jw);const e=n=>lu(t,n);try{for(Ht=0;Ht<Ve.length;Ht++){const n=Ve[Ht];if(n&&n.active!==!1){if(e(n))continue;fn(n,null,14)}}}finally{Ht=0,Ve.length=0,og(t),ir=!1,au=null,(Ve.length||Qi.length)&&ag(t)}}function lu(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>Gw){const i=e.ownerInstance,s=i&&vu(i.type);return b(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let fi=!1;const Vi=new Set;ko().__VUE_HMR_RUNTIME__={createRecord:Za(lg),rerender:Za(eE),reload:Za(tE)};const wi=new Map;function Qw(t){const e=t.type.__hmrId;let n=wi.get(e);n||(lg(e,t.type),n=wi.get(e)),n.instances.add(t)}function Zw(t){wi.get(t.type.__hmrId).instances.delete(t)}function lg(t,e){return wi.has(t)?!1:(wi.set(t,{initialDef:Bs(e),instances:new Set}),!0)}function Bs(t){return Dg(t)?t.__vccOpts:t}function eE(t,e){const n=wi.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(i=>{e&&(i.render=e,Bs(i.type).render=e),i.renderCache=[],fi=!0,i.update(),fi=!1}))}function tE(t,e){const n=wi.get(t);if(!n)return;e=Bs(e),Yh(n.initialDef,e);const i=[...n.instances];for(const s of i){const r=Bs(s.type);Vi.has(r)||(r!==n.initialDef&&Yh(r,e),Vi.add(r)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Vi.add(r),s.ceReload(e.styles),Vi.delete(r)):s.parent?wa(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}rg(()=>{for(const s of i)Vi.delete(Bs(s.type))})}function Yh(t,e){we(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function Za(t){return(e,n)=>{try{return t(e,n)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Vt,Ds=[],Kl=!1;function Ar(t,...e){Vt?Vt.emit(t,...e):Kl||Ds.push({event:t,args:e})}function cg(t,e){var n,i;Vt=t,Vt?(Vt.enabled=!0,Ds.forEach(({event:s,args:r})=>Vt.emit(s,...r)),Ds=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{cg(r,e)}),setTimeout(()=>{Vt||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Kl=!0,Ds=[])},3e3)):(Kl=!0,Ds=[])}function nE(t,e){Ar("app:init",t,e,{Fragment:Ct,Text:Pr,Comment:xt,Static:Ws})}function iE(t){Ar("app:unmount",t)}const sE=cu("component:added"),ug=cu("component:updated"),rE=cu("component:removed"),oE=t=>{Vt&&typeof Vt.cleanupBuffer=="function"&&!Vt.cleanupBuffer(t)&&rE(t)};function cu(t){return e=>{Ar(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const aE=hg("perf:start"),lE=hg("perf:end");function hg(t){return(e,n,i)=>{Ar(t,e.appContext.app,e.uid,e,n,i)}}function cE(t,e,n){Ar("component:emit",t.appContext.app,t,e,n)}function uE(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ue;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(ti(e)in h))&&b(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${ti(e)}" prop.`);else{const d=u[e];V(d)&&(d(...n)||b(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||ue;d&&(s=n.map(g=>be(g)?g.trim():g)),h&&(s=n.map(Fl))}cE(t,e,s);{const u=e.toLowerCase();u!==e&&i[ti(u)]&&b(`Event "${u}" is emitted in component ${Ca(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${jn(e)}" instead of "${e}".`)}let a,l=i[a=ti(e)]||i[a=ti(Zt(e))];!l&&r&&(l=i[a=ti(jn(e))]),l&&Nt(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(c,t,6,s)}}function dg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const u=dg(c,e,!0);u&&(a=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(fe(t)&&i.set(t,null),null):(B(r)?r.forEach(l=>o[l]=null):we(o,r),fe(t)&&i.set(t,o),o)}function Ea(t,e){return!t||!Rr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,jn(e))||X(t,e))}let et=null,fg=null;function Oo(t){const e=et;return et=t,fg=t&&t.type.__scopeId||null,e}function pn(t,e=et,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ld(-1);const r=Oo(e);let o;try{o=t(...s)}finally{Oo(r),i._d&&ld(1)}return ug(e),o};return i._n=!0,i._c=!0,i._d=!0,i}let ql=!1;function No(){ql=!0}function el(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:_,inheritAttrs:C}=t;let R,x;const $=Oo(t);ql=!1;try{if(n.shapeFlag&4){const F=s||i;R=St(u.call(F,F,h,r,g,d,_)),x=l}else{const F=e;l===r&&No(),R=St(F.length>1?F(r,{get attrs(){return No(),l},slots:a,emit:c}):F(r,null)),x=e.props?l:dE(l)}}catch(F){Ks.length=0,va(F,t,1),R=Ee(xt)}let D=R,q;if(R.patchFlag>0&&R.patchFlag&2048&&([D,q]=hE(R)),x&&C!==!1){const F=Object.keys(x),{shapeFlag:pe}=D;if(F.length){if(pe&7)o&&F.some(Ro)&&(x=fE(x,o)),D=Vn(D,x);else if(!ql&&D.type!==xt){const Ce=Object.keys(l),$e=[],Ae=[];for(let it=0,It=Ce.length;it<It;it++){const st=Ce[it];Rr(st)?Ro(st)||$e.push(st[2].toLowerCase()+st.slice(3)):Ae.push(st)}Ae.length&&b(`Extraneous non-props attributes (${Ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),$e.length&&b(`Extraneous non-emits event listeners (${$e.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(Xh(D)||b("Runtime directive used on component with non-element root node. The directives will not function as intended."),D=Vn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(Xh(D)||b("Component inside <Transition> renders non-element root node that cannot be animated."),D.transition=n.transition),q?q(D):R=D,Oo($),R}const hE=t=>{const e=t.children,n=t.dynamicChildren,i=pg(e);if(!i)return[t,void 0];const s=e.indexOf(i),r=n?n.indexOf(i):-1,o=a=>{e[s]=a,n&&(r>-1?n[r]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[St(i),o]};function pg(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(or(i)){if(i.type!==xt||i.children==="v-if"){if(e)return;e=i}}else return}return e}const dE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rr(n))&&((e||(e={}))[n]=t[n]);return e},fE=(t,e)=>{const n={};for(const i in t)(!Ro(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n},Xh=t=>t.shapeFlag&7||t.type===xt;function pE(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if((s||a)&&fi||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Jh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Ea(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Jh(i,o,c):!0:!!o;return!1}function Jh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Ea(n,r))return!0}return!1}function gE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mE=t=>t.__isSuspense;function _E(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):rg(t)}function yE(t,e){return uu(t,null,e)}const io={};function Hs(t,e,n){return V(e)||b("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),uu(t,e,n)}function uu(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ue){var a;e||(n!==void 0&&b('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&b('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=F=>{b("Invalid watch source: ",F,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=uw()===((a=Se)==null?void 0:a.scope)?Se:null;let u,h=!1,d=!1;if(Re(t)?(u=()=>t.value,h=Po(t)):hi(t)?(u=()=>t,i=!0):B(t)?(d=!0,h=t.some(F=>hi(F)||Po(F)),u=()=>t.map(F=>{if(Re(F))return F.value;if(hi(F))return ri(F);if(V(F))return fn(F,c,2);l(F)})):V(t)?e?u=()=>fn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return g&&g(),Nt(t,c,3,[_])}:(u=ot,l(t)),e&&i){const F=u;u=()=>ri(F())}let g,_=F=>{g=D.onStop=()=>{fn(F,c,4)}},C;if(ar)if(_=ot,e?n&&Nt(e,c,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const F=SI();C=F.__watcherHandles||(F.__watcherHandles=[])}else return ot;let R=d?new Array(t.length).fill(io):io;const x=()=>{if(D.active)if(e){const F=D.run();(i||h||(d?F.some((pe,Ce)=>tr(pe,R[Ce])):tr(F,R)))&&(g&&g(),Nt(e,c,3,[F,R===io?void 0:d&&R[0]===io?[]:R,_]),R=F)}else D.run()};x.allowRecurse=!!e;let $;s==="sync"?$=x:s==="post"?$=()=>rt(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),$=()=>wa(x));const D=new iu(u,$);D.onTrack=r,D.onTrigger=o,e?n?x():R=D.run():s==="post"?rt(D.run.bind(D),c&&c.suspense):D.run();const q=()=>{D.stop(),c&&c.scope&&Yc(c.scope.effects,D)};return C&&C.push(q),q}function vE(t,e,n){const i=this.proxy,s=be(t)?t.includes(".")?gg(i,t):()=>i[t]:t.bind(i,i);let r;V(e)?r=e:(r=e.handler,n=e);const o=Se;rs(this);const a=uu(s,r.bind(i),n);return o?rs(o):gi(),a}function gg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function ri(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))ri(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)ri(t[n],e);else if(qv(t)||Xi(t))t.forEach(n=>{ri(n,e)});else if(Gv(t))for(const n in t)ri(t[n],e);return t}function mg(t){Yv(t)&&b("Do not use built-in directive ids as custom directive id: "+t)}function Vs(t,e){const n=et;if(n===null)return b("withDirectives can only be used inside render functions."),t;const i=ba(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ue]=e[r];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&ri(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Zn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Pi(),Nt(l,n,8,[t.el,a,t,e]),Oi())}}function _g(t,e){return V(t)?(()=>we({name:t.name},e,{setup:t}))():t}const wo=t=>!!t.type.__asyncLoader,hu=t=>t.type.__isKeepAlive;function wE(t,e){yg(t,"a",e)}function EE(t,e){yg(t,"da",e)}function yg(t,e,n=Se){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ia(e,i,n),n){let s=n.parent;for(;s&&s.parent;)hu(s.parent.vnode)&&IE(i,e,n,s),s=s.parent}}function IE(t,e,n,i){const s=Ia(e,t,i,!0);vg(()=>{Yc(i[e],s)},n)}function Ia(t,e,n=Se,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pi(),rs(n);const a=Nt(e,n,t,o);return gi(),Oi(),a});return i?s.unshift(r):s.push(r),r}else{const s=ti(ou[t].replace(/ hook$/,""));b(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const yn=t=>(e,n=Se)=>(!ar||t==="sp")&&Ia(t,(...i)=>e(...i),n),TE=yn("bm"),bE=yn("m"),CE=yn("bu"),SE=yn("u"),RE=yn("bum"),vg=yn("um"),AE=yn("sp"),kE=yn("rtg"),PE=yn("rtc");function OE(t,e=Se){Ia("ec",t,e)}const zl="components";function kr(t,e){return xE(zl,t,!0,e)||t}const NE=Symbol.for("v-ndc");function xE(t,e,n=!0,i=!1){const s=et||Se;if(s){const r=s.type;if(t===zl){const a=vu(r,!1);if(a&&(a===e||a===Zt(e)||a===vi(Zt(e))))return r}const o=Qh(s[t]||r[t],e)||Qh(s.appContext[t],e);if(!o&&i)return r;if(n&&!o){const a=t===zl?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";b(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else b(`resolve${vi(t.slice(0,-1))} can only be used in render() or setup().`)}function Qh(t,e){return t&&(t[e]||t[Zt(e)]||t[vi(Zt(e))])}const Gl=t=>t?Og(t)?ba(t)||t.proxy:Gl(t.parent):null,pi=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>xs(t.props),$attrs:t=>xs(t.attrs),$slots:t=>xs(t.slots),$refs:t=>xs(t.refs),$parent:t=>Gl(t.parent),$root:t=>Gl(t.root),$emit:t=>t.emit,$options:t=>fu(t),$forceUpdate:t=>t.f||(t.f=()=>wa(t.update)),$nextTick:t=>t.n||(t.n=ig.bind(t.proxy)),$watch:t=>vE.bind(t)}),du=t=>t==="_"||t==="$",tl=(t,e)=>t!==ue&&!t.__isScriptSetup&&X(t,e),wg={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(tl(i,e))return o[e]=1,i[e];if(s!==ue&&X(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==ue&&X(n,e))return o[e]=4,n[e];Yl&&(o[e]=0)}}const u=pi[e];let h,d;if(u)return e==="$attrs"?(Ye(t,"get",e),No()):e==="$slots"&&Ye(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e];et&&(!be(e)||e.indexOf("__v")!==0)&&(s!==ue&&du(e[0])&&X(s,e)?b(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===et&&b(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return tl(s,e)?(s[e]=n,!0):s.__isScriptSetup&&X(s,e)?(b(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):i!==ue&&X(i,e)?(i[e]=n,!0):X(t.props,e)?(b(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(b(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(r,e,{enumerable:!0,configurable:!0,value:n}):r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==ue&&X(t,o)||tl(e,o)||(a=r[0])&&X(a,o)||X(i,o)||X(pi,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};wg.ownKeys=t=>(b("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function DE(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(pi).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>pi[n](t),set:ot})}),e}function ME(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(i=>{Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>t.props[i],set:ot})})}function LE(t){const{ctx:e,setupState:n}=t;Object.keys(z(n)).forEach(i=>{if(!n.__isScriptSetup){if(du(i[0])){b(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>n[i],set:ot})}})}function Zh(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function FE(){const t=Object.create(null);return(e,n)=>{t[n]?b(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let Yl=!0;function UE(t){const e=fu(t),n=t.proxy,i=t.ctx;Yl=!1,e.beforeCreate&&ed(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:_,activated:C,deactivated:R,beforeDestroy:x,beforeUnmount:$,destroyed:D,unmounted:q,render:F,renderTracked:pe,renderTriggered:Ce,errorCaptured:$e,serverPrefetch:Ae,expose:it,inheritAttrs:It,components:st,directives:Ft,filters:Xr}=e,ft=FE();{const[G]=t.propsOptions;if(G)for(const Y in G)ft("Props",Y)}if(c&&$E(c,i,ft),o)for(const G in o){const Y=o[G];V(Y)?(Object.defineProperty(i,G,{value:Y.bind(n),configurable:!0,enumerable:!0,writable:!0}),ft("Methods",G)):b(`Method "${G}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`)}if(s){V(s)||b("The data option must be a function. Plain object usage is no longer supported.");const G=s.call(n,n);if(Jc(G)&&b("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!fe(G))b("data() should return an object.");else{t.data=_a(G);for(const Y in G)ft("Data",Y),du(Y[0])||Object.defineProperty(i,Y,{configurable:!0,enumerable:!0,get:()=>G[Y],set:ot})}}if(Yl=!0,r)for(const G in r){const Y=r[G],pt=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):ot;pt===ot&&b(`Computed property "${G}" has no getter.`);const Qn=!V(Y)&&V(Y.set)?Y.set.bind(n):()=>{b(`Write operation failed: computed property "${G}" is readonly.`)},En=Rt({get:pt,set:Qn});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>En.value,set:Ut=>En.value=Ut}),ft("Computed",G)}if(a)for(const G in a)Eg(a[G],i,n,G);if(l){const G=V(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{Eo(Y,G[Y])})}u&&ed(u,t,"c");function De(G,Y){B(Y)?Y.forEach(pt=>G(pt.bind(n))):Y&&G(Y.bind(n))}if(De(TE,h),De(bE,d),De(CE,g),De(SE,_),De(wE,C),De(EE,R),De(OE,$e),De(PE,pe),De(kE,Ce),De(RE,$),De(vg,q),De(AE,Ae),B(it))if(it.length){const G=t.exposed||(t.exposed={});it.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:pt=>n[Y]=pt})})}else t.exposed||(t.exposed={});F&&t.render===ot&&(t.render=F),It!=null&&(t.inheritAttrs=It),st&&(t.components=st),Ft&&(t.directives=Ft)}function $E(t,e,n=ot){B(t)&&(t=Xl(t));for(const i in t){const s=t[i];let r;fe(s)?"default"in s?r=Gt(s.from||i,s.default,!0):r=Gt(s.from||i):r=Gt(s),Re(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r,n("Inject",i)}}function ed(t,e,n){Nt(B(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Eg(t,e,n,i){const s=i.includes(".")?gg(n,i):()=>n[i];if(be(t)){const r=e[t];V(r)?Hs(s,r):b(`Invalid watch handler specified by key "${t}"`,r)}else if(V(t))Hs(s,t.bind(n));else if(fe(t))if(B(t))t.forEach(r=>Eg(r,e,n,i));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)?Hs(s,r,t):b(`Invalid watch handler specified by key "${t.handler}"`,r)}else b(`Invalid watch option: "${i}"`,t)}function fu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>xo(l,c,o,!0)),xo(l,e,o)),fe(e)&&r.set(e,l),l}function xo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&xo(t,r,n,!0),s&&s.forEach(o=>xo(t,o,n,!0));for(const o in e)if(i&&o==="expose")b('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=jE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jE={data:td,props:nd,emits:nd,methods:Ms,computed:Ms,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Ms,directives:Ms,watch:HE,provide:td,inject:BE};function td(t,e){return e?t?function(){return we(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function BE(t,e){return Ms(Xl(t),Xl(e))}function Xl(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?we(Object.create(null),t,e):e}function nd(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:we(Object.create(null),Zh(t),Zh(e??{})):e}function HE(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const i in e)n[i]=Qe(t[i],e[i]);return n}function Ig(){return{app:null,config:{isNativeTag:Op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VE=0;function WE(t,e){return function(i,s=null){V(i)||(i=we({},i)),s!=null&&!fe(s)&&(b("root props passed to app.mount() must be an object."),s=null);const r=Ig();Object.defineProperty(r.config,"unwrapInjectedRef",{get(){return!0},set(){b("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const l=r.app={_uid:VE++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:hd,get config(){return r.config},set config(c){b("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return o.has(c)?b("Plugin has already been applied to target app."):c&&V(c.install)?(o.add(c),c.install(l,...u)):V(c)?(o.add(c),c(l,...u)):b('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return r.mixins.includes(c)?b("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):r.mixins.push(c),l},component(c,u){return tc(c,r.config),u?(r.components[c]&&b(`Component "${c}" has already been registered in target app.`),r.components[c]=u,l):r.components[c]},directive(c,u){return mg(c),u?(r.directives[c]&&b(`Directive "${c}" has already been registered in target app.`),r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(a)b("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&b("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Ee(i,s);return d.appContext=r,r.reload=()=>{t(Vn(d),c,h)},u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,nE(l,hd),ba(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,iE(l),delete l._container.__vue_app__):b("Cannot unmount an app that is not mounted.")},provide(c,u){return c in r.provides&&b(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),r.provides[c]=u,l},runWithContext(c){Do=l;try{return c()}finally{Do=null}}};return l}}let Do=null;function Eo(t,e){if(!Se)b("provide() can only be used inside setup().");else{let n=Se.provides;const i=Se.parent&&Se.parent.provides;i===n&&(n=Se.provides=Object.create(i)),n[t]=e}}function Gt(t,e,n=!1){const i=Se||et;if(i||Do){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Do._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(i&&i.proxy):e;b(`injection "${String(t)}" not found.`)}else b("inject() can only be used inside setup() or functional components.")}function KE(t,e,n,i=!1){const s={},r={};Ao(r,Ta,1),t.propsDefaults=Object.create(null),Tg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);Cg(e||{},s,t),n?t.props=i?s:zp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function qE(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function zE(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=z(s),[l]=t.propsOptions;let c=!1;if(!qE(t)&&(i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ea(t.emitsOptions,d))continue;const g=e[d];if(l)if(X(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const _=Zt(d);s[_]=Jl(l,a,_,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Tg(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=jn(h))===h||!X(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Jl(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!X(e,h))&&(delete r[h],c=!0)}c&&en(t,"set","$attrs"),Cg(e||{},s,t)}function Tg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(_o(l))continue;const c=e[l];let u;s&&X(s,u=Zt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ea(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=z(n),c=a||ue;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Jl(s,l,h,c[h],t,!X(c,h))}}return o}function Jl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(rs(s),i=c[n]=l.call(null,e),gi())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===jn(n))&&(i=!0))}return i}function bg(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!V(t)){const u=h=>{l=!0;const[d,g]=bg(h,e,!0);we(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return fe(t)&&i.set(t,Yi),Yi;if(B(r))for(let u=0;u<r.length;u++){be(r[u])||b("props must be strings when using array syntax.",r[u]);const h=Zt(r[u]);id(h)&&(o[h]=ue)}else if(r){fe(r)||b("invalid props options",r);for(const u in r){const h=Zt(u);if(id(h)){const d=r[u],g=o[h]=B(d)||V(d)?{type:d}:we({},d);if(g){const _=rd(Boolean,g.type),C=rd(String,g.type);g[0]=_>-1,g[1]=C<0||_<C,(_>-1||X(g,"default"))&&a.push(h)}}}}const c=[o,a];return fe(t)&&i.set(t,c),c}function id(t){return t[0]!=="$"?!0:(b(`Invalid prop name: "${t}" is a reserved property.`),!1)}function Ql(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function sd(t,e){return Ql(t)===Ql(e)}function rd(t,e){return B(e)?e.findIndex(n=>sd(n,t)):V(e)&&sd(e,t)?0:-1}function Cg(t,e,n){const i=z(e),s=n.propsOptions[0];for(const r in s){let o=s[r];o!=null&&GE(r,i[r],o,!X(t,r)&&!X(t,jn(r)))}}function GE(t,e,n,i){const{type:s,required:r,validator:o,skipCheck:a}=n;if(r&&i){b('Missing required prop: "'+t+'"');return}if(!(e==null&&!r)){if(s!=null&&s!==!0&&!a){let l=!1;const c=B(s)?s:[s],u=[];for(let h=0;h<c.length&&!l;h++){const{valid:d,expectedType:g}=XE(e,c[h]);u.push(g||""),l=d}if(!l){b(JE(t,e,u));return}}o&&!o(e)&&b('Invalid prop: custom validator check failed for prop "'+t+'".')}}const YE=qn("String,Number,Boolean,Function,Symbol,BigInt");function XE(t,e){let n;const i=Ql(e);if(YE(i)){const s=typeof t;n=s===i.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else i==="Object"?n=fe(t):i==="Array"?n=B(t):i==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:i}}function JE(t,e,n){let i=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(vi).join(" | ")}`;const s=n[0],r=Qc(e),o=od(e,s),a=od(e,r);return n.length===1&&ad(s)&&!QE(s,r)&&(i+=` with value ${o}`),i+=`, got ${r} `,ad(r)&&(i+=`with value ${a}.`),i}function od(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function ad(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function QE(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Sg=t=>t[0]==="_"||t==="$stable",pu=t=>B(t)?t.map(St):[St(t)],ZE=(t,e,n)=>{if(e._n)return e;const i=pn((...s)=>(Se&&b(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),pu(e(...s))),n);return i._c=!1,i},Rg=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Sg(s))continue;const r=t[s];if(V(r))e[s]=ZE(s,r,i);else if(r!=null){b(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=pu(r);e[s]=()=>o}}},Ag=(t,e)=>{hu(t.vnode)||b("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=pu(e);t.slots.default=()=>n},eI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z(e),Ao(e,"_",n)):Rg(e,t.slots={})}else t.slots={},e&&Ag(t,e);Ao(t.slots,Ta,1)},tI=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ue;if(i.shapeFlag&32){const a=e._;a?fi?(we(s,e),en(t,"set","$slots")):n&&a===1?r=!1:(we(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Rg(e,s)),o=e}else e&&(Ag(t,e),o={default:1});if(r)for(const a in s)!Sg(a)&&!(a in o)&&delete s[a]};function Zl(t,e,n,i,s=!1){if(B(t)){t.forEach((d,g)=>Zl(d,e&&(B(e)?e[g]:e),n,i,s));return}if(wo(i)&&!s)return;const r=i.shapeFlag&4?ba(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t;if(!a){b("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,u=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(be(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Re(c)&&(c.value=null)),V(l))fn(l,a,12,[o,u]);else{const d=be(l),g=Re(l);if(d||g){const _=()=>{if(t.f){const C=d?X(h,l)?h[l]:u[l]:l.value;s?B(C)&&Yc(C,r):B(C)?C.includes(r)||C.push(r):d?(u[l]=[r],X(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,X(h,l)&&(h[l]=o)):g?(l.value=o,t.k&&(u[t.k]=o)):b("Invalid template ref type:",l,`(${typeof l})`)};o?(_.id=-1,rt(_,n)):_()}else b("Invalid template ref type:",l,`(${typeof l})`)}}let Is,Pn;function on(t,e){t.appContext.config.performance&&Mo()&&Pn.mark(`vue-${e}-${t.uid}`),aE(t,e,Mo()?Pn.now():Date.now())}function an(t,e){if(t.appContext.config.performance&&Mo()){const n=`vue-${e}-${t.uid}`,i=n+":end";Pn.mark(i),Pn.measure(`<${Ca(t,t.type)}> ${e}`,n,i),Pn.clearMarks(n),Pn.clearMarks(i)}lE(t,e,Mo()?Pn.now():Date.now())}function Mo(){return Is!==void 0||(typeof window<"u"&&window.performance?(Is=!0,Pn=window.performance):Is=!1),Is}function nI(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const rt=_E;function iI(t){return sI(t)}function sI(t,e){nI();const n=ko();n.__VUE__=!0,cg(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=ot,insertStaticContent:_}=t,C=(f,p,m,w=null,v=null,T=null,A=!1,I=null,S=fi?!1:!!p.dynamicChildren)=>{if(f===p)return;f&&!Ts(f,p)&&(w=O(f),gt(f,v,T,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:U,shapeFlag:L}=p;switch(E){case Pr:R(f,p,m,w);break;case xt:x(f,p,m,w);break;case Ws:f==null?$(p,m,w,A):D(f,p,m,A);break;case Ct:Ft(f,p,m,w,v,T,A,I,S);break;default:L&1?pe(f,p,m,w,v,T,A,I,S):L&6?Xr(f,p,m,w,v,T,A,I,S):L&64||L&128?E.process(f,p,m,w,v,T,A,I,S,M):b("Invalid VNode type:",E,`(${typeof E})`)}U!=null&&v&&Zl(U,f&&f.ref,T,p||f,!p)},R=(f,p,m,w)=>{if(f==null)i(p.el=a(p.children),m,w);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},x=(f,p,m,w)=>{f==null?i(p.el=l(p.children||""),m,w):p.el=f.el},$=(f,p,m,w)=>{[f.el,f.anchor]=_(f.children,p,m,w,f.el,f.anchor)},D=(f,p,m,w)=>{if(p.children!==f.children){const v=d(f.anchor);F(f),[p.el,p.anchor]=_(p.children,m,v,w)}else p.el=f.el,p.anchor=f.anchor},q=({el:f,anchor:p},m,w)=>{let v;for(;f&&f!==p;)v=d(f),i(f,m,w),f=v;i(p,m,w)},F=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},pe=(f,p,m,w,v,T,A,I,S)=>{A=A||p.type==="svg",f==null?Ce(p,m,w,v,T,A,I,S):it(f,p,v,T,A,I,S)},Ce=(f,p,m,w,v,T,A,I)=>{let S,E;const{type:U,props:L,shapeFlag:j,transition:K,dirs:J}=f;if(S=f.el=o(f.type,T,L&&L.is,L),j&8?u(S,f.children):j&16&&Ae(f.children,S,null,w,v,T&&U!=="foreignObject",A,I),J&&Zn(f,null,w,"created"),$e(S,f,f.scopeId,A,w),L){for(const ce in L)ce!=="value"&&!_o(ce)&&r(S,ce,null,L[ce],T,f.children,w,v,y);"value"in L&&r(S,"value",null,L.value),(E=L.onVnodeBeforeMount)&&jt(E,w,f)}Object.defineProperty(S,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(S,"__vueParentComponent",{value:w,enumerable:!1}),J&&Zn(f,null,w,"beforeMount");const de=(!v||v&&!v.pendingBranch)&&K&&!K.persisted;de&&K.beforeEnter(S),i(S,p,m),((E=L&&L.onVnodeMounted)||de||J)&&rt(()=>{E&&jt(E,w,f),de&&K.enter(S),J&&Zn(f,null,w,"mounted")},v)},$e=(f,p,m,w,v)=>{if(m&&g(f,m),w)for(let T=0;T<w.length;T++)g(f,w[T]);if(v){let T=v.subTree;if(T.patchFlag>0&&T.patchFlag&2048&&(T=pg(T.children)||T),p===T){const A=v.vnode;$e(f,A,A.scopeId,A.slotScopeIds,v.parent)}}},Ae=(f,p,m,w,v,T,A,I,S=0)=>{for(let E=S;E<f.length;E++){const U=f[E]=I?An(f[E]):St(f[E]);C(null,U,p,m,w,v,T,A,I)}},it=(f,p,m,w,v,T,A)=>{const I=p.el=f.el;let{patchFlag:S,dynamicChildren:E,dirs:U}=p;S|=f.patchFlag&16;const L=f.props||ue,j=p.props||ue;let K;m&&ei(m,!1),(K=j.onVnodeBeforeUpdate)&&jt(K,m,p,f),U&&Zn(p,f,m,"beforeUpdate"),m&&ei(m,!0),fi&&(S=0,A=!1,E=null);const J=v&&p.type!=="foreignObject";if(E?(It(f.dynamicChildren,E,I,m,w,J,T),ec(f,p)):A||pt(f,p,I,null,m,w,J,T,!1),S>0){if(S&16)st(I,p,L,j,m,w,v);else if(S&2&&L.class!==j.class&&r(I,"class",null,j.class,v),S&4&&r(I,"style",L.style,j.style,v),S&8){const de=p.dynamicProps;for(let ce=0;ce<de.length;ce++){const Te=de[ce],Tt=L[Te],Fi=j[Te];(Fi!==Tt||Te==="value")&&r(I,Te,Tt,Fi,v,f.children,m,w,y)}}S&1&&f.children!==p.children&&u(I,p.children)}else!A&&E==null&&st(I,p,L,j,m,w,v);((K=j.onVnodeUpdated)||U)&&rt(()=>{K&&jt(K,m,p,f),U&&Zn(p,f,m,"updated")},w)},It=(f,p,m,w,v,T,A)=>{for(let I=0;I<p.length;I++){const S=f[I],E=p[I],U=S.el&&(S.type===Ct||!Ts(S,E)||S.shapeFlag&70)?h(S.el):m;C(S,E,U,null,w,v,T,A,!0)}},st=(f,p,m,w,v,T,A)=>{if(m!==w){if(m!==ue)for(const I in m)!_o(I)&&!(I in w)&&r(f,I,m[I],null,A,p.children,v,T,y);for(const I in w){if(_o(I))continue;const S=w[I],E=m[I];S!==E&&I!=="value"&&r(f,I,E,S,A,p.children,v,T,y)}"value"in w&&r(f,"value",m.value,w.value)}},Ft=(f,p,m,w,v,T,A,I,S)=>{const E=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:K}=p;(fi||L&2048)&&(L=0,S=!1,j=null),K&&(I=I?I.concat(K):K),f==null?(i(E,m,w),i(U,m,w),Ae(p.children,m,U,v,T,A,I,S)):L>0&&L&64&&j&&f.dynamicChildren?(It(f.dynamicChildren,j,m,v,T,A,I),ec(f,p)):pt(f,p,m,U,v,T,A,I,S)},Xr=(f,p,m,w,v,T,A,I,S)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?v.ctx.activate(p,m,w,A,S):ft(p,m,w,v,T,A,S):De(f,p,S)},ft=(f,p,m,w,v,T,A)=>{const I=f.component=mI(f,w,v);if(I.type.__hmrId&&Qw(I),yo(f),on(I,"mount"),hu(f)&&(I.ctx.renderer=M),on(I,"init"),yI(I),an(I,"init"),I.asyncDep){if(v&&v.registerDep(I,G),!f.el){const S=I.subTree=Ee(xt);x(null,S,p,m)}return}G(I,f,p,m,v,T,A),vo(),an(I,"mount")},De=(f,p,m)=>{const w=p.component=f.component;if(pE(f,p,m))if(w.asyncDep&&!w.asyncResolved){yo(p),Y(w,p,m),vo();return}else w.next=p,Xw(w.update),w.update();else p.el=f.el,w.vnode=p},G=(f,p,m,w,v,T,A)=>{const I=()=>{if(f.isMounted){let{next:U,bu:L,u:j,parent:K,vnode:J}=f,de=U,ce;yo(U||f.vnode),ei(f,!1),U?(U.el=J.el,Y(f,U,A)):U=J,L&&Hi(L),(ce=U.props&&U.props.onVnodeBeforeUpdate)&&jt(ce,K,U,J),ei(f,!0),on(f,"render");const Te=el(f);an(f,"render");const Tt=f.subTree;f.subTree=Te,on(f,"patch"),C(Tt,Te,h(Tt.el),O(Tt),f,v,T),an(f,"patch"),U.el=Te.el,de===null&&gE(f,Te.el),j&&rt(j,v),(ce=U.props&&U.props.onVnodeUpdated)&&rt(()=>jt(ce,K,U,J),v),ug(f),vo()}else{let U;const{el:L,props:j}=p,{bm:K,m:J,parent:de}=f,ce=wo(p);if(ei(f,!1),K&&Hi(K),!ce&&(U=j&&j.onVnodeBeforeMount)&&jt(U,de,p),ei(f,!0),L&&ve){const Te=()=>{on(f,"render"),f.subTree=el(f),an(f,"render"),on(f,"hydrate"),ve(L,f.subTree,f,v,null),an(f,"hydrate")};ce?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Te()):Te()}else{on(f,"render");const Te=f.subTree=el(f);an(f,"render"),on(f,"patch"),C(null,Te,m,w,f,v,T),an(f,"patch"),p.el=Te.el}if(J&&rt(J,v),!ce&&(U=j&&j.onVnodeMounted)){const Te=p;rt(()=>jt(U,de,Te),v)}(p.shapeFlag&256||de&&wo(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&rt(f.a,v),f.isMounted=!0,sE(f),p=m=w=null}},S=f.effect=new iu(I,()=>wa(E),f.scope),E=f.update=()=>S.run();E.id=f.uid,ei(f,!0),S.onTrack=f.rtc?U=>Hi(f.rtc,U):void 0,S.onTrigger=f.rtg?U=>Hi(f.rtg,U):void 0,E.ownerInstance=f,E()},Y=(f,p,m)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,zE(f,p.props,w,m),tI(f,p.children,m),Pi(),Gh(),Oi()},pt=(f,p,m,w,v,T,A,I,S=!1)=>{const E=f&&f.children,U=f?f.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:K}=p;if(j>0){if(j&128){En(E,L,m,w,v,T,A,I,S);return}else if(j&256){Qn(E,L,m,w,v,T,A,I,S);return}}K&8?(U&16&&y(E,v,T),L!==E&&u(m,L)):U&16?K&16?En(E,L,m,w,v,T,A,I,S):y(E,v,T,!0):(U&8&&u(m,""),K&16&&Ae(L,m,w,v,T,A,I,S))},Qn=(f,p,m,w,v,T,A,I,S)=>{f=f||Yi,p=p||Yi;const E=f.length,U=p.length,L=Math.min(E,U);let j;for(j=0;j<L;j++){const K=p[j]=S?An(p[j]):St(p[j]);C(f[j],K,m,null,v,T,A,I,S)}E>U?y(f,v,T,!0,!1,L):Ae(p,m,w,v,T,A,I,S,L)},En=(f,p,m,w,v,T,A,I,S)=>{let E=0;const U=p.length;let L=f.length-1,j=U-1;for(;E<=L&&E<=j;){const K=f[E],J=p[E]=S?An(p[E]):St(p[E]);if(Ts(K,J))C(K,J,m,null,v,T,A,I,S);else break;E++}for(;E<=L&&E<=j;){const K=f[L],J=p[j]=S?An(p[j]):St(p[j]);if(Ts(K,J))C(K,J,m,null,v,T,A,I,S);else break;L--,j--}if(E>L){if(E<=j){const K=j+1,J=K<U?p[K].el:w;for(;E<=j;)C(null,p[E]=S?An(p[E]):St(p[E]),m,J,v,T,A,I,S),E++}}else if(E>j)for(;E<=L;)gt(f[E],v,T,!0),E++;else{const K=E,J=E,de=new Map;for(E=J;E<=j;E++){const Je=p[E]=S?An(p[E]):St(p[E]);Je.key!=null&&(de.has(Je.key)&&b("Duplicate keys found during update:",JSON.stringify(Je.key),"Make sure keys are unique."),de.set(Je.key,E))}let ce,Te=0;const Tt=j-J+1;let Fi=!1,Fh=0;const Es=new Array(Tt);for(E=0;E<Tt;E++)Es[E]=0;for(E=K;E<=L;E++){const Je=f[E];if(Te>=Tt){gt(Je,v,T,!0);continue}let $t;if(Je.key!=null)$t=de.get(Je.key);else for(ce=J;ce<=j;ce++)if(Es[ce-J]===0&&Ts(Je,p[ce])){$t=ce;break}$t===void 0?gt(Je,v,T,!0):(Es[$t-J]=E+1,$t>=Fh?Fh=$t:Fi=!0,C(Je,p[$t],m,null,v,T,A,I,S),Te++)}const Uh=Fi?rI(Es):Yi;for(ce=Uh.length-1,E=Tt-1;E>=0;E--){const Je=J+E,$t=p[Je],$h=Je+1<U?p[Je+1].el:w;Es[E]===0?C(null,$t,m,$h,v,T,A,I,S):Fi&&(ce<0||E!==Uh[ce]?Ut($t,m,$h,2):ce--)}}},Ut=(f,p,m,w,v=null)=>{const{el:T,type:A,transition:I,children:S,shapeFlag:E}=f;if(E&6){Ut(f.component.subTree,p,m,w);return}if(E&128){f.suspense.move(p,m,w);return}if(E&64){A.move(f,p,m,M);return}if(A===Ct){i(T,p,m);for(let L=0;L<S.length;L++)Ut(S[L],p,m,w);i(f.anchor,p,m);return}if(A===Ws){q(f,p,m);return}if(w!==2&&E&1&&I)if(w===0)I.beforeEnter(T),i(T,p,m),rt(()=>I.enter(T),v);else{const{leave:L,delayLeave:j,afterLeave:K}=I,J=()=>i(T,p,m),de=()=>{L(T,()=>{J(),K&&K()})};j?j(T,J,de):de()}else i(T,p,m)},gt=(f,p,m,w=!1,v=!1)=>{const{type:T,props:A,ref:I,children:S,dynamicChildren:E,shapeFlag:U,patchFlag:L,dirs:j}=f;if(I!=null&&Zl(I,null,m,f,!0),U&256){p.ctx.deactivate(f);return}const K=U&1&&j,J=!wo(f);let de;if(J&&(de=A&&A.onVnodeBeforeUnmount)&&jt(de,p,f),U&6)Tn(f.component,m,w);else{if(U&128){f.suspense.unmount(m,w);return}K&&Zn(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,m,v,M,w):E&&(T!==Ct||L>0&&L&64)?y(E,p,m,!1,!0):(T===Ct&&L&384||!v&&U&16)&&y(S,p,m),w&&In(f)}(J&&(de=A&&A.onVnodeUnmounted)||K)&&rt(()=>{de&&jt(de,p,f),K&&Zn(f,null,p,"unmounted")},m)},In=f=>{const{type:p,el:m,anchor:w,transition:v}=f;if(p===Ct){f.patchFlag>0&&f.patchFlag&2048&&v&&!v.persisted?f.children.forEach(A=>{A.type===xt?s(A.el):In(A)}):Jr(m,w);return}if(p===Ws){F(f);return}const T=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:I}=v,S=()=>A(m,T);I?I(f.el,T,S):S()}else T()},Jr=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},Tn=(f,p,m)=>{f.type.__hmrId&&Zw(f);const{bum:w,scope:v,update:T,subTree:A,um:I}=f;w&&Hi(w),v.stop(),T&&(T.active=!1,gt(A,f,p,m)),I&&rt(I,p),rt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve()),oE(f)},y=(f,p,m,w=!1,v=!1,T=0)=>{for(let A=T;A<f.length;A++)gt(f[A],p,m,w,v)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),N=(f,p,m)=>{f==null?p._vnode&&gt(p._vnode,null,null,!0):C(p._vnode||null,f,p,null,null,null,m),Gh(),og(),p._vnode=f},M={p:C,um:gt,m:Ut,r:In,mt:ft,mc:Ae,pc:pt,pbc:It,n:O,o:t};let Q,ve;return e&&([Q,ve]=e(M)),{render:N,hydrate:Q,createApp:WE(N,Q)}}function ei({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ec(t,e,n=!1){const i=t.children,s=e.children;if(B(i)&&B(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=An(s[r]),a.el=o.el),n||ec(o,a)),a.type===Pr&&(a.el=o.el),a.type===xt&&!a.el&&(a.el=o.el)}}function rI(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const oI=t=>t.__isTeleport,Ct=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),Ks=[];let kt=null;function Yt(t=!1){Ks.push(kt=t?null:[])}function aI(){Ks.pop(),kt=Ks[Ks.length-1]||null}let rr=1;function ld(t){rr+=t}function lI(t){return t.dynamicChildren=rr>0?kt||Yi:null,aI(),rr>0&&kt&&kt.push(t),t}function Xt(t,e,n,i,s,r){return lI(ne(t,e,n,i,s,r,!0))}function or(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return e.shapeFlag&6&&Vi.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const cI=(...t)=>uI(...t),Ta="__vInternal",kg=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Re(t)||V(t)?{i:et,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,i=0,s=null,r=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kg(e),ref:e&&Io(e),scopeId:fg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return a?(mu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),l.key!==l.key&&b("VNode created with invalid key (NaN). VNode type:",l.type),rr>0&&!o&&kt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kt.push(l),l}const Ee=cI;function uI(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===NE)&&(t||b(`Invalid vnode type when creating vnode: ${t}.`),t=xt),or(t)){const a=Vn(t,e,!0);return n&&mu(a,n),rr>0&&!r&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(Dg(t)&&(t=t.__vccOpts),e){e=hI(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=tu(a)),fe(l)&&(Vl(l)&&!B(l)&&(l=we({},l)),e.style=eu(l))}const o=be(t)?1:mE(t)?128:oI(t)?64:fe(t)?4:V(t)?2:0;return o&4&&Vl(t)&&(t=z(t),b("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),ne(t,e,n,i,s,o,r,!0)}function hI(t){return t?Vl(t)||Ta in t?we({},t):t:null}function Vn(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?fI(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&kg(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Io(e)):[s,Io(e)]:Io(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&B(o)?o.map(Pg):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vn(t.ssContent),ssFallback:t.ssFallback&&Vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Pg(t){const e=Vn(t);return B(t.children)&&(e.children=t.children.map(Pg)),e}function dI(t=" ",e=0){return Ee(Pr,null,t,e)}function gu(t,e){const n=Ee(Ws,null,t);return n.staticCount=e,n}function St(t){return t==null||typeof t=="boolean"?Ee(xt):B(t)?Ee(Ct,null,t.slice()):typeof t=="object"?An(t):Ee(Pr,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vn(t)}function mu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),mu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ta in e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:et},n=32):(e=String(e),i&64?(n=16,e=[dI(e)]):n=8);t.children=e,t.shapeFlag|=n}function fI(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=tu([e.class,i.class]));else if(s==="style")e.style=eu([e.style,i.style]);else if(Rr(s)){const r=e[s],o=i[s];o&&r!==o&&!(B(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function jt(t,e,n,i=null){Nt(t,e,7,[n,i])}const pI=Ig();let gI=0;function mI(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||pI,r={uid:gI++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bg(i,s),emitsOptions:dg(i,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:i.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=DE(r),r.root=e?e.root:r,r.emit=uE.bind(null,r),t.ce&&t.ce(r),r}let Se=null;const _u=()=>Se||et;let yu,Ui,cd="__VUE_INSTANCE_SETTERS__";(Ui=ko()[cd])||(Ui=ko()[cd]=[]),Ui.push(t=>Se=t),yu=t=>{Ui.length>1?Ui.forEach(e=>e(t)):Ui[0](t)};const rs=t=>{yu(t),t.scope.on()},gi=()=>{Se&&Se.scope.off(),yu(null)},_I=qn("slot,component");function tc(t,e){const n=e.isNativeTag||Op;(_I(t)||n(t))&&b("Do not use built-in or reserved HTML elements as component id: "+t)}function Og(t){return t.vnode.shapeFlag&4}let ar=!1;function yI(t,e=!1){ar=e;const{props:n,children:i}=t.vnode,s=Og(t);KE(t,n,s,e),eI(t,i);const r=s?vI(t,e):void 0;return ar=!1,r}function vI(t,e){var n;const i=t.type;{if(i.name&&tc(i.name,t.appContext.config),i.components){const r=Object.keys(i.components);for(let o=0;o<r.length;o++)tc(r[o],t.appContext.config)}if(i.directives){const r=Object.keys(i.directives);for(let o=0;o<r.length;o++)mg(r[o])}i.compilerOptions&&Ng()&&b('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=Yp(new Proxy(t.ctx,wg)),ME(t);const{setup:s}=i;if(s){const r=t.setupContext=s.length>1?II(t):null;rs(t),Pi();const o=fn(s,t,0,[xs(t.props),r]);if(Oi(),gi(),Jc(o)){if(o.then(gi,gi),e)return o.then(a=>{ud(t,a,e)}).catch(a=>{va(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=i.name)!=null?n:"Anonymous";b(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else ud(t,o,e)}else xg(t,e)}function ud(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)?(or(e)&&b("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=eg(e),LE(t)):e!==void 0&&b(`setup() should return an object. Received: ${e===null?"null":typeof e}`),xg(t,n)}let nc;const Ng=()=>!nc;function xg(t,e,n){const i=t.type;if(!t.render){if(!e&&nc&&!i.render){const s=i.template||fu(t).template;if(s){on(t,"compile");const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=we(we({isCustomElement:r,delimiters:a},o),l);i.render=nc(s,c),an(t,"compile")}}t.render=i.render||ot}rs(t),Pi(),UE(t),Oi(),gi(),!i.render&&t.render===ot&&!e&&(i.template?b('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):b("Component is missing template or render function."))}function wI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return No(),Ye(t,"get","$attrs"),e[n]},set(){return b("setupContext.attrs is readonly."),!1},deleteProperty(){return b("setupContext.attrs is readonly."),!1}}))}function EI(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return Ye(t,"get","$slots"),e[n]}}))}function II(t){return Object.freeze({get attrs(){return wI(t)},get slots(){return EI(t)},get emit(){return(n,...i)=>t.emit(n,...i)},expose:n=>{if(t.exposed&&b("expose() should be called only once per setup()."),n!=null){let i=typeof n;i==="object"&&(B(n)?i="array":Re(n)&&(i="ref")),i!=="object"&&b(`expose() should be passed a plain object, received ${i}.`)}t.exposed=n||{}}})}function ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(eg(Yp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)},has(e,n){return n in e||n in pi}}))}const TI=/(?:^|[-_])(\w)/g,bI=t=>t.replace(TI,e=>e.toUpperCase()).replace(/[-_]/g,"");function vu(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Ca(t,e,n=!1){let i=vu(e);if(!i&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&t&&t.parent){const s=r=>{for(const o in r)if(r[o]===e)return o};i=s(t.components||t.parent.type.components)||s(t.appContext.components)}return i?bI(i):n?"App":"Anonymous"}function Dg(t){return V(t)&&"__vccOpts"in t}const Rt=(t,e)=>Hw(t,e,ar);function Mg(t,e,n){const i=arguments.length;return i===2?fe(e)&&!B(e)?or(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&or(n)&&(n=[n]),Ee(t,e,n))}const CI=Symbol.for("v-scx"),SI=()=>{{const t=Gt(CI);return t||b("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function nl(t){return!!(t&&t.__v_isShallow)}function RI(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},i={style:"color:#9d288c"},s={header(h){return fe(h)?h.__isVue?["div",t,"VueInstance"]:Re(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:hi(h)?["div",{},["span",t,nl(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${Hn(h)?" (readonly)":""}`]:Hn(h)?["div",{},["span",t,nl(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...r(h.$)]}};function r(h){const d=[];h.type.props&&h.props&&d.push(o("props",z(h.props))),h.setupState!==ue&&d.push(o("setup",h.setupState)),h.data!==ue&&d.push(o("data",z(h.data)));const g=l(h,"computed");g&&d.push(o("computed",g));const _=l(h,"inject");return _&&d.push(o("injected",_)),d.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=we({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(g=>["div",{},["span",i,g+": "],a(d[g],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",i,h]:fe(h)?["object",{object:d?z(h):h}]:["span",n,String(h)]}function l(h,d){const g=h.type;if(V(g))return;const _={};for(const C in h.ctx)c(g,C,d)&&(_[C]=h.ctx[C]);return _}function c(h,d,g){const _=h[g];if(B(_)&&_.includes(d)||fe(_)&&d in _||h.extends&&c(h.extends,d,g)||h.mixins&&h.mixins.some(C=>c(C,d,g)))return!0}function u(h){return nl(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const hd="3.3.4",AI="http://www.w3.org/2000/svg",si=typeof document<"u"?document:null,dd=si&&si.createElement("template"),kI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?si.createElementNS(AI,t):si.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>si.createTextNode(t),createComment:t=>si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{dd.innerHTML=i?`<svg>${t}</svg>`:t;const a=dd.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function PI(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function OI(t,e,n){const i=t.style,s=be(n);if(n&&!s){if(e&&!be(e))for(const r in e)n[r]==null&&ic(i,r,"");for(const r in n)ic(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const NI=/[^\\];\s*$/,fd=/\s*!important$/;function ic(t,e,n){if(B(n))n.forEach(i=>ic(t,e,i));else if(n==null&&(n=""),NI.test(n)&&b(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const i=xI(t,e);fd.test(n)?t.setProperty(jn(i),n.replace(fd,""),"important"):t[i]=n}}const pd=["Webkit","Moz","ms"],il={};function xI(t,e){const n=il[e];if(n)return n;let i=Zt(e);if(i!=="filter"&&i in t)return il[e]=i;i=vi(i);for(let s=0;s<pd.length;s++){const r=pd[s]+i;if(r in t)return il[e]=r}return e}const gd="http://www.w3.org/1999/xlink";function DI(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gd,e.slice(6,e.length)):t.setAttributeNS(gd,e,n);else{const r=aw(e);n==null||r&&!Np(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function MI(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Np(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||b(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function Wi(t,e,n,i){t.addEventListener(e,n,i)}function LI(t,e,n,i){t.removeEventListener(e,n,i)}function FI(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=UI(e);if(i){const c=r[e]=BI(i,s);Wi(t,a,c,l)}else o&&(LI(t,a,o,l),r[e]=void 0)}}const md=/(?:Once|Passive|Capture)$/;function UI(t){let e;if(md.test(t)){e={};let i;for(;i=t.match(md);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jn(t.slice(2)),e]}let sl=0;const $I=Promise.resolve(),jI=()=>sl||($I.then(()=>sl=0),sl=Date.now());function BI(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Nt(HI(i,n.value),e,5,[i])};return n.value=t,n.attached=jI(),n}function HI(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const _d=/^on[a-z]/,VI=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?PI(t,i,s):e==="style"?OI(t,n,i):Rr(e)?Ro(e)||FI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WI(t,e,i,s))?MI(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),DI(t,e,i,s))};function WI(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&_d.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_d.test(e)&&be(n)?!1:e in t}const yd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Hi(e,n):e};function KI(t){t.target.composing=!0}function vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qs={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=yd(s);const r=i||s.props&&s.props.type==="number";Wi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Fl(a)),t._assign(a)}),n&&Wi(t,"change",()=>{t.value=t.value.trim()}),e||(Wi(t,"compositionstart",KI),Wi(t,"compositionend",vd),Wi(t,"change",vd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=yd(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Fl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},qI=["ctrl","shift","alt","meta"],zI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qI.some(n=>t[`${n}Key`]&&!e.includes(n))},Lg=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=zI[e[s]];if(r&&r(n,e))return}return t(n,...i)},GI=we({patchProp:VI},kI);let wd;function YI(){return wd||(wd=iI(GI))}const XI=(...t)=>{const e=YI().createApp(...t);JI(e),QI(e);const{mount:n}=e;return e.mount=i=>{const s=ZI(i);if(!s)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function JI(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>sw(e)||rw(e),writable:!1})}function QI(t){if(Ng()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){b("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,i='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return b(i),n},set(){b(i)}})}}function ZI(t){if(be(t)){const e=document.querySelector(t);return e||b(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&b('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function eT(){RI()}eT();function tT(){return Fg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Fg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const nT=typeof Proxy=="function",iT="devtools-plugin:setup",sT="plugin:settings:set";let $i,sc;function rT(){var t;return $i!==void 0||(typeof window<"u"&&window.performance?($i=!0,sc=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?($i=!0,sc=global.perf_hooks.performance):$i=!1),$i}function oT(){return rT()?sc.now():Date.now()}class aT{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},i);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return oT()}},n&&n.on(sT,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function lT(t,e){const n=t,i=Fg(),s=tT(),r=nT&&n.enableEarlyProxy;if(s&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(iT,t,e);else{const o=r?new aT(n,s):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof window<"u";function cT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function rl(t,e){const n={};for(const i in e){const s=e[i];n[i]=dt(s)?s.map(t):t(s)}return n}const zs=()=>{},dt=Array.isArray;function te(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const uT=/\/$/,hT=t=>t.replace(uT,"");function ol(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=pT(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function dT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Id(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Wn(e.matched[i],n.matched[s])&&Ug(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ug(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fT(t[n],e[n]))return!1;return!0}function fT(t,e){return dt(t)?Td(t,e):dt(e)?Td(e,t):t===e}function Td(t,e){return dt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function pT(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return te(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var lr;(function(t){t.pop="pop",t.push="push"})(lr||(lr={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function gT(t){if(!t)if(ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hT(t)}const mT=/^[^#]+#/;function _T(t,e){return t.replace(mT,"#")+e}function yT(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Sa=()=>({left:window.pageXOffset,top:window.pageYOffset});function vT(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!i||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(i&&r){te(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{te(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){te(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=yT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bd(t,e){return(history.state?history.state.position-e:-1)+t}const rc=new Map;function wT(t,e){rc.set(t,e)}function ET(t){const e=rc.get(t);return rc.delete(t),e}let IT=()=>location.protocol+"//"+location.host;function $g(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ed(l,"")}return Ed(n,t)+i+s}function TT(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const g=$g(t,location),_=n.value,C=e.value;let R=0;if(d){if(n.value=g,e.value=d,o&&o===_){o=null;return}R=C?d.position-C.position:0}else i(g);s.forEach(x=>{x(n.value,_,{delta:R,type:lr.pop,direction:R?R>0?Gs.forward:Gs.back:Gs.unknown})})};function l(){o=n.value}function c(d){s.push(d);const g=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:Sa()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Cd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Sa():null}}function bT(t){const{history:e,location:n}=window,i={value:$g(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:IT()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(g){te("Error with push/replace State",g),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,Cd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=oe({},s.value,e.state,{forward:l,scroll:Sa()});e.state||te(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const h=oe({},Cd(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function CT(t){t=gT(t);const e=bT(t),n=TT(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=oe({location:"",base:t,go:i,createHref:_T.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ST(t){return typeof t=="string"||t&&typeof t=="object"}function jg(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bg=Symbol("navigation failure");var Sd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sd||(Sd={}));const RT={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${kT(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function os(t,e){return oe(new Error(RT[t](e)),{type:t,[Bg]:!0},e)}function rn(t,e){return t instanceof Error&&Bg in t&&(e==null||!!(t.type&e))}const AT=["params","query","hash"];function kT(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of AT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Rd="[^/]+?",PT={sensitive:!1,strict:!1,start:!0,end:!0},OT=/[.+*?^${}()[\]/\\]/g;function NT(t,e){const n=oe({},PT,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(OT,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:C,optional:R,regexp:x}=d;r.push({name:_,repeatable:C,optional:R});const $=x||Rd;if($!==Rd){g+=10;try{new RegExp(`(${$})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${_}" (${$}): `+q.message)}}let D=C?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;h||(D=R&&c.length<2?`(?:/${D})`:"/"+D),R&&(D+="?"),s+=D,g+=20,R&&(g+=-8),C&&(g+=-20),$===".*"&&(g+=-50)}u.push(g)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",_=r[d-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:C,optional:R}=g,x=_ in c?c[_]:"";if(dt(x)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const $=dt(x)?x.join("/"):x;if(!$)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=$}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function xT(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DT(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=xT(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Ad(i))return 1;if(Ad(s))return-1}return s.length-i.length}function Ad(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MT={type:0,value:""},LT=/[a-zA-Z0-9_]/;function FT(t){if(!t)return[[]];if(t==="/")return[[MT]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:LT.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function UT(t,e,n){const i=NT(FT(t.path),n);{const r=new Set;for(const o of i.keys)r.has(o.name)&&te(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(o.name)}const s=oe(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $T(t,e){const n=[],i=new Map;e=Od({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,d){const g=!d,_=jT(u);WT(_,h),_.aliasOf=d&&d.record;const C=Od(e,u),R=[_];if("alias"in u){const D=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of D)R.push(oe({},_,{components:d?d.record.components:_.components,path:q,aliasOf:d?d.record:_}))}let x,$;for(const D of R){const{path:q}=D;if(h&&q[0]!=="/"){const F=h.record.path,pe=F[F.length-1]==="/"?"":"/";D.path=h.record.path+(q&&pe+q)}if(D.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(x=UT(D,h,C),h&&q[0]==="/"&&KT(x,h),d?(d.alias.push(x),VT(d,x)):($=$||x,$!==x&&$.alias.push(x),g&&u.name&&!Pd(x)&&o(u.name)),_.children){const F=_.children;for(let pe=0;pe<F.length;pe++)r(F[pe],x,d&&d.children[pe])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return $?()=>{o($)}:zs}function o(u){if(jg(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&DT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Hg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Pd(u)&&i.set(u.record.name,u)}function c(u,h){let d,g={},_,C;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw os(1,{location:u});{const $=Object.keys(u.params||{}).filter(D=>!d.keys.find(q=>q.name===D));$.length&&te(`Discarded invalid param(s) "${$.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}C=d.record.name,g=oe(kd(h.params,d.keys.filter($=>!$.optional).map($=>$.name)),u.params&&kd(u.params,d.keys.map($=>$.name))),_=d.stringify(g)}else if("path"in u)_=u.path,_.startsWith("/")||te(`The Matcher cannot resolve relative paths but received "${_}". Unless you directly called \`matcher.resolve("${_}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find($=>$.re.test(_)),d&&(g=d.parse(_),C=d.record.name);else{if(d=h.name?i.get(h.name):n.find($=>$.re.test(h.path)),!d)throw os(1,{location:u,currentLocation:h});C=d.record.name,g=oe({},h.params,u.params),_=d.stringify(g)}const R=[];let x=d;for(;x;)R.unshift(x.record),x=x.parent;return{name:C,path:_,params:g,matched:R,meta:HT(R)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function kd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function jT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:BT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function BT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Pd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HT(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Od(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function oc(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function VT(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(oc.bind(null,n)))return te(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(oc.bind(null,n)))return te(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function WT(t,e){e&&e.record.name&&!t.name&&!t.path&&te(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function KT(t,e){for(const n of e.keys)if(!t.keys.find(oc.bind(null,n)))return te(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function Hg(t,e){return e.children.some(n=>n===t||Hg(t,n))}const Vg=/#/g,qT=/&/g,zT=/\//g,GT=/=/g,YT=/\?/g,Wg=/\+/g,XT=/%5B/g,JT=/%5D/g,Kg=/%5E/g,QT=/%60/g,qg=/%7B/g,ZT=/%7C/g,zg=/%7D/g,eb=/%20/g;function wu(t){return encodeURI(""+t).replace(ZT,"|").replace(XT,"[").replace(JT,"]")}function tb(t){return wu(t).replace(qg,"{").replace(zg,"}").replace(Kg,"^")}function ac(t){return wu(t).replace(Wg,"%2B").replace(eb,"+").replace(Vg,"%23").replace(qT,"%26").replace(QT,"`").replace(qg,"{").replace(zg,"}").replace(Kg,"^")}function nb(t){return ac(t).replace(GT,"%3D")}function ib(t){return wu(t).replace(Vg,"%23").replace(YT,"%3F")}function sb(t){return t==null?"":ib(t).replace(zT,"%2F")}function cr(t){try{return decodeURIComponent(""+t)}catch{te(`Error decoding "${t}". Using original value`)}return""+t}function rb(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Wg," "),o=r.indexOf("="),a=cr(o<0?r:r.slice(0,o)),l=o<0?null:cr(r.slice(o+1));if(a in e){let c=e[a];dt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Nd(t){let e="";for(let n in t){const i=t[n];if(n=nb(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(dt(i)?i.map(r=>r&&ac(r)):[i&&ac(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ob(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=dt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const ab=Symbol("router view location matched"),xd=Symbol("router view depth"),Eu=Symbol("router"),Gg=Symbol("route location"),lc=Symbol("router view location");function bs(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kn(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(os(4,{from:n,to:e})):h instanceof Error?a(h):ST(h)?a(os(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,lb(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(d=>l._called?d:(te(h),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){te(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function lb(t,e,n){let i=0;return function(){i++===1&&te(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,i===1&&t.apply(null,arguments)}}function al(t,e,n,i){const s=[];for(const r of t){!r.components&&!r.children.length&&te(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const o in r.components){let a=r.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw te(`Component "${o}" in record with path "${r.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){te(`Component "${o}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,te(`Component "${o}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(cb(a)){const c=(a.__vccOpts||a)[e];c&&s.push(kn(c,n,i,r,o))}else{let l=a();"catch"in l||(te(`Component "${o}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=cT(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&kn(d,n,i,r,o)()}))}}}return s}function cb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dd(t){const e=Gt(Eu),n=Gt(Gg),i=Rt(()=>e.resolve(Ji(t.to))),s=Rt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Wn.bind(null,u));if(d>-1)return d;const g=Md(l[c-2]);return c>1&&Md(u)===g&&h[h.length-1].path!==g?h.findIndex(Wn.bind(null,l[c-2])):d}),r=Rt(()=>s.value>-1&&fb(n.params,i.value.params)),o=Rt(()=>s.value>-1&&s.value===n.matched.length-1&&Ug(n.params,i.value.params));function a(l={}){return db(l)?e[Ji(t.replace)?"replace":"push"](Ji(t.to)).catch(zs):Promise.resolve()}if(ln){const l=_u();if(l){const c={route:i.value,isActive:r.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),yE(()=>{c.route=i.value,c.isActive=r.value,c.isExactActive=o.value},{flush:"post"})}}return{route:i,href:Rt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const ub=_g({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dd,setup(t,{slots:e}){const n=_a(Dd(t)),{options:i}=Gt(Eu),s=Rt(()=>({[Ld(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ld(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Mg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),hb=ub;function db(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fb(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!dt(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Md(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ld=(t,e,n)=>t??e??n,pb=_g({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){mb();const i=Gt(lc),s=Rt(()=>t.route||i.value),r=Gt(xd,0),o=Rt(()=>{let c=Ji(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Rt(()=>s.value.matched[o.value]);Eo(xd,Rt(()=>o.value+1)),Eo(ab,a),Eo(lc,s);const l=Qp();return Hs(()=>[l.value,a.value,t.name],([c,u,h],[d,g,_])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Wn(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(C=>C(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Fd(n.default,{Component:d,route:c});const g=h.props[u],_=g?g===!0?c.params:typeof g=="function"?g(c):g:null,R=Mg(d,oe({},_,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:l}));if(ln&&R.ref){const x={depth:o.value,name:h.name,path:h.path,meta:h.meta};(dt(R.ref)?R.ref.map(D=>D.i):[R.ref.i]).forEach(D=>{D.__vrv_devtools=x})}return Fd(n.default,{Component:R,route:c})||R}}});function Fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gb=pb;function mb(){const t=_u(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const i=e==="KeepAlive"?"keep-alive":"transition";te(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${i}>
    <component :is="Component" />
  </${i}>
</router-view>`)}}function Cs(t,e){const n=oe({},t,{matched:t.matched.map(i=>Cb(i,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function so(t){return{_custom:{display:t}}}let _b=0;function yb(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const i=_b++;lT({id:"org.vuejs.router"+(i?"."+i:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Cs(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Yg})}dt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let g=Qg,_="";d.isExactActive?(g=Jg,_="This is exactly active"):d.isActive&&(g=Xg,_="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:_,backgroundColor:g})}))}),Hs(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const r="router:navigations:"+i;s.addTimelineLayer({id:r,label:`Router${i?" "+i:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:so("beforeEach"),from:Cs(h,"Current Location during this navigation"),to:Cs(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:r,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const g={guard:so("afterEach")};d?(g.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},g.status=so("❌")):g.status=so("✅"),g.from=Cs(h,"Current Location during this navigation"),g.to=Cs(u,"Target location"),s.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:g,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+i;s.addInspector({id:a,label:"Routes"+(i?" "+i:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(tm),u.filter&&(h=h.filter(d=>cc(d,u.filter.toLowerCase()))),h.forEach(d=>em(d,e.currentRoute.value)),u.rootNodes=h.map(Zg)}let c;s.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(g=>g.record.__vd_id===u.nodeId);d&&(u.state={options:wb(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function vb(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function wb(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(i=>`${i.name}${vb(i)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(i=>i.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(i=>i.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const Yg=15485081,Xg=2450411,Jg=8702998,Eb=2282478,Qg=16486972,Ib=6710886;function Zg(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:Eb}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:Qg}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:Yg}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:Jg}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:Xg}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Ib});let i=n.__vd_id;return i==null&&(i=String(Tb++),n.__vd_id=i),{id:i,label:n.path,tags:e,children:t.children.map(Zg)}}let Tb=0;const bb=/^\/(.*)\/([a-z]*)$/;function em(t,e){const n=e.matched.length&&Wn(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(i=>Wn(i,t.record))),t.children.forEach(i=>em(i,e))}function tm(t){t.__vd_match=!1,t.children.forEach(tm)}function cc(t,e){const n=String(t.re).match(bb);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>cc(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),r=cr(s);return!e.startsWith("/")&&(r.includes(e)||s.includes(e))||r.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>cc(o,e))}function Cb(t,e){const n={};for(const i in t)e.includes(i)||(n[i]=t[i]);return n}function Sb(t){const e=$T(t.routes,t),n=t.parseQuery||rb,i=t.stringifyQuery||Nd,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=bs(),o=bs(),a=bs(),l=Uw(Cn);let c=Cn;ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rl.bind(null,y=>""+y),h=rl.bind(null,sb),d=rl.bind(null,cr);function g(y,O){let N,M;return jg(y)?(N=e.getRecordMatcher(y),M=O):M=y,e.addRoute(M,N)}function _(y){const O=e.getRecordMatcher(y);O?e.removeRoute(O):te(`Cannot remove non-existent route "${String(y)}"`)}function C(){return e.getRoutes().map(y=>y.record)}function R(y){return!!e.getRecordMatcher(y)}function x(y,O){if(O=oe({},O||l.value),typeof y=="string"){const p=ol(n,y,O.path),m=e.resolve({path:p.path},O),w=s.createHref(p.fullPath);return w.startsWith("//")?te(`Location "${y}" resolved to "${w}". A resolved location cannot start with multiple slashes.`):m.matched.length||te(`No match found for location with path "${y}"`),oe(p,m,{params:d(m.params),hash:cr(p.hash),redirectedFrom:void 0,href:w})}let N;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&te(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),N=oe({},y,{path:ol(n,y.path,O.path).path});else{const p=oe({},y.params);for(const m in p)p[m]==null&&delete p[m];N=oe({},y,{params:h(p)}),O.params=h(O.params)}const M=e.resolve(N,O),Q=y.hash||"";Q&&!Q.startsWith("#")&&te(`A \`hash\` should always start with the character "#". Replace "${Q}" with "#${Q}".`),M.params=u(d(M.params));const ve=dT(i,oe({},y,{hash:tb(Q),path:M.path})),f=s.createHref(ve);return f.startsWith("//")?te(`Location "${y}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):M.matched.length||te(`No match found for location with path "${"path"in y?y.path:y}"`),oe({fullPath:ve,hash:Q,query:i===Nd?ob(y.query):y.query||{}},M,{redirectedFrom:void 0,href:f})}function $(y){return typeof y=="string"?ol(n,y,l.value.path):oe({},y)}function D(y,O){if(c!==y)return os(8,{from:O,to:y})}function q(y){return Ce(y)}function F(y){return q(oe($(y),{replace:!0}))}function pe(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:N}=O;let M=typeof N=="function"?N(y):N;if(typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=$(M):{path:M},M.params={}),!("path"in M)&&!("name"in M))throw te(`Invalid redirect found:
${JSON.stringify(M,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return oe({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function Ce(y,O){const N=c=x(y),M=l.value,Q=y.state,ve=y.force,f=y.replace===!0,p=pe(N);if(p)return Ce(oe($(p),{state:typeof p=="object"?oe({},Q,p.state):Q,force:ve,replace:f}),O||N);const m=N;m.redirectedFrom=O;let w;return!ve&&Id(i,M,N)&&(w=os(16,{to:m,from:M}),En(M,M,!0,!1)),(w?Promise.resolve(w):it(m,M)).catch(v=>rn(v)?rn(v,2)?v:Qn(v):Y(v,m,M)).then(v=>{if(v){if(rn(v,2))return Id(i,x(v.to),m)&&O&&(O._count=O._count?O._count+1:1)>30?(te(`Detected a possibly infinite redirection in a navigation guard when going from "${M.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Ce(oe({replace:f},$(v.to),{state:typeof v.to=="object"?oe({},Q,v.to.state):Q,force:ve}),O||m)}else v=st(m,M,!0,f,Q);return It(m,M,v),v})}function $e(y,O){const N=D(y,O);return N?Promise.reject(N):Promise.resolve()}function Ae(y){const O=In.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(y):y()}function it(y,O){let N;const[M,Q,ve]=Rb(y,O);N=al(M.reverse(),"beforeRouteLeave",y,O);for(const p of M)p.leaveGuards.forEach(m=>{N.push(kn(m,y,O))});const f=$e.bind(null,y,O);return N.push(f),Tn(N).then(()=>{N=[];for(const p of r.list())N.push(kn(p,y,O));return N.push(f),Tn(N)}).then(()=>{N=al(Q,"beforeRouteUpdate",y,O);for(const p of Q)p.updateGuards.forEach(m=>{N.push(kn(m,y,O))});return N.push(f),Tn(N)}).then(()=>{N=[];for(const p of ve)if(p.beforeEnter)if(dt(p.beforeEnter))for(const m of p.beforeEnter)N.push(kn(m,y,O));else N.push(kn(p.beforeEnter,y,O));return N.push(f),Tn(N)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),N=al(ve,"beforeRouteEnter",y,O),N.push(f),Tn(N))).then(()=>{N=[];for(const p of o.list())N.push(kn(p,y,O));return N.push(f),Tn(N)}).catch(p=>rn(p,8)?p:Promise.reject(p))}function It(y,O,N){a.list().forEach(M=>Ae(()=>M(y,O,N)))}function st(y,O,N,M,Q){const ve=D(y,O);if(ve)return ve;const f=O===Cn,p=ln?history.state:{};N&&(M||f?s.replace(y.fullPath,oe({scroll:f&&p&&p.scroll},Q)):s.push(y.fullPath,Q)),l.value=y,En(y,O,N,f),Qn()}let Ft;function Xr(){Ft||(Ft=s.listen((y,O,N)=>{if(!Jr.listening)return;const M=x(y),Q=pe(M);if(Q){Ce(oe(Q,{replace:!0}),M).catch(zs);return}c=M;const ve=l.value;ln&&wT(bd(ve.fullPath,N.delta),Sa()),it(M,ve).catch(f=>rn(f,12)?f:rn(f,2)?(Ce(f.to,M).then(p=>{rn(p,20)&&!N.delta&&N.type===lr.pop&&s.go(-1,!1)}).catch(zs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),Y(f,M,ve))).then(f=>{f=f||st(M,ve,!1),f&&(N.delta&&!rn(f,8)?s.go(-N.delta,!1):N.type===lr.pop&&rn(f,20)&&s.go(-1,!1)),It(M,ve,f)}).catch(zs)}))}let ft=bs(),De=bs(),G;function Y(y,O,N){Qn(y);const M=De.list();return M.length?M.forEach(Q=>Q(y,O,N)):(te("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function pt(){return G&&l.value!==Cn?Promise.resolve():new Promise((y,O)=>{ft.add([y,O])})}function Qn(y){return G||(G=!y,Xr(),ft.list().forEach(([O,N])=>y?N(y):O()),ft.reset()),y}function En(y,O,N,M){const{scrollBehavior:Q}=t;if(!ln||!Q)return Promise.resolve();const ve=!N&&ET(bd(y.fullPath,0))||(M||!N)&&history.state&&history.state.scroll||null;return ig().then(()=>Q(y,O,ve)).then(f=>f&&vT(f)).catch(f=>Y(f,y,O))}const Ut=y=>s.go(y);let gt;const In=new Set,Jr={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,hasRoute:R,getRoutes:C,resolve:x,options:t,push:q,replace:F,go:Ut,back:()=>Ut(-1),forward:()=>Ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:De.add,isReady:pt,install(y){const O=this;y.component("RouterLink",hb),y.component("RouterView",gb),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ji(l)}),ln&&!gt&&l.value===Cn&&(gt=!0,q(s.location).catch(Q=>{te("Unexpected error when starting the router:",Q)}));const N={};for(const Q in Cn)Object.defineProperty(N,Q,{get:()=>l.value[Q],enumerable:!0});y.provide(Eu,O),y.provide(Gg,zp(N)),y.provide(lc,l);const M=y.unmount;In.add(y),y.unmount=function(){In.delete(y),In.size<1&&(c=Cn,Ft&&Ft(),Ft=null,l.value=Cn,gt=!1,G=!1),M()},ln&&yb(y,O,e)}};function Tn(y){return y.reduce((O,N)=>O.then(()=>Ae(N)),Promise.resolve())}return Jr}function Rb(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Wn(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Wn(c,l))||s.push(l))}return[n,i,s]}/**
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
 */const nm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw hs(e)},hs=function(t){return new Error("Firebase Database ("+nm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const im=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ab=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),i.push(n[u],n[h],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(im(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ab(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new kb;const d=r<<2|a>>4;if(i.push(d),c!==64){const g=a<<4&240|c>>2;if(i.push(g),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sm=function(t){const e=im(t);return Ra.encodeByteArray(e,!0)},Lo=function(t){return sm(t).replace(/\./g,"")},Fo=function(t){try{return Ra.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pb(t){return rm(void 0,t)}function rm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ob(n)||(t[n]=rm(t[n],e[n]));return t}function Ob(t){return t!=="__proto__"}/**
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
 */function Nb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xb=()=>Nb().__FIREBASE_DEFAULTS__,Db=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fo(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return xb()||Db()||Mb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},om=t=>{var e,n;return(n=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lb=t=>{const e=om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},am=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config},lm=t=>{var e;return(e=Iu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Fb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),a].join(".")}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function cm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ub(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hm(){return nm.NODE_ADMIN===!0}function bu(){try{return typeof indexedDB=="object"}catch{return!1}}function dm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function $b(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const jb="FirebaseError";class Et extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=jb,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Bb(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Et(s,a,i)}}function Bb(t,e){return t.replace(Hb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Hb=/\{\$([^}]+)}/g;/**
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
 */function hr(t){return JSON.parse(t)}function Le(t){return JSON.stringify(t)}/**
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
 */const fm=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=hr(Fo(r[0])||""),n=hr(Fo(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Vb=function(t){const e=fm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wb=function(t){const e=fm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function as(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function uc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Uo(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function $o(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Ud(r)&&Ud(o)){if(!$o(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Ud(t){return t!==null&&typeof t=="object"}/**
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
 */function ds(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Kb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function qb(t,e){const n=new zb(t,e);return n.subscribe.bind(n)}class zb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Gb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ll),s.error===void 0&&(s.error=ll),s.complete===void 0&&(s.complete=ll);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ll(){}function Yb(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Xb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,k(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Aa=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Jb=1e3,Qb=2,Zb=4*60*60*1e3,e0=.5;function $d(t,e=Jb,n=Qb){const i=e*Math.pow(n,t),s=Math.round(e0*i*(Math.random()-.5)*2);return Math.min(Zb,i+s)}/**
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
 */function wn(t){return t&&t._delegate?t._delegate:t}class nt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ni="[DEFAULT]";/**
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
 */class t0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ur;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i0(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:n0(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n0(t){return t===ni?void 0:t}function i0(t){return t.instantiationMode==="EAGER"}/**
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
 */class s0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const r0={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},o0=re.INFO,a0={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},l0=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=a0[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fs{constructor(e){this.name=e,this._logLevel=o0,this._logHandler=l0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?r0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const c0=(t,e)=>e.some(n=>t instanceof n);let jd,Bd;function u0(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h0(){return Bd||(Bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pm=new WeakMap,hc=new WeakMap,gm=new WeakMap,cl=new WeakMap,Cu=new WeakMap;function d0(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ln(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pm.set(n,t)}).catch(()=>{}),Cu.set(e,t),e}function f0(t){if(hc.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hc.set(t,e)}let dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p0(t){dc=t(dc)}function g0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ul(this),e,...n);return gm.set(i,e.sort?e.sort():[e]),Ln(i)}:h0().includes(t)?function(...e){return t.apply(ul(this),e),Ln(pm.get(this))}:function(...e){return Ln(t.apply(ul(this),e))}}function m0(t){return typeof t=="function"?g0(t):(t instanceof IDBTransaction&&f0(t),c0(t,u0())?new Proxy(t,dc):t)}function Ln(t){if(t instanceof IDBRequest)return d0(t);if(cl.has(t))return cl.get(t);const e=m0(t);return e!==t&&(cl.set(t,e),Cu.set(e,t)),e}const ul=t=>Cu.get(t);function _0(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ln(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const y0=["get","getKey","getAll","getAllKeys","count"],v0=["put","add","delete","clear"],hl=new Map;function Hd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hl.get(e))return hl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=v0.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||y0.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return hl.set(e,r),r}p0(t=>({...t,get:(e,n,i)=>Hd(e,n)||t.get(e,n,i),has:(e,n)=>!!Hd(e,n)||t.has(e,n)}));/**
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
 */class w0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function E0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",Vd="0.9.19";/**
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
 */const Ei=new fs("@firebase/app"),I0="@firebase/app-compat",T0="@firebase/analytics-compat",b0="@firebase/analytics",C0="@firebase/app-check-compat",S0="@firebase/app-check",R0="@firebase/auth",A0="@firebase/auth-compat",k0="@firebase/database",P0="@firebase/database-compat",O0="@firebase/functions",N0="@firebase/functions-compat",x0="@firebase/installations",D0="@firebase/installations-compat",M0="@firebase/messaging",L0="@firebase/messaging-compat",F0="@firebase/performance",U0="@firebase/performance-compat",$0="@firebase/remote-config",j0="@firebase/remote-config-compat",B0="@firebase/storage",H0="@firebase/storage-compat",V0="@firebase/firestore",W0="@firebase/firestore-compat",K0="firebase",q0="10.4.0";/**
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
 */const pc="[DEFAULT]",z0={[fc]:"fire-core",[I0]:"fire-core-compat",[b0]:"fire-analytics",[T0]:"fire-analytics-compat",[S0]:"fire-app-check",[C0]:"fire-app-check-compat",[R0]:"fire-auth",[A0]:"fire-auth-compat",[k0]:"fire-rtdb",[P0]:"fire-rtdb-compat",[O0]:"fire-fn",[N0]:"fire-fn-compat",[x0]:"fire-iid",[D0]:"fire-iid-compat",[M0]:"fire-fcm",[L0]:"fire-fcm-compat",[F0]:"fire-perf",[U0]:"fire-perf-compat",[$0]:"fire-rc",[j0]:"fire-rc-compat",[B0]:"fire-gcs",[H0]:"fire-gcs-compat",[V0]:"fire-fst",[W0]:"fire-fst-compat","fire-js":"fire-js",[K0]:"fire-js-all"};/**
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
 */const jo=new Map,gc=new Map;function G0(t,e){try{t.container.addComponent(e)}catch(n){Ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ct(t){const e=t.name;if(gc.has(e))return Ei.debug(`There were multiple attempts to register component ${e}.`),!1;gc.set(e,t);for(const n of jo.values())G0(n,t);return!0}function Or(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Y0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fn=new zn("app","Firebase",Y0);/**
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
 */class X0{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=q0;function mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:pc,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Fn.create("bad-app-name",{appName:String(s)});if(n||(n=am()),!n)throw Fn.create("no-options");const r=jo.get(s);if(r){if($o(n,r.options)&&$o(i,r.config))return r;throw Fn.create("duplicate-app",{appName:s})}const o=new s0(s);for(const l of gc.values())o.addComponent(l);const a=new X0(n,i,o);return jo.set(s,a),a}function Su(t=pc){const e=jo.get(t);if(!e&&t===pc&&am())return mm();if(!e)throw Fn.create("no-app",{appName:t});return e}function Fe(t,e,n){var i;let s=(i=z0[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ei.warn(a.join(" "));return}ct(new nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const J0="firebase-heartbeat-database",Q0=1,dr="firebase-heartbeat-store";let dl=null;function _m(){return dl||(dl=_0(J0,Q0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(dr)}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),dl}async function Z0(t){try{return await(await _m()).transaction(dr).objectStore(dr).get(ym(t))}catch(e){if(e instanceof Et)Ei.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ei.warn(n.message)}}}async function Wd(t,e){try{const i=(await _m()).transaction(dr,"readwrite");await i.objectStore(dr).put(e,ym(t)),await i.done}catch(n){if(n instanceof Et)Ei.warn(n.message);else{const i=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ei.warn(i.message)}}}function ym(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eC=1024,tC=30*24*60*60*1e3;class nC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=tC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kd(),{heartbeatsToSend:n,unsentEntries:i}=iC(this._heartbeatsCache.heartbeats),s=Lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Kd(){return new Date().toISOString().substring(0,10)}function iC(t,e=eC){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),qd(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qd(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class sC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bu()?dm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Z0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qd(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rC(t){ct(new nt("platform-logger",e=>new w0(e),"PRIVATE")),ct(new nt("heartbeat",e=>new nC(e),"PRIVATE")),Fe(fc,Vd,t),Fe(fc,Vd,"esm2017"),Fe("fire-js","")}rC("");function Ru(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function zd(t){return t!==void 0&&t.enterprise!==void 0}class oC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function vm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aC=vm,wm=new zn("auth","Firebase",vm());/**
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
 */const Bo=new fs("@firebase/auth");function lC(t,...e){Bo.logLevel<=re.WARN&&Bo.warn(`Auth (${Gn}): ${t}`,...e)}function To(t,...e){Bo.logLevel<=re.ERROR&&Bo.error(`Auth (${Gn}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw Au(t,...e)}function Jt(t,...e){return Au(t,...e)}function cC(t,e,n){const i=Object.assign(Object.assign({},aC()),{[e]:n});return new zn("auth","Firebase",i).create(e,{appName:t.name})}function Au(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return wm.create(t,...e)}function H(t,e,...n){if(!t)throw Au(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function mn(t,e){t||cn(e)}/**
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
 */function mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uC(){return Gd()==="http:"||Gd()==="https:"}function Gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uC()||cm()||"connection"in navigator)?navigator.onLine:!0}function dC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Tu()||um()}get(){return hC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ku(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Em{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pC=new Nr(3e4,6e4);function Ni(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xi(t,e,n,i,s={}){return Im(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ds(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Em.fetch()(Tm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Im(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},fC),e);try{const s=new gC(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ro(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ro(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw cC(t,u,c);Mt(t,u)}}catch(s){if(s instanceof Et)throw s;Mt(t,"network-request-failed",{message:String(s)})}}async function xr(t,e,n,i,s={}){const r=await xi(t,e,n,i,s);return"mfaPendingCredential"in r&&Mt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Tm(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?ku(t.config,s):`${t.config.apiScheme}://${s}`}class gC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Jt(this.auth,"network-request-failed")),pC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Jt(t,e,i);return s.customData._tokenResponse=n,s}async function mC(t,e){return xi(t,"GET","/v2/recaptchaConfig",Ni(t,e))}/**
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
 */async function _C(t,e){return xi(t,"POST","/v1/accounts:delete",e)}async function yC(t,e){return xi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vC(t,e=!1){const n=wn(t),i=await n.getIdToken(e),s=Pu(i);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ys(fl(s.auth_time)),issuedAtTime:Ys(fl(s.iat)),expirationTime:Ys(fl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fl(t){return Number(t)*1e3}function Pu(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fo(n);return s?JSON.parse(s):(To("Failed to decode base64 JWT payload"),null)}catch(s){return To("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wC(t){const e=Pu(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Et&&EC(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function EC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(t){var e;const n=t.auth,i=await t.getIdToken(),s=await fr(t,yC(n,{idToken:i}));H(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?CC(r.providerUserInfo):[],a=bC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new bm(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function TC(t){const e=wn(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bC(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function CC(t){return t.map(e=>{var{providerId:n}=e,i=Ru(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function SC(t,e){const n=await Im(t,{},async()=>{const i=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Tm(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Em.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await SC(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new pr;return i&&(H(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function Sn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mi{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bm(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await fr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vC(this,e)}reload(){return TC(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fr(this,_C(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:q,isAnonymous:F,providerData:pe,stsTokenManager:Ce}=n;H(D&&Ce,e,"internal-error");const $e=pr.fromJSON(this.name,Ce);H(typeof D=="string",e,"internal-error"),Sn(h,e.name),Sn(d,e.name),H(typeof q=="boolean",e,"internal-error"),H(typeof F=="boolean",e,"internal-error"),Sn(g,e.name),Sn(_,e.name),Sn(C,e.name),Sn(R,e.name),Sn(x,e.name),Sn($,e.name);const Ae=new mi({uid:D,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:F,photoURL:_,phoneNumber:g,tenantId:C,stsTokenManager:$e,createdAt:x,lastLoginAt:$});return pe&&Array.isArray(pe)&&(Ae.providerData=pe.map(it=>Object.assign({},it))),R&&(Ae._redirectEventId=R),Ae}static async _fromIdTokenResponse(e,n,i=!1){const s=new pr;s.updateFromServerResponse(n);const r=new mi({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ho(r),r}}/**
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
 */const Yd=new Map;function un(t){mn(t instanceof Function,"Expected a class definition");let e=Yd.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yd.set(t,e),e)}/**
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
 */class Cm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cm.type="NONE";const Xd=Cm;/**
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
 */function bo(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=bo(this.userKey,s.apiKey,r),this.fullPersistenceKey=bo("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Zi(un(Xd),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||un(Xd);const o=bo(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=mi._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Zi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Zi(r,e,i))}}/**
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
 */function Jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pm(e))return"Blackberry";if(Om(e))return"Webos";if(Ou(e))return"Safari";if((e.includes("chrome/")||Rm(e))&&!e.includes("edge/"))return"Chrome";if(km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Sm(t=Xe()){return/firefox\//i.test(t)}function Ou(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rm(t=Xe()){return/crios\//i.test(t)}function Am(t=Xe()){return/iemobile/i.test(t)}function km(t=Xe()){return/android/i.test(t)}function Pm(t=Xe()){return/blackberry/i.test(t)}function Om(t=Xe()){return/webos/i.test(t)}function ka(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RC(t=Xe()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AC(){return Ub()&&document.documentMode===10}function Nm(t=Xe()){return ka(t)||km(t)||Om(t)||Pm(t)||/windows phone/i.test(t)||Am(t)}function kC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function xm(t,e=[]){let n;switch(t){case"Browser":n=Jd(Xe());break;case"Worker":n=`${Jd(Xe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${i}`}/**
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
 */class PC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function OC(t,e={}){return xi(t,"GET","/v2/passwordPolicy",Ni(t,e))}/**
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
 */const NC=6;class xC{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class DC{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qd(this),this.idTokenSubscription=new Qd(this),this.beforeStateQueue=new PC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?wn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OC(this),n=new xC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(t){return wn(t)}class Qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=qb(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function MC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Dm(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Jt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",MC().appendChild(i)})}function LC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FC="https://www.google.com/recaptcha/enterprise.js?render=",UC="recaptcha-enterprise",$C="NO_RECAPTCHA";class jC{constructor(e){this.type=UC,this.auth=Di(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{mC(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new oC(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;zd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o($C)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&zd(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Dm(FC+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Vo(t,e,n,i=!1){const s=new jC(t);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function BC(t,e){const n=Or(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if($o(r,e??{}))return s;Mt(s,"already-initialized")}return n.initialize({options:e})}function HC(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function VC(t,e,n){const i=Di(t);H(i._canInitEmulator,i,"emulator-config-failed"),H(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Mm(e),{host:o,port:a}=WC(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||KC()}function Mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WC(t){const e=Mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Zd(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Zd(o)}}}function Zd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function qC(t,e){return xi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pl(t,e){return xr(t,"POST","/v1/accounts:signInWithPassword",Ni(t,e))}/**
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
 */async function zC(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}async function GC(t,e){return xr(t,"POST","/v1/accounts:signInWithEmailLink",Ni(t,e))}/**
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
 */class gr extends Nu{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new gr(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new gr(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Vo(e,i,"signInWithPassword");return pl(e,s)}else return pl(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Vo(e,i,"signInWithPassword");return pl(e,r)}else return Promise.reject(s)});case"emailLink":return zC(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GC(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function es(t,e){return xr(t,"POST","/v1/accounts:signInWithIdp",Ni(t,e))}/**
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
 */const YC="http://localhost";class Ii extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Ru(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ii(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,es(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:YC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ds(n)}return e}}/**
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
 */function XC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JC(t){const e=Ls(Fs(t)).link,n=e?Ls(Fs(e)).deep_link_id:null,i=Ls(Fs(t)).deep_link_id;return(i?Ls(Fs(i)).link:null)||i||n||e||t}class xu{constructor(e){var n,i,s,r,o,a;const l=Ls(Fs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=XC((s=l.mode)!==null&&s!==void 0?s:null);H(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JC(e);try{return new xu(n)}catch{return null}}}/**
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
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return gr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=xu.parseLink(n);return H(i,"argument-error"),gr._fromEmailAndCode(e,i.code,i.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends Lm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class On extends Dr{constructor(){super("facebook.com")}static credential(e){return Ii._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ii._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Nn.credential(n,i)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class xn extends Dr{constructor(){super("github.com")}static credential(e){return Ii._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
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
 */class Dn extends Dr{constructor(){super("twitter.com")}static credential(e,n){return Ii._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Dn.credential(n,i)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function gl(t,e){return xr(t,"POST","/v1/accounts:signUp",Ni(t,e))}/**
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
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await mi._fromIdTokenResponse(e,i,s),o=ef(i);return new Ti({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=ef(i);return new Ti({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wo extends Et{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Wo(e,n,i,s)}}function Fm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(t,r,e,i):r})}async function QC(t,e,n=!1){const i=await fr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",i)}/**
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
 */async function ZC(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await fr(t,Fm(i,s,e,t),n);H(r.idToken,i,"internal-error");const o=Pu(r.idToken);H(o,i,"internal-error");const{sub:a}=o;return H(t.uid===a,i,"user-mismatch"),Ti._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Mt(i,"user-mismatch"),r}}/**
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
 */async function Um(t,e,n=!1){const i="signIn",s=await Fm(t,i,e),r=await Ti._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function eS(t,e){return Um(Di(t),e)}/**
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
 */async function $m(t){const e=Di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tS(t,e,n){var i;const s=Di(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Vo(s,r,"signUpPassword");o=gl(s,c)}else o=gl(s,r).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Vo(s,r,"signUpPassword");return gl(s,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&$m(t),c}),l=await Ti._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function nS(t,e,n){return eS(wn(t),ps.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&$m(t),i})}function jm(t,e,n,i){return wn(t).onIdTokenChanged(e,n,i)}function iS(t,e,n){return wn(t).beforeAuthStateChanged(e,n)}const Ko="__sak";/**
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
 */class Bm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sS(){const t=Xe();return Ou(t)||ka(t)}const rS=1e3,oS=10;class Hm extends Bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sS()&&kC(),this.fallbackToPolling=Nm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);AC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oS):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hm.type="LOCAL";const aS=Hm;/**
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
 */class Vm extends Bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vm.type="SESSION";const Wm=Vm;/**
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
 */function lS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Pa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await lS(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
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
 */function Du(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Du("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function uS(t){Qt().location.href=t}/**
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
 */function Km(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function hS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fS(){return Km()?self:null}/**
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
 */const qm="firebaseLocalStorageDb",pS=1,qo="firebaseLocalStorage",zm="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([qo],e?"readwrite":"readonly").objectStore(qo)}function gS(){const t=indexedDB.deleteDatabase(qm);return new Mr(t).toPromise()}function _c(){const t=indexedDB.open(qm,pS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(qo,{keyPath:zm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(qo)?e(i):(i.close(),await gS(),e(await _c()))})})}async function tf(t,e,n){const i=Oa(t,!0).put({[zm]:e,value:n});return new Mr(i).toPromise()}async function mS(t,e){const n=Oa(t,!1).get(e),i=await new Mr(n).toPromise();return i===void 0?null:i.value}function nf(t,e){const n=Oa(t,!0).delete(e);return new Mr(n).toPromise()}const _S=800,yS=3;class Gm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>yS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(fS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hS(),!this.activeServiceWorker)return;this.sender=new cS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _c();return await tf(e,Ko,"1"),await nf(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>tf(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>mS(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Oa(s,!1).getAll();return new Mr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gm.type="LOCAL";const vS=Gm;new Nr(3e4,6e4);/**
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
 */function wS(t,e){return e?un(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mu extends Nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ES(t){return Um(t.auth,new Mu(t),t.bypassAuthState)}function IS(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),ZC(n,new Mu(t),t.bypassAuthState)}async function TS(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),QC(n,new Mu(t),t.bypassAuthState)}/**
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
 */class Ym{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ES;case"linkViaPopup":case"linkViaRedirect":return TS;case"reauthViaPopup":case"reauthViaRedirect":return IS;default:Mt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bS=new Nr(2e3,1e4);class Ki extends Ym{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ki.currentPopupAction&&Ki.currentPopupAction.cancel(),Ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bS.get())};e()}}Ki.currentPopupAction=null;/**
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
 */const CS="pendingRedirect",Co=new Map;class SS extends Ym{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const i=await RS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RS(t,e){const n=PS(e),i=kS(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function AS(t,e){Co.set(t._key(),e)}function kS(t){return un(t._redirectPersistence)}function PS(t){return bo(CS,t.config.apiKey,t.name)}async function OS(t,e,n=!1){const i=Di(t),s=wS(i,e),o=await new SS(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const NS=10*60*1e3;class xS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Xm(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NS&&this.cachedEventUids.clear(),this.cachedEventUids.has(sf(e))}saveEventToCache(e){this.cachedEventUids.add(sf(e)),this.lastProcessedEventTime=Date.now()}}function sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xm(t);default:return!1}}/**
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
 */async function MS(t,e={}){return xi(t,"GET","/v1/projects",e)}/**
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
 */const LS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FS=/^https?/;async function US(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MS(t);for(const n of e)try{if($S(n))return}catch{}Mt(t,"unauthorized-domain")}function $S(t){const e=mc(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!FS.test(n))return!1;if(LS.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const jS=new Nr(3e4,6e4);function rf(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BS(t){return new Promise((e,n)=>{var i,s,r;function o(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(Jt(t,"network-request-failed"))},timeout:jS.get()})}if(!((s=(i=Qt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Qt().gapi)===null||r===void 0)&&r.load)o();else{const a=LC("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},Dm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw So=null,e})}let So=null;function HS(t){return So=So||BS(t),So}/**
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
 */const VS=new Nr(5e3,15e3),WS="__/auth/iframe",KS="emulator/auth/iframe",qS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GS(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,KS):`https://${t.config.authDomain}/${WS}`,i={apiKey:e.apiKey,appName:t.name,v:Gn},s=zS.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ds(i).slice(1)}`}async function YS(t){const e=await HS(t),n=Qt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:GS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Qt().setTimeout(()=>{r(o)},VS.get());function l(){Qt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const XS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JS=500,QS=600,ZS="_blank",eR="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tR(t,e,n,i=JS,s=QS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XS),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Xe().toLowerCase();n&&(a=Rm(c)?ZS:n),Sm(c)&&(e=e||eR,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(RC(c)&&a!=="_self")return nR(e||"",a),new of(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new of(h)}function nR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const iR="__/auth/handler",sR="emulator/auth/handler",rR=encodeURIComponent("fac");async function af(t,e,n,i,s,r){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Gn,eventId:s};if(e instanceof Lm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Dr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${rR}=${encodeURIComponent(l)}`:"";return`${oR(t)}?${ds(a).slice(1)}${c}`}function oR({config:t}){return t.emulator?ku(t,sR):`https://${t.authDomain}/${iR}`}/**
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
 */const ml="webStorageSupport";class aR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wm,this._completeRedirectFn=OS,this._overrideRedirectResult=AS}async _openPopup(e,n,i,s){var r;mn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await af(e,n,i,mc(),s);return tR(e,o,Du())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await af(e,n,i,mc(),s);return uS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(mn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await YS(e),i=new xS(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ml,{type:ml},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ml];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=US(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nm()||Ou()||ka()}}const lR=aR;var lf="@firebase/auth",cf="1.3.0";/**
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
 */class cR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hR(t){ct(new nt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xm(t)},c=new DC(i,s,r,l);return HC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ct(new nt("auth-internal",e=>{const n=Di(e.getProvider("auth").getImmediate());return(i=>new cR(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(lf,cf,uR(t)),Fe(lf,cf,"esm2017")}/**
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
 */const dR=5*60,fR=lm("authIdTokenMaxAge")||dR;let uf=null;const pR=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>fR)return;const s=n==null?void 0:n.token;uf!==s&&(uf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jm(t=Su()){const e=Or(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BC(t,{popupRedirectResolver:lR,persistence:[vS,aS,Wm]}),i=lm("authTokenSyncURL");if(i){const r=pR(i);iS(n,r,()=>r(n.currentUser)),jm(n,o=>r(o))}const s=om("auth");return s&&VC(n,`http://${s}`),n}hR("Browser");/**
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
 */const gR=new Map,mR={activated:!1,tokenObservers:[]};function Lt(t){return gR.get(t)||Object.assign({},mR)}const hf={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class _R{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ur,await yR(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ur,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function yR(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const vR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},zo=new zn("appCheck","AppCheck",vR);function Qm(t){if(!Lt(t).activated)throw zo.create("use-before-activation",{appName:t.name})}/**
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
 */const wR="firebase-app-check-database",ER=1,yc="firebase-app-check-store";let oo=null;function IR(){return oo||(oo=new Promise((t,e)=>{try{const n=indexedDB.open(wR,ER);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(zo.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(yc,{keyPath:"compositeKey"})}}}catch(n){e(zo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),oo)}function TR(t,e){return bR(CR(t),e)}async function bR(t,e){const i=(await IR()).transaction(yc,"readwrite"),r=i.objectStore(yc).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(zo.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function CR(t){return`${t.options.appId}-${t.name}`}/**
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
 */const vc=new fs("@firebase/app-check");function df(t,e){return bu()?TR(t,e).catch(n=>{vc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const SR={error:"UNKNOWN_ERROR"};function RR(t){return Ra.encodeString(JSON.stringify(t),!1)}async function wc(t,e=!1){const n=t.app;Qm(n);const i=Lt(n);let s=i.token,r;if(s&&!Us(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Us(l)?s=l:await df(n,void 0))}if(!e&&s&&Us(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Lt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?vc.warn(l.message):vc.error(l),r=l}let a;return s?r?Us(s)?a={token:s.token,internalError:r}:a=pf(r):(a={token:s.token},i.token=s,await df(n,s)):a=pf(r),o&&OR(n,a),a}async function AR(t){const e=t.app;Qm(e);const{provider:n}=Lt(e);{const{token:i}=await n.getToken();return{token:i}}}function kR(t,e,n,i){const{app:s}=t,r=Lt(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Us(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ff(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ff(t))}function Zm(t,e){const n=Lt(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function ff(t){const{app:e}=t,n=Lt(e);let i=n.tokenRefresher;i||(i=PR(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function PR(t){const{app:e}=t;return new _R(async()=>{const n=Lt(e);let i;if(n.token?i=await wc(t,!0):i=await wc(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Lt(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},hf.RETRIAL_MIN_WAIT,hf.RETRIAL_MAX_WAIT)}function OR(t,e){const n=Lt(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Us(t){return t.expireTimeMillis-Date.now()>0}function pf(t){return{token:RR(SR),error:t}}/**
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
 */class NR{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Lt(this.app);for(const n of e)Zm(this.app,n.next);return Promise.resolve()}}function xR(t,e){return new NR(t,e)}function DR(t){return{getToken:e=>wc(t,e),getLimitedUseToken:()=>AR(t),addTokenListener:e=>kR(t,"INTERNAL",e),removeTokenListener:e=>Zm(t.app,e)}}const MR="@firebase/app-check",LR="0.8.0",FR="app-check",gf="app-check-internal";function UR(){ct(new nt(FR,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return xR(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(gf).initialize()})),ct(new nt(gf,t=>{const e=t.getProvider("app-check").getImmediate();return DR(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Fe(MR,LR)}UR();var $R="firebase",jR="10.4.0";/**
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
 */Fe($R,jR,"app");const e_=Symbol("firebaseApp");function BR(t){return _u()&&Gt(e_,null)||Su(t)}const ao=new WeakMap;function HR(t,e){if(!ao.has(t)){const n=lw(!0);ao.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),ao.delete(t)}}return ao.get(t)}const VR=new WeakMap,lo=new WeakMap;function WR(t){const e=BR(t);if(!lo.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{lo.set(e,r),n(r.value)}];lo.set(e,s)}return lo.get(e)}function KR(t,e){const n=Jm(e);jm(n,i=>{const s=WR();t.value=i,Array.isArray(s)&&s[1](t)})}const mf="@firebase/database",_f="1.0.1";/**
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
 */let t_="";function qR(t){t_=t}/**
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
 */class zR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class GR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const n_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zR(e)}}catch{}return new GR},oi=n_("localStorage"),Ec=n_("sessionStorage");/**
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
 */const ts=new fs("@firebase/database"),YR=function(){let t=1;return function(){return t++}}(),i_=function(t){const e=Xb(t),n=new Kb;n.update(e);const i=n.digest();return Ra.encodeByteArray(i)},Lr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Lr.apply(null,i):typeof i=="object"?e+=Le(i):e+=i,e+=" "}return e};let _i=null,yf=!0;const XR=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ts.logLevel=re.VERBOSE,_i=ts.log.bind(ts),e&&Ec.set("logging_enabled",!0)):typeof t=="function"?_i=t:(_i=null,Ec.remove("logging_enabled"))},Be=function(...t){if(yf===!0&&(yf=!1,_i===null&&Ec.get("logging_enabled")===!0&&XR(!0)),_i){const e=Lr.apply(null,t);_i(e)}},Fr=function(t){return function(...e){Be(t,...e)}},Ic=function(...t){const e="FIREBASE INTERNAL ERROR: "+Lr(...t);ts.error(e)},bi=function(...t){const e=`FIREBASE FATAL ERROR: ${Lr(...t)}`;throw ts.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+Lr(...t);ts.warn(e)},JR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},s_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},QR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ls="[MIN_NAME]",Ci="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===ls||e===Ci)return-1;if(e===ls||t===Ci)return 1;{const n=vf(t),i=vf(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},ZR=function(t,e){return t===e?0:t<e?-1:1},Ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Le(e))},Lu=function(t){if(typeof t!="object"||t===null)return Le(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Le(e[i]),n+=":",n+=Lu(t[e[i]]);return n+="}",n},r_=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const o_=function(t){k(!s_(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},eA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},nA=new RegExp("^-?(0*)\\d{1,10}$"),iA=-2147483648,sA=2147483647,vf=function(t){if(nA.test(t)){const e=Number(t);if(e>=iA&&e<=sA)return e}return null},Ur=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},rA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class aA{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Tc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tc.OWNER="owner";/**
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
 */const Fu="5",a_="v",l_="s",c_="r",u_="f",h_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,d_="ls",f_="p",bc="ac",p_="websocket",g_="long_polling";/**
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
 */class lA{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function m_(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let i;if(e===p_)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===g_)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cA(t)&&(n.ns=t.namespace);const s=[];return vt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class uA{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pb(this.counters_)}}/**
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
 */const _l={},yl={};function Uu(t){const e=t.toString();return _l[e]||(_l[e]=new uA),_l[e]}function hA(t,e){const n=t.toString();return yl[n]||(yl[n]=e()),yl[n]}/**
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
 */class dA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ur(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const wf="start",fA="close",pA="pLPCommand",gA="pRTLPCB",__="id",y_="pw",v_="ser",mA="cb",_A="seg",yA="ts",vA="d",wA="dframe",w_=1870,E_=30,EA=w_-E_,IA=25e3,TA=3e4;class qi{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fr(e),this.stats_=Uu(n),this.urlFn=l=>(this.appCheckToken&&(l[bc]=this.appCheckToken),m_(n,g_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TA)),QR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $u((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wf)this.id=a,this.password=l;else if(o===fA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[wf]="t",i[v_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[mA]=this.scriptTagHolder.uniqueCallbackIdentifier),i[a_]=Fu,this.transportSessionId&&(i[l_]=this.transportSessionId),this.lastSessionId&&(i[d_]=this.lastSessionId),this.applicationId&&(i[f_]=this.applicationId),this.appCheckToken&&(i[bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&h_.test(location.hostname)&&(i[c_]=u_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qi.forceAllow_=!0}static forceDisallow(){qi.forceDisallow_=!0}static isAvailable(){return qi.forceAllow_?!0:!qi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eA()&&!tA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=sm(n),s=r_(i,EA);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[wA]="t",i[__]=e,i[y_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $u{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YR(),window[pA+this.uniqueCallbackIdentifier]=e,window[gA+this.uniqueCallbackIdentifier]=n,this.myIFrame=$u.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Be("frame writing exception"),a.stack&&Be(a.stack),Be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Be("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[__]=this.myID,e[y_]=this.myPW,e[v_]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+E_+i.length<=w_;){const o=this.pendingSegs.shift();i=i+"&"+_A+s+"="+o.seg+"&"+yA+s+"="+o.ts+"&"+vA+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(IA)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const bA=16384,CA=45e3;let Go=null;typeof MozWebSocket<"u"?Go=MozWebSocket:typeof WebSocket<"u"&&(Go=WebSocket);class At{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fr(this.connId),this.stats_=Uu(n),this.connURL=At.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[a_]=Fu,typeof location<"u"&&location.hostname&&h_.test(location.hostname)&&(o[c_]=u_),n&&(o[l_]=n),i&&(o[d_]=i),s&&(o[bc]=s),r&&(o[f_]=r),m_(e,p_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oi.set("previous_websocket_failure",!0);try{let i;hm(),this.mySock=new Go(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Go!==null&&!At.forceDisallow_}static previouslyFailed(){return oi.isInMemoryStorage||oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){oi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=hr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=r_(n,bA);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(CA))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}At.responsesRequiredToBeHealthy=2;At.healthyTimeout=3e4;/**
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
 */class mr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qi,At]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=At&&At.isAvailable();let i=n&&!At.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[At];else{const s=this.transports_=[];for(const r of mr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);mr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mr.globalTransportInitialized_=!1;/**
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
 */const SA=6e4,RA=5e3,AA=10*1024,kA=100*1024,vl="t",Ef="d",PA="s",If="r",OA="e",Tf="o",bf="a",Cf="n",Sf="p",NA="h";class xA{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fr("c:"+this.id+":"),this.transportManager_=new mr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Xs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vl in e){const n=e[vl];n===bf?this.upgradeIfSecondaryHealthy_():n===If?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),i=Ss("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Cf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),i=Ss("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(vl,e);if(Ef in e){const i=e[Ef];if(n===NA){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Cf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PA?this.onConnectionShutdown_(i):n===If?this.onReset_(i):n===OA?Ic("Server Error: "+i):n===Tf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ic("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fu!==i&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Xs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class I_{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class T_{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Yo extends T_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yo}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Rf=32,Af=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new ye("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Kn(t){return t.pieces_.length-t.pieceNum_}function me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function b_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function C_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function S_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Oe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ye)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new ye(n,0)}function Z(t){return t.pieceNum_>=t.pieces_.length}function _t(t,e){const n=ie(t),i=ie(e);if(n===null)return e;if(n===i)return _t(me(t),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function R_(t,e){if(Kn(t)!==Kn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Kn(t)>Kn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class MA{constructor(e,n){this.errorPrefix_=n,this.parts_=C_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Aa(this.parts_[i]);A_(this)}}function LA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Aa(e),A_(t)}function FA(t){const e=t.parts_.pop();t.byteLength_-=Aa(e),t.parts_.length>0&&(t.byteLength_-=1)}function A_(t){if(t.byteLength_>Af)throw new Error(t.errorPrefix_+"has a key path longer than "+Af+" bytes ("+t.byteLength_+").");if(t.parts_.length>Rf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rf+") or object contains a cycle "+ii(t))}function ii(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ju extends T_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ju}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Rs=1e3,UA=60*5*1e3,kf=30*1e3,$A=1.3,jA=3e4,BA="server_kill",Pf=3;class gn extends I_{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gn.nextPersistentConnectionId_++,this.log_=Fr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rs,this.maxReconnectDelay_=UA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ju.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Le(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new ur,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;gn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const i=as(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Vb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ic("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jA&&(this.reconnectDelay_=Rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$A)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+gn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Be("getToken() completed but was canceled"):(Be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new xA(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{ht(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BA)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ht(h),l())}}}interrupt(e){Be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],uc(this.interruptReasons_)&&(this.reconnectDelay_=Rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Lu(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new ye(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pf&&(this.reconnectDelay_=kf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+t_.replace(/\./g,"-")]=1,Tu()?e["framework.cordova"]=1:um()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yo.getInstance().currentlyOnline();return uc(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
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
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
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
 */class Na{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new se(ls,e),s=new se(ls,n);return this.compare(i,s)!==0}minPost(){return se.MIN}}/**
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
 */let co;class k_ extends Na{static get __EMPTY_NODE(){return co}static set __EMPTY_NODE(e){co=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Ci,co)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,co)}toString(){return".key"}}const ns=new k_;/**
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
 */class uo{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Pe.RED,this.left=s??at.EMPTY_NODE,this.right=r??at.EMPTY_NODE}copy(e,n,i,s,r){return new Pe(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return at.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class HA{copy(e,n,i,s,r){return this}insert(e,n,i){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class at{constructor(e,n=at.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new at(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new at(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new uo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new uo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new uo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new uo(this.root_,null,this.comparator_,!0,e)}}at.EMPTY_NODE=new HA;/**
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
 */function VA(t,e){return gs(t.name,e.name)}function Bu(t,e){return gs(t,e)}/**
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
 */let Cc;function WA(t){Cc=t}const P_=function(t){return typeof t=="number"?"number:"+o_(t):"string:"+t},O_=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else k(t===Cc||t.isEmpty(),"priority of unexpected type.");k(t===Cc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Of;class ke{constructor(e,n=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),O_(this.priorityNode_)}static set __childrenNodeConstructor(e){Of=e}static get __childrenNodeConstructor(){return Of}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Z(e)?this:ie(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=ie(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(k(i!==".priority"||Kn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+P_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=o_(this.value_):e+=this.value_,this.lazyHash_=i_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ke.VALUE_TYPE_ORDER.indexOf(n),r=ke.VALUE_TYPE_ORDER.indexOf(i);return k(s>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let N_,x_;function KA(t){N_=t}function qA(t){x_=t}class zA extends Na{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Ci,new ke("[PRIORITY-POST]",x_))}makePost(e,n){const i=N_(e);return new se(n,new ke("[PRIORITY-POST]",i))}toString(){return".priority"}}const qe=new zA;/**
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
 */const GA=Math.log(2);class YA{constructor(e){const n=r=>parseInt(Math.log(r)/GA,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xo=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=s(l,g),C=s(g+1,c);return h=t[g],d=n?n(h):h,new Pe(d,h.node,Pe.BLACK,_,C)}},r=function(l){let c=null,u=null,h=t.length;const d=function(_,C){const R=h-_,x=h;h-=_;const $=s(R+1,x),D=t[R],q=n?n(D):D;g(new Pe(q,D.node,C,null,$))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),R=Math.pow(2,l.count-(_+1));C?d(R,Pe.BLACK):(d(R,Pe.BLACK),d(R,Pe.RED))}return u},o=new YA(t.length),a=r(o);return new at(i||e,a)};/**
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
 */let wl;const ji={};class hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(ji&&qe,"ChildrenNode.ts has not been loaded"),wl=wl||new hn({".priority":ji},{".priority":qe}),wl}get(e){const n=as(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof at?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(se.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Xo(i,e.getCompare()):a=ji;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new hn(u,c)}addToIndexes(e,n){const i=Uo(this.indexes_,(s,r)=>{const o=as(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),s===ji)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(se.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xo(a,o.getCompare())}else return ji;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new se(e.name,a))),l.insert(e,e.node)}});return new hn(i,this.indexSet_)}removeFromIndexes(e,n){const i=Uo(this.indexes_,s=>{if(s===ji)return s;{const r=n.get(e.name);return r?s.remove(new se(e.name,r)):s}});return new hn(i,this.indexSet_)}}/**
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
 */let As;class ae{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&O_(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return As||(As=new ae(new at(Bu),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||As}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?As:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new se(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?As:this.priorityNode_;return new ae(s,o,r)}}updateChild(e,n){const i=ie(e);if(i===null)return n;{k(ie(e)!==".priority"||Kn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(me(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(qe,(o,a)=>{n[o]=a.val(e),i++,r&&ae.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+P_(this.getPriority().val())+":"),this.forEachChild(qe,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":i_(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new se(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$r?-1:0}withIndex(e){if(e===ns||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(qe),s=n.getIterator(qe);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ns?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XA extends ae{constructor(){super(new at(Bu),ae.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const $r=new XA;Object.defineProperties(se,{MIN:{value:new se(ls,ae.EMPTY_NODE)},MAX:{value:new se(Ci,$r)}});k_.__EMPTY_NODE=ae.EMPTY_NODE;ke.__childrenNodeConstructor=ae;WA($r);qA($r);/**
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
 */const JA=!0;function He(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ke(n,He(e))}if(!(t instanceof Array)&&JA){const n=[];let i=!1;if(vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new se(o,l)))}}),n.length===0)return ae.EMPTY_NODE;const r=Xo(n,VA,o=>o.name,Bu);if(i){const o=Xo(n,qe.getCompare());return new ae(r,He(e),new hn({".priority":o},{".priority":qe}))}else return new ae(r,He(e),hn.Default)}else{let n=ae.EMPTY_NODE;return vt(t,(i,s)=>{if(vn(t,i)&&i.substring(0,1)!=="."){const r=He(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(He(e))}}KA(He);/**
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
 */class QA extends Na{constructor(e){super(),this.indexPath_=e,k(!Z(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?gs(e.name,n.name):r}makePost(e,n){const i=He(e),s=ae.EMPTY_NODE.updateChild(this.indexPath_,i);return new se(n,s)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,$r);return new se(Ci,e)}toString(){return C_(this.indexPath_,0).join("/")}}/**
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
 */class ZA extends Na{compare(e,n){const i=e.node.compareTo(n.node);return i===0?gs(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const i=He(e);return new se(n,i)}toString(){return".value"}}const ek=new ZA;/**
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
 */function tk(t){return{type:"value",snapshotNode:t}}function nk(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ik(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Nf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=qe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ls}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===qe}copy(){const e=new Hu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===qe?n="$priority":t.index_===ek?n="$value":t.index_===ns?n="$key":(k(t.index_ instanceof QA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Le(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Le(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Le(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Le(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Df(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==qe&&(e.i=t.index_.toString()),e}/**
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
 */class Jo extends I_{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Fr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Jo.getListenId_(e,i),a={};this.listens_[o]=a;const l=xf(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),as(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=Jo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=xf(e._queryParams),i=e._path.toString(),s=new ur;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=hr(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class rk{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Qo(){return{value:null,children:new Map}}function D_(t,e,n){if(Z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=ie(e);t.children.has(i)||t.children.set(i,Qo());const s=t.children.get(i);e=me(e),D_(s,e,n)}}function Sc(t,e,n){t.value!==null?n(e,t.value):ok(t,(i,s)=>{const r=new ye(e.toString()+"/"+i);Sc(s,r,n)})}function ok(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class ak{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&vt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Mf=10*1e3,lk=30*1e3,ck=5*60*1e3;class uk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ak(e);const i=Mf+(lk-Mf)*Math.random();Xs(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;vt(e,(s,r)=>{r>0&&vn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Xs(this.reportStats_.bind(this),Math.floor(Math.random()*2*ck))}}/**
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
 */var Kt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function M_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function L_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function F_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Zo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Kt.ACK_USER_WRITE,this.source=M_()}operationForChild(e){if(Z(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Zo(he(),n,this.revert)}}else return k(ie(this.path)===e,"operationForChild called for unrelated child."),new Zo(me(this.path),this.affectedTree,this.revert)}}/**
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
 */class Si{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Kt.OVERWRITE}operationForChild(e){return Z(this.path)?new Si(this.source,he(),this.snap.getImmediateChild(e)):new Si(this.source,me(this.path),this.snap)}}/**
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
 */class _r{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Kt.MERGE}operationForChild(e){if(Z(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new Si(this.source,he(),n.value):new _r(this.source,he(),n)}else return k(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _r(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Vu{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Z(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function hk(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(sk(o.childName,o.snapshotNode))}),ks(t,s,"child_removed",e,i,n),ks(t,s,"child_added",e,i,n),ks(t,s,"child_moved",r,i,n),ks(t,s,"child_changed",e,i,n),ks(t,s,"value",e,i,n),s}function ks(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>fk(t,a,l)),o.forEach(a=>{const l=dk(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function dk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fk(t,e,n){if(e.childName==null||n.childName==null)throw hs("Should only compare child_ events.");const i=new se(e.childName,e.snapshotNode),s=new se(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function U_(t,e){return{eventCache:t,serverCache:e}}function Js(t,e,n,i){return U_(new Vu(e,n,i),t.serverCache)}function $_(t,e,n,i){return U_(t.eventCache,new Vu(e,n,i))}function Rc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let El;const pk=()=>(El||(El=new at(ZR)),El);class ge{constructor(e,n=pk()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return vt(e,(i,s)=>{n=n.set(new ye(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(Z(e))return null;{const i=ie(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(me(e),n);return r!=null?{path:Oe(new ye(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Z(e))return this;{const n=ie(e),i=this.children.get(n);return i!==null?i.subtree(me(e)):new ge(null)}}set(e,n){if(Z(e))return new ge(n,this.children);{const i=ie(e),r=(this.children.get(i)||new ge(null)).set(me(e),n),o=this.children.insert(i,r);return new ge(this.value,o)}}remove(e){if(Z(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=ie(e),i=this.children.get(n);if(i){const s=i.remove(me(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new ge(null):new ge(this.value,r)}else return this}}get(e){if(Z(e))return this.value;{const n=ie(e),i=this.children.get(n);return i?i.get(me(e)):null}}setTree(e,n){if(Z(e))return n;{const i=ie(e),r=(this.children.get(i)||new ge(null)).setTree(me(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new ge(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Oe(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Z(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(me(e),Oe(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,i){if(Z(e))return this;{this.value&&i(n,this.value);const s=ie(e),r=this.children.get(s);return r?r.foreachOnPath_(me(e),Oe(n,s),i):new ge(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Oe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Dt{constructor(e){this.writeTree_=e}static empty(){return new Dt(new ge(null))}}function Qs(t,e,n){if(Z(e))return new Dt(new ge(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=_t(s,e);return r=r.updateChild(o,n),new Dt(t.writeTree_.set(s,r))}else{const s=new ge(n),r=t.writeTree_.setTree(e,s);return new Dt(r)}}}function Lf(t,e,n){let i=t;return vt(n,(s,r)=>{i=Qs(i,Oe(e,s),r)}),i}function Ff(t,e){if(Z(e))return Dt.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new Dt(n)}}function Ac(t,e){return Mi(t,e)!=null}function Mi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function Uf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(qe,(i,s)=>{e.push(new se(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new se(i,s.value))}),e}function Un(t,e){if(Z(e))return t;{const n=Mi(t,e);return n!=null?new Dt(new ge(n)):new Dt(t.writeTree_.subtree(e))}}function kc(t){return t.writeTree_.isEmpty()}function cs(t,e){return j_(he(),t.writeTree_,e)}function j_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=j_(Oe(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Oe(t,".priority"),i)),n}}/**
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
 */function B_(t,e){return q_(e,t)}function gk(t,e,n,i,s){k(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Qs(t.visibleWrites,e,n)),t.lastWriteId=i}function mk(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function _k(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&yk(a,i.path)?s=!1:Pt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return vk(t),!0;if(i.snap)t.visibleWrites=Ff(t.visibleWrites,i.path);else{const a=i.children;vt(a,l=>{t.visibleWrites=Ff(t.visibleWrites,Oe(i.path,l))})}return!0}else return!1}function yk(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(Oe(t.path,n),e))return!0;return!1}function vk(t){t.visibleWrites=H_(t.allWrites,wk,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function wk(t){return t.visible}function H_(t,e,n){let i=Dt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Pt(n,o)?(a=_t(n,o),i=Qs(i,a,r.snap)):Pt(o,n)&&(a=_t(o,n),i=Qs(i,he(),r.snap.getChild(a)));else if(r.children){if(Pt(n,o))a=_t(n,o),i=Lf(i,a,r.children);else if(Pt(o,n))if(a=_t(o,n),Z(a))i=Lf(i,he(),r.children);else{const l=as(r.children,ie(a));if(l){const c=l.getChild(me(a));i=Qs(i,he(),c)}}}else throw hs("WriteRecord should have .snap or .children")}}return i}function V_(t,e,n,i,s){if(!i&&!s){const r=Mi(t.visibleWrites,e);if(r!=null)return r;{const o=Un(t.visibleWrites,e);if(kc(o))return n;if(n==null&&!Ac(o,he()))return null;{const a=n||ae.EMPTY_NODE;return cs(o,a)}}}else{const r=Un(t.visibleWrites,e);if(!s&&kc(r))return n;if(!s&&n==null&&!Ac(r,he()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Pt(c.path,e)||Pt(e,c.path))},a=H_(t.allWrites,o,e),l=n||ae.EMPTY_NODE;return cs(a,l)}}}function Ek(t,e,n){let i=ae.EMPTY_NODE;const s=Mi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(qe,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Un(t.visibleWrites,e);return n.forEachChild(qe,(o,a)=>{const l=cs(Un(r,new ye(o)),a);i=i.updateImmediateChild(o,l)}),Uf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Un(t.visibleWrites,e);return Uf(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ik(t,e,n,i,s){k(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Oe(e,n);if(Ac(t.visibleWrites,r))return null;{const o=Un(t.visibleWrites,r);return kc(o)?s.getChild(n):cs(o,s.getChild(n))}}function Tk(t,e,n,i){const s=Oe(e,n),r=Mi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Un(t.visibleWrites,s);return cs(o,i.getNode().getImmediateChild(n))}else return null}function bk(t,e){return Mi(t.visibleWrites,e)}function Ck(t,e,n,i,s,r,o){let a;const l=Un(t.visibleWrites,e),c=Mi(l,he());if(c!=null)a=c;else if(n!=null)a=cs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=d.getNext();for(;g&&u.length<s;)h(g,i)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Sk(){return{visibleWrites:Dt.empty(),allWrites:[],lastWriteId:-1}}function Pc(t,e,n,i){return V_(t.writeTree,t.treePath,e,n,i)}function W_(t,e){return Ek(t.writeTree,t.treePath,e)}function $f(t,e,n,i){return Ik(t.writeTree,t.treePath,e,n,i)}function ea(t,e){return bk(t.writeTree,Oe(t.treePath,e))}function Rk(t,e,n,i,s,r){return Ck(t.writeTree,t.treePath,e,n,i,s,r)}function Wu(t,e,n){return Tk(t.writeTree,t.treePath,e,n)}function K_(t,e){return q_(Oe(t.treePath,e),t.writeTree)}function q_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Ak{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Nf(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ik(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,nk(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Nf(i,e.snapshotNode,s.oldSnap));else throw hs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class kk{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const z_=new kk;class Ku{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Vu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wu(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ri(this.viewCache_),r=Rk(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Pk(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ok(t,e,n,i,s){const r=new Ak;let o,a;if(n.type===Kt.OVERWRITE){const c=n;c.source.fromUser?o=Oc(t,e,c.path,c.snap,i,s,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Z(c.path),o=ta(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Kt.MERGE){const c=n;c.source.fromUser?o=xk(t,e,c.path,c.children,i,s,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Nc(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Kt.ACK_USER_WRITE){const c=n;c.revert?o=Lk(t,e,c.path,i,s,r):o=Dk(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Kt.LISTEN_COMPLETE)o=Mk(t,e,n.path,i,r);else throw hs("Unknown operation type: "+n.type);const l=r.getChanges();return Nk(e,o,l),{viewCache:o,changes:l}}function Nk(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Rc(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(tk(Rc(e)))}}function G_(t,e,n,i,s,r){const o=e.eventCache;if(ea(i,n)!=null)return e;{let a,l;if(Z(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ri(e),u=c instanceof ae?c:ae.EMPTY_NODE,h=W_(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Pc(i,Ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ie(n);if(c===".priority"){k(Kn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=$f(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=me(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=$f(i,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Wu(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Js(e,a,o.isFullyInitialized()||Z(n),t.filter.filtersNodes())}}function ta(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Z(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),g,null)}else{const g=ie(n);if(!l.isCompleteForPath(n)&&Kn(n)>1)return e;const _=me(n),R=l.getNode().getImmediateChild(g).updateChild(_,i);g===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),g,R,_,z_,null)}const h=$_(e,c,l.isFullyInitialized()||Z(n),u.filtersNodes()),d=new Ku(s,h,r);return G_(t,h,n,s,d,a)}function Oc(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new Ku(s,e,r);if(Z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Js(e,c,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Js(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=me(n),g=a.getNode().getImmediateChild(h);let _;if(Z(d))_=i;else{const C=u.getCompleteChild(h);C!=null?b_(d)===".priority"&&C.getChild(S_(d)).isEmpty()?_=C:_=C.updateChild(d,i):_=ae.EMPTY_NODE}if(g.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=Js(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function jf(t,e){return t.eventCache.isCompleteForChild(e)}function xk(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Oe(n,l);jf(e,ie(u))&&(a=Oc(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Oe(n,l);jf(e,ie(u))||(a=Oc(t,a,u,c,s,r,o))}),a}function Bf(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Nc(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Z(n)?c=i:c=new ge(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),_=Bf(t,g,d);l=ta(t,l,new ye(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const _=e.serverCache.getNode().getImmediateChild(h),C=Bf(t,_,d);l=ta(t,l,new ye(h),C,s,r,o,a)}}),l}function Dk(t,e,n,i,s,r,o){if(ea(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ta(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Z(n)){let c=new ge(null);return l.getNode().forEachChild(ns,(u,h)=>{c=c.set(new ye(u),h)}),Nc(t,e,n,c,s,r,a,o)}else return e}else{let c=new ge(null);return i.foreach((u,h)=>{const d=Oe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Nc(t,e,n,c,s,r,a,o)}}function Mk(t,e,n,i,s){const r=e.serverCache,o=$_(e,r.getNode(),r.isFullyInitialized()||Z(n),r.isFiltered());return G_(t,o,n,i,z_,s)}function Lk(t,e,n,i,s,r){let o;if(ea(i,n)!=null)return e;{const a=new Ku(i,e,s),l=e.eventCache.getNode();let c;if(Z(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pc(i,Ri(e));else{const h=e.serverCache.getNode();k(h instanceof ae,"serverChildren would be complete if leaf node"),u=W_(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ie(n);let h=Wu(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,me(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ae.EMPTY_NODE,me(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pc(i,Ri(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ea(i,he())!=null,Js(e,c,o,t.filter.filtersNodes())}}function Fk(t,e){const n=Ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Z(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Hf(t,e,n,i){e.type===Kt.MERGE&&e.source.queryId!==null&&(k(Ri(t.viewCache_),"We should always have a full cache before handling merges"),k(Rc(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Ok(t.processor_,s,e,n,i);return Pk(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Uk(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Uk(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return hk(t.eventGenerator_,e,n,s)}/**
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
 */let Vf;function $k(t){k(!Vf,"__referenceConstructor has already been defined"),Vf=t}function qu(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return k(r!=null,"SyncTree gave us an op for an invalid query."),Hf(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Hf(o,e,n,i));return r}}function zu(t,e){let n=null;for(const i of t.views.values())n=n||Fk(i,e);return n}/**
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
 */let Wf;function jk(t){k(!Wf,"__referenceConstructor has already been defined"),Wf=t}class Kf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=Sk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bk(t,e,n,i,s){return gk(t.pendingWriteTree_,e,n,i,s),s?Da(t,new Si(M_(),e,n)):[]}function zi(t,e,n=!1){const i=mk(t.pendingWriteTree_,e);if(_k(t.pendingWriteTree_,e)){let r=new ge(null);return i.snap!=null?r=r.set(he(),!0):vt(i.children,o=>{r=r.set(new ye(o),!0)}),Da(t,new Zo(i.path,r,n))}else return[]}function xa(t,e,n){return Da(t,new Si(L_(),e,n))}function Hk(t,e,n){const i=ge.fromObject(n);return Da(t,new _r(L_(),e,i))}function Vk(t,e,n,i){const s=Q_(t,i);if(s!=null){const r=Z_(s),o=r.path,a=r.queryId,l=_t(o,e),c=new Si(F_(a),l,n);return ey(t,o,c)}else return[]}function Wk(t,e,n,i){const s=Q_(t,i);if(s){const r=Z_(s),o=r.path,a=r.queryId,l=_t(o,e),c=ge.fromObject(n),u=new _r(F_(a),l,c);return ey(t,o,u)}else return[]}function Y_(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_t(o,e),c=zu(a,l);if(c)return c});return V_(s,e,r,n,!0)}function Da(t,e){return X_(e,t.syncPointTree_,null,B_(t.pendingWriteTree_,he()))}function X_(t,e,n,i){if(Z(t.path))return J_(t,e,n,i);{const s=e.get(he());n==null&&s!=null&&(n=zu(s,he()));let r=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=K_(i,o);r=r.concat(X_(a,l,c,u))}return s&&(r=r.concat(qu(s,t,i,n))),r}}function J_(t,e,n,i){const s=e.get(he());n==null&&s!=null&&(n=zu(s,he()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=K_(i,o),u=t.operationForChild(o);u&&(r=r.concat(J_(u,a,l,c)))}),s&&(r=r.concat(qu(s,t,i,n))),r}function Q_(t,e){return t.tagToQueryMap.get(e)}function Z_(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function ey(t,e,n){const i=t.syncPointTree_.get(e);k(i,"Missing sync point for query tag that we're tracking");const s=B_(t.pendingWriteTree_,e);return qu(i,n,s,null)}/**
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
 */class Gu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gu(n)}node(){return this.node_}}class Yu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new Yu(this.syncTree_,n)}node(){return Y_(this.syncTree_,this.path_)}}const Kk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},qf=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zk(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},zk=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&k(!1,"Unexpected increment value: "+i);const s=e.node();if(k(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Gk=function(t,e,n,i){return Xu(e,new Yu(n,t),i)},Yk=function(t,e,n){return Xu(t,new Gu(e),n)};function Xu(t,e,n){const i=t.getPriority().val(),s=qf(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=qf(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ke(a,He(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ke(s))),o.forEachChild(qe,(a,l)=>{const c=Xu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ju{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Qu(t,e){let n=e instanceof ye?e:new ye(e),i=t,s=ie(n);for(;s!==null;){const r=as(i.node.children,s)||{children:{},childCount:0};i=new Ju(s,i,r),n=me(n),s=ie(n)}return i}function ms(t){return t.node.value}function ty(t,e){t.node.value=e,xc(t)}function ny(t){return t.node.childCount>0}function Xk(t){return ms(t)===void 0&&!ny(t)}function Ma(t,e){vt(t.node.children,(n,i)=>{e(new Ju(n,t,i))})}function iy(t,e,n,i){n&&!i&&e(t),Ma(t,s=>{iy(s,e,!0,i)}),n&&i&&e(t)}function Jk(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function jr(t){return new ye(t.parent===null?t.name:jr(t.parent)+"/"+t.name)}function xc(t){t.parent!==null&&Qk(t.parent,t.name,t)}function Qk(t,e,n){const i=Xk(n),s=vn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,xc(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,xc(t))}/**
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
 */const Zk=/[\[\].#$\/\u0000-\u001F\u007F]/,eP=/[\[\].#$\u0000-\u001F\u007F]/,Il=10*1024*1024,sy=function(t){return typeof t=="string"&&t.length!==0&&!Zk.test(t)},tP=function(t){return typeof t=="string"&&t.length!==0&&!eP.test(t)},nP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tP(t)},ry=function(t,e,n){const i=n instanceof ye?new MA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ii(i));if(typeof e=="function")throw new Error(t+"contains a function "+ii(i)+" with contents = "+e.toString());if(s_(e))throw new Error(t+"contains "+e.toString()+" "+ii(i));if(typeof e=="string"&&e.length>Il/3&&Aa(e)>Il)throw new Error(t+"contains a string greater than "+Il+" utf8 bytes "+ii(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(vt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!sy(o)))throw new Error(t+" contains an invalid key ("+o+") "+ii(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LA(i,o),ry(t,a,i),FA(i)}),s&&r)throw new Error(t+' contains ".value" child '+ii(i)+" in addition to actual children.")}},iP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nP(n))throw new Error(Yb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rP(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!R_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Li(t,e,n){rP(t,n),oP(t,i=>Pt(i,e)||Pt(e,i))}function oP(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(aP(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();_i&&Be("event: "+n.toString()),Ur(i)}}}/**
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
 */const lP="repo_interrupt",cP=25;class uP{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qo(),this.transactionQueueTree_=new Ju,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hP(t,e,n){if(t.stats_=Uu(t.repoInfo_),t.forceRestClient_||rA())t.server_=new Jo(t.repoInfo_,(i,s,r,o)=>{zf(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new gn(t.repoInfo_,e,(i,s,r,o)=>{zf(t,i,s,r,o)},i=>{Gf(t,i)},i=>{fP(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=hA(t.repoInfo_,()=>new uk(t.stats_,t.server_)),t.infoData_=new rk,t.infoSyncTree_=new Kf({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=xa(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zu(t,"connected",!1),t.serverSyncTree_=new Kf({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Li(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function dP(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oy(t){return Kk({timestamp:dP(t)})}function zf(t,e,n,i,s){t.dataUpdateCount++;const r=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Uo(n,c=>He(c));o=Wk(t.serverSyncTree_,r,l,s)}else{const l=He(n);o=Vk(t.serverSyncTree_,r,l,s)}else if(i){const l=Uo(n,c=>He(c));o=Hk(t.serverSyncTree_,r,l)}else{const l=He(n);o=xa(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=th(t,r)),Li(t.eventQueue_,a,o)}function Gf(t,e){Zu(t,"connected",e),e===!1&&gP(t)}function fP(t,e){vt(e,(n,i)=>{Zu(t,n,i)})}function Zu(t,e,n){const i=new ye("/.info/"+e),s=He(n);t.infoData_.updateSnapshot(i,s);const r=xa(t.infoSyncTree_,i,s);Li(t.eventQueue_,i,r)}function pP(t){return t.nextWriteId_++}function gP(t){ay(t,"onDisconnectEvents");const e=oy(t),n=Qo();Sc(t.onDisconnect_,he(),(s,r)=>{const o=Gk(s,r,t.serverSyncTree_,e);D_(n,s,o)});let i=[];Sc(n,he(),(s,r)=>{i=i.concat(xa(t.serverSyncTree_,s,r));const o=vP(t,s);th(t,o)}),t.onDisconnect_=Qo(),Li(t.eventQueue_,he(),i)}function mP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lP)}function ay(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Be(n,...e)}function ly(t,e,n){return Y_(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function eh(t,e=t.transactionQueueTree_){if(e||La(t,e),ms(e)){const n=uy(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&_P(t,jr(e),n)}else ny(e)&&Ma(e,n=>{eh(t,n)})}function _P(t,e,n){const i=n.map(c=>c.currentWriteId),s=ly(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=_t(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ay(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(zi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();La(t,Qu(t.transactionQueueTree_,e)),eh(t,t.transactionQueueTree_),Li(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ur(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ht("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}th(t,e)}},o)}function th(t,e){const n=cy(t,e),i=jr(n),s=uy(t,n);return yP(t,s,i),i}function yP(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=_t(n,l.path);let u=!1,h;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(zi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cP)u=!0,h="maxretry",s=s.concat(zi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ly(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){ry("transaction failed: Data returned ",g,l.path);let _=He(g);typeof g=="object"&&g!=null&&vn(g,".priority")||(_=_.updatePriority(d.getPriority()));const R=l.currentWriteId,x=oy(t),$=Yk(_,d,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=$,l.currentWriteId=pP(t),o.splice(o.indexOf(R),1),s=s.concat(Bk(t.serverSyncTree_,l.path,$,l.currentWriteId,l.applyLocally)),s=s.concat(zi(t.serverSyncTree_,R,!0))}else u=!0,h="nodata",s=s.concat(zi(t.serverSyncTree_,l.currentWriteId,!0))}Li(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}La(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Ur(i[a]);eh(t,t.transactionQueueTree_)}function cy(t,e){let n,i=t.transactionQueueTree_;for(n=ie(e);n!==null&&ms(i)===void 0;)i=Qu(i,n),e=me(e),n=ie(e);return i}function uy(t,e){const n=[];return hy(t,e,n),n.sort((i,s)=>i.order-s.order),n}function hy(t,e,n){const i=ms(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ma(e,s=>{hy(t,s,n)})}function La(t,e){const n=ms(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,ty(e,n.length>0?n:void 0)}Ma(e,i=>{La(t,i)})}function vP(t,e){const n=jr(cy(t,e)),i=Qu(t.transactionQueueTree_,e);return Jk(i,s=>{Tl(t,s)}),Tl(t,i),iy(i,s=>{Tl(t,s)}),n}function Tl(t,e){const n=ms(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(zi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ty(e,void 0):n.length=r+1,Li(t.eventQueue_,jr(e),s);for(let o=0;o<i.length;o++)Ur(i[o])}}/**
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
 */function wP(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function EP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const Yf=function(t,e){const n=IP(t),i=n.namespace;n.domain==="firebase.com"&&bi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JR();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lA(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new ye(n.pathString)}},IP=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=wP(t.substring(u,h)));const d=EP(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class nh{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Z(this._path)?null:b_(this._path)}get ref(){return new _s(this._repo,this._path)}get _queryIdentifier(){const e=Df(this._queryParams),n=Lu(e);return n==="{}"?"default":n}get _queryObject(){return Df(this._queryParams)}isEqual(e){if(e=wn(e),!(e instanceof nh))return!1;const n=this._repo===e._repo,i=R_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+DA(this._path)}}class _s extends nh{constructor(e,n){super(e,n,new Hu,!1)}get parent(){const e=S_(this._path);return e===null?null:new _s(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}$k(_s);jk(_s);/**
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
 */const TP="FIREBASE_DATABASE_EMULATOR_HOST",Dc={};let bP=!1;function CP(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Yf(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[TP]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Yf(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Tc(Tc.OWNER):new aA(t.name,t.options,e);iP("Invalid Firebase Database URL",o),Z(o.path)||bi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=RP(a,t,u,new oA(t.name,n));return new AP(h,t)}function SP(t,e){const n=Dc[e];(!n||n[t.key]!==t)&&bi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mP(t),delete n[t.key]}function RP(t,e,n,i){let s=Dc[e.name];s||(s={},Dc[e.name]=s);let r=s[t.toURLString()];return r&&bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new uP(t,bP,n,i),s[t.toURLString()]=r,r}class AP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _s(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function kP(t){qR(Gn),ct(new nt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return CP(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Fe(mf,_f,t),Fe(mf,_f,"esm2017")}gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kP();var PP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,ih=ih||{},W=PP||self;function Fa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Br(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function OP(t){return Object.prototype.hasOwnProperty.call(t,bl)&&t[bl]||(t[bl]=++NP)}var bl="closure_uid_"+(1e9*Math.random()>>>0),NP=0;function xP(t,e,n){return t.call.apply(t.bind,arguments)}function DP(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=xP:ze=DP,ze.apply(null,arguments)}function ho(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Yn(){this.s=this.s,this.o=this.o}var MP=0;Yn.prototype.s=!1;Yn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MP!=0)&&OP(this)};Yn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function sh(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Xf(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Fa(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var LP=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function yr(t){return/^[\s\xa0]*$/.test(t)}function Ua(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Ua().indexOf(t)!=-1}function rh(t){return rh[" "](t),t}rh[" "]=function(){};function FP(t,e){var n=PO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var UP=Wt("Opera"),vr=Wt("Trident")||Wt("MSIE"),fy=Wt("Edge"),Mc=fy||vr,py=Wt("Gecko")&&!(Ua().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),$P=Ua().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function gy(){var t=W.document;return t?t.documentMode:void 0}e:{var Jf="",Cl=function(){var t=Ua();if(py)return/rv:([^\);]+)(\)|;)/.exec(t);if(fy)return/Edge\/([\d\.]+)/.exec(t);if(vr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($P)return/WebKit\/(\S+)/.exec(t);if(UP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cl&&(Jf=Cl?Cl[1]:""),vr){var Qf=gy();if(Qf!=null&&Qf>parseFloat(Jf))break e}}W.document&&vr&&gy();function wr(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(py){e:{try{rh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wr.$.h.call(this)}}xe(wr,Ge);var jP={2:"touch",3:"pen",4:"mouse"};wr.prototype.h=function(){wr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hr="closure_listenable_"+(1e6*Math.random()|0),BP=0;function HP(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++BP,this.fa=this.ia=!1}function $a(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function oh(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function VP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function my(t){const e={};for(const n in t)e[n]=t[n];return e}const Zf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _y(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Zf.length;r++)n=Zf[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ja(t){this.src=t,this.g={},this.h=0}ja.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Fc(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new HP(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function Lc(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=dy(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&($a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fc(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var ah="closure_lm_"+(1e6*Math.random()|0),Sl={};function yy(t,e,n,i,s){if(i&&i.once)return wy(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)yy(t,e[r],n,i,s);return null}return n=uh(n),t&&t[Hr]?t.O(e,n,Br(i)?!!i.capture:!!i,s):vy(t,e,n,!1,i,s)}function vy(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Br(s)?!!s.capture:!!s,a=ch(t);if(a||(t[ah]=a=new ja(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=WP(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)LP||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Iy(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function WP(){function t(n){return e.call(t.src,t.listener,n)}const e=KP;return t}function wy(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)wy(t,e[r],n,i,s);return null}return n=uh(n),t&&t[Hr]?t.P(e,n,Br(i)?!!i.capture:!!i,s):vy(t,e,n,!0,i,s)}function Ey(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ey(t,e[r],n,i,s);else i=Br(i)?!!i.capture:!!i,n=uh(n),t&&t[Hr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Fc(r,n,i,s),-1<n&&($a(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=ch(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fc(e,n,i,s)),(n=-1<t?e[t]:null)&&lh(n))}function lh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Hr])Lc(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Iy(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ch(e))?(Lc(n,t),n.h==0&&(n.src=null,e[ah]=null)):$a(t)}}}function Iy(t){return t in Sl?Sl[t]:Sl[t]="on"+t}function KP(t,e){if(t.fa)t=!0;else{e=new wr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&lh(t),t=n.call(i,e)}return t}function ch(t){return t=t[ah],t instanceof ja?t:null}var Rl="__closure_events_fn_"+(1e9*Math.random()>>>0);function uh(t){return typeof t=="function"?t:(t[Rl]||(t[Rl]=function(e){return t.handleEvent(e)}),t[Rl])}function Ne(){Yn.call(this),this.i=new ja(this),this.S=this,this.J=null}xe(Ne,Yn);Ne.prototype[Hr]=!0;Ne.prototype.removeEventListener=function(t,e,n,i){Ey(this,t,e,n,i)};function Ue(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var s=e;e=new Ge(i,t),_y(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=fo(o,i,!0,e)&&s}if(o=e.g=t,s=fo(o,i,!0,e)&&s,s=fo(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=fo(o,i,!1,e)&&s}Ne.prototype.N=function(){if(Ne.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)$a(n[i]);delete t.g[e],t.h--}}this.J=null};Ne.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ne.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function fo(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Lc(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var hh=W.JSON.stringify;class qP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zP(){var t=dh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class GP{constructor(){this.h=this.g=null}add(e,n){const i=Ty.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Ty=new qP(()=>new YP,t=>t.reset());class YP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function XP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function JP(t){W.setTimeout(()=>{throw t},0)}let Er,Ir=!1,dh=new GP,by=()=>{const t=W.Promise.resolve(void 0);Er=()=>{t.then(QP)}};var QP=()=>{for(var t;t=zP();){try{t.h.call(t.g)}catch(n){JP(n)}var e=Ty;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ir=!1};function Ba(t,e){Ne.call(this),this.h=t||1,this.g=e||W,this.j=ze(this.qb,this),this.l=Date.now()}xe(Ba,Ne);P=Ba.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ue(this,"tick"),this.ga&&(fh(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Ba.$.N.call(this),fh(this),delete this.g};function ph(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Cy(t){t.g=ph(()=>{t.g=null,t.i&&(t.i=!1,Cy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ZP extends Yn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cy(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tr(t){Yn.call(this),this.h=t,this.g={}}xe(Tr,Yn);var ep=[];function Sy(t,e,n,i){Array.isArray(n)||(n&&(ep[0]=n.toString()),n=ep);for(var s=0;s<n.length;s++){var r=yy(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ry(t){oh(t.g,function(e,n){this.g.hasOwnProperty(n)&&lh(e)},t),t.g={}}Tr.prototype.N=function(){Tr.$.N.call(this),Ry(this)};Tr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ha(){this.g=!0}Ha.prototype.Ea=function(){this.g=!1};function eO(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function tO(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Gi(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+iO(t,n)+(i?" "+i:"")})}function nO(t,e){t.info(function(){return"TIMEOUT: "+e})}Ha.prototype.info=function(){};function iO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return hh(n)}catch{return e}}var ys={},tp=null;function gh(){return tp=tp||new Ne}ys.Ta="serverreachability";function Ay(t){Ge.call(this,ys.Ta,t)}xe(Ay,Ge);function br(t){const e=gh();Ue(e,new Ay(e))}ys.STAT_EVENT="statevent";function ky(t,e){Ge.call(this,ys.STAT_EVENT,t),this.stat=e}xe(ky,Ge);function tt(t){const e=gh();Ue(e,new ky(e,t))}ys.Ua="timingevent";function Py(t,e){Ge.call(this,ys.Ua,t),this.size=e}xe(Py,Ge);function Vr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var mh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sO={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function _h(){}_h.prototype.h=null;function np(t){return t.h||(t.h=t.i())}function rO(){}var Wr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function yh(){Ge.call(this,"d")}xe(yh,Ge);function vh(){Ge.call(this,"c")}xe(vh,Ge);var Uc;function Va(){}xe(Va,_h);Va.prototype.g=function(){return new XMLHttpRequest};Va.prototype.i=function(){return{}};Uc=new Va;function Kr(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Tr(this),this.P=oO,t=Mc?125:void 0,this.V=new Ba(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Oy}function Oy(){this.i=null,this.g="",this.h=!1}var oO=45e3,$c={},na={};P=Kr.prototype;P.setTimeout=function(t){this.P=t};function jc(t,e,n){t.L=1,t.v=Ka(_n(e)),t.s=n,t.S=!0,Ny(t,null)}function Ny(t,e){t.G=Date.now(),qr(t),t.A=_n(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),jy(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Oy,t.g=av(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ZP(ze(t.Pa,t,t.g),t.O)),Sy(t.U,t.g,"readystatechange",t.nb),e=t.I?my(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),br(),eO(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&qt(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Mc||this.g&&(this.h.h||this.g.ja()||op(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?br(3):br(2)),Wa(this);var n=this.g.da();this.ca=n;t:if(xy(this)){var i=op(this.g);t="";var s=i.length,r=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ai(this),Zs(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,tO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yr(a)){var c=a;break t}}c=null}if(n=c)Gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bc(this,n);else{this.i=!1,this.o=3,tt(12),ai(this),Zs(this);break e}}this.S?(Dy(this,u,o),Mc&&this.i&&u==3&&(Sy(this.U,this.V,"tick",this.mb),this.V.start())):(Gi(this.j,this.m,o,null),Bc(this,o)),u==4&&ai(this),this.i&&!this.J&&(u==4?iv(this.l,this):(this.i=!1,qr(this)))}else RO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),ai(this),Zs(this)}}}catch{}finally{}};function xy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Dy(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=aO(t,n),s==na){e==4&&(t.o=4,tt(14),i=!1),Gi(t.j,t.m,null,"[Incomplete Response]");break}else if(s==$c){t.o=4,tt(15),Gi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Gi(t.j,t.m,s,null),Bc(t,s);xy(t)&&s!=na&&s!=$c&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ch(e),e.M=!0,tt(11))):(Gi(t.j,t.m,n,"[Invalid Chunked Response]"),ai(t),Zs(t))}P.mb=function(){if(this.g){var t=qt(this.g),e=this.g.ja();this.C<e.length&&(Wa(this),Dy(this,t,e),this.i&&t!=4&&qr(this))}};function aO(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?na:(n=Number(e.substring(n,i)),isNaN(n)?$c:(i+=1,i+n>e.length?na:(e=e.slice(i,i+n),t.C=i+n,e)))}P.cancel=function(){this.J=!0,ai(this)};function qr(t){t.Y=Date.now()+t.P,My(t,t.P)}function My(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vr(ze(t.lb,t),e)}function Wa(t){t.B&&(W.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(nO(this.j,this.A),this.L!=2&&(br(),tt(17)),ai(this),this.o=2,Zs(this)):My(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||iv(t.l,t)}function ai(t){Wa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,fh(t.V),Ry(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Hc(n.i,t))){if(!t.K&&Hc(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ra(n),Ya(n);else break e;bh(n),tt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vr(ze(n.ib,n),6e3));if(1>=Vy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else li(n,11)}else if((t.K||n.g==t)&&ra(n),!yr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(wh(r,r.h),r.h=null))}if(i.F){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.Da=C,_e(i.I,i.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=ov(i,i.J?i.pa:null,i.Y),o.K){Wy(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(Wa(a),qr(a)),i.g=o}else tv(i);0<n.j.length&&Xa(n)}else c[0]!="stop"&&c[0]!="close"||li(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?li(n,7):Th(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}br(4)}catch{}}function lO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fa(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function cO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ly(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cO(t),i=lO(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Fy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function yi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yi){this.h=t.h,ia(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l;var e=t.i,n=new Cr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ip(this,n),this.o=t.o}else t&&(e=String(t).match(Fy))?(this.h=!1,ia(this,e[1]||"",!0),this.s=$s(e[2]||""),this.g=$s(e[3]||"",!0),sa(this,e[4]),this.l=$s(e[5]||"",!0),ip(this,e[6]||"",!0),this.o=$s(e[7]||"")):(this.h=!1,this.i=new Cr(null,this.h))}yi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,sp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,sp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?fO:dO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,gO)),t.join("")};function _n(t){return new yi(t)}function ia(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ip(t,e,n){e instanceof Cr?(t.i=e,mO(t.i,t.h)):(n||(e=js(e,pO)),t.i=new Cr(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Ka(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sp=/[#\/\?@]/g,dO=/[#\?:]/g,fO=/[#\?]/g,pO=/[#\?@]/g,gO=/#/g;function Cr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&uO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Cr.prototype;P.add=function(t,e){Xn(this),this.i=null,t=vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uy(t,e){Xn(t),e=vs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $y(t,e){return Xn(t),e=vs(t,e),t.g.has(e)}P.forEach=function(t,e){Xn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};P.ta=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};P.Z=function(t){Xn(this);let e=[];if(typeof t=="string")$y(this,t)&&(e=e.concat(this.g.get(vs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Xn(this),this.i=null,t=vs(this,t),$y(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function jy(t,e,n){Uy(t,e),0<n.length&&(t.i=null,t.g.set(vs(t,e),sh(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mO(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Uy(this,i),jy(this,s,n))},t)),t.j=e}var _O=class{constructor(t,e){this.g=t,this.map=e}};function By(t){this.l=t||yO,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yO=10;function Hy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vy(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function wh(t,e){t.g?t.g.add(e):t.h=e}function Wy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}By.prototype.cancel=function(){if(this.i=Ky(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ky(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return sh(t.i)}var vO=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function wO(){this.g=new vO}function EO(t,e,n){const i=n||"";try{Ly(t,function(s,r){let o=s;Br(s)&&(o=hh(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function IO(t,e){const n=new Ha;if(W.Image){const i=new Image;i.onload=ho(po,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ho(po,n,i,"TestLoadImage: error",!1,e),i.onabort=ho(po,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ho(po,n,i,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function po(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function qa(t){this.l=t.ec||null,this.j=t.ob||!1}xe(qa,_h);qa.prototype.g=function(){return new za(this.l,this.j)};qa.prototype.i=function(t){return function(){return t}}({});function za(t,e){Ne.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Eh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(za,Ne);var Eh=0;P=za.prototype;P.open=function(t,e){if(this.readyState!=Eh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zr(this)),this.readyState=Eh};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zr(this):Sr(this),this.readyState==3&&qy(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,zr(this))};P.Ya=function(t){this.g&&(this.response=t,zr(this))};P.ka=function(){this.g&&zr(this)};function zr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Sr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var TO=W.JSON.parse;function Ie(t){Ne.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zy,this.L=this.M=!1}xe(Ie,Ne);var zy="",bO=/^https?$/i,CO=["POST","PUT"];P=Ie.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Uc.g(),this.C=this.u?np(this.u):np(Uc),this.g.onreadystatechange=ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){rp(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=dy(CO,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xy(this),0<this.B&&((this.L=SO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.ua,this)):this.A=ph(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){rp(this,r)}};function SO(t){return vr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof ih<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function rp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gy(t),Ga(t)}function Gy(t){t.F||(t.F=!0,Ue(t,"complete"),Ue(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ue(this,"complete"),Ue(this,"abort"),Ga(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ga(this,!0)),Ie.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Yy(this):this.kb())};P.kb=function(){Yy(this)};function Yy(t){if(t.h&&typeof ih<"u"&&(!t.C[1]||qt(t)!=4||t.da()!=2)){if(t.v&&qt(t)==4)ph(t.La,0,t);else if(Ue(t,"readystatechange"),qt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(Fy)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),i=!bO.test(s?s.toLowerCase():"")}n=i}if(n)Ue(t,"complete"),Ue(t,"success");else{t.m=6;try{var r=2<qt(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Gy(t)}}finally{Ga(t)}}}}function Ga(t,e){if(t.g){Xy(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ue(t,"ready");try{n.onreadystatechange=i}catch{}}}function Xy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function qt(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),TO(e)}};function op(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case zy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RO(t){const e={};t=(t.g&&2<=qt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(yr(t[i]))continue;var n=XP(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}VP(e,function(i){return i.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jy(t){let e="";return oh(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Ih(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Jy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qy(t){this.Ga=0,this.j=[],this.l=new Ha,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ps("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ps("baseRetryDelayMs",5e3,t),this.hb=Ps("retryDelaySeedMs",1e4,t),this.eb=Ps("forwardChannelMaxRetries",2,t),this.xa=Ps("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new By(t&&t.concurrentRequestLimit),this.Ja=new wO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=Qy.prototype;P.ra=8;P.H=1;function Th(t){if(Zy(t),t.H==3){var e=t.W++,n=_n(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),Gr(t,n),e=new Kr(t,t.l,e),e.L=2,e.v=Ka(_n(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=av(e.l,null),e.g.ha(e.v)),e.G=Date.now(),qr(e)}rv(t)}function Ya(t){t.g&&(Ch(t),t.g.cancel(),t.g=null)}function Zy(t){Ya(t),t.u&&(W.clearTimeout(t.u),t.u=null),ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Xa(t){if(!Hy(t.i)&&!t.m){t.m=!0;var e=t.Na;Er||by(),Ir||(Er(),Ir=!0),dh.add(e,t),t.C=0}}function AO(t,e){return Vy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vr(ze(t.Na,t,e),sv(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Kr(this,this.l,t);let r=this.s;if(this.U&&(r?(r=my(r),_y(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ev(this,s,e),n=_n(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),Gr(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Jy(r)))+"&"+e:this.o&&Ih(n,this.o,r)),wh(this.i,s),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),s.aa=!0,jc(s,n,null)):jc(s,n,e),this.H=2}}else this.H==3&&(t?ap(this,t):this.j.length==0||Hy(this.i)||ap(this))};function ap(t,e){var n;e?n=e.m:n=t.W++;const i=_n(t.I);_e(i,"SID",t.K),_e(i,"RID",n),_e(i,"AID",t.V),Gr(t,i),t.o&&t.s&&Ih(i,t.o,t.s),n=new Kr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ev(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),wh(t.i,n),jc(n,i,e)}function Gr(t,e){t.na&&oh(t.na,function(n,i){_e(e,i,n)}),t.h&&Ly({},function(n,i){_e(e,i,n)})}function ev(t,e,n){n=Math.min(t.j.length,n);var i=t.h?ze(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{EO(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function tv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Er||by(),Ir||(Er(),Ir=!0),dh.add(e,t),t.A=0}}function bh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vr(ze(t.Ma,t),sv(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,nv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vr(ze(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Ya(this),nv(this))};function Ch(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function nv(t){t.g=new Kr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=_n(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),Gr(t,e),t.o&&t.s&&Ih(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ka(_n(e)),n.s=null,n.S=!0,Ny(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Ya(this),bh(this),tt(19))};function ra(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function iv(t,e){var n=null;if(t.g==e){ra(t),Ch(t),t.g=null;var i=2}else if(Hc(t.i,e))n=e.F,Wy(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=gh(),Ue(i,new Py(i,n)),Xa(t)}else tv(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&AO(t,e)||i==2&&bh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:li(t,5);break;case 4:li(t,10);break;case 3:li(t,6);break;default:li(t,2)}}}function sv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function li(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=ze(t.pb,t);n||(n=new yi("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||ia(n,"https"),Ka(n)),IO(n.toString(),i)}else tt(2);t.H=0,t.h&&t.h.za(e),rv(t),Zy(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function rv(t){if(t.H=0,t.ma=[],t.h){const e=Ky(t.i);(e.length!=0||t.j.length!=0)&&(Xf(t.ma,e),Xf(t.ma,t.j),t.i.i.length=0,sh(t.j),t.j.length=0),t.h.ya()}}function ov(t,e,n){var i=n instanceof yi?_n(n):new yi(n);if(i.g!="")e&&(i.g=e+"."+i.g),sa(i,i.m);else{var s=W.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new yi(null);i&&ia(r,i),e&&(r.g=e),s&&sa(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&_e(i,n,e),_e(i,"VER",t.ra),Gr(t,i),i}function av(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ie(new qa({ob:!0})):new Ie(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function lv(){}P=lv.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function wt(t,e){Ne.call(this),this.g=new Qy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!yr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ws(this)}xe(wt,Ne);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ov(t,null,t.Y),Xa(t)};wt.prototype.close=function(){Th(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=hh(t),t=n);e.j.push(new _O(e.fb++,t)),e.H==3&&Xa(e)};wt.prototype.N=function(){this.g.h=null,delete this.j,Th(this.g),delete this.g,wt.$.N.call(this)};function cv(t){yh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(cv,yh);function uv(){vh.call(this),this.status=1}xe(uv,vh);function ws(t){this.g=t}xe(ws,lv);ws.prototype.Ba=function(){Ue(this.g,"a")};ws.prototype.Aa=function(t){Ue(this.g,new cv(t))};ws.prototype.za=function(t){Ue(this.g,new uv)};ws.prototype.ya=function(){Ue(this.g,"b")};function kO(){this.blockSize=-1}function tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xe(tn,kO);tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Al(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Al(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Al(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Al(this,i),s=0;break}}this.h=s,this.i+=e};tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function le(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var PO={};function Sh(t){return-128<=t&&128>t?FP(t,function(e){return new le([e|0],0>e?-1:0)}):new le([t|0],0>t?-1:0)}function zt(t){if(isNaN(t)||!isFinite(t))return is;if(0>t)return Me(zt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Vc;return new le(e,0)}function hv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(hv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=zt(Math.pow(e,8)),i=is,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=zt(Math.pow(e,r)),i=i.R(r).add(zt(o))):(i=i.R(n),i=i.add(zt(o)))}return i}var Vc=4294967296,is=Sh(0),Wc=Sh(1),lp=Sh(16777216);P=le.prototype;P.ea=function(){if(mt(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Vc+i)*e,e*=Vc}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(dn(this))return"0";if(mt(this))return"-"+Me(this).toString(t);for(var e=zt(Math.pow(t,6)),n=this,i="";;){var s=aa(n,e).g;n=oa(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,dn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mt(t){return t.h==-1}P.X=function(t){return t=oa(this,t),mt(t)?-1:dn(t)?0:1};function Me(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new le(n,~t.h).add(Wc)}P.abs=function(){return mt(this)?Me(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new le(n,n[n.length-1]&-2147483648?-1:0)};function oa(t,e){return t.add(Me(e))}P.R=function(t){if(dn(this)||dn(t))return is;if(mt(this))return mt(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(mt(t))return Me(this.R(Me(t)));if(0>this.X(lp)&&0>t.X(lp))return zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,go(n,2*i+2*s),n[2*i+2*s+1]+=r*l,go(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,go(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,go(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new le(n,0)};function go(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Os(t,e){this.g=t,this.h=e}function aa(t,e){if(dn(e))throw Error("division by zero");if(dn(t))return new Os(is,is);if(mt(t))return e=aa(Me(t),e),new Os(Me(e.g),Me(e.h));if(mt(e))return e=aa(t,Me(e)),new Os(Me(e.g),e.h);if(30<t.g.length){if(mt(t)||mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wc,i=e;0>=i.X(t);)n=cp(n),i=cp(i);var s=Bi(n,1),r=Bi(i,1);for(i=Bi(i,2),n=Bi(n,2);!dn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Bi(i,1),n=Bi(n,1)}return e=oa(t,s.R(e)),new Os(s,e)}for(s=is;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=zt(n),o=r.R(e);mt(o)||0<o.X(t);)n-=i,r=zt(n),o=r.R(e);dn(r)&&(r=Wc),s=s.add(r),t=oa(t,o)}return new Os(s,t)}P.gb=function(t){return aa(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new le(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new le(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new le(n,this.h^t.h)};function cp(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new le(n,t.h)}function Bi(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new le(s,t.h)}wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;mh.NO_ERROR=0;mh.TIMEOUT=8;mh.HTTP_ERROR=6;sO.COMPLETE="complete";rO.EventType=Wr;Wr.OPEN="a";Wr.CLOSE="b";Wr.ERROR="c";Wr.MESSAGE="d";Ne.prototype.listen=Ne.prototype.O;Ie.prototype.listenOnce=Ie.prototype.P;Ie.prototype.getLastError=Ie.prototype.Sa;Ie.prototype.getLastErrorCode=Ie.prototype.Ia;Ie.prototype.getStatus=Ie.prototype.da;Ie.prototype.getResponseJson=Ie.prototype.Wa;Ie.prototype.getResponseText=Ie.prototype.ja;Ie.prototype.send=Ie.prototype.ha;Ie.prototype.setWithCredentials=Ie.prototype.Oa;tn.prototype.digest=tn.prototype.l;tn.prototype.reset=tn.prototype.reset;tn.prototype.update=tn.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=zt;le.fromString=hv;var OO=le;const up="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let Yr="10.4.0";/**
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
 */const us=new fs("@firebase/firestore");function ut(t,...e){if(us.logLevel<=re.DEBUG){const n=e.map(Ah);us.debug(`Firestore (${Yr}): ${t}`,...n)}}function Rh(t,...e){if(us.logLevel<=re.ERROR){const n=e.map(Ah);us.error(`Firestore (${Yr}): ${t}`,...n)}}function NO(t,...e){if(us.logLevel<=re.WARN){const n=e.map(Ah);us.warn(`Firestore (${Yr}): ${t}`,...n)}}function Ah(t){if(typeof t=="string")return t;try{/**
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
 */function kh(t="Unexpected state"){const e=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: `+t;throw Rh(e),new Error(e)}function Kc(t,e){t||kh()}/**
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
 */const We={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ke extends Et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ss{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class dv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class DO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MO{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ss,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ss)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Kc(typeof i.accessToken=="string"),new dv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Kc(e===null||typeof e=="string"),new je(e)}}class LO{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class FO{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new LO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class UO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $O{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,ut("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Kc(typeof n.token=="string"),this.R=n.token,new UO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function jO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class BO{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=jO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function fv(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class HO{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class la{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new la("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof la&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var hp,ee;(ee=hp||(hp={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new OO([4294967295,4294967295],0);function kl(){return typeof document<"u"?document:null}/**
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
 */class VO{constructor(e,n,i=1e3,s=1.5,r=6e4){this._i=e,this.timerId=n,this.xo=i,this.Oo=s,this.No=r,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),i=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-i);s>0&&ut("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Ph{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Ph(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ke(We.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function WO(t,e){if(Rh("AsyncQueue",`${e}: ${t}`),fv(t))return new Ke(We.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class KO{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=BO.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{ut("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(ut("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ke(We.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=WO(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */function pv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dp=new Map;function qO(t,e,n,i){if(e===!0&&i===!0)throw new Ke(We.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zO(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":kh()}function GO(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ke(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zO(t);throw new Ke(We.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class fp{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ke(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ke(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pv((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Ke(We.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Ke(We.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Ke(We.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gv{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ke(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ke(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fp(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new xO;switch(i.type){case"firstParty":return new FO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ke(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=dp.get(n);i&&(ut("ComponentProvider","Removing Datastore"),dp.delete(n),i.terminate())}(this),Promise.resolve()}}function YO(t,e,n,i={}){var s;const r=(t=GO(t,gv))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&NO("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=je.MOCK_USER;else{a=Fb(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new Ke(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(c)}t._authCredentials=new DO(new dv(a,l))}}/**
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
 */class XO{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new VO(this,"async_queue_retry"),this.ou=()=>{const n=kl();n&&ut("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new ss;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!fv(e))throw e;ut("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(i=>{this.nu=i,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Rh("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.ru=!1,i))));return this.Za=n,n}enqueueAfterDelay(e,n,i){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Ph.createAndSchedule(this,e,n,i,r=>this.cu(r));return this.tu.push(s),s}_u(){this.nu&&kh()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class JO extends gv{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new XO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ZO(this),this._firestoreClient.terminate()}}function QO(t,e){const n=typeof t=="object"?t:Su(),i=typeof t=="string"?t:e||"(default)",s=Or(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Lb("firestore");r&&YO(s,...r)}return s}function ZO(t){var e,n,i;const s=t._freezeSettings(),r=function(a,l,c,u){return new HO(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,pv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new KO(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){Yr=s})(Gn),ct(new nt("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new JO(new MO(i.getProvider("auth-internal")),new $O(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Ke(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new la(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Fe(up,"4.2.0",e),Fe(up,"4.2.0","esm2017")})();/**
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
 */const mv="firebasestorage.googleapis.com",eN="storageBucket",tN=2*60*1e3,nN=10*60*1e3;/**
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
 */class sn extends Et{constructor(e,n,i=0){super(Pl(e),`Firebase Storage: ${n} (${Pl(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nn||(nn={}));function Pl(t){return"storage/"+t}function iN(){const t="An unknown error occurred, please check the error payload for server response.";return new sn(nn.UNKNOWN,t)}function sN(){return new sn(nn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rN(){return new sn(nn.CANCELED,"User canceled the upload/download.")}function oN(t){return new sn(nn.INVALID_URL,"Invalid URL '"+t+"'.")}function aN(t){return new sn(nn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pp(t){return new sn(nn.INVALID_ARGUMENT,t)}function _v(){return new sn(nn.APP_DELETED,"The Firebase app was deleted.")}function lN(t){return new sn(nn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Ot.makeFromUrl(e,n)}catch{return new Ot(e,"")}if(i.path==="")return i;throw aN(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(q){q.path_=decodeURIComponent(q.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},C=n===mv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",x=new RegExp(`^https?://${C}/${s}/${R}`,"i"),D=[{regex:a,indices:l,postModify:r},{regex:g,indices:_,postModify:c},{regex:x,indices:{bucket:1,path:2},postModify:c}];for(let q=0;q<D.length;q++){const F=D[q],pe=F.regex.exec(e);if(pe){const Ce=pe[F.indices.bucket];let $e=pe[F.indices.path];$e||($e=""),i=new Ot(Ce,$e),F.postModify(i);break}}if(i==null)throw oN(e);return i}}class cN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function uN(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...R){c||(c=!0,e.apply(null,R))}function h(R){s=setTimeout(()=>{s=null,t(g,l())},R)}function d(){r&&clearTimeout(r)}function g(R,...x){if(c){d();return}if(R){d(),u.call(null,R,...x);return}if(l()||o){d(),u.call(null,R,...x);return}i<64&&(i*=2);let D;a===1?(a=2,D=0):D=(i+Math.random())*1e3,h(D)}let _=!1;function C(R){_||(_=!0,d(),!c&&(s!==null?(R||(a=2),clearTimeout(s),h(0)):R||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function hN(t){t(!1)}/**
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
 */function dN(t){return t!==void 0}function gp(t,e,n,i){if(i<e)throw pp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw pp(`Invalid value for '${t}'. Expected ${n} or less.`)}function fN(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var ca;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ca||(ca={}));/**
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
 */function pN(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class gN{constructor(e,n,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new mo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ca.NO_ERROR,l=r.getStatus();if(!a||pN(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ca.ABORT;i(!1,new mo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new mo(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());dN(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=iN();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?_v():rN();o(l)}else{const l=sN();o(l)}};this.canceled_?n(!1,new mo(!1,null,!0)):this.backoffId_=uN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mo{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function mN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _N(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wN(t,e,n,i,s,r,o=!0){const a=fN(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return yN(c,e),mN(c,n),_N(c,r),vN(c,i),new gN(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function EN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function IN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ua{constructor(e,n){this._service=e,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ua(e,n)}get root(){const e=new Ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IN(this._location.path)}get storage(){return this._service}get parent(){const e=EN(this._location.path);if(e===null)return null;const n=new Ot(this._location.bucket,e);return new ua(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lN(e)}}function mp(t,e){const n=e==null?void 0:e[eN];return n==null?null:Ot.makeFromBucketSpec(n,t)}class TN{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=mv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tN,this._maxUploadRetryTime=nN,this._requests=new Set,s!=null?this._bucket=Ot.makeFromBucketSpec(s,this._host):this._bucket=mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,e):this._bucket=mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ua(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new cN(_v());{const o=wN(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const _p="@firebase/storage",yp="0.11.2";/**
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
 */const bN="storage";function CN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new TN(n,i,s,e,Gn)}function SN(){ct(new nt(bN,CN,"PUBLIC").setMultipleInstances(!0)),Fe(_p,yp,""),Fe(_p,yp,"esm2017")}SN();function RN(t){return(e,n)=>{const i=HR(e,n).run(()=>Qp(t));VR.set(e,i),KR(i,e)}}function AN(t,{firebaseApp:e,modules:n=[]}){t.provide(e_,e);for(const i of n)i(e,t)}const Jn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},kN={data(){return{user:JSON.parse(localStorage.getItem("userCredential"))}}},PN={class:"container-fluid"},ON=ne("a",{class:"navbar-brand",href:"#"},"Freehua",-1),NN=ne("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[ne("span",{class:"navbar-toggler-icon"})],-1),xN={class:"collapse navbar-collapse",id:"navbarNav"},DN=gu('<ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Início</a></li><li class="nav-item"><a class="nav-link" href="#">Aplicativo</a></li><li class="nav-item"><a class="nav-link" href="#">Sobre</a></li></ul>',1),MN={class:"container d-flex justify-content-end"},LN={key:0},FN=ne("button",{type:"button",class:"btn btn-secondary ms-auto"},"Painel",-1),UN={key:1},$N=ne("button",{type:"button",class:"btn btn-primary ms-auto"},"Entrar",-1);function jN(t,e,n,i,s,r){const o=kr("router-link");return Yt(),Xt("nav",{class:"navbar navbar-expand-sm bg-body-tertiary fixed-top",key:s.user},[ne("div",PN,[Ee(o,{to:"/"},{default:pn(()=>[ON]),_:1}),NN,ne("div",xN,[DN,ne("div",MN,[s.user?(Yt(),Xt("div",LN,[Ee(o,{to:"/dashboard"},{default:pn(()=>[FN]),_:1})])):(Yt(),Xt("div",UN,[Ee(o,{to:"/login"},{default:pn(()=>[$N]),_:1})]))])])])])}const BN=Jn(kN,[["render",jN],["__file","/home/gabriel/freehua-web/src/components/Navbar.vue"]]),HN={__name:"App",setup(t){return(e,n)=>{const i=kr("router-view");return Yt(),Xt(Ct,null,[Ee(BN),Ee(i)],64)}}},VN=Jn(HN,[["__file","/home/gabriel/freehua-web/src/App.vue"]]),WN=(t,e)=>e.some(n=>t instanceof n);let vp,wp;function KN(){return vp||(vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qN(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yv=new WeakMap,qc=new WeakMap,vv=new WeakMap,Ol=new WeakMap,Oh=new WeakMap;function zN(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n($n(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yv.set(n,t)}).catch(()=>{}),Oh.set(e,t),e}function GN(t){if(qc.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YN(t){zc=t(zc)}function XN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Nl(this),e,...n);return vv.set(i,e.sort?e.sort():[e]),$n(i)}:qN().includes(t)?function(...e){return t.apply(Nl(this),e),$n(yv.get(this))}:function(...e){return $n(t.apply(Nl(this),e))}}function JN(t){return typeof t=="function"?XN(t):(t instanceof IDBTransaction&&GN(t),WN(t,KN())?new Proxy(t,zc):t)}function $n(t){if(t instanceof IDBRequest)return zN(t);if(Ol.has(t))return Ol.get(t);const e=JN(t);return e!==t&&(Ol.set(t,e),Oh.set(e,t)),e}const Nl=t=>Oh.get(t);function QN(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=$n(o);return i&&o.addEventListener("upgradeneeded",l=>{i($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ZN=["get","getKey","getAll","getAllKeys","count"],e1=["put","add","delete","clear"],xl=new Map;function Ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xl.get(e))return xl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=e1.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ZN.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return xl.set(e,r),r}YN(t=>({...t,get:(e,n,i)=>Ep(e,n)||t.get(e,n,i),has:(e,n)=>!!Ep(e,n)||t.has(e,n)}));const wv="@firebase/installations",Nh="0.6.4";/**
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
 */const Ev=1e4,Iv=`w:${Nh}`,Tv="FIS_v2",t1="https://firebaseinstallations.googleapis.com/v1",n1=60*60*1e3,i1="installations",s1="Installations";/**
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
 */const r1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ai=new zn(i1,s1,r1);function bv(t){return t instanceof Et&&t.code.includes("request-failed")}/**
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
 */function Cv({projectId:t}){return`${t1}/projects/${t}/installations`}function Sv(t){return{token:t.token,requestStatus:2,expiresIn:a1(t.expiresIn),creationTime:Date.now()}}async function Rv(t,e){const i=(await e.json()).error;return Ai.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Av({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function o1(t,{refreshToken:e}){const n=Av(t);return n.append("Authorization",l1(e)),n}async function kv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function a1(t){return Number(t.replace("s","000"))}function l1(t){return`${Tv} ${t}`}/**
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
 */async function c1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Cv(t),s=Av(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Tv,appId:t.appId,sdkVersion:Iv},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await kv(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Sv(c.authToken)}}else throw await Rv("Create Installation",l)}/**
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
 */function Pv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function u1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const h1=/^[cdef][\w-]{21}$/,Gc="";function d1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=f1(t);return h1.test(n)?n:Gc}catch{return Gc}}function f1(t){return u1(t).substr(0,22)}/**
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
 */function Ja(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ov=new Map;function Nv(t,e){const n=Ja(t);xv(n,e),p1(n,e)}function xv(t,e){const n=Ov.get(t);if(n)for(const i of n)i(e)}function p1(t,e){const n=g1();n&&n.postMessage({key:t,fid:e}),m1()}let ci=null;function g1(){return!ci&&"BroadcastChannel"in self&&(ci=new BroadcastChannel("[Firebase] FID Change"),ci.onmessage=t=>{xv(t.data.key,t.data.fid)}),ci}function m1(){Ov.size===0&&ci&&(ci.close(),ci=null)}/**
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
 */const _1="firebase-installations-database",y1=1,ki="firebase-installations-store";let Dl=null;function xh(){return Dl||(Dl=QN(_1,y1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}})),Dl}async function ha(t,e){const n=Ja(t),s=(await xh()).transaction(ki,"readwrite"),r=s.objectStore(ki),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Nv(t,e.fid),e}async function Dv(t){const e=Ja(t),i=(await xh()).transaction(ki,"readwrite");await i.objectStore(ki).delete(e),await i.done}async function Qa(t,e){const n=Ja(t),s=(await xh()).transaction(ki,"readwrite"),r=s.objectStore(ki),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Nv(t,a.fid),a}/**
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
 */async function Dh(t){let e;const n=await Qa(t.appConfig,i=>{const s=v1(i),r=w1(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===Gc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v1(t){const e=t||{fid:d1(),registrationStatus:0};return Mv(e)}function w1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ai.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=E1(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:I1(t)}:{installationEntry:e}}async function E1(t,e){try{const n=await c1(t,e);return ha(t.appConfig,n)}catch(n){throw bv(n)&&n.customData.serverCode===409?await Dv(t.appConfig):await ha(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function I1(t){let e=await Ip(t.appConfig);for(;e.registrationStatus===1;)await Pv(100),e=await Ip(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Dh(t);return i||n}return e}function Ip(t){return Qa(t,e=>{if(!e)throw Ai.create("installation-not-found");return Mv(e)})}function Mv(t){return T1(t)?{fid:t.fid,registrationStatus:0}:t}function T1(t){return t.registrationStatus===1&&t.registrationTime+Ev<Date.now()}/**
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
 */async function b1({appConfig:t,heartbeatServiceProvider:e},n){const i=C1(t,n),s=o1(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Iv,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await kv(()=>fetch(i,a));if(l.ok){const c=await l.json();return Sv(c)}else throw await Rv("Generate Auth Token",l)}function C1(t,{fid:e}){return`${Cv(t)}/${e}/authTokens:generate`}/**
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
 */async function Mh(t,e=!1){let n;const i=await Qa(t.appConfig,r=>{if(!Lv(r))throw Ai.create("not-registered");const o=r.authToken;if(!e&&A1(o))return r;if(o.requestStatus===1)return n=S1(t,e),r;{if(!navigator.onLine)throw Ai.create("app-offline");const a=P1(r);return n=R1(t,a),a}});return n?await n:i.authToken}async function S1(t,e){let n=await Tp(t.appConfig);for(;n.authToken.requestStatus===1;)await Pv(100),n=await Tp(t.appConfig);const i=n.authToken;return i.requestStatus===0?Mh(t,e):i}function Tp(t){return Qa(t,e=>{if(!Lv(e))throw Ai.create("not-registered");const n=e.authToken;return O1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function R1(t,e){try{const n=await b1(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ha(t.appConfig,i),n}catch(n){if(bv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Dv(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ha(t.appConfig,i)}throw n}}function Lv(t){return t!==void 0&&t.registrationStatus===2}function A1(t){return t.requestStatus===2&&!k1(t)}function k1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+n1}function P1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function O1(t){return t.requestStatus===1&&t.requestTime+Ev<Date.now()}/**
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
 */async function N1(t){const e=t,{installationEntry:n,registrationPromise:i}=await Dh(e);return i?i.catch(console.error):Mh(e).catch(console.error),n.fid}/**
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
 */async function x1(t,e=!1){const n=t;return await D1(n),(await Mh(n,e)).token}async function D1(t){const{registrationPromise:e}=await Dh(t);e&&await e}/**
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
 */function M1(t){if(!t||!t.options)throw Ml("App Configuration");if(!t.name)throw Ml("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ml(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ml(t){return Ai.create("missing-app-config-values",{valueName:t})}/**
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
 */const Fv="installations",L1="installations-internal",F1=t=>{const e=t.getProvider("app").getImmediate(),n=M1(e),i=Or(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},U1=t=>{const e=t.getProvider("app").getImmediate(),n=Or(e,Fv).getImmediate();return{getId:()=>N1(n),getToken:s=>x1(n,s)}};function $1(){ct(new nt(Fv,F1,"PUBLIC")),ct(new nt(L1,U1,"PRIVATE"))}$1();Fe(wv,Nh);Fe(wv,Nh,"esm2017");/**
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
 */const bp="analytics",j1="firebase_id",B1="origin",H1=60*1e3,V1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lh="https://www.googletagmanager.com/gtag/js";/**
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
 */const lt=new fs("@firebase/analytics");/**
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
 */const W1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yt=new zn("analytics","Analytics",W1);/**
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
 */function K1(t){if(!t.startsWith(Lh)){const e=yt.create("invalid-gtag-resource",{gtagURL:t});return lt.warn(e.message),""}return t}function Uv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function q1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function z1(t,e){const n=q1("firebase-js-sdk-policy",{createScriptURL:K1}),i=document.createElement("script"),s=`${Lh}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function G1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Y1(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await Uv(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){lt.error(a)}t("config",s,r)}async function X1(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Uv(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){lt.error(r)}}function J1(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await X1(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await Y1(t,e,n,i,a,l)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){lt.error(a)}}return s}function Q1(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=J1(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Z1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lh)&&n.src.includes(t))return n;return null}/**
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
 */const ex=30,tx=1e3;class nx{constructor(e={},n=tx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $v=new nx;function ix(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sx(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:ix(i)},r=V1.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw yt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function rx(t,e=$v,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw yt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw yt.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new lx;return setTimeout(async()=>{a.abort()},n!==void 0?n:H1),jv({appId:i,apiKey:s,measurementId:r},o,a,e)}async function jv(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=$v){var r;const{appId:o,measurementId:a}=t;try{await ox(i,e)}catch(l){if(a)return lt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await sx(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!ax(c)){if(s.deleteThrottleMetadata(o),a)return lt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?$d(n,s.intervalMillis,ex):$d(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),lt.debug(`Calling attemptFetch again in ${u} millis`),jv(t,h,i,s)}}function ox(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ax(t){if(!(t instanceof Et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class lx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cx(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
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
 */async function ux(){if(bu())try{await dm()}catch(t){return lt.warn(yt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return lt.warn(yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hx(t,e,n,i,s,r,o){var a;const l=rx(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&lt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>lt.error(g)),e.push(l);const c=ux().then(g=>{if(g)return i.getId()}),[u,h]=await Promise.all([l,c]);Z1(r)||z1(r,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[B1]="firebase",d.update=!0,h!=null&&(d[j1]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class dx{constructor(e){this.app=e}_delete(){return delete er[this.app.options.appId],Promise.resolve()}}let er={},Cp=[];const Sp={};let Ll="dataLayer",fx="gtag",Rp,Bv,Ap=!1;function px(){const t=[];if(cm()&&t.push("This is a browser extension environment."),$b()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=yt.create("invalid-analytics-context",{errorInfo:e});lt.warn(n.message)}}function gx(t,e,n){px();const i=t.options.appId;if(!i)throw yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)lt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yt.create("no-api-key");if(er[i]!=null)throw yt.create("already-exists",{id:i});if(!Ap){G1(Ll);const{wrappedGtag:r,gtagCore:o}=Q1(er,Cp,Sp,Ll,fx);Bv=r,Rp=o,Ap=!0}return er[i]=hx(t,Cp,Sp,e,Rp,Ll,n),new dx(t)}function mx(t,e,n,i){t=wn(t),cx(Bv,er[t.app.options.appId],e,n,i).catch(s=>lt.error(s))}const kp="@firebase/analytics",Pp="0.10.0";function _x(){ct(new nt(bp,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return gx(i,s,n)},"PUBLIC")),ct(new nt("analytics-internal",t,"PRIVATE")),Fe(kp,Pp),Fe(kp,Pp,"esm2017");function t(e){try{const n=e.getProvider(bp).getImmediate();return{logEvent:(i,s,r)=>mx(n,i,s,r)}}catch(n){throw yt.create("interop-component-reg-failed",{reason:n})}}}_x();const yx={apiKey:"AIzaSyDZe5Afwd4IF8O0sjGx8UBlJprasm20-Qk",authDomain:"freehua-db.firebaseapp.com",projectId:"freehua-db",storageBucket:"freehua-db.appspot.com",messagingSenderId:"912869104324",appId:"1:912869104324:web:867e8d751670c004fb0791",measurementId:"G-S0D7E23XXE"},Hv=mm(yx);QO(Hv);const vx={};function wx(t,e){return Yt(),Xt("h1",null,"casa")}const Ex=Jn(vx,[["render",wx],["__file","/home/gabriel/freehua-web/src/pages/Home.vue"]]),Vv=Jm();function Ix(t,e){return nS(Vv,t,e).then(n=>(localStorage.userCredential=JSON.stringify(n.user),n.user)).catch(n=>(alert(n.message),null))}const Tx=(t,e)=>tS(Vv,t,e).then(n=>{const i=n.user;return alert("Perfil criado com sucesso"),i}).catch(n=>(alert(n.message),null)),bx={data(){return{email:"",password:""}},methods:{async submit(){await Ix(this.email,this.password)&&this.$router.push("/dashboard")}}},Cx={class:"container"},Sx={class:"form-group my-4"},Rx={class:"form-group my-4"},Ax={class:"container-fluid"},kx=ne("button",{type:"submit",class:"btn btn-primary btn-lg mx-2"},"Registrar",-1);function Px(t,e,n,i,s,r){const o=kr("router-link");return Yt(),Xt("div",Cx,[ne("form",null,[ne("div",Sx,[Vs(ne("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a),placeholder:"Email"},null,512),[[qs,s.email]])]),ne("div",Rx,[Vs(ne("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),placeholder:"Senha"},null,512),[[qs,s.password]])]),ne("div",Ax,[ne("button",{type:"submit",class:"btn btn-primary btn-lg",onClick:e[2]||(e[2]=Lg((...a)=>r.submit&&r.submit(...a),["prevent"]))},"Logar"),Ee(o,{to:"/register"},{default:pn(()=>[kx]),_:1})])])])}const Ox=Jn(bx,[["render",Px],["__file","/home/gabriel/freehua-web/src/pages/Login.vue"]]),Nx={data(){return{email:"",password:"",confirmation:""}},methods:{submit(){if(this.confirmation!==this.password)return alert("Senhas não condizem"),null;if(this.email==""|this.password=="")return alert("Preencha tudo"),null;Tx(this.email,this.password)&&this.$router.push("/login")}}},xx={class:"container"},Dx={class:"form-group my-4"},Mx={class:"form-group my-4"},Lx={class:"form-group my-4"},Fx={class:"container-fluid"};function Ux(t,e,n,i,s,r){return Yt(),Xt("div",xx,[ne("form",null,[ne("div",Dx,[Vs(ne("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o),placeholder:"Email"},null,512),[[qs,s.email]])]),ne("div",Mx,[Vs(ne("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),placeholder:"Senha"},null,512),[[qs,s.password]])]),ne("div",Lx,[Vs(ne("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.confirmation=o),type:"password",class:"form-control form-control-lg",placeholder:"Confirme senha"},null,512),[[qs,s.confirmation]])]),ne("div",Fx,[ne("button",{onClick:e[3]||(e[3]=Lg((...o)=>r.submit&&r.submit(...o),["prevent"])),type:"submit",class:"btn btn-primary btn-lg"},"Simbora!")])])])}const $x=Jn(Nx,[["render",Ux],["__file","/home/gabriel/freehua-web/src/pages/Register.vue"]]),jx={},Bx={class:"list-group"},Hx=gu('<a href="#" class="list-group-item list-group-item-action"> Cras justo odio </a><a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a><a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a><a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a><a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>',5),Vx=[Hx];function Wx(t,e,n,i,s,r){return Yt(),Xt("div",Bx,Vx)}const Kx=Jn(jx,[["render",Wx],["__file","/home/gabriel/freehua-web/src/components/List.vue"]]),qx={class:"d-flex flex-column"},zx={class:"mt-4"},Gx=ne("button",{type:"button",class:"btn btn-primary"},"Novo livro",-1),Yx=ne("button",{type:"button",class:"btn btn-primary ms-4"},"Novo capitulo",-1),Xx={methods:{logoff(){localStorage.userCredential=null}}},Jx=Object.assign(Xx,{__name:"Dashboard",setup(t){return(e,n)=>{const i=kr("router-link");return Yt(),Xt("div",qx,[Ee(Kx),ne("div",zx,[Ee(i,{to:"/upload"},{default:pn(()=>[Gx]),_:1}),Ee(i,{to:"/update"},{default:pn(()=>[Yx]),_:1}),Ee(i,{to:"/login"},{default:pn(()=>[ne("button",{onClick:n[0]||(n[0]=(...s)=>e.logoff&&e.logoff(...s)),type:"button",class:"btn btn-danger ms-4"},"Sair")]),_:1})])])}}}),Qx=Jn(Jx,[["__file","/home/gabriel/freehua-web/src/pages/Dashboard.vue"]]),Zx={},eD=gu('<div class="form-group"><label for="bookName" class="mb-1">Nome da obra</label><input type="text" class="form-control" id="bookName" placeholder="Solo Leveling"></div><div class="form-group my-4"><label for="bookType" class="mb-1">Tipo do livro</label><select class="form-control" id="bookType"><option>Manhuá (China)</option><option>Manhwa (Coréia)</option></select></div><div class="form-group my-4"><label for="formFile" class="form-label">Capítulo inicial <span class="text-secondary">(em pdf)</span></label><input class="form-control" type="file" id="formFile"></div><div class="form-group my-4"><label for="bookName" class="mb-1">Título do capítulo inicial da obra</label><input type="text" class="form-control" id="bookName" placeholder="A Invasão de Carlindo"></div>',4),tD=ne("button",{type:"submit",class:"btn btn-primary btn-lg"},"Criar",-1),nD=ne("button",{class:"btn btn-secondary ms-4"},"Voltar",-1);function iD(t,e){const n=kr("router-link");return Yt(),Xt("form",null,[eD,ne("div",null,[tD,Ee(n,{to:"/dashboard"},{default:pn(()=>[nD]),_:1})])])}const sD=Jn(Zx,[["render",iD],["__file","/home/gabriel/freehua-web/src/pages/Upload.vue"]]),rD=Sb({history:CT(),routes:[{path:"/login",name:"Login",component:Ox},{path:"/",name:"Home",component:Ex},{path:"/register",name:"Register",component:$x},{path:"/dashboard",name:"Dashboard",component:Qx},{path:"/upload",name:"Upload",component:sD}]});XI(VN).use(rD).use(AN,{firebaseApp:Hv,modules:[RN()]}).mount("#app");
