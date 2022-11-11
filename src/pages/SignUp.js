import React, { useState } from 'react'
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit'
import  { useNavigate  } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'
import {useContext} from 'react'
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'

const SIGNUP_URL = '/signup'
function SignUp() {
  const {setAuth} = useContext(AuthContext)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

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
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(SIGNUP_URL, {
      email:email,
      password:password,
      confirm_password:confirmPassword
     }).then(res =>{
      if(res.status===200) {
       
        navigate("/signin")
      }
      
     })
     .catch(err=>(err))

  }
  return (
   <main className='container'>
    <section className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' name='email'></input>
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' name='password'></input>
        <input onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' name='confirm_password'></input>
       {error && <span>{error}</span>} 
    <ButtonSubmit text="Sign Up"/>
    <GoogleLogin
    onSuccess={credentialResponse => {
      handleGoogle(jwtDecode(credentialResponse.credential))
    
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    <Link to='/signin'>Already have an account? <span className='accent'>Sign In</span> </Link>
      </form>
    </section>
    
   </main>
  )
}

export default SignUp