const fs = require('fs');
const http = require('http');
const { Stream, Readable } = require('stream');

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // }) this shows all data once at a time does not create any stream



    const rstream = fs.createReadStream("input.txt");//creating reading stream for reading the data
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



