const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    "userId":{
        type:ObjectId,
        ref:"User"
    },
	"productId":{
        type:ObjectId,
        ref:"Product"
    },
	"amount": 0,
	"isFreeAppUser": Boolean, 
	"date":Date

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users
