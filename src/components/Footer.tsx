import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '3rem 0 1rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {/* Company */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/logos/SaversMed.png"
                alt="Saver’s Med"
                style={{ height: 40, width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
              <strong>Saver’s Med Pte Ltd</strong>
            </div>
            <p style={{ marginBottom: '.6rem', lineHeight: 1.6 }}>
              Advanced blood test for colorectal cancer screening. <br />
              <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>Early detection saves lives.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
              <a href="/patients" style={{ color: 'var(--white)', textDecoration: 'none', opacity: .95 }}>For Patients</a>
              <a href="/clinics-and-labs" style={{ color: 'var(--white)', textDecoration: 'none', opacity: .95 }}>For Clinics & Labs</a>
              <a href="/clinical-evidence" style={{ color: 'var(--white)', textDecoration: 'none', opacity: .95 }}>Clinical Evidence</a>
              <a href="/contact" style={{ color: 'var(--white)', textDecoration: 'none', opacity: .95 }}>Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', fontSize: '0.95rem' }}>
              <span>10 Jalan Rengas, Singapore 808530</span>
              <span>
                📧 <a href="mailto:admin@saversmed.com" style={{ color: 'var(--white)' }}>admin@saversmed.com</a>
              </span>
            </div>
          </div>

          {/* Movement support (COLONAiVE) */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>Our Commitment</h3>
            <a
              href="https://www.colonaive.ai"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', textDecoration: 'none', color: 'var(--white)' }}
              title="Project COLONAiVE™"
            >
              <img
                src="/logos/COLONAiVE-logo-web.png"
                alt="COLONAiVE™"
                style={{ height: 26, width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
              <span>We support Project COLONAiVE™</span>
            </a>
            <p style={{ marginTop: '.5rem', fontSize: '.92rem', opacity: .9 }}>
              A national movement to outsmart colorectal cancer through education, screening and timely triage.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.2)',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
            © {new Date().getFullYear()} ColonAiQ® Asia · Saver’s Med Pte Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
            <a href="#" style={{ color: 'var(--white)', opacity: 0.9, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--white)', opacity: 0.9, textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
