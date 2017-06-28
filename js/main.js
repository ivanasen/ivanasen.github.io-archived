$(document).ready(() => {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
});

$(window).scroll(function () {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 700);
});

$('.btn-scroll-down').click(() => {
    $('html, body').animate({
        scrollTop: $("#about-me ").offset().top
    }, 1000);
});

$('.btn-scroll-to-projects').click(() => {
    $('html, body').animate({
        scrollBottom: $(".top").offset().top
    }, 1000);
});