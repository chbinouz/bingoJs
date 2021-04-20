const hrAgent=require('../models/hrAgent.model')
const jwt = require('jsonwebtoken');

exports.createHrAgent=(req,res)=>{
    hrAgent.create(req.body).then((result)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
  }).catch((err)=>{console.log(err)})
  }
  exports.signin=(req,res)=>{
    const {email,password}=req.body;
    hrAgent.findOne({email},(err,user)=>{
      if(err || !user){
        return res.status(400).json({
          error:'user not found with this email, please sign up'
        })
      }
      console.log(user)
      if(!user.authenticate(password)){
        return res.status(401).json({
          error:'please check your password or email'
        })
      }
      const token = jwt.sign({_id: user._id, role: user.role},process.env.JWT_SECRET);
      res.cookie('token',token,{expire:new Date() + 7459661 })
      const {_id,name,familyName,role}=user
      return res.json({
        token,user:{_id,name,familyName,role}
      })
    })
  
   /*exports.signoutt=(req,res)=>{
    res.clearCookie('token')
    res.json({
    message:'you have been signout'
  })
  }*/
  
    
  }
