// Longest word in a sentence

function longestWord(sentence){
    const words = sentence.split(" ");
    let maxLength = 0, longestWord = "";
    for(let word of words){
        if(word.length > maxLength){
            maxLength = word.length;
            longestWord = word;
        }
    }
    return longestWord;
}

const sentence = "This is a coding round";
console.log(longestWord(sentence));