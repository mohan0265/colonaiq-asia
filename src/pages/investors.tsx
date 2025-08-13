import React from 'react'

type Props = { onNavigate?: (page: string) => void }

export default function InvestorsPage({ onNavigate }: Props) {
  return (
    <div>
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h1 className="section-title">Investors</h1>
          <p className="section-subtitle">
            Investor materials are available upon request. Public pages remain fully compliant and contain no commercial claims.
          </p>
          <div className="card">
            <p>
              Please email <a className="link" href="mailto:admin@saversmed.com">admin@saversmed.com</a> to request access to our investor materials.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
