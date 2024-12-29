// Two-sum problem
// The task here is to find a pair of elements in a given array that 
// adds up to a specified sum given by the user. If there are two such 
// numbers in the array that add up to the given value, they are returned. 
// We assume that the array is sorted.
// Logic: The solution involves utilizing a two-pointer approach. 
// By initializing two pointers, left at the beginning and right at the end, 
// this algorithm compares the sum of elements at these positions with our 
// required sum.


const arr = [1, 2,3,4, 5, 6, 7, 8, 9];
const sum = 6;
let left = 0;
let right = arr.length - 1;
let pair = null;

while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === sum) {
        pair = [arr[left], arr[right]];
        break; // Exit the loop once the pair is found
    } else if (currentSum < sum) {
        left++;
    } else {
        right--;
    }
}

if (pair) {
    console.log(`Pair found: ${pair[0]} + ${pair[1]} = ${sum}`);
} else {
    console.log('No pair found that adds up to the target sum.');
}

