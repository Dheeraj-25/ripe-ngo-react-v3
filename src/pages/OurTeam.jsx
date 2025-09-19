import React from 'react';
import './OurTeam.css';

const team = [
  {
    name: ' Narakala Muni Mohan',
    title: 'Founder',
    img: '', // Add founder image URL here
    desc: 'Brief description about the founder and their vision for RIPE.',
    className: 'founder',
    social: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: ''
    }
  },
  {
    name: 'Ande Kalavathi',
    title: 'Secretary',
    img: '', // Add secretary image URL here
    desc: 'Brief description about the secretary and their role at RIPE.',
    className: 'secretary',
    social: {}
  },
  {
    name: 'Varshini',
    title: 'Coordinator',
    img: '',
    desc: 'Role/Area',
    className: 'coordinator',
    social: {}
  },
  {
    name: 'Hemanth',
    title: 'Coordinator',
    img: '',
    desc: 'Role/Area',
    className: 'coordinator',
    social: {}
  },
  {
    name: 'Dheeraj',
    title: 'Coordinator',
    img: '',
    desc: 'Role/Area',
    className: 'coordinator',
    social: {}
  },
  {
    name: 'Likith',
    title: 'Coordinator',
    img: '',
    desc: 'Role/Area',
    className: 'coordinator',
    social: {}
  },
];

export default function OurTeam() {
  const founder = team[0];
  const secretary = team[1];
  const coordinators = team.slice(2);
  // Helper to chunk coordinators into rows of 2
  const chunkedCoordinators = [];
  for (let i = 0; i < coordinators.length; i += 2) {
    chunkedCoordinators.push(coordinators.slice(i, i + 2));
  }
  return (
    <div className="our-team-page section">
      <div className="container">
        <h2 className="team-heading">Meet The Team</h2>
        {/* Founder Big Card - Side by Side Layout */}
        <div className="founder-big-card founder-row">
          <div className="founder-img-wrap">
            {founder.img ? (
              <img src={founder.img} alt={founder.name} className="founder-img" />
            ) : (
              <div className="founder-img founder-img-placeholder"></div>
            )}
          </div>
          <div className="founder-info">
            <h2 className="founder-name">{founder.name} <span className="founder-title">| {founder.title}</span></h2>
            <p className="founder-desc">{founder.desc}</p>
            {founder.social && (Object.values(founder.social).some(Boolean)) && (
              <div className="team-social founder-social">
                {founder.social.facebook && <a href={founder.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>}
                {founder.social.twitter && <a href={founder.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>}
                {founder.social.linkedin && <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>}
                {founder.social.instagram && <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>}
              </div>
            )}
          </div>
        </div>
        {/* Secretary Card */}
        <div className="team-list">
          <div className={`team-card ${secretary.className}`}>
            <div className="team-img-wrap">
              {secretary.img ? (
                <img src={secretary.img} alt={secretary.name} className="team-img" />
              ) : (
                <div className="team-img team-img-placeholder"></div>
              )}
            </div>
            <div className="team-info">
              <h3>{secretary.name}</h3>
              <p className="team-title">{secretary.title}</p>
              <p className="team-desc">{secretary.desc}</p>
              {secretary.social && (Object.values(secretary.social).some(Boolean)) && (
                <div className="team-social">
                  {secretary.social.facebook && <a href={secretary.social.facebook} target="_blank" rel="noopener noreferrer">FB</a>}
                  {secretary.social.twitter && <a href={secretary.social.twitter} target="_blank" rel="noopener noreferrer">TW</a>}
                  {secretary.social.linkedin && <a href={secretary.social.linkedin} target="_blank" rel="noopener noreferrer">IN</a>}
                  {secretary.social.instagram && <a href={secretary.social.instagram} target="_blank" rel="noopener noreferrer">IG</a>}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Coordinators in rows of 2 */}
        <div className="coordinators-grid">
          {chunkedCoordinators.map((row, idx) => (
            <div className="coordinator-row" key={idx}>
              {row.map((member, i) => (
                <div className={`team-card coordinator`} key={i}>
                  <div className="team-img-wrap">
                    {member.img ? (
                      <img src={member.img} alt={member.name} className="team-img" />
                    ) : (
                      <div className="team-img team-img-placeholder"></div>
                    )}
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-title">{member.title}</p>
                    <p className="team-desc">{member.desc}</p>
                    {member.social && (Object.values(member.social).some(Boolean)) && (
                      <div className="team-social">
                        {member.social.facebook && <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">FB</a>}
                        {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">TW</a>}
                        {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">IN</a>}
                        {member.social.instagram && <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">IG</a>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
