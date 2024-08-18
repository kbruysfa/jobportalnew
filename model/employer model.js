const mongoose = require("mongoose");
let schema = new mongoose.Schema(
  {
   companyname:{
    type:string,
    required:[true,'name is required ']
   },
    Email:{
      type:string,
      required:[true,'please enter the Email'],
      validator:validator.isEmail,
      unique:true
     }, 
     password:{
      type:string,
      required:[true,'please enter the Email'],
      unique:true
     },
 roles:{
  type:string,
  ref:'employer'
 },
 timestamp:true})
 
 const employer= mongoose.model("employer", schema);
 module.exports=employer;