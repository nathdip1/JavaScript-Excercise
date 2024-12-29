// Sort an array of 0's 1's and 2's

// Due to its specific nature, you can apply an optimal solution 
// that is quicker than a simple sorting algorithm. The Dutch national 
// flag algorithm is the go-to algorithm for such a problem. It separates 
// the array into three parts, each representing one of the values. 
// Three pointers are used to iterate through the array and swap elements 
// among these parts according to their values.



const arr = [0, 1, 2, 0, 1, 2, 1, 0, 1, 2];
let low = 0;
let mid = 0;
let high = arr.length-1;

while(mid<=high){
    if(arr[mid] === 0){
        [arr[mid], arr[low]] = [arr[low], arr[mid]];
        mid++;
        low++
    }
    else if(arr[mid] === 1){
        mid++;
    }
    else{
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
    }
}

console.log(arr);


