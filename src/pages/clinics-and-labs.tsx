import React from 'react'

export default function ClinicsAndLabsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
          color: 'var(--white)',
          padding: '5rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            For Clinics & Laboratories
          </h1>
          <p style={{ opacity: 0.95 }}>
            Implementing a patient-friendly, blood-based screening pathway for colorectal cancer.
          </p>
        </div>
      </section>

      {/* Intro – mirrors your original page’s intent */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div className="card">
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
            <div className="card simple" style={{ textAlign: 'center' }}>
              <img
                src="/images/lab/hero-lab.webp"
                alt="Laboratory scientist handling blood samples for PCR-based screening"
                style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview – condensed from original sections */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Technical Overview</h2>
          <p className="section-subtitle">
            High-level overview of a typical PCR-based methylation screening workflow. For the official IFU, QA
            requirements, and detailed parameters, please contact us.
          </p>

          <div className="grid grid-2">
            <details className="accordion card" open>
              <summary>Sample Collection & Plasma Separation</summary>
              <ul>
                <li>Whole blood collection and plasma separation per validated SOPs.</li>
                <li>Cold-chain handling and defined storage conditions prior to extraction.</li>
              </ul>
            </details>

            <details className="accordion card">
              <summary>DNA Extraction</summary>
              <ul>
                <li>cfDNA isolation using validated extraction kits and instruments.</li>
                <li>Yield/quality checks according to QC acceptance criteria.</li>
              </ul>
            </details>

            <details className="accordion card">
              <summary>Bisulfite Conversion</summary>
              <ul>
                <li>Chemical conversion of unmethylated cytosines to uracils; validated recovery and conversion efficiency.</li>
                <li>Post-conversion handling to minimise degradation.</li>
              </ul>
            </details>

            <details className="accordion card">
              <summary>Primer/Probe Design & PCR</summary>
              <ul>
                <li>Gene-targeted primers/probes specific to methylation signatures.</li>
                <li>qPCR setup with defined cycling, controls, and interpretive thresholds.</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Performance & Utility – neutral, no unverified figures */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div className="card simple" style={{ textAlign: 'center' }}>
              <img
                src="/images/lab/performance-utility.webp"
                alt="Illustration of screening utility and clinical triage pathway"
                style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
              />
            </div>
            <div className="card">
              <h2>Performance & Clinical Utility</h2>
              <p>
                ColonAiQ® is designed to support population screening objectives by offering a non-invasive,
                patient-friendly option. Within organised pathways, results may help prioritise individuals
                for diagnostic colonoscopy, aiding earlier detection and prevention.
              </p>
              <p>
                Public pages do not include performance figures without direct citations. For peer-reviewed
                summaries and official announcements, please <a className="link" href="/contact">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setting up – mirrors your original structure, but kept high-level */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Setting Up a ColonAiQ® Testing Facility</h2>
          <p className="section-subtitle">
            Key operational elements your team will align on during onboarding. Full documentation is provided under agreement.
          </p>

          <div className="grid grid-2">
            <details className="accordion card" open>
              <summary>Sample Collection & Handling</summary>
              <ul>
                <li>Validated blood collection tubes, time-to-processing windows, and storage guidance.</li>
                <li>Chain-of-custody and sample tracking practices.</li>
              </ul>
            </details>

            <details className="accordion card">
              <summary>DNA Extraction & Bisulfite Conversion</summary>
              <ul>
                <li>Approved extraction kits and conversion reagents with defined QC checkpoints.</li>
                <li>Yield/quality acceptance criteria prior to amplification.</li>
              </ul>
            </details>

            <details className="accordion card">
              <summary>PCR Instrumentation & Controls</summary>
              <ul>
                <li>Compatible real-time PCR platforms and software versions.</li>
                <li>Control strategy, run validity, and repeat criteria.</li>
              </ul>
            </details>

            <details className="accordion card">
              <summary>Quality Management</summary>
              <ul>
                <li>Internal QA, proficiency checks, documentation, and record retention.</li>
                <li>Post-market surveillance and continual improvement processes.</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Reagents/Platforms – from your original page headings */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Reagents for ColonAiQ® Operation</h2>
          <div className="grid grid-4">
            <div className="card simple">
              <h4>DNA Extraction</h4>
              <p>Validated cfDNA kits and automation options as per onboarding package.</p>
            </div>
            <div className="card simple">
              <h4>Bisulfite Conversion</h4>
              <p>Validated conversion kits with specified recovery/efficiency targets.</p>
            </div>
            <div className="card simple">
              <h4>Amplification</h4>
              <p>Gene-specific primer/probe sets and master mix configurations.</p>
            </div>
            <div className="card simple">
              <h4>Adapted Platforms</h4>
              <p>Compatible qPCR instruments and lab-automation options (details provided on request).</p>
            </div>
          </div>

          <div className="card" style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: 14, opacity: 0.85 }}>
              For the official IFU, validation package, and onboarding kit list, please email{' '}
              <a className="link" href="mailto:admin@saversmed.com">admin@saversmed.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* References – placeholder until citations cleared */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">References</h2>
          <div className="card">
            <p>
              A formally referenced bibliography (peer-reviewed publications and official announcements) will be linked here upon permission.
              To request specific documentation, please <a className="link" href="/contact">contact us</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Partner with ColonAiQ®</h2>
          <p className="section-subtitle">
            We work with certified partners to implement rigorous, compliant workflows that support public health goals.
          </p>
          <a className="btn btn-primary" href="/contact">Contact Us</a>
        </div>
      </section>
    </div>
  )
}
