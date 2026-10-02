import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'

const MainLayout = ({ children }) => {
  return (
    <>
      {/* First tab stop on the page. Off-screen until focused, then it drops in
          above the header. It has to sit before <Navbar> in the DOM to be the
          first thing a keyboard user reaches. */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      {/* tabIndex -1 keeps <main> out of the tab order while still letting the
          skip link hand it focus, which is what moves the screen reader cursor
          and the visible focus ring to the real content. It is excluded from the
          global :focus-visible rule, so no ring is drawn around the page. */}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default MainLayout
