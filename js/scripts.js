$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const fullname = $("#name").val();
    const fulladdress = $("#address").val();
    const fullphone = $("#phone").val();
    $("ul#contacts").prepend("<li class='clickable'>Why hello there!</li>");
  });
  
  $(".clickable").click(function() {
    $("#contact-showing").toggle();
    $("#contact-hidden").toggle();
  });
});