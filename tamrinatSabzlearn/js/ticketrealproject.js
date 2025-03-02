let cities={
    Iran:['Isfahan','Tehran','Shiraz','Arak'],
    Canada:['Toronto','Quebec City','Regina'],
    UnitedState:['Washington','San Francisco']
}

let countries=document.getElementsByClassName('select-countries')[0];
let citySelect=document.getElementsByClassName('select-cities')[0];

countries.addEventListener('change', function(){
    citySelect.innerHTML=''
  let chosenCountry= cities[countries.value];  //iran[]
  chosenCountry.forEach(function (City){
      let optionCity=document.createElement("option");
      optionCity.value=City;
      optionCity.textContent=City;
      citySelect.appendChild(optionCity);

  })

})
