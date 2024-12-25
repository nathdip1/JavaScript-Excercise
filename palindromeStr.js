
// Palindrome String or not

let str = "Hello", reverseStr="";
str = str.toLowerCase();
console.log(str);

for(let i=str.length-1; i>=0; i--){
    reverseStr += str[i];
}

console.log(reverseStr);

if(str === reverseStr)
    console.log("Palindrome String");
else
    console.log("Not a Palindrome String");

// using function

// function reverseStr(str){
//     let reverseStr="";
//     str = str.toLowerCase();
//     console.log(str);

//         for(let i=str.length-1; i>=0; i--){
//             reverseStr += str[i];
//         }

//     console.log(reverseStr);

//     if(str === reverseStr)
//         console.log("Palindrome String");
//     else
//         console.log("Not a Palindrome String");
// }

// let str = "Hello";
// reverseStr(str);