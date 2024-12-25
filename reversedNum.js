// Reverse number

let num = 7642,reversedNum=0, n;

while(num>0){
n = num%10;
reversedNum = reversedNum*10 + n;
num = parseInt(num/10);
};
console.log(reversedNum);