const navBackgroundAnimationSpeed = 500;
const navSecondaryAnimationSpeed = 300;
const scrollOffset = window.innerHeight / 15;

let animateNavbar = (scroll) => {
    $(".top").css("opacity", 1 - scroll / navBackgroundAnimationSpeed);
    $("nav").css("cssText",
        `box-shadow: 0 4px 8px -3px rgba(0, 0, 0, ${Math.min(.06, scroll / navSecondaryAnimationSpeed )}) !important;
        background-color: rgba(255, 255, 255, ${(scroll / navSecondaryAnimationSpeed) - 1})`
    );

    const navbarButtonColors = {
        red: Math.max(255 - scroll / 2, 33),
        green: Math.max(255 - scroll / 5, 150),
        blue: Math.max(255 - scroll / 10, 240)
    };
    $(".navbar-fixed nav li .menu-btn")
        .css("color", `rgb(${navbarButtonColors.red}, ${navbarButtonColors.green}, ${navbarButtonColors.blue})`);
}

$(document).ready(() => {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
});

$(window).scroll(() => animateNavbar($(window).scrollTop()));

$('.btn-scroll-about-me').click(() => {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top - scrollOffset
    }, 1000);
});

$('.btn-scroll-projects').click(() => {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top - scrollOffset
    }, 1000);
});

$('.parallax-container').height(window.innerHeight + 'px');