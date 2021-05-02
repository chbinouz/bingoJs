const mongoose = require('mongoose');
const uuidv1 = require('uuidv1')
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
const hrSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true},
    familyName:{
        type:String,
        require:true,
        trim:true},
    login:{type:String,
        require:true,
        trim:true},
    hashed_password:{type:String,
        require:true,
    default:'125'},
    email:{type:String,
        require:true,
        trim:true,
        unique:true},
    phoneNumber:{type:Number,
        require:true},
    salt:{
        type:String
    },
    history:{
        type:Array,
        default:[]
    },
    img:{type:String,
        trim:true,
        require:true},
    role:{type:String,require:true}
    
},{timestamps:true})

hrSchema.virtual('password')
.set(function(password){
    this._password=password
    this.salt=uuidv1()
    this.hashed_password=this.hashedPassword(password)
})
.get(()=>{return this._password})
hrSchema.methods={
    hashedPassword:function(password){
        if(!password) return ''
        try {
            return SHA256(password);
        } catch (error) {
            return ''
        }
    },
    authenticate:function(plainText){
        try {
            console.log(plainText)
        return this.hashedPassword(plainText)==this.hashed_password
        } catch (error) {
            console.log(error)
        }
        
    }
}
module.exports=mongoose.model('hrAgent',hrSchema);
