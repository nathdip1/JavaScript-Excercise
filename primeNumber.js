
// Using array
function prime(n){
    for (let i=1;i<=n;i++){
        if(n%i === 0)
        count.push(n%1);
    }
    console.log(count.length);
    console.log(count);
    
    if(count.length <= 2)
        console.log(`${n} is a prime number`);
    else
        console.log(`${n} is not a prime number`);
    }
     
    let num = 3;
    let count = [];
    prime(num);

// Using function of normal logic

    // function primeNumber(num){
    //     let count = 0, tempNum;
    //     if(num===0||num===1)
    //         console.log("Test a number GT 1");
    //     else{
    //         for(let i=2; i<=num; i++){
    //             tempNum = num%i;
    //             if(tempNum===0)
    //                 count++;
    //             }
    //             if(count===1)
    //                 console.log("The given number is a Prime Number");
    //             else
    //                 console.log("The given number isn't a Prime Number");
    //         }
                
    // }
    
    // const num = 7;
    // primeNumber(num);
    
    // using Math.sqrt() function

    // function primeNumber(num){
    //     if(num===0||num===1)
    //         console.log("Test a number GT 1");
    //     else{
    //         for(let i=2; i<=Math.sqrt(num); i++){
    //             if(num%i===0)
    //                 return false;
    //             else
    //                 return true;
                    
    //             }
    //         }
                
    // }
    
    // const num = 8;
    // console.log(primeNumber(num));



