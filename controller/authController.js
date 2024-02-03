const User = require('../model/User')

module.exports.signupGet = (req, res) => {
  res.render("signUp");
};

module.exports.loginGet = (req, res) => {
  res.render("logIn");
};

module.exports.signupPost = async (req, res) => {
const { email, password} = req.body;
 
  try{
  const user = await User.create({email,password})
  res.status(201).json(user)
  }catch(err){
    console.log(err.message)
res.status(400).send("Some error happened")
  }
};

module.exports.loginPost = async (req, res) => {
    const { email, password} = req.body;
     
      try{
      const user = await User.create({email,password})
      res.status(201).json(user)
      }catch(err){
        console.log(err.message)
    res.status(400).send("Some error happened")
      }
    };
    

