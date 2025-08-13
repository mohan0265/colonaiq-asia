import React from 'react'
import { Page } from '../lib/nav'

type Props = { onNavigate?: React.Dispatch<React.SetStateAction<Page>> }

export default function HomePage({ onNavigate }: Props) {
  const go = (p: Page, href: string) => {
    if (onNavigate) onNavigate(p)
    else window.location.href = href
  }

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
              fontSize: '1.1rem',
              marginBottom: '1.6rem',
              maxWidth: 760,
              marginInline: 'auto',
              opacity: 0.9,
              lineHeight: 1.6
            }}
          >
            Patient-friendly screening that helps more people get screened on time and supports earlier detection.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => go('patients', '/patients')}>For Patients</button>
            <button className="btn btn-outline" onClick={() => go('clinics-labs', '/clinics-and-labs')}>
              For Clinics & Labs
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About ColonAiQ®</h2>
          <div className="grid grid-3">
            <div className="card simple">
              <h4>Convenient</h4>
              <p>Simple blood draw—no bowel prep—helps improve screening participation.</p>
            </div>
            <div className="card simple">
              <h4>Supports Early Detection</h4>
              <p>Helps triage individuals who may benefit from timely colonoscopy.</p>
            </div>
            <div className="card simple">
              <h4>Aligned with Prevention Goals</h4>
              <p>Designed to complement national colorectal cancer prevention initiatives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
