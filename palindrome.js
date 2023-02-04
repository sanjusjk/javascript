const letter = []; //This will act as stack
const newLetter = []; //This will act as stack

const input = require('prompt-sync')({ sigint: true }); // inorder to make prompt work on terminal

let word = input("what is your name? ");

//Option 1
console.log("firstOption")
let revWord = word.split('').reverse().join('');


if (word.toUpperCase() === revWord.toUpperCase()) {
    console.log(word, " is palindrome");
}
else {
    console.log(word, " is not palindrome");
}


//Option 2

console.log("second Option")
let reverseWord;
for (let i = 0; i < word.length; i++) {
    newLetter.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
    reverseWord += newLetter.pop();
}

if (word.toUpperCase() === reverseWord.toUpperCase()) {
    console.log(word, " is palindrome");
}
else {
    console.log(word, " is not palindrome");
}




