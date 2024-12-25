// Palindrome number or not

let num = 121, pal = 0,x=num;

while(num>0){
pal = pal*10 + num%10;
num = parseInt(num/10);
}
console.log(pal);
if(pal === x)
    console.log("Palindrome Number");
else
    console.log("Not a Palindrome Number");
    
// using function


// function palindrome(num){
//     let pal = 0,x=num;
//     while(num>0){
//     pal = pal*10 + num%10;
//     num = parseInt(num/10);
//     }
//     console.log(pal==x);
//         if(pal === x)
//             console.log("Palindrome Number");
//         else
//             console.log("Not a Palindrome Number");
// }
    
// let num = 122;
// palindrome(num);