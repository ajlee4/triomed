"use strict";

$(document).ready(function(){
    $('.slider-specialist__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
  });