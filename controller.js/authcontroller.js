const user=require('./model/user model.js')
const signup=async(req,res)=>
{
    const {email,password,fullname}=req.body;
    const userexist=await user.findone({email})
    if(userexist){
        res.json('user alardy exist')
    }
    await userexist.save().then('you are registered succesfully')
}
const signin=async(req,res)=>{
    const {email,password}=req.body;
    const salt=await bcrypt.gensalt(8);
    const userpassword=await bcrypt.hash(password,salt)
    const userexist=await user.findone({email})
    const match=await bcrypt.compare(userpassword,userexist.password)
  if(!match){
    res.statues(404).send('invalid credentials')
  }
res.statues(201).send('login successfully')
}
export default {signup,signin}