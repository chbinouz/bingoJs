const mongoose = require("mongoose");
const schema = mongoose.Schema;

const experienceSchema = new mongoose.Schema({
  job_title: {
    Type: String
  },
  company_name: {
    Type: String
  },
  joining_date: {
    Type: String
  },
  exp: {
    Type: String
  },
  location: {
    Type: String
  }
});

const educationSchema = new schema({
  college_name: {
    Type: String
  },
  degree_name: {
    Type: String
  },
  stream: {
    Type: String
  },
  degree_year: {
    Type: String
  }
});
const similarProfileSchema = new schema({
  link: {
    Type: Array,
  },
});

const profileSchema = new schema({
  link: String
  ,
  name: String
  ,
  location:  String
  ,
  profile_title:  String
  ,
  imgUrl:  String,
  
  experience : [{
    job_title:  String
    ,
    company_name:  String
    ,
    joining_date:String
    ,
    exp: String
    ,
    location: String
    
  }],
  education : [{
    college_name: String
    ,
    degree_name:  String
    ,
    stream: String
    ,
    degree_year:  String
    ,

  }],
  semilar_profiles :[Array],
  
  
});

var financialmodelers = mongoose.model('financialmodelers',profileSchema);
module.exports = financialmodelers;