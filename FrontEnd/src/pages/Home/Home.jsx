import React from 'react'
import { Intro } from './Intro'
import { About } from './About'
// import { Header } from '../../components/Header'
import Experience from './Experience'
import Header from '../../components/Header'
import Projects from './Projects'
import { Contact } from './Contact'
import { Footer } from '../../components/Footer'
import Loader from '../../components/Loader'

const Home = () => {
  return (
    <div className=''>
       <Header />
        <div className='bg-primary-dark-bg-2 flex flex-col px-8 xl:px-[11%] 2xl:px-[20%]  sm:px-[10vw]'>
            <Intro />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    </div>
  )
}

export default Home