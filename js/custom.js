// templatemo 467 easy profile

// PRELOADER

$(window).load(function () {
  $(".preloader").delay(1000).fadeOut("slow"); // set duration in brackets
});

// HOME BACKGROUND SLIDESHOW
$(function () {
  jQuery(document).ready(function () {
    $("body").backstretch(
      ["images/g1.jpeg", "images/g2.jpg", "images/g3.jpg"],
      { duration: 3200, fade: 1300 }
    );
  });
});
