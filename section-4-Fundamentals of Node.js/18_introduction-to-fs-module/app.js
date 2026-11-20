import fs from "node:fs/promises";
import { clearInterval } from "node:timers";

// const contentBuffer = fs.readFileSync('./npx-serching-steps.txt',"8")
// const content = contentBuffer.toString();utf

// fs.readFile('./npx-serching-steps.txt', (err, data)=>{
//     const content = data.toString()
//     console.log(content);
// });

console.time()
let i = 0;
const timerId = setInterval(() => {
    console.log(i ++);
    if(i==15)
    {
        clearInterval(timerId);
        console.timeEnd();
    }
}, 5);

const a = await fs.readFile('./npx-serching-steps.txt', 'utf-8')
console.log("reding is done");
console.log("End");
