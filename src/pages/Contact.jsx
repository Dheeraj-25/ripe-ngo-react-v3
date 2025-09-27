

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaUser, FaPaperPlane } from 'react-icons/fa';

function Card({ children, style }) {
  return <div className="card" style={style}>{children}</div>;
}

function ContactInfo() {
  return (
    <Card style={{ marginBottom: 24 }}>
      <h3 style={{ marginBottom: 10 }}>Contact Information</h3>
      <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <FaMapMarkerAlt style={{ color: 'var(--brand)' }} />
        <span><strong>Address:</strong> Tirupati (Urban), Chittoor District, Andhra Pradesh 517501</span>
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <FaPhoneAlt style={{ color: 'var(--brand)' }} />
        <span><strong>Phone:</strong> <a href="tel:+919440760393">9440760393</a></span>
      </p>
      <p style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <FaEnvelope style={{ color: 'var(--brand)' }} />
        <span><strong>Email:</strong> <a href="mailto:ripe.org.in@gmail.com">ripe.org.in@gmail.com</a></span>
      </p>
      <div style={{ marginTop: 18 }}>
        <h4>Follow us</h4>
        <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
          <a href="https://facebook.com/ripe.org.in" target="_blank" rel="noopener noreferrer" style={{ color: '#1877f3', fontSize: '1.3rem' }}><FaFacebook /> Facebook</a>
          <a href="https://instagram.com/ripe.org.in" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', fontSize: '1.3rem' }}><FaInstagram /> Instagram</a>
          <a href="https://linkedin.com/company/ripe-ngo" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', fontSize: '1.3rem' }}><FaLinkedin /> LinkedIn</a>
        </div>
      </div>
    </Card>
  );
}

function InputField({ label, id, type = 'text', ...props }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label htmlFor={id} style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
        {id === 'name' && <FaUser style={{ color: 'var(--brand)' }} />}
        {id === 'email' && <FaEnvelope style={{ color: 'var(--brand)' }} />}
        {label}
      </label>
      <input id={id} type={type} style={{ width: '100%', marginTop: 6, padding: '10px', borderRadius: 8, border: '1px solid var(--border)' }} {...props} />
    </div>
  );
}

function TextAreaField({ label, id, ...props }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label htmlFor={id} style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
        <FaPaperPlane style={{ color: 'var(--brand)' }} />
        {label}
      </label>
      <textarea id={id} style={{ width: '100%', marginTop: 6, padding: '10px', borderRadius: 8, border: '1px solid var(--border)' }} {...props} />
    </div>
  );
}

function ContactForm({ onSubmit }) {
  return (
    <form className="card" onSubmit={onSubmit} style={{ padding: '32px', boxShadow: '0 2px 16px #0001' }}>
      <h3 style={{ marginBottom: 18 }}>Send us a message</h3>
      <InputField label="Name" id="name" required placeholder="Your name" />
      <InputField label="Email" id="email" type="email" required placeholder="you@example.com" />
      <TextAreaField label="Message" id="message" rows={5} required placeholder="How would you like to help?" />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <button className="btn brand" type="submit" style={{ minWidth: 1 }}>Send</button>
      </div>
    </form>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section className="section">
      <div className="container cols" style={{ gap: 40 }}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2 style={{ marginBottom: 18 }}>Contact & Volunteer</h2>
          <p className="lead" style={{ marginBottom: 24 }}>We'd love to hear from you! Reach out to volunteer, partner, or ask questions about our work.</p>
          <ContactInfo />
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          {sent ? (
            <Card style={{ textAlign: 'center', padding: '48px 0' }}>
              <h3>Thank you!</h3>
              <p>We received your message and will get back to you soon.</p>
            </Card>
          ) : (
            <ContactForm onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </section>
  );
}