import React, { useState } from 'react';
import Section from '../../components/Section';
import ProjectsData from '../../assets/resources/ProjectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="h-[80vh] pb-8 w-full flex flex-col gap-8">
      <Section title="Projects" />
      
      <div className="flex flex-col w-full md:flex-row h-full">
        {/* Scrollable container for project names */}
        <div className="w-full md:overflow-x-auto flex items-center space-x-4 pb-2">
          {ProjectsData.map((data, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`flex-shrink-0 cursor-pointer text-[14px] p-2 rounded-md transition-all duration-300
                ${selectedProject === index ? 'bg-[#5CCFE6] bg-opacity-20 text-secondary-secondary-2 font-semibold' : 'hover:bg-opacity-10 hover:bg-gray-600'}
              `}
            >
              <h1 className="text-center">{data.name}</h1>
            </div>
          ))}
        </div>

        {/* Project details */}
        <div className="rightExp flex-1 bg-gray-800 p-6 rounded-md shadow-lg">
          {ProjectsData.map((data, index) => (
            <div key={index} className={`${selectedProject === index ? 'block' : 'hidden'} flex flex-col gap-4`}>
              <h1 className="text-secondary-secondary-3 text-2xl font-semibold">{data.name}</h1>
              <p className="text-tertiary-tertiary-2 text-sm">{data.description}</p>
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
