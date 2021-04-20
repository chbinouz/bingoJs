const expressJwt = require('express-jwt')

exports.requireSignIn = expressJwt({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:'auth'
})
exports.isAccess=(req,res,next)=>{
    if(req.auth.role=='admin'){
        return next()
    }
    isAccess = req.profile && req.auth && req.profile._id ==req.auth._id;
    if(!isAccess){
        console.log(isAccess)
       return res.status(401).json({error:'Acces denied'})
    }
     else {
         console.log(isAccess)
        next()}
    

}

exports.isAdmin=(req,res,next)=>{
    if(req.auth.role=='hr'){
        return res.status(401).json({
            error:'access reserved only for Admin'
        })
    }
    next()
}