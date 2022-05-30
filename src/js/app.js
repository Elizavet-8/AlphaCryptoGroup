document.addEventListener("DOMContentLoaded", function () {
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
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
            nextEl: ".roadmap__btn_next",
            prevEl: ".roadmap__btn_prev",
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
})

