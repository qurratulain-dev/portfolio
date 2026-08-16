import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100)
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
      className={`animate-item fixed bottom-8 right-8 z-50 w-10 h-10 inline-flex items-center justify-center rounded-lg text-xl transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ border: "1px solid #3F3F46", backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  )
}

export default ScrollToTop
