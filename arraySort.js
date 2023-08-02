const inputArray = [1,2,6,4,1,3,7];
const result = sortArray(inputArray);

function sortArray(arr){
   
    let temp = 0;
    const arrayLength = arr.length;
    for(let i=0;i<arrayLength-1;i++){
        for(let j=i+1;j<arrayLength;j++){
            if(arr[i]>arr[j]){
                 temp = arr[i];
                arr[i]   = arr[j];
                arr[j]   = temp;
            }
        }
    }
    return arr;
}
console.log("the sorted array is :",result);