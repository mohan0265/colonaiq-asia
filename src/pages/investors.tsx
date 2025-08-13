import React, { useState } from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface InvestorsPageProps {
  onNavigate: (page: Page) => void
}

const InvestorsPage: React.FC<InvestorsPageProps> = ({ onNavigate }) => {
  const [accessRequested, setAccessRequested] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    title: '',
    investorType: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAccessRequested(true)
    // Handle form submission
    console.log('Access request submitted:', formData)
  }

  if (accessRequested) {
    return (
      <div>
        {/* Success Message */}
        <section style={{ 
          background: 'linear-gradient(135deg, var(--accent-teal) 0%, #0d9488 100%)',
          color: 'var(--white)',
          padding: '6rem 0',
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="container">
            <div style={{ 
              fontSize: '4rem',
              marginBottom: '2rem'
            }}>
              ✅
            </div>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem'
            }}>
              Access Request Submitted
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2rem',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Thank you for your interest. Our team will review your request and contact you within 24 hours.
            </p>
            <div style={{ 
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '1rem',
              padding: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }}>
              <h3 style={{ 
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                What happens next?
              </h3>
              <ul style={{ 
                textAlign: 'left',
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}>
                <li>• Verification of credentials</li>
                <li>• Secure access portal setup</li>
                <li>• Materials delivery</li>
                <li>• Optional call scheduling</li>
              </ul>
            </div>
            <button 
              className="btn"
              onClick={() => onNavigate('home')}
              style={{ 
                backgroundColor: 'var(--white)',
                color: 'var(--accent-teal)',
                fontSize: '1.1rem', 
                padding: '1rem 2rem'
              }}
            >
              Return to Homepage
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
        color: 'var(--white)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ 
            fontSize: '3rem',
            marginBottom: '1rem'
          }}>
            🔒
          </div>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '1rem'
          }}>
            Investor Relations
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            maxWidth: '700px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Investor materials are available on request. Please contact admin@saversmed.com.
          </p>
        </div>
      </section>

      {/* Simple Info Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '2rem',
              color: 'var(--primary-blue)'
            }}>
              Business Information Access
            </h2>
            
            <div className="card" style={{ marginBottom: '3rem' }}>
              <p style={{ 
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: 'var(--text-light)',
                marginBottom: '2rem'
              }}>
                Business materials and information are available to qualified parties upon request 
                and appropriate verification procedures.
              </p>
              
              <div style={{ 
                background: 'var(--bg-light)',
                borderRadius: '1rem',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  color: 'var(--primary-blue)'
                }}>
                  Contact Information
                </h3>
                <div style={{ 
                  fontSize: '1.2rem',
                  color: 'var(--text-dark)'
                }}>
                  <p style={{ marginBottom: '1rem' }}>
                    <strong>Saver's Med Pte Ltd</strong>
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    10 Jalan Rengas, Singapore 808530
                  </p>
                  <p>
                    📧 admin@saversmed.com
                  </p>
                </div>
              </div>
              
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--text-light)',
                fontStyle: 'italic'
              }}>
                All enquiries will be handled confidentially and responded to within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InvestorsPage