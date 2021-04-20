exports.hrValidator=(req,res,next)=>{
    if(req.method=='POST')
    {req.check('name','name should be not empty').notEmpty()
    req.check('familyName','familyName should be not empty').notEmpty()
    req.check('password','password should be not empty').notEmpty().isLength({min:8,max:30}).withMessage('password at least must contains 8 caracters');
    req.check('login','login should be not empty').notEmpty().isLength({min:8,max:30}).withMessage('login at least must contains 8 caracters');
    req.check('email','email should be not empty').notEmpty().isEmail().withMessage('Email not valid')
    req.check('role','role should be not empty').notEmpty().isIn(['admin', 'hr']).withMessage('role must be [admin or hr ]')
    const errors =req.validationErrors()
    if(errors){
        res.json(errors)
    } 
    else{
        next()
    }}
    if(req.method=='PUT')
    {
        if(req.body.name || req.body.name=='')
        {req.check('name','name should be not empty').notEmpty()}
        if(req.body.familyName || req.body.familyName=='' ) 
        {req.check('familyName','familyName should be not empty').notEmpty()}
        if(req.body.password || req.body.password=='')
        {req.check('password','password should be not empty').notEmpty().isLength({min:8,max:30}).withMessage('password at least must contains 8 caracters')}
        if(req.body.login || req.body.login=='')
        {req.check('login','login should be not empty').notEmpty().isLength({min:8,max:30}).withMessage('login at least must contains 8 caracters')}
        if(req.body.email || req.body.email=='')
        {req.check('email','email should be not empty').notEmpty().isEmail().withMessage('Email not valid')}
        if(req.body.role || req.body.role=='')
        {req.check('role','role should be not empty').notEmpty().isIn(['admin', 'hr']).withMessage('role must be [admin or hr ]')}
        
        const errors =req.validationErrors() 
    if(errors){
        res.json(errors)
    } 
    else{
        next()
    }}
    
}