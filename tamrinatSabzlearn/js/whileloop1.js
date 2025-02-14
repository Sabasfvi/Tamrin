let UserNumber=+prompt("Enter the valid number");
let Sum=0;
while (UserNumber/10!==0){
    Sum=Sum+(UserNumber%10);
    UserNumber=Math.floor(UserNumber/10);
}alert(Sum)