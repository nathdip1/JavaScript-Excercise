//Flatten a Nested Array: Write a function that takes a nested array and returns a flattened version, i.e., converting [[1, 2], [3, [4]]] to [1, 2, 3, 4].

const arr = [[1, 2], [3, [4]]];
let resultArr = [];

function flattenArr(arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            tempArr = tempArr.concat(flattenArr(arr[i])); // Recursively flatten
        } else {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}


for(let i=0; i<=arr.length-1; i++){
if(Array.isArray(arr[i])){
    resultArr = resultArr.concat(flattenArr(arr[i]));
}
else
    resultArr.push(arr[i]);

}

console.log(resultArr)
