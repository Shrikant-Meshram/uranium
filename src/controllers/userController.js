const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req,res) {
 try{
  let data = req.body;
  if(Object.keys(data).length != 0){
  let savedData = await userModel.create(data);
  res.status(201).send({msg:savedData})
  }
  
  else res.status(400).send({ msg: "BAD REQUIST" });
}
catch(error){
  console.log("This is the Error : ",error.msg)
  res.status(500).send({msg: "Error",Error:error.message})
}
}


const loginUser = async function (req, res) {
  try{
    let userName = req.body.emailId;
  let password = req.body.password;
  
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({status: false,msg: "username or the password is not corerct", });
    let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "uranium",
      organisation: "FunctionUp",
    },
    "functionup-uranium"
  );

  res.status(201).send({ status: true, token: token });
}
catch(error){
  console.log("This is the Error : ",error.msg)
  res.status(500).send({msg: "Error",Error:error.message})
};
}


const getUserData = async function (req, res) {
  
   try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
    res.status(400).send({msg: "BAD REQUEST" });
   }
  else{
  res.send({ status: true, data: userDetails });
}
   }
catch(error){
  console.log("This is the Error : ",error.msg)
  res.status(500).send({msg: "Error",Error:error.message})
};
}

const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  if(Object.keys(userData).length !=0){
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: true, data: updatedUser });
}
else{
  res.status(400).send({ msg: "BAD REQUIST" })
}
}
catch(error){
  console.log("This is the Error : ",error.msg)
  res.status(500).send({msg: "Error",Error:error.message})
};
}





const deletedUser = async function(req, res) {    
  try{
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.send({status: true, data: updatedUser})
}
catch(error){
  console.log("This is the Error : ",error.msg)
  res.status(500).send({msg: "Error",Error:error.message})
};
}

   








const postMessage = async function (req, res) {
    let message = req.body.message    
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    let userToBeModified = req.params.userId
    
    let userLoggedIn = decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
   return res.send({status: true, data: updatedUser})
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletedUser = deletedUser,
module.exports.postMessage = postMessage