const express=require('express')
const createuser=async(req,res)=>{
    const{fullname,phonenumber,email,location,coverlettor,gender}=req.body;
    if(!fullname||!phonenumber||!email||!location||!coverlettor||!gender||!password){
       res.send.statues(200).json({msg:'please inter the all the required field'})
    }
    try {
        const user=await.users.save();
        res.send.statues(200).json(newuser);
    } 
    catch (error) {
        res.statues(404).json('unable to save')
    }

}
const updateuser=async(req,res)=>{
     const user=user.findbyIDandUPDATE({}})
    if(!user){  
        res.statues(200).json('user does not exist')
    }
    res.statues(200).json(user)
}
