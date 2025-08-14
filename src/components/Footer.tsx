import React from 'react'

export default function Footer() {
  // onError fallback helper for images
  const onLogoError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const el = e.currentTarget
    // try alternate filenames if the first source 404s
    if (el.dataset.fallback && el.src.indexOf(el.dataset.fallback) === -1) {
      el.src = el.dataset.fallback!
    }
  }

  return (
    <footer style={{ background: 'var(--primary-blue)', color: 'var(--white)', padding: '3rem 0 1rem' }}>
      {/* Scoped CSS for responsive behaviour */}
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,.2);
          padding-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-link {
          color: var(--white);
          text-decoration: none;
          opacity: .95;
        }
        .footer-link:hover { opacity: 1; text-decoration: underline; }

        /* Mobile tweaks */
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .footer-logo-sm { height: 22px !important; }
        }
      `}</style>

      <div className="container">
        <div className="footer-grid">
          {/* Company */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/logos/SaversMed.png"
                alt="Saver’s Med"
                loading="lazy"
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
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }} aria-label="Footer navigation">
              <a href="/patients" className="footer-link">For Patients</a>
              <a href="/clinics-and-labs" className="footer-link">For Clinics &amp; Labs</a>
              <a href="/clinical-evidence" className="footer-link">Clinical Evidence</a>
              <a href="/contact" className="footer-link">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', fontSize: '0.95rem' }}>
              <span>10 Jalan Rengas, Singapore 808530</span>
              <span>
                📧{' '}
                <a href="mailto:admin@saversmed.com" className="footer-link" style={{ textDecoration: 'underline' }}>
                  admin@saversmed.com
                </a>
              </span>
            </div>
          </div>

          {/* Movement support (COLONAiVE) */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>Our Commitment</h3>
            <a
              href="https://www.colonaive.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', textDecoration: 'none', color: 'var(--white)' }}
              title="Project COLONAiVE™"
              aria-label="Visit Project COLONAiVE (opens in new tab)"
            >
              <img
                src="/logos/COLONAiVE-light.png"
                data-fallback="/logos/COLONAiVE-web.png"
                onError={onLogoError}
                alt="COLONAiVE™"
                loading="lazy"
                className="footer-logo-sm"
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
        <div className="footer-bottom">
          <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
            © {new Date().getFullYear()} ColonAiQ® Asia · Saver’s Med Pte Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
