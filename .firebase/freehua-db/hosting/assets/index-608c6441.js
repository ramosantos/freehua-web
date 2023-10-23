(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Nr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Te=Object.freeze({}),Hs=Object.freeze([]),kt=()=>{},B_=()=>!1,pb=/^on[^a-z]/,Qo=t=>pb.test(t),fl=t=>t.startsWith("onUpdate:"),De=Object.assign,wd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mb=Object.prototype.hasOwnProperty,ie=(t,e)=>mb.call(t,e),H=Array.isArray,Yr=t=>Yo(t)==="[object Map]",ic=t=>Yo(t)==="[object Set]",Np=t=>Yo(t)==="[object Date]",Q=t=>typeof t=="function",Le=t=>typeof t=="string",_o=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Td=t=>_e(t)&&Q(t.then)&&Q(t.catch),j_=Object.prototype.toString,Yo=t=>j_.call(t),Id=t=>Yo(t).slice(8,-1),W_=t=>Yo(t)==="[object Object]",bd=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xa=Nr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gb=Nr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),oc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_b=/-(\w)/g,On=oc(t=>t.replace(_b,(e,n)=>n?n.toUpperCase():"")),yb=/\B([A-Z])/g,Tr=oc(t=>t.replace(yb,"-$1").toLowerCase()),as=oc(t=>t.charAt(0).toUpperCase()+t.slice(1)),$r=oc(t=>t?`on${as(t)}`:""),yo=(t,e)=>!Object.is(t,e),Ls=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ml=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Op;const gl=()=>Op||(Op=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rd(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Tb(r):Rd(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Le(t))return t;if(_e(t))return t}}const vb=/;(?![^(]*\))/g,Eb=/:([^]+)/,wb=/\/\*[^]*?\*\//g;function Tb(t){const e={};return t.replace(wb,"").split(vb).forEach(n=>{if(n){const r=n.split(Eb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ad(t){let e="";if(Le(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Ad(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ib="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",bb="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Rb=Nr(Ib),Ab=Nr(bb),Cb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sb=Nr(Cb);function q_(t){return!!t||t===""}function Pb(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ac(t[r],e[r]);return n}function ac(t,e){if(t===e)return!0;let n=Np(t),r=Np(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=_o(t),r=_o(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?Pb(t,e):!1;if(n=_e(t),r=_e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ac(t[o],e[o]))return!1}}return String(t)===String(e)}function kb(t,e){return t.findIndex(n=>ac(n,e))}const Nb=t=>Le(t)?t:t==null?"":H(t)||_e(t)&&(t.toString===j_||!Q(t.toString))?JSON.stringify(t,H_,2):String(t),H_=(t,e)=>e&&e.__v_isRef?H_(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ic(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!H(e)&&!W_(e)?String(e):e;function Yu(t,...e){console.warn(`[Vue warn] ${t}`,...e)}let Yt;class K_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}else Yu("cannot run an inactive effect scope.")}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ob(t){return new K_(t)}function Db(t,e=Yt){e&&e.active&&e.effects.push(t)}function xb(){return Yt}const Cd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},z_=t=>(t.w&Ir)>0,G_=t=>(t.n&Ir)>0,Mb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ir},Lb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];z_(s)&&!G_(s)?s.delete(t):e[n++]=s,s.w&=~Ir,s.n&=~Ir}e.length=n}},Xu=new WeakMap;let Bi=0,Ir=1;const Ju=30;let bt;const Xr=Symbol("iterate"),Zu=Symbol("Map key iterate");class Sd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Db(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=mr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,mr=!0,Ir=1<<++Bi,Bi<=Ju?Mb(this):Dp(this),this.fn()}finally{Bi<=Ju&&Lb(this),Ir=1<<--Bi,bt=this.parent,mr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(Dp(this),this.onStop&&this.onStop(),this.active=!1)}}function Dp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mr=!0;const Q_=[];function Es(){Q_.push(mr),mr=!1}function ws(){const t=Q_.pop();mr=t===void 0?!0:t}function yt(t,e,n){if(mr&&bt){let r=Xu.get(t);r||Xu.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Cd()),Y_(s,{effect:bt,target:t,type:e,key:n})}}function Y_(t,e){let n=!1;Bi<=Ju?G_(t)||(t.n|=Ir,n=!z_(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t),bt.onTrack&&bt.onTrack(De({effect:bt},e)))}function Dn(t,e,n,r,s,i){const o=Xu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((u,h)=>{(h==="length"||h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?bd(n)&&a.push(o.get("length")):(a.push(o.get(Xr)),Yr(t)&&a.push(o.get(Zu)));break;case"delete":H(t)||(a.push(o.get(Xr)),Yr(t)&&a.push(o.get(Zu)));break;case"set":Yr(t)&&a.push(o.get(Xr));break}const l={target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:i};if(a.length===1)a[0]&&eh(a[0],l);else{const c=[];for(const u of a)u&&c.push(...u);eh(Cd(c),l)}}function eh(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&xp(r,e);for(const r of n)r.computed||xp(r,e)}function xp(t,e){(t!==bt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(De({effect:t},e)),t.scheduler?t.scheduler():t.run())}const Vb=Nr("__proto__,__v_isRef,__isVue"),X_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_o)),Fb=lc(),Ub=lc(!1,!0),$b=lc(!0),Bb=lc(!0,!0),Mp=jb();function jb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ne(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ne)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Es();const r=ne(this)[e].apply(this,n);return ws(),r}}),t}function Wb(t){const e=ne(this);return yt(e,"has",t),e.hasOwnProperty(t)}function lc(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?iy:sy:e?ry:ny).get(r))return r;const o=H(r);if(!t){if(o&&ie(Mp,s))return Reflect.get(Mp,s,i);if(s==="hasOwnProperty")return Wb}const a=Reflect.get(r,s,i);return(_o(s)?X_.has(s):Vb(s))||(t||yt(r,"get",s),e)?a:ze(a)?o&&bd(s)?a:a.value:_e(a)?t?ay(a):hc(a):a}}const qb=J_(),Hb=J_(!0);function J_(t=!1){return function(n,r,s,i){let o=n[r];if(br(o)&&ze(o)&&!ze(s))return!1;if(!t&&(!_l(s)&&!br(s)&&(o=ne(o),s=ne(s)),!H(n)&&ze(o)&&!ze(s)))return o.value=s,!0;const a=H(n)&&bd(r)?Number(r)<n.length:ie(n,r),l=Reflect.set(n,r,s,i);return n===ne(i)&&(a?yo(s,o)&&Dn(n,"set",r,s,o):Dn(n,"add",r,s)),l}}function Kb(t,e){const n=ie(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&Dn(t,"delete",e,void 0,r),s}function zb(t,e){const n=Reflect.has(t,e);return(!_o(e)||!X_.has(e))&&yt(t,"has",e),n}function Gb(t){return yt(t,"iterate",H(t)?"length":Xr),Reflect.ownKeys(t)}const Z_={get:Fb,set:qb,deleteProperty:Kb,has:zb,ownKeys:Gb},ey={get:$b,set(t,e){return Yu(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return Yu(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},Qb=De({},Z_,{get:Ub,set:Hb}),Yb=De({},ey,{get:Bb}),Pd=t=>t,cc=t=>Reflect.getPrototypeOf(t);function Ca(t,e,n=!1,r=!1){t=t.__v_raw;const s=ne(t),i=ne(e);n||(e!==i&&yt(s,"get",e),yt(s,"get",i));const{has:o}=cc(s),a=r?Pd:n?kd:vo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Sa(t,e=!1){const n=this.__v_raw,r=ne(n),s=ne(t);return e||(t!==s&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Pa(t,e=!1){return t=t.__v_raw,!e&&yt(ne(t),"iterate",Xr),Reflect.get(t,"size",t)}function Lp(t){t=ne(t);const e=ne(this);return cc(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function Vp(t,e){e=ne(e);const n=ne(this),{has:r,get:s}=cc(n);let i=r.call(n,t);i?ty(n,r,t):(t=ne(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?yo(e,o)&&Dn(n,"set",t,e,o):Dn(n,"add",t,e),this}function Fp(t){const e=ne(this),{has:n,get:r}=cc(e);let s=n.call(e,t);s?ty(e,n,t):(t=ne(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&Dn(e,"delete",t,void 0,i),o}function Up(){const t=ne(this),e=t.size!==0,n=Yr(t)?new Map(t):new Set(t),r=t.clear();return e&&Dn(t,"clear",void 0,void 0,n),r}function ka(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ne(o),l=e?Pd:t?kd:vo;return!t&&yt(a,"iterate",Xr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Na(t,e,n){return function(...r){const s=this.__v_raw,i=ne(s),o=Yr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Pd:e?kd:vo;return!e&&yt(i,"iterate",l?Zu:Xr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function nr(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${as(t)} operation ${n}failed: target is readonly.`,ne(this))}return t==="delete"?!1:this}}function Xb(){const t={get(i){return Ca(this,i)},get size(){return Pa(this)},has:Sa,add:Lp,set:Vp,delete:Fp,clear:Up,forEach:ka(!1,!1)},e={get(i){return Ca(this,i,!1,!0)},get size(){return Pa(this)},has:Sa,add:Lp,set:Vp,delete:Fp,clear:Up,forEach:ka(!1,!0)},n={get(i){return Ca(this,i,!0)},get size(){return Pa(this,!0)},has(i){return Sa.call(this,i,!0)},add:nr("add"),set:nr("set"),delete:nr("delete"),clear:nr("clear"),forEach:ka(!0,!1)},r={get(i){return Ca(this,i,!0,!0)},get size(){return Pa(this,!0)},has(i){return Sa.call(this,i,!0)},add:nr("add"),set:nr("set"),delete:nr("delete"),clear:nr("clear"),forEach:ka(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Na(i,!1,!1),n[i]=Na(i,!0,!1),e[i]=Na(i,!1,!0),r[i]=Na(i,!0,!0)}),[t,n,e,r]}const[Jb,Zb,eR,tR]=Xb();function uc(t,e){const n=e?t?tR:eR:t?Zb:Jb;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const nR={get:uc(!1,!1)},rR={get:uc(!1,!0)},sR={get:uc(!0,!1)},iR={get:uc(!0,!0)};function ty(t,e,n){const r=ne(n);if(r!==n&&e.call(t,r)){const s=Id(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ny=new WeakMap,ry=new WeakMap,sy=new WeakMap,iy=new WeakMap;function oR(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aR(t){return t.__v_skip||!Object.isExtensible(t)?0:oR(Id(t))}function hc(t){return br(t)?t:dc(t,!1,Z_,nR,ny)}function oy(t){return dc(t,!1,Qb,rR,ry)}function ay(t){return dc(t,!0,ey,sR,sy)}function ji(t){return dc(t,!0,Yb,iR,iy)}function dc(t,e,n,r,s){if(!_e(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=aR(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jr(t){return br(t)?Jr(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function _l(t){return!!(t&&t.__v_isShallow)}function th(t){return Jr(t)||br(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function ly(t){return pl(t,"__v_skip",!0),t}const vo=t=>_e(t)?hc(t):t,kd=t=>_e(t)?ay(t):t;function cy(t){mr&&bt&&(t=ne(t),Y_(t.dep||(t.dep=Cd()),{target:t,type:"get",key:"value"}))}function uy(t,e){t=ne(t);const n=t.dep;n&&eh(n,{target:t,type:"set",key:"value",newValue:e})}function ze(t){return!!(t&&t.__v_isRef===!0)}function hy(t){return dy(t,!1)}function lR(t){return dy(t,!0)}function dy(t,e){return ze(t)?t:new cR(t,e)}class cR{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:vo(e)}get value(){return cy(this),this._value}set value(e){const n=this.__v_isShallow||_l(e)||br(e);e=n?e:ne(e),yo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:vo(e),uy(this,e))}}function Ks(t){return ze(t)?t.value:t}const uR={get:(t,e,n)=>Ks(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fy(t){return Jr(t)?t:new Proxy(t,uR)}class hR{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sd(e,()=>{this._dirty||(this._dirty=!0,uy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ne(this);return cy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dR(t,e,n=!1){let r,s;const i=Q(t);i?(r=t,s=()=>{console.warn("Write operation failed: computed value is readonly")}):(r=t.get,s=t.set);const o=new hR(r,s,i||!s,n);return e&&!n&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}const Zr=[];function Ja(t){Zr.push(t)}function Za(){Zr.pop()}function S(t,...e){Es();const n=Zr.length?Zr[Zr.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=fR();if(r)Hn(r,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${vc(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...pR(s)),console.warn(...i)}ws()}function fR(){let t=Zr[Zr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function pR(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...mR(n))}),e}function mR({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${vc(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...gR(t.props),i]:[s+i]}function gR(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...py(r,t[r]))}),n.length>3&&e.push(" ..."),e}function py(t,e,n){return Le(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:ze(e)?(e=py(t,ne(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):Q(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ne(e),n?e:[`${t}=`,e])}const Nd={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function Hn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){fc(i,e,n)}return s}function rn(t,e,n,r){if(Q(t)){const i=Hn(t,e,n,r);return i&&Td(i)&&i.catch(o=>{fc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(rn(t[i],e,n,r));return s}function fc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=Nd[n];for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Hn(l,null,10,[t,o,a]);return}}_R(t,n,s,r)}function _R(t,e,n,r=!0){{const s=Nd[e];if(n&&Ja(n),S(`Unhandled error${s?` during execution of ${s}`:""}`),n&&Za(),r)throw t;console.error(t)}}let Eo=!1,nh=!1;const dt=[];let yn=0;const zs=[];let _n=null,ir=0;const my=Promise.resolve();let Od=null;const yR=100;function gy(t){const e=Od||my;return t?e.then(this?t.bind(this):t):e}function vR(t){let e=yn+1,n=dt.length;for(;e<n;){const r=e+n>>>1;wo(dt[r])<t?e=r+1:n=r}return e}function pc(t){(!dt.length||!dt.includes(t,Eo&&t.allowRecurse?yn+1:yn))&&(t.id==null?dt.push(t):dt.splice(vR(t.id),0,t),_y())}function _y(){!Eo&&!nh&&(nh=!0,Od=my.then(Ey))}function ER(t){const e=dt.indexOf(t);e>yn&&dt.splice(e,1)}function yy(t){H(t)?zs.push(...t):(!_n||!_n.includes(t,t.allowRecurse?ir+1:ir))&&zs.push(t),_y()}function $p(t,e=Eo?yn+1:0){for(t=t||new Map;e<dt.length;e++){const n=dt[e];if(n&&n.pre){if(Dd(t,n))continue;dt.splice(e,1),e--,n()}}}function vy(t){if(zs.length){const e=[...new Set(zs)];if(zs.length=0,_n){_n.push(...e);return}for(_n=e,t=t||new Map,_n.sort((n,r)=>wo(n)-wo(r)),ir=0;ir<_n.length;ir++)Dd(t,_n[ir])||_n[ir]();_n=null,ir=0}}const wo=t=>t.id==null?1/0:t.id,wR=(t,e)=>{const n=wo(t)-wo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ey(t){nh=!1,Eo=!0,t=t||new Map,dt.sort(wR);const e=n=>Dd(t,n);try{for(yn=0;yn<dt.length;yn++){const n=dt[yn];if(n&&n.active!==!1){if(e(n))continue;Hn(n,null,14)}}}finally{yn=0,dt.length=0,vy(t),Eo=!1,Od=null,(dt.length||zs.length)&&Ey(t)}}function Dd(t,e){if(!t.has(e))t.set(e,1);else{const n=t.get(e);if(n>yR){const r=e.ownerInstance,s=r&&Wd(r.type);return S(`Maximum recursive updates exceeded${s?` in component <${s}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(e,n+1)}}let es=!1;const Vs=new Set;gl().__VUE_HMR_RUNTIME__={createRecord:hu(wy),rerender:hu(bR),reload:hu(RR)};const ls=new Map;function TR(t){const e=t.type.__hmrId;let n=ls.get(e);n||(wy(e,t.type),n=ls.get(e)),n.instances.add(t)}function IR(t){ls.get(t.type.__hmrId).instances.delete(t)}function wy(t,e){return ls.has(t)?!1:(ls.set(t,{initialDef:Zi(e),instances:new Set}),!0)}function Zi(t){return zy(t)?t.__vccOpts:t}function bR(t,e){const n=ls.get(t);n&&(n.initialDef.render=e,[...n.instances].forEach(r=>{e&&(r.render=e,Zi(r.type).render=e),r.renderCache=[],es=!0,r.update(),es=!1}))}function RR(t,e){const n=ls.get(t);if(!n)return;e=Zi(e),Bp(n.initialDef,e);const r=[...n.instances];for(const s of r){const i=Zi(s.type);Vs.has(i)||(i!==n.initialDef&&Bp(i,e),Vs.add(i)),s.appContext.propsCache.delete(s.type),s.appContext.emitsCache.delete(s.type),s.appContext.optionsCache.delete(s.type),s.ceReload?(Vs.add(i),s.ceReload(e.styles),Vs.delete(i)):s.parent?pc(s.parent.update):s.appContext.reload?s.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}yy(()=>{for(const s of r)Vs.delete(Zi(s.type))})}function Bp(t,e){De(t,e);for(const n in t)n!=="__file"&&!(n in e)&&delete t[n]}function hu(t){return(e,n)=>{try{return t(e,n)}catch(r){console.error(r),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let vn,Wi=[],rh=!1;function Xo(t,...e){vn?vn.emit(t,...e):rh||Wi.push({event:t,args:e})}function Ty(t,e){var n,r;vn=t,vn?(vn.enabled=!0,Wi.forEach(({event:s,args:i})=>vn.emit(s,...i)),Wi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Ty(i,e)}),setTimeout(()=>{vn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,rh=!0,Wi=[])},3e3)):(rh=!0,Wi=[])}function AR(t,e){Xo("app:init",t,e,{Fragment:jt,Text:Jo,Comment:on,Static:to})}function CR(t){Xo("app:unmount",t)}const SR=xd("component:added"),Iy=xd("component:updated"),PR=xd("component:removed"),kR=t=>{vn&&typeof vn.cleanupBuffer=="function"&&!vn.cleanupBuffer(t)&&PR(t)};function xd(t){return e=>{Xo(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const NR=by("perf:start"),OR=by("perf:end");function by(t){return(e,n,r)=>{Xo(t,e.appContext.app,e.uid,e,n,r)}}function DR(t,e,n){Xo("component:emit",t.appContext.app,t,e,n)}function xR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;{const{emitsOptions:u,propsOptions:[h]}=t;if(u)if(!(e in u))(!h||!($r(e)in h))&&S(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${$r(e)}" prop.`);else{const d=u[e];Q(d)&&(d(...n)||S(`Invalid event arguments: event validation failed for event "${e}".`))}}let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Te;d&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(ml))}DR(t,e,s);{const u=e.toLowerCase();u!==e&&r[$r(u)]&&S(`Event "${u}" is emitted in component ${vc(t,t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Tr(e)}" instead of "${e}".`)}let a,l=r[a=$r(e)]||r[a=$r(On(e))];!l&&i&&(l=r[a=$r(Tr(e))]),l&&rn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,rn(c,t,6,s)}}function Ry(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Q(t)){const l=c=>{const u=Ry(c,e,!0);u&&(a=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(_e(t)&&r.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):De(o,i),_e(t)&&r.set(t,o),o)}function mc(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Tr(e))||ie(t,e))}let Rt=null,Ay=null;function yl(t){const e=Rt;return Rt=t,Ay=t&&t.type.__scopeId||null,e}function sn(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&em(-1);const i=yl(e);let o;try{o=t(...s)}finally{yl(i),r._d&&em(1)}return Iy(e),o};return r._n=!0,r._c=!0,r._d=!0,r}let sh=!1;function vl(){sh=!0}function du(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:E}=t;let v,A;const O=yl(t);sh=!1;try{if(n.shapeFlag&4){const $=s||r;v=Xt(u.call($,$,h,i,p,d,g)),A=l}else{const $=e;l===i&&vl(),v=Xt($.length>1?$(i,{get attrs(){return vl(),l},slots:a,emit:c}):$(i,null)),A=e.props?l:LR(l)}}catch($){no.length=0,fc($,t,1),v=Oe(on)}let k=v,K;if(v.patchFlag>0&&v.patchFlag&2048&&([k,K]=MR(v)),A&&E!==!1){const $=Object.keys(A),{shapeFlag:me}=k;if($.length){if(me&7)o&&$.some(fl)&&(A=VR(A,o)),k=Rr(k,A);else if(!sh&&k.type!==on){const Me=Object.keys(l),et=[],Be=[];for(let tt=0,Gt=Me.length;tt<Gt;tt++){const Ct=Me[tt];Qo(Ct)?fl(Ct)||et.push(Ct[2].toLowerCase()+Ct.slice(3)):Be.push(Ct)}Be.length&&S(`Extraneous non-props attributes (${Be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),et.length&&S(`Extraneous non-emits event listeners (${et.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return n.dirs&&(jp(k)||S("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=Rr(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(jp(k)||S("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=n.transition),K?K(k):v=k,yl(O),v}const MR=t=>{const e=t.children,n=t.dynamicChildren,r=Cy(e);if(!r)return[t,void 0];const s=e.indexOf(r),i=n?n.indexOf(r):-1,o=a=>{e[s]=a,n&&(i>-1?n[i]=a:a.patchFlag>0&&(t.dynamicChildren=[...n,a]))};return[Xt(r),o]};function Cy(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Io(r)){if(r.type!==on||r.children==="v-if"){if(e)return;e=r}}else return}return e}const LR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},VR=(t,e)=>{const n={};for(const r in t)(!fl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n},jp=t=>t.shapeFlag&7||t.type===on;function FR(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if((s||a)&&es||e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Wp(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!mc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Wp(r,o,c):!0:!!o;return!1}function Wp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!mc(n,i))return!0}return!1}function UR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $R=t=>t.__isSuspense;function BR(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):yy(t)}function jR(t,e){return Md(t,null,e)}const Oa={};function eo(t,e,n){return Q(e)||S("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Md(t,e,n)}function Md(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){var a;e||(n!==void 0&&S('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),r!==void 0&&S('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const l=$=>{S("Invalid watch source: ",$,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=xb()===((a=Ke)==null?void 0:a.scope)?Ke:null;let u,h=!1,d=!1;if(ze(t)?(u=()=>t.value,h=_l(t)):Jr(t)?(u=()=>t,r=!0):H(t)?(d=!0,h=t.some($=>Jr($)||_l($)),u=()=>t.map($=>{if(ze($))return $.value;if(Jr($))return Hr($);if(Q($))return Hn($,c,2);l($)})):Q(t)?e?u=()=>Hn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),rn(t,c,3,[g])}:(u=kt,l(t)),e&&r){const $=u;u=()=>Hr($())}let p,g=$=>{p=k.onStop=()=>{Hn($,c,4)}},E;if(bo)if(g=kt,e?n&&rn(e,c,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const $=JA();E=$.__watcherHandles||($.__watcherHandles=[])}else return kt;let v=d?new Array(t.length).fill(Oa):Oa;const A=()=>{if(k.active)if(e){const $=k.run();(r||h||(d?$.some((me,Me)=>yo(me,v[Me])):yo($,v)))&&(p&&p(),rn(e,c,3,[$,v===Oa?void 0:d&&v[0]===Oa?[]:v,g]),v=$)}else k.run()};A.allowRecurse=!!e;let O;s==="sync"?O=A:s==="post"?O=()=>St(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),O=()=>pc(A));const k=new Sd(u,O);k.onTrack=i,k.onTrigger=o,e?n?A():v=k.run():s==="post"?St(k.run.bind(k),c&&c.suspense):k.run();const K=()=>{k.stop(),c&&c.scope&&wd(c.scope.effects,k)};return E&&E.push(K),K}function WR(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?Sy(r,t):()=>r[t]:t.bind(r,r);let i;Q(e)?i=e:(i=e.handler,n=e);const o=Ke;ti(this);const a=Md(s,i.bind(r),n);return o?ti(o):ns(),a}function Sy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Hr(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ze(t))Hr(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Hr(t[n],e);else if(ic(t)||Yr(t))t.forEach(n=>{Hr(n,e)});else if(W_(t))for(const n in t)Hr(t[n],e);return t}function Py(t){gb(t)&&S("Do not use built-in directive ids as custom directive id: "+t)}function Jt(t,e){const n=Rt;if(n===null)return S("withDirectives can only be used inside render functions."),t;const r=yc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Te]=e[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&Hr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Es(),rn(l,n,8,[t.el,a,t,e]),ws())}}function ky(t,e){return Q(t)?(()=>De({name:t.name},e,{setup:t}))():t}const el=t=>!!t.type.__asyncLoader,Ld=t=>t.type.__isKeepAlive;function qR(t,e){Ny(t,"a",e)}function HR(t,e){Ny(t,"da",e)}function Ny(t,e,n=Ke){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(gc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ld(s.parent.vnode)&&KR(r,e,n,s),s=s.parent}}function KR(t,e,n,r){const s=gc(e,t,r,!0);Oy(()=>{wd(r[e],s)},n)}function gc(t,e,n=Ke,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Es(),ti(n);const a=rn(e,n,t,o);return ns(),ws(),a});return r?s.unshift(i):s.push(i),i}else{const s=$r(Nd[t].replace(/ hook$/,""));S(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const Xn=t=>(e,n=Ke)=>(!bo||t==="sp")&&gc(t,(...r)=>e(...r),n),zR=Xn("bm"),GR=Xn("m"),QR=Xn("bu"),YR=Xn("u"),XR=Xn("bum"),Oy=Xn("um"),JR=Xn("sp"),ZR=Xn("rtg"),eA=Xn("rtc");function tA(t,e=Ke){gc("ec",t,e)}const ih="components";function Ts(t,e){return rA(ih,t,!0,e)||t}const nA=Symbol.for("v-ndc");function rA(t,e,n=!0,r=!1){const s=Rt||Ke;if(s){const i=s.type;if(t===ih){const a=Wd(i,!1);if(a&&(a===e||a===On(e)||a===as(On(e))))return i}const o=qp(s[t]||i[t],e)||qp(s.appContext[t],e);if(!o&&r)return i;if(n&&!o){const a=t===ih?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";S(`Failed to resolve ${t.slice(0,-1)}: ${e}${a}`)}return o}else S(`resolve${as(t.slice(0,-1))} can only be used in render() or setup().`)}function qp(t,e){return t&&(t[e]||t[On(e)]||t[as(On(e))])}function sA(t,e,n,r){let s;const i=n&&n[r];if(H(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){Number.isInteger(t)||S(`The v-for range expect an integer value but got ${t}.`),s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const oh=t=>t?qy(t)?yc(t)||t.proxy:oh(t.parent):null,ts=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>ji(t.props),$attrs:t=>ji(t.attrs),$slots:t=>ji(t.slots),$refs:t=>ji(t.refs),$parent:t=>oh(t.parent),$root:t=>oh(t.root),$emit:t=>t.emit,$options:t=>Fd(t),$forceUpdate:t=>t.f||(t.f=()=>pc(t.update)),$nextTick:t=>t.n||(t.n=gy.bind(t.proxy)),$watch:t=>WR.bind(t)}),Vd=t=>t==="_"||t==="$",fu=(t,e)=>t!==Te&&!t.__isScriptSetup&&ie(t,e),Dy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fu(r,e))return o[e]=1,r[e];if(s!==Te&&ie(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,i[e];if(n!==Te&&ie(n,e))return o[e]=4,n[e];ah&&(o[e]=0)}}const u=ts[e];let h,d;if(u)return e==="$attrs"?(yt(t,"get",e),vl()):e==="$slots"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ie(d,e))return d[e];Rt&&(!Le(e)||e.indexOf("__v")!==0)&&(s!==Te&&Vd(e[0])&&ie(s,e)?S(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===Rt&&S(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fu(s,e)?(s[e]=n,!0):s.__isScriptSetup&&ie(s,e)?(S(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):r!==Te&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)?(S(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in t?(S(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in t.appContext.config.globalProperties?Object.defineProperty(i,e,{enumerable:!0,configurable:!0,value:n}):i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&ie(t,o)||fu(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(ts,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};Dy.ownKeys=t=>(S("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function iA(t){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(ts).forEach(n=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,get:()=>ts[n](t),set:kt})}),e}function oA(t){const{ctx:e,propsOptions:[n]}=t;n&&Object.keys(n).forEach(r=>{Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>t.props[r],set:kt})})}function aA(t){const{ctx:e,setupState:n}=t;Object.keys(ne(n)).forEach(r=>{if(!n.__isScriptSetup){if(Vd(r[0])){S(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n[r],set:kt})}})}function Hp(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function lA(){const t=Object.create(null);return(e,n)=>{t[n]?S(`${e} property "${n}" is already defined in ${t[n]}.`):t[n]=e}}let ah=!0;function cA(t){const e=Fd(t),n=t.proxy,r=t.ctx;ah=!1,e.beforeCreate&&Kp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:E,deactivated:v,beforeDestroy:A,beforeUnmount:O,destroyed:k,unmounted:K,render:$,renderTracked:me,renderTriggered:Me,errorCaptured:et,serverPrefetch:Be,expose:tt,inheritAttrs:Gt,components:Ct,directives:fn,filters:Ra}=e,Ut=lA();{const[re]=t.propsOptions;if(re)for(const se in re)Ut("Props",se)}if(c&&uA(c,r,Ut),o)for(const re in o){const se=o[re];Q(se)?(Object.defineProperty(r,re,{value:se.bind(n),configurable:!0,enumerable:!0,writable:!0}),Ut("Methods",re)):S(`Method "${re}" has type "${typeof se}" in the component definition. Did you reference the function correctly?`)}if(s){Q(s)||S("The data option must be a function. Plain object usage is no longer supported.");const re=s.call(n,n);if(Td(re)&&S("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!_e(re))S("data() should return an object.");else{t.data=hc(re);for(const se in re)Ut("Data",se),Vd(se[0])||Object.defineProperty(r,se,{configurable:!0,enumerable:!0,get:()=>re[se],set:kt})}}if(ah=!0,i)for(const re in i){const se=i[re],$t=Q(se)?se.bind(n,n):Q(se.get)?se.get.bind(n,n):kt;$t===kt&&S(`Computed property "${re}" has no getter.`);const Vr=!Q(se)&&Q(se.set)?se.set.bind(n):()=>{S(`Write operation failed: computed property "${re}" is readonly.`)},Zn=Zt({get:$t,set:Vr});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Zn.value,set:pn=>Zn.value=pn}),Ut("Computed",re)}if(a)for(const re in a)xy(a[re],r,n,re);if(l){const re=Q(l)?l.call(n):l;Reflect.ownKeys(re).forEach(se=>{tl(se,re[se])})}u&&Kp(u,t,"c");function nt(re,se){H(se)?se.forEach($t=>re($t.bind(n))):se&&re(se.bind(n))}if(nt(zR,h),nt(GR,d),nt(QR,p),nt(YR,g),nt(qR,E),nt(HR,v),nt(tA,et),nt(eA,me),nt(ZR,Me),nt(XR,O),nt(Oy,K),nt(JR,Be),H(tt))if(tt.length){const re=t.exposed||(t.exposed={});tt.forEach(se=>{Object.defineProperty(re,se,{get:()=>n[se],set:$t=>n[se]=$t})})}else t.exposed||(t.exposed={});$&&t.render===kt&&(t.render=$),Gt!=null&&(t.inheritAttrs=Gt),Ct&&(t.components=Ct),fn&&(t.directives=fn)}function uA(t,e,n=kt){H(t)&&(t=lh(t));for(const r in t){const s=t[r];let i;_e(s)?"default"in s?i=An(s.from||r,s.default,!0):i=An(s.from||r):i=An(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i,n("Inject",r)}}function Kp(t,e,n){rn(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xy(t,e,n,r){const s=r.includes(".")?Sy(n,r):()=>n[r];if(Le(t)){const i=e[t];Q(i)?eo(s,i):S(`Invalid watch handler specified by key "${t}"`,i)}else if(Q(t))eo(s,t.bind(n));else if(_e(t))if(H(t))t.forEach(i=>xy(i,e,n,r));else{const i=Q(t.handler)?t.handler.bind(n):e[t.handler];Q(i)?eo(s,i,t):S(`Invalid watch handler specified by key "${t.handler}"`,i)}else S(`Invalid watch option: "${r}"`,t)}function Fd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>El(l,c,o,!0)),El(l,e,o)),_e(e)&&i.set(e,l),l}function El(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&El(t,i,n,!0),s&&s.forEach(o=>El(t,o,n,!0));for(const o in e)if(r&&o==="expose")S('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=hA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hA={data:zp,props:Gp,emits:Gp,methods:qi,computed:qi,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:qi,directives:qi,watch:fA,provide:zp,inject:dA};function zp(t,e){return e?t?function(){return De(Q(t)?t.call(this,this):t,Q(e)?e.call(this,this):e)}:e:t}function dA(t,e){return qi(lh(t),lh(e))}function lh(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function qi(t,e){return t?De(Object.create(null),t,e):e}function Gp(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:De(Object.create(null),Hp(t),Hp(e??{})):e}function fA(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function My(){return{app:null,config:{isNativeTag:B_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pA=0;function mA(t,e){return function(r,s=null){Q(r)||(r=De({},r)),s!=null&&!_e(s)&&(S("root props passed to app.mount() must be an object."),s=null);const i=My();Object.defineProperty(i.config,"unwrapInjectedRef",{get(){return!0},set(){S("app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.")}});const o=new Set;let a=!1;const l=i.app={_uid:pA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rm,get config(){return i.config},set config(c){S("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return o.has(c)?S("Plugin has already been applied to target app."):c&&Q(c.install)?(o.add(c),c.install(l,...u)):Q(c)?(o.add(c),c(l,...u)):S('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return i.mixins.includes(c)?S("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):i.mixins.push(c),l},component(c,u){return fh(c,i.config),u?(i.components[c]&&S(`Component "${c}" has already been registered in target app.`),i.components[c]=u,l):i.components[c]},directive(c,u){return Py(c),u?(i.directives[c]&&S(`Directive "${c}" has already been registered in target app.`),i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(a)S("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&S("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const d=Oe(r,s);return d.appContext=i,i.reload=()=>{t(Rr(d),c,h)},u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,l._instance=d.component,AR(l,rm),yc(d.component)||d.component.proxy}},unmount(){a?(t(null,l._container),l._instance=null,CR(l),delete l._container.__vue_app__):S("Cannot unmount an app that is not mounted.")},provide(c,u){return c in i.provides&&S(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),i.provides[c]=u,l},runWithContext(c){wl=l;try{return c()}finally{wl=null}}};return l}}let wl=null;function tl(t,e){if(!Ke)S("provide() can only be used inside setup().");else{let n=Ke.provides;const r=Ke.parent&&Ke.parent.provides;r===n&&(n=Ke.provides=Object.create(r)),n[t]=e}}function An(t,e,n=!1){const r=Ke||Rt;if(r||wl){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wl._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Q(e)?e.call(r&&r.proxy):e;S(`injection "${String(t)}" not found.`)}else S("inject() can only be used inside setup() or functional components.")}function gA(t,e,n,r=!1){const s={},i={};pl(i,_c,1),t.propsDefaults=Object.create(null),Ly(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);Fy(e||{},s,t),n?t.props=r?s:oy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _A(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function yA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ne(s),[l]=t.propsOptions;let c=!1;if(!_A(t)&&(r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(mc(t.emitsOptions,d))continue;const p=e[d];if(l)if(ie(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const g=On(d);s[g]=ch(l,a,g,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{Ly(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Tr(h))===h||!ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ch(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],c=!0)}c&&Dn(t,"set","$attrs"),Fy(e||{},s,t)}function Ly(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xa(l))continue;const c=e[l];let u;s&&ie(s,u=On(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:mc(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ne(n),c=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ch(s,l,h,c[h],t,!ie(c,h))}}return o}function ch(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Q(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(ti(s),r=c[n]=l.call(null,e),ns())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Tr(n))&&(r=!0))}return r}function Vy(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Q(t)){const u=h=>{l=!0;const[d,p]=Vy(h,e,!0);De(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return _e(t)&&r.set(t,Hs),Hs;if(H(i))for(let u=0;u<i.length;u++){Le(i[u])||S("props must be strings when using array syntax.",i[u]);const h=On(i[u]);Qp(h)&&(o[h]=Te)}else if(i){_e(i)||S("invalid props options",i);for(const u in i){const h=On(u);if(Qp(h)){const d=i[u],p=o[h]=H(d)||Q(d)?{type:d}:De({},d);if(p){const g=Xp(Boolean,p.type),E=Xp(String,p.type);p[0]=g>-1,p[1]=E<0||g<E,(g>-1||ie(p,"default"))&&a.push(h)}}}}const c=[o,a];return _e(t)&&r.set(t,c),c}function Qp(t){return t[0]!=="$"?!0:(S(`Invalid prop name: "${t}" is a reserved property.`),!1)}function uh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Yp(t,e){return uh(t)===uh(e)}function Xp(t,e){return H(e)?e.findIndex(n=>Yp(n,t)):Q(e)&&Yp(e,t)?0:-1}function Fy(t,e,n){const r=ne(e),s=n.propsOptions[0];for(const i in s){let o=s[i];o!=null&&vA(i,r[i],o,!ie(t,i)&&!ie(t,Tr(i)))}}function vA(t,e,n,r){const{type:s,required:i,validator:o,skipCheck:a}=n;if(i&&r){S('Missing required prop: "'+t+'"');return}if(!(e==null&&!i)){if(s!=null&&s!==!0&&!a){let l=!1;const c=H(s)?s:[s],u=[];for(let h=0;h<c.length&&!l;h++){const{valid:d,expectedType:p}=wA(e,c[h]);u.push(p||""),l=d}if(!l){S(TA(t,e,u));return}}o&&!o(e)&&S('Invalid prop: custom validator check failed for prop "'+t+'".')}}const EA=Nr("String,Number,Boolean,Function,Symbol,BigInt");function wA(t,e){let n;const r=uh(e);if(EA(r)){const s=typeof t;n=s===r.toLowerCase(),!n&&s==="object"&&(n=t instanceof e)}else r==="Object"?n=_e(t):r==="Array"?n=H(t):r==="null"?n=t===null:n=t instanceof e;return{valid:n,expectedType:r}}function TA(t,e,n){let r=`Invalid prop: type check failed for prop "${t}". Expected ${n.map(as).join(" | ")}`;const s=n[0],i=Id(e),o=Jp(e,s),a=Jp(e,i);return n.length===1&&Zp(s)&&!IA(s,i)&&(r+=` with value ${o}`),r+=`, got ${i} `,Zp(i)&&(r+=`with value ${a}.`),r}function Jp(t,e){return e==="String"?`"${t}"`:e==="Number"?`${Number(t)}`:`${t}`}function Zp(t){return["string","number","boolean"].some(n=>t.toLowerCase()===n)}function IA(...t){return t.some(e=>e.toLowerCase()==="boolean")}const Uy=t=>t[0]==="_"||t==="$stable",Ud=t=>H(t)?t.map(Xt):[Xt(t)],bA=(t,e,n)=>{if(e._n)return e;const r=sn((...s)=>(Ke&&S(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Ud(e(...s))),n);return r._c=!1,r},$y=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Uy(s))continue;const i=t[s];if(Q(i))e[s]=bA(s,i,r);else if(i!=null){S(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);const o=Ud(i);e[s]=()=>o}}},By=(t,e)=>{Ld(t.vnode)||S("Non-function value encountered for default slot. Prefer function slots for better performance.");const n=Ud(e);t.slots.default=()=>n},RA=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),pl(e,"_",n)):$y(e,t.slots={})}else t.slots={},e&&By(t,e);pl(t.slots,_c,1)},AA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Te;if(r.shapeFlag&32){const a=e._;a?es?(De(s,e),Dn(t,"set","$slots")):n&&a===1?i=!1:(De(s,e),!n&&a===1&&delete s._):(i=!e.$stable,$y(e,s)),o=e}else e&&(By(t,e),o={default:1});if(i)for(const a in s)!Uy(a)&&!(a in o)&&delete s[a]};function hh(t,e,n,r,s=!1){if(H(t)){t.forEach((d,p)=>hh(d,e&&(H(e)?e[p]:e),n,r,s));return}if(el(r)&&!s)return;const i=r.shapeFlag&4?yc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t;if(!a){S("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Le(c)?(u[c]=null,ie(h,c)&&(h[c]=null)):ze(c)&&(c.value=null)),Q(l))Hn(l,a,12,[o,u]);else{const d=Le(l),p=ze(l);if(d||p){const g=()=>{if(t.f){const E=d?ie(h,l)?h[l]:u[l]:l.value;s?H(E)&&wd(E,i):H(E)?E.includes(i)||E.push(i):d?(u[l]=[i],ie(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ie(h,l)&&(h[l]=o)):p?(l.value=o,t.k&&(u[t.k]=o)):S("Invalid template ref type:",l,`(${typeof l})`)};o?(g.id=-1,St(g,n)):g()}else S("Invalid template ref type:",l,`(${typeof l})`)}}let Pi,lr;function Fn(t,e){t.appContext.config.performance&&Tl()&&lr.mark(`vue-${e}-${t.uid}`),NR(t,e,Tl()?lr.now():Date.now())}function Un(t,e){if(t.appContext.config.performance&&Tl()){const n=`vue-${e}-${t.uid}`,r=n+":end";lr.mark(r),lr.measure(`<${vc(t,t.type)}> ${e}`,n,r),lr.clearMarks(n),lr.clearMarks(r)}OR(t,e,Tl()?lr.now():Date.now())}function Tl(){return Pi!==void 0||(typeof window<"u"&&window.performance?(Pi=!0,lr=window.performance):Pi=!1),Pi}function CA(){const t=[];if(t.length){const e=t.length>1;console.warn(`Feature flag${e?"s":""} ${t.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const St=BR;function SA(t){return PA(t)}function PA(t,e){CA();const n=gl();n.__VUE__=!0,Ty(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=kt,insertStaticContent:g}=t,E=(f,m,_,T=null,w=null,P=null,D=!1,C=null,N=es?!1:!!m.dynamicChildren)=>{if(f===m)return;f&&!ki(f,m)&&(T=V(f),Bt(f,w,P,!0),f=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:b,ref:q,shapeFlag:j}=m;switch(b){case Jo:v(f,m,_,T);break;case on:A(f,m,_,T);break;case to:f==null?O(m,_,T,D):k(f,m,_,D);break;case jt:fn(f,m,_,T,w,P,D,C,N);break;default:j&1?me(f,m,_,T,w,P,D,C,N):j&6?Ra(f,m,_,T,w,P,D,C,N):j&64||j&128?b.process(f,m,_,T,w,P,D,C,N,B):S("Invalid VNode type:",b,`(${typeof b})`)}q!=null&&w&&hh(q,f&&f.ref,P,m||f,!m)},v=(f,m,_,T)=>{if(f==null)r(m.el=a(m.children),_,T);else{const w=m.el=f.el;m.children!==f.children&&c(w,m.children)}},A=(f,m,_,T)=>{f==null?r(m.el=l(m.children||""),_,T):m.el=f.el},O=(f,m,_,T)=>{[f.el,f.anchor]=g(f.children,m,_,T,f.el,f.anchor)},k=(f,m,_,T)=>{if(m.children!==f.children){const w=d(f.anchor);$(f),[m.el,m.anchor]=g(m.children,_,w,T)}else m.el=f.el,m.anchor=f.anchor},K=({el:f,anchor:m},_,T)=>{let w;for(;f&&f!==m;)w=d(f),r(f,_,T),f=w;r(m,_,T)},$=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},me=(f,m,_,T,w,P,D,C,N)=>{D=D||m.type==="svg",f==null?Me(m,_,T,w,P,D,C,N):tt(f,m,w,P,D,C,N)},Me=(f,m,_,T,w,P,D,C)=>{let N,b;const{type:q,props:j,shapeFlag:z,transition:Z,dirs:oe}=f;if(N=f.el=o(f.type,P,j&&j.is,j),z&8?u(N,f.children):z&16&&Be(f.children,N,null,T,w,P&&q!=="foreignObject",D,C),oe&&Fr(f,null,T,"created"),et(N,f,f.scopeId,D,T),j){for(const we in j)we!=="value"&&!Xa(we)&&i(N,we,null,j[we],P,f.children,T,w,y);"value"in j&&i(N,"value",null,j.value),(b=j.onVnodeBeforeMount)&&gn(b,T,f)}Object.defineProperty(N,"__vnode",{value:f,enumerable:!1}),Object.defineProperty(N,"__vueParentComponent",{value:T,enumerable:!1}),oe&&Fr(f,null,T,"beforeMount");const be=(!w||w&&!w.pendingBranch)&&Z&&!Z.persisted;be&&Z.beforeEnter(N),r(N,m,_),((b=j&&j.onVnodeMounted)||be||oe)&&St(()=>{b&&gn(b,T,f),be&&Z.enter(N),oe&&Fr(f,null,T,"mounted")},w)},et=(f,m,_,T,w)=>{if(_&&p(f,_),T)for(let P=0;P<T.length;P++)p(f,T[P]);if(w){let P=w.subTree;if(P.patchFlag>0&&P.patchFlag&2048&&(P=Cy(P.children)||P),m===P){const D=w.vnode;et(f,D,D.scopeId,D.slotScopeIds,w.parent)}}},Be=(f,m,_,T,w,P,D,C,N=0)=>{for(let b=N;b<f.length;b++){const q=f[b]=C?or(f[b]):Xt(f[b]);E(null,q,m,_,T,w,P,D,C)}},tt=(f,m,_,T,w,P,D)=>{const C=m.el=f.el;let{patchFlag:N,dynamicChildren:b,dirs:q}=m;N|=f.patchFlag&16;const j=f.props||Te,z=m.props||Te;let Z;_&&Ur(_,!1),(Z=z.onVnodeBeforeUpdate)&&gn(Z,_,m,f),q&&Fr(m,f,_,"beforeUpdate"),_&&Ur(_,!0),es&&(N=0,D=!1,b=null);const oe=w&&m.type!=="foreignObject";if(b?(Gt(f.dynamicChildren,b,C,_,T,oe,P),dh(f,m)):D||$t(f,m,C,null,_,T,oe,P,!1),N>0){if(N&16)Ct(C,m,j,z,_,T,w);else if(N&2&&j.class!==z.class&&i(C,"class",null,z.class,w),N&4&&i(C,"style",j.style,z.style,w),N&8){const be=m.dynamicProps;for(let we=0;we<be.length;we++){const je=be[we],Qt=j[je],Ns=z[je];(Ns!==Qt||je==="value")&&i(C,je,Qt,Ns,w,f.children,_,T,y)}}N&1&&f.children!==m.children&&u(C,m.children)}else!D&&b==null&&Ct(C,m,j,z,_,T,w);((Z=z.onVnodeUpdated)||q)&&St(()=>{Z&&gn(Z,_,m,f),q&&Fr(m,f,_,"updated")},T)},Gt=(f,m,_,T,w,P,D)=>{for(let C=0;C<m.length;C++){const N=f[C],b=m[C],q=N.el&&(N.type===jt||!ki(N,b)||N.shapeFlag&70)?h(N.el):_;E(N,b,q,null,T,w,P,D,!0)}},Ct=(f,m,_,T,w,P,D)=>{if(_!==T){if(_!==Te)for(const C in _)!Xa(C)&&!(C in T)&&i(f,C,_[C],null,D,m.children,w,P,y);for(const C in T){if(Xa(C))continue;const N=T[C],b=_[C];N!==b&&C!=="value"&&i(f,C,b,N,D,m.children,w,P,y)}"value"in T&&i(f,"value",_.value,T.value)}},fn=(f,m,_,T,w,P,D,C,N)=>{const b=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:z,slotScopeIds:Z}=m;(es||j&2048)&&(j=0,N=!1,z=null),Z&&(C=C?C.concat(Z):Z),f==null?(r(b,_,T),r(q,_,T),Be(m.children,_,q,w,P,D,C,N)):j>0&&j&64&&z&&f.dynamicChildren?(Gt(f.dynamicChildren,z,_,w,P,D,C),dh(f,m)):$t(f,m,_,q,w,P,D,C,N)},Ra=(f,m,_,T,w,P,D,C,N)=>{m.slotScopeIds=C,f==null?m.shapeFlag&512?w.ctx.activate(m,_,T,D,N):Ut(m,_,T,w,P,D,N):nt(f,m,N)},Ut=(f,m,_,T,w,P,D)=>{const C=f.component=jA(f,T,w);if(C.type.__hmrId&&TR(C),Ja(f),Fn(C,"mount"),Ld(f)&&(C.ctx.renderer=B),Fn(C,"init"),qA(C),Un(C,"init"),C.asyncDep){if(w&&w.registerDep(C,re),!f.el){const N=C.subTree=Oe(on);A(null,N,m,_)}return}re(C,f,m,_,w,P,D),Za(),Un(C,"mount")},nt=(f,m,_)=>{const T=m.component=f.component;if(FR(f,m,_))if(T.asyncDep&&!T.asyncResolved){Ja(m),se(T,m,_),Za();return}else T.next=m,ER(T.update),T.update();else m.el=f.el,T.vnode=m},re=(f,m,_,T,w,P,D)=>{const C=()=>{if(f.isMounted){let{next:q,bu:j,u:z,parent:Z,vnode:oe}=f,be=q,we;Ja(q||f.vnode),Ur(f,!1),q?(q.el=oe.el,se(f,q,D)):q=oe,j&&Ls(j),(we=q.props&&q.props.onVnodeBeforeUpdate)&&gn(we,Z,q,oe),Ur(f,!0),Fn(f,"render");const je=du(f);Un(f,"render");const Qt=f.subTree;f.subTree=je,Fn(f,"patch"),E(Qt,je,h(Qt.el),V(Qt),f,w,P),Un(f,"patch"),q.el=je.el,be===null&&UR(f,je.el),z&&St(z,w),(we=q.props&&q.props.onVnodeUpdated)&&St(()=>gn(we,Z,q,oe),w),Iy(f),Za()}else{let q;const{el:j,props:z}=m,{bm:Z,m:oe,parent:be}=f,we=el(m);if(Ur(f,!1),Z&&Ls(Z),!we&&(q=z&&z.onVnodeBeforeMount)&&gn(q,be,m),Ur(f,!0),j&&Ne){const je=()=>{Fn(f,"render"),f.subTree=du(f),Un(f,"render"),Fn(f,"hydrate"),Ne(j,f.subTree,f,w,null),Un(f,"hydrate")};we?m.type.__asyncLoader().then(()=>!f.isUnmounted&&je()):je()}else{Fn(f,"render");const je=f.subTree=du(f);Un(f,"render"),Fn(f,"patch"),E(null,je,_,T,f,w,P),Un(f,"patch"),m.el=je.el}if(oe&&St(oe,w),!we&&(q=z&&z.onVnodeMounted)){const je=m;St(()=>gn(q,be,je),w)}(m.shapeFlag&256||be&&el(be.vnode)&&be.vnode.shapeFlag&256)&&f.a&&St(f.a,w),f.isMounted=!0,SR(f),m=_=T=null}},N=f.effect=new Sd(C,()=>pc(b),f.scope),b=f.update=()=>N.run();b.id=f.uid,Ur(f,!0),N.onTrack=f.rtc?q=>Ls(f.rtc,q):void 0,N.onTrigger=f.rtg?q=>Ls(f.rtg,q):void 0,b.ownerInstance=f,b()},se=(f,m,_)=>{m.component=f;const T=f.vnode.props;f.vnode=m,f.next=null,yA(f,m.props,T,_),AA(f,m.children,_),Es(),$p(),ws()},$t=(f,m,_,T,w,P,D,C,N=!1)=>{const b=f&&f.children,q=f?f.shapeFlag:0,j=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){Zn(b,j,_,T,w,P,D,C,N);return}else if(z&256){Vr(b,j,_,T,w,P,D,C,N);return}}Z&8?(q&16&&y(b,w,P),j!==b&&u(_,j)):q&16?Z&16?Zn(b,j,_,T,w,P,D,C,N):y(b,w,P,!0):(q&8&&u(_,""),Z&16&&Be(j,_,T,w,P,D,C,N))},Vr=(f,m,_,T,w,P,D,C,N)=>{f=f||Hs,m=m||Hs;const b=f.length,q=m.length,j=Math.min(b,q);let z;for(z=0;z<j;z++){const Z=m[z]=N?or(m[z]):Xt(m[z]);E(f[z],Z,_,null,w,P,D,C,N)}b>q?y(f,w,P,!0,!1,j):Be(m,_,T,w,P,D,C,N,j)},Zn=(f,m,_,T,w,P,D,C,N)=>{let b=0;const q=m.length;let j=f.length-1,z=q-1;for(;b<=j&&b<=z;){const Z=f[b],oe=m[b]=N?or(m[b]):Xt(m[b]);if(ki(Z,oe))E(Z,oe,_,null,w,P,D,C,N);else break;b++}for(;b<=j&&b<=z;){const Z=f[j],oe=m[z]=N?or(m[z]):Xt(m[z]);if(ki(Z,oe))E(Z,oe,_,null,w,P,D,C,N);else break;j--,z--}if(b>j){if(b<=z){const Z=z+1,oe=Z<q?m[Z].el:T;for(;b<=z;)E(null,m[b]=N?or(m[b]):Xt(m[b]),_,oe,w,P,D,C,N),b++}}else if(b>z)for(;b<=j;)Bt(f[b],w,P,!0),b++;else{const Z=b,oe=b,be=new Map;for(b=oe;b<=z;b++){const wt=m[b]=N?or(m[b]):Xt(m[b]);wt.key!=null&&(be.has(wt.key)&&S("Duplicate keys found during update:",JSON.stringify(wt.key),"Make sure keys are unique."),be.set(wt.key,b))}let we,je=0;const Qt=z-oe+1;let Ns=!1,Sp=0;const Si=new Array(Qt);for(b=0;b<Qt;b++)Si[b]=0;for(b=Z;b<=j;b++){const wt=f[b];if(je>=Qt){Bt(wt,w,P,!0);continue}let mn;if(wt.key!=null)mn=be.get(wt.key);else for(we=oe;we<=z;we++)if(Si[we-oe]===0&&ki(wt,m[we])){mn=we;break}mn===void 0?Bt(wt,w,P,!0):(Si[mn-oe]=b+1,mn>=Sp?Sp=mn:Ns=!0,E(wt,m[mn],_,null,w,P,D,C,N),je++)}const Pp=Ns?kA(Si):Hs;for(we=Pp.length-1,b=Qt-1;b>=0;b--){const wt=oe+b,mn=m[wt],kp=wt+1<q?m[wt+1].el:T;Si[b]===0?E(null,mn,_,kp,w,P,D,C,N):Ns&&(we<0||b!==Pp[we]?pn(mn,_,kp,2):we--)}}},pn=(f,m,_,T,w=null)=>{const{el:P,type:D,transition:C,children:N,shapeFlag:b}=f;if(b&6){pn(f.component.subTree,m,_,T);return}if(b&128){f.suspense.move(m,_,T);return}if(b&64){D.move(f,m,_,B);return}if(D===jt){r(P,m,_);for(let j=0;j<N.length;j++)pn(N[j],m,_,T);r(f.anchor,m,_);return}if(D===to){K(f,m,_);return}if(T!==2&&b&1&&C)if(T===0)C.beforeEnter(P),r(P,m,_),St(()=>C.enter(P),w);else{const{leave:j,delayLeave:z,afterLeave:Z}=C,oe=()=>r(P,m,_),be=()=>{j(P,()=>{oe(),Z&&Z()})};z?z(P,oe,be):be()}else r(P,m,_)},Bt=(f,m,_,T=!1,w=!1)=>{const{type:P,props:D,ref:C,children:N,dynamicChildren:b,shapeFlag:q,patchFlag:j,dirs:z}=f;if(C!=null&&hh(C,null,_,f,!0),q&256){m.ctx.deactivate(f);return}const Z=q&1&&z,oe=!el(f);let be;if(oe&&(be=D&&D.onVnodeBeforeUnmount)&&gn(be,m,f),q&6)tr(f.component,_,T);else{if(q&128){f.suspense.unmount(_,T);return}Z&&Fr(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,_,w,B,T):b&&(P!==jt||j>0&&j&64)?y(b,m,_,!1,!0):(P===jt&&j&384||!w&&q&16)&&y(N,m,_),T&&er(f)}(oe&&(be=D&&D.onVnodeUnmounted)||Z)&&St(()=>{be&&gn(be,m,f),Z&&Fr(f,null,m,"unmounted")},_)},er=f=>{const{type:m,el:_,anchor:T,transition:w}=f;if(m===jt){f.patchFlag>0&&f.patchFlag&2048&&w&&!w.persisted?f.children.forEach(D=>{D.type===on?s(D.el):er(D)}):Aa(_,T);return}if(m===to){$(f);return}const P=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:C}=w,N=()=>D(_,P);C?C(f.el,P,N):N()}else P()},Aa=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},tr=(f,m,_)=>{f.type.__hmrId&&IR(f);const{bum:T,scope:w,update:P,subTree:D,um:C}=f;T&&Ls(T),w.stop(),P&&(P.active=!1,Bt(D,f,m,_)),C&&St(C,m),St(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve()),kR(f)},y=(f,m,_,T=!1,w=!1,P=0)=>{for(let D=P;D<f.length;D++)Bt(f[D],m,_,T,w)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,m,_)=>{f==null?m._vnode&&Bt(m._vnode,null,null,!0):E(m._vnode||null,f,m,null,null,null,_),$p(),vy(),m._vnode=f},B={p:E,um:Bt,m:pn,r:er,mt:Ut,mc:Be,pc:$t,pbc:Gt,n:V,o:t};let ce,Ne;return e&&([ce,Ne]=e(B)),{render:F,hydrate:ce,createApp:mA(F,ce)}}function Ur({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dh(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=or(s[i]),a.el=o.el),n||dh(o,a)),a.type===Jo&&(a.el=o.el),a.type===on&&!a.el&&(a.el=o.el)}}function kA(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const NA=t=>t.__isTeleport,jt=Symbol.for("v-fgt"),Jo=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),no=[];let tn=null;function Ht(t=!1){no.push(tn=t?null:[])}function OA(){no.pop(),tn=no[no.length-1]||null}let To=1;function em(t){To+=t}function DA(t){return t.dynamicChildren=To>0?tn||Hs:null,OA(),To>0&&tn&&tn.push(t),t}function Kt(t,e,n,r,s,i){return DA(x(t,e,n,r,s,i,!0))}function Io(t){return t?t.__v_isVNode===!0:!1}function ki(t,e){return e.shapeFlag&6&&Vs.has(e.type)?(t.shapeFlag&=-257,e.shapeFlag&=-513,!1):t.type===e.type&&t.key===e.key}const xA=(...t)=>MA(...t),_c="__vInternal",jy=({key:t})=>t??null,nl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||ze(t)||Q(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jy(e),ref:e&&nl(e),scopeId:Ay,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return a?($d(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Le(n)?8:16),l.key!==l.key&&S("VNode created with invalid key (NaN). VNode type:",l.type),To>0&&!o&&tn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&tn.push(l),l}const Oe=xA;function MA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nA)&&(t||S(`Invalid vnode type when creating vnode: ${t}.`),t=on),Io(t)){const a=Rr(t,e,!0);return n&&$d(a,n),To>0&&!i&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(zy(t)&&(t=t.__vccOpts),e){e=LA(e);let{class:a,style:l}=e;a&&!Le(a)&&(e.class=Ad(a)),_e(l)&&(th(l)&&!H(l)&&(l=De({},l)),e.style=Rd(l))}const o=Le(t)?1:$R(t)?128:NA(t)?64:_e(t)?4:Q(t)?2:0;return o&4&&th(t)&&(t=ne(t),S("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),x(t,e,n,r,s,o,i,!0)}function LA(t){return t?th(t)||_c in t?De({},t):t:null}function Rr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?UA(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jy(a),ref:e&&e.ref?n&&s?H(s)?s.concat(nl(e)):[s,nl(e)]:nl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i===-1&&H(o)?o.map(Wy):o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==jt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rr(t.ssContent),ssFallback:t.ssFallback&&Rr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Wy(t){const e=Rr(t);return H(t.children)&&(e.children=t.children.map(Wy)),e}function VA(t=" ",e=0){return Oe(Jo,null,t,e)}function FA(t,e){const n=Oe(to,null,t);return n.staticCount=e,n}function Xt(t){return t==null||typeof t=="boolean"?Oe(on):H(t)?Oe(jt,null,t.slice()):typeof t=="object"?or(t):Oe(Jo,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rr(t)}function $d(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$d(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(_c in e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Q(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[VA(e)]):n=8);t.children=e,t.shapeFlag|=n}function UA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ad([e.class,r.class]));else if(s==="style")e.style=Rd([e.style,r.style]);else if(Qo(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function gn(t,e,n,r=null){rn(t,e,7,[n,r])}const $A=My();let BA=0;function jA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$A,i={uid:BA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new K_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vy(r,s),emitsOptions:Ry(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx=iA(i),i.root=e?e.root:i,i.emit=xR.bind(null,i),t.ce&&t.ce(i),i}let Ke=null;const Bd=()=>Ke||Rt;let jd,Os,tm="__VUE_INSTANCE_SETTERS__";(Os=gl()[tm])||(Os=gl()[tm]=[]),Os.push(t=>Ke=t),jd=t=>{Os.length>1?Os.forEach(e=>e(t)):Os[0](t)};const ti=t=>{jd(t),t.scope.on()},ns=()=>{Ke&&Ke.scope.off(),jd(null)},WA=Nr("slot,component");function fh(t,e){const n=e.isNativeTag||B_;(WA(t)||n(t))&&S("Do not use built-in or reserved HTML elements as component id: "+t)}function qy(t){return t.vnode.shapeFlag&4}let bo=!1;function qA(t,e=!1){bo=e;const{props:n,children:r}=t.vnode,s=qy(t);gA(t,n,s,e),RA(t,r);const i=s?HA(t,e):void 0;return bo=!1,i}function HA(t,e){var n;const r=t.type;{if(r.name&&fh(r.name,t.appContext.config),r.components){const i=Object.keys(r.components);for(let o=0;o<i.length;o++)fh(i[o],t.appContext.config)}if(r.directives){const i=Object.keys(r.directives);for(let o=0;o<i.length;o++)Py(i[o])}r.compilerOptions&&Hy()&&S('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=ly(new Proxy(t.ctx,Dy)),oA(t);const{setup:s}=r;if(s){const i=t.setupContext=s.length>1?GA(t):null;ti(t),Es();const o=Hn(s,t,0,[ji(t.props),i]);if(ws(),ns(),Td(o)){if(o.then(ns,ns),e)return o.then(a=>{nm(t,a,e)}).catch(a=>{fc(a,t,0)});if(t.asyncDep=o,!t.suspense){const a=(n=r.name)!=null?n:"Anonymous";S(`Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else nm(t,o,e)}else Ky(t,e)}function nm(t,e,n){Q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)?(Io(e)&&S("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=e,t.setupState=fy(e),aA(t)):e!==void 0&&S(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Ky(t,n)}let ph;const Hy=()=>!ph;function Ky(t,e,n){const r=t.type;if(!t.render){if(!e&&ph&&!r.render){const s=r.template||Fd(t).template;if(s){Fn(t,"compile");const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=De(De({isCustomElement:i,delimiters:a},o),l);r.render=ph(s,c),Un(t,"compile")}}t.render=r.render||kt}ti(t),Es(),cA(t),ws(),ns(),!r.render&&t.render===kt&&!e&&(r.template?S('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):S("Component is missing template or render function."))}function KA(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return vl(),yt(t,"get","$attrs"),e[n]},set(){return S("setupContext.attrs is readonly."),!1},deleteProperty(){return S("setupContext.attrs is readonly."),!1}}))}function zA(t){return t.slotsProxy||(t.slotsProxy=new Proxy(t.slots,{get(e,n){return yt(t,"get","$slots"),e[n]}}))}function GA(t){return Object.freeze({get attrs(){return KA(t)},get slots(){return zA(t)},get emit(){return(n,...r)=>t.emit(n,...r)},expose:n=>{if(t.exposed&&S("expose() should be called only once per setup()."),n!=null){let r=typeof n;r==="object"&&(H(n)?r="array":ze(n)&&(r="ref")),r!=="object"&&S(`expose() should be passed a plain object, received ${r}.`)}t.exposed=n||{}}})}function yc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fy(ly(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ts)return ts[n](t)},has(e,n){return n in e||n in ts}}))}const QA=/(?:^|[-_])(\w)/g,YA=t=>t.replace(QA,e=>e.toUpperCase()).replace(/[-_]/g,"");function Wd(t,e=!0){return Q(t)?t.displayName||t.name:t.name||e&&t.__name}function vc(t,e,n=!1){let r=Wd(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const o in i)if(i[o]===e)return o};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?YA(r):n?"App":"Anonymous"}function zy(t){return Q(t)&&"__vccOpts"in t}const Zt=(t,e)=>dR(t,e,bo);function Gy(t,e,n){const r=arguments.length;return r===2?_e(e)&&!H(e)?Io(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),Oe(t,e,n))}const XA=Symbol.for("v-scx"),JA=()=>{{const t=An(XA);return t||S("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function pu(t){return!!(t&&t.__v_isShallow)}function ZA(){if(typeof window>"u")return;const t={style:"color:#3ba776"},e={style:"color:#0b1bc9"},n={style:"color:#b62e24"},r={style:"color:#9d288c"},s={header(h){return _e(h)?h.__isVue?["div",t,"VueInstance"]:ze(h)?["div",{},["span",t,u(h)],"<",a(h.value),">"]:Jr(h)?["div",{},["span",t,pu(h)?"ShallowReactive":"Reactive"],"<",a(h),`>${br(h)?" (readonly)":""}`]:br(h)?["div",{},["span",t,pu(h)?"ShallowReadonly":"Readonly"],"<",a(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...i(h.$)]}};function i(h){const d=[];h.type.props&&h.props&&d.push(o("props",ne(h.props))),h.setupState!==Te&&d.push(o("setup",h.setupState)),h.data!==Te&&d.push(o("data",ne(h.data)));const p=l(h,"computed");p&&d.push(o("computed",p));const g=l(h,"inject");return g&&d.push(o("injected",g)),d.push(["div",{},["span",{style:r.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=De({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(p=>["div",{},["span",r,p+": "],a(d[p],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",r,h]:_e(h)?["object",{object:d?ne(h):h}]:["span",n,String(h)]}function l(h,d){const p=h.type;if(Q(p))return;const g={};for(const E in h.ctx)c(p,E,d)&&(g[E]=h.ctx[E]);return g}function c(h,d,p){const g=h[p];if(H(g)&&g.includes(d)||_e(g)&&d in g||h.extends&&c(h.extends,d,p)||h.mixins&&h.mixins.some(E=>c(E,d,p)))return!0}function u(h){return pu(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(s):window.devtoolsFormatters=[s]}const rm="3.3.4",eC="http://www.w3.org/2000/svg",Wr=typeof document<"u"?document:null,sm=Wr&&Wr.createElement("template"),tC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wr.createElementNS(eC,t):Wr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wr.createTextNode(t),createComment:t=>Wr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{sm.innerHTML=r?`<svg>${t}</svg>`:t;const a=sm.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nC(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rC(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&mh(r,i,"");for(const i in n)mh(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const sC=/[^\\];\s*$/,im=/\s*!important$/;function mh(t,e,n){if(H(n))n.forEach(r=>mh(t,e,r));else if(n==null&&(n=""),sC.test(n)&&S(`Unexpected semicolon at the end of '${e}' style value: '${n}'`),e.startsWith("--"))t.setProperty(e,n);else{const r=iC(t,e);im.test(n)?t.setProperty(Tr(r),n.replace(im,""),"important"):t[r]=n}}const om=["Webkit","Moz","ms"],mu={};function iC(t,e){const n=mu[e];if(n)return n;let r=On(e);if(r!=="filter"&&r in t)return mu[e]=r;r=as(r);for(let s=0;s<om.length;s++){const i=om[s]+r;if(i in t)return mu[e]=i}return e}const am="http://www.w3.org/1999/xlink";function oC(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(am,e.slice(6,e.length)):t.setAttributeNS(am,e,n);else{const i=Sb(e);n==null||i&&!q_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function aC(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=q_(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch(c){l||S(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,c)}l&&t.removeAttribute(e)}function qr(t,e,n,r){t.addEventListener(e,n,r)}function lC(t,e,n,r){t.removeEventListener(e,n,r)}function cC(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=uC(e);if(r){const c=i[e]=fC(r,s);qr(t,a,c,l)}else o&&(lC(t,a,o,l),i[e]=void 0)}}const lm=/(?:Once|Passive|Capture)$/;function uC(t){let e;if(lm.test(t)){e={};let r;for(;r=t.match(lm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tr(t.slice(2)),e]}let gu=0;const hC=Promise.resolve(),dC=()=>gu||(hC.then(()=>gu=0),gu=Date.now());function fC(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rn(pC(r,n.value),e,5,[r])};return n.value=t,n.attached=dC(),n}function pC(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const cm=/^on[a-z]/,mC=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?nC(t,r,s):e==="style"?rC(t,n,r):Qo(e)?fl(e)||cC(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gC(t,e,r,s))?aC(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),oC(t,e,r,s))};function gC(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&cm.test(e)&&Q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||cm.test(e)&&Le(n)?!1:e in t}const Il=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Ls(e,n):e};function _C(t){t.target.composing=!0}function um(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Il(s);const i=r||s.props&&s.props.type==="number";qr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ml(a)),t._assign(a)}),n&&qr(t,"change",()=>{t.value=t.value.trim()}),e||(qr(t,"compositionstart",_C),qr(t,"compositionend",um),qr(t,"change",um))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Il(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ml(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},gh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ic(e);qr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ml(bl(o)):bl(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Il(r)},mounted(t,{value:e}){hm(t,e)},beforeUpdate(t,e,n){t._assign=Il(n)},updated(t,{value:e}){hm(t,e)}};function hm(t,e){const n=t.multiple;if(n&&!H(e)&&!ic(e)){S(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8,-1)}.`);return}for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=bl(i);if(n)H(e)?i.selected=kb(e,o)>-1:i.selected=e.has(o);else if(ac(bl(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}function bl(t){return"_value"in t?t._value:t.value}const yC=["ctrl","shift","alt","meta"],vC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yC.some(n=>t[`${n}Key`]&&!e.includes(n))},Ec=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=vC[e[s]];if(i&&i(n,e))return}return t(n,...r)},EC=De({patchProp:mC},tC);let dm;function wC(){return dm||(dm=SA(EC))}const TC=(...t)=>{const e=wC().createApp(...t);IC(e),bC(e);const{mount:n}=e;return e.mount=r=>{const s=RC(r);if(!s)return;const i=e._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function IC(t){Object.defineProperty(t.config,"isNativeTag",{value:e=>Rb(e)||Ab(e),writable:!1})}function bC(t){if(Hy()){const e=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return e},set(){S("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const n=t.config.compilerOptions,r='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';Object.defineProperty(t.config,"compilerOptions",{get(){return S(r),n},set(){S(r)}})}}function RC(t){if(Le(t)){const e=document.querySelector(t);return e||S(`Failed to mount app: mount target selector "${t}" returned null.`),e}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&S('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function AC(){ZA()}AC();function CC(){return Qy().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Qy(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const SC=typeof Proxy=="function",PC="devtools-plugin:setup",kC="plugin:settings:set";let Ds,_h;function NC(){var t;return Ds!==void 0||(typeof window<"u"&&window.performance?(Ds=!0,_h=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Ds=!0,_h=global.perf_hooks.performance):Ds=!1),Ds}function OC(){return NC()?_h.now():Date.now()}class DC{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return OC()}},n&&n.on(kC,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function xC(t,e){const n=t,r=Qy(),s=CC(),i=SC&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(PC,t,e);else{const o=i?new DC(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $n=typeof window<"u";function MC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function _u(t,e){const n={};for(const r in e){const s=e[r];n[r]=Vt(s)?s.map(t):t(s)}return n}const ro=()=>{},Vt=Array.isArray;function de(t){const e=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(e))}const LC=/\/$/,VC=t=>t.replace(LC,"");function yu(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$C(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function FC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pm(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ar(e.matched[r],n.matched[s])&&Yy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ar(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!UC(t[n],e[n]))return!1;return!0}function UC(t,e){return Vt(t)?mm(t,e):Vt(e)?mm(e,t):t===e}function mm(t,e){return Vt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $C(t,e){if(t.startsWith("/"))return t;if(!e.startsWith("/"))return de(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${e}". It should look like "/${e}".`),t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ro;(function(t){t.pop="pop",t.push="push"})(Ro||(Ro={}));var so;(function(t){t.back="back",t.forward="forward",t.unknown=""})(so||(so={}));function BC(t){if(!t)if($n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VC(t)}const jC=/^[^#]+#/;function WC(t,e){return t.replace(jC,"#")+e}function qC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wc=()=>({left:window.pageXOffset,top:window.pageYOffset});function HC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#");if(typeof t.el=="string"&&(!r||!document.getElementById(t.el.slice(1))))try{const i=document.querySelector(t.el);if(r&&i){de(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{de(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s){de(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}e=qC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gm(t,e){return(history.state?history.state.position-e:-1)+t}const yh=new Map;function KC(t,e){yh.set(t,e)}function zC(t){const e=yh.get(t);return yh.delete(t),e}let GC=()=>location.protocol+"//"+location.host;function Xy(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),fm(l,"")}return fm(n,t)+r+s}function QC(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Xy(t,location),g=n.value,E=e.value;let v=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}v=E?d.position-E.position:0}else r(p);s.forEach(A=>{A(n.value,g,{delta:v,type:Ro.pop,direction:v?v>0?so.forward:so.back:so.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:wc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function _m(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wc():null}}function YC(t){const{history:e,location:n}=window,r={value:Xy(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:GC()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){de("Error with push/replace State",p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ye({},e.state,_m(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ye({},s.value,e.state,{forward:l,scroll:wc()});e.state||de(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),i(u.current,u,!0);const h=ye({},_m(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function XC(t){t=BC(t);const e=YC(t),n=QC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ye({location:"",base:t,go:r,createHref:WC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JC(t){return typeof t=="string"||t&&typeof t=="object"}function Jy(t){return typeof t=="string"||typeof t=="symbol"}const rr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zy=Symbol("navigation failure");var ym;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ym||(ym={}));const ZC={1({location:t,currentLocation:e}){return`No match for
 ${JSON.stringify(t)}${e?`
while being at
`+JSON.stringify(e):""}`},2({from:t,to:e}){return`Redirected from "${t.fullPath}" to "${t0(e)}" via a navigation guard.`},4({from:t,to:e}){return`Navigation aborted from "${t.fullPath}" to "${e.fullPath}" via a navigation guard.`},8({from:t,to:e}){return`Navigation cancelled from "${t.fullPath}" to "${e.fullPath}" with a new navigation.`},16({from:t,to:e}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function ni(t,e){return ye(new Error(ZC[t](e)),{type:t,[Zy]:!0},e)}function Vn(t,e){return t instanceof Error&&Zy in t&&(e==null||!!(t.type&e))}const e0=["params","query","hash"];function t0(t){if(typeof t=="string")return t;if("path"in t)return t.path;const e={};for(const n of e0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}const vm="[^/]+?",n0={sensitive:!1,strict:!1,start:!0,end:!0},r0=/[.+*?^${}()[\]/\\]/g;function s0(t,e){const n=ye({},n0,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(r0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:E,optional:v,regexp:A}=d;i.push({name:g,repeatable:E,optional:v});const O=A||vm;if(O!==vm){p+=10;try{new RegExp(`(${O})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${g}" (${O}): `+K.message)}}let k=E?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(k=v&&c.length<2?`(?:/${k})`:"/"+k),v&&(k+="?"),s+=k,p+=20,v&&(p+=-8),E&&(p+=-20),O===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:E,optional:v}=p,A=g in c?c[g]:"";if(Vt(A)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const O=Vt(A)?A.join("/"):A;if(!O)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function i0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function o0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=i0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Em(r))return 1;if(Em(s))return-1}return s.length-r.length}function Em(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const a0={type:0,value:""},l0=/[a-zA-Z0-9_]/;function c0(t){if(!t)return[[]];if(t==="/")return[[a0]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:l0.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function u0(t,e,n){const r=s0(c0(t.path),n);{const i=new Set;for(const o of r.keys)i.has(o.name)&&de(`Found duplicated params with name "${o.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),i.add(o.name)}const s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function h0(t,e){const n=[],r=new Map;e=Im({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,g=d0(u);g0(g,h),g.aliasOf=d&&d.record;const E=Im(e,u),v=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of k)v.push(ye({},g,{components:d?d.record.components:g.components,path:K,aliasOf:d?d.record:g}))}let A,O;for(const k of v){const{path:K}=k;if(h&&K[0]!=="/"){const $=h.record.path,me=$[$.length-1]==="/"?"":"/";k.path=h.record.path+(K&&me+K)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(A=u0(k,h,E),h&&K[0]==="/"&&_0(A,h),d?(d.alias.push(A),m0(d,A)):(O=O||A,O!==A&&O.alias.push(A),p&&u.name&&!Tm(A)&&o(u.name)),g.children){const $=g.children;for(let me=0;me<$.length;me++)i($[me],A,d&&d.children[me])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return O?()=>{o(O)}:ro}function o(u){if(Jy(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&o0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ev(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Tm(u)&&r.set(u.record.name,u)}function c(u,h){let d,p={},g,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ni(1,{location:u});{const O=Object.keys(u.params||{}).filter(k=>!d.keys.find(K=>K.name===k));O.length&&de(`Discarded invalid param(s) "${O.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}E=d.record.name,p=ye(wm(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&wm(u.params,d.keys.map(O=>O.name))),g=d.stringify(p)}else if("path"in u)g=u.path,g.startsWith("/")||de(`The Matcher cannot resolve relative paths but received "${g}". Unless you directly called \`matcher.resolve("${g}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`),d=n.find(O=>O.re.test(g)),d&&(p=d.parse(g),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw ni(1,{location:u,currentLocation:h});E=d.record.name,p=ye({},h.params,u.params),g=d.stringify(p)}const v=[];let A=d;for(;A;)v.unshift(A.record),A=A.parent;return{name:E,path:g,params:p,matched:v,meta:p0(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function wm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function d0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:f0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function f0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Tm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function p0(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Im(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vh(t,e){return t.name===e.name&&t.optional===e.optional&&t.repeatable===e.repeatable}function m0(t,e){for(const n of t.keys)if(!n.optional&&!e.keys.find(vh.bind(null,n)))return de(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`);for(const n of e.keys)if(!n.optional&&!t.keys.find(vh.bind(null,n)))return de(`Alias "${e.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${n.name}"`)}function g0(t,e){e&&e.record.name&&!t.name&&!t.path&&de(`The route named "${String(e.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function _0(t,e){for(const n of e.keys)if(!t.keys.find(vh.bind(null,n)))return de(`Absolute path "${t.record.path}" must have the exact same param named "${n.name}" as its parent "${e.record.path}".`)}function ev(t,e){return e.children.some(n=>n===t||ev(t,n))}const tv=/#/g,y0=/&/g,v0=/\//g,E0=/=/g,w0=/\?/g,nv=/\+/g,T0=/%5B/g,I0=/%5D/g,rv=/%5E/g,b0=/%60/g,sv=/%7B/g,R0=/%7C/g,iv=/%7D/g,A0=/%20/g;function qd(t){return encodeURI(""+t).replace(R0,"|").replace(T0,"[").replace(I0,"]")}function C0(t){return qd(t).replace(sv,"{").replace(iv,"}").replace(rv,"^")}function Eh(t){return qd(t).replace(nv,"%2B").replace(A0,"+").replace(tv,"%23").replace(y0,"%26").replace(b0,"`").replace(sv,"{").replace(iv,"}").replace(rv,"^")}function S0(t){return Eh(t).replace(E0,"%3D")}function P0(t){return qd(t).replace(tv,"%23").replace(w0,"%3F")}function k0(t){return t==null?"":P0(t).replace(v0,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{de(`Error decoding "${t}". Using original value`)}return""+t}function N0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(nv," "),o=i.indexOf("="),a=Ao(o<0?i:i.slice(0,o)),l=o<0?null:Ao(i.slice(o+1));if(a in e){let c=e[a];Vt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function bm(t){let e="";for(let n in t){const r=t[n];if(n=S0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(r)?r.map(i=>i&&Eh(i)):[r&&Eh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function O0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const D0=Symbol("router view location matched"),Rm=Symbol("router view depth"),Hd=Symbol("router"),ov=Symbol("route location"),wh=Symbol("router view location");function Ni(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ar(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ni(4,{from:n,to:e})):h instanceof Error?a(h):JC(h)?a(ni(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,x0(l,e,n));let u=Promise.resolve(c);if(t.length<3&&(u=u.then(l)),t.length>2){const h=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof c=="object"&&"then"in c)u=u.then(d=>l._called?d:(de(h),Promise.reject(new Error("Invalid navigation guard"))));else if(c!==void 0&&!l._called){de(h),a(new Error("Invalid navigation guard"));return}}u.catch(h=>a(h))})}function x0(t,e,n){let r=0;return function(){r++===1&&de(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${e.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,r===1&&t.apply(null,arguments)}}function vu(t,e,n,r){const s=[];for(const i of t){!i.components&&!i.children.length&&de(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);for(const o in i.components){let a=i.components[o];{if(!a||typeof a!="object"&&typeof a!="function")throw de(`Component "${o}" in record with path "${i.path}" is not a valid component. Received "${String(a)}".`),new Error("Invalid route component");if("then"in a){de(`Component "${o}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const l=a;a=()=>l}else a.__asyncLoader&&!a.__warnedDefineAsync&&(a.__warnedDefineAsync=!0,de(`Component "${o}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(M0(a)){const c=(a.__vccOpts||a)[e];c&&s.push(ar(c,n,r,i,o))}else{let l=a();"catch"in l||(de(`Component "${o}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),l=Promise.resolve(l)),s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=MC(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ar(d,n,r,i,o)()}))}}}return s}function M0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Am(t){const e=An(Hd),n=An(ov),r=Zt(()=>e.resolve(Ks(t.to))),s=Zt(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ar.bind(null,u));if(d>-1)return d;const p=Cm(l[c-2]);return c>1&&Cm(u)===p&&h[h.length-1].path!==p?h.findIndex(Ar.bind(null,l[c-2])):d}),i=Zt(()=>s.value>-1&&U0(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&Yy(n.params,r.value.params));function a(l={}){return F0(l)?e[Ks(t.replace)?"replace":"push"](Ks(t.to)).catch(ro):Promise.resolve()}if($n){const l=Bd();if(l){const c={route:r.value,isActive:i.value,isExactActive:o.value};l.__vrl_devtools=l.__vrl_devtools||[],l.__vrl_devtools.push(c),jR(()=>{c.route=r.value,c.isActive=i.value,c.isExactActive=o.value},{flush:"post"})}}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const L0=ky({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Am,setup(t,{slots:e}){const n=hc(Am(t)),{options:r}=An(Hd),s=Zt(()=>({[Sm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),V0=L0;function F0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function U0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Vt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Cm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sm=(t,e,n)=>t??e??n,$0=ky({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){j0();const r=An(wh),s=Zt(()=>t.route||r.value),i=An(Rm,0),o=Zt(()=>{let c=Ks(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Zt(()=>s.value.matched[o.value]);tl(Rm,Zt(()=>o.value+1)),tl(D0,a),tl(wh,s);const l=hy();return eo(()=>[l.value,a.value,t.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ar(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Pm(n.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,v=Gy(d,ye({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:l}));if($n&&v.ref){const A={depth:o.value,name:h.name,path:h.path,meta:h.meta};(Vt(v.ref)?v.ref.map(k=>k.i):[v.ref.i]).forEach(k=>{k.__vrv_devtools=A})}return Pm(n.default,{Component:v,route:c})||v}}});function Pm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const B0=$0;function j0(){const t=Bd(),e=t.parent&&t.parent.type.name,n=t.parent&&t.parent.subTree&&t.parent.subTree.type;if(e&&(e==="KeepAlive"||e.includes("Transition"))&&typeof n=="object"&&n.name==="RouterView"){const r=e==="KeepAlive"?"keep-alive":"transition";de(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`)}}function Oi(t,e){const n=ye({},t,{matched:t.matched.map(r=>X0(r,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:e,value:n}}}function Da(t){return{_custom:{display:t}}}let W0=0;function q0(t,e,n){if(e.__hasDevtools)return;e.__hasDevtools=!0;const r=W0++;xC({id:"org.vuejs.router"+(r?"."+r:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},s=>{typeof s.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),s.on.inspectComponent((u,h)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Oi(e.currentRoute.value,"Current Route")})}),s.on.visitComponentTree(({treeNode:u,componentInstance:h})=>{if(h.__vrv_devtools){const d=h.__vrv_devtools;u.tags.push({label:(d.name?`${d.name.toString()}: `:"")+d.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:av})}Vt(h.__vrl_devtools)&&(h.__devtoolsApi=s,h.__vrl_devtools.forEach(d=>{let p=uv,g="";d.isExactActive?(p=cv,g="This is exactly active"):d.isActive&&(p=lv,g="This link is active"),u.tags.push({label:d.route.path,textColor:0,tooltip:g,backgroundColor:p})}))}),eo(e.currentRoute,()=>{l(),s.notifyComponentUpdate(),s.sendInspectorTree(a),s.sendInspectorState(a)});const i="router:navigations:"+r;s.addTimelineLayer({id:i,label:`Router${r?" "+r:""} Navigations`,color:4237508}),e.onError((u,h)=>{s.addTimelineEvent({layerId:i,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:s.now(),data:{error:u},groupId:h.meta.__navigationId}})});let o=0;e.beforeEach((u,h)=>{const d={guard:Da("beforeEach"),from:Oi(h,"Current Location during this navigation"),to:Oi(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:o++}),s.addTimelineEvent({layerId:i,event:{time:s.now(),title:"Start of navigation",subtitle:u.fullPath,data:d,groupId:u.meta.__navigationId}})}),e.afterEach((u,h,d)=>{const p={guard:Da("afterEach")};d?(p.failure={_custom:{type:Error,readOnly:!0,display:d?d.message:"",tooltip:"Navigation Failure",value:d}},p.status=Da("❌")):p.status=Da("✅"),p.from=Oi(h,"Current Location during this navigation"),p.to=Oi(u,"Target location"),s.addTimelineEvent({layerId:i,event:{title:"End of navigation",subtitle:u.fullPath,time:s.now(),data:p,logType:d?"warning":"default",groupId:u.meta.__navigationId}})});const a="router-inspector:"+r;s.addInspector({id:a,label:"Routes"+(r?" "+r:""),icon:"book",treeFilterPlaceholder:"Search routes"});function l(){if(!c)return;const u=c;let h=n.getRoutes().filter(d=>!d.parent||!d.parent.record.components);h.forEach(fv),u.filter&&(h=h.filter(d=>Th(d,u.filter.toLowerCase()))),h.forEach(d=>dv(d,e.currentRoute.value)),u.rootNodes=h.map(hv)}let c;s.on.getInspectorTree(u=>{c=u,u.app===t&&u.inspectorId===a&&l()}),s.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===a){const d=n.getRoutes().find(p=>p.record.__vd_id===u.nodeId);d&&(u.state={options:K0(d)})}}),s.sendInspectorTree(a),s.sendInspectorState(a)})}function H0(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function K0(t){const{record:e}=t,n=[{editable:!1,key:"path",value:e.path}];return e.name!=null&&n.push({editable:!1,key:"name",value:e.name}),n.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(r=>`${r.name}${H0(r)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),e.redirect!=null&&n.push({editable:!1,key:"redirect",value:e.redirect}),t.alias.length&&n.push({editable:!1,key:"aliases",value:t.alias.map(r=>r.record.path)}),Object.keys(t.record.meta).length&&n.push({editable:!1,key:"meta",value:t.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(r=>r.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),n}const av=15485081,lv=2450411,cv=8702998,z0=2282478,uv=16486972,G0=6710886;function hv(t){const e=[],{record:n}=t;n.name!=null&&e.push({label:String(n.name),textColor:0,backgroundColor:z0}),n.aliasOf&&e.push({label:"alias",textColor:0,backgroundColor:uv}),t.__vd_match&&e.push({label:"matches",textColor:0,backgroundColor:av}),t.__vd_exactActive&&e.push({label:"exact",textColor:0,backgroundColor:cv}),t.__vd_active&&e.push({label:"active",textColor:0,backgroundColor:lv}),n.redirect&&e.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:G0});let r=n.__vd_id;return r==null&&(r=String(Q0++),n.__vd_id=r),{id:r,label:n.path,tags:e,children:t.children.map(hv)}}let Q0=0;const Y0=/^\/(.*)\/([a-z]*)$/;function dv(t,e){const n=e.matched.length&&Ar(e.matched[e.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=n,n||(t.__vd_active=e.matched.some(r=>Ar(r,t.record))),t.children.forEach(r=>dv(r,e))}function fv(t){t.__vd_match=!1,t.children.forEach(fv)}function Th(t,e){const n=String(t.re).match(Y0);if(t.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(e))return t.children.forEach(o=>Th(o,e)),t.record.path!=="/"||e==="/"?(t.__vd_match=t.re.test(e),!0):!1;const s=t.record.path.toLowerCase(),i=Ao(s);return!e.startsWith("/")&&(i.includes(e)||s.includes(e))||i.startsWith(e)||s.startsWith(e)||t.record.name&&String(t.record.name).includes(e)?!0:t.children.some(o=>Th(o,e))}function X0(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function J0(t){const e=h0(t.routes,t),n=t.parseQuery||N0,r=t.stringifyQuery||bm,s=t.history;if(!s)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const i=Ni(),o=Ni(),a=Ni(),l=lR(rr);let c=rr;$n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_u.bind(null,y=>""+y),h=_u.bind(null,k0),d=_u.bind(null,Ao);function p(y,V){let F,B;return Jy(y)?(F=e.getRecordMatcher(y),B=V):B=y,e.addRoute(B,F)}function g(y){const V=e.getRecordMatcher(y);V?e.removeRoute(V):de(`Cannot remove non-existent route "${String(y)}"`)}function E(){return e.getRoutes().map(y=>y.record)}function v(y){return!!e.getRecordMatcher(y)}function A(y,V){if(V=ye({},V||l.value),typeof y=="string"){const m=yu(n,y,V.path),_=e.resolve({path:m.path},V),T=s.createHref(m.fullPath);return T.startsWith("//")?de(`Location "${y}" resolved to "${T}". A resolved location cannot start with multiple slashes.`):_.matched.length||de(`No match found for location with path "${y}"`),ye(m,_,{params:d(_.params),hash:Ao(m.hash),redirectedFrom:void 0,href:T})}let F;if("path"in y)"params"in y&&!("name"in y)&&Object.keys(y.params).length&&de(`Path "${y.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),F=ye({},y,{path:yu(n,y.path,V.path).path});else{const m=ye({},y.params);for(const _ in m)m[_]==null&&delete m[_];F=ye({},y,{params:h(m)}),V.params=h(V.params)}const B=e.resolve(F,V),ce=y.hash||"";ce&&!ce.startsWith("#")&&de(`A \`hash\` should always start with the character "#". Replace "${ce}" with "#${ce}".`),B.params=u(d(B.params));const Ne=FC(r,ye({},y,{hash:C0(ce),path:B.path})),f=s.createHref(Ne);return f.startsWith("//")?de(`Location "${y}" resolved to "${f}". A resolved location cannot start with multiple slashes.`):B.matched.length||de(`No match found for location with path "${"path"in y?y.path:y}"`),ye({fullPath:Ne,hash:ce,query:r===bm?O0(y.query):y.query||{}},B,{redirectedFrom:void 0,href:f})}function O(y){return typeof y=="string"?yu(n,y,l.value.path):ye({},y)}function k(y,V){if(c!==y)return ni(8,{from:V,to:y})}function K(y){return Me(y)}function $(y){return K(ye(O(y),{replace:!0}))}function me(y){const V=y.matched[y.matched.length-1];if(V&&V.redirect){const{redirect:F}=V;let B=typeof F=="function"?F(y):F;if(typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),!("path"in B)&&!("name"in B))throw de(`Invalid redirect found:
${JSON.stringify(B,null,2)}
 when navigating to "${y.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return ye({query:y.query,hash:y.hash,params:"path"in B?{}:y.params},B)}}function Me(y,V){const F=c=A(y),B=l.value,ce=y.state,Ne=y.force,f=y.replace===!0,m=me(F);if(m)return Me(ye(O(m),{state:typeof m=="object"?ye({},ce,m.state):ce,force:Ne,replace:f}),V||F);const _=F;_.redirectedFrom=V;let T;return!Ne&&pm(r,B,F)&&(T=ni(16,{to:_,from:B}),Zn(B,B,!0,!1)),(T?Promise.resolve(T):tt(_,B)).catch(w=>Vn(w)?Vn(w,2)?w:Vr(w):se(w,_,B)).then(w=>{if(w){if(Vn(w,2))return pm(r,A(w.to),_)&&V&&(V._count=V._count?V._count+1:1)>30?(de(`Detected a possibly infinite redirection in a navigation guard when going from "${B.fullPath}" to "${_.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Me(ye({replace:f},O(w.to),{state:typeof w.to=="object"?ye({},ce,w.to.state):ce,force:Ne}),V||_)}else w=Ct(_,B,!0,f,ce);return Gt(_,B,w),w})}function et(y,V){const F=k(y,V);return F?Promise.reject(F):Promise.resolve()}function Be(y){const V=er.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(y):y()}function tt(y,V){let F;const[B,ce,Ne]=Z0(y,V);F=vu(B.reverse(),"beforeRouteLeave",y,V);for(const m of B)m.leaveGuards.forEach(_=>{F.push(ar(_,y,V))});const f=et.bind(null,y,V);return F.push(f),tr(F).then(()=>{F=[];for(const m of i.list())F.push(ar(m,y,V));return F.push(f),tr(F)}).then(()=>{F=vu(ce,"beforeRouteUpdate",y,V);for(const m of ce)m.updateGuards.forEach(_=>{F.push(ar(_,y,V))});return F.push(f),tr(F)}).then(()=>{F=[];for(const m of Ne)if(m.beforeEnter)if(Vt(m.beforeEnter))for(const _ of m.beforeEnter)F.push(ar(_,y,V));else F.push(ar(m.beforeEnter,y,V));return F.push(f),tr(F)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),F=vu(Ne,"beforeRouteEnter",y,V),F.push(f),tr(F))).then(()=>{F=[];for(const m of o.list())F.push(ar(m,y,V));return F.push(f),tr(F)}).catch(m=>Vn(m,8)?m:Promise.reject(m))}function Gt(y,V,F){a.list().forEach(B=>Be(()=>B(y,V,F)))}function Ct(y,V,F,B,ce){const Ne=k(y,V);if(Ne)return Ne;const f=V===rr,m=$n?history.state:{};F&&(B||f?s.replace(y.fullPath,ye({scroll:f&&m&&m.scroll},ce)):s.push(y.fullPath,ce)),l.value=y,Zn(y,V,F,f),Vr()}let fn;function Ra(){fn||(fn=s.listen((y,V,F)=>{if(!Aa.listening)return;const B=A(y),ce=me(B);if(ce){Me(ye(ce,{replace:!0}),B).catch(ro);return}c=B;const Ne=l.value;$n&&KC(gm(Ne.fullPath,F.delta),wc()),tt(B,Ne).catch(f=>Vn(f,12)?f:Vn(f,2)?(Me(f.to,B).then(m=>{Vn(m,20)&&!F.delta&&F.type===Ro.pop&&s.go(-1,!1)}).catch(ro),Promise.reject()):(F.delta&&s.go(-F.delta,!1),se(f,B,Ne))).then(f=>{f=f||Ct(B,Ne,!1),f&&(F.delta&&!Vn(f,8)?s.go(-F.delta,!1):F.type===Ro.pop&&Vn(f,20)&&s.go(-1,!1)),Gt(B,Ne,f)}).catch(ro)}))}let Ut=Ni(),nt=Ni(),re;function se(y,V,F){Vr(y);const B=nt.list();return B.length?B.forEach(ce=>ce(y,V,F)):(de("uncaught error during route navigation:"),console.error(y)),Promise.reject(y)}function $t(){return re&&l.value!==rr?Promise.resolve():new Promise((y,V)=>{Ut.add([y,V])})}function Vr(y){return re||(re=!y,Ra(),Ut.list().forEach(([V,F])=>y?F(y):V()),Ut.reset()),y}function Zn(y,V,F,B){const{scrollBehavior:ce}=t;if(!$n||!ce)return Promise.resolve();const Ne=!F&&zC(gm(y.fullPath,0))||(B||!F)&&history.state&&history.state.scroll||null;return gy().then(()=>ce(y,V,Ne)).then(f=>f&&HC(f)).catch(f=>se(f,y,V))}const pn=y=>s.go(y);let Bt;const er=new Set,Aa={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:v,getRoutes:E,resolve:A,options:t,push:K,replace:$,go:pn,back:()=>pn(-1),forward:()=>pn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:$t,install(y){const V=this;y.component("RouterLink",V0),y.component("RouterView",B0),y.config.globalProperties.$router=V,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ks(l)}),$n&&!Bt&&l.value===rr&&(Bt=!0,K(s.location).catch(ce=>{de("Unexpected error when starting the router:",ce)}));const F={};for(const ce in rr)Object.defineProperty(F,ce,{get:()=>l.value[ce],enumerable:!0});y.provide(Hd,V),y.provide(ov,oy(F)),y.provide(wh,l);const B=y.unmount;er.add(y),y.unmount=function(){er.delete(y),er.size<1&&(c=rr,fn&&fn(),fn=null,l.value=rr,Bt=!1,re=!1),B()},$n&&q0(y,V,e)}};function tr(y){return y.reduce((V,F)=>V.then(()=>Be(F)),Promise.resolve())}return Aa}function Z0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ar(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ar(c,l))||s.push(l))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw mi(e)},mi=function(t){return new Error("Firebase Database ("+pv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new tS;const d=i<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gv=function(t){const e=mv(t);return Tc.encodeByteArray(e,!0)},Rl=function(t){return gv(t).replace(/\./g,"")},Al=function(t){try{return Tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){return _v(void 0,t)}function _v(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rS(n)||(t[n]=_v(t[n],e[n]));return t}function rS(t){return t!=="__proto__"}/**
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
 */function sS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iS=()=>sS().__FIREBASE_DEFAULTS__,oS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Al(t[1]);return e&&JSON.parse(e)},Ic=()=>{try{return iS()||oS()||aS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yv=t=>{var e,n;return(n=(e=Ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vv=t=>{const e=yv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ev=()=>{var t;return(t=Ic())===null||t===void 0?void 0:t.config},wv=t=>{var e;return(e=Ic())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Tv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function lS(){var t;const e=(t=Ic())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uS(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bv(){return pv.NODE_ADMIN===!0}function Rv(){try{return typeof indexedDB=="object"}catch{return!1}}function hS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dS,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function fS(t,e){return t.replace(pS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Av=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=So(Al(i[0])||""),n=So(Al(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},mS=function(t){const e=Av(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},gS=function(t){const e=Av(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(km(i)&&km(o)){if(!Sl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function yS(t,e){const n=new vS(t,e);return n.subscribe.bind(n)}class vS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ES(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Eu),s.error===void 0&&(s.error=Eu),s.complete===void 0&&(s.complete=Eu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ES(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eu(){}function wS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,M(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Br="[DEFAULT]";/**
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
 */class IS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Co;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RS(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bS(t){return t===Br?void 0:t}function RS(t){return t.instantiationMode==="EAGER"}/**
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
 */class AS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const CS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},SS=ae.INFO,PS={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},kS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=PS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zo{constructor(e){this.name=e,this._logLevel=SS,this._logHandler=kS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const NS=(t,e)=>e.some(n=>t instanceof n);let Nm,Om;function OS(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DS(){return Om||(Om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cv=new WeakMap,bh=new WeakMap,Sv=new WeakMap,wu=new WeakMap,zd=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cv.set(n,t)}).catch(()=>{}),zd.set(e,t),e}function MS(t){if(bh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bh.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LS(t){Rh=t(Rh)}function VS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tu(this),e,...n);return Sv.set(r,e.sort?e.sort():[e]),_r(r)}:DS().includes(t)?function(...e){return t.apply(Tu(this),e),_r(Cv.get(this))}:function(...e){return _r(t.apply(Tu(this),e))}}function FS(t){return typeof t=="function"?VS(t):(t instanceof IDBTransaction&&MS(t),NS(t,OS())?new Proxy(t,Rh):t)}function _r(t){if(t instanceof IDBRequest)return xS(t);if(wu.has(t))return wu.get(t);const e=FS(t);return e!==t&&(wu.set(t,e),zd.set(e,t)),e}const Tu=t=>zd.get(t);function US(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $S=["get","getKey","getAll","getAllKeys","count"],BS=["put","add","delete","clear"],Iu=new Map;function Dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Iu.get(e))return Iu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=BS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$S.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Iu.set(e,i),i}LS(t=>({...t,get:(e,n,r)=>Dm(e,n)||t.get(e,n,r),has:(e,n)=>!!Dm(e,n)||t.has(e,n)}));/**
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
 */class jS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ah="@firebase/app",xm="0.9.19";/**
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
 */const cs=new Zo("@firebase/app"),qS="@firebase/app-compat",HS="@firebase/analytics-compat",KS="@firebase/analytics",zS="@firebase/app-check-compat",GS="@firebase/app-check",QS="@firebase/auth",YS="@firebase/auth-compat",XS="@firebase/database",JS="@firebase/database-compat",ZS="@firebase/functions",eP="@firebase/functions-compat",tP="@firebase/installations",nP="@firebase/installations-compat",rP="@firebase/messaging",sP="@firebase/messaging-compat",iP="@firebase/performance",oP="@firebase/performance-compat",aP="@firebase/remote-config",lP="@firebase/remote-config-compat",cP="@firebase/storage",uP="@firebase/storage-compat",hP="@firebase/firestore",dP="@firebase/firestore-compat",fP="firebase",pP="10.4.0";/**
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
 */const Ch="[DEFAULT]",mP={[Ah]:"fire-core",[qS]:"fire-core-compat",[KS]:"fire-analytics",[HS]:"fire-analytics-compat",[GS]:"fire-app-check",[zS]:"fire-app-check-compat",[QS]:"fire-auth",[YS]:"fire-auth-compat",[XS]:"fire-rtdb",[JS]:"fire-rtdb-compat",[ZS]:"fire-fn",[eP]:"fire-fn-compat",[tP]:"fire-iid",[nP]:"fire-iid-compat",[rP]:"fire-fcm",[sP]:"fire-fcm-compat",[iP]:"fire-perf",[oP]:"fire-perf-compat",[aP]:"fire-rc",[lP]:"fire-rc-compat",[cP]:"fire-gcs",[uP]:"fire-gcs-compat",[hP]:"fire-fst",[dP]:"fire-fst-compat","fire-js":"fire-js",[fP]:"fire-js-all"};/**
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
 */const Pl=new Map,Sh=new Map;function gP(t,e){try{t.container.addComponent(e)}catch(n){cs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Sh.has(e))return cs.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,t);for(const n of Pl.values())gP(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const _P={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yr=new gi("app","Firebase",_P);/**
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
 */class yP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=pP;function Pv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ch,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=Ev()),!n)throw yr.create("no-options");const i=Pl.get(s);if(i){if(Sl(n,i.options)&&Sl(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new AS(s);for(const l of Sh.values())o.addComponent(l);const a=new yP(n,r,o);return Pl.set(s,a),a}function Ac(t=Ch){const e=Pl.get(t);if(!e&&t===Ch&&Ev())return Pv();if(!e)throw yr.create("no-app",{appName:t});return e}function xt(t,e,n){var r;let s=(r=mP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cs.warn(a.join(" "));return}xn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vP="firebase-heartbeat-database",EP=1,Po="firebase-heartbeat-store";let bu=null;function kv(){return bu||(bu=US(vP,EP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Po)}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),bu}async function wP(t){try{return await(await kv()).transaction(Po).objectStore(Po).get(Nv(t))}catch(e){if(e instanceof Ln)cs.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cs.warn(n.message)}}}async function Mm(t,e){try{const r=(await kv()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,Nv(t)),await r.done}catch(n){if(n instanceof Ln)cs.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cs.warn(r.message)}}}function Nv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TP=1024,IP=30*24*60*60*1e3;class bP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=IP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lm(),{heartbeatsToSend:n,unsentEntries:r}=RP(this._heartbeatsCache.heartbeats),s=Rl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lm(){return new Date().toISOString().substring(0,10)}function RP(t,e=TP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rv()?hS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vm(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CP(t){xn(new ln("platform-logger",e=>new jS(e),"PRIVATE")),xn(new ln("heartbeat",e=>new bP(e),"PRIVATE")),xt(Ah,xm,t),xt(Ah,xm,"esm2017"),xt("fire-js","")}CP("");function Gd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fm(t){return t!==void 0&&t.enterprise!==void 0}class SP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PP=Ov,Dv=new gi("auth","Firebase",Ov());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Zo("@firebase/auth");function kP(t,...e){kl.logLevel<=ae.WARN&&kl.warn(`Auth (${Or}): ${t}`,...e)}function rl(t,...e){kl.logLevel<=ae.ERROR&&kl.error(`Auth (${Or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Qd(t,...e)}function Cn(t,...e){return Qd(t,...e)}function NP(t,e,n){const r=Object.assign(Object.assign({},PP()),{[e]:n});return new gi("auth","Firebase",r).create(e,{appName:t.name})}function Qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dv.create(t,...e)}function Y(t,e,...n){if(!t)throw Qd(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function zn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OP(){return Um()==="http:"||Um()==="https:"}function Um(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OP()||cS()||"connection"in navigator)?navigator.onLine:!0}function xP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kd()||Iv()}get(){return DP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new ea(3e4,6e4);function Is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bs(t,e,n,r,s={}){return Mv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=_i(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xv.fetch()(Lv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Mv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MP),e);try{const s=new VP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xa(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw NP(t,u,c);cn(t,u)}}catch(s){if(s instanceof Ln)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function ta(t,e,n,r,s={}){const i=await bs(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Yd(t.config,s):`${t.config.apiScheme}://${s}`}class VP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cn(this.auth,"network-request-failed")),LP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Cn(t,e,r);return s.customData._tokenResponse=n,s}async function FP(t,e){return bs(t,"GET","/v2/recaptchaConfig",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){return bs(t,"POST","/v1/accounts:delete",e)}async function $P(t,e){return bs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BP(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=Xd(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:io(Ru(s.auth_time)),issuedAtTime:io(Ru(s.iat)),expirationTime:io(Ru(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ru(t){return Number(t)*1e3}function Xd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Al(n);return s?JSON.parse(s):(rl("Failed to decode base64 JWT payload"),null)}catch(s){return rl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jP(t){const e=Xd(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&WP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ko(t,$P(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zP(i.providerUserInfo):[],a=KP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function HP(t){const e=$e(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zP(t){return t.map(e=>{var{providerId:n}=e,r=Gd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){const n=await Mv(t,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Lv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await GP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new No;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BP(this,e)}reload(){return HP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ko(this,UP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:K,isAnonymous:$,providerData:me,stsTokenManager:Me}=n;Y(k&&Me,e,"internal-error");const et=No.fromJSON(this.name,Me);Y(typeof k=="string",e,"internal-error"),sr(h,e.name),sr(d,e.name),Y(typeof K=="boolean",e,"internal-error"),Y(typeof $=="boolean",e,"internal-error"),sr(p,e.name),sr(g,e.name),sr(E,e.name),sr(v,e.name),sr(A,e.name),sr(O,e.name);const Be=new rs({uid:k,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:$,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:et,createdAt:A,lastLoginAt:O});return me&&Array.isArray(me)&&(Be.providerData=me.map(tt=>Object.assign({},tt))),v&&(Be._redirectEventId=v),Be}static async _fromIdTokenResponse(e,n,r=!1){const s=new No;s.updateFromServerResponse(n);const i=new rs({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nl(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new Map;function jn(t){zn(t instanceof Function,"Expected a class definition");let e=$m.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$m.set(t,e),e)}/**
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
 */class Fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fv.type="NONE";const Bm=Fv;/**
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
 */function sl(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sl(this.userKey,s.apiKey,i),this.fullPersistenceKey=sl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gs(jn(Bm),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||jn(Bm);const o=sl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=rs._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Gs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wv(e))return"Blackberry";if(qv(e))return"Webos";if(Jd(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(jv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uv(t=vt()){return/firefox\//i.test(t)}function Jd(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=vt()){return/crios\//i.test(t)}function Bv(t=vt()){return/iemobile/i.test(t)}function jv(t=vt()){return/android/i.test(t)}function Wv(t=vt()){return/blackberry/i.test(t)}function qv(t=vt()){return/webos/i.test(t)}function Cc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QP(t=vt()){var e;return Cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YP(){return uS()&&document.documentMode===10}function Hv(t=vt()){return Cc(t)||jv(t)||qv(t)||Wv(t)||/windows phone/i.test(t)||Bv(t)}function XP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e=[]){let n;switch(t){case"Browser":n=jm(vt());break;case"Worker":n=`${jm(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class JP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZP(t,e={}){return bs(t,"GET","/v2/passwordPolicy",Is(t,e))}/**
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
 */const ek=6;class tk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ek,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wm(this),this.idTokenSubscription=new Wm(this),this.beforeStateQueue=new JP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZP(this),n=new tk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rs(t){return $e(t)}class Wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=yS(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rk().appendChild(r)})}function sk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ik="https://www.google.com/recaptcha/enterprise.js?render=",ok="recaptcha-enterprise",ak="NO_RECAPTCHA";class lk{constructor(e){this.type=ok,this.auth=Rs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{FP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new SP(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Fm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(ak)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Fm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}zv(ik+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ol(t,e,n,r=!1){const s=new lk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sl(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function uk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hk(t,e,n){const r=Rs(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Gv(e),{host:o,port:a}=dk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fk()}function Gv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dk(t){const e=Gv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qm(o)}}}function qm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function pk(t,e){return bs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t,e){return ta(t,"POST","/v1/accounts:signInWithPassword",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e){return ta(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}async function gk(t,e){return ta(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Zd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ol(e,r,"signInWithPassword");return Au(e,s)}else return Au(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ol(e,r,"signInWithPassword");return Au(e,i)}else return Promise.reject(s)});case"emailLink":return mk(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gk(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t,e){return ta(t,"POST","/v1/accounts:signInWithIdp",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="http://localhost";class us extends Zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:_k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vk(t){const e=Hi(Ki(t)).link,n=e?Hi(Ki(e)).deep_link_id:null,r=Hi(Ki(t)).deep_link_id;return(r?Hi(Ki(r)).link:null)||r||n||e||t}class ef{constructor(e){var n,r,s,i,o,a;const l=Hi(Ki(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=yk((s=l.mode)!==null&&s!==void 0?s:null);Y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vk(e);try{return new ef(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ef.parseLink(n);return Y(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class na extends Qv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends na{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends na{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends na{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(t,e){return ta(t,"POST","/v1/accounts:signUp",Is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rs._fromIdTokenResponse(e,r,s),o=Hm(r);return new hs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Hm(r);return new hs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Dl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Dl(e,n,r,s)}}function Yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Dl._fromErrorAndOperation(t,i,e,r):i})}async function Ek(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hs._forOperation(t,"link",r)}/**
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
 */async function wk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await ko(t,Yv(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Xd(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),hs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(t,e,n=!1){const r="signIn",s=await Yv(t,r,e),i=await hs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Tk(t,e){return Xv(Rs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t){const e=Rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ik(t,e,n){var r;const s=Rs(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const c=await Ol(s,i,"signUpPassword");o=Cu(s,c)}else o=Cu(s,i).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ol(s,i,"signUpPassword");return Cu(s,u)}throw c});const a=await o.catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Jv(t),c}),l=await hs._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function bk(t,e,n){return Tk($e(t),yi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jv(t),r})}function Zv(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function Rk(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const xl="__sak";/**
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
 */class eE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(){const t=vt();return Jd(t)||Cc(t)}const Ck=1e3,Sk=10;class tE extends eE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ak()&&XP(),this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tE.type="LOCAL";const Pk=tE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE extends eE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nE.type="SESSION";const rE=nE;/**
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
 */function kk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await kk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Nk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=tf("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function Ok(t){Sn().location.href=t}/**
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
 */function sE(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function Dk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mk(){return sE()?self:null}/**
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
 */const iE="firebaseLocalStorageDb",Lk=1,Ml="firebaseLocalStorage",oE="fbase_key";class ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([Ml],e?"readwrite":"readonly").objectStore(Ml)}function Vk(){const t=indexedDB.deleteDatabase(iE);return new ra(t).toPromise()}function kh(){const t=indexedDB.open(iE,Lk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ml,{keyPath:oE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ml)?e(r):(r.close(),await Vk(),e(await kh()))})})}async function Km(t,e,n){const r=Pc(t,!0).put({[oE]:e,value:n});return new ra(r).toPromise()}async function Fk(t,e){const n=Pc(t,!1).get(e),r=await new ra(n).toPromise();return r===void 0?null:r.value}function zm(t,e){const n=Pc(t,!0).delete(e);return new ra(n).toPromise()}const Uk=800,$k=3;class aE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$k)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(Mk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Dk(),!this.activeServiceWorker)return;this.sender=new Nk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await Km(e,xl,"1"),await zm(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Km(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pc(s,!1).getAll();return new ra(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aE.type="LOCAL";const Bk=aE;new ea(3e4,6e4);/**
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
 */function jk(t,e){return e?jn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nf extends Zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wk(t){return Xv(t.auth,new nf(t),t.bypassAuthState)}function qk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),wk(n,new nf(t),t.bypassAuthState)}async function Hk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Ek(n,new nf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wk;case"linkViaPopup":case"linkViaRedirect":return Hk;case"reauthViaPopup":case"reauthViaRedirect":return qk;default:cn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new ea(2e3,1e4);class Bs extends lE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kk.get())};e()}}Bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="pendingRedirect",il=new Map;class Gk extends lE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const r=await Qk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qk(t,e){const n=Jk(e),r=Xk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Yk(t,e){il.set(t._key(),e)}function Xk(t){return jn(t._redirectPersistence)}function Jk(t){return sl(zk,t.config.apiKey,t.name)}async function Zk(t,e,n=!1){const r=Rs(t),s=jk(r,e),o=await new Gk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=10*60*1e3;class tN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gm(e))}saveEventToCache(e){this.cachedEventUids.add(Gm(e)),this.lastProcessedEventTime=Date.now()}}function Gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e={}){return bs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iN=/^https?/;async function oN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rN(t);for(const n of e)try{if(aN(n))return}catch{}cn(t,"unauthorized-domain")}function aN(t){const e=Ph(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iN.test(n))return!1;if(sN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lN=new ea(3e4,6e4);function Qm(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cN(t){return new Promise((e,n)=>{var r,s,i;function o(){Qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qm(),n(Cn(t,"network-request-failed"))},timeout:lN.get()})}if(!((s=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Sn().gapi)===null||i===void 0)&&i.load)o();else{const a=sk("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(Cn(t,"network-request-failed"))},zv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ol=null,e})}let ol=null;function uN(t){return ol=ol||cN(t),ol}/**
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
 */const hN=new ea(5e3,15e3),dN="__/auth/iframe",fN="emulator/auth/iframe",pN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gN(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yd(e,fN):`https://${t.config.authDomain}/${dN}`,r={apiKey:e.apiKey,appName:t.name,v:Or},s=mN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_i(r).slice(1)}`}async function _N(t){const e=await uN(t),n=Sn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:gN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Cn(t,"network-request-failed"),a=Sn().setTimeout(()=>{i(o)},hN.get());function l(){Sn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const yN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vN=500,EN=600,wN="_blank",TN="http://localhost";class Ym{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IN(t,e,n,r=vN,s=EN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=vt().toLowerCase();n&&(a=$v(c)?wN:n),Uv(c)&&(e=e||TN,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(QP(c)&&a!=="_self")return bN(e||"",a),new Ym(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new Ym(h)}function bN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const RN="__/auth/handler",AN="emulator/auth/handler",CN=encodeURIComponent("fac");async function Xm(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:s};if(e instanceof Qv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof na){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${CN}=${encodeURIComponent(l)}`:"";return`${SN(t)}?${_i(a).slice(1)}${c}`}function SN({config:t}){return t.emulator?Yd(t,AN):`https://${t.authDomain}/${RN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="webStorageSupport";class PN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rE,this._completeRedirectFn=Zk,this._overrideRedirectResult=Yk}async _openPopup(e,n,r,s){var i;zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xm(e,n,r,Ph(),s);return IN(e,o,tf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Xm(e,n,r,Ph(),s);return Ok(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _N(e),r=new tN(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Su,{type:Su},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Su];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hv()||Jd()||Cc()}}const kN=PN;var Jm="@firebase/auth",Zm="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DN(t){xn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(t)},c=new nk(r,s,i,l);return uk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new ln("auth-internal",e=>{const n=Rs(e.getProvider("auth").getImmediate());return(r=>new NN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Jm,Zm,ON(t)),xt(Jm,Zm,"esm2017")}/**
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
 */const xN=5*60,MN=wv("authIdTokenMaxAge")||xN;let eg=null;const LN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MN)return;const s=n==null?void 0:n.token;eg!==s&&(eg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uE(t=Ac()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ck(t,{popupRedirectResolver:kN,persistence:[Bk,Pk,rE]}),r=wv("authTokenSyncURL");if(r){const i=LN(r);Rk(n,i,()=>i(n.currentUser)),Zv(n,o=>i(o))}const s=yv("auth");return s&&hk(n,`http://${s}`),n}DN("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new Map,FN={activated:!1,tokenObservers:[]};function un(t){return VN.get(t)||Object.assign({},FN)}const tg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Co,await $N(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Co,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function $N(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ll=new gi("appCheck","AppCheck",BN);function hE(t){if(!un(t).activated)throw Ll.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="firebase-app-check-database",WN=1,Nh="firebase-app-check-store";let Ma=null;function qN(){return Ma||(Ma=new Promise((t,e)=>{try{const n=indexedDB.open(jN,WN);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Ll.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Nh,{keyPath:"compositeKey"})}}}catch(n){e(Ll.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ma)}function HN(t,e){return KN(zN(t),e)}async function KN(t,e){const r=(await qN()).transaction(Nh,"readwrite"),i=r.objectStore(Nh).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Ll.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function zN(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Zo("@firebase/app-check");function ng(t,e){return Rv()?HN(t,e).catch(n=>{Oh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN={error:"UNKNOWN_ERROR"};function QN(t){return Tc.encodeString(JSON.stringify(t),!1)}async function Dh(t,e=!1){const n=t.app;hE(n);const r=un(n);let s=r.token,i;if(s&&!zi(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(zi(l)?s=l:await ng(n,void 0))}if(!e&&s&&zi(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await un(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Oh.warn(l.message):Oh.error(l),i=l}let a;return s?i?zi(s)?a={token:s.token,internalError:i}:a=sg(i):(a={token:s.token},r.token=s,await ng(n,s)):a=sg(i),o&&ZN(n,a),a}async function YN(t){const e=t.app;hE(e);const{provider:n}=un(e);{const{token:r}=await n.getToken();return{token:r}}}function XN(t,e,n,r){const{app:s}=t,i=un(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&zi(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),rg(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>rg(t))}function dE(t,e){const n=un(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function rg(t){const{app:e}=t,n=un(e);let r=n.tokenRefresher;r||(r=JN(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function JN(t){const{app:e}=t;return new UN(async()=>{const n=un(e);let r;if(n.token?r=await Dh(t,!0):r=await Dh(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=un(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},tg.RETRIAL_MIN_WAIT,tg.RETRIAL_MAX_WAIT)}function ZN(t,e){const n=un(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function zi(t){return t.expireTimeMillis-Date.now()>0}function sg(t){return{token:QN(GN),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=un(this.app);for(const n of e)dE(this.app,n.next);return Promise.resolve()}}function tO(t,e){return new eO(t,e)}function nO(t){return{getToken:e=>Dh(t,e),getLimitedUseToken:()=>YN(t),addTokenListener:e=>XN(t,"INTERNAL",e),removeTokenListener:e=>dE(t.app,e)}}const rO="@firebase/app-check",sO="0.8.0",iO="app-check",ig="app-check-internal";function oO(){xn(new ln(iO,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return tO(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(ig).initialize()})),xn(new ln(ig,t=>{const e=t.getProvider("app-check").getImmediate();return nO(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),xt(rO,sO)}oO();var aO="firebase",lO="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(aO,lO,"app");const fE=Symbol("firebaseApp");function cO(t){return Bd()&&An(fE,null)||Ac(t)}const La=new WeakMap;function uO(t,e){if(!La.has(t)){const n=Ob(!0);La.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),La.delete(t)}}return La.get(t)}const hO=new WeakMap,Va=new WeakMap;function dO(t){const e=cO(t);if(!Va.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Va.set(e,i),n(i.value)}];Va.set(e,s)}return Va.get(e)}function fO(t,e){const n=uE(e);Zv(n,r=>{const s=dO();t.value=r,Array.isArray(s)&&s[1](t)})}const og="@firebase/database",ag="1.0.1";/**
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
 */let pE="";function pO(t){pE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:So(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mO(e)}}catch{}return new gO},Kr=mE("localStorage"),xh=mE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Zo("@firebase/database"),_O=function(){let t=1;return function(){return t++}}(),gE=function(t){const e=TS(t),n=new _S;n.update(e);const r=n.digest();return Tc.encodeByteArray(r)},sa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=sa.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let ss=null,lg=!0;const yO=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ys.logLevel=ae.VERBOSE,ss=Ys.log.bind(Ys),e&&xh.set("logging_enabled",!0)):typeof t=="function"?ss=t:(ss=null,xh.remove("logging_enabled"))},ct=function(...t){if(lg===!0&&(lg=!1,ss===null&&xh.get("logging_enabled")===!0&&yO(!0)),ss){const e=sa.apply(null,t);ss(e)}},ia=function(t){return function(...e){ct(t,...e)}},Mh=function(...t){const e="FIREBASE INTERNAL ERROR: "+sa(...t);Ys.error(e)},ds=function(...t){const e=`FIREBASE FATAL ERROR: ${sa(...t)}`;throw Ys.error(e),new Error(e)},Mt=function(...t){const e="FIREBASE WARNING: "+sa(...t);Ys.warn(e)},vO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_E=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EO=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},si="[MIN_NAME]",fs="[MAX_NAME]",vi=function(t,e){if(t===e)return 0;if(t===si||e===fs)return-1;if(e===si||t===fs)return 1;{const n=cg(t),r=cg(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},wO=function(t,e){return t===e?0:t<e?-1:1},Di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},rf=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=rf(t[e[r]]);return n+="}",n},yE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vE=function(t){M(!_E(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},TO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},bO=new RegExp("^-?(0*)\\d{1,10}$"),RO=-2147483648,AO=2147483647,cg=function(t){if(bO.test(t)){const e=Number(t);if(e>=RO&&e<=AO)return e}return null},oa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},CO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class SO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Mt(e)}}class Lh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Lh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="5",EE="v",wE="s",TE="r",IE="f",bE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,RE="ls",AE="p",Vh="ac",CE="websocket",SE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function PE(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let r;if(e===CE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===SE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NO(t)&&(n.ns=t.namespace);const s=[];return zt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.counters_={}}incrementCounter(e,n=1){Jn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={},ku={};function of(t){const e=t.toString();return Pu[e]||(Pu[e]=new OO),Pu[e]}function DO(t,e){const n=t.toString();return ku[n]||(ku[n]=e()),ku[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&oa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="start",MO="close",LO="pLPCommand",VO="pRTLPCB",kE="id",NE="pw",OE="ser",FO="cb",UO="seg",$O="ts",BO="d",jO="dframe",DE=1870,xE=30,WO=DE-xE,qO=25e3,HO=3e4;class js{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ia(e),this.stats_=of(n),this.urlFn=l=>(this.appCheckToken&&(l[Vh]=this.appCheckToken),PE(n,SE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new xO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HO)),EO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new af((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ug)this.id=a,this.password=l;else if(o===MO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[ug]="t",r[OE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[FO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[EE]=sf,this.transportSessionId&&(r[wE]=this.transportSessionId),this.lastSessionId&&(r[RE]=this.lastSessionId),this.applicationId&&(r[AE]=this.applicationId),this.appCheckToken&&(r[Vh]=this.appCheckToken),typeof location<"u"&&location.hostname&&bE.test(location.hostname)&&(r[TE]=IE);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){js.forceAllow_=!0}static forceDisallow(){js.forceDisallow_=!0}static isAvailable(){return js.forceAllow_?!0:!js.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TO()&&!IO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gv(n),s=yE(r,WO);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[jO]="t",r[kE]=e,r[NE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class af{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_O(),window[LO+this.uniqueCallbackIdentifier]=e,window[VO+this.uniqueCallbackIdentifier]=n,this.myIFrame=af.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ct("frame writing exception"),a.stack&&ct(a.stack),ct(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ct("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kE]=this.myID,e[NE]=this.myPW,e[OE]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xE+r.length<=DE;){const o=this.pendingSegs.shift();r=r+"&"+UO+s+"="+o.seg+"&"+$O+s+"="+o.ts+"&"+BO+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(qO)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=16384,zO=45e3;let Vl=null;typeof MozWebSocket<"u"?Vl=MozWebSocket:typeof WebSocket<"u"&&(Vl=WebSocket);class en{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ia(this.connId),this.stats_=of(n),this.connURL=en.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[EE]=sf,typeof location<"u"&&location.hostname&&bE.test(location.hostname)&&(o[TE]=IE),n&&(o[wE]=n),r&&(o[RE]=r),s&&(o[Vh]=s),i&&(o[AE]=i),PE(e,CE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kr.set("previous_websocket_failure",!0);try{let r;bv(),this.mySock=new Vl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vl!==null&&!en.forceDisallow_}static previouslyFailed(){return Kr.isInMemoryStorage||Kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=So(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yE(n,KO);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}en.responsesRequiredToBeHealthy=2;en.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[js,en]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=en&&en.isAvailable();let r=n&&!en.previouslyFailed();if(e.webSocketOnly&&(n||Mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[en];else{const s=this.transports_=[];for(const i of Do.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Do.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Do.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=6e4,QO=5e3,YO=10*1024,XO=100*1024,Nu="t",hg="d",JO="s",dg="r",ZO="e",fg="o",pg="a",mg="n",gg="p",eD="h";class tD{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ia("c:"+this.id+":"),this.transportManager_=new Do(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nu in e){const n=e[Nu];n===pg?this.upgradeIfSecondaryHealthy_():n===dg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Di("t",e),r=Di("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Di("t",e),r=Di("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Di(Nu,e);if(hg in e){const r=e[hg];if(n===eD){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===mg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JO?this.onConnectionShutdown_(r):n===dg?this.onReset_(r):n===ZO?Mh("Server Error: "+r):n===fg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sf!==r&&Mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(QO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends LE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fl}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=32,yg=768;class ke{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ie(){return new ke("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cr(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ke(t.pieces_,e)}function VE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function FE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ke(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ke)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ke(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function qt(t,e){const n=fe(t),r=fe(e);if(n===null)return e;if(n===r)return qt(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $E(t,e){if(Cr(t)!==Cr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cr(t)>Cr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class rD{constructor(e,n){this.errorPrefix_=n,this.parts_=FE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bc(this.parts_[r]);BE(this)}}function sD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bc(e),BE(t)}function iD(t){const e=t.parts_.pop();t.byteLength_-=bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function BE(t){if(t.byteLength_>yg)throw new Error(t.errorPrefix_+"has a key path longer than "+yg+" bytes ("+t.byteLength_+").");if(t.parts_.length>_g)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_g+") or object contains a cycle "+jr(t))}function jr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends LE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new lf}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=1e3,oD=60*5*1e3,vg=30*1e3,aD=1.3,lD=3e4,cD="server_kill",Eg=3;class Kn extends ME{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kn.nextPersistentConnectionId_++,this.log_=ia("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xi,this.maxReconnectDelay_=oD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!bv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(it(i)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Co,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Kn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jn(e,"w")){const r=ri(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mh("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lD&&(this.reconnectDelay_=xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Kn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ct("getToken() completed but was canceled"):(ct("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new tD(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Mt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(cD)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Mt(h),l())}}}interrupt(e){ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ih(this.interruptReasons_)&&(this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>rf(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ke(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){ct("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eg&&(this.reconnectDelay_=vg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ct("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pE.replace(/\./g,"-")]=1,Kd()?e["framework.cordova"]=1:Iv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fl.getInstance().currentlyOnline();return Ih(this.interruptReasons_)&&e}}Kn.nextPersistentConnectionId_=0;Kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new pe(si,e),s=new pe(si,n);return this.compare(r,s)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa;class jE extends kc{static get __EMPTY_NODE(){return Fa}static set __EMPTY_NODE(e){Fa=e}compare(e,n){return vi(e.name,n.name)}isDefinedOn(e){throw mi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(fs,Fa)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Fa)}toString(){return".key"}}const Xs=new jE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Nt=class Gi{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Gi.RED,this.left=s??wn.EMPTY_NODE,this.right=i??wn.EMPTY_NODE}copy(e,n,r,s,i){return new Gi(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return wn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return wn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Gi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Gi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Nt.RED=!0;Nt.BLACK=!1;class uD{copy(e,n,r,s,i){return this}insert(e,n,r){return new Nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let wn=class al{constructor(e,n=al.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new al(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Nt.BLACK,null,null))}remove(e){return new al(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ua(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ua(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ua(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ua(this.root_,null,this.comparator_,!0,e)}};wn.EMPTY_NODE=new uD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(t,e){return vi(t.name,e.name)}function cf(t,e){return vi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh;function dD(t){Fh=t}const WE=function(t){return typeof t=="number"?"number:"+vE(t):"string:"+t},qE=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jn(e,".sv"),"Priority must be a string or number.")}else M(t===Fh||t.isEmpty(),"priority of unexpected type.");M(t===Fh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wg;class Qe{constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qE(this.priorityNode_)}static set __childrenNodeConstructor(e){wg=e}static get __childrenNodeConstructor(){return wg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:fe(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=fe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||Cr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+WE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vE(this.value_):e+=this.value_,this.lazyHash_=gE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Qe.VALUE_TYPE_ORDER.indexOf(n),i=Qe.VALUE_TYPE_ORDER.indexOf(r);return M(s>=0,"Unknown leaf type: "+n),M(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HE,KE;function fD(t){HE=t}function pD(t){KE=t}class mD extends kc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?vi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(fs,new Qe("[PRIORITY-POST]",KE))}makePost(e,n){const r=HE(e);return new pe(n,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const pt=new mD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=Math.log(2);class _D{constructor(e){const n=i=>parseInt(Math.log(i)/gD,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ul=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Nt(d,h.node,Nt.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=s(l,p),E=s(p+1,c);return h=t[p],d=n?n(h):h,new Nt(d,h.node,Nt.BLACK,g,E)}},i=function(l){let c=null,u=null,h=t.length;const d=function(g,E){const v=h-g,A=h;h-=g;const O=s(v+1,A),k=t[v],K=n?n(k):k;p(new Nt(K,k.node,E,null,O))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const E=l.nextBitIsOne(),v=Math.pow(2,l.count-(g+1));E?d(v,Nt.BLACK):(d(v,Nt.BLACK),d(v,Nt.RED))}return u},o=new _D(t.length),a=i(o);return new wn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;const xs={};class Wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(xs&&pt,"ChildrenNode.ts has not been loaded"),Ou=Ou||new Wn({".priority":xs},{".priority":pt}),Ou}get(e){const n=ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof wn?n:null}hasIndex(e){return Jn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(pe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ul(r,e.getCompare()):a=xs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Wn(u,c)}addToIndexes(e,n){const r=Cl(this.indexes_,(s,i)=>{const o=ri(this.indexSet_,i);if(M(o,"Missing index implementation for "+i),s===xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ul(a,o.getCompare())}else return xs;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new Wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Cl(this.indexes_,s=>{if(s===xs)return s;{const i=n.get(e.name);return i?s.remove(new pe(e.name,i)):s}});return new Wn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class ve{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qE(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mi||(Mi=new ve(new wn(cf),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mi}updatePriority(e){return this.children_.isEmpty()?this:new ve(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mi:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new pe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Mi:this.priorityNode_;return new ve(s,o,i)}}updateChild(e,n){const r=fe(e);if(r===null)return n;{M(fe(e)!==".priority"||Cr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ae(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(pt,(o,a)=>{n[o]=a.val(e),r++,i&&ve.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+WE(this.getPriority().val())+":"),this.forEachChild(pt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":gE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new pe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===aa?-1:0}withIndex(e){if(e===Xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ve(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(pt),s=n.getIterator(pt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Xs?null:this.indexMap_.get(e.toString())}}ve.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yD extends ve{constructor(){super(new wn(cf),ve.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ve.EMPTY_NODE}isEmpty(){return!1}}const aa=new yD;Object.defineProperties(pe,{MIN:{value:new pe(si,ve.EMPTY_NODE)},MAX:{value:new pe(fs,aa)}});jE.__EMPTY_NODE=ve.EMPTY_NODE;Qe.__childrenNodeConstructor=ve;dD(aa);pD(aa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=!0;function ut(t,e=null){if(t===null)return ve.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Qe(n,ut(e))}if(!(t instanceof Array)&&vD){const n=[];let r=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ut(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return ve.EMPTY_NODE;const i=Ul(n,hD,o=>o.name,cf);if(r){const o=Ul(n,pt.getCompare());return new ve(i,ut(e),new Wn({".priority":o},{".priority":pt}))}else return new ve(i,ut(e),Wn.Default)}else{let n=ve.EMPTY_NODE;return zt(t,(r,s)=>{if(Jn(t,r)&&r.substring(0,1)!=="."){const i=ut(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ut(e))}}fD(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED extends kc{constructor(e){super(),this.indexPath_=e,M(!ue(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?vi(e.name,n.name):i}makePost(e,n){const r=ut(e),s=ve.EMPTY_NODE.updateChild(this.indexPath_,r);return new pe(n,s)}maxPost(){const e=ve.EMPTY_NODE.updateChild(this.indexPath_,aa);return new pe(fs,e)}toString(){return FE(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD extends kc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?vi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const r=ut(e);return new pe(n,r)}toString(){return".value"}}const TD=new wD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){return{type:"value",snapshotNode:t}}function bD(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function RD(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Tg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function AD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:si}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new uf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ig(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pt?n="$priority":t.index_===TD?n="$value":t.index_===Xs?n="$key":(M(t.index_ instanceof ED,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=it(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+it(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=it(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+it(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends ME{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ia("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=$l.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ig(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),ri(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const r=$l.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ig(e._queryParams),r=e._path.toString(),s=new Co;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=So(a.responseText)}catch{Mt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Mt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.rootNode_=ve.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){return{value:null,children:new Map}}function zE(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=fe(e);t.children.has(r)||t.children.set(r,Bl());const s=t.children.get(r);e=Ae(e),zE(s,e,n)}}function Uh(t,e,n){t.value!==null?n(e,t.value):SD(t,(r,s)=>{const i=new ke(e.toString()+"/"+r);Uh(s,i,n)})}function SD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=10*1e3,kD=30*1e3,ND=5*60*1e3;class OD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PD(e);const r=Rg+(kD-Rg)*Math.random();oo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;zt(e,(s,i)=>{i>0&&Jn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*ND))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function GE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function QE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function YE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Tn.ACK_USER_WRITE,this.source=GE()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ke(e));return new jl(Ie(),n,this.revert)}}else return M(fe(this.path)===e,"operationForChild called for unrelated child."),new jl(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Tn.OVERWRITE}operationForChild(e){return ue(this.path)?new ps(this.source,Ie(),this.snap.getImmediateChild(e)):new ps(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Tn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new ke(e));return n.isEmpty()?null:n.value?new ps(this.source,Ie(),n.value):new xo(this.source,Ie(),n)}else return M(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xo(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function DD(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(AD(o.childName,o.snapshotNode))}),Li(t,s,"child_removed",e,r,n),Li(t,s,"child_added",e,r,n),Li(t,s,"child_moved",i,r,n),Li(t,s,"child_changed",e,r,n),Li(t,s,"value",e,r,n),s}function Li(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>MD(t,a,l)),o.forEach(a=>{const l=xD(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function xD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MD(t,e,n){if(e.childName==null||n.childName==null)throw mi("Should only compare child_ events.");const r=new pe(e.childName,e.snapshotNode),s=new pe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e){return{eventCache:t,serverCache:e}}function ao(t,e,n,r){return XE(new hf(e,n,r),t.serverCache)}function JE(t,e,n,r){return XE(t.eventCache,new hf(e,n,r))}function $h(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Du;const LD=()=>(Du||(Du=new wn(wO)),Du);class Re{constructor(e,n=LD()){this.value=e,this.children=n}static fromObject(e){let n=new Re(null);return zt(e,(r,s)=>{n=n.set(new ke(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ie(),value:this.value};if(ue(e))return null;{const r=fe(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ae(e),n);return i!=null?{path:Xe(new ke(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=fe(e),r=this.children.get(n);return r!==null?r.subtree(Ae(e)):new Re(null)}}set(e,n){if(ue(e))return new Re(n,this.children);{const r=fe(e),i=(this.children.get(r)||new Re(null)).set(Ae(e),n),o=this.children.insert(r,i);return new Re(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=fe(e),r=this.children.get(n);if(r){const s=r.remove(Ae(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Re(null):new Re(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const n=fe(e),r=this.children.get(n);return r?r.get(Ae(e)):null}}setTree(e,n){if(ue(e))return n;{const r=fe(e),i=(this.children.get(r)||new Re(null)).setTree(Ae(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Re(this.value,o)}}fold(e){return this.fold_(Ie(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ie(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ue(e))return null;{const i=fe(e),o=this.children.get(i);return o?o.findOnPath_(Ae(e),Xe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ie(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const s=fe(e),i=this.children.get(s);return i?i.foreachOnPath_(Ae(e),Xe(n,s),r):new Re(null)}}foreach(e){this.foreach_(Ie(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Re(null))}}function lo(t,e,n){if(ue(e))return new an(new Re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=qt(s,e);return i=i.updateChild(o,n),new an(t.writeTree_.set(s,i))}else{const s=new Re(n),i=t.writeTree_.setTree(e,s);return new an(i)}}}function Ag(t,e,n){let r=t;return zt(n,(s,i)=>{r=lo(r,Xe(e,s),i)}),r}function Cg(t,e){if(ue(e))return an.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new an(n)}}function Bh(t,e){return As(t,e)!=null}function As(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qt(n.path,e)):null}function Sg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pt,(r,s)=>{e.push(new pe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new pe(r,s.value))}),e}function vr(t,e){if(ue(e))return t;{const n=As(t,e);return n!=null?new an(new Re(n)):new an(t.writeTree_.subtree(e))}}function jh(t){return t.writeTree_.isEmpty()}function ii(t,e){return ZE(Ie(),t.writeTree_,e)}function ZE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(M(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=ZE(Xe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e){return iw(e,t)}function VD(t,e,n,r,s){M(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=lo(t.visibleWrites,e,n)),t.lastWriteId=r}function FD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function UD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$D(a,r.path)?s=!1:nn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return BD(t),!0;if(r.snap)t.visibleWrites=Cg(t.visibleWrites,r.path);else{const a=r.children;zt(a,l=>{t.visibleWrites=Cg(t.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function $D(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(Xe(t.path,n),e))return!0;return!1}function BD(t){t.visibleWrites=tw(t.allWrites,jD,Ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jD(t){return t.visible}function tw(t,e,n){let r=an.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)nn(n,o)?(a=qt(n,o),r=lo(r,a,i.snap)):nn(o,n)&&(a=qt(o,n),r=lo(r,Ie(),i.snap.getChild(a)));else if(i.children){if(nn(n,o))a=qt(n,o),r=Ag(r,a,i.children);else if(nn(o,n))if(a=qt(o,n),ue(a))r=Ag(r,Ie(),i.children);else{const l=ri(i.children,fe(a));if(l){const c=l.getChild(Ae(a));r=lo(r,Ie(),c)}}}else throw mi("WriteRecord should have .snap or .children")}}return r}function nw(t,e,n,r,s){if(!r&&!s){const i=As(t.visibleWrites,e);if(i!=null)return i;{const o=vr(t.visibleWrites,e);if(jh(o))return n;if(n==null&&!Bh(o,Ie()))return null;{const a=n||ve.EMPTY_NODE;return ii(o,a)}}}else{const i=vr(t.visibleWrites,e);if(!s&&jh(i))return n;if(!s&&n==null&&!Bh(i,Ie()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(nn(c.path,e)||nn(e,c.path))},a=tw(t.allWrites,o,e),l=n||ve.EMPTY_NODE;return ii(a,l)}}}function WD(t,e,n){let r=ve.EMPTY_NODE;const s=As(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(pt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=vr(t.visibleWrites,e);return n.forEachChild(pt,(o,a)=>{const l=ii(vr(i,new ke(o)),a);r=r.updateImmediateChild(o,l)}),Sg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=vr(t.visibleWrites,e);return Sg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qD(t,e,n,r,s){M(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Xe(e,n);if(Bh(t.visibleWrites,i))return null;{const o=vr(t.visibleWrites,i);return jh(o)?s.getChild(n):ii(o,s.getChild(n))}}function HD(t,e,n,r){const s=Xe(e,n),i=As(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=vr(t.visibleWrites,s);return ii(o,r.getNode().getImmediateChild(n))}else return null}function KD(t,e){return As(t.visibleWrites,e)}function zD(t,e,n,r,s,i,o){let a;const l=vr(t.visibleWrites,e),c=As(l,Ie());if(c!=null)a=c;else if(n!=null)a=ii(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&u.length<s;)h(p,r)!==0&&u.push(p),p=d.getNext();return u}else return[]}function GD(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Wh(t,e,n,r){return nw(t.writeTree,t.treePath,e,n,r)}function rw(t,e){return WD(t.writeTree,t.treePath,e)}function Pg(t,e,n,r){return qD(t.writeTree,t.treePath,e,n,r)}function Wl(t,e){return KD(t.writeTree,Xe(t.treePath,e))}function QD(t,e,n,r,s,i){return zD(t.writeTree,t.treePath,e,n,r,s,i)}function df(t,e,n){return HD(t.writeTree,t.treePath,e,n)}function sw(t,e){return iw(Xe(t.treePath,e),t.writeTree)}function iw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Tg(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,RD(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,bD(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Tg(r,e.snapshotNode,s.oldSnap));else throw mi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ow=new XD;class ff{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new hf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return df(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ms(this.viewCache_),i=QD(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function JD(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ZD(t,e,n,r,s){const i=new YD;let o,a;if(n.type===Tn.OVERWRITE){const c=n;c.source.fromUser?o=qh(t,e,c.path,c.snap,r,s,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=ql(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Tn.MERGE){const c=n;c.source.fromUser?o=t1(t,e,c.path,c.children,r,s,i):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Hh(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Tn.ACK_USER_WRITE){const c=n;c.revert?o=s1(t,e,c.path,r,s,i):o=n1(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Tn.LISTEN_COMPLETE)o=r1(t,e,n.path,r,i);else throw mi("Unknown operation type: "+n.type);const l=i.getChanges();return e1(e,o,l),{viewCache:o,changes:l}}function e1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=$h(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(ID($h(e)))}}function aw(t,e,n,r,s,i){const o=e.eventCache;if(Wl(r,n)!=null)return e;{let a,l;if(ue(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ms(e),u=c instanceof ve?c:ve.EMPTY_NODE,h=rw(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Wh(r,ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=fe(n);if(c===".priority"){M(Cr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Pg(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Pg(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=df(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return ao(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function ql(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=fe(n);if(!l.isCompleteForPath(n)&&Cr(n)>1)return e;const g=Ae(n),v=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),p,v,g,ow,null)}const h=JE(e,c,l.isFullyInitialized()||ue(n),u.filtersNodes()),d=new ff(s,h,i);return aw(t,h,n,s,d,a)}function qh(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new ff(s,e,i);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ao(e,c,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ao(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ae(n),p=a.getNode().getImmediateChild(h);let g;if(ue(d))g=r;else{const E=u.getCompleteChild(h);E!=null?VE(d)===".priority"&&E.getChild(UE(d)).isEmpty()?g=E:g=E.updateChild(d,r):g=ve.EMPTY_NODE}if(p.equals(g))l=e;else{const E=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=ao(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function kg(t,e){return t.eventCache.isCompleteForChild(e)}function t1(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=Xe(n,l);kg(e,fe(u))&&(a=qh(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=Xe(n,l);kg(e,fe(u))||(a=qh(t,a,u,c,s,i,o))}),a}function Ng(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Hh(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=r:c=new Re(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=Ng(t,p,d);l=ql(t,l,new ke(h),g,s,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),E=Ng(t,g,d);l=ql(t,l,new ke(h),E,s,i,o,a)}}),l}function n1(t,e,n,r,s,i,o){if(Wl(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ql(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ue(n)){let c=new Re(null);return l.getNode().forEachChild(Xs,(u,h)=>{c=c.set(new ke(u),h)}),Hh(t,e,n,c,s,i,a,o)}else return e}else{let c=new Re(null);return r.foreach((u,h)=>{const d=Xe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Hh(t,e,n,c,s,i,a,o)}}function r1(t,e,n,r,s){const i=e.serverCache,o=JE(e,i.getNode(),i.isFullyInitialized()||ue(n),i.isFiltered());return aw(t,o,n,r,ow,s)}function s1(t,e,n,r,s,i){let o;if(Wl(r,n)!=null)return e;{const a=new ff(r,e,s),l=e.eventCache.getNode();let c;if(ue(n)||fe(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wh(r,ms(e));else{const h=e.serverCache.getNode();M(h instanceof ve,"serverChildren would be complete if leaf node"),u=rw(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=fe(n);let h=df(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ae(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ve.EMPTY_NODE,Ae(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wh(r,ms(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Wl(r,Ie())!=null,ao(e,c,o,t.filter.filtersNodes())}}function i1(t,e){const n=ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function Og(t,e,n,r){e.type===Tn.MERGE&&e.source.queryId!==null&&(M(ms(t.viewCache_),"We should always have a full cache before handling merges"),M($h(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=ZD(t.processor_,s,e,n,r);return JD(t.processor_,i.viewCache),M(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,o1(t,i.changes,i.viewCache.eventCache.getNode(),null)}function o1(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return DD(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dg;function a1(t){M(!Dg,"__referenceConstructor has already been defined"),Dg=t}function pf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return M(i!=null,"SyncTree gave us an op for an invalid query."),Og(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Og(o,e,n,r));return i}}function mf(t,e){let n=null;for(const r of t.views.values())n=n||i1(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xg;function l1(t){M(!xg,"__referenceConstructor has already been defined"),xg=t}class Mg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=GD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function c1(t,e,n,r,s){return VD(t.pendingWriteTree_,e,n,r,s),s?Oc(t,new ps(GE(),e,n)):[]}function Ws(t,e,n=!1){const r=FD(t.pendingWriteTree_,e);if(UD(t.pendingWriteTree_,e)){let i=new Re(null);return r.snap!=null?i=i.set(Ie(),!0):zt(r.children,o=>{i=i.set(new ke(o),!0)}),Oc(t,new jl(r.path,i,n))}else return[]}function Nc(t,e,n){return Oc(t,new ps(QE(),e,n))}function u1(t,e,n){const r=Re.fromObject(n);return Oc(t,new xo(QE(),e,r))}function h1(t,e,n,r){const s=hw(t,r);if(s!=null){const i=dw(s),o=i.path,a=i.queryId,l=qt(o,e),c=new ps(YE(a),l,n);return fw(t,o,c)}else return[]}function d1(t,e,n,r){const s=hw(t,r);if(s){const i=dw(s),o=i.path,a=i.queryId,l=qt(o,e),c=Re.fromObject(n),u=new xo(YE(a),l,c);return fw(t,o,u)}else return[]}function lw(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qt(o,e),c=mf(a,l);if(c)return c});return nw(s,e,i,n,!0)}function Oc(t,e){return cw(e,t.syncPointTree_,null,ew(t.pendingWriteTree_,Ie()))}function cw(t,e,n,r){if(ue(t.path))return uw(t,e,n,r);{const s=e.get(Ie());n==null&&s!=null&&(n=mf(s,Ie()));let i=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=sw(r,o);i=i.concat(cw(a,l,c,u))}return s&&(i=i.concat(pf(s,t,r,n))),i}}function uw(t,e,n,r){const s=e.get(Ie());n==null&&s!=null&&(n=mf(s,Ie()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=sw(r,o),u=t.operationForChild(o);u&&(i=i.concat(uw(u,a,l,c)))}),s&&(i=i.concat(pf(s,t,r,n))),i}function hw(t,e){return t.tagToQueryMap.get(e)}function dw(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ke(t.substr(0,e))}}function fw(t,e,n){const r=t.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const s=ew(t.pendingWriteTree_,e);return pf(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gf(n)}node(){return this.node_}}class _f{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new _f(this.syncTree_,n)}node(){return lw(this.syncTree_,this.path_)}}const f1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lg=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return p1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return m1(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},p1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},m1=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const s=e.node();if(M(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},g1=function(t,e,n,r){return yf(e,new _f(n,t),r)},_1=function(t,e,n){return yf(t,new gf(e),n)};function yf(t,e,n){const r=t.getPriority().val(),s=Lg(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Lg(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Qe(a,ut(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Qe(s))),o.forEachChild(pt,(a,l)=>{const c=yf(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ef(t,e){let n=e instanceof ke?e:new ke(e),r=t,s=fe(n);for(;s!==null;){const i=ri(r.node.children,s)||{children:{},childCount:0};r=new vf(s,r,i),n=Ae(n),s=fe(n)}return r}function Ei(t){return t.node.value}function pw(t,e){t.node.value=e,Kh(t)}function mw(t){return t.node.childCount>0}function y1(t){return Ei(t)===void 0&&!mw(t)}function Dc(t,e){zt(t.node.children,(n,r)=>{e(new vf(n,t,r))})}function gw(t,e,n,r){n&&!r&&e(t),Dc(t,s=>{gw(s,e,!0,r)}),n&&r&&e(t)}function v1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function la(t){return new ke(t.parent===null?t.name:la(t.parent)+"/"+t.name)}function Kh(t){t.parent!==null&&E1(t.parent,t.name,t)}function E1(t,e,n){const r=y1(n),s=Jn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Kh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Kh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=/[\[\].#$\/\u0000-\u001F\u007F]/,T1=/[\[\].#$\u0000-\u001F\u007F]/,xu=10*1024*1024,_w=function(t){return typeof t=="string"&&t.length!==0&&!w1.test(t)},I1=function(t){return typeof t=="string"&&t.length!==0&&!T1.test(t)},b1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),I1(t)},yw=function(t,e,n){const r=n instanceof ke?new rD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jr(r));if(typeof e=="function")throw new Error(t+"contains a function "+jr(r)+" with contents = "+e.toString());if(_E(e))throw new Error(t+"contains "+e.toString()+" "+jr(r));if(typeof e=="string"&&e.length>xu/3&&bc(e)>xu)throw new Error(t+"contains a string greater than "+xu+" utf8 bytes "+jr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(zt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!_w(o)))throw new Error(t+" contains an invalid key ("+o+") "+jr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sD(r,o),yw(t,a,r),iD(r)}),s&&i)throw new Error(t+' contains ".value" child '+jr(r)+" in addition to actual children.")}},R1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_w(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!b1(n))throw new Error(wS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function C1(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!$E(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Cs(t,e,n){C1(t,n),S1(t,r=>nn(r,e)||nn(e,r))}function S1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(P1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function P1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ss&&ct("event: "+n.toString()),oa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="repo_interrupt",N1=25;class O1{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new A1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bl(),this.transactionQueueTree_=new vf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function D1(t,e,n){if(t.stats_=of(t.repoInfo_),t.forceRestClient_||CO())t.server_=new $l(t.repoInfo_,(r,s,i,o)=>{Vg(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kn(t.repoInfo_,e,(r,s,i,o)=>{Vg(t,r,s,i,o)},r=>{Fg(t,r)},r=>{M1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=DO(t.repoInfo_,()=>new OD(t.stats_,t.server_)),t.infoData_=new CD,t.infoSyncTree_=new Mg({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Nc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wf(t,"connected",!1),t.serverSyncTree_=new Mg({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Cs(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function x1(t){const n=t.infoData_.getNode(new ke(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vw(t){return f1({timestamp:x1(t)})}function Vg(t,e,n,r,s){t.dataUpdateCount++;const i=new ke(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Cl(n,c=>ut(c));o=d1(t.serverSyncTree_,i,l,s)}else{const l=ut(n);o=h1(t.serverSyncTree_,i,l,s)}else if(r){const l=Cl(n,c=>ut(c));o=u1(t.serverSyncTree_,i,l)}else{const l=ut(n);o=Nc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=If(t,i)),Cs(t.eventQueue_,a,o)}function Fg(t,e){wf(t,"connected",e),e===!1&&V1(t)}function M1(t,e){zt(e,(n,r)=>{wf(t,n,r)})}function wf(t,e,n){const r=new ke("/.info/"+e),s=ut(n);t.infoData_.updateSnapshot(r,s);const i=Nc(t.infoSyncTree_,r,s);Cs(t.eventQueue_,r,i)}function L1(t){return t.nextWriteId_++}function V1(t){Ew(t,"onDisconnectEvents");const e=vw(t),n=Bl();Uh(t.onDisconnect_,Ie(),(s,i)=>{const o=g1(s,i,t.serverSyncTree_,e);zE(n,s,o)});let r=[];Uh(n,Ie(),(s,i)=>{r=r.concat(Nc(t.serverSyncTree_,s,i));const o=B1(t,s);If(t,o)}),t.onDisconnect_=Bl(),Cs(t.eventQueue_,Ie(),r)}function F1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(k1)}function Ew(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ct(n,...e)}function ww(t,e,n){return lw(t.serverSyncTree_,e,n)||ve.EMPTY_NODE}function Tf(t,e=t.transactionQueueTree_){if(e||xc(t,e),Ei(e)){const n=Iw(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&U1(t,la(e),n)}else mw(e)&&Dc(e,n=>{Tf(t,n)})}function U1(t,e,n){const r=n.map(c=>c.currentWriteId),s=ww(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=qt(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ew(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ws(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();xc(t,Ef(t.transactionQueueTree_,e)),Tf(t,t.transactionQueueTree_),Cs(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)oa(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Mt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}If(t,e)}},o)}function If(t,e){const n=Tw(t,e),r=la(n),s=Iw(t,n);return $1(t,s,r),r}function $1(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qt(n,l.path);let u=!1,h;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(Ws(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=N1)u=!0,h="maxretry",s=s.concat(Ws(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ww(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){yw("transaction failed: Data returned ",p,l.path);let g=ut(p);typeof p=="object"&&p!=null&&Jn(p,".priority")||(g=g.updatePriority(d.getPriority()));const v=l.currentWriteId,A=vw(t),O=_1(g,d,A);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=O,l.currentWriteId=L1(t),o.splice(o.indexOf(v),1),s=s.concat(c1(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),s=s.concat(Ws(t.serverSyncTree_,v,!0))}else u=!0,h="nodata",s=s.concat(Ws(t.serverSyncTree_,l.currentWriteId,!0))}Cs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}xc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)oa(r[a]);Tf(t,t.transactionQueueTree_)}function Tw(t,e){let n,r=t.transactionQueueTree_;for(n=fe(e);n!==null&&Ei(r)===void 0;)r=Ef(r,n),e=Ae(e),n=fe(e);return r}function Iw(t,e){const n=[];return bw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function bw(t,e,n){const r=Ei(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Dc(e,s=>{bw(t,s,n)})}function xc(t,e){const n=Ei(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,pw(e,n.length>0?n:void 0)}Dc(e,r=>{xc(t,r)})}function B1(t,e){const n=la(Tw(t,e)),r=Ef(t.transactionQueueTree_,e);return v1(r,s=>{Mu(t,s)}),Mu(t,r),gw(r,s=>{Mu(t,s)}),n}function Mu(t,e){const n=Ei(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ws(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?pw(e,void 0):n.length=i+1,Cs(t.eventQueue_,la(e),s);for(let o=0;o<r.length;o++)oa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function W1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Mt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ug=function(t,e){const n=q1(t),r=n.namespace;n.domain==="firebase.com"&&ds(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vO();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kO(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ke(n.pathString)}},q1=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=j1(t.substring(u,h)));const d=W1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ue(this._path)?null:VE(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){const e=bg(this._queryParams),n=rf(e);return n==="{}"?"default":n}get _queryObject(){return bg(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof bf))return!1;const n=this._repo===e._repo,r=$E(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+nD(this._path)}}class wi extends bf{constructor(e,n){super(e,n,new uf,!1)}get parent(){const e=UE(this._path);return e===null?null:new wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}a1(wi);l1(wi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="FIREBASE_DATABASE_EMULATOR_HOST",zh={};let K1=!1;function z1(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ct("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ug(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[H1]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Ug(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Lh(Lh.OWNER):new PO(t.name,t.options,e);R1("Invalid Firebase Database URL",o),ue(o.path)||ds("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Q1(a,t,u,new SO(t.name,n));return new Y1(h,t)}function G1(t,e){const n=zh[e];(!n||n[t.key]!==t)&&ds(`Database ${e}(${t.repoInfo_}) has already been deleted.`),F1(t),delete n[t.key]}function Q1(t,e,n,r){let s=zh[e.name];s||(s={},zh[e.name]=s);let i=s[t.toURLString()];return i&&ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new O1(t,K1,n,r),s[t.toURLString()]=i,i}class Y1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(D1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,Ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(G1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ds("Cannot call "+e+" on a deleted database.")}}/**
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
 */function X1(t){pO(Or),xn(new ln("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return z1(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),xt(og,ag,t),xt(og,ag,"esm2017")}Kn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};X1();var J1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Rf=Rf||{},J=J1||self;function Mc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ca(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Z1(t){return Object.prototype.hasOwnProperty.call(t,Lu)&&t[Lu]||(t[Lu]=++ex)}var Lu="closure_uid_"+(1e9*Math.random()>>>0),ex=0;function tx(t,e,n){return t.call.apply(t.bind,arguments)}function nx(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=tx:mt=nx,mt.apply(null,arguments)}function $a(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Dr(){this.s=this.s,this.o=this.o}var rx=0;Dr.prototype.s=!1;Dr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rx!=0)&&Z1(this)};Dr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Af(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $g(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Mc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var sx=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function Mo(t){return/^[\s\xa0]*$/.test(t)}function Lc(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function En(t){return Lc().indexOf(t)!=-1}function Cf(t){return Cf[" "](t),t}Cf[" "]=function(){};function ix(t,e){var n=Xx;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ox=En("Opera"),oi=En("Trident")||En("MSIE"),Aw=En("Edge"),Gh=Aw||oi,Cw=En("Gecko")&&!(Lc().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),ax=Lc().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function Sw(){var t=J.document;return t?t.documentMode:void 0}var Qh;e:{var Vu="",Fu=function(){var t=Lc();if(Cw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Aw)return/Edge\/([\d\.]+)/.exec(t);if(oi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ax)return/WebKit\/(\S+)/.exec(t);if(ox)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fu&&(Vu=Fu?Fu[1]:""),oi){var Uu=Sw();if(Uu!=null&&Uu>parseFloat(Vu)){Qh=String(Uu);break e}}Qh=Vu}var Yh;if(J.document&&oi){var Bg=Sw();Yh=Bg||parseInt(Qh,10)||void 0}else Yh=void 0;var lx=Yh;function Lo(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Cw){e:{try{Cf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:cx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lo.$.h.call(this)}}Ze(Lo,gt);var cx={2:"touch",3:"pen",4:"mouse"};Lo.prototype.h=function(){Lo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ua="closure_listenable_"+(1e6*Math.random()|0),ux=0;function hx(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++ux,this.fa=this.ia=!1}function Vc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Sf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function dx(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Pw(t){const e={};for(const n in t)e[n]=t[n];return e}const jg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kw(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<jg.length;i++)n=jg[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fc(t){this.src=t,this.g={},this.h=0}Fc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Jh(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new hx(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Xh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Rw(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Vc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jh(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Pf="closure_lm_"+(1e6*Math.random()|0),$u={};function Nw(t,e,n,r,s){if(r&&r.once)return Dw(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Nw(t,e[i],n,r,s);return null}return n=Of(n),t&&t[ua]?t.O(e,n,ca(r)?!!r.capture:!!r,s):Ow(t,e,n,!1,r,s)}function Ow(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ca(s)?!!s.capture:!!s,a=Nf(t);if(a||(t[Pf]=a=new Fc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=fx(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sx||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Mw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fx(){function t(n){return e.call(t.src,t.listener,n)}const e=px;return t}function Dw(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dw(t,e[i],n,r,s);return null}return n=Of(n),t&&t[ua]?t.P(e,n,ca(r)?!!r.capture:!!r,s):Ow(t,e,n,!0,r,s)}function xw(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)xw(t,e[i],n,r,s);else r=ca(r)?!!r.capture:!!r,n=Of(n),t&&t[ua]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Jh(i,n,r,s),-1<n&&(Vc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jh(e,n,r,s)),(n=-1<t?e[t]:null)&&kf(n))}function kf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ua])Xh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Mw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Nf(e))?(Xh(n,t),n.h==0&&(n.src=null,e[Pf]=null)):Vc(t)}}}function Mw(t){return t in $u?$u[t]:$u[t]="on"+t}function px(t,e){if(t.fa)t=!0;else{e=new Lo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&kf(t),t=n.call(r,e)}return t}function Nf(t){return t=t[Pf],t instanceof Fc?t:null}var Bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Of(t){return typeof t=="function"?t:(t[Bu]||(t[Bu]=function(e){return t.handleEvent(e)}),t[Bu])}function Je(){Dr.call(this),this.i=new Fc(this),this.S=this,this.J=null}Ze(Je,Dr);Je.prototype[ua]=!0;Je.prototype.removeEventListener=function(t,e,n,r){xw(this,t,e,n,r)};function ot(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var s=e;e=new gt(r,t),kw(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ba(o,r,!0,e)&&s}if(o=e.g=t,s=Ba(o,r,!0,e)&&s,s=Ba(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ba(o,r,!1,e)&&s}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vc(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ba(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Xh(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Df=J.JSON.stringify;class mx{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gx(){var t=xf;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _x{constructor(){this.h=this.g=null}add(e,n){const r=Lw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Lw=new mx(()=>new yx,t=>t.reset());class yx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vx(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ex(t){J.setTimeout(()=>{throw t},0)}let Vo,Fo=!1,xf=new _x,Vw=()=>{const t=J.Promise.resolve(void 0);Vo=()=>{t.then(wx)}};var wx=()=>{for(var t;t=gx();){try{t.h.call(t.g)}catch(n){Ex(n)}var e=Lw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Fo=!1};function Uc(t,e){Je.call(this),this.h=t||1,this.g=e||J,this.j=mt(this.qb,this),this.l=Date.now()}Ze(Uc,Je);L=Uc.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(Mf(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Uc.$.N.call(this),Mf(this),delete this.g};function Lf(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Fw(t){t.g=Lf(()=>{t.g=null,t.i&&(t.i=!1,Fw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Tx extends Dr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fw(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Uo(t){Dr.call(this),this.h=t,this.g={}}Ze(Uo,Dr);var Wg=[];function Uw(t,e,n,r){Array.isArray(n)||(n&&(Wg[0]=n.toString()),n=Wg);for(var s=0;s<n.length;s++){var i=Nw(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function $w(t){Sf(t.g,function(e,n){this.g.hasOwnProperty(n)&&kf(e)},t),t.g={}}Uo.prototype.N=function(){Uo.$.N.call(this),$w(this)};Uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $c(){this.g=!0}$c.prototype.Ea=function(){this.g=!1};function Ix(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function bx(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ax(t,n)+(r?" "+r:"")})}function Rx(t,e){t.info(function(){return"TIMEOUT: "+e})}$c.prototype.info=function(){};function Ax(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Df(n)}catch{return e}}var Ss={},qg=null;function Bc(){return qg=qg||new Je}Ss.Ta="serverreachability";function Bw(t){gt.call(this,Ss.Ta,t)}Ze(Bw,gt);function $o(t){const e=Bc();ot(e,new Bw(e))}Ss.STAT_EVENT="statevent";function jw(t,e){gt.call(this,Ss.STAT_EVENT,t),this.stat=e}Ze(jw,gt);function At(t){const e=Bc();ot(e,new jw(e,t))}Ss.Ua="timingevent";function Ww(t,e){gt.call(this,Ss.Ua,t),this.size=e}Ze(Ww,gt);function ha(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var jc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vf(){}Vf.prototype.h=null;function Hg(t){return t.h||(t.h=t.i())}function Hw(){}var da={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ff(){gt.call(this,"d")}Ze(Ff,gt);function Uf(){gt.call(this,"c")}Ze(Uf,gt);var Zh;function Wc(){}Ze(Wc,Vf);Wc.prototype.g=function(){return new XMLHttpRequest};Wc.prototype.i=function(){return{}};Zh=new Wc;function fa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Uo(this),this.P=Cx,t=Gh?125:void 0,this.V=new Uc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Kw}function Kw(){this.i=null,this.g="",this.h=!1}var Cx=45e3,ed={},Hl={};L=fa.prototype;L.setTimeout=function(t){this.P=t};function td(t,e,n){t.L=1,t.v=Hc(Gn(e)),t.s=n,t.S=!0,zw(t,null)}function zw(t,e){t.G=Date.now(),pa(t),t.A=Gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),tT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Kw,t.g=TT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Tx(mt(t.Pa,t,t.g),t.O)),Uw(t.U,t.g,"readystatechange",t.nb),e=t.I?Pw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$o(),Ix(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&In(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=In(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Gh||this.g&&(this.h.h||this.g.ja()||Qg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?$o(3):$o(2)),qc(this);var n=this.g.da();this.ca=n;t:if(Gw(this)){var r=Qg(this.g);t="";var s=r.length,i=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),co(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,bx(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mo(a)){var c=a;break t}}c=null}if(n=c)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nd(this,n);else{this.i=!1,this.o=3,At(12),zr(this),co(this);break e}}this.S?(Qw(this,u,o),Gh&&this.i&&u==3&&(Uw(this.U,this.V,"tick",this.mb),this.V.start())):(qs(this.j,this.m,o,null),nd(this,o)),u==4&&zr(this),this.i&&!this.J&&(u==4?yT(this.l,this):(this.i=!1,pa(this)))}else Gx(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),zr(this),co(this)}}}catch{}finally{}};function Gw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Qw(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=Sx(t,n),s==Hl){e==4&&(t.o=4,At(14),r=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ed){t.o=4,At(15),qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qs(t.j,t.m,s,null),nd(t,s);Gw(t)&&s!=Hl&&s!=ed&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hf(e),e.M=!0,At(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),co(t))}L.mb=function(){if(this.g){var t=In(this.g),e=this.g.ja();this.C<e.length&&(qc(this),Qw(this,t,e),this.i&&t!=4&&pa(this))}};function Sx(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Hl:(n=Number(e.substring(n,r)),isNaN(n)?ed:(r+=1,r+n>e.length?Hl:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,zr(this)};function pa(t){t.Y=Date.now()+t.P,Yw(t,t.P)}function Yw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ha(mt(t.lb,t),e)}function qc(t){t.B&&(J.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Rx(this.j,this.A),this.L!=2&&($o(),At(17)),zr(this),this.o=2,co(this)):Yw(this,this.Y-t)};function co(t){t.l.H==0||t.J||yT(t.l,t)}function zr(t){qc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Mf(t.V),$w(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function nd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||rd(n.i,t))){if(!t.K&&rd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Gl(n),Qc(n);else break e;qf(n),At(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ha(mt(n.ib,n),6e3));if(1>=sT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Gr(n,11)}else if((t.K||n.g==t)&&Gl(n),!Mo(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&($f(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Ce(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=wT(r,r.J?r.pa:null,r.Y),o.K){iT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(qc(a),pa(a)),r.g=o}else gT(r);0<n.j.length&&Yc(n)}else c[0]!="stop"&&c[0]!="close"||Gr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Gr(n,7):Wf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}$o(4)}catch{}}function Px(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Mc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function kx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Mc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Xw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Mc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kx(t),r=Px(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Jw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function is(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof is){this.h=t.h,Kl(this,t.j),this.s=t.s,this.g=t.g,zl(this,t.m),this.l=t.l;var e=t.i,n=new Bo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kg(this,n),this.o=t.o}else t&&(e=String(t).match(Jw))?(this.h=!1,Kl(this,e[1]||"",!0),this.s=Qi(e[2]||""),this.g=Qi(e[3]||"",!0),zl(this,e[4]),this.l=Qi(e[5]||"",!0),Kg(this,e[6]||"",!0),this.o=Qi(e[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}is.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Yi(e,zg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Yi(e,zg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Yi(n,n.charAt(0)=="/"?xx:Dx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Yi(n,Lx)),t.join("")};function Gn(t){return new is(t)}function Kl(t,e,n){t.j=n?Qi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function zl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kg(t,e,n){e instanceof Bo?(t.i=e,Vx(t.i,t.h)):(n||(e=Yi(e,Mx)),t.i=new Bo(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function Hc(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Yi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ox),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ox(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zg=/[#\/\?@]/g,Dx=/[#\?:]/g,xx=/[#\?]/g,Mx=/[#\?@]/g,Lx=/#/g;function Bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xr(t){t.g||(t.g=new Map,t.h=0,t.i&&Nx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Bo.prototype;L.add=function(t,e){xr(this),this.i=null,t=Ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zw(t,e){xr(t),e=Ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eT(t,e){return xr(t),e=Ti(t,e),t.g.has(e)}L.forEach=function(t,e){xr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};L.ta=function(){xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};L.Z=function(t){xr(this);let e=[];if(typeof t=="string")eT(this,t)&&(e=e.concat(this.g.get(Ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return xr(this),this.i=null,t=Ti(this,t),eT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function tT(t,e,n){Zw(t,e),0<n.length&&(t.i=null,t.g.set(Ti(t,e),Af(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Vx(t,e){e&&!t.j&&(xr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Zw(this,r),tT(this,s,n))},t)),t.j=e}var Fx=class{constructor(t,e){this.g=t,this.map=e}};function nT(t){this.l=t||Ux,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ux=10;function rT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sT(t){return t.h?1:t.g?t.g.size:0}function rd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $f(t,e){t.g?t.g.add(e):t.h=e}function iT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nT.prototype.cancel=function(){if(this.i=oT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function oT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Af(t.i)}var $x=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function Bx(){this.g=new $x}function jx(t,e,n){const r=n||"";try{Xw(t,function(s,i){let o=s;ca(s)&&(o=Df(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Wx(t,e){const n=new $c;if(J.Image){const r=new Image;r.onload=$a(ja,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$a(ja,n,r,"TestLoadImage: error",!1,e),r.onabort=$a(ja,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$a(ja,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ja(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Kc(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(Kc,Vf);Kc.prototype.g=function(){return new zc(this.l,this.j)};Kc.prototype.i=function(t){return function(){return t}}({});function zc(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(zc,Je);var Bf=0;L=zc.prototype;L.open=function(t,e){if(this.readyState!=Bf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jo(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ma(this)),this.readyState=Bf};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function aT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ma(this):jo(this),this.readyState==3&&aT(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,ma(this))};L.Ya=function(t){this.g&&(this.response=t,ma(this))};L.ka=function(){this.g&&ma(this)};function ma(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jo(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qx=J.JSON.parse;function Ve(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lT,this.L=this.M=!1}Ze(Ve,Je);var lT="",Hx=/^https?$/i,Kx=["POST","PUT"];L=Ve.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zh.g(),this.C=this.u?Hg(this.u):Hg(Zh),this.g.onreadystatechange=mt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Gg(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=Rw(Kx,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hT(this),0<this.B&&((this.L=zx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.ua,this)):this.A=Lf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Gg(this,i)}};function zx(t){return oi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Rf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function Gg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,cT(t),Gc(t)}function cT(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),Gc(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gc(this,!0)),Ve.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?uT(this):this.kb())};L.kb=function(){uT(this)};function uT(t){if(t.h&&typeof Rf<"u"&&(!t.C[1]||In(t)!=4||t.da()!=2)){if(t.v&&In(t)==4)Lf(t.La,0,t);else if(ot(t,"readystatechange"),In(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Jw)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!Hx.test(s?s.toLowerCase():"")}n=r}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var i=2<In(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",cT(t)}}finally{Gc(t)}}}}function Gc(t,e){if(t.g){hT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function hT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function In(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qx(e)}};function Qg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case lT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Gx(t){const e={};t=(t.g&&2<=In(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Mo(t[r]))continue;var n=vx(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}dx(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dT(t){let e="";return Sf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function jf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Vi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fT(t){this.Ga=0,this.j=[],this.l=new $c,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vi("baseRetryDelayMs",5e3,t),this.hb=Vi("retryDelaySeedMs",1e4,t),this.eb=Vi("forwardChannelMaxRetries",2,t),this.xa=Vi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nT(t&&t.concurrentRequestLimit),this.Ja=new Bx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=fT.prototype;L.ra=8;L.H=1;function Wf(t){if(pT(t),t.H==3){var e=t.W++,n=Gn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),ga(t,n),e=new fa(t,t.l,e),e.L=2,e.v=Hc(Gn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=TT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),pa(e)}ET(t)}function Qc(t){t.g&&(Hf(t),t.g.cancel(),t.g=null)}function pT(t){Qc(t),t.u&&(J.clearTimeout(t.u),t.u=null),Gl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Yc(t){if(!rT(t.i)&&!t.m){t.m=!0;var e=t.Na;Vo||Vw(),Fo||(Vo(),Fo=!0),xf.add(e,t),t.C=0}}function Qx(t,e){return sT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ha(mt(t.Na,t,e),vT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new fa(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Pw(i),kw(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mT(this,s,e),n=Gn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),ga(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(dT(i)))+"&"+e:this.o&&jf(n,this.o,i)),$f(this.i,s),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),s.aa=!0,td(s,n,null)):td(s,n,e),this.H=2}}else this.H==3&&(t?Yg(this,t):this.j.length==0||rT(this.i)||Yg(this))};function Yg(t,e){var n;e?n=e.m:n=t.W++;const r=Gn(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),ga(t,r),t.o&&t.s&&jf(r,t.o,t.s),n=new fa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=mT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),$f(t.i,n),td(n,r,e)}function ga(t,e){t.na&&Sf(t.na,function(n,r){Ce(e,r,n)}),t.h&&Xw({},function(n,r){Ce(e,r,n)})}function mT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?mt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{jx(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function gT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Vo||Vw(),Fo||(Vo(),Fo=!0),xf.add(e,t),t.A=0}}function qf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ha(mt(t.Ma,t),vT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,_T(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ha(mt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,At(10),Qc(this),_T(this))};function Hf(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function _T(t){t.g=new fa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),ga(t,e),t.o&&t.s&&jf(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Hc(Gn(e)),n.s=null,n.S=!0,zw(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Qc(this),qf(this),At(19))};function Gl(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function yT(t,e){var n=null;if(t.g==e){Gl(t),Hf(t),t.g=null;var r=2}else if(rd(t.i,e))n=e.F,iT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Bc(),ot(r,new Ww(r,n)),Yc(t)}else gT(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Qx(t,e)||r==2&&qf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Gr(t,5);break;case 4:Gr(t,10);break;case 3:Gr(t,6);break;default:Gr(t,2)}}}function vT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Gr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=mt(t.pb,t);n||(n=new is("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Kl(n,"https"),Hc(n)),Wx(n.toString(),r)}else At(2);t.H=0,t.h&&t.h.za(e),ET(t),pT(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),At(2)):(this.l.info("Failed to ping google.com"),At(1))};function ET(t){if(t.H=0,t.ma=[],t.h){const e=oT(t.i);(e.length!=0||t.j.length!=0)&&($g(t.ma,e),$g(t.ma,t.j),t.i.i.length=0,Af(t.j),t.j.length=0),t.h.ya()}}function wT(t,e,n){var r=n instanceof is?Gn(n):new is(n);if(r.g!="")e&&(r.g=e+"."+r.g),zl(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new is(null);r&&Kl(i,r),e&&(i.g=e),s&&zl(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),ga(t,r),r}function TT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ve(new Kc({ob:!0})):new Ve(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function IT(){}L=IT.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Ql(){if(oi&&!(10<=Number(lx)))throw Error("Environmental error: no available transport.")}Ql.prototype.g=function(t,e){return new Ft(t,e)};function Ft(t,e){Je.call(this),this.g=new fT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ii(this)}Ze(Ft,Je);Ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=wT(t,null,t.Y),Yc(t)};Ft.prototype.close=function(){Wf(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Df(t),t=n);e.j.push(new Fx(e.fb++,t)),e.H==3&&Yc(e)};Ft.prototype.N=function(){this.g.h=null,delete this.j,Wf(this.g),delete this.g,Ft.$.N.call(this)};function bT(t){Ff.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(bT,Ff);function RT(){Uf.call(this),this.status=1}Ze(RT,Uf);function Ii(t){this.g=t}Ze(Ii,IT);Ii.prototype.Ba=function(){ot(this.g,"a")};Ii.prototype.Aa=function(t){ot(this.g,new bT(t))};Ii.prototype.za=function(t){ot(this.g,new RT)};Ii.prototype.ya=function(){ot(this.g,"b")};function Yx(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(hn,Yx);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ju(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ju(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ju(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ju(this,r),s=0;break}}this.h=s,this.i+=e};hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Xx={};function Kf(t){return-128<=t&&128>t?ix(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function bn(t){if(isNaN(t)||!isFinite(t))return Js;if(0>t)return st(bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=sd;return new Ee(e,0)}function AT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return st(AT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bn(Math.pow(e,8)),r=Js,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=bn(Math.pow(e,i)),r=r.R(i).add(bn(o))):(r=r.R(n),r=r.add(bn(o)))}return r}var sd=4294967296,Js=Kf(0),id=Kf(1),Xg=Kf(16777216);L=Ee.prototype;L.ea=function(){if(Wt(this))return-st(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:sd+r)*e,e*=sd}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(qn(this))return"0";if(Wt(this))return"-"+st(this).toString(t);for(var e=bn(Math.pow(t,6)),n=this,r="";;){var s=Xl(n,e).g;n=Yl(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,qn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function qn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Wt(t){return t.h==-1}L.X=function(t){return t=Yl(this,t),Wt(t)?-1:qn(t)?0:1};function st(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(id)}L.abs=function(){return Wt(this)?st(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function Yl(t,e){return t.add(st(e))}L.R=function(t){if(qn(this)||qn(t))return Js;if(Wt(this))return Wt(t)?st(this).R(st(t)):st(st(this).R(t));if(Wt(t))return st(this.R(st(t)));if(0>this.X(Xg)&&0>t.X(Xg))return bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Wa(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Wa(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Wa(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Wa(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function Wa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fi(t,e){this.g=t,this.h=e}function Xl(t,e){if(qn(e))throw Error("division by zero");if(qn(t))return new Fi(Js,Js);if(Wt(t))return e=Xl(st(t),e),new Fi(st(e.g),st(e.h));if(Wt(e))return e=Xl(t,st(e)),new Fi(st(e.g),e.h);if(30<t.g.length){if(Wt(t)||Wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=id,r=e;0>=r.X(t);)n=Jg(n),r=Jg(r);var s=Ms(n,1),i=Ms(r,1);for(r=Ms(r,2),n=Ms(n,2);!qn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Ms(r,1),n=Ms(n,1)}return e=Yl(t,s.R(e)),new Fi(s,e)}for(s=Js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=bn(n),o=i.R(e);Wt(o)||0<o.X(t);)n-=r,i=bn(n),o=i.R(e);qn(i)&&(i=id),s=s.add(i),t=Yl(t,o)}return new Fi(s,t)}L.gb=function(t){return Xl(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function Jg(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function Ms(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ee(s,t.h)}Ql.prototype.createWebChannel=Ql.prototype.g;Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;jc.NO_ERROR=0;jc.TIMEOUT=8;jc.HTTP_ERROR=6;qw.COMPLETE="complete";Hw.EventType=da;da.OPEN="a";da.CLOSE="b";da.ERROR="c";da.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Ve.prototype.listenOnce=Ve.prototype.P;Ve.prototype.getLastError=Ve.prototype.Sa;Ve.prototype.getLastErrorCode=Ve.prototype.Ia;Ve.prototype.getStatus=Ve.prototype.da;Ve.prototype.getResponseJson=Ve.prototype.Wa;Ve.prototype.getResponseText=Ve.prototype.ja;Ve.prototype.send=Ve.prototype.ha;Ve.prototype.setWithCredentials=Ve.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=bn;Ee.fromString=AT;var Jx=function(){return new Ql},Zx=function(){return Bc()},Wu=jc,eM=qw,tM=Ss,Zg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qa=Hw,nM=Ve,rM=hn,Zs=Ee;const e_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Zo("@firebase/firestore");function Ui(){return gs.logLevel}function W(t,...e){if(gs.logLevel<=ae.DEBUG){const n=e.map(zf);gs.debug(`Firestore (${bi}): ${t}`,...n)}}function Qn(t,...e){if(gs.logLevel<=ae.ERROR){const n=e.map(zf);gs.error(`Firestore (${bi}): ${t}`,...n)}}function ai(t,...e){if(gs.logLevel<=ae.WARN){const n=e.map(zf);gs.warn(`Firestore (${bi}): ${t}`,...n)}}function zf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Pe(t,e){t||X()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class iM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oM{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Er,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new CT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new lt(e)}}class aM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new cM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hM(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Wo{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const dM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Wo{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return dM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}function fM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Sr(s,G.empty(),e)}function pM(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(ee.min(),G.empty(),-1)}static max(){return new Sr(ee.max(),G.empty(),-1)}}function mM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _M{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==gM)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ya(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Gf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Gf.ae=-1;function Xc(t){return t==null}function Jl(t){return t===0&&1/t==-1/0}function yM(t){return typeof t=="number"&&Number.isInteger(t)&&!Jl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function PT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n_(this.data.getIterator())}getIteratorFrom(e){return new n_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class n_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new _t(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kT("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const vM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=vM.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _s(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yf(t){const e=t.mapValue.fields.__previous_value__;return Qf(e)?Yf(e):e}function qo(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qf(t)?4:wM(t)?9007199254740991:10:X()}function Mn(t,e){if(t===e)return!0;const n=ys(t);if(n!==ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Pr(s.timestampValue),a=Pr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return _s(s.bytesValue).isEqual(_s(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),a=qe(i.doubleValue);return o===a?Jl(o)===Jl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(t_(o)!==t_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Mn(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function Ko(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function ci(t,e){if(t===e)return 0;const n=ys(t),r=ys(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return r_(t.timestampValue,e.timestampValue);case 4:return r_(qo(t),qo(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=_s(i),l=_s(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ge(a[c],l[c]);if(u!==0)return u}return ge(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(qe(i.latitude),qe(o.latitude));return a!==0?a:ge(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ci(a[c],l[c]);if(u)return u}return ge(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ka.mapValue&&o===Ka.mapValue)return 0;if(i===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ge(l[h],u[h]);if(d!==0)return d;const p=ci(a[l[h]],c[u[h]]);if(p!==0)return p}return ge(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function r_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Pr(t),r=Pr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function ui(t){return od(t)}function od(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=od(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${od(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function s_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ad(t){return!!t&&"integerValue"in t}function Xf(t){return!!t&&"arrayValue"in t}function i_(t){return!!t&&"nullValue"in t}function o_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ll(t){return!!t&&"mapValue"in t}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=uo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ll(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(uo(this.value))}}function NT(t){const e=[];return Ps(t.fields,(n,r)=>{const s=new ft([n]);if(ll(r)){const i=NT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ht(e,0,ee.min(),ee.min(),ee.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,ee.min(),ee.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ee.min(),ee.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function a_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ci(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function l_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function TM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class OT{}class He extends OT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bM(e,n,r):n==="array-contains"?new CM(e,r):n==="in"?new SM(e,r):n==="not-in"?new PM(e,r):n==="array-contains-any"?new kM(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RM(e,r):new AM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ci(n,this.value)):n!==null&&ys(this.value)===ys(n)&&this.matchesComparison(ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dn extends OT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new dn(e,n)}matches(e){return DT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function DT(t){return t.op==="and"}function xT(t){return IM(t)&&DT(t)}function IM(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function ld(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+ui(t.value);if(xT(t))return t.filters.map(e=>ld(e)).join(",");{const e=t.filters.map(n=>ld(n)).join(",");return`${t.op}(${e})`}}function MT(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&MT(o,s.filters[a]),!0):!1}(t,e):void X()}function LT(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${ui(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(LT).join(" ,")+"}"}(t):"Filter"}class bM extends He{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class RM extends He{constructor(e,n){super(e,"in",n),this.keys=VT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AM extends He{constructor(e,n){super(e,"not-in",n),this.keys=VT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function VT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class CM extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xf(n)&&Ko(n.arrayValue,this.value)}}class SM extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class PM extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ko(this.value.arrayValue,n)}}class kM extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
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
 */class NM{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function c_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NM(t,e,n,r,s,i,o)}function Jf(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ld(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ui(r)).join(",")),e.he=n}return e.he}function Zf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!MT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l_(t.startAt,e.startAt)&&l_(t.endAt,e.endAt)}function cd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function OM(t,e,n,r,s,i,o,a){return new va(t,e,n,r,s,i,o,a)}function FT(t){return new va(t)}function u_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ep(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $T(t){return t.collectionGroup!==null}function fo(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=ep(e),r=UT(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ho(n)),e.Pe.push(new ho(ft.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ho(ft.keyField(),i))}}}return e.Pe}function Pn(t){const e=te(t);return e.Ie||(e.Ie=DM(e,fo(t))),e.Ie}function DM(t,e){if(t.limitType==="F")return c_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ho(s.field,i)});const n=t.endAt?new Zl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zl(t.startAt.position,t.startAt.inclusive):null;return c_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ud(t,e){e.getFirstInequalityField(),ep(t);const n=t.filters.concat([e]);return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hd(t,e,n){return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jc(t,e){return Zf(Pn(t),Pn(e))&&t.limitType===e.limitType}function BT(t){return`${Jf(Pn(t))}|lt:${t.limitType}`}function Fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>LT(s)).join(", ")}]`),Xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ui(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ui(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Zc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of fo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=a_(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,fo(r),s)||r.endAt&&!function(o,a,l){const c=a_(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,fo(r),s))}(t,e)}function xM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jT(t){return(e,n)=>{let r=!1;for(const s of fo(t)){const i=MM(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function MM(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?ci(l,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return PT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=new xe(G.comparator);function Yn(){return LM}const WT=new xe(G.comparator);function Xi(...t){let e=WT;for(const n of t)e=e.insert(n.key,n);return e}function qT(t){let e=WT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return po()}function HT(){return po()}function po(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const VM=new xe(G.comparator),FM=new _t(G.comparator);function le(...t){let e=FM;for(const n of t)e=e.add(n);return e}const UM=new _t(ge);function $M(){return UM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jl(e)?"-0":e}}function zT(t){return{integerValue:""+t}}function BM(t,e){return yM(e)?zT(e):KT(t,e)}/**
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
 */class eu{constructor(){this._=void 0}}function jM(t,e,n){return t instanceof ec?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qf(i)&&(i=Yf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof zo?QT(t,e):t instanceof Go?YT(t,e):function(s,i){const o=GT(s,i),a=h_(o)+h_(s.Te);return ad(o)&&ad(s.Te)?zT(a):KT(s.serializer,a)}(t,e)}function WM(t,e,n){return t instanceof zo?QT(t,e):t instanceof Go?YT(t,e):n}function GT(t,e){return t instanceof tc?function(r){return ad(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ec extends eu{}class zo extends eu{constructor(e){super(),this.elements=e}}function QT(t,e){const n=XT(e);for(const r of t.elements)n.some(s=>Mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends eu{constructor(e){super(),this.elements=e}}function YT(t,e){let n=XT(e);for(const r of t.elements)n=n.filter(s=>!Mn(s,r));return{arrayValue:{values:n}}}class tc extends eu{constructor(e,n){super(),this.serializer=e,this.Te=n}}function h_(t){return qe(t.integerValue||t.doubleValue)}function XT(t){return Xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qM(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof zo&&s instanceof zo||r instanceof Go&&s instanceof Go?li(r.elements,s.elements,Mn):r instanceof tc&&s instanceof tc?Mn(r.Te,s.Te):r instanceof ec&&s instanceof ec}(t.transform,e.transform)}class HM{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function JT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eI(t.key,kn.none()):new Ea(t.key,t.data,kn.none());{const n=t.data,r=Pt.empty();let s=new _t(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Ot(s.toArray()),kn.none())}}function KM(t,e,n){t instanceof Ea?function(s,i,o){const a=s.value.clone(),l=f_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!cl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=f_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ZT(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function mo(t,e,n,r){return t instanceof Ea?function(i,o,a,l){if(!cl(i.precondition,o))return a;const c=i.value.clone(),u=p_(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,a,l){if(!cl(i.precondition,o))return a;const c=p_(i.fieldTransforms,l,o),u=o.data;return u.setAll(ZT(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return cl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zM(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=GT(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function d_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&li(r,s,(i,o)=>qM(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ea extends tu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends tu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ZT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f_(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,WM(o,a,n[s]))}return r}function p_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jM(i,o,e))}return r}class eI extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GM extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&KM(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=JT(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(n,r)=>d_(n,r))&&li(this.baseMutations,e.baseMutations,(n,r)=>d_(n,r))}}class tp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return VM}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new tp(e,n,r,s)}}/**
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
 */class YM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,he;function JM(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function tI(t){if(t===void 0)return Qn("GRPC error has no .code"),I.UNKNOWN;switch(t){case We.OK:return I.OK;case We.CANCELLED:return I.CANCELLED;case We.UNKNOWN:return I.UNKNOWN;case We.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case We.INTERNAL:return I.INTERNAL;case We.UNAVAILABLE:return I.UNAVAILABLE;case We.UNAUTHENTICATED:return I.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case We.NOT_FOUND:return I.NOT_FOUND;case We.ALREADY_EXISTS:return I.ALREADY_EXISTS;case We.PERMISSION_DENIED:return I.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case We.ABORTED:return I.ABORTED;case We.OUT_OF_RANGE:return I.OUT_OF_RANGE;case We.UNIMPLEMENTED:return I.UNIMPLEMENTED;case We.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(he=We||(We={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ZM(){return new TextEncoder}/**
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
 */const eL=new Zs([4294967295,4294967295],0);function m_(t){const e=ZM().encode(t),n=new rM;return n.update(e),new Uint8Array(n.digest())}function g_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Zs([n,r],0),new Zs([s,i],0)]}class np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ji(`Invalid padding: ${n}`);if(r<0)throw new Ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Zs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Zs.fromNumber(r)));return s.compare(eL)===1&&(s=new Zs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=m_(e),[r,s]=g_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new np(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=m_(e),[r,s]=g_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nu(ee.min(),s,new xe(ge),Yn(),le())}}class wa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wa(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class nI{constructor(e,n){this.targetId=e,this.ye=n}}class rI{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class __{constructor(){this.we=0,this.Se=v_(),this.be=Et.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=le(),n=le(),r=le();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new wa(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=v_()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class tL{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Yn(),this.Ue=y_(),this.We=new xe(ge)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(cd(i))if(r===0){const o=new G(i.path);this.je(n,o,ht.newNoDocument(o,ee.min()))}else Pe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,c)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=_s(r).toUint8Array()}catch(l){if(l instanceof kT)return ai("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new np(o,s,i)}catch(l){return ai(l instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&cd(a.target)){const l=new G(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,ht.newNoDocument(l,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=le();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.et(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new nu(e,n,this.We,this.$e,r);return this.$e=Yn(),this.Ue=y_(),this.We=new xe(ge),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new __,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new _t(ge),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new __),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function y_(){return new xe(G.comparator)}function v_(){return new xe(G.comparator)}const nL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),sL=(()=>({and:"AND",or:"OR"}))();class iL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dd(t,e){return t.useProto3Json||Xc(e)?e:{value:e}}function nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oL(t,e){return nc(t,e.toTimestamp())}function Nn(t){return Pe(!!t),ee.fromTimestamp(function(n){const r=Pr(n);return new Ge(r.seconds,r.nanos)}(t))}function rp(t,e){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function iI(t){const e=Se.fromString(t);return Pe(cI(e)),e}function fd(t,e){return rp(t.databaseId,e.path)}function qu(t,e){const n=iI(e);if(n.get(1)!==t.databaseId.projectId)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(oI(n))}function pd(t,e){return rp(t.databaseId,e)}function aL(t){const e=iI(t);return e.length===4?Se.emptyPath():oI(e)}function md(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oI(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function E_(t,e,n){return{name:fd(t,e),fields:n.value.mapValue.fields}}function lL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Pe(u===void 0||typeof u=="string"),Et.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),Et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:tI(c.code);return new U(u,c.message||"")}(o);n=new rI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qu(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):ee.min(),a=new Pt({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ul(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qu(t,r.document),i=r.readTime?Nn(r.readTime):ee.min(),o=ht.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ul([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qu(t,r.document),i=r.removedTargetIds||[];n=new ul([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new XM(s,i),a=r.targetId;n=new nI(a,o)}}return n}function cL(t,e){let n;if(e instanceof Ea)n={update:E_(t,e.key,e.value)};else if(e instanceof eI)n={delete:fd(t,e.key)};else if(e instanceof Mr)n={update:E_(t,e.key,e.data),updateMask:yL(e.fieldMask)};else{if(!(e instanceof GM))return X();n={verify:fd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ec)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof tc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function uL(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(ee.min())&&(o=Nn(i)),new HM(o,s.transformResults||[])}(n,e))):[]}function hL(t,e){return{documents:[pd(t,e.path)]}}function dL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=pd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=pd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return lI(dn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Us(h.field),direction:mL(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=dd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function fL(t){let e=aL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=aI(h);return d instanceof dn&&xT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new ho($s(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Xc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new Zl(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,p=h.values||[];return new Zl(p,d)}(n.endAt)),OM(e,s,o,i,a,"F",l,c)}function pL(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$s(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=$s(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$s(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$s(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return He.create($s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>aI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function mL(t){return nL[t]}function gL(t){return rL[t]}function _L(t){return sL[t]}function Us(t){return{fieldPath:t.canonicalString()}}function $s(t){return ft.fromServerFormat(t.fieldPath)}function lI(t){return t instanceof He?function(n){if(n.op==="=="){if(o_(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NAN"}};if(i_(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(o_(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NAN"}};if(i_(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(n.field),op:gL(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>lI(s));return r.length===1?r[0]:{compositeFilter:{op:_L(n.op),filters:r}}}(t):X()}function yL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=Et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e){this.ht=e}}function EL(t){const e=fL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hd(e,e.limit,"L"):e}/**
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
 */class wL{constructor(){this.an=new TL}addToCollectionParentIndex(e,n){return this.an.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Sr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class TL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new hi(0)}static Ln(){return new hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&mo(r.mutation,s,Ot.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Xi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Yn();const o=po(),a=function(){return po()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Mr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),mo(u.mutation,c,u.mutation.getFieldMask(),Ge.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new bL(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=po();let s=new xe((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ot.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||le()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=HT();u.forEach(d=>{if(!i.has(d)){const p=JT(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$T(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Qr());let a=-1,l=i;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:qT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=Xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Xi();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,l=>{const c=function(h,d){return new va(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,ht.newInvalidDocument(u)))});let a=Xi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&mo(u.mutation,c,Ot.empty(),Ge.now()),Zc(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return R.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:EL(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class CL{constructor(){this.overlays=new xe(G.comparator),this.Pr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Qr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Qr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return R.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YM(n,r));let i=this.Pr.get(n);i===void 0&&(i=le(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.Ir=new _t(Ye.dr),this.Tr=new _t(Ye.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ye(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new G(new Se([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new G(new Se([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=le();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return G.comparator(e.key,n.key)||ge(e.yr,n.yr)}static Er(e,n){return ge(e.yr,n.yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new _t(Ye.dr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QM(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Ye(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(ge);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new G(i),0);let a=new _t(ge);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.yr)),!0)},o),R.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return R.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Sr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e){this.Fr=e,this.docs=function(){return new xe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Yn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mM(pM(u),r)<=0||(s.has(u.key)||Zc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}Mr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kL(this)}getSize(e){return R.resolve(this.size)}}class kL extends IL{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.persistence=e,this.Or=new Ri(n=>Jf(n),Zf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Nr=0,this.Br=new sp,this.targetCount=0,this.Lr=hi.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),R.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new hi(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Qn(n),R.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n){this.kr={},this.overlays={},this.qr=new Gf(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new NL(this),this.indexManager=new wL,this.remoteDocumentCache=function(s){return new PL(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new vL(n),this.Ur=new AL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new SL(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new DL(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return R.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class DL extends _M{constructor(e){super(),this.currentSequenceNumber=e}}class ip{constructor(e){this.persistence=e,this.jr=new sp,this.Hr=null}static Jr(e){return new ip(e)}get Yr(){if(this.Hr)return this.Hr;throw X()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),R.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Yr,r=>{const s=G.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return R.or([()=>R.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new op(e,n.fromCache,r,s)}}/**
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
 */class xL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ML{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xL;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Ui()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),R.resolve()):(Ui()<=ae.DEBUG&&W("QueryEngine","Query:",Fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Ui()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):R.resolve())}Hi(e,n){if(u_(n))return R.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=hd(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Xi(n,a);return this.es(n,c,o,l.readTime)?this.Hi(e,hd(n,null,"F")):this.ts(e,c,n,l)}))})))}Ji(e,n,r,s){return u_(n)||s.isEqual(ee.min())?R.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?R.resolve(null):(Ui()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fs(n)),this.ts(e,o,n,fM(s,-1)).next(a=>a))})}Xi(e,n){let r=new _t(jT(e));return n.forEach((s,i)=>{Zc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Ui()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Fs(n)),this.ji.getDocumentsMatchingQuery(e,n,Sr.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new xe(ge),this.ss=new Ri(i=>Jf(i),Zf),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RL(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function VL(t,e,n,r){return new LL(t,e,n,r)}async function uI(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=le();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({cs:c,removedBatchIds:o,addedBatchIds:a}))})})}function FL(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let p=R.resolve();return d.forEach(g=>{p=p.next(()=>u.getEntry(l,g)).next(E=>{const v=c.docVersions.get(g);Pe(v!==null),E.version.compareTo(v)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function hI(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function UL(t,e){const n=te(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Et.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,v,A){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,p,u)&&a.push(n.Kr.updateTargetData(i,p))});let l=Yn(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push($L(i,o,e.documentUpdates).next(u=>{l=u.ls,c=u.hs})),!r.isEqual(ee.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.rs=s,i))}function $L(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Yn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{ls:o,hs:s}})}function BL(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jL(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function gd(t,e,n){const r=te(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ya(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function w_(t,e,n){const r=te(t);let s=ee.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=te(l),d=h.ss.get(u);return d!==void 0?R.resolve(h.rs.get(d)):h.Kr.getTargetData(c,u)}(r,o,Pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:le())).next(a=>(WL(r,xM(e),a),{documents:a,Ps:i})))}function WL(t,e,n){let r=t.os.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class T_{constructor(){this.activeTargetIds=$M()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qL{constructor(){this.ro=new T_,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new T_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HL{so(e){}shutdown(){}}/**
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
 */class I_{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let za=null;function Hu(){return za===null?za=function(){return 268435456+Math.round(2147483648*Math.random())}():za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class GL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Hu(),l=this.Do(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(c,i,o),this.vo(n,l,c,s).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ai("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=KL[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Hu();return new Promise((o,a)=>{const l=new nM;l.setWithCredentials(!0),l.listenOnce(eM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wu.NO_ERROR:const u=l.getResponseJson();W(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Wu.TIMEOUT:W(at,`RPC '${e}' ${i} timed out`),a(new U(I.DEADLINE_EXCEEDED,"Request time out"));break;case Wu.HTTP_ERROR:const h=l.getStatus();if(W(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(A)>=0?A:I.UNKNOWN}(p.status);a(new U(g,p.message))}else a(new U(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(at,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);W(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Mo(e,n,r){const s=Hu(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jx(),a=Zx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");W(at,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,p=!1;const g=new zL({ho:v=>{p?W(at,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(W(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),W(at,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},Po:()=>h.close()}),E=(v,A,O)=>{v.listen(A,k=>{try{O(k)}catch(K){setTimeout(()=>{throw K},0)}})};return E(h,qa.EventType.OPEN,()=>{p||W(at,`RPC '${e}' stream ${s} transport opened.`)}),E(h,qa.EventType.CLOSE,()=>{p||(p=!0,W(at,`RPC '${e}' stream ${s} transport closed`),g.mo())}),E(h,qa.EventType.ERROR,v=>{p||(p=!0,ai(at,`RPC '${e}' stream ${s} transport errored:`,v),g.mo(new U(I.UNAVAILABLE,"The operation could not be completed")))}),E(h,qa.EventType.MESSAGE,v=>{var A;if(!p){const O=v.data[0];Pe(!!O);const k=O,K=k.error||((A=k[0])===null||A===void 0?void 0:A.error);if(K){W(at,`RPC '${e}' stream ${s} received error:`,K);const $=K.status;let me=function(Be){const tt=We[Be];if(tt!==void 0)return tI(tt)}($),Me=K.message;me===void 0&&(me=I.INTERNAL,Me="Unknown error status: "+$+" with message "+K.message),p=!0,g.mo(new U(me,Me)),h.close()}else W(at,`RPC '${e}' stream ${s} received:`,O),g.fo(O)}}),E(a,tM.STAT_EVENT,v=>{v.stat===Zg.PROXY?W(at,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Zg.NOPROXY&&W(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Vo()},0),g}}function Ku(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return new iL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n,r,s,i,o,a,l){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new dI(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new U(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QL extends fI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=lL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Nn(o.readTime):ee.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=md(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=cd(l)?{documents:hL(i,l)}:{query:dL(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=sI(i,o.resumeToken);const c=dd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=nc(i,o.snapshotVersion.toTimestamp());const c=dd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=pL(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=md(this.serializer),n.removeTarget=e,this.n_(n)}}class YL extends fI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=uL(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.T_(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=md(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cL(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(I.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(I.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class JL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Qn(n),this.p_=!1):W("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{ks(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.F_.add(4),await Ta(c),c.O_.set("Unknown"),c.F_.delete(4),await su(c)}(this))})}),this.O_=new JL(r,s)}}async function su(t){if(ks(t))for(const e of t.M_)await e(!0)}async function Ta(t){for(const e of t.M_)await e(!1)}function pI(t,e){const n=te(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),cp(n)?lp(n):Ai(n).Yo()&&ap(n,e))}function mI(t,e){const n=te(t),r=Ai(n);n.v_.delete(e),r.Yo()&&gI(n,e),n.v_.size===0&&(r.Yo()?r.e_():ks(n)&&n.O_.set("Unknown"))}function ap(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ai(t).l_(e)}function gI(t,e){t.N_.Le(e),Ai(t).h_(e)}function lp(t){t.N_=new tL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ai(t).start(),t.O_.y_()}function cp(t){return ks(t)&&!Ai(t).Jo()&&t.v_.size>0}function ks(t){return te(t).F_.size===0}function _I(t){t.N_=void 0}async function eV(t){t.v_.forEach((e,n)=>{ap(t,e)})}async function tV(t,e){_I(t),cp(t)?(t.O_.b_(e),lp(t)):t.O_.set("Unknown")}async function nV(t,e,n){if(t.O_.set("Online"),e instanceof rI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rc(t,r)}else if(e instanceof ul?t.N_.Ge(e):e instanceof nI?t.N_.Xe(e):t.N_.He(e),!n.isEqual(ee.min()))try{const r=await hI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.v_.get(c);u&&i.v_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.v_.get(l);if(!u)return;i.v_.set(l,u.withResumeToken(Et.EMPTY_BYTE_STRING,u.snapshotVersion)),gI(i,l);const h=new pr(u.target,l,c,u.sequenceNumber);ap(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await rc(t,r)}}async function rc(t,e,n){if(!ya(e))throw e;t.F_.add(1),await Ta(t),t.O_.set("Offline"),n||(n=()=>hI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await su(t)})}function yI(t,e){return e().catch(n=>rc(t,n,e))}async function iu(t){const e=te(t),n=kr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;rV(e);)try{const s=await BL(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,sV(e,s)}catch(s){await rc(e,s)}vI(e)&&EI(e)}function rV(t){return ks(t)&&t.C_.length<10}function sV(t,e){t.C_.push(e);const n=kr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function vI(t){return ks(t)&&!kr(t).Jo()&&t.C_.length>0}function EI(t){kr(t).start()}async function iV(t){kr(t).A_()}async function oV(t){const e=kr(t);for(const n of t.C_)e.d_(n.mutations)}async function aV(t,e,n){const r=t.C_.shift(),s=tp.from(r,e,n);await yI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await iu(t)}async function lV(t,e){e&&kr(t).I_&&await async function(r,s){if(function(o){return JM(o)&&o!==I.ABORTED}(s.code)){const i=r.C_.shift();kr(r).Xo(),await yI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await iu(r)}}(t,e),vI(t)&&EI(t)}async function b_(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.F_.add(3),await Ta(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await su(n)}async function cV(t,e){const n=te(t);e?(n.F_.delete(2),await su(n)):e||(n.F_.add(2),await Ta(n),n.O_.set("Unknown"))}function Ai(t){return t.B_||(t.B_=function(n,r,s){const i=te(n);return i.V_(),new QL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:eV.bind(null,t),Eo:tV.bind(null,t),c_:nV.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),cp(t)?lp(t):t.O_.set("Unknown")):(await t.B_.stop(),_I(t))})),t.B_}function kr(t){return t.L_||(t.L_=function(n,r,s){const i=te(n);return i.V_(),new YL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:iV.bind(null,t),Eo:lV.bind(null,t),E_:oV.bind(null,t),T_:aV.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await iu(t)):(await t.L_.stop(),t.C_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new up(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hp(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),ya(t))return new U(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.k_=new xe(G.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):X():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class di{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new di(e,n,ei.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this.Q_=void 0,this.listeners=[]}}class hV{constructor(){this.queries=new Ri(e=>BT(e),Jc),this.onlineState="Unknown",this.K_=new Set}}async function dV(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new uV),s)try{i.Q_=await n.onListen(r)}catch(o){const a=hp(o,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&dp(n)}async function fV(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function pV(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&dp(n)}function mV(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function dp(t){t.K_.forEach(e=>{e.next()})}class gV{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.key=e}}class TI{constructor(e){this.key=e}}class _V{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=le(),this.mutatedKeys=le(),this.ua=jT(e),this.ca=new ei(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new R_,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Zc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?g!==E&&(r.track({type:3,doc:p}),v=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),v=!0,(l&&this.ua(p,l)>0||c&&this.ua(p,c)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((c,u)=>function(d,p){const g=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return g(d)-g(p)}(c.type,u.type)||this.ua(c.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,i.length!==0||l?{snapshot:new di(this.query,e.ca,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new R_,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=le(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new TI(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new wI(r))}),n}Ra(e){this.oa=e.Ps,this.aa=le();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return di.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class yV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vV{constructor(e){this.key=e,this.ma=!1}}class EV{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ri(a=>BT(a),Jc),this.pa=new Map,this.ya=new Set,this.wa=new xe(G.comparator),this.Sa=new Map,this.ba=new sp,this.Da={},this.Ca=new Map,this.va=hi.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function wV(t,e){const n=NV(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await jL(n.localStore,Pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await TV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&pI(n.remoteStore,o)}return s}async function TV(t,e,n,r,s){t.Ma=(h,d,p)=>async function(E,v,A,O){let k=v.view.ha(A);k.es&&(k=await w_(E.localStore,v.query,!1).then(({documents:me})=>v.view.ha(me,k)));const K=O&&O.targetChanges.get(v.targetId),$=v.view.applyChanges(k,E.isPrimaryClient,K);return C_(E,v.targetId,$.Ea),$.snapshot}(t,h,d,p);const i=await w_(t.localStore,e,!0),o=new _V(e,i.Ps),a=o.ha(i.documents),l=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);C_(t,n,c.Ea);const u=new yV(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),c.snapshot}async function IV(t,e){const n=te(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Jc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mI(n.remoteStore,r.targetId),_d(n,r.targetId)}).catch(_a)):(_d(n,r.targetId),await gd(n.localStore,r.targetId,!0))}async function bV(t,e,n){const r=OV(t);try{const s=await function(o,a){const l=te(o),c=Ge.now(),u=a.reduce((p,g)=>p.add(g.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let g=Yn(),E=le();return l._s.getEntries(p,u).next(v=>{g=v,g.forEach((A,O)=>{O.isValidDocument()||(E=E.add(A))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,g)).next(v=>{h=v;const A=[];for(const O of a){const k=zM(O,h.get(O.key).overlayedDocument);k!=null&&A.push(new Mr(O.key,k,NT(k.value.mapValue),kn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,A,a)}).next(v=>{d=v;const A=v.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(p,v.batchId,A)})}).then(()=>({batchId:d.batchId,changes:qT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new xe(ge)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ia(r,s.changes),await iu(r.remoteStore)}catch(s){const i=hp(s,"Failed to persist write");n.reject(i)}}async function II(t,e){const n=te(t);try{const r=await UL(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Pe(o.ma):s.removedDocuments.size>0&&(Pe(o.ma),o.ma=!1))}),await Ia(n,r,e)}catch(r){await _a(r)}}function A_(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(c=!0)}),c&&dp(l)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RV(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new xe(G.comparator);o=o.insert(i,ht.newNoDocument(i,ee.min()));const a=le().add(i),l=new nu(ee.min(),new Map,new xe(ge),o,a);await II(r,l),r.wa=r.wa.remove(i),r.Sa.delete(e),fp(r)}else await gd(r.localStore,e,!1).then(()=>_d(r,e,n)).catch(_a)}async function AV(t,e){const n=te(t),r=e.batch.batchId;try{const s=await FL(n.localStore,e);RI(n,r,null),bI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ia(n,s)}catch(s){await _a(s)}}async function CV(t,e,n){const r=te(t);try{const s=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Pe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);RI(r,e,n),bI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ia(r,s)}catch(s){await _a(s)}}function bI(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function RI(t,e,n){const r=te(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function _d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||AI(t,r)})}function AI(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(mI(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),fp(t))}function C_(t,e,n){for(const r of n)r instanceof wI?(t.ba.addReference(r.key,e),SV(t,r)):r instanceof TI?(W("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||AI(t,r.key)):X()}function SV(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(W("SyncEngine","New document in limbo: "+n),t.ya.add(r),fp(t))}function fp(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new G(Se.fromString(e)),r=t.va.next();t.Sa.set(r,new vV(n)),t.wa=t.wa.insert(n,r),pI(t.remoteStore,new pr(Pn(FT(n.path)),r,"TargetPurposeLimboResolution",Gf.ae))}}async function Ia(t,e,n){const r=te(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=op.$i(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(l,c){const u=te(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(c,d=>R.forEach(d.Qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.Ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ya(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const p=u.rs.get(d),g=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(g);u.rs=u.rs.insert(d,E)}}}(r.localStore,i))}async function PV(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await uI(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(l=>{l.reject(new U(I.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ia(n,r.cs)}}function kV(t,e){const n=te(t),r=n.Sa.get(e);if(r&&r.ma)return le().add(r.key);{let s=le();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function NV(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=II.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RV.bind(null,e),e.fa.c_=pV.bind(null,e.eventManager),e.fa.xa=mV.bind(null,e.eventManager),e}function OV(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CV.bind(null,e),e}class S_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VL(this.persistence,new ML,e.initialUser,this.serializer)}createPersistence(e){return new OL(ip.Jr,this.serializer)}createSharedClientState(e){return new qL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class DV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>A_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PV.bind(null,this.syncEngine),await cV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hV}()}createDatastore(e){const n=ru(e.databaseInfo.databaseId),r=function(i){return new GL(i)}(e.databaseInfo);return function(i,o,a,l){return new XL(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new ZL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>A_(this.syncEngine,n,0),function(){return I_.C()?new I_:new HL}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new EV(s,i,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);W("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ta(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xV{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=ST.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zu(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await uI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function P_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VV(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>b_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>b_(e.remoteStore,i)),t._onlineComponents=e}function LV(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function VV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await zu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!LV(n))throw n;ai("Error using user provided cache. Falling back to memory cache: "+n),await zu(t,new S_)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await zu(t,new S_);return t._offlineComponents}async function CI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await P_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await P_(t,new DV))),t._onlineComponents}function FV(t){return CI(t).then(e=>e.syncEngine)}async function UV(t){const e=await CI(t),n=e.eventManager;return n.onListen=wV.bind(null,e.syncEngine),n.onUnlisten=IV.bind(null,e.syncEngine),n}function $V(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new xV({next:d=>{o.enqueueAndForget(()=>fV(i,h)),d.fromCache&&l.source==="server"?c.reject(new U(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new gV(a,u,{includeMetadataChanges:!0,Z_:!0});return dV(i,h)}(await UV(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function SI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e,n){if(!n)throw new U(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BV(t,e,n,r){if(e===!0&&r===!0)throw new U(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N_(t){if(!G.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O_(t){if(G.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function fi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(t);throw new U(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sM;switch(r.type){case"firstParty":return new lM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=k_.get(n);r&&(W("ComponentProvider","Removing Datastore"),k_.delete(n),r.terminate())}(this),Promise.resolve()}}function jV(t,e,n,r={}){var s;const i=(t=fi(t,au))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=lt.MOCK_USER;else{a=Tv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(c)}t._authCredentials=new iM(new CT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class wr extends Ci{constructor(e,n,r){super(e,n,FT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new G(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function yd(t,e,...n){if(t=$e(t),PI("collection","path",e),t instanceof au){const r=Se.fromString(e,...n);return O_(r),new wr(t,null,r)}{if(!(t instanceof Lt||t instanceof wr))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return O_(r),new wr(t.firestore,null,r)}}function kI(t,e,...n){if(t=$e(t),arguments.length===1&&(e=ST.V()),PI("doc","path",e),t instanceof au){const r=Se.fromString(e,...n);return N_(r),new Lt(t,null,new G(r))}{if(!(t instanceof Lt||t instanceof wr))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return N_(r),new Lt(t.firestore,t instanceof wr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new dI(this,"async_queue_retry"),this.ou=()=>{const n=Ku();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Ku();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Er;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ya(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=up.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&X()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class lu extends au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new WV}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OI(this),this._firestoreClient.terminate()}}function qV(t,e){const n=typeof t=="object"?t:Ac(),r=typeof t=="string"?t:e||"(default)",s=Rc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vv("firestore");i&&jV(s,...i)}return s}function NI(t){return t._firestoreClient||OI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function OI(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new EM(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,SI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new MV(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(Et.fromBase64String(e))}catch(n){throw new U(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pi(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=/^__.*__$/;class KV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ea(e,this.data,n,this.fieldTransforms)}}class DI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class gp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new gp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return sc(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(xI(this.Tu)&&HV.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class zV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ru(e)}wu(e,n,r,s=!1){return new gp({Tu:e,methodName:n,yu:r,path:ft.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _p(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new zV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GV(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);yp("Data must be an object, but it was:",o,r);const a=MI(r,o);let l,c;if(i.merge)l=new Ot(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=vd(e,h,n);if(!o.contains(d))throw new U(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);VI(u,d)||u.push(d)}l=new Ot(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new KV(new Pt(a),l,c)}class uu extends pp{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uu}}function QV(t,e,n,r){const s=t.wu(1,e,n);yp("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();Ps(r,(l,c)=>{const u=vp(e,l,n);c=$e(c);const h=s.mu(u);if(c instanceof uu)i.push(u);else{const d=ba(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ot(i);return new DI(o,a,s.fieldTransforms)}function YV(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[vd(e,r,n)],l=[s];if(i.length%2!=0)throw new U(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(vd(e,i[d])),l.push(i[d+1]);const c=[],u=Pt.empty();for(let d=a.length-1;d>=0;--d)if(!VI(c,a[d])){const p=a[d];let g=l[d];g=$e(g);const E=o.mu(p);if(g instanceof uu)c.push(p);else{const v=ba(g,E);v!=null&&(c.push(p),u.set(p,v))}}const h=new Ot(c);return new DI(u,h,o.fieldTransforms)}function XV(t,e,n,r=!1){return ba(n,t.wu(r?4:3,e))}function ba(t,e){if(LI(t=$e(t)))return yp("Unsupported field value:",e,t),MI(t,e);if(t instanceof pp)return function(r,s){if(!xI(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ba(a,s.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BM(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:nc(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nc(s.serializer,i)}}if(r instanceof mp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:sI(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rp(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${ou(r)}`)}(t,e)}function MI(t,e){const n={};return PT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(t,(r,s)=>{const i=ba(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function LI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof mp||t instanceof pi||t instanceof Lt||t instanceof pp)}function yp(t,e,n){if(!LI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ou(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function vd(t,e,n){if((e=$e(e))instanceof cu)return e._internalPath;if(typeof e=="string")return vp(t,e);throw sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const JV=new RegExp("[~\\*/\\[\\]]");function vp(t,e,n){if(e.search(JV)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cu(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(I.INVALID_ARGUMENT,a+t+l)}function VI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(UI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZV extends FI{data(){return super.data()}}function UI(t,e){return typeof e=="string"?vp(t,e):e instanceof cu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ep{}class tF extends Ep{}function nF(t,e,...n){let r=[];e instanceof Ep&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Tp).length,a=i.filter(l=>l instanceof wp).length;if(o>1||o>0&&a>0)throw new U(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wp extends tF{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wp(e,n,r)}_apply(e){const n=this._parse(e);return $I(e._query,n),new Ci(e.firestore,e.converter,ud(e._query,n))}_parse(e){const n=_p(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){M_(h,u);const p=[];for(const g of h)p.push(x_(l,i,g));d={arrayValue:{values:p}}}else d=x_(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||M_(h,u),d=XV(a,o,h,u==="in"||u==="not-in");return He.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Tp extends Ep{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)$I(o,l),o=ud(o,l)}(e._query,n),new Ci(e.firestore,e.converter,ud(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function x_(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new U(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$T(e)&&n.indexOf("/")!==-1)throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!G.isDocumentKey(r))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return s_(t,new G(r))}if(n instanceof Lt)return s_(t,n._key);throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(n)}.`)}function M_(t,e){if(!Array.isArray(t)||t.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $I(t,e){if(e.isInequality()){const r=ep(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new U(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=UT(t);i!==null&&rF(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function rF(t,e,n){if(!n.isEqual(e))throw new U(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sF{convertValue(e,n="none"){switch(ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new mp(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Pe(cI(r));const s=new Ho(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oF extends FI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(UI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hl extends oF{data(e={}){return super.data(e)}}class aF{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ga(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hl(this._firestore,this._userDataWriter,r.key,r,new Ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new hl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ga(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new hl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ga(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:lF(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class cF extends sF{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function uF(t){t=fi(t,Ci);const e=fi(t.firestore,lu),n=NI(e),r=new cF(e);return eF(t._query),$V(n,t._query).then(s=>new aF(e,r,t,s))}function BI(t,e,n,...r){t=fi(t,Lt);const s=fi(t.firestore,lu),i=_p(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof cu?YV(i,"updateDoc",t._key,e,n,r):QV(i,"updateDoc",t._key,e),WI(s,[o.toMutation(t._key,kn.exists(!0))])}function jI(t,e){const n=fi(t.firestore,lu),r=kI(t),s=iF(t.converter,e);return WI(n,[GV(_p(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,kn.exists(!1))]).then(()=>r)}function WI(t,e){return function(r,s){const i=new Er;return r.asyncQueue.enqueueAndForget(async()=>bV(await FV(r),s,i)),i.promise}(NI(t),e)}(function(e,n=!0){(function(s){bi=s})(Or),xn(new ln("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new lu(new oM(r.getProvider("auth-internal")),new uM(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),xt(e_,"4.2.0",e),xt(e_,"4.2.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebasestorage.googleapis.com",HI="storageBucket",hF=2*60*1e3,dF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Ln{constructor(e,n,r=0){super(Gu(e),`Firebase Storage: ${n} (${Gu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Gu(t){return"storage/"+t}function Ip(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,t)}function fF(t){return new Ue(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pF(t){return new Ue(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Fe.UNAUTHENTICATED,t)}function gF(){return new Ue(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _F(t){return new Ue(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function yF(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function vF(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function EF(t){return new Ue(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function wF(t){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function TF(){return new Ue(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+HI+"' property when initializing the app?")}function IF(){return new Ue(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bF(){return new Ue(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RF(t){return new Ue(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ed(t){return new Ue(Fe.INVALID_ARGUMENT,t)}function KI(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function AF(t){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function go(t,e){return new Ue(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $i(t){throw new Ue(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw wF(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(K){K.path_=decodeURIComponent(K.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},E=n===qI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",A=new RegExp(`^https?://${E}/${s}/${v}`,"i"),k=[{regex:a,indices:l,postModify:i},{regex:p,indices:g,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let K=0;K<k.length;K++){const $=k[K],me=$.regex.exec(e);if(me){const Me=me[$.indices.bucket];let et=me[$.indices.path];et||(et=""),r=new Dt(Me,et),$.postModify(r);break}}if(r==null)throw EF(e);return r}}class CF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SF(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(p,l())},v)}function d(){i&&clearTimeout(i)}function p(v,...A){if(c){d();return}if(v){d(),u.call(null,v,...A);return}if(l()||o){d(),u.call(null,v,...A);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let g=!1;function E(v){g||(g=!0,d(),!c&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function PF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kF(t){return t!==void 0}function NF(t){return typeof t=="object"&&!Array.isArray(t)}function bp(t){return typeof t=="string"||t instanceof String}function L_(t){return Rp()&&t instanceof Blob}function Rp(){return typeof Blob<"u"&&!lS()}function V_(t,e,n,r){if(r<e)throw Ed(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ed(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function zI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var os;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(os||(os={}));/**
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
 */function OF(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Qa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===os.NO_ERROR,l=i.getStatus();if(!a||OF(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===os.ABORT;r(!1,new Qa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Qa(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());kF(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Ip();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?KI():vF();o(l)}else{const l=yF();o(l)}};this.canceled_?n(!1,new Qa(!1,null,!0)):this.backoffId_=SF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FF(t,e,n,r,s,i,o=!0){const a=zI(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return LF(c,e),xF(c,n),MF(c,i),VF(c,r),new DF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $F(...t){const e=UF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rp())return new Blob(t);throw new Ue(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function jF(t){if(typeof atob>"u")throw RF("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qu{constructor(e,n){this.data=e,this.contentType=n||null}}function WF(t,e){switch(t){case Rn.RAW:return new Qu(GI(e));case Rn.BASE64:case Rn.BASE64URL:return new Qu(QI(t,e));case Rn.DATA_URL:return new Qu(HF(e),KF(e))}throw Ip()}function GI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qF(t){let e;try{e=decodeURIComponent(t)}catch{throw go(Rn.DATA_URL,"Malformed data URL.")}return GI(e)}function QI(t,e){switch(t){case Rn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw go(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw go(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jF(e)}catch(s){throw s.message.includes("polyfill")?s:go(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class YI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw go(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HF(t){const e=new YI(t);return e.base64?QI(Rn.BASE64,e.rest):qF(e.rest)}function KF(t){return new YI(t).contentType}function zF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){let r=0,s="";L_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(L_(this.data_)){const r=this.data_,s=BF(r,e,n);return s===null?null:new fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(Rp()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr($F.apply(null,n))}else{const n=e.map(o=>bp(o)?WF(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new fr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){let e;try{e=JSON.parse(t)}catch{return null}return NF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function JI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t,e){return e}class Tt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||YF}}let Ya=null;function XF(t){return!bp(t)||t.length<2?t:JI(t)}function ZI(){if(Ya)return Ya;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return XF(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Tt("size");return s.xform=r,t.push(s),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),Ya=t,Ya}function JF(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Dt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ZF(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return JF(r,t),r}function eb(t,e,n){const r=XI(e);return r===null?null:ZF(t,r,n)}function eU(t,e,n,r){const s=XI(e);if(s===null||!bp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Ap(d,n,r),g=zI({alt:"media",token:c});return p+g})[0]}function tU(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class tb{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t){if(!t)throw Ip()}function nU(t,e){function n(r,s){const i=eb(t,s,e);return nb(i!==null),i}return n}function rU(t,e){function n(r,s){const i=eb(t,s,e);return nb(i!==null),eU(i,s,t.host,t._protocol)}return n}function rb(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=gF():s=mF():n.getStatus()===402?s=pF(t.bucket):n.getStatus()===403?s=_F(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function sU(t){const e=rb(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=fF(t.path)),i.serverResponse=s.serverResponse,i}return n}function iU(t,e,n){const r=e.fullServerUrl(),s=Ap(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new tb(s,i,rU(t,n),o);return a.errorHandler=sU(e),a}function oU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function aU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=oU(null,e)),r}function lU(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let K=0;K<2;K++)k=k+Math.random().toString().slice(2);return k}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=aU(e,r,s),u=tU(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=fr.getBlob(h,r,d);if(p===null)throw IF();const g={name:c.fullPath},E=Ap(i,t.host,t._protocol),v="POST",A=t.maxUploadRetryTime,O=new tb(E,v,nU(t,n),A);return O.urlParams=g,O.headers=o,O.body=p.uploadData(),O.errorHandler=rb(e),O}class cU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=os.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=os.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=os.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw $i("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $i("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $i("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $i("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $i("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uU extends cU{initXhr(){this.xhr_.responseType="text"}}function sb(){return new uU}/**
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
 */class vs{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vs(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JI(this._location.path)}get storage(){return this._service}get parent(){const e=GF(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new vs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw AF(e)}}function hU(t,e,n){t._throwIfRoot("uploadBytes");const r=lU(t.storage,t._location,ZI(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,sb).then(s=>({metadata:s,ref:t}))}function dU(t){t._throwIfRoot("getDownloadURL");const e=iU(t.storage,t._location,ZI());return t.storage.makeRequestWithTokens(e,sb).then(n=>{if(n===null)throw bF();return n})}function fU(t,e){const n=QF(t._location.path,e),r=new Dt(t._location.bucket,n);return new vs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(t){return/^[A-Za-z]+:\/\//.test(t)}function mU(t,e){return new vs(t,e)}function ib(t,e){if(t instanceof Cp){const n=t;if(n._bucket==null)throw TF();const r=new vs(n,n._bucket);return e!=null?ib(r,e):r}else return e!==void 0?fU(t,e):t}function gU(t,e){if(e&&pU(e)){if(t instanceof Cp)return mU(t,e);throw Ed("To use ref(service, url), the first argument must be a Storage instance.")}else return ib(t,e)}function F_(t,e){const n=e==null?void 0:e[HI];return n==null?null:Dt.makeFromBucketSpec(n,t)}function _U(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Tv(s,t.app.options.projectId))}class Cp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=qI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hF,this._maxUploadRetryTime=dF,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=F_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=F_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new CF(KI());{const o=FF(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const U_="@firebase/storage",$_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="storage";function ab(t,e,n){return t=$e(t),hU(t,e,n)}function lb(t){return t=$e(t),dU(t)}function cb(t,e){return t=$e(t),gU(t,e)}function ub(t=Ac(),e){t=$e(t);const r=Rc(t,ob).getImmediate({identifier:e}),s=vv("storage");return s&&yU(r,...s),r}function yU(t,e,n,r={}){_U(t,e,n,r)}function vU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Cp(n,r,s,e,Or)}function EU(){xn(new ln(ob,vU,"PUBLIC").setMultipleInstances(!0)),xt(U_,$_,""),xt(U_,$_,"esm2017")}EU();function wU(t){return(e,n)=>{const r=uO(e,n).run(()=>hy(t));hO.set(e,r),fO(r,e)}}function TU(t,{firebaseApp:e,modules:n=[]}){t.provide(fE,e);for(const r of n)r(e,t)}const Lr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},IU={data(){return{user:null}},watch:{$route(t,e){this.user=localStorage.getItem("userCredential")}},created(){this.user=localStorage.getItem("userCredential")}},bU={class:"container-fluid"},RU=x("a",{class:"navbar-brand",href:"#"},"Freehua",-1),AU=x("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[x("span",{class:"navbar-toggler-icon"})],-1),CU={class:"collapse navbar-collapse",id:"navbarNav"},SU=FA('<ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Início</a></li><li class="nav-item"><a class="nav-link" href="#">Aplicativo</a></li><li class="nav-item"><a class="nav-link" href="#">Sobre</a></li></ul>',1),PU={class:"container d-flex justify-content-end"},kU={key:0},NU=x("button",{type:"button",class:"btn btn-secondary ms-auto"}," Painel ",-1),OU={key:1},DU=x("button",{type:"button",class:"btn btn-primary ms-auto"}," Entrar ",-1);function xU(t,e,n,r,s,i){const o=Ts("router-link");return Ht(),Kt("nav",{class:"navbar navbar-expand-sm bg-body-tertiary fixed-top",key:s.user},[x("div",bU,[Oe(o,{to:"/"},{default:sn(()=>[RU]),_:1}),AU,x("div",CU,[SU,x("div",PU,[s.user?(Ht(),Kt("div",kU,[Oe(o,{to:"/dashboard"},{default:sn(()=>[NU]),_:1})])):(Ht(),Kt("div",OU,[Oe(o,{to:"/login"},{default:sn(()=>[DU]),_:1})]))])])])])}const MU=Lr(IU,[["render",xU],["__file","/home/gabriel/freehua-web/src/components/Navbar.vue"]]),LU={__name:"App",setup(t){return(e,n)=>{const r=Ts("router-view");return Ht(),Kt(jt,null,[Oe(MU),Oe(r)],64)}}},VU=Lr(LU,[["__file","/home/gabriel/freehua-web/src/App.vue"]]),FU={apiKey:"AIzaSyDZe5Afwd4IF8O0sjGx8UBlJprasm20-Qk",authDomain:"freehua-db.firebaseapp.com",projectId:"freehua-db",storageBucket:"freehua-db.appspot.com",messagingSenderId:"912869104324",appId:"1:912869104324:web:867e8d751670c004fb0791",measurementId:"G-S0D7E23XXE"},hb=Pv(FU),dl=qV(hb),UU={methods:{logoff(){localStorage.removeItem("userCredential")}}},$U={class:"mt-4"},BU=x("button",{type:"button",class:"btn btn-lg btn-primary"},"Novo livro",-1),jU=x("button",{type:"button",class:"btn btn-lg btn-primary ms-4"}," Novo capitulo ",-1);function WU(t,e,n,r,s,i){const o=Ts("router-link");return Ht(),Kt("div",$U,[Oe(o,{to:"/upload"},{default:sn(()=>[BU]),_:1}),Oe(o,{to:"/update"},{default:sn(()=>[jU]),_:1}),Oe(o,{to:"/login"},{default:sn(()=>[x("button",{onClick:e[0]||(e[0]=(...a)=>i.logoff&&i.logoff(...a)),type:"button",class:"btn btn-danger ms-4"}," Sair ")]),_:1})])}const qU=Lr(UU,[["render",WU],["__file","/home/gabriel/freehua-web/src/pages/Dashboard.vue"]]),HU={};function KU(t,e){return Ht(),Kt("h1",null,"casa")}const zU=Lr(HU,[["render",KU],["__file","/home/gabriel/freehua-web/src/pages/Home.vue"]]),db=uE();function GU(t,e){return bk(db,t,e).then(n=>(localStorage.userCredential=JSON.stringify(n.user),n.user)).catch(n=>(alert(n.message),null))}const QU=(t,e)=>Ik(db,t,e).then(n=>{const r=n.user;return alert("Perfil criado com sucesso"),r}).catch(n=>(alert(n.message),null)),YU={data(){return{email:"",password:""}},methods:{async submit(){await GU(this.email,this.password)&&this.$router.push("/dashboard")}}},XU={class:"container-fluid border rounded border-secondary p-4"},JU=x("h2",null,"Login",-1),ZU={class:"form-group my-4"},e2={class:"form-group my-4"},t2={class:"container-fluid"},n2=x("button",{type:"submit",class:"btn btn-primary btn-lg mx-2"}," Registrar ",-1);function r2(t,e,n,r,s,i){const o=Ts("router-link");return Ht(),Kt("div",XU,[x("form",null,[JU,x("div",ZU,[Jt(x("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a),placeholder:"Email"},null,512),[[gr,s.email]])]),x("div",e2,[Jt(x("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),placeholder:"Senha"},null,512),[[gr,s.password]])]),x("div",t2,[x("button",{type:"submit",class:"btn btn-primary btn-lg",onClick:e[2]||(e[2]=Ec((...a)=>i.submit&&i.submit(...a),["prevent"]))}," Logar "),Oe(o,{to:"/register"},{default:sn(()=>[n2]),_:1})])])])}const s2=Lr(YU,[["render",r2],["__file","/home/gabriel/freehua-web/src/pages/Login.vue"]]),i2={data(){return{email:"",password:"",confirmation:""}},methods:{submit(){if(this.confirmation!==this.password)return alert("Senhas não condizem"),null;if(this.email==""|this.password=="")return alert("Preencha tudo"),null;QU(this.email,this.password)&&this.$router.push("/login")}}},o2={class:"container-fluid border rounded border-secondary p-4"},a2=x("h2",null,"Cadastro",-1),l2={class:"form-group my-4"},c2={class:"form-group my-4"},u2={class:"form-group my-4"},h2={class:"container-fluid"},d2=x("button",{type:"submit",class:"btn btn-secondary btn-md ms-4"}," Voltar ",-1);function f2(t,e,n,r,s,i){const o=Ts("router-link");return Ht(),Kt("div",o2,[x("form",null,[a2,x("div",l2,[Jt(x("input",{type:"email",class:"form-control form-control-lg","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a),placeholder:"Email"},null,512),[[gr,s.email]])]),x("div",c2,[Jt(x("input",{type:"password",class:"form-control form-control-lg","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),placeholder:"Senha"},null,512),[[gr,s.password]])]),x("div",u2,[Jt(x("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.confirmation=a),type:"password",class:"form-control form-control-lg",placeholder:"Confirme senha"},null,512),[[gr,s.confirmation]])]),x("div",h2,[x("button",{onClick:e[3]||(e[3]=Ec((...a)=>i.submit&&i.submit(...a),["prevent"])),type:"submit",class:"btn btn-primary btn-lg"}," Simbora! "),Oe(o,{to:"/login"},{default:sn(()=>[d2]),_:1})])])])}const p2=Lr(i2,[["render",f2],["__file","/home/gabriel/freehua-web/src/pages/Register.vue"]]),m2={class:"container pt-5"},g2={class:"row"},_2={class:"col-md-6"},y2={class:"form-group mb-4"},v2=x("label",{class:"mb-2"},"Nome da obra",-1),E2={class:"form-group mb-4"},w2=x("label",{class:"mb-2"},"Tipo do livro",-1),T2=x("option",{value:"manhua"},"Manhuá (China)",-1),I2=x("option",{value:"manhwa"},"Manhwa (Coréia)",-1),b2=[T2,I2],R2={class:"col-md-6"},A2={class:"form-group mb-4"},C2=x("label",{class:"mb-2"},"Gênero",-1),S2=x("option",{value:"adventure"},"Aventura",-1),P2=x("option",{value:"romance"},"Romance",-1),k2=x("option",{value:"xianxia"},"Cultivo (Xianxia)",-1),N2=[S2,P2,k2],O2={class:"form-group"},D2=x("label",{class:"mb-2"},"Autor(a)",-1),x2={class:"row"},M2={class:"col-md-12 mt-3"},L2={class:"form-group mb-4"},V2=x("label",{class:"mb-2"},"Sumário",-1),F2={class:"form-group mb-4"},U2=x("label",{class:"mb-2"},"Imagem da Capa",-1),$2=x("button",{class:"btn btn-secondary ms-4"},"Voltar",-1),B2={data(){return{book_genre:"",book_summary:"",book_author:"",book_title:"",book_type:"",book_cover:null}},methods:{async submit(){if(this.book_type===""||this.book_title===""||this.book_genre===""||this.book_summary===""||this.book_author===""||this.book_cover===null)return alert("Preencha tudo"),null;try{const t=await jI(yd(dl,"books"),{artists:this.book_author,summary:this.book_summary,tags:this.book_genre,title:this.book_title,type:this.book_type}),e=ub(),n=cb(e,`images/cover_${t.id}`),r=await ab(n,this.book_cover),i={cover_url:await lb(n)},o=await BI(t,i);alert(this.book_title+" FOI CRIADO COM SUCESSO")}catch(t){alert(t)}},handleCoverChange(t){this.book_cover=t.target.files[0]}}},j2=Object.assign(B2,{__name:"Upload",setup(t){return(e,n)=>{const r=Ts("router-link");return Ht(),Kt("div",m2,[x("div",g2,[x("div",_2,[x("form",null,[x("div",y2,[v2,Jt(x("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.book_title=s),type:"text",class:"form-control",placeholder:"Solo Leveling"},null,512),[[gr,e.book_title]])]),x("div",E2,[w2,Jt(x("select",{"onUpdate:modelValue":n[1]||(n[1]=s=>e.book_type=s),class:"form-control"},b2,512),[[gh,e.book_type]])])])]),x("div",R2,[x("form",null,[x("div",A2,[C2,Jt(x("select",{"onUpdate:modelValue":n[2]||(n[2]=s=>e.book_genre=s),class:"form-control"},N2,512),[[gh,e.book_genre]])]),x("div",O2,[D2,Jt(x("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>e.book_author=s),type:"text",class:"form-control",placeholder:"Hwonbu"},null,512),[[gr,e.book_author]])])])])]),x("div",x2,[x("div",M2,[x("div",L2,[V2,Jt(x("textarea",{"onUpdate:modelValue":n[4]||(n[4]=s=>e.book_summary=s),class:"form-control",cols:"30",rows:"4",placeholder:"Em um colégio técnico, jovens alunos da ETEC Taboão da Serra descobrem poderes extraordinários que transformam o simples arroz doce da merenda em elaboradas obras de arte com classificação máxima."},null,512),[[gr,e.book_summary]])]),x("div",F2,[U2,x("input",{class:"form-control",type:"file",onChange:n[5]||(n[5]=(...s)=>e.handleCoverChange&&e.handleCoverChange(...s)),accept:".jpg,.jpeg"},null,32)]),x("button",{onClick:n[6]||(n[6]=Ec((...s)=>e.submit&&e.submit(...s),["prevent"])),type:"submit",class:"btn btn-primary btn-lg"}," Criar livro "),Oe(r,{to:"/dashboard"},{default:sn(()=>[$2]),_:1})])])])}}}),W2=Lr(j2,[["__file","/home/gabriel/freehua-web/src/pages/Upload.vue"]]),q2={class:"container pt-5"},H2={class:"mb-3"},K2=x("label",{for:"bookSelector",class:"form-label"},"Livro selecionado",-1),z2=x("option",{value:"",disabled:""}," Selecione o livro ao qual pertence o capítulo ",-1),G2=["value"],Q2={class:"mb-4"},Y2=x("label",{for:"bookCover",class:"form-label"},"PDF do capítulo",-1),X2=x("button",{type:"submit",class:"btn btn-primary btn-lg"},"Adicionar capítulo",-1),J2=x("button",{class:"btn btn-secondary ms-4"},"Voltar",-1),Z2={data(){return{library:[],chapterParent:null,chapterFile:null,chapterTitle:""}},created(){this.fetchLibrary()},methods:{async fetchLibrary(){const t=nF(yd(dl,"books"));try{(await uF(t)).forEach(n=>{const r={id:n.id,title:n.data().title};this.library.push(r)})}catch(e){alert(e)}},async submit(){if(this.chapterParent===null||this.chapterFile===null)return alert("Insira tudo"),null;const t=JSON.parse(localStorage.getItem("userCredential"))||{},e=t.uid?t.uid.toString():null;try{const n=await jI(yd(dl,"chapters"),{parent:kI(dl,"books/"+this.chapterParent),title:this.chapterTitle,poster:e,release:new Date}),r=ub(),s=cb(r,`releases/chapter_${n.id}`),i=await ab(s,this.chapterFile),a={content_url:await lb(s)},l=await BI(n,a);alert("CAPITULO INSERIDO")}catch(n){alert(n)}},handleChapterChange(t){this.chapterFile=t.target.files[0]}}},e$=Object.assign(Z2,{__name:"Update",setup(t){return(e,n)=>{const r=Ts("router-link");return Ht(),Kt("div",q2,[x("form",{onSubmit:n[2]||(n[2]=Ec((...s)=>e.submit&&e.submit(...s),["prevent"]))},[x("div",H2,[K2,Jt(x("select",{"onUpdate:modelValue":n[0]||(n[0]=s=>e.chapterParent=s),class:"form-select",id:"bookSelector"},[z2,(Ht(!0),Kt(jt,null,sA(e.library,s=>(Ht(),Kt("option",{key:s.id,value:s.id},Nb(s.title),9,G2))),128))],512),[[gh,e.chapterParent]])]),x("div",Q2,[Y2,x("input",{type:"file",class:"form-control",onChange:n[1]||(n[1]=(...s)=>e.handleChapterChange&&e.handleChapterChange(...s)),accept:".pdf"},null,32)]),X2,Oe(r,{to:"/dashboard"},{default:sn(()=>[J2]),_:1})],32)])}}}),t$=Lr(e$,[["__file","/home/gabriel/freehua-web/src/pages/Update.vue"]]),fb=J0({history:XC(),routes:[{path:"/login",name:"Login",component:s2},{path:"/",name:"Home",component:zU},{path:"/register",name:"Register",component:p2},{path:"/dashboard",name:"Dashboard",component:qU,meta:{requiresAuth:!0}},{path:"/upload",name:"Upload",component:W2,meta:{requiresAuth:!0}},{path:"/update",name:"Update",component:t$,meta:{requiresAuth:!0}}]});fb.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=localStorage.getItem("userCredential");r&&!s?n("/"):n()});TC(VU).use(fb).use(TU,{firebaseApp:hb,modules:[wU()]}).mount("#app");
