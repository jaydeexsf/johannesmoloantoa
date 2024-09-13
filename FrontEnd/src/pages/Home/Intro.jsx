import React, { useContext, useEffect, useState } from 'react'
import CV from '../../assets/resources/JohannesMoloantoaCV.pdf'
import { ModeContext } from '../../components/ModeContext'
// import { set } from 'mongoose';

export const Intro = () => {

  const { portfolioData } = useContext(ModeContext);

  const [introData, setintroData] = useState(portfolioData.intro)
  
  useEffect(()=> {
      if(portfolioData) {
          setintroData(portfolioData.intro)
      }
  }, [portfolioData])
  console.log(introData)
  
  return (
    <div className='flex flex-col gap-8 md:gap-10 w-full pb-12  sm:min-h-[420px] md:h-[70vh] py-8'>
        <div className="text-sm">{introData[0].welcomeText}</div>
        <div className="text-secondary-secondary-1 text-3xl md:text-5xl ">
            {introData[0].fristName + ' ' + introData[0].lastname} 
        </div>
        <div className='md:text-5xl text-3xl'>
           {introData[0].caption}
        </div>
        <div className="md:text-sm text-[12px] text-tertiary-tertiary-2 w-full md:w-[50vw]">
           {introData[0].description}
        </div>
        <div>
           <a href={CV} download> <button  className='text-secondary-secondary-2 text-[12px] md:text-sm hover:bg-secondary-secondary-2 hover:text-primary-dark-bg-1 transition-all duration-300 hover:cursor-pointer border border-secondary-secondary-2 py-[6px] px-4  md:py-[8px] md:px-6'>Dowload CV</button></a>
        </div>
    </div>
  )
}


// I'm a full stack developer. Currently developing Websites with the MERN Stack. I enjoy working on both the client and server side. Let's build something amazing together!