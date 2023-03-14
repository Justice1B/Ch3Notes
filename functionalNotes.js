//Function Notes
//Step 1 - Define the function
function sayHello(){
    console.log("Hello");
}
//Step 2 - Call (use) the function
// sayHello();
// sayHello();
// sayHello();
// sayHello();

function printMax(x, y){
    if (x>y){
        console.log(`the larger number is ${x}`);
    } else {
        console.log(`the larger number is ${y}`);
    }
}

printMax(8,21);
printMax(5,11);
printMax(43,57);
printMax(35,23);

function sum(number1, number2){
    console.log(`${number1} + ${number2} = ${number1+number2}`);
}

sum(7,12);
sum(0,5);
