let username=document.getElementById("username")
let password=document.getElementById("password")
let usernameSpan=document.getElementById("username-checker")
let passwordSpan=document.getElementById("password-checker")


function usernameCheker() {
    let usernameValue=username.value;
    if(usernameValue.length>13){
        usernameSpan.innerHTML="the entered username is correct"
        usernameSpan.style.color="green"
    }else {
        usernameSpan.innerHTML="the entered username isn't correct"
        usernameSpan.style.color="red"
    }
}



function passwordCheker() {
    let passwordValue=password.value;
    if( passwordValue.length>9){
        passwordSpan.innerHTML="the entered password is correct"
        passwordSpan.style.color="green"
    }else {
        passwordSpan.innerHTML="the entered password isn't correct"
        passwordSpan.style.color="red"
    }
}