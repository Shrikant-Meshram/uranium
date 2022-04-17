const { count } = require("console")

const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createNewAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createNewBook= async function (req, res) {
    let data= req.body

    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}
// 2
const allBooks=async function(req, res){
    const authorDetails= await authorModel.find({authorName:"Chetan Bhagat"})
    const id= authorDetails[0].author_id
    const bookName=await bookModel.find({author_id: id}).select({bookName:1})
    res.send({msg: bookName})

    const authorDetls= await authorModel.find({authorName:"Chetan Bhagat"})
const authorDet= await authorModel.findOne({authorName:"Chetan Bhagat"})
}
// 3
const updateBookPrice=async function(req, res){
    const bookDetails= await bookModel.find({bookName:"Two states"})
    const id= bookDetails[0].author_id
    const authName=await authorModel.find({author_id: id}).select({authorName:1, _id:0 })
    const bkname= bookDetails[0].bookName
    const upPrice=await bookModel.findOneAndUpdate({bookName:bkname},{price: 100},{new: true}).select({price:1, _id:0})
    res.send({msg:authName,upPrice })
} 
// 4
const authorsName=async function(req, res){
    const booksid= await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1 , _id:0})
    const id= booksid.map(fun => fun.author_id)
    let dummy=[]
    for(let i=0;i<id.length;i++)
    {
        let x=id[i]
        const auth=await authorModel.find({author_id: x}).select({authorName:1, _id:0 })
        dummy.push(auth)

    }
    const authorname=dummy.flat()
    res.send({msg:authorname })
}


module.exports.createNewAuthor=createNewAuthor
module.exports.createNewBook=createNewBook
module.exports.allBooks=allBooks
module.exports.updateBookPrice=updateBookPrice
module.exports.authorsName=authorsName




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
