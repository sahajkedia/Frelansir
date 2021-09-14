import { GoogleLogin } from 'react-google-login';
import './App.css';
import Routing from './common/Routing';
import axios from 'axios'
function App() {
  const responseGoogleFailure = (response) => {
    console.log(response);
  }

  const responseGoogleSuccess = (response) => {
    // console.log(response)
    
    axios({
      method:"POST",
      url:"http://localhost:4000/api/frelansir/loginorsignup",
      data: {
        tokenId: response.tokenId
      }

    }).then(res => {
      // console.log(res)
    })
  }
  return (
    <div className="App">
     <Routing />
     <GoogleLogin
    clientId="777005309806-l79snvom6ni6878codl8ajqrueq2pd29.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogleSuccess}
    onFailure={responseGoogleFailure}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
