function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        speed: 1000,
        autoplay: {
          delay: 3000,
        },
        loop: true,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                // slidesPerView: 1.1,
                spaceBetween: 10,
            },
            992: {
                spaceBetween: 20,
                centeredSlides: true,
            },
        }
    })
}

function categorySlider() {
    var swiper = new Swiper('.category .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 30,
    })
}

function newSlider() {
    var swiper = new Swiper('.new .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 14,
        navigation: {
            nextEl: '.new .swiper-button-next',
            prevEl: '.new .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
            },
            992: {
                slidesPerView: 4,
            },
            1150: {
                slidesPerView: 5,
            },
        }
    })
}

mainSlider()
categorySlider()
newSlider()
