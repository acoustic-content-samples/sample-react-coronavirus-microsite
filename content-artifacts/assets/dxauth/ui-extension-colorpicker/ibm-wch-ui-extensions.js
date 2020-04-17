!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.wchUIExt=n():e.wchUIExt=n()}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){(function(n){var t={eventMap:{}};const r=["validate","contentUpdate"];var o={elementJSON:null,definition:null,contentMetadata:null,tenantConfig:null,user:null,locale:null,content:null};function i(){return new Promise((e,t)=>{o.elementJSON?e(o.elementJSON):n.send(window.parent,"getValue",{}).then(function(n){console.log("getValue returned",n),n.data&&(o.elementJSON=n.data),e(o.elementJSON)}).catch(function(e){console.error(e),t(e)})})}function a(e){return o.elementJSON=e,n.send(window.parent,"updateValue",{value:e})}function u(){return new Promise((e,n)=>{e({})})}n.on("valueValidate",e=>t.eventMap.validate&&t.eventMap.validate.apply(null)),n.on("contentUpdate",e=>(o.content=e.data,t.eventMap.contentUpdate&&t.eventMap.contentUpdate.apply(null))),window.parent==window?(console.error("WCH extension only works inside an iframe."),t.getElement=u,t.getElements=u,t.getContent=u,t.getDefinition=u,t.getContentMetadata=u,t.getTenantConfig=u,t.getUser=u,t.getCurrentLocale=u,t.setElement=function(){},t.setElements=function(){},t.requestResizeFrame=function(){},t.setValid=function(){},t.on=function(){}):(t.getElement=i,t.getElements=function(){return i()},t.setElement=a,t.setElements=function(e){return a(e)},t.requestResizeFrame=function(e){return n.send(window.parent,"updateHeight",{height:e})},t.getContent=function(){return new Promise((e,t)=>{o.content?e(o.content):n.send(window.parent,"getContent",{}).then(function(n){console.log("getContent returned",n),n.data&&(o.content=n.data),e(o.content)}).catch(function(e){console.error(e),t(e)})})},t.getDefinition=function(){return new Promise((e,t)=>{o.definition?e(o.definition):n.send(window.parent,"getDefinition",{}).then(function(n){console.log("getDefinition returned",n),n.data&&(o.definition=n.data),e(o.definition)}).catch(function(e){console.error(e),t(e)})})},t.getContentMetadata=function(){return new Promise((e,t)=>{o.contentMetadata?e(o.contentMetadata):n.send(window.parent,"getContentMetadata",{}).then(function(n){console.log("getContentMetadata returned",n),n.data&&(o.contentMetadata=n.data),e(o.contentMetadata)}).catch(function(e){console.error(e),t(e)})})},t.getTenantConfig=function(){return new Promise((e,t)=>{o.tenantConfig?e(o.tenantConfig):n.send(window.parent,"getTenantConfig",{}).then(function(n){console.log("getTenantConfig returned",n),n.data&&(o.tenantConfig=n.data),e(o.tenantConfig)}).catch(function(e){console.error(e),t(e)})})},t.getUser=function(){return new Promise((e,t)=>{o.user?e(o.user):n.send(window.parent,"getUser",{}).then(function(n){console.log("getUser returned",n),n.data&&(o.user=n.data),e(o.user)}).catch(function(e){console.error(e),t(e)})})},t.getCurrentLocale=function(){return new Promise((e,t)=>{o.locale?e(o.locale):n.send(window.parent,"getCurrentLocale",{}).then(function(n){console.log("getCurrentLocale returned",n),n.data&&(o.locale=n.data),e(o.locale)}).catch(function(e){console.error(e),t(e)})})},t.setValid=function(e,t,r){return n.send(window.parent,"updateValidStatus",{valid:e,showValidateMessage:null==t||t,customMessage:r})},t.on=function(e,n){console.log(e),console.log(n),null!=e&&r.includes(e)&&null!=n&&"function"==typeof n&&(console.log(n),t.eventMap[e]=n)}),e.exports=t}).call(this,t(1))},function(e,n,t){e.exports=t(2),e.exports.default=e.exports},function(e,n,t){"undefined"!=typeof self&&self,e.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./src/index.js")}({"./node_modules/cross-domain-utils/src/index.js":function(e,n,t){"use strict";var r=t("./node_modules/cross-domain-utils/src/utils.js");t.d(n,"getActualDomain",function(){return r.a}),t.d(n,"getAncestor",function(){return r.b}),t.d(n,"getDomain",function(){return r.c}),t.d(n,"getUserAgent",function(){return r.d}),t.d(n,"isActuallySameDomain",function(){return r.e}),t.d(n,"isAncestor",function(){return r.f}),t.d(n,"isIframe",function(){return r.g}),t.d(n,"isPopup",function(){return r.h}),t.d(n,"isWindow",function(){return r.i}),t.d(n,"isWindowClosed",function(){return r.j}),t.d(n,"matchDomain",function(){return r.k}),t.d(n,"stringifyDomainPattern",function(){return r.l});var o=t("./node_modules/cross-domain-utils/src/types.js");t.n(o)},"./node_modules/cross-domain-utils/src/types.js":function(e,n){},"./node_modules/cross-domain-utils/src/utils.js":function(e,n,t){"use strict";function r(e){return"[object RegExp]"===Object.prototype.toString.call(e)}n.a=f,n.c=d,n.e=l,n.j=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{if(e===window)return!1}catch(e){return!0}try{if(!e)return!0}catch(e){return!0}try{if(e.closed)return!0}catch(e){return!e||e.message!==i}if(n&&function(e){if(!l(e))return!1;try{if(e===window)return!0;if(a(e)&&c(e))return!0;if(d(window)===d(e))return!0}catch(e){}return!1}(e))try{if(e.mockclosed)return!0}catch(e){}try{if(!e.parent||!e.top)return!0}catch(e){}var t=function(e,n){for(var t=0;t<e.length;t++)try{if(e[t]===n)return t}catch(e){}return-1}(h,e);if(-1!==t){var r=m[t];if(r&&function(e){if(!e.contentWindow)return!0;if(!e.parentNode)return!0;var n=e.ownerDocument;return!(!n||!n.body||n.body.contains(e))}(r))return!0}return!1},n.d=function(e){return(e=e||window).navigator.mockUserAgent||e.navigator.userAgent},n.b=y,n.f=function(e,n){var t=y(n);if(t)return t===e;if(n===e)return!1;if(function(e){if(e){try{if(e.top)return e.top}catch(e){}if(u(e)===e)return e;try{if(w(window,e)&&window.top)return window.top}catch(e){}try{if(w(e,window)&&window.top)return window.top}catch(e){}for(var n=0,t=function e(n){for(var t=[],r=0,o=p(n),i=null==o?0:o.length;r<i;r++){var a=o[r];t.push(a);for(var u=0,s=e(a),c=null==s?0:s.length;u<c;u++){var f=s[u];t.push(f)}}return t}(e),r=null==t?0:t.length;n<r;n++){var o=t[n];try{if(o.top)return o.top}catch(e){}if(u(o)===o)return o}}}(n)===n)return!1;for(var r=0,o=p(e),i=null==o?0:o.length;r<i;r++)if(o[r]===n)return!0;return!1},n.h=function(){return Boolean(s(window))},n.g=function(){return Boolean(u(window))},n.k=function e(n,t){if("string"==typeof n){if("string"==typeof t)return n===o.WILDCARD||t===n;if(r(t))return!1;if(Array.isArray(t))return!1}return r(n)?r(t)?n.toString()===t.toString():!Array.isArray(t)&&Boolean(t.match(n)):!!Array.isArray(n)&&(Array.isArray(t)?JSON.stringify(n)===JSON.stringify(t):!r(t)&&n.some(function(n){return e(n,t)}))},n.l=function(e){return Array.isArray(e)?"("+e.join(" | ")+")":r(e)?"RegExp("+e.toString():e.toString()},n.i=function(e){try{if(e===window)return!0}catch(e){if(e&&e.message===i)return!0}try{if("[object Window]"===Object.prototype.toString.call(e))return!0}catch(e){if(e&&e.message===i)return!0}try{if(window.Window&&e instanceof window.Window)return!0}catch(e){if(e&&e.message===i)return!0}try{if(e&&e.self===e)return!0}catch(e){if(e&&e.message===i)return!0}try{if(e&&e.parent===e)return!0}catch(e){if(e&&e.message===i)return!0}try{if(e&&e.top===e)return!0}catch(e){if(e&&e.message===i)return!0}try{e&&e.__cross_domain_utils_window_check__}catch(e){return!0}return!1};var o={MOCK_PROTOCOL:"mock:",FILE_PROTOCOL:"file:",ABOUT_PROTOCOL:"about:",WILDCARD:"*"},i="Call was rejected by callee.\r\n";function a(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window).location.protocol===o.ABOUT_PROTOCOL}function u(e){if(e)try{if(e.parent&&e.parent!==e)return e.parent}catch(e){}}function s(e){if(e&&!u(e))try{return e.opener}catch(e){}}function c(e){try{return e&&e.location&&e.location.href,!0}catch(e){}return!1}function f(e){var n=(e=e||window).location;if(!n)throw new Error("Can not read window location");var t=n.protocol;if(!t)throw new Error("Can not read window protocol");if(t===o.FILE_PROTOCOL)return o.FILE_PROTOCOL+"//";if(t===o.ABOUT_PROTOCOL){var r=u(e);return r&&c(r)?f(r):o.ABOUT_PROTOCOL+"//"}var i=n.host;if(!i)throw new Error("Can not read window host");return t+"//"+i}function d(e){var n=f(e=e||window);return n&&e.mockDomain&&0===e.mockDomain.indexOf(o.MOCK_PROTOCOL)?e.mockDomain:n}function l(e){try{if(e===window)return!0}catch(e){}try{var n=Object.getOwnPropertyDescriptor(e,"location");if(n&&!1===n.enumerable)return!1}catch(e){}try{if(a(e)&&c(e))return!0}catch(e){}try{if(f(e)===f(window))return!0}catch(e){}return!1}function w(e,n){if(!e||!n)return!1;var t=u(n);return t?t===e:-1!==function(e){var n=[];try{for(;e.parent!==e;)n.push(e.parent),e=e.parent}catch(e){}return n}(n).indexOf(e)}function p(e){var n=[],t=void 0;try{t=e.frames}catch(n){t=e}var r=void 0;try{r=t.length}catch(e){}if(0===r)return n;if(r){for(var o=0;o<r;o++){var i=void 0;try{i=t[o]}catch(e){continue}n.push(i)}return n}for(var a=0;a<100;a++){var u=void 0;try{u=t[a]}catch(e){return n}if(!u)return n;n.push(u)}return n}var h=[],m=[];function y(e){return s(e=e||window)||u(e)||void 0}},"./src/index.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d({},"WeakMap",function(){return c});var r={};t.d(r,"cleanUpWindow",function(){return te}),t.d(r,"Promise",function(){return g}),t.d(r,"bridge",function(){return re}),t.d(r,"init",function(){return oe}),t.d(r,"parent",function(){return ne}),t.d(r,"send",function(){return Y}),t.d(r,"request",function(){return J}),t.d(r,"sendToParent",function(){return K}),t.d(r,"client",function(){return Z}),t.d(r,"on",function(){return Q}),t.d(r,"listen",function(){return V}),t.d(r,"once",function(){return X}),t.d(r,"listener",function(){return $}),t.d(r,"CONFIG",function(){return l}),t.d(r,"CONSTANTS",function(){return f}),t.d(r,"disable",function(){return ee});var o=t("./node_modules/cross-domain-utils/src/index.js");function i(e,n){for(var t=0;t<e.length;t++)try{if(e[t]===n)return t}catch(e){}return-1}var a,u=Object.defineProperty,s=Date.now()%1e9,c=function(){function e(){if(function(n,t){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this),s+=1,this.name="__weakmap_"+(1e9*Math.random()>>>0)+"__"+s,function(){if(!window.WeakMap)return!1;if(!window.Object.freeze)return!1;try{var e=new window.WeakMap,n={};return window.Object.freeze(n),e.set(n,"__testvalue__"),"__testvalue__"===e.get(n)}catch(e){return!1}}())try{this.weakmap=new window.WeakMap}catch(e){}this.keys=[],this.values=[]}return e.prototype._cleanupClosedWindows=function(){for(var e=this.weakmap,n=this.keys,t=0;t<n.length;t++){var r=n[t];if(Object(o.isWindow)(r)&&Object(o.isWindowClosed)(r)){if(e)try{e.delete(r)}catch(e){}n.splice(t,1),this.values.splice(t,1),t-=1}}},e.prototype.isSafeToReadWrite=function(e){if(Object(o.isWindow)(e))return!1;try{e&&e.self,e&&e[this.name]}catch(e){return!1}return!0},e.prototype.set=function(e,n){if(!e)throw new Error("WeakMap expected key");var t=this.weakmap;if(t)try{t.set(e,n)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e)){var r=this.name,o=e[r];o&&o[0]===e?o[1]=n:u(e,r,{value:[e,n],writable:!0})}else{this._cleanupClosedWindows();var a=this.keys,s=this.values,c=i(a,e);-1===c?(a.push(e),s.push(n)):s[c]=n}},e.prototype.get=function(e){if(!e)throw new Error("WeakMap expected key");var n=this.weakmap;if(n)try{if(n.has(e))return n.get(e)}catch(e){delete this.weakmap}if(!this.isSafeToReadWrite(e)){this._cleanupClosedWindows();var t=i(this.keys,e);if(-1===t)return;return this.values[t]}var r=e[this.name];if(r&&r[0]===e)return r[1]},e.prototype.delete=function(e){if(!e)throw new Error("WeakMap expected key");var n=this.weakmap;if(n)try{n.delete(e)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e)){var t=e[this.name];t&&t[0]===e&&(t[0]=t[1]=void 0)}else{this._cleanupClosedWindows();var r=this.keys,o=i(r,e);-1!==o&&(r.splice(o,1),this.values.splice(o,1))}},e.prototype.has=function(e){if(!e)throw new Error("WeakMap expected key");var n=this.weakmap;if(n)try{return n.has(e)}catch(e){delete this.weakmap}if(this.isSafeToReadWrite(e)){var t=e[this.name];return!(!t||t[0]!==e)}return this._cleanupClosedWindows(),-1!==i(this.keys,e)},e}(),f={POST_MESSAGE_TYPE:{REQUEST:"postrobot_message_request",RESPONSE:"postrobot_message_response",ACK:"postrobot_message_ack"},POST_MESSAGE_ACK:{SUCCESS:"success",ERROR:"error"},POST_MESSAGE_NAMES:{METHOD:"postrobot_method",HELLO:"postrobot_ready",OPEN_TUNNEL:"postrobot_open_tunnel"},WINDOW_TYPES:{FULLPAGE:"fullpage",POPUP:"popup",IFRAME:"iframe"},WINDOW_PROPS:{POSTROBOT:"__postRobot__"},SERIALIZATION_TYPES:{METHOD:"postrobot_method",ERROR:"postrobot_error",PROMISE:"postrobot_promise",ZALGO_PROMISE:"postrobot_zalgo_promise",REGEX:"regex"},SEND_STRATEGIES:{POST_MESSAGE:"postrobot_post_message",BRIDGE:"postrobot_bridge",GLOBAL:"postrobot_global"},MOCK_PROTOCOL:"mock:",FILE_PROTOCOL:"file:",BRIDGE_NAME_PREFIX:"__postrobot_bridge__",POSTROBOT_PROXY:"__postrobot_proxy__",WILDCARD:"*"},d={METHOD:"postrobot_method",HELLO:"postrobot_hello",OPEN_TUNNEL:"postrobot_open_tunnel"},l=(Object.keys(d).map(function(e){return d[e]}),{ALLOW_POSTMESSAGE_POPUP:!("__ALLOW_POSTMESSAGE_POPUP__"in window)||window.__ALLOW_POSTMESSAGE_POPUP__,BRIDGE_TIMEOUT:5e3,CHILD_WINDOW_TIMEOUT:5e3,ACK_TIMEOUT:-1!==window.navigator.userAgent.match(/MSIE/i)?2e3:1e3,RES_TIMEOUT:-1,ALLOWED_POST_MESSAGE_METHODS:(a={},a[f.SEND_STRATEGIES.POST_MESSAGE]=!0,a[f.SEND_STRATEGIES.BRIDGE]=!0,a[f.SEND_STRATEGIES.GLOBAL]=!0,a),ALLOW_SAME_ORIGIN:!1});0===window.location.href.indexOf(f.FILE_PROTOCOL)&&(l.ALLOW_POSTMESSAGE_POPUP=!0);var w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(n>=3)return"stringifyError stack overflow";try{if(!e)return"<unknown error: "+Object.prototype.toString.call(e)+">";if("string"==typeof e)return e;if(e instanceof Error){var t=e&&e.stack,r=e&&e.message;if(t&&r)return-1!==t.indexOf(r)?t:r+"\n"+t;if(t)return t;if(r)return r}return"function"==typeof e.toString?e.toString():Object.prototype.toString.call(e)}catch(e){return"Error while stringifying error: "+p(e,n+1)}}var h=function(e){if(!e)return e;var n=!1;return function(){if(!n)return n=!0,e.apply(this,arguments)}};function m(){}function y(){var e="0123456789abcdef";return"xxxxxxxxxx".replace(/./g,function(){return e.charAt(Math.floor(Math.random()*e.length))})}function _(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(t>=100)throw new Error("Self-referential object passed, or object contained too many layers");var r=void 0;if("object"!==(void 0===e?"undefined":w(e))||null===e||Array.isArray(e)){if(!Array.isArray(e))throw new TypeError("Invalid type: "+(void 0===e?"undefined":w(e)));r=[]}else r={};return function(e,n){Array.isArray(e)?function(e,n){for(var t=0;t<e.length;t++)n(e[t],t)}(e,n):"object"===(void 0===e?"undefined":w(e))&&null!==e&&function(e,n){for(var t in e)e.hasOwnProperty(t)&&n(e[t],t)}(e,n)}(e,function(e,o){var i=n(e,o);void 0!==i?r[o]=i:"object"===(void 0===e?"undefined":w(e))&&null!==e?r[o]=_(e,n,t+1):r[o]=e}),r}function E(e){return"[object RegExp]"===Object.prototype.toString.call(e)}function O(e){try{if(!e)return!1;if("undefined"!=typeof Promise&&e instanceof Promise)return!0;if("undefined"!=typeof window&&window.Window&&e instanceof window.Window)return!1;if("undefined"!=typeof window&&window.constructor&&e instanceof window.constructor)return!1;var n={}.toString;if(n){var t=n.call(e);if("[object Window]"===t||"[object global]"===t||"[object DOMWindow]"===t)return!1}if("function"==typeof e.then)return!0}catch(e){return!1}return!1}function v(){var e=void 0;if("undefined"!=typeof window)e=window;else{if("undefined"==typeof window)throw new TypeError("Can not find global");e=window}var n=e.__zalgopromise__=e.__zalgopromise__||{};return n.flushPromises=n.flushPromises||[],n.activeCount=n.activeCount||0,n.possiblyUnhandledPromiseHandlers=n.possiblyUnhandledPromiseHandlers||[],n.dispatchedErrors=n.dispatchedErrors||[],n}var g=function(){function e(n){var t=this;if(function(n,t){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolved=!1,this.rejected=!1,this.errorHandled=!1,this.handlers=[],n){var r=void 0,o=void 0,i=!1,a=!1,u=!1;try{n(function(e){u?t.resolve(e):(i=!0,r=e)},function(e){u?t.reject(e):(a=!0,o=e)})}catch(e){return void this.reject(e)}u=!0,i?this.resolve(r):a&&this.reject(o)}}return e.prototype.resolve=function(e){if(this.resolved||this.rejected)return this;if(O(e))throw new Error("Can not resolve promise with another promise");return this.resolved=!0,this.value=e,this.dispatch(),this},e.prototype.reject=function(e){var n=this;if(this.resolved||this.rejected)return this;if(O(e))throw new Error("Can not reject promise with another promise");if(!e){var t=e&&"function"==typeof e.toString?e.toString():Object.prototype.toString.call(e);e=new Error("Expected reject to be called with Error, got "+t)}return this.rejected=!0,this.error=e,this.errorHandled||setTimeout(function(){n.errorHandled||function(e,n){if(-1===v().dispatchedErrors.indexOf(e)){v().dispatchedErrors.push(e),setTimeout(function(){throw e},1);for(var t=0;t<v().possiblyUnhandledPromiseHandlers.length;t++)v().possiblyUnhandledPromiseHandlers[t](e,n)}}(e,n)},1),this.dispatch(),this},e.prototype.asyncReject=function(e){this.errorHandled=!0,this.reject(e)},e.prototype.dispatch=function(){var n=this,t=this.dispatching,r=this.resolved,o=this.rejected,i=this.handlers;if(!t&&(r||o)){this.dispatching=!0,v().activeCount+=1;for(var a=function(t){var a=i[t],u=a.onSuccess,s=a.onError,c=a.promise,f=void 0;if(r)try{f=u?u(n.value):n.value}catch(e){return c.reject(e),"continue"}else if(o){if(!s)return c.reject(n.error),"continue";try{f=s(n.error)}catch(e){return c.reject(e),"continue"}}f instanceof e&&(f.resolved||f.rejected)?(f.resolved?c.resolve(f.value):c.reject(f.error),f.errorHandled=!0):O(f)?f instanceof e&&(f.resolved||f.rejected)?f.resolved?c.resolve(f.value):c.reject(f.error):f.then(function(e){c.resolve(e)},function(e){c.reject(e)}):c.resolve(f)},u=0;u<i.length;u++)a(u);i.length=0,this.dispatching=!1,v().activeCount-=1,0===v().activeCount&&e.flushQueue()}},e.prototype.then=function(n,t){if(n&&"function"!=typeof n&&!n.call)throw new Error("Promise.then expected a function for success handler");if(t&&"function"!=typeof t&&!t.call)throw new Error("Promise.then expected a function for error handler");var r=new e;return this.handlers.push({promise:r,onSuccess:n,onError:t}),this.errorHandled=!0,this.dispatch(),r},e.prototype.catch=function(e){return this.then(void 0,e)},e.prototype.finally=function(n){if(n&&"function"!=typeof n&&!n.call)throw new Error("Promise.finally expected a function");return this.then(function(t){return e.try(n).then(function(){return t})},function(t){return e.try(n).then(function(){throw t})})},e.prototype.timeout=function(e,n){var t=this;if(this.resolved||this.rejected)return this;var r=setTimeout(function(){t.resolved||t.rejected||t.reject(n||new Error("Promise timed out after "+e+"ms"))},e);return this.then(function(e){return clearTimeout(r),e})},e.prototype.toPromise=function(){if("undefined"==typeof Promise)throw new TypeError("Could not find Promise");return Promise.resolve(this)},e.resolve=function(n){return n instanceof e?n:O(n)?new e(function(e,t){return n.then(e,t)}):(new e).resolve(n)},e.reject=function(n){return(new e).reject(n)},e.all=function(n){var t=new e,r=n.length,o=[];if(!r)return t.resolve(o),t;for(var i=function(i){var a=n[i];if(a instanceof e){if(a.resolved)return o[i]=a.value,r-=1,"continue"}else if(!O(a))return o[i]=a,r-=1,"continue";e.resolve(a).then(function(e){o[i]=e,0==(r-=1)&&t.resolve(o)},function(e){t.reject(e)})},a=0;a<n.length;a++)i(a);return 0===r&&t.resolve(o),t},e.hash=function(n){var t={};return e.all(Object.keys(n).map(function(r){return e.resolve(n[r]).then(function(e){t[r]=e})})).then(function(){return t})},e.map=function(n,t){return e.all(n.map(t))},e.onPossiblyUnhandledException=function(e){return function(e){return v().possiblyUnhandledPromiseHandlers.push(e),{cancel:function(){v().possiblyUnhandledPromiseHandlers.splice(v().possiblyUnhandledPromiseHandlers.indexOf(e),1)}}}(e)},e.try=function(n,t,r){if(n&&"function"!=typeof n&&!n.call)throw new Error("Promise.try expected a function");var o=void 0;try{o=n.apply(t,r||[])}catch(n){return e.reject(n)}return e.resolve(o)},e.delay=function(n){return new e(function(e){setTimeout(e,n)})},e.isPromise=function(n){return!!(n&&n instanceof e)||O(n)},e.flush=function(){var n=new e;return v().flushPromises.push(n),0===v().activeCount&&e.flushQueue(),n},e.flushQueue=function(){var e=v().flushPromises;v().flushPromises=[];for(var n=0,t=null==e?0:e.length;n<t;n++)e[n].resolve()},e}(),S=window[f.WINDOW_PROPS.POSTROBOT]=window[f.WINDOW_PROPS.POSTROBOT]||{};S.registerSelf=function(){};var P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};S.methods=S.methods||new c;var b=h(function(){S.on(f.POST_MESSAGE_NAMES.METHOD,{origin:f.WILDCARD},function(e){var n=e.source,t=e.origin,r=e.data,i=S.methods.get(n);if(!i)throw new Error("Could not find any methods this window has privileges to call");var a=i[r.id];if(!a)throw new Error("Could not find method with id: "+r.id);if(!Object(o.matchDomain)(a.domain,t))throw new Error("Method domain "+a.domain+" does not match origin "+t);return g.try(function(){return a.method.apply({source:n,origin:t,data:r},r.args)}).then(function(e){return{result:e,id:r.id,name:r.name}})})});function T(e,n){return"object"===(void 0===e?"undefined":P(e))&&null!==e&&e.__type__===n}function A(e,n,t,r){var o=y(),i=S.methods.get(e);return i||(i={},S.methods.set(e,i)),i[o]={domain:n,method:t},{__type__:f.SERIALIZATION_TYPES.METHOD,__id__:o,__name__:r}}function R(e,n,t){function r(){var r=Array.prototype.slice.call(arguments);return S.send(e,f.POST_MESSAGE_NAMES.METHOD,{id:t.__id__,name:t.__name__,args:r},{domain:n,timeout:-1}).then(function(e){return e.data.result},function(e){throw e})}return r.__name__=t.__name__,r.__xdomain__=!0,r.source=e,r.origin=n,r}function j(e,n,t){return new g(function(r,o){return R(e,n,t.__then__)(r,o)})}function C(e){return S.send(e,f.POST_MESSAGE_NAMES.HELLO,{},{domain:f.WILDCARD,timeout:-1}).then(function(e){return{origin:e.origin}})}S.readyPromises=S.readyPromises||new c;var I={};I[f.SEND_STRATEGIES.POST_MESSAGE]=function(e,n,t){(Array.isArray(t)?t:"string"==typeof t?[t]:[f.WILDCARD]).map(function(n){if(0===n.indexOf(f.MOCK_PROTOCOL)){if(window.location.protocol===f.FILE_PROTOCOL)return f.WILDCARD;if(!Object(o.isActuallySameDomain)(e))throw new Error("Attempting to send messsage to mock domain "+n+", but window is actually cross-domain");return Object(o.getActualDomain)(e)}return 0===n.indexOf(f.FILE_PROTOCOL)?f.WILDCARD:n}).forEach(function(t){return e.postMessage(n,t)})};var W=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};function D(e,n,t){return g.try(function(){var r;if(n=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=y(),i=Object(o.isPopup)()?f.WINDOW_TYPES.POPUP:Object(o.isIframe)()?f.WINDOW_TYPES.IFRAME:f.WINDOW_TYPES.FULLPAGE,a=Object(o.getDomain)(window);return W({},n,t,{sourceDomain:a,id:n.id||r,windowType:i})}(e,n,{data:function(e,t,r){return _({obj:n.data},function(n,r){return"function"==typeof n?A(e,t,n,r.toString()):n instanceof Error?(o=n,{__type__:f.SERIALIZATION_TYPES.ERROR,__message__:p(o),__code__:o.code}):window.Promise&&n instanceof window.Promise?function(e,n,t,r){return{__type__:f.SERIALIZATION_TYPES.PROMISE,__then__:A(e,n,function(e,n){return t.then(e,n)},r+".then")}}(e,t,n,r.toString()):g.isPromise(n)?function(e,n,t,r){return{__type__:f.SERIALIZATION_TYPES.ZALGO_PROMISE,__then__:A(e,n,function(e,n){return t.then(e,n)},r+".then")}}(e,t,n,r.toString()):E(n)?(i=n,{__type__:f.SERIALIZATION_TYPES.REGEX,__source__:i.source}):void 0;var o,i}).obj}(e,t),domain:t}),e===window&&!l.ALLOW_SAME_ORIGIN)throw new Error("Attemping to send message to self");if(Object(o.isWindowClosed)(e))throw new Error("Window is closed");var i=[],a=function(e,n,t){var r=void 0,o=void 0;try{if("{}"!==JSON.stringify({})&&(r=Object.prototype.toJSON,delete Object.prototype.toJSON),"{}"!==JSON.stringify({}))throw new Error("Can not correctly serialize JSON objects");if("[]"!==JSON.stringify([])&&(o=Array.prototype.toJSON,delete Array.prototype.toJSON),"[]"!==JSON.stringify([]))throw new Error("Can not correctly serialize JSON objects")}catch(e){throw new Error("Can not repair JSON.stringify: "+e.message)}var i=JSON.stringify.call(this,e,null,2);try{r&&(Object.prototype.toJSON=r),o&&(Array.prototype.toJSON=o)}catch(e){throw new Error("Can not repair JSON.stringify: "+e.message)}return i}(((r={})[f.WINDOW_PROPS.POSTROBOT]=n,r));return g.map(Object.keys(I),function(n){return g.try(function(){if(!l.ALLOWED_POST_MESSAGE_METHODS[n])throw new Error("Strategy disallowed: "+n);return I[n](e,a,t)}).then(function(){return i.push(n+": success"),!0},function(e){return i.push(n+": "+p(e)+"\n"),!1})}).then(function(e){var t=e.some(Boolean),r=n.type+" "+n.name+" "+(t?"success":"error")+":\n  - "+i.join("\n  - ")+"\n";if(!t)throw new Error(r)})})}S.responseListeners=S.responseListeners||{},S.requestListeners=S.requestListeners||{},S.WINDOW_WILDCARD=S.WINDOW_WILDCARD||new function(){},S.erroredResponseListeners=S.erroredResponseListeners||{};var L,M="__domain_regex__";function N(e){return S.responseListeners[e]}function x(e){delete S.responseListeners[e]}function k(e){return Boolean(S.erroredResponseListeners[e])}function U(e){var n=e.name,t=e.win,r=e.domain;if(t===f.WILDCARD&&(t=null),r===f.WILDCARD&&(r=null),!n)throw new Error("Name required to get request listener");var i=S.requestListeners[n];if(i)for(var a=0,u=[t,S.WINDOW_WILDCARD],s=null==u?0:u.length;a<s;a++){var c=u[a],d=c&&i.get(c);if(d){if(r&&"string"==typeof r){if(d[r])return d[r];if(d[M])for(var l=0,w=d[M],p=null==w?0:w.length;l<p;l++){var h=w[l],m=h.regex,y=h.listener;if(Object(o.matchDomain)(m,r))return y}}if(d[f.WILDCARD])return d[f.WILDCARD]}}}var G=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H=((L={})[f.POST_MESSAGE_TYPE.ACK]=function(e,n,t){if(!k(t.hash)){var r=N(t.hash);if(!r)throw new Error("No handler found for post message ack for message: "+t.name+" from "+n+" in "+window.location.protocol+"//"+window.location.host+window.location.pathname);if(!Object(o.matchDomain)(r.domain,n))throw new Error("Ack origin "+n+" does not match domain "+r.domain.toString());r.ack=!0}},L[f.POST_MESSAGE_TYPE.REQUEST]=function(e,n,t){var r=U({name:t.name,win:e,domain:n});function i(r){return t.fireAndForget||Object(o.isWindowClosed)(e)?g.resolve():D(e,G({target:t.originalSource,hash:t.hash,name:t.name},r),n)}return g.all([i({type:f.POST_MESSAGE_TYPE.ACK}),g.try(function(){if(!r)throw new Error("No handler found for post message: "+t.name+" from "+n+" in "+window.location.protocol+"//"+window.location.host+window.location.pathname);if(!Object(o.matchDomain)(r.domain,n))throw new Error("Request origin "+n+" does not match domain "+r.domain.toString());var i=t.data;return r.handler({source:e,origin:n,data:i})}).then(function(e){return i({type:f.POST_MESSAGE_TYPE.RESPONSE,ack:f.POST_MESSAGE_ACK.SUCCESS,data:e})},function(e){var n=p(e).replace(/^Error: /,""),t=e.code;return i({type:f.POST_MESSAGE_TYPE.RESPONSE,ack:f.POST_MESSAGE_ACK.ERROR,error:n,code:t})})]).then(m).catch(function(e){if(r&&r.handleError)return r.handleError(e);throw e})},L[f.POST_MESSAGE_TYPE.RESPONSE]=function(e,n,t){if(!k(t.hash)){var r=N(t.hash);if(!r)throw new Error("No handler found for post message response for message: "+t.name+" from "+n+" in "+window.location.protocol+"//"+window.location.host+window.location.pathname);if(!Object(o.matchDomain)(r.domain,n))throw new Error("Response origin "+n+" does not match domain "+Object(o.stringifyDomainPattern)(r.domain));if(x(t.hash),t.ack===f.POST_MESSAGE_ACK.ERROR){var i=new Error(t.error);return t.code&&(i.code=t.code),r.respond(i,null)}if(t.ack===f.POST_MESSAGE_ACK.SUCCESS){var a=t.data||t.response;return r.respond(null,{source:e,origin:n,data:a})}}},L),B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(!window||window.closed)throw new Error("Message recieved in closed window");try{if(!e.source)return}catch(e){return}var n=e.source,t=e.origin,r=function(e){var n,t=void 0;try{n=e,t=JSON.parse(n)}catch(e){return}if(t&&"object"===(void 0===t?"undefined":B(t))&&null!==t&&(t=t[f.WINDOW_PROPS.POSTROBOT])&&"object"===(void 0===t?"undefined":B(t))&&null!==t&&t.type&&"string"==typeof t.type&&H[t.type])return t}(e.data);if(r){if(!r.sourceDomain||"string"!=typeof r.sourceDomain)throw new Error("Expected message to have sourceDomain");0!==r.sourceDomain.indexOf(f.MOCK_PROTOCOL)&&0!==r.sourceDomain.indexOf(f.FILE_PROTOCOL)||(t=r.sourceDomain),-1===S.receivedMessages.indexOf(r.id)&&(S.receivedMessages.push(r.id),Object(o.isWindowClosed)(n)&&!r.fireAndForget||(r.data&&(r.data=function(e,n,t){return _({obj:r.data},function(t){if("object"===(void 0===t?"undefined":P(t))&&null!==t)return T(t,f.SERIALIZATION_TYPES.METHOD)?R(e,n,t):T(t,f.SERIALIZATION_TYPES.ERROR)?(r=t,o=new Error(r.__message__),r.__code__&&(o.code=r.__code__),o):T(t,f.SERIALIZATION_TYPES.PROMISE)?function(e,n,t){return window.Promise?new window.Promise(function(r,o){return R(e,n,t.__then__)(r,o)}):j(e,n,t)}(e,n,t):T(t,f.SERIALIZATION_TYPES.ZALGO_PROMISE)?j(e,n,t):T(t,f.SERIALIZATION_TYPES.REGEX)?function(e,n,t){return new RegExp(t.__source__)}(0,0,t):void 0;var r,o}).obj}(n,t)),H[r.type](n,t,r)))}}function F(e){try{e.source}catch(e){return}q({source:e.source||e.sourceElement,origin:e.origin||e.originalEvent&&e.originalEvent.origin,data:e.data})}function J(e){return g.try(function(){if(!e.name)throw new Error("Expected options.name");var n=e.name,t=void 0,r=void 0;if("string"==typeof e.window){var i=document.getElementById(e.window);if(!i)throw new Error("Expected options.window "+Object.prototype.toString.call(e.window)+" to be a valid element id");if("iframe"!==i.tagName.toLowerCase())throw new Error("Expected options.window "+Object.prototype.toString.call(e.window)+" to be an iframe");if(!i.contentWindow)throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");t=i.contentWindow}else if(e.window instanceof HTMLIFrameElement){if("iframe"!==e.window.tagName.toLowerCase())throw new Error("Expected options.window "+Object.prototype.toString.call(e.window)+" to be an iframe");if(e.window&&!e.window.contentWindow)throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");e.window&&e.window.contentWindow&&(t=e.window.contentWindow)}else t=e.window;if(!t)throw new Error("Expected options.window to be a window object, iframe, or iframe element id.");var a=t;r=e.domain||f.WILDCARD;var u=e.name+"_"+y();if(Object(o.isWindowClosed)(a))throw new Error("Target window is closed");var s=!1,c=S.requestPromises.get(a);c||(c=[],S.requestPromises.set(a,c));var d=g.try(function(){if(Object(o.isAncestor)(window,a))return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Window",r=S.readyPromises.get(e);return r||(r=new g,S.readyPromises.set(e,r),-1!==n&&setTimeout(function(){return r.reject(new Error(t+" did not load after "+n+"ms"))},n),r)}(a,e.timeout||l.CHILD_WINDOW_TIMEOUT)}).then(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).origin;if(E(r)&&!e)return C(a)}).then(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).origin;if(E(r)){if(!Object(o.matchDomain)(r,t))throw new Error("Remote window domain "+t+" does not match regex: "+r.toString());r=t}if("string"!=typeof r&&!Array.isArray(r))throw new TypeError("Expected domain to be a string or array");var i=r;return new g(function(t,r){var w=void 0;if(e.fireAndForget||function(e,n){S.responseListeners[e]=n}(u,w={name:n,window:a,domain:i,respond:function(e,n){e||(s=!0,c.splice(c.indexOf(d,1))),e?r(e):t(n)}}),D(a,{type:f.POST_MESSAGE_TYPE.REQUEST,hash:u,name:n,data:e.data,fireAndForget:e.fireAndForget},i).catch(r),e.fireAndForget)return t();var p=l.ACK_TIMEOUT,h=e.timeout||l.RES_TIMEOUT,m=100;setTimeout(function t(){if(!s){if(Object(o.isWindowClosed)(a))return w.ack?r(new Error("Window closed for "+n+" before response")):r(new Error("Window closed for "+n+" before ack"));if(p=Math.max(p-m,0),-1!==h&&(h=Math.max(h-m,0)),w.ack){if(-1===h)return;m=Math.min(h,2e3)}else{if(0===p)return r(new Error("No ack for postMessage "+n+" in "+Object(o.getDomain)()+" in "+l.ACK_TIMEOUT+"ms"));if(0===h)return r(new Error("No response for postMessage "+n+" in "+Object(o.getDomain)()+" in "+(e.timeout||l.RES_TIMEOUT)+"ms"))}setTimeout(t,m)}},m)})});return d.catch(function(){!function(e){S.erroredResponseListeners[e]=!0}(u),x(u)}),c.push(d),d})}function Y(e,n,t,r){return(r=r||{}).window=e,r.name=n,r.data=t,J(r)}function K(e,n,t){var r=Object(o.getAncestor)();return r?Y(r,e,n,t):new g(function(e,n){return n(new Error("Window does not have a parent"))})}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.window)throw new Error("Expected options.window");var n=e.window;return{send:function(t,r){return Y(n,t,r,e)}}}S.receivedMessages=S.receivedMessages||[],S.receiveMessage=q,S.requestPromises=S.requestPromises||new c,S.send=Y;var z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function V(e){if(!e.name)throw new Error("Expected options.name");if(!e.handler)throw new Error("Expected options.handler");var n,t=e.name,r=e.window,i=e.domain,a={handler:e.handler,handleError:e.errorHandler||function(e){throw e},window:r,domain:i||f.WILDCARD,name:t},u=function e(n,t){var r=n.name,o=n.win,i=n.domain;if(!r||"string"!=typeof r)throw new Error("Name required to add request listener");if(Array.isArray(o)){for(var a=[],u=0,s=o,d=null==s?0:s.length;u<d;u++){var l=s[u];a.push(e({name:r,domain:i,win:l},t))}return{cancel:function(){for(var e=0,n=null==a?0:a.length;e<n;e++)a[e].cancel()}}}if(Array.isArray(i)){for(var w=[],p=0,h=i,m=null==h?0:h.length;p<m;p++){var y=h[p];w.push(e({name:r,win:o,domain:y},t))}return{cancel:function(){for(var e=0,n=null==w?0:w.length;e<n;e++)w[e].cancel()}}}var _=U({name:r,win:o,domain:i});if(o&&o!==f.WILDCARD||(o=S.WINDOW_WILDCARD),i=i||f.WILDCARD,_)throw o&&i?new Error("Request listener already exists for "+r+" on domain "+i.toString()+" for "+(o===S.WINDOW_WILDCARD?"wildcard":"specified")+" window"):o?new Error("Request listener already exists for "+r+" for "+(o===S.WINDOW_WILDCARD?"wildcard":"specified")+" window"):i?new Error("Request listener already exists for "+r+" on domain "+i.toString()):new Error("Request listener already exists for "+r);var O=S.requestListeners,v=O[r];v||(v=new c,O[r]=v);var g=v.get(o);g||(g={},v.set(o,g));var P=i.toString(),b=g[M],T=void 0;return E(i)?(b||(b=[],g[M]=b),T={regex:i,listener:t},b.push(T)):g[P]=t,{cancel:function(){g&&(delete g[P],o&&0===Object.keys(g).length&&v.delete(o),T&&b.splice(b.indexOf(T,1)))}}}({name:t,win:r,domain:i},a);if(e.once){var s=a.handler;a.handler=h(function(){return u.cancel(),s.apply(this,arguments)})}if(a.window&&e.errorOnClose)var d=(n=void 0,n=setTimeout(function e(){n=setTimeout(e,50),function(){r&&"object"===(void 0===r?"undefined":z(r))&&Object(o.isWindowClosed)(r)&&(d.cancel(),a.handleError(new Error("Post message target window is closed")))}.call()},50),{cancel:function(){clearTimeout(n)}});return{cancel:function(){u.cancel()}}}function Q(e,n,t){return"function"==typeof n&&(t=n,n={}),(n=n||{}).name=e,n.handler=t||n.handler,V(n)}function X(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments[2];"function"==typeof n&&(t=n,n={}),n=n||{},t=t||n.handler;var r=n.errorHandler,o=new g(function(o,i){(n=n||{}).name=e,n.once=!0,n.handler=function(e){if(o(e),t)return t(e)},n.errorHandler=function(e){if(i(e),r)return r(e)}}),i=V(n);return o.cancel=i.cancel,o}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{on:function(n,t){return Q(n,e,t)}}}function ee(){delete window[f.WINDOW_PROPS.POSTROBOT],window.removeEventListener("message",F)}S.on=Q;var ne=Object(o.getAncestor)();function te(e){var n=S.requestPromises.get(e);if(n)for(var t=0,r=null==n?0:n.length;t<r;t++)n[t].reject(new Error("No response from window - cleaned up"));S.popupWindowsByWin&&S.popupWindowsByWin.delete(e),S.remoteWindows&&S.remoteWindows.delete(e),S.requestPromises.delete(e),S.methods.delete(e),S.readyPromises.delete(e)}var re=null;function oe(){var e,n;S.initialized||(n=F,(e=window).addEventListener?e.addEventListener("message",n):e.attachEvent("onmessage",n),function(){e=function(e){var n=e.source,t=e.origin,r=S.readyPromises.get(n)||new g;r.resolve({origin:t}),S.readyPromises.set(n,r)},S.on(f.POST_MESSAGE_NAMES.HELLO,{domain:f.WILDCARD},function(n){var t=n.source,r=n.origin;return e({source:t,origin:r})});var e,n=Object(o.getAncestor)();n&&C(n).catch(m)}(),b({on:Q,send:Y})),S.initialized=!0}oe(),t.d(n,"cleanUpWindow",function(){return te}),t.d(n,"Promise",function(){return g}),t.d(n,"bridge",function(){return re}),t.d(n,"init",function(){return oe}),t.d(n,"parent",function(){return ne}),t.d(n,"send",function(){return Y}),t.d(n,"request",function(){return J}),t.d(n,"sendToParent",function(){return K}),t.d(n,"client",function(){return Z}),t.d(n,"on",function(){return Q}),t.d(n,"listen",function(){return V}),t.d(n,"once",function(){return X}),t.d(n,"listener",function(){return $}),t.d(n,"CONFIG",function(){return l}),t.d(n,"CONSTANTS",function(){return f}),t.d(n,"disable",function(){return ee}),n.default=r}})}])});