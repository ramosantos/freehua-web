(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Or(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Te=Object.freeze({}),zs=Object.freeze([]),Nt=()=>{},q_=()=>!1,_b=/^on[^a-z]/,Yo=t=>_b.test(t),pl=t=>t.startsWith("onUpdate:"),Me=Object.assign,Id=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yb=Object.prototype.hasOwnProperty,ie=(t,e)=>yb.call(t,e),H=Array.isArray,Xr=t=>Xo(t)==="[object Map]",ac=t=>Xo(t)==="[object Set]",Dp=t=>Xo(t)==="[object Date]",Q=t=>typeof t=="function",Le=t=>typeof t=="string",yo=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",bd=t=>(_e(t)||Q(t))&&Q(t.then)&&Q(t.catch),H_=Object.prototype.toString,Xo=t=>H_.call(t),Rd=t=>Xo(t).slice(8,-1),K_=t=>Xo(t)==="[object Object]",Ad=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Za=Or(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vb=Or("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),lc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Eb=/-(\w)/g,Dn=lc(t=>t.replace(Eb,(e,n)=>n?n.toUpperCase():"")),wb=/\B([A-Z])/g,Tr=lc(t=>t.replace(wb,"-$1").toLowerCase()),ls=lc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Br=lc(t=>t?`on${ls(t)}`:""),cs=(t,e)=>!Object.is(t,e),Fs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ml=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xp;const _l=()=>xp||(xp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cd(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Rb(r):Cd(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||_e(t))return t}const Tb=/;(?![^(]*\))/g,Ib=/:([^]+)/,bb=/\/\*[^]*?\*\//g;function Rb(t){const e={};return t.replace(bb,"").split(Tb).forEach(n=>{if(n){const r=n.split(Ib);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Sd(t){let e="";if(Le(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Sd(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ab="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Cb="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Sb=Or(Ab),Pb=Or(Cb),kb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nb=Or(kb);function z_(t){return!!t||t===""}function Ob(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=cc(t[r],e[r]);return n}function cc(t,e){if(t===e)return!0;let n=Dp(t),r=Dp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=yo(t),r=yo(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?Ob(t,e):!1;if(n=_e(t),r=_e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!cc(t[o],e[o]))return!1}}return String(t)===String(e)}function Db(t,e){return t.findIndex(n=>cc(n,e))}const Ju=t=>Le(t)?t:t==null?"":H(t)||_e(t)&&(t.toString===H_||!Q(t.toString))?JSON.stringify(t,G_,2):String(t),G_=(t,e)=>e&&e.__v_isRef?G_(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ac(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!H(e)&&!K_(e)?String(e):e;function Zu(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Xt;class Q_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}else Zu("cannot run an inactive effect scope.")}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function xb(t){return new Q_(t)}function Mb(t,e=Xt){e&&e.active&&e.effects.push(t)}function Lb(){return Xt}const Pd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Y_=t=>(t.w&Ir)>0,X_=t=>(t.n&Ir)>0,Vb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ir},Fb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Y_(s)&&!X_(s)?s.delete(t):e[n++]=s,s.w&=~Ir,s.n&=~Ir}e.length=n}},eh=new WeakMap;let Wi=0,Ir=1;const th=30;let bt;const Jr=Symbol("iterate"),nh=Symbol("Map key iterate");class kd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mb(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=gr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,gr=!0,Ir=1<<++Wi,Wi<=th?Vb(this):Mp(this),this.fn()}finally{Wi<=th&&Fb(this),Ir=1<<--Wi,bt=this.parent,gr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(Mp(this),this.onStop&&this.onStop(),this.active=!1)}}function Mp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gr=!0;const J_=[];function Ts(){J_.push(gr),gr=!1}function Is(){const t=J_.pop();gr=t===void 0?!0:t}function yt(t,e,n){if(gr&&bt){let r=eh.get(t);r||eh.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Pd()),Z_(s,{effect:bt,target:t,type:e,key:n})}}function Z_(t,e){let n=!1;Wi<=th?X_(t)||(t.n|=Ir,n=!Y_(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t),bt.onTrack&&bt.onTrack(Me({effect:bt},e)))}function Cn(t,e,n,r,s,i){const o=eh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((u,h)=>{(h==="length"||h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Ad(n)&&a.push(o.get("length")):(a.push(o.get(Jr)),Xr(t)&&a.push(o.get(nh)));break;case"delete":H(t)||(a.push(o.get(Jr)),Xr(t)&&a.push(o.get(nh)));break;case"set":Xr(t)&&a.push(o.get(Jr));break}const l={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&rh(a[0],l);else{const c=[];for(const u of a)u&&c.push(...u);rh(Pd(c),l)}}function rh(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Lp(r,e);for(const r of n)r.computed||Lp(r,e)}function Lp(t,e){(t!==bt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Me({effect:t},e)),t.scheduler?t.scheduler():t.run())}const Ub=Or("__proto__,__v_isRef,__isVue"),ey=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yo)),Vp=$b();function $b(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ne(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ne)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ts();const r=ne(this)[e].apply(this,n);return Is(),r}}),t}function Bb(t){const e=ne(this);return yt(e,"has",t),e.hasOwnProperty(t)}class ty{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?ly:ay:i?oy:iy).get(e))return e;const o=H(e);if(!s){if(o&&ie(Vp,n))return Reflect.get(Vp,n,r);if(n==="hasOwnProperty")return Bb}const a=Reflect.get(e,n,r);return(yo(n)?ey.has(n):Ub(n))||(s||yt(e,"get",n),i)?a:ze(a)?o&&Ad(n)?a:a.value:_e(a)?s?uy(a):dc(a):a}}class ny extends ty{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(br(i)&&ze(i)&&!ze(r))return!1;if(!this._shallow&&(!yl(r)&&!br(r)&&(i=ne(i),r=ne(r)),!H(e)&&ze(i)&&!ze(r)))return i.value=r,!0;const o=H(e)&&Ad(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,r,s);return e===ne(s)&&(o?cs(r,i)&&Cn(e,"set",n,r,i):Cn(e,"add",n,r)),a}deleteProperty(e,n){const r=ie(e,n),s=e[n],i=Reflect.deleteProperty(e,n);return i&&r&&Cn(e,"delete",n,void 0,s),i}has(e,n){const r=Reflect.has(e,n);return(!yo(n)||!ey.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",H(e)?"length":Jr),Reflect.ownKeys(e)}}class ry extends ty{constructor(e=!1){super(!0,e)}set(e,n){return Zu(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0}deleteProperty(e,n){return Zu(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}}const jb=new ny,Wb=new ry,qb=new ny(!0),Hb=new ry(!0),Nd=t=>t,uc=t=>Reflect.getPrototypeOf(t);function Pa(t,e,n=!1,r=!1){t=t.__v_raw;const s=ne(t),i=ne(e);n||(cs(e,i)&&yt(s,"get",e),yt(s,"get",i));const{has:o}=uc(s),a=r?Nd:n?Od:vo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ka(t,e=!1){const n=this.__v_raw,r=ne(n),s=ne(t);return e||(cs(t,s)&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Na(t,e=!1){return t=t.__v_raw,!e&&yt(ne(t),"iterate",Jr),Reflect.get(t,"size",t)}function Fp(t){t=ne(t);const e=ne(this);return uc(e).has.call(e,t)||(e.add(t),Cn(e,"add",t,t)),this}function Up(t,e){e=ne(e);const n=ne(this),{has:r,get:s}=uc(n);let i=r.call(n,t);i?sy(n,r,t):(t=ne(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?cs(e,o)&&Cn(n,"set",t,e,o):Cn(n,"add",t,e),this}function $p(t){const e=ne(this),{has:n,get:r}=uc(e);let s=n.call(e,t);s?sy(e,n,t):(t=ne(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&Cn(e,"delete",t,void 0,i),o}function Bp(){const t=ne(this),e=t.size!==0,n=Xr(t)?new Map(t):new Set(t),r=t.clear();return e&&Cn(t,"clear",void 0,void 0,n),r}function Oa(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ne(o),l=e?Nd:t?Od:vo;return!t&&yt(a,"iterate",Jr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Da(t,e,n){return function(...r){const s=this.__v_raw,i=ne(s),o=Xr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Nd:e?Od:vo;return!e&&yt(i,"iterate",l?nh:Jr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function rr(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${ls(t)} operation ${n}failed: target is readonly.`,ne(this))}return t==="delete"?!1:this}}function Kb(){const t={get(i){return Pa(this,i)},get size(){return Na(this)},has:ka,add:Fp,set:Up,delete:$p,clear:Bp,forEach:Oa(!1,!1)},e={get(i){return Pa(this,i,!1,!0)},get size(){return Na(this)},has:ka,add:Fp,set:Up,delete:$p,clear:Bp,forEach:Oa(!1,!0)},n={get(i){return Pa(this,i,!0)},get size(){return Na(this,!0)},has(i){return ka.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Oa(!0,!1)},r={get(i){return Pa(this,i,!0,!0)},get size(){return Na(this,!0)},has(i){return ka.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Oa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Da(i,!1,!1),n[i]=Da(i,!0,!1),e[i]=Da(i,!1,!0),r[i]=Da(i,!0,!0)}),[t,n,e,r]}const[zb,Gb,Qb,Yb]=Kb();function hc(t,e){const n=e?t?Yb:Qb:t?Gb:zb;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const Xb={get:hc(!1,!1)},Jb={get:hc(!1,!0)},Zb={get:hc(!0,!1)},eR={get:hc(!0,!0)};function sy(t,e,n){const r=ne(n);if(r!==n&&e.call(t,r)){const s=Rd(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const iy=new WeakMap,oy=new WeakMap,ay=new WeakMap,ly=new WeakMap;function tR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nR(t){return t.__v_skip||!Object.isExtensible(t)?0:tR(Rd(t))}function dc(t){return br(t)?t:fc(t,!1,jb,Xb,iy)}function cy(t){return fc(t,!1,qb,Jb,oy)}function uy(t){return fc(t,!0,Wb,Zb,ay)}function qi(t){return fc(t,!0,Hb,eR,ly)}function fc(t,e,n,r,s){if(!_e(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Zr(t){return br(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function yl(t){return!!(t&&t.__v_isShallow)}function sh(t){return Zr(t)||br(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function hy(t){return ml(t,"__v_skip",!0),t}const vo=t=>_e(t)?dc(t):t,Od=t=>_e(t)?uy(t):t;function dy(t){gr&&bt&&(t=ne(t),Z_(t.dep||(t.dep=Pd()),{target:t,type:"get",key:"value"}))}function fy(t,e){t=ne(t);const n=t.dep;n&&rh(n,{target:t,type:"set",key:"value",newValue:e})}function ze(t){return!!(t&&t.__v_isRef===!0)}function py(t){return my(t,!1)}function rR(t){return my(t,!0)}function my(t,e){return ze(t)?t:new sR(t,e)}class sR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:vo(e)}get value(){return dy(this),this._value}set value(e){const n=this.__v_isShallow||yl(e)||br(e);e=n?e:ne(e),cs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vo(e),fy(this,e))}}function Gs(t){return ze(t)?t.value:t}const iR={get:(t,e,n)=>Gs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gy(t){return Zr(t)?t:new Proxy(t,iR)}class oR{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new kd(e,()=>{this._dirty||(this._dirty=!0,fy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ne(this);return dy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function aR(t,e,n=!1){let r,s;const i=Q(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new oR(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const es=[];function el(t){es.push(t)}function tl(){es.pop()}function S(t,...e){Ts();const n=es.length?es[es.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=lR();if(r)Kn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${Ec(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...cR(s)),console.warn(...i)}Is()}function lR(){let t=es[es.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function cR(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...uR(n))}),e}function uR({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${Ec(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...hR(t.props),i]:[s+i]}function hR(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(..._y(r,t[r]))}),n.length>3&&e.push(" ..."),e}function _y(t,e,n){return Le(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:ze(e)?(e=_y(t,ne(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):Q(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ne(e),n?e:[`${t}=`,e])}const Dd={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Kn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){pc(i,e,n)}return s}function rn(t,e,n,r){if(Q(t)){const i=Kn(t,e,n,r);return i&&bd(i)&&i.catch(o=>{pc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(rn(t[i],e,n,r));return s}function pc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Dd[n];for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Kn(l,null,10,[t,o,a]);return}}dR(t,n,s,r)}function dR(t,e,n,r=!0){{const s=Dd[e];if(n&&el(n),S(`Unhandled error${s?` during execution of ${s}`:""}`),n&&tl(),r)throw t;console.error(t)}}let Eo=!1,ih=!1;const pt=[];let vn=0;const Qs=[];let yn=null,or=0;const yy=Promise.resolve();let xd=null;const fR=100;function vy(t){const e=xd||yy;return t?e.then(this?t.bind(this):t):e}function pR(t){let e=vn+1,n=pt.length;for(;e<n;){const r=e+n>>>1;wo(pt[r])<t?e=r+1:n=r}return e}function mc(t){(!pt.length||!pt.includes(t,Eo&&t.allowRecurse?vn+1:vn))&&(t.id==null?pt.push(t):pt.splice(pR(t.id),0,t),Ey())}function Ey(){!Eo&&!ih&&(ih=!0,xd=yy.then(Iy))}function mR(t){const e=pt.indexOf(t);e>vn&&pt.splice(e,1)}function wy(t){H(t)?Qs.push(...t):(!yn||!yn.includes(t,t.allowRecurse?or+1:or))&&Qs.push(t),Ey()}function jp(t,e=Eo?vn+1:0){for(t=t||new Map;e<pt.length;e++){const n=pt[e];if(n&&n.pre){if(Md(t,n))continue;pt.splice(e,1),e--,n()}}}function Ty(t){if(Qs.length){const e=[...new Set(Qs)];if(Qs.length=0,yn){yn.push(...e);return}for(yn=e,t=t||new Map,yn.sort((n,r)=>wo(n)-wo(r)),or=0;or<yn.length;or++)Md(t,yn[or])||yn[or]();yn=null,or=0}}const wo=t=>t.id==null?1/0:t.id,gR=(t,e)=>{const n=wo(t)-wo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Iy(t){ih=!1,Eo=!0,t=t||new Map,pt.sort(gR);const e=n=>Md(t,n);try{for(vn=0;vn<pt.length;vn++){const n=pt[vn];if(n&&n.active!==!1){if(e(n))continue;Kn(n,null,14)}}}finally{vn=0,pt.length=0,Ty(t),Eo=!1,xd=null,(pt.length||Qs.length)&&Iy(t)}}function Md(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>fR){const r=e.ownerInstance,s=r&&Hd(r.type);return S(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let ts=!1;const Us=new Set;_l().__VUE_HMR_RUNTIME__={createRecord:fu(by),rerender:fu(vR),reload:fu(ER)};const us=new Map;function _R(t){const e=t.type.__hmrId;let n=us.get(e);n||(by(e,t.type),n=us.get(e)),n.instances.add(t)}function yR(t){us.get(t.type.__hmrId).instances.delete(t)}function by(t,e){return us.has(t)?!1:(us.set(t,{initialDef:to(e),instances:new Set}),!0)}function to(t){return Xy(t)?t.__vccOpts:t}function vR(t,e){const n=us.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,to(r.type).render=e),r.renderCache=[],ts=!0,r.update(),ts=!1}))}function ER(t,e){const n=us.get(t);if(!n)return;e=to(e),Wp(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=to(s.type);Us.has(i)||(i!==n.initialDef&&Wp(i,e),Us.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Us.add(i),s.ceReload(e.styles),Us.delete(i)):s.parent?mc(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}wy(()=>{for(const s of r)Us.delete(to(s.type))})}function Wp(t,e){Me(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function fu(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let En,Hi=[],oh=!1;function Jo(t,...e){En?En.emit(t,...e):oh||Hi.push({event:t,args:e})}function Ry(t,e){var n,r;En=t,En?(En.enabled=!0,Hi.forEach(({event:s,args:i})=>En.emit(s,...i)),Hi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Ry(i,e)}),setTimeout(()=>{En||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,oh=!0,Hi=[])},3e3)):(oh=!0,Hi=[])}function wR(t,e){Jo("app:init",t,e,{Fragment:Pt,Text:Zo,Comment:on,Static:ro})}function TR(t){Jo("app:unmount",t)}const IR=Ld("component:added"),Ay=Ld("component:updated"),bR=Ld("component:removed"),RR=t=>{En&&typeof En.cleanupBuffer=="function"&&!En.cleanupBuffer(t)&&bR(t)};function Ld(t){return e=>{Jo(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const AR=Cy("perf:start"),CR=Cy("perf:end");function Cy(t){return(e,n,r)=>{Jo(t,e.appContext.app,e.uid,e,n,r)}}function SR(t,e,n){Jo("component:emit",t.appContext.app,t,e,n)}function PR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(Br(e)in h))&&S(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Br(e)}" prop.`);else{const d=u[e];Q(d)&&(d(...n)||S(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Te;d&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(gl))}SR(t,e,s);{const u=e.toLowerCase();u!==e&&r[Br(u)]&&S(`Event "${u}" is emitted in component ${Ec(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Tr(e)}" instead of "${e}".`)}let a,l=r[a=Br(e)]||r[a=Br(Dn(e))];!l&&i&&(l=r[a=Br(Tr(e))]),l&&rn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rn(c,t,6,s)}}function Sy(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=Sy(c,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(_e(t)&&r.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):Me(o,i),_e(t)&&r.set(t,o),o)}function gc(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Tr(e))||ie(t,e))}let Rt=null,Py=null;function vl(t){const e=Rt;return Rt=t,Py=t&&t.type.__scopeId||null,e}function sn(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&nm(-1);const i=vl(e);let o;try{o=t(...s)}finally{vl(i),r._d&&nm(1)}return Ay(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let ah=!1;function El(){ah=!0}function pu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:E}=t;let v,A;const D=vl(t);ah=!1;try{if(n.shapeFlag&4){const U=s||r;v=Jt(u.call(U,U,h,i,p,d,g)),A=l}else{const U=e;l===i&&El(),v=Jt(U.length>1?U(i,{get attrs(){return El(),l},slots:a,emit:c}):U(i,null)),A=e.props?l:NR(l)}}catch(U){so.length=0,pc(U,t,1),v=Oe(on)}let k=v,K;if(v.patchFlag>0&&v.patchFlag&2048&&([k,K]=kR(v)),A&&E!==!1){const U=Object.keys(A),{shapeFlag:me}=k;if(U.length){if(me&7)o&&U.some(pl)&&(A=OR(A,o)),k=Rr(k,A);else if(!ah&&k.type!==on){const xe=Object.keys(l),et=[],Be=[];for(let tt=0,Qt=xe.length;tt<Qt;tt++){const Ct=xe[tt];Yo(Ct)?pl(Ct)||et.push(Ct[2].toLowerCase()+Ct.slice(3)):Be.push(Ct)}Be.length&&S(`Extraneous non-props attributes (${Be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),et.length&&S(`Extraneous non-emits event listeners (${et.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(qp(k)||S("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=Rr(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(qp(k)||S("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=n.transition),K?K(k):v=k,vl(D),v}const kR=t=>{const e=t.children,n=t.dynamicChildren,r=ky(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Jt(r),o]};function ky(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Io(r)){if(r.type!==on||r.children==="v-if"){if(e)return;e=r}}else return}return e}const NR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},OR=(t,e)=>{const n={};for(const r in t)(!pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},qp=t=>t.shapeFlag&7||t.type===on;function DR(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if((s||a)&&ts||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!gc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Hp(r,o,c):!0:!!o;return!1}function Hp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!gc(n,i))return!0}return!1}function xR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const MR=t=>t.__isSuspense;function LR(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):wy(t)}function VR(t,e){return Vd(t,null,e)}const xa={};function no(t,e,n){return Q(e)||S("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Vd(t,e,n)}function Vd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){var a;e||(n!==void 0&&S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=U=>{S("Invalid watch source: ",U,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Lb()===((a=Ke)==null?void 0:a.scope)?Ke:null;let u,h=!1,d=!1;if(ze(t)?(u=()=>t.value,h=yl(t)):Zr(t)?(u=()=>t,r=!0):H(t)?(d=!0,h=t.some(U=>Zr(U)||yl(U)),u=()=>t.map(U=>{if(ze(U))return U.value;if(Zr(U))return Kr(U);if(Q(U))return Kn(U,c,2);l(U)})):Q(t)?e?u=()=>Kn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),rn(t,c,3,[g])}:(u=Nt,l(t)),e&&r){const U=u;u=()=>Kr(U())}let p,g=U=>{p=k.onStop=()=>{Kn(U,c,4)}},E;if(bo)if(g=Nt,e?n&&rn(e,c,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const U=KA();E=U.__watcherHandles||(U.__watcherHandles=[])}else return Nt;let v=d?new Array(t.length).fill(xa):xa;const A=()=>{if(k.active)if(e){const U=k.run();(r||h||(d?U.some((me,xe)=>cs(me,v[xe])):cs(U,v)))&&(p&&p(),rn(e,c,3,[U,v===xa?void 0:d&&v[0]===xa?[]:v,g]),v=U)}else k.run()};A.allowRecurse=!!e;let D;s==="sync"?D=A:s==="post"?D=()=>St(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),D=()=>mc(A));const k=new kd(u,D);k.onTrack=i,k.onTrigger=o,e?n?A():v=k.run():s==="post"?St(k.run.bind(k),c&&c.suspense):k.run();const K=()=>{k.stop(),c&&c.scope&&Id(c.scope.effects,k)};return E&&E.push(K),K}function FR(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?Ny(r,t):()=>r[t]:t.bind(r,r);let i;Q(e)?i=e:(i=e.handler,n=e);const o=Ke;si(this);const a=Vd(s,i.bind(r),n);return o?si(o):rs(),a}function Ny(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kr(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ze(t))Kr(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Kr(t[n],e);else if(ac(t)||Xr(t))t.forEach(n=>{Kr(n,e)});else if(K_(t))for(const n in t)Kr(t[n],e);return t}function Oy(t){vb(t)&&S("Do not use built-in directive ids as custom directive id: "+t)}function Ht(t,e){const n=Rt;if(n===null)return S("withDirectives can only be used inside render functions."),t;const r=vc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Te]=e[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&Kr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ts(),rn(l,n,8,[t.el,a,t,e]),Is())}}/*! #__NO_SIDE_EFFECTS__ */function Dy(t,e){return Q(t)?(()=>Me({name:t.name},e,{setup:t}))():t}const nl=t=>!!t.type.__asyncLoader,Fd=t=>t.type.__isKeepAlive;function UR(t,e){xy(t,"a",e)}function $R(t,e){xy(t,"da",e)}function xy(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_c(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fd(s.parent.vnode)&&BR(r,e,n,s),s=s.parent}}function BR(t,e,n,r){const s=_c(e,t,r,!0);My(()=>{Id(r[e],s)},n)}function _c(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ts(),si(n);const a=rn(e,n,t,o);return rs(),Is(),a});return r?s.unshift(i):s.push(i),i}else{const s=Br(Dd[t].replace(/ hook$/,""));S(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Jn=t=>(e,n=Ke)=>(!bo||t==="sp")&&_c(t,(...r)=>e(...r),n),jR=Jn("bm"),WR=Jn("m"),qR=Jn("bu"),HR=Jn("u"),KR=Jn("bum"),My=Jn("um"),zR=Jn("sp"),GR=Jn("rtg"),QR=Jn("rtc");function YR(t,e=Ke){_c("ec",t,e)}const lh="components";function bs(t,e){return JR(lh,t,!0,e)||t}const XR=Symbol.for("v-ndc");function JR(t,e,n=!0,r=!1){const s=Rt||Ke;if(s){const i=s.type;if(t===lh){const a=Hd(i,!1);if(a&&(a===e||a===Dn(e)||a===ls(Dn(e))))return i}const o=Kp(s[t]||i[t],e)||Kp(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===lh?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";S(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else S(`resolve${ls(t.slice(0,-1))} can only be used in render() or setup().`)}function Kp(t,e){return t&&(t[e]||t[Dn(e)]||t[ls(Dn(e))])}function Ly(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||S(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ch=t=>t?Gy(t)?vc(t)||t.proxy:ch(t.parent):null,ns=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>qi(t.props),$attrs:t=>qi(t.attrs),$slots:t=>qi(t.slots),$refs:t=>qi(t.refs),$parent:t=>ch(t.parent),$root:t=>ch(t.root),$emit:t=>t.emit,$options:t=>$d(t),$forceUpdate:t=>t.f||(t.f=()=>mc(t.update)),$nextTick:t=>t.n||(t.n=vy.bind(t.proxy)),$watch:t=>FR.bind(t)}),Ud=t=>t==="_"||t==="$",mu=(t,e)=>t!==Te&&!t.__isScriptSetup&&ie(t,e),Vy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(mu(r,e))return o[e]=1,r[e];if(s!==Te&&ie(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,i[e];if(n!==Te&&ie(n,e))return o[e]=4,n[e];uh&&(o[e]=0)}}const u=ns[e];let h,d;if(u)return e==="$attrs"?(yt(t,"get",e),El()):e==="$slots"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ie(d,e))return d[e];Rt&&(!Le(e)||e.indexOf("__v")!==0)&&(s!==Te&&Ud(e[0])&&ie(s,e)?S(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Rt&&S(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return mu(s,e)?(s[e]=n,!0):s.__isScriptSetup&&ie(s,e)?(S(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==Te&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)?(S(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(S(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&ie(t,o)||mu(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(ns,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};Vy.ownKeys=t=>(S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function ZR(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(ns).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>ns[n](t),set:Nt})}),e}function eA(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:Nt})})}function tA(t){const{ctx:e,setupState:n}=t;Object.keys(ne(n)).forEach(r=>{if(!n.__isScriptSetup){if(Ud(r[0])){S(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:Nt})}})}function zp(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function nA(){const t=Object.create(null);return(e,n)=>{t[n]?S(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let uh=!0;function rA(t){const e=$d(t),n=t.proxy,r=t.ctx;uh=!1,e.beforeCreate&&Gp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:E,deactivated:v,beforeDestroy:A,beforeUnmount:D,destroyed:k,unmounted:K,render:U,renderTracked:me,renderTriggered:xe,errorCaptured:et,serverPrefetch:Be,expose:tt,inheritAttrs:Qt,components:Ct,directives:pn,filters:Ca}=e,jt=nA();{const[re]=t.propsOptions;if(re)for(const se in re)jt("Props",se)}if(c&&sA(c,r,jt),o)for(const re in o){const se=o[re];Q(se)?(Object.defineProperty(r,re,{value:se.bind(n),configurable:!0,enumerable:!0,writable:!0}),jt("Methods",re)):S(`Method "${re}" has type "${typeof se}" in the component definition. Did you reference the function correctly?`)}if(s){Q(s)||S("The data option must be a function. Plain object usage is no longer supported.");const re=s.call(n,n);if(bd(re)&&S("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!_e(re))S("data() should return an object.");else{t.data=dc(re);for(const se in re)jt("Data",se),Ud(se[0])||Object.defineProperty(r,se,{configurable:!0,enumerable:!0,get:()=>re[se],set:Nt})}}if(uh=!0,i)for(const re in i){const se=i[re],Wt=Q(se)?se.bind(n,n):Q(se.get)?se.get.bind(n,n):Nt;Wt===Nt&&S(`Computed property "${re}" has no getter.`);const Fr=!Q(se)&&Q(se.set)?se.set.bind(n):()=>{S(`Write operation failed: computed property "${re}" is readonly.`)},er=Zt({get:Wt,set:Fr});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>er.value,set:mn=>er.value=mn}),jt("Computed",re)}if(a)for(const re in a)Fy(a[re],r,n,re);if(l){const re=Q(l)?l.call(n):l;Reflect.ownKeys(re).forEach(se=>{rl(se,re[se])})}u&&Gp(u,t,"c");function nt(re,se){H(se)?se.forEach(Wt=>re(Wt.bind(n))):se&&re(se.bind(n))}if(nt(jR,h),nt(WR,d),nt(qR,p),nt(HR,g),nt(UR,E),nt($R,v),nt(YR,et),nt(QR,me),nt(GR,xe),nt(KR,D),nt(My,K),nt(zR,Be),H(tt))if(tt.length){const re=t.exposed||(t.exposed={});tt.forEach(se=>{Object.defineProperty(re,se,{get:()=>n[se],set:Wt=>n[se]=Wt})})}else t.exposed||(t.exposed={});U&&t.render===Nt&&(t.render=U),Qt!=null&&(t.inheritAttrs=Qt),Ct&&(t.components=Ct),pn&&(t.directives=pn)}function sA(t,e,n=Nt){H(t)&&(t=hh(t));for(const r in t){const s=t[r];let i;_e(s)?"default"in s?i=Sn(s.from||r,s.default,!0):i=Sn(s.from||r):i=Sn(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function Gp(t,e,n){rn(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fy(t,e,n,r){const s=r.includes(".")?Ny(n,r):()=>n[r];if(Le(t)){const i=e[t];Q(i)?no(s,i):S(`Invalid watch handler specified by key "${t}"`,i)}else if(Q(t))no(s,t.bind(n));else if(_e(t))if(H(t))t.forEach(i=>Fy(i,e,n,r));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)?no(s,i,t):S(`Invalid watch handler specified by key "${t.handler}"`,i)}else S(`Invalid watch option: "${r}"`,t)}function $d(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>wl(l,c,o,!0)),wl(l,e,o)),_e(e)&&i.set(e,l),l}function wl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wl(t,i,n,!0),s&&s.forEach(o=>wl(t,o,n,!0));for(const o in e)if(r&&o==="expose")S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=iA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const iA={data:Qp,props:Yp,emits:Yp,methods:Ki,computed:Ki,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Ki,directives:Ki,watch:aA,provide:Qp,inject:oA};function Qp(t,e){return e?t?function(){return Me(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function oA(t,e){return Ki(hh(t),hh(e))}function hh(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function Ki(t,e){return t?Me(Object.create(null),t,e):e}function Yp(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Me(Object.create(null),zp(t),zp(e??{})):e}function aA(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function Uy(){return{app:null,config:{isNativeTag:q_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lA=0;function cA(t,e){return function(r,s=null){Q(r)||(r=Me({},r)),s!=null&&!_e(s)&&(S("root props passed to app.mount() must be an object."),s=null);const i=Uy();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){S("app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API.")}});const o=new WeakSet;let a=!1;const l=i.app={_uid:lA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:im,get config(){return i.config},set config(c){S("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return o.has(c)?S("Plugin has already been applied to target app."):c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)?(o.add(c),c(l,...u)):S('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return i.mixins.includes(c)?S("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):i.mixins.push(c),l},component(c,u){return gh(c,i.config),u?(i.components[c]&&S(`Component "${c}" has already been registered in target app.`),i.components[c]=u,l):i.components[c]},directive(c,u){return Oy(c),u?(i.directives[c]&&S(`Directive "${c}" has already been registered in target app.`),i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(a)S("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&S("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Oe(r,s);return d.appContext=i,i.reload=()=>{t(Rr(d),c,h)},u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,wR(l,im),vc(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,TR(l),delete l._container.__vue_app__):S("Cannot unmount an app that is not mounted.")},provide(c,u){return c in i.provides&&S(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),i.provides[c]=u,l},runWithContext(c){Tl=l;try{return c()}finally{Tl=null}}};return l}}let Tl=null;function rl(t,e){if(!Ke)S("provide() can only be used inside setup().");else{let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function Sn(t,e,n=!1){const r=Ke||Rt;if(r||Tl){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Tl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Q(e)?e.call(r&&r.proxy):e;S(`injection "${String(t)}" not found.`)}else S("inject() can only be used inside setup() or functional components.")}function uA(t,e,n,r=!1){const s={},i={};ml(i,yc,1),t.propsDefaults=Object.create(null),$y(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);jy(e||{},s,t),n?t.props=r?s:cy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hA(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function dA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ne(s),[l]=t.propsOptions;let c=!1;if(!hA(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(gc(t.emitsOptions,d))continue;const p=e[d];if(l)if(ie(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const g=Dn(d);s[g]=dh(l,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{$y(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Tr(h))===h||!ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=dh(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],c=!0)}c&&Cn(t,"set","$attrs"),jy(e||{},s,t)}function $y(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Za(l))continue;const c=e[l];let u;s&&ie(s,u=Dn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:gc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ne(n),c=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=dh(s,l,h,c[h],t,!ie(c,h))}}return o}function dh(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(si(s),r=c[n]=l.call(null,e),rs())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Tr(n))&&(r=!0))}return r}function By(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=h=>{l=!0;const[d,p]=By(h,e,!0);Me(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return _e(t)&&r.set(t,zs),zs;if(H(i))for(let u=0;u<i.length;u++){Le(i[u])||S("props must be strings when using array syntax.",i[u]);const h=Dn(i[u]);Xp(h)&&(o[h]=Te)}else if(i){_e(i)||S("invalid props options",i);for(const u in i){const h=Dn(u);if(Xp(h)){const d=i[u],p=o[h]=H(d)||Q(d)?{type:d}:Me({},d);if(p){const g=Zp(Boolean,p.type),E=Zp(String,p.type);p[0]=g>-1,p[1]=E<0||g<E,(g>-1||ie(p,"default"))&&a.push(h)}}}}const c=[o,a];return _e(t)&&r.set(t,c),c}function Xp(t){return t[0]!=="$"?!0:(S(`Invalid prop name: "${t}" is a reserved property.`),!1)}function fh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Jp(t,e){return fh(t)===fh(e)}function Zp(t,e){return H(e)?e.findIndex(n=>Jp(n,t)):Q(e)&&Jp(e,t)?0:-1}function jy(t,e,n){const r=ne(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&fA(i,r[i],o,!ie(t,i)&&!ie(t,Tr(i)))}}function fA(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){S('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let l=!1;const c=H(s)?s:[s],u=[];for(let h=0;h<c.length&&!l;h++){const{valid:d,expectedType:p}=mA(e,c[h]);u.push(p||""),l=d}if(!l){S(gA(t,e,u));return}}o&&!o(e)&&S('Invalid prop: custom validator check failed for prop "'+t+'".')}}const pA=Or("String,Number,Boolean,Function,Symbol,BigInt");function mA(t,e){let n;const r=fh(e);if(pA(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=_e(t):r==="Array"?n=H(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function gA(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(ls).join(" | ")}`;const s=n[0],i=Rd(e),o=em(e,s),a=em(e,i);return n.length===1&&tm(s)&&!_A(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,tm(i)&&(r+=`with value ${a}.`),r}function em(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function tm(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function _A(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Wy=t=>t[0]==="_"||t==="$stable",Bd=t=>H(t)?t.map(Jt):[Jt(t)],yA=(t,e,n)=>{if(e._n)return e;const r=sn((...s)=>(Ke&&S(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Bd(e(...s))),n);return r._c=!1,r},qy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wy(s))continue;const i=t[s];if(Q(i))e[s]=yA(s,i,r);else if(i!=null){S(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=Bd(i);e[s]=()=>o}}},Hy=(t,e)=>{Fd(t.vnode)||S("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Bd(e);t.slots.default=()=>n},vA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),ml(e,"_",n)):qy(e,t.slots={})}else t.slots={},e&&Hy(t,e);ml(t.slots,yc,1)},EA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Te;if(r.shapeFlag&32){const a=e._;a?ts?(Me(s,e),Cn(t,"set","$slots")):n&&a===1?i=!1:(Me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,qy(e,s)),o=e}else e&&(Hy(t,e),o={default:1});if(i)for(const a in s)!Wy(a)&&o[a]==null&&delete s[a]};function ph(t,e,n,r,s=!1){if(H(t)){t.forEach((d,p)=>ph(d,e&&(H(e)?e[p]:e),n,r,s));return}if(nl(r)&&!s)return;const i=r.shapeFlag&4?vc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t;if(!a){S("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,ie(h,c)&&(h[c]=null)):ze(c)&&(c.value=null)),Q(l))Kn(l,a,12,[o,u]);else{const d=Le(l),p=ze(l);if(d||p){const g=()=>{if(t.f){const E=d?ie(h,l)?h[l]:u[l]:l.value;s?H(E)&&Id(E,i):H(E)?E.includes(i)||E.push(i):d?(u[l]=[i],ie(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ie(h,l)&&(h[l]=o)):p?(l.value=o,t.k&&(u[t.k]=o)):S("Invalid template ref type:",l,`(${typeof l})`)};o?(g.id=-1,St(g,n)):g()}else S("Invalid template ref type:",l,`(${typeof l})`)}}let Ni,cr;function Fn(t,e){t.appContext.config.performance&&Il()&&cr.mark(`vue-${e}-${t.uid}`),AR(t,e,Il()?cr.now():Date.now())}function Un(t,e){if(t.appContext.config.performance&&Il()){const n=`vue-${e}-${t.uid}`,r=n+":end";cr.mark(r),cr.measure(`<${Ec(t,t.type)}> ${e}`,n,r),cr.clearMarks(n),cr.clearMarks(r)}CR(t,e,Il()?cr.now():Date.now())}function Il(){return Ni!==void 0||(typeof window<"u"&&window.performance?(Ni=!0,cr=window.performance):Ni=!1),Ni}function wA(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const St=LR;function TA(t){return IA(t)}function IA(t,e){wA();const n=_l();n.__VUE__=!0,Ry(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Nt,insertStaticContent:g}=t,E=(f,m,_,T=null,w=null,P=null,x=!1,C=null,N=ts?!1:!!m.dynamicChildren)=>{if(f===m)return;f&&!Oi(f,m)&&(T=V(f),qt(f,w,P,!0),f=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:b,ref:q,shapeFlag:j}=m;switch(b){case Zo:v(f,m,_,T);break;case on:A(f,m,_,T);break;case ro:f==null?D(m,_,T,x):k(f,m,_,x);break;case Pt:pn(f,m,_,T,w,P,x,C,N);break;default:j&1?me(f,m,_,T,w,P,x,C,N):j&6?Ca(f,m,_,T,w,P,x,C,N):j&64||j&128?b.process(f,m,_,T,w,P,x,C,N,$):S("Invalid VNode type:",b,`(${typeof b})`)}q!=null&&w&&ph(q,f&&f.ref,P,m||f,!m)},v=(f,m,_,T)=>{if(f==null)r(m.el=a(m.children),_,T);else{const w=m.el=f.el;m.children!==f.children&&c(w,m.children)}},A=(f,m,_,T)=>{f==null?r(m.el=l(m.children||""),_,T):m.el=f.el},D=(f,m,_,T)=>{[f.el,f.anchor]=g(f.children,m,_,T,f.el,f.anchor)},k=(f,m,_,T)=>{if(m.children!==f.children){const w=d(f.anchor);U(f),[m.el,m.anchor]=g(m.children,_,w,T)}else m.el=f.el,m.anchor=f.anchor},K=({el:f,anchor:m},_,T)=>{let w;for(;f&&f!==m;)w=d(f),r(f,_,T),f=w;r(m,_,T)},U=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},me=(f,m,_,T,w,P,x,C,N)=>{x=x||m.type==="svg",f==null?xe(m,_,T,w,P,x,C,N):tt(f,m,w,P,x,C,N)},xe=(f,m,_,T,w,P,x,C)=>{let N,b;const{type:q,props:j,shapeFlag:z,transition:Z,dirs:oe}=f;if(N=f.el=o(f.type,P,j&&j.is,j),z&8?u(N,f.children):z&16&&Be(f.children,N,null,T,w,P&&q!=="foreignObject",x,C),oe&&Ur(f,null,T,"created"),et(N,f,f.scopeId,x,T),j){for(const we in j)we!=="value"&&!Za(we)&&i(N,we,null,j[we],P,f.children,T,w,y);"value"in j&&i(N,"value",null,j.value),(b=j.onVnodeBeforeMount)&&_n(b,T,f)}Object.defineProperty(N,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:T,enumerable:!1}),oe&&Ur(f,null,T,"beforeMount");const be=(!w||w&&!w.pendingBranch)&&Z&&!Z.persisted;be&&Z.beforeEnter(N),r(N,m,_),((b=j&&j.onVnodeMounted)||be||oe)&&St(()=>{b&&_n(b,T,f),be&&Z.enter(N),oe&&Ur(f,null,T,"mounted")},w)},et=(f,m,_,T,w)=>{if(_&&p(f,_),T)for(let P=0;P<T.length;P++)p(f,T[P]);if(w){let P=w.subTree;if(P.patchFlag>0&&P.patchFlag&2048&&(P=ky(P.children)||P),m===P){const x=w.vnode;et(f,x,x.scopeId,x.slotScopeIds,w.parent)}}},Be=(f,m,_,T,w,P,x,C,N=0)=>{for(let b=N;b<f.length;b++){const q=f[b]=C?ar(f[b]):Jt(f[b]);E(null,q,m,_,T,w,P,x,C)}},tt=(f,m,_,T,w,P,x)=>{const C=m.el=f.el;let{patchFlag:N,dynamicChildren:b,dirs:q}=m;N|=f.patchFlag&16;const j=f.props||Te,z=m.props||Te;let Z;_&&$r(_,!1),(Z=z.onVnodeBeforeUpdate)&&_n(Z,_,m,f),q&&Ur(m,f,_,"beforeUpdate"),_&&$r(_,!0),ts&&(N=0,x=!1,b=null);const oe=w&&m.type!=="foreignObject";if(b?(Qt(f.dynamicChildren,b,C,_,T,oe,P),mh(f,m)):x||Wt(f,m,C,null,_,T,oe,P,!1),N>0){if(N&16)Ct(C,m,j,z,_,T,w);else if(N&2&&j.class!==z.class&&i(C,"class",null,z.class,w),N&4&&i(C,"style",j.style,z.style,w),N&8){const be=m.dynamicProps;for(let we=0;we<be.length;we++){const je=be[we],Yt=j[je],Ds=z[je];(Ds!==Yt||je==="value")&&i(C,je,Yt,Ds,w,f.children,_,T,y)}}N&1&&f.children!==m.children&&u(C,m.children)}else!x&&b==null&&Ct(C,m,j,z,_,T,w);((Z=z.onVnodeUpdated)||q)&&St(()=>{Z&&_n(Z,_,m,f),q&&Ur(m,f,_,"updated")},T)},Qt=(f,m,_,T,w,P,x)=>{for(let C=0;C<m.length;C++){const N=f[C],b=m[C],q=N.el&&(N.type===Pt||!Oi(N,b)||N.shapeFlag&70)?h(N.el):_;E(N,b,q,null,T,w,P,x,!0)}},Ct=(f,m,_,T,w,P,x)=>{if(_!==T){if(_!==Te)for(const C in _)!Za(C)&&!(C in T)&&i(f,C,_[C],null,x,m.children,w,P,y);for(const C in T){if(Za(C))continue;const N=T[C],b=_[C];N!==b&&C!=="value"&&i(f,C,b,N,x,m.children,w,P,y)}"value"in T&&i(f,"value",_.value,T.value)}},pn=(f,m,_,T,w,P,x,C,N)=>{const b=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:z,slotScopeIds:Z}=m;(ts||j&2048)&&(j=0,N=!1,z=null),Z&&(C=C?C.concat(Z):Z),f==null?(r(b,_,T),r(q,_,T),Be(m.children,_,q,w,P,x,C,N)):j>0&&j&64&&z&&f.dynamicChildren?(Qt(f.dynamicChildren,z,_,w,P,x,C),mh(f,m)):Wt(f,m,_,q,w,P,x,C,N)},Ca=(f,m,_,T,w,P,x,C,N)=>{m.slotScopeIds=C,f==null?m.shapeFlag&512?w.ctx.activate(m,_,T,x,N):jt(m,_,T,w,P,x,N):nt(f,m,N)},jt=(f,m,_,T,w,P,x)=>{const C=f.component=LA(f,T,w);if(C.type.__hmrId&&_R(C),el(f),Fn(C,"mount"),Fd(f)&&(C.ctx.renderer=$),Fn(C,"init"),FA(C),Un(C,"init"),C.asyncDep){if(w&&w.registerDep(C,re),!f.el){const N=C.subTree=Oe(on);A(null,N,m,_)}return}re(C,f,m,_,w,P,x),tl(),Un(C,"mount")},nt=(f,m,_)=>{const T=m.component=f.component;if(DR(f,m,_))if(T.asyncDep&&!T.asyncResolved){el(m),se(T,m,_),tl();return}else T.next=m,mR(T.update),T.update();else m.el=f.el,T.vnode=m},re=(f,m,_,T,w,P,x)=>{const C=()=>{if(f.isMounted){let{next:q,bu:j,u:z,parent:Z,vnode:oe}=f,be=q,we;el(q||f.vnode),$r(f,!1),q?(q.el=oe.el,se(f,q,x)):q=oe,j&&Fs(j),(we=q.props&&q.props.onVnodeBeforeUpdate)&&_n(we,Z,q,oe),$r(f,!0),Fn(f,"render");const je=pu(f);Un(f,"render");const Yt=f.subTree;f.subTree=je,Fn(f,"patch"),E(Yt,je,h(Yt.el),V(Yt),f,w,P),Un(f,"patch"),q.el=je.el,be===null&&xR(f,je.el),z&&St(z,w),(we=q.props&&q.props.onVnodeUpdated)&&St(()=>_n(we,Z,q,oe),w),Ay(f),tl()}else{let q;const{el:j,props:z}=m,{bm:Z,m:oe,parent:be}=f,we=nl(m);if($r(f,!1),Z&&Fs(Z),!we&&(q=z&&z.onVnodeBeforeMount)&&_n(q,be,m),$r(f,!0),j&&Ne){const je=()=>{Fn(f,"render"),f.subTree=pu(f),Un(f,"render"),Fn(f,"hydrate"),Ne(j,f.subTree,f,w,null),Un(f,"hydrate")};we?m.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{Fn(f,"render");const je=f.subTree=pu(f);Un(f,"render"),Fn(f,"patch"),E(null,je,_,T,f,w,P),Un(f,"patch"),m.el=je.el}if(oe&&St(oe,w),!we&&(q=z&&z.onVnodeMounted)){const je=m;St(()=>_n(q,be,je),w)}(m.shapeFlag&256||be&&nl(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&St(f.a,w),f.isMounted=!0,IR(f),m=_=T=null}},N=f.effect=new kd(C,()=>mc(b),f.scope),b=f.update=()=>N.run();b.id=f.uid,$r(f,!0),N.onTrack=f.rtc?q=>Fs(f.rtc,q):void 0,N.onTrigger=f.rtg?q=>Fs(f.rtg,q):void 0,b.ownerInstance=f,b()},se=(f,m,_)=>{m.component=f;const T=f.vnode.props;f.vnode=m,f.next=null,dA(f,m.props,T,_),EA(f,m.children,_),Ts(),jp(),Is()},Wt=(f,m,_,T,w,P,x,C,N=!1)=>{const b=f&&f.children,q=f?f.shapeFlag:0,j=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){er(b,j,_,T,w,P,x,C,N);return}else if(z&256){Fr(b,j,_,T,w,P,x,C,N);return}}Z&8?(q&16&&y(b,w,P),j!==b&&u(_,j)):q&16?Z&16?er(b,j,_,T,w,P,x,C,N):y(b,w,P,!0):(q&8&&u(_,""),Z&16&&Be(j,_,T,w,P,x,C,N))},Fr=(f,m,_,T,w,P,x,C,N)=>{f=f||zs,m=m||zs;const b=f.length,q=m.length,j=Math.min(b,q);let z;for(z=0;z<j;z++){const Z=m[z]=N?ar(m[z]):Jt(m[z]);E(f[z],Z,_,null,w,P,x,C,N)}b>q?y(f,w,P,!0,!1,j):Be(m,_,T,w,P,x,C,N,j)},er=(f,m,_,T,w,P,x,C,N)=>{let b=0;const q=m.length;let j=f.length-1,z=q-1;for(;b<=j&&b<=z;){const Z=f[b],oe=m[b]=N?ar(m[b]):Jt(m[b]);if(Oi(Z,oe))E(Z,oe,_,null,w,P,x,C,N);else break;b++}for(;b<=j&&b<=z;){const Z=f[j],oe=m[z]=N?ar(m[z]):Jt(m[z]);if(Oi(Z,oe))E(Z,oe,_,null,w,P,x,C,N);else break;j--,z--}if(b>j){if(b<=z){const Z=z+1,oe=Z<q?m[Z].el:T;for(;b<=z;)E(null,m[b]=N?ar(m[b]):Jt(m[b]),_,oe,w,P,x,C,N),b++}}else if(b>z)for(;b<=j;)qt(f[b],w,P,!0),b++;else{const Z=b,oe=b,be=new Map;for(b=oe;b<=z;b++){const wt=m[b]=N?ar(m[b]):Jt(m[b]);wt.key!=null&&(be.has(wt.key)&&S("Duplicate keys found during update:",JSON.stringify(wt.key),"Make sure keys are unique."),be.set(wt.key,b))}let we,je=0;const Yt=z-oe+1;let Ds=!1,kp=0;const ki=new Array(Yt);for(b=0;b<Yt;b++)ki[b]=0;for(b=Z;b<=j;b++){const wt=f[b];if(je>=Yt){qt(wt,w,P,!0);continue}let gn;if(wt.key!=null)gn=be.get(wt.key);else for(we=oe;we<=z;we++)if(ki[we-oe]===0&&Oi(wt,m[we])){gn=we;break}gn===void 0?qt(wt,w,P,!0):(ki[gn-oe]=b+1,gn>=kp?kp=gn:Ds=!0,E(wt,m[gn],_,null,w,P,x,C,N),je++)}const Np=Ds?bA(ki):zs;for(we=Np.length-1,b=Yt-1;b>=0;b--){const wt=oe+b,gn=m[wt],Op=wt+1<q?m[wt+1].el:T;ki[b]===0?E(null,gn,_,Op,w,P,x,C,N):Ds&&(we<0||b!==Np[we]?mn(gn,_,Op,2):we--)}}},mn=(f,m,_,T,w=null)=>{const{el:P,type:x,transition:C,children:N,shapeFlag:b}=f;if(b&6){mn(f.component.subTree,m,_,T);return}if(b&128){f.suspense.move(m,_,T);return}if(b&64){x.move(f,m,_,$);return}if(x===Pt){r(P,m,_);for(let j=0;j<N.length;j++)mn(N[j],m,_,T);r(f.anchor,m,_);return}if(x===ro){K(f,m,_);return}if(T!==2&&b&1&&C)if(T===0)C.beforeEnter(P),r(P,m,_),St(()=>C.enter(P),w);else{const{leave:j,delayLeave:z,afterLeave:Z}=C,oe=()=>r(P,m,_),be=()=>{j(P,()=>{oe(),Z&&Z()})};z?z(P,oe,be):be()}else r(P,m,_)},qt=(f,m,_,T=!1,w=!1)=>{const{type:P,props:x,ref:C,children:N,dynamicChildren:b,shapeFlag:q,patchFlag:j,dirs:z}=f;if(C!=null&&ph(C,null,_,f,!0),q&256){m.ctx.deactivate(f);return}const Z=q&1&&z,oe=!nl(f);let be;if(oe&&(be=x&&x.onVnodeBeforeUnmount)&&_n(be,m,f),q&6)nr(f.component,_,T);else{if(q&128){f.suspense.unmount(_,T);return}Z&&Ur(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,_,w,$,T):b&&(P!==Pt||j>0&&j&64)?y(b,m,_,!1,!0):(P===Pt&&j&384||!w&&q&16)&&y(N,m,_),T&&tr(f)}(oe&&(be=x&&x.onVnodeUnmounted)||Z)&&St(()=>{be&&_n(be,m,f),Z&&Ur(f,null,m,"unmounted")},_)},tr=f=>{const{type:m,el:_,anchor:T,transition:w}=f;if(m===Pt){f.patchFlag>0&&f.patchFlag&2048&&w&&!w.persisted?f.children.forEach(x=>{x.type===on?s(x.el):tr(x)}):Sa(_,T);return}if(m===ro){U(f);return}const P=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:C}=w,N=()=>x(_,P);C?C(f.el,P,N):N()}else P()},Sa=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},nr=(f,m,_)=>{f.type.__hmrId&&yR(f);const{bum:T,scope:w,update:P,subTree:x,um:C}=f;T&&Fs(T),w.stop(),P&&(P.active=!1,qt(x,f,m,_)),C&&St(C,m),St(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve()),RR(f)},y=(f,m,_,T=!1,w=!1,P=0)=>{for(let x=P;x<f.length;x++)qt(f[x],m,_,T,w)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,m,_)=>{f==null?m._vnode&&qt(m._vnode,null,null,!0):E(m._vnode||null,f,m,null,null,null,_),jp(),Ty(),m._vnode=f},$={p:E,um:qt,m:mn,r:tr,mt:jt,mc:Be,pc:Wt,pbc:Qt,n:V,o:t};let ce,Ne;return e&&([ce,Ne]=e($)),{render:F,hydrate:ce,createApp:cA(F,ce)}}function $r({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mh(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ar(s[i]),a.el=o.el),n||mh(o,a)),a.type===Zo&&(a.el=o.el),a.type===on&&!a.el&&(a.el=o.el)}}function bA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const RA=t=>t.__isTeleport,Pt=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),ro=Symbol.for("v-stc"),so=[];let tn=null;function Ot(t=!1){so.push(tn=t?null:[])}function AA(){so.pop(),tn=so[so.length-1]||null}let To=1;function nm(t){To+=t}function CA(t){return t.dynamicChildren=To>0?tn||zs:null,AA(),To>0&&tn&&tn.push(t),t}function Dt(t,e,n,r,s,i){return CA(O(t,e,n,r,s,i,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function Oi(t,e){return e.shapeFlag&6&&Us.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const SA=(...t)=>PA(...t),yc="__vInternal",Ky=({key:t})=>t??null,sl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||ze(t)||Q(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,r=0,s=null,i=t===Pt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ky(e),ref:e&&sl(e),scopeId:Py,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return a?(jd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),l.key!==l.key&&S("VNode created with invalid key (NaN). VNode type:",l.type),To>0&&!o&&tn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&tn.push(l),l}const Oe=SA;function PA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===XR)&&(t||S(`Invalid vnode type when creating vnode: ${t}.`),t=on),Io(t)){const a=Rr(t,e,!0);return n&&jd(a,n),To>0&&!i&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(Xy(t)&&(t=t.__vccOpts),e){e=kA(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=Sd(a)),_e(l)&&(sh(l)&&!H(l)&&(l=Me({},l)),e.style=Cd(l))}const o=Le(t)?1:MR(t)?128:RA(t)?64:_e(t)?4:Q(t)?2:0;return o&4&&sh(t)&&(t=ne(t),S("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),O(t,e,n,r,s,o,i,!0)}function kA(t){return t?sh(t)||yc in t?Me({},t):t:null}function Rr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?DA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ky(a),ref:e&&e.ref?n&&s?H(s)?s.concat(sl(e)):[s,sl(e)]:sl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&H(o)?o.map(zy):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rr(t.ssContent),ssFallback:t.ssFallback&&Rr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function zy(t){const e=Rr(t);return H(t.children)&&(e.children=t.children.map(zy)),e}function NA(t=" ",e=0){return Oe(Zo,null,t,e)}function OA(t,e){const n=Oe(ro,null,t);return n.staticCount=e,n}function Jt(t){return t==null||typeof t=="boolean"?Oe(on):H(t)?Oe(Pt,null,t.slice()):typeof t=="object"?ar(t):Oe(Zo,null,String(t))}function ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rr(t)}function jd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),jd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(yc in e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[NA(e)]):n=8);t.children=e,t.shapeFlag|=n}function DA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Sd([e.class,r.class]));else if(s==="style")e.style=Cd([e.style,r.style]);else if(Yo(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function _n(t,e,n,r=null){rn(t,e,7,[n,r])}const xA=Uy();let MA=0;function LA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xA,i={uid:MA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Q_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:By(r,s),emitsOptions:Sy(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=ZR(i),i.root=e?e.root:i,i.emit=PR.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const Wd=()=>Ke||Rt;let qd,xs,rm="__VUE_INSTANCE_SETTERS__";(xs=_l()[rm])||(xs=_l()[rm]=[]),xs.push(t=>Ke=t),qd=t=>{xs.length>1?xs.forEach(e=>e(t)):xs[0](t)};const si=t=>{qd(t),t.scope.on()},rs=()=>{Ke&&Ke.scope.off(),qd(null)},VA=Or("slot,component");function gh(t,e){const n=e.isNativeTag||q_;(VA(t)||n(t))&&S("Do not use built-in or reserved HTML elements as component id: "+t)}function Gy(t){return t.vnode.shapeFlag&4}let bo=!1;function FA(t,e=!1){bo=e;const{props:n,children:r}=t.vnode,s=Gy(t);uA(t,n,s,e),vA(t,r);const i=s?UA(t,e):void 0;return bo=!1,i}function UA(t,e){var n;const r=t.type;{if(r.name&&gh(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)gh(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)Oy(i[o])}r.compilerOptions&&Qy()&&S('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=hy(new Proxy(t.ctx,Vy)),eA(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?jA(t):null;si(t),Ts();const o=Kn(s,t,0,[qi(t.props),i]);if(Is(),rs(),bd(o)){if(o.then(rs,rs),e)return o.then(a=>{sm(t,a,e)}).catch(a=>{pc(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";S(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else sm(t,o,e)}else Yy(t,e)}function sm(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)?(Io(e)&&S("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=gy(e),tA(t)):e!==void 0&&S(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Yy(t,n)}let _h;const Qy=()=>!_h;function Yy(t,e,n){const r=t.type;if(!t.render){if(!e&&_h&&!r.render){const s=r.template||$d(t).template;if(s){Fn(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Me(Me({isCustomElement:i,delimiters:a},o),l);r.render=_h(s,c),Un(t,"compile")}}t.render=r.render||Nt}{si(t),Ts();try{rA(t)}finally{Is(),rs()}}!r.render&&t.render===Nt&&!e&&(r.template?S('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):S("Component is missing template or render function."))}function $A(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return El(),yt(t,"get","$attrs"),e[n]},set(){return S("setupContext.attrs is readonly."),!1},deleteProperty(){return S("setupContext.attrs is readonly."),!1}}))}function BA(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return yt(t,"get","$slots"),e[n]}}))}function jA(t){return Object.freeze({get attrs(){return $A(t)},get slots(){return BA(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&S("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(H(n)?r="array":ze(n)&&(r="ref")),r!=="object"&&S(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function vc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gy(hy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ns)return ns[n](t)},has(e,n){return n in e||n in ns}}))}const WA=/(?:^|[-_])(\w)/g,qA=t=>t.replace(WA,e=>e.toUpperCase()).replace(/[-_]/g,"");function Hd(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function Ec(t,e,n=!1){let r=Hd(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?qA(r):n?"App":"Anonymous"}function Xy(t){return Q(t)&&"__vccOpts"in t}const Zt=(t,e)=>aR(t,e,bo);function Jy(t,e,n){const r=arguments.length;return r===2?_e(e)&&!H(e)?Io(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),Oe(t,e,n))}const HA=Symbol.for("v-scx"),KA=()=>{{const t=Sn(HA);return t||S("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function gu(t){return!!(t&&t.__v_isShallow)}function zA(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return _e(h)?h.__isVue?["div",t,"VueInstance"]:ze(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:Zr(h)?["div",{},["span",t,gu(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${br(h)?" (readonly)":""}`]:br(h)?["div",{},["span",t,gu(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",ne(h.props))),h.setupState!==Te&&d.push(o("setup",h.setupState)),h.data!==Te&&d.push(o("data",ne(h.data)));const p=l(h,"computed");p&&d.push(o("computed",p));const g=l(h,"inject");return g&&d.push(o("injected",g)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Me({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:_e(h)?["object",{object:d?ne(h):h}]:["span",n,String(h)]}function l(h,d){const p=h.type;if(Q(p))return;const g={};for(const E in h.ctx)c(p,E,d)&&(g[E]=h.ctx[E]);return g}function c(h,d,p){const g=h[p];if(H(g)&&g.includes(d)||_e(g)&&d in g||h.extends&&c(h.extends,d,p)||h.mixins&&h.mixins.some(E=>c(E,d,p)))return!0}function u(h){return gu(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const im="3.3.6",GA="http://www.w3.org/2000/svg",qr=typeof document<"u"?document:null,om=qr&&qr.createElement("template"),QA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?qr.createElementNS(GA,t):qr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>qr.createTextNode(t),createComment:t=>qr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{om.innerHTML=r?`<svg>${t}</svg>`:t;const a=om.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},YA=Symbol("_vtc");function XA(t,e,n){const r=t[YA];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const JA=Symbol("_vod");function ZA(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&yh(r,i,"");for(const i in n)yh(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),JA in t&&(r.display=i)}}const e0=/[^\\];\s*$/,am=/\s*!important$/;function yh(t,e,n){if(H(n))n.forEach(r=>yh(t,e,r));else if(n==null&&(n=""),e0.test(n)&&S(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=t0(t,e);am.test(n)?t.setProperty(Tr(r),n.replace(am,""),"important"):t[r]=n}}const lm=["Webkit","Moz","ms"],_u={};function t0(t,e){const n=_u[e];if(n)return n;let r=Dn(e);if(r!=="filter"&&r in t)return _u[e]=r;r=ls(r);for(let s=0;s<lm.length;s++){const i=lm[s]+r;if(i in t)return _u[e]=i}return e}const cm="http://www.w3.org/1999/xlink";function n0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(cm,e.slice(6,e.length)):t.setAttributeNS(cm,e,n);else{const i=Nb(e);n==null||i&&!z_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function r0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=z_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||S(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function Hr(t,e,n,r){t.addEventListener(e,n,r)}function s0(t,e,n,r){t.removeEventListener(e,n,r)}const um=Symbol("_vei");function i0(t,e,n,r,s=null){const i=t[um]||(t[um]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=o0(e);if(r){const c=i[e]=c0(r,s);Hr(t,a,c,l)}else o&&(s0(t,a,o,l),i[e]=void 0)}}const hm=/(?:Once|Passive|Capture)$/;function o0(t){let e;if(hm.test(t)){e={};let r;for(;r=t.match(hm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tr(t.slice(2)),e]}let yu=0;const a0=Promise.resolve(),l0=()=>yu||(a0.then(()=>yu=0),yu=Date.now());function c0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rn(u0(r,n.value),e,5,[r])};return n.value=t,n.attached=l0(),n}function u0(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dm=/^on[a-z]/,h0=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?XA(t,r,s):e==="style"?ZA(t,n,r):Yo(e)?pl(e)||i0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):d0(t,e,r,s))?r0(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),n0(t,e,r,s))};function d0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&dm.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dm.test(e)&&Le(n)?!1:e in t}const bl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Fs(e,n):e};function f0(t){t.target.composing=!0}function fm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ys=Symbol("_assign"),Bn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ys]=bl(s);const i=r||s.props&&s.props.type==="number";Hr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=gl(a)),t[Ys](a)}),n&&Hr(t,"change",()=>{t.value=t.value.trim()}),e||(Hr(t,"compositionstart",f0),Hr(t,"compositionend",fm),Hr(t,"change",fm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ys]=bl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&gl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ac(e);Hr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?gl(Rl(o)):Rl(o));t[Ys](t.multiple?s?new Set(i):i:i[0])}),t[Ys]=bl(r)},mounted(t,{value:e}){pm(t,e)},beforeUpdate(t,e,n){t[Ys]=bl(n)},updated(t,{value:e}){pm(t,e)}};function pm(t,e){const n=t.multiple;if(n&&!H(e)&&!ac(e)){S(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8,-1)}.`);return}for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Rl(i);if(n)H(e)?i.selected=Db(e,o)>-1:i.selected=e.has(o);else if(cc(Rl(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}function Rl(t){return"_value"in t?t._value:t.value}const p0=["ctrl","shift","alt","meta"],m0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>p0.some(n=>t[`${n}Key`]&&!e.includes(n))},wc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=m0[e[s]];if(i&&i(n,e))return}return t(n,...r)},g0=Me({patchProp:h0},QA);let mm;function _0(){return mm||(mm=TA(g0))}const y0=(...t)=>{const e=_0().createApp(...t);v0(e),E0(e);const{mount:n}=e;return e.mount=r=>{const s=w0(r);if(!s)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function v0(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Sb(e)||Pb(e),writable:!1})}function E0(t){if(Qy()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){S("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return S(r),n},set(){S(r)}})}}function w0(t){if(Le(t)){const e=document.querySelector(t);return e||S(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&S('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function T0(){zA()}T0();function I0(){return Zy().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Zy(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const b0=typeof Proxy=="function",R0="devtools-plugin:setup",A0="plugin:settings:set";let Ms,Eh;function C0(){var t;return Ms!==void 0||(typeof window<"u"&&window.performance?(Ms=!0,Eh=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ms=!0,Eh=global.perf_hooks.performance):Ms=!1),Ms}function S0(){return C0()?Eh.now():Date.now()}class P0{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return S0()}},n&&n.on(A0,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function k0(t,e){const n=t,r=Zy(),s=I0(),i=b0&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(R0,t,e);else{const o=i?new P0(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $n=typeof window<"u";function N0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function vu(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const io=()=>{},$t=Array.isArray;function de(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const O0=/\/$/,D0=t=>t.replace(O0,"");function Eu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=L0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function x0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _m(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ar(e.matched[r],n.matched[s])&&ev(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ar(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ev(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!M0(t[n],e[n]))return!1;return!0}function M0(t,e){return $t(t)?ym(t,e):$t(e)?ym(e,t):t===e}function ym(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function L0(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return de(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ro;(function(t){t.pop="pop",t.push="push"})(Ro||(Ro={}));var oo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oo||(oo={}));function V0(t){if(!t)if($n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),D0(t)}const F0=/^[^#]+#/;function U0(t,e){return t.replace(F0,"#")+e}function $0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Tc=()=>({left:window.pageXOffset,top:window.pageYOffset});function B0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){de(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{de(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){de(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=$0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vm(t,e){return(history.state?history.state.position-e:-1)+t}const wh=new Map;function j0(t,e){wh.set(t,e)}function W0(t){const e=wh.get(t);return wh.delete(t),e}let q0=()=>location.protocol+"//"+location.host;function tv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),gm(l,"")}return gm(n,t)+r+s}function H0(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=tv(t,location),g=n.value,E=e.value;let v=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}v=E?d.position-E.position:0}else r(p);s.forEach(A=>{A(n.value,g,{delta:v,type:Ro.pop,direction:v?v>0?oo.forward:oo.back:oo.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:Tc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Em(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Tc():null}}function K0(t){const{history:e,location:n}=window,r={value:tv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:q0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){de("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ye({},e.state,Em(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ye({},s.value,e.state,{forward:l,scroll:Tc()});e.state||de(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=ye({},Em(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function z0(t){t=V0(t);const e=K0(t),n=H0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:U0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function G0(t){return typeof t=="string"||t&&typeof t=="object"}function nv(t){return typeof t=="string"||typeof t=="symbol"}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rv=Symbol("navigation failure");var wm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wm||(wm={}));const Q0={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${X0(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function ii(t,e){return ye(new Error(Q0[t](e)),{type:t,[rv]:!0},e)}function Vn(t,e){return t instanceof Error&&rv in t&&(e==null||!!(t.type&e))}const Y0=["params","query","hash"];function X0(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of Y0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Tm="[^/]+?",J0={sensitive:!1,strict:!1,start:!0,end:!0},Z0=/[.+*?^${}()[\]/\\]/g;function eC(t,e){const n=ye({},J0,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Z0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:E,optional:v,regexp:A}=d;i.push({name:g,repeatable:E,optional:v});const D=A||Tm;if(D!==Tm){p+=10;try{new RegExp(`(${D})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${g}" (${D}): `+K.message)}}let k=E?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(k=v&&c.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),s+=k,p+=20,v&&(p+=-8),E&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:E,optional:v}=p,A=g in c?c[g]:"";if($t(A)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const D=$t(A)?A.join("/"):A;if(!D)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function tC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nC(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=tC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Im(r))return 1;if(Im(s))return-1}return s.length-r.length}function Im(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rC={type:0,value:""},sC=/[a-zA-Z0-9_]/;function iC(t){if(!t)return[[]];if(t==="/")return[[rC]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:sC.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function oC(t,e,n){const r=eC(iC(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&de(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aC(t,e){const n=[],r=new Map;e=Am({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,g=lC(u);dC(g,h),g.aliasOf=d&&d.record;const E=Am(e,u),v=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of k)v.push(ye({},g,{components:d?d.record.components:g.components,path:K,aliasOf:d?d.record:g}))}let A,D;for(const k of v){const{path:K}=k;if(h&&K[0]!=="/"){const U=h.record.path,me=U[U.length-1]==="/"?"":"/";k.path=h.record.path+(K&&me+K)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(A=oC(k,h,E),h&&K[0]==="/"&&fC(A,h),d?(d.alias.push(A),hC(d,A)):(D=D||A,D!==A&&D.alias.push(A),p&&u.name&&!Rm(A)&&o(u.name)),g.children){const U=g.children;for(let me=0;me<U.length;me++)i(U[me],A,d&&d.children[me])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return D?()=>{o(D)}:io}function o(u){if(nv(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&nC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!sv(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Rm(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},g,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ii(1,{location:u});{const D=Object.keys(u.params||{}).filter(k=>!d.keys.find(K=>K.name===k));D.length&&de(`Discarded invalid param(s) "${D.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}E=d.record.name,p=ye(bm(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&bm(u.params,d.keys.map(D=>D.name))),g=d.stringify(p)}else if("path"in u)g=u.path,g.startsWith("/")||de(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(D=>D.re.test(g)),d&&(p=d.parse(g),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw ii(1,{location:u,currentLocation:h});E=d.record.name,p=ye({},h.params,u.params),g=d.stringify(p)}const v=[];let A=d;for(;A;)v.unshift(A.record),A=A.parent;return{name:E,path:g,params:p,matched:v,meta:uC(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function bm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Rm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uC(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Am(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Th(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function hC(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(Th.bind(null,n)))return de(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(Th.bind(null,n)))return de(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function dC(t,e){e&&e.record.name&&!t.name&&!t.path&&de(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function fC(t,e){for(const n of e.keys)if(!t.keys.find(Th.bind(null,n)))return de(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function sv(t,e){return e.children.some(n=>n===t||sv(t,n))}const iv=/#/g,pC=/&/g,mC=/\//g,gC=/=/g,_C=/\?/g,ov=/\+/g,yC=/%5B/g,vC=/%5D/g,av=/%5E/g,EC=/%60/g,lv=/%7B/g,wC=/%7C/g,cv=/%7D/g,TC=/%20/g;function Kd(t){return encodeURI(""+t).replace(wC,"|").replace(yC,"[").replace(vC,"]")}function IC(t){return Kd(t).replace(lv,"{").replace(cv,"}").replace(av,"^")}function Ih(t){return Kd(t).replace(ov,"%2B").replace(TC,"+").replace(iv,"%23").replace(pC,"%26").replace(EC,"`").replace(lv,"{").replace(cv,"}").replace(av,"^")}function bC(t){return Ih(t).replace(gC,"%3D")}function RC(t){return Kd(t).replace(iv,"%23").replace(_C,"%3F")}function AC(t){return t==null?"":RC(t).replace(mC,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{de(`Error decoding "${t}". Using original value`)}return""+t}function CC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ov," "),o=i.indexOf("="),a=Ao(o<0?i:i.slice(0,o)),l=o<0?null:Ao(i.slice(o+1));if(a in e){let c=e[a];$t(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cm(t){let e="";for(let n in t){const r=t[n];if(n=bC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&Ih(i)):[r&&Ih(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function SC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const PC=Symbol("router view location matched"),Sm=Symbol("router view depth"),zd=Symbol("router"),uv=Symbol("route location"),bh=Symbol("router view location");function Di(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function lr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ii(4,{from:n,to:e})):h instanceof Error?a(h):G0(h)?a(ii(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,kC(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(d=>l._called?d:(de(h),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){de(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function kC(t,e,n){let r=0;return function(){r++===1&&de(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function wu(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&de(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw de(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){de(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,de(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(NC(a)){const c=(a.__vccOpts||a)[e];c&&s.push(lr(c,n,r,i,o))}else{let l=a();"catch"in l||(de(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=N0(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&lr(d,n,r,i,o)()}))}}}return s}function NC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pm(t){const e=Sn(zd),n=Sn(uv),r=Zt(()=>e.resolve(Gs(t.to))),s=Zt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ar.bind(null,u));if(d>-1)return d;const p=km(l[c-2]);return c>1&&km(u)===p&&h[h.length-1].path!==p?h.findIndex(Ar.bind(null,l[c-2])):d}),i=Zt(()=>s.value>-1&&MC(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&ev(n.params,r.value.params));function a(l={}){return xC(l)?e[Gs(t.replace)?"replace":"push"](Gs(t.to)).catch(io):Promise.resolve()}if($n){const l=Wd();if(l){const c={route:r.value,isActive:i.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),VR(()=>{c.route=r.value,c.isActive=i.value,c.isExactActive=o.value},{flush:"post"})}}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const OC=Dy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pm,setup(t,{slots:e}){const n=dc(Pm(t)),{options:r}=Sn(zd),s=Zt(()=>({[Nm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Jy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DC=OC;function xC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function km(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nm=(t,e,n)=>t??e??n,LC=Dy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){FC();const r=Sn(bh),s=Zt(()=>t.route||r.value),i=Sn(Sm,0),o=Zt(()=>{let c=Gs(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Zt(()=>s.value.matched[o.value]);rl(Sm,Zt(()=>o.value+1)),rl(PC,a),rl(bh,s);const l=py();return no(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ar(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Om(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,v=Jy(d,ye({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));if($n&&v.ref){const A={depth:o.value,name:h.name,path:h.path,meta:h.meta};($t(v.ref)?v.ref.map(k=>k.i):[v.ref.i]).forEach(k=>{k.__vrv_devtools=A})}return Om(n.default,{Component:v,route:c})||v}}});function Om(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VC=LC;function FC(){const t=Wd(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";de(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function xi(t,e){const n=ye({},t,{matched:t.matched.map(r=>zC(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Ma(t){return{_custom:{display:t}}}let UC=0;function $C(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=UC++;k0({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:xi(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:hv})}$t(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=pv,g="";d.isExactActive?(p=fv,g="This is exactly active"):d.isActive&&(p=dv,g="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:p})}))}),no(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:Ma("beforeEach"),from:xi(h,"Current Location during this navigation"),to:xi(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:Ma("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=Ma("❌")):p.status=Ma("✅"),p.from=xi(h,"Current Location during this navigation"),p.to=xi(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(_v),u.filter&&(h=h.filter(d=>Rh(d,u.filter.toLowerCase()))),h.forEach(d=>gv(d,e.currentRoute.value)),u.rootNodes=h.map(mv)}let c;s.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:jC(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function BC(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function jC(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${BC(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const hv=15485081,dv=2450411,fv=8702998,WC=2282478,pv=16486972,qC=6710886;function mv(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:WC}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:pv}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:hv}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:fv}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:dv}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:qC});let r=n.__vd_id;return r==null&&(r=String(HC++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(mv)}}let HC=0;const KC=/^\/(.*)\/([a-z]*)$/;function gv(t,e){const n=e.matched.length&&Ar(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>Ar(r,t.record))),t.children.forEach(r=>gv(r,e))}function _v(t){t.__vd_match=!1,t.children.forEach(_v)}function Rh(t,e){const n=String(t.re).match(KC);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>Rh(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Ao(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>Rh(o,e))}function zC(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function GC(t){const e=aC(t.routes,t),n=t.parseQuery||CC,r=t.stringifyQuery||Cm,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Di(),o=Di(),a=Di(),l=rR(sr);let c=sr;$n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vu.bind(null,y=>""+y),h=vu.bind(null,AC),d=vu.bind(null,Ao);function p(y,V){let F,$;return nv(y)?(F=e.getRecordMatcher(y),$=V):$=y,e.addRoute($,F)}function g(y){const V=e.getRecordMatcher(y);V?e.removeRoute(V):de(`Cannot remove non-existent route "${String(y)}"`)}function E(){return e.getRoutes().map(y=>y.record)}function v(y){return!!e.getRecordMatcher(y)}function A(y,V){if(V=ye({},V||l.value),typeof y=="string"){const m=Eu(n,y,V.path),_=e.resolve({path:m.path},V),T=s.createHref(m.fullPath);return T.startsWith("//")?de(`Location "${y}" resolved to "${T}". A resolved location cannot start with multiple slashes.`):_.matched.length||de(`No match found for location with path "${y}"`),ye(m,_,{params:d(_.params),hash:Ao(m.hash),redirectedFrom:void 0,href:T})}let F;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&de(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),F=ye({},y,{path:Eu(n,y.path,V.path).path});else{const m=ye({},y.params);for(const _ in m)m[_]==null&&delete m[_];F=ye({},y,{params:h(m)}),V.params=h(V.params)}const $=e.resolve(F,V),ce=y.hash||"";ce&&!ce.startsWith("#")&&de(`A \`hash\` should always start with the character "#". Replace "${ce}" with "#${ce}".`),$.params=u(d($.params));const Ne=x0(r,ye({},y,{hash:IC(ce),path:$.path})),f=s.createHref(Ne);return f.startsWith("//")?de(`Location "${y}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):$.matched.length||de(`No match found for location with path "${"path"in y?y.path:y}"`),ye({fullPath:Ne,hash:ce,query:r===Cm?SC(y.query):y.query||{}},$,{redirectedFrom:void 0,href:f})}function D(y){return typeof y=="string"?Eu(n,y,l.value.path):ye({},y)}function k(y,V){if(c!==y)return ii(8,{from:V,to:y})}function K(y){return xe(y)}function U(y){return K(ye(D(y),{replace:!0}))}function me(y){const V=y.matched[y.matched.length-1];if(V&&V.redirect){const{redirect:F}=V;let $=typeof F=="function"?F(y):F;if(typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=D($):{path:$},$.params={}),!("path"in $)&&!("name"in $))throw de(`Invalid redirect found:
${JSON.stringify($,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ye({query:y.query,hash:y.hash,params:"path"in $?{}:y.params},$)}}function xe(y,V){const F=c=A(y),$=l.value,ce=y.state,Ne=y.force,f=y.replace===!0,m=me(F);if(m)return xe(ye(D(m),{state:typeof m=="object"?ye({},ce,m.state):ce,force:Ne,replace:f}),V||F);const _=F;_.redirectedFrom=V;let T;return!Ne&&_m(r,$,F)&&(T=ii(16,{to:_,from:$}),er($,$,!0,!1)),(T?Promise.resolve(T):tt(_,$)).catch(w=>Vn(w)?Vn(w,2)?w:Fr(w):se(w,_,$)).then(w=>{if(w){if(Vn(w,2))return _m(r,A(w.to),_)&&V&&(V._count=V._count?V._count+1:1)>30?(de(`Detected a possibly infinite redirection in a navigation guard when going from "${$.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):xe(ye({replace:f},D(w.to),{state:typeof w.to=="object"?ye({},ce,w.to.state):ce,force:Ne}),V||_)}else w=Ct(_,$,!0,f,ce);return Qt(_,$,w),w})}function et(y,V){const F=k(y,V);return F?Promise.reject(F):Promise.resolve()}function Be(y){const V=tr.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(y):y()}function tt(y,V){let F;const[$,ce,Ne]=QC(y,V);F=wu($.reverse(),"beforeRouteLeave",y,V);for(const m of $)m.leaveGuards.forEach(_=>{F.push(lr(_,y,V))});const f=et.bind(null,y,V);return F.push(f),nr(F).then(()=>{F=[];for(const m of i.list())F.push(lr(m,y,V));return F.push(f),nr(F)}).then(()=>{F=wu(ce,"beforeRouteUpdate",y,V);for(const m of ce)m.updateGuards.forEach(_=>{F.push(lr(_,y,V))});return F.push(f),nr(F)}).then(()=>{F=[];for(const m of Ne)if(m.beforeEnter)if($t(m.beforeEnter))for(const _ of m.beforeEnter)F.push(lr(_,y,V));else F.push(lr(m.beforeEnter,y,V));return F.push(f),nr(F)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),F=wu(Ne,"beforeRouteEnter",y,V),F.push(f),nr(F))).then(()=>{F=[];for(const m of o.list())F.push(lr(m,y,V));return F.push(f),nr(F)}).catch(m=>Vn(m,8)?m:Promise.reject(m))}function Qt(y,V,F){a.list().forEach($=>Be(()=>$(y,V,F)))}function Ct(y,V,F,$,ce){const Ne=k(y,V);if(Ne)return Ne;const f=V===sr,m=$n?history.state:{};F&&($||f?s.replace(y.fullPath,ye({scroll:f&&m&&m.scroll},ce)):s.push(y.fullPath,ce)),l.value=y,er(y,V,F,f),Fr()}let pn;function Ca(){pn||(pn=s.listen((y,V,F)=>{if(!Sa.listening)return;const $=A(y),ce=me($);if(ce){xe(ye(ce,{replace:!0}),$).catch(io);return}c=$;const Ne=l.value;$n&&j0(vm(Ne.fullPath,F.delta),Tc()),tt($,Ne).catch(f=>Vn(f,12)?f:Vn(f,2)?(xe(f.to,$).then(m=>{Vn(m,20)&&!F.delta&&F.type===Ro.pop&&s.go(-1,!1)}).catch(io),Promise.reject()):(F.delta&&s.go(-F.delta,!1),se(f,$,Ne))).then(f=>{f=f||Ct($,Ne,!1),f&&(F.delta&&!Vn(f,8)?s.go(-F.delta,!1):F.type===Ro.pop&&Vn(f,20)&&s.go(-1,!1)),Qt($,Ne,f)}).catch(io)}))}let jt=Di(),nt=Di(),re;function se(y,V,F){Fr(y);const $=nt.list();return $.length?$.forEach(ce=>ce(y,V,F)):(de("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function Wt(){return re&&l.value!==sr?Promise.resolve():new Promise((y,V)=>{jt.add([y,V])})}function Fr(y){return re||(re=!y,Ca(),jt.list().forEach(([V,F])=>y?F(y):V()),jt.reset()),y}function er(y,V,F,$){const{scrollBehavior:ce}=t;if(!$n||!ce)return Promise.resolve();const Ne=!F&&W0(vm(y.fullPath,0))||($||!F)&&history.state&&history.state.scroll||null;return vy().then(()=>ce(y,V,Ne)).then(f=>f&&B0(f)).catch(f=>se(f,y,V))}const mn=y=>s.go(y);let qt;const tr=new Set,Sa={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:v,getRoutes:E,resolve:A,options:t,push:K,replace:U,go:mn,back:()=>mn(-1),forward:()=>mn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:Wt,install(y){const V=this;y.component("RouterLink",DC),y.component("RouterView",VC),y.config.globalProperties.$router=V,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Gs(l)}),$n&&!qt&&l.value===sr&&(qt=!0,K(s.location).catch(ce=>{de("Unexpected error when starting the router:",ce)}));const F={};for(const ce in sr)Object.defineProperty(F,ce,{get:()=>l.value[ce],enumerable:!0});y.provide(zd,V),y.provide(uv,cy(F)),y.provide(bh,l);const $=y.unmount;tr.add(y),y.unmount=function(){tr.delete(y),tr.size<1&&(c=sr,pn&&pn(),pn=null,l.value=sr,qt=!1,re=!1),$()},$n&&$C(y,V,e)}};function nr(y){return y.reduce((V,F)=>V.then(()=>Be(F)),Promise.resolve())}return Sa}function QC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ar(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ar(c,l))||s.push(l))}return[n,r,s]}/**
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
 */const yv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const M=function(t,e){if(!t)throw _i(e)},_i=function(t){return new Error("Firebase Database ("+yv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const vv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new XC;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ev=function(t){const e=vv(t);return Ic.encodeByteArray(e,!0)},Al=function(t){return Ev(t).replace(/\./g,"")},Cl=function(t){try{return Ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function JC(t){return wv(void 0,t)}function wv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZC(n)||(t[n]=wv(t[n],e[n]));return t}function ZC(t){return t!=="__proto__"}/**
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
 */function eS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tS=()=>eS().__FIREBASE_DEFAULTS__,nS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cl(t[1]);return e&&JSON.parse(e)},bc=()=>{try{return tS()||nS()||rS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tv=t=>{var e,n;return(n=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Iv=t=>{const e=Tv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bv=()=>{var t;return(t=bc())===null||t===void 0?void 0:t.config},Rv=t=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Co{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Av(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Al(JSON.stringify(n)),Al(JSON.stringify(o)),a].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function sS(){var t;const e=(t=bc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oS(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sv(){return yv.NODE_ADMIN===!0}function Pv(){try{return typeof indexedDB=="object"}catch{return!1}}function aS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const lS="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lS,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function cS(t,e){return t.replace(uS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uS=/\{\$([^}]+)}/g;/**
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
 */function So(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
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
 */const kv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=So(Cl(i[0])||""),n=So(Cl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},hS=function(t){const e=kv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dS=function(t){const e=kv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Zn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Dm(i)&&Dm(o)){if(!Pl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dm(t){return t!==null&&typeof t=="object"}/**
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
 */function vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class fS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function pS(t,e){const n=new mS(t,e);return n.subscribe.bind(n)}class mS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tu),s.error===void 0&&(s.error=Tu),s.complete===void 0&&(s.complete=Tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tu(){}function _S(t,e){return`${t} failed: ${e} argument `}/**
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
 */const yS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,M(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class vS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Co;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wS(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ES(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ES(t){return t===jr?void 0:t}function wS(t){return t.instantiationMode==="EAGER"}/**
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
 */class TS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const IS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},bS=ae.INFO,RS={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},AS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ea{constructor(e){this.name=e,this._logLevel=bS,this._logHandler=AS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const CS=(t,e)=>e.some(n=>t instanceof n);let xm,Mm;function SS(){return xm||(xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PS(){return Mm||(Mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nv=new WeakMap,Ch=new WeakMap,Ov=new WeakMap,Iu=new WeakMap,Qd=new WeakMap;function kS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nv.set(n,t)}).catch(()=>{}),Qd.set(e,t),e}function NS(t){if(Ch.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ch.set(t,e)}let Sh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ov.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OS(t){Sh=t(Sh)}function DS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bu(this),e,...n);return Ov.set(r,e.sort?e.sort():[e]),_r(r)}:PS().includes(t)?function(...e){return t.apply(bu(this),e),_r(Nv.get(this))}:function(...e){return _r(t.apply(bu(this),e))}}function xS(t){return typeof t=="function"?DS(t):(t instanceof IDBTransaction&&NS(t),CS(t,SS())?new Proxy(t,Sh):t)}function _r(t){if(t instanceof IDBRequest)return kS(t);if(Iu.has(t))return Iu.get(t);const e=xS(t);return e!==t&&(Iu.set(t,e),Qd.set(e,t)),e}const bu=t=>Qd.get(t);function MS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const LS=["get","getKey","getAll","getAllKeys","count"],VS=["put","add","delete","clear"],Ru=new Map;function Lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ru.get(e))return Ru.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=VS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ru.set(e,i),i}OS(t=>({...t,get:(e,n,r)=>Lm(e,n)||t.get(e,n,r),has:(e,n)=>!!Lm(e,n)||t.has(e,n)}));/**
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
 */class FS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(US(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function US(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",Vm="0.9.20";/**
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
 */const hs=new ea("@firebase/app"),$S="@firebase/app-compat",BS="@firebase/analytics-compat",jS="@firebase/analytics",WS="@firebase/app-check-compat",qS="@firebase/app-check",HS="@firebase/auth",KS="@firebase/auth-compat",zS="@firebase/database",GS="@firebase/database-compat",QS="@firebase/functions",YS="@firebase/functions-compat",XS="@firebase/installations",JS="@firebase/installations-compat",ZS="@firebase/messaging",eP="@firebase/messaging-compat",tP="@firebase/performance",nP="@firebase/performance-compat",rP="@firebase/remote-config",sP="@firebase/remote-config-compat",iP="@firebase/storage",oP="@firebase/storage-compat",aP="@firebase/firestore",lP="@firebase/firestore-compat",cP="firebase",uP="10.5.0";/**
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
 */const kh="[DEFAULT]",hP={[Ph]:"fire-core",[$S]:"fire-core-compat",[jS]:"fire-analytics",[BS]:"fire-analytics-compat",[qS]:"fire-app-check",[WS]:"fire-app-check-compat",[HS]:"fire-auth",[KS]:"fire-auth-compat",[zS]:"fire-rtdb",[GS]:"fire-rtdb-compat",[QS]:"fire-fn",[YS]:"fire-fn-compat",[XS]:"fire-iid",[JS]:"fire-iid-compat",[ZS]:"fire-fcm",[eP]:"fire-fcm-compat",[tP]:"fire-perf",[nP]:"fire-perf-compat",[rP]:"fire-rc",[sP]:"fire-rc-compat",[iP]:"fire-gcs",[oP]:"fire-gcs-compat",[aP]:"fire-fst",[lP]:"fire-fst-compat","fire-js":"fire-js",[cP]:"fire-js-all"};/**
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
 */const kl=new Map,Nh=new Map;function dP(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Nh.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;Nh.set(e,t);for(const n of kl.values())dP(n,t);return!0}function Ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yr=new yi("app","Firebase",fP);/**
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
 */class pP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Dr=uP;function Dv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=bv()),!n)throw yr.create("no-options");const i=kl.get(s);if(i){if(Pl(n,i.options)&&Pl(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new TS(s);for(const l of Nh.values())o.addComponent(l);const a=new pP(n,r,o);return kl.set(s,a),a}function Cc(t=kh){const e=kl.get(t);if(!e&&t===kh&&bv())return Dv();if(!e)throw yr.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=hP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(a.join(" "));return}xn(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mP="firebase-heartbeat-database",gP=1,Po="firebase-heartbeat-store";let Au=null;function xv(){return Au||(Au=MS(mP,gP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Po)}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Au}async function _P(t){try{return await(await xv()).transaction(Po).objectStore(Po).get(Mv(t))}catch(e){if(e instanceof Ln)hs.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hs.warn(n.message)}}}async function Fm(t,e){try{const r=(await xv()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,Mv(t)),await r.done}catch(n){if(n instanceof Ln)hs.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hs.warn(r.message)}}}function Mv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yP=1024,vP=30*24*60*60*1e3;class EP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Um();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Um(),{heartbeatsToSend:n,unsentEntries:r}=wP(this._heartbeatsCache.heartbeats),s=Al(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Um(){return new Date().toISOString().substring(0,10)}function wP(t,e=yP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$m(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$m(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pv()?aS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _P(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $m(t){return Al(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IP(t){xn(new cn("platform-logger",e=>new FS(e),"PRIVATE")),xn(new cn("heartbeat",e=>new EP(e),"PRIVATE")),Ft(Ph,Vm,t),Ft(Ph,Vm,"esm2017"),Ft("fire-js","")}IP("");function Yd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Bm(t){return t!==void 0&&t.enterprise!==void 0}class bP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Lv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RP=Lv,Vv=new yi("auth","Firebase",Lv());/**
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
 */const Nl=new ea("@firebase/auth");function AP(t,...e){Nl.logLevel<=ae.WARN&&Nl.warn(`Auth (${Dr}): ${t}`,...e)}function il(t,...e){Nl.logLevel<=ae.ERROR&&Nl.error(`Auth (${Dr}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Xd(t,...e)}function Pn(t,...e){return Xd(t,...e)}function CP(t,e,n){const r=Object.assign(Object.assign({},RP()),{[e]:n});return new yi("auth","Firebase",r).create(e,{appName:t.name})}function Xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vv.create(t,...e)}function Y(t,e,...n){if(!t)throw Xd(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function Gn(t,e){t||jn(e)}/**
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
 */function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SP(){return jm()==="http:"||jm()==="https:"}function jm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SP()||iS()||"connection"in navigator)?navigator.onLine:!0}function kP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Gd()||Cv()}get(){return PP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jd(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OP=new ta(3e4,6e4);function Rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function As(t,e,n,r,s={}){return Uv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fv.fetch()($v(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Uv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NP),e);try{const s=new DP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw La(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw CP(t,u,c);un(t,u)}}catch(s){if(s instanceof Ln)throw s;un(t,"network-request-failed",{message:String(s)})}}async function na(t,e,n,r,s={}){const i=await As(t,e,n,r,s);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $v(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Jd(t.config,s):`${t.config.apiScheme}://${s}`}class DP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),OP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pn(t,e,r);return s.customData._tokenResponse=n,s}async function xP(t,e){return As(t,"GET","/v2/recaptchaConfig",Rs(t,e))}/**
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
 */async function MP(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function LP(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VP(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=Zd(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ao(Cu(s.auth_time)),issuedAtTime:ao(Cu(s.iat)),expirationTime:ao(Cu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cu(t){return Number(t)*1e3}function Zd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cl(n);return s?JSON.parse(s):(il("Failed to decode base64 JWT payload"),null)}catch(s){return il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function FP(t){const e=Zd(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&UP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $P{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ol(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ko(t,LP(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?WP(i.providerUserInfo):[],a=jP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Bv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function BP(t){const e=$e(t);await Ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function WP(t){return t.map(e=>{var{providerId:n}=e,r=Yd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qP(t,e){const n=await Uv(t,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$v(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):FP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new No;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function ir(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ss{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $P(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VP(this,e)}reload(){return BP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ko(this,MP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:K,isAnonymous:U,providerData:me,stsTokenManager:xe}=n;Y(k&&xe,e,"internal-error");const et=No.fromJSON(this.name,xe);Y(typeof k=="string",e,"internal-error"),ir(h,e.name),ir(d,e.name),Y(typeof K=="boolean",e,"internal-error"),Y(typeof U=="boolean",e,"internal-error"),ir(p,e.name),ir(g,e.name),ir(E,e.name),ir(v,e.name),ir(A,e.name),ir(D,e.name);const Be=new ss({uid:k,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:et,createdAt:A,lastLoginAt:D});return me&&Array.isArray(me)&&(Be.providerData=me.map(tt=>Object.assign({},tt))),v&&(Be._redirectEventId=v),Be}static async _fromIdTokenResponse(e,n,r=!1){const s=new No;s.updateFromServerResponse(n);const i=new ss({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ol(i),i}}/**
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
 */const Wm=new Map;function Wn(t){Gn(t instanceof Function,"Expected a class definition");let e=Wm.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wm.set(t,e),e)}/**
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
 */class jv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jv.type="NONE";const qm=jv;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ol(this.userKey,s.apiKey,i),this.fullPersistenceKey=ol("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(Wn(qm),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Wn(qm);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ss._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Xs(i,e,r))}}/**
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
 */function Hm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zv(e))return"Blackberry";if(Gv(e))return"Webos";if(ef(e))return"Safari";if((e.includes("chrome/")||qv(e))&&!e.includes("edge/"))return"Chrome";if(Kv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wv(t=vt()){return/firefox\//i.test(t)}function ef(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qv(t=vt()){return/crios\//i.test(t)}function Hv(t=vt()){return/iemobile/i.test(t)}function Kv(t=vt()){return/android/i.test(t)}function zv(t=vt()){return/blackberry/i.test(t)}function Gv(t=vt()){return/webos/i.test(t)}function Sc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HP(t=vt()){var e;return Sc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KP(){return oS()&&document.documentMode===10}function Qv(t=vt()){return Sc(t)||Kv(t)||Gv(t)||zv(t)||/windows phone/i.test(t)||Hv(t)}function zP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yv(t,e=[]){let n;switch(t){case"Browser":n=Hm(vt());break;case"Worker":n=`${Hm(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${r}`}/**
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
 */class GP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function QP(t,e={}){return As(t,"GET","/v2/passwordPolicy",Rs(t,e))}/**
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
 */const YP=6;class XP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class JP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Km(this),this.idTokenSubscription=new Km(this),this.beforeStateQueue=new GP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QP(this),n=new XP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cs(t){return $e(t)}class Km{constructor(e){this.auth=e,this.observer=null,this.addObserver=pS(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ZP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZP().appendChild(r)})}function ek(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tk="https://www.google.com/recaptcha/enterprise.js?render=",nk="recaptcha-enterprise",rk="NO_RECAPTCHA";class sk{constructor(e){this.type=nk,this.auth=Cs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{xP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bP(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Bm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(rk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xv(tk+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Dl(t,e,n,r=!1){const s=new sk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function ik(t,e){const n=Ac(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pl(i,e??{}))return s;un(s,"already-initialized")}return n.initialize({options:e})}function ok(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ak(t,e,n){const r=Cs(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Jv(e),{host:o,port:a}=lk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ck()}function Jv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lk(t){const e=Jv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zm(o)}}}function zm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ck(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class tf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function uk(t,e){return As(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Su(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",Rs(t,e))}/**
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
 */async function hk(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}async function dk(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}/**
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
 */class Oo extends tf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Dl(e,r,"signInWithPassword");return Su(e,s)}else return Su(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Dl(e,r,"signInWithPassword");return Su(e,i)}else return Promise.reject(s)});case"emailLink":return hk(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return uk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dk(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Js(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",Rs(t,e))}/**
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
 */const fk="http://localhost";class ds extends tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ds(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:fk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */function pk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mk(t){const e=zi(Gi(t)).link,n=e?zi(Gi(e)).deep_link_id:null,r=zi(Gi(t)).deep_link_id;return(r?zi(Gi(r)).link:null)||r||n||e||t}class nf{constructor(e){var n,r,s,i,o,a;const l=zi(Gi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=pk((s=l.mode)!==null&&s!==void 0?s:null);Y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mk(e);try{return new nf(n)}catch{return null}}}/**
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
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nf.parseLink(n);return Y(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ra extends Zv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends ra{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class hr extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class dr extends ra{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class fr extends ra{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */async function Pu(t,e){return na(t,"POST","/v1/accounts:signUp",Rs(t,e))}/**
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
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ss._fromIdTokenResponse(e,r,s),o=Gm(r);return new fs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gm(r);return new fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xl extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xl(e,n,r,s)}}function eE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(t,i,e,r):i})}async function gk(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",r)}/**
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
 */async function _k(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ko(t,eE(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Zd(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&un(r,"user-mismatch"),i}}/**
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
 */async function tE(t,e,n=!1){const r="signIn",s=await eE(t,r,e),i=await fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yk(t,e){return tE(Cs(t),e)}/**
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
 */async function nE(t){const e=Cs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vk(t,e,n){var r;const s=Cs(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Dl(s,i,"signUpPassword");o=Pu(s,c)}else o=Pu(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Dl(s,i,"signUpPassword");return Pu(s,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nE(t),c}),l=await fs._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Ek(t,e,n){return yk($e(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nE(t),r})}function rE(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function wk(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const Ml="__sak";/**
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
 */class sE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Tk(){const t=vt();return ef(t)||Sc(t)}const Ik=1e3,bk=10;class iE extends sE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tk()&&zP(),this.fallbackToPolling=Qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);KP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iE.type="LOCAL";const Rk=iE;/**
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
 */class oE extends sE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oE.type="SESSION";const aE=oE;/**
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
 */function Ak(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Ak(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */function rf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ck{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=rf("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kn(){return window}function Sk(t){kn().location.href=t}/**
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
 */function lE(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function Pk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nk(){return lE()?self:null}/**
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
 */const cE="firebaseLocalStorageDb",Ok=1,Ll="firebaseLocalStorage",uE="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function Dk(){const t=indexedDB.deleteDatabase(cE);return new sa(t).toPromise()}function Dh(){const t=indexedDB.open(cE,Ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ll,{keyPath:uE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ll)?e(r):(r.close(),await Dk(),e(await Dh()))})})}async function Qm(t,e,n){const r=kc(t,!0).put({[uE]:e,value:n});return new sa(r).toPromise()}async function xk(t,e){const n=kc(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function Ym(t,e){const n=kc(t,!0).delete(e);return new sa(n).toPromise()}const Mk=800,Lk=3;class hE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(Nk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pk(),!this.activeServiceWorker)return;this.sender=new Ck(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dh();return await Qm(e,Ml,"1"),await Ym(e,Ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ym(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kc(s,!1).getAll();return new sa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hE.type="LOCAL";const Vk=hE;new ta(3e4,6e4);/**
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
 */function Fk(t,e){return e?Wn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sf extends tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uk(t){return tE(t.auth,new sf(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),_k(n,new sf(t),t.bypassAuthState)}async function Bk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),gk(n,new sf(t),t.bypassAuthState)}/**
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
 */class dE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uk;case"linkViaPopup":case"linkViaRedirect":return Bk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:un(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jk=new ta(2e3,1e4);class Ws extends dE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jk.get())};e()}}Ws.currentPopupAction=null;/**
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
 */const Wk="pendingRedirect",al=new Map;class qk extends dE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await Hk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hk(t,e){const n=Gk(e),r=zk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Kk(t,e){al.set(t._key(),e)}function zk(t){return Wn(t._redirectPersistence)}function Gk(t){return ol(Wk,t.config.apiKey,t.name)}async function Qk(t,e,n=!1){const r=Cs(t),s=Fk(r,e),o=await new qk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Yk=10*60*1e3;class Xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xm(e))}saveEventToCache(e){this.cachedEventUids.add(Xm(e)),this.lastProcessedEventTime=Date.now()}}function Xm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fE(t);default:return!1}}/**
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
 */async function Zk(t,e={}){return As(t,"GET","/v1/projects",e)}/**
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
 */const eN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tN=/^https?/;async function nN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zk(t);for(const n of e)try{if(rN(n))return}catch{}un(t,"unauthorized-domain")}function rN(t){const e=Oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tN.test(n))return!1;if(eN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const sN=new ta(3e4,6e4);function Jm(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iN(t){return new Promise((e,n)=>{var r,s,i;function o(){Jm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jm(),n(Pn(t,"network-request-failed"))},timeout:sN.get()})}if(!((s=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=kn().gapi)===null||i===void 0)&&i.load)o();else{const a=ek("iframefcb");return kn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},Xv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ll=null,e})}let ll=null;function oN(t){return ll=ll||iN(t),ll}/**
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
 */const aN=new ta(5e3,15e3),lN="__/auth/iframe",cN="emulator/auth/iframe",uN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dN(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jd(e,cN):`https://${t.config.authDomain}/${lN}`,r={apiKey:e.apiKey,appName:t.name,v:Dr},s=hN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${vi(r).slice(1)}`}async function fN(t){const e=await oN(t),n=kn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:dN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=kn().setTimeout(()=>{i(o)},aN.get());function l(){kn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const pN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mN=500,gN=600,_N="_blank",yN="http://localhost";class Zm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vN(t,e,n,r=mN,s=gN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=vt().toLowerCase();n&&(a=qv(c)?_N:n),Wv(c)&&(e=e||yN,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(HP(c)&&a!=="_self")return EN(e||"",a),new Zm(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new Zm(h)}function EN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wN="__/auth/handler",TN="emulator/auth/handler",IN=encodeURIComponent("fac");async function eg(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dr,eventId:s};if(e instanceof Zv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ah(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ra){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${IN}=${encodeURIComponent(l)}`:"";return`${bN(t)}?${vi(a).slice(1)}${c}`}function bN({config:t}){return t.emulator?Jd(t,TN):`https://${t.authDomain}/${wN}`}/**
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
 */const ku="webStorageSupport";class RN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aE,this._completeRedirectFn=Qk,this._overrideRedirectResult=Kk}async _openPopup(e,n,r,s){var i;Gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await eg(e,n,r,Oh(),s);return vN(e,o,rf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await eg(e,n,r,Oh(),s);return Sk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fN(e),r=new Xk(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ku,{type:ku},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ku];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qv()||ef()||Sc()}}const AN=RN;var tg="@firebase/auth",ng="1.3.0";/**
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
 */class CN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PN(t){xn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yv(t)},c=new JP(r,s,i,l);return ok(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new cn("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new CN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(tg,ng,SN(t)),Ft(tg,ng,"esm2017")}/**
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
 */const kN=5*60,NN=Rv("authIdTokenMaxAge")||kN;let rg=null;const ON=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NN)return;const s=n==null?void 0:n.token;rg!==s&&(rg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pE(t=Cc()){const e=Ac(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ik(t,{popupRedirectResolver:AN,persistence:[Vk,Rk,aE]}),r=Rv("authTokenSyncURL");if(r){const i=ON(r);wk(n,i,()=>i(n.currentUser)),rE(n,o=>i(o))}const s=Tv("auth");return s&&ak(n,`http://${s}`),n}PN("Browser");/**
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
 */const DN=new Map,xN={activated:!1,tokenObservers:[]};function hn(t){return DN.get(t)||Object.assign({},xN)}const sg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class MN{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Co,await LN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Co,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function LN(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const VN={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Vl=new yi("appCheck","AppCheck",VN);function mE(t){if(!hn(t).activated)throw Vl.create("use-before-activation",{appName:t.name})}/**
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
 */const FN="firebase-app-check-database",UN=1,xh="firebase-app-check-store";let Va=null;function $N(){return Va||(Va=new Promise((t,e)=>{try{const n=indexedDB.open(FN,UN);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Vl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(xh,{keyPath:"compositeKey"})}}}catch(n){e(Vl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Va)}function BN(t,e){return jN(WN(t),e)}async function jN(t,e){const r=(await $N()).transaction(xh,"readwrite"),i=r.objectStore(xh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Vl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function WN(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Mh=new ea("@firebase/app-check");function ig(t,e){return Pv()?BN(t,e).catch(n=>{Mh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const qN={error:"UNKNOWN_ERROR"};function HN(t){return Ic.encodeString(JSON.stringify(t),!1)}async function Lh(t,e=!1){const n=t.app;mE(n);const r=hn(n);let s=r.token,i;if(s&&!Qi(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Qi(l)?s=l:await ig(n,void 0))}if(!e&&s&&Qi(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await hn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Mh.warn(l.message):Mh.error(l),i=l}let a;return s?i?Qi(s)?a={token:s.token,internalError:i}:a=ag(i):(a={token:s.token},r.token=s,await ig(n,s)):a=ag(i),o&&QN(n,a),a}async function KN(t){const e=t.app;mE(e);const{provider:n}=hn(e);{const{token:r}=await n.getToken();return{token:r}}}function zN(t,e,n,r){const{app:s}=t,i=hn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Qi(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),og(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>og(t))}function gE(t,e){const n=hn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function og(t){const{app:e}=t,n=hn(e);let r=n.tokenRefresher;r||(r=GN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function GN(t){const{app:e}=t;return new MN(async()=>{const n=hn(e);let r;if(n.token?r=await Lh(t,!0):r=await Lh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=hn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},sg.RETRIAL_MIN_WAIT,sg.RETRIAL_MAX_WAIT)}function QN(t,e){const n=hn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Qi(t){return t.expireTimeMillis-Date.now()>0}function ag(t){return{token:HN(qN),error:t}}/**
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
 */class YN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=hn(this.app);for(const n of e)gE(this.app,n.next);return Promise.resolve()}}function XN(t,e){return new YN(t,e)}function JN(t){return{getToken:e=>Lh(t,e),getLimitedUseToken:()=>KN(t),addTokenListener:e=>zN(t,"INTERNAL",e),removeTokenListener:e=>gE(t.app,e)}}const ZN="@firebase/app-check",eO="0.8.0",tO="app-check",lg="app-check-internal";function nO(){xn(new cn(tO,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return XN(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(lg).initialize()})),xn(new cn(lg,t=>{const e=t.getProvider("app-check").getImmediate();return JN(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ft(ZN,eO)}nO();var rO="firebase",sO="10.5.0";/**
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
 */Ft(rO,sO,"app");const _E=Symbol("firebaseApp");function iO(t){return Wd()&&Sn(_E,null)||Cc(t)}const Fa=new WeakMap;function oO(t,e){if(!Fa.has(t)){const n=xb(!0);Fa.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Fa.delete(t)}}return Fa.get(t)}const aO=new WeakMap,Ua=new WeakMap;function lO(t){const e=iO(t);if(!Ua.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Ua.set(e,i),n(i.value)}];Ua.set(e,s)}return Ua.get(e)}function cO(t,e){const n=pE(e);rE(n,r=>{const s=lO();t.value=r,Array.isArray(s)&&s[1](t)})}const cg="@firebase/database",ug="1.0.1";/**
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
 */let yE="";function uO(t){yE=t}/**
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
 */class hO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:So(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class dO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hO(e)}}catch{}return new dO},zr=vE("localStorage"),Vh=vE("sessionStorage");/**
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
 */const Zs=new ea("@firebase/database"),fO=function(){let t=1;return function(){return t++}}(),EE=function(t){const e=yS(t),n=new fS;n.update(e);const r=n.digest();return Ic.encodeByteArray(r)},ia=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ia.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let is=null,hg=!0;const pO=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zs.logLevel=ae.VERBOSE,is=Zs.log.bind(Zs),e&&Vh.set("logging_enabled",!0)):typeof t=="function"?is=t:(is=null,Vh.remove("logging_enabled"))},ht=function(...t){if(hg===!0&&(hg=!1,is===null&&Vh.get("logging_enabled")===!0&&pO(!0)),is){const e=ia.apply(null,t);is(e)}},oa=function(t){return function(...e){ht(t,...e)}},Fh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ia(...t);Zs.error(e)},ps=function(...t){const e=`FIREBASE FATAL ERROR: ${ia(...t)}`;throw Zs.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+ia(...t);Zs.warn(e)},mO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ai="[MIN_NAME]",ms="[MAX_NAME]",wi=function(t,e){if(t===e)return 0;if(t===ai||e===ms)return-1;if(e===ai||t===ms)return 1;{const n=dg(t),r=dg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_O=function(t,e){return t===e?0:t<e?-1:1},Mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},of=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=of(t[e[r]]);return n+="}",n},TE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const IE=function(t){M(!wE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},yO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},EO=new RegExp("^-?(0*)\\d{1,10}$"),wO=-2147483648,TO=2147483647,dg=function(t){if(EO.test(t)){const e=Number(t);if(e>=wO&&e<=TO)return e}return null},aa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},IO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class RO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class Uh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Uh.OWNER="owner";/**
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
 */const af="5",bE="v",RE="s",AE="r",CE="f",SE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,PE="ls",kE="p",$h="ac",NE="websocket",OE="long_polling";/**
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
 */class AO{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function DE(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let r;if(e===NE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===OE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CO(t)&&(n.ns=t.namespace);const s=[];return Gt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class SO{constructor(){this.counters_={}}incrementCounter(e,n=1){Zn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JC(this.counters_)}}/**
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
 */const Nu={},Ou={};function lf(t){const e=t.toString();return Nu[e]||(Nu[e]=new SO),Nu[e]}function PO(t,e){const n=t.toString();return Ou[n]||(Ou[n]=e()),Ou[n]}/**
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
 */class kO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&aa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fg="start",NO="close",OO="pLPCommand",DO="pRTLPCB",xE="id",ME="pw",LE="ser",xO="cb",MO="seg",LO="ts",VO="d",FO="dframe",VE=1870,FE=30,UO=VE-FE,$O=25e3,BO=3e4;class qs{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oa(e),this.stats_=lf(n),this.urlFn=l=>(this.appCheckToken&&(l[$h]=this.appCheckToken),DE(n,OE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new kO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BO)),gO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cf((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fg)this.id=a,this.password=l;else if(o===NO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[fg]="t",r[LE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bE]=af,this.transportSessionId&&(r[RE]=this.transportSessionId),this.lastSessionId&&(r[PE]=this.lastSessionId),this.applicationId&&(r[kE]=this.applicationId),this.appCheckToken&&(r[$h]=this.appCheckToken),typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(r[AE]=CE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qs.forceAllow_=!0}static forceDisallow(){qs.forceDisallow_=!0}static isAvailable(){return qs.forceAllow_?!0:!qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yO()&&!vO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ev(n),s=TE(r,UO);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[FO]="t",r[xE]=e,r[ME]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fO(),window[OO+this.uniqueCallbackIdentifier]=e,window[DO+this.uniqueCallbackIdentifier]=n,this.myIFrame=cf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xE]=this.myID,e[ME]=this.myPW,e[LE]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+FE+r.length<=VE;){const o=this.pendingSegs.shift();r=r+"&"+MO+s+"="+o.seg+"&"+LO+s+"="+o.ts+"&"+VO+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor($O)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const jO=16384,WO=45e3;let Fl=null;typeof MozWebSocket<"u"?Fl=MozWebSocket:typeof WebSocket<"u"&&(Fl=WebSocket);class en{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oa(this.connId),this.stats_=lf(n),this.connURL=en.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[bE]=af,typeof location<"u"&&location.hostname&&SE.test(location.hostname)&&(o[AE]=CE),n&&(o[RE]=n),r&&(o[PE]=r),s&&(o[$h]=s),i&&(o[kE]=i),DE(e,NE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zr.set("previous_websocket_failure",!0);try{let r;Sv(),this.mySock=new Fl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fl!==null&&!en.forceDisallow_}static previouslyFailed(){return zr.isInMemoryStorage||zr.get("previous_websocket_failure")===!0}markConnectionHealthy(){zr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=So(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=TE(n,jO);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(WO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
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
 */class Do{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qs,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const s=this.transports_=[];for(const i of Do.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Do.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Do.globalTransportInitialized_=!1;/**
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
 */const qO=6e4,HO=5e3,KO=10*1024,zO=100*1024,Du="t",pg="d",GO="s",mg="r",QO="e",gg="o",_g="a",yg="n",vg="p",YO="h";class XO{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oa("c:"+this.id+":"),this.transportManager_=new Do(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=lo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Du in e){const n=e[Du];n===_g?this.upgradeIfSecondaryHealthy_():n===mg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_g,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mi(Du,e);if(pg in e){const r=e[pg];if(n===YO){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===yg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===GO?this.onConnectionShutdown_(r):n===mg?this.onReset_(r):n===QO?Fh("Server Error: "+r):n===gg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),af!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),lo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class UE{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $E{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ul extends $E{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ul}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Eg=32,wg=768;class ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new ke("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cr(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ke(t.pieces_,e)}function BE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function JO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function WE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ke(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ke(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function zt(t,e){const n=fe(t),r=fe(e);if(n===null)return e;if(n===r)return zt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qE(t,e){if(Cr(t)!==Cr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cr(t)>Cr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ZO{constructor(e,n){this.errorPrefix_=n,this.parts_=jE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Rc(this.parts_[r]);HE(this)}}function eD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rc(e),HE(t)}function tD(t){const e=t.parts_.pop();t.byteLength_-=Rc(e),t.parts_.length>0&&(t.byteLength_-=1)}function HE(t){if(t.byteLength_>wg)throw new Error(t.errorPrefix_+"has a key path longer than "+wg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Eg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eg+") or object contains a cycle "+Wr(t))}function Wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class uf extends $E{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new uf}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Li=1e3,nD=60*5*1e3,Tg=30*1e3,rD=1.3,sD=3e4,iD="server_kill",Ig=3;class zn extends UE{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zn.nextPersistentConnectionId_++,this.log_=oa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Li,this.maxReconnectDelay_=nD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Sv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(it(i)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Co,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;zn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zn(e,"w")){const r=oi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fh("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sD&&(this.reconnectDelay_=Li),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new XO(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Ut(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(iD)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ut(h),l())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ah(this.interruptReasons_)&&(this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>of(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ke(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){ht("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ig&&(this.reconnectDelay_=Tg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ht("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ig&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yE.replace(/\./g,"-")]=1,Gd()?e["framework.cordova"]=1:Cv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ul.getInstance().currentlyOnline();return Ah(this.interruptReasons_)&&e}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
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
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
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
 */class Nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new pe(ai,e),s=new pe(ai,n);return this.compare(r,s)!==0}minPost(){return pe.MIN}}/**
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
 */let $a;class KE extends Nc{static get __EMPTY_NODE(){return $a}static set __EMPTY_NODE(e){$a=e}compare(e,n){return wi(e.name,n.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(ms,$a)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,$a)}toString(){return".key"}}const ei=new KE;/**
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
 */let Ba=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Mt=class Yi{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Yi.RED,this.left=s??Tn.EMPTY_NODE,this.right=i??Tn.EMPTY_NODE}copy(e,n,r,s,i){return new Yi(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Tn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Yi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Yi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Mt.RED=!0;Mt.BLACK=!1;class oD{copy(e,n,r,s,i){return this}insert(e,n,r){return new Mt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Tn=class cl{constructor(e,n=cl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new cl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Mt.BLACK,null,null))}remove(e){return new cl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ba(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ba(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ba(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ba(this.root_,null,this.comparator_,!0,e)}};Tn.EMPTY_NODE=new oD;/**
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
 */function aD(t,e){return wi(t.name,e.name)}function hf(t,e){return wi(t,e)}/**
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
 */let Bh;function lD(t){Bh=t}const zE=function(t){return typeof t=="number"?"number:"+IE(t):"string:"+t},GE=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zn(e,".sv"),"Priority must be a string or number.")}else M(t===Bh||t.isEmpty(),"priority of unexpected type.");M(t===Bh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let bg;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GE(this.priorityNode_)}static set __childrenNodeConstructor(e){bg=e}static get __childrenNodeConstructor(){return bg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:fe(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=fe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||Cr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=IE(this.value_):e+=this.value_,this.lazyHash_=EE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Qe.VALUE_TYPE_ORDER.indexOf(n),i=Qe.VALUE_TYPE_ORDER.indexOf(r);return M(s>=0,"Unknown leaf type: "+n),M(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let QE,YE;function cD(t){QE=t}function uD(t){YE=t}class hD extends Nc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?wi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(ms,new Qe("[PRIORITY-POST]",YE))}makePost(e,n){const r=QE(e);return new pe(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const mt=new hD;/**
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
 */const dD=Math.log(2);class fD{constructor(e){const n=i=>parseInt(Math.log(i)/dD,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $l=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Mt(d,h.node,Mt.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=s(l,p),E=s(p+1,c);return h=t[p],d=n?n(h):h,new Mt(d,h.node,Mt.BLACK,g,E)}},i=function(l){let c=null,u=null,h=t.length;const d=function(g,E){const v=h-g,A=h;h-=g;const D=s(v+1,A),k=t[v],K=n?n(k):k;p(new Mt(K,k.node,E,null,D))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const E=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));E?d(v,Mt.BLACK):(d(v,Mt.BLACK),d(v,Mt.RED))}return u},o=new fD(t.length),a=i(o);return new Tn(r||e,a)};/**
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
 */let xu;const Ls={};class qn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(Ls&&mt,"ChildrenNode.ts has not been loaded"),xu=xu||new qn({".priority":Ls},{".priority":mt}),xu}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Tn?n:null}hasIndex(e){return Zn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(pe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=$l(r,e.getCompare()):a=Ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new qn(u,c)}addToIndexes(e,n){const r=Sl(this.indexes_,(s,i)=>{const o=oi(this.indexSet_,i);if(M(o,"Missing index implementation for "+i),s===Ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$l(a,o.getCompare())}else return Ls;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new qn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Sl(this.indexes_,s=>{if(s===Ls)return s;{const i=n.get(e.name);return i?s.remove(new pe(e.name,i)):s}});return new qn(r,this.indexSet_)}}/**
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
 */let Vi;class ve{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&GE(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Vi||(Vi=new ve(new Tn(hf),null,qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vi}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Vi:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new pe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Vi:this.priorityNode_;return new ve(s,o,i)}}updateChild(e,n){const r=fe(e);if(r===null)return n;{M(fe(e)!==".priority"||Cr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(mt,(o,a)=>{n[o]=a.val(e),r++,i&&ve.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zE(this.getPriority().val())+":"),this.forEachChild(mt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":EE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new pe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===la?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(mt),s=n.getIterator(mt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pD extends ve{constructor(){super(new Tn(hf),ve.EMPTY_NODE,qn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const la=new pD;Object.defineProperties(pe,{MIN:{value:new pe(ai,ve.EMPTY_NODE)},MAX:{value:new pe(ms,la)}});KE.__EMPTY_NODE=ve.EMPTY_NODE;Qe.__childrenNodeConstructor=ve;lD(la);uD(la);/**
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
 */const mD=!0;function dt(t,e=null){if(t===null)return ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,dt(e))}if(!(t instanceof Array)&&mD){const n=[];let r=!1;if(Gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=dt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return ve.EMPTY_NODE;const i=$l(n,aD,o=>o.name,hf);if(r){const o=$l(n,mt.getCompare());return new ve(i,dt(e),new qn({".priority":o},{".priority":mt}))}else return new ve(i,dt(e),qn.Default)}else{let n=ve.EMPTY_NODE;return Gt(t,(r,s)=>{if(Zn(t,r)&&r.substring(0,1)!=="."){const i=dt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(dt(e))}}cD(dt);/**
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
 */class gD extends Nc{constructor(e){super(),this.indexPath_=e,M(!ue(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?wi(e.name,n.name):i}makePost(e,n){const r=dt(e),s=ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new pe(n,s)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,la);return new pe(ms,e)}toString(){return jE(this.indexPath_,0).join("/")}}/**
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
 */class _D extends Nc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?wi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const r=dt(e);return new pe(n,r)}toString(){return".value"}}const yD=new _D;/**
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
 */function vD(t){return{type:"value",snapshotNode:t}}function ED(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wD(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function TD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class df{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ai}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new df;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ag(t){const e={};if(t.isDefault())return e;let n;if(t.index_===mt?n="$priority":t.index_===yD?n="$value":t.index_===ei?n="$key":(M(t.index_ instanceof gD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=it(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+it(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=it(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==mt&&(e.i=t.index_.toString()),e}/**
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
 */class Bl extends UE{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=oa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Bl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ag(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),oi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const r=Bl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ag(e._queryParams),r=e._path.toString(),s=new Co;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=So(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ID{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jl(){return{value:null,children:new Map}}function XE(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=fe(e);t.children.has(r)||t.children.set(r,jl());const s=t.children.get(r);e=Ae(e),XE(s,e,n)}}function jh(t,e,n){t.value!==null?n(e,t.value):bD(t,(r,s)=>{const i=new ke(e.toString()+"/"+r);jh(s,i,n)})}function bD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class RD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Gt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Sg=10*1e3,AD=30*1e3,CD=5*60*1e3;class SD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RD(e);const r=Sg+(AD-Sg)*Math.random();lo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Gt(e,(s,i)=>{i>0&&Zn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),lo(this.reportStats_.bind(this),Math.floor(Math.random()*2*CD))}}/**
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
 */var In;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(In||(In={}));function JE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ZE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ew(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Wl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=In.ACK_USER_WRITE,this.source=JE()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ke(e));return new Wl(Ie(),n,this.revert)}}else return M(fe(this.path)===e,"operationForChild called for unrelated child."),new Wl(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class gs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=In.OVERWRITE}operationForChild(e){return ue(this.path)?new gs(this.source,Ie(),this.snap.getImmediateChild(e)):new gs(this.source,Ae(this.path),this.snap)}}/**
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
 */class xo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=In.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new ke(e));return n.isEmpty()?null:n.value?new gs(this.source,Ie(),n.value):new xo(this.source,Ie(),n)}else return M(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xo(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ff{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function PD(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(TD(o.childName,o.snapshotNode))}),Fi(t,s,"child_removed",e,r,n),Fi(t,s,"child_added",e,r,n),Fi(t,s,"child_moved",i,r,n),Fi(t,s,"child_changed",e,r,n),Fi(t,s,"value",e,r,n),s}function Fi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ND(t,a,l)),o.forEach(a=>{const l=kD(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function kD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ND(t,e,n){if(e.childName==null||n.childName==null)throw _i("Should only compare child_ events.");const r=new pe(e.childName,e.snapshotNode),s=new pe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function tw(t,e){return{eventCache:t,serverCache:e}}function co(t,e,n,r){return tw(new ff(e,n,r),t.serverCache)}function nw(t,e,n,r){return tw(t.eventCache,new ff(e,n,r))}function Wh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _s(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Mu;const OD=()=>(Mu||(Mu=new Tn(_O)),Mu);class Re{constructor(e,n=OD()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return Gt(e,(r,s)=>{n=n.set(new ke(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(ue(e))return null;{const r=fe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ae(e),n);return i!=null?{path:Xe(new ke(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=fe(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Re(null)}}set(e,n){if(ue(e))return new Re(n,this.children);{const r=fe(e),i=(this.children.get(r)||new Re(null)).set(Ae(e),n),o=this.children.insert(r,i);return new Re(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=fe(e),r=this.children.get(n);if(r){const s=r.remove(Ae(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Re(null):new Re(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=fe(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(ue(e))return n;{const r=fe(e),i=(this.children.get(r)||new Re(null)).setTree(Ae(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Re(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ue(e))return null;{const i=fe(e),o=this.children.get(i);return o?o.findOnPath_(Ae(e),Xe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const s=fe(e),i=this.children.get(s);return i?i.foreachOnPath_(Ae(e),Xe(n,s),r):new Re(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Re(null))}}function uo(t,e,n){if(ue(e))return new an(new Re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=zt(s,e);return i=i.updateChild(o,n),new an(t.writeTree_.set(s,i))}else{const s=new Re(n),i=t.writeTree_.setTree(e,s);return new an(i)}}}function Pg(t,e,n){let r=t;return Gt(n,(s,i)=>{r=uo(r,Xe(e,s),i)}),r}function kg(t,e){if(ue(e))return an.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new an(n)}}function qh(t,e){return Ss(t,e)!=null}function Ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(zt(n.path,e)):null}function Ng(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(mt,(r,s)=>{e.push(new pe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new pe(r,s.value))}),e}function vr(t,e){if(ue(e))return t;{const n=Ss(t,e);return n!=null?new an(new Re(n)):new an(t.writeTree_.subtree(e))}}function Hh(t){return t.writeTree_.isEmpty()}function li(t,e){return rw(Ie(),t.writeTree_,e)}function rw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(M(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=rw(Xe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
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
 */function sw(t,e){return cw(e,t)}function DD(t,e,n,r,s){M(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=uo(t.visibleWrites,e,n)),t.lastWriteId=r}function xD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function MD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LD(a,r.path)?s=!1:nn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return VD(t),!0;if(r.snap)t.visibleWrites=kg(t.visibleWrites,r.path);else{const a=r.children;Gt(a,l=>{t.visibleWrites=kg(t.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function LD(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(Xe(t.path,n),e))return!0;return!1}function VD(t){t.visibleWrites=iw(t.allWrites,FD,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function FD(t){return t.visible}function iw(t,e,n){let r=an.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)nn(n,o)?(a=zt(n,o),r=uo(r,a,i.snap)):nn(o,n)&&(a=zt(o,n),r=uo(r,Ie(),i.snap.getChild(a)));else if(i.children){if(nn(n,o))a=zt(n,o),r=Pg(r,a,i.children);else if(nn(o,n))if(a=zt(o,n),ue(a))r=Pg(r,Ie(),i.children);else{const l=oi(i.children,fe(a));if(l){const c=l.getChild(Ae(a));r=uo(r,Ie(),c)}}}else throw _i("WriteRecord should have .snap or .children")}}return r}function ow(t,e,n,r,s){if(!r&&!s){const i=Ss(t.visibleWrites,e);if(i!=null)return i;{const o=vr(t.visibleWrites,e);if(Hh(o))return n;if(n==null&&!qh(o,Ie()))return null;{const a=n||ve.EMPTY_NODE;return li(o,a)}}}else{const i=vr(t.visibleWrites,e);if(!s&&Hh(i))return n;if(!s&&n==null&&!qh(i,Ie()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(nn(c.path,e)||nn(e,c.path))},a=iw(t.allWrites,o,e),l=n||ve.EMPTY_NODE;return li(a,l)}}}function UD(t,e,n){let r=ve.EMPTY_NODE;const s=Ss(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(mt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=vr(t.visibleWrites,e);return n.forEachChild(mt,(o,a)=>{const l=li(vr(i,new ke(o)),a);r=r.updateImmediateChild(o,l)}),Ng(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=vr(t.visibleWrites,e);return Ng(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $D(t,e,n,r,s){M(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Xe(e,n);if(qh(t.visibleWrites,i))return null;{const o=vr(t.visibleWrites,i);return Hh(o)?s.getChild(n):li(o,s.getChild(n))}}function BD(t,e,n,r){const s=Xe(e,n),i=Ss(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=vr(t.visibleWrites,s);return li(o,r.getNode().getImmediateChild(n))}else return null}function jD(t,e){return Ss(t.visibleWrites,e)}function WD(t,e,n,r,s,i,o){let a;const l=vr(t.visibleWrites,e),c=Ss(l,Ie());if(c!=null)a=c;else if(n!=null)a=li(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&u.length<s;)h(p,r)!==0&&u.push(p),p=d.getNext();return u}else return[]}function qD(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Kh(t,e,n,r){return ow(t.writeTree,t.treePath,e,n,r)}function aw(t,e){return UD(t.writeTree,t.treePath,e)}function Og(t,e,n,r){return $D(t.writeTree,t.treePath,e,n,r)}function ql(t,e){return jD(t.writeTree,Xe(t.treePath,e))}function HD(t,e,n,r,s,i){return WD(t.writeTree,t.treePath,e,n,r,s,i)}function pf(t,e,n){return BD(t.writeTree,t.treePath,e,n)}function lw(t,e){return cw(Xe(t.treePath,e),t.writeTree)}function cw(t,e){return{treePath:t,writeTree:e}}/**
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
 */class KD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Rg(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,wD(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ED(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Rg(r,e.snapshotNode,s.oldSnap));else throw _i("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const uw=new zD;class mf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ff(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_s(this.viewCache_),i=HD(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function GD(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QD(t,e,n,r,s){const i=new KD;let o,a;if(n.type===In.OVERWRITE){const c=n;c.source.fromUser?o=zh(t,e,c.path,c.snap,r,s,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=Hl(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===In.MERGE){const c=n;c.source.fromUser?o=XD(t,e,c.path,c.children,r,s,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Gh(t,e,c.path,c.children,r,s,a,i))}else if(n.type===In.ACK_USER_WRITE){const c=n;c.revert?o=e1(t,e,c.path,r,s,i):o=JD(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===In.LISTEN_COMPLETE)o=ZD(t,e,n.path,r,i);else throw _i("Unknown operation type: "+n.type);const l=i.getChanges();return YD(e,o,l),{viewCache:o,changes:l}}function YD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Wh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(vD(Wh(e)))}}function hw(t,e,n,r,s,i){const o=e.eventCache;if(ql(r,n)!=null)return e;{let a,l;if(ue(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_s(e),u=c instanceof ve?c:ve.EMPTY_NODE,h=aw(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Kh(r,_s(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=fe(n);if(c===".priority"){M(Cr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Og(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Og(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=pf(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return co(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function Hl(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=fe(n);if(!l.isCompleteForPath(n)&&Cr(n)>1)return e;const g=Ae(n),v=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,g,uw,null)}const h=nw(e,c,l.isFullyInitialized()||ue(n),u.filtersNodes()),d=new mf(s,h,i);return hw(t,h,n,s,d,a)}function zh(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new mf(s,e,i);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=co(e,c,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=co(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ae(n),p=a.getNode().getImmediateChild(h);let g;if(ue(d))g=r;else{const E=u.getCompleteChild(h);E!=null?BE(d)===".priority"&&E.getChild(WE(d)).isEmpty()?g=E:g=E.updateChild(d,r):g=ve.EMPTY_NODE}if(p.equals(g))l=e;else{const E=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=co(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Dg(t,e){return t.eventCache.isCompleteForChild(e)}function XD(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=Xe(n,l);Dg(e,fe(u))&&(a=zh(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=Xe(n,l);Dg(e,fe(u))||(a=zh(t,a,u,c,s,i,o))}),a}function xg(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Gh(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=r:c=new Re(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=xg(t,p,d);l=Hl(t,l,new ke(h),g,s,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),E=xg(t,g,d);l=Hl(t,l,new ke(h),E,s,i,o,a)}}),l}function JD(t,e,n,r,s,i,o){if(ql(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Hl(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ue(n)){let c=new Re(null);return l.getNode().forEachChild(ei,(u,h)=>{c=c.set(new ke(u),h)}),Gh(t,e,n,c,s,i,a,o)}else return e}else{let c=new Re(null);return r.foreach((u,h)=>{const d=Xe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Gh(t,e,n,c,s,i,a,o)}}function ZD(t,e,n,r,s){const i=e.serverCache,o=nw(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return hw(t,o,n,r,uw,s)}function e1(t,e,n,r,s,i){let o;if(ql(r,n)!=null)return e;{const a=new mf(r,e,s),l=e.eventCache.getNode();let c;if(ue(n)||fe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Kh(r,_s(e));else{const h=e.serverCache.getNode();M(h instanceof ve,"serverChildren would be complete if leaf node"),u=aw(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=fe(n);let h=pf(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ae(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ve.EMPTY_NODE,Ae(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Kh(r,_s(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||ql(r,Ie())!=null,co(e,c,o,t.filter.filtersNodes())}}function t1(t,e){const n=_s(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function Mg(t,e,n,r){e.type===In.MERGE&&e.source.queryId!==null&&(M(_s(t.viewCache_),"We should always have a full cache before handling merges"),M(Wh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=QD(t.processor_,s,e,n,r);return GD(t.processor_,i.viewCache),M(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,n1(t,i.changes,i.viewCache.eventCache.getNode(),null)}function n1(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return PD(t.eventGenerator_,e,n,s)}/**
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
 */let Lg;function r1(t){M(!Lg,"__referenceConstructor has already been defined"),Lg=t}function gf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return M(i!=null,"SyncTree gave us an op for an invalid query."),Mg(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Mg(o,e,n,r));return i}}function _f(t,e){let n=null;for(const r of t.views.values())n=n||t1(r,e);return n}/**
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
 */let Vg;function s1(t){M(!Vg,"__referenceConstructor has already been defined"),Vg=t}class Fg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=qD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function i1(t,e,n,r,s){return DD(t.pendingWriteTree_,e,n,r,s),s?Dc(t,new gs(JE(),e,n)):[]}function Hs(t,e,n=!1){const r=xD(t.pendingWriteTree_,e);if(MD(t.pendingWriteTree_,e)){let i=new Re(null);return r.snap!=null?i=i.set(Ie(),!0):Gt(r.children,o=>{i=i.set(new ke(o),!0)}),Dc(t,new Wl(r.path,i,n))}else return[]}function Oc(t,e,n){return Dc(t,new gs(ZE(),e,n))}function o1(t,e,n){const r=Re.fromObject(n);return Dc(t,new xo(ZE(),e,r))}function a1(t,e,n,r){const s=mw(t,r);if(s!=null){const i=gw(s),o=i.path,a=i.queryId,l=zt(o,e),c=new gs(ew(a),l,n);return _w(t,o,c)}else return[]}function l1(t,e,n,r){const s=mw(t,r);if(s){const i=gw(s),o=i.path,a=i.queryId,l=zt(o,e),c=Re.fromObject(n),u=new xo(ew(a),l,c);return _w(t,o,u)}else return[]}function dw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=zt(o,e),c=_f(a,l);if(c)return c});return ow(s,e,i,n,!0)}function Dc(t,e){return fw(e,t.syncPointTree_,null,sw(t.pendingWriteTree_,Ie()))}function fw(t,e,n,r){if(ue(t.path))return pw(t,e,n,r);{const s=e.get(Ie());n==null&&s!=null&&(n=_f(s,Ie()));let i=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=lw(r,o);i=i.concat(fw(a,l,c,u))}return s&&(i=i.concat(gf(s,t,r,n))),i}}function pw(t,e,n,r){const s=e.get(Ie());n==null&&s!=null&&(n=_f(s,Ie()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=lw(r,o),u=t.operationForChild(o);u&&(i=i.concat(pw(u,a,l,c)))}),s&&(i=i.concat(gf(s,t,r,n))),i}function mw(t,e){return t.tagToQueryMap.get(e)}function gw(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ke(t.substr(0,e))}}function _w(t,e,n){const r=t.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const s=sw(t.pendingWriteTree_,e);return gf(r,n,s,null)}/**
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
 */class yf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yf(n)}node(){return this.node_}}class vf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new vf(this.syncTree_,n)}node(){return dw(this.syncTree_,this.path_)}}const c1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ug=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return u1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return h1(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},u1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},h1=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const s=e.node();if(M(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},d1=function(t,e,n,r){return Ef(e,new vf(n,t),r)},f1=function(t,e,n){return Ef(t,new yf(e),n)};function Ef(t,e,n){const r=t.getPriority().val(),s=Ug(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Ug(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Qe(a,dt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Qe(s))),o.forEachChild(mt,(a,l)=>{const c=Ef(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class wf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Tf(t,e){let n=e instanceof ke?e:new ke(e),r=t,s=fe(n);for(;s!==null;){const i=oi(r.node.children,s)||{children:{},childCount:0};r=new wf(s,r,i),n=Ae(n),s=fe(n)}return r}function Ti(t){return t.node.value}function yw(t,e){t.node.value=e,Qh(t)}function vw(t){return t.node.childCount>0}function p1(t){return Ti(t)===void 0&&!vw(t)}function xc(t,e){Gt(t.node.children,(n,r)=>{e(new wf(n,t,r))})}function Ew(t,e,n,r){n&&!r&&e(t),xc(t,s=>{Ew(s,e,!0,r)}),n&&r&&e(t)}function m1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ca(t){return new ke(t.parent===null?t.name:ca(t.parent)+"/"+t.name)}function Qh(t){t.parent!==null&&g1(t.parent,t.name,t)}function g1(t,e,n){const r=p1(n),s=Zn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Qh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Qh(t))}/**
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
 */const _1=/[\[\].#$\/\u0000-\u001F\u007F]/,y1=/[\[\].#$\u0000-\u001F\u007F]/,Lu=10*1024*1024,ww=function(t){return typeof t=="string"&&t.length!==0&&!_1.test(t)},v1=function(t){return typeof t=="string"&&t.length!==0&&!y1.test(t)},E1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),v1(t)},Tw=function(t,e,n){const r=n instanceof ke?new ZO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wr(r)+" with contents = "+e.toString());if(wE(e))throw new Error(t+"contains "+e.toString()+" "+Wr(r));if(typeof e=="string"&&e.length>Lu/3&&Rc(e)>Lu)throw new Error(t+"contains a string greater than "+Lu+" utf8 bytes "+Wr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Gt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ww(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eD(r,o),Tw(t,a,r),tD(r)}),s&&i)throw new Error(t+' contains ".value" child '+Wr(r)+" in addition to actual children.")}},w1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ww(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!E1(n))throw new Error(_S(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class T1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function I1(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!qE(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ps(t,e,n){I1(t,n),b1(t,r=>nn(r,e)||nn(e,r))}function b1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(R1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function R1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();is&&ht("event: "+n.toString()),aa(r)}}}/**
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
 */const A1="repo_interrupt",C1=25;class S1{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new T1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jl(),this.transactionQueueTree_=new wf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function P1(t,e,n){if(t.stats_=lf(t.repoInfo_),t.forceRestClient_||IO())t.server_=new Bl(t.repoInfo_,(r,s,i,o)=>{$g(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new zn(t.repoInfo_,e,(r,s,i,o)=>{$g(t,r,s,i,o)},r=>{Bg(t,r)},r=>{N1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PO(t.repoInfo_,()=>new SD(t.stats_,t.server_)),t.infoData_=new ID,t.infoSyncTree_=new Fg({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Oc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),If(t,"connected",!1),t.serverSyncTree_=new Fg({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Ps(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function k1(t){const n=t.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Iw(t){return c1({timestamp:k1(t)})}function $g(t,e,n,r,s){t.dataUpdateCount++;const i=new ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Sl(n,c=>dt(c));o=l1(t.serverSyncTree_,i,l,s)}else{const l=dt(n);o=a1(t.serverSyncTree_,i,l,s)}else if(r){const l=Sl(n,c=>dt(c));o=o1(t.serverSyncTree_,i,l)}else{const l=dt(n);o=Oc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Rf(t,i)),Ps(t.eventQueue_,a,o)}function Bg(t,e){If(t,"connected",e),e===!1&&D1(t)}function N1(t,e){Gt(e,(n,r)=>{If(t,n,r)})}function If(t,e,n){const r=new ke("/.info/"+e),s=dt(n);t.infoData_.updateSnapshot(r,s);const i=Oc(t.infoSyncTree_,r,s);Ps(t.eventQueue_,r,i)}function O1(t){return t.nextWriteId_++}function D1(t){bw(t,"onDisconnectEvents");const e=Iw(t),n=jl();jh(t.onDisconnect_,Ie(),(s,i)=>{const o=d1(s,i,t.serverSyncTree_,e);XE(n,s,o)});let r=[];jh(n,Ie(),(s,i)=>{r=r.concat(Oc(t.serverSyncTree_,s,i));const o=V1(t,s);Rf(t,o)}),t.onDisconnect_=jl(),Ps(t.eventQueue_,Ie(),r)}function x1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(A1)}function bw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ht(n,...e)}function Rw(t,e,n){return dw(t.serverSyncTree_,e,n)||ve.EMPTY_NODE}function bf(t,e=t.transactionQueueTree_){if(e||Mc(t,e),Ti(e)){const n=Cw(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&M1(t,ca(e),n)}else vw(e)&&xc(e,n=>{bf(t,n)})}function M1(t,e,n){const r=n.map(c=>c.currentWriteId),s=Rw(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=zt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{bw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Hs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Mc(t,Tf(t.transactionQueueTree_,e)),bf(t,t.transactionQueueTree_),Ps(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)aa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ut("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Rf(t,e)}},o)}function Rf(t,e){const n=Aw(t,e),r=ca(n),s=Cw(t,n);return L1(t,s,r),r}function L1(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=zt(n,l.path);let u=!1,h;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=C1)u=!0,h="maxretry",s=s.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Rw(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Tw("transaction failed: Data returned ",p,l.path);let g=dt(p);typeof p=="object"&&p!=null&&Zn(p,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,A=Iw(t),D=f1(g,d,A);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=D,l.currentWriteId=O1(t),o.splice(o.indexOf(v),1),s=s.concat(i1(t.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),s=s.concat(Hs(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0))}Ps(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Mc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)aa(r[a]);bf(t,t.transactionQueueTree_)}function Aw(t,e){let n,r=t.transactionQueueTree_;for(n=fe(e);n!==null&&Ti(r)===void 0;)r=Tf(r,n),e=Ae(e),n=fe(e);return r}function Cw(t,e){const n=[];return Sw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Sw(t,e,n){const r=Ti(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);xc(e,s=>{Sw(t,s,n)})}function Mc(t,e){const n=Ti(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,yw(e,n.length>0?n:void 0)}xc(e,r=>{Mc(t,r)})}function V1(t,e){const n=ca(Aw(t,e)),r=Tf(t.transactionQueueTree_,e);return m1(r,s=>{Vu(t,s)}),Vu(t,r),Ew(r,s=>{Vu(t,s)}),n}function Vu(t,e){const n=Ti(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Hs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?yw(e,void 0):n.length=i+1,Ps(t.eventQueue_,ca(e),s);for(let o=0;o<r.length;o++)aa(r[o])}}/**
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
 */function F1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function U1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const jg=function(t,e){const n=$1(t),r=n.namespace;n.domain==="firebase.com"&&ps(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ps("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mO();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new AO(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ke(n.pathString)}},$1=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=F1(t.substring(u,h)));const d=U1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class Af{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ue(this._path)?null:BE(this._path)}get ref(){return new Ii(this._repo,this._path)}get _queryIdentifier(){const e=Cg(this._queryParams),n=of(e);return n==="{}"?"default":n}get _queryObject(){return Cg(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Af))return!1;const n=this._repo===e._repo,r=qE(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+JO(this._path)}}class Ii extends Af{constructor(e,n){super(e,n,new df,!1)}get parent(){const e=WE(this._path);return e===null?null:new Ii(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}r1(Ii);s1(Ii);/**
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
 */const B1="FIREBASE_DATABASE_EMULATOR_HOST",Yh={};let j1=!1;function W1(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ps("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jg(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[B1]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=jg(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Uh(Uh.OWNER):new RO(t.name,t.options,e);w1("Invalid Firebase Database URL",o),ue(o.path)||ps("Database URL must point to the root of a Firebase Database (not including a child path).");const h=H1(a,t,u,new bO(t.name,n));return new K1(h,t)}function q1(t,e){const n=Yh[e];(!n||n[t.key]!==t)&&ps(`Database ${e}(${t.repoInfo_}) has already been deleted.`),x1(t),delete n[t.key]}function H1(t,e,n,r){let s=Yh[e.name];s||(s={},Yh[e.name]=s);let i=s[t.toURLString()];return i&&ps("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new S1(t,j1,n,r),s[t.toURLString()]=i,i}class K1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(P1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ii(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(q1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ps("Cannot call "+e+" on a deleted database.")}}/**
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
 */function z1(t){uO(Dr),xn(new cn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return W1(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Ft(cg,ug,t),Ft(cg,ug,"esm2017")}zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};z1();var G1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Cf=Cf||{},J=G1||self;function Lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ua(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Q1(t){return Object.prototype.hasOwnProperty.call(t,Fu)&&t[Fu]||(t[Fu]=++Y1)}var Fu="closure_uid_"+(1e9*Math.random()>>>0),Y1=0;function X1(t,e,n){return t.call.apply(t.bind,arguments)}function J1(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function gt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?gt=X1:gt=J1,gt.apply(null,arguments)}function ja(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function xr(){this.s=this.s,this.o=this.o}var Z1=0;xr.prototype.s=!1;xr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Z1!=0)&&Q1(this)};xr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Wg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var ex=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function Mo(t){return/^[\s\xa0]*$/.test(t)}function Vc(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return Vc().indexOf(t)!=-1}function Pf(t){return Pf[" "](t),t}Pf[" "]=function(){};function tx(t,e){var n=zx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var nx=wn("Opera"),ci=wn("Trident")||wn("MSIE"),kw=wn("Edge"),Xh=kw||ci,Nw=wn("Gecko")&&!(Vc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),rx=Vc().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function Ow(){var t=J.document;return t?t.documentMode:void 0}var Jh;e:{var Uu="",$u=function(){var t=Vc();if(Nw)return/rv:([^\);]+)(\)|;)/.exec(t);if(kw)return/Edge\/([\d\.]+)/.exec(t);if(ci)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rx)return/WebKit\/(\S+)/.exec(t);if(nx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($u&&(Uu=$u?$u[1]:""),ci){var Bu=Ow();if(Bu!=null&&Bu>parseFloat(Uu)){Jh=String(Bu);break e}}Jh=Uu}var Zh;if(J.document&&ci){var qg=Ow();Zh=qg||parseInt(Jh,10)||void 0}else Zh=void 0;var sx=Zh;function Lo(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nw){e:{try{Pf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ix[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lo.$.h.call(this)}}Ze(Lo,_t);var ix={2:"touch",3:"pen",4:"mouse"};Lo.prototype.h=function(){Lo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ha="closure_listenable_"+(1e6*Math.random()|0),ox=0;function ax(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++ox,this.fa=this.ia=!1}function Fc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function lx(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Dw(t){const e={};for(const n in t)e[n]=t[n];return e}const Hg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xw(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Hg.length;i++)n=Hg[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Uc(t){this.src=t,this.g={},this.h=0}Uc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=td(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ax(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function ed(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Pw(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function td(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Nf="closure_lm_"+(1e6*Math.random()|0),ju={};function Mw(t,e,n,r,s){if(r&&r.once)return Vw(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mw(t,e[i],n,r,s);return null}return n=xf(n),t&&t[ha]?t.O(e,n,ua(r)?!!r.capture:!!r,s):Lw(t,e,n,!1,r,s)}function Lw(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ua(s)?!!s.capture:!!s,a=Df(t);if(a||(t[Nf]=a=new Uc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=cx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ex||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Uw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cx(){function t(n){return e.call(t.src,t.listener,n)}const e=ux;return t}function Vw(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Vw(t,e[i],n,r,s);return null}return n=xf(n),t&&t[ha]?t.P(e,n,ua(r)?!!r.capture:!!r,s):Lw(t,e,n,!0,r,s)}function Fw(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Fw(t,e[i],n,r,s);else r=ua(r)?!!r.capture:!!r,n=xf(n),t&&t[ha]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=td(i,n,r,s),-1<n&&(Fc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Df(t))&&(e=t.g[e.toString()],t=-1,e&&(t=td(e,n,r,s)),(n=-1<t?e[t]:null)&&Of(n))}function Of(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ha])ed(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Uw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Df(e))?(ed(n,t),n.h==0&&(n.src=null,e[Nf]=null)):Fc(t)}}}function Uw(t){return t in ju?ju[t]:ju[t]="on"+t}function ux(t,e){if(t.fa)t=!0;else{e=new Lo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Of(t),t=n.call(r,e)}return t}function Df(t){return t=t[Nf],t instanceof Uc?t:null}var Wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function xf(t){return typeof t=="function"?t:(t[Wu]||(t[Wu]=function(e){return t.handleEvent(e)}),t[Wu])}function Je(){xr.call(this),this.i=new Uc(this),this.S=this,this.J=null}Ze(Je,xr);Je.prototype[ha]=!0;Je.prototype.removeEventListener=function(t,e,n,r){Fw(this,t,e,n,r)};function at(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var s=e;e=new _t(r,t),xw(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Wa(o,r,!0,e)&&s}if(o=e.g=t,s=Wa(o,r,!0,e)&&s,s=Wa(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Wa(o,r,!1,e)&&s}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fc(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Wa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ed(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Mf=J.JSON.stringify;class hx{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function dx(){var t=Lf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fx{constructor(){this.h=this.g=null}add(e,n){const r=$w.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $w=new hx(()=>new px,t=>t.reset());class px{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mx(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function gx(t){J.setTimeout(()=>{throw t},0)}let Vo,Fo=!1,Lf=new fx,Bw=()=>{const t=J.Promise.resolve(void 0);Vo=()=>{t.then(_x)}};var _x=()=>{for(var t;t=dx();){try{t.h.call(t.g)}catch(n){gx(n)}var e=$w;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fo=!1};function $c(t,e){Je.call(this),this.h=t||1,this.g=e||J,this.j=gt(this.qb,this),this.l=Date.now()}Ze($c,Je);L=$c.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),at(this,"tick"),this.ga&&(Vf(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){$c.$.N.call(this),Vf(this),delete this.g};function Ff(t,e,n){if(typeof t=="function")n&&(t=gt(t,n));else if(t&&typeof t.handleEvent=="function")t=gt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function jw(t){t.g=Ff(()=>{t.g=null,t.i&&(t.i=!1,jw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yx extends xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:jw(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){xr.call(this),this.h=t,this.g={}}Ze(Uo,xr);var Kg=[];function Ww(t,e,n,r){Array.isArray(n)||(n&&(Kg[0]=n.toString()),n=Kg);for(var s=0;s<n.length;s++){var i=Mw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qw(t){kf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Of(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),qw(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bc(){this.g=!0}Bc.prototype.Ea=function(){this.g=!1};function vx(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ex(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ks(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Tx(t,n)+(r?" "+r:"")})}function wx(t,e){t.info(function(){return"TIMEOUT: "+e})}Bc.prototype.info=function(){};function Tx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Mf(n)}catch{return e}}var ks={},zg=null;function jc(){return zg=zg||new Je}ks.Ta="serverreachability";function Hw(t){_t.call(this,ks.Ta,t)}Ze(Hw,_t);function $o(t){const e=jc();at(e,new Hw(e))}ks.STAT_EVENT="statevent";function Kw(t,e){_t.call(this,ks.STAT_EVENT,t),this.stat=e}Ze(Kw,_t);function At(t){const e=jc();at(e,new Kw(e,t))}ks.Ua="timingevent";function zw(t,e){_t.call(this,ks.Ua,t),this.size=e}Ze(zw,_t);function da(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Wc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Gw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Uf(){}Uf.prototype.h=null;function Gg(t){return t.h||(t.h=t.i())}function Qw(){}var fa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $f(){_t.call(this,"d")}Ze($f,_t);function Bf(){_t.call(this,"c")}Ze(Bf,_t);var nd;function qc(){}Ze(qc,Uf);qc.prototype.g=function(){return new XMLHttpRequest};qc.prototype.i=function(){return{}};nd=new qc;function pa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Uo(this),this.P=Ix,t=Xh?125:void 0,this.V=new $c(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Yw}function Yw(){this.i=null,this.g="",this.h=!1}var Ix=45e3,rd={},Kl={};L=pa.prototype;L.setTimeout=function(t){this.P=t};function sd(t,e,n){t.L=1,t.v=Kc(Qn(e)),t.s=n,t.S=!0,Xw(t,null)}function Xw(t,e){t.G=Date.now(),ma(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),iT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Yw,t.g=AT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new yx(gt(t.Pa,t,t.g),t.O)),Ww(t.U,t.g,"readystatechange",t.nb),e=t.I?Dw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$o(),vx(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&bn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Xh||this.g&&(this.h.h||this.g.ja()||Jg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?$o(3):$o(2)),Hc(this);var n=this.g.da();this.ca=n;t:if(Jw(this)){var r=Jg(this.g);t="";var s=r.length,i=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),ho(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ex(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mo(a)){var c=a;break t}}c=null}if(n=c)Ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,id(this,n);else{this.i=!1,this.o=3,At(12),Gr(this),ho(this);break e}}this.S?(Zw(this,u,o),Xh&&this.i&&u==3&&(Ww(this.U,this.V,"tick",this.mb),this.V.start())):(Ks(this.j,this.m,o,null),id(this,o)),u==4&&Gr(this),this.i&&!this.J&&(u==4?TT(this.l,this):(this.i=!1,ma(this)))}else qx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Gr(this),ho(this)}}}catch{}finally{}};function Jw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Zw(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=bx(t,n),s==Kl){e==4&&(t.o=4,At(14),r=!1),Ks(t.j,t.m,null,"[Incomplete Response]");break}else if(s==rd){t.o=4,At(15),Ks(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ks(t.j,t.m,s,null),id(t,s);Jw(t)&&s!=Kl&&s!=rd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zf(e),e.M=!0,At(11))):(Ks(t.j,t.m,n,"[Invalid Chunked Response]"),Gr(t),ho(t))}L.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.C<e.length&&(Hc(this),Zw(this,t,e),this.i&&t!=4&&ma(this))}};function bx(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Kl:(n=Number(e.substring(n,r)),isNaN(n)?rd:(r+=1,r+n>e.length?Kl:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,Gr(this)};function ma(t){t.Y=Date.now()+t.P,eT(t,t.P)}function eT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=da(gt(t.lb,t),e)}function Hc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(wx(this.j,this.A),this.L!=2&&($o(),At(17)),Gr(this),this.o=2,ho(this)):eT(this,this.Y-t)};function ho(t){t.l.H==0||t.J||TT(t.l,t)}function Gr(t){Hc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Vf(t.V),qw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function id(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||od(n.i,t))){if(!t.K&&od(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ql(n),Yc(n);else break e;Kf(n),At(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=da(gt(n.ib,n),6e3));if(1>=lT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qr(n,11)}else if((t.K||n.g==t)&&Ql(n),!Mo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(jf(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Ce(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=RT(r,r.J?r.pa:null,r.Y),o.K){cT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Hc(a),ma(a)),r.g=o}else ET(r);0<n.j.length&&Xc(n)}else c[0]!="stop"&&c[0]!="close"||Qr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Qr(n,7):Hf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}$o(4)}catch{}}function Rx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ax(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function tT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ax(t),r=Rx(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var nT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function os(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof os){this.h=t.h,zl(this,t.j),this.s=t.s,this.g=t.g,Gl(this,t.m),this.l=t.l;var e=t.i,n=new Bo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qg(this,n),this.o=t.o}else t&&(e=String(t).match(nT))?(this.h=!1,zl(this,e[1]||"",!0),this.s=Xi(e[2]||""),this.g=Xi(e[3]||"",!0),Gl(this,e[4]),this.l=Xi(e[5]||"",!0),Qg(this,e[6]||"",!0),this.o=Xi(e[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}os.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ji(e,Yg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ji(e,Yg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ji(n,n.charAt(0)=="/"?kx:Px,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ji(n,Ox)),t.join("")};function Qn(t){return new os(t)}function zl(t,e,n){t.j=n?Xi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qg(t,e,n){e instanceof Bo?(t.i=e,Dx(t.i,t.h)):(n||(e=Ji(e,Nx)),t.i=new Bo(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Kc(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ji(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Sx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yg=/[#\/\?@]/g,Px=/[#\?:]/g,kx=/[#\?]/g,Nx=/[#\?@]/g,Ox=/#/g;function Bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mr(t){t.g||(t.g=new Map,t.h=0,t.i&&Cx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Bo.prototype;L.add=function(t,e){Mr(this),this.i=null,t=bi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rT(t,e){Mr(t),e=bi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sT(t,e){return Mr(t),e=bi(t,e),t.g.has(e)}L.forEach=function(t,e){Mr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};L.ta=function(){Mr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};L.Z=function(t){Mr(this);let e=[];if(typeof t=="string")sT(this,t)&&(e=e.concat(this.g.get(bi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Mr(this),this.i=null,t=bi(this,t),sT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function iT(t,e,n){rT(t,e),0<n.length&&(t.i=null,t.g.set(bi(t,e),Sf(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function bi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Dx(t,e){e&&!t.j&&(Mr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(rT(this,r),iT(this,s,n))},t)),t.j=e}var xx=class{constructor(t,e){this.g=t,this.map=e}};function oT(t){this.l=t||Mx,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mx=10;function aT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lT(t){return t.h?1:t.g?t.g.size:0}function od(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jf(t,e){t.g?t.g.add(e):t.h=e}function cT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}oT.prototype.cancel=function(){if(this.i=uT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Sf(t.i)}var Lx=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function Vx(){this.g=new Lx}function Fx(t,e,n){const r=n||"";try{tT(t,function(s,i){let o=s;ua(s)&&(o=Mf(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Ux(t,e){const n=new Bc;if(J.Image){const r=new Image;r.onload=ja(qa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ja(qa,n,r,"TestLoadImage: error",!1,e),r.onabort=ja(qa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ja(qa,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function qa(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function zc(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(zc,Uf);zc.prototype.g=function(){return new Gc(this.l,this.j)};zc.prototype.i=function(t){return function(){return t}}({});function Gc(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Wf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Gc,Je);var Wf=0;L=Gc.prototype;L.open=function(t,e){if(this.readyState!=Wf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jo(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ga(this)),this.readyState=Wf};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function hT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ga(this):jo(this),this.readyState==3&&hT(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,ga(this))};L.Ya=function(t){this.g&&(this.response=t,ga(this))};L.ka=function(){this.g&&ga(this)};function ga(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jo(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $x=J.JSON.parse;function Ve(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=dT,this.L=this.M=!1}Ze(Ve,Je);var dT="",Bx=/^https?$/i,jx=["POST","PUT"];L=Ve.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nd.g(),this.C=this.u?Gg(this.u):Gg(nd),this.g.onreadystatechange=gt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Xg(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=Pw(jx,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mT(this),0<this.B&&((this.L=Wx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=gt(this.ua,this)):this.A=Ff(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Xg(this,i)}};function Wx(t){return ci&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Cf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function Xg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fT(t),Qc(t)}function fT(t){t.F||(t.F=!0,at(t,"complete"),at(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),Qc(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qc(this,!0)),Ve.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?pT(this):this.kb())};L.kb=function(){pT(this)};function pT(t){if(t.h&&typeof Cf<"u"&&(!t.C[1]||bn(t)!=4||t.da()!=2)){if(t.v&&bn(t)==4)Ff(t.La,0,t);else if(at(t,"readystatechange"),bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(nT)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!Bx.test(s?s.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var i=2<bn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",fT(t)}}finally{Qc(t)}}}}function Qc(t,e){if(t.g){mT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function mT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function bn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$x(e)}};function Jg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case dT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function qx(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Mo(t[r]))continue;var n=mx(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}lx(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gT(t){let e="";return kf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=gT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Ui(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _T(t){this.Ga=0,this.j=[],this.l=new Bc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ui("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ui("baseRetryDelayMs",5e3,t),this.hb=Ui("retryDelaySeedMs",1e4,t),this.eb=Ui("forwardChannelMaxRetries",2,t),this.xa=Ui("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new oT(t&&t.concurrentRequestLimit),this.Ja=new Vx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=_T.prototype;L.ra=8;L.H=1;function Hf(t){if(yT(t),t.H==3){var e=t.W++,n=Qn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),_a(t,n),e=new pa(t,t.l,e),e.L=2,e.v=Kc(Qn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=AT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ma(e)}bT(t)}function Yc(t){t.g&&(zf(t),t.g.cancel(),t.g=null)}function yT(t){Yc(t),t.u&&(J.clearTimeout(t.u),t.u=null),Ql(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Xc(t){if(!aT(t.i)&&!t.m){t.m=!0;var e=t.Na;Vo||Bw(),Fo||(Vo(),Fo=!0),Lf.add(e,t),t.C=0}}function Hx(t,e){return lT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=da(gt(t.Na,t,e),IT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new pa(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Dw(i),xw(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vT(this,s,e),n=Qn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),_a(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(gT(i)))+"&"+e:this.o&&qf(n,this.o,i)),jf(this.i,s),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),s.aa=!0,sd(s,n,null)):sd(s,n,e),this.H=2}}else this.H==3&&(t?Zg(this,t):this.j.length==0||aT(this.i)||Zg(this))};function Zg(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),_a(t,r),t.o&&t.s&&qf(r,t.o,t.s),n=new pa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=vT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jf(t.i,n),sd(n,r,e)}function _a(t,e){t.na&&kf(t.na,function(n,r){Ce(e,r,n)}),t.h&&tT({},function(n,r){Ce(e,r,n)})}function vT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?gt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Fx(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ET(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vo||Bw(),Fo||(Vo(),Fo=!0),Lf.add(e,t),t.A=0}}function Kf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=da(gt(t.Ma,t),IT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,wT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=da(gt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),Yc(this),wT(this))};function zf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function wT(t){t.g=new pa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),_a(t,e),t.o&&t.s&&qf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Kc(Qn(e)),n.s=null,n.S=!0,Xw(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Yc(this),Kf(this),At(19))};function Ql(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function TT(t,e){var n=null;if(t.g==e){Ql(t),zf(t),t.g=null;var r=2}else if(od(t.i,e))n=e.F,cT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=jc(),at(r,new zw(r,n)),Xc(t)}else ET(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Hx(t,e)||r==2&&Kf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Qr(t,5);break;case 4:Qr(t,10);break;case 3:Qr(t,6);break;default:Qr(t,2)}}}function IT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=gt(t.pb,t);n||(n=new os("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||zl(n,"https"),Kc(n)),Ux(n.toString(),r)}else At(2);t.H=0,t.h&&t.h.za(e),bT(t),yT(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function bT(t){if(t.H=0,t.ma=[],t.h){const e=uT(t.i);(e.length!=0||t.j.length!=0)&&(Wg(t.ma,e),Wg(t.ma,t.j),t.i.i.length=0,Sf(t.j),t.j.length=0),t.h.ya()}}function RT(t,e,n){var r=n instanceof os?Qn(n):new os(n);if(r.g!="")e&&(r.g=e+"."+r.g),Gl(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new os(null);r&&zl(i,r),e&&(i.g=e),s&&Gl(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),_a(t,r),r}function AT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ve(new zc({ob:!0})):new Ve(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function CT(){}L=CT.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Yl(){if(ci&&!(10<=Number(sx)))throw Error("Environmental error: no available transport.")}Yl.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){Je.call(this),this.g=new _T(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ri(this)}Ze(Bt,Je);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=RT(t,null,t.Y),Xc(t)};Bt.prototype.close=function(){Hf(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mf(t),t=n);e.j.push(new xx(e.fb++,t)),e.H==3&&Xc(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,Hf(this.g),delete this.g,Bt.$.N.call(this)};function ST(t){$f.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(ST,$f);function PT(){Bf.call(this),this.status=1}Ze(PT,Bf);function Ri(t){this.g=t}Ze(Ri,CT);Ri.prototype.Ba=function(){at(this.g,"a")};Ri.prototype.Aa=function(t){at(this.g,new ST(t))};Ri.prototype.za=function(t){at(this.g,new PT)};Ri.prototype.ya=function(){at(this.g,"b")};function Kx(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(dn,Kx);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)qu(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){qu(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){qu(this,r),s=0;break}}this.h=s,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var zx={};function Gf(t){return-128<=t&&128>t?tx(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return ti;if(0>t)return st(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ad;return new Ee(e,0)}function kT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(kT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=ti,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Rn(Math.pow(e,i)),r=r.R(i).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var ad=4294967296,ti=Gf(0),ld=Gf(1),e_=Gf(16777216);L=Ee.prototype;L.ea=function(){if(Kt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ad+r)*e,e*=ad}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Hn(this))return"0";if(Kt(this))return"-"+st(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var s=Jl(n,e).g;n=Xl(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Hn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Hn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}L.X=function(t){return t=Xl(this,t),Kt(t)?-1:Hn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(ld)}L.abs=function(){return Kt(this)?st(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function Xl(t,e){return t.add(st(e))}L.R=function(t){if(Hn(this)||Hn(t))return ti;if(Kt(this))return Kt(t)?st(this).R(st(t)):st(st(this).R(t));if(Kt(t))return st(this.R(st(t)));if(0>this.X(e_)&&0>t.X(e_))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Ha(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Ha(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ha(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ha(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function Ha(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function $i(t,e){this.g=t,this.h=e}function Jl(t,e){if(Hn(e))throw Error("division by zero");if(Hn(t))return new $i(ti,ti);if(Kt(t))return e=Jl(st(t),e),new $i(st(e.g),st(e.h));if(Kt(e))return e=Jl(t,st(e)),new $i(st(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ld,r=e;0>=r.X(t);)n=t_(n),r=t_(r);var s=Vs(n,1),i=Vs(r,1);for(r=Vs(r,2),n=Vs(n,2);!Hn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Vs(r,1),n=Vs(n,1)}return e=Xl(t,s.R(e)),new $i(s,e)}for(s=ti;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Rn(n),o=i.R(e);Kt(o)||0<o.X(t);)n-=r,i=Rn(n),o=i.R(e);Hn(i)&&(i=ld),s=s.add(i),t=Xl(t,o)}return new $i(s,t)}L.gb=function(t){return Jl(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function t_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function Vs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}Yl.prototype.createWebChannel=Yl.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Wc.NO_ERROR=0;Wc.TIMEOUT=8;Wc.HTTP_ERROR=6;Gw.COMPLETE="complete";Qw.EventType=fa;fa.OPEN="a";fa.CLOSE="b";fa.ERROR="c";fa.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=Rn;Ee.fromString=kT;var Gx=function(){return new Yl},Qx=function(){return jc()},Hu=Wc,Yx=Gw,Xx=ks,n_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ka=Qw,Jx=Ve,Zx=dn,ni=Ee;const r_="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Ai="10.5.0";/**
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
 */const ys=new ea("@firebase/firestore");function Bi(){return ys.logLevel}function W(t,...e){if(ys.logLevel<=ae.DEBUG){const n=e.map(Qf);ys.debug(`Firestore (${Ai}): ${t}`,...n)}}function Yn(t,...e){if(ys.logLevel<=ae.ERROR){const n=e.map(Qf);ys.error(`Firestore (${Ai}): ${t}`,...n)}}function ui(t,...e){if(ys.logLevel<=ae.WARN){const n=e.map(Qf);ys.warn(`Firestore (${Ai}): ${t}`,...n)}}function Qf(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function Pe(t,e){t||X()}function te(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class NT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class tM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nM{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Er,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new NT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new ut(e)}}class rM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new rM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new iM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function aM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class OT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=aM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ge(0,0))}static max(){return new ee(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Wo{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const lM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Wo{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return lM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}function cM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Sr(s,G.empty(),e)}function uM(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(ee.min(),G.empty(),-1)}static max(){return new Sr(ee.max(),G.empty(),-1)}}function hM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const dM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ya(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==dM)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function va(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Yf.ae=-1;function Jc(t){return t==null}function Zl(t){return t===0&&1/t==-1/0}function pM(t){return typeof t=="number"&&Number.isInteger(t)&&!Zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function s_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function DT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new i_(this.data.getIterator())}getIteratorFrom(e){return new i_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class i_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new lt(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xT("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const mM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=mM.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vs(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function Xf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jf(t){const e=t.mapValue.fields.__previous_value__;return Xf(e)?Jf(e):e}function qo(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class gM{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xf(t)?4:_M(t)?9007199254740991:10:X()}function Mn(t,e){if(t===e)return!0;const n=Es(t);if(n!==Es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Pr(s.timestampValue),a=Pr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vs(s.bytesValue).isEqual(vs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),a=qe(i.doubleValue);return o===a?Zl(o)===Zl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(s_(o)!==s_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Mn(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function Ko(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=Es(t),r=Es(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return o_(t.timestampValue,e.timestampValue);case 4:return o_(qo(t),qo(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=vs(i),l=vs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(qe(i.latitude),qe(o.latitude));return a!==0?a:ge(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=di(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ga.mapValue&&o===Ga.mapValue)return 0;if(i===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ge(l[h],u[h]);if(d!==0)return d;const p=di(a[l[h]],c[u[h]]);if(p!==0)return p}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function o_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Pr(t),r=Pr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function fi(t){return cd(t)}function cd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=cd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${cd(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function a_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ud(t){return!!t&&"integerValue"in t}function Zf(t){return!!t&&"arrayValue"in t}function l_(t){return!!t&&"nullValue"in t}function c_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _M(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=fo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ul(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ns(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(fo(this.value))}}function MT(t){const e=[];return Ns(t.fields,(n,r)=>{const s=new ot([n]);if(ul(r)){const i=MT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
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
 */class ft{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,ee.min(),ee.min(),ee.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,ee.min(),ee.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,ee.min(),ee.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ec{constructor(e,n){this.position=e,this.inclusive=n}}function u_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function h_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function yM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class LT{}class He extends LT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new EM(e,n,r):n==="array-contains"?new IM(e,r):n==="in"?new bM(e,r):n==="not-in"?new RM(e,r):n==="array-contains-any"?new AM(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wM(e,r):new TM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(di(n,this.value)):n!==null&&Es(this.value)===Es(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends LT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new fn(e,n)}matches(e){return VT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function VT(t){return t.op==="and"}function FT(t){return vM(t)&&VT(t)}function vM(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function hd(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(FT(t))return t.filters.map(e=>hd(e)).join(",");{const e=t.filters.map(n=>hd(n)).join(",");return`${t.op}(${e})`}}function UT(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&UT(o,s.filters[a]),!0):!1}(t,e):void X()}function $T(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${fi(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map($T).join(" ,")+"}"}(t):"Filter"}class EM extends He{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class wM extends He{constructor(e,n){super(e,"in",n),this.keys=BT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class TM extends He{constructor(e,n){super(e,"not-in",n),this.keys=BT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class IM extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zf(n)&&Ko(n.arrayValue,this.value)}}class bM extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class RM extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ko(this.value.arrayValue,n)}}class AM extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
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
 */class CM{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function d_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new CM(t,e,n,r,s,i,o)}function ep(t){const e=te(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),e.le=n}return e.le}function tp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!UT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!h_(t.startAt,e.startAt)&&h_(t.endAt,e.endAt)}function dd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ea{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function SM(t,e,n,r,s,i,o,a){return new Ea(t,e,n,r,s,i,o,a)}function jT(t){return new Ea(t)}function f_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WT(t){return t.collectionGroup!==null}function po(t){const e=te(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new tc(i,r))}),n.has(ot.keyField().canonicalString())||e.he.push(new tc(ot.keyField(),r))}return e.he}function Nn(t){const e=te(t);return e.Pe||(e.Pe=PM(e,po(t))),e.Pe}function PM(t,e){if(t.limitType==="F")return d_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tc(s.field,i)});const n=t.endAt?new ec(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ec(t.startAt.position,t.startAt.inclusive):null;return d_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fd(t,e){const n=t.filters.concat([e]);return new Ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pd(t,e,n){return new Ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zc(t,e){return tp(Nn(t),Nn(e))&&t.limitType===e.limitType}function qT(t){return`${ep(Nn(t))}|lt:${t.limitType}`}function $s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$T(s)).join(", ")}]`),Jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fi(s)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=u_(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,po(r),s)||r.endAt&&!function(o,a,l){const c=u_(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,po(r),s))}(t,e)}function kM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HT(t){return(e,n)=>{let r=!1;for(const s of po(t)){const i=NM(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function NM(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?di(l,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return DT(this.inner)}size(){return this.innerSize}}/**
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
 */const OM=new De(G.comparator);function Xn(){return OM}const KT=new De(G.comparator);function Zi(...t){let e=KT;for(const n of t)e=e.insert(n.key,n);return e}function zT(t){let e=KT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return mo()}function GT(){return mo()}function mo(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const DM=new De(G.comparator),xM=new lt(G.comparator);function le(...t){let e=xM;for(const n of t)e=e.add(n);return e}const MM=new lt(ge);function LM(){return MM}/**
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
 */function QT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zl(e)?"-0":e}}function YT(t){return{integerValue:""+t}}function VM(t,e){return pM(e)?YT(e):QT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this._=void 0}}function FM(t,e,n){return t instanceof nc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xf(i)&&(i=Jf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof zo?JT(t,e):t instanceof Go?ZT(t,e):function(s,i){const o=XT(s,i),a=p_(o)+p_(s.Te);return ud(o)&&ud(s.Te)?YT(a):QT(s.serializer,a)}(t,e)}function UM(t,e,n){return t instanceof zo?JT(t,e):t instanceof Go?ZT(t,e):n}function XT(t,e){return t instanceof rc?function(r){return ud(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nc extends tu{}class zo extends tu{constructor(e){super(),this.elements=e}}function JT(t,e){const n=eI(e);for(const r of t.elements)n.some(s=>Mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends tu{constructor(e){super(),this.elements=e}}function ZT(t,e){let n=eI(e);for(const r of t.elements)n=n.filter(s=>!Mn(s,r));return{arrayValue:{values:n}}}class rc extends tu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function p_(t){return qe(t.integerValue||t.doubleValue)}function eI(t){return Zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $M(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof zo&&s instanceof zo||r instanceof Go&&s instanceof Go?hi(r.elements,s.elements,Mn):r instanceof rc&&s instanceof rc?Mn(r.Te,s.Te):r instanceof nc&&s instanceof nc}(t.transform,e.transform)}class BM{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nu{}function tI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rI(t.key,ln.none()):new wa(t.key,t.data,ln.none());{const n=t.data,r=kt.empty();let s=new lt(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Lt(s.toArray()),ln.none())}}function jM(t,e,n){t instanceof wa?function(s,i,o){const a=s.value.clone(),l=g_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!hl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=g_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(nI(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof wa?function(i,o,a,l){if(!hl(i.precondition,o))return a;const c=i.value.clone(),u=__(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,a,l){if(!hl(i.precondition,o))return a;const c=__(i.fieldTransforms,l,o),u=o.data;return u.setAll(nI(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return hl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function WM(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=XT(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function m_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hi(r,s,(i,o)=>$M(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends nu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends nu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function g_(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,UM(o,a,n[s]))}return r}function __(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,FM(i,o,e))}return r}class rI extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qM extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HM{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=GT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=tI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,(n,r)=>m_(n,r))&&hi(this.baseMutations,e.baseMutations,(n,r)=>m_(n,r))}}class np{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return DM}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new np(e,n,r,s)}}/**
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
 */class KM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class zM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,he;function GM(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function sI(t){if(t===void 0)return Yn("GRPC error has no .code"),I.UNKNOWN;switch(t){case We.OK:return I.OK;case We.CANCELLED:return I.CANCELLED;case We.UNKNOWN:return I.UNKNOWN;case We.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case We.INTERNAL:return I.INTERNAL;case We.UNAVAILABLE:return I.UNAVAILABLE;case We.UNAUTHENTICATED:return I.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case We.NOT_FOUND:return I.NOT_FOUND;case We.ALREADY_EXISTS:return I.ALREADY_EXISTS;case We.PERMISSION_DENIED:return I.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case We.ABORTED:return I.ABORTED;case We.OUT_OF_RANGE:return I.OUT_OF_RANGE;case We.UNIMPLEMENTED:return I.UNIMPLEMENTED;case We.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(he=We||(We={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function QM(){return new TextEncoder}/**
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
 */const YM=new ni([4294967295,4294967295],0);function y_(t){const e=QM().encode(t),n=new Zx;return n.update(e),new Uint8Array(n.digest())}function v_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ni([n,r],0),new ni([s,i],0)]}class rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=ni.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(ni.fromNumber(r)));return s.compare(YM)===1&&(s=new ni([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=y_(e),[r,s]=v_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new rp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=y_(e),[r,s]=v_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ru{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(ee.min(),s,new De(ge),Xn(),le())}}class Ta{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,le(),le(),le())}}/**
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
 */class dl{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class iI{constructor(e,n){this.targetId=e,this.ge=n}}class oI{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class E_{constructor(){this.pe=0,this.ye=T_(),this.we=Et.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=le(),n=le(),r=le();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Ta(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=T_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class XM{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Xn(),this.Ke=w_(),this.$e=new De(ge)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.He(s)&&n(s)})}Ye(e){const n=e.targetId,r=e.ge.count,s=this.Ze(n);if(s){const i=s.target;if(dd(i))if(r===0){const o=new G(i.path);this.Ge(n,o,ft.newNoDocument(o,ee.min()))}else Pe(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),l=a?this.tt(a,e,o):1;if(l!==0){this.Je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,c)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=vs(r).toUint8Array()}catch(l){if(l instanceof xT)return ui("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new rp(o,s,i)}catch(l){return ui(l instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,i,null),s++)}),s}st(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Ze(o);if(a){if(i.current&&dd(a.target)){const l=new G(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,ft.newNoDocument(l,e))}i.Ce&&(n.set(o,i.Fe()),i.Me())}});let r=le();this.Ke.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ze(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new ru(e,n,this.$e,this.Qe,r);return this.Qe=Xn(),this.Ke=w_(),this.$e=new De(ge),s}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const s=this.je(e);this.ot(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new E_,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new lt(ge),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new E_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function w_(){return new De(G.comparator)}function T_(){return new De(G.comparator)}const JM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ZM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eL=(()=>({and:"AND",or:"OR"}))();class tL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function md(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nL(t,e){return sc(t,e.toTimestamp())}function On(t){return Pe(!!t),ee.fromTimestamp(function(n){const r=Pr(n);return new Ge(r.seconds,r.nanos)}(t))}function sp(t,e){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function lI(t){const e=Se.fromString(t);return Pe(dI(e)),e}function gd(t,e){return sp(t.databaseId,e.path)}function Ku(t,e){const n=lI(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(cI(n))}function _d(t,e){return sp(t.databaseId,e)}function rL(t){const e=lI(t);return e.length===4?Se.emptyPath():cI(e)}function yd(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cI(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function I_(t,e,n){return{name:gd(t,e),fields:n.value.mapValue.fields}}function sL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Pe(u===void 0||typeof u=="string"),Et.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),Et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:sI(c.code);return new B(u,c.message||"")}(o);n=new oI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ku(t,r.document.name),i=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):ee.min(),a=new kt({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new dl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ku(t,r.document),i=r.readTime?On(r.readTime):ee.min(),o=ft.newNoDocument(s,i),a=r.removedTargetIds||[];n=new dl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ku(t,r.document),i=r.removedTargetIds||[];n=new dl([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new zM(s,i),a=r.targetId;n=new iI(a,o)}}return n}function iL(t,e){let n;if(e instanceof wa)n={update:I_(t,e.key,e.value)};else if(e instanceof rI)n={delete:gd(t,e.key)};else if(e instanceof Lr)n={update:I_(t,e.key,e.data),updateMask:pL(e.fieldMask)};else{if(!(e instanceof qM))return X();n={verify:gd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof nc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function oL(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?On(s.updateTime):On(i);return o.isEqual(ee.min())&&(o=On(i)),new BM(o,s.transformResults||[])}(n,e))):[]}function aL(t,e){return{documents:[_d(t,e.path)]}}function lL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_d(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_d(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return hI(fn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Bs(h.field),direction:hL(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=md(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function cL(t){let e=rL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=uI(h);return d instanceof fn&&FT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new tc(js(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Jc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new ec(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new ec(p,d)}(n.endAt)),SM(e,s,o,i,a,"F",l,c)}function uL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=js(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=js(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return He.create(js(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>uI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function hL(t){return JM[t]}function dL(t){return ZM[t]}function fL(t){return eL[t]}function Bs(t){return{fieldPath:t.canonicalString()}}function js(t){return ot.fromServerFormat(t.fieldPath)}function hI(t){return t instanceof He?function(n){if(n.op==="=="){if(c_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NAN"}};if(l_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(c_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NAN"}};if(l_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(n.field),op:dL(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>hI(s));return r.length===1?r[0]:{compositeFilter:{op:fL(n.op),filters:r}}}(t):X()}function pL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=Et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mL{constructor(e){this.ct=e}}function gL(t){const e=cL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pd(e,e.limit,"L"):e}/**
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
 */class _L{constructor(){this._n=new yL}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Sr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class yL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new lt(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new lt(Se.comparator)).toArray()}}/**
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
 */class pi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new pi(0)}static Bn(){return new pi(-1)}}/**
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
 */class vL{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class EL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class wL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&go(r.mutation,s,Lt.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Xn();const o=mo(),a=function(){return mo()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Lr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),go(u.mutation,c,u.mutation.getFieldMask(),Ge.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new EL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=mo();let s=new De((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Lt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||le()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=GT();u.forEach(d=>{if(!i.has(d)){const p=tI(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Yr());let a=-1,l=i;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:zT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=Zi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zi();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,l=>{const c=function(h,d){return new Ea(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,ft.newInvalidDocument(u)))});let a=Zi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&go(u.mutation,c,Lt.empty(),Ge.now()),eu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class TL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:On(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:gL(s.bundledQuery),readTime:On(s.readTime)}}(n)),R.resolve()}}/**
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
 */class IL{constructor(){this.overlays=new De(G.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Yr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Yr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return R.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KM(n,r));let i=this.hr.get(n);i===void 0&&(i=le(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class ip{constructor(){this.Pr=new lt(Ye.Ir),this.Tr=new lt(Ye.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ye(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new Se([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new Se([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=le();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||ge(e.pr,n.pr)}static Er(e,n){return ge(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class bL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new lt(Ye.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HM(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new lt(ge);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new G(i),0);let a=new lt(ge);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ye(n,0),s=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RL{constructor(e){this.vr=e,this.docs=function(){return new De(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hM(uM(u),r)<=0||(s.has(u.key)||eu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AL(this)}getSize(e){return R.resolve(this.size)}}class AL extends vL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class CL{constructor(e){this.persistence=e,this.Mr=new Ci(n=>ep(n),tp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ip,this.targetCount=0,this.Br=pi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new pi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
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
 */class SL{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Yf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new CL(this),this.indexManager=new _L,this.remoteDocumentCache=function(s){return new RL(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new mL(n),this.$r=new TL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new bL(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new PL(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return R.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class PL extends fM{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.zr=new ip,this.jr=null}static Hr(e){return new op(e)}get Jr(){if(this.jr)return this.jr;throw X()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const s=G.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class ap{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ap(e,n.fromCache,r,s)}}/**
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
 */class kL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NL{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new kL;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Bi()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",$s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Bi()<=ae.DEBUG&&W("QueryEngine","Query:",$s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Bi()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",$s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):R.resolve())}ji(e,n){if(f_(n))return R.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pd(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,pd(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return f_(n)||s.isEqual(ee.min())?R.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?R.resolve(null):(Bi()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$s(n)),this.es(e,o,n,cM(s,-1)).next(a=>a))})}Zi(e,n){let r=new lt(HT(e));return n.forEach((s,i)=>{eu(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Bi()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",$s(n)),this.zi.getDocumentsMatchingQuery(e,n,Sr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class OL{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new De(ge),this.rs=new Ci(i=>ep(i),tp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function DL(t,e,n,r){return new OL(t,e,n,r)}async function fI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=le();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function xL(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=R.resolve();return d.forEach(g=>{p=p.next(()=>u.getEntry(l,g)).next(E=>{const v=c.docVersions.get(g);Pe(v!==null),E.version.compareTo(v)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function pI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function ML(t,e){const n=te(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Et.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,v,A){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let l=Xn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(LL(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ee.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function LL(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Xn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function VL(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function vd(t,e,n){const r=te(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!va(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function b_(t,e,n){const r=te(t);let s=ee.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=te(l),d=h.rs.get(u);return d!==void 0?R.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,Nn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:le())).next(a=>(UL(r,kM(e),a),{documents:a,hs:i})))}function UL(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class R_{constructor(){this.activeTargetIds=LM()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $L{constructor(){this.no=new R_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new R_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BL{io(e){}shutdown(){}}/**
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
 */class A_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qa=null;function zu(){return Qa===null?Qa=function(){return 268435456+Math.round(2147483648*Math.random())}():Qa++,"0x"+Qa.toString(16)}/**
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
 */const jL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class WL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const ct="WebChannelConnection";class qL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=zu(),l=this.bo(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ui("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=jL[n];return`${this.fo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=zu();return new Promise((o,a)=>{const l=new Jx;l.setWithCredentials(!0),l.listenOnce(Yx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hu.NO_ERROR:const u=l.getResponseJson();W(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Hu.TIMEOUT:W(ct,`RPC '${e}' ${i} timed out`),a(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case Hu.HTTP_ERROR:const h=l.getStatus();if(W(ct,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(p.status);a(new B(g,p.message))}else a(new B(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(ct,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);W(ct,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=zu(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gx(),a=Qx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");W(ct,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const g=new WL({lo:v=>{p?W(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(W(ct,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),W(ct,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},ho:()=>h.close()}),E=(v,A,D)=>{v.listen(A,k=>{try{D(k)}catch(K){setTimeout(()=>{throw K},0)}})};return E(h,Ka.EventType.OPEN,()=>{p||W(ct,`RPC '${e}' stream ${s} transport opened.`)}),E(h,Ka.EventType.CLOSE,()=>{p||(p=!0,W(ct,`RPC '${e}' stream ${s} transport closed`),g.Vo())}),E(h,Ka.EventType.ERROR,v=>{p||(p=!0,ui(ct,`RPC '${e}' stream ${s} transport errored:`,v),g.Vo(new B(I.UNAVAILABLE,"The operation could not be completed")))}),E(h,Ka.EventType.MESSAGE,v=>{var A;if(!p){const D=v.data[0];Pe(!!D);const k=D,K=k.error||((A=k[0])===null||A===void 0?void 0:A.error);if(K){W(ct,`RPC '${e}' stream ${s} received error:`,K);const U=K.status;let me=function(Be){const tt=We[Be];if(tt!==void 0)return sI(tt)}(U),xe=K.message;me===void 0&&(me=I.INTERNAL,xe="Unknown error status: "+U+" with message "+K.message),p=!0,g.Vo(new B(me,xe)),h.close()}else W(ct,`RPC '${e}' stream ${s} received:`,D),g.mo(D)}}),E(a,Xx.STAT_EVENT,v=>{v.stat===n_.PROXY?W(ct,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===n_.NOPROXY&&W(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function Gu(){return typeof document<"u"?document:null}/**
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
 */function su(t){return new tL(t,!0)}/**
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
 */class mI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class gI{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new mI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new B(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HL extends gI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=sL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?On(o.readTime):ee.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=yd(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=dd(l)?{documents:aL(i,l)}:{query:lL(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aI(i,o.resumeToken);const c=md(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=sc(i,o.snapshotVersion.toTimestamp());const c=md(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=uL(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=yd(this.serializer),n.removeTarget=e,this.t_(n)}}class KL extends gI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=oL(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.T_(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=yd(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iL(this.serializer,r))};this.t_(n)}}/**
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
 */class zL extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.So(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(I.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.A_=!0}}class GL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Yn(n),this.g_=!1):W("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class QL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Os(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.v_.add(4),await Ia(c),c.x_.set("Unknown"),c.v_.delete(4),await iu(c)}(this))})}),this.x_=new GL(r,s)}}async function iu(t){if(Os(t))for(const e of t.F_)await e(!0)}async function Ia(t){for(const e of t.F_)await e(!1)}function _I(t,e){const n=te(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),up(n)?cp(n):Si(n).Jo()&&lp(n,e))}function yI(t,e){const n=te(t),r=Si(n);n.C_.delete(e),r.Jo()&&vI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Os(n)&&n.x_.set("Unknown"))}function lp(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Si(t).c_(e)}function vI(t,e){t.O_.Ne(e),Si(t).l_(e)}function cp(t){t.O_=new XM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Si(t).start(),t.x_.p_()}function up(t){return Os(t)&&!Si(t).Ho()&&t.C_.size>0}function Os(t){return te(t).v_.size===0}function EI(t){t.O_=void 0}async function YL(t){t.C_.forEach((e,n)=>{lp(t,e)})}async function XL(t,e){EI(t),up(t)?(t.x_.S_(e),cp(t)):t.x_.set("Unknown")}async function JL(t,e,n){if(t.x_.set("Online"),e instanceof oI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof dl?t.O_.Ue(e):e instanceof iI?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(ee.min()))try{const r=await pI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Et.EMPTY_BYTE_STRING,u.snapshotVersion)),vI(i,l);const h=new mr(u.target,l,c,u.sequenceNumber);lp(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!va(e))throw e;t.v_.add(1),await Ia(t),t.x_.set("Offline"),n||(n=()=>pI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await iu(t)})}function wI(t,e){return e().catch(n=>ic(t,n,e))}async function ou(t){const e=te(t),n=kr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;ZL(e);)try{const s=await VL(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,eV(e,s)}catch(s){await ic(e,s)}TI(e)&&II(e)}function ZL(t){return Os(t)&&t.D_.length<10}function eV(t,e){t.D_.push(e);const n=kr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function TI(t){return Os(t)&&!kr(t).Ho()&&t.D_.length>0}function II(t){kr(t).start()}async function tV(t){kr(t).d_()}async function nV(t){const e=kr(t);for(const n of t.D_)e.I_(n.mutations)}async function rV(t,e,n){const r=t.D_.shift(),s=np.from(r,e,n);await wI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ou(t)}async function sV(t,e){e&&kr(t).P_&&await async function(r,s){if(function(o){return GM(o)&&o!==I.ABORTED}(s.code)){const i=r.D_.shift();kr(r).Zo(),await wI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ou(r)}}(t,e),TI(t)&&II(t)}async function C_(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Os(n);n.v_.add(3),await Ia(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await iu(n)}async function iV(t,e){const n=te(t);e?(n.v_.delete(2),await iu(n)):e||(n.v_.add(2),await Ia(n),n.x_.set("Unknown"))}function Si(t){return t.N_||(t.N_=function(n,r,s){const i=te(n);return i.R_(),new HL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:YL.bind(null,t),To:XL.bind(null,t),u_:JL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),up(t)?cp(t):t.x_.set("Unknown")):(await t.N_.stop(),EI(t))})),t.N_}function kr(t){return t.B_||(t.B_=function(n,r,s){const i=te(n);return i.R_(),new KL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:tV.bind(null,t),To:sV.bind(null,t),E_:nV.bind(null,t),T_:rV.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await ou(t)):(await t.B_.stop(),t.D_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class hp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new hp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dp(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),va(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ri{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Zi(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class S_{constructor(){this.L_=new De(G.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):X():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class oV{constructor(){this.q_=void 0,this.listeners=[]}}class aV{constructor(){this.queries=new Ci(e=>qT(e),Zc),this.onlineState="Unknown",this.Q_=new Set}}async function lV(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new oV),s)try{i.q_=await n.onListen(r)}catch(o){const a=dp(o,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.K_(n.onlineState),i.q_&&e.U_(i.q_)&&fp(n)}async function cV(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function uV(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.U_(s)&&(r=!0);o.q_=s}}r&&fp(n)}function hV(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function fp(t){t.Q_.forEach(e=>{e.next()})}class dV{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
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
 */class bI{constructor(e){this.key=e}}class RI{constructor(e){this.key=e}}class fV{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=le(),this.mutatedKeys=le(),this.aa=HT(e),this.ua=new ri(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new S_,s=n?n.ua:this.ua;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=eu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?g!==E&&(r.track({type:3,doc:p}),v=!0):this.Pa(d,p)||(r.track({type:2,doc:p}),v=!0,(l&&this.aa(p,l)>0||c&&this.aa(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ua:o,ha:r,Xi:a,mutatedKeys:i}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const i=e.ha.k_();i.sort((c,u)=>function(d,p){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return g(d)-g(p)}(c.type,u.type)||this.aa(c.doc,u.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,i.length!==0||l?{snapshot:new mi(this.query,e.ua,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new S_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=le(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new RI(r))}),this._a.forEach(r=>{e.has(r)||n.push(new bI(r))}),n}Aa(e){this.sa=e.hs,this._a=le();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return mi.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class pV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mV{constructor(e){this.key=e,this.Va=!1}}class gV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Ci(a=>qT(a),Zc),this.ga=new Map,this.pa=new Set,this.ya=new De(G.comparator),this.wa=new Map,this.Sa=new ip,this.ba={},this.Da=new Map,this.Ca=pi.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function _V(t,e){const n=CV(t);let r,s;const i=n.fa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ra();else{const o=await FL(n.localStore,Nn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await yV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&_I(n.remoteStore,o)}return s}async function yV(t,e,n,r,s){t.Fa=(h,d,p)=>async function(E,v,A,D){let k=v.view.la(A);k.Xi&&(k=await b_(E.localStore,v.query,!1).then(({documents:me})=>v.view.la(me,k)));const K=D&&D.targetChanges.get(v.targetId),U=v.view.applyChanges(k,E.isPrimaryClient,K);return k_(E,v.targetId,U.Ea),U.snapshot}(t,h,d,p);const i=await b_(t.localStore,e,!0),o=new fV(e,i.hs),a=o.la(i.documents),l=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);k_(t,n,c.Ea);const u=new pV(e,n,o);return t.fa.set(e,u),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),c.snapshot}async function vV(t,e){const n=te(t),r=n.fa.get(e),s=n.ga.get(r.targetId);if(s.length>1)return n.ga.set(r.targetId,s.filter(i=>!Zc(i,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),yI(n.remoteStore,r.targetId),Ed(n,r.targetId)}).catch(ya)):(Ed(n,r.targetId),await vd(n.localStore,r.targetId,!0))}async function EV(t,e,n){const r=SV(t);try{const s=await function(o,a){const l=te(o),c=Ge.now(),u=a.reduce((p,g)=>p.add(g.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Xn(),E=le();return l.os.getEntries(p,u).next(v=>{g=v,g.forEach((A,D)=>{D.isValidDocument()||(E=E.add(A))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,g)).next(v=>{h=v;const A=[];for(const D of a){const k=WM(D,h.get(D.key).overlayedDocument);k!=null&&A.push(new Lr(D.key,k,MT(k.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,A,a)}).next(v=>{d=v;const A=v.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(p,v.batchId,A)})}).then(()=>({batchId:d.batchId,changes:zT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.ba[o.currentUser.toKey()];c||(c=new De(ge)),c=c.insert(a,l),o.ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await ba(r,s.changes),await ou(r.remoteStore)}catch(s){const i=dp(s,"Failed to persist write");n.reject(i)}}async function AI(t,e){const n=te(t);try{const r=await ML(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.wa.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Va=!0:s.modifiedDocuments.size>0?Pe(o.Va):s.removedDocuments.size>0&&(Pe(o.Va),o.Va=!1))}),await ba(n,r,e)}catch(r){await ya(r)}}function P_(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.fa.forEach((i,o)=>{const a=o.view.K_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.K_(a)&&(c=!0)}),c&&fp(l)}(r.eventManager,e),s.length&&r.ma.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wV(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.wa.get(e),i=s&&s.key;if(i){let o=new De(G.comparator);o=o.insert(i,ft.newNoDocument(i,ee.min()));const a=le().add(i),l=new ru(ee.min(),new Map,new De(ge),o,a);await AI(r,l),r.ya=r.ya.remove(i),r.wa.delete(e),pp(r)}else await vd(r.localStore,e,!1).then(()=>Ed(r,e,n)).catch(ya)}async function TV(t,e){const n=te(t),r=e.batch.batchId;try{const s=await xL(n.localStore,e);SI(n,r,null),CI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,s)}catch(s){await ya(s)}}async function IV(t,e,n){const r=te(t);try{const s=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Pe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);SI(r,e,n),CI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,s)}catch(s){await ya(s)}}function CI(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function SI(t,e,n){const r=te(t);let s=r.ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ba[r.currentUser.toKey()]=s}}function Ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||PI(t,r)})}function PI(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(yI(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),pp(t))}function k_(t,e,n){for(const r of n)r instanceof bI?(t.Sa.addReference(r.key,e),bV(t,r)):r instanceof RI?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||PI(t,r.key)):X()}function bV(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.pa.add(r),pp(t))}function pp(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new G(Se.fromString(e)),r=t.Ca.next();t.wa.set(r,new mV(n)),t.ya=t.ya.insert(n,r),_I(t.remoteStore,new mr(Nn(jT(n.path)),r,"TargetPurposeLimboResolution",Yf.ae))}}async function ba(t,e,n){const r=te(t),s=[],i=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=ap.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ma.u_(s),await async function(l,c){const u=te(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(c,d=>R.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!va(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),g=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(g);u.ns=u.ns.insert(d,E)}}}(r.localStore,i))}async function RV(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await fI(n.localStore,e);n.currentUser=e,function(i,o){i.Da.forEach(a=>{a.forEach(l=>{l.reject(new B(I.CANCELLED,o))})}),i.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r.us)}}function AV(t,e){const n=te(t),r=n.wa.get(e);if(r&&r.Va)return le().add(r.key);{let s=le();const i=n.ga.get(e);if(!i)return s;for(const o of i){const a=n.fa.get(o);s=s.unionWith(a.view.ca)}return s}}function CV(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wV.bind(null,e),e.ma.u_=uV.bind(null,e.eventManager),e.ma.Ma=hV.bind(null,e.eventManager),e}function SV(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IV.bind(null,e),e}class N_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return DL(this.persistence,new NL,e.initialUser,this.serializer)}createPersistence(e){return new SL(op.Hr,this.serializer)}createSharedClientState(e){return new $L}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>P_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RV.bind(null,this.syncEngine),await iV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aV}()}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=function(i){return new qL(i)}(e.databaseInfo);return function(i,o,a,l){return new zL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new QL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>P_(this.syncEngine,n,0),function(){return A_.C()?new A_:new BL}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new gV(s,i,o,a,l,c);return u&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);W("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await Ia(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class kV{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class NV{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=OT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qu(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function O_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DV(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>C_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>C_(e.remoteStore,i)),t._onlineComponents=e}function OV(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!OV(n))throw n;ui("Error using user provided cache. Falling back to memory cache: "+n),await Qu(t,new N_)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Qu(t,new N_);return t._offlineComponents}async function kI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await O_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await O_(t,new PV))),t._onlineComponents}function xV(t){return kI(t).then(e=>e.syncEngine)}async function MV(t){const e=await kI(t),n=e.eventManager;return n.onListen=_V.bind(null,e.syncEngine),n.onUnlisten=vV.bind(null,e.syncEngine),n}function LV(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new kV({next:d=>{o.enqueueAndForget(()=>cV(i,h)),d.fromCache&&l.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new dV(a,u,{includeMetadataChanges:!0,Y_:!0});return lV(i,h)}(await MV(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function NI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const D_=new Map;/**
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
 */function OI(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VV(t,e,n,r){if(e===!0&&r===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x_(t){if(!G.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function M_(t){if(G.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=au(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class L_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eM;switch(r.type){case"firstParty":return new sM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=D_.get(n);r&&(W("ComponentProvider","Removing Datastore"),D_.delete(n),r.terminate())}(this),Promise.resolve()}}function FV(t,e,n,r={}){var s;const i=(t=Nr(t,lu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ut.MOCK_USER;else{a=Av(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(c)}t._authCredentials=new tM(new NT(a,l))}}/**
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
 */class Pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pi(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class wr extends Pi{constructor(e,n,r){super(e,n,jT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new G(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function cu(t,e,...n){if(t=$e(t),OI("collection","path",e),t instanceof lu){const r=Se.fromString(e,...n);return M_(r),new wr(t,null,r)}{if(!(t instanceof xt||t instanceof wr))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return M_(r),new wr(t.firestore,null,r)}}function mp(t,e,...n){if(t=$e(t),arguments.length===1&&(e=OT.V()),OI("doc","path",e),t instanceof lu){const r=Se.fromString(e,...n);return x_(r),new xt(t,null,new G(r))}{if(!(t instanceof xt||t instanceof wr))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return x_(r),new xt(t.firestore,t instanceof wr?t.converter:null,new G(r))}}/**
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
 */class UV{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new mI(this,"async_queue_retry"),this.su=()=>{const n=Gu();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Gu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=Gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new Er;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!va(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const s=hp.createAndSchedule(this,e,n,r,i=>this.uu(i));return this.eu.push(s),s}ou(){this.tu&&X()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class Ra extends lu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new UV}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xI(this),this._firestoreClient.terminate()}}function $V(t,e){const n=typeof t=="object"?t:Cc(),r=typeof t=="string"?t:e||"(default)",s=Ac(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Iv("firestore");i&&FV(s,...i)}return s}function DI(t){return t._firestoreClient||xI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xI(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new gM(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,NI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new NV(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gi(Et.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gi(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gp{constructor(e){this._methodName=e}}/**
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
 */class _p{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const BV=/^__.*__$/;class jV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class MI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function LI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class yp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Iu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new yp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Ru(e),s}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Iu(),s}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return oc(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(LI(this.Tu)&&BV.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class WV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}yu(e,n,r,s=!1){return new yp({Tu:e,methodName:n,pu:r,path:ot.emptyPath(),Au:!1,gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hu(t){const e=t._freezeSettings(),n=su(t._databaseId);return new WV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VI(t,e,n,r,s,i={}){const o=t.yu(i.merge||i.mergeFields?2:0,e,n,s);vp("Data must be an object, but it was:",o,r);const a=FI(r,o);let l,c;if(i.merge)l=new Lt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=wd(e,h,n);if(!o.contains(d))throw new B(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$I(u,d)||u.push(d)}l=new Lt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new jV(new kt(a),l,c)}class du extends gp{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.fu(`${this._methodName}() can only appear at the top level of your update data`):e.fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof du}}function qV(t,e,n,r){const s=t.yu(1,e,n);vp("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();Ns(r,(l,c)=>{const u=Ep(e,l,n);c=$e(c);const h=s.Vu(u);if(c instanceof du)i.push(u);else{const d=Aa(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Lt(i);return new MI(o,a,s.fieldTransforms)}function HV(t,e,n,r,s,i){const o=t.yu(1,e,n),a=[wd(e,r,n)],l=[s];if(i.length%2!=0)throw new B(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(wd(e,i[d])),l.push(i[d+1]);const c=[],u=kt.empty();for(let d=a.length-1;d>=0;--d)if(!$I(c,a[d])){const p=a[d];let g=l[d];g=$e(g);const E=o.Vu(p);if(g instanceof du)c.push(p);else{const v=Aa(g,E);v!=null&&(c.push(p),u.set(p,v))}}const h=new Lt(c);return new MI(u,h,o.fieldTransforms)}function KV(t,e,n,r=!1){return Aa(n,t.yu(r?4:3,e))}function Aa(t,e){if(UI(t=$e(t)))return vp("Unsupported field value:",e,t),FI(t,e);if(t instanceof gp)return function(r,s){if(!LI(s.Tu))throw s.fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Aa(a,s.mu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return VM(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:sc(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sc(s.serializer,i)}}if(r instanceof _p)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gi)return{bytesValue:aI(s.serializer,r._byteString)};if(r instanceof xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sp(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.fu(`Unsupported field value: ${au(r)}`)}(t,e)}function FI(t,e){const n={};return DT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ns(t,(r,s)=>{const i=Aa(s,e.du(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function UI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof _p||t instanceof gi||t instanceof xt||t instanceof gp)}function vp(t,e,n){if(!UI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=au(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function wd(t,e,n){if((e=$e(e))instanceof uu)return e._internalPath;if(typeof e=="string")return Ep(t,e);throw oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const zV=new RegExp("[~\\*/\\[\\]]");function Ep(t,e,n){if(e.search(zV)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uu(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(I.INVALID_ARGUMENT,a+t+l)}function $I(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class BI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GV extends BI{data(){return super.data()}}function jI(t,e){return typeof e=="string"?Ep(t,e):e instanceof uu?e._internalPath:e._delegate._internalPath}/**
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
 */function QV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wp{}class YV extends wp{}function XV(t,e,...n){let r=[];e instanceof wp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ip).length,a=i.filter(l=>l instanceof Tp).length;if(o>1||o>0&&a>0)throw new B(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Tp extends YV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tp(e,n,r)}_apply(e){const n=this._parse(e);return WI(e._query,n),new Pi(e.firestore,e.converter,fd(e._query,n))}_parse(e){const n=hu(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){F_(h,u);const p=[];for(const g of h)p.push(V_(l,i,g));d={arrayValue:{values:p}}}else d=V_(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||F_(h,u),d=KV(a,o,h,u==="in"||u==="not-in");return He.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ip extends wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ip(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)WI(o,l),o=fd(o,l)}(e._query,n),new Pi(e.firestore,e.converter,fd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function V_(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new B(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!WT(e)&&n.indexOf("/")!==-1)throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!G.isDocumentKey(r))throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return a_(t,new G(r))}if(n instanceof xt)return a_(t,n._key);throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${au(n)}.`)}function F_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function WI(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JV{convertValue(e,n="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ns(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new _p(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Pe(dI(r));const s=new Ho(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function qI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ya{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZV extends BI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fl extends ZV{data(e={}){return super.data(e)}}class eF{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ya(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fl(this._firestore,this._userDataWriter,r.key,r,new Ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new fl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ya(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new fl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ya(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:tF(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class nF extends JV{constructor(e){super(),this.firestore=e}convertBytes(e){return new gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function rF(t){t=Nr(t,Pi);const e=Nr(t.firestore,Ra),n=DI(e),r=new nF(e);return QV(t._query),LV(n,t._query).then(s=>new eF(e,r,t,s))}function sF(t,e,n){t=Nr(t,xt);const r=Nr(t.firestore,Ra),s=qI(t.converter,e,n);return bp(r,[VI(hu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function HI(t,e,n,...r){t=Nr(t,xt);const s=Nr(t.firestore,Ra),i=hu(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof uu?HV(i,"updateDoc",t._key,e,n,r):qV(i,"updateDoc",t._key,e),bp(s,[o.toMutation(t._key,ln.exists(!0))])}function KI(t,e){const n=Nr(t.firestore,Ra),r=mp(t),s=qI(t.converter,e);return bp(n,[VI(hu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function bp(t,e){return function(r,s){const i=new Er;return r.asyncQueue.enqueueAndForget(async()=>EV(await xV(r),s,i)),i.promise}(DI(t),e)}(function(e,n=!0){(function(s){Ai=s})(Dr),xn(new cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ra(new nM(r.getProvider("auth-internal")),new oM(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ft(r_,"4.3.0",e),Ft(r_,"4.3.0","esm2017")})();/**
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
 */const zI="firebasestorage.googleapis.com",GI="storageBucket",iF=2*60*1e3,oF=10*60*1e3;/**
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
 */class Ue extends Ln{constructor(e,n,r=0){super(Yu(e),`Firebase Storage: ${n} (${Yu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Yu(t){return"storage/"+t}function Rp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,t)}function aF(t){return new Ue(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function lF(t){return new Ue(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Fe.UNAUTHENTICATED,t)}function uF(){return new Ue(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hF(t){return new Ue(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function dF(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fF(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function pF(t){return new Ue(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function mF(t){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gF(){return new Ue(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+GI+"' property when initializing the app?")}function _F(){return new Ue(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yF(){return new Ue(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vF(t){return new Ue(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Td(t){return new Ue(Fe.INVALID_ARGUMENT,t)}function QI(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function EF(t){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _o(t,e){return new Ue(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ji(t){throw new Ue(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Vt.makeFromUrl(e,n)}catch{return new Vt(e,"")}if(r.path==="")return r;throw mF(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(K){K.path_=decodeURIComponent(K.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},E=n===zI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${E}/${s}/${v}`,"i"),k=[{regex:a,indices:l,postModify:i},{regex:p,indices:g,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let K=0;K<k.length;K++){const U=k[K],me=U.regex.exec(e);if(me){const xe=me[U.indices.bucket];let et=me[U.indices.path];et||(et=""),r=new Vt(xe,et),U.postModify(r);break}}if(r==null)throw pF(e);return r}}class wF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function TF(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(p,l())},v)}function d(){i&&clearTimeout(i)}function p(v,...A){if(c){d();return}if(v){d(),u.call(null,v,...A);return}if(l()||o){d(),u.call(null,v,...A);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let g=!1;function E(v){g||(g=!0,d(),!c&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function IF(t){t(!1)}/**
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
 */function bF(t){return t!==void 0}function RF(t){return typeof t=="object"&&!Array.isArray(t)}function Ap(t){return typeof t=="string"||t instanceof String}function U_(t){return Cp()&&t instanceof Blob}function Cp(){return typeof Blob<"u"&&!sS()}function $_(t,e,n,r){if(r<e)throw Td(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Td(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Sp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function YI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var as;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(as||(as={}));/**
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
 */function AF(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class CF{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Xa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===as.NO_ERROR,l=i.getStatus();if(!a||AF(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===as.ABORT;r(!1,new Xa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Xa(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());bF(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Rp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?QI():fF();o(l)}else{const l=dF();o(l)}};this.canceled_?n(!1,new Xa(!1,null,!0)):this.backoffId_=TF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function SF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function NF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function OF(t,e,n,r,s,i,o=!0){const a=YI(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return kF(c,e),SF(c,n),PF(c,i),NF(c,r),new CF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function DF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xF(...t){const e=DF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cp())return new Blob(t);throw new Ue(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function LF(t){if(typeof atob>"u")throw vF("base-64");return atob(t)}/**
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
 */const An={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xu{constructor(e,n){this.data=e,this.contentType=n||null}}function VF(t,e){switch(t){case An.RAW:return new Xu(XI(e));case An.BASE64:case An.BASE64URL:return new Xu(JI(t,e));case An.DATA_URL:return new Xu(UF(e),$F(e))}throw Rp()}function XI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function FF(t){let e;try{e=decodeURIComponent(t)}catch{throw _o(An.DATA_URL,"Malformed data URL.")}return XI(e)}function JI(t,e){switch(t){case An.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw _o(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case An.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw _o(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=LF(e)}catch(s){throw s.message.includes("polyfill")?s:_o(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ZI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _o(An.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=BF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function UF(t){const e=new ZI(t);return e.base64?JI(An.BASE64,e.rest):FF(e.rest)}function $F(t){return new ZI(t).contentType}function BF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class pr{constructor(e,n){let r=0,s="";U_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(U_(this.data_)){const r=this.data_,s=MF(r,e,n);return s===null?null:new pr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pr(r,!0)}}static getBlob(...e){if(Cp()){const n=e.map(r=>r instanceof pr?r.data_:r);return new pr(xF.apply(null,n))}else{const n=e.map(o=>Ap(o)?VF(An.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new pr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function eb(t){let e;try{e=JSON.parse(t)}catch{return null}return RF(e)?e:null}/**
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
 */function jF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function tb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function qF(t,e){return e}class Tt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||qF}}let Ja=null;function HF(t){return!Ap(t)||t.length<2?t:tb(t)}function nb(){if(Ja)return Ja;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return HF(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Tt("size");return s.xform=r,t.push(s),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),Ja=t,Ja}function KF(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Vt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function zF(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return KF(r,t),r}function rb(t,e,n){const r=eb(e);return r===null?null:zF(t,r,n)}function GF(t,e,n,r){const s=eb(e);if(s===null||!Ap(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Sp(d,n,r),g=YI({alt:"media",token:c});return p+g})[0]}function QF(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class sb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ib(t){if(!t)throw Rp()}function YF(t,e){function n(r,s){const i=rb(t,s,e);return ib(i!==null),i}return n}function XF(t,e){function n(r,s){const i=rb(t,s,e);return ib(i!==null),GF(i,s,t.host,t._protocol)}return n}function ob(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=uF():s=cF():n.getStatus()===402?s=lF(t.bucket):n.getStatus()===403?s=hF(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function JF(t){const e=ob(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aF(t.path)),i.serverResponse=s.serverResponse,i}return n}function ZF(t,e,n){const r=e.fullServerUrl(),s=Sp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new sb(s,i,XF(t,n),o);return a.errorHandler=JF(e),a}function eU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function tU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eU(null,e)),r}function nU(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let K=0;K<2;K++)k=k+Math.random().toString().slice(2);return k}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=tU(e,r,s),u=QF(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=pr.getBlob(h,r,d);if(p===null)throw _F();const g={name:c.fullPath},E=Sp(i,t.host,t._protocol),v="POST",A=t.maxUploadRetryTime,D=new sb(E,v,YF(t,n),A);return D.urlParams=g,D.headers=o,D.body=p.uploadData(),D.errorHandler=ob(e),D}class rU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=as.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=as.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=as.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ji("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ji("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ji("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ji("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ji("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sU extends rU{initXhr(){this.xhr_.responseType="text"}}function ab(){return new sU}/**
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
 */class ws{constructor(e,n){this._service=e,n instanceof Vt?this._location=n:this._location=Vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ws(e,n)}get root(){const e=new Vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tb(this._location.path)}get storage(){return this._service}get parent(){const e=jF(this._location.path);if(e===null)return null;const n=new Vt(this._location.bucket,e);return new ws(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw EF(e)}}function iU(t,e,n){t._throwIfRoot("uploadBytes");const r=nU(t.storage,t._location,nb(),new pr(e,!0),n);return t.storage.makeRequestWithTokens(r,ab).then(s=>({metadata:s,ref:t}))}function oU(t){t._throwIfRoot("getDownloadURL");const e=ZF(t.storage,t._location,nb());return t.storage.makeRequestWithTokens(e,ab).then(n=>{if(n===null)throw yF();return n})}function aU(t,e){const n=WF(t._location.path,e),r=new Vt(t._location.bucket,n);return new ws(t.storage,r)}/**
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
 */function lU(t){return/^[A-Za-z]+:\/\//.test(t)}function cU(t,e){return new ws(t,e)}function lb(t,e){if(t instanceof Pp){const n=t;if(n._bucket==null)throw gF();const r=new ws(n,n._bucket);return e!=null?lb(r,e):r}else return e!==void 0?aU(t,e):t}function uU(t,e){if(e&&lU(e)){if(t instanceof Pp)return cU(t,e);throw Td("To use ref(service, url), the first argument must be a Storage instance.")}else return lb(t,e)}function B_(t,e){const n=e==null?void 0:e[GI];return n==null?null:Vt.makeFromBucketSpec(n,t)}function hU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Av(s,t.app.options.projectId))}class Pp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=zI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iF,this._maxUploadRetryTime=oF,this._requests=new Set,s!=null?this._bucket=Vt.makeFromBucketSpec(s,this._host):this._bucket=B_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Vt.makeFromBucketSpec(this._url,e):this._bucket=B_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ws(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new wF(QI());{const o=OF(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const j_="@firebase/storage",W_="0.11.2";/**
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
 */const cb="storage";function ub(t,e,n){return t=$e(t),iU(t,e,n)}function hb(t){return t=$e(t),oU(t)}function db(t,e){return t=$e(t),uU(t,e)}function fb(t=Cc(),e){t=$e(t);const r=Ac(t,cb).getImmediate({identifier:e}),s=Iv("storage");return s&&dU(r,...s),r}function dU(t,e,n,r={}){hU(t,e,n,r)}function fU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Pp(n,r,s,e,Dr)}function pU(){xn(new cn(cb,fU,"PUBLIC").setMultipleInstances(!0)),Ft(j_,W_,""),Ft(j_,W_,"esm2017")}pU();function mU(t){return(e,n)=>{const r=oO(e,n).run(()=>py(t));aO.set(e,r),cO(r,e)}}function gU(t,{firebaseApp:e,modules:n=[]}){t.provide(_E,e);for(const r of n)r(e,t)}const Vr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},_U={data(){return{user:null}},watch:{$route(t,e){this.user=localStorage.getItem("userCredential")}},created(){this.user=localStorage.getItem("userCredential")}},yU={class:"container-fluid"},vU=O("a",{class:"navbar-brand",href:"#"},"Freehua",-1),EU=O("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[O("span",{class:"navbar-toggler-icon"})],-1),wU={class:"collapse navbar-collapse",id:"navbarNav"},TU=OA('<ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Início</a></li><li class="nav-item"><a class="nav-link" href="#">Aplicativo</a></li><li class="nav-item"><a class="nav-link" href="#">Sobre</a></li></ul>',1),IU={class:"container d-flex justify-content-end"},bU={key:0},RU=O("button",{type:"button",class:"btn btn-secondary ms-auto"}," Painel ",-1),AU={key:1},CU=O("button",{type:"button",class:"btn btn-primary ms-auto"}," Entrar ",-1);function SU(t,e,n,r,s,i){const o=bs("router-link");return Ot(),Dt("nav",{class:"kukas navbar navbar-expand-sm bg-body-tertiary fixed-top",key:s.user},[O("div",yU,[Oe(o,{to:"/"},{default:sn(()=>[vU]),_:1}),EU,O("div",wU,[TU,O("div",IU,[s.user?(Ot(),Dt("div",bU,[Oe(o,{to:"/dashboard"},{default:sn(()=>[RU]),_:1})])):(Ot(),Dt("div",AU,[Oe(o,{to:"/login"},{default:sn(()=>[CU]),_:1})]))])])])])}const PU=Vr(_U,[["render",SU],["__file","/home/gabriel/freehua-web/src/components/Navbar.vue"]]),kU={__name:"App",setup(t){return(e,n)=>{const r=bs("router-view");return Ot(),Dt(Pt,null,[Oe(PU),Oe(r)],64)}}},NU=Vr(kU,[["__file","/home/gabriel/freehua-web/src/App.vue"]]),OU={apiKey:"AIzaSyDZe5Afwd4IF8O0sjGx8UBlJprasm20-Qk",authDomain:"freehua-db.firebaseapp.com",projectId:"freehua-db",storageBucket:"freehua-db.appspot.com",messagingSenderId:"912869104324",appId:"1:912869104324:web:867e8d751670c004fb0791",measurementId:"G-S0D7E23XXE"},pb=Dv(OU),Qo=$V(pb),DU={data(){return{lastChapters:[]}},methods:{logoff(){localStorage.removeItem("userCredential")}}},xU={class:"container"},MU={class:"list-group"},LU=["value"],VU={class:"mt-4"},FU=O("button",{type:"button",class:"btn btn-lg btn-primary"},"Novo livro",-1),UU=O("button",{type:"button",class:"btn btn-lg btn-primary ms-4"}," Novo capitulo ",-1);function $U(t,e,n,r,s,i){const o=bs("router-link");return Ot(),Dt(Pt,null,[O("div",xU,[O("ul",MU,[(Ot(!0),Dt(Pt,null,Ly(s.lastChapters,a=>(Ot(),Dt("li",{class:"list-group-item",key:a.parent,value:a.parent},Ju(a.parent)+" em "+Ju(a.release),9,LU))),128))])]),O("div",VU,[Oe(o,{to:"/upload"},{default:sn(()=>[FU]),_:1}),Oe(o,{to:"/update"},{default:sn(()=>[UU]),_:1}),Oe(o,{to:"/login"},{default:sn(()=>[O("button",{onClick:e[0]||(e[0]=(...a)=>i.logoff&&i.logoff(...a)),type:"button",class:"btn btn-danger ms-4"}," Sair ")]),_:1})])],64)}const BU=Vr(DU,[["render",$U],["__file","/home/gabriel/freehua-web/src/pages/Dashboard.vue"]]),jU={};function WU(t,e){return Ot(),Dt("h1",null,"casa")}const qU=Vr(jU,[["render",WU],["__file","/home/gabriel/freehua-web/src/pages/Home.vue"]]),mb=pE(),HU=(t,e)=>Ek(mb,t,e).then(n=>(localStorage.userCredential=JSON.stringify(n.user),n.user)).catch(n=>(alert(n.message),null)),KU=async(t,e,n)=>{try{const s=(await vk(mb,t,e)).user;if(await zU(s.uid,n))return alert("Perfil criado com sucesso"),s}catch(r){return alert(r.message),null}},zU=async(t,e)=>{try{return await sF(mp(cu(Qo,"users"),t),{user_name:e,user_likes:{},user_karma:0,user_status:"",user_history:{},user_picture:"https://firebasestorage.googleapis.com/v0/b/freehua-db.appspot.com/o/cabalo.jpg?alt=media&token=b2cb42c7-5270-4c16-b44d-779ac4b5277e"}),!0}catch(n){return console.error("Erro ao armazenar o usuário no Firestore:",n),!1}},GU={data(){return{email:"",password:""}},methods:{async submit(){await HU(this.email,this.password)&&this.$router.push("/dashboard")}}},QU={class:"container-fluid border rounded border-secondary p-4"},YU=O("h2",null,"Login",-1),XU={class:"form-group my-4"},JU={class:"form-group my-4"},ZU={class:"container-fluid"},e2=O("button",{type:"submit",class:"btn btn-primary btn-lg mx-2"}," Registrar ",-1);function t2(t,e,n,r,s,i){const o=bs("router-link");return Ot(),Dt("div",QU,[O("form",null,[YU,O("div",XU,[Ht(O("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a),placeholder:"Email"},null,512),[[Bn,s.email]])]),O("div",JU,[Ht(O("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),placeholder:"Senha"},null,512),[[Bn,s.password]])]),O("div",ZU,[O("button",{type:"submit",class:"btn btn-primary btn-lg",onClick:e[2]||(e[2]=wc((...a)=>i.submit&&i.submit(...a),["prevent"]))}," Logar "),Oe(o,{to:"/register"},{default:sn(()=>[e2]),_:1})])])])}const n2=Vr(GU,[["render",t2],["__file","/home/gabriel/freehua-web/src/pages/Login.vue"]]),r2={data(){return{username:"",email:"",password:"",confirmation:""}},methods:{async submit(){if(this.confirmation!==this.password)return alert("Senhas não condizem"),null;if(this.email==""|this.password==""|this.username=="")return alert("Preencha tudo"),null;try{await KU(this.email,this.password,this.username)&&this.$router.push("/login")}catch(t){console.log(t)}}}},s2={class:"container-fluid border rounded border-secondary p-4"},i2=O("h2",null,"Cadastro",-1),o2={class:"form-group my-4"},a2={class:"form-group my-4"},l2={class:"form-group my-4"},c2={class:"form-group my-4"},u2={class:"container-fluid"},h2=O("button",{type:"submit",class:"btn btn-secondary btn-md ms-4"}," Voltar ",-1);function d2(t,e,n,r,s,i){const o=bs("router-link");return Ot(),Dt("div",s2,[O("form",null,[i2,O("div",o2,[Ht(O("input",{type:"text",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a),placeholder:"Nome de usuário"},null,512),[[Bn,s.username]])]),O("div",a2,[Ht(O("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=a=>s.email=a),placeholder:"Email"},null,512),[[Bn,s.email]])]),O("div",l2,[Ht(O("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[2]||(e[2]=a=>s.password=a),placeholder:"Senha"},null,512),[[Bn,s.password]])]),O("div",c2,[Ht(O("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>s.confirmation=a),type:"password",class:"form-control form-control-lg",placeholder:"Confirme senha"},null,512),[[Bn,s.confirmation]])]),O("div",u2,[O("button",{onClick:e[4]||(e[4]=wc((...a)=>i.submit&&i.submit(...a),["prevent"])),type:"submit",class:"btn btn-primary btn-lg"}," Simbora! "),Oe(o,{to:"/login"},{default:sn(()=>[h2]),_:1})])])])}const f2=Vr(r2,[["render",d2],["__file","/home/gabriel/freehua-web/src/pages/Register.vue"]]);async function p2(t){if(t.type===""||t.title===""||t.genre===""||t.summary===""||t.author===""||t.cover===null)return alert("Preencha tudo"),null;try{const e=await KI(cu(Qo,"books"),{book_author:t.author,book_summary:t.summary,book_tags:t.genre,book_title:t.title,book_type:t.type,book_score:0}),n=fb(),r=db(n,`covers/${e.id}`),s=await ub(r,t.cover),o={cover_url:await hb(r)},a=await HI(e,o);return alert(t.title+" foi criado com sucesso."),!0}catch(e){alert(e)}}const m2={class:"container pt-5"},g2={class:"row"},_2={class:"col-md-6"},y2={ref:"form"},v2={class:"form-group mb-4"},E2=O("label",{class:"mb-2"},"Nome da obra",-1),w2={class:"form-group mb-4"},T2=O("label",{class:"mb-2"},"Tipo do livro",-1),I2=O("option",{value:"manhua"},"Manhuá (China)",-1),b2=O("option",{value:"manhwa"},"Manhwa (Coréia)",-1),R2=[I2,b2],A2={class:"col-md-6"},C2={class:"form-group mb-4"},S2=O("label",{class:"mb-2"},"Gênero",-1),P2=O("option",{value:"adventure"},"Aventura",-1),k2=O("option",{value:"romance"},"Romance",-1),N2=O("option",{value:"xianxia"},"Cultivo (Xianxia)",-1),O2=[P2,k2,N2],D2={class:"form-group"},x2=O("label",{class:"mb-2"},"Autor(a)",-1),M2={class:"row"},L2={class:"col-md-12 mt-3"},V2={class:"form-group mb-4"},F2=O("label",{class:"mb-2"},"Sumário",-1),U2={class:"form-group mb-4"},$2=O("label",{class:"mb-2"},"Imagem da Capa",-1),B2=O("button",{class:"btn btn-secondary ms-4"},"Voltar",-1),j2={data(){return{book:{genre:"",summary:"",author:"",title:"",type:"",cover:null}}},methods:{handleCoverChange(t){this.book.cover=t.target.files[0]},submit(){try{p2(this.book),this.$refs.form.reset()}catch(t){alert(t)}}}},W2=Object.assign(j2,{__name:"Upload",setup(t){return(e,n)=>{const r=bs("router-link");return Ot(),Dt("div",m2,[O("div",g2,[O("div",_2,[O("form",y2,[O("div",v2,[E2,Ht(O("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.book.title=s),type:"text",class:"form-control",placeholder:"Solo Leveling"},null,512),[[Bn,e.book.title]])]),O("div",w2,[T2,Ht(O("select",{"onUpdate:modelValue":n[1]||(n[1]=s=>e.book.type=s),class:"form-control"},R2,512),[[vh,e.book.type]])])],512)]),O("div",A2,[O("form",null,[O("div",C2,[S2,Ht(O("select",{"onUpdate:modelValue":n[2]||(n[2]=s=>e.book.genre=s),class:"form-control"},O2,512),[[vh,e.book.genre]])]),O("div",D2,[x2,Ht(O("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>e.book.author=s),type:"text",class:"form-control",placeholder:"Hwonbu"},null,512),[[Bn,e.book.author]])])])])]),O("div",M2,[O("div",L2,[O("div",V2,[F2,Ht(O("textarea",{"onUpdate:modelValue":n[4]||(n[4]=s=>e.book.summary=s),class:"form-control",cols:"30",rows:"4",placeholder:"Em um colégio técnico, jovens alunos da ETEC Taboão da Serra descobrem poderes extraordinários que transformam o simples arroz doce da merenda em elaboradas obras de arte com classificação máxima."},null,512),[[Bn,e.book.summary]])]),O("div",U2,[$2,O("input",{class:"form-control",type:"file",onChange:n[5]||(n[5]=(...s)=>e.handleCoverChange&&e.handleCoverChange(...s)),accept:".jpg,.jpeg"},null,32)]),O("button",{onClick:n[6]||(n[6]=wc((...s)=>e.submit&&e.submit(...s),["prevent"])),type:"submit",class:"btn btn-primary btn-lg"}," Criar livro "),Oe(r,{to:"/dashboard"},{default:sn(()=>[B2]),_:1})])])])}}}),q2=Vr(W2,[["__file","/home/gabriel/freehua-web/src/pages/Upload.vue"]]);async function H2(){const t=[],e=XV(cu(Qo,"books"));try{return(await rF(e)).forEach(r=>{const s={id:r.id,title:r.data().book_title};t.push(s)}),t}catch{return!1}}async function K2(t){const n=JSON.parse(localStorage.getItem("userCredential")).uid.toString();if(t.parent===null||t.file===null)return alert("Insira tudo"),null;try{const r=await KI(cu(Qo,`books/${t.parent}/chapters`),{chapter_parent:mp(Qo,`books/${t.parent}`),chapter_title:t.title,chapter_poster:n,chapter_release:new Date,chapter_content:""}),s=fb(),i=db(s,`releases/${r.id}`),o=await ub(i,t.file),a=await hb(i);return await HI(r,{chapter_content:a}),alert("Capítulo criado com sucesso"),!0}catch(r){alert(r)}}const z2={class:"container pt-5"},G2={class:"mb-3"},Q2=O("label",{for:"bookSelector",class:"form-label"},"Livro selecionado",-1),Y2=O("option",{value:"",disabled:""}," Selecione o livro ao qual pertence o capítulo ",-1),X2=["value"],J2={class:"mb-4"},Z2=O("label",{for:"bookCover",class:"form-label"},"PDF do capítulo",-1),e$=O("button",{type:"submit",class:"btn btn-primary btn-lg"}," Adicionar capítulo ",-1),t$=O("button",{class:"btn btn-secondary ms-4"},"Voltar",-1),n$={data(){return{library:[],chapter:{parent:null,file:null,title:""}}},created(){H2().then(t=>{this.library=t,console.log(this.library)}).catch(t=>{console.error(t)})},methods:{handleChapterChange(t){this.chapter.file=t.target.files[0]},submit(){try{K2(this.chapter),this.$refs.form.reset()}catch(t){alert(t)}}}},r$=Object.assign(n$,{__name:"Update",setup(t){return(e,n)=>{const r=bs("router-link");return Ot(),Dt("div",z2,[O("form",{ref:"form",onSubmit:n[2]||(n[2]=wc((...s)=>e.submit&&e.submit(...s),["prevent"]))},[O("div",G2,[Q2,Ht(O("select",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.chapter.parent=s),class:"form-select",id:"bookSelector"},[Y2,(Ot(!0),Dt(Pt,null,Ly(e.library,s=>(Ot(),Dt("option",{key:s.id,value:s.id},Ju(s.title),9,X2))),128))],512),[[vh,e.chapter.parent]])]),O("div",J2,[Z2,O("input",{type:"file",class:"form-control",onChange:n[1]||(n[1]=(...s)=>e.handleChapterChange&&e.handleChapterChange(...s)),accept:".pdf"},null,32)]),e$,Oe(r,{to:"/dashboard"},{default:sn(()=>[t$]),_:1})],544)])}}}),s$=Vr(r$,[["__file","/home/gabriel/freehua-web/src/pages/Update.vue"]]),gb=GC({history:z0(),routes:[{path:"/login",name:"Login",component:n2},{path:"/",name:"Home",component:qU},{path:"/register",name:"Register",component:f2},{path:"/dashboard",name:"Dashboard",component:BU,meta:{requiresAuth:!0}},{path:"/upload",name:"Upload",component:q2,meta:{requiresAuth:!0}},{path:"/update",name:"Update",component:s$,meta:{requiresAuth:!0}}]});gb.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=localStorage.getItem("userCredential");r&&!s?n("/"):n()});y0(NU).use(gb).use(gU,{firebaseApp:pb,modules:[mU()]}).mount("#app");
