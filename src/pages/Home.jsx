import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="hero">
      <div className="container hero-inner">
        <div>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            <span className="badge">Community-led</span>
            <span className="badge">SDG-aligned</span>
            <span className="badge">Andhra Pradesh</span>
          </div>
          <h1 style={{margin:'10px 0 8px'}}>Build dignified, resilient rural communities in Chittoor.</h1>
          <p>RIPE advances education, health, livelihoods, and climate resilience through women-led institutions and public-scheme convergence.</p>
          <div style={{display:'flex', gap:12, marginTop:16}}>
            <Link to="/donate" className="btn cta">Donate Now</Link>
            <Link to="/programs" className="btn brand">See Programs</Link>
          </div>
          <div className="kpis">
            {[
              ['35k+','People reached'],
              ['180+','Villages served'],
              ['20+','Years of service'],
              ['1200+','Volunteers mobilized']
            ].map(([n,c]) => (
              <div className="kpi" key={n}><div className="num">{n}</div><div className="cap">{c}</div></div>
            ))}
          </div>
        </div>
        <div className="media">
          <img src="https://images.unsplash.com/photo-1516632664305-eda5d4b88f00?q=80&w=1600&auto=format&fit=crop" alt="Community meeting"/>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2>Focus Areas</h2>
          <p className="lead">Program areas aligned to our mission and community priorities.</p>
          <div className="cards" style={{marginTop:12}}>
            {[
              ['Women Empowerment','SHGs, leadership & financial inclusion'],
              ['Health & WASH','Handwashing, sanitation, menstrual health'],
              ['Livelihoods','Youth skilling & entrepreneurship'],
              ['Education','Scholarships & digital literacy'],
              ['Climate & Agri','Water budgeting, climate advisories'],
              ['Rights & Governance','Entitlements, social audits, institutions'],
            ].map(([t,d]) => (
              <div className="card" key={t}>
                <h3>{t}</h3>
                <p style={{color:'var(--muted)'}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}