// Armstrong number

let num = 153, rem, armNum = 0, tempNum = num;

function armstrongNum(num){
    while(num>0){
    rem = num%10;
    armNum += rem**3;
    num = parseInt(num/10);
    }
    if(tempNum === armNum)
        console.log("Armstrong Number");
    else
        console.log("Not an Armstrong Number");
        
        
}

armstrongNum(num);
