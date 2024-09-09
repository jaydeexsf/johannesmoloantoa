import React from "react";

const Header = () => {
  return ( 
    <div className="bg-primary-dark-bg-1 text-white font-semibold p-4 flex justify-between">
      <div className="name text-md">
        <span className="text-secondary-secondary-3 text-lg">J</span>ohannes <span className="text-secondary-secondary-1">M</span>.
      </div>

      <div className="prof md:block hidden">
        Full Stack Developer
      </div>
    </div>
  );
};

export default Header;
