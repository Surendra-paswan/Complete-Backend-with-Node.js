'use strict'
const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, 4];

// Octal Number System
const octalNum1 = 0o12;
const octalNum2 = 0o54322;


// const num = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000;
// const num2 = 7 * Math.pow(10,0) + 3 *  Math.pow(10,1)+ 4 * Math.pow(10,2);

function digitsToNumber(digits){
    let num = 0;
    digits.forEach((digit, index) => {
       num +=  digit * Math.pow(10, index);
    });
    return num;
}
// console.log(digitsToNumber(digitsList1));
console.log(octalNum2);


// let totalSum = 0;
// let multiplier = 1;

// for(let i = 0; i < digitsList.length; i++){
//     const sum = digitsList[i] * multiplier;
//     totalSum += sum;
//     multiplier *= 10;

//     console.log(sum);
// }
//     console.log('Result:-', totalSum);
