let username=document.getElementById('username')
let password=document.getElementById('password')

///////////////username Chaker////////////////

let spanUsername=document.getElementById('username-checker')
function countCharacterUsername(){
    let usernameValue=username.value;
    if(usernameValue.length>13) {
        spanUsername.innerHTML='the entered username is correct'
        spanUsername.style.marginTop='1px'
        spanUsername.style.color="green"



    }else{
        spanUsername.innerHTML="the entered username isn't correct"
        spanUsername.style.color="red"
        spanUsername.style.marginTop='1px'


    }


}

///////////////password Chaker////////////////

let spanPassword=document.getElementById('password-checker')
function countCharacterPassword(){
    let passwordValue=password.value;

    if( passwordValue.length>9){
        spanPassword.innerHTML='the entered password is correct'
        spanPassword.style.marginTop='1px'
        spanPassword.style.color="green"

    }else {
        spanPassword.innerHTML="the entered password isn't correct"
        spanPassword.style.color="red"
        spanPassword.style.marginTop='1px'
    }



}
