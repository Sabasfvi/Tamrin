let parent=document.getElementById("parent")
let li1=document.getElementById("li1")
let li2=document.getElementById("li2")
let li3=document.getElementById("li3")
console.log(parent.children[2])
parent.children[2].style.color = "red"
console.log(parent.childNodes)
console.log(parent.hasChildNodes())
console.log(parent.lastChild)
parent.lastElementChild.style.fontWeight = "bold"
console.log(li2.previousElementSibling)
console.log(li2.previousSibling)

li3.previousElementSibling.style.color = "green"

li2.addEventListener("click", function(){
    li2.nextElementSibling.remove();
})

