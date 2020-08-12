$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const fullname = $("#name").val();
    const fulladdress = $("#address").val();
    const fullphone = $("#phone").val();
    $("ul#contacts").prepend("<li id='contact-showing'>" + fullname + "</li><p class='hidden'>" + fulladdress + fullphone + "</p>");
  });
  
  $("ul#contacts").children("li").first().click(function() {
    $("#contact-showing").toggle();
    $("#contact-hidden").toggle();
  });
});