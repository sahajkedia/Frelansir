const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProposalSchema = new Schema({
    description:{
        required:true,
        type:String,
        maxlength:500,
        trim:true
    },
    file:{
        // type:File,
    }
}
)

module.exports = mongoose.model('Proposal',ProposalSchema)