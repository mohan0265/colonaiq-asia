// src/pages/clinical-evidence.tsx
import React from 'react'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

interface ClinicalEvidencePageProps {
  onNavigate: (page: Page) => void
}

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      display: 'inline-block',
      padding: '0.35rem 0.65rem',
      borderRadius: '999px',
      background: 'rgba(20,184,166,0.1)',
      color: '#0f766e',
      fontWeight: 600,
      marginRight: '0.5rem',
      marginBottom: '0.5rem',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
)

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      background: 'var(--white)',
      border: '1px solid #e5e7eb',
      borderRadius: '1rem',
      padding: '1.25rem',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
      ...style,
    }}
  >
    {children}
  </div>
)

const TableWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
    <table
      style={{
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        border: '1px solid #e5e7eb',
        borderRadius: '0.75rem',
      }}
    >
      {children}
    </table>
  </div>
)

const Th: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, ...rest }) => (
  <th
    {...rest}
    style={{
      textAlign: 'left',
      padding: '0.75rem 1rem',
      background: '#f8fafc',
      fontWeight: 700,
      borderBottom: '1px solid #e5e7eb',
    }}
  >
    {children}
  </th>
)

const Td: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, ...rest }) => (
  <td {...rest} style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #f1f5f9', verticalAlign: 'top' }}>
    {children}
  </td>
)

const AnchorList: React.FC = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
    {[
      ['#exec', 'Executive Summary'],
      ['#tech', 'Technology Overview'],
      ['#studies', 'Pivotal Studies'],
      ['#apps', 'Clinical Applications'],
      ['#framework', 'Decision Framework'],
      ['#compare', 'Comparative Analysis'],
      ['#economics', 'Health Economics'],
      ['#future', 'Future Development'],
      ['#conclusion', 'Conclusions'],
      ['#refs', 'References'],
    ].map(([href, label]) => (
      <a
        key={href}
        href={href}
        style={{ textDecoration: 'none', color: 'var(--text-dark)' }}
        onClick={(e) => {
          e.preventDefault()
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '0.35rem 0.65rem',
            borderRadius: '999px',
            background: 'rgba(107,114,128,0.12)',
            color: 'var(--text-dark)',
            fontWeight: 600,
          }}
        >
          {label}
        </span>
      </a>
    ))}
  </div>
)

const DownloadButtons: React.FC = () => (
  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
    <a
      className="button button-light"
      href="/pdfs/ColonAiQ_Clinical_Evidence.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{ borderRadius: '999px' }}
      aria-label="Download ColonAiQ Clinical Evidence PDF"
    >
      ⬇ Download Evidence Pack (PDF)
    </a>
  </div>
)

const ClinicalEvidencePage: React.FC<ClinicalEvidencePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
<section className="hero-evidence" style={{
  background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
  color: 'var(--white)',
  padding: '6rem 0 4rem'
}}>
  <style>{`
    .hero-evidence .regline {
      font-size: 0.95rem; 
      opacity: 0.9;
      margin-bottom: 0.6rem;
    }
    .hero-evidence .title {
      font-size: 2.5rem; 
      font-weight: 800; 
      margin: 0.25rem 0 0.5rem;
    }
    .hero-evidence .sub {
      max-width: 860px; 
      margin: 0 auto; 
      opacity: 0.95;
      line-height: 1.6;
    }
    .hero-evidence .cta {
      display: flex; 
      gap: 0.75rem; 
      justify-content: center; 
      flex-wrap: wrap; 
      margin-top: 1.4rem;
    }
    .hero-evidence .btn {
      display: inline-flex; 
      align-items: center; 
      gap: .5rem;
      padding: 0.75rem 1.15rem; 
      border-radius: 999px; 
      border: 1px solid transparent;
      font-weight: 600; 
      text-decoration: none; 
      cursor: pointer;
      transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
    }
    .hero-evidence .btn:focus { outline: 2px solid rgba(255,255,255,.9); outline-offset: 2px; }
    .hero-evidence .btn:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(0,0,0,.15); }
    .hero-evidence .btn-primary {
      background: var(--white); 
      color: var(--primary-blue);
      border-color: rgba(255,255,255,.8);
    }
    .hero-evidence .btn-secondary {
      background: transparent; 
      color: var(--white); 
      border-color: rgba(255,255,255,.75);
    }
    @media (max-width: 640px) {
      .hero-evidence { padding: 4.5rem 0 3rem; }
      .hero-evidence .title { font-size: 2rem; }
      .hero-evidence .btn { width: 100%; justify-content: center; }
    }
  `}</style>

  <div className="container" style={{ textAlign: 'center' }}>
    <div className="regline">
      CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®
    </div>
    <h1 className="title">Clinical Evidence</h1>
    <p className="sub">
      Blood-based, multi-gene methylation assay for colorectal cancer screening, ctDNA-based MRD detection
      and recurrence risk prediction. Data summarised below from peer-reviewed studies and real-world evidence.
    </p>

    <div className="cta">
      <a
        className="btn btn-primary"
        href="/pdfs/ColonAiQ_Clinical_Evidence.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download ColonAiQ Clinical Evidence PDF"
      >
        ⬇ Download Evidence Pack (PDF)
      </a>

      <button
        className="btn btn-secondary"
        onClick={() => onNavigate('home')}
        aria-label="Back to Home"
      >
        ← Back to Home
      </button>
    </div>
  </div>
