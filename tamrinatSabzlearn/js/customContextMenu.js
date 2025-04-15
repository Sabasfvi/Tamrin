const mainDivOfMenu=document.getElementById('contextMenu');

document.body.addEventListener("keydown",keyHandler)
document.body.addEventListener("click",clickHandler)
document.body.addEventListener("contextmenu",contextHandler)

function contextHandler(event) {
   mainDivOfMenu.style.top=event.pageY+"px"
   mainDivOfMenu.style.left=event.pageX+"px"
   mainDivOfMenu.style.display='block'

   event.preventDefault()
}


function keyHandler(event){
   if(event.code === "Escape"){
      mainDivOfMenu.style.display='none'
   }
}


function clickHandler() {
   mainDivOfMenu.style.display='none'
}





