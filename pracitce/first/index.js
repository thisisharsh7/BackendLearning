const http = require("http");
const fs = require('fs');
var requests = require('requests');

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (movieVal, orgVal) => {
    let moviefull = movieVal.replace("{%movie%}", orgVal.Title);
    moviefull = moviefull.replace("{%detail%}", orgVal.Plot);
    moviefull = moviefull.replace("{%rating%}", orgVal.Rated);
    return moviefull;
}

const server = http.createServer((req, res) => {
    // console.log(req.url);//to get the url of the server 
    if (req.url === "/") {
        requests('https://omdbapi.com/?t=ram%20setu&apikey=af8f4979')
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                const rData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(rData);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
                console.log('end');
            });
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening on port number 80000");
})