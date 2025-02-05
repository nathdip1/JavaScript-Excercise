//Truncate a given string by the given pointer
//input: str = 'Teststring';
//pointer = 4;
//output: str = 'Test'

const str = 'Teststring';
const pointer = 4;

let resultStr = '';

for(let i=0; i<pointer; i++){
    if(str[i] != undefined)
    resultStr += str[i];
}

console.log(resultStr);

