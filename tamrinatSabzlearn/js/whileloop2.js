let UserNumber=+prompt("please enter your number");
counter=0;
while (UserNumber/10!==0){
    counter++
    UserNumber=Math.floor(UserNumber/10)

}alert(counter)