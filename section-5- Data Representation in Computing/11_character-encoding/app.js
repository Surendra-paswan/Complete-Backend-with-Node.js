import fs from 'fs/promises'

const contentBuffer = await fs.readFile('text.txt');

console.dir(contentBuffer);
console.log(contentBuffer);


let binaryString = "";
contentBuffer.forEach((el) => {

    binaryString += el.toString(2) + " ";
})
console.log(binaryString);
