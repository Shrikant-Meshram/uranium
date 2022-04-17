const BookModel= require("../models/BookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getBooksInYear= async function (req, res) {
    let data= req.body.year
    let savedData= await BookModel.find({ year:data})
    res.send({msg: savedData})
}
const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,authorName:1})
    res.send({msg: allBooks})
}
const getParticularBook= async function (req, res) {
    let vari =req.body 
    let allBooks= await BookModel.find(vari)
    res.send({msg: allBooks})
}

    const getXINRBooks = async function (req, res) {
        let allBooks= await BookModel.find( { "prices.indianPrice":
           { $in: ["1000INR","2000INR","500INR"]}})
        res.send({msg: allBooks})
    }
    const getRandomBooks = async function (req, res) {
        let allBooks= await BookModel.find( { $or: [ { stockAvailable : true } , { pages: { $gt:  500}}]  })
        res.send({msg: allBooks})
    }

const getBookData= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.bookList=bookList
module.exports.getParticularBook=getParticularBook
module.exports.getXINRBooks=getXINRBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.getBookData= getBookData
module.exports.getRandomBooks=getRandomBooks