"use strict";
//========================= preloder =========================
$(window).on("load", function () {
  $("#status").fadeOut(1000);
  $("#preloder").delay(1100).fadeOut(1000);

  //========================= Isotope =========================
  // init Isotope
  let $grid = $(".grid").isotope();
  // filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  //========================= AOS =========================
  AOS.init();
});

//========================= toggle navigation button =========================
const openNav = () =>
  (document.getElementById("overlayArea").style.width = "100%");

const closeNav = () =>
  (document.getElementById("overlayArea").style.width = "0%");

document.querySelector(".toggle-open").addEventListener("click", openNav);
document.querySelector(".toggle-close").addEventListener("click", closeNav);

//========================= owncarousel =========================
// initial setup
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: true,
      },
    },
  });
});

//========================= autotyping =========================
document.addEventListener("DOMContentLoaded", function () {
  // for hero typing
  const office = ["office-men"];
  const office_typing = new AutoTyping("#typing_office", office, {
    typeSpeed: 50,
    deleteSpeed: 100,
  });
  const boy = ["Boys"];
  const boy_typing = new AutoTyping("#typing_boy", boy, {
    typeSpeed: 50,
    deleteSpeed: 100,
  });
  const kid = ["Kids"];
  const kid_typing = new AutoTyping("#typing_kid", kid, {
    typeSpeed: 50,
    deleteSpeed: 100,
  });
  const medium = ["Medium-Age"];
  const medium_typing = new AutoTyping("#typing_medium", medium, {
    typeSpeed: 50,
    deleteSpeed: 100,
  });
  office_typing.start();
  boy_typing.start();
  kid_typing.start();
  medium_typing.start();
  // for form effect
  const message = ["What's in your mind,let we know"];
  const message_typing = new AutoTyping("#message_typing", message, {
    typeSpeed: 50,
    deleteSpeed: 100,
  });
  message_typing.start();
});
