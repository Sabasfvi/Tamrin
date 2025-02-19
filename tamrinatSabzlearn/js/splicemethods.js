let storeWarehouse=[
    {id: 1 , name: "milk" , price: 1000},
    {id: 2 , name: "water" , price: 2000},
    {id: 3 , name: "chips" , price: 3000},
    {id: 4, name: "pen" , price: 5000},
    {id: 5, name: "phone" , price: 7000},
]

let customerBasket=[
    {id: 1 , name: "milk" , price: 1000},
    {id: 4, name: "pen" , price: 5000},
]

alert("اگر میخواهید کالایی بخرید نام آن را وارد کنید ")
let buyProduct=prompt("نام محصول مورد نظر خود را برای افزودن به سبد وارد کنید");

let productIndex=storeWarehouse.findIndex(function (product){
    return buyProduct===product.name
})
customerBasket.splice(2,0,storeWarehouse[productIndex])
console.log( "سبد خرید شما به شرح زیر است:")
console.log(customerBasket)

alert("نام محصولی که میخواهید حذف شود را وارد کنید")
let deleteProduct=prompt("نام محصول را وارد کنید");

let productIndex2=customerBasket.findIndex(function (product){
    return deleteProduct===product.name
})
customerBasket.splice(productIndex2,1)
console.log( "سبد خرید شما به شرح زیر است:")
console.log(customerBasket)


