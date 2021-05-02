const profiles=require('../models/profile')


exports.previewCv=(req,res)=>{
    profiles.find({NAME:req.params.name,COMPANIES_WORKED_AT:req.params.COMPANIES_WORKED_AT})
    .then(result=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
}