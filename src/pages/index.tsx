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
      {/* HERO – gradient overlay with optional image */}
      <section
        style={{
          // If you add /public/images/home/hero.webp, it will overlay under the gradient:
          backgroundImage:
            'linear-gradient(135deg, rgba(16,38,90,.85), rgba(16,118,179,.85)), url(/images/home/hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: '6rem 0 5rem',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
            Advanced Blood-Based Screening for Colorectal Cancer
          </h1>
          <p style={{ fontSize: '1rem', opacity: 0.95, marginBottom: '1rem' }}>
            <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>
          </p>
          <p
            style={{
              fontSize: '1.15rem',
              marginBottom: '2rem',
              maxWidth: 820,
              marginInline: 'auto',
              opacity: 0.95,
              lineHeight: 1.65
            }}
          >
            Patient-friendly screening that helps more people get screened on time and supports earlier
            detection—complementing national colorectal cancer prevention efforts.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => go('patients', '/patients')}>
              For Patients
            </button>
            <button className="btn btn-outline" onClick={() => go('clinics-labs', '/clinics-and-labs')}>
              For Clinics & Labs
            </button>
          </div>
        </div>
      </section>

      {/* VALUE PILLARS */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <h2 className="section-title">Why ColonAiQ®</h2>
          <p className="section-subtitle">A modern screening option designed to increase participation and support timely triage.</p>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-emoji">🩸</div>
              <h3>Convenient</h3>
              <p>Simple blood draw—no bowel prep—reducing barriers to screening for many people.</p>
            </div>
            <div className="card">
              <div className="card-emoji">⏱️</div>
              <h3>Supports Early Detection</h3>
              <p>Helps identify individuals who may benefit from timely colonoscopy for diagnosis and prevention.</p>
            </div>
            <div className="card">
              <div className="card-emoji">🏥</div>
              <h3>Aligned with Prevention Goals</h3>
              <p>Complements organised screening pathways and public health initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">How ColonAiQ® Fits Your Pathway</h2>
          <div className="grid grid-4">
            <div className="card simple">
              <h4>1) Doctor Visit</h4>
              <p>Discuss screening with your clinician to confirm suitability based on age, risk and guidelines.</p>
            </div>
            <div className="card simple">
              <h4>2) Blood Draw</h4>
              <p>A standard venous blood sample is collected at a participating clinic or laboratory.</p>
            </div>
            <div className="card simple">
              <h4>3) Laboratory Analysis</h4>
              <p>DNA methylation assay using a PCR-based workflow in a certified lab.</p>
            </div>
            <div className="card simple">
              <h4>4) Guided Follow-up</h4>
              <p>Results can help prioritise timely diagnostic colonoscopy where appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / PUBLIC HEALTH IMPACT */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
            <div className="card">
              <h2>Who Should Consider Screening?</h2>
              <ul>
                <li>Adults in the age range recommended by national guidelines.</li>
                <li>People who have delayed or avoided stool-based screening.</li>
                <li>Individuals discussing options with their doctor as part of routine prevention.</li>
              </ul>
              <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
                Screening decisions should be made with a healthcare professional.
              </p>
            </div>
            <div className="card">
              <h2>Public Health Impact</h2>
              <ul>
                <li>Lower barriers can raise screening participation.</li>
                <li>Earlier diagnostic follow-up can improve outcomes and prevention.</li>
                <li>Better participation supports national efforts to reduce CRC burden.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICS & LABS PROMO */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ marginBottom: '0.5rem' }}>For Clinics & Laboratories</h2>
              <p style={{ margin: 0 }}>
                Implementation guidance, onboarding kits and quality requirements are available for certified partners.
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => go('clinics-labs', '/clinics-and-labs')}>
              Implementation Details
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="grid grid-2">
            <details className="accordion card">
              <summary>Is ColonAiQ® meant to replace colonoscopy?</summary>
              <p>
                No. ColonAiQ® is a blood-based <em>screening</em> option. Positive or concerning results
                should be followed by a diagnostic colonoscopy per clinical judgement.
              </p>
            </details>
            <details className="accordion card">
              <summary>Is the test approved?</summary>
              <p>
                <strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>. Availability may vary by market.
              </p>
            </details>
            <details className="accordion card">
              <summary>Where can I take the test?</summary>
              <p>
                We are onboarding certified partner clinics and laboratories. The official list will appear once partners are approved.
                In the meantime, please <a className="link" href="/contact">contact us</a>.
              </p>
            </details>
            <details className="accordion card">
              <summary>Will I need to change my diet or do bowel prep?</summary>
              <p>No bowel prep is required for the blood draw, which many people find more acceptable.</p>
            </details>
          </div>
        </div>
      </section>

      {/* REFERENCES / DISCLAIMER (compliant) */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">References & Disclosures</h2>
          <div className="card">
            <p style={{ marginBottom: '0.5rem' }}>
              Public pages intentionally avoid un-cited performance figures or endorsements. A referenced summary will be
              linked here upon permission. For specific documentation (peer-reviewed publications, IFU, regulatory
              notices), please <a className="link" href="/contact">contact us</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to take the next step?</h2>
          <p className="section-subtitle">Find information for patients or learn how to implement ColonAiQ® in your facility.</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => go('patients', '/patients')}>For Patients</button>
            <button className="btn btn-outline" onClick={() => go('clinics-labs', '/clinics-and-labs')}>For Clinics & Labs</button>
            <button className="btn btn-ghost" onClick={() => go('contact', '/contact')}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  )
}
