//defining document schema
const mongoose = require('mongoose');
const validator = require('validator');


//new schema defined below
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

//now creating the collection//it is a class
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;   