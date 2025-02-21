let employees={
    ali:['ui' , 'vue js' ,'frontend'],
    saba:['frontend' , 'backend' ,'devops'],
    dorsa:['ui' , 'vue js' ,'frontend'],
    reza:['javascript' , 'html' ,'css']
}

let task=prompt('نام تسک را وارد کنید')
let employeeName=prompt('نام کارمند را برای ارجاع تسک وارد کنید')
let chooseEmployee=employees[employeeName]
chooseEmployee.push(task)
console.log(employees)