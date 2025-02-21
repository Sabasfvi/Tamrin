let origin=prompt("لطفا استان مبدا مورد نظر خود را وارد کنید.")

let ostan={
    esfahan:["najafabad" , "shahrreza"],
    tehran:["ghods","eslamshahr"]
}

let showProvience=ostan[origin];           ////////////  esfahan:["najafabad" , "shahrreza"],

showProvience.forEach(function (ostan){
    console.log(ostan);
})
