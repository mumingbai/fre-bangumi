!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(1)),i=a(n(2));function a(e){return e&&e.__esModule?e:{default:e}}n(3);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={baseUrl:"https://www.chinko.cc",url:n.GetQueryString("url"),isShow:i.default.get("uqq")?"display:block":"display:none"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"GetQueryString",value:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}},{key:"render",value:function(){return o.default.h("div",{className:"bangumi"},o.default.h("header",null,o.default.h("div",{className:"wrap"},o.default.h("a",{href:this.state.baseUrl},o.default.h("span",{className:"logo"},o.default.h("span",{className:"title"},"ACG"),"zone player")),o.default.h("a",{href:this.state.baseUrl},o.default.h("li",null,"主站")))),o.default.h("div",{className:"player"},o.default.h("div",{className:"iframe",style:this.state.isShow},o.default.h("iframe",{src:"http://yun.baiyug.cn/vip/index.php?url="+this.state.url,frameBorder:"0",height:"450px",width:"700px"})),o.default.h("div",{style:!this.state.isShow,className:"no-login"},o.default.h("ul",null,o.default.h("a",{href:"https://www.chinko.cc/login"},"登陆"),o.default.h("a",{href:"https://www.chinko.cc/register"},"注册")))),o.default.h("footer",null,o.default.h("p",null,"© ACGzone player 2018 Powered by ",o.default.h("span",{className:"title"},"Fre.js"))))}}]),t}();o.default.render(o.default.h(u,null),document.body)},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";t.__esModule=!0;var r=n(4);function o(e,t){var n=e;return void 0!==typeof t&&null!==typeof t&&"boolean"!=typeof t||(t=""),"number"==typeof t&&(t=String(t)),"string"==typeof t?(e&&3===e.nodeType?e.textContent!==t&&(e.textContent=t):(n=document.createTextNode(t),e&&e.parentNode&&e.parentNode.replaceChild(n,e)),n):"function"==typeof t.type?function(e,t){var n=e&&e.component,r=e;return n&&n.constructor===t.type?(i(n,t.props),e=n.base):(n&&(function(e){e.willUnmout&&e.willUnmout(),s(e.base)}(n),r=null),i(n=function(e,t){var n,r=this;return e.prototype&&e.prototype.render?n=new e(t):((n=new e(t)).constructor=e,n.render=function(){return r.constructor(t)}),n}(t.type,t.props),t.props),e=n.base,r&&e!==r&&(r.component=null,s(r))),e}(e,t):(e&&u(e,t)||(n=document.createElement(t.type),e&&(e.childNodes.slice().map(n.appendChild),e.parentNode&&e.parentNode.replaceChild(n,e))),(t.children&&t.children.length>0||n.childNodes&&n.childNodes.length>0)&&function(e,t){var n=e.childNodes,r=[],i={};if(n.length>0)for(var a=0;a<n.length;a++){var l=n[a],f=l.key;f?i[f]=l:r.push(l)}if(t.length>0)for(var c=0,p=r.length,a=0;a<t.length;a++){var d=t[a],f=d.key,l=void 0;if(f)i[f]&&(l=i[f],i[f]=void 0);else if(c<p)for(var h=c;h<p;h++){var b=r[h];b&&u(b,d)&&(l=b,r[h]=void 0,h===r-1&&p--,h===c&&c++)}l=o(l,d);var v=n[a];l&&l!==e&&l!==v&&(v?l===v.nextSibling?s(v):e.insertBefore(l,v):e.appendChild(l))}}(n,t.children),function(e,t){for(var n={},o=t.props,i=0;i<e.attributes.length;i++){var a=e.attributes[i];n[a.name]=a.value}for(var u in n)u in o||r.setAttr(e,u,void 0);for(var s in o)n[s]!==o[s]&&r.setAttr(e,s,o[s])}(n,t),n)}function i(e,t){e.base?e.willChange&&e.willChange(t):e.willMount&&e.willMount(),e.props=t,a(e)}function a(e){var t,n=e.render();e.base&&e.willUpdate&&e.willUpdate(),t=o(e.base,n),e.base?e.updated&&e.updated():e.mounted&&e.mounted(),e.base=t}function u(e,t){return"string"==typeof t||"number"==typeof t?3===e.nodeType:"string"==typeof t.type?e.nodeName.toLowerCase()===t.type.toLowerCase():e&&e.component&&e.component.constructor===t.type}function s(e){e&&e.parentNode&&e.parentNode.removeChild(e)}t.diff=function(e,t,n){var r=o(e,t);return n&&r.parentNode!==n&&n.appendChild(r),r},t.renderComponent=a},function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(){this.subs=[],this.add=this.add.bind(this),this.notify=this.notify.bind(this)}return e.prototype.add=function(e){this.subs.push(e)},e.prototype.clean=function(){this.subs=[]},e.prototype.notify=function(){this.subs.forEach(function(e){return e.update()})},e}();t.Dep=r,r.target=null},function(e,t,n){"use strict";t.__esModule=!0;var r=n(3),o=n(5),i=n(6);t.default={h:o.h,Component:i.default,render:r.default}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e,t,n){return r.diff(n,e,t)}},function(e,t,n){"use strict";t.__esModule=!0,t.setAttr=function(e,t,n){if(/on\w+/.test(t))e[t=t.toLowerCase()]=n;else switch(t){case"className":t="class",e.setAttribute(t,n);break;case"value":"input"===e.tagName.toUpperCase()||"textarea"===e.tagName.toUpperCase()?e.value=n:e.setAttribute(t,n);break;case"style":e.style.cssText=n;break;default:e.setAttribute(t,n)}}},function(e,t,n){"use strict";t.__esModule=!0;var r=function(e,t,n){t=t||{},this.type=e,this.props=t,this.children=n,this.key=this.props.key||null};t.Vnode=r,t.h=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return new r(e,t,n)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(7),o=n(8),i=function(){function e(e){void 0===e&&(e={}),this.state={},this.props=e}return e.prototype.willMount=function(){new o.Observer(this.state),new r.Watcher(this)},e}();t.Component=i,t.default=i},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=n(0),i=function(){function e(e){this.vm=e,r.Dep.target=this,this.update=this.update.bind(this)}return e.prototype.update=function(){o.renderComponent(this.vm)},e}();t.Watcher=i},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=function(){function e(e){this.observe(e)}return e.prototype.observe=function(e){var t=this;e&&"object"==typeof e&&Object.keys(e).forEach(function(n){t.defineReactive(e,n,e[n]),t.observe(e[n])})},e.prototype.defineReactive=function(e,t,n){var o=this,i=new r.Dep;Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return r.Dep.target&&i.add(r.Dep.target),r.Dep.target=null,n},set:function(e){e!==n&&(o.observe(e),n=e,i.notify())}})},e}();t.Observer=o}])},function(e,t,n){var r,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var a=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=a,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}return function t(n){function r(t,o,i){var a;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},r.defaults,i)).expires){var u=new Date;u.setMilliseconds(u.getMilliseconds()+864e5*i.expires),i.expires=u}i.expires=i.expires?i.expires.toUTCString():"";try{a=JSON.stringify(o),/^[\{\[]/.test(a)&&(o=a)}catch(e){}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var s="";for(var l in i)i[l]&&(s+="; "+l,!0!==i[l]&&(s+="="+i[l]));return document.cookie=t+"="+o+s}t||(a={});for(var f=document.cookie?document.cookie.split("; "):[],c=/(%[0-9A-Z]{2})+/g,p=0;p<f.length;p++){var d=f[p].split("="),h=d.slice(1).join("=");this.json||'"'!==h.charAt(0)||(h=h.slice(1,-1));try{var b=d[0].replace(c,decodeURIComponent);if(h=n.read?n.read(h,b):n(h,b)||h.replace(c,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===b){a=h;break}t||(a[b]=h)}catch(e){}}return a}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}(function(){})})},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  background: #151c2d;\r\n}\r\n\r\n.wrap {\r\n  width: 700px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.player {\r\n  height: 450px;\r\n  width: 700px;\r\n  background: #000;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  top: 110px;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n}\r\n\r\nheader {\r\n  background: #21243a;\r\n  padding: 5px 0;\r\n  position: relative;\r\n}\r\n\r\nheader:after {\r\n  content: "";\r\n  height: 6px;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 50px;\r\n  border-bottom: 6px dashed #21243a;\r\n}\r\n\r\nheader img {\r\n  height: 30px;\r\n  padding-top: 10px;\r\n}\r\n\r\nheader li {\r\n  list-style: none;\r\n  color: #fff;\r\n  display: inline-block;\r\n  background: #ff005e;\r\n  border-radius: 15px;\r\n  padding: 3px 10px;\r\n  font-weight: bold;\r\n  margin: 10px 20px;\r\n}\r\n\r\nheader .logo {\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n\r\nheader .title {\r\n  font-size: 20px;\r\n  position: relative;\r\n  top: 2px;\r\n  color: #ff005e;\r\n}\r\n\r\n.player .option {\r\n  text-align: center;\r\n}\r\n\r\n.player .option li {\r\n  color: #fff;\r\n  padding: 5px 30px;\r\n  margin-top: 50px;\r\n  display: inline-block;\r\n  border-radius: 20px;\r\n  border: 2px solid #aeafb7;\r\n  cursor: pointer;\r\n  background: #21243a;\r\n}\r\n\r\n.player .option li:hover {\r\n  background: #ff005e;\r\n  transition: .3s;\r\n  border: 2px solid #fff;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter .title {\r\n  color: #ff005e;\r\n  font-weight: bold;\r\n}\r\n\r\nfooter p {\r\n  background: #21243a;\r\n  padding: 20px;\r\n  display: inline-block;\r\n  margin-top: 50px;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.no-login ul {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.no-login ul a {\r\n  color: #fff;\r\n  padding: 5px 20px;\r\n}\r\n\r\n.no-login ul a:first-child {\r\n  background: #ff005e;\r\n  border-radius: 20px;\r\n}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,u=0,s=[],l=n(7);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var u=[];for(a=0;a<o.parts.length;a++)u.push(v(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:u}}}}function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),p(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=u++;n=a||(a=h(t)),r=g.bind(null,n,s,!1),o=g.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=c(e,t);return f(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(u=r[a.id]).refs--,o.push(u)}e&&f(c(e,t),t);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete r[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function g(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);