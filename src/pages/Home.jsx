import React from 'react'
import { SITE, PROJECTS } from '../data'
import ProjectCard from '../components/ProjectCard.jsx'
import GitHubAnalysis from '../components/GitHubAnalysis.jsx'

export default function Home() {
  return (
    <div>
      <section id="about" className="mb-4 header-hero card-ghost">
        <div className="d-flex justify-content-between">
          <div>
            <h1 style={{marginBottom:6}}>Azam Pasha</h1>
            <div className="small-muted">Founding Engineer • Full Stack Developer • UI/UX enthusiast</div>
            <div className="mt-2">
              <a className="btn btn-outline-accent me-2" href={SITE.resumeUrl} target="_blank" rel="noreferrer noopener">Resume</a>
              <a className="btn btn-outline-accent me-2" href={SITE.github} target="_blank" rel="noreferrer noopener">GitHub</a>
              <a className="btn btn-outline-accent" href={SITE.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
            </div>
          </div>
          <div className="text-end small-muted">
            <div>📍 Bangalore, India</div>
            <div className="mt-2">Email: <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a></div>
            <div>Phone: <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a></div>
          </div>
        </div>
      </section>

      <div className="row">
        <div className="col-lg-8">
          <section id="experience" className="mb-4">
            <h3 className="section-title">Experience</h3>
            <div className="card-ghost">
              <h5 style={{marginBottom:4}}>Vacons Technologies</h5>
              <div className="small-muted">UI/UX Design Intern — Oct 2023 – Dec 2023</div>
              <p className="small-muted">Worked on frontend components, responsive layouts, and improved UX flows for web apps.</p>
            </div>
            <div className="mt-3 card-ghost">
              <h5 style={{marginBottom:4}}>Rooman Technologies</h5>
              <div className="small-muted">College Ambassador — Sept 2024 – Jul 2025</div>
            </div>
          </section>

          <section id="major-contribution" className="mb-4">
            <h3 className="section-title">Major Contribution (Projects)</h3>
            {PROJECTS.map(p => <ProjectCard key={p.name} project={p} />)}
          </section>

          <section id="problem-solving" className="mb-4">
            <h3 className="section-title">Problem Solving & DSA</h3>
            <div className="card-ghost">
              <div className="small-muted">LeetCode, InterviewBit, GeeksforGeeks snapshots can go here. Link to profile:</div>
              <a href={SITE.leetcode} target="_blank" rel="noreferrer noopener">{SITE.leetcode}</a>
            </div>
          </section>

          <section id="github-analysis" className="mb-4">
            <h3 className="section-title">GitHub Analysis</h3>
            <GitHubAnalysis site={SITE}/>
          </section>
        </div>

        <aside className="col-lg-4">
          <div className="card-ghost mb-3">
            <h5 className="section-title">Skills</h5>
            <div>
              <span className="skills-badge">React</span>
              <span className="skills-badge">Node.js</span>
              <span className="skills-badge">Bootstrap</span>
              <span className="skills-badge">Python</span>
              <span className="skills-badge">OpenCV</span>
            </div>
          </div>

          <div className="card-ghost mb-3">
            <h5 className="section-title">Education</h5>
            <div className="small-muted">B.E. Computer Science — Rural Engineering College, Hulkoti</div>
          </div>

          <div className="card-ghost">
            <h5 className="section-title">Contact</h5>
            <div className="kv">Email</div>
            <a href={`mailto:${SITE.contact.email}`} target="_blank" rel="noreferrer noopener">{SITE.contact.email}</a>
            <div className="kv mt-2">GitHub</div>
            <a href={SITE.github} target="_blank" rel="noreferrer noopener">{SITE.github}</a>
            <div className="kv mt-2">LinkedIn</div>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer noopener">{SITE.linkedin}</a>
          </div>
        </aside>
      </div>
    </div>
  )
}
