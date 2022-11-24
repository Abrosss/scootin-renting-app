import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'
import axios from '../api/axios'
import Moment from 'react-moment';
import 'moment-timezone';
function Rides() {
  const {auth } = useContext(AuthContext)
  const [rides, setRides] = useState([]);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [password, setPassword] = useState([{ old: "", new: ""}]);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {

    let user = JSON.parse( localStorage.getItem("user"))
   setIsLoading(true)
    axios.get(`/api/${user.id || user._id}/rides`).then((response) => {
     
      setRides(response.data);
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
    })
  }, []);

 
 
  const handleInput = (e) => {
    setResponse(null)
    setError(null)
    const { name, value } = e.target;
    password[name] = value
    setPassword(password)
  
  }
  function handleChangePassword(e) {
    e.preventDefault()
    axios.post(`${auth._id}/changePassword`, {
      currentPw:password.old,
      newPw:password.new
     }).then(res =>{
      if(res.status===200) {
       setResponse(res.data)
      }
      
     })
     .catch(err=>console.log(err))
  }
  
  function handleChangeUsername(e) {
    console.log(auth)
    e.preventDefault()
    axios.post(`${auth._id}/changeUsername`, {
      newUsername: username
     }).then(res =>{
      if(res.status===200) {
        setResponse(res.data)
        console.log(res)
        const newData = {
          ...auth,
          username: username}
          localStorage.setItem("user", JSON.stringify(newData));
      }
      
     })
     .catch(err=>setError(err.response.data))
  }
  if (!localStorage.getItem('user')) {
    return <Navigate to={'/signin'} />;
  }
  return (
    <main className='container container--rides'>
      
      
      <section className='rides'>
      <h4>My rides</h4>
     {isLoading ? <section className='loading-container'><div class="lds-ring"><div></div><div></div><div></div><div></div></div></section> :
        <table>
        
        <thead>
          <tr>
          <th >Location</th>
          <th className='leftAlign' >Date</th>
            
            <th className='leftAlign'>Time</th>
     
  
            <th className='leftAlign'>Paid</th>
          </tr>
        </thead>
        <tbody>

        {rides.length>0 && rides.map(city => (
              <tr key={city._id}>
               
                <td >{city.street}</td>
                <td className='leftAlign' ><Moment format="YYYY/MM/DD" date={city.createdAt} /></td>
              <td className='leftAlign' >{city.time} hour(s)</td>
              
          
              <td className='leftAlign'>{city.total} $</td>
            </tr>
         
            ))}
        
            
          
        </tbody>
      </table> 
       }
      { !isLoading && rides.length === 0 && <p className='textCenter'>No rides yet</p>}
       
    </section>
      
      
    <section className='settings'>
    <h4>Settings</h4>
    <p>Hi <span className='accent'>{username ? username : auth.username}</span> !</p>
    <form>
    <span className='textCenter'>{error}</span>
    <span className='textCenter'>{response}</span>
    <label htmlFor="username">Username</label>
    <input onChange={e => {
      setResponse(null)
      setError(null)
      setUsername(e.target.value)
    } } type="text" id="username" name="username" placeholder='Type new username'/>
 
   
    <button onClick={handleChangeUsername} type="button" className="button">Change Username</button>
    <label>Password</label>
    <input onChange={handleInput} type="password" id="currentPassword" placeholder='Type your current password' name="old"/>
    <input onChange={handleInput} type="password" id="newPassword" placeholder='Type your new password' name="new"/>
    
    
    <button onClick={handleChangePassword} type="button" className="button">Change Password</button>
    </form>
    </section>
   
    </main>
  );
}

export default Rides