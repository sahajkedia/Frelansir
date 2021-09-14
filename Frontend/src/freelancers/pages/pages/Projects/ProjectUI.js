import React from 'react'
import './Project.css'
function ProjectUI(props) {
    return (
        <ul>
            {

                props.projects.map(item => {
                const {id,title,description,type,amount} = item
                
                return(
                    <div key={id} className="container">
                    <h1 className="title">
                        {title}
                    </h1>
             
                    <p className="des">
                        {description}
                    </p>

                    <div className="linear">

                        <h3>{type}</h3>
                        <h3>{amount}</h3>

                    </div>

                    <button class="btn success">Send Proposal</button>
               
           </div>
        )
    })
    }          
        </ul>
    )
}

export default ProjectUI


