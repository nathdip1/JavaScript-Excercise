// Given an array arr[] and an integer K, the task is to 
// reverse every subarray formed by consecutive K elements.

// Examples: 

// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], K = 3 
// Output: 3, 2, 1, 6, 5, 4, 9, 8, 7

// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], K = 5 
// Output: 5, 4, 3, 2, 1, 8, 7, 6

// Input: arr[] = [1, 2, 3, 4, 5, 6], K = 1 
// Output: 1, 2, 3, 4, 5, 6

// Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], K = 10 
// Output: 8, 7, 6, 5, 4, 3, 2, 1


function reverseArray(arr,k){
    let newArr = [], finalArr = [];

    while(arr.length-1>=0){

    for(let i= k-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    finalArr = finalArr.concat(newArr);
    newArr = [];
    // arr = arr.filter(num => !finalArr.includes(num));
    arr.splice(0,k);

}
   return console.log(finalArr.filter(element => element !== undefined));

}

const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 10
reverseArray(arr,k);
