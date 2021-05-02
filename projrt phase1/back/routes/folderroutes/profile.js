var express = require('express');
var router = express.Router();
var profiles = require('../../models/foldermodels/profile.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  profiles.find(function(err, data){
    if (err) throw err;
    res.json(data);
  }).skip(req.query.page*10).limit(10);
}); 

router.get('/:id', function(req, res, next) {
  Profile.findById(req.params.id,function(err, data){
    if (err) throw err;
    res.json(data);
  });
});

router.get('/names/:name', function(req, res, next) {
  Profile.find({name: req.params.name},function(err, data){
    if (err) throw err;
    res.json(data);
  });
});
/*
router.post('/Addhr',async(req,res)=>{
  const name = req.body.name;
  const location = req.body.location;
  const profile_title = req.body.profile_title;
  const college_name = req.body.college_name;
  const degree_name = req.body.degree_name;
  const stream = req.body.stream;
  const degree_year = req.body.degree_year;
    
  
  let profile = new Profile({name: name,location: location,profile_title: profile_title,
    college_name: college_name,
    degree_name: degree_name,
    stream: stream,
    degree_year: degree_year,
  });
  profile.save()
  .then(profile=> {
    res.status(200).json({'contact':'Contact added successfully'});

  })
  .catch(err=>{
    res.status(400).send('Adding new contact failed');
    
  })
}) */

router.post('/Addhr',(req,res,next)=>{
  console.log(req.body)
  let prf = new profiles(req.body)
    prf.save().then(prof=>{
      console.log(prf);
    })
  .catch(err=>{
    next(err);
    
  })
}) 


router.patch('/Updatehr/:id',async (req,res,next)=>{
  try{
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    await Contact.save();
    res.send(contact);
  }catch (error) {
    res.status(500).send(error);
  }
})

router.delete("/Deletehr/:id", async(req,res,next)=>{
  try {
    const profile = await profiles.findByIdAndDelete(req.params.id);
    if (!profile) res.status(404).send("No contact found");
    res.status(200).send();
  }catch (error){
    res.status(500).send(error);
  }
})


module.exports = router;
