import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'
import axios from '../api/axios'
import Moment from 'react-moment';
import 'moment-timezone';
function Rides() {
  const { auth } = useContext(AuthContext)
  const [rides, setRides] = useState(null);
  useEffect(() => {
    axios.get(`/api/${auth.id}/rides`).then((response) => {
      setRides(response.data);
    });
  }, []);
  if (!localStorage.getItem('user')) {
    return <Navigate to={'/signin'} />;
  }
  return (
    <section className='container container--rides'>
      <section className='rides'>
      <h4>My rides</h4>
    { rides &&
    

    
          <table>
        
            <thead>
              <tr>
              <th >Location</th>
              <th className='leftAlign' >Date</th>
                
                <th className='leftAlign'>Time traveled</th>
         
      
                <th className='leftAlign'>Paid</th>
              </tr>
            </thead>
            <tbody>
            {rides.map(city => (
                  <tr key={city.id}>
                   
                    <td data-label="Descrição">{city.street}</td>
                    <td className='leftAlign' data-label="Descrição"><Moment format="YYYY/MM/DD" date={city.createdAt} /></td>
                  <td className='leftAlign' data-label="Administrador">{city.time} hour(s)</td>
                  
              
                  <td className='leftAlign'  data-label="Administrador">{city.total} $</td>
                </tr>
              
                ))}
             
            </tbody>
          </table>
        
   
          
          
        
      
    } 
    </section>
    <section className='settings'>
    <h4>Settings</h4>
    <form>
    <label for="username">Username</label>
    <input type="text" id="username" name="username" value={auth.username}/>
    <button type="button" className="button">Change Username</button>
    <label>Password</label>
    <input type="text" id="currentPassword" placeholder='Type your current password' name="current_password" value=""/>
    <input type="text" id="newPassword" placeholder='Type your new password' name="new_password" value=""/>
    <button type="button" className="button">Change Password</button>
    </form>
    </section>
    { rides===null || rides.length === 0  && <p className='accent'>No rides yet</p>}
    </section>
  );
}

export default Rides