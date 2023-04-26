const readline = require("readline-sync");
let items = [];

let menu = [
    'GrilledCheese: $2.50',
    'Cheeseburger: $1.50',
    'Hamburger: $1.00',
    'ChickenSandwich: $2.00'
]
console.log(`${menu}`);

let beverage = [
    'Pepsi',
    'Sprite',
    'CocaCola',
    'Coffee',
    'Water'
]
console.log(`${beverage}`);

let beverageSizes = [
    'small: $1.00',
    'medium: $1.75',
    'large: $2.25'
]
console.log(`${beverageSizes}`);

let answer1 = readline.question("What type of sandwich or burger would you like? \n Your Answer: ")
items.push()
let answer2 = readline.question("Would you like a beverage? \n Your Answer: ")
items.push()

if(answer2 == "yes"){
    let answer3 = readline.question("What beverage size would you like? \n Your Answer: ")
    items.push()
}

for (let i=0, i<items.length; i++){
    console.log(`You ordered ${items[i]}`);
}
