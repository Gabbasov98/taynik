$(".header__catalog-btn").click(function() {
    showCatalog()
})

function showCatalog() {
    $(".header__catalog-btn").addClass("header__catalog-btn--active")
    if (window.innerWidth < 992) {
        $(".header-catalog").addClass("header-catalog--active")
    } else {
        $(".header-catalog").slideDown()
    }
}

$(document).mouseup(function(e) {
    var div = $(".header-catalog");
    if (!div.is(e.target)
        &&
        div.has(e.target).length === 0) {
        div.hide()
        if ($(".header__catalog-btn").hasClass("header__catalog-btn--active")) {
            $(".header__catalog-btn").removeClass("header__catalog-btn--active")
            $(".header-catalog").removeClass("header-catalog--active")
        }
    }
});

$(".header-catalog__tab").click(function() {
    let path = $(this).attr("data-tabs-path")
    $(".header-catalog__tab").removeClass("header-catalog__tab--active")
    $(`.header-catalog__tab[data-tabs-path="${path}"]`).addClass("header-catalog__tab--active")
    $(".header-catalog__content").removeClass("header-catalog__content--active")
    $(`.header-catalog__content[data-content-path="${path}"]`).addClass("header-catalog__content--active")
    if (window.innerWidth < 780) {
        $(".header-catalog__right").show()
        $(".header-catalog__left").hide()
    }
})

$(".header-catalog__back").click(function() {
    $(".header-catalog__right").hide()
    $(".header-catalog__left").show()
})

$(".header-catalog__close").click(function() {
    $(".header__catalog-btn").removeClass("header__catalog-btn--active")
    $(".header-catalog").removeClass("header-catalog--active")
})

$(".header-catalog__title").click(function() {
    if ($(this).hasClass("header-catalog__title--active")) {
        $(".header-catalog__title").removeClass("header-catalog__title--active")
    } else {
        $(".header-catalog__title").removeClass("header-catalog__title--active")
        $(this).addClass("header-catalog__title--active")
    }

})

$(".header__burger").click(function() {
    $("body").toggleClass("fixed-body")
    $(".header").toggleClass("header--active")
})


$(document).mouseup(function(e) {
    var div = $(".nav");
    if (!div.is(e.target)
        &&
        div.has(e.target).length === 0) {
        if ($(".header").hasClass("header--active")) {
            $(".header").removeClass("header--active")
        }
    }
});
