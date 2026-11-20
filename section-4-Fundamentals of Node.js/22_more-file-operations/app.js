import { readFile } from 'node:fs';
import fs from 'node:fs/promises';
// Rename method is used to move and rename files.
// await rename("image.jpeg", "laptops.jpeg");
// fs.rename("src", "build");
// fs.rename("app.js", "C:\\Users\\Surendra Kumar Pasi\\Desktop\\sc.js");
//  fs.copyFile("app.js", "C:\\Users\\Surendra Kumar Pasi\\Desktop\\script.js");
//  fs.cp("./src", "C:\\Users\\Surendra Kumar Pasi\\Desktop\\src", { recursive : true});
// fs.unlink("laptops.jpeg");
// fs.rm("src", {recursive: true});
// fs.writeFile("style.css", '');
// fs.appendFile('stylesd.css', '');
// fs.mkdir("test");
// fs.appendFile('file.txt', 'hi');
// const stats = await stat("build");
// console.log(stats);
 
fs.watch("file.txt", async (eventType) => {
  if (eventType === "change") {
    console.log(await readFile("file.txt", "utf-8"));
  }
});


// console.log("Renamed");