from : https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js


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