// How to remove characters from the first String which are 
// present in the second String?

const a = 'code';
const  b = 'load';

let finalStr = '';

for (let char of a) {
    if (!b.includes(char)) {
        finalStr += char;
    }
}

console.log(finalStr); 

//Alternate way using logic

// const a = 'code';
// const b = 'load';


// let result = '', count = 0;
// for(let i=0; i<=a.length-1; i++){
//     for(let j=0; j<=b.length-1; j++){
//         if(a[i]!=b[j])
//             count++;
//         else{
//             count = 0;
//             break;
//         }
//     }
//     if(count>0)
//         result += a[i];

// }

// console.log(result);
