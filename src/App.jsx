import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import ScrollToTop from './component/ScrollToTop/ScrollToTop'



const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default App
