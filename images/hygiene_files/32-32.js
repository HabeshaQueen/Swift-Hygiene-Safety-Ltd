(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(0),o=n.n(a),i=n(3),c=n.n(i),s=n(339),l=n(1),r=n(329),d=n(331),u=n(417),f=n(603),m=n.n(f),v=o()(document.body),p=v.data("save-with-collection"),h=v.data("save-with-success"),b=o()(".modal.favorite-collections-modal"),g=b.length?new s.a(b,"favorite-collections-modal"):null,w=o()(".modal.save-success-modal"),y=w.length?new s.a(w,"save-success-modal"):null;function x(e){var t=o()(".favorite-collections-modal .alert-banner");t.removeClass("hidden"),t.find(".alert-text").text(e)}function j(){var e=o()(".favorite-collections-modal .alert-banner");e.addClass("hidden"),e.find(".alert-text").text("")}function C(e){return!(e&&e.length>40)||(x("The collection name is too long (max 40 characters)"),!1)}function O(e,t,n){var a=Object(d.a)("/element-api/content-proxy/favorite");o.a.ajax({url:a,type:"GET",data:e,cache:!1,success:function(e,n,a){if(200===a.status){var o=JSON.parse(e);o.IsFavorite&&!0===o.IsFavorite&&(t.find(".icon-text").html("Saved"),t.addClass("saved"),c()(l.ab).broadcast())}}}).fail((function(a){500!==a.status||n||Object(u.a)(O,[e,t])})).always((function(){t.addClass("initialized")}))}function k(e,t){var n=Object(d.a)("/element-api/content-proxy/favorite-collections"),a=e,i=o()(".lead-content-wrapper .image-container .component.lazy-image");a.image_src=i.data("src"),a.image_width=i.data("original-width"),a.image_height=i.data("original-height"),a.title=o()(".intro.article-info .headline").text(),o.a.get(n,e,(function(e){e.html&&(g.open(e.html),c()(l.eb).broadcast(),c()(l.z).broadcast())})).fail((function(n){500!==n.status||t||Object(u.a)(O,[e])}))}function D(){g.close()}function T(e,t,n){var a=Object(d.a)("/element-api/content-proxy/favorite");t.addClass("saving"),o.a.post(a,e,(function(e){JSON.parse(e).recipeBoxItemID&&(t.find(".icon-text").html("Saved"),t.addClass("saved"),t.removeClass("saving"),c()(l.ab).broadcast())})).fail((function(a){t.removeClass("saving"),500!==a.status||n||Object(u.a)(T,[e,t])}))}function E(e,t,n){var a=Object(d.a)("/element-api/content-proxy/favorite");t.addClass("saving"),o.a.ajax({url:a,type:"DELETE",data:e,success:function(e,n,a){200===a.status&&(t.find(".icon-text").html("Save"),t.removeClass("saving"),t.removeClass("saved"),console.log("Removed successfully"),c()(l.ab).broadcast())},error:function(a){t.removeClass("saving"),500!==a.status||n||Object(u.a)(E,[e,t])}})}function S(){var e=o()(".shareicon-favorite-link"),t=e.data("content-id");function n(){e.length&&(v.hasClass("authenticated")?O({id:t},e):(e.attr("aria-label","".concat(e.attr("aria-label")||""," (opens in a new window)")),c()(l.ab).broadcast()))}n(),document.body.addEventListener(l.c,(function(){n()})),c()(l.m).subscribe((function(n,a){if(a.closest(e).length)if(n.preventDefault(),v.hasClass("authenticated")&&e.hasClass("initialized")&&!e.hasClass("saving")){var i={id:t};e.hasClass("saved")?p?k(i,!0):E(i,e):(T(i,e),p?k(i,!1):h&&y.open())}else{var c="";o()(".print-preview").length>0&&(c="?printview");var s=e.data("content-login-url")+encodeURIComponent(c);setTimeout((function(){window.open(s,"_self")}),0)}}));var a=o()(".modal.share-icons"),i="";function d(e,t){e[0].target.classList.contains("modal-active")||(o()(".ugc-comments-add-comment").trigger("click"),t.disconnect())}function u(e,t){o()(".js-ugc-comments-outer-comment-wrap").hasClass("test-ugc-comments__hide")&&o()(window).trigger("revealComments"),e.preventDefault(),i.close();var n=t.data("content-id");document.querySelector(n).scrollIntoView(!0)}a.length&&(i=new s.a(a,"share-icons")),c()(l.m).subscribe((function(n,a){var c=o()(".shareicon-modal-toggle"),s=o()(".shareicon-print-link"),l=o()(".js-view-comments-btn-comments"),f=o()(".js-view-comments-btn-nocomments"),v=o()(".favorite-collections-add-icon"),p=o()(".favorite-collections-footer-remove"),h=o()(".favorite-collections-footer-done");if(Object(r.a)(a,h))D();else if(Object(r.a)(a,p)){E({id:t},e),D()}else if(Object(r.a)(a,v)){var b=o()(".favorite-collections-add-input").val();(function(e){if(!C(e))return!1;if(!e)return x("A new collection name is required"),!1;var t=!1;return o()(".favorite-collections-item-name").each((function(n,a){return a.innerText!==e||(t=!0,!1)})),t?(x('The collection "'.concat(e,'" already exists')),!1):(j(),!0)})(b)&&function(e){var t=(new Date).getTime(),n=o()(m()({id:t,name:e}));n.find(".checkbox-list").attr("for",t),n.find(".checkbox-list-input").attr("id",t).val(e).attr("checked","checked"),n.find(".favorite-collections-item-name").text(e),o()(".favorite-collections-section").prepend(n),o()(".favorite-collections-add-input").val(""),o()(".favorite-collections-footer-done").focus()}(b)}else if(Object(r.a)(a,c)){n.preventDefault();var g=a.parents(".docked-sharebar").find(".sharebar-modal").html(),w=a.parents(".shareicon-modal-toggle").data("share-id");w&&(g=o()("#".concat(w)).html(),w+="_share-new"),i.open(g),a.get(0).id=a.get(0).id||w||"share-id-".concat((new Date).getTime()),i.$modal.data("source-target-id",a.get(0).id)}else if(Object(r.a)(a,s))n.preventDefault(),i&&i.close(),window.print();else if(Object(r.a)(a,l))u(n,l);else if(Object(r.a)(a,f)){if(n.preventDefault(),"#ugc-comments"===f.data("content-id"))if(n.stopPropagation(),o()("body").hasClass("authenticated"))new MutationObserver(d).observe(document.body,{attributes:!0}),i.close();else window.location=f.data("content-login-url");else u(n,f)}})),c()(l.C).subscribe((function(e,t){Object(r.a)(t,o()(".favorite-collections-add-input"))&&C(o()(".favorite-collections-add-input").val())&&j()})),c()(l.mb).subscribe((function(e){var t=o()(".icon.icon-print").find("a[href$='?printview']");e.preventDefault(),t.click()}))}},329:function(e,t,n){"use strict";t.a=function(e,t){return e.is(t)||t.has(e).length>0}},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(2),o=n.n(a),i=n(0),c=n.n(i);function s(e){return c()(document.body).data("add-slash")&&!o.a.endsWith(e,"/")?"".concat(e,"/"):e}},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(2),o=n.n(a),i=n(0),c=n.n(i),s=n(331);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e,t){var n=Object(s.a)("/element-api/content-proxy/refresh-cookie");c.a.ajax({url:n,retry:!1,type:"GET",timeout:3e3,xhrFields:{withCredentials:!0},success:function(n){o.a.isArray(n)&&"function"==typeof e&&(o.a.forEach(n,(function(e){document.cookie=e})),e.apply(void 0,l(t).concat([!0])))}})}},603:function(e,t,n){var a=n(196);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var i,c=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,l=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="favorite-collections-item">\n  <label class="checkbox-list" for="'+l("function"==typeof(i=null!=(i=r(n,"id")||(null!=t?r(t,"id"):t))?i:s)?i.call(c,{name:"id",hash:{},data:o,loc:{start:{line:2,column:36},end:{line:2,column:42}}}):i)+'">\n    <input class="checkbox-list-input" type="checkbox" value="'+l("function"==typeof(i=null!=(i=r(n,"name")||(null!=t?r(t,"name"):t))?i:s)?i.call(c,{name:"name",hash:{},data:o,loc:{start:{line:3,column:62},end:{line:3,column:72}}}):i)+'" id="'+l("function"==typeof(i=null!=(i=r(n,"id")||(null!=t?r(t,"id"):t))?i:s)?i.call(c,{name:"id",hash:{},data:o,loc:{start:{line:3,column:78},end:{line:3,column:84}}}):i)+'" />\n    <span class="checkbox-list-checkmark">\n      <span class="favorite-collections-item-name">'+l("function"==typeof(i=null!=(i=r(n,"name")||(null!=t?r(t,"name"):t))?i:s)?i.call(c,{name:"name",hash:{},data:o,loc:{start:{line:5,column:51},end:{line:5,column:61}}}):i)+"</span>\n    </span>\n  </label>\n</li>\n"},useData:!0})}}]);
//# sourceMappingURL=32-32.js.map