const express = require('express');
const router = express.Router();

const developerController= require("../controllers/developerController")
const batchController= require("../controllers/batchController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 
router.post("/batches", batchController.batches)
router.post("/developer", developerController.developer)
router.get("/scholarshipDev",developerController.scholarshipDev)
router.get("/getdeveloper",developerController. getdeveloper)

// router.put("/updateBook",bookController.updateBook)

module.exports = router;