// Find the subarray with the largest sum of its elements.

// We use Kadane’s algo to solve this:
// Kadane’s Algorithm works because it effectively ignores subarrays 
// that would decrease the potential maximum sum. By resetting the running 
// sum to zero when it becomes negative, the algorithm ensures that only 
// positive contributions to the subarray sum are considered, thus 
// finding the maximum sum efficiently.

const a = [1,5,6,3,-18, 9]

let sum = 0;
let maxi = a[0];

for(let i=0; i<a.length; i++)
{
    //step:1
    sum = sum +a[i]

    //step2:
    //for get the max value and assign into maxi variable
    maxi = Math.max(maxi, sum);

    //step3
    //If the sum value is less then zero so reset the sum value to 0
    if(sum < 0)
    {
        sum = 0;
    }
}
console.log(maxi);
