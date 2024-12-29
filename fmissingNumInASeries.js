// Find Missing Number

function findMissingNumber(nums) {
    const n = nums.length;
    // Calculate the sum of the first n natural numbers
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the sum of the elements in the array
    //const actualSum = nums.reduce((acc, num) => acc + num, 0);
    let actualSum = 0;
    for(let i=0; i<nums.length; i++)
    {
        actualSum += nums[i]
    }

    // Using reduce methode we can find sum of array numbers
    // let actualSum = nums.reduce((a,b)=>a+b); 


    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage:
const nums = [0, 1, 2, 4, 5, 6]; // Missing number is 3
console.log("Missing number:", findMissingNumber(nums)); // Output: 3
