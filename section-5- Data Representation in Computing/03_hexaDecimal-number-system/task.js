'use strict'
const hexNum1 = 0x843;
const hexNum2 = 0x84A;
const hexNum3 = parseInt('84A', 16);

// console.log(hexNum3);

const digitsList1 = [7,3,2, 'A'];

function digitsToNumber(digits, redix = 10){
    return digits.reduce(
        (acc, curr, index) => {
            const digit = parseInt(curr, redix);
            return acc + digit * Math.pow(redix, index);
        },
        0
    );
}
console.log(digitsToNumber(digitsList1, 16));