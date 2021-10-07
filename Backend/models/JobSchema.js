const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const JobPostSchema = new Schema({
    title:{
        required:true,
        type:String,
        maxlength:120
    },
    description:{
        required:true,
        type:String,
        maxlength:500,
        trim:true
    },
    file:{
        type:File,
    },
    project_type:{
        type:String,
        required:true,
    },
    amount: {
        required:true,
        type:Number,
    }
}
)

module.exports = mongoose.model('JobPost',JobPostSchema)