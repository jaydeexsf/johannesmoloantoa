import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
     
      <div className="relative flex justify-center items-center mb-6">
        <div className="loader md:w-20 w-15 h-15 md:h-20 border-4 border-t-4 border-t-teal-400 border-slate-600 rounded-full animate-spin"></div>
        <span className="absolute text-teal-300 text-xl font-semibold tracking-wider">
          MJ
        </span>
      </div>

      {/* Personalized Text */}
      <p className="text-teal-300 text-xl md:text-2xl font-semibold tracking-widest">
        Moloantoa Johannes
      </p>
      <p className="text-gray-400 mt-2 text-sm animate-pulse">
         Wait a moment please...
      </p>
    </div>
  );
};

export default Loader;
