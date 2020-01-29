$(document).ready(function () {
   $('.knop').click(function () {
    $('#header-nav__bar').addClass('open');
   });
   $('.knop').click(function () {
      $('.close').addClass('open');
   });
   $('.close').click(function () {
      $('#header-nav__bar').removeClass('open');
   });
   $('.close').click(function () {
      $('.close').removeClass('open');
   });
  });