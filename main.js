$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 225) {
        $(".scrolllogo").addClass("showscroll");
        $(".project-nav").addClass("showscroll");
        $(".justify").addClass("nav-scroll");
    } else {
        $(".scrolllogo").removeClass("showscroll");
        $(".project-nav").removeClass("showscroll");
        $(".justify").removeClass("nav-scroll");
    }
});

