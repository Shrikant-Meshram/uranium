const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mdw = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",mdw.auth,userController.getUserData)

router.put("/users/:userId", mdw.auth,userController.updateUser)
router.delete("/users/:userId",mdw.auth, userController.deletedUser)

module.exports = router;