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

/***/ 7654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isGoogleLanguage),
/* harmony export */   "l": () => (/* binding */ languageList)
/* harmony export */ });
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
    'pt-PT',
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
    pt: 'Portuguese (Brazilian)',
    'pt-PT': 'Portuguese (European)',
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


//# sourceMappingURL=language-list-DydcRn8U.js.map

//# sourceMappingURL=language-list-DydcRn8U.js.map

/***/ }),

/***/ 1199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony export */   "vocably_icon_reload": () => (/* binding */ VocablyIconReload),
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
/* harmony import */ var _language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7654);



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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bfc98365385d547523368ce4c00790cc68d708ed', id: "content-wrapper" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '6e5adc354bc22ee642a5a8e14c9e9d912000d304', id: "content" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: 'b9e702d1e0107b86a8a8c648554d765fd710b53b' }))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'bf2883b2eae8fcb7ee041ad0cf45eef02a9a1d68' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '7a11cb51a552aebc2799994783ad83aeecd0d30e', class: "button" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'f2f91b92b1d11e3be2f01bd20af1a91542761f1f', viewBox: "0 0 633 699", fill: "none", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cb47dfb022251c1185b4e78b7959a27820233bc1', d: "M585.428 130.443H46.6646C21.2112 130.443 0 150.809 0 177.116V482.609C0 508.067 20.3627 529.281 46.6646 529.281H82.2994V639.599C82.2994 662.511 95.026 682.877 114.54 693.06C122.176 697.303 130.661 699 139.145 699C151.872 699 163.75 694.757 174.78 687.12L352.954 530.13H585.428C610.882 530.13 632.093 509.764 632.093 483.457V177.964C632.093 151.658 610.882 130.443 585.428 130.443ZM150.175 654.874C142.539 660.814 135.752 658.268 133.206 656.57C130.661 654.873 123.873 650.63 123.873 639.599V340.045C123.873 320.527 137.448 291.676 152.72 278.947L320.713 132.989V504.672L150.175 654.874Z", fill: "#0050FF" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '516e47525c0099caec0d7419daeb4b6b88f99405', d: "M524.34 36.2492C524.34 10.7914 497.19 -13.8184 464.949 9.09357L355.499 101.59H524.34V36.2492Z", fill: "#0050FF" })))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: 'c45e6e3114e7dba9913af3b23d7e38ac8a63851b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'b7fbe8aaf4f57719cda880c456fcf8b48541a37c', class: "vocably-card-counter-button", onClick: () => this.onClick(), onTouchStart: () => (this.showedOnClick = true), onMouseEnter: () => this.onMouseEnter() }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '06dff137d29be7168bc4d48677cda9b012ca72ba', class: "vocably-card-counter-previous" }, Number(this.collectionLength) - 1), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: 'a745440215387343744a0f93f49d75fee471c363', class: "vocably-card-counter-current" }, this.collectionLength)), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-counter-explanation", { key: '6d52141b0f89ea81271a4f780739c34a04f2d321', paymentLink: this.paymentLink, maxCards: this.maxCards, onCloseExplanation: () => this.hideExplanation(), style: explanationHiddenStyles, ref: (el) => (this.explanation = el), onMouseLeave: () => this.onMouseLeave() })));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'f9f93ce70cf31206bd05acc06f911d4e82cade24' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '117d0469a0e27d1c90205580cf269059c76ea0e0', class: "explanation" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '770798c1f873777d1c555b0ebb5b24d56599aa8d', onClick: () => this.onClose(), class: "close-button", style: { right: '8px', top: '8px' }, title: "Close" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-close", { key: '79d3b5ba2a9343e7de119a9f8347e2dd0ace3711' })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'c5ece53a6a2cce9be86dc74a13f04a92a7558c0d', style: { marginRight: '8px' } }, "The ", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: 'c5cb56048e0683f3facd1d370031b9d1bc615463' }, "Free Plan"), " allows to save up to", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: '5f06825a8ce3d3c379c4ac8a9863c956d604c7d0' }, this.maxCards), " cards."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '01376eb3230615657e4ff1d34a86f929050ae4d4' }, "After you reached the limit, you will be allowed to save", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: '9fb65c541e4654d82f1737bed71b560d32d35780' }, "one card per day"), "."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'f26c16c1fb5e40333fcd9dbc21ced4ea1b2db47a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '38aae5c674d3cc3e598f35efad49384ee6d96b3d', href: this.paymentLink, target: "_blank", class: "upgrade-button", onClick: () => this.paymentClicked.emit() }, "Upgrade to Premium Plan")))));
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
        this.isLightweight = false;
    }
    renderTranslation() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-translation", { card: this.card, updateCard: this.updateCard, disableEditing: this.isLightweight }));
    }
    render() {
        const definitions = explode(this.card.data.definition);
        if (definitions.length === 0) {
            return this.renderTranslation();
        }
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: "vocably-list" }, this.card.data.translation && (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, this.renderTranslation()), definitions.map((item) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item)))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'd653f505e81cc53fe3de86c4793635d8c600b716' }, examples.length === 1 && examples[0], examples.length > 1 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { key: '5fc2f4c11296f339ff57cadb9722daf3d58649a3', class: "vocably-list" }, examples.map((item) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item)))))));
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
    'pl',
    'pt',
    'pt-PT',
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '107a0acd2038edcffecc86a260468cd7a3bb2e64' }, isGoogleTTSLanguage(this.card.data.language) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-play-sound", { key: 'eab2ac7f51c1ed45aa1b88358e1cca7f11bb0599', text: this.card.data.source, language: this.card.data.language, playAudioPronunciation: this.playAudioPronunciation })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '466de24ce62bc7b72bbc55c2c09a444dd4c845ea', class: "vocably-emphasized" }, this.card.data.source), this.card.data.ipa && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '322faf045eb55724e9039243e8682333060c2743' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '828dba5a1a353342b33a808a21128a25648de634', class: "vocably-invisible-space" }, "\u00A0"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '0e5e47621fd8f2c06b1e1d7199b2e5b809012827', class: "vocably-translation-margin-left vocably-muted" }, "[", this.card.data.ipa, "]"))), this.card.data.g && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: 'e19b1cc1c07e19265b8c802875401bd462bfb7b1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '8371a815d50a0aca2e633cdfa42bab507eaa8763', class: "vocably-invisible-space" }, "\u00A0"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '9f13628e0342d22447f34811733174817f0dc9af', class: "vocably-muted vocably-small vocably-translation-margin-left" }, "(", this.card.data.g, ")"))), this.card.data.partOfSpeech && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '96514658e5178fded5a313c556a450dfef67c61d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '6d0c439a8c0b67fb79641759ff762e4ede0e3b87', class: "vocably-invisible-space " }, "\u00A0"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '8921799a0f15cecbb8fec0bc72353ef4bae38311', class: "vocably-muted vocably-small vocably-translation-margin-left" }, this.card.data.partOfSpeech)))));
    }
};
VocablyCardSource.style = cardSourceCss;

const cardTranslationCss = "vocably-card-translation{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.translation-icon-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:inherit;height:20px}.hover-button .translation-icon-button{opacity:0;transition:opacity 0.2s}.hover-button:hover .translation-icon-button{opacity:1}.translation-icon-button:focus{opacity:1}.text-input{line-height:inherit;background-color:transparent;padding:0 4px;border:none;display:inline-block;width:calc(100% - 80px) !important;height:20px;outline:0.8px solid #bababa;border-radius:4px;margin-right:6px}.text-input:focus{background-color:#fff}.spin-icon{--size:12px;vertical-align:middle}";

const VocablyCardTranslation = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.disableEditing = false;
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
        if (this.disableEditing) {
            return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-italic" }, this.card.data.translation);
        }
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '69518650a42fe0c1a2f38979a6185ffb0ca98717' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'd45886fe6e9a0b2a65e689d686e0a28dbd91d2b7', class: "vocably-close-button", onClick: () => this.close.emit(), onMouseDown: (e) => e.stopPropagation(), onMouseUp: (e) => e.stopPropagation() }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '3d14f458eed78a7de26cb15285d48b6dc3eacb13', class: "vocably-close-svg", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4223d4bf3e396dbd0b23db4de733f1f6ec2bf480', class: "vocably-close-svg-path", d: "M10 0L0 10M0 0L10 10" })))));
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

const firstTranslationCongratulationCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}:host .phone{width:140px}:host .phone-bg{width:100%;height:100%;background-color:#fff}:host .card{position:relative;height:100%;transform-style:preserve-3d;animation:spin 10s infinite linear}@keyframes spin{0%{transform:rotateY(0deg)}45%{transform:rotateY(0deg)}50%{transform:rotateY(180deg)}95%{transform:rotateY(180deg)}100%{transform:rotateY(0deg)}}:host .card-side-wrapper{background-color:#fff;width:100%;height:100%;padding:6px;padding-top:24px;box-sizing:border-box;overflow:hidden;position:absolute;top:0;backface-visibility:hidden}:host .back{transform:rotateY(180deg)}:host .card-side{display:flex;flex-direction:column;min-height:100%;justify-content:center;align-items:center;gap:4px}:host .emphasize{color:#000000;font-weight:bold}:host .row{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:18px;flex-wrap:wrap}:host p{margin-top:0;margin-bottom:8px}:host .small{font-size:12px}.svg{max-width:100px;width:100%}.vocably-list{list-style:outside;padding:0;margin:0 0 0 16px}";

const VocablyFirstTranslationCongratulation = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        var _a, _b;
        const examples = explode((_a = this.card.data.example) !== null && _a !== void 0 ? _a : '');
        const definitions = explode((_b = this.card.data.definition) !== null && _b !== void 0 ? _b : '');
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'a4cb97ced22371b35e19b0e5435453ec12dbcc6c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a873d42bfb06fe49ed70a665701e3bff34a4892e', class: "row" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '2c4334cc7c88450464730b911c1bf56b77a35849', class: "col" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("iphone-16-max", { key: '43a3c39390c8cf246860ec561327115b90b4be62', class: "phone" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '9376b5c5422ef6de3fc86af6d4fe978470af9298', class: "phone-bg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'ee2e61a65ac3e4a39f2198cd09194170c85ffdde', class: "card" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bef421336c235b26a25bbfea16937063f8865d1a', class: "card-side-wrapper front" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '9ad0da06bda11b200c01f12a5778cec570145916', class: "card-side" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '441b96649f9436d2f44a66ebe008165c2073b4bb', style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                columnGap: '4px',
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '21c9f98a252cbf46c735e528d7327fcce2bbed11', class: "emphasize small" }, this.card.data.source), this.card.data.ipa && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '286330bf69f548b3452639bffa71c0f45777b1db', class: "small" }, "[", this.card.data.ipa, "]")), this.card.data.g && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'ebc856998c939622d392a606a1209d5d8396a93f', class: "small" }, "(", this.card.data.g, ")")), this.card.data.partOfSpeech && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '4bd908ee8424e45a0150918daf1e35a7c5d21da7', class: "small" }, this.card.data.partOfSpeech))), examples.length === 1 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '57169e2f17292177d8411a111ee79cf3a6e5e941', class: "small" }, examples[0])), examples.length > 1 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { key: 'c12c7b70a32c9f4fece21245cf59dea75777c43b', class: "small vocably-list" }, examples.map((item) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item))))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'e31a3435c49657594b8f09986536f3ed50f6c743', class: "card-side-wrapper back" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '9200f1398ed8fc45674d1981883032f50a302554', class: "card-side" }, definitions.length > 0 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { key: 'cddc7fb0dec23a73ff5a3ef29cb4ac21b3b283ea', class: "small vocably-list" }, this.card.data.translation && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: 'ca5aa4923c261b9e7839bcc87e2c55769215ec92', class: "emphasize" }, this.card.data.translation)), definitions.map((item) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", null, item))))), definitions.length === 0 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a80a59a24696b95e7f315562216b4001640689b8', class: "emphasize small" }, this.card.data.translation)))))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bc61a0815bfaf4ecae62ac53b3bb154b81540d0b', class: "col" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { key: '897310208341e7a1389fcdc3aa8dd28cb8629915' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: 'b98b5b5ae1ff8e657dd71570d0b77caf66871150', class: "emphasize" }, this.card.data.source), " is already on your phone."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", { key: '32481e8eefceee039b0b86616543984fe75e1a2c' }, "Scan the QR code to learn it."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-qr-code", { key: '6e86bb5374f156a96f9f093d285edb6e4ca7a961', style: { width: '200px' } })))));
    }
};
VocablyFirstTranslationCongratulation.style = firstTranslationCongratulationCss;

const hintSelectorCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;visibility:visible !important;--hint-width:0px}.wrapper{position:relative}.hint{position:absolute;top:0;bottom:0;left:14px;display:inline-flex;align-items:center;font-size:var(--font-size, 14.4px) !important;pointer-events:none;padding-right:4px}@media screen and (max-width: 500px){.shrink-small .hint{display:none}}.vocably-input-select{width:100%;color:#6a6a6a !important;font-size:var(--font-size, 14.4px) !important;padding:10px 14px !important;border:none !important;border-radius:8px !important;background-color:rgba(0, 0, 0, 0.04);outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important;appearance:none !important;background:rgba(0, 0, 0, 0.04) url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important;transition:background 200ms;padding-left:calc(var(--hint-width) + 14px) !important;font-weight:bold}.vocably-input-select:focus{background-color:rgba(0, 0, 0, 0.07) !important}.vocably-input-select:hover{background:rgba(0, 0, 0, 0.07) url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important}@media screen and (max-width: 500px){.shrink-small .vocably-input-select{font-weight:normal}}";

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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '93d7f2bef6cd52b9b0f9fed7a8ba200f34a04fca', class: {
                wrapper: true,
                'shrink-small': this.shrinkSmall,
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { key: 'a644c23051c8f7a05a52a9c3aedb1eef3c89ac25', class: "vocably-input-select", disabled: this.disabled, onChange: (event) => this.choose.emit(event.target.value) }, this.optionGroups.map(([groupLabel, options]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, null, groupLabel !== '' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("optgroup", { label: groupLabel }, options.map(([value, label]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: value, selected: value === this.value }, label))))), groupLabel === '' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, null, options.map(([value, label]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { value: value, selected: value === this.value }, label))))))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: 'fe5296fe9e57b3028c058c194d312299a683a8d7', class: 'hint', ref: (el) => (this.hintElement = el) }, this.hint)));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'd927c4ba545d89ea30029480a83257f322e5bad7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'f71217cb5a57c500438b11614539e7b02b19a802', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '01f447a090213681453692d06953648211af3e0d', d: "M10,17L15,12L10,7V17Z" }))));
    }
};
VocablyIconArrowRight.style = iconArrowRightCss;

const iconBookmarkCheckCss = ":host{--color:#0050ff;--size:24px;display:inline-block;width:var(--size);height:var(--size);visibility:visible !important}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconBookmarkCheck = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'e4ab5d92c7098d5b24515d8c1c77aef99a478570' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'f097b01ec29be867d83123ed5a59e46dcb0f734b', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9eb16ba8181033cbe6b6f6d4a83c21e50e8c364f', d: "M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,14L17.25,7.76L15.84,6.34L11,11.18L8.41,8.59L7,10L11,14Z" }))));
    }
};
VocablyIconBookmarkCheck.style = iconBookmarkCheckCss;

const iconCheckCss = ":host{display:inline-block;width:18px;height:18px}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconCheck = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'f1f0425e1687b861fd6e7d11511e32240ee7a9e4', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '30198f08cb7fb447ab2d72048481216e0bacedd7', d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })));
    }
};
VocablyIconCheck.style = iconCheckCss;

const iconCloseCss = ":host{display:inline-block;width:18px;height:18px}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconClose = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '87dca68dd30231455ead530146093d15c5a6d1f9', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '102901c7fd3f10137588d0aea01348b03f0db610', d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })));
    }
};
VocablyIconClose.style = iconCloseCss;

const iconEditCss = ":host{display:inline-block;width:16px;height:16px;visibility:visible !important}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconRemove$3 = class VocablyIconRemove {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '13e3bc80b1bb61986657dc459cd9048b3576e327' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '2a9ac3206e79222495df4760d1d54615110d397e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a95130f0b701859ac80c5177d97cbad00585cad6', d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }))));
    }
};
VocablyIconRemove$3.style = iconEditCss;

const iconErrorCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#ff5e5e}";

const VocablyIconError = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'e4e088f188a6546e33df6f1cf6fe84dc995e530b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '0c2447e944cd4101343e987d3ee04d00ecb1309c', class: "svg", xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '978ece52e221779eb65db8011e773ae60789c97e', d: "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" }))));
    }
};
VocablyIconError.style = iconErrorCss;

const iconPlayCircleCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#bababa}";

const VocablyIconPlayCircle = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '02729a3074532574404b28bbe3fa4f5d0fcbed74' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '62813cad6aed2969a8365f3705a5bb801d47ebf5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0520cd2d5f23be76c2c2ee351e3152a7c41ddf9e', d: "M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" }))));
    }
};
VocablyIconPlayCircle.style = iconPlayCircleCss;

const iconPlusCss = ":host{--color:#0050ff;display:inline-block;width:24px;height:24px;visibility:visible !important}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconPlus = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'a109a973abebfd749bd115a575e27d589a042157' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'b7d3c20965243a56af3acda92b13edcd3ab26f38', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '74940bab76dc73deaa40e5dc0e323ccb6006a0b1', d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }))));
    }
};
VocablyIconPlus.style = iconPlusCss;

const iconReloadCss = ":host{--size:18px;--color:#0050ff;display:inline-block;width:var(--size);height:var(--size)}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconReload = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'd4abff7cba2e813132e4f7f42d4a96bdcd89789c', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", { key: '53a59dbd64a5d240549988bddfc9c6724fb77eeb' }, "reload"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b3666e9a21232500b74d4a817bba889b743d034f', d: "M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" })));
    }
};
VocablyIconReload.style = iconReloadCss;

const iconRemoveCss = ":host{--color:#ff5e5e;--size:24px;display:inline-block;width:var(--size);height:var(--size);visibility:visible !important}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconRemove$2 = class VocablyIconRemove {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '7067cd83aafc855227c1c4a06e8a1e0c686ce2a4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '869d50c5b62183526c24ab3d44d7ec6a6b864e07', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e3aa8347889c16347d68e647510f09b1577085cf', d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }))));
    }
};
VocablyIconRemove$2.style = iconRemoveCss;

const iconSpinCss = ":host{--size:24px;--color:$v-light-color-body;display:inline-block;visibility:visible !important;height:var(--size);width:var(--size)}.svg{width:var(--size);height:var(--size)}.svg circle{fill:var(--color)}.spinner_VpEe{animation:spinner_vXu6 1.2s cubic-bezier(0.52, 0.6, 0.25, 0.99) infinite}.spinner_eahp{animation-delay:0.4s}.spinner_f7Y2{animation-delay:0.8s}@keyframes spinner_vXu6{0%{r:0;opacity:1}100%{r:11px;opacity:0}}";

const VocablyIconSpin = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'dbfeb957cedd792d5cc7525989d0d04c9ec6fe93' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '3de72130bfb5b7220d8334c2fb70e48ecdf11ca2', class: "svg", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { key: '5b2afde91692e5c2eb3ee0a17289c0f9e598d367', class: "spinner_VpEe", cx: "12", cy: "12", r: "0" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { key: 'a0837a75ca6d0194cf9925fe1b91bea186f216fd', class: "spinner_VpEe spinner_eahp", cx: "12", cy: "12", r: "0" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { key: '77cc407870e11b5fee0fd57b27706a4cc8470467', class: "spinner_VpEe spinner_f7Y2", cx: "12", cy: "12", r: "0" }))));
    }
};
VocablyIconSpin.style = iconSpinCss;

const iconTagCss = ":host{display:inline-block;width:24px;height:24px}.svg{height:100%;width:auto;fill:#0050ff}";

const VocablyIconRemove$1 = class VocablyIconRemove {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '5ecbe349175944de098412f9d4f1038850695129', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '55cb5d85e4c8aad5bac9d136929a8d97d653d2c6', d: "M21.41,11.58L12.41,2.58C12.04,2.21 11.53,2 11,2H4A2,2 0 0,0 2,4V11C2,11.53 2.21,12.04 2.59,12.41L3,12.81C3.9,12.27 4.94,12 6,12A6,6 0 0,1 12,18C12,19.06 11.72,20.09 11.18,21L11.58,21.4C11.95,21.78 12.47,22 13,22C13.53,22 14.04,21.79 14.41,21.41L21.41,14.41C21.79,14.04 22,13.53 22,13C22,12.47 21.79,11.96 21.41,11.58M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M10,19H7V22H5V19H2V17H5V14H7V17H10V19Z" })));
    }
};
VocablyIconRemove$1.style = iconTagCss;

const iconTagEditCss = ":host{display:inline-block;width:16px;height:16px;visibility:visible !important}.svg{height:100%;width:auto;fill:#6a6a6a}";

const VocablyIconRemove = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '071fa39462da949ca646fdfaf1edbca52b9fc58b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'a91cbb2e5527bd8a06d3e22b20353a5c4a84e10f', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1e2cf95c10b82ddfed58c2beef636c1476f96f3a', d: "M12.41 2.58L21.41 11.58C21.77 11.94 22 12.44 22 13C22 13.55 21.78 14.05 21.41 14.41L14.41 21.41C14.05 21.77 13.55 22 13 22C12.45 22 11.95 21.77 11.58 21.41L9.45 19.28L10.7 18.03L10.7 18.04L13.11 15.62C14.11 14.63 14.11 13 13.11 12L11.83 10.74C10.84 9.75 9.23 9.75 8.24 10.74L8.07 10.91L8.06 10.91L4.57 14.4L2.59 12.41C2.22 12.05 2 11.55 2 11V4C2 2.89 2.89 2 4 2H11C11.55 2 12.05 2.22 12.41 2.58M4.44 6.56C4.72 6.84 5.1 7 5.5 7C5.9 7 6.28 6.84 6.56 6.56C6.84 6.28 7 5.9 7 5.5C7 5.1 6.84 4.72 6.56 4.44C6.28 4.16 5.9 4 5.5 4C5.1 4 4.72 4.16 4.44 4.44C4.16 4.72 4 5.1 4 5.5C4 5.9 4.16 6.28 4.44 6.56M10.7 15.35L11.7 14.35C11.91 14.14 11.91 13.79 11.7 13.58L10.42 12.3C10.21 12.09 9.86 12.09 9.65 12.3L8.65 13.3L10.7 15.35M8.06 13.88L2 19.94V22H4.06L10.11 15.93L8.06 13.88Z" }))));
    }
};
VocablyIconRemove.style = iconTagEditCss;

const iconVolumeMediumCss = ":host{--logo-color:#000000;display:inline-block;width:18px;height:18px;vertical-align:middle;visibility:visible !important}.svg{height:100%;width:auto;fill:#bababa}";

const VocablyIconVolumeMedium = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'cc5a9ef9efb6a476b86f3a0714a2f25301709e1e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '01cfb640070807b33ada77cf68799d48293dc998', xmlns: "http://www.w3.org/2000/svg", class: "svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '35af0e67b6d26b4d7b0d0e8d015ca043cd75c2ba', d: "M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" }))));
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

const languageCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:block;visibility:visible !important}.container{display:inline-block}.p{margin-bottom:16px}.h1{font-size:26px;margin-bottom:16px}.button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important}.button:hover:not([disabled]),.button:focus:not([disabled]){background:#0047e3}.button:active:not([disabled]){background:#0047e3}.button[disabled]{background:#bababa}select{color:#6a6a6a !important;font-size:var(--font-size, 14.4px) !important;padding:10px 14px !important;border:none !important;border-radius:8px !important;background-color:rgba(0, 0, 0, 0.04);outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important;appearance:none !important;background:rgba(0, 0, 0, 0.04) url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important;transition:background 200ms}select:focus{background-color:rgba(0, 0, 0, 0.07) !important}select:hover{background:rgba(0, 0, 0, 0.07) url('data:image/svg+xml;utf8,<svg width=\"11\" height=\"7\" viewBox=\"0 0 11 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 1 5 6 1 1\" stroke=\"rgb(109, 109, 109)\" stroke-width=\".5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/></svg>') no-repeat !important;background-position:right 14px top 50% !important}";

const VocablyLanguage = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.confirm = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "confirm");
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'b72e3c8aa2a0b2c1861e3bb5fd9dadda1d725e58', "data-test": "language" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'dd6461625f613d182595c7f6a5c954d12fc61f15', class: "container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'dcf9b2948576706dde3564744151fe168c1bf638', class: "h1 p" }, "I study"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '76fbdbacf751dbccaf59c0fba1d1d4d5db8937e3', class: "p" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { key: 'ddfe53fa8c2c814830de1ffd9b9e7c66bd59e94b', "data-test": "source-language-selector", ref: (el) => (this.sourceLanguageSelect = el) }, Object.entries(_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.l).map(([code, name]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.sourceLanguage === code, value: code }, name))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '60125b3b44a0bcca5428d1c23908970a79ea5580', class: "h1 p" }, "I speak"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'f5257356223a28a177f01b7ba0c2d18b57c57fc8', class: "p" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("select", { key: '78f03049def423e1d048ccbd729b6bd632194041', "data-test": "target-language-selector", ref: (el) => (this.targetLanguageSelect = el) }, Object.entries(_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.l).map(([code, name]) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("option", { selected: this.targetLanguage === code, value: code }, name))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'd416244c84da97c12981d6aef092aca899c5a58d', class: "button-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '81c1918292037d09eecc3af43bd923e264368c64', class: "button", onClick: () => this.confirm.emit({
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'dff3d17c4167ba4208d18a541e21836c2621df04' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '1dcd16cf4bf5169589bba7dfa65738d7a6f4f2b2', width: "1086", height: "258", viewBox: "0 0 1086 258", class: "svg", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '370b8b085845918b5296eed9a7016fa7dc6a9d93', d: "M363.813 199.05L323.32 50.7578H346.993L378.453 178.8H379.699L411.159 50.7578H434.831L394.338 199.05H363.813Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7b315cdd373f70ea88eb42be953544142d419848', d: "M494.948 201.853C482.488 201.853 472.832 199.361 465.668 194.065C458.504 188.769 453.52 181.292 450.406 171.634C447.291 161.977 445.733 150.45 445.733 137.054C445.733 123.658 447.291 112.131 450.406 102.473C453.52 92.8152 458.504 85.3385 465.668 80.0423C472.832 74.7462 482.488 72.2539 494.948 72.2539C507.407 72.2539 517.063 74.7462 524.227 80.0423C531.391 85.3385 536.375 92.8152 539.178 102.473C542.293 112.131 543.539 123.658 543.539 137.054C543.539 150.45 541.982 161.977 539.178 171.634C536.375 181.292 531.08 188.769 524.227 194.065C517.063 199.361 507.407 201.853 494.948 201.853ZM494.948 183.784C499.931 183.784 503.981 183.161 507.407 181.915C510.833 180.669 513.325 178.488 515.506 175.061C517.686 171.946 518.932 166.961 519.866 161.042C520.489 154.811 521.112 147.023 521.112 137.054C521.112 127.085 520.801 119.296 519.866 113.065C518.932 106.834 517.686 102.161 515.506 99.046C513.637 95.9307 510.833 93.4385 507.407 92.1924C503.981 90.9462 499.931 90.3232 494.948 90.3232C489.964 90.3232 485.603 90.9462 482.177 92.1924C478.751 93.4385 476.259 95.6191 474.078 99.046C471.898 102.161 470.652 107.146 469.718 113.065C468.783 119.296 468.472 127.085 468.472 137.054C468.472 147.023 468.783 154.811 469.718 161.042C470.652 167.273 471.898 171.946 474.078 175.061C476.259 178.177 478.751 180.669 482.177 181.915C485.603 183.161 489.964 183.784 494.948 183.784Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7b9c0aa6a7938a42ffe88a67d4ad3caa56b04064', d: "M622.033 201.853C612.066 201.853 603.033 199.673 595.246 195.311C587.459 190.95 581.54 183.784 577.18 174.126C572.819 164.469 570.638 152.007 570.638 136.43C570.638 123.657 572.196 113.065 574.999 104.654C577.803 96.2423 581.852 89.6999 587.147 85.0268C592.131 80.3537 598.36 76.927 605.213 75.0578C612.066 73.1885 619.23 71.9424 627.017 71.9424C633.247 71.9424 639.165 72.254 645.083 73.1886C651.001 74.1232 655.673 74.7461 659.1 75.6807L656.608 93.4385C653.493 93.127 648.821 92.5036 642.903 91.569C636.673 90.9459 630.443 90.3232 624.214 90.3232C618.918 90.3232 614.558 90.6344 611.131 91.569C608.016 92.5036 605.213 93.7499 603.344 95.6191C600.541 98.423 598.36 103.408 596.803 110.573C595.246 117.738 594.311 126.461 594.311 136.742C594.311 146.088 594.934 153.877 596.492 159.796C598.049 165.715 599.606 170.077 601.475 172.881C603.344 175.996 605.213 177.865 606.771 179.111C607.705 179.734 609.262 180.669 611.131 181.292C613 181.915 615.804 182.538 619.23 182.538C622.968 182.538 627.017 181.915 631.378 180.98C635.739 180.046 639.476 178.8 643.214 177.554C646.952 176.307 651.001 174.749 655.673 172.569L662.215 189.392C655.673 193.13 649.444 196.246 643.526 198.115C637.607 199.984 630.132 201.853 622.033 201.853Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'da8856d5dfbdccdcb912860504bc1a7517e80aba', d: "M714.855 201.853C708.314 201.853 702.396 200.296 697.412 197.18C692.117 194.065 688.068 189.392 685.264 183.473C682.461 177.553 680.904 170.388 680.904 161.977C680.904 151.696 683.084 143.907 687.133 137.988C691.494 132.38 697.412 128.019 705.199 125.527C712.986 123.034 722.019 121.788 732.298 121.788H752.856C752.856 114.935 752.545 109.327 752.233 104.965C751.922 100.604 750.676 97.177 749.119 94.9962C747.873 93.4385 746.315 92.1921 744.135 91.569C741.954 90.9459 739.151 90.6346 735.725 90.6346C730.43 90.6346 724.823 91.2577 719.528 92.1923C714.232 93.1269 709.249 94.373 704.888 95.6191C700.527 96.8653 695.543 98.7344 690.248 100.604L684.018 83.7806C689.625 81.2883 694.609 79.4194 699.281 77.8617C703.953 76.304 709.249 75.0577 715.167 73.8115C721.085 72.5654 727.003 71.9424 733.544 71.9424C743.823 71.9424 752.233 73.8114 758.152 77.5498C764.381 81.2883 768.742 86.5847 771.234 93.4385C774.037 100.292 775.283 108.392 775.283 117.738V199.049H760.332L757.217 185.965H755.971C755.037 186.588 753.168 187.834 750.676 189.703C748.184 191.261 745.069 193.13 741.331 195C737.594 196.869 733.544 198.426 729.184 199.984C724.511 201.23 719.839 201.853 714.855 201.853ZM719.839 182.85C724.511 182.85 729.184 182.227 733.544 180.669C737.905 179.111 741.954 177.554 745.381 175.996C748.807 174.438 750.987 173.192 752.545 172.257V141.104C751.299 140.792 748.807 140.481 745.069 140.169C741.331 139.858 736.659 139.546 731.052 139.546C718.905 139.546 711.429 140.792 708.626 143.285C707.068 144.531 705.822 146.711 704.888 149.827C703.953 152.942 703.642 156.992 703.642 161.665C703.642 169.142 704.888 174.438 707.38 177.865C709.872 181.292 713.921 182.85 719.839 182.85Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c349579aa18a3d32e0a97a151a2b5b1781fddf28', d: "M860.63 201.854C856.58 201.854 851.597 201.542 845.678 200.607C839.76 199.673 833.842 198.738 827.612 197.492C821.694 196.246 816.399 194.688 811.727 193.442V38.6079H834.154V76.6157C835.711 76.3042 838.203 75.6811 841.629 75.058C845.056 74.4349 848.482 73.8119 852.843 73.1889C856.892 72.5658 860.941 72.2541 864.991 72.2541C878.073 72.2541 888.04 77.2388 895.204 87.208C902.369 97.1772 905.795 113.065 905.795 135.184C905.795 148.892 904.549 160.108 902.057 168.831C899.565 177.554 896.139 184.408 891.778 189.081C887.417 193.754 882.745 197.18 877.138 199.05C871.532 200.919 866.236 201.854 860.63 201.854ZM860.007 182.85C863.433 182.85 866.236 182.538 868.417 182.227C870.597 181.915 872.155 180.981 873.401 179.734C874.646 178.488 875.892 176.308 877.45 173.504C879.007 170.7 879.942 165.715 881.188 159.173C882.122 152.631 882.745 143.285 882.745 131.758C882.745 120.231 882.122 111.508 881.188 105.9C880.253 100.293 878.384 96.5542 876.515 94.9965C874.024 92.8157 869.351 91.5693 862.187 91.5693C855.335 91.5693 849.416 92.1926 844.433 93.4388C839.449 94.6849 836.023 95.6196 834.154 96.5542V180.046C835.4 180.357 836.957 180.669 839.449 181.292C841.941 181.915 844.744 182.227 848.17 182.538C851.597 182.538 855.646 182.85 860.007 182.85Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3b59354b68b0851ab8df9eecb8ddecf7b1c12874', d: "M939.435 199.05V38.2964H961.862V199.05H939.435Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bd706cc855e0cdddcb3ace3a9b6b2b0411304ab7', d: "M1007.03 234.565L1024.16 187.212L983.977 75.0581H1007.34L1034.13 163.223H1035.06L1061.54 75.0581H1085.21L1042.85 192.196L1030.39 234.877H1007.03V234.565Z", fill: "#212121" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e6050fd4118dbdd76886fd677ab40c5645240792', d: "M216.928 48.8888H19.1319C9.78725 48.8888 2 56.3657 2 66.0235V178.178C2 187.524 9.47576 195.312 19.1319 195.312H32.2145V235.812C32.2145 244.224 36.8869 251.701 44.0511 255.439C46.8545 256.997 49.9695 257.62 53.0844 257.62C57.7567 257.62 62.1176 256.062 66.1669 253.258L131.58 195.624H216.928C226.273 195.624 234.06 188.147 234.06 178.489V66.3349C234.06 56.6772 226.273 48.8888 216.928 48.8888ZM57.1337 241.42C54.3303 243.601 51.8384 242.666 50.9039 242.043C49.9695 241.42 47.4775 239.862 47.4775 235.812V125.839C47.4775 118.673 52.4613 108.081 58.0682 103.408L119.743 49.8236V186.277L57.1337 241.42Z", class: "primary" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b3b8a76e6a6838d9b7380d9a1224d26b6aa54b01', d: "M194.501 14.308C194.501 4.96178 184.533 -4.07308 172.696 4.33847L132.514 38.2963H194.501V14.308Z", class: "primary" }))));
    }
};
VocablyLogo.style = logoCss;

const mobileButtonCss = ":host{display:block;visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important}.button{color:#000000;display:flex;border-radius:19px;line-height:19px;background-color:#fff;padding:8px;border:none;cursor:pointer;box-sizing:content-box;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(0, 0, 0, 0.6);user-select:none;-webkit-user-select:none;transition:all 0.2s}.button:active{box-shadow:0 3px 10px rgba(0, 0, 0, 0.4)}.button .svg{height:17.1px}.button .caption{margin-left:8px;white-space:nowrap;overflow:hidden;font-size:16px;animation-duration:1s;animation-name:slideIn}@keyframes slideIn{from{max-width:0}to{max-width:100px}}";

