import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Stats = () => {
  return (
    <div className='flex gap-10 mb-10'>

        <div className='w-45/100'>
          <h1 className='text-3xl mb-10'>Trust with confidence</h1>
          <div>
            <h1  className='text-2xl mb-3'>Customer-first always</h1>
            <p className='mb-10 text-gray-600 w-85/100'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div>
            <h1 className='text-2xl mb-3'>No spam or gimmicks</h1>
            <p className='mb-10 text-gray-600 w-85/100'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
          </div>
          <div>
            <h1 className='text-2xl mb-3'>The Zerodha universe</h1>
            <p className='mb-10 text-gray-600 w-85/100'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>
          <div>
            <h1 className='text-2xl mb-3'>Do better with money</h1>
            <p className='mb-10 text-gray-600 w-85/100'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>

        <div className='w-55/100'>

          <img src="images/ecosystem.png" alt="" />

          <div className='flex mt-10 ml-20 px-6 gap-6 text-sky-600'>

            <div className='flex items-center gap-1'><h1>Explore our products</h1> <FaArrowRight className='mt-1'/></div>

            <div className='flex items-center gap-1'><h1>Try Kite demo</h1> <FaArrowRight className='mt-1'/></div>

          </div>
        </div>

    </div>
  )
}

export default Stats