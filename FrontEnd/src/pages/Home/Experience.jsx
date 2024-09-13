import React, { useContext, useEffect, useState } from 'react'
import Section from '../../components/Section'
// import { ExperienceData } from '../../assets/resources/experienceData'
import { ModeContext } from '../../components/ModeContext'

const Experience = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const { portfolioData } = useContext(ModeContext);

const [ExperienceData, setExperienceData] = useState(portfolioData.experience)

useEffect(()=> {
    if(portfolioData) {
        setExperienceData(portfolioData.experience)
    }
}, [portfolioData])

  return (  
    <div className='md:h-[60vh]  pb-12 w-full flex flex-col gap-8'>
      <Section title="Experience"/>
      <div className='flex w-full flex-col md:flex-row  justify-between pt-8 items-center'>

        <div className="leftExp flex flex-row flex-shrink-0 overflow-auto w-full md:flex-col md:w-1/3">
          {ExperienceData.map((data, index)=> {
            return (
              <div onClick={()=> setSelectedDate(index)} className='font-normal  overflow-auto flex flex-shrink-0 cursor-pointer text-[14px]  '>
                <h1 className={`${selectedDate === index ? 'text-secondary-secondary-2 bg-[#5CCFE6] bg-opacity-15 h-{100%]' : ''} dateExpe flex-srink-0 flex itmes-center justify-center  mb-4 relative  p-2 w-fit rounded-sm`}>
                  {data.period}
                </h1>
              </div>
            )
          })}
        </div>
        
        <div className="rightExp pt-1 md:w-2/3">
          {ExperienceData.map((data, index)=> {
            return (
              <div className={`pt-0 ${selectedDate === index ? 'flex flex-col gap-4'  : 'hidden'} text-white`}> 
                <h1 className="title text-secondary-secondary-3 font-semibold">{data.title}</h1>
                <span className="company text-[15px] ">{data.company}</span>
                <span className="what-i-did w-full text-sm text-tertiary-tertiary-2">{data.description}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
