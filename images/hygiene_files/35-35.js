(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{264:function(t,e,i){"use strict";i.r(e);var n=i(2),s=i.n(n),r=i(0),o=i.n(r),a=i(3),c=i.n(a),l=i(341),h=i(1),u=i(329);function d(t,e,i,n){t.removeClass("hide"),t.each((function(t,n){var r=o()(n),a=r.data("category"),c=r.data("difficulty"),l=!0;e.length&&!s.a.includes(e,a)&&(l=!1);var h=!0;i.length&&!s.a.includes(i,c)&&(h=!1),l&&h||r.addClass("hide")})),n.refreshCarousel()}function f(t){t.removeClass("loading"),t.find(".carouselNav").each((function(t,e){var i=o()(e),n=i.find(".similarProjectsFilters"),s=i[0],r=new l.a(s,{offset:-20});n.length&&function(t,e,i){var n=e.find(".carouselNav__listItem"),s=i.find(".similarProjectsFiltersInput--difficulty"),r=i.find(".similarProjectsFiltersSelect--category"),a=[],l=[],f=[];n.each((function(t,e){var i=o()(e).data("category");a.includes(i)||(a.push(i),r.append(o()("<option/>",{value:i,text:o()("<span/>").html(i).text()})))})),r.on("change",(function(e){var i=o()("option:selected",e.target);l=i.length&&i.val()?i.val():a,d(n,l,f,t)})),c()(h.m).subscribe((function(e,r){if(Object(u.a)(r,s)){var a=i.find(".similarProjectsFiltersInput--difficulty:checked");f=[],a.length&&(f=a.map((function(t,e){return o()(e).val()}))),d(n,l,f,t)}}))}(r,i,n),r.render()})),c()(h.bb).broadcast()}function p(t){t.addClass("initialized");var e=t.data("endpoint");if(null==e||"null"===e)return!1;var i=t.data("recommendations-request-data")||"{}",n=JSON.parse(decodeURIComponent(i));return n.autoadvanceIds=o()(".component.auto-advance").data("auto"),n.projectRecirc=t.data("project-recirc"),n.recircTitle=t.data("recirc-title"),n.injectContent=t.data("inject-content"),o.a.get(e,n,(function(e){!function(t,e){t.html(e.html),t.addClass("enabled"),t.attr("data-request-data",e.request_data),t.find(".outbrain").length&&o.a.getScript("//widgets.outbrain.com/outbrain.js",(function(){c()(h.K).broadcast()})),f(t),c()(h.Z).broadcast()}(t,e)})).always((function(){t.removeClass("loading")})),!0}function v(){o()(".component.recirculation[data-endpoint]:not(.initialized)").each((function(){p(o()(this))}))}e.default=function(){v(),c()(h.d).subscribe((function(){v()}))}},329:function(t,e,i){"use strict";e.a=function(t,e){return t.is(e)||e.has(t).length>0}},341:function(t,e,i){"use strict";var n=i(3),s=i.n(n),r=i(0),o=i.n(r),a=i(2),c=i.n(a),l=i(1),h=i(8);function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,"a",(function(){return f}));var d=function(t){var e=t.getBoundingClientRect(),i=document.body;return{top:e.top+i.scrollTop,left:e.left+i.scrollLeft,width:e.width}};var f=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={viewportSelector:".carouselNav__listWrapper",listSelector:".carouselNav__list",linkSelector:".carouselNav__link",prevSelector:".carouselNav__prev",nextSelector:".carouselNav__next",itemSelector:".carouselNav__listItem",selectedSelector:".carouselNav__listItem--selected",scrollAnimationDuration:500,defaultScrollDistance:200,offset:0},this.elements={viewport:e.querySelector(this.options.viewportSelector),prevLink:e.querySelector(this.options.prevSelector),nextLink:e.querySelector(this.options.nextSelector)},i&&(this.options=Object.assign(this.options,i)),this.$context=o()(e),this.$slidePrev=this.$context.find(this.options.prevSelector),this.$slideNext=this.$context.find(this.options.nextSelector),this.root=e,this.wrapper=e.querySelector(this.options.listSelector),this.selectedElement=this.wrapper.querySelector(this.options.selectedSelector),this.items=this.wrapper.querySelectorAll(this.options.itemSelector),this.minItem=this.items[0];var n=parseInt(o()(this.minItem).find("a").css("padding-left"),10);this.elements.buffer=parseInt(2*n,10),this.maxItem=this.items[this.items.length-1],this.activeIndex=0,this.touchStartX=0,this.touchEndX=0}var e,i,n;return e=t,(i=[{key:"refreshCarousel",value:function(){var t=o()(this.wrapper).find("".concat(this.options.itemSelector,":visible")),e=this.minItem,i=this.maxItem;t.length&&(e=t.get(0),i=t.get(t.length-1)),e&&(this.minItem=e),i&&(this.maxItem=i),this.checkEnds(),s()(l.eb).broadcast()}},{key:"markFirst",value:function(){var t=Object(h.a)(),e=this.root.querySelector(this.options.viewportSelector),i=d(this.minItem).left-d(e).left,n=this.root.querySelector(this.options.prevSelector);i>=0||"mobile"===t?o()(n).css({display:"none"}):o()(n).css({display:"flex"})}},{key:"markLast",value:function(){var t=Object(h.a)(),e=this.root.querySelector(this.options.viewportSelector),i=d(this.maxItem).left,n=Math.floor(i-d(e).left+this.maxItem.offsetWidth),s=this.root.querySelector(this.options.nextSelector);n<=e.offsetWidth||"mobile"===t?o()(s).css({display:"none"}):o()(s).css({display:"flex"})}},{key:"getDistance",value:function(){return this.root.querySelector(this.options.viewportSelector).offsetWidth-this.options.offset}},{key:"updateItemsAccessibility",value:function(){var t=this,e={left:0,right:0};o()(this.elements.prevLink).is(":visible")&&(e.left=d(this.elements.prevLink).width+this.elements.buffer),o()(this.elements.nextLink).is(":visible")&&(e.right=d(this.elements.prevLink).width+this.elements.buffer),Array.prototype.forEach.call(this.items,(function(i,n){var s=o()(i);!function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,right:0},n=d(t),s=d(e);return n.left+n.width>s.left+i.left&&n.left<s.left+(s.width-i.right)}(i,t.elements.viewport,e)?(s.attr("aria-hidden",!0),s.attr("tabindex","-1")):(s.attr("aria-hidden",!1),s.removeAttr("tabindex"),t.activeIndex=n)})),s()(l.db).broadcast()}},{key:"checkEnds",value:function(){this.markFirst(),this.markLast(),this.updateItemsAccessibility()}},{key:"end",value:function(t,e){this.wrapper.scrollLeft=t+e,this.checkEnds()}},{key:"animatedScroll",value:function(t){var e,i,n=this.wrapper.scrollLeft,r=this.options.scrollAnimationDuration,o=this;function a(c){var h,u,d;i=c-e,o.wrapper.scrollLeft=(h=i,u=n,d=t,(h/=r/2)<1?d/2*h*h+u:-d/2*(--h*(h-2)-1)+u),i<r?requestAnimationFrame(a):(o.wrapper.scrollLeft=n+t,o.checkEnds(),s()(l.eb).broadcast())}requestAnimationFrame((function(t){e=t,a(t)}))}},{key:"scroll",value:function(t,e){var i=e;i||(i=this.options.defaultScrollDistance),"left"===t&&(i=-e),this.animatedScroll(i)}},{key:"trackSwipeGestures",value:function(){this.touchEndX<this.touchStartX&&s()(l.g).broadcast("left",this.activeIndex),this.touchEndX>this.touchStartX&&s()(l.g).broadcast("right",this.activeIndex)}},{key:"render",value:function(){var t=this;if(this.selectedElement&&this.minItem!==this.selectedElement){var e=d(this.selectedElement),i=d(this.wrapper),n=e.left-i.left;this.maxItem!==this.selectedElement&&(n-=this.options.offset),this.scroll("right",n)}else this.checkEnds();var r=this;s()(l.m).subscribe((function(e,i){i.closest(t.$slidePrev).length&&(e.preventDefault(),r.scroll("left",r.getDistance())),i.closest(t.$slideNext).length&&(e.preventDefault(),r.scroll("right",r.getDistance()))})),this.wrapper.addEventListener("scroll",c.a.throttle((function(){r.checkEnds()})),100),this.wrapper.addEventListener("touchstart",(function(t){r.touchStartX=t.changedTouches[0].screenX,r.touchStartY=t.changedTouches[0].screenY}),!1),this.wrapper.addEventListener("touchend",(function(t){r.touchEndX=t.changedTouches[0].screenX,r.touchEndY=t.changedTouches[0].screenY,r.trackSwipeGestures()}),!1),s()(l.ib).subscribe((function(){r.checkEnds()}))}}])&&u(e.prototype,i),n&&u(e,n),t}()}}]);
//# sourceMappingURL=35-35.js.map