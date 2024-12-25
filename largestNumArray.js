// Largest Number in an Array
const arr = [22,45,12,89,77,65,90];
let currNum ='';

for(i=0; i<arr.length; i++){
    for(j=0; j<arr.length; j++){
        if(arr[j]>currNum){
            currNum = arr[j];
        }
    }
}
console.log(currNum);


// Sort form
// const arr = [22,45,12,89,77,65,90];

// const arrLargestnum = arr.sort().reverse();
// console.log(arrLargestnum[0]);
