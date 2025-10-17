/*!
 * Hello to whoever is reading this! I think you are cool 🤜🤛
 *
 * I did not obfuscate the code to help you better understand it.
 * However, I don't know how to disable minification of web components (StencilJS).
 * Sorry, I didn't look too hard!
 * The code of the entire project is available at:
 * https://github.com/vocably/language-learning-tool
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3166:
/***/ (() => {

(function(){
/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var n=window.Document.prototype.createElement,p=window.Document.prototype.createElementNS,aa=window.Document.prototype.importNode,ba=window.Document.prototype.prepend,ca=window.Document.prototype.append,da=window.DocumentFragment.prototype.prepend,ea=window.DocumentFragment.prototype.append,q=window.Node.prototype.cloneNode,r=window.Node.prototype.appendChild,t=window.Node.prototype.insertBefore,u=window.Node.prototype.removeChild,v=window.Node.prototype.replaceChild,w=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),y=window.Element.prototype.attachShadow,z=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),A=window.Element.prototype.getAttribute,B=window.Element.prototype.setAttribute,C=window.Element.prototype.removeAttribute,D=window.Element.prototype.getAttributeNS,E=window.Element.prototype.setAttributeNS,F=window.Element.prototype.removeAttributeNS,G=window.Element.prototype.insertAdjacentElement,H=window.Element.prototype.insertAdjacentHTML,fa=window.Element.prototype.prepend,
ha=window.Element.prototype.append,ia=window.Element.prototype.before,ja=window.Element.prototype.after,ka=window.Element.prototype.replaceWith,la=window.Element.prototype.remove,ma=window.HTMLElement,I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),na=window.HTMLElement.prototype.insertAdjacentElement,oa=window.HTMLElement.prototype.insertAdjacentHTML;var pa=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return pa.add(a)});function qa(a){var b=pa.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return!b&&a}var ra=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
function J(a){var b=a.isConnected;if(void 0!==b)return b;if(ra(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}function K(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b}
function L(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function M(a,b,c){for(var f=a;f;){if(f.nodeType===Node.ELEMENT_NODE){var d=f;b(d);var e=d.localName;if("link"===e&&"import"===d.getAttribute("rel")){f=d.import;void 0===c&&(c=new Set);if(f instanceof Node&&!c.has(f))for(c.add(f),f=f.firstChild;f;f=f.nextSibling)M(f,b,c);f=L(a,d);continue}else if("template"===e){f=L(a,d);continue}if(d=d.__CE_shadowRoot)for(d=d.firstChild;d;d=d.nextSibling)M(d,b,c)}f=f.firstChild?f.firstChild:L(a,f)}};function N(){var a=!(null===O||void 0===O||!O.noDocumentConstructionObserver),b=!(null===O||void 0===O||!O.shadyDomFastWalk);this.m=[];this.g=[];this.j=!1;this.shadyDomFastWalk=b;this.I=!a}function P(a,b,c,f){var d=window.ShadyDOM;if(a.shadyDomFastWalk&&d&&d.inUse){if(b.nodeType===Node.ELEMENT_NODE&&c(b),b.querySelectorAll)for(a=d.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)c(a[b])}else M(b,c,f)}function sa(a,b){a.j=!0;a.m.push(b)}function ta(a,b){a.j=!0;a.g.push(b)}
function Q(a,b){a.j&&P(a,b,function(c){return R(a,c)})}function R(a,b){if(a.j&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.m.length;c++)a.m[c](b);for(c=0;c<a.g.length;c++)a.g[c](b)}}function S(a,b){var c=[];P(a,b,function(d){return c.push(d)});for(b=0;b<c.length;b++){var f=c[b];1===f.__CE_state?a.connectedCallback(f):T(a,f)}}function U(a,b){var c=[];P(a,b,function(d){return c.push(d)});for(b=0;b<c.length;b++){var f=c[b];1===f.__CE_state&&a.disconnectedCallback(f)}}
function V(a,b,c){c=void 0===c?{}:c;var f=c.J,d=c.upgrade||function(g){return T(a,g)},e=[];P(a,b,function(g){a.j&&R(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set;f&&(f.forEach(function(m){return l.add(m)}),
l.delete(k));V(a,k,{J:l,upgrade:d})}})}else e.push(g)},f);for(b=0;b<e.length;b++)d(e[b])}
function T(a,b){try{var c=b.ownerDocument,f=c.__CE_registry;var d=f&&(c.defaultView||c.__CE_isImportDocument)?W(f,b.localName):void 0;if(d&&void 0===b.__CE_state){d.constructionStack.push(b);try{try{if(new d.constructorFunction!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=d;if(d.attributeChangedCallback&&b.hasAttributes()){var e=d.observedAttributes;
for(d=0;d<e.length;d++){var g=e[d],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null)}}J(b)&&a.connectedCallback(b)}}catch(k){X(k)}}N.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){X(c)}};N.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a)}catch(c){X(c)}};
N.prototype.attributeChangedCallback=function(a,b,c,f,d){var e=a.__CE_definition;if(e.attributeChangedCallback&&-1<e.observedAttributes.indexOf(b))try{e.attributeChangedCallback.call(a,b,c,f,d)}catch(g){X(g)}};
function ua(a,b,c,f){var d=b.__CE_registry;if(d&&(null===f||"http://www.w3.org/1999/xhtml"===f)&&(d=W(d,c)))try{var e=new d.constructorFunction;if(void 0===e.__CE_state||void 0===e.__CE_definition)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==e.namespaceURI)throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(e.hasAttributes())throw Error("Failed to construct '"+
c+"': The constructed element must not have any attributes.");if(null!==e.firstChild)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(null!==e.parentNode)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(e.ownerDocument!==b)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(e.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");
return e}catch(g){return X(g),b=null===f?n.call(b,c):p.call(b,f,c),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,R(a,b),b}b=null===f?n.call(b,c):p.call(b,f,c);R(a,b);return b}
function X(a){var b=a.message,c=a.sourceURL||a.fileName||"",f=a.line||a.lineNumber||0,d=a.column||a.columnNumber||0,e=void 0;void 0===ErrorEvent.prototype.initErrorEvent?e=new ErrorEvent("error",{cancelable:!0,message:b,filename:c,lineno:f,colno:d,error:a}):(e=document.createEvent("ErrorEvent"),e.initErrorEvent("error",!1,!0,b,c,f),e.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})});void 0===e.error&&Object.defineProperty(e,"error",
{configurable:!0,enumerable:!0,get:function(){return a}});window.dispatchEvent(e);e.defaultPrevented||console.error(a)};function va(){var a=this;this.g=void 0;this.F=new Promise(function(b){a.l=b})}va.prototype.resolve=function(a){if(this.g)throw Error("Already resolved.");this.g=a;this.l(a)};function wa(a){var b=document;this.l=void 0;this.h=a;this.g=b;V(this.h,this.g);"loading"===this.g.readyState&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function xa(a){a.l&&a.l.disconnect()}wa.prototype.G=function(a){var b=this.g.readyState;"interactive"!==b&&"complete"!==b||xa(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,f=0;f<c.length;f++)V(this.h,c[f])};function Y(a){this.s=new Map;this.u=new Map;this.C=new Map;this.A=!1;this.B=new Map;this.o=function(b){return b()};this.i=!1;this.v=[];this.h=a;this.D=a.I?new wa(a):void 0}Y.prototype.H=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");ya(this,a);this.s.set(a,b);this.v.push(a);this.i||(this.i=!0,this.o(function(){return za(c)}))};
Y.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");ya(this,a);Aa(this,a,b);this.v.push(a);this.i||(this.i=!0,this.o(function(){return za(c)}))};function ya(a,b){if(!qa(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(W(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.A)throw Error("A custom element is already being defined.");}
function Aa(a,b,c){a.A=!0;var f;try{var d=c.prototype;if(!(d instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var e=function(m){var x=d[m];if(void 0!==x&&!(x instanceof Function))throw Error("The '"+m+"' callback must be a function.");return x};var g=e("connectedCallback");var h=e("disconnectedCallback");var k=e("adoptedCallback");var l=(f=e("attributeChangedCallback"))&&c.observedAttributes||[]}catch(m){throw m;}finally{a.A=!1}c={localName:b,
constructorFunction:c,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:f,observedAttributes:l,constructionStack:[]};a.u.set(b,c);a.C.set(c.constructorFunction,c);return c}Y.prototype.upgrade=function(a){V(this.h,a)};
function za(a){if(!1!==a.i){a.i=!1;for(var b=[],c=a.v,f=new Map,d=0;d<c.length;d++)f.set(c[d],[]);V(a.h,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=f.get(l);m?m.push(k):a.u.has(l)&&b.push(k)}}});for(d=0;d<b.length;d++)T(a.h,b[d]);for(d=0;d<c.length;d++){for(var e=c[d],g=f.get(e),h=0;h<g.length;h++)T(a.h,g[h]);(e=a.B.get(e))&&e.resolve(void 0)}c.length=0}}Y.prototype.get=function(a){if(a=W(this,a))return a.constructorFunction};
Y.prototype.whenDefined=function(a){if(!qa(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.B.get(a);if(b)return b.F;b=new va;this.B.set(a,b);var c=this.u.has(a)||this.s.has(a);a=-1===this.v.indexOf(a);c&&a&&b.resolve(void 0);return b.F};Y.prototype.polyfillWrapFlushCallback=function(a){this.D&&xa(this.D);var b=this.o;this.o=function(c){return a(function(){return b(c)})}};
function W(a,b){var c=a.u.get(b);if(c)return c;if(c=a.s.get(b)){a.s.delete(b);try{return Aa(a,b,c())}catch(f){X(f)}}}window.CustomElementRegistry=Y;Y.prototype.define=Y.prototype.define;Y.prototype.upgrade=Y.prototype.upgrade;Y.prototype.get=Y.prototype.get;Y.prototype.whenDefined=Y.prototype.whenDefined;Y.prototype.polyfillDefineLazy=Y.prototype.H;Y.prototype.polyfillWrapFlushCallback=Y.prototype.polyfillWrapFlushCallback;function Z(a,b,c){function f(d){return function(e){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&J(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m)}d.apply(this,g);for(g=0;g<k.length;g++)U(a,k[g]);if(J(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&S(a,k)}}void 0!==c.prepend&&(b.prepend=f(c.prepend));void 0!==c.append&&(b.append=f(c.append))};function Ba(a){Document.prototype.createElement=function(b){return ua(a,this,b,null)};Document.prototype.importNode=function(b,c){b=aa.call(this,b,!!c);this.__CE_registry?V(a,b):Q(a,b);return b};Document.prototype.createElementNS=function(b,c){return ua(a,this,c,b)};Z(a,Document.prototype,{prepend:ba,append:ca})};function Ca(a){function b(f){return function(d){for(var e=[],g=0;g<arguments.length;++g)e[g]=arguments[g];g=[];for(var h=[],k=0;k<e.length;k++){var l=e[k];l instanceof Element&&J(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}f.apply(this,e);for(e=0;e<h.length;e++)U(a,h[e]);if(J(this))for(e=0;e<g.length;e++)h=g[e],h instanceof Element&&S(a,h)}}var c=Element.prototype;void 0!==ia&&(c.before=b(ia));void 0!==ja&&(c.after=b(ja));void 0!==ka&&
(c.replaceWith=function(f){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var g=[],h=0;h<d.length;h++){var k=d[h];k instanceof Element&&J(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)e.push(k);else e.push(k)}h=J(this);ka.apply(this,d);for(d=0;d<g.length;d++)U(a,g[d]);if(h)for(U(a,this),d=0;d<e.length;d++)g=e[d],g instanceof Element&&S(a,g)});void 0!==la&&(c.remove=function(){var f=J(this);la.call(this);f&&U(a,this)})};function Da(a){function b(d,e){Object.defineProperty(d,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(g){var h=this,k=void 0;J(this)&&(k=[],P(a,this,function(x){x!==h&&k.push(x)}));e.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m)}this.ownerDocument.__CE_registry?V(a,this):Q(a,this);return g}})}function c(d,e){d.insertAdjacentElement=function(g,h){var k=J(h);g=e.call(this,g,h);k&&U(a,h);J(g)&&S(a,h);return g}}function f(d,
e){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)V(a,l[k])}d.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;e.call(this,h,k);g(l||this.parentNode.firstChild,this)}else if("afterbegin"===h)l=this.firstChild,e.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,e.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,e.call(this,h,k),g(this.nextSibling,l);
else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");}}y&&(Element.prototype.attachShadow=function(d){d=y.call(this,d);if(a.j&&!d.__CE_patched){d.__CE_patched=!0;for(var e=0;e<a.m.length;e++)a.m[e](d)}return this.__CE_shadowRoot=d});z&&z.get?b(Element.prototype,z):I&&I.get?b(HTMLElement.prototype,I):ta(a,function(d){b(d,{enumerable:!0,configurable:!0,get:function(){return q.call(this,!0).innerHTML},set:function(e){var g=
"template"===this.localName,h=g?this.content:this,k=p.call(document,this.namespaceURI,this.localName);for(k.innerHTML=e;0<h.childNodes.length;)u.call(h,h.childNodes[0]);for(e=g?k.content:k;0<e.childNodes.length;)r.call(h,e.childNodes[0])}})});Element.prototype.setAttribute=function(d,e){if(1!==this.__CE_state)return B.call(this,d,e);var g=A.call(this,d);B.call(this,d,e);e=A.call(this,d);a.attributeChangedCallback(this,d,g,e,null)};Element.prototype.setAttributeNS=function(d,e,g){if(1!==this.__CE_state)return E.call(this,
d,e,g);var h=D.call(this,d,e);E.call(this,d,e,g);g=D.call(this,d,e);a.attributeChangedCallback(this,e,h,g,d)};Element.prototype.removeAttribute=function(d){if(1!==this.__CE_state)return C.call(this,d);var e=A.call(this,d);C.call(this,d);null!==e&&a.attributeChangedCallback(this,d,e,null,null)};Element.prototype.removeAttributeNS=function(d,e){if(1!==this.__CE_state)return F.call(this,d,e);var g=D.call(this,d,e);F.call(this,d,e);var h=D.call(this,d,e);g!==h&&a.attributeChangedCallback(this,e,g,h,d)};
na?c(HTMLElement.prototype,na):G&&c(Element.prototype,G);oa?f(HTMLElement.prototype,oa):H&&f(Element.prototype,H);Z(a,Element.prototype,{prepend:fa,append:ha});Ca(a)};var Ea={};function Fa(a){function b(){var c=this.constructor;var f=document.__CE_registry.C.get(c);if(!f)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var d=f.constructionStack;if(0===d.length)return d=n.call(document,f.localName),Object.setPrototypeOf(d,c.prototype),d.__CE_state=1,d.__CE_definition=f,R(a,d),d;var e=d.length-1,g=d[e];if(g===Ea)throw Error("Failed to construct '"+f.localName+"': This element was already constructed.");d[e]=Ea;
Object.setPrototypeOf(g,c.prototype);R(a,g);return g}b.prototype=ma.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b};function Ga(a){function b(c,f){Object.defineProperty(c,"textContent",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(d){if(this.nodeType===Node.TEXT_NODE)f.set.call(this,d);else{var e=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&J(this)){e=Array(h);for(var k=0;k<h;k++)e[k]=g[k]}}f.set.call(this,d);if(e)for(d=0;d<e.length;d++)U(a,e[d])}}})}Node.prototype.insertBefore=function(c,f){if(c instanceof DocumentFragment){var d=K(c);c=t.call(this,c,f);if(J(this))for(f=
0;f<d.length;f++)S(a,d[f]);return c}d=c instanceof Element&&J(c);f=t.call(this,c,f);d&&U(a,c);J(this)&&S(a,c);return f};Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var f=K(c);c=r.call(this,c);if(J(this))for(var d=0;d<f.length;d++)S(a,f[d]);return c}f=c instanceof Element&&J(c);d=r.call(this,c);f&&U(a,c);J(this)&&S(a,c);return d};Node.prototype.cloneNode=function(c){c=q.call(this,!!c);this.ownerDocument.__CE_registry?V(a,c):Q(a,c);return c};Node.prototype.removeChild=function(c){var f=
c instanceof Element&&J(c),d=u.call(this,c);f&&U(a,c);return d};Node.prototype.replaceChild=function(c,f){if(c instanceof DocumentFragment){var d=K(c);c=v.call(this,c,f);if(J(this))for(U(a,f),f=0;f<d.length;f++)S(a,d[f]);return c}d=c instanceof Element&&J(c);var e=v.call(this,c,f),g=J(this);g&&U(a,f);d&&U(a,c);g&&S(a,c);return e};w&&w.get?b(Node.prototype,w):sa(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){for(var f=[],d=this.firstChild;d;d=d.nextSibling)d.nodeType!==Node.COMMENT_NODE&&
f.push(d.textContent);return f.join("")},set:function(f){for(;this.firstChild;)u.call(this,this.firstChild);null!=f&&""!==f&&r.call(this,document.createTextNode(f))}})})};var O=window.customElements;function Ha(){var a=new N;Fa(a);Ba(a);Z(a,DocumentFragment.prototype,{prepend:da,append:ea});Ga(a);Da(a);a=new Y(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a})}O&&!O.forcePolyfill&&"function"==typeof O.define&&"function"==typeof O.get||Ha();window.__CE_installPolyfill=Ha;
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),

/***/ 7160:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ 1243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Fragment),
/* harmony export */   "H": () => (/* binding */ Host),
/* harmony export */   "b": () => (/* binding */ bootstrapLazy),
/* harmony export */   "c": () => (/* binding */ createEvent),
/* harmony export */   "g": () => (/* binding */ getElement),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "r": () => (/* binding */ registerInstance)
/* harmony export */ });
/* unused harmony exports p, s */
const NAMESPACE = 'extension-content-ui';
const BUILD = /* extension-content-ui */ { hydratedSelectorName: "hydrated", lazyLoad: true, updatable: true, watchCallback: false };

/*
 Stencil Client Platform v4.36.2 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  return __webpack_require__(3469)(`./${bundleId}.entry.js`).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var win = typeof window !== "undefined" ? window : {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  return void 0;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = this.attachShadow({ mode: "open" });
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported()) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                if (supportsMutableAdoptedStyleSheets) {
                  styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
                } else {
                  styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
                }
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      if (supportsMutableAdoptedStyleSheets) {
        styleContainerNode.adoptedStyleSheets.push(style);
      } else {
        styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
      }
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (typeof propValue === "string" && (propType & 16 /* Unknown */ || propType & 8 /* Any */) && (propValue.startsWith("{") && propValue.endsWith("}") || propValue.startsWith("[") && propValue.endsWith("]"))) {
    try {
      return JSON.parse(propValue);
    } catch (e) {
    }
  }
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ ;
};

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var hostTagName;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  return elm;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, before);
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(oldStartVnode.$elm$.parentNode, node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  patch(oldVNode, rootVnode, isInitialLoad);
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || BUILD.watchCallback) {
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags)
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;


//# sourceMappingURL=index-CfdvrA3w.js.map

//# sourceMappingURL=index-CfdvrA3w.js.map

/***/ }),

/***/ 9745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vocably_add_card_hint": () => (/* binding */ VocablyAddCardHint),
/* harmony export */   "vocably_animated_content_wrapper": () => (/* binding */ VocablyAnimatedContentWrapper),
/* harmony export */   "vocably_button": () => (/* binding */ VocablyButton$1),
/* harmony export */   "vocably_card_counter": () => (/* binding */ VocablyCardCounter),
/* harmony export */   "vocably_card_counter_explanation": () => (/* binding */ VocablyCardCounterExplanation),
/* harmony export */   "vocably_card_definitions": () => (/* binding */ VocablyCardDefinitions),
/* harmony export */   "vocably_card_examples": () => (/* binding */ VocablyCardExamples),
/* harmony export */   "vocably_card_source": () => (/* binding */ VocablyCardSource),
/* harmony export */   "vocably_card_translation": () => (/* binding */ VocablyCardTranslation),
/* harmony export */   "vocably_close_button": () => (/* binding */ VocablyCloseButton),
/* harmony export */   "vocably_first_translation_congratulation": () => (/* binding */ VocablyFirstTranslationCongratulation),
/* harmony export */   "vocably_hint_selector": () => (/* binding */ VocablyLanguageSelector),
/* harmony export */   "vocably_icon_arrow_right": () => (/* binding */ VocablyIconArrowRight),
/* harmony export */   "vocably_icon_bookmark_check": () => (/* binding */ VocablyIconBookmarkCheck),
/* harmony export */   "vocably_icon_check": () => (/* binding */ VocablyIconCheck),
/* harmony export */   "vocably_icon_close": () => (/* binding */ VocablyIconClose),
/* harmony export */   "vocably_icon_edit": () => (/* binding */ VocablyIconRemove$3),
/* harmony export */   "vocably_icon_error": () => (/* binding */ VocablyIconError),
/* harmony export */   "vocably_icon_play_circle": () => (/* binding */ VocablyIconPlayCircle),
/* harmony export */   "vocably_icon_plus": () => (/* binding */ VocablyIconPlus),
/* harmony export */   "vocably_icon_remove": () => (/* binding */ VocablyIconRemove$2),
/* harmony export */   "vocably_icon_spin": () => (/* binding */ VocablyIconSpin),
/* harmony export */   "vocably_icon_tag": () => (/* binding */ VocablyIconRemove$1),
/* harmony export */   "vocably_icon_tag_edit": () => (/* binding */ VocablyIconRemove),
/* harmony export */   "vocably_icon_volume_medium": () => (/* binding */ VocablyIconVolumeMedium),
/* harmony export */   "vocably_inline_loader": () => (/* binding */ VocablyInlineLoader),
/* harmony export */   "vocably_language": () => (/* binding */ VocablyLanguage),
/* harmony export */   "vocably_logo": () => (/* binding */ VocablyLogo),
/* harmony export */   "vocably_mobile_button": () => (/* binding */ VocablyMobileButton),
/* harmony export */   "vocably_overlay": () => (/* binding */ VocablyOverlay),
/* harmony export */   "vocably_play_sound": () => (/* binding */ VocablyPlaySound),
/* harmony export */   "vocably_popup": () => (/* binding */ VocablyPopup),
/* harmony export */   "vocably_qr_code": () => (/* binding */ VocablyButton),
/* harmony export */   "vocably_rate": () => (/* binding */ VocablyRate),
/* harmony export */   "vocably_sign_in": () => (/* binding */ VocablySignIn),
/* harmony export */   "vocably_spinner": () => (/* binding */ VocablySpinner),
/* harmony export */   "vocably_subscribe": () => (/* binding */ VocablySubscribe),
/* harmony export */   "vocably_tag_form": () => (/* binding */ VocablyTagsMenu$1),
/* harmony export */   "vocably_tags_menu": () => (/* binding */ VocablyTagsMenu),
/* harmony export */   "vocably_translation": () => (/* binding */ VocablyTranslation)
/* harmony export */ });
/* harmony import */ var _index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1243);


const addCardHintCss = ":host{visibility:visible !important}.arrow{vertical-align:middle}.arrow path{fill:#0050ff}.hint{color:#0050ff;margin-right:8px;font-size:16px;vertical-align:middle}";

const VocablyAddCardHint = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.confirm = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm");
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'a87da6f58a36efb156dde6daedc5bff5037caf02' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '6246a3cd17020b3d88872d7d1438720cf9a0bbcf', class: "hint" }, "Click here"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '3eba2f231b97e296403893846fa7442263f41f4f', class: "arrow", width: "28", height: "15", viewBox: "0 0 28 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9ebabf1dd9256bb765d5bcca79f2f22c85e45d33', d: "M1.54141 8.9238C0.771414 9.258 0.348426 9.2814 0.116426 9.0031C-0.359574 8.4302 0.686425 6.7104 2.11842 5.7119C3.70942 4.603 8.26342 3.24358 11.1134 3.0276C13.8054 2.82348 17.0554 3.12503 18.7054 3.7319C19.3264 3.9603 19.8494 4.1204 19.8674 4.0877C19.8864 4.0548 19.6814 3.24682 19.4124 2.2919C18.7594 -0.0292306 19.0194 -0.450971 20.5684 0.417849C21.8334 1.12699 25.6214 4.8715 26.6884 6.4669C27.9774 8.3944 27.4164 10.3477 25.2704 11.4034C18.7674 14.6016 17.5424 15.0267 17.1044 14.2367C16.7764 13.6445 18.1604 11.7495 19.8034 10.5412L21.4284 9.3465L20.3144 8.9062C17.5394 7.8088 14.7854 7.0159 13.2414 6.8692C9.73143 6.536 5.22341 7.3279 1.54141 8.9238Z" }))));
    }
};
VocablyAddCardHint.style = addCardHintCss;

const animatedContentWrapperCss = ":host{display:block}#content-wrapper{height:0;overflow:hidden;transition:height 0.2s ease-in-out}";

const VocablyAnimatedContentWrapper = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.close = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "close");
        this.delay = 0;
    }
    componentDidRender() {
        if (!this.el.shadowRoot) {
            throw new Error('Shadow root property is empty');
        }
        const contentWrapper = this.el.shadowRoot.getElementById('content-wrapper');
        const content = this.el.shadowRoot.getElementById('content');
        if (!content || !contentWrapper) {
            throw new Error(`Can't find content or contentWrapper elements`);
        }
        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                const rect = content.getBoundingClientRect();
                contentWrapper.style.height = `${rect.height}px`;
            });
        });
        setTimeout(() => {
            resizeObserver.observe(content);
        }, this.delay);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a495723644a8e4bcec5ca394dea3ace99d2de943', id: "content-wrapper" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'ba8e03b2046abfbadb7b4d3169e824862ef1bf83', id: "content" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: '3662a22aab690240feb8596e7b290f6f5b2ac2b6' }))));
    }
    get el() { return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyAnimatedContentWrapper.style = animatedContentWrapperCss;

const buttonCss = ":host{display:block;visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important}.button{display:flex;border-radius:5px;width:21px;height:21px;line-height:21px;background-color:#fff;padding:3px;cursor:pointer;box-sizing:content-box;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(0, 0, 0, 0.8);transition:box-shadow 0.1s;animation-duration:0.3s;animation-name:fadeIn}.button .svg{height:18.9px}.button:hover{box-shadow:0 2px 5px rgba(0, 0, 0, 0.9)}.button:active{box-shadow:0 2px 3px rgba(0, 0, 0, 0.7)}@keyframes fadeIn{from{opacity:0}to{opacity:1}}";

const VocablyButton$1 = class VocablyButton {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '5a7fbb34f9747aa56a19570309b23bda82600a3a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'b8bf03a744b5555fbdd7a41a74ad17f27680a77d', class: "button" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'd54439c84de1bbd460f3ddbba4ac7cf5d06049b6', viewBox: "0 0 633 699", fill: "none", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '127e35d0c289b8919f1771dd55b70630afe0a371', d: "M585.428 130.443H46.6646C21.2112 130.443 0 150.809 0 177.116V482.609C0 508.067 20.3627 529.281 46.6646 529.281H82.2994V639.599C82.2994 662.511 95.026 682.877 114.54 693.06C122.176 697.303 130.661 699 139.145 699C151.872 699 163.75 694.757 174.78 687.12L352.954 530.13H585.428C610.882 530.13 632.093 509.764 632.093 483.457V177.964C632.093 151.658 610.882 130.443 585.428 130.443ZM150.175 654.874C142.539 660.814 135.752 658.268 133.206 656.57C130.661 654.873 123.873 650.63 123.873 639.599V340.045C123.873 320.527 137.448 291.676 152.72 278.947L320.713 132.989V504.672L150.175 654.874Z", fill: "#0050FF" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '59feb43539da061ab2579960a5048d2b8bee46ab', d: "M524.34 36.2492C524.34 10.7914 497.19 -13.8184 464.949 9.09357L355.499 101.59H524.34V36.2492Z", fill: "#0050FF" })))));
    }
};
VocablyButton$1.style = buttonCss;

const cardCounterCss = "vocably-card-counter{--size:21px;font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;min-width:var(--size);height:var(--size);line-height:0 !important;visibility:visible !important}vocably-card-counter .vocably-card-counter-button{padding:0;box-sizing:border-box;border:none;min-width:var(--size);height:var(--size);line-height:var(--size);background-color:#0050ff;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--size);color:rgb(255, 255, 255);font-size:10px;font-weight:bold;text-align:center;cursor:pointer;overflow:hidden}vocably-card-counter .vocably-card-counter-previous,vocably-card-counter .vocably-card-counter-current{display:block;padding:0 4px}vocably-card-counter .vocably-card-counter-current{margin-top:calc(var(--size) * -1);animation-duration:1s;animation-name:currentShowUp;animation-fill-mode:forwards}vocably-card-counter .vocably-card-counter-previous{animation-duration:1s;animation-name:previousHideDown;animation-fill-mode:forwards}@keyframes currentShowUp{from{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:100%}}@keyframes previousHideDown{from{transform:translateY(0);opacity:100%}to{transform:translateY(-12px);opacity:0}}.vocably-card-counter-explanation{opacity:0;transform:translateY(-8px);transition:all 0.2s;pointer-events:none;position:absolute}.vocably-card-counter-explanation.vocably-card-counter-explanation-visible{opacity:1;transform:translateY(0);pointer-events:auto}";

const explanationHiddenStyles = {
    opacity: '0',
    transform: 'translateY(-8px)',
    transition: 'all 0.2s',
    'pointer-events': 'none',
    position: 'absolute',
    zIndex: '2147483647',
};
const explanationVisileStyles = {
    opacity: '1',
    transform: 'translateY(0)',
    'pointer-events': 'auto',
};
const VocablyCardCounter = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.maxCards = 30;
        this.paymentLink = '';
        this.buttonBecameVisible = 0;
        this.showedOnClick = false;
    }
    connectedCallback() {
        this.buttonBecameVisible = new Date().getTime();
    }
    showExplanation() {
        const { right: buttonRight, top: buttonTop } = this.element.getBoundingClientRect();
        if (window.innerWidth > 600) {
            this.explanation.style.right = `${window.innerWidth + window.scrollX - buttonRight}px`;
        }
        else {
            this.explanation.style.left = `${window.scrollX + 20}px`;
            this.explanation.style.right = `${window.scrollX + 20}px`;
        }
        this.explanation.style.top = `${buttonTop + window.scrollY}px`;
        const container = document.querySelector('vocably-overlay:last-child') || document.body;
        container.appendChild(this.explanation);
        setTimeout(() => {
            for (let [style, value] of Object.entries(explanationVisileStyles)) {
                // @ts-ignore
                this.explanation.style[style] = value;
            }
        }, 0);
    }
    hideExplanation() {
        for (let [style, value] of Object.entries(explanationHiddenStyles)) {
            // @ts-ignore
            this.explanation.style[style] = value;
        }
        this.buttonBecameVisible = new Date().getTime();
        this.showedOnClick = false;
        setTimeout(() => {
            this.element.appendChild(this.explanation);
        }, 200);
    }
    onClick() {
        this.showedOnClick = true;
        this.showExplanation();
    }
    onMouseEnter() {
        if (new Date().getTime() - this.buttonBecameVisible < 200) {
            return;
        }
        this.showExplanation();
    }
    onMouseLeave() {
        if (this.showedOnClick) {
            return;
        }
        this.hideExplanation();
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '8bd6584d4c64fe266c306bf8385ca63e59c4ff0b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '02c2ab637a3447b95ac7a26368645c2d047e9c62', class: "vocably-card-counter-button", onClick: () => this.onClick(), onTouchStart: () => (this.showedOnClick = true), onMouseEnter: () => this.onMouseEnter() }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '5ce20327235c0449a49d81fe12cbefd027829b98', class: "vocably-card-counter-previous" }, Number(this.collectionLength) - 1), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '61a2e645564dc614763367fe6d418e9a874d6ba5', class: "vocably-card-counter-current" }, this.collectionLength)), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-counter-explanation", { key: 'a359c6d0d364dccad9ed7377baa6a5735473b2ea', paymentLink: this.paymentLink, maxCards: this.maxCards, onCloseExplanation: () => this.hideExplanation(), style: explanationHiddenStyles, ref: (el) => (this.explanation = el), onMouseLeave: () => this.onMouseLeave() })));
    }
    get element() { return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyCardCounter.style = cardCounterCss;

const cardCounterExplanationCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important}:host .explanation{position:relative;background-color:rgb(255, 255, 255);border-radius:16px;box-shadow:0 2px 6px rgba(0, 0, 0, 0.3);padding:16px;text-align:left;font-size:14px;display:flex;flex-direction:column;gap:6px}:host .upgrade-button{flex:1;font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important;min-width:200px;padding-left:16px;padding-right:16px}:host .upgrade-button:hover:not([disabled]),:host .upgrade-button:focus:not([disabled]){background:#0047e3}:host .upgrade-button:active:not([disabled]){background:#0047e3}:host .upgrade-button[disabled]{background:#bababa}:host .close-button{padding:0;cursor:pointer;background:none;position:absolute;border:none}";

const VocablyCardCounterExplanation = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.closeExplanation = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "closeExplanation");
        this.paymentClicked = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "paymentClicked");
        this.maxCards = 30;
        this.paymentLink = '';
        this.becameVisible = 0;
        this.onClose = () => {
            if (new Date().getTime() - this.becameVisible < 100) {
                return;
            }
            this.closeExplanation.emit();
        };
    }
    connectedCallback() {
        this.becameVisible = new Date().getTime();
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '15890b71f1407d29d63e9dfe6a2c07632d031f6d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'e59016a083b5f1e59b63f565324caa1141aefcc3', class: "explanation" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '1ff3b149f00d8c081be1a66ffe714f5fb2d63a3a', onClick: () => this.onClose(), class: "close-button", style: { right: '8px', top: '8px' }, title: "Close" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-close", { key: '0e5fc0429be7697c556850bad00c26b6fa55d678' })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'b533bf39b055c4427d8ba2fec976026c12acb39c', style: { marginRight: '8px' } }, "The ", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: '946281bceb0542f7ec6ff864304808677f4b0b11' }, "Free Plan"), " allows to save up to", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: 'a2483d8c42bf785d4494ae70813702caa1349180' }, this.maxCards), " cards."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '5aeaa10d8e2424edce543d5ebfffb6c8737b81e6' }, "After you reached the limit, you will be allowed to save", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: 'e69b2e616a077b991196715349c2c7306dfd964a' }, "one card per day"), "."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'f0fc82e407bd7b9d4ce8126beb3d071db02809c7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '771fa88772f8b2c4f316362174b32ae60c4f35bb', href: this.paymentLink, target: "_blank", class: "upgrade-button", onClick: () => this.paymentClicked.emit() }, "Upgrade to Premium Plan")))));
    }
};
VocablyCardCounterExplanation.style = cardCounterExplanationCss;

const isToday = (ts) => {
    const now = new Date();
    const tsDate = new Date(ts);
    return (now.getDay() === tsDate.getDay() &&
        now.getMonth() === tsDate.getMonth() &&
        now.getFullYear() === tsDate.getFullYear());
};

const explode = (lines) => {
    if (!lines) {
        return [];
    }
    return lines
        .split(`\n`)
        .map((line) => line.replace(/^\* */, '').replace(/ +$/, ''))
        .filter((line) => line !== '');
};

const trimRegexes = {
    en: [/^(a)\s/i],
    nl: [/^(de|het|de.het|het.de)\s/i],
    de: [/^(der|die|das|ein|eine)\s/i],
    es: [/^(el|la|los|las|el.la|la.el)\s/i],
    fr: [/^(le|la|les|un|une|des|du|de)\s/i],
    it: [/^(il|lo|la|i|gli|le|un|uno|una)\s/i, /^(l)['’‘‛′ʼʹꞌ＇]/i],
    pt: [/^(o|a|os|as|um|uma|uns|umas)\s/i],
    no: [/^(en|ei|et)\s/i],
    da: [/^(en|et)\s/i],
};
const trimArticle = (language, source) => {
    if (trimRegexes[language] === undefined) {
        return {
            source,
        };
    }
    for (let regex of trimRegexes[language]) {
        const articleMatch = source.match(regex);
        if (articleMatch === null) {
            continue;
        }
        return {
            source: source.replace(regex, '').trim(),
        };
    }
    return {
        source,
    };
};

const cardDefinitionsCss = "vocably-card-definitions{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}";

const VocablyCardDefinitions = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        const definitions = explode(this.card.data.definition);
        if (definitions.length === 0) {
            return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-translation", { card: this.card, updateCard: this.updateCard }));
        }
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "vocably-list" }, this.card.data.translation && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-translation", { card: this.card, updateCard: this.updateCard }))), definitions.map((item) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item)))));
    }
};
VocablyCardDefinitions.style = cardDefinitionsCss;

const cardExamplesCss = "vocably-card-examples{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}";

const VocablyCardExamples = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        const examples = explode(this.example);
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '316bb4a50b543630a7da58a0b3cec32ef115f5a5' }, examples.length === 1 && examples[0], examples.length > 1 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { key: '9d9c7667f10011416062e7f939d5b06393b3a10c', class: "vocably-list" }, examples.map((item) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item)))))));
    }
};
VocablyCardExamples.style = cardExamplesCss;

const GoogleTTSLanguages = [
    'af',
    'ar',
    'eu',
    'bn',
    'bg',
    'ca',
    'cs',
    'da',
    'nl',
    'no',
    'en',
    'fi',
    'fr',
    'gl',
    'de',
    'el',
    'gu',
    'he',
    'hi',
    'hu',
    'is',
    'id',
    'it',
    'ja',
    'kn',
    'ko',
    'lv',
    'lt',
    'ms',
    'ml',
    'mr',
    'nb',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sr',
    'sk',
    'es',
    'sv',
    'ta',
    'te',
    'th',
    'tr',
    'uk',
    'vi',
    'zh',
    'zh-TW',
];
const isGoogleTTSLanguage = (language) => {
    return GoogleTTSLanguages.includes(language);
};

const GoogleLanguages = [
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'ca',
    'zh',
    'co',
    'haw',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'he',
    'hi',
    'hu',
    'hmn',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'jv',
    'kn',
    'kk',
    'km',
    'rw',
    'ko',
    'ku',
    'ky',
    'lo',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'my',
    'ne',
    'no',
    'ny',
    'or',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'tk',
    'zh-TW',
    'uk',
    'ur',
    'ug',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu',
];
const isGoogleLanguage = (language) => GoogleLanguages.indexOf(language) !== -1;

const languageList = {
    af: 'Afrikaans',
    sq: 'Albanian',
    am: 'Amharic',
    ar: 'Arabic',
    hy: 'Armenian',
    az: 'Azerbaijani',
    eu: 'Basque',
    be: 'Belarusian',
    bn: 'Bengali',
    bs: 'Bosnian',
    bg: 'Bulgarian',
    ca: 'Catalan',
    zh: 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    co: 'Corsican',
    hr: 'Croatian',
    cs: 'Czech',
    da: 'Danish',
    nl: 'Dutch',
    en: 'English',
    eo: 'Esperanto',
    et: 'Estonian',
    fi: 'Finnish',
    fr: 'French',
    fy: 'Frisian',
    gl: 'Galician',
    ka: 'Georgian',
    de: 'German',
    el: 'Greek',
    gu: 'Gujarati',
    ht: 'Haitian Creole',
    ha: 'Hausa',
    haw: 'Hawaiian',
    he: 'Hebrew',
    hi: 'Hindi',
    hmn: 'Hmong',
    hu: 'Hungarian',
    is: 'Icelandic',
    ig: 'Igbo',
    id: 'Indonesian',
    ga: 'Irish',
    it: 'Italian',
    ja: 'Japanese',
    jv: 'Javanese',
    kn: 'Kannada',
    kk: 'Kazakh',
    km: 'Khmer',
    rw: 'Kinyarwanda',
    ko: 'Korean',
    ku: 'Kurdish',
    ky: 'Kyrgyz',
    lo: 'Lao',
    lv: 'Latvian',
    lt: 'Lithuanian',
    lb: 'Luxembourgish',
    mk: 'Macedonian',
    mg: 'Malagasy',
    ms: 'Malay',
    ml: 'Malayalam',
    mt: 'Maltese',
    mi: 'Maori',
    mr: 'Marathi',
    mn: 'Mongolian',
    my: 'Myanmar (Burmese)',
    ne: 'Nepali',
    no: 'Norwegian',
    ny: 'Nyanja (Chichewa)',
    or: 'Odia (Oriya)',
    ps: 'Pashto',
    fa: 'Persian',
    pl: 'Polish',
    pt: 'Portuguese (Portugal, Brazil)',
    pa: 'Punjabi',
    ro: 'Romanian',
    ru: 'Russian',
    sm: 'Samoan',
    gd: 'Scots Gaelic',
    sr: 'Serbian',
    st: 'Sesotho',
    sn: 'Shona',
    sd: 'Sindhi',
    si: 'Sinhala (Sinhalese)',
    sk: 'Slovak',
    sl: 'Slovenian',
    so: 'Somali',
    es: 'Spanish',
    su: 'Sundanese',
    sw: 'Swahili',
    sv: 'Swedish',
    tl: 'Tagalog (Filipino)',
    tg: 'Tajik',
    ta: 'Tamil',
    tt: 'Tatar',
    te: 'Telugu',
    th: 'Thai',
    tr: 'Turkish',
    tk: 'Turkmen',
    uk: 'Ukrainian',
    ur: 'Urdu',
    ug: 'Uyghur',
    uz: 'Uzbek',
    vi: 'Vietnamese',
    cy: 'Welsh',
    xh: 'Xhosa',
    yi: 'Yiddish',
    yo: 'Yoruba',
    zu: 'Zulu',
};

const isCardItem = (item) => {
    return item.id !== undefined;
};
const isDetachedCardItem = (item) => {
    return item.id === undefined;
};

const cardSourceCss = "vocably-card-source{display:block;visibility:visible !important}vocably-card-source .vocably-translation-margin-left{margin-left:8px}";

const VocablyCardSource = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '3df60b722cfacfb9aa641ceadb828249a52f299d' }, isGoogleTTSLanguage(this.card.data.language) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-play-sound", { key: '11bd26e9e3386396f961427c118ef846c6b1007b', text: this.card.data.source, language: this.card.data.language, playAudioPronunciation: this.playAudioPronunciation })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '45e4daa78ec9a7db90726f06e2dec2feb959cf6c', class: "vocably-emphasized" }, this.card.data.source), this.card.data.ipa && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '9a68b6c4d12da1fab52fb14bde333d22b3a487f2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '143788659cfb4c61968238796ea5d423d36071ef', class: "vocably-invisible-space" }, "\u00A0"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: 'bfec50d99195497f815a1e58b68c8a09da0d4dd8', class: "vocably-translation-margin-left vocably-muted" }, "[", this.card.data.ipa, "]"))), this.card.data.g && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: 'af50001b211fe4e79afd619db0a6ed934b0ba88f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '8b9eaea1759d72e555b839432a608a733ed7307e', class: "vocably-invisible-space" }, "\u00A0"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '64290c7952e094bf008ad3841b4e83cf42e0820b', class: "vocably-muted vocably-small vocably-translation-margin-left" }, "(", this.card.data.g, ")"))), this.card.data.partOfSpeech && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: 'f9605b35d394363e37bdd017bf773c5bbf05671e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '7ba034f002d1c109f4897093b3cefa62b577bbb2', class: "vocably-invisible-space " }, "\u00A0"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '64b32a00db39fb5492c1f8dcdff9471f5135aae2', class: "vocably-muted vocably-small vocably-translation-margin-left" }, this.card.data.partOfSpeech)))));
    }
};
VocablyCardSource.style = cardSourceCss;

const cardTranslationCss = "vocably-card-translation{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.translation-icon-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:inherit;height:20px}.hover-button .translation-icon-button{opacity:0;transition:opacity 0.2s}.hover-button:hover .translation-icon-button{opacity:1}.translation-icon-button:focus{opacity:1}.text-input{line-height:inherit;background-color:transparent;padding:0 4px;border:none;display:inline-block;width:calc(100% - 80px) !important;height:20px;outline:0.8px solid #bababa;border-radius:4px;margin-right:6px}.text-input:focus{background-color:#fff}.spin-icon{--size:12px;vertical-align:middle}";

const VocablyCardTranslation = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.isEdit = false;
        this.isSaving = false;
        this.onSubmit = async (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (this.isSaving) {
                return;
            }
            if (!this.translationInput) {
                throw new Error('Translation input does not exist.');
            }
            if (this.translationInput.value.trim() === '') {
                return;
            }
            this.isSaving = true;
            const updateResult = await this.updateCard({
                translation: this.translationInput.value.trim(),
            });
            if (updateResult.success === true) {
                this.isEdit = false;
            }
            else {
                alert('Unable to update the card.');
            }
            this.isSaving = false;
            return;
        };
    }
    render() {
        if (!this.isEdit) {
            return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-italic hover-button", onClick: () => {
                    if (!this.isSaving) {
                        this.isEdit = true;
                    }
                } }, this.card.data.translation, "\u00A0", '', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "translation-icon-button" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-edit", null))));
        }
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("form", { onSubmit: this.onSubmit }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { type: "text", class: "text-input", value: this.card.data.translation, autofocus: true, readonly: this.isSaving, onKeyUp: (e) => e.stopPropagation(), onKeyDown: (e) => {
                e.stopPropagation();
                if (e.key === 'Escape' && !this.isSaving) {
                    this.isEdit = false;
                }
            }, onKeyPress: (e) => e.stopPropagation(), ref: (el) => {
                this.translationInput = el;
                if (this.translationInput) {
                    setTimeout(() => {
                        this.translationInput && this.translationInput.focus();
                    }, 200);
                }
            } }), this.isSaving && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", { class: "spin-icon" })), !this.isSaving && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "translation-icon-button", type: "submit", disabled: this.isSaving }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-check", null))), !this.isSaving && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "translation-icon-button", type: "reset", onClick: () => (this.isEdit = false) }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-close", null)))));
    }
};
VocablyCardTranslation.style = cardTranslationCss;

const closeButtonCss = "vocably-close-button{display:inline-block;width:25px;height:25px;line-height:25px;vertical-align:middle;visibility:visible !important}.vocably-close-button{display:block;width:25px;height:25px;line-height:25px !important;background:none;border:none;padding:7px;font-size:0;cursor:pointer;transition:transform 0.2s}.vocably-close-button:active{transform:scale(0.8)}.vocably-close-svg{width:11px;height:11px}.vocably-close-svg-path{stroke-width:0.5px;stroke:#6a6a6a}";

const VocablyCloseButton = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.close = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "close");
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '9bb2f666994ee23c229c0a1b4e114b5787ff62cb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '20e4ea1788f01b48af0504470d2383e0d45d6dc0', class: "vocably-close-button", onClick: () => this.close.emit(), onMouseDown: (e) => e.stopPropagation(), onMouseUp: (e) => e.stopPropagation() }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'e12275835ccae1893b4afbbd9bea93e4db165547', class: "vocably-close-svg", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '466bdb0bbf4e53da439f2799c61089054ebcda79', class: "vocably-close-svg-path", d: "M10 0L0 10M0 0L10 10" })))));
    }
};
VocablyCloseButton.style = closeButtonCss;

(()=>{var s=`
<div class="container">
  <div class="screenshot">
    <slot />
  </div>
  <div class="frame">
    <svg width="100%" viewBox="0 0 415 843" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2201_70)">
    <path d="M415 343C415 344.105 414.105 345 413 345L410 345L410 246L413 246C414.105 246 415 246.895 415 248L415 343Z" fill="#F0ECE3"/>
    <path opacity="0.76" d="M415 343C415 344.105 414.105 345 413 345L410 345L410 246L413 246C414.105 246 415 246.895 415 248L415 343Z" fill="url(#paint0_linear_2201_70)"/>
    <path d="M415 343C415 344.105 414.105 345 413 345L410 345L410 246L413 246C414.105 246 415 246.895 415 248L415 343Z" fill="url(#paint1_linear_2201_70)"/>
    <path opacity="0.48" d="M415 343C415 344.105 414.105 345 413 345L410 345L410 246L413 246C414.105 246 415 246.895 415 248L415 343Z" fill="url(#paint2_linear_2201_70)"/>
    <g filter="url(#filter0_f_2201_70)">
    <path d="M414 266.5C414 266.776 413.776 267 413.5 267C413.224 267 413 266.776 413 266.5L413 248L414 248L414 266.5Z" fill="white"/>
    </g>
    <g filter="url(#filter1_f_2201_70)">
    <path d="M414 339L413 339L413 248.5C413 248.224 413.224 248 413.5 248C413.776 248 414 248.224 414 248.5L414 339Z" fill="white" fill-opacity="0.8"/>
    </g>
    <g filter="url(#filter2_f_2201_70)">
    <path d="M415 341L414 341L414 246.5C414 246.224 414.224 246 414.5 246C414.776 246 415 246.224 415 246.5L415 341Z" fill="#61605D"/>
    </g>
    </g>
    <g clip-path="url(#clip1_2201_70)">
    <path d="M0 151C0 149.895 0.895431 149 2 149H5V180H2C0.89543 180 0 179.105 0 178V151Z" fill="#F0ECE3"/>
    <path opacity="0.76" d="M0 151C0 149.895 0.895431 149 2 149H5V180H2C0.89543 180 0 179.105 0 178V151Z" fill="url(#paint3_linear_2201_70)"/>
    <path d="M0 151C0 149.895 0.895431 149 2 149H5V180H2C0.89543 180 0 179.105 0 178V151Z" fill="url(#paint4_linear_2201_70)"/>
    <path opacity="0.48" d="M0 151C0 149.895 0.895431 149 2 149H5V180H2C0.89543 180 0 179.105 0 178V151Z" fill="url(#paint5_linear_2201_70)"/>
    <g filter="url(#filter3_f_2201_70)">
    <path d="M1 150.5C1 150.224 1.22386 150 1.5 150C1.77614 150 2 150.224 2 150.5V156H1V150.5Z" fill="white"/>
    </g>
    <g filter="url(#filter4_f_2201_70)">
    <path d="M1 152H2V177.5C2 177.776 1.77614 178 1.5 178C1.22386 178 1 177.776 1 177.5V152Z" fill="white" fill-opacity="0.8"/>
    </g>
    <g filter="url(#filter5_f_2201_70)">
    <path d="M0 148H1V181.5C1 181.776 0.776142 182 0.5 182C0.223858 182 0 181.776 0 181.5V148Z" fill="#61605D"/>
    </g>
    </g>
    <g clip-path="url(#clip2_2201_70)">
    <path d="M0 211C0 209.895 0.895431 209 2 209H5V265H2C0.89543 265 0 264.105 0 263V211Z" fill="#F0ECE3"/>
    <path opacity="0.76" d="M0 211C0 209.895 0.895431 209 2 209H5V265H2C0.89543 265 0 264.105 0 263V211Z" fill="url(#paint6_linear_2201_70)"/>
    <path d="M0 211C0 209.895 0.895431 209 2 209H5V265H2C0.89543 265 0 264.105 0 263V211Z" fill="url(#paint7_linear_2201_70)"/>
    <path opacity="0.48" d="M0 211C0 209.895 0.895431 209 2 209H5V265H2C0.89543 265 0 264.105 0 263V211Z" fill="url(#paint8_linear_2201_70)"/>
    <g filter="url(#filter6_f_2201_70)">
    <path d="M1 211.5C1 211.224 1.22386 211 1.5 211C1.77614 211 2 211.224 2 211.5V222H1V211.5Z" fill="white"/>
    </g>
    <g filter="url(#filter7_f_2201_70)">
    <path d="M1 212H2V263.5C2 263.776 1.77614 264 1.5 264C1.22386 264 1 263.776 1 263.5V212Z" fill="white" fill-opacity="0.8"/>
    </g>
    <g filter="url(#filter8_f_2201_70)">
    <path d="M0 209H1V266.5C1 266.776 0.776142 267 0.5 267C0.223858 267 0 266.776 0 266.5V209Z" fill="#61605D"/>
    </g>
    </g>
    <g clip-path="url(#clip3_2201_70)">
    <path d="M0 284C0 282.895 0.895431 282 2 282H5V338H2C0.89543 338 0 337.105 0 336V284Z" fill="#F0ECE3"/>
    <path opacity="0.76" d="M0 284C0 282.895 0.895431 282 2 282H5V338H2C0.89543 338 0 337.105 0 336V284Z" fill="url(#paint9_linear_2201_70)"/>
    <path d="M0 284C0 282.895 0.895431 282 2 282H5V338H2C0.89543 338 0 337.105 0 336V284Z" fill="url(#paint10_linear_2201_70)"/>
    <path opacity="0.48" d="M0 284C0 282.895 0.895431 282 2 282H5V338H2C0.89543 338 0 337.105 0 336V284Z" fill="url(#paint11_linear_2201_70)"/>
    <g filter="url(#filter9_f_2201_70)">
    <path d="M1 284.5C1 284.224 1.22386 284 1.5 284C1.77614 284 2 284.224 2 284.5V295H1V284.5Z" fill="white"/>
    </g>
    <g filter="url(#filter10_f_2201_70)">
    <path d="M1 285H2V336.5C2 336.776 1.77614 337 1.5 337C1.22386 337 1 336.776 1 336.5V285Z" fill="white" fill-opacity="0.8"/>
    </g>
    <g filter="url(#filter11_f_2201_70)">
    <path d="M0 282H1V339.5C1 339.776 0.776142 340 0.5 340C0.223858 340 0 339.776 0 339.5V282Z" fill="#61605D"/>
    </g>
    </g>
    <g clip-path="url(#clip4_2201_70)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M53 0C25.3858 0 3 22.3858 3 50V793C3 820.614 25.3858 843 53 843H362C389.614 843 412 820.614 412 793V50C412 22.3858 389.614 0 362 0H53ZM65 12C37.3858 12 15 34.3858 15 62V781C15 808.614 37.3858 831 65 831H350C377.614 831 400 808.614 400 781V62C400 34.3858 377.614 12 350 12H65Z" fill="#E7E3BF"/>
    <g filter="url(#filter12_f_2201_70)">
    <rect x="4.5" y="1.5" width="406" height="840" rx="60.5" stroke="#C3C3C3" stroke-width="3"/>
    </g>
    <g filter="url(#filter13_f_2201_70)">
    <rect x="3.5" y="0.5" width="408" height="842" rx="61.5" stroke="#524B40"/>
    </g>
    <g filter="url(#filter14_f_2201_70)">
    <rect x="8.5" y="5.5" width="398" height="831" rx="61.5" stroke="white"/>
    </g>
    <rect x="8.8" y="5.8" width="397.4" height="830.4" rx="62.2" stroke="white" stroke-width="0.4"/>
    <rect x="321" width="6" height="4" fill="url(#paint12_linear_2201_70)"/>
    <rect x="3" y="87" width="6" height="4" transform="rotate(-90 3 87)" fill="url(#paint13_linear_2201_70)"/>
    <rect x="3" y="756" width="4" height="6" fill="url(#paint14_linear_2201_70)"/>
    <rect x="66" y="839" width="5" height="4" fill="url(#paint15_linear_2201_70)"/>
    <rect x="408" y="756" width="4" height="6" fill="url(#paint16_linear_2201_70)"/>
    </g>
    <g clip-path="url(#clip5_2201_70)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M57 4C29.3858 4 7 26.3858 7 54V789C7 816.614 29.3858 839 57 839H358C385.614 839 408 816.614 408 789V54C408 26.3858 385.614 4 358 4H57ZM65 12C37.3858 12 15 34.3858 15 62V781C15 808.614 37.3858 831 65 831H350C377.614 831 400 808.614 400 781V62C400 34.3858 377.614 12 350 12H65Z" fill="#030303"/>
    </g>
    <rect x="152" y="24" width="110" height="31" rx="15.5" fill="#030303"/>
    <circle cx="245.62" cy="39.6202" r="9.62021" fill="#0E0B0F"/>
    <circle cx="245.62" cy="39.6202" r="5.34456" fill="#161424"/>
    <circle cx="245.62" cy="39.6202" r="3.20674" fill="#0F0F2A"/>
    <circle cx="245.62" cy="38.5512" r="1.06891" fill="#393752"/>
    <path opacity="0.35" d="M340 33.5275H357C358.918 33.5275 360.472 35.0822 360.472 37V42C360.472 43.9178 358.918 45.4725 357 45.4725H340C338.082 45.4725 336.528 43.9178 336.528 42V37C336.528 35.0822 338.082 33.5275 340 33.5275Z" stroke="#0D0D0E" stroke-width="1.05509"/>
    <path opacity="0.4" d="M362 38V42.2203C362.849 41.8629 363.401 41.0314 363.401 40.1102C363.401 39.1889 362.849 38.3574 362 38" fill="#0D0D0E"/>
    <path d="M338 37C338 35.8954 338.895 35 340 35H357C358.105 35 359 35.8954 359 37V42C359 43.1046 358.105 44 357 44H340C338.895 44 338 43.1046 338 42V37Z" fill="#0D0D0E"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M321.5 35.5875C323.967 35.5876 326.339 36.5551 328.127 38.2898C328.261 38.4237 328.477 38.4221 328.609 38.286L329.896 36.9605C329.963 36.8915 330.001 36.798 330 36.7008C329.999 36.6035 329.961 36.5105 329.893 36.4423C325.201 31.8526 317.799 31.8526 313.107 36.4423C313.039 36.5105 313.001 36.6034 313 36.7007C312.999 36.7979 313.037 36.8914 313.104 36.9605L314.391 38.286C314.523 38.4223 314.739 38.424 314.873 38.2898C316.661 36.5549 319.034 35.5875 321.5 35.5875ZM321.536 39.6724C322.891 39.6723 324.198 40.1864 325.203 41.115C325.338 41.2467 325.552 41.2439 325.685 41.1085L326.97 39.7829C327.038 39.7134 327.075 39.6191 327.074 39.5211C327.073 39.4231 327.034 39.3295 326.965 39.2614C323.906 36.3568 319.169 36.3568 316.109 39.2614C316.04 39.3295 316.001 39.4231 316 39.5212C315.999 39.6192 316.037 39.7135 316.105 39.7829L317.39 41.1085C317.522 41.2439 317.736 41.2467 317.872 41.115C318.876 40.1871 320.182 39.6729 321.536 39.6724ZM324.15 42.3427C324.152 42.441 324.114 42.5357 324.045 42.6046L321.822 44.8948C321.756 44.9621 321.668 45 321.575 45C321.482 45 321.393 44.9621 321.328 44.8948L319.105 42.6046C319.036 42.5357 318.998 42.4409 319 42.3426C319.002 42.2443 319.044 42.1512 319.115 42.0853C320.535 40.8595 322.615 40.8595 324.035 42.0853C324.106 42.1513 324.148 42.2444 324.15 42.3427Z" fill="#0D0D0E"/>
    <path d="M298 36C298 35.4477 298.448 35 299 35H300C300.552 35 301 35.4477 301 36V44C301 44.5523 300.552 45 300 45H299C298.448 45 298 44.5523 298 44V36Z" fill="#0D0D0E"/>
    <path d="M303 34C303 33.4477 303.448 33 304 33H305C305.552 33 306 33.4477 306 34V44C306 44.5523 305.552 45 305 45H304C303.448 45 303 44.5523 303 44V34Z" fill="#0D0D0E"/>
    <path d="M293 39.5C293 38.9477 293.448 38.5 294 38.5H295C295.552 38.5 296 38.9477 296 39.5V44C296 44.5523 295.552 45 295 45H294C293.448 45 293 44.5523 293 44V39.5Z" fill="#0D0D0E"/>
    <path d="M288 42C288 41.4477 288.448 41 289 41H290C290.552 41 291 41.4477 291 42V44C291 44.5523 290.552 45 290 45H289C288.448 45 288 44.5523 288 44V42Z" fill="#0D0D0E"/>
    <path d="M76.9666 33.7231C79.5232 33.7231 81.7479 35.541 81.7479 39.8574V39.874C81.7479 43.9082 79.93 46.2988 76.9168 46.2988C74.7171 46.2988 73.0735 44.9956 72.6917 43.1611L72.6751 43.0698H74.7835L74.8084 43.1528C75.1238 43.9912 75.8626 44.5391 76.9168 44.5391C78.8177 44.5391 79.6229 42.6797 79.7142 40.3887C79.7142 40.2974 79.7225 40.2061 79.7225 40.1147H79.5564C79.1165 41.061 78.0706 41.8994 76.4271 41.8994C74.1277 41.8994 72.5174 40.2227 72.5174 37.9482V37.9316C72.5174 35.4995 74.3685 33.7231 76.9666 33.7231ZM76.9583 40.2559C78.3113 40.2559 79.3489 39.2764 79.3489 37.9233V37.9067C79.3489 36.5371 78.3113 35.4663 76.9832 35.4663C75.6634 35.4663 74.6092 36.5205 74.6092 37.8569V37.8735C74.6092 39.2598 75.597 40.2559 76.9583 40.2559ZM84.7164 38.2388C83.961 38.2388 83.3966 37.6577 83.3966 36.9272C83.3966 36.1885 83.961 35.6157 84.7164 35.6157C85.4801 35.6157 86.0362 36.1885 86.0362 36.9272C86.0362 37.6577 85.4801 38.2388 84.7164 38.2388ZM84.7164 44.3979C83.961 44.3979 83.3966 43.8252 83.3966 43.0864C83.3966 42.3477 83.961 41.7749 84.7164 41.7749C85.4801 41.7749 86.0362 42.3477 86.0362 43.0864C86.0362 43.8252 85.4801 44.3979 84.7164 44.3979ZM93.4955 46V43.7007H87.6352V41.9492C89.1874 39.2515 90.8891 36.4956 92.516 34.022H95.5458V41.9326H97.1562V43.7007H95.5458V46H93.4955ZM89.6273 41.9824H93.5287V35.7319H93.4042C92.1757 37.6079 90.7895 39.8242 89.6273 41.8579V41.9824ZM101.32 46V36.1304H101.179L98.1989 38.2388V36.2217L101.328 34.022H103.462V46H101.32Z" fill="#0D0D0E"/>
    <defs>
    <filter id="filter0_f_2201_70" x="412" y="247" width="3" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter1_f_2201_70" x="412" y="247" width="3" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter2_f_2201_70" x="412" y="244" width="5" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter3_f_2201_70" x="0" y="149" width="3" height="8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter4_f_2201_70" x="0" y="151" width="3" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter5_f_2201_70" x="-2" y="146" width="5" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter6_f_2201_70" x="0" y="210" width="3" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter7_f_2201_70" x="0" y="211" width="3" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter8_f_2201_70" x="-2" y="207" width="5" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter9_f_2201_70" x="0" y="283" width="3" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter10_f_2201_70" x="0" y="284" width="3" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter11_f_2201_70" x="-2" y="280" width="5" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter12_f_2201_70" x="-1" y="-4" width="417" height="851" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter13_f_2201_70" x="1" y="-2" width="413" height="847" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <filter id="filter14_f_2201_70" x="6" y="3" width="403" height="836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2201_70"/>
    </filter>
    <linearGradient id="paint0_linear_2201_70" x1="412.5" y1="345" x2="412.5" y2="340.5" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_2201_70" x1="410" y1="345" x2="413.5" y2="345" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#AEAEAE" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint2_linear_2201_70" x1="412.5" y1="250.5" x2="412.5" y2="246" gradientUnits="userSpaceOnUse">
    <stop stop-opacity="0"/>
    <stop offset="1"/>
    </linearGradient>
    <linearGradient id="paint3_linear_2201_70" x1="2.5" y1="149" x2="2.5" y2="152" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint4_linear_2201_70" x1="5" y1="149" x2="1.5" y2="149" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#AEAEAE" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint5_linear_2201_70" x1="2.5" y1="174.697" x2="2.5" y2="180" gradientUnits="userSpaceOnUse">
    <stop stop-opacity="0"/>
    <stop offset="1"/>
    </linearGradient>
    <linearGradient id="paint6_linear_2201_70" x1="2.5" y1="209" x2="2.5" y2="213" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint7_linear_2201_70" x1="5" y1="209" x2="1.5" y2="209" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#AEAEAE" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint8_linear_2201_70" x1="2.5" y1="261" x2="2.5" y2="265" gradientUnits="userSpaceOnUse">
    <stop stop-opacity="0"/>
    <stop offset="1"/>
    </linearGradient>
    <linearGradient id="paint9_linear_2201_70" x1="2.5" y1="282" x2="2.5" y2="286" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint10_linear_2201_70" x1="5" y1="282" x2="1.5" y2="282" gradientUnits="userSpaceOnUse">
    <stop/>
    <stop offset="1" stop-color="#AEAEAE" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="paint11_linear_2201_70" x1="2.5" y1="334" x2="2.5" y2="338" gradientUnits="userSpaceOnUse">
    <stop stop-opacity="0"/>
    <stop offset="1"/>
    </linearGradient>
    <linearGradient id="paint12_linear_2201_70" x1="324" y1="0" x2="324" y2="4" gradientUnits="userSpaceOnUse">
    <stop stop-color="#817E73"/>
    <stop offset="1" stop-color="#C3BEAC"/>
    </linearGradient>
    <linearGradient id="paint13_linear_2201_70" x1="6" y1="87" x2="6" y2="91" gradientUnits="userSpaceOnUse">
    <stop stop-color="#817E73"/>
    <stop offset="1" stop-color="#C3BEAC"/>
    </linearGradient>
    <linearGradient id="paint14_linear_2201_70" x1="3" y1="759" x2="7" y2="759" gradientUnits="userSpaceOnUse">
    <stop stop-color="#817E73"/>
    <stop offset="1" stop-color="#C3BEAC"/>
    </linearGradient>
    <linearGradient id="paint15_linear_2201_70" x1="68.5" y1="843" x2="68.5" y2="839" gradientUnits="userSpaceOnUse">
    <stop stop-color="#817E73"/>
    <stop offset="1" stop-color="#C3BEAC"/>
    </linearGradient>
    <linearGradient id="paint16_linear_2201_70" x1="412" y1="759" x2="408" y2="759" gradientUnits="userSpaceOnUse">
    <stop stop-color="#817E73"/>
    <stop offset="1" stop-color="#C3BEAC"/>
    </linearGradient>
    <clipPath id="clip0_2201_70">
    <path d="M415 344C415 345.105 414.105 346 413 346L410 346L410 246L413 246C414.105 246 415 246.895 415 248L415 344Z" fill="white"/>
    </clipPath>
    <clipPath id="clip1_2201_70">
    <path d="M0 151C0 149.895 0.895431 149 2 149H5V180H2C0.89543 180 0 179.105 0 178V151Z" fill="white"/>
    </clipPath>
    <clipPath id="clip2_2201_70">
    <path d="M0 211C0 209.895 0.895431 209 2 209H5V265H2C0.89543 265 0 264.105 0 263V211Z" fill="white"/>
    </clipPath>
    <clipPath id="clip3_2201_70">
    <path d="M0 284C0 282.895 0.895431 282 2 282H5V338H2C0.89543 338 0 337.105 0 336V284Z" fill="white"/>
    </clipPath>
    <clipPath id="clip4_2201_70">
    <rect x="3" width="409" height="843" rx="62" fill="white"/>
    </clipPath>
    <clipPath id="clip5_2201_70">
    <rect x="7" y="4" width="401" height="835" rx="58" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  </div>
</div>
`;var p=typeof window<"u"&&window?.HTMLElement,r=class extends p{constructor(){super();let t=document.createElement("style");t.innerHTML=`
      :host {
        display: inline-block;
        pointer-events: none;

        --width: auto;
      }

      .container {
        position: relative;
      }

      .screenshot {
        position: absolute;
        left: 3.4%;
        right: 3.4%;
        top: 1.32%;
        bottom: 1.32%;
        overflow: hidden;
        border-radius: calc(var(--width) * 0.122126436781609);
        pointer-events: all;
      }

      .frame {
        width: 100%;
        position: relative;
        top: 0;
        line-height: 0;
      }
    `;let e=this.attachShadow({mode:"open"});this.getAttribute("nonce")&&t.setAttribute("nonce",this.getAttribute("nonce"));let o=this.getAttribute("mode")??"light",i=s;o==="dark"&&(i=i.replace(/#0D0D0E/g,"#ffffff")),e.appendChild(t),e.innerHTML=e.innerHTML+i;}connectedCallback(){new ResizeObserver(this.resetWidth.bind(this)).observe(this),this.resetWidth(),this.setAttribute("rendered","");}resetWidth(){this.style.setProperty("--width",`${this.clientWidth}px`);}};typeof window<"u"&&!window.customElements.get("iphone-16-max")&&window.customElements.define("iphone-16-max",r);var a=`
<div class="container">
  <div class="screenshot">
    <slot />
  </div>
  <div class="frame">
<svg width="100%" viewBox="0 0 353 745" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M66.7227 3.70581C31.3764 3.70581 2.72266 32.3596 2.72266 67.7058V679.706C2.72266 715.052 31.3764 743.706 66.7227 743.706H282.723C318.069 743.706 346.723 715.052 346.723 679.706V67.7058C346.723 32.3596 318.069 3.70581 282.723 3.70581H66.7227ZM59 16C34.6995 16 15 35.6995 15 60V686C15 710.301 34.6995 730 59 730H291C315.301 730 335 710.301 335 686V60C335 35.6995 315.301 16 291 16H59Z" fill="black"/>
<path d="M350 202C351.105 202 352 202.895 352 204V256C352 257.105 351.105 258 350 258V202Z" fill="url(#paint0_linear_2202_14)"/>
<path d="M350 296C351.105 296 352 296.895 352 298V398C352 399.105 351.105 400 350 400V296Z" fill="url(#paint1_linear_2202_14)"/>
<rect x="60" y="1" width="230" height="7" fill="url(#paint2_linear_2202_14)"/>
<rect x="60" y="738" width="230" height="7" fill="url(#paint3_linear_2202_14)"/>
<rect y="685" width="624" height="7.00003" transform="rotate(-90 0 685)" fill="url(#paint4_linear_2202_14)"/>
<rect x="350" y="61" width="624" height="7.00003" transform="rotate(90 350 61)" fill="url(#paint5_linear_2202_14)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60 738C31.0051 738 7 713.995 7 685H0C0 717.861 27.1391 745 60 745V738Z" fill="url(#paint6_radial_2202_14)"/>
<path d="M20.9571 727.678C32.7484 739.525 46.219 744 60 744V740C43.0185 740 29.4497 732.108 21.9404 726.633C19.2414 724.666 18.6008 725.311 20.9571 727.678Z" fill="url(#paint7_linear_2202_14)"/>
<path d="M14.8232 720.893C4.70757 709.334 1.00012 695.669 1.00012 685L5.52737 685C5.52737 700.554 11.458 712.762 15.9758 719.92C17.7995 722.809 17.0732 723.465 14.8232 720.893Z" fill="url(#paint8_linear_2202_14)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M290 738C318.995 738 343 713.995 343 685H350C350 717.861 322.861 745 290 745V738Z" fill="url(#paint9_radial_2202_14)"/>
<path d="M329.043 727.678C317.252 739.525 303.781 744 290 744V740C306.981 740 320.55 732.108 328.06 726.633C330.759 724.666 331.399 725.311 329.043 727.678Z" fill="url(#paint10_linear_2202_14)"/>
<path d="M335.177 720.893C345.292 709.334 349 695.669 349 685L344.473 685C344.473 700.554 338.542 712.762 334.024 719.92C332.201 722.809 332.927 723.465 335.177 720.893Z" fill="url(#paint11_linear_2202_14)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60 8C31.0051 8 7 32.0051 7 61H0C0 28.1391 27.1391 1 60 1V8Z" fill="url(#paint12_radial_2202_14)"/>
<path d="M20.9571 18.3218C32.7484 6.47457 46.219 2 60 2V6C43.0185 6 29.4497 13.8918 21.9404 19.3666C19.2414 21.3344 18.6008 20.6893 20.9571 18.3218Z" fill="url(#paint13_linear_2202_14)"/>
<path d="M14.8232 25.1066C4.70757 36.6663 1.00012 50.3312 1.00012 61L5.52737 61C5.52737 45.4457 11.458 33.2377 15.9758 26.0799C17.7995 23.1906 17.0732 22.5353 14.8232 25.1066Z" fill="url(#paint14_linear_2202_14)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M290 8C318.995 8 343 32.0051 343 61H350C350 28.1391 322.861 1 290 1V8Z" fill="url(#paint15_radial_2202_14)"/>
<path d="M329.043 18.3218C317.252 6.47457 303.781 2 290 2V6C306.981 6 320.55 13.8918 328.06 19.3666C330.759 21.3344 331.399 20.6893 329.043 18.3218Z" fill="url(#paint16_linear_2202_14)"/>
<path d="M335.177 25.1066C345.292 36.6663 349 50.3312 349 61L344.473 61C344.473 45.4457 338.542 33.2377 334.024 26.0799C332.201 23.1906 332.927 22.5353 335.177 25.1066Z" fill="url(#paint17_linear_2202_14)"/>
<rect y="116" width="7" height="8" fill="black" fill-opacity="0.2"/>
<rect width="7" height="8" transform="matrix(1 0 0 -1 0 670)" fill="black" fill-opacity="0.2"/>
<rect x="343" y="116" width="7" height="8" fill="black" fill-opacity="0.2"/>
<rect width="7" height="8" transform="matrix(1 0 0 -1 343 670)" fill="black" fill-opacity="0.2"/>
<rect x="171" y="8" width="7" height="8" transform="rotate(-90 171 8)" fill="black" fill-opacity="0.2"/>
<rect width="7" height="8" transform="matrix(-4.37114e-08 1 1 4.37114e-08 212.5 738)" fill="black" fill-opacity="0.2"/>
<path d="M40.294 46.0555C40.0055 46.0555 39.7129 46.0124 39.4163 45.9261C39.1197 45.8398 38.8392 45.7104 38.5747 45.5379C38.3182 45.3575 38.0897 45.1301 37.8893 44.8556C37.6889 44.5811 37.5406 44.2556 37.4445 43.8792L38.6468 43.4086C38.751 43.8243 38.9394 44.1655 39.2119 44.4321C39.4925 44.6909 39.8492 44.8203 40.282 44.8203C40.4984 44.8203 40.7028 44.785 40.8952 44.7144C41.0876 44.636 41.2519 44.5341 41.3882 44.4086C41.5244 44.2752 41.6326 44.1184 41.7128 43.938C41.793 43.7576 41.833 43.5577 41.833 43.3381C41.833 43.1185 41.793 42.9185 41.7128 42.7381C41.6407 42.5499 41.5365 42.3891 41.4002 42.2558C41.2639 42.1225 41.0996 42.0205 40.9072 41.9499C40.7148 41.8715 40.5064 41.8323 40.282 41.8323C40.0175 41.8323 39.777 41.8911 39.5606 42.0088C39.3442 42.1185 39.1638 42.2636 39.0195 42.444L37.697 41.8676L38.1899 37.8208H42.6747V39.009H39.3081L39.0075 41.1029L39.0797 41.1265C39.256 40.9931 39.4604 40.8794 39.6929 40.7853C39.9253 40.6912 40.2099 40.6442 40.5465 40.6442C40.8912 40.6442 41.2198 40.7108 41.5324 40.8441C41.8531 40.9696 42.1336 41.15 42.3741 41.3853C42.6146 41.6205 42.8069 41.9029 42.9512 42.2323C43.0955 42.5617 43.1676 42.9263 43.1676 43.3263C43.1676 43.7184 43.0955 44.0831 42.9512 44.4203C42.8069 44.7497 42.6065 45.036 42.35 45.2791C42.0935 45.5222 41.7889 45.7144 41.4363 45.8555C41.0916 45.9888 40.7108 46.0555 40.294 46.0555Z" fill="#222227"/>
<path d="M45.2532 45.9379C44.9967 45.9379 44.7762 45.8516 44.5919 45.6791C44.4155 45.4987 44.3273 45.283 44.3273 45.0321C44.3273 44.7811 44.4155 44.5654 44.5919 44.385C44.7762 44.2047 44.9967 44.1145 45.2532 44.1145C45.5097 44.1145 45.7301 44.2047 45.9144 44.385C46.0988 44.5654 46.191 44.7811 46.191 45.0321C46.191 45.283 46.0988 45.4987 45.9144 45.6791C45.7301 45.8516 45.5097 45.9379 45.2532 45.9379ZM45.2532 41.8088C44.9967 41.8088 44.7762 41.7225 44.5919 41.55C44.4155 41.3696 44.3273 41.1539 44.3273 40.903C44.3273 40.652 44.4155 40.4402 44.5919 40.2677C44.7762 40.0873 44.9967 39.9971 45.2532 39.9971C45.5097 39.9971 45.7301 40.0873 45.9144 40.2677C46.0988 40.4402 46.191 40.652 46.191 40.903C46.191 41.1539 46.0988 41.3696 45.9144 41.55C45.7301 41.7225 45.5097 41.8088 45.2532 41.8088Z" fill="#222227"/>
<path d="M49.2807 45.8673V39.3972L47.7538 40.0442L47.2488 38.9266L49.6655 37.8208H50.6153V45.8673H49.2807Z" fill="#222227"/>
<path d="M54.8752 46.0555C54.5867 46.0555 54.2981 46.0163 54.0095 45.9379C53.721 45.8594 53.4484 45.7379 53.1919 45.5732C52.9435 45.4007 52.719 45.185 52.5186 44.9262C52.3182 44.6674 52.1659 44.3576 52.0617 43.9968L53.3122 43.491C53.4244 43.9145 53.6168 44.24 53.8893 44.4674C54.1618 44.6948 54.4905 44.8085 54.8752 44.8085C55.0676 44.8085 55.252 44.7772 55.4283 44.7144C55.6127 44.6517 55.773 44.5654 55.9093 44.4556C56.0455 44.338 56.1537 44.2047 56.2339 44.0557C56.314 43.8988 56.3541 43.7263 56.3541 43.538C56.3541 43.3498 56.31 43.1773 56.2219 43.0204C56.1417 42.8636 56.0295 42.7303 55.8852 42.6205C55.7409 42.5107 55.5686 42.4244 55.3682 42.3617C55.1758 42.2989 54.9674 42.2676 54.743 42.2676H54.0336V41.0559H54.6708C54.8632 41.0559 55.0396 41.0324 55.1999 40.9853C55.3682 40.9304 55.5165 40.8559 55.6447 40.7618C55.773 40.6677 55.8732 40.55 55.9453 40.4089C56.0175 40.2599 56.0535 40.0913 56.0535 39.903C56.0535 39.5815 55.9333 39.3305 55.6928 39.1501C55.4604 38.9619 55.1638 38.8678 54.8031 38.8678C54.6027 38.8678 54.4264 38.8953 54.2741 38.9502C54.1298 39.0051 54.0055 39.0796 53.9013 39.1737C53.7971 39.2678 53.709 39.3737 53.6368 39.4913C53.5727 39.6011 53.5206 39.7148 53.4805 39.8324L52.2541 39.3266C52.3182 39.1384 52.4184 38.9462 52.5547 38.7502C52.691 38.5463 52.8633 38.362 53.0717 38.1973C53.2801 38.0326 53.5246 37.8993 53.8051 37.7973C54.0937 37.6875 54.4264 37.6326 54.8031 37.6326C55.1878 37.6326 55.5405 37.6875 55.8612 37.7973C56.1818 37.9071 56.4583 38.06 56.6908 38.2561C56.9232 38.4522 57.1036 38.6835 57.2318 38.9502C57.3601 39.2168 57.4242 39.507 57.4242 39.8207C57.4242 40.0481 57.3922 40.2559 57.328 40.4442C57.2719 40.6324 57.1918 40.801 57.0876 40.95C56.9834 41.0912 56.8671 41.2127 56.7389 41.3147C56.6106 41.4166 56.4784 41.5029 56.3421 41.5735V41.6441C56.5265 41.7225 56.7028 41.8245 56.8711 41.9499C57.0395 42.0676 57.1837 42.2087 57.304 42.3734C57.4322 42.5381 57.5324 42.7263 57.6046 42.9381C57.6767 43.142 57.7128 43.3655 57.7128 43.6086C57.7128 43.9615 57.6406 44.2909 57.4964 44.5968C57.3521 44.8948 57.1517 45.1536 56.8952 45.3732C56.6467 45.585 56.3501 45.7496 56.0054 45.8673C55.6608 45.9928 55.284 46.0555 54.8752 46.0555Z" fill="#222227"/>
<path d="M61.7001 45.8673V37.4444H64.6819C65.0666 37.4444 65.4273 37.5071 65.764 37.6326C66.1087 37.7581 66.4093 37.9346 66.6658 38.162C66.9223 38.3894 67.1227 38.6639 67.2669 38.9855C67.4192 39.2992 67.4954 39.6481 67.4954 40.0324C67.4954 40.4089 67.4192 40.7579 67.2669 41.0794C67.1227 41.3931 66.9223 41.6637 66.6658 41.8911C66.4093 42.1185 66.1087 42.295 65.764 42.4205C65.4273 42.546 65.0666 42.6087 64.6819 42.6087H63.0587V45.8673H61.7001ZM64.718 41.3382C64.9424 41.3382 65.1428 41.3029 65.3191 41.2323C65.4955 41.1539 65.6438 41.052 65.764 40.9265C65.8842 40.801 65.9764 40.6598 66.0405 40.503C66.1047 40.3461 66.1367 40.1893 66.1367 40.0324C66.1367 39.8677 66.1047 39.707 66.0405 39.5501C65.9764 39.3933 65.8842 39.256 65.764 39.1384C65.6438 39.0129 65.4955 38.911 65.3191 38.8325C65.1428 38.7541 64.9424 38.7149 64.718 38.7149H63.0587V41.3382H64.718Z" fill="#222227"/>
<path d="M68.6511 37.4444H70.0098L72.8233 42.2323H72.8954L75.7089 37.4444H77.0556V45.8673H75.7089V41.2912L75.7811 39.8795H75.7089L73.2561 44.0792H72.4506L70.0098 39.8795H69.9377L70.0098 41.2912V45.8673H68.6511V37.4444Z" fill="#222227"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M232.667 36.2939C232.896 36.0646 232.896 35.6929 232.667 35.4636C232.437 35.2343 232.066 35.2343 231.836 35.4636L230.075 37.225C229.846 37.4543 229.846 37.826 230.075 38.0553C230.304 38.2846 230.676 38.2846 230.905 38.0553L232.667 36.2939ZM240.886 35.4636C240.657 35.2343 240.285 35.2343 240.056 35.4636C239.827 35.6929 239.827 36.0646 240.056 36.2939L241.817 38.0553C242.047 38.2846 242.418 38.2846 242.648 38.0553C242.877 37.826 242.877 37.4543 242.648 37.225L240.886 35.4636ZM236.361 37.6402C233.767 37.6402 231.664 39.7431 231.664 42.3371C231.664 44.9312 233.767 47.0341 236.361 47.0341C238.955 47.0341 241.058 44.9312 241.058 42.3371C241.058 39.7431 238.955 37.6402 236.361 37.6402ZM230.49 42.3371C230.49 39.0946 233.119 36.4659 236.361 36.4659C239.604 36.4659 242.232 39.0946 242.232 42.3371C242.232 45.5797 239.604 48.2084 236.361 48.2084C233.119 48.2084 230.49 45.5797 230.49 42.3371ZM236.361 38.8144C236.685 38.8144 236.948 39.0773 236.948 39.4015V42.023L238.448 43.0228C238.718 43.2027 238.791 43.5672 238.611 43.837C238.431 44.1068 238.067 44.1797 237.797 43.9999L236.297 43C236.136 42.8928 236.004 42.7473 235.913 42.5769C235.822 42.4065 235.774 42.2163 235.774 42.023V39.4015C235.774 39.0773 236.037 38.8144 236.361 38.8144Z" fill="#222227"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M295.692 37.4445C295.692 37.0165 295.345 36.6695 294.917 36.6695C294.489 36.6695 294.142 37.0165 294.142 37.4445V46.0556C294.142 46.4837 294.489 46.8306 294.917 46.8306C295.345 46.8306 295.692 46.4837 295.692 46.0556V37.4445ZM289.922 42.0083C289.922 41.5802 289.575 41.2333 289.147 41.2333C288.719 41.2333 288.372 41.5802 288.372 42.0083V46.0555C288.372 46.4835 288.719 46.8305 289.147 46.8305C289.575 46.8305 289.922 46.4835 289.922 46.0555V42.0083ZM286.306 43.5584C286.734 43.5584 287.081 43.9054 287.081 44.3334V46.0556C287.081 46.4837 286.734 46.8306 286.306 46.8306C285.878 46.8306 285.531 46.4837 285.531 46.0556V44.3334C285.531 43.9054 285.878 43.5584 286.306 43.5584ZM292.85 39.7695C292.85 39.3415 292.503 38.9945 292.075 38.9945C291.647 38.9945 291.3 39.3415 291.3 39.7695V46.0556C291.3 46.4836 291.647 46.8306 292.075 46.8306C292.503 46.8306 292.85 46.4836 292.85 46.0556V39.7695Z" fill="#222227"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M269.492 38.5058C270.429 38.1165 271.434 37.9167 272.448 37.918L272.449 37.918C274.584 37.918 276.514 38.7846 277.911 40.1868C278.179 40.4564 278.615 40.4574 278.885 40.1889C279.154 39.9204 279.155 39.4843 278.887 39.2147C277.243 37.5635 274.965 36.5404 272.45 36.5403L272.45 36.5403L272.449 37.2291V36.5403L272.45 36.5403C271.253 36.5388 270.068 36.7744 268.963 37.2334C267.858 37.6926 266.855 38.3662 266.011 39.2153C265.743 39.4852 265.745 39.9214 266.014 40.1895C266.284 40.4576 266.721 40.4562 266.989 40.1862C267.704 39.4662 268.555 38.8951 269.492 38.5058ZM270.437 40.9115C271.073 40.64 271.757 40.5005 272.449 40.5014H272.45C273.142 40.5005 273.826 40.64 274.462 40.9115C275.098 41.1829 275.672 41.5806 276.149 42.0805C276.412 42.3556 276.848 42.3656 277.123 42.1028C277.398 41.84 277.408 41.4039 277.145 41.1288C276.539 40.4941 275.81 39.989 275.003 39.6443C274.196 39.2998 273.327 39.1226 272.449 39.1236L272.45 39.1236L272.449 39.8125L272.449 39.1236L272.449 39.1236C271.572 39.1226 270.703 39.2998 269.896 39.6443C269.089 39.989 268.36 40.4941 267.753 41.1288C267.491 41.4039 267.5 41.84 267.776 42.1028C268.051 42.3656 268.487 42.3556 268.75 42.0805C269.227 41.5806 269.801 41.1829 270.437 40.9115ZM271.4 43.3105C271.73 43.1613 272.087 43.0843 272.449 43.0847L272.449 43.0847C273.211 43.0847 273.893 43.4191 274.36 43.9507C274.611 44.2366 275.046 44.2651 275.332 44.0141C275.618 43.7632 275.646 43.328 275.396 43.042C274.679 42.2251 273.624 41.707 272.45 41.7069L272.45 41.7069L272.449 42.3958V41.7069H272.45C271.892 41.7064 271.34 41.8252 270.832 42.0556C270.323 42.286 269.87 42.6226 269.503 43.0428C269.252 43.3291 269.281 43.7643 269.567 44.0148C269.854 44.2653 270.289 44.2362 270.54 43.9499C270.778 43.6778 271.071 43.4598 271.4 43.3105ZM273.389 45.3666C273.389 45.8422 273.003 46.2278 272.528 46.2278C272.052 46.2278 271.667 45.8422 271.667 45.3666C271.667 44.8911 272.052 44.5055 272.528 44.5055C273.003 44.5055 273.389 44.8911 273.389 45.3666Z" fill="#222227"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M254.186 35.782C254.382 35.6861 254.617 35.7068 254.793 35.8355L258.519 38.5662C258.667 38.6748 258.753 38.846 258.75 39.027C258.748 39.208 258.657 39.3769 258.506 39.4815L255.228 41.75L258.506 44.0185C258.657 44.1232 258.748 44.292 258.75 44.473C258.753 44.654 258.667 44.8252 258.519 44.9338L254.793 47.6645C254.617 47.7932 254.382 47.8139 254.186 47.718C253.989 47.6221 253.865 47.4259 253.865 47.2114V42.6935L251.054 44.6395C250.793 44.8203 250.431 44.7599 250.246 44.5047C250.061 44.2494 250.123 43.8959 250.384 43.7151L253.223 41.75L250.384 39.7849C250.123 39.6041 250.061 39.2506 250.246 38.9953C250.431 38.7401 250.793 38.6797 251.054 38.8605L253.865 40.8065V36.2886C253.865 36.0741 253.989 35.878 254.186 35.782ZM255.025 42.997L257.187 44.4938L255.025 46.0787V42.997ZM255.025 40.5031V37.4213L257.187 39.0062L255.025 40.5031Z" fill="#222227"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M302.803 37.7966C303.167 37.4333 303.66 37.2292 304.173 37.2292H311.923C312.437 37.2292 312.93 37.4333 313.294 37.7966C313.657 38.16 313.861 38.6528 313.861 39.1667V39.2775C314.131 39.3729 314.379 39.5279 314.585 39.7341C314.949 40.0975 315.153 40.5903 315.153 41.1042V42.3958C315.153 42.9097 314.949 43.4025 314.585 43.7658C314.379 43.9721 314.131 44.1271 313.861 44.2225V44.3333C313.861 44.8472 313.657 45.34 313.294 45.7033C312.93 46.0667 312.437 46.2708 311.923 46.2708H304.173C303.66 46.2708 303.167 46.0667 302.803 45.7033C302.44 45.34 302.236 44.8472 302.236 44.3333V39.1667C302.236 38.6528 302.44 38.16 302.803 37.7966ZM304.173 38.5208C304.002 38.5208 303.838 38.5889 303.717 38.71C303.596 38.8311 303.528 38.9954 303.528 39.1667V44.3333C303.528 44.5046 303.596 44.6689 303.717 44.79C303.838 44.9111 304.002 44.9792 304.173 44.9792H311.923C312.095 44.9792 312.259 44.9111 312.38 44.79C312.501 44.6689 312.569 44.5046 312.569 44.3333V43.6875C312.569 43.3308 312.858 43.0417 313.215 43.0417C313.386 43.0417 313.551 42.9736 313.672 42.8525C313.793 42.7314 313.861 42.5671 313.861 42.3958V41.1042C313.861 40.9329 313.793 40.7686 313.672 40.6475C313.551 40.5264 313.386 40.4583 313.215 40.4583C312.858 40.4583 312.569 40.1692 312.569 39.8125V39.1667C312.569 38.9954 312.501 38.8311 312.38 38.71C312.259 38.5889 312.095 38.5208 311.923 38.5208H304.173ZM305.465 39.8125C305.822 39.8125 306.111 40.1016 306.111 40.4583V43.0417C306.111 43.3983 305.822 43.6875 305.465 43.6875C305.108 43.6875 304.819 43.3983 304.819 43.0417V40.4583C304.819 40.1016 305.108 39.8125 305.465 39.8125ZM308.048 39.8125C308.405 39.8125 308.694 40.1016 308.694 40.4583V43.0417C308.694 43.3983 308.405 43.6875 308.048 43.6875C307.692 43.6875 307.403 43.3983 307.403 43.0417V40.4583C307.403 40.1016 307.692 39.8125 308.048 39.8125ZM310.632 39.8125C310.989 39.8125 311.278 40.1016 311.278 40.4583V43.0417C311.278 43.3983 310.989 43.6875 310.632 43.6875C310.275 43.6875 309.986 43.3983 309.986 43.0417V40.4583C309.986 40.1016 310.275 39.8125 310.632 39.8125Z" fill="#222227"/>
<g filter="url(#filter0_di_2202_14)">
<circle cx="175" cy="42" r="11" fill="#080808"/>
</g>
<g filter="url(#filter1_d_2202_14)">
<circle cx="175" cy="42" r="6" fill="black"/>
<circle cx="175" cy="42" r="5.5" stroke="white" stroke-opacity="0.1"/>
</g>
<circle cx="175" cy="42" r="4.5" fill="url(#paint18_linear_2202_14)" stroke="black"/>
<g style="mix-blend-mode:lighten">
<path d="M176.562 44.5619C177.424 44.0349 178 43.0847 178 42C178 40.3431 176.657 39 175 39C173.915 39 172.965 39.5757 172.438 40.4381C172.893 40.1602 173.428 40 174 40C175.657 40 177 41.3431 177 43C177 43.5722 176.84 44.1069 176.562 44.5619Z" fill="url(#paint19_linear_2202_14)"/>
</g>
<g style="mix-blend-mode:screen">
<path d="M172.264 40.7668C172.095 41.143 172 41.5605 172 42C172 43.6569 173.343 45 175 45C175.44 45 175.857 44.9055 176.233 44.7356C174.34 44.1532 172.847 42.6596 172.264 40.7668Z" fill="url(#paint20_linear_2202_14)"/>
</g>
<defs>
<filter id="filter0_di_2202_14" x="164" y="31" width="22" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2202_14"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2202_14" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_2202_14"/>
</filter>
<filter id="filter1_d_2202_14" x="169" y="36" width="12" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2202_14"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2202_14" result="shape"/>
</filter>
<linearGradient id="paint0_linear_2202_14" x1="351" y1="202" x2="351" y2="258" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEF7F0"/>
<stop offset="0.055" stop-color="#8D8072"/>
<stop offset="0.0793102" stop-color="#988C81"/>
<stop offset="0.100079" stop-color="#A8998A"/>
<stop offset="0.939936" stop-color="#7E7367"/>
<stop offset="0.946426" stop-color="#F8F2ED"/>
<stop offset="1" stop-color="#FEF5EB"/>
</linearGradient>
<linearGradient id="paint1_linear_2202_14" x1="351" y1="296" x2="351" y2="400" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9F1E9"/>
<stop offset="0.04" stop-color="#8C8073"/>
<stop offset="0.05" stop-color="#A3998F"/>
<stop offset="0.100079" stop-color="#A99989"/>
<stop offset="0.97" stop-color="#8C8073"/>
<stop offset="0.98" stop-color="#F0E6DB"/>
<stop offset="1" stop-color="#F0E6DB"/>
</linearGradient>
<linearGradient id="paint2_linear_2202_14" x1="172.641" y1="8" x2="172.641" y2="1" gradientUnits="userSpaceOnUse">
<stop stop-color="#8C8073"/>
<stop offset="0.08" stop-color="#67594C"/>
<stop offset="0.22" stop-color="#3C3228"/>
<stop offset="0.285714" stop-color="#2E261F"/>
<stop offset="0.286272" stop-color="#F3E5D7"/>
<stop offset="0.856585" stop-color="#FEFCFA"/>
<stop offset="0.856585" stop-color="#66594C"/>
<stop offset="1" stop-color="#988C81"/>
</linearGradient>
<linearGradient id="paint3_linear_2202_14" x1="175" y1="738" x2="175" y2="745" gradientUnits="userSpaceOnUse">
<stop stop-color="#8C7377"/>
<stop offset="0.08" stop-color="#674C51"/>
<stop offset="0.22" stop-color="#3C282B"/>
<stop offset="0.285714" stop-color="#2E1F21"/>
<stop offset="0.286272" stop-color="#F3D7DB"/>
<stop offset="0.856585" stop-color="#FEFAFB"/>
<stop offset="0.856585" stop-color="#664C50"/>
<stop offset="1" stop-color="#988184"/>
</linearGradient>
<linearGradient id="paint4_linear_2202_14" x1="306" y1="692" x2="306" y2="685" gradientUnits="userSpaceOnUse">
<stop stop-color="#988C81"/>
<stop offset="0.1" stop-color="#67594C"/>
<stop offset="0.2099" stop-color="#4D4033"/>
<stop offset="0.21" stop-color="#EBDED1"/>
<stop offset="0.76" stop-color="#FEF7F0"/>
<stop offset="0.858259" stop-color="#FEFAF6"/>
<stop offset="0.86" stop-color="#584D41"/>
<stop offset="0.98" stop-color="#988C81"/>
</linearGradient>
<linearGradient id="paint5_linear_2202_14" x1="656" y1="68" x2="656" y2="61" gradientUnits="userSpaceOnUse">
<stop stop-color="#988C81"/>
<stop offset="0.1" stop-color="#67594C"/>
<stop offset="0.2099" stop-color="#4D4033"/>
<stop offset="0.21" stop-color="#EBDED1"/>
<stop offset="0.76" stop-color="#FEF7F0"/>
<stop offset="0.858259" stop-color="#FEFAF6"/>
<stop offset="0.86" stop-color="#584D41"/>
<stop offset="0.98" stop-color="#988C81"/>
</linearGradient>
<radialGradient id="paint6_radial_2202_14" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.5 685.5) rotate(136.675) scale(60.4835 60.4836)">
<stop offset="0.867457" stop-color="#988C81"/>
<stop offset="0.879909" stop-color="#67594C"/>
<stop offset="0.902341" stop-color="#30261D"/>
<stop offset="0.946821" stop-color="#30261D"/>
<stop offset="0.967149" stop-color="#584D41"/>
<stop offset="0.981589" stop-color="#988C81"/>
</radialGradient>
<linearGradient id="paint7_linear_2202_14" x1="37.2936" y1="721.5" x2="37.2937" y2="743.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<linearGradient id="paint8_linear_2202_14" x1="20.5124" y1="706.027" x2="1.08186" y2="706.027" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<radialGradient id="paint9_radial_2202_14" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290.5 685.5) rotate(43.3252) scale(60.4835 60.4836)">
<stop offset="0.867457" stop-color="#988C81"/>
<stop offset="0.879909" stop-color="#67594C"/>
<stop offset="0.902341" stop-color="#30261D"/>
<stop offset="0.946821" stop-color="#30261D"/>
<stop offset="0.967149" stop-color="#584D41"/>
<stop offset="0.981589" stop-color="#988C81"/>
</radialGradient>
<linearGradient id="paint10_linear_2202_14" x1="312.706" y1="721.5" x2="312.706" y2="743.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<linearGradient id="paint11_linear_2202_14" x1="329.488" y1="706.027" x2="348.918" y2="706.027" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<radialGradient id="paint12_radial_2202_14" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.5 60.5001) rotate(-136.675) scale(60.4835 60.4836)">
<stop offset="0.867457" stop-color="#988C81"/>
<stop offset="0.879909" stop-color="#67594C"/>
<stop offset="0.902341" stop-color="#30261D"/>
<stop offset="0.946821" stop-color="#30261D"/>
<stop offset="0.967149" stop-color="#584D41"/>
<stop offset="0.981589" stop-color="#988C81"/>
</radialGradient>
<linearGradient id="paint13_linear_2202_14" x1="37.2936" y1="24.5" x2="37.2937" y2="2.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<linearGradient id="paint14_linear_2202_14" x1="20.5124" y1="39.9734" x2="1.08186" y2="39.9735" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<radialGradient id="paint15_radial_2202_14" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(290.5 60.5001) rotate(-43.3252) scale(60.4835 60.4836)">
<stop offset="0.867457" stop-color="#988C81"/>
<stop offset="0.879909" stop-color="#67594C"/>
<stop offset="0.902341" stop-color="#30261D"/>
<stop offset="0.946821" stop-color="#30261D"/>
<stop offset="0.967149" stop-color="#584D41"/>
<stop offset="0.981589" stop-color="#988C81"/>
</radialGradient>
<linearGradient id="paint16_linear_2202_14" x1="312.706" y1="24.5" x2="312.706" y2="2.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<linearGradient id="paint17_linear_2202_14" x1="329.488" y1="39.9734" x2="348.918" y2="39.9735" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D8C7B"/>
<stop offset="0.83" stop-color="#F2E6D9"/>
<stop offset="0.95" stop-color="#FFF7EE"/>
<stop offset="1" stop-color="#FEFAF5"/>
</linearGradient>
<linearGradient id="paint18_linear_2202_14" x1="178.5" y1="38.5" x2="172" y2="45" gradientUnits="userSpaceOnUse">
<stop stop-color="#70665C"/>
<stop offset="0.495"/>
<stop offset="0.77" stop-color="#1D1A16"/>
<stop offset="1" stop-color="#584D41"/>
</linearGradient>
<linearGradient id="paint19_linear_2202_14" x1="177.083" y1="39.7091" x2="173.11" y2="43.6825" gradientUnits="userSpaceOnUse">
<stop stop-color="#6A54AA"/>
<stop offset="0.475"/>
</linearGradient>
<linearGradient id="paint20_linear_2202_14" x1="177.1" y1="39.9" x2="173.2" y2="43.8" gradientUnits="userSpaceOnUse">
<stop offset="0.77"/>
<stop offset="1" stop-color="#47331F"/>
</linearGradient>
</defs>
</svg>
  </div>
</div>
`;var f=typeof window<"u"&&window?.HTMLElement,l=class extends f{constructor(){super();let t=document.createElement("style");t.innerHTML=`
      :host {
        display: inline-block;
        pointer-events: none;

        --width: auto;
      }

      .container {
        position: relative;
      }

      .screenshot {
        position: absolute;
        left: 4.1%;
        right: 4.8%;
        top: 2.05%;
        bottom: 1.8%;
        overflow: hidden;
        border-radius: calc(var(--width) * 0.126666666666667);
        pointer-events: all;
      }

      .frame {
        width: 100%;
        position: relative;
        top: 0;
        line-height: 0;
      }
    `;let e=this.attachShadow({mode:"open"});this.getAttribute("nonce")&&t.setAttribute("nonce",this.getAttribute("nonce"));let o=this.getAttribute("mode")??"light",i=a;o==="dark"&&(i=i.replace(/#222227/g,"#ffffff")),e.appendChild(t),e.innerHTML=e.innerHTML+i;}connectedCallback(){new ResizeObserver(this.resetWidth.bind(this)).observe(this),this.resetWidth(),this.setAttribute("rendered","");}resetWidth(){this.style.setProperty("--width",`${this.clientWidth}px`);}};typeof window<"u"&&!window.customElements.get("pixel-9-pro")&&window.customElements.define("pixel-9-pro",l);})();

const firstTranslationCongratulationCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}:host .phone{width:140px}:host .phone-contents-wrapper{background-color:#fff;height:100%;padding:6px;padding-top:24px;box-sizing:border-box;overflow:hidden}:host .phone-contents{display:flex;flex-direction:column;min-height:100%;justify-content:center;align-items:center}:host .emphasize{color:#000000;font-weight:bold}:host .row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:18px}:host p{margin-top:0;margin-bottom:8px}:host .small{font-size:12px}.svg{max-width:100px;width:100%}";

const VocablyFirstTranslationCongratulation = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '86d8b0cfe9758eeec9749c9005aa98e72c376f14' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '8bad77887378c997d7c512d43fa286d990b19ab2', class: "row" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '4c0d8947eab20e0a8298857f9ef1680ad1e3d656', class: "col" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("iphone-16-max", { key: '7134baa24a942d51bedbf7d5cc7e038599659cfd', class: "phone" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '304476d00bdfdba4acabba29a69807f357137731', class: "phone-contents-wrapper" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '1318a3f85e1b354eda968c8e2c8bcf6eeae9e50f', class: "phone-contents" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '7f691127697d79b47f741ca2d3382880d632bf4a', class: "emphasize small" }, this.card.data.source))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '3b8e286665c9b58bfb7cad70b4c147b466433b65', class: "col" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { key: '85cd66d511a2b003f2fca80375547cd959d9d037' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '711acbbd06ae67a8f680604f80f69189dcfd99ff', class: "emphasize" }, this.card.data.source), " is already on your phone."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { key: 'e0405b4eab322acaa399f5e9c94b575afe49a378' }, "Scan the QR code to learn it."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-qr-code", { key: '2810ba2ee3b12a15b265ce0cc69fa7216f820715', style: { width: '200px' } })))));
    }
};
VocablyFirstTranslationCongratulation.style = firstTranslationCongratulationCss;

const hintSelectorCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;visibility:visible !important;--hint-width:0px}.wrapper{position:relative}.hint{position:absolute;top:0;bottom:0;left:14px;display:inline-flex;align-items:center;font-size:14.4px !important;pointer-events:none;padding-right:4px}@media screen and (max-width: 600px){.shrink-small .hint{display:none}}.vocably-input-select{width:100%;color:#6a6a6a !important;font-size:14.4px !important;padding:10px 14px !important;border:0.6px solid #bababa !important;border-radius:8px !important;background-color:#fbfbfb;outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important;appearance:none !important;background:#fbfbfb url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important;padding-left:calc(var(--hint-width) + 14px) !important;font-weight:bold}@media screen and (max-width: 600px){.shrink-small .vocably-input-select{font-weight:normal}}";

const VocablyLanguageSelector = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.choose = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "choose");
        this.shrinkSmall = false;
        this.disabled = false;
    }
    componentDidLoad() {
        this.observeMutations();
        this.updateHintWidth();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.hintMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    observeMutations() {
        this.hintMutationObserver = new MutationObserver(() => {
            this.updateHintWidth();
        });
        if (!this.hintElement) {
            throw new Error(`Can't find hint element`);
        }
        this.hintMutationObserver.observe(this.hintElement, {
            childList: true,
            characterData: true,
            subtree: true,
        });
    }
    updateHintWidth() {
        if (this.hintElement) {
            this.el.style.setProperty('--hint-width', `${this.hintElement.offsetWidth}px`);
        }
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'cc61b0c9ff32a0dfd90d387e067bbf3edf2590ef', class: {
                wrapper: true,
                'shrink-small': this.shrinkSmall,
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { key: '9d1f453c51ee8287f69b795262c17fb0e2f33e4d', class: "vocably-input-select", disabled: this.disabled, onChange: (event) => this.choose.emit(event.target.value) }, this.optionGroups.map(([groupLabel, options]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, null, groupLabel !== '' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("optgroup", { label: groupLabel }, options.map(([value, label]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: value, selected: value === this.value }, label))))), groupLabel === '' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, null, options.map(([value, label]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: value, selected: value === this.value }, label))))))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '8e6534cbc31093c02cbdaf707f8874bf3682e70b', class: 'hint', ref: (el) => (this.hintElement = el) }, this.hint)));
    }
    get el() { return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyLanguageSelector.style = hintSelectorCss;

const iconArrowRightCss = ":host{display:inline-block;width:24px;height:24px;visibility:visible !important}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconArrowRight = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'ad31672175312d582f20dabab33c4596d466be71' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'e46f9006e160212c117ec5b7482084897c130266', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2855aae79c0232000cd3f61049113bf818037415', d: "M10,17L15,12L10,7V17Z" }))));
    }
};
VocablyIconArrowRight.style = iconArrowRightCss;

const iconBookmarkCheckCss = ":host{--color:#0050ff;--size:24px;display:inline-block;width:var(--size);height:var(--size);visibility:visible !important}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconBookmarkCheck = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'b87e619d5f6452cbf5b62a0c7bcda99796d85c7c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'c196fc3e9d55ccde6b7370df5ffa56438f3ae9f7', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bfe8b718ef5e74f7f01d273b3be7a3f6d5f3cb14', d: "M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,14L17.25,7.76L15.84,6.34L11,11.18L8.41,8.59L7,10L11,14Z" }))));
    }
};
VocablyIconBookmarkCheck.style = iconBookmarkCheckCss;

const iconCheckCss = ":host{display:inline-block;width:18px;height:18px}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconCheck = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '47f28bed4bce646eada7e76189fd3fcd12aeed93', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5e82077aa8a34d3b36e77de0aff3b0f2ee38b4a6', d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })));
    }
};
VocablyIconCheck.style = iconCheckCss;

const iconCloseCss = ":host{display:inline-block;width:18px;height:18px}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconClose = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'd7977f8e5c53684da7714b2a6f6e57a94e2c07bc', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fe863f85a54c14012c194324eb3c3fb9e1e201ea', d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })));
    }
};
VocablyIconClose.style = iconCloseCss;

const iconEditCss = ":host{display:inline-block;width:16px;height:16px;visibility:visible !important}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconRemove$3 = class VocablyIconRemove {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'edf1418c5c1e37cf211a8b2614a7a003aa4a45ff' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '78a1690e8b5d6c2ee12157884b6f2dca0f1016d2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'aacd3edd058c0f556d158681bee10bf43c157b5d', d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }))));
    }
};
VocablyIconRemove$3.style = iconEditCss;

const iconErrorCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#ff5e5e}";

const VocablyIconError = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '6299e1f851904e400b7755349dec602bf0d2b128' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '5ba79e1e6c0e337d817fe06b90b0f395aedb2b88', class: "svg", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6c7a3abdcb555e6c8dc87f77f9299d24b91806ba', d: "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" }))));
    }
};
VocablyIconError.style = iconErrorCss;

const iconPlayCircleCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#bababa}";

const VocablyIconPlayCircle = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'b75f4fa13a013322369e005bd3657f51baee1691' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '6ed9bf23f35d30a26fc6f15db65b15812c0ac5b0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fb99d889c2e16c606ff02efde80e1f82e7d1c8ca', d: "M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" }))));
    }
};
VocablyIconPlayCircle.style = iconPlayCircleCss;

const iconPlusCss = ":host{--color:#0050ff;display:inline-block;width:24px;height:24px;visibility:visible !important}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconPlus = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'f9db119cf567bf2950f7668d54da1aee264f69d2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'b5e2022811a009175c852438f6bd32cd6e2ef9e9', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f8dc37925a533f596ee29924c548d15ede5f4dc2', d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }))));
    }
};
VocablyIconPlus.style = iconPlusCss;

const iconRemoveCss = ":host{--color:#ff5e5e;--size:24px;display:inline-block;width:var(--size);height:var(--size);visibility:visible !important}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconRemove$2 = class VocablyIconRemove {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '761fbcff13b9eea0824225599ade5bf39c33b4fc' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'baeaf5844ef19038aa19ab41a24d8f359672b676', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5309ee9b28e4efdd3a27e37d302082592682c538', d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }))));
    }
};
VocablyIconRemove$2.style = iconRemoveCss;

const iconSpinCss = ":host{--size:24px;--color:$v-light-color-body;display:inline-block;visibility:visible !important;height:var(--size);width:var(--size)}.svg{width:var(--size);height:var(--size)}.svg circle{fill:var(--color)}.spinner_VpEe{animation:spinner_vXu6 1.2s cubic-bezier(0.52, 0.6, 0.25, 0.99) infinite}.spinner_eahp{animation-delay:0.4s}.spinner_f7Y2{animation-delay:0.8s}@keyframes spinner_vXu6{0%{r:0;opacity:1}100%{r:11px;opacity:0}}";

const VocablyIconSpin = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'b49aba86ed24ce48b8ed59a495517f5d48b5066e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'b1b649e281b8ed17d71953e36483bcdeba849ed0', class: "svg", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { key: '98daf2a087b38c537269cf7bc73f8e3038cec3d2', class: "spinner_VpEe", cx: "12", cy: "12", r: "0" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { key: '54ac7b23d37f1e67e91fd9fda84791c0a4551cf4', class: "spinner_VpEe spinner_eahp", cx: "12", cy: "12", r: "0" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { key: 'ac50a672913ed2efa75d7df8ab35a93a3554d2b5', class: "spinner_VpEe spinner_f7Y2", cx: "12", cy: "12", r: "0" }))));
    }
};
VocablyIconSpin.style = iconSpinCss;

const iconTagCss = ":host{display:inline-block;width:24px;height:24px}.svg{height:100%;width:auto;fill:#0050ff}";

const VocablyIconRemove$1 = class VocablyIconRemove {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '354355af158100fd039c81c4b5d7851b680c178a', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dc38e2dceac5108e8e41b3b6927905cf3f4a4dc3', d: "M21.41,11.58L12.41,2.58C12.04,2.21 11.53,2 11,2H4A2,2 0 0,0 2,4V11C2,11.53 2.21,12.04 2.59,12.41L3,12.81C3.9,12.27 4.94,12 6,12A6,6 0 0,1 12,18C12,19.06 11.72,20.09 11.18,21L11.58,21.4C11.95,21.78 12.47,22 13,22C13.53,22 14.04,21.79 14.41,21.41L21.41,14.41C21.79,14.04 22,13.53 22,13C22,12.47 21.79,11.96 21.41,11.58M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M10,19H7V22H5V19H2V17H5V14H7V17H10V19Z" })));
    }
};
VocablyIconRemove$1.style = iconTagCss;

const iconTagEditCss = ":host{display:inline-block;width:16px;height:16px;visibility:visible !important}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconRemove = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '875ea834f8b0b49d9cef510c8faaa8beceb5a07c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '567bbc5b86df5ea21a8feb3d3e379012baec4516', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '40f6a7c703fdada02fe99f0b1228bd3d9085671d', d: "M12.41 2.58L21.41 11.58C21.77 11.94 22 12.44 22 13C22 13.55 21.78 14.05 21.41 14.41L14.41 21.41C14.05 21.77 13.55 22 13 22C12.45 22 11.95 21.77 11.58 21.41L9.45 19.28L10.7 18.03L10.7 18.04L13.11 15.62C14.11 14.63 14.11 13 13.11 12L11.83 10.74C10.84 9.75 9.23 9.75 8.24 10.74L8.07 10.91L8.06 10.91L4.57 14.4L2.59 12.41C2.22 12.05 2 11.55 2 11V4C2 2.89 2.89 2 4 2H11C11.55 2 12.05 2.22 12.41 2.58M4.44 6.56C4.72 6.84 5.1 7 5.5 7C5.9 7 6.28 6.84 6.56 6.56C6.84 6.28 7 5.9 7 5.5C7 5.1 6.84 4.72 6.56 4.44C6.28 4.16 5.9 4 5.5 4C5.1 4 4.72 4.16 4.44 4.44C4.16 4.72 4 5.1 4 5.5C4 5.9 4.16 6.28 4.44 6.56M10.7 15.35L11.7 14.35C11.91 14.14 11.91 13.79 11.7 13.58L10.42 12.3C10.21 12.09 9.86 12.09 9.65 12.3L8.65 13.3L10.7 15.35M8.06 13.88L2 19.94V22H4.06L10.11 15.93L8.06 13.88Z" }))));
    }
};
VocablyIconRemove.style = iconTagEditCss;

const iconVolumeMediumCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#bababa}";

const VocablyIconVolumeMedium = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '225b91e4636f8921b2ee611df3d0e735c395ca9e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'c016f06948c57cdf60a49f77b1fa37fe926e5b4e', xmlns: "http://www.w3.org/2000/svg", class: "svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9d98869f55027a149ccd86e63d747f1d160e6ff9', d: "M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" }))));
    }
};
VocablyIconVolumeMedium.style = iconVolumeMediumCss;

const inlineLoaderCss = ":host{display:inline-block;position:relative;vertical-align:middle;width:28px;height:18px;color:var(--color);user-select:none}:host(.ion-color){color:#6a6a6a}svg{position:absolute;top:0;left:0;width:100%;height:100%;transform:translateZ(0)}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{animation:spinner-dots 1s linear infinite}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{animation-play-state:paused}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-scale-out{0%{transform:scale(1, 1)}100%{transform:scale(0, 0)}}@keyframes spinner-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes spinner-dots{0%{transform:scale(1, 1);opacity:0.9}50%{transform:scale(0.4, 0.4);opacity:0.3}100%{transform:scale(1, 1);opacity:0.9}}@keyframes spinner-circular{100%{transform:rotate(360deg)}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";

const VocablyInlineLoader = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */
        this.paused = false;
    }
    render() {
        const self = this;
        const spinner = {
            dur: 750,
            circles: 3,
            fn: (_, index) => {
                const animationDelay = -(110 * index) + 'ms';
                return {
                    r: 6,
                    style: {
                        left: `${32 - 32 * index}%`,
                        'animation-delay': animationDelay,
                    },
                };
            },
        };
        const duration = typeof self.duration === 'number' && self.duration > 10
            ? self.duration
            : spinner.dur;
        const svgs = [];
        for (let i = 0; i < spinner.circles; i++) {
            svgs.push(buildCircle(spinner, duration, i, spinner.circles));
        }
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: "spinner-dots", role: "progressbar", style: {} }, svgs));
    }
};
const buildCircle = (spinner, duration, index, total) => {
    const data = spinner.fn(duration, index, total);
    data.style['animation-duration'] = duration + 'ms';
    return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: data.viewBox || '0 0 64 64', style: data.style }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { transform: data.transform || 'translate(32,32)', cx: data.cx, cy: data.cy, r: data.r, style: spinner.elmDuration ? { animationDuration: duration + 'ms' } : {} })));
};
VocablyInlineLoader.style = inlineLoaderCss;

const languageCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.container{display:inline-block}.p{margin-bottom:16px}.h1{font-size:26px;margin-bottom:16px}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important}.button:hover:not([disabled]),.button:focus:not([disabled]){background:#0047e3}.button:active:not([disabled]){background:#0047e3}.button[disabled]{background:#bababa}select{color:#6a6a6a !important;font-size:14.4px !important;padding:10px 14px !important;border:0.6px solid #bababa !important;border-radius:8px !important;background-color:#fbfbfb;outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important;appearance:none !important;background:#fbfbfb url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important}";

const VocablyLanguage = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.confirm = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm");
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '80b7ce1d761abbc0009a577155adc4313ac16f0b', "data-test": "language" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '2bdfbaa51b3229128c9fceeae1045f07598d8916', class: "container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'e9ea1d0171f7fa2305c626befe5e277ae84088ec', class: "h1 p" }, "I study"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bb8a54ec54a17e90919547e94a63e11c34c07233', class: "p" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { key: '6d6bf0ffc556d7d3e95317c858f7bc2d48e966af', "data-test": "source-language-selector", ref: (el) => (this.sourceLanguageSelect = el) }, Object.entries(languageList).map(([code, name]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.sourceLanguage === code, value: code }, name))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'f141e2de92e7d2f501f39f814ab336743d969f12', class: "h1 p" }, "I speak"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bb0224ca3bbb1a70a89b3daff5a94a15b560c606', class: "p" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { key: 'e9a94d304517b7f0d5c77dbb25d8ca1e17e7d10d', "data-test": "target-language-selector", ref: (el) => (this.targetLanguageSelect = el) }, Object.entries(languageList).map(([code, name]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.targetLanguage === code, value: code }, name))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '9eb55fe4d62cba1cbd8e64406427be670e9dde33', class: "button-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'fea9ac350f3df9263b56702c715f4471edadd9f9', class: "button", onClick: () => this.confirm.emit({
                sourceLanguage: this.sourceLanguageSelect.value,
                targetLanguage: this.targetLanguageSelect.value,
            }), "data-test": "subscribe-button", disabled: this.waiting }, this.waiting ? 'Saving...' : 'Save')))));
    }
};
VocablyLanguage.style = languageCss;

const logoCss = ":host{--logo-color:#000000;display:inline-block;line-height:0;visibility:visible !important}.svg{height:100%;width:auto}.svg .primary{fill:#0050ff}";

const VocablyLogo = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '4097db4432777058c0d01a4e0e63ad930af4130c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '6c4a2580ec3ca1011472c8ecf84bfbeca5db46aa', width: "1086", height: "258", viewBox: "0 0 1086 258", class: "svg", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '36cd8465c51de93dd3a33e6ce580505f6cc10eaf', d: "M363.813 199.05L323.32 50.7578H346.993L378.453 178.8H379.699L411.159 50.7578H434.831L394.338 199.05H363.813Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e8fc9042bc208f4604257ee3b750be9c8c01608b', d: "M494.948 201.853C482.488 201.853 472.832 199.361 465.668 194.065C458.504 188.769 453.52 181.292 450.406 171.634C447.291 161.977 445.733 150.45 445.733 137.054C445.733 123.658 447.291 112.131 450.406 102.473C453.52 92.8152 458.504 85.3385 465.668 80.0423C472.832 74.7462 482.488 72.2539 494.948 72.2539C507.407 72.2539 517.063 74.7462 524.227 80.0423C531.391 85.3385 536.375 92.8152 539.178 102.473C542.293 112.131 543.539 123.658 543.539 137.054C543.539 150.45 541.982 161.977 539.178 171.634C536.375 181.292 531.08 188.769 524.227 194.065C517.063 199.361 507.407 201.853 494.948 201.853ZM494.948 183.784C499.931 183.784 503.981 183.161 507.407 181.915C510.833 180.669 513.325 178.488 515.506 175.061C517.686 171.946 518.932 166.961 519.866 161.042C520.489 154.811 521.112 147.023 521.112 137.054C521.112 127.085 520.801 119.296 519.866 113.065C518.932 106.834 517.686 102.161 515.506 99.046C513.637 95.9307 510.833 93.4385 507.407 92.1924C503.981 90.9462 499.931 90.3232 494.948 90.3232C489.964 90.3232 485.603 90.9462 482.177 92.1924C478.751 93.4385 476.259 95.6191 474.078 99.046C471.898 102.161 470.652 107.146 469.718 113.065C468.783 119.296 468.472 127.085 468.472 137.054C468.472 147.023 468.783 154.811 469.718 161.042C470.652 167.273 471.898 171.946 474.078 175.061C476.259 178.177 478.751 180.669 482.177 181.915C485.603 183.161 489.964 183.784 494.948 183.784Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b48e3b76ff35e0284a5bba911e9bb19a5bd192cb', d: "M622.033 201.853C612.066 201.853 603.033 199.673 595.246 195.311C587.459 190.95 581.54 183.784 577.18 174.126C572.819 164.469 570.638 152.007 570.638 136.43C570.638 123.657 572.196 113.065 574.999 104.654C577.803 96.2423 581.852 89.6999 587.147 85.0268C592.131 80.3537 598.36 76.927 605.213 75.0578C612.066 73.1885 619.23 71.9424 627.017 71.9424C633.247 71.9424 639.165 72.254 645.083 73.1886C651.001 74.1232 655.673 74.7461 659.1 75.6807L656.608 93.4385C653.493 93.127 648.821 92.5036 642.903 91.569C636.673 90.9459 630.443 90.3232 624.214 90.3232C618.918 90.3232 614.558 90.6344 611.131 91.569C608.016 92.5036 605.213 93.7499 603.344 95.6191C600.541 98.423 598.36 103.408 596.803 110.573C595.246 117.738 594.311 126.461 594.311 136.742C594.311 146.088 594.934 153.877 596.492 159.796C598.049 165.715 599.606 170.077 601.475 172.881C603.344 175.996 605.213 177.865 606.771 179.111C607.705 179.734 609.262 180.669 611.131 181.292C613 181.915 615.804 182.538 619.23 182.538C622.968 182.538 627.017 181.915 631.378 180.98C635.739 180.046 639.476 178.8 643.214 177.554C646.952 176.307 651.001 174.749 655.673 172.569L662.215 189.392C655.673 193.13 649.444 196.246 643.526 198.115C637.607 199.984 630.132 201.853 622.033 201.853Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '78626fd27fb1f0d0bdf69d6d92e02cd227b56d0f', d: "M714.855 201.853C708.314 201.853 702.396 200.296 697.412 197.18C692.117 194.065 688.068 189.392 685.264 183.473C682.461 177.553 680.904 170.388 680.904 161.977C680.904 151.696 683.084 143.907 687.133 137.988C691.494 132.38 697.412 128.019 705.199 125.527C712.986 123.034 722.019 121.788 732.298 121.788H752.856C752.856 114.935 752.545 109.327 752.233 104.965C751.922 100.604 750.676 97.177 749.119 94.9962C747.873 93.4385 746.315 92.1921 744.135 91.569C741.954 90.9459 739.151 90.6346 735.725 90.6346C730.43 90.6346 724.823 91.2577 719.528 92.1923C714.232 93.1269 709.249 94.373 704.888 95.6191C700.527 96.8653 695.543 98.7344 690.248 100.604L684.018 83.7806C689.625 81.2883 694.609 79.4194 699.281 77.8617C703.953 76.304 709.249 75.0577 715.167 73.8115C721.085 72.5654 727.003 71.9424 733.544 71.9424C743.823 71.9424 752.233 73.8114 758.152 77.5498C764.381 81.2883 768.742 86.5847 771.234 93.4385C774.037 100.292 775.283 108.392 775.283 117.738V199.049H760.332L757.217 185.965H755.971C755.037 186.588 753.168 187.834 750.676 189.703C748.184 191.261 745.069 193.13 741.331 195C737.594 196.869 733.544 198.426 729.184 199.984C724.511 201.23 719.839 201.853 714.855 201.853ZM719.839 182.85C724.511 182.85 729.184 182.227 733.544 180.669C737.905 179.111 741.954 177.554 745.381 175.996C748.807 174.438 750.987 173.192 752.545 172.257V141.104C751.299 140.792 748.807 140.481 745.069 140.169C741.331 139.858 736.659 139.546 731.052 139.546C718.905 139.546 711.429 140.792 708.626 143.285C707.068 144.531 705.822 146.711 704.888 149.827C703.953 152.942 703.642 156.992 703.642 161.665C703.642 169.142 704.888 174.438 707.38 177.865C709.872 181.292 713.921 182.85 719.839 182.85Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c24f39f72f6c7cdd124a33f5dbf7b0247b768110', d: "M860.63 201.854C856.58 201.854 851.597 201.542 845.678 200.607C839.76 199.673 833.842 198.738 827.612 197.492C821.694 196.246 816.399 194.688 811.727 193.442V38.6079H834.154V76.6157C835.711 76.3042 838.203 75.6811 841.629 75.058C845.056 74.4349 848.482 73.8119 852.843 73.1889C856.892 72.5658 860.941 72.2541 864.991 72.2541C878.073 72.2541 888.04 77.2388 895.204 87.208C902.369 97.1772 905.795 113.065 905.795 135.184C905.795 148.892 904.549 160.108 902.057 168.831C899.565 177.554 896.139 184.408 891.778 189.081C887.417 193.754 882.745 197.18 877.138 199.05C871.532 200.919 866.236 201.854 860.63 201.854ZM860.007 182.85C863.433 182.85 866.236 182.538 868.417 182.227C870.597 181.915 872.155 180.981 873.401 179.734C874.646 178.488 875.892 176.308 877.45 173.504C879.007 170.7 879.942 165.715 881.188 159.173C882.122 152.631 882.745 143.285 882.745 131.758C882.745 120.231 882.122 111.508 881.188 105.9C880.253 100.293 878.384 96.5542 876.515 94.9965C874.024 92.8157 869.351 91.5693 862.187 91.5693C855.335 91.5693 849.416 92.1926 844.433 93.4388C839.449 94.6849 836.023 95.6196 834.154 96.5542V180.046C835.4 180.357 836.957 180.669 839.449 181.292C841.941 181.915 844.744 182.227 848.17 182.538C851.597 182.538 855.646 182.85 860.007 182.85Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '328bec53fa4d4d90f86c3cdf8f1719a967a716bd', d: "M939.435 199.05V38.2964H961.862V199.05H939.435Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cc53ba2db25519418f1c2836fdc51b187b6e4248', d: "M1007.03 234.565L1024.16 187.212L983.977 75.0581H1007.34L1034.13 163.223H1035.06L1061.54 75.0581H1085.21L1042.85 192.196L1030.39 234.877H1007.03V234.565Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ed01a0b1d65e751775f4b305143ee6e92fb3c848', d: "M216.928 48.8888H19.1319C9.78725 48.8888 2 56.3657 2 66.0235V178.178C2 187.524 9.47576 195.312 19.1319 195.312H32.2145V235.812C32.2145 244.224 36.8869 251.701 44.0511 255.439C46.8545 256.997 49.9695 257.62 53.0844 257.62C57.7567 257.62 62.1176 256.062 66.1669 253.258L131.58 195.624H216.928C226.273 195.624 234.06 188.147 234.06 178.489V66.3349C234.06 56.6772 226.273 48.8888 216.928 48.8888ZM57.1337 241.42C54.3303 243.601 51.8384 242.666 50.9039 242.043C49.9695 241.42 47.4775 239.862 47.4775 235.812V125.839C47.4775 118.673 52.4613 108.081 58.0682 103.408L119.743 49.8236V186.277L57.1337 241.42Z", class: "primary" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '80406cdf603bf649dfcdb4d65e631174cfca8575', d: "M194.501 14.308C194.501 4.96178 184.533 -4.07308 172.696 4.33847L132.514 38.2963H194.501V14.308Z", class: "primary" }))));
    }
};
VocablyLogo.style = logoCss;

const mobileButtonCss = ":host{display:block;visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important}.button{color:#000000;display:flex;border-radius:19px;line-height:19px;background-color:#fff;padding:8px;border:none;cursor:pointer;box-sizing:content-box;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(0, 0, 0, 0.6);user-select:none;-webkit-user-select:none;transition:all 0.2s}.button:active{box-shadow:0 3px 10px rgba(0, 0, 0, 0.4)}.button .svg{height:17.1px}.button .caption{margin-left:8px;white-space:nowrap;overflow:hidden;font-size:16px;animation-duration:1s;animation-name:slideIn}@keyframes slideIn{from{max-width:0}to{max-width:100px}}";

const VocablyMobileButton = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '2414fa08bf9d4988fb2c0ea1e71db9a2262b332c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '252a54744707c809dcfd10760027e951ff069997', class: "button", onTouchStart: () => true }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'ece8dbe34cca8af5387467980b5f0f96c80696c7', viewBox: "0 0 633 699", fill: "none", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7acb5e69f7af90948e45f7a9b5feb92e6de61c03', d: "M585.428 130.443H46.6646C21.2112 130.443 0 150.809 0 177.116V482.609C0 508.067 20.3627 529.281 46.6646 529.281H82.2994V639.599C82.2994 662.511 95.026 682.877 114.54 693.06C122.176 697.303 130.661 699 139.145 699C151.872 699 163.75 694.757 174.78 687.12L352.954 530.13H585.428C610.882 530.13 632.093 509.764 632.093 483.457V177.964C632.093 151.658 610.882 130.443 585.428 130.443ZM150.175 654.874C142.539 660.814 135.752 658.268 133.206 656.57C130.661 654.873 123.873 650.63 123.873 639.599V340.045C123.873 320.527 137.448 291.676 152.72 278.947L320.713 132.989V504.672L150.175 654.874Z", fill: "#0050FF" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a118d8e18f42b1b82a8aa283eb36f71f3152f282', d: "M524.34 36.2492C524.34 10.7914 497.19 -13.8184 464.949 9.09357L355.499 101.59H524.34V36.2492Z", fill: "#0050FF" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: 'f44520164856eb88d5b6726da225d52a1d246d1c', class: "caption" }, "Look up"))));
    }
};
VocablyMobileButton.style = mobileButtonCss;

const overlayCss = ":host{--backdropOpacity:0.4;display:block;position:absolute;z-index:2147483647;inset:0;visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important}:host .backdrop{position:fixed;inset:0;opacity:0;background:black}:host .overlay{opacity:0}";

const animationDuration = 200;
const pointerEventNames = ['click', 'mouseup', 'mousedown'];
const keyboardEventName = 'keydown';
let overlayStack = [];
const onPointerEvent = (e) => {
    e.stopImmediatePropagation();
};
const onKeyboardEvent = (event) => {
    if (overlayStack.length === 0) {
        return;
    }
    const last = overlayStack.at(-1);
    if (!last) {
        return;
    }
    if (!last.closeKeyCode.includes(event.code)) {
        return;
    }
    last.hide();
};
const VocablyOverlay = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.closeKeyCode = ['Escape'];
    }
    async hide() {
        overlayStack = overlayStack.filter((overlay) => overlay !== this);
        if (overlayStack.length === 0) {
            pointerEventNames.forEach((pointerEvent) => document.body.removeEventListener(pointerEvent, onPointerEvent));
            document.body.removeEventListener(keyboardEventName, onKeyboardEvent);
        }
        if (!this.backdrop || !this.overlay) {
            throw new Error(`Can't find overlay with backdrop element`);
        }
        this.backdrop.style.opacity = '0';
        this.overlay.style.opacity = '0';
        await new Promise((resolve) => setTimeout(resolve, animationDuration));
        this.el.remove();
    }
    componentDidLoad() {
        overlayStack = [...overlayStack, this];
        if (!this.backdrop || !this.overlay) {
            throw new Error(`Can't find overlay with backdrop element`);
        }
        if (overlayStack.length === 1) {
            pointerEventNames.forEach((pointerEvent) => document.body.addEventListener(pointerEvent, onPointerEvent));
            document.body.addEventListener(keyboardEventName, onKeyboardEvent);
        }
        this.backdrop.addEventListener('click', () => {
            this.hide();
        });
        setTimeout(() => {
            if (!this.backdrop || !this.overlay) {
                throw new Error(`Can't find overlay with backdrop element`);
            }
            this.backdrop.style.transition = `opacity ${animationDuration}ms ease-in-out`;
            this.backdrop.style.opacity = `var(--backdropOpacity)`;
            this.overlay.style.transition = `opacity ${animationDuration}ms ease-in-out`;
            this.overlay.style.opacity = `1`;
        }, 10);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '495e197e46d94800f946b0f38e65ab3acdd0df78' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'cd3cbf2fed930192505962fdd2b290b9ac9fe06b', class: "backdrop", ref: (el) => (this.backdrop = el) }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'b9796de0abb70234cdc0b22da41dd927a667a9b8', class: "overlay", ref: (el) => (this.overlay = el) }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: 'c086c4b33d6f927de67919678128b142e7164068' }))));
    }
    get el() { return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyOverlay.style = overlayCss;

const playSoundCss = "vocably-play-sound{display:inline-block;vertical-align:baseline;visibility:visible !important}.vocably-play-sound-button{padding:0;background:none;border:none;cursor:pointer;width:18px}.vocably-play-sound-button:disabled{cursor:default}";

const VocablyPlaySound = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.isLoading = false;
        this.isPlaying = false;
        this.isPlayError = false;
    }
    async play() {
        this.isLoading = true;
        const result = await this.playAudioPronunciation({
            text: this.text,
            language: this.language,
        });
        if (result.success === false) {
            this.isPlayError = true;
        }
        this.isLoading = false;
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'd5d3eb2eb61f38516e67f197cc457dc649492c9e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'ec2db761c76ec5fb6d4673a780df2f7921962f5d', class: "vocably-play-sound-button", onClick: () => this.play(), disabled: this.isPlaying || this.isLoading || this.isPlayError, title: this.isPlayError
                ? `Unfortunately, Vocably is unable to play the audio pronunciation on this website due to its security policies`
                : undefined }, !this.isPlayError && !this.isLoading && !this.isPlaying && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-play-circle", { key: 'b70b96d376c1e2c3b1679d072864f2bda3abd615' })), !this.isPlayError && (this.isLoading || this.isPlaying) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-volume-medium", { key: 'cda1360a2886ba8403145909e7fcc95bc553f90d' })), this.isPlayError && (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-error", { key: 'e4eb5c8a0bf0b3f7ba52fc50127775d716479f23' }))));
    }
};
VocablyPlaySound.style = playSoundCss;

const popupCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important;--max-height:48vh;--max-width:100vw;--background-rgb:255, 255, 255;--header-height:19px;--header-padding-top:12px;--header-padding-bottom:20px;--header-decay-length:10px;--padding-x:16px;--border-radius:16px;--padding-bottom:16px;--shadow-spread:10px;--shadow-v-offset:4px;--scrollbar-track:6px;--scrollbar-gutter:4px;display:inline-block;padding:calc(var(--shadow-spread) - var(--shadow-v-offset)) var(--shadow-spread) calc(var(--shadow-spread) + var(--shadow-v-offset));text-align:left}@supports (-webkit-touch-callout: none){:host{--scrollbar-track:0px}}:host .popup{background:rgb(var(--background-rgb));box-shadow:0 var(--shadow-v-offset) var(--shadow-spread) rgba(0, 0, 0, 0.6);border-radius:var(--border-radius);box-sizing:border-box;position:relative;padding-top:calc(var(--header-height) + var(--header-padding-top));padding-right:var(--scrollbar-gutter);padding-bottom:1px;padding-left:0}:host .header{position:absolute;background:linear-gradient(0deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) var(--header-decay-length));left:0;right:0;top:0;height:var(--header-height);border-radius:var(--border-radius) 0 0 0;display:flex;align-items:center;padding:var(--header-padding-top) 0 var(--header-padding-bottom) var(--padding-x);margin-right:var(--padding-x)}:host .header .logo{height:var(--header-height);transform:translate(4px, 2px)}:host .header .close{border:none;padding:0;background:none;text-align:center;cursor:pointer;margin-left:auto;position:relative;right:-7px}:host .footer{position:absolute;background:linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);left:0;right:0;bottom:0;height:var(--padding-bottom);border-radius:0 0 var(--border-radius) var(--border-radius);pointer-events:none}:host .body{--padding-right:calc(\n    var(--padding-x) - var(--scrollbar-track) - var(--scrollbar-gutter)\n  );min-width:140px;overflow:auto;overflow-y:scroll;box-sizing:border-box;max-height:calc(var(--max-height) - var(--header-padding-top) - var(--header-padding-top) - var(--header-padding-bottom) - var(--padding-bottom) - var(--shadow-spread) * 2);max-width:calc(var(--max-width) - var(--padding-right) - var(--padding-x));scrollbar-gutter:stable;scrollbar-color:auto;padding-top:var(--header-padding-bottom);padding-left:var(--padding-x);padding-right:var(--padding-right);padding-bottom:var(--padding-bottom)}:host .body::-webkit-scrollbar{-webkit-appearance:none;width:6px;height:6px}:host .body::-webkit-scrollbar-thumb{border-radius:4px;background-color:#a4a4a4;-webkit-box-shadow:0 0 1px rgba(255, 255, 255, 0.5)}:host .content-wrapper{overflow:hidden;width:0;height:0}:host .content-unlimited{width:80vw}:host .content{display:inline-block}";

const VocablyPopup = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.close = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "close");
    }
    componentDidRender() {
        if (!this.el.shadowRoot) {
            throw new Error('Shadow root property is empty');
        }
        const contentWrapper = this.el.shadowRoot.getElementById('content-wrapper');
        const content = this.el.shadowRoot.getElementById('content');
        if (!content || !contentWrapper) {
            throw new Error(`Can't find content or contentWrapper elements`);
        }
        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                const rect = content.getBoundingClientRect();
                contentWrapper.style.width = `${rect.width}px`;
                contentWrapper.style.height = `${rect.height}px`;
            });
        });
        resizeObserver.observe(content);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '533714056e281aa30201f6b2281d41bb7b61281f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '79f7e5e5dbb25fdb21b37ccb7e09e3585759585c', class: "popup" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'b5b9e68df7d87a0fa3e4a386d87d599e8cac9c81', class: "body", id: "body" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '0e40f3b379d0fe1ea6ab67865761fc010c90209d', class: "content-wrapper", id: "content-wrapper" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'ad06a0bef0bec654526c2750f09e47d6bdade8e3', class: "content-unlimited" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '00d17ecf60d1df013ab203812e43b8c165a20556', class: "content", id: "content" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: '3f986f4d4370a49973d149b4321db18bba19920b' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '479fa5da2baadab4022be6f69b9078bb57667423', class: "header" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-logo", { key: 'd58853ead8e9d6d6f3975a9c16e764300b96f393', class: "logo" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-close-button", { key: '0d2ed8b72d976eb58a42bf102a744aa78f4651d6', class: "close" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a28e6f62116da3c8273d89b8cfd8506bcda6fe04', class: "footer" }))));
    }
    get el() { return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyPopup.style = popupCss;

const qrCodeCss = ":host{display:block;visibility:visible !important}:host .qr-code-group{fill:#000}";

const VocablyButton = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'f60eb1ed428e80b254ada01dda1883f3b5748b4b', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1023 1023" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '36e4be1c2871959419fe78d4f98d0b8f003d4bc1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf4da296bc98c04649f25c528350906d27633296', transform: "translate(248,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7a23b06168df2ef93566057d01655ae4c932f017', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '517250b470e6c9400e9e1ac84055218525674f3c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f390410e8c69ab947d4e0ab696083bd2190cfbdf', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b996342fa0fcfedddbb5c31a0214ee3763ddbf2b', transform: "translate(279,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '426ab1a0dc7f458d7fb4b50d89a8ce7b3c7686d7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1fabd3fe3edc11bef28c1a866ca0b0e889db48bb', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f9e4f0d1b9ea0d6093fff3aa1694ec6d456c10a4', transform: "translate(310,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c2e40436062ffdaa74c207b785ac4545acfbf029', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '056c27de97f27be2879e1bec20053f4bc903164e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0e7e40e84a42c7f2b5dfb895410b5be9e8a8bb4c', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '64a40d8040aa2688f8817437cb800c1aa3b59362', transform: "translate(372,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ce4886d12391af74c175cb4b15ea73b18723dc53', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc68daa22e29799237177ed75ab313edc4f585e2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '691a959a6016a1501d508113dc04c2091c34696d', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'be25bf200b3a4c70ab2ddab60f219629bdd2b9aa', transform: "translate(527,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '20d8c9dca6007e021e0f8ccbb072253d849d51e5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b1d04804c0279bde3dfa144224077b61eec6c5ed' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '384f3944ab45f08f1a3b7b19122551f7f74f340f', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '04e63460a6cf7a2445f067aceff2dabdf41caa7e', transform: "translate(558,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '200aa87939dc534c5ace313e0e70d6bcb9462984', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '03325166cc26a34fb0bce492dc1d4b4bfd20da25' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'abdf9776bb44969994736e45195d591bf0e86478', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2e7fc33b2ea1825f11d89550344dc41f7067945c', transform: "translate(713,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7dc02b5a119a19aa7de9b55bcc0de8c4f03425ed', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'de9e45ad54bdd7c8cfc81b6fe0590a96fa2c7d51' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c362b65973cbf5f064d0c67d9ae17e1e9154cb3b', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '77aaceacd1fc18340c5f6372586c980f5c5e7e44', transform: "translate(744,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dfcfeca11dd35c80a3c90fce4f236bf43a2b64c6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '08c18b33d5320ecc9dca83351da36a5da12f170a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4af6634f8e670ce428bbc95b47209b391556d4de', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cbec8f08dc13622d90421655a124919b30bdcffb', transform: "translate(248,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '69b18ba04a8c0766535598750cdd0df21d8ea1c0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a204c7e38933021a10804976d924e48717252929', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e3a18d82861ac6285c592f6946f7940c40843f08', transform: "translate(341,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd19d32080f028efe994eb50d78fd4ee04b1cd7a6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea431248e4f4f6bb5ec7883d7ae8d5a273bb3cb9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5ca36277f3ed4dd7fd3e18267bf7072d4b8c45c8', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5dc7a79a01ad4c2d9206522cad074907f5381431', transform: "translate(372,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ef8ff621ad383fe6e70aeea6a9c434e0896825db', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d2b7b504c4e5b2bd5037e034b27ebbf4196760f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cef1bbcce80a5d2b6f19d773680c7a272b382918', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd645ad314ea274f1ed12285b02e66b9d3615b173', transform: "translate(465,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4a2bba2ce4b867c5a9d0788bd193ad6e1be9497e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2356fbf604987682c2ebac831877bee549ddad88' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3e21937fdd084fab6b0951da674c12ed1c474f07', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e7f13cff15e6e7533c8e481db80b61af3720cd39', transform: "translate(558,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e404fbf41c7ac6e4c9fcc881190a1b92626063dd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '198b21dae02f239229172ed71dd006c31772664e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '73b31a19aa3151087e1730c8f9a23b40c20d7164', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1707897e3e04c8d77541266dc1625364d89b2606', transform: "translate(589,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa0d44dc62b0ae51ae098a6536a31d485ccedc49', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a231c141d3ba4aa80038d31c88f7be77b52daa45' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b73464e3466ee9f3712e856d254be3a16c873dd8', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '34ef31d38673327ad347d1f6ad4bae00774584cb', transform: "translate(651,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '713fc21cce9f7077542dd135fda60219104d4f0e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b8976b760b579b1538afe4b1710f3fa87dfca081' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ef40f160cb3ee0de061d95bb8ca0c131b4015084', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c2f91ea30ab2cde59e4cb50060ad8da5842b67e8', transform: "translate(744,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6db467e409d81ff6f6d389c6992b1895f5a99bc0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '15b2f8d40736606cdb661ca242066961094087b3', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '37d75cb3340873d50ce03c26c3b5ef2dbbd4b025', transform: "translate(248,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '833286f6c4ab0ad6db1cd680b059ba67be3ceefd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ace84a9d0abcf40b2c78477fbf1f9409a0660db7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7e718523a21009a33ab77880a3b7011a5aa17e2e', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2e572fad0bb115e2823501d2508bf9a05533c355', transform: "translate(279,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '944bc0e395d415bb96735b9bbf7c931a688e2bfe', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'df03694f1b493fe0d2d546eb77d09d32ed69a8a5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '980d4a15d09220e32c6f44605349857d9c2861ca', transform: "translate(310,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ac42f32551aa4407a38b8c45cffe301dbf753ed8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '041d107a9f015b9902f2dd15bf02dc0341e73c4d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ec892b556bc85c688822484afb27a22b08917d19', transform: "translate(341,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ebcde0c0e30f5b99116ebd72856b6792b8e82fa2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '50ffb7e857e5d848beca3597549a9a8587f115ad' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9c4adc6b13f9cc1abae2f5183bb7f008307c2cce', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '58b2b579145bce5dbbdb0244c64ba8cdaaf07465', transform: "translate(434,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4330a3a4dbbc7dc75059dafd0a35ba7e7392c958', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e02b391e23541b76b1157beea7a80e8ecd6c6fd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '11bd14aa1cfc4eb9ece10f3176643b96236176e3', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5b70abb9f8dc6215adb6bcf9d792a3a91715e969', transform: "translate(465,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '12b415a5d883ee2097877f8777b556922d310fbf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '25b42fcd224dc952437e1eb64ea3e0b7fcdf792e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '49df60e5156b4b9ab6861125f68d283d0eee9c8b', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '333051e961711d32dba59d227f334bb551ea7c86', transform: "translate(527,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3064a77616eb47124d12b640950cb74b286f3d73', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd8cb0700a060b2f2fd101950043fdebe2c103e20' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6d7991ce63eb4ef567d165ecd5ee90aa3c220cda', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e3595b09a5b7d12f49edf9b1bc2d9a9f9a8256f4', transform: "translate(620,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '06f01f9beab87679338eaa20cd5e5aaaaefc93fb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '748370e1fb1b2ac4fdcccbb3f8acf9daeed47292' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '62a206bf05988d5958e786b190b502885473c41a', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fd70c2567589c9fc24b7ad26924866d6aa1a992e', transform: "translate(651,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f54a9e54be3b6190e87897732fa1e4ab5600f839', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8835655ecc6504cc84a5c38451bb6f1ed747094b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '891382e2b834cabaf8d3c0d6559d693bdf48fea8', transform: "translate(682,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fac4133f981d0634ddf9679e5ea1e03cbf0b85cd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '164426989feff079db38d085c4bb3d4451d2299e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aaa9988c08ac53f6bdb1eb2a28d491e28b5c30bb', transform: "translate(713,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd925bddce08807bf8796d945d45e367567da87b7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b8c1446ea48c26c5c4beb1fc06c484d7273c9522', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '76056ea3dc9c8f8c9f0de510cf8438b9abb54ca0', transform: "translate(744,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b246993f46c7338adb963054e20d04f22be9acd8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3742bca3dff592a538c6b07bc20ce4b64e0170d7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '04a2b01dc8d335bb9357562e7305bcaed9f125eb', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '15b38a1fac76708d051c3c5d7b44f0a2558c6617', transform: "translate(279,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a9fed8ec57337307371d9f135a9f1bbf37ee94c9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1c31604fecd38f662df93a30edc258837ca76b34' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '28878152bf69e37a2246aa4a47c329e5222e7d55', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '71f9e9a82c8b5d04f7d7a75ee7dfb0bc7db10e1a', transform: "translate(403,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '765e5297e2d51d806b630be34f98ec772d4c24df', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ec16f0fb8684f5d8f33bed8fb04bcf72d3040e28' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e2c26ad20c249407f3ea61ed6bafcd7511b8ec3b', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4926ddc06762cb1a1f65ae1b21a213e5da34e26b', transform: "translate(496,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2bd594af62a2b6c6cd20598cd691d748bb880a8c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b1282bd91c2536fd3385945b48d3cc11ed0b7b7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bba5be7dab4f3fd5183c9108f434d5f662f08620', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c63bf4e2f9d7af4ea92f8509acff541910397419', transform: "translate(589,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8053e82ed334ff16ac797031972d991107d5dab0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '22808dd2c0fa3fed466a4311bcedb372a967b49d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '195188d9e6d1091695d64240b12ef94df32c45f2', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e6d42f4fca5142f638948610aeaf2897f2ec38c', transform: "translate(620,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '427ecd69f86aca8379bda31719bf5121ef797468', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2f38b373d26a319c2be1acb5d931b3a26a200397', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a33d8f18a1a9bcad935a927197b0e38c6334c15d', transform: "translate(713,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '15bc0e57452cef74ed735c20420690bb1ecd6525', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'edc66275e2e1be558a30f13b02d43eaa32f555fb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f615e9fdd00106b9b739077da7a9d284e1692832', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'efc22c0809084e5ce1d2691b988da55fdb27b835', transform: "translate(403,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9c8890729154559f60063411ee04f3e9094a6349', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6756beebbe65823ec0b5412b007dd35cc9162958' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '648f390416210f5fa52b163553ee58f46be01ef7', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '28c3c9cebc4eb6e090f9fdcaa538802f191483e4', transform: "translate(465,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff526e7e0dd6abbaf44a9878a1080eaa0ffce437', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '620cdcfe04dd20fc12bae958f3392871d54fe2f6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'df7f2366e5fe8c8cda5bd5eb9265c1d994d7529c', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5641f5a5bc3b09ea32ce7af69e421b9db2314893', transform: "translate(496,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '22f3bd064d7af9086eadd059f21b839c1f28894b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5bdbbf2755f9a889e6e2e25c98a0b099adbf2e07' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '980d51b74933d1c5a4bce3c276e2e87e5d9e9daf', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1464a12f6a7a454cdeafcdfdc4c895284cc59294', transform: "translate(558,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '20ba9455be9671b5e0baf6f07049ddfe9dd6b45b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e86a979d0e83713b04136b2eeae23de7d6dfdb6e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9c9263e0a58804d13184bb830d2093d704176687', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c29b22c5673a259548b78acc3257ccf53a49ddba', transform: "translate(620,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1ee08e792b04c25fa36492d1ac39c665e052477c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4c62aa7f26e5bae71368bf07376bfce51230d921', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e53bcb7b9ae87be3d076fbe073713a57551fa5d3', transform: "translate(744,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e010ff06d59c5363cc2a2a8e3763da7ac761af20', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0b8c35c0821450d1282c0434b30bb54a8bef2e11' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1421a2a8779f77c6ab631ad641e2a85f435a8a3c', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f1cd75248772cfedf6a01747d2100f66b67cfcca', transform: "translate(248,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '378f2b7c22ca3c5ceddce29c3b34871ed1d1a618', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '86b971f4f0e1a4efd0a78b722c4b9db68f4e7ced' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '28d4b72850c4334c8c37fcbd35fdb2bc8467a1b8', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c5a1833183be79b5690f83446be0c1265b8dfa81', transform: "translate(279,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b37f8f92b356c28de3d6e5c16a5c547166b6783a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '83b2e304346f49337f8e21931ec906be997f2814', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fb1ad278ad12d85735273f3f14f9e24832318e0a', transform: "translate(310,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '662668c260440a881a8a16eee620954ae9efab72', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'bfbc70aa92c74c4f7ab96a7f373d75e755b14aaa', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e9723f27c4b3d227e918f53d7f37fb4b158dd959', transform: "translate(341,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3b193eba7c182d91a06235886738ef23fb33a7b7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '715b5226fe180c508a9f29f1749d9de3cde29302', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6a316ade8898e0667d9779f6351588f9eda9cf4a', transform: "translate(372,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'de2d7ced5476428ad6d6d3cbb19ec452408e6697', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7492631fc495769aaa507f0ef9ff0bd0ce97558a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4b60b167389cee58ce8407c464aa921c1b5ce92e', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a192760364adc432bd27e5c4a30883fbb722cceb', transform: "translate(434,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '34f4360707f9b95c98b9c6fafd75fd7c7d38984d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '022b39fb3cc79cf766d1b0f846dbc50e66e6cf46' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6677800697fa5d7cc4f09da439217144a1b52039', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '083907fa4040e265d2e4bf681ff3f1164dde0154', transform: "translate(620,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8076614299403041351c67616c36695b72c8d220', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1d5c72196012ec12dae5776302108ddc496dddd1', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ab9bf688d2ce5ebf7162e31384a8dbed8fcaae94', transform: "translate(682,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ad3b35b9f376c017095098f45a6a3c9e4432e1e1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c061ffcbddc7afd8f9b42f2e2f7fb4ed02c718c0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd65c75cd59cd6961ba5345478031b550f5a38a79', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '313032fb5bde54f7d7737190c9e7c91dcee97bd6', transform: "translate(248,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '18d8e87dd2a9992318b1da513e02aee07ad3026b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a2b54090d9d31d71928d53a1099ce250709df9f0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '97894aff2e13198e135a9dca40b8fa5c52175201', transform: "translate(310,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8caf2b8b545f7dc567753d84ca9ba083d9dfdfca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0defb3141cf027415c15f2424c9bb6561da5ab63' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '04ab202f8f2f139e19aa81d7dad23b122269a9c6', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '59c367356c041f7c8b8319031d8bcc61362dadbe', transform: "translate(372,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '50642a21e420414c933a2cdf8c71d2a919f22b40', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8d0621ce6f99bf87c045d987ca99b67bb9809ca8', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10c10e87a19df0a63419ab32f17262da364df5c0', transform: "translate(434,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eb0794248ee1ee28cdfbdac3443670fc2009c2f7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '778836dc65ca55f2438e632f2c250d17eb6ca784', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b9b50d9a791b51dde7d18a48fff55ac8563222da', transform: "translate(496,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '43a7ded79b2430c0426fd8e2d01e80b00b7311f4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '66a7c7e3a1d82cc754626ada9c096169e14e1f42' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8685e86307a484d91f7046da56c4ea9ef769e4ac', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dbefedc06cd24e74ac5b2c462763eba3b3452698', transform: "translate(558,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8f3b7404d473c106b5d55af2249896bdf49f50e6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c6aa7ab66926e2dceaad2572df37a9f9983562c8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4bb57df0e277a51e4d14812c0ea25f52116b9910', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c8d9ac28968e04bd7ca8b75353d339a391ba7f90', transform: "translate(620,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '574a54a040d6d293fe5616e88d1e478699829798', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f8469f95ef0e6b8efdb877944b193779a9d21f12', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3109d9f99a8383aa2aea3dd748626ef844f08566', transform: "translate(682,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bc826c6de875f4a496fd430c706ea73247ddd47b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c103b74a808852a46566a8c09e5bd17e874b1744' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4688d1a586afc381503fdac234ff5202560c3434', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b1220d49ff8918ee680bf95a5f4126d3cd487741', transform: "translate(744,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd8dc7810c64da38b87d3205a010367bda36035bf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4f983b1a211c3f2208ff414fd65359e82590576c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '75d9e77600834fdedcad51ead27ad1b1bb1f3744', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5292c8621ad0d21f587cdfba566421500b149fc7', transform: "translate(248,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a297f135ffe691dd2d78b535ccfd4c924844c035', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4192bec7d26a19c57b8c97efc3f0783075043bfa', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'adf8778aff680460d7b33d5f4837221412784805', transform: "translate(279,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8fd60e3b8e1467fbb295b44319d2b018aba642e0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'af7d0d821699c85347021c700ecdb455bfbd7348' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '63497e304256d1673c3f74ea3c89396ff1300ac6', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2604b1e1ec70c88e1c226b0f12d8ee91ab1e4ff5', transform: "translate(372,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '19b1afeed933cbc27ce571ba9ec788029c584c38', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '319da68cbbf430ae7b0e25e1ae5bcc8e87a68719' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9a330090ecd514e009ba02cb200494a73fa3dda7', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff92e49a2607f728edda27c2593d1590e6ef96f1', transform: "translate(434,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '17baa8d6fa03237213a062929032595666412806', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3b50a07306ebeb007bf47a8d0bd698b0f967e704', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0004dcb96f3e29b14e41a5e3dc17f4687f621d4a', transform: "translate(496,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '378ab18b242e23a2d41acbb353ab644561032a05', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1bfc2c841979b25d81f5e97d4508ab8cfd6ca1d0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2fcf58ef2b6215072bf0110c777d7b2239760428', transform: "translate(589,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '334c200738c417151e14c2103b321401052628fe', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '00055e04d610575f8e2ef930a89d21ac0b7c9125' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd93d791216e5a9ad62eed37c275008c8a983cd71', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '913d86af1d84670b9c9005fcbd5758a4cc96a9ea', transform: "translate(620,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '092a837c8423f02d1f43768740a444e4b2987270', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ddaec009be0511c0c17aea9c0619a7763928a5d2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '04a07964f2b96cd2f051c0d5e9fe84be4f8ab08d', transform: "translate(651,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fae635fab75d8ac5cfeb6dd6174775d1a90a2e58', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bcbec1e02f38ab0fd88fccad25887c5d055e8d45' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e6ba40d4d0781096f5477d489099b3134d8205ff', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '356abc6a87ee7633aa870dd5e97f0909fbd37b0d', transform: "translate(744,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2446dee3afaaf5f1d8108c208a4556346a5ca54c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '87cd988083d234fc066527ab829d49c5c000c12a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4b13cf8786c530210603fdb874778e79dfdc00a7', transform: "translate(62,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '44eb810249dd2a152f26f1f5fe034abe52bd6eae', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'de784ccf61626958bf43567d56871470e36a080e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4434908ff560ae8e64f22d6fe3b7ec83cec9b33d', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '45dbd4bda919a35f9e6ba5b026ac573766d29fc0', transform: "translate(93,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '465b1ea03f9a8a44c6767a679b0e9472318d89e3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b5235c54c94c842863e130d1a4e35f6a380978df', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ba3a3b7d90ac2dc9ba0c84c32675a3fc358d37d6', transform: "translate(124,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dd705d6a7e26b8c12f4936645cbe6967ef69eb43', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1e9038a0a26c8f0e1c23927a9ef0fe0ee8921a18' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '524d1a046c0968c5cd01c61567805714ef67facf', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c94b6c2064fa1157981c12f096d47beffc5c6b49', transform: "translate(186,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0da9297d0f368692f45f5bb27a02d767e62037a4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '02e9399e99a4a11b0ff5389ff8780d2241006086' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '12b0ce1782b9d483d36d2117b9216cfcbf8fe926', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9f035c4c8bf19e8966605ba455ce31e78b897364', transform: "translate(248,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e45a7c0a6be3142b993e3577dca453f8975d3245', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3391fb3e2b78e3321c923714e07dcb6cdda20cf0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1283aae3629c591c279053d9adec8ca0cf9194f3', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8a3a546fd6ec5027ce9ff9a859db97232b7f91b9', transform: "translate(279,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3c79f93bf5f7f37781856b7a43ba34610c198062', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '85fec049bf69e99f37ac654b30b2baeabc5e8742' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '34cd4a542dd5f783ba69160146cbd2fb53e53032', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '70780551844de8aee58fa3962966d681c77d224c', transform: "translate(341,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b200a9e726eb324cca1c07d1e16cb6eee0efe0d5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd826209426eb9358334bf40e02fcb9b5cae52040' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ef11cceea63430dcc9e33f5f5843fb33cf2227cb', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4cb4b5480c6fa8c21b03a68b305c295702bb4012', transform: "translate(403,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0b0fc8f208603d73017cd8ccefb93b6888889ba6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '294ec5d06dd72991fd7a6bd665a10d65bd821a48' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ae7c3f5d41cf203ed6714ba1748642c6bbafd8b8', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dcf9e9d378d8305577069a47bfd589b9742aad69', transform: "translate(434,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '504a4b1fcccd4065e3cca1dc74f684732da7c086', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ad678d319672848c4090e5ca0fd97c18502fdaa5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0226adc3913db4358df75eeb1930a15d9d238fff', transform: "translate(465,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd1082daf88d445e36f8d5417f85acb1921ade87d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ef450ff26c934e5e8d12a030d69630863b6a5c98', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '92f4a007fbcc300444bfab8c60d7cd5be2963dac', transform: "translate(496,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8e1fb5698ac2f128699012006e81f2f4a7e4a40e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2db1c4e6d94a6a092da1b3cf70ed1bead67d4b12', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1247d4677971f2d2a9407fa06f6f230a27c8efca', transform: "translate(527,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd5898fc9ea19d13f98cee06cbaa0191863598fd4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8300b3e3c30a2b15c78b5b15b1b2a1fef9cfc8f4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '394da1e3ff8cb681c719f8b7300d529632101159', transform: "translate(558,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ba1a1c136d05da3b6ac832c02ced33048973faf1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9ee3fe282eec5588bf8cdc45b1ee195afe594ad1', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c73ab3e0815fde9fd5668236e6512d459986b06d', transform: "translate(589,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '74544811125835be99bd4f62bfa946611b006afd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a7fc954b8585ea7fa6c1512767a35ff6179dfe31', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '61d4b44caa16e10503e2a3a0fe642b636db3229f', transform: "translate(620,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49b029c44b28404c944fd9c76bfeff6146a540ab', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c17e7b86562d3947dd8fd62f4d12a140244006a4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2af304e5deabef333ece995822bad8f7d3228c81', transform: "translate(682,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '665f973e1773ed4ff7fba97aa91e8b57c452ce3e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '30da8338dc278153310132ec224178f13a077001' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ad4924511bba70ff3139b9741106598474faf99f', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ee3eb8a1c85b002ee2447980dc927dc8a2d02e5c', transform: "translate(744,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9a4a04bd4261cad395eae24d2361fb2532def4c0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd104fde38417a905336e9f82485e22880ef32268', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '37c2e81597506210b0f74861076bbbc1028398b2', transform: "translate(775,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '349de8a2779be8cca4cfe116400d412b5c31c29f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c55abb146887d83e9f3d1b58e573dbb636355918', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '93bfbe5ffa474229ce77ec2b6f34314f8cbf8c57', transform: "translate(806,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa6116b4a2b066afa9356d37e2cfac69204c28d7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2c3aa5841c6a68ddf4e5c71eec31ba2a29cad1b1', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '092624473d4d068b235eb1bcc9582ae3c7720357', transform: "translate(837,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '06aadc10b69fbd1476a2599c08aeabbf2389e52c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '32dd078b4ca4bade1ad98dde96835a6bc1f66dcd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd4c2de7b04216822163a9662223c7c4b3f34de83', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '27c57f15d76b7a60712ebe885ce04ebd93554b53', transform: "translate(930,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '351a2fef9b7f59cfadd85ad2f673cf95500b403f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '777f4a9d9fbdf0c61b0cf904af48218b293c4d04' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e6703352cc033faa60b40d0960446824e0ab431d', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f86ec3b0aa445dea7017eb8963019546bcd4e42f', transform: "translate(961,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b3dcb372eb60d8c2b7a2393b21fa5cbdee1bda79', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '7f8436b3dddf347bac069d30df8722d1b5d275b5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '25dba17df134fe7b473e3b44c8a89f855257a441', transform: "translate(992,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '28a6021ffbb0dee9954c17f57228cbf482979c4c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1cf99e9c7bbb60d9cdef7dc41a9b8a41ae40030a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4929a2a468e17208622a384990f2f778dd1baa2c', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c129da5cd1246040c31d3f7140dc09f9147ac273', transform: "translate(0,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3ea4d18c2df234dcd099c1eb377f92b183300b6a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f79a274f04e6344ccc8d8bc7c9f9901924a074b3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bfe096841b53de862d2853762cb1415d57594756', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8dc318c496ead3aeb4e160e75e294cce58e76c58', transform: "translate(62,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc4859307c333f0cbb41e6d62d8e6310c58f0fec', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '27c49799717a2b9d044a4770ccc29c9666601de6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ff49c2be095aa188548a6c80e9265ef7079cf171', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1164a576158ec14fdfe90ad281914b4c14426792', transform: "translate(124,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd1cddcceec01b936cb7efbb21f246d0fb21d7f59', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eccb62ed21654aa568afd5077ba0df0f24a1a2ac' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6ded015667422bbb20d68b5001ae0ad63d9a8c00', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '319840b08316b090ca53d2d5af1edf35df3649b8', transform: "translate(155,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '65ae291f06bd869415fc4d964c6a02728e3ab072', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4adc1f4e754b7effa2cccba06f01de68e657973a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd462ef1a7f7174eefe5b3e58009dd3d54e51257e', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '66d212ad6aede5c3da5f8bef4cf117d931d8be09', transform: "translate(341,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9960826eccb68d413c3c2e25294e16e598c9be0f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4b2e9e516702ca32cbc1bade251da29e89af6a04', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '864cbee054706144195139e241add95e2d3b2b84', transform: "translate(403,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ecee227078adcf1394f67e36de20738190908d8b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '476a66063a27f2a69ee62b652a0052f8e1a1364d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '43933463bd75d6604eb950c052ac247ccbe7ff1c', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5e49e5cb07e430f078524db102eafa973227cde3', transform: "translate(496,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '43305d204454c44cb9dd33d4e6795c63cde42434', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '11b2a4735ea6f09da954eba958723b1239ca4f4e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2dee38d11768b2f872e6de8f1d5788e2481b59ab', transform: "translate(589,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '05d495dbe33da6c72cd02d65c1e253108cc87d88', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10202330ff114ecbadd5e62be680886e0b021720' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '09bf05021f091291cc8f3ecce6ff81d6f4727946', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2f4791a70f20d45ed9f189e4bb2c82e7859ce692', transform: "translate(620,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2e71db1ca6d226b68181b9c752f3af426c869578', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dd18fa96e2f76fb3fb7837bb7989f7a9e5178a17' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f8aecf13253941cdc2f4c08a88f9e5c9766f0f1b', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '47de5efe6c233ad8bb99e7a70ae0295dc4c5c1f1', transform: "translate(713,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a8d9390b2fd63cd3a84cef114dca8882a233b652', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '35cd83d090df6183da5dd0254497c650efd2ff08' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '71f331cdb20a179a5f963a671475c7af66cd52e1', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c765e4dcd8e05148066850481ad9fe1878d4e752', transform: "translate(744,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '489da70c4442c294e7ff63ca5fd83578a02f3337', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e67539e1515d944836857c6f199704e6536f9423', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd3e01e5cfc2eceb65955e532e0466fe4fa09cd4f', transform: "translate(775,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '212578d9056a3ff5836e85d505cbfb721c2ff89e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '36ff3a67f2783367d327ae4e564863fe103798a6', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d4a8395bacc3f05df0a11eec0a74c9f1be220b5', transform: "translate(806,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cc4aa1b310cf38caf2398ade7554abee03983381', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dd78877b054825f756d3a6339c23af7533e78112' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'af01cf3733fee5457274f89e7149881af3bbef08', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6409f0a240d60c48fb5531aa60ec396c12203ae6', transform: "translate(930,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '14618938b1d5ed6e9aa01502537fd41b09dc5c01', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9d2a1a50bbcf3edcd601c28bc3878781a036d03a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bfc46c8118bc0da4d40264e7a10b18a976ee67f1', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1e6800cac7ce8ae77bbde5fb099a3267a46a9448', transform: "translate(992,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '73903e1e68934e7d2bf32d2aee3bd7d8db647eee', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '54ebb4468a3cb015c873cdac2ad06d3ff628eb69' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0f9b33dc09c470dbc5d693c7250ea1e55599d153', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2f59bfb001971c166d4685a7e557ecdb743454df', transform: "translate(31,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a0be7fe9646121d43825fb944a8bcd9b97de3f2b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '92476e305652ab0dd12a8ec70906678af76e3b73' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2de7b851988983f1cacabbe1960db0e6699f11af', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eb3c366ac574c95f512ea7f7281a194183b18274', transform: "translate(155,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0679f64f44aee53bcf36668432aed05bd415f699', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd23138b37afc5408889b8a724de7cb9f41de355b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4876ac1386ec87ed7d712158f73defba3a37c16f', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '729fd6cc72a6e1873678b60a4ac8741b06975f12', transform: "translate(186,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cd5154ff3baa6356d0a4a5a35abbeb9eab5311e1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1df16aa9bda129d842d552b693e4bad2c2b66766', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e94e4ef69a71273ecc191a3f57ad2557ee33901a', transform: "translate(217,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bdfe7bb4a7e0f4ee1ee8067a51f8b64a36082618', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bb09938d7031353468c4475ba7c27798f242a9a9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ef9ee16a53e5aba4e79133c8134532f15d1bed45', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8da1096945482f1c8c364d5d34381eb93ffd80e8', transform: "translate(279,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c2b563173a9366e0bfa683adcdb1ada84995078b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f613e0b836ffecdb63a998e40041957bad99f864' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6a59a6599ba77100b282fa29d3cc295f268cf002', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '295589adac2fa10ebd4b42061e21fd8ebc8bf576', transform: "translate(341,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7f8377898e99f766a0c47de18477988a1c82bc48', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1d28b7f0e1ae0abbed1ca7d66e90ccfaa3da35a4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c3c8caa2e0b5414ffd4974038d76fcce5c890e60', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '498080c1e8418d50ec39120f0bb11d2dc7bf37e3', transform: "translate(465,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '72235112ced5129bd06ee2b55050f7f57c7945be', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '264bba90db9c26a6d78b73b081a944f769c6f26b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1caefa72b303b20694515137716bbf458616c2da', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8899d24e28c5103168d15da222c4280c04d7ad96', transform: "translate(496,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '81e44e5f5e779228bcf966c459fd044140d45765', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9034cd2a5141499da3a333802e8faa8205b772d2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd762151805e48bc5ff8ba2f803edc9ffe7f39822', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '502d7e188deafe1c63752f82a93ecf8dbc1f6869', transform: "translate(682,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f3d5f6ad2237c5f6db129e4c93aa1e1cae903c5f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e1345d6933b314325acfbb6c9424f304a0f637b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '44fea967d166f664200dc4d7b58ba320e2ea7d9e', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eaac4b42623bae5d0e00a82f63e0d265769853ed', transform: "translate(744,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '59b4b3ce851f733e0193d6edb0b71aa53b21ada7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e2872ce9c059175dc0fcb8274f50906603133e19', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a4901546a2ca63e285124b1dcd7f8a30e678d089', transform: "translate(837,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0feeb5f44ada2353c9e7b62142f8fbaaa38a1575', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0773c5f6469d80191726f56aac03bfc0cbb8725c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '06bacaf623deb79a474cd28848e92eb2a2160a8d', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '010e8a97cbdd1195c0d8afe6acb75545fa06ed47', transform: "translate(961,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e72998e6f7ba54f3e270c3e2187fa721f62690fc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c948abfd2d1c41ca65eb0f3a4cf054edf39fc9f1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7cd750001eb1e74cbb478ec3d9955f4abcec8989', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a835ae6b0247e1520a321943fac499deb898cdf', transform: "translate(31,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '74c329759ef0378132273cf0bfda975ee91f7e27', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'fe5e3937303c7487c3b08e04635c3f3ed31c873c', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b143fdaaaea49e4245277fac3021cdb50f5ff520', transform: "translate(124,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'deb9af5a5b76df6b70669f2fb745f3143d783847', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2033f5524d5620d6ccccf7e9e1ace7b706efd3e5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9ebbc117d673c7f67eceddcb7b45d917079c679e', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e79e801da96514943e9bae9b2acdd46a8e2333c6', transform: "translate(217,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9d228f466c72cd5338224ad3c63fe8f4acd26e85', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7035430ce6d4b71a309638e82b2961bbcae1d54b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '31fcd34b97d446dbc092e80800a9a35a0578acc0', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bd5f4c653b4f39c4d3f29e1549b198ccb7586647', transform: "translate(310,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '389f87b177a2ed6aee8a460e7ace1717d20f72b8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9c6ed64779c3d976814b08de5eab7f57cfb83dfd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1863903fecd5898f27f8df36b9e589ec309fbd79', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '430f18b4f4a6646c9f88d13d87d083967cba561f', transform: "translate(744,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '216c97640de6622309ac7e43e437d23e68ce1abc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '471735195f32f486c21c162d62d48bf7aefc6060' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '27cf936660a05336ccac4d690f2449ce39dac5cc', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3107d8c3cac7d68f6be688be4b0dcf2d6316182d', transform: "translate(775,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '76fd6c926ca32245f364bcd248614a9df1701a66', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b298f34db6eeb0254fc2a13d8df42ffc683618bf' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cd82b0e8716de2395c726a7e0b934c9eec682e87', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6ee144d66b59a4410f9397fd5826adb4fdc280e2', transform: "translate(899,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cbc704fa726e9f5c44226c24e2290865410b77be', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '395cd4bb7417cbd80b6aeed45c1ffd7139904198' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b0cbee2dc3d73da55dd24c8bfe69d3e6e8e87bf2', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3edf5aa13545328e654c178111ba4a77fa23d028', transform: "translate(930,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ffff95ebe44d03f698d59b421967d747f17a4c4f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39c6f5387bfcd11a29a354e2f2b8bc5b6e911202' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1d93a037f979930653b1d34a0708eaef5b9ec28e', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cc3710ddd72c97de3b21fa6cc6decc1fc82c22f0', transform: "translate(992,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9332d0a5e3d8280c3cd628c9f3caa97ac10b1323', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '90d7b3e3223dee86203d87b442489f5b8e427482' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5ac229639f08184a9b9f6279612eedb46165ab8a', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '717b000b1fc44aa22ec52386bf110f3d32a91504', transform: "translate(31,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e3c83445ebc8768de0bd48b523a3942bddd377d9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a3775c2a384b15aa83d23d2d5cd54f447c880cc7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e70133f777ebd8e5e2b19db3f527878e8b43d5eb', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'daff59da7e37ca1b4a673004382c7f9a3f8d8c86', transform: "translate(93,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '45f0bd7c444a053c633616fa76d6ae6ad8cc8c17', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fdb5d2db63782da2d4dbe07f4e645da6e5b60337' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '93ebf1fcfda15e74c5d89a4b917fb242ddaa155b', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2490cfd4f6d0b5dc63d42e3ec694f3df64243f9f', transform: "translate(186,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f38dc9d62ebeb0ba1b0e61e1e3b600de2a151c25', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'edc05ae9a1dabe33f822a3715d50a51136a93747' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c5436c630e6d399ec1a31c029bfcfed2e7786c26', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7e489f5a82263d822537b341f8ba8ad564ef5504', transform: "translate(310,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ab1f726bdcd21dcb065d5370e2a899a4e89ed26f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '706d744d717009187b4988daeca9ea8caa31f30b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '42e5c68dec3ee2b760c6c720bcc8863a9ba61508', transform: "translate(682,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '46d26c37e391ac1599d4acc9de13dd2d84bd13ca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '20e2faa843ac78f23e1dedd157b4fccfe16e49e4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '02d4a4eef3883ab7dfcefee241d9c0214941d9c4', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '481f5748f52eff6d79b9227ef713a6f176475805', transform: "translate(775,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea2e059c48f376ca88ab6c82cba5b89e19cb86f0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '072bbd93934e5e8fcfb38d1aad0857fc7cc4b2fe' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c760808d7b871519fc12efae3c8db81cdd8bea62', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f3ae211d2c18ea60be74ad2c8c54dae0cbe82462', transform: "translate(837,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a75c14f7630a004bacfb33afd05ff839ccde8eb2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '86745c893317c157bf14e08027b829edef1a8fbf' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9a7269549cd221d8193cafa27bcbd37d7cb18599', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '355b4f1082009f5204359f7148a594bb178268c9', transform: "translate(961,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4abf8d04b37edda5899f706ae4101858f7b04815', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e8674c23d23af55cfc5ea9f43bd46fc856d30da1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '48d0d8b167311e036bada55012a4376b91522562', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6afce9f72e959100eb1bb589f9b6d3045db35ce6', transform: "translate(93,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '842c32d42758bb1671409f0dd18ac8580657dab5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '108e8dcf3699412e8c004dd95943fe59078cfd67', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cf96c4ad4e7f7eeee412a39b7c9dfbe69b6893f7', transform: "translate(124,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'efe377ab7b61a371251351690f6d5a3a0c415d59', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3ab656b68e5ca420d66518fb8bec70bd6fa69560' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3e26b4e93498b432c3398a607e8037f74751181b', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'edd7ef2558eae70c2cc932eab9920284b08d3e82', transform: "translate(217,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b9b7a9baf660b7f2d955f4a54958628a44b3fb64', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e3904ba870ad1a33a1bd2455d6c72956127e9b7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dad4a892834fd2108066df047ce3becabbee927b', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '50f80c487a8a7031cbbf87580a04ccee4acbac94', transform: "translate(310,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1612c12dd308dd88d6b9e3f85b5c9f91a21ef6d0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c867e3a4e8e3a40c94636a3dc791641de5ca5957', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '652c0afb01edb215fafc6f567c032ca1af07dd61', transform: "translate(713,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a2b13391b5f1e65c748ae145e80f2035d40a3c8b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '775de354bb7fb29fa622aed121e4c7382151a43f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b20f29aa7dabc2c5e218f619b9b4446017c60f69', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ca5dc9724f3ec45288153474bd9cf9db727d937c', transform: "translate(806,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '18dcded0bd77bc8b2a8afd6c2a97fdecc5209b04', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '747645c0827c12fac309143f71cede74e0112376' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '513277d56752c5b7088a091aeeb83ab66a5f4235', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c3466beef10853e77087533a23c7ae5a9cd5c5eb', transform: "translate(868,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd2e31923277764b396a2916fe0534ee845a2487b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '93b5dbf0df5f13cf904d6b998fddbac8372d29b0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8dec93c72513306ebc451051dcf387d25bd83510', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '399d55660c249e2e9390708fb39833be13a1357a', transform: "translate(899,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0dfb01f8a1e45573eddc6ce15d859c5952a93e8e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6376b8de0c8dc9983802ef0d349e2d11e363728d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0461e8795e6bf9632cda26c4a8a581c9f1d904d4', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '830f142e64e45c8f792f72e881585a8ef87e5b1c', transform: "translate(992,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4ee4aeb3935e63363e2ad595b1de08599793c1cd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b06f178008fc32be13f08d782c301015d0c743f7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6e19a64c33d77919b649d3ed7dc0fd3b4be40604', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7f93ff67cb9bb27646872a82811e51066818f41e', transform: "translate(0,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f8d8cb106f93415db2cd502363a298af8f3b52fe', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '619fbc8132d3d01042c8aa3bdcde55c9ae634d0f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ddf0cba76e76265891ad308dfd6df83c54529a77', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '62b9cd45cb747a910a3781b9f81b5ef2bc25f75f', transform: "translate(93,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6a9e93ab85a2526956996362592f03aff04cd55f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd544b174672569ca43059fd5bf09d7d8d1f1cb46', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6e3afd0c269e602bf098c1f9431329e12d0e4e08', transform: "translate(186,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'db06889a19dca0d6c59010cdeda18be625564bcb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f82686e938c7e25c3ea35809f4c3e1adb2c06910' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '322a100790e920b5a6d7e62bb854070438d51727', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fc4374a92684f88af58bbb0d9d8adde7bbcc629b', transform: "translate(279,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf92aa110a825924cf099fcf6d87138b552cfaa7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '65a71558abfed265dc3be364e4c9cf9cae30a0cf' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bfc07a89d5a5079e40c0ca1c3f2d95b85b573a6a', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6d0d38d570329aac46205aac2b880e94a048489a', transform: "translate(310,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a45f6e84ea77504328a537046d9905490b4304ea', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '77ccd2ebfd56db4464d090dfa37baef6cdd41957', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '37df2f695984300485b790ab4eea907496bc82a6', transform: "translate(682,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b7a150ede0046cbce23ebb4332c856b1794928ed', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '09d3a906d53eacb41871f1fa0579b18b001860f9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'eda432640976b7ee2e5cfc46096b69c3771d71a1', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1029158d66bb5029aa56616b4c80041953557f51', transform: "translate(744,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '15c6aacbce8caaf3febe180587b771b068d809df', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0d7059be3579ecadf456bf19886ee5669bb56ecb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '35f163cce514ae6450b865ea1e144646e8ebbb62', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd589334807813f9d7204261525924466a4019a4e', transform: "translate(837,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fbd21c81582310bb597bb449cbe62e84a2377b98', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7692395aa4cc934f2e74eac79cc4d2565290c223' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd2b04a666a19354597a3801e5537cef40bb5cc22', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '479f3f86bdfbab71a553598ae1667855f308a813', transform: "translate(868,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5a9cbfbb5364fabf08bc96bf7218643e4bc4e102', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '6e5b638cb2692652233f1b9b8cd7d81038df76e8', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '493418381fc2aa921d6b969cb62d6f559b875df9', transform: "translate(899,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '469fae16661b33400c7767c982c1faeddee655d2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '10fa56475cd56e5d80eeae09da077c4b368cf353', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '588cd478cbb3e54fd6adf76ef45f1f89575a82b8', transform: "translate(930,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b3981f55ee7c08bfccf553259b8a5768c278630a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c9e0ef4504922a2ad71d04aa2b00588975c28726', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b60329af0e93affec8532f9ccae877c3110f56d5', transform: "translate(961,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '58740d8c58895880a0ca8e8107c6dabc9685d942', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8e59dc455570060a634c29b15ee1949296ed59ea' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3b3f8d877e0082e64bd6f719af5f93817c087e83', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b3177bc346a3bb1bc4135409070b738df9134be2', transform: "translate(31,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b87a52152e85e1296a064a43166924439a8f5342', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b5bbcb1b7fc0158dd6247a93e3dca0a9caa86d2c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4beb8c444dfd8cbe99100805d81e00dce3f4c65f', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd64cc593029c0509cfeaad7eb00b2a7f3be8a4b4', transform: "translate(93,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5e9b8d7c729612add9f1253762ae632276599416', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '88f12d9f1c3070d0faf525475353fb1aa7d59f89', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c0eb88def57320bc63efdb746f2a03d1700ea985', transform: "translate(155,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3232c3ef64891cc6dab33b602d6e9b5587b7f43d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd4a1c1d1b7dd15a33cd8cadef12dc8297b666ea9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '534182d253e370ebaa39c0a5f78a831f0e5e2fd4', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3819cc2c783abd1ff98e4086df47128a612f415e', transform: "translate(217,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4fb34969054e005e5040a3b97b62ac2e3b980f22', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd31cc1c58151c61a8cd6d34146992b3d2569f0a0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '215e9de6484df62a9f26a7b3435b8541d10dcfee', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '16b0bfa9336a24176335c6bc58bdff1cd23634bb', transform: "translate(310,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '48b6a645922547d81e4ccc19feb3e658ec5de074', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2853fc03dbb0f37b80ff6e74862ced6581e59282' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'af7cdf00a17fded69e57d176e54c476453e0106a', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '103d5bbefdb9c8d732f5f77985f60bf207fdd4bf', transform: "translate(682,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '67694acb7aa471aa6ce32db83610c458338bbd39', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6845c3d43080443e3b258a4504e498e246eb2f28' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7d1884a787866046384db5cce270e05c42650fe3', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '990407c8f9f003086bf134e159d75090fd9dd622', transform: "translate(775,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b9ba98865a69773f22016db4eed5806a284180ba', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '977bf8390f950e8dedec67cee43d4fbfbdb0e6eb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a9916cb8c59dfa117695ba4f9d3e0da46c9aac68', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd8f16010e5b830a63ab0c4ac2dfa9c0dd6dcac0d', transform: "translate(868,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '578f4fe2a0ef037a8fadbdaa3a06c0186c66eabf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0b592493fcf6d040afc5d222c346051c5e1b8de9', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'be31734d26f9587b495053ef941e14812f69efc1', transform: "translate(899,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '456785f78b2681fbb32e3a0633c547327909a7f9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0a09f7570bdc2642ca8e40d421f0dd49f25c089d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1d4de7cf9a9e1f173857b5fed7f2d557ffd86ade', transform: "translate(930,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f0d05ad3bc69d666dfe22b52ec4719a25a06ddf9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '268310b45096e443ea2beea4cbb9a9a112a56ec7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '950f7fb76a5c8fbcb3ed134ad7a3cdcc4a9cc2ec', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5ebfc76c58f18c76d9e5f914ef9718c315de7de1', transform: "translate(31,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0099a1bd75b2edb933cfd38e973204f8a82fd667', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ad4173eab42f3ab2a8678e2ab4e71cb0e61b937d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b99b726683f9fe55ba943f8b58ca6192b9bed01f', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '01529a069f280d474500816573624f8e126e5710', transform: "translate(62,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b6ec99a7eaad99e5278a054c3f2cf2fea030971d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd4f0171c3b684050ed9c624d66c2ecf1113c026d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b81296a0e78c2b5ebe9132a8fe4ac05a19061a55', transform: "translate(93,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa374c1fb7bafdf79758001e24b6c8cf211af3d6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '69453eb9b0b94ad558572307f34aeb84163995d3', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '284ee6451a60cedd6ac8989fdc19f8aab8b31523', transform: "translate(124,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '99e3cb141687e11e4ee34875eefcaf61df63979a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '70e455bd5d42f799e66673412c42fc2174330e4a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'de62ac01f0a6433843ea1cff20290492b0ba8455', transform: "translate(155,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '206eb24cb6e6e7ab984d034ad5b4d1cd0a91bd72', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8439752ff371e5ce167187b1cfa031982127af98', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd76f264307d91aa83e95a6dd505d6b8db8855af5', transform: "translate(186,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '53ee6c97c566cc8330ae88a5a8acdc000f706c22', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '18af2f6f4f7996f16d7589b55d172e0004a736aa', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cb9a5ee83afde7b7ee2e22716bfc0be4450a4541', transform: "translate(217,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cdaf9b8fa300bcd51bee211f7181912c04fa02c4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '531411daa716d722dd20b429536df54f7b92db51', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd26843934367cfd43b96b51856aaf6e7fdb8a511', transform: "translate(279,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4aa46b5cfa639e8c5d2fc16276da2ba697902a80', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4ced01399777ade1becf8873997c5f2fc64e2b1e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cd3c1292b8fe03b7bd4002fdff1357cdde6d143b', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf0e254ae0ef5247c21d8e87c671565569db8946', transform: "translate(713,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '963fc4caec0f86eeb4f49a5d177e6b113f7b083f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3d22019e63d6f6bc1614f0c76d146603dc6f6c02' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b4bf37f1cfc2c7d1f783f397fe75dbaac32b6023', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e2d0ab7e15dfadbfa877d097357d3287f3bcf56', transform: "translate(775,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d8bda7b2c3c604fcbdd04be2e147fb9773e7678', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'feaf5fe72cce7ea61b8198b8b10089745162c9c2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9252e103eef65c5aa5c29ef60e52ae804526f728', transform: "translate(837,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ef7980af38927e7b4aef5cae28bd8a60cc0bd205', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8f8be150ad0d099069ed58261edb3abed81d5864' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '975c7e45fcdf9304cb91bb559e5e425b50e3bd80', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a40d8284db4e0066103daab9523afed12e8b5669', transform: "translate(868,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '391a5a9f4368508b893c21e5d4a5d3b55af9800b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f0353c9f32e06049740c32d4638259263ab77fbe' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fb54601ef66ad5af1b167b882ade0bd3ce231899', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '930d5833ba7e1bbe8d37f35dfbe9eb4e30e08809', transform: "translate(961,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd8c6f19c36d6cc22f0db960cec44c5d378fdbb0c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ef03ad864d7bd937c15fd78e61721b94cc1e8aa7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8b1493644aa8827cfd39743ffa7971bd746f06b4', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '313848949a5e3cb14a517706c05787c4c1a0ac54', transform: "translate(992,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4c2cc5599138949498a6639110e7f693e0765a3a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0252a0e59c59a9bd7fcc88eb496b08b6d1907878' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2e2e0376b54c5a696f5fe73b11cd37fa3f19389b', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc4393136d7a9b842547cee3f8f8d538c1838c1a', transform: "translate(62,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fbd1d61320e353b53c124e9c7fbd41f68602a91d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '17d5c31634cd4a6dc368a446a8c58f62ac4efa5d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd5f15b2ad996258cc0eeb3b3e3768018e26ddbd1', transform: "translate(93,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd17e9088da6c5c5f4fad7a4a9716ba823de53c2a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'da78d76dd6ac250c824b09c78562e5a7d956926f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9b116bc0323af2a150f81063acd60ce849bd04eb', transform: "translate(124,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff7f77eb015811b9361f2a69c6a73c02c90335a2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a592796a45b2801b10fddb9b1e4a672e64d9c377', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c680206907ad94d78a9175e915fddc3123d599f', transform: "translate(217,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eda236e1506b79c084d437452808dd66d250ec94', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '68b0aca304689523e2c5644d4a43edf3a5b00555' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a45159765ea33f689f4285ffed37dcce9bf0c37a', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '894bb6610930728d6711a4cc8cdeda9446f2e857', transform: "translate(713,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10fa8076a195005322e97386870f821e281190ad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1204f077407857aff896e05d80e23d20aec3407b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2658222c7bdf49ac681fa1b8e59f55b8f736f985', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aeaade7676b5a56102e3bfbad7985eba83b412aa', transform: "translate(744,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3dc48ebe7d4764e78abc8a25174c250a6f2ec83e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '331df2301ac5a752527b731753593c5e741b2661', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '647664db2583b77221aa7f9e8dcaaca10fdb7473', transform: "translate(775,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3c8846a856ac8d16c578b9e31ccd875a0d8edaca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c96f4bc466e7be27425749e619f37f0485f113e1', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a3b32ef345bf3affbae921641018196a4646a653', transform: "translate(806,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ca88eeaadf2d54c91dbc5e57cd4b83b23370e135', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f4b2cc91e89b3f21886a9532e1c5288126f6bcf5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ba462a0f5df6c5433af01db3de716d34fbb9275f', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '11b03f6a8ee64c695bf32b9654f0b898227b8184', transform: "translate(992,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e5c15600a3696548cd42ac379e96a0885ef3498', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2248d857a51484bb147d71ce8f2d06bb04fa058b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ab16cab55baa8dba4b1646ed2dc1654273e4143e', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ae44c423f1631443e73af1a4fffd583f0a0272cb', transform: "translate(0,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9ee36d23835a9ae61863fa31d34c3f6996342788', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '69dd3310fffa81fd4db9ad055e2fa59b94cde485' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ef2006b8513de8558fcb302dbd5889fba43568f0', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '78ec2007cb0169e9e693ad578127a8449cace35b', transform: "translate(31,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '828bfa8803c57d290ccdb5ac0694977333560bdb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e40674df8dc603992028fffa2b6df7c01740f664', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '86672f5fb2e6dbb4a38e4c620bff91f279977aaa', transform: "translate(62,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0da39354480dc6513148b7aa386a569dd62b2c88', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '544001e482be97be623cc8e41682417ed6a56892', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b7ddbc6d3a4088155e65243498e5a422129cf296', transform: "translate(93,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8a728d3aed51eec496559046503a7a0eaee199b4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '58dd829eb4c8b1287c5ac6726c38c68486a46814', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ba4e55c63d0c109318d5f88314fbb2f521f0b61f', transform: "translate(124,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '562d3d4fdde2ee030c9092982b4b4af8e654cf4d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '806476c23c978d2ef0c616ffaebbf8addaf395a7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '683cc5704aa72bb28d5d039344a410821bd5b52f', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc333adc8b672dbe5d365740f859c53a29b5cfec', transform: "translate(186,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cdbe0537880a1491d87376751f8aaaaf29754a1a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3e20e9f5fd4f5ac5c1796913f259c7f3dddfaa12' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c9c8c89737bd7b7c8edd3ffd0d6c4d7ac45240ff', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e4971bcc8b1094942f3b120ff9f59fc27e077540', transform: "translate(248,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3dc0848dfbf99799991dbe62f3ba309b171b3dd0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa47694a38c326e8a182f2b7072c53f80839ccfe' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '998536ea94b541a38a8e45b7f4e50b6525b53c37', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3e865800b5aa417080129ac426a97224f9e36ca7', transform: "translate(682,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0718362222c42811a068a8e918aae4bc1d454901', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '04ef21d07eec30c662485cf92b7d121380e1da58' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '07ff9893bc4a42b69b033c50bf85a237c2974f36', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'edd76bc58abb63916c3d64c040160c9e11510497', transform: "translate(868,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '92d7cfcdc86a71cc8ffc6b71e2c049ef4cc63c58', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b9f6763f43668b2f0d94fb632bf7b596dea26d47' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '03b57cc3accad2d55ef6a8b609d7fa68bbde44bf', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b2534188f4e84c29e3fe22831755eee2405e611d', transform: "translate(930,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bfe989952ee64597e3089a54d1cbea85ee2caf67', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dea962c6db62f36c0c639d99a50c074dd7eb741f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6a5b9c5bc2051715b2d674c6be69bcbf227398a8', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '839132b93f03d4aa3174094b73368212ef923e0f', transform: "translate(961,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fee44eb0895f5cae751efaa40fa0445f82f39115', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd012e9c5802eee4598ac712e7de08825e38c77a4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '095afc94e2063e952abd383c708023344d2accb5', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2effb47fb42539516e3f209eddb8c10959727640', transform: "translate(0,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '72cf1314079e5ab1f3a0a6a7bd4ffd43c2556f78', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'edd4063e3ce4bd5530d5135242b59b27a8c9443f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '66751675497612923ca0f6902a7a8b5585650435', transform: "translate(31,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e39b46a1f352b08173af6834225c84ea338c3167', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3c4eb305a8360b05ec989fbcce900fc7234b2251', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '65db958c28c8b7efef59f5c3054aff8ca0db0619', transform: "translate(62,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2b57f7493fd54a60d6b87a004af1e95031dba8a2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c3b3c0aadbc2f8bfe79d67395bcd32a054969903', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dace64ac76fb6e90d0686c5bfefff8466ad86f0a', transform: "translate(93,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '00dc715f70be66b847e2a88cb7c1b14f2ceb7d82', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'fc559fb766498b160bed10a823f1f0e2c26b72ae', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8e6a5cd6d4a118ade37a5975188f1047b48393dd', transform: "translate(217,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5c6279526f43202154f4812bb80e24990b945db2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c3079d94d7f64c169fc111307c1aa31254336dcc' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ab8b48a2db700254906f903bd06ced0d0d508fe7', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '44c4bd6bc5d267345657bc55d9146d24571f961f', transform: "translate(279,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c4f7f4d5232b3438ed1d0a17d14929c328d7923e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bbee7325e0a3db2dcc510e5e576ac33217406f7a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1e7b3fc144ea148c7cbf6f0e3a28a506bda5ec65', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '20652b5ee2cc4d554f9033d7df4fb42b4ffdc2a3', transform: "translate(713,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '09ed41a3ffc0d2d0b4b288c315ec5f371d0e45f8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7b3bca9feb918f8d2e87532d34ad3441ee030574' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2816eb112f77913d3a7216e1bbd7e5ae889b0964', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '21588fce7c9b9a18158291a8e4906ee31a1bcc05', transform: "translate(744,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'feb1d15a02a8d04d0bb92134fa39b324a217bc1b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'cb5152a27c030e625d5c7cbc4106b110a6ec05c9', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b2d610a4cf4afd2a83e93c13decba653ee45a219', transform: "translate(775,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '05cb958b1a62a55081f34598c1555d998be68cdb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0517fb0ea86163b26aed634452549999936920ba' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3dc65d482bfae18606bb4912ca3b44787d94dcc5', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6d6f30ddeff20a03f30246f728a4a4bb9b7e653e', transform: "translate(868,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '67c840b48ed3d7023b33fe1ca586f2b6ffe9dd01', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2aa49d7abec7c89ad362703f500e58d635c5df65', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c8be3fd399b2151dc2ea6ad02ccc8b831bf88a35', transform: "translate(899,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '84050a04a2489034b2240dfded5c776c102a11ae', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1fa6658ce3c790214fd2e7460c3ab21ad79deeae', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a8935e65c46cb2dff9db76dbf9febd73670f9cb5', transform: "translate(930,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc45128dbdc347a7a88136335fad53ddd27c5cd4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '13d5ff11bca3b772c029a1c807d3e8a42b4032fd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ef6bc0ebef6d34b3ed4b2ff3c082199ea46546a4', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5811597c2fb468e837e658d83173b3f36df89805', transform: "translate(0,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6793197549be53d81ef6df9e5fb4c469c415b534', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '5ee6e996a56777862f83e42e4fd9b766e175c3db', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3771a0819b0370c81c234e491c264d7ab74c6254', transform: "translate(31,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ef9b3a538306c8381c98de811a97f4522d915af4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c69e3ea7f92160a3dd6f18a74563ce124d61d617' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3441ac96d4b329540de2a8339ceabf6a3d8faab0', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b98a820f5fcd0825c75a338c3353dc6c4fdb6d5b', transform: "translate(93,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0bde174028fa26e649339b15a10ef9cd95fdf7ed', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '73c39258578db1082a4b4a255ab2789ac6497469' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '43b2a3b8c3e468b442ca4e32265e633c58054281', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7936a1d3a433a417dc52a1ed49d53c43d184e869', transform: "translate(124,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bbc8b18280799385e8fde331ca34900838ae0c47', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '59bb091fbec8378e81275c4bf5c585507466e602' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3d8f72918eff4fcb40bf4b5a831ad2f73cf0e5c2', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'faa80272764974dc390db2539f9a5e1ee24f2824', transform: "translate(186,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c07cc6eed467916c2dfda1d774376db41f684700', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f66b4446a39fcae92ae138be8d6282495701965c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'baf32ac74e02203b6cba26ac1cba32f0c29cad64', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '30b441ce5fbb1d600b68195a76b30d0785a8eac7', transform: "translate(248,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b3e9e17592563659e1897da4eeda504c5529fc00', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '31e7a08806122df261a4703055d8f6c86b263ccc' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7315b5f10c719a5c0c94cbf39c1c638c644f9995', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '169d71dc036e85733d10aedc9c4b36f0c702b3af', transform: "translate(279,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3f9a12825b4578b3a496ffec25d2228ef0d27dab', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3a160d6bcf6e641e95704972f6382e88b0c3f594', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bd8bbf1ef41db4835b647afb535e00205fcf2ee7', transform: "translate(310,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5584f0c2adb7c1a522ea3d9bb306a151ed2b74d7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '77aec976d677dc2e1e8bdbfa0852fb8bf6cd4ba1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0bd7ba5eca9aeacc5a66929daf5ad42615de3cbc', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e37c27e35752b86ec377f559031eae5f01578961', transform: "translate(682,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '873e2711a25d186fa9923873010b13006812ef2a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a42950b1309bc6e4b2f53b8fa5e3548a8f928704' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6185b96be51b1ada25d2ae99b2253a8366906858', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9246155bb6fea8d9386f7ce44832789b9b95f5f2', transform: "translate(744,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '32197107c4dfc54ff6249d4230f8892ae6944493', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e36eaf7cdd58e013d64da22e56d186223482516' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '439aa1efef67a6fbcbbd9a29b06652017ba43642', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2bc3f3a051334c2f81f1a2b2aedbbba5bbd40613', transform: "translate(837,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f4ba147f797029c8a26b3812709bba1443f57273', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8b1198768ad529c67cc18cf9c97ba8b310cc9585' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '46293e65e5f86cef02d04272df92c78876df68a6', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b10a56dc23e8e124a91ea71e6d8403c4aaa6d35e', transform: "translate(868,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '62e5c148813242f664aac7c92ba5f94cc4db2a0d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '632f3708371c84f3368a3168229821858adbfd9e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5fc1539576b91e4defed1451bda8426e89e000e2', transform: "translate(899,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '324a7cfcc3b6ed3eef8cd905ac6dd0bffd7d47bc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ed6c3b0cc75c2538e1df76b5246a45940ae8b360', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '899c5dbd249ecc3e19e497f83ae078508c74c2ac', transform: "translate(961,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b347e0970eadba99617905fdcaa0697db9b1abd7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8d625ce82b320c093dcc4d03393fe39160261a9f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e08d1e524694caaa6ea35fb83338d39aa5f28a09', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bd4d31eecc8c12c55a789c8695b08658f0a19286', transform: "translate(0,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '944f7142018cdcbb5bbc5432c7af658696f3c57d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '477583928920d4c549b3c292df6aaebad13904da', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '18ce62b708ea24f2876034bf8f14436a34868a3e', transform: "translate(62,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f45d839959f2f08d1ef1c0da7b3abe91b32d6bb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b7b986cf871552a315e8f62a03bf2e7904e5a712' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3a93c37fd83e527b54b3b7a8cd80dfcb2723e6a2', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '45356a4bd00eda0dd03f21cc0fa5e84ec126aacf', transform: "translate(124,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '176518f792bf0f1e5a1322052848d2e22a37572a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '290fffe0d6bc4cdee243cc692585f518e8730fdb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a7e8fa8df9481d4a2f0ec7973ba3e6716e492125', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'db40015e9936e89e1a63b4a9cea8f1dc4d2ad664', transform: "translate(217,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a1f32bace6a83722f0384a47a1c01123ca8bf8cc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8bcd213ba97ef39f852dfbc6401a03e361abbfa6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fe6b59179676934e8455f239305dcda62502a296', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c6fc2eaf25326ff4cee8abd86a805f975e6188c', transform: "translate(248,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8336f0f5f6bab89cfc930b3ed4669821e2e74fbb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3753292ba8efe09ed22630ad7b13b9cb3739e4d6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2aaa6d084792deed336d7b07c502e5afbad630d0', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2186aea761ef75263e2232a7ee341f42a6e61d45', transform: "translate(310,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e49444a9e1216abbda40d726ea27a8f85f0777c5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4f8c6d7bc641ecd4605f5e956a01bba961445527', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd7266cd72c215eb24a76454b060b2f7b405f346e', transform: "translate(682,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '16daef6b54dcd38490b3b336bd115bafb93c8fab', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'de30c7f49f7dfa7ee5d7a47e7701e1bdb5be019d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '76b00c911134525edf15d370705197a896e1c63f', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b482268c663bd9ec2fe21746b2b193d6871d659c', transform: "translate(775,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cb930d3879ed0e8c48f8f5a189ce422e5b14fb81', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd89810e137f54b0cfbe3de49acb118bcd739f2f8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9abaf1ccb7e61f07c5002eb87f996225d9981e1d', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'db6cb759ba514ef09290596dd151acb6ca012185', transform: "translate(899,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a8707e01bb04d2b0e801a6cb1be37036e2bded22', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e5ac8100e9947cc02b1d1d3cbb7a753348563cce', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8a37e7362318325a111afc213023733c08157ba9', transform: "translate(961,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9c8b2384d354fe7474adf8e67659a9b2c3fe458d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '37378662d2adc38f52b9144332580f9a6223c487', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0ea2fda0f00ae0f1ab23bb222e0bd52aa389c264', transform: "translate(992,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '35cc9cc91afc33de9e909ce41a456b68677b7190', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '513db304622919b9002700d4e5adea0debf2ce88' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '209ba6a914de4d2505a1bdcef43fc057a21f1d59', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c1da6688b77c0b8e5feda106e7c1fd476a94952d', transform: "translate(0,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '87eb0206d14e84c422651abbd100a629bfb2f707', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'efcad4a2189f6063032cb4304c2f6b6cdb02fef8', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd89915efbde5163415b4fd35347a011190cd48b1', transform: "translate(93,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4a86bd32809164c98bc0ed69efe0350af0eed2b8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '601f3c5d11b741dbe55a9c8413c3ee2a455fd453' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd202a88e884b047c55763e9f6afcf548acbaac62', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2ecdefa41899aff0faab87826f9a7e1c3e4564dc', transform: "translate(186,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '40f654788a03a5af9f85236dc8db52322a238d14', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eeb06c1dd93e6b7ee3a1aec3956c944e629fce64' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bb53e248bd9c061f4155e80c88e69263d2e0d644', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fefe887069c24155c449b514db095d7ea2673a42', transform: "translate(217,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e79d54fc5ebc9c3d0bded2b702364bb56aa8b3d9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ce365c703c9565e76bf03b059c532ed203af62d0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4775a05d0f1b9004d52ac6f5995b068fa3f4cbd1', transform: "translate(310,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c315f3835445455d8a98423f854284a837c52059', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0958a1882d3d4cf9a27c79f3507d31fe2abd33d9', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b4423d7b9640d3650136c685f9bbe6203c4f1dc3', transform: "translate(341,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6a33aba3dc8c1b8bf9af85da8e37380b5e24bc70', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dfacbcc8e47bbaeb19d42d7ff2c593a896e3abb8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '229b845504ea52ecdc964e3e8600e74808b13067', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '06d56632f1a71c8f202745ef44c9adb7981b70c8', transform: "translate(434,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4ac1cedc8f72bc32d542f5fa14f33badaebe0270', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a4f76afad9cc8915d9cea82e83354b173e5d9827' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd6698c4c8668cb0d048288a095acb406c7dbdcad', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3852b392a988da9895031c262877a21a433e64a5', transform: "translate(651,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a11fb190994b3d912618ed5ba1a3b7d9840ac5e1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '23daaa6bc3ba318dd34d3b9b55583a665ea5a2da' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '742be953a2a31ec7f1bd747694d95100ccf05690', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4af6667a0dc9295ff247f5a43e5b152889c81f85', transform: "translate(713,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '95e1cd31062daa9eca6a9389410ed7c5fc01292b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '142cb48ac8d819be8a3056b3a188f85c0340b802' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '356337b03ff22df0ba8c7ff8f5c30cb51b1ff6d0', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3abd96f31b872f279989cf795b185760a23b5f30', transform: "translate(744,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '144966eec42d6a0ad379910ab87a3fc0348e7133', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dce5fddd8dfa97d18111c410092c2d3da1116b8a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e620f6a56f571d337522dc9efd886d4d6076c0a6', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '11427ef636eded19d57068c24e2f590ac6ac6c4e', transform: "translate(868,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '22c72bd45f2b8e53984de36fa33e6d61c1040b4e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '46cda3013d7b7326b8e0e20dcf0b65dcbf8b8eb5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'caf7d68f276b1bb883478c64a4b0b8fe6a5c02e3', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b561760538ea99cd5d87782d0215be50da3af11a', transform: "translate(899,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49320a022d3b67950cd39d05cdacba88836688b7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '468def73d156e988181442416b98eb2c7c593794', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '17d1aed4687464416f4cc8f1ba401888d6c2e6ff', transform: "translate(961,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2fd500f9bf4103aaf3e8e9466c8268314c94b1fc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '92e67f65ceb3eb6bbb2508cb12f83a1022767ba3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ab4d993f4a7d40430912804aebbe813e7c412fa6', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '43700a121c1630ab1d9e1c93666d20583e7c6f8e', transform: "translate(0,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '976079bfaa2e539ff57e5475fb48fcb5a777b66a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '841d5ce597f6e6483f9c5de195371157b81a0b08', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '531c699fe5cb5cb2880398ad3a95425541c62fa6', transform: "translate(93,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '965051195293dc9722081fd44bd1a15dc3dacf8e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '597ad5f5c956df3e2f2d0c24a1056925cc0d513d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ffb3d323d6191ad52b31d27be0ad17c3dd34cb15', transform: "translate(217,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7fdd52fc32bd13f2dff7b80fc2b9f7141d2ac9ed', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c129e2713f6578439942bb2dd56a36666ce1e604', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6bd5c835a8925007b554a51ddac98e826ef5aaa0', transform: "translate(279,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0a8e797333c7988a66df0c218723441a11e25a1e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '515d6667f01a3f87938580ade0ee337578a1e16e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3d4f769d4b4e93142e1f0d2f09510e113414f163', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a0639c825e577c988a4e9ba236d0d7ded833893d', transform: "translate(310,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c270da6f6def273a60352b0f75b0e9dfc2b14516', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f488713d92e06d545a8b82089e9791a80cd91ca6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '537d913860e8ffb27ba53334c6454fee6e1c7c6e', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2064f933642121bf0927068bed72051274094f01', transform: "translate(403,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5e7286c4e60bfcc913f1be62f188f9e3a29e7b4e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6bc89c0b073aa6a9a6ec66c1673362decbd3d132' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'db659af16d04a4a88372b214f12ba26e4fce68c5', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e7440bb06a832a16c25d4017aa870570648242c4', transform: "translate(558,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd29fe7ea590f1bb0093fdb86d6c495f274deca1c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4f10af453792a64fe447700af4f5b429d9e35cdb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '61f71a2aed062829fafd933e50ee679563680ba0', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '46a8cb35ee7576865fbe1bd1b923780c214e4896', transform: "translate(651,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a48b3606fe9160b562ffe98ff26b931f2e9986cb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '85ac3430cfce13da4ac6109edb5d9e732514be9d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f2beb2dbdefd5dbb615c2b7b0b3d2a3024327e3d', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '18ca499e3fd34a8705be5afca1a6c575679b46ea', transform: "translate(713,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9bf60f4726e732c8966709d66cb0aba3581a4379', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '257204a84a4935bbf70e777d3265c16526042335', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fb9bed3731c73c6e4ffad45662872475e5d21b87', transform: "translate(837,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '577b5381f576771302e40d0ccaad7041d09d054a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd180e40d0e35b9fb2d9488d4575fc3aa5b121747' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7a0102a736ab839f674743a14bdce31338462b0e', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '14daf4e363f15a0a3ea067fdeab9bd591954abef', transform: "translate(899,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0ee28f59569f3f0a21448f5e2429154219a961b8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5f0a17b5db76f70209d8f13562cbd3ce74584523' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '94e4a91c75af9e63242f1fed85b3c2fe13c36e45', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '76823ae622b699c187c303dbce9e40f6578e75ce', transform: "translate(930,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd9936cb354ccc3c4b0c04d53472dc9fe487f0730', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bcbd25bc9959b3bfce497b93bde4116bfa368233' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b3098490962b42d5180c8f33612144d8378a4529', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '82a306aad58e72143f050c89bb981b1aaa94a78e', transform: "translate(0,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8f2e1cf282fc2ccee1221ef8cc3e2b9b4da9dbfc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0e7d304edfdd61f5c37417c52276170a1118922b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dfe106b2c3f3f0f32046ff7d7ef2c4bfd4241f1f', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9fe58060e13c21945947c76ca85de637807d43da', transform: "translate(62,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f5b30dea6a70e8d87feaa3e38919acdef76820e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cc49c1a61761d98319df3c14fe9b28df58657097' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '71a73c2c648ade7da63a47b5accf40cb8f931ed9', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '94c20b8e562b89c9bdff329361c8e2abd2e8c8a0', transform: "translate(93,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dde59680c6dd5fb6bfc17fcd6c91361423233b42', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f28f019b2ad6109a20d0c8cf46d5c2991503f67f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd91b2838e76829339df40b64423fbed6c06a180c', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea3ebdb99e83185a05d3204912f99ea376e783bb', transform: "translate(186,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b26f77665d4380df26cf5d667b20ee228953da6d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e998ceb06ea8b549176506e5f4e29a877d29cf05' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ee627e9ffc1565eb0d2ec4d5cf1d2cd6cad42f8c', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c92872587ef76483c31024f6a6593c4a20c0a31d', transform: "translate(217,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0d451e78bb879533459f404d4e75ebb048b498bc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bab7729e4af1c3726b151102c28a33636f2319c2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3a741fedbbf4870728e3901d3170a2ab758d334e', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff9bb9403366bb8c6d020397e6e9854dd108c2d4', transform: "translate(279,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10ccb085139915996f7d7354eccda66d77f7faf9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd44f069c53c7b7fdfa3683c2b48e4a833a9038a7', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9c84cbb0ffdb63806757c619d09666906b79565f', transform: "translate(372,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4597a34abf39564969c7e5dd1006f307253318ab', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '26372d8d11f5b28a42c1823be2e8617f82e6303a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2e32422f00acb906bea11dba49ffd76740a1b937', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2a8678319a9a7e90564f3ca1710d61ac2abc9447', transform: "translate(403,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1100a98526015b6db378d5058196c9f9535671fa', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '92771bae13c515b48aa7662db1baec726663b14b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6f772464ed0404638d42396a91e305ff50dc7e14', transform: "translate(434,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dd964ff8f33514288a1aa0b85e1f8199ba67d702', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2693e883a79218c9ae9131c23de2b03eb8efb741' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '56b0617893038ed33c03abf227a3748c61359177', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7308b55dea5702538badc62d29ccc69a0e08e89e', transform: "translate(558,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd9569d6121a7a75f39006a5d6cb9cae806efad84', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'dfc52b01de49b67ea46a1c9e7ef2b447fe1da651', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '379ee72e054147e4f4712fa8779776374cd612fb', transform: "translate(682,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '29c0d8100a0bfac711230426c50a252e9949dfde', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '50606a9cd890375e3b840e7cf1b470887f91f769' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '46a79ff88c4e363df5b4443829f5c1ceaeb6d1e4', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '01aa04df4b35af7b65dae50338857b37326b0da2', transform: "translate(713,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '896fdb24db43e10de129d3b09a7b35a599fbd08a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '90fc825a33eb4ad0d2771eac1b736a3b7e83b1c7', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '812e53fe7aa5d965cb6ee3971af36dedb3357b19', transform: "translate(744,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f504f40ad84325ec739915df1a4594de78b57764', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b6788c809a3c6e38456bba935ce14361026dd61a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f3eba56b439c6648e9a65fe4e6021303fcbca5c8', transform: "translate(775,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5e87e5583a7d53363809d47fc84027a09bdeb122', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'bdacc3873c1d8117c7206e7734e33d0911ca2ffd', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '92f917b27ee654cb2c79ae308987ab9b56e78cd2', transform: "translate(806,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6147b0a704f24db169bbca79d5e8e9e4dc921332', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a8ee5e548d9a5df437a92d2f079211a2f689147a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f356b34235da35f8f6dbaf4510476023c3464968', transform: "translate(837,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ace9bf04ca2b05856c9e0b96331f51b04486cc2e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '969ec0eb7b39c8c4e9d21ded8fc3313e1ab554f0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b6aa243f7ea25299d978062b19399c47c188d9bd', transform: "translate(868,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aa0e886f4dd7bf3c7aeffb8f79a5958769d87cd4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e84a053ed426c50dc04cca3452cd62d974d14698' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a6a5a9afe4af31a347b32a23257144188bd02f8f', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0caf5032c8ec846841d64c750ce1ef8b1274768f', transform: "translate(248,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '627fe0aad4083abee60919460a84217594f7d066', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e1a91f97a4b68d8ddb98d530f2cf65ca29909dcb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '15008790d0884950433e3cff87b8b6060e07b9c5', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5978c75cf233076acda8f1685d92b9a0ad7e7b41', transform: "translate(279,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7d79c5260e4af88c9beb3481b2e4cf9ea3a4c849', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4fd4dbd8d6e8ae74726c5221663aa3cc10be4689', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1bf3078a9085b0e3650bd4182f1fbbe7cd579d52', transform: "translate(310,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a4dd46d078c5886e2447eba9c733868999b89a7f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1d29ec90eab5f48877174fd5b82ab9ac468b886f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd341a189bdd062f7d59ef86c511343a4ec76436c', transform: "translate(341,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cd875a8dddcf3aa81151caeff1d220772cd0acb6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f921a35189e121591ea58a66f5e2d029ec140526' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a6a89a8bf0429820adf91779175f2f2f0333dbab', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '273e3d9306a3bc92909ccbada4d8b0a20c262fc3', transform: "translate(434,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8b44952f1da85f3525c2317dfc47f12dfc726d59', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c5124b21dc4b4b8439a7039dd6c7c32ac9fc48da', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8c829bb90df3a04dda993dc27ab6812a3b6855b5', transform: "translate(496,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b96fce2c5e6fd4c6dc8e85ae678c689491d68eb7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '446b39be33dc053431fda33b9ccab0b884a7559a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1b4927cc9546cdd73e0fdbccef348f08fb670e14', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '641a8e05cf637c6e4faa1838941af2f440cd753a', transform: "translate(558,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2defb29c352d3d77ee41d8411acbd5f9bdaf008d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd271551f3bc32dc84018f98e6b7a8a69e1ad912d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1e8ca6bb8449e8910ea0ad3e7ca71a77219e5358', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2445617461593ef511e60b4f1be68527edbb7643', transform: "translate(589,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '88d7b607b82c3d82e45ac39557de939480e24b4b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a8939d8e2c26f47bad1ca5c664572876e795dcd1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1c23a3bd6f29fa36f8cae711449710798eedc462', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '896d8e46b88661d8dc8ae707d9f210e2ee4ffb7e', transform: "translate(651,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1105befa6f6a8b0902ae3a1bb27c43bb3b72dca3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'daa456069a4723b8432d57ae59e766665ff10bd8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '04b94458f067da3057d69a6f9e20931227bc4960', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bc14e282994218039d51b502c6c7d27db2b14268', transform: "translate(682,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ab45092b41a8b0b74329be86a03150bca81d48b6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '261af7725ab66a943359107dec751b1e1db42f18', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '88eafc9e04313c7df1e3d5ada97ef362e622aea2', transform: "translate(713,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '25021e1b0d5b8fd585eb1e16db6c820fa453e42b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '13c453a9329251212e96d2ccb5b7ea8f7cc21211', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49c124224eb79f47208380a97b24b29f8b5988a3', transform: "translate(744,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '09c480f86172f5a1c6793453e27f09f05ecad68c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'cc47cf2290f777a6bde460db7cc3a07bbcbd72a5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c3e81467f7c3a4c3d9f44304e7a3d244d7d8f930', transform: "translate(868,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '76dae48784c43738ce26aae3ed81e652fadc6ac5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c84314675366ac604f55fc108468d73e0787e499', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c6411d1dc19a2f15cca4be65bd4d414a0827b92', transform: "translate(899,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cd425262f3bc00d5fafd0c13678c46b6b45e8d92', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5dd81da481417baafb7716528c08d308b2e5b470' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b2c82af9feaadeb5d4be8ffea8250d78f68e744c', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e338b17a234ece4b452410e8794278c9d327f4bb', transform: "translate(961,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ca57f2c354b2e09715f8139f1cff538b9585d197', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10985ffb943393f93d2c6d99b74942da00def574' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '22b3603a4e79fe2eb201b3897c16d3b872bce28c', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dbba6aa1eeee58f84e636ad84d1b73d6eb8ffb5e', transform: "translate(992,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1642ae5441008b96e16f10866dae6d35f4f25391', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8eeb1b06a831c7beb1e5a35d1317da71d0bfbaa6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5dd869b1197b5eba7aa16126989602d2c72c1f47', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a7ee961f96ad97710239056e81f92acf8fb06a0f', transform: "translate(279,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bb4460e5ddc194203d1d15145dab71f2feb409c3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bbc980fbd6816151b955f08b79e6295d16eacca6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '27aa781ce08113222322e4070d92f10eaaa68093', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '987afddfefa10bc8b033d962d3e89b7cae8872ae', transform: "translate(310,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '50a893f4278218b5672be1b5c0b37a5c930dbe64', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6db382eb15c6c02b7b3b07826c3ae4d63442a5da' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3d7938ca76bb1c5d0f669d9f48c713d4ba5402fd', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '07de89153c160507d9efdd33cdf1e78546ba6a92', transform: "translate(372,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2498fb3625ae7e220cf2aa17afce35ab10d2a21c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e0d4a9110cc86480ff50a627de2ed42d971ce67a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'be541bfaa68772e2db7506bdc9d42ffdd20237df', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7f88a877d38f5352b801aec43d79c96ce7bea8c7', transform: "translate(434,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ab38467aa53a853600397ce588ed1d409d918ce5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'af9b39714075460aee87a4258049d9e5ce799f53' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5b133facd8dde1d01cf20777f970efeae9963bce', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '90e838578d0492d4b06503c8161464ebc4b3ae01', transform: "translate(465,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '56bd8a2d766c2b6a4c54fe6d201df6aca32ef81d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ccbf411f11330cda1bc655b34e2f27589525f83e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c07f8671fa8e7a186d83f28f4196848df96c5b8d', transform: "translate(496,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c5d99d16a3b81f50affa16195fa893b0a8a86e02', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b6db7302b012a63dbb2d425b19fe1b6ac675ea57' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f4cbf3525b881d9d203525cb376111e1db14fdd1', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b57d5d87369f0801d98e764e741a417d77380bfb', transform: "translate(651,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a5f7468a75d3effd777fac9648ed31a303d64b14', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'bb70b54d162a960e12a0f2b537e1ca9afddbd10a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1730f60ce7ce6e947d990f98983acef0dab33d67', transform: "translate(713,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '014ff0bf9867037e583b6025378f0c96cf1c10bf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ea49554833126a78bfbb96fb85b2f61822daa0bb', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5eda84efc6cb465b840bc62181d5096adfceead7', transform: "translate(744,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '34f8e078fae6a62e9815c561adcb079280986256', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b723dd1f8644ddc90430bcaa7b2f81df432623e0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8013f54713602e8281246c7569c86ca6f49628d9', transform: "translate(806,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'af5857989a44c6a1c57645ae586afb805e7b941e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1d08a8b43f00ed906f1efc776e1ca2eafc191214' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5a3eeb802d6858756e01344e6daeb46df140e8d3', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '447990b6c227fbb96d88b689de26677a634fcc06', transform: "translate(868,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fbf2948394c3783d87c52adc038c71918cdb3d7b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4ee612ce09b76ec57f098527586e33a20cf0ff5e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '01a045f3a9cf351e7ff4082c092cf9798886cfda', transform: "translate(899,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '06d0c064265e6c12b3cf803839bb41b19e357630', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f32f0bb5ebdfe6a5ba4bb2a1f40520b6fb31f21' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd39f6cf3c8eba8b86168a6c495e8daa30b854677', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bec872aa0005d53fd3c9886b209fb483b6453ef5', transform: "translate(961,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10c5ba47ae201cebe8db91d5cb88a9945290db67', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0b4c4245ec54eafc1c1e6b728b2442e0b265390a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e04f037cfbdb376bc7b15a8ca18e4fa5de486034', transform: "translate(341,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '934ff94b4179b54ccd5b000e8fed1a121bc6bb09', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '736569eecd1ab32bddb19f609944c1fa505b3213' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '941072e107d0d76ce970ac898ac18b700ba84c21', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '97958cfabc86a9058b3b9a78449ee9dfc5a13a99', transform: "translate(372,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e28822c7389b3ae18a3c499efe868e1ac7a04174', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a8a3df26ee8bedecfa8b1d9d0b9068c8530f1480' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3ebee7b2ec66f293c682932ab7e581afbe43d403', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '984e11ee93ff99492ae16906fba5d8d87067a0e1', transform: "translate(527,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a404f241da35cf3f310b4912f6eee3b24fca5dde', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bedf5d2986d2531635a70eefd283fc82cab3bc49' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ebf60d78986a1e53f1d587328db909edc09d99f7', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '14380c247b11e57523638918f709bfe0c9d3d253', transform: "translate(558,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '48b571706142a5c40742554be9fc3c26a9dc91ff', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '945002b4e1129b7734ef17221a836aaafda4b883', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '020323d56dc29ddd9c0057ce7749f81b3eeca19b', transform: "translate(589,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e6e7c97f3e8580d18058c3ad455f7de0392b3f14', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c8e40c692a155b1997969a8dae29c76f5d6266e9', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d2f24ae8ce6d84e4dc344450b867934cdee49de', transform: "translate(620,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0b2fee611344891bcdcee358517a44100c430c08', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'dd3a0f9ec6fcbfb96c56f5b84b13107a67520c07', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1125d15f97d4b61fda8d3b6c9d00f56315d34ac8', transform: "translate(651,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49c57ac8ad804fd5ee7d5f94b22e7e6b67595f02', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '438a0ba7f74b730f225abed4373fb95c3a3ef67e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '64cdcaeab08edeb9929dabe3656bce6a9a2a59c3', transform: "translate(682,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7dd67fd828d2c41cd9ac363be8cf6039fe4f0184', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '7af48be271274123c3f1eb0430c0bf5486d4e4f8', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'edb85b64a66933f2863e168fdc1bc47cb61cea51', transform: "translate(713,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '51aff59e658afe0b231740b067782ccf6fa71c4b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '485c9abadb4026bae604ca06477fc6d24a078324', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7467942218e5893554134ade9a34eeb98245ec6d', transform: "translate(744,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d88e95c16336c434bf8721e63c783ae912f8bb5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1a47092e6904fdd274b5a8116f09d79d62fa97ca', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '96f497b593b7691d0ce09c4c9bc4d96dcabc0f3a', transform: "translate(868,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '85b95046db8fc236e775299fb3e64df49503bf40', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '77dd654037da16f1d5638ff1d529d7021dca4462', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6aa03d032d48a00ea53123cb5347964799f60e5c', transform: "translate(930,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2e6a6c417827151d287e8475a516576cbb97e832', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0252d359d9a66a7778d33371dd68500a3e3cb86b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b33c0d4c175ca632c42305510c109a60b5d29cf1', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '764584fe3cb5e847ba0b8365dba1589827954406', transform: "translate(961,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '538037576c40a791b044528cace35e52d5e868bb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b9039991af9e73330d5a78e71c3e3e35f8ba9932', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '59049fada98d9b75e0f8f08c58f948c1b0b1e281', transform: "translate(992,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '774162ff911b911cdbf0f66f70a587a3c93a1fb8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8b65b68a6b019da612cb6772716efa0540257e58' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fa34de8913f73bbfcb48b936abec44b3d3ff125c', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8d1d39d9e204079692100cba6eedc30f52512c00', transform: "translate(248,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6604e215a3ee61ce2476f1acf1237f81a0b1079b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c6a2ba135033440889ee10cf6d3e6e4111e14d72' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '32ec253915f34ee50dfc8d6ad0ddb8e573c704a9', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd9df876151de0fb5de4910f012b430a3afc485e3', transform: "translate(279,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '20982a0be443426e6038dc27be935ca0b1b03ef7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e2926ee48dabf409633244da057676628026e09a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '457432a4a1dce931c9814e186962455e5e30af44', transform: "translate(310,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7fdd25c7e38013829db1491e873d9882f60a23b9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f6a9003115ffae2d32c9e7769b4dd83907acbbc9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f7ffde8080e8debfc6ff368eb4034f899e06de9a', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c0a54040e9037b98c81dcb86bfe66f596cff9bd3', transform: "translate(465,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '98930b5cd9c5905863ff6d61ecb9df0de27f7e28', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2224cc6c11f0b1f376f84c8f5b8bb7112e319224' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c663411a7570cdce4d629cfe05a2471e1c52264e', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '35baa0314f94dcc05ea35a17d3876c55e9fd2926', transform: "translate(496,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8a53d4d7c4af73264600cff3b243b34ad05fed4a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '001589a0cdbdaf5ff4a0e98a3524f4bb57e4b804', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4b04c10ac0f7c13ab461f713a12d0e2a7d3f28a0', transform: "translate(527,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6f349201181e96ab463822464935f5592856846b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e14d422cd62f3a5c44e4663edca0c59b33d05488' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '92b7bc49c17361b0d83b08b525ad03276fa2a50a', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e867254f3911821726d82c0768180becc365c662', transform: "translate(589,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a9e35caf2819e37a80f16ce625418d623f64c4c9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '32452d6a465480682b9c1c6383bb3a5f0c195b95', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0fb6d6931428c5c227ba952edea808ca6e8b9b56', transform: "translate(651,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f6e1ae913fddbc56a4711b7c76f4f1b834d2f99', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f74857e7bdd482a0e65c85d6c49865c25e2cb92' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1e4081c1390b96dfa1fe652e4ea6ccad38602979', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cec9a424ed529eae82f43130dd78753eec5685b8', transform: "translate(744,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '33541e1a785b72b64630904470f7ec1e859ac42b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2caf99a1ce6242db171b21aeb07944a0edb06257', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a97bf54117680a5b812e61182af8b54cbef6f8d8', transform: "translate(775,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f3cc23a7ce31588386b90388f6b0da7b8653ac7b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c70264c0fe2c061c4ac3ada8ac40d61c3000451f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '552a55af40b5f7492b8ebb0ad143d1e7ce94d2a5', transform: "translate(806,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9c4fd4f30e70cd22215e39f791031c88f839ec68', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '22407a0894982008fe7b85dd306eb11528ed4ed5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ddef513ca710f24603eccab5de80bfe664caf4e7', transform: "translate(837,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49ed488d75f2351cef7ef0f9a6758213fb444dff', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '6044c778f9aac8b2e28d3c05523002be2a3d76e7', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f656fc2a2869053d3cc2c45011f74f834bff56ad', transform: "translate(868,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '847c8cd8a0763fef2f6e5a8a1fd4a80ab5b54e8c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4482afc15a8fbcb130c2389c01c0d900adb956b4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d16a5d72f86140b9a4cc0ee3e9cf9b5cb3f5bff', transform: "translate(961,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7114855078b8fb9dd6ede4fa83653d11d4767d23', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0fc3f73b6d1512438439433000fa7160e0dbb56f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3f43d06ed39c43f363a78a46ebbaf2a2c94eb6dc', transform: "translate(992,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b7118ba4cf82617bb8863e6e1c28d2123cf72749', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '01dfa8cb723d35599c24254c747243c08db80a3a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8328c28dd345d9d6c7225e9a1dde689e3f77307e', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '38f2af4554c10b1ef6c29a54c77008782b905f3f', transform: "translate(248,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1766ad2f15071cfd5579f264b3a342726aceb6bd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '84a2c81612ceb6f664686dbd0c7a5773dd7880f0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ee52d2992683cd930d7b1dc0158c440e649c5276', transform: "translate(279,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '654bf759399664c44abb3228222d006a52762e1f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'fae65aa1ede9eb40ba9bc5886508a95263bc788e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '58db972cb4b785158143c3f387ec62374fa975bd', transform: "translate(310,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2c8e11dd4521594bd7f6118e20d17e2bf03767bd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '433c7640a5895b6ede72f296d2fc5029714dda01', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1cfa3b873a755cfd0acdef18c8f1360613bb76e5', transform: "translate(372,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5a08cfc49ea352759c51f7578f5bf83367064018', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd85573737a2aebff0287221222b58c281d071c92' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '54284d498af817d2a65ff3264a5b47a88853cf7c', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0da2a5b650fa326b9d40b8cbd68b945e67d116e8', transform: "translate(403,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bc910fe6605e0d7f693ddf6772172ffa02c8b9d1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4c6bf807b8e4736f28edf6cad88ac028cd168c2f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '160e1922edc75ecb33c8b7d4fac1e1ed70ab4990', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c5561239bbd73cad3cad4eb304e6e3d634387faf', transform: "translate(465,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '026ce70f091b4c07b70c8a84593db1104249dcb3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a9bca8cea0dc9fe686d82e74f532def1ce6c1ecd', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e892a62572d16f93cf9c6d297f2d5dbb9d04fd70', transform: "translate(589,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd96a96fd4c3f6092cad61ba60659ba3db82b92c0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '156cbb24f0ada08918caa9944763c0df1e348679' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5a78a6df41327e2e82ad63e3a675a488cba83b92', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '36849e28a6b554833b773c801bba5e71f2b100f6', transform: "translate(682,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '45494a82b5826e53734a4c369f60e6726be0314a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3ebc5c42f43571100ae3d6772b52f3165d4177f8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0f881bc5da0e1e645e15e4b4d18e3bac65fa0a32', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1339332ef1ec957ae5aebb768d9fcebc93627b3f', transform: "translate(744,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7832bdd69319eb8c9894442c55bb0d14f376390d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9d5013bce53dfd416ba606e348b2039ba6c4b285', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '057bfd2ce82a20b721d277ce0158682d99f9dc33', transform: "translate(775,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b04ac5bf54e2dd40d0f5eb1ffd5f3198b2f6dc01', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2934fc592d124d68bdbf4a9b370e79e06c86c407', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ddf55515c707e44d2e1527bfee55f71bd1f8a9bc', transform: "translate(868,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c394169d02e5e6c2fa8d53296118e6e63b6e5d3e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2bab2eb9308533c477ec2071145d3d7b1ee72643' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a345a8e7361487f076874b9a97ffae35d1ee57f8', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '68435923135332c2b60119aa5086283ee69b9ad3', transform: "translate(899,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '748ef529b06d1e3a6564e727dae04d26b5fcf401', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c93e935086caa0a0286a42a8d8848033931c288d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e88eb19b794c844520e96f68b62057b541b9a5d2', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cad90727a62bd80f8dad293fd817fcfa5cb91544', transform: "translate(961,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ca523dec040921fa992afb59569ff032fe81d738', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '132040bb3c8155c9f97dd89b340d2c1c9fc1665a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2a4dd225607cfe41487611f159632ce40327b575', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a0aa14a9e0a7f5dfc6df488e1a38b135b55811f3', transform: "translate(248,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b942a967fcd8b02de6ab8426fae5efde2066b788', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ef6878051696a4fa1a760f1ede3328052419d464' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '16ad8965653939c17a138a55b8e4794276509aaa', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b07cb9e9c43f58c312ced9a4f2dca45c22ab9d88', transform: "translate(279,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eecda33e4fea9f56be0e1ec437778a7731522bd8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9dc4733331a37258a3caae35a63f3e9b913af04e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ae4885cb3e0acd9d849e0b71b21f2037b7cb3e16', transform: "translate(310,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fabf9c26fd47d472c2babb9e5760c97796d90f1b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '533b744a6f1e849fab02323627f08d7f6b48269f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dca83c50b3d4207361b8b9e01a52b0b9f836f55b', transform: "translate(465,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f01b0a17f087424c269ac3f82d666715fd362e14', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a0cfdd484e6d8219d57ef68c6eddccc550952dd9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '69c216afbfdbf3d65e290317fc564a3486f12ab6', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '566a4435883746771722f4f127cf6b815c897b82', transform: "translate(496,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'be8008fd8f3bdbcb58b711ca15d7b78ab875f5f9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f25c4855415cfd0d3d2c01a357ccadd1deee57cf' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a044656f2ed188e741602699b02335f5c30664fa', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c54cc56d51770ec1413f6b275e6b74c5582c62b3', transform: "translate(620,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '298f7faf148578fed024bc8c9cb2f15229b5c865', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '42387f0ea07cceccfd55278894890e4e691e2c6b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a79227f8e6a007d292ac80f00c2c50c9758b2d5d', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '87273df47c4b575764881a0e9eb95e7439b717a9', transform: "translate(744,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '54003a97068ae9871da91789516662d540bbe1df', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2e7a861116a5c069e2d89543e91e7c3944329a6f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1a8b921797505b09836c029e96b5d87841166a45', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5476caafebe772d11ab5072fd08edd96948b9555', transform: "translate(775,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9ab4cac5d99c60b82b6eb06ac1b966b973ec3324', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f1bdadb8e68f9d665f6a4107531739ecf9992b56', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '17c704d1f2303339a66824ccc5ad9299a90fff91', transform: "translate(806,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e44034494aca1409999772842ab5d1b93d736820', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '958145ed105eab401b1edba116323999640ba0ee' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '795f8cea472aec873b1ad6427f767a231cc991b4', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd72505d05878df0693e4058e8cc55c13a52368a4', transform: "translate(930,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10173ab4a173ceeb98896a2998f4618e92fbe6a0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd70969ec5aac42371c3022ec9abc767ba9001aea' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'be71a126d671d51d5d1ae3401562e0d4c7abafc9', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fd8c0ed5a2b19d56a3965fe22508df7cb554eb8c', transform: "translate(310,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'be69ea9f95439f0fd500c3d0508c64bff38eaa77', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e31983e6dffa0658a9e2bb48a211a6662dcfacbd', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '996c189575219ca53e4eeb7c146a25bdbaaa294d', transform: "translate(341,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8c8cccf217d55baea1437c750f74ecbdecf1f31a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '773c35753650415d1c58902de89b4ac41dc45dab', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c3af0c1d70ffabd86f64db22ec4fec12abdf63a', transform: "translate(372,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b0084b5db37bd7160a7f861f5c041f3d43ce66e6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f23cf5201efaf2a4e33cef60e1df2466c302c990', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '12ec72e7cf1945e0fe470dad6814165594e50fb9', transform: "translate(403,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6269a35b44af648b14641e839b3dbf47c2161af7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9a6b2f338a1311c9055d66504b39b1cb71a68500', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd2129a2865d3417a2e62df7c5a859af0056ac02c', transform: "translate(434,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7fc08fd5c561114d75df7af25970d4ff87fcd204', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '52fc4583f9fa4b58d8f762d3551c7ba7e28026bc' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a51ba820f14f05167ade16ac9f843b0c9a11f557', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3ccb501b1ab75171d0157e1dd120eac5c13e54ec', transform: "translate(496,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a389c2297d4fb186811ba2069d83c5615dcda2ac', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '31d56362dc1198d60c8eb2e1e6aed8cf63575fa0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '50ae81664175b1179733a713ba0ee2612dcd06c8', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '97f010dc5e7a705817f8696690e90b8d8e3b24b7', transform: "translate(558,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '67761579f9c36e787c62adba400845c9a1734a8b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '736e518a0bd8cf4f9cf852b1ac41c7e23753f9db' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a8739e9b5fd1fd411d79b82fb7cd25500e0e8747', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '94d5eed6541b5fa58e08deebc561cde67c9325cf', transform: "translate(620,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2bb5f4a5bf2c262d1c2b1e2d1fc0a838a6655dce', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '143cf0d98ee4b2815a41c4c35ab54731d9d03103' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1099340e634f1ba36dbd7b07035cb04e81be1936', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f7a272586c409b35940f3c22e0889102f2ac82a', transform: "translate(651,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ebbd89238507ba280d8bce40e8b1ad3048556671', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '606add5f38839703bca260d93da04824af96bb60', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5b1f8784b9bcba02f8fa161c28f022cfd19cd691', transform: "translate(682,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f59387e4783d4198b3f674bd499dfafd111b181', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '77fbde8a95cca9d261fb5d824ee15ebbbe8d4f75' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '778e4f02cfc05fa45ae1da9104fb5452c3566126', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6e89147dac0a79b3538f4d2a576f8db0acf20a91', transform: "translate(837,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3f22d06695f447e9f51ed7211658d1d3757b2ee2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5bc94086602790915c14bd28aad900a2a8ff78cd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b022078b0a0601c6fd28455397f371e2836c9614', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2f9f4ec92a187125295c07bdd431d7937417b311', transform: "translate(930,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a91a71a256378e6579aa04fb41c52180d3cd9dfb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b3f02e310cbc3eff3b2716fbd42565ee5b5f281d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf8bc0becca791ffb8be894b13afe17f25eb5a2a', transform: "translate(279,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '78832fcc5cfa4194ba551522e14de43e8f36e110', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '573f022b805b5f67908281cc7cf2036492928c55' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a9d1db6be55779ba302b6cb3ce5db9785037e7d2', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f42aee833635038faa3197da78f82e2e97cf898d', transform: "translate(310,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2598f6850f7875504d9191239c553273e7e3d1be', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd5fdbab8c590a76112e5611f4a7c7162967964e4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3f901dd340f3535795b24d6bfa1528464189fd70', transform: "translate(341,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f1d1b7e8d6d51f24cbb98d1a307889b70efcb394', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'edd800cb3d3dc1ecbf77e51a0cadc2596c475798', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '28bf19ec6c2dbe358f621a0c4eeb578ae7bd83e2', transform: "translate(372,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3309263332ef25b7744f63410d43c5077e344b5c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '7d5233b38278641de9c1c34e373b6117c4991e90', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8bec1741b4399805850c1b78408ffe3a354d38ef', transform: "translate(403,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d856c44cd66d5b7452344b1cf4e1505afa0ad6e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '61cfb9a854fc6b4a648145f2bfe3f5961d012291', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd18f9232ab3ca8334667425b23adea6ef679d490', transform: "translate(434,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '22a91a0aa8c0709742199d81f1ce71f9889292d7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6acf3451eaa9d46339bb2cd4c33ad4be812de1e5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4e94fa792897b07620f385eb01164e1e774eaded', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7185af227d14dd7595cf7ed29e58cca3077cfe2d', transform: "translate(558,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4c7cf05751ec0e9d9a1b825d0e355d2ef555a30a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '78e38fb862d211c584fa47bbf3fb9c4e0514d08a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '543eed963c5cedaca031859153b7ef2f4b15d997', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '325d8f2f6c0bbdbd3a648968d44ada00d133cc43', transform: "translate(589,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4219da2332f84bd89c446b3edbb585979d15b2c7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2a1a9568d4cc55372b70527f73fc316816aa2144' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '33a80361ea29704ab013669982b36c4204949004', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c433a7e638eb4478c2e7679733307ac0809924bd', transform: "translate(682,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c11abb65afa463523cae962729b4459d93082a74', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f9983b4d6a633b23d790b338ce7776dcf174c6f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e3d13c42c65ca47a41f16b7130e47dbbfc034c4f', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '708aaf5b3a2a5b19f9732c84feb142447332adfc', transform: "translate(713,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b0b6d9d116910319a75a98df7fc5e5d67c100094', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '018178c908cd566d74385ab29c3cdce4393b1cd5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '670b6063ce06161ed4cbbbd3ba4ee0e811220f4e', transform: "translate(744,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6ab4ee704bb624b2f42aa4fe20044260347f7f95', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5893b28dce12a5542a5d19b502595e0c2f92989f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'be5cfc1099fe4aa032678351c77d4332f2ca951e', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a0be8852c5de05e7ee6180316fe5ea745a2f2aba', transform: "translate(806,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cec01313375e09593384b3fe40ef5a4480777570', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8a7cf0e0200bd320b3b88560250c508cda2a6ba1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e2859e44427db8411c59d25eda0e57d9e72f0934', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a60ed2972a0bc592a00f1cbb2a833f6df876ca1', transform: "translate(930,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '18997fbbd54e827a19a65461214be007749f30a2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e432385752522c8480cabb5c1c644e55a8c6ab2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1051d6fe4656e00623a5daf76936c61e8135c467', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1432dc3a0dadc02cc9b3d9b38fe786c33d553ab1', transform: "translate(961,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9ee9e6a2ea5dcc59fa310ec11ab7ce9bacd7c54e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f7bfb6a9e85e20781fe1c1d0f1af24d943b81890' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ff891d84e6b4fcf28014b55cb458ab55671cc84e', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '167743295cf5abf48123da22977690695854ca7e', transform: "translate(0,0) scale(2.17, 2.17)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6ea652ed2dc59fc3dad1d73382c3188f61a00dc8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf569bb3ecf74157159b6d30918106044d33dbee' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b80fdaee0617893f7c072b556dc836990f86ba8c', style: { fill: 'none' }, d: "M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421\n\t\tC15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004\n\t\tC76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8a032acf24434b43c5b6548bcf063411ad66789e', d: "M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445\n\t\tC0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004\n\t\tc18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76\n\t\tL50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931\n\t\tc1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '81aeeb5833db156324672f9ffc4e111e0f581779', transform: "translate(806,0) scale(2.17, 2.17)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '890f53ad2d7816c2c7c75639f4b703696299cad1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4bec2c848eedc7e5080a875718938d6de97193a8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '51a7a0243ee83a6619843d47b8da53d2e704ade7', style: { fill: 'none' }, d: "M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421\n\t\tC15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004\n\t\tC76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fe04bcd3061dd1bfb844ee1c390d777e8a169fa7', d: "M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445\n\t\tC0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004\n\t\tc18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76\n\t\tL50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931\n\t\tc1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd4b4c30df16d8ee52f29851268c9013a86a01474', transform: "translate(0,806) scale(2.17, 2.17)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '33ba83213ce6a18c145c74b9639f18fb4a7dfd40', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '407703dc1d6d296b399ae7a107fc65d7577be4fd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b2a7d181f50e2f5f1bd2d9302e5f07e49779b61f', style: { fill: 'none' }, d: "M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421\n\t\tC15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004\n\t\tC76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7d71d2a9ce7887984bcc7e497cb2ed1a93b52df3', d: "M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445\n\t\tC0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004\n\t\tc18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76\n\t\tL50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931\n\t\tc1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '89264448b81660c2b49832f2c2eface2613565b7', transform: "translate(62,62) scale(0.93, 0.93)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49c17e2c606e3e377b762053a2b8959d0b5ec15c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3c94e250054ecc4bf98f7ca1331fe756f7befc21' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd0f6b3fbcb63c0b657c5a8362ba82c5455d40f07', id: "XMLID_1_" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '72133075d4ce275a6cc835c218bf88649120579e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '44c3195e16a919d3333f3e486eee1f1560666e23', d: "M27.351,100c-15.09,0-27.365-12.032-27.365-26.808V26.794c0-4.616,1.2-8.96,3.301-12.761\n\t\t\t\tc2.029-3.658,4.901-6.802,8.36-9.174C16.09,1.801,21.506,0,27.336,0h45.327c15.076,0,27.351,12.018,27.351,26.793v46.398\n\t\t\t\tc0,14.775-12.274,26.808-27.351,26.808H50H27.351z" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ebdb67f63f7dc56865a5f27cd3a5b8cb201b5021' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c0ddc1fee2882e4f92b01faae32bb938edf0ae61', transform: "translate(868,62) scale(0.93, 0.93)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '99d20b1ed258df9deb8b0ece168071880a2b9bc0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '77829f791a546c2801f8f406203d67c8d526aac8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7fa2e62100c21a1872170a160b0757880fe62c3a', id: "XMLID_1_" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '955204e2278008c8a869b3f538d71e2f1755968c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '28129dea97bf7f3757503f6babc893da9b966e5e', d: "M27.351,100c-15.09,0-27.365-12.032-27.365-26.808V26.794c0-4.616,1.2-8.96,3.301-12.761\n\t\t\t\tc2.029-3.658,4.901-6.802,8.36-9.174C16.09,1.801,21.506,0,27.336,0h45.327c15.076,0,27.351,12.018,27.351,26.793v46.398\n\t\t\t\tc0,14.775-12.274,26.808-27.351,26.808H50H27.351z" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0dbb9cf947f8f249a895e8f8d72889930d75377c' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '00dd377e2cd7963579cd563013b5ae1de049614f', transform: "translate(62,868) scale(0.93, 0.93)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b8cf3b8cb591aa6bb4aa6438f8db71cd8af4446e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ee5f6d96c8cd2774b3aeb3e5fc00f80b5c3e0d83' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '737d9ac49a88feac44092bfe09ee60daf6cbf8e5', id: "XMLID_1_" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f6e3e6420fe862a196f6f1c5b8753beaaacb9bf4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '62c820acaceae895a7267071a8d280c17306f021', d: "M27.351,100c-15.09,0-27.365-12.032-27.365-26.808V26.794c0-4.616,1.2-8.96,3.301-12.761\n\t\t\t\tc2.029-3.658,4.901-6.802,8.36-9.174C16.09,1.801,21.506,0,27.336,0h45.327c15.076,0,27.351,12.018,27.351,26.793v46.398\n\t\t\t\tc0,14.775-12.274,26.808-27.351,26.808H50H27.351z" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f7f83e1a316eccaf92c727315301718712df9883' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cc637ef45981928ecfa0ac85466c553ac3915a8a', transform: "translate(341,341) scale(0.43164556962025,0.43164556962025)", width: "341", height: "341" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'e73c54a6741f970e9299f70551ecbbc49b288599', width: "790", height: "790", viewBox: "0 0 790 790", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a8c0aad5742449f9e8fdf87b2662e44b7de6770c', d: "M689.839 154.133H99.1611C71.255 154.133 48 176.48 48 205.346V540.558C48 568.492 70.3248 591.771 99.1611 591.771H138.23V712.82C138.23 737.961 152.182 760.309 173.577 771.482C181.949 776.138 191.251 778 200.553 778C214.506 778 227.529 773.344 239.621 764.964L434.964 592.702H689.839C717.745 592.702 741 570.354 741 541.489V206.277C741 177.411 717.745 154.133 689.839 154.133ZM212.646 729.581C204.274 736.099 196.832 733.305 194.042 731.443C191.251 729.58 183.809 724.925 183.809 712.82V384.125C183.809 362.709 198.693 331.05 215.436 317.083L399.616 156.927V564.768L212.646 729.581Z", class: "qr-code-group" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd5e5ba144de6f34c245e26ddd26b1bb6fb7eec66', d: "M622.864 50.7755C622.864 22.8412 593.098 -4.16271 557.75 20.9782L437.754 122.473H622.864V50.7755Z", class: "qr-code-group" }))))));
    }
};
VocablyButton.style = qrCodeCss;

const rateCss = "vocably-rate{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}";

const VocablyRate = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.userSelected = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "userSelected");
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '4d756c39f2be1aae6155b813a38f2fb5de893730' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '20b154aafd51c29bb12d3c0f14916f0a959cc1f3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: '25f67de233412c37f21f1ae3d1287fe795e538f5' }, "It will take less than a minute, but will mean a lot for Vocably.")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '5167f4788196b2c0007988d068dbe08d5a072615', class: "vocably-mt-12" }, "Do you find Vocably useful? Your rating on the ", this.platform.name, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", { key: 'ec2e53fb799b93a2911b4b0a72f46743ab51dca8' }), "will make a big difference for this project."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '9911a7c167dcec7317ba3e602318c408e0710518', class: "vocably-mt-12" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '405c9b92d4e26bea5616ababf205c71264a31156', href: this.platform.url, target: "_blank", class: "vocably-button", onClick: () => this.userSelected.emit('review') }, "OK, rate Vocably"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'c6a37c97d97513768f606048e21c8cd5b790efce', style: { marginLeft: '8px' }, class: "vocably-link-button", onClick: () => this.userSelected.emit('later') }, "Ask me later.")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'feba28dfb088479b08df5f9d4c20de37606914f9', class: "vocably-mt-12" }, "Don't you like anything about Vocably? Then please", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '394c7e594c5822cb11fa9f9ada0e4bbe77e2f2d3', href: "https://app.vocably.pro/feedback", target: "_blank", class: "vocably-link-button", onClick: () => this.userSelected.emit('feedback') }, "contact the author"), ".", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", { key: 'a4991dd49cb6a454e196b76e8eb5525b25cfcd08' }), " I take every feedback seriously. We can improve this project together."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '8d878bae00f7f444d6676c8bba2eae359f4cf27b', class: "vocably-mt-12" }, "You will see this message again after 10 translations.", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '1d44a551108050a1057ee0cdba9e8428f326280d', class: "vocably-link-button vocably-text-link vocably-small", onClick: () => this.userSelected.emit('never') }, "Never show this message again."))));
    }
};
VocablyRate.style = rateCss;

const signInCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.container{display:inline-block}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important}.button:hover:not([disabled]),.button:focus:not([disabled]){background:#0047e3}.button:active:not([disabled]){background:#0047e3}.button[disabled]{background:#bababa}.p{margin-bottom:16px;text-align:center}.p a{color:#0050ff}.link{text-decoration:underline !important;text-decoration-thickness:0.5px !important;text-underline-offset:2px !important;color:#0050ff !important;background:none !important;border:none !important;border-radius:0 !important;cursor:pointer}.link:hover,.link:focus,.link:active{color:#0047e3 !important}";

const VocablySignIn = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.confirm = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm");
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '4d1dd5bce9d93e876ab55ac02fb4ba49a4c75a77', "data-test": "sign-in" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '5ec8b5246e22db9e3773e446868e30f32e574741', class: "p" }, "Please sign in to proceed."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'c897351e1224b21ba0887cb697898a5b3b4d2091', class: "p" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '9c0f7a910d7234cad6bbbedd08677d4d08ca8a64', class: "button", "data-test": "sign-in-button", onClick: () => this.confirm.emit() }, "Sign in or Create an account")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a834476c70ab83bbf4aabb9d4e4b8e4e406fb169' }, "By signing in, you agree to our", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '2dfc7864a17e548bc204032657529d2f3efa103e', class: "link", href: "https://vocably.pro/terms-and-conditions.html", target: "_blank" }, "Terms of Service"), ' ', "and", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '2d73a8c73b4ae5cd20e5ef7eacdcbf767e011dd9', class: "link", href: "https://vocably.pro/privacy-policy.html", target: "_blank" }, "Privacy Policy"), ".")));
    }
};
VocablySignIn.style = signInCss;

const spinnerCss = ":host{display:inline-block;width:140px;height:18px;vertical-align:middle;visibility:visible !important}.spinner{text-align:center;height:18px}.spinner>div{width:18px;height:18px;background-color:#0050ff;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}";

const VocablySpinner = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '998059bb6834e48eee7b1a88a0c1f89d19c59d2b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '2bf8e62327ce6e1f6114d7a940cf6a50433095c1', class: "spinner" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '9ff943332d3d589cdf7151f403d1ed39a68248ae', class: "bounce1" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'ff32b7164a92fd85a917730166e256fc64528b41', class: "bounce2" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a557ae9c3a698e3a135dd64b16b7c7804b3de142', class: "bounce3" }))));
    }
};
VocablySpinner.style = spinnerCss;

const subscribeCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.container{display:inline-block}.message{margin-bottom:16px}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important}.button:hover:not([disabled]),.button:focus:not([disabled]){background:#0047e3}.button:active:not([disabled]){background:#0047e3}.button[disabled]{background:#bababa}";

const VocablySubscribe = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.confirm = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm");
        this.trial = false;
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '5eda169aebd3ed754ac77d2baad63c0881f21347', "data-test": "subscribe" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'd13741f6517e2922e08d0477db93f673af56f68a', class: "container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '29a1184d6a9b62e1a0792b0c9242e6d82b52b9f5', class: "message" }, this.trial
            ? 'Request a 7 day free trial to proceed.'
            : 'Please subscribe to proceed.'), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'aa4dd9ba8e0f06a013a16a4d7ce74c9dfeab399d', class: "button-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '3eed488ff3e7b2aaca7b1c4ab6e39ef2a228698d', class: "button", onClick: () => this.confirm.emit(), "data-test": "subscribe-button" }, this.trial ? 'Request a 7 day free trial' : 'Subscribe')))));
    }
};
VocablySubscribe.style = subscribeCss;

const tagFormCss = ":host{visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important;--shadow-spread:10px;--shadow-v-offset:4px}.tag-form{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background-color:rgb(255, 255, 255);padding:24px;border-radius:16px;box-shadow:0 var(--shadow-v-offset) var(--shadow-spread) rgba(0, 0, 0, 0.6);box-sizing:border-box;width:clamp(340px, 90vw, 390px)}form{display:flex;flex-direction:column;gap:16px;position:relative}h1{font-size:16px;padding:0;margin:0;font-weight:normal}label{display:flex;flex-direction:column;gap:16px}input[type=text]{color:#6a6a6a !important;font-size:14.4px !important;padding:8px 8px !important;border:0.6px solid #bababa !important;border-radius:8px !important;background-color:#fbfbfb;outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important}input[type=text]:focus{background-color:#fcfcfc}.buttons{display:flex;justify-content:flex-end;gap:4px}.delete{text-decoration:underline;text-decoration-thickness:0.5px;text-underline-offset:2px;color:#0050ff;background:none;border:none;border-radius:0;cursor:pointer;color:#ff5e5e;margin-right:auto}.delete:hover,.delete:focus,.delete:active{color:#0047e3}.delete:hover,.delete:focus,.delete:active{color:#e13a3a}.cancel{text-decoration:underline;text-decoration-thickness:0.5px;text-underline-offset:2px;color:#0050ff;background:none;border:none;border-radius:0;cursor:pointer}.cancel:hover,.cancel:focus,.cancel:active{color:#0047e3}.submit{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important;margin:0;flex:0;min-width:140px}.submit:hover:not([disabled]),.submit:focus:not([disabled]){background:#0047e3}.submit:active:not([disabled]){background:#0047e3}.submit[disabled]{background:#bababa}.loader{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:rgb(255, 255, 255);opacity:0.6}";

const VocablyTagsMenu$1 = class VocablyTagsMenu {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.hide = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "hide");
        this.tagItem = null;
        this.title = '';
        this.saving = false;
    }
    componentDidLoad() {
        const initialTitle = this.tagItem ? this.tagItem.data.title : '';
        this.title = initialTitle;
        this.textInput.value = initialTitle;
        this.textInput.focus();
    }
    isDisabled() {
        return this.saving || this.title.trim().length === 0;
    }
    async onSubmit() {
        var _a;
        if (this.isDisabled()) {
            return;
        }
        if (!this.saveTag) {
            this.hide.emit();
            return;
        }
        this.saving = true;
        const result = await this.saveTag(Object.assign(Object.assign({}, this.tagItem), { data: Object.assign(Object.assign({}, (_a = this.tagItem) === null || _a === void 0 ? void 0 : _a.data), { title: this.title.trim() }) }));
        if (result.success === false) {
            alert([
                'An error occurred during the attempt to save the tag.',
                'Please try again later.',
            ].join('\n'));
            this.saving = false;
            return;
        }
        this.hide.emit();
    }
    async onDelete() {
        if (this.isDisabled()) {
            return;
        }
        if (!this.deleteTag || !this.tagItem) {
            this.hide.emit();
            return;
        }
        this.saving = true;
        const result = await this.deleteTag(this.tagItem);
        if (result.success === false) {
            alert([
                'An error occurred during the attempt to delete the tag.',
                'Please try again later.',
            ].join('\n'));
            this.saving = false;
            return;
        }
        this.hide.emit();
    }
    onInputChange() {
        this.title = this.textInput.value;
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '0260075363f33b46049857ba74f98533525f9470', class: "tag-form" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("form", { key: '876f71cf5a09b9504480a8777e4398b1798a4222', onSubmit: (e) => {
                e.preventDefault();
                this.onSubmit();
                return false;
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { key: '02bb75fa73959e00d2bea414a27bfc309a7c4a4b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { key: '33b2435a0c5c5198ee9ab4e75c7610137a8207ff' }, this.tagItem
            ? `New name for ${this.tagItem.data.title}:`
            : `New tag name:`), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { key: '77a1d2b3e05a4e0e497f21f217507feafae32c78', type: "text", placeholder: "New tag", onKeyUp: this.onInputChange.bind(this), onChange: this.onInputChange.bind(this), ref: (el) => (this.textInput = el) })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '464e258c4e48a05e95f28204fa7df55e61f0cdac', class: "buttons" }, this.tagItem && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '6b2931cb3134a420cbbf735886e923e79ff33824', class: "delete", disabled: this.isDisabled(), type: "button", onClick: () => {
                const yesPlease = window.confirm(['Delete this tag?', 'No cards will be deleted.'].join('\n'));
                if (yesPlease) {
                    this.onDelete();
                }
            } }, "Delete")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '6c4f7909c000c5148c88d117422c3154e7bce4d2', type: "button", class: "cancel", onClick: () => this.hide.emit() }, "Cancel"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '3a559eb50914f26353473272a8c8a9c053b8798a', type: "submit", class: "submit", disabled: this.isDisabled() }, "Save")), this.saving && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '81135c66e319e92bac15a277d57bc15370a655a9', class: "loader" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", { key: '6e68fef057fd13f0af58926805670161efaa7fd3' }))))));
    }
};
VocablyTagsMenu$1.style = tagFormCss;

const tagsMenuCss = ":host{--shadow-spread:10px;--shadow-v-offset:4px;--padding:12px;--item-height:48px;font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;visibility:visible !important;background-color:rgb(255, 255, 255);max-height:45.4545454545vh;padding:8px 0;border-radius:8px;box-shadow:0 var(--shadow-v-offset) var(--shadow-spread) rgba(0, 0, 0, 0.6);overflow-y:auto}menu{list-style:none;padding:0;margin:0}menu li{border-top:0.5px solid #bababa;min-width:300px;display:flex;align-items:center}menu li.info{padding:var(--padding)}menu li:first-child{border-top:none}menu li.clickable{padding:0}menu li.clickable:hover{background-color:rgba(230, 230, 230, 0.5)}menu button{display:block;border:none;width:100%;font-size:100%;box-sizing:border-box;padding:var(--padding);text-align:left;cursor:pointer;background-color:transparent;white-space:nowrap;height:var(--item-height)}menu button:hover{background-color:rgba(230, 230, 230, 0.5)}menu button:active{background-color:rgba(230, 230, 230, 0.2)}.icon{display:inline-block;width:18px;height:18px;vertical-align:bottom;margin-left:4px}.spinner{--size:18px}";

const VocablyTagsMenu = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.disabled = false;
        this.selectedItems = [];
        this.existingItems = [];
        this.savingTag = null;
        this.overlayElement = null;
        this.tagForm = null;
        this.onTagClick = (tagItem) => async () => {
            if (this.disabled) {
                return;
            }
            this.disabled = true;
            this.savingTag = tagItem;
            const result = await (this.selectedItems.includes(tagItem.id)
                ? this.detachTag(tagItem)
                : this.attachTag(tagItem));
            this.disabled = false;
            this.savingTag = null;
            if (result.success === false) {
                alert('Unable to complete the tag operation. Please try again.');
                return;
            }
        };
    }
    hideTagForm() {
        const overlay = this.overlayElement;
        overlay && overlay.hide();
    }
    displayTagForm(item) {
        this.overlayElement && this.overlayElement.remove();
        this.tagForm && this.tagForm.remove();
        const overlay = document.createElement('vocably-overlay');
        overlay.style.setProperty('--opacity', '0.3');
        const tagForm = document.createElement('vocably-tag-form');
        tagForm.style.position = 'fixed';
        tagForm.style.left = '50vw';
        tagForm.style.top = '50vh';
        tagForm.style.transform = 'translate(-50%, -50%)';
        if (item) {
            tagForm.tagItem = item;
        }
        tagForm.saveTag = this.saveTag;
        tagForm.deleteTag = this.deleteTag;
        tagForm.addEventListener('hide', () => {
            this.hideTagForm();
        });
        overlay.appendChild(tagForm);
        document.body.appendChild(overlay);
        this.overlayElement = overlay;
        this.tagForm = tagForm;
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '533b3155e570fee9a2f54fd658fd642915d5e562' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("menu", { key: '076a4aa73052c3252b5e33ad95113f0d064e59bf' }, this.existingItems.length === 0 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: '897653c64c0bb8c1dd72429e724c5ebbad755598', class: "info" }, "Tags are like groups, or folders, but better.", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", { key: '31455b25608fb68c7c3f1c2bf9f3be5c6de9cc15' }), "Press \"Add new tag\" to begin.")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: '72cb9aee8fbf9af77228d1c62c4374f3ce718891', class: "clickable" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '4a1f29d901564d6b87810a009df46b23c777c426', onClick: () => {
                if (this.disabled) {
                    return false;
                }
                this.displayTagForm();
            } }, "Add new tag")), this.existingItems
            .sort((a, b) => b.created - a.created)
            .map((tagItem) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: "clickable" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: this.onTagClick(tagItem), style: { flex: '1' } }, tagItem.data.title, ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "icon" }, this.savingTag !== tagItem &&
            this.selectedItems.includes(tagItem.id) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-check", { class: "check" })), this.savingTag === tagItem && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", { class: "spinner" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { title: 'Edit Tag', class: "edit", style: { flex: '0', textAlign: 'center' }, onClick: () => {
                if (this.disabled) {
                    return false;
                }
                this.displayTagForm(tagItem);
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-tag-edit", null))))))));
    }
};
VocablyTagsMenu.style = tagsMenuCss;

const isItem = (value) => {
    return value['id'] && value['created'] && value['data'];
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var showdown$2 = {exports: {}};

var showdown$1 = showdown$2.exports;

var hasRequiredShowdown;

function requireShowdown () {
	if (hasRequiredShowdown) return showdown$2.exports;
	hasRequiredShowdown = 1;
	(function (module) {
		(function(){
		/**
		 * Created by Tivie on 13-07-2015.
		 */

		function getDefaultOpts (simple) {

		  var defaultOptions = {
		    omitExtraWLInCodeBlocks: {
		      defaultValue: false,
		      describe: 'Omit the default extra whiteline added to code blocks',
		      type: 'boolean'
		    },
		    noHeaderId: {
		      defaultValue: false,
		      describe: 'Turn on/off generated header id',
		      type: 'boolean'
		    },
		    prefixHeaderId: {
		      defaultValue: false,
		      describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
		      type: 'string'
		    },
		    rawPrefixHeaderId: {
		      defaultValue: false,
		      describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
		      type: 'boolean'
		    },
		    ghCompatibleHeaderId: {
		      defaultValue: false,
		      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
		      type: 'boolean'
		    },
		    rawHeaderId: {
		      defaultValue: false,
		      describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
		      type: 'boolean'
		    },
		    headerLevelStart: {
		      defaultValue: false,
		      describe: 'The header blocks level start',
		      type: 'integer'
		    },
		    parseImgDimensions: {
		      defaultValue: false,
		      describe: 'Turn on/off image dimension parsing',
		      type: 'boolean'
		    },
		    simplifiedAutoLink: {
		      defaultValue: false,
		      describe: 'Turn on/off GFM autolink style',
		      type: 'boolean'
		    },
		    excludeTrailingPunctuationFromURLs: {
		      defaultValue: false,
		      describe: 'Excludes trailing punctuation from links generated with autoLinking',
		      type: 'boolean'
		    },
		    literalMidWordUnderscores: {
		      defaultValue: false,
		      describe: 'Parse midword underscores as literal underscores',
		      type: 'boolean'
		    },
		    literalMidWordAsterisks: {
		      defaultValue: false,
		      describe: 'Parse midword asterisks as literal asterisks',
		      type: 'boolean'
		    },
		    strikethrough: {
		      defaultValue: false,
		      describe: 'Turn on/off strikethrough support',
		      type: 'boolean'
		    },
		    tables: {
		      defaultValue: false,
		      describe: 'Turn on/off tables support',
		      type: 'boolean'
		    },
		    tablesHeaderId: {
		      defaultValue: false,
		      describe: 'Add an id to table headers',
		      type: 'boolean'
		    },
		    ghCodeBlocks: {
		      defaultValue: true,
		      describe: 'Turn on/off GFM fenced code blocks support',
		      type: 'boolean'
		    },
		    tasklists: {
		      defaultValue: false,
		      describe: 'Turn on/off GFM tasklist support',
		      type: 'boolean'
		    },
		    smoothLivePreview: {
		      defaultValue: false,
		      describe: 'Prevents weird effects in live previews due to incomplete input',
		      type: 'boolean'
		    },
		    smartIndentationFix: {
		      defaultValue: false,
		      describe: 'Tries to smartly fix indentation in es6 strings',
		      type: 'boolean'
		    },
		    disableForced4SpacesIndentedSublists: {
		      defaultValue: false,
		      describe: 'Disables the requirement of indenting nested sublists by 4 spaces',
		      type: 'boolean'
		    },
		    simpleLineBreaks: {
		      defaultValue: false,
		      describe: 'Parses simple line breaks as <br> (GFM Style)',
		      type: 'boolean'
		    },
		    requireSpaceBeforeHeadingText: {
		      defaultValue: false,
		      describe: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
		      type: 'boolean'
		    },
		    ghMentions: {
		      defaultValue: false,
		      describe: 'Enables github @mentions',
		      type: 'boolean'
		    },
		    ghMentionsLink: {
		      defaultValue: 'https://github.com/{u}',
		      describe: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
		      type: 'string'
		    },
		    encodeEmails: {
		      defaultValue: true,
		      describe: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
		      type: 'boolean'
		    },
		    openLinksInNewWindow: {
		      defaultValue: false,
		      describe: 'Open all links in new windows',
		      type: 'boolean'
		    },
		    backslashEscapesHTMLTags: {
		      defaultValue: false,
		      describe: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
		      type: 'boolean'
		    },
		    emoji: {
		      defaultValue: false,
		      describe: 'Enable emoji support. Ex: `this is a :smile: emoji`',
		      type: 'boolean'
		    },
		    underline: {
		      defaultValue: false,
		      describe: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
		      type: 'boolean'
		    },
		    ellipsis: {
		      defaultValue: true,
		      describe: 'Replaces three dots with the ellipsis unicode character',
		      type: 'boolean'
		    },
		    completeHTMLDocument: {
		      defaultValue: false,
		      describe: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
		      type: 'boolean'
		    },
		    metadata: {
		      defaultValue: false,
		      describe: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
		      type: 'boolean'
		    },
		    splitAdjacentBlockquotes: {
		      defaultValue: false,
		      describe: 'Split adjacent blockquote blocks',
		      type: 'boolean'
		    }
		  };
		  if (simple === false) {
		    return JSON.parse(JSON.stringify(defaultOptions));
		  }
		  var ret = {};
		  for (var opt in defaultOptions) {
		    if (defaultOptions.hasOwnProperty(opt)) {
		      ret[opt] = defaultOptions[opt].defaultValue;
		    }
		  }
		  return ret;
		}

		function allOptionsOn () {
		  var options = getDefaultOpts(true),
		      ret = {};
		  for (var opt in options) {
		    if (options.hasOwnProperty(opt)) {
		      ret[opt] = true;
		    }
		  }
		  return ret;
		}

		/**
		 * Created by Tivie on 06-01-2015.
		 */

		// Private properties
		var showdown = {},
		    parsers = {},
		    extensions = {},
		    globalOptions = getDefaultOpts(true),
		    setFlavor = 'vanilla',
		    flavor = {
		      github: {
		        omitExtraWLInCodeBlocks:              true,
		        simplifiedAutoLink:                   true,
		        excludeTrailingPunctuationFromURLs:   true,
		        literalMidWordUnderscores:            true,
		        strikethrough:                        true,
		        tables:                               true,
		        tablesHeaderId:                       true,
		        ghCodeBlocks:                         true,
		        tasklists:                            true,
		        disableForced4SpacesIndentedSublists: true,
		        simpleLineBreaks:                     true,
		        requireSpaceBeforeHeadingText:        true,
		        ghCompatibleHeaderId:                 true,
		        ghMentions:                           true,
		        backslashEscapesHTMLTags:             true,
		        emoji:                                true,
		        splitAdjacentBlockquotes:             true
		      },
		      original: {
		        noHeaderId:                           true,
		        ghCodeBlocks:                         false
		      },
		      ghost: {
		        omitExtraWLInCodeBlocks:              true,
		        parseImgDimensions:                   true,
		        simplifiedAutoLink:                   true,
		        excludeTrailingPunctuationFromURLs:   true,
		        literalMidWordUnderscores:            true,
		        strikethrough:                        true,
		        tables:                               true,
		        tablesHeaderId:                       true,
		        ghCodeBlocks:                         true,
		        tasklists:                            true,
		        smoothLivePreview:                    true,
		        simpleLineBreaks:                     true,
		        requireSpaceBeforeHeadingText:        true,
		        ghMentions:                           false,
		        encodeEmails:                         true
		      },
		      vanilla: getDefaultOpts(true),
		      allOn: allOptionsOn()
		    };

		/**
		 * helper namespace
		 * @type {{}}
		 */
		showdown.helper = {};

		/**
		 * TODO LEGACY SUPPORT CODE
		 * @type {{}}
		 */
		showdown.extensions = {};

		/**
		 * Set a global option
		 * @static
		 * @param {string} key
		 * @param {*} value
		 * @returns {showdown}
		 */
		showdown.setOption = function (key, value) {
		  globalOptions[key] = value;
		  return this;
		};

		/**
		 * Get a global option
		 * @static
		 * @param {string} key
		 * @returns {*}
		 */
		showdown.getOption = function (key) {
		  return globalOptions[key];
		};

		/**
		 * Get the global options
		 * @static
		 * @returns {{}}
		 */
		showdown.getOptions = function () {
		  return globalOptions;
		};

		/**
		 * Reset global options to the default values
		 * @static
		 */
		showdown.resetOptions = function () {
		  globalOptions = getDefaultOpts(true);
		};

		/**
		 * Set the flavor showdown should use as default
		 * @param {string} name
		 */
		showdown.setFlavor = function (name) {
		  if (!flavor.hasOwnProperty(name)) {
		    throw Error(name + ' flavor was not found');
		  }
		  showdown.resetOptions();
		  var preset = flavor[name];
		  setFlavor = name;
		  for (var option in preset) {
		    if (preset.hasOwnProperty(option)) {
		      globalOptions[option] = preset[option];
		    }
		  }
		};

		/**
		 * Get the currently set flavor
		 * @returns {string}
		 */
		showdown.getFlavor = function () {
		  return setFlavor;
		};

		/**
		 * Get the options of a specified flavor. Returns undefined if the flavor was not found
		 * @param {string} name Name of the flavor
		 * @returns {{}|undefined}
		 */
		showdown.getFlavorOptions = function (name) {
		  if (flavor.hasOwnProperty(name)) {
		    return flavor[name];
		  }
		};

		/**
		 * Get the default options
		 * @static
		 * @param {boolean} [simple=true]
		 * @returns {{}}
		 */
		showdown.getDefaultOptions = function (simple) {
		  return getDefaultOpts(simple);
		};

		/**
		 * Get or set a subParser
		 *
		 * subParser(name)       - Get a registered subParser
		 * subParser(name, func) - Register a subParser
		 * @static
		 * @param {string} name
		 * @param {function} [func]
		 * @returns {*}
		 */
		showdown.subParser = function (name, func) {
		  if (showdown.helper.isString(name)) {
		    if (typeof func !== 'undefined') {
		      parsers[name] = func;
		    } else {
		      if (parsers.hasOwnProperty(name)) {
		        return parsers[name];
		      } else {
		        throw Error('SubParser named ' + name + ' not registered!');
		      }
		    }
		  }
		};

		/**
		 * Gets or registers an extension
		 * @static
		 * @param {string} name
		 * @param {object|object[]|function=} ext
		 * @returns {*}
		 */
		showdown.extension = function (name, ext) {

		  if (!showdown.helper.isString(name)) {
		    throw Error('Extension \'name\' must be a string');
		  }

		  name = showdown.helper.stdExtName(name);

		  // Getter
		  if (showdown.helper.isUndefined(ext)) {
		    if (!extensions.hasOwnProperty(name)) {
		      throw Error('Extension named ' + name + ' is not registered!');
		    }
		    return extensions[name];

		    // Setter
		  } else {
		    // Expand extension if it's wrapped in a function
		    if (typeof ext === 'function') {
		      ext = ext();
		    }

		    // Ensure extension is an array
		    if (!showdown.helper.isArray(ext)) {
		      ext = [ext];
		    }

		    var validExtension = validate(ext, name);

		    if (validExtension.valid) {
		      extensions[name] = ext;
		    } else {
		      throw Error(validExtension.error);
		    }
		  }
		};

		/**
		 * Gets all extensions registered
		 * @returns {{}}
		 */
		showdown.getAllExtensions = function () {
		  return extensions;
		};

		/**
		 * Remove an extension
		 * @param {string} name
		 */
		showdown.removeExtension = function (name) {
		  delete extensions[name];
		};

		/**
		 * Removes all extensions
		 */
		showdown.resetExtensions = function () {
		  extensions = {};
		};

		/**
		 * Validate extension
		 * @param {array} extension
		 * @param {string} name
		 * @returns {{valid: boolean, error: string}}
		 */
		function validate (extension, name) {

		  var errMsg = (name) ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
		      ret = {
		        valid: true,
		        error: ''
		      };

		  if (!showdown.helper.isArray(extension)) {
		    extension = [extension];
		  }

		  for (var i = 0; i < extension.length; ++i) {
		    var baseMsg = errMsg + ' sub-extension ' + i + ': ',
		        ext = extension[i];
		    if (typeof ext !== 'object') {
		      ret.valid = false;
		      ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
		      return ret;
		    }

		    if (!showdown.helper.isString(ext.type)) {
		      ret.valid = false;
		      ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
		      return ret;
		    }

		    var type = ext.type = ext.type.toLowerCase();

		    // normalize extension type
		    if (type === 'language') {
		      type = ext.type = 'lang';
		    }

		    if (type === 'html') {
		      type = ext.type = 'output';
		    }

		    if (type !== 'lang' && type !== 'output' && type !== 'listener') {
		      ret.valid = false;
		      ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
		      return ret;
		    }

		    if (type === 'listener') {
		      if (showdown.helper.isUndefined(ext.listeners)) {
		        ret.valid = false;
		        ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
		        return ret;
		      }
		    } else {
		      if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
		        ret.valid = false;
		        ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
		        return ret;
		      }
		    }

		    if (ext.listeners) {
		      if (typeof ext.listeners !== 'object') {
		        ret.valid = false;
		        ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
		        return ret;
		      }
		      for (var ln in ext.listeners) {
		        if (ext.listeners.hasOwnProperty(ln)) {
		          if (typeof ext.listeners[ln] !== 'function') {
		            ret.valid = false;
		            ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln +
		              ' must be a function but ' + typeof ext.listeners[ln] + ' given';
		            return ret;
		          }
		        }
		      }
		    }

		    if (ext.filter) {
		      if (typeof ext.filter !== 'function') {
		        ret.valid = false;
		        ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
		        return ret;
		      }
		    } else if (ext.regex) {
		      if (showdown.helper.isString(ext.regex)) {
		        ext.regex = new RegExp(ext.regex, 'g');
		      }
		      if (!(ext.regex instanceof RegExp)) {
		        ret.valid = false;
		        ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
		        return ret;
		      }
		      if (showdown.helper.isUndefined(ext.replace)) {
		        ret.valid = false;
		        ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
		        return ret;
		      }
		    }
		  }
		  return ret;
		}

		/**
		 * Validate extension
		 * @param {object} ext
		 * @returns {boolean}
		 */
		showdown.validateExtension = function (ext) {

		  var validateExtension = validate(ext, null);
		  if (!validateExtension.valid) {
		    console.warn(validateExtension.error);
		    return false;
		  }
		  return true;
		};

		/**
		 * showdownjs helper functions
		 */

		if (!showdown.hasOwnProperty('helper')) {
		  showdown.helper = {};
		}

		/**
		 * Check if var is string
		 * @static
		 * @param {string} a
		 * @returns {boolean}
		 */
		showdown.helper.isString = function (a) {
		  return (typeof a === 'string' || a instanceof String);
		};

		/**
		 * Check if var is a function
		 * @static
		 * @param {*} a
		 * @returns {boolean}
		 */
		showdown.helper.isFunction = function (a) {
		  var getType = {};
		  return a && getType.toString.call(a) === '[object Function]';
		};

		/**
		 * isArray helper function
		 * @static
		 * @param {*} a
		 * @returns {boolean}
		 */
		showdown.helper.isArray = function (a) {
		  return Array.isArray(a);
		};

		/**
		 * Check if value is undefined
		 * @static
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
		 */
		showdown.helper.isUndefined = function (value) {
		  return typeof value === 'undefined';
		};

		/**
		 * ForEach helper function
		 * Iterates over Arrays and Objects (own properties only)
		 * @static
		 * @param {*} obj
		 * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
		 */
		showdown.helper.forEach = function (obj, callback) {
		  // check if obj is defined
		  if (showdown.helper.isUndefined(obj)) {
		    throw new Error('obj param is required');
		  }

		  if (showdown.helper.isUndefined(callback)) {
		    throw new Error('callback param is required');
		  }

		  if (!showdown.helper.isFunction(callback)) {
		    throw new Error('callback param must be a function/closure');
		  }

		  if (typeof obj.forEach === 'function') {
		    obj.forEach(callback);
		  } else if (showdown.helper.isArray(obj)) {
		    for (var i = 0; i < obj.length; i++) {
		      callback(obj[i], i, obj);
		    }
		  } else if (typeof (obj) === 'object') {
		    for (var prop in obj) {
		      if (obj.hasOwnProperty(prop)) {
		        callback(obj[prop], prop, obj);
		      }
		    }
		  } else {
		    throw new Error('obj does not seem to be an array or an iterable object');
		  }
		};

		/**
		 * Standardidize extension name
		 * @static
		 * @param {string} s extension name
		 * @returns {string}
		 */
		showdown.helper.stdExtName = function (s) {
		  return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
		};

		function escapeCharactersCallback (wholeMatch, m1) {
		  var charCodeToEscape = m1.charCodeAt(0);
		  return '¨E' + charCodeToEscape + 'E';
		}

		/**
		 * Callback used to escape characters when passing through String.replace
		 * @static
		 * @param {string} wholeMatch
		 * @param {string} m1
		 * @returns {string}
		 */
		showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

		/**
		 * Escape characters in a string
		 * @static
		 * @param {string} text
		 * @param {string} charsToEscape
		 * @param {boolean} afterBackslash
		 * @returns {XML|string|void|*}
		 */
		showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
		  // First we have to escape the escape characters so that
		  // we can build a character class out of them
		  var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

		  if (afterBackslash) {
		    regexString = '\\\\' + regexString;
		  }

		  var regex = new RegExp(regexString, 'g');
		  text = text.replace(regex, escapeCharactersCallback);

		  return text;
		};

		/**
		 * Unescape HTML entities
		 * @param txt
		 * @returns {string}
		 */
		showdown.helper.unescapeHTMLEntities = function (txt) {

		  return txt
		    .replace(/&quot;/g, '"')
		    .replace(/&lt;/g, '<')
		    .replace(/&gt;/g, '>')
		    .replace(/&amp;/g, '&');
		};

		var rgxFindMatchPos = function (str, left, right, flags) {
		  var f = flags || '',
		      g = f.indexOf('g') > -1,
		      x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
		      l = new RegExp(left, f.replace(/g/g, '')),
		      pos = [],
		      t, s, m, start, end;

		  do {
		    t = 0;
		    while ((m = x.exec(str))) {
		      if (l.test(m[0])) {
		        if (!(t++)) {
		          s = x.lastIndex;
		          start = s - m[0].length;
		        }
		      } else if (t) {
		        if (!--t) {
		          end = m.index + m[0].length;
		          var obj = {
		            left: {start: start, end: s},
		            match: {start: s, end: m.index},
		            right: {start: m.index, end: end},
		            wholeMatch: {start: start, end: end}
		          };
		          pos.push(obj);
		          if (!g) {
		            return pos;
		          }
		        }
		      }
		    }
		  } while (t && (x.lastIndex = s));

		  return pos;
		};

		/**
		 * matchRecursiveRegExp
		 *
		 * (c) 2007 Steven Levithan <stevenlevithan.com>
		 * MIT License
		 *
		 * Accepts a string to search, a left and right format delimiter
		 * as regex patterns, and optional regex flags. Returns an array
		 * of matches, allowing nested instances of left/right delimiters.
		 * Use the "g" flag to return all matches, otherwise only the
		 * first is returned. Be careful to ensure that the left and
		 * right format delimiters produce mutually exclusive matches.
		 * Backreferences are not supported within the right delimiter
		 * due to how it is internally combined with the left delimiter.
		 * When matching strings whose format delimiters are unbalanced
		 * to the left or right, the output is intentionally as a
		 * conventional regex library with recursion support would
		 * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
		 * "<" and ">" as the delimiters (both strings contain a single,
		 * balanced instance of "<x>").
		 *
		 * examples:
		 * matchRecursiveRegExp("test", "\\(", "\\)")
		 * returns: []
		 * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
		 * returns: ["t<<e>><s>", ""]
		 * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
		 * returns: ["test"]
		 */
		showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {

		  var matchPos = rgxFindMatchPos (str, left, right, flags),
		      results = [];

		  for (var i = 0; i < matchPos.length; ++i) {
		    results.push([
		      str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
		      str.slice(matchPos[i].match.start, matchPos[i].match.end),
		      str.slice(matchPos[i].left.start, matchPos[i].left.end),
		      str.slice(matchPos[i].right.start, matchPos[i].right.end)
		    ]);
		  }
		  return results;
		};

		/**
		 *
		 * @param {string} str
		 * @param {string|function} replacement
		 * @param {string} left
		 * @param {string} right
		 * @param {string} flags
		 * @returns {string}
		 */
		showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {

		  if (!showdown.helper.isFunction(replacement)) {
		    var repStr = replacement;
		    replacement = function () {
		      return repStr;
		    };
		  }

		  var matchPos = rgxFindMatchPos(str, left, right, flags),
		      finalStr = str,
		      lng = matchPos.length;

		  if (lng > 0) {
		    var bits = [];
		    if (matchPos[0].wholeMatch.start !== 0) {
		      bits.push(str.slice(0, matchPos[0].wholeMatch.start));
		    }
		    for (var i = 0; i < lng; ++i) {
		      bits.push(
		        replacement(
		          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
		          str.slice(matchPos[i].match.start, matchPos[i].match.end),
		          str.slice(matchPos[i].left.start, matchPos[i].left.end),
		          str.slice(matchPos[i].right.start, matchPos[i].right.end)
		        )
		      );
		      if (i < lng - 1) {
		        bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
		      }
		    }
		    if (matchPos[lng - 1].wholeMatch.end < str.length) {
		      bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
		    }
		    finalStr = bits.join('');
		  }
		  return finalStr;
		};

		/**
		 * Returns the index within the passed String object of the first occurrence of the specified regex,
		 * starting the search at fromIndex. Returns -1 if the value is not found.
		 *
		 * @param {string} str string to search
		 * @param {RegExp} regex Regular expression to search
		 * @param {int} [fromIndex = 0] Index to start the search
		 * @returns {Number}
		 * @throws InvalidArgumentError
		 */
		showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
		  if (!showdown.helper.isString(str)) {
		    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
		  }
		  if (regex instanceof RegExp === false) {
		    throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
		  }
		  var indexOf = str.substring(fromIndex || 0).search(regex);
		  return (indexOf >= 0) ? (indexOf + (fromIndex || 0)) : indexOf;
		};

		/**
		 * Splits the passed string object at the defined index, and returns an array composed of the two substrings
		 * @param {string} str string to split
		 * @param {int} index index to split string at
		 * @returns {[string,string]}
		 * @throws InvalidArgumentError
		 */
		showdown.helper.splitAtIndex = function (str, index) {
		  if (!showdown.helper.isString(str)) {
		    throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
		  }
		  return [str.substring(0, index), str.substring(index)];
		};

		/**
		 * Obfuscate an e-mail address through the use of Character Entities,
		 * transforming ASCII characters into their equivalent decimal or hex entities.
		 *
		 * Since it has a random component, subsequent calls to this function produce different results
		 *
		 * @param {string} mail
		 * @returns {string}
		 */
		showdown.helper.encodeEmailAddress = function (mail) {
		  var encode = [
		    function (ch) {
		      return '&#' + ch.charCodeAt(0) + ';';
		    },
		    function (ch) {
		      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
		    },
		    function (ch) {
		      return ch;
		    }
		  ];

		  mail = mail.replace(/./g, function (ch) {
		    if (ch === '@') {
		      // this *must* be encoded. I insist.
		      ch = encode[Math.floor(Math.random() * 2)](ch);
		    } else {
		      var r = Math.random();
		      // roughly 10% raw, 45% hex, 45% dec
		      ch = (
		        r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch)
		      );
		    }
		    return ch;
		  });

		  return mail;
		};

		/**
		 *
		 * @param str
		 * @param targetLength
		 * @param padString
		 * @returns {string}
		 */
		showdown.helper.padEnd = function padEnd (str, targetLength, padString) {
		  /*jshint bitwise: false*/
		  // eslint-disable-next-line space-infix-ops
		  targetLength = targetLength>>0; //floor if number or convert non-number to 0;
		  /*jshint bitwise: true*/
		  padString = String(padString || ' ');
		  if (str.length > targetLength) {
		    return String(str);
		  } else {
		    targetLength = targetLength - str.length;
		    if (targetLength > padString.length) {
		      padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
		    }
		    return String(str) + padString.slice(0,targetLength);
		  }
		};

		/**
		 * POLYFILLS
		 */
		// use this instead of builtin is undefined for IE8 compatibility
		if (typeof (console) === 'undefined') {
		  console = {
		    warn: function (msg) {
		      alert(msg);
		    },
		    log: function (msg) {
		      alert(msg);
		    },
		    error: function (msg) {
		      throw msg;
		    }
		  };
		}

		/**
		 * Common regexes.
		 * We declare some common regexes to improve performance
		 */
		showdown.helper.regexes = {
		  asteriskDashAndColon: /([*_:~])/g
		};

		/**
		 * EMOJIS LIST
		 */
		showdown.helper.emojis = {
		  '+1':'\ud83d\udc4d',
		  '-1':'\ud83d\udc4e',
		  '100':'\ud83d\udcaf',
		  '1234':'\ud83d\udd22',
		  '1st_place_medal':'\ud83e\udd47',
		  '2nd_place_medal':'\ud83e\udd48',
		  '3rd_place_medal':'\ud83e\udd49',
		  '8ball':'\ud83c\udfb1',
		  'a':'\ud83c\udd70\ufe0f',
		  'ab':'\ud83c\udd8e',
		  'abc':'\ud83d\udd24',
		  'abcd':'\ud83d\udd21',
		  'accept':'\ud83c\ude51',
		  'aerial_tramway':'\ud83d\udea1',
		  'airplane':'\u2708\ufe0f',
		  'alarm_clock':'\u23f0',
		  'alembic':'\u2697\ufe0f',
		  'alien':'\ud83d\udc7d',
		  'ambulance':'\ud83d\ude91',
		  'amphora':'\ud83c\udffa',
		  'anchor':'\u2693\ufe0f',
		  'angel':'\ud83d\udc7c',
		  'anger':'\ud83d\udca2',
		  'angry':'\ud83d\ude20',
		  'anguished':'\ud83d\ude27',
		  'ant':'\ud83d\udc1c',
		  'apple':'\ud83c\udf4e',
		  'aquarius':'\u2652\ufe0f',
		  'aries':'\u2648\ufe0f',
		  'arrow_backward':'\u25c0\ufe0f',
		  'arrow_double_down':'\u23ec',
		  'arrow_double_up':'\u23eb',
		  'arrow_down':'\u2b07\ufe0f',
		  'arrow_down_small':'\ud83d\udd3d',
		  'arrow_forward':'\u25b6\ufe0f',
		  'arrow_heading_down':'\u2935\ufe0f',
		  'arrow_heading_up':'\u2934\ufe0f',
		  'arrow_left':'\u2b05\ufe0f',
		  'arrow_lower_left':'\u2199\ufe0f',
		  'arrow_lower_right':'\u2198\ufe0f',
		  'arrow_right':'\u27a1\ufe0f',
		  'arrow_right_hook':'\u21aa\ufe0f',
		  'arrow_up':'\u2b06\ufe0f',
		  'arrow_up_down':'\u2195\ufe0f',
		  'arrow_up_small':'\ud83d\udd3c',
		  'arrow_upper_left':'\u2196\ufe0f',
		  'arrow_upper_right':'\u2197\ufe0f',
		  'arrows_clockwise':'\ud83d\udd03',
		  'arrows_counterclockwise':'\ud83d\udd04',
		  'art':'\ud83c\udfa8',
		  'articulated_lorry':'\ud83d\ude9b',
		  'artificial_satellite':'\ud83d\udef0',
		  'astonished':'\ud83d\ude32',
		  'athletic_shoe':'\ud83d\udc5f',
		  'atm':'\ud83c\udfe7',
		  'atom_symbol':'\u269b\ufe0f',
		  'avocado':'\ud83e\udd51',
		  'b':'\ud83c\udd71\ufe0f',
		  'baby':'\ud83d\udc76',
		  'baby_bottle':'\ud83c\udf7c',
		  'baby_chick':'\ud83d\udc24',
		  'baby_symbol':'\ud83d\udebc',
		  'back':'\ud83d\udd19',
		  'bacon':'\ud83e\udd53',
		  'badminton':'\ud83c\udff8',
		  'baggage_claim':'\ud83d\udec4',
		  'baguette_bread':'\ud83e\udd56',
		  'balance_scale':'\u2696\ufe0f',
		  'balloon':'\ud83c\udf88',
		  'ballot_box':'\ud83d\uddf3',
		  'ballot_box_with_check':'\u2611\ufe0f',
		  'bamboo':'\ud83c\udf8d',
		  'banana':'\ud83c\udf4c',
		  'bangbang':'\u203c\ufe0f',
		  'bank':'\ud83c\udfe6',
		  'bar_chart':'\ud83d\udcca',
		  'barber':'\ud83d\udc88',
		  'baseball':'\u26be\ufe0f',
		  'basketball':'\ud83c\udfc0',
		  'basketball_man':'\u26f9\ufe0f',
		  'basketball_woman':'\u26f9\ufe0f&zwj;\u2640\ufe0f',
		  'bat':'\ud83e\udd87',
		  'bath':'\ud83d\udec0',
		  'bathtub':'\ud83d\udec1',
		  'battery':'\ud83d\udd0b',
		  'beach_umbrella':'\ud83c\udfd6',
		  'bear':'\ud83d\udc3b',
		  'bed':'\ud83d\udecf',
		  'bee':'\ud83d\udc1d',
		  'beer':'\ud83c\udf7a',
		  'beers':'\ud83c\udf7b',
		  'beetle':'\ud83d\udc1e',
		  'beginner':'\ud83d\udd30',
		  'bell':'\ud83d\udd14',
		  'bellhop_bell':'\ud83d\udece',
		  'bento':'\ud83c\udf71',
		  'biking_man':'\ud83d\udeb4',
		  'bike':'\ud83d\udeb2',
		  'biking_woman':'\ud83d\udeb4&zwj;\u2640\ufe0f',
		  'bikini':'\ud83d\udc59',
		  'biohazard':'\u2623\ufe0f',
		  'bird':'\ud83d\udc26',
		  'birthday':'\ud83c\udf82',
		  'black_circle':'\u26ab\ufe0f',
		  'black_flag':'\ud83c\udff4',
		  'black_heart':'\ud83d\udda4',
		  'black_joker':'\ud83c\udccf',
		  'black_large_square':'\u2b1b\ufe0f',
		  'black_medium_small_square':'\u25fe\ufe0f',
		  'black_medium_square':'\u25fc\ufe0f',
		  'black_nib':'\u2712\ufe0f',
		  'black_small_square':'\u25aa\ufe0f',
		  'black_square_button':'\ud83d\udd32',
		  'blonde_man':'\ud83d\udc71',
		  'blonde_woman':'\ud83d\udc71&zwj;\u2640\ufe0f',
		  'blossom':'\ud83c\udf3c',
		  'blowfish':'\ud83d\udc21',
		  'blue_book':'\ud83d\udcd8',
		  'blue_car':'\ud83d\ude99',
		  'blue_heart':'\ud83d\udc99',
		  'blush':'\ud83d\ude0a',
		  'boar':'\ud83d\udc17',
		  'boat':'\u26f5\ufe0f',
		  'bomb':'\ud83d\udca3',
		  'book':'\ud83d\udcd6',
		  'bookmark':'\ud83d\udd16',
		  'bookmark_tabs':'\ud83d\udcd1',
		  'books':'\ud83d\udcda',
		  'boom':'\ud83d\udca5',
		  'boot':'\ud83d\udc62',
		  'bouquet':'\ud83d\udc90',
		  'bowing_man':'\ud83d\ude47',
		  'bow_and_arrow':'\ud83c\udff9',
		  'bowing_woman':'\ud83d\ude47&zwj;\u2640\ufe0f',
		  'bowling':'\ud83c\udfb3',
		  'boxing_glove':'\ud83e\udd4a',
		  'boy':'\ud83d\udc66',
		  'bread':'\ud83c\udf5e',
		  'bride_with_veil':'\ud83d\udc70',
		  'bridge_at_night':'\ud83c\udf09',
		  'briefcase':'\ud83d\udcbc',
		  'broken_heart':'\ud83d\udc94',
		  'bug':'\ud83d\udc1b',
		  'building_construction':'\ud83c\udfd7',
		  'bulb':'\ud83d\udca1',
		  'bullettrain_front':'\ud83d\ude85',
		  'bullettrain_side':'\ud83d\ude84',
		  'burrito':'\ud83c\udf2f',
		  'bus':'\ud83d\ude8c',
		  'business_suit_levitating':'\ud83d\udd74',
		  'busstop':'\ud83d\ude8f',
		  'bust_in_silhouette':'\ud83d\udc64',
		  'busts_in_silhouette':'\ud83d\udc65',
		  'butterfly':'\ud83e\udd8b',
		  'cactus':'\ud83c\udf35',
		  'cake':'\ud83c\udf70',
		  'calendar':'\ud83d\udcc6',
		  'call_me_hand':'\ud83e\udd19',
		  'calling':'\ud83d\udcf2',
		  'camel':'\ud83d\udc2b',
		  'camera':'\ud83d\udcf7',
		  'camera_flash':'\ud83d\udcf8',
		  'camping':'\ud83c\udfd5',
		  'cancer':'\u264b\ufe0f',
		  'candle':'\ud83d\udd6f',
		  'candy':'\ud83c\udf6c',
		  'canoe':'\ud83d\udef6',
		  'capital_abcd':'\ud83d\udd20',
		  'capricorn':'\u2651\ufe0f',
		  'car':'\ud83d\ude97',
		  'card_file_box':'\ud83d\uddc3',
		  'card_index':'\ud83d\udcc7',
		  'card_index_dividers':'\ud83d\uddc2',
		  'carousel_horse':'\ud83c\udfa0',
		  'carrot':'\ud83e\udd55',
		  'cat':'\ud83d\udc31',
		  'cat2':'\ud83d\udc08',
		  'cd':'\ud83d\udcbf',
		  'chains':'\u26d3',
		  'champagne':'\ud83c\udf7e',
		  'chart':'\ud83d\udcb9',
		  'chart_with_downwards_trend':'\ud83d\udcc9',
		  'chart_with_upwards_trend':'\ud83d\udcc8',
		  'checkered_flag':'\ud83c\udfc1',
		  'cheese':'\ud83e\uddc0',
		  'cherries':'\ud83c\udf52',
		  'cherry_blossom':'\ud83c\udf38',
		  'chestnut':'\ud83c\udf30',
		  'chicken':'\ud83d\udc14',
		  'children_crossing':'\ud83d\udeb8',
		  'chipmunk':'\ud83d\udc3f',
		  'chocolate_bar':'\ud83c\udf6b',
		  'christmas_tree':'\ud83c\udf84',
		  'church':'\u26ea\ufe0f',
		  'cinema':'\ud83c\udfa6',
		  'circus_tent':'\ud83c\udfaa',
		  'city_sunrise':'\ud83c\udf07',
		  'city_sunset':'\ud83c\udf06',
		  'cityscape':'\ud83c\udfd9',
		  'cl':'\ud83c\udd91',
		  'clamp':'\ud83d\udddc',
		  'clap':'\ud83d\udc4f',
		  'clapper':'\ud83c\udfac',
		  'classical_building':'\ud83c\udfdb',
		  'clinking_glasses':'\ud83e\udd42',
		  'clipboard':'\ud83d\udccb',
		  'clock1':'\ud83d\udd50',
		  'clock10':'\ud83d\udd59',
		  'clock1030':'\ud83d\udd65',
		  'clock11':'\ud83d\udd5a',
		  'clock1130':'\ud83d\udd66',
		  'clock12':'\ud83d\udd5b',
		  'clock1230':'\ud83d\udd67',
		  'clock130':'\ud83d\udd5c',
		  'clock2':'\ud83d\udd51',
		  'clock230':'\ud83d\udd5d',
		  'clock3':'\ud83d\udd52',
		  'clock330':'\ud83d\udd5e',
		  'clock4':'\ud83d\udd53',
		  'clock430':'\ud83d\udd5f',
		  'clock5':'\ud83d\udd54',
		  'clock530':'\ud83d\udd60',
		  'clock6':'\ud83d\udd55',
		  'clock630':'\ud83d\udd61',
		  'clock7':'\ud83d\udd56',
		  'clock730':'\ud83d\udd62',
		  'clock8':'\ud83d\udd57',
		  'clock830':'\ud83d\udd63',
		  'clock9':'\ud83d\udd58',
		  'clock930':'\ud83d\udd64',
		  'closed_book':'\ud83d\udcd5',
		  'closed_lock_with_key':'\ud83d\udd10',
		  'closed_umbrella':'\ud83c\udf02',
		  'cloud':'\u2601\ufe0f',
		  'cloud_with_lightning':'\ud83c\udf29',
		  'cloud_with_lightning_and_rain':'\u26c8',
		  'cloud_with_rain':'\ud83c\udf27',
		  'cloud_with_snow':'\ud83c\udf28',
		  'clown_face':'\ud83e\udd21',
		  'clubs':'\u2663\ufe0f',
		  'cocktail':'\ud83c\udf78',
		  'coffee':'\u2615\ufe0f',
		  'coffin':'\u26b0\ufe0f',
		  'cold_sweat':'\ud83d\ude30',
		  'comet':'\u2604\ufe0f',
		  'computer':'\ud83d\udcbb',
		  'computer_mouse':'\ud83d\uddb1',
		  'confetti_ball':'\ud83c\udf8a',
		  'confounded':'\ud83d\ude16',
		  'confused':'\ud83d\ude15',
		  'congratulations':'\u3297\ufe0f',
		  'construction':'\ud83d\udea7',
		  'construction_worker_man':'\ud83d\udc77',
		  'construction_worker_woman':'\ud83d\udc77&zwj;\u2640\ufe0f',
		  'control_knobs':'\ud83c\udf9b',
		  'convenience_store':'\ud83c\udfea',
		  'cookie':'\ud83c\udf6a',
		  'cool':'\ud83c\udd92',
		  'policeman':'\ud83d\udc6e',
		  'copyright':'\u00a9\ufe0f',
		  'corn':'\ud83c\udf3d',
		  'couch_and_lamp':'\ud83d\udecb',
		  'couple':'\ud83d\udc6b',
		  'couple_with_heart_woman_man':'\ud83d\udc91',
		  'couple_with_heart_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc68',
		  'couple_with_heart_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc69',
		  'couplekiss_man_man':'\ud83d\udc68&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc68',
		  'couplekiss_man_woman':'\ud83d\udc8f',
		  'couplekiss_woman_woman':'\ud83d\udc69&zwj;\u2764\ufe0f&zwj;\ud83d\udc8b&zwj;\ud83d\udc69',
		  'cow':'\ud83d\udc2e',
		  'cow2':'\ud83d\udc04',
		  'cowboy_hat_face':'\ud83e\udd20',
		  'crab':'\ud83e\udd80',
		  'crayon':'\ud83d\udd8d',
		  'credit_card':'\ud83d\udcb3',
		  'crescent_moon':'\ud83c\udf19',
		  'cricket':'\ud83c\udfcf',
		  'crocodile':'\ud83d\udc0a',
		  'croissant':'\ud83e\udd50',
		  'crossed_fingers':'\ud83e\udd1e',
		  'crossed_flags':'\ud83c\udf8c',
		  'crossed_swords':'\u2694\ufe0f',
		  'crown':'\ud83d\udc51',
		  'cry':'\ud83d\ude22',
		  'crying_cat_face':'\ud83d\ude3f',
		  'crystal_ball':'\ud83d\udd2e',
		  'cucumber':'\ud83e\udd52',
		  'cupid':'\ud83d\udc98',
		  'curly_loop':'\u27b0',
		  'currency_exchange':'\ud83d\udcb1',
		  'curry':'\ud83c\udf5b',
		  'custard':'\ud83c\udf6e',
		  'customs':'\ud83d\udec3',
		  'cyclone':'\ud83c\udf00',
		  'dagger':'\ud83d\udde1',
		  'dancer':'\ud83d\udc83',
		  'dancing_women':'\ud83d\udc6f',
		  'dancing_men':'\ud83d\udc6f&zwj;\u2642\ufe0f',
		  'dango':'\ud83c\udf61',
		  'dark_sunglasses':'\ud83d\udd76',
		  'dart':'\ud83c\udfaf',
		  'dash':'\ud83d\udca8',
		  'date':'\ud83d\udcc5',
		  'deciduous_tree':'\ud83c\udf33',
		  'deer':'\ud83e\udd8c',
		  'department_store':'\ud83c\udfec',
		  'derelict_house':'\ud83c\udfda',
		  'desert':'\ud83c\udfdc',
		  'desert_island':'\ud83c\udfdd',
		  'desktop_computer':'\ud83d\udda5',
		  'male_detective':'\ud83d\udd75\ufe0f',
		  'diamond_shape_with_a_dot_inside':'\ud83d\udca0',
		  'diamonds':'\u2666\ufe0f',
		  'disappointed':'\ud83d\ude1e',
		  'disappointed_relieved':'\ud83d\ude25',
		  'dizzy':'\ud83d\udcab',
		  'dizzy_face':'\ud83d\ude35',
		  'do_not_litter':'\ud83d\udeaf',
		  'dog':'\ud83d\udc36',
		  'dog2':'\ud83d\udc15',
		  'dollar':'\ud83d\udcb5',
		  'dolls':'\ud83c\udf8e',
		  'dolphin':'\ud83d\udc2c',
		  'door':'\ud83d\udeaa',
		  'doughnut':'\ud83c\udf69',
		  'dove':'\ud83d\udd4a',
		  'dragon':'\ud83d\udc09',
		  'dragon_face':'\ud83d\udc32',
		  'dress':'\ud83d\udc57',
		  'dromedary_camel':'\ud83d\udc2a',
		  'drooling_face':'\ud83e\udd24',
		  'droplet':'\ud83d\udca7',
		  'drum':'\ud83e\udd41',
		  'duck':'\ud83e\udd86',
		  'dvd':'\ud83d\udcc0',
		  'e-mail':'\ud83d\udce7',
		  'eagle':'\ud83e\udd85',
		  'ear':'\ud83d\udc42',
		  'ear_of_rice':'\ud83c\udf3e',
		  'earth_africa':'\ud83c\udf0d',
		  'earth_americas':'\ud83c\udf0e',
		  'earth_asia':'\ud83c\udf0f',
		  'egg':'\ud83e\udd5a',
		  'eggplant':'\ud83c\udf46',
		  'eight_pointed_black_star':'\u2734\ufe0f',
		  'eight_spoked_asterisk':'\u2733\ufe0f',
		  'electric_plug':'\ud83d\udd0c',
		  'elephant':'\ud83d\udc18',
		  'email':'\u2709\ufe0f',
		  'end':'\ud83d\udd1a',
		  'envelope_with_arrow':'\ud83d\udce9',
		  'euro':'\ud83d\udcb6',
		  'european_castle':'\ud83c\udff0',
		  'european_post_office':'\ud83c\udfe4',
		  'evergreen_tree':'\ud83c\udf32',
		  'exclamation':'\u2757\ufe0f',
		  'expressionless':'\ud83d\ude11',
		  'eye':'\ud83d\udc41',
		  'eye_speech_bubble':'\ud83d\udc41&zwj;\ud83d\udde8',
		  'eyeglasses':'\ud83d\udc53',
		  'eyes':'\ud83d\udc40',
		  'face_with_head_bandage':'\ud83e\udd15',
		  'face_with_thermometer':'\ud83e\udd12',
		  'fist_oncoming':'\ud83d\udc4a',
		  'factory':'\ud83c\udfed',
		  'fallen_leaf':'\ud83c\udf42',
		  'family_man_woman_boy':'\ud83d\udc6a',
		  'family_man_boy':'\ud83d\udc68&zwj;\ud83d\udc66',
		  'family_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
		  'family_man_girl':'\ud83d\udc68&zwj;\ud83d\udc67',
		  'family_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
		  'family_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
		  'family_man_man_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66',
		  'family_man_man_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
		  'family_man_man_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67',
		  'family_man_man_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
		  'family_man_man_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc68&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
		  'family_man_woman_boy_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
		  'family_man_woman_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
		  'family_man_woman_girl_boy':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
		  'family_man_woman_girl_girl':'\ud83d\udc68&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
		  'family_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc66',
		  'family_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
		  'family_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc67',
		  'family_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
		  'family_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
		  'family_woman_woman_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66',
		  'family_woman_woman_boy_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc66&zwj;\ud83d\udc66',
		  'family_woman_woman_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67',
		  'family_woman_woman_girl_boy':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc66',
		  'family_woman_woman_girl_girl':'\ud83d\udc69&zwj;\ud83d\udc69&zwj;\ud83d\udc67&zwj;\ud83d\udc67',
		  'fast_forward':'\u23e9',
		  'fax':'\ud83d\udce0',
		  'fearful':'\ud83d\ude28',
		  'feet':'\ud83d\udc3e',
		  'female_detective':'\ud83d\udd75\ufe0f&zwj;\u2640\ufe0f',
		  'ferris_wheel':'\ud83c\udfa1',
		  'ferry':'\u26f4',
		  'field_hockey':'\ud83c\udfd1',
		  'file_cabinet':'\ud83d\uddc4',
		  'file_folder':'\ud83d\udcc1',
		  'film_projector':'\ud83d\udcfd',
		  'film_strip':'\ud83c\udf9e',
		  'fire':'\ud83d\udd25',
		  'fire_engine':'\ud83d\ude92',
		  'fireworks':'\ud83c\udf86',
		  'first_quarter_moon':'\ud83c\udf13',
		  'first_quarter_moon_with_face':'\ud83c\udf1b',
		  'fish':'\ud83d\udc1f',
		  'fish_cake':'\ud83c\udf65',
		  'fishing_pole_and_fish':'\ud83c\udfa3',
		  'fist_raised':'\u270a',
		  'fist_left':'\ud83e\udd1b',
		  'fist_right':'\ud83e\udd1c',
		  'flags':'\ud83c\udf8f',
		  'flashlight':'\ud83d\udd26',
		  'fleur_de_lis':'\u269c\ufe0f',
		  'flight_arrival':'\ud83d\udeec',
		  'flight_departure':'\ud83d\udeeb',
		  'floppy_disk':'\ud83d\udcbe',
		  'flower_playing_cards':'\ud83c\udfb4',
		  'flushed':'\ud83d\ude33',
		  'fog':'\ud83c\udf2b',
		  'foggy':'\ud83c\udf01',
		  'football':'\ud83c\udfc8',
		  'footprints':'\ud83d\udc63',
		  'fork_and_knife':'\ud83c\udf74',
		  'fountain':'\u26f2\ufe0f',
		  'fountain_pen':'\ud83d\udd8b',
		  'four_leaf_clover':'\ud83c\udf40',
		  'fox_face':'\ud83e\udd8a',
		  'framed_picture':'\ud83d\uddbc',
		  'free':'\ud83c\udd93',
		  'fried_egg':'\ud83c\udf73',
		  'fried_shrimp':'\ud83c\udf64',
		  'fries':'\ud83c\udf5f',
		  'frog':'\ud83d\udc38',
		  'frowning':'\ud83d\ude26',
		  'frowning_face':'\u2639\ufe0f',
		  'frowning_man':'\ud83d\ude4d&zwj;\u2642\ufe0f',
		  'frowning_woman':'\ud83d\ude4d',
		  'middle_finger':'\ud83d\udd95',
		  'fuelpump':'\u26fd\ufe0f',
		  'full_moon':'\ud83c\udf15',
		  'full_moon_with_face':'\ud83c\udf1d',
		  'funeral_urn':'\u26b1\ufe0f',
		  'game_die':'\ud83c\udfb2',
		  'gear':'\u2699\ufe0f',
		  'gem':'\ud83d\udc8e',
		  'gemini':'\u264a\ufe0f',
		  'ghost':'\ud83d\udc7b',
		  'gift':'\ud83c\udf81',
		  'gift_heart':'\ud83d\udc9d',
		  'girl':'\ud83d\udc67',
		  'globe_with_meridians':'\ud83c\udf10',
		  'goal_net':'\ud83e\udd45',
		  'goat':'\ud83d\udc10',
		  'golf':'\u26f3\ufe0f',
		  'golfing_man':'\ud83c\udfcc\ufe0f',
		  'golfing_woman':'\ud83c\udfcc\ufe0f&zwj;\u2640\ufe0f',
		  'gorilla':'\ud83e\udd8d',
		  'grapes':'\ud83c\udf47',
		  'green_apple':'\ud83c\udf4f',
		  'green_book':'\ud83d\udcd7',
		  'green_heart':'\ud83d\udc9a',
		  'green_salad':'\ud83e\udd57',
		  'grey_exclamation':'\u2755',
		  'grey_question':'\u2754',
		  'grimacing':'\ud83d\ude2c',
		  'grin':'\ud83d\ude01',
		  'grinning':'\ud83d\ude00',
		  'guardsman':'\ud83d\udc82',
		  'guardswoman':'\ud83d\udc82&zwj;\u2640\ufe0f',
		  'guitar':'\ud83c\udfb8',
		  'gun':'\ud83d\udd2b',
		  'haircut_woman':'\ud83d\udc87',
		  'haircut_man':'\ud83d\udc87&zwj;\u2642\ufe0f',
		  'hamburger':'\ud83c\udf54',
		  'hammer':'\ud83d\udd28',
		  'hammer_and_pick':'\u2692',
		  'hammer_and_wrench':'\ud83d\udee0',
		  'hamster':'\ud83d\udc39',
		  'hand':'\u270b',
		  'handbag':'\ud83d\udc5c',
		  'handshake':'\ud83e\udd1d',
		  'hankey':'\ud83d\udca9',
		  'hatched_chick':'\ud83d\udc25',
		  'hatching_chick':'\ud83d\udc23',
		  'headphones':'\ud83c\udfa7',
		  'hear_no_evil':'\ud83d\ude49',
		  'heart':'\u2764\ufe0f',
		  'heart_decoration':'\ud83d\udc9f',
		  'heart_eyes':'\ud83d\ude0d',
		  'heart_eyes_cat':'\ud83d\ude3b',
		  'heartbeat':'\ud83d\udc93',
		  'heartpulse':'\ud83d\udc97',
		  'hearts':'\u2665\ufe0f',
		  'heavy_check_mark':'\u2714\ufe0f',
		  'heavy_division_sign':'\u2797',
		  'heavy_dollar_sign':'\ud83d\udcb2',
		  'heavy_heart_exclamation':'\u2763\ufe0f',
		  'heavy_minus_sign':'\u2796',
		  'heavy_multiplication_x':'\u2716\ufe0f',
		  'heavy_plus_sign':'\u2795',
		  'helicopter':'\ud83d\ude81',
		  'herb':'\ud83c\udf3f',
		  'hibiscus':'\ud83c\udf3a',
		  'high_brightness':'\ud83d\udd06',
		  'high_heel':'\ud83d\udc60',
		  'hocho':'\ud83d\udd2a',
		  'hole':'\ud83d\udd73',
		  'honey_pot':'\ud83c\udf6f',
		  'horse':'\ud83d\udc34',
		  'horse_racing':'\ud83c\udfc7',
		  'hospital':'\ud83c\udfe5',
		  'hot_pepper':'\ud83c\udf36',
		  'hotdog':'\ud83c\udf2d',
		  'hotel':'\ud83c\udfe8',
		  'hotsprings':'\u2668\ufe0f',
		  'hourglass':'\u231b\ufe0f',
		  'hourglass_flowing_sand':'\u23f3',
		  'house':'\ud83c\udfe0',
		  'house_with_garden':'\ud83c\udfe1',
		  'houses':'\ud83c\udfd8',
		  'hugs':'\ud83e\udd17',
		  'hushed':'\ud83d\ude2f',
		  'ice_cream':'\ud83c\udf68',
		  'ice_hockey':'\ud83c\udfd2',
		  'ice_skate':'\u26f8',
		  'icecream':'\ud83c\udf66',
		  'id':'\ud83c\udd94',
		  'ideograph_advantage':'\ud83c\ude50',
		  'imp':'\ud83d\udc7f',
		  'inbox_tray':'\ud83d\udce5',
		  'incoming_envelope':'\ud83d\udce8',
		  'tipping_hand_woman':'\ud83d\udc81',
		  'information_source':'\u2139\ufe0f',
		  'innocent':'\ud83d\ude07',
		  'interrobang':'\u2049\ufe0f',
		  'iphone':'\ud83d\udcf1',
		  'izakaya_lantern':'\ud83c\udfee',
		  'jack_o_lantern':'\ud83c\udf83',
		  'japan':'\ud83d\uddfe',
		  'japanese_castle':'\ud83c\udfef',
		  'japanese_goblin':'\ud83d\udc7a',
		  'japanese_ogre':'\ud83d\udc79',
		  'jeans':'\ud83d\udc56',
		  'joy':'\ud83d\ude02',
		  'joy_cat':'\ud83d\ude39',
		  'joystick':'\ud83d\udd79',
		  'kaaba':'\ud83d\udd4b',
		  'key':'\ud83d\udd11',
		  'keyboard':'\u2328\ufe0f',
		  'keycap_ten':'\ud83d\udd1f',
		  'kick_scooter':'\ud83d\udef4',
		  'kimono':'\ud83d\udc58',
		  'kiss':'\ud83d\udc8b',
		  'kissing':'\ud83d\ude17',
		  'kissing_cat':'\ud83d\ude3d',
		  'kissing_closed_eyes':'\ud83d\ude1a',
		  'kissing_heart':'\ud83d\ude18',
		  'kissing_smiling_eyes':'\ud83d\ude19',
		  'kiwi_fruit':'\ud83e\udd5d',
		  'koala':'\ud83d\udc28',
		  'koko':'\ud83c\ude01',
		  'label':'\ud83c\udff7',
		  'large_blue_circle':'\ud83d\udd35',
		  'large_blue_diamond':'\ud83d\udd37',
		  'large_orange_diamond':'\ud83d\udd36',
		  'last_quarter_moon':'\ud83c\udf17',
		  'last_quarter_moon_with_face':'\ud83c\udf1c',
		  'latin_cross':'\u271d\ufe0f',
		  'laughing':'\ud83d\ude06',
		  'leaves':'\ud83c\udf43',
		  'ledger':'\ud83d\udcd2',
		  'left_luggage':'\ud83d\udec5',
		  'left_right_arrow':'\u2194\ufe0f',
		  'leftwards_arrow_with_hook':'\u21a9\ufe0f',
		  'lemon':'\ud83c\udf4b',
		  'leo':'\u264c\ufe0f',
		  'leopard':'\ud83d\udc06',
		  'level_slider':'\ud83c\udf9a',
		  'libra':'\u264e\ufe0f',
		  'light_rail':'\ud83d\ude88',
		  'link':'\ud83d\udd17',
		  'lion':'\ud83e\udd81',
		  'lips':'\ud83d\udc44',
		  'lipstick':'\ud83d\udc84',
		  'lizard':'\ud83e\udd8e',
		  'lock':'\ud83d\udd12',
		  'lock_with_ink_pen':'\ud83d\udd0f',
		  'lollipop':'\ud83c\udf6d',
		  'loop':'\u27bf',
		  'loud_sound':'\ud83d\udd0a',
		  'loudspeaker':'\ud83d\udce2',
		  'love_hotel':'\ud83c\udfe9',
		  'love_letter':'\ud83d\udc8c',
		  'low_brightness':'\ud83d\udd05',
		  'lying_face':'\ud83e\udd25',
		  'm':'\u24c2\ufe0f',
		  'mag':'\ud83d\udd0d',
		  'mag_right':'\ud83d\udd0e',
		  'mahjong':'\ud83c\udc04\ufe0f',
		  'mailbox':'\ud83d\udceb',
		  'mailbox_closed':'\ud83d\udcea',
		  'mailbox_with_mail':'\ud83d\udcec',
		  'mailbox_with_no_mail':'\ud83d\udced',
		  'man':'\ud83d\udc68',
		  'man_artist':'\ud83d\udc68&zwj;\ud83c\udfa8',
		  'man_astronaut':'\ud83d\udc68&zwj;\ud83d\ude80',
		  'man_cartwheeling':'\ud83e\udd38&zwj;\u2642\ufe0f',
		  'man_cook':'\ud83d\udc68&zwj;\ud83c\udf73',
		  'man_dancing':'\ud83d\udd7a',
		  'man_facepalming':'\ud83e\udd26&zwj;\u2642\ufe0f',
		  'man_factory_worker':'\ud83d\udc68&zwj;\ud83c\udfed',
		  'man_farmer':'\ud83d\udc68&zwj;\ud83c\udf3e',
		  'man_firefighter':'\ud83d\udc68&zwj;\ud83d\ude92',
		  'man_health_worker':'\ud83d\udc68&zwj;\u2695\ufe0f',
		  'man_in_tuxedo':'\ud83e\udd35',
		  'man_judge':'\ud83d\udc68&zwj;\u2696\ufe0f',
		  'man_juggling':'\ud83e\udd39&zwj;\u2642\ufe0f',
		  'man_mechanic':'\ud83d\udc68&zwj;\ud83d\udd27',
		  'man_office_worker':'\ud83d\udc68&zwj;\ud83d\udcbc',
		  'man_pilot':'\ud83d\udc68&zwj;\u2708\ufe0f',
		  'man_playing_handball':'\ud83e\udd3e&zwj;\u2642\ufe0f',
		  'man_playing_water_polo':'\ud83e\udd3d&zwj;\u2642\ufe0f',
		  'man_scientist':'\ud83d\udc68&zwj;\ud83d\udd2c',
		  'man_shrugging':'\ud83e\udd37&zwj;\u2642\ufe0f',
		  'man_singer':'\ud83d\udc68&zwj;\ud83c\udfa4',
		  'man_student':'\ud83d\udc68&zwj;\ud83c\udf93',
		  'man_teacher':'\ud83d\udc68&zwj;\ud83c\udfeb',
		  'man_technologist':'\ud83d\udc68&zwj;\ud83d\udcbb',
		  'man_with_gua_pi_mao':'\ud83d\udc72',
		  'man_with_turban':'\ud83d\udc73',
		  'tangerine':'\ud83c\udf4a',
		  'mans_shoe':'\ud83d\udc5e',
		  'mantelpiece_clock':'\ud83d\udd70',
		  'maple_leaf':'\ud83c\udf41',
		  'martial_arts_uniform':'\ud83e\udd4b',
		  'mask':'\ud83d\ude37',
		  'massage_woman':'\ud83d\udc86',
		  'massage_man':'\ud83d\udc86&zwj;\u2642\ufe0f',
		  'meat_on_bone':'\ud83c\udf56',
		  'medal_military':'\ud83c\udf96',
		  'medal_sports':'\ud83c\udfc5',
		  'mega':'\ud83d\udce3',
		  'melon':'\ud83c\udf48',
		  'memo':'\ud83d\udcdd',
		  'men_wrestling':'\ud83e\udd3c&zwj;\u2642\ufe0f',
		  'menorah':'\ud83d\udd4e',
		  'mens':'\ud83d\udeb9',
		  'metal':'\ud83e\udd18',
		  'metro':'\ud83d\ude87',
		  'microphone':'\ud83c\udfa4',
		  'microscope':'\ud83d\udd2c',
		  'milk_glass':'\ud83e\udd5b',
		  'milky_way':'\ud83c\udf0c',
		  'minibus':'\ud83d\ude90',
		  'minidisc':'\ud83d\udcbd',
		  'mobile_phone_off':'\ud83d\udcf4',
		  'money_mouth_face':'\ud83e\udd11',
		  'money_with_wings':'\ud83d\udcb8',
		  'moneybag':'\ud83d\udcb0',
		  'monkey':'\ud83d\udc12',
		  'monkey_face':'\ud83d\udc35',
		  'monorail':'\ud83d\ude9d',
		  'moon':'\ud83c\udf14',
		  'mortar_board':'\ud83c\udf93',
		  'mosque':'\ud83d\udd4c',
		  'motor_boat':'\ud83d\udee5',
		  'motor_scooter':'\ud83d\udef5',
		  'motorcycle':'\ud83c\udfcd',
		  'motorway':'\ud83d\udee3',
		  'mount_fuji':'\ud83d\uddfb',
		  'mountain':'\u26f0',
		  'mountain_biking_man':'\ud83d\udeb5',
		  'mountain_biking_woman':'\ud83d\udeb5&zwj;\u2640\ufe0f',
		  'mountain_cableway':'\ud83d\udea0',
		  'mountain_railway':'\ud83d\ude9e',
		  'mountain_snow':'\ud83c\udfd4',
		  'mouse':'\ud83d\udc2d',
		  'mouse2':'\ud83d\udc01',
		  'movie_camera':'\ud83c\udfa5',
		  'moyai':'\ud83d\uddff',
		  'mrs_claus':'\ud83e\udd36',
		  'muscle':'\ud83d\udcaa',
		  'mushroom':'\ud83c\udf44',
		  'musical_keyboard':'\ud83c\udfb9',
		  'musical_note':'\ud83c\udfb5',
		  'musical_score':'\ud83c\udfbc',
		  'mute':'\ud83d\udd07',
		  'nail_care':'\ud83d\udc85',
		  'name_badge':'\ud83d\udcdb',
		  'national_park':'\ud83c\udfde',
		  'nauseated_face':'\ud83e\udd22',
		  'necktie':'\ud83d\udc54',
		  'negative_squared_cross_mark':'\u274e',
		  'nerd_face':'\ud83e\udd13',
		  'neutral_face':'\ud83d\ude10',
		  'new':'\ud83c\udd95',
		  'new_moon':'\ud83c\udf11',
		  'new_moon_with_face':'\ud83c\udf1a',
		  'newspaper':'\ud83d\udcf0',
		  'newspaper_roll':'\ud83d\uddde',
		  'next_track_button':'\u23ed',
		  'ng':'\ud83c\udd96',
		  'no_good_man':'\ud83d\ude45&zwj;\u2642\ufe0f',
		  'no_good_woman':'\ud83d\ude45',
		  'night_with_stars':'\ud83c\udf03',
		  'no_bell':'\ud83d\udd15',
		  'no_bicycles':'\ud83d\udeb3',
		  'no_entry':'\u26d4\ufe0f',
		  'no_entry_sign':'\ud83d\udeab',
		  'no_mobile_phones':'\ud83d\udcf5',
		  'no_mouth':'\ud83d\ude36',
		  'no_pedestrians':'\ud83d\udeb7',
		  'no_smoking':'\ud83d\udead',
		  'non-potable_water':'\ud83d\udeb1',
		  'nose':'\ud83d\udc43',
		  'notebook':'\ud83d\udcd3',
		  'notebook_with_decorative_cover':'\ud83d\udcd4',
		  'notes':'\ud83c\udfb6',
		  'nut_and_bolt':'\ud83d\udd29',
		  'o':'\u2b55\ufe0f',
		  'o2':'\ud83c\udd7e\ufe0f',
		  'ocean':'\ud83c\udf0a',
		  'octopus':'\ud83d\udc19',
		  'oden':'\ud83c\udf62',
		  'office':'\ud83c\udfe2',
		  'oil_drum':'\ud83d\udee2',
		  'ok':'\ud83c\udd97',
		  'ok_hand':'\ud83d\udc4c',
		  'ok_man':'\ud83d\ude46&zwj;\u2642\ufe0f',
		  'ok_woman':'\ud83d\ude46',
		  'old_key':'\ud83d\udddd',
		  'older_man':'\ud83d\udc74',
		  'older_woman':'\ud83d\udc75',
		  'om':'\ud83d\udd49',
		  'on':'\ud83d\udd1b',
		  'oncoming_automobile':'\ud83d\ude98',
		  'oncoming_bus':'\ud83d\ude8d',
		  'oncoming_police_car':'\ud83d\ude94',
		  'oncoming_taxi':'\ud83d\ude96',
		  'open_file_folder':'\ud83d\udcc2',
		  'open_hands':'\ud83d\udc50',
		  'open_mouth':'\ud83d\ude2e',
		  'open_umbrella':'\u2602\ufe0f',
		  'ophiuchus':'\u26ce',
		  'orange_book':'\ud83d\udcd9',
		  'orthodox_cross':'\u2626\ufe0f',
		  'outbox_tray':'\ud83d\udce4',
		  'owl':'\ud83e\udd89',
		  'ox':'\ud83d\udc02',
		  'package':'\ud83d\udce6',
		  'page_facing_up':'\ud83d\udcc4',
		  'page_with_curl':'\ud83d\udcc3',
		  'pager':'\ud83d\udcdf',
		  'paintbrush':'\ud83d\udd8c',
		  'palm_tree':'\ud83c\udf34',
		  'pancakes':'\ud83e\udd5e',
		  'panda_face':'\ud83d\udc3c',
		  'paperclip':'\ud83d\udcce',
		  'paperclips':'\ud83d\udd87',
		  'parasol_on_ground':'\u26f1',
		  'parking':'\ud83c\udd7f\ufe0f',
		  'part_alternation_mark':'\u303d\ufe0f',
		  'partly_sunny':'\u26c5\ufe0f',
		  'passenger_ship':'\ud83d\udef3',
		  'passport_control':'\ud83d\udec2',
		  'pause_button':'\u23f8',
		  'peace_symbol':'\u262e\ufe0f',
		  'peach':'\ud83c\udf51',
		  'peanuts':'\ud83e\udd5c',
		  'pear':'\ud83c\udf50',
		  'pen':'\ud83d\udd8a',
		  'pencil2':'\u270f\ufe0f',
		  'penguin':'\ud83d\udc27',
		  'pensive':'\ud83d\ude14',
		  'performing_arts':'\ud83c\udfad',
		  'persevere':'\ud83d\ude23',
		  'person_fencing':'\ud83e\udd3a',
		  'pouting_woman':'\ud83d\ude4e',
		  'phone':'\u260e\ufe0f',
		  'pick':'\u26cf',
		  'pig':'\ud83d\udc37',
		  'pig2':'\ud83d\udc16',
		  'pig_nose':'\ud83d\udc3d',
		  'pill':'\ud83d\udc8a',
		  'pineapple':'\ud83c\udf4d',
		  'ping_pong':'\ud83c\udfd3',
		  'pisces':'\u2653\ufe0f',
		  'pizza':'\ud83c\udf55',
		  'place_of_worship':'\ud83d\uded0',
		  'plate_with_cutlery':'\ud83c\udf7d',
		  'play_or_pause_button':'\u23ef',
		  'point_down':'\ud83d\udc47',
		  'point_left':'\ud83d\udc48',
		  'point_right':'\ud83d\udc49',
		  'point_up':'\u261d\ufe0f',
		  'point_up_2':'\ud83d\udc46',
		  'police_car':'\ud83d\ude93',
		  'policewoman':'\ud83d\udc6e&zwj;\u2640\ufe0f',
		  'poodle':'\ud83d\udc29',
		  'popcorn':'\ud83c\udf7f',
		  'post_office':'\ud83c\udfe3',
		  'postal_horn':'\ud83d\udcef',
		  'postbox':'\ud83d\udcee',
		  'potable_water':'\ud83d\udeb0',
		  'potato':'\ud83e\udd54',
		  'pouch':'\ud83d\udc5d',
		  'poultry_leg':'\ud83c\udf57',
		  'pound':'\ud83d\udcb7',
		  'rage':'\ud83d\ude21',
		  'pouting_cat':'\ud83d\ude3e',
		  'pouting_man':'\ud83d\ude4e&zwj;\u2642\ufe0f',
		  'pray':'\ud83d\ude4f',
		  'prayer_beads':'\ud83d\udcff',
		  'pregnant_woman':'\ud83e\udd30',
		  'previous_track_button':'\u23ee',
		  'prince':'\ud83e\udd34',
		  'princess':'\ud83d\udc78',
		  'printer':'\ud83d\udda8',
		  'purple_heart':'\ud83d\udc9c',
		  'purse':'\ud83d\udc5b',
		  'pushpin':'\ud83d\udccc',
		  'put_litter_in_its_place':'\ud83d\udeae',
		  'question':'\u2753',
		  'rabbit':'\ud83d\udc30',
		  'rabbit2':'\ud83d\udc07',
		  'racehorse':'\ud83d\udc0e',
		  'racing_car':'\ud83c\udfce',
		  'radio':'\ud83d\udcfb',
		  'radio_button':'\ud83d\udd18',
		  'radioactive':'\u2622\ufe0f',
		  'railway_car':'\ud83d\ude83',
		  'railway_track':'\ud83d\udee4',
		  'rainbow':'\ud83c\udf08',
		  'rainbow_flag':'\ud83c\udff3\ufe0f&zwj;\ud83c\udf08',
		  'raised_back_of_hand':'\ud83e\udd1a',
		  'raised_hand_with_fingers_splayed':'\ud83d\udd90',
		  'raised_hands':'\ud83d\ude4c',
		  'raising_hand_woman':'\ud83d\ude4b',
		  'raising_hand_man':'\ud83d\ude4b&zwj;\u2642\ufe0f',
		  'ram':'\ud83d\udc0f',
		  'ramen':'\ud83c\udf5c',
		  'rat':'\ud83d\udc00',
		  'record_button':'\u23fa',
		  'recycle':'\u267b\ufe0f',
		  'red_circle':'\ud83d\udd34',
		  'registered':'\u00ae\ufe0f',
		  'relaxed':'\u263a\ufe0f',
		  'relieved':'\ud83d\ude0c',
		  'reminder_ribbon':'\ud83c\udf97',
		  'repeat':'\ud83d\udd01',
		  'repeat_one':'\ud83d\udd02',
		  'rescue_worker_helmet':'\u26d1',
		  'restroom':'\ud83d\udebb',
		  'revolving_hearts':'\ud83d\udc9e',
		  'rewind':'\u23ea',
		  'rhinoceros':'\ud83e\udd8f',
		  'ribbon':'\ud83c\udf80',
		  'rice':'\ud83c\udf5a',
		  'rice_ball':'\ud83c\udf59',
		  'rice_cracker':'\ud83c\udf58',
		  'rice_scene':'\ud83c\udf91',
		  'right_anger_bubble':'\ud83d\uddef',
		  'ring':'\ud83d\udc8d',
		  'robot':'\ud83e\udd16',
		  'rocket':'\ud83d\ude80',
		  'rofl':'\ud83e\udd23',
		  'roll_eyes':'\ud83d\ude44',
		  'roller_coaster':'\ud83c\udfa2',
		  'rooster':'\ud83d\udc13',
		  'rose':'\ud83c\udf39',
		  'rosette':'\ud83c\udff5',
		  'rotating_light':'\ud83d\udea8',
		  'round_pushpin':'\ud83d\udccd',
		  'rowing_man':'\ud83d\udea3',
		  'rowing_woman':'\ud83d\udea3&zwj;\u2640\ufe0f',
		  'rugby_football':'\ud83c\udfc9',
		  'running_man':'\ud83c\udfc3',
		  'running_shirt_with_sash':'\ud83c\udfbd',
		  'running_woman':'\ud83c\udfc3&zwj;\u2640\ufe0f',
		  'sa':'\ud83c\ude02\ufe0f',
		  'sagittarius':'\u2650\ufe0f',
		  'sake':'\ud83c\udf76',
		  'sandal':'\ud83d\udc61',
		  'santa':'\ud83c\udf85',
		  'satellite':'\ud83d\udce1',
		  'saxophone':'\ud83c\udfb7',
		  'school':'\ud83c\udfeb',
		  'school_satchel':'\ud83c\udf92',
		  'scissors':'\u2702\ufe0f',
		  'scorpion':'\ud83e\udd82',
		  'scorpius':'\u264f\ufe0f',
		  'scream':'\ud83d\ude31',
		  'scream_cat':'\ud83d\ude40',
		  'scroll':'\ud83d\udcdc',
		  'seat':'\ud83d\udcba',
		  'secret':'\u3299\ufe0f',
		  'see_no_evil':'\ud83d\ude48',
		  'seedling':'\ud83c\udf31',
		  'selfie':'\ud83e\udd33',
		  'shallow_pan_of_food':'\ud83e\udd58',
		  'shamrock':'\u2618\ufe0f',
		  'shark':'\ud83e\udd88',
		  'shaved_ice':'\ud83c\udf67',
		  'sheep':'\ud83d\udc11',
		  'shell':'\ud83d\udc1a',
		  'shield':'\ud83d\udee1',
		  'shinto_shrine':'\u26e9',
		  'ship':'\ud83d\udea2',
		  'shirt':'\ud83d\udc55',
		  'shopping':'\ud83d\udecd',
		  'shopping_cart':'\ud83d\uded2',
		  'shower':'\ud83d\udebf',
		  'shrimp':'\ud83e\udd90',
		  'signal_strength':'\ud83d\udcf6',
		  'six_pointed_star':'\ud83d\udd2f',
		  'ski':'\ud83c\udfbf',
		  'skier':'\u26f7',
		  'skull':'\ud83d\udc80',
		  'skull_and_crossbones':'\u2620\ufe0f',
		  'sleeping':'\ud83d\ude34',
		  'sleeping_bed':'\ud83d\udecc',
		  'sleepy':'\ud83d\ude2a',
		  'slightly_frowning_face':'\ud83d\ude41',
		  'slightly_smiling_face':'\ud83d\ude42',
		  'slot_machine':'\ud83c\udfb0',
		  'small_airplane':'\ud83d\udee9',
		  'small_blue_diamond':'\ud83d\udd39',
		  'small_orange_diamond':'\ud83d\udd38',
		  'small_red_triangle':'\ud83d\udd3a',
		  'small_red_triangle_down':'\ud83d\udd3b',
		  'smile':'\ud83d\ude04',
		  'smile_cat':'\ud83d\ude38',
		  'smiley':'\ud83d\ude03',
		  'smiley_cat':'\ud83d\ude3a',
		  'smiling_imp':'\ud83d\ude08',
		  'smirk':'\ud83d\ude0f',
		  'smirk_cat':'\ud83d\ude3c',
		  'smoking':'\ud83d\udeac',
		  'snail':'\ud83d\udc0c',
		  'snake':'\ud83d\udc0d',
		  'sneezing_face':'\ud83e\udd27',
		  'snowboarder':'\ud83c\udfc2',
		  'snowflake':'\u2744\ufe0f',
		  'snowman':'\u26c4\ufe0f',
		  'snowman_with_snow':'\u2603\ufe0f',
		  'sob':'\ud83d\ude2d',
		  'soccer':'\u26bd\ufe0f',
		  'soon':'\ud83d\udd1c',
		  'sos':'\ud83c\udd98',
		  'sound':'\ud83d\udd09',
		  'space_invader':'\ud83d\udc7e',
		  'spades':'\u2660\ufe0f',
		  'spaghetti':'\ud83c\udf5d',
		  'sparkle':'\u2747\ufe0f',
		  'sparkler':'\ud83c\udf87',
		  'sparkles':'\u2728',
		  'sparkling_heart':'\ud83d\udc96',
		  'speak_no_evil':'\ud83d\ude4a',
		  'speaker':'\ud83d\udd08',
		  'speaking_head':'\ud83d\udde3',
		  'speech_balloon':'\ud83d\udcac',
		  'speedboat':'\ud83d\udea4',
		  'spider':'\ud83d\udd77',
		  'spider_web':'\ud83d\udd78',
		  'spiral_calendar':'\ud83d\uddd3',
		  'spiral_notepad':'\ud83d\uddd2',
		  'spoon':'\ud83e\udd44',
		  'squid':'\ud83e\udd91',
		  'stadium':'\ud83c\udfdf',
		  'star':'\u2b50\ufe0f',
		  'star2':'\ud83c\udf1f',
		  'star_and_crescent':'\u262a\ufe0f',
		  'star_of_david':'\u2721\ufe0f',
		  'stars':'\ud83c\udf20',
		  'station':'\ud83d\ude89',
		  'statue_of_liberty':'\ud83d\uddfd',
		  'steam_locomotive':'\ud83d\ude82',
		  'stew':'\ud83c\udf72',
		  'stop_button':'\u23f9',
		  'stop_sign':'\ud83d\uded1',
		  'stopwatch':'\u23f1',
		  'straight_ruler':'\ud83d\udccf',
		  'strawberry':'\ud83c\udf53',
		  'stuck_out_tongue':'\ud83d\ude1b',
		  'stuck_out_tongue_closed_eyes':'\ud83d\ude1d',
		  'stuck_out_tongue_winking_eye':'\ud83d\ude1c',
		  'studio_microphone':'\ud83c\udf99',
		  'stuffed_flatbread':'\ud83e\udd59',
		  'sun_behind_large_cloud':'\ud83c\udf25',
		  'sun_behind_rain_cloud':'\ud83c\udf26',
		  'sun_behind_small_cloud':'\ud83c\udf24',
		  'sun_with_face':'\ud83c\udf1e',
		  'sunflower':'\ud83c\udf3b',
		  'sunglasses':'\ud83d\ude0e',
		  'sunny':'\u2600\ufe0f',
		  'sunrise':'\ud83c\udf05',
		  'sunrise_over_mountains':'\ud83c\udf04',
		  'surfing_man':'\ud83c\udfc4',
		  'surfing_woman':'\ud83c\udfc4&zwj;\u2640\ufe0f',
		  'sushi':'\ud83c\udf63',
		  'suspension_railway':'\ud83d\ude9f',
		  'sweat':'\ud83d\ude13',
		  'sweat_drops':'\ud83d\udca6',
		  'sweat_smile':'\ud83d\ude05',
		  'sweet_potato':'\ud83c\udf60',
		  'swimming_man':'\ud83c\udfca',
		  'swimming_woman':'\ud83c\udfca&zwj;\u2640\ufe0f',
		  'symbols':'\ud83d\udd23',
		  'synagogue':'\ud83d\udd4d',
		  'syringe':'\ud83d\udc89',
		  'taco':'\ud83c\udf2e',
		  'tada':'\ud83c\udf89',
		  'tanabata_tree':'\ud83c\udf8b',
		  'taurus':'\u2649\ufe0f',
		  'taxi':'\ud83d\ude95',
		  'tea':'\ud83c\udf75',
		  'telephone_receiver':'\ud83d\udcde',
		  'telescope':'\ud83d\udd2d',
		  'tennis':'\ud83c\udfbe',
		  'tent':'\u26fa\ufe0f',
		  'thermometer':'\ud83c\udf21',
		  'thinking':'\ud83e\udd14',
		  'thought_balloon':'\ud83d\udcad',
		  'ticket':'\ud83c\udfab',
		  'tickets':'\ud83c\udf9f',
		  'tiger':'\ud83d\udc2f',
		  'tiger2':'\ud83d\udc05',
		  'timer_clock':'\u23f2',
		  'tipping_hand_man':'\ud83d\udc81&zwj;\u2642\ufe0f',
		  'tired_face':'\ud83d\ude2b',
		  'tm':'\u2122\ufe0f',
		  'toilet':'\ud83d\udebd',
		  'tokyo_tower':'\ud83d\uddfc',
		  'tomato':'\ud83c\udf45',
		  'tongue':'\ud83d\udc45',
		  'top':'\ud83d\udd1d',
		  'tophat':'\ud83c\udfa9',
		  'tornado':'\ud83c\udf2a',
		  'trackball':'\ud83d\uddb2',
		  'tractor':'\ud83d\ude9c',
		  'traffic_light':'\ud83d\udea5',
		  'train':'\ud83d\ude8b',
		  'train2':'\ud83d\ude86',
		  'tram':'\ud83d\ude8a',
		  'triangular_flag_on_post':'\ud83d\udea9',
		  'triangular_ruler':'\ud83d\udcd0',
		  'trident':'\ud83d\udd31',
		  'triumph':'\ud83d\ude24',
		  'trolleybus':'\ud83d\ude8e',
		  'trophy':'\ud83c\udfc6',
		  'tropical_drink':'\ud83c\udf79',
		  'tropical_fish':'\ud83d\udc20',
		  'truck':'\ud83d\ude9a',
		  'trumpet':'\ud83c\udfba',
		  'tulip':'\ud83c\udf37',
		  'tumbler_glass':'\ud83e\udd43',
		  'turkey':'\ud83e\udd83',
		  'turtle':'\ud83d\udc22',
		  'tv':'\ud83d\udcfa',
		  'twisted_rightwards_arrows':'\ud83d\udd00',
		  'two_hearts':'\ud83d\udc95',
		  'two_men_holding_hands':'\ud83d\udc6c',
		  'two_women_holding_hands':'\ud83d\udc6d',
		  'u5272':'\ud83c\ude39',
		  'u5408':'\ud83c\ude34',
		  'u55b6':'\ud83c\ude3a',
		  'u6307':'\ud83c\ude2f\ufe0f',
		  'u6708':'\ud83c\ude37\ufe0f',
		  'u6709':'\ud83c\ude36',
		  'u6e80':'\ud83c\ude35',
		  'u7121':'\ud83c\ude1a\ufe0f',
		  'u7533':'\ud83c\ude38',
		  'u7981':'\ud83c\ude32',
		  'u7a7a':'\ud83c\ude33',
		  'umbrella':'\u2614\ufe0f',
		  'unamused':'\ud83d\ude12',
		  'underage':'\ud83d\udd1e',
		  'unicorn':'\ud83e\udd84',
		  'unlock':'\ud83d\udd13',
		  'up':'\ud83c\udd99',
		  'upside_down_face':'\ud83d\ude43',
		  'v':'\u270c\ufe0f',
		  'vertical_traffic_light':'\ud83d\udea6',
		  'vhs':'\ud83d\udcfc',
		  'vibration_mode':'\ud83d\udcf3',
		  'video_camera':'\ud83d\udcf9',
		  'video_game':'\ud83c\udfae',
		  'violin':'\ud83c\udfbb',
		  'virgo':'\u264d\ufe0f',
		  'volcano':'\ud83c\udf0b',
		  'volleyball':'\ud83c\udfd0',
		  'vs':'\ud83c\udd9a',
		  'vulcan_salute':'\ud83d\udd96',
		  'walking_man':'\ud83d\udeb6',
		  'walking_woman':'\ud83d\udeb6&zwj;\u2640\ufe0f',
		  'waning_crescent_moon':'\ud83c\udf18',
		  'waning_gibbous_moon':'\ud83c\udf16',
		  'warning':'\u26a0\ufe0f',
		  'wastebasket':'\ud83d\uddd1',
		  'watch':'\u231a\ufe0f',
		  'water_buffalo':'\ud83d\udc03',
		  'watermelon':'\ud83c\udf49',
		  'wave':'\ud83d\udc4b',
		  'wavy_dash':'\u3030\ufe0f',
		  'waxing_crescent_moon':'\ud83c\udf12',
		  'wc':'\ud83d\udebe',
		  'weary':'\ud83d\ude29',
		  'wedding':'\ud83d\udc92',
		  'weight_lifting_man':'\ud83c\udfcb\ufe0f',
		  'weight_lifting_woman':'\ud83c\udfcb\ufe0f&zwj;\u2640\ufe0f',
		  'whale':'\ud83d\udc33',
		  'whale2':'\ud83d\udc0b',
		  'wheel_of_dharma':'\u2638\ufe0f',
		  'wheelchair':'\u267f\ufe0f',
		  'white_check_mark':'\u2705',
		  'white_circle':'\u26aa\ufe0f',
		  'white_flag':'\ud83c\udff3\ufe0f',
		  'white_flower':'\ud83d\udcae',
		  'white_large_square':'\u2b1c\ufe0f',
		  'white_medium_small_square':'\u25fd\ufe0f',
		  'white_medium_square':'\u25fb\ufe0f',
		  'white_small_square':'\u25ab\ufe0f',
		  'white_square_button':'\ud83d\udd33',
		  'wilted_flower':'\ud83e\udd40',
		  'wind_chime':'\ud83c\udf90',
		  'wind_face':'\ud83c\udf2c',
		  'wine_glass':'\ud83c\udf77',
		  'wink':'\ud83d\ude09',
		  'wolf':'\ud83d\udc3a',
		  'woman':'\ud83d\udc69',
		  'woman_artist':'\ud83d\udc69&zwj;\ud83c\udfa8',
		  'woman_astronaut':'\ud83d\udc69&zwj;\ud83d\ude80',
		  'woman_cartwheeling':'\ud83e\udd38&zwj;\u2640\ufe0f',
		  'woman_cook':'\ud83d\udc69&zwj;\ud83c\udf73',
		  'woman_facepalming':'\ud83e\udd26&zwj;\u2640\ufe0f',
		  'woman_factory_worker':'\ud83d\udc69&zwj;\ud83c\udfed',
		  'woman_farmer':'\ud83d\udc69&zwj;\ud83c\udf3e',
		  'woman_firefighter':'\ud83d\udc69&zwj;\ud83d\ude92',
		  'woman_health_worker':'\ud83d\udc69&zwj;\u2695\ufe0f',
		  'woman_judge':'\ud83d\udc69&zwj;\u2696\ufe0f',
		  'woman_juggling':'\ud83e\udd39&zwj;\u2640\ufe0f',
		  'woman_mechanic':'\ud83d\udc69&zwj;\ud83d\udd27',
		  'woman_office_worker':'\ud83d\udc69&zwj;\ud83d\udcbc',
		  'woman_pilot':'\ud83d\udc69&zwj;\u2708\ufe0f',
		  'woman_playing_handball':'\ud83e\udd3e&zwj;\u2640\ufe0f',
		  'woman_playing_water_polo':'\ud83e\udd3d&zwj;\u2640\ufe0f',
		  'woman_scientist':'\ud83d\udc69&zwj;\ud83d\udd2c',
		  'woman_shrugging':'\ud83e\udd37&zwj;\u2640\ufe0f',
		  'woman_singer':'\ud83d\udc69&zwj;\ud83c\udfa4',
		  'woman_student':'\ud83d\udc69&zwj;\ud83c\udf93',
		  'woman_teacher':'\ud83d\udc69&zwj;\ud83c\udfeb',
		  'woman_technologist':'\ud83d\udc69&zwj;\ud83d\udcbb',
		  'woman_with_turban':'\ud83d\udc73&zwj;\u2640\ufe0f',
		  'womans_clothes':'\ud83d\udc5a',
		  'womans_hat':'\ud83d\udc52',
		  'women_wrestling':'\ud83e\udd3c&zwj;\u2640\ufe0f',
		  'womens':'\ud83d\udeba',
		  'world_map':'\ud83d\uddfa',
		  'worried':'\ud83d\ude1f',
		  'wrench':'\ud83d\udd27',
		  'writing_hand':'\u270d\ufe0f',
		  'x':'\u274c',
		  'yellow_heart':'\ud83d\udc9b',
		  'yen':'\ud83d\udcb4',
		  'yin_yang':'\u262f\ufe0f',
		  'yum':'\ud83d\ude0b',
		  'zap':'\u26a1\ufe0f',
		  'zipper_mouth_face':'\ud83e\udd10',
		  'zzz':'\ud83d\udca4',

		  /* special emojis :P */
		  'octocat':  '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
		  'showdown': '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>'
		};

		/**
		 * Created by Estevao on 31-05-2015.
		 */

		/**
		 * Showdown Converter class
		 * @class
		 * @param {object} [converterOptions]
		 * @returns {Converter}
		 */
		showdown.Converter = function (converterOptions) {

		  var
		      /**
		       * Options used by this converter
		       * @private
		       * @type {{}}
		       */
		      options = {},

		      /**
		       * Language extensions used by this converter
		       * @private
		       * @type {Array}
		       */
		      langExtensions = [],

		      /**
		       * Output modifiers extensions used by this converter
		       * @private
		       * @type {Array}
		       */
		      outputModifiers = [],

		      /**
		       * Event listeners
		       * @private
		       * @type {{}}
		       */
		      listeners = {},

		      /**
		       * The flavor set in this converter
		       */
		      setConvFlavor = setFlavor,

		      /**
		       * Metadata of the document
		       * @type {{parsed: {}, raw: string, format: string}}
		       */
		      metadata = {
		        parsed: {},
		        raw: '',
		        format: ''
		      };

		  _constructor();

		  /**
		   * Converter constructor
		   * @private
		   */
		  function _constructor () {
		    converterOptions = converterOptions || {};

		    for (var gOpt in globalOptions) {
		      if (globalOptions.hasOwnProperty(gOpt)) {
		        options[gOpt] = globalOptions[gOpt];
		      }
		    }

		    // Merge options
		    if (typeof converterOptions === 'object') {
		      for (var opt in converterOptions) {
		        if (converterOptions.hasOwnProperty(opt)) {
		          options[opt] = converterOptions[opt];
		        }
		      }
		    } else {
		      throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions +
		      ' was passed instead.');
		    }

		    if (options.extensions) {
		      showdown.helper.forEach(options.extensions, _parseExtension);
		    }
		  }

		  /**
		   * Parse extension
		   * @param {*} ext
		   * @param {string} [name='']
		   * @private
		   */
		  function _parseExtension (ext, name) {

		    name = name || null;
		    // If it's a string, the extension was previously loaded
		    if (showdown.helper.isString(ext)) {
		      ext = showdown.helper.stdExtName(ext);
		      name = ext;

		      // LEGACY_SUPPORT CODE
		      if (showdown.extensions[ext]) {
		        console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' +
		          'Please inform the developer that the extension should be updated!');
		        legacyExtensionLoading(showdown.extensions[ext], ext);
		        return;
		        // END LEGACY SUPPORT CODE

		      } else if (!showdown.helper.isUndefined(extensions[ext])) {
		        ext = extensions[ext];

		      } else {
		        throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
		      }
		    }

		    if (typeof ext === 'function') {
		      ext = ext();
		    }

		    if (!showdown.helper.isArray(ext)) {
		      ext = [ext];
		    }

		    var validExt = validate(ext, name);
		    if (!validExt.valid) {
		      throw Error(validExt.error);
		    }

		    for (var i = 0; i < ext.length; ++i) {
		      switch (ext[i].type) {

		        case 'lang':
		          langExtensions.push(ext[i]);
		          break;

		        case 'output':
		          outputModifiers.push(ext[i]);
		          break;
		      }
		      if (ext[i].hasOwnProperty('listeners')) {
		        for (var ln in ext[i].listeners) {
		          if (ext[i].listeners.hasOwnProperty(ln)) {
		            listen(ln, ext[i].listeners[ln]);
		          }
		        }
		      }
		    }

		  }

		  /**
		   * LEGACY_SUPPORT
		   * @param {*} ext
		   * @param {string} name
		   */
		  function legacyExtensionLoading (ext, name) {
		    if (typeof ext === 'function') {
		      ext = ext(new showdown.Converter());
		    }
		    if (!showdown.helper.isArray(ext)) {
		      ext = [ext];
		    }
		    var valid = validate(ext, name);

		    if (!valid.valid) {
		      throw Error(valid.error);
		    }

		    for (var i = 0; i < ext.length; ++i) {
		      switch (ext[i].type) {
		        case 'lang':
		          langExtensions.push(ext[i]);
		          break;
		        case 'output':
		          outputModifiers.push(ext[i]);
		          break;
		        default:// should never reach here
		          throw Error('Extension loader error: Type unrecognized!!!');
		      }
		    }
		  }

		  /**
		   * Listen to an event
		   * @param {string} name
		   * @param {function} callback
		   */
		  function listen (name, callback) {
		    if (!showdown.helper.isString(name)) {
		      throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
		    }

		    if (typeof callback !== 'function') {
		      throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
		    }

		    if (!listeners.hasOwnProperty(name)) {
		      listeners[name] = [];
		    }
		    listeners[name].push(callback);
		  }

		  function rTrimInputText (text) {
		    var rsp = text.match(/^\s*/)[0].length,
		        rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
		    return text.replace(rgx, '');
		  }

		  /**
		   * Dispatch an event
		   * @private
		   * @param {string} evtName Event name
		   * @param {string} text Text
		   * @param {{}} options Converter Options
		   * @param {{}} globals
		   * @returns {string}
		   */
		  this._dispatch = function dispatch (evtName, text, options, globals) {
		    if (listeners.hasOwnProperty(evtName)) {
		      for (var ei = 0; ei < listeners[evtName].length; ++ei) {
		        var nText = listeners[evtName][ei](evtName, text, this, options, globals);
		        if (nText && typeof nText !== 'undefined') {
		          text = nText;
		        }
		      }
		    }
		    return text;
		  };

		  /**
		   * Listen to an event
		   * @param {string} name
		   * @param {function} callback
		   * @returns {showdown.Converter}
		   */
		  this.listen = function (name, callback) {
		    listen(name, callback);
		    return this;
		  };

		  /**
		   * Converts a markdown string into HTML
		   * @param {string} text
		   * @returns {*}
		   */
		  this.makeHtml = function (text) {
		    //check if text is not falsy
		    if (!text) {
		      return text;
		    }

		    var globals = {
		      gHtmlBlocks:     [],
		      gHtmlMdBlocks:   [],
		      gHtmlSpans:      [],
		      gUrls:           {},
		      gTitles:         {},
		      gDimensions:     {},
		      gListLevel:      0,
		      hashLinkCounts:  {},
		      langExtensions:  langExtensions,
		      outputModifiers: outputModifiers,
		      converter:       this,
		      ghCodeBlocks:    [],
		      metadata: {
		        parsed: {},
		        raw: '',
		        format: ''
		      }
		    };

		    // This lets us use ¨ trema as an escape char to avoid md5 hashes
		    // The choice of character is arbitrary; anything that isn't
		    // magic in Markdown will work.
		    text = text.replace(/¨/g, '¨T');

		    // Replace $ with ¨D
		    // RegExp interprets $ as a special character
		    // when it's in a replacement string
		    text = text.replace(/\$/g, '¨D');

		    // Standardize line endings
		    text = text.replace(/\r\n/g, '\n'); // DOS to Unix
		    text = text.replace(/\r/g, '\n'); // Mac to Unix

		    // Stardardize line spaces
		    text = text.replace(/\u00A0/g, '&nbsp;');

		    if (options.smartIndentationFix) {
		      text = rTrimInputText(text);
		    }

		    // Make sure text begins and ends with a couple of newlines:
		    text = '\n\n' + text + '\n\n';

		    // detab
		    text = showdown.subParser('detab')(text, options, globals);

		    /**
		     * Strip any lines consisting only of spaces and tabs.
		     * This makes subsequent regexs easier to write, because we can
		     * match consecutive blank lines with /\n+/ instead of something
		     * contorted like /[ \t]*\n+/
		     */
		    text = text.replace(/^[ \t]+$/mg, '');

		    //run languageExtensions
		    showdown.helper.forEach(langExtensions, function (ext) {
		      text = showdown.subParser('runExtension')(ext, text, options, globals);
		    });

		    // run the sub parsers
		    text = showdown.subParser('metadata')(text, options, globals);
		    text = showdown.subParser('hashPreCodeTags')(text, options, globals);
		    text = showdown.subParser('githubCodeBlocks')(text, options, globals);
		    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
		    text = showdown.subParser('hashCodeTags')(text, options, globals);
		    text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
		    text = showdown.subParser('blockGamut')(text, options, globals);
		    text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
		    text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

		    // attacklab: Restore dollar signs
		    text = text.replace(/¨D/g, '$$');

		    // attacklab: Restore tremas
		    text = text.replace(/¨T/g, '¨');

		    // render a complete html document instead of a partial if the option is enabled
		    text = showdown.subParser('completeHTMLDocument')(text, options, globals);

		    // Run output modifiers
		    showdown.helper.forEach(outputModifiers, function (ext) {
		      text = showdown.subParser('runExtension')(ext, text, options, globals);
		    });

		    // update metadata
		    metadata = globals.metadata;
		    return text;
		  };

		  /**
		   * Converts an HTML string into a markdown string
		   * @param src
		   * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
		   * @returns {string}
		   */
		  this.makeMarkdown = this.makeMd = function (src, HTMLParser) {

		    // replace \r\n with \n
		    src = src.replace(/\r\n/g, '\n');
		    src = src.replace(/\r/g, '\n'); // old macs

		    // due to an edge case, we need to find this: > <
		    // to prevent removing of non silent white spaces
		    // ex: <em>this is</em> <strong>sparta</strong>
		    src = src.replace(/>[ \t]+</, '>¨NBSP;<');

		    if (!HTMLParser) {
		      if (window && window.document) {
		        HTMLParser = window.document;
		      } else {
		        throw new Error('HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM');
		      }
		    }

		    var doc = HTMLParser.createElement('div');
		    doc.innerHTML = src;

		    var globals = {
		      preList: substitutePreCodeTags(doc)
		    };

		    // remove all newlines and collapse spaces
		    clean(doc);

		    // some stuff, like accidental reference links must now be escaped
		    // TODO
		    // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);

		    var nodes = doc.childNodes,
		        mdDoc = '';

		    for (var i = 0; i < nodes.length; i++) {
		      mdDoc += showdown.subParser('makeMarkdown.node')(nodes[i], globals);
		    }

		    function clean (node) {
		      for (var n = 0; n < node.childNodes.length; ++n) {
		        var child = node.childNodes[n];
		        if (child.nodeType === 3) {
		          if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
		            node.removeChild(child);
		            --n;
		          } else {
		            child.nodeValue = child.nodeValue.split('\n').join(' ');
		            child.nodeValue = child.nodeValue.replace(/(\s)+/g, '$1');
		          }
		        } else if (child.nodeType === 1) {
		          clean(child);
		        }
		      }
		    }

		    // find all pre tags and replace contents with placeholder
		    // we need this so that we can remove all indentation from html
		    // to ease up parsing
		    function substitutePreCodeTags (doc) {

		      var pres = doc.querySelectorAll('pre'),
		          presPH = [];

		      for (var i = 0; i < pres.length; ++i) {

		        if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === 'code') {
		          var content = pres[i].firstChild.innerHTML.trim(),
		              language = pres[i].firstChild.getAttribute('data-language') || '';

		          // if data-language attribute is not defined, then we look for class language-*
		          if (language === '') {
		            var classes = pres[i].firstChild.className.split(' ');
		            for (var c = 0; c < classes.length; ++c) {
		              var matches = classes[c].match(/^language-(.+)$/);
		              if (matches !== null) {
		                language = matches[1];
		                break;
		              }
		            }
		          }

		          // unescape html entities in content
		          content = showdown.helper.unescapeHTMLEntities(content);

		          presPH.push(content);
		          pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
		        } else {
		          presPH.push(pres[i].innerHTML);
		          pres[i].innerHTML = '';
		          pres[i].setAttribute('prenum', i.toString());
		        }
		      }
		      return presPH;
		    }

		    return mdDoc;
		  };

		  /**
		   * Set an option of this Converter instance
		   * @param {string} key
		   * @param {*} value
		   */
		  this.setOption = function (key, value) {
		    options[key] = value;
		  };

		  /**
		   * Get the option of this Converter instance
		   * @param {string} key
		   * @returns {*}
		   */
		  this.getOption = function (key) {
		    return options[key];
		  };

		  /**
		   * Get the options of this Converter instance
		   * @returns {{}}
		   */
		  this.getOptions = function () {
		    return options;
		  };

		  /**
		   * Add extension to THIS converter
		   * @param {{}} extension
		   * @param {string} [name=null]
		   */
		  this.addExtension = function (extension, name) {
		    name = name || null;
		    _parseExtension(extension, name);
		  };

		  /**
		   * Use a global registered extension with THIS converter
		   * @param {string} extensionName Name of the previously registered extension
		   */
		  this.useExtension = function (extensionName) {
		    _parseExtension(extensionName);
		  };

		  /**
		   * Set the flavor THIS converter should use
		   * @param {string} name
		   */
		  this.setFlavor = function (name) {
		    if (!flavor.hasOwnProperty(name)) {
		      throw Error(name + ' flavor was not found');
		    }
		    var preset = flavor[name];
		    setConvFlavor = name;
		    for (var option in preset) {
		      if (preset.hasOwnProperty(option)) {
		        options[option] = preset[option];
		      }
		    }
		  };

		  /**
		   * Get the currently set flavor of this converter
		   * @returns {string}
		   */
		  this.getFlavor = function () {
		    return setConvFlavor;
		  };

		  /**
		   * Remove an extension from THIS converter.
		   * Note: This is a costly operation. It's better to initialize a new converter
		   * and specify the extensions you wish to use
		   * @param {Array} extension
		   */
		  this.removeExtension = function (extension) {
		    if (!showdown.helper.isArray(extension)) {
		      extension = [extension];
		    }
		    for (var a = 0; a < extension.length; ++a) {
		      var ext = extension[a];
		      for (var i = 0; i < langExtensions.length; ++i) {
		        if (langExtensions[i] === ext) {
		          langExtensions.splice(i, 1);
		        }
		      }
		      for (var ii = 0; ii < outputModifiers.length; ++ii) {
		        if (outputModifiers[ii] === ext) {
		          outputModifiers.splice(ii, 1);
		        }
		      }
		    }
		  };

		  /**
		   * Get all extension of THIS converter
		   * @returns {{language: Array, output: Array}}
		   */
		  this.getAllExtensions = function () {
		    return {
		      language: langExtensions,
		      output: outputModifiers
		    };
		  };

		  /**
		   * Get the metadata of the previously parsed document
		   * @param raw
		   * @returns {string|{}}
		   */
		  this.getMetadata = function (raw) {
		    if (raw) {
		      return metadata.raw;
		    } else {
		      return metadata.parsed;
		    }
		  };

		  /**
		   * Get the metadata format of the previously parsed document
		   * @returns {string}
		   */
		  this.getMetadataFormat = function () {
		    return metadata.format;
		  };

		  /**
		   * Private: set a single key, value metadata pair
		   * @param {string} key
		   * @param {string} value
		   */
		  this._setMetadataPair = function (key, value) {
		    metadata.parsed[key] = value;
		  };

		  /**
		   * Private: set metadata format
		   * @param {string} format
		   */
		  this._setMetadataFormat = function (format) {
		    metadata.format = format;
		  };

		  /**
		   * Private: set metadata raw text
		   * @param {string} raw
		   */
		  this._setMetadataRaw = function (raw) {
		    metadata.raw = raw;
		  };
		};

		/**
		 * Turn Markdown link shortcuts into XHTML <a> tags.
		 */
		showdown.subParser('anchors', function (text, options, globals) {

		  text = globals.converter._dispatch('anchors.before', text, options, globals);

		  var writeAnchorTag = function (wholeMatch, linkText, linkId, url, m5, m6, title) {
		    if (showdown.helper.isUndefined(title)) {
		      title = '';
		    }
		    linkId = linkId.toLowerCase();

		    // Special case for explicit empty url
		    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
		      url = '';
		    } else if (!url) {
		      if (!linkId) {
		        // lower-case and turn embedded newlines into spaces
		        linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
		      }
		      url = '#' + linkId;

		      if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
		        url = globals.gUrls[linkId];
		        if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
		          title = globals.gTitles[linkId];
		        }
		      } else {
		        return wholeMatch;
		      }
		    }

		    //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
		    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);

		    var result = '<a href="' + url + '"';

		    if (title !== '' && title !== null) {
		      title = title.replace(/"/g, '&quot;');
		      //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
		      title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
		      result += ' title="' + title + '"';
		    }

		    // optionLinksInNewWindow only applies
		    // to external links. Hash links (#) open in same page
		    if (options.openLinksInNewWindow && !/^#/.test(url)) {
		      // escaped _
		      result += ' rel="noopener noreferrer" target="¨E95Eblank"';
		    }

		    result += '>' + linkText + '</a>';

		    return result;
		  };

		  // First, handle reference-style links: [link text] [id]
		  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);

		  // Next, inline-style links: [link text](url "optional title")
		  // cases with crazy urls like ./image/cat1).png
		  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
		    writeAnchorTag);

		  // normal cases
		  text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
		    writeAnchorTag);

		  // handle reference-style shortcuts: [link text]
		  // These must come last in case you've also got [link test][1]
		  // or [link test](/foo)
		  text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

		  // Lastly handle GithubMentions if option is enabled
		  if (options.ghMentions) {
		    text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function (wm, st, escape, mentions, username) {
		      if (escape === '\\') {
		        return st + mentions;
		      }

		      //check if options.ghMentionsLink is a string
		      if (!showdown.helper.isString(options.ghMentionsLink)) {
		        throw new Error('ghMentionsLink option must be a string');
		      }
		      var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
		          target = '';
		      if (options.openLinksInNewWindow) {
		        target = ' rel="noopener noreferrer" target="¨E95Eblank"';
		      }
		      return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
		    });
		  }

		  text = globals.converter._dispatch('anchors.after', text, options, globals);
		  return text;
		});

		// url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

		var simpleURLRegex  = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
		    simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
		    delimUrlRegex   = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
		    simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
		    delimMailRegex  = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,

		    replaceLink = function (options) {
		      return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
		        link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
		        var lnkTxt = link,
		            append = '',
		            target = '',
		            lmc    = leadingMagicChars || '',
		            tmc    = trailingMagicChars || '';
		        if (/^www\./i.test(link)) {
		          link = link.replace(/^www\./i, 'http://www.');
		        }
		        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
		          append = trailingPunctuation;
		        }
		        if (options.openLinksInNewWindow) {
		          target = ' rel="noopener noreferrer" target="¨E95Eblank"';
		        }
		        return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
		      };
		    },

		    replaceMail = function (options, globals) {
		      return function (wholeMatch, b, mail) {
		        var href = 'mailto:';
		        b = b || '';
		        mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
		        if (options.encodeEmails) {
		          href = showdown.helper.encodeEmailAddress(href + mail);
		          mail = showdown.helper.encodeEmailAddress(mail);
		        } else {
		          href = href + mail;
		        }
		        return b + '<a href="' + href + '">' + mail + '</a>';
		      };
		    };

		showdown.subParser('autoLinks', function (text, options, globals) {

		  text = globals.converter._dispatch('autoLinks.before', text, options, globals);

		  text = text.replace(delimUrlRegex, replaceLink(options));
		  text = text.replace(delimMailRegex, replaceMail(options, globals));

		  text = globals.converter._dispatch('autoLinks.after', text, options, globals);

		  return text;
		});

		showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {

		  if (!options.simplifiedAutoLink) {
		    return text;
		  }

		  text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

		  if (options.excludeTrailingPunctuationFromURLs) {
		    text = text.replace(simpleURLRegex2, replaceLink(options));
		  } else {
		    text = text.replace(simpleURLRegex, replaceLink(options));
		  }
		  text = text.replace(simpleMailRegex, replaceMail(options, globals));

		  text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);

		  return text;
		});

		/**
		 * These are all the transformations that form block-level
		 * tags like paragraphs, headers, and list items.
		 */
		showdown.subParser('blockGamut', function (text, options, globals) {

		  text = globals.converter._dispatch('blockGamut.before', text, options, globals);

		  // we parse blockquotes first so that we can have headings and hrs
		  // inside blockquotes
		  text = showdown.subParser('blockQuotes')(text, options, globals);
		  text = showdown.subParser('headers')(text, options, globals);

		  // Do Horizontal Rules:
		  text = showdown.subParser('horizontalRule')(text, options, globals);

		  text = showdown.subParser('lists')(text, options, globals);
		  text = showdown.subParser('codeBlocks')(text, options, globals);
		  text = showdown.subParser('tables')(text, options, globals);

		  // We already ran _HashHTMLBlocks() before, in Markdown(), but that
		  // was to escape raw HTML in the original Markdown source. This time,
		  // we're escaping the markup we've just created, so that we don't wrap
		  // <p> tags around block-level tags.
		  text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
		  text = showdown.subParser('paragraphs')(text, options, globals);

		  text = globals.converter._dispatch('blockGamut.after', text, options, globals);

		  return text;
		});

		showdown.subParser('blockQuotes', function (text, options, globals) {

		  text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

		  // add a couple extra lines after the text and endtext mark
		  text = text + '\n\n';

		  var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

		  if (options.splitAdjacentBlockquotes) {
		    rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
		  }

		  text = text.replace(rgx, function (bq) {
		    // attacklab: hack around Konqueror 3.5.4 bug:
		    // "----------bug".replace(/^-/g,"") == "bug"
		    bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting

		    // attacklab: clean up hack
		    bq = bq.replace(/¨0/g, '');

		    bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
		    bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
		    bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

		    bq = bq.replace(/(^|\n)/g, '$1  ');
		    // These leading spaces screw with <pre> content, so we need to fix that:
		    bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
		      var pre = m1;
		      // attacklab: hack around Konqueror 3.5.4 bug:
		      pre = pre.replace(/^  /mg, '¨0');
		      pre = pre.replace(/¨0/g, '');
		      return pre;
		    });

		    return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
		  });

		  text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
		  return text;
		});

		/**
		 * Process Markdown `<pre><code>` blocks.
		 */
		showdown.subParser('codeBlocks', function (text, options, globals) {

		  text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

		  // sentinel workarounds for lack of \A and \Z, safari\khtml bug
		  text += '¨0';

		  var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
		  text = text.replace(pattern, function (wholeMatch, m1, m2) {
		    var codeblock = m1,
		        nextChar = m2,
		        end = '\n';

		    codeblock = showdown.subParser('outdent')(codeblock, options, globals);
		    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
		    codeblock = showdown.subParser('detab')(codeblock, options, globals);
		    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
		    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

		    if (options.omitExtraWLInCodeBlocks) {
		      end = '';
		    }

		    codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

		    return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
		  });

		  // strip sentinel
		  text = text.replace(/¨0/, '');

		  text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
		  return text;
		});

		/**
		 *
		 *   *  Backtick quotes are used for <code></code> spans.
		 *
		 *   *  You can use multiple backticks as the delimiters if you want to
		 *     include literal backticks in the code span. So, this input:
		 *
		 *         Just type ``foo `bar` baz`` at the prompt.
		 *
		 *       Will translate to:
		 *
		 *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
		 *
		 *    There's no arbitrary limit to the number of backticks you
		 *    can use as delimters. If you need three consecutive backticks
		 *    in your code, use four for delimiters, etc.
		 *
		 *  *  You can use spaces to get literal backticks at the edges:
		 *
		 *         ... type `` `bar` `` ...
		 *
		 *       Turns to:
		 *
		 *         ... type <code>`bar`</code> ...
		 */
		showdown.subParser('codeSpans', function (text, options, globals) {

		  text = globals.converter._dispatch('codeSpans.before', text, options, globals);

		  if (typeof (text) === 'undefined') {
		    text = '';
		  }
		  text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
		    function (wholeMatch, m1, m2, m3) {
		      var c = m3;
		      c = c.replace(/^([ \t]*)/g, '');	// leading whitespace
		      c = c.replace(/[ \t]*$/g, '');	// trailing whitespace
		      c = showdown.subParser('encodeCode')(c, options, globals);
		      c = m1 + '<code>' + c + '</code>';
		      c = showdown.subParser('hashHTMLSpans')(c, options, globals);
		      return c;
		    }
		  );

		  text = globals.converter._dispatch('codeSpans.after', text, options, globals);
		  return text;
		});

		/**
		 * Create a full HTML document from the processed markdown
		 */
		showdown.subParser('completeHTMLDocument', function (text, options, globals) {

		  if (!options.completeHTMLDocument) {
		    return text;
		  }

		  text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);

		  var doctype = 'html',
		      doctypeParsed = '<!DOCTYPE HTML>\n',
		      title = '',
		      charset = '<meta charset="utf-8">\n',
		      lang = '',
		      metadata = '';

		  if (typeof globals.metadata.parsed.doctype !== 'undefined') {
		    doctypeParsed = '<!DOCTYPE ' +  globals.metadata.parsed.doctype + '>\n';
		    doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
		    if (doctype === 'html' || doctype === 'html5') {
		      charset = '<meta charset="utf-8">';
		    }
		  }

		  for (var meta in globals.metadata.parsed) {
		    if (globals.metadata.parsed.hasOwnProperty(meta)) {
		      switch (meta.toLowerCase()) {
		        case 'doctype':
		          break;

		        case 'title':
		          title = '<title>' +  globals.metadata.parsed.title + '</title>\n';
		          break;

		        case 'charset':
		          if (doctype === 'html' || doctype === 'html5') {
		            charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
		          } else {
		            charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
		          }
		          break;

		        case 'language':
		        case 'lang':
		          lang = ' lang="' + globals.metadata.parsed[meta] + '"';
		          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
		          break;

		        default:
		          metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
		      }
		    }
		  }

		  text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';

		  text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
		  return text;
		});

		/**
		 * Convert all tabs to spaces
		 */
		showdown.subParser('detab', function (text, options, globals) {
		  text = globals.converter._dispatch('detab.before', text, options, globals);

		  // expand first n-1 tabs
		  text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

		  // replace the nth with two sentinels
		  text = text.replace(/\t/g, '¨A¨B');

		  // use the sentinel to anchor our regex so it doesn't explode
		  text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
		    var leadingText = m1,
		        numSpaces = 4 - leadingText.length % 4;  // g_tab_width

		    // there *must* be a better way to do this:
		    for (var i = 0; i < numSpaces; i++) {
		      leadingText += ' ';
		    }

		    return leadingText;
		  });

		  // clean up sentinels
		  text = text.replace(/¨A/g, '    ');  // g_tab_width
		  text = text.replace(/¨B/g, '');

		  text = globals.converter._dispatch('detab.after', text, options, globals);
		  return text;
		});

		showdown.subParser('ellipsis', function (text, options, globals) {

		  if (!options.ellipsis) {
		    return text;
		  }

		  text = globals.converter._dispatch('ellipsis.before', text, options, globals);

		  text = text.replace(/\.\.\./g, '…');

		  text = globals.converter._dispatch('ellipsis.after', text, options, globals);

		  return text;
		});

		/**
		 * Turn emoji codes into emojis
		 *
		 * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
		 */
		showdown.subParser('emoji', function (text, options, globals) {

		  if (!options.emoji) {
		    return text;
		  }

		  text = globals.converter._dispatch('emoji.before', text, options, globals);

		  var emojiRgx = /:([\S]+?):/g;

		  text = text.replace(emojiRgx, function (wm, emojiCode) {
		    if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
		      return showdown.helper.emojis[emojiCode];
		    }
		    return wm;
		  });

		  text = globals.converter._dispatch('emoji.after', text, options, globals);

		  return text;
		});

		/**
		 * Smart processing for ampersands and angle brackets that need to be encoded.
		 */
		showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
		  text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

		  // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
		  // http://bumppo.net/projects/amputator/
		  text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

		  // Encode naked <'s
		  text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

		  // Encode <
		  text = text.replace(/</g, '&lt;');

		  // Encode >
		  text = text.replace(/>/g, '&gt;');

		  text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
		  return text;
		});

		/**
		 * Returns the string, with after processing the following backslash escape sequences.
		 *
		 * attacklab: The polite way to do this is with the new escapeCharacters() function:
		 *
		 *    text = escapeCharacters(text,"\\",true);
		 *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
		 *
		 * ...but we're sidestepping its use of the (slow) RegExp constructor
		 * as an optimization for Firefox.  This function gets called a LOT.
		 */
		showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
		  text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

		  text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
		  text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown.helper.escapeCharactersCallback);

		  text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
		  return text;
		});

		/**
		 * Encode/escape certain characters inside Markdown code runs.
		 * The point is that in code, these characters are literals,
		 * and lose their special Markdown meanings.
		 */
		showdown.subParser('encodeCode', function (text, options, globals) {

		  text = globals.converter._dispatch('encodeCode.before', text, options, globals);

		  // Encode all ampersands; HTML entities are not
		  // entities within a Markdown code span.
		  text = text
		    .replace(/&/g, '&amp;')
		  // Do the angle bracket song and dance:
		    .replace(/</g, '&lt;')
		    .replace(/>/g, '&gt;')
		  // Now, escape characters that are magic in Markdown:
		    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

		  text = globals.converter._dispatch('encodeCode.after', text, options, globals);
		  return text;
		});

		/**
		 * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
		 * don't conflict with their use in Markdown for code, italics and strong.
		 */
		showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
		  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

		  // Build a regex to find HTML tags.
		  var tags     = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
		      comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;

		  text = text.replace(tags, function (wholeMatch) {
		    return wholeMatch
		      .replace(/(.)<\/?code>(?=.)/g, '$1`')
		      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
		  });

		  text = text.replace(comments, function (wholeMatch) {
		    return wholeMatch
		      .replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
		  });

		  text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
		  return text;
		});

		/**
		 * Handle github codeblocks prior to running HashHTML so that
		 * HTML contained within the codeblock gets escaped properly
		 * Example:
		 * ```ruby
		 *     def hello_world(x)
		 *       puts "Hello, #{x}"
		 *     end
		 * ```
		 */
		showdown.subParser('githubCodeBlocks', function (text, options, globals) {

		  // early exit if option is not enabled
		  if (!options.ghCodeBlocks) {
		    return text;
		  }

		  text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

		  text += '¨0';

		  text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (wholeMatch, delim, language, codeblock) {
		    var end = (options.omitExtraWLInCodeBlocks) ? '' : '\n';

		    // First parse the github code block
		    codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
		    codeblock = showdown.subParser('detab')(codeblock, options, globals);
		    codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
		    codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

		    codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

		    codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

		    // Since GHCodeblocks can be false positives, we need to
		    // store the primitive text and the parsed text in a global var,
		    // and then return a token
		    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
		  });

		  // attacklab: strip sentinel
		  text = text.replace(/¨0/, '');

		  return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
		});

		showdown.subParser('hashBlock', function (text, options, globals) {
		  text = globals.converter._dispatch('hashBlock.before', text, options, globals);
		  text = text.replace(/(^\n+|\n+$)/g, '');
		  text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
		  text = globals.converter._dispatch('hashBlock.after', text, options, globals);
		  return text;
		});

		/**
		 * Hash and escape <code> elements that should not be parsed as markdown
		 */
		showdown.subParser('hashCodeTags', function (text, options, globals) {
		  text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

		  var repFunc = function (wholeMatch, match, left, right) {
		    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
		    return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
		  };

		  // Hash naked <code>
		  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');

		  text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
		  return text;
		});

		showdown.subParser('hashElement', function (text, options, globals) {

		  return function (wholeMatch, m1) {
		    var blockText = m1;

		    // Undo double lines
		    blockText = blockText.replace(/\n\n/g, '\n');
		    blockText = blockText.replace(/^\n/, '');

		    // strip trailing blank lines
		    blockText = blockText.replace(/\n+$/g, '');

		    // Replace the element text with a marker ("¨KxK" where x is its key)
		    blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

		    return blockText;
		  };
		});

		showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
		  text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

		  var blockTags = [
		        'pre',
		        'div',
		        'h1',
		        'h2',
		        'h3',
		        'h4',
		        'h5',
		        'h6',
		        'blockquote',
		        'table',
		        'dl',
		        'ol',
		        'ul',
		        'script',
		        'noscript',
		        'form',
		        'fieldset',
		        'iframe',
		        'math',
		        'style',
		        'section',
		        'header',
		        'footer',
		        'nav',
		        'article',
		        'aside',
		        'address',
		        'audio',
		        'canvas',
		        'figure',
		        'hgroup',
		        'output',
		        'video',
		        'p'
		      ],
		      repFunc = function (wholeMatch, match, left, right) {
		        var txt = wholeMatch;
		        // check if this html element is marked as markdown
		        // if so, it's contents should be parsed as markdown
		        if (left.search(/\bmarkdown\b/) !== -1) {
		          txt = left + globals.converter.makeHtml(match) + right;
		        }
		        return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
		      };

		  if (options.backslashEscapesHTMLTags) {
		    // encode backslash escaped HTML tags
		    text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
		      return '&lt;' + inside + '&gt;';
		    });
		  }

		  // hash HTML Blocks
		  for (var i = 0; i < blockTags.length; ++i) {

		    var opTagPos,
		        rgx1     = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
		        patLeft  = '<' + blockTags[i] + '\\b[^>]*>',
		        patRight = '</' + blockTags[i] + '>';
		    // 1. Look for the first position of the first opening HTML tag in the text
		    while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {

		      // if the HTML tag is \ escaped, we need to escape it and break


		      //2. Split the text in that position
		      var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
		          //3. Match recursively
		          newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

		      // prevent an infinite loop
		      if (newSubText1 === subTexts[1]) {
		        break;
		      }
		      text = subTexts[0].concat(newSubText1);
		    }
		  }
		  // HR SPECIAL CASE
		  text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
		    showdown.subParser('hashElement')(text, options, globals));

		  // Special case for standalone HTML comments
		  text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
		    return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
		  }, '^ {0,3}<!--', '-->', 'gm');

		  // PHP and ASP-style processor instructions (<?...?> and <%...%>)
		  text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
		    showdown.subParser('hashElement')(text, options, globals));

		  text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
		  return text;
		});

		/**
		 * Hash span elements that should not be parsed as markdown
		 */
		showdown.subParser('hashHTMLSpans', function (text, options, globals) {
		  text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

		  function hashHTMLSpan (html) {
		    return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
		  }

		  // Hash Self Closing tags
		  text = text.replace(/<[^>]+?\/>/gi, function (wm) {
		    return hashHTMLSpan(wm);
		  });

		  // Hash tags without properties
		  text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
		    return hashHTMLSpan(wm);
		  });

		  // Hash tags with properties
		  text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
		    return hashHTMLSpan(wm);
		  });

		  // Hash self closing tags without />
		  text = text.replace(/<[^>]+?>/gi, function (wm) {
		    return hashHTMLSpan(wm);
		  });

		  /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

		  text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
		  return text;
		});

		/**
		 * Unhash HTML spans
		 */
		showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
		  text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

		  for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
		    var repText = globals.gHtmlSpans[i],
		        // limiter to prevent infinite loop (assume 10 as limit for recurse)
		        limit = 0;

		    while (/¨C(\d+)C/.test(repText)) {
		      var num = RegExp.$1;
		      repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
		      if (limit === 10) {
		        console.error('maximum nesting of 10 spans reached!!!');
		        break;
		      }
		      ++limit;
		    }
		    text = text.replace('¨C' + i + 'C', repText);
		  }

		  text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
		  return text;
		});

		/**
		 * Hash and escape <pre><code> elements that should not be parsed as markdown
		 */
		showdown.subParser('hashPreCodeTags', function (text, options, globals) {
		  text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

		  var repFunc = function (wholeMatch, match, left, right) {
		    // encode html entities
		    var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
		    return '\n\n¨G' + (globals.ghCodeBlocks.push({text: wholeMatch, codeblock: codeblock}) - 1) + 'G\n\n';
		  };

		  // Hash <pre><code>
		  text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

		  text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
		  return text;
		});

		showdown.subParser('headers', function (text, options, globals) {

		  text = globals.converter._dispatch('headers.before', text, options, globals);

		  var headerLevelStart = (isNaN(parseInt(options.headerLevelStart))) ? 1 : parseInt(options.headerLevelStart),

		      // Set text-style headers:
		      //	Header 1
		      //	========
		      //
		      //	Header 2
		      //	--------
		      //
		      setextRegexH1 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
		      setextRegexH2 = (options.smoothLivePreview) ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

		  text = text.replace(setextRegexH1, function (wholeMatch, m1) {

		    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
		        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
		        hLevel = headerLevelStart,
		        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
		    return showdown.subParser('hashBlock')(hashBlock, options, globals);
		  });

		  text = text.replace(setextRegexH2, function (matchFound, m1) {
		    var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
		        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m1) + '"',
		        hLevel = headerLevelStart + 1,
		        hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
		    return showdown.subParser('hashBlock')(hashBlock, options, globals);
		  });

		  // atx-style headers:
		  //  # Header 1
		  //  ## Header 2
		  //  ## Header 2 with closing hashes ##
		  //  ...
		  //  ###### Header 6
		  //
		  var atxStyle = (options.requireSpaceBeforeHeadingText) ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

		  text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
		    var hText = m2;
		    if (options.customizedHeaderId) {
		      hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
		    }

		    var span = showdown.subParser('spanGamut')(hText, options, globals),
		        hID = (options.noHeaderId) ? '' : ' id="' + headerId(m2) + '"',
		        hLevel = headerLevelStart - 1 + m1.length,
		        header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

		    return showdown.subParser('hashBlock')(header, options, globals);
		  });

		  function headerId (m) {
		    var title,
		        prefix;

		    // It is separate from other options to allow combining prefix and customized
		    if (options.customizedHeaderId) {
		      var match = m.match(/\{([^{]+?)}\s*$/);
		      if (match && match[1]) {
		        m = match[1];
		      }
		    }

		    title = m;

		    // Prefix id to prevent causing inadvertent pre-existing style matches.
		    if (showdown.helper.isString(options.prefixHeaderId)) {
		      prefix = options.prefixHeaderId;
		    } else if (options.prefixHeaderId === true) {
		      prefix = 'section-';
		    } else {
		      prefix = '';
		    }

		    if (!options.rawPrefixHeaderId) {
		      title = prefix + title;
		    }

		    if (options.ghCompatibleHeaderId) {
		      title = title
		        .replace(/ /g, '-')
		        // replace previously escaped chars (&, ¨ and $)
		        .replace(/&amp;/g, '')
		        .replace(/¨T/g, '')
		        .replace(/¨D/g, '')
		        // replace rest of the chars (&~$ are repeated as they might have been escaped)
		        // borrowed from github's redcarpet (some they should produce similar results)
		        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '')
		        .toLowerCase();
		    } else if (options.rawHeaderId) {
		      title = title
		        .replace(/ /g, '-')
		        // replace previously escaped chars (&, ¨ and $)
		        .replace(/&amp;/g, '&')
		        .replace(/¨T/g, '¨')
		        .replace(/¨D/g, '$')
		        // replace " and '
		        .replace(/["']/g, '-')
		        .toLowerCase();
		    } else {
		      title = title
		        .replace(/[^\w]/g, '')
		        .toLowerCase();
		    }

		    if (options.rawPrefixHeaderId) {
		      title = prefix + title;
		    }

		    if (globals.hashLinkCounts[title]) {
		      title = title + '-' + (globals.hashLinkCounts[title]++);
		    } else {
		      globals.hashLinkCounts[title] = 1;
		    }
		    return title;
		  }

		  text = globals.converter._dispatch('headers.after', text, options, globals);
		  return text;
		});

		/**
		 * Turn Markdown link shortcuts into XHTML <a> tags.
		 */
		showdown.subParser('horizontalRule', function (text, options, globals) {
		  text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

		  var key = showdown.subParser('hashBlock')('<hr />', options, globals);
		  text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
		  text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
		  text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

		  text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
		  return text;
		});

		/**
		 * Turn Markdown image shortcuts into <img> tags.
		 */
		showdown.subParser('images', function (text, options, globals) {

		  text = globals.converter._dispatch('images.before', text, options, globals);

		  var inlineRegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
		      crazyRegExp       = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
		      base64RegExp      = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
		      referenceRegExp   = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
		      refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

		  function writeImageTagBase64 (wholeMatch, altText, linkId, url, width, height, m5, title) {
		    url = url.replace(/\s/g, '');
		    return writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title);
		  }

		  function writeImageTag (wholeMatch, altText, linkId, url, width, height, m5, title) {

		    var gUrls   = globals.gUrls,
		        gTitles = globals.gTitles,
		        gDims   = globals.gDimensions;

		    linkId = linkId.toLowerCase();

		    if (!title) {
		      title = '';
		    }
		    // Special case for explicit empty url
		    if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
		      url = '';

		    } else if (url === '' || url === null) {
		      if (linkId === '' || linkId === null) {
		        // lower-case and turn embedded newlines into spaces
		        linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
		      }
		      url = '#' + linkId;

		      if (!showdown.helper.isUndefined(gUrls[linkId])) {
		        url = gUrls[linkId];
		        if (!showdown.helper.isUndefined(gTitles[linkId])) {
		          title = gTitles[linkId];
		        }
		        if (!showdown.helper.isUndefined(gDims[linkId])) {
		          width = gDims[linkId].width;
		          height = gDims[linkId].height;
		        }
		      } else {
		        return wholeMatch;
		      }
		    }

		    altText = altText
		      .replace(/"/g, '&quot;')
		    //altText = showdown.helper.escapeCharacters(altText, '*_', false);
		      .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
		    //url = showdown.helper.escapeCharacters(url, '*_', false);
		    url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
		    var result = '<img src="' + url + '" alt="' + altText + '"';

		    if (title && showdown.helper.isString(title)) {
		      title = title
		        .replace(/"/g, '&quot;')
		      //title = showdown.helper.escapeCharacters(title, '*_', false);
		        .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
		      result += ' title="' + title + '"';
		    }

		    if (width && height) {
		      width  = (width === '*') ? 'auto' : width;
		      height = (height === '*') ? 'auto' : height;

		      result += ' width="' + width + '"';
		      result += ' height="' + height + '"';
		    }

		    result += ' />';

		    return result;
		  }

		  // First, handle reference-style labeled images: ![alt text][id]
		  text = text.replace(referenceRegExp, writeImageTag);

		  // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")

		  // base64 encoded images
		  text = text.replace(base64RegExp, writeImageTagBase64);

		  // cases with crazy urls like ./image/cat1).png
		  text = text.replace(crazyRegExp, writeImageTag);

		  // normal cases
		  text = text.replace(inlineRegExp, writeImageTag);

		  // handle reference-style shortcuts: ![img text]
		  text = text.replace(refShortcutRegExp, writeImageTag);

		  text = globals.converter._dispatch('images.after', text, options, globals);
		  return text;
		});

		showdown.subParser('italicsAndBold', function (text, options, globals) {

		  text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

		  // it's faster to have 3 separate regexes for each case than have just one
		  // because of backtracing, in some cases, it could lead to an exponential effect
		  // called "catastrophic backtrace". Ominous!

		  function parseInside (txt, left, right) {
		    /*
		    if (options.simplifiedAutoLink) {
		      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
		    }
		    */
		    return left + txt + right;
		  }

		  // Parse underscores
		  if (options.literalMidWordUnderscores) {
		    text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
		      return parseInside (txt, '<strong><em>', '</em></strong>');
		    });
		    text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
		      return parseInside (txt, '<strong>', '</strong>');
		    });
		    text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
		      return parseInside (txt, '<em>', '</em>');
		    });
		  } else {
		    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
		      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
		    });
		    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
		      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
		    });
		    text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
		      // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
		      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
		    });
		  }

		  // Now parse asterisks
		  if (options.literalMidWordAsterisks) {
		    text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
		      return parseInside (txt, lead + '<strong><em>', '</em></strong>');
		    });
		    text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
		      return parseInside (txt, lead + '<strong>', '</strong>');
		    });
		    text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (wm, lead, txt) {
		      return parseInside (txt, lead + '<em>', '</em>');
		    });
		  } else {
		    text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
		      return (/\S$/.test(m)) ? parseInside (m, '<strong><em>', '</em></strong>') : wm;
		    });
		    text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
		      return (/\S$/.test(m)) ? parseInside (m, '<strong>', '</strong>') : wm;
		    });
		    text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
		      // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
		      return (/\S$/.test(m)) ? parseInside (m, '<em>', '</em>') : wm;
		    });
		  }


		  text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
		  return text;
		});

		/**
		 * Form HTML ordered (numbered) and unordered (bulleted) lists.
		 */
		showdown.subParser('lists', function (text, options, globals) {

		  /**
		   * Process the contents of a single ordered or unordered list, splitting it
		   * into individual list items.
		   * @param {string} listStr
		   * @param {boolean} trimTrailing
		   * @returns {string}
		   */
		  function processListItems (listStr, trimTrailing) {
		    // The $g_list_level global keeps track of when we're inside a list.
		    // Each time we enter a list, we increment it; when we leave a list,
		    // we decrement. If it's zero, we're not in a list anymore.
		    //
		    // We do this because when we're not inside a list, we want to treat
		    // something like this:
		    //
		    //    I recommend upgrading to version
		    //    8. Oops, now this line is treated
		    //    as a sub-list.
		    //
		    // As a single paragraph, despite the fact that the second line starts
		    // with a digit-period-space sequence.
		    //
		    // Whereas when we're inside a list (or sub-list), that line will be
		    // treated as the start of a sub-list. What a kludge, huh? This is
		    // an aspect of Markdown's syntax that's hard to parse perfectly
		    // without resorting to mind-reading. Perhaps the solution is to
		    // change the syntax rules such that sub-lists must start with a
		    // starting cardinal number; e.g. "1." or "a.".
		    globals.gListLevel++;

		    // trim trailing blank lines:
		    listStr = listStr.replace(/\n{2,}$/, '\n');

		    // attacklab: add sentinel to emulate \z
		    listStr += '¨0';

		    var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
		        isParagraphed = (/\n[ \t]*\n(?!¨0)/.test(listStr));

		    // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
		    // which is a syntax breaking change
		    // activating this option reverts to old behavior
		    if (options.disableForced4SpacesIndentedSublists) {
		      rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
		    }

		    listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
		      checked = (checked && checked.trim() !== '');

		      var item = showdown.subParser('outdent')(m4, options, globals),
		          bulletStyle = '';

		      // Support for github tasklists
		      if (taskbtn && options.tasklists) {
		        bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
		        item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
		          var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
		          if (checked) {
		            otp += ' checked';
		          }
		          otp += '>';
		          return otp;
		        });
		      }

		      // ISSUE #312
		      // This input: - - - a
		      // causes trouble to the parser, since it interprets it as:
		      // <ul><li><li><li>a</li></li></li></ul>
		      // instead of:
		      // <ul><li>- - a</li></ul>
		      // So, to prevent it, we will put a marker (¨A)in the beginning of the line
		      // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
		      item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
		        return '¨A' + wm2;
		      });

		      // m1 - Leading line or
		      // Has a double return (multi paragraph) or
		      // Has sublist
		      if (m1 || (item.search(/\n{2,}/) > -1)) {
		        item = showdown.subParser('githubCodeBlocks')(item, options, globals);
		        item = showdown.subParser('blockGamut')(item, options, globals);
		      } else {
		        // Recursion for sub-lists:
		        item = showdown.subParser('lists')(item, options, globals);
		        item = item.replace(/\n$/, ''); // chomp(item)
		        item = showdown.subParser('hashHTMLBlocks')(item, options, globals);

		        // Colapse double linebreaks
		        item = item.replace(/\n\n+/g, '\n\n');
		        if (isParagraphed) {
		          item = showdown.subParser('paragraphs')(item, options, globals);
		        } else {
		          item = showdown.subParser('spanGamut')(item, options, globals);
		        }
		      }

		      // now we need to remove the marker (¨A)
		      item = item.replace('¨A', '');
		      // we can finally wrap the line in list item tags
		      item =  '<li' + bulletStyle + '>' + item + '</li>\n';

		      return item;
		    });

		    // attacklab: strip sentinel
		    listStr = listStr.replace(/¨0/g, '');

		    globals.gListLevel--;

		    if (trimTrailing) {
		      listStr = listStr.replace(/\s+$/, '');
		    }

		    return listStr;
		  }

		  function styleStartNumber (list, listType) {
		    // check if ol and starts by a number different than 1
		    if (listType === 'ol') {
		      var res = list.match(/^ *(\d+)\./);
		      if (res && res[1] !== '1') {
		        return ' start="' + res[1] + '"';
		      }
		    }
		    return '';
		  }

		  /**
		   * Check and parse consecutive lists (better fix for issue #142)
		   * @param {string} list
		   * @param {string} listType
		   * @param {boolean} trimTrailing
		   * @returns {string}
		   */
		  function parseConsecutiveLists (list, listType, trimTrailing) {
		    // check if we caught 2 or more consecutive lists by mistake
		    // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
		    var olRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
		        ulRgx = (options.disableForced4SpacesIndentedSublists) ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
		        counterRxg = (listType === 'ul') ? olRgx : ulRgx,
		        result = '';

		    if (list.search(counterRxg) !== -1) {
		      (function parseCL (txt) {
		        var pos = txt.search(counterRxg),
		            style = styleStartNumber(list, listType);
		        if (pos !== -1) {
		          // slice
		          result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

		          // invert counterType and listType
		          listType = (listType === 'ul') ? 'ol' : 'ul';
		          counterRxg = (listType === 'ul') ? olRgx : ulRgx;

		          //recurse
		          parseCL(txt.slice(pos));
		        } else {
		          result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
		        }
		      })(list);
		    } else {
		      var style = styleStartNumber(list, listType);
		      result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
		    }

		    return result;
		  }

		  /** Start of list parsing **/
		  text = globals.converter._dispatch('lists.before', text, options, globals);
		  // add sentinel to hack around khtml/safari bug:
		  // http://bugs.webkit.org/show_bug.cgi?id=11231
		  text += '¨0';

		  if (globals.gListLevel) {
		    text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
		      function (wholeMatch, list, m2) {
		        var listType = (m2.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
		        return parseConsecutiveLists(list, listType, true);
		      }
		    );
		  } else {
		    text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
		      function (wholeMatch, m1, list, m3) {
		        var listType = (m3.search(/[*+-]/g) > -1) ? 'ul' : 'ol';
		        return parseConsecutiveLists(list, listType, false);
		      }
		    );
		  }

		  // strip sentinel
		  text = text.replace(/¨0/, '');
		  text = globals.converter._dispatch('lists.after', text, options, globals);
		  return text;
		});

		/**
		 * Parse metadata at the top of the document
		 */
		showdown.subParser('metadata', function (text, options, globals) {

		  if (!options.metadata) {
		    return text;
		  }

		  text = globals.converter._dispatch('metadata.before', text, options, globals);

		  function parseMetadataContents (content) {
		    // raw is raw so it's not changed in any way
		    globals.metadata.raw = content;

		    // escape chars forbidden in html attributes
		    // double quotes
		    content = content
		      // ampersand first
		      .replace(/&/g, '&amp;')
		      // double quotes
		      .replace(/"/g, '&quot;');

		    content = content.replace(/\n {4}/g, ' ');
		    content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
		      globals.metadata.parsed[key] = value;
		      return '';
		    });
		  }

		  text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
		    parseMetadataContents(content);
		    return '¨M';
		  });

		  text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
		    if (format) {
		      globals.metadata.format = format;
		    }
		    parseMetadataContents(content);
		    return '¨M';
		  });

		  text = text.replace(/¨M/g, '');

		  text = globals.converter._dispatch('metadata.after', text, options, globals);
		  return text;
		});

		/**
		 * Remove one level of line-leading tabs or spaces
		 */
		showdown.subParser('outdent', function (text, options, globals) {
		  text = globals.converter._dispatch('outdent.before', text, options, globals);

		  // attacklab: hack around Konqueror 3.5.4 bug:
		  // "----------bug".replace(/^-/g,"") == "bug"
		  text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

		  // attacklab: clean up hack
		  text = text.replace(/¨0/g, '');

		  text = globals.converter._dispatch('outdent.after', text, options, globals);
		  return text;
		});

		/**
		 *
		 */
		showdown.subParser('paragraphs', function (text, options, globals) {

		  text = globals.converter._dispatch('paragraphs.before', text, options, globals);
		  // Strip leading and trailing lines:
		  text = text.replace(/^\n+/g, '');
		  text = text.replace(/\n+$/g, '');

		  var grafs = text.split(/\n{2,}/g),
		      grafsOut = [],
		      end = grafs.length; // Wrap <p> tags

		  for (var i = 0; i < end; i++) {
		    var str = grafs[i];
		    // if this is an HTML marker, copy it
		    if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
		      grafsOut.push(str);

		    // test for presence of characters to prevent empty lines being parsed
		    // as paragraphs (resulting in undesired extra empty paragraphs)
		    } else if (str.search(/\S/) >= 0) {
		      str = showdown.subParser('spanGamut')(str, options, globals);
		      str = str.replace(/^([ \t]*)/g, '<p>');
		      str += '</p>';
		      grafsOut.push(str);
		    }
		  }

		  /** Unhashify HTML blocks */
		  end = grafsOut.length;
		  for (i = 0; i < end; i++) {
		    var blockText = '',
		        grafsOutIt = grafsOut[i],
		        codeFlag = false;
		    // if this is a marker for an html block...
		    // use RegExp.test instead of string.search because of QML bug
		    while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
		      var delim = RegExp.$1,
		          num   = RegExp.$2;

		      if (delim === 'K') {
		        blockText = globals.gHtmlBlocks[num];
		      } else {
		        // we need to check if ghBlock is a false positive
		        if (codeFlag) {
		          // use encoded version of all text
		          blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
		        } else {
		          blockText = globals.ghCodeBlocks[num].codeblock;
		        }
		      }
		      blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

		      grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
		      // Check if grafsOutIt is a pre->code
		      if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
		        codeFlag = true;
		      }
		    }
		    grafsOut[i] = grafsOutIt;
		  }
		  text = grafsOut.join('\n');
		  // Strip leading and trailing lines:
		  text = text.replace(/^\n+/g, '');
		  text = text.replace(/\n+$/g, '');
		  return globals.converter._dispatch('paragraphs.after', text, options, globals);
		});

		/**
		 * Run extension
		 */
		showdown.subParser('runExtension', function (ext, text, options, globals) {

		  if (ext.filter) {
		    text = ext.filter(text, globals.converter, options);

		  } else if (ext.regex) {
		    // TODO remove this when old extension loading mechanism is deprecated
		    var re = ext.regex;
		    if (!(re instanceof RegExp)) {
		      re = new RegExp(re, 'g');
		    }
		    text = text.replace(re, ext.replace);
		  }

		  return text;
		});

		/**
		 * These are all the transformations that occur *within* block-level
		 * tags like paragraphs, headers, and list items.
		 */
		showdown.subParser('spanGamut', function (text, options, globals) {

		  text = globals.converter._dispatch('spanGamut.before', text, options, globals);
		  text = showdown.subParser('codeSpans')(text, options, globals);
		  text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
		  text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

		  // Process anchor and image tags. Images must come first,
		  // because ![foo][f] looks like an anchor.
		  text = showdown.subParser('images')(text, options, globals);
		  text = showdown.subParser('anchors')(text, options, globals);

		  // Make links out of things like `<http://example.com/>`
		  // Must come after anchors, because you can use < and >
		  // delimiters in inline links like [this](<url>).
		  text = showdown.subParser('autoLinks')(text, options, globals);
		  text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
		  text = showdown.subParser('emoji')(text, options, globals);
		  text = showdown.subParser('underline')(text, options, globals);
		  text = showdown.subParser('italicsAndBold')(text, options, globals);
		  text = showdown.subParser('strikethrough')(text, options, globals);
		  text = showdown.subParser('ellipsis')(text, options, globals);

		  // we need to hash HTML tags inside spans
		  text = showdown.subParser('hashHTMLSpans')(text, options, globals);

		  // now we encode amps and angles
		  text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);

		  // Do hard breaks
		  if (options.simpleLineBreaks) {
		    // GFM style hard breaks
		    // only add line breaks if the text does not contain a block (special case for lists)
		    if (!/\n\n¨K/.test(text)) {
		      text = text.replace(/\n+/g, '<br />\n');
		    }
		  } else {
		    // Vanilla hard breaks
		    text = text.replace(/  +\n/g, '<br />\n');
		  }

		  text = globals.converter._dispatch('spanGamut.after', text, options, globals);
		  return text;
		});

		showdown.subParser('strikethrough', function (text, options, globals) {

		  function parseInside (txt) {
		    if (options.simplifiedAutoLink) {
		      txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
		    }
		    return '<del>' + txt + '</del>';
		  }

		  if (options.strikethrough) {
		    text = globals.converter._dispatch('strikethrough.before', text, options, globals);
		    text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) { return parseInside(txt); });
		    text = globals.converter._dispatch('strikethrough.after', text, options, globals);
		  }

		  return text;
		});

		/**
		 * Strips link definitions from text, stores the URLs and titles in
		 * hash references.
		 * Link defs are in the form: ^[id]: url "optional title"
		 */
		showdown.subParser('stripLinkDefinitions', function (text, options, globals) {

		  var regex       = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
		      base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;

		  // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
		  text += '¨0';

		  var replaceFunc = function (wholeMatch, linkId, url, width, height, blankLines, title) {

		    // if there aren't two instances of linkId it must not be a reference link so back out
		    linkId = linkId.toLowerCase();
		    if (text.toLowerCase().split(linkId).length - 1 < 2) {
		      return wholeMatch;
		    }
		    if (url.match(/^data:.+?\/.+?;base64,/)) {
		      // remove newlines
		      globals.gUrls[linkId] = url.replace(/\s/g, '');
		    } else {
		      globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals);  // Link IDs are case-insensitive
		    }

		    if (blankLines) {
		      // Oops, found blank lines, so it's not a title.
		      // Put back the parenthetical statement we stole.
		      return blankLines + title;

		    } else {
		      if (title) {
		        globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
		      }
		      if (options.parseImgDimensions && width && height) {
		        globals.gDimensions[linkId] = {
		          width:  width,
		          height: height
		        };
		      }
		    }
		    // Completely remove the definition from the text
		    return '';
		  };

		  // first we try to find base64 link references
		  text = text.replace(base64Regex, replaceFunc);

		  text = text.replace(regex, replaceFunc);

		  // attacklab: strip sentinel
		  text = text.replace(/¨0/, '');

		  return text;
		});

		showdown.subParser('tables', function (text, options, globals) {

		  if (!options.tables) {
		    return text;
		  }

		  var tableRgx       = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,
		      //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
		      singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

		  function parseStyles (sLine) {
		    if (/^:[ \t]*--*$/.test(sLine)) {
		      return ' style="text-align:left;"';
		    } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
		      return ' style="text-align:right;"';
		    } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
		      return ' style="text-align:center;"';
		    } else {
		      return '';
		    }
		  }

		  function parseHeaders (header, style) {
		    var id = '';
		    header = header.trim();
		    // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
		    if (options.tablesHeaderId || options.tableHeaderId) {
		      id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
		    }
		    header = showdown.subParser('spanGamut')(header, options, globals);

		    return '<th' + id + style + '>' + header + '</th>\n';
		  }

		  function parseCells (cell, style) {
		    var subText = showdown.subParser('spanGamut')(cell, options, globals);
		    return '<td' + style + '>' + subText + '</td>\n';
		  }

		  function buildTable (headers, cells) {
		    var tb = '<table>\n<thead>\n<tr>\n',
		        tblLgn = headers.length;

		    for (var i = 0; i < tblLgn; ++i) {
		      tb += headers[i];
		    }
		    tb += '</tr>\n</thead>\n<tbody>\n';

		    for (i = 0; i < cells.length; ++i) {
		      tb += '<tr>\n';
		      for (var ii = 0; ii < tblLgn; ++ii) {
		        tb += cells[i][ii];
		      }
		      tb += '</tr>\n';
		    }
		    tb += '</tbody>\n</table>\n';
		    return tb;
		  }

		  function parseTable (rawTable) {
		    var i, tableLines = rawTable.split('\n');

		    for (i = 0; i < tableLines.length; ++i) {
		      // strip wrong first and last column if wrapped tables are used
		      if (/^ {0,3}\|/.test(tableLines[i])) {
		        tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
		      }
		      if (/\|[ \t]*$/.test(tableLines[i])) {
		        tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
		      }
		      // parse code spans first, but we only support one line code spans
		      tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
		    }

		    var rawHeaders = tableLines[0].split('|').map(function (s) { return s.trim();}),
		        rawStyles = tableLines[1].split('|').map(function (s) { return s.trim();}),
		        rawCells = [],
		        headers = [],
		        styles = [],
		        cells = [];

		    tableLines.shift();
		    tableLines.shift();

		    for (i = 0; i < tableLines.length; ++i) {
		      if (tableLines[i].trim() === '') {
		        continue;
		      }
		      rawCells.push(
		        tableLines[i]
		          .split('|')
		          .map(function (s) {
		            return s.trim();
		          })
		      );
		    }

		    if (rawHeaders.length < rawStyles.length) {
		      return rawTable;
		    }

		    for (i = 0; i < rawStyles.length; ++i) {
		      styles.push(parseStyles(rawStyles[i]));
		    }

		    for (i = 0; i < rawHeaders.length; ++i) {
		      if (showdown.helper.isUndefined(styles[i])) {
		        styles[i] = '';
		      }
		      headers.push(parseHeaders(rawHeaders[i], styles[i]));
		    }

		    for (i = 0; i < rawCells.length; ++i) {
		      var row = [];
		      for (var ii = 0; ii < headers.length; ++ii) {
		        if (showdown.helper.isUndefined(rawCells[i][ii])) ;
		        row.push(parseCells(rawCells[i][ii], styles[ii]));
		      }
		      cells.push(row);
		    }

		    return buildTable(headers, cells);
		  }

		  text = globals.converter._dispatch('tables.before', text, options, globals);

		  // find escaped pipe characters
		  text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);

		  // parse multi column tables
		  text = text.replace(tableRgx, parseTable);

		  // parse one column tables
		  text = text.replace(singeColTblRgx, parseTable);

		  text = globals.converter._dispatch('tables.after', text, options, globals);

		  return text;
		});

		showdown.subParser('underline', function (text, options, globals) {

		  if (!options.underline) {
		    return text;
		  }

		  text = globals.converter._dispatch('underline.before', text, options, globals);

		  if (options.literalMidWordUnderscores) {
		    text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
		      return '<u>' + txt + '</u>';
		    });
		    text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
		      return '<u>' + txt + '</u>';
		    });
		  } else {
		    text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
		      return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
		    });
		    text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
		      return (/\S$/.test(m)) ? '<u>' + m + '</u>' : wm;
		    });
		  }

		  // escape remaining underscores to prevent them being parsed by italic and bold
		  text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);

		  text = globals.converter._dispatch('underline.after', text, options, globals);

		  return text;
		});

		/**
		 * Swap back in all the special characters we've hidden.
		 */
		showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
		  text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

		  text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
		    var charCodeToReplace = parseInt(m1);
		    return String.fromCharCode(charCodeToReplace);
		  });

		  text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
		  return text;
		});

		showdown.subParser('makeMarkdown.blockquote', function (node, globals) {

		  var txt = '';
		  if (node.hasChildNodes()) {
		    var children = node.childNodes,
		        childrenLength = children.length;

		    for (var i = 0; i < childrenLength; ++i) {
		      var innerTxt = showdown.subParser('makeMarkdown.node')(children[i], globals);

		      if (innerTxt === '') {
		        continue;
		      }
		      txt += innerTxt;
		    }
		  }
		  // cleanup
		  txt = txt.trim();
		  txt = '> ' + txt.split('\n').join('\n> ');
		  return txt;
		});

		showdown.subParser('makeMarkdown.codeBlock', function (node, globals) {

		  var lang = node.getAttribute('language'),
		      num  = node.getAttribute('precodenum');
		  return '```' + lang + '\n' + globals.preList[num] + '\n```';
		});

		showdown.subParser('makeMarkdown.codeSpan', function (node) {

		  return '`' + node.innerHTML + '`';
		});

		showdown.subParser('makeMarkdown.emphasis', function (node, globals) {

		  var txt = '';
		  if (node.hasChildNodes()) {
		    txt += '*';
		    var children = node.childNodes,
		        childrenLength = children.length;
		    for (var i = 0; i < childrenLength; ++i) {
		      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
		    }
		    txt += '*';
		  }
		  return txt;
		});

		showdown.subParser('makeMarkdown.header', function (node, globals, headerLevel) {

		  var headerMark = new Array(headerLevel + 1).join('#'),
		      txt = '';

		  if (node.hasChildNodes()) {
		    txt = headerMark + ' ';
		    var children = node.childNodes,
		        childrenLength = children.length;

		    for (var i = 0; i < childrenLength; ++i) {
		      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
		    }
		  }
		  return txt;
		});

		showdown.subParser('makeMarkdown.hr', function () {

		  return '---';
		});

		showdown.subParser('makeMarkdown.image', function (node) {

		  var txt = '';
		  if (node.hasAttribute('src')) {
		    txt += '![' + node.getAttribute('alt') + '](';
		    txt += '<' + node.getAttribute('src') + '>';
		    if (node.hasAttribute('width') && node.hasAttribute('height')) {
		      txt += ' =' + node.getAttribute('width') + 'x' + node.getAttribute('height');
		    }

		    if (node.hasAttribute('title')) {
		      txt += ' "' + node.getAttribute('title') + '"';
		    }
		    txt += ')';
		  }
		  return txt;
		});

		showdown.subParser('makeMarkdown.links', function (node, globals) {

		  var txt = '';
		  if (node.hasChildNodes() && node.hasAttribute('href')) {
		    var children = node.childNodes,
		        childrenLength = children.length;
		    txt = '[';
		    for (var i = 0; i < childrenLength; ++i) {
		      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
		    }
		    txt += '](';
		    txt += '<' + node.getAttribute('href') + '>';
		    if (node.hasAttribute('title')) {
		      txt += ' "' + node.getAttribute('title') + '"';
		    }
		    txt += ')';
		  }
		  return txt;
		});

		showdown.subParser('makeMarkdown.list', function (node, globals, type) {

		  var txt = '';
		  if (!node.hasChildNodes()) {
		    return '';
		  }
		  var listItems       = node.childNodes,
		      listItemsLenght = listItems.length,
		      listNum = node.getAttribute('start') || 1;

		  for (var i = 0; i < listItemsLenght; ++i) {
		    if (typeof listItems[i].tagName === 'undefined' || listItems[i].tagName.toLowerCase() !== 'li') {
		      continue;
		    }

		    // define the bullet to use in list
		    var bullet = '';
		    if (type === 'ol') {
		      bullet = listNum.toString() + '. ';
		    } else {
		      bullet = '- ';
		    }

		    // parse list item
		    txt += bullet + showdown.subParser('makeMarkdown.listItem')(listItems[i], globals);
		    ++listNum;
		  }

		  // add comment at the end to prevent consecutive lists to be parsed as one
		  txt += '\n<!-- -->\n';
		  return txt.trim();
		});

		showdown.subParser('makeMarkdown.listItem', function (node, globals) {

		  var listItemTxt = '';

		  var children = node.childNodes,
		      childrenLenght = children.length;

		  for (var i = 0; i < childrenLenght; ++i) {
		    listItemTxt += showdown.subParser('makeMarkdown.node')(children[i], globals);
		  }
		  // if it's only one liner, we need to add a newline at the end
		  if (!/\n$/.test(listItemTxt)) {
		    listItemTxt += '\n';
		  } else {
		    // it's multiparagraph, so we need to indent
		    listItemTxt = listItemTxt
		      .split('\n')
		      .join('\n    ')
		      .replace(/^ {4}$/gm, '')
		      .replace(/\n\n+/g, '\n\n');
		  }

		  return listItemTxt;
		});



		showdown.subParser('makeMarkdown.node', function (node, globals, spansOnly) {

		  spansOnly = spansOnly || false;

		  var txt = '';

		  // edge case of text without wrapper paragraph
		  if (node.nodeType === 3) {
		    return showdown.subParser('makeMarkdown.txt')(node, globals);
		  }

		  // HTML comment
		  if (node.nodeType === 8) {
		    return '<!--' + node.data + '-->\n\n';
		  }

		  // process only node elements
		  if (node.nodeType !== 1) {
		    return '';
		  }

		  var tagName = node.tagName.toLowerCase();

		  switch (tagName) {

		    //
		    // BLOCKS
		    //
		    case 'h1':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n'; }
		      break;
		    case 'h2':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n'; }
		      break;
		    case 'h3':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n'; }
		      break;
		    case 'h4':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n'; }
		      break;
		    case 'h5':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n'; }
		      break;
		    case 'h6':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n'; }
		      break;

		    case 'p':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n'; }
		      break;

		    case 'blockquote':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n'; }
		      break;

		    case 'hr':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n'; }
		      break;

		    case 'ol':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n'; }
		      break;

		    case 'ul':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n'; }
		      break;

		    case 'precode':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n'; }
		      break;

		    case 'pre':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n'; }
		      break;

		    case 'table':
		      if (!spansOnly) { txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n'; }
		      break;

		    //
		    // SPANS
		    //
		    case 'code':
		      txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
		      break;

		    case 'em':
		    case 'i':
		      txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
		      break;

		    case 'strong':
		    case 'b':
		      txt = showdown.subParser('makeMarkdown.strong')(node, globals);
		      break;

		    case 'del':
		      txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
		      break;

		    case 'a':
		      txt = showdown.subParser('makeMarkdown.links')(node, globals);
		      break;

		    case 'img':
		      txt = showdown.subParser('makeMarkdown.image')(node, globals);
		      break;

		    default:
		      txt = node.outerHTML + '\n\n';
		  }

		  // common normalization
		  // TODO eventually

		  return txt;
		});

		showdown.subParser('makeMarkdown.paragraph', function (node, globals) {

		  var txt = '';
		  if (node.hasChildNodes()) {
		    var children = node.childNodes,
		        childrenLength = children.length;
		    for (var i = 0; i < childrenLength; ++i) {
		      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
		    }
		  }

		  // some text normalization
		  txt = txt.trim();

		  return txt;
		});

		showdown.subParser('makeMarkdown.pre', function (node, globals) {

		  var num  = node.getAttribute('prenum');
		  return '<pre>' + globals.preList[num] + '</pre>';
		});

		showdown.subParser('makeMarkdown.strikethrough', function (node, globals) {

		  var txt = '';
		  if (node.hasChildNodes()) {
		    txt += '~~';
		    var children = node.childNodes,
		        childrenLength = children.length;
		    for (var i = 0; i < childrenLength; ++i) {
		      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
		    }
		    txt += '~~';
		  }
		  return txt;
		});

		showdown.subParser('makeMarkdown.strong', function (node, globals) {

		  var txt = '';
		  if (node.hasChildNodes()) {
		    txt += '**';
		    var children = node.childNodes,
		        childrenLength = children.length;
		    for (var i = 0; i < childrenLength; ++i) {
		      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
		    }
		    txt += '**';
		  }
		  return txt;
		});

		showdown.subParser('makeMarkdown.table', function (node, globals) {

		  var txt = '',
		      tableArray = [[], []],
		      headings   = node.querySelectorAll('thead>tr>th'),
		      rows       = node.querySelectorAll('tbody>tr'),
		      i, ii;
		  for (i = 0; i < headings.length; ++i) {
		    var headContent = showdown.subParser('makeMarkdown.tableCell')(headings[i], globals),
		        allign = '---';

		    if (headings[i].hasAttribute('style')) {
		      var style = headings[i].getAttribute('style').toLowerCase().replace(/\s/g, '');
		      switch (style) {
		        case 'text-align:left;':
		          allign = ':---';
		          break;
		        case 'text-align:right;':
		          allign = '---:';
		          break;
		        case 'text-align:center;':
		          allign = ':---:';
		          break;
		      }
		    }
		    tableArray[0][i] = headContent.trim();
		    tableArray[1][i] = allign;
		  }

		  for (i = 0; i < rows.length; ++i) {
		    var r = tableArray.push([]) - 1,
		        cols = rows[i].getElementsByTagName('td');

		    for (ii = 0; ii < headings.length; ++ii) {
		      var cellContent = ' ';
		      if (typeof cols[ii] !== 'undefined') {
		        cellContent = showdown.subParser('makeMarkdown.tableCell')(cols[ii], globals);
		      }
		      tableArray[r].push(cellContent);
		    }
		  }

		  var cellSpacesCount = 3;
		  for (i = 0; i < tableArray.length; ++i) {
		    for (ii = 0; ii < tableArray[i].length; ++ii) {
		      var strLen = tableArray[i][ii].length;
		      if (strLen > cellSpacesCount) {
		        cellSpacesCount = strLen;
		      }
		    }
		  }

		  for (i = 0; i < tableArray.length; ++i) {
		    for (ii = 0; ii < tableArray[i].length; ++ii) {
		      if (i === 1) {
		        if (tableArray[i][ii].slice(-1) === ':') {
		          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, '-') + ':';
		        } else {
		          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, '-');
		        }
		      } else {
		        tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
		      }
		    }
		    txt += '| ' + tableArray[i].join(' | ') + ' |\n';
		  }

		  return txt.trim();
		});

		showdown.subParser('makeMarkdown.tableCell', function (node, globals) {

		  var txt = '';
		  if (!node.hasChildNodes()) {
		    return '';
		  }
		  var children = node.childNodes,
		      childrenLength = children.length;

		  for (var i = 0; i < childrenLength; ++i) {
		    txt += showdown.subParser('makeMarkdown.node')(children[i], globals, true);
		  }
		  return txt.trim();
		});

		showdown.subParser('makeMarkdown.txt', function (node) {

		  var txt = node.nodeValue;

		  // multiple spaces are collapsed
		  txt = txt.replace(/ +/g, ' ');

		  // replace the custom ¨NBSP; with a space
		  txt = txt.replace(/¨NBSP;/g, ' ');

		  // ", <, > and & should replace escaped html entities
		  txt = showdown.helper.unescapeHTMLEntities(txt);

		  // escape markdown magic characters
		  // emphasis, strong and strikethrough - can appear everywhere
		  // we also escape pipe (|) because of tables
		  // and escape ` because of code blocks and spans
		  txt = txt.replace(/([*_~|`])/g, '\\$1');

		  // escape > because of blockquotes
		  txt = txt.replace(/^(\s*)>/g, '\\$1>');

		  // hash character, only troublesome at the beginning of a line because of headers
		  txt = txt.replace(/^#/gm, '\\#');

		  // horizontal rules
		  txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, '$1\\$2$3');

		  // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
		  txt = txt.replace(/^( {0,3}\d+)\./gm, '$1\\.');

		  // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
		  txt = txt.replace(/^( {0,3})([+-])/gm, '$1\\$2');

		  // images and links, ] followed by ( is problematic, so we escape it
		  txt = txt.replace(/]([\s]*)\(/g, '\\]$1\\(');

		  // reference URIs must also be escaped
		  txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, '\\[$1]:');

		  return txt;
		});

		var root = this;

		// AMD Loader
		if (module.exports) {
		  module.exports = showdown;

		// Regular Browser loader
		} else {
		  root.showdown = showdown;
		}
		}).call(showdown$1);

		
	} (showdown$2));
	return showdown$2.exports;
}

var showdownExports = requireShowdown();
var showdown = /*@__PURE__*/getDefaultExportFromCjs(showdownExports);

const getSelectedTagIds = (translationCards, cardId) => {
    const card = translationCards.cards.find((card) => isItem(card) && card.id === cardId);
    if (!card) {
        return [];
    }
    return card.data.tags.map((tag) => tag.id);
};

const isDirectNecessary = (analyse) => {
    if (analyse.translation.sourceLanguage === analyse.translation.targetLanguage) {
        return false;
    }
    if (analyse.cards.length === 0) {
        return true;
    }
    const card = analyse.cards[0].data;
    if (analyse.source.toLowerCase() ===
        trimArticle(analyse.translation.sourceLanguage, card.source).source.toLowerCase() &&
        analyse.translation.target === card.translation) {
        return false;
    }
    return true;
};

const sortLanguages = (existingLanguages) => (entryA, entryB) => {
    const isEntryAExists = isGoogleLanguage(entryA[0]) && existingLanguages.includes(entryA[0]);
    const isEntryBExists = isGoogleLanguage(entryB[0]) && existingLanguages.includes(entryB[0]);
    if (isEntryAExists && !isEntryBExists) {
        return -1;
    }
    if (!isEntryAExists && isEntryBExists) {
        return 1;
    }
    return entryA[1].localeCompare(entryB[1]);
};

const translationCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;visibility:visible !important;max-width:min(90vw, 600px);display:inline-block}:host li{margin:0}.vocably-mb-4{margin-bottom:4px}.vocably-mb-6{margin-bottom:6px}.vocably-mt-12{margin-top:12px}.vocably-pt-12{padding-top:12px}.vocably-mb-12{margin-bottom:12px}.vocably-text-right{text-align:right}.vocably-emphasized{color:#000000;font-weight:bold}.vocably-small{font-size:14.4px}.vocably-muted{color:#bababa}.vocably-translation{display:flex;align-items:stretch;gap:8px}@media screen and (max-width: 600px){.vocably-translation{flex-direction:column}}.vocably-translation .vocably-translation-section{padding-left:14px;flex:1}.vocably-translation .vocably-invisible-space{display:inline-block;width:0;font-size:0}.vocably-error{color:#ff5e5e}.vocably-loading-container{position:relative}.vocably-reload{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:white;opacity:0.5}@keyframes vocably-floating{0%{transform:translate(0, -2px)}50%{transform:translate(1px, 2px)}100%{transform:translate(0, -2px)}}.vocably-cards-save-hint{position:absolute;width:165px;top:6px;right:40px;animation:vocably-floating 3s ease-in-out infinite;opacity:1;transition:opacity 200ms ease-in-out}.vocably-cards-save-hint.vocably-cards-save-hint-hidden{opacity:0}.explanation-frame{margin-left:-14px}.explanation-frame-visible{max-height:500px;opacity:1}.explanation-frame-content{border:0.6px solid #bababa;border-radius:8px;padding:14px}.explanation p,.explanation ol,.explanation ul{margin:0 0 12px 0}.explanation p:last-child,.explanation ol:last-child,.explanation ul:last-child{margin-bottom:0}.explanation ol,.explanation ul{padding-inline-start:1.2em}.explanation strong{font-weight:bold}.vocably-cards{border:0.6px solid #bababa;border-radius:8px;background-color:#fbfbfb;margin-left:-14px;margin-bottom:1px}.vocably-cards .vocably-card{border-top:0.6px solid #bababa}.vocably-cards .vocably-card .vocably-card-container{position:relative;padding:10px 14px 10px 14px}.vocably-cards .vocably-card .vocably-safe-action-area{padding-right:34px}.vocably-cards .vocably-card:first-child{border-top:none}.vocably-cards .vocably-card .vocably-card-source{padding-right:50px}.vocably-cards .vocably-card .vocably-card-hint-displayed{padding-right:170px}.vocably-cards .vocably-card .vocably-card-action{position:absolute;right:14px;top:10px;min-width:24px;height:24px;line-height:24px;text-align:center}.vocably-cards .vocably-card .vocably-card-action-button{padding:0;margin:0;background:none;border:none;cursor:pointer;outline:none;min-width:auto;box-shadow:none;color:#0050ff}.vocably-cards .vocably-card .vocably-card-action-button:hover{filter:brightness(80%)}.vocably-cards .vocably-card .vocably-card-action-button:active{filter:brightness(60%)}.vocably-cards .vocably-card .vocably-card-action-button>*{vertical-align:middle}.vocably-cards .vocably-card .vocably-card-action-button.vocably-card-add-button{--button-color:#0050ff;--color:var(--button-color);border:1.5px solid var(--button-color);color:var(--button-color);border-radius:16px;padding-right:8px !important;padding-left:2px !important;height:32px;display:inline-flex;align-items:center;justify-content:center}.vocably-cards .vocably-card .vocably-card-action-button.vocably-card-add-button vocably-icon-spin{--color:var(--button-color)}.vocably-cards .vocably-card .vocably-card-action-button.vocably-card-add-button vocably-icon-plus{--color:var(--button-color)}vocably-play-sound{opacity:0.8;margin-right:4px}vocably-play-sound:hover{opacity:1}.vocably-rate-container{transition:all 1s ease-in-out;max-height:500px;opacity:1;box-sizing:border-box}.vocably-rate-container.vocably-rate-container-hidden{max-height:0;opacity:0}.vocably-rate-padding{padding:14px}.vocably-direct-translation{display:flex;flex-direction:row}.vocably-added-congratulation{max-height:0;overflow:hidden;transition:max-height 0.5s ease-in-out}.vocably-added-congratulation.vocably-added-congratulation-visible{max-height:500px}.vocably-added-congratulation-content{padding-top:4px;padding-bottom:4px;border-bottom:0.6px solid #bababa}.vocably-added-congratulation-content-1{padding:10px 14px 10px 14px}.vocably-list{list-style:outside;padding:0;margin:0 0 0 16px}.vocably-italic{font-style:italic}.vocably-language-selector{display:flex;align-items:center;justify-content:space-between;gap:4px;margin-left:-14px;width:calc(100% + 14px)}.vocably-language-selector .vocably-language-wrapper{width:46%}.vocably-language-selector .vocably-language-wrapper vocably-language-selector{width:100%}.vocably-button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important;padding-left:16px;padding-right:16px;width:auto}.vocably-button:hover:not([disabled]),.vocably-button:focus:not([disabled]){background:#0047e3}.vocably-button:active:not([disabled]){background:#0047e3}.vocably-button[disabled]{background:#bababa}.vocably-link-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;text-decoration:underline !important;text-decoration-thickness:0.5px !important;text-underline-offset:2px !important;color:#0050ff !important;background:none !important;border:none !important;border-radius:0 !important;cursor:pointer}.vocably-link-button:hover,.vocably-link-button:focus,.vocably-link-button:active{color:#0047e3 !important}.vocably-text-link,.vocably-text-link:active,.vocably-text-link:visited{color:#6a6a6a !important;text-decoration:underline !important}.vocably-text-link:hover{color:#000000 !important}.vocably-tag{border:0.6px solid #bababa;border-radius:4px;background-color:#fbfbfb;padding:6px;display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.vocably-tag-remove-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;vertical-align:middle;height:24px;opacity:0.3;transition:opacity 300ms;transform:scale(80%)}.vocably-tag-remove-button .vocably-tag-remove-button-icon{--color:#bababa;--size:24px}.vocably-tag-remove-button:hover{opacity:1}.max-limit-1{overflow:hidden;color:#000000;max-height:0;transition:max-height 0.5s ease-in-out}.max-limit-1.max-limit-visible{max-height:200px}.max-limit-1 .max-limit-2{padding:10px 14px 0 14px}.max-limit-1 .max-limit-3{padding-bottom:8px;border-radius:12px;display:flex;flex-direction:column;gap:8px;flex-wrap:wrap;justify-content:flex-start}.max-limit-1 .upgrade-button{flex:1;font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important;min-width:200px;padding-left:16px;padding-right:16px}.max-limit-1 .upgrade-button:hover:not([disabled]),.max-limit-1 .upgrade-button:focus:not([disabled]){background:#0047e3}.max-limit-1 .upgrade-button:active:not([disabled]){background:#0047e3}.max-limit-1 .upgrade-button[disabled]{background:#bababa}";

const mdConverter = new showdown.Converter();
const VocablyTranslation = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.ratingInteraction = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "ratingInteraction");
        this.changeSourceLanguage = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "changeSourceLanguage");
        this.changeTargetLanguage = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "changeTargetLanguage");
        this.removeCard = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "removeCard");
        this.addCard = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "addCard");
        this.watchMePaying = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "watchMePaying");
        this.result = null;
        this.loading = false;
        this.existingSourceLanguages = [];
        this.existingTargetLanguages = [];
        this.askForRating = false;
        this.sourceLanguage = '';
        this.targetLanguage = '';
        this.isUpdating = null;
        this.showSaveHint = true;
        this.canCongratulate = false;
        this.disabled = false;
        this.showLanguages = true;
        this.hideChatGpt = false;
        this.maxCards = 'unlimited';
        this.paymentLink = '';
        this.premiumCtaSuffix = '';
        this.explanation = { state: 'none' };
        this.explanationAnimationDelay = 0;
        this.saveCardClicked = false;
        this.addedItemIndex = -1;
        this.congratulateItemIndex = -1;
        this.addAttemptIndex = -1;
        this.removing = null;
        this.overlay = null;
        this.tagsMenu = null;
        this.makeUpdateCard = (card) => async (data) => {
            if (!this.result) {
                return {
                    success: false,
                    errorCode: 'FUCKING_ERROR',
                    reason: 'Result is not set',
                };
            }
            if (this.result.success === false) {
                return this.result;
            }
            const result = await this.updateCard({
                card,
                data,
                translationCards: this.result.value,
            });
            if (result.success === true) {
                this.result = result;
            }
            return result;
        };
        this.detachTagClick = (card, tag) => async () => {
            if (!this.result || !this.result.success) {
                return false;
            }
            if (!this.deleteTag) {
                return false;
            }
            if (this.disabled) {
                return false;
            }
            this.disabled = true;
            this.removing = {
                card,
                tag,
            };
            const result = await this.detachTag({
                translationCards: this.result.value,
                cardId: card.id,
                tag: tag,
            });
            this.disabled = false;
            this.removing = null;
            if (result.success) {
                this.result = result;
            }
        };
    }
    async play() {
        const playSoundElement = this.el.shadowRoot &&
            this.el.shadowRoot.querySelector('vocably-play-sound');
        if (!playSoundElement) {
            return;
        }
        playSoundElement.play();
    }
    showTagMenu(caller, cardId) {
        if (this.result === null || !this.result.success) {
            return;
        }
        if (this.overlay) {
            this.overlay.remove();
        }
        if (this.tagsMenu) {
            this.tagsMenu.remove();
        }
        const tagsMenu = document.createElement('vocably-tags-menu');
        tagsMenu.existingItems = this.result.value.tags;
        tagsMenu.selectedItems = getSelectedTagIds(this.result.value, cardId);
        const callerPosition = caller.getBoundingClientRect();
        tagsMenu.style.position = 'absolute';
        tagsMenu.style.left = `${window.scrollX + callerPosition.right}px`;
        tagsMenu.style.transform = `translate(-100%, 0)`;
        tagsMenu.saveTag = async (tag) => {
            if (!this.result || !this.result.success) {
                return {
                    success: false,
                    errorCode: 'EXTENSION_UNABLE_TO_COMPLETE_TAG_OPERATION',
                    reason: 'Unable to save tag because the result is empty or erroneous.',
                };
            }
            this.disabled = true;
            const result = await (isItem(tag)
                ? this.updateTag({
                    tag,
                    translationCards: this.result.value,
                })
                : this.attachTag({
                    cardId,
                    tag,
                    translationCards: this.result.value,
                }));
            this.disabled = false;
            if (result.success) {
                this.result = result;
                tagsMenu.existingItems = result.value.tags;
                tagsMenu.selectedItems = getSelectedTagIds(result.value, cardId);
            }
            return result;
        };
        tagsMenu.deleteTag = async (tag) => {
            if (!this.result || !this.result.success) {
                return {
                    success: false,
                    errorCode: 'EXTENSION_UNABLE_TO_COMPLETE_TAG_OPERATION',
                    reason: 'Unable to delete tag because the result is empty or erroneous.',
                };
            }
            this.disabled = true;
            const result = await this.deleteTag({
                tag,
                translationCards: this.result.value,
            });
            this.disabled = false;
            if (result.success) {
                this.result = result;
                tagsMenu.existingItems = result.value.tags;
                tagsMenu.selectedItems = getSelectedTagIds(result.value, cardId);
            }
            return result;
        };
        tagsMenu.attachTag = async (tag) => {
            if (!this.result || !this.result.success) {
                return {
                    success: false,
                    errorCode: 'EXTENSION_UNABLE_TO_COMPLETE_TAG_OPERATION',
                    reason: 'Unable to attach tag because the result is empty or erroneous.',
                };
            }
            this.disabled = true;
            const result = await this.attachTag({
                translationCards: this.result.value,
                tag,
                cardId,
            });
            this.disabled = false;
            if (result.success) {
                this.result = result;
                tagsMenu.existingItems = result.value.tags;
                tagsMenu.selectedItems = getSelectedTagIds(result.value, cardId);
            }
            return result;
        };
        tagsMenu.detachTag = async (tag) => {
            if (!this.result || !this.result.success) {
                return {
                    success: false,
                    errorCode: 'EXTENSION_UNABLE_TO_COMPLETE_TAG_OPERATION',
                    reason: 'Unable to detach tag because the result is empty or erroneous.',
                };
            }
            this.disabled = true;
            const result = await this.detachTag({
                translationCards: this.result.value,
                tag,
                cardId,
            });
            this.disabled = false;
            if (result.success) {
                this.result = result;
                tagsMenu.existingItems = result.value.tags;
                tagsMenu.selectedItems = getSelectedTagIds(result.value, cardId);
            }
            return result;
        };
        if (callerPosition.top * 2 > window.innerHeight) {
            tagsMenu.style.bottom = `${window.innerHeight - window.scrollY - callerPosition.bottom}px`;
        }
        else {
            tagsMenu.style.top = `${window.scrollY + callerPosition.top}px`;
        }
        const overlay = document.createElement('vocably-overlay');
        overlay.style.setProperty('--backdropOpacity', '0');
        overlay.appendChild(tagsMenu);
        window.document.body.appendChild(overlay);
        this.overlay = overlay;
        this.tagsMenu = tagsMenu;
    }
    render() {
        const sourceLanguageSelector = this.result && this.result.success && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-hint-selector", { key: '52fdde7fba9c4bfba0812e0aade37028873a6e18', hint: 'I study', shrinkSmall: true, disabled: this.loading || this.disabled, onChoose: (event) => this.changeSourceLanguage.emit(event.detail), value: this.sourceLanguage, optionGroups: [
                [
                    '',
                    Object.entries(languageList).sort(sortLanguages(this.existingSourceLanguages)),
                ],
            ] }));
        const targetLanguageSelector = this.result && this.result.success && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-hint-selector", { key: '047e543692fe8cb1ff16fe262d85de17f98a0bfd', hint: 'I speak', shrinkSmall: true, disabled: this.loading || this.disabled, onChoose: (event) => this.changeTargetLanguage.emit(event.detail), value: this.targetLanguage, optionGroups: [
                [
                    '',
                    Object.entries(languageList).sort(sortLanguages(this.existingTargetLanguages)),
                ],
            ] }));
        const showChatGpt = !this.hideChatGpt &&
            this.result &&
            this.result.success &&
            isDirectNecessary(this.result.value);
        const canAdd = this.maxCards === 'unlimited' ||
            !this.paymentLink ||
            (this.result &&
                this.result.success &&
                this.result.value.collectionLength < this.maxCards) ||
            (this.result &&
                this.result.success &&
                !isToday(this.result.value.lastAdded));
        const isOkayToAskForRating = this.askForRating && canAdd;
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '1ece8da5c0d861edf4ea259fceafc2d905153ff8', "data-test": "translation-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'f75179d70616c31270cb9c834c93ec640c0001f7', class: "vocably-loading-container" }, !this.result && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'c19dd01bb99f9eed23c5b3f725644eea285dc6fa', style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '12px',
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", { key: '5f24901a103cd1abcd363f9d7e46b13d19a73ce9' }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'd715fef6df1b253c3a22cc3d52eee971ef3de662', style: { fontSize: '13px' } }, "...ChatGPT"))), this.result && this.result.success === false && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '4ea83e0f734fe846193d183c86e1f84150e0f661', class: "vocably-error" }, "An error has occurred.")), this.result && this.result.success === true && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: 'c56f9693398cd11a113038471a3f0ca1c87540ed' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'b6f2890892ba934f6a09cca502b72d61f29b9716', class: "vocably-translation", "data-test": "translation" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '004de58947f96c4f706e27f0647f575c895cf37e', class: "vocably-translation-section" }, this.showLanguages && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '09c46bdfdc814a390986d191c8faab16433d6a10', class: "vocably-mb-12 vocably-language-selector" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'd1d429d854cad7be28fde5141d7d98b9e8309f83', class: "vocably-language-wrapper" }, sourceLanguageSelector), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-arrow-right", { key: '6f20fc0c24afc16dbb56c5fc2d455c97274b236b', class: "vocably-from-to" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '659f59353eeb1f743d0d675e0b73c104fd92dadb', class: "vocably-language-wrapper" }, targetLanguageSelector))), showChatGpt && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'be1e8e0fd0e7e3c6d19ec2e1d241bddf4474835e', class: "vocably-mb-12" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '71993018b7ba948a622801cd34e897beab7a3069', class: "vocably-small vocably-muted vocably-mb-4" }, "ChatGPT thinks that", ' '), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '3dc08923c95e2ea8d680dd8412f44e30af748d89', class: "vocably-emphasized" }, isGoogleTTSLanguage(this.result.value.translation.sourceLanguage) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-play-sound", { key: '693b6866403c3e955d73ee4f865b63387384a019', text: this.phrase, language: this.result.value.translation.sourceLanguage, playAudioPronunciation: this.playAudioPronunciation })), this.phrase), ' ', "means ", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", { key: 'e799c8d5a57dfe52f800b648a8d2f984d5e05b1d' }, this.result.value.translation.target))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '6bf944e2a17b1f24129df18477fe50ccd8a67737', class: "vocably-cards-container", style: { position: 'relative' } }, this.showSaveHint && canAdd && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-add-card-hint", { key: 'd794c6b9f1b9ae18cd90c248578f82b6f59e66fe', class: {
                'vocably-cards-save-hint': true,
                'vocably-cards-save-hint-hidden': this.saveCardClicked,
            } })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '70037c7d1288f10c2bc5dcfed5cc68444392d72a', class: "vocably-cards", "data-test": "cards" }, this.result.value.cards.map((card, itemIndex) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-test": "card", class: "vocably-card" }, this.canCongratulate && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'vocably-added-congratulation' +
                (this.congratulateItemIndex === itemIndex
                    ? ' vocably-added-congratulation-visible'
                    : '') }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-added-congratulation-content" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-added-congratulation-content-1" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-first-translation-congratulation", { card: card }))))), !canAdd && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
                'max-limit-1': true,
                'max-limit-visible': this.addAttemptIndex === itemIndex,
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "max-limit-2" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "max-limit-3" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "The", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { class: "vocably-emphasized" }, "Free Plan"), ' ', "allows to freely save up to", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", null, this.maxCards), " cards."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "After you reached the limit, you can save", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { class: "vocably-emphasized" }, "one card per day"), "."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: this.paymentLink, target: "_blank", class: "upgrade-button", onClick: () => {
                this.watchMePaying.emit();
            } }, "Upgrade to Premium", this.premiumCtaSuffix))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-card-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-card-action" }, isCardItem(card) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '4px',
                marginTop: '4px',
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-card-action-button", title: "Remove card", disabled: this.isUpdating !== null, onClick: () => {
                if (this.disabled) {
                    return false;
                }
                this.saveCardClicked = true;
                if (this.congratulateItemIndex ===
                    itemIndex) {
                    this.congratulateItemIndex = -1;
                }
                this.addedItemIndex = -1;
                this.result &&
                    this.result.success === true &&
                    this.removeCard.emit({
                        translationCards: this.result.value,
                        card,
                    });
            } }, this.isUpdating === card && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", null)), this.isUpdating !== card && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-bookmark-check", null)))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: "vocably-card-action-button", title: "Edit tags", disabled: this.isUpdating !== null, onClick: (e) => {
                if (this.disabled) {
                    return;
                }
                e.target &&
                    this.showTagMenu(e.target, card.id);
            } }, this.isUpdating !== card && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-tag", null))))), isDetachedCardItem(card) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: {
                'vocably-card-action-button': true,
                'vocably-card-add-button': true,
            }, title: "Add card", disabled: this.isUpdating !== null, onClick: () => {
                if (this.disabled) {
                    return false;
                }
                if (!canAdd) {
                    this.addAttemptIndex = itemIndex;
                    return;
                }
                else {
                    this.addAttemptIndex = -1;
                }
                this.saveCardClicked = true;
                if (this.congratulateItemIndex === -1) {
                    this.congratulateItemIndex = itemIndex;
                }
                this.addedItemIndex = itemIndex;
                this.result &&
                    this.result.success === true &&
                    this.addCard.emit({
                        translationCards: this.result.value,
                        card,
                    });
            } }, this.isUpdating === card && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", null)), this.isUpdating !== card && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-plus", null)), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { style: {
                marginLeft: '2px',
                display: 'inline-block',
                fontSize: '16px',
            } }, "Learn")))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-safe-action-area" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-source", { card: card, playAudioPronunciation: this.playAudioPronunciation, style: {
                marginTop: '6px',
                marginBottom: '6px',
            }, class: {
                'vocably-card-source': true,
                'vocably-card-hint-displayed': itemIndex === 0 && this.showSaveHint,
            } }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-definitions", { class: "vocably-mb-6", card: card, updateCard: this.makeUpdateCard(card) }), card.data.example && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-small vocably-mb-6" }, "Example:"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-examples", { example: card.data.example }))), isItem(card) && card.data.tags.length > 0 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12", style: {
                display: 'flex',
                gap: '6px',
                flexWrap: 'wrap',
            } }, card.data.tags.map((tagItem) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-tag" }, tagItem.data.title, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { type: "button", class: "vocably-tag-remove-button", "aria-label": "Remove this tag from the card", title: "Remove this tag from the card", onClick: this.detachTagClick(card, tagItem) }, this.removing &&
            this.removing.card === card &&
            this.removing.tag === tagItem && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", null)), (!this.removing ||
            this.removing.card !== card ||
            this.removing.tag !== tagItem) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-remove", { class: "vocably-tag-remove-button-icon" }))))))))))))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-animated-content-wrapper", { key: '327fb3142f2d241e51fdeac431a47666fef8cbe1', delay: this.explanationAnimationDelay, class: "explanation-frame" }, this.explanation.state !== 'none' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bfb4bc8dbefc0959bc3c6eeb2bf59581ea755ba0', class: "vocably-pt-12" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '16d891a57bc5da45d6f6bc23129ab383c0ff7d6a', class: "explanation-frame-content" }, this.explanation.state === 'loading' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: 'be9397781fd530616ebc817ac91ea0338b4a94a5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: 'f6d73f7ea6cc74439fa6acc6802a4e321c31d871', style: {
                display: 'inline-block',
                verticalAlign: 'middle',
                fontSize: '13px',
            } }, "Requesting extra info from ChatGPT"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-inline-loader", { key: '85de2f1c8ff5a383bda8ce546ff63c164f86d6d8', style: { marginLeft: '8px' } }))), this.explanation.state === 'error' &&
            this.explanation.error, this.explanation.state === 'loaded' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '636d5f630658ff7234ec46f39af5b5191be4e9be', class: "explanation", innerHTML: mdConverter.makeHtml(this.explanation.value) })))))), isOkayToAskForRating && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'dabb1b098339b59898e23c4ea61a0abf2ed594d4', class: "vocably-rate-container", ref: (el) => (this.askForRatingContainer = el) }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bc5855a6fcfbdd717a9a35caf85cc1bde00b0cb5', style: { paddingTop: '12px' } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'ba088e6c043070b51602058c80e4b676274afdcc', class: "vocably-cards vocably-rate-padding" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-rate", { key: 'e189b1110659720d8217315eaadc9a9b49c7dfd4', platform: this.extensionPlatform, onUserSelected: (choiceEvent) => {
                switch (choiceEvent.detail) {
                    case 'review':
                    case 'feedback':
                        break;
                    case 'later':
                        this.askForRatingContainer &&
                            this.askForRatingContainer.classList.add('vocably-rate-container-hidden');
                        break;
                    case 'never':
                        this.askForRatingContainer &&
                            this.askForRatingContainer.classList.add('vocably-rate-container-hidden');
                        break;
                }
                this.ratingInteraction.emit(choiceEvent.detail);
            } }))))))), this.loading && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '2b42236afd736a896e037145b74841c5cb969bdd', class: "vocably-reload", "data-test": "reload" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", { key: '7033727a754b9b23eb37fb26f4134197b8e0bdd1' }))))))));
    }
    get el() { return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyTranslation.style = translationCss;


//# sourceMappingURL=vocably-add-card-hint.vocably-animated-content-wrapper.vocably-button.vocably-card-counter.vocably-card-counter-explanation.vocably-card-definitions.vocably-card-examples.vocably-card-source.vocably-card-translation.vocably-close-button.vocably-first-translation-congratulation.vocably-hint-selector.vocably-icon-arrow-right.vocably-icon-bookmark-check.vocably-icon-check.vocably-icon-close.vocably-icon-edit.vocably-icon-error.vocably-icon-play-circle.vocably-icon-plus.vocably-icon-remove.vocably-icon-spin.vocably-icon-tag.vocably-icon-tag-edit.vocably-icon-volume-medium.vocably-inline-loader.vocably-language.vocably-logo.vocably-mobile-button.vocably-overlay.vocably-play-sound.vocably-popup.vocably-qr-code.vocably-rate.vocably-sign-in.vocably-spinner.vocably-subscribe.vocably-tag-form.vocably-tags-menu.vocably-translation.entry.js.map

//# sourceMappingURL=vocably-add-card-hint_40.entry.js.map

/***/ }),

/***/ 9546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vocably_icon_add": () => (/* binding */ VocablyIconAdd)
/* harmony export */ });
/* harmony import */ var _index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1243);


const iconAddCss = ":host{--logo-color:#000000;display:inline-block;width:24px;height:24px;visibility:visible !important}.svg{height:100%;width:auto;fill:#0050ff}";

const VocablyIconAdd = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '95e256e2f4850a9c349f560d46d2039a5c9d29fe' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '29d10ff8ed89c2826d9fba93e851d29c1d484155', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2011e169701c4b817b2b51b0dd3421d49c69ffc2', d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" }))));
    }
};
VocablyIconAdd.style = iconAddCss;


//# sourceMappingURL=vocably-icon-add.entry.js.map

//# sourceMappingURL=vocably-icon-add.entry.js.map

/***/ }),

/***/ 5330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vocably_icon_ai": () => (/* binding */ VocablyIconCheck)
/* harmony export */ });
/* harmony import */ var _index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1243);


const iconAiCss = ":host{--size:18px;display:inline-block;width:var(--size);height:var(--size)}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconCheck = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'ef18e221d2babde1ef8517347387056df04d1e2a', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '05090182254e448d6f417e5b5472fbb0da37dbd8', d: "M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74" })));
    }
};
VocablyIconCheck.style = iconAiCss;


//# sourceMappingURL=vocably-icon-ai.entry.js.map

//# sourceMappingURL=vocably-icon-ai.entry.js.map

/***/ }),

/***/ 5559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vocably_icon_window_close": () => (/* binding */ VocablyWindowClose)
/* harmony export */ });
/* harmony import */ var _index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1243);


const iconWindowCloseCss = ":host{display:inline-block;width:18px;height:18px}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyWindowClose = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'ed717b215e6d5f1b43c78f994f21148c0e7e667d', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f8990efda3959b18dea159c7504e77af566b22d1', d: "M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" })));
    }
};
VocablyWindowClose.style = iconWindowCloseCss;


//# sourceMappingURL=vocably-icon-window-close.entry.js.map

//# sourceMappingURL=vocably-icon-window-close.entry.js.map

/***/ }),

/***/ 3469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./vocably-add-card-hint_40.entry.js": [
		9745,
		694
	],
	"./vocably-icon-add.entry.js": [
		9546,
		694
	],
	"./vocably-icon-ai.entry.js": [
		5330,
		694
	],
	"./vocably-icon-window-close.entry.js": [
		5559,
		694
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3469;
module.exports = webpackAsyncContext;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ../../node_modules/bowser/es5.js
var es5 = __webpack_require__(7160);
;// CONCATENATED MODULE: ../browser/dist/esm/browser.js

const browser_browser = es5.getParser(window.navigator.userAgent);

;// CONCATENATED MODULE: ../browser/dist/esm/detectExtensionPlatform.js

const detectExtensionPlatform = () => {
    if (browser_browser.satisfies({
        macos: {
            safari: '>10.1',
        },
    })) {
        return {
            url: 'https://apps.apple.com/app/id6464076425',
            name: 'App Store',
            platform: 'safariExtension',
            paymentLink: false,
        };
    }
    if (browser_browser.getOSName(true) === 'ios' &&
        browser_browser.getBrowserName(true) === 'safari' &&
        !browser_browser.getPlatformType(true).includes('desktop')) {
        return {
            url: 'https://apps.apple.com/app/vocably-pro-language-cards/id1641258757',
            name: 'App Store',
            platform: 'iosSafariExtension',
            paymentLink: 'vocably-pro://upgrade',
        };
    }
    return {
        url: 'https://chrome.google.com/webstore/detail/vocably/baocigmmhhdemijfjnjdidbkfgpgogmb',
        name: 'Chrome Web Store',
        platform: 'chromeExtension',
        paymentLink: 'web',
    };
};

;// CONCATENATED MODULE: ../browser/dist/esm/index.js



// EXTERNAL MODULE: ../extension-content-ui/dist/esm/index-CfdvrA3w.js
var index_CfdvrA3w = __webpack_require__(1243);
;// CONCATENATED MODULE: ../extension-content-ui/dist/esm/app-globals-DQuL1Twl.js
const globalScripts = () => {};


//# sourceMappingURL=app-globals-DQuL1Twl.js.map

//# sourceMappingURL=app-globals-DQuL1Twl.js.map
;// CONCATENATED MODULE: ../extension-content-ui/dist/esm/loader.js




const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return (0,index_CfdvrA3w.b)([["vocably-icon-add",[[257,"vocably-icon-add"]]],["vocably-icon-ai",[[257,"vocably-icon-ai"]]],["vocably-icon-window-close",[[257,"vocably-icon-window-close"]]],["vocably-add-card-hint_40",[[257,"vocably-translation",{"phrase":[1],"result":[16],"loading":[4],"existingSourceLanguages":[16,"existing-source-languages"],"existingTargetLanguages":[16,"existing-target-languages"],"askForRating":[4,"ask-for-rating"],"sourceLanguage":[1,"source-language"],"targetLanguage":[1,"target-language"],"isUpdating":[16,"is-updating"],"showSaveHint":[4,"show-save-hint"],"canCongratulate":[4,"can-congratulate"],"playAudioPronunciation":[16,"play-audio-pronunciation"],"extensionPlatform":[16,"extension-platform"],"updateCard":[16,"update-card"],"attachTag":[16,"attach-tag"],"detachTag":[16,"detach-tag"],"updateTag":[16,"update-tag"],"deleteTag":[16,"delete-tag"],"disabled":[1028],"showLanguages":[4,"show-languages"],"hideChatGpt":[4,"hide-chat-gpt"],"maxCards":[8,"max-cards"],"paymentLink":[1,"payment-link"],"premiumCtaSuffix":[1,"premium-cta-suffix"],"explanation":[16],"explanationAnimationDelay":[2,"explanation-animation-delay"],"saveCardClicked":[32],"addedItemIndex":[32],"congratulateItemIndex":[32],"addAttemptIndex":[32],"removing":[32],"play":[64]}],[256,"vocably-card-counter",{"collectionLength":[2,"collection-length"],"maxCards":[2,"max-cards"],"paymentLink":[1,"payment-link"]}],[257,"vocably-popup"],[257,"vocably-button"],[257,"vocably-language",{"sourceLanguage":[1,"source-language"],"targetLanguage":[1,"target-language"],"waiting":[4]}],[257,"vocably-mobile-button"],[257,"vocably-sign-in"],[257,"vocably-subscribe",{"trial":[4]}],[257,"vocably-tags-menu",{"disabled":[4],"selectedItems":[16,"selected-items"],"existingItems":[16,"existing-items"],"attachTag":[16,"attach-tag"],"detachTag":[16,"detach-tag"],"saveTag":[16,"save-tag"],"deleteTag":[16,"delete-tag"],"savingTag":[32]}],[256,"vocably-card-definitions",{"card":[16],"updateCard":[16,"update-card"]}],[256,"vocably-card-source",{"card":[16],"playAudioPronunciation":[16,"play-audio-pronunciation"]}],[257,"vocably-card-counter-explanation",{"maxCards":[2,"max-cards"],"paymentLink":[1,"payment-link"]}],[257,"vocably-first-translation-congratulation",{"card":[16]}],[257,"vocably-add-card-hint"],[257,"vocably-animated-content-wrapper",{"delay":[2]}],[256,"vocably-card-examples",{"example":[1]}],[256,"vocably-close-button"],[257,"vocably-hint-selector",{"shrinkSmall":[4,"shrink-small"],"optionGroups":[16,"option-groups"],"value":[1],"hint":[1],"disabled":[4]}],[257,"vocably-icon-arrow-right"],[257,"vocably-icon-bookmark-check"],[257,"vocably-icon-plus"],[257,"vocably-icon-remove"],[257,"vocably-icon-tag"],[257,"vocably-inline-loader",{"duration":[2],"paused":[4]}],[257,"vocably-logo"],[256,"vocably-rate",{"platform":[16]}],[256,"vocably-card-translation",{"card":[16],"updateCard":[16,"update-card"],"isEdit":[32],"isSaving":[32]}],[257,"vocably-play-sound",{"text":[1],"language":[1],"playAudioPronunciation":[16,"play-audio-pronunciation"],"isLoading":[32],"isPlaying":[32],"isPlayError":[32],"play":[64]}],[257,"vocably-tag-form",{"tagItem":[16,"tag-item"],"saveTag":[16,"save-tag"],"deleteTag":[16,"delete-tag"],"title":[32],"saving":[32]}],[257,"vocably-icon-tag-edit"],[257,"vocably-overlay",{"closeKeyCode":[16,"close-key-code"],"hide":[64]}],[257,"vocably-qr-code"],[257,"vocably-icon-edit"],[257,"vocably-icon-error"],[257,"vocably-icon-play-circle"],[257,"vocably-icon-volume-medium"],[257,"vocably-spinner"],[257,"vocably-icon-check"],[257,"vocably-icon-spin"],[257,"vocably-icon-close"]]]], options);
};


//# sourceMappingURL=loader.js.map

//# sourceMappingURL=loader.js.map
;// CONCATENATED MODULE: ../extension-content-ui/loader/index.js
(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,a)}})();

// EXTERNAL MODULE: ../../node_modules/@webcomponents/custom-elements/custom-elements.min.js
var custom_elements_min = __webpack_require__(3166);
;// CONCATENATED MODULE: ../../node_modules/tslib/tslib.es6.js
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction_isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction_isFunction(value.remove) && isFunction_isFunction(value.add) && isFunction_isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction_isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        captureError(error);
    }
    else {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable_Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_isFunction(value.next) && isFunction_isFunction(value.error) && isFunction_isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Subject.js






var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_Observable));

var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
    return isFunction_isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/map.js


function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
    return isFunction_isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
    return isFunction_isFunction(input[observable]);
}
//# sourceMappingURL=isInteropObservable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
    return isFunction_isFunction(input === null || input === void 0 ? void 0 : input[iterator_iterator]);
}
//# sourceMappingURL=isIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js












function innerFrom(input) {
    if (input instanceof Observable_Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable_Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction_isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable_Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable_Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable_Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable_Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
//# sourceMappingURL=executeSchedule.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
//# sourceMappingURL=mergeInternals.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js


function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/empty.js

var EMPTY = new Observable_Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isScheduler.js

function isScheduler(value) {
    return value && isFunction_isFunction(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/args.js


function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/observeOn.js



function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}
//# sourceMappingURL=observeOn.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
//# sourceMappingURL=subscribeOn.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js



function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js



function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js

function scheduleArray(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js




function scheduleIterable(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var iterator;
        executeSchedule(subscriber, scheduler, function () {
            iterator = input[iterator_iterator]();
            executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction_isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
//# sourceMappingURL=scheduleIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js


function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_Observable(function (subscriber) {
        executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js


function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js













function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw createInvalidObservableTypeError(input);
}
//# sourceMappingURL=scheduled.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/from.js


function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//# sourceMappingURL=from.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/merge.js





function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            EMPTY
        : sources.length === 1
            ?
                innerFrom(sources[0])
            :
                mergeAll(concurrent)(from(sources, scheduler));
}
//# sourceMappingURL=merge.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js


var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = asyncScheduler;
//# sourceMappingURL=async.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/observable/timer.js




function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = async_async; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_Observable(function (subscriber) {
        var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
//# sourceMappingURL=timer.js.map
;// CONCATENATED MODULE: ../../node_modules/rxjs/dist/esm5/internal/operators/take.js



function take(count) {
    return count <= 0
        ?
            function () { return EMPTY; }
        : operate(function (source, subscriber) {
            var seen = 0;
            source.subscribe(createOperatorSubscriber(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}
//# sourceMappingURL=take.js.map
;// CONCATENATED MODULE: ../../node_modules/@vocably/hermes/dist/esm/index.js
let browserEnv;
if (typeof chrome !== 'undefined') {
    browserEnv = chrome;
    // @ts-ignore
}
else if (typeof browser !== 'undefined') {
    // @ts-ignore
    browserEnv = browser;
}
const makeSend = (identifier) => (data, extensionId) => {
    return new Promise((resolve, reject) => {
        if (!browserEnv) {
            reject('browserEnv environment is not defined');
            return;
        }
        if (!browserEnv.runtime) {
            reject('browserEnv.runtime is not defined defined');
            return;
        }
        const sendParams = [
            { identifier, data },
            (response) => {
                if (browserEnv.runtime.lastError) {
                    return reject(browserEnv.runtime.lastError);
                }
                resolve(response);
            },
        ];
        if (extensionId) {
            sendParams.unshift(extensionId);
        }
        browserEnv.runtime.sendMessage(...sendParams);
    });
};
const makeListener = (identifier, callback) => (request, sender, nativeSendResponse) => {
    if (typeof request !== 'object' ||
        request === null ||
        request.identifier !== identifier) {
        return;
    }
    const data = request.data;
    const sendResponse = (r) => {
        nativeSendResponse(r);
        return r;
    };
    callback(sendResponse, data);
    return true;
};
const createMessage = (identifier) => {
    const subscribe = (callback) => {
        browserEnv.runtime.onMessage.addListener(makeListener(identifier, callback));
    };
    return [makeSend(identifier), subscribe];
};
const createExternalMessage = (identifier) => {
    const send = makeSend(identifier);
    const subscribe = (callback) => {
        browserEnv.runtime.onMessageExternal.addListener(makeListener(identifier, callback));
    };
    return [
        (extensionId, data) => send(data, extensionId),
        subscribe,
    ];
};

;// CONCATENATED MODULE: ../extension-messages/dist/esm/index.js

const createScope = (scope) => (identifier) => createMessage(`${scope}.${identifier}`);
const createScopedMessage = createScope('vocably');
const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage('isLoggedIn');
const [getSettings, onGetSettingsRequest] = createScopedMessage('getSettings');
const [setSettings, onSetSettingsRequest] = createScopedMessage('setSettings');
const [isActive, onIsActiveRequest] = createScopedMessage('isActive');
const [isEligibleForTrial, onIsEligibleForTrialRequest] = createScopedMessage('isEligibleForTrial');
const [getMaxCards, onGetMaxCardsRequest] = createScopedMessage('getMaxCards');
const [getUserEmail, onGetUserEmail] = createScopedMessage('getUserEmail');
const [analyze, onAnalyzeRequest] = createScopedMessage('analyze');
const [explain, onExplainRequest] = createScopedMessage('explain');
const [removeCard, onRemoveCardRequest] = createScopedMessage('removeCard');
const [addCard, onAddCardRequest] = createScopedMessage('addCard');
const [listLanguages, onListLanguagesRequest] = createScopedMessage('listLanguages');
const [listTargetLanguages, onListTargetLanguagesRequest] = createScopedMessage('listTargetLanguages');
const [getLocationLanguage, onGetLocationLanguageRequest] = createScopedMessage('getLocationLanguage');
const [saveLocationLanguage, onSaveLocationLanguageRequest] = createScopedMessage('saveLocationLanguage');
const [getLanguagePairs, onGetLanguagePairs] = createScopedMessage('getLanguagePairs');
const [cleanUp, onCleanUpRequest] = createScopedMessage('cleanUp');
const [ping, onPing] = createScopedMessage('ping');
const [getInternalProxyLanguage, onGetInternalProxyLanuage] = createScopedMessage('getInternalProxyLanguage');
const [setInternalProxyLanguage, onSetInternalProxyLanguage] = createScopedMessage('setInternalProxyLanguage');
const [getInternalSourceLanguage, onGetInternalSourceLanguage] = createScopedMessage('getInternalSourceLanguage');
const [setInternalSourceLanguage, onSetInternalSourceLanguage] = createScopedMessage('setInternalSourceLanguage');
const [isUserKnowsHowToAdd, onIsUserKnowsHowToAdd] = createScopedMessage('isUserKnowsHowToAdd');
const [setUserKnowsHowToAdd, onSetUserKnowsHowToAdd] = createScopedMessage('setUserKnowsHowToAdd');
const [pingExternal, onPingExternal] = createExternalMessage('vocably.ping-external');
const [setProxyLanguage, onSetProxyLanguage] = createExternalMessage('vocably.setProxyLanguage');
const [getProxyLanguage, onGetProxyLanguage] = createExternalMessage('vocably.getProxyLanguage');
const [setSourceLanguage, onSetSourceLanguage] = createExternalMessage('vocably.setSourceLanguage');
const [getSourceLanguage, onGetSourceLanguage] = createExternalMessage('vocably.getSourceLanguage');
const [getAudioPronunciation, onGetAudioPronunciation] = createScopedMessage('getAudioPronunciation');
const [askForRating, onAskForRating] = createScopedMessage('askForRating');
const [saveAskForRatingResponse, onSaveAskForRatingResponse] = createScopedMessage('askForRatingResponse');
const [playAudioPronunciation, onPlayAudioPronunciation] = createScopedMessage('playAudioPronunciation');
const [playAudioPronunciationOffscreen, onPlayAudioPronunciationOffscreen,] = createScopedMessage('playAudioPronunciationOffscreen');
const [canPlayOffScreen, onCanPlayOffScreen] = createScopedMessage('canPlayOffScreen');
const [updateCard, onUpdateCard] = createScopedMessage('updateCard');
const [attachTag, onAttachTag] = createScopedMessage('attachTag');
const [detachTag, onDetachTag] = createScopedMessage('detachTag');
const [updateTag, onUpdateTag] = createScopedMessage('updateTag');
const [deleteTag, onDeleteTag] = createScopedMessage('deleteTag');

;// CONCATENATED MODULE: ../extension-content-script/dist/api.js
﻿
const api = {
    appBaseUrl: 'https://app.vocably.pro',
    isLoggedIn: isLoggedIn,
    getInternalProxyLanguage: getInternalProxyLanguage,
    setInternalProxyLanguage: setInternalProxyLanguage,
    getInternalSourceLanguage: getInternalSourceLanguage,
    setInternalSourceLanguage: setInternalSourceLanguage,
    analyze: analyze,
    addCard: addCard,
    removeCard: removeCard,
    cleanUp: cleanUp,
    isActive: isActive,
    getMaxCards: getMaxCards,
    getUserEmail: getUserEmail,
    ping: ping,
    listLanguages: listLanguages,
    listTargetLanguages: listTargetLanguages,
    isEligibleForTrial: isEligibleForTrial,
    isUserKnowsHowToAdd: isUserKnowsHowToAdd,
    setUserKnowsHowToAdd: setUserKnowsHowToAdd,
    getAudioPronunciation: getAudioPronunciation,
    playAudioPronunciation: playAudioPronunciation,
    canPlayOffScreen: canPlayOffScreen,
    askForRating: askForRating,
    saveAskForRatingResponse: saveAskForRatingResponse,
    getLocationLanguage: getLocationLanguage,
    saveLocationLanguage: saveLocationLanguage,
    getSettings: getSettings,
    updateCard: updateCard,
    attachTag: attachTag,
    detachTag: detachTag,
    updateTag: updateTag,
    deleteTag: deleteTag,
    explain: explain,
};
const configureApi = (options) => {
    Object.assign(api, options);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/browserEnv.js
﻿let browserEnv_browserEnv;
if (typeof chrome !== 'undefined') {
    browserEnv_browserEnv = chrome;
}
else if (typeof browser !== 'undefined') {
    browserEnv_browserEnv = browser;
}
const hasOffscreen = (browserEnv) => {
    return !!browserEnv['offscreen'];
};

;// CONCATENATED MODULE: ../extension-content-script/dist/styling.js
﻿const isTop = (popupPosition) => {
    return Object.prototype.hasOwnProperty.call(popupPosition, 'top');
};
const applyPosition = (element, position) => {
    element.style.position = 'absolute';
    element.style.left = `${position.left}px`;
    if (isTop(position)) {
        element.style.top = `${position.top}px`;
    }
    else {
        element.style.top = `${position.bottom}px`;
    }
};
const setupTransform = (element) => {
    element.style.setProperty('--horizontal-displacement', '0px');
    element.style.setProperty('--translate-y', '0');
    element.style.transform = `translate(calc(-50% + var(--horizontal-displacement)), var(--translate-y))`;
};
const calculateDisplacement = (element, position) => {
    const rect = element.getBoundingClientRect();
    if (position.left - rect.width / 2 < window.scrollX) {
        return window.scrollX + (rect.width / 2 - position.left);
    }
    if (position.left + rect.width / 2 > window.innerWidth + window.scrollX) {
        return (window.innerWidth + window.scrollX - (position.left + rect.width / 2));
    }
    return 0;
};
const applyTransform = (element, position) => {
    const displacement = calculateDisplacement(element, position);
    if (displacement !== 0) {
        const animationDuration = 200;
        const originalTransition = element.style.transition;
        element.style.transition = `${originalTransition ? `${originalTransition}, ` : ''}transform ${animationDuration}ms`;
        setTimeout(() => {
            element.style.transition = originalTransition;
        }, animationDuration);
    }
    element.style.setProperty('--horizontal-displacement', `${displacement}px`);
    if (isTop(position)) {
        element.style.setProperty('--translate-y', '0');
    }
    else {
        element.style.setProperty('--translate-y', '-100%');
    }
};
const setHorizontalDisplacement = (element, displacement) => {
    element.style.setProperty('--horizontal-displacement', `${displacement}px`);
};
const styling_applyMaxZIndex = (element) => {
    element.style.zIndex = '2147483647';
};

;// CONCATENATED MODULE: ../extension-content-script/dist/button/applyButtonPosition.js
﻿
const applyButtonPosition = ({ element, position, isTouchscreen, }) => {
    element.style.position = isTouchscreen ? 'fixed' : 'absolute';
    element.style.left = `${position.left}px`;
    if (isTouchscreen) {
        element.style.bottom = `60px`;
        return;
    }
    if (isTop(position)) {
        element.style.top = `${position.top}px`;
    }
    else {
        element.style.top = `${position.bottom}px`;
    }
};

;// CONCATENATED MODULE: ../extension-content-script/dist/contextLanguages.js
﻿const contextLanguages = [
    'da',
    'nl',
    'en',
    'fi',
    'fr',
    'de',
    'el',
    'he',
    'hi',
    'id',
    'it',
    'ms',
    'no',
    'pl',
    'pt',
    'ru',
    'es',
    'sv',
    'tr',
    'vi',
];

;// CONCATENATED MODULE: ../model/dist/esm/language.js
const GoogleLanguages = [
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'ca',
    'zh',
    'co',
    'haw',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'he',
    'hi',
    'hu',
    'hmn',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'jv',
    'kn',
    'kk',
    'km',
    'rw',
    'ko',
    'ku',
    'ky',
    'lo',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'my',
    'ne',
    'no',
    'ny',
    'or',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'tk',
    'zh-TW',
    'uk',
    'ur',
    'ug',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu',
];
const ChatGPTLanguages = (/* unused pure expression or super */ null && ([
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'ca',
    'zh',
    'co',
    'haw',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'he',
    'hi',
    'hu',
    'hmn',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'jv',
    'kn',
    'kk',
    'km',
    'rw',
    'ko',
    'ku',
    'ky',
    'lo',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'my',
    'ne',
    'no',
    'ny',
    'or',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'tk',
    'zh-TW',
    'uk',
    'ur',
    'ug',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu',
]));
const NLPLanguages = (/* unused pure expression or super */ null && ([
    'af',
    'sq',
    'am',
    'ar',
    'hy',
    'az',
    'eu',
    'be',
    'bn',
    'bs',
    'bg',
    'my',
    'ca',
    'ny',
    'zh-CN',
    'zh-TW',
    'co',
    'hr',
    'cs',
    'da',
    'nl',
    'en',
    'eo',
    'et',
    'fi',
    'fr',
    'fy',
    'gl',
    'ka',
    'de',
    'el',
    'gu',
    'ht',
    'ha',
    'haw',
    'iw',
    'hi',
    'hmn',
    'hu',
    'is',
    'ig',
    'id',
    'ga',
    'it',
    'ja',
    'kn',
    'kk',
    'km',
    'ko',
    'ku',
    'ky',
    'lo',
    'lv',
    'lt',
    'lb',
    'mk',
    'mg',
    'ms',
    'ml',
    'mt',
    'mi',
    'mr',
    'mn',
    'ne',
    'no',
    'ps',
    'fa',
    'pl',
    'pt',
    'pa',
    'ro',
    'ru',
    'sm',
    'gd',
    'sr',
    'st',
    'sn',
    'sd',
    'si',
    'sk',
    'sl',
    'so',
    'es',
    'su',
    'sw',
    'sv',
    'tl',
    'tg',
    'ta',
    'tt',
    'te',
    'th',
    'tr',
    'uk',
    'ur',
    'uz',
    'vi',
    'cy',
    'xh',
    'yi',
    'yo',
    'zu',
]));
const LexicalaLanguages = (/* unused pure expression or super */ null && ([
    'ar',
    'br',
    'cs',
    'de',
    'da',
    'el',
    'en',
    'es',
    'fr',
    'he',
    'hi',
    'it',
    'ja',
    'ko',
    'la',
    'nl',
    'no',
    'pl',
    'pt',
    'ru',
    'sv',
    'th',
    'tr',
    'tw',
    'zh',
]));
const GoogleNLPLanguageMap = {
    he: 'iw',
    zh: 'zh-CN',
};
const googleToNlp = (googleLanguage) => {
    if (GoogleNLPLanguageMap[googleLanguage] !== undefined) {
        return GoogleNLPLanguageMap[googleLanguage];
    }
    return (NLPLanguages.find((nlpLanguage) => nlpLanguage === googleLanguage) ?? null);
};
const language_isGoogleLanguage = (language) => GoogleLanguages.indexOf(language) !== -1;
const isChatGPTLanguage = (language) => ChatGPTLanguages.indexOf(language) !== -1;

;// CONCATENATED MODULE: ../model/dist/esm/bulk-analysis.js


const isBulkAnalysisPayload = (data) => {
    if (!isObject(data)) {
        return false;
    }
    if (!isGoogleLanguage(data['sourceLanguage'])) {
        return false;
    }
    if (!isArray(data['sources'])) {
        return false;
    }
    return data['sources'].every((source) => isString(source));
};

;// CONCATENATED MODULE: ../model/dist/esm/constants.js
const MAX_SYMBOLS_TO_BE_TRANSLATED = 150;

;// CONCATENATED MODULE: ../model/dist/esm/explain.js


const isExplainPayload = (data) => {
    if (!isObject(data)) {
        return false;
    }
    if (!isGoogleLanguage(data['sourceLanguage'])) {
        return false;
    }
    if (!isGoogleLanguage(data['targetLanguage'])) {
        return false;
    }
    if (!isString(data['source'])) {
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ../model/dist/esm/language-list.js
const languageList = {
    af: 'Afrikaans',
    sq: 'Albanian',
    am: 'Amharic',
    ar: 'Arabic',
    hy: 'Armenian',
    az: 'Azerbaijani',
    eu: 'Basque',
    be: 'Belarusian',
    bn: 'Bengali',
    bs: 'Bosnian',
    bg: 'Bulgarian',
    ca: 'Catalan',
    zh: 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    co: 'Corsican',
    hr: 'Croatian',
    cs: 'Czech',
    da: 'Danish',
    nl: 'Dutch',
    en: 'English',
    eo: 'Esperanto',
    et: 'Estonian',
    fi: 'Finnish',
    fr: 'French',
    fy: 'Frisian',
    gl: 'Galician',
    ka: 'Georgian',
    de: 'German',
    el: 'Greek',
    gu: 'Gujarati',
    ht: 'Haitian Creole',
    ha: 'Hausa',
    haw: 'Hawaiian',
    he: 'Hebrew',
    hi: 'Hindi',
    hmn: 'Hmong',
    hu: 'Hungarian',
    is: 'Icelandic',
    ig: 'Igbo',
    id: 'Indonesian',
    ga: 'Irish',
    it: 'Italian',
    ja: 'Japanese',
    jv: 'Javanese',
    kn: 'Kannada',
    kk: 'Kazakh',
    km: 'Khmer',
    rw: 'Kinyarwanda',
    ko: 'Korean',
    ku: 'Kurdish',
    ky: 'Kyrgyz',
    lo: 'Lao',
    lv: 'Latvian',
    lt: 'Lithuanian',
    lb: 'Luxembourgish',
    mk: 'Macedonian',
    mg: 'Malagasy',
    ms: 'Malay',
    ml: 'Malayalam',
    mt: 'Maltese',
    mi: 'Maori',
    mr: 'Marathi',
    mn: 'Mongolian',
    my: 'Myanmar (Burmese)',
    ne: 'Nepali',
    no: 'Norwegian',
    ny: 'Nyanja (Chichewa)',
    or: 'Odia (Oriya)',
    ps: 'Pashto',
    fa: 'Persian',
    pl: 'Polish',
    pt: 'Portuguese (Portugal, Brazil)',
    pa: 'Punjabi',
    ro: 'Romanian',
    ru: 'Russian',
    sm: 'Samoan',
    gd: 'Scots Gaelic',
    sr: 'Serbian',
    st: 'Sesotho',
    sn: 'Shona',
    sd: 'Sindhi',
    si: 'Sinhala (Sinhalese)',
    sk: 'Slovak',
    sl: 'Slovenian',
    so: 'Somali',
    es: 'Spanish',
    su: 'Sundanese',
    sw: 'Swahili',
    sv: 'Swedish',
    tl: 'Tagalog (Filipino)',
    tg: 'Tajik',
    ta: 'Tamil',
    tt: 'Tatar',
    te: 'Telugu',
    th: 'Thai',
    tr: 'Turkish',
    tk: 'Turkmen',
    uk: 'Ukrainian',
    ur: 'Urdu',
    ug: 'Uyghur',
    uz: 'Uzbek',
    vi: 'Vietnamese',
    cy: 'Welsh',
    xh: 'Xhosa',
    yi: 'Yiddish',
    yo: 'Yoruba',
    zu: 'Zulu',
};
const getFullLanguageName = (code) => {
    // @ts-ignore
    return languageList[code] ?? code;
};

;// CONCATENATED MODULE: ../sulna/dist/esm/tokenize.js
const tokenize = (text) => {
    return text
        .replace(/[^\p{Letter}\p{Mark}]+/gu, ' ')
        .trim()
        .split(' ');
};

;// CONCATENATED MODULE: ../sulna/dist/esm/trimArticle.js
const trimRegexes = {
    en: [/^(a)\s/i],
    nl: [/^(de|het|de.het|het.de)\s/i],
    de: [/^(der|die|das|ein|eine)\s/i],
    es: [/^(el|la|los|las|el.la|la.el)\s/i],
    fr: [/^(le|la|les|un|une|des|du|de)\s/i],
    it: [/^(il|lo|la|i|gli|le|un|uno|una)\s/i, /^(l)['’‘‛′ʼʹꞌ＇]/i],
    pt: [/^(o|a|os|as|um|uma|uns|umas)\s/i],
    no: [/^(en|ei|et)\s/i],
    da: [/^(en|et)\s/i],
};
const trimArticle = (language, source) => {
    if (trimRegexes[language] === undefined) {
        return {
            source,
        };
    }
    for (let regex of trimRegexes[language]) {
        const articleMatch = source.match(regex);
        if (articleMatch === null) {
            continue;
        }
        return {
            source: source.replace(regex, '').trim(),
        };
    }
    return {
        source,
    };
};

;// CONCATENATED MODULE: ../sulna/dist/esm/index.js











;// CONCATENATED MODULE: ../model/dist/esm/user.js

const mapUserAttributes = ({ user, attributes, }) => {
    const email = attributes.find((a) => a.getName() === 'email');
    const sub = attributes.find((a) => a.getName() === 'sub');
    const status = attributes.find((a) => a.getName() === 'custom:status');
    const cancellationDate = attributes.find((a) => a.getName() === 'custom:cancellation_date');
    const nextBillDate = attributes.find((a) => a.getName() === 'custom:next_bill_date');
    const unitPrice = attributes.find((a) => a.getName() === 'custom:unit_price');
    const updateUrl = attributes.find((a) => a.getName() === 'custom:update_url');
    const cancelUrl = attributes.find((a) => a.getName() === 'custom:cancel_url');
    const productId = attributes.find((a) => a.getName() === 'custom:product_id');
    const planName = attributes.find((a) => a.getName() === 'custom:plan_name');
    if (!email || !sub) {
        throw Error('Can find email and sub in user data.');
    }
    return {
        username: user.getUsername(),
        email: email.getValue(),
        sub: sub.getValue(),
        status: getAttributeValue(status),
        updateUrl: getAttributeValue(updateUrl),
        cancelUrl: getAttributeValue(cancelUrl),
        nextBillDate: nextBillDate && new Date(nextBillDate.getValue()),
        unitPrice: unitPrice && parseFloat(unitPrice.getValue()),
        cancellationDate: cancellationDate && new Date(cancellationDate.getValue()),
        productId: productId && parseInt(productId.getValue()),
        planName: planName && planName.getValue(),
    };
};
const user_isEligibleForTrial = (userData) => {
    return userData.status !== 'deleted';
};

;// CONCATENATED MODULE: ../model/dist/esm/user-metadata.js
const defaultUserMetadata = {
    onboardingFlow: {
        allowed: false,
        extensionSent: true,
        mobileAppSent: true,
        language: null,
    },
    rate: {
        ios: undefined,
        android: undefined,
        chromeExtension: undefined,
        safariExtension: undefined,
    },
    usageStats: {
        lastLookupTimestamp: 0,
        totalLookups: 0,
    },
};
const mergeUserMetadata = (md1, md2) => {
    return {
        ...md1,
        ...md2,
        rate: {
            ...md1.rate,
            ...md2.rate,
        },
        onboardingFlow: {
            ...md1.onboardingFlow,
            ...md2.onboardingFlow,
        },
        usageStats: {
            ...md1.usageStats,
            ...md2.usageStats,
        },
    };
};
const mapUserMetadata = (metadata) => {
    return mergeUserMetadata(defaultUserMetadata, metadata);
};

;// CONCATENATED MODULE: ../model/dist/esm/user-static-metadata.js
const defaultUserStaticMetadata = {
    premium: false,
    premium_status: 'NONE',
    premium_expiration_at_ms: null,
    premium_last_event_ms: 0,
    max_cards: 300,
    thanks_trial: 'none',
    management_url: null,
};
const mergeUserStaticMetadata = (md1, md2) => {
    return {
        ...md1,
        ...md2,
    };
};
const mapUserStaticMetadata = (metadata) => {
    return mergeUserStaticMetadata(defaultUserStaticMetadata, metadata);
};

;// CONCATENATED MODULE: ../model/dist/esm/index.js


























;// CONCATENATED MODULE: ../extension-content-script/dist/isSelection.js
﻿const isSelection = (anchor) => {
    return anchor instanceof Selection;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/detectLanguage.js
﻿var detectLanguage_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getNodeLanguage = (node) => {
    var _a;
    if (!node) {
        return undefined;
    }
    // @ts-ignore
    const nodeLang = ((_a = node.lang) !== null && _a !== void 0 ? _a : '').substring(0, 2);
    if (language_isGoogleLanguage(nodeLang)) {
        return nodeLang;
    }
    return getNodeLanguage(node.parentNode);
};
const detectLanguage = (anchor) => detectLanguage_awaiter(void 0, void 0, void 0, function* () {
    const locationLanguage = yield api.getLocationLanguage(window.location.toString());
    if (locationLanguage) {
        return locationLanguage;
    }
    const [{ autodetectLanguage }, sourceLanguage] = yield Promise.all([
        api.getSettings(),
        api.getInternalSourceLanguage(),
    ]);
    if (!autodetectLanguage && sourceLanguage) {
        return sourceLanguage;
    }
    if (isSelection(anchor)) {
        return getNodeLanguage(anchor.anchorNode);
    }
    return getNodeLanguage(anchor);
});

;// CONCATENATED MODULE: ../extension-content-script/dist/getContext/getContextFromSelection.js
﻿const isHtmlElement = (node) => {
    return node.nodeType === Node.ELEMENT_NODE;
};
const getPreviousSibling = (node) => {
    if (node === null) {
        return null;
    }
    if (isHtmlElement(node) &&
        !getComputedStyle(node).display.includes('inline')) {
        return null;
    }
    if (node.previousSibling) {
        return node.previousSibling;
    }
    if (!node.parentNode) {
        return null;
    }
    return getPreviousSibling(node.parentNode);
};
const getNextSibling = (node) => {
    if (node === null) {
        return null;
    }
    if (isHtmlElement(node) &&
        !getComputedStyle(node).display.includes('inline')) {
        return null;
    }
    if (node.nextSibling) {
        return node.nextSibling;
    }
    if (!node.parentNode) {
        return null;
    }
    return getNextSibling(node.parentNode);
};
const parseBackward = (node, context, startOffset) => {
    var _a;
    if (!node || !node.textContent) {
        return context;
    }
    let newContext = context;
    const offset = startOffset !== null && startOffset !== void 0 ? startOffset : node.textContent.length;
    for (let i = offset - 1; i >= 0; i--) {
        const char = (_a = node.textContent) === null || _a === void 0 ? void 0 : _a[i];
        if (char === '.') {
            return newContext;
        }
        newContext = char + newContext;
    }
    const previousSibling = getPreviousSibling(node);
    if (previousSibling) {
        return parseBackward(previousSibling, newContext);
    }
    return newContext;
};
const parseForward = (node, context, endOffset) => {
    var _a;
    if (node === null) {
        return context;
    }
    if (!node.textContent) {
        return context;
    }
    let newContext = context;
    const offset = endOffset !== null && endOffset !== void 0 ? endOffset : 0;
    for (let i = offset; i < node.textContent.length; i++) {
        const char = (_a = node.textContent) === null || _a === void 0 ? void 0 : _a[i];
        if (char === '.') {
            return newContext;
        }
        newContext = newContext + char;
    }
    const nextSibling = getNextSibling(node);
    if (nextSibling) {
        return parseForward(nextSibling, newContext);
    }
    return newContext;
};
const getContextFromSelection = (selection) => {
    if (selection.rangeCount === 0) {
        return '';
    }
    const range = selection.getRangeAt(0);
    return parseForward(range.endContainer, parseBackward(range.startContainer, selection.toString(), range.startOffset), range.endOffset);
};
const getContextFromHTMLElement = (htmlElement) => {
    var _a;
    return parseForward(getNextSibling(htmlElement), parseBackward(getPreviousSibling(htmlElement), (_a = htmlElement.textContent) !== null && _a !== void 0 ? _a : ''));
};

;// CONCATENATED MODULE: ../extension-content-script/dist/getContext.js
﻿


const getContext = (anchor) => {
    let rawContext = '';
    if (isSelection(anchor)) {
        rawContext = getContextFromSelection(anchor);
    }
    else {
        rawContext = getContextFromHTMLElement(anchor);
    }
    return tokenize(rawContext).join(' ');
};

;// CONCATENATED MODULE: ../extension-content-script/dist/getText.js
﻿
const getText = (anchor) => {
    if (isSelection(anchor)) {
        return anchor.toString();
    }
    return anchor.innerText;
};

;// CONCATENATED MODULE: ../../node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const _freeGlobal = (freeGlobal);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ const _root = (root);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root.Symbol;

/* harmony default export */ const _Symbol = (_Symbol_Symbol);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const _getRawTag = (getRawTag);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/isArray.js
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray_isArray = Array.isArray;

/* harmony default export */ const lodash_es_isArray = (isArray_isArray);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const lodash_es_isObjectLike = (isObjectLike);

;// CONCATENATED MODULE: ../../node_modules/lodash-es/isString.js




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString_isString(value) {
  return typeof value == 'string' ||
    (!lodash_es_isArray(value) && lodash_es_isObjectLike(value) && _baseGetTag(value) == stringTag);
}

/* harmony default export */ const lodash_es_isString = (isString_isString);

;// CONCATENATED MODULE: ../extension-content-script/dist/configuration.js
﻿let contentScriptConfiguration = {
    askForRatingEnabled: false,
    displayMobileLookupButton: false,
    allowFirstTranslationCongratulation: false,
    webPaymentLink: 'https://app.vocably.pro/subscribe',
    premiumCtaSuffix: '',
};
const configureContentScript = (configuration) => {
    contentScriptConfiguration = Object.assign(Object.assign({}, contentScriptConfiguration), configuration);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/playAudioPronunciation.js
﻿var playAudioPronunciation_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const playDataUrl = (dataUrl) => playAudioPronunciation_awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve) => {
        try {
            const audio = new Audio(dataUrl);
            audio.addEventListener('ended', () => {
                resolve({
                    success: true,
                    value: true,
                });
            });
            audio.play().catch((e) => {
                resolve({
                    success: false,
                    errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                    reason: 'An error occurred while playing the offscreen audio',
                    extra: e,
                });
            });
        }
        catch (e) {
            resolve({
                success: false,
                errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                reason: 'An error occurred while playing the offscreen audio',
                extra: e,
            });
        }
    });
});
const playAudioPronunciation_playAudioPronunciation = (payload) => playAudioPronunciation_awaiter(void 0, void 0, void 0, function* () {
    const canPlayOffScreen = yield api.canPlayOffScreen();
    if (canPlayOffScreen) {
        return api.playAudioPronunciation(payload);
    }
    const result = yield api.getAudioPronunciation(payload);
    if (result.success === false) {
        return result;
    }
    return playDataUrl(result.value.url);
});

;// CONCATENATED MODULE: ../extension-content-script/dist/popup/contents.js
﻿var contents_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const getLocaleLanguage = () => {
    var _a;
    if (!((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.language)) {
        return 'en';
    }
    return window.navigator.language.substring(0, 2);
};
const setContents = ({ popup, source, detectedLanguage, context, autoPlay, }) => contents_awaiter(void 0, void 0, void 0, function* () {
    let intervalId = undefined;
    let waitForPaymentIntervalId = undefined;
    let explicitlySetLanguage = null;
    const tearDown = () => {
        clearInterval(intervalId);
        intervalId = undefined;
        clearInterval(waitForPaymentIntervalId);
        waitForPaymentIntervalId = undefined;
    };
    const setTranslation = () => contents_awaiter(void 0, void 0, void 0, function* () {
        const userKnowsHowToAdd = yield api.isUserKnowsHowToAdd();
        const extensionPlatform = detectExtensionPlatform();
        const translation = document.createElement('vocably-translation');
        translation.phrase = source;
        translation.playAudioPronunciation = playAudioPronunciation_playAudioPronunciation;
        translation.showSaveHint = !userKnowsHowToAdd;
        translation.extensionPlatform = extensionPlatform;
        (translation.premiumCtaSuffix =
            contentScriptConfiguration.premiumCtaSuffix),
            (translation.canCongratulate =
                contentScriptConfiguration.allowFirstTranslationCongratulation &&
                    !userKnowsHowToAdd);
        const analyze = ({ sourceLanguage, targetLanguage, } = {}) => contents_awaiter(void 0, void 0, void 0, function* () {
            translation.loading = true;
            const [translationResult, maxCards] = yield Promise.all([
                api.analyze({
                    source,
                    // @ts-ignore
                    sourceLanguage,
                    targetLanguage,
                    context,
                    initiator: 'content-script',
                }),
                api.getMaxCards(),
            ]);
            translation.maxCards = maxCards;
            translation.loading = false;
            if (translationResult.success === false) {
                console.error('Analyze error', translationResult);
            }
            if (contentScriptConfiguration.askForRatingEnabled) {
                api.askForRating({
                    translationResult: translationResult,
                    extensionPlatform: extensionPlatform.platform,
                })
                    .then((result) => {
                    translation.askForRating = result;
                });
            }
            translation.result = translationResult;
            if (translationResult.success === true) {
                translation.sourceLanguage =
                    translationResult.value.translation.sourceLanguage;
                translation.targetLanguage =
                    translationResult.value.translation.targetLanguage;
                if (autoPlay) {
                    setTimeout(() => {
                        translation.play();
                    }, 50);
                }
                const source = translationResult.value.cards.length === 1
                    ? translationResult.value.cards[0].data.source
                    : translationResult.value.translation.source;
                translation.explanation = { state: 'loading' };
                if (translationResult.value.translation.source.trim().split(' ')
                    .length === 1) {
                    translation.explanationAnimationDelay = 2000;
                }
                api.explain({
                    sourceLanguage: translationResult.value.translation.sourceLanguage,
                    targetLanguage: translationResult.value.translation.targetLanguage,
                    source: source,
                })
                    .then((result) => {
                    if (result.success === true && result.value.explanation) {
                        translation.explanation = {
                            state: 'loaded',
                            value: result.value.explanation,
                        };
                    }
                    else if (result.success === true && !result.value.explanation) {
                        translation.explanation = { state: 'none' };
                    }
                    else {
                        translation.explanation = {
                            state: 'error',
                            error: 'Unable to load AI explanation.',
                        };
                    }
                });
            }
            const existingLanguagesResult = yield api.listLanguages();
            translation.existingSourceLanguages = existingLanguagesResult.success
                ? existingLanguagesResult.value
                : [];
            const existingTargetLanguages = yield api.listTargetLanguages();
            if (extensionPlatform.paymentLink === 'web') {
                translation.paymentLink = contentScriptConfiguration.webPaymentLink;
            }
            else if (lodash_es_isString(extensionPlatform.paymentLink)) {
                translation.paymentLink = extensionPlatform.paymentLink;
            }
            else {
                translation.paymentLink = '';
            }
            translation.existingTargetLanguages = existingTargetLanguages;
        });
        translation.updateCard = api.updateCard;
        translation.attachTag = api.attachTag;
        translation.detachTag = api.detachTag;
        translation.deleteTag = api.deleteTag;
        translation.updateTag = api.updateTag;
        // @ts-ignore
        translation.addEventListener('changeSourceLanguage', ({ detail: sourceLanguage }) => {
            if (translation.result && translation.result.success) {
                api.cleanUp(translation.result.value);
            }
            api.saveLocationLanguage([window.location.toString(), sourceLanguage]);
            translation.sourceLanguage = sourceLanguage;
            analyze({
                sourceLanguage,
            });
        });
        translation.addEventListener('watchMePaying', () => {
            waitForPaymentIntervalId = setInterval(() => contents_awaiter(void 0, void 0, void 0, function* () {
                const maxCards = yield api.getMaxCards();
                translation.maxCards = maxCards;
                if (maxCards === 'unlimited') {
                    clearInterval(waitForPaymentIntervalId);
                    waitForPaymentIntervalId = undefined;
                }
            }), 10000);
        });
        // @ts-ignore
        translation.addEventListener('changeTargetLanguage', ({ detail: targetLanguage }) => {
            if (translation.result && translation.result.success) {
                api.cleanUp(translation.result.value);
            }
            translation.targetLanguage = targetLanguage;
            analyze({
                targetLanguage,
            });
        });
        // @ts-ignore
        translation.addEventListener('removeCard', ({ detail: payload }) => contents_awaiter(void 0, void 0, void 0, function* () {
            translation.isUpdating = payload.card;
            translation.result = yield api.removeCard(payload);
            translation.isUpdating = null;
            yield api.setUserKnowsHowToAdd(true);
        }));
        // @ts-ignore
        translation.addEventListener('addCard', ({ detail: payload }) => contents_awaiter(void 0, void 0, void 0, function* () {
            translation.isUpdating = payload.card;
            translation.result = yield api.addCard(payload);
            translation.isUpdating = null;
            yield api.setUserKnowsHowToAdd(true);
        }));
        // @ts-ignore
        translation.addEventListener('ratingInteraction', ({ detail: payload }) => contents_awaiter(void 0, void 0, void 0, function* () {
            yield api.saveAskForRatingResponse({
                extensionPlatform: extensionPlatform.platform,
                rateInteraction: payload,
            });
        }));
        analyze({
            sourceLanguage: explicitlySetLanguage !== null && explicitlySetLanguage !== void 0 ? explicitlySetLanguage : detectedLanguage,
        });
        popup.innerHTML = '';
        popup.appendChild(translation);
    });
    let timerElapsed = false;
    const isAlright = () => {
        return Promise.all([
            api.isLoggedIn(),
            api.getInternalSourceLanguage(),
            api.getInternalProxyLanguage(),
        ]);
    };
    const [isLoggedIn, internalSourceLanguage, internalTargetLanguage] = yield isAlright();
    if (isLoggedIn && internalSourceLanguage && internalTargetLanguage) {
        yield setTranslation();
        return tearDown;
    }
    const alert = document.createElement('div');
    const updateAlertMessage = (isLoggedIn, internalSourceLanguage, internalTargetLanguage) => contents_awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!isLoggedIn) {
            if (alert.dataset.message !== 'sign-in') {
                alert.dataset.message = 'sign-in';
                alert.innerHTML = '';
                const signInElement = document.createElement('vocably-sign-in');
                signInElement.addEventListener('confirm', () => {
                    closeWindow();
                    windowProxy = window.open(`${api.appBaseUrl}/hands-free`, '_blank');
                    windowProxy && windowProxy.focus();
                });
                alert.appendChild(signInElement);
            }
            return;
        }
        if (!internalSourceLanguage || !internalTargetLanguage) {
            if (alert.dataset.message !== 'proxy-language') {
                alert.dataset.message = 'proxy-language';
                alert.innerHTML = '';
                const languageForm = document.createElement('vocably-language');
                languageForm.sourceLanguage =
                    (_a = internalSourceLanguage !== null && internalSourceLanguage !== void 0 ? internalSourceLanguage : detectedLanguage) !== null && _a !== void 0 ? _a : 'en';
                languageForm.targetLanguage =
                    internalTargetLanguage !== null && internalTargetLanguage !== void 0 ? internalTargetLanguage : getLocaleLanguage();
                // @ts-ignore
                languageForm.addEventListener('confirm', (event) => contents_awaiter(void 0, void 0, void 0, function* () {
                    languageForm.waiting = true;
                    const { sourceLanguage, targetLanguage } = event.detail;
                    explicitlySetLanguage = sourceLanguage;
                    yield Promise.all([
                        api.setInternalSourceLanguage(sourceLanguage),
                        api.setInternalProxyLanguage(targetLanguage),
                    ]);
                }));
                alert.appendChild(languageForm);
            }
        }
    });
    yield updateAlertMessage(isLoggedIn, internalSourceLanguage, internalTargetLanguage);
    let windowProxy = null;
    const closeWindow = () => {
        if (windowProxy !== null) {
            windowProxy.close();
            windowProxy = null;
        }
    };
    intervalId = setInterval(() => contents_awaiter(void 0, void 0, void 0, function* () {
        const [isLoggedIn, internalSourceLanguage, internalTargetLanguage] = yield isAlright();
        if (isLoggedIn && internalSourceLanguage && internalTargetLanguage) {
            clearInterval(intervalId);
            intervalId = undefined;
            yield setTranslation();
            setTimeout(closeWindow, 3000);
        }
        else {
            yield updateAlertMessage(isLoggedIn, internalSourceLanguage, internalTargetLanguage);
        }
    }), 1000);
    popup.innerHTML = '';
    popup.appendChild(alert);
    return tearDown;
});

;// CONCATENATED MODULE: ../extension-content-script/dist/popup.js
﻿var popup_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const popupStack = [];
const calculatePosition = (globalRect, isTouchscreen) => {
    const left = window.innerWidth < 640
        ? window.scrollX + window.innerWidth / 2
        : globalRect.left + globalRect.width / 2;
    const top = globalRect.top - window.scrollY;
    const bottom = top + globalRect.height;
    const selectionContextMenuHeight = Math.ceil(50 / window.visualViewport.scale);
    if (bottom < window.innerHeight / 2) {
        return {
            left,
            top: window.scrollY +
                bottom +
                (isTouchscreen ? selectionContextMenuHeight : 0),
        };
    }
    else {
        return {
            left,
            bottom: window.scrollY + top - (isTouchscreen ? selectionContextMenuHeight : 0),
        };
    }
};
const calculateMaxHeight = (position) => {
    if (isTop(position)) {
        return `${window.scrollY - position.top + window.innerHeight}px`;
    }
    else {
        return `${position.bottom - window.scrollY}px`;
    }
};
const applyInitialStyles = (popup) => {
    applyMaxZIndex(popup);
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 100ms';
};
const show = (popup) => {
    popup.style.opacity = '1';
};
const popupAlreadyExists = (text) => {
    const lastPopup = [...document.querySelectorAll('vocably-popup')].pop();
    if (!lastPopup) {
        return false;
    }
    return lastPopup.dataset.text === text;
};
const createPopup = (options) => popup_awaiter(void 0, void 0, void 0, function* () {
    const popup = document.createElement('vocably-popup');
    popup.dataset.text = options.text;
    const { autoPlay } = yield api.getSettings();
    const tearDownContents = yield setContents({
        popup,
        source: options.text,
        detectedLanguage: options.detectedLanguage,
        context: options.context,
        autoPlay,
    });
    const position = calculatePosition(options.globalRect, options.isTouchscreen);
    popup.style.setProperty('--max-height', calculateMaxHeight(position));
    popup.style.setProperty('--max-width', `${window.visualViewport.width}px`);
    applyPosition(popup, position);
    setupTransform(popup);
    show(popup);
    const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(() => applyTransform(popup, position));
    });
    resizeObserver.observe(popup);
    const overlay = document.createElement('vocably-overlay');
    overlay.style.setProperty('--backdropOpacity', '0');
    overlay.closeKeyCode = ['Escape', 'Space'];
    overlay.appendChild(popup);
    overlay.addEventListener('close', () => {
        destroyOverlay(overlay);
    });
    document.body.appendChild(overlay);
    popupStack.push({ overlay, resizeObserver, tearDownContents });
});
const destroyOverlay = (overlayToDestroy) => {
    const stackItemIndex = popupStack.findIndex((item) => item.overlay === overlayToDestroy);
    if (stackItemIndex === -1) {
        return;
    }
    const { overlay, resizeObserver, tearDownContents } = popupStack[stackItemIndex];
    tearDownContents();
    resizeObserver.unobserve(overlay);
    resizeObserver.disconnect();
    overlay.hide();
    popupStack.splice(stackItemIndex, 1);
};
const destroyAllOverlays = () => {
    while (popupStack.length > 0) {
        destroyOverlay(popupStack[0].overlay);
    }
};

;// CONCATENATED MODULE: ../extension-content-script/dist/position.js
﻿const getGlobalRect = (rect) => {
    return {
        width: rect.width,
        height: rect.height,
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
    };
};

;// CONCATENATED MODULE: ../extension-content-script/dist/button.js
﻿var button_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const buttonId = 'translation-extension-button';
const considerGoogleTranslate = (button) => button_awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const gtxIcon = document.getElementById('gtx-trans');
            if (gtxIcon) {
                gtxIcon.addEventListener('mouseup', (event) => {
                    event.stopPropagation();
                });
                const rect = gtxIcon.getBoundingClientRect();
                setHorizontalDisplacement(button, rect.width + 3);
            }
            resolve();
        }, 100);
    });
});
const getPosition = (selection, event) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (selection.rangeCount === 0) {
                resolve(null);
                return;
            }
            const selectionRect = selection.getRangeAt(0).getBoundingClientRect();
            const left = window.scrollX + event.x;
            if ((selectionRect.bottom + selectionRect.top) / 2 > event.y) {
                resolve({
                    left,
                    bottom: selectionRect.top - 1 + window.scrollY,
                });
            }
            else {
                resolve({
                    left,
                    top: selectionRect.bottom + window.scrollY + 1,
                });
            }
        }, 100);
    });
};
const hide = (button) => {
    button.style.display = 'none';
};
const button_show = (button) => {
    button.style.display = 'block';
};
const createButton = (selection, event = null) => button_awaiter(void 0, void 0, void 0, function* () {
    const isTouchscreen = event === null;
    const button = document.createElement(isTouchscreen ? 'vocably-mobile-button' : 'vocably-button');
    button.id = buttonId;
    hide(button);
    document.body.appendChild(button);
    styling_applyMaxZIndex(button);
    const detectedLanguage = yield detectLanguage(selection);
    const context = detectedLanguage && contextLanguages.includes(detectedLanguage)
        ? getContext(selection)
        : undefined;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        createPopup({
            detectedLanguage,
            text: getText(selection),
            context: context,
            globalRect: getGlobalRect(selection.getRangeAt(0).getBoundingClientRect()),
            isTouchscreen: isTouchscreen,
        });
        destroyButton();
    });
    button.addEventListener('mousedown', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
    button.addEventListener('mouseup', (event) => {
        event.preventDefault();
        event.stopPropagation();
    });
    const position = event
        ? yield getPosition(selection, event)
        : {
            left: window.scrollX + window.innerWidth / 2,
            bottom: window.scrollY + window.innerHeight - 96,
        };
    if (position === null) {
        destroyButton();
        return;
    }
    applyButtonPosition({ element: button, position, isTouchscreen });
    setupTransform(button);
    applyTransform(button, position);
    yield considerGoogleTranslate(button);
    button_show(button);
});
const destroyButton = () => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.remove();
    }
};

;// CONCATENATED MODULE: ../extension-content-script/dist/isHtmlElement.js
﻿const isHtmlElement_isHtmlElement = (node) => {
    return node instanceof HTMLElement;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/selection.js
﻿

const getSelection = () => {
    const globalSelection = window.getSelection();
    if (!globalSelection || globalSelection.toString() === '') {
        return null;
    }
    if (globalSelection.focusNode &&
        globalSelection.focusNode.nodeName === 'VOCABLY-POPUP' &&
        isHtmlElement_isHtmlElement(globalSelection.focusNode)) {
        const translation = globalSelection.focusNode.querySelector('vocably-translation');
        if (!translation) {
            return null;
        }
        // @ts-ignore
        if (translation.shadowRoot && translation.shadowRoot['getSelection']) {
            // @ts-ignore
            return translation.shadowRoot['getSelection']();
        }
        return null;
    }
    return globalSelection;
};
const isValidSelection = (selection) => {
    if (selection === null) {
        return false;
    }
    if (selection.rangeCount === 0) {
        return false;
    }
    const clientRect = selection.getRangeAt(0).getBoundingClientRect();
    if (clientRect.height === 0 || clientRect.width === 0) {
        return false;
    }
    const text = selection.toString().trim();
    if (text === '') {
        return false;
    }
    if (text.length > MAX_SYMBOLS_TO_BE_TRANSLATED) {
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/styles.js
﻿const setYouTubeStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
  .vocably-word {
    cursor: pointer;
  }
  .vocably-word:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;
    document.head.appendChild(style);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/containsChinese.js
﻿const chineseRangeWithoutPunctuation = [
    // sequence is determine by occurrence probability
    [0x4e00, 0x9fff],
    [0x3400, 0x4dbf],
    [0x20000, 0x2a6df],
    [0x2a700, 0x2b73f],
    [0x2b740, 0x2b81f],
    [0x2b820, 0x2ceaf],
    [0x3300, 0x33ff],
    [0xfe30, 0xfe4f],
    [0xf900, 0xfaff],
    [0x2f800, 0x2fa1f], // https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement
];
const chineseRangeWithPunctuation = chineseRangeWithoutPunctuation.concat([
    // START Chinese punctuation
    [0xff0c, 0xff0c],
    [0x3002, 0x3002],
    [0x00b7, 0x00b7],
    [0x00d7, 0x00d7],
    [0x2014, 0x2014],
    [0x2018, 0x2018],
    [0x2019, 0x2019],
    [0x201c, 0x201c],
    [0x201d, 0x201d],
    [0x2026, 0x2026],
    [0x3001, 0x3001],
    [0x300a, 0x300a],
    [0x300b, 0x300b],
    [0x300e, 0x300e],
    [0x300f, 0x300f],
    [0x3010, 0x3010],
    [0x3011, 0x3011],
    [0xff01, 0xff01],
    [0xff08, 0xff08],
    [0xff09, 0xff09],
    [0xff1a, 0xff1a],
    [0xff1b, 0xff1b],
    [0xff1f, 0xff1f],
    [0xff5e, 0xff5e], //～
    // END Chinese punctuation
]);
const convertCharRangeToRegExp = (range) => {
    const reStr = range
        .map((range) => {
        if (range[0] === range[1]) {
            return `\\u{${range[0].toString(16)}}`;
        }
        return `[\\u{${range[0].toString(16)}}-\\u{${range[1].toString(16)}}]`;
    })
        .join('|');
    return new RegExp(`${reStr}`, 'u');
};
const reWithPunctuation = convertCharRangeToRegExp(chineseRangeWithPunctuation);
const containsChinese = (text) => {
    return reWithPunctuation.test(text);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/containsJapanese.js
﻿const japaneseCharacterRegex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
const containsJapanese = (text) => {
    return japaneseCharacterRegex.test(text);
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/containsKorean.js
﻿const hangulLetter = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g;
const containsKorean = (text) => {
    return text.match(hangulLetter) !== null;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/detectLanguage.js
﻿


const detectLanguage_detectLanguage = (text) => {
    if (containsKorean(text)) {
        return 'ko';
    }
    if (containsChinese(text)) {
        return 'zh';
    }
    if (containsJapanese(text)) {
        return 'ja';
    }
    return '';
};

;// CONCATENATED MODULE: ../extension-content-script/dist/tokenizer/extractTokens.js
﻿
const letterRegexp = /[A-Za-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/;
const isLetter = (char) => {
    return letterRegexp.test(char);
};
const getTokenType = (char) => {
    return isLetter(char) ? 'word' : 'punctuation';
};
const extractTokens = (text, language = '') => {
    if (text === '') {
        return [];
    }
    const detectedLanguage = language || detectLanguage_detectLanguage(text);
    if (detectedLanguage === 'zh' ||
        detectedLanguage === 'zh-TW' ||
        detectedLanguage === 'ja' ||
        detectedLanguage === 'ko') {
        return false;
    }
    const tokens = [];
    let token = {
        type: getTokenType(text.charAt(0)),
        text: text.charAt(0),
    };
    for (let i = 1; i < text.length; i++) {
        const currentTokenType = getTokenType(text.charAt(i));
        if (currentTokenType === token.type) {
            token.text += text.charAt(i);
            continue;
        }
        tokens.push(token);
        token = {
            type: currentTokenType,
            text: text.charAt(i),
        };
    }
    tokens.push(token);
    return tokens;
};

;// CONCATENATED MODULE: ../extension-content-script/dist/youtube.js
﻿var youtube_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const ytPlayerTagName = 'ytd-player';
const getPlayerElements = () => {
    const players = document.querySelectorAll(ytPlayerTagName);
    return Array.from(players);
};
const handlePlayerElement = (player) => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type !== 'childList')
                return;
            if (!mutation.target)
                return;
            if (!isHtmlElement_isHtmlElement(mutation.target))
                return;
            if (!mutation.target.classList)
                return;
            if (!mutation.target.classList.contains('ytp-caption-segment'))
                return;
            mutation.addedNodes.forEach((node) => {
                var _a;
                if (isHtmlElement_isHtmlElement(node) && node.classList.contains('replaced'))
                    return;
                const tokens = extractTokens((_a = node.textContent) !== null && _a !== void 0 ? _a : '');
                if (tokens === false) {
                    return;
                }
                const span = document.createElement('span');
                span.classList.add('replaced');
                tokens.forEach((token, index) => {
                    if (token.type !== 'word') {
                        const punctuationSpan = document.createElement('span');
                        punctuationSpan.innerText = token.text;
                        span.append(punctuationSpan);
                        return;
                    }
                    const anchor = document.createElement('span');
                    anchor.classList.add('vocably-word');
                    anchor.innerText = token.text;
                    anchor.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                    anchor.addEventListener('mouseup', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                    anchor.addEventListener('click', () => youtube_awaiter(void 0, void 0, void 0, function* () {
                        var _a;
                        const detectedLanguage = yield detectLanguage(anchor);
                        yield createPopup({
                            detectedLanguage,
                            text: (_a = anchor.textContent) !== null && _a !== void 0 ? _a : '',
                            globalRect: getGlobalRect(anchor.getBoundingClientRect()),
                            isTouchscreen: false,
                            context: detectedLanguage && contextLanguages.includes(detectedLanguage)
                                ? getContext(anchor)
                                : undefined,
                        });
                    }));
                    span.append(anchor);
                });
                if (node.parentNode) {
                    const captionWindow = node.parentNode.closest('.caption-window');
                    captionWindow.removeAttribute('tabindex');
                }
                if (node.replaceWith) {
                    node.replaceWith(span);
                }
            });
        });
    });
    observer.observe(player, {
        attributes: false,
        childList: true,
        subtree: true,
    });
    return () => {
        observer.disconnect();
    };
};
const initYoutube = (options) => youtube_awaiter(void 0, void 0, void 0, function* () {
    if (!options.ytHosts.includes(window.location.host)) {
        return;
    }
    setYouTubeStyles();
    getPlayerElements().forEach((player) => {
        handlePlayerElement(player);
    });
    const playerObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (!isHtmlElement_isHtmlElement(node)) {
                    return;
                }
                if (node.tagName === ytPlayerTagName) {
                    handlePlayerElement(node);
                    return;
                }
                const players = node.getElementsByTagName(ytPlayerTagName);
                for (const player of players) {
                    if (!isHtmlElement_isHtmlElement(player)) {
                        continue;
                    }
                    handlePlayerElement(player);
                }
            });
        });
    });
    playerObserver.observe(document.body, {
        childList: true,
        subtree: true,
    });
    let isAltDown = false;
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Alt' || isAltDown) {
            return;
        }
        isAltDown = true;
        let isMouseDown = false;
        const players = getPlayerElements();
        let captionContainerList = [];
        let captionContainersCloneList = [];
        players.forEach((player) => {
            player.style.userSelect = 'auto';
            player.style.webkitUserSelect = 'auto';
            const container = player.querySelector('.ytd-player');
            if (isHtmlElement_isHtmlElement(container)) {
                container.style.userSelect = 'auto';
                container.style.webkitUserSelect = 'auto';
            }
            const captionContainer = player.querySelector('#ytp-caption-window-container');
            if (!isHtmlElement_isHtmlElement(captionContainer)) {
                return;
            }
            captionContainer.style.userSelect = 'auto';
            captionContainer.style.webkitUserSelect = 'auto';
            const captionContainerClone = captionContainer.cloneNode(true);
            captionContainerList.push(captionContainer);
            captionContainersCloneList.push(captionContainerClone);
            captionContainer.hidden = true;
            captionContainer.before(captionContainerClone);
            captionContainerClone
                .querySelectorAll('.caption-window')
                .forEach((captionWindow) => {
                if (!isHtmlElement_isHtmlElement(captionWindow)) {
                    return;
                }
                captionWindow.draggable = false;
                captionWindow.style.userSelect = 'auto';
                captionWindow.style.webkitUserSelect = 'auto';
                captionWindow
                    .querySelectorAll('.captions-text')
                    .forEach((element) => {
                    if (!isHtmlElement_isHtmlElement(element)) {
                        return;
                    }
                    element.style.userSelect = 'auto';
                    element.style.webkitUserSelect = 'auto';
                });
                captionWindow
                    .querySelectorAll('.ytp-caption-segment')
                    .forEach((segment) => {
                    if (!isHtmlElement_isHtmlElement(segment)) {
                        return;
                    }
                    segment.style.cursor = 'text';
                });
                captionWindow
                    .querySelectorAll('.vocably-word')
                    .forEach((word) => word.classList.remove('vocably-word'));
            });
        });
        const onBlur = () => {
            tearDown();
        };
        const onVisibilityChange = () => {
            if (document.hidden) {
                tearDown();
            }
        };
        document.addEventListener('visibilitychange', onVisibilityChange);
        window.addEventListener('blur', onBlur);
        const tearDown = () => {
            isAltDown = false;
            captionContainersCloneList.forEach((element) => element.remove());
            captionContainerList.forEach((element) => (element.hidden = false));
            document.removeEventListener('keyup', onKeyUp);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('visibilitychange', onVisibilityChange);
            window.removeEventListener('blur', onBlur);
        };
        const onMouseDown = (e) => {
            if (e.button !== 0) {
                return;
            }
            isMouseDown = true;
        };
        const onMouseUp = (e) => {
            if (e.button !== 0) {
                return;
            }
            isMouseDown = false;
            if (isAltDown) {
                return;
            }
            setTimeout(tearDown, 100);
        };
        const onKeyUp = (e) => {
            if (e.key !== 'Alt') {
                return;
            }
            isAltDown = false;
            if (isMouseDown) {
                return;
            }
            setTimeout(tearDown, 100);
        };
        document.addEventListener('keyup', onKeyUp);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
    });
});

;// CONCATENATED MODULE: ../extension-content-script/dist/index.js
﻿var dist_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















const onCreateSelectionTimeout = () => dist_awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.ping();
    }
    catch (_a) {
        return;
    }
    destroyButton();
    const selection = getSelection();
    if (!isValidSelection(selection)) {
        return;
    }
    yield createButton(selection);
});
let createSelectionTimeout = null;
const onTextSelect = () => dist_awaiter(void 0, void 0, void 0, function* () {
    if (createSelectionTimeout) {
        clearTimeout(createSelectionTimeout);
        createSelectionTimeout = null;
    }
    createSelectionTimeout = setTimeout(onCreateSelectionTimeout, 500);
});
let selectionFixIntervalId = null;
const enableSelectionChangeDetection = () => {
    if (!contentScriptConfiguration.displayMobileLookupButton) {
        return;
    }
    document.removeEventListener('selectionchange', onTextSelect, false);
    document.addEventListener('selectionchange', onTextSelect, false);
    if (selectionFixIntervalId) {
        clearInterval(selectionFixIntervalId);
    }
    // Resubscribe to selectionchange event because
    // the motherfucking iOS Safari is losing it.
    selectionFixIntervalId = setInterval(() => {
        document.removeEventListener('selectionchange', onTextSelect, false);
        document.addEventListener('selectionchange', onTextSelect, false);
    }, 1000);
};
const isInSelection = (element, selection) => {
    if (!selection || selection.rangeCount === 0) {
        return false;
    }
    for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        if (range.intersectsNode(element)) {
            return true;
        }
    }
    return false;
};
const isClickableElement = (element) => {
    if (['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'VOCABLY-POPUP'].includes(element.tagName)) {
        return true;
    }
    if (element.parentElement) {
        return isClickableElement(element.parentElement);
    }
    return false;
};
const doubleClick$ = new Subject();
const onMouseUp = (event) => dist_awaiter(void 0, void 0, void 0, function* () {
    const selection = getSelection();
    if (!selection) {
        return;
    }
    if (isClickableElement(event.target) &&
        !isInSelection(event.target, selection)) {
        return;
    }
    try {
        yield api.ping();
    }
    catch (_b) {
        return;
    }
    destroyButton();
    if (!isValidSelection(selection)) {
        return;
    }
    merge(doubleClick$.pipe(map(() => true)), timer(50).pipe(map(() => false)))
        .pipe(take(1))
        .subscribe((doubleClick) => dist_awaiter(void 0, void 0, void 0, function* () {
        if (doubleClick) {
            return;
        }
        const settings = yield api.getSettings();
        // This is the attempt to make the "Double click" functionality
        // work in Lemur browser on Android.
        // The mouse event is not trusted in Lemur on Android.
        if (event.isTrusted === false &&
            browser_browser.getOS().name === 'Android' &&
            settings.showOnDoubleClick) {
            destroyAllOverlays();
            yield showOnDbClick({ isTouchscreen: true })();
        }
        if (!settings.hideSelectionButton) {
            yield createButton(selection, event);
        }
    }));
});
const showOnDbClick = (options) => () => dist_awaiter(void 0, void 0, void 0, function* () {
    const settings = yield api.getSettings();
    if (!settings.showOnDoubleClick) {
        return;
    }
    doubleClick$.next();
    yield showPopup(options);
});
const showPopup = (options) => dist_awaiter(void 0, void 0, void 0, function* () {
    const selection = getSelection();
    if (!isValidSelection(selection)) {
        return;
    }
    const text = getText(selection);
    if (popupAlreadyExists(text)) {
        return;
    }
    const detectedLanguage = yield detectLanguage(selection);
    const context = detectedLanguage && contextLanguages.includes(detectedLanguage)
        ? getContext(selection)
        : undefined;
    yield createPopup({
        detectedLanguage,
        text,
        context,
        globalRect: getGlobalRect(selection.getRangeAt(0).getBoundingClientRect()),
        isTouchscreen: options.isTouchscreen,
    });
});
const onMouseDown = (event) => dist_awaiter(void 0, void 0, void 0, function* () {
    if (isClickableElement(event.target)) {
        return;
    }
    try {
        yield api.ping();
    }
    catch (_c) {
        return;
    }
    destroyButton();
});
let lastShiftPressed = 0;
const showOnHotKey = (event) => dist_awaiter(void 0, void 0, void 0, function* () {
    if (event.key !== 'Shift') {
        return;
    }
    const settings = yield api.getSettings();
    if (!settings.showOnHotKey) {
        return;
    }
    const now = new Date().getTime();
    if (now - lastShiftPressed <= 500) {
        yield showPopup({
            isTouchscreen: false,
        });
        return;
    }
    lastShiftPressed = now;
});
const registerContentScript = ({ api: apiOptions, youTube: youTubeOptions, contentScript, } = {
    api: {},
    youTube: { ytHosts: ['www.youtube.com'] },
    contentScript: {
        askForRatingEnabled: false,
        displayMobileLookupButton: false,
        allowFirstTranslationCongratulation: false,
    },
}) => dist_awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    configureApi(apiOptions);
    defineCustomElements();
    initYoutube(youTubeOptions);
    configureContentScript(contentScript);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('keyup', showOnHotKey);
    document.addEventListener('dblclick', showOnDbClick({ isTouchscreen: false }));
    (_e = (_d = browserEnv_browserEnv.runtime) === null || _d === void 0 ? void 0 : _d.onMessage) === null || _e === void 0 ? void 0 : _e.addListener((request) => {
        if (request && request.action === 'contextMenuTranslateClicked') {
            showPopup({ isTouchscreen: false });
        }
    });
    enableSelectionChangeDetection();
});

;// CONCATENATED MODULE: ./src/content-script.ts

registerContentScript({
    api: {
        appBaseUrl: "https://app.vocably.pro",
    },
    youTube: { ytHosts: ['www.youtube.com'] },
    contentScript: {
        askForRatingEnabled: true,
        displayMobileLookupButton: false,
        allowFirstTranslationCongratulation: true,
        webPaymentLink: "https://app.vocably.pro" + '/subscribe',
        premiumCtaSuffix: ' (from $2.50/month)',
    },
}).then();

})();

/******/ })()
;
//# sourceMappingURL=content-script.js.map