const res = require("express/lib/response")
const AuthorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisher")


const createBook= async function (req, res) {
    let book = req.body
     if(book.author_id){
      if(book.publisher_id){ 
        let finddata2 = await publisherModel.findById({_id:req.body.publisher_id}) 
        let finddata = await AuthorModel.findById({_id:req.body.author_id})
        if(finddata)
        
        {
            if(finddata2){
            let savedData = await bookModel.create(book)
            
            res.send({msg:savedData})
            }
            else{
                res.send({msg : "publisher is not present"})
            }
        }
        else{
            res.send({msg :'author is not present'})
        }
   
    }
    else{
        res.send({msg : "publisher is not valid"})
    }
}
    else{
        res.send({msg: 'author_id must be present'})
    }
    
}




const getBooksDetails= async function (req, res) {
    let books = await bookModel.find().populate('author_id').populate('publisher_id')
    
    res.send({data: books})
}





const updateBook = async function(req,res){
    let check = await publisherModel.find({publishername : req.body.publisher}).select({_id:1})
    
        let specificBook  = await bookModel.updateMany({publisher : check}, {$set: {isHardcover: true}})
        res.send({msg : specificBook})
    }





const updatePrice= async function (req, res){
let data = await AuthorModel.find({rating:{$gt: 3.5}})
await bookModel.updateMany({author:data},{$inc:{price:10}})
let Uprice =await bookModel.find({author:data})

res.send({msg:Uprice})
}





    
    


// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createBook= createBook
module.exports.getBooksDetails=getBooksDetails
module.exports.updatePrice=updatePrice
module.exports.updateBook=updateBook
