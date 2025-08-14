import React, { useMemo } from 'react'

type Page =
  | 'home'
  | 'patients'
  | 'clinics-labs'
  | 'clinical-evidence'
  | 'investors'
  | 'contact'

interface PatientsPageProps {
  onNavigate: (page: Page) => void
}

/**
 * Optional: Singapore stats (fill in when verified with MOH/HPB/NCID sources)
 * Leave any value undefined to show a safe, non-numeric fallback on the page.
 *
 * Example ONLY (do not publish without verification):
 *  const sgStats = { incidenceRank: 1, lateStagePct: 40, early5ySurvivalPct: 90 }
 */
const sgStats: Partial<{
  incidenceRank: number
  lateStagePct: number
  early5ySurvivalPct: number
}> = {
  // incidenceRank: 1,
  // lateStagePct: 40,
  // early5ySurvivalPct: 90,
}

// Small brand-tinted stat pill
const Stat = ({ label, value }: { label: string; value: string }) => {
  const TEAL = '20,184,166' // close to COLONAiVE teal
  return (
    <div
      style={{
        background: `rgba(${TEAL}, .10)`,
        border: `1px solid rgba(${TEAL}, .35)`,
        boxShadow: `0 8px 20px rgba(${TEAL}, .08)`,
        borderRadius: 12,
        padding: '0.9rem 1rem',
        minWidth: 210,
        color: 'var(--text, #0f172a)',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f766e' }}>
        {value}
      </div>
      <div style={{ fontSize: '.95rem' }}>{label}</div>
    </div>
  )
}

const Tile = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div
    style={{
      background: 'var(--white)',
      border: '1px solid #e5e7eb',
      borderRadius: 14,
      padding: '1.1rem',
    }}
  >
    <h3 style={{ margin: 0, fontSize: '1.05rem' }}>{title}</h3>
    <div style={{ marginTop: '.5rem', lineHeight: 1.7, color: 'var(--text-light)' }}>{children}</div>
  </div>
)

const PatientsPage: React.FC<PatientsPageProps> = ({ onNavigate }) => {
  const heroOverlay = 'linear-gradient(135deg, rgba(13,74,120,.72) 0%, rgba(16,103,160,.66) 100%)'

  // Build “stats” with safe fallbacks if values aren’t populated yet
  const stats = useMemo(() => {
    return [
      {
        label: 'Why screening matters',
        value:
          typeof sgStats.incidenceRank === 'number'
            ? `CRC is a top ${sgStats.incidenceRank} cancer in SG`
            : 'CRC is among the most common cancers in SG',
      },
      {
        label: 'Late-stage diagnoses',
        value:
          typeof sgStats.lateStagePct === 'number'
            ? `${sgStats.lateStagePct}% still diagnosed late`
            : 'Many cases are still diagnosed late',
      },
      {
        label: 'Early detection saves lives',
        value:
          typeof sgStats.early5ySurvivalPct === 'number'
            ? `~${sgStats.early5ySurvivalPct}% 5-year survival if caught early`
            : 'Outcomes are far better when caught early',
      },
    ]
  }, [])

  return (
    <div>

      {/* HERO */}
      <section
        style={{
          backgroundImage: `${heroOverlay}, url(/images/patients/hero-blood.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--white)',
          padding: '6rem 0 3.25rem',
        }}
      >
        <style>{`
          .p-hero .headline { font-size: 2.2rem; font-weight: 800; margin: 0 0 .4rem; }
          .p-hero .sub { max-width: 900px; margin: 0 auto; line-height: 1.6; opacity: .95; }
          .p-hero .regline { font-size: .95rem; opacity: .9; margin-bottom: .6rem; }
          .p-hero .cta { display: flex; gap: .6rem; flex-wrap: wrap; justify-content: center; margin-top: 1.2rem; }
          .p-hero .btn { border-radius: 999px; padding: .7rem 1.1rem; font-weight: 600; cursor: pointer; }
          .p-hero .btn-primary { background: var(--white); color: var(--primary-blue); border: 1px solid rgba(255,255,255,.8); }
          .p-hero .btn-secondary { background: rgba(255,255,255,.1); color: var(--white); border: 1px solid rgba(255,255,255,.35); }
          .p-hero .stats { display:flex; gap:.6rem; flex-wrap:wrap; justify-content:center; margin-top: 1rem; }
          .p-hero .footnote { font-size: .8rem; opacity: .9; margin-top: .6rem; }
          @media (max-width:640px){
            .p-hero .headline{ font-size:1.85rem }
            .p-hero .btn{ width:100%; }
          }
        `}</style>

        <div className="container p-hero" style={{ textAlign: 'center' }}>
          <div className="regline">
            CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®
          </div>

          <h1 className="headline">A simpler way to get screened for colorectal cancer</h1>

          <p className="sub">
            <strong>ColonAiQ®</strong> is a blood-based screening test designed to lower barriers and help more
            people get screened on time. Finding colorectal cancer early can prioritise timely colonoscopy and
            treatment — protecting you and your family.
          </p>

          <div className="cta">
            <button className="btn btn-primary" onClick={() => onNavigate('clinics-labs')}>Find a Clinic</button>
            <button className="btn btn-primary" onClick={() => onNavigate('contact')}>Talk to a Clinician</button>
            <button className="btn btn-secondary" onClick={() => onNavigate('clinical-evidence')}>See Clinical Evidence</button>
          </div>

          <div className="stats">
            {stats.map((s, i) => (
              <Stat key={i} value={s.value} label={s.label} />
            ))}
          </div>

          <div className="footnote">
            Screening guidance varies by age, history and risk. Always speak with your healthcare professional.
          </div>
        </div>
      </section>

      {/* WHY SCREENING MATTERS (SG framing) */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Why screening matters</h2>

          <div className="grid grid-3" style={{ gap: '1rem' }}>
            <Tile title="Screening saves lives">
              Colorectal cancer often develops silently. Regular screening can detect cancer early — or find
              pre-cancerous polyps that can be removed to prevent cancer.
            </Tile>
            <Tile title="A lower-barrier option">
              A simple blood draw avoids stool collection and bowel prep, helping more people take the first step.
            </Tile>
            <Tile title="Part of a proven pathway">
              Positive blood-test results can prioritise diagnostic colonoscopy, so those who need it are seen in time.
            </Tile>
          </div>

          {/* supportive image */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <img
              src="/images/patients/ribbon.webp"
              alt="Doctor holding a blue colorectal cancer awareness ribbon"
              loading="lazy"
              style={{ width:'100%', maxWidth:560, height:'auto', borderRadius:14, boxShadow:'0 10px 30px rgba(0,0,0,.08)' }}
              onError={(e)=>{ (e.currentTarget as HTMLImageElement).style.display='none' }}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <img
              src="/images/patients/pathway.webp"
              alt="Clinician explaining colon screening with an anatomical model"
              loading="lazy"
              style={{ width:'100%', maxWidth:720, height:'auto', borderRadius:14, boxShadow:'0 10px 30px rgba(0,0,0,.08)' }}
              onError={(e)=>{ (e.currentTarget as HTMLImageElement).style.display='none' }}
            />
          </div>

          <h2 className="section-title">How ColonAiQ® works</h2>
          <div className="grid grid-4" style={{ gap: '1rem' }}>
            <Tile title="1) Doctor consult">Discuss screening with your clinician to confirm suitability based on age, history and risk.</Tile>
            <Tile title="2) Blood draw">A standard venous blood sample is taken at a participating clinic or laboratory.</Tile>
            <Tile title="3) Lab analysis">A PCR-based assay measures specific DNA methylation markers associated with colorectal cancer.</Tile>
            <Tile title="4) Guided follow-up">Your clinician reviews results and may prioritise diagnostic colonoscopy if appropriate.</Tile>
          </div>
        </div>
      </section>

      {/* ARE YOU ELIGIBLE? */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Who should consider screening?</h2>
          <div className="grid grid-2" style={{ gap: '1rem' }}>
            <Tile title="General guidance">
              Adults in the recommended screening age range (often starting from 45–50) should discuss options with their clinician.
              Screening intervals and tests vary by guideline.
            </Tile>
            <Tile title="Talk to your doctor sooner if you:">
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>Have a family history of colorectal cancer or polyps</li>
                <li>Have had polyps or inflammatory bowel disease</li>
                <li>Develop symptoms such as persistent bleeding, changes in bowel habit, unintended weight loss, or abdominal pain</li>
              </ul>
            </Tile>
          </div>

          <div style={{ marginTop: '1rem', display:'flex', gap:'.6rem', flexWrap:'wrap' }}>
            <button className="button" onClick={() => onNavigate('clinics-labs')}>Find a Clinic</button>
            <button className="button button-light" onClick={() => onNavigate('contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* ENCOURAGEMENT + LINKS */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display:'flex', justifyContent:'center', marginBottom: '0.75rem' }}>
            <img
              src="/images/patients/blood-tube.webp"
              alt="Blood tube used for CRC screening"
              loading="lazy"
              style={{ width:'100%', maxWidth:520, height:'auto', borderRadius:14, boxShadow:'0 10px 30px rgba(0,0,0,.08)' }}
              onError={(e)=>{ (e.currentTarget as HTMLImageElement).style.display='none' }}
            />
          </div>

          <h2 className="section-title">Don’t put it off</h2>
          <p style={{ maxWidth: 760, margin: '0 auto', color: 'var(--text-light)' }}>
            Screening is one of the most effective ways to prevent and detect colorectal cancer early. A quick blood test can be the first step.
            If the result suggests risk, your clinician will arrange diagnostic colonoscopy in a timely manner.
          </p>
          <div style={{ display:'flex', gap:'.6rem', justifyContent:'center', flexWrap:'wrap', marginTop:'.9rem' }}>
            <button className="button" onClick={() => onNavigate('clinics-labs')}>Find a Clinic</button>
            <button className="button button-light" onClick={() => onNavigate('clinical-evidence')}>Why this works (Evidence)</button>
            <a
              className="button button-light"
              href="https://www.colonaive.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more at Project COLONAiVE (opens in new tab)"
            >
              Learn at COLONAiVE
            </a>
          </div>

          <p style={{ marginTop: '0.75rem', fontSize: '.9rem', color: 'var(--text-light)' }}>
            Information on this page is for general education and does not replace medical advice. Always consult your healthcare professional.
          </p>
        </div>
      </section>

      {/* COLONAiVE callout */}
<section className="section" style={{ background: 'var(--bg-light)' }}>
  <div className="container" style={{ display:'grid', gap:'1rem', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', alignItems:'center' }}>
    <div>
      <h2 className="section-title" style={{ marginTop: 0 }}>Learn more about colorectal cancer</h2>
      <p style={{ color:'var(--text-light)' }}>
        Project COLONAiVE™ is a national movement focused on education, screening and timely triage to outsmart colorectal cancer.
        Visit the site to understand the bigger picture, then speak to your clinician about screening options that suit you.
      </p>
      <a
        className="button button-light"
        href="https://www.colonaive.ai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Project COLONAiVE website in a new tab"
      >
        Explore Project COLONAiVE →
      </a>
    </div>
    <img
      src="/images/home/impact-ribbon.webp"
      alt="Blue ribbon for colorectal cancer awareness"
      loading="lazy"
      style={{ width:'100%', maxWidth:420, height:'auto', borderRadius:14, boxShadow:'0 10px 30px rgba(0,0,0,.08)', justifySelf:'center' }}
      onError={(e)=>{ (e.currentTarget as HTMLImageElement).style.display='none' }}
    />
  </div>
</section>


      {/* SEO: FAQ Schema (customise as needed) */}
      <script
        type="application/ld+json"
        // Basic FAQs help Google show rich results; keep medical phrasing conservative
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is ColonAiQ® meant to replace colonoscopy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'No. ColonAiQ® is a non-invasive blood-based screening option. Positive results may lead to a diagnostic colonoscopy, which remains the gold standard for diagnosis and polyp removal.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who should consider screening?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Adults in the recommended screening age range (often starting from 45–50) should discuss screening options with a clinician. People with family history, prior polyps or certain symptoms should speak to a doctor sooner.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does ColonAiQ® help?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'As a simple blood test, ColonAiQ® can lower participation barriers. Finding risk earlier can help prioritise timely diagnostic colonoscopy and treatment, supporting national efforts to reduce colorectal cancer burden.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}

export default PatientsPage
