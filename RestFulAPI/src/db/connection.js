const mongoose = require('mongoose');


//esablishing a connection to mongoose
mongoose.connect("mongodb://localhost:27017/students-api").then(() => {
    console.log("connection is successfull");
}).catch((e) => {
    console.log("no connection");
});