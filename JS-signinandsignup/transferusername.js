function transferValue() {
    var inputVal = document.getElementById("login-username").value;
    localStorage.setItem("inputValue", inputVal)
    window.location.href = "userfinishlogin.html";
}