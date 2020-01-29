$(document).ready(function () {
    $('.knopAbout').click(function () {
    $('.headerAbout-nav__bar').addClass('open');
   });
   $('.knopAbout').click(function () {
      $('.closeAbout').addClass('open');
   });
   $('.closeAbout').click(function () {
      $('.headerAbout-nav__bar').removeClass('open');
   });
   $('.closeAbout').click(function () {
      $('.close').removeClass('open');
   });
     $('.success__close').click(function () {
        $('.success').removeClass('success_visible');
     });
     $('.success__close').click(function () {
        $('.success').removeClass('modal_visible');
     });
  });