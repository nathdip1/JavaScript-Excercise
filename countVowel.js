// Count voels in a string

const str = 'Dipjyotiiiii';
let count = 0;
const cleanStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

const arrStr = cleanStr.split('');

for(i=0; i<=arrStr.length-1; i++){  
if(arrStr[i]==='a'||arrStr[i]==='e'||arrStr[i]==='i'||arrStr[i]==='o'||arrStr[i]==='u'){
    count++;
}
}
console.log(count);




