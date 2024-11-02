import React, { useContext, useEffect, useState } from 'react';
import Section from '../../components/Section';
import abtImg from '../../assets/images/21004063-removebg-preview.png';
import myImage from '../../assets/images/myImage.png'
// import { ModeContext } from '../../components/ModeContext'

export const About = () => {
  // const { portfolioData } = useContext(ModeContext);

  const [skills, setSkills] = useState([
    { id: 1, skill: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
    { id: 2, skill: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { id: 3, skill: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/000000/tailwindcss.png' },
    { id: 4, skill: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
    { id: 5, skill: 'Express.js', icon: 'https://img.icons8.com/color/48/000000/express.png' },
    { id: 6, skill: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
    { id: 7, skill: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png' },
    { id: 8, skill: 'NextJs', icon: 'https://img.icons8.com/color/48/000000/nextjs.png' },
    { id: 8, skill: 'Typescript', icon: 'https://img.icons8.com/color/48/000000/typescript.png' },
  ]);

  // useEffect(() => {
  //   if (portfolioData) {
  //     setSkills(portfolioData.about);
  //   }
  // }, [portfolioData]);

  return (
    <div className='flex flex-col pt-12 gap-8 pb-16'>
      <Section title="About Me" />
      <div className='bottom-about w-full flex gap-4 md:gap-[100px] justify-center items-center'>
        <div className="left-abt border-secondary-secondary-2 border shadow-sm hover:shadow-lg shadow-secondary-secondary-2 hover:shadow-secondary-secondary- bg-black/50 bg-gradient-to-r from-secondary-secondary-2 to-bla hover:border-secondary-secondary-1 hover:from-secondary-secondary-1 hover:to-black/10 hover:shadow-secondary-secondary-1 w-[150%] transition-all duration-300 max-w-[150px]">
          <img src={myImage} className='sm:mt-[-80px] lg:h-[230px] sm:w-[150%] w-[150%]  sm:-fit h-[47vw] max-h-[280px] min-h-[250px] object-cover mt-[-50px]' alt="About Me" />
        </div>
        <div className="right-abt flex flex-col md:text-sm w-[100%] text-[12px] gap-4">
        <span className='text-tertiary-tertiary-2 md:max-w-[600px]'>
    I’m a forward-thinking full-stack developer with a strong focus on creating sleek, interactive web apps. I’m driven by the art of building seamless, responsive user experiences.
</span>
<span className='text-tertiary-tertiary-2  md:max-w-[600px]'>
    On the backend, I design efficient, secure APIs and manage complex data systems. My goal? To merge creativity with functionality, crafting digital solutions that make an impact.
</span>

        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='md:text-md text-[15px] text-secondary-secondary-1'> Here's a few technologies I've been working with recently: </div>
        <div className="skills flex gap-4 flex-wrap text-tertiary-tertiary-3">
          {skills.map((skill) => {
            return (
              <div
                className='text-[12px] md:text-sm hover:bg-gradient-to-r rounded-sm hover:shadow-lg  hover:shadow-secondary-secondary-2 from-primary-dark-bg-3 to-black text-se gap-1 px-4 py-1 flex-wrap flex-col  flex items-center justify-center'
                key={skill.id}
              >
                <img src={skill.icon} className='w-8 h-8 md:w-12 md:h-12' alt={skill.skill} />
                <span className='flex text-secondary-secondary-2 text-[11px] md:text-xs flex-none'>{skill.skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
