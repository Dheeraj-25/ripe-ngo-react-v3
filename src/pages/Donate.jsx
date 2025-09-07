import React from 'react'
export default function Donate(){
  return (
    <section className="section">
      <div className="container">
        <h2>Donate</h2>
        <p className="lead">Choose a one-time or monthly donation. 80G receipts available.</p>
        <div className="cards" style={{marginTop:12}}>
          <div className="card"><h3>Monthly Support</h3><p>₹500 · ₹1000 · ₹2000</p><a className="btn cta" href="#">Give Monthly</a></div>
          <div className="card"><h3>One-time</h3><p>₹1000 · ₹2500 · ₹5000</p><a className="btn brand" href="#">Give Now</a></div>
          <div className="card"><h3>In Honour</h3><p>Donate for a special occasion and share an e-certificate.</p><a className="btn" href="#">Celebrate & Give</a></div>
        </div>
      </div>
    </section>
  )
}