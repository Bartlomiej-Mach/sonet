let sliderCounter2 = 1;

if(window.screen.width < 743) {
    sliderCounter2 = 1;
} else {
    sliderCounter2= 2;
}

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: sliderCounter2,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
});