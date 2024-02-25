// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function h(f){var j,a,p,g,v,c,u,b,y,x;if(!r(f))throw new TypeError(m("01l2O",f));if(1===(p=arguments.length))a=0,u=f.length;else if(2===p)t(arguments[1])?(a=0,c=arguments[1]):a=arguments[1],u=f.length;else if(3===p)t(arguments[1])?(a=0,u=f.length,c=arguments[1],j=arguments[2]):t(arguments[2])?(a=arguments[1],u=f.length,c=arguments[2]):(a=arguments[1],u=arguments[2]);else{if(a=arguments[1],u=arguments[2],!t(c=arguments[3]))throw new TypeError(m("01l32",c));j=arguments[4]}if(!s(a))throw new TypeError(m("01lE7",a));if(!s(u))throw new TypeError(m("01lE8",u));return u<0?(u=f.length+u)<0&&(u=0):u>f.length&&(u=f.length),a<0&&(a=f.length+a)<0&&(a=0),x=a-1,e(g={},"next",c?function(){if(x+=1,v||x>=u)return{done:!0};return{value:c.call(j,b(f,x),x,x-a,f),done:!1}}:function(){if(x+=1,v||x>=u)return{done:!0};return{value:b(f,x),done:!1}}),e(g,"return",(function(e){if(v=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),i&&e(g,i,(function(){if(c)return h(f,a,u,c,j);return h(f,a,u)})),y=l(f),b=n(f)?o(y):d(y),g}export{h as default};
//# sourceMappingURL=index.mjs.map