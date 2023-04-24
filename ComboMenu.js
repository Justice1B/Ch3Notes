const readline = require("readline-sync");

let menu = ['Spicy Chicken Sandwich: $4.50', 'Cheeseburger: $1.50', 'Hamburger: $1.00', 'Chicken Sandwich: $2.50']
console.log(`${menu}`);
let beverage = ['Pepsi', 'Sprite', 'Coca-Cola', 'Coffee', 'Water']
console.log(`${beverage}`);
let beverageSizes = ['small $1.00', 'medium $1.75', 'large $2.25']
console.log(`${beverageSizes}`);
let answer1 = readline.question("What type of sandwich or burger would you like? \n Your Answer: ")
let answer2 = readline.question("Would you like a beverage? \n Your Answer: ")

if(answer2 == "yes"){
    let answer3 = readline.question("What beverage size would you like? \n Your Answer: ")
}
