const prompt = require('prompt-sync')();
let number = prompt('enter the number:');

let reverse  = 0;
const temp = number;
while(number!==0){
let reminder = number%10;
    reverse  = (reverse*10)+reminder;
    number   = number/10;
}
if(number===temp){
    console.log(`${temp} is palindrome`);
}else{
    console.log(`${temp} is not palindrome`);
}

