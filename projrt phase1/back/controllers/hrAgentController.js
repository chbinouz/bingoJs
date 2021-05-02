const hrAgent=require('../models/hrAgent.model')
const bodyParser = require("body-parser");
const { result } = require('lodash');

exports.getAllHrAgent=(req, res) => {
    hrAgent.find()
      .then(hr => res.json(hr))
      .catch(err => res.status(400).json('Error: ' + err));
  }
exports.getHrAgentById=(req, res) => {
    hrAgent.findById(req.params.id)
      .then(hr => res.json(hr))
      .catch(err => res.status(400).json('Error: ' + err));
  }
exports.deleteHrAgent=(req, res) => {
    hrAgent.findByIdAndDelete(req.params.id)
      .then(() => res.json('HrAgent deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  }

exports.updateHrAgent=async(req, res) => {
  //const {name,familyName,login,password,email,phoneNumber,img,history}=req.body
   let result= await hrAgent.findById(req.params.id)
    if(req.body.name){
      result.name=req.body.name
    }
    if(req.body.familyName){
      result.familyName=req.body.familyName
    }
    if(req.body.password){
      result.password=req.body.password
    }
    if(req.body.email){
      result.email=req.body.email
    }
    if(req.body.password){
      result.password=req.body.password
    }
    if(req.body.phoneNumber){
      result.phoneNumber=req.body.phoneNumber
    }
  
    if(req.body.history){
      result.history=req.body.history
    }
    
    result.save().then((reslt)=>res.json(reslt))
  }

  exports.getProfileUser = (req,res)=>{
    res.json({
      user:req.profile
    })
  }
  
