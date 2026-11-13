const b = loadModule("./math.js");
// const {sum} = loadModule("./sum.js");

// console.log(sum(1, 2, 3, 4, 5));

// console.log(b);

function loadModule(path){
    const fs = require("fs");
    const fileContent = fs.readFileSync(path).toString();
    return (function (send) {
        eval(fileContent)
        console.log(send);
    })({});
}