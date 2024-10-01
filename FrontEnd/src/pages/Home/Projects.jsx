import React, { useContext, useEffect, useState } from 'react';
import Section from '../../components/Section';
import ProjectsIn from '../../assets/resources/ProjectsData';
import jimneys from '../../assets/images/jimneys.png';
import { ModeContext } from '../../components/ModeContext';
import img2 from '../../assets/images/Jimneys.png'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  // const { portfolioData } = useContext(ModeContext);

  const [ProjectsData, setProjectData] = useState(ProjectsIn)
  const [ProjectsDat, setProjectDat] = useState(ProjectsIn)
  console.log(ProjectsDat)

  useEffect(()=> {
    if (ProjectsData) {
      console.log('jjjb')
    } else {
      console.log('ss')
    }
  }, [ProjectsData])

  // useEffect(()=> {
  //     if(ProjectsDat) {
  //         setProjectData(ProjectsDat)
  //         console.log(ProjectsIn)
  //     }
  //     console.log(ProjectsDat)
  // }, [ProjectsDat])
// console.log(ProjectsData.name)

  return (
    <div className="sm:h-[60vh] min-h-[400px] md:pb-8 gap-8 w-full flex flex-col ">
      <Section title="Projects" className=""/>
      
      <div className="flex flex-col w-full md:gap-36 items-center  md:flex-row mt-8 h-full gap-2">
        {/* Scrollable container for project names */}
        <div className="w-full md:w-[unset]   overflow-x-auto pb-12  md:overflow-hidden flex md:flex-col items-cente md:space-x-0 space-x-4 pb-2">
          {ProjectsData.map((data, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`flex-shrink-0 cursor-pointer text-[14px] p-2 rounded-md transition-all duration-300
                ${selectedProject === index ? 'bg-[#277c8d] bg-opacity-20 text-secondary-secondary-2 font-semibold' : 'hover:bg-opacity-10 hover:bg-gray-600'}
              `}
            >
              <h1 className="">{data.name}</h1>
            </div>
          ))}
        </div>

        {/* Project details */}
        <div className="rightExp flex-1  h-fit bg-gray-800 p-2 max-w-[900px] rounded-md shadow-lg">
          {ProjectsData.map((data, index) => (
            <div key={index} className={`${selectedProject === index ? 'block' : 'hidden'} flex gap-6 flex-col sm:flex-row`}>
              <div className='sm:w-[150%] h-full'>
                <h1 className="text-secondary-secondary-3 bg-primary-dark-bg-1 rounded-md py-1 text-center mb-2 sm:hidden block text-2xl font-semibold">{data.name}</h1>
                <div className='gap-4 w-[full] h-full flex flex-col'>
                  <img className='w-[600px] rounded-[5px] object-cover h-[260px]' src={img2} alt="" />
                </div>
              </div>
              <div className='flex text-center sm:text-start flex-col gap-2 sm:gap-4 '>
              {/* The UI looks bad with the image */}
              {/* <img 
                        src={jimneys} 
                        alt="" 
                        className='w-full md:h-[20vw] md:hidden block object-cover'
                    /> */}
              <h1 className="text-secondary-secondary-3 sm:block hidden text-2xl font-semibold">{data.name}</h1>
              <p className="text-tertiary-tertiary-2 mt-[-15px] sm:mt-[0] text-sm text-cente">{data.description}</p>
              <div className="flex gap-4 text-center sm:justify-start justify-center text-[11px]">
                <a
                  href={data.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-secondary-3 underline hover:text-secondary-secondary-1 transition-all duration-300"
                >
                  Source Code
                </a>
                <a
                  href={data.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-secondary-3 underline hover:text-secondary-secondary-1 transition-all duration-300"
                >
                  Live Demo
                </a>
              </div>
              <div className="flex flex-wrap sm:justify-start justify-center text-center gap-2 mt-4">
                {data.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-secondary-secondary-2 text-center text-[11px] py-[1px] px-1 rounded-sm text-primary-dark-bg-3">
                    {'#'+tech}
                  </span>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
