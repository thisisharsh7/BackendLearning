const fs = require("fs");

// fs.mkdir('harsh',(err)=>{
//     console.log('folder created');
// });

// fs.writeFile('harsh/bio.txt','hi this is harsh',(err)=>{
//     console.log('file is created');
// })
// fs.appendFile('harsh/bio.txt',' I am a web developer',(err)=>{
//     console.log('file got append');
// })
// fs.readFile('harsh/bio.txt','utf-8',(err, data)=>{
//     console.log(data);
// })
// fs.rename('harsh/bio.txt','harsh/mybio.txt',(err)=>{
//     console.log('file renamed');
// })
// fs.unlink('harsh/mybio.txt',(err)=>{
//     console.log('file deleted');
// })
fs.rmdir('harsh',(err)=>{
    console.log('folder deleted');
})
