!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=jQuery},function(t,e,n){"use strict";const i=n(0),o=n(2),s=n(3),c=n(4),a=n(5),d=n(6),r=n(7);i((function(){new o,new s,new c,new a,new d,new r}))},function(t,e,n){"use strict";const i=n(0);t.exports=class{constructor(t){"ontouchstart"in window||document.documentElement.classList.add("no-touch"),"ontouchstart"in window&&document.documentElement.classList.add("is-touch"),(document.documentMode||/Edge/.test(navigator.userAgent))&&(-1===navigator.appVersion.indexOf("Trident")?document.documentElement.classList.add("isEDGE"):i("html").addClass("isIE isIE11")),(/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString())&&document.body.classList.add("browser-safari"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&document.body.classList.add("darkmode"),"localhost"==window.location.hostname|"127.0.0.1"==window.location.hostname&&document.body.classList.add("localhost"),i(document).ready((function(){i("body").addClass("page-loaded")})),setTimeout((function(){i("body").addClass("page-loaded")}),5e3)}}},function(t,e,n){"use strict";t.exports=class{constructor(t){this.events()}events(){var t,e,n,i=document.querySelectorAll("*[data-animate-in], *[data-detect-viewport]"),o=window.pageYOffset;function s(t){var e=t.getBoundingClientRect(),n=e.top,i=e.top+t.offsetHeight;return n<o+window.innerHeight&&i>0}function c(){for(var t=0;t<i.length;t++)s(i[t])&&(i[t].classList.contains("in-view")||i[t].classList.add("in-view"))}window.addEventListener("scroll",(t=c,e=200,n=Date.now(),function(){n+e-Date.now()<0&&(t(),n=Date.now())})),window.addEventListener("resize",c);for(var a=0;a<i.length;a++){var d=0,r=i[a];d=i[a].getAttribute("data-animate-in-delay")?i[a].getAttribute("data-animate-in-delay")/1e3+"s":0,r.style.transitionDelay=d}c()}}},function(t,e,n){"use strict";const i=n(0);t.exports=class{constructor(t){this.defaults={},this.settings=i.extend(!0,{},this.defaults,t),this.setup()}setup(){const t=i(".category"),e=i(".object-group"),n=i(".arrow-next"),o=i(".arrow-prev");const s=i(".objects-wrap");t.click((function(){let n=i(this),o=n.attr("data-category"),c=i(".object-group[data-objects="+o+"]");t.removeClass("is-active"),n.addClass("is-active"),e.removeClass("is-active"),c.addClass("is-active"),s.animate({scrollLeft:0},0)})),n.click((function(){var t=s.prop("scrollWidth");let e=s.scrollLeft()+(i("#objects").width()-100);e>t&&(e=t-10),s.animate({scrollLeft:e},800)})),o.click((function(){let t=s.scrollLeft()-(i("#objects").width()-100);t<0&&(t=0),s.animate({scrollLeft:t},800)}))}}},function(t,e,n){"use strict";const i=n(0);t.exports=class{constructor(t){this.defaults={},this.settings=i.extend(!0,{},this.defaults,t),this.setup()}setup(){i("#bot");const t=i(".object");function e(t,e){let n=t,o=n.parents(".object"),s=o.attr("data-object-title");s=s+"-"+e,n.attr("id",s);let c="url(#"+s+")";o.find('path[fill="url(#SVGID_'+e+'_)"]').each((function(){i(this).attr("fill",c)}))}i(window).on("load",(function(){i('svg *[id="SVGID_1_"]').each((function(){e(i(this),1)})),i('svg *[id="SVGID_2_"]').each((function(){e(i(this),2)})),i('svg *[id="SVGID_3_"]').each((function(){e(i(this),3)})),i('svg *[id="SVGID_4_"]').each((function(){e(i(this),4)})),i('svg *[id="SVGID_5_"]').each((function(){e(i(this),5)})),i('svg *[id="SVGID_6_"]').each((function(){e(i(this),6)})),i('svg *[id="SVGID_7_"]').each((function(){e(i(this),7)})),i('svg *[id="SVGID_8_"]').each((function(){e(i(this),8)})),i('svg *[id="SVGID_9_"]').each((function(){e(i(this),9)})),i('svg *[id="SVGID_10_"]').each((function(){e(i(this),10)})),i('svg *[id="SVGID_11_"]').each((function(){e(i(this),11)})),i('svg *[id="SVGID_12_"]').each((function(){e(i(this),12)})),i('svg *[id="SVGID_13_"]').each((function(){e(i(this),13)})),i('svg *[id="SVGID_14_"]').each((function(){e(i(this),14)})),i('svg *[id="SVGID_15_"]').each((function(){e(i(this),15)})),i('svg *[id="SVGID_16_"]').each((function(){e(i(this),16)})),i('svg *[id="SVGID_17_"]').each((function(){e(i(this),17)})),i('svg *[id="SVGID_18_"]').each((function(){e(i(this),18)})),i('svg *[id="SVGID_19_"]').each((function(){e(i(this),19)})),i('svg *[id="SVGID_20_"]').each((function(){e(i(this),20)})),i('svg *[id="SVGID_21_"]').each((function(){e(i(this),21)})),i('svg *[id="SVGID_22_"]').each((function(){e(i(this),22)})),i('svg *[id="SVGID_23_"]').each((function(){e(i(this),23)})),i('svg *[id="SVGID_24_"]').each((function(){e(i(this),24)})),i('svg *[id="SVGID_25_"]').each((function(){e(i(this),25)})),i('svg *[id="SVGID_26_"]').each((function(){e(i(this),26)})),i('svg *[id="SVGID_27_"]').each((function(){e(i(this),27)})),i('svg *[id="SVGID_28_"]').each((function(){e(i(this),28)})),i('svg *[id="SVGID_29_"]').each((function(){e(i(this),29)})),i('svg *[id="SVGID_30_"]').each((function(){e(i(this),30)})),i('svg *[id="SVGID_31_"]').each((function(){e(i(this),31)})),i('svg *[id="SVGID_32_"]').each((function(){e(i(this),32)})),i('svg *[id="SVGID_33_"]').each((function(){e(i(this),33)})),i('svg *[id="SVGID_34_"]').each((function(){e(i(this),34)})),i('svg *[id="SVGID_35_"]').each((function(){e(i(this),35)})),i('svg *[id="SVGID_36_"]').each((function(){e(i(this),36)})),i('svg *[id="SVGID_37_"]').each((function(){e(i(this),37)})),i('svg *[id="SVGID_38_"]').each((function(){e(i(this),38)})),i('svg *[id="SVGID_39_"]').each((function(){e(i(this),39)})),i(".object--default").each((function(){i(this).click()}))})),t.click((function(){let t=i(this),e=t.parents(".object-group"),n=(e.attr("data-objects"),t.attr("data-holder")),o=t.attr("data-object-title");if(n=i("#"+n),t.hasClass("is-active"))n.empty(),t.removeClass("is-active");else{e.find(".object.is-active").removeClass("is-active"),n.empty(),t.addClass("is-active");let i=t.find("svg > g");i.addClass(o);let s=i.clone();n.append(s)}}))}}},function(t,e,n){"use strict";n(0);t.exports=class{constructor(t){}}},function(t,e,n){"use strict";const i=n(0);t.exports=class{constructor(t){const e=i("#download-file"),n=i("#share-on-twitter"),o=i("#share-modal"),s=i("body"),c=i(".js-toggle-share"),a=(i("#terms-label"),i("#terms"));let d=localStorage.getItem("modthebotterms");function r(t,e,n,i){[].forEach.call(document.querySelectorAll(t),(function(t){try{var i,o=document.getElementById("img"),s=document.getElementById("bot"),c=document.getElementById("canvas"),a=c.getContext("2d");c.setAttribute("width",2e3),c.setAttribute("height",2e3),o.src=h(s);var d=o.src;(i=new Image).width=2e3,i.height=2e3;i.onload=function(){if(a.fillStyle="rgba(255, 255, 255, 0)",a.fillRect(0,0,canvas.width,canvas.height),a.drawImage(i,0,0,2e3,2e3),n){o.src=c.toDataURL();var t=document.createElement("a");t.download="dotnet-bot-mod.png",t.href=o.src,document.body.appendChild(t),t.click()}d=(new XMLSerializer).serializeToString(document.getElementById("bot"));window.btoa(d);o.src=c.toDataURL();var r=o.src;r=o.src.split("data:image/png;base64,").pop(),document.getElementById("image-file").value=r,e(),document.getElementById("tweetPreviewImg").src=h(s)},i.src=s?h(s):t.getAttribute("data-svgSource")}catch(t){console.log(t)}}))}function l(){console.log("download image")}function u(){console.log("tweet image"),i("#tweet-preview").removeClass("d-none")}function h(t){var e=(new XMLSerializer).serializeToString(t);return"data:image/svg+xml,"+encodeURIComponent(e)}i(document).ready((function(){"true"==d&&(a.prop("checked",!0),n.removeAttr("disabled"),e.removeAttr("disabled"))})),a.change((function(){i(this).is(":checked")?(console.log("check"),localStorage.setItem("modthebotterms","true"),n.removeAttr("disabled"),e.removeAttr("disabled")):(console.log("uncheck"),localStorage.setItem("modthebotterms","false"),n.attr("disabled","disabled"),e.attr("disabled","disabled"))})),c.click((function(t){t.preventDefault(),o.hasClass("is-active")?(o.removeClass("is-active"),s.removeClass("modal-is-active")):(o.addClass("is-active"),s.addClass("modal-is-active"))})),e.click((function(t){t.preventDefault(),r("#bot",l,!0,!1)})),n.click((function(t){t.preventDefault(),r("#bot",u,!1,!1)}));const f=document.getElementById("tweet-text"),g=document.getElementById("tweet-text-count");let v=function(t){let e=f.value.length;g.innerHTML=e};v(),f.addEventListener("keydown",v,!1),f.addEventListener("keyup",v,!1),f.addEventListener("change",v,!1)}}}]);