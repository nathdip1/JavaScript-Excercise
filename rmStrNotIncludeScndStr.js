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
