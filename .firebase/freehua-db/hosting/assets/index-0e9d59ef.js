(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Dr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Te=Object.freeze({}),zs=Object.freeze([]),xt=()=>{},z_=()=>!1,vb=/^on[^a-z]/,Yo=t=>vb.test(t),gl=t=>t.startsWith("onUpdate:"),Me=Object.assign,Rd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Eb=Object.prototype.hasOwnProperty,ie=(t,e)=>Eb.call(t,e),H=Array.isArray,ts=t=>Xo(t)==="[object Map]",lc=t=>Xo(t)==="[object Set]",Lp=t=>Xo(t)==="[object Date]",Y=t=>typeof t=="function",Le=t=>typeof t=="string",yo=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Ad=t=>(_e(t)||Y(t))&&Y(t.then)&&Y(t.catch),G_=Object.prototype.toString,Xo=t=>G_.call(t),Cd=t=>Xo(t).slice(8,-1),Q_=t=>Xo(t)==="[object Object]",Sd=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,el=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wb=Dr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),cc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tb=/-(\w)/g,Mn=cc(t=>t.replace(Tb,(e,n)=>n?n.toUpperCase():"")),Ib=/\B([A-Z])/g,Ir=cc(t=>t.replace(Ib,"-$1").toLowerCase()),ds=cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hr=cc(t=>t?`on${ds(t)}`:""),fs=(t,e)=>!Object.is(t,e),Fs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_l=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},yl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vp;const vl=()=>Vp||(Vp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pd(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Cb(r):Pd(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||_e(t))return t}const bb=/;(?![^(]*\))/g,Rb=/:([^]+)/,Ab=/\/\*[^]*?\*\//g;function Cb(t){const e={};return t.replace(Ab,"").split(bb).forEach(n=>{if(n){const r=n.split(Rb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function kd(t){let e="";if(Le(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=kd(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sb="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Pb="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",kb=Dr(Sb),Nb=Dr(Pb),Ob="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Db=Dr(Ob);function Y_(t){return!!t||t===""}function xb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=uc(t[r],e[r]);return n}function uc(t,e){if(t===e)return!0;let n=Lp(t),r=Lp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=yo(t),r=yo(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?xb(t,e):!1;if(n=_e(t),r=_e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!uc(t[o],e[o]))return!1}}return String(t)===String(e)}function Mb(t,e){return t.findIndex(n=>uc(n,e))}const eh=t=>Le(t)?t:t==null?"":H(t)||_e(t)&&(t.toString===G_||!Y(t.toString))?JSON.stringify(t,X_,2):String(t),X_=(t,e)=>e&&e.__v_isRef?X_(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:lc(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!H(e)&&!Q_(e)?String(e):e;function th(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Jt;class J_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}else th("cannot run an inactive effect scope.")}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lb(t){return new J_(t)}function Vb(t,e=Jt){e&&e.active&&e.effects.push(t)}function Fb(){return Jt}const Nd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Z_=t=>(t.w&br)>0,ey=t=>(t.n&br)>0,Ub=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=br},$b=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Z_(s)&&!ey(s)?s.delete(t):e[n++]=s,s.w&=~br,s.n&=~br}e.length=n}},nh=new WeakMap;let qi=0,br=1;const rh=30;let At;const ns=Symbol("iterate"),sh=Symbol("Map key iterate");class Od{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vb(this,r)}run(){if(!this.active)return this.fn();let e=At,n=_r;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,_r=!0,br=1<<++qi,qi<=rh?Ub(this):Fp(this),this.fn()}finally{qi<=rh&&$b(this),br=1<<--qi,At=this.parent,_r=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(Fp(this),this.onStop&&this.onStop(),this.active=!1)}}function Fp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _r=!0;const ty=[];function As(){ty.push(_r),_r=!1}function Cs(){const t=ty.pop();_r=t===void 0?!0:t}function Et(t,e,n){if(_r&&At){let r=nh.get(t);r||nh.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Nd()),ny(s,{effect:At,target:t,type:e,key:n})}}function ny(t,e){let n=!1;qi<=rh?ey(t)||(t.n|=br,n=!Z_(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t),At.onTrack&&At.onTrack(Me({effect:At},e)))}function Pn(t,e,n,r,s,i){const o=nh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((u,h)=>{(h==="length"||h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?Sd(n)&&a.push(o.get("length")):(a.push(o.get(ns)),ts(t)&&a.push(o.get(sh)));break;case"delete":H(t)||(a.push(o.get(ns)),ts(t)&&a.push(o.get(sh)));break;case"set":ts(t)&&a.push(o.get(ns));break}const l={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&ih(a[0],l);else{const c=[];for(const u of a)u&&c.push(...u);ih(Nd(c),l)}}function ih(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&Up(r,e);for(const r of n)r.computed||Up(r,e)}function Up(t,e){(t!==At||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(Me({effect:t},e)),t.scheduler?t.scheduler():t.run())}const Bb=Dr("__proto__,__v_isRef,__isVue"),ry=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yo)),$p=jb();function jb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ne(this);for(let i=0,o=this.length;i<o;i++)Et(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ne)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){As();const r=ne(this)[e].apply(this,n);return Cs(),r}}),t}function Wb(t){const e=ne(this);return Et(e,"has",t),e.hasOwnProperty(t)}class sy{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?hy:uy:i?cy:ly).get(e))return e;const o=H(e);if(!s){if(o&&ie($p,n))return Reflect.get($p,n,r);if(n==="hasOwnProperty")return Wb}const a=Reflect.get(e,n,r);return(yo(n)?ry.has(n):Bb(n))||(s||Et(e,"get",n),i)?a:ze(a)?o&&Sd(n)?a:a.value:_e(a)?s?fy(a):fc(a):a}}class iy extends sy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Rr(i)&&ze(i)&&!ze(r))return!1;if(!this._shallow&&(!El(r)&&!Rr(r)&&(i=ne(i),r=ne(r)),!H(e)&&ze(i)&&!ze(r)))return i.value=r,!0;const o=H(e)&&Sd(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,r,s);return e===ne(s)&&(o?fs(r,i)&&Pn(e,"set",n,r,i):Pn(e,"add",n,r)),a}deleteProperty(e,n){const r=ie(e,n),s=e[n],i=Reflect.deleteProperty(e,n);return i&&r&&Pn(e,"delete",n,void 0,s),i}has(e,n){const r=Reflect.has(e,n);return(!yo(n)||!ry.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",H(e)?"length":ns),Reflect.ownKeys(e)}}class oy extends sy{constructor(e=!1){super(!0,e)}set(e,n){return th(`Set operation on key "${String(n)}" failed: target is readonly.`,e),!0}deleteProperty(e,n){return th(`Delete operation on key "${String(n)}" failed: target is readonly.`,e),!0}}const qb=new iy,Hb=new oy,Kb=new iy(!0),zb=new oy(!0),Dd=t=>t,hc=t=>Reflect.getPrototypeOf(t);function ka(t,e,n=!1,r=!1){t=t.__v_raw;const s=ne(t),i=ne(e);n||(fs(e,i)&&Et(s,"get",e),Et(s,"get",i));const{has:o}=hc(s),a=r?Dd:n?xd:vo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Na(t,e=!1){const n=this.__v_raw,r=ne(n),s=ne(t);return e||(fs(t,s)&&Et(r,"has",t),Et(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oa(t,e=!1){return t=t.__v_raw,!e&&Et(ne(t),"iterate",ns),Reflect.get(t,"size",t)}function Bp(t){t=ne(t);const e=ne(this);return hc(e).has.call(e,t)||(e.add(t),Pn(e,"add",t,t)),this}function jp(t,e){e=ne(e);const n=ne(this),{has:r,get:s}=hc(n);let i=r.call(n,t);i?ay(n,r,t):(t=ne(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?fs(e,o)&&Pn(n,"set",t,e,o):Pn(n,"add",t,e),this}function Wp(t){const e=ne(this),{has:n,get:r}=hc(e);let s=n.call(e,t);s?ay(e,n,t):(t=ne(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&Pn(e,"delete",t,void 0,i),o}function qp(){const t=ne(this),e=t.size!==0,n=ts(t)?new Map(t):new Set(t),r=t.clear();return e&&Pn(t,"clear",void 0,void 0,n),r}function Da(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ne(o),l=e?Dd:t?xd:vo;return!t&&Et(a,"iterate",ns),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function xa(t,e,n){return function(...r){const s=this.__v_raw,i=ne(s),o=ts(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Dd:e?xd:vo;return!e&&Et(i,"iterate",l?sh:ns),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function sr(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${ds(t)} operation ${n}failed: target is readonly.`,ne(this))}return t==="delete"?!1:this}}function Gb(){const t={get(i){return ka(this,i)},get size(){return Oa(this)},has:Na,add:Bp,set:jp,delete:Wp,clear:qp,forEach:Da(!1,!1)},e={get(i){return ka(this,i,!1,!0)},get size(){return Oa(this)},has:Na,add:Bp,set:jp,delete:Wp,clear:qp,forEach:Da(!1,!0)},n={get(i){return ka(this,i,!0)},get size(){return Oa(this,!0)},has(i){return Na.call(this,i,!0)},add:sr("add"),set:sr("set"),delete:sr("delete"),clear:sr("clear"),forEach:Da(!0,!1)},r={get(i){return ka(this,i,!0,!0)},get size(){return Oa(this,!0)},has(i){return Na.call(this,i,!0)},add:sr("add"),set:sr("set"),delete:sr("delete"),clear:sr("clear"),forEach:Da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xa(i,!1,!1),n[i]=xa(i,!0,!1),e[i]=xa(i,!1,!0),r[i]=xa(i,!0,!0)}),[t,n,e,r]}const[Qb,Yb,Xb,Jb]=Gb();function dc(t,e){const n=e?t?Jb:Xb:t?Yb:Qb;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const Zb={get:dc(!1,!1)},eR={get:dc(!1,!0)},tR={get:dc(!0,!1)},nR={get:dc(!0,!0)};function ay(t,e,n){const r=ne(n);if(r!==n&&e.call(t,r)){const s=Cd(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ly=new WeakMap,cy=new WeakMap,uy=new WeakMap,hy=new WeakMap;function rR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sR(t){return t.__v_skip||!Object.isExtensible(t)?0:rR(Cd(t))}function fc(t){return Rr(t)?t:pc(t,!1,qb,Zb,ly)}function dy(t){return pc(t,!1,Kb,eR,cy)}function fy(t){return pc(t,!0,Hb,tR,uy)}function Hi(t){return pc(t,!0,zb,nR,hy)}function pc(t,e,n,r,s){if(!_e(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=sR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rs(t){return Rr(t)?rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function El(t){return!!(t&&t.__v_isShallow)}function oh(t){return rs(t)||Rr(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function py(t){return _l(t,"__v_skip",!0),t}const vo=t=>_e(t)?fc(t):t,xd=t=>_e(t)?fy(t):t;function my(t){_r&&At&&(t=ne(t),ny(t.dep||(t.dep=Nd()),{target:t,type:"get",key:"value"}))}function gy(t,e){t=ne(t);const n=t.dep;n&&ih(n,{target:t,type:"set",key:"value",newValue:e})}function ze(t){return!!(t&&t.__v_isRef===!0)}function _y(t){return yy(t,!1)}function iR(t){return yy(t,!0)}function yy(t,e){return ze(t)?t:new oR(t,e)}class oR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:vo(e)}get value(){return my(this),this._value}set value(e){const n=this.__v_isShallow||El(e)||Rr(e);e=n?e:ne(e),fs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vo(e),gy(this,e))}}function Gs(t){return ze(t)?t.value:t}const aR={get:(t,e,n)=>Gs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vy(t){return rs(t)?t:new Proxy(t,aR)}class lR{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Od(e,()=>{this._dirty||(this._dirty=!0,gy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ne(this);return my(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cR(t,e,n=!1){let r,s;const i=Y(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new lR(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const ss=[];function tl(t){ss.push(t)}function nl(){ss.pop()}function P(t,...e){As();const n=ss.length?ss[ss.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=uR();if(r)zn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${wc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...hR(s)),console.warn(...i)}Cs()}function uR(){let t=ss[ss.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function hR(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...dR(n))}),e}function dR({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${wc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...fR(t.props),i]:[s+i]}function fR(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Ey(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Ey(t,e,n){return Le(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:ze(e)?(e=Ey(t,ne(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):Y(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ne(e),n?e:[`${t}=`,e])}const Md={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function zn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){mc(i,e,n)}return s}function sn(t,e,n,r){if(Y(t)){const i=zn(t,e,n,r);return i&&Ad(i)&&i.catch(o=>{mc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(sn(t[i],e,n,r));return s}function mc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Md[n];for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){zn(l,null,10,[t,o,a]);return}}pR(t,n,s,r)}function pR(t,e,n,r=!0){{const s=Md[e];if(n&&tl(n),P(`Unhandled error${s?` during execution of ${s}`:""}`),n&&nl(),r)throw t;console.error(t)}}let Eo=!1,ah=!1;const gt=[];let En=0;const Qs=[];let vn=null,ar=0;const wy=Promise.resolve();let Ld=null;const mR=100;function Ty(t){const e=Ld||wy;return t?e.then(this?t.bind(this):t):e}function gR(t){let e=En+1,n=gt.length;for(;e<n;){const r=e+n>>>1;wo(gt[r])<t?e=r+1:n=r}return e}function gc(t){(!gt.length||!gt.includes(t,Eo&&t.allowRecurse?En+1:En))&&(t.id==null?gt.push(t):gt.splice(gR(t.id),0,t),Iy())}function Iy(){!Eo&&!ah&&(ah=!0,Ld=wy.then(Ay))}function _R(t){const e=gt.indexOf(t);e>En&&gt.splice(e,1)}function by(t){H(t)?Qs.push(...t):(!vn||!vn.includes(t,t.allowRecurse?ar+1:ar))&&Qs.push(t),Iy()}function Hp(t,e=Eo?En+1:0){for(t=t||new Map;e<gt.length;e++){const n=gt[e];if(n&&n.pre){if(Vd(t,n))continue;gt.splice(e,1),e--,n()}}}function Ry(t){if(Qs.length){const e=[...new Set(Qs)];if(Qs.length=0,vn){vn.push(...e);return}for(vn=e,t=t||new Map,vn.sort((n,r)=>wo(n)-wo(r)),ar=0;ar<vn.length;ar++)Vd(t,vn[ar])||vn[ar]();vn=null,ar=0}}const wo=t=>t.id==null?1/0:t.id,yR=(t,e)=>{const n=wo(t)-wo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ay(t){ah=!1,Eo=!0,t=t||new Map,gt.sort(yR);const e=n=>Vd(t,n);try{for(En=0;En<gt.length;En++){const n=gt[En];if(n&&n.active!==!1){if(e(n))continue;zn(n,null,14)}}}finally{En=0,gt.length=0,Ry(t),Eo=!1,Ld=null,(gt.length||Qs.length)&&Ay(t)}}function Vd(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>mR){const r=e.ownerInstance,s=r&&zd(r.type);return P(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let is=!1;const Us=new Set;vl().__VUE_HMR_RUNTIME__={createRecord:fu(Cy),rerender:fu(wR),reload:fu(TR)};const ps=new Map;function vR(t){const e=t.type.__hmrId;let n=ps.get(e);n||(Cy(e,t.type),n=ps.get(e)),n.instances.add(t)}function ER(t){ps.get(t.type.__hmrId).instances.delete(t)}function Cy(t,e){return ps.has(t)?!1:(ps.set(t,{initialDef:no(e),instances:new Set}),!0)}function no(t){return ev(t)?t.__vccOpts:t}function wR(t,e){const n=ps.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,no(r.type).render=e),r.renderCache=[],is=!0,r.update(),is=!1}))}function TR(t,e){const n=ps.get(t);if(!n)return;e=no(e),Kp(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=no(s.type);Us.has(i)||(i!==n.initialDef&&Kp(i,e),Us.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Us.add(i),s.ceReload(e.styles),Us.delete(i)):s.parent?gc(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}by(()=>{for(const s of r)Us.delete(no(s.type))})}function Kp(t,e){Me(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function fu(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let wn,Ki=[],lh=!1;function Jo(t,...e){wn?wn.emit(t,...e):lh||Ki.push({event:t,args:e})}function Sy(t,e){var n,r;wn=t,wn?(wn.enabled=!0,Ki.forEach(({event:s,args:i})=>wn.emit(s,...i)),Ki=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Sy(i,e)}),setTimeout(()=>{wn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,lh=!0,Ki=[])},3e3)):(lh=!0,Ki=[])}function IR(t,e){Jo("app:init",t,e,{Fragment:Ot,Text:Zo,Comment:on,Static:il})}function bR(t){Jo("app:unmount",t)}const RR=Fd("component:added"),Py=Fd("component:updated"),AR=Fd("component:removed"),CR=t=>{wn&&typeof wn.cleanupBuffer=="function"&&!wn.cleanupBuffer(t)&&AR(t)};function Fd(t){return e=>{Jo(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const SR=ky("perf:start"),PR=ky("perf:end");function ky(t){return(e,n,r)=>{Jo(t,e.appContext.app,e.uid,e,n,r)}}function kR(t,e,n){Jo("component:emit",t.appContext.app,t,e,n)}function NR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!(Hr(e)in h))&&P(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Hr(e)}" prop.`);else{const d=u[e];Y(d)&&(d(...n)||P(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Te;d&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(yl))}kR(t,e,s);{const u=e.toLowerCase();u!==e&&r[Hr(u)]&&P(`Event "${u}" is emitted in component ${wc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ir(e)}" instead of "${e}".`)}let a,l=r[a=Hr(e)]||r[a=Hr(Mn(e))];!l&&i&&(l=r[a=Hr(Ir(e))]),l&&sn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,sn(c,t,6,s)}}function Ny(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Ny(c,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(_e(t)&&r.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):Me(o,i),_e(t)&&r.set(t,o),o)}function _c(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Ir(e))||ie(t,e))}let St=null,Oy=null;function wl(t){const e=St;return St=t,Oy=t&&t.type.__scopeId||null,e}function Ct(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&im(-1);const i=wl(e);let o;try{o=t(...s)}finally{wl(i),r._d&&im(1)}return Py(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let ch=!1;function Tl(){ch=!0}function pu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:E}=t;let v,C;const D=wl(t);ch=!1;try{if(n.shapeFlag&4){const U=s||r;v=Zt(u.call(U,U,h,i,p,d,g)),C=l}else{const U=e;l===i&&Tl(),v=Zt(U.length>1?U(i,{get attrs(){return Tl(),l},slots:a,emit:c}):U(i,null)),C=e.props?l:DR(l)}}catch(U){so.length=0,mc(U,t,1),v=Re(on)}let N=v,K;if(v.patchFlag>0&&v.patchFlag&2048&&([N,K]=OR(v)),C&&E!==!1){const U=Object.keys(C),{shapeFlag:me}=N;if(U.length){if(me&7)o&&U.some(gl)&&(C=xR(C,o)),N=Ar(N,C);else if(!ch&&N.type!==on){const xe=Object.keys(l),et=[],Be=[];for(let tt=0,Yt=xe.length;tt<Yt;tt++){const kt=xe[tt];Yo(kt)?gl(kt)||et.push(kt[2].toLowerCase()+kt.slice(3)):Be.push(kt)}Be.length&&P(`Extraneous non-props attributes (${Be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),et.length&&P(`Extraneous non-emits event listeners (${et.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(zp(N)||P("Runtime directive used on component with non-element root node. The directives will not function as intended."),N=Ar(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(zp(N)||P("Component inside <Transition> renders non-element root node that cannot be animated."),N.transition=n.transition),K?K(N):v=N,wl(D),v}const OR=t=>{const e=t.children,n=t.dynamicChildren,r=Dy(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Zt(r),o]};function Dy(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Io(r)){if(r.type!==on||r.children==="v-if"){if(e)return;e=r}}else return}return e}const DR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},xR=(t,e)=>{const n={};for(const r in t)(!gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},zp=t=>t.shapeFlag&7||t.type===on;function MR(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if((s||a)&&is||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Gp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!_c(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Gp(r,o,c):!0:!!o;return!1}function Gp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_c(n,i))return!0}return!1}function LR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const VR=t=>t.__isSuspense;function FR(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):by(t)}function UR(t,e){return Ud(t,null,e)}const Ma={};function ro(t,e,n){return Y(e)||P("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Ud(t,e,n)}function Ud(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){var a;e||(n!==void 0&&P('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&P('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=U=>{P("Invalid watch source: ",U,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Fb()===((a=Ke)==null?void 0:a.scope)?Ke:null;let u,h=!1,d=!1;if(ze(t)?(u=()=>t.value,h=El(t)):rs(t)?(u=()=>t,r=!0):H(t)?(d=!0,h=t.some(U=>rs(U)||El(U)),u=()=>t.map(U=>{if(ze(U))return U.value;if(rs(U))return Yr(U);if(Y(U))return zn(U,c,2);l(U)})):Y(t)?e?u=()=>zn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),sn(t,c,3,[g])}:(u=xt,l(t)),e&&r){const U=u;u=()=>Yr(U())}let p,g=U=>{p=N.onStop=()=>{zn(U,c,4)}},E;if(bo)if(g=xt,e?n&&sn(e,c,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const U=zA();E=U.__watcherHandles||(U.__watcherHandles=[])}else return xt;let v=d?new Array(t.length).fill(Ma):Ma;const C=()=>{if(N.active)if(e){const U=N.run();(r||h||(d?U.some((me,xe)=>fs(me,v[xe])):fs(U,v)))&&(p&&p(),sn(e,c,3,[U,v===Ma?void 0:d&&v[0]===Ma?[]:v,g]),v=U)}else N.run()};C.allowRecurse=!!e;let D;s==="sync"?D=C:s==="post"?D=()=>Nt(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),D=()=>gc(C));const N=new Od(u,D);N.onTrack=i,N.onTrigger=o,e?n?C():v=N.run():s==="post"?Nt(N.run.bind(N),c&&c.suspense):N.run();const K=()=>{N.stop(),c&&c.scope&&Rd(c.scope.effects,N)};return E&&E.push(K),K}function $R(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?xy(r,t):()=>r[t]:t.bind(r,r);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Ke;si(this);const a=Ud(s,i.bind(r),n);return o?si(o):as(),a}function xy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Yr(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ze(t))Yr(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Yr(t[n],e);else if(lc(t)||ts(t))t.forEach(n=>{Yr(n,e)});else if(Q_(t))for(const n in t)Yr(t[n],e);return t}function My(t){wb(t)&&P("Do not use built-in directive ids as custom directive id: "+t)}function Vt(t,e){const n=St;if(n===null)return P("withDirectives can only be used inside render functions."),t;const r=Ec(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Te]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&Yr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(As(),sn(l,n,8,[t.el,a,t,e]),Cs())}}/*! #__NO_SIDE_EFFECTS__ */function Ly(t,e){return Y(t)?(()=>Me({name:t.name},e,{setup:t}))():t}const rl=t=>!!t.type.__asyncLoader,$d=t=>t.type.__isKeepAlive;function BR(t,e){Vy(t,"a",e)}function jR(t,e){Vy(t,"da",e)}function Vy(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(yc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$d(s.parent.vnode)&&WR(r,e,n,s),s=s.parent}}function WR(t,e,n,r){const s=yc(e,t,r,!0);Fy(()=>{Rd(r[e],s)},n)}function yc(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;As(),si(n);const a=sn(e,n,t,o);return as(),Cs(),a});return r?s.unshift(i):s.push(i),i}else{const s=Hr(Md[t].replace(/ hook$/,""));P(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Zn=t=>(e,n=Ke)=>(!bo||t==="sp")&&yc(t,(...r)=>e(...r),n),qR=Zn("bm"),HR=Zn("m"),KR=Zn("bu"),zR=Zn("u"),GR=Zn("bum"),Fy=Zn("um"),QR=Zn("sp"),YR=Zn("rtg"),XR=Zn("rtc");function JR(t,e=Ke){yc("ec",t,e)}const uh="components";function xr(t,e){return eA(uh,t,!0,e)||t}const ZR=Symbol.for("v-ndc");function eA(t,e,n=!0,r=!1){const s=St||Ke;if(s){const i=s.type;if(t===uh){const a=zd(i,!1);if(a&&(a===e||a===Mn(e)||a===ds(Mn(e))))return i}const o=Qp(s[t]||i[t],e)||Qp(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===uh?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";P(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else P(`resolve${ds(t.slice(0,-1))} can only be used in render() or setup().`)}function Qp(t,e){return t&&(t[e]||t[Mn(e)]||t[ds(Mn(e))])}function Uy(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||P(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const hh=t=>t?Xy(t)?Ec(t)||t.proxy:hh(t.parent):null,os=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>Hi(t.props),$attrs:t=>Hi(t.attrs),$slots:t=>Hi(t.slots),$refs:t=>Hi(t.refs),$parent:t=>hh(t.parent),$root:t=>hh(t.root),$emit:t=>t.emit,$options:t=>jd(t),$forceUpdate:t=>t.f||(t.f=()=>gc(t.update)),$nextTick:t=>t.n||(t.n=Ty.bind(t.proxy)),$watch:t=>$R.bind(t)}),Bd=t=>t==="_"||t==="$",mu=(t,e)=>t!==Te&&!t.__isScriptSetup&&ie(t,e),$y={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(mu(r,e))return o[e]=1,r[e];if(s!==Te&&ie(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,i[e];if(n!==Te&&ie(n,e))return o[e]=4,n[e];dh&&(o[e]=0)}}const u=os[e];let h,d;if(u)return e==="$attrs"?(Et(t,"get",e),Tl()):e==="$slots"&&Et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ie(d,e))return d[e];St&&(!Le(e)||e.indexOf("__v")!==0)&&(s!==Te&&Bd(e[0])&&ie(s,e)?P(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===St&&P(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return mu(s,e)?(s[e]=n,!0):s.__isScriptSetup&&ie(s,e)?(P(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==Te&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)?(P(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(P(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&ie(t,o)||mu(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(os,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};$y.ownKeys=t=>(P("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function tA(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(os).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>os[n](t),set:xt})}),e}function nA(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:xt})})}function rA(t){const{ctx:e,setupState:n}=t;Object.keys(ne(n)).forEach(r=>{if(!n.__isScriptSetup){if(Bd(r[0])){P(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:xt})}})}function Yp(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function sA(){const t=Object.create(null);return(e,n)=>{t[n]?P(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let dh=!0;function iA(t){const e=jd(t),n=t.proxy,r=t.ctx;dh=!1,e.beforeCreate&&Xp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:E,deactivated:v,beforeDestroy:C,beforeUnmount:D,destroyed:N,unmounted:K,render:U,renderTracked:me,renderTriggered:xe,errorCaptured:et,serverPrefetch:Be,expose:tt,inheritAttrs:Yt,components:kt,directives:mn,filters:Sa}=e,qt=sA();{const[re]=t.propsOptions;if(re)for(const se in re)qt("Props",se)}if(c&&oA(c,r,qt),o)for(const re in o){const se=o[re];Y(se)?(Object.defineProperty(r,re,{value:se.bind(n),configurable:!0,enumerable:!0,writable:!0}),qt("Methods",re)):P(`Method "${re}" has type "${typeof se}" in the component definition. Did you reference the function correctly?`)}if(s){Y(s)||P("The data option must be a function. Plain object usage is no longer supported.");const re=s.call(n,n);if(Ad(re)&&P("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!_e(re))P("data() should return an object.");else{t.data=fc(re);for(const se in re)qt("Data",se),Bd(se[0])||Object.defineProperty(r,se,{configurable:!0,enumerable:!0,get:()=>re[se],set:xt})}}if(dh=!0,i)for(const re in i){const se=i[re],Ht=Y(se)?se.bind(n,n):Y(se.get)?se.get.bind(n,n):xt;Ht===xt&&P(`Computed property "${re}" has no getter.`);const jr=!Y(se)&&Y(se.set)?se.set.bind(n):()=>{P(`Write operation failed: computed property "${re}" is readonly.`)},tr=en({get:Ht,set:jr});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>tr.value,set:gn=>tr.value=gn}),qt("Computed",re)}if(a)for(const re in a)By(a[re],r,n,re);if(l){const re=Y(l)?l.call(n):l;Reflect.ownKeys(re).forEach(se=>{sl(se,re[se])})}u&&Xp(u,t,"c");function nt(re,se){H(se)?se.forEach(Ht=>re(Ht.bind(n))):se&&re(se.bind(n))}if(nt(qR,h),nt(HR,d),nt(KR,p),nt(zR,g),nt(BR,E),nt(jR,v),nt(JR,et),nt(XR,me),nt(YR,xe),nt(GR,D),nt(Fy,K),nt(QR,Be),H(tt))if(tt.length){const re=t.exposed||(t.exposed={});tt.forEach(se=>{Object.defineProperty(re,se,{get:()=>n[se],set:Ht=>n[se]=Ht})})}else t.exposed||(t.exposed={});U&&t.render===xt&&(t.render=U),Yt!=null&&(t.inheritAttrs=Yt),kt&&(t.components=kt),mn&&(t.directives=mn)}function oA(t,e,n=xt){H(t)&&(t=fh(t));for(const r in t){const s=t[r];let i;_e(s)?"default"in s?i=kn(s.from||r,s.default,!0):i=kn(s.from||r):i=kn(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function Xp(t,e,n){sn(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function By(t,e,n,r){const s=r.includes(".")?xy(n,r):()=>n[r];if(Le(t)){const i=e[t];Y(i)?ro(s,i):P(`Invalid watch handler specified by key "${t}"`,i)}else if(Y(t))ro(s,t.bind(n));else if(_e(t))if(H(t))t.forEach(i=>By(i,e,n,r));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)?ro(s,i,t):P(`Invalid watch handler specified by key "${t.handler}"`,i)}else P(`Invalid watch option: "${r}"`,t)}function jd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Il(l,c,o,!0)),Il(l,e,o)),_e(e)&&i.set(e,l),l}function Il(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Il(t,i,n,!0),s&&s.forEach(o=>Il(t,o,n,!0));for(const o in e)if(r&&o==="expose")P('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=aA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const aA={data:Jp,props:Zp,emits:Zp,methods:zi,computed:zi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:zi,directives:zi,watch:cA,provide:Jp,inject:lA};function Jp(t,e){return e?t?function(){return Me(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function lA(t,e){return zi(fh(t),fh(e))}function fh(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function zi(t,e){return t?Me(Object.create(null),t,e):e}function Zp(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Me(Object.create(null),Yp(t),Yp(e??{})):e}function cA(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function jy(){return{app:null,config:{isNativeTag:z_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uA=0;function hA(t,e){return function(r,s=null){Y(r)||(r=Me({},r)),s!=null&&!_e(s)&&(P("root props passed to app.mount() must be an object."),s=null);const i=jy();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){P("app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API.")}});const o=new WeakSet;let a=!1;const l=i.app={_uid:uA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lm,get config(){return i.config},set config(c){P("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return o.has(c)?P("Plugin has already been applied to target app."):c&&Y(c.install)?(o.add(c),c.install(l,...u)):Y(c)?(o.add(c),c(l,...u)):P('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return i.mixins.includes(c)?P("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):i.mixins.push(c),l},component(c,u){return yh(c,i.config),u?(i.components[c]&&P(`Component "${c}" has already been registered in target app.`),i.components[c]=u,l):i.components[c]},directive(c,u){return My(c),u?(i.directives[c]&&P(`Directive "${c}" has already been registered in target app.`),i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(a)P("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&P("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Re(r,s);return d.appContext=i,i.reload=()=>{t(Ar(d),c,h)},u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,IR(l,lm),Ec(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,bR(l),delete l._container.__vue_app__):P("Cannot unmount an app that is not mounted.")},provide(c,u){return c in i.provides&&P(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),i.provides[c]=u,l},runWithContext(c){bl=l;try{return c()}finally{bl=null}}};return l}}let bl=null;function sl(t,e){if(!Ke)P("provide() can only be used inside setup().");else{let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function kn(t,e,n=!1){const r=Ke||St;if(r||bl){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:bl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(r&&r.proxy):e;P(`injection "${String(t)}" not found.`)}else P("inject() can only be used inside setup() or functional components.")}function dA(t,e,n,r=!1){const s={},i={};_l(i,vc,1),t.propsDefaults=Object.create(null),Wy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);Hy(e||{},s,t),n?t.props=r?s:dy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fA(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function pA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ne(s),[l]=t.propsOptions;let c=!1;if(!fA(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(_c(t.emitsOptions,d))continue;const p=e[d];if(l)if(ie(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const g=Mn(d);s[g]=ph(l,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{Wy(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Ir(h))===h||!ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ph(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],c=!0)}c&&Pn(t,"set","$attrs"),Hy(e||{},s,t)}function Wy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(el(l))continue;const c=e[l];let u;s&&ie(s,u=Mn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:_c(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ne(n),c=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ph(s,l,h,c[h],t,!ie(c,h))}}return o}function ph(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(si(s),r=c[n]=l.call(null,e),as())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ir(n))&&(r=!0))}return r}function qy(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=h=>{l=!0;const[d,p]=qy(h,e,!0);Me(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return _e(t)&&r.set(t,zs),zs;if(H(i))for(let u=0;u<i.length;u++){Le(i[u])||P("props must be strings when using array syntax.",i[u]);const h=Mn(i[u]);em(h)&&(o[h]=Te)}else if(i){_e(i)||P("invalid props options",i);for(const u in i){const h=Mn(u);if(em(h)){const d=i[u],p=o[h]=H(d)||Y(d)?{type:d}:Me({},d);if(p){const g=nm(Boolean,p.type),E=nm(String,p.type);p[0]=g>-1,p[1]=E<0||g<E,(g>-1||ie(p,"default"))&&a.push(h)}}}}const c=[o,a];return _e(t)&&r.set(t,c),c}function em(t){return t[0]!=="$"?!0:(P(`Invalid prop name: "${t}" is a reserved property.`),!1)}function mh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function tm(t,e){return mh(t)===mh(e)}function nm(t,e){return H(e)?e.findIndex(n=>tm(n,t)):Y(e)&&tm(e,t)?0:-1}function Hy(t,e,n){const r=ne(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&mA(i,r[i],o,!ie(t,i)&&!ie(t,Ir(i)))}}function mA(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){P('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let l=!1;const c=H(s)?s:[s],u=[];for(let h=0;h<c.length&&!l;h++){const{valid:d,expectedType:p}=_A(e,c[h]);u.push(p||""),l=d}if(!l){P(yA(t,e,u));return}}o&&!o(e)&&P('Invalid prop: custom validator check failed for prop "'+t+'".')}}const gA=Dr("String,Number,Boolean,Function,Symbol,BigInt");function _A(t,e){let n;const r=mh(e);if(gA(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=_e(t):r==="Array"?n=H(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function yA(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(ds).join(" | ")}`;const s=n[0],i=Cd(e),o=rm(e,s),a=rm(e,i);return n.length===1&&sm(s)&&!vA(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,sm(i)&&(r+=`with value ${a}.`),r}function rm(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function sm(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function vA(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Ky=t=>t[0]==="_"||t==="$stable",Wd=t=>H(t)?t.map(Zt):[Zt(t)],EA=(t,e,n)=>{if(e._n)return e;const r=Ct((...s)=>(Ke&&P(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Wd(e(...s))),n);return r._c=!1,r},zy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ky(s))continue;const i=t[s];if(Y(i))e[s]=EA(s,i,r);else if(i!=null){P(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=Wd(i);e[s]=()=>o}}},Gy=(t,e)=>{$d(t.vnode)||P("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Wd(e);t.slots.default=()=>n},wA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),_l(e,"_",n)):zy(e,t.slots={})}else t.slots={},e&&Gy(t,e);_l(t.slots,vc,1)},TA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Te;if(r.shapeFlag&32){const a=e._;a?is?(Me(s,e),Pn(t,"set","$slots")):n&&a===1?i=!1:(Me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,zy(e,s)),o=e}else e&&(Gy(t,e),o={default:1});if(i)for(const a in s)!Ky(a)&&o[a]==null&&delete s[a]};function gh(t,e,n,r,s=!1){if(H(t)){t.forEach((d,p)=>gh(d,e&&(H(e)?e[p]:e),n,r,s));return}if(rl(r)&&!s)return;const i=r.shapeFlag&4?Ec(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t;if(!a){P("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,ie(h,c)&&(h[c]=null)):ze(c)&&(c.value=null)),Y(l))zn(l,a,12,[o,u]);else{const d=Le(l),p=ze(l);if(d||p){const g=()=>{if(t.f){const E=d?ie(h,l)?h[l]:u[l]:l.value;s?H(E)&&Rd(E,i):H(E)?E.includes(i)||E.push(i):d?(u[l]=[i],ie(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ie(h,l)&&(h[l]=o)):p?(l.value=o,t.k&&(u[t.k]=o)):P("Invalid template ref type:",l,`(${typeof l})`)};o?(g.id=-1,Nt(g,n)):g()}else P("Invalid template ref type:",l,`(${typeof l})`)}}let Oi,ur;function $n(t,e){t.appContext.config.performance&&Rl()&&ur.mark(`vue-${e}-${t.uid}`),SR(t,e,Rl()?ur.now():Date.now())}function Bn(t,e){if(t.appContext.config.performance&&Rl()){const n=`vue-${e}-${t.uid}`,r=n+":end";ur.mark(r),ur.measure(`<${wc(t,t.type)}> ${e}`,n,r),ur.clearMarks(n),ur.clearMarks(r)}PR(t,e,Rl()?ur.now():Date.now())}function Rl(){return Oi!==void 0||(typeof window<"u"&&window.performance?(Oi=!0,ur=window.performance):Oi=!1),Oi}function IA(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const Nt=FR;function bA(t){return RA(t)}function RA(t,e){IA();const n=vl();n.__VUE__=!0,Sy(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=xt,insertStaticContent:g}=t,E=(f,m,_,T=null,w=null,k=null,x=!1,S=null,O=is?!1:!!m.dynamicChildren)=>{if(f===m)return;f&&!Di(f,m)&&(T=V(f),Kt(f,w,k,!0),f=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:R,ref:q,shapeFlag:j}=m;switch(R){case Zo:v(f,m,_,T);break;case on:C(f,m,_,T);break;case il:f==null?D(m,_,T,x):N(f,m,_,x);break;case Ot:mn(f,m,_,T,w,k,x,S,O);break;default:j&1?me(f,m,_,T,w,k,x,S,O):j&6?Sa(f,m,_,T,w,k,x,S,O):j&64||j&128?R.process(f,m,_,T,w,k,x,S,O,$):P("Invalid VNode type:",R,`(${typeof R})`)}q!=null&&w&&gh(q,f&&f.ref,k,m||f,!m)},v=(f,m,_,T)=>{if(f==null)r(m.el=a(m.children),_,T);else{const w=m.el=f.el;m.children!==f.children&&c(w,m.children)}},C=(f,m,_,T)=>{f==null?r(m.el=l(m.children||""),_,T):m.el=f.el},D=(f,m,_,T)=>{[f.el,f.anchor]=g(f.children,m,_,T,f.el,f.anchor)},N=(f,m,_,T)=>{if(m.children!==f.children){const w=d(f.anchor);U(f),[m.el,m.anchor]=g(m.children,_,w,T)}else m.el=f.el,m.anchor=f.anchor},K=({el:f,anchor:m},_,T)=>{let w;for(;f&&f!==m;)w=d(f),r(f,_,T),f=w;r(m,_,T)},U=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},me=(f,m,_,T,w,k,x,S,O)=>{x=x||m.type==="svg",f==null?xe(m,_,T,w,k,x,S,O):tt(f,m,w,k,x,S,O)},xe=(f,m,_,T,w,k,x,S)=>{let O,R;const{type:q,props:j,shapeFlag:z,transition:Z,dirs:oe}=f;if(O=f.el=o(f.type,k,j&&j.is,j),z&8?u(O,f.children):z&16&&Be(f.children,O,null,T,w,k&&q!=="foreignObject",x,S),oe&&Wr(f,null,T,"created"),et(O,f,f.scopeId,x,T),j){for(const we in j)we!=="value"&&!el(we)&&i(O,we,null,j[we],k,f.children,T,w,y);"value"in j&&i(O,"value",null,j.value),(R=j.onVnodeBeforeMount)&&yn(R,T,f)}Object.defineProperty(O,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(O,"__vueParentComponent",{value:T,enumerable:!1}),oe&&Wr(f,null,T,"beforeMount");const be=(!w||w&&!w.pendingBranch)&&Z&&!Z.persisted;be&&Z.beforeEnter(O),r(O,m,_),((R=j&&j.onVnodeMounted)||be||oe)&&Nt(()=>{R&&yn(R,T,f),be&&Z.enter(O),oe&&Wr(f,null,T,"mounted")},w)},et=(f,m,_,T,w)=>{if(_&&p(f,_),T)for(let k=0;k<T.length;k++)p(f,T[k]);if(w){let k=w.subTree;if(k.patchFlag>0&&k.patchFlag&2048&&(k=Dy(k.children)||k),m===k){const x=w.vnode;et(f,x,x.scopeId,x.slotScopeIds,w.parent)}}},Be=(f,m,_,T,w,k,x,S,O=0)=>{for(let R=O;R<f.length;R++){const q=f[R]=S?lr(f[R]):Zt(f[R]);E(null,q,m,_,T,w,k,x,S)}},tt=(f,m,_,T,w,k,x)=>{const S=m.el=f.el;let{patchFlag:O,dynamicChildren:R,dirs:q}=m;O|=f.patchFlag&16;const j=f.props||Te,z=m.props||Te;let Z;_&&qr(_,!1),(Z=z.onVnodeBeforeUpdate)&&yn(Z,_,m,f),q&&Wr(m,f,_,"beforeUpdate"),_&&qr(_,!0),is&&(O=0,x=!1,R=null);const oe=w&&m.type!=="foreignObject";if(R?(Yt(f.dynamicChildren,R,S,_,T,oe,k),_h(f,m)):x||Ht(f,m,S,null,_,T,oe,k,!1),O>0){if(O&16)kt(S,m,j,z,_,T,w);else if(O&2&&j.class!==z.class&&i(S,"class",null,z.class,w),O&4&&i(S,"style",j.style,z.style,w),O&8){const be=m.dynamicProps;for(let we=0;we<be.length;we++){const je=be[we],Xt=j[je],Ds=z[je];(Ds!==Xt||je==="value")&&i(S,je,Xt,Ds,w,f.children,_,T,y)}}O&1&&f.children!==m.children&&u(S,m.children)}else!x&&R==null&&kt(S,m,j,z,_,T,w);((Z=z.onVnodeUpdated)||q)&&Nt(()=>{Z&&yn(Z,_,m,f),q&&Wr(m,f,_,"updated")},T)},Yt=(f,m,_,T,w,k,x)=>{for(let S=0;S<m.length;S++){const O=f[S],R=m[S],q=O.el&&(O.type===Ot||!Di(O,R)||O.shapeFlag&70)?h(O.el):_;E(O,R,q,null,T,w,k,x,!0)}},kt=(f,m,_,T,w,k,x)=>{if(_!==T){if(_!==Te)for(const S in _)!el(S)&&!(S in T)&&i(f,S,_[S],null,x,m.children,w,k,y);for(const S in T){if(el(S))continue;const O=T[S],R=_[S];O!==R&&S!=="value"&&i(f,S,R,O,x,m.children,w,k,y)}"value"in T&&i(f,"value",_.value,T.value)}},mn=(f,m,_,T,w,k,x,S,O)=>{const R=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:z,slotScopeIds:Z}=m;(is||j&2048)&&(j=0,O=!1,z=null),Z&&(S=S?S.concat(Z):Z),f==null?(r(R,_,T),r(q,_,T),Be(m.children,_,q,w,k,x,S,O)):j>0&&j&64&&z&&f.dynamicChildren?(Yt(f.dynamicChildren,z,_,w,k,x,S),_h(f,m)):Ht(f,m,_,q,w,k,x,S,O)},Sa=(f,m,_,T,w,k,x,S,O)=>{m.slotScopeIds=S,f==null?m.shapeFlag&512?w.ctx.activate(m,_,T,x,O):qt(m,_,T,w,k,x,O):nt(f,m,O)},qt=(f,m,_,T,w,k,x)=>{const S=f.component=VA(f,T,w);if(S.type.__hmrId&&vR(S),tl(f),$n(S,"mount"),$d(f)&&(S.ctx.renderer=$),$n(S,"init"),UA(S),Bn(S,"init"),S.asyncDep){if(w&&w.registerDep(S,re),!f.el){const O=S.subTree=Re(on);C(null,O,m,_)}return}re(S,f,m,_,w,k,x),nl(),Bn(S,"mount")},nt=(f,m,_)=>{const T=m.component=f.component;if(MR(f,m,_))if(T.asyncDep&&!T.asyncResolved){tl(m),se(T,m,_),nl();return}else T.next=m,_R(T.update),T.update();else m.el=f.el,T.vnode=m},re=(f,m,_,T,w,k,x)=>{const S=()=>{if(f.isMounted){let{next:q,bu:j,u:z,parent:Z,vnode:oe}=f,be=q,we;tl(q||f.vnode),qr(f,!1),q?(q.el=oe.el,se(f,q,x)):q=oe,j&&Fs(j),(we=q.props&&q.props.onVnodeBeforeUpdate)&&yn(we,Z,q,oe),qr(f,!0),$n(f,"render");const je=pu(f);Bn(f,"render");const Xt=f.subTree;f.subTree=je,$n(f,"patch"),E(Xt,je,h(Xt.el),V(Xt),f,w,k),Bn(f,"patch"),q.el=je.el,be===null&&LR(f,je.el),z&&Nt(z,w),(we=q.props&&q.props.onVnodeUpdated)&&Nt(()=>yn(we,Z,q,oe),w),Py(f),nl()}else{let q;const{el:j,props:z}=m,{bm:Z,m:oe,parent:be}=f,we=rl(m);if(qr(f,!1),Z&&Fs(Z),!we&&(q=z&&z.onVnodeBeforeMount)&&yn(q,be,m),qr(f,!0),j&&Oe){const je=()=>{$n(f,"render"),f.subTree=pu(f),Bn(f,"render"),$n(f,"hydrate"),Oe(j,f.subTree,f,w,null),Bn(f,"hydrate")};we?m.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{$n(f,"render");const je=f.subTree=pu(f);Bn(f,"render"),$n(f,"patch"),E(null,je,_,T,f,w,k),Bn(f,"patch"),m.el=je.el}if(oe&&Nt(oe,w),!we&&(q=z&&z.onVnodeMounted)){const je=m;Nt(()=>yn(q,be,je),w)}(m.shapeFlag&256||be&&rl(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&Nt(f.a,w),f.isMounted=!0,RR(f),m=_=T=null}},O=f.effect=new Od(S,()=>gc(R),f.scope),R=f.update=()=>O.run();R.id=f.uid,qr(f,!0),O.onTrack=f.rtc?q=>Fs(f.rtc,q):void 0,O.onTrigger=f.rtg?q=>Fs(f.rtg,q):void 0,R.ownerInstance=f,R()},se=(f,m,_)=>{m.component=f;const T=f.vnode.props;f.vnode=m,f.next=null,pA(f,m.props,T,_),TA(f,m.children,_),As(),Hp(),Cs()},Ht=(f,m,_,T,w,k,x,S,O=!1)=>{const R=f&&f.children,q=f?f.shapeFlag:0,j=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){tr(R,j,_,T,w,k,x,S,O);return}else if(z&256){jr(R,j,_,T,w,k,x,S,O);return}}Z&8?(q&16&&y(R,w,k),j!==R&&u(_,j)):q&16?Z&16?tr(R,j,_,T,w,k,x,S,O):y(R,w,k,!0):(q&8&&u(_,""),Z&16&&Be(j,_,T,w,k,x,S,O))},jr=(f,m,_,T,w,k,x,S,O)=>{f=f||zs,m=m||zs;const R=f.length,q=m.length,j=Math.min(R,q);let z;for(z=0;z<j;z++){const Z=m[z]=O?lr(m[z]):Zt(m[z]);E(f[z],Z,_,null,w,k,x,S,O)}R>q?y(f,w,k,!0,!1,j):Be(m,_,T,w,k,x,S,O,j)},tr=(f,m,_,T,w,k,x,S,O)=>{let R=0;const q=m.length;let j=f.length-1,z=q-1;for(;R<=j&&R<=z;){const Z=f[R],oe=m[R]=O?lr(m[R]):Zt(m[R]);if(Di(Z,oe))E(Z,oe,_,null,w,k,x,S,O);else break;R++}for(;R<=j&&R<=z;){const Z=f[j],oe=m[z]=O?lr(m[z]):Zt(m[z]);if(Di(Z,oe))E(Z,oe,_,null,w,k,x,S,O);else break;j--,z--}if(R>j){if(R<=z){const Z=z+1,oe=Z<q?m[Z].el:T;for(;R<=z;)E(null,m[R]=O?lr(m[R]):Zt(m[R]),_,oe,w,k,x,S,O),R++}}else if(R>z)for(;R<=j;)Kt(f[R],w,k,!0),R++;else{const Z=R,oe=R,be=new Map;for(R=oe;R<=z;R++){const It=m[R]=O?lr(m[R]):Zt(m[R]);It.key!=null&&(be.has(It.key)&&P("Duplicate keys found during update:",JSON.stringify(It.key),"Make sure keys are unique."),be.set(It.key,R))}let we,je=0;const Xt=z-oe+1;let Ds=!1,Dp=0;const Ni=new Array(Xt);for(R=0;R<Xt;R++)Ni[R]=0;for(R=Z;R<=j;R++){const It=f[R];if(je>=Xt){Kt(It,w,k,!0);continue}let _n;if(It.key!=null)_n=be.get(It.key);else for(we=oe;we<=z;we++)if(Ni[we-oe]===0&&Di(It,m[we])){_n=we;break}_n===void 0?Kt(It,w,k,!0):(Ni[_n-oe]=R+1,_n>=Dp?Dp=_n:Ds=!0,E(It,m[_n],_,null,w,k,x,S,O),je++)}const xp=Ds?AA(Ni):zs;for(we=xp.length-1,R=Xt-1;R>=0;R--){const It=oe+R,_n=m[It],Mp=It+1<q?m[It+1].el:T;Ni[R]===0?E(null,_n,_,Mp,w,k,x,S,O):Ds&&(we<0||R!==xp[we]?gn(_n,_,Mp,2):we--)}}},gn=(f,m,_,T,w=null)=>{const{el:k,type:x,transition:S,children:O,shapeFlag:R}=f;if(R&6){gn(f.component.subTree,m,_,T);return}if(R&128){f.suspense.move(m,_,T);return}if(R&64){x.move(f,m,_,$);return}if(x===Ot){r(k,m,_);for(let j=0;j<O.length;j++)gn(O[j],m,_,T);r(f.anchor,m,_);return}if(x===il){K(f,m,_);return}if(T!==2&&R&1&&S)if(T===0)S.beforeEnter(k),r(k,m,_),Nt(()=>S.enter(k),w);else{const{leave:j,delayLeave:z,afterLeave:Z}=S,oe=()=>r(k,m,_),be=()=>{j(k,()=>{oe(),Z&&Z()})};z?z(k,oe,be):be()}else r(k,m,_)},Kt=(f,m,_,T=!1,w=!1)=>{const{type:k,props:x,ref:S,children:O,dynamicChildren:R,shapeFlag:q,patchFlag:j,dirs:z}=f;if(S!=null&&gh(S,null,_,f,!0),q&256){m.ctx.deactivate(f);return}const Z=q&1&&z,oe=!rl(f);let be;if(oe&&(be=x&&x.onVnodeBeforeUnmount)&&yn(be,m,f),q&6)rr(f.component,_,T);else{if(q&128){f.suspense.unmount(_,T);return}Z&&Wr(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,_,w,$,T):R&&(k!==Ot||j>0&&j&64)?y(R,m,_,!1,!0):(k===Ot&&j&384||!w&&q&16)&&y(O,m,_),T&&nr(f)}(oe&&(be=x&&x.onVnodeUnmounted)||Z)&&Nt(()=>{be&&yn(be,m,f),Z&&Wr(f,null,m,"unmounted")},_)},nr=f=>{const{type:m,el:_,anchor:T,transition:w}=f;if(m===Ot){f.patchFlag>0&&f.patchFlag&2048&&w&&!w.persisted?f.children.forEach(x=>{x.type===on?s(x.el):nr(x)}):Pa(_,T);return}if(m===il){U(f);return}const k=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:S}=w,O=()=>x(_,k);S?S(f.el,k,O):O()}else k()},Pa=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},rr=(f,m,_)=>{f.type.__hmrId&&ER(f);const{bum:T,scope:w,update:k,subTree:x,um:S}=f;T&&Fs(T),w.stop(),k&&(k.active=!1,Kt(x,f,m,_)),S&&Nt(S,m),Nt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve()),CR(f)},y=(f,m,_,T=!1,w=!1,k=0)=>{for(let x=k;x<f.length;x++)Kt(f[x],m,_,T,w)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,m,_)=>{f==null?m._vnode&&Kt(m._vnode,null,null,!0):E(m._vnode||null,f,m,null,null,null,_),Hp(),Ry(),m._vnode=f},$={p:E,um:Kt,m:gn,r:nr,mt:qt,mc:Be,pc:Ht,pbc:Yt,n:V,o:t};let ce,Oe;return e&&([ce,Oe]=e($)),{render:F,hydrate:ce,createApp:hA(F,ce)}}function qr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _h(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=lr(s[i]),a.el=o.el),n||_h(o,a)),a.type===Zo&&(a.el=o.el),a.type===on&&!a.el&&(a.el=o.el)}}function AA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const CA=t=>t.__isTeleport,Ot=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),il=Symbol.for("v-stc"),so=[];let nn=null;function at(t=!1){so.push(nn=t?null:[])}function SA(){so.pop(),nn=so[so.length-1]||null}let To=1;function im(t){To+=t}function PA(t){return t.dynamicChildren=To>0?nn||zs:null,SA(),To>0&&nn&&nn.push(t),t}function lt(t,e,n,r,s,i){return PA(b(t,e,n,r,s,i,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function Di(t,e){return e.shapeFlag&6&&Us.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const kA=(...t)=>NA(...t),vc="__vInternal",Qy=({key:t})=>t??null,ol=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||ze(t)||Y(t)?{i:St,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qy(e),ref:e&&ol(e),scopeId:Oy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return a?(qd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),l.key!==l.key&&P("VNode created with invalid key (NaN). VNode type:",l.type),To>0&&!o&&nn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&nn.push(l),l}const Re=kA;function NA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ZR)&&(t||P(`Invalid vnode type when creating vnode: ${t}.`),t=on),Io(t)){const a=Ar(t,e,!0);return n&&qd(a,n),To>0&&!i&&nn&&(a.shapeFlag&6?nn[nn.indexOf(t)]=a:nn.push(a)),a.patchFlag|=-2,a}if(ev(t)&&(t=t.__vccOpts),e){e=OA(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=kd(a)),_e(l)&&(oh(l)&&!H(l)&&(l=Me({},l)),e.style=Pd(l))}const o=Le(t)?1:VR(t)?128:CA(t)?64:_e(t)?4:Y(t)?2:0;return o&4&&oh(t)&&(t=ne(t),P("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),b(t,e,n,r,s,o,i,!0)}function OA(t){return t?oh(t)||vc in t?Me({},t):t:null}function Ar(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?xA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qy(a),ref:e&&e.ref?n&&s?H(s)?s.concat(ol(e)):[s,ol(e)]:ol(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&H(o)?o.map(Yy):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yy(t){const e=Ar(t);return H(t.children)&&(e.children=t.children.map(Yy)),e}function DA(t=" ",e=0){return Re(Zo,null,t,e)}function Zt(t){return t==null||typeof t=="boolean"?Re(on):H(t)?Re(Ot,null,t.slice()):typeof t=="object"?lr(t):Re(Zo,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function qd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(vc in e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[DA(e)]):n=8);t.children=e,t.shapeFlag|=n}function xA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=kd([e.class,r.class]));else if(s==="style")e.style=Pd([e.style,r.style]);else if(Yo(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function yn(t,e,n,r=null){sn(t,e,7,[n,r])}const MA=jy();let LA=0;function VA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||MA,i={uid:LA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new J_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qy(r,s),emitsOptions:Ny(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=tA(i),i.root=e?e.root:i,i.emit=NR.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const Hd=()=>Ke||St;let Kd,xs,om="__VUE_INSTANCE_SETTERS__";(xs=vl()[om])||(xs=vl()[om]=[]),xs.push(t=>Ke=t),Kd=t=>{xs.length>1?xs.forEach(e=>e(t)):xs[0](t)};const si=t=>{Kd(t),t.scope.on()},as=()=>{Ke&&Ke.scope.off(),Kd(null)},FA=Dr("slot,component");function yh(t,e){const n=e.isNativeTag||z_;(FA(t)||n(t))&&P("Do not use built-in or reserved HTML elements as component id: "+t)}function Xy(t){return t.vnode.shapeFlag&4}let bo=!1;function UA(t,e=!1){bo=e;const{props:n,children:r}=t.vnode,s=Xy(t);dA(t,n,s,e),wA(t,r);const i=s?$A(t,e):void 0;return bo=!1,i}function $A(t,e){var n;const r=t.type;{if(r.name&&yh(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)yh(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)My(i[o])}r.compilerOptions&&Jy()&&P('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=py(new Proxy(t.ctx,$y)),nA(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?WA(t):null;si(t),As();const o=zn(s,t,0,[Hi(t.props),i]);if(Cs(),as(),Ad(o)){if(o.then(as,as),e)return o.then(a=>{am(t,a,e)}).catch(a=>{mc(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";P(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else am(t,o,e)}else Zy(t,e)}function am(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)?(Io(e)&&P("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=vy(e),rA(t)):e!==void 0&&P(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Zy(t,n)}let vh;const Jy=()=>!vh;function Zy(t,e,n){const r=t.type;if(!t.render){if(!e&&vh&&!r.render){const s=r.template||jd(t).template;if(s){$n(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Me(Me({isCustomElement:i,delimiters:a},o),l);r.render=vh(s,c),Bn(t,"compile")}}t.render=r.render||xt}{si(t),As();try{iA(t)}finally{Cs(),as()}}!r.render&&t.render===xt&&!e&&(r.template?P('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):P("Component is missing template or render function."))}function BA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Tl(),Et(t,"get","$attrs"),e[n]},set(){return P("setupContext.attrs is readonly."),!1},deleteProperty(){return P("setupContext.attrs is readonly."),!1}}))}function jA(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return Et(t,"get","$slots"),e[n]}}))}function WA(t){return Object.freeze({get attrs(){return BA(t)},get slots(){return jA(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&P("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(H(n)?r="array":ze(n)&&(r="ref")),r!=="object"&&P(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function Ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vy(py(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in os)return os[n](t)},has(e,n){return n in e||n in os}}))}const qA=/(?:^|[-_])(\w)/g,HA=t=>t.replace(qA,e=>e.toUpperCase()).replace(/[-_]/g,"");function zd(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function wc(t,e,n=!1){let r=zd(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?HA(r):n?"App":"Anonymous"}function ev(t){return Y(t)&&"__vccOpts"in t}const en=(t,e)=>cR(t,e,bo);function tv(t,e,n){const r=arguments.length;return r===2?_e(e)&&!H(e)?Io(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),Re(t,e,n))}const KA=Symbol.for("v-scx"),zA=()=>{{const t=kn(KA);return t||P("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function gu(t){return!!(t&&t.__v_isShallow)}function GA(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return _e(h)?h.__isVue?["div",t,"VueInstance"]:ze(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:rs(h)?["div",{},["span",t,gu(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${Rr(h)?" (readonly)":""}`]:Rr(h)?["div",{},["span",t,gu(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",ne(h.props))),h.setupState!==Te&&d.push(o("setup",h.setupState)),h.data!==Te&&d.push(o("data",ne(h.data)));const p=l(h,"computed");p&&d.push(o("computed",p));const g=l(h,"inject");return g&&d.push(o("injected",g)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=Me({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:_e(h)?["object",{object:d?ne(h):h}]:["span",n,String(h)]}function l(h,d){const p=h.type;if(Y(p))return;const g={};for(const E in h.ctx)c(p,E,d)&&(g[E]=h.ctx[E]);return g}function c(h,d,p){const g=h[p];if(H(g)&&g.includes(d)||_e(g)&&d in g||h.extends&&c(h.extends,d,p)||h.mixins&&h.mixins.some(E=>c(E,d,p)))return!0}function u(h){return gu(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const lm="3.3.6",QA="http://www.w3.org/2000/svg",Gr=typeof document<"u"?document:null,cm=Gr&&Gr.createElement("template"),YA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Gr.createElementNS(QA,t):Gr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Gr.createTextNode(t),createComment:t=>Gr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cm.innerHTML=r?`<svg>${t}</svg>`:t;const a=cm.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},XA=Symbol("_vtc");function JA(t,e,n){const r=t[XA];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ZA=Symbol("_vod");function e0(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&Eh(r,i,"");for(const i in n)Eh(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),ZA in t&&(r.display=i)}}const t0=/[^\\];\s*$/,um=/\s*!important$/;function Eh(t,e,n){if(H(n))n.forEach(r=>Eh(t,e,r));else if(n==null&&(n=""),t0.test(n)&&P(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=n0(t,e);um.test(n)?t.setProperty(Ir(r),n.replace(um,""),"important"):t[r]=n}}const hm=["Webkit","Moz","ms"],_u={};function n0(t,e){const n=_u[e];if(n)return n;let r=Mn(e);if(r!=="filter"&&r in t)return _u[e]=r;r=ds(r);for(let s=0;s<hm.length;s++){const i=hm[s]+r;if(i in t)return _u[e]=i}return e}const dm="http://www.w3.org/1999/xlink";function r0(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dm,e.slice(6,e.length)):t.setAttributeNS(dm,e,n);else{const i=Db(e);n==null||i&&!Y_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function s0(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Y_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||P(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function Qr(t,e,n,r){t.addEventListener(e,n,r)}function i0(t,e,n,r){t.removeEventListener(e,n,r)}const fm=Symbol("_vei");function o0(t,e,n,r,s=null){const i=t[fm]||(t[fm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=a0(e);if(r){const c=i[e]=u0(r,s);Qr(t,a,c,l)}else o&&(i0(t,a,o,l),i[e]=void 0)}}const pm=/(?:Once|Passive|Capture)$/;function a0(t){let e;if(pm.test(t)){e={};let r;for(;r=t.match(pm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ir(t.slice(2)),e]}let yu=0;const l0=Promise.resolve(),c0=()=>yu||(l0.then(()=>yu=0),yu=Date.now());function u0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(h0(r,n.value),e,5,[r])};return n.value=t,n.attached=c0(),n}function h0(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mm=/^on[a-z]/,d0=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?JA(t,r,s):e==="style"?e0(t,n,r):Yo(e)?gl(e)||o0(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f0(t,e,r,s))?s0(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),r0(t,e,r,s))};function f0(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&mm.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mm.test(e)&&Le(n)?!1:e in t}const Al=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Fs(e,n):e};function p0(t){t.target.composing=!0}function gm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ys=Symbol("_assign"),In={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ys]=Al(s);const i=r||s.props&&s.props.type==="number";Qr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=yl(a)),t[Ys](a)}),n&&Qr(t,"change",()=>{t.value=t.value.trim()}),e||(Qr(t,"compositionstart",p0),Qr(t,"compositionend",gm),Qr(t,"change",gm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ys]=Al(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&yl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=lc(e);Qr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?yl(Cl(o)):Cl(o));t[Ys](t.multiple?s?new Set(i):i:i[0])}),t[Ys]=Al(r)},mounted(t,{value:e}){_m(t,e)},beforeUpdate(t,e,n){t[Ys]=Al(n)},updated(t,{value:e}){_m(t,e)}};function _m(t,e){const n=t.multiple;if(n&&!H(e)&&!lc(e)){P(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8,-1)}.`);return}for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Cl(i);if(n)H(e)?i.selected=Mb(e,o)>-1:i.selected=e.has(o);else if(uc(Cl(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}function Cl(t){return"_value"in t?t._value:t.value}const m0=["ctrl","shift","alt","meta"],g0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>m0.some(n=>t[`${n}Key`]&&!e.includes(n))},ea=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=g0[e[s]];if(i&&i(n,e))return}return t(n,...r)},_0=Me({patchProp:d0},YA);let ym;function y0(){return ym||(ym=bA(_0))}const v0=(...t)=>{const e=y0().createApp(...t);E0(e),w0(e);const{mount:n}=e;return e.mount=r=>{const s=T0(r);if(!s)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function E0(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>kb(e)||Nb(e),writable:!1})}function w0(t){if(Jy()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){P("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return P(r),n},set(){P(r)}})}}function T0(t){if(Le(t)){const e=document.querySelector(t);return e||P(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&P('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function I0(){GA()}I0();function b0(){return nv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function nv(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const R0=typeof Proxy=="function",A0="devtools-plugin:setup",C0="plugin:settings:set";let Ms,Th;function S0(){var t;return Ms!==void 0||(typeof window<"u"&&window.performance?(Ms=!0,Th=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ms=!0,Th=global.perf_hooks.performance):Ms=!1),Ms}function P0(){return S0()?Th.now():Date.now()}class k0{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return P0()}},n&&n.on(C0,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function N0(t,e){const n=t,r=nv(),s=b0(),i=R0&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(A0,t,e);else{const o=i?new k0(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const jn=typeof window<"u";function O0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function vu(t,e){const n={};for(const r in e){const s=e[r];n[r]=jt(s)?s.map(t):t(s)}return n}const io=()=>{},jt=Array.isArray;function de(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const D0=/\/$/,x0=t=>t.replace(D0,"");function Eu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=V0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function M0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Em(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cr(e.matched[r],n.matched[s])&&rv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!L0(t[n],e[n]))return!1;return!0}function L0(t,e){return jt(t)?wm(t,e):jt(e)?wm(e,t):t===e}function wm(t,e){return jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function V0(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return de(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ro;(function(t){t.pop="pop",t.push="push"})(Ro||(Ro={}));var oo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oo||(oo={}));function F0(t){if(!t)if(jn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),x0(t)}const U0=/^[^#]+#/;function $0(t,e){return t.replace(U0,"#")+e}function B0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Tc=()=>({left:window.pageXOffset,top:window.pageYOffset});function j0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){de(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{de(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){de(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=B0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tm(t,e){return(history.state?history.state.position-e:-1)+t}const Ih=new Map;function W0(t,e){Ih.set(t,e)}function q0(t){const e=Ih.get(t);return Ih.delete(t),e}let H0=()=>location.protocol+"//"+location.host;function sv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),vm(l,"")}return vm(n,t)+r+s}function K0(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=sv(t,location),g=n.value,E=e.value;let v=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}v=E?d.position-E.position:0}else r(p);s.forEach(C=>{C(n.value,g,{delta:v,type:Ro.pop,direction:v?v>0?oo.forward:oo.back:oo.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:Tc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Im(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Tc():null}}function z0(t){const{history:e,location:n}=window,r={value:sv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:H0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){de("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ye({},e.state,Im(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ye({},s.value,e.state,{forward:l,scroll:Tc()});e.state||de(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=ye({},Im(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function G0(t){t=F0(t);const e=z0(t),n=K0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:$0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Q0(t){return typeof t=="string"||t&&typeof t=="object"}function iv(t){return typeof t=="string"||typeof t=="symbol"}const ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ov=Symbol("navigation failure");var bm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bm||(bm={}));const Y0={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${J0(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function ii(t,e){return ye(new Error(Y0[t](e)),{type:t,[ov]:!0},e)}function Un(t,e){return t instanceof Error&&ov in t&&(e==null||!!(t.type&e))}const X0=["params","query","hash"];function J0(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of X0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const Rm="[^/]+?",Z0={sensitive:!1,strict:!1,start:!0,end:!0},eC=/[.+*?^${}()[\]/\\]/g;function tC(t,e){const n=ye({},Z0,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(eC,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:E,optional:v,regexp:C}=d;i.push({name:g,repeatable:E,optional:v});const D=C||Rm;if(D!==Rm){p+=10;try{new RegExp(`(${D})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${g}" (${D}): `+K.message)}}let N=E?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(N=v&&c.length<2?`(?:/${N})`:"/"+N),v&&(N+="?"),s+=N,p+=20,v&&(p+=-8),E&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:E,optional:v}=p,C=g in c?c[g]:"";if(jt(C)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const D=jt(C)?C.join("/"):C;if(!D)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function nC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rC(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Am(r))return 1;if(Am(s))return-1}return s.length-r.length}function Am(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sC={type:0,value:""},iC=/[a-zA-Z0-9_]/;function oC(t){if(!t)return[[]];if(t==="/")return[[sC]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:iC.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function aC(t,e,n){const r=tC(oC(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&de(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lC(t,e){const n=[],r=new Map;e=Pm({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,g=cC(u);fC(g,h),g.aliasOf=d&&d.record;const E=Pm(e,u),v=[g];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of N)v.push(ye({},g,{components:d?d.record.components:g.components,path:K,aliasOf:d?d.record:g}))}let C,D;for(const N of v){const{path:K}=N;if(h&&K[0]!=="/"){const U=h.record.path,me=U[U.length-1]==="/"?"":"/";N.path=h.record.path+(K&&me+K)}if(N.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(C=aC(N,h,E),h&&K[0]==="/"&&pC(C,h),d?(d.alias.push(C),dC(d,C)):(D=D||C,D!==C&&D.alias.push(C),p&&u.name&&!Sm(C)&&o(u.name)),g.children){const U=g.children;for(let me=0;me<U.length;me++)i(U[me],C,d&&d.children[me])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return D?()=>{o(D)}:io}function o(u){if(iv(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&rC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!av(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sm(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},g,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ii(1,{location:u});{const D=Object.keys(u.params||{}).filter(N=>!d.keys.find(K=>K.name===N));D.length&&de(`Discarded invalid param(s) "${D.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}E=d.record.name,p=ye(Cm(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Cm(u.params,d.keys.map(D=>D.name))),g=d.stringify(p)}else if("path"in u)g=u.path,g.startsWith("/")||de(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(D=>D.re.test(g)),d&&(p=d.parse(g),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw ii(1,{location:u,currentLocation:h});E=d.record.name,p=ye({},h.params,u.params),g=d.stringify(p)}const v=[];let C=d;for(;C;)v.unshift(C.record),C=C.parent;return{name:E,path:g,params:p,matched:v,meta:hC(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Cm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hC(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Pm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function bh(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function dC(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(bh.bind(null,n)))return de(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(bh.bind(null,n)))return de(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function fC(t,e){e&&e.record.name&&!t.name&&!t.path&&de(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function pC(t,e){for(const n of e.keys)if(!t.keys.find(bh.bind(null,n)))return de(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function av(t,e){return e.children.some(n=>n===t||av(t,n))}const lv=/#/g,mC=/&/g,gC=/\//g,_C=/=/g,yC=/\?/g,cv=/\+/g,vC=/%5B/g,EC=/%5D/g,uv=/%5E/g,wC=/%60/g,hv=/%7B/g,TC=/%7C/g,dv=/%7D/g,IC=/%20/g;function Gd(t){return encodeURI(""+t).replace(TC,"|").replace(vC,"[").replace(EC,"]")}function bC(t){return Gd(t).replace(hv,"{").replace(dv,"}").replace(uv,"^")}function Rh(t){return Gd(t).replace(cv,"%2B").replace(IC,"+").replace(lv,"%23").replace(mC,"%26").replace(wC,"`").replace(hv,"{").replace(dv,"}").replace(uv,"^")}function RC(t){return Rh(t).replace(_C,"%3D")}function AC(t){return Gd(t).replace(lv,"%23").replace(yC,"%3F")}function CC(t){return t==null?"":AC(t).replace(gC,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{de(`Error decoding "${t}". Using original value`)}return""+t}function SC(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cv," "),o=i.indexOf("="),a=Ao(o<0?i:i.slice(0,o)),l=o<0?null:Ao(i.slice(o+1));if(a in e){let c=e[a];jt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function km(t){let e="";for(let n in t){const r=t[n];if(n=RC(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(r)?r.map(i=>i&&Rh(i)):[r&&Rh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function PC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const kC=Symbol("router view location matched"),Nm=Symbol("router view depth"),Qd=Symbol("router"),fv=Symbol("route location"),Ah=Symbol("router view location");function xi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ii(4,{from:n,to:e})):h instanceof Error?a(h):Q0(h)?a(ii(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,NC(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(d=>l._called?d:(de(h),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){de(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function NC(t,e,n){let r=0;return function(){r++===1&&de(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function wu(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&de(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw de(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){de(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,de(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(OC(a)){const c=(a.__vccOpts||a)[e];c&&s.push(cr(c,n,r,i,o))}else{let l=a();"catch"in l||(de(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=O0(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&cr(d,n,r,i,o)()}))}}}return s}function OC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Om(t){const e=kn(Qd),n=kn(fv),r=en(()=>e.resolve(Gs(t.to))),s=en(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Cr.bind(null,u));if(d>-1)return d;const p=Dm(l[c-2]);return c>1&&Dm(u)===p&&h[h.length-1].path!==p?h.findIndex(Cr.bind(null,l[c-2])):d}),i=en(()=>s.value>-1&&LC(n.params,r.value.params)),o=en(()=>s.value>-1&&s.value===n.matched.length-1&&rv(n.params,r.value.params));function a(l={}){return MC(l)?e[Gs(t.replace)?"replace":"push"](Gs(t.to)).catch(io):Promise.resolve()}if(jn){const l=Hd();if(l){const c={route:r.value,isActive:i.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),UR(()=>{c.route=r.value,c.isActive=i.value,c.isExactActive=o.value},{flush:"post"})}}return{route:r,href:en(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const DC=Ly({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Om,setup(t,{slots:e}){const n=fc(Om(t)),{options:r}=kn(Qd),s=en(()=>({[xm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xC=DC;function MC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!jt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xm=(t,e,n)=>t??e??n,VC=Ly({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){UC();const r=kn(Ah),s=en(()=>t.route||r.value),i=kn(Nm,0),o=en(()=>{let c=Gs(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=en(()=>s.value.matched[o.value]);sl(Nm,en(()=>o.value+1)),sl(kC,a),sl(Ah,s);const l=_y();return ro(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Cr(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Mm(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,v=tv(d,ye({},g,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:l}));if(jn&&v.ref){const C={depth:o.value,name:h.name,path:h.path,meta:h.meta};(jt(v.ref)?v.ref.map(N=>N.i):[v.ref.i]).forEach(N=>{N.__vrv_devtools=C})}return Mm(n.default,{Component:v,route:c})||v}}});function Mm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const FC=VC;function UC(){const t=Hd(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";de(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function Mi(t,e){const n=ye({},t,{matched:t.matched.map(r=>GC(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function La(t){return{_custom:{display:t}}}let $C=0;function BC(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=$C++;N0({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Mi(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:pv})}jt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=_v,g="";d.isExactActive?(p=gv,g="This is exactly active"):d.isActive&&(p=mv,g="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:p})}))}),ro(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:La("beforeEach"),from:Mi(h,"Current Location during this navigation"),to:Mi(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:La("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=La("❌")):p.status=La("✅"),p.from=Mi(h,"Current Location during this navigation"),p.to=Mi(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(Ev),u.filter&&(h=h.filter(d=>Ch(d,u.filter.toLowerCase()))),h.forEach(d=>vv(d,e.currentRoute.value)),u.rootNodes=h.map(yv)}let c;s.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:WC(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function jC(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function WC(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${jC(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const pv=15485081,mv=2450411,gv=8702998,qC=2282478,_v=16486972,HC=6710886;function yv(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:qC}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:_v}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:pv}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:gv}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:mv}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:HC});let r=n.__vd_id;return r==null&&(r=String(KC++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(yv)}}let KC=0;const zC=/^\/(.*)\/([a-z]*)$/;function vv(t,e){const n=e.matched.length&&Cr(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>Cr(r,t.record))),t.children.forEach(r=>vv(r,e))}function Ev(t){t.__vd_match=!1,t.children.forEach(Ev)}function Ch(t,e){const n=String(t.re).match(zC);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>Ch(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Ao(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>Ch(o,e))}function GC(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function QC(t){const e=lC(t.routes,t),n=t.parseQuery||SC,r=t.stringifyQuery||km,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=xi(),o=xi(),a=xi(),l=iR(ir);let c=ir;jn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vu.bind(null,y=>""+y),h=vu.bind(null,CC),d=vu.bind(null,Ao);function p(y,V){let F,$;return iv(y)?(F=e.getRecordMatcher(y),$=V):$=y,e.addRoute($,F)}function g(y){const V=e.getRecordMatcher(y);V?e.removeRoute(V):de(`Cannot remove non-existent route "${String(y)}"`)}function E(){return e.getRoutes().map(y=>y.record)}function v(y){return!!e.getRecordMatcher(y)}function C(y,V){if(V=ye({},V||l.value),typeof y=="string"){const m=Eu(n,y,V.path),_=e.resolve({path:m.path},V),T=s.createHref(m.fullPath);return T.startsWith("//")?de(`Location "${y}" resolved to "${T}". A resolved location cannot start with multiple slashes.`):_.matched.length||de(`No match found for location with path "${y}"`),ye(m,_,{params:d(_.params),hash:Ao(m.hash),redirectedFrom:void 0,href:T})}let F;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&de(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),F=ye({},y,{path:Eu(n,y.path,V.path).path});else{const m=ye({},y.params);for(const _ in m)m[_]==null&&delete m[_];F=ye({},y,{params:h(m)}),V.params=h(V.params)}const $=e.resolve(F,V),ce=y.hash||"";ce&&!ce.startsWith("#")&&de(`A \`hash\` should always start with the character "#". Replace "${ce}" with "#${ce}".`),$.params=u(d($.params));const Oe=M0(r,ye({},y,{hash:bC(ce),path:$.path})),f=s.createHref(Oe);return f.startsWith("//")?de(`Location "${y}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):$.matched.length||de(`No match found for location with path "${"path"in y?y.path:y}"`),ye({fullPath:Oe,hash:ce,query:r===km?PC(y.query):y.query||{}},$,{redirectedFrom:void 0,href:f})}function D(y){return typeof y=="string"?Eu(n,y,l.value.path):ye({},y)}function N(y,V){if(c!==y)return ii(8,{from:V,to:y})}function K(y){return xe(y)}function U(y){return K(ye(D(y),{replace:!0}))}function me(y){const V=y.matched[y.matched.length-1];if(V&&V.redirect){const{redirect:F}=V;let $=typeof F=="function"?F(y):F;if(typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=D($):{path:$},$.params={}),!("path"in $)&&!("name"in $))throw de(`Invalid redirect found:
${JSON.stringify($,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ye({query:y.query,hash:y.hash,params:"path"in $?{}:y.params},$)}}function xe(y,V){const F=c=C(y),$=l.value,ce=y.state,Oe=y.force,f=y.replace===!0,m=me(F);if(m)return xe(ye(D(m),{state:typeof m=="object"?ye({},ce,m.state):ce,force:Oe,replace:f}),V||F);const _=F;_.redirectedFrom=V;let T;return!Oe&&Em(r,$,F)&&(T=ii(16,{to:_,from:$}),tr($,$,!0,!1)),(T?Promise.resolve(T):tt(_,$)).catch(w=>Un(w)?Un(w,2)?w:jr(w):se(w,_,$)).then(w=>{if(w){if(Un(w,2))return Em(r,C(w.to),_)&&V&&(V._count=V._count?V._count+1:1)>30?(de(`Detected a possibly infinite redirection in a navigation guard when going from "${$.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):xe(ye({replace:f},D(w.to),{state:typeof w.to=="object"?ye({},ce,w.to.state):ce,force:Oe}),V||_)}else w=kt(_,$,!0,f,ce);return Yt(_,$,w),w})}function et(y,V){const F=N(y,V);return F?Promise.reject(F):Promise.resolve()}function Be(y){const V=nr.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(y):y()}function tt(y,V){let F;const[$,ce,Oe]=YC(y,V);F=wu($.reverse(),"beforeRouteLeave",y,V);for(const m of $)m.leaveGuards.forEach(_=>{F.push(cr(_,y,V))});const f=et.bind(null,y,V);return F.push(f),rr(F).then(()=>{F=[];for(const m of i.list())F.push(cr(m,y,V));return F.push(f),rr(F)}).then(()=>{F=wu(ce,"beforeRouteUpdate",y,V);for(const m of ce)m.updateGuards.forEach(_=>{F.push(cr(_,y,V))});return F.push(f),rr(F)}).then(()=>{F=[];for(const m of Oe)if(m.beforeEnter)if(jt(m.beforeEnter))for(const _ of m.beforeEnter)F.push(cr(_,y,V));else F.push(cr(m.beforeEnter,y,V));return F.push(f),rr(F)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),F=wu(Oe,"beforeRouteEnter",y,V),F.push(f),rr(F))).then(()=>{F=[];for(const m of o.list())F.push(cr(m,y,V));return F.push(f),rr(F)}).catch(m=>Un(m,8)?m:Promise.reject(m))}function Yt(y,V,F){a.list().forEach($=>Be(()=>$(y,V,F)))}function kt(y,V,F,$,ce){const Oe=N(y,V);if(Oe)return Oe;const f=V===ir,m=jn?history.state:{};F&&($||f?s.replace(y.fullPath,ye({scroll:f&&m&&m.scroll},ce)):s.push(y.fullPath,ce)),l.value=y,tr(y,V,F,f),jr()}let mn;function Sa(){mn||(mn=s.listen((y,V,F)=>{if(!Pa.listening)return;const $=C(y),ce=me($);if(ce){xe(ye(ce,{replace:!0}),$).catch(io);return}c=$;const Oe=l.value;jn&&W0(Tm(Oe.fullPath,F.delta),Tc()),tt($,Oe).catch(f=>Un(f,12)?f:Un(f,2)?(xe(f.to,$).then(m=>{Un(m,20)&&!F.delta&&F.type===Ro.pop&&s.go(-1,!1)}).catch(io),Promise.reject()):(F.delta&&s.go(-F.delta,!1),se(f,$,Oe))).then(f=>{f=f||kt($,Oe,!1),f&&(F.delta&&!Un(f,8)?s.go(-F.delta,!1):F.type===Ro.pop&&Un(f,20)&&s.go(-1,!1)),Yt($,Oe,f)}).catch(io)}))}let qt=xi(),nt=xi(),re;function se(y,V,F){jr(y);const $=nt.list();return $.length?$.forEach(ce=>ce(y,V,F)):(de("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function Ht(){return re&&l.value!==ir?Promise.resolve():new Promise((y,V)=>{qt.add([y,V])})}function jr(y){return re||(re=!y,Sa(),qt.list().forEach(([V,F])=>y?F(y):V()),qt.reset()),y}function tr(y,V,F,$){const{scrollBehavior:ce}=t;if(!jn||!ce)return Promise.resolve();const Oe=!F&&q0(Tm(y.fullPath,0))||($||!F)&&history.state&&history.state.scroll||null;return Ty().then(()=>ce(y,V,Oe)).then(f=>f&&j0(f)).catch(f=>se(f,y,V))}const gn=y=>s.go(y);let Kt;const nr=new Set,Pa={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:v,getRoutes:E,resolve:C,options:t,push:K,replace:U,go:gn,back:()=>gn(-1),forward:()=>gn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:Ht,install(y){const V=this;y.component("RouterLink",xC),y.component("RouterView",FC),y.config.globalProperties.$router=V,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Gs(l)}),jn&&!Kt&&l.value===ir&&(Kt=!0,K(s.location).catch(ce=>{de("Unexpected error when starting the router:",ce)}));const F={};for(const ce in ir)Object.defineProperty(F,ce,{get:()=>l.value[ce],enumerable:!0});y.provide(Qd,V),y.provide(fv,dy(F)),y.provide(Ah,l);const $=y.unmount;nr.add(y),y.unmount=function(){nr.delete(y),nr.size<1&&(c=ir,mn&&mn(),mn=null,l.value=ir,Kt=!1,re=!1),$()},jn&&BC(y,V,e)}};function rr(y){return y.reduce((V,F)=>V.then(()=>Be(F)),Promise.resolve())}return Pa}function YC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Cr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Cr(c,l))||s.push(l))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw yi(e)},yi=function(t){return new Error("Firebase Database ("+wv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new JC;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iv=function(t){const e=Tv(t);return Ic.encodeByteArray(e,!0)},Sl=function(t){return Iv(t).replace(/\./g,"")},Pl=function(t){try{return Ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return bv(void 0,t)}function bv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eS(n)||(t[n]=bv(t[n],e[n]));return t}function eS(t){return t!=="__proto__"}/**
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
 */function tS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nS=()=>tS().__FIREBASE_DEFAULTS__,rS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pl(t[1]);return e&&JSON.parse(e)},bc=()=>{try{return nS()||rS()||sS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rv=t=>{var e,n;return(n=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Av=t=>{const e=Rv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cv=()=>{var t;return(t=bc())===null||t===void 0?void 0:t.config},Sv=t=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Pv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sl(JSON.stringify(n)),Sl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function iS(){var t;const e=(t=bc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aS(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nv(){return wv.NODE_ADMIN===!0}function Ov(){try{return typeof indexedDB=="object"}catch{return!1}}function lS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cS,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vi.prototype.create)}}class vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?uS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,a,r)}}function uS(t,e){return t.replace(hS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Dv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=So(Pl(i[0])||""),n=So(Pl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},dS=function(t){const e=Dv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fS=function(t){const e=Dv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Nl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lm(i)&&Lm(o)){if(!Nl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function mS(t,e){const n=new gS(t,e);return n.subscribe.bind(n)}class gS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_S(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tu),s.error===void 0&&(s.error=Tu),s.complete===void 0&&(s.complete=Tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _S(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tu(){}function yS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,M(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Rc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Kr="[DEFAULT]";/**
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
 */class ES{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Co;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TS(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wS(t){return t===Kr?void 0:t}function TS(t){return t.instantiationMode==="EAGER"}/**
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
 */class IS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ES(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const bS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},RS=ae.INFO,AS={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},CS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=AS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ta{constructor(e){this.name=e,this._logLevel=RS,this._logHandler=CS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const SS=(t,e)=>e.some(n=>t instanceof n);let Vm,Fm;function PS(){return Vm||(Vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kS(){return Fm||(Fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xv=new WeakMap,Ph=new WeakMap,Mv=new WeakMap,Iu=new WeakMap,Xd=new WeakMap;function NS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xv.set(n,t)}).catch(()=>{}),Xd.set(e,t),e}function OS(t){if(Ph.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ph.set(t,e)}let kh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DS(t){kh=t(kh)}function xS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bu(this),e,...n);return Mv.set(r,e.sort?e.sort():[e]),yr(r)}:kS().includes(t)?function(...e){return t.apply(bu(this),e),yr(xv.get(this))}:function(...e){return yr(t.apply(bu(this),e))}}function MS(t){return typeof t=="function"?xS(t):(t instanceof IDBTransaction&&OS(t),SS(t,PS())?new Proxy(t,kh):t)}function yr(t){if(t instanceof IDBRequest)return NS(t);if(Iu.has(t))return Iu.get(t);const e=MS(t);return e!==t&&(Iu.set(t,e),Xd.set(e,t)),e}const bu=t=>Xd.get(t);function LS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const VS=["get","getKey","getAll","getAllKeys","count"],FS=["put","add","delete","clear"],Ru=new Map;function Um(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ru.get(e))return Ru.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=FS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||VS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ru.set(e,i),i}DS(t=>({...t,get:(e,n,r)=>Um(e,n)||t.get(e,n,r),has:(e,n)=>!!Um(e,n)||t.has(e,n)}));/**
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
 */class US{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($S(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $S(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nh="@firebase/app",$m="0.9.20";/**
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
 */const ms=new ta("@firebase/app"),BS="@firebase/app-compat",jS="@firebase/analytics-compat",WS="@firebase/analytics",qS="@firebase/app-check-compat",HS="@firebase/app-check",KS="@firebase/auth",zS="@firebase/auth-compat",GS="@firebase/database",QS="@firebase/database-compat",YS="@firebase/functions",XS="@firebase/functions-compat",JS="@firebase/installations",ZS="@firebase/installations-compat",eP="@firebase/messaging",tP="@firebase/messaging-compat",nP="@firebase/performance",rP="@firebase/performance-compat",sP="@firebase/remote-config",iP="@firebase/remote-config-compat",oP="@firebase/storage",aP="@firebase/storage-compat",lP="@firebase/firestore",cP="@firebase/firestore-compat",uP="firebase",hP="10.5.0";/**
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
 */const Oh="[DEFAULT]",dP={[Nh]:"fire-core",[BS]:"fire-core-compat",[WS]:"fire-analytics",[jS]:"fire-analytics-compat",[HS]:"fire-app-check",[qS]:"fire-app-check-compat",[KS]:"fire-auth",[zS]:"fire-auth-compat",[GS]:"fire-rtdb",[QS]:"fire-rtdb-compat",[YS]:"fire-fn",[XS]:"fire-fn-compat",[JS]:"fire-iid",[ZS]:"fire-iid-compat",[eP]:"fire-fcm",[tP]:"fire-fcm-compat",[nP]:"fire-perf",[rP]:"fire-perf-compat",[sP]:"fire-rc",[iP]:"fire-rc-compat",[oP]:"fire-gcs",[aP]:"fire-gcs-compat",[lP]:"fire-fst",[cP]:"fire-fst-compat","fire-js":"fire-js",[uP]:"fire-js-all"};/**
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
 */const Ol=new Map,Dh=new Map;function fP(t,e){try{t.container.addComponent(e)}catch(n){ms.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Dh.has(e))return ms.debug(`There were multiple attempts to register component ${e}.`),!1;Dh.set(e,t);for(const n of Ol.values())fP(n,t);return!0}function Ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new vi("app","Firebase",pP);/**
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
 */class mP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Mr=hP;function Lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=Cv()),!n)throw vr.create("no-options");const i=Ol.get(s);if(i){if(Nl(n,i.options)&&Nl(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new IS(s);for(const l of Dh.values())o.addComponent(l);const a=new mP(n,r,o);return Ol.set(s,a),a}function Cc(t=Oh){const e=Ol.get(t);if(!e&&t===Oh&&Cv())return Lv();if(!e)throw vr.create("no-app",{appName:t});return e}function $t(t,e,n){var r;let s=(r=dP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ms.warn(a.join(" "));return}Ln(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const gP="firebase-heartbeat-database",_P=1,Po="firebase-heartbeat-store";let Au=null;function Vv(){return Au||(Au=LS(gP,_P,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Po)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Au}async function yP(t){try{return await(await Vv()).transaction(Po).objectStore(Po).get(Fv(t))}catch(e){if(e instanceof Fn)ms.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ms.warn(n.message)}}}async function Bm(t,e){try{const r=(await Vv()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,Fv(t)),await r.done}catch(n){if(n instanceof Fn)ms.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ms.warn(r.message)}}}function Fv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vP=1024,EP=30*24*60*60*1e3;class wP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=EP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jm(),{heartbeatsToSend:n,unsentEntries:r}=TP(this._heartbeatsCache.heartbeats),s=Sl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jm(){return new Date().toISOString().substring(0,10)}function TP(t,e=vP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ov()?lS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wm(t){return Sl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bP(t){Ln(new cn("platform-logger",e=>new US(e),"PRIVATE")),Ln(new cn("heartbeat",e=>new wP(e),"PRIVATE")),$t(Nh,$m,t),$t(Nh,$m,"esm2017"),$t("fire-js","")}bP("");function Jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function qm(t){return t!==void 0&&t.enterprise!==void 0}class RP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AP=Uv,$v=new vi("auth","Firebase",Uv());/**
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
 */const Dl=new ta("@firebase/auth");function CP(t,...e){Dl.logLevel<=ae.WARN&&Dl.warn(`Auth (${Mr}): ${t}`,...e)}function al(t,...e){Dl.logLevel<=ae.ERROR&&Dl.error(`Auth (${Mr}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Zd(t,...e)}function Nn(t,...e){return Zd(t,...e)}function SP(t,e,n){const r=Object.assign(Object.assign({},AP()),{[e]:n});return new vi("auth","Firebase",r).create(e,{appName:t.name})}function Zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $v.create(t,...e)}function Q(t,e,...n){if(!t)throw Zd(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function Qn(t,e){t||Wn(e)}/**
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
 */function xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PP(){return Hm()==="http:"||Hm()==="https:"}function Hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PP()||oS()||"connection"in navigator)?navigator.onLine:!0}function NP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||kv()}get(){return kP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ef(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DP=new na(3e4,6e4);function Lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,r,s={}){return jv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ei(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Bv.fetch()(Wv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function jv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OP),e);try{const s=new xP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Va(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw SP(t,u,c);un(t,u)}}catch(s){if(s instanceof Fn)throw s;un(t,"network-request-failed",{message:String(s)})}}async function ra(t,e,n,r,s={}){const i=await Vr(t,e,n,r,s);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ef(t.config,s):`${t.config.apiScheme}://${s}`}class xP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),DP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nn(t,e,r);return s.customData._tokenResponse=n,s}async function MP(t,e){return Vr(t,"GET","/v2/recaptchaConfig",Lr(t,e))}/**
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
 */async function LP(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function VP(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FP(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=tf(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ao(Cu(s.auth_time)),issuedAtTime:ao(Cu(s.iat)),expirationTime:ao(Cu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cu(t){return Number(t)*1e3}function tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pl(n);return s?JSON.parse(s):(al("Failed to decode base64 JWT payload"),null)}catch(s){return al("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function UP(t){const e=tf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&$P(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ko(t,VP(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qP(i.providerUserInfo):[],a=WP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function jP(t){const e=$e(t);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qP(t){return t.map(e=>{var{providerId:n}=e,r=Jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HP(t,e){const n=await jv(t,{},async()=>{const r=Ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Wv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await HP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new No;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
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
 */function or(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ls{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FP(this,e)}reload(){return jP(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ko(this,LP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:K,isAnonymous:U,providerData:me,stsTokenManager:xe}=n;Q(N&&xe,e,"internal-error");const et=No.fromJSON(this.name,xe);Q(typeof N=="string",e,"internal-error"),or(h,e.name),or(d,e.name),Q(typeof K=="boolean",e,"internal-error"),Q(typeof U=="boolean",e,"internal-error"),or(p,e.name),or(g,e.name),or(E,e.name),or(v,e.name),or(C,e.name),or(D,e.name);const Be=new ls({uid:N,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:et,createdAt:C,lastLoginAt:D});return me&&Array.isArray(me)&&(Be.providerData=me.map(tt=>Object.assign({},tt))),v&&(Be._redirectEventId=v),Be}static async _fromIdTokenResponse(e,n,r=!1){const s=new No;s.updateFromServerResponse(n);const i=new ls({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xl(i),i}}/**
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
 */const Km=new Map;function qn(t){Qn(t instanceof Function,"Expected a class definition");let e=Km.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Km.set(t,e),e)}/**
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
 */class Hv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hv.type="NONE";const zm=Hv;/**
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
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ll(this.userKey,s.apiKey,i),this.fullPersistenceKey=ll("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(qn(zm),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||qn(zm);const o=ll(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ls._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Xs(i,e,r))}}/**
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
 */function Gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yv(e))return"Blackberry";if(Xv(e))return"Webos";if(nf(e))return"Safari";if((e.includes("chrome/")||zv(e))&&!e.includes("edge/"))return"Chrome";if(Qv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kv(t=wt()){return/firefox\//i.test(t)}function nf(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zv(t=wt()){return/crios\//i.test(t)}function Gv(t=wt()){return/iemobile/i.test(t)}function Qv(t=wt()){return/android/i.test(t)}function Yv(t=wt()){return/blackberry/i.test(t)}function Xv(t=wt()){return/webos/i.test(t)}function Sc(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KP(t=wt()){var e;return Sc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zP(){return aS()&&document.documentMode===10}function Jv(t=wt()){return Sc(t)||Qv(t)||Xv(t)||Yv(t)||/windows phone/i.test(t)||Gv(t)}function GP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Zv(t,e=[]){let n;switch(t){case"Browser":n=Gm(wt());break;case"Worker":n=`${Gm(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${r}`}/**
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
 */class QP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YP(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",Lr(t,e))}/**
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
 */const XP=6;class JP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ZP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qm(this),this.idTokenSubscription=new Qm(this),this.beforeStateQueue=new QP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YP(this),n=new JP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fr(t){return $e(t)}class Qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=mS(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ek(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ek().appendChild(r)})}function tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nk="https://www.google.com/recaptcha/enterprise.js?render=",rk="recaptcha-enterprise",sk="NO_RECAPTCHA";class ik{constructor(e){this.type=rk,this.auth=Fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{MP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new RP(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;qm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(sk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&qm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eE(nk+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ai(t,e,n,r=!1){const s=new ik(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function ok(t,e){const n=Ac(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Nl(i,e??{}))return s;un(s,"already-initialized")}return n.initialize({options:e})}function ak(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lk(t,e,n){const r=Fr(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=tE(e),{host:o,port:a}=ck(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||uk()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ck(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ym(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ym(o)}}}function Ym(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function hk(t,e){return Vr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Su(t,e){return ra(t,"POST","/v1/accounts:signInWithPassword",Lr(t,e))}async function dk(t,e){return Vr(t,"POST","/v1/accounts:sendOobCode",Lr(t,e))}async function Pu(t,e){return dk(t,e)}/**
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
 */async function fk(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}async function pk(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}/**
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
 */class Oo extends rf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ai(e,r,"signInWithPassword");return Su(e,s)}else return Su(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ai(e,r,"signInWithPassword");return Su(e,i)}else return Promise.reject(s)});case"emailLink":return fk(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pk(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Js(t,e){return ra(t,"POST","/v1/accounts:signInWithIdp",Lr(t,e))}/**
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
 */const mk="http://localhost";class gs extends rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:mk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ei(n)}return e}}/**
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
 */function gk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _k(t){const e=Gi(Qi(t)).link,n=e?Gi(Qi(e)).deep_link_id:null,r=Gi(Qi(t)).deep_link_id;return(r?Gi(Qi(r)).link:null)||r||n||e||t}class sf{constructor(e){var n,r,s,i,o,a;const l=Gi(Qi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=gk((s=l.mode)!==null&&s!==void 0?s:null);Q(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_k(e);try{return new sf(n)}catch{return null}}}/**
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
 */class wi{constructor(){this.providerId=wi.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sf.parseLink(n);return Q(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}wi.PROVIDER_ID="password";wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class nE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sa extends nE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends sa{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class dr extends sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.GOOGLE_SIGN_IN_METHOD="google.com";dr.PROVIDER_ID="google.com";/**
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
 */class fr extends sa{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class pr extends sa{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */async function ku(t,e){return ra(t,"POST","/v1/accounts:signUp",Lr(t,e))}/**
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
 */class _s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ls._fromIdTokenResponse(e,r,s),o=Xm(r);return new _s({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xm(r);return new _s({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ml extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ml.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ml(e,n,r,s)}}function rE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ml._fromErrorAndOperation(t,i,e,r):i})}async function yk(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _s._forOperation(t,"link",r)}/**
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
 */async function vk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ko(t,rE(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=tf(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),_s._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&un(r,"user-mismatch"),i}}/**
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
 */async function sE(t,e,n=!1){const r="signIn",s=await rE(t,r,e),i=await _s._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ek(t,e){return sE(Fr(t),e)}/**
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
 */function Nu(t,e,n){var r;Q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function iE(t){const e=Fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wk(t,e,n){var r;const s=Fr(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ai(s,i,"getOobCode",!0);n&&Nu(s,o,n),await Pu(s,o)}else n&&Nu(s,i,n),await Pu(s,i).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ai(s,i,"getOobCode",!0);n&&Nu(s,a,n),await Pu(s,a)}else return Promise.reject(o)})}async function Tk(t,e,n){var r;const s=Fr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await ai(s,i,"signUpPassword");o=ku(s,c)}else o=ku(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ai(s,i,"signUpPassword");return ku(s,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&iE(t),c}),l=await _s._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function Ik(t,e,n){return Ek($e(t),wi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(t),r})}function oE(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function bk(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const Ll="__sak";/**
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
 */class aE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ll,"1"),this.storage.removeItem(Ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Rk(){const t=wt();return nf(t)||Sc(t)}const Ak=1e3,Ck=10;class lE extends aE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rk()&&GP(),this.fallbackToPolling=Jv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ck):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lE.type="LOCAL";const Sk=lE;/**
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
 */class cE extends aE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cE.type="SESSION";const uE=cE;/**
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
 */function Pk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Pk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */function of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=of("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function On(){return window}function Nk(t){On().location.href=t}/**
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
 */function hE(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function Ok(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xk(){return hE()?self:null}/**
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
 */const dE="firebaseLocalStorageDb",Mk=1,Vl="firebaseLocalStorage",fE="fbase_key";class ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Vl],e?"readwrite":"readonly").objectStore(Vl)}function Lk(){const t=indexedDB.deleteDatabase(dE);return new ia(t).toPromise()}function Mh(){const t=indexedDB.open(dE,Mk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vl,{keyPath:fE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vl)?e(r):(r.close(),await Lk(),e(await Mh()))})})}async function Jm(t,e,n){const r=kc(t,!0).put({[fE]:e,value:n});return new ia(r).toPromise()}async function Vk(t,e){const n=kc(t,!1).get(e),r=await new ia(n).toPromise();return r===void 0?null:r.value}function Zm(t,e){const n=kc(t,!0).delete(e);return new ia(n).toPromise()}const Fk=800,Uk=3;class pE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Uk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(xk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ok(),!this.activeServiceWorker)return;this.sender=new kk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mh();return await Jm(e,Ll,"1"),await Zm(e,Ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kc(s,!1).getAll();return new ia(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pE.type="LOCAL";const $k=pE;new na(3e4,6e4);/**
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
 */function Bk(t,e){return e?qn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class af extends rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jk(t){return sE(t.auth,new af(t),t.bypassAuthState)}function Wk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),vk(n,new af(t),t.bypassAuthState)}async function qk(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),yk(n,new af(t),t.bypassAuthState)}/**
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
 */class mE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jk;case"linkViaPopup":case"linkViaRedirect":return qk;case"reauthViaPopup":case"reauthViaRedirect":return Wk;default:un(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hk=new na(2e3,1e4);class Ws extends mE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ws.currentPopupAction&&Ws.currentPopupAction.cancel(),Ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hk.get())};e()}}Ws.currentPopupAction=null;/**
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
 */const Kk="pendingRedirect",cl=new Map;class zk extends mE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await Gk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gk(t,e){const n=Xk(e),r=Yk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qk(t,e){cl.set(t._key(),e)}function Yk(t){return qn(t._redirectPersistence)}function Xk(t){return ll(Kk,t.config.apiKey,t.name)}async function Jk(t,e,n=!1){const r=Fr(t),s=Bk(r,e),o=await new zk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Zk=10*60*1e3;class eN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(eg(e))}saveEventToCache(e){this.cachedEventUids.add(eg(e)),this.lastProcessedEventTime=Date.now()}}function eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gE(t);default:return!1}}/**
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
 */async function nN(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
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
 */const rN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sN=/^https?/;async function iN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nN(t);for(const n of e)try{if(oN(n))return}catch{}un(t,"unauthorized-domain")}function oN(t){const e=xh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sN.test(n))return!1;if(rN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const aN=new na(3e4,6e4);function tg(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lN(t){return new Promise((e,n)=>{var r,s,i;function o(){tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tg(),n(Nn(t,"network-request-failed"))},timeout:aN.get()})}if(!((s=(r=On().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=On().gapi)===null||i===void 0)&&i.load)o();else{const a=tk("iframefcb");return On()[a]=()=>{gapi.load?o():n(Nn(t,"network-request-failed"))},eE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ul=null,e})}let ul=null;function cN(t){return ul=ul||lN(t),ul}/**
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
 */const uN=new na(5e3,15e3),hN="__/auth/iframe",dN="emulator/auth/iframe",fN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mN(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,dN):`https://${t.config.authDomain}/${hN}`,r={apiKey:e.apiKey,appName:t.name,v:Mr},s=pN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ei(r).slice(1)}`}async function gN(t){const e=await cN(t),n=On().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:mN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Nn(t,"network-request-failed"),a=On().setTimeout(()=>{i(o)},uN.get());function l(){On().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const _N={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yN=500,vN=600,EN="_blank",wN="http://localhost";class ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TN(t,e,n,r=yN,s=vN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_N),{width:r.toString(),height:s.toString(),top:i,left:o}),c=wt().toLowerCase();n&&(a=zv(c)?EN:n),Kv(c)&&(e=e||wN,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(KP(c)&&a!=="_self")return IN(e||"",a),new ng(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new ng(h)}function IN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bN="__/auth/handler",RN="emulator/auth/handler",AN=encodeURIComponent("fac");async function rg(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mr,eventId:s};if(e instanceof nE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof sa){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${AN}=${encodeURIComponent(l)}`:"";return`${CN(t)}?${Ei(a).slice(1)}${c}`}function CN({config:t}){return t.emulator?ef(t,RN):`https://${t.authDomain}/${bN}`}/**
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
 */const Ou="webStorageSupport";class SN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uE,this._completeRedirectFn=Jk,this._overrideRedirectResult=Qk}async _openPopup(e,n,r,s){var i;Qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rg(e,n,r,xh(),s);return TN(e,o,of())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rg(e,n,r,xh(),s);return Nk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gN(e),r=new eN(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ou,{type:Ou},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ou];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jv()||nf()||Sc()}}const PN=SN;var sg="@firebase/auth",ig="1.3.0";/**
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
 */class kN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ON(t){Ln(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zv(t)},c=new ZP(r,s,i,l);return ak(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new cn("auth-internal",e=>{const n=Fr(e.getProvider("auth").getImmediate());return(r=>new kN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(sg,ig,NN(t)),$t(sg,ig,"esm2017")}/**
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
 */const DN=5*60,xN=Sv("authIdTokenMaxAge")||DN;let og=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xN)return;const s=n==null?void 0:n.token;og!==s&&(og=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _E(t=Cc()){const e=Ac(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ok(t,{popupRedirectResolver:PN,persistence:[$k,Sk,uE]}),r=Sv("authTokenSyncURL");if(r){const i=MN(r);bk(n,i,()=>i(n.currentUser)),oE(n,o=>i(o))}const s=Rv("auth");return s&&lk(n,`http://${s}`),n}ON("Browser");/**
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
 */const LN=new Map,VN={activated:!1,tokenObservers:[]};function hn(t){return LN.get(t)||Object.assign({},VN)}const ag={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class FN{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Co,await UN(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Co,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function UN(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const $N={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Fl=new vi("appCheck","AppCheck",$N);function yE(t){if(!hn(t).activated)throw Fl.create("use-before-activation",{appName:t.name})}/**
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
 */const BN="firebase-app-check-database",jN=1,Lh="firebase-app-check-store";let Fa=null;function WN(){return Fa||(Fa=new Promise((t,e)=>{try{const n=indexedDB.open(BN,jN);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Fl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Lh,{keyPath:"compositeKey"})}}}catch(n){e(Fl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Fa)}function qN(t,e){return HN(KN(t),e)}async function HN(t,e){const r=(await WN()).transaction(Lh,"readwrite"),i=r.objectStore(Lh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Fl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function KN(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Vh=new ta("@firebase/app-check");function lg(t,e){return Ov()?qN(t,e).catch(n=>{Vh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const zN={error:"UNKNOWN_ERROR"};function GN(t){return Ic.encodeString(JSON.stringify(t),!1)}async function Fh(t,e=!1){const n=t.app;yE(n);const r=hn(n);let s=r.token,i;if(s&&!Yi(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(Yi(l)?s=l:await lg(n,void 0))}if(!e&&s&&Yi(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await hn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Vh.warn(l.message):Vh.error(l),i=l}let a;return s?i?Yi(s)?a={token:s.token,internalError:i}:a=ug(i):(a={token:s.token},r.token=s,await lg(n,s)):a=ug(i),o&&JN(n,a),a}async function QN(t){const e=t.app;yE(e);const{provider:n}=hn(e);{const{token:r}=await n.getToken();return{token:r}}}function YN(t,e,n,r){const{app:s}=t,i=hn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Yi(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),cg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>cg(t))}function vE(t,e){const n=hn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function cg(t){const{app:e}=t,n=hn(e);let r=n.tokenRefresher;r||(r=XN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function XN(t){const{app:e}=t;return new FN(async()=>{const n=hn(e);let r;if(n.token?r=await Fh(t,!0):r=await Fh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=hn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},ag.RETRIAL_MIN_WAIT,ag.RETRIAL_MAX_WAIT)}function JN(t,e){const n=hn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Yi(t){return t.expireTimeMillis-Date.now()>0}function ug(t){return{token:GN(zN),error:t}}/**
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
 */class ZN{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=hn(this.app);for(const n of e)vE(this.app,n.next);return Promise.resolve()}}function eO(t,e){return new ZN(t,e)}function tO(t){return{getToken:e=>Fh(t,e),getLimitedUseToken:()=>QN(t),addTokenListener:e=>YN(t,"INTERNAL",e),removeTokenListener:e=>vE(t.app,e)}}const nO="@firebase/app-check",rO="0.8.0",sO="app-check",hg="app-check-internal";function iO(){Ln(new cn(sO,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return eO(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(hg).initialize()})),Ln(new cn(hg,t=>{const e=t.getProvider("app-check").getImmediate();return tO(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),$t(nO,rO)}iO();var oO="firebase",aO="10.5.0";/**
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
 */$t(oO,aO,"app");const EE=Symbol("firebaseApp");function lO(t){return Hd()&&kn(EE,null)||Cc(t)}const Ua=new WeakMap;function cO(t,e){if(!Ua.has(t)){const n=Lb(!0);Ua.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Ua.delete(t)}}return Ua.get(t)}const uO=new WeakMap,$a=new WeakMap;function hO(t){const e=lO(t);if(!$a.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{$a.set(e,i),n(i.value)}];$a.set(e,s)}return $a.get(e)}function dO(t,e){const n=_E(e);oE(n,r=>{const s=hO();t.value=r,Array.isArray(s)&&s[1](t)})}const dg="@firebase/database",fg="1.0.1";/**
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
 */let wE="";function fO(t){wE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:So(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pO(e)}}catch{}return new mO},Xr=TE("localStorage"),Uh=TE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new ta("@firebase/database"),gO=function(){let t=1;return function(){return t++}}(),IE=function(t){const e=vS(t),n=new pS;n.update(e);const r=n.digest();return Ic.encodeByteArray(r)},oa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=oa.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let cs=null,pg=!0;const _O=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zs.logLevel=ae.VERBOSE,cs=Zs.log.bind(Zs),e&&Uh.set("logging_enabled",!0)):typeof t=="function"?cs=t:(cs=null,Uh.remove("logging_enabled"))},ft=function(...t){if(pg===!0&&(pg=!1,cs===null&&Uh.get("logging_enabled")===!0&&_O(!0)),cs){const e=oa.apply(null,t);cs(e)}},aa=function(t){return function(...e){ft(t,...e)}},$h=function(...t){const e="FIREBASE INTERNAL ERROR: "+oa(...t);Zs.error(e)},ys=function(...t){const e=`FIREBASE FATAL ERROR: ${oa(...t)}`;throw Zs.error(e),new Error(e)},Bt=function(...t){const e="FIREBASE WARNING: "+oa(...t);Zs.warn(e)},yO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},li="[MIN_NAME]",vs="[MAX_NAME]",Ti=function(t,e){if(t===e)return 0;if(t===li||e===vs)return-1;if(e===li||t===vs)return 1;{const n=mg(t),r=mg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},EO=function(t,e){return t===e?0:t<e?-1:1},Li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},lf=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=lf(t[e[r]]);return n+="}",n},RE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const AE=function(t){M(!bE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},wO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},IO=new RegExp("^-?(0*)\\d{1,10}$"),bO=-2147483648,RO=2147483647,mg=function(t){if(IO.test(t)){const e=Number(t);if(e>=bO&&e<=RO)return e}return null},la=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},AO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class CO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bt(e)}}class Bh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="5",CE="v",SE="s",PE="r",kE="f",NE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,OE="ls",DE="p",jh="ac",xE="websocket",ME="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function LE(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let r;if(e===xE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ME)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kO(t)&&(n.ns=t.namespace);const s=[];return Qt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.counters_={}}incrementCounter(e,n=1){er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={},xu={};function uf(t){const e=t.toString();return Du[e]||(Du[e]=new NO),Du[e]}function OO(t,e){const n=t.toString();return xu[n]||(xu[n]=e()),xu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&la(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="start",xO="close",MO="pLPCommand",LO="pRTLPCB",VE="id",FE="pw",UE="ser",VO="cb",FO="seg",UO="ts",$O="d",BO="dframe",$E=1870,BE=30,jO=$E-BE,WO=25e3,qO=3e4;class qs{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=aa(e),this.stats_=uf(n),this.urlFn=l=>(this.appCheckToken&&(l[jh]=this.appCheckToken),LE(n,ME,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qO)),vO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hf((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gg)this.id=a,this.password=l;else if(o===xO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gg]="t",r[UE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[VO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[CE]=cf,this.transportSessionId&&(r[SE]=this.transportSessionId),this.lastSessionId&&(r[OE]=this.lastSessionId),this.applicationId&&(r[DE]=this.applicationId),this.appCheckToken&&(r[jh]=this.appCheckToken),typeof location<"u"&&location.hostname&&NE.test(location.hostname)&&(r[PE]=kE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qs.forceAllow_=!0}static forceDisallow(){qs.forceDisallow_=!0}static isAvailable(){return qs.forceAllow_?!0:!qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wO()&&!TO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iv(n),s=RE(r,jO);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BO]="t",r[VE]=e,r[FE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gO(),window[MO+this.uniqueCallbackIdentifier]=e,window[LO+this.uniqueCallbackIdentifier]=n,this.myIFrame=hf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ft("frame writing exception"),a.stack&&ft(a.stack),ft(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[VE]=this.myID,e[FE]=this.myPW,e[UE]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+BE+r.length<=$E;){const o=this.pendingSegs.shift();r=r+"&"+FO+s+"="+o.seg+"&"+UO+s+"="+o.ts+"&"+$O+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(WO)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=16384,KO=45e3;let Ul=null;typeof MozWebSocket<"u"?Ul=MozWebSocket:typeof WebSocket<"u"&&(Ul=WebSocket);class tn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=aa(this.connId),this.stats_=uf(n),this.connURL=tn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[CE]=cf,typeof location<"u"&&location.hostname&&NE.test(location.hostname)&&(o[PE]=kE),n&&(o[SE]=n),r&&(o[OE]=r),s&&(o[jh]=s),i&&(o[DE]=i),LE(e,xE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xr.set("previous_websocket_failure",!0);try{let r;Nv(),this.mySock=new Ul(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ul!==null&&!tn.forceDisallow_}static previouslyFailed(){return Xr.isInMemoryStorage||Xr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=So(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=RE(n,HO);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qs,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const s=this.transports_=[];for(const i of Do.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Do.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Do.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=6e4,GO=5e3,QO=10*1024,YO=100*1024,Mu="t",_g="d",XO="s",yg="r",JO="e",vg="o",Eg="a",wg="n",Tg="p",ZO="h";class e1{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=aa("c:"+this.id+":"),this.transportManager_=new Do(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=lo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mu in e){const n=e[Mu];n===Eg?this.upgradeIfSecondaryHealthy_():n===yg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Li("t",e),r=Li("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Eg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Li("t",e),r=Li("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Li(Mu,e);if(_g in e){const r=e[_g];if(n===ZO){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===wg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===XO?this.onConnectionShutdown_(r):n===yg?this.onReset_(r):n===JO?$h("Server Error: "+r):n===vg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$h("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cf!==r&&Bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),lo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends WE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $l}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=32,bg=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new Ne("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sr(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ne(t.pieces_,e)}function qE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function t1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function HE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function KE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ne(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ne(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Gt(t,e){const n=fe(t),r=fe(e);if(n===null)return e;if(n===r)return Gt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zE(t,e){if(Sr(t)!==Sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sr(t)>Sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class n1{constructor(e,n){this.errorPrefix_=n,this.parts_=HE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Rc(this.parts_[r]);GE(this)}}function r1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Rc(e),GE(t)}function s1(t){const e=t.parts_.pop();t.byteLength_-=Rc(e),t.parts_.length>0&&(t.byteLength_-=1)}function GE(t){if(t.byteLength_>bg)throw new Error(t.errorPrefix_+"has a key path longer than "+bg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ig)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ig+") or object contains a cycle "+zr(t))}function zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends WE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new df}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=1e3,i1=60*5*1e3,Rg=30*1e3,o1=1.3,a1=3e4,l1="server_kill",Ag=3;class Gn extends jE{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gn.nextPersistentConnectionId_++,this.log_=aa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vi,this.maxReconnectDelay_=i1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Nv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");df.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$l.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(it(i)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Co,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Gn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&er(e,"w")){const r=oi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=dS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$h("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a1&&(this.reconnectDelay_=Vi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*o1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Gn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new e1(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Bt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(l1)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Bt(h),l())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sh(this.interruptReasons_)&&(this.reconnectDelay_=Vi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>lf(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ne(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ag&&(this.reconnectDelay_=Rg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ag&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+wE.replace(/\./g,"-")]=1,Yd()?e["framework.cordova"]=1:kv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$l.getInstance().currentlyOnline();return Sh(this.interruptReasons_)&&e}}Gn.nextPersistentConnectionId_=0;Gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new pe(li,e),s=new pe(li,n);return this.compare(r,s)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class QE extends Nc{static get __EMPTY_NODE(){return Ba}static set __EMPTY_NODE(e){Ba=e}compare(e,n){return Ti(e.name,n.name)}isDefinedOn(e){throw yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(vs,Ba)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Ba)}toString(){return".key"}}const ei=new QE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Lt=class Xi{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xi.RED,this.left=s??bn.EMPTY_NODE,this.right=i??bn.EMPTY_NODE}copy(e,n,r,s,i){return new Xi(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Lt.RED=!0;Lt.BLACK=!1;class c1{copy(e,n,r,s,i){return this}insert(e,n,r){return new Lt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let bn=class hl{constructor(e,n=hl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new hl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Lt.BLACK,null,null))}remove(e){return new hl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Lt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ja(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ja(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ja(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ja(this.root_,null,this.comparator_,!0,e)}};bn.EMPTY_NODE=new c1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e){return Ti(t.name,e.name)}function ff(t,e){return Ti(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh;function h1(t){Wh=t}const YE=function(t){return typeof t=="number"?"number:"+AE(t):"string:"+t},XE=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&er(e,".sv"),"Priority must be a string or number.")}else M(t===Wh||t.isEmpty(),"priority of unexpected type.");M(t===Wh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),XE(this.priorityNode_)}static set __childrenNodeConstructor(e){Cg=e}static get __childrenNodeConstructor(){return Cg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:fe(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=fe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||Sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+YE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=AE(this.value_):e+=this.value_,this.lazyHash_=IE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Qe.VALUE_TYPE_ORDER.indexOf(n),i=Qe.VALUE_TYPE_ORDER.indexOf(r);return M(s>=0,"Unknown leaf type: "+n),M(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let JE,ZE;function d1(t){JE=t}function f1(t){ZE=t}class p1 extends Nc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Ti(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(vs,new Qe("[PRIORITY-POST]",ZE))}makePost(e,n){const r=JE(e);return new pe(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const _t=new p1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=Math.log(2);class g1{constructor(e){const n=i=>parseInt(Math.log(i)/m1,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bl=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Lt(d,h.node,Lt.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=s(l,p),E=s(p+1,c);return h=t[p],d=n?n(h):h,new Lt(d,h.node,Lt.BLACK,g,E)}},i=function(l){let c=null,u=null,h=t.length;const d=function(g,E){const v=h-g,C=h;h-=g;const D=s(v+1,C),N=t[v],K=n?n(N):N;p(new Lt(K,N.node,E,null,D))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const E=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));E?d(v,Lt.BLACK):(d(v,Lt.BLACK),d(v,Lt.RED))}return u},o=new g1(t.length),a=i(o);return new bn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;const Ls={};class Hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(Ls&&_t,"ChildrenNode.ts has not been loaded"),Lu=Lu||new Hn({".priority":Ls},{".priority":_t}),Lu}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bn?n:null}hasIndex(e){return er(this.indexSet_,e.toString())}addIndex(e,n){M(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(pe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Bl(r,e.getCompare()):a=Ls;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Hn(u,c)}addToIndexes(e,n){const r=kl(this.indexes_,(s,i)=>{const o=oi(this.indexSet_,i);if(M(o,"Missing index implementation for "+i),s===Ls)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Bl(a,o.getCompare())}else return Ls;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new Hn(r,this.indexSet_)}removeFromIndexes(e,n){const r=kl(this.indexes_,s=>{if(s===Ls)return s;{const i=n.get(e.name);return i?s.remove(new pe(e.name,i)):s}});return new Hn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;class ve{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&XE(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fi||(Fi=new ve(new bn(ff),null,Hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fi}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fi:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new pe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Fi:this.priorityNode_;return new ve(s,o,i)}}updateChild(e,n){const r=fe(e);if(r===null)return n;{M(fe(e)!==".priority"||Sr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(_t,(o,a)=>{n[o]=a.val(e),r++,i&&ve.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+YE(this.getPriority().val())+":"),this.forEachChild(_t,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":IE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new pe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ca?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(_t),s=n.getIterator(_t);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _1 extends ve{constructor(){super(new bn(ff),ve.EMPTY_NODE,Hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const ca=new _1;Object.defineProperties(pe,{MIN:{value:new pe(li,ve.EMPTY_NODE)},MAX:{value:new pe(vs,ca)}});QE.__EMPTY_NODE=ve.EMPTY_NODE;Qe.__childrenNodeConstructor=ve;h1(ca);f1(ca);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=!0;function pt(t,e=null){if(t===null)return ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,pt(e))}if(!(t instanceof Array)&&y1){const n=[];let r=!1;if(Qt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=pt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return ve.EMPTY_NODE;const i=Bl(n,u1,o=>o.name,ff);if(r){const o=Bl(n,_t.getCompare());return new ve(i,pt(e),new Hn({".priority":o},{".priority":_t}))}else return new ve(i,pt(e),Hn.Default)}else{let n=ve.EMPTY_NODE;return Qt(t,(r,s)=>{if(er(t,r)&&r.substring(0,1)!=="."){const i=pt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(pt(e))}}d1(pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1 extends Nc{constructor(e){super(),this.indexPath_=e,M(!ue(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Ti(e.name,n.name):i}makePost(e,n){const r=pt(e),s=ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new pe(n,s)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,ca);return new pe(vs,e)}toString(){return HE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1 extends Nc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ti(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const r=pt(e);return new pe(n,r)}toString(){return".value"}}const w1=new E1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){return{type:"value",snapshotNode:t}}function I1(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function b1(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Sg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function R1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_t}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_t}copy(){const e=new pf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_t?n="$priority":t.index_===w1?n="$value":t.index_===ei?n="$key":(M(t.index_ instanceof v1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=it(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+it(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=it(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_t&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends jE{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=aa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=jl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Pg(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),oi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const r=jl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Pg(e._queryParams),r=e._path.toString(),s=new Co;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ei(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=So(a.responseText)}catch{Bt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Bt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(){return{value:null,children:new Map}}function ew(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=fe(e);t.children.has(r)||t.children.set(r,Wl());const s=t.children.get(r);e=Ce(e),ew(s,e,n)}}function qh(t,e,n){t.value!==null?n(e,t.value):C1(t,(r,s)=>{const i=new Ne(e.toString()+"/"+r);qh(s,i,n)})}function C1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=10*1e3,P1=30*1e3,k1=5*60*1e3;class N1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new S1(e);const r=Ng+(P1-Ng)*Math.random();lo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Qt(e,(s,i)=>{i>0&&er(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),lo(this.reportStats_.bind(this),Math.floor(Math.random()*2*k1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rn||(Rn={}));function tw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rn.ACK_USER_WRITE,this.source=tw()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new ql(Ie(),n,this.revert)}}else return M(fe(this.path)===e,"operationForChild called for unrelated child."),new ql(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rn.OVERWRITE}operationForChild(e){return ue(this.path)?new Es(this.source,Ie(),this.snap.getImmediateChild(e)):new Es(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new Es(this.source,Ie(),n.value):new xo(this.source,Ie(),n)}else return M(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xo(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function O1(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(R1(o.childName,o.snapshotNode))}),Ui(t,s,"child_removed",e,r,n),Ui(t,s,"child_added",e,r,n),Ui(t,s,"child_moved",i,r,n),Ui(t,s,"child_changed",e,r,n),Ui(t,s,"value",e,r,n),s}function Ui(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>x1(t,a,l)),o.forEach(a=>{const l=D1(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function D1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function x1(t,e,n){if(e.childName==null||n.childName==null)throw yi("Should only compare child_ events.");const r=new pe(e.childName,e.snapshotNode),s=new pe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e){return{eventCache:t,serverCache:e}}function co(t,e,n,r){return sw(new mf(e,n,r),t.serverCache)}function iw(t,e,n,r){return sw(t.eventCache,new mf(e,n,r))}function Hh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ws(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu;const M1=()=>(Vu||(Vu=new bn(EO)),Vu);class Ae{constructor(e,n=M1()){this.value=e,this.children=n}static fromObject(e){let n=new Ae(null);return Qt(e,(r,s)=>{n=n.set(new Ne(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(ue(e))return null;{const r=fe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ce(e),n);return i!=null?{path:Xe(new Ne(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=fe(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Ae(null)}}set(e,n){if(ue(e))return new Ae(n,this.children);{const r=fe(e),i=(this.children.get(r)||new Ae(null)).set(Ce(e),n),o=this.children.insert(r,i);return new Ae(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=fe(e),r=this.children.get(n);if(r){const s=r.remove(Ce(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ae(null):new Ae(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=fe(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(ue(e))return n;{const r=fe(e),i=(this.children.get(r)||new Ae(null)).setTree(Ce(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ae(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ue(e))return null;{const i=fe(e),o=this.children.get(i);return o?o.findOnPath_(Ce(e),Xe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const s=fe(e),i=this.children.get(s);return i?i.foreachOnPath_(Ce(e),Xe(n,s),r):new Ae(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Ae(null))}}function uo(t,e,n){if(ue(e))return new an(new Ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Gt(s,e);return i=i.updateChild(o,n),new an(t.writeTree_.set(s,i))}else{const s=new Ae(n),i=t.writeTree_.setTree(e,s);return new an(i)}}}function Og(t,e,n){let r=t;return Qt(n,(s,i)=>{r=uo(r,Xe(e,s),i)}),r}function Dg(t,e){if(ue(e))return an.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new an(n)}}function Kh(t,e){return Ss(t,e)!=null}function Ss(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Gt(n.path,e)):null}function xg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_t,(r,s)=>{e.push(new pe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new pe(r,s.value))}),e}function Er(t,e){if(ue(e))return t;{const n=Ss(t,e);return n!=null?new an(new Ae(n)):new an(t.writeTree_.subtree(e))}}function zh(t){return t.writeTree_.isEmpty()}function ci(t,e){return ow(Ie(),t.writeTree_,e)}function ow(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(M(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=ow(Xe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e){return dw(e,t)}function L1(t,e,n,r,s){M(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=uo(t.visibleWrites,e,n)),t.lastWriteId=r}function V1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function F1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&U1(a,r.path)?s=!1:rn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return $1(t),!0;if(r.snap)t.visibleWrites=Dg(t.visibleWrites,r.path);else{const a=r.children;Qt(a,l=>{t.visibleWrites=Dg(t.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function U1(t,e){if(t.snap)return rn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rn(Xe(t.path,n),e))return!0;return!1}function $1(t){t.visibleWrites=lw(t.allWrites,B1,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function B1(t){return t.visible}function lw(t,e,n){let r=an.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)rn(n,o)?(a=Gt(n,o),r=uo(r,a,i.snap)):rn(o,n)&&(a=Gt(o,n),r=uo(r,Ie(),i.snap.getChild(a)));else if(i.children){if(rn(n,o))a=Gt(n,o),r=Og(r,a,i.children);else if(rn(o,n))if(a=Gt(o,n),ue(a))r=Og(r,Ie(),i.children);else{const l=oi(i.children,fe(a));if(l){const c=l.getChild(Ce(a));r=uo(r,Ie(),c)}}}else throw yi("WriteRecord should have .snap or .children")}}return r}function cw(t,e,n,r,s){if(!r&&!s){const i=Ss(t.visibleWrites,e);if(i!=null)return i;{const o=Er(t.visibleWrites,e);if(zh(o))return n;if(n==null&&!Kh(o,Ie()))return null;{const a=n||ve.EMPTY_NODE;return ci(o,a)}}}else{const i=Er(t.visibleWrites,e);if(!s&&zh(i))return n;if(!s&&n==null&&!Kh(i,Ie()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(rn(c.path,e)||rn(e,c.path))},a=lw(t.allWrites,o,e),l=n||ve.EMPTY_NODE;return ci(a,l)}}}function j1(t,e,n){let r=ve.EMPTY_NODE;const s=Ss(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(_t,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Er(t.visibleWrites,e);return n.forEachChild(_t,(o,a)=>{const l=ci(Er(i,new Ne(o)),a);r=r.updateImmediateChild(o,l)}),xg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Er(t.visibleWrites,e);return xg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function W1(t,e,n,r,s){M(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Xe(e,n);if(Kh(t.visibleWrites,i))return null;{const o=Er(t.visibleWrites,i);return zh(o)?s.getChild(n):ci(o,s.getChild(n))}}function q1(t,e,n,r){const s=Xe(e,n),i=Ss(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Er(t.visibleWrites,s);return ci(o,r.getNode().getImmediateChild(n))}else return null}function H1(t,e){return Ss(t.visibleWrites,e)}function K1(t,e,n,r,s,i,o){let a;const l=Er(t.visibleWrites,e),c=Ss(l,Ie());if(c!=null)a=c;else if(n!=null)a=ci(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&u.length<s;)h(p,r)!==0&&u.push(p),p=d.getNext();return u}else return[]}function z1(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Gh(t,e,n,r){return cw(t.writeTree,t.treePath,e,n,r)}function uw(t,e){return j1(t.writeTree,t.treePath,e)}function Mg(t,e,n,r){return W1(t.writeTree,t.treePath,e,n,r)}function Hl(t,e){return H1(t.writeTree,Xe(t.treePath,e))}function G1(t,e,n,r,s,i){return K1(t.writeTree,t.treePath,e,n,r,s,i)}function gf(t,e,n){return q1(t.writeTree,t.treePath,e,n)}function hw(t,e){return dw(Xe(t.treePath,e),t.writeTree)}function dw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Sg(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,b1(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,I1(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Sg(r,e.snapshotNode,s.oldSnap));else throw yi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fw=new Y1;class _f{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ws(this.viewCache_),i=G1(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function X1(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function J1(t,e,n,r,s){const i=new Q1;let o,a;if(n.type===Rn.OVERWRITE){const c=n;c.source.fromUser?o=Qh(t,e,c.path,c.snap,r,s,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=Kl(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Rn.MERGE){const c=n;c.source.fromUser?o=eD(t,e,c.path,c.children,r,s,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Yh(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Rn.ACK_USER_WRITE){const c=n;c.revert?o=rD(t,e,c.path,r,s,i):o=tD(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Rn.LISTEN_COMPLETE)o=nD(t,e,n.path,r,i);else throw yi("Unknown operation type: "+n.type);const l=i.getChanges();return Z1(e,o,l),{viewCache:o,changes:l}}function Z1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Hh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(T1(Hh(e)))}}function pw(t,e,n,r,s,i){const o=e.eventCache;if(Hl(r,n)!=null)return e;{let a,l;if(ue(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ws(e),u=c instanceof ve?c:ve.EMPTY_NODE,h=uw(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Gh(r,ws(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=fe(n);if(c===".priority"){M(Sr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Mg(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ce(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Mg(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=gf(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return co(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function Kl(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=fe(n);if(!l.isCompleteForPath(n)&&Sr(n)>1)return e;const g=Ce(n),v=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,g,fw,null)}const h=iw(e,c,l.isFullyInitialized()||ue(n),u.filtersNodes()),d=new _f(s,h,i);return pw(t,h,n,s,d,a)}function Qh(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new _f(s,e,i);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=co(e,c,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=co(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(n),p=a.getNode().getImmediateChild(h);let g;if(ue(d))g=r;else{const E=u.getCompleteChild(h);E!=null?qE(d)===".priority"&&E.getChild(KE(d)).isEmpty()?g=E:g=E.updateChild(d,r):g=ve.EMPTY_NODE}if(p.equals(g))l=e;else{const E=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=co(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Lg(t,e){return t.eventCache.isCompleteForChild(e)}function eD(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=Xe(n,l);Lg(e,fe(u))&&(a=Qh(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=Xe(n,l);Lg(e,fe(u))||(a=Qh(t,a,u,c,s,i,o))}),a}function Vg(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Yh(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=r:c=new Ae(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=Vg(t,p,d);l=Kl(t,l,new Ne(h),g,s,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),E=Vg(t,g,d);l=Kl(t,l,new Ne(h),E,s,i,o,a)}}),l}function tD(t,e,n,r,s,i,o){if(Hl(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Kl(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ue(n)){let c=new Ae(null);return l.getNode().forEachChild(ei,(u,h)=>{c=c.set(new Ne(u),h)}),Yh(t,e,n,c,s,i,a,o)}else return e}else{let c=new Ae(null);return r.foreach((u,h)=>{const d=Xe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Yh(t,e,n,c,s,i,a,o)}}function nD(t,e,n,r,s){const i=e.serverCache,o=iw(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return pw(t,o,n,r,fw,s)}function rD(t,e,n,r,s,i){let o;if(Hl(r,n)!=null)return e;{const a=new _f(r,e,s),l=e.eventCache.getNode();let c;if(ue(n)||fe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Gh(r,ws(e));else{const h=e.serverCache.getNode();M(h instanceof ve,"serverChildren would be complete if leaf node"),u=uw(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=fe(n);let h=gf(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ce(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ve.EMPTY_NODE,Ce(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gh(r,ws(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Hl(r,Ie())!=null,co(e,c,o,t.filter.filtersNodes())}}function sD(t,e){const n=ws(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function Fg(t,e,n,r){e.type===Rn.MERGE&&e.source.queryId!==null&&(M(ws(t.viewCache_),"We should always have a full cache before handling merges"),M(Hh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=J1(t.processor_,s,e,n,r);return X1(t.processor_,i.viewCache),M(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,iD(t,i.changes,i.viewCache.eventCache.getNode(),null)}function iD(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return O1(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ug;function oD(t){M(!Ug,"__referenceConstructor has already been defined"),Ug=t}function yf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return M(i!=null,"SyncTree gave us an op for an invalid query."),Fg(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Fg(o,e,n,r));return i}}function vf(t,e){let n=null;for(const r of t.views.values())n=n||sD(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $g;function aD(t){M(!$g,"__referenceConstructor has already been defined"),$g=t}class Bg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=z1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lD(t,e,n,r,s){return L1(t.pendingWriteTree_,e,n,r,s),s?Dc(t,new Es(tw(),e,n)):[]}function Hs(t,e,n=!1){const r=V1(t.pendingWriteTree_,e);if(F1(t.pendingWriteTree_,e)){let i=new Ae(null);return r.snap!=null?i=i.set(Ie(),!0):Qt(r.children,o=>{i=i.set(new Ne(o),!0)}),Dc(t,new ql(r.path,i,n))}else return[]}function Oc(t,e,n){return Dc(t,new Es(nw(),e,n))}function cD(t,e,n){const r=Ae.fromObject(n);return Dc(t,new xo(nw(),e,r))}function uD(t,e,n,r){const s=yw(t,r);if(s!=null){const i=vw(s),o=i.path,a=i.queryId,l=Gt(o,e),c=new Es(rw(a),l,n);return Ew(t,o,c)}else return[]}function hD(t,e,n,r){const s=yw(t,r);if(s){const i=vw(s),o=i.path,a=i.queryId,l=Gt(o,e),c=Ae.fromObject(n),u=new xo(rw(a),l,c);return Ew(t,o,u)}else return[]}function mw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Gt(o,e),c=vf(a,l);if(c)return c});return cw(s,e,i,n,!0)}function Dc(t,e){return gw(e,t.syncPointTree_,null,aw(t.pendingWriteTree_,Ie()))}function gw(t,e,n,r){if(ue(t.path))return _w(t,e,n,r);{const s=e.get(Ie());n==null&&s!=null&&(n=vf(s,Ie()));let i=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=hw(r,o);i=i.concat(gw(a,l,c,u))}return s&&(i=i.concat(yf(s,t,r,n))),i}}function _w(t,e,n,r){const s=e.get(Ie());n==null&&s!=null&&(n=vf(s,Ie()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=hw(r,o),u=t.operationForChild(o);u&&(i=i.concat(_w(u,a,l,c)))}),s&&(i=i.concat(yf(s,t,r,n))),i}function yw(t,e){return t.tagToQueryMap.get(e)}function vw(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ne(t.substr(0,e))}}function Ew(t,e,n){const r=t.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const s=aw(t.pendingWriteTree_,e);return yf(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ef(n)}node(){return this.node_}}class wf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new wf(this.syncTree_,n)}node(){return mw(this.syncTree_,this.path_)}}const dD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jg=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return pD(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},pD=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const s=e.node();if(M(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},mD=function(t,e,n,r){return Tf(e,new wf(n,t),r)},gD=function(t,e,n){return Tf(t,new Ef(e),n)};function Tf(t,e,n){const r=t.getPriority().val(),s=jg(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=jg(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Qe(a,pt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Qe(s))),o.forEachChild(_t,(a,l)=>{const c=Tf(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function bf(t,e){let n=e instanceof Ne?e:new Ne(e),r=t,s=fe(n);for(;s!==null;){const i=oi(r.node.children,s)||{children:{},childCount:0};r=new If(s,r,i),n=Ce(n),s=fe(n)}return r}function Ii(t){return t.node.value}function ww(t,e){t.node.value=e,Xh(t)}function Tw(t){return t.node.childCount>0}function _D(t){return Ii(t)===void 0&&!Tw(t)}function xc(t,e){Qt(t.node.children,(n,r)=>{e(new If(n,t,r))})}function Iw(t,e,n,r){n&&!r&&e(t),xc(t,s=>{Iw(s,e,!0,r)}),n&&r&&e(t)}function yD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ua(t){return new Ne(t.parent===null?t.name:ua(t.parent)+"/"+t.name)}function Xh(t){t.parent!==null&&vD(t.parent,t.name,t)}function vD(t,e,n){const r=_D(n),s=er(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Xh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Xh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=/[\[\].#$\/\u0000-\u001F\u007F]/,wD=/[\[\].#$\u0000-\u001F\u007F]/,Fu=10*1024*1024,bw=function(t){return typeof t=="string"&&t.length!==0&&!ED.test(t)},TD=function(t){return typeof t=="string"&&t.length!==0&&!wD.test(t)},ID=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),TD(t)},Rw=function(t,e,n){const r=n instanceof Ne?new n1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+zr(r)+" with contents = "+e.toString());if(bE(e))throw new Error(t+"contains "+e.toString()+" "+zr(r));if(typeof e=="string"&&e.length>Fu/3&&Rc(e)>Fu)throw new Error(t+"contains a string greater than "+Fu+" utf8 bytes "+zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Qt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!bw(o)))throw new Error(t+" contains an invalid key ("+o+") "+zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);r1(r,o),Rw(t,a,r),s1(r)}),s&&i)throw new Error(t+' contains ".value" child '+zr(r)+" in addition to actual children.")}},bD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ID(n))throw new Error(yS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function AD(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!zE(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ps(t,e,n){AD(t,n),CD(t,r=>rn(r,e)||rn(e,r))}function CD(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(SD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();cs&&ft("event: "+n.toString()),la(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD="repo_interrupt",kD=25;class ND{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wl(),this.transactionQueueTree_=new If,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OD(t,e,n){if(t.stats_=uf(t.repoInfo_),t.forceRestClient_||AO())t.server_=new jl(t.repoInfo_,(r,s,i,o)=>{Wg(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gn(t.repoInfo_,e,(r,s,i,o)=>{Wg(t,r,s,i,o)},r=>{qg(t,r)},r=>{xD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=OO(t.repoInfo_,()=>new N1(t.stats_,t.server_)),t.infoData_=new A1,t.infoSyncTree_=new Bg({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Oc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rf(t,"connected",!1),t.serverSyncTree_=new Bg({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Ps(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function DD(t){const n=t.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Aw(t){return dD({timestamp:DD(t)})}function Wg(t,e,n,r,s){t.dataUpdateCount++;const i=new Ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=kl(n,c=>pt(c));o=hD(t.serverSyncTree_,i,l,s)}else{const l=pt(n);o=uD(t.serverSyncTree_,i,l,s)}else if(r){const l=kl(n,c=>pt(c));o=cD(t.serverSyncTree_,i,l)}else{const l=pt(n);o=Oc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Cf(t,i)),Ps(t.eventQueue_,a,o)}function qg(t,e){Rf(t,"connected",e),e===!1&&LD(t)}function xD(t,e){Qt(e,(n,r)=>{Rf(t,n,r)})}function Rf(t,e,n){const r=new Ne("/.info/"+e),s=pt(n);t.infoData_.updateSnapshot(r,s);const i=Oc(t.infoSyncTree_,r,s);Ps(t.eventQueue_,r,i)}function MD(t){return t.nextWriteId_++}function LD(t){Cw(t,"onDisconnectEvents");const e=Aw(t),n=Wl();qh(t.onDisconnect_,Ie(),(s,i)=>{const o=mD(s,i,t.serverSyncTree_,e);ew(n,s,o)});let r=[];qh(n,Ie(),(s,i)=>{r=r.concat(Oc(t.serverSyncTree_,s,i));const o=$D(t,s);Cf(t,o)}),t.onDisconnect_=Wl(),Ps(t.eventQueue_,Ie(),r)}function VD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PD)}function Cw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function Sw(t,e,n){return mw(t.serverSyncTree_,e,n)||ve.EMPTY_NODE}function Af(t,e=t.transactionQueueTree_){if(e||Mc(t,e),Ii(e)){const n=kw(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&FD(t,ua(e),n)}else Tw(e)&&xc(e,n=>{Af(t,n)})}function FD(t,e,n){const r=n.map(c=>c.currentWriteId),s=Sw(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Gt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Cw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Hs(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Mc(t,bf(t.transactionQueueTree_,e)),Af(t,t.transactionQueueTree_),Ps(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)la(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Bt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Cf(t,e)}},o)}function Cf(t,e){const n=Pw(t,e),r=ua(n),s=kw(t,n);return UD(t,s,r),r}function UD(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Gt(n,l.path);let u=!1,h;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kD)u=!0,h="maxretry",s=s.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Sw(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Rw("transaction failed: Data returned ",p,l.path);let g=pt(p);typeof p=="object"&&p!=null&&er(p,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,C=Aw(t),D=gD(g,d,C);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=D,l.currentWriteId=MD(t),o.splice(o.indexOf(v),1),s=s.concat(lD(t.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),s=s.concat(Hs(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(Hs(t.serverSyncTree_,l.currentWriteId,!0))}Ps(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Mc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)la(r[a]);Af(t,t.transactionQueueTree_)}function Pw(t,e){let n,r=t.transactionQueueTree_;for(n=fe(e);n!==null&&Ii(r)===void 0;)r=bf(r,n),e=Ce(e),n=fe(e);return r}function kw(t,e){const n=[];return Nw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Nw(t,e,n){const r=Ii(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);xc(e,s=>{Nw(t,s,n)})}function Mc(t,e){const n=Ii(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,ww(e,n.length>0?n:void 0)}xc(e,r=>{Mc(t,r)})}function $D(t,e){const n=ua(Pw(t,e)),r=bf(t.transactionQueueTree_,e);return yD(r,s=>{Uu(t,s)}),Uu(t,r),Iw(r,s=>{Uu(t,s)}),n}function Uu(t,e){const n=Ii(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Hs(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?ww(e,void 0):n.length=i+1,Ps(t.eventQueue_,ua(e),s);for(let o=0;o<r.length;o++)la(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function jD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hg=function(t,e){const n=WD(t),r=n.namespace;n.domain==="firebase.com"&&ys(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yO();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PO(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ne(n.pathString)}},WD=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=BD(t.substring(u,h)));const d=jD(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class Sf{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ue(this._path)?null:qE(this._path)}get ref(){return new bi(this._repo,this._path)}get _queryIdentifier(){const e=kg(this._queryParams),n=lf(e);return n==="{}"?"default":n}get _queryObject(){return kg(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Sf))return!1;const n=this._repo===e._repo,r=zE(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+t1(this._path)}}class bi extends Sf{constructor(e,n){super(e,n,new pf,!1)}get parent(){const e=KE(this._path);return e===null?null:new bi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}oD(bi);aD(bi);/**
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
 */const qD="FIREBASE_DATABASE_EMULATOR_HOST",Jh={};let HD=!1;function KD(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hg(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[qD]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Hg(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Bh(Bh.OWNER):new SO(t.name,t.options,e);bD("Invalid Firebase Database URL",o),ue(o.path)||ys("Database URL must point to the root of a Firebase Database (not including a child path).");const h=GD(a,t,u,new CO(t.name,n));return new QD(h,t)}function zD(t,e){const n=Jh[e];(!n||n[t.key]!==t)&&ys(`Database ${e}(${t.repoInfo_}) has already been deleted.`),VD(t),delete n[t.key]}function GD(t,e,n,r){let s=Jh[e.name];s||(s={},Jh[e.name]=s);let i=s[t.toURLString()];return i&&ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ND(t,HD,n,r),s[t.toURLString()]=i,i}class QD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bi(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ys("Cannot call "+e+" on a deleted database.")}}/**
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
 */function YD(t){fO(Mr),Ln(new cn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return KD(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),$t(dg,fg,t),$t(dg,fg,"esm2017")}Gn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YD();var XD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Pf=Pf||{},J=XD||self;function Lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ha(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function JD(t){return Object.prototype.hasOwnProperty.call(t,$u)&&t[$u]||(t[$u]=++ZD)}var $u="closure_uid_"+(1e9*Math.random()>>>0),ZD=0;function ex(t,e,n){return t.call.apply(t.bind,arguments)}function tx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=ex:yt=tx,yt.apply(null,arguments)}function Wa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ur(){this.s=this.s,this.o=this.o}var nx=0;Ur.prototype.s=!1;Ur.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),nx!=0)&&JD(this)};Ur.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ow=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Kg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var rx=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function Mo(t){return/^[\s\xa0]*$/.test(t)}function Vc(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return Vc().indexOf(t)!=-1}function Nf(t){return Nf[" "](t),t}Nf[" "]=function(){};function sx(t,e){var n=Yx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ix=Tn("Opera"),ui=Tn("Trident")||Tn("MSIE"),Dw=Tn("Edge"),Zh=Dw||ui,xw=Tn("Gecko")&&!(Vc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),ox=Vc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function Mw(){var t=J.document;return t?t.documentMode:void 0}var ed;e:{var Bu="",ju=function(){var t=Vc();if(xw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dw)return/Edge\/([\d\.]+)/.exec(t);if(ui)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ox)return/WebKit\/(\S+)/.exec(t);if(ix)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ju&&(Bu=ju?ju[1]:""),ui){var Wu=Mw();if(Wu!=null&&Wu>parseFloat(Bu)){ed=String(Wu);break e}}ed=Bu}var td;if(J.document&&ui){var zg=Mw();td=zg||parseInt(ed,10)||void 0}else td=void 0;var ax=td;function Lo(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xw){e:{try{Nf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:lx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lo.$.h.call(this)}}Ze(Lo,vt);var lx={2:"touch",3:"pen",4:"mouse"};Lo.prototype.h=function(){Lo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var da="closure_listenable_"+(1e6*Math.random()|0),cx=0;function ux(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++cx,this.fa=this.ia=!1}function Fc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Of(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hx(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Lw(t){const e={};for(const n in t)e[n]=t[n];return e}const Gg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vw(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Gg.length;i++)n=Gg[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Uc(t){this.src=t,this.g={},this.h=0}Uc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=rd(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ux(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function nd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ow(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rd(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Df="closure_lm_"+(1e6*Math.random()|0),qu={};function Fw(t,e,n,r,s){if(r&&r.once)return $w(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Fw(t,e[i],n,r,s);return null}return n=Lf(n),t&&t[da]?t.O(e,n,ha(r)?!!r.capture:!!r,s):Uw(t,e,n,!1,r,s)}function Uw(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ha(s)?!!s.capture:!!s,a=Mf(t);if(a||(t[Df]=a=new Uc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=dx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rx||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(jw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dx(){function t(n){return e.call(t.src,t.listener,n)}const e=fx;return t}function $w(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)$w(t,e[i],n,r,s);return null}return n=Lf(n),t&&t[da]?t.P(e,n,ha(r)?!!r.capture:!!r,s):Uw(t,e,n,!0,r,s)}function Bw(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Bw(t,e[i],n,r,s);else r=ha(r)?!!r.capture:!!r,n=Lf(n),t&&t[da]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=rd(i,n,r,s),-1<n&&(Fc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Mf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rd(e,n,r,s)),(n=-1<t?e[t]:null)&&xf(n))}function xf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[da])nd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Mf(e))?(nd(n,t),n.h==0&&(n.src=null,e[Df]=null)):Fc(t)}}}function jw(t){return t in qu?qu[t]:qu[t]="on"+t}function fx(t,e){if(t.fa)t=!0;else{e=new Lo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&xf(t),t=n.call(r,e)}return t}function Mf(t){return t=t[Df],t instanceof Uc?t:null}var Hu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lf(t){return typeof t=="function"?t:(t[Hu]||(t[Hu]=function(e){return t.handleEvent(e)}),t[Hu])}function Je(){Ur.call(this),this.i=new Uc(this),this.S=this,this.J=null}Ze(Je,Ur);Je.prototype[da]=!0;Je.prototype.removeEventListener=function(t,e,n,r){Bw(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var s=e;e=new vt(r,t),Vw(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=qa(o,r,!0,e)&&s}if(o=e.g=t,s=qa(o,r,!0,e)&&s,s=qa(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=qa(o,r,!1,e)&&s}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fc(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&nd(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Vf=J.JSON.stringify;class px{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function mx(){var t=Ff;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gx{constructor(){this.h=this.g=null}add(e,n){const r=Ww.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ww=new px(()=>new _x,t=>t.reset());class _x{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yx(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function vx(t){J.setTimeout(()=>{throw t},0)}let Vo,Fo=!1,Ff=new gx,qw=()=>{const t=J.Promise.resolve(void 0);Vo=()=>{t.then(Ex)}};var Ex=()=>{for(var t;t=mx();){try{t.h.call(t.g)}catch(n){vx(n)}var e=Ww;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fo=!1};function $c(t,e){Je.call(this),this.h=t||1,this.g=e||J,this.j=yt(this.qb,this),this.l=Date.now()}Ze($c,Je);L=$c.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(Uf(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){$c.$.N.call(this),Uf(this),delete this.g};function $f(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Hw(t){t.g=$f(()=>{t.g=null,t.i&&(t.i=!1,Hw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class wx extends Ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hw(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){Ur.call(this),this.h=t,this.g={}}Ze(Uo,Ur);var Qg=[];function Kw(t,e,n,r){Array.isArray(n)||(n&&(Qg[0]=n.toString()),n=Qg);for(var s=0;s<n.length;s++){var i=Fw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function zw(t){Of(t.g,function(e,n){this.g.hasOwnProperty(n)&&xf(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),zw(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bc(){this.g=!0}Bc.prototype.Ea=function(){this.g=!1};function Tx(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ix(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ks(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Rx(t,n)+(r?" "+r:"")})}function bx(t,e){t.info(function(){return"TIMEOUT: "+e})}Bc.prototype.info=function(){};function Rx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Vf(n)}catch{return e}}var ks={},Yg=null;function jc(){return Yg=Yg||new Je}ks.Ta="serverreachability";function Gw(t){vt.call(this,ks.Ta,t)}Ze(Gw,vt);function $o(t){const e=jc();ct(e,new Gw(e))}ks.STAT_EVENT="statevent";function Qw(t,e){vt.call(this,ks.STAT_EVENT,t),this.stat=e}Ze(Qw,vt);function Pt(t){const e=jc();ct(e,new Qw(e,t))}ks.Ua="timingevent";function Yw(t,e){vt.call(this,ks.Ua,t),this.size=e}Ze(Yw,vt);function fa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Wc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bf(){}Bf.prototype.h=null;function Xg(t){return t.h||(t.h=t.i())}function Jw(){}var pa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jf(){vt.call(this,"d")}Ze(jf,vt);function Wf(){vt.call(this,"c")}Ze(Wf,vt);var sd;function qc(){}Ze(qc,Bf);qc.prototype.g=function(){return new XMLHttpRequest};qc.prototype.i=function(){return{}};sd=new qc;function ma(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Uo(this),this.P=Ax,t=Zh?125:void 0,this.V=new $c(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zw}function Zw(){this.i=null,this.g="",this.h=!1}var Ax=45e3,id={},zl={};L=ma.prototype;L.setTimeout=function(t){this.P=t};function od(t,e,n){t.L=1,t.v=Kc(Yn(e)),t.s=n,t.S=!0,eT(t,null)}function eT(t,e){t.G=Date.now(),ga(t),t.A=Yn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),lT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Zw,t.g=PT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new wx(yt(t.Pa,t,t.g),t.O)),Kw(t.U,t.g,"readystatechange",t.nb),e=t.I?Lw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$o(),Tx(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&An(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=An(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zh||this.g&&(this.h.h||this.g.ja()||t_(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?$o(3):$o(2)),Hc(this);var n=this.g.da();this.ca=n;t:if(tT(this)){var r=t_(this.g);t="";var s=r.length,i=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),ho(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ix(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mo(a)){var c=a;break t}}c=null}if(n=c)Ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ad(this,n);else{this.i=!1,this.o=3,Pt(12),Jr(this),ho(this);break e}}this.S?(nT(this,u,o),Zh&&this.i&&u==3&&(Kw(this.U,this.V,"tick",this.mb),this.V.start())):(Ks(this.j,this.m,o,null),ad(this,o)),u==4&&Jr(this),this.i&&!this.J&&(u==4?RT(this.l,this):(this.i=!1,ga(this)))}else zx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Jr(this),ho(this)}}}catch{}finally{}};function tT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function nT(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Cx(t,n),s==zl){e==4&&(t.o=4,Pt(14),r=!1),Ks(t.j,t.m,null,"[Incomplete Response]");break}else if(s==id){t.o=4,Pt(15),Ks(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ks(t.j,t.m,s,null),ad(t,s);tT(t)&&s!=zl&&s!=id&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qf(e),e.M=!0,Pt(11))):(Ks(t.j,t.m,n,"[Invalid Chunked Response]"),Jr(t),ho(t))}L.mb=function(){if(this.g){var t=An(this.g),e=this.g.ja();this.C<e.length&&(Hc(this),nT(this,t,e),this.i&&t!=4&&ga(this))}};function Cx(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?zl:(n=Number(e.substring(n,r)),isNaN(n)?id:(r+=1,r+n>e.length?zl:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,Jr(this)};function ga(t){t.Y=Date.now()+t.P,rT(t,t.P)}function rT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fa(yt(t.lb,t),e)}function Hc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(bx(this.j,this.A),this.L!=2&&($o(),Pt(17)),Jr(this),this.o=2,ho(this)):rT(this,this.Y-t)};function ho(t){t.l.H==0||t.J||RT(t.l,t)}function Jr(t){Hc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Uf(t.V),zw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ad(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ld(n.i,t))){if(!t.K&&ld(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Yl(n),Yc(n);else break e;Gf(n),Pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=fa(yt(n.ib,n),6e3));if(1>=hT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zr(n,11)}else if((t.K||n.g==t)&&Yl(n),!Mo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(qf(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Se(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ST(r,r.J?r.pa:null,r.Y),o.K){dT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Hc(a),ga(a)),r.g=o}else IT(r);0<n.j.length&&Xc(n)}else c[0]!="stop"&&c[0]!="close"||Zr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Zr(n,7):zf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}$o(4)}catch{}}function Sx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Px(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Px(t),r=Sx(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var iT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function us(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof us){this.h=t.h,Gl(this,t.j),this.s=t.s,this.g=t.g,Ql(this,t.m),this.l=t.l;var e=t.i,n=new Bo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Jg(this,n),this.o=t.o}else t&&(e=String(t).match(iT))?(this.h=!1,Gl(this,e[1]||"",!0),this.s=Ji(e[2]||""),this.g=Ji(e[3]||"",!0),Ql(this,e[4]),this.l=Ji(e[5]||"",!0),Jg(this,e[6]||"",!0),this.o=Ji(e[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}us.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zi(e,Zg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zi(e,Zg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zi(n,n.charAt(0)=="/"?Dx:Ox,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zi(n,Mx)),t.join("")};function Yn(t){return new us(t)}function Gl(t,e,n){t.j=n?Ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ql(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jg(t,e,n){e instanceof Bo?(t.i=e,Lx(t.i,t.h)):(n||(e=Zi(e,xx)),t.i=new Bo(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Kc(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Nx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zg=/[#\/\?@]/g,Ox=/[#\?:]/g,Dx=/[#\?]/g,xx=/[#\?@]/g,Mx=/#/g;function Bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new Map,t.h=0,t.i&&kx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Bo.prototype;L.add=function(t,e){$r(this),this.i=null,t=Ri(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function oT(t,e){$r(t),e=Ri(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function aT(t,e){return $r(t),e=Ri(t,e),t.g.has(e)}L.forEach=function(t,e){$r(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};L.ta=function(){$r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};L.Z=function(t){$r(this);let e=[];if(typeof t=="string")aT(this,t)&&(e=e.concat(this.g.get(Ri(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return $r(this),this.i=null,t=Ri(this,t),aT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function lT(t,e,n){oT(t,e),0<n.length&&(t.i=null,t.g.set(Ri(t,e),kf(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ri(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Lx(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(oT(this,r),lT(this,s,n))},t)),t.j=e}var Vx=class{constructor(t,e){this.g=t,this.map=e}};function cT(t){this.l=t||Fx,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fx=10;function uT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hT(t){return t.h?1:t.g?t.g.size:0}function ld(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qf(t,e){t.g?t.g.add(e):t.h=e}function dT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cT.prototype.cancel=function(){if(this.i=fT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kf(t.i)}var Ux=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function $x(){this.g=new Ux}function Bx(t,e,n){const r=n||"";try{sT(t,function(s,i){let o=s;ha(s)&&(o=Vf(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function jx(t,e){const n=new Bc;if(J.Image){const r=new Image;r.onload=Wa(Ha,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wa(Ha,n,r,"TestLoadImage: error",!1,e),r.onabort=Wa(Ha,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wa(Ha,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ha(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function zc(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(zc,Bf);zc.prototype.g=function(){return new Gc(this.l,this.j)};zc.prototype.i=function(t){return function(){return t}}({});function Gc(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Gc,Je);var Hf=0;L=Gc.prototype;L.open=function(t,e){if(this.readyState!=Hf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jo(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_a(this)),this.readyState=Hf};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function pT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_a(this):jo(this),this.readyState==3&&pT(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,_a(this))};L.Ya=function(t){this.g&&(this.response=t,_a(this))};L.ka=function(){this.g&&_a(this)};function _a(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jo(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Wx=J.JSON.parse;function Ve(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mT,this.L=this.M=!1}Ze(Ve,Je);var mT="",qx=/^https?$/i,Hx=["POST","PUT"];L=Ve.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sd.g(),this.C=this.u?Xg(this.u):Xg(sd),this.g.onreadystatechange=yt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){e_(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=Ow(Hx,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yT(this),0<this.B&&((this.L=Kx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.ua,this)):this.A=$f(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){e_(this,i)}};function Kx(t){return ui&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Pf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function e_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gT(t),Qc(t)}function gT(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Qc(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qc(this,!0)),Ve.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?_T(this):this.kb())};L.kb=function(){_T(this)};function _T(t){if(t.h&&typeof Pf<"u"&&(!t.C[1]||An(t)!=4||t.da()!=2)){if(t.v&&An(t)==4)$f(t.La,0,t);else if(ct(t,"readystatechange"),An(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(iT)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!qx.test(s?s.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var i=2<An(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",gT(t)}}finally{Qc(t)}}}}function Qc(t,e){if(t.g){yT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function yT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function An(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Wx(e)}};function t_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case mT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function zx(t){const e={};t=(t.g&&2<=An(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Mo(t[r]))continue;var n=yx(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}hx(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vT(t){let e="";return Of(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function $i(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ET(t){this.Ga=0,this.j=[],this.l=new Bc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$i("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$i("baseRetryDelayMs",5e3,t),this.hb=$i("retryDelaySeedMs",1e4,t),this.eb=$i("forwardChannelMaxRetries",2,t),this.xa=$i("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cT(t&&t.concurrentRequestLimit),this.Ja=new $x,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=ET.prototype;L.ra=8;L.H=1;function zf(t){if(wT(t),t.H==3){var e=t.W++,n=Yn(t.I);if(Se(n,"SID",t.K),Se(n,"RID",e),Se(n,"TYPE","terminate"),ya(t,n),e=new ma(t,t.l,e),e.L=2,e.v=Kc(Yn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=PT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ga(e)}CT(t)}function Yc(t){t.g&&(Qf(t),t.g.cancel(),t.g=null)}function wT(t){Yc(t),t.u&&(J.clearTimeout(t.u),t.u=null),Yl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Xc(t){if(!uT(t.i)&&!t.m){t.m=!0;var e=t.Na;Vo||qw(),Fo||(Vo(),Fo=!0),Ff.add(e,t),t.C=0}}function Gx(t,e){return hT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=fa(yt(t.Na,t,e),AT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ma(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Lw(i),Vw(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TT(this,s,e),n=Yn(this.I),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),ya(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(vT(i)))+"&"+e:this.o&&Kf(n,this.o,i)),qf(this.i,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.aa=!0,od(s,n,null)):od(s,n,e),this.H=2}}else this.H==3&&(t?n_(this,t):this.j.length==0||uT(this.i)||n_(this))};function n_(t,e){var n;e?n=e.m:n=t.W++;const r=Yn(t.I);Se(r,"SID",t.K),Se(r,"RID",n),Se(r,"AID",t.V),ya(t,r),t.o&&t.s&&Kf(r,t.o,t.s),n=new ma(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=TT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),qf(t.i,n),od(n,r,e)}function ya(t,e){t.na&&Of(t.na,function(n,r){Se(e,r,n)}),t.h&&sT({},function(n,r){Se(e,r,n)})}function TT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?yt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{Bx(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function IT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vo||qw(),Fo||(Vo(),Fo=!0),Ff.add(e,t),t.A=0}}function Gf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=fa(yt(t.Ma,t),AT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,bT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=fa(yt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Yc(this),bT(this))};function Qf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function bT(t){t.g=new ma(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Yn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.K),Se(e,"AID",t.V),Se(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Se(e,"TO",t.qa),Se(e,"TYPE","xmlhttp"),ya(t,e),t.o&&t.s&&Kf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Kc(Yn(e)),n.s=null,n.S=!0,eT(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Yc(this),Gf(this),Pt(19))};function Yl(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function RT(t,e){var n=null;if(t.g==e){Yl(t),Qf(t),t.g=null;var r=2}else if(ld(t.i,e))n=e.F,dT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=jc(),ct(r,new Yw(r,n)),Xc(t)}else IT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Gx(t,e)||r==2&&Gf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Zr(t,5);break;case 4:Zr(t,10);break;case 3:Zr(t,6);break;default:Zr(t,2)}}}function AT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=yt(t.pb,t);n||(n=new us("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Gl(n,"https"),Kc(n)),jx(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),CT(t),wT(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function CT(t){if(t.H=0,t.ma=[],t.h){const e=fT(t.i);(e.length!=0||t.j.length!=0)&&(Kg(t.ma,e),Kg(t.ma,t.j),t.i.i.length=0,kf(t.j),t.j.length=0),t.h.ya()}}function ST(t,e,n){var r=n instanceof us?Yn(n):new us(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ql(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new us(null);r&&Gl(i,r),e&&(i.g=e),s&&Ql(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.ra),ya(t,r),r}function PT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ve(new zc({ob:!0})):new Ve(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function kT(){}L=kT.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Xl(){if(ui&&!(10<=Number(ax)))throw Error("Environmental error: no available transport.")}Xl.prototype.g=function(t,e){return new Wt(t,e)};function Wt(t,e){Je.call(this),this.g=new ET(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}Ze(Wt,Je);Wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ST(t,null,t.Y),Xc(t)};Wt.prototype.close=function(){zf(this.g)};Wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vf(t),t=n);e.j.push(new Vx(e.fb++,t)),e.H==3&&Xc(e)};Wt.prototype.N=function(){this.g.h=null,delete this.j,zf(this.g),delete this.g,Wt.$.N.call(this)};function NT(t){jf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(NT,jf);function OT(){Wf.call(this),this.status=1}Ze(OT,Wf);function Ai(t){this.g=t}Ze(Ai,kT);Ai.prototype.Ba=function(){ct(this.g,"a")};Ai.prototype.Aa=function(t){ct(this.g,new NT(t))};Ai.prototype.za=function(t){ct(this.g,new OT)};Ai.prototype.ya=function(){ct(this.g,"b")};function Qx(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(dn,Qx);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ku(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ku(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ku(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ku(this,r),s=0;break}}this.h=s,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Yx={};function Yf(t){return-128<=t&&128>t?sx(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function Cn(t){if(isNaN(t)||!isFinite(t))return ti;if(0>t)return st(Cn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=cd;return new Ee(e,0)}function DT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(DT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Cn(Math.pow(e,8)),r=ti,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Cn(Math.pow(e,i)),r=r.R(i).add(Cn(o))):(r=r.R(n),r=r.add(Cn(o)))}return r}var cd=4294967296,ti=Yf(0),ud=Yf(1),r_=Yf(16777216);L=Ee.prototype;L.ea=function(){if(zt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:cd+r)*e,e*=cd}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Kn(this))return"0";if(zt(this))return"-"+st(this).toString(t);for(var e=Cn(Math.pow(t,6)),n=this,r="";;){var s=Zl(n,e).g;n=Jl(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Kn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Kn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}L.X=function(t){return t=Jl(this,t),zt(t)?-1:Kn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(ud)}L.abs=function(){return zt(this)?st(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function Jl(t,e){return t.add(st(e))}L.R=function(t){if(Kn(this)||Kn(t))return ti;if(zt(this))return zt(t)?st(this).R(st(t)):st(st(this).R(t));if(zt(t))return st(this.R(st(t)));if(0>this.X(r_)&&0>t.X(r_))return Cn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Ka(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Ka(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ka(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ka(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function Ka(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bi(t,e){this.g=t,this.h=e}function Zl(t,e){if(Kn(e))throw Error("division by zero");if(Kn(t))return new Bi(ti,ti);if(zt(t))return e=Zl(st(t),e),new Bi(st(e.g),st(e.h));if(zt(e))return e=Zl(t,st(e)),new Bi(st(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ud,r=e;0>=r.X(t);)n=s_(n),r=s_(r);var s=Vs(n,1),i=Vs(r,1);for(r=Vs(r,2),n=Vs(n,2);!Kn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Vs(r,1),n=Vs(n,1)}return e=Jl(t,s.R(e)),new Bi(s,e)}for(s=ti;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Cn(n),o=i.R(e);zt(o)||0<o.X(t);)n-=r,i=Cn(n),o=i.R(e);Kn(i)&&(i=ud),s=s.add(i),t=Jl(t,o)}return new Bi(s,t)}L.gb=function(t){return Zl(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function s_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function Vs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}Xl.prototype.createWebChannel=Xl.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;Wc.NO_ERROR=0;Wc.TIMEOUT=8;Wc.HTTP_ERROR=6;Xw.COMPLETE="complete";Jw.EventType=pa;pa.OPEN="a";pa.CLOSE="b";pa.ERROR="c";pa.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=Cn;Ee.fromString=DT;var Xx=function(){return new Xl},Jx=function(){return jc()},zu=Wc,Zx=Xw,eM=ks,i_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},za=Jw,tM=Ve,nM=dn,ni=Ee;const o_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new ta("@firebase/firestore");function ji(){return Ts.logLevel}function W(t,...e){if(Ts.logLevel<=ae.DEBUG){const n=e.map(Xf);Ts.debug(`Firestore (${Ci}): ${t}`,...n)}}function Xn(t,...e){if(Ts.logLevel<=ae.ERROR){const n=e.map(Xf);Ts.error(`Firestore (${Ci}): ${t}`,...n)}}function hi(t,...e){if(Ts.logLevel<=ae.WARN){const n=e.map(Xf);Ts.warn(`Firestore (${Ci}): ${t}`,...n)}}function Xf(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ci}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function ke(t,e){t||X()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class sM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iM{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new xT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new dt(e)}}class oM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new lM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function uM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Wo{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const hM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Wo{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return hM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Pe.fromString(e))}static fromName(e){return new G(Pe.fromString(e).popFirst(5))}static empty(){return new G(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Pe(e.slice()))}}function dM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Pr(s,G.empty(),e)}function fM(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(ee.min(),G.empty(),-1)}static max(){return new Pr(ee.max(),G.empty(),-1)}}function pM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const mM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==mM)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Jf.ae=-1;function Jc(t){return t==null}function ec(t){return t===0&&1/t==-1/0}function _M(t){return typeof t=="number"&&Number.isInteger(t)&&!ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new l_(this.data.getIterator())}getIteratorFrom(e){return new l_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class l_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ut(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new VT("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const yM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=yM.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function Zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ep(t){const e=t.mapValue.fields.__previous_value__;return Zf(e)?ep(e):e}function qo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zf(t)?4:EM(t)?9007199254740991:10:X()}function Vn(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),a=kr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Is(s.bytesValue).isEqual(Is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),a=qe(i.doubleValue);return o===a?ec(o)===ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(a_(o)!==a_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Vn(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function Ko(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return c_(t.timestampValue,e.timestampValue);case 4:return c_(qo(t),qo(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Is(i),l=Is(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(qe(i.latitude),qe(o.latitude));return a!==0?a:ge(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=fi(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Qa.mapValue&&o===Qa.mapValue)return 0;if(i===Qa.mapValue)return 1;if(o===Qa.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ge(l[h],u[h]);if(d!==0)return d;const p=fi(a[l[h]],c[u[h]]);if(p!==0)return p}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function c_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=kr(t),r=kr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function pi(t){return hd(t)}function hd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hd(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function u_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dd(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function h_(t){return!!t&&"nullValue"in t}function d_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ns(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function EM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=fo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];dl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ns(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(fo(this.value))}}function FT(t){const e=[];return Ns(t.fields,(n,r)=>{const s=new ot([n]);if(dl(r)){const i=FT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,ee.min(),ee.min(),ee.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ee.min(),ee.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ee.min(),ee.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tc{constructor(e,n){this.position=e,this.inclusive=n}}function f_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function p_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nc{constructor(e,n="asc"){this.field=e,this.dir=n}}function wM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class UT{}class He extends UT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IM(e,n,r):n==="array-contains"?new AM(e,r):n==="in"?new CM(e,r):n==="not-in"?new SM(e,r):n==="array-contains-any"?new PM(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bM(e,r):new RM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fi(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends UT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new fn(e,n)}matches(e){return $T(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $T(t){return t.op==="and"}function BT(t){return TM(t)&&$T(t)}function TM(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function fd(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(BT(t))return t.filters.map(e=>fd(e)).join(",");{const e=t.filters.map(n=>fd(n)).join(",");return`${t.op}(${e})`}}function jT(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&Vn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&jT(o,s.filters[a]),!0):!1}(t,e):void X()}function WT(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(WT).join(" ,")+"}"}(t):"Filter"}class IM extends He{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class bM extends He{constructor(e,n){super(e,"in",n),this.keys=qT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RM extends He{constructor(e,n){super(e,"not-in",n),this.keys=qT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class AM extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&Ko(n.arrayValue,this.value)}}class CM extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class SM extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ko(this.value.arrayValue,n)}}class PM extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
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
 */class kM{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function m_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kM(t,e,n,r,s,i,o)}function np(t){const e=te(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.le=n}return e.le}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!p_(t.startAt,e.startAt)&&p_(t.endAt,e.endAt)}function pd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function NM(t,e,n,r,s,i,o,a){return new wa(t,e,n,r,s,i,o,a)}function HT(t){return new wa(t)}function g_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KT(t){return t.collectionGroup!==null}function po(t){const e=te(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new nc(i,r))}),n.has(ot.keyField().canonicalString())||e.he.push(new nc(ot.keyField(),r))}return e.he}function Dn(t){const e=te(t);return e.Pe||(e.Pe=OM(e,po(t))),e.Pe}function OM(t,e){if(t.limitType==="F")return m_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new nc(s.field,i)});const n=t.endAt?new tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tc(t.startAt.position,t.startAt.inclusive):null;return m_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function md(t,e){const n=t.filters.concat([e]);return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gd(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zc(t,e){return rp(Dn(t),Dn(e))&&t.limitType===e.limitType}function zT(t){return`${np(Dn(t))}|lt:${t.limitType}`}function $s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>WT(s)).join(", ")}]`),Jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=f_(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,po(r),s)||r.endAt&&!function(o,a,l){const c=f_(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,po(r),s))}(t,e)}function DM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GT(t){return(e,n)=>{let r=!1;for(const s of po(t)){const i=xM(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xM(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?fi(l,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return LT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=new De(G.comparator);function Jn(){return MM}const QT=new De(G.comparator);function eo(...t){let e=QT;for(const n of t)e=e.insert(n.key,n);return e}function YT(t){let e=QT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function es(){return mo()}function XT(){return mo()}function mo(){return new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}const LM=new De(G.comparator),VM=new ut(G.comparator);function le(...t){let e=VM;for(const n of t)e=e.add(n);return e}const FM=new ut(ge);function UM(){return FM}/**
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
 */function JT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(e)?"-0":e}}function ZT(t){return{integerValue:""+t}}function $M(t,e){return _M(e)?ZT(e):JT(t,e)}/**
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
 */class tu{constructor(){this._=void 0}}function BM(t,e,n){return t instanceof rc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zf(i)&&(i=ep(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof zo?tI(t,e):t instanceof Go?nI(t,e):function(s,i){const o=eI(s,i),a=__(o)+__(s.Te);return dd(o)&&dd(s.Te)?ZT(a):JT(s.serializer,a)}(t,e)}function jM(t,e,n){return t instanceof zo?tI(t,e):t instanceof Go?nI(t,e):n}function eI(t,e){return t instanceof sc?function(r){return dd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class rc extends tu{}class zo extends tu{constructor(e){super(),this.elements=e}}function tI(t,e){const n=rI(e);for(const r of t.elements)n.some(s=>Vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends tu{constructor(e){super(),this.elements=e}}function nI(t,e){let n=rI(e);for(const r of t.elements)n=n.filter(s=>!Vn(s,r));return{arrayValue:{values:n}}}class sc extends tu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function __(t){return qe(t.integerValue||t.doubleValue)}function rI(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WM(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof zo&&s instanceof zo||r instanceof Go&&s instanceof Go?di(r.elements,s.elements,Vn):r instanceof sc&&s instanceof sc?Vn(r.Te,s.Te):r instanceof rc&&s instanceof rc}(t.transform,e.transform)}class qM{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nu{}function sI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oI(t.key,ln.none()):new Ta(t.key,t.data,ln.none());{const n=t.data,r=Dt.empty();let s=new ut(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Br(t.key,r,new Ft(s.toArray()),ln.none())}}function HM(t,e,n){t instanceof Ta?function(s,i,o){const a=s.value.clone(),l=v_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(s,i,o){if(!fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=v_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(iI(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof Ta?function(i,o,a,l){if(!fl(i.precondition,o))return a;const c=i.value.clone(),u=E_(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(i,o,a,l){if(!fl(i.precondition,o))return a;const c=E_(i.fieldTransforms,l,o),u=o.data;return u.setAll(iI(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function KM(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=eI(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function y_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>WM(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends nu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Br extends nu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function v_(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,jM(o,a,n[s]))}return r}function E_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,BM(i,o,e))}return r}class oI extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zM extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=XT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=sI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>y_(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>y_(n,r))}}class sp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return LM}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sp(e,n,r,s)}}/**
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
 */class QM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,he;function XM(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function aI(t){if(t===void 0)return Xn("GRPC error has no .code"),I.UNKNOWN;switch(t){case We.OK:return I.OK;case We.CANCELLED:return I.CANCELLED;case We.UNKNOWN:return I.UNKNOWN;case We.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case We.INTERNAL:return I.INTERNAL;case We.UNAVAILABLE:return I.UNAVAILABLE;case We.UNAUTHENTICATED:return I.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case We.NOT_FOUND:return I.NOT_FOUND;case We.ALREADY_EXISTS:return I.ALREADY_EXISTS;case We.PERMISSION_DENIED:return I.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case We.ABORTED:return I.ABORTED;case We.OUT_OF_RANGE:return I.OUT_OF_RANGE;case We.UNIMPLEMENTED:return I.UNIMPLEMENTED;case We.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(he=We||(We={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JM(){return new TextEncoder}/**
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
 */const ZM=new ni([4294967295,4294967295],0);function w_(t){const e=JM().encode(t),n=new nM;return n.update(e),new Uint8Array(n.digest())}function T_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ni([n,r],0),new ni([s,i],0)]}class ip{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=ni.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(ni.fromNumber(r)));return s.compare(ZM)===1&&(s=new ni([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=w_(e),[r,s]=T_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ip(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=w_(e),[r,s]=T_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(ee.min(),s,new De(ge),Jn(),le())}}class Ia{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class lI{constructor(e,n){this.targetId=e,this.ge=n}}class cI{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class I_{constructor(){this.pe=0,this.ye=R_(),this.we=Tt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=le(),n=le(),r=le();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Ia(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=R_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class eL{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Jn(),this.Ke=b_(),this.$e=new De(ge)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.He(s)&&n(s)})}Ye(e){const n=e.targetId,r=e.ge.count,s=this.Ze(n);if(s){const i=s.target;if(pd(i))if(r===0){const o=new G(i.path);this.Ge(n,o,mt.newNoDocument(o,ee.min()))}else ke(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),l=a?this.tt(a,e,o):1;if(l!==0){this.Je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,c)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Is(r).toUint8Array()}catch(l){if(l instanceof VT)return hi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ip(o,s,i)}catch(l){return hi(l instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,i,null),s++)}),s}st(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Ze(o);if(a){if(i.current&&pd(a.target)){const l=new G(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,mt.newNoDocument(l,e))}i.Ce&&(n.set(o,i.Fe()),i.Me())}});let r=le();this.Ke.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ze(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new ru(e,n,this.$e,this.Qe,r);return this.Qe=Jn(),this.Ke=b_(),this.$e=new De(ge),s}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const s=this.je(e);this.ot(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new I_,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new ut(ge),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new I_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function b_(){return new De(G.comparator)}function R_(){return new De(G.comparator)}const tL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rL=(()=>({and:"AND",or:"OR"}))();class sL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _d(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function ic(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iL(t,e){return ic(t,e.toTimestamp())}function xn(t){return ke(!!t),ee.fromTimestamp(function(n){const r=kr(n);return new Ge(r.seconds,r.nanos)}(t))}function op(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function hI(t){const e=Pe.fromString(t);return ke(mI(e)),e}function yd(t,e){return op(t.databaseId,e.path)}function Gu(t,e){const n=hI(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(dI(n))}function vd(t,e){return op(t.databaseId,e)}function oL(t){const e=hI(t);return e.length===4?Pe.emptyPath():dI(e)}function Ed(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dI(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function A_(t,e,n){return{name:yd(t,e),fields:n.value.mapValue.fields}}function aL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ke(u===void 0||typeof u=="string"),Tt.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),Tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:aI(c.code);return new B(u,c.message||"")}(o);n=new cI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gu(t,r.document.name),i=xn(r.document.updateTime),o=r.document.createTime?xn(r.document.createTime):ee.min(),a=new Dt({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new pl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gu(t,r.document),i=r.readTime?xn(r.readTime):ee.min(),o=mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new pl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gu(t,r.document),i=r.removedTargetIds||[];n=new pl([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YM(s,i),a=r.targetId;n=new lI(a,o)}}return n}function lL(t,e){let n;if(e instanceof Ta)n={update:A_(t,e.key,e.value)};else if(e instanceof oI)n={delete:yd(t,e.key)};else if(e instanceof Br)n={update:A_(t,e.key,e.data),updateMask:_L(e.fieldMask)};else{if(!(e instanceof zM))return X();n={verify:yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof rc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function cL(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?xn(s.updateTime):xn(i);return o.isEqual(ee.min())&&(o=xn(i)),new qM(o,s.transformResults||[])}(n,e))):[]}function uL(t,e){return{documents:[vd(t,e.path)]}}function hL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=vd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return pI(fn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Bs(h.field),direction:pL(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=_d(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function dL(t){let e=oL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=fI(h);return d instanceof fn&&BT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new nc(js(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Jc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new tc(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new tc(p,d)}(n.endAt)),NM(e,s,o,i,a,"F",l,c)}function fL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=js(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=js(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return He.create(js(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>fI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function pL(t){return tL[t]}function mL(t){return nL[t]}function gL(t){return rL[t]}function Bs(t){return{fieldPath:t.canonicalString()}}function js(t){return ot.fromServerFormat(t.fieldPath)}function pI(t){return t instanceof He?function(n){if(n.op==="=="){if(d_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NAN"}};if(h_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(d_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NAN"}};if(h_(n.value))return{unaryFilter:{field:Bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(n.field),op:mL(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>pI(s));return r.length===1?r[0]:{compositeFilter:{op:gL(n.op),filters:r}}}(t):X()}function _L(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=Tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e){this.ct=e}}function vL(t){const e=dL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gd(e,e.limit,"L"):e}/**
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
 */class EL{constructor(){this._n=new wL}addToCollectionParentIndex(e,n){return this._n.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Pr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class wL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new mi(0)}static Bn(){return new mi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(){this.changes=new Si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&go(r.mutation,s,Ft.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=eo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Jn();const o=mo(),a=function(){return mo()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Br)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),go(u.mutation,c,u.mutation.getFieldMask(),Ge.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new IL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=mo();let s=new De((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ft.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||le()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=XT();u.forEach(d=>{if(!i.has(d)){const p=sI(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(es());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:YT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=eo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=eo();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,l=>{const c=function(h,d){return new wa(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,mt.newInvalidDocument(u)))});let a=eo();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&go(u.mutation,c,Ft.empty(),Ge.now()),eu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class RL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return A.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:xn(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:vL(s.bundledQuery),readTime:xn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class AL{constructor(){this.overlays=new De(G.comparator),this.hr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=es();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=es(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=es(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=es(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QM(n,r));let i=this.hr.get(n);i===void 0&&(i=le(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.Pr=new ut(Ye.Ir),this.Tr=new ut(Ye.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ye(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new Pe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new Pe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=le();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||ge(e.pr,n.pr)}static Er(e,n){return ge(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ut(Ye.Ir)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GM(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(ge);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),A.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new G(i),0);let a=new ut(ge);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),A.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return A.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ye(n,0),s=this.wr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e){this.vr=e,this.docs=function(){return new De(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||pM(fM(u),r)<=0||(s.has(u.key)||eu(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}Fr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PL(this)}getSize(e){return A.resolve(this.size)}}class PL extends TL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e){this.persistence=e,this.Mr=new Si(n=>np(n),rp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ap,this.targetCount=0,this.Br=mi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),A.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.qn(n),A.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Jf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new kL(this),this.indexManager=new EL,this.remoteDocumentCache=function(s){return new SL(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yL(n),this.$r=new RL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new CL(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new OL(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return A.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class OL extends gM{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.zr=new ap,this.jr=null}static Hr(e){return new lp(e)}get Jr(){if(this.jr)return this.jr;throw X()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),A.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Jr,r=>{const s=G.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return A.or([()=>A.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cp(e,n.fromCache,r,s)}}/**
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
 */class DL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xL{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new DL;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(ji()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",$s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),A.resolve()):(ji()<=ae.DEBUG&&W("QueryEngine","Query:",$s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(ji()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",$s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):A.resolve())}ji(e,n){if(g_(n))return A.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gd(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,gd(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return g_(n)||s.isEqual(ee.min())?A.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?A.resolve(null):(ji()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$s(n)),this.es(e,o,n,dM(s,-1)).next(a=>a))})}Zi(e,n){let r=new ut(GT(e));return n.forEach((s,i)=>{eu(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return ji()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",$s(n)),this.zi.getDocumentsMatchingQuery(e,n,Pr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ML{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new De(ge),this.rs=new Si(i=>np(i),rp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function LL(t,e,n,r){return new ML(t,e,n,r)}async function gI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=le();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function VL(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=A.resolve();return d.forEach(g=>{p=p.next(()=>u.getEntry(l,g)).next(E=>{const v=c.docVersions.get(g);ke(v!==null),E.version.compareTo(v)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _I(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function FL(t,e){const n=te(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Tt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,v,C){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let l=Jn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(UL(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ee.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function UL(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Jn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function $L(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function wd(t,e,n){const r=te(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ea(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function C_(t,e,n){const r=te(t);let s=ee.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=te(l),d=h.rs.get(u);return d!==void 0?A.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,Dn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:le())).next(a=>(jL(r,DM(e),a),{documents:a,hs:i})))}function jL(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class S_{constructor(){this.activeTargetIds=UM()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WL{constructor(){this.no=new S_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new S_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qL{io(e){}shutdown(){}}/**
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
 */class P_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ya=null;function Qu(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
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
 */const HL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class zL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Qu(),l=this.bo(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw hi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ci}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=HL[n];return`${this.fo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Qu();return new Promise((o,a)=>{const l=new tM;l.setWithCredentials(!0),l.listenOnce(Zx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zu.NO_ERROR:const u=l.getResponseJson();W(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case zu.TIMEOUT:W(ht,`RPC '${e}' ${i} timed out`),a(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case zu.HTTP_ERROR:const h=l.getStatus();if(W(ht,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const C=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(C)>=0?C:I.UNKNOWN}(p.status);a(new B(g,p.message))}else a(new B(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(ht,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);W(ht,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=Qu(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Xx(),a=Jx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");W(ht,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const g=new KL({lo:v=>{p?W(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(W(ht,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),W(ht,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},ho:()=>h.close()}),E=(v,C,D)=>{v.listen(C,N=>{try{D(N)}catch(K){setTimeout(()=>{throw K},0)}})};return E(h,za.EventType.OPEN,()=>{p||W(ht,`RPC '${e}' stream ${s} transport opened.`)}),E(h,za.EventType.CLOSE,()=>{p||(p=!0,W(ht,`RPC '${e}' stream ${s} transport closed`),g.Vo())}),E(h,za.EventType.ERROR,v=>{p||(p=!0,hi(ht,`RPC '${e}' stream ${s} transport errored:`,v),g.Vo(new B(I.UNAVAILABLE,"The operation could not be completed")))}),E(h,za.EventType.MESSAGE,v=>{var C;if(!p){const D=v.data[0];ke(!!D);const N=D,K=N.error||((C=N[0])===null||C===void 0?void 0:C.error);if(K){W(ht,`RPC '${e}' stream ${s} received error:`,K);const U=K.status;let me=function(Be){const tt=We[Be];if(tt!==void 0)return aI(tt)}(U),xe=K.message;me===void 0&&(me=I.INTERNAL,xe="Unknown error status: "+U+" with message "+K.message),p=!0,g.Vo(new B(me,xe)),h.close()}else W(ht,`RPC '${e}' stream ${s} received:`,D),g.mo(D)}}),E(a,eM.STAT_EVENT,v=>{v.stat===i_.PROXY?W(ht,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===i_.NOPROXY&&W(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function Yu(){return typeof document<"u"?document:null}/**
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
 */function su(t){return new sL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new yI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new B(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GL extends vI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=aL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?xn(o.readTime):ee.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Ed(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=pd(l)?{documents:uL(i,l)}:{query:hL(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uI(i,o.resumeToken);const c=_d(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=ic(i,o.snapshotVersion.toTimestamp());const c=_d(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=fL(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Ed(this.serializer),n.removeTarget=e,this.t_(n)}}class QL extends vI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=cL(e.writeResults,e.commitTime),r=xn(e.commitTime);return this.listener.T_(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ed(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lL(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.So(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(I.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.A_=!0}}class XL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Xn(n),this.g_=!1):W("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Os(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.v_.add(4),await ba(c),c.x_.set("Unknown"),c.v_.delete(4),await iu(c)}(this))})}),this.x_=new XL(r,s)}}async function iu(t){if(Os(t))for(const e of t.F_)await e(!0)}async function ba(t){for(const e of t.F_)await e(!1)}function EI(t,e){const n=te(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),dp(n)?hp(n):Pi(n).Jo()&&up(n,e))}function wI(t,e){const n=te(t),r=Pi(n);n.C_.delete(e),r.Jo()&&TI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Os(n)&&n.x_.set("Unknown"))}function up(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pi(t).c_(e)}function TI(t,e){t.O_.Ne(e),Pi(t).l_(e)}function hp(t){t.O_=new eL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Pi(t).start(),t.x_.p_()}function dp(t){return Os(t)&&!Pi(t).Ho()&&t.C_.size>0}function Os(t){return te(t).v_.size===0}function II(t){t.O_=void 0}async function ZL(t){t.C_.forEach((e,n)=>{up(t,e)})}async function eV(t,e){II(t),dp(t)?(t.x_.S_(e),hp(t)):t.x_.set("Unknown")}async function tV(t,e,n){if(t.x_.set("Online"),e instanceof cI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oc(t,r)}else if(e instanceof pl?t.O_.Ue(e):e instanceof lI?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(ee.min()))try{const r=await _I(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Tt.EMPTY_BYTE_STRING,u.snapshotVersion)),TI(i,l);const h=new gr(u.target,l,c,u.sequenceNumber);up(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await oc(t,r)}}async function oc(t,e,n){if(!Ea(e))throw e;t.v_.add(1),await ba(t),t.x_.set("Offline"),n||(n=()=>_I(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await iu(t)})}function bI(t,e){return e().catch(n=>oc(t,n,e))}async function ou(t){const e=te(t),n=Nr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;nV(e);)try{const s=await $L(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,rV(e,s)}catch(s){await oc(e,s)}RI(e)&&AI(e)}function nV(t){return Os(t)&&t.D_.length<10}function rV(t,e){t.D_.push(e);const n=Nr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function RI(t){return Os(t)&&!Nr(t).Ho()&&t.D_.length>0}function AI(t){Nr(t).start()}async function sV(t){Nr(t).d_()}async function iV(t){const e=Nr(t);for(const n of t.D_)e.I_(n.mutations)}async function oV(t,e,n){const r=t.D_.shift(),s=sp.from(r,e,n);await bI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ou(t)}async function aV(t,e){e&&Nr(t).P_&&await async function(r,s){if(function(o){return XM(o)&&o!==I.ABORTED}(s.code)){const i=r.D_.shift();Nr(r).Zo(),await bI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ou(r)}}(t,e),RI(t)&&AI(t)}async function k_(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Os(n);n.v_.add(3),await ba(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await iu(n)}async function lV(t,e){const n=te(t);e?(n.v_.delete(2),await iu(n)):e||(n.v_.add(2),await ba(n),n.x_.set("Unknown"))}function Pi(t){return t.N_||(t.N_=function(n,r,s){const i=te(n);return i.R_(),new GL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:ZL.bind(null,t),To:eV.bind(null,t),u_:tV.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),dp(t)?hp(t):t.x_.set("Unknown")):(await t.N_.stop(),II(t))})),t.N_}function Nr(t){return t.B_||(t.B_=function(n,r,s){const i=te(n);return i.R_(),new QL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:sV.bind(null,t),To:aV.bind(null,t),E_:iV.bind(null,t),T_:oV.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await ou(t)):(await t.B_.stop(),t.D_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new fp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),Ea(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class N_{constructor(){this.L_=new De(G.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):X():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gi(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(){this.q_=void 0,this.listeners=[]}}class uV{constructor(){this.queries=new Si(e=>zT(e),Zc),this.onlineState="Unknown",this.Q_=new Set}}async function hV(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new cV),s)try{i.q_=await n.onListen(r)}catch(o){const a=pp(o,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.K_(n.onlineState),i.q_&&e.U_(i.q_)&&mp(n)}async function dV(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function fV(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.U_(s)&&(r=!0);o.q_=s}}r&&mp(n)}function pV(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function mp(t){t.Q_.forEach(e=>{e.next()})}class mV{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.key=e}}class SI{constructor(e){this.key=e}}class gV{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=le(),this.mutatedKeys=le(),this.aa=GT(e),this.ua=new ri(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new N_,s=n?n.ua:this.ua;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=eu(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?g!==E&&(r.track({type:3,doc:p}),v=!0):this.Pa(d,p)||(r.track({type:2,doc:p}),v=!0,(l&&this.aa(p,l)>0||c&&this.aa(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ua:o,ha:r,Xi:a,mutatedKeys:i}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const i=e.ha.k_();i.sort((c,u)=>function(d,p){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return g(d)-g(p)}(c.type,u.type)||this.aa(c.doc,u.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,i.length!==0||l?{snapshot:new gi(this.query,e.ua,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new N_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=le(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new SI(r))}),this._a.forEach(r=>{e.has(r)||n.push(new CI(r))}),n}Aa(e){this.sa=e.hs,this._a=le();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return gi.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class _V{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yV{constructor(e){this.key=e,this.Va=!1}}class vV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Si(a=>zT(a),Zc),this.ga=new Map,this.pa=new Set,this.ya=new De(G.comparator),this.wa=new Map,this.Sa=new ap,this.ba={},this.Da=new Map,this.Ca=mi.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function EV(t,e){const n=kV(t);let r,s;const i=n.fa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ra();else{const o=await BL(n.localStore,Dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await wV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&EI(n.remoteStore,o)}return s}async function wV(t,e,n,r,s){t.Fa=(h,d,p)=>async function(E,v,C,D){let N=v.view.la(C);N.Xi&&(N=await C_(E.localStore,v.query,!1).then(({documents:me})=>v.view.la(me,N)));const K=D&&D.targetChanges.get(v.targetId),U=v.view.applyChanges(N,E.isPrimaryClient,K);return D_(E,v.targetId,U.Ea),U.snapshot}(t,h,d,p);const i=await C_(t.localStore,e,!0),o=new gV(e,i.hs),a=o.la(i.documents),l=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);D_(t,n,c.Ea);const u=new _V(e,n,o);return t.fa.set(e,u),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),c.snapshot}async function TV(t,e){const n=te(t),r=n.fa.get(e),s=n.ga.get(r.targetId);if(s.length>1)return n.ga.set(r.targetId,s.filter(i=>!Zc(i,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wI(n.remoteStore,r.targetId),Td(n,r.targetId)}).catch(va)):(Td(n,r.targetId),await wd(n.localStore,r.targetId,!0))}async function IV(t,e,n){const r=NV(t);try{const s=await function(o,a){const l=te(o),c=Ge.now(),u=a.reduce((p,g)=>p.add(g.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Jn(),E=le();return l.os.getEntries(p,u).next(v=>{g=v,g.forEach((C,D)=>{D.isValidDocument()||(E=E.add(C))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,g)).next(v=>{h=v;const C=[];for(const D of a){const N=KM(D,h.get(D.key).overlayedDocument);N!=null&&C.push(new Br(D.key,N,FT(N.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,C,a)}).next(v=>{d=v;const C=v.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(p,v.batchId,C)})}).then(()=>({batchId:d.batchId,changes:YT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.ba[o.currentUser.toKey()];c||(c=new De(ge)),c=c.insert(a,l),o.ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ra(r,s.changes),await ou(r.remoteStore)}catch(s){const i=pp(s,"Failed to persist write");n.reject(i)}}async function PI(t,e){const n=te(t);try{const r=await FL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.wa.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Va=!0:s.modifiedDocuments.size>0?ke(o.Va):s.removedDocuments.size>0&&(ke(o.Va),o.Va=!1))}),await Ra(n,r,e)}catch(r){await va(r)}}function O_(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.fa.forEach((i,o)=>{const a=o.view.K_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.K_(a)&&(c=!0)}),c&&mp(l)}(r.eventManager,e),s.length&&r.ma.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bV(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.wa.get(e),i=s&&s.key;if(i){let o=new De(G.comparator);o=o.insert(i,mt.newNoDocument(i,ee.min()));const a=le().add(i),l=new ru(ee.min(),new Map,new De(ge),o,a);await PI(r,l),r.ya=r.ya.remove(i),r.wa.delete(e),gp(r)}else await wd(r.localStore,e,!1).then(()=>Td(r,e,n)).catch(va)}async function RV(t,e){const n=te(t),r=e.batch.batchId;try{const s=await VL(n.localStore,e);NI(n,r,null),kI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,s)}catch(s){await va(s)}}async function AV(t,e,n){const r=te(t);try{const s=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ke(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);NI(r,e,n),kI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,s)}catch(s){await va(s)}}function kI(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function NI(t,e,n){const r=te(t);let s=r.ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ba[r.currentUser.toKey()]=s}}function Td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||OI(t,r)})}function OI(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(wI(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),gp(t))}function D_(t,e,n){for(const r of n)r instanceof CI?(t.Sa.addReference(r.key,e),CV(t,r)):r instanceof SI?(W("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||OI(t,r.key)):X()}function CV(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.pa.add(r),gp(t))}function gp(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new G(Pe.fromString(e)),r=t.Ca.next();t.wa.set(r,new yV(n)),t.ya=t.ya.insert(n,r),EI(t.remoteStore,new gr(Dn(HT(n.path)),r,"TargetPurposeLimboResolution",Jf.ae))}}async function Ra(t,e,n){const r=te(t),s=[],i=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=cp.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ma.u_(s),await async function(l,c){const u=te(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(c,d=>A.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>A.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Ea(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),g=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(g);u.ns=u.ns.insert(d,E)}}}(r.localStore,i))}async function SV(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await gI(n.localStore,e);n.currentUser=e,function(i,o){i.Da.forEach(a=>{a.forEach(l=>{l.reject(new B(I.CANCELLED,o))})}),i.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.us)}}function PV(t,e){const n=te(t),r=n.wa.get(e);if(r&&r.Va)return le().add(r.key);{let s=le();const i=n.ga.get(e);if(!i)return s;for(const o of i){const a=n.fa.get(o);s=s.unionWith(a.view.ca)}return s}}function kV(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bV.bind(null,e),e.ma.u_=fV.bind(null,e.eventManager),e.ma.Ma=pV.bind(null,e.eventManager),e}function NV(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AV.bind(null,e),e}class x_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return LL(this.persistence,new xL,e.initialUser,this.serializer)}createPersistence(e){return new NL(lp.Hr,this.serializer)}createSharedClientState(e){return new WL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class OV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>O_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SV.bind(null,this.syncEngine),await lV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uV}()}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=function(i){return new zL(i)}(e.databaseInfo);return function(i,o,a,l){return new YL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new JL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>O_(this.syncEngine,n,0),function(){return P_.C()?new P_:new qL}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new vV(s,i,o,a,l,c);return u&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);W("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await ba(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
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
 */class DV{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=MT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xu(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function M_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LV(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>k_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>k_(e.remoteStore,i)),t._onlineComponents=e}function MV(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function LV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!MV(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await Xu(t,new x_)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Xu(t,new x_);return t._offlineComponents}async function DI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await M_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await M_(t,new OV))),t._onlineComponents}function VV(t){return DI(t).then(e=>e.syncEngine)}async function FV(t){const e=await DI(t),n=e.eventManager;return n.onListen=EV.bind(null,e.syncEngine),n.onUnlisten=TV.bind(null,e.syncEngine),n}function UV(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new DV({next:d=>{o.enqueueAndForget(()=>dV(i,h)),d.fromCache&&l.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new mV(a,u,{includeMetadataChanges:!0,Y_:!0});return hV(i,h)}(await FV(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function xI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const L_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $V(t,e,n,r){if(e===!0&&r===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function V_(t){if(!G.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function F_(t){if(G.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function au(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=au(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class U_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$V("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new U_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new U_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rM;switch(r.type){case"firstParty":return new aM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=L_.get(n);r&&(W("ComponentProvider","Removing Datastore"),L_.delete(n),r.terminate())}(this),Promise.resolve()}}function BV(t,e,n,r={}){var s;const i=(t=Or(t,lu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=dt.MOCK_USER;else{a=Pv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(c)}t._authCredentials=new sM(new xT(a,l))}}/**
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
 */class ki{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ki(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class Tr extends ki{constructor(e,n,r){super(e,n,HT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new G(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function cu(t,e,...n){if(t=$e(t),MI("collection","path",e),t instanceof lu){const r=Pe.fromString(e,...n);return F_(r),new Tr(t,null,r)}{if(!(t instanceof Mt||t instanceof Tr))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return F_(r),new Tr(t.firestore,null,r)}}function _p(t,e,...n){if(t=$e(t),arguments.length===1&&(e=MT.V()),MI("doc","path",e),t instanceof lu){const r=Pe.fromString(e,...n);return V_(r),new Mt(t,null,new G(r))}{if(!(t instanceof Mt||t instanceof Tr))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return V_(r),new Mt(t.firestore,t instanceof Tr?t.converter:null,new G(r))}}/**
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
 */class jV{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new yI(this,"async_queue_retry"),this.su=()=>{const n=Yu();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Yu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=Yu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new wr;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!Ea(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const s=fp.createAndSchedule(this,e,n,r,i=>this.uu(i));return this.eu.push(s),s}ou(){this.tu&&X()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class Aa extends lu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new jV}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||VI(this),this._firestoreClient.terminate()}}function WV(t,e){const n=typeof t=="object"?t:Cc(),r=typeof t=="string"?t:e||"(default)",s=Ac(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Av("firestore");i&&BV(s,...i)}return s}function LI(t){return t._firestoreClient||VI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function VI(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new vM(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,xI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new xV(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(Tt.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=/^__.*__$/;class HV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class FI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Ep{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Iu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Ru(e),s}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Iu(),s}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return ac(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(UI(this.Tu)&&qV.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class KV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}yu(e,n,r,s=!1){return new Ep({Tu:e,methodName:n,pu:r,path:ot.emptyPath(),Au:!1,gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hu(t){const e=t._freezeSettings(),n=su(t._databaseId);return new KV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $I(t,e,n,r,s,i={}){const o=t.yu(i.merge||i.mergeFields?2:0,e,n,s);wp("Data must be an object, but it was:",o,r);const a=BI(r,o);let l,c;if(i.merge)l=new Ft(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Id(e,h,n);if(!o.contains(d))throw new B(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);WI(u,d)||u.push(d)}l=new Ft(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new HV(new Dt(a),l,c)}class du extends yp{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.fu(`${this._methodName}() can only appear at the top level of your update data`):e.fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof du}}function zV(t,e,n,r){const s=t.yu(1,e,n);wp("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();Ns(r,(l,c)=>{const u=Tp(e,l,n);c=$e(c);const h=s.Vu(u);if(c instanceof du)i.push(u);else{const d=Ca(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ft(i);return new FI(o,a,s.fieldTransforms)}function GV(t,e,n,r,s,i){const o=t.yu(1,e,n),a=[Id(e,r,n)],l=[s];if(i.length%2!=0)throw new B(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Id(e,i[d])),l.push(i[d+1]);const c=[],u=Dt.empty();for(let d=a.length-1;d>=0;--d)if(!WI(c,a[d])){const p=a[d];let g=l[d];g=$e(g);const E=o.Vu(p);if(g instanceof du)c.push(p);else{const v=Ca(g,E);v!=null&&(c.push(p),u.set(p,v))}}const h=new Ft(c);return new FI(u,h,o.fieldTransforms)}function QV(t,e,n,r=!1){return Ca(n,t.yu(r?4:3,e))}function Ca(t,e){if(jI(t=$e(t)))return wp("Unsupported field value:",e,t),BI(t,e);if(t instanceof yp)return function(r,s){if(!UI(s.Tu))throw s.fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ca(a,s.mu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $M(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:ic(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ic(s.serializer,i)}}if(r instanceof vp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _i)return{bytesValue:uI(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:op(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.fu(`Unsupported field value: ${au(r)}`)}(t,e)}function BI(t,e){const n={};return LT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ns(t,(r,s)=>{const i=Ca(s,e.du(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function jI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof vp||t instanceof _i||t instanceof Mt||t instanceof yp)}function wp(t,e,n){if(!jI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=au(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function Id(t,e,n){if((e=$e(e))instanceof uu)return e._internalPath;if(typeof e=="string")return Tp(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const YV=new RegExp("[~\\*/\\[\\]]");function Tp(t,e,n){if(e.search(YV)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uu(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(I.INVALID_ARGUMENT,a+t+l)}function WI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(HI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XV extends qI{data(){return super.data()}}function HI(t,e){return typeof e=="string"?Tp(t,e):e instanceof uu?e._internalPath:e._delegate._internalPath}/**
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
 */function JV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ip{}class ZV extends Ip{}function eF(t,e,...n){let r=[];e instanceof Ip&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Rp).length,a=i.filter(l=>l instanceof bp).length;if(o>1||o>0&&a>0)throw new B(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class bp extends ZV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bp(e,n,r)}_apply(e){const n=this._parse(e);return KI(e._query,n),new ki(e.firestore,e.converter,md(e._query,n))}_parse(e){const n=hu(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){B_(h,u);const p=[];for(const g of h)p.push($_(l,i,g));d={arrayValue:{values:p}}}else d=$_(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||B_(h,u),d=QV(a,o,h,u==="in"||u==="not-in");return He.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Rp extends Ip{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)KI(o,l),o=md(o,l)}(e._query,n),new ki(e.firestore,e.converter,md(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $_(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new B(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KT(e)&&n.indexOf("/")!==-1)throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!G.isDocumentKey(r))throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return u_(t,new G(r))}if(n instanceof Mt)return u_(t,n._key);throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${au(n)}.`)}function B_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KI(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class tF{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ns(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new vp(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);ke(mI(r));const s=new Ho(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function zI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nF extends qI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(HI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends nF{data(e={}){return super.data(e)}}class rF{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new Xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new ml(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new ml(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:sF(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class iF extends tF{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function oF(t){t=Or(t,ki);const e=Or(t.firestore,Aa),n=LI(e),r=new iF(e);return JV(t._query),UV(n,t._query).then(s=>new rF(e,r,t,s))}function aF(t,e,n){t=Or(t,Mt);const r=Or(t.firestore,Aa),s=zI(t.converter,e,n);return Ap(r,[$I(hu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ln.none())])}function GI(t,e,n,...r){t=Or(t,Mt);const s=Or(t.firestore,Aa),i=hu(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof uu?GV(i,"updateDoc",t._key,e,n,r):zV(i,"updateDoc",t._key,e),Ap(s,[o.toMutation(t._key,ln.exists(!0))])}function QI(t,e){const n=Or(t.firestore,Aa),r=_p(t),s=zI(t.converter,e);return Ap(n,[$I(hu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function Ap(t,e){return function(r,s){const i=new wr;return r.asyncQueue.enqueueAndForget(async()=>IV(await VV(r),s,i)),i.promise}(LI(t),e)}(function(e,n=!0){(function(s){Ci=s})(Mr),Ln(new cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Aa(new iM(r.getProvider("auth-internal")),new cM(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),$t(o_,"4.3.0",e),$t(o_,"4.3.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="firebasestorage.googleapis.com",XI="storageBucket",lF=2*60*1e3,cF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Fn{constructor(e,n,r=0){super(Ju(e),`Firebase Storage: ${n} (${Ju(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ju(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Ju(t){return"storage/"+t}function Cp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,t)}function uF(t){return new Ue(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function hF(t){return new Ue(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Fe.UNAUTHENTICATED,t)}function fF(){return new Ue(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pF(t){return new Ue(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mF(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gF(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function _F(t){return new Ue(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function yF(t){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vF(){return new Ue(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+XI+"' property when initializing the app?")}function EF(){return new Ue(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wF(){return new Ue(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TF(t){return new Ue(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bd(t){return new Ue(Fe.INVALID_ARGUMENT,t)}function JI(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function IF(t){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _o(t,e){return new Ue(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Wi(t){throw new Ue(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw yF(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(K){K.path_=decodeURIComponent(K.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},E=n===YI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",C=new RegExp(`^https?://${E}/${s}/${v}`,"i"),N=[{regex:a,indices:l,postModify:i},{regex:p,indices:g,postModify:c},{regex:C,indices:{bucket:1,path:2},postModify:c}];for(let K=0;K<N.length;K++){const U=N[K],me=U.regex.exec(e);if(me){const xe=me[U.indices.bucket];let et=me[U.indices.path];et||(et=""),r=new Ut(xe,et),U.postModify(r);break}}if(r==null)throw _F(e);return r}}class bF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RF(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(p,l())},v)}function d(){i&&clearTimeout(i)}function p(v,...C){if(c){d();return}if(v){d(),u.call(null,v,...C);return}if(l()||o){d(),u.call(null,v,...C);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let g=!1;function E(v){g||(g=!0,d(),!c&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function AF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t){return t!==void 0}function SF(t){return typeof t=="object"&&!Array.isArray(t)}function Sp(t){return typeof t=="string"||t instanceof String}function j_(t){return Pp()&&t instanceof Blob}function Pp(){return typeof Blob<"u"&&!iS()}function W_(t,e,n,r){if(r<e)throw bd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ZI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hs||(hs={}));/**
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
 */function PF(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ja(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===hs.NO_ERROR,l=i.getStatus();if(!a||PF(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===hs.ABORT;r(!1,new Ja(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Ja(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());CF(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Cp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?JI():gF();o(l)}else{const l=mF();o(l)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=RF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function NF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MF(t,e,n,r,s,i,o=!0){const a=ZI(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return DF(c,e),NF(c,n),OF(c,i),xF(c,r),new kF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VF(...t){const e=LF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pp())return new Blob(t);throw new Ue(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function UF(t){if(typeof atob>"u")throw TF("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zu{constructor(e,n){this.data=e,this.contentType=n||null}}function $F(t,e){switch(t){case Sn.RAW:return new Zu(eb(e));case Sn.BASE64:case Sn.BASE64URL:return new Zu(tb(t,e));case Sn.DATA_URL:return new Zu(jF(e),WF(e))}throw Cp()}function eb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function BF(t){let e;try{e=decodeURIComponent(t)}catch{throw _o(Sn.DATA_URL,"Malformed data URL.")}return eb(e)}function tb(t,e){switch(t){case Sn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw _o(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Sn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw _o(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UF(e)}catch(s){throw s.message.includes("polyfill")?s:_o(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class nb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw _o(Sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function jF(t){const e=new nb(t);return e.base64?tb(Sn.BASE64,e.rest):BF(e.rest)}function WF(t){return new nb(t).contentType}function qF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,s="";j_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(j_(this.data_)){const r=this.data_,s=FF(r,e,n);return s===null?null:new mr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Pp()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(VF.apply(null,n))}else{const n=e.map(o=>Sp(o)?$F(Sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new mr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){let e;try{e=JSON.parse(t)}catch{return null}return SF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function KF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function sb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t,e){return e}class bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||zF}}let Za=null;function GF(t){return!Sp(t)||t.length<2?t:sb(t)}function ib(){if(Za)return Za;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(i,o){return GF(o)}const n=new bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new bt("size");return s.xform=r,t.push(s),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),Za=t,Za}function QF(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function YF(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return QF(r,t),r}function ob(t,e,n){const r=rb(e);return r===null?null:YF(t,r,n)}function XF(t,e,n,r){const s=rb(e);if(s===null||!Sp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=kp(d,n,r),g=ZI({alt:"media",token:c});return p+g})[0]}function JF(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ab{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){if(!t)throw Cp()}function ZF(t,e){function n(r,s){const i=ob(t,s,e);return lb(i!==null),i}return n}function eU(t,e){function n(r,s){const i=ob(t,s,e);return lb(i!==null),XF(i,s,t.host,t._protocol)}return n}function cb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=fF():s=dF():n.getStatus()===402?s=hF(t.bucket):n.getStatus()===403?s=pF(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function tU(t){const e=cb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=uF(t.path)),i.serverResponse=s.serverResponse,i}return n}function nU(t,e,n){const r=e.fullServerUrl(),s=kp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ab(s,i,eU(t,n),o);return a.errorHandler=tU(e),a}function rU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function sU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=rU(null,e)),r}function iU(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let K=0;K<2;K++)N=N+Math.random().toString().slice(2);return N}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=sU(e,r,s),u=JF(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=mr.getBlob(h,r,d);if(p===null)throw EF();const g={name:c.fullPath},E=kp(i,t.host,t._protocol),v="POST",C=t.maxUploadRetryTime,D=new ab(E,v,ZF(t,n),C);return D.urlParams=g,D.headers=o,D.body=p.uploadData(),D.errorHandler=cb(e),D}class oU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Wi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aU extends oU{initXhr(){this.xhr_.responseType="text"}}function ub(){return new aU}/**
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
 */class Rs{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rs(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sb(this._location.path)}get storage(){return this._service}get parent(){const e=HF(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IF(e)}}function lU(t,e,n){t._throwIfRoot("uploadBytes");const r=iU(t.storage,t._location,ib(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,ub).then(s=>({metadata:s,ref:t}))}function cU(t){t._throwIfRoot("getDownloadURL");const e=nU(t.storage,t._location,ib());return t.storage.makeRequestWithTokens(e,ub).then(n=>{if(n===null)throw wF();return n})}function uU(t,e){const n=KF(t._location.path,e),r=new Ut(t._location.bucket,n);return new Rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hU(t){return/^[A-Za-z]+:\/\//.test(t)}function dU(t,e){return new Rs(t,e)}function hb(t,e){if(t instanceof Np){const n=t;if(n._bucket==null)throw vF();const r=new Rs(n,n._bucket);return e!=null?hb(r,e):r}else return e!==void 0?uU(t,e):t}function fU(t,e){if(e&&hU(e)){if(t instanceof Np)return dU(t,e);throw bd("To use ref(service, url), the first argument must be a Storage instance.")}else return hb(t,e)}function q_(t,e){const n=e==null?void 0:e[XI];return n==null?null:Ut.makeFromBucketSpec(n,t)}function pU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Pv(s,t.app.options.projectId))}class Np{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=YI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lF,this._maxUploadRetryTime=cF,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=q_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=q_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new bF(JI());{const o=MF(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const H_="@firebase/storage",K_="0.11.2";/**
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
 */const db="storage";function fb(t,e,n){return t=$e(t),lU(t,e,n)}function pb(t){return t=$e(t),cU(t)}function mb(t,e){return t=$e(t),fU(t,e)}function gb(t=Cc(),e){t=$e(t);const r=Ac(t,db).getImmediate({identifier:e}),s=Av("storage");return s&&mU(r,...s),r}function mU(t,e,n,r={}){pU(t,e,n,r)}function gU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Np(n,r,s,e,Mr)}function _U(){Ln(new cn(db,gU,"PUBLIC").setMultipleInstances(!0)),$t(H_,K_,""),$t(H_,K_,"esm2017")}_U();function yU(t){return(e,n)=>{const r=cO(e,n).run(()=>_y(t));uO.set(e,r),dO(r,e)}}function vU(t,{firebaseApp:e,modules:n=[]}){t.provide(EE,e);for(const r of n)r(e,t)}const EU="/assets/freehua-03dbab7b.svg";const pn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},wU={data(){return{user:null}},watch:{$route(t,e){this.user=localStorage.getItem("userCredential")}},created(){this.user=localStorage.getItem("userCredential")}},TU={class:"container-fluid"},IU=b("a",{class:"navbar-brand",href:"#"},[b("img",{src:EU,width:"40",height:"40"})],-1),bU=b("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[b("span",{class:"navbar-toggler-icon"})],-1),RU={class:"collapse navbar-collapse",id:"navbarNav"},AU={class:"navbar-nav"},CU=b("li",{class:"nav-item"},[b("a",{class:"nav-link active link_hua","aria-current":"page",href:"#"},"Início")],-1),SU=b("li",{class:"nav-item"},[b("a",{class:"nav-link link_hua",href:"#"},"Aplicativo")],-1),PU=b("li",{class:"nav-item"},[b("a",{class:"nav-link link_hua",href:"#"},"Sobre")],-1),kU={class:"container d-flex justify-content-end"},NU={key:0},OU=b("button",{type:"button",class:"btn btn-secondary ms-auto"}," Painel ",-1),DU={key:1},xU=b("button",{type:"button",class:"btn but_hua ms-auto"},"Entrar",-1);function MU(t,e,n,r,s,i){const o=xr("router-link");return at(),lt("nav",{class:"navbar navbar-expand-sm fixed-top nav_hua",key:s.user},[b("div",TU,[Re(o,{to:"/"},{default:Ct(()=>[IU]),_:1}),bU,b("div",RU,[b("ul",AU,[CU,Re(o,{to:"/app"},{default:Ct(()=>[SU]),_:1}),Re(o,{to:"/about"},{default:Ct(()=>[PU]),_:1})]),b("div",kU,[s.user?(at(),lt("div",NU,[Re(o,{to:"/dashboard"},{default:Ct(()=>[OU]),_:1})])):(at(),lt("div",DU,[Re(o,{to:"/login"},{default:Ct(()=>[xU]),_:1})]))])])])])}const LU=pn(wU,[["render",MU],["__file","/home/gabriel/freehua-web/src/components/Navbar.vue"]]),VU={__name:"App",setup(t){return(e,n)=>{const r=xr("router-view");return at(),lt(Ot,null,[Re(LU),Re(r)],64)}}},FU=pn(VU,[["__file","/home/gabriel/freehua-web/src/App.vue"]]),UU={apiKey:"AIzaSyDZe5Afwd4IF8O0sjGx8UBlJprasm20-Qk",authDomain:"freehua-db.firebaseapp.com",projectId:"freehua-db",storageBucket:"freehua-db.appspot.com",messagingSenderId:"912869104324",appId:"1:912869104324:web:867e8d751670c004fb0791",measurementId:"G-S0D7E23XXE"},_b=Lv(UU),Qo=WV(_b),Op=_E(),$U=(t,e)=>Ik(Op,t,e).then(n=>(localStorage.userCredential=JSON.stringify(n.user),n.user)).catch(n=>(alert(n.message),null)),BU=async(t,e,n)=>{try{const s=(await Tk(Op,t,e)).user;if(await jU(s.uid,n))return alert("Perfil criado com sucesso"),s}catch(r){return alert(r.message),null}},jU=async(t,e)=>{try{return await aF(_p(cu(Qo,"users"),t),{user_name:e,user_likes:{},user_karma:0,user_status:"",user_history:{},user_picture:"https://firebasestorage.googleapis.com/v0/b/freehua-db.appspot.com/o/cabalo.jpg?alt=media&token=b2cb42c7-5270-4c16-b44d-779ac4b5277e"}),!0}catch(n){return console.error("Erro ao armazenar o usuário no Firestore:",n),!1}},WU=async t=>{try{return await wk(Op,t)}catch(e){return alert(e.message),null}},qU={data(){return{email:""}},methods:{async submit(){if(this.email===""){alert("Preencha tudo");return}try{const t=await WU(this.email);console.log(t),t!==null&&(alert("Email de recuperação enviado"),this.$router.push("/login"))}catch(t){alert(t.message)}}}},HU={class:"container-fluid border rounded border-secondary p-4"},KU=b("h2",null,"Recuperação",-1),zU={class:"form-group my-4"},GU={class:"container-fluid"},QU=b("button",{class:"btn btn-lg btn-secondary ms-2"},"Voltar",-1);function YU(t,e,n,r,s,i){const o=xr("router-link");return at(),lt("div",HU,[b("form",null,[KU,b("div",zU,[Vt(b("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a),placeholder:"Email"},null,512),[[In,s.email]])]),b("div",GU,[b("button",{type:"submit",class:"btn btn-primary btn-lg",onClick:e[1]||(e[1]=ea((...a)=>i.submit&&i.submit(...a),["prevent"]))}," Enviar recuperação "),Re(o,{to:"/login"},{default:Ct(()=>[QU]),_:1})])])])}const XU=pn(qU,[["render",YU],["__file","/home/gabriel/freehua-web/src/pages/Recover.vue"]]),JU={data(){return{lastChapters:[]}},methods:{logoff(){localStorage.removeItem("userCredential")}}},ZU={class:"container"},e2={class:"list-group"},t2=["value"],n2={class:"mt-4"},r2=b("button",{type:"button",class:"btn btn-lg btn-primary"},"Novo livro",-1),s2=b("button",{type:"button",class:"btn btn-lg btn-primary ms-4"}," Novo capitulo ",-1);function i2(t,e,n,r,s,i){const o=xr("router-link");return at(),lt(Ot,null,[b("div",ZU,[b("ul",e2,[(at(!0),lt(Ot,null,Uy(s.lastChapters,a=>(at(),lt("li",{class:"list-group-item",key:a.parent,value:a.parent},eh(a.parent)+" em "+eh(a.release),9,t2))),128))])]),b("div",n2,[Re(o,{to:"/upload"},{default:Ct(()=>[r2]),_:1}),Re(o,{to:"/update"},{default:Ct(()=>[s2]),_:1}),Re(o,{to:"/login"},{default:Ct(()=>[b("button",{onClick:e[0]||(e[0]=(...a)=>i.logoff&&i.logoff(...a)),type:"button",class:"btn btn-danger ms-4"}," Sair ")]),_:1})])],64)}const o2=pn(JU,[["render",i2],["__file","/home/gabriel/freehua-web/src/pages/Dashboard.vue"]]),a2="/assets/freehua_cover-d8be521f.png";const l2={},c2={class:"img-fluid cover_hua rounded",src:a2};function u2(t,e){return at(),lt("img",c2)}const h2=pn(l2,[["render",u2],["__file","/home/gabriel/freehua-web/src/pages/Home.vue"]]),d2={data(){return{email:"",password:""}},methods:{async submit(){await $U(this.email,this.password)&&this.$router.push("/dashboard")}}},f2={class:"container-fluid border rounded border-secondary p-4"},p2=b("h2",null,"Login",-1),m2={class:"form-group my-4"},g2={class:"form-group my-4"},_2={class:"container-fluid pt-2"},y2=b("a",null,"Esqueci a senha",-1),v2={class:"container-fluid"},E2=b("button",{type:"submit",class:"btn btn-primary btn-lg mx-2"}," Registrar ",-1);function w2(t,e,n,r,s,i){const o=xr("router-link");return at(),lt("div",f2,[b("form",null,[p2,b("div",m2,[Vt(b("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a),placeholder:"Email"},null,512),[[In,s.email]])]),b("div",g2,[Vt(b("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),placeholder:"Senha"},null,512),[[In,s.password]]),b("div",_2,[Re(o,{to:"/recover"},{default:Ct(()=>[y2]),_:1})])]),b("div",v2,[b("button",{type:"submit",class:"btn btn-primary btn-lg",onClick:e[2]||(e[2]=ea((...a)=>i.submit&&i.submit(...a),["prevent"]))}," Logar "),Re(o,{to:"/register"},{default:Ct(()=>[E2]),_:1})])])])}const T2=pn(d2,[["render",w2],["__file","/home/gabriel/freehua-web/src/pages/Login.vue"]]),I2={data(){return{username:"",email:"",password:"",confirmation:""}},methods:{async submit(){if(this.confirmation!==this.password)return alert("Senhas não condizem"),null;if(this.email==""|this.password==""|this.username=="")return alert("Preencha tudo"),null;try{await BU(this.email,this.password,this.username)&&this.$router.push("/login")}catch(t){console.log(t)}}}},b2={class:"container-fluid border rounded border-secondary p-4"},R2=b("h2",null,"Cadastro",-1),A2={class:"form-group my-4"},C2={class:"form-group my-4"},S2={class:"form-group my-4"},P2={class:"form-group my-4"},k2={class:"container-fluid"},N2=b("button",{type:"submit",class:"btn btn-secondary btn-md ms-4"}," Voltar ",-1);function O2(t,e,n,r,s,i){const o=xr("router-link");return at(),lt("div",b2,[b("form",null,[R2,b("div",A2,[Vt(b("input",{type:"text",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a),placeholder:"Nome de usuário"},null,512),[[In,s.username]])]),b("div",C2,[Vt(b("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=a=>s.email=a),placeholder:"Email"},null,512),[[In,s.email]])]),b("div",S2,[Vt(b("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[2]||(e[2]=a=>s.password=a),placeholder:"Senha"},null,512),[[In,s.password]])]),b("div",P2,[Vt(b("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>s.confirmation=a),type:"password",class:"form-control form-control-lg",placeholder:"Confirme senha"},null,512),[[In,s.confirmation]])]),b("div",k2,[b("button",{onClick:e[4]||(e[4]=ea((...a)=>i.submit&&i.submit(...a),["prevent"])),type:"submit",class:"btn btn-primary btn-lg"}," Simbora! "),Re(o,{to:"/login"},{default:Ct(()=>[N2]),_:1})])])])}const D2=pn(I2,[["render",O2],["__file","/home/gabriel/freehua-web/src/pages/Register.vue"]]);async function x2(t){if(t.type===""||t.title===""||t.genre===""||t.summary===""||t.author===""||t.cover===null)return alert("Preencha tudo"),null;try{const e=await QI(cu(Qo,"books"),{book_author:t.author,book_summary:t.summary,book_tags:t.genre,book_title:t.title,book_type:t.type,book_score:0}),n=gb(),r=mb(n,`covers/${e.id}`),s=await fb(r,t.cover),o={cover_url:await pb(r)},a=await GI(e,o);return alert(t.title+" foi criado com sucesso."),!0}catch(e){alert(e)}}const M2={class:"container pt-5"},L2={class:"row"},V2={class:"col-md-6"},F2={ref:"form"},U2={class:"form-group mb-4"},$2=b("label",{class:"mb-2"},"Nome da obra",-1),B2={class:"form-group mb-4"},j2=b("label",{class:"mb-2"},"Tipo do livro",-1),W2=b("option",{value:"manhua"},"Manhuá (China)",-1),q2=b("option",{value:"manhwa"},"Manhwa (Coréia)",-1),H2=[W2,q2],K2={class:"col-md-6"},z2={class:"form-group mb-4"},G2=b("label",{class:"mb-2"},"Gênero",-1),Q2=b("option",{value:"adventure"},"Aventura",-1),Y2=b("option",{value:"romance"},"Romance",-1),X2=b("option",{value:"xianxia"},"Cultivo (Xianxia)",-1),J2=[Q2,Y2,X2],Z2={class:"form-group"},e$=b("label",{class:"mb-2"},"Autor(a)",-1),t$={class:"row"},n$={class:"col-md-12 mt-3"},r$={class:"form-group mb-4"},s$=b("label",{class:"mb-2"},"Sumário",-1),i$={class:"form-group mb-4"},o$=b("label",{class:"mb-2"},"Imagem da Capa",-1),a$=b("button",{class:"btn btn-secondary ms-4"},"Voltar",-1),l$={data(){return{book:{genre:"",summary:"",author:"",title:"",type:"",cover:null}}},methods:{handleCoverChange(t){this.book.cover=t.target.files[0]},submit(){try{x2(this.book),this.$refs.form.reset()}catch(t){alert(t)}}}},c$=Object.assign(l$,{__name:"Upload",setup(t){return(e,n)=>{const r=xr("router-link");return at(),lt("div",M2,[b("div",L2,[b("div",V2,[b("form",F2,[b("div",U2,[$2,Vt(b("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.book.title=s),type:"text",class:"form-control",placeholder:"Solo Leveling"},null,512),[[In,e.book.title]])]),b("div",B2,[j2,Vt(b("select",{"onUpdate:modelValue":n[1]||(n[1]=s=>e.book.type=s),class:"form-control"},H2,512),[[wh,e.book.type]])])],512)]),b("div",K2,[b("form",null,[b("div",z2,[G2,Vt(b("select",{"onUpdate:modelValue":n[2]||(n[2]=s=>e.book.genre=s),class:"form-control"},J2,512),[[wh,e.book.genre]])]),b("div",Z2,[e$,Vt(b("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>e.book.author=s),type:"text",class:"form-control",placeholder:"Hwonbu"},null,512),[[In,e.book.author]])])])])]),b("div",t$,[b("div",n$,[b("div",r$,[s$,Vt(b("textarea",{"onUpdate:modelValue":n[4]||(n[4]=s=>e.book.summary=s),class:"form-control",cols:"30",rows:"4",placeholder:"Em um colégio técnico, jovens alunos da ETEC Taboão da Serra descobrem poderes extraordinários que transformam o simples arroz doce da merenda em elaboradas obras de arte com classificação máxima."},null,512),[[In,e.book.summary]])]),b("div",i$,[o$,b("input",{class:"form-control",type:"file",onChange:n[5]||(n[5]=(...s)=>e.handleCoverChange&&e.handleCoverChange(...s)),accept:".jpg,.jpeg"},null,32)]),b("button",{onClick:n[6]||(n[6]=ea((...s)=>e.submit&&e.submit(...s),["prevent"])),type:"submit",class:"btn btn-primary btn-lg"}," Criar livro "),Re(r,{to:"/dashboard"},{default:Ct(()=>[a$]),_:1})])])])}}}),u$=pn(c$,[["__file","/home/gabriel/freehua-web/src/pages/Upload.vue"]]);async function h$(){const t=[],e=eF(cu(Qo,"books"));try{return(await oF(e)).forEach(r=>{const s={id:r.id,title:r.data().book_title};t.push(s)}),t}catch{return!1}}async function d$(t){const n=JSON.parse(localStorage.getItem("userCredential")).uid.toString();if(t.parent===null||t.file===null)return alert("Insira tudo"),null;try{const r=await QI(cu(Qo,`books/${t.parent}/chapters`),{chapter_parent:_p(Qo,`books/${t.parent}`),chapter_title:t.title,chapter_poster:n,chapter_release:new Date,chapter_content:""}),s=gb(),i=mb(s,`releases/${r.id}`),o=await fb(i,t.file),a=await pb(i);return await GI(r,{chapter_content:a}),alert("Capítulo criado com sucesso"),!0}catch(r){alert(r)}}const f$={class:"container pt-5"},p$={class:"mb-3"},m$=b("label",{for:"bookSelector",class:"form-label"},"Livro selecionado",-1),g$=b("option",{value:"",disabled:""}," Selecione o livro ao qual pertence o capítulo ",-1),_$=["value"],y$={class:"mb-4"},v$=b("label",{for:"bookCover",class:"form-label"},"PDF do capítulo",-1),E$=b("button",{type:"submit",class:"btn btn-primary btn-lg"}," Adicionar capítulo ",-1),w$=b("button",{class:"btn btn-secondary ms-4"},"Voltar",-1),T$={data(){return{library:[],chapter:{parent:null,file:null,title:""}}},created(){h$().then(t=>{this.library=t,console.log(this.library)}).catch(t=>{console.error(t)})},methods:{handleChapterChange(t){this.chapter.file=t.target.files[0]},submit(){try{d$(this.chapter),this.$refs.form.reset()}catch(t){alert(t)}}}},I$=Object.assign(T$,{__name:"Update",setup(t){return(e,n)=>{const r=xr("router-link");return at(),lt("div",f$,[b("form",{ref:"form",onSubmit:n[2]||(n[2]=ea((...s)=>e.submit&&e.submit(...s),["prevent"]))},[b("div",p$,[m$,Vt(b("select",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.chapter.parent=s),class:"form-select",id:"bookSelector"},[g$,(at(!0),lt(Ot,null,Uy(e.library,s=>(at(),lt("option",{key:s.id,value:s.id},eh(s.title),9,_$))),128))],512),[[wh,e.chapter.parent]])]),b("div",y$,[v$,b("input",{type:"file",class:"form-control",onChange:n[1]||(n[1]=(...s)=>e.handleChapterChange&&e.handleChapterChange(...s)),accept:".pdf"},null,32)]),E$,Re(r,{to:"/dashboard"},{default:Ct(()=>[w$]),_:1})],544)])}}}),b$=pn(I$,[["__file","/home/gabriel/freehua-web/src/pages/Update.vue"]]);const R$={},A$={class:"container-fluid i_hua"},C$=b("h1",null,"bem vindo ao freehua",-1),S$=[C$];function P$(t,e){return at(),lt("div",A$,S$)}const k$=pn(R$,[["render",P$],["__file","/home/gabriel/freehua-web/src/pages/About.vue"]]);const N$={},O$={class:"container-fluid i_hua"},D$=b("h1",null,"bem vindo ao freehua",-1),x$=[D$];function M$(t,e){return at(),lt("div",O$,x$)}const L$=pn(N$,[["render",M$],["__file","/home/gabriel/freehua-web/src/pages/Mobile.vue"]]),yb=QC({history:G0(),routes:[{path:"/login",name:"Login",component:T2},{path:"/",name:"Home",component:h2},{path:"/register",name:"Register",component:D2},{path:"/recover",name:"Recover",component:XU},{path:"/app",name:"App",component:L$},{path:"/about",name:"About",component:k$},{path:"/dashboard",name:"Dashboard",component:o2,meta:{requiresAuth:!0}},{path:"/upload",name:"Upload",component:u$,meta:{requiresAuth:!0}},{path:"/update",name:"Update",component:b$,meta:{requiresAuth:!0}}]});yb.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=localStorage.getItem("userCredential");r&&!s?n("/"):n()});v0(FU).use(yb).use(vU,{firebaseApp:_b,modules:[yU()]}).mount("#app");
