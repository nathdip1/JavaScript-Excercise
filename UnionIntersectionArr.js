// Find the intersection or union of two arrays

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const newArrIS = []; //Intersection
let newArrUN = []; //Union
for(let ele of arr1)
{
    if(arr2.includes(ele))
        newArrIS.push(ele);
    newArrUN = arr1.concat(arr2);
}
console.log(newArrIS);
console.log(newArrUN);
