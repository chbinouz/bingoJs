const hrAgent = require('../models/hrAgent.model');

exports.userById=(req,res,next,id)=>{
    hrAgent.findById(id).exec((err,user)=>{
        if(err || !user){
            res.status(404).json({
                error:'user not found'
            })
        } 
        req.profile=user;
        next();
    })
}
