// Occurrence of an integer in the array

const a  = [1,3,4,5,6,4,3,4,5]
const target = 4; //this integer needs to be checked
let count = 0;

for(let i =0; i<a.length; i++)
{
    if(a[i] === target)
    {
        count++
    }
}
console.log(count);
