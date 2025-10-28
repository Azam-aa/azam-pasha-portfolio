import React from 'react'
import { PROJECTS } from '../data'

export default function GitHubAnalysis({ site }) {
  const languages = [
    { name: 'JavaScript', pct: 52.1 },
    { name: 'Python', pct: 30.5 },
    { name: 'HTML', pct: 10.4 }
  ]
  return (
    <div className="card-ghost">
      <div className="row">
        <div className="col-md-6">
          <h5 className="section-title">GitHub Overview</h5>
          <div className="kv">Profile: <a href={site.github} target="_blank" rel="noreferrer noopener">View on GitHub</a></div>
          <div className="mt-3">
            <div className="small-muted">Top Languages</div>
            <ul>
              {languages.map(l => (
                <li key={l.name}>{l.name} — {l.pct}%</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="section-title">Projects Snapshot</h5>
          <div className="small-muted">Sample projects</div>
          <ul>
            {PROJECTS.map(p => <li key={p.name}><a href={p.githubUrl} target="_blank" rel="noreferrer noopener">{p.name}</a></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
