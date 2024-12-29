// Merge Sorted Arrays: Merge two sorted arrays into one sorted array.

let a = [12, 44, 22, 66, 44, 88, 45, 37];
let b = [44, 11, 55, 6, 78, 99];

let newSumArr = a.concat(b);
let finalArr = newSumArr.sort((a,b)=>a-b); //sort numerically

console.log(finalArr);

