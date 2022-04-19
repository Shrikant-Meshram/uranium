const mongoose = require('mongoose');


const batchSchema = new mongoose.Schema( {
    name: String,
    program: {
        type: String,
        enum: ["backend","frontend"]
    },
     size : Number,
   


}, { timestamps: true });


module.exports = mongoose.model('batch', batchSchema)
