$(document).ready(function() {
 
    $('#footer-form').on('click',function(e) {
      var $form = $(this);
      e.preventDefault();
      
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize().trim(),
      })
      
      .fail(function(error) {
        console.error(error);
      });
    });
});