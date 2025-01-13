let UserMinInput=+prompt("Enter",60);
if(isNaN(UserMinInput)){
    alert("enter valid number");
}else{
    alert(UserMinInput/60+"h")
}