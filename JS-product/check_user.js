let links = document.getElementById("log_reg");
let userDom = document.getElementById("user_info");
let username = document.getElementById("user");


let _username = localStorage.getItem("login-username");
let logout = document.getElementById("logout");

if(_username)
{
    links.style.display = "none";
    userDom.style.display = "flex";
}
logout.addEventListener('click',function(){
    localStorage.clear();
    setTimeout(function(){
        window.location = "signup.html";
    },2000);
});
