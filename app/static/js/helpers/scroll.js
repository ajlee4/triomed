'use strict';

$(function() {
  var footer = $('.footer'),
    aboutH = $('[data-section-name = "about"]').innerHeight(),
    priceH= $('[data-section-name = "diagnostic-price"]').innerHeight(),
    nav = $('.bottom-menu'),
    scrollOffset = $(window).scrollTop();
    if (!aboutH)  {
        return
    } else {
        footerScroll(scrollOffset);
        $(window).on('scroll', function() {
            scrollOffset = $(this).scrollTop();
            footerScroll(scrollOffset,aboutH);          
          });
    }
   
  


  function footerScroll(scrollOffset,sectionH) {
    if (scrollOffset >= sectionH - 30) {
      footer.addClass('footer-wrap');
    } else {
      footer.removeClass('footer-wrap');
    }
  }
  
});


  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 50) {
  $('.bottom-menu').removeClass('menu-gray');
       
    } else {
      $('.bottom-menu').addClass('menu-gray');
    }
  });

$(function() {
  $.scrollify({
    section: '.section',
    scrollSpeed: 1000,
    before: function(i, panels) {
      var ref = panels[i].attr('data-section-name');  
      $('#menu .active').removeClass('active');
      $('#menu')
        .find('a[href="#' + ref + '"]')
        .addClass('active');
     
      $('.active-section').text($('nav .active').index() + 1);
    },
    afterRender: function() {
        $('#menu a').on('click', $.scrollify.move);
    }
  });
});
