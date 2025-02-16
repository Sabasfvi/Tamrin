let userNumber=0;
let counter=0;
let sum=0;


while(userNumber!==-1){
    sum+=userNumber;
    userNumber=Number(prompt("Enter your number"));
   if(userNumber!==-1){
       counter++
   }

}alert(sum/counter)