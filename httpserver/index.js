//for creating a server 
//1.we requires a http module
//2. the http.createServer() method includes request and response parameters which is supplied by Node.js.
//3. the request object used to get information about the current HTTP request eg.. url, http
//4. response is the output
const fs = require('fs');
const http = require('http');//http module 
const server = http.createServer((req, res) => {
    // console.log(req.url);//to get the url of the server 

    const data = fs.readFileSync(`${__dirname}/API/index.json`, "utf-8");
    const objData = JSON.parse(data);
    if (req.url === "/") {
        res.end("hi harsh, hello from the other side");
    } else if (req.url === "/home") {
        res.end(`hi this is home page`);
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(`hi this is about page`);
    } else if (req.url === "/api") {

            res.end(objData[0].name);
        
    } else {
        res.writeHead(404, { "Content-type": "text/html" });//changing the status code to 404 error and document to html type
        res.end("<h1>404 error page. Page does not exist<h1>");
    }

});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening on port number 10000");
})