let groupMembers=[
    {id: 1, name: "ali", age: 27},
    {id: 2, name: "sara", age: 22},
    {id: 3, name: "dorsa", age: 23},
    {id: 4, name: "mohammadreza", age: 24},
    {id: 5, name: "saba", age: 12},
    {id: 6, name: "narges", age: 53}
]
let checking=groupMembers.every(function (member) {
    return member>18
})
if(checking===true){
    console.log("CALL ACCEPTED,every members are older than 18")
}else {
    console.log(" One of the members is under the 18")
}