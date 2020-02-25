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

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";

    }
  });
}





$(document).ready(function () {
  $('#drawer-toggle').click(function () {
    $('#nav-icon1').toggleClass('open');
  });
});


$(document).ready(function () {
  $('#drawer-togglem').click(function () {
    $('#nav-icon1m').toggleClass('open');
  });
});


var dropdown1 = document.getElementsByClassName("dropdown-btn-m");
var i;

for (i = 0; i < dropdown1.length; i++) {
  dropdown1[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


$(".rotate").click(function () {
  $(this).toggleClass("down");
})

$(document).ready(function () {
  $('.dropdown-btn').click(function () {
    $('.dropdown-container').toggleClass('up');
  });
});

$(document).ready(function () {
  $('#drawer-toggle').click(function () {
    $('.blur').toggleClass('blurry');
  });
});

$(document).ready(function () {
  $('#drawer-togglem').click(function () {
    $('.blur').toggleClass('blurry');
  });
});


$(document).ready(function () {
  $('.dropdown-btn-m').click(function () {
    $('.dropdown-container').toggleClass('up');
  });
});

$(document).ready(function () {
  $('.dropdown-btn').click(function () {
    $('.roter').toggleClass('ned');
  });
});

$(document).ready(function () {
  $('.dropdown-btn-m').click(function () {
    $('.roter').toggleClass('ned');
  });
});
