import React from 'react'
import {useContext} from 'react'
import AuthContext from '../context/AuthProvider'
function Dashboard() {
  const {auth} = useContext(AuthContext)
  console.log(auth)
  return (
    <div>Hello {auth.username} !</div>
  )
}

export default Dashboard