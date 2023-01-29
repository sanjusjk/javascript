const letter=[]; //This will act as stack
const letter1=[]; //This will act as stack

const input = require('prompt-sync')({sigint: true}); // inorder to make prompt work

let word = input("what is your name? ");//"Bob";

let option = input("Choose an option from below?");



if(option===1){
    console.log("firstOption")
    let revWord = word.split('').reverse().join('');

   
    if(word.toUpperCase() === revWord.toUpperCase()){
        console.log(word, " is palindrome");
        }
        else{
            console.log(word, " is not palindrome");
        }
    
}
else{
    console.log("second Option")
    let revWord1;
    for(let i=0;i<word.length;i++){
    letter1.push(word[i]);
    }
    
    for(let i=0;i<word.length;i++){
        revWord1+= letter1.pop(); 
    }
    
    if(word.toUpperCase() === revWord1.toUpperCase()){
    console.log(word, " is palindrome");
    }
    else{
        console.log(word, " is not palindrome");
    }
}



