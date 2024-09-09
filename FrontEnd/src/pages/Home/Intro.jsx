import React from 'react'

export const Intro = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-10 w-full pb-12  sm:min-h-[420px] md:h-[70vh] py-8'>
        <div className="text-sm">Hi, I'm</div>
        <div className="text-secondary-secondary-1 text-3xl md:text-5xl ">
            Johannes Moloantoa
        </div>
        <div className='md:text-5xl text-3xl'>
            I build things for the web
        </div>
        <div className="md:text-sm text-[12px] text-white">
            im a full stack developer. Currently im working as a React developer in South Afrieca.
        </div>
        <div>
            <button className='text-secondary-secondary-2 hover:bg-secondary-secondary-2 hover:text-primary-dark-bg-1 transition-all duration-300 hover:cursor-pointer border border-secondary-secondary-2  py-2 px-6'>Dowload CV</button>
        </div>
    </div>
  )
}
