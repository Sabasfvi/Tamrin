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
    {name: 'Tehran' , temp: '36°F' , wind: 'NNE 8 mph' ,Precipitation: '2%'},
    {name: 'Isfahan' , temp: '34°F' , wind: 'SSW 9 mph' ,Precipitation: '0%'},
]


