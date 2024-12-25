// reverse String

let str = 'Dipjyoti', reverseStr="";
str = str.toLowerCase();
 for(let i=str.length-1; i>=0; i--){
    reverseStr += str[i];
 }
 console.log(reverseStr);
 