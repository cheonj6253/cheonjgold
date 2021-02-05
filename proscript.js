new Swiper('.swiper-container', {
    autoHeight : true,

    loop : true,
    pagination : { 
        el : '.swiper-pagination',
        clickable : true, 
    },
    navigation : { 
        nextEl : '.swiper-button-next', 
        prevEl : '.swiper-button-prev', 
    },
});