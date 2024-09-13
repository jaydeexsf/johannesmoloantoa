import React from "react";

const Header = () => {
  return ( 
    <div className="bg-primary-dark-bg-1 text-white font-semibold p-4 flex items-center justify-between">
      <div className="name text-2xl">
        <span className="text-secondary-secondary-3 text-3xl">J</span>ohannes 
      </div>

      <div>
        <span className="text-secondary-secondary-1 text-3xl">M</span>
      </div>

      <div className="prof md:block hidden text-tertiary-tertiary-2 text-xl">
        <span className="text-secondary-secondary-3"> Full </span><span className="text-white">Stack</span> <span className="text-secondary-secondary-1">Developer</span>
      </div>
    </div>
  );
};

export default Header;
