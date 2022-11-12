const mongoose = require('mongoose');

//structure define
const mensSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    }
})

//collection create
const MensRanking = mongoose.model('MenRanking', mensSchema);

module.exports = MensRanking;
