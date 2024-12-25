// Anagram

let str1 = 'Silent';
let str2 = 'lisTen';

const cleanStr1 = str1.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
const cleanStr2 = str2.replace(/[^A-Za-z0-9]/g,"").toLowerCase();

const sortedStr1 = cleanStr1.split('').sort().join('');
const sortedStr2 = cleanStr2.split('').sort().join('');

console.log(sortedStr1 === sortedStr2);
