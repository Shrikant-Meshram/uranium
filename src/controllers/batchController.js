const res = require("express/lib/response")
const AuthorModel = require("../models/developerModel")
const batchModel= require("../models/batchModel")



const batches = async function (req, res) {
    const value = req.body;
    let saveValue = await batchModel.create(value);
    res.send({msg : saveValue})
}


    
    

module.exports.batches=batches