$(".phone").keypress(function (event) {
 event = event || window.event;
 if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
  return false;
});

$('#form').on('submit', function () {
 $.ajax({
   type: "POST",
   url: "php/send.php",
   data: $("#form").serialize()
 }).done(function () {
   $(".success").addClass("success_visible");
   $("form").trigger("reset");
 });
 return false;
});