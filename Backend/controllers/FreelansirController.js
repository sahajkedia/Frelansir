const Freelancer = require ('../models/F_Schema')
const ProposalSchema = require('../models/ProposalSchema');
const { v4: uuidv4 } = require('uuid');
const JobPost = require('../models/JobSchema')
const FrelansirProfile = async(req,res,next)=> {
    const{ id } = req.body
    console.log(id)
    
    // try{
    //     freelancer = await Freelancer.findOne({id});
    //     console.log("Found")
    //     console.log(freelancer)
    // }
    // catch(err){
    //     console.log(err)
    //     res.status(400).json({
    //         "message":"could not complete your request"
    //     })
    //     return next(err)
    // }
    // if(!freelancer){
    //     const error = res.status(400).json({
    //         "message":"could not complete your request"
    //     })
    //     return next(error)
    // }
    // res.status(200).json({freelancer:freelancer})

    
    Freelancer.findOne({id}).exec((err,freelancer) => {
        if(err){
            return res.status(400).json({
                "message":"could not complete your request"
            })
        }
        else
            { console.log(freelancer)
                res.status(201).json({
                freelancer:freelancer
            })}
        
       
        
    })

}



const FrelansirSignup = async(req,res,next) => {
    
    const { name,email,password,skillbasket,passion,description } = req.body;
    
    if( !name || !password || !skillbasket || !email || !passion || !description  )
            return res.status(422).json({
                "error" : "Something is missing"
            })
            const userExists = await Freelancer.findOne({email})
            
        if(!userExists){

            const newfreelancer = new Freelancer({
                id : uuidv4(),
                name : name,
                email : email,
                password : password,
                skillbasket : skillbasket,
                passion : passion,
                description:description
            })
        
            
            try{
                await newfreelancer.save()
                res.status(201).json({
                    details:newfreelancer
                })
                console.log('Added')
            }
            catch(e){
                res.status(400).json({
                   "message":"could not complete your request"
               })
               console.log('error' + e)
               return next(e)
            }

        }
    else{
        return res.status(400).json({
            "message":"could not complete your request"
        })
    }
    
    
}


const FrelansirSignin = async (req,res,next)=> {
    const {email, password} = req.body;
    Freelancer.findOne({email}).exec((err,freelancer) => {
        if(err){
            console.log(err)
            res.status(400).json({
                "msg":"Create an account first"
            })
        }

        

        else{
            
                if(freelancer.password !== password){
                    res.status(400).json({
                        "msg":"Wrong Credentials"
                    })
                }
                else{
                    res.status(200).json({
                        "msg":"User Verified"
                    })
                }
        }
    })

    }
        





const FrelansirDashboard = (req,res,next)=> { 
    return res.send("Keep Looking");
}
const JobPosting = (req,res,next) => {
    
}


const Jobs = (req,res,next) => {
    try
    {
        const data = JobPost.find()
    }
    catch(error){
        res.json({
            msg:"Not Possible"
        })
        console.log(error)
    }
    res.status(200).json({
        data
    })
}

exports.FrelansirProfile = FrelansirProfile;
exports.FrelansirSignup= FrelansirSignup
exports.FrelansirSignin = FrelansirSignin
exports.FrelansirDashboard = FrelansirDashboard;
exports.Jobs = Jobs
exports.JobPosting = JobPosting