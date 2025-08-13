import React, { useState } from 'react'
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
      onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(page) } }}
      style={{
        padding: '0.6rem 0.8rem',
        textDecoration: 'none',
        color: 'var(--white)',
        opacity: active ? 1 : 0.9,
        fontWeight: active ? 700 : 500,
        borderBottom: active ? '2px solid var(--accent-teal)' : '2px solid transparent'
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
      onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9' }}
    >
      {label}
    </a>
  )
}

const Header: React.FC<Props> = ({ current, onNavigate }) => {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#0e2a47', // dark navy similar to COLONAiVE
        boxShadow: '0 6px 20px rgba(0,0,0,.18)'
      }}
    >
      <div className="container" style={{
        display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.65rem 0'
      }}>
        {/* Brand */}
        <a
          href="/"
          onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('home') } }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          {/* Bigger, clearer Saver’s Med logo */}
          <img
            src="/logos/SaversMed.png"
            alt="Saver’s Med"
            style={{ height: 44, width: 'auto' }}   // ↑ increased size
          />
          <span style={{ fontWeight: 700, letterSpacing: .2, color: 'var(--white)' }}>
            ColonAiQ® Asia
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ marginLeft: 'auto', display: 'none', gap: '.25rem' }} className="nav-desktop">
          <NavLink label="Home" page="home" current={current} onNavigate={onNavigate} />
          <NavLink label="For Patients" page="patients" current={current} onNavigate={onNavigate} />
          <NavLink label="For Clinics & Labs" page="clinics-labs" current={current} onNavigate={onNavigate} />
          <NavLink label="Clinical Evidence" page="clinical-evidence" current={current} onNavigate={onNavigate} />
          <NavLink label="Investors" page="investors" current={current} onNavigate={onNavigate} />
          <NavLink label="Contact" page="contact" current={current} onNavigate={onNavigate} />
        </nav>

        {/* Mobile button */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          style={{
            marginLeft: 'auto',
            display: 'inline-flex',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,.35)',
            color: 'var(--white)',
            borderRadius: 10,
            padding: '.35rem .6rem'
          }}
          className="nav-mobile-btn"
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: '#0e2a47',
          borderTop: '1px solid rgba(255,255,255,.15)',
          padding: '.5rem 0'
        }} className="nav-mobile">
          <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            {(['home','patients','clinics-labs','clinical-evidence','investors','contact'] as Page[]).map((p) => (
              <a
                key={p}
                href={routeFor(p)}
                onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(p) } setOpen(false) }}
                style={{
                  padding: '.7rem 0',
                  textDecoration: 'none',
                  color: 'var(--white)',
                  borderBottom: '1px solid rgba(255,255,255,.08)'
                }}
              >
                {p === 'home' ? 'Home'
                  : p === 'patients' ? 'For Patients'
                  : p === 'clinics-labs' ? 'For Clinics & Labs'
                  : p === 'clinical-evidence' ? 'Clinical Evidence'
                  : p === 'investors' ? 'Investors'
                  : 'Contact'}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Responsive rules */}
      <style>{`
        @media (min-width: 900px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
