import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <div className="nav">
      <div className="container inner">
        <Link to="/" className="brand">
          <img className="logo" src="/RIPE_Logo_new.svg" alt="RIPE logo"/>
          <span>RIPE</span>
        </Link>
        <nav className="menu">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/impact">Impact</NavLink>
          <NavLink to="/stories">Stories</NavLink>
          <NavLink to="/transparency">Transparency</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link to="/donate" className="btn cta">Donate</Link>
        </nav>
      </div>
    </div>
  )
}