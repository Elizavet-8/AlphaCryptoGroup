/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  //проверки
  var MOBILE_PLAYLISTS = {
    low: '/dist/video/mobile/low/video.m3u8',
    medium: '/dist/video/mobile/medium/video.m3u8',
    high: '/dist/video/mobile/high/video.m3u8'
  };
  var DESKTOP_PLAYLISTS = {
    low: '/dist/video/desktop/low/video.m3u8',
    medium: '/dist/video/desktop/medium/video.m3u8',
    high: '/dist/video/desktop/high/video.m3u8'
  };
  var playlist = DESKTOP_PLAYLISTS;

  if ($(window).width() < 998) {
    playlist = MOBILE_PLAYLISTS;
  } //скорость интернета


  var arrTimes = [];
  var i = 0; // start

  var timesToTest = 10;
  var testImage = "/dist/images/icons/crystal.svg";
  var dummyImage = new Image();
  var isConnectedFast;
  var speed;

  function testLatency(cb) {
    var tStart = new Date().getTime();

    if (i < timesToTest - 1) {
      dummyImage.src = testImage + '?t=' + tStart;

      dummyImage.onload = function () {
        var tEnd = new Date().getTime();
        var tTimeTook = tEnd - tStart;
        arrTimes[i] = tTimeTook;
        testLatency(cb);
        i++;
      };
    } else {
      var sum = arrTimes.reduce(function (a, b) {
        return a + b;
      });
      speed = sum / arrTimes.length;
      cb(speed);
    }
  }

  testLatency(function (speed) {
    var m3u8;

    if (speed < 120) {
      m3u8 = playlist.high;
    } else if (speed <= 1500 && speed >= 120) {
      m3u8 = playlist.medium;
    } else {
      m3u8 = playlist.low;
    }

    var video = document.getElementById('video');

    if (Hls.isSupported()) {
      var hls = new Hls({
        debug: true
      });
      hls.loadSource(m3u8);
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        video.muted = true;
        video.play();
        var preloader = document.getElementById('preloader');
        preloader.style.display = "none";
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        console.log('end!'); // let media = document.getElementById('media');
        // media.style.display = "none";
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = m3u8;
      video.addEventListener('canplay', function () {
        video.play();
      });
    } // console.log("Time: " + speed + "ms" + " " + m3u8)

  }); //бургер меню

  $('.header__burger, .overlay').click(function () {
    $('.header').toggleClass('show');
    $('body').toggleClass('overflow');
  });
  $("#nav").on("click", "a", function (event) {
    $('.header').removeClass('show');
    $('body').removeClass('overflow');
  }); //плавный скролл

  $("body").on("click", "a[href^=\"#\"]", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  }); //слайдеры

  var roadmap__slider = new Swiper(".roadmap__slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    navigation: {
      nextEl: ".roadmap__btn_next",
      prevEl: ".roadmap__btn_prev"
    },
    breakpoints: {
      581: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      998: {
        slidesPerView: 4
      }
    }
  });
  var advantages__slider = new Swiper(".advantages__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".advantages__btn_next",
      prevEl: ".advantages__btn_prev"
    },
    breakpoints: {
      581: {
        slidesPerView: 2
      },
      998: {
        slidesPerView: 4
      }
    }
  }); //одинаковая высота у блоков

  var mh = 0;
  $(".roadmap__card").each(function () {
    var h_block = parseInt($(this).height());

    if (h_block > mh) {
      mh = h_block;
    }

    ;
  });
  $(".roadmap__card").height(mh);
  $(".advantages__card").each(function () {
    var h_block = parseInt($(this).height());

    if (h_block > mh) {
      mh = h_block;
    }

    ;
  });
  $(".advantages__card").height(mh); //анимация

  var animItems = document.querySelectorAll('.anim');

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var index = 0; index < animItems.length; index++) {
        var animItem = animItems[index];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('active');
        } else {
          animItem.classList.remove('active');
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
  }

  var animOne = document.querySelectorAll('.anim-one');

  if (animOne.length > 0) {
    var _animOnScroll = function _animOnScroll() {
      for (var index = 0; index < animOne.length; index++) {
        var animItem = animOne[index];
        var animItemHeight = animItem.offsetHeight;

        var animItemOffset = _offset(animItem).top;

        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('active');
        }
      }
    };

    var _offset = function _offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', _animOnScroll);
  } //анимация текста


  window.onload = function () {
    animateSequence();
  };

  function animateSequence() {
    var a = document.getElementsByClassName('sequence');

    for (var i = 0; i < a.length; i++) {
      var $this = a[i];
      var letter = $this.innerHTML;
      letter = letter.trim();
      var str = '';
      var delay = 10;

      for (l = 0; l < letter.length; l++) {
        if (letter[l] != ' ') {
          str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
          delay += 30;
        } else str += letter[l];
      }

      $this.innerHTML = str;
    }
  } //анимация карточки


  $.fn.isOnScreen = function () {
    var element = this.get(0);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  };

  $('.img-wrapper,.img').each(function () {
    $(this).attr('data-offset', $(this).offset().top);
  });
  $(window).scroll(function () {
    $('.img-wrapper,.img').each(function (i) {
      var $obj = $(this);
      var $window = $(window);

      if ($obj.isOnScreen()) {
        var scroll = $window.scrollTop();
        var winHeight = $window.height();
        var offsetTop = Number($obj.attr('data-offset'));
        var lag = $obj.data('lag');
        var max = $obj.data('max');
        var pos = offsetTop - (offsetTop - scroll * lag);
        pos = Math.round(pos);

        if (i == 0) {
          console.log(pos, offsetTop, scroll, winHeight);
        }

        var pos = (scroll + winHeight - offsetTop) * lag;
        pos = pos > max ? max : pos;
        $obj.css({
          'transform': 'translate3d(0,' + pos + 'px,0)'
        });
      }
    });
  }); //паралакс

  var parallaxEls = document.querySelectorAll("[data-speed]");
  window.addEventListener("scroll", scrollHandler);

  function scrollHandler() {
    var _iterator = _createForOfIteratorHelper(parallaxEls),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var parallaxEl = _step.value;
        var direction = parallaxEl.dataset.direction == "up" ? "-" : "";
        var transformY = this.pageYOffset * parallaxEl.dataset.speed;

        if (parallaxEl.classList.contains("banner-title")) {
          parallaxEl.style.transform = "translate3d(0,".concat(direction).concat(transformY, "px,0)");
        } else if (parallaxEl.classList.contains("banner-subtitle")) {
          parallaxEl.style.transform = "translate3d(0,".concat(direction).concat(transformY, "px,0)");
        } else {
          parallaxEl.style.transform = "translate3d(0,".concat(direction).concat(transformY, "px,0)");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  $(window).bind('scroll', function (e) {
    parallaxScroll();
  });

  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top', 800 - scrolled * .25 + 'px');
    $('#parallax-bg2').css('top', 1580 - scrolled * .5 + 'px');
    $('#parallax-bg3').css('top', 1255 - scrolled * .35 + 'px');
  }
}); //карточка

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgazewallet"] = self["webpackChunkgazewallet"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;