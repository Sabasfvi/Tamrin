document.body.addEventListener("keydown",function( event) {
    event.preventDefault();

    //obj properties://

    let eventCode=event.keyCode;
    let eventLocation=event.location;
    let eventAscii=event.which;
    let eventKey=event.code;

    // dom elements://

    let heading=document.getElementById("heading");
    let ascii=document.getElementById("ascii");
    let infos=document.getElementById("infos");
    let starter=document.getElementById("starter");
    let keyCode=document.getElementById("keyCode");
    let key=document.getElementById("key");
    let location=document.getElementById("location");
    let which=document.getElementById("which");
    let code=document.getElementById("code");

    heading.style.display="flex";
    ascii.style.display="flex";
    infos.style.display="flex";
    starter.style.display="none";


    //proceedings//

    keyCode.innerHTML=eventCode;
    key.innerHTML=eventCode;
    location.innerHTML=eventLocation;
    which.innerHTML=eventAscii;
    code.innerHTML=eventKey;

    console.log(event);




})
