import React, { useContext } from 'react'
import UserContext from '../Context/usercontext'
const Profile = () => {
    const {user}=useContext(UserContext)
 if(!user) return <div className="">Please Login</div>
 return <div className="">elcome {user.username}</div>
}

export default Profile
