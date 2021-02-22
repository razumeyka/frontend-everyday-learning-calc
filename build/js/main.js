/*! nouislider - 14.6.3 - 11/19/2020 */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var lt="14.6.3";function ut(t){t.parentElement.removeChild(t)}function a(t){return null!=t}function ct(t){t.preventDefault()}function o(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function pt(t,e,r){0<r&&(ht(t,e),setTimeout(function(){mt(t,e)},r))}function ft(t){return Math.max(Math.min(t,100),0)}function dt(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function ht(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function mt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function gt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function c(t,e){return 100/(e-t)}function p(t,e,r){return 100*e/(t[r+1]-t[r])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),s=t[o-1],a=t[o],l=e[o-1],u=e[o];return l+(i=r,p(n=[s,a],n[0]<0?i+Math.abs(n[0]):i-n[0],0)/c(l,u))}function n(t,e,r,n){if(100===n)return n;var i,o,s=f(n,t),a=t[s-1],l=t[s];return r?(l-a)/2<n-a?l:a:e[s-1]?t[s-1]+(i=n-t[s-1],o=e[s-1],Math.round(i/o)*o):n}function s(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' contains invalid value.");if(!o(n="min"===t?0:"max"===t?100:parseFloat(t))||!o(e[0]))throw new Error("noUiSlider ("+lt+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function l(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e,0)/c(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function i(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)s(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)l(n,this.xNumSteps[n],this)}i.prototype.getDistance=function(t){var e,r=[];for(e=0;e<this.xNumSteps.length-1;e++){var n=this.xNumSteps[e];if(n&&t/n%1!=0)throw new Error("noUiSlider ("+lt+"): 'limit', 'margin' and 'padding' of "+this.xPct[e]+"% range must be divisible by step.");r[e]=p(this.xVal,t,e)}return r},i.prototype.getAbsoluteDistance=function(t,e,r){var n,i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);r||t!==this.xPct[i+1]||i++;var o=1,s=e[i],a=0,l=0,u=0,c=0;for(n=r?(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);0<s;)a=this.xPct[i+1+c]-this.xPct[i+c],100<e[i+c]*o+100-100*n?(l=a*n,o=(s-100*n)/e[i+c],n=1):(l=e[i+c]*a/100*o,o=0),r?(u-=l,1<=this.xPct.length+c&&c--):(u+=l,1<=this.xPct.length-c&&c++),s=e[i+c]*o;return t+u},i.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},i.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],s=t[i],a=e[i-1],l=e[i];return n=[o,s],(r-a)*c(a,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},i.prototype.getStep=function(t){return t=n(this.xPct,this.xSteps,this.snap,t)},i.prototype.getDefaultStep=function(t,e,r){var n=f(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},i.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},i.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},i.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var u={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number},d={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},vt={tooltips:".__tooltips",aria:".__aria"};function h(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+lt+"): 'format' requires 'to' and 'from' methods.")}function m(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'step' is not numeric.");t.singleStep=e}function g(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function v(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function b(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+lt+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+lt+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new i(e,t.snap,t.singleStep)}function x(t,e){if(e=dt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+lt+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function S(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+lt+"): 'snap' option must be a boolean.")}function w(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+lt+"): 'animate' option must be a boolean.")}function y(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+lt+"): 'animationDuration' option must be a number.")}function E(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+lt+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function C(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+lt+"): 'orientation' option is invalid.")}}function P(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function N(t,e){if(!o(e))throw new Error("noUiSlider ("+lt+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+lt+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function k(t,e){var r;if(!o(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!o(e[0])&&!o(e[1]))throw new Error("noUiSlider ("+lt+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider ("+lt+"): 'padding' option must be a positive number(s).");var n=e[0]+e[1],i=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-i))throw new Error("noUiSlider ("+lt+"): 'padding' option must not exceed 100% of the range.")}}function U(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+lt+"): 'direction' option was not recognized.")}}function A(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+lt+"): 'fixed' behaviour must be used with 2 handles");P(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider ("+lt+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:s,unconstrained:a}}function V(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=dt(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+lt+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+lt+"): 'tooltips' must be passed a formatter or 'false'.")})}}function D(t,e){h(t.ariaFormat=e)}function M(t,e){h(t.format=e)}function O(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+lt+"): 'keyboardSupport' option must be a boolean.")}function L(t,e){t.documentElement=e}function z(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+lt+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function H(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+lt+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function bt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:m},keyboardPageMultiplier:{r:!1,t:g},keyboardDefaultStep:{r:!1,t:v},start:{r:!0,t:x},connect:{r:!0,t:E},direction:{r:!0,t:U},snap:{r:!1,t:S},animate:{r:!1,t:w},animationDuration:{r:!1,t:y},range:{r:!0,t:b},orientation:{r:!1,t:C},margin:{r:!1,t:P},limit:{r:!1,t:N},padding:{r:!1,t:k},behaviour:{r:!0,t:A},ariaFormat:{r:!1,t:D},format:{r:!1,t:M},tooltips:{r:!1,t:V},keyboardSupport:{r:!0,t:O},documentElement:{r:!1,t:L},cssPrefix:{r:!0,t:z},cssClasses:{r:!0,t:H}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:d,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!a(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+lt+"): '"+t+"' is required.");return!0}n[t].t(r,a(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,s=void 0!==t.style.transform;r.transformRule=s?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function j(t,b,o){var l,u,s,c,i,a,e,p,f=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},d=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),h=t,y=b.spectrum,x=[],S=[],m=[],g=0,v={},w=t.ownerDocument,E=b.documentElement||w.documentElement,C=w.body,P=-1,N=0,k=1,U=2,A="rtl"===w.dir||1===b.ort?0:100;function V(t,e){var r=w.createElement("div");return e&&ht(r,e),t.appendChild(r),r}function D(t,e){var r=V(t,b.cssClasses.origin),n=V(r,b.cssClasses.handle);return V(n,b.cssClasses.touchArea),n.setAttribute("data-handle",e),b.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(O()||L(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];b.dir&&!b.ort?r.reverse():b.ort&&!b.dir&&(n.reverse(),i.reverse());var s,a=t.key.replace("Arrow",""),l=a===i[0],u=a===i[1],c=a===n[0]||a===r[0]||l,p=a===n[1]||a===r[1]||u,f=a===o[0],d=a===o[1];if(!(c||p||f||d))return!0;if(t.preventDefault(),p||c){var h=b.keyboardPageMultiplier,m=c?0:1,g=at(e),v=g[m];if(null===v)return!1;!1===v&&(v=y.getDefaultStep(S[e],c,b.keyboardDefaultStep)),(u||l)&&(v*=h),v=Math.max(v,1e-7),v*=c?-1:1,s=x[e]+v}else s=d?b.spectrum.xVal[b.spectrum.xVal.length-1]:b.spectrum.xVal[0];return rt(e,y.toStepping(s),!0,!0),J("slide",e),J("update",e),J("change",e),J("set",e),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",b.ort?"vertical":"horizontal"),0===e?ht(n,b.cssClasses.handleLower):e===b.handles-1&&ht(n,b.cssClasses.handleUpper),r}function M(t,e){return!!e&&V(t,b.cssClasses.connect)}function r(t,e){return!!b.tooltips[e]&&V(t.firstChild,b.cssClasses.tooltip)}function O(){return h.hasAttribute("disabled")}function L(t){return u[t].hasAttribute("disabled")}function z(){i&&(G("update"+vt.tooltips),i.forEach(function(t){t&&ut(t)}),i=null)}function H(){z(),i=u.map(r),$("update"+vt.tooltips,function(t,e,r){if(i[e]){var n=t[e];!0!==b.tooltips[e]&&(n=b.tooltips[e].to(r[e])),i[e].innerHTML=n}})}function j(e,i,o){var s=w.createElement("div"),a=[];a[N]=b.cssClasses.valueNormal,a[k]=b.cssClasses.valueLarge,a[U]=b.cssClasses.valueSub;var l=[];l[N]=b.cssClasses.markerNormal,l[k]=b.cssClasses.markerLarge,l[U]=b.cssClasses.markerSub;var u=[b.cssClasses.valueHorizontal,b.cssClasses.valueVertical],c=[b.cssClasses.markerHorizontal,b.cssClasses.markerVertical];function p(t,e){var r=e===b.cssClasses.value,n=r?a:l;return e+" "+(r?u:c)[b.ort]+" "+n[t]}return ht(s,b.cssClasses.pips),ht(s,0===b.ort?b.cssClasses.pipsHorizontal:b.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=i?i(e,r):r)!==P){var n=V(s,!1);n.className=p(r,b.cssClasses.marker),n.style[b.style]=t+"%",N<r&&((n=V(s,!1)).className=p(r,b.cssClasses.value),n.setAttribute("data-value",e),n.style[b.style]=t+"%",n.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),s}function F(){c&&(ut(c),c=null)}function R(t){F();var m,g,v,b,e,r,x,S,w,n=t.mode,i=t.density||1,o=t.filter||!1,s=function(t,e,r){if("range"===t||"steps"===t)return y.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+lt+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return y.fromStepping(r?y.getStep(t):t)}):"values"===t?r?e.map(function(t){return y.fromStepping(y.getStep(y.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),a=(m=i,g=n,v=s,b={},e=y.xVal[0],r=y.xVal[y.xVal.length-1],S=x=!1,w=0,(v=v.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(v.unshift(e),x=!0),v[v.length-1]!==r&&(v.push(r),S=!0),v.forEach(function(t,e){var r,n,i,o,s,a,l,u,c,p,f=t,d=v[e+1],h="steps"===g;if(h&&(r=y.xNumSteps[e]),r||(r=d-f),!1!==f)for(void 0===d&&(d=f),r=Math.max(r,1e-7),n=f;n<=d;n=(n+r).toFixed(7)/1){for(u=(s=(o=y.toStepping(n))-w)/m,p=s/(c=Math.round(u)),i=1;i<=c;i+=1)b[(a=w+i*p).toFixed(5)]=[y.fromStepping(a),0];l=-1<v.indexOf(n)?k:h?U:N,!e&&x&&n!==d&&(l=0),n===d&&S||(b[o.toFixed(5)]=[n,l]),w=o}}),b),l=t.format||{to:Math.round};return c=h.appendChild(j(a,o,l))}function T(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][b.ort];return 0===b.ort?t.width||l[e]:t.height||l[e]}function _(n,i,o,s){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),s=0===t.type.indexOf("mouse"),a=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(a=!0);if("mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(o){var l=function(t){return t.target===r||r.contains(t.target)||t.target.shadowRoot&&t.target.shadowRoot.contains(r)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||gt(w),(s||a)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=s||a,t}(t,s.pageOffset,s.target||i))&&(!(O()&&!s.doNotReject)&&(e=h,r=b.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===f.start&&void 0!==t.buttons&&1<t.buttons)&&((!s.hover||!t.buttons)&&(d||t.preventDefault(),t.calcPoint=t.points[b.ort],void o(t,s))))));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!d&&{passive:!0}),r.push([t,e])}),r}function B(t){var e,r,n,i,o,s,a=100*(t-(e=l,r=b.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,s=gt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),r?n.top+s.y-o.clientTop:n.left+s.x-o.clientLeft))/T();return a=ft(a),b.dir?100-a:a}function q(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&Y(t,e)}function X(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return Y(t,e);var r=(b.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function Y(t,e){e.handle&&(mt(e.handle,b.cssClasses.active),g-=1),e.listeners.forEach(function(t){E.removeEventListener(t[0],t[1])}),0===g&&(mt(h,b.cssClasses.drag),et(),t.cursor&&(C.style.cursor="",C.removeEventListener("selectstart",ct))),e.handleNumbers.forEach(function(t){J("change",t),J("set",t),J("end",t)})}function I(t,e){if(e.handleNumbers.some(L))return!1;var r;1===e.handleNumbers.length&&(r=u[e.handleNumbers[0]].children[0],g+=1,ht(r,b.cssClasses.active));t.stopPropagation();var n=[],i=_(f.move,E,X,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:T(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:S.slice()}),o=_(f.end,E,Y,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),s=_("mouseout",E,q,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,i.concat(o,s)),t.cursor&&(C.style.cursor=getComputedStyle(t.target).cursor,1<u.length&&ht(h,b.cssClasses.drag),C.addEventListener("selectstart",ct,!1)),e.handleNumbers.forEach(function(t){J("start",t)})}function n(t){t.stopPropagation();var i,o,s,e=B(t.calcPoint),r=(i=e,s=!(o=100),u.forEach(function(t,e){if(!L(e)){var r=S[e],n=Math.abs(r-i);(n<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n)}}),s);if(!1===r)return!1;b.events.snap||pt(h,b.cssClasses.tap,b.animationDuration),rt(r,e,!0,!0),et(),J("slide",r,!0),J("update",r,!0),J("change",r,!0),J("set",r,!0),b.events.snap&&I(t,{handleNumbers:[r]})}function W(t){var e=B(t.calcPoint),r=y.getStep(e),n=y.fromStepping(r);Object.keys(v).forEach(function(t){"hover"===t.split(".")[0]&&v[t].forEach(function(t){t.call(a,n)})})}function $(t,e){v[t]=v[t]||[],v[t].push(e),"update"===t.split(".")[0]&&u.forEach(function(t,e){J("update",e)})}function G(t){var i=t&&t.split(".")[0],o=i?t.substring(i.length):t;Object.keys(v).forEach(function(t){var e,r=t.split(".")[0],n=t.substring(r.length);i&&i!==r||o&&o!==n||((e=n)!==vt.aria&&e!==vt.tooltips||o===n)&&delete v[t]})}function J(r,n,i){Object.keys(v).forEach(function(t){var e=t.split(".")[0];r===e&&v[t].forEach(function(t){t.call(a,x.map(b.format.to),n,x.slice(),i||!1,S.slice(),a)})})}function K(t,e,r,n,i,o){var s;return 1<u.length&&!b.events.unconstrained&&(n&&0<e&&(s=y.getAbsoluteDistance(t[e-1],b.margin,0),r=Math.max(r,s)),i&&e<u.length-1&&(s=y.getAbsoluteDistance(t[e+1],b.margin,1),r=Math.min(r,s))),1<u.length&&b.limit&&(n&&0<e&&(s=y.getAbsoluteDistance(t[e-1],b.limit,0),r=Math.min(r,s)),i&&e<u.length-1&&(s=y.getAbsoluteDistance(t[e+1],b.limit,1),r=Math.max(r,s))),b.padding&&(0===e&&(s=y.getAbsoluteDistance(0,b.padding[0],0),r=Math.max(r,s)),e===u.length-1&&(s=y.getAbsoluteDistance(100,b.padding[1],1),r=Math.min(r,s))),!((r=ft(r=y.getStep(r)))===t[e]&&!o)&&r}function Q(t,e){var r=b.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,n,r,e){var i=r.slice(),o=[!t,t],s=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=K(i,t,i[t]+n,o[e],s[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=s=[!0];var a=!1;e.forEach(function(t,e){a=rt(t,r[t]+n,o[e],s[e])||a}),a&&e.forEach(function(t){J("update",t),J("slide",t)})}function tt(t,e){return b.dir?100-t-e:t}function et(){m.forEach(function(t){var e=50<S[t]?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=r})}function rt(t,e,r,n,i){return i||(e=K(S,t,e,r,n,!1)),!1!==e&&(function(t,e){S[t]=e,x[t]=y.fromStepping(e);var r="translate("+Q(10*(tt(e,0)-A)+"%","0")+")";u[t].style[b.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(s[t]){var e=0,r=100;0!==t&&(e=S[t-1]),t!==s.length-1&&(r=S[t]);var n=r-e,i="translate("+Q(tt(e,n)+"%","0")+")",o="scale("+Q(n/100,"1")+")";s[t].style[b.transformRule]=i+" "+o}}function it(t,e){return null===t||!1===t||void 0===t?S[e]:("number"==typeof t&&(t=String(t)),t=b.format.from(t),!1===(t=y.toStepping(t))||isNaN(t)?S[e]:t)}function ot(t,e,r){var n=dt(t),i=void 0===S[0];e=void 0===e||!!e,b.animate&&!i&&pt(h,b.cssClasses.tap,b.animationDuration),m.forEach(function(t){rt(t,it(n[t],t),!0,!1,r)});for(var o=1===m.length?0:1;o<m.length;++o)m.forEach(function(t){rt(t,S[t],!0,!0,r)});et(),m.forEach(function(t){J("update",t),null!==n[t]&&e&&J("set",t)})}function st(){var t=x.map(b.format.to);return 1===t.length?t[0]:t}function at(t){var e=S[t],r=y.getNearbySteps(e),n=x[t],i=r.thisStep.step,o=null;if(b.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(o=null);var s=y.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(s))),null!==o&&!1!==o&&(o=Number(o.toFixed(s))),[o,i]}return ht(e=h,b.cssClasses.target),0===b.dir?ht(e,b.cssClasses.ltr):ht(e,b.cssClasses.rtl),0===b.ort?ht(e,b.cssClasses.horizontal):ht(e,b.cssClasses.vertical),ht(e,"rtl"===getComputedStyle(e).direction?b.cssClasses.textDirectionRtl:b.cssClasses.textDirectionLtr),l=V(e,b.cssClasses.base),function(t,e){var r=V(e,b.cssClasses.connects);u=[],(s=[]).push(M(r,t[0]));for(var n=0;n<b.handles;n++)u.push(D(e,n)),m[n]=n,s.push(M(r,t[n+1]))}(b.connect,l),(p=b.events).fixed||u.forEach(function(t,e){_(f.start,t.children[0],I,{handleNumbers:[e]})}),p.tap&&_(f.start,l,n,{}),p.hover&&_(f.move,l,W,{hover:!0}),p.drag&&s.forEach(function(t,e){if(!1!==t&&0!==e&&e!==s.length-1){var r=u[e-1],n=u[e],i=[t];ht(t,b.cssClasses.draggable),p.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){_(f.start,t,I,{handles:[r,n],handleNumbers:[e-1,e]})})}}),ot(b.start),b.pips&&R(b.pips),b.tooltips&&H(),G("update"+vt.aria),$("update"+vt.aria,function(t,e,s,r,a){m.forEach(function(t){var e=u[t],r=K(S,t,0,!0,!0,!0),n=K(S,t,100,!0,!0,!0),i=a[t],o=b.ariaFormat.to(s[t]);r=y.fromStepping(r).toFixed(1),n=y.fromStepping(n).toFixed(1),i=y.fromStepping(i).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",o)})}),a={destroy:function(){for(var t in G(vt.aria),G(vt.tooltips),b.cssClasses)b.cssClasses.hasOwnProperty(t)&&mt(h,b.cssClasses[t]);for(;h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider},steps:function(){return m.map(at)},on:$,off:G,get:st,set:ot,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<m.length))throw new Error("noUiSlider ("+lt+"): invalid handle number, got: "+t);rt(t,it(e,t),!0,!0,n),J("update",t),r&&J("set",t)},reset:function(t){ot(b.start,t)},__moveHandles:function(t,e,r){Z(t,e,S,r)},options:o,updateOptions:function(e,t){var r=st(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=bt(o);n.forEach(function(t){void 0!==e[t]&&(b[t]=i[t])}),y=i.spectrum,b.margin=i.margin,b.limit=i.limit,b.padding=i.padding,b.pips?R(b.pips):F(),b.tooltips?H():z(),S=[],ot(e.start||r,t)},target:h,removePips:F,removeTooltips:z,getTooltips:function(){return i},getOrigins:function(){return u},pips:R}}return{__spectrum:i,version:lt,cssClasses:d,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+lt+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+lt+"): Slider was already initialized.");var r=j(t,bt(e),e);return t.noUiSlider=r}}});
!function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():window.wNumb=e()}(function(){"use strict";var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function w(e){return e.split("").reverse().join("")}function h(e,t){return e.substring(0,t.length)===t}function f(e,t,n){if((e[t]||e[n])&&e[t]===e[n])throw new Error(t)}function x(e){return"number"==typeof e&&isFinite(e)}function n(e,t,n,r,i,o,f,u,s,c,a,p){var d,l,h,g=p,v="",m="";return o&&(p=o(p)),!!x(p)&&(!1!==e&&0===parseFloat(p.toFixed(e))&&(p=0),p<0&&(d=!0,p=Math.abs(p)),!1!==e&&(p=function(e,t){return e=e.toString().split("e"),(+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+t:t)))).toString().split("e"))[0]+"e"+(e[1]?e[1]-t:-t))).toFixed(t)}(p,e)),-1!==(p=p.toString()).indexOf(".")?(h=(l=p.split("."))[0],n&&(v=n+l[1])):h=p,t&&(h=w((h=w(h).match(/.{1,3}/g)).join(w(t)))),d&&u&&(m+=u),r&&(m+=r),d&&s&&(m+=s),m+=h,m+=v,i&&(m+=i),c&&(m=c(m,g)),m)}function r(e,t,n,r,i,o,f,u,s,c,a,p){var d,l="";return a&&(p=a(p)),!(!p||"string"!=typeof p)&&(u&&h(p,u)&&(p=p.replace(u,""),d=!0),r&&h(p,r)&&(p=p.replace(r,"")),s&&h(p,s)&&(p=p.replace(s,""),d=!0),i&&function(e,t){return e.slice(-1*t.length)===t}(p,i)&&(p=p.slice(0,-1*i.length)),t&&(p=p.split(t).join("")),n&&(p=p.replace(n,".")),d&&(l+="-"),""!==(l=(l+=p).replace(/[^0-9\.\-.]/g,""))&&(l=Number(l),f&&(l=f(l)),!!x(l)&&l))}function i(e,t,n){var r,i=[];for(r=0;r<o.length;r+=1)i.push(e[o[r]]);return i.push(n),t.apply("",i)}return function e(t){if(!(this instanceof e))return new e(t);"object"==typeof t&&(t=function(e){var t,n,r,i={};for(void 0===e.suffix&&(e.suffix=e.postfix),t=0;t<o.length;t+=1)if(void 0===(r=e[n=o[t]]))"negative"!==n||i.negativeBefore?"mark"===n&&"."!==i.thousand?i[n]=".":i[n]=!1:i[n]="-";else if("decimals"===n){if(!(0<=r&&r<8))throw new Error(n);i[n]=r}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof r)throw new Error(n);i[n]=r}else{if("string"!=typeof r)throw new Error(n);i[n]=r}return f(i,"mark","thousand"),f(i,"prefix","negative"),f(i,"prefix","negativeBefore"),i}(t),this.to=function(e){return i(t,n,e)},this.from=function(e){return i(t,r,e)})}});
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global$1 = // eslint-disable-next-line no-undef
	check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func
	function () {
	  return this;
	}() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Detect IE8's incomplete defineProperty implementation


	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 1, {
	    get: function () {
	      return 7;
	    }
	  })[1] != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings




	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string


	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE

	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty


	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  }

	  return it;
	};

	var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty

	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global$1, key, value);
	  } catch (error) {
	    global$1[key] = value;
	  }

	  return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global$1[SHARED] || setGlobal(SHARED, {});
	var sharedStore = store;

	var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global$1.WeakMap;
	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.8.3',
	  mode: 'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global$1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;

	  set = function (it, metadata) {
	    metadata.facade = it;
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };

	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;

	  set = function (it, metadata) {
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };

	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(String).split('String');
	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var state;

	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) {
	      createNonEnumerableProperty(value, 'name', key);
	    }

	    state = enforceInternalState(value);

	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
	    }
	  }

	  if (O === global$1) {
	    if (simple) O[key] = value;else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }

	  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});
	});

	var path = global$1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global$1[namespace]) : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor; // `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger

	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min; // `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength

	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation


	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value; // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare

	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++]; // eslint-disable-next-line no-self-compare

	      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;



	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }

	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames

	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols


	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';
	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;










	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/


	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

	  if (GLOBAL) {
	    target = global$1;
	  } else if (STATIC) {
	    target = global$1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$1[TARGET] || {}).prototype;
	  }

	  if (target) for (key in source) {
	    sourceProperty = source[key];

	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];

	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    } // add a flag to not completely full polyfills


	    if (options.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    } // extend global


	    redefine(target, key, sourceProperty, options);
	  }
	};

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys


	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject


	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var nativeAssign = Object.assign;
	var defineProperty = Object.defineProperty; // `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign

	var objectAssign = !nativeAssign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && nativeAssign({
	    b: 1
	  }, nativeAssign(defineProperty({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), {
	    b: 2
	  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

	  var A = {};
	  var B = {}; // eslint-disable-next-line no-undef

	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) {
	    B[chr] = chr;
	  });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;

	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  }

	  return T;
	} : nativeAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign


	_export({
	  target: 'Object',
	  stat: true,
	  forced: Object.assign !== objectAssign
	}, {
	  assign: objectAssign
	});

	// `String.prototype.repeat` method implementation
	// https://tc39.es/ecma262/#sec-string.prototype.repeat


	var stringRepeat = ''.repeat || function repeat(count) {
	  var str = String(requireObjectCoercible(this));
	  var result = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

	  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

	  return result;
	};

	// https://github.com/tc39/proposal-string-pad-start-end






	var ceil$1 = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

	var createMethod$1 = function (IS_END) {
	  return function ($this, maxLength, fillString) {
	    var S = String(requireObjectCoercible($this));
	    var stringLength = S.length;
	    var fillStr = fillString === undefined ? ' ' : String(fillString);
	    var intMaxLength = toLength(maxLength);
	    var fillLen, stringFiller;
	    if (intMaxLength <= stringLength || fillStr == '') return S;
	    fillLen = intMaxLength - stringLength;
	    stringFiller = stringRepeat.call(fillStr, ceil$1(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	    return IS_END ? S + stringFiller : stringFiller + S;
	  };
	};

	var stringPad = {
	  // `String.prototype.padStart` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padstart
	  start: createMethod$1(false),
	  // `String.prototype.padEnd` method
	  // https://tc39.es/ecma262/#sec-string.prototype.padend
	  end: createMethod$1(true)
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	// https://github.com/zloirock/core-js/issues/280
	 // eslint-disable-next-line unicorn/no-unsafe-regex


	var stringPadWebkitBug = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(engineUserAgent);

	var $padEnd = stringPad.end;

	 // `String.prototype.padEnd` method
	// https://tc39.es/ecma262/#sec-string.prototype.padend


	_export({
	  target: 'String',
	  proto: true,
	  forced: stringPadWebkitBug
	}, {
	  padEnd: function padEnd(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $padStart = stringPad.start;

	 // `String.prototype.padStart` method
	// https://tc39.es/ecma262/#sec-string.prototype.padstart


	_export({
	  target: 'String',
	  proto: true,
	  forced: stringPadWebkitBug
	}, {
	  padStart: function padStart(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// `String.prototype.repeat` method
	// https://tc39.es/ecma262/#sec-string.prototype.repeat


	_export({
	  target: 'String',
	  proto: true
	}, {
	  repeat: stringRepeat
	});

	// `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis


	_export({
	  global: true
	}, {
	  globalThis: global$1
	});

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	function set$1(target, property, value, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.set) {
	    set$1 = Reflect.set;
	  } else {
	    set$1 = function set(target, property, value, receiver) {
	      var base = _superPropBase(target, property);

	      var desc;

	      if (base) {
	        desc = Object.getOwnPropertyDescriptor(base, property);

	        if (desc.set) {
	          desc.set.call(receiver, value);
	          return true;
	        } else if (!desc.writable) {
	          return false;
	        }
	      }

	      desc = Object.getOwnPropertyDescriptor(receiver, property);

	      if (desc) {
	        if (!desc.writable) {
	          return false;
	        }

	        desc.value = value;
	        Object.defineProperty(receiver, property, desc);
	      } else {
	        _defineProperty(receiver, property, value);
	      }

	      return true;
	    };
	  }

	  return set$1(target, property, value, receiver);
	}

	function _set(target, property, value, receiver, isStrict) {
	  var s = set$1(target, property, value, receiver || target);

	  if (!s && isStrict) {
	    throw new Error('failed to set property');
	  }

	  return value;
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	/** Checks if value is string */
	function isString(str) {
	  return typeof str === 'string' || str instanceof String;
	}
	/**
	  Direction
	  @prop {string} NONE
	  @prop {string} LEFT
	  @prop {string} FORCE_LEFT
	  @prop {string} RIGHT
	  @prop {string} FORCE_RIGHT
	*/

	var DIRECTION = {
	  NONE: 'NONE',
	  LEFT: 'LEFT',
	  FORCE_LEFT: 'FORCE_LEFT',
	  RIGHT: 'RIGHT',
	  FORCE_RIGHT: 'FORCE_RIGHT'
	};
	/** */

	function forceDirection(direction) {
	  switch (direction) {
	    case DIRECTION.LEFT:
	      return DIRECTION.FORCE_LEFT;

	    case DIRECTION.RIGHT:
	      return DIRECTION.FORCE_RIGHT;

	    default:
	      return direction;
	  }
	}
	/** Escapes regular expression control chars */

	function escapeRegExp(str) {
	  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

	function objectIncludes(b, a) {
	  if (a === b) return true;
	  var arrA = Array.isArray(a),
	      arrB = Array.isArray(b),
	      i;

	  if (arrA && arrB) {
	    if (a.length != b.length) return false;

	    for (i = 0; i < a.length; i++) {
	      if (!objectIncludes(a[i], b[i])) return false;
	    }

	    return true;
	  }

	  if (arrA != arrB) return false;

	  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
	    var dateA = a instanceof Date,
	        dateB = b instanceof Date;
	    if (dateA && dateB) return a.getTime() == b.getTime();
	    if (dateA != dateB) return false;
	    var regexpA = a instanceof RegExp,
	        regexpB = b instanceof RegExp;
	    if (regexpA && regexpB) return a.toString() == b.toString();
	    if (regexpA != regexpB) return false;
	    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

	    for (i = 0; i < keys.length; i++) {
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
	    }

	    for (i = 0; i < keys.length; i++) {
	      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
	    }

	    return true;
	  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
	    return a.toString() === b.toString();
	  }

	  return false;
	}
	/** Selection range */

	/** Provides details of changing input */

	var ActionDetails = /*#__PURE__*/function () {
	  /** Current input value */

	  /** Current cursor position */

	  /** Old input value */

	  /** Old selection */
	  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
	    _classCallCheck(this, ActionDetails);

	    this.value = value;
	    this.cursorPos = cursorPos;
	    this.oldValue = oldValue;
	    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

	    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
	      --this.oldSelection.start;
	    }
	  }
	  /**
	    Start changing position
	    @readonly
	  */


	  _createClass(ActionDetails, [{
	    key: "startChangePos",
	    get: function get() {
	      return Math.min(this.cursorPos, this.oldSelection.start);
	    }
	    /**
	      Inserted symbols count
	      @readonly
	    */

	  }, {
	    key: "insertedCount",
	    get: function get() {
	      return this.cursorPos - this.startChangePos;
	    }
	    /**
	      Inserted symbols
	      @readonly
	    */

	  }, {
	    key: "inserted",
	    get: function get() {
	      return this.value.substr(this.startChangePos, this.insertedCount);
	    }
	    /**
	      Removed symbols count
	      @readonly
	    */

	  }, {
	    key: "removedCount",
	    get: function get() {
	      // Math.max for opposite operation
	      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
	      this.oldValue.length - this.value.length, 0);
	    }
	    /**
	      Removed symbols
	      @readonly
	    */

	  }, {
	    key: "removed",
	    get: function get() {
	      return this.oldValue.substr(this.startChangePos, this.removedCount);
	    }
	    /**
	      Unchanged head symbols
	      @readonly
	    */

	  }, {
	    key: "head",
	    get: function get() {
	      return this.value.substring(0, this.startChangePos);
	    }
	    /**
	      Unchanged tail symbols
	      @readonly
	    */

	  }, {
	    key: "tail",
	    get: function get() {
	      return this.value.substring(this.startChangePos + this.insertedCount);
	    }
	    /**
	      Remove direction
	      @readonly
	    */

	  }, {
	    key: "removeDirection",
	    get: function get() {
	      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

	      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
	    }
	  }]);

	  return ActionDetails;
	}();

	/**
	  Provides details of changing model value
	  @param {Object} [details]
	  @param {string} [details.inserted] - Inserted symbols
	  @param {boolean} [details.skip] - Can skip chars
	  @param {number} [details.removeCount] - Removed symbols count
	  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
	*/
	var ChangeDetails = /*#__PURE__*/function () {
	  /** Inserted symbols */

	  /** Can skip chars */

	  /** Additional offset if any changes occurred before tail */

	  /** Raw inserted is used by dynamic mask */
	  function ChangeDetails(details) {
	    _classCallCheck(this, ChangeDetails);

	    Object.assign(this, {
	      inserted: '',
	      rawInserted: '',
	      skip: false,
	      tailShift: 0
	    }, details);
	  }
	  /**
	    Aggregate changes
	    @returns {ChangeDetails} `this`
	  */


	  _createClass(ChangeDetails, [{
	    key: "aggregate",
	    value: function aggregate(details) {
	      this.rawInserted += details.rawInserted;
	      this.skip = this.skip || details.skip;
	      this.inserted += details.inserted;
	      this.tailShift += details.tailShift;
	      return this;
	    }
	    /** Total offset considering all changes */

	  }, {
	    key: "offset",
	    get: function get() {
	      return this.tailShift + this.inserted.length;
	    }
	  }]);

	  return ChangeDetails;
	}();

	/** Provides details of continuous extracted tail */
	var ContinuousTailDetails = /*#__PURE__*/function () {
	  /** Tail value as string */

	  /** Tail start position */

	  /** Start position */
	  function ContinuousTailDetails() {
	    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var stop = arguments.length > 2 ? arguments[2] : undefined;

	    _classCallCheck(this, ContinuousTailDetails);

	    this.value = value;
	    this.from = from;
	    this.stop = stop;
	  }

	  _createClass(ContinuousTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.value;
	    }
	  }, {
	    key: "extend",
	    value: function extend(tail) {
	      this.value += String(tail);
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      return masked.append(this.toString(), {
	        tail: true
	      }).aggregate(masked._appendPlaceholder());
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        value: this.value,
	        from: this.from,
	        stop: this.stop
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }, {
	    key: "shiftBefore",
	    value: function shiftBefore(pos) {
	      if (this.from >= pos || !this.value.length) return '';
	      var shiftChar = this.value[0];
	      this.value = this.value.slice(1);
	      return shiftChar;
	    }
	  }]);

	  return ContinuousTailDetails;
	}();

	/**
	 * Applies mask on element.
	 * @constructor
	 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
	 * @param {Object} opts - Custom mask options
	 * @return {InputMask}
	 */
	function IMask(el) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  // currently available only for input-like elements
	  return new IMask.InputMask(el, opts);
	}

	/** Supported mask type */

	/** Provides common masking stuff */
	var Masked = /*#__PURE__*/function () {
	  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

	  /** @type {Mask} */

	  /** */
	  // $FlowFixMe no ideas

	  /** Transforms value before mask processing */

	  /** Validates if value is acceptable */

	  /** Does additional processing in the end of editing */

	  /** Format typed value to string */

	  /** Parse strgin to get typed value */

	  /** Enable characters overwriting */

	  /** */
	  function Masked(opts) {
	    _classCallCheck(this, Masked);

	    this._value = '';

	    this._update(Object.assign({}, Masked.DEFAULTS, opts));

	    this.isInitialized = true;
	  }
	  /** Sets and applies new options */


	  _createClass(Masked, [{
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      if (!Object.keys(opts).length) return;
	      this.withValueRefresh(this._update.bind(this, opts));
	    }
	    /**
	      Sets new options
	      @protected
	    */

	  }, {
	    key: "_update",
	    value: function _update(opts) {
	      Object.assign(this, opts);
	    }
	    /** Mask state */

	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this.value
	      };
	    },
	    set: function set(state) {
	      this._value = state._value;
	    }
	    /** Resets value */

	  }, {
	    key: "reset",
	    value: function reset() {
	      this._value = '';
	    }
	    /** */

	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(value) {
	      this.resolve(value);
	    }
	    /** Resolve new value */

	  }, {
	    key: "resolve",
	    value: function resolve(value) {
	      this.reset();
	      this.append(value, {
	        input: true
	      }, '');
	      this.doCommit();
	      return this.value;
	    }
	    /** */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.value;
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {}, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.doParse(this.value);
	    },
	    set: function set(value) {
	      this.value = this.doFormat(value);
	    }
	    /** Value that includes raw user input */

	  }, {
	    key: "rawInputValue",
	    get: function get() {
	      return this.extractInput(0, this.value.length, {
	        raw: true
	      });
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {
	        raw: true
	      }, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	    /** Finds nearest input position in direction */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos, direction) {
	      return cursorPos;
	    }
	    /** Extracts value in range considering flags */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return this.value.slice(fromPos, toPos);
	    }
	    /** Extracts tail in range */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
	    }
	    /** Appends tail */
	    // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	    /** Appends char */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      if (!ch) return new ChangeDetails();
	      this._value += ch;
	      return new ChangeDetails({
	        inserted: ch,
	        rawInserted: ch
	      });
	    }
	    /** Appends char */

	  }, {
	    key: "_appendChar",
	    value: function _appendChar(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
	      var consistentState = this.state;

	      var details = this._appendCharRaw(this.doPrepare(ch, flags), flags);

	      if (details.inserted) {
	        var consistentTail;
	        var appended = this.doValidate(flags) !== false;

	        if (appended && checkTail != null) {
	          // validation ok, check tail
	          var beforeTailState = this.state;

	          if (this.overwrite) {
	            consistentTail = checkTail.state;
	            checkTail.shiftBefore(this.value.length);
	          }

	          var tailDetails = this.appendTail(checkTail);
	          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

	          if (appended && tailDetails.inserted) this.state = beforeTailState;
	        } // revert all if something went wrong


	        if (!appended) {
	          details = new ChangeDetails();
	          this.state = consistentState;
	          if (checkTail && consistentTail) checkTail.state = consistentTail;
	        }
	      }

	      return details;
	    }
	    /** Appends optional placeholder at end */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      return new ChangeDetails();
	    }
	    /** Appends symbols considering flags */
	    // $FlowFixMe no ideas

	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      if (!isString(str)) throw new Error('value should be string');
	      var details = new ChangeDetails();
	      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
	      if (flags && flags.tail) flags._beforeTailState = this.state;

	      for (var ci = 0; ci < str.length; ++ci) {
	        details.aggregate(this._appendChar(str[ci], flags, checkTail));
	      } // append tail but aggregate only tailShift


	      if (checkTail != null) {
	        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
	        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
	        // this._resetBeforeTailState();
	      }

	      return details;
	    }
	    /** */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
	      return new ChangeDetails();
	    }
	    /** Calls function and reapplies current value */

	  }, {
	    key: "withValueRefresh",
	    value: function withValueRefresh(fn) {
	      if (this._refreshing || !this.isInitialized) return fn();
	      this._refreshing = true;
	      var rawInput = this.rawInputValue;
	      var value = this.value;
	      var ret = fn();
	      this.rawInputValue = rawInput; // append lost trailing chars at end

	      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
	        this.append(value.slice(this.value.length), {}, '');
	      }

	      delete this._refreshing;
	      return ret;
	    }
	    /** */

	  }, {
	    key: "runIsolated",
	    value: function runIsolated(fn) {
	      if (this._isolated || !this.isInitialized) return fn(this);
	      this._isolated = true;
	      var state = this.state;
	      var ret = fn(this);
	      this.state = state;
	      delete this._isolated;
	      return ret;
	    }
	    /**
	      Prepares string before mask processing
	      @protected
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.prepare ? this.prepare(str, this, flags) : str;
	    }
	    /**
	      Validates if value is acceptable
	      @protected
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
	    }
	    /**
	      Does additional processing in the end of editing
	      @protected
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.commit) this.commit(this.value, this);
	    }
	    /** */

	  }, {
	    key: "doFormat",
	    value: function doFormat(value) {
	      return this.format ? this.format(value, this) : value;
	    }
	    /** */

	  }, {
	    key: "doParse",
	    value: function doParse(str) {
	      return this.parse ? this.parse(str, this) : str;
	    }
	    /** */

	  }, {
	    key: "splice",
	    value: function splice(start, deleteCount, inserted, removeDirection) {
	      var tailPos = start + deleteCount;
	      var tail = this.extractTail(tailPos);
	      var startChangePos = this.nearestInputPos(start, removeDirection);
	      var changeDetails = new ChangeDetails({
	        tailShift: startChangePos - start // adjust tailShift if start was aligned

	      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
	        input: true
	      }, tail));
	      return changeDetails;
	    }
	  }]);

	  return Masked;
	}();
	Masked.DEFAULTS = {
	  format: function format(v) {
	    return v;
	  },
	  parse: function parse(v) {
	    return v;
	  }
	};
	IMask.Masked = Masked;

	/** Get Masked class by mask type */

	function maskedClass(mask) {
	  if (mask == null) {
	    throw new Error('mask property should be defined');
	  } // $FlowFixMe


	  if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

	  if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

	  if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

	  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

	  if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

	  if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

	  if (mask instanceof Function) return IMask.MaskedFunction; // $FlowFixMe

	  if (mask instanceof IMask.Masked) return mask.constructor;
	  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
	  // $FlowFixMe

	  return IMask.Masked;
	}
	/** Creates new {@link Masked} depending on mask type */

	function createMask(opts) {
	  // $FlowFixMe
	  if (IMask.Masked && opts instanceof IMask.Masked) return opts;
	  opts = Object.assign({}, opts);
	  var mask = opts.mask; // $FlowFixMe

	  if (IMask.Masked && mask instanceof IMask.Masked) return mask;
	  var MaskedClass = maskedClass(mask);
	  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
	  return new MaskedClass(opts);
	}
	IMask.createMask = createMask;

	var DEFAULT_INPUT_DEFINITIONS = {
	  '0': /\d/,
	  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	  // http://stackoverflow.com/a/22075070
	  '*': /./
	};
	/** */

	var PatternInputDefinition = /*#__PURE__*/function () {
	  /** */

	  /** */

	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternInputDefinition(opts) {
	    _classCallCheck(this, PatternInputDefinition);

	    var mask = opts.mask,
	        blockOpts = _objectWithoutProperties(opts, ["mask"]);

	    this.masked = createMask({
	      mask: mask
	    });
	    Object.assign(this, blockOpts);
	  }

	  _createClass(PatternInputDefinition, [{
	    key: "reset",
	    value: function reset() {
	      this._isFilled = false;
	      this.masked.reset();
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      if (fromPos === 0 && toPos >= 1) {
	        this._isFilled = false;
	        return this.masked.remove(fromPos, toPos);
	      }

	      return new ChangeDetails();
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.masked.unmaskedValue;
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return Boolean(this.masked.value) || this.isOptional;
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (this._isFilled) return new ChangeDetails();
	      var state = this.masked.state; // simulate input

	      var details = this.masked._appendChar(str, flags);

	      if (details.inserted && this.doValidate(flags) === false) {
	        details.inserted = details.rawInserted = '';
	        this.masked.state = state;
	      }

	      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
	        details.inserted = this.placeholderChar;
	      }

	      details.skip = !details.inserted && !this.isOptional;
	      this._isFilled = Boolean(details.inserted);
	      return details;
	    }
	  }, {
	    key: "append",
	    value: function append() {
	      var _this$masked;

	      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this._isFilled || this.isOptional) return details;
	      this._isFilled = true;
	      details.inserted = this.placeholderChar;
	      return details;
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$masked2;

	      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
	    }
	  }, {
	    key: "appendTail",
	    value: function appendTail() {
	      var _this$masked3;

	      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;
	      return this.masked.extractInput(fromPos, toPos, flags);
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this.value.length;
	      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return this.isComplete ? boundPos : minPos;

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          return this.isComplete ? boundPos : maxPos;

	        case DIRECTION.NONE:
	        default:
	          return boundPos;
	      }
	    }
	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this$masked4, _this$parent;

	      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      this.masked.doCommit();
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        masked: this.masked.state,
	        _isFilled: this._isFilled
	      };
	    },
	    set: function set(state) {
	      this.masked.state = state.masked;
	      this._isFilled = state._isFilled;
	    }
	  }]);

	  return PatternInputDefinition;
	}();

	var PatternFixedDefinition = /*#__PURE__*/function () {
	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternFixedDefinition(opts) {
	    _classCallCheck(this, PatternFixedDefinition);

	    Object.assign(this, opts);
	    this._value = '';
	  }

	  _createClass(PatternFixedDefinition, [{
	    key: "value",
	    get: function get() {
	      return this._value;
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.isUnmasking ? this.value : '';
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this._isRawInput = false;
	      this._value = '';
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
	      if (!this._value) this._isRawInput = false;
	      return new ChangeDetails();
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this._value.length;

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return minPos;

	        case DIRECTION.NONE:
	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	        default:
	          return maxPos;
	      }
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      var appended = this.char === str[0];
	      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
	      if (isResolved) details.rawInserted = this.char;
	      this._value = details.inserted = this.char;
	      this._isRawInput = isResolved && (flags.raw || flags.input);
	      return details;
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      this._value = details.inserted = this.char;
	      return details;
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      var details = this._appendChar(str, flags);

	      if (tail != null) {
	        details.tailShift += this.appendTail(tail).tailShift;
	      }

	      return details;
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {}
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this._value,
	        _isRawInput: this._isRawInput
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }]);

	  return PatternFixedDefinition;
	}();

	var ChunksTailDetails = /*#__PURE__*/function () {
	  /** */
	  function ChunksTailDetails() {
	    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    _classCallCheck(this, ChunksTailDetails);

	    this.chunks = chunks;
	    this.from = from;
	  }

	  _createClass(ChunksTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.chunks.map(String).join('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "extend",
	    value: function extend(tailChunk) {
	      if (!String(tailChunk)) return;
	      if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
	      var lastChunk = this.chunks[this.chunks.length - 1];
	      var extendLast = lastChunk && ( // if stops are same or tail has no stop
	      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
	      tailChunk.from === lastChunk.from + lastChunk.toString().length;

	      if (tailChunk instanceof ContinuousTailDetails) {
	        // check the ability to extend previous chunk
	        if (extendLast) {
	          // extend previous chunk
	          lastChunk.extend(tailChunk.toString());
	        } else {
	          // append new chunk
	          this.chunks.push(tailChunk);
	        }
	      } else if (tailChunk instanceof ChunksTailDetails) {
	        if (tailChunk.stop == null) {
	          // unwrap floating chunks to parent, keeping `from` pos
	          var firstTailChunk;

	          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
	            firstTailChunk = tailChunk.chunks.shift();
	            firstTailChunk.from += tailChunk.from;
	            this.extend(firstTailChunk);
	          }
	        } // if tail chunk still has value


	        if (tailChunk.toString()) {
	          // if chunks contains stops, then popup stop to container
	          tailChunk.stop = tailChunk.blockIndex;
	          this.chunks.push(tailChunk);
	        }
	      }
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      // $FlowFixMe
	      if (!(masked instanceof IMask.MaskedPattern)) {
	        var tail = new ContinuousTailDetails(this.toString());
	        return tail.appendTo(masked);
	      }

	      var details = new ChangeDetails();

	      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
	        var chunk = this.chunks[ci];

	        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

	        var stop = chunk.stop;
	        var chunkBlock = void 0;

	        if (stop != null && ( // if block not found or stop is behind lastBlock
	        !lastBlockIter || lastBlockIter.index <= stop)) {
	          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
	          masked._stops.indexOf(stop) >= 0) {
	            details.aggregate(masked._appendPlaceholder(stop));
	          }

	          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
	        }

	        if (chunkBlock) {
	          var tailDetails = chunkBlock.appendTail(chunk);
	          tailDetails.skip = false; // always ignore skip, it will be set on last

	          details.aggregate(tailDetails);
	          masked._value += tailDetails.inserted; // get not inserted chars

	          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
	          if (remainChars) details.aggregate(masked.append(remainChars, {
	            tail: true
	          }));
	        } else {
	          details.aggregate(masked.append(chunk.toString(), {
	            tail: true
	          }));
	        }
	      }
	      return details;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        chunks: this.chunks.map(function (c) {
	          return c.state;
	        }),
	        from: this.from,
	        stop: this.stop,
	        blockIndex: this.blockIndex
	      };
	    },
	    set: function set(state) {
	      var chunks = state.chunks,
	          props = _objectWithoutProperties(state, ["chunks"]);

	      Object.assign(this, props);
	      this.chunks = chunks.map(function (cstate) {
	        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

	        chunk.state = cstate;
	        return chunk;
	      });
	    }
	  }, {
	    key: "shiftBefore",
	    value: function shiftBefore(pos) {
	      if (this.from >= pos || !this.chunks.length) return '';
	      var chunkShiftPos = pos - this.from;
	      var ci = 0;

	      while (ci < this.chunks.length) {
	        var chunk = this.chunks[ci];
	        var shiftChar = chunk.shiftBefore(chunkShiftPos);

	        if (chunk.toString()) {
	          // chunk still contains value
	          // but not shifted - means no more available chars to shift
	          if (!shiftChar) break;
	          ++ci;
	        } else {
	          // clean if chunk has no value
	          this.chunks.splice(ci, 1);
	        }

	        if (shiftChar) return shiftChar;
	      }

	      return '';
	    }
	  }]);

	  return ChunksTailDetails;
	}();

	/** Masking by RegExp */

	var MaskedRegExp = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedRegExp, _Masked);

	  var _super = _createSuper(MaskedRegExp);

	  function MaskedRegExp() {
	    _classCallCheck(this, MaskedRegExp);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedRegExp, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      if (opts.mask) opts.validate = function (value) {
	        return value.search(opts.mask) >= 0;
	      };

	      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedRegExp;
	}(Masked);
	IMask.MaskedRegExp = MaskedRegExp;

	/**
	  Pattern mask
	  @param {Object} opts
	  @param {Object} opts.blocks
	  @param {Object} opts.definitions
	  @param {string} opts.placeholderChar
	  @param {boolean} opts.lazy
	*/
	var MaskedPattern = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedPattern, _Masked);

	  var _super = _createSuper(MaskedPattern);

	  /** */

	  /** */

	  /** Single char for empty input */

	  /** Show placeholder only when needed */
	  function MaskedPattern() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MaskedPattern);

	    // TODO type $Shape<MaskedPatternOptions>={} does not work
	    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
	    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
	  }
	  /**
	    @override
	    @param {Object} opts
	  */


	  _createClass(MaskedPattern, [{
	    key: "_update",
	    value: function _update() {
	      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

	      _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

	      this._rebuildMask();
	    }
	    /** */

	  }, {
	    key: "_rebuildMask",
	    value: function _rebuildMask() {
	      var _this = this;

	      var defs = this.definitions;
	      this._blocks = [];
	      this._stops = [];
	      this._maskedBlocks = {};
	      var pattern = this.mask;
	      if (!pattern || !defs) return;
	      var unmaskingBlock = false;
	      var optionalBlock = false;

	      for (var i = 0; i < pattern.length; ++i) {
	        if (this.blocks) {
	          var _ret = function () {
	            var p = pattern.slice(i);
	            var bNames = Object.keys(_this.blocks).filter(function (bName) {
	              return p.indexOf(bName) === 0;
	            }); // order by key length

	            bNames.sort(function (a, b) {
	              return b.length - a.length;
	            }); // use block name with max length

	            var bName = bNames[0];

	            if (bName) {
	              // $FlowFixMe no ideas
	              var maskedBlock = createMask(Object.assign({
	                parent: _this,
	                lazy: _this.lazy,
	                placeholderChar: _this.placeholderChar,
	                overwrite: _this.overwrite
	              }, _this.blocks[bName]));

	              if (maskedBlock) {
	                _this._blocks.push(maskedBlock); // store block index


	                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

	                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
	              }

	              i += bName.length - 1;
	              return "continue";
	            }
	          }();

	          if (_ret === "continue") continue;
	        }

	        var char = pattern[i];

	        var _isInput = (char in defs);

	        if (char === MaskedPattern.STOP_CHAR) {
	          this._stops.push(this._blocks.length);

	          continue;
	        }

	        if (char === '{' || char === '}') {
	          unmaskingBlock = !unmaskingBlock;
	          continue;
	        }

	        if (char === '[' || char === ']') {
	          optionalBlock = !optionalBlock;
	          continue;
	        }

	        if (char === MaskedPattern.ESCAPE_CHAR) {
	          ++i;
	          char = pattern[i];
	          if (!char) break;
	          _isInput = false;
	        }

	        var def = _isInput ? new PatternInputDefinition({
	          parent: this,
	          lazy: this.lazy,
	          placeholderChar: this.placeholderChar,
	          mask: defs[char],
	          isOptional: optionalBlock
	        }) : new PatternFixedDefinition({
	          char: char,
	          isUnmasking: unmaskingBlock
	        });

	        this._blocks.push(def);
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
	        _blocks: this._blocks.map(function (b) {
	          return b.state;
	        })
	      });
	    },
	    set: function set(state) {
	      var _blocks = state._blocks,
	          maskedState = _objectWithoutProperties(state, ["_blocks"]);

	      this._blocks.forEach(function (b, bi) {
	        return b.state = _blocks[bi];
	      });

	      _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",
	    value: function reset() {
	      _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

	      this._blocks.forEach(function (b) {
	        return b.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return this._blocks.every(function (b) {
	        return b.isComplete;
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      this._blocks.forEach(function (b) {
	        return b.doCommit();
	      });

	      _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._blocks.reduce(function (str, b) {
	        return str += b.unmaskedValue;
	      }, '');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      // TODO return _value when not in change?
	      return this._blocks.reduce(function (str, b) {
	        return str += b.value;
	      }, '');
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var blockIter = this._mapPosToBlock(this.value.length);

	      var details = new ChangeDetails();
	      if (!blockIter) return details;

	      for (var bi = blockIter.index;; ++bi) {
	        var _block = this._blocks[bi];
	        if (!_block) break;

	        var blockDetails = _block._appendChar(ch, flags);

	        var skip = blockDetails.skip;
	        details.aggregate(blockDetails);
	        if (skip || blockDetails.rawInserted) break; // go next char
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this2 = this;

	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var chunkTail = new ChunksTailDetails();
	      if (fromPos === toPos) return chunkTail;

	      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
	        var blockChunk = b.extractTail(bFromPos, bToPos);
	        blockChunk.stop = _this2._findStopBefore(bi);
	        blockChunk.from = _this2._blockStartPos(bi);
	        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
	        chunkTail.extend(blockChunk);
	      });

	      return chunkTail;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      if (fromPos === toPos) return '';
	      var input = '';

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
	        input += b.extractInput(fromPos, toPos, flags);
	      });

	      return input;
	    }
	  }, {
	    key: "_findStopBefore",
	    value: function _findStopBefore(blockIndex) {
	      var stopBefore;

	      for (var si = 0; si < this._stops.length; ++si) {
	        var stop = this._stops[si];
	        if (stop <= blockIndex) stopBefore = stop;else break;
	      }

	      return stopBefore;
	    }
	    /** Appends placeholder depending on laziness */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder(toBlockIndex) {
	      var _this3 = this;

	      var details = new ChangeDetails();
	      if (this.lazy && toBlockIndex == null) return details;

	      var startBlockIter = this._mapPosToBlock(this.value.length);

	      if (!startBlockIter) return details;
	      var startBlockIndex = startBlockIter.index;
	      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

	      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
	        if (!b.lazy || toBlockIndex != null) {
	          // $FlowFixMe `_blocks` may not be present
	          var args = b._blocks != null ? [b._blocks.length] : [];

	          var bDetails = b._appendPlaceholder.apply(b, args);

	          _this3._value += bDetails.inserted;
	          details.aggregate(bDetails);
	        }
	      });

	      return details;
	    }
	    /** Finds block in pos */

	  }, {
	    key: "_mapPosToBlock",
	    value: function _mapPosToBlock(pos) {
	      var accVal = '';

	      for (var bi = 0; bi < this._blocks.length; ++bi) {
	        var _block2 = this._blocks[bi];
	        var blockStartPos = accVal.length;
	        accVal += _block2.value;

	        if (pos <= accVal.length) {
	          return {
	            index: bi,
	            offset: pos - blockStartPos
	          };
	        }
	      }
	    }
	    /** */

	  }, {
	    key: "_blockStartPos",
	    value: function _blockStartPos(blockIndex) {
	      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
	        return pos += b.value.length;
	      }, 0);
	    }
	    /** */

	  }, {
	    key: "_forEachBlocksInRange",
	    value: function _forEachBlocksInRange(fromPos) {
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var fn = arguments.length > 2 ? arguments[2] : undefined;

	      var fromBlockIter = this._mapPosToBlock(fromPos);

	      if (fromBlockIter) {
	        var toBlockIter = this._mapPosToBlock(toPos); // process first block


	        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
	        var fromBlockStartPos = fromBlockIter.offset;
	        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
	        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

	        if (toBlockIter && !isSameBlock) {
	          // process intermediate blocks
	          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
	            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
	          } // process last block


	          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
	        }
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
	        removeDetails.aggregate(b.remove(bFromPos, bToPos));
	      });

	      return removeDetails;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      // TODO refactor - extract alignblock
	      var beginBlockData = this._mapPosToBlock(cursorPos) || {
	        index: 0,
	        offset: 0
	      };
	      var beginBlockOffset = beginBlockData.offset,
	          beginBlockIndex = beginBlockData.index;
	      var beginBlock = this._blocks[beginBlockIndex];
	      if (!beginBlock) return cursorPos;
	      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

	      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
	        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
	      }

	      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
	      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

	      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
	      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

	      if (direction === DIRECTION.NONE) {
	        // NONE direction used to calculate start input position if no chars were removed
	        // FOR NONE:
	        // -
	        // input|any
	        // ->
	        //  any|input
	        // <-
	        //  filled-input|any
	        // check if first block at left is input
	        if (searchBlockIndex > 0) {
	          var blockIndexAtLeft = searchBlockIndex - 1;
	          var blockAtLeft = this._blocks[blockIndexAtLeft];
	          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

	          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
	            return this._blockStartPos(searchBlockIndex);
	          }
	        } // ->


	        var firstInputAtRight = searchBlockIndex;

	        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
	          var blockAtRight = this._blocks[bi];

	          var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);

	          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
	            return this._blockStartPos(bi) + _blockInputPos;
	          }
	        } // <-
	        // find first non-fixed symbol


	        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
	          var _block3 = this._blocks[_bi];

	          var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE); // is input


	          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
	            return this._blockStartPos(_bi) + _block3.value.length;
	          }
	        }

	        return cursorPos;
	      }

	      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
	        // -
	        //  any|filled-input
	        // <-
	        //  any|first not empty is not-len-aligned
	        //  not-0-aligned|any
	        // ->
	        //  any|not-len-aligned or end
	        // check if first block at right is filled input
	        var firstFilledBlockIndexAtRight;

	        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
	          if (this._blocks[_bi2].value) {
	            firstFilledBlockIndexAtRight = _bi2;
	            break;
	          }
	        }

	        if (firstFilledBlockIndexAtRight != null) {
	          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

	          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

	          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
	            // filled block is input
	            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
	          }
	        } // <-
	        // find this vars


	        var firstFilledInputBlockIndex = -1;
	        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

	        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
	          var _block4 = this._blocks[_bi3];

	          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

	          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

	          if (_blockInputPos4 !== 0) {
	            if (_blockInputPos4 !== _block4.value.length) {
	              // aligned inside block - return immediately
	              return this._blockStartPos(_bi3) + _blockInputPos4;
	            } else {
	              // found filled
	              firstFilledInputBlockIndex = _bi3;
	              break;
	            }
	          }
	        }

	        if (direction === DIRECTION.LEFT) {
	          // try find first empty input before start searching position only when not forced
	          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
	            var _block5 = this._blocks[_bi4];

	            var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);

	            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

	            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

	            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
	          }
	        } // process overflow


	        if (firstFilledInputBlockIndex >= 0) {
	          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
	        } // for lazy if has aligned left inside fixed and has came to the start - use start position


	        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
	          return 0;
	        }

	        if (firstEmptyInputBlockIndex != null) {
	          return this._blockStartPos(firstEmptyInputBlockIndex);
	        } // find first input


	        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
	          var _block6 = this._blocks[_bi5];

	          var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


	          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
	            return this._blockStartPos(_bi5) + _blockInputPos6;
	          }
	        }

	        return 0;
	      }

	      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
	        // ->
	        //  any|not-len-aligned and filled
	        //  any|not-len-aligned
	        // <-
	        //  not-0-aligned or start|any
	        var firstInputBlockAlignedIndex;
	        var firstInputBlockAlignedPos;

	        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
	          var _block7 = this._blocks[_bi6];

	          var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);

	          if (_blockInputPos7 !== _block7.value.length) {
	            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
	            firstInputBlockAlignedIndex = _bi6;
	            break;
	          }
	        }

	        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
	          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
	            var _block8 = this._blocks[_bi7];

	            var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

	            if (_blockInputPos8 !== _block8.value.length) {
	              return this._blockStartPos(_bi7) + _blockInputPos8;
	            }
	          }

	          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
	        }

	        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
	          var _block9 = this._blocks[_bi8];

	          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

	          if (_blockInputPos9 !== 0) {
	            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

	            if (alignedPos >= cursorPos) return alignedPos;
	            break;
	          }
	        }
	      }

	      return cursorPos;
	    }
	    /** Get block by name */

	  }, {
	    key: "maskedBlock",
	    value: function maskedBlock(name) {
	      return this.maskedBlocks(name)[0];
	    }
	    /** Get all blocks by name */

	  }, {
	    key: "maskedBlocks",
	    value: function maskedBlocks(name) {
	      var _this4 = this;

	      var indices = this._maskedBlocks[name];
	      if (!indices) return [];
	      return indices.map(function (gi) {
	        return _this4._blocks[gi];
	      });
	    }
	  }]);

	  return MaskedPattern;
	}(Masked);
	MaskedPattern.DEFAULTS = {
	  lazy: true,
	  placeholderChar: '_'
	};
	MaskedPattern.STOP_CHAR = '`';
	MaskedPattern.ESCAPE_CHAR = '\\';
	MaskedPattern.InputDefinition = PatternInputDefinition;
	MaskedPattern.FixedDefinition = PatternFixedDefinition;

	function isInput(block) {
	  if (!block) return false;
	  var value = block.value;
	  return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
	}

	IMask.MaskedPattern = MaskedPattern;

	/** Pattern which accepts ranges */

	var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedRange, _MaskedPattern);

	  var _super = _createSuper(MaskedRange);

	  function MaskedRange() {
	    _classCallCheck(this, MaskedRange);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedRange, [{
	    key: "_matchFrom",
	    get:
	    /**
	      Optionally sets max length of pattern.
	      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
	    */

	    /** Min bound */

	    /** Max bound */

	    /** */
	    function get() {
	      return this.maxLength - String(this.from).length;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_update",
	    value: function _update(opts) {
	      // TODO type
	      opts = Object.assign({
	        to: this.to || 0,
	        from: this.from || 0
	      }, opts);
	      var maxLength = String(opts.to).length;
	      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
	      opts.maxLength = maxLength;
	      var fromStr = String(opts.from).padStart(maxLength, '0');
	      var toStr = String(opts.to).padStart(maxLength, '0');
	      var sameCharsCount = 0;

	      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
	        ++sameCharsCount;
	      }

	      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

	      _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
	    }
	  }, {
	    key: "boundaries",
	    value: function boundaries(str) {
	      var minstr = '';
	      var maxstr = '';

	      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
	          _ref2 = _slicedToArray(_ref, 3),
	          placeholder = _ref2[1],
	          num = _ref2[2];

	      if (num) {
	        minstr = '0'.repeat(placeholder.length) + num;
	        maxstr = '9'.repeat(placeholder.length) + num;
	      }

	      minstr = minstr.padEnd(this.maxLength, '0');
	      maxstr = maxstr.padEnd(this.maxLength, '9');
	      return [minstr, maxstr];
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
	      if (!this.autofix) return str;
	      var fromStr = String(this.from).padStart(this.maxLength, '0');
	      var toStr = String(this.to).padStart(this.maxLength, '0');
	      var val = this.value;
	      var prepStr = '';

	      for (var ci = 0; ci < str.length; ++ci) {
	        var nextVal = val + prepStr + str[ci];

	        var _this$boundaries = this.boundaries(nextVal),
	            _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
	            minstr = _this$boundaries2[0],
	            maxstr = _this$boundaries2[1];

	        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
	      }

	      return prepStr;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var str = this.value;
	      var firstNonZero = str.search(/[^0]/);
	      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

	      var _this$boundaries3 = this.boundaries(str),
	          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
	          minstr = _this$boundaries4[0],
	          maxstr = _this$boundaries4[1];

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }]);

	  return MaskedRange;
	}(MaskedPattern);
	IMask.MaskedRange = MaskedRange;

	/** Date mask */

	var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedDate, _MaskedPattern);

	  var _super = _createSuper(MaskedDate);

	  /** Pattern mask for date according to {@link MaskedDate#format} */

	  /** Start date */

	  /** End date */

	  /** */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDate(opts) {
	    _classCallCheck(this, MaskedDate);

	    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDate, [{
	    key: "_update",
	    value: function _update(opts) {
	      if (opts.mask === Date) delete opts.mask;
	      if (opts.pattern) opts.mask = opts.pattern;
	      var blocks = opts.blocks;
	      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

	      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
	      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

	      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
	        opts.blocks.m.from = opts.min.getMonth() + 1;
	        opts.blocks.m.to = opts.max.getMonth() + 1;

	        if (opts.blocks.m.from === opts.blocks.m.to) {
	          opts.blocks.d.from = opts.min.getDate();
	          opts.blocks.d.to = opts.max.getDate();
	        }
	      }

	      Object.assign(opts.blocks, blocks); // add autofix

	      Object.keys(opts.blocks).forEach(function (bk) {
	        var b = opts.blocks[bk];
	        if (!('autofix' in b)) b.autofix = opts.autofix;
	      });

	      _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var date = this.date;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
	    }
	    /** Checks if date is exists */

	  }, {
	    key: "isDateExist",
	    value: function isDateExist(str) {
	      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
	    }
	    /** Parsed Date */

	  }, {
	    key: "date",
	    get: function get() {
	      return this.typedValue;
	    },
	    set: function set(date) {
	      this.typedValue = date;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
	    }
	  }]);

	  return MaskedDate;
	}(MaskedPattern);
	MaskedDate.DEFAULTS = {
	  pattern: 'd{.}`m{.}`Y',
	  format: function format(date) {
	    var day = String(date.getDate()).padStart(2, '0');
	    var month = String(date.getMonth() + 1).padStart(2, '0');
	    var year = date.getFullYear();
	    return [day, month, year].join('.');
	  },
	  parse: function parse(str) {
	    var _str$split = str.split('.'),
	        _str$split2 = _slicedToArray(_str$split, 3),
	        day = _str$split2[0],
	        month = _str$split2[1],
	        year = _str$split2[2];

	    return new Date(year, month - 1, day);
	  }
	};

	MaskedDate.GET_DEFAULT_BLOCKS = function () {
	  return {
	    d: {
	      mask: MaskedRange,
	      from: 1,
	      to: 31,
	      maxLength: 2
	    },
	    m: {
	      mask: MaskedRange,
	      from: 1,
	      to: 12,
	      maxLength: 2
	    },
	    Y: {
	      mask: MaskedRange,
	      from: 1900,
	      to: 9999
	    }
	  };
	};

	IMask.MaskedDate = MaskedDate;

	/**
	  Generic element API to use with mask
	  @interface
	*/
	var MaskElement = /*#__PURE__*/function () {
	  function MaskElement() {
	    _classCallCheck(this, MaskElement);
	  }

	  _createClass(MaskElement, [{
	    key: "selectionStart",
	    get:
	    /** */

	    /** */

	    /** */

	    /** Safely returns selection start */
	    function get() {
	      var start;

	      try {
	        start = this._unsafeSelectionStart;
	      } catch (e) {}

	      return start != null ? start : this.value.length;
	    }
	    /** Safely returns selection end */

	  }, {
	    key: "selectionEnd",
	    get: function get() {
	      var end;

	      try {
	        end = this._unsafeSelectionEnd;
	      } catch (e) {}

	      return end != null ? end : this.value.length;
	    }
	    /** Safely sets element selection */

	  }, {
	    key: "select",
	    value: function select(start, end) {
	      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

	      try {
	        this._unsafeSelect(start, end);
	      } catch (e) {}
	    }
	    /** Should be overriden in subclasses */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "isActive",
	    get: function get() {
	      return false;
	    }
	    /** Should be overriden in subclasses */

	  }, {
	    key: "bindEvents",
	    value: function bindEvents(handlers) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {}
	  }]);

	  return MaskElement;
	}();
	IMask.MaskElement = MaskElement;

	/** Bridge between HTMLElement and {@link Masked} */

	var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
	  _inherits(HTMLMaskElement, _MaskElement);

	  var _super = _createSuper(HTMLMaskElement);

	  /** Mapping between HTMLElement events and mask internal events */

	  /** HTMLElement to use mask on */

	  /**
	    @param {HTMLInputElement|HTMLTextAreaElement} input
	  */
	  function HTMLMaskElement(input) {
	    var _this;

	    _classCallCheck(this, HTMLMaskElement);

	    _this = _super.call(this);
	    _this.input = input;
	    _this._handlers = {};
	    return _this;
	  }
	  /** */
	  // $FlowFixMe https://github.com/facebook/flow/issues/2839


	  _createClass(HTMLMaskElement, [{
	    key: "rootElement",
	    get: function get() {
	      return this.input.getRootNode ? this.input.getRootNode() : document;
	    }
	    /**
	      Is element in focus
	      @readonly
	    */

	  }, {
	    key: "isActive",
	    get: function get() {
	      //$FlowFixMe
	      return this.input === this.rootElement.activeElement;
	    }
	    /**
	      Returns HTMLElement selection start
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionStart",
	    get: function get() {
	      return this.input.selectionStart;
	    }
	    /**
	      Returns HTMLElement selection end
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionEnd",
	    get: function get() {
	      return this.input.selectionEnd;
	    }
	    /**
	      Sets HTMLElement selection
	      @override
	    */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {
	      this.input.setSelectionRange(start, end);
	    }
	    /**
	      HTMLElement value
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      return this.input.value;
	    },
	    set: function set(value) {
	      this.input.value = value;
	    }
	    /**
	      Binds HTMLElement events to mask internal events
	      @override
	    */

	  }, {
	    key: "bindEvents",
	    value: function bindEvents(handlers) {
	      var _this2 = this;

	      Object.keys(handlers).forEach(function (event) {
	        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
	      });
	    }
	    /**
	      Unbinds HTMLElement events to mask internal events
	      @override
	    */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {
	      var _this3 = this;

	      Object.keys(this._handlers).forEach(function (event) {
	        return _this3._toggleEventHandler(event);
	      });
	    }
	    /** */

	  }, {
	    key: "_toggleEventHandler",
	    value: function _toggleEventHandler(event, handler) {
	      if (this._handlers[event]) {
	        this.input.removeEventListener(event, this._handlers[event]);
	        delete this._handlers[event];
	      }

	      if (handler) {
	        this.input.addEventListener(event, handler);
	        this._handlers[event] = handler;
	      }
	    }
	  }]);

	  return HTMLMaskElement;
	}(MaskElement);
	HTMLMaskElement.EVENTS_MAP = {
	  selectionChange: 'keydown',
	  input: 'input',
	  drop: 'drop',
	  click: 'click',
	  focus: 'focus',
	  commit: 'blur'
	};
	IMask.HTMLMaskElement = HTMLMaskElement;

	var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
	  _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

	  var _super = _createSuper(HTMLContenteditableMaskElement);

	  function HTMLContenteditableMaskElement() {
	    _classCallCheck(this, HTMLContenteditableMaskElement);

	    return _super.apply(this, arguments);
	  }

	  _createClass(HTMLContenteditableMaskElement, [{
	    key: "_unsafeSelectionStart",
	    get:
	    /**
	      Returns HTMLElement selection start
	      @override
	    */
	    function get() {
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();
	      return selection && selection.anchorOffset;
	    }
	    /**
	      Returns HTMLElement selection end
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionEnd",
	    get: function get() {
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();
	      return selection && this._unsafeSelectionStart + String(selection).length;
	    }
	    /**
	      Sets HTMLElement selection
	      @override
	    */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {
	      if (!this.rootElement.createRange) return;
	      var range = this.rootElement.createRange();
	      range.setStart(this.input.firstChild || this.input, start);
	      range.setEnd(this.input.lastChild || this.input, end);
	      var root = this.rootElement;
	      var selection = root.getSelection && root.getSelection();

	      if (selection) {
	        selection.removeAllRanges();
	        selection.addRange(range);
	      }
	    }
	    /**
	      HTMLElement value
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      // $FlowFixMe
	      return this.input.textContent;
	    },
	    set: function set(value) {
	      this.input.textContent = value;
	    }
	  }]);

	  return HTMLContenteditableMaskElement;
	}(HTMLMaskElement);
	IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

	/** Listens to element events and controls changes between element and {@link Masked} */

	var InputMask = /*#__PURE__*/function () {
	  /**
	    View element
	    @readonly
	  */

	  /**
	    Internal {@link Masked} model
	    @readonly
	  */

	  /**
	    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
	    @param {Object} opts
	  */
	  function InputMask(el, opts) {
	    _classCallCheck(this, InputMask);

	    this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
	    this.masked = createMask(opts);
	    this._listeners = {};
	    this._value = '';
	    this._unmaskedValue = '';
	    this._saveSelection = this._saveSelection.bind(this);
	    this._onInput = this._onInput.bind(this);
	    this._onChange = this._onChange.bind(this);
	    this._onDrop = this._onDrop.bind(this);
	    this._onFocus = this._onFocus.bind(this);
	    this._onClick = this._onClick.bind(this);
	    this.alignCursor = this.alignCursor.bind(this);
	    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

	    this._bindEvents(); // refresh


	    this.updateValue();

	    this._onChange();
	  }
	  /** Read or update mask */


	  _createClass(InputMask, [{
	    key: "mask",
	    get: function get() {
	      return this.masked.mask;
	    },
	    set: function set(mask) {
	      if (this.maskEquals(mask)) return;

	      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
	        this.masked.updateOptions({
	          mask: mask
	        });
	        return;
	      }

	      var masked = createMask({
	        mask: mask
	      });
	      masked.unmaskedValue = this.masked.unmaskedValue;
	      this.masked = masked;
	    }
	    /** Raw value */

	  }, {
	    key: "maskEquals",
	    value: function maskEquals(mask) {
	      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(str) {
	      this.masked.value = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Unmasked value */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._unmaskedValue;
	    },
	    set: function set(str) {
	      this.masked.unmaskedValue = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Typed unmasked value */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.masked.typedValue;
	    },
	    set: function set(val) {
	      this.masked.typedValue = val;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /**
	      Starts listening to element events
	      @protected
	    */

	  }, {
	    key: "_bindEvents",
	    value: function _bindEvents() {
	      this.el.bindEvents({
	        selectionChange: this._saveSelection,
	        input: this._onInput,
	        drop: this._onDrop,
	        click: this._onClick,
	        focus: this._onFocus,
	        commit: this._onChange
	      });
	    }
	    /**
	      Stops listening to element events
	      @protected
	     */

	  }, {
	    key: "_unbindEvents",
	    value: function _unbindEvents() {
	      if (this.el) this.el.unbindEvents();
	    }
	    /**
	      Fires custom event
	      @protected
	     */

	  }, {
	    key: "_fireEvent",
	    value: function _fireEvent(ev) {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var listeners = this._listeners[ev];
	      if (!listeners) return;
	      listeners.forEach(function (l) {
	        return l.apply(void 0, args);
	      });
	    }
	    /**
	      Current selection start
	      @readonly
	    */

	  }, {
	    key: "selectionStart",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
	    }
	    /** Current cursor position */

	  }, {
	    key: "cursorPos",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
	    },
	    set: function set(pos) {
	      if (!this.el || !this.el.isActive) return;
	      this.el.select(pos, pos);

	      this._saveSelection();
	    }
	    /**
	      Stores current selection
	      @protected
	    */

	  }, {
	    key: "_saveSelection",
	    value: function _saveSelection()
	    /* ev */
	    {
	      if (this.value !== this.el.value) {
	        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
	      }

	      this._selection = {
	        start: this.selectionStart,
	        end: this.cursorPos
	      };
	    }
	    /** Syncronizes model value from view */

	  }, {
	    key: "updateValue",
	    value: function updateValue() {
	      this.masked.value = this.el.value;
	      this._value = this.masked.value;
	    }
	    /** Syncronizes view from model value, fires change events */

	  }, {
	    key: "updateControl",
	    value: function updateControl() {
	      var newUnmaskedValue = this.masked.unmaskedValue;
	      var newValue = this.masked.value;
	      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
	      this._unmaskedValue = newUnmaskedValue;
	      this._value = newValue;
	      if (this.el.value !== newValue) this.el.value = newValue;
	      if (isChanged) this._fireChangeEvents();
	    }
	    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

	  }, {
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      var mask = opts.mask,
	          restOpts = _objectWithoutProperties(opts, ["mask"]);

	      var updateMask = !this.maskEquals(mask);
	      var updateOpts = !objectIncludes(this.masked, restOpts);
	      if (updateMask) this.mask = mask;
	      if (updateOpts) this.masked.updateOptions(restOpts);
	      if (updateMask || updateOpts) this.updateControl();
	    }
	    /** Updates cursor */

	  }, {
	    key: "updateCursor",
	    value: function updateCursor(cursorPos) {
	      if (cursorPos == null) return;
	      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

	      this._delayUpdateCursor(cursorPos);
	    }
	    /**
	      Delays cursor update to support mobile browsers
	      @private
	    */

	  }, {
	    key: "_delayUpdateCursor",
	    value: function _delayUpdateCursor(cursorPos) {
	      var _this = this;

	      this._abortUpdateCursor();

	      this._changingCursorPos = cursorPos;
	      this._cursorChanging = setTimeout(function () {
	        if (!_this.el) return; // if was destroyed

	        _this.cursorPos = _this._changingCursorPos;

	        _this._abortUpdateCursor();
	      }, 10);
	    }
	    /**
	      Fires custom events
	      @protected
	    */

	  }, {
	    key: "_fireChangeEvents",
	    value: function _fireChangeEvents() {
	      this._fireEvent('accept', this._inputEvent);

	      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
	    }
	    /**
	      Aborts delayed cursor update
	      @private
	    */

	  }, {
	    key: "_abortUpdateCursor",
	    value: function _abortUpdateCursor() {
	      if (this._cursorChanging) {
	        clearTimeout(this._cursorChanging);
	        delete this._cursorChanging;
	      }
	    }
	    /** Aligns cursor to nearest available position */

	  }, {
	    key: "alignCursor",
	    value: function alignCursor() {
	      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
	    }
	    /** Aligns cursor only if selection is empty */

	  }, {
	    key: "alignCursorFriendly",
	    value: function alignCursorFriendly() {
	      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

	      this.alignCursor();
	    }
	    /** Adds listener on custom event */

	  }, {
	    key: "on",
	    value: function on(ev, handler) {
	      if (!this._listeners[ev]) this._listeners[ev] = [];

	      this._listeners[ev].push(handler);

	      return this;
	    }
	    /** Removes custom event listener */

	  }, {
	    key: "off",
	    value: function off(ev, handler) {
	      if (!this._listeners[ev]) return this;

	      if (!handler) {
	        delete this._listeners[ev];
	        return this;
	      }

	      var hIndex = this._listeners[ev].indexOf(handler);

	      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
	      return this;
	    }
	    /** Handles view input event */

	  }, {
	    key: "_onInput",
	    value: function _onInput(e) {
	      this._inputEvent = e;

	      this._abortUpdateCursor(); // fix strange IE behavior


	      if (!this._selection) return this.updateValue();
	      var details = new ActionDetails( // new state
	      this.el.value, this.cursorPos, // old state
	      this.value, this._selection);
	      var oldRawValue = this.masked.rawInputValue;
	      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
	      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

	      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
	      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
	      this.updateControl();
	      this.updateCursor(cursorPos);
	      delete this._inputEvent;
	    }
	    /** Handles view change event and commits model value */

	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      if (this.value !== this.el.value) {
	        this.updateValue();
	      }

	      this.masked.doCommit();
	      this.updateControl();

	      this._saveSelection();
	    }
	    /** Handles view drop event, prevents by default */

	  }, {
	    key: "_onDrop",
	    value: function _onDrop(ev) {
	      ev.preventDefault();
	      ev.stopPropagation();
	    }
	    /** Restore last selection on focus */

	  }, {
	    key: "_onFocus",
	    value: function _onFocus(ev) {
	      this.alignCursorFriendly();
	    }
	    /** Restore last selection on focus */

	  }, {
	    key: "_onClick",
	    value: function _onClick(ev) {
	      this.alignCursorFriendly();
	    }
	    /** Unbind view events and removes element reference */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this._unbindEvents(); // $FlowFixMe why not do so?


	      this._listeners.length = 0; // $FlowFixMe

	      delete this.el;
	    }
	  }]);

	  return InputMask;
	}();
	IMask.InputMask = InputMask;

	/** Pattern which validates enum values */

	var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
	  _inherits(MaskedEnum, _MaskedPattern);

	  var _super = _createSuper(MaskedEnum);

	  function MaskedEnum() {
	    _classCallCheck(this, MaskedEnum);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedEnum, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      // TODO type
	      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

	      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this = this,
	          _get2;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.enum.some(function (e) {
	        return e.indexOf(_this.unmaskedValue) >= 0;
	      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }]);

	  return MaskedEnum;
	}(MaskedPattern);
	IMask.MaskedEnum = MaskedEnum;

	/**
	  Number mask
	  @param {Object} opts
	  @param {string} opts.radix - Single char
	  @param {string} opts.thousandsSeparator - Single char
	  @param {Array<string>} opts.mapToRadix - Array of single chars
	  @param {number} opts.min
	  @param {number} opts.max
	  @param {number} opts.scale - Digits after point
	  @param {boolean} opts.signed - Allow negative
	  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
	  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
	*/
	var MaskedNumber = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedNumber, _Masked);

	  var _super = _createSuper(MaskedNumber);

	  /** Single char */

	  /** Single char */

	  /** Array of single chars */

	  /** */

	  /** */

	  /** Digits after point */

	  /** */

	  /** Flag to remove leading and trailing zeros in the end of editing */

	  /** Flag to pad trailing zeros after point in the end of editing */
	  function MaskedNumber(opts) {
	    _classCallCheck(this, MaskedNumber);

	    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedNumber, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

	      this._updateRegExps();
	    }
	    /** */

	  }, {
	    key: "_updateRegExps",
	    value: function _updateRegExps() {
	      // use different regexp to process user input (more strict, input suffix) and tail shifting
	      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
	      var midInput = '(0|([1-9]+\\d*))?';
	      var mid = '\\d*';
	      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
	      this._numberRegExpInput = new RegExp(start + midInput + end);
	      this._numberRegExp = new RegExp(start + mid + end);
	      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
	      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
	    }
	    /** */

	  }, {
	    key: "_removeThousandsSeparators",
	    value: function _removeThousandsSeparators(value) {
	      return value.replace(this._thousandsSeparatorRegExp, '');
	    }
	    /** */

	  }, {
	    key: "_insertThousandsSeparators",
	    value: function _insertThousandsSeparators(value) {
	      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
	      var parts = value.split(this.radix);
	      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var _get2;

	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
	    }
	    /** */

	  }, {
	    key: "_separatorsCount",
	    value: function _separatorsCount(to) {
	      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var count = 0;

	      for (var pos = 0; pos < to; ++pos) {
	        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
	          ++count;
	          if (extendOnSeparators) to += this.thousandsSeparator.length;
	        }
	      }

	      return count;
	    }
	    /** */

	  }, {
	    key: "_separatorsCountFromSlice",
	    value: function _separatorsCountFromSlice() {
	      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
	      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;

	      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

	      fromPos = _this$_adjustRangeWit2[0];
	      toPos = _this$_adjustRangeWit2[1];
	      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
	      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

	      this._value = this._removeThousandsSeparators(this.value);

	      var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

	      this._value = this._insertThousandsSeparators(this._value);
	      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

	      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
	      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
	      return appendDetails;
	    }
	    /** */

	  }, {
	    key: "_findSeparatorAround",
	    value: function _findSeparatorAround(pos) {
	      if (this.thousandsSeparator) {
	        var searchFrom = pos - this.thousandsSeparator.length + 1;
	        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
	        if (separatorPos <= pos) return separatorPos;
	      }

	      return -1;
	    }
	  }, {
	    key: "_adjustRangeWithSeparators",
	    value: function _adjustRangeWithSeparators(from, to) {
	      var separatorAroundFromPos = this._findSeparatorAround(from);

	      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

	      var separatorAroundToPos = this._findSeparatorAround(to);

	      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
	      return [from, to];
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

	      fromPos = _this$_adjustRangeWit4[0];
	      toPos = _this$_adjustRangeWit4[1];
	      var valueBeforePos = this.value.slice(0, fromPos);
	      var valueAfterPos = this.value.slice(toPos);

	      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

	      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

	      return new ChangeDetails({
	        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos, direction) {
	      if (!this.thousandsSeparator) return cursorPos;

	      switch (direction) {
	        case DIRECTION.NONE:
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          {
	            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

	            if (separatorAtLeftPos >= 0) {
	              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

	              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
	                return separatorAtLeftPos;
	              }
	            }

	            break;
	          }

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          {
	            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

	            if (separatorAtRightPos >= 0) {
	              return separatorAtRightPos + this.thousandsSeparator.length;
	            }
	          }
	      }

	      return cursorPos;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

	      var valid = regexp.test(this._removeThousandsSeparators(this.value));

	      if (valid) {
	        // validate as number
	        var number = this.number;
	        valid = valid && !isNaN(number) && ( // check min bound for negative values
	        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
	        this.max == null || this.max <= 0 || this.number <= this.max);
	      }

	      return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.value) {
	        var number = this.number;
	        var validnum = number; // check bounds

	        if (this.min != null) validnum = Math.max(validnum, this.min);
	        if (this.max != null) validnum = Math.min(validnum, this.max);
	        if (validnum !== number) this.unmaskedValue = String(validnum);
	        var formatted = this.value;
	        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
	        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
	        this._value = formatted;
	      }

	      _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
	    }
	    /** */

	  }, {
	    key: "_normalizeZeros",
	    value: function _normalizeZeros(value) {
	      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


	      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
	        return sign + num;
	      }); // add leading zero

	      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

	      if (parts.length > 1) {
	        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

	        if (!parts[1].length) parts.length = 1; // remove fractional
	      }

	      return this._insertThousandsSeparators(parts.join(this.radix));
	    }
	    /** */

	  }, {
	    key: "_padFractionalZeros",
	    value: function _padFractionalZeros(value) {
	      if (!value) return value;
	      var parts = value.split(this.radix);
	      if (parts.length < 2) parts.push('');
	      parts[1] = parts[1].padEnd(this.scale, '0');
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return Number(this.unmaskedValue);
	    },
	    set: function set(n) {
	      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
	    }
	    /** Parsed Number */

	  }, {
	    key: "number",
	    get: function get() {
	      return this.typedValue;
	    },
	    set: function set(number) {
	      this.typedValue = number;
	    }
	    /**
	      Is negative allowed
	      @readonly
	    */

	  }, {
	    key: "allowNegative",
	    get: function get() {
	      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
	    }
	  }]);

	  return MaskedNumber;
	}(Masked);
	MaskedNumber.DEFAULTS = {
	  radix: ',',
	  thousandsSeparator: '',
	  mapToRadix: ['.'],
	  scale: 2,
	  signed: false,
	  normalizeZeros: true,
	  padFractionalZeros: false
	};
	IMask.MaskedNumber = MaskedNumber;

	/** Masking by custom Function */

	var MaskedFunction = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedFunction, _Masked);

	  var _super = _createSuper(MaskedFunction);

	  function MaskedFunction() {
	    _classCallCheck(this, MaskedFunction);

	    return _super.apply(this, arguments);
	  }

	  _createClass(MaskedFunction, [{
	    key: "_update",
	    value:
	    /**
	      @override
	      @param {Object} opts
	    */
	    function _update(opts) {
	      if (opts.mask) opts.validate = opts.mask;

	      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedFunction;
	}(Masked);
	IMask.MaskedFunction = MaskedFunction;

	/** Dynamic mask for choosing apropriate mask in run-time */
	var MaskedDynamic = /*#__PURE__*/function (_Masked) {
	  _inherits(MaskedDynamic, _Masked);

	  var _super = _createSuper(MaskedDynamic);

	  /** Currently chosen mask */

	  /** Compliled {@link Masked} options */

	  /** Chooses {@link Masked} depending on input value */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDynamic(opts) {
	    var _this;

	    _classCallCheck(this, MaskedDynamic);

	    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
	    _this.currentMask = null;
	    return _this;
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDynamic, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

	      if ('mask' in opts) {
	        // mask could be totally dynamic with only `dispatch` option
	        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
	          return createMask(m);
	        }) : [];
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var details = this._applyDispatch(ch, flags);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendChar(ch, flags));
	      }

	      return details;
	    }
	  }, {
	    key: "_applyDispatch",
	    value: function _applyDispatch() {
	      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
	      var inputValue = this.rawInputValue;
	      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
	      flags._beforeTailState._rawInputValue : inputValue;
	      var tailValue = inputValue.slice(insertValue.length);
	      var prevMask = this.currentMask;
	      var details = new ChangeDetails();
	      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

	      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

	      if (this.currentMask) {
	        if (this.currentMask !== prevMask) {
	          // if mask changed reapply input
	          this.currentMask.reset();

	          if (insertValue) {
	            // $FlowFixMe - it's ok, we don't change current mask above
	            var d = this.currentMask.append(insertValue, {
	              raw: true
	            });
	            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
	          }

	          if (tailValue) {
	            // $FlowFixMe - it's ok, we don't change current mask above
	            details.tailShift += this.currentMask.append(tailValue, {
	              raw: true,
	              tail: true
	            }).tailShift;
	          }
	        } else {
	          // Dispatch can do something bad with state, so
	          // restore prev mask state
	          this.currentMask.state = prevMaskState;
	        }
	      }

	      return details;
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = this._applyDispatch.apply(this, arguments);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendPlaceholder());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doDispatch",
	    value: function doDispatch(appended) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.dispatch(appended, this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2, _this$currentMask;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",
	    value: function reset() {
	      if (this.currentMask) this.currentMask.reset();
	      this.compiledMasks.forEach(function (m) {
	        return m.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      return this.currentMask ? this.currentMask.value : '';
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.unmaskedValue : '';
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.typedValue : '';
	    } // probably typedValue should not be used with dynamic
	    ,
	    set: function set(value) {
	      var unmaskedValue = String(value); // double check it

	      if (this.currentMask) {
	        this.currentMask.typedValue = value;
	        unmaskedValue = this.currentMask.unmaskedValue;
	      }

	      this.unmaskedValue = unmaskedValue;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return !!this.currentMask && this.currentMask.isComplete;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var details = new ChangeDetails();

	      if (this.currentMask) {
	        var _this$currentMask2;

	        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)) // update with dispatch
	        .aggregate(this._applyDispatch());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
	        _rawInputValue: this.rawInputValue,
	        compiledMasks: this.compiledMasks.map(function (m) {
	          return m.state;
	        }),
	        currentMaskRef: this.currentMask,
	        currentMask: this.currentMask && this.currentMask.state
	      });
	    },
	    set: function set(state) {
	      var compiledMasks = state.compiledMasks,
	          currentMaskRef = state.currentMaskRef,
	          currentMask = state.currentMask,
	          maskedState = _objectWithoutProperties(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

	      this.compiledMasks.forEach(function (m, mi) {
	        return m.state = compiledMasks[mi];
	      });

	      if (currentMaskRef != null) {
	        this.currentMask = currentMaskRef;
	        this.currentMask.state = currentMask;
	      }

	      _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var _this$currentMask3;

	      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : '';
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$currentMask4, _get3;

	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.currentMask) this.currentMask.doCommit();

	      _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos() {
	      var _this$currentMask5, _get4;

	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
	    }
	  }, {
	    key: "overwrite",
	    get: function get() {
	      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
	    },
	    set: function set(overwrite) {
	      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
	    }
	  }]);

	  return MaskedDynamic;
	}(Masked);
	MaskedDynamic.DEFAULTS = {
	  dispatch: function dispatch(appended, masked, flags) {
	    if (!masked.compiledMasks.length) return;
	    var inputValue = masked.rawInputValue; // simulate input

	    var inputs = masked.compiledMasks.map(function (m, index) {
	      m.reset();
	      m.append(inputValue, {
	        raw: true
	      });
	      m.append(appended, flags);
	      var weight = m.rawInputValue.length;
	      return {
	        weight: weight,
	        index: index
	      };
	    }); // pop masks with longer values first

	    inputs.sort(function (i1, i2) {
	      return i2.weight - i1.weight;
	    });
	    return masked.compiledMasks[inputs[0].index];
	  }
	};
	IMask.MaskedDynamic = MaskedDynamic;

	/** Mask pipe source and destination types */

	var PIPE_TYPE = {
	  MASKED: 'value',
	  UNMASKED: 'unmaskedValue',
	  TYPED: 'typedValue'
	};
	/** Creates new pipe function depending on mask type, source and destination options */

	function createPipe(mask) {
	  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
	  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
	  var masked = createMask(mask);
	  return function (value) {
	    return masked.runIsolated(function (m) {
	      m[from] = value;
	      return m[to];
	    });
	  };
	}
	/** Pipes value through mask depending on mask type, source and destination options */

	function pipe(value) {
	  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    pipeArgs[_key - 1] = arguments[_key];
	  }

	  return createPipe.apply(void 0, pipeArgs)(value);
	}
	IMask.PIPE_TYPE = PIPE_TYPE;
	IMask.createPipe = createPipe;
	IMask.pipe = pipe;

	try {
	  globalThis.IMask = IMask;
	} catch (e) {}

	exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
	exports.HTMLMaskElement = HTMLMaskElement;
	exports.InputMask = InputMask;
	exports.MaskElement = MaskElement;
	exports.Masked = Masked;
	exports.MaskedDate = MaskedDate;
	exports.MaskedDynamic = MaskedDynamic;
	exports.MaskedEnum = MaskedEnum;
	exports.MaskedFunction = MaskedFunction;
	exports.MaskedNumber = MaskedNumber;
	exports.MaskedPattern = MaskedPattern;
	exports.MaskedRange = MaskedRange;
	exports.MaskedRegExp = MaskedRegExp;
	exports.PIPE_TYPE = PIPE_TYPE;
	exports.createMask = createMask;
	exports.createPipe = createPipe;
	exports.default = IMask;
	exports.pipe = pipe;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=imask.js.map
/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
window.Choices=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/assets/scripts/",i(i.s=7)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1);t.DEFAULT_CLASSNAMES={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",selectedState:"is-selected",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},t.DEFAULT_CONFIG={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilter:null,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'+n.sanitise(e)+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added"},valueComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:t.DEFAULT_CLASSNAMES},t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL",RESET_TO:"RESET_TO",SET_IS_LOADING:"SET_IS_LOADING"},t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},t.TEXT_TYPE="text",t.SELECT_ONE_TYPE="select-one",t.SELECT_MULTIPLE_TYPE="select-multiple",t.SCROLLING_SPEED=4},function(e,t,i){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.generateChars=function(e){return Array.from({length:e},(function(){return t.getRandomNumber(0,36).toString(36)})).join("")},t.generateId=function(e,i){var n=e.id||e.name&&e.name+"-"+t.generateChars(2)||t.generateChars(4);return n=i+"-"+(n=n.replace(/(:|\.|\[|\]|,)/g,""))},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isType=function(e,i){return null!=i&&t.getType(i)===e},t.wrap=function(e,t){return void 0===t&&(t=document.createElement("div")),e.nextSibling?e.parentNode&&e.parentNode.insertBefore(t,e.nextSibling):e.parentNode&&e.parentNode.appendChild(t),t.appendChild(e)},t.getAdjacentEl=function(e,t,i){void 0===i&&(i=1);for(var n=(i>0?"next":"previous")+"ElementSibling",r=e[n];r;){if(r.matches(t))return r;r=r[n]}return r},t.isScrolledIntoView=function(e,t,i){return void 0===i&&(i=1),!!e&&(i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop)},t.sanitise=function(e){return"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/>/g,"&rt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},t.strToEl=(n=document.createElement("div"),function(e){var t=e.trim();n.innerHTML=t;for(var i=n.children[0];n.firstChild;)n.removeChild(n.firstChild);return i}),t.sortByAlpha=function(e,t){var i=e.value,n=e.label,r=void 0===n?i:n,o=t.value,s=t.label,a=void 0===s?o:s;return r.localeCompare(a,[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},t.sortByScore=function(e,t){var i=e.score,n=void 0===i?0:i,r=t.score;return n-(void 0===r?0:r)},t.dispatchEvent=function(e,t,i){void 0===i&&(i=null);var n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)},t.existsInArray=function(e,t,i){return void 0===i&&(i="value"),e.some((function(e){return"string"==typeof t?e[i]===t.trim():e[i]===t}))},t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))},t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter((function(e){return n.indexOf(e)<0}))}},function(e,t,i){"use strict";(function(e,n){var r,o=i(6);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var s=Object(o.a)(r);t.a=s}).call(this,i(12),i(13)(e))},function(e,t,i){"use strict";i.r(t),i.d(t,"__DO_NOT_USE__ActionTypes",(function(){return o})),i.d(t,"applyMiddleware",(function(){return v})),i.d(t,"bindActionCreators",(function(){return h})),i.d(t,"combineReducers",(function(){return l})),i.d(t,"compose",(function(){return m})),i.d(t,"createStore",(function(){return a}));var n=i(2),r=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,i){var r;if("function"==typeof t&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,l=t,u=[],h=u,d=!1;function p(){h===u&&(h=u.slice())}function f(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return l}function m(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),h.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var i=h.indexOf(e);h.splice(i,1)}}}function v(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,l=c(l,e)}finally{d=!1}for(var t=u=h,i=0;i<t.length;i++){(0,t[i])()}return e}return v({type:o.INIT}),(r={dispatch:v,subscribe:m,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,v({type:o.REPLACE})}})[n.a]=function(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(f())}return i(),{unsubscribe:t(i)}}})[n.a]=function(){return this},e},r}function c(e,t){var i=t&&t.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function l(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];0,"function"==typeof e[r]&&(i[r]=e[r])}var s,a=Object.keys(i);try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(i)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var n=!1,r={},o=0;o<a.length;o++){var l=a[o],u=i[l],h=e[l],d=u(h,t);if(void 0===d){var p=c(l,t);throw new Error(p)}r[l]=d,n=n||d!==h}return n?r:e}}function u(e,t){return function(){return t(e.apply(this,arguments))}}function h(e,t){if("function"==typeof e)return u(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var i={};for(var n in e){var r=e[n];"function"==typeof r&&(i[n]=u(r,t))}return i}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(e)),t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(i,!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:i.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=t.map((function(e){return e(r)}));return f({},i,{dispatch:n=m.apply(void 0,o)(i.dispatch)})}}}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(3),o=n(i(14)),s=n(i(15)),a=n(i(16)),c=n(i(17)),l=i(1);t.defaultState={groups:[],items:[],choices:[],loading:!1};var u=r.combineReducers({items:o.default,groups:s.default,choices:a.default,loading:c.default});t.default=function(e,i){var n=e;if("CLEAR_ALL"===i.type)n=t.defaultState;else if("RESET_TO"===i.type)return l.cloneObject(i.state);return u(n,i)}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=function(){function e(e){var t=e.element,i=e.classNames;if(this.element=t,this.classNames=i,!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new TypeError("Invalid element passed");this.isDisabled=!1}return Object.defineProperty(e.prototype,"isActive",{get:function(){return"active"===this.element.dataset.choice},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dir",{get:function(){return this.element.dir},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!0,configurable:!0}),e.prototype.conceal=function(){this.element.classList.add(this.classNames.input),this.element.hidden=!0,this.element.tabIndex=-1;var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("data-choice","active")},e.prototype.reveal=function(){this.element.classList.remove(this.classNames.input),this.element.hidden=!1,this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},e.prototype.triggerEvent=function(e,t){n.dispatchEvent(this.element,e,t)},e}();t.default=r},function(e,t,i){"use strict";function n(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",(function(){return n}))},function(e,t,i){e.exports=i(8)},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(i(9)),s=r(i(10)),a=r(i(11)),c=i(18),l=i(0),u=r(i(25)),h=i(26),d=i(27),p=i(28),f=i(29),m=i(1),v=i(4),_="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,g={},y=function(){function e(t,i){var r=this;void 0===t&&(t="[data-choice]"),void 0===i&&(i={}),this.config=s.default.all([l.DEFAULT_CONFIG,e.defaults.options,i],{arrayMerge:function(e,t){return n(t)}});var o=m.diff(this.config,l.DEFAULT_CONFIG);o.length&&console.warn("Unknown config option(s) passed",o.join(", "));var u="string"==typeof t?document.querySelector(t):t;if(!(u instanceof HTMLInputElement||u instanceof HTMLSelectElement))throw TypeError("Expected one of the following types text|select-one|select-multiple");if(this._isTextElement=u.type===l.TEXT_TYPE,this._isSelectOneElement=u.type===l.SELECT_ONE_TYPE,this._isSelectMultipleElement=u.type===l.SELECT_MULTIPLE_TYPE,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this.config.searchEnabled=this._isSelectMultipleElement||this.config.searchEnabled,["auto","always"].includes(""+this.config.renderSelectedChoices)||(this.config.renderSelectedChoices="auto"),i.addItemFilter&&"function"!=typeof i.addItemFilter){var h=i.addItemFilter instanceof RegExp?i.addItemFilter:new RegExp(i.addItemFilter);this.config.addItemFilter=h.test.bind(h)}if(this._isTextElement?this.passedElement=new c.WrappedInput({element:u,classNames:this.config.classNames,delimiter:this.config.delimiter}):this.passedElement=new c.WrappedSelect({element:u,classNames:this.config.classNames,template:function(e){return r._templates.option(e)}}),this.initialised=!1,this._store=new a.default,this._initialState=v.defaultState,this._currentState=v.defaultState,this._prevState=v.defaultState,this._currentValue="",this._canSearch=!!this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=m.generateId(this.passedElement.element,"choices-"),this._direction=this.passedElement.dir,!this._direction){var d=window.getComputedStyle(this.passedElement.element).direction;d!==window.getComputedStyle(document.documentElement).direction&&(this._direction=d)}if(this._idNames={itemChoice:"item-choice"},this._isSelectElement&&(this._presetGroups=this.passedElement.optionGroups,this._presetOptions=this.passedElement.options),this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&this._isTextElement){var p=this.passedElement.value.split(this.config.delimiter);this._presetItems=this._presetItems.concat(p)}if(this.passedElement.options&&this.passedElement.options.forEach((function(e){r._presetChoices.push({value:e.value,label:e.innerHTML,selected:!!e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:""===e.value||e.hasAttribute("placeholder"),customProperties:e.dataset["custom-properties"]})})),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive)return this.config.silent||console.warn("Trying to initialise Choices on element already initialised",{element:t}),void(this.initialised=!0);this.init()}return Object.defineProperty(e,"defaults",{get:function(){return Object.preventExtensions({get options(){return g},get templates(){return u.default}})},enumerable:!0,configurable:!0}),e.prototype.init=function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&"function"==typeof e&&e.call(this)}},e.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this.clearStore(),this._isSelectElement&&(this.passedElement.options=this._presetOptions),this._templates=u.default,this.initialised=!1)},e.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},e.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},e.prototype.highlightItem=function(e,t){if(void 0===t&&(t=!0),!e||!e.id)return this;var i=e.id,n=e.groupId,r=void 0===n?-1:n,o=e.value,s=void 0===o?"":o,a=e.label,c=void 0===a?"":a,u=r>=0?this._store.getGroupById(r):null;return this._store.dispatch(d.highlightItem(i,!0)),t&&this.passedElement.triggerEvent(l.EVENTS.highlightItem,{id:i,value:s,label:c,groupValue:u&&u.value?u.value:null}),this},e.prototype.unhighlightItem=function(e){if(!e||!e.id)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,r=e.value,o=void 0===r?"":r,s=e.label,a=void 0===s?"":s,c=n>=0?this._store.getGroupById(n):null;return this._store.dispatch(d.highlightItem(t,!1)),this.passedElement.triggerEvent(l.EVENTS.highlightItem,{id:t,value:o,label:a,groupValue:c&&c.value?c.value:null}),this},e.prototype.highlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.highlightItem(t)})),this},e.prototype.unhighlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.unhighlightItem(t)})),this},e.prototype.removeActiveItemsByValue=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.value===e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeActiveItems=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.id!==e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeHighlightedItems=function(e){var t=this;return void 0===e&&(e=!1),this._store.highlightedActiveItems.forEach((function(i){t._removeItem(i),e&&t._triggerChange(i.value)})),this},e.prototype.showDropdown=function(e){var t=this;return this.dropdown.isActive?this:(requestAnimationFrame((function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(l.EVENTS.showDropdown,{})})),this)},e.prototype.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame((function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(l.EVENTS.hideDropdown,{})})),this):this},e.prototype.getValue=function(e){void 0===e&&(e=!1);var t=this._store.activeItems.reduce((function(t,i){var n=e?i.value:i;return t.push(n),t}),[]);return this._isSelectOneElement?t[0]:t},e.prototype.setValue=function(e){var t=this;return this.initialised?(e.forEach((function(e){return t._setChoiceOrItem(e)})),this):this},e.prototype.setChoiceByValue=function(e){var t=this;return!this.initialised||this._isTextElement?this:((Array.isArray(e)?e:[e]).forEach((function(e){return t._findAndSelectChoiceByValue(e)})),this)},e.prototype.setChoices=function(e,t,i,n){var r=this;if(void 0===e&&(e=[]),void 0===t&&(t="value"),void 0===i&&(i="label"),void 0===n&&(n=!1),!this.initialised)throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if("string"!=typeof t||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(n&&this.clearChoices(),"function"==typeof e){var o=e(this);if("function"==typeof Promise&&o instanceof Promise)return new Promise((function(e){return requestAnimationFrame(e)})).then((function(){return r._handleLoadingState(!0)})).then((function(){return o})).then((function(e){return r.setChoices(e,t,i,n)})).catch((function(e){r.config.silent||console.error(e)})).then((function(){return r._handleLoadingState(!1)})).then((function(){return r}));if(!Array.isArray(o))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: "+typeof o);return this.setChoices(o,t,i,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._startLoading(),e.forEach((function(e){if(e.choices)r._addGroup({id:e.id?parseInt(""+e.id,10):null,group:e,valueKey:t,labelKey:i});else{var n=e;r._addChoice({value:n[t],label:n[i],isSelected:!!n.selected,isDisabled:!!n.disabled,placeholder:!!n.placeholder,customProperties:n.customProperties})}})),this._stopLoading(),this},e.prototype.clearChoices=function(){return this._store.dispatch(h.clearChoices()),this},e.prototype.clearStore=function(){return this._store.dispatch(f.clearAll()),this},e.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0))),this},e.prototype._render=function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}},e.prototype._renderChoices=function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,r=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame((function(){return e.choiceList.scrollToTop()})),i.length>=1&&!this._isSearching){var o=n.filter((function(e){return!0===e.placeholder&&-1===e.groupId}));o.length>=1&&(r=this._createChoicesFragment(o,r)),r=this._createGroupsFragment(i,n,r)}else n.length>=1&&(r=this._createChoicesFragment(n,r));if(r.childNodes&&r.childNodes.length>0){var s=this._store.activeItems,a=this._canAddItem(s,this.input.value);if(a.response)this.choiceList.append(r),this._highlightChoice();else{var c=this._getTemplate("notice",a.notice);this.choiceList.append(c)}}else{var l=void 0;c=void 0;this._isSearching?(c="function"==typeof this.config.noResultsText?this.config.noResultsText():this.config.noResultsText,l=this._getTemplate("notice",c,"no-results")):(c="function"==typeof this.config.noChoicesText?this.config.noChoicesText():this.config.noChoicesText,l=this._getTemplate("notice",c,"no-choices")),this.choiceList.append(l)}},e.prototype._renderItems=function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)},e.prototype._createGroupsFragment=function(e,t,i){var n=this;void 0===i&&(i=document.createDocumentFragment());return this.config.shouldSort&&e.sort(this.config.sorter),e.forEach((function(e){var r=function(e){return t.filter((function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)}))}(e);if(r.length>=1){var o=n._getTemplate("choiceGroup",e);i.appendChild(o),n._createChoicesFragment(r,i,!0)}})),i},e.prototype._createChoicesFragment=function(e,t,i){var r=this;void 0===t&&(t=document.createDocumentFragment()),void 0===i&&(i=!1);var o=this.config,s=o.renderSelectedChoices,a=o.searchResultLimit,c=o.renderChoiceLimit,l=this._isSearching?m.sortByScore:this.config.sorter,u=function(e){if("auto"!==s||(r._isSelectOneElement||!e.selected)){var i=r._getTemplate("choice",e,r.config.itemSelectText);t.appendChild(i)}},h=e;"auto"!==s||this._isSelectOneElement||(h=e.filter((function(e){return!e.selected})));var d=h.reduce((function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e}),{placeholderChoices:[],normalChoices:[]}),p=d.placeholderChoices,f=d.normalChoices;(this.config.shouldSort||this._isSearching)&&f.sort(l);var v=h.length,_=this._isSelectOneElement?n(p,f):f;this._isSearching?v=a:c&&c>0&&!i&&(v=c);for(var g=0;g<v;g+=1)_[g]&&u(_[g]);return t},e.prototype._createItemsFragment=function(e,t){var i=this;void 0===t&&(t=document.createDocumentFragment());var n=this.config,r=n.shouldSortItems,o=n.sorter,s=n.removeItemButton;r&&!this._isSelectOneElement&&e.sort(o),this._isTextElement?this.passedElement.value=e.map((function(e){return e.value})).join(this.config.delimiter):this.passedElement.options=e;return e.forEach((function(e){var n=i._getTemplate("item",e,s);t.appendChild(n)})),t},e.prototype._triggerChange=function(e){null!=e&&this.passedElement.triggerEvent(l.EVENTS.change,{value:e})},e.prototype._selectPlaceholderChoice=function(e){this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value)},e.prototype._handleButtonAction=function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode&&t.parentNode.dataset.id,n=i&&e.find((function(e){return e.id===parseInt(i,10)}));n&&(this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._store.placeholderChoice&&this._selectPlaceholderChoice(this._store.placeholderChoice))}},e.prototype._handleItemAction=function(e,t,i){var n=this;if(void 0===i&&(i=!1),e&&t&&this.config.removeItems&&!this._isSelectOneElement){var r=t.dataset.id;e.forEach((function(e){e.id!==parseInt(""+r,10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)})),this.input.focus()}},e.prototype._handleChoiceAction=function(e,t){if(e&&t){var i=t.dataset.id,n=i&&this._store.getChoiceById(i);if(n){var r=e[0]&&e[0].keyCode?e[0].keyCode:void 0,o=this.dropdown.isActive;if(n.keyCode=r,this.passedElement.triggerEvent(l.EVENTS.choice,{choice:n}),!n.selected&&!n.disabled)this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value));this.clearInput(),o&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},e.prototype._handleBackspace=function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some((function(e){return e.highlighted}));this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}},e.prototype._startLoading=function(){this._store.dispatch(f.setIsLoading(!0))},e.prototype._stopLoading=function(){this._store.dispatch(f.setIsLoading(!1))},e.prototype._handleLoadingState=function(e){void 0===e&&(e=!0);var t=this.itemList.getChild("."+this.config.classNames.placeholder);e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText))&&this.itemList.append(t):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t&&(t.innerHTML=this._placeholderValue||""):this.input.placeholder=this._placeholderValue||"")},e.prototype._handleSearch=function(e){if(e&&this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,r=i.searchChoices,o=t.some((function(e){return!e.active}));if(e&&e.length>=n){var s=r?this._searchChoices(e):0;this.passedElement.triggerEvent(l.EVENTS.search,{value:e,resultCount:s})}else o&&(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0)))}},e.prototype._canAddItem=function(e,t){var i=!0,n="function"==typeof this.config.addItemText?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var r=m.existsInArray(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n="function"==typeof this.config.maxItemText?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&r&&i&&(i=!1,n="function"==typeof this.config.uniqueItemText?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&"function"==typeof this.config.addItemFilter&&!this.config.addItemFilter(t)&&(i=!1,n="function"==typeof this.config.customAddItemText?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}},e.prototype._searchChoices=function(e){var t="string"==typeof e?e.trim():e,i="string"==typeof this._currentValue?this._currentValue.trim():this._currentValue;if(t.length<1&&t===i+" ")return 0;var r=this._store.searchableChoices,s=t,a=n(this.config.searchFields),c=Object.assign(this.config.fuseOptions,{keys:a,includeMatches:!0}),l=new o.default(r,c).search(s);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch(h.filterChoices(l)),l.length},e.prototype._addEventListeners=function(){var e=document.documentElement;e.addEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.addEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus,{passive:!0}),this.containerOuter.element.addEventListener("blur",this._onBlur,{passive:!0})),this.input.element.addEventListener("keyup",this._onKeyUp,{passive:!0}),this.input.element.addEventListener("focus",this._onFocus,{passive:!0}),this.input.element.addEventListener("blur",this._onBlur,{passive:!0}),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},e.prototype._removeEventListeners=function(){var e=document.documentElement;e.removeEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.removeEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("keyup",this._onKeyUp),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},e.prototype._onKeyDown=function(e){var t=e.keyCode,i=this._store.activeItems,n=this.input.isFocussed,r=this.dropdown.isActive,o=this.itemList.hasChildren(),s=String.fromCharCode(t),a=/[a-zA-Z0-9-_ ]/.test(s),c=l.KEY_CODES.BACK_KEY,u=l.KEY_CODES.DELETE_KEY,h=l.KEY_CODES.ENTER_KEY,d=l.KEY_CODES.A_KEY,p=l.KEY_CODES.ESC_KEY,f=l.KEY_CODES.UP_KEY,m=l.KEY_CODES.DOWN_KEY,v=l.KEY_CODES.PAGE_UP_KEY,_=l.KEY_CODES.PAGE_DOWN_KEY;switch(this._isTextElement||r||!a||(this.showDropdown(),this.input.isFocussed||(this.input.value+=s.toLowerCase())),t){case d:return this._onSelectKey(e,o);case h:return this._onEnterKey(e,i,r);case p:return this._onEscapeKey(r);case f:case v:case m:case _:return this._onDirectionKey(e,r);case u:case c:return this._onDeleteKey(e,i,n)}},e.prototype._onKeyUp=function(e){var t=e.target,i=e.keyCode,n=this.input.value,r=this._store.activeItems,o=this._canAddItem(r,n),s=l.KEY_CODES.BACK_KEY,a=l.KEY_CODES.DELETE_KEY;if(this._isTextElement){if(o.notice&&n){var c=this._getTemplate("notice",o.notice);this.dropdown.element.innerHTML=c.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0)}else{var u=(i===s||i===a)&&t&&!t.value,d=!this._isTextElement&&this._isSearching,p=this._canSearch&&o.response;u&&d?(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0))):p&&this._handleSearch(this.input.value)}this._canSearch=this.config.searchEnabled},e.prototype._onSelectKey=function(e,t){var i=e.ctrlKey,n=e.metaKey;(i||n)&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())},e.prototype._onEnterKey=function(e,t,i){var n=e.target,r=l.KEY_CODES.ENTER_KEY,o=n&&n.hasAttribute("data-button");if(this._isTextElement&&n&&n.value){var s=this.input.value;this._canAddItem(t,s).response&&(this.hideDropdown(!0),this._addItem({value:s}),this._triggerChange(s),this.clearInput())}if(o&&(this._handleButtonAction(t,n),e.preventDefault()),i){var a=this.dropdown.getChild("."+this.config.classNames.highlightedState);a&&(t[0]&&(t[0].keyCode=r),this._handleChoiceAction(t,a)),e.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),e.preventDefault())},e.prototype._onEscapeKey=function(e){e&&(this.hideDropdown(!0),this.containerOuter.focus())},e.prototype._onDirectionKey=function(e,t){var i=e.keyCode,n=e.metaKey,r=l.KEY_CODES.DOWN_KEY,o=l.KEY_CODES.PAGE_UP_KEY,s=l.KEY_CODES.PAGE_DOWN_KEY;if(t||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var a=i===r||i===s?1:-1,c=void 0;if(n||i===s||i===o)c=a>0?this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type"):this.dropdown.element.querySelector("[data-choice-selectable]");else{var u=this.dropdown.element.querySelector("."+this.config.classNames.highlightedState);c=u?m.getAdjacentEl(u,"[data-choice-selectable]",a):this.dropdown.element.querySelector("[data-choice-selectable]")}c&&(m.isScrolledIntoView(c,this.choiceList.element,a)||this.choiceList.scrollToChildElement(c,a),this._highlightChoice(c)),e.preventDefault()}},e.prototype._onDeleteKey=function(e,t,i){var n=e.target;this._isSelectOneElement||n.value||!i||(this._handleBackspace(t),e.preventDefault())},e.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},e.prototype._onTouchEnd=function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation());this._wasTap=!0},e.prototype._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(_&&this.choiceList.element.contains(t)){var i=this.choiceList.element.firstElementChild,n="ltr"===this._direction?e.offsetX>=i.offsetWidth:e.offsetX<i.offsetLeft;this._isScrollingOnIe=n}if(t!==this.input.element){var r=t.closest("[data-button],[data-item],[data-choice]");if(r instanceof HTMLElement){var o=e.shiftKey,s=this._store.activeItems,a=r.dataset;"button"in a?this._handleButtonAction(s,r):"item"in a?this._handleItemAction(s,r,o):"choice"in a&&this._handleChoiceAction(s,r)}e.preventDefault()}}},e.prototype._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},e.prototype._onClick=function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems.length>0&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))},e.prototype._onFocus=function(e){var t,i=this,n=e.target;n&&this.containerOuter.element.contains(n)&&((t={})[l.TEXT_TYPE]=function(){n===i.input.element&&i.containerOuter.addFocusState()},t[l.SELECT_ONE_TYPE]=function(){i.containerOuter.addFocusState(),n===i.input.element&&i.showDropdown(!0)},t[l.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.showDropdown(!0),i.containerOuter.addFocusState())},t)[this.passedElement.element.type]()},e.prototype._onBlur=function(e){var t,i=this,n=e.target;if(n&&this.containerOuter.element.contains(n)&&!this._isScrollingOnIe){var r=this._store.activeItems.some((function(e){return e.highlighted}));((t={})[l.TEXT_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),r&&i.unhighlightAll(),i.hideDropdown(!0))},t[l.SELECT_ONE_TYPE]=function(){i.containerOuter.removeFocusState(),(n===i.input.element||n===i.containerOuter.element&&!i._canSearch)&&i.hideDropdown(!0)},t[l.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),i.hideDropdown(!0),r&&i.unhighlightAll())},t)[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()},e.prototype._onFormReset=function(){this._store.dispatch(f.resetTo(this._initialState))},e.prototype._highlightChoice=function(e){var t=this;void 0===e&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=e;Array.from(this.dropdown.element.querySelectorAll("."+this.config.classNames.highlightedState)).forEach((function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")})),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(l.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}},e.prototype._addItem=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.choiceId,o=void 0===r?-1:r,s=e.groupId,a=void 0===s?-1:s,c=e.customProperties,u=void 0===c?{}:c,h=e.placeholder,p=void 0!==h&&h,f=e.keyCode,m=void 0===f?-1:f,v="string"==typeof t?t.trim():t,_=this._store.items,g=n||v,y=o||-1,b=a>=0?this._store.getGroupById(a):null,E=_?_.length+1:1;this.config.prependValue&&(v=this.config.prependValue+v.toString()),this.config.appendValue&&(v+=this.config.appendValue.toString()),this._store.dispatch(d.addItem({value:v,label:g,id:E,choiceId:y,groupId:a,customProperties:u,placeholder:p,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(E),this.passedElement.triggerEvent(l.EVENTS.addItem,{id:E,value:v,label:g,customProperties:u,groupValue:b&&b.value?b.value:null,keyCode:m})},e.prototype._removeItem=function(e){var t=e.id,i=e.value,n=e.label,r=e.customProperties,o=e.choiceId,s=e.groupId,a=s&&s>=0?this._store.getGroupById(s):null;t&&o&&(this._store.dispatch(d.removeItem(t,o)),this.passedElement.triggerEvent(l.EVENTS.removeItem,{id:t,value:i,label:n,customProperties:r,groupValue:a&&a.value?a.value:null}))},e.prototype._addChoice=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.isSelected,o=void 0!==r&&r,s=e.isDisabled,a=void 0!==s&&s,c=e.groupId,l=void 0===c?-1:c,u=e.customProperties,d=void 0===u?{}:u,p=e.placeholder,f=void 0!==p&&p,m=e.keyCode,v=void 0===m?-1:m;if(null!=t){var _=this._store.choices,g=n||t,y=_?_.length+1:1,b=this._baseId+"-"+this._idNames.itemChoice+"-"+y;this._store.dispatch(h.addChoice({id:y,groupId:l,elementId:b,value:t,label:g,disabled:a,customProperties:d,placeholder:f,keyCode:v})),o&&this._addItem({value:t,label:g,choiceId:y,customProperties:d,placeholder:f,keyCode:v})}},e.prototype._addGroup=function(e){var t=this,i=e.group,n=e.id,r=e.valueKey,o=void 0===r?"value":r,s=e.labelKey,a=void 0===s?"label":s,c=m.isType("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),l=n||Math.floor((new Date).valueOf()*Math.random()),u=!!i.disabled&&i.disabled;if(c){this._store.dispatch(p.addGroup({value:i.label,id:l,active:!0,disabled:u}));c.forEach((function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[o],label:m.isType("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:l,customProperties:e.customProperties,placeholder:e.placeholder})}))}else this._store.dispatch(p.addGroup({value:i.label,id:i.id,active:!1,disabled:i.disabled}))},e.prototype._getTemplate=function(e){for(var t,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var o=this.config.classNames;return(t=this._templates[e]).call.apply(t,n([this,o],i))},e.prototype._createTemplates=function(){var e=this.config.callbackOnCreateTemplates,t={};e&&"function"==typeof e&&(t=e.call(this,m.strToEl)),this._templates=s.default(u.default,t)},e.prototype._createElements=function(){this.containerOuter=new c.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new c.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new c.Input({element:this._getTemplate("input",this._placeholderValue),classNames:this.config.classNames,type:this.passedElement.element.type,preventPaste:!this.config.paste}),this.choiceList=new c.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new c.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new c.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})},e.prototype._createStructure=function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth()),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement&&(this._highlightPosition=0,this._isSearching=!1,this._startLoading(),this._presetGroups.length?this._addPredefinedGroups(this._presetGroups):this._addPredefinedChoices(this._presetChoices),this._stopLoading()),this._isTextElement&&this._addPredefinedItems(this._presetItems)},e.prototype._addPredefinedGroups=function(e){var t=this,i=this.passedElement.placeholderOption;i&&i.parentNode&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),e.forEach((function(e){return t._addGroup({group:e,id:e.id||null})}))},e.prototype._addPredefinedChoices=function(e){var t=this;this.config.shouldSort&&e.sort(this.config.sorter);var i=e.some((function(e){return e.selected})),n=e.findIndex((function(e){return void 0===e.disabled||!e.disabled}));e.forEach((function(e,r){var o=e.value,s=void 0===o?"":o,a=e.label,c=e.customProperties,l=e.placeholder;if(t._isSelectElement)if(e.choices)t._addGroup({group:e,id:e.id||null});else{var u=!!(t._isSelectOneElement&&!i&&r===n)||e.selected,h=e.disabled;console.log(h,e),t._addChoice({value:s,label:a,isSelected:!!u,isDisabled:!!h,placeholder:!!l,customProperties:c})}else t._addChoice({value:s,label:a,isSelected:!!e.selected,isDisabled:!!e.disabled,placeholder:!!e.placeholder,customProperties:c})}))},e.prototype._addPredefinedItems=function(e){var t=this;e.forEach((function(e){"object"==typeof e&&e.value&&t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}),"string"==typeof e&&t._addItem({value:e})}))},e.prototype._setChoiceOrItem=function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[m.getType(e).toLowerCase()]()},e.prototype._findAndSelectChoiceByValue=function(e){var t=this,i=this._store.choices.find((function(i){return t.config.valueComparer(i.value,e)}));i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})},e.prototype._generatePlaceholderValue=function(){if(this._isSelectElement){var e=this.passedElement.placeholderOption;return e?e.text:null}var t=this.config,i=t.placeholder,n=t.placeholderValue,r=this.passedElement.element.dataset;if(i){if(n)return n;if(r.placeholder)return r.placeholder}return null},e}();t.default=y},function(e,t,i){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=i(2),s=i(8),a=i(0),c=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.caseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g,b=i.id,E=void 0===b?null:b,S=i.keys,I=void 0===S?[]:S,O=i.shouldSort,C=void 0===O||O,T=i.getFn,w=void 0===T?s:T,A=i.sortFn,L=void 0===A?function(e,t){return e.score-t.score}:A,P=i.tokenize,D=void 0!==P&&P,x=i.matchAllTokens,N=void 0!==x&&x,M=i.includeMatches,j=void 0!==M&&M,k=i.includeScore,F=void 0!==k&&k,K=i.verbose,R=void 0!==K&&K;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y,id:E,keys:I,includeMatches:j,includeScore:F,shouldSort:C,getFn:w,sortFn:L,verbose:R,tokenize:D,matchAllTokens:N},this.setCollection(t)}var t,i;return t=e,(i=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,r=i.fullSearcher,o=this._search(n,r),s=o.weights,a=o.results;return this._computeScore(s,a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,r=i.length;n<r;n+=1)t.push(new o(i[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},r=[];if("string"==typeof i[0]){for(var o=0,s=i.length;o<s;o+=1)this._analyze({key:"",value:i[o],record:o,index:o},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t});return{weights:null,results:r}}for(var a={},c=0,l=i.length;c<l;c+=1)for(var u=i[c],h=0,d=this.options.keys.length;h<d;h+=1){var p=this.options.keys[h];if("string"!=typeof p){if(a[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else a[p]={weight:1};this._analyze({key:p,value:this.options.getFn(u,p),record:u,index:c},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:r}}},{key:"_analyze",value:function(e,t){var i=e.key,n=e.arrayIndex,r=void 0===n?-1:n,o=e.value,s=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,p=t.resultMap,f=void 0===p?{}:p,m=t.results,v=void 0===m?[]:m;if(null!=o){var _=!1,g=-1,y=0;if("string"==typeof o){this._log("\nKey: ".concat(""===i?"-":i));var b=d.search(o);if(this._log('Full text: "'.concat(o,'", score: ').concat(b.score)),this.options.tokenize){for(var E=o.split(this.options.tokenSeparator),S=[],I=0;I<u.length;I+=1){var O=u[I];this._log('\nPattern: "'.concat(O.pattern,'"'));for(var C=!1,T=0;T<E.length;T+=1){var w=E[T],A=O.search(w),L={};A.isMatch?(L[w]=A.score,_=!0,C=!0,S.push(A.score)):(L[w]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(w,'", score: ').concat(L[w]))}C&&(y+=1)}g=S[0];for(var P=S.length,D=1;D<P;D+=1)g+=S[D];g/=P,this._log("Token score average:",g)}var x=b.score;g>-1&&(x=(x+g)/2),this._log("Score average:",x);var N=!this.options.tokenize||!this.options.matchAllTokens||y>=u.length;if(this._log("\nCheck Matches: ".concat(N)),(_||b.isMatch)&&N){var M=f[c];M?M.output.push({key:i,arrayIndex:r,value:o,score:x,matchedIndices:b.matchedIndices}):(f[c]={item:s,output:[{key:i,arrayIndex:r,value:o,score:x,matchedIndices:b.matchedIndices}]},v.push(f[c]))}}else if(a(o))for(var j=0,k=o.length;j<k;j+=1)this._analyze({key:i,arrayIndex:j,value:o[j],record:s,index:c},{resultMap:f,results:v,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var i=0,n=t.length;i<n;i+=1){for(var r=t[i].output,o=r.length,s=1,a=1,c=0;c<o;c+=1){var l=e?e[r[c].key].weight:1,u=(1===l?r[c].score:r[c].score||.001)*l;1!==l?a=Math.min(a,u):(r[c].nScore=u,s*=u)}t[i].score=1===a?s:a,this._log(t[i])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t}))),i=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var i=e.output;t.matches=[];for(var n=0,r=i.length;n<r;n+=1){var o=i[n];if(0!==o.matchedIndices.length){var s={indices:o.matchedIndices,value:o.value};o.key&&(s.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(s.arrayIndex=o.arrayIndex),t.matches.push(s)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,s=e.length;o<s;o+=1){var a=e[o];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),r.length){for(var c={item:a.item},l=0,u=r.length;l<u;l+=1)r[l](a,c);t.push(c)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,i),e}();e.exports=c},function(e,t,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=i(3),o=i(4),s=i(7),a=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.isCaseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t,i;return t=e,(i=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,i=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>i)return r(e,this.pattern,n);var s=this.options,a=s.location,c=s.distance,l=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&n(t.prototype,i),e}();e.exports=a},function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(i,"\\$&").replace(n,"|")),o=e.match(r),s=!!o,a=[];if(s)for(var c=0,l=o.length;c<l;c+=1){var u=o[c];a.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},function(e,t,i){var n=i(5),r=i(6);e.exports=function(e,t,i,o){for(var s=o.location,a=void 0===s?0:s,c=o.distance,l=void 0===c?100:c,u=o.threshold,h=void 0===u?.6:u,d=o.findAllMatches,p=void 0!==d&&d,f=o.minMatchCharLength,m=void 0===f?1:f,v=a,_=e.length,g=h,y=e.indexOf(t,v),b=t.length,E=[],S=0;S<_;S+=1)E[S]=0;if(-1!==y){var I=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});if(g=Math.min(I,g),-1!==(y=e.lastIndexOf(t,v+b))){var O=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});g=Math.min(O,g)}}y=-1;for(var C=[],T=1,w=b+_,A=1<<(b<=31?b-1:30),L=0;L<b;L+=1){for(var P=0,D=w;P<D;)n(t,{errors:L,currentLocation:v+D,expectedLocation:v,distance:l})<=g?P=D:w=D,D=Math.floor((w-P)/2+P);w=D;var x=Math.max(1,v-D+1),N=p?_:Math.min(v+D,_)+b,M=Array(N+2);M[N+1]=(1<<L)-1;for(var j=N;j>=x;j-=1){var k=j-1,F=i[e.charAt(k)];if(F&&(E[k]=1),M[j]=(M[j+1]<<1|1)&F,0!==L&&(M[j]|=(C[j+1]|C[j])<<1|1|C[j+1]),M[j]&A&&(T=n(t,{errors:L,currentLocation:k,expectedLocation:v,distance:l}))<=g){if(g=T,(y=k)<=v)break;x=Math.max(1,2*v-y)}}if(n(t,{errors:L+1,currentLocation:v,expectedLocation:v,distance:l})>g)break;C=M}return{isMatch:y>=0,score:0===T?.001:T,matchedIndices:r(E,m)}}},function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,r=t.currentLocation,o=void 0===r?0:r,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,l=void 0===c?100:c,u=n/e.length,h=Math.abs(a-o);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,r=-1,o=0,s=e.length;o<s;o+=1){var a=e[o];a&&-1===n?n=o:a||-1===n||((r=o-1)-n+1>=t&&i.push([n,r]),n=-1)}return e[o-1]&&o-n>=t&&i.push([n,o-1]),i}},function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var r=0;r<i;r+=1)t[e.charAt(r)]|=1<<i-r-1;return t}},function(e,t,i){var n=i(0);e.exports=function(e,t){return function e(t,i,r){if(i){var o=i.indexOf("."),s=i,a=null;-1!==o&&(s=i.slice(0,o),a=i.slice(o+1));var c=t[s];if(null!=c)if(a||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],a,r);else a&&e(c,a,r);else r.push(c.toString())}else r.push(t);return r}(e,t,[])}}])},function(e,t,i){"use strict";var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function s(e,t,i){return e.concat(t).map((function(e){return o(e,i)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function c(e,t,i){var n={};return i.isMergeableObject(e)&&a(e).forEach((function(t){n[t]=o(e[t],i)})),a(t).forEach((function(r){(function(e,t){try{return t in e&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}catch(e){return!1}})(e,r)||(i.isMergeableObject(t[r])&&e[r]?n[r]=function(e,t){if(!t.customMerge)return l;var i=t.customMerge(e);return"function"==typeof i?i:l}(r,i)(e[r],t[r],i):n[r]=o(t[r],i))})),n}function l(e,t,i){(i=i||{}).arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||n,i.cloneUnlessOtherwiseSpecified=o;var r=Array.isArray(t);return r===Array.isArray(e)?r?i.arrayMerge(e,t,i):c(e,t,i):o(t,i)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return l(e,i,t)}),{})};var u=l;e.exports=u},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(3),s=r(i(4)),a=function(){function e(){this._store=o.createStore(s.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}return e.prototype.subscribe=function(e){this._store.subscribe(e)},e.prototype.dispatch=function(e){this._store.dispatch(e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._store.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.state.items},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeItems",{get:function(){return this.items.filter((function(e){return!0===e.active}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightedActiveItems",{get:function(){return this.items.filter((function(e){return e.active&&e.highlighted}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"choices",{get:function(){return this.state.choices},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeChoices",{get:function(){return this.choices.filter((function(e){return!0===e.active}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectableChoices",{get:function(){return this.choices.filter((function(e){return!0!==e.disabled}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"searchableChoices",{get:function(){return this.selectableChoices.filter((function(e){return!0!==e.placeholder}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderChoice",{get:function(){return n(this.choices).reverse().find((function(e){return!0===e.placeholder}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groups",{get:function(){return this.state.groups},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeGroups",{get:function(){var e=this.groups,t=this.choices;return e.filter((function(e){var i=!0===e.active&&!1===e.disabled,n=t.some((function(e){return!0===e.active&&!1===e.disabled}));return i&&n}),[])},enumerable:!0,configurable:!0}),e.prototype.isLoading=function(){return this.state.loading},e.prototype.getChoiceById=function(e){return this.activeChoices.find((function(t){return t.id===parseInt(e,10)}))},e.prototype.getGroupById=function(e){return this.groups.find((function(t){return t.id===e}))},e}();t.default=a},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_ITEM":var r=i;return n(e,[{id:r.id,choiceId:r.choiceId,groupId:r.groupId,value:r.value,label:r.label,active:!0,highlighted:!1,customProperties:r.customProperties,placeholder:r.placeholder||!1,keyCode:null}]).map((function(e){var t=e;return t.highlighted=!1,t}));case"REMOVE_ITEM":return e.map((function(e){var t=e;return t.id===i.id&&(t.active=!1),t}));case"HIGHLIGHT_ITEM":var o=i;return e.map((function(e){var t=e;return t.id===o.id&&(t.highlighted=o.highlighted),t}));default:return e}}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_GROUP":var r=i;return n(e,[{id:r.id,value:r.value,active:r.active,disabled:r.disabled}]);case"CLEAR_CHOICES":return[];default:return e}}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_CHOICE":var r=i,o={id:r.id,elementId:r.elementId,groupId:r.groupId,value:r.value,label:r.label||r.value,disabled:r.disabled||!1,selected:!1,active:!0,score:9999,customProperties:r.customProperties,placeholder:r.placeholder||!1};return n(e,[o]);case"ADD_ITEM":var s=i;return s.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt(""+s.choiceId,10)&&(t.selected=!0),t})):e;case"REMOVE_ITEM":var a=i;return a.choiceId&&a.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt(""+a.choiceId,10)&&(t.selected=!1),t})):e;case"FILTER_CHOICES":var c=i;return e.map((function(e){var t=e;return t.active=c.results.some((function(e){var i=e.item,n=e.score;return i.id===t.id&&(t.score=n,!0)})),t}));case"ACTIVATE_CHOICES":var l=i;return e.map((function(e){var t=e;return t.active=l.active,t}));case"CLEAR_CHOICES":return t.defaultState;default:return e}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=!1;t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"SET_IS_LOADING":return i.isLoading;default:return e}}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(i(19));t.Dropdown=r.default;var o=n(i(20));t.Container=o.default;var s=n(i(21));t.Input=s.default;var a=n(i(22));t.List=a.default;var c=n(i(23));t.WrappedInput=c.default;var l=n(i(24));t.WrappedSelect=l.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){var t=e.element,i=e.type,n=e.classNames;this.element=t,this.classNames=n,this.type=i,this.isActive=!1}return Object.defineProperty(e.prototype,"distanceFromTopWindow",{get:function(){return this.element.getBoundingClientRect().bottom},enumerable:!0,configurable:!0}),e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.show=function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},e.prototype.hide=function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.position;this.element=t,this.classNames=n,this.type=i,this.position=r,this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return e.prototype.addEventListeners=function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)},e.prototype.removeEventListeners=function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.shouldFlip=function(e){if("number"!=typeof e)return!1;var t=!1;return"auto"===this.position?t=!window.matchMedia("(min-height: "+(e+1)+"px)").matches:"top"===this.position&&(t=!0),t},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype.open=function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)},e.prototype.close=function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.addFocusState=function(){this.element.classList.add(this.classNames.focusState)},e.prototype.removeFocusState=function(){this.element.classList.remove(this.classNames.focusState)},e.prototype.enable=function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},e.prototype.disable=function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},e.prototype.wrap=function(e){n.wrap(e,this.element)},e.prototype.unwrap=function(e){this.element.parentNode&&(this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element))},e.prototype.addLoadingState=function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},e.prototype.removeLoadingState=function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.preventPaste;this.element=t,this.type=i,this.classNames=n,this.preventPaste=r,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(e.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return n.sanitise(this.element.value)},set:function(e){this.element.value=e},enumerable:!0,configurable:!0}),e.prototype.addEventListeners=function(){this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("input",this._onInput,{passive:!0}),this.element.addEventListener("focus",this._onFocus,{passive:!0}),this.element.addEventListener("blur",this._onBlur,{passive:!0})},e.prototype.removeEventListeners=function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.isDisabled=!0},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.blur=function(){this.isFocussed&&this.element.blur()},e.prototype.clear=function(e){return void 0===e&&(e=!0),this.element.value&&(this.element.value=""),e&&this.setWidth(),this},e.prototype.setWidth=function(){var e=this.element,t=e.style,i=e.value,n=e.placeholder;t.minWidth=n.length+1+"ch",t.width=i.length+1+"ch"},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype._onInput=function(){this.type!==r.SELECT_ONE_TYPE&&this.setWidth()},e.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=function(){function e(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return e.prototype.clear=function(){this.element.innerHTML=""},e.prototype.append=function(e){this.element.appendChild(e)},e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.hasChildren=function(){return this.element.hasChildNodes()},e.prototype.scrollToTop=function(){this.element.scrollTop=0},e.prototype.scrollToChildElement=function(e,t){var i=this;if(e){var n=this.element.offsetHeight,r=this.element.scrollTop+n,o=e.offsetHeight,s=e.offsetTop+o,a=t>0?this.element.scrollTop+s-r:e.offsetTop;requestAnimationFrame((function(){i._animateScroll(a,t)}))}},e.prototype._scrollDown=function(e,t,i){var n=(i-e)/t,r=n>1?n:1;this.element.scrollTop=e+r},e.prototype._scrollUp=function(e,t,i){var n=(e-i)/t,r=n>1?n:1;this.element.scrollTop=e-r},e.prototype._animateScroll=function(e,t){var i=this,r=n.SCROLLING_SPEED,o=this.element.scrollTop,s=!1;t>0?(this._scrollDown(o,r,e),o<e&&(s=!0)):(this._scrollUp(o,r,e),o>e&&(s=!0)),s&&requestAnimationFrame((function(){i._animateScroll(e,t)}))},e}();t.default=r},function(e,t,i){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,r=t.delimiter,o=e.call(this,{element:i,classNames:n})||this;return o.delimiter=r,o}return r(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!0,configurable:!0}),t}(o(i(5)).default);t.default=s},function(e,t,i){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,r=t.template,o=e.call(this,{element:i,classNames:n})||this;return o.template=r,o}return r(t,e),Object.defineProperty(t.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"optionGroups",{get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return Array.from(this.element.options)},set:function(e){var t=this,i=document.createDocumentFragment();e.forEach((function(e){return n=e,r=t.template(n),void i.appendChild(r);var n,r})),this.appendDocFragment(i)},enumerable:!0,configurable:!0}),t.prototype.appendDocFragment=function(e){this.element.innerHTML="",this.element.appendChild(e)},t}(o(i(5)).default);t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={containerOuter:function(e,t,i,n,r,o){var s=e.containerOuter,a=Object.assign(document.createElement("div"),{className:s});return a.dataset.type=o,t&&(a.dir=t),n&&(a.tabIndex=0),i&&(a.setAttribute("role",r?"combobox":"listbox"),r&&a.setAttribute("aria-autocomplete","list")),a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false"),a},containerInner:function(e){var t=e.containerInner;return Object.assign(document.createElement("div"),{className:t})},itemList:function(e,t){var i=e.list,n=e.listSingle,r=e.listItems;return Object.assign(document.createElement("div"),{className:i+" "+(t?n:r)})},placeholder:function(e,t){var i=e.placeholder;return Object.assign(document.createElement("div"),{className:i,innerHTML:t})},item:function(e,t,i){var n=e.item,r=e.button,o=e.highlightedState,s=e.itemSelectable,a=e.placeholder,c=t.id,l=t.value,u=t.label,h=t.customProperties,d=t.active,p=t.disabled,f=t.highlighted,m=t.placeholder,v=Object.assign(document.createElement("div"),{className:n,innerHTML:u});if(Object.assign(v.dataset,{item:"",id:c,value:l,customProperties:h}),d&&v.setAttribute("aria-selected","true"),p&&v.setAttribute("aria-disabled","true"),m&&v.classList.add(a),v.classList.add(f?o:s),i){p&&v.classList.remove(s),v.dataset.deletable="";var _=Object.assign(document.createElement("button"),{type:"button",className:r,innerHTML:"Remove item"});_.setAttribute("aria-label","Remove item: '"+l+"'"),_.dataset.button="",v.appendChild(_)}return v},choiceList:function(e,t){var i=e.list,n=Object.assign(document.createElement("div"),{className:i});return t||n.setAttribute("aria-multiselectable","true"),n.setAttribute("role","listbox"),n},choiceGroup:function(e,t){var i=e.group,n=e.groupHeading,r=e.itemDisabled,o=t.id,s=t.value,a=t.disabled,c=Object.assign(document.createElement("div"),{className:i+" "+(a?r:"")});return c.setAttribute("role","group"),Object.assign(c.dataset,{group:"",id:o,value:s}),a&&c.setAttribute("aria-disabled","true"),c.appendChild(Object.assign(document.createElement("div"),{className:n,innerHTML:s})),c},choice:function(e,t,i){var n=e.item,r=e.itemChoice,o=e.itemSelectable,s=e.selectedState,a=e.itemDisabled,c=e.placeholder,l=t.id,u=t.value,h=t.label,d=t.groupId,p=t.elementId,f=t.disabled,m=t.selected,v=t.placeholder,_=Object.assign(document.createElement("div"),{id:p,innerHTML:h,className:n+" "+r});return m&&_.classList.add(s),v&&_.classList.add(c),_.setAttribute("role",d&&d>0?"treeitem":"option"),Object.assign(_.dataset,{choice:"",id:l,value:u,selectText:i}),f?(_.classList.add(a),_.dataset.choiceDisabled="",_.setAttribute("aria-disabled","true")):(_.classList.add(o),_.dataset.choiceSelectable=""),_},input:function(e,t){var i=e.input,n=e.inputCloned,r=Object.assign(document.createElement("input"),{type:"text",className:i+" "+n,autocomplete:"off",autocapitalize:"off",spellcheck:!1});return r.setAttribute("role","textbox"),r.setAttribute("aria-autocomplete","list"),r.setAttribute("aria-label",t),r},dropdown:function(e){var t=e.list,i=e.listDropdown,n=document.createElement("div");return n.classList.add(t,i),n.setAttribute("aria-expanded","false"),n},notice:function(e,t,i){var n=e.item,r=e.itemChoice,o=e.noResults,s=e.noChoices;void 0===i&&(i="");var a=[n,r];return"no-choices"===i?a.push(s):"no-results"===i&&a.push(o),Object.assign(document.createElement("div"),{innerHTML:t,className:a.join(" ")})},option:function(e){var t=e.label,i=e.value,n=e.customProperties,r=e.active,o=e.disabled,s=new Option(t,i,!1,r);return n&&(s.dataset.customProperties=""+n),s.disabled=!!o,s}};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addChoice=function(e){var t=e.value,i=e.label,r=e.id,o=e.groupId,s=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,u=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:r,groupId:o,disabled:s,elementId:a,customProperties:c,placeholder:l,keyCode:u}},t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}},t.activateChoices=function(e){return void 0===e&&(e=!0),{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}},t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addItem=function(e){var t=e.value,i=e.label,r=e.id,o=e.choiceId,s=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:r,choiceId:o,groupId:s,customProperties:a,placeholder:c,keyCode:l}},t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addGroup=function(e){var t=e.value,i=e.id,r=e.active,o=e.disabled;return{type:n.ACTION_TYPES.ADD_GROUP,value:t,id:i,active:r,disabled:o}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.clearAll=function(){return{type:n.ACTION_TYPES.CLEAR_ALL}},t.resetTo=function(e){return{type:n.ACTION_TYPES.RESET_TO,state:e}},t.setIsLoading=function(e){return{type:n.ACTION_TYPES.SET_IS_LOADING,isLoading:e}}}]).default;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.datepicker=t():e.datepicker=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=["January","February","March","April","May","June","July","August","September","October","November","December"],o={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function s(){}var l=["click","focusin","keydown","input"];function d(e){l.forEach((function(t){e.addEventListener(t,e===document?L:Y)}))}function c(e){return Array.isArray(e)?e.map(c):"[object Object]"===x(e)?Object.keys(e).reduce((function(t,n){return t[n]=c(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),a=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[h(t,e,a),f(t,e,a),v(e,a)].join(""),a&&window.requestAnimationFrame((function(){M(!0,e)}))}function h(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function f(e,t,n){var a=t.currentMonth,r=t.currentYear,i=t.dateSelected,o=t.maxDate,s=t.minDate,l=t.showAllDates,d=t.days,c=t.disabledDates,u=t.startDay,h=t.weekendIndices,f=t.events,v=t.getRange?t.getRange():{},m=+v.start,y=+v.end,p=g(new Date(e).setDate(1)),w=p.getDay()-u,D=w<0?7:0;p.setMonth(p.getMonth()+1),p.setDate(0);var b=p.getDate(),q=[],S=D+7*((w+b)/7|0);S+=(w+b)%7?7:0;for(var M=1;M<=S;M++){var E=(M-1)%7,x=d[E],C=M-(w>=0?w:7+w),L=new Date(r,a,C),Y=f[+L],j=C<1||C>b,P=j?C<1?-1:1:0,k=j&&!l,O=k?"":L.getDate(),N=+L==+i,_=E===h[0]||E===h[1],I=m!==y,A="qs-square "+x;Y&&!k&&(A+=" qs-event"),j&&(A+=" qs-outside-current-month"),!l&&j||(A+=" qs-num"),N&&(A+=" qs-active"),(c[+L]||t.disabler(L)||_&&t.noWeekends||s&&+L<+s||o&&+L>+o)&&!k&&(A+=" qs-disabled"),+g(new Date)==+L&&(A+=" qs-current"),+L===m&&y&&I&&(A+=" qs-range-start"),+L>m&&+L<y&&(A+=" qs-range-middle"),+L===y&&m&&I&&(A+=" qs-range-end"),k&&(A+=" qs-empty",O=""),q.push('<div class="'+A+'" data-direction="'+P+'">'+O+"</div>")}var R=d.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(q);return R.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),R.push("</div>"),R.join("")}function v(e,t){var n=e.overlayPlaceholder,a=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" inputmode="numeric" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return'<div class="qs-overlay-month" data-month-num="'+t+'">'+e+"</div>"})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+a+"</div>","</div>"].join("")}function m(e,t,n){var a=t.el,r=t.calendar.querySelector(".qs-active"),i=e.textContent,o=t.sibling;(a.disabled||a.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,i),r&&r.classList.remove("qs-active"),n||e.classList.add("qs-active"),p(a,t,n),n||q(t),o&&(y({instance:t,deselect:n}),t.first&&!o.dateSelected&&(o.currentYear=t.currentYear,o.currentMonth=t.currentMonth,o.currentMonthName=t.currentMonthName),u(t),u(o)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function y(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function p(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==s?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function w(e,t,n,a){n||a?(n&&(t.currentYear=+n),a&&(t.currentMonth=+a)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function D(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var a=e.positionedEl.getBoundingClientRect(),r=e.el.getBoundingClientRect(),i=e.calendarContainer.getBoundingClientRect(),o=r.top-a.top+(t?-1*i.height:r.height)+"px",s=r.left-a.left+(n?r.width-i.width:0)+"px";e.calendarContainer.style.setProperty("top",o),e.calendarContainer.style.setProperty("left",s)}}function b(e){return"[object Date]"===x(e)&&"Invalid Date"!==e.toString()}function g(e){if(b(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function q(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&("overlay"!==e.defaultView&&M(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function S(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),"overlay"===e.defaultView&&M(!1,e),D(e),e.onShow(e))}function M(e,t){var n=t.calendar,a=n.querySelector(".qs-overlay"),r=a.querySelector(".qs-overlay-year"),i=n.querySelector(".qs-controls"),o=n.querySelector(".qs-squares");e?(a.classList.add("qs-hidden"),i.classList.remove("qs-blur"),o.classList.remove("qs-blur"),r.value=""):(a.classList.remove("qs-hidden"),i.classList.add("qs-blur"),o.classList.add("qs-blur"),r.focus())}function E(e,t,n,a){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),i=r?null:t.value;if(13===e.which||13===e.keyCode||"click"===e.type)a?w(null,n,i,a):r||t.classList.contains("qs-disabled")||w(null,n,i);else if(n.calendar.contains(t)){n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}}function x(e){return{}.toString.call(e)}function C(e){a.forEach((function(t){t!==e&&q(t)}))}function L(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,r=e.target,o=r.classList,s=a.filter((function(e){return e.calendar.contains(r)||e.el===r}))[0],l=s&&s.calendar.contains(r);if(!(s&&s.isMobile&&s.disableMobile))if("click"===n){if(!s)return a.forEach(q);if(s.disabled)return;var d=s.calendar,c=s.calendarContainer,h=s.disableYearOverlay,f=s.nonInput,v=d.querySelector(".qs-overlay-year"),y=!!d.querySelector(".qs-hidden"),p=d.querySelector(".qs-month-year").contains(r),D=r.dataset.monthNum;if(s.noPosition&&!l)(c.classList.contains("qs-hidden")?S:q)(s);else if(o.contains("qs-arrow"))w(o,s);else if(p||o.contains("qs-close"))h||M(!y,s);else if(D)E(e,v,s,D);else{if(o.contains("qs-disabled"))return;if(o.contains("qs-num")){var b=r.textContent,g=+r.dataset.direction,x=new Date(s.currentYear,s.currentMonth+g,b);if(g){s.currentYear=x.getFullYear(),s.currentMonth=x.getMonth(),s.currentMonthName=i[s.currentMonth],u(s);for(var L,Y=s.calendar.querySelectorAll('[data-direction="0"]'),j=0;!L;){var P=Y[j];P.textContent===b&&(L=P),j++}r=L}return void(+x==+s.dateSelected?m(r,s,!0):r.classList.contains("qs-disabled")||m(r,s))}o.contains("qs-submit")?E(e,v,s):f&&r===s.el&&(S(s),C(s))}}else if("focusin"===n&&s)S(s),C(s);else if("keydown"===n&&9===t&&s)q(s);else if("keydown"===n&&s&&!s.disabled){var k=!s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&k&&l?E(e,r,s):27===t&&k&&l&&M(!0,s)}else if("input"===n){if(!s||!s.calendar.contains(r))return;var O=s.calendar.querySelector(".qs-submit"),N=r.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);r.value=N,O.classList[4===N.length?"remove":"add"]("qs-disabled")}}}function Y(e){L(e),e.__qs_shadow_dom=!0}function j(e,t){l.forEach((function(n){e.removeEventListener(n,t)}))}function P(){S(this)}function k(){q(this)}function O(e,t){var n=g(e),a=this.currentYear,r=this.currentMonth,i=this.sibling;if(null==e)return this.dateSelected=void 0,p(this.el,this,!0),i&&(y({instance:this,deselect:!0}),u(i)),u(this),this;if(!b(e))throw new Error("`setDate` needs a JavaScript Date object.");if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw new Error("You can't manually set a date that's disabled.");this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),p(this.el,this),i&&(y({instance:this}),u(i));var o=a===n.getFullYear()&&r===n.getMonth();return o||t?u(this,n):o||u(this,new Date(a,r,1)),this}function N(e){return I(this,e,!0)}function _(e){return I(this,e)}function I(e,t,n){var a=e.dateSelected,r=e.first,i=e.sibling,o=e.minDate,s=e.maxDate,l=g(t),d=n?"Min":"Max";function c(){return"original"+d+"Date"}function h(){return d.toLowerCase()+"Date"}function f(){return"set"+d}function v(){throw new Error("Out-of-range date passed to "+f())}if(null==t)e[c()]=void 0,i?(i[c()]=void 0,n?(r&&!a||!r&&!i.dateSelected)&&(e.minDate=void 0,i.minDate=void 0):(r&&!i.dateSelected||!r&&!a)&&(e.maxDate=void 0,i.maxDate=void 0)):e[h()]=void 0;else{if(!b(t))throw new Error("Invalid date passed to "+f());i?((r&&n&&l>(a||s)||r&&!n&&l<(i.dateSelected||o)||!r&&n&&l>(i.dateSelected||s)||!r&&!n&&l<(a||o))&&v(),e[c()]=l,i[c()]=l,(n&&(r&&!a||!r&&!i.dateSelected)||!n&&(r&&!i.dateSelected||!r&&!a))&&(e[h()]=l,i[h()]=l)):((n&&l>(a||s)||!n&&l<(a||o))&&v(),e[h()]=l)}return i&&u(i),u(e),e}function A(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function R(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,r=this.sibling,i=this;this.inlinePosition&&(a.some((function(e){return e!==i&&e.positionedEl===t}))||t.style.setProperty("position",null));n.remove(),a=a.filter((function(e){return e!==i})),r&&delete r.sibling,a.length||j(document,L);var o=a.some((function(t){return t.shadowDom===e}));for(var s in e&&!o&&j(e,Y),this)delete this[s];a.length||l.forEach((function(e){document.removeEventListener(e,L)}))}function F(e,t){var n=new Date(e);if(!b(n))throw new Error("Invalid date passed to `navigate`");this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}function B(){var e=!this.calendarContainer.classList.contains("qs-hidden"),t=!this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");e&&M(t,this)}t.default=function(e,t){var n=function(e,t){var n,l,d=function(e){var t=c(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!b(t))throw new Error('"options.events" must only contain valid JavaScript Date objects.');return e[+g(t)]=!0,e}),{}));["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!b(n))throw new Error('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=g(n)}));var n=t.position,i=t.maxDate,l=t.minDate,d=t.dateSelected,u=t.overlayPlaceholder,h=t.overlayButton,f=t.startDay,v=t.id;if(t.startDate=g(t.startDate||d||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+g(t);if(!b(t))throw new Error('You supplied an invalid date to "options.disabledDates".');if(n===+g(d))throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==v)throw new Error("`id` cannot be `null` or `undefined`");if(null!=v){var m=a.filter((function(e){return e.id===v}));if(m.length>1)throw new Error("Only two datepickers can share an id.");m.length?(t.second=!0,t.sibling=m[0]):t.first=!0}var y=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!y)throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');function p(e){throw new Error('"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".')}if(t.position=function(e){var t=e[0],n=e[1],a={};a[o[t]]=1,n&&(a[o[n]]=1);return a}(n||"bl"),i<l)throw new Error('"maxDate" in options is less than "minDate".');d&&(l>d&&p("min"),i<d&&p());if(["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=s)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var a=t[e],r=n?12:7;if(a){if(!Array.isArray(a)||a.length!==r||a.some((function(e){return"string"!=typeof e})))throw new Error('"'+e+'" must be an array with '+r+" strings.");t[n?n<2?"months":"overlayMonths":"days"]=a}})),f&&f>0&&f<7){var w=(t.customDays||r).slice(),D=w.splice(0,f);t.customDays=w.concat(D),t.startDay=+f,t.weekendIndices=[w.length-1,w.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder;"string"!=typeof h&&delete t.overlayButton;var q=t.defaultView;if(q&&"calendar"!==q&&"overlay"!==q)throw new Error('options.defaultView must either be "calendar" or "overlay".');return t.defaultView=q||"calendar",t}(t||{startDate:g(new Date),position:"bl",defaultView:"calendar"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===x(u))throw new Error("Using a shadow DOM as your selector is not supported.");for(var h,f=u.parentNode;!h;){var v=x(f);"[object HTMLDocument]"===v?h=!0:"[object ShadowRoot]"===v?(h=!0,n=f,l=f.host):f=f.parentNode}}if(!u)throw new Error("No selector / element found.");if(a.some((function(e){return e.el===u})))throw new Error("A datepicker already exists on that element.");var m=u===document.body,y=n?u.parentElement||n:m?document.body:u.parentElement,w=n?u.parentElement||l:y,D=document.createElement("div"),q=document.createElement("div");D.className="qs-datepicker-container qs-hidden",q.className="qs-datepicker";var M={shadowDom:n,customElement:l,positionedEl:w,el:u,parent:y,nonInput:"INPUT"!==u.nodeName,noPosition:m,position:!m&&d.position,startDate:d.startDate,dateSelected:d.dateSelected,disabledDates:d.disabledDates,minDate:d.minDate,maxDate:d.maxDate,noWeekends:!!d.noWeekends,weekendIndices:d.weekendIndices,calendarContainer:D,calendar:q,currentMonth:(d.startDate||d.dateSelected).getMonth(),currentMonthName:(d.months||i)[(d.startDate||d.dateSelected).getMonth()],currentYear:(d.startDate||d.dateSelected).getFullYear(),events:d.events||{},defaultView:d.defaultView,setDate:O,remove:R,setMin:N,setMax:_,show:P,hide:k,navigate:F,toggleOverlay:B,onSelect:d.onSelect,onShow:d.onShow,onHide:d.onHide,onMonthChange:d.onMonthChange,formatter:d.formatter,disabler:d.disabler,months:d.months||i,days:d.customDays||r,startDay:d.startDay,overlayMonths:d.overlayMonths||(d.months||i).map((function(e){return e.slice(0,3)})),overlayPlaceholder:d.overlayPlaceholder||"4-digit year",overlayButton:d.overlayButton||"Submit",disableYearOverlay:!!d.disableYearOverlay,disableMobile:!!d.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!d.alwaysShow,id:d.id,showAllDates:!!d.showAllDates,respectDisabledReadOnly:!!d.respectDisabledReadOnly,first:d.first,second:d.second};if(d.sibling){var E=d.sibling,C=M,L=E.minDate||C.minDate,Y=E.maxDate||C.maxDate;C.sibling=E,E.sibling=C,E.minDate=L,E.maxDate=Y,C.minDate=L,C.maxDate=Y,E.originalMinDate=L,E.originalMaxDate=Y,C.originalMinDate=L,C.originalMaxDate=Y,E.getRange=A,C.getRange=A}d.dateSelected&&p(u,M);var j=getComputedStyle(w).position;m||j&&"static"!==j||(M.inlinePosition=!0,w.style.setProperty("position","relative"));var I=a.filter((function(e){return e.positionedEl===M.positionedEl}));I.some((function(e){return e.inlinePosition}))&&(M.inlinePosition=!0,I.forEach((function(e){e.inlinePosition=!0})));D.appendChild(q),y.appendChild(D),M.alwaysShow&&S(M);return M}(e,t);if(a.length||d(document),n.shadowDom&&(a.some((function(e){return e.shadowDom===n.shadowDom}))||d(n.shadowDom)),a.push(n),n.second){var l=n.sibling;y({instance:n,deselect:!n.dateSelected}),y({instance:l,deselect:!l.dateSelected}),u(l)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&D(n),n}}]).default}));

document.addEventListener('DOMContentLoaded', () => {

    const rangeWidth = document.getElementById('width-range'),
        rangeHeight = document.getElementById('height-range'),
        widthInput = document.getElementById('width-range-value'),
        heightInput = document.getElementById('height-range-value'),
        weightInput = document.getElementById("weight"),
        dateInput = document.getElementById("date"),
        citySelect = document.getElementById("city-select"),
        deliveryCheckbox = document.getElementById("delivery-checkbox"),
        deliveryAddress = document.querySelector(".form__item_address"),
        addressInput = document.getElementById("address"),
        nameInput = document.getElementById("name"),
        surnameInput = document.getElementById("surname"),
        phoneInput = document.querySelector("input[type='tel']"),
        commentsTextarea = document.getElementById("comments"),
        costInput = document.getElementById("cost"),
        figure = document.getElementById("figure"),
        figureWeight = document.querySelector(".figure__weight"),
        popup = document.querySelector(".popup"),
        popupBtn = document.querySelectorAll(".js-popup-btn"),
        popupCloseBtn = document.querySelector(".popup__close");
        popupWidth = document.querySelector("#popup-width span"),
        popupHeight = document.querySelector("#popup-height span"),
        popupWeight = document.querySelector("#popup-weight span"),
        popupCity = document.querySelector("#popup-city span"),
        popupDate = document.querySelector("#popup-date span"),
        popupAppartment = document.querySelector("#popup-appartment span"),
        popupAddress = document.querySelector("#popup-address span"),
        popupName = document.querySelector("#popup-name span"),
        popupSurname = document.querySelector("#popup-surname span"),
        popupPhone = document.querySelector("#popup-phone span"),
        popupComments = document.querySelector("#popup-comments span"),
        popupCost = document.querySelector("#popup-cost span");

    function prettify(num) {
        return n = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    function calculate(weightCost=0, deliveryCost=0) {
        let total = heightInput.value*1200 + widthInput.value*1000 + weightCost + deliveryCost;
        costInput.value = prettify(total);
        popupCost.innerHTML = prettify(total);
    }

    function figureDrawing() {
        figure.style.width = 70 + (+widthInput.value) + "px";
        figure.style.height = 70 + (+heightInput.value) + "px";
    }

// width and height

    noUiSlider.create(rangeWidth, {
        start: [1],
        step: 1,
        connect: [true, false],
        tooltips: true,
        range: {
            'min': [1],
            'max': [100]
        },
        format: wNumb({
            decimals: 0,
        })
    });

    rangeWidth.noUiSlider.on('update', function (values, handle) {
        widthInput.value = values[handle];
        calculate();
        figureDrawing();
    });

    widthInput.addEventListener('input', function(event) {
        rangeWidth.noUiSlider.set(widthVal);
        widthInputVal = event.target.value;
        calculate();
        figureDrawing();
    });

    noUiSlider.create(rangeHeight, {
        start: [1],
        step: 1,
        connect: [true, false],
        tooltips: true,
        range: {
            'min': [1],
            'max': [100]
        },
        format: wNumb({
            decimals: 0,
        })
    });

    rangeHeight.noUiSlider.on('update', function (values, handle) {
        heightInput.value = values[handle];
        calculate();
        figureDrawing();
    });

    heightInput.addEventListener('input', function(event) {
        rangeHeight.noUiSlider.set(heightVal);
        heightInputVal = event.target.value;
        calculate();
        figureDrawing();
    });

// weight

    weightInput.addEventListener('input', function(event) {
        let weightVal = event.target.value,
            weightMaxVal = event.target.getAttribute('max'),
            weightCost = 0;

        if ( weightVal > 100 ) {
            weightVal = 100;
            weightInput.value = weightVal;
        } else if (weightVal <= 0) {
            weightVal = 1;
            weightInput.value = weightVal;
        }

        figureWeight.innerHTML = `${weightVal} kg`;

        if ( weightVal > (weightMaxVal/2) ) {
            weightCost = 3500;
        } 
        calculate(weightCost);
    });

// deliveryCheckbox

    deliveryCheckbox.addEventListener('change', function(event) {
        let deliveryCost = 0;
        if ( event.target.checked ) {
            deliveryCost = 1000;
            event.target.parentNode.classList.add("moved");
            deliveryAddress.classList.add("show");
        } else {
            deliveryCost = -1000;
            event.target.parentNode.classList.remove("moved");
            deliveryAddress.classList.remove("show");
        }
        calculate(deliveryCost);
    });

// calendar

    const picker = datepicker(dateInput, {
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value
        },
        minDate: new Date(Date.parse(new Date())+ 1000 * 3600 * 24 * 4),
        onSelect: (instance, date, minDate) => {
            return dateVal = date.toLocaleDateString();
        }
    });

// select and cities API

    fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fc7a46e6bcmshd2f2f2833606168p197e52jsn45b089e6c933",
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
        }
    }).then( response => response.json())
    .then( json => {
        const citiesArr = json.data;
        citiesArr.forEach( el => {
            const city = el.name,
                cityOption = document.createElement("option");
            citySelect.append(cityOption);
            cityOption.innerHTML = city;
        });
    }).then( () => {
        const choices = new Choices(citySelect);
        citySelect.addEventListener('change', () => {
            const cityValue = choices.getValue();
            popupCity.innerHTML = cityValue.label;
        });
    }).catch(err => {
        console.error(err);
    });

// modal

    function popupData() {
        popupWidth.innerHTML = `${widthInput.value} m`;
        popupHeight.innerHTML = `${heightInput.value} m`;
        popupWeight.innerHTML = `${weightInput.value} kg`;
        popupDate.innerHTML = dateVal;
        popupName.innerHTML = nameInput.value;
        popupSurname.innerHTML = surnameInput.value;
        popupPhone.innerHTML = phoneInput.value;
        popupComments.innerHTML = commentsTextarea.value;
        if ( deliveryCheckbox.checked ) {
            popupAppartment.innerHTML = "yes";
            popupAddress.innerHTML = addressInput.value;
        } else {
            popupAppartment.innerHTML = "no";
            popupAddress.innerHTML = "-";
        }
    }

    popupBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            popup.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";
            popupData();
        });
    });

    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
            document.querySelector("body").style.overflow = "auto";
        }
    });

// phone mask

    let mask = IMask(phoneInput, {
        mask: '+375 00 000-00-00'
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBub3Vpc2xpZGVyIC0gMTQuNi4zIC0gMTEvMTkvMjAyMCAqL1xuIWZ1bmN0aW9uKHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dCgpOndpbmRvdy5ub1VpU2xpZGVyPXQoKX0oZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbHQ9XCIxNC42LjNcIjtmdW5jdGlvbiB1dCh0KXt0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodCl9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gbnVsbCE9dH1mdW5jdGlvbiBjdCh0KXt0LnByZXZlbnREZWZhdWx0KCl9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgdCYmIWlzTmFOKHQpJiZpc0Zpbml0ZSh0KX1mdW5jdGlvbiBwdCh0LGUscil7MDxyJiYoaHQodCxlKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bXQodCxlKX0scikpfWZ1bmN0aW9uIGZ0KHQpe3JldHVybiBNYXRoLm1heChNYXRoLm1pbih0LDEwMCksMCl9ZnVuY3Rpb24gZHQodCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/dDpbdF19ZnVuY3Rpb24gZSh0KXt2YXIgZT0odD1TdHJpbmcodCkpLnNwbGl0KFwiLlwiKTtyZXR1cm4gMTxlLmxlbmd0aD9lWzFdLmxlbmd0aDowfWZ1bmN0aW9uIGh0KHQsZSl7dC5jbGFzc0xpc3QmJiEvXFxzLy50ZXN0KGUpP3QuY2xhc3NMaXN0LmFkZChlKTp0LmNsYXNzTmFtZSs9XCIgXCIrZX1mdW5jdGlvbiBtdCh0LGUpe3QuY2xhc3NMaXN0JiYhL1xccy8udGVzdChlKT90LmNsYXNzTGlzdC5yZW1vdmUoZSk6dC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIrZS5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXGJ8JClcIixcImdpXCIpLFwiIFwiKX1mdW5jdGlvbiBndCh0KXt2YXIgZT12b2lkIDAhPT13aW5kb3cucGFnZVhPZmZzZXQscj1cIkNTUzFDb21wYXRcIj09PSh0LmNvbXBhdE1vZGV8fFwiXCIpO3JldHVybnt4OmU/d2luZG93LnBhZ2VYT2Zmc2V0OnI/dC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDp0LmJvZHkuc2Nyb2xsTGVmdCx5OmU/d2luZG93LnBhZ2VZT2Zmc2V0OnI/dC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wOnQuYm9keS5zY3JvbGxUb3B9fWZ1bmN0aW9uIGModCxlKXtyZXR1cm4gMTAwLyhlLXQpfWZ1bmN0aW9uIHAodCxlLHIpe3JldHVybiAxMDAqZS8odFtyKzFdLXRbcl0pfWZ1bmN0aW9uIGYodCxlKXtmb3IodmFyIHI9MTt0Pj1lW3JdOylyKz0xO3JldHVybiByfWZ1bmN0aW9uIHIodCxlLHIpe2lmKHI+PXQuc2xpY2UoLTEpWzBdKXJldHVybiAxMDA7dmFyIG4saSxvPWYocix0KSxzPXRbby0xXSxhPXRbb10sbD1lW28tMV0sdT1lW29dO3JldHVybiBsKyhpPXIscChuPVtzLGFdLG5bMF08MD9pK01hdGguYWJzKG5bMF0pOmktblswXSwwKS9jKGwsdSkpfWZ1bmN0aW9uIG4odCxlLHIsbil7aWYoMTAwPT09bilyZXR1cm4gbjt2YXIgaSxvLHM9ZihuLHQpLGE9dFtzLTFdLGw9dFtzXTtyZXR1cm4gcj8obC1hKS8yPG4tYT9sOmE6ZVtzLTFdP3Rbcy0xXSsoaT1uLXRbcy0xXSxvPWVbcy0xXSxNYXRoLnJvdW5kKGkvbykqbyk6bn1mdW5jdGlvbiBzKHQsZSxyKXt2YXIgbjtpZihcIm51bWJlclwiPT10eXBlb2YgZSYmKGU9W2VdKSwhQXJyYXkuaXNBcnJheShlKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdyYW5nZScgY29udGFpbnMgaW52YWxpZCB2YWx1ZS5cIik7aWYoIW8obj1cIm1pblwiPT09dD8wOlwibWF4XCI9PT10PzEwMDpwYXJzZUZsb2F0KHQpKXx8IW8oZVswXSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO3IueFBjdC5wdXNoKG4pLHIueFZhbC5wdXNoKGVbMF0pLG4/ci54U3RlcHMucHVzaCghaXNOYU4oZVsxXSkmJmVbMV0pOmlzTmFOKGVbMV0pfHwoci54U3RlcHNbMF09ZVsxXSksci54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApfWZ1bmN0aW9uIGwodCxlLHIpe2lmKGUpaWYoci54VmFsW3RdIT09ci54VmFsW3QrMV0pe3IueFN0ZXBzW3RdPXAoW3IueFZhbFt0XSxyLnhWYWxbdCsxXV0sZSwwKS9jKHIueFBjdFt0XSxyLnhQY3RbdCsxXSk7dmFyIG49KHIueFZhbFt0KzFdLXIueFZhbFt0XSkvci54TnVtU3RlcHNbdF0saT1NYXRoLmNlaWwoTnVtYmVyKG4udG9GaXhlZCgzKSktMSksbz1yLnhWYWxbdF0rci54TnVtU3RlcHNbdF0qaTtyLnhIaWdoZXN0Q29tcGxldGVTdGVwW3RdPW99ZWxzZSByLnhTdGVwc1t0XT1yLnhIaWdoZXN0Q29tcGxldGVTdGVwW3RdPXIueFZhbFt0XX1mdW5jdGlvbiBpKHQsZSxyKXt2YXIgbjt0aGlzLnhQY3Q9W10sdGhpcy54VmFsPVtdLHRoaXMueFN0ZXBzPVtyfHwhMV0sdGhpcy54TnVtU3RlcHM9WyExXSx0aGlzLnhIaWdoZXN0Q29tcGxldGVTdGVwPVtdLHRoaXMuc25hcD1lO3ZhciBpPVtdO2ZvcihuIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShuKSYmaS5wdXNoKFt0W25dLG5dKTtmb3IoaS5sZW5ndGgmJlwib2JqZWN0XCI9PXR5cGVvZiBpWzBdWzBdP2kuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0WzBdWzBdLWVbMF1bMF19KTppLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdFswXS1lWzBdfSksbj0wO248aS5sZW5ndGg7bisrKXMoaVtuXVsxXSxpW25dWzBdLHRoaXMpO2Zvcih0aGlzLnhOdW1TdGVwcz10aGlzLnhTdGVwcy5zbGljZSgwKSxuPTA7bjx0aGlzLnhOdW1TdGVwcy5sZW5ndGg7bisrKWwobix0aGlzLnhOdW1TdGVwc1tuXSx0aGlzKX1pLnByb3RvdHlwZS5nZXREaXN0YW5jZT1mdW5jdGlvbih0KXt2YXIgZSxyPVtdO2ZvcihlPTA7ZTx0aGlzLnhOdW1TdGVwcy5sZW5ndGgtMTtlKyspe3ZhciBuPXRoaXMueE51bVN0ZXBzW2VdO2lmKG4mJnQvbiUxIT0wKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogJ2xpbWl0JywgJ21hcmdpbicgYW5kICdwYWRkaW5nJyBvZiBcIit0aGlzLnhQY3RbZV0rXCIlIHJhbmdlIG11c3QgYmUgZGl2aXNpYmxlIGJ5IHN0ZXAuXCIpO3JbZV09cCh0aGlzLnhWYWwsdCxlKX1yZXR1cm4gcn0saS5wcm90b3R5cGUuZ2V0QWJzb2x1dGVEaXN0YW5jZT1mdW5jdGlvbih0LGUscil7dmFyIG4saT0wO2lmKHQ8dGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGgtMV0pZm9yKDt0PnRoaXMueFBjdFtpKzFdOylpKys7ZWxzZSB0PT09dGhpcy54UGN0W3RoaXMueFBjdC5sZW5ndGgtMV0mJihpPXRoaXMueFBjdC5sZW5ndGgtMik7cnx8dCE9PXRoaXMueFBjdFtpKzFdfHxpKys7dmFyIG89MSxzPWVbaV0sYT0wLGw9MCx1PTAsYz0wO2ZvcihuPXI/KHQtdGhpcy54UGN0W2ldKS8odGhpcy54UGN0W2krMV0tdGhpcy54UGN0W2ldKToodGhpcy54UGN0W2krMV0tdCkvKHRoaXMueFBjdFtpKzFdLXRoaXMueFBjdFtpXSk7MDxzOylhPXRoaXMueFBjdFtpKzErY10tdGhpcy54UGN0W2krY10sMTAwPGVbaStjXSpvKzEwMC0xMDAqbj8obD1hKm4sbz0ocy0xMDAqbikvZVtpK2NdLG49MSk6KGw9ZVtpK2NdKmEvMTAwKm8sbz0wKSxyPyh1LT1sLDE8PXRoaXMueFBjdC5sZW5ndGgrYyYmYy0tKToodSs9bCwxPD10aGlzLnhQY3QubGVuZ3RoLWMmJmMrKykscz1lW2krY10qbztyZXR1cm4gdCt1fSxpLnByb3RvdHlwZS50b1N0ZXBwaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB0PXIodGhpcy54VmFsLHRoaXMueFBjdCx0KX0saS5wcm90b3R5cGUuZnJvbVN0ZXBwaW5nPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0LGUscil7aWYoMTAwPD1yKXJldHVybiB0LnNsaWNlKC0xKVswXTt2YXIgbixpPWYocixlKSxvPXRbaS0xXSxzPXRbaV0sYT1lW2ktMV0sbD1lW2ldO3JldHVybiBuPVtvLHNdLChyLWEpKmMoYSxsKSooblsxXS1uWzBdKS8xMDArblswXX0odGhpcy54VmFsLHRoaXMueFBjdCx0KX0saS5wcm90b3R5cGUuZ2V0U3RlcD1mdW5jdGlvbih0KXtyZXR1cm4gdD1uKHRoaXMueFBjdCx0aGlzLnhTdGVwcyx0aGlzLnNuYXAsdCl9LGkucHJvdG90eXBlLmdldERlZmF1bHRTdGVwPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1mKHQsdGhpcy54UGN0KTtyZXR1cm4oMTAwPT09dHx8ZSYmdD09PXRoaXMueFBjdFtuLTFdKSYmKG49TWF0aC5tYXgobi0xLDEpKSwodGhpcy54VmFsW25dLXRoaXMueFZhbFtuLTFdKS9yfSxpLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcz1mdW5jdGlvbih0KXt2YXIgZT1mKHQsdGhpcy54UGN0KTtyZXR1cm57c3RlcEJlZm9yZTp7c3RhcnRWYWx1ZTp0aGlzLnhWYWxbZS0yXSxzdGVwOnRoaXMueE51bVN0ZXBzW2UtMl0saGlnaGVzdFN0ZXA6dGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtlLTJdfSx0aGlzU3RlcDp7c3RhcnRWYWx1ZTp0aGlzLnhWYWxbZS0xXSxzdGVwOnRoaXMueE51bVN0ZXBzW2UtMV0saGlnaGVzdFN0ZXA6dGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtlLTFdfSxzdGVwQWZ0ZXI6e3N0YXJ0VmFsdWU6dGhpcy54VmFsW2VdLHN0ZXA6dGhpcy54TnVtU3RlcHNbZV0saGlnaGVzdFN0ZXA6dGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtlXX19fSxpLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscz1mdW5jdGlvbigpe3ZhciB0PXRoaXMueE51bVN0ZXBzLm1hcChlKTtyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCx0KX0saS5wcm90b3R5cGUuY29udmVydD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh0KSl9O3ZhciB1PXt0bzpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmdC50b0ZpeGVkKDIpfSxmcm9tOk51bWJlcn0sZD17dGFyZ2V0OlwidGFyZ2V0XCIsYmFzZTpcImJhc2VcIixvcmlnaW46XCJvcmlnaW5cIixoYW5kbGU6XCJoYW5kbGVcIixoYW5kbGVMb3dlcjpcImhhbmRsZS1sb3dlclwiLGhhbmRsZVVwcGVyOlwiaGFuZGxlLXVwcGVyXCIsdG91Y2hBcmVhOlwidG91Y2gtYXJlYVwiLGhvcml6b250YWw6XCJob3Jpem9udGFsXCIsdmVydGljYWw6XCJ2ZXJ0aWNhbFwiLGJhY2tncm91bmQ6XCJiYWNrZ3JvdW5kXCIsY29ubmVjdDpcImNvbm5lY3RcIixjb25uZWN0czpcImNvbm5lY3RzXCIsbHRyOlwibHRyXCIscnRsOlwicnRsXCIsdGV4dERpcmVjdGlvbkx0cjpcInR4dC1kaXItbHRyXCIsdGV4dERpcmVjdGlvblJ0bDpcInR4dC1kaXItcnRsXCIsZHJhZ2dhYmxlOlwiZHJhZ2dhYmxlXCIsZHJhZzpcInN0YXRlLWRyYWdcIix0YXA6XCJzdGF0ZS10YXBcIixhY3RpdmU6XCJhY3RpdmVcIix0b29sdGlwOlwidG9vbHRpcFwiLHBpcHM6XCJwaXBzXCIscGlwc0hvcml6b250YWw6XCJwaXBzLWhvcml6b250YWxcIixwaXBzVmVydGljYWw6XCJwaXBzLXZlcnRpY2FsXCIsbWFya2VyOlwibWFya2VyXCIsbWFya2VySG9yaXpvbnRhbDpcIm1hcmtlci1ob3Jpem9udGFsXCIsbWFya2VyVmVydGljYWw6XCJtYXJrZXItdmVydGljYWxcIixtYXJrZXJOb3JtYWw6XCJtYXJrZXItbm9ybWFsXCIsbWFya2VyTGFyZ2U6XCJtYXJrZXItbGFyZ2VcIixtYXJrZXJTdWI6XCJtYXJrZXItc3ViXCIsdmFsdWU6XCJ2YWx1ZVwiLHZhbHVlSG9yaXpvbnRhbDpcInZhbHVlLWhvcml6b250YWxcIix2YWx1ZVZlcnRpY2FsOlwidmFsdWUtdmVydGljYWxcIix2YWx1ZU5vcm1hbDpcInZhbHVlLW5vcm1hbFwiLHZhbHVlTGFyZ2U6XCJ2YWx1ZS1sYXJnZVwiLHZhbHVlU3ViOlwidmFsdWUtc3ViXCJ9LHZ0PXt0b29sdGlwczpcIi5fX3Rvb2x0aXBzXCIsYXJpYTpcIi5fX2FyaWFcIn07ZnVuY3Rpb24gaCh0KXtpZihcIm9iamVjdFwiPT10eXBlb2YoZT10KSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS50byYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5mcm9tKXJldHVybiEwO3ZhciBlO3Rocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpfWZ1bmN0aW9uIG0odCxlKXtpZighbyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7dC5zaW5nbGVTdGVwPWV9ZnVuY3Rpb24gZyh0LGUpe2lmKCFvKGUpKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogJ2tleWJvYXJkUGFnZU11bHRpcGxpZXInIGlzIG5vdCBudW1lcmljLlwiKTt0LmtleWJvYXJkUGFnZU11bHRpcGxpZXI9ZX1mdW5jdGlvbiB2KHQsZSl7aWYoIW8oZSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAna2V5Ym9hcmREZWZhdWx0U3RlcCcgaXMgbm90IG51bWVyaWMuXCIpO3Qua2V5Ym9hcmREZWZhdWx0U3RlcD1lfWZ1bmN0aW9uIGIodCxlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8QXJyYXkuaXNBcnJheShlKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdyYW5nZScgaXMgbm90IGFuIG9iamVjdC5cIik7aWYodm9pZCAwPT09ZS5taW58fHZvaWQgMD09PWUubWF4KXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogTWlzc2luZyAnbWluJyBvciAnbWF4JyBpbiAncmFuZ2UnLlwiKTtpZihlLm1pbj09PWUubWF4KXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogJ3JhbmdlJyAnbWluJyBhbmQgJ21heCcgY2Fubm90IGJlIGVxdWFsLlwiKTt0LnNwZWN0cnVtPW5ldyBpKGUsdC5zbmFwLHQuc2luZ2xlU3RlcCl9ZnVuY3Rpb24geCh0LGUpe2lmKGU9ZHQoZSksIUFycmF5LmlzQXJyYXkoZSl8fCFlLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdzdGFydCcgb3B0aW9uIGlzIGluY29ycmVjdC5cIik7dC5oYW5kbGVzPWUubGVuZ3RoLHQuc3RhcnQ9ZX1mdW5jdGlvbiBTKHQsZSl7aWYoXCJib29sZWFuXCIhPXR5cGVvZih0LnNuYXA9ZSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAnc25hcCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKX1mdW5jdGlvbiB3KHQsZSl7aWYoXCJib29sZWFuXCIhPXR5cGVvZih0LmFuaW1hdGU9ZSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAnYW5pbWF0ZScgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKX1mdW5jdGlvbiB5KHQsZSl7aWYoXCJudW1iZXJcIiE9dHlwZW9mKHQuYW5pbWF0aW9uRHVyYXRpb249ZSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAnYW5pbWF0aW9uRHVyYXRpb24nIG9wdGlvbiBtdXN0IGJlIGEgbnVtYmVyLlwiKX1mdW5jdGlvbiBFKHQsZSl7dmFyIHIsbj1bITFdO2lmKFwibG93ZXJcIj09PWU/ZT1bITAsITFdOlwidXBwZXJcIj09PWUmJihlPVshMSwhMF0pLCEwPT09ZXx8ITE9PT1lKXtmb3Iocj0xO3I8dC5oYW5kbGVzO3IrKyluLnB1c2goZSk7bi5wdXNoKCExKX1lbHNle2lmKCFBcnJheS5pc0FycmF5KGUpfHwhZS5sZW5ndGh8fGUubGVuZ3RoIT09dC5oYW5kbGVzKzEpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAnY29ubmVjdCcgb3B0aW9uIGRvZXNuJ3QgbWF0Y2ggaGFuZGxlIGNvdW50LlwiKTtuPWV9dC5jb25uZWN0PW59ZnVuY3Rpb24gQyh0LGUpe3N3aXRjaChlKXtjYXNlXCJob3Jpem9udGFsXCI6dC5vcnQ9MDticmVhaztjYXNlXCJ2ZXJ0aWNhbFwiOnQub3J0PTE7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdvcmllbnRhdGlvbicgb3B0aW9uIGlzIGludmFsaWQuXCIpfX1mdW5jdGlvbiBQKHQsZSl7aWYoIW8oZSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAnbWFyZ2luJyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTswIT09ZSYmKHQubWFyZ2luPXQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZSkpfWZ1bmN0aW9uIE4odCxlKXtpZighbyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdsaW1pdCcgb3B0aW9uIG11c3QgYmUgbnVtZXJpYy5cIik7aWYodC5saW1pdD10LnNwZWN0cnVtLmdldERpc3RhbmNlKGUpLCF0LmxpbWl0fHx0LmhhbmRsZXM8Mil0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpfWZ1bmN0aW9uIGsodCxlKXt2YXIgcjtpZighbyhlKSYmIUFycmF5LmlzQXJyYXkoZSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7aWYoQXJyYXkuaXNBcnJheShlKSYmMiE9PWUubGVuZ3RoJiYhbyhlWzBdKSYmIW8oZVsxXSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7aWYoMCE9PWUpe2ZvcihBcnJheS5pc0FycmF5KGUpfHwoZT1bZSxlXSksdC5wYWRkaW5nPVt0LnNwZWN0cnVtLmdldERpc3RhbmNlKGVbMF0pLHQuc3BlY3RydW0uZ2V0RGlzdGFuY2UoZVsxXSldLHI9MDtyPHQuc3BlY3RydW0ueE51bVN0ZXBzLmxlbmd0aC0xO3IrKylpZih0LnBhZGRpbmdbMF1bcl08MHx8dC5wYWRkaW5nWzFdW3JdPDApdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO3ZhciBuPWVbMF0rZVsxXSxpPXQuc3BlY3RydW0ueFZhbFswXTtpZigxPG4vKHQuc3BlY3RydW0ueFZhbFt0LnNwZWN0cnVtLnhWYWwubGVuZ3RoLTFdLWkpKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogJ3BhZGRpbmcnIG9wdGlvbiBtdXN0IG5vdCBleGNlZWQgMTAwJSBvZiB0aGUgcmFuZ2UuXCIpfX1mdW5jdGlvbiBVKHQsZSl7c3dpdGNoKGUpe2Nhc2VcImx0clwiOnQuZGlyPTA7YnJlYWs7Y2FzZVwicnRsXCI6dC5kaXI9MTticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogJ2RpcmVjdGlvbicgb3B0aW9uIHdhcyBub3QgcmVjb2duaXplZC5cIil9fWZ1bmN0aW9uIEEodCxlKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdiZWhhdmlvdXInIG11c3QgYmUgYSBzdHJpbmcgY29udGFpbmluZyBvcHRpb25zLlwiKTt2YXIgcj0wPD1lLmluZGV4T2YoXCJ0YXBcIiksbj0wPD1lLmluZGV4T2YoXCJkcmFnXCIpLGk9MDw9ZS5pbmRleE9mKFwiZml4ZWRcIiksbz0wPD1lLmluZGV4T2YoXCJzbmFwXCIpLHM9MDw9ZS5pbmRleE9mKFwiaG92ZXJcIiksYT0wPD1lLmluZGV4T2YoXCJ1bmNvbnN0cmFpbmVkXCIpO2lmKGkpe2lmKDIhPT10LmhhbmRsZXMpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAnZml4ZWQnIGJlaGF2aW91ciBtdXN0IGJlIHVzZWQgd2l0aCAyIGhhbmRsZXNcIik7UCh0LHQuc3RhcnRbMV0tdC5zdGFydFswXSl9aWYoYSYmKHQubWFyZ2lufHx0LmxpbWl0KSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICd1bmNvbnN0cmFpbmVkJyBiZWhhdmlvdXIgY2Fubm90IGJlIHVzZWQgd2l0aCBtYXJnaW4gb3IgbGltaXRcIik7dC5ldmVudHM9e3RhcDpyfHxvLGRyYWc6bixmaXhlZDppLHNuYXA6byxob3ZlcjpzLHVuY29uc3RyYWluZWQ6YX19ZnVuY3Rpb24gVih0LGUpe2lmKCExIT09ZSlpZighMD09PWUpe3QudG9vbHRpcHM9W107Zm9yKHZhciByPTA7cjx0LmhhbmRsZXM7cisrKXQudG9vbHRpcHMucHVzaCghMCl9ZWxzZXtpZih0LnRvb2x0aXBzPWR0KGUpLHQudG9vbHRpcHMubGVuZ3RoIT09dC5oYW5kbGVzKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogbXVzdCBwYXNzIGEgZm9ybWF0dGVyIGZvciBhbGwgaGFuZGxlcy5cIik7dC50b29sdGlwcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKFwiYm9vbGVhblwiIT10eXBlb2YgdCYmKFwib2JqZWN0XCIhPXR5cGVvZiB0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnRvKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICd0b29sdGlwcycgbXVzdCBiZSBwYXNzZWQgYSBmb3JtYXR0ZXIgb3IgJ2ZhbHNlJy5cIil9KX19ZnVuY3Rpb24gRCh0LGUpe2godC5hcmlhRm9ybWF0PWUpfWZ1bmN0aW9uIE0odCxlKXtoKHQuZm9ybWF0PWUpfWZ1bmN0aW9uIE8odCxlKXtpZihcImJvb2xlYW5cIiE9dHlwZW9mKHQua2V5Ym9hcmRTdXBwb3J0PWUpKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK2x0K1wiKTogJ2tleWJvYXJkU3VwcG9ydCcgb3B0aW9uIG11c3QgYmUgYSBib29sZWFuLlwiKX1mdW5jdGlvbiBMKHQsZSl7dC5kb2N1bWVudEVsZW1lbnQ9ZX1mdW5jdGlvbiB6KHQsZSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUmJiExIT09ZSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdjc3NQcmVmaXgnIG11c3QgYmUgYSBzdHJpbmcgb3IgYGZhbHNlYC5cIik7dC5jc3NQcmVmaXg9ZX1mdW5jdGlvbiBIKHQsZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrbHQrXCIpOiAnY3NzQ2xhc3NlcycgbXVzdCBiZSBhbiBvYmplY3QuXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0LmNzc1ByZWZpeClmb3IodmFyIHIgaW4gdC5jc3NDbGFzc2VzPXt9LGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmKHQuY3NzQ2xhc3Nlc1tyXT10LmNzc1ByZWZpeCtlW3JdKTtlbHNlIHQuY3NzQ2xhc3Nlcz1lfWZ1bmN0aW9uIGJ0KGUpe3ZhciByPXttYXJnaW46MCxsaW1pdDowLHBhZGRpbmc6MCxhbmltYXRlOiEwLGFuaW1hdGlvbkR1cmF0aW9uOjMwMCxhcmlhRm9ybWF0OnUsZm9ybWF0OnV9LG49e3N0ZXA6e3I6ITEsdDptfSxrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOntyOiExLHQ6Z30sa2V5Ym9hcmREZWZhdWx0U3RlcDp7cjohMSx0OnZ9LHN0YXJ0OntyOiEwLHQ6eH0sY29ubmVjdDp7cjohMCx0OkV9LGRpcmVjdGlvbjp7cjohMCx0OlV9LHNuYXA6e3I6ITEsdDpTfSxhbmltYXRlOntyOiExLHQ6d30sYW5pbWF0aW9uRHVyYXRpb246e3I6ITEsdDp5fSxyYW5nZTp7cjohMCx0OmJ9LG9yaWVudGF0aW9uOntyOiExLHQ6Q30sbWFyZ2luOntyOiExLHQ6UH0sbGltaXQ6e3I6ITEsdDpOfSxwYWRkaW5nOntyOiExLHQ6a30sYmVoYXZpb3VyOntyOiEwLHQ6QX0sYXJpYUZvcm1hdDp7cjohMSx0OkR9LGZvcm1hdDp7cjohMSx0Ok19LHRvb2x0aXBzOntyOiExLHQ6Vn0sa2V5Ym9hcmRTdXBwb3J0OntyOiEwLHQ6T30sZG9jdW1lbnRFbGVtZW50OntyOiExLHQ6TH0sY3NzUHJlZml4OntyOiEwLHQ6en0sY3NzQ2xhc3Nlczp7cjohMCx0Okh9fSxpPXtjb25uZWN0OiExLGRpcmVjdGlvbjpcImx0clwiLGJlaGF2aW91cjpcInRhcFwiLG9yaWVudGF0aW9uOlwiaG9yaXpvbnRhbFwiLGtleWJvYXJkU3VwcG9ydDohMCxjc3NQcmVmaXg6XCJub1VpLVwiLGNzc0NsYXNzZXM6ZCxrZXlib2FyZFBhZ2VNdWx0aXBsaWVyOjUsa2V5Ym9hcmREZWZhdWx0U3RlcDoxMH07ZS5mb3JtYXQmJiFlLmFyaWFGb3JtYXQmJihlLmFyaWFGb3JtYXQ9ZS5mb3JtYXQpLE9iamVjdC5rZXlzKG4pLmZvckVhY2goZnVuY3Rpb24odCl7aWYoIWEoZVt0XSkmJnZvaWQgMD09PWlbdF0pe2lmKG5bdF0ucil0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICdcIit0K1wiJyBpcyByZXF1aXJlZC5cIik7cmV0dXJuITB9blt0XS50KHIsYShlW3RdKT9lW3RdOmlbdF0pfSksci5waXBzPWUucGlwczt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG89dm9pZCAwIT09dC5zdHlsZS5tc1RyYW5zZm9ybSxzPXZvaWQgMCE9PXQuc3R5bGUudHJhbnNmb3JtO3IudHJhbnNmb3JtUnVsZT1zP1widHJhbnNmb3JtXCI6bz9cIm1zVHJhbnNmb3JtXCI6XCJ3ZWJraXRUcmFuc2Zvcm1cIjtyZXR1cm4gci5zdHlsZT1bW1wibGVmdFwiLFwidG9wXCJdLFtcInJpZ2h0XCIsXCJib3R0b21cIl1dW3IuZGlyXVtyLm9ydF0scn1mdW5jdGlvbiBqKHQsYixvKXt2YXIgbCx1LHMsYyxpLGEsZSxwLGY9d2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZD97c3RhcnQ6XCJwb2ludGVyZG93blwiLG1vdmU6XCJwb2ludGVybW92ZVwiLGVuZDpcInBvaW50ZXJ1cFwifTp3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ/e3N0YXJ0OlwiTVNQb2ludGVyRG93blwiLG1vdmU6XCJNU1BvaW50ZXJNb3ZlXCIsZW5kOlwiTVNQb2ludGVyVXBcIn06e3N0YXJ0OlwibW91c2Vkb3duIHRvdWNoc3RhcnRcIixtb3ZlOlwibW91c2Vtb3ZlIHRvdWNobW92ZVwiLGVuZDpcIm1vdXNldXAgdG91Y2hlbmRcIn0sZD13aW5kb3cuQ1NTJiZDU1Muc3VwcG9ydHMmJkNTUy5zdXBwb3J0cyhcInRvdWNoLWFjdGlvblwiLFwibm9uZVwiKSYmZnVuY3Rpb24oKXt2YXIgdD0hMTt0cnl7dmFyIGU9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXt0PSEwfX0pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidGVzdFwiLG51bGwsZSl9Y2F0Y2godCl7fXJldHVybiB0fSgpLGg9dCx5PWIuc3BlY3RydW0seD1bXSxTPVtdLG09W10sZz0wLHY9e30sdz10Lm93bmVyRG9jdW1lbnQsRT1iLmRvY3VtZW50RWxlbWVudHx8dy5kb2N1bWVudEVsZW1lbnQsQz13LmJvZHksUD0tMSxOPTAsaz0xLFU9MixBPVwicnRsXCI9PT13LmRpcnx8MT09PWIub3J0PzA6MTAwO2Z1bmN0aW9uIFYodCxlKXt2YXIgcj13LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGUmJmh0KHIsZSksdC5hcHBlbmRDaGlsZChyKSxyfWZ1bmN0aW9uIEQodCxlKXt2YXIgcj1WKHQsYi5jc3NDbGFzc2VzLm9yaWdpbiksbj1WKHIsYi5jc3NDbGFzc2VzLmhhbmRsZSk7cmV0dXJuIFYobixiLmNzc0NsYXNzZXMudG91Y2hBcmVhKSxuLnNldEF0dHJpYnV0ZShcImRhdGEtaGFuZGxlXCIsZSksYi5rZXlib2FyZFN1cHBvcnQmJihuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsXCIwXCIpLG4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCxlKXtpZihPKCl8fEwoZSkpcmV0dXJuITE7dmFyIHI9W1wiTGVmdFwiLFwiUmlnaHRcIl0sbj1bXCJEb3duXCIsXCJVcFwiXSxpPVtcIlBhZ2VEb3duXCIsXCJQYWdlVXBcIl0sbz1bXCJIb21lXCIsXCJFbmRcIl07Yi5kaXImJiFiLm9ydD9yLnJldmVyc2UoKTpiLm9ydCYmIWIuZGlyJiYobi5yZXZlcnNlKCksaS5yZXZlcnNlKCkpO3ZhciBzLGE9dC5rZXkucmVwbGFjZShcIkFycm93XCIsXCJcIiksbD1hPT09aVswXSx1PWE9PT1pWzFdLGM9YT09PW5bMF18fGE9PT1yWzBdfHxsLHA9YT09PW5bMV18fGE9PT1yWzFdfHx1LGY9YT09PW9bMF0sZD1hPT09b1sxXTtpZighKGN8fHB8fGZ8fGQpKXJldHVybiEwO2lmKHQucHJldmVudERlZmF1bHQoKSxwfHxjKXt2YXIgaD1iLmtleWJvYXJkUGFnZU11bHRpcGxpZXIsbT1jPzA6MSxnPWF0KGUpLHY9Z1ttXTtpZihudWxsPT09dilyZXR1cm4hMTshMT09PXYmJih2PXkuZ2V0RGVmYXVsdFN0ZXAoU1tlXSxjLGIua2V5Ym9hcmREZWZhdWx0U3RlcCkpLCh1fHxsKSYmKHYqPWgpLHY9TWF0aC5tYXgodiwxZS03KSx2Kj1jPy0xOjEscz14W2VdK3Z9ZWxzZSBzPWQ/Yi5zcGVjdHJ1bS54VmFsW2Iuc3BlY3RydW0ueFZhbC5sZW5ndGgtMV06Yi5zcGVjdHJ1bS54VmFsWzBdO3JldHVybiBydChlLHkudG9TdGVwcGluZyhzKSwhMCwhMCksSihcInNsaWRlXCIsZSksSihcInVwZGF0ZVwiLGUpLEooXCJjaGFuZ2VcIixlKSxKKFwic2V0XCIsZSksITF9KHQsZSl9KSksbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJzbGlkZXJcIiksbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsYi5vcnQ/XCJ2ZXJ0aWNhbFwiOlwiaG9yaXpvbnRhbFwiKSwwPT09ZT9odChuLGIuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik6ZT09PWIuaGFuZGxlcy0xJiZodChuLGIuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcikscn1mdW5jdGlvbiBNKHQsZSl7cmV0dXJuISFlJiZWKHQsYi5jc3NDbGFzc2VzLmNvbm5lY3QpfWZ1bmN0aW9uIHIodCxlKXtyZXR1cm4hIWIudG9vbHRpcHNbZV0mJlYodC5maXJzdENoaWxkLGIuY3NzQ2xhc3Nlcy50b29sdGlwKX1mdW5jdGlvbiBPKCl7cmV0dXJuIGguaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIil9ZnVuY3Rpb24gTCh0KXtyZXR1cm4gdVt0XS5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX1mdW5jdGlvbiB6KCl7aSYmKEcoXCJ1cGRhdGVcIit2dC50b29sdGlwcyksaS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QmJnV0KHQpfSksaT1udWxsKX1mdW5jdGlvbiBIKCl7eigpLGk9dS5tYXAociksJChcInVwZGF0ZVwiK3Z0LnRvb2x0aXBzLGZ1bmN0aW9uKHQsZSxyKXtpZihpW2VdKXt2YXIgbj10W2VdOyEwIT09Yi50b29sdGlwc1tlXSYmKG49Yi50b29sdGlwc1tlXS50byhyW2VdKSksaVtlXS5pbm5lckhUTUw9bn19KX1mdW5jdGlvbiBqKGUsaSxvKXt2YXIgcz13LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYT1bXTthW05dPWIuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxhW2tdPWIuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLGFbVV09Yi5jc3NDbGFzc2VzLnZhbHVlU3ViO3ZhciBsPVtdO2xbTl09Yi5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxsW2tdPWIuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxsW1VdPWIuY3NzQ2xhc3Nlcy5tYXJrZXJTdWI7dmFyIHU9W2IuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsYi5jc3NDbGFzc2VzLnZhbHVlVmVydGljYWxdLGM9W2IuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLGIuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07ZnVuY3Rpb24gcCh0LGUpe3ZhciByPWU9PT1iLmNzc0NsYXNzZXMudmFsdWUsbj1yP2E6bDtyZXR1cm4gZStcIiBcIisocj91OmMpW2Iub3J0XStcIiBcIituW3RdfXJldHVybiBodChzLGIuY3NzQ2xhc3Nlcy5waXBzKSxodChzLDA9PT1iLm9ydD9iLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWw6Yi5jc3NDbGFzc2VzLnBpcHNWZXJ0aWNhbCksT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbih0KXshZnVuY3Rpb24odCxlLHIpe2lmKChyPWk/aShlLHIpOnIpIT09UCl7dmFyIG49VihzLCExKTtuLmNsYXNzTmFtZT1wKHIsYi5jc3NDbGFzc2VzLm1hcmtlciksbi5zdHlsZVtiLnN0eWxlXT10K1wiJVwiLE48ciYmKChuPVYocywhMSkpLmNsYXNzTmFtZT1wKHIsYi5jc3NDbGFzc2VzLnZhbHVlKSxuLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixlKSxuLnN0eWxlW2Iuc3R5bGVdPXQrXCIlXCIsbi5pbm5lckhUTUw9by50byhlKSl9fSh0LGVbdF1bMF0sZVt0XVsxXSl9KSxzfWZ1bmN0aW9uIEYoKXtjJiYodXQoYyksYz1udWxsKX1mdW5jdGlvbiBSKHQpe0YoKTt2YXIgbSxnLHYsYixlLHIseCxTLHcsbj10Lm1vZGUsaT10LmRlbnNpdHl8fDEsbz10LmZpbHRlcnx8ITEscz1mdW5jdGlvbih0LGUscil7aWYoXCJyYW5nZVwiPT09dHx8XCJzdGVwc1wiPT09dClyZXR1cm4geS54VmFsO2lmKFwiY291bnRcIj09PXQpe2lmKGU8Mil0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTt2YXIgbj1lLTEsaT0xMDAvbjtmb3IoZT1bXTtuLS07KWVbbl09bippO2UucHVzaCgxMDApLHQ9XCJwb3NpdGlvbnNcIn1yZXR1cm5cInBvc2l0aW9uc1wiPT09dD9lLm1hcChmdW5jdGlvbih0KXtyZXR1cm4geS5mcm9tU3RlcHBpbmcocj95LmdldFN0ZXAodCk6dCl9KTpcInZhbHVlc1wiPT09dD9yP2UubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB5LmZyb21TdGVwcGluZyh5LmdldFN0ZXAoeS50b1N0ZXBwaW5nKHQpKSl9KTplOnZvaWQgMH0obix0LnZhbHVlc3x8ITEsdC5zdGVwcGVkfHwhMSksYT0obT1pLGc9bix2PXMsYj17fSxlPXkueFZhbFswXSxyPXkueFZhbFt5LnhWYWwubGVuZ3RoLTFdLFM9eD0hMSx3PTAsKHY9di5zbGljZSgpLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC1lfSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0aGlzW3RdJiYodGhpc1t0XT0hMCl9LHt9KSlbMF0hPT1lJiYodi51bnNoaWZ0KGUpLHg9ITApLHZbdi5sZW5ndGgtMV0hPT1yJiYodi5wdXNoKHIpLFM9ITApLHYuZm9yRWFjaChmdW5jdGlvbih0LGUpe3ZhciByLG4saSxvLHMsYSxsLHUsYyxwLGY9dCxkPXZbZSsxXSxoPVwic3RlcHNcIj09PWc7aWYoaCYmKHI9eS54TnVtU3RlcHNbZV0pLHJ8fChyPWQtZiksITEhPT1mKWZvcih2b2lkIDA9PT1kJiYoZD1mKSxyPU1hdGgubWF4KHIsMWUtNyksbj1mO248PWQ7bj0obityKS50b0ZpeGVkKDcpLzEpe2Zvcih1PShzPShvPXkudG9TdGVwcGluZyhuKSktdykvbSxwPXMvKGM9TWF0aC5yb3VuZCh1KSksaT0xO2k8PWM7aSs9MSliWyhhPXcraSpwKS50b0ZpeGVkKDUpXT1beS5mcm9tU3RlcHBpbmcoYSksMF07bD0tMTx2LmluZGV4T2Yobik/azpoP1U6TiwhZSYmeCYmbiE9PWQmJihsPTApLG49PT1kJiZTfHwoYltvLnRvRml4ZWQoNSldPVtuLGxdKSx3PW99fSksYiksbD10LmZvcm1hdHx8e3RvOk1hdGgucm91bmR9O3JldHVybiBjPWguYXBwZW5kQ2hpbGQoaihhLG8sbCkpfWZ1bmN0aW9uIFQoKXt2YXIgdD1sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGU9XCJvZmZzZXRcIitbXCJXaWR0aFwiLFwiSGVpZ2h0XCJdW2Iub3J0XTtyZXR1cm4gMD09PWIub3J0P3Qud2lkdGh8fGxbZV06dC5oZWlnaHR8fGxbZV19ZnVuY3Rpb24gXyhuLGksbyxzKXt2YXIgZT1mdW5jdGlvbih0KXtyZXR1cm4hISh0PWZ1bmN0aW9uKHQsZSxyKXt2YXIgbixpLG89MD09PXQudHlwZS5pbmRleE9mKFwidG91Y2hcIikscz0wPT09dC50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSxhPTA9PT10LnR5cGUuaW5kZXhPZihcInBvaW50ZXJcIik7MD09PXQudHlwZS5pbmRleE9mKFwiTVNQb2ludGVyXCIpJiYoYT0hMCk7aWYoXCJtb3VzZWRvd25cIj09PXQudHlwZSYmIXQuYnV0dG9ucyYmIXQudG91Y2hlcylyZXR1cm4hMTtpZihvKXt2YXIgbD1mdW5jdGlvbih0KXtyZXR1cm4gdC50YXJnZXQ9PT1yfHxyLmNvbnRhaW5zKHQudGFyZ2V0KXx8dC50YXJnZXQuc2hhZG93Um9vdCYmdC50YXJnZXQuc2hhZG93Um9vdC5jb250YWlucyhyKX07aWYoXCJ0b3VjaHN0YXJ0XCI9PT10LnR5cGUpe3ZhciB1PUFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0LnRvdWNoZXMsbCk7aWYoMTx1Lmxlbmd0aClyZXR1cm4hMTtuPXVbMF0ucGFnZVgsaT11WzBdLnBhZ2VZfWVsc2V7dmFyIGM9QXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbCh0LmNoYW5nZWRUb3VjaGVzLGwpO2lmKCFjKXJldHVybiExO249Yy5wYWdlWCxpPWMucGFnZVl9fWU9ZXx8Z3QodyksKHN8fGEpJiYobj10LmNsaWVudFgrZS54LGk9dC5jbGllbnRZK2UueSk7cmV0dXJuIHQucGFnZU9mZnNldD1lLHQucG9pbnRzPVtuLGldLHQuY3Vyc29yPXN8fGEsdH0odCxzLnBhZ2VPZmZzZXQscy50YXJnZXR8fGkpKSYmKCEoTygpJiYhcy5kb05vdFJlamVjdCkmJihlPWgscj1iLmNzc0NsYXNzZXMudGFwLCEoKGUuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmNvbnRhaW5zKHIpOm5ldyBSZWdFeHAoXCJcXFxcYlwiK3IrXCJcXFxcYlwiKS50ZXN0KGUuY2xhc3NOYW1lKSkmJiFzLmRvTm90UmVqZWN0KSYmKCEobj09PWYuc3RhcnQmJnZvaWQgMCE9PXQuYnV0dG9ucyYmMTx0LmJ1dHRvbnMpJiYoKCFzLmhvdmVyfHwhdC5idXR0b25zKSYmKGR8fHQucHJldmVudERlZmF1bHQoKSx0LmNhbGNQb2ludD10LnBvaW50c1tiLm9ydF0sdm9pZCBvKHQscykpKSkpKTt2YXIgZSxyfSxyPVtdO3JldHVybiBuLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2kuYWRkRXZlbnRMaXN0ZW5lcih0LGUsISFkJiZ7cGFzc2l2ZTohMH0pLHIucHVzaChbdCxlXSl9KSxyfWZ1bmN0aW9uIEIodCl7dmFyIGUscixuLGksbyxzLGE9MTAwKih0LShlPWwscj1iLm9ydCxuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1lLm93bmVyRG9jdW1lbnQsbz1pLmRvY3VtZW50RWxlbWVudCxzPWd0KGkpLC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmKHMueD0wKSxyP24udG9wK3MueS1vLmNsaWVudFRvcDpuLmxlZnQrcy54LW8uY2xpZW50TGVmdCkpL1QoKTtyZXR1cm4gYT1mdChhKSxiLmRpcj8xMDAtYTphfWZ1bmN0aW9uIHEodCxlKXtcIm1vdXNlb3V0XCI9PT10LnR5cGUmJlwiSFRNTFwiPT09dC50YXJnZXQubm9kZU5hbWUmJm51bGw9PT10LnJlbGF0ZWRUYXJnZXQmJlkodCxlKX1mdW5jdGlvbiBYKHQsZSl7aWYoLTE9PT1uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpJiYwPT09dC5idXR0b25zJiYwIT09ZS5idXR0b25zUHJvcGVydHkpcmV0dXJuIFkodCxlKTt2YXIgcj0oYi5kaXI/LTE6MSkqKHQuY2FsY1BvaW50LWUuc3RhcnRDYWxjUG9pbnQpO1ooMDxyLDEwMCpyL2UuYmFzZVNpemUsZS5sb2NhdGlvbnMsZS5oYW5kbGVOdW1iZXJzKX1mdW5jdGlvbiBZKHQsZSl7ZS5oYW5kbGUmJihtdChlLmhhbmRsZSxiLmNzc0NsYXNzZXMuYWN0aXZlKSxnLT0xKSxlLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe0UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0WzBdLHRbMV0pfSksMD09PWcmJihtdChoLGIuY3NzQ2xhc3Nlcy5kcmFnKSxldCgpLHQuY3Vyc29yJiYoQy5zdHlsZS5jdXJzb3I9XCJcIixDLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLGN0KSkpLGUuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe0ooXCJjaGFuZ2VcIix0KSxKKFwic2V0XCIsdCksSihcImVuZFwiLHQpfSl9ZnVuY3Rpb24gSSh0LGUpe2lmKGUuaGFuZGxlTnVtYmVycy5zb21lKEwpKXJldHVybiExO3ZhciByOzE9PT1lLmhhbmRsZU51bWJlcnMubGVuZ3RoJiYocj11W2UuaGFuZGxlTnVtYmVyc1swXV0uY2hpbGRyZW5bMF0sZys9MSxodChyLGIuY3NzQ2xhc3Nlcy5hY3RpdmUpKTt0LnN0b3BQcm9wYWdhdGlvbigpO3ZhciBuPVtdLGk9XyhmLm1vdmUsRSxYLHt0YXJnZXQ6dC50YXJnZXQsaGFuZGxlOnIsbGlzdGVuZXJzOm4sc3RhcnRDYWxjUG9pbnQ6dC5jYWxjUG9pbnQsYmFzZVNpemU6VCgpLHBhZ2VPZmZzZXQ6dC5wYWdlT2Zmc2V0LGhhbmRsZU51bWJlcnM6ZS5oYW5kbGVOdW1iZXJzLGJ1dHRvbnNQcm9wZXJ0eTp0LmJ1dHRvbnMsbG9jYXRpb25zOlMuc2xpY2UoKX0pLG89XyhmLmVuZCxFLFkse3RhcmdldDp0LnRhcmdldCxoYW5kbGU6cixsaXN0ZW5lcnM6bixkb05vdFJlamVjdDohMCxoYW5kbGVOdW1iZXJzOmUuaGFuZGxlTnVtYmVyc30pLHM9XyhcIm1vdXNlb3V0XCIsRSxxLHt0YXJnZXQ6dC50YXJnZXQsaGFuZGxlOnIsbGlzdGVuZXJzOm4sZG9Ob3RSZWplY3Q6ITAsaGFuZGxlTnVtYmVyczplLmhhbmRsZU51bWJlcnN9KTtuLnB1c2guYXBwbHkobixpLmNvbmNhdChvLHMpKSx0LmN1cnNvciYmKEMuc3R5bGUuY3Vyc29yPWdldENvbXB1dGVkU3R5bGUodC50YXJnZXQpLmN1cnNvciwxPHUubGVuZ3RoJiZodChoLGIuY3NzQ2xhc3Nlcy5kcmFnKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLGN0LCExKSksZS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24odCl7SihcInN0YXJ0XCIsdCl9KX1mdW5jdGlvbiBuKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCk7dmFyIGksbyxzLGU9Qih0LmNhbGNQb2ludCkscj0oaT1lLHM9IShvPTEwMCksdS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7aWYoIUwoZSkpe3ZhciByPVNbZV0sbj1NYXRoLmFicyhyLWkpOyhuPG98fG48PW8mJnI8aXx8MTAwPT09biYmMTAwPT09bykmJihzPWUsbz1uKX19KSxzKTtpZighMT09PXIpcmV0dXJuITE7Yi5ldmVudHMuc25hcHx8cHQoaCxiLmNzc0NsYXNzZXMudGFwLGIuYW5pbWF0aW9uRHVyYXRpb24pLHJ0KHIsZSwhMCwhMCksZXQoKSxKKFwic2xpZGVcIixyLCEwKSxKKFwidXBkYXRlXCIsciwhMCksSihcImNoYW5nZVwiLHIsITApLEooXCJzZXRcIixyLCEwKSxiLmV2ZW50cy5zbmFwJiZJKHQse2hhbmRsZU51bWJlcnM6W3JdfSl9ZnVuY3Rpb24gVyh0KXt2YXIgZT1CKHQuY2FsY1BvaW50KSxyPXkuZ2V0U3RlcChlKSxuPXkuZnJvbVN0ZXBwaW5nKHIpO09iamVjdC5rZXlzKHYpLmZvckVhY2goZnVuY3Rpb24odCl7XCJob3ZlclwiPT09dC5zcGxpdChcIi5cIilbMF0mJnZbdF0uZm9yRWFjaChmdW5jdGlvbih0KXt0LmNhbGwoYSxuKX0pfSl9ZnVuY3Rpb24gJCh0LGUpe3ZbdF09dlt0XXx8W10sdlt0XS5wdXNoKGUpLFwidXBkYXRlXCI9PT10LnNwbGl0KFwiLlwiKVswXSYmdS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7SihcInVwZGF0ZVwiLGUpfSl9ZnVuY3Rpb24gRyh0KXt2YXIgaT10JiZ0LnNwbGl0KFwiLlwiKVswXSxvPWk/dC5zdWJzdHJpbmcoaS5sZW5ndGgpOnQ7T2JqZWN0LmtleXModikuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZSxyPXQuc3BsaXQoXCIuXCIpWzBdLG49dC5zdWJzdHJpbmcoci5sZW5ndGgpO2kmJmkhPT1yfHxvJiZvIT09bnx8KChlPW4pIT09dnQuYXJpYSYmZSE9PXZ0LnRvb2x0aXBzfHxvPT09bikmJmRlbGV0ZSB2W3RdfSl9ZnVuY3Rpb24gSihyLG4saSl7T2JqZWN0LmtleXModikuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT10LnNwbGl0KFwiLlwiKVswXTtyPT09ZSYmdlt0XS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuY2FsbChhLHgubWFwKGIuZm9ybWF0LnRvKSxuLHguc2xpY2UoKSxpfHwhMSxTLnNsaWNlKCksYSl9KX0pfWZ1bmN0aW9uIEsodCxlLHIsbixpLG8pe3ZhciBzO3JldHVybiAxPHUubGVuZ3RoJiYhYi5ldmVudHMudW5jb25zdHJhaW5lZCYmKG4mJjA8ZSYmKHM9eS5nZXRBYnNvbHV0ZURpc3RhbmNlKHRbZS0xXSxiLm1hcmdpbiwwKSxyPU1hdGgubWF4KHIscykpLGkmJmU8dS5sZW5ndGgtMSYmKHM9eS5nZXRBYnNvbHV0ZURpc3RhbmNlKHRbZSsxXSxiLm1hcmdpbiwxKSxyPU1hdGgubWluKHIscykpKSwxPHUubGVuZ3RoJiZiLmxpbWl0JiYobiYmMDxlJiYocz15LmdldEFic29sdXRlRGlzdGFuY2UodFtlLTFdLGIubGltaXQsMCkscj1NYXRoLm1pbihyLHMpKSxpJiZlPHUubGVuZ3RoLTEmJihzPXkuZ2V0QWJzb2x1dGVEaXN0YW5jZSh0W2UrMV0sYi5saW1pdCwxKSxyPU1hdGgubWF4KHIscykpKSxiLnBhZGRpbmcmJigwPT09ZSYmKHM9eS5nZXRBYnNvbHV0ZURpc3RhbmNlKDAsYi5wYWRkaW5nWzBdLDApLHI9TWF0aC5tYXgocixzKSksZT09PXUubGVuZ3RoLTEmJihzPXkuZ2V0QWJzb2x1dGVEaXN0YW5jZSgxMDAsYi5wYWRkaW5nWzFdLDEpLHI9TWF0aC5taW4ocixzKSkpLCEoKHI9ZnQocj15LmdldFN0ZXAocikpKT09PXRbZV0mJiFvKSYmcn1mdW5jdGlvbiBRKHQsZSl7dmFyIHI9Yi5vcnQ7cmV0dXJuKHI/ZTp0KStcIiwgXCIrKHI/dDplKX1mdW5jdGlvbiBaKHQsbixyLGUpe3ZhciBpPXIuc2xpY2UoKSxvPVshdCx0XSxzPVt0LCF0XTtlPWUuc2xpY2UoKSx0JiZlLnJldmVyc2UoKSwxPGUubGVuZ3RoP2UuZm9yRWFjaChmdW5jdGlvbih0LGUpe3ZhciByPUsoaSx0LGlbdF0rbixvW2VdLHNbZV0sITEpOyExPT09cj9uPTA6KG49ci1pW3RdLGlbdF09cil9KTpvPXM9WyEwXTt2YXIgYT0hMTtlLmZvckVhY2goZnVuY3Rpb24odCxlKXthPXJ0KHQsclt0XStuLG9bZV0sc1tlXSl8fGF9KSxhJiZlLmZvckVhY2goZnVuY3Rpb24odCl7SihcInVwZGF0ZVwiLHQpLEooXCJzbGlkZVwiLHQpfSl9ZnVuY3Rpb24gdHQodCxlKXtyZXR1cm4gYi5kaXI/MTAwLXQtZTp0fWZ1bmN0aW9uIGV0KCl7bS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPTUwPFNbdF0/LTE6MSxyPTMrKHUubGVuZ3RoK2UqdCk7dVt0XS5zdHlsZS56SW5kZXg9cn0pfWZ1bmN0aW9uIHJ0KHQsZSxyLG4saSl7cmV0dXJuIGl8fChlPUsoUyx0LGUscixuLCExKSksITEhPT1lJiYoZnVuY3Rpb24odCxlKXtTW3RdPWUseFt0XT15LmZyb21TdGVwcGluZyhlKTt2YXIgcj1cInRyYW5zbGF0ZShcIitRKDEwKih0dChlLDApLUEpK1wiJVwiLFwiMFwiKStcIilcIjt1W3RdLnN0eWxlW2IudHJhbnNmb3JtUnVsZV09cixudCh0KSxudCh0KzEpfSh0LGUpLCEwKX1mdW5jdGlvbiBudCh0KXtpZihzW3RdKXt2YXIgZT0wLHI9MTAwOzAhPT10JiYoZT1TW3QtMV0pLHQhPT1zLmxlbmd0aC0xJiYocj1TW3RdKTt2YXIgbj1yLWUsaT1cInRyYW5zbGF0ZShcIitRKHR0KGUsbikrXCIlXCIsXCIwXCIpK1wiKVwiLG89XCJzY2FsZShcIitRKG4vMTAwLFwiMVwiKStcIilcIjtzW3RdLnN0eWxlW2IudHJhbnNmb3JtUnVsZV09aStcIiBcIitvfX1mdW5jdGlvbiBpdCh0LGUpe3JldHVybiBudWxsPT09dHx8ITE9PT10fHx2b2lkIDA9PT10P1NbZV06KFwibnVtYmVyXCI9PXR5cGVvZiB0JiYodD1TdHJpbmcodCkpLHQ9Yi5mb3JtYXQuZnJvbSh0KSwhMT09PSh0PXkudG9TdGVwcGluZyh0KSl8fGlzTmFOKHQpP1NbZV06dCl9ZnVuY3Rpb24gb3QodCxlLHIpe3ZhciBuPWR0KHQpLGk9dm9pZCAwPT09U1swXTtlPXZvaWQgMD09PWV8fCEhZSxiLmFuaW1hdGUmJiFpJiZwdChoLGIuY3NzQ2xhc3Nlcy50YXAsYi5hbmltYXRpb25EdXJhdGlvbiksbS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3J0KHQsaXQoblt0XSx0KSwhMCwhMSxyKX0pO2Zvcih2YXIgbz0xPT09bS5sZW5ndGg/MDoxO288bS5sZW5ndGg7KytvKW0uZm9yRWFjaChmdW5jdGlvbih0KXtydCh0LFNbdF0sITAsITAscil9KTtldCgpLG0uZm9yRWFjaChmdW5jdGlvbih0KXtKKFwidXBkYXRlXCIsdCksbnVsbCE9PW5bdF0mJmUmJkooXCJzZXRcIix0KX0pfWZ1bmN0aW9uIHN0KCl7dmFyIHQ9eC5tYXAoYi5mb3JtYXQudG8pO3JldHVybiAxPT09dC5sZW5ndGg/dFswXTp0fWZ1bmN0aW9uIGF0KHQpe3ZhciBlPVNbdF0scj15LmdldE5lYXJieVN0ZXBzKGUpLG49eFt0XSxpPXIudGhpc1N0ZXAuc3RlcCxvPW51bGw7aWYoYi5zbmFwKXJldHVybltuLXIuc3RlcEJlZm9yZS5zdGFydFZhbHVlfHxudWxsLHIuc3RlcEFmdGVyLnN0YXJ0VmFsdWUtbnx8bnVsbF07ITEhPT1pJiZuK2k+ci5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZSYmKGk9ci5zdGVwQWZ0ZXIuc3RhcnRWYWx1ZS1uKSxvPW4+ci50aGlzU3RlcC5zdGFydFZhbHVlP3IudGhpc1N0ZXAuc3RlcDohMSE9PXIuc3RlcEJlZm9yZS5zdGVwJiZuLXIuc3RlcEJlZm9yZS5oaWdoZXN0U3RlcCwxMDA9PT1lP2k9bnVsbDowPT09ZSYmKG89bnVsbCk7dmFyIHM9eS5jb3VudFN0ZXBEZWNpbWFscygpO3JldHVybiBudWxsIT09aSYmITEhPT1pJiYoaT1OdW1iZXIoaS50b0ZpeGVkKHMpKSksbnVsbCE9PW8mJiExIT09byYmKG89TnVtYmVyKG8udG9GaXhlZChzKSkpLFtvLGldfXJldHVybiBodChlPWgsYi5jc3NDbGFzc2VzLnRhcmdldCksMD09PWIuZGlyP2h0KGUsYi5jc3NDbGFzc2VzLmx0cik6aHQoZSxiLmNzc0NsYXNzZXMucnRsKSwwPT09Yi5vcnQ/aHQoZSxiLmNzc0NsYXNzZXMuaG9yaXpvbnRhbCk6aHQoZSxiLmNzc0NsYXNzZXMudmVydGljYWwpLGh0KGUsXCJydGxcIj09PWdldENvbXB1dGVkU3R5bGUoZSkuZGlyZWN0aW9uP2IuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uUnRsOmIuY3NzQ2xhc3Nlcy50ZXh0RGlyZWN0aW9uTHRyKSxsPVYoZSxiLmNzc0NsYXNzZXMuYmFzZSksZnVuY3Rpb24odCxlKXt2YXIgcj1WKGUsYi5jc3NDbGFzc2VzLmNvbm5lY3RzKTt1PVtdLChzPVtdKS5wdXNoKE0ocix0WzBdKSk7Zm9yKHZhciBuPTA7bjxiLmhhbmRsZXM7bisrKXUucHVzaChEKGUsbikpLG1bbl09bixzLnB1c2goTShyLHRbbisxXSkpfShiLmNvbm5lY3QsbCksKHA9Yi5ldmVudHMpLmZpeGVkfHx1LmZvckVhY2goZnVuY3Rpb24odCxlKXtfKGYuc3RhcnQsdC5jaGlsZHJlblswXSxJLHtoYW5kbGVOdW1iZXJzOltlXX0pfSkscC50YXAmJl8oZi5zdGFydCxsLG4se30pLHAuaG92ZXImJl8oZi5tb3ZlLGwsVyx7aG92ZXI6ITB9KSxwLmRyYWcmJnMuZm9yRWFjaChmdW5jdGlvbih0LGUpe2lmKCExIT09dCYmMCE9PWUmJmUhPT1zLmxlbmd0aC0xKXt2YXIgcj11W2UtMV0sbj11W2VdLGk9W3RdO2h0KHQsYi5jc3NDbGFzc2VzLmRyYWdnYWJsZSkscC5maXhlZCYmKGkucHVzaChyLmNoaWxkcmVuWzBdKSxpLnB1c2gobi5jaGlsZHJlblswXSkpLGkuZm9yRWFjaChmdW5jdGlvbih0KXtfKGYuc3RhcnQsdCxJLHtoYW5kbGVzOltyLG5dLGhhbmRsZU51bWJlcnM6W2UtMSxlXX0pfSl9fSksb3QoYi5zdGFydCksYi5waXBzJiZSKGIucGlwcyksYi50b29sdGlwcyYmSCgpLEcoXCJ1cGRhdGVcIit2dC5hcmlhKSwkKFwidXBkYXRlXCIrdnQuYXJpYSxmdW5jdGlvbih0LGUscyxyLGEpe20uZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT11W3RdLHI9SyhTLHQsMCwhMCwhMCwhMCksbj1LKFMsdCwxMDAsITAsITAsITApLGk9YVt0XSxvPWIuYXJpYUZvcm1hdC50byhzW3RdKTtyPXkuZnJvbVN0ZXBwaW5nKHIpLnRvRml4ZWQoMSksbj15LmZyb21TdGVwcGluZyhuKS50b0ZpeGVkKDEpLGk9eS5mcm9tU3RlcHBpbmcoaSkudG9GaXhlZCgxKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIixyKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIixuKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIixpKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIsbyl9KX0pLGE9e2Rlc3Ryb3k6ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gRyh2dC5hcmlhKSxHKHZ0LnRvb2x0aXBzKSxiLmNzc0NsYXNzZXMpYi5jc3NDbGFzc2VzLmhhc093blByb3BlcnR5KHQpJiZtdChoLGIuY3NzQ2xhc3Nlc1t0XSk7Zm9yKDtoLmZpcnN0Q2hpbGQ7KWgucmVtb3ZlQ2hpbGQoaC5maXJzdENoaWxkKTtkZWxldGUgaC5ub1VpU2xpZGVyfSxzdGVwczpmdW5jdGlvbigpe3JldHVybiBtLm1hcChhdCl9LG9uOiQsb2ZmOkcsZ2V0OnN0LHNldDpvdCxzZXRIYW5kbGU6ZnVuY3Rpb24odCxlLHIsbil7aWYoISgwPD0odD1OdW1iZXIodCkpJiZ0PG0ubGVuZ3RoKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6IGludmFsaWQgaGFuZGxlIG51bWJlciwgZ290OiBcIit0KTtydCh0LGl0KGUsdCksITAsITAsbiksSihcInVwZGF0ZVwiLHQpLHImJkooXCJzZXRcIix0KX0scmVzZXQ6ZnVuY3Rpb24odCl7b3QoYi5zdGFydCx0KX0sX19tb3ZlSGFuZGxlczpmdW5jdGlvbih0LGUscil7Wih0LGUsUyxyKX0sb3B0aW9uczpvLHVwZGF0ZU9wdGlvbnM6ZnVuY3Rpb24oZSx0KXt2YXIgcj1zdCgpLG49W1wibWFyZ2luXCIsXCJsaW1pdFwiLFwicGFkZGluZ1wiLFwicmFuZ2VcIixcImFuaW1hdGVcIixcInNuYXBcIixcInN0ZXBcIixcImZvcm1hdFwiLFwicGlwc1wiLFwidG9vbHRpcHNcIl07bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZvaWQgMCE9PWVbdF0mJihvW3RdPWVbdF0pfSk7dmFyIGk9YnQobyk7bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZvaWQgMCE9PWVbdF0mJihiW3RdPWlbdF0pfSkseT1pLnNwZWN0cnVtLGIubWFyZ2luPWkubWFyZ2luLGIubGltaXQ9aS5saW1pdCxiLnBhZGRpbmc9aS5wYWRkaW5nLGIucGlwcz9SKGIucGlwcyk6RigpLGIudG9vbHRpcHM/SCgpOnooKSxTPVtdLG90KGUuc3RhcnR8fHIsdCl9LHRhcmdldDpoLHJlbW92ZVBpcHM6RixyZW1vdmVUb29sdGlwczp6LGdldFRvb2x0aXBzOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGdldE9yaWdpbnM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0scGlwczpSfX1yZXR1cm57X19zcGVjdHJ1bTppLHZlcnNpb246bHQsY3NzQ2xhc3NlczpkLGNyZWF0ZTpmdW5jdGlvbih0LGUpe2lmKCF0fHwhdC5ub2RlTmFtZSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6IGNyZWF0ZSByZXF1aXJlcyBhIHNpbmdsZSBlbGVtZW50LCBnb3Q6IFwiK3QpO2lmKHQubm9VaVNsaWRlcil0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIitsdCtcIik6IFNsaWRlciB3YXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7dmFyIHI9aih0LGJ0KGUpLGUpO3JldHVybiB0Lm5vVWlTbGlkZXI9cn19fSk7XHJcbiFmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTp3aW5kb3cud051bWI9ZSgpfShmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVtcImRlY2ltYWxzXCIsXCJ0aG91c2FuZFwiLFwibWFya1wiLFwicHJlZml4XCIsXCJzdWZmaXhcIixcImVuY29kZXJcIixcImRlY29kZXJcIixcIm5lZ2F0aXZlQmVmb3JlXCIsXCJuZWdhdGl2ZVwiLFwiZWRpdFwiLFwidW5kb1wiXTtmdW5jdGlvbiB3KGUpe3JldHVybiBlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpfWZ1bmN0aW9uIGgoZSx0KXtyZXR1cm4gZS5zdWJzdHJpbmcoMCx0Lmxlbmd0aCk9PT10fWZ1bmN0aW9uIGYoZSx0LG4pe2lmKChlW3RdfHxlW25dKSYmZVt0XT09PWVbbl0pdGhyb3cgbmV3IEVycm9yKHQpfWZ1bmN0aW9uIHgoZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGUmJmlzRmluaXRlKGUpfWZ1bmN0aW9uIG4oZSx0LG4scixpLG8sZix1LHMsYyxhLHApe3ZhciBkLGwsaCxnPXAsdj1cIlwiLG09XCJcIjtyZXR1cm4gbyYmKHA9byhwKSksISF4KHApJiYoITEhPT1lJiYwPT09cGFyc2VGbG9hdChwLnRvRml4ZWQoZSkpJiYocD0wKSxwPDAmJihkPSEwLHA9TWF0aC5hYnMocCkpLCExIT09ZSYmKHA9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1lLnRvU3RyaW5nKCkuc3BsaXQoXCJlXCIpLCgrKChlPShlPU1hdGgucm91bmQoKyhlWzBdK1wiZVwiKyhlWzFdPytlWzFdK3Q6dCkpKSkudG9TdHJpbmcoKS5zcGxpdChcImVcIikpWzBdK1wiZVwiKyhlWzFdP2VbMV0tdDotdCkpKS50b0ZpeGVkKHQpfShwLGUpKSwtMSE9PShwPXAudG9TdHJpbmcoKSkuaW5kZXhPZihcIi5cIik/KGg9KGw9cC5zcGxpdChcIi5cIikpWzBdLG4mJih2PW4rbFsxXSkpOmg9cCx0JiYoaD13KChoPXcoaCkubWF0Y2goLy57MSwzfS9nKSkuam9pbih3KHQpKSkpLGQmJnUmJihtKz11KSxyJiYobSs9ciksZCYmcyYmKG0rPXMpLG0rPWgsbSs9dixpJiYobSs9aSksYyYmKG09YyhtLGcpKSxtKX1mdW5jdGlvbiByKGUsdCxuLHIsaSxvLGYsdSxzLGMsYSxwKXt2YXIgZCxsPVwiXCI7cmV0dXJuIGEmJihwPWEocCkpLCEoIXB8fFwic3RyaW5nXCIhPXR5cGVvZiBwKSYmKHUmJmgocCx1KSYmKHA9cC5yZXBsYWNlKHUsXCJcIiksZD0hMCksciYmaChwLHIpJiYocD1wLnJlcGxhY2UocixcIlwiKSkscyYmaChwLHMpJiYocD1wLnJlcGxhY2UocyxcIlwiKSxkPSEwKSxpJiZmdW5jdGlvbihlLHQpe3JldHVybiBlLnNsaWNlKC0xKnQubGVuZ3RoKT09PXR9KHAsaSkmJihwPXAuc2xpY2UoMCwtMSppLmxlbmd0aCkpLHQmJihwPXAuc3BsaXQodCkuam9pbihcIlwiKSksbiYmKHA9cC5yZXBsYWNlKG4sXCIuXCIpKSxkJiYobCs9XCItXCIpLFwiXCIhPT0obD0obCs9cCkucmVwbGFjZSgvW14wLTlcXC5cXC0uXS9nLFwiXCIpKSYmKGw9TnVtYmVyKGwpLGYmJihsPWYobCkpLCEheChsKSYmbCkpfWZ1bmN0aW9uIGkoZSx0LG4pe3ZhciByLGk9W107Zm9yKHI9MDtyPG8ubGVuZ3RoO3IrPTEpaS5wdXNoKGVbb1tyXV0pO3JldHVybiBpLnB1c2gobiksdC5hcHBseShcIlwiLGkpfXJldHVybiBmdW5jdGlvbiBlKHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGUpKXJldHVybiBuZXcgZSh0KTtcIm9iamVjdFwiPT10eXBlb2YgdCYmKHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9e307Zm9yKHZvaWQgMD09PWUuc3VmZml4JiYoZS5zdWZmaXg9ZS5wb3N0Zml4KSx0PTA7dDxvLmxlbmd0aDt0Kz0xKWlmKHZvaWQgMD09PShyPWVbbj1vW3RdXSkpXCJuZWdhdGl2ZVwiIT09bnx8aS5uZWdhdGl2ZUJlZm9yZT9cIm1hcmtcIj09PW4mJlwiLlwiIT09aS50aG91c2FuZD9pW25dPVwiLlwiOmlbbl09ITE6aVtuXT1cIi1cIjtlbHNlIGlmKFwiZGVjaW1hbHNcIj09PW4pe2lmKCEoMDw9ciYmcjw4KSl0aHJvdyBuZXcgRXJyb3Iobik7aVtuXT1yfWVsc2UgaWYoXCJlbmNvZGVyXCI9PT1ufHxcImRlY29kZXJcIj09PW58fFwiZWRpdFwiPT09bnx8XCJ1bmRvXCI9PT1uKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IG5ldyBFcnJvcihuKTtpW25dPXJ9ZWxzZXtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3Iobik7aVtuXT1yfXJldHVybiBmKGksXCJtYXJrXCIsXCJ0aG91c2FuZFwiKSxmKGksXCJwcmVmaXhcIixcIm5lZ2F0aXZlXCIpLGYoaSxcInByZWZpeFwiLFwibmVnYXRpdmVCZWZvcmVcIiksaX0odCksdGhpcy50bz1mdW5jdGlvbihlKXtyZXR1cm4gaSh0LG4sZSl9LHRoaXMuZnJvbT1mdW5jdGlvbihlKXtyZXR1cm4gaSh0LHIsZSl9KX19KTtcclxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcclxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcclxuXHQoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5JTWFzayA9IHt9KSk7XHJcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuKSB7XHJcblx0ICB2YXIgbW9kdWxlID0geyBleHBvcnRzOiB7fSB9O1xyXG5cdFx0cmV0dXJuIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcclxuXHR9XHJcblxyXG5cdHZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xyXG5cdCAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcclxuXHR9OyAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxyXG5cclxuXHJcblx0dmFyIGdsb2JhbCQxID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcblx0Y2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHwgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8IGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8IGNoZWNrKHR5cGVvZiBjb21tb25qc0dsb2JhbCA9PSAnb2JqZWN0JyAmJiBjb21tb25qc0dsb2JhbCkgfHwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcblx0ZnVuY3Rpb24gKCkge1xyXG5cdCAgcmV0dXJuIHRoaXM7XHJcblx0fSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XHJcblxyXG5cdHZhciBmYWlscyA9IGZ1bmN0aW9uIChleGVjKSB7XHJcblx0ICB0cnkge1xyXG5cdCAgICByZXR1cm4gISFleGVjKCk7XHJcblx0ICB9IGNhdGNoIChlcnJvcikge1xyXG5cdCAgICByZXR1cm4gdHJ1ZTtcclxuXHQgIH1cclxuXHR9O1xyXG5cclxuXHQvLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxyXG5cclxuXHJcblx0dmFyIGRlc2NyaXB0b3JzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcclxuXHQgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHtcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgcmV0dXJuIDc7XHJcblx0ICAgIH1cclxuXHQgIH0pWzFdICE9IDc7XHJcblx0fSk7XHJcblxyXG5cdHZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xyXG5cdHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyAvLyBOYXNob3JuIH4gSkRLOCBidWdcclxuXHJcblx0dmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHtcclxuXHQgIDE6IDJcclxuXHR9LCAxKTsgLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxyXG5cclxuXHR2YXIgZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xyXG5cdCAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XHJcblx0ICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcclxuXHR9IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XHJcblxyXG5cdHZhciBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHtcclxuXHRcdGY6IGZcclxuXHR9O1xyXG5cclxuXHR2YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcclxuXHQgIHJldHVybiB7XHJcblx0ICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXHJcblx0ICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcclxuXHQgICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXHJcblx0ICAgIHZhbHVlOiB2YWx1ZVxyXG5cdCAgfTtcclxuXHR9O1xyXG5cclxuXHR2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcclxuXHJcblx0dmFyIGNsYXNzb2ZSYXcgPSBmdW5jdGlvbiAoaXQpIHtcclxuXHQgIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XHJcblx0fTtcclxuXHJcblx0dmFyIHNwbGl0ID0gJycuc3BsaXQ7IC8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXHJcblxyXG5cdHZhciBpbmRleGVkT2JqZWN0ID0gZmFpbHMoZnVuY3Rpb24gKCkge1xyXG5cdCAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxyXG5cdCAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xyXG5cdCAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcclxuXHR9KSA/IGZ1bmN0aW9uIChpdCkge1xyXG5cdCAgcmV0dXJuIGNsYXNzb2ZSYXcoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcclxuXHR9IDogT2JqZWN0O1xyXG5cclxuXHQvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXHJcblx0dmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBmdW5jdGlvbiAoaXQpIHtcclxuXHQgIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xyXG5cdCAgcmV0dXJuIGl0O1xyXG5cdH07XHJcblxyXG5cdC8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXHJcblxyXG5cclxuXHJcblxyXG5cdHZhciB0b0luZGV4ZWRPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcclxuXHQgIHJldHVybiBpbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcclxuXHQgIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XHJcblx0fTtcclxuXHJcblx0Ly8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXHJcblx0Ly8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2VcclxuXHQvLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xyXG5cclxuXHJcblx0dmFyIHRvUHJpbWl0aXZlID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XHJcblx0ICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xyXG5cdCAgdmFyIGZuLCB2YWw7XHJcblx0ICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcclxuXHQgIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xyXG5cdCAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xyXG5cdCAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xyXG5cdH07XHJcblxyXG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xyXG5cclxuXHR2YXIgaGFzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcclxuXHQgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xyXG5cdH07XHJcblxyXG5cdHZhciBkb2N1bWVudCQxID0gZ2xvYmFsJDEuZG9jdW1lbnQ7IC8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxyXG5cclxuXHR2YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQkMSkgJiYgaXNPYmplY3QoZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KTtcclxuXHJcblx0dmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIChpdCkge1xyXG5cdCAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcclxuXHR9O1xyXG5cclxuXHQvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XHJcblxyXG5cclxuXHR2YXIgaWU4RG9tRGVmaW5lID0gIWRlc2NyaXB0b3JzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XHJcblx0ICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICByZXR1cm4gNztcclxuXHQgICAgfVxyXG5cdCAgfSkuYSAhPSA3O1xyXG5cdH0pO1xyXG5cclxuXHR2YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxyXG5cclxuXHR2YXIgZiQxID0gZGVzY3JpcHRvcnMgPyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xyXG5cdCAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcclxuXHQgIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcclxuXHQgIGlmIChpZThEb21EZWZpbmUpIHRyeSB7XHJcblx0ICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XHJcblx0ICB9IGNhdGNoIChlcnJvcikge1xyXG5cdCAgICAvKiBlbXB0eSAqL1xyXG5cdCAgfVxyXG5cdCAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighb2JqZWN0UHJvcGVydHlJc0VudW1lcmFibGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgb2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG5cdFx0ZjogZiQxXHJcblx0fTtcclxuXHJcblx0dmFyIGFuT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XHJcblx0ICBpZiAoIWlzT2JqZWN0KGl0KSkge1xyXG5cdCAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiBpdDtcclxuXHR9O1xyXG5cclxuXHR2YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7IC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XHJcblxyXG5cdHZhciBmJDIgPSBkZXNjcmlwdG9ycyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xyXG5cdCAgYW5PYmplY3QoTyk7XHJcblx0ICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XHJcblx0ICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcclxuXHQgIGlmIChpZThEb21EZWZpbmUpIHRyeSB7XHJcblx0ICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcclxuXHQgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0ICAgIC8qIGVtcHR5ICovXHJcblx0ICB9XHJcblx0ICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XHJcblx0ICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcclxuXHQgIHJldHVybiBPO1xyXG5cdH07XHJcblxyXG5cdHZhciBvYmplY3REZWZpbmVQcm9wZXJ0eSA9IHtcclxuXHRcdGY6IGYkMlxyXG5cdH07XHJcblxyXG5cdHZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBkZXNjcmlwdG9ycyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcclxuXHQgIHJldHVybiBvYmplY3REZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcclxuXHR9IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xyXG5cdCAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcclxuXHQgIHJldHVybiBvYmplY3Q7XHJcblx0fTtcclxuXHJcblx0dmFyIHNldEdsb2JhbCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0ICB0cnkge1xyXG5cdCAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsJDEsIGtleSwgdmFsdWUpO1xyXG5cdCAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHQgICAgZ2xvYmFsJDFba2V5XSA9IHZhbHVlO1xyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiB2YWx1ZTtcclxuXHR9O1xyXG5cclxuXHR2YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XHJcblx0dmFyIHN0b3JlID0gZ2xvYmFsJDFbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XHJcblx0dmFyIHNoYXJlZFN0b3JlID0gc3RvcmU7XHJcblxyXG5cdHZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24udG9TdHJpbmc7IC8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXHJcblxyXG5cdGlmICh0eXBlb2Ygc2hhcmVkU3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XHJcblx0ICBzaGFyZWRTdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XHJcblx0ICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xyXG5cdCAgfTtcclxuXHR9XHJcblxyXG5cdHZhciBpbnNwZWN0U291cmNlID0gc2hhcmVkU3RvcmUuaW5zcGVjdFNvdXJjZTtcclxuXHJcblx0dmFyIFdlYWtNYXAgPSBnbG9iYWwkMS5XZWFrTWFwO1xyXG5cdHZhciBuYXRpdmVXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xyXG5cclxuXHR2YXIgc2hhcmVkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xyXG5cdChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0ICByZXR1cm4gc2hhcmVkU3RvcmVba2V5XSB8fCAoc2hhcmVkU3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcclxuXHR9KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XHJcblx0ICB2ZXJzaW9uOiAnMy44LjMnLFxyXG5cdCAgbW9kZTogJ2dsb2JhbCcsXHJcblx0ICBjb3B5cmlnaHQ6ICfCqSAyMDIxIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xyXG5cdH0pO1xyXG5cdH0pO1xyXG5cclxuXHR2YXIgaWQgPSAwO1xyXG5cdHZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcclxuXHJcblx0dmFyIHVpZCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuXHQgIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XHJcblx0fTtcclxuXHJcblx0dmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcclxuXHJcblx0dmFyIHNoYXJlZEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuXHQgIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgaGlkZGVuS2V5cyA9IHt9O1xyXG5cclxuXHR2YXIgV2Vha01hcCQxID0gZ2xvYmFsJDEuV2Vha01hcDtcclxuXHR2YXIgc2V0LCBnZXQsIGhhcyQxO1xyXG5cclxuXHR2YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xyXG5cdCAgcmV0dXJuIGhhcyQxKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcclxuXHR9O1xyXG5cclxuXHR2YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcclxuXHQgIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcclxuXHQgICAgdmFyIHN0YXRlO1xyXG5cclxuXHQgICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xyXG5cdCAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIHN0YXRlO1xyXG5cdCAgfTtcclxuXHR9O1xyXG5cclxuXHRpZiAobmF0aXZlV2Vha01hcCkge1xyXG5cdCAgdmFyIHN0b3JlJDEgPSBzaGFyZWRTdG9yZS5zdGF0ZSB8fCAoc2hhcmVkU3RvcmUuc3RhdGUgPSBuZXcgV2Vha01hcCQxKCkpO1xyXG5cdCAgdmFyIHdtZ2V0ID0gc3RvcmUkMS5nZXQ7XHJcblx0ICB2YXIgd21oYXMgPSBzdG9yZSQxLmhhcztcclxuXHQgIHZhciB3bXNldCA9IHN0b3JlJDEuc2V0O1xyXG5cclxuXHQgIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcclxuXHQgICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XHJcblx0ICAgIHdtc2V0LmNhbGwoc3RvcmUkMSwgaXQsIG1ldGFkYXRhKTtcclxuXHQgICAgcmV0dXJuIG1ldGFkYXRhO1xyXG5cdCAgfTtcclxuXHJcblx0ICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcclxuXHQgICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUkMSwgaXQpIHx8IHt9O1xyXG5cdCAgfTtcclxuXHJcblx0ICBoYXMkMSA9IGZ1bmN0aW9uIChpdCkge1xyXG5cdCAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSQxLCBpdCk7XHJcblx0ICB9O1xyXG5cdH0gZWxzZSB7XHJcblx0ICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XHJcblx0ICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XHJcblxyXG5cdCAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xyXG5cdCAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcclxuXHQgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xyXG5cdCAgICByZXR1cm4gbWV0YWRhdGE7XHJcblx0ICB9O1xyXG5cclxuXHQgIGdldCA9IGZ1bmN0aW9uIChpdCkge1xyXG5cdCAgICByZXR1cm4gaGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcclxuXHQgIH07XHJcblxyXG5cdCAgaGFzJDEgPSBmdW5jdGlvbiAoaXQpIHtcclxuXHQgICAgcmV0dXJuIGhhcyhpdCwgU1RBVEUpO1xyXG5cdCAgfTtcclxuXHR9XHJcblxyXG5cdHZhciBpbnRlcm5hbFN0YXRlID0ge1xyXG5cdCAgc2V0OiBzZXQsXHJcblx0ICBnZXQ6IGdldCxcclxuXHQgIGhhczogaGFzJDEsXHJcblx0ICBlbmZvcmNlOiBlbmZvcmNlLFxyXG5cdCAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3JcclxuXHR9O1xyXG5cclxuXHR2YXIgcmVkZWZpbmUgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XHJcblx0dmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmdldDtcclxuXHR2YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlLmVuZm9yY2U7XHJcblx0dmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xyXG5cdChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XHJcblx0ICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcclxuXHQgIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcclxuXHQgIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcclxuXHQgIHZhciBzdGF0ZTtcclxuXHJcblx0ICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcclxuXHQgICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkge1xyXG5cdCAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcclxuXHJcblx0ICAgIGlmICghc3RhdGUuc291cmNlKSB7XHJcblx0ICAgICAgc3RhdGUuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xyXG5cdCAgICB9XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKE8gPT09IGdsb2JhbCQxKSB7XHJcblx0ICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO2Vsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xyXG5cdCAgICByZXR1cm47XHJcblx0ICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcclxuXHQgICAgZGVsZXRlIE9ba2V5XTtcclxuXHQgIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xyXG5cdCAgICBzaW1wbGUgPSB0cnVlO1xyXG5cdCAgfVxyXG5cclxuXHQgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO2Vsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpOyAvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcclxuXHR9KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdCAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcclxuXHR9KTtcclxuXHR9KTtcclxuXHJcblx0dmFyIHBhdGggPSBnbG9iYWwkMTtcclxuXHJcblx0dmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xyXG5cdCAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XHJcblx0fTtcclxuXHJcblx0dmFyIGdldEJ1aWx0SW4gPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcclxuXHQgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWwkMVtuYW1lc3BhY2VdKSA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWwkMVtuYW1lc3BhY2VdICYmIGdsb2JhbCQxW25hbWVzcGFjZV1bbWV0aG9kXTtcclxuXHR9O1xyXG5cclxuXHR2YXIgY2VpbCA9IE1hdGguY2VpbDtcclxuXHR2YXIgZmxvb3IgPSBNYXRoLmZsb29yOyAvLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxyXG5cclxuXHR2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XHJcblx0ICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcclxuXHR9O1xyXG5cclxuXHR2YXIgbWluID0gTWF0aC5taW47IC8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxyXG5cclxuXHR2YXIgdG9MZW5ndGggPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcclxuXHQgIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXHJcblx0fTtcclxuXHJcblx0dmFyIG1heCA9IE1hdGgubWF4O1xyXG5cdHZhciBtaW4kMSA9IE1hdGgubWluOyAvLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcclxuXHQvLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXHJcblx0Ly8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cclxuXHJcblx0dmFyIHRvQWJzb2x1dGVJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XHJcblx0ICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XHJcblx0ICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4kMShpbnRlZ2VyLCBsZW5ndGgpO1xyXG5cdH07XHJcblxyXG5cdC8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXHJcblxyXG5cclxuXHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XHJcblx0ICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XHJcblx0ICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcclxuXHQgICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcclxuXHQgICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcclxuXHQgICAgdmFyIHZhbHVlOyAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXHJcblx0ICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcclxuXHJcblx0ICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XHJcblx0ICAgICAgdmFsdWUgPSBPW2luZGV4KytdOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXHJcblxyXG5cdCAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7IC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcclxuXHQgICAgfSBlbHNlIGZvciAoOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xyXG5cdCAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xyXG5cdCAgfTtcclxuXHR9O1xyXG5cclxuXHR2YXIgYXJyYXlJbmNsdWRlcyA9IHtcclxuXHQgIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxyXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcclxuXHQgIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXHJcblx0ICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxyXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxyXG5cdCAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxyXG5cdH07XHJcblxyXG5cdHZhciBpbmRleE9mID0gYXJyYXlJbmNsdWRlcy5pbmRleE9mO1xyXG5cclxuXHJcblxyXG5cdHZhciBvYmplY3RLZXlzSW50ZXJuYWwgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xyXG5cdCAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcclxuXHQgIHZhciBpID0gMDtcclxuXHQgIHZhciByZXN1bHQgPSBbXTtcclxuXHQgIHZhciBrZXk7XHJcblxyXG5cdCAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7IC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuXHJcblxyXG5cdCAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcclxuXHQgICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHQvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcclxuXHR2YXIgZW51bUJ1Z0tleXMgPSBbJ2NvbnN0cnVjdG9yJywgJ2hhc093blByb3BlcnR5JywgJ2lzUHJvdG90eXBlT2YnLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAndG9Mb2NhbGVTdHJpbmcnLCAndG9TdHJpbmcnLCAndmFsdWVPZiddO1xyXG5cclxuXHR2YXIgaGlkZGVuS2V5cyQxID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7IC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXHJcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xyXG5cclxuXHR2YXIgZiQzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XHJcblx0ICByZXR1cm4gb2JqZWN0S2V5c0ludGVybmFsKE8sIGhpZGRlbktleXMkMSk7XHJcblx0fTtcclxuXHJcblx0dmFyIG9iamVjdEdldE93blByb3BlcnR5TmFtZXMgPSB7XHJcblx0XHRmOiBmJDNcclxuXHR9O1xyXG5cclxuXHR2YXIgZiQ0ID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcclxuXHJcblx0dmFyIG9iamVjdEdldE93blByb3BlcnR5U3ltYm9scyA9IHtcclxuXHRcdGY6IGYkNFxyXG5cdH07XHJcblxyXG5cdC8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcclxuXHJcblxyXG5cdHZhciBvd25LZXlzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xyXG5cdCAgdmFyIGtleXMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eU5hbWVzLmYoYW5PYmplY3QoaXQpKTtcclxuXHQgIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eVN5bWJvbHMuZjtcclxuXHQgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XHJcblx0fTtcclxuXHJcblx0dmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcclxuXHQgIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xyXG5cdCAgdmFyIGRlZmluZVByb3BlcnR5ID0gb2JqZWN0RGVmaW5lUHJvcGVydHkuZjtcclxuXHQgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBvYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuZjtcclxuXHJcblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgdmFyIGtleSA9IGtleXNbaV07XHJcblx0ICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xyXG5cdCAgfVxyXG5cdH07XHJcblxyXG5cdHZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XHJcblxyXG5cdHZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcclxuXHQgIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcclxuXHQgIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWUgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZSA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbikgOiAhIWRldGVjdGlvbjtcclxuXHR9O1xyXG5cclxuXHR2YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG5cdCAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcclxuXHR9O1xyXG5cclxuXHR2YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcclxuXHR2YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xyXG5cdHZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xyXG5cdHZhciBpc0ZvcmNlZF8xID0gaXNGb3JjZWQ7XHJcblxyXG5cdHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkMSA9IG9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvci5mO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHQvKlxyXG5cdCAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcclxuXHQgIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcclxuXHQgIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XHJcblx0ICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxyXG5cdCAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXHJcblx0ICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxyXG5cdCAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXHJcblx0ICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXHJcblx0ICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XHJcblx0ICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xyXG5cdCAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XHJcblx0ICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxyXG5cdCovXHJcblxyXG5cclxuXHR2YXIgX2V4cG9ydCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcclxuXHQgIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcclxuXHQgIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcclxuXHQgIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XHJcblx0ICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xyXG5cclxuXHQgIGlmIChHTE9CQUwpIHtcclxuXHQgICAgdGFyZ2V0ID0gZ2xvYmFsJDE7XHJcblx0ICB9IGVsc2UgaWYgKFNUQVRJQykge1xyXG5cdCAgICB0YXJnZXQgPSBnbG9iYWwkMVtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcclxuXHQgIH0gZWxzZSB7XHJcblx0ICAgIHRhcmdldCA9IChnbG9iYWwkMVtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XHJcblx0ICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XHJcblxyXG5cdCAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xyXG5cdCAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IkMSh0YXJnZXQsIGtleSk7XHJcblx0ICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XHJcblx0ICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xyXG5cclxuXHQgICAgRk9SQ0VEID0gaXNGb3JjZWRfMShHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpOyAvLyBjb250YWluZWQgaW4gdGFyZ2V0XHJcblxyXG5cdCAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcclxuXHQgICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XHJcblx0ICAgIH0gLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xyXG5cclxuXHJcblx0ICAgIGlmIChvcHRpb25zLnNoYW0gfHwgdGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkge1xyXG5cdCAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcclxuXHQgICAgfSAvLyBleHRlbmQgZ2xvYmFsXHJcblxyXG5cclxuXHQgICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcclxuXHQgIH1cclxuXHR9O1xyXG5cclxuXHQvLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcclxuXHJcblxyXG5cdHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XHJcblx0ICByZXR1cm4gb2JqZWN0S2V5c0ludGVybmFsKE8sIGVudW1CdWdLZXlzKTtcclxuXHR9O1xyXG5cclxuXHQvLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3RcclxuXHJcblxyXG5cdHZhciB0b09iamVjdCA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xyXG5cdCAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XHJcblx0fTtcclxuXHJcblx0dmFyIG5hdGl2ZUFzc2lnbiA9IE9iamVjdC5hc3NpZ247XHJcblx0dmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5OyAvLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXHJcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXHJcblxyXG5cdHZhciBvYmplY3RBc3NpZ24gPSAhbmF0aXZlQXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcclxuXHQgIC8vIHNob3VsZCBoYXZlIGNvcnJlY3Qgb3JkZXIgb2Ygb3BlcmF0aW9ucyAoRWRnZSBidWcpXHJcblx0ICBpZiAoZGVzY3JpcHRvcnMgJiYgbmF0aXZlQXNzaWduKHtcclxuXHQgICAgYjogMVxyXG5cdCAgfSwgbmF0aXZlQXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcclxuXHQgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XHJcblx0ICAgICAgICB2YWx1ZTogMyxcclxuXHQgICAgICAgIGVudW1lcmFibGU6IGZhbHNlXHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHQgIH0pLCB7XHJcblx0ICAgIGI6IDJcclxuXHQgIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTsgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXHJcblxyXG5cdCAgdmFyIEEgPSB7fTtcclxuXHQgIHZhciBCID0ge307IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG5cclxuXHQgIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcclxuXHQgIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XHJcblx0ICBBW3N5bWJvbF0gPSA3O1xyXG5cdCAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikge1xyXG5cdCAgICBCW2Nocl0gPSBjaHI7XHJcblx0ICB9KTtcclxuXHQgIHJldHVybiBuYXRpdmVBc3NpZ24oe30sIEEpW3N5bWJvbF0gIT0gNyB8fCBvYmplY3RLZXlzKG5hdGl2ZUFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IGFscGhhYmV0O1xyXG5cdH0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7XHJcblx0ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcblx0ICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XHJcblx0ICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuXHQgIHZhciBpbmRleCA9IDE7XHJcblx0ICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gb2JqZWN0R2V0T3duUHJvcGVydHlTeW1ib2xzLmY7XHJcblx0ICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm9wZXJ0eUlzRW51bWVyYWJsZS5mO1xyXG5cclxuXHQgIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpbmRleCkge1xyXG5cdCAgICB2YXIgUyA9IGluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcclxuXHQgICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcclxuXHQgICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xyXG5cdCAgICB2YXIgaiA9IDA7XHJcblx0ICAgIHZhciBrZXk7XHJcblxyXG5cdCAgICB3aGlsZSAobGVuZ3RoID4gaikge1xyXG5cdCAgICAgIGtleSA9IGtleXNbaisrXTtcclxuXHQgICAgICBpZiAoIWRlc2NyaXB0b3JzIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xyXG5cdCAgICB9XHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIFQ7XHJcblx0fSA6IG5hdGl2ZUFzc2lnbjtcclxuXHJcblx0Ly8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxyXG5cclxuXHJcblx0X2V4cG9ydCh7XHJcblx0ICB0YXJnZXQ6ICdPYmplY3QnLFxyXG5cdCAgc3RhdDogdHJ1ZSxcclxuXHQgIGZvcmNlZDogT2JqZWN0LmFzc2lnbiAhPT0gb2JqZWN0QXNzaWduXHJcblx0fSwge1xyXG5cdCAgYXNzaWduOiBvYmplY3RBc3NpZ25cclxuXHR9KTtcclxuXHJcblx0Ly8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cclxuXHQvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XHJcblxyXG5cclxuXHR2YXIgc3RyaW5nUmVwZWF0ID0gJycucmVwZWF0IHx8IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xyXG5cdCAgdmFyIHN0ciA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcclxuXHQgIHZhciByZXN1bHQgPSAnJztcclxuXHQgIHZhciBuID0gdG9JbnRlZ2VyKGNvdW50KTtcclxuXHQgIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcclxuXHJcblx0ICBmb3IgKDsgbiA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XHJcblxyXG5cdCAgcmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdHZhciBjZWlsJDEgPSBNYXRoLmNlaWw7IC8vIGBTdHJpbmcucHJvdG90eXBlLnsgcGFkU3RhcnQsIHBhZEVuZCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXHJcblxyXG5cdHZhciBjcmVhdGVNZXRob2QkMSA9IGZ1bmN0aW9uIChJU19FTkQpIHtcclxuXHQgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIG1heExlbmd0aCwgZmlsbFN0cmluZykge1xyXG5cdCAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XHJcblx0ICAgIHZhciBzdHJpbmdMZW5ndGggPSBTLmxlbmd0aDtcclxuXHQgICAgdmFyIGZpbGxTdHIgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZyk7XHJcblx0ICAgIHZhciBpbnRNYXhMZW5ndGggPSB0b0xlbmd0aChtYXhMZW5ndGgpO1xyXG5cdCAgICB2YXIgZmlsbExlbiwgc3RyaW5nRmlsbGVyO1xyXG5cdCAgICBpZiAoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aCB8fCBmaWxsU3RyID09ICcnKSByZXR1cm4gUztcclxuXHQgICAgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aDtcclxuXHQgICAgc3RyaW5nRmlsbGVyID0gc3RyaW5nUmVwZWF0LmNhbGwoZmlsbFN0ciwgY2VpbCQxKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xyXG5cdCAgICBpZiAoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pIHN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcclxuXHQgICAgcmV0dXJuIElTX0VORCA/IFMgKyBzdHJpbmdGaWxsZXIgOiBzdHJpbmdGaWxsZXIgKyBTO1xyXG5cdCAgfTtcclxuXHR9O1xyXG5cclxuXHR2YXIgc3RyaW5nUGFkID0ge1xyXG5cdCAgLy8gYFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnRgIG1ldGhvZFxyXG5cdCAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnBhZHN0YXJ0XHJcblx0ICBzdGFydDogY3JlYXRlTWV0aG9kJDEoZmFsc2UpLFxyXG5cdCAgLy8gYFN0cmluZy5wcm90b3R5cGUucGFkRW5kYCBtZXRob2RcclxuXHQgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5wYWRlbmRcclxuXHQgIGVuZDogY3JlYXRlTWV0aG9kJDEodHJ1ZSlcclxuXHR9O1xyXG5cclxuXHR2YXIgZW5naW5lVXNlckFnZW50ID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xyXG5cclxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMjgwXHJcblx0IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXVuc2FmZS1yZWdleFxyXG5cclxuXHJcblx0dmFyIHN0cmluZ1BhZFdlYmtpdEJ1ZyA9IC9WZXJzaW9uXFwvMTBcXC5cXGQrKFxcLlxcZCspPyggTW9iaWxlXFwvXFx3Kyk/IFNhZmFyaVxcLy8udGVzdChlbmdpbmVVc2VyQWdlbnQpO1xyXG5cclxuXHR2YXIgJHBhZEVuZCA9IHN0cmluZ1BhZC5lbmQ7XHJcblxyXG5cdCAvLyBgU3RyaW5nLnByb3RvdHlwZS5wYWRFbmRgIG1ldGhvZFxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5wYWRlbmRcclxuXHJcblxyXG5cdF9leHBvcnQoe1xyXG5cdCAgdGFyZ2V0OiAnU3RyaW5nJyxcclxuXHQgIHByb3RvOiB0cnVlLFxyXG5cdCAgZm9yY2VkOiBzdHJpbmdQYWRXZWJraXRCdWdcclxuXHR9LCB7XHJcblx0ICBwYWRFbmQ6IGZ1bmN0aW9uIHBhZEVuZChtYXhMZW5ndGhcclxuXHQgIC8qICwgZmlsbFN0cmluZyA9ICcgJyAqL1xyXG5cdCAgKSB7XHJcblx0ICAgIHJldHVybiAkcGFkRW5kKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG5cdCAgfVxyXG5cdH0pO1xyXG5cclxuXHR2YXIgJHBhZFN0YXJ0ID0gc3RyaW5nUGFkLnN0YXJ0O1xyXG5cclxuXHQgLy8gYFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnRgIG1ldGhvZFxyXG5cdC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5wYWRzdGFydFxyXG5cclxuXHJcblx0X2V4cG9ydCh7XHJcblx0ICB0YXJnZXQ6ICdTdHJpbmcnLFxyXG5cdCAgcHJvdG86IHRydWUsXHJcblx0ICBmb3JjZWQ6IHN0cmluZ1BhZFdlYmtpdEJ1Z1xyXG5cdH0sIHtcclxuXHQgIHBhZFN0YXJ0OiBmdW5jdGlvbiBwYWRTdGFydChtYXhMZW5ndGhcclxuXHQgIC8qICwgZmlsbFN0cmluZyA9ICcgJyAqL1xyXG5cdCAgKSB7XHJcblx0ICAgIHJldHVybiAkcGFkU3RhcnQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcblx0ICB9XHJcblx0fSk7XHJcblxyXG5cdC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kXHJcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGVhdFxyXG5cclxuXHJcblx0X2V4cG9ydCh7XHJcblx0ICB0YXJnZXQ6ICdTdHJpbmcnLFxyXG5cdCAgcHJvdG86IHRydWVcclxuXHR9LCB7XHJcblx0ICByZXBlYXQ6IHN0cmluZ1JlcGVhdFxyXG5cdH0pO1xyXG5cclxuXHQvLyBgZ2xvYmFsVGhpc2Agb2JqZWN0XHJcblx0Ly8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nbG9iYWx0aGlzXHJcblxyXG5cclxuXHRfZXhwb3J0KHtcclxuXHQgIGdsb2JhbDogdHJ1ZVxyXG5cdH0sIHtcclxuXHQgIGdsb2JhbFRoaXM6IGdsb2JhbCQxXHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcblx0ICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XHJcblxyXG5cdCAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcblx0ICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XHJcblx0ICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcblx0ICAgIH07XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xyXG5cdCAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG5cdCAgICB9O1xyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiBfdHlwZW9mKG9iaik7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XHJcblx0ICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xyXG5cdCAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xyXG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xyXG5cdCAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XHJcblx0ICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcclxuXHQgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcclxuXHQgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xyXG5cdCAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcblx0ICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XHJcblx0ICByZXR1cm4gQ29uc3RydWN0b3I7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XHJcblx0ICBpZiAoa2V5IGluIG9iaikge1xyXG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcclxuXHQgICAgICB2YWx1ZTogdmFsdWUsXHJcblx0ICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuXHQgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcblx0ICAgICAgd3JpdGFibGU6IHRydWVcclxuXHQgICAgfSk7XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiBvYmo7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcclxuXHQgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcclxuXHQgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xyXG5cdCAgfVxyXG5cclxuXHQgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xyXG5cdCAgICBjb25zdHJ1Y3Rvcjoge1xyXG5cdCAgICAgIHZhbHVlOiBzdWJDbGFzcyxcclxuXHQgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuXHQgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuXHQgICAgfVxyXG5cdCAgfSk7XHJcblx0ICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XHJcblx0ICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xyXG5cdCAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xyXG5cdCAgfTtcclxuXHQgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xyXG5cdCAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XHJcblx0ICAgIG8uX19wcm90b19fID0gcDtcclxuXHQgICAgcmV0dXJuIG87XHJcblx0ICB9O1xyXG5cclxuXHQgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xyXG5cdCAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xyXG5cdCAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcclxuXHQgIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XHJcblxyXG5cdCAgdHJ5IHtcclxuXHQgICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcclxuXHQgICAgcmV0dXJuIHRydWU7XHJcblx0ICB9IGNhdGNoIChlKSB7XHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHQgIH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcclxuXHQgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xyXG5cdCAgdmFyIHRhcmdldCA9IHt9O1xyXG5cdCAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xyXG5cdCAgdmFyIGtleSwgaTtcclxuXHJcblx0ICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xyXG5cdCAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xyXG5cdCAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xyXG5cdCAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XHJcblxyXG5cdCAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xyXG5cclxuXHQgIHZhciBrZXksIGk7XHJcblxyXG5cdCAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcclxuXHQgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XHJcblxyXG5cdCAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XHJcblx0ICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcclxuXHQgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xyXG5cdCAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XHJcblx0ICAgIH1cclxuXHQgIH1cclxuXHJcblx0ICByZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XHJcblx0ICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XHJcblx0ICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcclxuXHQgIH1cclxuXHJcblx0ICByZXR1cm4gc2VsZjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcclxuXHQgIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xyXG5cdCAgICByZXR1cm4gY2FsbDtcclxuXHQgIH1cclxuXHJcblx0ICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XHJcblx0ICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcclxuXHJcblx0ICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XHJcblx0ICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcclxuXHQgICAgICAgIHJlc3VsdDtcclxuXHJcblx0ICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XHJcblx0ICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcclxuXHJcblx0ICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcclxuXHQgIH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XHJcblx0ICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xyXG5cdCAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcclxuXHQgICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIG9iamVjdDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcclxuXHQgIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xyXG5cdCAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xyXG5cdCAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XHJcblxyXG5cdCAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xyXG5cdCAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XHJcblxyXG5cdCAgICAgIGlmIChkZXNjLmdldCkge1xyXG5cdCAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XHJcblx0ICAgIH07XHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldCQxKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xyXG5cdCAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3Quc2V0KSB7XHJcblx0ICAgIHNldCQxID0gUmVmbGVjdC5zZXQ7XHJcblx0ICB9IGVsc2Uge1xyXG5cdCAgICBzZXQkMSA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcclxuXHQgICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xyXG5cclxuXHQgICAgICB2YXIgZGVzYztcclxuXHJcblx0ICAgICAgaWYgKGJhc2UpIHtcclxuXHQgICAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcclxuXHJcblx0ICAgICAgICBpZiAoZGVzYy5zZXQpIHtcclxuXHQgICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xyXG5cdCAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHQgICAgICAgIH0gZWxzZSBpZiAoIWRlc2Mud3JpdGFibGUpIHtcclxuXHQgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5KTtcclxuXHJcblx0ICAgICAgaWYgKGRlc2MpIHtcclxuXHQgICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xyXG5cdCAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgZGVzYy52YWx1ZSA9IHZhbHVlO1xyXG5cdCAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIF9kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiBzZXQkMSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XHJcblx0ICB2YXIgcyA9IHNldCQxKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpO1xyXG5cclxuXHQgIGlmICghcyAmJiBpc1N0cmljdCkge1xyXG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcclxuXHQgIH1cclxuXHJcblx0ICByZXR1cm4gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcclxuXHQgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XHJcblx0ICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xyXG5cdCAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XHJcblx0ICB2YXIgX2FyciA9IFtdO1xyXG5cdCAgdmFyIF9uID0gdHJ1ZTtcclxuXHQgIHZhciBfZCA9IGZhbHNlO1xyXG5cdCAgdmFyIF9lID0gdW5kZWZpbmVkO1xyXG5cclxuXHQgIHRyeSB7XHJcblx0ICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcclxuXHQgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xyXG5cclxuXHQgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XHJcblx0ICAgIH1cclxuXHQgIH0gY2F0Y2ggKGVycikge1xyXG5cdCAgICBfZCA9IHRydWU7XHJcblx0ICAgIF9lID0gZXJyO1xyXG5cdCAgfSBmaW5hbGx5IHtcclxuXHQgICAgdHJ5IHtcclxuXHQgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XHJcblx0ICAgIH0gZmluYWxseSB7XHJcblx0ICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cclxuXHQgIHJldHVybiBfYXJyO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xyXG5cdCAgaWYgKCFvKSByZXR1cm47XHJcblx0ICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xyXG5cdCAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xyXG5cdCAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcclxuXHQgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xyXG5cdCAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcclxuXHQgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xyXG5cclxuXHQgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcclxuXHJcblx0ICByZXR1cm4gYXJyMjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XHJcblx0ICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xyXG5cdH1cclxuXHJcblx0LyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cclxuXHRmdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcclxuXHQgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmc7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAgRGlyZWN0aW9uXHJcblx0ICBAcHJvcCB7c3RyaW5nfSBOT05FXHJcblx0ICBAcHJvcCB7c3RyaW5nfSBMRUZUXHJcblx0ICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9MRUZUXHJcblx0ICBAcHJvcCB7c3RyaW5nfSBSSUdIVFxyXG5cdCAgQHByb3Age3N0cmluZ30gRk9SQ0VfUklHSFRcclxuXHQqL1xyXG5cclxuXHR2YXIgRElSRUNUSU9OID0ge1xyXG5cdCAgTk9ORTogJ05PTkUnLFxyXG5cdCAgTEVGVDogJ0xFRlQnLFxyXG5cdCAgRk9SQ0VfTEVGVDogJ0ZPUkNFX0xFRlQnLFxyXG5cdCAgUklHSFQ6ICdSSUdIVCcsXHJcblx0ICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJ1xyXG5cdH07XHJcblx0LyoqICovXHJcblxyXG5cdGZ1bmN0aW9uIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xyXG5cdCAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuXHQgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcclxuXHQgICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX0xFRlQ7XHJcblxyXG5cdCAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuXHQgICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX1JJR0hUO1xyXG5cclxuXHQgICAgZGVmYXVsdDpcclxuXHQgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG5cdCAgfVxyXG5cdH1cclxuXHQvKiogRXNjYXBlcyByZWd1bGFyIGV4cHJlc3Npb24gY29udHJvbCBjaGFycyAqL1xyXG5cclxuXHRmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XHJcblx0ICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcclxuXHR9IC8vIGNsb25lZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwgd2l0aCBzbWFsbCBjaGFuZ2VzXHJcblxyXG5cdGZ1bmN0aW9uIG9iamVjdEluY2x1ZGVzKGIsIGEpIHtcclxuXHQgIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcclxuXHQgIHZhciBhcnJBID0gQXJyYXkuaXNBcnJheShhKSxcclxuXHQgICAgICBhcnJCID0gQXJyYXkuaXNBcnJheShiKSxcclxuXHQgICAgICBpO1xyXG5cclxuXHQgIGlmIChhcnJBICYmIGFyckIpIHtcclxuXHQgICAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdCAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIHRydWU7XHJcblx0ICB9XHJcblxyXG5cdCAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHQgIGlmIChhICYmIGIgJiYgX3R5cGVvZihhKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PT0gJ29iamVjdCcpIHtcclxuXHQgICAgdmFyIGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGUsXHJcblx0ICAgICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xyXG5cdCAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcclxuXHQgICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XHJcblx0ICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cCxcclxuXHQgICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xyXG5cdCAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcclxuXHQgICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpOyAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHQgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYltrZXlzW2ldXSwgYVtrZXlzW2ldXSkpIHJldHVybiBmYWxzZTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIHRydWU7XHJcblx0ICB9IGVsc2UgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdCAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHQvKiogU2VsZWN0aW9uIHJhbmdlICovXHJcblxyXG5cdC8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXHJcblxyXG5cdHZhciBBY3Rpb25EZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcclxuXHQgIC8qKiBDdXJyZW50IGlucHV0IHZhbHVlICovXHJcblxyXG5cdCAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXHJcblxyXG5cdCAgLyoqIE9sZCBpbnB1dCB2YWx1ZSAqL1xyXG5cclxuXHQgIC8qKiBPbGQgc2VsZWN0aW9uICovXHJcblx0ICBmdW5jdGlvbiBBY3Rpb25EZXRhaWxzKHZhbHVlLCBjdXJzb3JQb3MsIG9sZFZhbHVlLCBvbGRTZWxlY3Rpb24pIHtcclxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkRldGFpbHMpO1xyXG5cclxuXHQgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdCAgICB0aGlzLmN1cnNvclBvcyA9IGN1cnNvclBvcztcclxuXHQgICAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xyXG5cdCAgICB0aGlzLm9sZFNlbGVjdGlvbiA9IG9sZFNlbGVjdGlvbjsgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcclxuXHJcblx0ICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XHJcblx0ICAgICAgLS10aGlzLm9sZFNlbGVjdGlvbi5zdGFydDtcclxuXHQgICAgfVxyXG5cdCAgfVxyXG5cdCAgLyoqXHJcblx0ICAgIFN0YXJ0IGNoYW5naW5nIHBvc2l0aW9uXHJcblx0ICAgIEByZWFkb25seVxyXG5cdCAgKi9cclxuXHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKEFjdGlvbkRldGFpbHMsIFt7XHJcblx0ICAgIGtleTogXCJzdGFydENoYW5nZVBvc1wiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJzb3JQb3MsIHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0KTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBJbnNlcnRlZCBzeW1ib2xzIGNvdW50XHJcblx0ICAgICAgQHJlYWRvbmx5XHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiaW5zZXJ0ZWRDb3VudFwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5jdXJzb3JQb3MgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEluc2VydGVkIHN5bWJvbHNcclxuXHQgICAgICBAcmVhZG9ubHlcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJpbnNlcnRlZFwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5pbnNlcnRlZENvdW50KTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBSZW1vdmVkIHN5bWJvbHMgY291bnRcclxuXHQgICAgICBAcmVhZG9ubHlcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJyZW1vdmVkQ291bnRcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgLy8gTWF0aC5tYXggZm9yIG9wcG9zaXRlIG9wZXJhdGlvblxyXG5cdCAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLm9sZFNlbGVjdGlvbi5lbmQgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zIHx8IC8vIGZvciBEZWxldGVcclxuXHQgICAgICB0aGlzLm9sZFZhbHVlLmxlbmd0aCAtIHRoaXMudmFsdWUubGVuZ3RoLCAwKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBSZW1vdmVkIHN5bWJvbHNcclxuXHQgICAgICBAcmVhZG9ubHlcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJyZW1vdmVkXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLm9sZFZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLnJlbW92ZWRDb3VudCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgVW5jaGFuZ2VkIGhlYWQgc3ltYm9sc1xyXG5cdCAgICAgIEByZWFkb25seVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImhlYWRcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIFVuY2hhbmdlZCB0YWlsIHN5bWJvbHNcclxuXHQgICAgICBAcmVhZG9ubHlcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ0YWlsXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZyh0aGlzLnN0YXJ0Q2hhbmdlUG9zICsgdGhpcy5pbnNlcnRlZENvdW50KTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBSZW1vdmUgZGlyZWN0aW9uXHJcblx0ICAgICAgQHJlYWRvbmx5XHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwicmVtb3ZlRGlyZWN0aW9uXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIGlmICghdGhpcy5yZW1vdmVkQ291bnQgfHwgdGhpcy5pbnNlcnRlZENvdW50KSByZXR1cm4gRElSRUNUSU9OLk5PTkU7IC8vIGFsaWduIHJpZ2h0IGlmIGRlbGV0ZSBhdCByaWdodCBvciBpZiByYW5nZSByZW1vdmVkIChldmVudCB3aXRoIGJhY2tzcGFjZSlcclxuXHJcblx0ICAgICAgcmV0dXJuIHRoaXMub2xkU2VsZWN0aW9uLmVuZCA9PT0gdGhpcy5jdXJzb3JQb3MgfHwgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQgPT09IHRoaXMuY3Vyc29yUG9zID8gRElSRUNUSU9OLlJJR0hUIDogRElSRUNUSU9OLkxFRlQ7XHJcblx0ICAgIH1cclxuXHQgIH1dKTtcclxuXHJcblx0ICByZXR1cm4gQWN0aW9uRGV0YWlscztcclxuXHR9KCk7XHJcblxyXG5cdC8qKlxyXG5cdCAgUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBtb2RlbCB2YWx1ZVxyXG5cdCAgQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzXVxyXG5cdCAgQHBhcmFtIHtzdHJpbmd9IFtkZXRhaWxzLmluc2VydGVkXSAtIEluc2VydGVkIHN5bWJvbHNcclxuXHQgIEBwYXJhbSB7Ym9vbGVhbn0gW2RldGFpbHMuc2tpcF0gLSBDYW4gc2tpcCBjaGFyc1xyXG5cdCAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnJlbW92ZUNvdW50XSAtIFJlbW92ZWQgc3ltYm9scyBjb3VudFxyXG5cdCAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnRhaWxTaGlmdF0gLSBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbFxyXG5cdCovXHJcblx0dmFyIENoYW5nZURldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xyXG5cdCAgLyoqIEluc2VydGVkIHN5bWJvbHMgKi9cclxuXHJcblx0ICAvKiogQ2FuIHNraXAgY2hhcnMgKi9cclxuXHJcblx0ICAvKiogQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWwgKi9cclxuXHJcblx0ICAvKiogUmF3IGluc2VydGVkIGlzIHVzZWQgYnkgZHluYW1pYyBtYXNrICovXHJcblx0ICBmdW5jdGlvbiBDaGFuZ2VEZXRhaWxzKGRldGFpbHMpIHtcclxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5nZURldGFpbHMpO1xyXG5cclxuXHQgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XHJcblx0ICAgICAgaW5zZXJ0ZWQ6ICcnLFxyXG5cdCAgICAgIHJhd0luc2VydGVkOiAnJyxcclxuXHQgICAgICBza2lwOiBmYWxzZSxcclxuXHQgICAgICB0YWlsU2hpZnQ6IDBcclxuXHQgICAgfSwgZGV0YWlscyk7XHJcblx0ICB9XHJcblx0ICAvKipcclxuXHQgICAgQWdncmVnYXRlIGNoYW5nZXNcclxuXHQgICAgQHJldHVybnMge0NoYW5nZURldGFpbHN9IGB0aGlzYFxyXG5cdCAgKi9cclxuXHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKENoYW5nZURldGFpbHMsIFt7XHJcblx0ICAgIGtleTogXCJhZ2dyZWdhdGVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFnZ3JlZ2F0ZShkZXRhaWxzKSB7XHJcblx0ICAgICAgdGhpcy5yYXdJbnNlcnRlZCArPSBkZXRhaWxzLnJhd0luc2VydGVkO1xyXG5cdCAgICAgIHRoaXMuc2tpcCA9IHRoaXMuc2tpcCB8fCBkZXRhaWxzLnNraXA7XHJcblx0ICAgICAgdGhpcy5pbnNlcnRlZCArPSBkZXRhaWxzLmluc2VydGVkO1xyXG5cdCAgICAgIHRoaXMudGFpbFNoaWZ0ICs9IGRldGFpbHMudGFpbFNoaWZ0O1xyXG5cdCAgICAgIHJldHVybiB0aGlzO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBUb3RhbCBvZmZzZXQgY29uc2lkZXJpbmcgYWxsIGNoYW5nZXMgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJvZmZzZXRcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMudGFpbFNoaWZ0ICsgdGhpcy5pbnNlcnRlZC5sZW5ndGg7XHJcblx0ICAgIH1cclxuXHQgIH1dKTtcclxuXHJcblx0ICByZXR1cm4gQ2hhbmdlRGV0YWlscztcclxuXHR9KCk7XHJcblxyXG5cdC8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNvbnRpbnVvdXMgZXh0cmFjdGVkIHRhaWwgKi9cclxuXHR2YXIgQ29udGludW91c1RhaWxEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcclxuXHQgIC8qKiBUYWlsIHZhbHVlIGFzIHN0cmluZyAqL1xyXG5cclxuXHQgIC8qKiBUYWlsIHN0YXJ0IHBvc2l0aW9uICovXHJcblxyXG5cdCAgLyoqIFN0YXJ0IHBvc2l0aW9uICovXHJcblx0ICBmdW5jdGlvbiBDb250aW51b3VzVGFpbERldGFpbHMoKSB7XHJcblx0ICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XHJcblx0ICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xyXG5cdCAgICB2YXIgc3RvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xyXG5cclxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRpbnVvdXNUYWlsRGV0YWlscyk7XHJcblxyXG5cdCAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0ICAgIHRoaXMuZnJvbSA9IGZyb207XHJcblx0ICAgIHRoaXMuc3RvcCA9IHN0b3A7XHJcblx0ICB9XHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKENvbnRpbnVvdXNUYWlsRGV0YWlscywgW3tcclxuXHQgICAga2V5OiBcInRvU3RyaW5nXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZXh0ZW5kXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQodGFpbCkge1xyXG5cdCAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJhcHBlbmRUb1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XHJcblx0ICAgICAgcmV0dXJuIG1hc2tlZC5hcHBlbmQodGhpcy50b1N0cmluZygpLCB7XHJcblx0ICAgICAgICB0YWlsOiB0cnVlXHJcblx0ICAgICAgfSkuYWdncmVnYXRlKG1hc2tlZC5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInN0YXRlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB7XHJcblx0ICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuXHQgICAgICAgIGZyb206IHRoaXMuZnJvbSxcclxuXHQgICAgICAgIHN0b3A6IHRoaXMuc3RvcFxyXG5cdCAgICAgIH07XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XHJcblx0ICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInNoaWZ0QmVmb3JlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaGlmdEJlZm9yZShwb3MpIHtcclxuXHQgICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcclxuXHQgICAgICB2YXIgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVswXTtcclxuXHQgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgxKTtcclxuXHQgICAgICByZXR1cm4gc2hpZnRDaGFyO1xyXG5cdCAgICB9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIENvbnRpbnVvdXNUYWlsRGV0YWlscztcclxuXHR9KCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGxpZXMgbWFzayBvbiBlbGVtZW50LlxyXG5cdCAqIEBjb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fE1hc2tFbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYXBwbHkgbWFza1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gQ3VzdG9tIG1hc2sgb3B0aW9uc1xyXG5cdCAqIEByZXR1cm4ge0lucHV0TWFza31cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBJTWFzayhlbCkge1xyXG5cdCAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xyXG5cdCAgLy8gY3VycmVudGx5IGF2YWlsYWJsZSBvbmx5IGZvciBpbnB1dC1saWtlIGVsZW1lbnRzXHJcblx0ICByZXR1cm4gbmV3IElNYXNrLklucHV0TWFzayhlbCwgb3B0cyk7XHJcblx0fVxyXG5cclxuXHQvKiogU3VwcG9ydGVkIG1hc2sgdHlwZSAqL1xyXG5cclxuXHQvKiogUHJvdmlkZXMgY29tbW9uIG1hc2tpbmcgc3R1ZmYgKi9cclxuXHR2YXIgTWFza2VkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcclxuXHQgIC8vICRTaGFwZTxNYXNrZWRPcHRpb25zPjsgVE9ETyBhZnRlciBmaXggaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3NzNcclxuXHJcblx0ICAvKiogQHR5cGUge01hc2t9ICovXHJcblxyXG5cdCAgLyoqICovXHJcblx0ICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXHJcblxyXG5cdCAgLyoqIFRyYW5zZm9ybXMgdmFsdWUgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZyAqL1xyXG5cclxuXHQgIC8qKiBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZSAqL1xyXG5cclxuXHQgIC8qKiBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cclxuXHJcblx0ICAvKiogRm9ybWF0IHR5cGVkIHZhbHVlIHRvIHN0cmluZyAqL1xyXG5cclxuXHQgIC8qKiBQYXJzZSBzdHJnaW4gdG8gZ2V0IHR5cGVkIHZhbHVlICovXHJcblxyXG5cdCAgLyoqIEVuYWJsZSBjaGFyYWN0ZXJzIG92ZXJ3cml0aW5nICovXHJcblxyXG5cdCAgLyoqICovXHJcblx0ICBmdW5jdGlvbiBNYXNrZWQob3B0cykge1xyXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkKTtcclxuXHJcblx0ICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcblxyXG5cdCAgICB0aGlzLl91cGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkLkRFRkFVTFRTLCBvcHRzKSk7XHJcblxyXG5cdCAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cdCAgfVxyXG5cdCAgLyoqIFNldHMgYW5kIGFwcGxpZXMgbmV3IG9wdGlvbnMgKi9cclxuXHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKE1hc2tlZCwgW3tcclxuXHQgICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xyXG5cdCAgICAgIGlmICghT2JqZWN0LmtleXMob3B0cykubGVuZ3RoKSByZXR1cm47XHJcblx0ICAgICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBTZXRzIG5ldyBvcHRpb25zXHJcblx0ICAgICAgQHByb3RlY3RlZFxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl91cGRhdGVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xyXG5cdCAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIE1hc2sgc3RhdGUgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJzdGF0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgX3ZhbHVlOiB0aGlzLnZhbHVlXHJcblx0ICAgICAgfTtcclxuXHQgICAgfSxcclxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcclxuXHQgICAgICB0aGlzLl92YWx1ZSA9IHN0YXRlLl92YWx1ZTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogUmVzZXRzIHZhbHVlICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwicmVzZXRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xyXG5cdCAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidmFsdWVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdCAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIFJlc29sdmUgbmV3IHZhbHVlICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwicmVzb2x2ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xyXG5cdCAgICAgIHRoaXMucmVzZXQoKTtcclxuXHQgICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xyXG5cdCAgICAgICAgaW5wdXQ6IHRydWVcclxuXHQgICAgICB9LCAnJyk7XHJcblx0ICAgICAgdGhpcy5kb0NvbW1pdCgpO1xyXG5cdCAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0ICAgICAgdGhpcy5yZXNldCgpO1xyXG5cdCAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7fSwgJycpO1xyXG5cdCAgICAgIHRoaXMuZG9Db21taXQoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmRvUGFyc2UodGhpcy52YWx1ZSk7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0ICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZG9Gb3JtYXQodmFsdWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBWYWx1ZSB0aGF0IGluY2x1ZGVzIHJhdyB1c2VyIGlucHV0ICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwicmF3SW5wdXRWYWx1ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5leHRyYWN0SW5wdXQoMCwgdGhpcy52YWx1ZS5sZW5ndGgsIHtcclxuXHQgICAgICAgIHJhdzogdHJ1ZVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdCAgICAgIHRoaXMucmVzZXQoKTtcclxuXHQgICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xyXG5cdCAgICAgICAgcmF3OiB0cnVlXHJcblx0ICAgICAgfSwgJycpO1xyXG5cdCAgICAgIHRoaXMuZG9Db21taXQoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBGaW5kcyBuZWFyZXN0IGlucHV0IHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XHJcblx0ICAgICAgcmV0dXJuIGN1cnNvclBvcztcclxuXHQgICAgfVxyXG5cdCAgICAvKiogRXh0cmFjdHMgdmFsdWUgaW4gcmFuZ2UgY29uc2lkZXJpbmcgZmxhZ3MgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcclxuXHQgICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcclxuXHQgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogRXh0cmFjdHMgdGFpbCBpbiByYW5nZSAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcclxuXHQgICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcclxuXHQgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIEFwcGVuZHMgdGFpbCAqL1xyXG5cdCAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XHJcblx0ICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xyXG5cdCAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcclxuXHQgICAgICBpZiAoIWNoKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHQgICAgICB0aGlzLl92YWx1ZSArPSBjaDtcclxuXHQgICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xyXG5cdCAgICAgICAgaW5zZXJ0ZWQ6IGNoLFxyXG5cdCAgICAgICAgcmF3SW5zZXJ0ZWQ6IGNoXHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIEFwcGVuZHMgY2hhciAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihjaCkge1xyXG5cdCAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XHJcblx0ICAgICAgdmFyIGNoZWNrVGFpbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xyXG5cdCAgICAgIHZhciBjb25zaXN0ZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xyXG5cclxuXHQgICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXJSYXcodGhpcy5kb1ByZXBhcmUoY2gsIGZsYWdzKSwgZmxhZ3MpO1xyXG5cclxuXHQgICAgICBpZiAoZGV0YWlscy5pbnNlcnRlZCkge1xyXG5cdCAgICAgICAgdmFyIGNvbnNpc3RlbnRUYWlsO1xyXG5cdCAgICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XHJcblxyXG5cdCAgICAgICAgaWYgKGFwcGVuZGVkICYmIGNoZWNrVGFpbCAhPSBudWxsKSB7XHJcblx0ICAgICAgICAgIC8vIHZhbGlkYXRpb24gb2ssIGNoZWNrIHRhaWxcclxuXHQgICAgICAgICAgdmFyIGJlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdCAgICAgICAgICBpZiAodGhpcy5vdmVyd3JpdGUpIHtcclxuXHQgICAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcclxuXHQgICAgICAgICAgICBjaGVja1RhaWwuc2hpZnRCZWZvcmUodGhpcy52YWx1ZS5sZW5ndGgpO1xyXG5cdCAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKTtcclxuXHQgICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZCA9PT0gY2hlY2tUYWlsLnRvU3RyaW5nKCk7IC8vIGlmIG9rLCByb2xsYmFjayBzdGF0ZSBhZnRlciB0YWlsXHJcblxyXG5cdCAgICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XHJcblx0ICAgICAgICB9IC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcclxuXHJcblxyXG5cdCAgICAgICAgaWYgKCFhcHBlbmRlZCkge1xyXG5cdCAgICAgICAgICBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHQgICAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnNpc3RlbnRTdGF0ZTtcclxuXHQgICAgICAgICAgaWYgKGNoZWNrVGFpbCAmJiBjb25zaXN0ZW50VGFpbCkgY2hlY2tUYWlsLnN0YXRlID0gY29uc2lzdGVudFRhaWw7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gZGV0YWlscztcclxuXHQgICAgfVxyXG5cdCAgICAvKiogQXBwZW5kcyBvcHRpb25hbCBwbGFjZWhvbGRlciBhdCBlbmQgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcclxuXHQgICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogQXBwZW5kcyBzeW1ib2xzIGNvbnNpZGVyaW5nIGZsYWdzICovXHJcblx0ICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJhcHBlbmRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XHJcblx0ICAgICAgaWYgKCFpc1N0cmluZyhzdHIpKSB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIHNob3VsZCBiZSBzdHJpbmcnKTtcclxuXHQgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblx0ICAgICAgdmFyIGNoZWNrVGFpbCA9IGlzU3RyaW5nKHRhaWwpID8gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpIDogdGFpbDtcclxuXHQgICAgICBpZiAoZmxhZ3MgJiYgZmxhZ3MudGFpbCkgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdCAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XHJcblx0ICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyKHN0cltjaV0sIGZsYWdzLCBjaGVja1RhaWwpKTtcclxuXHQgICAgICB9IC8vIGFwcGVuZCB0YWlsIGJ1dCBhZ2dyZWdhdGUgb25seSB0YWlsU2hpZnRcclxuXHJcblxyXG5cdCAgICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xyXG5cdCAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCkudGFpbFNoaWZ0OyAvLyBUT0RPIGl0J3MgYSBnb29kIGlkZWEgdG8gY2xlYXIgc3RhdGUgYWZ0ZXIgYXBwZW5kaW5nIGVuZHNcclxuXHQgICAgICAgIC8vIGJ1dCBpdCBjYXVzZXMgYnVncyB3aGVuIG9uZSBhcHBlbmQgY2FsbHMgYW5vdGhlciAod2hlbiBkeW5hbWljIGRpc3BhdGNoIHNldCByYXdJbnB1dFZhbHVlKVxyXG5cdCAgICAgICAgLy8gdGhpcy5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiBkZXRhaWxzO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInJlbW92ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG5cdCAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xyXG5cdCAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XHJcblx0ICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XHJcblx0ICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIENhbGxzIGZ1bmN0aW9uIGFuZCByZWFwcGxpZXMgY3VycmVudCB2YWx1ZSAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIndpdGhWYWx1ZVJlZnJlc2hcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhWYWx1ZVJlZnJlc2goZm4pIHtcclxuXHQgICAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4oKTtcclxuXHQgICAgICB0aGlzLl9yZWZyZXNoaW5nID0gdHJ1ZTtcclxuXHQgICAgICB2YXIgcmF3SW5wdXQgPSB0aGlzLnJhd0lucHV0VmFsdWU7XHJcblx0ICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHQgICAgICB2YXIgcmV0ID0gZm4oKTtcclxuXHQgICAgICB0aGlzLnJhd0lucHV0VmFsdWUgPSByYXdJbnB1dDsgLy8gYXBwZW5kIGxvc3QgdHJhaWxpbmcgY2hhcnMgYXQgZW5kXHJcblxyXG5cdCAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT09IHZhbHVlICYmIHZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPT09IDApIHtcclxuXHQgICAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLnNsaWNlKHRoaXMudmFsdWUubGVuZ3RoKSwge30sICcnKTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIGRlbGV0ZSB0aGlzLl9yZWZyZXNoaW5nO1xyXG5cdCAgICAgIHJldHVybiByZXQ7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwicnVuSXNvbGF0ZWRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJ1bklzb2xhdGVkKGZuKSB7XHJcblx0ICAgICAgaWYgKHRoaXMuX2lzb2xhdGVkIHx8ICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmbih0aGlzKTtcclxuXHQgICAgICB0aGlzLl9pc29sYXRlZCA9IHRydWU7XHJcblx0ICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuXHQgICAgICB2YXIgcmV0ID0gZm4odGhpcyk7XHJcblx0ICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cdCAgICAgIGRlbGV0ZSB0aGlzLl9pc29sYXRlZDtcclxuXHQgICAgICByZXR1cm4gcmV0O1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIFByZXBhcmVzIHN0cmluZyBiZWZvcmUgbWFzayBwcm9jZXNzaW5nXHJcblx0ICAgICAgQHByb3RlY3RlZFxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvUHJlcGFyZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9QcmVwYXJlKHN0cikge1xyXG5cdCAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XHJcblx0ICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZSA/IHRoaXMucHJlcGFyZShzdHIsIHRoaXMsIGZsYWdzKSA6IHN0cjtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZVxyXG5cdCAgICAgIEBwcm90ZWN0ZWRcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XHJcblx0ICAgICAgcmV0dXJuICghdGhpcy52YWxpZGF0ZSB8fCB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUsIHRoaXMsIGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKGZsYWdzKSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcblx0ICAgICAgQHByb3RlY3RlZFxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvQ29tbWl0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcclxuXHQgICAgICBpZiAodGhpcy5jb21taXQpIHRoaXMuY29tbWl0KHRoaXMudmFsdWUsIHRoaXMpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvRm9ybWF0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb0Zvcm1hdCh2YWx1ZSkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0KHZhbHVlLCB0aGlzKSA6IHZhbHVlO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvUGFyc2VcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvUGFyc2Uoc3RyKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMucGFyc2UgPyB0aGlzLnBhcnNlKHN0ciwgdGhpcykgOiBzdHI7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwic3BsaWNlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBpbnNlcnRlZCwgcmVtb3ZlRGlyZWN0aW9uKSB7XHJcblx0ICAgICAgdmFyIHRhaWxQb3MgPSBzdGFydCArIGRlbGV0ZUNvdW50O1xyXG5cdCAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcclxuXHQgICAgICB2YXIgc3RhcnRDaGFuZ2VQb3MgPSB0aGlzLm5lYXJlc3RJbnB1dFBvcyhzdGFydCwgcmVtb3ZlRGlyZWN0aW9uKTtcclxuXHQgICAgICB2YXIgY2hhbmdlRGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKHtcclxuXHQgICAgICAgIHRhaWxTaGlmdDogc3RhcnRDaGFuZ2VQb3MgLSBzdGFydCAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXHJcblxyXG5cdCAgICAgIH0pLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChpbnNlcnRlZCwge1xyXG5cdCAgICAgICAgaW5wdXQ6IHRydWVcclxuXHQgICAgICB9LCB0YWlsKSk7XHJcblx0ICAgICAgcmV0dXJuIGNoYW5nZURldGFpbHM7XHJcblx0ICAgIH1cclxuXHQgIH1dKTtcclxuXHJcblx0ICByZXR1cm4gTWFza2VkO1xyXG5cdH0oKTtcclxuXHRNYXNrZWQuREVGQVVMVFMgPSB7XHJcblx0ICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdCh2KSB7XHJcblx0ICAgIHJldHVybiB2O1xyXG5cdCAgfSxcclxuXHQgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh2KSB7XHJcblx0ICAgIHJldHVybiB2O1xyXG5cdCAgfVxyXG5cdH07XHJcblx0SU1hc2suTWFza2VkID0gTWFza2VkO1xyXG5cclxuXHQvKiogR2V0IE1hc2tlZCBjbGFzcyBieSBtYXNrIHR5cGUgKi9cclxuXHJcblx0ZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzaykge1xyXG5cdCAgaWYgKG1hc2sgPT0gbnVsbCkge1xyXG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ21hc2sgcHJvcGVydHkgc2hvdWxkIGJlIGRlZmluZWQnKTtcclxuXHQgIH0gLy8gJEZsb3dGaXhNZVxyXG5cclxuXHJcblx0ICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIElNYXNrLk1hc2tlZFJlZ0V4cDsgLy8gJEZsb3dGaXhNZVxyXG5cclxuXHQgIGlmIChpc1N0cmluZyhtYXNrKSkgcmV0dXJuIElNYXNrLk1hc2tlZFBhdHRlcm47IC8vICRGbG93Rml4TWVcclxuXHJcblx0ICBpZiAobWFzayBpbnN0YW5jZW9mIERhdGUgfHwgbWFzayA9PT0gRGF0ZSkgcmV0dXJuIElNYXNrLk1hc2tlZERhdGU7IC8vICRGbG93Rml4TWVcclxuXHJcblx0ICBpZiAobWFzayBpbnN0YW5jZW9mIE51bWJlciB8fCB0eXBlb2YgbWFzayA9PT0gJ251bWJlcicgfHwgbWFzayA9PT0gTnVtYmVyKSByZXR1cm4gSU1hc2suTWFza2VkTnVtYmVyOyAvLyAkRmxvd0ZpeE1lXHJcblxyXG5cdCAgaWYgKEFycmF5LmlzQXJyYXkobWFzaykgfHwgbWFzayA9PT0gQXJyYXkpIHJldHVybiBJTWFzay5NYXNrZWREeW5hbWljOyAvLyAkRmxvd0ZpeE1lXHJcblxyXG5cdCAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrLnByb3RvdHlwZSBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7IC8vICRGbG93Rml4TWVcclxuXHJcblx0ICBpZiAobWFzayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSByZXR1cm4gSU1hc2suTWFza2VkRnVuY3Rpb247IC8vICRGbG93Rml4TWVcclxuXHJcblx0ICBpZiAobWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2suY29uc3RydWN0b3I7XHJcblx0ICBjb25zb2xlLndhcm4oJ01hc2sgbm90IGZvdW5kIGZvciBtYXNrJywgbWFzayk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG5cdCAgLy8gJEZsb3dGaXhNZVxyXG5cclxuXHQgIHJldHVybiBJTWFzay5NYXNrZWQ7XHJcblx0fVxyXG5cdC8qKiBDcmVhdGVzIG5ldyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gbWFzayB0eXBlICovXHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU1hc2sob3B0cykge1xyXG5cdCAgLy8gJEZsb3dGaXhNZVxyXG5cdCAgaWYgKElNYXNrLk1hc2tlZCAmJiBvcHRzIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gb3B0cztcclxuXHQgIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKTtcclxuXHQgIHZhciBtYXNrID0gb3B0cy5tYXNrOyAvLyAkRmxvd0ZpeE1lXHJcblxyXG5cdCAgaWYgKElNYXNrLk1hc2tlZCAmJiBtYXNrIGluc3RhbmNlb2YgSU1hc2suTWFza2VkKSByZXR1cm4gbWFzaztcclxuXHQgIHZhciBNYXNrZWRDbGFzcyA9IG1hc2tlZENsYXNzKG1hc2spO1xyXG5cdCAgaWYgKCFNYXNrZWRDbGFzcykgdGhyb3cgbmV3IEVycm9yKCdNYXNrZWQgY2xhc3MgaXMgbm90IGZvdW5kIGZvciBwcm92aWRlZCBtYXNrLCBhcHByb3ByaWF0ZSBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0IG1hbnVhbGx5IGJlZm9yZSBjcmVhdGluZyBtYXNrLicpO1xyXG5cdCAgcmV0dXJuIG5ldyBNYXNrZWRDbGFzcyhvcHRzKTtcclxuXHR9XHJcblx0SU1hc2suY3JlYXRlTWFzayA9IGNyZWF0ZU1hc2s7XHJcblxyXG5cdHZhciBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TID0ge1xyXG5cdCAgJzAnOiAvXFxkLyxcclxuXHQgICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcclxuXHQgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyMDc1MDcwXHJcblx0ICAnKic6IC8uL1xyXG5cdH07XHJcblx0LyoqICovXHJcblxyXG5cdHZhciBQYXR0ZXJuSW5wdXREZWZpbml0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cdCAgZnVuY3Rpb24gUGF0dGVybklucHV0RGVmaW5pdGlvbihvcHRzKSB7XHJcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKTtcclxuXHJcblx0ICAgIHZhciBtYXNrID0gb3B0cy5tYXNrLFxyXG5cdCAgICAgICAgYmxvY2tPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIFtcIm1hc2tcIl0pO1xyXG5cclxuXHQgICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKHtcclxuXHQgICAgICBtYXNrOiBtYXNrXHJcblx0ICAgIH0pO1xyXG5cdCAgICBPYmplY3QuYXNzaWduKHRoaXMsIGJsb2NrT3B0cyk7XHJcblx0ICB9XHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5JbnB1dERlZmluaXRpb24sIFt7XHJcblx0ICAgIGtleTogXCJyZXNldFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XHJcblx0ICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcclxuXHQgICAgICB0aGlzLm1hc2tlZC5yZXNldCgpO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJyZW1vdmVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuXHQgICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcclxuXHQgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xyXG5cclxuXHQgICAgICBpZiAoZnJvbVBvcyA9PT0gMCAmJiB0b1BvcyA+PSAxKSB7XHJcblx0ICAgICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xyXG5cdCAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidmFsdWVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlIHx8ICh0aGlzLl9pc0ZpbGxlZCAmJiAhdGhpcy5pc09wdGlvbmFsID8gdGhpcy5wbGFjZWhvbGRlckNoYXIgOiAnJyk7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImlzQ29tcGxldGVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tYXNrZWQudmFsdWUpIHx8IHRoaXMuaXNPcHRpb25hbDtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKHN0cikge1xyXG5cdCAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XHJcblx0ICAgICAgaWYgKHRoaXMuX2lzRmlsbGVkKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHQgICAgICB2YXIgc3RhdGUgPSB0aGlzLm1hc2tlZC5zdGF0ZTsgLy8gc2ltdWxhdGUgaW5wdXRcclxuXHJcblx0ICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLm1hc2tlZC5fYXBwZW5kQ2hhcihzdHIsIGZsYWdzKTtcclxuXHJcblx0ICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQgJiYgdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSA9PT0gZmFsc2UpIHtcclxuXHQgICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSBkZXRhaWxzLnJhd0luc2VydGVkID0gJyc7XHJcblx0ICAgICAgICB0aGlzLm1hc2tlZC5zdGF0ZSA9IHN0YXRlO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcclxuXHQgICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIGRldGFpbHMuc2tpcCA9ICFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWw7XHJcblx0ICAgICAgdGhpcy5faXNGaWxsZWQgPSBCb29sZWFuKGRldGFpbHMuaW5zZXJ0ZWQpO1xyXG5cdCAgICAgIHJldHVybiBkZXRhaWxzO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJhcHBlbmRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZCgpIHtcclxuXHQgICAgICB2YXIgX3RoaXMkbWFza2VkO1xyXG5cclxuXHQgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKS5hcHBlbmQuYXBwbHkoX3RoaXMkbWFza2VkLCBhcmd1bWVudHMpO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcclxuXHQgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblx0ICAgICAgaWYgKHRoaXMuX2lzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XHJcblx0ICAgICAgdGhpcy5faXNGaWxsZWQgPSB0cnVlO1xyXG5cdCAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcclxuXHQgICAgICByZXR1cm4gZGV0YWlscztcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xyXG5cdCAgICAgIHZhciBfdGhpcyRtYXNrZWQyO1xyXG5cclxuXHQgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDIgPSB0aGlzLm1hc2tlZCkuZXh0cmFjdFRhaWwuYXBwbHkoX3RoaXMkbWFza2VkMiwgYXJndW1lbnRzKTtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCgpIHtcclxuXHQgICAgICB2YXIgX3RoaXMkbWFza2VkMztcclxuXHJcblx0ICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQzID0gdGhpcy5tYXNrZWQpLmFwcGVuZFRhaWwuYXBwbHkoX3RoaXMkbWFza2VkMywgYXJndW1lbnRzKTtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XHJcblx0ICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XHJcblx0ICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcclxuXHQgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcclxuXHQgICAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xyXG5cdCAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xyXG5cdCAgICAgIHZhciBtaW5Qb3MgPSAwO1xyXG5cdCAgICAgIHZhciBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcclxuXHQgICAgICB2YXIgYm91bmRQb3MgPSBNYXRoLm1pbihNYXRoLm1heChjdXJzb3JQb3MsIG1pblBvcyksIG1heFBvcyk7XHJcblxyXG5cdCAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcblx0ICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG5cdCAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcclxuXHQgICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWluUG9zO1xyXG5cclxuXHQgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxyXG5cdCAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XHJcblx0ICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcclxuXHJcblx0ICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxyXG5cdCAgICAgICAgZGVmYXVsdDpcclxuXHQgICAgICAgICAgcmV0dXJuIGJvdW5kUG9zO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcclxuXHQgICAgICB2YXIgX3RoaXMkbWFza2VkNCwgX3RoaXMkcGFyZW50O1xyXG5cclxuXHQgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDQgPSB0aGlzLm1hc2tlZCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRtYXNrZWQ0LCBhcmd1bWVudHMpICYmICghdGhpcy5wYXJlbnQgfHwgKF90aGlzJHBhcmVudCA9IHRoaXMucGFyZW50KS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJHBhcmVudCwgYXJndW1lbnRzKSk7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvQ29tbWl0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcclxuXHQgICAgICB0aGlzLm1hc2tlZC5kb0NvbW1pdCgpO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJzdGF0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgbWFza2VkOiB0aGlzLm1hc2tlZC5zdGF0ZSxcclxuXHQgICAgICAgIF9pc0ZpbGxlZDogdGhpcy5faXNGaWxsZWRcclxuXHQgICAgICB9O1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xyXG5cdCAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGUubWFza2VkO1xyXG5cdCAgICAgIHRoaXMuX2lzRmlsbGVkID0gc3RhdGUuX2lzRmlsbGVkO1xyXG5cdCAgICB9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIFBhdHRlcm5JbnB1dERlZmluaXRpb247XHJcblx0fSgpO1xyXG5cclxuXHR2YXIgUGF0dGVybkZpeGVkRGVmaW5pdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XHJcblx0ICAvKiogKi9cclxuXHJcblx0ICAvKiogKi9cclxuXHJcblx0ICAvKiogKi9cclxuXHJcblx0ICAvKiogKi9cclxuXHQgIGZ1bmN0aW9uIFBhdHRlcm5GaXhlZERlZmluaXRpb24ob3B0cykge1xyXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybkZpeGVkRGVmaW5pdGlvbik7XHJcblxyXG5cdCAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xyXG5cdCAgICB0aGlzLl92YWx1ZSA9ICcnO1xyXG5cdCAgfVxyXG5cclxuXHQgIF9jcmVhdGVDbGFzcyhQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCBbe1xyXG5cdCAgICBrZXk6IFwidmFsdWVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmlzVW5tYXNraW5nID8gdGhpcy52YWx1ZSA6ICcnO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJyZXNldFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XHJcblx0ICAgICAgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xyXG5cdCAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInJlbW92ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG5cdCAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xyXG5cdCAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuc2xpY2UoMCwgZnJvbVBvcykgKyB0aGlzLl92YWx1ZS5zbGljZSh0b1Bvcyk7XHJcblx0ICAgICAgaWYgKCF0aGlzLl92YWx1ZSkgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xyXG5cdCAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcclxuXHQgICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcclxuXHQgICAgICB2YXIgbWluUG9zID0gMDtcclxuXHQgICAgICB2YXIgbWF4UG9zID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xyXG5cclxuXHQgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG5cdCAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcclxuXHQgICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XHJcblx0ICAgICAgICAgIHJldHVybiBtaW5Qb3M7XHJcblxyXG5cdCAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcclxuXHQgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxyXG5cdCAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XHJcblx0ICAgICAgICBkZWZhdWx0OlxyXG5cdCAgICAgICAgICByZXR1cm4gbWF4UG9zO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XHJcblx0ICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XHJcblx0ICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XHJcblx0ICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcclxuXHQgICAgICByZXR1cm4gZmxhZ3MucmF3ICYmIHRoaXMuX2lzUmF3SW5wdXQgJiYgdGhpcy5fdmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpIHx8ICcnO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0cnVlO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoc3RyKSB7XHJcblx0ICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcclxuXHQgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblx0ICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcclxuXHQgICAgICB2YXIgYXBwZW5kZWQgPSB0aGlzLmNoYXIgPT09IHN0clswXTtcclxuXHQgICAgICB2YXIgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgIWZsYWdzLnRhaWw7XHJcblx0ICAgICAgaWYgKGlzUmVzb2x2ZWQpIGRldGFpbHMucmF3SW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XHJcblx0ICAgICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xyXG5cdCAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xyXG5cdCAgICAgIHJldHVybiBkZXRhaWxzO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcclxuXHQgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblx0ICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcclxuXHQgICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XHJcblx0ICAgICAgcmV0dXJuIGRldGFpbHM7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcclxuXHQgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnKTtcclxuXHQgICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XHJcblx0ICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xyXG5cdCAgICAgIHJldHVybiB0YWlsLmFwcGVuZFRvKHRoaXMpO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJhcHBlbmRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XHJcblx0ICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyKHN0ciwgZmxhZ3MpO1xyXG5cclxuXHQgICAgICBpZiAodGFpbCAhPSBudWxsKSB7XHJcblx0ICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwodGFpbCkudGFpbFNoaWZ0O1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGRldGFpbHM7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvQ29tbWl0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHt9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJzdGF0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcclxuXHQgICAgICAgIF9pc1Jhd0lucHV0OiB0aGlzLl9pc1Jhd0lucHV0XHJcblx0ICAgICAgfTtcclxuXHQgICAgfSxcclxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcclxuXHQgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcclxuXHQgICAgfVxyXG5cdCAgfV0pO1xyXG5cclxuXHQgIHJldHVybiBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xyXG5cdH0oKTtcclxuXHJcblx0dmFyIENodW5rc1RhaWxEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcclxuXHQgIC8qKiAqL1xyXG5cdCAgZnVuY3Rpb24gQ2h1bmtzVGFpbERldGFpbHMoKSB7XHJcblx0ICAgIHZhciBjaHVua3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xyXG5cdCAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcclxuXHJcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaHVua3NUYWlsRGV0YWlscyk7XHJcblxyXG5cdCAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcclxuXHQgICAgdGhpcy5mcm9tID0gZnJvbTtcclxuXHQgIH1cclxuXHJcblx0ICBfY3JlYXRlQ2xhc3MoQ2h1bmtzVGFpbERldGFpbHMsIFt7XHJcblx0ICAgIGtleTogXCJ0b1N0cmluZ1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChTdHJpbmcpLmpvaW4oJycpO1xyXG5cdCAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJleHRlbmRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsQ2h1bmspIHtcclxuXHQgICAgICBpZiAoIVN0cmluZyh0YWlsQ2h1bmspKSByZXR1cm47XHJcblx0ICAgICAgaWYgKGlzU3RyaW5nKHRhaWxDaHVuaykpIHRhaWxDaHVuayA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWxDaHVuaykpO1xyXG5cdCAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcclxuXHQgICAgICB2YXIgZXh0ZW5kTGFzdCA9IGxhc3RDaHVuayAmJiAoIC8vIGlmIHN0b3BzIGFyZSBzYW1lIG9yIHRhaWwgaGFzIG5vIHN0b3BcclxuXHQgICAgICBsYXN0Q2h1bmsuc3RvcCA9PT0gdGFpbENodW5rLnN0b3AgfHwgdGFpbENodW5rLnN0b3AgPT0gbnVsbCkgJiYgLy8gaWYgdGFpbCBjaHVuayBnb2VzIGp1c3QgYWZ0ZXIgbGFzdCBjaHVua1xyXG5cdCAgICAgIHRhaWxDaHVuay5mcm9tID09PSBsYXN0Q2h1bmsuZnJvbSArIGxhc3RDaHVuay50b1N0cmluZygpLmxlbmd0aDtcclxuXHJcblx0ICAgICAgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENvbnRpbnVvdXNUYWlsRGV0YWlscykge1xyXG5cdCAgICAgICAgLy8gY2hlY2sgdGhlIGFiaWxpdHkgdG8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXHJcblx0ICAgICAgICBpZiAoZXh0ZW5kTGFzdCkge1xyXG5cdCAgICAgICAgICAvLyBleHRlbmQgcHJldmlvdXMgY2h1bmtcclxuXHQgICAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAvLyBhcHBlbmQgbmV3IGNodW5rXHJcblx0ICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9IGVsc2UgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSB7XHJcblx0ICAgICAgICBpZiAodGFpbENodW5rLnN0b3AgPT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAvLyB1bndyYXAgZmxvYXRpbmcgY2h1bmtzIHRvIHBhcmVudCwga2VlcGluZyBgZnJvbWAgcG9zXHJcblx0ICAgICAgICAgIHZhciBmaXJzdFRhaWxDaHVuaztcclxuXHJcblx0ICAgICAgICAgIHdoaWxlICh0YWlsQ2h1bmsuY2h1bmtzLmxlbmd0aCAmJiB0YWlsQ2h1bmsuY2h1bmtzWzBdLnN0b3AgPT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAgIGZpcnN0VGFpbENodW5rID0gdGFpbENodW5rLmNodW5rcy5zaGlmdCgpO1xyXG5cdCAgICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XHJcblx0ICAgICAgICAgICAgdGhpcy5leHRlbmQoZmlyc3RUYWlsQ2h1bmspO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9IC8vIGlmIHRhaWwgY2h1bmsgc3RpbGwgaGFzIHZhbHVlXHJcblxyXG5cclxuXHQgICAgICAgIGlmICh0YWlsQ2h1bmsudG9TdHJpbmcoKSkge1xyXG5cdCAgICAgICAgICAvLyBpZiBjaHVua3MgY29udGFpbnMgc3RvcHMsIHRoZW4gcG9wdXAgc3RvcCB0byBjb250YWluZXJcclxuXHQgICAgICAgICAgdGFpbENodW5rLnN0b3AgPSB0YWlsQ2h1bmsuYmxvY2tJbmRleDtcclxuXHQgICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiYXBwZW5kVG9cIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xyXG5cdCAgICAgIC8vICRGbG93Rml4TWVcclxuXHQgICAgICBpZiAoIShtYXNrZWQgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWRQYXR0ZXJuKSkge1xyXG5cdCAgICAgICAgdmFyIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMudG9TdHJpbmcoKSk7XHJcblx0ICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoICYmICFkZXRhaWxzLnNraXA7ICsrY2kpIHtcclxuXHQgICAgICAgIHZhciBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcclxuXHJcblx0ICAgICAgICB2YXIgbGFzdEJsb2NrSXRlciA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhtYXNrZWQudmFsdWUubGVuZ3RoKTtcclxuXHJcblx0ICAgICAgICB2YXIgc3RvcCA9IGNodW5rLnN0b3A7XHJcblx0ICAgICAgICB2YXIgY2h1bmtCbG9jayA9IHZvaWQgMDtcclxuXHJcblx0ICAgICAgICBpZiAoc3RvcCAhPSBudWxsICYmICggLy8gaWYgYmxvY2sgbm90IGZvdW5kIG9yIHN0b3AgaXMgYmVoaW5kIGxhc3RCbG9ja1xyXG5cdCAgICAgICAgIWxhc3RCbG9ja0l0ZXIgfHwgbGFzdEJsb2NrSXRlci5pbmRleCA8PSBzdG9wKSkge1xyXG5cdCAgICAgICAgICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyB8fCAvLyBmb3IgY29udGludW91cyBibG9jayBhbHNvIGNoZWNrIGlmIHN0b3AgaXMgZXhpc3RcclxuXHQgICAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDApIHtcclxuXHQgICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKHN0b3ApKTtcclxuXHQgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgY2h1bmtCbG9jayA9IGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgJiYgbWFza2VkLl9ibG9ja3Nbc3RvcF07XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKGNodW5rQmxvY2spIHtcclxuXHQgICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gY2h1bmtCbG9jay5hcHBlbmRUYWlsKGNodW5rKTtcclxuXHQgICAgICAgICAgdGFpbERldGFpbHMuc2tpcCA9IGZhbHNlOyAvLyBhbHdheXMgaWdub3JlIHNraXAsIGl0IHdpbGwgYmUgc2V0IG9uIGxhc3RcclxuXHJcblx0ICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRhaWxEZXRhaWxzKTtcclxuXHQgICAgICAgICAgbWFza2VkLl92YWx1ZSArPSB0YWlsRGV0YWlscy5pbnNlcnRlZDsgLy8gZ2V0IG5vdCBpbnNlcnRlZCBjaGFyc1xyXG5cclxuXHQgICAgICAgICAgdmFyIHJlbWFpbkNoYXJzID0gY2h1bmsudG9TdHJpbmcoKS5zbGljZSh0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGgpO1xyXG5cdCAgICAgICAgICBpZiAocmVtYWluQ2hhcnMpIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQocmVtYWluQ2hhcnMsIHtcclxuXHQgICAgICAgICAgICB0YWlsOiB0cnVlXHJcblx0ICAgICAgICAgIH0pKTtcclxuXHQgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQoY2h1bmsudG9TdHJpbmcoKSwge1xyXG5cdCAgICAgICAgICAgIHRhaWw6IHRydWVcclxuXHQgICAgICAgICAgfSkpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgICByZXR1cm4gZGV0YWlscztcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwic3RhdGVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHtcclxuXHQgICAgICAgIGNodW5rczogdGhpcy5jaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7XHJcblx0ICAgICAgICAgIHJldHVybiBjLnN0YXRlO1xyXG5cdCAgICAgICAgfSksXHJcblx0ICAgICAgICBmcm9tOiB0aGlzLmZyb20sXHJcblx0ICAgICAgICBzdG9wOiB0aGlzLnN0b3AsXHJcblx0ICAgICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcclxuXHQgICAgICB9O1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xyXG5cdCAgICAgIHZhciBjaHVua3MgPSBzdGF0ZS5jaHVua3MsXHJcblx0ICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBbXCJjaHVua3NcIl0pO1xyXG5cclxuXHQgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3BzKTtcclxuXHQgICAgICB0aGlzLmNodW5rcyA9IGNodW5rcy5tYXAoZnVuY3Rpb24gKGNzdGF0ZSkge1xyXG5cdCAgICAgICAgdmFyIGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgPyBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoKTsgLy8gJEZsb3dGaXhNZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmVcclxuXHJcblx0ICAgICAgICBjaHVuay5zdGF0ZSA9IGNzdGF0ZTtcclxuXHQgICAgICAgIHJldHVybiBjaHVuaztcclxuXHQgICAgICB9KTtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0QmVmb3JlKHBvcykge1xyXG5cdCAgICAgIGlmICh0aGlzLmZyb20gPj0gcG9zIHx8ICF0aGlzLmNodW5rcy5sZW5ndGgpIHJldHVybiAnJztcclxuXHQgICAgICB2YXIgY2h1bmtTaGlmdFBvcyA9IHBvcyAtIHRoaXMuZnJvbTtcclxuXHQgICAgICB2YXIgY2kgPSAwO1xyXG5cclxuXHQgICAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcclxuXHQgICAgICAgIHZhciBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcclxuXHQgICAgICAgIHZhciBzaGlmdENoYXIgPSBjaHVuay5zaGlmdEJlZm9yZShjaHVua1NoaWZ0UG9zKTtcclxuXHJcblx0ICAgICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xyXG5cdCAgICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxyXG5cdCAgICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxyXG5cdCAgICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XHJcblx0ICAgICAgICAgICsrY2k7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcclxuXHQgICAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZiAoc2hpZnRDaGFyKSByZXR1cm4gc2hpZnRDaGFyO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuICcnO1xyXG5cdCAgICB9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIENodW5rc1RhaWxEZXRhaWxzO1xyXG5cdH0oKTtcclxuXHJcblx0LyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXHJcblxyXG5cdHZhciBNYXNrZWRSZWdFeHAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcclxuXHQgIF9pbmhlcml0cyhNYXNrZWRSZWdFeHAsIF9NYXNrZWQpO1xyXG5cclxuXHQgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkUmVnRXhwKTtcclxuXHJcblx0ICBmdW5jdGlvbiBNYXNrZWRSZWdFeHAoKSB7XHJcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSZWdFeHApO1xyXG5cclxuXHQgICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdCAgfVxyXG5cclxuXHQgIF9jcmVhdGVDbGFzcyhNYXNrZWRSZWdFeHAsIFt7XHJcblx0ICAgIGtleTogXCJfdXBkYXRlXCIsXHJcblx0ICAgIHZhbHVlOlxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG5cdCAgICAqL1xyXG5cdCAgICBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcclxuXHQgICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0ICAgICAgICByZXR1cm4gdmFsdWUuc2VhcmNoKG9wdHMubWFzaykgPj0gMDtcclxuXHQgICAgICB9O1xyXG5cclxuXHQgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSZWdFeHAucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XHJcblx0ICAgIH1cclxuXHQgIH1dKTtcclxuXHJcblx0ICByZXR1cm4gTWFza2VkUmVnRXhwO1xyXG5cdH0oTWFza2VkKTtcclxuXHRJTWFzay5NYXNrZWRSZWdFeHAgPSBNYXNrZWRSZWdFeHA7XHJcblxyXG5cdC8qKlxyXG5cdCAgUGF0dGVybiBtYXNrXHJcblx0ICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG5cdCAgQHBhcmFtIHtPYmplY3R9IG9wdHMuYmxvY2tzXHJcblx0ICBAcGFyYW0ge09iamVjdH0gb3B0cy5kZWZpbml0aW9uc1xyXG5cdCAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucGxhY2Vob2xkZXJDaGFyXHJcblx0ICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubGF6eVxyXG5cdCovXHJcblx0dmFyIE1hc2tlZFBhdHRlcm4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcclxuXHQgIF9pbmhlcml0cyhNYXNrZWRQYXR0ZXJuLCBfTWFza2VkKTtcclxuXHJcblx0ICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFBhdHRlcm4pO1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cclxuXHJcblx0ICAvKiogU2hvdyBwbGFjZWhvbGRlciBvbmx5IHdoZW4gbmVlZGVkICovXHJcblx0ICBmdW5jdGlvbiBNYXNrZWRQYXR0ZXJuKCkge1xyXG5cdCAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUGF0dGVybik7XHJcblxyXG5cdCAgICAvLyBUT0RPIHR5cGUgJFNoYXBlPE1hc2tlZFBhdHRlcm5PcHRpb25zPj17fSBkb2VzIG5vdCB3b3JrXHJcblx0ICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TLCBvcHRzLmRlZmluaXRpb25zKTtcclxuXHQgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZFBhdHRlcm4uREVGQVVMVFMsIG9wdHMpKTtcclxuXHQgIH1cclxuXHQgIC8qKlxyXG5cdCAgICBAb3ZlcnJpZGVcclxuXHQgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuXHQgICovXHJcblxyXG5cclxuXHQgIF9jcmVhdGVDbGFzcyhNYXNrZWRQYXR0ZXJuLCBbe1xyXG5cdCAgICBrZXk6IFwiX3VwZGF0ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZSgpIHtcclxuXHQgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblx0ICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xyXG5cclxuXHQgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xyXG5cclxuXHQgICAgICB0aGlzLl9yZWJ1aWxkTWFzaygpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9yZWJ1aWxkTWFza1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYnVpbGRNYXNrKCkge1xyXG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdCAgICAgIHZhciBkZWZzID0gdGhpcy5kZWZpbml0aW9ucztcclxuXHQgICAgICB0aGlzLl9ibG9ja3MgPSBbXTtcclxuXHQgICAgICB0aGlzLl9zdG9wcyA9IFtdO1xyXG5cdCAgICAgIHRoaXMuX21hc2tlZEJsb2NrcyA9IHt9O1xyXG5cdCAgICAgIHZhciBwYXR0ZXJuID0gdGhpcy5tYXNrO1xyXG5cdCAgICAgIGlmICghcGF0dGVybiB8fCAhZGVmcykgcmV0dXJuO1xyXG5cdCAgICAgIHZhciB1bm1hc2tpbmdCbG9jayA9IGZhbHNlO1xyXG5cdCAgICAgIHZhciBvcHRpb25hbEJsb2NrID0gZmFsc2U7XHJcblxyXG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xyXG5cdCAgICAgICAgaWYgKHRoaXMuYmxvY2tzKSB7XHJcblx0ICAgICAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIHZhciBwID0gcGF0dGVybi5zbGljZShpKTtcclxuXHQgICAgICAgICAgICB2YXIgYk5hbWVzID0gT2JqZWN0LmtleXMoX3RoaXMuYmxvY2tzKS5maWx0ZXIoZnVuY3Rpb24gKGJOYW1lKSB7XHJcblx0ICAgICAgICAgICAgICByZXR1cm4gcC5pbmRleE9mKGJOYW1lKSA9PT0gMDtcclxuXHQgICAgICAgICAgICB9KTsgLy8gb3JkZXIgYnkga2V5IGxlbmd0aFxyXG5cclxuXHQgICAgICAgICAgICBiTmFtZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdCAgICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XHJcblx0ICAgICAgICAgICAgfSk7IC8vIHVzZSBibG9jayBuYW1lIHdpdGggbWF4IGxlbmd0aFxyXG5cclxuXHQgICAgICAgICAgICB2YXIgYk5hbWUgPSBiTmFtZXNbMF07XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChiTmFtZSkge1xyXG5cdCAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xyXG5cdCAgICAgICAgICAgICAgdmFyIG1hc2tlZEJsb2NrID0gY3JlYXRlTWFzayhPYmplY3QuYXNzaWduKHtcclxuXHQgICAgICAgICAgICAgICAgcGFyZW50OiBfdGhpcyxcclxuXHQgICAgICAgICAgICAgICAgbGF6eTogX3RoaXMubGF6eSxcclxuXHQgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiBfdGhpcy5wbGFjZWhvbGRlckNoYXIsXHJcblx0ICAgICAgICAgICAgICAgIG92ZXJ3cml0ZTogX3RoaXMub3ZlcndyaXRlXHJcblx0ICAgICAgICAgICAgICB9LCBfdGhpcy5ibG9ja3NbYk5hbWVdKSk7XHJcblxyXG5cdCAgICAgICAgICAgICAgaWYgKG1hc2tlZEJsb2NrKSB7XHJcblx0ICAgICAgICAgICAgICAgIF90aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7IC8vIHN0b3JlIGJsb2NrIGluZGV4XHJcblxyXG5cclxuXHQgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSkgX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0gPSBbXTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdLnB1c2goX3RoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTtcclxuXHQgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XHJcblx0ICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgfSgpO1xyXG5cclxuXHQgICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgdmFyIGNoYXIgPSBwYXR0ZXJuW2ldO1xyXG5cclxuXHQgICAgICAgIHZhciBfaXNJbnB1dCA9IChjaGFyIGluIGRlZnMpO1xyXG5cclxuXHQgICAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUikge1xyXG5cdCAgICAgICAgICB0aGlzLl9zdG9wcy5wdXNoKHRoaXMuX2Jsb2Nrcy5sZW5ndGgpO1xyXG5cclxuXHQgICAgICAgICAgY29udGludWU7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcclxuXHQgICAgICAgICAgdW5tYXNraW5nQmxvY2sgPSAhdW5tYXNraW5nQmxvY2s7XHJcblx0ICAgICAgICAgIGNvbnRpbnVlO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIGlmIChjaGFyID09PSAnWycgfHwgY2hhciA9PT0gJ10nKSB7XHJcblx0ICAgICAgICAgIG9wdGlvbmFsQmxvY2sgPSAhb3B0aW9uYWxCbG9jaztcclxuXHQgICAgICAgICAgY29udGludWU7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcclxuXHQgICAgICAgICAgKytpO1xyXG5cdCAgICAgICAgICBjaGFyID0gcGF0dGVybltpXTtcclxuXHQgICAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcclxuXHQgICAgICAgICAgX2lzSW5wdXQgPSBmYWxzZTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICB2YXIgZGVmID0gX2lzSW5wdXQgPyBuZXcgUGF0dGVybklucHV0RGVmaW5pdGlvbih7XHJcblx0ICAgICAgICAgIHBhcmVudDogdGhpcyxcclxuXHQgICAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxyXG5cdCAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IHRoaXMucGxhY2Vob2xkZXJDaGFyLFxyXG5cdCAgICAgICAgICBtYXNrOiBkZWZzW2NoYXJdLFxyXG5cdCAgICAgICAgICBpc09wdGlvbmFsOiBvcHRpb25hbEJsb2NrXHJcblx0ICAgICAgICB9KSA6IG5ldyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKHtcclxuXHQgICAgICAgICAgY2hhcjogY2hhcixcclxuXHQgICAgICAgICAgaXNVbm1hc2tpbmc6IHVubWFza2luZ0Jsb2NrXHJcblx0ICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChkZWYpO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJzdGF0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XHJcblx0ICAgICAgICBfYmxvY2tzOiB0aGlzLl9ibG9ja3MubWFwKGZ1bmN0aW9uIChiKSB7XHJcblx0ICAgICAgICAgIHJldHVybiBiLnN0YXRlO1xyXG5cdCAgICAgICAgfSlcclxuXHQgICAgICB9KTtcclxuXHQgICAgfSxcclxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcclxuXHQgICAgICB2YXIgX2Jsb2NrcyA9IHN0YXRlLl9ibG9ja3MsXHJcblx0ICAgICAgICAgIG1hc2tlZFN0YXRlID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHN0YXRlLCBbXCJfYmxvY2tzXCJdKTtcclxuXHJcblx0ICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIsIGJpKSB7XHJcblx0ICAgICAgICByZXR1cm4gYi5zdGF0ZSA9IF9ibG9ja3NbYmldO1xyXG5cdCAgICAgIH0pO1xyXG5cclxuXHQgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInJlc2V0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcclxuXHQgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVzZXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcclxuXHJcblx0ICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcclxuXHQgICAgICAgIHJldHVybiBiLnJlc2V0KCk7XHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XHJcblx0ICAgICAgICByZXR1cm4gYi5pc0NvbXBsZXRlO1xyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvQ29tbWl0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcclxuXHQgICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xyXG5cdCAgICAgICAgcmV0dXJuIGIuZG9Db21taXQoKTtcclxuXHQgICAgICB9KTtcclxuXHJcblx0ICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XHJcblx0ICAgICAgICByZXR1cm4gc3RyICs9IGIudW5tYXNrZWRWYWx1ZTtcclxuXHQgICAgICB9LCAnJyk7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcclxuXHQgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ2YWx1ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICAvLyBUT0RPIHJldHVybiBfdmFsdWUgd2hlbiBub3QgaW4gY2hhbmdlP1xyXG5cdCAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGIpIHtcclxuXHQgICAgICAgIHJldHVybiBzdHIgKz0gYi52YWx1ZTtcclxuXHQgICAgICB9LCAnJyk7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0ICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcclxuXHQgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcImFwcGVuZFRhaWxcIiwgdGhpcykuY2FsbCh0aGlzLCB0YWlsKS5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XHJcblx0ICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcclxuXHJcblx0ICAgICAgdmFyIGJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xyXG5cclxuXHQgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XHJcblx0ICAgICAgaWYgKCFibG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBiaSA9IGJsb2NrSXRlci5pbmRleDs7ICsrYmkpIHtcclxuXHQgICAgICAgIHZhciBfYmxvY2sgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG5cdCAgICAgICAgaWYgKCFfYmxvY2spIGJyZWFrO1xyXG5cclxuXHQgICAgICAgIHZhciBibG9ja0RldGFpbHMgPSBfYmxvY2suX2FwcGVuZENoYXIoY2gsIGZsYWdzKTtcclxuXHJcblx0ICAgICAgICB2YXIgc2tpcCA9IGJsb2NrRGV0YWlscy5za2lwO1xyXG5cdCAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYmxvY2tEZXRhaWxzKTtcclxuXHQgICAgICAgIGlmIChza2lwIHx8IGJsb2NrRGV0YWlscy5yYXdJbnNlcnRlZCkgYnJlYWs7IC8vIGdvIG5leHQgY2hhclxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGRldGFpbHM7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xyXG5cdCAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuXHQgICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcclxuXHQgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgIHZhciBjaHVua1RhaWwgPSBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKTtcclxuXHQgICAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiBjaHVua1RhaWw7XHJcblxyXG5cdCAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgYmksIGJGcm9tUG9zLCBiVG9Qb3MpIHtcclxuXHQgICAgICAgIHZhciBibG9ja0NodW5rID0gYi5leHRyYWN0VGFpbChiRnJvbVBvcywgYlRvUG9zKTtcclxuXHQgICAgICAgIGJsb2NrQ2h1bmsuc3RvcCA9IF90aGlzMi5fZmluZFN0b3BCZWZvcmUoYmkpO1xyXG5cdCAgICAgICAgYmxvY2tDaHVuay5mcm9tID0gX3RoaXMyLl9ibG9ja1N0YXJ0UG9zKGJpKTtcclxuXHQgICAgICAgIGlmIChibG9ja0NodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIGJsb2NrQ2h1bmsuYmxvY2tJbmRleCA9IGJpO1xyXG5cdCAgICAgICAgY2h1bmtUYWlsLmV4dGVuZChibG9ja0NodW5rKTtcclxuXHQgICAgICB9KTtcclxuXHJcblx0ICAgICAgcmV0dXJuIGNodW5rVGFpbDtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcclxuXHQgICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcclxuXHQgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XHJcblx0ICAgICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gJyc7XHJcblx0ICAgICAgdmFyIGlucHV0ID0gJyc7XHJcblxyXG5cdCAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgZnJvbVBvcywgdG9Qb3MpIHtcclxuXHQgICAgICAgIGlucHV0ICs9IGIuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHJldHVybiBpbnB1dDtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2ZpbmRTdG9wQmVmb3JlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFN0b3BCZWZvcmUoYmxvY2tJbmRleCkge1xyXG5cdCAgICAgIHZhciBzdG9wQmVmb3JlO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBzaSA9IDA7IHNpIDwgdGhpcy5fc3RvcHMubGVuZ3RoOyArK3NpKSB7XHJcblx0ICAgICAgICB2YXIgc3RvcCA9IHRoaXMuX3N0b3BzW3NpXTtcclxuXHQgICAgICAgIGlmIChzdG9wIDw9IGJsb2NrSW5kZXgpIHN0b3BCZWZvcmUgPSBzdG9wO2Vsc2UgYnJlYWs7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gc3RvcEJlZm9yZTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogQXBwZW5kcyBwbGFjZWhvbGRlciBkZXBlbmRpbmcgb24gbGF6aW5lc3MgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcih0b0Jsb2NrSW5kZXgpIHtcclxuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcclxuXHJcblx0ICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xyXG5cdCAgICAgIGlmICh0aGlzLmxhenkgJiYgdG9CbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzO1xyXG5cclxuXHQgICAgICB2YXIgc3RhcnRCbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcclxuXHJcblx0ICAgICAgaWYgKCFzdGFydEJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XHJcblx0ICAgICAgdmFyIHN0YXJ0QmxvY2tJbmRleCA9IHN0YXJ0QmxvY2tJdGVyLmluZGV4O1xyXG5cdCAgICAgIHZhciBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xyXG5cclxuXHQgICAgICB0aGlzLl9ibG9ja3Muc2xpY2Uoc3RhcnRCbG9ja0luZGV4LCBlbmRCbG9ja0luZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XHJcblx0ICAgICAgICBpZiAoIWIubGF6eSB8fCB0b0Jsb2NrSW5kZXggIT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAvLyAkRmxvd0ZpeE1lIGBfYmxvY2tzYCBtYXkgbm90IGJlIHByZXNlbnRcclxuXHQgICAgICAgICAgdmFyIGFyZ3MgPSBiLl9ibG9ja3MgIT0gbnVsbCA/IFtiLl9ibG9ja3MubGVuZ3RoXSA6IFtdO1xyXG5cclxuXHQgICAgICAgICAgdmFyIGJEZXRhaWxzID0gYi5fYXBwZW5kUGxhY2Vob2xkZXIuYXBwbHkoYiwgYXJncyk7XHJcblxyXG5cdCAgICAgICAgICBfdGhpczMuX3ZhbHVlICs9IGJEZXRhaWxzLmluc2VydGVkO1xyXG5cdCAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShiRGV0YWlscyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHJldHVybiBkZXRhaWxzO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfbWFwUG9zVG9CbG9ja1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX21hcFBvc1RvQmxvY2socG9zKSB7XHJcblx0ICAgICAgdmFyIGFjY1ZhbCA9ICcnO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBiaSA9IDA7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xyXG5cdCAgICAgICAgdmFyIF9ibG9jazIgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG5cdCAgICAgICAgdmFyIGJsb2NrU3RhcnRQb3MgPSBhY2NWYWwubGVuZ3RoO1xyXG5cdCAgICAgICAgYWNjVmFsICs9IF9ibG9jazIudmFsdWU7XHJcblxyXG5cdCAgICAgICAgaWYgKHBvcyA8PSBhY2NWYWwubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgIHJldHVybiB7XHJcblx0ICAgICAgICAgICAgaW5kZXg6IGJpLFxyXG5cdCAgICAgICAgICAgIG9mZnNldDogcG9zIC0gYmxvY2tTdGFydFBvc1xyXG5cdCAgICAgICAgICB9O1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfYmxvY2tTdGFydFBvc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2Jsb2NrU3RhcnRQb3MoYmxvY2tJbmRleCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLl9ibG9ja3Muc2xpY2UoMCwgYmxvY2tJbmRleCkucmVkdWNlKGZ1bmN0aW9uIChwb3MsIGIpIHtcclxuXHQgICAgICAgIHJldHVybiBwb3MgKz0gYi52YWx1ZS5sZW5ndGg7XHJcblx0ICAgICAgfSwgMCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2ZvckVhY2hCbG9ja3NJblJhbmdlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcykge1xyXG5cdCAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XHJcblx0ICAgICAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XHJcblxyXG5cdCAgICAgIHZhciBmcm9tQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKTtcclxuXHJcblx0ICAgICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcclxuXHQgICAgICAgIHZhciB0b0Jsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodG9Qb3MpOyAvLyBwcm9jZXNzIGZpcnN0IGJsb2NrXHJcblxyXG5cclxuXHQgICAgICAgIHZhciBpc1NhbWVCbG9jayA9IHRvQmxvY2tJdGVyICYmIGZyb21CbG9ja0l0ZXIuaW5kZXggPT09IHRvQmxvY2tJdGVyLmluZGV4O1xyXG5cdCAgICAgICAgdmFyIGZyb21CbG9ja1N0YXJ0UG9zID0gZnJvbUJsb2NrSXRlci5vZmZzZXQ7XHJcblx0ICAgICAgICB2YXIgZnJvbUJsb2NrRW5kUG9zID0gdG9CbG9ja0l0ZXIgJiYgaXNTYW1lQmxvY2sgPyB0b0Jsb2NrSXRlci5vZmZzZXQgOiB0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0udmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgICAgZm4odGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLCBmcm9tQmxvY2tJdGVyLmluZGV4LCBmcm9tQmxvY2tTdGFydFBvcywgZnJvbUJsb2NrRW5kUG9zKTtcclxuXHJcblx0ICAgICAgICBpZiAodG9CbG9ja0l0ZXIgJiYgIWlzU2FtZUJsb2NrKSB7XHJcblx0ICAgICAgICAgIC8vIHByb2Nlc3MgaW50ZXJtZWRpYXRlIGJsb2Nrc1xyXG5cdCAgICAgICAgICBmb3IgKHZhciBiaSA9IGZyb21CbG9ja0l0ZXIuaW5kZXggKyAxOyBiaSA8IHRvQmxvY2tJdGVyLmluZGV4OyArK2JpKSB7XHJcblx0ICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUubGVuZ3RoKTtcclxuXHQgICAgICAgICAgfSAvLyBwcm9jZXNzIGxhc3QgYmxvY2tcclxuXHJcblxyXG5cdCAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbdG9CbG9ja0l0ZXIuaW5kZXhdLCB0b0Jsb2NrSXRlci5pbmRleCwgMCwgdG9CbG9ja0l0ZXIub2Zmc2V0KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwicmVtb3ZlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcblx0ICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XHJcblx0ICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcclxuXHJcblx0ICAgICAgdmFyIHJlbW92ZURldGFpbHMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVtb3ZlXCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MpO1xyXG5cclxuXHQgICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGJGcm9tUG9zLCBiVG9Qb3MpIHtcclxuXHQgICAgICAgIHJlbW92ZURldGFpbHMuYWdncmVnYXRlKGIucmVtb3ZlKGJGcm9tUG9zLCBiVG9Qb3MpKTtcclxuXHQgICAgICB9KTtcclxuXHJcblx0ICAgICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XHJcblx0ICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XHJcblx0ICAgICAgLy8gVE9ETyByZWZhY3RvciAtIGV4dHJhY3QgYWxpZ25ibG9ja1xyXG5cdCAgICAgIHZhciBiZWdpbkJsb2NrRGF0YSA9IHRoaXMuX21hcFBvc1RvQmxvY2soY3Vyc29yUG9zKSB8fCB7XHJcblx0ICAgICAgICBpbmRleDogMCxcclxuXHQgICAgICAgIG9mZnNldDogMFxyXG5cdCAgICAgIH07XHJcblx0ICAgICAgdmFyIGJlZ2luQmxvY2tPZmZzZXQgPSBiZWdpbkJsb2NrRGF0YS5vZmZzZXQsXHJcblx0ICAgICAgICAgIGJlZ2luQmxvY2tJbmRleCA9IGJlZ2luQmxvY2tEYXRhLmluZGV4O1xyXG5cdCAgICAgIHZhciBiZWdpbkJsb2NrID0gdGhpcy5fYmxvY2tzW2JlZ2luQmxvY2tJbmRleF07XHJcblx0ICAgICAgaWYgKCFiZWdpbkJsb2NrKSByZXR1cm4gY3Vyc29yUG9zO1xyXG5cdCAgICAgIHZhciBiZWdpbkJsb2NrQ3Vyc29yUG9zID0gYmVnaW5CbG9ja09mZnNldDsgLy8gaWYgcG9zaXRpb24gaW5zaWRlIGJsb2NrIC0gdHJ5IHRvIGFkanVzdCBpdFxyXG5cclxuXHQgICAgICBpZiAoYmVnaW5CbG9ja0N1cnNvclBvcyAhPT0gMCAmJiBiZWdpbkJsb2NrQ3Vyc29yUG9zIDwgYmVnaW5CbG9jay52YWx1ZS5sZW5ndGgpIHtcclxuXHQgICAgICAgIGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrLm5lYXJlc3RJbnB1dFBvcyhiZWdpbkJsb2NrT2Zmc2V0LCBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pKTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHZhciBjdXJzb3JBdFJpZ2h0ID0gYmVnaW5CbG9ja0N1cnNvclBvcyA9PT0gYmVnaW5CbG9jay52YWx1ZS5sZW5ndGg7XHJcblx0ICAgICAgdmFyIGN1cnNvckF0TGVmdCA9IGJlZ2luQmxvY2tDdXJzb3JQb3MgPT09IDA7IC8vICBjdXJzb3IgaXMgSU5TSURFIGZpcnN0IGJsb2NrIChub3QgYXQgYm91bmRzKVxyXG5cclxuXHQgICAgICBpZiAoIWN1cnNvckF0TGVmdCAmJiAhY3Vyc29yQXRSaWdodCkgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmVnaW5CbG9ja0luZGV4KSArIGJlZ2luQmxvY2tDdXJzb3JQb3M7XHJcblx0ICAgICAgdmFyIHNlYXJjaEJsb2NrSW5kZXggPSBjdXJzb3JBdFJpZ2h0ID8gYmVnaW5CbG9ja0luZGV4ICsgMSA6IGJlZ2luQmxvY2tJbmRleDtcclxuXHJcblx0ICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcclxuXHQgICAgICAgIC8vIE5PTkUgZGlyZWN0aW9uIHVzZWQgdG8gY2FsY3VsYXRlIHN0YXJ0IGlucHV0IHBvc2l0aW9uIGlmIG5vIGNoYXJzIHdlcmUgcmVtb3ZlZFxyXG5cdCAgICAgICAgLy8gRk9SIE5PTkU6XHJcblx0ICAgICAgICAvLyAtXHJcblx0ICAgICAgICAvLyBpbnB1dHxhbnlcclxuXHQgICAgICAgIC8vIC0+XHJcblx0ICAgICAgICAvLyAgYW55fGlucHV0XHJcblx0ICAgICAgICAvLyA8LVxyXG5cdCAgICAgICAgLy8gIGZpbGxlZC1pbnB1dHxhbnlcclxuXHQgICAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IGxlZnQgaXMgaW5wdXRcclxuXHQgICAgICAgIGlmIChzZWFyY2hCbG9ja0luZGV4ID4gMCkge1xyXG5cdCAgICAgICAgICB2YXIgYmxvY2tJbmRleEF0TGVmdCA9IHNlYXJjaEJsb2NrSW5kZXggLSAxO1xyXG5cdCAgICAgICAgICB2YXIgYmxvY2tBdExlZnQgPSB0aGlzLl9ibG9ja3NbYmxvY2tJbmRleEF0TGVmdF07XHJcblx0ICAgICAgICAgIHZhciBibG9ja0lucHV0UG9zID0gYmxvY2tBdExlZnQubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcclxuXHJcblx0ICAgICAgICAgIGlmICghYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoIHx8IGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRMZWZ0LnZhbHVlLmxlbmd0aCkge1xyXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKHNlYXJjaEJsb2NrSW5kZXgpO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9IC8vIC0+XHJcblxyXG5cclxuXHQgICAgICAgIHZhciBmaXJzdElucHV0QXRSaWdodCA9IHNlYXJjaEJsb2NrSW5kZXg7XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgYmkgPSBmaXJzdElucHV0QXRSaWdodDsgYmkgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK2JpKSB7XHJcblx0ICAgICAgICAgIHZhciBibG9ja0F0UmlnaHQgPSB0aGlzLl9ibG9ja3NbYmldO1xyXG5cclxuXHQgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zID0gYmxvY2tBdFJpZ2h0Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XHJcblxyXG5cdCAgICAgICAgICBpZiAoIWJsb2NrQXRSaWdodC52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRSaWdodC52YWx1ZS5sZW5ndGgpIHtcclxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBfYmxvY2tJbnB1dFBvcztcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSAvLyA8LVxyXG5cdCAgICAgICAgLy8gZmluZCBmaXJzdCBub24tZml4ZWQgc3ltYm9sXHJcblxyXG5cclxuXHQgICAgICAgIGZvciAodmFyIF9iaSA9IHNlYXJjaEJsb2NrSW5kZXggLSAxOyBfYmkgPj0gMDsgLS1fYmkpIHtcclxuXHQgICAgICAgICAgdmFyIF9ibG9jazMgPSB0aGlzLl9ibG9ja3NbX2JpXTtcclxuXHJcblx0ICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczIgPSBfYmxvY2szLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XHJcblxyXG5cclxuXHQgICAgICAgICAgaWYgKCFfYmxvY2szLnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvczIgIT09IF9ibG9jazMudmFsdWUubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpKSArIF9ibG9jazMudmFsdWUubGVuZ3RoO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgcmV0dXJuIGN1cnNvclBvcztcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcclxuXHQgICAgICAgIC8vIC1cclxuXHQgICAgICAgIC8vICBhbnl8ZmlsbGVkLWlucHV0XHJcblx0ICAgICAgICAvLyA8LVxyXG5cdCAgICAgICAgLy8gIGFueXxmaXJzdCBub3QgZW1wdHkgaXMgbm90LWxlbi1hbGlnbmVkXHJcblx0ICAgICAgICAvLyAgbm90LTAtYWxpZ25lZHxhbnlcclxuXHQgICAgICAgIC8vIC0+XHJcblx0ICAgICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZCBvciBlbmRcclxuXHQgICAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IHJpZ2h0IGlzIGZpbGxlZCBpbnB1dFxyXG5cdCAgICAgICAgdmFyIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQ7XHJcblxyXG5cdCAgICAgICAgZm9yICh2YXIgX2JpMiA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTIgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTIpIHtcclxuXHQgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tfYmkyXS52YWx1ZSkge1xyXG5cdCAgICAgICAgICAgIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgPSBfYmkyO1xyXG5cdCAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgIT0gbnVsbCkge1xyXG5cdCAgICAgICAgICB2YXIgZmlsbGVkQmxvY2sgPSB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodF07XHJcblxyXG5cdCAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3MzID0gZmlsbGVkQmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5SSUdIVCk7XHJcblxyXG5cdCAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3MzID09PSAwICYmIGZpbGxlZEJsb2NrLnVubWFza2VkVmFsdWUubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgICAgLy8gZmlsbGVkIGJsb2NrIGlzIGlucHV0XHJcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCkgKyBfYmxvY2tJbnB1dFBvczM7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH0gLy8gPC1cclxuXHQgICAgICAgIC8vIGZpbmQgdGhpcyB2YXJzXHJcblxyXG5cclxuXHQgICAgICAgIHZhciBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IC0xO1xyXG5cdCAgICAgICAgdmFyIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXg7IC8vIFRPRE8gY29uc2lkZXIgbmVzdGVkIGVtcHR5IGlucHV0c1xyXG5cclxuXHQgICAgICAgIGZvciAodmFyIF9iaTMgPSBzZWFyY2hCbG9ja0luZGV4IC0gMTsgX2JpMyA+PSAwOyAtLV9iaTMpIHtcclxuXHQgICAgICAgICAgdmFyIF9ibG9jazQgPSB0aGlzLl9ibG9ja3NbX2JpM107XHJcblxyXG5cdCAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M0ID0gX2Jsb2NrNC5uZWFyZXN0SW5wdXRQb3MoX2Jsb2NrNC52YWx1ZS5sZW5ndGgsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcclxuXHJcblx0ICAgICAgICAgIGlmICghX2Jsb2NrNC52YWx1ZSB8fCBfYmxvY2tJbnB1dFBvczQgIT09IDApIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggPSBfYmkzO1xyXG5cclxuXHQgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNCAhPT0gMCkge1xyXG5cdCAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczQgIT09IF9ibG9jazQudmFsdWUubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgICAgICAvLyBhbGlnbmVkIGluc2lkZSBibG9jayAtIHJldHVybiBpbW1lZGlhdGVseVxyXG5cdCAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpMykgKyBfYmxvY2tJbnB1dFBvczQ7XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgIC8vIGZvdW5kIGZpbGxlZFxyXG5cdCAgICAgICAgICAgICAgZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPSBfYmkzO1xyXG5cdCAgICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQpIHtcclxuXHQgICAgICAgICAgLy8gdHJ5IGZpbmQgZmlyc3QgZW1wdHkgaW5wdXQgYmVmb3JlIHN0YXJ0IHNlYXJjaGluZyBwb3NpdGlvbiBvbmx5IHdoZW4gbm90IGZvcmNlZFxyXG5cdCAgICAgICAgICBmb3IgKHZhciBfYmk0ID0gZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggKyAxOyBfYmk0IDw9IE1hdGgubWluKHNlYXJjaEJsb2NrSW5kZXgsIHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTsgKytfYmk0KSB7XHJcblx0ICAgICAgICAgICAgdmFyIF9ibG9jazUgPSB0aGlzLl9ibG9ja3NbX2JpNF07XHJcblxyXG5cdCAgICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczUgPSBfYmxvY2s1Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XHJcblxyXG5cdCAgICAgICAgICAgIHZhciBibG9ja0FsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTQpICsgX2Jsb2NrSW5wdXRQb3M1O1xyXG5cclxuXHQgICAgICAgICAgICBpZiAoYmxvY2tBbGlnbmVkUG9zID4gY3Vyc29yUG9zKSBicmVhazsgLy8gaWYgYmxvY2sgaXMgbm90IGxhenkgaW5wdXRcclxuXHJcblx0ICAgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNSAhPT0gX2Jsb2NrNS52YWx1ZS5sZW5ndGgpIHJldHVybiBibG9ja0FsaWduZWRQb3M7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH0gLy8gcHJvY2VzcyBvdmVyZmxvd1xyXG5cclxuXHJcblx0ICAgICAgICBpZiAoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPj0gMCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCkgKyB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXhdLnZhbHVlLmxlbmd0aDtcclxuXHQgICAgICAgIH0gLy8gZm9yIGxhenkgaWYgaGFzIGFsaWduZWQgbGVmdCBpbnNpZGUgZml4ZWQgYW5kIGhhcyBjYW1lIHRvIHRoZSBzdGFydCAtIHVzZSBzdGFydCBwb3NpdGlvblxyXG5cclxuXHJcblx0ICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCB8fCB0aGlzLmxhenkgJiYgIXRoaXMuZXh0cmFjdElucHV0KCkgJiYgIWlzSW5wdXQodGhpcy5fYmxvY2tzW3NlYXJjaEJsb2NrSW5kZXhdKSkge1xyXG5cdCAgICAgICAgICByZXR1cm4gMDtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZiAoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCAhPSBudWxsKSB7XHJcblx0ICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXgpO1xyXG5cdCAgICAgICAgfSAvLyBmaW5kIGZpcnN0IGlucHV0XHJcblxyXG5cclxuXHQgICAgICAgIGZvciAodmFyIF9iaTUgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmk1IDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmk1KSB7XHJcblx0ICAgICAgICAgIHZhciBfYmxvY2s2ID0gdGhpcy5fYmxvY2tzW19iaTVdO1xyXG5cclxuXHQgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNiA9IF9ibG9jazYubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcclxuXHJcblxyXG5cdCAgICAgICAgICBpZiAoIV9ibG9jazYudmFsdWUubGVuZ3RoIHx8IF9ibG9ja0lucHV0UG9zNiAhPT0gX2Jsb2NrNi52YWx1ZS5sZW5ndGgpIHtcclxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk1KSArIF9ibG9ja0lucHV0UG9zNjtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIHJldHVybiAwO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLlJJR0hUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSB7XHJcblx0ICAgICAgICAvLyAtPlxyXG5cdCAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgYW5kIGZpbGxlZFxyXG5cdCAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWRcclxuXHQgICAgICAgIC8vIDwtXHJcblx0ICAgICAgICAvLyAgbm90LTAtYWxpZ25lZCBvciBzdGFydHxhbnlcclxuXHQgICAgICAgIHZhciBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg7XHJcblx0ICAgICAgICB2YXIgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcclxuXHJcblx0ICAgICAgICBmb3IgKHZhciBfYmk2ID0gc2VhcmNoQmxvY2tJbmRleDsgX2JpNiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNikge1xyXG5cdCAgICAgICAgICB2YXIgX2Jsb2NrNyA9IHRoaXMuX2Jsb2Nrc1tfYmk2XTtcclxuXHJcblx0ICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczcgPSBfYmxvY2s3Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XHJcblxyXG5cdCAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M3ICE9PSBfYmxvY2s3LnZhbHVlLmxlbmd0aCkge1xyXG5cdCAgICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTYpICsgX2Jsb2NrSW5wdXRQb3M3O1xyXG5cdCAgICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCA9IF9iaTY7XHJcblx0ICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZiAoZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ICE9IG51bGwgJiYgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyAhPSBudWxsKSB7XHJcblx0ICAgICAgICAgIGZvciAodmFyIF9iaTcgPSBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg7IF9iaTcgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTcpIHtcclxuXHQgICAgICAgICAgICB2YXIgX2Jsb2NrOCA9IHRoaXMuX2Jsb2Nrc1tfYmk3XTtcclxuXHJcblx0ICAgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zOCA9IF9ibG9jazgubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5GT1JDRV9SSUdIVCk7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczggIT09IF9ibG9jazgudmFsdWUubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk3KSArIF9ibG9ja0lucHV0UG9zODtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCA/IHRoaXMudmFsdWUubGVuZ3RoIDogZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBmb3IgKHZhciBfYmk4ID0gTWF0aC5taW4oc2VhcmNoQmxvY2tJbmRleCwgdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpOyBfYmk4ID49IDA7IC0tX2JpOCkge1xyXG5cdCAgICAgICAgICB2YXIgX2Jsb2NrOSA9IHRoaXMuX2Jsb2Nrc1tfYmk4XTtcclxuXHJcblx0ICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczkgPSBfYmxvY2s5Lm5lYXJlc3RJbnB1dFBvcyhfYmxvY2s5LnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkxFRlQpO1xyXG5cclxuXHQgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zOSAhPT0gMCkge1xyXG5cdCAgICAgICAgICAgIHZhciBhbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk4KSArIF9ibG9ja0lucHV0UG9zOTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKGFsaWduZWRQb3MgPj0gY3Vyc29yUG9zKSByZXR1cm4gYWxpZ25lZFBvcztcclxuXHQgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGN1cnNvclBvcztcclxuXHQgICAgfVxyXG5cdCAgICAvKiogR2V0IGJsb2NrIGJ5IG5hbWUgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJtYXNrZWRCbG9ja1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2sobmFtZSkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLm1hc2tlZEJsb2NrcyhuYW1lKVswXTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogR2V0IGFsbCBibG9ja3MgYnkgbmFtZSAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIm1hc2tlZEJsb2Nrc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2tzKG5hbWUpIHtcclxuXHQgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcclxuXHJcblx0ICAgICAgdmFyIGluZGljZXMgPSB0aGlzLl9tYXNrZWRCbG9ja3NbbmFtZV07XHJcblx0ICAgICAgaWYgKCFpbmRpY2VzKSByZXR1cm4gW107XHJcblx0ICAgICAgcmV0dXJuIGluZGljZXMubWFwKGZ1bmN0aW9uIChnaSkge1xyXG5cdCAgICAgICAgcmV0dXJuIF90aGlzNC5fYmxvY2tzW2dpXTtcclxuXHQgICAgICB9KTtcclxuXHQgICAgfVxyXG5cdCAgfV0pO1xyXG5cclxuXHQgIHJldHVybiBNYXNrZWRQYXR0ZXJuO1xyXG5cdH0oTWFza2VkKTtcclxuXHRNYXNrZWRQYXR0ZXJuLkRFRkFVTFRTID0ge1xyXG5cdCAgbGF6eTogdHJ1ZSxcclxuXHQgIHBsYWNlaG9sZGVyQ2hhcjogJ18nXHJcblx0fTtcclxuXHRNYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUiA9ICdgJztcclxuXHRNYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSID0gJ1xcXFwnO1xyXG5cdE1hc2tlZFBhdHRlcm4uSW5wdXREZWZpbml0aW9uID0gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcclxuXHRNYXNrZWRQYXR0ZXJuLkZpeGVkRGVmaW5pdGlvbiA9IFBhdHRlcm5GaXhlZERlZmluaXRpb247XHJcblxyXG5cdGZ1bmN0aW9uIGlzSW5wdXQoYmxvY2spIHtcclxuXHQgIGlmICghYmxvY2spIHJldHVybiBmYWxzZTtcclxuXHQgIHZhciB2YWx1ZSA9IGJsb2NrLnZhbHVlO1xyXG5cdCAgcmV0dXJuICF2YWx1ZSB8fCBibG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpICE9PSB2YWx1ZS5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRJTWFzay5NYXNrZWRQYXR0ZXJuID0gTWFza2VkUGF0dGVybjtcclxuXHJcblx0LyoqIFBhdHRlcm4gd2hpY2ggYWNjZXB0cyByYW5nZXMgKi9cclxuXHJcblx0dmFyIE1hc2tlZFJhbmdlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xyXG5cdCAgX2luaGVyaXRzKE1hc2tlZFJhbmdlLCBfTWFza2VkUGF0dGVybik7XHJcblxyXG5cdCAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSYW5nZSk7XHJcblxyXG5cdCAgZnVuY3Rpb24gTWFza2VkUmFuZ2UoKSB7XHJcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSYW5nZSk7XHJcblxyXG5cdCAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0ICB9XHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJhbmdlLCBbe1xyXG5cdCAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxyXG5cdCAgICBnZXQ6XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIE9wdGlvbmFsbHkgc2V0cyBtYXggbGVuZ3RoIG9mIHBhdHRlcm4uXHJcblx0ICAgICAgVXNlZCB3aGVuIHBhdHRlcm4gbGVuZ3RoIGlzIGxvbmdlciB0aGVuIGB0b2AgcGFyYW0gbGVuZ3RoLiBQYWRzIHplcm9zIGF0IHN0YXJ0IGluIHRoaXMgY2FzZS5cclxuXHQgICAgKi9cclxuXHJcblx0ICAgIC8qKiBNaW4gYm91bmQgKi9cclxuXHJcblx0ICAgIC8qKiBNYXggYm91bmQgKi9cclxuXHJcblx0ICAgIC8qKiAqL1xyXG5cdCAgICBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMubWF4TGVuZ3RoIC0gU3RyaW5nKHRoaXMuZnJvbSkubGVuZ3RoO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl91cGRhdGVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xyXG5cdCAgICAgIC8vIFRPRE8gdHlwZVxyXG5cdCAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcclxuXHQgICAgICAgIHRvOiB0aGlzLnRvIHx8IDAsXHJcblx0ICAgICAgICBmcm9tOiB0aGlzLmZyb20gfHwgMFxyXG5cdCAgICAgIH0sIG9wdHMpO1xyXG5cdCAgICAgIHZhciBtYXhMZW5ndGggPSBTdHJpbmcob3B0cy50bykubGVuZ3RoO1xyXG5cdCAgICAgIGlmIChvcHRzLm1heExlbmd0aCAhPSBudWxsKSBtYXhMZW5ndGggPSBNYXRoLm1heChtYXhMZW5ndGgsIG9wdHMubWF4TGVuZ3RoKTtcclxuXHQgICAgICBvcHRzLm1heExlbmd0aCA9IG1heExlbmd0aDtcclxuXHQgICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyhvcHRzLmZyb20pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcclxuXHQgICAgICB2YXIgdG9TdHIgPSBTdHJpbmcob3B0cy50bykucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xyXG5cdCAgICAgIHZhciBzYW1lQ2hhcnNDb3VudCA9IDA7XHJcblxyXG5cdCAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XHJcblx0ICAgICAgICArK3NhbWVDaGFyc0NvdW50O1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgb3B0cy5tYXNrID0gdG9TdHIuc2xpY2UoMCwgc2FtZUNoYXJzQ291bnQpLnJlcGxhY2UoLzAvZywgJ1xcXFwwJykgKyAnMCcucmVwZWF0KG1heExlbmd0aCAtIHNhbWVDaGFyc0NvdW50KTtcclxuXHJcblx0ICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJpc0NvbXBsZXRlXCIsIHRoaXMpICYmIEJvb2xlYW4odGhpcy52YWx1ZSk7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImJvdW5kYXJpZXNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJvdW5kYXJpZXMoc3RyKSB7XHJcblx0ICAgICAgdmFyIG1pbnN0ciA9ICcnO1xyXG5cdCAgICAgIHZhciBtYXhzdHIgPSAnJztcclxuXHJcblx0ICAgICAgdmFyIF9yZWYgPSBzdHIubWF0Y2goL14oXFxEKikoXFxkKikoXFxEKikvKSB8fCBbXSxcclxuXHQgICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAzKSxcclxuXHQgICAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMlsxXSxcclxuXHQgICAgICAgICAgbnVtID0gX3JlZjJbMl07XHJcblxyXG5cdCAgICAgIGlmIChudW0pIHtcclxuXHQgICAgICAgIG1pbnN0ciA9ICcwJy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcclxuXHQgICAgICAgIG1heHN0ciA9ICc5Jy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIG1pbnN0ciA9IG1pbnN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICcwJyk7XHJcblx0ICAgICAgbWF4c3RyID0gbWF4c3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzknKTtcclxuXHQgICAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJkb1ByZXBhcmVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcclxuXHQgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xyXG5cdCAgICAgIHN0ciA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiZG9QcmVwYXJlXCIsIHRoaXMpLmNhbGwodGhpcywgc3RyLCBmbGFncykucmVwbGFjZSgvXFxEL2csICcnKTtcclxuXHQgICAgICBpZiAoIXRoaXMuYXV0b2ZpeCkgcmV0dXJuIHN0cjtcclxuXHQgICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xyXG5cdCAgICAgIHZhciB0b1N0ciA9IFN0cmluZyh0aGlzLnRvKS5wYWRTdGFydCh0aGlzLm1heExlbmd0aCwgJzAnKTtcclxuXHQgICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcclxuXHQgICAgICB2YXIgcHJlcFN0ciA9ICcnO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xyXG5cdCAgICAgICAgdmFyIG5leHRWYWwgPSB2YWwgKyBwcmVwU3RyICsgc3RyW2NpXTtcclxuXHJcblx0ICAgICAgICB2YXIgX3RoaXMkYm91bmRhcmllcyA9IHRoaXMuYm91bmRhcmllcyhuZXh0VmFsKSxcclxuXHQgICAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzMiA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMsIDIpLFxyXG5cdCAgICAgICAgICAgIG1pbnN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzBdLFxyXG5cdCAgICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzFdO1xyXG5cclxuXHQgICAgICAgIGlmIChOdW1iZXIobWF4c3RyKSA8IHRoaXMuZnJvbSkgcHJlcFN0ciArPSBmcm9tU3RyW25leHRWYWwubGVuZ3RoIC0gMV07ZWxzZSBpZiAoTnVtYmVyKG1pbnN0cikgPiB0aGlzLnRvKSBwcmVwU3RyICs9IHRvU3RyW25leHRWYWwubGVuZ3RoIC0gMV07ZWxzZSBwcmVwU3RyICs9IHN0cltjaV07XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gcHJlcFN0cjtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xyXG5cdCAgICAgIHZhciBfZ2V0MjtcclxuXHJcblx0ICAgICAgdmFyIHN0ciA9IHRoaXMudmFsdWU7XHJcblx0ICAgICAgdmFyIGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcclxuXHQgICAgICBpZiAoZmlyc3ROb25aZXJvID09PSAtMSAmJiBzdHIubGVuZ3RoIDw9IHRoaXMuX21hdGNoRnJvbSkgcmV0dXJuIHRydWU7XHJcblxyXG5cdCAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzMyA9IHRoaXMuYm91bmRhcmllcyhzdHIpLFxyXG5cdCAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzNCA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMzLCAyKSxcclxuXHQgICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczRbMF0sXHJcblx0ICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXM0WzFdO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuXHQgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcclxuXHQgICAgfVxyXG5cdCAgfV0pO1xyXG5cclxuXHQgIHJldHVybiBNYXNrZWRSYW5nZTtcclxuXHR9KE1hc2tlZFBhdHRlcm4pO1xyXG5cdElNYXNrLk1hc2tlZFJhbmdlID0gTWFza2VkUmFuZ2U7XHJcblxyXG5cdC8qKiBEYXRlIG1hc2sgKi9cclxuXHJcblx0dmFyIE1hc2tlZERhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XHJcblx0ICBfaW5oZXJpdHMoTWFza2VkRGF0ZSwgX01hc2tlZFBhdHRlcm4pO1xyXG5cclxuXHQgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRGF0ZSk7XHJcblxyXG5cdCAgLyoqIFBhdHRlcm4gbWFzayBmb3IgZGF0ZSBhY2NvcmRpbmcgdG8ge0BsaW5rIE1hc2tlZERhdGUjZm9ybWF0fSAqL1xyXG5cclxuXHQgIC8qKiBTdGFydCBkYXRlICovXHJcblxyXG5cdCAgLyoqIEVuZCBkYXRlICovXHJcblxyXG5cdCAgLyoqICovXHJcblxyXG5cdCAgLyoqXHJcblx0ICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcblx0ICAqL1xyXG5cdCAgZnVuY3Rpb24gTWFza2VkRGF0ZShvcHRzKSB7XHJcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWREYXRlKTtcclxuXHJcblx0ICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREYXRlLkRFRkFVTFRTLCBvcHRzKSk7XHJcblx0ICB9XHJcblx0ICAvKipcclxuXHQgICAgQG92ZXJyaWRlXHJcblx0ICAqL1xyXG5cclxuXHJcblx0ICBfY3JlYXRlQ2xhc3MoTWFza2VkRGF0ZSwgW3tcclxuXHQgICAga2V5OiBcIl91cGRhdGVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xyXG5cdCAgICAgIGlmIChvcHRzLm1hc2sgPT09IERhdGUpIGRlbGV0ZSBvcHRzLm1hc2s7XHJcblx0ICAgICAgaWYgKG9wdHMucGF0dGVybikgb3B0cy5tYXNrID0gb3B0cy5wYXR0ZXJuO1xyXG5cdCAgICAgIHZhciBibG9ja3MgPSBvcHRzLmJsb2NrcztcclxuXHQgICAgICBvcHRzLmJsb2NrcyA9IE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTKCkpOyAvLyBhZGp1c3QgeWVhciBibG9ja1xyXG5cclxuXHQgICAgICBpZiAob3B0cy5taW4pIG9wdHMuYmxvY2tzLlkuZnJvbSA9IG9wdHMubWluLmdldEZ1bGxZZWFyKCk7XHJcblx0ICAgICAgaWYgKG9wdHMubWF4KSBvcHRzLmJsb2Nrcy5ZLnRvID0gb3B0cy5tYXguZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0ICAgICAgaWYgKG9wdHMubWluICYmIG9wdHMubWF4ICYmIG9wdHMuYmxvY2tzLlkuZnJvbSA9PT0gb3B0cy5ibG9ja3MuWS50bykge1xyXG5cdCAgICAgICAgb3B0cy5ibG9ja3MubS5mcm9tID0gb3B0cy5taW4uZ2V0TW9udGgoKSArIDE7XHJcblx0ICAgICAgICBvcHRzLmJsb2Nrcy5tLnRvID0gb3B0cy5tYXguZ2V0TW9udGgoKSArIDE7XHJcblxyXG5cdCAgICAgICAgaWYgKG9wdHMuYmxvY2tzLm0uZnJvbSA9PT0gb3B0cy5ibG9ja3MubS50bykge1xyXG5cdCAgICAgICAgICBvcHRzLmJsb2Nrcy5kLmZyb20gPSBvcHRzLm1pbi5nZXREYXRlKCk7XHJcblx0ICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBPYmplY3QuYXNzaWduKG9wdHMuYmxvY2tzLCBibG9ja3MpOyAvLyBhZGQgYXV0b2ZpeFxyXG5cclxuXHQgICAgICBPYmplY3Qua2V5cyhvcHRzLmJsb2NrcykuZm9yRWFjaChmdW5jdGlvbiAoYmspIHtcclxuXHQgICAgICAgIHZhciBiID0gb3B0cy5ibG9ja3NbYmtdO1xyXG5cdCAgICAgICAgaWYgKCEoJ2F1dG9maXgnIGluIGIpKSBiLmF1dG9maXggPSBvcHRzLmF1dG9maXg7XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcclxuXHQgICAgICB2YXIgX2dldDI7XHJcblxyXG5cdCAgICAgIHZhciBkYXRlID0gdGhpcy5kYXRlO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuXHQgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5pc0NvbXBsZXRlIHx8IHRoaXMuaXNEYXRlRXhpc3QodGhpcy52YWx1ZSkgJiYgZGF0ZSAhPSBudWxsICYmICh0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluIDw9IGRhdGUpICYmICh0aGlzLm1heCA9PSBudWxsIHx8IGRhdGUgPD0gdGhpcy5tYXgpKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogQ2hlY2tzIGlmIGRhdGUgaXMgZXhpc3RzICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiaXNEYXRlRXhpc3RcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRGF0ZUV4aXN0KHN0cikge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmZvcm1hdCh0aGlzLnBhcnNlKHN0ciwgdGhpcyksIHRoaXMpLmluZGV4T2Yoc3RyKSA+PSAwO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBQYXJzZWQgRGF0ZSAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRhdGVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMudHlwZWRWYWx1ZTtcclxuXHQgICAgfSxcclxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQoZGF0ZSkge1xyXG5cdCAgICAgIHRoaXMudHlwZWRWYWx1ZSA9IGRhdGU7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcInR5cGVkVmFsdWVcIiwgdGhpcykgOiBudWxsO1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdCAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJ0eXBlZFZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgfV0pO1xyXG5cclxuXHQgIHJldHVybiBNYXNrZWREYXRlO1xyXG5cdH0oTWFza2VkUGF0dGVybik7XHJcblx0TWFza2VkRGF0ZS5ERUZBVUxUUyA9IHtcclxuXHQgIHBhdHRlcm46ICdkey59YG17Ln1gWScsXHJcblx0ICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XHJcblx0ICAgIHZhciBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcblx0ICAgIHZhciBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG5cdCAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHQgICAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXS5qb2luKCcuJyk7XHJcblx0ICB9LFxyXG5cdCAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHN0cikge1xyXG5cdCAgICB2YXIgX3N0ciRzcGxpdCA9IHN0ci5zcGxpdCgnLicpLFxyXG5cdCAgICAgICAgX3N0ciRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfc3RyJHNwbGl0LCAzKSxcclxuXHQgICAgICAgIGRheSA9IF9zdHIkc3BsaXQyWzBdLFxyXG5cdCAgICAgICAgbW9udGggPSBfc3RyJHNwbGl0MlsxXSxcclxuXHQgICAgICAgIHllYXIgPSBfc3RyJHNwbGl0MlsyXTtcclxuXHJcblx0ICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XHJcblx0ICB9XHJcblx0fTtcclxuXHJcblx0TWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICByZXR1cm4ge1xyXG5cdCAgICBkOiB7XHJcblx0ICAgICAgbWFzazogTWFza2VkUmFuZ2UsXHJcblx0ICAgICAgZnJvbTogMSxcclxuXHQgICAgICB0bzogMzEsXHJcblx0ICAgICAgbWF4TGVuZ3RoOiAyXHJcblx0ICAgIH0sXHJcblx0ICAgIG06IHtcclxuXHQgICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcclxuXHQgICAgICBmcm9tOiAxLFxyXG5cdCAgICAgIHRvOiAxMixcclxuXHQgICAgICBtYXhMZW5ndGg6IDJcclxuXHQgICAgfSxcclxuXHQgICAgWToge1xyXG5cdCAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxyXG5cdCAgICAgIGZyb206IDE5MDAsXHJcblx0ICAgICAgdG86IDk5OTlcclxuXHQgICAgfVxyXG5cdCAgfTtcclxuXHR9O1xyXG5cclxuXHRJTWFzay5NYXNrZWREYXRlID0gTWFza2VkRGF0ZTtcclxuXHJcblx0LyoqXHJcblx0ICBHZW5lcmljIGVsZW1lbnQgQVBJIHRvIHVzZSB3aXRoIG1hc2tcclxuXHQgIEBpbnRlcmZhY2VcclxuXHQqL1xyXG5cdHZhciBNYXNrRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XHJcblx0ICBmdW5jdGlvbiBNYXNrRWxlbWVudCgpIHtcclxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tFbGVtZW50KTtcclxuXHQgIH1cclxuXHJcblx0ICBfY3JlYXRlQ2xhc3MoTWFza0VsZW1lbnQsIFt7XHJcblx0ICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxyXG5cdCAgICBnZXQ6XHJcblx0ICAgIC8qKiAqL1xyXG5cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cclxuXHQgICAgZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHZhciBzdGFydDtcclxuXHJcblx0ICAgICAgdHJ5IHtcclxuXHQgICAgICAgIHN0YXJ0ID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uU3RhcnQ7XHJcblx0ICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcblx0ICAgICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgPyBzdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gZW5kICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwic2VsZWN0aW9uRW5kXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHZhciBlbmQ7XHJcblxyXG5cdCAgICAgIHRyeSB7XHJcblx0ICAgICAgICBlbmQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25FbmQ7XHJcblx0ICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcblx0ICAgICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIFNhZmVseSBzZXRzIGVsZW1lbnQgc2VsZWN0aW9uICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwic2VsZWN0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3Qoc3RhcnQsIGVuZCkge1xyXG5cdCAgICAgIGlmIChzdGFydCA9PSBudWxsIHx8IGVuZCA9PSBudWxsIHx8IHN0YXJ0ID09PSB0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIGVuZCA9PT0gdGhpcy5zZWxlY3Rpb25FbmQpIHJldHVybjtcclxuXHJcblx0ICAgICAgdHJ5IHtcclxuXHQgICAgICAgIHRoaXMuX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKTtcclxuXHQgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHt9XHJcblx0ICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJpc0FjdGl2ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImJpbmRFdmVudHNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHt9XHJcblx0ICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ1bmJpbmRFdmVudHNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHt9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIE1hc2tFbGVtZW50O1xyXG5cdH0oKTtcclxuXHRJTWFzay5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xyXG5cclxuXHQvKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXHJcblxyXG5cdHZhciBIVE1MTWFza0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrRWxlbWVudCkge1xyXG5cdCAgX2luaGVyaXRzKEhUTUxNYXNrRWxlbWVudCwgX01hc2tFbGVtZW50KTtcclxuXHJcblx0ICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxNYXNrRWxlbWVudCk7XHJcblxyXG5cdCAgLyoqIE1hcHBpbmcgYmV0d2VlbiBIVE1MRWxlbWVudCBldmVudHMgYW5kIG1hc2sgaW50ZXJuYWwgZXZlbnRzICovXHJcblxyXG5cdCAgLyoqIEhUTUxFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXHJcblxyXG5cdCAgLyoqXHJcblx0ICAgIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxyXG5cdCAgKi9cclxuXHQgIGZ1bmN0aW9uIEhUTUxNYXNrRWxlbWVudChpbnB1dCkge1xyXG5cdCAgICB2YXIgX3RoaXM7XHJcblxyXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTE1hc2tFbGVtZW50KTtcclxuXHJcblx0ICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XHJcblx0ICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XHJcblx0ICAgIF90aGlzLl9oYW5kbGVycyA9IHt9O1xyXG5cdCAgICByZXR1cm4gX3RoaXM7XHJcblx0ICB9XHJcblx0ICAvKiogKi9cclxuXHQgIC8vICRGbG93Rml4TWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzI4MzlcclxuXHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKEhUTUxNYXNrRWxlbWVudCwgW3tcclxuXHQgICAga2V5OiBcInJvb3RFbGVtZW50XCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmlucHV0LmdldFJvb3ROb2RlID8gdGhpcy5pbnB1dC5nZXRSb290Tm9kZSgpIDogZG9jdW1lbnQ7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgSXMgZWxlbWVudCBpbiBmb2N1c1xyXG5cdCAgICAgIEByZWFkb25seVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImlzQWN0aXZlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIC8vJEZsb3dGaXhNZVxyXG5cdCAgICAgIHJldHVybiB0aGlzLmlucHV0ID09PSB0aGlzLnJvb3RFbGVtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gc3RhcnRcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvbkVuZFwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb25cclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHtcclxuXHQgICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEhUTUxFbGVtZW50IHZhbHVlXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidmFsdWVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0ICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImJpbmRFdmVudHNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHtcclxuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcblx0ICAgICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0ICAgICAgICByZXR1cm4gX3RoaXMyLl90b2dnbGVFdmVudEhhbmRsZXIoSFRNTE1hc2tFbGVtZW50LkVWRU5UU19NQVBbZXZlbnRdLCBoYW5kbGVyc1tldmVudF0pO1xyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XHJcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XHJcblxyXG5cdCAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2hhbmRsZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG5cdCAgICAgICAgcmV0dXJuIF90aGlzMy5fdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50KTtcclxuXHQgICAgICB9KTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfdG9nZ2xlRXZlbnRIYW5kbGVyXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKSB7XHJcblx0ICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW2V2ZW50XSkge1xyXG5cdCAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9oYW5kbGVyc1tldmVudF0pO1xyXG5cdCAgICAgICAgZGVsZXRlIHRoaXMuX2hhbmRsZXJzW2V2ZW50XTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIGlmIChoYW5kbGVyKSB7XHJcblx0ICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xyXG5cdCAgICAgICAgdGhpcy5faGFuZGxlcnNbZXZlbnRdID0gaGFuZGxlcjtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgIH1dKTtcclxuXHJcblx0ICByZXR1cm4gSFRNTE1hc2tFbGVtZW50O1xyXG5cdH0oTWFza0VsZW1lbnQpO1xyXG5cdEhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xyXG5cdCAgc2VsZWN0aW9uQ2hhbmdlOiAna2V5ZG93bicsXHJcblx0ICBpbnB1dDogJ2lucHV0JyxcclxuXHQgIGRyb3A6ICdkcm9wJyxcclxuXHQgIGNsaWNrOiAnY2xpY2snLFxyXG5cdCAgZm9jdXM6ICdmb2N1cycsXHJcblx0ICBjb21taXQ6ICdibHVyJ1xyXG5cdH07XHJcblx0SU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xyXG5cclxuXHR2YXIgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfSFRNTE1hc2tFbGVtZW50KSB7XHJcblx0ICBfaW5oZXJpdHMoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50LCBfSFRNTE1hc2tFbGVtZW50KTtcclxuXHJcblx0ICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCk7XHJcblxyXG5cdCAgZnVuY3Rpb24gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KCkge1xyXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KTtcclxuXHJcblx0ICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHQgIH1cclxuXHJcblx0ICBfY3JlYXRlQ2xhc3MoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50LCBbe1xyXG5cdCAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0XCIsXHJcblx0ICAgIGdldDpcclxuXHQgICAgLyoqXHJcblx0ICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gc3RhcnRcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHQgICAgZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcclxuXHQgICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcclxuXHQgICAgICByZXR1cm4gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQ7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvbkVuZFwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICB2YXIgcm9vdCA9IHRoaXMucm9vdEVsZW1lbnQ7XHJcblx0ICAgICAgdmFyIHNlbGVjdGlvbiA9IHJvb3QuZ2V0U2VsZWN0aW9uICYmIHJvb3QuZ2V0U2VsZWN0aW9uKCk7XHJcblx0ICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydCArIFN0cmluZyhzZWxlY3Rpb24pLmxlbmd0aDtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xyXG5cdCAgICAgIGlmICghdGhpcy5yb290RWxlbWVudC5jcmVhdGVSYW5nZSkgcmV0dXJuO1xyXG5cdCAgICAgIHZhciByYW5nZSA9IHRoaXMucm9vdEVsZW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuXHQgICAgICByYW5nZS5zZXRTdGFydCh0aGlzLmlucHV0LmZpcnN0Q2hpbGQgfHwgdGhpcy5pbnB1dCwgc3RhcnQpO1xyXG5cdCAgICAgIHJhbmdlLnNldEVuZCh0aGlzLmlucHV0Lmxhc3RDaGlsZCB8fCB0aGlzLmlucHV0LCBlbmQpO1xyXG5cdCAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcclxuXHQgICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcclxuXHJcblx0ICAgICAgaWYgKHNlbGVjdGlvbikge1xyXG5cdCAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG5cdCAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ2YWx1ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICAvLyAkRmxvd0ZpeE1lXHJcblx0ICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudGV4dENvbnRlbnQ7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0ICAgICAgdGhpcy5pbnB1dC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG5cdCAgICB9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcclxuXHR9KEhUTUxNYXNrRWxlbWVudCk7XHJcblx0SU1hc2suSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50O1xyXG5cclxuXHQvKiogTGlzdGVucyB0byBlbGVtZW50IGV2ZW50cyBhbmQgY29udHJvbHMgY2hhbmdlcyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXHJcblxyXG5cdHZhciBJbnB1dE1hc2sgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xyXG5cdCAgLyoqXHJcblx0ICAgIFZpZXcgZWxlbWVudFxyXG5cdCAgICBAcmVhZG9ubHlcclxuXHQgICovXHJcblxyXG5cdCAgLyoqXHJcblx0ICAgIEludGVybmFsIHtAbGluayBNYXNrZWR9IG1vZGVsXHJcblx0ICAgIEByZWFkb25seVxyXG5cdCAgKi9cclxuXHJcblx0ICAvKipcclxuXHQgICAgQHBhcmFtIHtNYXNrRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGVsXHJcblx0ICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcblx0ICAqL1xyXG5cdCAgZnVuY3Rpb24gSW5wdXRNYXNrKGVsLCBvcHRzKSB7XHJcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dE1hc2spO1xyXG5cclxuXHQgICAgdGhpcy5lbCA9IGVsIGluc3RhbmNlb2YgTWFza0VsZW1lbnQgPyBlbCA6IGVsLmlzQ29udGVudEVkaXRhYmxlICYmIGVsLnRhZ05hbWUgIT09ICdJTlBVVCcgJiYgZWwudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyA/IG5ldyBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQoZWwpIDogbmV3IEhUTUxNYXNrRWxlbWVudChlbCk7XHJcblx0ICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayhvcHRzKTtcclxuXHQgICAgdGhpcy5fbGlzdGVuZXJzID0ge307XHJcblx0ICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcblx0ICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSAnJztcclxuXHQgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbiA9IHRoaXMuX3NhdmVTZWxlY3Rpb24uYmluZCh0aGlzKTtcclxuXHQgICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcclxuXHQgICAgdGhpcy5fb25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdCAgICB0aGlzLl9vbkRyb3AgPSB0aGlzLl9vbkRyb3AuYmluZCh0aGlzKTtcclxuXHQgICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcclxuXHQgICAgdGhpcy5fb25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKTtcclxuXHQgICAgdGhpcy5hbGlnbkN1cnNvciA9IHRoaXMuYWxpZ25DdXJzb3IuYmluZCh0aGlzKTtcclxuXHQgICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5ID0gdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LmJpbmQodGhpcyk7XHJcblxyXG5cdCAgICB0aGlzLl9iaW5kRXZlbnRzKCk7IC8vIHJlZnJlc2hcclxuXHJcblxyXG5cdCAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XHJcblxyXG5cdCAgICB0aGlzLl9vbkNoYW5nZSgpO1xyXG5cdCAgfVxyXG5cdCAgLyoqIFJlYWQgb3IgdXBkYXRlIG1hc2sgKi9cclxuXHJcblxyXG5cdCAgX2NyZWF0ZUNsYXNzKElucHV0TWFzaywgW3tcclxuXHQgICAga2V5OiBcIm1hc2tcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KG1hc2spIHtcclxuXHQgICAgICBpZiAodGhpcy5tYXNrRXF1YWxzKG1hc2spKSByZXR1cm47XHJcblxyXG5cdCAgICAgIGlmICghKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpICYmIHRoaXMubWFza2VkLmNvbnN0cnVjdG9yID09PSBtYXNrZWRDbGFzcyhtYXNrKSkge1xyXG5cdCAgICAgICAgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyh7XHJcblx0ICAgICAgICAgIG1hc2s6IG1hc2tcclxuXHQgICAgICAgIH0pO1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2soe1xyXG5cdCAgICAgICAgbWFzazogbWFza1xyXG5cdCAgICAgIH0pO1xyXG5cdCAgICAgIG1hc2tlZC51bm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcclxuXHQgICAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogUmF3IHZhbHVlICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XHJcblx0ICAgICAgcmV0dXJuIG1hc2sgPT0gbnVsbCB8fCBtYXNrID09PSB0aGlzLm1hc2tlZC5tYXNrIHx8IG1hc2sgPT09IERhdGUgJiYgdGhpcy5tYXNrZWQgaW5zdGFuY2VvZiBNYXNrZWREYXRlO1xyXG5cdCAgICB9XHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ2YWx1ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xyXG5cdCAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gc3RyO1xyXG5cdCAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG5cdCAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogVW5tYXNrZWQgdmFsdWUgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLl91bm1hc2tlZFZhbHVlO1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdHIpIHtcclxuXHQgICAgICB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlID0gc3RyO1xyXG5cdCAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG5cdCAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogVHlwZWQgdW5tYXNrZWQgdmFsdWUgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLm1hc2tlZC50eXBlZFZhbHVlO1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcclxuXHQgICAgICB0aGlzLm1hc2tlZC50eXBlZFZhbHVlID0gdmFsO1xyXG5cdCAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xyXG5cdCAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBTdGFydHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXHJcblx0ICAgICAgQHByb3RlY3RlZFxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9iaW5kRXZlbnRzXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcclxuXHQgICAgICB0aGlzLmVsLmJpbmRFdmVudHMoe1xyXG5cdCAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxyXG5cdCAgICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXHJcblx0ICAgICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXHJcblx0ICAgICAgICBjbGljazogdGhpcy5fb25DbGljayxcclxuXHQgICAgICAgIGZvY3VzOiB0aGlzLl9vbkZvY3VzLFxyXG5cdCAgICAgICAgY29tbWl0OiB0aGlzLl9vbkNoYW5nZVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIFN0b3BzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xyXG5cdCAgICAgIEBwcm90ZWN0ZWRcclxuXHQgICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX3VuYmluZEV2ZW50c1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3VuYmluZEV2ZW50cygpIHtcclxuXHQgICAgICBpZiAodGhpcy5lbCkgdGhpcy5lbC51bmJpbmRFdmVudHMoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBGaXJlcyBjdXN0b20gZXZlbnRcclxuXHQgICAgICBAcHJvdGVjdGVkXHJcblx0ICAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9maXJlRXZlbnRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9maXJlRXZlbnQoZXYpIHtcclxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcblx0ICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xyXG5cdCAgICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47XHJcblx0ICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcclxuXHQgICAgICAgIHJldHVybiBsLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQ3VycmVudCBzZWxlY3Rpb24gc3RhcnRcclxuXHQgICAgICBAcmVhZG9ubHlcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPyB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6IHRoaXMuZWwuc2VsZWN0aW9uU3RhcnQ7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiY3Vyc29yUG9zXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25FbmQ7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHBvcykge1xyXG5cdCAgICAgIGlmICghdGhpcy5lbCB8fCAhdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xyXG5cdCAgICAgIHRoaXMuZWwuc2VsZWN0KHBvcywgcG9zKTtcclxuXHJcblx0ICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIFN0b3JlcyBjdXJyZW50IHNlbGVjdGlvblxyXG5cdCAgICAgIEBwcm90ZWN0ZWRcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfc2F2ZVNlbGVjdGlvblwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3NhdmVTZWxlY3Rpb24oKVxyXG5cdCAgICAvKiBldiAqL1xyXG5cdCAgICB7XHJcblx0ICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcclxuXHQgICAgICAgIGNvbnNvbGUud2FybignRWxlbWVudCB2YWx1ZSB3YXMgY2hhbmdlZCBvdXRzaWRlIG9mIG1hc2suIFN5bmNyb25pemUgbWFzayB1c2luZyBgbWFzay51cGRhdGVWYWx1ZSgpYCB0byB3b3JrIHByb3Blcmx5LicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcclxuXHQgICAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxyXG5cdCAgICAgICAgZW5kOiB0aGlzLmN1cnNvclBvc1xyXG5cdCAgICAgIH07XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIFN5bmNyb25pemVzIG1vZGVsIHZhbHVlIGZyb20gdmlldyAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInVwZGF0ZVZhbHVlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpIHtcclxuXHQgICAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHRoaXMuZWwudmFsdWU7XHJcblx0ICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogU3luY3Jvbml6ZXMgdmlldyBmcm9tIG1vZGVsIHZhbHVlLCBmaXJlcyBjaGFuZ2UgZXZlbnRzICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidXBkYXRlQ29udHJvbFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ29udHJvbCgpIHtcclxuXHQgICAgICB2YXIgbmV3VW5tYXNrZWRWYWx1ZSA9IHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XHJcblx0ICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XHJcblx0ICAgICAgdmFyIGlzQ2hhbmdlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZSAhPT0gbmV3VW5tYXNrZWRWYWx1ZSB8fCB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcclxuXHQgICAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gbmV3VW5tYXNrZWRWYWx1ZTtcclxuXHQgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG5cdCAgICAgIGlmICh0aGlzLmVsLnZhbHVlICE9PSBuZXdWYWx1ZSkgdGhpcy5lbC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG5cdCAgICAgIGlmIChpc0NoYW5nZWQpIHRoaXMuX2ZpcmVDaGFuZ2VFdmVudHMoKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogVXBkYXRlcyBvcHRpb25zIHdpdGggZGVlcCBlcXVhbCBjaGVjaywgcmVjcmVhdGVzIEB7bGluayBNYXNrZWR9IG1vZGVsIGlmIG1hc2sgdHlwZSBjaGFuZ2VzICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidXBkYXRlT3B0aW9uc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XHJcblx0ICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXHJcblx0ICAgICAgICAgIHJlc3RPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIFtcIm1hc2tcIl0pO1xyXG5cclxuXHQgICAgICB2YXIgdXBkYXRlTWFzayA9ICF0aGlzLm1hc2tFcXVhbHMobWFzayk7XHJcblx0ICAgICAgdmFyIHVwZGF0ZU9wdHMgPSAhb2JqZWN0SW5jbHVkZXModGhpcy5tYXNrZWQsIHJlc3RPcHRzKTtcclxuXHQgICAgICBpZiAodXBkYXRlTWFzaykgdGhpcy5tYXNrID0gbWFzaztcclxuXHQgICAgICBpZiAodXBkYXRlT3B0cykgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyhyZXN0T3B0cyk7XHJcblx0ICAgICAgaWYgKHVwZGF0ZU1hc2sgfHwgdXBkYXRlT3B0cykgdGhpcy51cGRhdGVDb250cm9sKCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIFVwZGF0ZXMgY3Vyc29yICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidXBkYXRlQ3Vyc29yXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XHJcblx0ICAgICAgaWYgKGN1cnNvclBvcyA9PSBudWxsKSByZXR1cm47XHJcblx0ICAgICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7IC8vIGFsc28gcXVldWUgY2hhbmdlIGN1cnNvciBmb3IgbW9iaWxlIGJyb3dzZXJzXHJcblxyXG5cdCAgICAgIHRoaXMuX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnNcclxuXHQgICAgICBAcHJpdmF0ZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9kZWxheVVwZGF0ZUN1cnNvclwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xyXG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdCAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XHJcblxyXG5cdCAgICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zID0gY3Vyc29yUG9zO1xyXG5cdCAgICAgIHRoaXMuX2N1cnNvckNoYW5naW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICBpZiAoIV90aGlzLmVsKSByZXR1cm47IC8vIGlmIHdhcyBkZXN0cm95ZWRcclxuXHJcblx0ICAgICAgICBfdGhpcy5jdXJzb3JQb3MgPSBfdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3M7XHJcblxyXG5cdCAgICAgICAgX3RoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XHJcblx0ICAgICAgfSwgMTApO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEZpcmVzIGN1c3RvbSBldmVudHNcclxuXHQgICAgICBAcHJvdGVjdGVkXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2ZpcmVDaGFuZ2VFdmVudHNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9maXJlQ2hhbmdlRXZlbnRzKCkge1xyXG5cdCAgICAgIHRoaXMuX2ZpcmVFdmVudCgnYWNjZXB0JywgdGhpcy5faW5wdXRFdmVudCk7XHJcblxyXG5cdCAgICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJywgdGhpcy5faW5wdXRFdmVudCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQWJvcnRzIGRlbGF5ZWQgY3Vyc29yIHVwZGF0ZVxyXG5cdCAgICAgIEBwcml2YXRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2Fib3J0VXBkYXRlQ3Vyc29yXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfYWJvcnRVcGRhdGVDdXJzb3IoKSB7XHJcblx0ICAgICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XHJcblx0ICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY3Vyc29yQ2hhbmdpbmcpO1xyXG5cdCAgICAgICAgZGVsZXRlIHRoaXMuX2N1cnNvckNoYW5naW5nO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cdCAgICAvKiogQWxpZ25zIGN1cnNvciB0byBuZWFyZXN0IGF2YWlsYWJsZSBwb3NpdGlvbiAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImFsaWduQ3Vyc29yXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvcigpIHtcclxuXHQgICAgICB0aGlzLmN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLmN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiYWxpZ25DdXJzb3JGcmllbmRseVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYWxpZ25DdXJzb3JGcmllbmRseSgpIHtcclxuXHQgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy5jdXJzb3JQb3MpIHJldHVybjsgLy8gc2tpcCBpZiByYW5nZSBpcyBzZWxlY3RlZFxyXG5cclxuXHQgICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwib25cIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2LCBoYW5kbGVyKSB7XHJcblx0ICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSB0aGlzLl9saXN0ZW5lcnNbZXZdID0gW107XHJcblxyXG5cdCAgICAgIHRoaXMuX2xpc3RlbmVyc1tldl0ucHVzaChoYW5kbGVyKTtcclxuXHJcblx0ICAgICAgcmV0dXJuIHRoaXM7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIFJlbW92ZXMgY3VzdG9tIGV2ZW50IGxpc3RlbmVyICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwib2ZmXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXYsIGhhbmRsZXIpIHtcclxuXHQgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tldl0pIHJldHVybiB0aGlzO1xyXG5cclxuXHQgICAgICBpZiAoIWhhbmRsZXIpIHtcclxuXHQgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xyXG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICB2YXIgaEluZGV4ID0gdGhpcy5fbGlzdGVuZXJzW2V2XS5pbmRleE9mKGhhbmRsZXIpO1xyXG5cclxuXHQgICAgICBpZiAoaEluZGV4ID49IDApIHRoaXMuX2xpc3RlbmVyc1tldl0uc3BsaWNlKGhJbmRleCwgMSk7XHJcblx0ICAgICAgcmV0dXJuIHRoaXM7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIEhhbmRsZXMgdmlldyBpbnB1dCBldmVudCAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9vbklucHV0XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfb25JbnB1dChlKSB7XHJcblx0ICAgICAgdGhpcy5faW5wdXRFdmVudCA9IGU7XHJcblxyXG5cdCAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7IC8vIGZpeCBzdHJhbmdlIElFIGJlaGF2aW9yXHJcblxyXG5cclxuXHQgICAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbikgcmV0dXJuIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuXHQgICAgICB2YXIgZGV0YWlscyA9IG5ldyBBY3Rpb25EZXRhaWxzKCAvLyBuZXcgc3RhdGVcclxuXHQgICAgICB0aGlzLmVsLnZhbHVlLCB0aGlzLmN1cnNvclBvcywgLy8gb2xkIHN0YXRlXHJcblx0ICAgICAgdGhpcy52YWx1ZSwgdGhpcy5fc2VsZWN0aW9uKTtcclxuXHQgICAgICB2YXIgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xyXG5cdCAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm1hc2tlZC5zcGxpY2UoZGV0YWlscy5zdGFydENoYW5nZVBvcywgZGV0YWlscy5yZW1vdmVkLmxlbmd0aCwgZGV0YWlscy5pbnNlcnRlZCwgZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24pLm9mZnNldDsgLy8gZm9yY2UgYWxpZ24gaW4gcmVtb3ZlIGRpcmVjdGlvbiBvbmx5IGlmIG5vIGlucHV0IGNoYXJzIHdlcmUgcmVtb3ZlZFxyXG5cdCAgICAgIC8vIG90aGVyd2lzZSB3ZSBzdGlsbCBuZWVkIHRvIGFsaWduIHdpdGggTk9ORSAodG8gZ2V0IG91dCBmcm9tIGZpeGVkIHN5bWJvbHMgZm9yIGluc3RhbmNlKVxyXG5cclxuXHQgICAgICB2YXIgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xyXG5cdCAgICAgIHZhciBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcclxuXHQgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcclxuXHQgICAgICB0aGlzLnVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xyXG5cdCAgICAgIGRlbGV0ZSB0aGlzLl9pbnB1dEV2ZW50O1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBIYW5kbGVzIHZpZXcgY2hhbmdlIGV2ZW50IGFuZCBjb21taXRzIG1vZGVsIHZhbHVlICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX29uQ2hhbmdlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DaGFuZ2UoKSB7XHJcblx0ICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcclxuXHQgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XHJcblx0ICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XHJcblxyXG5cdCAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogSGFuZGxlcyB2aWV3IGRyb3AgZXZlbnQsIHByZXZlbnRzIGJ5IGRlZmF1bHQgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfb25Ecm9wXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Ecm9wKGV2KSB7XHJcblx0ICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9vbkZvY3VzXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Gb2N1cyhldikge1xyXG5cdCAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX29uQ2xpY2tcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNsaWNrKGV2KSB7XHJcblx0ICAgICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqIFVuYmluZCB2aWV3IGV2ZW50cyBhbmQgcmVtb3ZlcyBlbGVtZW50IHJlZmVyZW5jZSAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRlc3Ryb3lcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcblx0ICAgICAgdGhpcy5fdW5iaW5kRXZlbnRzKCk7IC8vICRGbG93Rml4TWUgd2h5IG5vdCBkbyBzbz9cclxuXHJcblxyXG5cdCAgICAgIHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPSAwOyAvLyAkRmxvd0ZpeE1lXHJcblxyXG5cdCAgICAgIGRlbGV0ZSB0aGlzLmVsO1xyXG5cdCAgICB9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIElucHV0TWFzaztcclxuXHR9KCk7XHJcblx0SU1hc2suSW5wdXRNYXNrID0gSW5wdXRNYXNrO1xyXG5cclxuXHQvKiogUGF0dGVybiB3aGljaCB2YWxpZGF0ZXMgZW51bSB2YWx1ZXMgKi9cclxuXHJcblx0dmFyIE1hc2tlZEVudW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XHJcblx0ICBfaW5oZXJpdHMoTWFza2VkRW51bSwgX01hc2tlZFBhdHRlcm4pO1xyXG5cclxuXHQgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRW51bSk7XHJcblxyXG5cdCAgZnVuY3Rpb24gTWFza2VkRW51bSgpIHtcclxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZEVudW0pO1xyXG5cclxuXHQgICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdCAgfVxyXG5cclxuXHQgIF9jcmVhdGVDbGFzcyhNYXNrZWRFbnVtLCBbe1xyXG5cdCAgICBrZXk6IFwiX3VwZGF0ZVwiLFxyXG5cdCAgICB2YWx1ZTpcclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuXHQgICAgKi9cclxuXHQgICAgZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XHJcblx0ICAgICAgLy8gVE9ETyB0eXBlXHJcblx0ICAgICAgaWYgKG9wdHMuZW51bSkgb3B0cy5tYXNrID0gJyonLnJlcGVhdChvcHRzLmVudW1bMF0ubGVuZ3RoKTtcclxuXHJcblx0ICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xyXG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXMsXHJcblx0ICAgICAgICAgIF9nZXQyO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuXHQgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gdGhpcy5lbnVtLnNvbWUoZnVuY3Rpb24gKGUpIHtcclxuXHQgICAgICAgIHJldHVybiBlLmluZGV4T2YoX3RoaXMudW5tYXNrZWRWYWx1ZSkgPj0gMDtcclxuXHQgICAgICB9KSAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XHJcblx0ICAgIH1cclxuXHQgIH1dKTtcclxuXHJcblx0ICByZXR1cm4gTWFza2VkRW51bTtcclxuXHR9KE1hc2tlZFBhdHRlcm4pO1xyXG5cdElNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xyXG5cclxuXHQvKipcclxuXHQgIE51bWJlciBtYXNrXHJcblx0ICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG5cdCAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucmFkaXggLSBTaW5nbGUgY2hhclxyXG5cdCAgQHBhcmFtIHtzdHJpbmd9IG9wdHMudGhvdXNhbmRzU2VwYXJhdG9yIC0gU2luZ2xlIGNoYXJcclxuXHQgIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb3B0cy5tYXBUb1JhZGl4IC0gQXJyYXkgb2Ygc2luZ2xlIGNoYXJzXHJcblx0ICBAcGFyYW0ge251bWJlcn0gb3B0cy5taW5cclxuXHQgIEBwYXJhbSB7bnVtYmVyfSBvcHRzLm1heFxyXG5cdCAgQHBhcmFtIHtudW1iZXJ9IG9wdHMuc2NhbGUgLSBEaWdpdHMgYWZ0ZXIgcG9pbnRcclxuXHQgIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5zaWduZWQgLSBBbGxvdyBuZWdhdGl2ZVxyXG5cdCAgQHBhcmFtIHtib29sZWFufSBvcHRzLm5vcm1hbGl6ZVplcm9zIC0gRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcblx0ICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucGFkRnJhY3Rpb25hbFplcm9zIC0gRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcblx0Ki9cclxuXHR2YXIgTWFza2VkTnVtYmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XHJcblx0ICBfaW5oZXJpdHMoTWFza2VkTnVtYmVyLCBfTWFza2VkKTtcclxuXHJcblx0ICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZE51bWJlcik7XHJcblxyXG5cdCAgLyoqIFNpbmdsZSBjaGFyICovXHJcblxyXG5cdCAgLyoqIFNpbmdsZSBjaGFyICovXHJcblxyXG5cdCAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiAqL1xyXG5cclxuXHQgIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cclxuXHJcblx0ICAvKiogKi9cclxuXHJcblx0ICAvKiogRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXHJcblxyXG5cdCAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xyXG5cdCAgZnVuY3Rpb24gTWFza2VkTnVtYmVyKG9wdHMpIHtcclxuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZE51bWJlcik7XHJcblxyXG5cdCAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkTnVtYmVyLkRFRkFVTFRTLCBvcHRzKSk7XHJcblx0ICB9XHJcblx0ICAvKipcclxuXHQgICAgQG92ZXJyaWRlXHJcblx0ICAqL1xyXG5cclxuXHJcblx0ICBfY3JlYXRlQ2xhc3MoTWFza2VkTnVtYmVyLCBbe1xyXG5cdCAgICBrZXk6IFwiX3VwZGF0ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XHJcblx0ICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xyXG5cclxuXHQgICAgICB0aGlzLl91cGRhdGVSZWdFeHBzKCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX3VwZGF0ZVJlZ0V4cHNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSZWdFeHBzKCkge1xyXG5cdCAgICAgIC8vIHVzZSBkaWZmZXJlbnQgcmVnZXhwIHRvIHByb2Nlc3MgdXNlciBpbnB1dCAobW9yZSBzdHJpY3QsIGlucHV0IHN1ZmZpeCkgYW5kIHRhaWwgc2hpZnRpbmdcclxuXHQgICAgICB2YXIgc3RhcnQgPSAnXicgKyAodGhpcy5hbGxvd05lZ2F0aXZlID8gJ1srfFxcXFwtXT8nIDogJycpO1xyXG5cdCAgICAgIHZhciBtaWRJbnB1dCA9ICcoMHwoWzEtOV0rXFxcXGQqKSk/JztcclxuXHQgICAgICB2YXIgbWlkID0gJ1xcXFxkKic7XHJcblx0ICAgICAgdmFyIGVuZCA9ICh0aGlzLnNjYWxlID8gJygnICsgZXNjYXBlUmVnRXhwKHRoaXMucmFkaXgpICsgJ1xcXFxkezAsJyArIHRoaXMuc2NhbGUgKyAnfSk/JyA6ICcnKSArICckJztcclxuXHQgICAgICB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWRJbnB1dCArIGVuZCk7XHJcblx0ICAgICAgdGhpcy5fbnVtYmVyUmVnRXhwID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZCArIGVuZCk7XHJcblx0ICAgICAgdGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ1snICsgdGhpcy5tYXBUb1JhZGl4Lm1hcChlc2NhcGVSZWdFeHApLmpvaW4oJycpICsgJ10nLCAnZycpO1xyXG5cdCAgICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcclxuXHQgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAsICcnKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcclxuXHQgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTAxMTAyL2hvdy10by1wcmludC1hLW51bWJlci13aXRoLWNvbW1hcy1hcy10aG91c2FuZHMtc2VwYXJhdG9ycy1pbi1qYXZhc2NyaXB0XHJcblx0ICAgICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XHJcblx0ICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XHJcblx0ICAgICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XHJcblx0ICAgICAgdmFyIF9nZXQyO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcblx0ICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzLCB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHN0ci5yZXBsYWNlKHRoaXMuX21hcFRvUmFkaXhSZWdFeHAsIHRoaXMucmFkaXgpKV0uY29uY2F0KGFyZ3MpKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50XCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50KHRvKSB7XHJcblx0ICAgICAgdmFyIGV4dGVuZE9uU2VwYXJhdG9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XHJcblx0ICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcblx0ICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XHJcblx0ICAgICAgICBpZiAodGhpcy5fdmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgcG9zKSA9PT0gcG9zKSB7XHJcblx0ICAgICAgICAgICsrY291bnQ7XHJcblx0ICAgICAgICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMpIHRvICs9IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcclxuXHQgICAgICAgIH1cclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiBjb3VudDtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKCkge1xyXG5cdCAgICAgIHZhciBzbGljZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5fdmFsdWU7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcnNDb3VudCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHNsaWNlKS5sZW5ndGgsIHRydWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xyXG5cdCAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xyXG5cdCAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XHJcblx0ICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XHJcblxyXG5cdCAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcclxuXHJcblx0ICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQsIDIpO1xyXG5cclxuXHQgICAgICBmcm9tUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlswXTtcclxuXHQgICAgICB0b1BvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDJbMV07XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZXh0cmFjdElucHV0XCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XHJcblx0ICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcclxuXHQgICAgICBpZiAoIXRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX2FwcGVuZENoYXJSYXdcIiwgdGhpcykuY2FsbCh0aGlzLCBjaCwgZmxhZ3MpO1xyXG5cdCAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLl92YWx1ZTtcclxuXHJcblx0ICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHByZXZCZWZvcmVUYWlsVmFsdWUpO1xyXG5cclxuXHQgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSk7XHJcblxyXG5cdCAgICAgIHZhciBhcHBlbmREZXRhaWxzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX2FwcGVuZENoYXJSYXdcIiwgdGhpcykuY2FsbCh0aGlzLCBjaCwgZmxhZ3MpO1xyXG5cclxuXHQgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fdmFsdWUpO1xyXG5cdCAgICAgIHZhciBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xyXG5cclxuXHQgICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShiZWZvcmVUYWlsVmFsdWUpO1xyXG5cclxuXHQgICAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcclxuXHQgICAgICBhcHBlbmREZXRhaWxzLnNraXAgPSAhYXBwZW5kRGV0YWlscy5yYXdJbnNlcnRlZCAmJiBjaCA9PT0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3I7XHJcblx0ICAgICAgcmV0dXJuIGFwcGVuZERldGFpbHM7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2ZpbmRTZXBhcmF0b3JBcm91bmRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xyXG5cdCAgICAgIGlmICh0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikge1xyXG5cdCAgICAgICAgdmFyIHNlYXJjaEZyb20gPSBwb3MgLSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGggKyAxO1xyXG5cdCAgICAgICAgdmFyIHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XHJcblx0ICAgICAgICBpZiAoc2VwYXJhdG9yUG9zIDw9IHBvcykgcmV0dXJuIHNlcGFyYXRvclBvcztcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiAtMTtcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnNcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XHJcblx0ICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGZyb20pO1xyXG5cclxuXHQgICAgICBpZiAoc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA+PSAwKSBmcm9tID0gc2VwYXJhdG9yQXJvdW5kRnJvbVBvcztcclxuXHJcblx0ICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZFRvUG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZCh0byk7XHJcblxyXG5cdCAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRUb1BvcyA+PSAwKSB0byA9IHNlcGFyYXRvckFyb3VuZFRvUG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xyXG5cdCAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInJlbW92ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG5cdCAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xyXG5cdCAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XHJcblxyXG5cdCAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XHJcblxyXG5cdCAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0ID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0MywgMik7XHJcblxyXG5cdCAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzBdO1xyXG5cdCAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0NFsxXTtcclxuXHQgICAgICB2YXIgdmFsdWVCZWZvcmVQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpO1xyXG5cdCAgICAgIHZhciB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XHJcblxyXG5cdCAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudCh2YWx1ZUJlZm9yZVBvcy5sZW5ndGgpO1xyXG5cclxuXHQgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZUJlZm9yZVBvcyArIHZhbHVlQWZ0ZXJQb3MpKTtcclxuXHJcblx0ICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xyXG5cclxuXHQgICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xyXG5cdCAgICAgICAgdGFpbFNoaWZ0OiAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aFxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XHJcblx0ICAgICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIGN1cnNvclBvcztcclxuXHJcblx0ICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuXHQgICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XHJcblx0ICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxyXG5cdCAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcclxuXHQgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xyXG5cclxuXHQgICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRMZWZ0UG9zID49IDApIHtcclxuXHQgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRFbmRQb3MgPSBzZXBhcmF0b3JBdExlZnRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XHJcblxyXG5cdCAgICAgICAgICAgICAgaWYgKGN1cnNvclBvcyA8IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8PSBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xyXG5cdCAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgYnJlYWs7XHJcblx0ICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcclxuXHQgICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxyXG5cdCAgICAgICAgICB7XHJcblx0ICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0UmlnaHRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyk7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcclxuXHQgICAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdFJpZ2h0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGN1cnNvclBvcztcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XHJcblx0ICAgICAgdmFyIHJlZ2V4cCA9IGZsYWdzLmlucHV0ID8gdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgOiB0aGlzLl9udW1iZXJSZWdFeHA7IC8vIHZhbGlkYXRlIGFzIHN0cmluZ1xyXG5cclxuXHQgICAgICB2YXIgdmFsaWQgPSByZWdleHAudGVzdCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpKTtcclxuXHJcblx0ICAgICAgaWYgKHZhbGlkKSB7XHJcblx0ICAgICAgICAvLyB2YWxpZGF0ZSBhcyBudW1iZXJcclxuXHQgICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcclxuXHQgICAgICAgIHZhbGlkID0gdmFsaWQgJiYgIWlzTmFOKG51bWJlcikgJiYgKCAvLyBjaGVjayBtaW4gYm91bmQgZm9yIG5lZ2F0aXZlIHZhbHVlc1xyXG5cdCAgICAgICAgdGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA+PSAwIHx8IHRoaXMubWluIDw9IHRoaXMubnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1heCBib3VuZCBmb3IgcG9zaXRpdmUgdmFsdWVzXHJcblx0ICAgICAgICB0aGlzLm1heCA9PSBudWxsIHx8IHRoaXMubWF4IDw9IDAgfHwgdGhpcy5udW1iZXIgPD0gdGhpcy5tYXgpO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIHZhbGlkICYmIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBmbGFncyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZG9Db21taXRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xyXG5cdCAgICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcblx0ICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXI7XHJcblx0ICAgICAgICB2YXIgdmFsaWRudW0gPSBudW1iZXI7IC8vIGNoZWNrIGJvdW5kc1xyXG5cclxuXHQgICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XHJcblx0ICAgICAgICBpZiAodGhpcy5tYXggIT0gbnVsbCkgdmFsaWRudW0gPSBNYXRoLm1pbih2YWxpZG51bSwgdGhpcy5tYXgpO1xyXG5cdCAgICAgICAgaWYgKHZhbGlkbnVtICE9PSBudW1iZXIpIHRoaXMudW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWxpZG51bSk7XHJcblx0ICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcclxuXHQgICAgICAgIGlmICh0aGlzLm5vcm1hbGl6ZVplcm9zKSBmb3JtYXR0ZWQgPSB0aGlzLl9ub3JtYWxpemVaZXJvcyhmb3JtYXR0ZWQpO1xyXG5cdCAgICAgICAgaWYgKHRoaXMucGFkRnJhY3Rpb25hbFplcm9zKSBmb3JtYXR0ZWQgPSB0aGlzLl9wYWRGcmFjdGlvbmFsWmVyb3MoZm9ybWF0dGVkKTtcclxuXHQgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJfbm9ybWFsaXplWmVyb3NcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3JtYWxpemVaZXJvcyh2YWx1ZSkge1xyXG5cdCAgICAgIHZhciBwYXJ0cyA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpLnNwbGl0KHRoaXMucmFkaXgpOyAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xyXG5cclxuXHJcblx0ICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9eKFxcRCopKDAqKShcXGQqKS8sIGZ1bmN0aW9uIChtYXRjaCwgc2lnbiwgemVyb3MsIG51bSkge1xyXG5cdCAgICAgICAgcmV0dXJuIHNpZ24gKyBudW07XHJcblx0ICAgICAgfSk7IC8vIGFkZCBsZWFkaW5nIHplcm9cclxuXHJcblx0ICAgICAgaWYgKHZhbHVlLmxlbmd0aCAmJiAhL1xcZCQvLnRlc3QocGFydHNbMF0pKSBwYXJ0c1swXSA9IHBhcnRzWzBdICsgJzAnO1xyXG5cclxuXHQgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xyXG5cdCAgICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKiQvLCAnJyk7IC8vIHJlbW92ZSB0cmFpbGluZyB6ZXJvc1xyXG5cclxuXHQgICAgICAgIGlmICghcGFydHNbMV0ubGVuZ3RoKSBwYXJ0cy5sZW5ndGggPSAxOyAvLyByZW1vdmUgZnJhY3Rpb25hbFxyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMocGFydHMuam9pbih0aGlzLnJhZGl4KSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX3BhZEZyYWN0aW9uYWxaZXJvc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3BhZEZyYWN0aW9uYWxaZXJvcyh2YWx1ZSkge1xyXG5cdCAgICAgIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcclxuXHQgICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcclxuXHQgICAgICBpZiAocGFydHMubGVuZ3RoIDwgMikgcGFydHMucHVzaCgnJyk7XHJcblx0ICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5wYWRFbmQodGhpcy5zY2FsZSwgJzAnKTtcclxuXHQgICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX25vcm1hbGl6ZVplcm9zKHRoaXMudmFsdWUpKS5yZXBsYWNlKHRoaXMucmFkaXgsICcuJyk7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcclxuXHQgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUucmVwbGFjZSgnLicsIHRoaXMucmFkaXgpLCB0aGlzLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiBOdW1iZXIodGhpcy51bm1hc2tlZFZhbHVlKTtcclxuXHQgICAgfSxcclxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQobikge1xyXG5cdCAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgU3RyaW5nKG4pLCB0aGlzLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKiogUGFyc2VkIE51bWJlciAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIm51bWJlclwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy50eXBlZFZhbHVlO1xyXG5cdCAgICB9LFxyXG5cdCAgICBzZXQ6IGZ1bmN0aW9uIHNldChudW1iZXIpIHtcclxuXHQgICAgICB0aGlzLnR5cGVkVmFsdWUgPSBudW1iZXI7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgSXMgbmVnYXRpdmUgYWxsb3dlZFxyXG5cdCAgICAgIEByZWFkb25seVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImFsbG93TmVnYXRpdmVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuc2lnbmVkIHx8IHRoaXMubWluICE9IG51bGwgJiYgdGhpcy5taW4gPCAwIHx8IHRoaXMubWF4ICE9IG51bGwgJiYgdGhpcy5tYXggPCAwO1xyXG5cdCAgICB9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIE1hc2tlZE51bWJlcjtcclxuXHR9KE1hc2tlZCk7XHJcblx0TWFza2VkTnVtYmVyLkRFRkFVTFRTID0ge1xyXG5cdCAgcmFkaXg6ICcsJyxcclxuXHQgIHRob3VzYW5kc1NlcGFyYXRvcjogJycsXHJcblx0ICBtYXBUb1JhZGl4OiBbJy4nXSxcclxuXHQgIHNjYWxlOiAyLFxyXG5cdCAgc2lnbmVkOiBmYWxzZSxcclxuXHQgIG5vcm1hbGl6ZVplcm9zOiB0cnVlLFxyXG5cdCAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZVxyXG5cdH07XHJcblx0SU1hc2suTWFza2VkTnVtYmVyID0gTWFza2VkTnVtYmVyO1xyXG5cclxuXHQvKiogTWFza2luZyBieSBjdXN0b20gRnVuY3Rpb24gKi9cclxuXHJcblx0dmFyIE1hc2tlZEZ1bmN0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XHJcblx0ICBfaW5oZXJpdHMoTWFza2VkRnVuY3Rpb24sIF9NYXNrZWQpO1xyXG5cclxuXHQgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRnVuY3Rpb24pO1xyXG5cclxuXHQgIGZ1bmN0aW9uIE1hc2tlZEZ1bmN0aW9uKCkge1xyXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRnVuY3Rpb24pO1xyXG5cclxuXHQgICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdCAgfVxyXG5cclxuXHQgIF9jcmVhdGVDbGFzcyhNYXNrZWRGdW5jdGlvbiwgW3tcclxuXHQgICAga2V5OiBcIl91cGRhdGVcIixcclxuXHQgICAgdmFsdWU6XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcblx0ICAgICovXHJcblx0ICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xyXG5cdCAgICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBvcHRzLm1hc2s7XHJcblxyXG5cdCAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEZ1bmN0aW9uLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xyXG5cdCAgICB9XHJcblx0ICB9XSk7XHJcblxyXG5cdCAgcmV0dXJuIE1hc2tlZEZ1bmN0aW9uO1xyXG5cdH0oTWFza2VkKTtcclxuXHRJTWFzay5NYXNrZWRGdW5jdGlvbiA9IE1hc2tlZEZ1bmN0aW9uO1xyXG5cclxuXHQvKiogRHluYW1pYyBtYXNrIGZvciBjaG9vc2luZyBhcHJvcHJpYXRlIG1hc2sgaW4gcnVuLXRpbWUgKi9cclxuXHR2YXIgTWFza2VkRHluYW1pYyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xyXG5cdCAgX2luaGVyaXRzKE1hc2tlZER5bmFtaWMsIF9NYXNrZWQpO1xyXG5cclxuXHQgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRHluYW1pYyk7XHJcblxyXG5cdCAgLyoqIEN1cnJlbnRseSBjaG9zZW4gbWFzayAqL1xyXG5cclxuXHQgIC8qKiBDb21wbGlsZWQge0BsaW5rIE1hc2tlZH0gb3B0aW9ucyAqL1xyXG5cclxuXHQgIC8qKiBDaG9vc2VzIHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBpbnB1dCB2YWx1ZSAqL1xyXG5cclxuXHQgIC8qKlxyXG5cdCAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG5cdCAgKi9cclxuXHQgIGZ1bmN0aW9uIE1hc2tlZER5bmFtaWMob3B0cykge1xyXG5cdCAgICB2YXIgX3RoaXM7XHJcblxyXG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRHluYW1pYyk7XHJcblxyXG5cdCAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZER5bmFtaWMuREVGQVVMVFMsIG9wdHMpKTtcclxuXHQgICAgX3RoaXMuY3VycmVudE1hc2sgPSBudWxsO1xyXG5cdCAgICByZXR1cm4gX3RoaXM7XHJcblx0ICB9XHJcblx0ICAvKipcclxuXHQgICAgQG92ZXJyaWRlXHJcblx0ICAqL1xyXG5cclxuXHJcblx0ICBfY3JlYXRlQ2xhc3MoTWFza2VkRHluYW1pYywgW3tcclxuXHQgICAga2V5OiBcIl91cGRhdGVcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xyXG5cdCAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XHJcblxyXG5cdCAgICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xyXG5cdCAgICAgICAgLy8gbWFzayBjb3VsZCBiZSB0b3RhbGx5IGR5bmFtaWMgd2l0aCBvbmx5IGBkaXNwYXRjaGAgb3B0aW9uXHJcblx0ICAgICAgICB0aGlzLmNvbXBpbGVkTWFza3MgPSBBcnJheS5pc0FycmF5KG9wdHMubWFzaykgPyBvcHRzLm1hc2subWFwKGZ1bmN0aW9uIChtKSB7XHJcblx0ICAgICAgICAgIHJldHVybiBjcmVhdGVNYXNrKG0pO1xyXG5cdCAgICAgICAgfSkgOiBbXTtcclxuXHQgICAgICB9XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XHJcblx0ICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcclxuXHJcblx0ICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoKGNoLCBmbGFncyk7XHJcblxyXG5cdCAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XHJcblx0ICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRDaGFyKGNoLCBmbGFncykpO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIGRldGFpbHM7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIl9hcHBseURpc3BhdGNoXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwbHlEaXNwYXRjaCgpIHtcclxuXHQgICAgICB2YXIgYXBwZW5kZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xyXG5cdCAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XHJcblx0ICAgICAgdmFyIHByZXZWYWx1ZUJlZm9yZVRhaWwgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy52YWx1ZTtcclxuXHQgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcclxuXHQgICAgICB2YXIgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IC8vICRGbG93Rml4TWUgLSB0aXJlZCB0byBmaWdodCB3aXRoIHR5cGUgc3lzdGVtXHJcblx0ICAgICAgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fcmF3SW5wdXRWYWx1ZSA6IGlucHV0VmFsdWU7XHJcblx0ICAgICAgdmFyIHRhaWxWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UoaW5zZXJ0VmFsdWUubGVuZ3RoKTtcclxuXHQgICAgICB2YXIgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xyXG5cdCAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHQgICAgICB2YXIgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrICYmIHByZXZNYXNrLnN0YXRlOyAvLyBjbG9uZSBmbGFncyB0byBwcmV2ZW50IG92ZXJ3cml0aW5nIGBfYmVmb3JlVGFpbFN0YXRlYFxyXG5cclxuXHQgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5kb0Rpc3BhdGNoKGFwcGVuZGVkLCBPYmplY3QuYXNzaWduKHt9LCBmbGFncykpOyAvLyByZXN0b3JlIHN0YXRlIGFmdGVyIGRpc3BhdGNoXHJcblxyXG5cdCAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XHJcblx0ICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcclxuXHQgICAgICAgICAgLy8gaWYgbWFzayBjaGFuZ2VkIHJlYXBwbHkgaW5wdXRcclxuXHQgICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xyXG5cclxuXHQgICAgICAgICAgaWYgKGluc2VydFZhbHVlKSB7XHJcblx0ICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcclxuXHQgICAgICAgICAgICB2YXIgZCA9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKGluc2VydFZhbHVlLCB7XHJcblx0ICAgICAgICAgICAgICByYXc6IHRydWVcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCA9IGQuaW5zZXJ0ZWQubGVuZ3RoIC0gcHJldlZhbHVlQmVmb3JlVGFpbC5sZW5ndGg7XHJcblx0ICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIGlmICh0YWlsVmFsdWUpIHtcclxuXHQgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxyXG5cdCAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKHRhaWxWYWx1ZSwge1xyXG5cdCAgICAgICAgICAgICAgcmF3OiB0cnVlLFxyXG5cdCAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxyXG5cdCAgICAgICAgICAgIH0pLnRhaWxTaGlmdDtcclxuXHQgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgLy8gRGlzcGF0Y2ggY2FuIGRvIHNvbWV0aGluZyBiYWQgd2l0aCBzdGF0ZSwgc29cclxuXHQgICAgICAgICAgLy8gcmVzdG9yZSBwcmV2IG1hc2sgc3RhdGVcclxuXHQgICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IHByZXZNYXNrU3RhdGU7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gZGV0YWlscztcclxuXHQgICAgfVxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXHJcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XHJcblx0ICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblxyXG5cdCAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XHJcblx0ICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiBkZXRhaWxzO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImRvRGlzcGF0Y2hcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcclxuXHQgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKGFwcGVuZGVkLCB0aGlzLCBmbGFncyk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcclxuXHQgICAgICB2YXIgX2dldDIsIF90aGlzJGN1cnJlbnRNYXNrO1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuXHQgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5jdXJyZW50TWFzayB8fCAoX3RoaXMkY3VycmVudE1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrKS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrLCBhcmdzKSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwicmVzZXRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xyXG5cdCAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLnJlc2V0KCk7XHJcblx0ICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcclxuXHQgICAgICAgIHJldHVybiBtLnJlc2V0KCk7XHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwidmFsdWVcIixcclxuXHQgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0ICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnZhbHVlIDogJyc7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0ICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlIDogJyc7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcclxuXHQgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidW5tYXNrZWRWYWx1ZVwiLCB1bm1hc2tlZFZhbHVlLCB0aGlzLCB0cnVlKTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlIDogJyc7XHJcblx0ICAgIH0gLy8gcHJvYmFibHkgdHlwZWRWYWx1ZSBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkeW5hbWljXHJcblx0ICAgICxcclxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcclxuXHQgICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7IC8vIGRvdWJsZSBjaGVjayBpdFxyXG5cclxuXHQgICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xyXG5cdCAgICAgICAgdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlID0gdmFsdWU7XHJcblx0ICAgICAgICB1bm1hc2tlZFZhbHVlID0gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXHJcblx0ICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdCAgICAgIHJldHVybiAhIXRoaXMuY3VycmVudE1hc2sgJiYgdGhpcy5jdXJyZW50TWFzay5pc0NvbXBsZXRlO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcInJlbW92ZVwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG5cdCAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcclxuXHJcblx0ICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcclxuXHQgICAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazI7XHJcblxyXG5cdCAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoKF90aGlzJGN1cnJlbnRNYXNrMiA9IHRoaXMuY3VycmVudE1hc2spLnJlbW92ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzazIsIGFyZ3VtZW50cykpIC8vIHVwZGF0ZSB3aXRoIGRpc3BhdGNoXHJcblx0ICAgICAgICAuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goKSk7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICByZXR1cm4gZGV0YWlscztcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJzdGF0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XHJcblx0ICAgICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlLFxyXG5cdCAgICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSkge1xyXG5cdCAgICAgICAgICByZXR1cm4gbS5zdGF0ZTtcclxuXHQgICAgICAgIH0pLFxyXG5cdCAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXHJcblx0ICAgICAgICBjdXJyZW50TWFzazogdGhpcy5jdXJyZW50TWFzayAmJiB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlXHJcblx0ICAgICAgfSk7XHJcblx0ICAgIH0sXHJcblx0ICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XHJcblx0ICAgICAgdmFyIGNvbXBpbGVkTWFza3MgPSBzdGF0ZS5jb21waWxlZE1hc2tzLFxyXG5cdCAgICAgICAgICBjdXJyZW50TWFza1JlZiA9IHN0YXRlLmN1cnJlbnRNYXNrUmVmLFxyXG5cdCAgICAgICAgICBjdXJyZW50TWFzayA9IHN0YXRlLmN1cnJlbnRNYXNrLFxyXG5cdCAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW1wiY29tcGlsZWRNYXNrc1wiLCBcImN1cnJlbnRNYXNrUmVmXCIsIFwiY3VycmVudE1hc2tcIl0pO1xyXG5cclxuXHQgICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSwgbWkpIHtcclxuXHQgICAgICAgIHJldHVybiBtLnN0YXRlID0gY29tcGlsZWRNYXNrc1ttaV07XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIGlmIChjdXJyZW50TWFza1JlZiAhPSBudWxsKSB7XHJcblx0ICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY3VycmVudE1hc2tSZWY7XHJcblx0ICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gY3VycmVudE1hc2s7XHJcblx0ICAgICAgfVxyXG5cclxuXHQgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xyXG5cdCAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazM7XHJcblxyXG5cdCAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrMyA9IHRoaXMuY3VycmVudE1hc2spLmV4dHJhY3RJbnB1dC5hcHBseShfdGhpcyRjdXJyZW50TWFzazMsIGFyZ3VtZW50cykgOiAnJztcclxuXHQgICAgfVxyXG5cdCAgICAvKipcclxuXHQgICAgICBAb3ZlcnJpZGVcclxuXHQgICAgKi9cclxuXHJcblx0ICB9LCB7XHJcblx0ICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XHJcblx0ICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNCwgX2dldDM7XHJcblxyXG5cdCAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG5cdCAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG5cdCAgICAgIH1cclxuXHJcblx0ICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2s0ID0gdGhpcy5jdXJyZW50TWFzaykuZXh0cmFjdFRhaWwuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s0LCBhcmdzKSA6IChfZ2V0MyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJleHRyYWN0VGFpbFwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MywgW3RoaXNdLmNvbmNhdChhcmdzKSk7XHJcblx0ICAgIH1cclxuXHQgICAgLyoqXHJcblx0ICAgICAgQG92ZXJyaWRlXHJcblx0ICAgICovXHJcblxyXG5cdCAgfSwge1xyXG5cdCAgICBrZXk6IFwiZG9Db21taXRcIixcclxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xyXG5cdCAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB0aGlzLmN1cnJlbnRNYXNrLmRvQ29tbWl0KCk7XHJcblxyXG5cdCAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xyXG5cdCAgICB9XHJcblx0ICAgIC8qKlxyXG5cdCAgICAgIEBvdmVycmlkZVxyXG5cdCAgICAqL1xyXG5cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxyXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKCkge1xyXG5cdCAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazUsIF9nZXQ0O1xyXG5cclxuXHQgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcclxuXHQgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcclxuXHQgICAgICB9XHJcblxyXG5cdCAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNSA9IHRoaXMuY3VycmVudE1hc2spLm5lYXJlc3RJbnB1dFBvcy5hcHBseShfdGhpcyRjdXJyZW50TWFzazUsIGFyZ3MpIDogKF9nZXQ0ID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm5lYXJlc3RJbnB1dFBvc1wiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0NCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XHJcblx0ICAgIH1cclxuXHQgIH0sIHtcclxuXHQgICAga2V5OiBcIm92ZXJ3cml0ZVwiLFxyXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHQgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sub3ZlcndyaXRlIDogX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm92ZXJ3cml0ZVwiLCB0aGlzKTtcclxuXHQgICAgfSxcclxuXHQgICAgc2V0OiBmdW5jdGlvbiBzZXQob3ZlcndyaXRlKSB7XHJcblx0ICAgICAgY29uc29sZS53YXJuKCdcIm92ZXJ3cml0ZVwiIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGluIGR5bmFtaWMgbWFzaywgdXNlIHRoaXMgb3B0aW9uIGluIHNpYmxpbmdzJyk7XHJcblx0ICAgIH1cclxuXHQgIH1dKTtcclxuXHJcblx0ICByZXR1cm4gTWFza2VkRHluYW1pYztcclxuXHR9KE1hc2tlZCk7XHJcblx0TWFza2VkRHluYW1pYy5ERUZBVUxUUyA9IHtcclxuXHQgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhcHBlbmRlZCwgbWFza2VkLCBmbGFncykge1xyXG5cdCAgICBpZiAoIW1hc2tlZC5jb21waWxlZE1hc2tzLmxlbmd0aCkgcmV0dXJuO1xyXG5cdCAgICB2YXIgaW5wdXRWYWx1ZSA9IG1hc2tlZC5yYXdJbnB1dFZhbHVlOyAvLyBzaW11bGF0ZSBpbnB1dFxyXG5cclxuXHQgICAgdmFyIGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSwgaW5kZXgpIHtcclxuXHQgICAgICBtLnJlc2V0KCk7XHJcblx0ICAgICAgbS5hcHBlbmQoaW5wdXRWYWx1ZSwge1xyXG5cdCAgICAgICAgcmF3OiB0cnVlXHJcblx0ICAgICAgfSk7XHJcblx0ICAgICAgbS5hcHBlbmQoYXBwZW5kZWQsIGZsYWdzKTtcclxuXHQgICAgICB2YXIgd2VpZ2h0ID0gbS5yYXdJbnB1dFZhbHVlLmxlbmd0aDtcclxuXHQgICAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgd2VpZ2h0OiB3ZWlnaHQsXHJcblx0ICAgICAgICBpbmRleDogaW5kZXhcclxuXHQgICAgICB9O1xyXG5cdCAgICB9KTsgLy8gcG9wIG1hc2tzIHdpdGggbG9uZ2VyIHZhbHVlcyBmaXJzdFxyXG5cclxuXHQgICAgaW5wdXRzLnNvcnQoZnVuY3Rpb24gKGkxLCBpMikge1xyXG5cdCAgICAgIHJldHVybiBpMi53ZWlnaHQgLSBpMS53ZWlnaHQ7XHJcblx0ICAgIH0pO1xyXG5cdCAgICByZXR1cm4gbWFza2VkLmNvbXBpbGVkTWFza3NbaW5wdXRzWzBdLmluZGV4XTtcclxuXHQgIH1cclxuXHR9O1xyXG5cdElNYXNrLk1hc2tlZER5bmFtaWMgPSBNYXNrZWREeW5hbWljO1xyXG5cclxuXHQvKiogTWFzayBwaXBlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gdHlwZXMgKi9cclxuXHJcblx0dmFyIFBJUEVfVFlQRSA9IHtcclxuXHQgIE1BU0tFRDogJ3ZhbHVlJyxcclxuXHQgIFVOTUFTS0VEOiAndW5tYXNrZWRWYWx1ZScsXHJcblx0ICBUWVBFRDogJ3R5cGVkVmFsdWUnXHJcblx0fTtcclxuXHQvKiogQ3JlYXRlcyBuZXcgcGlwZSBmdW5jdGlvbiBkZXBlbmRpbmcgb24gbWFzayB0eXBlLCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIG9wdGlvbnMgKi9cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlUGlwZShtYXNrKSB7XHJcblx0ICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogUElQRV9UWVBFLk1BU0tFRDtcclxuXHQgIHZhciB0byA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogUElQRV9UWVBFLk1BU0tFRDtcclxuXHQgIHZhciBtYXNrZWQgPSBjcmVhdGVNYXNrKG1hc2spO1xyXG5cdCAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdCAgICByZXR1cm4gbWFza2VkLnJ1bklzb2xhdGVkKGZ1bmN0aW9uIChtKSB7XHJcblx0ICAgICAgbVtmcm9tXSA9IHZhbHVlO1xyXG5cdCAgICAgIHJldHVybiBtW3RvXTtcclxuXHQgICAgfSk7XHJcblx0ICB9O1xyXG5cdH1cclxuXHQvKiogUGlwZXMgdmFsdWUgdGhyb3VnaCBtYXNrIGRlcGVuZGluZyBvbiBtYXNrIHR5cGUsIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gb3B0aW9ucyAqL1xyXG5cclxuXHRmdW5jdGlvbiBwaXBlKHZhbHVlKSB7XHJcblx0ICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGlwZUFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG5cdCAgICBwaXBlQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcblx0ICB9XHJcblxyXG5cdCAgcmV0dXJuIGNyZWF0ZVBpcGUuYXBwbHkodm9pZCAwLCBwaXBlQXJncykodmFsdWUpO1xyXG5cdH1cclxuXHRJTWFzay5QSVBFX1RZUEUgPSBQSVBFX1RZUEU7XHJcblx0SU1hc2suY3JlYXRlUGlwZSA9IGNyZWF0ZVBpcGU7XHJcblx0SU1hc2sucGlwZSA9IHBpcGU7XHJcblxyXG5cdHRyeSB7XHJcblx0ICBnbG9iYWxUaGlzLklNYXNrID0gSU1hc2s7XHJcblx0fSBjYXRjaCAoZSkge31cclxuXHJcblx0ZXhwb3J0cy5IVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XHJcblx0ZXhwb3J0cy5IVE1MTWFza0VsZW1lbnQgPSBIVE1MTWFza0VsZW1lbnQ7XHJcblx0ZXhwb3J0cy5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XHJcblx0ZXhwb3J0cy5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xyXG5cdGV4cG9ydHMuTWFza2VkID0gTWFza2VkO1xyXG5cdGV4cG9ydHMuTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XHJcblx0ZXhwb3J0cy5NYXNrZWREeW5hbWljID0gTWFza2VkRHluYW1pYztcclxuXHRleHBvcnRzLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xyXG5cdGV4cG9ydHMuTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcclxuXHRleHBvcnRzLk1hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcclxuXHRleHBvcnRzLk1hc2tlZFBhdHRlcm4gPSBNYXNrZWRQYXR0ZXJuO1xyXG5cdGV4cG9ydHMuTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcclxuXHRleHBvcnRzLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcclxuXHRleHBvcnRzLlBJUEVfVFlQRSA9IFBJUEVfVFlQRTtcclxuXHRleHBvcnRzLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xyXG5cdGV4cG9ydHMuY3JlYXRlUGlwZSA9IGNyZWF0ZVBpcGU7XHJcblx0ZXhwb3J0cy5kZWZhdWx0ID0gSU1hc2s7XHJcblx0ZXhwb3J0cy5waXBlID0gcGlwZTtcclxuXHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbn0pKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYXNrLmpzLm1hcFxyXG4vKiEgY2hvaWNlcy5qcyB2OS4wLjEgfCDCqSAyMDE5IEpvc2ggSm9obnNvbiB8IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2hqb2huc29uL0Nob2ljZXMjcmVhZG1lICovXG53aW5kb3cuQ2hvaWNlcz1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBpKG4pe2lmKHRbbl0pcmV0dXJuIHRbbl0uZXhwb3J0czt2YXIgcj10W25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxpKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBpLm09ZSxpLmM9dCxpLmQ9ZnVuY3Rpb24oZSx0LG4pe2kubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LGkucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxpLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPWkoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihpLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciByIGluIGUpaS5kKG4scixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLHIpKTtyZXR1cm4gbn0saS5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBpLmQodCxcImFcIix0KSx0fSxpLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LGkucD1cIi9wdWJsaWMvYXNzZXRzL3NjcmlwdHMvXCIsaShpLnM9Nyl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49aSgxKTt0LkRFRkFVTFRfQ0xBU1NOQU1FUz17Y29udGFpbmVyT3V0ZXI6XCJjaG9pY2VzXCIsY29udGFpbmVySW5uZXI6XCJjaG9pY2VzX19pbm5lclwiLGlucHV0OlwiY2hvaWNlc19faW5wdXRcIixpbnB1dENsb25lZDpcImNob2ljZXNfX2lucHV0LS1jbG9uZWRcIixsaXN0OlwiY2hvaWNlc19fbGlzdFwiLGxpc3RJdGVtczpcImNob2ljZXNfX2xpc3QtLW11bHRpcGxlXCIsbGlzdFNpbmdsZTpcImNob2ljZXNfX2xpc3QtLXNpbmdsZVwiLGxpc3REcm9wZG93bjpcImNob2ljZXNfX2xpc3QtLWRyb3Bkb3duXCIsaXRlbTpcImNob2ljZXNfX2l0ZW1cIixpdGVtU2VsZWN0YWJsZTpcImNob2ljZXNfX2l0ZW0tLXNlbGVjdGFibGVcIixpdGVtRGlzYWJsZWQ6XCJjaG9pY2VzX19pdGVtLS1kaXNhYmxlZFwiLGl0ZW1DaG9pY2U6XCJjaG9pY2VzX19pdGVtLS1jaG9pY2VcIixwbGFjZWhvbGRlcjpcImNob2ljZXNfX3BsYWNlaG9sZGVyXCIsZ3JvdXA6XCJjaG9pY2VzX19ncm91cFwiLGdyb3VwSGVhZGluZzpcImNob2ljZXNfX2hlYWRpbmdcIixidXR0b246XCJjaG9pY2VzX19idXR0b25cIixhY3RpdmVTdGF0ZTpcImlzLWFjdGl2ZVwiLGZvY3VzU3RhdGU6XCJpcy1mb2N1c2VkXCIsb3BlblN0YXRlOlwiaXMtb3BlblwiLGRpc2FibGVkU3RhdGU6XCJpcy1kaXNhYmxlZFwiLGhpZ2hsaWdodGVkU3RhdGU6XCJpcy1oaWdobGlnaHRlZFwiLHNlbGVjdGVkU3RhdGU6XCJpcy1zZWxlY3RlZFwiLGZsaXBwZWRTdGF0ZTpcImlzLWZsaXBwZWRcIixsb2FkaW5nU3RhdGU6XCJpcy1sb2FkaW5nXCIsbm9SZXN1bHRzOlwiaGFzLW5vLXJlc3VsdHNcIixub0Nob2ljZXM6XCJoYXMtbm8tY2hvaWNlc1wifSx0LkRFRkFVTFRfQ09ORklHPXtpdGVtczpbXSxjaG9pY2VzOltdLHNpbGVudDohMSxyZW5kZXJDaG9pY2VMaW1pdDotMSxtYXhJdGVtQ291bnQ6LTEsYWRkSXRlbXM6ITAsYWRkSXRlbUZpbHRlcjpudWxsLHJlbW92ZUl0ZW1zOiEwLHJlbW92ZUl0ZW1CdXR0b246ITEsZWRpdEl0ZW1zOiExLGR1cGxpY2F0ZUl0ZW1zQWxsb3dlZDohMCxkZWxpbWl0ZXI6XCIsXCIscGFzdGU6ITAsc2VhcmNoRW5hYmxlZDohMCxzZWFyY2hDaG9pY2VzOiEwLHNlYXJjaEZsb29yOjEsc2VhcmNoUmVzdWx0TGltaXQ6NCxzZWFyY2hGaWVsZHM6W1wibGFiZWxcIixcInZhbHVlXCJdLHBvc2l0aW9uOlwiYXV0b1wiLHJlc2V0U2Nyb2xsUG9zaXRpb246ITAsc2hvdWxkU29ydDohMCxzaG91bGRTb3J0SXRlbXM6ITEsc29ydGVyOm4uc29ydEJ5QWxwaGEscGxhY2Vob2xkZXI6ITAscGxhY2Vob2xkZXJWYWx1ZTpudWxsLHNlYXJjaFBsYWNlaG9sZGVyVmFsdWU6bnVsbCxwcmVwZW5kVmFsdWU6bnVsbCxhcHBlbmRWYWx1ZTpudWxsLHJlbmRlclNlbGVjdGVkQ2hvaWNlczpcImF1dG9cIixsb2FkaW5nVGV4dDpcIkxvYWRpbmcuLi5cIixub1Jlc3VsdHNUZXh0OlwiTm8gcmVzdWx0cyBmb3VuZFwiLG5vQ2hvaWNlc1RleHQ6XCJObyBjaG9pY2VzIHRvIGNob29zZSBmcm9tXCIsaXRlbVNlbGVjdFRleHQ6XCJQcmVzcyB0byBzZWxlY3RcIix1bmlxdWVJdGVtVGV4dDpcIk9ubHkgdW5pcXVlIHZhbHVlcyBjYW4gYmUgYWRkZWRcIixjdXN0b21BZGRJdGVtVGV4dDpcIk9ubHkgdmFsdWVzIG1hdGNoaW5nIHNwZWNpZmljIGNvbmRpdGlvbnMgY2FuIGJlIGFkZGVkXCIsYWRkSXRlbVRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuJ1ByZXNzIEVudGVyIHRvIGFkZCA8Yj5cIicrbi5zYW5pdGlzZShlKSsnXCI8L2I+J30sbWF4SXRlbVRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJPbmx5IFwiK2UrXCIgdmFsdWVzIGNhbiBiZSBhZGRlZFwifSx2YWx1ZUNvbXBhcmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10fSxmdXNlT3B0aW9uczp7aW5jbHVkZVNjb3JlOiEwfSxjYWxsYmFja09uSW5pdDpudWxsLGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXM6bnVsbCxjbGFzc05hbWVzOnQuREVGQVVMVF9DTEFTU05BTUVTfSx0LkVWRU5UUz17c2hvd0Ryb3Bkb3duOlwic2hvd0Ryb3Bkb3duXCIsaGlkZURyb3Bkb3duOlwiaGlkZURyb3Bkb3duXCIsY2hhbmdlOlwiY2hhbmdlXCIsY2hvaWNlOlwiY2hvaWNlXCIsc2VhcmNoOlwic2VhcmNoXCIsYWRkSXRlbTpcImFkZEl0ZW1cIixyZW1vdmVJdGVtOlwicmVtb3ZlSXRlbVwiLGhpZ2hsaWdodEl0ZW06XCJoaWdobGlnaHRJdGVtXCIsaGlnaGxpZ2h0Q2hvaWNlOlwiaGlnaGxpZ2h0Q2hvaWNlXCIsdW5oaWdobGlnaHRJdGVtOlwidW5oaWdobGlnaHRJdGVtXCJ9LHQuQUNUSU9OX1RZUEVTPXtBRERfQ0hPSUNFOlwiQUREX0NIT0lDRVwiLEZJTFRFUl9DSE9JQ0VTOlwiRklMVEVSX0NIT0lDRVNcIixBQ1RJVkFURV9DSE9JQ0VTOlwiQUNUSVZBVEVfQ0hPSUNFU1wiLENMRUFSX0NIT0lDRVM6XCJDTEVBUl9DSE9JQ0VTXCIsQUREX0dST1VQOlwiQUREX0dST1VQXCIsQUREX0lURU06XCJBRERfSVRFTVwiLFJFTU9WRV9JVEVNOlwiUkVNT1ZFX0lURU1cIixISUdITElHSFRfSVRFTTpcIkhJR0hMSUdIVF9JVEVNXCIsQ0xFQVJfQUxMOlwiQ0xFQVJfQUxMXCIsUkVTRVRfVE86XCJSRVNFVF9UT1wiLFNFVF9JU19MT0FESU5HOlwiU0VUX0lTX0xPQURJTkdcIn0sdC5LRVlfQ09ERVM9e0JBQ0tfS0VZOjQ2LERFTEVURV9LRVk6OCxFTlRFUl9LRVk6MTMsQV9LRVk6NjUsRVNDX0tFWToyNyxVUF9LRVk6MzgsRE9XTl9LRVk6NDAsUEFHRV9VUF9LRVk6MzMsUEFHRV9ET1dOX0tFWTozNH0sdC5URVhUX1RZUEU9XCJ0ZXh0XCIsdC5TRUxFQ1RfT05FX1RZUEU9XCJzZWxlY3Qtb25lXCIsdC5TRUxFQ1RfTVVMVElQTEVfVFlQRT1cInNlbGVjdC1tdWx0aXBsZVwiLHQuU0NST0xMSU5HX1NQRUVEPTR9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmdldFJhbmRvbU51bWJlcj1mdW5jdGlvbihlLHQpe3JldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHQtZSkrZSl9LHQuZ2VuZXJhdGVDaGFycz1mdW5jdGlvbihlKXtyZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOmV9LChmdW5jdGlvbigpe3JldHVybiB0LmdldFJhbmRvbU51bWJlcigwLDM2KS50b1N0cmluZygzNil9KSkuam9pbihcIlwiKX0sdC5nZW5lcmF0ZUlkPWZ1bmN0aW9uKGUsaSl7dmFyIG49ZS5pZHx8ZS5uYW1lJiZlLm5hbWUrXCItXCIrdC5nZW5lcmF0ZUNoYXJzKDIpfHx0LmdlbmVyYXRlQ2hhcnMoNCk7cmV0dXJuIG49aStcIi1cIisobj1uLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCwpL2csXCJcIikpfSx0LmdldFR5cGU9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKX0sdC5pc1R5cGU9ZnVuY3Rpb24oZSxpKXtyZXR1cm4gbnVsbCE9aSYmdC5nZXRUeXBlKGkpPT09ZX0sdC53cmFwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGUubmV4dFNpYmxpbmc/ZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsZS5uZXh0U2libGluZyk6ZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodCksdC5hcHBlbmRDaGlsZChlKX0sdC5nZXRBZGphY2VudEVsPWZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1pJiYoaT0xKTtmb3IodmFyIG49KGk+MD9cIm5leHRcIjpcInByZXZpb3VzXCIpK1wiRWxlbWVudFNpYmxpbmdcIixyPWVbbl07cjspe2lmKHIubWF0Y2hlcyh0KSlyZXR1cm4gcjtyPXJbbl19cmV0dXJuIHJ9LHQuaXNTY3JvbGxlZEludG9WaWV3PWZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gdm9pZCAwPT09aSYmKGk9MSksISFlJiYoaT4wP3Quc2Nyb2xsVG9wK3Qub2Zmc2V0SGVpZ2h0Pj1lLm9mZnNldFRvcCtlLm9mZnNldEhlaWdodDplLm9mZnNldFRvcD49dC5zY3JvbGxUb3ApfSx0LnNhbml0aXNlPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlP2U6ZS5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC8+L2csXCImcnQ7XCIpLnJlcGxhY2UoLzwvZyxcIiZsdDtcIikucmVwbGFjZSgvXCIvZyxcIiZxdW90O1wiKX0sdC5zdHJUb0VsPShuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZnVuY3Rpb24oZSl7dmFyIHQ9ZS50cmltKCk7bi5pbm5lckhUTUw9dDtmb3IodmFyIGk9bi5jaGlsZHJlblswXTtuLmZpcnN0Q2hpbGQ7KW4ucmVtb3ZlQ2hpbGQobi5maXJzdENoaWxkKTtyZXR1cm4gaX0pLHQuc29ydEJ5QWxwaGE9ZnVuY3Rpb24oZSx0KXt2YXIgaT1lLnZhbHVlLG49ZS5sYWJlbCxyPXZvaWQgMD09PW4/aTpuLG89dC52YWx1ZSxzPXQubGFiZWwsYT12b2lkIDA9PT1zP286cztyZXR1cm4gci5sb2NhbGVDb21wYXJlKGEsW10se3NlbnNpdGl2aXR5OlwiYmFzZVwiLGlnbm9yZVB1bmN0dWF0aW9uOiEwLG51bWVyaWM6ITB9KX0sdC5zb3J0QnlTY29yZT1mdW5jdGlvbihlLHQpe3ZhciBpPWUuc2NvcmUsbj12b2lkIDA9PT1pPzA6aSxyPXQuc2NvcmU7cmV0dXJuIG4tKHZvaWQgMD09PXI/MDpyKX0sdC5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGUsdCxpKXt2b2lkIDA9PT1pJiYoaT1udWxsKTt2YXIgbj1uZXcgQ3VzdG9tRXZlbnQodCx7ZGV0YWlsOmksYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSk7cmV0dXJuIGUuZGlzcGF0Y2hFdmVudChuKX0sdC5leGlzdHNJbkFycmF5PWZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gdm9pZCAwPT09aSYmKGk9XCJ2YWx1ZVwiKSxlLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P2VbaV09PT10LnRyaW0oKTplW2ldPT09dH0pKX0sdC5jbG9uZU9iamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSl9LHQuZGlmZj1mdW5jdGlvbihlLHQpe3ZhciBpPU9iamVjdC5rZXlzKGUpLnNvcnQoKSxuPU9iamVjdC5rZXlzKHQpLnNvcnQoKTtyZXR1cm4gaS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBuLmluZGV4T2YoZSk8MH0pKX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24oZSxuKXt2YXIgcixvPWkoNik7cj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PWU/ZTpuO3ZhciBzPU9iamVjdChvLmEpKHIpO3QuYT1zfSkuY2FsbCh0aGlzLGkoMTIpLGkoMTMpKGUpKX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2kucih0KSxpLmQodCxcIl9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gb30pKSxpLmQodCxcImFwcGx5TWlkZGxld2FyZVwiLChmdW5jdGlvbigpe3JldHVybiB2fSkpLGkuZCh0LFwiYmluZEFjdGlvbkNyZWF0b3JzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGh9KSksaS5kKHQsXCJjb21iaW5lUmVkdWNlcnNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbH0pKSxpLmQodCxcImNvbXBvc2VcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbX0pKSxpLmQodCxcImNyZWF0ZVN0b3JlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSk7dmFyIG49aSgyKSxyPWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdChcIlwiKS5qb2luKFwiLlwiKX0sbz17SU5JVDpcIkBAcmVkdXgvSU5JVFwiK3IoKSxSRVBMQUNFOlwiQEByZWR1eC9SRVBMQUNFXCIrcigpLFBST0JFX1VOS05PV05fQUNUSU9OOmZ1bmN0aW9uKCl7cmV0dXJuXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIrcigpfX07ZnVuY3Rpb24gcyhlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuITE7Zm9yKHZhciB0PWU7bnVsbCE9PU9iamVjdC5nZXRQcm90b3R5cGVPZih0KTspdD1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7cmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihlKT09PXR9ZnVuY3Rpb24gYShlLHQsaSl7dmFyIHI7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgaXx8XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYXJndW1lbnRzWzNdKXRocm93IG5ldyBFcnJvcihcIkl0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvIGNyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtIHRvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLlwiKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1pJiYoaT10LHQ9dm9pZCAwKSx2b2lkIDAhPT1pKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLlwiKTtyZXR1cm4gaShhKShlLHQpfWlmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi5cIik7dmFyIGM9ZSxsPXQsdT1bXSxoPXUsZD0hMTtmdW5jdGlvbiBwKCl7aD09PXUmJihoPXUuc2xpY2UoKSl9ZnVuY3Rpb24gZigpe2lmKGQpdGhyb3cgbmV3IEVycm9yKFwiWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiBQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLlwiKTtyZXR1cm4gbH1mdW5jdGlvbiBtKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uXCIpO2lmKGQpdGhyb3cgbmV3IEVycm9yKFwiWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuIElmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhIGNvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuXCIpO3ZhciB0PSEwO3JldHVybiBwKCksaC5wdXNoKGUpLGZ1bmN0aW9uKCl7aWYodCl7aWYoZCl0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuXCIpO3Q9ITEscCgpO3ZhciBpPWguaW5kZXhPZihlKTtoLnNwbGljZShpLDEpfX19ZnVuY3Rpb24gdihlKXtpZighcyhlKSl0aHJvdyBuZXcgRXJyb3IoXCJBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLlwiKTtpZih2b2lkIDA9PT1lLnR5cGUpdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIEhhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtpZihkKXRocm93IG5ldyBFcnJvcihcIlJlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy5cIik7dHJ5e2Q9ITAsbD1jKGwsZSl9ZmluYWxseXtkPSExfWZvcih2YXIgdD11PWgsaT0wO2k8dC5sZW5ndGg7aSsrKXsoMCx0W2ldKSgpfXJldHVybiBlfXJldHVybiB2KHt0eXBlOm8uSU5JVH0pLChyPXtkaXNwYXRjaDp2LHN1YnNjcmliZTptLGdldFN0YXRlOmYscmVwbGFjZVJlZHVjZXI6ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi5cIik7Yz1lLHYoe3R5cGU6by5SRVBMQUNFfSl9fSlbbi5hXT1mdW5jdGlvbigpe3ZhciBlLHQ9bTtyZXR1cm4oZT17c3Vic2NyaWJlOmZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC5cIik7ZnVuY3Rpb24gaSgpe2UubmV4dCYmZS5uZXh0KGYoKSl9cmV0dXJuIGkoKSx7dW5zdWJzY3JpYmU6dChpKX19fSlbbi5hXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxlfSxyfWZ1bmN0aW9uIGMoZSx0KXt2YXIgaT10JiZ0LnR5cGU7cmV0dXJuXCJHaXZlbiBcIisoaSYmJ2FjdGlvbiBcIicrU3RyaW5nKGkpKydcIid8fFwiYW4gYWN0aW9uXCIpKycsIHJlZHVjZXIgXCInK2UrJ1wiIHJldHVybmVkIHVuZGVmaW5lZC4gVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC4nfWZ1bmN0aW9uIGwoZSl7Zm9yKHZhciB0PU9iamVjdC5rZXlzKGUpLGk9e30sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dOzAsXCJmdW5jdGlvblwiPT10eXBlb2YgZVtyXSYmKGlbcl09ZVtyXSl9dmFyIHMsYT1PYmplY3Qua2V5cyhpKTt0cnl7IWZ1bmN0aW9uKGUpe09iamVjdC5rZXlzKGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBpPWVbdF07aWYodm9pZCAwPT09aSh2b2lkIDAse3R5cGU6by5JTklUfSkpdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyt0K1wiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCB5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtpZih2b2lkIDA9PT1pKHZvaWQgMCx7dHlwZTpvLlBST0JFX1VOS05PV05fQUNUSU9OKCl9KSl0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInK3QrXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIERvbid0IHRyeSB0byBoYW5kbGUgXCIrby5JTklUKycgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiBuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuJyl9KSl9KGkpfWNhdGNoKGUpe3M9ZX1yZXR1cm4gZnVuY3Rpb24oZSx0KXtpZih2b2lkIDA9PT1lJiYoZT17fSkscyl0aHJvdyBzO2Zvcih2YXIgbj0hMSxyPXt9LG89MDtvPGEubGVuZ3RoO28rKyl7dmFyIGw9YVtvXSx1PWlbbF0saD1lW2xdLGQ9dShoLHQpO2lmKHZvaWQgMD09PWQpe3ZhciBwPWMobCx0KTt0aHJvdyBuZXcgRXJyb3IocCl9cltsXT1kLG49bnx8ZCE9PWh9cmV0dXJuIG4/cjplfX1mdW5jdGlvbiB1KGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQoZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX1mdW5jdGlvbiBoKGUsdCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4gdShlLHQpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSl0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIrKG51bGw9PT1lP1wibnVsbFwiOnR5cGVvZiBlKSsnLiBEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO3ZhciBpPXt9O2Zvcih2YXIgbiBpbiBlKXt2YXIgcj1lW25dO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihpW25dPXUocix0KSl9cmV0dXJuIGl9ZnVuY3Rpb24gZChlLHQsaSl7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9ZnVuY3Rpb24gcChlLHQpe3ZhciBpPU9iamVjdC5rZXlzKGUpO3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzJiZpLnB1c2guYXBwbHkoaSxPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpKSx0JiYoaT1pLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxpfWZ1bmN0aW9uIGYoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIGk9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/cChpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtkKGUsdCxpW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGkpKTpwKGkpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihpLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBtKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1uZXcgQXJyYXkoZSksaT0wO2k8ZTtpKyspdFtpXT1hcmd1bWVudHNbaV07cmV0dXJuIDA9PT10Lmxlbmd0aD9mdW5jdGlvbihlKXtyZXR1cm4gZX06MT09PXQubGVuZ3RoP3RbMF06dC5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGUodC5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9fSkpfWZ1bmN0aW9uIHYoKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxpPTA7aTxlO2krKyl0W2ldPWFyZ3VtZW50c1tpXTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGk9ZS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSxuPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLlwiKX0scj17Z2V0U3RhdGU6aS5nZXRTdGF0ZSxkaXNwYXRjaDpmdW5jdGlvbigpe3JldHVybiBuLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpfX0sbz10Lm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUocil9KSk7cmV0dXJuIGYoe30saSx7ZGlzcGF0Y2g6bj1tLmFwcGx5KHZvaWQgMCxvKShpLmRpc3BhdGNoKX0pfX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9aSgzKSxvPW4oaSgxNCkpLHM9bihpKDE1KSksYT1uKGkoMTYpKSxjPW4oaSgxNykpLGw9aSgxKTt0LmRlZmF1bHRTdGF0ZT17Z3JvdXBzOltdLGl0ZW1zOltdLGNob2ljZXM6W10sbG9hZGluZzohMX07dmFyIHU9ci5jb21iaW5lUmVkdWNlcnMoe2l0ZW1zOm8uZGVmYXVsdCxncm91cHM6cy5kZWZhdWx0LGNob2ljZXM6YS5kZWZhdWx0LGxvYWRpbmc6Yy5kZWZhdWx0fSk7dC5kZWZhdWx0PWZ1bmN0aW9uKGUsaSl7dmFyIG49ZTtpZihcIkNMRUFSX0FMTFwiPT09aS50eXBlKW49dC5kZWZhdWx0U3RhdGU7ZWxzZSBpZihcIlJFU0VUX1RPXCI9PT1pLnR5cGUpcmV0dXJuIGwuY2xvbmVPYmplY3QoaS5zdGF0ZSk7cmV0dXJuIHUobixpKX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1pKDEpLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PWUuZWxlbWVudCxpPWUuY2xhc3NOYW1lcztpZih0aGlzLmVsZW1lbnQ9dCx0aGlzLmNsYXNzTmFtZXM9aSwhKHQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50fHx0IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGVsZW1lbnQgcGFzc2VkXCIpO3RoaXMuaXNEaXNhYmxlZD0hMX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiaXNBY3RpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJhY3RpdmVcIj09PXRoaXMuZWxlbWVudC5kYXRhc2V0LmNob2ljZX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJkaXJcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5kaXJ9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwidmFsdWVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZX0sc2V0OmZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC52YWx1ZT1lfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLmNvbmNlYWw9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuaW5wdXQpLHRoaXMuZWxlbWVudC5oaWRkZW49ITAsdGhpcy5lbGVtZW50LnRhYkluZGV4PS0xO3ZhciBlPXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtlJiZ0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jaG9pY2Utb3JpZy1zdHlsZVwiLGUpLHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNob2ljZVwiLFwiYWN0aXZlXCIpfSxlLnByb3RvdHlwZS5yZXZlYWw9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuaW5wdXQpLHRoaXMuZWxlbWVudC5oaWRkZW49ITEsdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO3ZhciBlPXRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNob2ljZS1vcmlnLXN0eWxlXCIpO2U/KHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWNob2ljZS1vcmlnLXN0eWxlXCIpLHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUpKTp0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiksdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY2hvaWNlXCIpLHRoaXMuZWxlbWVudC52YWx1ZT10aGlzLmVsZW1lbnQudmFsdWV9LGUucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSx0aGlzLmVsZW1lbnQuZGlzYWJsZWQ9ITEsdGhpcy5pc0Rpc2FibGVkPSExfSxlLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJcIiksdGhpcy5lbGVtZW50LmRpc2FibGVkPSEwLHRoaXMuaXNEaXNhYmxlZD0hMH0sZS5wcm90b3R5cGUudHJpZ2dlckV2ZW50PWZ1bmN0aW9uKGUsdCl7bi5kaXNwYXRjaEV2ZW50KHRoaXMuZWxlbWVudCxlLHQpfSxlfSgpO3QuZGVmYXVsdD1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdCxpPWUuU3ltYm9sO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5vYnNlcnZhYmxlP3Q9aS5vYnNlcnZhYmxlOih0PWkoXCJvYnNlcnZhYmxlXCIpLGkub2JzZXJ2YWJsZT10KTp0PVwiQEBvYnNlcnZhYmxlXCIsdH1pLmQodCxcImFcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbn0pKX0sZnVuY3Rpb24oZSx0LGkpe2UuZXhwb3J0cz1pKDgpfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX3NwcmVhZEFycmF5c3x8ZnVuY3Rpb24oKXtmb3IodmFyIGU9MCx0PTAsaT1hcmd1bWVudHMubGVuZ3RoO3Q8aTt0KyspZSs9YXJndW1lbnRzW3RdLmxlbmd0aDt2YXIgbj1BcnJheShlKSxyPTA7Zm9yKHQ9MDt0PGk7dCsrKWZvcih2YXIgbz1hcmd1bWVudHNbdF0scz0wLGE9by5sZW5ndGg7czxhO3MrKyxyKyspbltyXT1vW3NdO3JldHVybiBufSxyPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPXIoaSg5KSkscz1yKGkoMTApKSxhPXIoaSgxMSkpLGM9aSgxOCksbD1pKDApLHU9cihpKDI1KSksaD1pKDI2KSxkPWkoMjcpLHA9aSgyOCksZj1pKDI5KSxtPWkoMSksdj1pKDQpLF89XCItbXMtc2Nyb2xsLWxpbWl0XCJpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUmJlwiLW1zLWltZS1hbGlnblwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLGc9e30seT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxpKXt2YXIgcj10aGlzO3ZvaWQgMD09PXQmJih0PVwiW2RhdGEtY2hvaWNlXVwiKSx2b2lkIDA9PT1pJiYoaT17fSksdGhpcy5jb25maWc9cy5kZWZhdWx0LmFsbChbbC5ERUZBVUxUX0NPTkZJRyxlLmRlZmF1bHRzLm9wdGlvbnMsaV0se2FycmF5TWVyZ2U6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbih0KX19KTt2YXIgbz1tLmRpZmYodGhpcy5jb25maWcsbC5ERUZBVUxUX0NPTkZJRyk7by5sZW5ndGgmJmNvbnNvbGUud2FybihcIlVua25vd24gY29uZmlnIG9wdGlvbihzKSBwYXNzZWRcIixvLmpvaW4oXCIsIFwiKSk7dmFyIHU9XCJzdHJpbmdcIj09dHlwZW9mIHQ/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTp0O2lmKCEodSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnR8fHUgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpdGhyb3cgVHlwZUVycm9yKFwiRXhwZWN0ZWQgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXMgdGV4dHxzZWxlY3Qtb25lfHNlbGVjdC1tdWx0aXBsZVwiKTtpZih0aGlzLl9pc1RleHRFbGVtZW50PXUudHlwZT09PWwuVEVYVF9UWVBFLHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudD11LnR5cGU9PT1sLlNFTEVDVF9PTkVfVFlQRSx0aGlzLl9pc1NlbGVjdE11bHRpcGxlRWxlbWVudD11LnR5cGU9PT1sLlNFTEVDVF9NVUxUSVBMRV9UWVBFLHRoaXMuX2lzU2VsZWN0RWxlbWVudD10aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnR8fHRoaXMuX2lzU2VsZWN0TXVsdGlwbGVFbGVtZW50LHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQ9dGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnR8fHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQsW1wiYXV0b1wiLFwiYWx3YXlzXCJdLmluY2x1ZGVzKFwiXCIrdGhpcy5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzKXx8KHRoaXMuY29uZmlnLnJlbmRlclNlbGVjdGVkQ2hvaWNlcz1cImF1dG9cIiksaS5hZGRJdGVtRmlsdGVyJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpLmFkZEl0ZW1GaWx0ZXIpe3ZhciBoPWkuYWRkSXRlbUZpbHRlciBpbnN0YW5jZW9mIFJlZ0V4cD9pLmFkZEl0ZW1GaWx0ZXI6bmV3IFJlZ0V4cChpLmFkZEl0ZW1GaWx0ZXIpO3RoaXMuY29uZmlnLmFkZEl0ZW1GaWx0ZXI9aC50ZXN0LmJpbmQoaCl9aWYodGhpcy5faXNUZXh0RWxlbWVudD90aGlzLnBhc3NlZEVsZW1lbnQ9bmV3IGMuV3JhcHBlZElucHV0KHtlbGVtZW50OnUsY2xhc3NOYW1lczp0aGlzLmNvbmZpZy5jbGFzc05hbWVzLGRlbGltaXRlcjp0aGlzLmNvbmZpZy5kZWxpbWl0ZXJ9KTp0aGlzLnBhc3NlZEVsZW1lbnQ9bmV3IGMuV3JhcHBlZFNlbGVjdCh7ZWxlbWVudDp1LGNsYXNzTmFtZXM6dGhpcy5jb25maWcuY2xhc3NOYW1lcyx0ZW1wbGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gci5fdGVtcGxhdGVzLm9wdGlvbihlKX19KSx0aGlzLmluaXRpYWxpc2VkPSExLHRoaXMuX3N0b3JlPW5ldyBhLmRlZmF1bHQsdGhpcy5faW5pdGlhbFN0YXRlPXYuZGVmYXVsdFN0YXRlLHRoaXMuX2N1cnJlbnRTdGF0ZT12LmRlZmF1bHRTdGF0ZSx0aGlzLl9wcmV2U3RhdGU9di5kZWZhdWx0U3RhdGUsdGhpcy5fY3VycmVudFZhbHVlPVwiXCIsdGhpcy5fY2FuU2VhcmNoPSEhdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCx0aGlzLl9pc1Njcm9sbGluZ09uSWU9ITEsdGhpcy5faGlnaGxpZ2h0UG9zaXRpb249MCx0aGlzLl93YXNUYXA9ITAsdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZT10aGlzLl9nZW5lcmF0ZVBsYWNlaG9sZGVyVmFsdWUoKSx0aGlzLl9iYXNlSWQ9bS5nZW5lcmF0ZUlkKHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LFwiY2hvaWNlcy1cIiksdGhpcy5fZGlyZWN0aW9uPXRoaXMucGFzc2VkRWxlbWVudC5kaXIsIXRoaXMuX2RpcmVjdGlvbil7dmFyIGQ9d2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpLmRpcmVjdGlvbjtkIT09d2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5kaXJlY3Rpb24mJih0aGlzLl9kaXJlY3Rpb249ZCl9aWYodGhpcy5faWROYW1lcz17aXRlbUNob2ljZTpcIml0ZW0tY2hvaWNlXCJ9LHRoaXMuX2lzU2VsZWN0RWxlbWVudCYmKHRoaXMuX3ByZXNldEdyb3Vwcz10aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9uR3JvdXBzLHRoaXMuX3ByZXNldE9wdGlvbnM9dGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMpLHRoaXMuX3ByZXNldENob2ljZXM9dGhpcy5jb25maWcuY2hvaWNlcyx0aGlzLl9wcmVzZXRJdGVtcz10aGlzLmNvbmZpZy5pdGVtcyx0aGlzLnBhc3NlZEVsZW1lbnQudmFsdWUmJnRoaXMuX2lzVGV4dEVsZW1lbnQpe3ZhciBwPXRoaXMucGFzc2VkRWxlbWVudC52YWx1ZS5zcGxpdCh0aGlzLmNvbmZpZy5kZWxpbWl0ZXIpO3RoaXMuX3ByZXNldEl0ZW1zPXRoaXMuX3ByZXNldEl0ZW1zLmNvbmNhdChwKX1pZih0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucyYmdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ci5fcHJlc2V0Q2hvaWNlcy5wdXNoKHt2YWx1ZTplLnZhbHVlLGxhYmVsOmUuaW5uZXJIVE1MLHNlbGVjdGVkOiEhZS5zZWxlY3RlZCxkaXNhYmxlZDplLmRpc2FibGVkfHxlLnBhcmVudE5vZGUuZGlzYWJsZWQscGxhY2Vob2xkZXI6XCJcIj09PWUudmFsdWV8fGUuaGFzQXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiksY3VzdG9tUHJvcGVydGllczplLmRhdGFzZXRbXCJjdXN0b20tcHJvcGVydGllc1wiXX0pfSkpLHRoaXMuX3JlbmRlcj10aGlzLl9yZW5kZXIuYmluZCh0aGlzKSx0aGlzLl9vbkZvY3VzPXRoaXMuX29uRm9jdXMuYmluZCh0aGlzKSx0aGlzLl9vbkJsdXI9dGhpcy5fb25CbHVyLmJpbmQodGhpcyksdGhpcy5fb25LZXlVcD10aGlzLl9vbktleVVwLmJpbmQodGhpcyksdGhpcy5fb25LZXlEb3duPXRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpLHRoaXMuX29uQ2xpY2s9dGhpcy5fb25DbGljay5iaW5kKHRoaXMpLHRoaXMuX29uVG91Y2hNb3ZlPXRoaXMuX29uVG91Y2hNb3ZlLmJpbmQodGhpcyksdGhpcy5fb25Ub3VjaEVuZD10aGlzLl9vblRvdWNoRW5kLmJpbmQodGhpcyksdGhpcy5fb25Nb3VzZURvd249dGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzKSx0aGlzLl9vbk1vdXNlT3Zlcj10aGlzLl9vbk1vdXNlT3Zlci5iaW5kKHRoaXMpLHRoaXMuX29uRm9ybVJlc2V0PXRoaXMuX29uRm9ybVJlc2V0LmJpbmQodGhpcyksdGhpcy5fb25TZWxlY3RLZXk9dGhpcy5fb25TZWxlY3RLZXkuYmluZCh0aGlzKSx0aGlzLl9vbkVudGVyS2V5PXRoaXMuX29uRW50ZXJLZXkuYmluZCh0aGlzKSx0aGlzLl9vbkVzY2FwZUtleT10aGlzLl9vbkVzY2FwZUtleS5iaW5kKHRoaXMpLHRoaXMuX29uRGlyZWN0aW9uS2V5PXRoaXMuX29uRGlyZWN0aW9uS2V5LmJpbmQodGhpcyksdGhpcy5fb25EZWxldGVLZXk9dGhpcy5fb25EZWxldGVLZXkuYmluZCh0aGlzKSx0aGlzLnBhc3NlZEVsZW1lbnQuaXNBY3RpdmUpcmV0dXJuIHRoaXMuY29uZmlnLnNpbGVudHx8Y29uc29sZS53YXJuKFwiVHJ5aW5nIHRvIGluaXRpYWxpc2UgQ2hvaWNlcyBvbiBlbGVtZW50IGFscmVhZHkgaW5pdGlhbGlzZWRcIix7ZWxlbWVudDp0fSksdm9pZCh0aGlzLmluaXRpYWxpc2VkPSEwKTt0aGlzLmluaXQoKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0c1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHtnZXQgb3B0aW9ucygpe3JldHVybiBnfSxnZXQgdGVtcGxhdGVzKCl7cmV0dXJuIHUuZGVmYXVsdH19KX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7aWYoIXRoaXMuaW5pdGlhbGlzZWQpe3RoaXMuX2NyZWF0ZVRlbXBsYXRlcygpLHRoaXMuX2NyZWF0ZUVsZW1lbnRzKCksdGhpcy5fY3JlYXRlU3RydWN0dXJlKCksdGhpcy5fc3RvcmUuc3Vic2NyaWJlKHRoaXMuX3JlbmRlciksdGhpcy5fcmVuZGVyKCksdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSwoIXRoaXMuY29uZmlnLmFkZEl0ZW1zfHx0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkmJnRoaXMuZGlzYWJsZSgpLHRoaXMuaW5pdGlhbGlzZWQ9ITA7dmFyIGU9dGhpcy5jb25maWcuY2FsbGJhY2tPbkluaXQ7ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5jYWxsKHRoaXMpfX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuaW5pdGlhbGlzZWQmJih0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpLHRoaXMucGFzc2VkRWxlbWVudC5yZXZlYWwoKSx0aGlzLmNvbnRhaW5lck91dGVyLnVud3JhcCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCksdGhpcy5jbGVhclN0b3JlKCksdGhpcy5faXNTZWxlY3RFbGVtZW50JiYodGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnM9dGhpcy5fcHJlc2V0T3B0aW9ucyksdGhpcy5fdGVtcGxhdGVzPXUuZGVmYXVsdCx0aGlzLmluaXRpYWxpc2VkPSExKX0sZS5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFzc2VkRWxlbWVudC5pc0Rpc2FibGVkJiZ0aGlzLnBhc3NlZEVsZW1lbnQuZW5hYmxlKCksdGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkJiYodGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLmlucHV0LmVuYWJsZSgpLHRoaXMuY29udGFpbmVyT3V0ZXIuZW5hYmxlKCkpLHRoaXN9LGUucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXNzZWRFbGVtZW50LmlzRGlzYWJsZWR8fHRoaXMucGFzc2VkRWxlbWVudC5kaXNhYmxlKCksdGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkfHwodGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSx0aGlzLmlucHV0LmRpc2FibGUoKSx0aGlzLmNvbnRhaW5lck91dGVyLmRpc2FibGUoKSksdGhpc30sZS5wcm90b3R5cGUuaGlnaGxpZ2h0SXRlbT1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PSEwKSwhZXx8IWUuaWQpcmV0dXJuIHRoaXM7dmFyIGk9ZS5pZCxuPWUuZ3JvdXBJZCxyPXZvaWQgMD09PW4/LTE6bixvPWUudmFsdWUscz12b2lkIDA9PT1vP1wiXCI6byxhPWUubGFiZWwsYz12b2lkIDA9PT1hP1wiXCI6YSx1PXI+PTA/dGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKHIpOm51bGw7cmV0dXJuIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGQuaGlnaGxpZ2h0SXRlbShpLCEwKSksdCYmdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChsLkVWRU5UUy5oaWdobGlnaHRJdGVtLHtpZDppLHZhbHVlOnMsbGFiZWw6Yyxncm91cFZhbHVlOnUmJnUudmFsdWU/dS52YWx1ZTpudWxsfSksdGhpc30sZS5wcm90b3R5cGUudW5oaWdobGlnaHRJdGVtPWZ1bmN0aW9uKGUpe2lmKCFlfHwhZS5pZClyZXR1cm4gdGhpczt2YXIgdD1lLmlkLGk9ZS5ncm91cElkLG49dm9pZCAwPT09aT8tMTppLHI9ZS52YWx1ZSxvPXZvaWQgMD09PXI/XCJcIjpyLHM9ZS5sYWJlbCxhPXZvaWQgMD09PXM/XCJcIjpzLGM9bj49MD90aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQobik6bnVsbDtyZXR1cm4gdGhpcy5fc3RvcmUuZGlzcGF0Y2goZC5oaWdobGlnaHRJdGVtKHQsITEpKSx0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGwuRVZFTlRTLmhpZ2hsaWdodEl0ZW0se2lkOnQsdmFsdWU6byxsYWJlbDphLGdyb3VwVmFsdWU6YyYmYy52YWx1ZT9jLnZhbHVlOm51bGx9KSx0aGlzfSxlLnByb3RvdHlwZS5oaWdobGlnaHRBbGw9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLl9zdG9yZS5pdGVtcy5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gZS5oaWdobGlnaHRJdGVtKHQpfSkpLHRoaXN9LGUucHJvdG90eXBlLnVuaGlnaGxpZ2h0QWxsPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5fc3RvcmUuaXRlbXMuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGUudW5oaWdobGlnaHRJdGVtKHQpfSkpLHRoaXN9LGUucHJvdG90eXBlLnJlbW92ZUFjdGl2ZUl0ZW1zQnlWYWx1ZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnZhbHVlPT09ZX0pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gdC5fcmVtb3ZlSXRlbShlKX0pKSx0aGlzfSxlLnByb3RvdHlwZS5yZW1vdmVBY3RpdmVJdGVtcz1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmlkIT09ZX0pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gdC5fcmVtb3ZlSXRlbShlKX0pKSx0aGlzfSxlLnByb3RvdHlwZS5yZW1vdmVIaWdobGlnaHRlZEl0ZW1zPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSx0aGlzLl9zdG9yZS5oaWdobGlnaHRlZEFjdGl2ZUl0ZW1zLmZvckVhY2goKGZ1bmN0aW9uKGkpe3QuX3JlbW92ZUl0ZW0oaSksZSYmdC5fdHJpZ2dlckNoYW5nZShpLnZhbHVlKX0pKSx0aGlzfSxlLnByb3RvdHlwZS5zaG93RHJvcGRvd249ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5kcm9wZG93bi5pc0FjdGl2ZT90aGlzOihyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7dC5kcm9wZG93bi5zaG93KCksdC5jb250YWluZXJPdXRlci5vcGVuKHQuZHJvcGRvd24uZGlzdGFuY2VGcm9tVG9wV2luZG93KSwhZSYmdC5fY2FuU2VhcmNoJiZ0LmlucHV0LmZvY3VzKCksdC5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChsLkVWRU5UUy5zaG93RHJvcGRvd24se30pfSkpLHRoaXMpfSxlLnByb3RvdHlwZS5oaWRlRHJvcGRvd249ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5kcm9wZG93bi5pc0FjdGl2ZT8ocmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3QuZHJvcGRvd24uaGlkZSgpLHQuY29udGFpbmVyT3V0ZXIuY2xvc2UoKSwhZSYmdC5fY2FuU2VhcmNoJiYodC5pbnB1dC5yZW1vdmVBY3RpdmVEZXNjZW5kYW50KCksdC5pbnB1dC5ibHVyKCkpLHQucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQobC5FVkVOVFMuaGlkZURyb3Bkb3duLHt9KX0pKSx0aGlzKTp0aGlzfSxlLnByb3RvdHlwZS5nZXRWYWx1ZT1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT0hMSk7dmFyIHQ9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMucmVkdWNlKChmdW5jdGlvbih0LGkpe3ZhciBuPWU/aS52YWx1ZTppO3JldHVybiB0LnB1c2gobiksdH0pLFtdKTtyZXR1cm4gdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50P3RbMF06dH0sZS5wcm90b3R5cGUuc2V0VmFsdWU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5pbml0aWFsaXNlZD8oZS5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gdC5fc2V0Q2hvaWNlT3JJdGVtKGUpfSkpLHRoaXMpOnRoaXN9LGUucHJvdG90eXBlLnNldENob2ljZUJ5VmFsdWU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4hdGhpcy5pbml0aWFsaXNlZHx8dGhpcy5faXNUZXh0RWxlbWVudD90aGlzOigoQXJyYXkuaXNBcnJheShlKT9lOltlXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQuX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlKGUpfSkpLHRoaXMpfSxlLnByb3RvdHlwZS5zZXRDaG9pY2VzPWZ1bmN0aW9uKGUsdCxpLG4pe3ZhciByPXRoaXM7aWYodm9pZCAwPT09ZSYmKGU9W10pLHZvaWQgMD09PXQmJih0PVwidmFsdWVcIiksdm9pZCAwPT09aSYmKGk9XCJsYWJlbFwiKSx2b2lkIDA9PT1uJiYobj0hMSksIXRoaXMuaW5pdGlhbGlzZWQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwic2V0Q2hvaWNlcyB3YXMgY2FsbGVkIG9uIGEgbm9uLWluaXRpYWxpemVkIGluc3RhbmNlIG9mIENob2ljZXNcIik7aWYoIXRoaXMuX2lzU2VsZWN0RWxlbWVudCl0aHJvdyBuZXcgVHlwZUVycm9yKFwic2V0Q2hvaWNlcyBjYW4ndCBiZSB1c2VkIHdpdGggSU5QVVQgYmFzZWQgQ2hvaWNlc1wiKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdHx8IXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcInZhbHVlIHBhcmFtZXRlciBtdXN0IGJlIGEgbmFtZSBvZiAndmFsdWUnIGZpZWxkIGluIHBhc3NlZCBvYmplY3RzXCIpO2lmKG4mJnRoaXMuY2xlYXJDaG9pY2VzKCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSl7dmFyIG89ZSh0aGlzKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlJiZvIGluc3RhbmNlb2YgUHJvbWlzZSlyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGUpe3JldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSl9KSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gci5faGFuZGxlTG9hZGluZ1N0YXRlKCEwKX0pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBvfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiByLnNldENob2ljZXMoZSx0LGksbil9KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe3IuY29uZmlnLnNpbGVudHx8Y29uc29sZS5lcnJvcihlKX0pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiByLl9oYW5kbGVMb2FkaW5nU3RhdGUoITEpfSkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSk7aWYoIUFycmF5LmlzQXJyYXkobykpdGhyb3cgbmV3IFR5cGVFcnJvcihcIi5zZXRDaG9pY2VzIGZpcnN0IGFyZ3VtZW50IGZ1bmN0aW9uIG11c3QgcmV0dXJuIGVpdGhlciBhcnJheSBvZiBjaG9pY2VzIG9yIFByb21pc2UsIGdvdDogXCIrdHlwZW9mIG8pO3JldHVybiB0aGlzLnNldENob2ljZXMobyx0LGksITEpfWlmKCFBcnJheS5pc0FycmF5KGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCIuc2V0Q2hvaWNlcyBtdXN0IGJlIGNhbGxlZCBlaXRoZXIgd2l0aCBhcnJheSBvZiBjaG9pY2VzIHdpdGggYSBmdW5jdGlvbiByZXN1bHRpbmcgaW50byBQcm9taXNlIG9mIGFycmF5IG9mIGNob2ljZXNcIik7cmV0dXJuIHRoaXMuY29udGFpbmVyT3V0ZXIucmVtb3ZlTG9hZGluZ1N0YXRlKCksdGhpcy5fc3RhcnRMb2FkaW5nKCksZS5mb3JFYWNoKChmdW5jdGlvbihlKXtpZihlLmNob2ljZXMpci5fYWRkR3JvdXAoe2lkOmUuaWQ/cGFyc2VJbnQoXCJcIitlLmlkLDEwKTpudWxsLGdyb3VwOmUsdmFsdWVLZXk6dCxsYWJlbEtleTppfSk7ZWxzZXt2YXIgbj1lO3IuX2FkZENob2ljZSh7dmFsdWU6blt0XSxsYWJlbDpuW2ldLGlzU2VsZWN0ZWQ6ISFuLnNlbGVjdGVkLGlzRGlzYWJsZWQ6ISFuLmRpc2FibGVkLHBsYWNlaG9sZGVyOiEhbi5wbGFjZWhvbGRlcixjdXN0b21Qcm9wZXJ0aWVzOm4uY3VzdG9tUHJvcGVydGllc30pfX0pKSx0aGlzLl9zdG9wTG9hZGluZygpLHRoaXN9LGUucHJvdG90eXBlLmNsZWFyQ2hvaWNlcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9zdG9yZS5kaXNwYXRjaChoLmNsZWFyQ2hvaWNlcygpKSx0aGlzfSxlLnByb3RvdHlwZS5jbGVhclN0b3JlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGYuY2xlYXJBbGwoKSksdGhpc30sZS5wcm90b3R5cGUuY2xlYXJJbnB1dD1mdW5jdGlvbigpe3ZhciBlPSF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ7cmV0dXJuIHRoaXMuaW5wdXQuY2xlYXIoZSksIXRoaXMuX2lzVGV4dEVsZW1lbnQmJnRoaXMuX2NhblNlYXJjaCYmKHRoaXMuX2lzU2VhcmNoaW5nPSExLHRoaXMuX3N0b3JlLmRpc3BhdGNoKGguYWN0aXZhdGVDaG9pY2VzKCEwKSkpLHRoaXN9LGUucHJvdG90eXBlLl9yZW5kZXI9ZnVuY3Rpb24oKXtpZighdGhpcy5fc3RvcmUuaXNMb2FkaW5nKCkpe3RoaXMuX2N1cnJlbnRTdGF0ZT10aGlzLl9zdG9yZS5zdGF0ZTt2YXIgZT10aGlzLl9jdXJyZW50U3RhdGUuY2hvaWNlcyE9PXRoaXMuX3ByZXZTdGF0ZS5jaG9pY2VzfHx0aGlzLl9jdXJyZW50U3RhdGUuZ3JvdXBzIT09dGhpcy5fcHJldlN0YXRlLmdyb3Vwc3x8dGhpcy5fY3VycmVudFN0YXRlLml0ZW1zIT09dGhpcy5fcHJldlN0YXRlLml0ZW1zLHQ9dGhpcy5faXNTZWxlY3RFbGVtZW50LGk9dGhpcy5fY3VycmVudFN0YXRlLml0ZW1zIT09dGhpcy5fcHJldlN0YXRlLml0ZW1zO2UmJih0JiZ0aGlzLl9yZW5kZXJDaG9pY2VzKCksaSYmdGhpcy5fcmVuZGVySXRlbXMoKSx0aGlzLl9wcmV2U3RhdGU9dGhpcy5fY3VycmVudFN0YXRlKX19LGUucHJvdG90eXBlLl9yZW5kZXJDaG9pY2VzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMuX3N0b3JlLGk9dC5hY3RpdmVHcm91cHMsbj10LmFjdGl2ZUNob2ljZXMscj1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jaG9pY2VMaXN0LmNsZWFyKCksdGhpcy5jb25maWcucmVzZXRTY3JvbGxQb3NpdGlvbiYmcmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3JldHVybiBlLmNob2ljZUxpc3Quc2Nyb2xsVG9Ub3AoKX0pKSxpLmxlbmd0aD49MSYmIXRoaXMuX2lzU2VhcmNoaW5nKXt2YXIgbz1uLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLnBsYWNlaG9sZGVyJiYtMT09PWUuZ3JvdXBJZH0pKTtvLmxlbmd0aD49MSYmKHI9dGhpcy5fY3JlYXRlQ2hvaWNlc0ZyYWdtZW50KG8scikpLHI9dGhpcy5fY3JlYXRlR3JvdXBzRnJhZ21lbnQoaSxuLHIpfWVsc2Ugbi5sZW5ndGg+PTEmJihyPXRoaXMuX2NyZWF0ZUNob2ljZXNGcmFnbWVudChuLHIpKTtpZihyLmNoaWxkTm9kZXMmJnIuY2hpbGROb2Rlcy5sZW5ndGg+MCl7dmFyIHM9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMsYT10aGlzLl9jYW5BZGRJdGVtKHMsdGhpcy5pbnB1dC52YWx1ZSk7aWYoYS5yZXNwb25zZSl0aGlzLmNob2ljZUxpc3QuYXBwZW5kKHIpLHRoaXMuX2hpZ2hsaWdodENob2ljZSgpO2Vsc2V7dmFyIGM9dGhpcy5fZ2V0VGVtcGxhdGUoXCJub3RpY2VcIixhLm5vdGljZSk7dGhpcy5jaG9pY2VMaXN0LmFwcGVuZChjKX19ZWxzZXt2YXIgbD12b2lkIDA7Yz12b2lkIDA7dGhpcy5faXNTZWFyY2hpbmc/KGM9XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5jb25maWcubm9SZXN1bHRzVGV4dD90aGlzLmNvbmZpZy5ub1Jlc3VsdHNUZXh0KCk6dGhpcy5jb25maWcubm9SZXN1bHRzVGV4dCxsPXRoaXMuX2dldFRlbXBsYXRlKFwibm90aWNlXCIsYyxcIm5vLXJlc3VsdHNcIikpOihjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY29uZmlnLm5vQ2hvaWNlc1RleHQ/dGhpcy5jb25maWcubm9DaG9pY2VzVGV4dCgpOnRoaXMuY29uZmlnLm5vQ2hvaWNlc1RleHQsbD10aGlzLl9nZXRUZW1wbGF0ZShcIm5vdGljZVwiLGMsXCJuby1jaG9pY2VzXCIpKSx0aGlzLmNob2ljZUxpc3QuYXBwZW5kKGwpfX0sZS5wcm90b3R5cGUuX3JlbmRlckl0ZW1zPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXN8fFtdO3RoaXMuaXRlbUxpc3QuY2xlYXIoKTt2YXIgdD10aGlzLl9jcmVhdGVJdGVtc0ZyYWdtZW50KGUpO3QuY2hpbGROb2RlcyYmdGhpcy5pdGVtTGlzdC5hcHBlbmQodCl9LGUucHJvdG90eXBlLl9jcmVhdGVHcm91cHNGcmFnbWVudD1mdW5jdGlvbihlLHQsaSl7dmFyIG49dGhpczt2b2lkIDA9PT1pJiYoaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpO3JldHVybiB0aGlzLmNvbmZpZy5zaG91bGRTb3J0JiZlLnNvcnQodGhpcy5jb25maWcuc29ydGVyKSxlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciByPWZ1bmN0aW9uKGUpe3JldHVybiB0LmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIG4uX2lzU2VsZWN0T25lRWxlbWVudD90Lmdyb3VwSWQ9PT1lLmlkOnQuZ3JvdXBJZD09PWUuaWQmJihcImFsd2F5c1wiPT09bi5jb25maWcucmVuZGVyU2VsZWN0ZWRDaG9pY2VzfHwhdC5zZWxlY3RlZCl9KSl9KGUpO2lmKHIubGVuZ3RoPj0xKXt2YXIgbz1uLl9nZXRUZW1wbGF0ZShcImNob2ljZUdyb3VwXCIsZSk7aS5hcHBlbmRDaGlsZChvKSxuLl9jcmVhdGVDaG9pY2VzRnJhZ21lbnQocixpLCEwKX19KSksaX0sZS5wcm90b3R5cGUuX2NyZWF0ZUNob2ljZXNGcmFnbWVudD1mdW5jdGlvbihlLHQsaSl7dmFyIHI9dGhpczt2b2lkIDA9PT10JiYodD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpLHZvaWQgMD09PWkmJihpPSExKTt2YXIgbz10aGlzLmNvbmZpZyxzPW8ucmVuZGVyU2VsZWN0ZWRDaG9pY2VzLGE9by5zZWFyY2hSZXN1bHRMaW1pdCxjPW8ucmVuZGVyQ2hvaWNlTGltaXQsbD10aGlzLl9pc1NlYXJjaGluZz9tLnNvcnRCeVNjb3JlOnRoaXMuY29uZmlnLnNvcnRlcix1PWZ1bmN0aW9uKGUpe2lmKFwiYXV0b1wiIT09c3x8KHIuX2lzU2VsZWN0T25lRWxlbWVudHx8IWUuc2VsZWN0ZWQpKXt2YXIgaT1yLl9nZXRUZW1wbGF0ZShcImNob2ljZVwiLGUsci5jb25maWcuaXRlbVNlbGVjdFRleHQpO3QuYXBwZW5kQ2hpbGQoaSl9fSxoPWU7XCJhdXRvXCIhPT1zfHx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnR8fChoPWUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4hZS5zZWxlY3RlZH0pKSk7dmFyIGQ9aC5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQucGxhY2Vob2xkZXI/ZS5wbGFjZWhvbGRlckNob2ljZXMucHVzaCh0KTplLm5vcm1hbENob2ljZXMucHVzaCh0KSxlfSkse3BsYWNlaG9sZGVyQ2hvaWNlczpbXSxub3JtYWxDaG9pY2VzOltdfSkscD1kLnBsYWNlaG9sZGVyQ2hvaWNlcyxmPWQubm9ybWFsQ2hvaWNlczsodGhpcy5jb25maWcuc2hvdWxkU29ydHx8dGhpcy5faXNTZWFyY2hpbmcpJiZmLnNvcnQobCk7dmFyIHY9aC5sZW5ndGgsXz10aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ/bihwLGYpOmY7dGhpcy5faXNTZWFyY2hpbmc/dj1hOmMmJmM+MCYmIWkmJih2PWMpO2Zvcih2YXIgZz0wO2c8djtnKz0xKV9bZ10mJnUoX1tnXSk7cmV0dXJuIHR9LGUucHJvdG90eXBlLl9jcmVhdGVJdGVtc0ZyYWdtZW50PWZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpczt2b2lkIDA9PT10JiYodD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpO3ZhciBuPXRoaXMuY29uZmlnLHI9bi5zaG91bGRTb3J0SXRlbXMsbz1uLnNvcnRlcixzPW4ucmVtb3ZlSXRlbUJ1dHRvbjtyJiYhdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50JiZlLnNvcnQobyksdGhpcy5faXNUZXh0RWxlbWVudD90aGlzLnBhc3NlZEVsZW1lbnQudmFsdWU9ZS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnZhbHVlfSkpLmpvaW4odGhpcy5jb25maWcuZGVsaW1pdGVyKTp0aGlzLnBhc3NlZEVsZW1lbnQub3B0aW9ucz1lO3JldHVybiBlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciBuPWkuX2dldFRlbXBsYXRlKFwiaXRlbVwiLGUscyk7dC5hcHBlbmRDaGlsZChuKX0pKSx0fSxlLnByb3RvdHlwZS5fdHJpZ2dlckNoYW5nZT1mdW5jdGlvbihlKXtudWxsIT1lJiZ0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KGwuRVZFTlRTLmNoYW5nZSx7dmFsdWU6ZX0pfSxlLnByb3RvdHlwZS5fc2VsZWN0UGxhY2Vob2xkZXJDaG9pY2U9ZnVuY3Rpb24oZSl7dGhpcy5fYWRkSXRlbSh7dmFsdWU6ZS52YWx1ZSxsYWJlbDplLmxhYmVsLGNob2ljZUlkOmUuaWQsZ3JvdXBJZDplLmdyb3VwSWQscGxhY2Vob2xkZXI6ZS5wbGFjZWhvbGRlcn0pLHRoaXMuX3RyaWdnZXJDaGFuZ2UoZS52YWx1ZSl9LGUucHJvdG90eXBlLl9oYW5kbGVCdXR0b25BY3Rpb249ZnVuY3Rpb24oZSx0KXtpZihlJiZ0JiZ0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyYmdGhpcy5jb25maWcucmVtb3ZlSXRlbUJ1dHRvbil7dmFyIGk9dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuZGF0YXNldC5pZCxuPWkmJmUuZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWQ9PT1wYXJzZUludChpLDEwKX0pKTtuJiYodGhpcy5fcmVtb3ZlSXRlbShuKSx0aGlzLl90cmlnZ2VyQ2hhbmdlKG4udmFsdWUpLHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCYmdGhpcy5fc3RvcmUucGxhY2Vob2xkZXJDaG9pY2UmJnRoaXMuX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlKHRoaXMuX3N0b3JlLnBsYWNlaG9sZGVyQ2hvaWNlKSl9fSxlLnByb3RvdHlwZS5faGFuZGxlSXRlbUFjdGlvbj1mdW5jdGlvbihlLHQsaSl7dmFyIG49dGhpcztpZih2b2lkIDA9PT1pJiYoaT0hMSksZSYmdCYmdGhpcy5jb25maWcucmVtb3ZlSXRlbXMmJiF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpe3ZhciByPXQuZGF0YXNldC5pZDtlLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuaWQhPT1wYXJzZUludChcIlwiK3IsMTApfHxlLmhpZ2hsaWdodGVkPyFpJiZlLmhpZ2hsaWdodGVkJiZuLnVuaGlnaGxpZ2h0SXRlbShlKTpuLmhpZ2hsaWdodEl0ZW0oZSl9KSksdGhpcy5pbnB1dC5mb2N1cygpfX0sZS5wcm90b3R5cGUuX2hhbmRsZUNob2ljZUFjdGlvbj1mdW5jdGlvbihlLHQpe2lmKGUmJnQpe3ZhciBpPXQuZGF0YXNldC5pZCxuPWkmJnRoaXMuX3N0b3JlLmdldENob2ljZUJ5SWQoaSk7aWYobil7dmFyIHI9ZVswXSYmZVswXS5rZXlDb2RlP2VbMF0ua2V5Q29kZTp2b2lkIDAsbz10aGlzLmRyb3Bkb3duLmlzQWN0aXZlO2lmKG4ua2V5Q29kZT1yLHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQobC5FVkVOVFMuY2hvaWNlLHtjaG9pY2U6bn0pLCFuLnNlbGVjdGVkJiYhbi5kaXNhYmxlZCl0aGlzLl9jYW5BZGRJdGVtKGUsbi52YWx1ZSkucmVzcG9uc2UmJih0aGlzLl9hZGRJdGVtKHt2YWx1ZTpuLnZhbHVlLGxhYmVsOm4ubGFiZWwsY2hvaWNlSWQ6bi5pZCxncm91cElkOm4uZ3JvdXBJZCxjdXN0b21Qcm9wZXJ0aWVzOm4uY3VzdG9tUHJvcGVydGllcyxwbGFjZWhvbGRlcjpuLnBsYWNlaG9sZGVyLGtleUNvZGU6bi5rZXlDb2RlfSksdGhpcy5fdHJpZ2dlckNoYW5nZShuLnZhbHVlKSk7dGhpcy5jbGVhcklucHV0KCksbyYmdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50JiYodGhpcy5oaWRlRHJvcGRvd24oITApLHRoaXMuY29udGFpbmVyT3V0ZXIuZm9jdXMoKSl9fX0sZS5wcm90b3R5cGUuX2hhbmRsZUJhY2tzcGFjZT1mdW5jdGlvbihlKXtpZih0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyYmZSl7dmFyIHQ9ZVtlLmxlbmd0aC0xXSxpPWUuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaGlnaGxpZ2h0ZWR9KSk7dGhpcy5jb25maWcuZWRpdEl0ZW1zJiYhaSYmdD8odGhpcy5pbnB1dC52YWx1ZT10LnZhbHVlLHRoaXMuaW5wdXQuc2V0V2lkdGgoKSx0aGlzLl9yZW1vdmVJdGVtKHQpLHRoaXMuX3RyaWdnZXJDaGFuZ2UodC52YWx1ZSkpOihpfHx0aGlzLmhpZ2hsaWdodEl0ZW0odCwhMSksdGhpcy5yZW1vdmVIaWdobGlnaHRlZEl0ZW1zKCEwKSl9fSxlLnByb3RvdHlwZS5fc3RhcnRMb2FkaW5nPWZ1bmN0aW9uKCl7dGhpcy5fc3RvcmUuZGlzcGF0Y2goZi5zZXRJc0xvYWRpbmcoITApKX0sZS5wcm90b3R5cGUuX3N0b3BMb2FkaW5nPWZ1bmN0aW9uKCl7dGhpcy5fc3RvcmUuZGlzcGF0Y2goZi5zZXRJc0xvYWRpbmcoITEpKX0sZS5wcm90b3R5cGUuX2hhbmRsZUxvYWRpbmdTdGF0ZT1mdW5jdGlvbihlKXt2b2lkIDA9PT1lJiYoZT0hMCk7dmFyIHQ9dGhpcy5pdGVtTGlzdC5nZXRDaGlsZChcIi5cIit0aGlzLmNvbmZpZy5jbGFzc05hbWVzLnBsYWNlaG9sZGVyKTtlPyh0aGlzLmRpc2FibGUoKSx0aGlzLmNvbnRhaW5lck91dGVyLmFkZExvYWRpbmdTdGF0ZSgpLHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudD90P3QuaW5uZXJIVE1MPXRoaXMuY29uZmlnLmxvYWRpbmdUZXh0Oih0PXRoaXMuX2dldFRlbXBsYXRlKFwicGxhY2Vob2xkZXJcIix0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dCkpJiZ0aGlzLml0ZW1MaXN0LmFwcGVuZCh0KTp0aGlzLmlucHV0LnBsYWNlaG9sZGVyPXRoaXMuY29uZmlnLmxvYWRpbmdUZXh0KToodGhpcy5lbmFibGUoKSx0aGlzLmNvbnRhaW5lck91dGVyLnJlbW92ZUxvYWRpbmdTdGF0ZSgpLHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudD90JiYodC5pbm5lckhUTUw9dGhpcy5fcGxhY2Vob2xkZXJWYWx1ZXx8XCJcIik6dGhpcy5pbnB1dC5wbGFjZWhvbGRlcj10aGlzLl9wbGFjZWhvbGRlclZhbHVlfHxcIlwiKX0sZS5wcm90b3R5cGUuX2hhbmRsZVNlYXJjaD1mdW5jdGlvbihlKXtpZihlJiZ0aGlzLmlucHV0LmlzRm9jdXNzZWQpe3ZhciB0PXRoaXMuX3N0b3JlLmNob2ljZXMsaT10aGlzLmNvbmZpZyxuPWkuc2VhcmNoRmxvb3Iscj1pLnNlYXJjaENob2ljZXMsbz10LnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiFlLmFjdGl2ZX0pKTtpZihlJiZlLmxlbmd0aD49bil7dmFyIHM9cj90aGlzLl9zZWFyY2hDaG9pY2VzKGUpOjA7dGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChsLkVWRU5UUy5zZWFyY2gse3ZhbHVlOmUscmVzdWx0Q291bnQ6c30pfWVsc2UgbyYmKHRoaXMuX2lzU2VhcmNoaW5nPSExLHRoaXMuX3N0b3JlLmRpc3BhdGNoKGguYWN0aXZhdGVDaG9pY2VzKCEwKSkpfX0sZS5wcm90b3R5cGUuX2NhbkFkZEl0ZW09ZnVuY3Rpb24oZSx0KXt2YXIgaT0hMCxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0P3RoaXMuY29uZmlnLmFkZEl0ZW1UZXh0KHQpOnRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0O2lmKCF0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpe3ZhciByPW0uZXhpc3RzSW5BcnJheShlLHQpO3RoaXMuY29uZmlnLm1heEl0ZW1Db3VudD4wJiZ0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQ8PWUubGVuZ3RoJiYoaT0hMSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY29uZmlnLm1heEl0ZW1UZXh0P3RoaXMuY29uZmlnLm1heEl0ZW1UZXh0KHRoaXMuY29uZmlnLm1heEl0ZW1Db3VudCk6dGhpcy5jb25maWcubWF4SXRlbVRleHQpLCF0aGlzLmNvbmZpZy5kdXBsaWNhdGVJdGVtc0FsbG93ZWQmJnImJmkmJihpPSExLG49XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQ/dGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQodCk6dGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQpLHRoaXMuX2lzVGV4dEVsZW1lbnQmJnRoaXMuY29uZmlnLmFkZEl0ZW1zJiZpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5hZGRJdGVtRmlsdGVyJiYhdGhpcy5jb25maWcuYWRkSXRlbUZpbHRlcih0KSYmKGk9ITEsbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dD90aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dCh0KTp0aGlzLmNvbmZpZy5jdXN0b21BZGRJdGVtVGV4dCl9cmV0dXJue3Jlc3BvbnNlOmksbm90aWNlOm59fSxlLnByb3RvdHlwZS5fc2VhcmNoQ2hvaWNlcz1mdW5jdGlvbihlKXt2YXIgdD1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnRyaW0oKTplLGk9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuX2N1cnJlbnRWYWx1ZT90aGlzLl9jdXJyZW50VmFsdWUudHJpbSgpOnRoaXMuX2N1cnJlbnRWYWx1ZTtpZih0Lmxlbmd0aDwxJiZ0PT09aStcIiBcIilyZXR1cm4gMDt2YXIgcj10aGlzLl9zdG9yZS5zZWFyY2hhYmxlQ2hvaWNlcyxzPXQsYT1uKHRoaXMuY29uZmlnLnNlYXJjaEZpZWxkcyksYz1PYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLmZ1c2VPcHRpb25zLHtrZXlzOmEsaW5jbHVkZU1hdGNoZXM6ITB9KSxsPW5ldyBvLmRlZmF1bHQocixjKS5zZWFyY2gocyk7cmV0dXJuIHRoaXMuX2N1cnJlbnRWYWx1ZT10LHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uPTAsdGhpcy5faXNTZWFyY2hpbmc9ITAsdGhpcy5fc3RvcmUuZGlzcGF0Y2goaC5maWx0ZXJDaG9pY2VzKGwpKSxsLmxlbmd0aH0sZS5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2UuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy5fb25Ub3VjaEVuZCwhMCksdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duLCEwKSx0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHRoaXMuX29uTW91c2VEb3duLCEwKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuX29uQ2xpY2sse3Bhc3NpdmU6ITB9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx7cGFzc2l2ZTohMH0pLHRoaXMuZHJvcGRvd24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5fb25Nb3VzZU92ZXIse3Bhc3NpdmU6ITB9KSx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQmJih0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsdGhpcy5fb25Gb2N1cyx7cGFzc2l2ZTohMH0pLHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1cix7cGFzc2l2ZTohMH0pKSx0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5fb25LZXlVcCx7cGFzc2l2ZTohMH0pLHRoaXMuaW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIix0aGlzLl9vbkZvY3VzLHtwYXNzaXZlOiEwfSksdGhpcy5pbnB1dC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5fb25CbHVyLHtwYXNzaXZlOiEwfSksdGhpcy5pbnB1dC5lbGVtZW50LmZvcm0mJnRoaXMuaW5wdXQuZWxlbWVudC5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLHRoaXMuX29uRm9ybVJlc2V0LHtwYXNzaXZlOiEwfSksdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVycygpfSxlLnByb3RvdHlwZS5fcmVtb3ZlRXZlbnRMaXN0ZW5lcnM9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLl9vblRvdWNoRW5kLCEwKSx0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9vbktleURvd24sITApLHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5fb25Nb3VzZURvd24sITApLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5fb25DbGljayksZS5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUpLHRoaXMuZHJvcGRvd24uZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5fb25Nb3VzZU92ZXIpLHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCYmKHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIix0aGlzLl9vbkZvY3VzKSx0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIix0aGlzLl9vbkJsdXIpKSx0aGlzLmlucHV0LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdGhpcy5fb25LZXlVcCksdGhpcy5pbnB1dC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHRoaXMuX29uRm9jdXMpLHRoaXMuaW5wdXQuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1ciksdGhpcy5pbnB1dC5lbGVtZW50LmZvcm0mJnRoaXMuaW5wdXQuZWxlbWVudC5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLHRoaXMuX29uRm9ybVJlc2V0KSx0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXJzKCl9LGUucHJvdG90eXBlLl9vbktleURvd249ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5rZXlDb2RlLGk9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMsbj10aGlzLmlucHV0LmlzRm9jdXNzZWQscj10aGlzLmRyb3Bkb3duLmlzQWN0aXZlLG89dGhpcy5pdGVtTGlzdC5oYXNDaGlsZHJlbigpLHM9U3RyaW5nLmZyb21DaGFyQ29kZSh0KSxhPS9bYS16QS1aMC05LV8gXS8udGVzdChzKSxjPWwuS0VZX0NPREVTLkJBQ0tfS0VZLHU9bC5LRVlfQ09ERVMuREVMRVRFX0tFWSxoPWwuS0VZX0NPREVTLkVOVEVSX0tFWSxkPWwuS0VZX0NPREVTLkFfS0VZLHA9bC5LRVlfQ09ERVMuRVNDX0tFWSxmPWwuS0VZX0NPREVTLlVQX0tFWSxtPWwuS0VZX0NPREVTLkRPV05fS0VZLHY9bC5LRVlfQ09ERVMuUEFHRV9VUF9LRVksXz1sLktFWV9DT0RFUy5QQUdFX0RPV05fS0VZO3N3aXRjaCh0aGlzLl9pc1RleHRFbGVtZW50fHxyfHwhYXx8KHRoaXMuc2hvd0Ryb3Bkb3duKCksdGhpcy5pbnB1dC5pc0ZvY3Vzc2VkfHwodGhpcy5pbnB1dC52YWx1ZSs9cy50b0xvd2VyQ2FzZSgpKSksdCl7Y2FzZSBkOnJldHVybiB0aGlzLl9vblNlbGVjdEtleShlLG8pO2Nhc2UgaDpyZXR1cm4gdGhpcy5fb25FbnRlcktleShlLGkscik7Y2FzZSBwOnJldHVybiB0aGlzLl9vbkVzY2FwZUtleShyKTtjYXNlIGY6Y2FzZSB2OmNhc2UgbTpjYXNlIF86cmV0dXJuIHRoaXMuX29uRGlyZWN0aW9uS2V5KGUscik7Y2FzZSB1OmNhc2UgYzpyZXR1cm4gdGhpcy5fb25EZWxldGVLZXkoZSxpLG4pfX0sZS5wcm90b3R5cGUuX29uS2V5VXA9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQsaT1lLmtleUNvZGUsbj10aGlzLmlucHV0LnZhbHVlLHI9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMsbz10aGlzLl9jYW5BZGRJdGVtKHIsbikscz1sLktFWV9DT0RFUy5CQUNLX0tFWSxhPWwuS0VZX0NPREVTLkRFTEVURV9LRVk7aWYodGhpcy5faXNUZXh0RWxlbWVudCl7aWYoby5ub3RpY2UmJm4pe3ZhciBjPXRoaXMuX2dldFRlbXBsYXRlKFwibm90aWNlXCIsby5ub3RpY2UpO3RoaXMuZHJvcGRvd24uZWxlbWVudC5pbm5lckhUTUw9Yy5vdXRlckhUTUwsdGhpcy5zaG93RHJvcGRvd24oITApfWVsc2UgdGhpcy5oaWRlRHJvcGRvd24oITApfWVsc2V7dmFyIHU9KGk9PT1zfHxpPT09YSkmJnQmJiF0LnZhbHVlLGQ9IXRoaXMuX2lzVGV4dEVsZW1lbnQmJnRoaXMuX2lzU2VhcmNoaW5nLHA9dGhpcy5fY2FuU2VhcmNoJiZvLnJlc3BvbnNlO3UmJmQ/KHRoaXMuX2lzU2VhcmNoaW5nPSExLHRoaXMuX3N0b3JlLmRpc3BhdGNoKGguYWN0aXZhdGVDaG9pY2VzKCEwKSkpOnAmJnRoaXMuX2hhbmRsZVNlYXJjaCh0aGlzLmlucHV0LnZhbHVlKX10aGlzLl9jYW5TZWFyY2g9dGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZH0sZS5wcm90b3R5cGUuX29uU2VsZWN0S2V5PWZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5jdHJsS2V5LG49ZS5tZXRhS2V5OyhpfHxuKSYmdCYmKHRoaXMuX2NhblNlYXJjaD0hMSx0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyYmIXRoaXMuaW5wdXQudmFsdWUmJnRoaXMuaW5wdXQuZWxlbWVudD09PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJnRoaXMuaGlnaGxpZ2h0QWxsKCkpfSxlLnByb3RvdHlwZS5fb25FbnRlcktleT1mdW5jdGlvbihlLHQsaSl7dmFyIG49ZS50YXJnZXQscj1sLktFWV9DT0RFUy5FTlRFUl9LRVksbz1uJiZuLmhhc0F0dHJpYnV0ZShcImRhdGEtYnV0dG9uXCIpO2lmKHRoaXMuX2lzVGV4dEVsZW1lbnQmJm4mJm4udmFsdWUpe3ZhciBzPXRoaXMuaW5wdXQudmFsdWU7dGhpcy5fY2FuQWRkSXRlbSh0LHMpLnJlc3BvbnNlJiYodGhpcy5oaWRlRHJvcGRvd24oITApLHRoaXMuX2FkZEl0ZW0oe3ZhbHVlOnN9KSx0aGlzLl90cmlnZ2VyQ2hhbmdlKHMpLHRoaXMuY2xlYXJJbnB1dCgpKX1pZihvJiYodGhpcy5faGFuZGxlQnV0dG9uQWN0aW9uKHQsbiksZS5wcmV2ZW50RGVmYXVsdCgpKSxpKXt2YXIgYT10aGlzLmRyb3Bkb3duLmdldENoaWxkKFwiLlwiK3RoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSk7YSYmKHRbMF0mJih0WzBdLmtleUNvZGU9ciksdGhpcy5faGFuZGxlQ2hvaWNlQWN0aW9uKHQsYSkpLGUucHJldmVudERlZmF1bHQoKX1lbHNlIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCYmKHRoaXMuc2hvd0Ryb3Bkb3duKCksZS5wcmV2ZW50RGVmYXVsdCgpKX0sZS5wcm90b3R5cGUuX29uRXNjYXBlS2V5PWZ1bmN0aW9uKGUpe2UmJih0aGlzLmhpZGVEcm9wZG93bighMCksdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpKX0sZS5wcm90b3R5cGUuX29uRGlyZWN0aW9uS2V5PWZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5rZXlDb2RlLG49ZS5tZXRhS2V5LHI9bC5LRVlfQ09ERVMuRE9XTl9LRVksbz1sLktFWV9DT0RFUy5QQUdFX1VQX0tFWSxzPWwuS0VZX0NPREVTLlBBR0VfRE9XTl9LRVk7aWYodHx8dGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KXt0aGlzLnNob3dEcm9wZG93bigpLHRoaXMuX2NhblNlYXJjaD0hMTt2YXIgYT1pPT09cnx8aT09PXM/MTotMSxjPXZvaWQgMDtpZihufHxpPT09c3x8aT09PW8pYz1hPjA/dGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV06bGFzdC1vZi10eXBlXCIpOnRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2hvaWNlLXNlbGVjdGFibGVdXCIpO2Vsc2V7dmFyIHU9dGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIrdGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKTtjPXU/bS5nZXRBZGphY2VudEVsKHUsXCJbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV1cIixhKTp0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNob2ljZS1zZWxlY3RhYmxlXVwiKX1jJiYobS5pc1Njcm9sbGVkSW50b1ZpZXcoYyx0aGlzLmNob2ljZUxpc3QuZWxlbWVudCxhKXx8dGhpcy5jaG9pY2VMaXN0LnNjcm9sbFRvQ2hpbGRFbGVtZW50KGMsYSksdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKGMpKSxlLnByZXZlbnREZWZhdWx0KCl9fSxlLnByb3RvdHlwZS5fb25EZWxldGVLZXk9ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPWUudGFyZ2V0O3RoaXMuX2lzU2VsZWN0T25lRWxlbWVudHx8bi52YWx1ZXx8IWl8fCh0aGlzLl9oYW5kbGVCYWNrc3BhY2UodCksZS5wcmV2ZW50RGVmYXVsdCgpKX0sZS5wcm90b3R5cGUuX29uVG91Y2hNb3ZlPWZ1bmN0aW9uKCl7dGhpcy5fd2FzVGFwJiYodGhpcy5fd2FzVGFwPSExKX0sZS5wcm90b3R5cGUuX29uVG91Y2hFbmQ9ZnVuY3Rpb24oZSl7dmFyIHQ9KGV8fGUudG91Y2hlc1swXSkudGFyZ2V0O3RoaXMuX3dhc1RhcCYmdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHQpJiYoKHQ9PT10aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnR8fHQ9PT10aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQpJiYodGhpcy5faXNUZXh0RWxlbWVudD90aGlzLmlucHV0LmZvY3VzKCk6dGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQmJnRoaXMuc2hvd0Ryb3Bkb3duKCkpLGUuc3RvcFByb3BhZ2F0aW9uKCkpO3RoaXMuX3dhc1RhcD0hMH0sZS5wcm90b3R5cGUuX29uTW91c2VEb3duPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O2lmKHQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7aWYoXyYmdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQuY29udGFpbnModCkpe3ZhciBpPXRoaXMuY2hvaWNlTGlzdC5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLG49XCJsdHJcIj09PXRoaXMuX2RpcmVjdGlvbj9lLm9mZnNldFg+PWkub2Zmc2V0V2lkdGg6ZS5vZmZzZXRYPGkub2Zmc2V0TGVmdDt0aGlzLl9pc1Njcm9sbGluZ09uSWU9bn1pZih0IT09dGhpcy5pbnB1dC5lbGVtZW50KXt2YXIgcj10LmNsb3Nlc3QoXCJbZGF0YS1idXR0b25dLFtkYXRhLWl0ZW1dLFtkYXRhLWNob2ljZV1cIik7aWYociBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXt2YXIgbz1lLnNoaWZ0S2V5LHM9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMsYT1yLmRhdGFzZXQ7XCJidXR0b25cImluIGE/dGhpcy5faGFuZGxlQnV0dG9uQWN0aW9uKHMscik6XCJpdGVtXCJpbiBhP3RoaXMuX2hhbmRsZUl0ZW1BY3Rpb24ocyxyLG8pOlwiY2hvaWNlXCJpbiBhJiZ0aGlzLl9oYW5kbGVDaG9pY2VBY3Rpb24ocyxyKX1lLnByZXZlbnREZWZhdWx0KCl9fX0sZS5wcm90b3R5cGUuX29uTW91c2VPdmVyPWZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCYmXCJjaG9pY2VcImluIHQuZGF0YXNldCYmdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKHQpfSxlLnByb3RvdHlwZS5fb25DbGljaz1mdW5jdGlvbihlKXt2YXIgdD1lLnRhcmdldDt0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuY29udGFpbnModCk/dGhpcy5kcm9wZG93bi5pc0FjdGl2ZXx8dGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkP3RoaXMuX2lzU2VsZWN0T25lRWxlbWVudCYmdCE9PXRoaXMuaW5wdXQuZWxlbWVudCYmIXRoaXMuZHJvcGRvd24uZWxlbWVudC5jb250YWlucyh0KSYmdGhpcy5oaWRlRHJvcGRvd24oKTp0aGlzLl9pc1RleHRFbGVtZW50P2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT10aGlzLmlucHV0LmVsZW1lbnQmJnRoaXMuaW5wdXQuZm9jdXMoKToodGhpcy5zaG93RHJvcGRvd24oKSx0aGlzLmNvbnRhaW5lck91dGVyLmZvY3VzKCkpOih0aGlzLl9zdG9yZS5oaWdobGlnaHRlZEFjdGl2ZUl0ZW1zLmxlbmd0aD4wJiZ0aGlzLnVuaGlnaGxpZ2h0QWxsKCksdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCksdGhpcy5oaWRlRHJvcGRvd24oITApKX0sZS5wcm90b3R5cGUuX29uRm9jdXM9ZnVuY3Rpb24oZSl7dmFyIHQsaT10aGlzLG49ZS50YXJnZXQ7biYmdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKG4pJiYoKHQ9e30pW2wuVEVYVF9UWVBFXT1mdW5jdGlvbigpe249PT1pLmlucHV0LmVsZW1lbnQmJmkuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpfSx0W2wuU0VMRUNUX09ORV9UWVBFXT1mdW5jdGlvbigpe2kuY29udGFpbmVyT3V0ZXIuYWRkRm9jdXNTdGF0ZSgpLG49PT1pLmlucHV0LmVsZW1lbnQmJmkuc2hvd0Ryb3Bkb3duKCEwKX0sdFtsLlNFTEVDVF9NVUxUSVBMRV9UWVBFXT1mdW5jdGlvbigpe249PT1pLmlucHV0LmVsZW1lbnQmJihpLnNob3dEcm9wZG93bighMCksaS5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCkpfSx0KVt0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlXSgpfSxlLnByb3RvdHlwZS5fb25CbHVyPWZ1bmN0aW9uKGUpe3ZhciB0LGk9dGhpcyxuPWUudGFyZ2V0O2lmKG4mJnRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5jb250YWlucyhuKSYmIXRoaXMuX2lzU2Nyb2xsaW5nT25JZSl7dmFyIHI9dGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaGlnaGxpZ2h0ZWR9KSk7KCh0PXt9KVtsLlRFWFRfVFlQRV09ZnVuY3Rpb24oKXtuPT09aS5pbnB1dC5lbGVtZW50JiYoaS5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCksciYmaS51bmhpZ2hsaWdodEFsbCgpLGkuaGlkZURyb3Bkb3duKCEwKSl9LHRbbC5TRUxFQ1RfT05FX1RZUEVdPWZ1bmN0aW9uKCl7aS5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCksKG49PT1pLmlucHV0LmVsZW1lbnR8fG49PT1pLmNvbnRhaW5lck91dGVyLmVsZW1lbnQmJiFpLl9jYW5TZWFyY2gpJiZpLmhpZGVEcm9wZG93bighMCl9LHRbbC5TRUxFQ1RfTVVMVElQTEVfVFlQRV09ZnVuY3Rpb24oKXtuPT09aS5pbnB1dC5lbGVtZW50JiYoaS5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCksaS5oaWRlRHJvcGRvd24oITApLHImJmkudW5oaWdobGlnaHRBbGwoKSl9LHQpW3RoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGVdKCl9ZWxzZSB0aGlzLl9pc1Njcm9sbGluZ09uSWU9ITEsdGhpcy5pbnB1dC5lbGVtZW50LmZvY3VzKCl9LGUucHJvdG90eXBlLl9vbkZvcm1SZXNldD1mdW5jdGlvbigpe3RoaXMuX3N0b3JlLmRpc3BhdGNoKGYucmVzZXRUbyh0aGlzLl9pbml0aWFsU3RhdGUpKX0sZS5wcm90b3R5cGUuX2hpZ2hsaWdodENob2ljZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3ZvaWQgMD09PWUmJihlPW51bGwpO3ZhciBpPUFycmF5LmZyb20odGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jaG9pY2Utc2VsZWN0YWJsZV1cIikpO2lmKGkubGVuZ3RoKXt2YXIgbj1lO0FycmF5LmZyb20odGhpcy5kcm9wZG93bi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5jbGFzc0xpc3QucmVtb3ZlKHQuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSksZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsXCJmYWxzZVwiKX0pKSxuP3RoaXMuX2hpZ2hsaWdodFBvc2l0aW9uPWkuaW5kZXhPZihuKToobj1pLmxlbmd0aD50aGlzLl9oaWdobGlnaHRQb3NpdGlvbj9pW3RoaXMuX2hpZ2hsaWdodFBvc2l0aW9uXTppW2kubGVuZ3RoLTFdKXx8KG49aVswXSksbi5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmNsYXNzTmFtZXMuaGlnaGxpZ2h0ZWRTdGF0ZSksbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsXCJ0cnVlXCIpLHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQobC5FVkVOVFMuaGlnaGxpZ2h0Q2hvaWNlLHtlbDpufSksdGhpcy5kcm9wZG93bi5pc0FjdGl2ZSYmKHRoaXMuaW5wdXQuc2V0QWN0aXZlRGVzY2VuZGFudChuLmlkKSx0aGlzLmNvbnRhaW5lck91dGVyLnNldEFjdGl2ZURlc2NlbmRhbnQobi5pZCkpfX0sZS5wcm90b3R5cGUuX2FkZEl0ZW09ZnVuY3Rpb24oZSl7dmFyIHQ9ZS52YWx1ZSxpPWUubGFiZWwsbj12b2lkIDA9PT1pP251bGw6aSxyPWUuY2hvaWNlSWQsbz12b2lkIDA9PT1yPy0xOnIscz1lLmdyb3VwSWQsYT12b2lkIDA9PT1zPy0xOnMsYz1lLmN1c3RvbVByb3BlcnRpZXMsdT12b2lkIDA9PT1jP3t9OmMsaD1lLnBsYWNlaG9sZGVyLHA9dm9pZCAwIT09aCYmaCxmPWUua2V5Q29kZSxtPXZvaWQgMD09PWY/LTE6Zix2PVwic3RyaW5nXCI9PXR5cGVvZiB0P3QudHJpbSgpOnQsXz10aGlzLl9zdG9yZS5pdGVtcyxnPW58fHYseT1vfHwtMSxiPWE+PTA/dGhpcy5fc3RvcmUuZ2V0R3JvdXBCeUlkKGEpOm51bGwsRT1fP18ubGVuZ3RoKzE6MTt0aGlzLmNvbmZpZy5wcmVwZW5kVmFsdWUmJih2PXRoaXMuY29uZmlnLnByZXBlbmRWYWx1ZSt2LnRvU3RyaW5nKCkpLHRoaXMuY29uZmlnLmFwcGVuZFZhbHVlJiYodis9dGhpcy5jb25maWcuYXBwZW5kVmFsdWUudG9TdHJpbmcoKSksdGhpcy5fc3RvcmUuZGlzcGF0Y2goZC5hZGRJdGVtKHt2YWx1ZTp2LGxhYmVsOmcsaWQ6RSxjaG9pY2VJZDp5LGdyb3VwSWQ6YSxjdXN0b21Qcm9wZXJ0aWVzOnUscGxhY2Vob2xkZXI6cCxrZXlDb2RlOm19KSksdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50JiZ0aGlzLnJlbW92ZUFjdGl2ZUl0ZW1zKEUpLHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQobC5FVkVOVFMuYWRkSXRlbSx7aWQ6RSx2YWx1ZTp2LGxhYmVsOmcsY3VzdG9tUHJvcGVydGllczp1LGdyb3VwVmFsdWU6YiYmYi52YWx1ZT9iLnZhbHVlOm51bGwsa2V5Q29kZTptfSl9LGUucHJvdG90eXBlLl9yZW1vdmVJdGVtPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaWQsaT1lLnZhbHVlLG49ZS5sYWJlbCxyPWUuY3VzdG9tUHJvcGVydGllcyxvPWUuY2hvaWNlSWQscz1lLmdyb3VwSWQsYT1zJiZzPj0wP3RoaXMuX3N0b3JlLmdldEdyb3VwQnlJZChzKTpudWxsO3QmJm8mJih0aGlzLl9zdG9yZS5kaXNwYXRjaChkLnJlbW92ZUl0ZW0odCxvKSksdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChsLkVWRU5UUy5yZW1vdmVJdGVtLHtpZDp0LHZhbHVlOmksbGFiZWw6bixjdXN0b21Qcm9wZXJ0aWVzOnIsZ3JvdXBWYWx1ZTphJiZhLnZhbHVlP2EudmFsdWU6bnVsbH0pKX0sZS5wcm90b3R5cGUuX2FkZENob2ljZT1mdW5jdGlvbihlKXt2YXIgdD1lLnZhbHVlLGk9ZS5sYWJlbCxuPXZvaWQgMD09PWk/bnVsbDppLHI9ZS5pc1NlbGVjdGVkLG89dm9pZCAwIT09ciYmcixzPWUuaXNEaXNhYmxlZCxhPXZvaWQgMCE9PXMmJnMsYz1lLmdyb3VwSWQsbD12b2lkIDA9PT1jPy0xOmMsdT1lLmN1c3RvbVByb3BlcnRpZXMsZD12b2lkIDA9PT11P3t9OnUscD1lLnBsYWNlaG9sZGVyLGY9dm9pZCAwIT09cCYmcCxtPWUua2V5Q29kZSx2PXZvaWQgMD09PW0/LTE6bTtpZihudWxsIT10KXt2YXIgXz10aGlzLl9zdG9yZS5jaG9pY2VzLGc9bnx8dCx5PV8/Xy5sZW5ndGgrMToxLGI9dGhpcy5fYmFzZUlkK1wiLVwiK3RoaXMuX2lkTmFtZXMuaXRlbUNob2ljZStcIi1cIit5O3RoaXMuX3N0b3JlLmRpc3BhdGNoKGguYWRkQ2hvaWNlKHtpZDp5LGdyb3VwSWQ6bCxlbGVtZW50SWQ6Yix2YWx1ZTp0LGxhYmVsOmcsZGlzYWJsZWQ6YSxjdXN0b21Qcm9wZXJ0aWVzOmQscGxhY2Vob2xkZXI6ZixrZXlDb2RlOnZ9KSksbyYmdGhpcy5fYWRkSXRlbSh7dmFsdWU6dCxsYWJlbDpnLGNob2ljZUlkOnksY3VzdG9tUHJvcGVydGllczpkLHBsYWNlaG9sZGVyOmYsa2V5Q29kZTp2fSl9fSxlLnByb3RvdHlwZS5fYWRkR3JvdXA9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPWUuZ3JvdXAsbj1lLmlkLHI9ZS52YWx1ZUtleSxvPXZvaWQgMD09PXI/XCJ2YWx1ZVwiOnIscz1lLmxhYmVsS2V5LGE9dm9pZCAwPT09cz9cImxhYmVsXCI6cyxjPW0uaXNUeXBlKFwiT2JqZWN0XCIsaSk/aS5jaG9pY2VzOkFycmF5LmZyb20oaS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIk9QVElPTlwiKSksbD1ufHxNYXRoLmZsb29yKChuZXcgRGF0ZSkudmFsdWVPZigpKk1hdGgucmFuZG9tKCkpLHU9ISFpLmRpc2FibGVkJiZpLmRpc2FibGVkO2lmKGMpe3RoaXMuX3N0b3JlLmRpc3BhdGNoKHAuYWRkR3JvdXAoe3ZhbHVlOmkubGFiZWwsaWQ6bCxhY3RpdmU6ITAsZGlzYWJsZWQ6dX0pKTtjLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciBpPWUuZGlzYWJsZWR8fGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLmRpc2FibGVkO3QuX2FkZENob2ljZSh7dmFsdWU6ZVtvXSxsYWJlbDptLmlzVHlwZShcIk9iamVjdFwiLGUpP2VbYV06ZS5pbm5lckhUTUwsaXNTZWxlY3RlZDplLnNlbGVjdGVkLGlzRGlzYWJsZWQ6aSxncm91cElkOmwsY3VzdG9tUHJvcGVydGllczplLmN1c3RvbVByb3BlcnRpZXMscGxhY2Vob2xkZXI6ZS5wbGFjZWhvbGRlcn0pfSkpfWVsc2UgdGhpcy5fc3RvcmUuZGlzcGF0Y2gocC5hZGRHcm91cCh7dmFsdWU6aS5sYWJlbCxpZDppLmlkLGFjdGl2ZTohMSxkaXNhYmxlZDppLmRpc2FibGVkfSkpfSxlLnByb3RvdHlwZS5fZ2V0VGVtcGxhdGU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LGk9W10scj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspaVtyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz10aGlzLmNvbmZpZy5jbGFzc05hbWVzO3JldHVybih0PXRoaXMuX3RlbXBsYXRlc1tlXSkuY2FsbC5hcHBseSh0LG4oW3RoaXMsb10saSkpfSxlLnByb3RvdHlwZS5fY3JlYXRlVGVtcGxhdGVzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jb25maWcuY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyx0PXt9O2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJih0PWUuY2FsbCh0aGlzLG0uc3RyVG9FbCkpLHRoaXMuX3RlbXBsYXRlcz1zLmRlZmF1bHQodS5kZWZhdWx0LHQpfSxlLnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudHM9ZnVuY3Rpb24oKXt0aGlzLmNvbnRhaW5lck91dGVyPW5ldyBjLkNvbnRhaW5lcih7ZWxlbWVudDp0aGlzLl9nZXRUZW1wbGF0ZShcImNvbnRhaW5lck91dGVyXCIsdGhpcy5fZGlyZWN0aW9uLHRoaXMuX2lzU2VsZWN0RWxlbWVudCx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQsdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCx0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlKSxjbGFzc05hbWVzOnRoaXMuY29uZmlnLmNsYXNzTmFtZXMsdHlwZTp0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLHBvc2l0aW9uOnRoaXMuY29uZmlnLnBvc2l0aW9ufSksdGhpcy5jb250YWluZXJJbm5lcj1uZXcgYy5Db250YWluZXIoe2VsZW1lbnQ6dGhpcy5fZ2V0VGVtcGxhdGUoXCJjb250YWluZXJJbm5lclwiKSxjbGFzc05hbWVzOnRoaXMuY29uZmlnLmNsYXNzTmFtZXMsdHlwZTp0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlLHBvc2l0aW9uOnRoaXMuY29uZmlnLnBvc2l0aW9ufSksdGhpcy5pbnB1dD1uZXcgYy5JbnB1dCh7ZWxlbWVudDp0aGlzLl9nZXRUZW1wbGF0ZShcImlucHV0XCIsdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSksY2xhc3NOYW1lczp0aGlzLmNvbmZpZy5jbGFzc05hbWVzLHR5cGU6dGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZSxwcmV2ZW50UGFzdGU6IXRoaXMuY29uZmlnLnBhc3RlfSksdGhpcy5jaG9pY2VMaXN0PW5ldyBjLkxpc3Qoe2VsZW1lbnQ6dGhpcy5fZ2V0VGVtcGxhdGUoXCJjaG9pY2VMaXN0XCIsdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KX0pLHRoaXMuaXRlbUxpc3Q9bmV3IGMuTGlzdCh7ZWxlbWVudDp0aGlzLl9nZXRUZW1wbGF0ZShcIml0ZW1MaXN0XCIsdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KX0pLHRoaXMuZHJvcGRvd249bmV3IGMuRHJvcGRvd24oe2VsZW1lbnQ6dGhpcy5fZ2V0VGVtcGxhdGUoXCJkcm9wZG93blwiKSxjbGFzc05hbWVzOnRoaXMuY29uZmlnLmNsYXNzTmFtZXMsdHlwZTp0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlfSl9LGUucHJvdG90eXBlLl9jcmVhdGVTdHJ1Y3R1cmU9ZnVuY3Rpb24oKXt0aGlzLnBhc3NlZEVsZW1lbnQuY29uY2VhbCgpLHRoaXMuY29udGFpbmVySW5uZXIud3JhcCh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCksdGhpcy5jb250YWluZXJPdXRlci53cmFwKHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudCksdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50P3RoaXMuaW5wdXQucGxhY2Vob2xkZXI9dGhpcy5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXJWYWx1ZXx8XCJcIjp0aGlzLl9wbGFjZWhvbGRlclZhbHVlJiYodGhpcy5pbnB1dC5wbGFjZWhvbGRlcj10aGlzLl9wbGFjZWhvbGRlclZhbHVlLHRoaXMuaW5wdXQuc2V0V2lkdGgoKSksdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudCksdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd24uZWxlbWVudCksdGhpcy5jb250YWluZXJJbm5lci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaXRlbUxpc3QuZWxlbWVudCksdGhpcy5faXNUZXh0RWxlbWVudHx8dGhpcy5kcm9wZG93bi5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2hvaWNlTGlzdC5lbGVtZW50KSx0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQ/dGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZCYmdGhpcy5kcm9wZG93bi5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmlucHV0LmVsZW1lbnQsdGhpcy5kcm9wZG93bi5lbGVtZW50LmZpcnN0Q2hpbGQpOnRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmlucHV0LmVsZW1lbnQpLHRoaXMuX2lzU2VsZWN0RWxlbWVudCYmKHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uPTAsdGhpcy5faXNTZWFyY2hpbmc9ITEsdGhpcy5fc3RhcnRMb2FkaW5nKCksdGhpcy5fcHJlc2V0R3JvdXBzLmxlbmd0aD90aGlzLl9hZGRQcmVkZWZpbmVkR3JvdXBzKHRoaXMuX3ByZXNldEdyb3Vwcyk6dGhpcy5fYWRkUHJlZGVmaW5lZENob2ljZXModGhpcy5fcHJlc2V0Q2hvaWNlcyksdGhpcy5fc3RvcExvYWRpbmcoKSksdGhpcy5faXNUZXh0RWxlbWVudCYmdGhpcy5fYWRkUHJlZGVmaW5lZEl0ZW1zKHRoaXMuX3ByZXNldEl0ZW1zKX0sZS5wcm90b3R5cGUuX2FkZFByZWRlZmluZWRHcm91cHM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxpPXRoaXMucGFzc2VkRWxlbWVudC5wbGFjZWhvbGRlck9wdGlvbjtpJiZpLnBhcmVudE5vZGUmJlwiU0VMRUNUXCI9PT1pLnBhcmVudE5vZGUudGFnTmFtZSYmdGhpcy5fYWRkQ2hvaWNlKHt2YWx1ZTppLnZhbHVlLGxhYmVsOmkuaW5uZXJIVE1MLGlzU2VsZWN0ZWQ6aS5zZWxlY3RlZCxpc0Rpc2FibGVkOmkuZGlzYWJsZWQscGxhY2Vob2xkZXI6ITB9KSxlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiB0Ll9hZGRHcm91cCh7Z3JvdXA6ZSxpZDplLmlkfHxudWxsfSl9KSl9LGUucHJvdG90eXBlLl9hZGRQcmVkZWZpbmVkQ2hvaWNlcz1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMuY29uZmlnLnNob3VsZFNvcnQmJmUuc29ydCh0aGlzLmNvbmZpZy5zb3J0ZXIpO3ZhciBpPWUuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2VsZWN0ZWR9KSksbj1lLmZpbmRJbmRleCgoZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUuZGlzYWJsZWR8fCFlLmRpc2FibGVkfSkpO2UuZm9yRWFjaCgoZnVuY3Rpb24oZSxyKXt2YXIgbz1lLnZhbHVlLHM9dm9pZCAwPT09bz9cIlwiOm8sYT1lLmxhYmVsLGM9ZS5jdXN0b21Qcm9wZXJ0aWVzLGw9ZS5wbGFjZWhvbGRlcjtpZih0Ll9pc1NlbGVjdEVsZW1lbnQpaWYoZS5jaG9pY2VzKXQuX2FkZEdyb3VwKHtncm91cDplLGlkOmUuaWR8fG51bGx9KTtlbHNle3ZhciB1PSEhKHQuX2lzU2VsZWN0T25lRWxlbWVudCYmIWkmJnI9PT1uKXx8ZS5zZWxlY3RlZCxoPWUuZGlzYWJsZWQ7Y29uc29sZS5sb2coaCxlKSx0Ll9hZGRDaG9pY2Uoe3ZhbHVlOnMsbGFiZWw6YSxpc1NlbGVjdGVkOiEhdSxpc0Rpc2FibGVkOiEhaCxwbGFjZWhvbGRlcjohIWwsY3VzdG9tUHJvcGVydGllczpjfSl9ZWxzZSB0Ll9hZGRDaG9pY2Uoe3ZhbHVlOnMsbGFiZWw6YSxpc1NlbGVjdGVkOiEhZS5zZWxlY3RlZCxpc0Rpc2FibGVkOiEhZS5kaXNhYmxlZCxwbGFjZWhvbGRlcjohIWUucGxhY2Vob2xkZXIsY3VzdG9tUHJvcGVydGllczpjfSl9KSl9LGUucHJvdG90eXBlLl9hZGRQcmVkZWZpbmVkSXRlbXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlLmZvckVhY2goKGZ1bmN0aW9uKGUpe1wib2JqZWN0XCI9PXR5cGVvZiBlJiZlLnZhbHVlJiZ0Ll9hZGRJdGVtKHt2YWx1ZTplLnZhbHVlLGxhYmVsOmUubGFiZWwsY2hvaWNlSWQ6ZS5pZCxjdXN0b21Qcm9wZXJ0aWVzOmUuY3VzdG9tUHJvcGVydGllcyxwbGFjZWhvbGRlcjplLnBsYWNlaG9sZGVyfSksXCJzdHJpbmdcIj09dHlwZW9mIGUmJnQuX2FkZEl0ZW0oe3ZhbHVlOmV9KX0pKX0sZS5wcm90b3R5cGUuX3NldENob2ljZU9ySXRlbT1mdW5jdGlvbihlKXt2YXIgdD10aGlzOyh7b2JqZWN0OmZ1bmN0aW9uKCl7ZS52YWx1ZSYmKHQuX2lzVGV4dEVsZW1lbnQ/dC5fYWRkSXRlbSh7dmFsdWU6ZS52YWx1ZSxsYWJlbDplLmxhYmVsLGNob2ljZUlkOmUuaWQsY3VzdG9tUHJvcGVydGllczplLmN1c3RvbVByb3BlcnRpZXMscGxhY2Vob2xkZXI6ZS5wbGFjZWhvbGRlcn0pOnQuX2FkZENob2ljZSh7dmFsdWU6ZS52YWx1ZSxsYWJlbDplLmxhYmVsLGlzU2VsZWN0ZWQ6ITAsaXNEaXNhYmxlZDohMSxjdXN0b21Qcm9wZXJ0aWVzOmUuY3VzdG9tUHJvcGVydGllcyxwbGFjZWhvbGRlcjplLnBsYWNlaG9sZGVyfSkpfSxzdHJpbmc6ZnVuY3Rpb24oKXt0Ll9pc1RleHRFbGVtZW50P3QuX2FkZEl0ZW0oe3ZhbHVlOmV9KTp0Ll9hZGRDaG9pY2Uoe3ZhbHVlOmUsbGFiZWw6ZSxpc1NlbGVjdGVkOiEwLGlzRGlzYWJsZWQ6ITF9KX19KVttLmdldFR5cGUoZSkudG9Mb3dlckNhc2UoKV0oKX0sZS5wcm90b3R5cGUuX2ZpbmRBbmRTZWxlY3RDaG9pY2VCeVZhbHVlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLl9zdG9yZS5jaG9pY2VzLmZpbmQoKGZ1bmN0aW9uKGkpe3JldHVybiB0LmNvbmZpZy52YWx1ZUNvbXBhcmVyKGkudmFsdWUsZSl9KSk7aSYmIWkuc2VsZWN0ZWQmJnRoaXMuX2FkZEl0ZW0oe3ZhbHVlOmkudmFsdWUsbGFiZWw6aS5sYWJlbCxjaG9pY2VJZDppLmlkLGdyb3VwSWQ6aS5ncm91cElkLGN1c3RvbVByb3BlcnRpZXM6aS5jdXN0b21Qcm9wZXJ0aWVzLHBsYWNlaG9sZGVyOmkucGxhY2Vob2xkZXIsa2V5Q29kZTppLmtleUNvZGV9KX0sZS5wcm90b3R5cGUuX2dlbmVyYXRlUGxhY2Vob2xkZXJWYWx1ZT1mdW5jdGlvbigpe2lmKHRoaXMuX2lzU2VsZWN0RWxlbWVudCl7dmFyIGU9dGhpcy5wYXNzZWRFbGVtZW50LnBsYWNlaG9sZGVyT3B0aW9uO3JldHVybiBlP2UudGV4dDpudWxsfXZhciB0PXRoaXMuY29uZmlnLGk9dC5wbGFjZWhvbGRlcixuPXQucGxhY2Vob2xkZXJWYWx1ZSxyPXRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LmRhdGFzZXQ7aWYoaSl7aWYobilyZXR1cm4gbjtpZihyLnBsYWNlaG9sZGVyKXJldHVybiByLnBsYWNlaG9sZGVyfXJldHVybiBudWxsfSxlfSgpO3QuZGVmYXVsdD15fSxmdW5jdGlvbihlLHQsaSl7XG4vKiFcbiAqIEZ1c2UuanMgdjMuNC42IC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBLaXJvbGxvcyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICogXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIGkobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciByPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLGkpLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIGkubT1lLGkuYz10LGkuZD1mdW5jdGlvbihlLHQsbil7aS5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0saS5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGkudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9aShlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGkucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIHIgaW4gZSlpLmQobixyLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwscikpO3JldHVybiBufSxpLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIGkuZCh0LFwiYVwiLHQpLHR9LGkubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0saS5wPVwiXCIsaShpLnM9MSl9KFtmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gQXJyYXkuaXNBcnJheT9BcnJheS5pc0FycmF5KGUpOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX19LGZ1bmN0aW9uKGUsdCxpKXtmdW5jdGlvbiBuKGUpe3JldHVybihuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiByKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX12YXIgbz1pKDIpLHM9aSg4KSxhPWkoMCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxpKXt2YXIgbj1pLmxvY2F0aW9uLHI9dm9pZCAwPT09bj8wOm4sbz1pLmRpc3RhbmNlLGE9dm9pZCAwPT09bz8xMDA6byxjPWkudGhyZXNob2xkLGw9dm9pZCAwPT09Yz8uNjpjLHU9aS5tYXhQYXR0ZXJuTGVuZ3RoLGg9dm9pZCAwPT09dT8zMjp1LGQ9aS5jYXNlU2Vuc2l0aXZlLHA9dm9pZCAwIT09ZCYmZCxmPWkudG9rZW5TZXBhcmF0b3IsbT12b2lkIDA9PT1mPy8gKy9nOmYsdj1pLmZpbmRBbGxNYXRjaGVzLF89dm9pZCAwIT09diYmdixnPWkubWluTWF0Y2hDaGFyTGVuZ3RoLHk9dm9pZCAwPT09Zz8xOmcsYj1pLmlkLEU9dm9pZCAwPT09Yj9udWxsOmIsUz1pLmtleXMsST12b2lkIDA9PT1TP1tdOlMsTz1pLnNob3VsZFNvcnQsQz12b2lkIDA9PT1PfHxPLFQ9aS5nZXRGbix3PXZvaWQgMD09PVQ/czpULEE9aS5zb3J0Rm4sTD12b2lkIDA9PT1BP2Z1bmN0aW9uKGUsdCl7cmV0dXJuIGUuc2NvcmUtdC5zY29yZX06QSxQPWkudG9rZW5pemUsRD12b2lkIDAhPT1QJiZQLHg9aS5tYXRjaEFsbFRva2VucyxOPXZvaWQgMCE9PXgmJngsTT1pLmluY2x1ZGVNYXRjaGVzLGo9dm9pZCAwIT09TSYmTSxrPWkuaW5jbHVkZVNjb3JlLEY9dm9pZCAwIT09ayYmayxLPWkudmVyYm9zZSxSPXZvaWQgMCE9PUsmJks7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLm9wdGlvbnM9e2xvY2F0aW9uOnIsZGlzdGFuY2U6YSx0aHJlc2hvbGQ6bCxtYXhQYXR0ZXJuTGVuZ3RoOmgsaXNDYXNlU2Vuc2l0aXZlOnAsdG9rZW5TZXBhcmF0b3I6bSxmaW5kQWxsTWF0Y2hlczpfLG1pbk1hdGNoQ2hhckxlbmd0aDp5LGlkOkUsa2V5czpJLGluY2x1ZGVNYXRjaGVzOmosaW5jbHVkZVNjb3JlOkYsc2hvdWxkU29ydDpDLGdldEZuOncsc29ydEZuOkwsdmVyYm9zZTpSLHRva2VuaXplOkQsbWF0Y2hBbGxUb2tlbnM6Tn0sdGhpcy5zZXRDb2xsZWN0aW9uKHQpfXZhciB0LGk7cmV0dXJuIHQ9ZSwoaT1be2tleTpcInNldENvbGxlY3Rpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saXN0PWUsZX19LHtrZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e2xpbWl0OiExfTt0aGlzLl9sb2coJy0tLS0tLS0tLVxcblNlYXJjaCBwYXR0ZXJuOiBcIicuY29uY2F0KGUsJ1wiJykpO3ZhciBpPXRoaXMuX3ByZXBhcmVTZWFyY2hlcnMoZSksbj1pLnRva2VuU2VhcmNoZXJzLHI9aS5mdWxsU2VhcmNoZXIsbz10aGlzLl9zZWFyY2gobixyKSxzPW8ud2VpZ2h0cyxhPW8ucmVzdWx0cztyZXR1cm4gdGhpcy5fY29tcHV0ZVNjb3JlKHMsYSksdGhpcy5vcHRpb25zLnNob3VsZFNvcnQmJnRoaXMuX3NvcnQoYSksdC5saW1pdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGltaXQmJihhPWEuc2xpY2UoMCx0LmxpbWl0KSksdGhpcy5fZm9ybWF0KGEpfX0se2tleTpcIl9wcmVwYXJlU2VhcmNoZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJcIix0PVtdO2lmKHRoaXMub3B0aW9ucy50b2tlbml6ZSlmb3IodmFyIGk9ZS5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLG49MCxyPWkubGVuZ3RoO248cjtuKz0xKXQucHVzaChuZXcgbyhpW25dLHRoaXMub3B0aW9ucykpO3JldHVybnt0b2tlblNlYXJjaGVyczp0LGZ1bGxTZWFyY2hlcjpuZXcgbyhlLHRoaXMub3B0aW9ucyl9fX0se2tleTpcIl9zZWFyY2hcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLGk9dGhpcy5saXN0LG49e30scj1bXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaVswXSl7Zm9yKHZhciBvPTAscz1pLmxlbmd0aDtvPHM7bys9MSl0aGlzLl9hbmFseXplKHtrZXk6XCJcIix2YWx1ZTppW29dLHJlY29yZDpvLGluZGV4Om99LHtyZXN1bHRNYXA6bixyZXN1bHRzOnIsdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pO3JldHVybnt3ZWlnaHRzOm51bGwscmVzdWx0czpyfX1mb3IodmFyIGE9e30sYz0wLGw9aS5sZW5ndGg7YzxsO2MrPTEpZm9yKHZhciB1PWlbY10saD0wLGQ9dGhpcy5vcHRpb25zLmtleXMubGVuZ3RoO2g8ZDtoKz0xKXt2YXIgcD10aGlzLm9wdGlvbnMua2V5c1toXTtpZihcInN0cmluZ1wiIT10eXBlb2YgcCl7aWYoYVtwLm5hbWVdPXt3ZWlnaHQ6MS1wLndlaWdodHx8MX0scC53ZWlnaHQ8PTB8fHAud2VpZ2h0PjEpdGhyb3cgbmV3IEVycm9yKFwiS2V5IHdlaWdodCBoYXMgdG8gYmUgPiAwIGFuZCA8PSAxXCIpO3A9cC5uYW1lfWVsc2UgYVtwXT17d2VpZ2h0OjF9O3RoaXMuX2FuYWx5emUoe2tleTpwLHZhbHVlOnRoaXMub3B0aW9ucy5nZXRGbih1LHApLHJlY29yZDp1LGluZGV4OmN9LHtyZXN1bHRNYXA6bixyZXN1bHRzOnIsdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pfXJldHVybnt3ZWlnaHRzOmEscmVzdWx0czpyfX19LHtrZXk6XCJfYW5hbHl6ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5rZXksbj1lLmFycmF5SW5kZXgscj12b2lkIDA9PT1uPy0xOm4sbz1lLnZhbHVlLHM9ZS5yZWNvcmQsYz1lLmluZGV4LGw9dC50b2tlblNlYXJjaGVycyx1PXZvaWQgMD09PWw/W106bCxoPXQuZnVsbFNlYXJjaGVyLGQ9dm9pZCAwPT09aD9bXTpoLHA9dC5yZXN1bHRNYXAsZj12b2lkIDA9PT1wP3t9OnAsbT10LnJlc3VsdHMsdj12b2lkIDA9PT1tP1tdOm07aWYobnVsbCE9byl7dmFyIF89ITEsZz0tMSx5PTA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG8pe3RoaXMuX2xvZyhcIlxcbktleTogXCIuY29uY2F0KFwiXCI9PT1pP1wiLVwiOmkpKTt2YXIgYj1kLnNlYXJjaChvKTtpZih0aGlzLl9sb2coJ0Z1bGwgdGV4dDogXCInLmNvbmNhdChvLCdcIiwgc2NvcmU6ICcpLmNvbmNhdChiLnNjb3JlKSksdGhpcy5vcHRpb25zLnRva2VuaXplKXtmb3IodmFyIEU9by5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLFM9W10sST0wO0k8dS5sZW5ndGg7SSs9MSl7dmFyIE89dVtJXTt0aGlzLl9sb2coJ1xcblBhdHRlcm46IFwiJy5jb25jYXQoTy5wYXR0ZXJuLCdcIicpKTtmb3IodmFyIEM9ITEsVD0wO1Q8RS5sZW5ndGg7VCs9MSl7dmFyIHc9RVtUXSxBPU8uc2VhcmNoKHcpLEw9e307QS5pc01hdGNoPyhMW3ddPUEuc2NvcmUsXz0hMCxDPSEwLFMucHVzaChBLnNjb3JlKSk6KExbd109MSx0aGlzLm9wdGlvbnMubWF0Y2hBbGxUb2tlbnN8fFMucHVzaCgxKSksdGhpcy5fbG9nKCdUb2tlbjogXCInLmNvbmNhdCh3LCdcIiwgc2NvcmU6ICcpLmNvbmNhdChMW3ddKSl9QyYmKHkrPTEpfWc9U1swXTtmb3IodmFyIFA9Uy5sZW5ndGgsRD0xO0Q8UDtEKz0xKWcrPVNbRF07Zy89UCx0aGlzLl9sb2coXCJUb2tlbiBzY29yZSBhdmVyYWdlOlwiLGcpfXZhciB4PWIuc2NvcmU7Zz4tMSYmKHg9KHgrZykvMiksdGhpcy5fbG9nKFwiU2NvcmUgYXZlcmFnZTpcIix4KTt2YXIgTj0hdGhpcy5vcHRpb25zLnRva2VuaXplfHwhdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zfHx5Pj11Lmxlbmd0aDtpZih0aGlzLl9sb2coXCJcXG5DaGVjayBNYXRjaGVzOiBcIi5jb25jYXQoTikpLChffHxiLmlzTWF0Y2gpJiZOKXt2YXIgTT1mW2NdO00/TS5vdXRwdXQucHVzaCh7a2V5OmksYXJyYXlJbmRleDpyLHZhbHVlOm8sc2NvcmU6eCxtYXRjaGVkSW5kaWNlczpiLm1hdGNoZWRJbmRpY2VzfSk6KGZbY109e2l0ZW06cyxvdXRwdXQ6W3trZXk6aSxhcnJheUluZGV4OnIsdmFsdWU6byxzY29yZTp4LG1hdGNoZWRJbmRpY2VzOmIubWF0Y2hlZEluZGljZXN9XX0sdi5wdXNoKGZbY10pKX19ZWxzZSBpZihhKG8pKWZvcih2YXIgaj0wLGs9by5sZW5ndGg7ajxrO2orPTEpdGhpcy5fYW5hbHl6ZSh7a2V5OmksYXJyYXlJbmRleDpqLHZhbHVlOm9bal0scmVjb3JkOnMsaW5kZXg6Y30se3Jlc3VsdE1hcDpmLHJlc3VsdHM6dix0b2tlblNlYXJjaGVyczp1LGZ1bGxTZWFyY2hlcjpkfSl9fX0se2tleTpcIl9jb21wdXRlU2NvcmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuX2xvZyhcIlxcblxcbkNvbXB1dGluZyBzY29yZTpcXG5cIik7Zm9yKHZhciBpPTAsbj10Lmxlbmd0aDtpPG47aSs9MSl7Zm9yKHZhciByPXRbaV0ub3V0cHV0LG89ci5sZW5ndGgscz0xLGE9MSxjPTA7YzxvO2MrPTEpe3ZhciBsPWU/ZVtyW2NdLmtleV0ud2VpZ2h0OjEsdT0oMT09PWw/cltjXS5zY29yZTpyW2NdLnNjb3JlfHwuMDAxKSpsOzEhPT1sP2E9TWF0aC5taW4oYSx1KToocltjXS5uU2NvcmU9dSxzKj11KX10W2ldLnNjb3JlPTE9PT1hP3M6YSx0aGlzLl9sb2codFtpXSl9fX0se2tleTpcIl9zb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fbG9nKFwiXFxuXFxuU29ydGluZy4uLi5cIiksZS5zb3J0KHRoaXMub3B0aW9ucy5zb3J0Rm4pfX0se2tleTpcIl9mb3JtYXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1bXTtpZih0aGlzLm9wdGlvbnMudmVyYm9zZSl7dmFyIGk9W107dGhpcy5fbG9nKFwiXFxuXFxuT3V0cHV0OlxcblxcblwiLEpTT04uc3RyaW5naWZ5KGUsKGZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09PW4odCkmJm51bGwhPT10KXtpZigtMSE9PWkuaW5kZXhPZih0KSlyZXR1cm47aS5wdXNoKHQpfXJldHVybiB0fSkpKSxpPW51bGx9dmFyIHI9W107dGhpcy5vcHRpb25zLmluY2x1ZGVNYXRjaGVzJiZyLnB1c2goKGZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5vdXRwdXQ7dC5tYXRjaGVzPVtdO2Zvcih2YXIgbj0wLHI9aS5sZW5ndGg7bjxyO24rPTEpe3ZhciBvPWlbbl07aWYoMCE9PW8ubWF0Y2hlZEluZGljZXMubGVuZ3RoKXt2YXIgcz17aW5kaWNlczpvLm1hdGNoZWRJbmRpY2VzLHZhbHVlOm8udmFsdWV9O28ua2V5JiYocy5rZXk9by5rZXkpLG8uaGFzT3duUHJvcGVydHkoXCJhcnJheUluZGV4XCIpJiZvLmFycmF5SW5kZXg+LTEmJihzLmFycmF5SW5kZXg9by5hcnJheUluZGV4KSx0Lm1hdGNoZXMucHVzaChzKX19fSkpLHRoaXMub3B0aW9ucy5pbmNsdWRlU2NvcmUmJnIucHVzaCgoZnVuY3Rpb24oZSx0KXt0LnNjb3JlPWUuc2NvcmV9KSk7Zm9yKHZhciBvPTAscz1lLmxlbmd0aDtvPHM7bys9MSl7dmFyIGE9ZVtvXTtpZih0aGlzLm9wdGlvbnMuaWQmJihhLml0ZW09dGhpcy5vcHRpb25zLmdldEZuKGEuaXRlbSx0aGlzLm9wdGlvbnMuaWQpWzBdKSxyLmxlbmd0aCl7Zm9yKHZhciBjPXtpdGVtOmEuaXRlbX0sbD0wLHU9ci5sZW5ndGg7bDx1O2wrPTEpcltsXShhLGMpO3QucHVzaChjKX1lbHNlIHQucHVzaChhLml0ZW0pfXJldHVybiB0fX0se2tleTpcIl9sb2dcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlO3RoaXMub3B0aW9ucy52ZXJib3NlJiYoZT1jb25zb2xlKS5sb2cuYXBwbHkoZSxhcmd1bWVudHMpfX1dKSYmcih0LnByb3RvdHlwZSxpKSxlfSgpO2UuZXhwb3J0cz1jfSxmdW5jdGlvbihlLHQsaSl7ZnVuY3Rpb24gbihlLHQpe2Zvcih2YXIgaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19dmFyIHI9aSgzKSxvPWkoNCkscz1pKDcpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsaSl7dmFyIG49aS5sb2NhdGlvbixyPXZvaWQgMD09PW4/MDpuLG89aS5kaXN0YW5jZSxhPXZvaWQgMD09PW8/MTAwOm8sYz1pLnRocmVzaG9sZCxsPXZvaWQgMD09PWM/LjY6Yyx1PWkubWF4UGF0dGVybkxlbmd0aCxoPXZvaWQgMD09PXU/MzI6dSxkPWkuaXNDYXNlU2Vuc2l0aXZlLHA9dm9pZCAwIT09ZCYmZCxmPWkudG9rZW5TZXBhcmF0b3IsbT12b2lkIDA9PT1mPy8gKy9nOmYsdj1pLmZpbmRBbGxNYXRjaGVzLF89dm9pZCAwIT09diYmdixnPWkubWluTWF0Y2hDaGFyTGVuZ3RoLHk9dm9pZCAwPT09Zz8xOmc7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLm9wdGlvbnM9e2xvY2F0aW9uOnIsZGlzdGFuY2U6YSx0aHJlc2hvbGQ6bCxtYXhQYXR0ZXJuTGVuZ3RoOmgsaXNDYXNlU2Vuc2l0aXZlOnAsdG9rZW5TZXBhcmF0b3I6bSxmaW5kQWxsTWF0Y2hlczpfLG1pbk1hdGNoQ2hhckxlbmd0aDp5fSx0aGlzLnBhdHRlcm49dGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZT90OnQudG9Mb3dlckNhc2UoKSx0aGlzLnBhdHRlcm4ubGVuZ3RoPD1oJiYodGhpcy5wYXR0ZXJuQWxwaGFiZXQ9cyh0aGlzLnBhdHRlcm4pKX12YXIgdCxpO3JldHVybiB0PWUsKGk9W3trZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlfHwoZT1lLnRvTG93ZXJDYXNlKCkpLHRoaXMucGF0dGVybj09PWUpcmV0dXJue2lzTWF0Y2g6ITAsc2NvcmU6MCxtYXRjaGVkSW5kaWNlczpbWzAsZS5sZW5ndGgtMV1dfTt2YXIgdD10aGlzLm9wdGlvbnMsaT10Lm1heFBhdHRlcm5MZW5ndGgsbj10LnRva2VuU2VwYXJhdG9yO2lmKHRoaXMucGF0dGVybi5sZW5ndGg+aSlyZXR1cm4gcihlLHRoaXMucGF0dGVybixuKTt2YXIgcz10aGlzLm9wdGlvbnMsYT1zLmxvY2F0aW9uLGM9cy5kaXN0YW5jZSxsPXMudGhyZXNob2xkLHU9cy5maW5kQWxsTWF0Y2hlcyxoPXMubWluTWF0Y2hDaGFyTGVuZ3RoO3JldHVybiBvKGUsdGhpcy5wYXR0ZXJuLHRoaXMucGF0dGVybkFscGhhYmV0LHtsb2NhdGlvbjphLGRpc3RhbmNlOmMsdGhyZXNob2xkOmwsZmluZEFsbE1hdGNoZXM6dSxtaW5NYXRjaENoYXJMZW5ndGg6aH0pfX1dKSYmbih0LnByb3RvdHlwZSxpKSxlfSgpO2UuZXhwb3J0cz1hfSxmdW5jdGlvbihlLHQpe3ZhciBpPS9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZztlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06LyArL2cscj1uZXcgUmVnRXhwKHQucmVwbGFjZShpLFwiXFxcXCQmXCIpLnJlcGxhY2UobixcInxcIikpLG89ZS5tYXRjaChyKSxzPSEhbyxhPVtdO2lmKHMpZm9yKHZhciBjPTAsbD1vLmxlbmd0aDtjPGw7Yys9MSl7dmFyIHU9b1tjXTthLnB1c2goW2UuaW5kZXhPZih1KSx1Lmxlbmd0aC0xXSl9cmV0dXJue3Njb3JlOnM/LjU6MSxpc01hdGNoOnMsbWF0Y2hlZEluZGljZXM6YX19fSxmdW5jdGlvbihlLHQsaSl7dmFyIG49aSg1KSxyPWkoNik7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxpLG8pe2Zvcih2YXIgcz1vLmxvY2F0aW9uLGE9dm9pZCAwPT09cz8wOnMsYz1vLmRpc3RhbmNlLGw9dm9pZCAwPT09Yz8xMDA6Yyx1PW8udGhyZXNob2xkLGg9dm9pZCAwPT09dT8uNjp1LGQ9by5maW5kQWxsTWF0Y2hlcyxwPXZvaWQgMCE9PWQmJmQsZj1vLm1pbk1hdGNoQ2hhckxlbmd0aCxtPXZvaWQgMD09PWY/MTpmLHY9YSxfPWUubGVuZ3RoLGc9aCx5PWUuaW5kZXhPZih0LHYpLGI9dC5sZW5ndGgsRT1bXSxTPTA7UzxfO1MrPTEpRVtTXT0wO2lmKC0xIT09eSl7dmFyIEk9bih0LHtlcnJvcnM6MCxjdXJyZW50TG9jYXRpb246eSxleHBlY3RlZExvY2F0aW9uOnYsZGlzdGFuY2U6bH0pO2lmKGc9TWF0aC5taW4oSSxnKSwtMSE9PSh5PWUubGFzdEluZGV4T2YodCx2K2IpKSl7dmFyIE89bih0LHtlcnJvcnM6MCxjdXJyZW50TG9jYXRpb246eSxleHBlY3RlZExvY2F0aW9uOnYsZGlzdGFuY2U6bH0pO2c9TWF0aC5taW4oTyxnKX19eT0tMTtmb3IodmFyIEM9W10sVD0xLHc9YitfLEE9MTw8KGI8PTMxP2ItMTozMCksTD0wO0w8YjtMKz0xKXtmb3IodmFyIFA9MCxEPXc7UDxEOyluKHQse2Vycm9yczpMLGN1cnJlbnRMb2NhdGlvbjp2K0QsZXhwZWN0ZWRMb2NhdGlvbjp2LGRpc3RhbmNlOmx9KTw9Zz9QPUQ6dz1ELEQ9TWF0aC5mbG9vcigody1QKS8yK1ApO3c9RDt2YXIgeD1NYXRoLm1heCgxLHYtRCsxKSxOPXA/XzpNYXRoLm1pbih2K0QsXykrYixNPUFycmF5KE4rMik7TVtOKzFdPSgxPDxMKS0xO2Zvcih2YXIgaj1OO2o+PXg7ai09MSl7dmFyIGs9ai0xLEY9aVtlLmNoYXJBdChrKV07aWYoRiYmKEVba109MSksTVtqXT0oTVtqKzFdPDwxfDEpJkYsMCE9PUwmJihNW2pdfD0oQ1tqKzFdfENbal0pPDwxfDF8Q1tqKzFdKSxNW2pdJkEmJihUPW4odCx7ZXJyb3JzOkwsY3VycmVudExvY2F0aW9uOmssZXhwZWN0ZWRMb2NhdGlvbjp2LGRpc3RhbmNlOmx9KSk8PWcpe2lmKGc9VCwoeT1rKTw9dilicmVhazt4PU1hdGgubWF4KDEsMip2LXkpfX1pZihuKHQse2Vycm9yczpMKzEsY3VycmVudExvY2F0aW9uOnYsZXhwZWN0ZWRMb2NhdGlvbjp2LGRpc3RhbmNlOmx9KT5nKWJyZWFrO0M9TX1yZXR1cm57aXNNYXRjaDp5Pj0wLHNjb3JlOjA9PT1UPy4wMDE6VCxtYXRjaGVkSW5kaWNlczpyKEUsbSl9fX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgaT10LmVycm9ycyxuPXZvaWQgMD09PWk/MDppLHI9dC5jdXJyZW50TG9jYXRpb24sbz12b2lkIDA9PT1yPzA6cixzPXQuZXhwZWN0ZWRMb2NhdGlvbixhPXZvaWQgMD09PXM/MDpzLGM9dC5kaXN0YW5jZSxsPXZvaWQgMD09PWM/MTAwOmMsdT1uL2UubGVuZ3RoLGg9TWF0aC5hYnMoYS1vKTtyZXR1cm4gbD91K2gvbDpoPzE6dX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToxLGk9W10sbj0tMSxyPS0xLG89MCxzPWUubGVuZ3RoO288cztvKz0xKXt2YXIgYT1lW29dO2EmJi0xPT09bj9uPW86YXx8LTE9PT1ufHwoKHI9by0xKS1uKzE+PXQmJmkucHVzaChbbixyXSksbj0tMSl9cmV0dXJuIGVbby0xXSYmby1uPj10JiZpLnB1c2goW24sby0xXSksaX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD17fSxpPWUubGVuZ3RoLG49MDtuPGk7bis9MSl0W2UuY2hhckF0KG4pXT0wO2Zvcih2YXIgcj0wO3I8aTtyKz0xKXRbZS5jaGFyQXQocildfD0xPDxpLXItMTtyZXR1cm4gdH19LGZ1bmN0aW9uKGUsdCxpKXt2YXIgbj1pKDApO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbiBlKHQsaSxyKXtpZihpKXt2YXIgbz1pLmluZGV4T2YoXCIuXCIpLHM9aSxhPW51bGw7LTEhPT1vJiYocz1pLnNsaWNlKDAsbyksYT1pLnNsaWNlKG8rMSkpO3ZhciBjPXRbc107aWYobnVsbCE9YylpZihhfHxcInN0cmluZ1wiIT10eXBlb2YgYyYmXCJudW1iZXJcIiE9dHlwZW9mIGMpaWYobihjKSlmb3IodmFyIGw9MCx1PWMubGVuZ3RoO2w8dTtsKz0xKWUoY1tsXSxhLHIpO2Vsc2UgYSYmZShjLGEscik7ZWxzZSByLnB1c2goYy50b1N0cmluZygpKX1lbHNlIHIucHVzaCh0KTtyZXR1cm4gcn0oZSx0LFtdKX19XSl9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT10eXBlb2YgZX0oZSkmJiFmdW5jdGlvbihlKXt2YXIgdD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PXR8fFwiW29iamVjdCBEYXRlXVwiPT09dHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUuJCR0eXBlb2Y9PT1yfShlKX0oZSl9O3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMztmdW5jdGlvbiBvKGUsdCl7cmV0dXJuITEhPT10LmNsb25lJiZ0LmlzTWVyZ2VhYmxlT2JqZWN0KGUpP2woKGk9ZSxBcnJheS5pc0FycmF5KGkpP1tdOnt9KSxlLHQpOmU7dmFyIGl9ZnVuY3Rpb24gcyhlLHQsaSl7cmV0dXJuIGUuY29uY2F0KHQpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIG8oZSxpKX0pKX1mdW5jdGlvbiBhKGUpe3JldHVybiBPYmplY3Qua2V5cyhlKS5jb25jYXQoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM/T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKHQpfSkpOltdfShlKSl9ZnVuY3Rpb24gYyhlLHQsaSl7dmFyIG49e307cmV0dXJuIGkuaXNNZXJnZWFibGVPYmplY3QoZSkmJmEoZSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7blt0XT1vKGVbdF0saSl9KSksYSh0KS5mb3JFYWNoKChmdW5jdGlvbihyKXsoZnVuY3Rpb24oZSx0KXt0cnl7cmV0dXJuIHQgaW4gZSYmIShPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpJiZPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHQpKX1jYXRjaChlKXtyZXR1cm4hMX19KShlLHIpfHwoaS5pc01lcmdlYWJsZU9iamVjdCh0W3JdKSYmZVtyXT9uW3JdPWZ1bmN0aW9uKGUsdCl7aWYoIXQuY3VzdG9tTWVyZ2UpcmV0dXJuIGw7dmFyIGk9dC5jdXN0b21NZXJnZShlKTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2k6bH0ocixpKShlW3JdLHRbcl0saSk6bltyXT1vKHRbcl0saSkpfSkpLG59ZnVuY3Rpb24gbChlLHQsaSl7KGk9aXx8e30pLmFycmF5TWVyZ2U9aS5hcnJheU1lcmdlfHxzLGkuaXNNZXJnZWFibGVPYmplY3Q9aS5pc01lcmdlYWJsZU9iamVjdHx8bixpLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkPW87dmFyIHI9QXJyYXkuaXNBcnJheSh0KTtyZXR1cm4gcj09PUFycmF5LmlzQXJyYXkoZSk/cj9pLmFycmF5TWVyZ2UoZSx0LGkpOmMoZSx0LGkpOm8odCxpKX1sLmFsbD1mdW5jdGlvbihlLHQpe2lmKCFBcnJheS5pc0FycmF5KGUpKXRocm93IG5ldyBFcnJvcihcImZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheVwiKTtyZXR1cm4gZS5yZWR1Y2UoKGZ1bmN0aW9uKGUsaSl7cmV0dXJuIGwoZSxpLHQpfSkse30pfTt2YXIgdT1sO2UuZXhwb3J0cz11fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX3NwcmVhZEFycmF5c3x8ZnVuY3Rpb24oKXtmb3IodmFyIGU9MCx0PTAsaT1hcmd1bWVudHMubGVuZ3RoO3Q8aTt0KyspZSs9YXJndW1lbnRzW3RdLmxlbmd0aDt2YXIgbj1BcnJheShlKSxyPTA7Zm9yKHQ9MDt0PGk7dCsrKWZvcih2YXIgbz1hcmd1bWVudHNbdF0scz0wLGE9by5sZW5ndGg7czxhO3MrKyxyKyspbltyXT1vW3NdO3JldHVybiBufSxyPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWkoMykscz1yKGkoNCkpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5fc3RvcmU9by5jcmVhdGVTdG9yZShzLmRlZmF1bHQsd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18mJndpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkpfXJldHVybiBlLnByb3RvdHlwZS5zdWJzY3JpYmU9ZnVuY3Rpb24oZSl7dGhpcy5fc3RvcmUuc3Vic2NyaWJlKGUpfSxlLnByb3RvdHlwZS5kaXNwYXRjaD1mdW5jdGlvbihlKXt0aGlzLl9zdG9yZS5kaXNwYXRjaChlKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwic3RhdGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3N0b3JlLmdldFN0YXRlKCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiaXRlbXNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RhdGUuaXRlbXN9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiYWN0aXZlSXRlbXNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuYWN0aXZlfSkpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcImhpZ2hsaWdodGVkQWN0aXZlSXRlbXNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5hY3RpdmUmJmUuaGlnaGxpZ2h0ZWR9KSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiY2hvaWNlc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGF0ZS5jaG9pY2VzfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcImFjdGl2ZUNob2ljZXNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hvaWNlcy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5hY3RpdmV9KSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwic2VsZWN0YWJsZUNob2ljZXNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hvaWNlcy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiEwIT09ZS5kaXNhYmxlZH0pKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJzZWFyY2hhYmxlQ2hvaWNlc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZWxlY3RhYmxlQ2hvaWNlcy5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiEwIT09ZS5wbGFjZWhvbGRlcn0pKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJwbGFjZWhvbGRlckNob2ljZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbih0aGlzLmNob2ljZXMpLnJldmVyc2UoKS5maW5kKChmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUucGxhY2Vob2xkZXJ9KSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiZ3JvdXBzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0YXRlLmdyb3Vwc30sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJhY3RpdmVHcm91cHNcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5ncm91cHMsdD10aGlzLmNob2ljZXM7cmV0dXJuIGUuZmlsdGVyKChmdW5jdGlvbihlKXt2YXIgaT0hMD09PWUuYWN0aXZlJiYhMT09PWUuZGlzYWJsZWQsbj10LnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZS5hY3RpdmUmJiExPT09ZS5kaXNhYmxlZH0pKTtyZXR1cm4gaSYmbn0pLFtdKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5pc0xvYWRpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdGF0ZS5sb2FkaW5nfSxlLnByb3RvdHlwZS5nZXRDaG9pY2VCeUlkPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFjdGl2ZUNob2ljZXMuZmluZCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuaWQ9PT1wYXJzZUludChlLDEwKX0pKX0sZS5wcm90b3R5cGUuZ2V0R3JvdXBCeUlkPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmdyb3Vwcy5maW5kKChmdW5jdGlvbih0KXtyZXR1cm4gdC5pZD09PWV9KSl9LGV9KCk7dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCl7dmFyIGk7aT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtpPWl8fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKGk9d2luZG93KX1lLmV4cG9ydHM9aX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoIWUud2VicGFja1BvbHlmaWxsKXt2YXIgdD1PYmplY3QuY3JlYXRlKGUpO3QuY2hpbGRyZW58fCh0LmNoaWxkcmVuPVtdKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcImxvYWRlZFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0Lmx9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJpZFwiLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0Lml9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJleHBvcnRzXCIse2VudW1lcmFibGU6ITB9KSx0LndlYnBhY2tQb2x5ZmlsbD0xfXJldHVybiB0fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19zcHJlYWRBcnJheXN8fGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD0wLGk9YXJndW1lbnRzLmxlbmd0aDt0PGk7dCsrKWUrPWFyZ3VtZW50c1t0XS5sZW5ndGg7dmFyIG49QXJyYXkoZSkscj0wO2Zvcih0PTA7dDxpO3QrKylmb3IodmFyIG89YXJndW1lbnRzW3RdLHM9MCxhPW8ubGVuZ3RoO3M8YTtzKysscisrKW5bcl09b1tzXTtyZXR1cm4gbn07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0U3RhdGU9W10sdC5kZWZhdWx0PWZ1bmN0aW9uKGUsaSl7c3dpdGNoKHZvaWQgMD09PWUmJihlPXQuZGVmYXVsdFN0YXRlKSxpLnR5cGUpe2Nhc2VcIkFERF9JVEVNXCI6dmFyIHI9aTtyZXR1cm4gbihlLFt7aWQ6ci5pZCxjaG9pY2VJZDpyLmNob2ljZUlkLGdyb3VwSWQ6ci5ncm91cElkLHZhbHVlOnIudmFsdWUsbGFiZWw6ci5sYWJlbCxhY3RpdmU6ITAsaGlnaGxpZ2h0ZWQ6ITEsY3VzdG9tUHJvcGVydGllczpyLmN1c3RvbVByb3BlcnRpZXMscGxhY2Vob2xkZXI6ci5wbGFjZWhvbGRlcnx8ITEsa2V5Q29kZTpudWxsfV0pLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZTtyZXR1cm4gdC5oaWdobGlnaHRlZD0hMSx0fSkpO2Nhc2VcIlJFTU9WRV9JVEVNXCI6cmV0dXJuIGUubWFwKChmdW5jdGlvbihlKXt2YXIgdD1lO3JldHVybiB0LmlkPT09aS5pZCYmKHQuYWN0aXZlPSExKSx0fSkpO2Nhc2VcIkhJR0hMSUdIVF9JVEVNXCI6dmFyIG89aTtyZXR1cm4gZS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PWU7cmV0dXJuIHQuaWQ9PT1vLmlkJiYodC5oaWdobGlnaHRlZD1vLmhpZ2hsaWdodGVkKSx0fSkpO2RlZmF1bHQ6cmV0dXJuIGV9fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19zcHJlYWRBcnJheXN8fGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTAsdD0wLGk9YXJndW1lbnRzLmxlbmd0aDt0PGk7dCsrKWUrPWFyZ3VtZW50c1t0XS5sZW5ndGg7dmFyIG49QXJyYXkoZSkscj0wO2Zvcih0PTA7dDxpO3QrKylmb3IodmFyIG89YXJndW1lbnRzW3RdLHM9MCxhPW8ubGVuZ3RoO3M8YTtzKysscisrKW5bcl09b1tzXTtyZXR1cm4gbn07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0U3RhdGU9W10sdC5kZWZhdWx0PWZ1bmN0aW9uKGUsaSl7c3dpdGNoKHZvaWQgMD09PWUmJihlPXQuZGVmYXVsdFN0YXRlKSxpLnR5cGUpe2Nhc2VcIkFERF9HUk9VUFwiOnZhciByPWk7cmV0dXJuIG4oZSxbe2lkOnIuaWQsdmFsdWU6ci52YWx1ZSxhY3RpdmU6ci5hY3RpdmUsZGlzYWJsZWQ6ci5kaXNhYmxlZH1dKTtjYXNlXCJDTEVBUl9DSE9JQ0VTXCI6cmV0dXJuW107ZGVmYXVsdDpyZXR1cm4gZX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX3NwcmVhZEFycmF5c3x8ZnVuY3Rpb24oKXtmb3IodmFyIGU9MCx0PTAsaT1hcmd1bWVudHMubGVuZ3RoO3Q8aTt0KyspZSs9YXJndW1lbnRzW3RdLmxlbmd0aDt2YXIgbj1BcnJheShlKSxyPTA7Zm9yKHQ9MDt0PGk7dCsrKWZvcih2YXIgbz1hcmd1bWVudHNbdF0scz0wLGE9by5sZW5ndGg7czxhO3MrKyxyKyspbltyXT1vW3NdO3JldHVybiBufTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHRTdGF0ZT1bXSx0LmRlZmF1bHQ9ZnVuY3Rpb24oZSxpKXtzd2l0Y2godm9pZCAwPT09ZSYmKGU9dC5kZWZhdWx0U3RhdGUpLGkudHlwZSl7Y2FzZVwiQUREX0NIT0lDRVwiOnZhciByPWksbz17aWQ6ci5pZCxlbGVtZW50SWQ6ci5lbGVtZW50SWQsZ3JvdXBJZDpyLmdyb3VwSWQsdmFsdWU6ci52YWx1ZSxsYWJlbDpyLmxhYmVsfHxyLnZhbHVlLGRpc2FibGVkOnIuZGlzYWJsZWR8fCExLHNlbGVjdGVkOiExLGFjdGl2ZTohMCxzY29yZTo5OTk5LGN1c3RvbVByb3BlcnRpZXM6ci5jdXN0b21Qcm9wZXJ0aWVzLHBsYWNlaG9sZGVyOnIucGxhY2Vob2xkZXJ8fCExfTtyZXR1cm4gbihlLFtvXSk7Y2FzZVwiQUREX0lURU1cIjp2YXIgcz1pO3JldHVybiBzLmNob2ljZUlkPi0xP2UubWFwKChmdW5jdGlvbihlKXt2YXIgdD1lO3JldHVybiB0LmlkPT09cGFyc2VJbnQoXCJcIitzLmNob2ljZUlkLDEwKSYmKHQuc2VsZWN0ZWQ9ITApLHR9KSk6ZTtjYXNlXCJSRU1PVkVfSVRFTVwiOnZhciBhPWk7cmV0dXJuIGEuY2hvaWNlSWQmJmEuY2hvaWNlSWQ+LTE/ZS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PWU7cmV0dXJuIHQuaWQ9PT1wYXJzZUludChcIlwiK2EuY2hvaWNlSWQsMTApJiYodC5zZWxlY3RlZD0hMSksdH0pKTplO2Nhc2VcIkZJTFRFUl9DSE9JQ0VTXCI6dmFyIGM9aTtyZXR1cm4gZS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PWU7cmV0dXJuIHQuYWN0aXZlPWMucmVzdWx0cy5zb21lKChmdW5jdGlvbihlKXt2YXIgaT1lLml0ZW0sbj1lLnNjb3JlO3JldHVybiBpLmlkPT09dC5pZCYmKHQuc2NvcmU9biwhMCl9KSksdH0pKTtjYXNlXCJBQ1RJVkFURV9DSE9JQ0VTXCI6dmFyIGw9aTtyZXR1cm4gZS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PWU7cmV0dXJuIHQuYWN0aXZlPWwuYWN0aXZlLHR9KSk7Y2FzZVwiQ0xFQVJfQ0hPSUNFU1wiOnJldHVybiB0LmRlZmF1bHRTdGF0ZTtkZWZhdWx0OnJldHVybiBlfX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHRTdGF0ZT0hMTt0LmRlZmF1bHQ9ZnVuY3Rpb24oZSxpKXtzd2l0Y2godm9pZCAwPT09ZSYmKGU9dC5kZWZhdWx0U3RhdGUpLGkudHlwZSl7Y2FzZVwiU0VUX0lTX0xPQURJTkdcIjpyZXR1cm4gaS5pc0xvYWRpbmc7ZGVmYXVsdDpyZXR1cm4gZX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bihpKDE5KSk7dC5Ecm9wZG93bj1yLmRlZmF1bHQ7dmFyIG89bihpKDIwKSk7dC5Db250YWluZXI9by5kZWZhdWx0O3ZhciBzPW4oaSgyMSkpO3QuSW5wdXQ9cy5kZWZhdWx0O3ZhciBhPW4oaSgyMikpO3QuTGlzdD1hLmRlZmF1bHQ7dmFyIGM9bihpKDIzKSk7dC5XcmFwcGVkSW5wdXQ9Yy5kZWZhdWx0O3ZhciBsPW4oaSgyNCkpO3QuV3JhcHBlZFNlbGVjdD1sLmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9ZS5lbGVtZW50LGk9ZS50eXBlLG49ZS5jbGFzc05hbWVzO3RoaXMuZWxlbWVudD10LHRoaXMuY2xhc3NOYW1lcz1uLHRoaXMudHlwZT1pLHRoaXMuaXNBY3RpdmU9ITF9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcImRpc3RhbmNlRnJvbVRvcFdpbmRvd1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5nZXRDaGlsZD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoZSl9LGUucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmFjdGl2ZVN0YXRlKSx0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwidHJ1ZVwiKSx0aGlzLmlzQWN0aXZlPSEwLHRoaXN9LGUucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmFjdGl2ZVN0YXRlKSx0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksdGhpcy5pc0FjdGl2ZT0hMSx0aGlzfSxlfSgpO3QuZGVmYXVsdD1ufSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49aSgxKSxyPWkoMCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9ZS5lbGVtZW50LGk9ZS50eXBlLG49ZS5jbGFzc05hbWVzLHI9ZS5wb3NpdGlvbjt0aGlzLmVsZW1lbnQ9dCx0aGlzLmNsYXNzTmFtZXM9bix0aGlzLnR5cGU9aSx0aGlzLnBvc2l0aW9uPXIsdGhpcy5pc09wZW49ITEsdGhpcy5pc0ZsaXBwZWQ9ITEsdGhpcy5pc0ZvY3Vzc2VkPSExLHRoaXMuaXNEaXNhYmxlZD0hMSx0aGlzLmlzTG9hZGluZz0hMSx0aGlzLl9vbkZvY3VzPXRoaXMuX29uRm9jdXMuYmluZCh0aGlzKSx0aGlzLl9vbkJsdXI9dGhpcy5fb25CbHVyLmJpbmQodGhpcyl9cmV0dXJuIGUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHRoaXMuX29uRm9jdXMpLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1cil9LGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLHRoaXMuX29uRm9jdXMpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLHRoaXMuX29uQmx1cil9LGUucHJvdG90eXBlLnNob3VsZEZsaXA9ZnVuY3Rpb24oZSl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGUpcmV0dXJuITE7dmFyIHQ9ITE7cmV0dXJuXCJhdXRvXCI9PT10aGlzLnBvc2l0aW9uP3Q9IXdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi1oZWlnaHQ6IFwiKyhlKzEpK1wicHgpXCIpLm1hdGNoZXM6XCJ0b3BcIj09PXRoaXMucG9zaXRpb24mJih0PSEwKSx0fSxlLnByb3RvdHlwZS5zZXRBY3RpdmVEZXNjZW5kYW50PWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIixlKX0sZS5wcm90b3R5cGUucmVtb3ZlQWN0aXZlRGVzY2VuZGFudD1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIil9LGUucHJvdG90eXBlLm9wZW49ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLm9wZW5TdGF0ZSksdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcInRydWVcIiksdGhpcy5pc09wZW49ITAsdGhpcy5zaG91bGRGbGlwKGUpJiYodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZsaXBwZWRTdGF0ZSksdGhpcy5pc0ZsaXBwZWQ9ITApfSxlLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5vcGVuU3RhdGUpLHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsXCJmYWxzZVwiKSx0aGlzLnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKSx0aGlzLmlzT3Blbj0hMSx0aGlzLmlzRmxpcHBlZCYmKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5mbGlwcGVkU3RhdGUpLHRoaXMuaXNGbGlwcGVkPSExKX0sZS5wcm90b3R5cGUuZm9jdXM9ZnVuY3Rpb24oKXt0aGlzLmlzRm9jdXNzZWR8fHRoaXMuZWxlbWVudC5mb2N1cygpfSxlLnByb3RvdHlwZS5hZGRGb2N1c1N0YXRlPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpfSxlLnByb3RvdHlwZS5yZW1vdmVGb2N1c1N0YXRlPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmZvY3VzU3RhdGUpfSxlLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMuZGlzYWJsZWRTdGF0ZSksdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiksdGhpcy50eXBlPT09ci5TRUxFQ1RfT05FX1RZUEUmJnRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiMFwiKSx0aGlzLmlzRGlzYWJsZWQ9ITF9LGUucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuZGlzYWJsZWRTdGF0ZSksdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksdGhpcy50eXBlPT09ci5TRUxFQ1RfT05FX1RZUEUmJnRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLFwiLTFcIiksdGhpcy5pc0Rpc2FibGVkPSEwfSxlLnByb3RvdHlwZS53cmFwPWZ1bmN0aW9uKGUpe24ud3JhcChlLHRoaXMuZWxlbWVudCl9LGUucHJvdG90eXBlLnVud3JhcD1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSYmKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMuZWxlbWVudCksdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KSl9LGUucHJvdG90eXBlLmFkZExvYWRpbmdTdGF0ZT1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5sb2FkaW5nU3RhdGUpLHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIixcInRydWVcIiksdGhpcy5pc0xvYWRpbmc9ITB9LGUucHJvdG90eXBlLnJlbW92ZUxvYWRpbmdTdGF0ZT1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5sb2FkaW5nU3RhdGUpLHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWJ1c3lcIiksdGhpcy5pc0xvYWRpbmc9ITF9LGUucHJvdG90eXBlLl9vbkZvY3VzPWZ1bmN0aW9uKCl7dGhpcy5pc0ZvY3Vzc2VkPSEwfSxlLnByb3RvdHlwZS5fb25CbHVyPWZ1bmN0aW9uKCl7dGhpcy5pc0ZvY3Vzc2VkPSExfSxlfSgpO3QuZGVmYXVsdD1vfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49aSgxKSxyPWkoMCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9ZS5lbGVtZW50LGk9ZS50eXBlLG49ZS5jbGFzc05hbWVzLHI9ZS5wcmV2ZW50UGFzdGU7dGhpcy5lbGVtZW50PXQsdGhpcy50eXBlPWksdGhpcy5jbGFzc05hbWVzPW4sdGhpcy5wcmV2ZW50UGFzdGU9cix0aGlzLmlzRm9jdXNzZWQ9dGhpcy5lbGVtZW50LmlzRXF1YWxOb2RlKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLHRoaXMuaXNEaXNhYmxlZD10LmRpc2FibGVkLHRoaXMuX29uUGFzdGU9dGhpcy5fb25QYXN0ZS5iaW5kKHRoaXMpLHRoaXMuX29uSW5wdXQ9dGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpLHRoaXMuX29uRm9jdXM9dGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpLHRoaXMuX29uQmx1cj10aGlzLl9vbkJsdXIuYmluZCh0aGlzKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwicGxhY2Vob2xkZXJcIix7c2V0OmZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5wbGFjZWhvbGRlcj1lfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcInZhbHVlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBuLnNhbml0aXNlKHRoaXMuZWxlbWVudC52YWx1ZSl9LHNldDpmdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQudmFsdWU9ZX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycz1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIix0aGlzLl9vblBhc3RlKSx0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsdGhpcy5fb25JbnB1dCx7cGFzc2l2ZTohMH0pLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIix0aGlzLl9vbkZvY3VzLHtwYXNzaXZlOiEwfSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5fb25CbHVyLHtwYXNzaXZlOiEwfSl9LGUucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXJzPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLHRoaXMuX29uSW5wdXQpLHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFzdGVcIix0aGlzLl9vblBhc3RlKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsdGhpcy5fb25Gb2N1cyksdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJibHVyXCIsdGhpcy5fb25CbHVyKX0sZS5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpLHRoaXMuaXNEaXNhYmxlZD0hMX0sZS5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwiXCIpLHRoaXMuaXNEaXNhYmxlZD0hMH0sZS5wcm90b3R5cGUuZm9jdXM9ZnVuY3Rpb24oKXt0aGlzLmlzRm9jdXNzZWR8fHRoaXMuZWxlbWVudC5mb2N1cygpfSxlLnByb3RvdHlwZS5ibHVyPWZ1bmN0aW9uKCl7dGhpcy5pc0ZvY3Vzc2VkJiZ0aGlzLmVsZW1lbnQuYmx1cigpfSxlLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITApLHRoaXMuZWxlbWVudC52YWx1ZSYmKHRoaXMuZWxlbWVudC52YWx1ZT1cIlwiKSxlJiZ0aGlzLnNldFdpZHRoKCksdGhpc30sZS5wcm90b3R5cGUuc2V0V2lkdGg9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmVsZW1lbnQsdD1lLnN0eWxlLGk9ZS52YWx1ZSxuPWUucGxhY2Vob2xkZXI7dC5taW5XaWR0aD1uLmxlbmd0aCsxK1wiY2hcIix0LndpZHRoPWkubGVuZ3RoKzErXCJjaFwifSxlLnByb3RvdHlwZS5zZXRBY3RpdmVEZXNjZW5kYW50PWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIixlKX0sZS5wcm90b3R5cGUucmVtb3ZlQWN0aXZlRGVzY2VuZGFudD1mdW5jdGlvbigpe3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIil9LGUucHJvdG90eXBlLl9vbklucHV0PWZ1bmN0aW9uKCl7dGhpcy50eXBlIT09ci5TRUxFQ1RfT05FX1RZUEUmJnRoaXMuc2V0V2lkdGgoKX0sZS5wcm90b3R5cGUuX29uUGFzdGU9ZnVuY3Rpb24oZSl7dGhpcy5wcmV2ZW50UGFzdGUmJmUucHJldmVudERlZmF1bHQoKX0sZS5wcm90b3R5cGUuX29uRm9jdXM9ZnVuY3Rpb24oKXt0aGlzLmlzRm9jdXNzZWQ9ITB9LGUucHJvdG90eXBlLl9vbkJsdXI9ZnVuY3Rpb24oKXt0aGlzLmlzRm9jdXNzZWQ9ITF9LGV9KCk7dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1pKDApLHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PWUuZWxlbWVudDt0aGlzLmVsZW1lbnQ9dCx0aGlzLnNjcm9sbFBvcz10aGlzLmVsZW1lbnQuc2Nyb2xsVG9wLHRoaXMuaGVpZ2h0PXRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHR9cmV0dXJuIGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LmlubmVySFRNTD1cIlwifSxlLnByb3RvdHlwZS5hcHBlbmQ9ZnVuY3Rpb24oZSl7dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGUpfSxlLnByb3RvdHlwZS5nZXRDaGlsZD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoZSl9LGUucHJvdG90eXBlLmhhc0NoaWxkcmVuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5oYXNDaGlsZE5vZGVzKCl9LGUucHJvdG90eXBlLnNjcm9sbFRvVG9wPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnNjcm9sbFRvcD0wfSxlLnByb3RvdHlwZS5zY3JvbGxUb0NoaWxkRWxlbWVudD1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXM7aWYoZSl7dmFyIG49dGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodCxyPXRoaXMuZWxlbWVudC5zY3JvbGxUb3ArbixvPWUub2Zmc2V0SGVpZ2h0LHM9ZS5vZmZzZXRUb3ArbyxhPXQ+MD90aGlzLmVsZW1lbnQuc2Nyb2xsVG9wK3MtcjplLm9mZnNldFRvcDtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7aS5fYW5pbWF0ZVNjcm9sbChhLHQpfSkpfX0sZS5wcm90b3R5cGUuX3Njcm9sbERvd249ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPShpLWUpL3Qscj1uPjE/bjoxO3RoaXMuZWxlbWVudC5zY3JvbGxUb3A9ZStyfSxlLnByb3RvdHlwZS5fc2Nyb2xsVXA9ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPShlLWkpL3Qscj1uPjE/bjoxO3RoaXMuZWxlbWVudC5zY3JvbGxUb3A9ZS1yfSxlLnByb3RvdHlwZS5fYW5pbWF0ZVNjcm9sbD1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMscj1uLlNDUk9MTElOR19TUEVFRCxvPXRoaXMuZWxlbWVudC5zY3JvbGxUb3Ascz0hMTt0PjA/KHRoaXMuX3Njcm9sbERvd24obyxyLGUpLG88ZSYmKHM9ITApKToodGhpcy5fc2Nyb2xsVXAobyxyLGUpLG8+ZSYmKHM9ITApKSxzJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7aS5fYW5pbWF0ZVNjcm9sbChlLHQpfSkpfSxlfSgpO3QuZGVmYXVsdD1yfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4obj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSx0KXtlLl9fcHJvdG9fXz10fXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYoZVtpXT10W2ldKX0pKGUsdCl9LGZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gaSgpe3RoaXMuY29uc3RydWN0b3I9ZX1uKGUsdCksZS5wcm90b3R5cGU9bnVsbD09PXQ/T2JqZWN0LmNyZWF0ZSh0KTooaS5wcm90b3R5cGU9dC5wcm90b3R5cGUsbmV3IGkpfSksbz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe3ZhciBpPXQuZWxlbWVudCxuPXQuY2xhc3NOYW1lcyxyPXQuZGVsaW1pdGVyLG89ZS5jYWxsKHRoaXMse2VsZW1lbnQ6aSxjbGFzc05hbWVzOm59KXx8dGhpcztyZXR1cm4gby5kZWxpbWl0ZXI9cixvfXJldHVybiByKHQsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwidmFsdWVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZX0sc2V0OmZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLGUpLHRoaXMuZWxlbWVudC52YWx1ZT1lfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHR9KG8oaSg1KSkuZGVmYXVsdCk7dC5kZWZhdWx0PXN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPXRoaXMmJnRoaXMuX19leHRlbmRzfHwobj1mdW5jdGlvbihlLHQpe3JldHVybihuPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihlLHQpe2UuX19wcm90b19fPXR9fHxmdW5jdGlvbihlLHQpe2Zvcih2YXIgaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJihlW2ldPXRbaV0pfSkoZSx0KX0sZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBpKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfW4oZSx0KSxlLnByb3RvdHlwZT1udWxsPT09dD9PYmplY3QuY3JlYXRlKHQpOihpLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgaSl9KSxvPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7dmFyIGk9dC5lbGVtZW50LG49dC5jbGFzc05hbWVzLHI9dC50ZW1wbGF0ZSxvPWUuY2FsbCh0aGlzLHtlbGVtZW50OmksY2xhc3NOYW1lczpufSl8fHRoaXM7cmV0dXJuIG8udGVtcGxhdGU9cixvfXJldHVybiByKHQsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicGxhY2Vob2xkZXJPcHRpb25cIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJcIl0nKXx8dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJvcHRpb25bcGxhY2Vob2xkZXJdXCIpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIm9wdGlvbkdyb3Vwc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJPUFRHUk9VUFwiKSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwib3B0aW9uc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQub3B0aW9ucyl9LHNldDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2UuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIG49ZSxyPXQudGVtcGxhdGUobiksdm9pZCBpLmFwcGVuZENoaWxkKHIpO3ZhciBuLHJ9KSksdGhpcy5hcHBlbmREb2NGcmFnbWVudChpKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5hcHBlbmREb2NGcmFnbWVudD1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQuaW5uZXJIVE1MPVwiXCIsdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGUpfSx0fShvKGkoNSkpLmRlZmF1bHQpO3QuZGVmYXVsdD1zfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49e2NvbnRhaW5lck91dGVyOmZ1bmN0aW9uKGUsdCxpLG4scixvKXt2YXIgcz1lLmNvbnRhaW5lck91dGVyLGE9T2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtjbGFzc05hbWU6c30pO3JldHVybiBhLmRhdGFzZXQudHlwZT1vLHQmJihhLmRpcj10KSxuJiYoYS50YWJJbmRleD0wKSxpJiYoYS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIscj9cImNvbWJvYm94XCI6XCJsaXN0Ym94XCIpLHImJmEuc2V0QXR0cmlidXRlKFwiYXJpYS1hdXRvY29tcGxldGVcIixcImxpc3RcIikpLGEuc2V0QXR0cmlidXRlKFwiYXJpYS1oYXNwb3B1cFwiLFwidHJ1ZVwiKSxhLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLGF9LGNvbnRhaW5lcklubmVyOmZ1bmN0aW9uKGUpe3ZhciB0PWUuY29udGFpbmVySW5uZXI7cmV0dXJuIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx7Y2xhc3NOYW1lOnR9KX0saXRlbUxpc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgaT1lLmxpc3Qsbj1lLmxpc3RTaW5nbGUscj1lLmxpc3RJdGVtcztyZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtjbGFzc05hbWU6aStcIiBcIisodD9uOnIpfSl9LHBsYWNlaG9sZGVyOmZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5wbGFjZWhvbGRlcjtyZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtjbGFzc05hbWU6aSxpbm5lckhUTUw6dH0pfSxpdGVtOmZ1bmN0aW9uKGUsdCxpKXt2YXIgbj1lLml0ZW0scj1lLmJ1dHRvbixvPWUuaGlnaGxpZ2h0ZWRTdGF0ZSxzPWUuaXRlbVNlbGVjdGFibGUsYT1lLnBsYWNlaG9sZGVyLGM9dC5pZCxsPXQudmFsdWUsdT10LmxhYmVsLGg9dC5jdXN0b21Qcm9wZXJ0aWVzLGQ9dC5hY3RpdmUscD10LmRpc2FibGVkLGY9dC5oaWdobGlnaHRlZCxtPXQucGxhY2Vob2xkZXIsdj1PYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikse2NsYXNzTmFtZTpuLGlubmVySFRNTDp1fSk7aWYoT2JqZWN0LmFzc2lnbih2LmRhdGFzZXQse2l0ZW06XCJcIixpZDpjLHZhbHVlOmwsY3VzdG9tUHJvcGVydGllczpofSksZCYmdi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsXCJ0cnVlXCIpLHAmJnYuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSxtJiZ2LmNsYXNzTGlzdC5hZGQoYSksdi5jbGFzc0xpc3QuYWRkKGY/bzpzKSxpKXtwJiZ2LmNsYXNzTGlzdC5yZW1vdmUocyksdi5kYXRhc2V0LmRlbGV0YWJsZT1cIlwiO3ZhciBfPU9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSx7dHlwZTpcImJ1dHRvblwiLGNsYXNzTmFtZTpyLGlubmVySFRNTDpcIlJlbW92ZSBpdGVtXCJ9KTtfLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIlJlbW92ZSBpdGVtOiAnXCIrbCtcIidcIiksXy5kYXRhc2V0LmJ1dHRvbj1cIlwiLHYuYXBwZW5kQ2hpbGQoXyl9cmV0dXJuIHZ9LGNob2ljZUxpc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgaT1lLmxpc3Qsbj1PYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikse2NsYXNzTmFtZTppfSk7cmV0dXJuIHR8fG4uc2V0QXR0cmlidXRlKFwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIixcInRydWVcIiksbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJsaXN0Ym94XCIpLG59LGNob2ljZUdyb3VwOmZ1bmN0aW9uKGUsdCl7dmFyIGk9ZS5ncm91cCxuPWUuZ3JvdXBIZWFkaW5nLHI9ZS5pdGVtRGlzYWJsZWQsbz10LmlkLHM9dC52YWx1ZSxhPXQuZGlzYWJsZWQsYz1PYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikse2NsYXNzTmFtZTppK1wiIFwiKyhhP3I6XCJcIil9KTtyZXR1cm4gYy5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJncm91cFwiKSxPYmplY3QuYXNzaWduKGMuZGF0YXNldCx7Z3JvdXA6XCJcIixpZDpvLHZhbHVlOnN9KSxhJiZjLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIixcInRydWVcIiksYy5hcHBlbmRDaGlsZChPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikse2NsYXNzTmFtZTpuLGlubmVySFRNTDpzfSkpLGN9LGNob2ljZTpmdW5jdGlvbihlLHQsaSl7dmFyIG49ZS5pdGVtLHI9ZS5pdGVtQ2hvaWNlLG89ZS5pdGVtU2VsZWN0YWJsZSxzPWUuc2VsZWN0ZWRTdGF0ZSxhPWUuaXRlbURpc2FibGVkLGM9ZS5wbGFjZWhvbGRlcixsPXQuaWQsdT10LnZhbHVlLGg9dC5sYWJlbCxkPXQuZ3JvdXBJZCxwPXQuZWxlbWVudElkLGY9dC5kaXNhYmxlZCxtPXQuc2VsZWN0ZWQsdj10LnBsYWNlaG9sZGVyLF89T2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHtpZDpwLGlubmVySFRNTDpoLGNsYXNzTmFtZTpuK1wiIFwiK3J9KTtyZXR1cm4gbSYmXy5jbGFzc0xpc3QuYWRkKHMpLHYmJl8uY2xhc3NMaXN0LmFkZChjKSxfLnNldEF0dHJpYnV0ZShcInJvbGVcIixkJiZkPjA/XCJ0cmVlaXRlbVwiOlwib3B0aW9uXCIpLE9iamVjdC5hc3NpZ24oXy5kYXRhc2V0LHtjaG9pY2U6XCJcIixpZDpsLHZhbHVlOnUsc2VsZWN0VGV4dDppfSksZj8oXy5jbGFzc0xpc3QuYWRkKGEpLF8uZGF0YXNldC5jaG9pY2VEaXNhYmxlZD1cIlwiLF8uc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSk6KF8uY2xhc3NMaXN0LmFkZChvKSxfLmRhdGFzZXQuY2hvaWNlU2VsZWN0YWJsZT1cIlwiKSxffSxpbnB1dDpmdW5jdGlvbihlLHQpe3ZhciBpPWUuaW5wdXQsbj1lLmlucHV0Q2xvbmVkLHI9T2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikse3R5cGU6XCJ0ZXh0XCIsY2xhc3NOYW1lOmkrXCIgXCIrbixhdXRvY29tcGxldGU6XCJvZmZcIixhdXRvY2FwaXRhbGl6ZTpcIm9mZlwiLHNwZWxsY2hlY2s6ITF9KTtyZXR1cm4gci5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJ0ZXh0Ym94XCIpLHIuc2V0QXR0cmlidXRlKFwiYXJpYS1hdXRvY29tcGxldGVcIixcImxpc3RcIiksci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsdCkscn0sZHJvcGRvd246ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5saXN0LGk9ZS5saXN0RHJvcGRvd24sbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBuLmNsYXNzTGlzdC5hZGQodCxpKSxuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIixcImZhbHNlXCIpLG59LG5vdGljZTpmdW5jdGlvbihlLHQsaSl7dmFyIG49ZS5pdGVtLHI9ZS5pdGVtQ2hvaWNlLG89ZS5ub1Jlc3VsdHMscz1lLm5vQ2hvaWNlczt2b2lkIDA9PT1pJiYoaT1cIlwiKTt2YXIgYT1bbixyXTtyZXR1cm5cIm5vLWNob2ljZXNcIj09PWk/YS5wdXNoKHMpOlwibm8tcmVzdWx0c1wiPT09aSYmYS5wdXNoKG8pLE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx7aW5uZXJIVE1MOnQsY2xhc3NOYW1lOmEuam9pbihcIiBcIil9KX0sb3B0aW9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubGFiZWwsaT1lLnZhbHVlLG49ZS5jdXN0b21Qcm9wZXJ0aWVzLHI9ZS5hY3RpdmUsbz1lLmRpc2FibGVkLHM9bmV3IE9wdGlvbih0LGksITEscik7cmV0dXJuIG4mJihzLmRhdGFzZXQuY3VzdG9tUHJvcGVydGllcz1cIlwiK24pLHMuZGlzYWJsZWQ9ISFvLHN9fTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWkoMCk7dC5hZGRDaG9pY2U9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS52YWx1ZSxpPWUubGFiZWwscj1lLmlkLG89ZS5ncm91cElkLHM9ZS5kaXNhYmxlZCxhPWUuZWxlbWVudElkLGM9ZS5jdXN0b21Qcm9wZXJ0aWVzLGw9ZS5wbGFjZWhvbGRlcix1PWUua2V5Q29kZTtyZXR1cm57dHlwZTpuLkFDVElPTl9UWVBFUy5BRERfQ0hPSUNFLHZhbHVlOnQsbGFiZWw6aSxpZDpyLGdyb3VwSWQ6byxkaXNhYmxlZDpzLGVsZW1lbnRJZDphLGN1c3RvbVByb3BlcnRpZXM6YyxwbGFjZWhvbGRlcjpsLGtleUNvZGU6dX19LHQuZmlsdGVyQ2hvaWNlcz1mdW5jdGlvbihlKXtyZXR1cm57dHlwZTpuLkFDVElPTl9UWVBFUy5GSUxURVJfQ0hPSUNFUyxyZXN1bHRzOmV9fSx0LmFjdGl2YXRlQ2hvaWNlcz1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITApLHt0eXBlOm4uQUNUSU9OX1RZUEVTLkFDVElWQVRFX0NIT0lDRVMsYWN0aXZlOmV9fSx0LmNsZWFyQ2hvaWNlcz1mdW5jdGlvbigpe3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLkNMRUFSX0NIT0lDRVN9fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWkoMCk7dC5hZGRJdGVtPWZ1bmN0aW9uKGUpe3ZhciB0PWUudmFsdWUsaT1lLmxhYmVsLHI9ZS5pZCxvPWUuY2hvaWNlSWQscz1lLmdyb3VwSWQsYT1lLmN1c3RvbVByb3BlcnRpZXMsYz1lLnBsYWNlaG9sZGVyLGw9ZS5rZXlDb2RlO3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLkFERF9JVEVNLHZhbHVlOnQsbGFiZWw6aSxpZDpyLGNob2ljZUlkOm8sZ3JvdXBJZDpzLGN1c3RvbVByb3BlcnRpZXM6YSxwbGFjZWhvbGRlcjpjLGtleUNvZGU6bH19LHQucmVtb3ZlSXRlbT1mdW5jdGlvbihlLHQpe3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLlJFTU9WRV9JVEVNLGlkOmUsY2hvaWNlSWQ6dH19LHQuaGlnaGxpZ2h0SXRlbT1mdW5jdGlvbihlLHQpe3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLkhJR0hMSUdIVF9JVEVNLGlkOmUsaGlnaGxpZ2h0ZWQ6dH19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49aSgwKTt0LmFkZEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PWUudmFsdWUsaT1lLmlkLHI9ZS5hY3RpdmUsbz1lLmRpc2FibGVkO3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLkFERF9HUk9VUCx2YWx1ZTp0LGlkOmksYWN0aXZlOnIsZGlzYWJsZWQ6b319fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49aSgwKTt0LmNsZWFyQWxsPWZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6bi5BQ1RJT05fVFlQRVMuQ0xFQVJfQUxMfX0sdC5yZXNldFRvPWZ1bmN0aW9uKGUpe3JldHVybnt0eXBlOm4uQUNUSU9OX1RZUEVTLlJFU0VUX1RPLHN0YXRlOmV9fSx0LnNldElzTG9hZGluZz1mdW5jdGlvbihlKXtyZXR1cm57dHlwZTpuLkFDVElPTl9UWVBFUy5TRVRfSVNfTE9BRElORyxpc0xvYWRpbmc6ZX19fV0pLmRlZmF1bHQ7XHJcbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuZGF0ZXBpY2tlcj10KCk6ZS5kYXRlcGlja2VyPXQoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKGEpe2lmKHRbYV0pcmV0dXJuIHRbYV0uZXhwb3J0czt2YXIgcj10W2FdPXtpOmEsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVthXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxuKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LGEpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDphfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIGE9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIoYSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciByIGluIGUpbi5kKGEscixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLHIpKTtyZXR1cm4gYX0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KTt2YXIgYT1bXSxyPVtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxpPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxvPXt0OlwidG9wXCIscjpcInJpZ2h0XCIsYjpcImJvdHRvbVwiLGw6XCJsZWZ0XCIsYzpcImNlbnRlcmVkXCJ9O2Z1bmN0aW9uIHMoKXt9dmFyIGw9W1wiY2xpY2tcIixcImZvY3VzaW5cIixcImtleWRvd25cIixcImlucHV0XCJdO2Z1bmN0aW9uIGQoZSl7bC5mb3JFYWNoKChmdW5jdGlvbih0KXtlLmFkZEV2ZW50TGlzdGVuZXIodCxlPT09ZG9jdW1lbnQ/TDpZKX0pKX1mdW5jdGlvbiBjKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpP2UubWFwKGMpOlwiW29iamVjdCBPYmplY3RdXCI9PT14KGUpP09iamVjdC5rZXlzKGUpLnJlZHVjZSgoZnVuY3Rpb24odCxuKXtyZXR1cm4gdFtuXT1jKGVbbl0pLHR9KSx7fSk6ZX1mdW5jdGlvbiB1KGUsdCl7dmFyIG49ZS5jYWxlbmRhci5xdWVyeVNlbGVjdG9yKFwiLnFzLW92ZXJsYXlcIiksYT1uJiYhbi5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIik7dD10fHxuZXcgRGF0ZShlLmN1cnJlbnRZZWFyLGUuY3VycmVudE1vbnRoKSxlLmNhbGVuZGFyLmlubmVySFRNTD1baCh0LGUsYSksZih0LGUsYSksdihlLGEpXS5qb2luKFwiXCIpLGEmJndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7TSghMCxlKX0pKX1mdW5jdGlvbiBoKGUsdCxuKXtyZXR1cm5bJzxkaXYgY2xhc3M9XCJxcy1jb250cm9scycrKG4/XCIgcXMtYmx1clwiOlwiXCIpKydcIj4nLCc8ZGl2IGNsYXNzPVwicXMtYXJyb3cgcXMtbGVmdFwiPjwvZGl2PicsJzxkaXYgY2xhc3M9XCJxcy1tb250aC15ZWFyXCI+JywnPHNwYW4gY2xhc3M9XCJxcy1tb250aFwiPicrdC5tb250aHNbZS5nZXRNb250aCgpXStcIjwvc3Bhbj5cIiwnPHNwYW4gY2xhc3M9XCJxcy15ZWFyXCI+JytlLmdldEZ1bGxZZWFyKCkrXCI8L3NwYW4+XCIsXCI8L2Rpdj5cIiwnPGRpdiBjbGFzcz1cInFzLWFycm93IHFzLXJpZ2h0XCI+PC9kaXY+JyxcIjwvZGl2PlwiXS5qb2luKFwiXCIpfWZ1bmN0aW9uIGYoZSx0LG4pe3ZhciBhPXQuY3VycmVudE1vbnRoLHI9dC5jdXJyZW50WWVhcixpPXQuZGF0ZVNlbGVjdGVkLG89dC5tYXhEYXRlLHM9dC5taW5EYXRlLGw9dC5zaG93QWxsRGF0ZXMsZD10LmRheXMsYz10LmRpc2FibGVkRGF0ZXMsdT10LnN0YXJ0RGF5LGg9dC53ZWVrZW5kSW5kaWNlcyxmPXQuZXZlbnRzLHY9dC5nZXRSYW5nZT90LmdldFJhbmdlKCk6e30sbT0rdi5zdGFydCx5PSt2LmVuZCxwPWcobmV3IERhdGUoZSkuc2V0RGF0ZSgxKSksdz1wLmdldERheSgpLXUsRD13PDA/NzowO3Auc2V0TW9udGgocC5nZXRNb250aCgpKzEpLHAuc2V0RGF0ZSgwKTt2YXIgYj1wLmdldERhdGUoKSxxPVtdLFM9RCs3KigodytiKS83fDApO1MrPSh3K2IpJTc/NzowO2Zvcih2YXIgTT0xO008PVM7TSsrKXt2YXIgRT0oTS0xKSU3LHg9ZFtFXSxDPU0tKHc+PTA/dzo3K3cpLEw9bmV3IERhdGUocixhLEMpLFk9ZlsrTF0saj1DPDF8fEM+YixQPWo/QzwxPy0xOjE6MCxrPWomJiFsLE89az9cIlwiOkwuZ2V0RGF0ZSgpLE49K0w9PStpLF89RT09PWhbMF18fEU9PT1oWzFdLEk9bSE9PXksQT1cInFzLXNxdWFyZSBcIit4O1kmJiFrJiYoQSs9XCIgcXMtZXZlbnRcIiksaiYmKEErPVwiIHFzLW91dHNpZGUtY3VycmVudC1tb250aFwiKSwhbCYmanx8KEErPVwiIHFzLW51bVwiKSxOJiYoQSs9XCIgcXMtYWN0aXZlXCIpLChjWytMXXx8dC5kaXNhYmxlcihMKXx8XyYmdC5ub1dlZWtlbmRzfHxzJiYrTDwrc3x8byYmK0w+K28pJiYhayYmKEErPVwiIHFzLWRpc2FibGVkXCIpLCtnKG5ldyBEYXRlKT09K0wmJihBKz1cIiBxcy1jdXJyZW50XCIpLCtMPT09bSYmeSYmSSYmKEErPVwiIHFzLXJhbmdlLXN0YXJ0XCIpLCtMPm0mJitMPHkmJihBKz1cIiBxcy1yYW5nZS1taWRkbGVcIiksK0w9PT15JiZtJiZJJiYoQSs9XCIgcXMtcmFuZ2UtZW5kXCIpLGsmJihBKz1cIiBxcy1lbXB0eVwiLE89XCJcIikscS5wdXNoKCc8ZGl2IGNsYXNzPVwiJytBKydcIiBkYXRhLWRpcmVjdGlvbj1cIicrUCsnXCI+JytPK1wiPC9kaXY+XCIpfXZhciBSPWQubWFwKChmdW5jdGlvbihlKXtyZXR1cm4nPGRpdiBjbGFzcz1cInFzLXNxdWFyZSBxcy1kYXlcIj4nK2UrXCI8L2Rpdj5cIn0pKS5jb25jYXQocSk7cmV0dXJuIFIudW5zaGlmdCgnPGRpdiBjbGFzcz1cInFzLXNxdWFyZXMnKyhuP1wiIHFzLWJsdXJcIjpcIlwiKSsnXCI+JyksUi5wdXNoKFwiPC9kaXY+XCIpLFIuam9pbihcIlwiKX1mdW5jdGlvbiB2KGUsdCl7dmFyIG49ZS5vdmVybGF5UGxhY2Vob2xkZXIsYT1lLm92ZXJsYXlCdXR0b247cmV0dXJuWyc8ZGl2IGNsYXNzPVwicXMtb3ZlcmxheScrKHQ/XCJcIjpcIiBxcy1oaWRkZW5cIikrJ1wiPicsXCI8ZGl2PlwiLCc8aW5wdXQgY2xhc3M9XCJxcy1vdmVybGF5LXllYXJcIiBwbGFjZWhvbGRlcj1cIicrbisnXCIgaW5wdXRtb2RlPVwibnVtZXJpY1wiIC8+JywnPGRpdiBjbGFzcz1cInFzLWNsb3NlXCI+JiMxMDAwNTs8L2Rpdj4nLFwiPC9kaXY+XCIsJzxkaXYgY2xhc3M9XCJxcy1vdmVybGF5LW1vbnRoLWNvbnRhaW5lclwiPicrZS5vdmVybGF5TW9udGhzLm1hcCgoZnVuY3Rpb24oZSx0KXtyZXR1cm4nPGRpdiBjbGFzcz1cInFzLW92ZXJsYXktbW9udGhcIiBkYXRhLW1vbnRoLW51bT1cIicrdCsnXCI+JytlK1wiPC9kaXY+XCJ9KSkuam9pbihcIlwiKStcIjwvZGl2PlwiLCc8ZGl2IGNsYXNzPVwicXMtc3VibWl0IHFzLWRpc2FibGVkXCI+JythK1wiPC9kaXY+XCIsXCI8L2Rpdj5cIl0uam9pbihcIlwiKX1mdW5jdGlvbiBtKGUsdCxuKXt2YXIgYT10LmVsLHI9dC5jYWxlbmRhci5xdWVyeVNlbGVjdG9yKFwiLnFzLWFjdGl2ZVwiKSxpPWUudGV4dENvbnRlbnQsbz10LnNpYmxpbmc7KGEuZGlzYWJsZWR8fGEucmVhZE9ubHkpJiZ0LnJlc3BlY3REaXNhYmxlZFJlYWRPbmx5fHwodC5kYXRlU2VsZWN0ZWQ9bj92b2lkIDA6bmV3IERhdGUodC5jdXJyZW50WWVhcix0LmN1cnJlbnRNb250aCxpKSxyJiZyLmNsYXNzTGlzdC5yZW1vdmUoXCJxcy1hY3RpdmVcIiksbnx8ZS5jbGFzc0xpc3QuYWRkKFwicXMtYWN0aXZlXCIpLHAoYSx0LG4pLG58fHEodCksbyYmKHkoe2luc3RhbmNlOnQsZGVzZWxlY3Q6bn0pLHQuZmlyc3QmJiFvLmRhdGVTZWxlY3RlZCYmKG8uY3VycmVudFllYXI9dC5jdXJyZW50WWVhcixvLmN1cnJlbnRNb250aD10LmN1cnJlbnRNb250aCxvLmN1cnJlbnRNb250aE5hbWU9dC5jdXJyZW50TW9udGhOYW1lKSx1KHQpLHUobykpLHQub25TZWxlY3QodCxuP3ZvaWQgMDpuZXcgRGF0ZSh0LmRhdGVTZWxlY3RlZCkpKX1mdW5jdGlvbiB5KGUpe3ZhciB0PWUuaW5zdGFuY2UuZmlyc3Q/ZS5pbnN0YW5jZTplLmluc3RhbmNlLnNpYmxpbmcsbj10LnNpYmxpbmc7dD09PWUuaW5zdGFuY2U/ZS5kZXNlbGVjdD8odC5taW5EYXRlPXQub3JpZ2luYWxNaW5EYXRlLG4ubWluRGF0ZT1uLm9yaWdpbmFsTWluRGF0ZSk6bi5taW5EYXRlPXQuZGF0ZVNlbGVjdGVkOmUuZGVzZWxlY3Q/KG4ubWF4RGF0ZT1uLm9yaWdpbmFsTWF4RGF0ZSx0Lm1heERhdGU9dC5vcmlnaW5hbE1heERhdGUpOnQubWF4RGF0ZT1uLmRhdGVTZWxlY3RlZH1mdW5jdGlvbiBwKGUsdCxuKXtpZighdC5ub25JbnB1dClyZXR1cm4gbj9lLnZhbHVlPVwiXCI6dC5mb3JtYXR0ZXIhPT1zP3QuZm9ybWF0dGVyKGUsdC5kYXRlU2VsZWN0ZWQsdCk6dm9pZChlLnZhbHVlPXQuZGF0ZVNlbGVjdGVkLnRvRGF0ZVN0cmluZygpKX1mdW5jdGlvbiB3KGUsdCxuLGEpe258fGE/KG4mJih0LmN1cnJlbnRZZWFyPStuKSxhJiYodC5jdXJyZW50TW9udGg9K2EpKToodC5jdXJyZW50TW9udGgrPWUuY29udGFpbnMoXCJxcy1yaWdodFwiKT8xOi0xLDEyPT09dC5jdXJyZW50TW9udGg/KHQuY3VycmVudE1vbnRoPTAsdC5jdXJyZW50WWVhcisrKTotMT09PXQuY3VycmVudE1vbnRoJiYodC5jdXJyZW50TW9udGg9MTEsdC5jdXJyZW50WWVhci0tKSksdC5jdXJyZW50TW9udGhOYW1lPXQubW9udGhzW3QuY3VycmVudE1vbnRoXSx1KHQpLHQub25Nb250aENoYW5nZSh0KX1mdW5jdGlvbiBEKGUpe2lmKCFlLm5vUG9zaXRpb24pe3ZhciB0PWUucG9zaXRpb24udG9wLG49ZS5wb3NpdGlvbi5yaWdodDtpZihlLnBvc2l0aW9uLmNlbnRlcmVkKXJldHVybiBlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJxcy1jZW50ZXJlZFwiKTt2YXIgYT1lLnBvc2l0aW9uZWRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxyPWUuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1lLmNhbGVuZGFyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG89ci50b3AtYS50b3ArKHQ/LTEqaS5oZWlnaHQ6ci5oZWlnaHQpK1wicHhcIixzPXIubGVmdC1hLmxlZnQrKG4/ci53aWR0aC1pLndpZHRoOjApK1wicHhcIjtlLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwidG9wXCIsbyksZS5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcImxlZnRcIixzKX19ZnVuY3Rpb24gYihlKXtyZXR1cm5cIltvYmplY3QgRGF0ZV1cIj09PXgoZSkmJlwiSW52YWxpZCBEYXRlXCIhPT1lLnRvU3RyaW5nKCl9ZnVuY3Rpb24gZyhlKXtpZihiKGUpfHxcIm51bWJlclwiPT10eXBlb2YgZSYmIWlzTmFOKGUpKXt2YXIgdD1uZXcgRGF0ZSgrZSk7cmV0dXJuIG5ldyBEYXRlKHQuZ2V0RnVsbFllYXIoKSx0LmdldE1vbnRoKCksdC5nZXREYXRlKCkpfX1mdW5jdGlvbiBxKGUpe2UuZGlzYWJsZWR8fCFlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcInFzLWhpZGRlblwiKSYmIWUuYWx3YXlzU2hvdyYmKFwib3ZlcmxheVwiIT09ZS5kZWZhdWx0VmlldyYmTSghMCxlKSxlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJxcy1oaWRkZW5cIiksZS5vbkhpZGUoZSkpfWZ1bmN0aW9uIFMoZSl7ZS5kaXNhYmxlZHx8KGUuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInFzLWhpZGRlblwiKSxcIm92ZXJsYXlcIj09PWUuZGVmYXVsdFZpZXcmJk0oITEsZSksRChlKSxlLm9uU2hvdyhlKSl9ZnVuY3Rpb24gTShlLHQpe3ZhciBuPXQuY2FsZW5kYXIsYT1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKSxyPWEucXVlcnlTZWxlY3RvcihcIi5xcy1vdmVybGF5LXllYXJcIiksaT1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtY29udHJvbHNcIiksbz1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtc3F1YXJlc1wiKTtlPyhhLmNsYXNzTGlzdC5hZGQoXCJxcy1oaWRkZW5cIiksaS5jbGFzc0xpc3QucmVtb3ZlKFwicXMtYmx1clwiKSxvLmNsYXNzTGlzdC5yZW1vdmUoXCJxcy1ibHVyXCIpLHIudmFsdWU9XCJcIik6KGEuY2xhc3NMaXN0LnJlbW92ZShcInFzLWhpZGRlblwiKSxpLmNsYXNzTGlzdC5hZGQoXCJxcy1ibHVyXCIpLG8uY2xhc3NMaXN0LmFkZChcInFzLWJsdXJcIiksci5mb2N1cygpKX1mdW5jdGlvbiBFKGUsdCxuLGEpe3ZhciByPWlzTmFOKCsobmV3IERhdGUpLnNldEZ1bGxZZWFyKHQudmFsdWV8fHZvaWQgMCkpLGk9cj9udWxsOnQudmFsdWU7aWYoMTM9PT1lLndoaWNofHwxMz09PWUua2V5Q29kZXx8XCJjbGlja1wiPT09ZS50eXBlKWE/dyhudWxsLG4saSxhKTpyfHx0LmNsYXNzTGlzdC5jb250YWlucyhcInFzLWRpc2FibGVkXCIpfHx3KG51bGwsbixpKTtlbHNlIGlmKG4uY2FsZW5kYXIuY29udGFpbnModCkpe24uY2FsZW5kYXIucXVlcnlTZWxlY3RvcihcIi5xcy1zdWJtaXRcIikuY2xhc3NMaXN0W3I/XCJhZGRcIjpcInJlbW92ZVwiXShcInFzLWRpc2FibGVkXCIpfX1mdW5jdGlvbiB4KGUpe3JldHVybnt9LnRvU3RyaW5nLmNhbGwoZSl9ZnVuY3Rpb24gQyhlKXthLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QhPT1lJiZxKHQpfSkpfWZ1bmN0aW9uIEwoZSl7aWYoIWUuX19xc19zaGFkb3dfZG9tKXt2YXIgdD1lLndoaWNofHxlLmtleUNvZGUsbj1lLnR5cGUscj1lLnRhcmdldCxvPXIuY2xhc3NMaXN0LHM9YS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNhbGVuZGFyLmNvbnRhaW5zKHIpfHxlLmVsPT09cn0pKVswXSxsPXMmJnMuY2FsZW5kYXIuY29udGFpbnMocik7aWYoIShzJiZzLmlzTW9iaWxlJiZzLmRpc2FibGVNb2JpbGUpKWlmKFwiY2xpY2tcIj09PW4pe2lmKCFzKXJldHVybiBhLmZvckVhY2gocSk7aWYocy5kaXNhYmxlZClyZXR1cm47dmFyIGQ9cy5jYWxlbmRhcixjPXMuY2FsZW5kYXJDb250YWluZXIsaD1zLmRpc2FibGVZZWFyT3ZlcmxheSxmPXMubm9uSW5wdXQsdj1kLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheS15ZWFyXCIpLHk9ISFkLnF1ZXJ5U2VsZWN0b3IoXCIucXMtaGlkZGVuXCIpLHA9ZC5xdWVyeVNlbGVjdG9yKFwiLnFzLW1vbnRoLXllYXJcIikuY29udGFpbnMociksRD1yLmRhdGFzZXQubW9udGhOdW07aWYocy5ub1Bvc2l0aW9uJiYhbCkoYy5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIik/UzpxKShzKTtlbHNlIGlmKG8uY29udGFpbnMoXCJxcy1hcnJvd1wiKSl3KG8scyk7ZWxzZSBpZihwfHxvLmNvbnRhaW5zKFwicXMtY2xvc2VcIikpaHx8TSgheSxzKTtlbHNlIGlmKEQpRShlLHYscyxEKTtlbHNle2lmKG8uY29udGFpbnMoXCJxcy1kaXNhYmxlZFwiKSlyZXR1cm47aWYoby5jb250YWlucyhcInFzLW51bVwiKSl7dmFyIGI9ci50ZXh0Q29udGVudCxnPStyLmRhdGFzZXQuZGlyZWN0aW9uLHg9bmV3IERhdGUocy5jdXJyZW50WWVhcixzLmN1cnJlbnRNb250aCtnLGIpO2lmKGcpe3MuY3VycmVudFllYXI9eC5nZXRGdWxsWWVhcigpLHMuY3VycmVudE1vbnRoPXguZ2V0TW9udGgoKSxzLmN1cnJlbnRNb250aE5hbWU9aVtzLmN1cnJlbnRNb250aF0sdShzKTtmb3IodmFyIEwsWT1zLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRpcmVjdGlvbj1cIjBcIl0nKSxqPTA7IUw7KXt2YXIgUD1ZW2pdO1AudGV4dENvbnRlbnQ9PT1iJiYoTD1QKSxqKyt9cj1MfXJldHVybiB2b2lkKCt4PT0rcy5kYXRlU2VsZWN0ZWQ/bShyLHMsITApOnIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtZGlzYWJsZWRcIil8fG0ocixzKSl9by5jb250YWlucyhcInFzLXN1Ym1pdFwiKT9FKGUsdixzKTpmJiZyPT09cy5lbCYmKFMocyksQyhzKSl9fWVsc2UgaWYoXCJmb2N1c2luXCI9PT1uJiZzKVMocyksQyhzKTtlbHNlIGlmKFwia2V5ZG93blwiPT09biYmOT09PXQmJnMpcShzKTtlbHNlIGlmKFwia2V5ZG93blwiPT09biYmcyYmIXMuZGlzYWJsZWQpe3ZhciBrPSFzLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIik7MTM9PT10JiZrJiZsP0UoZSxyLHMpOjI3PT09dCYmayYmbCYmTSghMCxzKX1lbHNlIGlmKFwiaW5wdXRcIj09PW4pe2lmKCFzfHwhcy5jYWxlbmRhci5jb250YWlucyhyKSlyZXR1cm47dmFyIE89cy5jYWxlbmRhci5xdWVyeVNlbGVjdG9yKFwiLnFzLXN1Ym1pdFwiKSxOPXIudmFsdWUuc3BsaXQoXCJcIikucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBlfHxcIjBcIiE9PXQ/ZSsodC5tYXRjaCgvWzAtOV0vKT90OlwiXCIpOlwiXCJ9KSxcIlwiKS5zbGljZSgwLDQpO3IudmFsdWU9TixPLmNsYXNzTGlzdFs0PT09Ti5sZW5ndGg/XCJyZW1vdmVcIjpcImFkZFwiXShcInFzLWRpc2FibGVkXCIpfX19ZnVuY3Rpb24gWShlKXtMKGUpLGUuX19xc19zaGFkb3dfZG9tPSEwfWZ1bmN0aW9uIGooZSx0KXtsLmZvckVhY2goKGZ1bmN0aW9uKG4pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLHQpfSkpfWZ1bmN0aW9uIFAoKXtTKHRoaXMpfWZ1bmN0aW9uIGsoKXtxKHRoaXMpfWZ1bmN0aW9uIE8oZSx0KXt2YXIgbj1nKGUpLGE9dGhpcy5jdXJyZW50WWVhcixyPXRoaXMuY3VycmVudE1vbnRoLGk9dGhpcy5zaWJsaW5nO2lmKG51bGw9PWUpcmV0dXJuIHRoaXMuZGF0ZVNlbGVjdGVkPXZvaWQgMCxwKHRoaXMuZWwsdGhpcywhMCksaSYmKHkoe2luc3RhbmNlOnRoaXMsZGVzZWxlY3Q6ITB9KSx1KGkpKSx1KHRoaXMpLHRoaXM7aWYoIWIoZSkpdGhyb3cgbmV3IEVycm9yKFwiYHNldERhdGVgIG5lZWRzIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdC5cIik7aWYodGhpcy5kaXNhYmxlZERhdGVzWytuXXx8bjx0aGlzLm1pbkRhdGV8fG4+dGhpcy5tYXhEYXRlKXRocm93IG5ldyBFcnJvcihcIllvdSBjYW4ndCBtYW51YWxseSBzZXQgYSBkYXRlIHRoYXQncyBkaXNhYmxlZC5cIik7dGhpcy5kYXRlU2VsZWN0ZWQ9bix0JiYodGhpcy5jdXJyZW50WWVhcj1uLmdldEZ1bGxZZWFyKCksdGhpcy5jdXJyZW50TW9udGg9bi5nZXRNb250aCgpLHRoaXMuY3VycmVudE1vbnRoTmFtZT10aGlzLm1vbnRoc1tuLmdldE1vbnRoKCldKSxwKHRoaXMuZWwsdGhpcyksaSYmKHkoe2luc3RhbmNlOnRoaXN9KSx1KGkpKTt2YXIgbz1hPT09bi5nZXRGdWxsWWVhcigpJiZyPT09bi5nZXRNb250aCgpO3JldHVybiBvfHx0P3UodGhpcyxuKTpvfHx1KHRoaXMsbmV3IERhdGUoYSxyLDEpKSx0aGlzfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIEkodGhpcyxlLCEwKX1mdW5jdGlvbiBfKGUpe3JldHVybiBJKHRoaXMsZSl9ZnVuY3Rpb24gSShlLHQsbil7dmFyIGE9ZS5kYXRlU2VsZWN0ZWQscj1lLmZpcnN0LGk9ZS5zaWJsaW5nLG89ZS5taW5EYXRlLHM9ZS5tYXhEYXRlLGw9Zyh0KSxkPW4/XCJNaW5cIjpcIk1heFwiO2Z1bmN0aW9uIGMoKXtyZXR1cm5cIm9yaWdpbmFsXCIrZCtcIkRhdGVcIn1mdW5jdGlvbiBoKCl7cmV0dXJuIGQudG9Mb3dlckNhc2UoKStcIkRhdGVcIn1mdW5jdGlvbiBmKCl7cmV0dXJuXCJzZXRcIitkfWZ1bmN0aW9uIHYoKXt0aHJvdyBuZXcgRXJyb3IoXCJPdXQtb2YtcmFuZ2UgZGF0ZSBwYXNzZWQgdG8gXCIrZigpKX1pZihudWxsPT10KWVbYygpXT12b2lkIDAsaT8oaVtjKCldPXZvaWQgMCxuPyhyJiYhYXx8IXImJiFpLmRhdGVTZWxlY3RlZCkmJihlLm1pbkRhdGU9dm9pZCAwLGkubWluRGF0ZT12b2lkIDApOihyJiYhaS5kYXRlU2VsZWN0ZWR8fCFyJiYhYSkmJihlLm1heERhdGU9dm9pZCAwLGkubWF4RGF0ZT12b2lkIDApKTplW2goKV09dm9pZCAwO2Vsc2V7aWYoIWIodCkpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIHBhc3NlZCB0byBcIitmKCkpO2k/KChyJiZuJiZsPihhfHxzKXx8ciYmIW4mJmw8KGkuZGF0ZVNlbGVjdGVkfHxvKXx8IXImJm4mJmw+KGkuZGF0ZVNlbGVjdGVkfHxzKXx8IXImJiFuJiZsPChhfHxvKSkmJnYoKSxlW2MoKV09bCxpW2MoKV09bCwobiYmKHImJiFhfHwhciYmIWkuZGF0ZVNlbGVjdGVkKXx8IW4mJihyJiYhaS5kYXRlU2VsZWN0ZWR8fCFyJiYhYSkpJiYoZVtoKCldPWwsaVtoKCldPWwpKTooKG4mJmw+KGF8fHMpfHwhbiYmbDwoYXx8bykpJiZ2KCksZVtoKCldPWwpfXJldHVybiBpJiZ1KGkpLHUoZSksZX1mdW5jdGlvbiBBKCl7dmFyIGU9dGhpcy5maXJzdD90aGlzOnRoaXMuc2libGluZyx0PWUuc2libGluZztyZXR1cm57c3RhcnQ6ZS5kYXRlU2VsZWN0ZWQsZW5kOnQuZGF0ZVNlbGVjdGVkfX1mdW5jdGlvbiBSKCl7dmFyIGU9dGhpcy5zaGFkb3dEb20sdD10aGlzLnBvc2l0aW9uZWRFbCxuPXRoaXMuY2FsZW5kYXJDb250YWluZXIscj10aGlzLnNpYmxpbmcsaT10aGlzO3RoaXMuaW5saW5lUG9zaXRpb24mJihhLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBlIT09aSYmZS5wb3NpdGlvbmVkRWw9PT10fSkpfHx0LnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIixudWxsKSk7bi5yZW1vdmUoKSxhPWEuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZSE9PWl9KSksciYmZGVsZXRlIHIuc2libGluZyxhLmxlbmd0aHx8aihkb2N1bWVudCxMKTt2YXIgbz1hLnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiB0LnNoYWRvd0RvbT09PWV9KSk7Zm9yKHZhciBzIGluIGUmJiFvJiZqKGUsWSksdGhpcylkZWxldGUgdGhpc1tzXTthLmxlbmd0aHx8bC5mb3JFYWNoKChmdW5jdGlvbihlKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGUsTCl9KSl9ZnVuY3Rpb24gRihlLHQpe3ZhciBuPW5ldyBEYXRlKGUpO2lmKCFiKG4pKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBwYXNzZWQgdG8gYG5hdmlnYXRlYFwiKTt0aGlzLmN1cnJlbnRZZWFyPW4uZ2V0RnVsbFllYXIoKSx0aGlzLmN1cnJlbnRNb250aD1uLmdldE1vbnRoKCksdSh0aGlzKSx0JiZ0aGlzLm9uTW9udGhDaGFuZ2UodGhpcyl9ZnVuY3Rpb24gQigpe3ZhciBlPSF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcInFzLWhpZGRlblwiKSx0PSF0aGlzLmNhbGVuZGFyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIik7ZSYmTSh0LHRoaXMpfXQuZGVmYXVsdD1mdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKGUsdCl7dmFyIG4sbCxkPWZ1bmN0aW9uKGUpe3ZhciB0PWMoZSk7dC5ldmVudHMmJih0LmV2ZW50cz10LmV2ZW50cy5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7aWYoIWIodCkpdGhyb3cgbmV3IEVycm9yKCdcIm9wdGlvbnMuZXZlbnRzXCIgbXVzdCBvbmx5IGNvbnRhaW4gdmFsaWQgSmF2YVNjcmlwdCBEYXRlIG9iamVjdHMuJyk7cmV0dXJuIGVbK2codCldPSEwLGV9KSx7fSkpO1tcInN0YXJ0RGF0ZVwiLFwiZGF0ZVNlbGVjdGVkXCIsXCJtaW5EYXRlXCIsXCJtYXhEYXRlXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciBuPXRbZV07aWYobiYmIWIobikpdGhyb3cgbmV3IEVycm9yKCdcIm9wdGlvbnMuJytlKydcIiBuZWVkcyB0byBiZSBhIHZhbGlkIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuJyk7dFtlXT1nKG4pfSkpO3ZhciBuPXQucG9zaXRpb24saT10Lm1heERhdGUsbD10Lm1pbkRhdGUsZD10LmRhdGVTZWxlY3RlZCx1PXQub3ZlcmxheVBsYWNlaG9sZGVyLGg9dC5vdmVybGF5QnV0dG9uLGY9dC5zdGFydERheSx2PXQuaWQ7aWYodC5zdGFydERhdGU9Zyh0LnN0YXJ0RGF0ZXx8ZHx8bmV3IERhdGUpLHQuZGlzYWJsZWREYXRlcz0odC5kaXNhYmxlZERhdGVzfHxbXSkucmVkdWNlKChmdW5jdGlvbihlLHQpe3ZhciBuPStnKHQpO2lmKCFiKHQpKXRocm93IG5ldyBFcnJvcignWW91IHN1cHBsaWVkIGFuIGludmFsaWQgZGF0ZSB0byBcIm9wdGlvbnMuZGlzYWJsZWREYXRlc1wiLicpO2lmKG49PT0rZyhkKSl0aHJvdyBuZXcgRXJyb3IoJ1wiZGlzYWJsZWREYXRlc1wiIGNhbm5vdCBjb250YWluIHRoZSBzYW1lIGRhdGUgYXMgXCJkYXRlU2VsZWN0ZWRcIi4nKTtyZXR1cm4gZVtuXT0xLGV9KSx7fSksdC5oYXNPd25Qcm9wZXJ0eShcImlkXCIpJiZudWxsPT12KXRocm93IG5ldyBFcnJvcihcImBpZGAgY2Fubm90IGJlIGBudWxsYCBvciBgdW5kZWZpbmVkYFwiKTtpZihudWxsIT12KXt2YXIgbT1hLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWQ9PT12fSkpO2lmKG0ubGVuZ3RoPjEpdGhyb3cgbmV3IEVycm9yKFwiT25seSB0d28gZGF0ZXBpY2tlcnMgY2FuIHNoYXJlIGFuIGlkLlwiKTttLmxlbmd0aD8odC5zZWNvbmQ9ITAsdC5zaWJsaW5nPW1bMF0pOnQuZmlyc3Q9ITB9dmFyIHk9W1widHJcIixcInRsXCIsXCJiclwiLFwiYmxcIixcImNcIl0uc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIG49PT1lfSkpO2lmKG4mJiF5KXRocm93IG5ldyBFcnJvcignXCJvcHRpb25zLnBvc2l0aW9uXCIgbXVzdCBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogdGwsIHRyLCBibCwgYnIsIG9yIGMuJyk7ZnVuY3Rpb24gcChlKXt0aHJvdyBuZXcgRXJyb3IoJ1wiZGF0ZVNlbGVjdGVkXCIgaW4gb3B0aW9ucyBpcyAnKyhlP1wibGVzc1wiOlwiZ3JlYXRlclwiKSsnIHRoYW4gXCInKyhlfHxcIm1heFwiKSsnRGF0ZVwiLicpfWlmKHQucG9zaXRpb249ZnVuY3Rpb24oZSl7dmFyIHQ9ZVswXSxuPWVbMV0sYT17fTthW29bdF1dPTEsbiYmKGFbb1tuXV09MSk7cmV0dXJuIGF9KG58fFwiYmxcIiksaTxsKXRocm93IG5ldyBFcnJvcignXCJtYXhEYXRlXCIgaW4gb3B0aW9ucyBpcyBsZXNzIHRoYW4gXCJtaW5EYXRlXCIuJyk7ZCYmKGw+ZCYmcChcIm1pblwiKSxpPGQmJnAoKSk7aWYoW1wib25TZWxlY3RcIixcIm9uU2hvd1wiLFwib25IaWRlXCIsXCJvbk1vbnRoQ2hhbmdlXCIsXCJmb3JtYXR0ZXJcIixcImRpc2FibGVyXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIHRbZV0mJih0W2VdPXMpfSkpLFtcImN1c3RvbURheXNcIixcImN1c3RvbU1vbnRoc1wiLFwiY3VzdG9tT3ZlcmxheU1vbnRoc1wiXS5mb3JFYWNoKChmdW5jdGlvbihlLG4pe3ZhciBhPXRbZV0scj1uPzEyOjc7aWYoYSl7aWYoIUFycmF5LmlzQXJyYXkoYSl8fGEubGVuZ3RoIT09cnx8YS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZX0pKSl0aHJvdyBuZXcgRXJyb3IoJ1wiJytlKydcIiBtdXN0IGJlIGFuIGFycmF5IHdpdGggJytyK1wiIHN0cmluZ3MuXCIpO3Rbbj9uPDI/XCJtb250aHNcIjpcIm92ZXJsYXlNb250aHNcIjpcImRheXNcIl09YX19KSksZiYmZj4wJiZmPDcpe3ZhciB3PSh0LmN1c3RvbURheXN8fHIpLnNsaWNlKCksRD13LnNwbGljZSgwLGYpO3QuY3VzdG9tRGF5cz13LmNvbmNhdChEKSx0LnN0YXJ0RGF5PStmLHQud2Vla2VuZEluZGljZXM9W3cubGVuZ3RoLTEsdy5sZW5ndGhdfWVsc2UgdC5zdGFydERheT0wLHQud2Vla2VuZEluZGljZXM9WzYsMF07XCJzdHJpbmdcIiE9dHlwZW9mIHUmJmRlbGV0ZSB0Lm92ZXJsYXlQbGFjZWhvbGRlcjtcInN0cmluZ1wiIT10eXBlb2YgaCYmZGVsZXRlIHQub3ZlcmxheUJ1dHRvbjt2YXIgcT10LmRlZmF1bHRWaWV3O2lmKHEmJlwiY2FsZW5kYXJcIiE9PXEmJlwib3ZlcmxheVwiIT09cSl0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMuZGVmYXVsdFZpZXcgbXVzdCBlaXRoZXIgYmUgXCJjYWxlbmRhclwiIG9yIFwib3ZlcmxheVwiLicpO3JldHVybiB0LmRlZmF1bHRWaWV3PXF8fFwiY2FsZW5kYXJcIix0fSh0fHx7c3RhcnREYXRlOmcobmV3IERhdGUpLHBvc2l0aW9uOlwiYmxcIixkZWZhdWx0VmlldzpcImNhbGVuZGFyXCJ9KSx1PWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpdT1cIiNcIj09PXVbMF0/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodS5zbGljZSgxKSk6ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1KTtlbHNle2lmKFwiW29iamVjdCBTaGFkb3dSb290XVwiPT09eCh1KSl0aHJvdyBuZXcgRXJyb3IoXCJVc2luZyBhIHNoYWRvdyBET00gYXMgeW91ciBzZWxlY3RvciBpcyBub3Qgc3VwcG9ydGVkLlwiKTtmb3IodmFyIGgsZj11LnBhcmVudE5vZGU7IWg7KXt2YXIgdj14KGYpO1wiW29iamVjdCBIVE1MRG9jdW1lbnRdXCI9PT12P2g9ITA6XCJbb2JqZWN0IFNoYWRvd1Jvb3RdXCI9PT12PyhoPSEwLG49ZixsPWYuaG9zdCk6Zj1mLnBhcmVudE5vZGV9fWlmKCF1KXRocm93IG5ldyBFcnJvcihcIk5vIHNlbGVjdG9yIC8gZWxlbWVudCBmb3VuZC5cIik7aWYoYS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gZS5lbD09PXV9KSkpdGhyb3cgbmV3IEVycm9yKFwiQSBkYXRlcGlja2VyIGFscmVhZHkgZXhpc3RzIG9uIHRoYXQgZWxlbWVudC5cIik7dmFyIG09dT09PWRvY3VtZW50LmJvZHkseT1uP3UucGFyZW50RWxlbWVudHx8bjptP2RvY3VtZW50LmJvZHk6dS5wYXJlbnRFbGVtZW50LHc9bj91LnBhcmVudEVsZW1lbnR8fGw6eSxEPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO0QuY2xhc3NOYW1lPVwicXMtZGF0ZXBpY2tlci1jb250YWluZXIgcXMtaGlkZGVuXCIscS5jbGFzc05hbWU9XCJxcy1kYXRlcGlja2VyXCI7dmFyIE09e3NoYWRvd0RvbTpuLGN1c3RvbUVsZW1lbnQ6bCxwb3NpdGlvbmVkRWw6dyxlbDp1LHBhcmVudDp5LG5vbklucHV0OlwiSU5QVVRcIiE9PXUubm9kZU5hbWUsbm9Qb3NpdGlvbjptLHBvc2l0aW9uOiFtJiZkLnBvc2l0aW9uLHN0YXJ0RGF0ZTpkLnN0YXJ0RGF0ZSxkYXRlU2VsZWN0ZWQ6ZC5kYXRlU2VsZWN0ZWQsZGlzYWJsZWREYXRlczpkLmRpc2FibGVkRGF0ZXMsbWluRGF0ZTpkLm1pbkRhdGUsbWF4RGF0ZTpkLm1heERhdGUsbm9XZWVrZW5kczohIWQubm9XZWVrZW5kcyx3ZWVrZW5kSW5kaWNlczpkLndlZWtlbmRJbmRpY2VzLGNhbGVuZGFyQ29udGFpbmVyOkQsY2FsZW5kYXI6cSxjdXJyZW50TW9udGg6KGQuc3RhcnREYXRlfHxkLmRhdGVTZWxlY3RlZCkuZ2V0TW9udGgoKSxjdXJyZW50TW9udGhOYW1lOihkLm1vbnRoc3x8aSlbKGQuc3RhcnREYXRlfHxkLmRhdGVTZWxlY3RlZCkuZ2V0TW9udGgoKV0sY3VycmVudFllYXI6KGQuc3RhcnREYXRlfHxkLmRhdGVTZWxlY3RlZCkuZ2V0RnVsbFllYXIoKSxldmVudHM6ZC5ldmVudHN8fHt9LGRlZmF1bHRWaWV3OmQuZGVmYXVsdFZpZXcsc2V0RGF0ZTpPLHJlbW92ZTpSLHNldE1pbjpOLHNldE1heDpfLHNob3c6UCxoaWRlOmssbmF2aWdhdGU6Rix0b2dnbGVPdmVybGF5OkIsb25TZWxlY3Q6ZC5vblNlbGVjdCxvblNob3c6ZC5vblNob3csb25IaWRlOmQub25IaWRlLG9uTW9udGhDaGFuZ2U6ZC5vbk1vbnRoQ2hhbmdlLGZvcm1hdHRlcjpkLmZvcm1hdHRlcixkaXNhYmxlcjpkLmRpc2FibGVyLG1vbnRoczpkLm1vbnRoc3x8aSxkYXlzOmQuY3VzdG9tRGF5c3x8cixzdGFydERheTpkLnN0YXJ0RGF5LG92ZXJsYXlNb250aHM6ZC5vdmVybGF5TW9udGhzfHwoZC5tb250aHN8fGkpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2xpY2UoMCwzKX0pKSxvdmVybGF5UGxhY2Vob2xkZXI6ZC5vdmVybGF5UGxhY2Vob2xkZXJ8fFwiNC1kaWdpdCB5ZWFyXCIsb3ZlcmxheUJ1dHRvbjpkLm92ZXJsYXlCdXR0b258fFwiU3VibWl0XCIsZGlzYWJsZVllYXJPdmVybGF5OiEhZC5kaXNhYmxlWWVhck92ZXJsYXksZGlzYWJsZU1vYmlsZTohIWQuZGlzYWJsZU1vYmlsZSxpc01vYmlsZTpcIm9udG91Y2hzdGFydFwiaW4gd2luZG93LGFsd2F5c1Nob3c6ISFkLmFsd2F5c1Nob3csaWQ6ZC5pZCxzaG93QWxsRGF0ZXM6ISFkLnNob3dBbGxEYXRlcyxyZXNwZWN0RGlzYWJsZWRSZWFkT25seTohIWQucmVzcGVjdERpc2FibGVkUmVhZE9ubHksZmlyc3Q6ZC5maXJzdCxzZWNvbmQ6ZC5zZWNvbmR9O2lmKGQuc2libGluZyl7dmFyIEU9ZC5zaWJsaW5nLEM9TSxMPUUubWluRGF0ZXx8Qy5taW5EYXRlLFk9RS5tYXhEYXRlfHxDLm1heERhdGU7Qy5zaWJsaW5nPUUsRS5zaWJsaW5nPUMsRS5taW5EYXRlPUwsRS5tYXhEYXRlPVksQy5taW5EYXRlPUwsQy5tYXhEYXRlPVksRS5vcmlnaW5hbE1pbkRhdGU9TCxFLm9yaWdpbmFsTWF4RGF0ZT1ZLEMub3JpZ2luYWxNaW5EYXRlPUwsQy5vcmlnaW5hbE1heERhdGU9WSxFLmdldFJhbmdlPUEsQy5nZXRSYW5nZT1BfWQuZGF0ZVNlbGVjdGVkJiZwKHUsTSk7dmFyIGo9Z2V0Q29tcHV0ZWRTdHlsZSh3KS5wb3NpdGlvbjttfHxqJiZcInN0YXRpY1wiIT09anx8KE0uaW5saW5lUG9zaXRpb249ITAsdy5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsXCJyZWxhdGl2ZVwiKSk7dmFyIEk9YS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnBvc2l0aW9uZWRFbD09PU0ucG9zaXRpb25lZEVsfSkpO0kuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5saW5lUG9zaXRpb259KSkmJihNLmlubGluZVBvc2l0aW9uPSEwLEkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5pbmxpbmVQb3NpdGlvbj0hMH0pKSk7RC5hcHBlbmRDaGlsZChxKSx5LmFwcGVuZENoaWxkKEQpLE0uYWx3YXlzU2hvdyYmUyhNKTtyZXR1cm4gTX0oZSx0KTtpZihhLmxlbmd0aHx8ZChkb2N1bWVudCksbi5zaGFkb3dEb20mJihhLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnNoYWRvd0RvbT09PW4uc2hhZG93RG9tfSkpfHxkKG4uc2hhZG93RG9tKSksYS5wdXNoKG4pLG4uc2Vjb25kKXt2YXIgbD1uLnNpYmxpbmc7eSh7aW5zdGFuY2U6bixkZXNlbGVjdDohbi5kYXRlU2VsZWN0ZWR9KSx5KHtpbnN0YW5jZTpsLGRlc2VsZWN0OiFsLmRhdGVTZWxlY3RlZH0pLHUobCl9cmV0dXJuIHUobixuLnN0YXJ0RGF0ZXx8bi5kYXRlU2VsZWN0ZWQpLG4uYWx3YXlzU2hvdyYmRChuKSxufX1dKS5kZWZhdWx0fSkpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByYW5nZVdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZHRoLXJhbmdlJyksXHJcbiAgICAgICAgcmFuZ2VIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVpZ2h0LXJhbmdlJyksXHJcbiAgICAgICAgd2lkdGhJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aWR0aC1yYW5nZS12YWx1ZScpLFxyXG4gICAgICAgIGhlaWdodElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlaWdodC1yYW5nZS12YWx1ZScpLFxyXG4gICAgICAgIHdlaWdodElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRcIiksXHJcbiAgICAgICAgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLFxyXG4gICAgICAgIGNpdHlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktc2VsZWN0XCIpLFxyXG4gICAgICAgIGRlbGl2ZXJ5Q2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGl2ZXJ5LWNoZWNrYm94XCIpLFxyXG4gICAgICAgIGRlbGl2ZXJ5QWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faXRlbV9hZGRyZXNzXCIpLFxyXG4gICAgICAgIGFkZHJlc3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkcmVzc1wiKSxcclxuICAgICAgICBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIiksXHJcbiAgICAgICAgc3VybmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXJuYW1lXCIpLFxyXG4gICAgICAgIHBob25lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGVsJ11cIiksXHJcbiAgICAgICAgY29tbWVudHNUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudHNcIiksXHJcbiAgICAgICAgY29zdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3N0XCIpLFxyXG4gICAgICAgIGZpZ3VyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlndXJlXCIpLFxyXG4gICAgICAgIGZpZ3VyZVdlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlndXJlX193ZWlnaHRcIiksXHJcbiAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpLFxyXG4gICAgICAgIHBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1wb3B1cC1idG5cIiksXHJcbiAgICAgICAgcG9wdXBDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpO1xyXG4gICAgICAgIHBvcHVwV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXdpZHRoIHNwYW5cIiksXHJcbiAgICAgICAgcG9wdXBIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWhlaWdodCBzcGFuXCIpLFxyXG4gICAgICAgIHBvcHVwV2VpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC13ZWlnaHQgc3BhblwiKSxcclxuICAgICAgICBwb3B1cENpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWNpdHkgc3BhblwiKSxcclxuICAgICAgICBwb3B1cERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWRhdGUgc3BhblwiKSxcclxuICAgICAgICBwb3B1cEFwcGFydG1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWFwcGFydG1lbnQgc3BhblwiKSxcclxuICAgICAgICBwb3B1cEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWFkZHJlc3Mgc3BhblwiKSxcclxuICAgICAgICBwb3B1cE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLW5hbWUgc3BhblwiKSxcclxuICAgICAgICBwb3B1cFN1cm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLXN1cm5hbWUgc3BhblwiKSxcclxuICAgICAgICBwb3B1cFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1waG9uZSBzcGFuXCIpLFxyXG4gICAgICAgIHBvcHVwQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWNvbW1lbnRzIHNwYW5cIiksXHJcbiAgICAgICAgcG9wdXBDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cC1jb3N0IHNwYW5cIik7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldHRpZnkobnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG4gPSBudW0udG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIiBcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZSh3ZWlnaHRDb3N0PTAsIGRlbGl2ZXJ5Q29zdD0wKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gaGVpZ2h0SW5wdXQudmFsdWUqMTIwMCArIHdpZHRoSW5wdXQudmFsdWUqMTAwMCArIHdlaWdodENvc3QgKyBkZWxpdmVyeUNvc3Q7XHJcbiAgICAgICAgY29zdElucHV0LnZhbHVlID0gcHJldHRpZnkodG90YWwpO1xyXG4gICAgICAgIHBvcHVwQ29zdC5pbm5lckhUTUwgPSBwcmV0dGlmeSh0b3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlndXJlRHJhd2luZygpIHtcclxuICAgICAgICBmaWd1cmUuc3R5bGUud2lkdGggPSA3MCArICgrd2lkdGhJbnB1dC52YWx1ZSkgKyBcInB4XCI7XHJcbiAgICAgICAgZmlndXJlLnN0eWxlLmhlaWdodCA9IDcwICsgKCtoZWlnaHRJbnB1dC52YWx1ZSkgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4vLyB3aWR0aCBhbmQgaGVpZ2h0XHJcblxyXG4gICAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VXaWR0aCwge1xyXG4gICAgICAgIHN0YXJ0OiBbMV0sXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG4gICAgICAgIHRvb2x0aXBzOiB0cnVlLFxyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgICdtaW4nOiBbMV0sXHJcbiAgICAgICAgICAgICdtYXgnOiBbMTAwXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9ybWF0OiB3TnVtYih7XHJcbiAgICAgICAgICAgIGRlY2ltYWxzOiAwLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICByYW5nZVdpZHRoLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgIHdpZHRoSW5wdXQudmFsdWUgPSB2YWx1ZXNbaGFuZGxlXTtcclxuICAgICAgICBjYWxjdWxhdGUoKTtcclxuICAgICAgICBmaWd1cmVEcmF3aW5nKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aWR0aElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICByYW5nZVdpZHRoLm5vVWlTbGlkZXIuc2V0KHdpZHRoVmFsKTtcclxuICAgICAgICB3aWR0aElucHV0VmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNhbGN1bGF0ZSgpO1xyXG4gICAgICAgIGZpZ3VyZURyYXdpbmcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHJhbmdlSGVpZ2h0LCB7XHJcbiAgICAgICAgc3RhcnQ6IFsxXSxcclxuICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgIGNvbm5lY3Q6IFt0cnVlLCBmYWxzZV0sXHJcbiAgICAgICAgdG9vbHRpcHM6IHRydWUsXHJcbiAgICAgICAgcmFuZ2U6IHtcclxuICAgICAgICAgICAgJ21pbic6IFsxXSxcclxuICAgICAgICAgICAgJ21heCc6IFsxMDBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtYXQ6IHdOdW1iKHtcclxuICAgICAgICAgICAgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJhbmdlSGVpZ2h0Lm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgIGhlaWdodElucHV0LnZhbHVlID0gdmFsdWVzW2hhbmRsZV07XHJcbiAgICAgICAgY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgZmlndXJlRHJhd2luZygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaGVpZ2h0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHJhbmdlSGVpZ2h0Lm5vVWlTbGlkZXIuc2V0KGhlaWdodFZhbCk7XHJcbiAgICAgICAgaGVpZ2h0SW5wdXRWYWwgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgZmlndXJlRHJhd2luZygpO1xyXG4gICAgfSk7XHJcblxyXG4vLyB3ZWlnaHRcclxuXHJcbiAgICB3ZWlnaHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHdlaWdodFZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgd2VpZ2h0TWF4VmFsID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbWF4JyksXHJcbiAgICAgICAgICAgIHdlaWdodENvc3QgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIHdlaWdodFZhbCA+IDEwMCApIHtcclxuICAgICAgICAgICAgd2VpZ2h0VmFsID0gMTAwO1xyXG4gICAgICAgICAgICB3ZWlnaHRJbnB1dC52YWx1ZSA9IHdlaWdodFZhbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHdlaWdodFZhbCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHdlaWdodFZhbCA9IDE7XHJcbiAgICAgICAgICAgIHdlaWdodElucHV0LnZhbHVlID0gd2VpZ2h0VmFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmlndXJlV2VpZ2h0LmlubmVySFRNTCA9IGAke3dlaWdodFZhbH0ga2dgO1xyXG5cclxuICAgICAgICBpZiAoIHdlaWdodFZhbCA+ICh3ZWlnaHRNYXhWYWwvMikgKSB7XHJcbiAgICAgICAgICAgIHdlaWdodENvc3QgPSAzNTAwO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2FsY3VsYXRlKHdlaWdodENvc3QpO1xyXG4gICAgfSk7XHJcblxyXG4vLyBkZWxpdmVyeUNoZWNrYm94XHJcblxyXG4gICAgZGVsaXZlcnlDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGxldCBkZWxpdmVyeUNvc3QgPSAwO1xyXG4gICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5Q29zdCA9IDEwMDA7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJtb3ZlZFwiKTtcclxuICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5Q29zdCA9IC0xMDAwO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwibW92ZWRcIik7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5QWRkcmVzcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsY3VsYXRlKGRlbGl2ZXJ5Q29zdCk7XHJcbiAgICB9KTtcclxuXHJcbi8vIGNhbGVuZGFyXHJcblxyXG4gICAgY29uc3QgcGlja2VyID0gZGF0ZXBpY2tlcihkYXRlSW5wdXQsIHtcclxuICAgICAgICBmb3JtYXR0ZXI6IChpbnB1dCwgZGF0ZSwgaW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKERhdGUucGFyc2UobmV3IERhdGUoKSkrIDEwMDAgKiAzNjAwICogMjQgKiA0KSxcclxuICAgICAgICBvblNlbGVjdDogKGluc3RhbmNlLCBkYXRlLCBtaW5EYXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlVmFsID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbi8vIHNlbGVjdCBhbmQgY2l0aWVzIEFQSVxyXG5cclxuICAgIGZldGNoKFwiaHR0cHM6Ly93ZnQtZ2VvLWRiLnAucmFwaWRhcGkuY29tL3YxL2dlby9jb3VudHJpZXNcIiwge1xyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJoZWFkZXJzXCI6IHtcclxuICAgICAgICAgICAgXCJ4LXJhcGlkYXBpLWtleVwiOiBcImZjN2E0NmU2YmNtc2hkMmYyZjI4MzM2MDYxNjhwMTk3ZTUyanNuNDViMDg5ZTZjOTMzXCIsXHJcbiAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwid2Z0LWdlby1kYi5wLnJhcGlkYXBpLmNvbVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbiggcmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oIGpzb24gPT4ge1xyXG4gICAgICAgIGNvbnN0IGNpdGllc0FyciA9IGpzb24uZGF0YTtcclxuICAgICAgICBjaXRpZXNBcnIuZm9yRWFjaCggZWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gZWwubmFtZSxcclxuICAgICAgICAgICAgICAgIGNpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBjaXR5U2VsZWN0LmFwcGVuZChjaXR5T3B0aW9uKTtcclxuICAgICAgICAgICAgY2l0eU9wdGlvbi5pbm5lckhUTUwgPSBjaXR5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkudGhlbiggKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhjaXR5U2VsZWN0KTtcclxuICAgICAgICBjaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2l0eVZhbHVlID0gY2hvaWNlcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICBwb3B1cENpdHkuaW5uZXJIVE1MID0gY2l0eVZhbHVlLmxhYmVsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9KTtcclxuXHJcbi8vIG1vZGFsXHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdXBEYXRhKCkge1xyXG4gICAgICAgIHBvcHVwV2lkdGguaW5uZXJIVE1MID0gYCR7d2lkdGhJbnB1dC52YWx1ZX0gbWA7XHJcbiAgICAgICAgcG9wdXBIZWlnaHQuaW5uZXJIVE1MID0gYCR7aGVpZ2h0SW5wdXQudmFsdWV9IG1gO1xyXG4gICAgICAgIHBvcHVwV2VpZ2h0LmlubmVySFRNTCA9IGAke3dlaWdodElucHV0LnZhbHVlfSBrZ2A7XHJcbiAgICAgICAgcG9wdXBEYXRlLmlubmVySFRNTCA9IGRhdGVWYWw7XHJcbiAgICAgICAgcG9wdXBOYW1lLmlubmVySFRNTCA9IG5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICBwb3B1cFN1cm5hbWUuaW5uZXJIVE1MID0gc3VybmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIHBvcHVwUGhvbmUuaW5uZXJIVE1MID0gcGhvbmVJbnB1dC52YWx1ZTtcclxuICAgICAgICBwb3B1cENvbW1lbnRzLmlubmVySFRNTCA9IGNvbW1lbnRzVGV4dGFyZWEudmFsdWU7XHJcbiAgICAgICAgaWYgKCBkZWxpdmVyeUNoZWNrYm94LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICAgIHBvcHVwQXBwYXJ0bWVudC5pbm5lckhUTUwgPSBcInllc1wiO1xyXG4gICAgICAgICAgICBwb3B1cEFkZHJlc3MuaW5uZXJIVE1MID0gYWRkcmVzc0lucHV0LnZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvcHVwQXBwYXJ0bWVudC5pbm5lckhUTUwgPSBcIm5vXCI7XHJcbiAgICAgICAgICAgIHBvcHVwQWRkcmVzcy5pbm5lckhUTUwgPSBcIi1cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9wdXBCdG4uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBwb3B1cERhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBvcHVwQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCkge1xyXG4gICAgICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4vLyBwaG9uZSBtYXNrXHJcblxyXG4gICAgbGV0IG1hc2sgPSBJTWFzayhwaG9uZUlucHV0LCB7XHJcbiAgICAgICAgbWFzazogJyszNzUgMDAgMDAwLTAwLTAwJ1xyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
