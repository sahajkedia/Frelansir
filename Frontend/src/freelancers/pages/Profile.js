import React,{useEffect} from 'react'
import Navbar from '../../common/components/Navbar'
import img from './sahajgop.jpg'
import './style.css'
function FreelancerProfile(props) {

    

    useEffect(()=>{
        const email = props.email
        console.log(email)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(email)
      }
    
        fetch('http://localhost:4000/api/frelansir/profile',requestOptions)
        .then(res => console.log(res))
    },[])

  
    

    return (
//         <div>
//             <Navbar />
//             This is a freelancer profile.
//             <h1>
//                 Sahaj Kedia
//             </h1>
//             <h2>
//                 Web Developer
//             </h2>
//             <h2>
//             Developer
// $30.00/hr

// FOUNDER : FUSIS LABS

// Whether you have a design in your mind or a professional design mock up I can convert it to an actual web page. Be it a start up or school project I can make professional websites from scratch.

// What can I offer?
// • I can convert your design mock ups to web pages.
// • I can make full stack web apps.
// • I can make RESTful APIs.
// • I can build the face of your business.
// • I can create high converting landing pages.
// • I can make your existing website responsive.
// • I can optimise your code to make your website load faster.
// • I can do your web development school projects.

// Expertise:
// Java
// ReactJs
// NodeJs
// Appsheet


// Why hire me?
// I write clean and easy to read code.
// I communicate! I will give every detail about the progress of the project.
// I have worked with plenty of clients and have earned great experience in this field.


//             </h2>
//             <p>
                
// javascript
// Java
// C++ Programming
// MongoDB
// NodeJS
// ExpressJS
// ReactJS
//             </p>
        // </div>


        <>
    <Navbar />
<div className="container bootstrap snippets bootdey">
    
    <div className="row">
        <div className="col-md-12">
            <div className="grid profile">
                <div className="grid-header">
                    <div className="col-xs-2">
                        <img src={img} className="img-circle" alt="logo" />
                    </div>
                    <div className="col-xs-7">
                        <h3>Sahaj Kedia</h3>
                        
                        <p>Website Developer, Programmer</p><br />
                        <p>FOUNDER : FUSIS LABS</p>
                        <p> Whether you have a design in your mind or a professional design mock up I can convert it to an actual web page. Be it a start up or school project I can make professional websites from scratch.</p><br />
                        <h5>What can I offer?</h5><br />
                        <ul>
                        <li>• I can convert your design mock ups to web pages.</li>
                        <li> • I can make full stack web apps.</li>
                        <li> • I can make RESTful APIs.</li>
                        <li> • I can build the face of your business.</li>
                        <li> • I can create high converting landing pages.</li>
                        <li> • I can make your existing website responsive.</li>
                        <li> • I can optimise your code to make your website load faster.</li>
                        <li> • I can do your web development school projects.</li>
                        </ul>
                    </div>
                    <div className="col-xs-3 text-right">
                        <p>
                            <a href="https://SahajKedia.com" title="Everyone can see your profile">
                                <i className="fa fa-globe"></i> SahajKedia.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="grid-body">
                    <div className="tab-content">
                      
                        <div className="tab-pane active" id="profile">
                            <p className="lead">My Profile</p>
                            <hr />
                            <div className="row">
                                <div className="col-md-6">
                                    <p><strong>Email:</strong> <a href="xyz@gmai.com">SahajKedia@gmail.com</a></p>
                                    <p><strong>Website:</strong> <a href="Sahajkedia.com">SahajKedia.com</a></p>
                                    <p><strong>About:</strong> Web Designer / Web Developer</p>
                                    <p><strong>Joined on:</strong> July 24<sup>th</sup>, 2018</p>
                                    <p><strong>Hobbies:</strong> Read books, Reseach internet, learn history, making website</p>
                                    <p><strong>Skills:</strong> <span className="label label-primary">HTML</span>, <span className="label label-primary">CSS</span>, <span className="label label-primary">PHYTON</span>, <span className="label label-primary">C</span>, <span className="label label-primary">JAVASCRIPT</span></p>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>Address:</strong> Bhavanipur, Purnia, Bihar,</p>
                                    <p><strong>Phone:</strong> (+885) 09666686371</p>
                                    <p><strong>Phone + Ext:</strong> (123) 3433433 34333</p>
                                    <p><strong>Reputation:</strong> <span className="text-green"><i className="fa fa-angle-up"></i> 12000</span></p>
                                    <p><strong>Rating:</strong> <span className="text-yellow"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span></p>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-sm-4 stats">
                                <h1>GitHub</h1>
                                <span>Followers</span>
                                <button className="btn btn-success"><i className="fa fa-plus-circle"></i> Follow</button>
                            </div>
                            <div className="col-sm-4 stats">
                                <h1>Instagram</h1>
                                <span>Following</span>
                                <button className="btn btn-info"><i className="fa fa-facebook"></i> View Profile </button>
                            </div>
                            <div className="col-sm-4 stats">
                                <h1>YouTube</h1>
                                <span>Subscribers</span>
                                <button className="btn btn-danger"><i className="fa fa-youtube"></i> Subscribe </button>
                            </div>
                        </div>
                    </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div></div></>
    )
}

export default FreelancerProfile


