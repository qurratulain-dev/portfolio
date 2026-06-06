import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`animate-item fixed bottom-8 right-8 z-50 overflow-hidden w-10 h-10 border-2 border-emerald-500 text-white inline-flex items-center justify-center rounded-lg text-xl transition-all duration-500 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <span className="relative z-10">
        <FiArrowUp />
      </span>
      <span
        className="absolute top-0 left-0 w-full h-full bg-emerald-500 origin-bottom-left 
          -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"
      ></span>
    </button>
  )
}

export default ScrollToTop
