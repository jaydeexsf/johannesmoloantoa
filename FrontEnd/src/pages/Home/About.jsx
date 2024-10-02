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
    { id: 7, skill: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png' }
  ]);

  // useEffect(() => {
  //   if (portfolioData) {
  //     setSkills(portfolioData.about);
  //   }
  // }, [portfolioData]);

  return (
    <div className='flex flex-col pt-12 gap-8 pb-16'>
      <Section title="About Me" />
      <div className='bottom-about flex gap-4 justify-center items-center'>
        <div className="left-abt border-secondary-secondary-2 w-full border shadow-sm hover:shadow-lg shadow-secondary-secondary-2 hover:shadow-secondary-secondary- bg-black/50 bg-gradient-to-r from-secondary-secondary-2 to-bla hover:border-secondary-secondary-1 hover:from-secondary-secondary-1 hover:to-black/10 hover:shadow-secondary-secondary-1 w-[80%] transition-all duration-300 max-w-[100px]">
          <img src={myImage} className='sm:mt-[-80px] w-[200px] sm:-fit h-[210px] object-cover mt-[-50px]' alt="About Me" />
        </div>
        <div className="right-abt flex flex-col md:text-sm text-[12px] gap-4">
          <span className='text-tertiary-tertiary-2'>
            I’m a dedicated front-end and full-stack developer with a strong foundation in building scalable web applications. I excel in using technologies like, React, Tailwind CSS, and JavaScript to create clean, responsive, and dynamic user interfaces.
          </span>
          <span className='text-tertiary-tertiary-2'>
            Additionally, my skills extend to the back end with Node.js, Express.js, and MongoDB, allowing me to develop robust APIs and manage databases efficiently.
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='md:text-md text-[15px] text-secondary-secondary-1'> Here's a few technologies I've been working with recently: </div>
        <div className="skills flex gap-4 flex-wrap text-tertiary-tertiary-3">
          {skills.map((skill) => {
            return (
              <div
                className='border border-secondary-secondary-2 text-[12px] md:text-sm text-se gap-1 px-4 py-1 flex-wrap flex items-center justify-center'
                key={skill.id}
              >
                <img src={skill.icon} className='w-6 h-6' alt={skill.skill} />
                <span className='flex text-secondary-secondary-2 flex-none'>{skill.skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
