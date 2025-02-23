///مثلا اینجا عملیات های مربوط به آپلود عکس بوده که حالا بعد 5 ثانیه میاد سراغ کد زیر

let hasProfile=false;
// let hasProfile=true; و !hasProfile---> false  و حلقه ایف  اجرا نمیشه چون کاربر عکس بارگزاری کرده



setTimeout(function () {

    if(!hasProfile){ // true
        alert('لطفا پروفایل خود را بارگزاری کنید')
    }

},5000)