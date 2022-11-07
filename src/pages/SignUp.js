import React, { useState } from 'react'
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit'
import  { useNavigate  } from 'react-router-dom'
import { Link } from 'react-router-dom'

import axios from '../api/axios'
const SIGNUP_URL = '/signup'
function SignUp() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
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
     .catch(err=>setError(err.response.data))

  }
  return (
   <section className='container'>
    <section className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' name='email'></input>
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' name='password'></input>
        <input onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' name='confirm_password'></input>
       {error && <span>{error}</span>} 
    <ButtonSubmit text="Sign Up"/>
    <Link to='/signin'>Already have an account? <span className='accent'>Sign In</span> </Link>
      </form>
    </section>
    
   </section>
  )
}

export default SignUp