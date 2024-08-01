"use strict";

$(document).ready(function () {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        closeExisting: true,
    });

    myLazyload();

    // slider-mainpage
    const photosSlides = new Swiper(".intro__slideshow", {
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        loop: true, // безконечный слайдер
        autoplay: {
            delay: 3000,
            disableOnInteraction: true, // отключить после ручной прокрутки
            pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        // centeredSlides: true,

        // Responsive breakpoints
        // breakpoints: {
        //     // when window width is >= 360px
        //     360: {
        //         navigation: false,
        //     },
        //     // when window width is >= 640px
        //     768: {

        //     },
        // },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next-slide",
            prevEl: ".swiper-button-prev-slide",
        },

        // And if we need scrollbar
        // scrollbar: {
        // 	el: '.swiper-scrollbar',
        // },
    });

    $(".burger_js").on("click", () => {
        $(".burger").removeClass("active");
        $(".burger-close").addClass("active");
        $(".menu_js").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $(".backdrop").toggle();
    });

    $(".burger-close_js").on("click", () => {
        $(".burger").addClass("active");
        $(".burger-close").removeClass("active");
        $(".menu_js").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $(".backdrop").toggle();
    });

    $(".backdrop").on("click", function () {
        $(".burger-close").removeClass("active");
        $(".burger").addClass("active");
        $(".menu_js").removeClass("active");
        $("body").removeClass("no-scroll");
        $(".backdrop").hide();
    });

    // Fixed Nav
    $(window).on("scroll", function () {
        // up-btn
        if ($(this).scrollTop() > 400) {
            // $('.up').fadeIn();
            $(".up").addClass("active");
        } else {
            // $('.up').fadeOut(400);
            $(".up").removeClass("active");
        }
        let scrollTop = 64;
        if ($(window).width() <= 991) {
            scrollTop = 0;
        }
        if ($(this).scrollTop() > scrollTop) {
            $(".header__nav").addClass("fixed");
        } else {
            $(".header__nav").removeClass("fixed");
        }
    });

    // up btn
    $(".up").click(function () {
        $("body, html").animate(
            {
                scrollTop: 0,
            },
            800
        );
        return false;
    });
    ///////////////////////////////////////////////////////
    // validation
    ///////////////////////////////////////////////////////
    var setDefault = function (elem) {
        elem.parent().removeClass("has-error");
        elem.parent().removeClass("has-success");
        //elem.next().next().removeClass('glyphicon-remove');
        //elem.next().next().removeClass('glyphicon-ok');
    };
    var setOk = function (elem) {
        elem.parent().removeClass("has-error");
        elem.parent().addClass("has-success");
        //elem.next().next().removeClass('glyphicon-remove');
        //elem.next().next().addClass('glyphicon-ok');
    };
    var setError = function (elem) {
        elem.parent().removeClass("has-success");
        elem.parent().addClass("has-error");
        //elem.next().next().removeClass('glyphicon-ok');
        //elem.next().next().addClass('glyphicon-remove');
    };
    var checkMob = function (elem) {
        var value = elem.val();
        //console.log("Value = (" + value + ")");
        if (value === "") {
            setError(elem);
            //console.log("Error: value = ''");
            return false;
        } else if (!/^\+38\(([0-9]{3})\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(value)) {
            setError(elem);
            //console.log("Error: incorrect format phone ''");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };
    var checkEmail = function (elem) {
        var value = elem.val();
        //console.log("Value = (" + value + ")");
        if (value === "") {
            setError(elem);
            //console.log("Error: value = ''");
            return false;
        } else if (
            !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
                value
            )
        ) {
            setError(elem);
            // console.log("Error: incorrect format email ''");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };
    var checkPswd = function (pasw, pasw2) {
        var pasw_value = pasw.val();
        var pasw2_value = pasw2.val();
        //console.log("Value = (" + value + ")");
        if (pasw_value !== pasw2_value) {
            setError(pasw2);
            // console.log("Error: pasw_value != pasw2_value");
            alert("Пароли не совпадают");
            return false;
        } else {
            setOk(pasw2);
            //console.log("Ok");
            return true;
        }
    };
    var checkPswdPattern = function (elem) {
        var value = elem.val();

        let regexp = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}/g; // (regexp только что создан: regexp.lastIndex=0)
        if (!regexp.test(value)) {
            setError(elem);
            //console.log("Error: value = ''");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };

    var checkText = function (elem) {
        var value = elem.val();
        //console.log("Value = (" + value + ")");
        if (value === "") {
            setError(elem);
            // console.log("Error: value = ''");
            return false;
        } else if (value.length < 3) {
            setError(elem);
            // console.log("Error: length less 3 symbols");
            return false;
        } else {
            setOk(elem);
            //console.log("Ok");
            return true;
        }
    };
    // $(".phone").mask("+38(999) 999-99-99", {
    //     completed: function () {
    //         checkMob(this);
    //         //console.log('checker after complete');
    //     },
    // });
    $("body").on("focus", ".phone", function (event) {
        $(".phone").mask("+38(999) 999-99-99", {
            completed: function () {
                checkMob(this);
                //console.log('checker after complete');
            },
        });
        $(".email").on("blur", function () {
            checkEmail($(this));
        });
    });
    $(".email").on("blur", function () {
        checkEmail($(this));
    });

    let state = true;

    // text-block open
    $(".text__open-btn").on("click", function () {
        const target = $(this).attr("data-target");
        // console.log($(target));
        // console.log(state);
        let btn = $(this);
        let btnSpan = $(this).find("span");
        let textBlockTitleHeight = $(".textblock__title").height();
        let textBlockContentHeight = $(".textblock__content").height();

        if (state && !$(this).hasClass("open")) {
            // разворачиваем текстовый блок
            $(target).addClass("open");
            $(target).animate(
                {
                    maxHeight: textBlockTitleHeight + textBlockContentHeight + 100, // ширина элемента
                },
                {
                    duration: 300, // продолжительность анимации
                    easing: "linear", // скорость анимации
                    complete: function () {
                        // callback
                        // alert("текстовый блок развернут");
                        btnSpan.text("Свернуть");
                        btn.addClass("active");
                    },
                }
            );
        } else {
            // сворачиваем текстовый блок
            $(target).animate(
                {
                    maxHeight: 500, // ширина элемента
                },
                {
                    duration: 300, // продолжительность анимации
                    easing: "linear", // скорость анимации
                    complete: function () {
                        // callback
                        // alert("текстовый блок свернут");
                        btnSpan.text("Читать далее");
                        btn.removeClass("active");
                        $(target).removeClass("open");
                    },
                }
            );
        }
        state = !state;
    });

    $(".question_js").on("click", function () {
        let _this = $(this),
            item = _this.closest(".faq__item"),
            container = _this.closest(".faq__list"),
            items = container.find(".faq__item"),
            content = item.find(".faq__answer"),
            otherContents = container.find(".faq__answer"),
            duration = 300;

        if (!item.hasClass("active")) {
            items.removeClass("active");
            item.addClass("active");
            otherContents.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
        } else {
            content.stop(true, true).slideUp(duration);
            item.removeClass("active");
        }
    });
});

function myLazyload() {
    lozad("img.lazyload").observe();
}
