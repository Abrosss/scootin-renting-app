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
  const [error] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleGoogle = (user) => {
    setIsLoading(true)
    axios.post("/google-signup", {

      email:user.email,
      username: user.email.slice(0,  user.email.indexOf("@")),
      id: user.sub
     }).then(res =>{
      if(res.status===200) {
        setAuth(res.data)
        setIsLoading(false)
        localStorage.setItem('user', JSON.stringify(res.data))
        navigate("/dashboard")
      }
      
     })
     .catch(err=> {
      console.log(err)
      setIsLoading(false)
     })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios.post(SIGNUP_URL, {
      email:email,
      password:password,
      confirm_password:confirmPassword
     }).then(res =>{
      if(res.status===200) {
        setIsLoading(false)
        navigate("/signin")
      }
      
     })
     .catch(err=> {
      console.log(err)
      setIsLoading(false)
     })

  }
  return (
   <main className='container'>
    <section className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' name='email'></input>
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' name='password'></input>
        <input onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' name='confirm_password'></input>
        {isLoading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        :error && <span>{error}</span>
        }
   
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