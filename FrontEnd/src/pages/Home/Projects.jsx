import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import { FiExternalLink } from 'react-icons/fi'; // Import arrow icon for external link
import Section from '../../components/Section';
import ProjectsIn from '../../assets/resources/ProjectsData';
import img2 from '../../assets/images/Jimneys.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [ProjectsData, setProjectData] = useState(ProjectsIn);

  useEffect(() => {
    if (ProjectsData) {
      console.log('Projects data loaded');
    }
  }, [ProjectsData]);

  return (
    <div className="sm:h-[60vh] pt-6 sm:pt-0 max-h-[400px] min-h-[350px] w-full flex flex-col">
      <Section title="Projects" />

      <div className="flex flex-col w-full md:gap-16 items-center md:flex-row mt-12 h-full gap-4">
        {/* Scrollable container for project names */}
        <div className="w-full md:w-auto mb-4 overflow-x-auto pb-6 flex md:flex-col items-center space-x-4 md:space-x-0">
          {ProjectsData.map((data, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`flex-shrink-0 cursor-pointer text-sm p-2 rounded-md transition-all duration-300
                ${selectedProject === index ? 'bg-teal-600 bg-opacity-20 text-teal-500 font-semibold' : 'hover:bg-opacity-10 hover:bg-gray-600'}`}
            >
              <h1>{data.name}</h1>
            </div>
          ))}
        </div>

        {/* Project details */}
        <div className="rightExp flex-1 h-fit shadow-teal-500 p-4 mt-[-30px] rounded-md">
          {ProjectsData.map((data, index) => (
            <div key={index} className={`${selectedProject === index ? 'block' : 'hidden'} flex flex-col sm:flex-row gap-6`}>
              <div className='w-[40%] hidden md:flex '>
                   <img className="w-[100%] rounded-lg md: object-cover h-[240px]  border-r-secondary-secondary-2 border-r-4 border-b-secondary-secondary-2 border-b-8" src={img2} alt={data.name} />
              </div>
              <div className="sm:w-[60%] md:hidden">
                <h1 className="text-secondary-secondary-2 sm:hidden text-xl font- text-cente mb-2">{data.name}</h1>
                <div className="flex flex-wrap font-extralight justify-cente mt-[-10px] sm:justify-start gap-2 ">
                  {data.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className=" text-[11px] font-light py-1"
                    >
                      {tech},
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col mt-[] gap-4 sm:w-[40%] text-cente sm:text-left">
                <h1 className="text-secondary-secondary-2 hidden sm:block text-2xl font-">{data.name}</h1>
                <div className="sm:w-[60%] md:mt-[-10px]">
                  <div className=" flex-nowrap font-extralight hidden md:flex justify-cente mt-[-10px] sm:justify-start gap-2 ">
                    {data.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className=" text-[11px] flex flex-shrink-0 font-light py-"
                      >
                        {tech},
                      </span>
                    ))}
                  </div>
                </div>
                <p className="bg-gradient-to-r mt-[-22px] md:mt-[0] text-tertiary-tertiary-2 from-secondary-secondary-2/20 to-gray-800 text-sm p-2 rounded-md">
                  {data.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-cente sm:justify-start">
                  <a
                    href={data.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-secondary-secondary-2 text-primary-dark-bg-2 hover:bg-secondary-secondary-2/80 px-4 py-2 text-xs rounded-md hover:bg-secondary-secondary-2 transition duration-300"
                  >
                     Source Code <FaGithub className="ml-1" />
                  </a>
                  <a
                    href={data.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-secondary-secondary-2 text-primary-dark-bg-2 hover:bg-secondary-secondary-2/80 px-4 py-2 text-xs rounded-md hover:bg-secondary-secondary-2 transition duration-300"
                  >
                    Live Demo <FiExternalLink className="ml-1" /> 
                  </a>
                </div>
                <div className=''>
                   <img className="w-full rounded-lg md:hidden object-cover h-[240px]  border-r-secondary-secondary-2 border-r-4 border-b-secondary-secondary-2 border-b-8" src={img2} alt={data.name} />
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
