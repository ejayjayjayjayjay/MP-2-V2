var firebaseConfig = {
    apiKey: "AIzaSyBeQ3pxVIBD8DslsRqgx4mcVKpQeqllr4A",
    authDomain: "your-auth-domain",
    databaseURL: "https://website-cook-ready-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "website-cook-ready",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "842228771461",
    appId: "1:842228771461:web:e5df26451a27a4dcd597ec"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  
var allowedNames = ["Josell"];

var senderName = document.querySelector("#name-input").value;

document.querySelector("#chat-form").addEventListener("submit", function(event) {
event.preventDefault();

var messageInput = document.querySelector("#message-input");
var message = messageInput.value;
messageInput.value = "";

// add the message to the database with the sender's name
var chatRef = database.ref("chat");
chatRef.push({
message: message,
timestamp: Date.now(),
senderName: senderName
});
});

var chatRef = database.ref("chat");
chatRef.on("child_added", function(snapshot) {
var message = snapshot.val().message;
var timestamp = snapshot.val().timestamp;
var messageSenderName = snapshot.val().senderName;

// display the message and sender's name in the chat interface
var chatDisplay = document.querySelector("#chat-display");
chatDisplay.innerHTML += "<p><strong>" + messageSenderName + ":</strong> " + message + "</p>";

// update senderName if the sender's name has changed
if (allowedNames.includes(messageSenderName)) {
senderName = messageSenderName;
document.querySelector("#name-input").value = senderName;
}
});

document.querySelector("#clear-btn").addEventListener("click", function(event) {
event.preventDefault();

// remove all chat messages from the database
var chatRef = database.ref("chat");
chatRef.remove();

// clear the chat display
var chatDisplay = document.querySelector("#chat-display");
chatDisplay.innerHTML = "";
});