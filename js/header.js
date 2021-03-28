$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".header-wrapper").addClass("sticky");
  } else {
    $(".header-wrapper").removeClass("sticky");
  }
});
