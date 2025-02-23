
let userMinutes=+prompt('لطفا عددی را به عندان دقیقه وارد کنید');
let userSeconds=+prompt('لطفا عددی را به عندان ثانیه وارد کنید');

let timer=setInterval(function(){

    if(userSeconds===-1){
        userSeconds=59;
        userMinutes--
    }
    if(userMinutes===0 && userSeconds===0){
        console.log(userMinutes+" "+":"+" "+userSeconds)
        clearInterval(timer);
        alert('timeOver')
    }
    console.log(userMinutes+" "+":"+" "+userSeconds)
    userSeconds--
},1000)