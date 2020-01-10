'use strict';

$('.js-menu-open').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger-close');
  $('.header').toggleClass('header-open');
   if(document.body.clientWidth<500)  {
    $('body').toggleClass('menu-opened');
   }
 
});
$(document).mouseup(function (e) {
  if($('.header').has(e.target).length === 0) {
    $(".header").removeClass('header-open')
    $('.js-menu-open').removeClass('burger-close')
  }
});

