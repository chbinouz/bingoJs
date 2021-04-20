const express = require('express');
const router = express.Router();
const {createHrAgent,signin}=require('../controllers/authController')
const {hrValidator} = require('../middlewares/hrValidatorMiddl')


router.route('/signup').post(hrValidator,createHrAgent);
router.route('/signin').post(signin);
router.route('/signout').get((req,res)=>{
  res.clearCookie('token')
  res.json({
  message:'you have been signout'
})
});
module.exports = router
