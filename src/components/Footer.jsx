import React from 'react'
import HireModal from './HireModal.jsx'

export default function Footer({ site }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-6">
            <h6>Azam Pasha</h6>
            <div className="kv">Full-stack & AI-powered developer</div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <HireModal site={site}>
              <button className="btn hire-btn">Hire Me</button>
            </HireModal>
          </div>
        </div>
        <div className="text-center small-muted">© {new Date().getFullYear()} Azam Pasha. All rights reserved.</div>
      </div>
    </footer>
  )
}
