import React from 'react'
import { SlMenu} from "react-icons/sl";

const NavBar = () => {
  return (
    <div className='px-50 py-5 grid grid-cols-13 border-b-1 border-b-gray-400 fixed bg-gray-300'>
      <div className='col-span-7 w-22/100'>
        <img src="images/logo.svg" alt="" />
      </div>
      <div className='justify-self-center self-center'>Signup</div>
      <div className='justify-self-center self-center'>About</div>
      <div className='justify-self-center self-center'>Products</div>
      <div className='justify-self-center self-center'>Pricing</div>
      <div className='justify-self-center self-center'>Support</div>
      <div className='justify-self-center self-center'><SlMenu /></div>
    </div>
  )
}

export default NavBar