// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function S(e){return"string"==typeof e}function B(e){var r,t,n;if(!S(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=R(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,M=C.toString,O=C.__defineGetter__,F=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&F&&F.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function $(e){return"boolean"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&J.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var H=Z()?function(e){var r,t,n;if(null==e)return X.call(e);t=e[D],r=z(e,D);try{e[D]=void 0}catch(r){return X.call(e)}return n=X.call(e),r?e[D]=t:delete e[D],n}:function(e){return X.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=Z();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return $(e)||re(e)}function ne(){return new Function("return this;")()}Y(te,"isPrimitive",$),Y(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ue="object"==typeof ae?ae:null,fe="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!$(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(fe)return fe;if(ie)return ie;if(oe)return oe;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=le.document&&le.document.childNodes,se=Int8Array;function ye(){return/^\s*function\s*([^(]*)/i}var he=/^\s*function\s*([^(]*)/i;Y(ye,"REGEXP",he);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function ge(e){return null!==e&&"object"==typeof e}function me(e){return ge(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function we(e){var r,t,n;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=he.exec(n.toString()))return r[1]}return me(e)?"Buffer":t}Y(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var be="function"==typeof W||"object"==typeof se||"function"==typeof ce?function(e){return we(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?we(e).toLowerCase():r};function ve(e){return"function"===be(e)}var de=Math.floor;function Ee(e){return de(e)===e}function Ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ee(e.length)&&e.length>=0&&e.length<=9007199254740991}function Te(e){return"number"==typeof e}var _e=Number,xe=_e.prototype.toString;var je=Z();function ke(e){return"object"==typeof e&&(e instanceof _e||(je?function(e){try{return xe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ve(e){return Te(e)||ke(e)}Y(Ve,"isPrimitive",Te),Y(Ve,"isObject",ke);var Le=Number.POSITIVE_INFINITY,Re=_e.NEGATIVE_INFINITY;function Se(e){return e<Le&&e>Re&&Ee(e)}function Be(e){return Te(e)&&Se(e)}function Ie(e){return ke(e)&&Se(e.valueOf())}function Ce(e){return Be(e)||Ie(e)}Y(Ce,"isPrimitive",Be),Y(Ce,"isObject",Ie);function Me(e){return"function"==typeof e.get&&"function"==typeof e.set}function Oe(){return"function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator}var Fe=Oe()?Symbol.iterator:null,Ue={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Ne(e){var r=Ue[e];return"function"==typeof r?r:Ue.default}var Pe={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Ye(e){var r=Pe[e];return"function"==typeof r?r:Pe.default}var We={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},$e="function"==typeof Float64Array;var Ge="function"==typeof Float64Array?Float64Array:null;var Ze="function"==typeof Float64Array?Float64Array:void 0;var Xe=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge([1,3.14,-3.14,NaN]),t=r,e=($e&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Ze:function(){throw new Error("not implemented")},Je="function"==typeof Float32Array;var ze="function"==typeof Float32Array?Float32Array:null;var qe="function"==typeof Float32Array?Float32Array:void 0;var De=function(){var e,r,t;if("function"!=typeof ze)return!1;try{r=new ze([1,3.14,-3.14,5e40]),t=r,e=(Je&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Le}catch(r){e=!1}return e}()?qe:function(){throw new Error("not implemented")},He="function"==typeof Uint32Array;var Ke="function"==typeof Uint32Array?Uint32Array:null;var Qe="function"==typeof Uint32Array?Uint32Array:void 0;var er=function(){var e,r,t;if("function"!=typeof Ke)return!1;try{r=new Ke(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(He&&t instanceof Uint32Array||"[object Uint32Array]"===H(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Qe:function(){throw new Error("not implemented")},rr="function"==typeof Int32Array;var tr="function"==typeof Int32Array?Int32Array:null;var nr="function"==typeof Int32Array?Int32Array:void 0;var ir=function(){var e,r,t;if("function"!=typeof tr)return!1;try{r=new tr([1,3.14,-3.14,2147483648]),t=r,e=(rr&&t instanceof Int32Array||"[object Int32Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?nr:function(){throw new Error("not implemented")},or="function"==typeof Uint16Array;var ar="function"==typeof Uint16Array?Uint16Array:null;var ur="function"==typeof Uint16Array?Uint16Array:void 0;var fr=function(){var e,r,t;if("function"!=typeof ar)return!1;try{r=new ar(r=[1,3.14,-3.14,65536,65537]),t=r,e=(or&&t instanceof Uint16Array||"[object Uint16Array]"===H(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ur:function(){throw new Error("not implemented")},lr="function"==typeof Int16Array;var cr="function"==typeof Int16Array?Int16Array:null;var sr="function"==typeof Int16Array?Int16Array:void 0;var yr=function(){var e,r,t;if("function"!=typeof cr)return!1;try{r=new cr([1,3.14,-3.14,32768]),t=r,e=(lr&&t instanceof Int16Array||"[object Int16Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?sr:function(){throw new Error("not implemented")},hr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var gr="function"==typeof Uint8Array?Uint8Array:void 0;var mr=function(){var e,r,t;if("function"!=typeof pr)return!1;try{r=new pr(r=[1,3.14,-3.14,256,257]),t=r,e=(hr&&t instanceof Uint8Array||"[object Uint8Array]"===H(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?gr:function(){throw new Error("not implemented")},wr="function"==typeof Uint8ClampedArray;var br="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var vr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var dr=function(){var e,r,t;if("function"!=typeof br)return!1;try{r=new br([-1,0,1,3.14,4.99,255,256]),t=r,e=(wr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===H(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?vr:function(){throw new Error("not implemented")},Er="function"==typeof Int8Array;var Ar="function"==typeof Int8Array?Int8Array:null;var Tr="function"==typeof Int8Array?Int8Array:void 0;var _r=function(){var e,r,t;if("function"!=typeof Ar)return!1;try{r=new Ar([1,3.14,-3.14,128]),t=r,e=(Er&&t instanceof Int8Array||"[object Int8Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Tr:function(){throw new Error("not implemented")};function xr(e){return Be(e)&&e>=0}function jr(e){return Ie(e)&&e.valueOf()>=0}function kr(e){return xr(e)||jr(e)}Y(kr,"isPrimitive",xr),Y(kr,"isObject",jr);function Vr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ee(e.length)&&e.length>=0&&e.length<=4294967295}var Lr="function"==typeof ArrayBuffer;function Rr(e){return Lr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===H(e)}function Sr(e){return"object"==typeof e&&null!==e&&!pe(e)}function Br(e,r){if(!(this instanceof Br))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Te(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Te(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Br,"BYTES_PER_ELEMENT",8),Y(Br.prototype,"BYTES_PER_ELEMENT",8),Y(Br.prototype,"byteLength",16),Y(Br.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Br.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ir="function"==typeof Math.fround?Math.fround:null,Cr=new De(1);var Mr="function"==typeof Ir?Ir:function(e){return Cr[0]=e,Cr[0]};function Or(e,r){if(!(this instanceof Or))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Te(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Te(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Mr(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Mr(r)}),this}function Fr(e){return e instanceof Br||e instanceof Or||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Ur(e){return Ee(e/2)}function Nr(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function Pr(e){return e.re}function Yr(e){return e.im}function Wr(e,r){return new De(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function $r(e,r){return new Xe(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Gr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Vr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Fr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Pr(n),Yr(n))}return r}function Zr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Vr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Fr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Pr(o),Yr(o))}return n}function Xr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Fr(n=r[i]))return null;e[o]=Pr(n),e[o+1]=Yr(n),o+=2}return e}Y(Or,"BYTES_PER_ELEMENT",4),Y(Or.prototype,"BYTES_PER_ELEMENT",4),Y(Or.prototype,"byteLength",8),Y(Or.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Or.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Jr=2*De.BYTES_PER_ELEMENT,zr=Oe();function qr(e){return e instanceof Qr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Dr(e){return e===Qr||"Complex128Array"===e.name}function Hr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Jr}function Kr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Jr}function Qr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Qr))return 0===r?new Qr:1===r?new Qr(arguments[0]):2===r?new Qr(arguments[0],arguments[1]):new Qr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new De(0);else if(1===r)if(xr(arguments[0]))t=new De(2*arguments[0]);else if(Ae(arguments[0]))if((n=(t=arguments[0]).length)&&pe(t)&&Fr(t[0])){if(null===(t=Xr(new De(2*n),t))){if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new De(arguments[0])}}else{if(Hr(t))t=Wr(t,0);else if(Kr(t))t=$r(t,0);else if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new De(t)}else if(Rr(arguments[0])){if(!Ee((t=arguments[0]).byteLength/Jr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Jr,t.byteLength));t=new De(t)}else{if(!Sr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===zr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ve(t[Fe]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!ve((t=t[Fe]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Gr(t))instanceof Error)throw t;t=new De(t)}else{if(!Rr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!xr(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Ee(e/Jr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Jr,e));if(2===r){if(!Ee((n=t.byteLength-e)/Jr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Jr,n));t=new De(t,e)}else{if(!xr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Jr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Jr));t=new De(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function et(e){return e.re}function rt(e){return e.im}function tt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Vr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Fr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(et(n),rt(n))}return r}function nt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Vr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Fr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(et(o),rt(o))}return n}function it(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Fr(n=r[i]))return null;e[o]=et(n),e[o+1]=rt(n),o+=2}return e}Y(Qr,"BYTES_PER_ELEMENT",Jr),Y(Qr,"name","Complex64Array"),Y(Qr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!ve(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(qr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,e.get(s),s)))o[y]=Pr(c),o[y+1]=Yr(c);else{if(!(Vr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ae(e)){if(n){for(f=e.length,u=e.get&&e.set?Ne("default"):Ye("default"),s=0;s<f;s++)if(!Fr(u(e,s))){l=!0;break}if(l){if(!Ur(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,u(e,s),s)))o[y]=Pr(c),o[y+1]=Yr(c);else{if(!(Vr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Sr(e)&&zr&&ve(e[Fe])){if(!ve((o=e[Fe]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Zr(o,n,r):Gr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(Qr,"of",(function(){var e,r;if(!ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Nr(Qr.prototype,"buffer",(function(){return this._buffer.buffer})),Nr(Qr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Nr(Qr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Qr.prototype,"BYTES_PER_ELEMENT",Qr.BYTES_PER_ELEMENT),Y(Qr.prototype,"copyWithin",(function(e,r){if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(Qr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Or(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Fe&&Y(t,Fe,(function(){return r.entries()})),t})),Y(Qr.prototype,"get",(function(e){var r;if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xr(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Or((r=this._buffer)[e*=2],r[e+1])})),Nr(Qr.prototype,"length",(function(){return this._length})),Y(Qr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!xr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Fr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Pr(e),void(n[t+1]=Yr(e))}if(qr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Jr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new De(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ae(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Fr(e[f])){o=!0;break}if(o){if(!Ur(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Jr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new De(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Pr(u),n[t+1]=Yr(u),t+=2}}));var ot=2*Xe.BYTES_PER_ELEMENT,at=Oe();function ut(e){return e instanceof st||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ft(e){return e===st||"Complex64Array"===e.name}function lt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ot/2}function ct(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ot}function st(){var e,r,t,n;if(r=arguments.length,!(this instanceof st))return 0===r?new st:1===r?new st(arguments[0]):2===r?new st(arguments[0],arguments[1]):new st(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Xe(0);else if(1===r)if(xr(arguments[0]))t=new Xe(2*arguments[0]);else if(Ae(arguments[0]))if((n=(t=arguments[0]).length)&&pe(t)&&Fr(t[0])){if(null===(t=it(new Xe(2*n),t))){if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Xe(arguments[0])}}else{if(lt(t))t=Wr(t,0);else if(ct(t))t=$r(t,0);else if(!Ur(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Xe(t)}else if(Rr(arguments[0])){if(!Ee((t=arguments[0]).byteLength/ot))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ot,t.byteLength));t=new Xe(t)}else{if(!Sr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===at)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!ve(t[Fe]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!ve((t=t[Fe]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=tt(t))instanceof Error)throw t;t=new Xe(t)}else{if(!Rr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!xr(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Ee(e/ot))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ot,e));if(2===r){if(!Ee((n=t.byteLength-e)/ot))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ot,n));t=new Xe(t,e)}else{if(!xr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ot>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ot));t=new Xe(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(st,"BYTES_PER_ELEMENT",ot),Y(st,"name","Complex128Array"),Y(st,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!ve(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(ut(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,e.get(s),s)))o[y]=et(c),o[y+1]=rt(c);else{if(!(Vr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ae(e)){if(n){for(f=e.length,u=e.get&&e.set?Ne("default"):Ye("default"),s=0;s<f;s++)if(!Fr(u(e,s))){l=!0;break}if(l){if(!Ur(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Fr(c=n.call(r,u(e,s),s)))o[y]=et(c),o[y+1]=rt(c);else{if(!(Vr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Sr(e)&&at&&ve(e[Fe])){if(!ve((o=e[Fe]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?nt(o,n,r):tt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(st,"of",(function(){var e,r;if(!ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Nr(st.prototype,"buffer",(function(){return this._buffer.buffer})),Nr(st.prototype,"byteLength",(function(){return this._buffer.byteLength})),Nr(st.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(st.prototype,"BYTES_PER_ELEMENT",st.BYTES_PER_ELEMENT),Y(st.prototype,"copyWithin",(function(e,r){if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(st.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Br(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Y(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Fe&&Y(t,Fe,(function(){return r.entries()})),t})),Y(st.prototype,"get",(function(e){var r;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xr(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Br((r=this._buffer)[e*=2],r[e+1])})),Nr(st.prototype,"length",(function(){return this._length})),Y(st.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!xr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Fr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=et(e),void(n[t+1]=rt(e))}if(ut(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ot,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Xe(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Ae(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Fr(e[f])){o=!0;break}if(o){if(!Ur(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ot,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Xe(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=et(u),n[t+1]=rt(u),t+=2}}));var yt=[Xe,De,ir,er,yr,fr,_r,mr,dr,Qr,st],ht=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],pt=ht.length;function gt(e){var r;if(pe(e))return"generic";if(me(e))return null;for(r=0;r<pt;r++)if(e instanceof yt[r])return ht[r];return We[we(e)]||null}function mt(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function wt(e){var r,t,n,i,o,a,u,f,l,c;if(!Ae(e))throw new TypeError(mt("01l2O,GW",e));if(1===(n=arguments.length))t=0,u=e.length;else if(2===n)ve(arguments[1])?(t=0,a=arguments[1]):t=arguments[1],u=e.length;else if(3===n)ve(arguments[1])?(t=0,u=e.length,a=arguments[1],r=arguments[2]):ve(arguments[2])?(t=arguments[1],u=e.length,a=arguments[2]):(t=arguments[1],u=arguments[2]);else{if(t=arguments[1],u=arguments[2],!ve(a=arguments[3]))throw new TypeError(mt("01l32,MM",a));r=arguments[4]}if(!Be(t))throw new TypeError(mt("01lMN",t));if(!Be(u))throw new TypeError(mt("01lMO",u));return u<0?(u=e.length+u)<0&&(u=0):u>e.length&&(u=e.length),t<0&&(t=e.length+t)<0&&(t=0),c=t-1,Y(i={},"next",a?s:y),Y(i,"return",h),Fe&&Y(i,Fe,p),l=gt(e),f=Me(e)?Ne(l):Ye(l),i;function s(){return c+=1,o||c>=u?{done:!0}:{value:a.call(r,f(e,c),c,c-t,e),done:!1}}function y(){return c+=1,o||c>=u?{done:!0}:{value:f(e,c),done:!1}}function h(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function p(){return a?wt(e,t,u,a,r):wt(e,t,u)}}export{wt as default};
//# sourceMappingURL=mod.js.map
