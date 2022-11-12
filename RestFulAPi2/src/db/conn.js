const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/olympics')
    .then(() => {
        console.log('mongodb connection successfull');
    }).catch((err) => {
        console.log('no connection');
    });
