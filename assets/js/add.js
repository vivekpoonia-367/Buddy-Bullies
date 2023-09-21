let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let span1 =document.querySelector(".span1");
let span2 =document.querySelector(".span2");
let span3 =document.querySelector(".span3");


nav.addEventListener("click", function () {
    menubar.classList.toggle("right-0");
    span1.classList.toggle("span4");
    span2.classList.toggle("span5");
    span3.classList.toggle("span6");
})
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
        
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}