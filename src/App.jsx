import React from 'react'
import { useTheme } from './hooks/useTheme'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'


const App = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`app-shell theme-${theme}`}>
      <MainLayout isDarkMode={isDarkMode} onToggleTheme={toggleTheme}>
        <Home />
      </MainLayout>
    </div>
  )
}

export default App
