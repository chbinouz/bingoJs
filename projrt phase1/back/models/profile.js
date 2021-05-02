const mongoose = require("mongoose");
const schema = mongoose.Schema;

const experienceSchema = new schema({
  job_title: {
    Type: String,
  },
  company_name: {
    Type: String,
  },
  joining_date: {
    Type: String,
  },
  exp: {
    Type: String,
  },
  location: {
    Type: String,
  },
});

const educationSchema = new schema({
  college_name: {
    Type: String,
  },
  degree_name: {
    Type: String,
  },
  stream: {
    Type: String,
  },
  degree_year: {
    Type: String,
  },
});
const similarProfileSchema = new schema({
  link: {
    Type: String,
  },
});

const profileSchema = new schema({
  link: {
    Type: String,
  },
  name: {
    Type: String,
  },
  location: {
    Type: String,
  },
  profile_title: {
    Type: String,
  },
  imgUrl: {
    Type: String,
  },
  experience: [experienceSchema],
  education: [educationSchema],
  realTimeLocation: {
    type: String,
  },
});

var profiles = mongoose.model("link", profileSchema);
module.exports = profiles;
