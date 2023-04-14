const readline=require('readline-sync');
let answer1 = readline.question("Hello, I am a magic eight ball and I answer all your questions. \n Would you like to ask me a question?\n Your answer: ");
let answer2 = readline.question("what is your question? \n Your answer: ")

let answers = ['yes', 'no', 'maybe', 'yup', 'nope', 'try again later', 'CERTAINLY', 'NEVER', 'ew'];
let randomNum = Math.floor(Math.random() * answers.length);
let answer = answers[randomNum];
console.log(answer);
