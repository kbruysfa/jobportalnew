const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { isNumeric } = require("validator");
let schema = new mongoose.Schema(
  {
   jobpostion:{
    type:string,
    required:[true,'please enter the postion']
   },
   vacancynumber:{
    type:number,
    required:false
   },
    vacanctspace:{
    type:number,
    required:true
   },

   jobdescripition:{
    type:string,
    required:[true,'enter the descripition of a job']
   },
   location:{
    type:string,
    required:true,
    default:addissababa
   },
   Deadline:{
    type:number,
    required:[true,'enter the dealine'],
   },  
    education:{
    type:string,
    required:[true,'please enter the education']
   },
   skills:{
    type:string,
    required:[true,'please enter required skills']
   },
   exprerience:{
    type:number,
    required:true
   },
   jobpostion:{
    type:string,
    required:[true,'please enter the postion']
   },
   jobtype:{
    type:string,
    enum:['onsite-fulltime','onsite-part time','remote-full-time','remote-part-time']
   },
   salary:{
    type:Number,
    required:[true,'enter the salary']
   },    
   Salarytype:{
    type:string,
    required:[true,'monthly','weekly','hourly','daily']
   },
   timeStamp:true
   }
);


const job = mongoose.model("jobs", schema);
module.exports=job