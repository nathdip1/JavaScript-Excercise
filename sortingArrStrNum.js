const fruits = ['Mango','Banana','Apple','Guava','Orange'];
// Sorting the string in acsending order
console.log(fruits.sort());
// Sorting the string in decsending order
fruits.sort();
console.log(fruits.reverse());


// sort() does not work with numbers properly as it checks teh number as a string
// To overcome tihs problem the below code tweek we can do
const arr = [1,2,3,14,1,2];
console.log(arr.sort(function(a,b){return a - b}));
// And for descending order
console.log(arr.sort(function(a,b){return b - a}));





















