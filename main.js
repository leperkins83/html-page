//

var x = document.querySelectorAll("li a");
var blueButton = document.getElementById("Transmute");
blueButton.addEventListener("click", function() {
  x[0].classList.add("yellow-button");
  x[1].classList.add("yellow-button");
  x[2].classList.add("yellow-button");
  x[3].classList.add("yellow-button");
});

var form = $("#form");
var sendBtn = $("#send-btn");

form.submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: "http://fvi-grad.com:4004/email",
    method: "POST",
    data: form.serialize()
  })
  .done(function() {
    sendBtn.val("Message Sent!");
  })
  .fail(function() {
    sendBtn.val("Message Failed to Send!");
  });
});
