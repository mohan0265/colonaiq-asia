// src/pages/patients.tsx
import React, { useMemo } from "react";

type Page =
  | "home"
  | "patients"
  | "clinics-labs"
  | "clinical-evidence"
  | "investors"
  | "contact";

interface PatientsPageProps {
  onNavigate: (page: Page) => void;
}

/** Optional: Singapore stats (fill when verified with MOH/HPB sources) */
const sgStats: Partial<{
  incidenceRank: number;
  lateStagePct: number;
  early5ySurvivalPct: number;
}> = {
  // incidenceRank: 1,
  // lateStagePct: 40,
  // early5ySurvivalPct: 90,
};

/* ---------- UI primitives (consistent with Home) ---------- */
const Section: React.FC<{ children: React.ReactNode; light?: boolean }> = ({
  children,
  light,
}) => <section className={light ? "section section--light" : "section"}>{children}</section>;

const Container: React.FC<{ children: React.ReactNode; center?: boolean }> = ({
  children,
  center,
}) => (
  <div className="container" style={{ textAlign: center ? "center" : "left" }}>
    {children}
  </div>
);

const CTA: React.FC<{ label: string; variant?: "primary" | "ghost" | "light"; onClick: () => void }> = ({
  label,
  variant = "primary",
  onClick,
}) => (
  <button
    className={
      variant === "primary"
        ? "button"
        : variant === "light"
        ? "button button-light"
        : "btn btn--ghost"
    }
    onClick={onClick}
  >
    {label}
  </button>
);

/** Stat pill for hero */
const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="stat">
    <div className="stat__value">{value}</div>
    <div className="stat__label">{label}</div>
  </div>
);

/** Colored Excel-style info tiles */
const InfoTile: React.FC<{
  title: string;
  children: React.ReactNode;
  tone?: "blue" | "green" | "amber";
}> = ({ title, children, tone = "blue" }) => (
  <div className={`tile tile--${tone}`}>
    <div className="tile__header">{title}</div>
    <div className="tile__body">{children}</div>
  </div>
);

