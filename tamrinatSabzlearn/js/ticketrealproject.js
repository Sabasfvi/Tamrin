let cities={
    Iran:['Isfahan','Tehran','Shiraz','Arak'],
    Canada:['Toronto','Quebec City','Regina'],
    UnitedState:['Washington','San Francisco']
}

let countries=document.getElementsByClassName('select-countries')[0];
let citySelect=document.getElementsByClassName('select-cities')[0];

countries.addEventListener('change', function(){
    if(countries.value==='please select'){
        citySelect.innerHTML=''
        citySelect.innerHTML+='<option>'+'plese select the citiy...'+'</option>'
    }else {
        citySelect.innerHTML=''
        let chosenCountry= cities[countries.value];  //iran[]
        chosenCountry.forEach(function (City){

            citySelect.innerHTML+='<option value=City>'+City+'</option>'
            // let optionCity=document.createElement("option");
            // optionCity.value=City;
            // optionCity.textContent=City;
            // citySelect.appendChild(optionCity);

        })



    }


})
