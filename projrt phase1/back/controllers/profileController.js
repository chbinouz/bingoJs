const axios = require('axios')
const {parse, stringify} = require('flatted');
const Profiles = require("../models/profile");

exports.profile=(req, res, next) => {
    Profiles.find({}).then(
      (profile) => {
        if (profile.length != 0) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(profile);
        } else {
          let err = new Error("profiles is empty");
          err.status = 404;
          next(err);
        }
      },
      (err) => next(err).catch((err) => next(err))
    );
  }
  exports.getRecProfiles=(req,res)=>{
    const {id} =req.params
    console.log(id)
  
    axios.post(`http://127.0.0.1:5000/recommend/${id}`).then((result)=>{
      console.log(result.data)
      if(!result.data){
        return res.json({error:'this profie has not similaires profiles'})
      }
      //return res.json(result.data)
      let value=[];
      Object.keys(result.data).forEach(function(key) {
            if(result.data[key]!=id){
            value.push(result.data[key]) 
            }
  
      });
      console.log(value)
  
      Profiles.find({_id:{$in:value}}).then((recommandProfiles)=>{
        return res.json(recommandProfiles)
      })
      
      
  
  
  
  
  
       
    }).catch(err=>{console.log(err)})
  
  
  }