$(document).ready(function(){
    // 메인메뉴 기능
    let popup = $('.popup')
    let header = $('.header')


    $(window).scroll(function(){
        let temp = $(window).scrollTop();
        if(temp > 0){
            popup.addClass('popup-close')
            header.addClass('header-show')
        } else {
            popup.removeClass('popup-close')
            header.removeClass('header-show')
        }
    })
});



window.onload = function () {
    new Swiper('.sw-events', {
        loop:true,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination : {
			el: '.sw-events-control-main',
            type: 'fraction',
			// clickable: true,
		},
        navigation: {
            prevEl:'.sw-events-prev',
            nextEl:'.sw-events-next'
        },
    });
}