const PatientsPage: React.FC<PatientsPageProps> = ({ onNavigate }) => {
  /* Build stats with safe fallbacks */
  const stats = useMemo(
    () => [
      {
        label: "Why screening matters",
        value:
          typeof sgStats.incidenceRank === "number"
            ? `CRC is a top ${sgStats.incidenceRank} cancer in SG`
            : "CRC is among the most common cancers in SG",
      },
      {
        label: "Late-stage diagnoses",
        value:
          typeof sgStats.lateStagePct === "number"
            ? `${sgStats.lateStagePct}% still diagnosed late`
            : "Many cases are still diagnosed late",
      },
      {
        label: "Early detection saves lives",
        value:
          typeof sgStats.early5ySurvivalPct === "number"
            ? `~${sgStats.early5ySurvivalPct}% 5-year survival if caught early`
            : "Outcomes are far better when caught early",
      },
    ],
    []
  );

  return (
    <>
      {/* page styles */}
      <style>{`
        :root{
          --brand:#0d5c97;
          --brand-2:#1173bb;
          --ink:#0f172a;
          --muted:#64748b;
          --paper:#ffffff;
          --bg:#f6f9fc;
          --ring:rgba(17,115,187,.15);
        }
        .section{ padding:56px 0 }
        .section--light{ background:var(--bg) }
        .container{ width:min(1120px,92vw); margin:0 auto }

        .hero{
          color:#fff; padding:92px 0 36px;
          background:
            linear-gradient(135deg, rgba(13,74,120,.78) 0%, rgba(16,103,160,.72) 100%),
            url(/images/patients/hero-blood.webp) center/cover no-repeat;
        }
        .hero__title{
          font-size:clamp(26px,3vw,38px); font-weight:800; line-height:1.2;
          margin:8px 0 10px; text-shadow:0 8px 22px rgba(0,0,0,.25);
        }
        .hero__sub{ max-width:900px; margin:0 auto 12px; line-height:1.65; text-shadow:0 3px 14px rgba(0,0,0,.25) }
        .hero__kicker{ font-size:14px; opacity:.95; text-shadow:0 1px 6px rgba(0,0,0,.25) }
        .hero__cta{ display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-top:12px }

        .btn{ border-radius:999px; padding:10px 16px; font-weight:700; cursor:pointer }
        .btn--ghost{ color:#fff; background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.35); backdrop-filter:saturate(140%) blur(2px) }

        .stat{
          min-width:210px; text-align:center; color:var(--ink);
          background:#fff; border:1px solid rgba(0,0,0,.06); border-radius:14px;
          padding:12px; box-shadow:0 12px 24px rgba(0,0,0,.08);
        }
        .stat__value{ font-size:20px; font-weight:800; color:#0b4a78 }
        .stat__label{ font-size:14px }

        .section-title{ font-size:clamp(22px,2.3vw,30px); font-weight:800; margin:0 0 8px; color:var(--ink) }
        .subtle{ color:var(--muted) }

        .grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px }
        .grid-4{ display:grid; grid-template-columns:repeat(4,1fr); gap:16px }
        .grid-2{ display:grid; grid-template-columns:repeat(2,1fr); gap:16px }
        @media (max-width:900px){
          .grid-4{ grid-template-columns:1fr 1fr }
          .grid-3{ grid-template-columns:1fr }
        }
        @media (max-width:640px){
          .grid-4{ grid-template-columns:1fr }
        }

        .tile{
          border-radius:16px; padding:14px; border:1px solid rgba(15,23,42,.06);
          background:#fff; box-shadow:0 10px 26px rgba(0,0,0,.06);
        }
        .tile__header{ font-weight:800; margin-bottom:8px; border-radius:10px; padding:8px 10px; color:#0b2a45 }
        .tile__body{ color:var(--ink); line-height:1.65 }
        .tile--blue .tile__header{
          background: linear-gradient(180deg, #dff0ff, #c8e4ff);
          border: 1px solid #b6dbff;
        }
        .tile--green .tile__header{
          background: linear-gradient(180deg, #def7ec, #c9f0e2);
          border: 1px solid #b4e8d7;
        }
        .tile--amber .tile__header{
          background: linear-gradient(180deg, #fff3d6, #ffe7b1);
          border: 1px solid #ffd98a;
        }

        .visual{ width:100%; max-width:760px; height:auto; border-radius:16px; box-shadow:0 14px 32px rgba(0,0,0,.10) }

        .button{
          padding:10px 16px; border-radius:10px; font-weight:700; color:#fff; background:var(--brand);
          border:1px solid var(--brand-2); box-shadow:0 10px 22px var(--ring); cursor:pointer
        }
        .button-light{ background:#fff; color:var(--brand); border:1px solid #d0e7fa }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <Container center>
          <div className="hero__kicker">
            CE Marked, China NMPA registered and Singapore HSA-cleared ColonAiQ®
          </div>

          <h1 className="hero__title">A simpler way to get screened for colorectal cancer</h1>

          <p className="hero__sub">
            <strong>ColonAiQ®</strong> is a blood-based screening test designed to lower barriers and help more
            people get screened on time. Finding colorectal cancer early can prioritise timely colonoscopy and
            treatment — protecting you and your family.
          </p>

          <div className="hero__cta">
            <CTA label="Find a Clinic" onClick={() => onNavigate("clinics-labs")} />
            <CTA label="Talk to a Clinician" onClick={() => onNavigate("contact")} />
            <CTA
              label="See Clinical Evidence"
              variant="ghost"
              onClick={() => onNavigate("clinical-evidence")}
            />
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginTop: 12 }}>
            {stats.map((s, i) => (
              <Stat key={i} value={s.value} label={s.label} />
            ))}
          </div>

          <div className="subtle" style={{ marginTop: 10 }}>
            Screening guidance varies by age, history and risk. Always speak with your healthcare professional.
          </div>
        </Container>
      </div>

      {/* WHY SCREENING MATTERS */}
      <Section light>
        <Container>
          <h2 className="section-title">Why screening matters</h2>

          <div className="grid-3">
            <InfoTile title="Screening saves lives" tone="blue">
              Colorectal cancer often develops silently. Regular screening can detect cancer early —
              or find pre-cancerous polyps that can be removed to prevent cancer.
            </InfoTile>
            <InfoTile title="A lower-barrier option" tone="green">
              A simple blood draw avoids stool collection and bowel prep, helping more people take the first step.
            </InfoTile>
            <InfoTile title="Part of a proven pathway" tone="amber">
              Positive blood-test results can prioritise diagnostic colonoscopy, so those who need it are seen in time.
            </InfoTile>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
            <img
              src="/images/patients/ribbon.webp"
              alt="Doctor holding a blue colorectal cancer awareness ribbon"
              loading="lazy"
              className="visual"
              style={{ maxWidth: 560 }}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <Container>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <img
              src="/images/patients/pathway.webp"
              alt="Clinician explaining colon screening with an anatomical model"
              loading="lazy"
              className="visual"
              style={{ maxWidth: 720 }}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          </div>

          <h2 className="section-title">How ColonAiQ® works</h2>

          <div className="grid-4">
            <InfoTile title="1) Doctor consult" tone="blue">
              Discuss screening with your clinician to confirm suitability based on age, history and risk.
            </InfoTile>
            <InfoTile title="2) Blood draw" tone="green">
              A standard venous blood sample is taken at a participating clinic or laboratory.
            </InfoTile>
            <InfoTile title="3) Lab analysis" tone="blue">
              A PCR-based assay measures specific DNA methylation markers associated with colorectal cancer.
            </InfoTile>
            <InfoTile title="4) Guided follow-up" tone="amber">
              Your clinician reviews results and may prioritise diagnostic colonoscopy if appropriate.
            </InfoTile>
          </div>
        </Container>
      </Section>

      {/* WHO SHOULD SCREEN */}
      <Section light>
        <Container>
          <h2 className="section-title">Who should consider screening?</h2>

          <div className="grid-2">
            <InfoTile title="General guidance" tone="green">
              Adults in the recommended screening age range (often starting from 45–50) should discuss options with
              their clinician. Screening intervals and tests vary by guideline.
            </InfoTile>

            <InfoTile title="Talk to your doctor sooner if you:" tone="blue">
              <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                <li>Have a family history of colorectal cancer or polyps</li>
                <li>Have had polyps or inflammatory bowel disease</li>
                <li>
                  Develop symptoms such as persistent bleeding, changes in bowel habit, unintended weight loss, or
                  abdominal pain
                </li>
              </ul>
            </InfoTile>
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="button" onClick={() => onNavigate("clinics-labs")}>
              Find a Clinic
            </button>
            <button className="button button-light" onClick={() => onNavigate("contact")}>
              Contact Us
            </button>
          </div>
        </Container>
      </Section>

      {/* ENCOURAGEMENT */}
      <Section>
        <Container center>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <img
              src="/images/patients/blood-tube.webp"
              alt="Blood tube used for CRC screening"
              loading="lazy"
              className="visual"
              style={{ maxWidth: 520 }}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          </div>

          <h2 className="section-title">Don’t put it off</h2>
          <p className="subtle" style={{ maxWidth: 760, margin: "0 auto" }}>
            Screening is one of the most effective ways to prevent and detect colorectal cancer early. A quick blood
            test can be the first step. If the result suggests risk, your clinician will arrange diagnostic colonoscopy
            in a timely manner.
          </p>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 14 }}>
            <button className="button" onClick={() => onNavigate("clinics-labs")}>
              Find a Clinic
            </button>
            <button className="button button-light" onClick={() => onNavigate("clinical-evidence")}>
              Why this works (Evidence)
            </button>
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

          <p className="subtle" style={{ marginTop: 12, fontSize: ".9rem" }}>
            Information on this page is for general education and does not replace medical advice. Always consult your
            healthcare professional.
          </p>
        </Container>
      </Section>

      {/* COLONAiVE CALLOUT */}
      <Section light>
        <Container>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              alignItems: "center",
            }}
          >
            <div>
              <h2 className="section-title" style={{ marginTop: 0 }}>
                Learn more about colorectal cancer
              </h2>
              <p className="subtle">
                Project COLONAiVE™ is a national movement focused on education, screening and timely triage to
                outsmart colorectal cancer. Visit the site to understand the bigger picture, then speak to your clinician
                about screening options that suit you.
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
              className="visual"
              style={{ maxWidth: 420, justifySelf: "center" }}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          </div>
        </Container>
      </Section>

      {/* SEO: FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is ColonAiQ® meant to replace colonoscopy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No. ColonAiQ® is a non-invasive blood-based screening option. Positive results may lead to a diagnostic colonoscopy, which remains the gold standard for diagnosis and polyp removal.",
                },
              },
              {
                "@type": "Question",
                name: "Who should consider screening?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Adults in the recommended screening age range (often starting from 45–50) should discuss screening options with a clinician. People with family history, prior polyps or certain symptoms should speak to a doctor sooner.",
                },
              },
              {
                "@type": "Question",
                name: "How does ColonAiQ® help?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "As a simple blood test, ColonAiQ® can lower participation barriers. Finding risk earlier can help prioritise timely diagnostic colonoscopy and treatment, supporting national efforts to reduce colorectal cancer burden.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default PatientsPage;
