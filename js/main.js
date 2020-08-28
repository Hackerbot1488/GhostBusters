$(document).ready(function () {
  const mMenuBtn = $('.mobile-menu-button')
  const mMenu = $('.m-menu')
  mMenuBtn.on('click', function () {
    mMenu.toggleClass('m-menu_active')
    $('body').toggleClass('no-scroll')
  });
  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    },
    loop: true,
  })
})