import React, { useState, useEffect } from 'react';
import { Intro } from './Intro';
import { About } from './About';
import Experience from './Experience';
import Header from '../../components/Header';
import Projects from './Projects';
import { Contact } from './Contact';
import { Footer } from '../../components/Footer';

const getRandomNumber = () => Math.floor(Math.random() * 100) ; // Generates a random number between 1 and 100

const getRandomPosition = () => ({
  top: `${Math.floor(Math.random() * 100)}vh`,  // Random top position within the viewport height
  left: `${Math.floor(Math.random() * 80)}vw`  // Random left position within the viewport width
});

const Home = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber());
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(getRandomNumber());
      setPosition(getRandomPosition());
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative'>
      <Header />
      <div
          className='absolute text-white w-2 h-2 bg-secondary-secondary-2 rounded-full transition-all duration-[3s] text-2xl font-bold z-[10] animate-bounce'
          style={{ top: position.top, left: position.left }}
        >
        </div>

        <div
          className='absolute text-white w-2 h-2 bg-secondary-secondary-2 rounded-full transition-all duration-[2.5s] text-2xl font-bold z-[10] animate-bounce'
          style={{ top: position.top, left: position.left }}
        >
        </div>

        <div
          className='absolute text-white w-2 h-2 bg-secondary-secondary-2 rounded-full transition-all duration-[2s] text-2xl font-bold z-[10] animate-bounce'
          style={{ top: position.top, left: position.left}}
        >
        </div>
      <div className='bg-primary-dark-bg-2 bg-gradient-to-r z-[2] from-slate-950 flex flex-col px-8 xl:px-[11%] 2xl:px-[20%] sm:px-[10vw]'>
        <div
          className='absolute text-white w-2 h-2 bg-secondary-secondary-2 rounded-full transition-all duration-[1.8s] text-2xl font-bold z-[10] animate-bounce'
          style={{ top: position.top, left: position.left}}
        >
        </div>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
