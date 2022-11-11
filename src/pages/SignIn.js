import React from 'react'
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'
import axios from '../api/axios'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'
const LOGIN_URL = '/login'
function SignIn() {
  axios.defaults.withCredentials = true
  const {auth, setAuth} = useContext(AuthContext)
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
  const handleGoogle = (user) => {
    console.log(user.email)
    axios.post("/google-signup", {

      email:user.email,
      username: user.email.slice(0,  user.email.indexOf("@")),
      id: user.sub
     }).then(res =>{
      if(res.status===200) {
        setAuth(res.data)
        localStorage.setItem('user', JSON.stringify(res.data))
        navigate("/dashboard")
      }
      
     })
     .catch(err=>console.log(err))
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
    <GoogleLogin
    onSuccess={credentialResponse => {
      handleGoogle(jwtDecode(credentialResponse.credential))
    
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    <Link to='/signup'>Don't have an account? <span className='accent'>Sign Up</span> </Link>
      </form>
    </section>
    
   </main>
  )
}

export default SignIn