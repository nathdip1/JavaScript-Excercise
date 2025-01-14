// Maximum consecutive one’s (or zeros) in a binary array
/*Given a binary array, find the count of a maximum number of 
consecutive 1s present in the array.

Examples : 

Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
Output: 4
Explanation: The maximum number of consecutive 1’s in the array is 4 
from index 8-11.


Input: arr[] = {0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1}
Output: 1
Explanation: The maximum number of consecutive 0’s in the array is 1 
from index 0-1.
*/

function maxConsecutiveOnes(arr){
    let count = 0;
    let maxCount = 0;

    for(let i=0; i<=n-1; i++){
       if(arr[i] == 1){
        count++
        maxCount = Math.max(maxCount,count);
        
       }
       else
       count = 0; 
    }
return maxCount;

}

const arr = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
const n = arr.length;

const x = maxConsecutiveOnes(arr);
console.log(x);
