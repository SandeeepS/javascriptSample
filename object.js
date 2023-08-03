let globelPlayar =[{
    id    : 0,
    name  : 'sandeep',
    age   : 22,
},
{
    id    : 1,
    name  : 'aswin',
    age   : 45,
},
{
    id    : 2,
    name  : 'arun',
    age   : 21,
},
{
    id    : 3,
    name  : 'josh',
    age   : 20,
},
];



//for loop
/*for(let i=0;i<globelPlayar.length;i++){
    console.log(globelPlayar[i].id);
}*/



//forEach method 
/*globelPlayar.forEach(function(value,index,next){
    console.log(next[3]);
})*/



//arrow function

//globelPlayar.forEach((value,index,array)=> console.log(value));



//map
/*const array = globelPlayar.map((value)=>value.age);
console.log(array);*/

//filter

/*const array = globelPlayar.filter((value)=> value.age===20 && value.id===3);
console.log(array);*/


//find 
/*const newarry = globelPlayar.find((value)=>value.name="josh");
console.log(newarry);*/



//sort
/*const arr = [10,23,5,45,33,70];
 const sortedArray = arr.sort((a,b)=>a-b);

 console.log(sortedArray);*/


