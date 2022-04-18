const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishercontroller = require("../controllers/publishercontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 
router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher",publishercontroller.createPublisher)
router.post("/createBook", bookController.createBook  )
router.get("/getBooksDetails",bookController.getBooksDetails)
router.put("/updatePrice",bookController.updatePrice)
router.put("/updateBook",bookController.updateBook)

module.exports = router;