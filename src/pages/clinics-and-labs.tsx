// src/pages/clinics-labs.tsx (or the same path/name you currently use)
import React from 'react'
import { Page } from '../lib/nav'

type Props = { onNavigate?: React.Dispatch<React.SetStateAction<Page>> }

export default function ClinicsAndLabsPage({ onNavigate }: Props) {
  return (
    <div>
      {/* Page-scoped styles to make cards full, aligned, and clinical */}
      <style>{`
        .hero-gradient {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
          color: var(--white);
          padding: 5rem 0;
          text-align: center;
        }
        .kicker {
          font-size: .95rem;
          opacity: .9;
          letter-spacing: .02em;
        }
        .hero-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin: .4rem 0 .5rem;
        }

        /* Panels */
        .panel {
          background: var(--white);
          border: 1px solid #e6e8ee;
          border-radius: 12px;
          padding: 1.1rem 1.15rem;
          box-shadow: 0 6px 22px rgba(15, 23, 42, .06);
        }
        .panel.simple {
          box-shadow: 0 4px 16px rgba(15, 23, 42, .05);
        }
        .panel h2, .panel h3, .panel h4 {
          margin: 0 0 .5rem;
        }
        .panel p { margin: .4rem 0; }

        /* Step cards (replace accordions, always open) */
        .steps {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 1rem;
        }
        @media (max-width: 800px) { .steps { grid-template-columns: 1fr; } }

        .step-card {
          display: flex;
          flex-direction: column;
          min-height: 160px;
        }
        .step-head {
          display: flex;
          align-items: center;
          gap: .65rem;
          font-weight: 700;
          color: #0b4a78;
          margin-bottom: .35rem;
        }
        .step-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px; height: 28px;
          border-radius: 999px;
          background: #e6f0f8;
          color: #0b4a78;
          font-size: .9rem;
          font-weight: 800;
        }
        .step-card ul {
          margin: .25rem 0 0 .2rem;
          padding-left: 1.1rem;
        }
        .step-card li { margin: .2rem 0; }

        /* Equal-height helpers in grids */
        .grid-fit {
          display: grid;
          gap: 1rem;
        }
        .grid-2-fit { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .grid-3-fit { grid-template-columns: repeat(3, minmax(0,1fr)); }
        .grid-4-fit { grid-template-columns: repeat(4, minmax(0,1fr)); }
        @media (max-width: 1024px) { .grid-4-fit { grid-template-columns: repeat(2, minmax(0,1fr)); } }
        @media (max-width: 700px)  { .grid-3-fit, .grid-2-fit, .grid-4-fit { grid-template-columns: 1fr; } }

        .section-subtitle {
          max-width: 900px;
          margin: .35rem auto 1rem;
          color: var(--text-light);
          text-align: center;
        }

        .image-card {
          text-align: center;
          border-radius: 12px;
          overflow: hidden;
        }
        .image-card img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
        }

        .cta-center {
          text-align: center;
        }
        .btn-ghost {
          display: inline-block;
          border: 1px solid rgba(13, 74, 120, .25);
          padding: .7rem 1.1rem;
          border-radius: 999px;
          font-weight: 700;
          color: #0b4a78;
          background: #f7fbfe;
        }
        .btn-ghost:hover { background: #eef6fc; }
      `}</style>

      {/* Hero */}
      <section className="hero-gradient">
        <div className="container">
          <div className="kicker">For Clinics & Laboratories</div>
          <h1 className="hero-title">Implementing a patient-friendly, blood-based screening pathway</h1>
          <p className="kicker">for colorectal cancer.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '1rem' }}>
            <div className="panel">
              <h2>Innovative blood-based screening</h2>
              <p>
                ColonAiQ® is a multi-gene DNA methylation screening assay that uses a PCR-based workflow.
                It is designed to complement organised screening by improving patient acceptance and
                supporting timely triage to colonoscopy where appropriate.
              </p>
              <p>
                <strong>Regulatory status:</strong> CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®.
              </p>
            </div>
            <div className="panel simple image-card">
              <img
                src="/images/lab/hero-lab.webp"
                alt="Laboratory scientist handling blood samples for PCR-based screening"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Technical Overview</h2>
          <p className="section-subtitle">
            High-level overview of a typical PCR-based methylation screening workflow. For the official IFU,
            QA requirements, and detailed parameters, please contact us.
          </p>

          <div className="steps">
            <div className="panel step-card">
              <div className="step-head"><span className="step-num">1</span> Sample Collection & Plasma Separation</div>
              <ul>
                <li>Whole blood collection and plasma separation per validated SOPs.</li>
                <li>Cold-chain handling and defined storage conditions prior to extraction.</li>
              </ul>
            </div>

            <div className="panel step-card">
              <div className="step-head"><span className="step-num">2</span> DNA Extraction</div>
              <ul>
                <li>cfDNA isolation using validated extraction kits and instruments.</li>
                <li>Yield and quality checks according to QC acceptance criteria.</li>
              </ul>
            </div>

            <div className="panel step-card">
              <div className="step-head"><span className="step-num">3</span> Bisulfite Conversion</div>
              <ul>
                <li>Chemical conversion of unmethylated cytosines to uracils, with validated recovery and conversion efficiency.</li>
                <li>Post-conversion handling to minimise degradation.</li>
              </ul>
            </div>

            <div className="panel step-card">
              <div className="step-head"><span className="step-num">4</span> Primer/Probe Design & PCR</div>
              <ul>
                <li>Gene-targeted primers and probes specific to methylation signatures.</li>
                <li>qPCR setup with defined cycling, controls, and interpretive thresholds.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance & Utility */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '1rem' }}>
            <div className="panel simple image-card">
              <img
                src="/images/lab/performance-utility.webp"
                alt="Illustration of screening utility and clinical triage pathway"
              />
            </div>
            <div className="panel">
              <h2>Performance & Clinical Utility</h2>
              <p>
                ColonAiQ® is designed to support population screening objectives by offering a non-invasive,
                patient-friendly option. Within organised pathways, results may help prioritise individuals
                for diagnostic colonoscopy, aiding earlier detection and prevention.
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-light)' }}>
                Public pages do not include performance figures without direct citations. For peer-reviewed summaries and official announcements, please <a className="link" href="/contact">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setting Up */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Setting Up a ColonAiQ® Testing Facility</h2>
        <p className="section-subtitle">
            Key operational elements your team will align on during onboarding. Full documentation is provided under agreement.
          </p>

          <div className="grid-fit grid-2-fit">
            <div className="panel step-card">
              <div className="step-head"><span className="step-num">A</span> Sample Collection & Handling</div>
              <ul>
                <li>Validated blood collection tubes, time-to-processing windows, and storage guidance.</li>
                <li>Chain-of-custody and sample tracking practices.</li>
              </ul>
            </div>

            <div className="panel step-card">
              <div className="step-head"><span className="step-num">B</span> DNA Extraction & Bisulfite Conversion</div>
              <ul>
                <li>Approved extraction kits and conversion reagents with defined QC checkpoints.</li>
                <li>Yield and quality acceptance criteria prior to amplification.</li>
              </ul>
            </div>

            <div className="panel step-card">
              <div className="step-head"><span className="step-num">C</span> PCR Instrumentation & Controls</div>
              <ul>
                <li>Compatible real-time PCR platforms and software versions.</li>
                <li>Control strategy, run validity, and repeat criteria.</li>
              </ul>
            </div>

            <div className="panel step-card">
              <div className="step-head"><span className="step-num">D</span> Quality Management</div>
              <ul>
                <li>Internal QA, proficiency checks, documentation, and record retention.</li>
                <li>Post-market surveillance and continual improvement processes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reagents / Platforms */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Reagents for ColonAiQ® Operation</h2>

          <div className="grid-fit grid-4-fit">
            <div className="panel simple">
              <h4>DNA Extraction</h4>
              <p>Validated cfDNA kits and automation options as per onboarding package.</p>
            </div>
            <div className="panel simple">
              <h4>Bisulfite Conversion</h4>
              <p>Validated conversion kits with specified recovery and efficiency targets.</p>
            </div>
            <div className="panel simple">
              <h4>Amplification</h4>
              <p>Gene-specific primer and probe sets with master mix configurations.</p>
            </div>
            <div className="panel simple">
              <h4>Adapted Platforms</h4>
              <p>Compatible qPCR instruments and lab-automation options. Details provided on request.</p>
            </div>
          </div>

          <div className="panel" style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: 14, opacity: .9 }}>
              For the official IFU, validation package, and onboarding kit list, please email{' '}
              <a className="link" href="mailto:admin@saversmed.com">admin@saversmed.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>References</h2>
          <div className="panel">
            <p>
              A formally referenced bibliography, including peer-reviewed publications and official announcements,
              will be linked here upon permission. To request specific documentation, please{' '}
              <a className="link" href="/contact">contact us</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container cta-center">
          <h2 className="section-title">Partner with ColonAiQ®</h2>
          <p className="section-subtitle">
            We work with certified partners to implement rigorous, compliant workflows that support public health goals.
          </p>
          <a
            className="btn btn-primary"
            href="/contact"
            onClick={(e) => {
              onNavigate?.('contact')
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
