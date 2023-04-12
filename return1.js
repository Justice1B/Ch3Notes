const readline = require('readline-sync');

//q1
function nameSwapper(){
    let first = readline.question("First Name: ");
    let last = readline.question("Last Name: ");
    return(`${last}, ${first}`);
}

let myName = nameSwapper();
console.log(myName);

