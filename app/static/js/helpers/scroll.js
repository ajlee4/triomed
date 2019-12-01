'use strict';

$(function() {
  var footer = $('.footer'),
    aboutH = $('[data-section-name = "about"]').innerHeight(),
    scrollOffset = $(window).scrollTop();
    if (!aboutH)  {
        return
    }
  checkScroll(scrollOffset);
  $(window).on('scroll', function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
 
    
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= aboutH - 30) {
      footer.addClass('footer-wrap');
    } else {
      footer.removeClass('footer-wrap');
    }
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
