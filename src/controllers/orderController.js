const OrderModel= require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")


const createOrder= async function(req, res) {
    let freeUser = req.isFreeAppUser
    if(!req.body.userId && !req.body.productId) 
    return res.send({msg: "uderId and productId is required"})
    let userbalance = await UserModel.findOne({_id: req.body.userId}).select('balance')
    let productPrice = await ProductModel.findOne({_id: req.body.productId}).select('price')
    if(!freeUser && userbalance.balance >= productPrice.price){
        let newBalance = userbalance.balance - productPrice.price
        let orderData = await OrderModel.create({userId: req.body.userId,productId: req.body.productId,amount: productPrice.price,
     isFreeAppUser: false})
        await UserModel.findOneAndUpdate({_id: req.body.userId}, {balance: newBalance})
        res.send({msg: orderData})
    }
    if(!freeUser && userbalance.balance< productPrice.price) 
    return res.send({msg: "insufficient balance"})
    if(freeUser){
        let orderData = await OrderModel.create({userId: req.body.userId,productId: req.body.productId,
            amount: 0,isFreeAppUser: true })
        res.send({msg: orderData})

}
}

module.exports.createOrder =  createOrder




