'use strict';

$('.js-menu-open').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger-close');
  $('.header').toggleClass('header-open');
   if(document.body.clientWidth<500)  {
    $('body').toggleClass('menu-opened');
   }
});


