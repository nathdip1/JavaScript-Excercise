//string are same by case also

// let arr = ['mango','orange','banana','guava','mango','apple'];

// let s = new Set(arr);

// let a1 = [...s];
// console.log(a1);

//if strings are not in same case

const arr = ['mango','orAnge','banAna','guava','maNgo','apple','Mango'];

function cleanedArr(arr){

    let arr1 = [];
    // for(i=0; i<=arr.length-1; i++){
    //     let arrStr = '';
    //     arrStr = arr[i].toLowerCase();
    //     arr1.push(arrStr);
    // }

    for(let word of arr){
        // let arrStr = '';
        let arrStr = word.toLowerCase();
        arr1.push(arrStr);
    }

    let x = new Set(arr1);
    let arrCleaned = [...x];
    console.log(arrCleaned);

}

cleanedArr(arr);





