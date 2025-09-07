import React from 'react'
export default function Transparency(){
  return (
    <section className="section">
      <div className="container">
        <h2>Transparency</h2>
        <p className="lead">Annual reports, registrations, and CSR documentation will be hosted here.</p>
        <div className="cards" style={{marginTop:12}}>
          <div className="card"><h3>Annual Report</h3><p>Upload latest audited report (PDF).</p><a className="btn" href="#">Download</a></div>
          <div className="card"><h3>80G & 12A</h3><p>Place certificate copies for donors.</p><a className="btn" href="#">View</a></div>
          <div className="card"><h3>CSR Compliance</h3><p>CSR policy, MoUs, and impact reports.</p><a className="btn" href="#">Open</a></div>
        </div>
      </div>
    </section>
  )
}