const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true,
        
    },
    tag:{
        type : String,
        default: "General"
    },
    date:{
        type:Date,
        default:Date.now
    },
})

const items=mongoose.model('items',NotesSchema);
items.createIndexes()
module.exports = items