// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.0.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.0.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function h(j){var a,p,f,g,c,u,v,b,y,x;if(!r(j))throw new TypeError(m("01l2O,GW",j));if(1===(f=arguments.length))p=0,v=j.length;else if(2===f)t(arguments[1])?(p=0,u=arguments[1]):p=arguments[1],v=j.length;else if(3===f)t(arguments[1])?(p=0,v=j.length,u=arguments[1],a=arguments[2]):t(arguments[2])?(p=arguments[1],v=j.length,u=arguments[2]):(p=arguments[1],v=arguments[2]);else{if(p=arguments[1],v=arguments[2],!t(u=arguments[3]))throw new TypeError(m("01l32,MM",u));a=arguments[4]}if(!s(p))throw new TypeError(m("01lMN",p));if(!s(v))throw new TypeError(m("01lMO",v));return v<0?(v=j.length+v)<0&&(v=0):v>j.length&&(v=j.length),p<0&&(p=j.length+p)<0&&(p=0),x=p-1,e(g={},"next",u?w:E),e(g,"return",M),i&&e(g,i,T),y=l(j),b=n(j)?o(y):d(y),g;function w(){return x+=1,c||x>=v?{done:!0}:{value:u.call(a,b(j,x),x,x-p,j),done:!1}}function E(){return x+=1,c||x>=v?{done:!0}:{value:b(j,x),done:!1}}function M(e){return c=!0,arguments.length?{value:e,done:!0}:{done:!0}}function T(){return u?h(j,p,v,u,a):h(j,p,v)}}export{h as default};
//# sourceMappingURL=index.mjs.map
