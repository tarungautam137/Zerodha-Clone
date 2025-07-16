import React from 'react'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-30'>
      <img src="images/homeHero.png" alt=""  className='w-65/100'/>
      <h1 className='mt-20 text-5xl mb-5'>Invest in everything</h1>
      <p className='text-2xl mb-10'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
      <button className='w-fit bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-black cursor-pointer mb-30'>Sign up for free</button>
    </div>
  )
}

export default Hero