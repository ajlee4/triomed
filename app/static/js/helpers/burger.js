'use strict';

$('.js-menu-open').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger-close');
  $('.header').toggleClass('header-open');
});


