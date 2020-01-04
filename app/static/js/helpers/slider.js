'use strict';

$(document).ready(function() {
  $('.slider-specialist__inner').slick(
    {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
    },
    $('.slider-specialist__inner').addClass('created'),
  );

  $('#sertificat-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
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
  
      infinite: true,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
    },
    $('#diagnostic-port').addClass('created'),
  );

  $('#reason-slider').slick(
    {
      slidesToShow: 1,
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
      responsive: [{
        breakpoint: 480,
        settings: "unslick"
      }
      ]
    },
    $('.portfolio-page-slider').addClass('created'),
  );

  $('#specialist-list-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.portfolio-prev'),
      nextArrow: $('.portfolio-next'),
      responsive: [{
        breakpoint: 480,
        settings: "unslick"
      }
      ]
    },
    $('.specialist-list-slider').addClass('created'),
  );

  $('#about-page-sertificat-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    },
    $('.about-page-sertificat-slider').addClass('created'),
  );

  $('#blog-list-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [{
        breakpoint: 480,
        settings: "unslick"
      }
      ]
    },
    $('.blog-list-slider').addClass('created'),
  );

  $('#blog-single-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite:false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [{
        breakpoint: 480,
        settings: "unslick"
      }
      ]
    },
    $('.blog-single-slider').addClass('created'),
  );

  $('#reviews-list-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [{
        breakpoint: 480,
        settings: "unslick"
      }
      ]
    },
    $('.reviews-list-slider').addClass('created'),
  );

  $('#videoreviews-list-slider').slick(
    {
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.prev-video-slider'),
      nextArrow: $('.next-video-slider'),
      responsive: [{
        breakpoint: 480,
        settings: "unslick"
      }
      ]
    },
    $('.videoreviews-list-slider').addClass('created'),
  );
});
