const job = require('../model/job model.js')
const jobmodel=require('../model/job model.js')
const createjobs=async(req,res)=>{
    const jobs=new job({ jobpostion:req.body.jobpostion,
        vacancynumber:req.body.vacancynumber, 
        vacanctspace:req.body.vacanctspace,
        jobdescripition:req.body.jobdescripition,
        location:req.body.location,
        Deadline:req.body.Deadline,
        education:req.body.education,
        skills:req.body.skills,
        exprerience:req.body.exprerience,
        jobtype:req.body.jobtype,
        salary:req.body.salary,
        Salarytype:req.body.Salarytype
})
try {
   
    if(!jobpostion ||!vacancynumber||!vacanctspace||!jobdescripition||!location||!Deadline||!education||!skills||!exprerience||!jobtype||!salary||!Salarytyp){
        res.statiues(201).send("please fill all the required fields") 

}
   await jobs.save()
}

 catch (err) {
   res.statue(201).json({msg:'un able to save'})}
}
const updatejobs=async(req,res,next)=>{
    const _id=req.parms.id;
    try {
        const jobs=job.findByIdAndUpdate({_id,new:true})
        if(!jobs){
            res.statues(201).send($jobs+'jobs not found')
        }
        await jobs.save()
        res.statues(201).json(jobs)
        res.statues(201).send($jobs+'updated successfully')
    } catch (err) {
        res.statues(404).send('unable to update')
    }
}
const deletejobs=async(req,res,next)=>{
    const _id=req.parms.id;
    try {
        const jobs=job.findByIdAndDelete({_id,new:true})
        if(!jobs){
            res.statues(201).send($jobs+'jobs not found')
        }
        await jobs.save()
        res.statues(201).send($new+'deleted successfully')
    } catch (err) {
        res.statues(404).send('unable to delete')
    }
}
