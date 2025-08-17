// src/pages/index.tsx
import React from "react";

type Page =
  | "home"
  | "patients"
  | "clinics-labs"
  | "clinical-evidence"
  | "investors"
  | "contact";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

/** ---------- tiny helpers ---------- */
const Section: React.FC<{ children: React.ReactNode; light?: boolean }> = ({
  children,
  light,
}) => (
  <section className={light ? "section section--light" : "section"}>{children}</section>
);

const Container: React.FC<{ children: React.ReactNode; center?: boolean }> = ({
  children,
  center,
}) => (
  <div className="container" style={{ textAlign: center ? "center" : "left" }}>
    {children}
  </div>
);

const CTA: React.FC<{
  label: string;
  variant?: "primary" | "ghost";
  onClick: () => void;
}> = ({ label, variant = "primary", onClick }) => (
  <button
    className={variant === "primary" ? "btn btn--primary" : "btn btn--ghost"}
    onClick={onClick}
  >
    {label}
  </button>
);

/** Stat pill used in hero */
const Stat: React.FC<{ value: string; label: string; note?: string }> = ({
  value,
  label,
  note,
}) => (
  <div className="stat">
    <div className="stat__value">{value}</div>
    <div className="stat__label">{label}</div>
    {note && <div className="stat__note">{note}</div>}
  </div>
);

