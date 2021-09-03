const swiper = new Swiper(".wrap", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "coverflow",
  speed : 500,
  grabCursor : true,
  coverflowEffect: {
    rotate: 50,
    stretch: -200,
    depth: 400,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 50,
});

const btnStart = document.querySelector(".auto > li:first-child");
const btnPause = document.querySelector(".auto > li:last-child");
btnStart.addEventListener("click", () => {
  swiper.autoplay.start();
});
btnPause.addEventListener("click", () => {
  swiper.autoplay.stop();
});
