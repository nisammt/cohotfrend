import React from 'react'
import { Link } from 'react-router-dom';
import {CircleUser} from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import Darkmode from '../shared/Darkmode';
import Home from '../../pages/user/Home';


const UserLoginHeader = () => {
  return (
   <>
   <div className='h-24 bg-metal flex justify-between px-40 items-center' >
        <div>
          <Link to={"/"}><button className=''>logo</button></Link>
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
                <Link to={"/logou"}> <button>Logout</button> </Link>
                
              </div>
            </ul>
          </nav>
          <div className='flex gap-16 items-center font-semibold'>
          
            <Link to={'/user/cart'}>
                    <ShoppingBag />
                </Link>
                <Link to={"/user/profile"}>
                    <CircleUser />
                </Link>
                <Darkmode/>
          </div>

        </div>
      </div>
    <Home/>
   </>
  )
}

export default UserLoginHeader