/** Colored info tile (Excel vibe but refined) */
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

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* page-scoped styles */}
      <style>{`
        :root{
          --brand:#0d5c97; /* primary navy-blue */
          --brand-2:#1173bb;
          --ink:#0f172a;
          --muted:#64748b;
          --paper:#ffffff;
          --bg:#f6f9fc;
          --ring:rgba(17,115,187,.15);
        }

        .section{ padding: 56px 0; }
        .section--light{ background: var(--bg); }
        .container{ width: min(1120px, 92vw); margin: 0 auto; }

        /* HERO */
        .hero{
          color: #fff;
          padding: 92px 0 36px;
          background:
            linear-gradient(130deg, rgba(12,59,102,.85), rgba(17,115,187,.78)),
            url(/images/home/hero-blood.webp) center/cover no-repeat;
        }
        .hero__title{
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 800;
          line-height: 1.2;
          margin: 8px 0 10px;
          text-shadow: 0 8px 22px rgba(0,0,0,.25);
        }
        .hero__sub{
          max-width: 900px;
          margin: 0 auto 12px;
          line-height: 1.65;
          opacity: .98;
          text-shadow: 0 3px 14px rgba(0,0,0,.25);
        }
        .hero__ribbon{
          display:inline-flex; gap:8px; align-items:center;
          margin-top:10px; padding:6px 12px; border-radius:999px;
          background: rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.28);
          font-size: 12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
          backdrop-filter: saturate(140%) blur(2px);
        }
        .hero__ribbon span{ opacity:.95 }
        .hero__ribbon .sep{ opacity:.7 }

        .btn{
          border-radius:999px; padding:10px 16px; font-weight:700; cursor:pointer;
        }
        .btn--primary{
          background:#fff; color:var(--brand);
          border:1px solid rgba(255,255,255,.8);
          box-shadow: 0 10px 24px rgba(0,0,0,.08);
        }
        .btn--ghost{
          color:#fff; background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.35);
          backdrop-filter: saturate(140%) blur(2px);
        }
        .hero__cta{ display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-top:12px }

        .stats{ display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-top:14px }
        .stat{
          min-width:180px; text-align:center; color:var(--ink);
          background:#fff; border:1px solid rgba(0,0,0,.06); border-radius:14px;
          padding:12px; box-shadow:0 12px 24px rgba(0,0,0,.08);
        }
        .stat__value{ font-size:22px; font-weight:800; color:#0b4a78 }
        .stat__label{ font-size:14px }
        .stat__note{ font-size:12px; color:var(--muted) }

        .kicker{ color:#eaf6ff; font-size:14px; opacity:.95 }

        .section-title{
          font-size: clamp(22px, 2.3vw, 30px);
          font-weight: 800;
          margin: 0 0 8px;
          color: var(--ink);
        }
        .subtle{ color:var(--muted) }

        /* grid helpers */
        .grid-3{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px }
        .grid-4{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 16px }
        .grid-2{ display:grid; grid-template-columns: repeat(2, 1fr); gap: 16px }
        @media (max-width: 900px){
          .grid-4{ grid-template-columns: 1fr 1fr }
          .grid-3{ grid-template-columns: 1fr }
        }
        @media (max-width: 640px){
          .grid-4{ grid-template-columns: 1fr }
        }

        /* refined “Excel-like” tiles */
        .tile{
          border-radius: 16px;
          padding: 14px 14px 12px;
          border: 1px solid rgba(15,23,42,.06);
          background: #fff;
          box-shadow: 0 10px 26px rgba(0,0,0,.06);
          overflow: hidden;
          position: relative;
        }
        .tile__header{
          font-weight: 800;
          margin-bottom: 8px;
          border-radius: 10px;
          padding: 8px 10px;
          color: #0b2a45;
        }
        .tile__body{ color: var(--ink); line-height: 1.65 }
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

        /* images */
        .visual{
          width:100%; max-width: 760px; height:auto; border-radius:16px;
          box-shadow: 0 14px 32px rgba(0,0,0,.10);
        }

        /* secondary buttons */
        .button{
          padding:10px 16px; border-radius:10px; font-weight:700; color:#fff; background: var(--brand);
          border:1px solid var(--brand-2); box-shadow:0 10px 22px var(--ring); cursor:pointer;
        }
        .button-light{
          background:#ffffff; color: var(--brand); border:1px solid #d0e7fa;
        }
      `}</style>

      {/* HERO */}
      <div className="hero">
        <Container center>
          <div className="kicker">
            CE Marked, China NMPA registered and Singapore HSA‑cleared ColonAiQ®
          </div>

          <h1 className="hero__title">
            ColonAiQ: Patient‑preferred blood test for CRC screening, with higher early‑stage sensitivity.
          </h1>

          <p className="hero__sub">
            ColonAiQ® is a clinically validated, non‑invasive screening option that helps
            more people participate and guides timely colonoscopy and earlier detection,
            helping save more lives.
          </p>

          <div className="hero__cta">
            <CTA label="For Patients" onClick={() => onNavigate("patients")} />
            <CTA label="For Clinics & Labs" onClick={() => onNavigate("clinics-labs")} />
            <CTA
              label="See Clinical Evidence"
              variant="ghost"
              onClick={() => onNavigate("clinical-evidence")}
            />
          </div>

          <div className="hero__ribbon" role="text">
            <span>Screened in Time</span>
            <span className="sep">|</span>
            <span>Scoped in Time</span>
            <span className="sep">|</span>
            <span>Saved in Time</span>
          </div>

          <div className="stats">
            <Stat value="86.1%" label="Sensitivity (all CRC)" />
            <Stat value="78.3%" label="Stage I sensitivity" />
            <Stat value="91.9%" label="Specificity (controls)" />
          </div>
        </Container>
      </div>

      {/* NATIONAL IMPACT */}
      <Section light>
        <Container>
          <h2 className="section-title">Why this matters for the nation</h2>
          <div className="grid-3">
            <InfoTile title="Reduce barriers" tone="blue">
              Simple blood draw (no bowel prep) lowers psychological and logistical barriers compared with
              stool‑based tests.
            </InfoTile>
            <InfoTile title="Improve participation" tone="green">
              Patient‑friendly option can increase screening uptake, the first step to catching disease earlier.
            </InfoTile>
            <InfoTile title="Enable earlier diagnosis & prevention" tone="amber">
              Higher early‑stage sensitivity in studies supports timely colonoscopy, polyp removal and prevention.
            </InfoTile>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
            <img
              src="/images/home/impact-ribbon.webp"
              alt="Doctor holding a blue colorectal cancer awareness ribbon"
              loading="lazy"
              className="visual"
              style={{ maxWidth: 560 }}
            />
          </div>
          <p className="subtle" style={{ marginTop: 10 }}>
            Better participation supports national efforts to reduce CRC burden.
          </p>
        </Container>
      </Section>

      {/* HOW IT COMPLEMENTS */}
      <Section>
        <Container>
          <h2 className="section-title">How ColonAiQ® complements current options</h2>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <img
              src="/images/home/compare-blood-tube.webp"
              alt="Blood tube used for colorectal cancer screening"
              loading="lazy"
              className="visual"
              style={{ maxWidth: 720 }}
            />
          </div>

          <div className="grid-3">
            <InfoTile title="ColonAiQ® (blood)" tone="blue">
              Non‑invasive blood test; clinically validated performance including early‑stage sensitivity.
              Scalable PCR workflow.
            </InfoTile>

            <InfoTile title="FIT (stool)" tone="green">
              Non‑invasive, widely used; participation can be limited by stool collection and lower early‑stage
              sensitivity.
            </InfoTile>

            <InfoTile title="Colonoscopy" tone="amber">
              Gold standard for both diagnosis and early treatment. Colonoscopy not only detects colorectal cancer at
              its earliest stages, it also enables immediate removal of pre‑cancerous polyps during the same procedure —
              <strong> Where Treatment Begins While Screening.</strong>
            </InfoTile>
          </div>
        </Container>
      </Section>

      {/* PATHWAY */}
      <Section light>
        <Container>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <img
              src="/images/home/pathway-colonmodel.webp"
              alt="Clinician explaining colon screening with an anatomical model"
              loading="lazy"
              className="visual"
              style={{ maxWidth: 720 }}
            />
          </div>

          <h2 className="section-title">Your screening pathway with ColonAiQ®</h2>

          <div className="grid-4">
            <InfoTile title="1) Doctor consult" tone="blue">
              Confirm suitability based on age, risk and guidelines.
            </InfoTile>
            <InfoTile title="2) Blood draw" tone="green">
              A standard venous sample at a participating clinic or lab.
            </InfoTile>
            <InfoTile title="3) Lab analysis" tone="blue">
              DNA methylation assay using a PCR‑based workflow.
            </InfoTile>
            <InfoTile title="4) Guided follow‑up" tone="amber">
              Results can help prioritise diagnostic colonoscopy where appropriate.
            </InfoTile>
          </div>
        </Container>
      </Section>

      {/* PROGRAM SLOT */}
      <Section>
        <Container>
          <h2 className="section-title">Where it fits in population screening</h2>

          <div className="grid-2">
            <InfoTile title="For public programmes" tone="green">
              Use as a first‑line blood‑based screen for eligible adults. Positives triaged to colonoscopy; negatives
              continue routine intervals per guidelines.
            </InfoTile>
            <InfoTile title="For clinics & laboratories" tone="blue">
              Implementation kits and quality requirements available for certified partners. Training and onboarding
              support provided.
            </InfoTile>
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="button" onClick={() => onNavigate("clinics-labs")}>
              Implementation Details
            </button>
            <button className="button button-light" onClick={() => onNavigate("contact")}>
              Talk to Us
            </button>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section light>
        <Container center>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <img
              src="/images/home/evidence-colonmodel.webp"
              alt="Colon model cross‑section illustrating early detection"
              loading="lazy"
              className="visual"
              style={{ maxWidth: 520 }}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          </div>

          <h2 className="section-title">Ready to take the next step?</h2>
          <p className="subtle" style={{ maxWidth: 760, margin: "0 auto" }}>
            Find information for patients, or learn how to onboard your clinic or lab to offer ColonAiQ®.
          </p>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 14 }}>
            <button className="button" onClick={() => onNavigate("patients")}>
              For Patients
            </button>
            <button className="button" onClick={() => onNavigate("clinics-labs")}>
              For Clinics & Labs
            </button>
            <button className="button button-light" onClick={() => onNavigate("clinical-evidence")}>
              View Clinical Evidence
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
