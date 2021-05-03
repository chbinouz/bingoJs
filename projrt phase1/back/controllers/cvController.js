//var express = require("express");
//var app = express();
//const fileUpload = require('express-fileupload');
const fs = require('fs')
const axios = require('axios')
const pdfparse= require('pdf-parse')
const profiles = require('../models/profile')
const cv = require('../models/cv.model')

//app.use(fileUpload());

exports.uploadCv=(req, res) => {
    console.log('debut programme')
    if (!req.files) {
        console.log(req.files)
        return res.status(500).send({ msg: "file is not found" })
    }  
        // accessing the file
    const myFile = req.files.file;
    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/../public/cvFolder/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        const pdffile=fs.readFileSync(`${__dirname}/../public/cvFolder/${myFile.name}`)
        //get the information

        pdfparse(pdffile).then((data)=>{
        console.log(data.text)
        dataResume = data.text.replace(/\n|\r/g,'');
        const dataCv={'data':dataResume}
        axios.post('http://127.0.0.1:5000/cv',dataCv).then(response=>{
            //console.log(response.data)
            let value;
            Object.keys(response.data).forEach(function(key) {
                 value = response.data[key];

            });
            
            console.log(response.data)
            cv.create(response.data).then((result)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(result);
            }).catch((err)=>{console.log(err)})



    exports.previewCv=(req,res)=>{
        console.log("i'm in preview rouute")
        console.log(req.body.name)
        profiles.find({name:/.*`${req.body.name}`.*/i/*,"experience.company_name":req.params.company*/})
        .then(result=>{
            console.log(result)
             res.json(result)
        })
        .catch((err)=>{
              res.json(err)
        })
        }

        


            
           /* const name=response.data.name
            const email=response.data
            const login=req.body.login
            const password=req.body.password
            const email=req.body.email
            const phoneNumber=Number(req.body.phoneNumber)
            const img=req.body.img
        const cvProfile= new cv({
        name,familyName,login,password,email,phoneNumber,img
        })
     hr.save().then(() => res.json('User added!'))
     .catch(err => res.status(400).json('Error: ' + err))
    }*/
            //res.send(response.data)
            
            //selectedCv.save().then(() => res.json('User added!'))
             //.catch(err => res.status(400).json('Error: ' + err))
            

        })
        
        })
        
    });
}