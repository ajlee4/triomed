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

    $('#sertificat-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    $('#specialist-portfolio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
       
        infinite: true,
      
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow')
    });

    $('#diagnostic-port').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow')
    });

    $('#reason-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      
        prevArrow: $('.prev-arr'),
        nextArrow: $('.next-arr'),
     
    })
   
  });