let  Moadel=+prompt("لطفا معدل نیمسال خود را وارد کنید","20");

switch(Moadel){
    case 18:
    case 19:
    case 20:
         alert("سطح A");
         break;
    case 15:
    case 16:
    case 17:
        alert("سطح B");
        break;
    case 12:
    case 13:
    case 14:
        alert("سطح C");
        break;
    default:
        alert("مشروط");
        break;


}