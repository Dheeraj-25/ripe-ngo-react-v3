import React from 'react'
export default function Impact(){
  return (
    <section className="section">
      <div className="container">
        <h2>Impact</h2>
        <p className="lead">We measure outcomes and share them transparently.</p>
        <div className="kpis">
          {[['1.2M L','Water saved via budgeting'],['8,500+','Children reached'],['2,400+','Women organized in SHGs'],['420+','Livelihood linkages']].map(([n,c])=>(
            <div className="kpi" key={c}><div className="num">{n}</div><div className="cap">{c}</div></div>
          ))}
        </div>
      </div>
    </section>
  )
}