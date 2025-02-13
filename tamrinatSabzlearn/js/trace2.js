
//روش خودم
// let  UserNumber=prompt("Enter Your Number");
// let sum=0;
// for(let i=0;i<UserNumber.length;i++){
//       sum=sum+Number(UserNumber[i]);
//
// }alert(sum)
//------------------------------------------------------------------------------//
//روش استاد:
let UserNumber=+prompt("please enter your number"); //123
let sum=0;
for (let i = 0; Math.floor(UserNumber/10)!==0; i++) {
     sum=sum+(UserNumber%10);
     UserNumber=Math.floor(UserNumber/10);
}
alert(sum);
