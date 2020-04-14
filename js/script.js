// function submitform() {

//     document.getElementById('myform').submit();
// }

window.addEventListener("load", function() {
    document.getElementById("mailtolink").addEventListener("click", function(e) {
        e.preventDefault() // remove after testing
        let url = new URL(this.href);
        const name = document.querySelector("[name=yourName]").value.trim();
        const email = document.querySelector("[name=yourEmail]").value.trim();
        const message = document.querySelector("[name=yourMessage]").value.trim();
        url.searchParams.set("from", email);
        url.searchParams.set("subject", "Message from " + (document.title || location.hostname))
        url.searchParams.set("body", name + " said " + message)
        this.href = url;
        console.log(url)
    })
});

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