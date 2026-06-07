import React from 'react'
import Hero from '../../sections/Hero/Hero'
import Ticker from '../../sections/Ticker/Ticker'
import About from '../../sections/About/About'
import Skills from '../../sections/Skills/Skills'
import Experience from '../../sections/Experience/Experience'
import Projects from '../../sections/Projects/Projects'
import Contact from '../../sections/Contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
