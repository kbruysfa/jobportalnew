const express=require('express')
const router=express.Router();
const{createuser,updateuser,deleteuser,getuser}=require('../controller/usercontroller')
router.get('/getuser',getuser)
router.delete('/deleteuser/:id',deleteuser)
router.put('/updateuser/:id',updateuser)
router.post('/createuser',createuser)
module.exports= router 