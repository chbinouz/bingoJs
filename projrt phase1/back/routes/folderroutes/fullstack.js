var express = require('express');
var router = express.Router();
var fullstack = require('../../models/foldermodels/fullstack.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  fullstack.find(function(err, data){
    if (err) throw err;
    res.json(data);
  }).skip(req.query.page*10).limit(10);
}); 


router.post('/Addhr',(req,res,next)=>{
  console.log(req.body)
  let prf = new fullstack(req.body)
    prf.save().then(prof=>{
      console.log(prf);
    })
  .catch(err=>{
    next(err);
    
  })
}) 



router.delete("/Deletehr/:id", async(req,res,next)=>{
  try {
    const profile = await fullstack.findByIdAndDelete(req.params.id);
    if (!profile) res.status(404).send("No contact found");
    res.status(200).send();
  }catch (error){
    res.status(500).send(error);
  }
})


module.exports = router;