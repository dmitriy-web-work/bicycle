$(function () {
    $('.slider_box').slick({
        autoplay: true,
        autoplaySpeed: 2000,

        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>',
    });

    $('.menu-btn').on('click', function () {
        $('.header_top-menu nav ul').slideToggle();
    });
    $('header .slider').on('click', function(){
        $('.header_top-menu nav ul').hide();
    });
});