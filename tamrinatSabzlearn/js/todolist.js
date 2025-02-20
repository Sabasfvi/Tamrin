
let todolist=[
    {id: 1, name: "exercise",status:false},
    {id: 2, name: "cooking",status:false}
]

let userInput=prompt("چه کاری میخواهید انجام دهید؟ \n"+
    "1. اضافه کردن\n"
    +
    "2. حذف کردن \n"
    +
    "3. تغییر وضعیت"
);


if(userInput==='1'){
    let newToDo=prompt('کار خود را وارد کنید:');
    let newToDoObject={
        id: 3,
        name: newToDo,
        status:false
    }
    todolist.push(newToDoObject);
    console.log(todolist)

}else if(userInput==='2'){
    let deleteDo=prompt('کاری که میخواهید حذف کنید را وارد کنید:');
    let isInList=todolist.some(function (list ){
        return list.name===deleteDo
    })
    if(isInList===true){
       let indexOfDelete =todolist.findIndex(function (lis){
            return lis.name===deleteDo
        })
        todolist.splice(indexOfDelete,1)
        console.log(todolist)
    }else {
        alert('ورودی نامعتبر است!')
    }

}else if(userInput==='3'){
    let changeToDoStatus=prompt('نام کاری که میخواهید وضعیت آن را به انجام شده تغییر دهید را وارد کنید:');
    todolist.forEach(function (list){
        if(list.name===changeToDoStatus){
            list.status=true
        }
        console.log(todolist)
    })




}else {
    alert('ورودی نامعتبر است گزینه صحیح را انتخاب کنید!')
}