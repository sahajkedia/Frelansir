const dummyData = [{
    "name":"Sahaj",
    "id":"1",
    "skills": ["C++", "Python" , "JavaScript"],
    "job":
    {
        "specialization":"Web Developer",
        "past":5,
        "ongoing":2
    }
}]

const CLientProfile = (req,res,next)=> {
    const cid = req.params.cid;
   const client =  dummyData.find(c =>{
        return c.id===cid
    })
    res.send(client);
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