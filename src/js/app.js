document.addEventListener("DOMContentLoaded", function () {


    //карточка
    // const knowledgeCardPosition = document.getElementsByClassName("offers-knowledge__card_big")[0].getBoundingClientRect();
    // const marketCardPosition = document.getElementsByClassName("offers-market__card_big")[0].getBoundingClientRect();
    // let centerCards = ((marketCardPosition.y - knowledgeCardPosition.y) / 2) + knowledgeCardPosition.y + knowledgeCardPosition.height;
    // let centerCard = (marketCardPosition.y - knowledgeCardPosition.y) / 2;
    // console.log(window.scrollY)
    // console.log(centerCard)
    //
    // if (window.scrollY > centerCard) {
    //     console.log("1")
    // } else {
    //     console.log("0")
    // }
    gsap.to(".offers-knowledge__card_big_js", {
        scrollTrigger: {
            trigger: ".offers__block",
            start: "top top",
            // toggleClass: "active",
            toggleClass: {targets: ".offers__container_js", className: "offers__container_active"},
            scrub: true,
            pin: ".pin",
            end: "+=500"
        },
        ease: "none",
        duration: 2,
        // yPercent: 185,
        yPercent: 200,
    })

    gsap.to(".offers-market__card_big_js", {
        scrollTrigger: {
            trigger: ".offers__block",
            start: "top top",
            scrub: true,
            pin: ".pin",
            end: "+=500"
        },
        ease: "none",
        duration: 1,
        // yPercent: 185,
        yPercent: 188,
    })

    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".trigger",
    //         start: "center bottom",
    //         // end: "center top",
    //         toggleClass: "active",
    //         scrub: true,
    //         // markers: true,
    //         pin: ".pin",
    //         end: "+=500"
    //     }
    // });
    //
    // tl.to(".box", {yPercent: 100, duration: 3})


    //видео - старт
    //проверки на скорость интернета и размер экрана
    const MOBILE_PLAYLISTS = {
        low: '/dist/video/mobile/low/video.m3u8',
        medium: '/dist/video/mobile/medium/video.m3u8',
        high: '/dist/video/mobile/high/video.m3u8',
    }

    const DESKTOP_PLAYLISTS = {
        low: '/dist/video/desktop/low/video.m3u8',
        medium: '/dist/video/desktop/medium/video.m3u8',
        high: '/dist/video/desktop/high/video.m3u8',
    }

    let playlist;
    if ($(window).width() < 999) {
        playlist = MOBILE_PLAYLISTS;
    } else {
        playlist = DESKTOP_PLAYLISTS
    }

    //скорость интернета
    var arrTimes = [];
    var i = 0; // start
    var timesToTest = 10;
    var testImage = `/dist/images/icons/crystal.svg`;
    var dummyImage = new Image();
    let speed

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

    //инициализация видео
    // testLatency(function (speed) {
    //     //проверка видео от скорости интернеты
    //     let m3u8
    //     if (speed < 120) {
    //         m3u8 = playlist.high
    //     } else if (speed <= 1500 && speed >= 120) {
    //         m3u8 = playlist.medium
    //     } else {
    //         m3u8 = playlist.low
    //     }
    //
    //
    //     var video = document.getElementById('video');
    //     if (Hls.isSupported()) {
    //         var hls = new Hls({
    //             debug: true,
    //         });
    //         hls.loadSource(m3u8);
    //         hls.attachMedia(video);
    //         // прелоудер перед загрузкой видео
    //         hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    //             video.muted = true;
    //             video.play();
    //             let preloader = document.getElementById('preloader');
    //             preloader.style.display = "none";
    //         });
    //         document.getElementById('video').addEventListener('ended', myHandler, false);
    //         //убираем видео после проигрывания
    //         function myHandler(e) {
    //             let media = document.getElementById('media');
    //             media.style.display = "none";
    //         }
    //     } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    //         video.src = m3u8;
    //         video.addEventListener('canplay', function () {
    //             video.play();
    //         });
    //     }
    // });
    //видео - конец

    //бургер меню
    $('.header__burger, .overlay').click(function () {
        $('.header').toggleClass('show');
        $('body').toggleClass('overflow');
    });
    $("#nav").on("click", "a", function (event) {
        $('.header').removeClass('show');
        $('body').removeClass('overflow');
    });

    //плавный скролл
    $("body").on("click", "a[href^=\"#\"]", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    //слайдеры
    var roadmap__slider = new Swiper(".roadmap__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        navigation: {
            nextEl: ".roadmap__btn_next",
            prevEl: ".roadmap__btn_prev",
        },
        breakpoints: {
            581: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            998: {
                slidesPerView: 4,
            },
        }
    });
    var advantages__slider = new Swiper(".advantages__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".advantages__btn_next",
            prevEl: ".advantages__btn_prev",
        },
        breakpoints: {
            581: {
                slidesPerView: 2,
            },
            998: {
                slidesPerView: 4,
            },
        }
    });

    //одинаковая высота у блоков
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
    $(".advantages__card").height(mh);

    //анимация
    const animItems = document.querySelectorAll('.anim')

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)

        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                } else {
                    animItem.classList.remove('active');
                }

            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

        }
    }

    const animOne = document.querySelectorAll('.anim-one')

    if (animOne.length > 0) {
        window.addEventListener('scroll', animOnScroll)

        function animOnScroll() {
            for (let index = 0; index < animOne.length; index++) {
                const animItem = animOne[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                }

            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

        }
    }

    //анимация текста
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
                } else
                    str += letter[l];
            }
            $this.innerHTML = str;
        }
    }

    //паралакс
    const parallaxEls = document.querySelectorAll("[data-speed]");

    window.addEventListener("scroll", scrollHandler);

    function scrollHandler() {
        for (const parallaxEl of parallaxEls) {
            const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
            const transformY = this.pageYOffset * parallaxEl.dataset.speed;
            if (parallaxEl.classList.contains("banner-title")) {
                parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
            } else if (parallaxEl.classList.contains("banner-subtitle")) {
                parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
            } else {
                parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
            }
        }
    }

    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('#parallax-bg1').css('top', (800 - (scrolled * .25)) + 'px');
        $('#parallax-bg2').css('top', (1580 - (scrolled * .5)) + 'px');
        $('#parallax-bg3').css('top', (1255 - (scrolled * .35)) + 'px');
    }


})

//карточка


