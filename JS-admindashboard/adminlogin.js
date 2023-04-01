const adminUsername = "admin1";
const adminPassword = "1234";
const adminUsername2 = "admin2";
const adminPassword2 = "1234";

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const enteredUsername = document.getElementById("admin-username").value;
  const enteredPassword = document.getElementById("admin-password").value;

  if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
    window.location.href = "./admindashboardmark.html";
    } else
   if (enteredUsername === adminUsername2 && enteredPassword === adminPassword2) {
    window.location.href = "./admindashboardjosell.html";
  } else {
    alert("Invalid username or password");
  }}
);