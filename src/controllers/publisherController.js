const PublisherModel = require("../models/publisher")

const createPublisher= async function (req, res) {
    let publish = req.body
    let publishBook = await PublisherModel.create(publish)
    res.send({data: publishBook})
}
module.exports.createPublisher= createPublisher