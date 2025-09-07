import React from 'react'
export default function Stories(){
  return (
    <section className="section">
      <div className="container">
        <h2>Stories of Change</h2>
        <div className="card" style={{display:'grid', gap:16, gridTemplateColumns:'1fr 1.2fr', alignItems:'center'}}>
          <img style={{width:'100%', borderRadius:12}} src="https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=1600&auto=format&fit=crop" alt="Field visit"/>
          <div>
            <h3>Anaiah’s SHG starts a micro-unit</h3>
            <p>With SHG training and seed support, a women’s group launched a stitching unit, doubling household income and enabling girls to stay in school.</p>
            <a className="btn brand" href="/donate">Support similar stories</a>
          </div>
        </div>
      </div>
    </section>
  )
}