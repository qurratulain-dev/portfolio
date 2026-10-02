import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const [footerInView, setFooterInView] = useState(false)

  /* Visibility threshold, read on scroll.
     The listener used to fire setState directly on every scroll event, so a
     fast flick could queue one React render per event, each re-rendering this
     button. Work is now coalesced into a single requestAnimationFrame per
     frame, matching the pattern Navbar.jsx already uses for the same job, and
     the listener is passive so it never blocks scrolling. A frame flag rather
     than a timestamp, so a slow frame still reads the final scroll position. */
  useEffect(() => {
    let frame = 0
    const read = () => {
      frame = 0
      setVisible(window.scrollY > 100)
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  /* The button is pinned to the bottom-right corner, which on a 320-375px
     screen sits directly on top of the footer's legal line and made it
     untappable. Rather than pad the footer with dead space to clear it, the
     button hides once the footer is actually on screen - by then the page is
     at its end, so there is nothing left to scroll up from. Same
     IntersectionObserver approach Ticker.jsx uses. */
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { rootMargin: '0px 0px -20% 0px' }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const shown = visible && !footerInView

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`animate-item btn-icon fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ border: "1px solid var(--ui-border-strong)", backgroundColor: "var(--ui-action-bg)", color: "var(--ui-on-accent)" }}
      aria-label="Scroll to top"
      /* While faded out the button is invisible but still in the DOM, so it
         has to leave the tab order and the accessibility tree too, otherwise
         keyboard users tab onto a control they cannot see. */
      tabIndex={shown ? 0 : -1}
      aria-hidden={shown ? undefined : true}
    >
      <span aria-hidden="true"><FiArrowUp /></span>
    </button>
  )
}

export default ScrollToTop
