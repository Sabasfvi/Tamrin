let userNumber=0;
let sum=0
let arrUserNumber=[];

while(userNumber!==-1){
    userNumber=Number(prompt('please enter a number'));
    arrUserNumber.push(userNumber);
    if(userNumber===-1){
        arrUserNumber.pop()
    }
}for (let i=0;i<arrUserNumber.length;i++){
    sum+=arrUserNumber[i];

}console.log(sum/arrUserNumber.length)



