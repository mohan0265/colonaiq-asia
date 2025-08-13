import React, { useState } from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface HeaderProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'patients' as Page, label: 'For Patients' },
    { id: 'clinics-labs' as Page, label: 'For Clinics & Labs' },
    { id: 'clinical-evidence' as Page, label: 'Clinical Evidence' },
    { id: 'investors' as Page, label: 'Investors' },
    { id: 'contact' as Page, label: 'Contact' },
  ]

  return (
    <header style={{ 
      background: 'var(--white)', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem' 
      }}>
        {/* Logo */}
        <div 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}
          onClick={() => onNavigate('home')}
        >
          <img 
            src="/logos/COLONAiVE-light.png" 
            alt="ColonAiVE" 
            style={{ height: '40px' }}
          />
          <span style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: 'var(--primary-blue)' 
          }}>
            ColonAiQ® Asia
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === item.id ? 'var(--accent-teal)' : 'var(--text-dark)',
                fontWeight: currentPage === item.id ? '600' : '500',
                fontSize: '1rem',
                cursor: 'pointer',
                padding: '0.5rem 0',
                borderBottom: currentPage === item.id ? '2px solid var(--accent-teal)' : 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== item.id) {
                  e.currentTarget.style.color = 'var(--accent-teal)'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.id) {
                  e.currentTarget.style.color = 'var(--text-dark)'
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--primary-blue)'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          className="mobile-nav"
          style={{
            display: 'none',
            flexDirection: 'column',
            background: 'var(--white)',
            borderTop: '1px solid #e5e7eb',
            padding: '1rem'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id)
                setIsMenuOpen(false)
              }}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === item.id ? 'var(--accent-teal)' : 'var(--text-dark)',
                fontWeight: currentPage === item.id ? '600' : '500',
                fontSize: '1rem',
                cursor: 'pointer',
                padding: '0.75rem 0',
                textAlign: 'left',
                borderBottom: '1px solid #f3f4f6'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header

