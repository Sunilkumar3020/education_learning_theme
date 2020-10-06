$(window).load(function () {
  $(".flexslider").flexslider({
    directionNav: false,
  });
});

jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

let socialNav = document.querySelector(".social-nav");
let navToggier = document.querySelector(".nav-toggler");

navToggier.addEventListener("click", function () {
  socialNav.classList.toggle("active");
});

jQuery(function ($) {
  var $socialNav = $(".social-nav");
  var $win = $(window);
  var winH = 550; // Get the window height.

  $win.on("scroll", function () {
    if ($(this).scrollTop() > winH) {
      $socialNav.addClass("enable");
    } else {
      $socialNav.removeClass("enable");
    }
  });
});

// Navbar fixed top

// jquery ready start
// $(document).ready(function () {

//   if ($(window).width() > 992) {
//     var navbar_height = $(".navbar").outerHeight();

//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 300) {
//         $(".navbar-wrap").css("height", navbar_height + "px");
//         $("#navbar_top").addClass("fixed-top");
//         $(".navbar_top_logo .navbar-brand").removeClass("navbar-brand_hide");
//         $(".navbar_top_logo .navbar-brand").addClass("navbar-brand_show");
//       } else {
//         $("#navbar_top").removeClass("fixed-top");
//         $(".navbar_top_logo .navbar-brand").addClass("navbar-brand_hide");
//         $(".navbar_top_logo .navbar-brand").removeClass("navbar-brand_show");

//         $(".navbar-wrap").css("height", "auto");
//       }
//     });
//   }
// });

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // items: 3,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 14000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
