(()=>{"use strict";const t={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},e=t=>1e3*t,n=()=>{},i=t=>t;function a(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}const s=t=>t(),r=(e,n,i=t.duration)=>new Proxy({animations:e.map(s).filter(Boolean),duration:i,options:n},o),o={get:(t,e)=>{const i=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return((null==i?void 0:i[e])||0)/1e3;case"playbackRate":case"playState":return null==i?void 0:i[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(l)).catch(n)),t.finished;case"stop":return()=>{t.animations.forEach((t=>a(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==i?void 0:i[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,n,i)=>{switch(n){case"currentTime":i=e(i);case"playbackRate":for(let e=0;e<t.animations.length;e++)t.animations[e][n]=i;return!0}return!1}},l=t=>t.finished,c=t=>"object"==typeof t&&Boolean(t.createAnimation),u=t=>"number"==typeof t,f=t=>Array.isArray(t)&&!u(t[0]),h=(t,e,n)=>-n*t+n*e+t,d=(t,e,n)=>e-t==0?1:(n-t)/(e-t);function m(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const a=d(0,e,i);t.push(h(n,1,a))}}const p=(t,e,n)=>Math.min(Math.max(n,t),e);const y=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t;function g(t,e,n,a){if(t===e&&n===a)return i;return i=>0===i||1===i?i:y(function(t,e,n,i,a){let s,r,o=0;do{r=e+(n-e)/2,s=y(r,i,a)-t,s>0?n=r:e=r}while(Math.abs(s)>1e-7&&++o<12);return r}(i,0,1,t,n),e,a)}const v=t=>"function"==typeof t,b=t=>Array.isArray(t)&&u(t[0]),T={ease:g(.25,.1,.25,1),"ease-in":g(.42,0,1,1),"ease-in-out":g(.42,0,.58,1),"ease-out":g(0,0,.58,1)},w=/\((.*?)\)/;function A(t){if(v(t))return t;if(b(t))return g(...t);const e=T[t];if(e)return e;if(t.startsWith("steps")){const e=w.exec(t);if(e){const t=e[1].split(",");return((t,e="end")=>n=>{const i=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,a="end"===e?Math.floor(i):Math.ceil(i);return p(0,1,a/t)})(parseFloat(t[0]),t[1].trim())}}return i}class S{constructor(e,n=[0,1],{easing:a,duration:s=t.duration,delay:r=t.delay,endDelay:o=t.endDelay,repeat:l=t.repeat,offset:u,direction:y="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=i,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),a=a||t.easing,c(a)){const t=a.createAnimation(n);a=t.easing,n=t.keyframes||n,s=t.duration||s}this.repeat=l,this.easing=f(a)?i:A(a),this.updateDuration(s);const v=function(t,e=function(t){const e=[0];return m(e,t-1),e}(t.length),n=i){const a=t.length,s=a-e.length;return s>0&&m(e,s),i=>{let s=0;for(;s<a-2&&!(i<e[s+1]);s++);let r=p(0,1,d(e[s],e[s+1],i));const o=function(t,e){return f(t)?t[((t,e,n)=>{const i=e-0;return((n-0)%i+i)%i+0})(0,t.length,e)]:t}(n,s);return r=o(r),h(t[s],t[s+1],r)}}(n,u,f(a)?a.map(A):i);this.tick=t=>{var n;let i=0;i=void 0!==this.pauseTime?this.pauseTime:(t-this.startTime)*this.rate,this.t=i,i/=1e3,i=Math.max(i-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(i=this.totalDuration);const a=i/this.duration;let s=Math.floor(a),l=a%1;!l&&a>=1&&(l=1),1===l&&s--;const c=s%2;("reverse"===y||"alternate"===y&&c||"alternate-reverse"===y&&!c)&&(l=1-l);const u=i>=this.totalDuration?1:Math.min(l,1),f=v(this.easing(u));e(f),void 0===this.pauseTime&&("finished"===this.playState||i>=this.totalDuration+o)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,f)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}class E{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const L=new WeakMap;function _(t){return L.has(t)||L.set(t,{transforms:[],values:new Map}),L.get(t)}const M=["","X","Y","Z"],D={x:"translateX",y:"translateY",z:"translateZ"},x={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},k={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:x,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:i},skew:x},O=new Map,$=t=>`--motion-${t}`,j=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{M.forEach((e=>{j.push(t+e),O.set($(t+e),k[t])}))}));const q=(t,e)=>j.indexOf(t)-j.indexOf(e),R=new Set(j),P=t=>R.has(t),B=(t,e)=>`${t} ${e}(var(${$(e)}))`,V=t=>t.startsWith("--"),W=new Set,H=(t,e)=>document.createElement("div").animate(t,e),I={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{H({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(H({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{H({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},N={},C={};for(const t in I)C[t]=()=>(void 0===N[t]&&(N[t]=I[t]()),N[t]);const U=(e,n)=>v(e)?C.linearEasing()?`linear(${((t,e)=>{let n="";const i=Math.round(e/.015);for(let e=0;e<i;e++)n+=t(d(0,i-1,e))+", ";return n.substring(0,n.length-2)})(e,n)})`:t.easing:b(e)?F(e):e,F=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;function z(t){return D[t]&&(t=D[t]),P(t)?$(t):t}const X=(t,e,n)=>{e=z(e),V(e)?t.style.setProperty(e,n):t.style[e]=n};function K(s,r,o,l={},h){const d=window.__MOTION_DEV_TOOLS_RECORD,m=!1!==l.record&&d;let p,{duration:y=t.duration,delay:g=t.delay,endDelay:b=t.endDelay,repeat:T=t.repeat,easing:w=t.easing,persist:A=!1,direction:S,offset:L,allowWebkitAcceleration:M=!1,autoplay:x=!0}=l;const k=_(s),$=P(r);let j=C.waapi();$&&((t,e)=>{D[e]&&(e=D[e]);const{transforms:n}=_(t);var i,a;a=e,-1===(i=n).indexOf(a)&&i.push(a),t.style.transform=(t=>t.sort(q).reduce(B,"").trim())(n)})(s,r);const R=z(r),H=function(t,e){return t.has(e)||t.set(e,new E),t.get(e)}(k.values,R),I=O.get(R);return a(H.animation,!(c(w)&&H.generator)&&!1!==l.record),()=>{const t=()=>{var t,e;return null!==(e=null!==(t=((t,e)=>{e=z(e);let n=V(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=O.get(e);t&&(n=t.initialValue)}return n})(s,R))&&void 0!==t?t:null==I?void 0:I.initialValue)&&void 0!==e?e:0};let a=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}((t=>Array.isArray(t)?t:[t])(o),t);const E=function(t,e){var n;let a=(null==e?void 0:e.toDefaultUnit)||i;const s=t[t.length-1];if("string"==typeof s){const t=(null===(n=s.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(a=e=>e+t)}return a}(a,I);if(c(w)){const e=w.createAnimation(a,"opacity"!==r,t,R,H);w=e.easing,a=e.keyframes||a,y=e.duration||y}if(V(R)&&(C.cssRegisterProperty()?function(t){if(!W.has(t)){W.add(t);try{const{syntax:e,initialValue:n}=O.has(t)?O.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(R):j=!1),$&&!C.linearEasing()&&(v(w)||f(w)&&w.some(v))&&(j=!1),j){I&&(a=a.map((t=>u(t)?I.toDefaultUnit(t):t))),1!==a.length||C.partialKeyframes()&&!m||a.unshift(t());const i={delay:e(g),duration:e(y),endDelay:e(b),easing:f(w)?void 0:U(w,y),direction:S,iterations:T+1,fill:"both"};p=s.animate({[R]:a,offset:L,easing:f(w)?w.map((t=>U(t,y))):void 0},i),p.finished||(p.finished=new Promise(((t,e)=>{p.onfinish=t,p.oncancel=e})));const r=a[a.length-1];p.finished.then((()=>{A||(X(s,R,r),p.cancel())})).catch(n),M||(p.playbackRate=1.000001)}else if(h&&$)a=a.map((t=>"string"==typeof t?parseFloat(t):t)),1===a.length&&a.unshift(parseFloat(t())),p=new h((t=>{X(s,R,E?E(t):t)}),a,Object.assign(Object.assign({},l),{duration:y,easing:w}));else{const t=a[a.length-1];X(s,R,I&&u(t)?I.toDefaultUnit(t):t)}return m&&d(s,r,a,{duration:y,delay:g,easing:w,repeat:T,offset:L},"motion-one"),H.setAnimation(p),p&&!x&&p.pause(),p}}const Y=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function Z(t,e,n){return v(t)?t(e,n):t}const G=(J=S,function(t,e,n={}){const i=(t=function(t){return"string"==typeof t?t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}(t)).length;Boolean(i),Boolean(e);const a=[];for(let s=0;s<i;s++){const r=t[s];for(const t in e){const o=Y(n,t);o.delay=Z(o.delay,s,i);const l=K(r,t,e[t],o,J);a.push(l)}}return r(a,n,n.duration)});var J;function Q(t,e={}){return r([()=>{const n=new S(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function tt(t,e,n){return(v(t)?Q:G)(t,e,n)}function et(t){return(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")).replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,"")}!function(t){const e="top-menu__list-item",n="dropdown-menu",i="right",a="left",s="etc-list-item",r="dropdown-sub",o="dropdown-sub-menu",l='ul[data-sublist="etc-list"]',c=t,u=document.getElementById(c);if(!u)return void console.error("НЕ НАШЛИ МЕСТО ДЛЯ МЕНЮ",{anchor:t});const f=function(t,e,n,i){const a=function(){const t=document.createElement("li");return t.classList.add("dropdown","etc","top-menu__list-item"),t.innerHTML='<a href="#" rel="nofollow"><i class="icon-etc"><span></span><span></span><span></span></i>\n        </a>',t.setAttribute("data-menu","etc"),t}(),s=function(){const t=document.createElement("ul");return t.classList.add(n,"eliminate_list"),t.setAttribute("data-sublist","etc-list"),t}(),r=t.querySelectorAll(`.${e}`);if(r){if(r.length>6){const t=Array.from(r);for(let e=0;e<t.length;e++){let n=t[e];if(e>=6){const t=i(n);s.insertAdjacentHTML("afterbegin",t),n.remove()}}return a.append(s),a}return a}}(u,e,n,A),h=f.querySelector(l),d=u.closest(".top-menu");if(d&&h){u.insertAdjacentElement("beforeend",f);var m=y();isNaN(m)?console.error("Ширина главного меню не существует"):0!==m&&(T(u),b(u),window&&window.addEventListener("resize",(p=!1,function(){"none"!==d.style.display&&(p||(p=!0,setTimeout((()=>p=!1),100),T(u),b(u)))})))}var p;function y(){const t=g();var e=0;if(t&&t.length&&0!==t.length)return t.forEach((t=>{e+=t.offsetWidth})),e}function g(){return u.querySelectorAll(`.${e}`)}function v(){const t=h.querySelector(`${l}>.${s}`);if(!t)return;const c=function(t){{const e=t.querySelectorAll("ul");if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t];n.classList.remove(a),n.classList.add(i)}}let l=et(t.outerHTML);if(0!==l.length)return l=l.replace(s,e),l=l.replace(r,""),l=l.replace(o,n),l}(t);t.remove();const f=u.lastElementChild;"etc"===f.dataset.menu&&f.insertAdjacentHTML("beforebegin",c)}function b(t){if(t.offsetWidth>m+250)for(;t.offsetWidth>m+250;)v(),m=y()}function T(t){if(t.offsetWidth<m)for(;t.offsetWidth<m;)w(),m=y()}function w(){const t=g(),e=t[t.length-2];if(!e)return;const n=A(e);e.remove(),h.insertAdjacentHTML("afterbegin",n)}function A(t){{const e=t.querySelectorAll("ul");if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t];n.classList.remove(i),n.classList.add(a)}}let l=et(t.outerHTML);if(0!==l.length)return l=l.replace(e,`${r} ${s}`),l=l.replaceAll(n,o),l}}("menu"),function(t){var e=!1;const n=document.getElementById(t);if(!n)return;if(!function(){const t=document.getElementById("open_mobile_menu");if(!t)return!1;const i=function(t){if(!t)return;const e='<button data-menu="close" class="mobile_menu__close_button">Закрыть</button>';return t.insertAdjacentHTML("beforeend",e),t.insertAdjacentHTML("afterbegin",e),t.querySelectorAll('[data-menu="close"]')}(n);return!(!i||0===i.length||(t.addEventListener("click",a),Array.from(i).forEach((t=>{t.addEventListener("click",a)})),0));function a(){n&&(e?(document.documentElement.style.overflow="auto",e=!1,n.style.transform="translateX(-100%)"):e||(document.documentElement.style.overflow="hidden",e=!0,n.style.transform="translateX(0%)"))}}())return;const i="mobile_menu__button--open",a="mobile_menu--list-open",s="mobile_menu__button",r='li[data-list="anchor"]';var o=null;n.addEventListener("click",(function(t){const e=t.target;if("svg"===e.tagName||"path"===e.tagName){let t=e.closest(`.${s}`);if(!t)return;o=t}else{if("BUTTON"!==e.tagName||!e.classList.contains(s))return;o=e}o.classList.contains(i)?function(){o.classList.remove(i);const t=o.closest(r);t||(o=null);var e=t.querySelector("ul");e&&(tt(e,{height:0},{duration:.7,easing:"ease-in"}),e.classList.remove(a),setTimeout((()=>e.style.display="none"),700),o=null)}():function(){o.classList.add(i);const t=o.closest(r);t||(o=null);var e=t.querySelector("ul");if(e){e.style.display="flex",e.style.height="100%",e.classList.add(a);{let t=e.getBoundingClientRect().height;e.style.height="0",e.style.display="flex",tt(e,{height:["0",`${t}px`]},{duration:.7,easing:"ease-in-out"})}o=null}}()}))}("mobile_menu")})();