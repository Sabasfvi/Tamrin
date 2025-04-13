
let input=document.getElementsByTagName("input")[0];
let ul=document.getElementsByClassName(' todos')[0];


input.addEventListener("keydown", function(event){


    // console.log(newInputValue);
    // console.log(event);

    if (event.key === 'Enter') {
        event.preventDefault();

        let newInputValue = event.target.value;

        if (newInputValue.trim() === '' ) {
            alert("this field is required");

        }else {
            let li=document.createElement("li");
            li.className="list-group-item d-flex justify-content-between align-items-center"

            let span=document.createElement("span");
            span.innerHTML=newInputValue;

            let icon=document.createElement("i");
            icon.className="fa fa-trash-o delete";

            li.appendChild(span);
            li.appendChild(icon);
            ul.appendChild(li);

            event.target.value='';
        }



    }

})
ul.addEventListener('click',function(event){
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove()
    }
})