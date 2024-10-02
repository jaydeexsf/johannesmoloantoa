import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = ({prof}) => {
  return ( 
    <div className="bg-primary-dark-bg-1 sticky top-0 left-0 z-[1000000000000] text-white font-semibold p-4 flex items-center justify-between">
      {/* <div className="name text-2xl">
        <span className="text-secondary-secondary-3 text-3xl"></span> 
      </div> */}

      <div className="prof md:block hidden text-secondary-secondary-3/90 text-xl">
        <span className="text-secondary"> Full </span>
        <span className="text-">Stack</span>
        <span className="text- ml-1">Developer</span>
      </div>

      <div className="text-xl md:hidden text-extrabold text-secondary-secondary-3">
      Ful Stack Dev
      </div>

      <div className="social-icons flex gap-4">
        <a 
          href="https://github.com/jaydeexsf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-secondary-secondary-3 transition-transform transform hover:scale-110 hover:text-secondary-secondary-1 hover:shadow-lg"
        >
          <FaGithub size={20} />
        </a>
        <a 
          href="https://linkedin.com/in/johannes-moloantoa-webdev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-secondary-secondary-3 transition-transform transform hover:scale-110 hover:text-secondary-secondary-1 hover:shadow-lg"
        >
          <FaLinkedin size={20} />
        </a>
        <a 
          href="https://twitter.com/@software_saga" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-secondary-secondary-3 transition-transform transform hover:scale-110 hover:text-secondary-secondary-1 hover:shadow-lg"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default Header;

