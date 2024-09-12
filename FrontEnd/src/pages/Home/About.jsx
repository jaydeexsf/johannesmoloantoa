import React, { useContext, useEffect, useState } from 'react'
import Section from '../../components/Section'
import abtImg from '../../assets/images/21004063-removebg-preview.png'
import { ModeContext } from '../../components/ModeContext'

export const About = () => {

const { portfolioData } = useContext(ModeContext);

const [skills, setSkills] = useState(portfolioData.about)

useEffect(()=> {
    if(portfolioData) {
        setSkills(portfolioData.about)
    }
}, [portfolioData])


  return (
    <div className='flex flex-col gap-8 pb-16'>
        <Section title="About"/>
        <div className='bottom-about flex gap-4 justify-center items-center'>
            <div className="left-abt">
                  <img src={abtImg} alt="re" />
            </div>
            <div className="right-abt flex flex-col md:text-sm text-[12px] gap-4">
                <span className='text-tertiary-tertiary-2 '>
                I’m a dedicated front-end and full-stack developer with a strong foundation in building scalable web applications. I excel in using technologies like HTML, React, and JavaScript to create clean, responsive, and dynamic user interfaces.
                </span>
                <span className='text-tertiary-tertiary-2 '>
                Additionally, my skills extend to the back end with Node.js, Express.js, and MongoDB, allowing me to develop robust APIs and manage databases efficiently.
                </span>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='md:text-md text-[15px] text-secondary-secondary-3'> Here's a few technologies ive been working with recentlty: </div>
            <div className="skills flex gap-4 flex-wrap text-tertiary-tertiary-3">
                {skills.map((skill)=> {
                    return (
                    <div className='border border-secondary-secondary-2 text-[12px] md:text-sm text-se gap-1 px-4 py-1 flex-wrap flex items-center justify-center' key={skill.id}>
                        <img src={`${skill.icon}`} className='size-6'></img> <span className='flex text-secondary-secondary-2 flex-none'>{skill.skill}</span>
                    </div>)
                } )}
            </div>
        </div>
    </div>
  )
}




