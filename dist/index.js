"use strict";var E=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var w=E(function(C,y){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=require('@stdlib/assert-is-function/dist'),F=require('@stdlib/assert-is-collection/dist'),d=require('@stdlib/assert-is-integer/dist').isPrimitive,V=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/symbol-iterator/dist'),A=require('@stdlib/array-base-accessor-getter/dist'),G=require('@stdlib/array-base-getter/dist'),S=require('@stdlib/array-dtype/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function h(e){var i,t,g,u,m,n,r,s,v,a;if(!F(e))throw new TypeError(f('01l2O',e));if(g=arguments.length,g===1)t=0,r=e.length;else if(g===2)o(arguments[1])?(t=0,n=arguments[1]):t=arguments[1],r=e.length;else if(g===3)o(arguments[1])?(t=0,r=e.length,n=arguments[1],i=arguments[2]):o(arguments[2])?(t=arguments[1],r=e.length,n=arguments[2]):(t=arguments[1],r=arguments[2]);else{if(t=arguments[1],r=arguments[2],n=arguments[3],!o(n))throw new TypeError(f('01l32',n));i=arguments[4]}if(!d(t))throw new TypeError(f('01lE7',t));if(!d(r))throw new TypeError(f('01lE8',r));return r<0?(r=e.length+r,r<0&&(r=0)):r>e.length&&(r=e.length),t<0&&(t=e.length+t,t<0&&(t=0)),a=t-1,u={},n?l(u,"next",x):l(u,"next",b),l(u,"return",p),q&&l(u,q,c),v=S(e),V(e)?s=A(v):s=G(v),u;function x(){return a+=1,m||a>=r?{done:!0}:{value:n.call(i,s(e,a),a,a-t,e),done:!1}}function b(){return a+=1,m||a>=r?{done:!0}:{value:s(e,a),done:!1}}function p(T){return m=!0,arguments.length?{value:T,done:!0}:{done:!0}}function c(){return n?h(e,t,r,n,i):h(e,t,r)}}y.exports=h
});var j=w();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
