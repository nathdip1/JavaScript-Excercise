//remove dup char from a string
//input: str = 'dipjyoti'
//output: str = 'dipjyot'

const str = 'dipjyoti';
let str1 = '', count = 0, move = 0;
for(let i=0; i<=str.length-1; i++){
    for(let j=0; j<=str.length-1; j++){
        if(str[i]===str[move]){
            count++;
            move++;
        }
        else{
            move++;
        }
    }
    if(count==1)
        str1 += str[i];
    move = 0;
    count = 0;
}

console.log(str1);
