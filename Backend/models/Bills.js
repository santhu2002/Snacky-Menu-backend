const mongoose = require('mongoose');
const { Schema } = mongoose;

const BillsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    totalprice:{
        type: Number,
        required:true,
        
    },
    billdata:{
        type : Array,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

const bills=mongoose.model('Bills',BillsSchema);
bills.createIndexes()
module.exports = bills