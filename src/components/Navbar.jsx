import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HireModal from './HireModal.jsx'

export default function NavBar({ theme, setTheme, site }) {
  const navigate = useNavigate()
  const openCerts = () => navigate('/certifications')
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'problem-solving', label: 'Problem Solving' },
    { id: 'major-contribution', label: 'Major Contribution' },
    { id: 'github-analysis', label: 'Github Analysis' }
  ]
  return (
    <nav className="navbar topbar">
      <div className="container">
        <a className="navbar-brand" href="/">Azam Pasha</a>
        <div className="d-flex align-items-center gap-2">
          <div className="d-none d-md-flex align-items-center me-2">
            {sections.map(s => (
              <a key={s.id} className="nav-link" href={`/#${s.id}`}>{s.label}</a>
            ))}
            <button className="nav-link" onClick={openCerts}>Certifications</button>
          </div>
          <div className="me-2">
            <div className="form-check form-switch">
              <input className="form-check-input" id="themeSwitch" type="checkbox" onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')} checked={theme === 'light'} />
              <label className="form-check-label small-muted" htmlFor="themeSwitch">Light</label>
            </div>
          </div>
          <HireModal site={site}>
            <button className="btn hire-btn">Hire Me</button>
          </HireModal>
          <button className="btn btn-outline-accent d-md-none ms-2" onClick={() => document.body.classList.toggle('show-mobile-nav')}>Menu</button>
        </div>
      </div>
    </nav>
  )
}
