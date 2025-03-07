
let resulElm=document.querySelector('.result');
let convertElm=document.querySelector('.convertButton');
let resetElm=document.querySelector('.resetButton');
let changeElm=document.querySelector('.changeButton');

changeElm.addEventListener('click',function(){
    let inputElm=document.getElementById('converter')
    let placeHolder=inputElm.placeholder;

    if(placeHolder==="°C"){
        inputElm.placeholder="°F";
        document.title='SalzLearn| Js | °F to °C';
    }else {
        inputElm.placeholder="°C";
        document.title='SalzLearn| Js | °C to °F';
    }

})


convertElm.addEventListener('click',function(){

    
})

