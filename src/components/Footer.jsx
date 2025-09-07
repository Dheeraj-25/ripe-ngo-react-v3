import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer>
      <div className="container cols">
        <div>
          <div className="brand">
            <img className="logo" src="/RIPE_Logo_new.png" alt="RIPE logo"/><strong>Rural Institute for People's Enlightenment</strong>
          </div>
          <p style={{marginTop:8}}>Tirupati (Urban), Chittoor District, Andhra Pradesh 517501</p>
          <p>Phone: <a href="tel:+919440760393">9440760393</a> • Email: <a href="mailto:ripe.org.in@gmail.com">ripe.org.in@gmail.com</a></p>
          <p>© {new Date().getFullYear()} RIPE. All rights reserved.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:6}}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/stories">Stories</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get Involved</h4>
          <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:6}}>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Volunteer</Link></li>
            <li><a href="https://ripe.1ngo.in" target="_blank" rel="noreferrer">Legacy site</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}