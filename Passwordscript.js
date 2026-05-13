let User = document.getElementById("User")
let Password = document.getElementById("Password")
let Button = document.getElementById("submitbutton")

Button.onclick = function(){
    if(User.value == "Joseph" && Password.value == "J130865@"){
        window.location.href = "Mainpage.html"
    }
}