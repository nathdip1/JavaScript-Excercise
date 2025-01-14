// Maximum product of a triplet (subsequence of size 3) in array
// Given an integer array, find a maximum product of a triplet in the array.

// Examples: 

// Input:  [10, 3, 5, 6, 20]
// Output: 1200
// Explanation: Multiplication of 10, 6 and 20

// Input:  [-10, -3, -5, -6, -20]
// Output: -90

// Input:  [1, -4, 3, -6, 7, 0]
// Output: 168



// Javascript program to find a maximum 
// product of a triplet in array of integers

// Function to find a maximum product of a 
// triplet in array of integers of size n
function maxProduct(arr, n) 
{
    
    // If size is less than 3, no 
    // triplet exists
    if (n < 3) 
    {
        return -1;
    }

    // Sort the array in ascending order
    arr.sort((a,b)=>a-b);
    let x = arr.sort((a,b)=>a-b);
    console.log(x);
    

    // Return the maximum of product of last three
    // elements and product of first two elements
    // and last element
    return Math.max(arr[0] * arr[1] * arr[n - 1],
            arr[n - 1] * arr[n - 2] * arr[n - 3]);
            
}

// Driver code
var arr = [-10, -3, -5, -6, -20]
var n = arr.length;
var max = maxProduct(arr, n);

if (max == -1) 
{
    console.log("No Triplet Exists");
}
else
{
    console.log("Maximum product is " + max);
}
