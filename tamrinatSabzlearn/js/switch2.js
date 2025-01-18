let browser=prompt("What browser are you using?","Chrome");
if(browser==="Edge"){
    alert( "You've got the Edge!" );
}else if(browser==="Firefox" || browser==="Opera" || browser==="Safari"|| browser==="Chrome"){
    alert( 'Okay we support these browsers too' );
}else {
    alert( 'We hope that this page looks ok!' );
}