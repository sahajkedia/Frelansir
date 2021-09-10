const Freelancer = require ('../models/F_Schema')


const FrelansirProfile = async(req,res,next)=> {
    const fid = req.params.fid;
    let freelancer;
    
    try{
        freelancer = await Freelancer.findById(fid);
        
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            "message":"could not complete your request"
        })
        return next(err)
    }
    if(!freelancer){
        const error = res.status(400).json({
            "message":"could not complete your request"
        })
        return next(err)
    }
    res.json({freelancer:freelancer})
}



const FrelansirSignup = async(req,res,next) => {

    const { fullname,email,password,skillbasket,passion,description } = req.body;
    

    const newfreelancer = new Freelancer({
        fullname,
        email,
        password,
        skillbasket,
        passion,
        description
    })
    try{
        await newfreelancer.save()
        res.status(201).json({
            details:newfreelancer
        })
    }
    catch(e){
        res.status(400).json({
           "message":"could not complete your request"
       })
       return next(e)
    }
    
}


const FrelansirSignin = (req,res,next)=> {
    return res.send("Signin is a good idea for ya!");
}



const FrelansirDashboard = (req,res,next)=> { 
    return res.send("Keep Looking");
}



exports.FrelansirProfile = FrelansirProfile;
exports.FrelansirSignup= FrelansirSignup
exports.FrelansirSignin = FrelansirSignin
exports.FrelansirDashboard = FrelansirDashboard;