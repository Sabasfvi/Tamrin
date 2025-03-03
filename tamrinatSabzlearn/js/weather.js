//RANDOM BACKGROUND//

const backgroundImage=[
    "url(../src/photo/w2.jpg)",
    "url(../src/photo/w3.jpg)",
    "url(../src/photo/w4.jpg)",
    "url(../src/photo/w5.jpg)",
    "url(../src/photo/ww.jpg)",
    "url(../src/photo/wwwwwwwww.jpg)",
    "url(../src/photo/w8.jpg)",
    "url(../src/photo/w7.jpg)",
    "url(../src/photo/wwww.jpg)",
    "url(../src/photo/www.jpg)",
    "url(../src/photo/wwwwed.jpg)",

]

let chosenBackground=backgroundImage[Math.floor(Math.random() * backgroundImage.length)];
document.body.style.backgroundImage=chosenBackground;

let cities=[
    {name: 'Tehran' , temp: '36°F' , wind: 'NNE 8 mph' ,Precipitation: '2%',sun: 'Sunny',Humidity: "11%"},
    {name: 'Isfahan' , temp: '34°F' , wind: 'SSW 9 mph' ,Precipitation: '0%', sun: "Sunny" ,Humidity: "10%"},
    {name: 'Arak' , temp: '46°F' , wind: 'SSW 10 mph' ,Precipitation: '55%',sun: 'Cloudy' ,Humidity: "2%"},
    {name: 'Gilan' , temp: '44°F' , wind: 'SSW 12 mph' ,Precipitation: '70%',sun: 'light Rain',Humidity: "35%"},
    {name: 'Mazandaran' , temp: '46°F' , wind: 'SSW 15 mph' ,Precipitation: '100%',sun: 'Rainy' ,Humidity: "34%"},

]


let button=document.getElementsByClassName('button-submit')[0];

button.addEventListener('click',function(){
    let userInput=document.getElementById('input-search');
    cities.find(function(city){
      if(userInput.value===city.name){
          let cityObj={
              name: city.name,
              temp: city.temp,
              wind: city.wind,
              Humidity: city.Humidity,
              Precipitation: city.Precipitation
          }

          let paraghraph=document.getElementById('paragraph');
          paraghraph.innerHTML=city.name;
          paraghraph.style.fontSize='3rem'

          let container=document.getElementById('container');
          container.style.width='700px'
          container.style.height='500px'

          let infoContainer=document.getElementById('info-container')
          infoContainer.style.display='flex'
          let temper=document.getElementById('temper');
          temper.innerHTML=city.temp;


          let sunyOrWhat=document.getElementById('sunyorwhat')
          sunyOrWhat.innerHTML=city.sun;

          
          let lightrainysvg=document.getElementById('lightrainysvg');
          let cloudysunsvg=document.getElementById('cloudysunsvg');
          let rainysvg=document.getElementById('rainysvg');
          let sunnysvg=document.getElementById('sunnysvg');
          if(city.sun==='Sunny'){
              sunnysvg.style.display='flex'
          }else if(city.sun==='Cloudy'){
              cloudysunsvg.style.display='flex'
          }else if(city.sun==='Rainy'){
              rainysvg.style.display='flex'
          }else {
              lightrainysvg.style.display='flex'

          }


          // container.append(cityTemp)
          // cityTemp.innerHTML=city.temp;
          // cityTemp.style.fontSize='3rem'
          // cityTemp.style.fontWeight='bold'
          // cityTemp.style.marginLeft='8%'
          // cityTemp.style.color='white'




      }else{
          //code
      }
    })
})
