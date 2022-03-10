let slidesCounter = 3;

if(window.screen.width < 743) {
    slidesCounter = 1;
} else if (window.screen.width < 1100) {
    slidesCounter = 2;
} else {
    slidesCounter = 3;
}


const swiper = new Swiper(".mySwiper", {
    slidesPerView: slidesCounter,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});