let  userWord=prompt("please enter a word") // saba
let userWordArray=userWord.split("")      //[s,a,b,a]
let finalWordArray=userWordArray.join("")     //s,a,b,a
console.log(finalWordArray +'\n'+ 'کلمه ورودی:')
let reverseWordArray=userWordArray.reverse()      //[a,b,a,s]
let finalReverseWordArray=reverseWordArray.join("")    //a,b,a,s
console.log(finalReverseWordArray+'\n'+'کلمه ورودی برعکس:')

// console.log(finalWordArray===finalReverseWordArray)        //test

if (finalWordArray===finalReverseWordArray){
    alert(' true')
}else {
    alert(' false')
}
