import React, { useContext } from 'react'
import UserContext from '../context/userContext'



function Profile() {

  const {user} = useContext(UserContext)


  if(!user) return  <div>Pls login</div>


  return (
    <div>welcome {user.username}</div>
  )
}

export default Profile