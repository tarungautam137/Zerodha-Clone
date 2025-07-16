import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Media from './Media'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'
import NavBar from '../NavBar'

const HomePage = () => {
  return (
    <div>

    <div className='px-50 pt-10 flex flex-col items-center'>
        
        <Hero/>
        <Stats/>
        <Media/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
    </div>

    </div>
  )
}

export default HomePage