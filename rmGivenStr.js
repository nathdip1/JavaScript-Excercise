// Remove a given character from String?

const str = "Hello World";
let toRemoveStr = "o";
let finalStr = "";
for(let char of str){
  if(char !== toRemoveStr)
    finalStr += char;
}
console.log(finalStr);
