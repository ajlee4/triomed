'use strict';

// MAIN PAGE  

$('#main-page').ready(function() {
  $('.bonus-btn').on('click', function(e) {
    e.preventDefault();
   $('.bonus-tooltip').addClass('visible');
   $('.bonus-btn').addClass('hidden');

  });


  $('.details-btn').on('click', function(e) {
    e.preventDefault();
   $('#about-info').addClass('hidden');
   $('#about-subinfo').addClass('visible');
   $('#card-client').hide()
   $('#about-info').removeClass('animated');


  });

  $('.back-btn').on('click', function(e) {
    e.preventDefault();
   $('#about-info').removeClass('hidden');
   $('#about-subinfo').removeClass('visible');
   $('#card-client').show()
   $('#about-info').addClass('animated');
   $('.bonus-btn').removeClass('hidden');
   $('.bonus-tooltip').removeClass('visible');

  });
  

  $('.result-btn').on('click', function(e) {
    e.preventDefault();
   $('.work-scheme').addClass('hidden');
   $('.client-advice').addClass('visible');
   $('.work-scheme').removeClass('animated');


  });
  $('.back-work-btn').on('click', function(e) {
    e.preventDefault();
   $('.work-scheme').removeClass('hidden');
   $('.client-advice').removeClass('visible');
   $('.work-scheme').addClass('animated');


  });




});


// DIAGNOSTIC PAGE

$('#diagnostic-page').ready(function() {

$('.diagnostic-detail-btn').on('click', function(e) {
  e.preventDefault();
 $('#diagnostic-details').addClass('hidden');
 $('#diagnostic-details-subinfo').addClass('visible');
 $('#diagnostic-details').removeClass('animated');

});

$('.diagnostic-details-back').on('click', function(e) {
  e.preventDefault();
 $('#diagnostic-details-subinfo').removeClass('visible');
 $('#diagnostic-details').removeClass('hidden');
 $('#diagnostic-details').addClass('animated');
});

});

//SPECIALIST PAGE





