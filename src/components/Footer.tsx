import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '3rem 0 1rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {/* Company */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img
                src="/logos/SaversMed.png"
                alt="Saver's Med"
                style={{ height: 40, filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
              Advanced blood test for colorectal cancer screening. <br />
              <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Early detection saves lives.</p>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 600 }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/patients" style={{ color: 'var(--white)', textDecoration: 'none', opacity: 0.9 }}>For Patients</a>
              <a href="/clinics-and-labs" style={{ color: 'var(--white)', textDecoration: 'none', opacity: 0.9 }}>For Clinics & Labs</a>
              <a href="/clinical-evidence" style={{ color: 'var(--white)', textDecoration: 'none', opacity: 0.9 }}>Clinical Evidence</a>
              <a href="/contact" style={{ color: 'var(--white)', textDecoration: 'none', opacity: 0.9 }}>Contact Us</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 600 }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
              <p style={{ opacity: 0.9 }}><strong>Saver’s Med Pte Ltd</strong></p>
              <p style={{ opacity: 0.9 }}>10 Jalan Rengas, Singapore 808530</p>
              <p style={{ opacity: 0.9 }}>
                📧 <a href="mailto:admin@saversmed.com" style={{ color: 'var(--white)' }}>admin@saversmed.com</a>
              </p>
            </div>
          </div>

          {/* Regulatory */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 600 }}>Regulatory Approvals</h3>
            <div style={{ fontSize: '0.95rem' }}>
              <p style={{ opacity: 0.9 }}>✓ CE Marked</p>
              <p style={{ opacity: 0.9 }}>✓ China NMPA registered</p>
              <p style={{ opacity: 0.9 }}>✓ Singapore HSA-cleared</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>© {new Date().getFullYear()} ColonAiQ® Asia. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
            <a href="#" style={{ color: 'var(--white)', opacity: 0.8, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--white)', opacity: 0.8, textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
