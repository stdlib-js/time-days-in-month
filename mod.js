// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var o=r()?function(e){var r,i,o,c,s;if(null==e)return t.call(e);i=e[a],s=a,r=null!=(c=e)&&n.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},c=Date.prototype.getDay;var s=r();function l(e){return"object"==typeof e&&(e instanceof Date||(s?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var u="function"==typeof Object.defineProperty?Object.defineProperty:null;var p=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function v(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var y=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,_=String.prototype.replace,j=/e\+(\d)$/,E=/e-(\d)$/,S=/^(\d+)$/,k=/^(\d+)e/,x=/\.0$/,I=/\.0*e/,T=/(\..*[^0])0*e/;function F(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":y(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=_.call(t,T,"$1e"),t=_.call(t,I,"e"),t=_.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_.call(t,j,"e+0$1"),t=_.call(t,E,"e-0$1"),e.alternate&&(t=_.call(t,S,"$1."),t=_.call(t,k,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):w.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var V=String.fromCharCode,A=Array.isArray;function P(e){return e!=e}function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function C(e){var r,t,n,i,a,o,c,s,l,u,p,f,g;if(!A(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(n=e[s],"string"==typeof n)o+=n;else{if(r=void 0!==n.precision,!(n=$(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,P(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,P(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=v(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!P(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=P(a)?String(n.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(u=n.arg,p=n.width,f=n.padRight,g=void 0,(g=p-u.length)<0?u:u=f?u+O(g):O(g)+u)),o+=n.arg||"",c+=1}return o}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function D(e){var r,t,n,i;for(t=[],i=0,n=N.exec(e);n;)(r=e.slice(i,N.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=N.lastIndex,n=N.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Y(e){var r,t;if("string"!=typeof e)throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[D(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return C.apply(null,r)}var Z=Object.prototype,B=Z.toString,G=Z.__defineGetter__,M=Z.__defineSetter__,Q=Z.__lookupGetter__,L=Z.__lookupSetter__;var W=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Q.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=Z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&M&&M.call(e,r,t.set),e};function U(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"string"==typeof e}var z=String.prototype.valueOf;var q=r();function H(e){return"object"==typeof e&&(e instanceof String||(q?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object String]"===o(e)))}function J(e){return X(e)||H(e)}function K(e){return"number"==typeof e}U(J,"isPrimitive",X),U(J,"isObject",H);var ee=Number,re=ee.prototype.toString;var te=r();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function ie(e){return K(e)||ne(e)}U(ie,"isPrimitive",K),U(ie,"isObject",ne);var ae=Number.POSITIVE_INFINITY,oe=ee.NEGATIVE_INFINITY,ce=Math.floor;function se(e){return e<ae&&e>oe&&ce(r=e)===r;var r}function le(e){return K(e)&&se(e)}function ue(e){return ne(e)&&se(e.valueOf())}function pe(e){return le(e)||ue(e)}function fe(){return(new Date).getFullYear()}function ge(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}U(pe,"isPrimitive",le),U(pe,"isObject",ue);var de={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31,jan:31,january:31,feb:28,february:28,mar:31,march:31,apr:30,april:30,may:31,jun:30,june:30,jul:31,july:31,aug:31,august:31,sep:30,september:30,oct:31,october:31,nov:30,november:30,dec:31,december:31};function he(e,r){var t,n,i,a;if(0===arguments.length)n=(a=new Date).getMonth()+1,i=a.getFullYear();else if(1===arguments.length)if(l(e))n=(a=e).getMonth()+1,i=a.getFullYear();else{if(!X(e)&&!le(e))throw new TypeError(ge("1QBAZ",e));i=fe(),n=e}else{if(!X(e)&&!le(e))throw new TypeError(ge("1QBAX",e));if(!le(r))throw new TypeError(ge("1QB7f",r));n=e,i=r}if(le(n)&&(n<1||n>12))throw new RangeError(ge("1QBAa",n));if(n=function(e){if(!X(e))throw new TypeError(Y("invalid argument. Must provide a string. Value: `%s`.",e));return function(e){return e.toLowerCase()}(e)}(n.toString()),void 0===(t=de[n]))throw new Error(ge("1QBAb",n));return 28===t&&function(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!le(e))return!1;r=e}else r=fe();return r%100==0?r%400==0:r%4==0}(i)&&(t+=1),t}export{he as default};
//# sourceMappingURL=mod.js.map
