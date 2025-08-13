import React from 'react'
import { Page } from '../lib/nav'

type Props = {
  current?: Page
  onNavigate?: React.Dispatch<React.SetStateAction<Page>>
}

const routeFor = (p: Page) =>
  p === 'home' ? '/' :
  p === 'patients' ? '/patients' :
  p === 'clinics-labs' ? '/clinics-and-labs' :
  p === 'clinical-evidence' ? '/clinical-evidence' :
  p === 'investors' ? '/investors' :
  '/contact'

const NavLink: React.FC<{ label: string; page: Page; current?: Page; onNavigate?: Props['onNavigate'] }> = ({
  label, page, current, onNavigate
}) => {
  const href = routeFor(page)
  const active = current === page
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`nav-link${active ? ' active' : ''}`}
      onClick={(e) => {
        if (onNavigate) { e.preventDefault(); onNavigate(page) }
      }}
      style={{ padding: '0.5rem 0.75rem' }}
    >
      {label}
    </a>
  )
}

const Header: React.FC<Props> = ({ current, onNavigate }) => {
  return (
    <header
      style={{
        background: 'var(--bg-white)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 0' }}>
        {/* Brand / Logo */}
        <a
          href="/"
          onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('home') } }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <img src="/logos/SaversMed.png" alt="COLONAiQ® Asia" style={{ height: 28, width: 'auto' }} />
          <span style={{ fontWeight: 700, color: 'var(--text-strong)' }}>ColonAiQ® Asia</span>
        </a>

        {/* Nav */}
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
          <NavLink label="Home" page="home" current={current} onNavigate={onNavigate} />
          <NavLink label="For Patients" page="patients" current={current} onNavigate={onNavigate} />
          <NavLink label="For Clinics & Labs" page="clinics-labs" current={current} onNavigate={onNavigate} />
          <NavLink label="Clinical Evidence" page="clinical-evidence" current={current} onNavigate={onNavigate} />
          <NavLink label="Investors" page="investors" current={current} onNavigate={onNavigate} />
          <NavLink label="Contact" page="contact" current={current} onNavigate={onNavigate} />
        </nav>
      </div>
    </header>
  )
}

export default Header
