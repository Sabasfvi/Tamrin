let users=[
    {name:'ali',family:'alizadeh',age:55},
    {name:'anth',family: 'anikal',age:34},
    {name:'azita',family: 'azitazadeh',age:23},
]

let user_name=prompt("What is your name?");
let user_family=prompt("What is your family?");
let user_age=prompt("How old are you?");


let newUsers={
    name:user_name,
    family:user_family,
    age:user_age,
}

//اگر شرایط برقرار بود اینارو اضافه کنه به ارایه ی users

if (user_name.length<3 || user_name.length>10){
    alert('نام مجاز نیست')
}else if(user_family.length<3 || user_family.length>15){
    alert('نام خانوادگی مجاز نیست')

}else if(user_age.length>3 || isNaN(user_age)){
    alert('سن مجاز نیست')
}else {
    users.push(newUsers)
   console.log(users)
}

