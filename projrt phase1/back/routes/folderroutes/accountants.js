var express = require('express');
var router = express.Router();
var accountants = require('../../models/foldermodels/accountants.model')

/* GET home page. */
router.get('/', function(req, res, next) {
    accountants.find(function(err, data){
    if (err) throw err;
    res.json(data);
  }).skip(req.query.page*10).limit(10);
}); 


router.post('/Addhr',(req,res,next)=>{
  console.log(req.body)
  let prf = new accountants(req.body)
    prf.save().then(prof=>{
      console.log(prf);
    })
  .catch(err=>{
    next(err);
    
  })
}) 



router.delete("/Deletehr/:id", async(req,res,next)=>{
  try {
    const profile = await accountants.findByIdAndDelete(req.params.id);
    if (!profile) res.status(404).send("No contact found");
    res.status(200).send();
  }catch (error){
    res.status(500).send(error);
  }
})


module.exports = router;