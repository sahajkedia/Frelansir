import { BrowserRouter as Router, Route , Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './common/components/Navbar';
import ClientDashboard from './clients/pages/Dashboard';
import ClientProfile from './clients/pages/Profile';
import Homepage from './common/Homepage';
import FreelancerDashboard from './freelancers/pages/Dashboard';
import FreelancerProfile from './freelancers/pages/Profile';
import Teams from './freelancers/pages/Teams';
import Projects from './freelancers/pages/Projects';
import Notifications from './common/Notifications';
import Signup from './common/Signup';
import Signin from './common/Signin';


function App() {
  return (
    <div className="App">
     
     
      <Router>
      {/* <Navbar /> */}
      
        <Switch >
      <Route path="/" exact>
      {<Homepage />}
      </Route>
      <Route path="/frelansir/dashboard" >
        <FreelancerDashboard />
      </Route>
      <Route path="/frelansir/profile" >
        <FreelancerProfile />
      </Route>
      <Route path="/frelansir/team" >
        <Teams />
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
      {/* <Signup />
      <Signin /> */}
    </div>
  );
}

export default App;
