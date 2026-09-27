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
      type="button"
      onClick={scrollToTop}
      className={`animate-item btn-icon fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ border: "1px solid var(--ui-border-strong)", backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
      aria-label="Scroll to top"
      /* While faded out the button is invisible but still in the DOM, so it
         has to leave the tab order and the accessibility tree too, otherwise
         keyboard users tab onto a control they cannot see. */
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
    >
      <span aria-hidden="true"><FiArrowUp /></span>
    </button>
  )
}

export default ScrollToTop