</section>


        {/* Executive Summary */}
      <section id="exec" className="section">
        <div className="container">
          <h2 className="section-title">Executive Summary</h2>
          <p className="section-subtitle">
            ColonAiQ® utilises circulating tumour DNA (ctDNA) methylation to enable early CRC detection, MRD monitoring
            and recurrence prediction.
          </p>

          <div className="grid grid-4" style={{ gap: '1rem' }}>
            <Card>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Sensitivity (All CRC)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>86.1%</div>
            </Card>
            <Card>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Specificity (Controls)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>91.9%</div>
            </Card>
            <Card>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Stage I Sensitivity</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>78.3%</div>
            </Card>
            <Card>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>MRD (POM1) Sens./Spec.</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>78.0% / 90.2%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>ctDNA+ → 17.5× relapse risk</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section id="tech" className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">1. Technology Overview</h2>
          <Card>
            <h3 style={{ marginTop: 0 }}>Multi-Gene Methylation Platform</h3>
            <p>
              Simplified multiplex qPCR assay targeting six methylation markers. Multi-locus, co-methylation patterns
              enhance detection across tumour heterogeneity with a practical, clinic-deployable workflow.
            </p>
            <div style={{ marginTop: '0.5rem' }}>
              <strong>Target genes:</strong>
              <div style={{ marginTop: '0.5rem' }}>
                <Pill>SEPTIN9 (×2 loci)</Pill>
                <Pill>BCAT1</Pill>
                <Pill>IKZF1</Pill>
                <Pill>VAV3</Pill>
                <Pill>BCAN</Pill>
              </div>
            </div>
            <ul style={{ marginTop: '0.75rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
              <li>Multi-locus and co-methylation capture</li>
              <li>Single-reaction PCR workflow, rapid turnaround</li>
              <li>Accessible and cost-efficient vs NGS approaches</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Pivotal Studies */}
      <section id="studies" className="section">
        <div className="container">
          <h2 className="section-title">2. Pivotal Clinical Studies</h2>

          <Card style={{ marginBottom: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>2.1 Early Detection — Gastroenterology (2021)</h3>
            <p style={{ color: 'var(--text-light)' }}>
              Multicentre case-control study; 507 plasma samples; endpoints: CRC and advanced adenoma detection.
            </p>

            <TableWrap>
              <thead>
                <tr>
                  <Th>Category</Th>
                  <Th>Sensitivity</Th>
                  <Th>Specificity</Th>
                  <Th>Sample Size</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>All CRC</Td>
                  <Td>86.1%</Td>
                  <Td>91.9%</Td>
                  <Td>173 CRC, 136 controls</Td>
                </tr>
                <tr>
                  <Td>Stage I</Td>
                  <Td>78.3%</Td>
                  <Td>–</Td>
                  <Td>23 patients</Td>
                </tr>
                <tr>
                  <Td>Stage II</Td>
                  <Td>82.0%</Td>
                  <Td>–</Td>
                  <Td>50 patients</Td>
                </tr>
                <tr>
                  <Td>Stage III</Td>
                  <Td>86.0%</Td>
                  <Td>–</Td>
                  <Td>72 patients</Td>
                </tr>
                <tr>
                  <Td>Stage IV</Td>
                  <Td>100%</Td>
                  <Td>–</Td>
                  <Td>16 patients</Td>
                </tr>
                <tr>
                  <Td>Advanced Adenoma</Td>
                  <Td>42.1%</Td>
                  <Td>–</Td>
                  <Td>107 patients</Td>
                </tr>
              </tbody>
            </TableWrap>

            <ul style={{ marginTop: '0.75rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
              <li>vs FIT: 88.3 percent vs 59.7 percent overall sensitivity</li>
              <li>vs CEA: 80–92 percent vs 17–47 percent for early-stage CRC</li>
              <li>vs SEPT9 alone: superior across stages</li>
            </ul>
          </Card>

          <Card style={{ marginBottom: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>2.2 MRD — JAMA Oncology (2023)</h3>
            <p style={{ color: 'var(--text-light)' }}>
              Prospective longitudinal cohort; 299 stage I–III CRC; median follow up 21 months.
            </p>
            <ul style={{ lineHeight: 1.7 }}>
              <li>
                <strong>Post-op Month 1:</strong> ctDNA positive → 17.5 times relapse risk (HR 17.5; 95% CI 8.9–34.4);
                sensitivity 78.0 percent, specificity 90.2 percent, NPV 94.4 percent.
              </li>
              <li>
                <strong>Longitudinal:</strong> median lead time 3.3 months ahead of imaging; sustained ctDNA positive →
                68.8 times recurrence risk (HR 68.8).
              </li>
              <li>
                <strong>Stage III:</strong> ctDNA status superior to traditional risk factors; informs adjuvant duration.
              </li>
            </ul>
          </Card>

          <Card style={{ marginBottom: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>2.3 Performance Evaluation — Alternative Therapies</h3>
            <ul style={{ lineHeight: 1.7 }}>
              <li>Overall accuracy 93.18 percent (82/88); CRC sensitivity 89.36 percent; specificity 97.56 percent.</li>
              <li>Stage I 100 percent, Stage II 81.25 percent, Stage III 87.5 percent, Stage IV 100 percent.</li>
              <li>
                Precision 100 percent (intra and inter day); limit of detection 0.5 percent methylated DNA; minimum input
                10 ng; no common-substance interference.
              </li>
            </ul>
          </Card>

          <Card>
            <h3 style={{ marginTop: 0 }}>2.4 PreC Real-World Study — Annals of Oncology (2023)</h3>
            <ul style={{ lineHeight: 1.7 }}>
              <li>105,285 community participants aged 40–80; Jan 2021 to Dec 2022.</li>
              <li>ColonAiQ positive 6.42 percent; colonoscopy compliance 48.56 percent vs 17.25 percent national average.</li>
              <li>
                Positive predictive value: CRC 1.92 percent; advanced adenoma 13.44 percent; any adenoma 36.41 percent.
                Early colorectal neoplasm detection rate 90.28 percent.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Clinical Applications */}
      <section id="apps" className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">3–4. Clinical Applications and Utility</h2>
          <div className="grid grid-2" style={{ gap: '1rem' }}>
            <Card>
              <h3 style={{ marginTop: 0 }}>Primary Screening</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Asymptomatic adults, typically 40–80</li>
                <li>Non-invasive blood test, higher compliance, effective risk stratification</li>
              </ul>
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>MRD Detection</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Post-surgical stage I–III, optimal timing at postoperative month 1</li>
                <li>Guides adjuvant decisions and flags high-risk patients</li>
              </ul>
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>Recurrence Monitoring</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Serial follow up, median 3.3 month lead over imaging</li>
                <li>Helps plan imaging cadence and early intervention</li>
              </ul>
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>Treatment Response</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Assess adjuvant effectiveness, consider escalation or de-escalation</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section id="framework" className="section">
        <div className="container">
          <h2 className="section-title">5. Proposed Clinical Decision Framework</h2>
          <div className="grid grid-2" style={{ gap: '1rem' }}>
            <Card>
              <h3 style={{ marginTop: 0 }}>ctDNA Guided Management at POM1</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>
                  <strong>ctDNA Positive:</strong> recommend adjuvant chemotherapy; extend duration if persistently
                  positive; increase surveillance; earlier imaging.
                </li>
                <li>
                  <strong>ctDNA Negative:</strong> consider de-escalation in research setting; standard surveillance;
                  continue serial monitoring.
                </li>
              </ul>
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>Integration with Standard Care</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>
                  <strong>With CEA:</strong> complementary, improved accuracy, addresses CEA negative cases.
                </li>
                <li>
                  <strong>Colonoscopy:</strong> positive ColonAiQ → prioritise colonoscopy; improved compliance observed.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparative Analysis */}
      <section id="compare" className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">6. Comparative Performance Analysis</h2>

          <Card>
            <h3 style={{ marginTop: 0 }}>6.1 vs Current Screening Methods</h3>
            <TableWrap>
              <thead>
                <tr>
                  <Th>Method</Th>
                  <Th>Sensitivity (CRC)</Th>
                  <Th>Specificity</Th>
                  <Th>Notes</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>ColonAiQ</Td>
                  <Td>86.1 percent</Td>
                  <Td>91.9 percent</Td>
                  <Td>All stages, blood based</Td>
                </tr>
                <tr>
                  <Td>FIT</Td>
                  <Td>59.7 percent</Td>
                  <Td>–</Td>
                  <Td>Stool based, affected by bleeding</Td>
                </tr>
                <tr>
                  <Td>CEA</Td>
                  <Td>17–47 percent</Td>
                  <Td>–</Td>
                  <Td>Limited early stage sensitivity</Td>
                </tr>
                <tr>
                  <Td>SEPT9 (single marker)</Td>
                  <Td>Lower</Td>
                  <Td>–</Td>
                  <Td>Single marker limitation</Td>
                </tr>
                <tr>
                  <Td>Colonoscopy</Td>
                  <Td>~95 percent</Td>
                  <Td>~95 percent</Td>
                  <Td>Gold standard, invasive</Td>
                </tr>
              </tbody>
            </TableWrap>
          </Card>

          <Card style={{ marginTop: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>6.2 vs Other ctDNA Methods</h3>
            <ul style={{ lineHeight: 1.7 }}>
              <li>PCR workflow takes hours vs multi day NGS, lower complexity and cost</li>
              <li>Standardised methylation targets, broad applicability</li>
              <li>Reduced specialised infrastructure requirements</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Health Economics */}
      <section id="economics" className="section">
        <div className="container">
          <h2 className="section-title">7. Health Economic Considerations</h2>
        <div className="grid grid-2" style={{ gap: '1rem' }}>
            <Card>
              <h3 style={{ marginTop: 0 }}>Screening and MRD Benefits</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Earlier detection improves outcomes and reduces burden</li>
                <li>Optimises colonoscopy resources through risk stratification</li>
                <li>MRD can help avoid unnecessary chemotherapy in low risk patients</li>
              </ul>
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>System Impact</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Streamlined pathways and surveillance cadence</li>
                <li>Supports national screening goals and population health</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section id="future" className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">8. Future Development and Research</h2>
          <div className="grid grid-3" style={{ gap: '1rem' }}>
            <Card>
              <h3 style={{ marginTop: 0 }}>Ongoing Trials</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Interventional trials for ctDNA guided management</li>
                <li>Prospective validation at scale, health economic outcomes</li>
              </ul>
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>Platform Expansion</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Additional cancers via methylation targets</li>
                <li>AI augmented prediction and potential point of care</li>
              </ul>
            </Card>
            <Card>
              <h3 style={{ marginTop: 0 }}>Personalised Medicine</h3>
              <ul style={{ lineHeight: 1.7 }}>
                <li>Companion diagnostics and treatment selection</li>
                <li>Risk adapted surveillance algorithms</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section id="conclusion" className="section">
        <div className="container">
          <h2 className="section-title">9. Conclusions</h2>
          <Card>
            <ul style={{ lineHeight: 1.7 }}>
              <li>Robust early detection vs older non invasive methods</li>
              <li>Clinically actionable MRD with strong prognostic value</li>
              <li>Practical PCR workflow for routine clinical use</li>
              <li>Supported by international regulatory milestones</li>
              <li>Real world feasibility in large community cohorts</li>
            </ul>
            <p style={{ color: 'var(--text-light)', marginTop: '0.75rem' }}>
              Note: Regulatory details are presented as supplied in the evidence dossier. Always refer to the latest
              official listings when communicating externally.
            </p>
          </Card>
        </div>
      </section>

      {/* References + Download */}
      <section id="refs" className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">References and Supporting Documents</h2>
          <Card>
            <ol style={{ lineHeight: 1.7, paddingLeft: '1.25rem', margin: 0 }}>
              <li>
                Cai G, et al. <em>Gastroenterology</em>. 2021;161(6):2053-2056.
              </li>
              <li>
                Mo S, et al. <em>JAMA Oncology</em>. 2023;9(6):770-778.
              </li>
              <li>
                Liu W, et al. <em>Alternative Therapies</em>. E-pub ahead of print.
              </li>
              <li>
                Ding Y, et al. <em>Ann Oncol</em>. 2023;34(S2):S426.
              </li>
              <li>NMPA Registration No.: 国械注准20243400902 (May 14, 2024 to May 13, 2029).</li>
              <li>HSA Device Registration No.: DE0510590 (listing per dossier).</li>
              <li>EU CE: NL-CA002-2021-63348 (Dec 6, 2021).</li>
            </ol>
          </Card>

          <div style={{ marginTop: '1.25rem' }}>
            <DownloadButtons />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClinicalEvidencePage
