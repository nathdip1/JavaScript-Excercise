// How to check if two strings are rotations of each other?

// To check if two strings are rotations of each other, 
// the most efficient method is to concatenate one of the strings 
// with itself and check if the other string is a substring of this 
// concatenated string. This approach leverages the fact that if two strings are rotations of each other, one string will always appear as a substring of the other string concatenated with itself.

const str1 = 'xyz';
const str2 = 'zxy';

const concatenated = str1 + str1;
let isRotation = concatenated.includes(str2);

if (isRotation) {
    console.log('True');
} else {
    console.log('False');
}
