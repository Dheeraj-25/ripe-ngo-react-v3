import React, { useState } from 'react'
export default function Contact(){
  const [sent,setSent]=useState(false)
  function onSubmit(e){ e.preventDefault(); setSent(true) }
  return (
    <section className="section">
      <div className="container">
        <h2>Contact & Volunteer</h2>
        {sent ? <div className="card">Thanks! We received your message.</div> : (
          <form className="card" onSubmit={onSubmit}>
            <div style={{display:'grid', gap:16, gridTemplateColumns:'1fr 1fr'}}>
              <div><label htmlFor="n">Name</label><input id="n" required placeholder="Your name"/></div>
              <div><label htmlFor="e">Email</label><input id="e" required type="email" placeholder="you@example.com"/></div>
            </div>
            <div style={{marginTop:12}}><label htmlFor="m">Message</label><textarea id="m" rows="5" placeholder="How would you like to help?" required/></div>
            <div style={{marginTop:14}}><button className="btn brand" type="submit">Send</button></div>
            <p style={{marginTop:10, color:'var(--muted)'}}>Address: Tirupati (Urban), Chittoor–517501 • Phone: <a href="tel:+919440760393">9440760393</a></p>
          </form>
        )}
      </div>
    </section>
  )
}