'use strict';

$(document).ready(function() {
  $('.slider-specialist__inner').slick(
    {
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      infinite: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    },
    $('.slider-specialist__inner').addClass('created'),
  );

  $('#sertificat-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      infinite: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    },
    $('#sertificat-slider').addClass('created'),
  );
  $('#specialist-portfolio').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,

      infinite: true,

      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
    },
    $('#specialist-portfolio').addClass('created'),
  );

  $('#diagnostic-port').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      infinite: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
    },
    $('#diagnostic-port').addClass('created'),
  );

  $('#reason-slider').slick(
    {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,

      prevArrow: $('.prev-arr'),
      nextArrow: $('.next-arr'),
    },
    $('#reason-slider').addClass('created'),
  );

  $('#portfolio-page-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.portfolio-prev'),
      nextArrow: $('.portfolio-next'),
    },
    $('.portfolio-page-slider').addClass('created'),
  );


  $('#specialist-list-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.portfolio-prev'),
      nextArrow: $('.portfolio-next'),
    },
    $('.specialist-list-slider').addClass('created'),
  );

});
