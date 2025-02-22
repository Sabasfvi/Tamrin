let question1=prompt("گران ترین ادویه جهان از نظر وزنی چیست؟")
let question2=prompt("سریع ترین حیوان خشکی کیست؟")
let question3=prompt("کدام حیوان به عنوان بهترین دوست انسان شناخته می شود؟")
let question4=prompt("کدام حیوان نمی تواند زبانش را بیرون بیاورد؟")

let scores=0;
let  wrong=0;

let userAnswer=[question1,question2,question3,question4]
let rightAnswer=[
   "زعفران",
    "یوزپلنگ",
     "سگ",
    "تمساح"
]

userAnswer.forEach(function(answer,index){

    if (answer===rightAnswer[index]){
        scores+=1
    }else {
        wrong+=1
    }
})
console.log("نمره ی شما:",scores)
console.log("تعداد غلط ها:",wrong)
