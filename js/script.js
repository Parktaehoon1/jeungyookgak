$(document).ready();

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


