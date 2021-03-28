var swiper = new Swiper(".swiper-container", {
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 3,
    },
    1220: {
      slidesPerView: 4,
    },
  },
});
