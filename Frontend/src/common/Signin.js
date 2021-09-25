import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
function Signin() {

  
    const  submitHandler = (e) =>{

      e.preventDefault()
      const data = {
        email:e.target.email.value,
        password:e.target.password.value
      }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Accept': 'application/json' },
      body: JSON.stringify(data)
}

 fetch('http://localhost:4000/api/frelansir/signin', requestOptions)
.then(response => {
  console.log(response)
  if(response.status==='200'){
    console.log("Signed In")
    
  }

  <Redirect to='/frelansir/profile' />
});

            
        }

       return(
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" onSubmit={submitHandler}>
          <div className="w-full flex items-center justify-between">
			<Link className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/"> 
				 <svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg> Frelansir
			</Link>
      </div>
      <br />
      <br />
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="email" >
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" name="email" />
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" type="password" placeholder="******************" />
              <p className="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                Forgot Password?
              </a>
            </div>

            <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300"  type = "submit">Sign In</button>
          <>
          <br />
          <Link className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" to={'/frelansir/signup'}>
                <h5>Signup Instead</h5>
              </Link>
          </>

        </form>
    )
}

export default Signin
