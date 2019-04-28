// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      function localRequire(x) {
        return newRequire(localRequire.resolve(x));
      }

      localRequire.resolve = function (x) {
        return modules[name][1][x] || x;
      };

      var module = cache[name] = new newRequire.Module;
      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.parse(JSON.stringify(e))};exports.default=e;
},{}],8:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./hardCopyObject");Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e(t).default}});
},{"./hardCopyObject":14}],4:[function(require,module,exports) {
module.exports = {
  "symbol": "$",
  "precision": 2,
  "decimal": ".",
  "separator": ","
}
;
},{}],5:[function(require,module,exports) {
module.exports = {
  "symbol": "R$",
  "precision": 2,
  "decimal": ",",
  "separator": "."
}
;
},{}],3:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./USD");Object.defineProperty(exports,"USD",{enumerable:!0,get:function(){return e(r).default}});var t=require("./BRL");Object.defineProperty(exports,"BRL",{enumerable:!0,get:function(){return e(t).default}});
},{"./USD":4,"./BRL":5}],18:[function(require,module,exports) {
"use strict";function r(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e.default=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.currencyConfigurations=void 0;var e=require("./currencyConfigurations"),o=r(e);exports.currencyConfigurations=o;
},{"./currencyConfigurations":3}],23:[function(require,module,exports) {
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.currency=e()}(this,function(){function t(r,o){if(!(this instanceof t))return new t(r,o);o=i({},n,o);var s=Math.pow(10,o.precision);this.intValue=r=e(r,o),this.value=r/s,this.s=o,this.p=s}function e(e,i){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=i.decimal,o=i.errorOnInvalid,s=Math.pow(10,i.precision);if("number"==typeof e)s*=e;else if(e instanceof t)s*=e.value;else if("string"==typeof e)o=new RegExp("[^-\\d"+r+"]","g"),r=new RegExp("\\"+r,"g"),s=(s=parseFloat(e.replace(/\((.*)\)/,"-$1").replace(o,"").replace(r,".")*s))||0;else{if(o)throw Error("Invalid Input");s=0}return n?Math.round(s):s}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i,n=arguments[e];for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n={symbol:"$",separator:",",decimal:".",formatWithSymbol:!1,errorOnInvalid:!1,precision:2},r=/(\d)(?=(\d{3})+\b)/g,o=/\.(\d+)$/;return t.prototype={add:function(i){var n=this.s,r=this.p;return t((this.intValue+e(i,n))/r,n)},subtract:function(i){var n=this.s,r=this.p;return t((this.intValue-e(i,n))/r,n)},multiply:function(i){var n=this.s;return t(this.intValue*e(i,n,!1)/Math.pow(10,n.precision+2),n)},divide:function(i){var n=this.s;return t(this.intValue/e(i,n,!1),n)},distribute:function(e){var i=this.intValue,n=this.p,r=this.s,o=[],s=Math[0<=i?"floor":"ceil"](i/e);for(i=Math.abs(i-s*e);0!==e;e--){var a=t(s/n,r);0<i--&&(a=0<=a.value?a.add(1/n):a.subtract(1/n)),o.push(a)}return o},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(t){var e=this.s,i=e.formatWithSymbol,n=e.symbol,s=e.separator;return e=e.decimal,void 0===t&&(t=i),((t?n:"")+this).replace(r,"$1"+s).replace(o,e+"$1")},toString:function(){return(this.intValue/this.p).toFixed(this.s.precision)},toJSON:function(){return this.value}},t});
},{}],15:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("currency.js"),o=e(r),t=require("../../utils"),n=require("../../constants"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"BRL",u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=(0,t.hardCopyObject)(n.currencyConfigurations[r]);if(!i)throw new Error("You need to provide a currencyConfiguration for currency code "+r+".");var c=u.showSymbol;return u.spaceSymbol&&(i.symbol+=" "),(0,o.default)(e,i).format(c)};exports.default=u;
},{"../../utils":2,"../../constants":18,"currency.js":23}],9:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./formatCurrency");Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e(r).default}});
},{"./formatCurrency":15}],2:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./hardCopyObject");Object.defineProperty(exports,"hardCopyObject",{enumerable:!0,get:function(){return e(r).default}});var t=require("./formatCurrency");Object.defineProperty(exports,"formatCurrency",{enumerable:!0,get:function(){return e(t).default}});
},{"./hardCopyObject":8,"./formatCurrency":9}],19:[function(require,module,exports) {
"use strict";function r(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function t(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;module.exports=t()?Object.assign:function(t,c){for(var a,i,s=r(t),f=1;f<arguments.length;f++){a=Object(arguments[f]);for(var u in a)n.call(a,u)&&(s[u]=a[u]);if(e){i=e(a);for(var b=0;b<i.length;b++)o.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],24:[function(require,module,exports) {
"use strict";var e={};module.exports=e;
},{}],20:[function(require,module,exports) {
"use strict";function t(t){return function(){return t}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(t){return t},module.exports=n;
},{}],10:[function(require,module,exports) {
"use strict";function e(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),t.name="Invariant Violation",t.framesToPop=1,t}function t(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||x}function n(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||x}function r(){}function o(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||x}function u(e,t,n){var r,o={},u=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)$.call(t,r)&&!A.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:k,type:e,key:u,ref:l,props:o,_owner:O.current}}function l(e){return"object"==typeof e&&null!==e&&e.$$typeof===k}function i(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}function c(e,t,n,r){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function f(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function a(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case k:case _:case g:case S:l=!0}}if(l)return r(o,t,""===n?"."+p(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var i=0;i<t.length;i++){var c=n+p(u=t[i],i);l+=a(u,c,r,o)}else if(null===t||void 0===t?c=null:(c=w&&t[w]||t["@@iterator"],c="function"==typeof c?c:null),"function"==typeof c)for(t=c.call(t),i=0;!(u=t.next()).done;)u=u.value,c=n+p(u,i++),l+=a(u,c,r,o);else"object"===u&&(r=""+t,e("31","[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}function p(e,t){return"object"==typeof e&&null!==e&&null!=e.key?i(e.key):t.toString(36)}function s(e,t){e.func.call(e.context,t,e.count++)}function y(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?d(e,r,n,m.thatReturnsArgument):null!=e&&(l(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n,e={$$typeof:k,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function d(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(E,"$&/")+"/"),t=c(t,u,r,o),null==e||a(e,"",y,t),f(t)}var h=require("object-assign"),v=require("fbjs/lib/emptyObject"),m=require("fbjs/lib/emptyFunction"),b="function"==typeof Symbol&&Symbol.for,k=b?Symbol.for("react.element"):60103,_=b?Symbol.for("react.call"):60104,g=b?Symbol.for("react.return"):60105,S=b?Symbol.for("react.portal"):60106,j=b?Symbol.for("react.fragment"):60107,w="function"==typeof Symbol&&Symbol.iterator,x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};t.prototype.isReactComponent={},t.prototype.setState=function(t,n){"object"!=typeof t&&"function"!=typeof t&&null!=t&&e("85"),this.updater.enqueueSetState(this,t,n,"setState")},t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},r.prototype=t.prototype;var P=n.prototype=new r;P.constructor=n,h(P,t.prototype),P.isPureReactComponent=!0;var R=o.prototype=new r;R.constructor=o,h(R,t.prototype),R.unstable_isAsyncReactComponent=!0,R.render=function(){return this.props.children};var O={current:null},$=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0},E=/\/+/g,C=[],q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return d(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=c(null,null,t,n),null==e||a(e,"",s,t),f(t)},count:function(e){return null==e?0:a(e,"",m.thatReturnsNull,null)},toArray:function(e){var t=[];return d(e,t,null,m.thatReturnsArgument),t},only:function(t){return l(t)||e("143"),t}},Component:t,PureComponent:n,unstable_AsyncComponent:o,Fragment:j,createElement:u,cloneElement:function(e,t,n){var r=h({},e.props),o=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=O.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)$.call(t,c)&&!A.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==i?i[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){i=Array(c);for(var f=0;f<c;f++)i[f]=arguments[f+2];r.children=i}return{$$typeof:k,type:e.type,key:o,ref:u,props:r,_owner:l}},createFactory:function(e){var t=u.bind(null,e);return t.type=e,t},isValidElement:l,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:O,assign:h}},U=Object.freeze({default:q}),F=U&&q||U;module.exports=F.default?F.default:F;
},{"object-assign":19,"fbjs/lib/emptyObject":24,"fbjs/lib/emptyFunction":20}],17:[function(require,module,exports) {
"use strict";var _="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=_;
},{}],21:[function(require,module,exports) {
"use strict";function e(e,r,i,o,t,a,f,s){if(n(r),!e){var u;if(void 0===r)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[i,o,t,a,f,s],l=0;(u=new Error(r.replace(/%s/g,function(){return d[l++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}var n=function(e){};module.exports=e;
},{}],22:[function(require,module,exports) {
"use strict";var e,r=require("./emptyFunction"),t=r;module.exports=t;
},{"./emptyFunction":20}],16:[function(require,module,exports) {
"use strict";function t(t,e,o,r,s){}var e,o,r,s;module.exports=t;
},{"./lib/ReactPropTypesSecret":17,"fbjs/lib/invariant":21,"fbjs/lib/warning":22}],11:[function(require,module,exports) {
"use strict";
},{"object-assign":19,"prop-types/checkPropTypes":16,"fbjs/lib/emptyObject":24,"fbjs/lib/invariant":21,"fbjs/lib/emptyFunction":20,"fbjs/lib/warning":22}],6:[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":10,"./cjs/react.development.js":11}],12:[function(require,module,exports) {
"use strict";var e=require("fbjs/lib/emptyFunction"),n=require("fbjs/lib/invariant"),r=require("fbjs/lib/warning"),t=require("object-assign"),i=require("./lib/ReactPropTypesSecret"),o=require("./checkPropTypes");module.exports=function(u,a){function f(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function l(e){this.message=e,this.stack=""}function c(e){function r(r,t,o,u,f,c,s){if(u=u||m,c=c||o,s!==i)if(a)n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else{}return null==t[o]?r?null===t[o]?new l("The "+f+" `"+c+"` is marked as required in `"+u+"`, but its value is `null`."):new l("The "+f+" `"+c+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(t,o,u,f,c)}var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function s(e){return c(function(n,r,t,i,o,u){var a=n[r];if(y(a)!==e)return new l("Invalid "+i+" `"+o+"` of type `"+d(a)+"` supplied to `"+t+"`, expected `"+e+"`.");return null})}function p(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(p);if(null===e||u(e))return!0;var n=function(e){var n=e&&(v&&e[v]||e[b]);if("function"==typeof n)return n}(e);if(!n)return!1;var r,t=n.call(e);if(n!==e.entries){for(;!(r=t.next()).done;)if(!p(r.value))return!1}else for(;!(r=t.next()).done;){var i=r.value;if(i&&!p(i[1]))return!1}return!0;default:return!1}}function y(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||"Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol}(n,e)?"symbol":n}function d(e){if(void 0===e||null===e)return""+e;var n=y(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}var v="function"==typeof Symbol&&Symbol.iterator,b="@@iterator",m="<<anonymous>>",h={array:s("array"),bool:s("boolean"),func:s("function"),number:s("number"),object:s("object"),string:s("string"),symbol:s("symbol"),any:c(e.thatReturnsNull),arrayOf:function(e){return c(function(n,r,t,o,u){if("function"!=typeof e)return new l("Property `"+u+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var a=n[r];if(!Array.isArray(a))return new l("Invalid "+o+" `"+u+"` of type `"+y(a)+"` supplied to `"+t+"`, expected an array.");for(var f=0;f<a.length;f++){var c=e(a,f,t,o,u+"["+f+"]",i);if(c instanceof Error)return c}return null})},element:c(function(e,n,r,t,i){var o=e[n];return u(o)?null:new l("Invalid "+t+" `"+i+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement.")}),instanceOf:function(e){return c(function(n,r,t,i,o){if(!(n[r]instanceof e)){var u=e.name||m;return new l("Invalid "+i+" `"+o+"` of type `"+function(e){return e.constructor&&e.constructor.name?e.constructor.name:m}(n[r])+"` supplied to `"+t+"`, expected instance of `"+u+"`.")}return null})},node:c(function(e,n,r,t,i){return p(e[n])?null:new l("Invalid "+t+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")}),objectOf:function(e){return c(function(n,r,t,o,u){if("function"!=typeof e)return new l("Property `"+u+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var a=n[r],f=y(a);if("object"!==f)return new l("Invalid "+o+" `"+u+"` of type `"+f+"` supplied to `"+t+"`, expected an object.");for(var c in a)if(a.hasOwnProperty(c)){var s=e(a,c,t,o,u+"."+c,i);if(s instanceof Error)return s}return null})},oneOf:function(n){return Array.isArray(n)?c(function(e,r,t,i,o){for(var u=e[r],a=0;a<n.length;a++)if(f(u,n[a]))return null;return new l("Invalid "+i+" `"+o+"` of value `"+u+"` supplied to `"+t+"`, expected one of "+JSON.stringify(n)+".")}):e.thatReturnsNull},oneOfType:function(n){if(!Array.isArray(n))return e.thatReturnsNull;for(var t=0;t<n.length;t++){var o=n[t];if("function"!=typeof o)return r(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",function(e){var n=d(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}(o),t),e.thatReturnsNull}return c(function(e,r,t,o,u){for(var a=0;a<n.length;a++)if(null==(0,n[a])(e,r,t,o,u,i))return null;return new l("Invalid "+o+" `"+u+"` supplied to `"+t+"`.")})},shape:function(e){return c(function(n,r,t,o,u){var a=n[r],f=y(a);if("object"!==f)return new l("Invalid "+o+" `"+u+"` of type `"+f+"` supplied to `"+t+"`, expected `object`.");for(var c in e){var s=e[c];if(s){var p=s(a,c,t,o,u+"."+c,i);if(p)return p}}return null})},exact:function(e){return c(function(n,r,o,u,a){var f=n[r],c=y(f);if("object"!==c)return new l("Invalid "+u+" `"+a+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");var s=t({},n[r],e);for(var p in s){var d=e[p];if(!d)return new l("Invalid "+u+" `"+a+"` key `"+p+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(n[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var v=d(f,p,o,u,a+"."+p,i);if(v)return v}return null})}};return l.prototype=Error.prototype,h.checkPropTypes=o,h.PropTypes=h,h};
},{"./checkPropTypes":16,"./lib/ReactPropTypesSecret":17,"object-assign":19,"fbjs/lib/emptyFunction":20,"fbjs/lib/invariant":21,"fbjs/lib/warning":22}],13:[function(require,module,exports) {
"use strict";var e=require("fbjs/lib/emptyFunction"),r=require("fbjs/lib/invariant"),t=require("./lib/ReactPropTypesSecret");module.exports=function(){function o(e,o,p,n,s,a){a!==t&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function p(){return o}o.isRequired=o;var n={array:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:p,element:o,instanceOf:p,node:o,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p};return n.checkPropTypes=e,n.PropTypes=n,n};
},{"./lib/ReactPropTypesSecret":17,"fbjs/lib/emptyFunction":20,"fbjs/lib/invariant":21}],7:[function(require,module,exports) {
var r,e,i;module.exports=require("./factoryWithThrowingShims")();
},{"./factoryWithTypeCheckers":12,"./factoryWithThrowingShims":13}],1:[function(require,module,exports) {
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=require("react"),u=e(o),l=require("prop-types"),s=e(l),i=require("./utils"),c=require("./constants/currencyConfigurations"),f={value:0,maskedValue:"0,00"},p=function(e){function l(e){t(this,l);var n=a(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return n.maskValue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.props,a=t.currency,r=t.showSymbol,o=t.spaceSymbol;return(0,i.formatCurrency)(e,a,{showSymbol:r,spaceSymbol:o})},n.unmaskValue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return parseInt(e.replace(/\D/g,"")||0,10)/100},n.handleChange=function(e){var t=e.target.value,a=void 0===t?0:t,r=n.props.onChange,o=n.unmaskValue(a),u=n.maskValue(o);return n.setState({value:o,maskedValue:u}),!(!r||"function"!=typeof r)&&r(e,o,u)},n.setInitialValues=function(){var e=n.props,t=e.value,a=e.defaultValue,r=t||a,o=n.maskValue(r);n.setState({value:r,maskedValue:o})},n.state=(0,i.hardCopyObject)(f),n.initialState=(0,i.hardCopyObject)(f),n}return n(l,o.Component),r(l,[{key:"componentDidUpdate",value:function(e){var t=e.defaultValue;this.props.defaultValue!==t&&this.setInitialValues()}},{key:"componentDidMount",value:function(){this.setInitialValues()}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.className,n=e.style,r=this.state.maskedValue;return u.default.createElement("input",{type:"tel",className:a,style:n,name:t,value:r,onChange:this.handleChange})}}]),l}();p.propTypes={name:s.default.string,value:s.default.number,defaultValue:s.default.number,className:s.default.string,style:s.default.object,currency:s.default.string,currencyConfiguration:s.default.shape({symbol:s.default.string,precision:s.default.number,decimal:s.default.string,separator:s.default.string}),showSymbol:s.default.bool,spaceSymbol:s.default.bool,onChange:s.default.func},p.defaultProps={name:"",className:"",style:{},currency:"BRL",currencyConfiguration:(0,i.hardCopyObject)(c.BRL),showSymbol:!1,spaceSymbol:!1,onChange:Function.prototype},exports.default=p;
},{"./utils":2,"./constants/currencyConfigurations":3,"react":6,"prop-types":7}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent) {
  var ws = new WebSocket('ws://localhost:53876/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = () => {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,1])