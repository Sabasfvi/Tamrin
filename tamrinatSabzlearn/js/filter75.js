let customerBasket=[
    {id: 1, name: "milk", price:150000},
    {id: 2, name: "cheese", price:165000},
    {id: 3, name: "water", price:25000}, //1000
    {id: 4, name: "pen", price:12000}, //1000
    {id: 5, name: "cake", price:30000}, //1000
    {id: 6, name: "candy", price:55000} //1000
]


let totalPriceOfProducts=0;
let underHundred=customerBasket.filter( function (product){
    return product.price<100000
})
let postPriceForUnderHundred=underHundred.length*1000

customerBasket.forEach(function (product){
    return totalPriceOfProducts+=product.price
})
let priceOfProductsAndPost=postPriceForUnderHundred+totalPriceOfProducts

console.log("قیمت سبد خرید شما:"+totalPriceOfProducts)
console.log("مجموع هزینه ارسال برای کالا های زیر 100 تومان:"+postPriceForUnderHundred)
console.log("هزینه کلی:" +priceOfProductsAndPost)

