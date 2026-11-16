import Hero from '../../sections/Hero/Hero'
import Ticker from '../../sections/Ticker/Ticker'
import About from '../../sections/About/About'
import Skills from '../../sections/Skills/Skills'
import Resume from '../../sections/Resume/Resume'
import Projects from '../../sections/Projects/Projects'
import Certifications from '../../sections/Certifications/Certifications'
import Contact from '../../sections/Contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Resume />
      <Certifications />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
