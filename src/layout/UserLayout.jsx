import React, { useState } from 'react'
import Header from '../componets/user/Header'
import Footer from '../componets/user/Footer'
import { Outlet } from 'react-router-dom'
import UserLoginHeader from '../componets/user/UserLoginHeader'

const UserLayout = () => {
  const [isuserAuth, setUserAuth]=useState(false);
  return (
   
    <div>
      {isuserAuth ?<UserLoginHeader/> : <Header/> }
    
        <div className='min-h-96'>
        <Outlet/>
        </div>
       <Footer/>
      
    </div>
  )
}

export default UserLayout
