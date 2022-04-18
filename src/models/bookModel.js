const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookname: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    },
     price : Number,
     ratings: Number,
     isHardCover :{
         type :Boolean,
         default:false
     },
     publisher_id: {
        type: ObjectId,
        ref: "Newpublisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('myNewBook', bookSchema)
