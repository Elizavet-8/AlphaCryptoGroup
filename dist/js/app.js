(()=>{var e,t={641:()=>{function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("DOMContentLoaded",(function(){gsap.to(".offers-knowledge__card_big_js",{scrollTrigger:{trigger:".offers__block",start:"top top",toggleClass:{targets:".offers__container_js",className:"offers__container_active"},scrub:!0,pin:".pin",end:"+=500"},ease:"none",duration:2,yPercent:200}),gsap.to(".offers-market__card_big_js",{scrollTrigger:{trigger:".offers__block",start:"top top",scrub:!0,pin:".pin",end:"+=500"},ease:"none",duration:1,yPercent:188});var t;t=$(window).width()<999?{low:"/dist/video/mobile/low/video.m3u8",medium:"/dist/video/mobile/medium/video.m3u8",high:"/dist/video/mobile/high/video.m3u8"}:{low:"/dist/video/desktop/low/video.m3u8",medium:"/dist/video/desktop/medium/video.m3u8",high:"/dist/video/desktop/high/video.m3u8"};var n,r=[],o=0,a=new Image;!function e(t){var i=(new Date).getTime();if(o<9)a.src="/dist/images/icons/crystal.svg?t="+i,a.onload=function(){var n=(new Date).getTime()-i;r[o]=n,e(t),o++};else{var l=r.reduce((function(e,t){return e+t}));n=l/r.length,t(n)}}((function(e){var n;n=e<120?t.high:e<=1500&&e>=120?t.medium:t.low;var r=document.getElementById("video");if(Hls.isSupported()){var o=new Hls({debug:!0});o.loadSource(n),o.attachMedia(r),o.on(Hls.Events.MEDIA_ATTACHED,(function(){r.muted=!0,r.play(),document.getElementById("preloader").style.display="none"})),document.getElementById("video").addEventListener("ended",(function(e){document.getElementById("media").style.display="none"}),!1)}else r.canPlayType("application/vnd.apple.mpegurl")&&(r.src=n,r.addEventListener("canplay",(function(){r.play()})))})),$(".header__burger, .overlay").click((function(){$(".header").toggleClass("show"),$("body").toggleClass("overflow")})),$("#nav").on("click","a",(function(e){$(".header").removeClass("show"),$("body").removeClass("overflow")})),$("body").on("click",'a[href^="#"]',(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},1500)}));new Swiper(".roadmap__slider",{slidesPerView:1,spaceBetween:10,autoHeight:!0,navigation:{nextEl:".roadmap__btn_next",prevEl:".roadmap__btn_prev"},breakpoints:{581:{slidesPerView:2,spaceBetween:20},998:{slidesPerView:4}}}),new Swiper(".advantages__slider",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".advantages__btn_next",prevEl:".advantages__btn_prev"},breakpoints:{581:{slidesPerView:2},998:{slidesPerView:4}}});var i=0;$(".roadmap__card").each((function(){var e=parseInt($(this).height());e>i&&(i=e)})),$(".roadmap__card").height(i),$(".advantages__card").each((function(){var e=parseInt($(this).height());e>i&&(i=e)})),$(".advantages__card").height(i);var s=document.querySelectorAll(".anim");if(s.length>0){var d=function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+n}};window.addEventListener("scroll",(function(){for(var e=0;e<s.length;e++){var t=s[e],n=t.offsetHeight,r=d(t).top,o=window.innerHeight-n/4;n>window.innerHeight&&(o=window.innerHeight-window.innerHeight/4),pageYOffset>r-o&&pageYOffset<r+n?t.classList.add("active"):t.classList.remove("active")}}))}var c=document.querySelectorAll(".anim-one");if(c.length>0){var f=function(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+n}};window.addEventListener("scroll",(function(){for(var e=0;e<c.length;e++){var t=c[e],n=t.offsetHeight,r=f(t).top,o=window.innerHeight-n/4;n>window.innerHeight&&(o=window.innerHeight-window.innerHeight/4),pageYOffset>r-o&&pageYOffset<r+n&&t.classList.add("active")}}))}window.onload=function(){!function(){for(var e=document.getElementsByClassName("sequence"),t=0;t<e.length;t++){var n=e[t],r=n.innerHTML;r=r.trim();var o="",a=10;for(l=0;l<r.length;l++)" "!=r[l]?(o+='<span style="animation-delay:'+a+"ms; -moz-animation-delay:"+a+"ms; -webkit-animation-delay:"+a+'ms; ">'+r[l]+"</span>",a+=30):o+=r[l];n.innerHTML=o}}()};var u=document.querySelectorAll("[data-speed]");window.addEventListener("scroll",(function(){var t,n=e(u);try{for(n.s();!(t=n.n()).done;){var r=t.value,o="up"==r.dataset.direction?"-":"",a=this.pageYOffset*r.dataset.speed;r.classList.contains("banner-title")||r.classList.contains("banner-subtitle"),r.style.transform="translate3d(0,".concat(o).concat(a,"px,0)")}}catch(e){n.e(e)}finally{n.f()}})),$(window).bind("scroll",(function(e){var t;t=$(window).scrollTop(),$("#parallax-bg1").css("top",800-.25*t+"px"),$("#parallax-bg2").css("top",1580-.5*t+"px"),$("#parallax-bg3").css("top",1255-.35*t+"px")}))}))},624:()=>{}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,o,a]=e[c],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={773:0,870:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,d=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(n);d<i.length;d++)a=i[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self.webpackChunkgazewallet=self.webpackChunkgazewallet||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[870],(()=>r(641)));var o=r.O(void 0,[870],(()=>r(624)));o=r.O(o)})();