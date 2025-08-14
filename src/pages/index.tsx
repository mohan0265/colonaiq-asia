// src/pages/index.tsx
import React from 'react'

type Page =
  | 'home'
  | 'patients'
  | 'clinics-labs'
  | 'clinical-evidence'
  | 'investors'
  | 'contact'

interface HomePageProps {
  onNavigate: (page: Page) => void
}

// Brand-tinted stat pill (teal)
const Stat: React.FC<{ label: string; value: string; note?: string }> = ({
  label,
  value,
  note,
}) => {
  // COLONAiVE-ish teal (close to #14b8a6). Tweak ALPHA values if you want more/less tint.
  const TEAL = '20,184,166' // rgb(20,184,166)
  return (
    <div
      style={{
        background: `rgba(${TEAL}, .10)`,   // <- tint strength (0.08 – 0.12 is a nice range)
        border: `1px solid rgba(${TEAL}, .35)`,
        boxShadow: `0 8px 20px rgba(${TEAL}, .08)`,
        borderRadius: 12,
        padding: '0.9rem 1rem',
        minWidth: 180,
        color: 'var(--text, #0f172a)',
      }}
    >
      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f766e' /* deeper teal for the number */ }}>
        {value}
      </div>
      <div style={{ fontSize: '0.95rem' }}>{label}</div>
      {note && (
        <div style={{ fontSize: '.8rem', color: 'var(--text-light)' }}>{note}</div>
      )}
    </div>
  )
}


