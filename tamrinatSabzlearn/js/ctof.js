inputElm=document.getElementById('converter')
let placeHolder;
let userValue ;
let result;
let resulElm=document.querySelector('.result');
let convertElm=document.querySelector('.convertButton');
let resetElm=document.querySelector('.resetButton');
let changeElm=document.querySelector('.changeButton');
let spanC=document.querySelector('.C');
let spanF=document.querySelector('.F');

changeElm.addEventListener('click',function(){
    placeHolder=inputElm.placeholder;
    if(placeHolder==="°C"){
        inputElm.placeholder="°F";
        spanC.innerHTML='°F'
        spanF.innerHTML='°C'
        document.title='SalzLearn| Js | °F to °C';

    }else {
        inputElm.placeholder="°C";
        document.title='SalzLearn| Js | °C to °F';
        spanC.innerHTML='°C'
        spanF.innerHTML='°F'


    }
})


convertElm.addEventListener('click',function(converting){
    resulElm.innerHTML=''
    userValue = inputElm.value;
    placeHolder=inputElm.placeholder;
    let valueFlag = (isNaN(userValue) || userValue === '');  // جمله و ورودی خالی  true میدهد

    if( !valueFlag && placeHolder==="°C"){
        result=(userValue*(9/5)+32) +' '+'°F'
        resulElm.append(result)
        console.log(valueFlag)
    }else if(!valueFlag && placeHolder==="°F"){
        result=((userValue-32)*(5/9)) +' '+'°C';
        resulElm.append(result)
    }else if (valueFlag && userValue===''){
        result="Write Correct Value!"
        resulElm.append(result)
    }else {

        result="Wrong Value!"
        resulElm.append(result)
    }
})


resetElm.addEventListener('click',function(){
    resulElm.innerHTML=''
})