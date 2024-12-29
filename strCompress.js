// String Compression: Compress a string by counting consecutive 
// repeating characters
// Implement a method to perform basic string compression 
// using the counts of repeated characters. For example, 
// the string "aabcccccaaa" would become "a2b1c5a3".

const str = "aabccccaaaeeeee";
let compress = "";
let count = 1;

for(let i=0; i<str.length; i++){
  if(str[i]===str[i+1])
    count++;
  else{
    compress += str[i] + count;
    count = 1;
  }
}

console.log(compress);


