const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const createUser = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    },
    viatls:{
        type:[],    
    },
    ask:{
        type: [],
    },
    lookseenfeel:{
        type: [],
    },
    classification:[{}],
});

module.exports = mongoose.model('AdminUser',createUser);