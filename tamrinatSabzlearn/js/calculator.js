
let num1=Number(prompt("عدد اول را وارد کنید"));
let num2=Number(prompt("عدد دوم را وارد کنید"));
let userOperator=prompt("عملیاتی را که میخواهید انجام شود وارد کنید");

let operators=[
    {id: 1 , op:'+' , do:num1+num2 },
    {id: 2 , op:'-' , do:num1-num2 },
    {id: 3 , op:'*', do:num1*num2 },
    {id: 4 , op:'/' , do:num1/num2}

]

let result=0
operators.forEach(function (operator){
    if(operator.op===userOperator){
        if(operator.op==='+' || operator.op==='-' ||operator.op==='*'){
            result+=operator.do;
        }else {
            result=1;
            result+=operator.do;
        }
    }
})
alert(num1+userOperator+num2+'='+result);

