$(document).ready(() => {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
});

$(window).scroll(function () {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 800);
});

$('.btn-scroll-to-about-me').click(() => {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 1000);
});

$('.btn-scroll-to-projects').click(() => {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});