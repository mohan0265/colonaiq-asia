import React from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface HomePageProps {
  onNavigate: (page: Page) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
          color: 'var(--white)',
          padding: '6rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem' }}>
            Advanced Blood-Based Screening for Colorectal Cancer
          </h1>
          <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '1.25rem' }}>
            <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>
          </p>
          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: 700,
              marginInline: 'auto',
              opacity: 0.9,
              lineHeight: 1.6
            }}
          >
            Patient-friendly screening that helps more people get screened on time, supports earlier detection,
            and contributes to national health goals.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onNavigate('patients')}>For Patients</button>
            <button className="btn btn-outline" onClick={() => onNavigate('clinics-labs')}>For Clinics & Labs</button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why ColonAiQ®</h2>
          <p className="section-subtitle">
            A modern, clinically validated option that complements national colorectal cancer prevention efforts.
          </p>

          <div className="grid grid-4">
            <div className="card">
              <div className="card-emoji">🩸</div>
              <h3>Convenient</h3>
              <p>Simple blood draw. No bowel prep or diet interruption, making screening more acceptable for many.</p>
            </div>
            <div className="card">
              <div className="card-emoji">🔍</div>
              <h3>Higher Sensitivity</h3>
              <p>Clinically validated performance with greater sensitivity than older stool-based options.</p>
            </div>
            <div className="card">
              <div className="card-emoji">⏱️</div>
              <h3>Earlier Detection</h3>
              <p>Supports timely colonoscopy referrals for those at higher risk, improving outcomes.</p>
            </div>
            <div className="card">
              <div className="card-emoji">👩‍⚕️</div>
              <h3>Clinician Endorsed</h3>
              <p>Developed to align with clinical practice, screening uptake, and public health objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* National impact */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Public Health Impact</h2>
          <div className="grid grid-3">
            <div className="card simple">
              <h4>Higher Screening Uptake</h4>
              <p>Lower barriers encourage more eligible adults to screen regularly.</p>
            </div>
            <div className="card simple">
              <h4>Timely Triage</h4>
              <p>High-risk individuals can be guided to colonoscopy sooner for diagnostic confirmation and polyp removal.</p>
            </div>
            <div className="card simple">
              <h4>Better Outcomes</h4>
              <p>Earlier detection and prevention help reduce late-stage diagnoses and overall healthcare burden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About ColonAiQ Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">About ColonAiQ®</h2>
          <p className="section-subtitle">
            Three key benefits that make ColonAiQ® a valuable screening option
          </p>

          <div className="grid grid-3">
            <div className="card">
              <div className="card-emoji">🩸</div>
              <h3>Convenient</h3>
              <p>Simple blood draw with no bowel preparation required, making screening more acceptable and accessible for patients.</p>
            </div>
            <div className="card">
              <div className="card-emoji">🔍</div>
              <h3>Supports Earlier Detection</h3>
              <p>Designed to identify individuals at higher risk who would benefit from colonoscopy referral and diagnostic follow-up.</p>
            </div>
            <div className="card">
              <div className="card-emoji">🎯</div>
              <h3>Aligns with Screening Goals</h3>
              <p>Complements national colorectal cancer prevention programs by reducing barriers to regular screening participation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to take the next step?</h2>
          <p className="section-subtitle">Find more information for patients, or partner with us as a clinic or lab.</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onNavigate('patients')}>For Patients</button>
            <button className="btn btn-outline" onClick={() => onNavigate('clinics-labs')}>For Clinics & Labs</button>
            <button className="btn btn-ghost" onClick={() => onNavigate('contact')}>Contact</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
