import React from 'react'
export default function About(){
  return (
    <section className="section">
      <div className="container">
        <h2>About RIPE</h2>
        <p className="lead">Rural Institute for People's Enlightenment (RIPE) is a registered NGO in Tirupati enabling inclusive rural development through women-led community institutions and evidence-backed pilots.</p>
        <div className="cards" style={{marginTop:16}}>
          <div className="card"><h3>Vision</h3><p>Equitable, resilient communities with dignity and opportunity for all.</p></div>
          <div className="card"><h3>Mission</h3><p>Empower women & youth, strengthen local institutions, and enable access to rights and livelihoods.</p></div>
          <div className="card"><h3>Approach</h3><p>Participatory planning, convergence with public schemes, and SDG-aligned programs.</p></div>
        </div>
      </div>
    </section>
  )
}