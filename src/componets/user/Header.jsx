import React from 'react'
import { Link } from 'react-router-dom'
import Darkmode from '../shared/Darkmode'
import Home from '../../pages/user/Home';
const Header = () => {
  return (
    <>
      <div className='h-24 bg-metal flex justify-between px-40 items-center' >
        <div>
          <button className=''>logo</button>
        </div>
        <div> 
          <input type="text"placeholder='search'  className='w-96 min-h-12 rounded-full px-10'/>
          <button>search</button>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <nav>
            <ul className='flex justify-center items-center gap-6'>
             <Link to={"/"}> <li>Home</li></Link>
              <li>More</li>
             <Link to={"/cart"}><li>Cart</li></Link>
              <div>
                <Link to={"/login"}> <button>Login</button> </Link>
                
              </div>
            </ul>
          </nav>
          <Darkmode/>
        </div>
       
      </div>
      <Home/>
    </>
  )
}

export default Header
