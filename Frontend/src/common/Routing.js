import React from 'react'
import { BrowserRouter as Router, Route , Redirect, Switch } from 'react-router-dom';
import Homepage from './Homepage'
import FreelancerDashboard from '../freelancers/pages/Dashboard'
import FreelancerProfile from '../freelancers/pages/Profile'
import Projects from '../freelancers/pages/Projects/Projects'
import Notifications from '../common/Notifications'
import ClientDashboard from '../clients/pages/Dashboard'
import ClientProfile from '../clients/pages/Profile'
import Signin from './Signin';
import Signup from './Signup';
   
   function Routing() {
     return (
       <div>
          <Router>
      
      
      <Switch >
        
    <Route path="/" exact>
    <Homepage />
    </Route>
    
    <Route path="/frelansir/dashboard" >
      <FreelancerDashboard />
    </Route>
    <Route path="/frelansir/profile" >
      <FreelancerProfile />
    </Route>
    <Route path="/frelansir/signin" >
      <Signin />
    </Route>
    <Route path="/frelansir/signup" >
      <Signup />
    </Route>
    <Route path="/frelansir/projects" >
      <Projects />
    </Route>
    <Route path="/frelansir/notifications" >
      <Notifications />
    </Route>
    <Route path="/client/dashboard" >
      <ClientDashboard />
    </Route>
    <Route path="/client/profile" >
      <ClientProfile />
    </Route>
    
    <Redirect to="/" />
    </Switch>
    </Router>

       </div>
     )
   }
   
   export default Routing
   