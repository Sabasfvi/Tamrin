
let name=prompt('what is your name?')
let familyName=prompt('what is your family name?')
let age=prompt('how old are you?')
let email=prompt('what is your email address?')


let userInfo=[
    {name: "saba", familyName: "safavi" , age: 21 , email: "sabasfvi@gmail.com"}
]
let userInfoObj={
    name,
    familyName,
    age,
    email
}
userInfo.push(userInfoObj)

userInfo.forEach(function(user){
    console.log(user);

})