const index2 = document.getElementById('hi');

const { nav } = document;



$(document).ready(function() {
    $('.menu-toggle').click(function() {
        // $('nav').fadeToggle();
        $('nav').toggleClass('active')
    });
    $('hide').click(function() {
        // $('nav').fadeToggle();
        // $('nav').toggleClass('active')
    });
});