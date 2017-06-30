$(document).ready(() => {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
});

$(window).scroll(function () {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 700);
    $("nav").css("background-color", `rgba(255, 255, 255, ${($(window).scrollTop() / 300) - 1})`);

    let red = Math.max(255 - $(window).scrollTop() / 2, 33);
    let green = Math.max(255 - $(window).scrollTop() / 5, 150);
    let blue = Math.max(255 - $(window).scrollTop() / 10, 240);
    $(".navbar-fixed nav li .menu-btn").css("color", `rgb(${red}, ${green}, ${blue})`);
});

$('.btn-scroll-about-me').click(() => {
    $('html, body').animate({
        scrollTop: $("#about-me ").offset().top
    }, 1000);
});

$('.btn-scroll-projects').click(() => {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});