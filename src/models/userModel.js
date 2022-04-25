const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted: {type:Boolean,deafult:false},
    age: Number,
    posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('SecondUser2', userSchema)
