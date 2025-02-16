let userNum1=+prompt("please enter the first number");
let userNum2=+prompt("please enter the second number");
let evenNum= []

while ((userNum1 <=userNum2)) {
    userNum1++
    if(userNum1%2===0){
        evenNum.push(userNum1)
    }
}alert(evenNum)
