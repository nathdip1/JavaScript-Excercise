// // Most commonly occuring

const fruits = ['Guava','Banana','Apple','Guava','Orange','Banana','Banana',];
let maxFreq = 0;
let maxElem = '';
for(let i=0; i<=fruits.length-1;i++){
    let currChar = fruits[i];
    let count =0;
    for(let j=0; j<=fruits.length-1;j++){
        if(fruits[j]===currChar)
            count++;
    }
    if(count>maxFreq){
        maxFreq = count;
        maxElem = currChar;
    }
}
console.log(maxElem);







// function findMaxFrequencyChar(inputString) {
//     let maxFreq = 0;
//     let maxFreqChar = '';
//     for (let i = 0; i < inputString.length; i++) {
//         let currChar = inputString[i];
//         let currFreq = 0;
//         for (let j = 0; j < inputString.length; j++) {
//             if (inputString[j] === currChar) {
//                 currFreq++;
//             }
//         }
//         if (currFreq > maxFreq) {
//             maxFreq = currFreq;
//             maxFreqChar = currChar;
//         }
//     }
//     return maxFreqChar;
// }

// const str1 = ['Guava','Banana','Apple','Guava','Orange','Banana','Banana',];
// const str2 = "bZzDbc";
// const maxFreChar1 = findMaxFrequencyChar(str1);
// const maxFreChar2 = findMaxFrequencyChar(str2);
// console.log
//     (`The maximum frequency character in string ${str1} is ${maxFreChar1}`);
// console.log
//     (`The maximum frequency character in string ${str2} is ${maxFreChar2}`);