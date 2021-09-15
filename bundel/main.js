(()=>{"use strict";function t(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o,i,r,s,a,l,c,u,d,h,f,p,m,v,y;f=document.querySelector(".header-modal"),p=document.querySelector(".services-modal"),m=document.querySelector(".overlay"),v=function(){m.classList.toggle("active-menu"),f.classList.toggle("active-menu")},y=function(){m.classList.toggle("active-menu"),p.classList.toggle("active-menu")},document.addEventListener("click",(function(t){var e=t.target;(e.closest(".header-modal__close")||e.closest(".button"))&&(t.preventDefault(),v()),(e.closest(".services-modal__close")||e.closest(".service-button"))&&(t.preventDefault(),y()),e.classList.contains("overlay")&&(f.classList.contains("active-menu")?v():p.classList.contains("active-menu")&&y())})),d=document.querySelector(".smooth-scroll"),h=document.querySelector("#benefits"),window.addEventListener("scroll",(function(){h.offsetTop<document.documentElement.scrollTop?(d.classList.add("show-btn"),d.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))):d.classList.remove("show-btn")})),o="23 September  2021",i=document.querySelectorAll(".count_1"),r=document.querySelectorAll(".count_2"),s=document.querySelectorAll(".count_3"),a=document.querySelectorAll(".count_4"),l=0,c=function(t){return t<10?"0".concat(t):t},(u=function(){var t=function(){var t=(new Date(o).getTime()-(new Date).getTime())/1e3,e=Math.floor(t%60),n=Math.floor(t/60%60),i=Math.floor(t/3600%24),r=Math.floor(t/3600/24);return t>0?{timeRemaining:t,days:r,hours:i,minutes:n,seconds:e}:{timeRemaining:0,days:0,hours:0,minutes:0,seconds:0}}(),e=t.days,n=t.hours,u=t.minutes,d=t.seconds,h=t.timeRemaining;i.forEach((function(t){t.querySelector("span").textContent=c(e)})),r.forEach((function(t){t.querySelector("span").textContent=c(n)})),s.forEach((function(t){t.querySelector("span").textContent=c(u)})),a.forEach((function(t){t.querySelector("span").textContent=c(d)})),h<0&&clearInterval(l)})(),l=setInterval(u,1e3),new(function(){function o(t){var e=t.main,n=t.wrap,i=t.nextBtn,r=t.prevBtn,s=t.position,a=void 0===s?0:s,l=t.slidersToShow,c=void 0===l?3:l,u=t.infinity,d=void 0===u||u,h=t.responsive,f=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.main=document.querySelector(e),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.nextBtn=document.querySelector(i),this.prevBtn=document.querySelector(r),this.slidersToShow=c,this.options={position:a,infinity:d,sliderWidth:parseInt(this.main.clientWidth/this.slidersToShow),maxPosition:this.slides.length-this.slidersToShow},this.responsive=f}var i,r;return i=o,(r=[{key:"init",value:function(){this.addClass(),this.addStyle(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addClass",value:function(){var e,n=function(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=t(e))){o&&(e=o);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var t=o.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==o.return||o.return()}finally{if(l)throw s}}}}(this.slides);try{for(n.s();!(e=n.n()).done;)e.value.classList.add("vi__slider-item")}catch(t){n.e(t)}finally{n.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("slidersCorusel-style");t||((t=document.createElement("style")).id="slidersCorusel-style"),t.textContent="\n        .vi__slider-item {         \n          min-width: ".concat(this.options.sliderWidth,"px;\n        }\n      "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prevBtn.addEventListener("click",this.prevSlider.bind(this)),this.nextBtn.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.sliderWidth,"px)"))}},{key:"responseInit",value:function(){var n,o=this,i=this.slidersToShow,r=this.responsive.map((function(t){return t.breakpoint})),s=Math.max.apply(Math,function(t){if(Array.isArray(t))return e(t)}(n=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){o.options.sliderWidth=parseInt(o.main.clientWidth/o.slidersToShow),o.addStyle()},l=function(){var t=document.documentElement.clientWidth;if(t<s)for(var e=0;e<r.length;e++)t<r[e]&&(o.slidersToShow=o.responsive[e].slidersToShow,a());else o.slidersToShow=i,a()};l(),window.addEventListener("resize",l)}}])&&n(i.prototype,r),o}())({main:".benefits-inner",wrap:".benefits-wrap",nextBtn:".benefits__arrow--right",prevBtn:".benefits__arrow--left",slidersToShow:3,infinity:!0,responsive:[{breakpoint:1024,slidersToShow:3},{breakpoint:576,slidersToShow:1}]}).init()})();