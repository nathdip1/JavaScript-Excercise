// let num = 5;
// let f = 1;
// let n = num;

// function fact(){
//     while(num>=1){
//         f = f * num;
//         num--;
//     }
//     console.log(`The factorial of ${n} is ${f}`);
// };
// fact();

// another way to get factorials

function fact(n){
    if(typeof n !== 'number' || n<0 || !Number.isInteger(n)){
        return undefined;
    }
    if(n==0)
        return 1;
    else
        return n* fact(n-1);
}

let num = 0;
let result = fact(num);
console.log(result);