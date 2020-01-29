$(document).ready(function () {
 $('.button-click').click(function () {
  $('#modal').addClass('vis');
 });
 $('.modal-close').click(function () {
  $('#modal').removeClass('vis');
 });
});