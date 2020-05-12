/*$(document).ready(function() {
    $('#body').show();
    $('#loading').hide();
});*/
$('#body').css('opacity', 0);
$(window).load(function() {
  $('#body').css('opacity', 1);
});
