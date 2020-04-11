const index2 = document.getElementById('');

const { nav } = document;



$(document).ready(function() {
    $('.menu-toggle').click(function() {
        // $('nav').fadeToggle();
        $('nav').toggleClass('active')
    });
    $('#hide').click(function() {
        // $('nav').fadeToggle();
        $('nav ul li a').toggleClass('active2')
    });
});