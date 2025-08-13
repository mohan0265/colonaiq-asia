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
              Thank you for your interest in ColonAiQ® Asia. Our investor relations team will review your request and contact you within 24 hours.
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
                <li>• Verification of investor credentials</li>
                <li>• Secure access portal setup</li>
                <li>• Investment materials delivery</li>
                <li>• Optional investor call scheduling</li>
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
            Access exclusive investment information, financial projections, and strategic expansion plans
          </p>
        </div>
      </section>

      {/* Access Gate Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '1rem',
              color: 'var(--primary-blue)'
            }}>
              Restricted Access Area
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-light)',
              marginBottom: '3rem',
              lineHeight: '1.6'
            }}>
              This section contains confidential business information, financial data, and strategic plans 
              intended exclusively for qualified investors and potential partners. Please request access below.
            </p>

            {/* What's Inside Preview */}
            <div style={{ 
              background: 'var(--bg-light)',
              borderRadius: '1rem',
              padding: '3rem',
              marginBottom: '3rem'
            }}>
              <h3 style={{ 
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '2rem',
                color: 'var(--primary-blue)'
              }}>
                Investor Materials Include:
              </h3>
              <div className="grid grid-2">
                {[
                  {
                    icon: '📊',
                    title: 'Financial Projections',
                    description: 'Detailed revenue forecasts, market penetration models, and ROI projections for Asia-Pacific expansion'
                  },
                  {
                    icon: '🌏',
                    title: 'Market Expansion Strategy',
                    description: 'Strategic roadmap for India, Japan, Australia, and Southeast Asian markets with timeline and investment requirements'
                  },
                  {
                    icon: '💼',
                    title: 'Business Model Analysis',
                    description: 'Comprehensive analysis of revenue streams, partnership structures, and competitive positioning'
                  },
                  {
                    icon: '📈',
                    title: 'Investment Opportunities',
                    description: 'Current funding rounds, equity positions, and strategic partnership opportunities'
                  },
                  {
                    icon: '🔬',
                    title: 'R&D Pipeline',
                    description: 'Product development roadmap, clinical trial timelines, and intellectual property portfolio'
                  },
                  {
                    icon: '📋',
                    title: 'Executive Presentations',
                    description: 'Pitch decks, investor presentations, and executive team profiles with track record'
                  }
                ].map((item, index) => (
                  <div key={index} style={{ 
                    background: 'var(--white)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    textAlign: 'left'
                  }}>
                    <div style={{ 
                      fontSize: '2rem',
                      marginBottom: '0.75rem'
                    }}>
                      {item.icon}
                    </div>
                    <h4 style={{ 
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: 'var(--primary-blue)'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ 
                      color: 'var(--text-light)',
                      lineHeight: '1.5',
                      fontSize: '0.95rem'
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Access Request Form */}
            <div className="card" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--primary-blue)',
                textAlign: 'center'
              }}>
                Request Investor Access
              </h3>
              <p style={{ 
                color: 'var(--text-light)',
                marginBottom: '2rem',
                textAlign: 'center',
                lineHeight: '1.6'
              }}>
                Please provide your information below. Access will be granted to qualified investors 
                and institutional partners following verification.
              </p>

              <form onSubmit={handleSubmit}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-dark)'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-dark)'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-dark)'
                    }}>
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-dark)'
                    }}>
                      Title/Position *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)'
                  }}>
                    Investor Type *
                  </label>
                  <select
                    name="investorType"
                    value={formData.investorType}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  >
                    <option value="">Select Investor Type</option>
                    <option value="venture-capital">Venture Capital</option>
                    <option value="private-equity">Private Equity</option>
                    <option value="institutional">Institutional Investor</option>
                    <option value="strategic">Strategic Partner</option>
                    <option value="family-office">Family Office</option>
                    <option value="angel">Angel Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)'
                  }}>
                    Investment Interest & Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Please describe your investment focus, typical investment size, and specific interest in ColonAiQ®..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-teal)'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                <div style={{ 
                  background: 'var(--bg-light)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-light)'
                }}>
                  <strong>Privacy Notice:</strong> All information provided will be kept strictly confidential. 
                  Access to investor materials requires verification and execution of appropriate confidentiality agreements.
                </div>

                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    fontSize: '1.1rem',
                    padding: '1rem'
                  }}
                >
                  Request Access to Investor Materials
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="section" style={{ 
        background: 'var(--bg-light)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h3 style={{ 
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'var(--primary-blue)'
          }}>
            Prefer to Speak Directly?
          </h3>
          <p style={{ 
            color: 'var(--text-light)',
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            Our investor relations team is available for confidential discussions
          </p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <strong>Email:</strong> investors@colonaiq-asia.com
            </div>
            <div>
              <strong>Phone:</strong> +65 XXXX XXXX
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InvestorsPage

