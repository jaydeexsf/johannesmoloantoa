import React, { useState } from 'react'
import Section from '../../components/Section'
import { ExperienceDat } from '../../assets/resources/experienceData'
// Import the icon from react-icons
import { FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [ExperienceData, setExperienceData] = useState(ExperienceDat)
  const [isShowingResponsibilities, setIsShowingResponsibilities] = useState(false)

  const makeResponsibiliteVisible = () => {
    setIsShowingResponsibilities(!isShowingResponsibilities)
  }

  return (  
    <div className='md:h-fit pt-8 lg:pb-16 pb-12 w-full flex flex-col gap-8'>
      <Section title="Experience"/>
      <div className='flex w-full flex-col md:flex-row justify-between pt-4 items-center'>
        <div className="leftExp flex gap-2 flex-row flex-shrink-0 overflow-auto w-full md:flex-col md:w-1/3">
          {ExperienceData.map((data, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedDate(index)} 
              className='font-normal overflow-auto flex flex-shrink-0 cursor-pointer text-[14px]'>
              <h1 className={`${selectedDate === index ? 'text-secondary-secondary-2 bg-[#5CCFE6] bg-opacity-15 h-{100%]' : ''} dateExpe flex-shrink-0 flex items-center justify-center mb-4 relative p-2 w-fit rounded-sm`}>
                {data.period}
              </h1>
            </div>
          ))}
        </div>
        
        <div className="rightExp pt-6 md:pt-1 md:w-2/3">
          {ExperienceData.map((data, index) => (
            <div 
              key={index} 
              className={`pt-0 ${selectedDate === index ? 'flex flex-col gap-4' : 'hidden'} text-white`}>
              <h1 className="title text-secondary-secondary-2 text-xl font">{data.title}</h1>
              <span className="company mt-[-13px] mb-2 text-[12px]">{data.company}</span>
              <span className="what-i-did w-full lg:w-[500px] text-sm text-tertiary-tertiary-2">{data.description}</span>
              
              {/* Display responsibilities */}
              <button onClick={makeResponsibiliteVisible} className='bg-secondary-secondary-2/70 max-w-[500px] rounded-full text-primary-dark-bg-1 text-xs px-1 py-2'>
                {isShowingResponsibilities ? 'Hide ' : 'See '} Responsibilities
              </button>
              {isShowingResponsibilities && (
                <span className="what-i-did w-full lg:w-[500px] text-[13px] text-tertiary-tertiary-2">
                  {data.responsibilities.map((responsibility, index) => {
                    const highlightWords = ["MongoDB", "ReactJS", "authentication", "NodeJS", "Google API", "PDF", "parsing", "vercel", "render", "university", "prospectus", "JSON", "format"];
                    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
                    const parts = responsibility.split(regex);
                    
                    return (
                      <span key={index}>
                        {parts.map((part, idx) => (
                          <span key={idx}>
                            {highlightWords.includes(part) ? (
                              <span className="text-red-500">{part}</span>
                            ) : (
                              part
                            )}
                          </span>
                        ))}
                      </span>
                    );
                  })}
                </span>
              )}

              {/* Display link if it exists */}
              {data.link && (
                <a 
                  href={data.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline text-xs mt-4 flex items-center gap-2">
                  Visit Website 
                  {/* Add the external link icon */}
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
