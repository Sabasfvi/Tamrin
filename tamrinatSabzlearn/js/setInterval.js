let minutes=+prompt("مقداری را به دقیقه وارد کنید")
let seconds=+prompt("لطفا ثانیه مورد نظر خود را وارد کنید")

let secondTimer=setInterval(function(){
    /// 2:0 ---> 1:59
    if(minutes!==0 && seconds===0){
        console.log(minutes+":"+seconds)
        minutes--
        seconds+=59;

    } if(minutes===0 && seconds===0){

        console.log(minutes+":"+seconds)
        clearInterval(secondTimer);
        alert("زمان شما به پایان رسید")

    }
        console.log(minutes+":"+seconds)
        seconds--



},1000)











//2:03
//2:02
//2:01
//2:00
//minutes--1 && Seconds===59
//seconds--1
//1:59
//1:58



