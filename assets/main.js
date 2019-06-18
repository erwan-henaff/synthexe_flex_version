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

var imgcarousel = document.querySelectorAll('.imgcarousel');

var rightbtn = document.querySelector('#rightbtn');

rightbtn.addEventListener('click', moveImgRight);

var positotheright = imgcarousel[0].style.left;

var movingunit = window.innerWidth * 80/100;

function moveImgRight () {
    for (let index = 0; index < imgcarousel.length; index++) {
        var movetorightdist = parseInt(imgcarousel[index].style.left);
        movetorightdist = movetorightdist + movingunit; 
        imgcarousel[index].style.left = movetorightdist + "px";
    }
    
};