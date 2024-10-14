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
    <div className="sm:h-[60vh] pt-6 sm:pt-0 max-h-[400px] pb-[100px] mb-[40px] min-h-[350px] w-full flex flex-col">
      <Section title="Projects" />

      <div className="flex flex-col w-full md:gap-16  items-cente md:flex-row mt-12 h-full gap-4">
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
             <div className='border-l-tertiary-tertiary-3 md:block hidden border-l-[7px] border-t-[15px] max-h-[295px] bg-tertiary-tertiary-3 rounded-br-2xl rounded-t-lg border-t-tertiary-tertiary-3'>
                   <img className="w-full rounded-br-2xl object-cover h-[280px] shadow-md shadow-black rounded-tl-2xl" src={data.image} alt={data.name} />
                </div>
              <div className="sm:w-[60%] md:hidden">
                <h1 className="text-secondary-secondary-2 sm:hidden text-xl nowrap w-[100vw] text-nowrap text-cente mb-2">{data.name}</h1>
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
                <h1 className="text-secondary-secondary-2 hidden sm:block text-nowrap text-2xl font-">{data.name}</h1>
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
                <p className="bg-gradient-to-r lg:w-[100%] md:w-[140%] mt-[-22px] md:mt-[0] text-tertiary-tertiary-2 from-secondary-secondary-1/10 to-secondary-secondary-2/20 text-sm font-light p-2 rounded-md">
                  {data.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 text-nowrap justify-cente sm:justify-start">
                  <a
                    href={data.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-secondary-secondary-2 hover:cursor-pointer text-primary-dark-bg-2 hover:bg-secondary-secondary-2/80 px-4 py-2 text-xs rounded-md hover:bg-secondary-secondary-2 transition duration-300"
                  >
                     Source Code <FaGithub className="ml-1" />
                  </a>
                  <a
                    href={data.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-secondary-secondary-2 hover:cursor-pointer text-primary-dark-bg-2 hover:bg-secondary-secondary-2/80 px-4 py-2 text-xs rounded-md hover:bg-secondary-secondary-2 transition duration-300"
                  >
                    Live Demo <FiExternalLink className="ml-1" /> 
                  </a>
                </div>
                <div className='border-l-tertiary-tertiary-3 md:hidden border-l-[7px] border-t-[15px] bg-tertiary-tertiary-3 rounded-br-2xl rounded-t-lg border-t-tertiary-tertiary-3'>
                   <img className="w-full rounded-br-2xl md:hidden object-cover h-[280px] shadow-md shadow-black rounded-tl-2xl" src={data.image} alt={data.name} />
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
