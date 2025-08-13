import React from 'react'
import { Page } from '../lib/nav'

type Props = { onNavigate?: React.Dispatch<React.SetStateAction<Page>> }

export default function PatientsPage({ onNavigate }: Props) {
  const go = (p: Page, href: string) => {
    if (onNavigate) onNavigate(p)
    else window.location.href = href
  }

  return (
    <div>
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

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why choose ColonAiQ®?</h2>
          <div className="grid grid-2">
            <div className="card"><h3>Easy & Patient-Friendly</h3><p>No prep or dietary restrictions are required.</p></div>
            <div className="card">
              <h3>Validated & Regulated</h3>
              <p><strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>.</p>
            </div>
            <div className="card"><h3>Supports Early Detection</h3><p>Helps triage individuals who may benefit from colonoscopy sooner.</p></div>
            <div className="card"><h3>Works With Doctors</h3><p>Designed to complement clinical decision-making and public health goals.</p></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Where can I get the test?</h2>
          <div className="card">
            <p>We are onboarding certified ColonAiQ® partner clinics and laboratories. The official list will appear here once partners are approved.</p>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Need help right now? <button className="link" onClick={() => go('contact', '/contact')}>Contact us</button>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
