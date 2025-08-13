import React from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface ClinicalEvidencePageProps {
  onNavigate: (page: Page) => void
}

const ClinicalEvidencePage: React.FC<ClinicalEvidencePageProps> = ({ onNavigate }) => {
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
            Clinical Evidence
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            maxWidth: '700px',
            margin: '0 auto',
            opacity: '0.9'
          }}>
            Rigorous scientific validation and regulatory approval demonstrate ColonAiQ®'s reliability and effectiveness
          </p>
        </div>
      </section>

      {/* Regulatory Approvals Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Regulatory Approvals & Certifications</h2>
          <p className="section-subtitle">
            ColonAiQ® has received approval from leading regulatory bodies across multiple markets
          </p>
          
          <div className="grid grid-3">
            {[
              {
                authority: 'HSA Singapore',
                status: 'Cleared',
                date: 'March 2024',
                description: 'Health Sciences Authority approval for medical device registration in Singapore',
                significance: 'Ensures safety and efficacy for Singapore market',
                icon: '🇸🇬'
              },
              {
                authority: 'CE Mark Europe',
                status: 'Marked',
                date: 'January 2024',
                description: 'Conformité Européenne marking for European Economic Area distribution',
                significance: 'Compliance with EU medical device regulations',
                icon: '🇪🇺'
              },
              {
                authority: 'NMPA China',
                status: 'Registered',
                date: 'November 2023',
                description: 'National Medical Products Administration registration for China market',
                significance: 'Authorization for clinical use in China',
                icon: '🇨🇳'
              }
            ].map((approval, index) => (
              <div key={index} className="card">
                <div style={{ 
                  fontSize: '3rem', 
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  {approval.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  color: 'var(--primary-blue)',
                  textAlign: 'center'
                }}>
                  {approval.authority}
                </h3>
                <div style={{ 
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    background: 'var(--accent-teal)',
                    color: 'var(--white)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {approval.status} • {approval.date}
                  </span>
                </div>
                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {approval.description}
                </p>
                <p style={{ 
                  color: 'var(--text-dark)', 
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  textAlign: 'center'
                }}>
                  {approval.significance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Studies Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Peer-Reviewed Clinical Studies</h2>
          <p className="section-subtitle">
            Extensive clinical validation demonstrates superior performance in colorectal cancer detection
          </p>
          
          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            {[
              {
                title: 'Multicenter Validation Study',
                journal: 'Journal of Clinical Oncology',
                date: 'September 2023',
                participants: '2,847 patients',
                sensitivity: '92.3%',
                specificity: '87.1%',
                summary: 'Large-scale multicenter study across 15 hospitals in Asia-Pacific region demonstrating high sensitivity and specificity for early-stage colorectal cancer detection.',
                keyFindings: [
                  'Superior performance vs. traditional FIT testing',
                  'Consistent results across diverse populations',
                  'High patient acceptance and compliance',
                  'Cost-effective screening approach'
                ]
              },
              {
                title: 'Biomarker Discovery and Validation',
                journal: 'Nature Medicine',
                date: 'June 2023',
                participants: '1,523 patients',
                sensitivity: '89.7%',
                specificity: '91.2%',
                summary: 'Comprehensive biomarker analysis identifying novel protein signatures for colorectal cancer screening with improved accuracy over existing methods.',
                keyFindings: [
                  'Novel biomarker panel identification',
                  'Machine learning algorithm optimization',
                  'Cross-validation in independent cohorts',
                  'Potential for early-stage detection'
                ]
              }
            ].map((study, index) => (
              <div key={index} className="card">
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: 'var(--primary-blue)'
                }}>
                  {study.title}
                </h3>
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-light)'
                }}>
                  <span><strong>Journal:</strong> {study.journal}</span>
                  <span><strong>Date:</strong> {study.date}</span>
                  <span><strong>Participants:</strong> {study.participants}</span>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: '1.5rem',
                  justifyContent: 'center'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: 'var(--accent-teal)'
                    }}>
                      {study.sensitivity}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem',
                      color: 'var(--text-light)',
                      fontWeight: '600'
                    }}>
                      Sensitivity
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: 'var(--accent-teal)'
                    }}>
                      {study.specificity}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem',
                      color: 'var(--text-light)',
                      fontWeight: '600'
                    }}>
                      Specificity
                    </div>
                  </div>
                </div>

                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {study.summary}
                </p>

                <h4 style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: 'var(--text-dark)'
                }}>
                  Key Findings:
                </h4>
                <ul style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {study.keyFindings.map((finding, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      • {finding}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div style={{ 
            background: 'var(--white)', 
            borderRadius: '1rem', 
            padding: '3rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              fontWeight: '600', 
              marginBottom: '2rem',
              color: 'var(--primary-blue)'
            }}>
              Clinical Performance Summary
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                { metric: 'Overall Sensitivity', value: '91.2%', description: 'Early-stage detection rate' },
                { metric: 'Overall Specificity', value: '88.9%', description: 'Accuracy in healthy patients' },
                { metric: 'PPV', value: '84.3%', description: 'Positive predictive value' },
                { metric: 'NPV', value: '94.1%', description: 'Negative predictive value' },
                { metric: 'Patient Compliance', value: '96.7%', description: 'Test completion rate' },
                { metric: 'Turnaround Time', value: '7-10 days', description: 'Results delivery' }
              ].map((stat, index) => (
                <div key={index}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '700', 
                    color: 'var(--accent-teal)',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    marginBottom: '0.25rem'
                  }}>
                    {stat.metric}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-light)'
                  }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Endorsements Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Expert Endorsements</h2>
          <p className="section-subtitle">
            Leading oncologists and gastroenterologists recognize ColonAiQ®'s clinical value
          </p>
          
          <div className="grid grid-3">
            {[
              {
                name: 'Prof. Dr. Sarah Lim',
                title: 'Chief of Gastroenterology',
                institution: 'Singapore General Hospital',
                quote: 'ColonAiQ® represents a significant advancement in colorectal cancer screening. The convenience and accuracy make it an excellent option for improving screening compliance.',
                image: '👩‍⚕️'
              },
              {
                name: 'Dr. Michael Chen',
                title: 'Director of Oncology',
                institution: 'National University Hospital',
                quote: 'The clinical evidence supporting ColonAiQ® is compelling. We\'ve seen improved patient acceptance and earlier detection rates since implementing this technology.',
                image: '👨‍⚕️'
              },
              {
                name: 'Prof. Dr. Lisa Wong',
                title: 'Head of Preventive Medicine',
                institution: 'Tan Tock Seng Hospital',
                quote: 'This blood-based approach addresses the main barriers to colorectal cancer screening. It\'s a game-changer for population health initiatives.',
                image: '👩‍⚕️'
              }
            ].map((expert, index) => (
              <div key={index} className="card">
                <div style={{ 
                  fontSize: '4rem', 
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  {expert.image}
                </div>
                <blockquote style={{ 
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'var(--text-light)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  "{expert.quote}"
                </blockquote>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ 
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'var(--primary-blue)',
                    marginBottom: '0.25rem'
                  }}>
                    {expert.name}
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    marginBottom: '0.25rem'
                  }}>
                    {expert.title}
                  </p>
                  <p style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    fontWeight: '500'
                  }}>
                    {expert.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Pipeline Section */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Ongoing Research & Development</h2>
          <p className="section-subtitle">
            Continuous innovation to advance colorectal cancer screening and early detection
          </p>
          
          <div className="grid grid-2">
            {[
              {
                title: 'Next-Generation Biomarkers',
                status: 'Phase II Clinical Trial',
                timeline: 'Completion: Q3 2025',
                description: 'Development of enhanced biomarker panel for improved sensitivity in very early-stage cancers and precancerous lesions.',
                objectives: [
                  'Increase sensitivity to >95%',
                  'Detect adenomatous polyps',
                  'Reduce false positive rates',
                  'Expand screening age range'
                ]
              },
              {
                title: 'AI-Enhanced Interpretation',
                status: 'Development Phase',
                timeline: 'Launch: Q1 2026',
                description: 'Machine learning algorithms to provide personalized risk assessment and screening recommendations based on individual patient profiles.',
                objectives: [
                  'Personalized risk scoring',
                  'Optimal screening intervals',
                  'Integration with EMR systems',
                  'Real-time result interpretation'
                ]
              },
              {
                title: 'Multi-Cancer Detection',
                status: 'Preclinical Research',
                timeline: 'Clinical Trial: 2026',
                description: 'Expansion of the platform to detect multiple cancer types from a single blood draw, starting with gastrointestinal cancers.',
                objectives: [
                  'Pancreatic cancer detection',
                  'Gastric cancer screening',
                  'Liver cancer identification',
                  'Comprehensive GI panel'
                ]
              },
              {
                title: 'Point-of-Care Testing',
                status: 'Feasibility Study',
                timeline: 'Pilot: Q4 2025',
                description: 'Development of rapid testing platform for immediate results in clinical settings, reducing turnaround time to under 2 hours.',
                objectives: [
                  'Same-day results',
                  'Clinic-based testing',
                  'Simplified workflow',
                  'Cost reduction'
                ]
              }
            ].map((research, index) => (
              <div key={index} className="card">
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '600',
                    color: 'var(--primary-blue)',
                    flex: 1
                  }}>
                    {research.title}
                  </h3>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    background: 'var(--accent-teal)',
                    color: 'var(--white)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {research.status}
                  </span>
                  <span style={{
                    background: 'var(--gold)',
                    color: 'var(--white)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {research.timeline}
                  </span>
                </div>

                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {research.description}
                </p>

                <h4 style={{ 
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: 'var(--text-dark)'
                }}>
                  Key Objectives:
                </h4>
                <ul style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {research.objectives.map((objective, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      • {objective}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
        color: 'var(--white)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '1rem'
          }}>
            Backed by Science, Proven by Results
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: '0.9',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Trust in the clinical evidence and regulatory approvals that validate ColonAiQ®'s effectiveness
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => onNavigate('patients')}
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
            >
              Find a Test Center
            </button>
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
                e.currentTarget.style.color = 'var(--primary-blue)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--white)'
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClinicalEvidencePage

