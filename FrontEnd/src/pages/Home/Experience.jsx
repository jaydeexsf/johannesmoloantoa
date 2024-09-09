// import React, { useState } from 'react'
// import Section from '../../components/Section'
// import { ExperienceData } from '../../assets/resources/experienceData'

// const Experience = () => {
// const [selectedDate, setSelectedDate] = useState(0);

//   return (  
//     <div className='h-[70vh] w-full'>
//         <Section title="Experience"/>
//         <div className='flex  gap-36 w-full justify-between'>
//             <div className="leftEXp flex flex-col w-1/3">
//                 {ExperienceData.map((data, index)=> {
//                     return(
//                     <div onClick={()=> setSelectedDate(index)} className='font-semibold'>
//                         <h1 className={`${selectedDate === index ? 'text-secondary-secondary-2 bg-[rgba(92,207,230, 0.4)]' : ''}`}> {data.date} </h1>
//                     </div>)
//                 })}
//             </div>
//             <div className="rightExp">
//                 {ExperienceData.map((data, index)=> {
//                 return (
//                     <div className={`${selectedDate === index ? 'flex flex-col gap-4'  : 'hidden'} w-1/2 text-white`}> 
//                         <h1 className="title text-secondary-secondary-3">{data.title}</h1>
//                         <span className="company">{data.company}</span>
//                         <span className="what-i-did">{data.description}</span>
//                     </div>)
//                 })}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Experience

import React, { useState } from 'react'
import Section from '../../components/Section'
import { ExperienceData } from '../../assets/resources/experienceData'

const Experience = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  return (  
    <div className='h-[70vh] w-full flex flex-col gap-8'>
      <Section title="Experience"/>
      <div className='flex w-full justify-between items-center'>
        {/* Ensure this column takes up some space but doesn't overflow */}
        <div className="leftExp flex flex-col w-1/3">
          {ExperienceData.map((data, index)=> {
            return (
              <div onClick={()=> setSelectedDate(index)} className='font-normal cursor-pointer text-[14px]  '>
                <h1 className={`${selectedDate === index ? 'text-secondary-secondary-2 bg-[#5CCFE6] bg-opacity-15 h-{100%]' : ''} dateExpe flex itmes-center justify-center  mb-4 relative  p-2 w-fit rounded-sm`}>
                  {data.date}
                </h1>
              </div>
            )
          })}
        </div>
        
        {/* Ensure rightExp takes up remaining space */}
        <div className="rightExp w-2/3">
          {ExperienceData.map((data, index)=> {
            return (
              <div className={`${selectedDate === index ? 'flex flex-col gap-4'  : 'hidden'} text-white`}> 
                <h1 className="title text-secondary-secondary-3">{data.title}</h1>
                <span className="company">{data.company}</span>
                <span className="what-i-did">{data.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
