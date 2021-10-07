import React from 'react'
import ProjectUI from './ProjectUI'
import './Project.css'
import Navbar from '../../../common/components/Navbar'
function Projects() {
    
    const DummyProjectInfo = [{
        id: "p1",
        title: "Need MERN stack developer to work on existing project",
        description: "Hello professionals, We need an experienced Freelancer MERN stack developer to add some CMS pages and make some UI changes in existing website. Please share the experience in the bid and let's start the work. Looking forward to award the project asap.",
        type: "Fixed-Price :",
        amount: " 500 USD"
    },
    {
        id: "p2",
        title: "Looking for nextjs expert",
        description: "Looking for a nextjs expert. I'm fairly new to React and am trying to send a file upload form to Google Cloud Storage.I've almost done it, but there are a few issues like the file is pixelated when it arrives on the server. I would love it if someone could tell me where I'm going wrong.I'm using Vercel for the site hosting, Google Cloud Storage for the image uploads, Formidable to parse the form, Filepond to upload the files, and NextJS for the framework.Would be ok to use blobs and just sent those via email attachment rather than upload to storage also.Been looking at this for the last few days so don't mind spending more than budget if really needed but hopefully it should be a quick fix",
        type: "Hourly : ",
        amount: " 50 USD / hr."
    
    }]

    return (
        
       <div>
           <Navbar />
           <ProjectUI projects={DummyProjectInfo} />
       </div>
            
       
    )
}

export default Projects