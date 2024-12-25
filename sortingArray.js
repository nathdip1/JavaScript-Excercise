// Sorting array 
const arr = [4,22,12,32,27];
// expected result = 12,22,27,32,44

function sortArr(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<=arr.length-1; j++){
            const temp = arr[j];
            if(arr[j]>arr[j+1]){
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        

    }
    return arr;
    
}

console.log(sortArr(arr));

