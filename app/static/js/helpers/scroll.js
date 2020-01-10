'use strict';

$(function() {
  var footer = $('.footer'),
    aboutH = $('[data-section-name = "about"]').innerHeight(),
    priceH = $('[data-section-name = "diagnostic-price"]').innerHeight(),
    nav = $('.bottom-menu'),
    scrollOffset = $(window).scrollTop();
  if (!aboutH) {
    return;
  } else {
    footerScroll(scrollOffset);
    $(window).on('scroll', function() {
      scrollOffset = $(this).scrollTop();
      footerScroll(scrollOffset, aboutH);
    });
  }

  function footerScroll(scrollOffset, sectionH) {
    if (scrollOffset >= sectionH - 30) {
      footer.addClass('footer-wrap');
    } else {
      footer.removeClass('footer-wrap');
    }
  }
});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 50) {
    $('#bottom-menu-gray').removeClass('menu-gray');
  } else {
    $('#bottom-menu-gray').addClass('menu-gray');
  }
});

if (document.body.clientWidth > 800) {
  $(function() {
    $.scrollify({
      section: '.section',
      scrollSpeed: 1000,
      updateHash: false,
      before: function(i, panels) {
        var ref = panels[i].attr('data-section-name');
        $('#menu .active').removeClass('active');
        $('#menu')
          .find('a[href="#' + ref + '"]')
          .addClass('active');

        $('.active-section').text($('nav .active').index() + 1);
      },
      afterRender: function() {},
    });

    function getScrollifySectionIndex(anchor) {
      var idpanel = false;
      jQuery('.section').each(function(i) {
        if (jQuery(this).data('section-name') == anchor.toString().replace(/#/g, '')) {
          idpanel = i;
        }
      });
      return idpanel;
    }
    $('#menu a').on('click', function(e) {
      e.preventDefault();
      $.scrollify.move(getScrollifySectionIndex($(this).attr('href')));
    });
  });
}
