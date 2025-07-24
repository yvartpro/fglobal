import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "./Auth"


const Login = () => {
  const [user, setUser] = useState({name: "", email: "", password: "", password_2: ""})
  const navigate = useNavigate()

  const getValue = (event) =>{
    const {name, value} = event.target
    setUser(prev => ({...prev, [name]: value}))
  }
  const loginUser = () =>{
    login(user)
    navigate("/")
  }

  return <div className="h-screen flex justify-center items-center">
    <div className="bg-slate-100 rounded-sm shadow-md border p-5 w-full sm:w-80">
      <h3 className="text-lg text-primary-light font-medium my-5 text-center">Login form</h3>
      <input 
        type="text" 
        name="name" 
        onChange={getValue} 
        placeholder="Full name" 
        className="outline-none px-4 py-3 text-sm border focus:border-blue-400 my-2 w-full"
        />
      <input 
        type="email" 
        name="email"
        onChange={getValue} 
        placeholder="Email adress" 
        className="outline-none px-4 py-3 text-sm border focus:border-blue-400 my-2 w-full"
      />    
      <input 
        type="password" 
        name="password" 
        onChange={getValue} 
        placeholder="Password" 
        className="outline-none px-4 py-3 text-sm border focus:border-blue-400 my-2 w-full"
      />  
      <input 
        type="password" 
        name="password_2" 
        onChange={getValue} 
        placeholder="Verify password" 
        className="outline-none px-4 py-3 text-sm border focus:border-blue-400 my-2 w-full"
      />
      <button onClick={loginUser} className="w-full bg-primary-dark py-2 text-white text-sm hover:bg-gray-500">Login</button>
    </div>
  </div>
}


export default Login
