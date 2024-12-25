// remove duplicate elements from an array

let arr = [1,2,3,4,1,2];

function remDupValue(arr){
    return arr.filter((value,index)=> arr.indexOf(value)===index);
}

console.log(arr);

console.log(remDupValue(arr));

