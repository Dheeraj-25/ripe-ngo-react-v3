
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Simple slideshow component
const images = [
  'https://images.unsplash.com/photo-1516632664305-eda5d4b88f00?q=80&w=1600&auto=format&fit=crop',
  'https://1ngo.in/media/ripe/ripe-2.png',
  'https://1ngo.in/media/ripe/ripe-3.png',
  'https://1ngo.in/media/ripe/WhatsApp%20Image%202025-04-11%20at%205.11.41%20PM%20(1).jpeg',
  'https://1ngo.in/media/ripe/WhatsApp%20Image%202025-04-11%20at%205.12.32%20PM.jpeg',
];

function Slideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <img
      src={images[index]}
      alt={`RIPE event ${index + 1}`}
      style={{width:'100%', height:'420px', objectFit:'box', borderRadius:'25px', boxShadow:'0 4px 18px #0002'}}
    />
  );
}

export default function Home(){
  return (
    <>
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
            </div>
            <div className="kpis">
              <div className="kpi">
                <div className="num">2,700</div>
                <div className="cap">School children<br/>educated</div>
              </div>
              <div className="kpi">
                <div className="num">5,000</div>
                <div className="cap">Women empowered through SHGs and livelihood training</div>
              </div>
              <div className="kpi">
                <div className="num">1,200</div>
                <div className="cap">Farmers adopted natural and organic farming practices</div>
              </div>
              <div className="kpi">
                <div className="num">1,279</div>
                <div className="cap">Youth and women trained in vocational skills</div>
              </div>
              <div className="kpi">
                <div className="num">50</div>
                <div className="cap">Villages benefited from improved irrigation systems</div>
              </div>
              <div className="kpi">
                <div className="num">100</div>
                <div className="cap">Grassroots institutions strengthened through capacity building</div>
              </div>
              <div className="kpi">
                <div className="num">10,000</div>
                <div className="cap">People reached through WASH and hygiene awareness</div>
              </div>
              <div className="kpi">
                <div className="num">20</div>
                <div className="cap">FPOs formed to support collective farming and marketing</div>
              </div>
            </div>
          </div>
          <div className="media">
            <Slideshow />
          </div>
        </div>
      </div>

      {/* About Section */}
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

      {/* Programs Section */}
      <section className="section">
        <div className="container">
          <h2>Programs</h2>
          <div className="cards" style={{marginTop:12}}>
            {[
              {title:'Women’s Empowerment',desc:'SHGs, financial literacy, leadership, market linkages'},
              {title:'Health & WASH',desc:'Hygiene, sanitation, menstrual health education'},
              {title:'Livelihoods & Skilling',desc:'Youth skills, entrepreneurship, value chains'},
              {title:'Education & Digital',desc:'Scholarships, school readiness, digital skills'},
              {title:'Climate & Agriculture',desc:'Water budgeting, crop planning, climate resilience'},
              {title:'Governance & Rights',desc:'Entitlements, social audits, community participation'},
            ].map(x => (
              <div key={x.title} className="card">
                <h3>{x.title}</h3>
                <p style={{color:'var(--muted)'}}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}