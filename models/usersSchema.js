//users  schema 
const mongoose =require('mongoose');
const userSchema =new mongoose.Schema({
userName:{type:String,require:true},
firstName:{type:String,require:true},
lastName:{type:String},
DOB:{type:Date,require:true},
email:{type:String,require:true},
password:{type:String,require:true},
isVerified:{type:Boolean,default:false}
},{timestamps:true});

const usersModel = mongoose.model('users',userSchema);
module.exports = usersModel;