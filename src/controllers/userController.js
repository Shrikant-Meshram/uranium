const UserModel= require("../models/userModel")


const createUser= async function(req, res) {
const data = req.body
const Userinfo = await UserModel.create(data)
res.send({Msg : Userinfo})
}
const getUserData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUserData=getUserData
