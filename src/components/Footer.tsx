import React from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface FooterProps {
  onNavigate: (page: Page) => void
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer style={{ 
      background: 'var(--primary-blue)', 
      color: 'var(--white)', 
      padding: '3rem 0 1rem' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img 
                src="/logos/SaversMed.png" 
                alt="Saver's Med" 
                style={{ height: '40px', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Advanced blood test for colorectal cancer screening. 
              CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®
            </p>
            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
              Early detection saves lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '600' }}>
              Quick Links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { id: 'patients' as Page, label: 'For Patients' },
                { id: 'clinics-labs' as Page, label: 'For Clinics & Labs' },
                { id: 'clinical-evidence' as Page, label: 'Clinical Evidence' },
                { id: 'contact' as Page, label: 'Contact Us' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--white)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    padding: '0.25rem 0',
                    opacity: '0.8',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '600' }}>
              Contact Information
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <p style={{ opacity: '0.8' }}>
                <strong>Saver's Med Pte Ltd</strong>
              </p>
              <p style={{ opacity: '0.8' }}>
                10 Jalan Rengas, Singapore 808530
              </p>
              <p style={{ opacity: '0.8' }}>
                📧 admin@saversmed.com
              </p>
            </div>
          </div>

          {/* Regulatory */}
          <div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '600' }}>
              Regulatory Approvals
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <p style={{ opacity: '0.8' }}>✓ Singapore HSA-cleared</p>
              <p style={{ opacity: '0.8' }}>✓ CE Marked</p>
              <p style={{ opacity: '0.8' }}>✓ China NMPA registered</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.2)', 
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>
            © 2025 ColonAiQ® Asia. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem' }}>
            <a href="#" style={{ color: 'var(--white)', opacity: '0.8', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'var(--white)', opacity: '0.8', textDecoration: 'none' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

