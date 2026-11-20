import { error } from 'node:console';
import { write } from 'node:fs';
import fs from 'node:fs/promises';

// const contentBuffer = await fs.readFile("C:\\Users\\Surendra Kumar Pasi\\Desktop\\file-1.txt");
// console.log(contentBuffer);

// fs.writefile('./file-1.txt', contentBuffer);

// const contentBuffer = await fs.readFile("./image.jpeg");

// fs.writeFile("C:\\Users\\Surendra Kumar Pasi\\Desktop\\node.jpeg",contentBuffer);

// setInterval(() => {
//     fs.writeFile('./file-1.txt', new Date().toLocaleTimeString());
// }, 500);


try{
   const contentBuffer = await fs.readFile("./images.jpeg");
    fs.writeFile("C:\\Users\\Surendra Kumar Pasi\\Desktop\\node.jpeg", contentBuffer);
}
catch(err){
    fs.appendFile(
        'error.log',
        `\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`
        );
    console.log(err);
    console.log('To see full error message go to ./error.log file.');
};
