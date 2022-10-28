//operating system module 
const os = require('os');

//how much bit is your operating system
console.log(os.arch());
//free memory 
const freeMem = os.freemem(); //it is in bytes
console.log(`${freeMem / 1024 / 1024 / 1024}`); //changes to gb

//total memory
const totalMem = os.totalmem(); //it is in bytes
console.log(`${totalMem / 1024 / 1024 / 1024}`); //changes to gb

console.log(os.hostname());//for host 
console.log(os.platform());//which platform windows linux etc..
console.log(os.tmpdir());//which directory
console.log(os.type());//which window