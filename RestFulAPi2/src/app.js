//representational state transfer application programming interface--->restAPI
//create read update delete
//post get (put patch) delete--->HTTP method

const express = require('express');
require('../src/db/conn');
const MensRanking = require('../src/models/mens');
const router = require('../src/routers/men');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);


app.get('/', async (req, res) => {
    res.send('Hello, harsh this side');
})
app.listen(port, () => {
    console.log(`connection is successfull at port no. ${port}`);
})
