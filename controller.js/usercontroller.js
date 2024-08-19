const express=require('express')
const App=express()
const createuser=async(req,res)=>{
    const user=new user({
        fullname:req.body.fullname,
        phonenumber:req.bod.phonenumber,
        email:req.body.email,
        location:req.body.location,
        
    })
    if(fullname.isEmpty||phonenumber.isEmpty||email.isEmpty||location.isEmpty||coverlettor.isEmpty||gender.isEmpty||password.isEmpty){
       res.statues(200).json({msg:'please inter the all the required field'})
    }
    try {
        const user=await.newuser.save();
        res.send.statues(200).json(user);
    } 
    catch (error) {
        res.statues(404).json('unable to save')
    }

}
const updateuser=async(req,res,next)=>{
    const{id}=req.parms.id
     const user=user.findbyIDandUPDATE({id,new:true})
    if(!user){
        res.statues(200).json('user does not exist')
    }
    next('sucessfully updated')
    res.statues(200).json(user)
}
const deleteuser=async(req,res,next)=>{
    const{id}=req.parms.id
     const user=user.findbyIDandDELETE({id,new:true})
    if(!user){
        res.statues(200).json('user does not exist')
    }
    next('sucessfully deleted')
    res.statues(200).json(user)
}

const getuser=async(req,res,next)=>{
    const{id}=req.parms.id
     const user=user.findbyID(_id)
    if(!user){
        res.statues(200).json({user} +' does not exist')
    }
    res.statues(200).json(user)
}
