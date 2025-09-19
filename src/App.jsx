import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const Home = lazy(()=>import('./pages/Home.jsx'))
const About = lazy(()=>import('./pages/About.jsx'))
const Programs = lazy(()=>import('./pages/Programs.jsx'))
const Impact = lazy(()=>import('./pages/Impact.jsx'))
const Transparency = lazy(()=>import('./pages/Transparency.jsx'))
const Stories = lazy(()=>import('./pages/Stories.jsx'))
const Contact = lazy(()=>import('./pages/Contact.jsx'))

const Donate = lazy(()=>import('./pages/Donate.jsx'))
const OurTeam = lazy(()=>import('./pages/OurTeam.jsx'))

export default function App(){
  return (
    <div>
      <Navbar/>
      <Suspense fallback={<div className="container" style={{padding:'40px 0'}}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/transparency" element={<Transparency/>}/>
          <Route path="/stories" element={<Stories/>}/>
          <Route path="/ourteam" element={<OurTeam/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/donate" element={<Donate/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}