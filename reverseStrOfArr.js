//Write a JS code to to reverse even index string element of the input array
//input: arr['apple','sun','egg','guava','moon'];
//output:
function reversedStr(str){
    let reverseStr = '';
    for(let i=str.length-1; i>=0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

const arr = ['apple','sun','egg','guava','moon'];

let resultArr = [];

for(let i=0; i<=arr.length-1; i++){
    if(i%2===0)
        resultArr[i] = reversedStr(arr[i]);
    else
        resultArr[i] = arr[i];
}

console.log(arr);
console.log(resultArr);