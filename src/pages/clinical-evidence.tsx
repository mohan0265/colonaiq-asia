import React from 'react'

type Props = { onNavigate?: (page: string) => void }

export default function ClinicalEvidencePage({ onNavigate }: Props) {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Clinical Information</h1>
          <p className="section-subtitle">
            A detailed, referenced summary is being prepared. Public pages contain no unverified figures, quotes, or endorsements.
          </p>

          <div className="card">
            <h2>What ColonAiQ® Is</h2>
            <ul>
              <li>Blood-based, multi-gene DNA methylation screening for colorectal cancer.</li>
              <li>Designed to help increase screening uptake among eligible adults.</li>
              <li>Supports timely triage to colonoscopy for diagnostic confirmation where appropriate.</li>
            </ul>
          </div>

          <div className="card">
            <h2>Regulatory Status</h2>
            <p><strong>CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®</strong>.</p>
          </div>

          <div className="card">
            <h2>References</h2>
            <p>
              Peer-reviewed citations and official announcements will be linked here upon permission. For specific
              documentation requests, please <a className="link" href="/contact">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
