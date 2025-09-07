import React from 'react'
const data = [
  {title:'Women’s Empowerment',desc:'SHGs, financial literacy, leadership, market linkages'},
  {title:'Health & WASH',desc:'Hygiene, sanitation, menstrual health education'},
  {title:'Livelihoods & Skilling',desc:'Youth skills, entrepreneurship, value chains'},
  {title:'Education & Digital',desc:'Scholarships, school readiness, digital skills'},
  {title:'Climate & Agriculture',desc:'Water budgeting, crop planning, climate resilience'},
  {title:'Governance & Rights',desc:'Entitlements, social audits, community participation'},
]
export default function Programs(){
  return (
    <section className="section">
      <div className="container">
        <h2>Programs</h2>
        <div className="cards" style={{marginTop:12}}>
          {data.map(x => <div key={x.title} className="card"><h3>{x.title}</h3><p style={{color:'var(--muted)'}}>{x.desc}</p></div>)}
        </div>
      </div>
    </section>
  )
}