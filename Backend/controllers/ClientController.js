import ProposalSchema from "../models/ProposalSchema";
const CLientProfile = async(req,res,next)=> {
    const cid = req.params.cid;
    let client;
    
    try{
        client = await client.findById(cid);
        
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            "message":"could not complete your request"
        })
        return next(err)
    }
    if(!client){
        const error = res.status(400).json({
            "message":"could not complete your request"
        })
        return next(err)
    }
    res.json({client:client})
}

const CLientSignup = (req,res,next)=> {
    return res.send("Signup is a good idea for ya!");
}

const CLientSignin = (req,res,next)=> {
    return res.send("Signin is a good idea for ya!");
}

const CLientDashboard = (req,res,next)=> { 
    const cid = req.params.cid
    const jobs = dummyData.filter(c => {
        return c.id === cid
    }) 
   
    return res.send(jobs)
}


exports.CLientProfile = CLientProfile;
exports.CLientSignup= CLientSignup
exports.CLientSignin = CLientSignin
exports.CLientDashboard = CLientDashboard;