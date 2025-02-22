
let users=[
    {id: 1, userName: "ali_safavi", password: "ali23567e" },
    {id: 2, userName: "saba_safavi", password: "saba123" },
    {id: 3, userName: "nrges23", password: "nargesf98" },
    {id: 4, userName: "mohammad_24", password: "m89had" }
]

let enterName=prompt("Enter your user name");

let finding=users.find(function (user) {

    return user.userName === enterName;
})

if(finding===undefined){
alert("نام کاربری وجود ندارد")
}else {
    alert(finding.password)
}



