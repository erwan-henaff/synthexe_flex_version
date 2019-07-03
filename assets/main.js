// from : https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js
// rewritten and slightly changed.

var animateonscroll = function () {
    var verticallength;
    var rowtoanimate;

    function init () {
        rowtoanimate = document.querySelectorAll(".notinview");
        verticallength = window.innerHeight;
        eventhandler();
        checkposition();
    }
    function eventhandler () {
        window.addEventListener('scroll', checkposition);
        window.addEventListener('resize', init);
    }
    function checkposition () {
        for (let index = 0; index < rowtoanimate.length; index++) {
            var actualposition = rowtoanimate[index].getBoundingClientRect().top;
            if (actualposition - verticallength <= 0) {
                rowtoanimate[index].className = rowtoanimate[index].className.replace('notinview','rotatez');
            } 
            else {
                rowtoanimate[index].className = rowtoanimate[index].className.replace('rotatez','notinview');
            }
        }
    }
    return {
        init : init
    };    
};
animateonscroll().init();

// part about the carousel with vanilla js 
// from https://www.youtube.com/watch?v=KcdBOoK3Pfw

const carouselbox = document.querySelector('.carouselbox');
const carouselimg = document.querySelectorAll('.imgcarousel');
const carouselcont = document.querySelector('.carouselcont');

const leftBtn = document.querySelector('#leftbtn');
const rightBtn = document.querySelector('#rightbtn');
var divimgcarousel = document.querySelectorAll('.divimgcarousel');

let counter = 0;
const size = carouselcont.clientWidth;
carouselbox.style.width = size * divimgcarousel.length + "px";
for (let index = 0; index < divimgcarousel.length; index++) {
    divimgcarousel[index].style.width = size + "px";
}

// add event resize for responsiveness

window.addEventListener('resize', init2);

function init2 () {
    const size = carouselcont.clientWidth;
    carouselbox.style.width = size * divimgcarousel.length + "px";
    for (let index = 0; index < divimgcarousel.length; index++) {
    divimgcarousel[index].style.width = size + "px";
    }
}


// button addevent

rightBtn.addEventListener('click', ()=>{
    if(counter<8) {
        carouselbox.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselbox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

leftBtn.addEventListener('click', ()=>{
    if(counter>0) {
        carouselbox.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselbox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
