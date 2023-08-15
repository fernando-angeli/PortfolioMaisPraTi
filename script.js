// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("scrollNavbarOn");
  } else {
    $("nav").removeClass("scrollNavbarOn");
  }
});
