// Count the number of words in String?

const str = 'this is coding round';
let fStr = str.split('  ').join('')
let count = 0;

for(let word of fStr)
{
    count++
}
console.log(count);
