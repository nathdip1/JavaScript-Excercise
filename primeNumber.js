

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
    
    