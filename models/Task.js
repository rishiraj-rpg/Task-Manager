const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'must provide a name'],
        maxlength:[20,'name cannot be more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task',TaskSchema)  // name and schema