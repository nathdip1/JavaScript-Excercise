//Find LCM of 2 numbers. Base logic

// const num1 = 15, num2 = 25;

// let lcm = num1>num2 ? num1 : num2;

// while(true){
//     if(lcm%num1===0 && lcm%num2===0){
//         console.log(`LCM of ${num1} and ${num2} is ${lcm}`)
//         break;
//     }
//     else
//         lcm++;
// };

//Find LCM of an array

const arr = [12, 18, 30, 42];

let lcm = arr[0];

for(let i=1; i<=arr.length-1; i++){
    let a = lcm, b = arr[i];
    //using Euclidean algorithm to find GDC(Greatest common divisor)
    while(b !== 0){
        let temp = b;
            b = a%b;
            a = temp;
    }
    lcm = (lcm*arr[i])/a;
};

console.log(lcm);


