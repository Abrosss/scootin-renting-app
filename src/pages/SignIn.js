import React from 'react'
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'
import axios from '../api/axios'
const LOGIN_URL = '/login'
function SignIn() {
  axios.defaults.withCredentials = true
  const {setAuth} = useContext(AuthContext)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { email, password };
    axios.post(LOGIN_URL,user).then(res =>{
    
      
      if(res.status===200) {
        setAuth(res.data);
        navigate("/dashboard")
      localStorage.setItem('user', JSON.stringify(res.data))
      }
      
     })
     .catch(err=> {
     console.log(err)
      if(err) setError(err.response.data)
     })

  }
 
  return (
   <main className='container'>
    <section className='signup'>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input autoComplete='true' onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' name='email'></input>
        <input autoComplete='true' onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' name='password'></input>
       {error && <span>{error}</span>}
    <ButtonSubmit text="Sign In"/>
    <Link to='/signup'>Don't have an account? <span className='accent'>Sign Up</span> </Link>
      </form>
    </section>
    
   </main>
  )
}

export default SignIn