// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).arrayview2iterator=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,s="set"in r,a&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),s&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function s(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&v.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return g.call(t);r=t[m],e=d(t,m);try{t[m]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[m]=r:delete t[m],n}:function(t){return g.call(t)},j=Boolean.prototype.toString;var w=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function S(t){return s(t)||_(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",s),a(S,"isObject",_);var T="object"==typeof self?self:null,O="object"==typeof window?window:null,I="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(O)return O;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),P=A.document&&A.document.childNodes,N=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(x,"REGEXP",B);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function C(t){return null!==t&&"object"==typeof t}function F(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(C));var G="function"==typeof y||"object"==typeof N||"function"==typeof P?function(t){return F(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?F(t).toLowerCase():e};function k(t){return"function"===G(t)}var L=Math.floor;function M(t){return L(t)===t}function R(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function U(t){return"number"==typeof t}var Y=Number,X=Y.prototype.toString;var q=b();function z(t){return"object"==typeof t&&(t instanceof Y||(q?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function D(t){return U(t)||z(t)}a(D,"isPrimitive",U),a(D,"isObject",z);var H=Number.POSITIVE_INFINITY,J=Y.NEGATIVE_INFINITY;function K(t){return t<H&&t>J&&M(t)}function Q(t){return U(t)&&K(t)}function W(t){return z(t)&&K(t.valueOf())}function Z(t){return Q(t)||W(t)}a(Z,"isPrimitive",Q),a(Z,"isObject",W);var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function tt(t,e){return t[e]}function et(t,e){return t.get(e)}function rt(t,e,r){t[e]=r}function nt(t,e,r){t.set(r,e)}function ot(t){var e=Boolean(t.get&&t.set);return{data:t,accessors:e,getter:e?et:tt,setter:e?nt:rt}}function ut(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function t(e){var r,n,o,u,i,f,l,c,y;if(!R(e))throw new TypeError(ut("00s2a",e));if(1===(o=arguments.length))n=0,l=e.length;else if(2===o)k(arguments[1])?(n=0,f=arguments[1]):n=arguments[1],l=e.length;else if(3===o)k(arguments[1])?(n=0,l=e.length,f=arguments[1],r=arguments[2]):k(arguments[2])?(n=arguments[1],l=e.length,f=arguments[2]):(n=arguments[1],l=arguments[2]);else{if(n=arguments[1],l=arguments[2],!k(f=arguments[3]))throw new TypeError(ut("00s3E",f));r=arguments[4]}if(!Q(n))throw new TypeError(ut("invalid argument. Second argument must be either an integer (starting index) or a function. Value: `%s`.",n));if(!Q(l))throw new TypeError(ut("invalid argument. Third argument must be either an integer (ending index) or a function. Value: `%s`.",l));return l<0?(l=e.length+l)<0&&(l=0):l>e.length&&(l=e.length),n<0&&(n=e.length+n)<0&&(n=0),y=n-1,a(u={},"next",f?s:p),a(u,"return",b),$&&a(u,$,g),c=ot(e).getter,u;function s(){return y+=1,i||y>=l?{done:!0}:{value:f.call(r,c(e,y),y,y-n,e),done:!1}}function p(){return y+=1,i||y>=l?{done:!0}:{value:c(e,y),done:!1}}function b(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function g(){return f?t(e,n,l,f,r):t(e,n,l)}}}));
//# sourceMappingURL=index.js.map
