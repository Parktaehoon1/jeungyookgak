


$(document).ready(function () {
    // 메인메뉴 기능
    let popup = $('.popup')
    let header = $('.header')


    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 0) {
            popup.addClass('popup-close')
            header.addClass('header-show')
        } else {
            popup.removeClass('popup-close')
            header.removeClass('header-show')
        }
    })
    $(document).ready(function () {
        // 팝업닫기
        let pop = $('.popup');
        let pop_close = $('.popup-close-btn');
        pop_close.click(function (event) {
            // a 태그의 href 로 이동하는 기능 막기
            event.preventDefault();

            pop.hide();
        });
    });

    let header_right_logo = $('.header-right-logor')
    let mb_wrap_close = $('.mb-wrap-top-icon2');

    header_right_logo.click(onClickNavbar);
    mb_wrap_close.click(onClickNavbar);

    function onClickNavbar(event) {
        event.preventDefault();
        let mb_wrap = $('.mb-wrap')

        mb_wrap.removeClass('mb-wrap-close')
        mb_wrap.toggleClass('mb-wrap-open')
    }
});



window.onload = function () {
    new Swiper('.sw-events', {
        loop: true,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.sw-events-control-main',
            type: 'fraction',
            // clickable: true,
        },
        navigation: {
            prevEl: '.sw-events-prev',
            nextEl: '.sw-events-next'
        },
    });
}