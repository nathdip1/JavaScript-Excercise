// Move all zeros to end of array

/* Given an array of integers arr[], the task is to move all the zeros 
to the end of the array while maintaining the relative order of all 
non-zero elements.

Examples: 

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.


Input: arr[] = [10, 20, 30]
Output: arr[] = [10, 20, 30]
Explanation: No change in array as there are no 0s.

Input: arr[] = [0, 0]
Output: arr[] = [0, 0]
Explanation: No change in array as there are all 0s.
*/

function sortAndShiftZeros(arr){

    let count = 0, newArr = [], finalArr = [];

    for(let i=0; i<=n-1; i++){
        if(arr[i]===0){
            count++;
        }
        else{
            newArr.push(arr[i]);
        }
    }
    newArr.sort((a,b) => a-b);
    finalArr = newArr.concat(Array(count).fill(0));
    return finalArr;

}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
// const arr = [10, 20, 30];
// const arr = [0,0,0,0];
const n = arr.length;
let resultArr = sortAndShiftZeros(arr);
console.log(resultArr);

//Alternate method

// function sortAndShiftZeros(arr){

//     const nonZeroElements = arr.filter(num => num!== 0);
//     nonZeroElements.sort((a,b)=>a-b);
//     const zeroCount = arr.length - nonZeroElements.length;
//     const resultArr = [...nonZeroElements, ...Array(zeroCount).fill(0)];
//     return resultArr;

// }

// const arr = [1, 2, 0, 4, 3, 0, 5, 0];
// // const arr = [10, 20, 30];
// // const arr = [0,0,0,0];
// const n = arr.length;
// let resultArr = sortAndShiftZeros(arr);
// console.log(resultArr);
