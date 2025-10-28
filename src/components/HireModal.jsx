import React from 'react'

export default function HireModal({ children, site }) {
  return (
    <>
      <button className="btn" data-bs-toggle="modal" data-bs-target="#hireModal">{children}</button>
      <div className="modal fade" id="hireModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{background:'var(--card)', color:'var(--text)'}}>
            <div className="modal-header">
              <h5 className="modal-title">Contact / Hire</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <p className="kv">Email</p>
                  <a className="d-block" href={`mailto:${site.contact.email}`} target="_blank" rel="noreferrer noopener">{site.contact.email}</a>
                  <p className="kv mt-3">Phone</p>
                  <a className="d-block" href={`tel:${site.contact.phone}`} target="_blank" rel="noreferrer noopener">{site.contact.phone}</a>
                  <p className="kv mt-3">Profiles</p>
                  <div className="d-flex gap-2">
                    <a className="btn btn-outline-accent" href={site.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
                    <a className="btn btn-outline-accent" href={site.github} target="_blank" rel="noreferrer noopener">GitHub</a>
                    <a className="btn btn-outline-accent" href={site.leetcode} target="_blank" rel="noreferrer noopener">LeetCode</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="kv">Resume</p>
                  <a className="btn btn-accent d-inline-block me-2" href={site.resumeUrl} target="_blank" rel="noreferrer noopener">Download PDF</a>
                  <a className="btn btn-outline-accent" href={site.resumeUrl} target="_blank" rel="noreferrer noopener">Open in new tab</a>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline-accent" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
