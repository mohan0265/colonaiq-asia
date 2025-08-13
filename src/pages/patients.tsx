import React from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface PatientsPageProps {
  onNavigate: (page: Page) => void
}

const PatientsPage: React.FC<PatientsPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--accent-teal) 0%, #0d9488 100%)',
          color: 'var(--white)',
          padding: '5rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>For Patients</h1>
          <p style={{ opacity: 0.95 }}>
            A simple blood test that supports earlier detection and timely colonoscopy referrals for those at higher risk.
          </p>
        </div>
      </section>

      {/* Why ColonAiQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why choose ColonAiQ®?</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Easy & Patient-Friendly</h3>
              <p>No prep or dietary restrictions are required. This helps more people screen on time.</p>
            </div>
            <div className="card">
              <h3>Validated & Regulated</h3>
              <p>
                <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong> — giving confidence
                in test quality and alignment with clinical use.
              </p>
            </div>
            <div className="card">
              <h3>Supports Early Detection</h3>
              <p>Helps triage individuals who may benefit from colonoscopy sooner.</p>
            </div>
            <div className="card">
              <h3>Works With Doctors</h3>
              <p>Designed to complement clinical decision-making and national prevention goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where to get tested (placeholder until partners are onboarded) */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Where can I get the test?</h2>
          <div className="card">
            <p style={{ marginBottom: '0.75rem' }}>
              We are onboarding certified ColonAiQ® partner clinics and laboratories. The official list will appear here
              once partners are approved.
            </p>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Need help right now? <button className="link" onClick={() => onNavigate('contact')}>Contact us</button> and
              we’ll point you to the nearest certified provider.
            </p>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Take the next step</h2>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onNavigate('contact')}>Ask a Question</button>
            <button className="btn btn-outline" onClick={() => onNavigate('clinical-evidence')}>See Clinical Evidence</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PatientsPage
