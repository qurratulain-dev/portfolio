import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import ScrollToTop from '../components/ScrollToTop'

const MainLayout = ({ children, isDarkMode, onToggleTheme }) => {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default MainLayout
