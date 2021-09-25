import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {

const submitHandler = (e) => {
  e.preventDefault()
  let data = {
    name:e.target.name.value,
    email:e.target.email.value,
    password: e.target.password.value,
    confirm_password: e.target.confirm_password.value,
    passion:e.target.title.value, 
    description:e.target.description.value,
    skillbasket:e.target.skillbasket.value
  }
  
  console.log(data)

 const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json',
             'Accept': 'application/json' },
  body: JSON.stringify(data)
}

if(data.confirm_password===data.password){
  fetch('http://localhost:4000/api/frelansir/signup', requestOptions)
  .then(response => console.log(response));
}
else{
  return <h1>Password doesn't match try again...</h1>
}
}



    return (
<div className="min-h-screen flex items-center justify-center bg-blue-400">
  
<div className="bg-white p-16 rounded shadow-2xl w-2/3">
<div className="w-full flex items-center justify-between">
			<Link className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/"> 
				 <svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg> Frelansir
			</Link>
      </div>
      <br />
      <br />
  <h2 className="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>

  <form className="space-y-5" onSubmit ={submitHandler}>

    <div>
      <label className="block mb-1 font-bold text-gray-500" required>Name</label>
      <input type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" name= "name"/>
    </div>

    <div>
      <label className="block mb-1 font-bold text-gray-500" required >Email</label>
      <input type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" name="email"/>
    </div>

    <div>
      <label className="block mb-1 font-bold text-gray-500" required>Password</label>
      <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" name="password"/>
    </div>

    <div>
      <label className="block mb-1 font-bold text-gray-500" required>Confirm Password</label>
      <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" name="confirm_password" required/>
    </div>

    <div>
      <label className="block mb-1 font-bold text-gray-500" >Title</label>
      <input type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required name="title"/>
    </div>

    <div>
    <label className="block mb-1 font-bold text-gray-500" >About You</label>
		<textarea required  class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" spellcheck="false" name="description"></textarea>							
		</div>

    <div>
      <label className="block mb-1 font-bold text-gray-500" >Skills</label>
      <input type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required name="skillbasket"/>
      <p class="text-xs text-gray-400 text-left my-3">Use ',' in between skills</p>
    </div>
      
    <div className="flex items-center" >
      <input type="checkbox" id="agree" required/>
      <label for="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
    </div>

    <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300" type="submit">Sign Up</button>

  </form>

</div>

</div>

    )
}

export default Signup
