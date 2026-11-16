import React from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'


const App = () => {
  return (
    <div className="app-shell">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  )
}

export default App