const VocablyMobileButton = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '2d943c7d117263b3701e4464f1ded38e6c44fde4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '7f5fe3b8a9022f32e442342bc039430c80261d53', class: "button", onTouchStart: () => true }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'cef2d2d9fa0db1453effa265ba919a568d584214', viewBox: "0 0 633 699", fill: "none", class: "svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '035845aad4f3cc3cc838221ab22381c14969ec8e', d: "M585.428 130.443H46.6646C21.2112 130.443 0 150.809 0 177.116V482.609C0 508.067 20.3627 529.281 46.6646 529.281H82.2994V639.599C82.2994 662.511 95.026 682.877 114.54 693.06C122.176 697.303 130.661 699 139.145 699C151.872 699 163.75 694.757 174.78 687.12L352.954 530.13H585.428C610.882 530.13 632.093 509.764 632.093 483.457V177.964C632.093 151.658 610.882 130.443 585.428 130.443ZM150.175 654.874C142.539 660.814 135.752 658.268 133.206 656.57C130.661 654.873 123.873 650.63 123.873 639.599V340.045C123.873 320.527 137.448 291.676 152.72 278.947L320.713 132.989V504.672L150.175 654.874Z", fill: "#0050FF" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '19e824e0cdb57b4605f86d02b04be3db891a0b82', d: "M524.34 36.2492C524.34 10.7914 497.19 -13.8184 464.949 9.09357L355.499 101.59H524.34V36.2492Z", fill: "#0050FF" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '73f18d029b303624edfefb8b7adc1a556959894a', class: "caption" }, "Look up"))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '7c98ec9c96b981b08d10fa3e7b9b62d0fd79b67a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '26f2bf6cef60ff635b74fb40c44e7d01b715422e', class: "backdrop", ref: (el) => (this.backdrop = el) }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a85b5024619df94f5bd32713d8b104574130337c', class: "overlay", ref: (el) => (this.overlay = el) }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: '44228ce4d65a1784c8130f6d28b973dbf34d389f' }))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '13f88b13cdc9875fb971ee0bc3fe088ea8bd35ca' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '251f4a4708e035f1a36d0acb3002027e74f9da36', class: "vocably-play-sound-button", onClick: () => this.play(), disabled: this.isPlaying || this.isLoading || this.isPlayError, title: this.isPlayError
                ? `Unfortunately, Vocably is unable to play the audio pronunciation on this website due to its security policies`
                : undefined }, !this.isPlayError && !this.isLoading && !this.isPlaying && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-play-circle", { key: '729477a4fc9e178fd7f976e4d7563071d7da4db8' })), !this.isPlayError && (this.isLoading || this.isPlaying) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-volume-medium", { key: '2d670d3a057a826019f73fd35e4737f467cb92af' })), this.isPlayError && (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-error", { key: '49f05e434deb320ec0a46b8bb1a4c8d0ca09c37d' }))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '00a40a897ac2a088390c6873692e5138f02082a1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'e437148c9c86861ef92baac2b68ca5f33f8d66cf', class: "popup" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'c491aec2147ca2d2ab6ca7eb871b51a5e02cb6c4', class: "body", id: "body" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'd3ebcf89fff11da74820f801dd8c4c10b54091ba', class: "content-wrapper", id: "content-wrapper" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '47f2b25305fda9740152d095915417c5ea5014b4', class: "content-unlimited" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'f140ec5fc8f75f08fefce402a302bd9983cd2fc5', class: "content", id: "content" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: '55cafe265d813d0a7c937f2a7e3b228f722493d1' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '86df09b114634fdc728a1e33f21dd7979c261936', class: "header" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-logo", { key: '2072309fa012849be026314166292de3cac22297', class: "logo" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-close-button", { key: 'd420d292970eb3008e1a5b7aa9a2696ac20a2e5b', class: "close" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '011d72ba3d985cfcd01eec6b7c133e238dc5d04d', class: "footer" }))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '80d2e9248aea020a20685710c49bcf7a3bfead8e', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1023 1023" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4c8734070c9e3aef3f01c839e9fd99394e6efa20' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4434d05e9e25ab0f6d6b0e8a29cfa66cd2bc55e6', transform: "translate(248,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b7a69db8b15d0bc8c54b589f3956db51ad4eb2a5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '368df9a473e58a9ea7821fd25bf612b1c5ebd578' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '01ed25b6398995b82de183722426eaef3186f879', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '099af33d68a30df22593eb91316a14569d9b93fb', transform: "translate(279,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '45d3d950c931440c4122e3a797cccd64744d43ca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e7979d7aec7f8220b3c9b2ce4e2d15f297ee798c', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fd710be458a874579a09cb37917ba8d577f62254', transform: "translate(310,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ce465ac22f6b1aec172d4dd8d2b1ce86d1edcc95', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9418e99052af2bbc98e561c8b7fd69d38121ce44' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e17f4aae0d1903212e0ff79a71274ad742e34790', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7259466a33e8c5535f0252220a08fdf54bf42440', transform: "translate(372,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '451e66d80344960665ad9ec267304937720e6a7b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ab1eca8a2bf160e7e419d9893c791988e0517cee' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '490246f90637bf2ab23b567c770a996cdca36dd6', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2b9dc6215c8d5cd082d4a4ecc9a65304f8986a3b', transform: "translate(527,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8cf0e17f5ac6904ea155614fb824f155d8714330', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e37bdbfcdcca75c35a5116c4c7dfbc84e4484cc9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '621628eca29d3973e8a2ef7c27b5b02f61f5801a', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a30ffbe198e38063bbb8ba7cb89c501b9f0b9952', transform: "translate(558,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7b0d8195ad93c2f2f343527d3422c044dbf36ff4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39a8742fbab62951ced9130f645dbcad9ad4dd94' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b0655e6f12e209a9c3955efcf4ab2505fc36bec2', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0dd083ebd265eff6f5b0e546a670b51dd04b60ce', transform: "translate(713,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10752aa9a542ecaacc9b48498c9accd96982a8ad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '56a7f4a51627e00a5d4513f6267568e77135af79' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ce348bff230564a9df5eb8e082df5e4639501e93', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49e7346ace8aeac6d8adcf9b5f4c2cf317d8ad4d', transform: "translate(744,0) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b2dfe6aaf4b661649a3f883efd4673b6feecfd2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e3cc9ac27186c694649a461d9c6d56cee3b0fec' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8c8ae04b840c1dfc834c3460a64dc13c35b83317', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1bdc31cee028fcb1a8152e936c67dccc4e6ff2e2', transform: "translate(248,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '35cc854aef1f6044cf12dbae44d56c1aa645a7e1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'dfc76236c34a2addac02209b0dbf6cdc5629efe7', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a30cc0af80f71de876c0770172cc39b36231edd0', transform: "translate(341,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cbdc76428a41b707c041a691f1537aee00b43c3e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eac572f8e266f1d9dcdae103282a6ee2f0400d9a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e5fced469c4112b86e156d8cf99bde22ed59e6c6', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0b83ae4edf387531a88ed43386914cf3e55b2e3d', transform: "translate(372,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5fcb4fce21653a8b0bae696c3030ce638737e0a2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd4a7e0741149d0a45bbe950e6814313ef224d0eb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a978ac721944ed8c69e100e62292581652e74b7d', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e5a02aa524b14b75396a6e982e214af5d2a4ae28', transform: "translate(465,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd6bf7d694c649b501053ece56e89563f22744a78', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b26d22ff77ed22bc8b36711255fe47401a3bd362' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f39a80a5fd872e3967cd906b78279089010e1f47', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '79fb2a524d587e512788bef185ccd9b154f0c18e', transform: "translate(558,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '72b2b1d82795329f51d8d478583d9c3935c85f15', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b6238df3425af485db470a29d7bd181dc9b42ff5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '39b4c6437cfd6a868bc66840cc8f1f84e05023da', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '32eb713b3e34a2fc9b80f1dd8be3080911ca9593', transform: "translate(589,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e7b26cc0b5eaad9eb26dbb2c2ce107e611a343db', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '383ef1ff7c5283f04098fab0c276630dae01045b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'de638af1fd247545ce995dc7c2c440ab1a06bff2', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5ffe06d6bcda1b725d298925623698d293185df7', transform: "translate(651,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4c84daba99dda935acf1ae6606636a7e10b99f2b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0399a0a461de61731bf2910b6773b511b17c69a9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4254e777e4141cde77956aa635d991d9242dd8bf', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '21f0beefa852417c15d85b75993a55d73d477153', transform: "translate(744,31) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '36be3f7c934c0a1ee859cac0d9372ccf5931a470', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e8f37be2aca94608cb3f2913d23404b6585bd19b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b7f46c6ac9f91c104e62eb6380d617da2059a61b', transform: "translate(248,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7893df85449677c5bf3e293cae1f9ee8e76cd22c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '03e2ec1d48d67c031019038386aaa19f14373ae4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e7aae2505c5eb8614d8b25ca3098a4c371bcde45', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e38ad16a4df58503bb2f57617f49bb95ab8c4353', transform: "translate(279,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b85a2d16a510f727b04c7d9f3a0da190f669934', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2ddb580b0520d3d63e47510227425f25dbc26165', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f64873c93761d8351a14473b5514de7673d70bf', transform: "translate(310,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1cd7ae890ad5e4dc2b29860a1344c94190d082ca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd6693afa9456dc8e6b20737cb3c45ad69d4aa245', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '97f629fd67a437faf56bb1ca5ec9428f3ffbc08d', transform: "translate(341,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e36c244126ada26b7ae5ec6b2f477023a2e078b5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1cb7529bb1712c28b2122b504114084baf0e9e19' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5e190bef83fa64d83f83ecf9cc6e9161efd2e8c7', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8cde511e580f4f8d3a0e06b67fbd984adc5ff632', transform: "translate(434,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'afa4e483806bac776740313c5fa7b163e41dfe40', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e396acfde8ad68802bcbe7427fdb6d809520d8a3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd348a92eac8276528c9731cca46cfa139cd973be', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a17ba6d18b07837b9ce9b88fd54ea5f235526229', transform: "translate(465,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '03fc0054ea4e790ac75311cb511d0472ec6d5665', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eeae8cf5728ffc04748e512b9eeecae1bab30cd1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '25c1182a2c5f0a9ff20bcc0ae766fc67b5345900', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c698588db46903e3996805e224d5cf0b2fef3e28', transform: "translate(527,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ceeafdb2d096cd6c4f4b83c54d9f8cbec4229508', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0cdb6042ac19d3aedf7438190e7a768c02230329' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cd07323aa463b2a2d50b3ae3918864258e630ca3', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4862d809daac3bd117c3d6077c2f64a0cd65dcb7', transform: "translate(620,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8291731d78566182fb55ffb55909a56ff841f8de', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '876009a60cb187ff6654871deae5780fb8022bee' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3f838706441cdf049780ff171ae479d6e67be52e', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1417988d51b60fe4242d5acdb168ac704369c62a', transform: "translate(651,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e317ea6bb00e9c3fe5e3a78f7c22adfb76a87c23', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3a09371f14e80bb8d07365c087ed44abf8fa2cad', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b6175637b6b1ebca4e3db33feb565bba63edb120', transform: "translate(682,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a213b3af3bca8e9ff16c61ce47eb14623efcdcc2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4e51512f854a90268a7c29f55ed691863343a2f0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '59ee7649583a8f8ab7b8a2e0f2a2f95ce0f0d091', transform: "translate(713,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b73d0941a45e461de93b60babd13a05d57c8fa29', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'cae65d29267c582396608a29d77be970c8737cf9', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b89fa29f6a2868169d23d3a44467bd76caa6bcd1', transform: "translate(744,62) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3c81195ca9c153ac114f4f92b46a16f84e4332b5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b0f4597a98333cbb601966e9aea7eb71492a9bc2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3aff51d6c74e232bb180e006ccf96859e9fffb2f', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f0591318e6f5d9351f99746848e61d3167c91b2e', transform: "translate(279,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a6818e4a0bf0fe5cda0c4d495090ab9531afd0c2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e0e220caf5deb26a5f6a992a4e854de78521d844' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3b66af39db0f7be2b885c93bed9cacfc7cf80436', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4a554567d8f6f441465ec8ec0116fb7c2e01f939', transform: "translate(403,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eef304aff0225595461ee71ceefb99af296b19cf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '56ed319e3dabf96e3cec415d046401bb31583e59' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3247ed9154f92176610dd66e1206db96d71b95a1', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd361ed963af87468dc03a56209c28cbfb42211f8', transform: "translate(496,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3dcebfff828651f5c2e6a16304a18dc7a7a3ace6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '47f572cec356c165d42991c82d85662c27b0b308' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5fbdbbde1e81b4440890eee9a669dce870c54b60', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a12e5bafcbcd0b7aa1f08b0ac71ec58aba9c4be6', transform: "translate(589,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c665fa6872f1a50f9437d03046f122bae06b61cd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6a0b62d395c8658a798fe3a5c11c4259c603e4b6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dd6dcee5930cf550cd5bac5a9e0756b4e9afd5a0', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1d57327b3f9b05d0a9a58c723c3cdaf9e1b9f609', transform: "translate(620,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '05370b46d823ab6e2f9593fa9ff21211f5212ed8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'daf8700f9b48d5e0cf1cf926180b70623bde5bdf', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0178c47368f958f1502f75305cc460a50e72dffd', transform: "translate(713,93) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b2583bcb996f0390c39b4eb508542d3b37191f59', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f504a5084ae9a93f35b56ac0cd6e56027a6ef713' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '10d3ada74a39e47ace70f9d5d143e2994370a9a9', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9335a3b04ff6b9ed5c1eefb8a1ec3c0540dadb3e', transform: "translate(403,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '421402c31e0da0dc73caf9021a35d682cb24be81', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '42989dcf68fd7d347832e80c8792614433d773a7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e823c37d3b075f2c9c3e2588674048f377ead0a2', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7919c836aeb6f4f72e4d4d28d7296ee1f7f6264e', transform: "translate(465,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9d738187a65efa6f187e0c742981ffb293fda3e4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1b1ed6c2e59f53cefe17ed1d25bcbaee0c28d3ff' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b95ab7b82cf5efbd05712539c796dad1a794843c', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3e803334e54a4f3743e598334207cf3525fe5e1e', transform: "translate(496,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ad4c242534b280c32f0c9b47435140d97ddc0107', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4413c635daf494b9c071b1f9379fac41737ada24' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6545ba23f405cca44aff3ebbdba6d7a6400b5108', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a7fc5a2730d24ad1a354920d6c9889e7cf0ce6d1', transform: "translate(558,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b3d2503135030e25c7dd0da889abdada63bf9f95', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '83869bc1c9167bc19e9a852931a7ecc1226cc983' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a5f2edd0015cc8c6922807cb288e5b761b1b7300', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '136b5a0a0f2afb5a2d6d64a5deb2cf1d5d4b590a', transform: "translate(620,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dda9694d040339b9776364cf3fbeb5d3dddf52f2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e6f3267a22d3b4bbf274f137e65f04fbba4c0297', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f8b9b7918c23c08b983305eef2b194f7a7981b9d', transform: "translate(744,124) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '33fdb7abda036c6405eb82ca07653c65d57bf350', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c980239c62f3bda760509be56a05b4bc71fc1056' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '819dd0e27185c897e6fa88935d9250996f9c4525', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b3b9c9411f56ef9a3a21766cf0e5cc2c891328c1', transform: "translate(248,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd9afff3ac088128d650f2b105b6fe15f86f7e11d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1e432a386df76a2db36c2f3201bc1fe3405969ff' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1814a1c9bc43f8b51ae01b72dfc363b5f064a07e', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6bcacee6789eb9b71b83dcc32e685ba22211d23d', transform: "translate(279,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '25318cb420f470918b8473a97499b38df5db0d46', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0b133d84b73c9ff49ac57ec2b36c09b4ea26d87e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'adeef25f1c68dc98490320dd29829334bbc842f9', transform: "translate(310,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '749599965527483b9a8a892b03cb80ae389b6dc8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a54771af7f27db9af3033713f5dd1f4c8089daa0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3302d195dfbcddcf1e8ba1d60d998a74745f023f', transform: "translate(341,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '346f209b9b1480469000ed7da2758834254daf8d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '63209fdfc9cc7babe5add5b189cff5acf5c1fe50', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '77dd8ceb147e907dde2848cf82dfc98f67f1f321', transform: "translate(372,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0771dcc3f5fa5eac90b65e870ecf61c187c95a63', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '45e4ed0bafe3478082bb83d0852fbd3ccdc011a7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'aeb5ffe7a500b48ef9f3425b55d491d1f921945b', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7bebecd63711aaaa7439c07d92f46c2ef3dd53eb', transform: "translate(434,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '50fd92b68102bef05d5309c84c4eae9286e6e08d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d87d18388da48ce49b2a4becc6d86d3c517a88b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'aceb560294ba2f215499bcdc0f0e425ca7189400', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9a7714216c20f09deed646b07e113b67025ff334', transform: "translate(620,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0b422005a773d1604967eb3f2db7b881f55db243', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '005f6217955e09699609102712af10f60d62a338', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '439b3645ec1d3775df56bfdfde6b118f98cfc234', transform: "translate(682,155) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a2f9edcaee7cdbc12fefa01be363841c4fab08de', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4fae6f9dc73a7a0d0db965c425221bc551cfece2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2afb115b2a97b9da10a48118f7f2586c4e010a2e', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a9a42bbe31c5875a555a7693435893f63d90dac1', transform: "translate(248,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a40b5b8912b732143db48de18a9ab9ae0d96554d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'aefecc6a553939f8b519be45585c4b74fc4349ef', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'babd79965a04ebfe92a4d1283a91b7589df90f2d', transform: "translate(310,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '55acdd2da0dfff86cec93cccf67ac03ecc65b6da', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e07148a6f73935775f19f2f3f14a74bd1c676db9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3788fdff38c57edff2d08b8bd8e61c33d4fb621a', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a2ce27d3042afc1b335bf66d323bb117a9e4276', transform: "translate(372,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '65bed4207f023fc1732207f7ae00f83ccaa0074b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '7cc0424cdccf005631f433968232327f0bc751a0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '70d2185b4a1f027dc4ebfa77d6a440ac068e5826', transform: "translate(434,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aafa21d3c6e396470b975c5fc6ce49305515493b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'bd214a3a37938c04c5200c4be61b3651780abda2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc9db398e1fff20d3d42e7b2f87beefeb7c137bc', transform: "translate(496,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a393670b5f2c32a8f969ebcac23d72e666f43213', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ebc46185e533dab9d3542503130809aa0fa5a06c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8884df083b59c2ef456e34685671b7eccdfc571b', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1ee91a5bda67e258a982f6b80b83d04aa40a499d', transform: "translate(558,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '730f1eebb94d3dc9e042d9cd4ed22b1823d7fd82', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '33295f4e59d25f92468f64cd51618837a84bab7d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dc456f6425ae6e67c4c77842ab42bba4db608ada', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'edb6241c6ae7f082fe4028759def8621d8c5dff4', transform: "translate(620,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '090fec42c8d8df756acf74be08a5aeafe2e1e157', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2758d80188b6e859f2b6baa1ab6da736ac19bf0f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '770274c1207750c7701c0ad04fd125e27b566dd4', transform: "translate(682,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dfb59738ab69693b10d56edfe7c519c46d12cbde', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '42e33fa2f3b2b93e5330c3cc37594198a76c6caa' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'aa205a0bd041e559563d2415188fcf0243d25cfb', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9a14a90e7ac6f9568e41507a0fe025a404d42497', transform: "translate(744,186) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '999ff915e879f153765c73ecac7478c10a5a69c1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a09d81b9396d9deb9379108afb4e984093fcfe68' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '903e2ef78671b1baee8d6474b4ca3d1599660282', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4a6c49c320a70776ef542f19fe938f61bd2f3797', transform: "translate(248,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c6677818f07b906275a20bd4d04e972ad194f29a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '44806ea57a2e0cc6542c0f7c1e290db640121b78', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '557acd1d1511c7603a2cf4701cbdeebee2cf9bf2', transform: "translate(279,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b8beadeb0059c6f32414ebeccb79e5dd14a7893f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6f12c72d5ec1e3e37dce0eedaa6835bb4d55c03b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '66cdee3cfb42db5ce263fb062cb71a93bdca8bb6', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e0b8c30100839334d2998b95a2e024696776d7c1', transform: "translate(372,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7ab44df90a6dc064d4460bf2cd003ace45f20ef1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5f8ef8594c45c75da9e750476459ef9e1a9c0966' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7e490e023926c02c004ffd31c792ae8428660d69', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0ef330373f63b353fdb145cad329b29842c4e05e', transform: "translate(434,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e3270995de702c0efc3ee4aa3ebf45c08d8419aa', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd57fd7964408236849d63a7a6a7c94716b997dc4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3499fda74956fadf0481ff96ee2a12b895665445', transform: "translate(496,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c152037cbfcbd66bbdeabfc29259df8313e1ccc4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9d36d5e87ff1a8fa14ee77cb604dae4f88af889d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8ea951d531a44f5c5a4b8eb330a0a0c2d35430ca', transform: "translate(589,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c376e736c37473a43a31e6810022bce67613ce2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f8132db00145f5fc572e2d1f667a8a9d72bba63d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7becdca8177e00801a5c6b53893bd0647ae5720f', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3fe55e39c21e2d406025ebb4980a5839f6136ce9', transform: "translate(620,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '664215713a958089590f6c6ced3a7dd6d5c5e8a4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '7982fdb7ce1207f3f20d833a37f641520e288156', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '71817743c6fc2d7324c3f5720c3e0d1d140bdb6c', transform: "translate(651,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '89c228dad4c848a871303279649dbac8485fdaa0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '737072d863fd1db053ea2b3c9dd47e97f271abef' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2730da92456aa81dded4542ed9e8e7a145a5aaa8', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '35e9e326d15483c8fae9d250e9783896ab96d111', transform: "translate(744,217) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aefe016bbb5387b17315f1593957597a5d980eaa', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '53bf267594d5b7bf385cccdde5315993d4e9e24f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b591fa35a17cfeca74e3facf3e3fe0f0a412453', transform: "translate(62,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3d2e51dfc465e67f7ac6bdb7cb57e8027bb80f62', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '23172ef235e42c414c138e56d2a770add31b6202' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b479ec7e0da1d303afb066c49064844ace117240', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7baeba1e71ef796a2c2c3448f342f56d4ac455e5', transform: "translate(93,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3712df57b1d6e4055597c61610bd5e6b3b364f0f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '177aafa84217522742509bd862c793c1db77e29e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e75f0b457c88e8b2c46d3e91014816eb10caef4b', transform: "translate(124,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39359e2bd1507591238582167f2db76e518308e4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6c5244faa310d6854037ea7e06c23558534f150a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '728ddf30169720e62e2f90cc9a5654ee57965efc', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a4986486eb54a7cb239550dbaf28870710958d5', transform: "translate(186,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dbc930e042bc74f8806b6df328c2884143fec265', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '40f675bea0dcc28b3c1286a2349b783c324037f0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '356d3f6b72756f30e54dfe1812e499123e2a7aa4', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '032125259e399095539569c84f0a37a62a254204', transform: "translate(248,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fcc34a426d1882971161a47bd4d6cdeec00901b9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '003a1c2745567d748c110e3a9c4c46a4bcc19ca2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2003d5c68e091214e6b03f97aa3e4e01df5c51b7', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e0fd67f2f35e339d68250849ffa7c1c5249d7db', transform: "translate(279,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'af91c0ff78072b70bda830a6406ac9d5b9e5d265', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '13b1d8d309245ad0ff43ac6d123a37be35203c35' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '62717840ca4c748ca247764ef0fa0f443462b6ef', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '21a1b8d3e3e5603da838dcb5f38d63127d4ce0ab', transform: "translate(341,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ac30bb004b3776c82489e39e6088cfdf899f02e3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4afee8db88b2ed345a3f80013c601a89be9f4627' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'efe934082e0c70b344672d5349cc9bfcd453b607', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c1af991b83fe116566ef8b59a5812eb0581f7b3e', transform: "translate(403,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cd73ddda75dde8c9a194ec260015cba71c8867ad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4905e9e209d42dc7e257fa695d02238b30fb9c8d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c84df0a7e0e3db40b4e3b57096eae82ab73c0e55', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '82b9a9c23df6c1ab4ac486a943cec76256dd7433', transform: "translate(434,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd5747373bfa04124d5d25d8130732b8dbd6db641', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '40953372a07a40abac0101b905147740c36df5d1', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '65ac5326d6b84e2dcd0f9305b21e8690e2d919fc', transform: "translate(465,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4bcafd56eae13175f7b8cf285439db6ebdd5a4ee', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b9fe9dbaa6ff35e3589fc9da95b9adff5859f8da', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b0075725f95b4d6f79d00c15e44b9ac82c63535', transform: "translate(496,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '54629823c8493a6e54d6a2af60400f2760fd2096', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'cc8d759a3b413250427f261a2b56a0f85828be09', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd2f42f1e40d5294d88aa670639f9bfd020fa48c4', transform: "translate(527,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2158ce67692a91e3cbe911c770621c4a32b8ba9b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '85c325efc31dcf057490b0034b04e3d05cae62a0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea5b238b833c982dda3e257e5ca5d6cfdb9075d8', transform: "translate(558,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6af033ee18a62ecc696bb87e2af42babd5875d84', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c1690dd1abb3fc6cf06705915e5199faa4a97f9c', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '48251653913ec581fb4bb00df2f1ef654904117b', transform: "translate(589,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eeaf65d45d24328ac7dd90161ff77b1f06b0f317', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '516e1297b91a2778f214d94638a72508980bed7c', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aad7c68cce970b41a5c499a82850d99c518b3fcb', transform: "translate(620,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '248bb2e25586e2f804530c7151ecf83dc664ebae', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '551df3f97bfcadc84a63ee2fd0360f23fc2cc45e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bb48deff08e4c4b09a1cb226db1f508e977e51cc', transform: "translate(682,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '189fde13dfde86e11fb8e0fda5e1cf973db7b980', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f8f6a9e85cc23b0137786b4e896aa13add7d624' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bb586a24e0da1590f86b8873379548dc2988c0f2', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c8006983892df5fe46bd6ead3ce79b5db0c233e1', transform: "translate(744,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5cb1c2e17a958f4b6dbd3a2182d3ec97902c5e28', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '38dc2b887a4eb2076d8c875ee41f3ce228c2f593', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a2966f92eddd3ec667ca41f0a57f88c042834c1c', transform: "translate(775,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '14194ee0cd2cf791e228578b1a7f584ec79fa6ad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '57921a8dd7e890b054a46f127cba515987fb8b04', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '43964e8dfa1f9f0d156e24133e5034a953ba14a9', transform: "translate(806,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '57f839fb1fd33a600b7ff14372fac97d8706df09', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4d55960f209750bbb3ffaea8225b44d2fbe96797', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b90b0721b69482438cf78d77972005e3c4c46b6', transform: "translate(837,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0a451e563b6d2a2e169e8eb9326200ca9c373160', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f981bbd8d01fa3e0e60ef22171ba5eb7b1ae374' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd07b11dbc94a2fc700cff5ad529b38d8632b2587', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ec9e41bf9113230456e80ab68f6bee350ba94314', transform: "translate(930,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '05cba2fe3078b01fef52ce4b4ad3c8dbfd3e8de7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5588d7decc389e0827099d3f7be2af9e7c12a5fe' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '200a2694a2a1210b27499642f5514c1b37cc0fb7', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ed6ad08cc85739e7fcd3e8e00c0649031bc5ef50', transform: "translate(961,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9aa6d6124968314db525c52184aff58d602537df', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '575ebb5375fb309d97e0244c67092a8c6156fa77', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e21765b92f7fe0e14e0771906baded77dc004769', transform: "translate(992,248) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd0c4cec074cd72b2264878768158da86d200af08', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e175404b1eb3d83a1a65ab6ede135993f7fae283' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cafb27b0e6011dac5da507fbc56ffad802f7d794', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f8822df128497f165362350edbf15617a314416d', transform: "translate(0,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5ba4369cfc2d54592f53f32007f83e1d151b2ece', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bb855ea6e4c3e01830ac9a02f95ed5e15686f2eb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0390a4e63f3c49d67df2b6fd7051401c3d0df1e5', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39d0bfbccfbcdc7e18483c94c7e29a352e77fa52', transform: "translate(62,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0717b690a782cd74511b2c35fc07d5691d3b8819', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ecb76bc99a1a535a292816b526d02ffe945bd9a7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '534b64217c3cece9e95068c419e6b230d7794619', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '541e377e7b69ee829536ad968469be8d731c93a8', transform: "translate(124,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b478470138deabc2ce2d365d65e8eb7e82d9bf68', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3784171a48d2fdd89b5a6df1883c7fe4db6fb747' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '46951359e77859aa63e6850f737bc3f2ade6edd4', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '83271f15591b27e433d2eb0e5f88fe5ef7193359', transform: "translate(155,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eed74c99074ce85624adc7a0640fbee55e8c89d6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c42ea3598410bad4f19d2dc61540fb90c3409b45' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '236045ba960039c9f4f0e6ba70d59ae82e474201', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a4f55353c1ce5b4d28a8731ec30ea3834db77779', transform: "translate(341,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6515674665aa5b2cbd63777cc8123e01e2d20fda', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '59682793c9922242862400b39205f422ce0fb7c2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2de7429ea3e5530356fa077a7f9870a0b35c55cd', transform: "translate(403,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3f8d6831acbac9c74f3c9ce7c6ac068a8fa9513d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '877b102b0127b51b393f75a13fd6a6c538badf0a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '92f7238fe27008dce9ae628a24a278c124298024', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b2bd249837ece896acc642a455969ea9fbce6ae0', transform: "translate(496,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '598729002c3a9805697006801bfad417d66b4676', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b822c29180aadefbe476582f23aedf5c52aec561', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd94ebe5f79d0f2bb51b9158ef39ec0894e515303', transform: "translate(589,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b62f69741fc5f1fe233a02d67e297a380a22fe48', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd26f5e16f29062f27bea1ae1a05335bbd1b4ee67' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9ce171f7f3dc29af32ab1402cadcf995229dbbc9', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a17bf492362d9d77af6aa93a0ba1530835722189', transform: "translate(620,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a8714a52a86c43d77cd7877650bcbc8ea753f1e5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ab03f56bfda40b3dacd07800e5ffe44accc23a57' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '125e637b08b55b67df81e2bba68fb932421493a1', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '306f8f544dfdfe5d8af8c136effb8e24f795fee9', transform: "translate(713,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e7c3a59aaca92c95550240263c6da14a0587b551', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b25a393e58b0864356d9665c98491199c52e876c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2540b97fe0ba90f168a289d4131226e3713785ff', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '221cdc8a744d2736c02539589a71cb735991fb02', transform: "translate(744,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fb506fb996fbf440c6d5895502b1ca17ac8b5f30', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'caba1986f3adbceab6bb1ab48599c311493ddd0f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'be60d08d5363e4c6756b5c2634646cd3ab7968e1', transform: "translate(775,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9764027dba47c5fd35234979f5746c18b952e8b3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '16c789eae38e4dd7dc6a8ea5d65d975d3aa6bdf2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '40bbc6d295319bbca8dc0012c56e6ac5bbc25016', transform: "translate(806,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c94c38a844070404f8a2425f09ab4a43f84ffb31', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '456a43ee425e4e3414a48a82a535950e69edd639' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '02b487432eed82e35c7f6eb24ab694a09d3e8ecf', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b871c70485b54db499b146326506f9df0605f39e', transform: "translate(930,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '15d5c49352ab768950f9d7e553c33a10561553b1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f54bed3ce571520920195d0e49360f4ce4794bac' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ad0bac7c9dd450cfc72ac05b6033de9f9ffb604a', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'abba73c9db4262fdca0f2d8a4fd2fa8a24da4cf7', transform: "translate(992,279) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '986bac7d9bf13bd176ab7367bef166530c655b06', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'adae6cd30b6bc8e79be1373e60b085329e9fa2ec' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'af2449020aff86805712ff49d86f079fb846274e', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c78398898945b4b5c59f1b937b4fa76a10c675e6', transform: "translate(31,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'df0c5a9d9d1200aac7e1046a6bda71433f002f42', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d2554a6f8637ddb85cf2a1911e4544963e2c272' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e4dde06d05c700b361789a71425b64b80b59a233', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '749d51cb13a7c28514a8e38bafce95c120d2c4f6', transform: "translate(155,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9c3d9458a347b893f574e573f54a3d8799f9fade', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0433e75cff13474fc4aeca863ce80903abc68857' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '278ed6863b10c5a1a19214ca287d1b93bad14b94', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e39abcda4d68ce53b64f97225b91baef1a07102b', transform: "translate(186,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f342942985f3e4d41f53cdb3c0cd6bedc06cd6a4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'bfe2a79a702538c80b6c0e9a0efac2c066cf32db', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b03ddc84093231b4091935b75695e02ac4bb7ea', transform: "translate(217,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9933fc76cacda28215f7c8f58b7f51d90003a416', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6b31b845eb0fd79755c8a31504a9b5d431544163' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '89ed855fc3fd665380e1877835ddd89de90da978', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b7345fc7c1db97278ebd86c26f31dbe2c98886e0', transform: "translate(279,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '485e96b8a2e7531f0f719025fb082e378e2cc65f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ccfd1f2f8e7c2ca89633554aa4f3b22de68557c6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '830d9ea708ad2521a9f350790ea5f35c3da3a448', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd06b45be99ad109067cb304e8f2ed22bf651bd07', transform: "translate(341,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5240333857a336a9cfb0207b6ef60e570e01c160', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b11c876684186ee1a8a935f76e56a12166572ef6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e369ac046fca58d490ca53b2d3a2a8c56bd45313', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '58e17d7f9c504253b1572c0ff3794892eb59f62d', transform: "translate(465,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a67a8b61982f770b3df8602b938dc5ab8d3153be', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '13f8037d84cddecf3ca9057ef17c78e20935ce34' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '452c455c7dfd995e94ce9bcc55ca426b28d33238', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '14189cb5c1f84a54ffdbfaa7b0b3f73d11a4fa9e', transform: "translate(496,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aac341ac6d3033ab1bbebad4ac616014b8333722', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '78385134bdd186eb31413b7ca3ddfd1d2f35be16' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '73f91d0c677470e86b9f089ad818bd7bc1a7a18c', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c6ee4062b451164cb09b69cadd675c231c395571', transform: "translate(682,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '07156023462b31fbec44f08ea0de78dffb647a54', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '14ac468cfaec003d7ad986390aebec7a6acc18a4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'afb8a0693222c7d3cf2f90b05f8e711c924029c8', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b3ddfc81d7226106b73aab733c58795e4f8ee57a', transform: "translate(744,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6c71895c30701ff4b8c2767b752f5c980f4c4579', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f4d050903cdbe2a8e1580dbd4c266c43ffcef05b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1af5ff861aadf19bfffdc544ea82dc331456454e', transform: "translate(837,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0b9bbcac206d68d14513bbcdab2c69f90e19a808', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c32891fcf63a6273a7c826a2ce73d9d5911e72e1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '84cf6174275d71a9dadcdfcbceae25ec55bd4329', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c63b0feee0460f7b407f2e8d75b1bc5ad49d0955', transform: "translate(961,310) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '93418b62528cac00583a861f747f820f1d3c0bc8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e6b186326e051ddefb395626c3783189932b1170' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8bbe19d593456268185818ee7daabe2e01dd3775', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd8a9f8a73794635ef7b5791768603f21be017398', transform: "translate(31,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '19a1080f72d25f24fb22d57ff54772bf76266375', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '520d3192956158a03cd49c90ae65e5017a9c0e2d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e319a77c0657eb41f34152c81dad89003cae8e4f', transform: "translate(124,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f8ad90e8c28fc8b69c594c8479684c1e4bdf2fad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fd8e882ac80ba74227c298e21bcae14973005c4e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2752d2f5e7aa0b62aae8f4b07ded6e13d6d22f1a', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fcd27034d03ca789274e9af1d7723395c33c8def', transform: "translate(217,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3e6e5d51e67a311d0d679dacedb7d00512789b42', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '36353d5e52803a13c67383766718d7f9ed1681ec' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0bf32fa3290ec2d2ac1949668e0a805c91e5612a', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '856485c43ba0fe7584b068c9a79ba369a7dd0aca', transform: "translate(310,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2146de84d50fbcedba2f858c654baffcce55ce1b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8e10c7a73e02d2ef72bd4a1991f6be17c2812a43' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ca71892788753be051ccbea8e52274ae3084cf40', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '86eadbc0b0767351e853a73f59d3d5051770fe52', transform: "translate(744,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '48d860f1f19bc7af9b531bb2024696b7edb7926c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1021918909d745f7a6b64a3d7571217dbe9029c7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '76ab8447a2b4e43f29fa776566b7395b7a4db054', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aaa9b355abb24ae60158859186cd28d933ac8432', transform: "translate(775,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '252cb779ce17cf1d9af0f394f2f60548f5fa2161', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2580afa76ce8080da91cee809074cfbecf53bd04' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '98de774822457097400c9327b46e17c3c94027cc', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2c1dbdf4587970f94099657ee6b8ec23abdec8b1', transform: "translate(899,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd781b611d786c1d025b9e798b3ba1f51049680eb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '057339ac1b5344cdf2794df65f6050569276a5e9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9ecbd808d4cc0fd92ea62578e18ec2dea2d561df', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '42ddb0eba2e1853ab9241369a54b8ee76bff02cd', transform: "translate(930,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2f62eea2dee24d0f22a94dcad2f02e3f522f8c91', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4ccf277e0cb9030a5a5e66967ce9849424af9b93' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '70e20ce62713c2a4129d4c0fad2fdbb6f4fafe6d', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '61d3f782b2fc31eee7aec23c91d771c1e11d49d4', transform: "translate(992,341) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b4c4e891e61f21b7247bba18311d9c8d1a84a507', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '072a840a9314e90cab7034381911de678157ff09' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '63010d202c5878167ac39de878ce2516e60fc84e', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '575bd98d2cb54ac1276078ef8b9a641a47297c59', transform: "translate(31,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cb19d904e6e409d8b20fcf77db37ff18731771d8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '21d8acdc5c710a01cd68cd1ab78fad2188ef83f3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8402cc8a1d6d0d2cab7a00cb9a379514323a2a22', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '660dd088d7b47708b2869a09900d9653bb9a7413', transform: "translate(93,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '84f4663b843ec1f898e17a2c4bfe8afb2a059af4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f23d2d41de9ec9d5b07c41870bab4f14df5260e2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b13d054c7427febf0996a10386c0e475c4104432', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c8dffb3d522e8a63a2c6dce195643f954a1086c6', transform: "translate(186,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0a72c21b4744c2f19e6735644e13efd5b47d2e18', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '84d57a652d00c55d5eefbc1d5c8e2dc33956f75e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '438d01b3eb10945bc4b69c2f1d56e6479d0744c1', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd51f19cfc3ed7bc49e165a95f37e01459ecd6d94', transform: "translate(310,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dcf5d12e2d97910f97dd40f3b77634e44bd02884', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0f56a46c206b5f4122973b3addd925ac277350a4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0e90417f3490c69e519b56e178ac6d6a0c9a5cc1', transform: "translate(682,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '282893c523dfc2463163d109a4f77a455617116b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '445a5c90038c77a1cc60705edd79f62949b8ec73' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2cda7f273bfa87defb898e6272a775d893ae675d', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f881c7daab176a16dddb7b63a5a4b37cd6d7f028', transform: "translate(775,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd31a2df6542b394f7bd5fbfde3578b19069cbf2e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '941baea0ab54ecf6899069d6227b03078d136111' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b2e8bf53dda66e6178862be4bbf9c8b836c753b2', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39f698b67c77ea3a9c3d5a6abaf52553190177eb', transform: "translate(837,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7b4093693acb185c50175c7c534ed55632ab84f8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '00ff486949fad82f9d9e9a00d3d7eb9b66adb28e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a1f61a2d10eab469e784a07a27d75f852091e617', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9b42ca30bf7dcf3fe453b50029c2d8fa6ce39273', transform: "translate(961,372) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bff36b46b8ce12d6536d9ef741c95c0a4a6583d3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'af78b739329e99ee461fa1c40188a247b6326007' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0df7ace377560524f74f9947375b37ccb63c2655', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a5ff8d1f03056ee2e721c889b665bfb518c7ddf2', transform: "translate(93,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3322028bd1b6daea96c83648391f6d05fc0ed2cf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4d5105098a1cefff8db4fa3a50a5184c7e1d50d8', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e3e367e72669d769dcf1a44ceec988edc1498bcd', transform: "translate(124,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b64a929d6ada6103b869da1a15a76563db24ad8b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bc548cdab30106b36bb6ca8ece3bc69397c88b5d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '607ae00096fb0c80ec26b6219283654efb66b8e0', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '299f24fd11bd6c776217a728093854c5a4c5f4f4', transform: "translate(217,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bac33013d9546f9c07de8c2703d5fabc5a0cd68c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf9962ddc61a0e5b5d848c30b6d93a1cd09e880b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '85a386f12627cf0c9c9cbb5f22f22140f07da8c8', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5fe0de903f7590e1946565bfe9ae9aa51a250855', transform: "translate(310,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c7200a8efabd573746369c4e38923bd4da2c7170', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1adc18fa00a34d2bbae03a60efb6a1cafe5a0b14', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd50b5a6c7bcf6dcb6a85a3d5e52ea288ba6fb933', transform: "translate(713,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '307e4e531b8d241ca9283753596d557c3222398c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ceccd28a37389210ad5dfc6fd9de3818ab204126' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a9897b968fe64a03bfaae9ccb07482ac5343f1c7', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b735b32ca7166afe39cf47b951037419d75f603a', transform: "translate(806,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '29d935e5d87e461871d3de40cf122e3bd36ec751', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '19dbb5c2510fde73e9c5512522695203a7412bd9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2382998742adadb6b686275bb7f4ae538ec007c9', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2020a5d49d2e1923575ac4ff9d071913c92bd8f0', transform: "translate(868,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e839dad71be159669a798c14c9a4a05edbd98eca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0a0bff942b3523cd11f64a5c67bead6177d91a97' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3ee52045132afa815b3b3133a1c0d393d3bb7767', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aaf241b2b3c03aa2d3da57f9e4d9eb6af2951186', transform: "translate(899,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ecab5596f1e312dd1ec056ce88b8047ea3caacff', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '996e5fdec006ba68f69cc7e9965ee5083605e084' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3d92fb81153e333bd9ecfc26152d63dca567e789', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '91f5a7490f1126a71328d6084dadb52934a6f06d', transform: "translate(992,403) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b1037d2b7ba4367d338acadc0183f31a6c1bf787', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '185d31d7c3f2cd2adca9dca25b57cca6cf651413' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a3ad530a363ff411d67412e7a1ff42d21c60cc94', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '462635a55cba8776683569fd04d74f9c6fbea34a', transform: "translate(0,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '625a5c92825fc0512abf45376ad015f0119b85e5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '02e45f5024211e196732b4a6508a7eb557efd8ef' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4f6d56061fbb99c70123c4e78fc3182600c33f00', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '24f174a60202ca517ac6945ce846920287bff331', transform: "translate(93,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc8798ac085a0da7e40e0cdf3d95fc1bc6fce856', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '72d527cb7be2c6f725afcf3d36311631a31af60b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '496fd7a2056cad647718b7f896c9e7a0b72aadc3', transform: "translate(186,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '41a069df460431cd92eae24862a23fca807ec6be', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd616c228af4af06d83f94a7124238559fafe902a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '19b096d5317a3c6d3f8f13cf00155bcd745ac6fa', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd7b32e55e740bc9cc32c400a99a25b54b8e21cdb', transform: "translate(279,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '62426072b97d370278ba88e03d0f132795af2357', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '56e5f4e17646971b1ac3cc82e5880f6a1d77258b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2b7d6bd03753285dd44a193cb2a8928241421f57', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '63bb23777f107db58909cb9732e1d10bd06c968d', transform: "translate(310,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4f42eccc244157d7ff85f081cbc6b69c1532c96e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ec3defcf340c039f858284be51c7774441a18892', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '87bee70394939cb95a9fe5a0516c1779eef5a41e', transform: "translate(682,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '97af7e5380308d26bf6172f6a9b4c987ea3f33f2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '57d592db3dfd874a369535af7496a3ec9b8db2ab' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '609695c2622b24313eeb98394f236cadcb13daca', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8d70f0996a3b86b0f1bfff3767b38ff6f900457b', transform: "translate(744,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff90fcab0a1b669a0f3c1cf850d03c185b56da0e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf06dcd0c5b65082b5f11c4cd756d3b52173d447' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd74fa2dd714fcb58c7e935f53c13cd79dc8f170c', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '52f292c9f68cda8c8dab34ba8731266d69c54a6f', transform: "translate(837,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '26de9046e3c27f4a6fa1e3b761340e934ef47b53', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '36dac02e9aec021907787de6b853502b6a62ee1d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '298bbc369fa497497e76cf4fc57205b8d4ae75f8', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c773128c88f7d65c3e3cfbde8518ca97d3f843a2', transform: "translate(868,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9d251c508c500d9f24a34d600a4533809e371ae0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'aa57456a7d4970b4714eec4521605845a3f83431', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1d4a6448103d130c85a0cd1dd480fe60e82a2b67', transform: "translate(899,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '74a4ed05c5604d9b2e7710c8cf5cced02be0b75d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '444aea93ae2589235152ec6f1b622c9f41ce365b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a07a478f1bebe748626d03a052607907fdcccf71', transform: "translate(930,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1e98086947226b4ba940c205414b0d289f74c9a7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '19876ece4eed6ede5ad7d73b6baaa9e455407e62', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3a482aa97586dd0c549189507778ea16a5fd1af9', transform: "translate(961,434) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6ff2626a52be9f3bbecf72efb00f360bd1d88d34', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f46d3b2e5d0373766ef1a7e533fe98e3c5d393c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '54fd506b9e2ee9f8699ed6dca3587146003f4186', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'acf997e3d38acda81fd0e643f9386a0f3c280746', transform: "translate(31,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2f34ea233a184728a4ee8124b4d11b6e9d16adce', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'beed27da5fe98c0e83ee671d937c7971bd3a0e67' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5a2d84ef40b849ee530aa29fcdafca77b7358a82', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5301c18792ddb603395fc60b462170cb8a79434c', transform: "translate(93,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '220dfcf37663c9e1f5a7ffb7f94cb6888cf0b841', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '482e029c8e402f1072ebe5408eecc51c9d7d9242', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '67e18570407864ef925f7c30debad1e94b4d6992', transform: "translate(155,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dd9f165a603971a74df7705c237d4a3344a58ef8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '26776b235b1245b45415a3de0a485fddd22e9de6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ad9d3724a4de9beee04f18182af9b605182763c8', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd0a5757808894c4cf12d541051072042a38d155e', transform: "translate(217,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '57945ab1aeb36217f080f2650c97534dd533e964', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cac6ebed8afb4f67df1919bd613f2db6f6146c2c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '684edfddd0b5d1027b24c3d0a0833e6768abbbb9', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8b979360f87cb89e4de3681df393146756cc2456', transform: "translate(310,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6a68f910aed12121284aad42f7b5838c6d2945d5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bdaec6a4a003498c1024ae69754ceb7e891abf7c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9531d7825100aa15cf3ba51bbaf103f3b8001241', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ca9fd929751960b0945836c33d9c5785cdb7703f', transform: "translate(682,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '82160a161f7743de2f0895138eab06d12c598445', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0ee4dee6af97ee173f410cc2e8d3e74ab1061b32' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1710c2d1a90732e14f6793c044c49755f01c1804', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '494618b5db5d7818225f8d57fe11e318fe7957d1', transform: "translate(775,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ee475b5fa86cc1b3ae227c019f8307e780fac741', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '26cad7284cf6a295bcb7d4f3cff2645e3d0eac29' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '086ddf59395f94fd27946d3abace34390215749a', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '07e3c721101cd2f9e85fa941a6f4aa2b7b7582e5', transform: "translate(868,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49ad56b63c267268082fcef09a03072e21c1c549', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9603054590defa27cd84d324a103ff67a1efec0b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2d18d1a37dffdb168fd692e43f2ca1ea998bc648', transform: "translate(899,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '22779986efdc32c7edfe461469d1a2627bc12155', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c29ac041a507aa877dc76f9c96c40a500b9dc8d3', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c369c76286e0c7ae81c6a5c177d63b7d2ba01793', transform: "translate(930,465) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b85696bec61f4f58b879d0639d37a67ff0c26188', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '928fdbf854eedefd33e5be3ea131a215ba37663f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e3d0f58e7c222d7f296d788ba8de779899ac1803', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '13ecc6e4f95e19be4fa14f26ca24fa368bee5bb2', transform: "translate(31,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cba971e8aba234f9625bf8c1448741899cd04c6c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6e4468f638d179f49b76d5c0cbfea0c6087fa056' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f409a114725432380f2b0fafa219c541f39a3656', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e85541612b5330fed886a536020f03828d24e42c', transform: "translate(62,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c1f84c5dd5e06fcef8daeddb160d1005b0ece6aa', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '45f65461890db6555b77ec84e59ef32b32aa3e4d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a7bc3033abe14e59f0fab848c1e928208c2ef6ea', transform: "translate(93,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '02736625442632178e1b0bc80f77d0e17d7006d6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '15568c7939d0c805882b8e8993706f3ef71f2ee8', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '466943e4aaf057c8d2ff75fe00adf141f9cedffe', transform: "translate(124,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8b91d4857b1a7b6e2efcd7fe9f1d047633a2fce4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '6e90cd8fe38f85b9277d47378ca0914230fbc81c', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3950f36d1422854099627a38d83b22df30b4e43d', transform: "translate(155,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '322adff0fd7b6b06a3da2402e702e4325651ebdc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '6bb444b51c0c603fde7519342ec56a667d8f477e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ec447bf86875178a0916afbb435e94fce92fff33', transform: "translate(186,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0db2f2a026f45ecfd337563150e66b50340e6443', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8e5d06d92d4021a66db2024448d2a6c8c333cbd3', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8a8f3f3ff70243caa1c51915cb9adf1b2cb377b5', transform: "translate(217,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cc00c938ce06d898912d544b306ca66e71d6b908', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4065dd91084302f6f53457aff02cb58f3755c18e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd416174f68589df9c54ce3d1ee90224fa47c47d3', transform: "translate(279,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0d0cc69ba913e56094171e160c20307ab6199dbd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '967b171aa73bff8266703d34ebfa6cef80f17799' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6774b7065ee8892bbcb4d6bccfb0db1e662a64e1', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '24a70373a045aa55fbd26d2e9e0571494f2a43e4', transform: "translate(713,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '08fe2cedb8b7a0f45587c4f2d0a6ddccd8c4d0c6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4882c1c642e8da23fa025102fb82e7a6981e2932' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8b244f4d76d206d57fe04e8131a7a84bc9235ea1', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff6bf3800a294f97eac6012e08f794b3dd0ddd29', transform: "translate(775,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a227946b287fadd87e6aceded4bb15fe92fb5d5b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '305f04c78a8e8c28edf13279bd7134a61abcd06a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fd49dd43d42e30612a7a5bab12488cec65439c70', transform: "translate(837,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f498727e6af2a0137f34d3a3289ac5a9c39d374b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fbc3c5467d08cf2da3fd478b5f10aa05430f8e5a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c9ce8fc0952e454ce7ff37f8f12140bff50633be', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bd11739d35e487f92394ee138aafc5021cdbf77d', transform: "translate(868,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '26be5d27ad361ea9c4414bbe0fc442aeb9f2d535', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0303de19ccb524dd79ab6888e42ffd915698fd08' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '60747c595520da025386bad87f5de5db6e4e0fd6', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7b7b5437efcf40bb3ddabed81474243cc1c5dc29', transform: "translate(961,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b2323bd320d03884f1e81dec296dc2bd68fef695', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '53c82ae4fb935c2946fe5dfa76151614006312ba' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b331232bf7862236ee6eb13c494c2c5c7fc151c0', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '81dbf68e26d1f810f445b0fe80a124e5a0bc0529', transform: "translate(992,496) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a7c1c1b0a6d57519a008cbda1a1b9a2bef98430', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3ed3da59abc00c61a253e0fa9c70452a67f906a2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '395565b2ca5327ddad95f98a8e8cbe98831cd404', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f843c4ba724d759caa96acf96c3fd4d2b91217a', transform: "translate(62,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e1f08d88e984e95ac116b22de4e6512024ce907e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '37b5533149cc1f3cde687d5cc77d31a2f59487d2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '159c411fac8365c524b26c771f11e3c39a466067', transform: "translate(93,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '995663372428f6ca65a34034f60caf81a60284a4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1d4f20445a6c08026b281907631f9aec25752764', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7771bd210456aab7fa269e2441c16f7870212acd', transform: "translate(124,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5884a173c335e8a78fc3a4a371a6746f2c3c201e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e27fae59c27096f611dc85ba68cb0d7ffefd5e57', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '87c22f9d7445343be07d13754a8d2f4dca1063ba', transform: "translate(217,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8413490e1ba24dbe1a00f77f7cca20770659613e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9885926c43c85e2b82f8f6907f048e0f15979c2d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '47484ad2b855f3ffd13ecad63e361853dfe8b19d', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b358419d6d3a2075f454b03eceae9130d9976230', transform: "translate(713,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '500ed62a83d66a32bec7eefe0d74735eace96e52', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e957b5099689824c4971b6ffa9aebf9500fcf95' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f1189ab28274b5318310be3ca3b4bdbb1e3d6b14', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e98fefb81cee98ff3d604f4473a02a241a84e216', transform: "translate(744,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '33212d119b9fc23eb07b9cd0c7b0b9744a937887', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '1e80854b9844fcf6d83fa9a8fe411c3bda0f0313', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7e8e30e22fe32c6b2fc68518380a6a2daf0cf74d', transform: "translate(775,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '750016dc87dc883f84e815bac32d632644c6cee4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c7e8ee5a6873bc7a07996d345b7f8db8bc20d287', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bd9e66d7f376a620406398955c6f059217ff94be', transform: "translate(806,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aebe9a6b4f9b5d364cfd9f131a788da54a60156a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7050eeee893adc7a2f3e2278d71e7ab36c1eadc1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f359ff64a9f8a9b48260d71e8d946ab3c67f4fae', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d8d9994a5fa6b73930ee708e25c7b5f4d66acfe', transform: "translate(992,527) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cdd4a2c576ab9b5b996e57c6a7536508aa16160e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9a7657b32d7be9f9ebb8ce45603666706d258def' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2521a41ccfe4ab4dad2e4210557d65519b1dbe27', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2d476071324b94da5304801a5d5b0d7562291e0c', transform: "translate(0,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d0d5ab8633e4248dc069819e407c318d52a0498', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '66622d815319845366d4683a5d22d114f3d305dc' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c130c4d58ac92d1aa6e7903181ffde1083a3ed2e', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1acb73e201f5ecc5f58799c869a224740c3b45dd', transform: "translate(31,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c1512d92d76b4422a7c36d5c80195be298f0c930', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c049b914e5ed38b71f4b5386b6ba16968d3bcc14', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e84ef658d9bed611b967079e95d2144bd84de62a', transform: "translate(62,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2196bf41e8af833a68ea9c0cdc5f1cdc9b9759e2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3c794131d589052dc1b98618e383174fb08b1b92', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5e7b7860b5ee963a9a5545ca0042ec6d17c79083', transform: "translate(93,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4f50b346a4bbbe7974d531e17cac5bbab018dd67', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ef0b9d099653a80926f9ad2a1ad8d14c4ebf89ec', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '96257d5e8f0694bf39265296c5c88e644fa7d858', transform: "translate(124,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5fd068a36d9e63654991eb19f657f8066f15d65b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2b1d6eb63470468b3a11c55c9978957b52720a40' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e0b76574b00fa30d96d9f32a4a17b146bcf2b447', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cf9f49249d6ad522919e643363c2bb961b1a6ea5', transform: "translate(186,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '025d74c50dc43293afd6ad7883dc76e40503d96b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3c56db2935d4a1d63e8bb36a43b9bb3447c7dc7a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '11a7fea7379964994d23049759826c2d1f4fd89f', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b9325e4b9a2a802fac20e4835f3ed2b59e1f5e48', transform: "translate(248,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '956268f4d21b5ba3dd11dd03781e80b678ab0cee', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d446219c75ff21e7f755ec6372f3bdf13119228' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '79a9fc508e037cd6dd1e3661071e78998947747f', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '09d37a337f0b1d8a9e9cffca82d9ed5ced0fe371', transform: "translate(682,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1d43c0f6fbba1c5c933f375e11995cb35c96a47a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e078e1a2bbede62196862c6633aee44578234b54' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5f112382449eb8a05b0872f574810b93a58eff48', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6ca8c495bbd4fd7c5df0e420a8423b6310e34930', transform: "translate(868,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b35a60424e17eaf625d4bdc3ee4740d3dbbf6f54', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa51e805095d7c2d0425ac03763c847fe57bd169' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '560bdf487bfe6409fc7d403f2d7699d80c946486', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5f95f21ab8d29e286325de10509dcfb7e4172d80', transform: "translate(930,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8c243f14c44b5d8cd15143b7f6c78acecf9d07dd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6efb928379835b8de90ec6d44cc558190396d41b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9528a73d7913db3c73b9ed38eb73970b41b5785c', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2eb209af89ab0e6a3073e0e4bb1c264d670f838c', transform: "translate(961,558) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa6bfa4384f6e778f79df627f9de8d9241077699', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd7136c08df999f014bfa3a22cca4f761d68b28e5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a3c714b861287e2377ad9223415303085fcdee85', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '94a321bb01311a8543c5d4701c5c40047e30c512', transform: "translate(0,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1eca00ffe5c3b496f8e8cb317280bb7c9449240b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '257c8448151225e88eb9cf2ac2d4882e3c65b4d6', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f5450a73c5cb598f2ac07a713ac6003053b329e1', transform: "translate(31,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7c8dc0d83ecaa17011bcb89ac6f5d0b7eded1439', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'cb79612fc8cb29e2ee328dc47701dcf44fed46e6', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0952a4762c1838fbfe9b91f8064c4e4fd2965f5c', transform: "translate(62,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aa05cfc1814b76cc6a6cb730db4f0c2ebb263bd7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '450b87722d54bfe85c2f0a1b6b682b4d9f1c06d3', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1ec0c631e29ebea70fbd09616453fedd432d4bef', transform: "translate(93,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd39ea7d864dfd028ea762640d05ec25ff0dcb6ad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9bf26f57e819e7cc706ed229caee92c7afe05fcc', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6248021e01930acb04872a67e9c36d0f2a6614f0', transform: "translate(217,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3535b1b01b7cf776b997ea37c6aebea92c2a837e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '73afa990cbf696fe1b750515e8691b10e41d9d69' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4afda8db852899f449ac6c57beed31b44dd3599e', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7f9df45b41d5569d3ccc9d9cf25e3f3baba79fc9', transform: "translate(279,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c2b154e4db7e5fb5823e11d2cff54710869a8b5c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea169d4bc744bf1e48676db51868b3be8d7ee3db' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '28ff12adf42a0f477a7286e6c49480b6be9e57cc', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2ae1e34099dd257ecdaa6a07ef103a03bbd602f4', transform: "translate(713,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3a8d07892df6def2e8abe44c0cd0fcc69e4c8d2b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '57558d9e4f7f7fbceb17a131f085149873244b3b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '73d6c0e689b7c9e140739c523141a9718a08bed1', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cfb336dc437f0cfe28932558d2d6e377dbfef69c', transform: "translate(744,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4ba764eb114c4884d2a879faaa592d2abb7fba45', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8b6d44c43cf3591ebb94b495df2e5f4521d6d676', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e4d67bdfb313ccf604407b25690fad683ca43b86', transform: "translate(775,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b06e11d3501dafe64366d762d75e9ff4092713b0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c49bb45da7d773024a2fc2ca24707e5f5ba5a520' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3d5ece427436364c2236807af8c76d371e4f6b86', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5aa4d0ccb0fbc18a3f6518cf9b580fc0c3f5a7da', transform: "translate(868,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f4facef58e92c646c59d83d171e3cd156a658769', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ea56b91d8b1037948008e037c0730aa57b39fd15', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '693ec49191143e56f5054169016c65ab763964bd', transform: "translate(899,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '154a92f8300016f4f68acc210cef09fdfcb015ed', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0f1a4648dbe7d610b0050cbcbabba3fbabf83323', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a9f50d73df1ddbdba361bc8aca74baa6767728d1', transform: "translate(930,589) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6641939f33758209812efd8fed42020f67822659', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '297406dfb4bbe4b7e93e96ca4220afd33d3e4895' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c4264f7a1519017deae01dfdffce6132cde68324', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '75d919024c79ad5a324b24f463a76d76a634e2f4', transform: "translate(0,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '745c9766ee062d2ef1e8426c62e49731729c93f5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3a8a268b735a0ae5a1187d0bc918c66f69ae50be', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d5a7112c53a85bbc4bf459550a3463b434b5895', transform: "translate(31,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e6bae861f938de8dc2961a3bd0520ab8dd9f6a2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d7561229c44da8f11f5f4eeed53e8266f8f37d6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bbf3361bec5c07a4143a42b5e28ab0829aef813c', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b51f819f3e5cbdd4d21a35a03d03bc42d473fb63', transform: "translate(93,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'df53056701242ae9ce9f9142a3db12e0c9e4254f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '461da90ebc12fb8b70ca64c0c08014f15b30d97f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '22375b4c9372dff652d12623e67ffce70f606b3e', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2a254338a1a838983f63aa72f0649b94c4a9bb16', transform: "translate(124,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c40eb2676e4adb8f87c2de2e96120b80fd5541c9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '94e079e7a9201285ef3f21e9b3789d05e4a4089d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9c8307bbce67f4a23894f7353b07320e988864b4', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '799176f8749358dda74c117634d3374a776bb170', transform: "translate(186,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0ab0e3e4476a95b6f2ac6373cd3fa2a2fb16c6b4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f9c1a3048e19424740a427bfd456a8271d512a3d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '22c75e575d06936c38d6c651b3e9fefefc3dee62', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e5082a91af1e409d522769b597008b3e6a8ea7eb', transform: "translate(248,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '983452fd51d3e5078c35a69b1194f195159f115a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '867ea4b82e8ee96a692593e6eb3c84dfb5dd2f5d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1da6fce7937550f7a5935f9be6d206e52a3922e8', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49b45f9455ba2bf0cc83a7c3b39a30e0940caca6', transform: "translate(279,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a09f6dce53b714dcba12bf353d84165ef92630a7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9158f1b296bb52f108c934b4ff634aee83015204', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c54816b132b85eb2cb8eb363b9662c51611371ec', transform: "translate(310,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd95ed3eba341750435c8106fc6b55ca4bdceff89', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2853fe683d1d7080e956eb27a6e3156f187f716f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0f7786c1c6fe2e1c6d00fe0c373854ab0b8c0bd5', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd2ffa692f820104ee235979501866c9d9cfdd93a', transform: "translate(682,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '72fc6ed6c813c54b52d9cf9fcc342cdb0949a41e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dcfb05be39fe260a7bb416be9189c436c4ae7823' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '35a49d17bb32b02cc7e0031e69e322f4b9ac8826', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1033ebb6dc105b159cc4c91e8b2ae468a7d8b0fe', transform: "translate(744,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '008e5ef48a18b816f7934fad84e14a8599d8caa3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c8a652abbacfbea8126b73b35f0c94fa4781dcea' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0c9d8b0a31cc0cceab509c40b4b2ab94eaff852b', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39542c0c4a352d0c46b942c55e6d2a2ef0174c30', transform: "translate(837,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '053d9662c9708018cc0fc2bfff44a7b6ac495109', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '36d11e01830ddeea663d71a07895980f1abcb45c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '361cef945f056699e41f8492fe01121509566de5', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e3254d0f042bdc51e0cb034787e6f80cc9e988d9', transform: "translate(868,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6932f9d6cd96401e64c48ef474733534f155cdc9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '72eac0cfa32880640b41a26beae0d864f2232ac4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fc62c18ce81e22114acf135eb3730f19149255fe', transform: "translate(899,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e272b20459fc3594b979f4937e0be9cbb3ab7690', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3bcba43f95e4fb57d563e5c7f5e482822e4586ed', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5443ba3a726aa6bfe2279714080972cb6d28570a', transform: "translate(961,620) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7a80a441b4002fbd4e22e9c02369f38f81d2b940', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '694faabb954ebe2bee85114ce929e48595fc5425' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bab1741bfe2d7a0dc05525bcbdcb09d0ffeee532', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '09292c67be6285f5c7901b654c1a92d1645231e9', transform: "translate(0,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '57a7c80d4e920a53283c17896221f32fc1ed169c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f1ff6ba1029003300f7f322c63a9471fa178aa20', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '51558bdce55e54799d7dd894f9c8d9b78b7ef109', transform: "translate(62,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f770379e39211facda62f145a7603e1a989e504b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '06b9127256516529b7706943fa94889c90c37c4d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '878b38cc5065fbd6841be13e4e1eaa405333e422', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '46159d0bd5c6a776031acd1b36b89a6fb001a895', transform: "translate(124,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c7a5ee541153cb2b9275503778b46faa4d0df98d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '46ca3d410001a5f3c2d310af071b2961c8f76b0a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fb9c1d2523eb392c4af592aa4935bde8c2f78175', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ee0c0789821d6ce3e9684c73ee7e181480b443d6', transform: "translate(217,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ac6caebb5219e4c37c228006190ec214097b3c9e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e0c735b5bea935a17002c7c466ad4513b7d12849' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '17c792b54aa5970b3ac2c69d6d14ffe8440675f5', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8bfd149bef03ced3ea8f9f60a3ad0ba0b442f650', transform: "translate(248,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0be1e536c7af0d2c06b84c7bd5cf371c42c133d1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '09a7f7ac7f60ea11244952aac7edb2501ec50684' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8bc63b3b8d8fc8402165025a5fcc40f2c5ba3bbf', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '64da233d3847aeb6c7b36e5105af75dd8b9384e6', transform: "translate(310,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dae96d427fe2fd7fe983454508a00a0379a3856e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b23d495288ebf39e9e019c4dfbcb2a06fe6fe257', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0ea12c002b1888c11e37007572e88984e9d6c646', transform: "translate(682,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10c7cfc24066978dc8c51a3420149fc508d31eca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8cf1c845dfbed7df5b33324a73c13200918d3c56' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e0a529840be891bcf6b524c70541ad4d8ec9565e', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c25790b571f8db77109308e4cf57c84a3b9edc2c', transform: "translate(775,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e22840ea69f4ed0475f7c9336e93a5bd19863d68', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4a53ab37bfa98e52e1a082eae588cdc41738949a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '961da187e8455a4c7e7c095390f2407f513d51de', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'edbec9d688e65f5ed77cfc4a8796f56216173b73', transform: "translate(899,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eeb55423e3d114a20cd675f4dab67630958c3269', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'edfe3215943fcdfdddee13d0c42f215f19abfed7', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0efddbdaf66317c2c813b0b0bff7ee1704a75c02', transform: "translate(961,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7256f58d1e738fa0c6a081bca6852b6ba81179b4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ce233edc11f36b430357030e4e80003dfc651dfc', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3dc96ae71dc0412224851b53c749ee3578500317', transform: "translate(992,651) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2ba20aabdcd0361b5713b8d5aa45de0c0a22d2d9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4d392be172df68b1a3adfdebc7f5b57b7d779c64' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3810e4da4c3b7d4538f1d2e7da9d013aa45b4887', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f4b7017242f9ccbd881f677ffdae18a53ff3be0c', transform: "translate(0,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '66a737747e6944f1b4769adbab53ef7fac3d71ae', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0b96547038b62149972a8bc76052d594f6d6e307', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '47ca1c8df322632564d4c5490a52670d0c2dc91b', transform: "translate(93,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '13230af796768e2128fa7a0940445eab252d2c41', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff8c07aa626e80a8b8ca4d3b7e21118fa99661f4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1bb62319de8ccf9e9e05aaf78eb63c423fa69ce6', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '11215c45a00ccf3ad5c3b479f7b4a9c4b6e00112', transform: "translate(186,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd0ce7b81b1d10dcf2bf14cd3be76207ab1a9d832', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39cafc1164e0f0d18511e0df6744210c1e941a28' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9b2b497c3e7093a624ea63e27cc37838432e8b54', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b833fe84bb151f996c6de608417e29f3558202a5', transform: "translate(217,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '384f5f8a73c0c2d161b2f997b5994d916471e2f7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '405361eca22622c79ff22002011d9be8bdee8d73', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a315a1ea8b5284423e21adc9dc20923c03eb6aec', transform: "translate(310,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3a5dff82ff78c50d05372c2c5a0daab2304e2fef', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'cbfe50c3c3208552b482c7b7d8c0b2d011e7bec3', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '46d712a04ec178c5a43dff3a9882e206b7401dff', transform: "translate(341,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '23c4c932ccebf646b624a8c2e1a09f33776637e6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f0acc1c1fb97ad5626a7921257cd4b8c9edc3f6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cdaf5112adc4c019247c223d9545ceb51f6b7b04', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e8b1519d5f4d921fafe55cf0381cf4aca9d3ec49', transform: "translate(434,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3222728f9776556807f81310b9622a950d0288f1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7d42104f290cadcb41ace538de763826917b4b84' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4ef445e7160d938ed19c32d3d718c89fd5cff20e', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c7d43533570d10b05839e55dfd22117cf3e149db', transform: "translate(651,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6fbd092d08f55caa6ba5a76cbf91a6e7fc3874d5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c38fc1fdc2a868eeddfa6ff7de417c4891493bc9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1e8ceac69d3bf6dac4c951f34487c87abe0a8318', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ee9b8abf02876152342dfce6b00ab28a884566f8', transform: "translate(713,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f8ff712be5bc7c61492eaee4dd0a0b1471b11839', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2628128dd80531edb797eefd165825aaf2302d3d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fc0228bb6874571ee40574dad76e129e80dc0724', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'beb366d0515ed1e825757ac86e4fae5cb8e16fb0', transform: "translate(744,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '427c25f5692dfbc6b16220b6cbce00a70e9eae6a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '274ef153150e00135a33ca80e658afa6dacd161a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '292fedec74e0ec6a0d6603b317af86bbb05c06f1', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '39999ac4a8cf81183704bc20d113b68ab4e432de', transform: "translate(868,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '78b78e9e3a32dfb4e63512a920b706b5a9feabea', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3d189077c69e8fcfdc013bf4fe95f6c76fc2b60d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e859f00bc2fc6e59bc73de7beafb1b199235813a', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f6d0daa4eb531c8798b96a821075056f9c49c742', transform: "translate(899,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '958c15bc20a508d7f7753ee6f24e75aaf653ae3a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f594a08979e0cc162ed60d24f704c7b955664809', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8041cae5d17a66181eebeaafe519680b3b99ab44', transform: "translate(961,682) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ecb0ded05bd80a48f4f015973c611a81d2d46b46', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '89b85f1098f19ceeb8e471a7dca4f33d7769f530' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '54a6554c8e1ec3d333961e147e2d2c40f2bd246f', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '08a55a98bc58ebb61b63810a448130fa04dbe96c', transform: "translate(0,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '564fac865d39e2eb81b64e5defbd99e3d3770380', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8f4ded252d2ecad4cb5f11a77b2d9d46f278bd49', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a43f50a8221cc2ecaf075bd18c5839f01195cdbd', transform: "translate(93,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1cf39df665d98aacbeea4e09d7d63d04256f2966', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '8f8dc014eaa821470539d5b98274e10a103c1838', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '71aa78ca92d92bce729ace9abeaac253b725f628', transform: "translate(217,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '24fe4041a56162fa9f553e2dc0c5eeb0f2d75b2d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ba531a1069f6796fe41fed7673fd2fb94e08b2f4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'afe6982cb388a32c9fede6b21c6dc1e87576f7e0', transform: "translate(279,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c2aba76d3f93ce782aeb70231b33654f4e27745a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd782725e2da68c06fe83bf0c8cc4dc722a9873d2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7bbe40b96a0d5e8b893d80c2b9d4619054bf9149', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0cfc05ec3705dcf961c34a8ec27bca312cdeb970', transform: "translate(310,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea3011830cc161d6f51bbd2c67b759ce33bd7cc2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bf5f2900d02d1662eb6807e2ebcb7e70b31e5e0f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '42e66a118a8484dea0bccaa9b05c80207edeccfe', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5c2c97bfcb046b290292cd8e7e0a4f5f0ce234d2', transform: "translate(403,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '24a5cee693b92efff8954cc0682708316768536f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd272e63d7b60e84c3e5b1b8486dfa562b112e4bd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e958e6f846b64cb1621878422922c0de4c91a627', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a17e79046b6a65cbbf7b1ad759b06c3ba9a6ff69', transform: "translate(558,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f9be7625981f0a8f87952b6a3218ce0bdaf781c3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '48d6e487775b9fe3b5adf70ea12191158d669bce' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '054a6d885a27f2780260cf8aec42f36aa3ad3b38', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c305a09ef8c50ea221beed4bd13c65a37d511f9a', transform: "translate(651,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '138d9d96ffe7b47d17b519bb70635f8d9e7ac3ea', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ae4f135ef7062f513ad060366a8fa403f2ca31eb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ca185d6473a4a7c16b3a074c7ce33199124b10d0', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5ccc59847175a8d558ef5a32b42047ebc8a4efb9', transform: "translate(713,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '780ac52d4b2c1c1680913cbb1770382aa47afa3b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e433caab632b3befef53619f3b98c599f1b601ef', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5de9297e595aaf7a981557b19f8a9157915d4ab7', transform: "translate(837,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3712dd88f429959ec0d1bb45540df619484ad443', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd58c866f2a322510616e175e389d7d5ac9cb8f47' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '70a537679e636da1e3f8e17ca832e16b8b6c5797', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '75d547c87022364758e3f64725365bebba541cfa', transform: "translate(899,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a5b3cb3da0a2d58ac8b93e29bf90f69e81a12fd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f52ab7a7db0c72201305a8855fe458563e5e3d6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'aafe00db20c60e9ffc0743f8b6d1c613e3b9eaf9', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f58f9d5d82992b0af42938f6efbb94597b7dde20', transform: "translate(930,713) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ebae549a37f8a21aecdb5a0b94416c3f099e36f0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1cfc84a0577d70a89cbb21849cdeed7504f86811' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd60d2a14f5a68affd59c8345368eae463ffc8a83', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd51de10cb66d65202e51acf752bf796e0b5dfc9d', transform: "translate(0,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '23a4507c805237fba06e9b3069ce6e36a709d6db', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '64a58af442b55c08501854aa0557322372c1d5a6' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2c21cf5e5e6b29870bf45b7d37789d32163cc73d', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5c2e9969eeafc5d1cf4d6aa40acfeaf07d5183d3', transform: "translate(62,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6c351bbb85390a341d241d39cd4836f3115ebe1c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'acc6ad66bd4373c31372b26c8d18fd54527c4982' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b9ab96aa469fa848cb339f30db112d3d05a27ba2', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '594d6b51f514536ff046e1df8de9ce2bbad59ebc', transform: "translate(93,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa68392316c7d74d4ebf0176bf8026e61aa85d9b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '72a577cb831ac7adf816f1e732bf69b34f206dac' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fa8191498a58a328f786b54e58f0b6de19ec6292', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a22715bedc6cb46f0e5aa79bbcf509d4cb0482d9', transform: "translate(186,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c68ecfb5c18652d54ac82f3a75aba7b5b20446fe', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d6601df25ef88c6c1f485140adf694a18bf5a95' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'aa02883c654e8845273c6e04ceb7056cb804e1ce', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd223f550c16a8ca7a1530be211b39696ed8638ed', transform: "translate(217,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3ee471201d4e1a2cc2632f7ce55125eb10e446bb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1df748863ec9dc66dc386079b2c4ed66f01cbc03' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f2b25f5aee9958bef7bdb7ac22faeeed71222894', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '70ce3f6b478e63e5473faf6677bf1d5f91b6a148', transform: "translate(279,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea279f8fb4538187fb9063845aaa7c7d03b09901', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '831ee970167d3e7362404e73959f9bb82e3a17d5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a6b69b9219c99ec509bb47444bf19f238980e45a', transform: "translate(372,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5def566cd324625f1e00b362af5aec5831958177', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd7847d9bf801ee036fd6d3256bd53f9e9da65c73' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a915bc398e89d4f15c30474a9c754ab9a9333572', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7f8f4776ecf85b2bcb8dc17529b6087c86309529', transform: "translate(403,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eff05b8f5563f3accdb92c60683d1b9d200ea7cf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '9a101b65e75498b26c67ee74393faa28167ed2bc', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '31b31f115d5dfaba9b554f64fd61a5adbe564231', transform: "translate(434,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '28e13222c2d2ac766aa844d74f52ee22bc9bb1db', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '17c357c77312db64d324eb5361cf0f3e51bf6fc4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'a5c30d1c09dfcc68cdaaf8c0d30111dd06bb21d8', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'be4a3cf96365d2a24c20773ac27289b93b349fc1', transform: "translate(558,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '80b03c3ff4da53d5f4629668bad51cc813c6f16d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '4e62ff26b314a8c9b6c92c025f14b91278cd92f7', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b05383f49231be49b04a9e478d81b98708f7acc5', transform: "translate(682,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd7a1057b3ce29d65ccf3da1e129fbbfedbbc0295', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0ca345561e8efebafb954031382c6899a6cbfc07' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '883bc37eb9952aa3407cca4f20859dbdf060d703', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a5abf8e6660a9ae9d1bf0d6f05e3fad0dd73f16b', transform: "translate(713,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fa8787176847b0cd5989f3a56bd109a916602774', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'deb3405204321ef10c128844d87cf23ea5b6b86a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2386668a38da409da17ec879d8bcc3b1bd0b0280', transform: "translate(744,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8775a39551b035533f2e23eaf5ccba83bb1a03aa', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '24e453651e0cbc7ed5c0d84787f418d10c22dfe2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eff4635804aebdf36d2335be034558478b1d6473', transform: "translate(775,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd5272d067b416b8fd6db28ccdeb9198e3053e3c3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '72e6aaac8e35fe40aa24e38b611979077d02641b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '85bb3a4060ce7bc4b917081ce60fc4e306226a38', transform: "translate(806,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '17162db7126ac723c06f29ed5723900b912ae150', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'fd8912c29781fde5fb1ca44f190223c5e1b8ee33', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4b8248c605a2e85622cc0056cc7dc584ef7f0f49', transform: "translate(837,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e38ceba4ec973c39279c290834bf147a804037ca', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e1227260f7e7a0260af2a6f92076db23eb7396a4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '88694aab0d320429e0ad93ab18fb038da1858eec', transform: "translate(868,744) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd59b302eb5e6333badf175ad311b7a0983296709', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c84df512839d030a4866e71140e9803421e864f7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '1d4ec2f74d0391eae765ff80b90426407bdc0628', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '99727c9af9d8da7c7a51ff1aa5612288188db688', transform: "translate(248,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e275ee440b431d10a440bd6b7c96e250cf5f7a83', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b00d20051eff3099cb90e9517e9dfffdee030df1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'aeafdb847468b1cce694dbb5423d2da90dccd3c3', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cadaf7b65ec310ba0df986836b6c1ae18cc25647', transform: "translate(279,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ec1689578025f6cd30512c2316b6fb902177698d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ea85dadcca7ec3233ca6badceab1c15c23291386', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bdf505677a93ec28cc913b2a3fae8e999252817c', transform: "translate(310,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '146fa9f1aa842cdb60722794112f0fa9a3cbcac2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '69d6411c3c89ac191bea81121002356030f63872', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fe5b3873c54fc5a45aca098ee3b9b54d6bf0f9cf', transform: "translate(341,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '89f2e8dde151c45e7f2eb8dd74334c353a403e61', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '84b5961ea55fb81e6e7fedd639434363a2b0b185' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '99e8dc0c9824be3fe6d27e09dcc20a7d9012091c', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '99cd17eb53d9e69ddd5bcdf9f9cba94f16f93a30', transform: "translate(434,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e00cd7d3e337a6b41d75562967d6db52a6185194', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3f972d720ed3b82808ff70fced916dd38bef4f43', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fdec7cea6e8859b36ace508187c207fe76393d25', transform: "translate(496,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c9d47517c2656d0e42bf64a2e3cd496485dbb47', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '99d8fcb8a08130d6504a96c1f58392678a6cd063' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bc3c91ba0f500b4888bd59932324c5191cb0e0ef', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '66ac43d322c043603c45cb439aadf512b3103bc3', transform: "translate(558,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2379afb3797f59804de26023a259592359ef51ad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd15b2cda23cc5a959d742131c78bfefff3510f78' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '06966f2e4a0906d1498dbf01658da8e83c676c01', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e9c6b92bbb8715966a3f9e90226dd781b9b9f994', transform: "translate(589,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '54a57ac72ecfbbfd5487dc232104b62a5d9c9ad4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3bfd4e2bb3db68bb2cb54b856e4b8406ca951ee3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e2faef218a152d67377c9596e6db2b44750f0884', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '800ccaf86d0d6efeb4fcd38da054882f8b9c9d2a', transform: "translate(651,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '58912e428019c3f801e4b52eb82ee536d916b31b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c6f53fd6d96ad243eb7e3955ee562d6441f9391a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7ab675a8c60669a4115192006a63db042d4071cd', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4702ff495f860ce45737f3346cda997db55b14da', transform: "translate(682,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1234ea029bdf1af24cc91a353eeafc1aa8ad4ed5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f7b705d95aec0409bab3d80ae2218afaf56f6c39', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9f4d300a892cc1b7bf313a1e1c428869ff1d6984', transform: "translate(713,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd9c9a1f9dd3044e7a6eae0a41287b0b027773902', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '60d1e189f48ef4d1784a94aa5c385b796ba91d25', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '075f3e854baf8965478be870894ca2b4d59c7822', transform: "translate(744,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '692090f0e860e624390e3b093dca7597c1d34c46', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '122faa5de3dbbf1f6e62a9d541a0e828e441507d', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7fd240fb69528e679bcd1f563079553ff90f05f2', transform: "translate(868,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8923852fae5350f3338a0ccc8add20296271cc4c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '383f5991b9086a51d462374f769d6979e0eb73fc', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7459f5abe84a1fc01085868d875138a5892a8f81', transform: "translate(899,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '22d79d3c8a86d2c13ccf24a50b08dd9e7c946f2c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '53ee3c513fffb12c56f44bfe53c940f2efe1b298' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4d00f3e3a3cc39b04c966382cb93ec7ab7f8280c', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7e3fbf853b309907eb21783d5a5bd96ec1445eb6', transform: "translate(961,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ba9e553694ea8d56d69f927a512db81b881a3981', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '68eafd889ef3d29fc13ff177538963f778d1bc31' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6c0628475c609918793d8f47605daf793fad4e50', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '70be59dcd5a92fc22d36b171c3edfd9d4ddd16f6', transform: "translate(992,775) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '33078c3c17c515ecfaec364270f18aa47136bc2f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8f81887344b9a8408beb58c1b0361d63e5302424' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0d7dbc81a543d4418e832e105432100ce25f8d17', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c9afc82a295a74c8b5ce7f386f2c74c4646da40', transform: "translate(279,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '96a89ebfef035337f0c619903bd9bc0377cbe3a0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a752766cd456ed81154783c4968818493bd8b2dc' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'c8f5ddb229223a73731f9b2d13cef0ec7a4af73d', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '349eb574c87c988f77d855c9124d6752eed4fe90', transform: "translate(310,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c89c64bc5fac15a0c192021e7828e0549d60c3f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '256ffb5f6f757c7bfa99fb42742778cc6d5d71aa' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3553bcdb3b9848142ebb542a2cabf565edf9e4d2', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5e28e7232bf0b54a2be968a69056de7b69b61d86', transform: "translate(372,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4a691a4b532ed1d0d3a5adaa20d93d6d4aa74741', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c899a03f7d100655f6cfe82425ac9663e3f183cb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '6df0b6022d4ddc0ce03bf8e47bddf81f44169cc3', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5c0b145de6e865052ee8816520f0300e1759c166', transform: "translate(434,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5224fd303003c255678e8d66d5c444fd9a84e644', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3e8be2486719a821e51e424fc7f40fa955427cb3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'cf8374299e9f320f682cf13c18144c8b90f66d66', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '179bd68e4053dba2d73e0c12dc40c1a8c4813b32', transform: "translate(465,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'be4f71ce7d6a169000a8d0c90a7a4b2f528b715f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'cb01ba754fbddc3d94db8bd5dc14072eb30489b4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '49f8b11d0d42ee628381946473a92abe1e39d8fd', transform: "translate(496,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ac91d7084fd024d9f337ccdee0d79f720dcf50c3', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b797dca3ffb301c4d7253a532749247a61fd97bd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9c7685de6cd4580e66ef9c4c09f5bacaa4fe13b0', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1615e6e861753b4d81671fccf09359a0f9a03022', transform: "translate(651,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f950f562466e52ec00ade2cac7735090ab818331', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'd67395cc19d2d1cb383df28ebff22d5eb34e88b7', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2fe69a5555db4fe5f8f073fb4e80df7201f7b1f5', transform: "translate(713,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd7088fff87f460a9fb91b5f561e119cc4f333334', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'e9a74166009c148b6d3687ff3eaefa10500b7585', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '78603ed03681bef14ba408cd5e1dd0a1f786f69d', transform: "translate(744,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3aae9ae6b9b345ba7c47b8a7bcea6ab820aa4ea0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2356eb770582aa72eeccb30d4954880403efbb79', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5d073c2cc4511c6a18b47ca9a94ab090fbbd678e', transform: "translate(806,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3dafaa289e8a211a1163d19ed376b9d35fc7cec4', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '661ef65a74374d056e58f755a498511b6ce1bf12' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b9c8be35150f3875e8dbe5adf4b560ad57245e17', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b6b83dbaacf7fdfed35dc9dc0200c4367fd977ed', transform: "translate(868,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '776502177212ca90f0b112f56ca8954996b85241', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '03492b160f56ac9c6b2adc615aa4a129a7ca71a5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '26608b264dfff9ea56ad46b287c4f99fbf7a6e4e', transform: "translate(899,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0abc78c16e83cba2ffc8105b261d41e2f53e4dc2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cc66d56ccf6fd8f127f950ae5b36ee5bb52e8d78' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '52709b5b5553d26877d44d3efd938fc9bfdd931a', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8561656762198c33f719d697874d004616ee0dba', transform: "translate(961,806) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '56c09d8115e2c37356023407d4341ca1fcd79230', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '85e07362c62235032ce6d862094dbbea9b3c44b4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9da13748e54312704f1d606233da41ef69a14b44', transform: "translate(341,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ff95b65f91afe255da25f6febddd12cad2fdb8b0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dea6fdb297c86c2e57d42c5ea5bc05b1329f331e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '15a39ae64a2b5ef116260283c87207886bdb68ab', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6c30205311118556bfa4202ae6d85be8bcc6b8e7', transform: "translate(372,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '954b5d2cb2a21b4f993b91d652d706ee1ef38c6f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c543051df71bc42e1a195ff34fe3b080d8b19838' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '29624e4eb357551964d2f06f79a197f0cf8ad8a5', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e4fa84fba6a2973d75980866cd47696a4b691af', transform: "translate(527,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'db2f7a02fef7d95491ba244e69151b51cfc76368', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f97858d74c01d7654b7f834d2b61dae129ec2628' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dfa2ef9d2879cfe56cde861cadd8ce9fefd6f8fb', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1189d3366de761673f4a47fe3a49fa323295e222', transform: "translate(558,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c07203ca3b0ad8952690506a422327678d2e07d6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '282df2747c3495982768d9d04b2ea71ec1ab8d9a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b0e461f8db559c8d2a5223f4e0cf0108dce92f11', transform: "translate(589,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4c7e00e89db48dafa168d11bb452fd42ee0628fd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '21d77323c6025e21fc093c2ae759f193ce8d0b33', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f606ca583a44cec33f97a6fa522f202d106afc9f', transform: "translate(620,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a61160a8c155d9744ff27b568cfe686e3c62d9c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b917a975f7df719bb478c41db87fb70868d7f559', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4426c23e2ccdee573aadf063e71a2aa564107f07', transform: "translate(651,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '932e80c59943f5f52bf8f457b0002c186181e381', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f6b95971b30671a10f4a75c840459d0b32d3355c', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '09334c45e8b005b27dfc39782a8dbbfdc448fe88', transform: "translate(682,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '891dad6ff2572f4850cc2414d1da2e892a75ed3d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0aadbe2d20b27afe218b5c9c1f43f5354cead8b5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f8bd6736016f935720fc589fe7211c7ad31795bf', transform: "translate(713,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '79ff8d09cd31e676f7352d775a679fd2c08ce502', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '5044a749845beb14fe3c83c9b32f346d6613b4b5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5c8b9d7a7651a2468e276555e9417c5553387332', transform: "translate(744,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fb4171f157e649e56df2f5b42de2e5204df515ed', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '69242221e99d715877d1a6aaa97cf90fbb1e285b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '395f975f18d487d1b99ccfab81e16c87b4bf86d2', transform: "translate(868,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8aaa88962fe404f9bd538da7c1b9a3884b7d3adb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '532612eef8661e2141d0965786c0f0ebe593301e', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1ff38cc3bebcbeb5557d546402c06a4cb17918fa', transform: "translate(930,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3dfc0d11725e9db3359c7d219856badc7ff74d77', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4ad3aef8e9f374d79d75dc359bd72dae67312d77' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '879ae67ac695f441454ca5bcbf46569dc24af249', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '84e4563b136da180e86599ab9db3648594a32535', transform: "translate(961,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd03206491a37c1b997a56b8be3cd9056e5beca90', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c26ce7efb2d74281fe7dcc63f8115dabc4123d17', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e733bee032f036491ea3d053d68abe096ab94623', transform: "translate(992,837) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'acf1684e9f7ecdb05e1ef3cefd10452df80ce510', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '095eb058d07c6f80c8410590be9d29654f6036cd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bf53c7ebbc31c79db9a1e24a697a8a0580cb5d4b', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bbd2d8f3b8a4ee7d4245fccf7d84aa3e0458dd5a', transform: "translate(248,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f9e74d9fc3b9abe872d8e28839934f36fc6dd87b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2e8305f490869c98d734220947be9f26fa30097e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f9b4ef988d99082809d513a2676a6206135efb17', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a20ff5dc31d0ca02318839b57875a29f26f7bcd5', transform: "translate(279,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '15db9a1ebf15b6ce4432a0336552dbbb0dcb246b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ddf00c79cf4147b2adc50f4c3460661cfff4b0da', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f45df3f92a72defcf9f17070e7c9186d20eefd30', transform: "translate(310,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5e6dd9d9853ce0ed4e13f0afacf7d2f255f6059e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cda093db726c231a31c528f65f2f02ecf88b829b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bd8e9423480f57ffc81490c430f19c9e66fa3a30', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c1d78fcf0544b9f9fd47c71f1082f008d544e429', transform: "translate(465,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '94dcae1089f21a5828ba5a0143e7b104192b6364', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8b89eba17d3a7547a4fc82c6b4ec77caf9a75a6c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e98e287e319807da3141c90f8e1106c9e8b8ebfb', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375V100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '66c8b06aac45058f001ffcd769d353085bb472cc', transform: "translate(496,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '441e180f52062eed729a5f95e053ebf6e75e3980', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a1eac8570a08c9b70ba04da8c951c132e6cbb291', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c29649d9fd43de4b26f28bbb200fb17601b55563', transform: "translate(527,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1b06066824fc4b9f705294bb1ef80a1a1c9f2109', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1d3e7984dbf6cd3f5b3afc7e6ed0141d6cd2d92a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dedeb0f2ed38467574577b38a11baf6df5f9989c', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a22d550fb3c61c4ac4ee2bf2b897e30cabdf32c1', transform: "translate(589,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c4ffbaa99d44e7c757b2fe8c3b6975b67e533f2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b52d65c5b3094963b160736bb9ff1a9b4e20d90f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9f961e852ca12947b339cecda3546437f57c9bc1', transform: "translate(651,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f6bb646a303eb5dae312df5267b1f268980c795e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9019b95f9fbf3f89a54d1ba1c89b1b7d3f5e0587' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8dc585dce66a92d4149650b0228b4d7972a261c6', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '88bea55444796834798c25a5ed3834a1fd21a4a1', transform: "translate(744,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c0246f96677ac0254d0e1b73affa3ef00f8795c0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '0f317071640e33f4dbbf64cfe1d77c405d0cc9af', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5bc5ace3ae4c368c5b190a2fddd19585556ee7df', transform: "translate(775,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6a9a41756e3d30331031e5c8fe0ff8697cc06908', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b1ea96ee373ce0d073648480c65a14b46741ba2b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ca8e91f1b7aaa18fe36c7e2f9f73c72e4dc56b90', transform: "translate(806,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2c1a505cea0435d10ea6541853fa3dee724b3598', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ba7a4ffd7c87db57dbd5f17f14ff595fa39ae7ca', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cf113b5ebc5a77f5127c460d34a03b856564d4b3', transform: "translate(837,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b1b97495410c869c6e42d66eceacb35e59d69991', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ca94de911892cd3014bad06a188ca447b20e0baf', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '29e0598258460d9d58a025d268e8a20aa88c65c9', transform: "translate(868,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1cdccd7c8d3781f9c746d67d06a42bc91b1ea1e9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'a1c1d1e317df2e2d343d77f921c9cfbf91ba8be2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a64d6e0facc7bf3921fe744ab4d5409d0fb5edbd', transform: "translate(961,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd397b55266044089ba79b224737a3165a1701e9a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '10408e94cab6c954d3f016a04b9406e3ffbacd5a', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e62ae169c6bbc57113c3851145b9876838f2b57', transform: "translate(992,868) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '710b50c0331dfc97d8b31d73820b3cccbc9a0263', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a547324330f68884fd7720f894453fc65f493ca3' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b234c747bbe5320fb7780caeff8d5bbd87f38fb0', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3cb85f1ab76d22d9ae7001b521786abf7f584aa9', transform: "translate(248,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e6eed48dcb2f28be46d8903b95c35673252f5509', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ec86cb4d546d20a5189f3b935c63c5ddc07b868b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a8fbcaf79cbf7af657036fea999ab6d98c468a09', transform: "translate(279,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '052a7bd75ca7aa5c06d7eafbe1168f9e4c8d39fd', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f508649a3f0215b88091a2620540a7afb46120ba', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '76fd897d23b2c01a5dd5d4bcb6c13048b2227fa7', transform: "translate(310,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cfe69180a4f50f1685bf4cedb11b10c749bd87f5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2083f59769d52c48c78cc9f6b43655568092f719', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ce9864e45533d878e59a3c9e763043ad3cb68e85', transform: "translate(372,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ce67086ffdfe3a0f368a8912a501d9e74584dff5', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '244ebb513f89992c27a07433bce031f309314f1d' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '51dfe83070343fa0df106555643295f6b263453e', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0f46b44cbb0ed16e8000b03d1bcec0e4c83a2ba3', transform: "translate(403,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a7f404484198003e10587a5ba77a86f70e0b7076', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '10a21f05e90b217c893da980383e5db78ead53ad' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '84aa7ad8c352117938e0be4c52e4533a403faded', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e2ca8c8f64c514fed0de10a99409a50fc919e3a2', transform: "translate(465,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5c8453cce724128ba8e41dcc90c1abc921fa1da6', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '17015ff410b6acf66e4b39ecd8a3d7b0bb13285f', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0286b6235350ede5c08e69633be8811a925fd42b', transform: "translate(589,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '89cfad032d4c61a035114649549a88e804e58fa8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd12172894218d7acdc2871bf6becfa25d3e9cf0f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8f0c4b08070d35620967a59c53ae2323180c035b', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '73551c5c3fa1931bb6f491065cb5d52dc49228b4', transform: "translate(682,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e9a5f05f18aaae8d96d48c081058588614c4c9cb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a4720f27f7cbb6d16dba3f4f06e300c997861ffb' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'fd6b17558bdbbf5e8c7771a663ad7e96725963b3', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1b2d24917f5e67ae64830135683229d8f72b5815', transform: "translate(744,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '758bb90cf37b1b411edd5a3c83ef7abf0d6fa5b1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b98319fc5f31a3076d14d4570fd4843a552b5bc3', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'da3e75caaf5d251c4e3e6688ec0a2f3d7e97aeff', transform: "translate(775,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f05d0e068227bbcd5de72d687e6993e9e59d3fc8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'ec61e50d64de0c19b50718b33a1d1ed2a8c237b1', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '796d4988f86c9206ce4799672bcffe1cc3da2587', transform: "translate(868,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f40fe59c1c04350b977904199c50d063e02cc210', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '197b70f66b0cc0a35af78795a2b8901fc4588d7a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2efb0e1abad9fdcbff9d8624790dc85367207d93', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6c87eafefbc1db2ccc6ef9553499b29c326d101b', transform: "translate(899,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e5c2a9209ab9c36071f820706e7fc6a07fd79fb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e71806b353c6af7fb804f98957f9c5afb9d7568b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'ca9540f888d62c08f89a1282855382059ac2feb1', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'dc037fddb21d34eb77c5bb7108c4f439f35f44ae', transform: "translate(961,899) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'df32456f48aabbe8921d68634e7bf6e6498d485d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '29dac6c8d12dbf510b0203d6d09dffb4a1ff00e1' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3dfca5b7c867609dce1fe7cb83e91387e5e27b01', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '67e2e4968a6fbc51f5ce39ce030221c8b5d0f0a9', transform: "translate(248,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'acfa4576461fdcd6f19f89a88248d3ad85d364bb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd366c2270aaada77aba1a552a7adb5bbb4e57688' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '87410689fd8cb034f4b844e7ac492ffd64e222e2', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c5e85e4c88356ddd15a002b3f1cd5074fce390f0', transform: "translate(279,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ebac49331b371f5f6f04e1db586a80486698e001', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '5396f0c7f5e17d275bb3609e109a308d52440abe', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '29b12292d9379d558ca37405615e90136df47ce2', transform: "translate(310,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '08ddd5650c996c4e740aa0e7c7796ae305c0bf46', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '15e9dc956358c2fdc6006978ef8dae97a0cc7e4b', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aca0218abeea356ce7f678c9812a434c71122c0e', transform: "translate(465,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e8772ce6fe1ecc03cf0100e94eda9e847b6cb2e1', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'af07d7e0fc5053b3601bd73d2c5e76910a152db0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '8905a3ff26aca509e4b5be9e2d893ae0e15957bc', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a7ff68526264fba171d3a29c27041df5893e0102', transform: "translate(496,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f953baf49e19daa9914e45d0404e336aae488bea', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '935cfefefdad6c70abc4add3a16f29b0c7c56d51' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '09263b148680e1fffc0afd3f5ece5b27b1915990', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '40a5b3e99ce451159c38d6d20ea71b1a68a45406', transform: "translate(620,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '17162ef0e928051903e174b3f96b4020084b1b58', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bc934c41418d58d112539eb3b39d9ece608b94b0' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '7cd083245a70abebb5834e8df82764c79b985a46', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4e009c9af5b2449cfba2a6220c8e55d12377f6ca', transform: "translate(744,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a3580de18264c4a380041bf60b855102bff40165', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6f24c68eee8373be76a66761f1ec311b73e9bc7f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9b9123e1aa8bcd11a43041e341b9be5beede7fd3', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e59177ac251f81a553d15e6ab2cc64c24be76737', transform: "translate(775,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd0084839bc027166a677ad062c1a9b56498be1bf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '33253bb435938245797fbf000975775ae96220d4', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '33db8c3d3fb37e1882e2a6bad4077621097fefb9', transform: "translate(806,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'bd99463d39ee1845a96d327ff5eac89ab1efefe2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'acf275f94f72424ed6b0da017f0f0656a2a9592a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '667e3852ff4de4d63f9aa48606183f97d8704fee', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '55b9168754e2ad47173cdd96a5ef3e1fb236118d', transform: "translate(930,930) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b66535cec042f841fd760c5be3a3a7fe4a3f42ed', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b2a0e52f894ba6e6974f8e578cdc9bd452dfb1c8' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '849070d0a1eddcd3e2e22f9f5222791d3d30bd1b', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f852c83ad68743bc45b3c6c35eb9564c4776cfcc', transform: "translate(310,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ad7e66795dd47a7c79017e9815651f186d970e0d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'c1c5437081bf4eb217f4f939ac321f2468f65aa5', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '691b6ef1f377e3238c772750041a665401bea11d', transform: "translate(341,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1a64b23bbc1d0e87d562aeca38ccc351060031e7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '3b6c014a00e7c4d3422cc43aa2a9563ff77a88e6', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a2f393edaff4e3a145fa2163b6a6c37ea1434fd0', transform: "translate(372,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '92a6309e53dbc91f3a3aae5431eea3b959ccc4cb', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'b20c326c824a30254ad4c1ba8f02f086ef0f25cd', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '738a8e747a42f4102148b57bcb6b003e8753a541', transform: "translate(403,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8bfc8e7e286501e5f3d9c894cc007eef29709756', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '5ec0e1696b7672dba29455b5d35126ebf6b3be15', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b402ce1c74a4673c242363712f0fd97e27fb527d', transform: "translate(434,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e325714de373024936e11ef8d068ae7696d5d1a9', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '958fc3cc3e2f24fe879d93ceede46b23e74ab95b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '023e20fd1327b91fbfd2e287a6156944d8c00ba6', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '81c1e0968443e3ace55ef74b7b5248da27fd5d6d', transform: "translate(496,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '700599e958a12945c84eb522825ce43ed293f7b7', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '81bcce0e43a0852faf4f9b67202bbbb54f9755b9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '42ab8efe7078a4a22ae13f2d27042220f10d0ba9', d: "M99.805,32.031H100V0H0v32.031h0.195C0.065,33.073,0,33.854,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100h31.25c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tC100,33.854,99.937,33.073,99.805,32.031z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c94ff91186b1d4ee7a202b286ba9a5a305c696dc', transform: "translate(558,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9116320d8dbd7065f36181771a6f20086c9d255b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8349c8949ca62a75bc5ddfe07c30dd6b84b0cfe2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f806c9f12d05e953d43364ec2eb24a86eeae0f0f', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0h-31.25C24.87,0,16.764,3.353,10.059,10.059\n\t\tS0,24.87,0,34.375v31.25c0,0.521,0.065,1.303,0.195,2.344H0V100h100V67.969h-0.195c0.132-1.041,0.195-1.822,0.195-2.344V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'cd69d875ae863edcbe9a3cf3282014442eb4927c', transform: "translate(620,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '05bb85506e84f3223e8f3409f2bd0f573b0bb3cf', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8461d0b86b02b6837d65437bdef60dba907203b9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0193c55228f38c23efb8c19623834f50051dd8c1', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c44b4bf67e9738eb522a328422ebc63d70111ab1', transform: "translate(651,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '87b3e1ede7d2ce94b99653f47ffa6bc3f2f7b968', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '87d648cb2d59c8298417c88f2cba9b892dc51df2', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3cab009f9f40e76f638834528e29f7ebfd0e813d', transform: "translate(682,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '05dd3473a4badf43c9bed3e977b79a31682c703d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e13bb97573392209f5146aa338871ce901d2fef7' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '78621cf273805d94d6d24ec22c34aa600021cebc', d: "M100,34.375c0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0H0v100h100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b4752fd2156940f41ffa8a323ffe6e47b1333976', transform: "translate(837,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4c76fcf419141d16badc1b12963149dcf4bf2b0d', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4f33746cff715f458da1c4dde2838bf214e5f601' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '3128a7f20c28e234d28d553f8e97484c4f192d96', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '5be503a984124731688807db5e7237c1ca53b5be', transform: "translate(930,961) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd2cb4d5d954bfbdabf5297596659a7e2c70e294a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '2ec4291b7cecfff1fc8265f544c7ed61e8bc9ca0', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '332ee438182ab37ca0b8575738101ac11d43fae1', transform: "translate(279,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'beba3db907dd6170f9562dd20e76f445649403a2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ad69d9ca48466491acfbd7061919efb1fc5d7e0c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bd5a57ae7d7dca639d98576290f7d5fe0596e256', d: "M100,34.375V0H34.375C24.87,0,16.764,3.353,10.059,10.059S0,24.87,0,34.375v31.25c0,9.505,3.353,17.611,10.059,24.316\n\t\tC16.765,96.646,24.87,100,34.375,100H100V34.375z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'd8d60b2adef6d8e498db9775e2cb22e83c282d9c', transform: "translate(310,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ea9769f2522d8a530cd1dfbc04d07212006d1c5c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'bd136a6e1a1e159bdffd55fdf42ce96aecb6f3fb', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '082a6f7525856c8118ff3916d296983e43a80bef', transform: "translate(341,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'fb0067df9e3061b56fa9e3db7aa7bffe602e9fd0', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '6936fec2f3cb503a4819bad249c922d4a98adb87', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a41771c6f831060178f599ab5599db702abde13f', transform: "translate(372,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2b9aaeecde4d91af47e0cbf73b16d62ff31d3cf2', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '929b9cca2c9280fdc4863c2fff5ded8ab30e4976', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ad785156834c200c9b3ba09bfff37fd051e1ee26', transform: "translate(403,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aad5c8701645c3eb48268bfc0cb96fea46f2ed8c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: '7b7922cb3bf82aff1f84152a097068db7eec9274', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'a59f6e50f60c98b241dfaabeea027a9ab6cd9787', transform: "translate(434,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1f772d472acb1df8b7aa2827eab90d48fcb03a5c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b25ad9173b6f71ebf7812fb64010b0151ceb8f5f' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '871748f2a098e1179b08e963f0322079756aaa64', d: "M100,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ca3d3fb704871bd645987e1695163fb87c21d2a9', transform: "translate(558,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'b1d3e10d814da2b06ead05292cdd01af7b4d8c1c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8be3153f14eacc9d52f7218eea658f8313618090' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'f690a520b5b96043cda1e4abe2cc66c2c0597445', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '80f51750f40cb2c7019933626a5acc105e299a60', transform: "translate(589,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '77dedabb5ddee1ea5d937312dfe34c12a38d9557', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '124abb44a1bf24cfa37977d333d153872134e5a9' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '72ed4f696565dfbe1db5e369fc9ec949a505fe53', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '1534930373e9743fc97c16fe60cda66428843bf3', transform: "translate(682,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '019ea73f1f915b3edba0afd3dbd7b2e77733b7ad', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '20f3024fb0c0113045f9c613287eba92d0c78be4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b81c5b33edf0a93a659ad41db92484e36eb84826', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7d9f84d77d39c58f8db6584cf80cf78dc6a9e05f', transform: "translate(713,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '03781ec4de35785a2bde8289aabc6c60bb4a7283', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("rect", { key: 'f5cbd10896c45bfba06a891e7678bdc979f1bcc9', width: "100", height: "100" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c2042a80c0116686d2ad023faf9e4cb793fca33b', transform: "translate(744,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eb4d08da165fff0e66c35a37769c3d5bf57bbda8', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c107244a5bb337627529af67df6f019a25222231' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'eecd094521c2260370f38ff74c641b2fe4ec51bc', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4a8478b6ce7b2992d4359d121521177425306393', transform: "translate(806,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0cf30dbcd2ef325839f922e36c255372d3473fdc', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8c36b96659393a6d1f35a2208dccbe2ca19f48cc' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '273531f5de75bb8286904056413e15304d7d2d8c', d: "M100,65.625c0,9.507-3.355,17.611-10.059,24.316C83.236,96.645,75.132,100,65.625,100h-31.25\n\t\tc-9.504,0-17.61-3.355-24.315-10.059C3.354,83.236,0,75.132,0,65.625v-31.25c0-9.504,3.353-17.61,10.059-24.315\n\t\tC16.766,3.354,24.871,0,34.375,0h31.25c9.508,0,17.613,3.353,24.316,10.059C96.646,16.766,100,24.871,100,34.375V65.625z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '793cb587d37a2ee92fd0630502d5dffae32d259a', transform: "translate(930,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7723a9ed8e4efc8ec4a60be6595ebfbea664673f', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'aa2b5b87c57ae3242c390816871df8069cbd2905' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '9065b50ca7cdc42486e9cf0da7ee9a0540ae150f', d: "M100,0H0v65.625c0,9.505,3.353,17.611,10.059,24.316C16.765,96.646,24.87,100,34.375,100H100V0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '992074ac56143de41b87ee5f9d412fba0d2beb41', transform: "translate(961,992) scale(0.31,0.31)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3e3685b127eba1e275763417289754f4d8f93389', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9544532245b2e96b2fffc4ae2bc6f02b9cb7c61b' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '22e91138a49b15270bc3828ca80e6d80b18bd8ba', d: "M65.625,0H0v100h65.625c9.505,0,17.611-3.354,24.316-10.059C96.646,83.236,100,75.13,100,65.625v-31.25\n\t\tc0-9.505-3.354-17.611-10.059-24.316C83.236,3.354,75.13,0,65.625,0z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c1a6288eb706fd2c9ae3560255f2ee2a1cf283ba', transform: "translate(0,0) scale(2.17, 2.17)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '43fe4a34b6d3d56c75ba9e214abf5dd645ad6085', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'e45d530c29dd99e7ebac977a95539349ccb4a0ce' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e039bb89dc0e42b173253c0fb6d64eb9c27d8559', style: { fill: 'none' }, d: "M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421\n\t\tC15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004\n\t\tC76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '05f2c3e6cbd0282185c4c5b41a53625310d07fa6', d: "M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445\n\t\tC0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004\n\t\tc18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76\n\t\tL50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931\n\t\tc1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '0c8fc5b4d87612224cad9e6b598a1a97908c3a4b', transform: "translate(806,0) scale(2.17, 2.17)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '8f6976eb243f2d96dbcd967684f3a265366f405e', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '2b903667226ddc516a365804d56c27ebfb195b3c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '4adb4d29602446ad22addbc86518f9aa5dfb3c02', style: { fill: 'none' }, d: "M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421\n\t\tC15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004\n\t\tC76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '73de584fb318f90924affa95261ec07040cb703a', d: "M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445\n\t\tC0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004\n\t\tc18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76\n\t\tL50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931\n\t\tc1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9e0e9146f57e25f4c7af3599f17722e75a0b7db8', transform: "translate(0,806) scale(2.17, 2.17)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '6a6a6e08b878fae0892d7e7535b76d85c4b3a50b', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'ef978c4465401b8fd5f0453bdf7046e8cd6352b2' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '141b93a27a93a9de0bf48b621ff0f6908e909574', style: { fill: 'none' }, d: "M65.859,15.008H34.141c-4.082,0-7.869,1.258-10.979,3.398c-2.419,1.665-4.428,3.864-5.848,6.421\n\t\tC15.838,27.484,15,30.526,15,33.758v32.471c0,10.344,8.586,18.76,19.145,18.76L50,84.992l15.855-0.004\n\t\tC76.414,84.988,85,76.572,85,66.229V33.758C85,23.419,76.414,15.008,65.859,15.008z" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '0e907d93530716c59ac4b2d30d712ee70710fdc3', d: "M65.859,0.008H34.141h0C18.683,0.008,5.587,10.221,1.4,24.18c-0.433,1.444-0.771,2.928-1.006,4.445\n\t\tC0.135,30.299,0,32.013,0,33.758v32.471c0,18.619,15.32,33.76,34.141,33.76L50,99.992l15.859-0.004\n\t\tc18.82,0,34.141-15.141,34.141-33.76V33.758C100,15.148,84.68,0.008,65.859,0.008z M85,66.229c0,10.344-8.586,18.76-19.145,18.76\n\t\tL50,84.992l-15.855-0.004C23.586,84.988,15,76.572,15,66.229V33.758c0-3.231,0.838-6.273,2.313-8.931\n\t\tc1.42-2.557,3.429-4.756,5.848-6.421c3.11-2.141,6.897-3.398,10.979-3.398h31.719C76.414,15.008,85,23.419,85,33.758V66.229z" })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '86a2a36f9ae47ad52d9d0f57c1978bcab98a5dff', transform: "translate(62,62) scale(0.93, 0.93)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '7928b29052e652bdcc5af47714c76a2d6629210a', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4010eabe29e0dc14e396d1a16e85c1f69fad8f34' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9a788e355606f31a1b37dd9964025c1fd3f632cc', id: "XMLID_1_" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '80f14734ffec7356ea249238fa24b42ee2359f5e' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'b3307d946f566c88303ed142e390580bf9fa94da', d: "M27.351,100c-15.09,0-27.365-12.032-27.365-26.808V26.794c0-4.616,1.2-8.96,3.301-12.761\n\t\t\t\tc2.029-3.658,4.901-6.802,8.36-9.174C16.09,1.801,21.506,0,27.336,0h45.327c15.076,0,27.351,12.018,27.351,26.793v46.398\n\t\t\t\tc0,14.775-12.274,26.808-27.351,26.808H50H27.351z" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '9231fc6a2c9f03ae0556686585de9ce6faa6dca6' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '104c52c100bab99e42827297a2ba4a1d62321c5d', transform: "translate(868,62) scale(0.93, 0.93)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '26ff81ec8a11acefea5213f6bba7c6127bcd188c', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c4a3307d635748adad590cbe12ead509f8b5e7ea' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '869778e8e022ea79d0ab0e4d392aa1a32a97985f', id: "XMLID_1_" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '4942df99d5625ab1a28ffc14ccad194ca53f5a78' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'd0e7a7f1fdadc8ce536d26c44f1590d7fe532e7c', d: "M27.351,100c-15.09,0-27.365-12.032-27.365-26.808V26.794c0-4.616,1.2-8.96,3.301-12.761\n\t\t\t\tc2.029-3.658,4.901-6.802,8.36-9.174C16.09,1.801,21.506,0,27.336,0h45.327c15.076,0,27.351,12.018,27.351,26.793v46.398\n\t\t\t\tc0,14.775-12.274,26.808-27.351,26.808H50H27.351z" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '83e03bf490937954a6df45c791a748bede8c73ec' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '24d9702d7680cfd3d6dae8b247a856e8f8bd1844', transform: "translate(62,868) scale(0.93, 0.93)" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '72212b5d2f29d2d5ace314d7367fbb7253e5d295', transform: "", class: "qr-code-group" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '3a0424929b785450dfed18fa6556e9ce85597d19' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'f5e484740a2438ee67319c008c231493ea7c4a49', id: "XMLID_1_" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'c3d543929d6a1c2d6ac71226a3d2b16f8b4ed09a' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '668b17f8e7538661688cd2df42de2073fb0e8374', d: "M27.351,100c-15.09,0-27.365-12.032-27.365-26.808V26.794c0-4.616,1.2-8.96,3.301-12.761\n\t\t\t\tc2.029-3.658,4.901-6.802,8.36-9.174C16.09,1.801,21.506,0,27.336,0h45.327c15.076,0,27.351,12.018,27.351,26.793v46.398\n\t\t\t\tc0,14.775-12.274,26.808-27.351,26.808H50H27.351z" })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: 'eb0e6e73f2836e888a4188866ef401780a9292d4' }))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("g", { key: '64beea2fd5f497316e5465a3a22d31e6498a43d7', transform: "translate(341,341) scale(0.43164556962025,0.43164556962025)", width: "341", height: "341" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'cf84fcaa175b78854e041a2478f060be2a9b14f3', width: "790", height: "790", viewBox: "0 0 790 790", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'e49efde94dd488fc0e5b98f67ab6168a31e9d29a', d: "M689.839 154.133H99.1611C71.255 154.133 48 176.48 48 205.346V540.558C48 568.492 70.3248 591.771 99.1611 591.771H138.23V712.82C138.23 737.961 152.182 760.309 173.577 771.482C181.949 776.138 191.251 778 200.553 778C214.506 778 227.529 773.344 239.621 764.964L434.964 592.702H689.839C717.745 592.702 741 570.354 741 541.489V206.277C741 177.411 717.745 154.133 689.839 154.133ZM212.646 729.581C204.274 736.099 196.832 733.305 194.042 731.443C191.251 729.58 183.809 724.925 183.809 712.82V384.125C183.809 362.709 198.693 331.05 215.436 317.083L399.616 156.927V564.768L212.646 729.581Z", class: "qr-code-group" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'bab0b6004f006baa08c6b52bb003cd0cda6da78e', d: "M622.864 50.7755C622.864 22.8412 593.098 -4.16271 557.75 20.9782L437.754 122.473H622.864V50.7755Z", class: "qr-code-group" }))))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '60ee0328066dace6c277749c426b2f1b5ca4b6bd' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'faab771a06f1d39d39b9dbe2331a8e61b5ba3b27' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { key: 'eafec2a104b43de2a9f45dae184d6d99cbd0ab69' }, "It will take less than a minute, but will mean a lot for Vocably.")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '1cdfca80769bf9b62536f9d84849a3f3d65399d9', class: "vocably-mt-12" }, "Do you find Vocably useful? Your rating on the ", this.platform.name, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", { key: '7fbe787c2e9a23b5523635d670703e2bdbe6bb7b' }), "will make a big difference for this project."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '71c816dde2445354efd74045f343cc46c95e832d', class: "vocably-mt-12" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '9a5ee8c74c7084b076d72d72a539f9c5444a7cf4', href: this.platform.url, target: "_blank", class: "vocably-button", onClick: () => this.userSelected.emit('review') }, "OK, rate Vocably"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '166ac4efec1eeee70ddb40256bbbf63befc0ba96', style: { marginLeft: '8px' }, class: "vocably-link-button", onClick: () => this.userSelected.emit('later') }, "Ask me later.")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '739efeb1fce57e628da633ac217eb32a1c7daef6', class: "vocably-mt-12" }, "Don't you like anything about Vocably? Then please", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: '1b34ad8cd4c20064f5cff8f7b1b3d9ca7a711e91', href: "https://app.vocably.pro/feedback", target: "_blank", class: "vocably-link-button", onClick: () => this.userSelected.emit('feedback') }, "contact the author"), ".", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", { key: 'c9f89ba08f87e09476720ccf8a72fc82c958abff' }), " I take every feedback seriously. We can improve this project together."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '0e4b77d1bca710783564e6ce06660e79f1538c41', class: "vocably-mt-12" }, "You will see this message again after 10 translations.", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'e542f5a07bb1a78b7e22a92397fd220e99dce64a', class: "vocably-link-button vocably-text-link vocably-small", onClick: () => this.userSelected.emit('never') }, "Never show this message again."))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '0dff8775b03630e9c66cdeb7de91abf166d55c63', "data-test": "sign-in" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a8964283e75674891eba1497e9c4b4e1aa09205d', class: "p" }, "Please sign in to proceed."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '2e8ea5853cd4e68549fdced44af8970b49e9d187', class: "p" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '1e108eb3094989a9f8e7a0993d9b9c9c5d84bdbc', class: "button", "data-test": "sign-in-button", onClick: () => this.confirm.emit() }, "Sign in or Create an account")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '0a2063a5c2c1e11bcf56ac92755cff16160ba3eb' }, "By signing in, you agree to our", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: 'ceb4722559544f07e981fad9da3986ce1e31ff16', class: "link", href: "https://vocably.pro/terms-and-conditions.html", target: "_blank" }, "Terms of Service"), ' ', "and", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { key: 'eae3ef2479b14fb5c2831bf3e580b879ec4254a8', class: "link", href: "https://vocably.pro/privacy-policy.html", target: "_blank" }, "Privacy Policy"), ".")));
    }
};
VocablySignIn.style = signInCss;

const spinnerCss = ":host{display:inline-block;width:140px;height:18px;vertical-align:middle;visibility:visible !important}.spinner{text-align:center;height:18px}.spinner>div{width:18px;height:18px;background-color:#0050ff;border-radius:100%;display:inline-block;-webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both;animation:sk-bouncedelay 1.4s infinite ease-in-out both}.spinner .bounce1{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.spinner .bounce2{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}";

const VocablySpinner = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '0f062c172c5e22b6ac6bf3f24f166ebd2cdbd8d5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'c730e7f788bcc36b2e2c7ea76c40c5a39f8ac526', class: "spinner" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'cc2cdca3991872fb4ccca7cda99b11d6f7c762aa', class: "bounce1" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '17d83b5b2d686d36252709e91cccbdc500da0ebf', class: "bounce2" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'c332ed887e35016d53a8ab41eebcf2f6ead26be6', class: "bounce3" }))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'ca21f9a7f31c6bdcf1fa8ae960299b59bbd78143', "data-test": "subscribe" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'd694b4bc30c894e758662eda2803be0a040c8b30', class: "container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '956f9d2fee339796551735b7d0590b8375df31c3', class: "message" }, this.trial
            ? 'Request a 7 day free trial to proceed.'
            : 'Please subscribe to proceed.'), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'fd5f130fd4e55a4bacbf9700a7280f8f4b418483', class: "button-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '3306457a7e1e39b37b3861ccd7de688eb9d3947d', class: "button", onClick: () => this.confirm.emit(), "data-test": "subscribe-button" }, this.trial ? 'Request a 7 day free trial' : 'Subscribe')))));
    }
};
VocablySubscribe.style = subscribeCss;

const tagFormCss = ":host{visibility:visible !important;margin-top:0 !important;margin-bottom:0 !important;margin-left:0 !important;margin-right:0 !important;--shadow-spread:10px;--shadow-v-offset:4px}.tag-form{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;background-color:rgb(255, 255, 255);padding:24px;border-radius:16px;box-shadow:0 var(--shadow-v-offset) var(--shadow-spread) rgba(0, 0, 0, 0.6);box-sizing:border-box;width:clamp(340px, 90vw, 390px)}form{display:flex;flex-direction:column;gap:16px;position:relative}h1{font-size:16px;padding:0;margin:0;font-weight:normal}label{display:flex;flex-direction:column;gap:16px}input[type=text]{color:#6a6a6a !important;font-size:var(--font-size, 14.4px) !important;padding:8px 8px !important;border:none !important;border-radius:8px !important;background-color:rgba(0, 0, 0, 0.04);outline:none !important;height:auto !important;line-height:inherit !important;box-shadow:none !important;box-sizing:border-box !important;width:100% !important}input[type=text]:focus{background-color:rgba(0, 0, 0, 0.07) !important}input[type=text]:focus{background-color:rgba(0, 0, 0, 0.07)}.buttons{display:flex;justify-content:flex-end;gap:4px}.delete{text-decoration:underline;text-decoration-thickness:0.5px;text-underline-offset:2px;color:#0050ff;background:none;border:none;border-radius:0;cursor:pointer;color:#ff5e5e;margin-right:auto}.delete:hover,.delete:focus,.delete:active{color:#0047e3}.delete:hover,.delete:focus,.delete:active{color:#e13a3a}.cancel{text-decoration:underline;text-decoration-thickness:0.5px;text-underline-offset:2px;color:#0050ff;background:none;border:none;border-radius:0;cursor:pointer}.cancel:hover,.cancel:focus,.cancel:active{color:#0047e3}.submit{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important;margin:0;flex:0;min-width:140px}.submit:hover:not([disabled]),.submit:focus:not([disabled]){background:#0047e3}.submit:active:not([disabled]){background:#0047e3}.submit[disabled]{background:#bababa}.loader{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background-color:rgb(255, 255, 255);opacity:0.6}";

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
        if (window.location.port !== '8010') {
            this.textInput.focus();
        }
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'a69a7ec71f3ac695ebaac3b7f479f67d070d2558', class: "tag-form" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("form", { key: '26a2f9a5242a301ca352e348d609a7f2ca8ad375', onSubmit: (e) => {
                e.preventDefault();
                this.onSubmit();
                return false;
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { key: 'af528b3b9318ebe3aaa63b0881a64146d54354c4' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { key: 'fc722155c6388f8f92ebfe8849403c78d51dd23c' }, this.tagItem
            ? `New name for ${this.tagItem.data.title}:`
            : `New tag name:`), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { key: '18a273c2e08e87bed323b0a827d3690ee8d53a57', type: "text", placeholder: "New tag", onKeyUp: this.onInputChange.bind(this), onChange: this.onInputChange.bind(this), ref: (el) => (this.textInput = el) })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '02ed14528cfa4d241282d6c558f294188963585f', class: "buttons" }, this.tagItem && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'f8c498dcf88b5cf91d07cdbf03495a1cdf4d217a', class: "delete", disabled: this.isDisabled(), type: "button", onClick: () => {
                const yesPlease = window.confirm(['Delete this tag?', 'No cards will be deleted.'].join('\n'));
                if (yesPlease) {
                    this.onDelete();
                }
            } }, "Delete")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '027e8e95fce3636a240be9054a2bf551834b8651', type: "button", class: "cancel", onClick: () => this.hide.emit() }, "Cancel"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '9fc54ea6c644ec52050b43ed1bbae480103d9484', type: "submit", class: "submit", disabled: this.isDisabled() }, "Save")), this.saving && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '102ac9108146d94e1d11f7e36f74a6290ec56337', class: "loader" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", { key: 'c88cb1d29463a16afa51db1b78306683d2ca5ea8' }))))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '384196e575f1d2ff289525e53054f44f2633fe70' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("menu", { key: '570921daeda364b9dff21ae671c8e23cc32d2841' }, this.existingItems.length === 0 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: 'dfcc6641229e6bde9617ec36469a4f7cb73dba2d', class: "info" }, "Tags are like groups, or folders, but better.", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("br", { key: '1d31d53ed33c28e07b442073beed0766325d9e47' }), "Press \"Add new tag\" to begin.")), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { key: '4c9f2be8e1173cd91bc0cfeb012b201f64c1a113', class: "clickable" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'bf23a0d53bad5823ab0b95af351dd066efa93ceb', onClick: () => {
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
    const isEntryAExists = (0,_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.i)(entryA[0]) && existingLanguages.includes(entryA[0]);
    const isEntryBExists = (0,_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.i)(entryB[0]) && existingLanguages.includes(entryB[0]);
    if (isEntryAExists && !isEntryBExists) {
        return -1;
    }
    if (!isEntryAExists && isEntryBExists) {
        return 1;
    }
    return entryA[1].localeCompare(entryB[1]);
};

const translationCss = ":host{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;visibility:visible !important;max-width:min(90vw, 600px);display:inline-block}:host li{margin:0}.vocably-mb-4{margin-bottom:4px}.vocably-mb-6{margin-bottom:6px}.vocably-mt-12{margin-top:12px}.vocably-pt-12{padding-top:12px}.vocably-pb-12{padding-bottom:12px}.vocably-mb-12{margin-bottom:12px}.vocably-mb-18{margin-bottom:18px}.vocably-bottom-12-border{padding-bottom:12px;border-bottom:1px solid rgba(0, 0, 0, 0.04);margin-bottom:12px}.vocably-text-right{text-align:right}.vocably-emphasized{color:#000000;font-weight:bold}.vocably-small{font-size:14.4px}.vocably-muted{color:#bababa}.vocably-invisible-space{display:inline-block;width:0;font-size:0}.vocably-error{color:#ff5e5e}.vocably-loading-container{position:relative}.vocably-reload{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:white;opacity:0.5}@keyframes vocably-floating{0%{transform:translate(0, -2px)}50%{transform:translate(1px, 2px)}100%{transform:translate(0, -2px)}}.explanation-frame-visible{max-height:500px;opacity:1}.panel{background:rgba(0, 0, 0, 0.04);border:none;border-radius:8px;padding:14px}.explanation p,.explanation ol,.explanation ul{margin:0 0 12px 0}.explanation p:last-child,.explanation ol:last-child,.explanation ul:last-child{margin-bottom:0}.explanation ol,.explanation ul{padding-inline-start:1.2em}.explanation strong{font-weight:bold}.vocably-card .vocably-card-container{position:relative}.vocably-card .vocably-safe-action-area{padding-right:34px}.vocably-card:first-child{border-top:none}.vocably-card .vocably-card-source{padding-right:50px}.vocably-card .vocably-card-action{position:absolute;top:0;right:0;min-width:24px;height:24px;line-height:24px;text-align:center}.vocably-card .vocably-card-action-button{padding:0;margin:0;background:none;border:none;cursor:pointer;outline:none;min-width:auto;box-shadow:none;color:#0050ff}.vocably-card .vocably-card-action-button:hover{filter:brightness(80%)}.vocably-card .vocably-card-action-button:active{filter:brightness(60%)}.vocably-card .vocably-card-action-button>*{vertical-align:middle}.vocably-card .vocably-card-action-button.vocably-card-add-button{--button-color:#0050ff;--color:var(--button-color);border:1.5px solid var(--button-color);color:var(--button-color);border-radius:16px;padding-right:8px !important;padding-left:2px !important;height:32px;display:inline-flex;align-items:center;justify-content:center}.vocably-card .vocably-card-action-button.vocably-card-add-button vocably-icon-spin{--color:var(--button-color)}.vocably-card .vocably-card-action-button.vocably-card-add-button vocably-icon-plus{--color:var(--button-color)}vocably-play-sound{opacity:0.8;margin-right:4px}vocably-play-sound:hover{opacity:1}.vocably-rate-container{transition:all 1s ease-in-out;max-height:500px;opacity:1;box-sizing:border-box;overflow:hidden}.vocably-rate-container.vocably-rate-container-hidden{max-height:0;opacity:0}.vocably-direct-translation{display:flex;flex-direction:row}.vocably-added-congratulation{max-height:0;overflow:hidden;transition:max-height 0.5s ease-in-out}.vocably-added-congratulation.vocably-added-congratulation-visible{max-height:750px}.vocably-list{list-style:outside;padding:0;margin:0 0 0 16px}.vocably-italic{font-style:italic}.vocably-language-selector{display:flex;align-items:center;justify-content:space-between;gap:4px}.vocably-language-selector .vocably-language-wrapper{width:46%}.vocably-language-selector .vocably-language-wrapper vocably-language-selector{width:100%}.vocably-button{font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important;padding-left:16px;padding-right:16px;width:auto}.vocably-button:hover:not([disabled]),.vocably-button:focus:not([disabled]){background:#0047e3}.vocably-button:active:not([disabled]){background:#0047e3}.vocably-button[disabled]{background:#bababa}.vocably-link-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;text-decoration:underline !important;text-decoration-thickness:0.5px !important;text-underline-offset:2px !important;color:#0050ff !important;background:none !important;border:none !important;border-radius:0 !important;cursor:pointer}.vocably-link-button:hover,.vocably-link-button:focus,.vocably-link-button:active{color:#0047e3 !important}.vocably-text-link,.vocably-text-link:active,.vocably-text-link:visited{color:#6a6a6a !important;text-decoration:underline !important}.vocably-nondecorated{text-decoration:none !important}.vocably-text-link:hover{color:#000000 !important}.vocably-tag{border:none;border-radius:4px;background-color:rgba(0, 0, 0, 0.04);padding:6px;display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.vocably-tag-remove-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;vertical-align:middle;height:24px;opacity:0.3;transition:opacity 300ms;transform:scale(80%)}.vocably-tag-remove-button .vocably-tag-remove-button-icon{--color:#bababa;--size:24px}.vocably-tag-remove-button:hover{opacity:1}.padding-left-12{padding-left:12px}.max-limit-1{overflow:hidden;color:#000000;max-height:0;transition:max-height 0.5s ease-in-out}.max-limit-1.max-limit-visible{max-height:200px}.max-limit-1 .max-limit-2{padding-bottom:12px}.max-limit-1 .max-limit-3{display:flex;flex-direction:column;gap:8px;flex-wrap:wrap;justify-content:flex-start}.max-limit-1 .upgrade-button{flex:1;font-family:arial, sans-serif !important;font-size:16px !important;line-height:20px !important;color:#6a6a6a !important;display:inline-block;box-sizing:border-box;background:#0050ff;color:#ffffff !important;border:none;padding:8px;font:inherit;font-weight:500;cursor:pointer;border-radius:12px;text-align:center;text-decoration:none;width:100%;transition:background-color 200ms;text-decoration:none !important;min-width:200px;padding-left:16px;padding-right:16px}.max-limit-1 .upgrade-button:hover:not([disabled]),.max-limit-1 .upgrade-button:focus:not([disabled]){background:#0047e3}.max-limit-1 .upgrade-button:active:not([disabled]){background:#0047e3}.max-limit-1 .upgrade-button[disabled]{background:#bababa}";

const mdConverter = new showdown.Converter();
const VocablyTranslation = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.ratingInteraction = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "ratingInteraction");
        this.changeSourceLanguage = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "changeSourceLanguage");
        this.changeTargetLanguage = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "changeTargetLanguage");
        this.retry = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "retry");
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
        this.canCongratulate = false;
        this.disabled = false;
        this.showLanguages = true;
        this.hideChatGpt = false;
        this.maxCards = 'unlimited';
        this.paymentLink = '';
        this.premiumCtaSuffix = '';
        this.explanation = { state: 'none' };
        this.explanationAnimationDelay = 0;
        this.isRetrying = false;
        this.isLightweight = false;
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
        const sourceLanguageSelector = this.result && this.result.success && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-hint-selector", { key: '29ecd399b6933de736e60881c20929504bc0535f', hint: 'I study', shrinkSmall: true, disabled: this.loading || this.disabled, onChoose: (event) => this.changeSourceLanguage.emit(event.detail), value: this.sourceLanguage, optionGroups: [
                [
                    '',
                    Object.entries(_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.l).sort(sortLanguages(this.existingSourceLanguages)),
                ],
            ] }));
        const targetLanguageSelector = this.result && this.result.success && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-hint-selector", { key: 'afbc3c68346a539c990262b8b52ce59abf40b951', hint: 'I speak', shrinkSmall: true, disabled: this.loading || this.disabled, onChoose: (event) => this.changeTargetLanguage.emit(event.detail), value: this.targetLanguage, optionGroups: [
                [
                    '',
                    Object.entries(_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.l).sort(sortLanguages(this.existingTargetLanguages)),
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '758d7b69c494cef3f1defd7b7ededc3df03525b0', "data-test": "translation-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '691a348d7ca935f4b5a2eaa5f2dc36d0f18b1445', class: "vocably-loading-container" }, !this.result && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'dc6ff9c4ac588b58d89eb4560350a9b728e7f75f', style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '12px',
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", { key: '4ae93ee1818e13ee62ca6a7fd23b5fdf495a9871' }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '587695f846e8c338f8afae4221c03d516a462ddc', style: { fontSize: '13px' } }, "...Generating"))), this.result && this.result.success === false && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '820b012c6b435566275ad3c6d2cd79f127cf0629', style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'b88510d58d41f28b1c38ab4db0dd0433cbf355e8' }, "A (likely) Gemini or ChatGPT request has resulted in an error."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '4044e6083227c11ca4290b345c4bcb7a17806e53' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: 'a06a835a365682f47a53ad77b78e80091e94a521', class: "vocably-link-button vocably-nondecorated", onClick: () => this.retry.emit(), style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
            }, disabled: this.isRetrying }, "Retry", this.isRetrying && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-inline-loader", { key: '0e7b798d5c386c040211522a30e68baf848b7968' })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-reload", { key: 'f44dd0c1bc76b71e0bf3e40a997346dda0c36c34', style: {
                display: this.isRetrying ? 'none' : 'inline-block',
            } }))))), this.result && this.result.success === true && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '3973c718123a24b617ae7e0a4f4ea4127f76a7df' }, this.showLanguages && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '962575084cb64ae19a6856ca42ee571f93c9c895', class: "vocably-mb-18 vocably-language-selector" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'bdeafea0688d5f03f4452ec2f5944d3c4c2c4590', class: "vocably-language-wrapper" }, sourceLanguageSelector), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-arrow-right", { key: '1685db863cee3849dc8b0c3486b5242a45a706b5', class: "vocably-from-to" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '124d21beaada3b75446cca099dc5647d5f5ea52a', class: "vocably-language-wrapper" }, targetLanguageSelector))), showChatGpt && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'f0a334c6e894575b8c95d04879819d607c7f3ba6', class: "padding-left-12 vocably-bottom-12-border" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '85b0a10e520924d64bdf6a7619f7dfe5f79c0125', class: "vocably-small vocably-muted vocably-mb-4" }, "AI thinks that", ' '), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: 'fe55096e7c2f2f58a38c540c3ec273be313fe879', class: "vocably-emphasized" }, isGoogleTTSLanguage(this.result.value.translation.sourceLanguage) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-play-sound", { key: 'c1bb6180546b390bd527f24db0e26258699eb723', text: this.phrase, language: this.result.value.translation.sourceLanguage, playAudioPronunciation: this.playAudioPronunciation })), this.phrase), ' ', "means ", (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("i", { key: '0748983106dc9535dec1bc75d1945a8fa4fac578' }, this.result.value.translation.target))), this.result.value.cards.map((card, itemIndex, cardsArray) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, null, !canAdd && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
                'max-limit-1': true,
                'max-limit-visible': this.addAttemptIndex === itemIndex,
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "max-limit-2" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "panel max-limit-3" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "The", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { class: "vocably-emphasized" }, "Free Plan"), ' ', "allows to freely save up to", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", null, this.maxCards), " cards."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, "After you reached the limit, you can save", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("strong", { class: "vocably-emphasized" }, "one card per day"), "."), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", { href: this.paymentLink, target: "_blank", class: "upgrade-button", onClick: () => {
                this.watchMePaying.emit();
            } }, "Upgrade to Premium", this.premiumCtaSuffix))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-test": "card", class: {
                'vocably-card padding-left-12': true,
                'vocably-bottom-12-border': itemIndex < cardsArray.length - 1,
            } }, this.canCongratulate && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: 'vocably-added-congratulation' +
                (this.congratulateItemIndex === itemIndex
                    ? ' vocably-added-congratulation-visible'
                    : '') }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-pb-12" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-first-translation-congratulation", { card: card })))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-card-container" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-card-action" }, isCardItem(card) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: {
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
                if (this.congratulateItemIndex === itemIndex) {
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
            } }, this.isUpdating !== card && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-tag", null))))), !this.isLightweight && isDetachedCardItem(card) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: {
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
                marginBottom: '6px',
            }, class: "vocably-card-source" }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-definitions", { class: "vocably-mb-6", card: card, updateCard: this.makeUpdateCard(card), isLightweight: this.isLightweight }), card.data.example && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-small vocably-mb-6" }, "Example:"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-card-examples", { example: card.data.example }))), isItem(card) && card.data.tags.length > 0 && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-mt-12", style: {
                display: 'flex',
                gap: '6px',
                flexWrap: 'wrap',
            } }, card.data.tags.map((tagItem) => ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "vocably-tag" }, tagItem.data.title, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { type: "button", class: "vocably-tag-remove-button", "aria-label": "Remove this tag from the card", title: "Remove this tag from the card", onClick: this.detachTagClick(card, tagItem) }, this.removing &&
            this.removing.card === card &&
            this.removing.tag === tagItem && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-spin", null)), (!this.removing ||
            this.removing.card !== card ||
            this.removing.tag !== tagItem) && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-remove", { class: "vocably-tag-remove-button-icon" })))))))))))))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-animated-content-wrapper", { key: '9841007471ebc389cacb1133e0b7a43db29f67dd', delay: this.explanationAnimationDelay, class: "explanation-frame" }, this.explanation.state !== 'none' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'c470f35f87b7adbf695ea7810d7f31980d3b250d', class: "vocably-pt-12" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '5c6f794bfa852a93fdc7225583192bf73d0de173', class: "panel" }, this.explanation.state === 'loading' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '55c5140f56bda03c26f72eb7d5ca0a8a0328d4cf' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { key: '5d9bdd64780dd933c3a72449b6d435b834fe4c0a', style: {
                display: 'inline-block',
                verticalAlign: 'middle',
                fontSize: '13px',
            } }, "Requesting extra info from AI"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-inline-loader", { key: 'bd8a2bbdd0b385c2501da90c521d861be352ae84', style: { marginLeft: '8px' } }))), this.explanation.state === 'error' &&
            this.explanation.error, this.explanation.state === 'loaded' && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '6716b3b4cce1af8ee9ff7ffa7d09c200d65c8375', class: "explanation", innerHTML: mdConverter.makeHtml(this.explanation.value) })))))), isOkayToAskForRating && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'dc288839038530a4fd4fafce8609f7b75d5c8df5', class: "vocably-rate-container", ref: (el) => (this.askForRatingContainer = el) }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '461fa38bc1b61a992fb30a62cd07a6a1d343f18f', style: { paddingTop: '12px' } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'ca727f8c05b9682c174861d9d4962e0cdd8c99f8', class: "panel" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-rate", { key: 'ceb28c16104b7657b4a85ec117dac92ef0cd2232', platform: this.extensionPlatform, onUserSelected: (choiceEvent) => {
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
            } }))))), this.loading && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '4e5972422d8472d2df5e66d92500f1abe00336e9', class: "vocably-reload", "data-test": "reload" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-spinner", { key: '2f16e5d57154feecf002dd9496602f77289d932e' }))))))));
    }
    get el() { return (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
};
VocablyTranslation.style = translationCss;


//# sourceMappingURL=vocably-animated-content-wrapper.vocably-button.vocably-card-counter.vocably-card-counter-explanation.vocably-card-definitions.vocably-card-examples.vocably-card-source.vocably-card-translation.vocably-close-button.vocably-first-translation-congratulation.vocably-hint-selector.vocably-icon-arrow-right.vocably-icon-bookmark-check.vocably-icon-check.vocably-icon-close.vocably-icon-edit.vocably-icon-error.vocably-icon-play-circle.vocably-icon-plus.vocably-icon-reload.vocably-icon-remove.vocably-icon-spin.vocably-icon-tag.vocably-icon-tag-edit.vocably-icon-volume-medium.vocably-inline-loader.vocably-language.vocably-logo.vocably-mobile-button.vocably-overlay.vocably-play-sound.vocably-popup.vocably-qr-code.vocably-rate.vocably-sign-in.vocably-spinner.vocably-subscribe.vocably-tag-form.vocably-tags-menu.vocably-translation.entry.js.map

//# sourceMappingURL=vocably-animated-content-wrapper_40.entry.js.map

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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'a581a07d4e8a195b93fe1cc3e5c383e8c9b596b5' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: 'cb664a74ff4c842ff487e4a46a8c9651e1c0a862', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '2d1b012aaf5501feed654b005a59b9d37cacdbb7', d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" }))));
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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '8beaea033e143a3ed2ab8e08583ac5d1dc6b5b9c', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: 'dba0596fe0882d23c9c0adb434bc176d6c5a79ab', d: "M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74" })));
    }
};
VocablyIconCheck.style = iconAiCss;


//# sourceMappingURL=vocably-icon-ai.entry.js.map

//# sourceMappingURL=vocably-icon-ai.entry.js.map

/***/ }),

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vocably_icon_magnify": () => (/* binding */ VocablyIconBookmarkCheck)
/* harmony export */ });
/* harmony import */ var _index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1243);


const iconMagnifyCss = ":host{--color:#6a6a6a;--size:24px;display:inline-block;width:var(--size);height:var(--size);visibility:visible !important}.svg{height:100%;width:auto;fill:var(--color)}";

const VocablyIconBookmarkCheck = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: '09cb9d7b35bfde196ee3255f1a06453cf639bc37' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '8c4603e215a0ffd5e6dd8f57415c492415e916f5', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("title", { key: '2541f19672431546488adc0583490eefcfb68da6' }, "magnify"), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '972e2a3def7174f5a6ad7606df8419e1a905c183', d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" }))));
    }
};
VocablyIconBookmarkCheck.style = iconMagnifyCss;


//# sourceMappingURL=vocably-icon-magnify.entry.js.map

//# sourceMappingURL=vocably-icon-magnify.entry.js.map

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
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { key: '575e04b8620dcddfb619a2fd2c7f04a989fe904b', class: "svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { key: '5b3d0762c1ebd0492feadf9e6d745e37fb5547da', d: "M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" })));
    }
};
VocablyWindowClose.style = iconWindowCloseCss;


//# sourceMappingURL=vocably-icon-window-close.entry.js.map

//# sourceMappingURL=vocably-icon-window-close.entry.js.map

/***/ }),

/***/ 2681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vocably_search_form": () => (/* binding */ VocablySearchForm)
/* harmony export */ });
/* harmony import */ var _index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1243);
/* harmony import */ var _language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7654);



/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (-1);

  while ((++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (length >= LARGE_ARRAY_SIZE) {
    var set = createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = value;

    value = (value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

const searchFormCss = ":host{--font-size:16px;display:block;visibility:visible !important}.form{display:flex;flex-direction:column;gap:12px}.preset{--font-size:calc(var(--font-size) * 0.9);display:flex;flex-direction:row;gap:12px}.preset .direction{box-sizing:border-box;display:flex;align-items:center;justify-content:center;width:40px;height:40px;line-height:40px;border:none;border-radius:8px;background-color:rgba(0, 0, 0, 0.04);transition:background-color 0.25s ease-in-out;cursor:pointer;outline:none}.preset .direction:focus{background-color:rgba(0, 0, 0, 0.07) !important}.preset .direction:hover{background-color:rgba(0, 0, 0, 0.07)}.preset .direction .icon{transition:transform 0.3s ease-in-out}.preset .direction.reversed .icon{transform:rotate(180deg)}.preset .language{width:100%}.search-input{position:relative}.search-input .input{padding-left:12px;padding-right:12px;color:#6a6a6a;border:none;border-radius:8px;background-color:rgba(0, 0, 0, 0.04);outline:none;height:40px;box-shadow:none;box-sizing:border-box;display:block;width:100%;transition:background-color 0.25s ease-in-out;font-size:var(--font-size)}.search-input .input:focus{background-color:rgba(0, 0, 0, 0.07)}.search-input .submit{position:absolute;right:0;top:0;height:40px;width:40px;display:flex;align-items:center;justify-content:center;border:none;border-left:none;border-radius:0 8px 8px 0;background-color:transparent;transition:all 0.25s ease-in-out}.search-input .submit:not(:disabled){cursor:pointer;background-color:rgba(0, 0, 0, 0.07)}.search-input .submit:not(:disabled):hover{background-color:rgba(0, 0, 0, 0.14)}.search-input .submit:disabled{opacity:0.2}.search-input .submit .magnify{transition:transform 0.3s ease-in-out}.search-input .submit .animating{transition:none;animation-name:rock;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear;transform-origin:9px 9px}@keyframes rock{0%,50%,100%{transform:rotate(0deg)}25%{transform:rotate(-25deg)}75%{transform:rotate(25deg)}}.hint{margin-left:12px;font-size:calc(var(--font-size) * 0.9);color:#bababa}.hint .hint-icon-button{vertical-align:middle;border:none;display:inline-flex;width:24px;height:24px;cursor:pointer;align-items:center;justify-content:center;border-radius:6px}.hint .hint-icon-button.reversed{transform:rotate(180deg)}";

const article = (phrase) => {
    var _a;
    if (['a', 'e', 'i', 'o', 'y', 'u'].includes(((_a = phrase.at(0)) !== null && _a !== void 0 ? _a : '').toLowerCase())) {
        return 'an';
    }
    else {
        return 'a';
    }
};
const VocablySearchForm = class {
    constructor(hostRef) {
        (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.valuesChange = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "valuesChange");
        this.formSubmit = (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "formSubmit");
        this.loading = false;
        this.disabled = false;
        this.existingSourceLanguages = [];
        this.existingTargetLanguages = [];
        this.hideHint = false;
        this.autoFocus = false;
        this.languagePairs = {};
        this.values = {
            text: '',
            sourceLanguage: 'de',
            targetLanguage: 'en',
            isReversed: false,
        };
        this.textInputFocused = false;
        this.textInput = undefined;
    }
    componentDidLoad() {
        if (this.autoFocus) {
            setTimeout(() => {
                var _a;
                (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
            }, 300);
        }
    }
    languageName(languageCode) {
        var _a;
        // @ts-ignore
        return (_a = _language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.l[languageCode]) !== null && _a !== void 0 ? _a : '';
    }
    getPlaceholderText() {
        if (!this.values.sourceLanguage || !this.values.targetLanguage) {
            return '';
        }
        const sourceLanguageName = this.languageName(this.values.sourceLanguage);
        const targetLanguageName = this.languageName(this.values.targetLanguage);
        if (this.values.isReversed) {
            return `Enter ${article(targetLanguageName)} ${targetLanguageName} word or phrase here. ${sourceLanguageName} cards will be created.`;
        }
        return `Enter any word or phrase here.`;
    }
    getSourceLanguageGroups() {
        const { preferred, available } = Object.keys(_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.l).reduce((acc, language) => {
            if (this.languagePairs.hasOwnProperty(language)) {
                return Object.assign(Object.assign({}, acc), { preferred: [...acc.preferred, language] });
            }
            else {
                return Object.assign(Object.assign({}, acc), { available: [...acc.available, language] });
            }
        }, {
            preferred: [],
            available: [],
        });
        const availableGroup = [
            'Available Languages',
            available.map((lng) => [lng, this.languageName(lng)]),
        ];
        if (preferred.length === 0) {
            return [availableGroup];
        }
        return [
            [
                'Preferred Languages',
                preferred.map((lng) => [lng, this.languageName(lng)]),
            ],
            availableGroup,
        ];
    }
    getTargetLanguageGroups() {
        const allPreferredLanguages = uniq(Object.values(this.languagePairs).flatMap((pairs) => pairs.possibleTargetLanguages));
        const { preferred, available } = Object.keys(_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.l).reduce((acc, language) => {
            if (allPreferredLanguages.includes(language)) {
                return Object.assign(Object.assign({}, acc), { preferred: [...acc.preferred, language] });
            }
            else {
                return Object.assign(Object.assign({}, acc), { available: [...acc.available, language] });
            }
        }, {
            preferred: [],
            available: [],
        });
        const availableGroup = [
            'Available Languages',
            available.map((lng) => [lng, this.languageName(lng)]),
        ];
        if (preferred.length === 0) {
            return [availableGroup];
        }
        return [
            [
                'Preferred Languages',
                preferred.map((lng) => [lng, this.languageName(lng)]),
            ],
            availableGroup,
        ];
    }
    getTargetLanguageCandidate(sourceLanguage) {
        var _a, _b;
        if (!(0,_language_list_DydcRn8U_js__WEBPACK_IMPORTED_MODULE_1__.i)(sourceLanguage) ||
            !this.languagePairs.hasOwnProperty(sourceLanguage)) {
            return this.values.targetLanguage;
        }
        return ((_b = (_a = this.languagePairs[sourceLanguage]) === null || _a === void 0 ? void 0 : _a.currentTargetLanguage) !== null && _b !== void 0 ? _b : this.values.targetLanguage);
    }
    render() {
        return ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.H, { key: 'd400d3ecdf87e25eec1250478796d77452f1117c' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("form", { key: '5142de2c24da6fd62d76f85abe6a4eeeb49e40e2', class: "form", onSubmit: (e) => {
                e.preventDefault();
                this.formSubmit.emit(this.values);
            }, "aria-label": "Search form" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '4b6db8eb8fdcb50042fc656b3e56bbfbe98d7944', class: "preset" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-hint-selector", { key: 'e51cf3372577af17af9d92eaac0931282a6a0caa', class: "language", hint: 'I study', shrinkSmall: true, disabled: this.loading || this.disabled, onChoose: (event) => this.valuesChange.emit(Object.assign(Object.assign({}, this.values), { sourceLanguage: event.detail, targetLanguage: this.getTargetLanguageCandidate(event.detail) })), value: this.values.sourceLanguage, optionGroups: this.getSourceLanguageGroups() }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'e9825ff3f05d6e2164db0f9d47cbf0aa2dc27f82' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '231f0070f358e154d2854edcaca1e10e0bfacaa6', type: "button", class: { direction: true, reversed: this.values.isReversed }, onClick: () => this.valuesChange.emit(Object.assign(Object.assign({}, this.values), { isReversed: !this.values.isReversed })) }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-arrow-right", { key: 'eb38b36de1082808cd2d515458958d4bbd254c88', class: "icon" }))), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-hint-selector", { key: '6ca9d3a832cc8e6ccd4d7f4b2d236ba1c5858dd3', class: 'language', hint: 'I speak', shrinkSmall: true, disabled: this.loading || this.disabled, onChoose: (event) => this.valuesChange.emit(Object.assign(Object.assign({}, this.values), { targetLanguage: event.detail })), value: this.values.targetLanguage, optionGroups: this.getTargetLanguageGroups() })), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: 'b3397dc542491ced6e46655df74b069e5733698e', class: "search-input" }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { key: '888f04c72c2526b220bbc320f47ae8ce083d0413', ref: (el) => {
                this.textInput = el;
            }, autocomplete: "off", "aria-haspopup": "false", autocapitalize: "off", class: "input", type: "text", name: "searchText", placeholder: this.getPlaceholderText(), value: this.values.text, disabled: this.loading || this.disabled, onFocus: () => (this.textInputFocused = true), onBlur: () => (this.textInputFocused = false), onKeyUp: (e) => {
                this.valuesChange.emit(Object.assign(Object.assign({}, this.values), {
                    // @ts-ignore
                    text: e.target.value
                }));
            } }), (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '210412255979cbca338a660806b15f4088e7afcb', class: "submit", type: "submit", disabled: this.loading || this.values.text.trim() === '' }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-magnify", { key: '610a027c97f5e62f5726e58fef04ae7e67b6640e', class: {
                magnify: true,
                animating: this.loading,
            } }))), !this.hideHint && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: '7c4d394f6a161fda30a7041d8efce90b60944716', class: "hint" }, !this.values.isReversed && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '5e4e67287713935e8a6bc58edec60ca918f4f708' }, "For the improved search of", ' ', this.languageName(this.values.sourceLanguage), " words in", ' ', this.languageName(this.values.targetLanguage), " click the", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '1f50ecb15ae42b15f5dd30d8f1a4db3e148b6a5c', class: "hint-icon-button", type: "button", onClick: () => {
                this.valuesChange.emit(Object.assign(Object.assign({}, this.values), { isReversed: true }));
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-arrow-right", { key: 'c0545dd047b115bd05b6f0d80c153f8c4adafcd2' })), ' ', "button.")), this.values.isReversed && ((0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.F, { key: '0079cb561d4f3a80eeeee19729cb912c6cf23735' }, "Click", ' ', (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { key: '45d430a7246c8dbdc1da4671732d4b4b8a5fff72', class: "hint-icon-button reversed", type: "button", onClick: () => {
                this.valuesChange.emit(Object.assign(Object.assign({}, this.values), { isReversed: false }));
            } }, (0,_index_CfdvrA3w_js__WEBPACK_IMPORTED_MODULE_0__.h)("vocably-icon-arrow-right", { key: '1378836107ab00c7fea4b90aaf9507722b455fa5' })), ' ', "button to search for cards in", ' ', this.languageName(this.values.sourceLanguage), ".")))))));
    }
};
VocablySearchForm.style = searchFormCss;


//# sourceMappingURL=vocably-search-form.entry.js.map

//# sourceMappingURL=vocably-search-form.entry.js.map

/***/ }),

/***/ 3469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./vocably-animated-content-wrapper_40.entry.js": [
		1199,
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
	"./vocably-icon-magnify.entry.js": [
		454,
		694
	],
	"./vocably-icon-window-close.entry.js": [
		5559,
		694
	],
	"./vocably-search-form.entry.js": [
		2681,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
  return (0,index_CfdvrA3w.b)([["vocably-search-form",[[257,"vocably-search-form",{"loading":[4],"disabled":[4],"existingSourceLanguages":[16,"existing-source-languages"],"existingTargetLanguages":[16,"existing-target-languages"],"hideHint":[4,"hide-hint"],"autoFocus":[4,"auto-focus"],"languagePairs":[16,"language-pairs"],"values":[16],"textInputFocused":[32]}]]],["vocably-icon-add",[[257,"vocably-icon-add"]]],["vocably-icon-ai",[[257,"vocably-icon-ai"]]],["vocably-icon-window-close",[[257,"vocably-icon-window-close"]]],["vocably-icon-magnify",[[257,"vocably-icon-magnify"]]],["vocably-animated-content-wrapper_40",[[257,"vocably-translation",{"phrase":[1],"result":[16],"loading":[4],"existingSourceLanguages":[16,"existing-source-languages"],"existingTargetLanguages":[16,"existing-target-languages"],"askForRating":[4,"ask-for-rating"],"sourceLanguage":[1,"source-language"],"targetLanguage":[1,"target-language"],"isUpdating":[16,"is-updating"],"canCongratulate":[4,"can-congratulate"],"playAudioPronunciation":[16,"play-audio-pronunciation"],"extensionPlatform":[16,"extension-platform"],"updateCard":[16,"update-card"],"attachTag":[16,"attach-tag"],"detachTag":[16,"detach-tag"],"updateTag":[16,"update-tag"],"deleteTag":[16,"delete-tag"],"disabled":[1028],"showLanguages":[4,"show-languages"],"hideChatGpt":[4,"hide-chat-gpt"],"maxCards":[8,"max-cards"],"paymentLink":[1,"payment-link"],"premiumCtaSuffix":[1,"premium-cta-suffix"],"explanation":[16],"explanationAnimationDelay":[2,"explanation-animation-delay"],"isRetrying":[4,"is-retrying"],"isLightweight":[4,"is-lightweight"],"saveCardClicked":[32],"addedItemIndex":[32],"congratulateItemIndex":[32],"addAttemptIndex":[32],"removing":[32],"play":[64]}],[256,"vocably-card-counter",{"collectionLength":[2,"collection-length"],"maxCards":[2,"max-cards"],"paymentLink":[1,"payment-link"]}],[257,"vocably-popup"],[257,"vocably-button"],[257,"vocably-language",{"sourceLanguage":[1,"source-language"],"targetLanguage":[1,"target-language"],"waiting":[4]}],[257,"vocably-mobile-button"],[257,"vocably-sign-in"],[257,"vocably-subscribe",{"trial":[4]}],[257,"vocably-tags-menu",{"disabled":[4],"selectedItems":[16,"selected-items"],"existingItems":[16,"existing-items"],"attachTag":[16,"attach-tag"],"detachTag":[16,"detach-tag"],"saveTag":[16,"save-tag"],"deleteTag":[16,"delete-tag"],"savingTag":[32]}],[256,"vocably-card-definitions",{"card":[16],"updateCard":[16,"update-card"],"isLightweight":[4,"is-lightweight"]}],[256,"vocably-card-source",{"card":[16],"playAudioPronunciation":[16,"play-audio-pronunciation"]}],[257,"vocably-card-counter-explanation",{"maxCards":[2,"max-cards"],"paymentLink":[1,"payment-link"]}],[257,"vocably-first-translation-congratulation",{"card":[16]}],[257,"vocably-animated-content-wrapper",{"delay":[2]}],[256,"vocably-card-examples",{"example":[1]}],[256,"vocably-close-button"],[257,"vocably-icon-bookmark-check"],[257,"vocably-icon-plus"],[257,"vocably-icon-reload"],[257,"vocably-icon-remove"],[257,"vocably-icon-tag"],[257,"vocably-inline-loader",{"duration":[2],"paused":[4]}],[257,"vocably-logo"],[256,"vocably-rate",{"platform":[16]}],[256,"vocably-card-translation",{"card":[16],"updateCard":[16,"update-card"],"disableEditing":[4,"disable-editing"],"isEdit":[32],"isSaving":[32]}],[257,"vocably-play-sound",{"text":[1],"language":[1],"playAudioPronunciation":[16,"play-audio-pronunciation"],"isLoading":[32],"isPlaying":[32],"isPlayError":[32],"play":[64]}],[257,"vocably-tag-form",{"tagItem":[16,"tag-item"],"saveTag":[16,"save-tag"],"deleteTag":[16,"delete-tag"],"title":[32],"saving":[32]}],[257,"vocably-hint-selector",{"shrinkSmall":[4,"shrink-small"],"optionGroups":[16,"option-groups"],"value":[1],"hint":[1],"disabled":[4]}],[257,"vocably-icon-arrow-right"],[257,"vocably-icon-tag-edit"],[257,"vocably-overlay",{"closeKeyCode":[16,"close-key-code"],"hide":[64]}],[257,"vocably-qr-code"],[257,"vocably-icon-edit"],[257,"vocably-icon-error"],[257,"vocably-icon-play-circle"],[257,"vocably-icon-volume-medium"],[257,"vocably-spinner"],[257,"vocably-icon-check"],[257,"vocably-icon-spin"],[257,"vocably-icon-close"]]]], options);
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

;// CONCATENATED MODULE: ../model/dist/esm/constants.js
const MAX_SYMBOLS_TO_BE_TRANSLATED = 150;

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
    'pt-PT',
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
    'pt-PT',
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
const isGoogleLanguage = (language) => GoogleLanguages.indexOf(language) !== -1;
const GoogleTranslateLanguages = (/* unused pure expression or super */ null && ([
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
    'zh-CN',
    'co',
    'haw',
    'hr',
    'hmn',
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
    'iw',
    'hi',
    'hu',
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
    'pt-BR',
    'pt-PT',
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
    pt: 'Portuguese (Brazilian)',
    'pt-PT': 'Portuguese (European)',
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

;// CONCATENATED MODULE: ../model/dist/esm/study-stats.js
const defaultStudyStreak = {
    days: 0,
    longestStreak: 0,
    lastStudyDay: '0000-01-01',
    lastStudyTimezone: 'Asia/Jerusalem',
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
    lastUpdated: 0,
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
    if (isGoogleLanguage(nodeLang)) {
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
var isArray = Array.isArray;

/* harmony default export */ const lodash_es_isArray = (isArray);

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
function isString(value) {
  return typeof value == 'string' ||
    (!lodash_es_isArray(value) && lodash_es_isObjectLike(value) && _baseGetTag(value) == stringTag);
}

/* harmony default export */ const lodash_es_isString = (isString);

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
const setContents = ({ popup, source, detectedLanguage, context, autoPlay, initiator, }) => contents_awaiter(void 0, void 0, void 0, function* () {
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
                    initiator: initiator !== null && initiator !== void 0 ? initiator : 'content-script',
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
        translation.addEventListener('retry', () => contents_awaiter(void 0, void 0, void 0, function* () {
            translation.isRetrying = true;
            yield analyze();
            translation.isRetrying = false;
        }));
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
        initiator: options.initiator,
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
                            initiator: 'youtube',
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