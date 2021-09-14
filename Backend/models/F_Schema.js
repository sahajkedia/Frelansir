const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const frelansirSchema = new Schema({
    name : {
        type: String,
        required : true,
        minlength: 3
    },
    email : {
        type: String,
        required : true,
    },
    password : {
        type: String,
        
        minlength: 8,
        maxlength : 12
    },
    skillBasket : {
        type : String,
        min : 3,
        
    },
    passion : {
        type: String,
        
        maxlength : 120,
        minlength : 5
    },
    description : {
        type: String,
        
        minlength : 120,
        maxlength : 300
    },
    image : {
        type: String,
        
    }
});

module.exports = mongoose.model('Freelancer',frelansirSchema)