import React from 'react'
import UserContextprovider from './Context/UserContextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

const App = () => {
  return (
    <div >


       <UserContextprovider>
         <Login/>
<Profile/>
       </UserContextprovider>
    </div>
  )
}

export default App
