var swiper = new Swiper(".sw-1", {
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 3,
    },
    1220: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});

var swiper1 = new Swiper(".sw-2", {
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 3,
    },
    1220: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});
