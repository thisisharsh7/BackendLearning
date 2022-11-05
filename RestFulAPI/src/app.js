const express = require('express');
require('./db/connection');
const Student = require('./Models/students');

const app = express();
const port = process.env.PORT || 3000;

//for creating post method
//for reading get method
//for updating put and patch method
//for deleting delete method 

// app.get('/', (req, res) => {
//     res.send('Welcome to the homepage');
// })

//create a new students
app.post("/students", (req, res) => {
    res.send('this is student api');
})

app.listen(port, () => {
    console.log(`connection is established at port no. ${port}`);
})