"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,c=Object.create(i.prototype),a=new P(r||[]);return o(c,"_invoke",{value:S(t,n,a)}),c}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",y="suspendedYield",p="executing",d="completed",m={};function v(){}function g(){}function b(){}var w={};l(w,c,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(j([])));L&&L!==n&&r.call(L,c)&&(w=L);var _=b.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function B(t,e){function n(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==_typeof(s)&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=h;return function(i,c){if(o===p)throw Error("Generator is already running");if(o===d){if("throw"===i)throw c;return{value:t,done:!0}}for(r.method=i,r.arg=c;;){var a=r.delegate;if(a){var u=I(a,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?d:y,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function I(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var c=i.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function j(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return g.prototype=b,o(_,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},x(B.prototype),l(B.prototype,a,(function(){return this})),e.AsyncIterator=B,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var c=new B(s(t,n,r,o),i);return e.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(_),l(_,u,"Generator"),l(_,c,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),l=r.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function asyncGeneratorStep(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){asyncGeneratorStep(i,r,o,c,a,"next",t)}function a(t){asyncGeneratorStep(i,r,o,c,a,"throw",t)}c(void 0)}))}}var burger=document.querySelector(".burger"),menu=document.querySelector(".menu"),application=document.querySelectorAll(".application"),body=document.querySelector("body"),inputsPhone=document.querySelectorAll("[type='tel']");inputsPhone.forEach((function(t){window.intlTelInput(t,{utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.1/build/js/utils.js",initialCountry:"ru",useFullscreenPopup:!1,separateDialCode:!0})})),burger.addEventListener("click",(function(){menu.classList.toggle("isOpen"),burger.classList.toggle("isOpen")}));var tabBtns=document.querySelectorAll(".services .tabs button"),tabContent=document.querySelectorAll(".services .tabs-content");function calcResult(){return _calcResult.apply(this,arguments)}function _calcResult(){return(_calcResult=_asyncToGenerator(_regeneratorRuntime().mark((function t(){var e,n,r,o,i,c,a,u;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementById("rateUSDRUB").value,n=document.getElementById("electricityCost").value/e,r=document.getElementById("hashrate").value,o=document.getElementById("consumption").value,i=document.getElementById("commission").value,c=document.querySelector(".currency__btn.active").getAttribute("data-rateUSD"),a=document.querySelector(".currency__btn.active").getAttribute("data-sign"),t.next=9,calculateMiningProfitabilityUsd(r,o,i,n);case 9:(u=t.sent).income=u.income*c,u.outgo=u.outgo*c,u.profit=u.profit*c,u.currency=c,u.currencyName=a,updateResultTable(u);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function calculateMiningProfitabilityUsd(t,e,n,r){return _calculateMiningProfitabilityUsd.apply(this,arguments)}function _calculateMiningProfitabilityUsd(){return(_calculateMiningProfitabilityUsd=_asyncToGenerator(_regeneratorRuntime().mark((function t(e,n,r,o){var i,c,a,u,l,s,f,h,y;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.minerstat.com/v2/coins?list=BTC").then((function(t){return t.json()}));case 2:return i=t.sent,c=i.find((function(t){return"BTC"==t.coin})),a=c.reward_block,144,u=c.price,document.getElementById("rateBTC").value=u.toFixed(2),l=c.network_hashrate,y=(s=e/(l/1e12)*144*a*u)-(f=n/1e3*24*o)-(h=s*(r/100)),t.abrupt("return",{income:s-h,outgo:f,profit:y});case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function setEquipment(){var t=document.getElementById("equipment").options[document.getElementById("equipment").selectedIndex],e=t.getAttribute("data-consumption"),n=t.getAttribute("data-hashrate");console.log(e,n),document.getElementById("consumption").value=e,document.getElementById("hashrate").value=n}function updateResultTable(t){document.getElementById("dayIncome").innerHTML="".concat(t.income.toFixed(2)," ").concat(t.currencyName),document.getElementById("weekIncome").innerHTML="".concat((7*t.income).toFixed(2)," ").concat(t.currencyName),document.getElementById("monthIncome").innerHTML="".concat((30*t.income).toFixed(2)," ").concat(t.currencyName),document.getElementById("dayOutGo").innerHTML="".concat(t.outgo.toFixed(2)," ").concat(t.currencyName),document.getElementById("weekOutGo").innerHTML="".concat((7*t.outgo).toFixed(2)," ").concat(t.currencyName),document.getElementById("monthOutGo").innerHTML="".concat((30*t.outgo).toFixed(2)," ").concat(t.currencyName),document.getElementById("monthProfit").innerHTML="Прибыль в месяц: ".concat((30*t.profit).toFixed(2)," ").concat(t.currencyName)}tabBtns.forEach((function(t,e){t.addEventListener("click",(function(){tabBtns.forEach((function(t){t.classList.remove("active")})),t.classList.add("active"),tabContent.forEach((function(t,n){t.classList.remove("active"),e===n&&t.classList.add("active")}))}))})),AOS.init({duration:1200});var currencyBtns=".currency__btn";$(currencyBtns).on("click",(function(){$(currencyBtns).removeClass("active"),$(this).addClass("active")}));
//# sourceMappingURL=calc.js.map