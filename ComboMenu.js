const readline = require("readline-sync");
let items = [];
let cost =[];

let menu = [
    'Burger: $1.50',
    'Cheeseburger: $2.00',
    'Hamburger: $1.00',
]
console.log(`${menu}`);

let beverage = [
    'Pepsi',
    'Sprite',
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
items.push(answer1)
if(answer1 == 'Burger') {
    cost.push(1.50)
}else if(answer1 == 'Cheeseburger'){
    cost.push(2.00)
}   else {
    cost.push(1.00)
}

let answer2 = readline.question("Would you like a beverage? \n Your Answer: ")
items.push(answer2)

if(answer2 == "yes"){
    let answer3 = readline.question("What beverage size would you like? \n Your Answer: ")
    items.push()
    console.log(answer3)

} else {
    console.log("Didn't choose drink")
}

if(answer2 == 'small') {
    cost.push(1.00)
} else if(answer2 == 'medium') {
    cost.push(1.75)
} else if(answer2 == 'large') {
    cost.push(2.25)
} else {
    cost.push(0.00)
}
console.log(cost)