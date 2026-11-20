// const environmentVariables = process.env;
// console.log(environmentVariables);

// it is use for creating environment variable in windows using node.js
// const {exec} = require('child_process');
// exec(`powershell -Command "setx newTestV 'Node.js code' /M"`)

// const environmentVariables = process.env;
// console.log(environmentVariables);


const fs = require('fs');

const fileData = fs.readFileSync("./.env").toString();
// console.log(fileData.split("\n"));

fileData.split(/\r?\n/).forEach((variable) => {
  const [key, value] = variable.split("=");
  process.env[key] = value; 
});

setInterval(() => {
    const a = process.env;
    console.log("hii");
}, 1000);


// Anurag sir 
// 199 for regex courese 
// coupen code: NODEREGEX