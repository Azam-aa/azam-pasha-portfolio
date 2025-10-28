import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Certifications from './pages/Certifications.jsx'
import NavBar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { SITE } from './data.js'

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const location = useLocation()
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} site={SITE} />
      <main className="container-lg">
        <Routes>
          <Route path="/" element={<Home site={SITE} />} />
          <Route path="/certifications" element={<Certifications site={SITE} />} />
        </Routes>
      </main>
      <Footer site={SITE} setTheme={setTheme} theme={theme}/>
    </>
  )
}
