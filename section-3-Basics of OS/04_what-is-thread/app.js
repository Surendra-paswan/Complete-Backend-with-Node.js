// console.time();
// for(let i = 0; i < 1000000000; i++){
//     if(i % 400000000 == 0)
//     console.log(`Running loop 1 ${i} `);
// }
// for(let i = 0; i < 1000000000; i++){
//     if(i % 400000000 == 0)
//     console.log(`Running loop 1 ${i} `);
// }
// for(let i = 0; i < 1000000000; i++){
//     if(i % 400000000 == 0)
//     console.log(`Running loop 1 ${i} `);
// }
// console.timeEnd(); 

const { Worker } = require('worker_threads');

new Worker('./a.js');
new Worker('./b.js');
new Worker('./c.js');