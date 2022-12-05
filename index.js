document.addEventListener("DOMContentLoaded", function () {
console.log("Hello world");
var hiddenButton = document.querySelector(".secret");
var hello = document.querySelector(".hello");
var login = document.querySelector(".loginEntry");
const loginButton = document.querySelector("#loginButton");

hiddenButton.addEventListener("click",function() {
    hello.style.display = "none";
    login.style.display = "block";
})

loginButton.addEventListener("click",function(e){
    const passwordBox = document.getElementById("inputPsw");
    var password = passwordBox.value;
    console.log(password);
    e.preventDefault();
    if(password == "12"){
        console.log("Zhi Yi");
        // window.location.href = "http://caiwen12.com/homepage.html";
        window.location.href = "http://127.0.0.1:5500/home.html";
    }

})

})

