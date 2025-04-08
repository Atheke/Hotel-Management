const mongoose = require('mongoose');
const createUser = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    Phone:{
        type:String,
        required: true,
    },
    Gender:{
        type:String,
        required: true,
    },
    dashboard:{
             allergers:[String],
             appointment:[String],
             currentMedication:[String],
             healthInfo:[String],
             patientHistory:[String],
             symptoms:[String],
    },
    loginStatus:{
        type:Boolean
    }

});

module.exports = mongoose.model('UserData',createUser);