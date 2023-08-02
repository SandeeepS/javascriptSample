
const inputarray = [2,3,6,4,9,3,1,12];
const resultarr = FindmultipleOfThree(inputarray);

function FindmultipleOfThree(arr){
    let MultipleOfThree = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%3===0){
            MultipleOfThree.push(arr[i]);
        }
    
    }
    return MultipleOfThree;
}


console.log("multiple of three  :",resultarr);