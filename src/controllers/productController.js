const ProductModel= require("../models/productModel")


const enterProduct= async function(req, res) {
const data = req.body
const Productinfo = await ProductModel.create(data)
res.send({Msg : Productinfo})
// const mod = req.header
// console.log("header is : ",mod)
}
const getProductData= async function (req, res) {
    let allproduct= await ProductModel.find()
    res.send({msg: allproduct})
}

module.exports.enterProduct= enterProduct
module.exports.getProductData=getProductData