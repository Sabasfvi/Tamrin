let YearOfBirth=+prompt("Enter your Year of Birth",1381);
if (isNaN(YearOfBirth)||(YearOfBirth>1403)){
    alert("Please enter a valid Year of Birth");
}else {
    let CalculateAge=1403-YearOfBirth;
    alert(CalculateAge);
}
