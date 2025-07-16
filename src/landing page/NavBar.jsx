import React from 'react'
import { SlMenu} from "react-icons/sl";
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div className='px-50 py-5 grid grid-cols-13 border-b-1 border-b-gray-400 fixed bg-gray-300'>
      <div className='col-span-7 w-22/100'>
        <Link to="/"><img src="images/logo.svg" alt="" /></Link>
      </div>
      <div className='justify-self-center self-center'><Link to="/signup">Signup</Link></div>
      <div className='justify-self-center self-center'><Link to="/about">About</Link></div>
      <div className='justify-self-center self-center'><Link to="/products">Products</Link></div>
      <div className='justify-self-center self-center'><Link to="/pricing">Pricing</Link></div>
      <div className='justify-self-center self-center'><Link to="/support">Support</Link></div>
      <div className='justify-self-center self-center'><SlMenu /></div>
    </div>
  )
}

export default NavBar