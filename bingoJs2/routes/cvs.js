
const {uploadCv,previewCv}=require('../controllers/cvController')
const express = require('express');
const profiles = require('../models/profile')

// file upload api
var cvRouter = express.Router();
cvRouter.route('/upload').post(uploadCv)
cvRouter.route('/preview').post((req,res)=>{
    console.log(req.body.name)
    profiles.find({name:req.body.name,"experience.company_name":req.body.company})
    .then(result=>{
        console.log(result)
        res.json(result)
    })
    .catch((err)=>{
          res.json(err)
    })
    })


module.exports=cvRouter 