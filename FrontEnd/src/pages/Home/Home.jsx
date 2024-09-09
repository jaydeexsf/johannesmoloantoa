import React from 'react'
import { Intro } from './Intro'
import { About } from './About'
// import { Header } from '../../components/Header'
import Experience from './Experience'
import Header from '../../components/Header'
import Projects from './Projects'

const Home = () => {
  return (
    <div className=''>
       <Header />
        <div className='bg-primary-dark-bg-2 flex flex-col px-8  sm:px-[10vw]'>
            <Intro />
            <About />
            <Experience />
            <Projects />
        </div>
    </div>
  )
}

export default Home