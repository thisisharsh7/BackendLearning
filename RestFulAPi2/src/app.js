const express = require('express');
require('../src/db/conn');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('Hello, harsh this side');
})
app.listen(port, () => {
    console.log('connection is successfull at port no. 3000');
})