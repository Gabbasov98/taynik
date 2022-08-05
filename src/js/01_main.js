$(document).ready(function() {
    // $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });



});


if(window.innerWidth<576){
    $(".footer__title").click(function() {
        $(this).toggleClass("footer__title--active")
        $(this).siblings(".footer__links").slideToggle()
    })
}


