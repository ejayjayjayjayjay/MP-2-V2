function downloadFile() {
  var fileContent = "April Report.";
  var fileName = "AprilReport";
  var file = new Blob([fileContent], {type: "text/plain"});

  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = fileName;
  downloadLink.click();
}

function uploadProfilePic(input) {
  if (input.files && input.files[0]) {
  var reader = new FileReader();
  reader.onload = function(e) {
  document.getElementById("profile-pic").src = e.target.result;
  };
reader.readAsDataURL(input.files[0]);
}
}


function saveDetails() {
var firstName = document.getElementById("first-name").value;
var lastName = document.getElementById("last-name").value;
var address = document.getElementById("address").value;
var city = document.getElementById("city").value;
var country = document.getElementById("country").value;

localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("address", address);
localStorage.setItem("city", city);
localStorage.setItem("country", country);

displayDetails();
}

function displayDetails() {
var savedDetails = document.getElementById("saved-details");

var firstName = localStorage.getItem("firstName");
var lastName = localStorage.getItem("lastName");
var address = localStorage.getItem("address");
var city = localStorage.getItem("city");
var country = localStorage.getItem("country");

var firstNameInput = document.getElementById("first-name");
var lastNameInput = document.getElementById("last-name");
var addressInput = document.getElementById("address");
var cityInput = document.getElementById("city");
var countryInput = document.getElementById("country");

firstNameInput.placeholder = firstName || "Enter your first name";
lastNameInput.placeholder = lastName || "Enter your last name";
addressInput.placeholder = address || "Enter your address";
cityInput.placeholder = city || "Enter your city";
countryInput.placeholder = country || "Enter your country";
}

displayDetails();

var chatWindow = document.getElementById("chat-window");
var messageInput = document.getElementById("message-input");

function sendMessage() {
var message = messageInput.value;

if (message !== "") {
var messageElement = document.createElement("div");
messageElement.className = "message sent";
messageElement.textContent = message;

chatWindow.appendChild(messageElement);

messageInput.value = "";

setTimeout(sendReply, 1000);
}
}

function sendReply() {
var reply = "Thanks for your message! We'll get back to you as soon as possible.";
var replyElement = document.createElement("div");
replyElement.className = "message received";
replyElement.textContent = reply;

chatWindow.appendChild(replyElement);
}