/** Reusable white card tile */
const Tile: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div
    style={{
      background: 'var(--white)',
      border: '1px solid #e5e7eb',
      borderRadius: 14,
      padding: '1.1rem',
    }}
  >
    <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{title}</h3>
    <div style={{ marginTop: '.5rem', lineHeight: 1.7, color: 'var(--text-light)' }}>
      {children}
    </div>
  </div>
)

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* HERO */}
      <section
        className="hero-home"
        style={{
          // Background image + accessible overlay to keep text readable
          backgroundImage:
            'linear-gradient(135deg, rgba(13,74,120,.72) 0%, rgba(16,103,160,.66) 100%), url(/images/home/hero-blood.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: '6rem 0 3.25rem',
        }}
      >
        <style>{`
          .hero-home .headline { font-size: 2.35rem; font-weight: 800; margin: 0 0 .4rem; }
          .hero-home .sub { max-width: 900px; margin: 0 auto; line-height: 1.6; opacity: .95; }
          .hero-home .regline { font-size: .95rem; opacity: .9; margin-bottom: .6rem; }
          .hero-home .cta { display: flex; gap: .6rem; flex-wrap: wrap; justify-content: center; margin-top: 1.2rem; }
          .hero-home .btn { border-radius: 999px; padding: .7rem 1.1rem; font-weight: 600; cursor: pointer; }
          .hero-home .btn-primary { background: var(--white); color: var(--primary-blue); border: 1px solid rgba(255,255,255,.8); }
          .hero-home .btn-secondary { background: rgba(255,255,255,.1); color: var(--white); border: 1px solid rgba(255,255,255,.35); }
          .hero-home .stats { display:flex; gap:.6rem; flex-wrap:wrap; justify-content:center; margin-top: 1rem; }
          .hero-home .footnote { font-size: .8rem; opacity: .9; margin-top: .4rem; }
          @media (max-width:640px){
            .hero-home{ padding:4.5rem 0 2.5rem }
            .hero-home .headline{ font-size:1.9rem }
            .hero-home .btn{ width:100%; }
          }
        `}</style>

        <div className="container" style={{ textAlign: 'center' }}>
          <div className="regline">
            CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®
          </div>

          <h1 className="headline">
            A patient-preferred blood test that can lift CRC screening uptake
          </h1>

          <p className="sub">
            Clinically validated blood-based screening that supports earlier
            detection and timely colonoscopy — helping more people participate in
            screening programmes.
          </p>

          <div className="cta">
            <button className="btn btn-primary" onClick={() => onNavigate('patients')}>
              For Patients
            </button>
            <button
              className="btn btn-primary"
              onClick={() => onNavigate('clinics-labs')}
            >
              For Clinics &amp; Labs
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onNavigate('clinical-evidence')}
            >
              See Clinical Evidence
            </button>
          </div>

          {/* Key figures strip */}
          <div className="stats">
            <Stat value="86.1%" label="Sensitivity (all CRC)" />
            <Stat value="78.3%" label="Stage I sensitivity" />
            <Stat value="91.9%" label="Specificity (controls)" />
          </div>

          <div className="footnote">
            Data from peer-reviewed studies.{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onNavigate('clinical-evidence')
              }}
              style={{ color: '#fff', textDecoration: 'underline' }}
            >
              View Clinical Evidence
            </a>
            .
          </div>
        </div>
      </section>

      {/* NATIONAL IMPACT */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Why this matters for the nation</h2>

          <div className="grid grid-3" style={{ gap: '1rem' }}>
            <Tile title="Reduce barriers">
              Simple blood draw (no bowel prep) lowers psychological and logistical
              barriers compared with stool-based tests.
            </Tile>
            <Tile title="Improve participation">
              Patient-friendly option can increase screening uptake — the first step
              to catching disease earlier.
            </Tile>
            <Tile title="Enable earlier diagnosis &amp; prevention">
              Higher early-stage sensitivity in studies supports timely colonoscopy,
              polyp removal and prevention.
            </Tile>
          </div>

          {/* Supportive visual */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <img
              src="/images/home/impact-ribbon.webp"
              alt="Doctor holding a blue colorectal cancer awareness ribbon"
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: 560,
                height: 'auto',
                borderRadius: 14,
                boxShadow: '0 10px 30px rgba(0,0,0,.08)',
              }}
            />
          </div>

          <p style={{ marginTop: '.75rem', color: 'var(--text-light)' }}>
            Better participation supports national efforts to reduce CRC burden.
          </p>
        </div>
      </section>

      {/* WHY COLONAIQ VS CURRENT OPTIONS */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How ColonAiQ® complements current options</h2>

          {/* Visual */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <img
              src="/images/home/compare-blood-tube.webp"
              alt="Blood tube used for colorectal cancer screening"
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: 720,
                height: 'auto',
                borderRadius: 14,
                boxShadow: '0 10px 30px rgba(0,0,0,.08)',
              }}
            />
          </div>

          <div className="grid grid-3" style={{ gap: '1rem' }}>
            <Tile title="ColonAiQ® (blood)">
              Non-invasive blood test; clinically validated performance including
              early-stage sensitivity. Scalable PCR workflow.
            </Tile>
            <Tile title="FIT (stool)">
              Non-invasive, widely used; participation can be limited by stool
              collection and lower early-stage sensitivity.
            </Tile>
            <Tile title="Colonoscopy">
              Diagnostic gold standard and allows polyp removal; invasive
              resource-intensive procedure used when indicated.
            </Tile>
          </div>
        </div>
      </section>

      {/* PATHWAY */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          {/* Visual */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <img
              src="/images/home/pathway-colonmodel.webp"
              alt="Clinician explaining colon screening with an anatomical model"
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: 720,
                height: 'auto',
                borderRadius: 14,
                boxShadow: '0 10px 30px rgba(0,0,0,.08)',
              }}
            />
          </div>

          <h2 className="section-title">Your screening pathway with ColonAiQ®</h2>

          <div className="grid grid-4" style={{ gap: '1rem' }}>
            <Tile title="1) Doctor consult">
              Confirm suitability based on age, risk and guidelines.
            </Tile>
            <Tile title="2) Blood draw">
              A standard venous sample at a participating clinic or lab.
            </Tile>
            <Tile title="3) Lab analysis">
              DNA methylation assay using a PCR-based workflow.
            </Tile>
            <Tile title="4) Guided follow-up">
              Results can help prioritise diagnostic colonoscopy where
              appropriate.
            </Tile>
          </div>
        </div>
      </section>

      {/* PROGRAM / POLICYMAKER SLOT */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Where it fits in population screening</h2>

          <div className="grid grid-2" style={{ gap: '1rem' }}>
            <Tile title="For public programmes">
              Use as a first-line blood-based screen for eligible adults. Positives
              triaged to colonoscopy; negatives continue routine intervals per
              guidelines.
            </Tile>
            <Tile title="For clinics &amp; laboratories">
              Implementation kits and quality requirements available for certified
              partners. Training and onboarding support provided.
            </Tile>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
            <button className="button" onClick={() => onNavigate('clinics-labs')}>
              Implementation Details
            </button>
            <button className="button button-light" onClick={() => onNavigate('contact')}>
              Talk to Us
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA (optional: evidence teaser image) */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* If you upload /images/home/evidence-colonmodel.webp, this shows nicely */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <img
              src="/images/home/evidence-colonmodel.webp"
              alt="Colon model cross-section illustrating early detection"
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: 520,
                height: 'auto',
                borderRadius: 14,
                boxShadow: '0 10px 30px rgba(0,0,0,.08)',
              }}
              onError={(e) => {
                // If optional image not present, hide gracefully
                (e.currentTarget as HTMLImageElement).style.display = 'none'
              }}
            />
          </div>

          <h2 className="section-title">Ready to take the next step?</h2>
          <p style={{ maxWidth: 760, margin: '0 auto', color: 'var(--text-light)' }}>
            Find information for patients, or learn how to onboard your clinic or lab to offer ColonAiQ®.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '.6rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '.9rem',
            }}
          >
            <button className="button" onClick={() => onNavigate('patients')}>
              For Patients
            </button>
            <button className="button" onClick={() => onNavigate('clinics-labs')}>
              For Clinics &amp; Labs
            </button>
            <button
              className="button button-light"
              onClick={() => onNavigate('clinical-evidence')}
            >
              View Clinical Evidence
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
