import React, { useState } from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface ClinicsLabsPageProps {
  onNavigate: (page: Page) => void
}

const ClinicsLabsPage: React.FC<ClinicsLabsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: '',
    location: '',
    currentVolume: '',
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
    // Handle form submission
    alert('Thank you for your interest! We will contact you within 24 hours.')
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
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            marginBottom: '1rem'
          }}>
            For Clinics & Laboratories
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            maxWidth: '700px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            We are onboarding certified ColonAiQ® provider partners. The official partner directory will appear here. For listing requests or verification, email admin@saversmed.com.
          </p>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Partner with ColonAiQ®?</h2>
          <p className="section-subtitle">
            Enhance your screening capabilities while improving patient experience and compliance
          </p>
          
          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            <div className="card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: 'var(--primary-blue)'
              }}>
                🎯 Improved Patient Outcomes
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Offer your patients a more convenient screening option that increases compliance and 
                enables earlier detection of colorectal cancer.
              </p>
              <ul style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                <li>• Higher patient acceptance rates</li>
                <li>• Reduced screening barriers</li>
                <li>• Earlier stage detection</li>
                <li>• Better treatment outcomes</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: 'var(--primary-blue)'
              }}>
                🏥 Enhanced Service Portfolio
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Expand your diagnostic capabilities with cutting-edge blood-based screening technology 
                that complements existing services.
              </p>
              <ul style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                <li>• Advanced biomarker testing</li>
                <li>• Regulatory-approved technology</li>
                <li>• Streamlined workflow integration</li>
                <li>• Comprehensive reporting system</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: 'var(--primary-blue)'
              }}>
                📈 Support National Health Goals
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Contribute to Singapore's Healthier SG initiative by making colorectal cancer screening 
                more accessible to the population.
              </p>
              <ul style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                <li>• Align with national screening targets</li>
                <li>• Reduce healthcare burden</li>
                <li>• Improve population health metrics</li>
                <li>• Support preventive care initiatives</li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: 'var(--primary-blue)'
              }}>
                🤝 Comprehensive Support
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', marginBottom: '1rem' }}>
                Receive full training, technical support, and marketing assistance to ensure successful 
                implementation and patient satisfaction.
              </p>
              <ul style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                <li>• Staff training programs</li>
                <li>• Technical implementation support</li>
                <li>• Marketing materials provided</li>
                <li>• Ongoing clinical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Simple Implementation Process</h2>
          <p className="section-subtitle">
            Get started with ColonAiQ® in just a few easy steps
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'Discuss your needs and assess compatibility with our team of experts.'
              },
              {
                step: '2',
                title: 'Agreement & Setup',
                description: 'Finalize partnership terms and begin technical integration planning.'
              },
              {
                step: '3',
                title: 'Staff Training',
                description: 'Comprehensive training for your team on test procedures and protocols.'
              },
              {
                step: '4',
                title: 'Go Live',
                description: 'Launch ColonAiQ® testing with full support and monitoring.'
              }
            ].map((process, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--accent-teal)',
                  color: 'var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '700',
                  margin: '0 auto 1rem'
                }}>
                  {process.step}
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: 'var(--primary-blue)'
                }}>
                  {process.title}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Support Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Training & Support Programs</h2>
          <p className="section-subtitle">
            Comprehensive support to ensure successful implementation and optimal patient care
          </p>
          
          <div className="grid grid-3">
            {[
              {
                icon: '🎓',
                title: 'Clinical Training',
                description: 'In-depth training on test methodology, interpretation, and patient counseling.',
                features: ['2-day intensive workshop', 'Certification program', 'Ongoing education', 'Clinical guidelines']
              },
              {
                icon: '🔧',
                title: 'Technical Support',
                description: 'Complete technical assistance for seamless integration with your systems.',
                features: ['System integration', '24/7 technical helpdesk', 'Quality assurance', 'Troubleshooting']
              },
              {
                icon: '📢',
                title: 'Marketing Support',
                description: 'Professional marketing materials and patient education resources.',
                features: ['Patient brochures', 'Digital marketing assets', 'Website integration', 'Social media content']
              }
            ].map((support, index) => (
              <div key={index} className="card">
                <div style={{ 
                  fontSize: '3rem', 
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  {support.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: 'var(--primary-blue)',
                  textAlign: 'center'
                }}>
                  {support.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {support.description}
                </p>
                <ul style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {support.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Enquiry Form Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Partner with Us</h2>
          <p className="section-subtitle">
            Ready to enhance your screening capabilities? Get in touch with our partnership team
          </p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit} className="card">
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
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
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
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
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
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
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
                    Organization Type *
                  </label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
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
                    <option value="">Select Type</option>
                    <option value="hospital">Hospital</option>
                    <option value="clinic">Clinic</option>
                    <option value="laboratory">Laboratory</option>
                    <option value="diagnostic-center">Diagnostic Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)'
                  }}>
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="City, Country"
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
                  Current Monthly Testing Volume
                </label>
                <select
                  name="currentVolume"
                  value={formData.currentVolume}
                  onChange={handleInputChange}
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
                  <option value="">Select Volume</option>
                  <option value="0-50">0-50 tests</option>
                  <option value="51-100">51-100 tests</option>
                  <option value="101-500">101-500 tests</option>
                  <option value="500+">500+ tests</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: 'var(--text-dark)'
                }}>
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your current screening programs and how you'd like to integrate ColonAiQ®..."
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

              <button 
                type="submit"
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  fontSize: '1.1rem',
                  padding: '1rem'
                }}
              >
                Submit Partnership Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--accent-teal) 0%, #0d9488 100%)',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem'
          }}>
            Join the ColonAiQ® Network
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Be part of the future of colorectal cancer screening and make a difference in patient lives
          </p>
          <button 
            className="btn btn-outline"
            onClick={() => onNavigate('contact')}
            style={{ 
              borderColor: 'var(--white)',
              color: 'var(--white)',
              fontSize: '1.1rem', 
              padding: '1rem 2rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--white)'
              e.currentTarget.style.color = 'var(--accent-teal)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--white)'
            }}
          >
            Contact Our Partnership Team
          </button>
        </div>
      </section>
    </div>
  )
}

export default ClinicsLabsPage

