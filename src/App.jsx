import React, { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'


const App = () => {
  const [theme, setTheme] = useState('dark')

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`app-shell theme-${theme}`}>
      <MainLayout isDarkMode={isDarkMode} onToggleTheme={toggleTheme}>
        <Home />
      </MainLayout>
    </div>
  )
}

export default App
