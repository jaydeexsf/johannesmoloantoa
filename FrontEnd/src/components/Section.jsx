import React from 'react'

const Section = ({title}) => {
  return (
    <div className='flex gap-8 items-center'>
        <div className='text-2xl text-secondary-secondary-1'>{title}</div>
        <span className='h-[2px] text-green-500 bg-secondary-secondary-2 w-1/4'></span>
    </div>
  )
}

export default Section