/*! For license information please see 79408.b6974dbe.js.LICENSE.txt */
(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[79408],{29813:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var n=r(74892),o=r(11062);function i(t){var e=t.children,r=t.fallback;return(0,o.A)()?n.createElement(n.Fragment,null,null==e?void 0:e()):null!=r?r:null}},67526:(t,e)=>{"use strict";e.byteLength=function(t){var e=f(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,i=f(t),s=i[0],u=i[1],h=new o(function(t,e,r){return 3*(e+r)/4-r}(0,s,u)),a=0,c=u>0?s-4:s;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[a++]=e>>16&255,h[a++]=e>>8&255,h[a++]=255&e;2===u&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[a++]=255&e);1===u&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[a++]=e>>8&255,h[a++]=255&e);return h},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=16383,f=0,h=n-o;f<h;f+=s)i.push(u(t,f,f+s>h?h:f+s));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0;s<64;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function f(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function u(t,e,n){for(var o,i,s=[],f=e;f<n;f+=3)o=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48287:(t,e,r)=>{"use strict";const n=r(67526),o=r(251),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.hp=u,e.IS=50;const s=2147483647;function f(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return h(t,e,r)}function h(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|g(t,e);let n=f(r);const o=n.write(t,e);o!==r&&(n=n.slice(0,o));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Z(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Z(t,ArrayBuffer)||t&&Z(t.buffer,ArrayBuffer))return p(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(Z(t,SharedArrayBuffer)||t&&Z(t.buffer,SharedArrayBuffer)))return p(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return u.from(n,e,r);const o=function(t){if(u.isBuffer(t)){const e=0|y(t.length),r=f(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||H(t.length)?f(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return a(t),f(t<0?0:0|y(t))}function l(t){const e=t.length<0?0:0|y(t.length),r=f(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function p(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,u.prototype),n}function y(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function g(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Z(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(t).length;default:if(o)return n?-1:q(t).length;e=(""+e).toLowerCase(),o=!0}}function d(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return O(this,e,r);case"ascii":return T(this,e,r);case"latin1":case"binary":return k(this,e,r);case"base64":return U(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function b(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),H(r=+r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=u.from(e,n)),u.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,o){let i,s=1,f=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,f/=2,u/=2,r/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let n=-1;for(i=r;i<f;i++)if(h(t,i)===h(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===u)return n*s}else-1!==n&&(i-=i-n),n=-1}else for(r+u>f&&(r=f-u),i=r;i>=0;i--){let r=!0;for(let n=0;n<u;n++)if(h(t,i+n)!==h(e,n)){r=!1;break}if(r)return i}return-1}function v(t,e,r,n){r=Number(r)||0;const o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=e.length;let s;for(n>i/2&&(n=i/2),s=0;s<n;++s){const n=parseInt(e.substr(2*s,2),16);if(H(n))return s;t[r+s]=n}return s}function B(t,e,r,n){return J(q(e,t.length-r),t,r,n)}function E(t,e,r,n){return J(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return J(W(e),t,r,n)}function I(t,e,r,n){return J(function(t,e){let r,n,o;const i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(e,t.length-r),t,r,n)}function U(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function O(t,e,r){r=Math.min(t.length,r);const n=[];let o=e;for(;o<r;){const e=t[o];let i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=r){let r,n,f,u;switch(s){case 1:e<128&&(i=e);break;case 2:r=t[o+1],128==(192&r)&&(u=(31&e)<<6|63&r,u>127&&(i=u));break;case 3:r=t[o+1],n=t[o+2],128==(192&r)&&128==(192&n)&&(u=(15&e)<<12|(63&r)<<6|63&n,u>2047&&(u<55296||u>57343)&&(i=u));break;case 4:r=t[o+1],n=t[o+2],f=t[o+3],128==(192&r)&&128==(192&n)&&128==(192&f)&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&f,u>65535&&u<1114112&&(i=u))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(t){const e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=R));return r}(n)}u.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,e,r){return h(t,e,r)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,e,r){return function(t,e,r){return a(t),t<=0?f(t):void 0!==e?"string"==typeof r?f(t).fill(e,r):f(t).fill(e):f(t)}(t,e,r)},u.allocUnsafe=function(t){return c(t)},u.allocUnsafeSlow=function(t){return c(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,e){if(Z(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),Z(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=u.allocUnsafe(e);let o=0;for(r=0;r<t.length;++r){let e=t[r];if(Z(e,Uint8Array))o+e.length>n.length?(u.isBuffer(e)||(e=u.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else{if(!u.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,o)}o+=e.length}return n},u.byteLength=g,u.prototype._isBuffer=!0,u.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},u.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},u.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},u.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?O(this,0,t):d.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){let t="";const r=e.IS;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},i&&(u.prototype[i]=u.prototype.inspect),u.prototype.compare=function(t,e,r,n,o){if(Z(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(this===t)return 0;let i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(e>>>=0);const f=Math.min(i,s),h=this.slice(n,o),a=t.slice(e,r);for(let u=0;u<f;++u)if(h[u]!==a[u]){i=h[u],s=a[u];break}return i<s?-1:s<i?1:0},u.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},u.prototype.indexOf=function(t,e,r){return b(this,t,e,r,!0)},u.prototype.lastIndexOf=function(t,e,r){return b(this,t,e,r,!1)},u.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return v(this,t,e,r);case"utf8":case"utf-8":return B(this,t,e,r);case"ascii":case"latin1":case"binary":return E(this,t,e,r);case"base64":return A(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const R=4096;function T(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function k(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function L(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let i=e;i<r;++i)o+=K[t[i]];return o}function _(t,e,r){const n=t.slice(e,r);let o="";for(let i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function S(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function C(t,e,r,n,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function x(t,e,r,n,o){z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function N(t,e,r,n,o){z(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function P(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function $(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function M(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,8),o.write(t,e,r,n,52,8),r+8}u.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,u.prototype),n},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||S(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||S(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||S(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||S(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||S(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readBigUInt64LE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),u.prototype.readBigUInt64BE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)})),u.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},u.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||S(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return t>>>=0,e||S(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||S(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(t,e){t>>>=0,e||S(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||S(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||S(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readBigInt64LE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),u.prototype.readBigInt64BE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||Y(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),u.prototype.readFloatLE=function(t,e){return t>>>=0,e||S(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||S(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||S(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||S(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){C(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){C(this,t,e,r,Math.pow(2,8*r)-1,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigUInt64LE=Q((function(t,e=0){return x(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeBigUInt64BE=Q((function(t,e=0){return N(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);C(this,t,e,r,n-1,-n)}let o=0,i=1,s=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i|0)-s&255;return e+r},u.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);C(this,t,e,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i|0)-s&255;return e+r},u.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||C(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigInt64LE=Q((function(t,e=0){return x(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeBigInt64BE=Q((function(t,e=0){return N(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeFloatLE=function(t,e,r){return $(this,t,e,!0,r)},u.prototype.writeFloatBE=function(t,e,r){return $(this,t,e,!1,r)},u.prototype.writeDoubleLE=function(t,e,r){return M(this,t,e,!0,r)},u.prototype.writeDoubleBE=function(t,e,r){return M(this,t,e,!1,r)},u.prototype.copy=function(t,e,r,n){if(!u.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},u.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{const i=u.isBuffer(t)?t:u.from(t,n),s=i.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%s]}return this};const j={};function D(t,e,r){j[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function F(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function z(t,e,r,n,o,i){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new j.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,r){G(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||Y(e,t.length-(r+1))}(n,o,i)}function G(t,e){if("number"!=typeof t)throw new j.ERR_INVALID_ARG_TYPE(e,"number",t)}function Y(t,e,r){if(Math.floor(t)!==t)throw G(t,r),new j.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new j.ERR_BUFFER_OUT_OF_BOUNDS;throw new j.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=F(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=F(o)),o+="n"),n+=` It must be ${e}. Received ${o}`,n}),RangeError);const V=/[^+/0-9A-Za-z-_]/g;function q(t,e){let r;e=e||1/0;const n=t.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function W(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(V,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function J(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function Z(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function H(t){return t!=t}const K=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();function Q(t){return"undefined"==typeof BigInt?X:t}function X(){throw new Error("BigInt not supported")}},251:(t,e)=>{e.read=function(t,e,r,n,o){var i,s,f=8*o-n-1,u=(1<<f)-1,h=u>>1,a=-7,c=r?o-1:0,l=r?-1:1,p=t[e+c];for(c+=l,i=p&(1<<-a)-1,p>>=-a,a+=f;a>0;i=256*i+t[e+c],c+=l,a-=8);for(s=i&(1<<-a)-1,i>>=-a,a+=n;a>0;s=256*s+t[e+c],c+=l,a-=8);if(0===i)i=1-h;else{if(i===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),i-=h}return(p?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,f,u,h=8*i-o-1,a=(1<<h)-1,c=a>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,s=a):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+c>=1?l/u:l*Math.pow(2,1-c))*u>=2&&(s++,u/=2),s+c>=a?(f=0,s=a):s+c>=1?(f=(e*u-1)*Math.pow(2,o),s+=c):(f=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[r+p]=255&f,p+=y,f/=256,o-=8);for(s=s<<o|f,h+=o;h>0;t[r+p]=255&s,p+=y,s/=256,h-=8);t[r+p-y]|=128*g}},68382:(t,e,r)=>{"use strict";r.d(e,{Ay:()=>y,Gs:()=>s});var n=r(61258);const o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i=r(74892),s={Prism:n.A,theme:o};function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},u.apply(this,arguments)}var h=/\r\n|\r|\n/,a=function(t){0===t.length?t.push({types:["plain"],content:"\n",empty:!0}):1===t.length&&""===t[0].content&&(t[0].content="\n",t[0].empty=!0)},c=function(t,e){var r=t.length;return r>0&&t[r-1]===e?t:t.concat(e)};function l(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(r[n]=t[n]);return r}var p=function(t){function e(){for(var e=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];t.apply(this,r),f(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var r=t.theme?function(t,e){var r=t.plain,n=Object.create(null),o=t.styles.reduce((function(t,r){var n=r.languages,o=r.style;return n&&!n.includes(e)||r.types.forEach((function(e){var r=u({},t[e],o);t[e]=r})),t}),n);return o.root=r,o.plain=u({},r,{backgroundColor:null}),o}(t.theme,t.language):void 0;return e.themeDict=r})),f(this,"getLineProps",(function(t){var r=t.key,n=t.className,o=t.style,i=u({},l(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=e.getThemeDict(e.props);return void 0!==s&&(i.style=s.plain),void 0!==o&&(i.style=void 0!==i.style?u({},i.style,o):o),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i})),f(this,"getStyleForToken",(function(t){var r=t.types,n=t.empty,o=r.length,i=e.getThemeDict(e.props);if(void 0!==i){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return i[r[0]];var s=n?{display:"inline-block"}:{},f=r.map((function(t){return i[t]}));return Object.assign.apply(Object,[s].concat(f))}})),f(this,"getTokenProps",(function(t){var r=t.key,n=t.className,o=t.style,i=t.token,s=u({},l(t,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:e.getStyleForToken(i),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?u({},s.style,o):o),void 0!==r&&(s.key=r),n&&(s.className+=" "+n),s})),f(this,"tokenize",(function(t,e,r,n){var o={code:e,grammar:r,language:n,tokens:[]};t.hooks.run("before-tokenize",o);var i=o.tokens=t.tokenize(o.code,o.grammar,o.language);return t.hooks.run("after-tokenize",o),i}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,r=t.language,n=t.code,o=t.children,i=this.getThemeDict(this.props),s=e.languages[r];return o({tokens:function(t){for(var e=[[]],r=[t],n=[0],o=[t.length],i=0,s=0,f=[],u=[f];s>-1;){for(;(i=n[s]++)<o[s];){var l=void 0,p=e[s],y=r[s][i];if("string"==typeof y?(p=s>0?p:["plain"],l=y):(p=c(p,y.type),y.alias&&(p=c(p,y.alias)),l=y.content),"string"==typeof l){var g=l.split(h),d=g.length;f.push({types:p,content:g[0]});for(var w=1;w<d;w++)a(f),u.push(f=[]),f.push({types:p,content:g[w]})}else s++,e.push(p),r.push(l),n.push(0),o.push(l.length)}s--,e.pop(),r.pop(),n.pop(),o.pop()}return a(f),u}(void 0!==s?this.tokenize(e,n,s,r):[n]),className:"prism-code language-"+r,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(i.Component);const y=p}}]);