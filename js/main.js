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

let ctx = $('#skills-chart');
let skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Android", "HTML, CSS", "Javascript", "Node.js"],
        datasets: [{
            label: 'My Skills',
            data: [4, 2, 2, 4, 3, 2],
            backgroundColor: [
                '#0d47a1',
                '#90caf9',
                '#64b5f6',
                '#42a5f5',
                '#536dfe'
            ]
        }]
    },
    options: {
        layout: {
            padding: {
                left: 50,
                right: 50
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 5.,
                    stepSize: 1
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }
});