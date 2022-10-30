const fs = require('fs');//file system module
const http = require('http');//http module for any server request and response
const Stream = require('stream');//stream module

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // }) this shows all data once at a time does not create any stream



    const rstream = fs.createReadStream("input.txt");//creating reading stream for reading the data
    //it has four types data , end, error and finish
    // rstream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // });//reading and writing data one by one
    // rstream.on("end", () => {
    //     res.end();
    // })//when there is nothing to read we end the operation
    // rstream.on("error", (err) => {
    //     res.end("file not found");
    // })//if there is error we handle it using this


    // pipe event 
    rstream.pipe(res);

});

server.listen(8000, "127.0.0.1");



