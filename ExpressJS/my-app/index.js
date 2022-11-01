const express = require('express');
const app = express();

// app.get(route,callback);
//we create API through it easiy
// get - read 
// post - create
// put - update
// delete = delete

//req parameter handles the http request

app.get("/", (req, res) => {
    res.end("<h1>Hello from the express</h1>");
})
app.get("/about", (req, res) => {
    res.status(200).send("Hello from the express about");
})
app.get("/project", (req, res) => {
    res.send([{
        id: 1,
        name: "harsh",
    }, {
        id: 1,
        name: "harsh",
    }, {
        id: 1,
        name: "harsh",
    }
    ])
});

app.listen(8000, () => {
    console.log("listening to port 8000");
})