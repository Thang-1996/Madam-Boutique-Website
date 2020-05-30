
window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    console.log(currentScrollPos);
    if (currentScrollPos < 1) {
        $(".position-menu").css({
            "position": "absolute",
            "z-index": "1000",
            "padding-top": "0",
            "padding-bottom": "0",
            "top": "20px",
            "background-color": "transparent",
            "opacity": "1"
        });
    }
    if (currentScrollPos > 1) {
        $(".position-menu").css({
            "position": "fixed",
            "z-index": "1000",
            "top": "0px",
            "background-color": "rgba(255,255,255, 1)",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "opacity": "0.9",
            "transition-duration": "0.4s",
            "transition-delay": "0.1s"
        });
    }
};
