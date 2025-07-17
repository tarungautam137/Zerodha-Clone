import React from 'react'

const Platform = ({imageUrl,description}) => {
  return (
    <div className='flex flex-col gap-3 text-center p-20'>
        
        <img src={imageUrl} alt="" />
        <p className='text-sm'>{description}</p>
    </div>
  )
}

export default Platform