let swiper = new Swiper('.swiper', {

    direction: 'vertical',
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },


})