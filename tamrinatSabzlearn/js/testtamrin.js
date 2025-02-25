
let list=document.getElementsByTagName('li');
list[2].setAttribute('id' , 'about')
console.log(list)


let header2=document.getElementById('welcome');
header2.style.color = 'red';
header2.style.fontSize = '100px';


let input=document.getElementById('input');
input.value="hello world";

let img=document.getElementById('img');
let button=document.getElementById('lampbutton');
///on--> true       off-->false
    let lampFlag=false   ///اول خاموشه و لینک عکس خاموش در صفحه است

    function clickFunc(){
        if(lampFlag){
            img.setAttribute('src',"../src/off.jpg")
            button.innerHTML='on'
            lampFlag=false
        }else {
            img.setAttribute('src',"../src/on.jpg")
            button.innerHTML='off'
            lampFlag=true


        }


}






