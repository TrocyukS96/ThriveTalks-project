$(document).ready(function() {
   $('.burger').click(function(event) {
      $('.burger, .header__novigation').toggleClass('active');
      $('body').toggleClass('lock');
   });
});