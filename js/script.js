$(document).ready(function () {
    	// modal 기능
	let modalWrap = $('.modal-wrap');
	let modalClose = $('.modal-close')


	modalClose.click(function(){
		modalWrap.stop().fadeOut(500)
	})
    // 메인메뉴 기능
    let popup = $('.popup')
    let header = $('.header')
    $('html').animate({
        scrollTop: 0
    }, 50);


    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 0) {
            header.addClass('header-show')
        } else {
            header.removeClass('header-show')
        }
    })
    // 팝업닫기
    let popUp = $('.pop-up');
    let popClose = $('.pop-close');
    popClose.click(function () {
        popUp.hide();
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

    // 출력 할 데이터 목록
    // let itemsData = [{
    //     link(상품링크): '링크주소',  
    //     title(상품명) : '상품타이틀',  
    //     pic(상품사진): '상품사진', 
    //     desc(상품정보 가격/그램) : '가격/그램',
    //     option(상품정보 무항상제): '무항상제 이미지'
    //     cart(장바구니): '장바구니 이미지'
    // }]



    let itemsData = [{
            link: '#',
            title: '초신선 돼지 삼겹살 구이용',
            pic: 'items1.png',
            desc: '기준가 23,400원/600g',
            option: '',
            cart: 'items-bt'
        },
        {
            link: '#',
            title: '초신선 닭볶음탕',
            pic: 'items2.png',
            desc: '기준가 6,700원/950g',
            option: '',
            cart: 'items-bt'
        },
        {
            link: '#',
            title: '초신선 등심 돈까스',
            pic: 'items3.png',
            desc: '기준가 11,800원/770g',
            option: '',
            cart: 'items-bt'
        },
        {
            link: '#',
            title: '초신선 동물복지 무항생제 유정란',
            pic: 'items4.png',
            desc: '기준가 6,900원/12구',
            option: 'items-logo',
            cart: 'items-bt'
        },
        {
            link: '#',
            title: '초신선 무항생제 우유',
            pic: 'items5.png',
            desc: '기준가 3,600원/900ml',
            option: 'items-logo',
            cart: 'items-bt'
        },
        {
            link: '#',
            title: '초신선 무항생제 이유식용 한우 우둔 다짐육',
            pic: 'items6.png',
            desc: '기준가 15,300원/180g',
            option: 'items-logo',
            cart: 'items-bt'
        }
    ];

    // 출력할 데이터 배열 안 객체로 모아두기
    console.log(itemsData)
    // 확인하기

    let depth1 = $('.depth1 > li a')
    let itemsDataTotal = itemsData.length;

    for (let i = 0; i < itemsDataTotal; i++) {
        let temp = depth1[i];
        let data = itemsData[i]

        let showHtml = `
            <div class="items-img-case">
            <a href="#" class="items-pic">
                <img src="images/${data.pic}" alt="">
            </a>
                <a href="#" class="${data.cart}"></a>
            </div>
            <h3 class="items-title">${data.title}</h3>
            <p class="items-desc">${data.desc}</p>
            <a href="#" class="${data.option}"></a>
            `;

        temp.innerHTML = showHtml;
    }




    // function showItemsInfo(_tag, _data){
    //     let who = $(_tag);
    //     console.log(who); 


    //     who.attr('href', _data.link); 
    //     // href 를 찾아서 안의 값을 _data.link값으로 바꾸자

    //     let showHtml = `
    //     <div class="items-img-case">
    //         <a href="${_data.link}" class="items-pic">
    //             <img src="images/${_data.pic}" alt="">
    //         </a>
    //         <a href="#" class="${_data.cart}"></a>
    //     </div>
    //     <h3 class="items-title">${_data.title}</h3>
    //     <p class="items-desc">${_data.desc}</p>
    //     <a href="#" class="${_data.option}"></a>
    //     `;
    //     // 화면에 표기 될 내용 


    //     who.html(showHtml);
    // };

    // showItemsInfo('#item-list-1', itemsData[0]);
    // showItemsInfo('#item-list-2', itemsData[1]);
    // showItemsInfo('#item-list-3', itemsData[2]);
    // showItemsInfo('#item-list-4', itemsData[3]);
    // showItemsInfo('#item-list-5', itemsData[4]);
    // showItemsInfo('#item-list-6', itemsData[5]);
};