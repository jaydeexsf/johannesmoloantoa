import React, { useState } from 'react';
import Section from '../../components/Section';
import ProjectsData from '../../assets/resources/ProjectsData';
import jimneys from '../../assets/images/jimneys.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="h-[80vh] md:pb-8 w-full flex flex-col ">
      <Section title="Projects" className=""/>
      
      <div className="flex flex-col w-full md:gap-36 items-center md:flex-row mt-8 h-full gap-8">
        {/* Scrollable container for project names */}
        <div className="w-full md:w-[unset]   overflow-x-auto pb-12  md:overflow-hidden flex md:flex-col items-cente md:space-x-0 space-x-4 pb-2">
          {ProjectsData.map((data, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`flex-shrink-0 cursor-pointer text-[14px] p-2 rounded-md transition-all duration-300
                ${selectedProject === index ? 'bg-[#5CCFE6] bg-opacity-20 text-secondary-secondary-2 font-semibold' : 'hover:bg-opacity-10 hover:bg-gray-600'}
              `}
            >
              <h1 className="">{data.name}</h1>
            </div>
          ))}
        </div>

        {/* Project details */}
        <div className="rightExp flex-1  h-fit bg-gray-800 p-6 max-w-[700px] rounded-md shadow-lg">
          {ProjectsData.map((data, index) => (
            <div key={index} className={`${selectedProject === index ? 'block' : 'hidden'} flex flex-col gap-4 `}>
              <h1 className="text-secondary-secondary-3 text-2xl font-semibold">{data.name}</h1>
              {/* The UI looks bad with the image */}
              {/* <img 
                        src={jimneys} 
                        alt="" 
                        className='w-full md:h-[20vw] md:hidden block object-cover'
                    /> */}
              <p className="text-tertiary-tertiary-2 text-sm text-cente">{data.description}</p>
              <div className="flex gap-4">
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
              <div className="flex flex-wrap gap-2 mt-4">
                {data.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-secondary-secondary-2 text-xs p-2 rounded-sm text-primary-dark-bg-3">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
