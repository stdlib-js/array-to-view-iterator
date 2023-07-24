// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).arrayview2iterator=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function s(e){return"boolean"==typeof e}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return h&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function w(e,r){return null!=e&&g.call(e,r)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var v=m()?function(e){var r,t,n;if(null==e)return p.call(e);t=e[b],r=w(e,b);try{e[b]=void 0}catch(r){return p.call(e)}return n=p.call(e),r?e[b]=t:delete e[b],n}:function(e){return p.call(e)},d=Boolean.prototype.toString;var E=m();function A(e){return"object"==typeof e&&(e instanceof Boolean||(E?function(e){try{return d.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===v(e)))}function _(e){return s(e)||A(e)}function T(){return new Function("return this;")()}c(_,"isPrimitive",s),c(_,"isObject",A);var j="object"==typeof self?self:null,x="object"==typeof window?window:null,B="object"==typeof global?global:null;var L=function(e){if(arguments.length){if(!s(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(j)return j;if(x)return x;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),V=L.document&&L.document.childNodes,S=Int8Array;function R(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;c(R,"REGEXP",k);var I=Array.isArray?Array.isArray:function(e){return"[object Array]"===v(e)};function C(e){return null!==e&&"object"==typeof e}function O(e){return C(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function M(e){var r,t,n;if(("Object"===(t=v(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=k.exec(n.toString()))return r[1]}return O(e)?"Buffer":t}c(C,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!I(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(C));var U="function"==typeof y||"object"==typeof S||"function"==typeof V?function(e){return M(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?M(e).toLowerCase():r};function N(e){return"function"===U(e)}var F=Math.floor;function P(e){return F(e)===e}function Y(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&P(e.length)&&e.length>=0&&e.length<=9007199254740991}function W(e){return"number"==typeof e}var G=Number,J=G.prototype.toString;var X=m();function q(e){return"object"==typeof e&&(e instanceof G||(X?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function z(e){return W(e)||q(e)}c(z,"isPrimitive",W),c(z,"isObject",q);var D=Number.POSITIVE_INFINITY,H=G.NEGATIVE_INFINITY;function K(e){return e<D&&e>H&&P(e)}function Q(e){return W(e)&&K(e)}function Z(e){return q(e)&&K(e.valueOf())}function $(e){return Q(e)||Z(e)}c($,"isPrimitive",Q),c($,"isObject",Z);var ee="function";function re(e){return typeof e.get===ee&&typeof e.set===ee}function te(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}var ne=te()?Symbol.iterator:null,ie={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function oe(e){var r=ie[e];return"function"==typeof r?r:ie.default}var ae={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function ue(e){var r=ae[e];return"function"==typeof r?r:ae.default}var fe={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},le="function"==typeof Float64Array;var ce="function"==typeof Float64Array?Float64Array:null;var ye="function"==typeof Float64Array?Float64Array:void 0;var se=function(){var e,r,t;if("function"!=typeof ce)return!1;try{r=new ce([1,3.14,-3.14,NaN]),t=r,e=(le&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ye:function(){throw new Error("not implemented")},he="function"==typeof Float32Array;var me="function"==typeof Float32Array?Float32Array:null;var pe="function"==typeof Float32Array?Float32Array:void 0;var ge=function(){var e,r,t;if("function"!=typeof me)return!1;try{r=new me([1,3.14,-3.14,5e40]),t=r,e=(he&&t instanceof Float32Array||"[object Float32Array]"===v(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===D}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")},we="function"==typeof Uint32Array;var be="function"==typeof Uint32Array?Uint32Array:null;var ve="function"==typeof Uint32Array?Uint32Array:void 0;var de=function(){var e,r,t;if("function"!=typeof be)return!1;try{r=new be(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(we&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ve:function(){throw new Error("not implemented")},Ee="function"==typeof Int32Array;var Ae="function"==typeof Int32Array?Int32Array:null;var _e="function"==typeof Int32Array?Int32Array:void 0;var Te=function(){var e,r,t;if("function"!=typeof Ae)return!1;try{r=new Ae([1,3.14,-3.14,2147483648]),t=r,e=(Ee&&t instanceof Int32Array||"[object Int32Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?_e:function(){throw new Error("not implemented")},je="function"==typeof Uint16Array;var xe="function"==typeof Uint16Array?Uint16Array:null;var Be="function"==typeof Uint16Array?Uint16Array:void 0;var Le=function(){var e,r,t;if("function"!=typeof xe)return!1;try{r=new xe(r=[1,3.14,-3.14,65536,65537]),t=r,e=(je&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Be:function(){throw new Error("not implemented")},Ve="function"==typeof Int16Array;var Se="function"==typeof Int16Array?Int16Array:null;var Re="function"==typeof Int16Array?Int16Array:void 0;var ke=function(){var e,r,t;if("function"!=typeof Se)return!1;try{r=new Se([1,3.14,-3.14,32768]),t=r,e=(Ve&&t instanceof Int16Array||"[object Int16Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Re:function(){throw new Error("not implemented")},Ie="function"==typeof Uint8Array;var Ce="function"==typeof Uint8Array?Uint8Array:null;var Oe="function"==typeof Uint8Array?Uint8Array:void 0;var Me=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce(r=[1,3.14,-3.14,256,257]),t=r,e=(Ie&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Oe:function(){throw new Error("not implemented")},Ue="function"==typeof Uint8ClampedArray;var Ne="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Fe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Pe=function(){var e,r,t;if("function"!=typeof Ne)return!1;try{r=new Ne([-1,0,1,3.14,4.99,255,256]),t=r,e=(Ue&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===v(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Fe:function(){throw new Error("not implemented")},Ye="function"==typeof Int8Array;var We="function"==typeof Int8Array?Int8Array:null;var Ge="function"==typeof Int8Array?Int8Array:void 0;var Je=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,128]),t=r,e=(Ye&&t instanceof Int8Array||"[object Int8Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Ge:function(){throw new Error("not implemented")};function Xe(e){return Q(e)&&e>=0}function qe(e){return Z(e)&&e.valueOf()>=0}function ze(e){return Xe(e)||qe(e)}c(ze,"isPrimitive",Xe),c(ze,"isObject",qe);function De(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&P(e.length)&&e.length>=0&&e.length<=4294967295}var He="function"==typeof ArrayBuffer;function Ke(e){return He&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===v(e)}function Qe(e){return"object"==typeof e&&null!==e&&!I(e)}function Ze(e,r){if(!(this instanceof Ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!W(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(Ze,"BYTES_PER_ELEMENT",8),c(Ze.prototype,"BYTES_PER_ELEMENT",8),c(Ze.prototype,"byteLength",16),c(Ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(Ze.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var $e="function"==typeof Math.fround?Math.fround:null,er=new ge(1);var rr="function"==typeof $e?$e:function(e){return er[0]=e,er[0]};function tr(e,r){if(!(this instanceof tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!W(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:rr(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:rr(r)}),this}function nr(e){return e instanceof Ze||e instanceof tr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function ir(e){return P(e/2)}function or(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function ar(e){return e.re}function ur(e){return e.im}function fr(e,r){return new ge(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function lr(e,r){return new se(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function cr(e,r){return e[r]}function yr(e,r){return e.get(r)}function sr(e,r,t){e[r]=t}function hr(e,r,t){e.set(t,r)}function mr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?yr:cr,setter:r?hr:sr}}function pr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(De(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!nr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(ar(n),ur(n))}return r}function gr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,De(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!nr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(ar(o),ur(o))}return n}function wr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!nr(n=r[i]))return null;e[o]=ar(n),e[o+1]=ur(n),o+=2}return e}c(tr,"BYTES_PER_ELEMENT",4),c(tr.prototype,"BYTES_PER_ELEMENT",4),c(tr.prototype,"byteLength",8),c(tr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(tr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var br=2*ge.BYTES_PER_ELEMENT,vr=te();function dr(e){return e instanceof Tr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Er(e){return e===Tr||"Complex128Array"===e.name}function Ar(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===br}function _r(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*br}function Tr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Tr))return 0===r?new Tr:1===r?new Tr(arguments[0]):2===r?new Tr(arguments[0],arguments[1]):new Tr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ge(0);else if(1===r)if(Xe(arguments[0]))t=new ge(2*arguments[0]);else if(Y(arguments[0]))if((n=(t=arguments[0]).length)&&I(t)&&nr(t[0])){if(null===(t=wr(new ge(2*n),t))){if(!ir(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ge(arguments[0])}}else{if(Ar(t))t=fr(t,0);else if(_r(t))t=lr(t,0);else if(!ir(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ge(t)}else if(Ke(arguments[0])){if(!P((t=arguments[0]).byteLength/br))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+br+". Byte length: `"+t.byteLength+"`.");t=new ge(t)}else{if(!Qe(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===vr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!N(t[ne]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!N((t=t[ne]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=pr(t))instanceof Error)throw t;t=new ge(t)}else{if(!Ke(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Xe(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!P(e/br))throw new RangeError("invalid argument. Byte offset must be a multiple of "+br+". Value: `"+e+"`.");if(2===r){if(!P((n=t.byteLength-e)/br))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+br+". View byte length: `"+n+"`.");t=new ge(t,e)}else{if(!Xe(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*br>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*br+"`.");t=new ge(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function jr(e){return e.re}function xr(e){return e.im}function Br(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(De(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!nr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(jr(n),xr(n))}return r}function Lr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,De(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!nr(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(jr(o),xr(o))}return n}function Vr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!nr(n=r[i]))return null;e[o]=jr(n),e[o+1]=xr(n),o+=2}return e}c(Tr,"BYTES_PER_ELEMENT",br),c(Tr,"name","Complex64Array"),c(Tr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!N(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(dr(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(nr(l=n.call(r,e.get(c),c)))o[y]=ar(l),o[y+1]=ur(l);else{if(!(De(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Y(e)){if(n){for(u=e.length,a=mr(e),c=0;c<u;c++)if(!nr(a.getter(e,c))){f=!0;break}if(f){if(!ir(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(nr(l=n.call(r,a.getter(e,c),c)))o[y]=ar(l),o[y+1]=ur(l);else{if(!(De(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Qe(e)&&vr&&N(e[ne])){if(!N((o=e[ne]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?gr(o,n,r):pr(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Tr,"of",(function(){var e,r;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),or(Tr.prototype,"buffer",(function(){return this._buffer.buffer})),or(Tr.prototype,"byteLength",(function(){return this._buffer.byteLength})),or(Tr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Tr.prototype,"BYTES_PER_ELEMENT",Tr.BYTES_PER_ELEMENT),c(Tr.prototype,"copyWithin",(function(e,r){if(!dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Tr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new tr(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ne&&c(t,ne,(function(){return r.entries()})),t})),c(Tr.prototype,"get",(function(e){var r;if(!dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Xe(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new tr((r=this._buffer)[e*=2],r[e+1])})),or(Tr.prototype,"length",(function(){return this._length})),c(Tr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Xe(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(nr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ar(e),void(n[t+1]=ur(e))}if(dr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*br,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ge(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Y(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!nr(e[f])){o=!0;break}if(o){if(!ir(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*br,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ge(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ar(u),n[t+1]=ur(u),t+=2}}));var Sr=2*se.BYTES_PER_ELEMENT,Rr=te();function kr(e){return e instanceof Mr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ir(e){return e===Mr||"Complex64Array"===e.name}function Cr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Sr/2}function Or(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Sr}function Mr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Mr))return 0===r?new Mr:1===r?new Mr(arguments[0]):2===r?new Mr(arguments[0],arguments[1]):new Mr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new se(0);else if(1===r)if(Xe(arguments[0]))t=new se(2*arguments[0]);else if(Y(arguments[0]))if((n=(t=arguments[0]).length)&&I(t)&&nr(t[0])){if(null===(t=Vr(new se(2*n),t))){if(!ir(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new se(arguments[0])}}else{if(Cr(t))t=fr(t,0);else if(Or(t))t=lr(t,0);else if(!ir(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new se(t)}else if(Ke(arguments[0])){if(!P((t=arguments[0]).byteLength/Sr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Sr+". Byte length: `"+t.byteLength+"`.");t=new se(t)}else{if(!Qe(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Rr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!N(t[ne]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!N((t=t[ne]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Br(t))instanceof Error)throw t;t=new se(t)}else{if(!Ke(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Xe(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!P(e/Sr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Sr+". Value: `"+e+"`.");if(2===r){if(!P((n=t.byteLength-e)/Sr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Sr+". View byte length: `"+n+"`.");t=new se(t,e)}else{if(!Xe(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Sr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Sr+"`.");t=new se(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Mr,"BYTES_PER_ELEMENT",Sr),c(Mr,"name","Complex128Array"),c(Mr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!N(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(kr(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(nr(l=n.call(r,e.get(c),c)))o[y]=jr(l),o[y+1]=xr(l);else{if(!(De(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Y(e)){if(n){for(u=e.length,a=mr(e),c=0;c<u;c++)if(!nr(a.getter(e,c))){f=!0;break}if(f){if(!ir(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(nr(l=n.call(r,a.getter(e,c),c)))o[y]=jr(l),o[y+1]=xr(l);else{if(!(De(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Qe(e)&&Rr&&N(e[ne])){if(!N((o=e[ne]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Lr(o,n,r):Br(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Mr,"of",(function(){var e,r;if(!N(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),or(Mr.prototype,"buffer",(function(){return this._buffer.buffer})),or(Mr.prototype,"byteLength",(function(){return this._buffer.byteLength})),or(Mr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Mr.prototype,"BYTES_PER_ELEMENT",Mr.BYTES_PER_ELEMENT),c(Mr.prototype,"copyWithin",(function(e,r){if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Mr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Ze(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ne&&c(t,ne,(function(){return r.entries()})),t})),c(Mr.prototype,"get",(function(e){var r;if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Xe(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Ze((r=this._buffer)[e*=2],r[e+1])})),or(Mr.prototype,"length",(function(){return this._length})),c(Mr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Xe(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(nr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=jr(e),void(n[t+1]=xr(e))}if(kr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Sr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Y(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!nr(e[f])){o=!0;break}if(o){if(!ir(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Sr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=jr(u),n[t+1]=xr(u),t+=2}}));var Ur=[se,ge,Te,de,ke,Le,Je,Me,Pe,Tr,Mr],Nr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Fr=Nr.length;function Pr(e){var r;if(I(e))return"generic";if(O(e))return null;for(r=0;r<Fr;r++)if(e instanceof Ur[r])return Nr[r];return fe[M(e)]||null}function Yr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function e(r){var t,n,i,o,a,u,f,l,y,s;if(!Y(r))throw new TypeError(Yr("00s2a",r));if(1===(i=arguments.length))n=0,f=r.length;else if(2===i)N(arguments[1])?(n=0,u=arguments[1]):n=arguments[1],f=r.length;else if(3===i)N(arguments[1])?(n=0,f=r.length,u=arguments[1],t=arguments[2]):N(arguments[2])?(n=arguments[1],f=r.length,u=arguments[2]):(n=arguments[1],f=arguments[2]);else{if(n=arguments[1],f=arguments[2],!N(u=arguments[3]))throw new TypeError(Yr("00s3E",u));t=arguments[4]}if(!Q(n))throw new TypeError(Yr("invalid argument. Second argument must be either an integer (starting index) or a function. Value: `%s`.",n));if(!Q(f))throw new TypeError(Yr("invalid argument. Third argument must be either an integer (ending index) or a function. Value: `%s`.",f));return f<0?(f=r.length+f)<0&&(f=0):f>r.length&&(f=r.length),n<0&&(n=r.length+n)<0&&(n=0),s=n-1,c(o={},"next",u?h:m),c(o,"return",p),ne&&c(o,ne,g),y=Pr(r),l=re(r)?oe(y):ue(y),o;function h(){return s+=1,a||s>=f?{done:!0}:{value:u.call(t,l(r,s),s,s-n,r),done:!1}}function m(){return s+=1,a||s>=f?{done:!0}:{value:l(r,s),done:!1}}function p(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return u?e(r,n,f,u,t):e(r,n,f)}}}));
//# sourceMappingURL=index.js.map
