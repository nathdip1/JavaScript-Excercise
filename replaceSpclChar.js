// Regular expression to remove special character

const str = 'h&6 k/^i';
let cleanStr = str.replace(/[^A-Za-z0-9]/g, '');
console.log(cleanStr);
