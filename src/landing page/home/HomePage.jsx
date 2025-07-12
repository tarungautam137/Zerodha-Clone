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
        <img src="images/coin.png" alt="" />
        <NavBar/>
        <Hero/>
        <Stats/>
        <Media/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    </div>
  )
}

export default HomePage