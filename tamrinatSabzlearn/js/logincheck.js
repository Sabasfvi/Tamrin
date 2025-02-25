let username=document.getElementById('username')
let password=document.getElementById('password')
let modal = document.querySelector('.modal')



function loginCheck() {
    let usernameValue = username.value
    let passwordValue = password.value


    if(usernameValue.length < 12 || passwordValue.length < 8){
        modal.style.display="block"
        modal.style.display="inline"

    }else {
        modal.style.backgroundColor="blue"
        modal.innerHTML=".لاگین با موفقیت انجام شد"
        modal.style.justifyContent="center"
        modal.style.display="inline"

    }



    setInterval(function(){
        modal.style.display="none";
    },3000)
}
