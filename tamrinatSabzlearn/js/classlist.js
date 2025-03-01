//روش اول


// let color=['red','green','blue','purple','pink','red'];
// let index=0;
//     setInterval(function(){
//       document.body.style.backgroundColor=color[index];
//        index=Math.floor(Math.random()*color.length);
//     },1000)

//روش دوم

setInterval(function(){

    let redValue, greenValue, blueValue;

    redValue=Math.floor(Math.random()*255);
    greenValue=Math.floor(Math.random()*255);
    blueValue=Math.floor(Math.random()*255);

    document.body.style.backgroundColor='rgb('+redValue+','+greenValue+','+blueValue+')';

},1000)