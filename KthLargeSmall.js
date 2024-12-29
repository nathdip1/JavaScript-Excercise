
// Kth largest and Kth smallest number in an array

const arr = [11,4,55,66,7,88,9,456]
const k = 2;

if(k<=arr.length){
const sortArrA = arr.sort((a,b) => a-b)
const kthLarget = sortArrA[k-1];
const kthSmallest = sortArrA[arr.length-k];

console.log(kthLarget);
console.log(kthSmallest);
}
else
console.log("Please enter Kth value LE array");



