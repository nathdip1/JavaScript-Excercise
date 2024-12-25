// Second Largest number in an array

let arr = [44,21,33,78,454,12,98];

function secondLargestNum(arr){
    const arr1 = arr.filter((value,index)=> arr.indexOf(value)===index).sort(function(a,b){return a-b}).reverse();
    return arr1[1];
}

console.log(secondLargestNum(arr));

