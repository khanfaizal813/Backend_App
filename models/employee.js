const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    }

}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports  = Employee

