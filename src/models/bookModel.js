const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    bookName: { 
        type: String,
        required :true,
    }, 
    authorName: String, 
    tags: [String],
    pages : Number,
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year : {type : Number,default:2021}

  },  { timestamps: true });

    module.exports = mongoose.model('Book_Collection', BookSchema)
