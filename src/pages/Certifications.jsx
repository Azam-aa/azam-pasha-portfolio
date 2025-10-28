import React from 'react'
import { SITE } from '../data'

const CERTS = [
  { title: 'Cloud Application Developer Intern', issuer: 'IBM', date: '2024', link: '#' },
  { title: 'Prompt Design in Vertex AI', issuer: 'Google', date: '2024', link: '#' },
  { title: 'Build Real World AI Applications', issuer: 'Coursera', date: '2024', link: '#' },
  { title: 'Deloitte - Technology Simulation', issuer: 'Deloitte', date: '2023', link: '#' },
  { title: 'Generative AI with Gemini', issuer: 'Google', date: '2024', link: '#' }
]

export default function Certifications() {
  return (
    <div>
      <div className="mb-4">
        <h1>Certifications</h1>
        <div className="small-muted">Verified certificates and skill badges</div>
      </div>
      <div className="row g-3">
        {CERTS.map(c => (
          <div key={c.title} className="col-lg-4 col-md-6">
            <div className="cert-card">
              <div className="d-flex justify-content-between">
                <div>
                  <h6 style={{marginBottom:4}}>{c.title}</h6>
                  <div className="small-muted">{c.issuer} • {c.date}</div>
                </div>
                <div>
                  <a className="btn btn-outline-accent" href={c.link} target="_blank" rel="noreferrer noopener">View</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
