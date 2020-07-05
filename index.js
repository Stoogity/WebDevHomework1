//Added JS to make a carousel
document.addEventListener('DOMContentLoaded', function () { 
const next = document.getElementById("next");
const prev = document.getElementById("prev")
const carousel = document.getElementById("carousel");
const slide = document.getElementById("photos");
const images = document.querySelectorAll("photos img");
const imageForSizing = document.getElementsByClassName("slider");

//Counter for carousel
let counter = 0;

const size = carousel.clientWidth;

function moveRight() {
    if (counter >= 5){
        counter === 5; 
        return counter;
    }
    counter++;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
}

function moveLeft() {
    if (counter <=0) {
        counter === 0
        return counter;
    }
    counter--;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
    
}

next.addEventListener("click", moveRight);
prev.addEventListener("click", moveLeft);

})