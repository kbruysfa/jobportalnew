const mongoose = require("mongoose");
let schema = new mongoose.Schema(
  {
   fullname:{
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
    required:[true,'please enter the password'],
    unique:true
   },

   phoneNumber:{
    type:Number,
    required:[true,'please enter the phone num']
   },
   gender:{
    type:string,
    required
   },
   coverlettor:{
    type:string,
    required:[true,'enter the descripition of a job']
   },
   location:{
    type:string,
    default:addissababa
   },
   img: {
    data: Buffer,
    contentType: String
    },
    roles:{
      type:string,
      default:'user'
     },
    timestamps:true}
);

const user = mongoose.model("user", schema);
module.exports=user