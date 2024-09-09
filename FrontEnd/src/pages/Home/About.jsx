import React from 'react'
import Section from '../../components/Section'
import abtImg from '../../assets/images/21004063-removebg-preview.png'

export const About = () => {

        const skills = [
          {
              "id": 1,
              "skill": "Javascript",
              "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
          },
          {
              "id": 2,
              "skill": "React",
              "icon": "https://img.icons8.com/color/48/000000/react-native.png"
          },
          {
              "id": 3,
              "skill": "Tailwind CSS",
              "icon": "https://img.icons8.com/color/48/000000/tailwindcss.png"
          },
          {
              "id": 4,
              "skill": "Node JS",
              "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
          },
          {
              "id": 5,
              "skill": "Express JS",
              "icon": "https://img.icons8.com/?size=100&id=Lk2Q5FRKDWGI&format=png&color=000000"
          },
          {
              "id": 6,
              "skill": "MongoDB",
              "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
          },
          {
              "id": 7,
              "skill": "Firebase",
              "icon": "https://img.icons8.com/color/48/000000/firebase.png"
          }
        ]

// console.log(skills.map((data)=> {
//     return data.skill
// }))


  return (
    <div className='flex flex-col gap-8 pb-16'>
        <Section title="About"/>
        <div className='bottom-about flex gap-4 justify-center items-center'>
            <div className="left-abt">
                  <img src={abtImg} alt="re" />
            </div>
            <div className="right-abt flex flex-col md:text-sm text-[11px] gap-4">
                <span className='text-white '>
                I’m a dedicated front-end and full-stack developer with a strong foundation in building scalable web applications. I excel in using technologies like HTML, React, and JavaScript to create clean, responsive, and dynamic user interfaces.
                </span>
                <span className='text-white '>
                Additionally, my skills extend to the back end with Node.js, Express.js, and MongoDB, allowing me to develop robust APIs and manage databases efficiently.
                </span>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='text-md text-tertiary-tertiary-3'> Here's a few technologies ive been working with recentlty: </div>
            <div className="skills flex gap-4 flex-wrap text-tertiary-tertiary-3">
                {skills.map((skill)=> {
                    return (
                    <div className='border border-secondary-secondary-2 text-sm text-se gap-1 px-4 py-1 flex-wrap flex items-center justify-center' key={skill.id}>
                        <img src={`${skill.icon}`} className='size-6'></img> <span className='flex flex-none'>{skill.skill}</span>
                    </div>)
                } )}
            </div>
        </div>
    </div>
  )
}




