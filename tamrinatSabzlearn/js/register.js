let name=prompt("Please Enter your Name");
let password=prompt("please enter your password");
{
    if (name.length<3) {
        alert("نام کاربری باید حداقل 3 کارکتر باشد");
    }else if(password.length<8) {
        alert("رمز عبور باید حداقل 8 کارکتر باشد")

    }else {
        alert("خوش آمدید")
    }
}
