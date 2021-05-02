const hrAgent = require("../models/hrAgent.model");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const Joi = require("joi");
const formidable = require("formidable");
var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: false }));
exports.createHrAgent = (req, res) => {
  /*
 let form = new formidable.IncomingForm();
  form.keepExtensions = true; 
  form.parse(req, (err, fields, files) => {
    
    if(err){
      console.log(err)
    }
        
        let hr = new hrAgent(fields);

        if(files.photo) {

            if(files.photo.size > Math.pow(10, 6)) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size !'
                })
            }

            hr.photo.data = fs.readFileSync(files.photo.path)
            hr.photo.contentType = files.photo.type
        }
   
        const schema = Joi.object({
            name: Joi.string().alphanum().required(),
            familyName: Joi.string().alphanum().required(),
            email: Joi.string().required(),
            phoneNumber: Joi.number(),
            password: Joi.string().required(),
            role: Joi.string().required()
        })

        const { error } = schema.validate(fields);

        if(error) {
            return res.status(400).json({
                error: error.details[0].message
            })
        }

        hr.save((err, hr) => {
            if(err) {
                return res.status(400).json({
                    err: 'User not sigup '
                })
            }

            res.json({
              hr
            })
        })

    })
  
  
  
  
  
  
  
  
  */
  console.log(req.body)
  hrAgent
    .create(req.body)
    .then((result) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.signin = (req, res) => {
  const { email, password } = req.body;
  hrAgent.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.json({
        error: "user not found with this email, please sign up",
      });
    }
    console.log(user);
    if (!user.authenticate(password)) {
      return res.json({
        error: "please check your password or email",
      });
    }
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.cookie("token", token, { expire: new Date() + 7459661 });
    const { _id, name, familyName, role } = user;
    return res.json({token, user: {_id, name, email, role}});
  });

  /*exports.signoutt=(req,res)=>{
    res.clearCookie('token')
    res.json({
    message:'you have been signout'
  })
  }*/
};
