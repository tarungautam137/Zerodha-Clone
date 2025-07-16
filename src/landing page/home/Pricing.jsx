
import { FaArrowRight } from "react-icons/fa6";

const Pricing = () => {
  return (

    <div className='flex mb-32'>

      <div className="w-2/3">
        <h1 className='text-3xl mb-10' >Unbeatable pricing</h1>
        <p className='text-lg mb-5'>We pioneered the concept of discount broking and price <br />transparency in India. Flat fees and no hidden charges.</p>
        <h2 className='font-medium text-sky-600'>See pricing <FaArrowRight className='ml-2 inline'/></h2>
      </div>

      <div className='flex items-center'>

        <div className='flex w-2/3 relative '>
          <img className='w-2/3 ' src="images/pricing-eq.svg" alt="" />
          <p  className='  text-[11px] absolute mt-15 ml-25'> Free account opening</p>
        </div>

        <div className='flex w-3/4 relative '>
          <img className='w-2/3 ' src="images/pricing-eq2.svg" alt="" />
          <p className=' text-[11px] absolute mt-15 ml-25'> Free equity delivery<br/> and direct mutual funds</p>
        </div>

        <div className='flex relative  w-2/3 '>
          <img className='w-2/3 ' src="images/pricing-eq3.svg" alt="" />
          <p className='  text-[11px] absolute mt-15 ml-27'> Intraday and F&O</p>
        </div>

      </div>

    </div>

  )
}

export default Pricing