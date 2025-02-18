let sum=0;
let StoreWarehouse=[
    { name: "cake", price: 12000},
    { name: "chips", price: 25000},
    { name: "cheese", price: 65000},
    { name: "milk", price: 45000},
    { name: "water", price: 18000},
]

let ShoppingCart=[
    {name: "chips", price: 25000},
    { name: "cheese", price: 65000},
]



let CustomerChoice=prompt('Enter the name of the product you need');


let isInStore=StoreWarehouse.some(function(product){
    if(product.name===CustomerChoice){
        ShoppingCart.push(product)
        return true
    }
})


if(isInStore===true) {
    console.log(ShoppingCart)
    ShoppingCart.forEach(function(product){
        sum+=product.price
    })
    alert(sum)

}else {
    console.log('موجود نیست')
}




