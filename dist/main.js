parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MAh6":[function(require,module,exports) {
"use strict";var e,t,o;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e.WELCOME_BOX="WELCOME_BOX",e.CHAT_LIST="CHAT_LIST",e.CHAT_BOX="CHAT_BOX"}(e=exports.EChatFrame||(exports.EChatFrame={})),function(e){e.image="image",e.text="text",e.quickReply="quickReply",e.bot_thinking="bot_thinking"}(t=exports.EBotMessageMediaType||(exports.EBotMessageMediaType={})),function(e){e.bot="bot",e.human="human"}(o=exports.ESourceType||(exports.ESourceType={}));
},{}],"ijiP":[function(require,module,exports) {
"use strict";function e(){var e=new Date;return("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function t(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function r(e,t,r){var n=new RegExp("([?&])"+t+"=.*?(&|$)","i"),o=-1!==e.indexOf("?")?"&":"?";return e.match(n)?e.replace(n,"$1"+t+"="+r+"$2"):e+o+t+"="+r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTimeInHHMM=e,exports.getQueryStringValue=t,exports.updateQueryStringParameter=r;
},{}],"uwLa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./typings/send-api"),e=require("./utility");function n(){exports.$chatInput=document.getElementById("chat-input"),exports.$chatInputIcon=document.getElementById("chat-input-icon"),exports.$botIntro=document.getElementById("botIntro"),exports.$chatBody=document.getElementById("body"),exports.$chatFooter=document.getElementsByClassName("footer")[0],exports.$loader=document.getElementsByClassName("loader")[0],exports.$envOptions=document.getElementById("env-options"),exports.$botTitle=document.getElementById("bot-title"),exports.$botLogo=document.getElementById("bot-logo"),exports.$phoneModel=document.getElementById("phone-modal"),exports.$langSelect=document.getElementById("lang-select"),exports.$langSubmit=document.getElementById("lang-submit")}function o(t){exports.$botLogo.src="https://whizkey.ae/wisdom/static/media/rammas.42381205.gif",exports.$botTitle.textContent=t.title}function a(n){var o="",a=document.createDocumentFragment(),l="";n.forEach(function(t){t.text&&(o+=c(t.text,t.sourceType)),t.quick_reply&&(o+=d(t.quick_reply,t.sourceType)),t.media&&(t.media.audio_url&&(o+=v(t.media.audio_url)),t.media.video_url&&(o+=h(t.media.video_url),l=l+'<video autoplay="autoplay" muted="muted"  class="msg-video" controls="true" playsinline="playsinline">\n                <source src="'+t.media.video_url+'"/>\n                    Your browser does not support HTML5 video.\n                </video>'),t.media.image_url&&(o+=y(t.media.image_url)),t.media.length&&(o+=g(t.media)))});var u=n[0].sourceType===t.ESourceType.human?"msg-bubble-human":"",m=e.getTimeInHHMM(),p=r(o='\n            <div xmlns="http://www.w3.org/1999/xhtml" class="msg-bubble '+u+'">\n                <div class="msg-bot-logo">\n                    <img style="height: 100%; width: 100%" src="https://whizkey.ae/wisdom/static/media/rammas.42381205.gif" alt=""/>\n                </div>\n                <div class="message-container">\n                    '+o+'\n                    <div class="time" style="font-size: 9px">'+m+"</div>\n                </div>\n            </div>  \n            \n        "),f=p.querySelector(".carousal-container");a.appendChild(p),f.style.opacity="0",exports.$chatBody.appendChild(a);var b=exports.$chatBody.offsetWidth-60;b>0&&b<225?f.setAttribute("data-itemToShow","1"):b>0&&b<450?(b=225,f.setAttribute("data-itemToShow","1")):b>=450&&b<675?(b=450,f.setAttribute("data-itemToShow","2")):b>=675&&(b=675,f.setAttribute("data-itemToShow","3")),f.style.width=b+"px",f.style.opacity="1";var x=document.getElementsByClassName("msg-video");l&&(x[x.length-1].innerHTML=l);i(),s()}function s(){exports.$chatBody.scrollTop=exports.$chatBody.scrollHeight}function i(){exports.$chatInput.value=""}function r(t){return(new DOMParser).parseFromString(t,"text/xml").firstChild}function l(t){var e="";return t.quick_replies.forEach(function(t){e=e+'<button data-payload="'+t.payload+'">'+t.title+"</button>"}),e}function d(t,e){return'\n                <div class="message-wrapper-quick-reply">\n                    '+l(t)+"\n                </div>\n            "}function c(e,n){return'\n                <div class="message-wrapper '+(n===t.ESourceType.human?"message-wrapper-human":"")+'">\n                    <div class="content">'+e+"</div>\n                </div>\n            "}function u(t){var e="";return t.forEach(function(t){e=e+'\n            <li class="title" data-payload="'+t.payload+'" data-type="'+t.type+'">'+t.title+"</li>\n        "}),e}function m(t){return'\n    <div class="item">\n            <div class="bot-carousal-item shadow-theme">\n                <div class="banner">\n                    <img src="https://s3.eu-west-1.amazonaws.com/imibot-production/assets/search-bot-icon.svg" alt=""/>\n                </div>\n                <ul style="list-style: none">\n                    <li class="title">\n                        '+t.title+"\n                    </li>\n                    "+u(t.buttons)+"\n                </ul>\n            </div>\n        </div>\n    "}function p(t){var e="";return t.forEach(function(t){e+=m(t)}),e}function g(t,e){return'\n               <div class="carousal-container hide-left-control" data-step="0">\n                   <div class="carousal-container-inner">\n                        '+p(t)+'\n                   </div>\n                   <div class="fa fa-angle-left control control-left"></div>\n                   <div class="fa fa-angle-right control control-right"></div>\n                </div>\n            '}function v(t){return'\n                <div class="message-wrapper  message-wrapper-bot">\n                    <audio class="msg-audio" src="'+t+'"></audio>\n                </div>\n            '}function h(t){return'\n                <div class="message-wrapper  message-wrapper-bot msg-video">\n                    \n                </div>\n            '}function y(t){return'\n                <div class="message-wrapper message-wrapper-bot msg-shadow" \n                style="width: 100%; padding-top: 105%; position: relative; margin-bottom: 20px; background:#80808017; border-radius: 8px; overflow: hidden">\n                    <img style="position:absolute; top: 50%; left: 0; right: 0; bottom: 0;width: 100%; transform: translateY(-50%)" class="msg-img click-to-zoom" src="'+t+'" alt=""/>\n                </div>\n            '}exports.domInit=n,exports.setIntroDetails=o,exports.AppendMessageInChatBody=a,exports.resetChatInput=i;
},{"./typings/send-api":"MAh6","./utility":"ijiP"}],"QVnC":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"D39N":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function t(e){var t=new XMLHttpRequest;return t.open("GET",e.url,!0),r(t,e.headerData),t.send(null),new Promise(function(e,n){t.onreadystatechange=function(){4==t.readyState&&200==t.status&&e(JSON.parse(t.responseText))}})}function n(e){var t=new XMLHttpRequest;return t.open("POST",e.url,!0),r(t,e.headerData),t.send(JSON.stringify(e.body)),new Promise(function(e,n){t.onreadystatechange=function(){4==t.readyState&&200==t.status&&e(JSON.parse(t.responseText))}})}function r(t,n){n&&(n=e(e({},n),{"content-type":"application/json"}),Object.keys(n).forEach(function(e){var r=n[e];r&&t.setRequestHeader(e,r)}))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeGetReq=t,exports.makePostReq=n;
},{}],"QyAc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.environment={bot_access_token:null,bot_unique_name:"dewa_gitex_en",enterprise_unique_name:"dewa_demo",root:"",consumer:{uid:Date.now()}};
},{}],"xgI0":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./ajax"),s=require("./environment"),a=require("./typings/send-api");function r(e,a,r){var i="https://"+s.environment.root+"imibot.ai/api/v1/webhook/web/",n={consumer:s.environment.consumer,type:"human",msg:r,platform:"web",is_test:!1},o={"bot-access-token":e};return t.makePostReq({url:i,body:n,headerData:o})}function i(t,s,r){return t.map(function(i,n){var o=n===t.length-1,p=e(e({},i),{bot_message_id:s,time:Date.now(),messageMediaType:null,sourceType:a.ESourceType.bot,isLast:o,response_language:r});return p="media"===Object.keys(i)[0]?e(e({},p),{messageMediaType:i.media[0]&&i.media[0].type}):"quick_reply"===Object.keys(i)[0]?e(e({},p),{messageMediaType:a.EBotMessageMediaType.quickReply}):e(e({},p),{messageMediaType:a.EBotMessageMediaType.text})})}exports.sendMessageToBot=r,exports.serializeGeneratedMessagesToPreviewMessages=i;
},{"./ajax":"D39N","./environment":"QyAc","./typings/send-api":"MAh6"}],"ZCfc":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))(function(o,a){function s(e){try{l(i.next(e))}catch(n){a(n)}}function r(e){try{l(i.throw(e))}catch(n){a(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(s,r)}l((i=i.apply(e,n||[])).next())})},n=this&&this.__generator||function(e,n){var t,i,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,i=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(r){a=[6,r],i=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./dom");require("regenerator-runtime/runtime");var i=require("./send-api"),o=require("./environment"),a=require("./typings/send-api"),s=require("./utility"),r=!1;function l(){return e(this,void 0,void 0,function(){return n(this,function(e){return u(),[2]})})}var c=function(){function e(){}return e.prototype.init=function(e){document.querySelector(e).innerHTML=h(),t.domInit(),l()},e.prototype.appendMessageInChatBody=function(e){t.AppendMessageInChatBody(e)},e}();function d(){t.$phoneModel.classList.add("d-none"),t.$phoneModel.classList.remove("d-flex"),t.$chatBody.classList.remove("bg-opaque"),t.$chatFooter.classList.remove("opacity-0")}function u(){document.getElementById("close-modal1").addEventListener("click",function(e){d()}),console.log(t.$chatBody),t.$chatBody.addEventListener("click",function(e){var n=e.target;d();var t=e.target;if(t.classList.contains("click-to-zoom")){var i=document.getElementById("myModal"),o=document.getElementById("img01");document.getElementById("caption");i.style.display="block",o.src=t.src,document.getElementsByClassName("close")[0].onclick=function(){i.style.display="none"}}if(t.classList,n.classList.contains("control")){var a=m(n,"carousal-container"),s=n.classList.contains("control-right"),r=a.querySelector(".carousal-container-inner"),l=a.querySelectorAll(".item").length,c=Number(a.getAttribute("data-step"));if(a.classList.remove("hide-left-control"),a.classList.remove("hide-right-control"),c<l-2&&s)++c===l-2&&setTimeout(function(){a.classList.add("hide-right-control")},350);else{if(!(c>0)||s)return;0===--c&&setTimeout(function(){a.classList.add("hide-left-control")},350)}a.setAttribute("data-step",c.toString());var u=a.offsetWidth,p=100*r.querySelector(".item").offsetWidth/u;r.style.transform="translateX("+-1*p*c+"%)"}}),t.$langSubmit.addEventListener("click",function(e){var n=t.$langSelect.value;if(n){var i=o.environment.bot_unique_name.split("_");i.pop(),o.environment.bot_unique_name=i.join("_")+"_"+n;var a=s.updateQueryStringParameter(location.href,"bot_unique_name",o.environment.bot_unique_name);a=s.updateQueryStringParameter(a,"lang",n),location.href=a,v()}}),t.$chatInput.addEventListener("keypress",function(e){if("Enter"===e.key){var n=t.$chatInput.value;if(!n||!n.trim())return;p(n)}}),t.$chatInputIcon.addEventListener("click",function(){var e=t.$chatInput.value;e&&e.trim()&&p(e)}),t.$envOptions.addEventListener("click",function(){var e=document.getElementsByClassName("chat-body")[0],n=t.$phoneModel.querySelector(".lang-panel");r?(e.classList.remove("bg-opaque"),t.$phoneModel.classList.remove("d-flex"),t.$phoneModel.classList.add("d-none"),t.$chatFooter.classList.remove("opacity-0"),n.classList.remove("d-flex")):(e.classList.add("bg-opaque"),t.$phoneModel.classList.add("d-flex"),t.$phoneModel.classList.remove("d-none"),t.$chatFooter.classList.add("opacity-0"),n.classList.add("d-flex")),r=!r})}function p(s){return e(this,void 0,void 0,function(){var e,r;return n(this,function(n){switch(n.label){case 0:return t.AppendMessageInChatBody([{sourceType:a.ESourceType.human,text:s,time:Date.now()}]),[4,i.sendMessageToBot(o.environment.bot_access_token,o.environment.enterprise_unique_name,s)];case 1:return e=n.sent(),r=i.serializeGeneratedMessagesToPreviewMessages(e.generated_msg),t.AppendMessageInChatBody(r),[2]}})})}function v(){var e=s.getQueryStringValue("lang");"ar"!==e&&"rtl"!==e||(document.body.classList.add("lang-rtl"),t.$chatInput.setAttribute("dir","rtl"),t.$chatInput.placeholder="أكتب السؤال ..");var n=s.getQueryStringValue("root");n&&(o.environment.root="."===n?"":n+".");var i=s.getQueryStringValue("enterprise_unique_name");i&&(o.environment.enterprise_unique_name=i);var a=s.getQueryStringValue("bot_unique_name");a&&(o.environment.bot_unique_name=a)}function m(e,n){for(;e;){if(e.classList.contains(n))return e;e=e.parentElement}}function h(){return'\n<div class="loader">\n    <img src="https://whizkey.ae/wisdom/static/media/rammas.42381205.gif" alt="">\n</div>\n    \x3c!-- The Modal --\x3e\n<div id="myModal" class="modal2">\n    <span class="close">&times;</span>\n    <img class="modal-content" id="img01">\n    <div id="caption"></div>\n</div>\n\n<div class="page1">\n    <div class="page__content">\n        <div class="phone">\n            <div class="phone__body">\n                <div class="phone__view">\n                    <div id="phone-modal" class="modal1" style="">\n                        <i class="fa fa-times" id="close-modal1"></i>\n                        <div class="lang-panel">\n                            <h1>Select language</h1>\n                            <div>\n                                <select id="lang-select">\n                                    <option value="en">English</option>\n                                    <option value="ar" style="direction: rtl;">عربي</option>\n                                </select>\n                            </div>\n                            <button class="imi-button-primary" id="lang-submit">Submit</button>\n                        </div>\n                    </div>\n                    <div class="grid-container">\n\n                        <div class="header" style="z-index: 1">\n                            <div class="basel-bg"></div>\n                            <div class="bot-intro" id="botIntro">\n                                <span class="bot-logo">\n                                    <img id="bot-logo" src="https://whizkey.ae/wisdom/static/media/rammas.42381205.gif"\n                                         alt="">\n                                </span>\n                                <div class="bot-details">\n                                    <div id="bot-title" class="title"></div>\n                                </div>\n                                <div class="options" id="env-options">\n                                    <i class="fa fa-ellipsis-v"></i>\n                                </div>\n                            </div>\n                        </div>\n                        \x3c!--chat body starts--\x3e\n                        <div class="chat-body" id="body"\n                             style="padding: 8px 6px; display: flex; flex-direction: column; z-index: 0">\n\n                        </div>\n                        \x3c!--chat body ends--\x3e\n                        <div class="footer">\n                            <input placeholder="Type a message" id="chat-input" dir="ltr" autocomplete="off" autofocus\n                                   type="text">\n                            <span class="icon" id="chat-input-icon">\n                                <span class="fa fa-send"></span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class="phone__notch">\n                    <div class="phone__speaker"></div>\n                    <div class="phone__camera"></div>\n                </div>\n            </div>\n            <div class="phone__btn">\n                <button class="phone__btn--power"></button>\n                <div class="phone__btn--volume">\n                    <button class="phone__btn--volume-up"></button>\n                    <button class="phone__btn--volume-down"></button>\n                </div>\n                <button class="phone__btn--mute"></button>\n            </div>\n        </div>\n    </div>\n</div>\n    \n    \n    '}window.ImiPreview=c,l().then(function(e){return console.log("app init success")});
},{"./dom":"uwLa","regenerator-runtime/runtime":"QVnC","./send-api":"xgI0","./environment":"QyAc","./typings/send-api":"MAh6","./utility":"ijiP"}]},{},["ZCfc"], null)