let num = 10;
const fibaSeries = [0,1];

if(num<=1)
    console.log(fibaSeries[0]);
if(num==2)
    console.log(...fibaSeries);
if(num>2){
    for(let i=1; i<=num-2;i++){
        fibaSeries.push(fibaSeries[fibaSeries.length-1] + fibaSeries[fibaSeries.length-2]);
}
}
console.log(...fibaSeries);//...arr prints the elements only


// using function


// function fiba(num){
//     const fibaSeries = [0,1];
//     if(num<=1)
//         console.log(fibaSeries[0]);
//     if(num==2)
//         console.log(...fibaSeries);
//     if(num>2){
//         for(let i=1; i<=num-2;i++){
//             fibaSeries.push(fibaSeries[fibaSeries.length-1] + fibaSeries[fibaSeries.length-2]);
//     }
// }
// console.log(...fibaSeries);//...arr prints the elements only
// }

// let num = 11;
// fiba(num);
