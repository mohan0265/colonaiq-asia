import React, { useState } from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface ContactPageProps {
  onNavigate: (page: Page) => void
}

type ContactType = 'patient' | 'partner' | 'investor'

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [activeForm, setActiveForm] = useState<ContactType>('patient')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    urgency: 'normal'
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
    alert(`Thank you for your ${activeForm} enquiry! We will respond within 24 hours.`)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      subject: '',
      message: '',
      preferredContact: 'email',
      urgency: 'normal'
    })
  }

  const formConfigs = {
    patient: {
      title: 'Patient Enquiry',
      description: 'Questions about ColonAiQ® testing, test centers, or screening information',
      subjects: [
        'Test Information',
        'Find Test Center',
        'Appointment Booking',
        'Results Inquiry',
        'Insurance Coverage',
        'General Questions'
      ]
    },
    partner: {
      title: 'Partner Enquiry',
      description: 'For clinics, laboratories, and healthcare providers interested in offering ColonAiQ®',
      subjects: [
        'Partnership Opportunity',
        'Technical Integration',
        'Training Requirements',
        'Pricing Information',
        'Marketing Support',
        'Implementation Timeline'
      ]
    },
    investor: {
      title: 'Investor Enquiry',
      description: 'Investment opportunities, financial information, and strategic partnerships',
      subjects: [
        'Investment Opportunity',
        'Financial Information',
        'Strategic Partnership',
        'Market Expansion',
        'Due Diligence',
        'Executive Meeting'
      ]
    }
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
            Contact Us
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            maxWidth: '700px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Get in touch with our team for questions, partnerships, or investment opportunities
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <p className="section-subtitle">
            Choose your enquiry type and fill out the form below
          </p>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Form Type Selector */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              {(Object.keys(formConfigs) as ContactType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveForm(type)}
                  style={{
                    padding: '1rem 2rem',
                    border: '2px solid var(--primary-blue)',
                    borderRadius: '0.75rem',
                    background: activeForm === type ? 'var(--primary-blue)' : 'transparent',
                    color: activeForm === type ? 'var(--white)' : 'var(--primary-blue)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem'
                  }}
                >
                  {formConfigs[type].title}
                </button>
              ))}
            </div>

            {/* Active Form */}
            <div className="card">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ 
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: 'var(--primary-blue)'
                }}>
                  {formConfigs[activeForm].title}
                </h3>
                <p style={{ 
                  color: 'var(--text-light)',
                  fontSize: '1.1rem'
                }}>
                  {formConfigs[activeForm].description}
                </p>
              </div>

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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
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
                    />
                  </div>

                  {activeForm !== 'patient' && (
                    <div>
                      <label style={{ 
                        display: 'block', 
                        marginBottom: '0.5rem',
                        fontWeight: '600',
                        color: 'var(--text-dark)'
                      }}>
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
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
                      />
                    </div>
                  )}
                </div>

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
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
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
                      <option value="">Select Subject</option>
                      {formConfigs[activeForm].subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-dark)'
                    }}>
                      Preferred Contact Method
                    </label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
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
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                </div>

                {activeForm !== 'patient' && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-dark)'
                    }}>
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
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
                      <option value="normal">Normal (24-48 hours)</option>
                      <option value="high">High (Same day)</option>
                      <option value="urgent">Urgent (Within 4 hours)</option>
                    </select>
                  </div>
                )}

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please provide details about your enquiry..."
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
                  type="button"
                  className="btn btn-primary"
                  disabled
                  style={{ 
                    width: '100%', 
                    fontSize: '1.1rem',
                    padding: '1rem',
                    opacity: '0.6',
                    cursor: 'not-allowed'
                  }}
                >
                  Form Submission - Coming Soon
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about contacting us
          </p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="grid" style={{ gap: '1.5rem' }}>
              {[
                {
                  question: 'How quickly will I receive a response?',
                  answer: 'Patient enquiries are typically answered within 24 hours. Partnership and investor enquiries may take 24-48 hours for a comprehensive response.'
                },
                {
                  question: 'Can I schedule a phone call or video meeting?',
                  answer: 'Yes! For complex enquiries or partnership discussions, we can arrange a phone call or video meeting. Please mention your preference in your message.'
                },
                {
                  question: 'Do you provide support in languages other than English?',
                  answer: 'Our primary support is in English, but we can arrange Mandarin and Malay support for patient enquiries when needed.'
                },
                {
                  question: 'Is my information kept confidential?',
                  answer: 'Absolutely. All enquiries are treated with strict confidentiality, especially investor and partnership discussions which may involve additional NDAs.'
                }
              ].map((faq, index) => (
                <div key={index} className="card">
                  <h4 style={{ 
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: 'var(--primary-blue)'
                  }}>
                    {faq.question}
                  </h4>
                  <p style={{ 
                    color: 'var(--text-light)',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

