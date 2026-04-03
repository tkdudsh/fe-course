/**
 * DOM 객체를 생성 후 swiper 실행 .
 */

// const createSwiper=()=>{
function createSwiper(){
    const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',

  loop: true,
  autoplay:{delay:2000},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); 
}

window.addEventListener('DOMContentLoaded',()=>{
    createSwiper();
})

