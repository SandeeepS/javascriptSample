/*const prompt = require('prompt-sync')();
const inputarray = prompt("enter  the array elements seperated by comma:");
const array = inputarray.split(',');
console.log("userinput array",array);*/

document.querySelectorAll('#h')[0].style.color = "blue";

//object

const obj = {
    id   :0,
    name :'sandeep',
    place:'ranni',
};
//json obj
const obj2 =`{
    "id"   :0,
    "name" :"sandeep",
    "place":"ranni"
}`;


const result = JSON.parse(obj2);
const stringify = JSON.stringify(obj);

console.log(typeof(stringify));
console.log(result); 
