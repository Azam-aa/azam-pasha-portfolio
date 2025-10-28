import React, { useState, useRef, useEffect } from 'react'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (open && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [open])
  return (
    <div ref={ref} className="project-card">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 style={{marginBottom:6}}>{project.name}</h5>
          <div className="small-muted">{project.shortDescription}</div>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-accent me-2" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Close' : 'Details'}</button>
          <a className="btn btn-sm btn-accent" href={project.githubUrl} target="_blank" rel="noreferrer noopener">GitHub</a>
        </div>
      </div>
      {open && (
        <div style={{marginTop:12}}>
          <div className="small-muted">Technologies</div>
          <div style={{marginBottom:8}}>
            {project.technologies.map(t => <span key={t} className="skills-badge">{t}</span>)}
          </div>
          <div className="d-flex gap-2">
            {project.liveDemoUrl && <a className="btn btn-outline-accent" href={project.liveDemoUrl} target="_blank" rel="noreferrer noopener">Demo</a>}
            {project.youtubeVideoUrl && <a className="btn btn-outline-accent" href={project.youtubeVideoUrl} target="_blank" rel="noreferrer noopener">YouTube</a>}
          </div>
        </div>
      )}
    </div>
  )
}
