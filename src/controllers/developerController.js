const developerModel= require("../models/developerModel")
const batchModel= require("../models/batchModel")

const developer= async function (req, res) {
    let dev = req.body
    let saveDev = await developerModel.create(dev)
    res.send({data: saveDev})
}

const scholarshipDev= async function (req, res) {
    let value = await developerModel.find({gender:"female",percentage: {$gte: 70}})
    res.send({data: value})
}


const getdeveloper = async function(req,res){
    const data = req.query.percentage;
    const data2 = req.query.Program;
    let batchName = await batchModel.find({Program:data2})
    let scholer = await developerModel.find({batch:batchName,percentage:{$gte:data}}).select({name: 1,gender : 1 ,percentage: 1,_id : 0})

     res.send({msg:scholer})
}

module.exports.developer= developer
module.exports.scholarshipDev=scholarshipDev
module.exports.getdeveloper= getdeveloper