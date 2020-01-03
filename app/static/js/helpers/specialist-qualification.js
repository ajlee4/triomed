$('#specialist-page').ready(function() {
  let visibleDiv = 0;
  function showSertificat() {
    $('.specialist-qualification').hide();
    $('.specialist-qualification:eq(' + visibleDiv + ')').show();
  }
  showSertificat();
  $('#specialist-qualification-more').on('click', function() {
    if (visibleDiv == $('.specialist-qualification').length - 1) {
      visibleDiv = 0;
    } else {
   
      visibleDiv++;
    }
    showSertificat();
  });
});
