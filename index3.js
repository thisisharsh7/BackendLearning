//file system in asychronous way
const fs = require('fs');

// fs.writeFile('aharsh.txt','I am a harsh and I am learning backend development now.',(err)=>{
//     console.log('file is created');
// });
//we pass them a function as an argument - a callback
//that gets called when that task is completes.
//it has an argument that tells whether the operation completed successfuly

//for appending the file
// fs.appendFile('aharsh.txt',' I am also doing an internship.',(err)=>{
//     console.log("file is append");
// })

fs.readFile('aharsh.txt','utf-8',(err, data)=>{
    console.log(data);
});