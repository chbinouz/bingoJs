var express = require('express');
var app=express()
const bodyParser = require("body-parser");
app.use(express.json());
var hrAgentRouter = express.Router();
const {hrValidator} = require('../middlewares/hrValidatorMiddl') 
const hrAgent=require('../models/hrAgent.model')
const {requireSignIn,isAccess,isAdmin} = require('../middlewares/auth')
const {userById} = require('../middlewares/user')
const {getAllHrAgent,getHrAgentById,deleteHrAgent,updateHrAgent,getProfileUser}=require('../controllers/hrAgentController')

hrAgentRouter.route('/getHr').get(getAllHrAgent);
hrAgentRouter.route('/getHr/:id').get(getHrAgentById);
hrAgentRouter.route('/deleteHr/:id').delete(deleteHrAgent);
hrAgentRouter.route('/updateHr/:id').put(hrValidator,updateHrAgent);
hrAgentRouter.route('/profile/:hrId').get(requireSignIn,isAccess,getProfileUser);
hrAgentRouter.param('hrId',userById) 
hrAgentRouter.get('/hello',requireSignIn,(req,res)=>{
    res.send('hello in your app') 
})



module.exports=hrAgentRouter





