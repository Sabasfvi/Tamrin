 // Functions for select elems with id & class
 let $ = document;
 function idName(id_name) {
   return $.getElementById(id_name);
 }

 function className(class_name) {
   return $.getElementsByClassName(class_name);
 }

 // Select Elems
let togglePassword = className("toggle-password")[0];
let passwordField = idName("password-field");


 // Fire click event on eye icon
togglePassword.addEventListener("click", function(){

    if (passwordField.type === "text") {
        passwordField.type = "password";
        togglePassword.classList.remove("active");

    } else {
        passwordField.type = "text";
        togglePassword.classList.add("active");



    }



})