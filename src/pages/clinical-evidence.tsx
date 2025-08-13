import React from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface ClinicalEvidencePageProps {
  onNavigate: (page: Page) => void
}

const ClinicalEvidencePage: React.FC<ClinicalEvidencePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
        color: 'var(--white)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '1rem'
          }}>
            Clinical Information
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            maxWidth: '700px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            A detailed, referenced summary is being prepared. Public pages contain no unverified figures.
          </p>
        </div>
      </section>

      {/* What ColonAiQ Is Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What ColonAiQ® Is</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <ul style={{ 
                fontSize: '1.2rem',
                lineHeight: '2',
                color: 'var(--text-dark)',
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>•</span>
                  <span>Multi-gene DNA methylation blood-based screening test</span>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>•</span>
                  <span>Supports screening uptake in eligible populations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ marginRight: '1rem', fontSize: '1.5rem' }}>•</span>
                  <span>Enables appropriate triage to colonoscopy where indicated</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Status Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Regulatory Status</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <p style={{ 
                fontSize: '1.3rem', 
                lineHeight: '1.8',
                color: 'var(--text-dark)',
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>
              </p>
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--text-light)',
                textAlign: 'center'
              }}>
                This regulatory approval status ensures compliance with applicable medical device 
                requirements across key markets, supporting appropriate clinical use and patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">References</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--text-light)',
                textAlign: 'center'
              }}>
                Peer-reviewed citations and official announcements will be linked here upon permission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem'
          }}>
            Learn More About ColonAiQ®
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Contact us for additional information about our screening solution
          </p>
          <button 
            className="btn btn-outline"
            onClick={() => onNavigate('contact')}
            style={{ 
              borderColor: 'var(--white)',
              color: 'var(--white)',
              fontSize: '1.1rem', 
              padding: '1rem 2rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--white)'
              e.currentTarget.style.color = 'var(--primary-blue)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--white)'
            }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default ClinicalEvidencePage