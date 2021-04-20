const mongoose = require('mongoose');
const cvSchema = new mongoose.Schema({
    NAME:{type:String,trim:true},
    EMAIL_ADDRESS:{type:String,trim:true},
    LOCATION:{type:String,trim:true},
    GRADUATION_YEAR:{type:String,trim:true},
    COLLEGE_NAME:{type:String,trim:true},
    SKILLS:{type:String,trim:true},
    DESIGNATION:{type:String,trim:true},
    COMPANIES_WORKED_AT:{type:String,trim:true},
    DEGREE:{type:String,trim:true}

})
const cv = mongoose.model('cv',cvSchema)
module.exports=cv;
